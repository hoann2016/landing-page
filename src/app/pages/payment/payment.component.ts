import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Order, Checkout, Banks, Payment, CheckoutReponse} from './payment.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
import {PaymentService} from './payment.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService,
        private paymentService: PaymentService,
        private appService: AppService,
        private toastr: ToastrService,
    ) { }
    state$: Observable<object>;
    checkoutReponse: CheckoutReponse;
    banks: Banks[];
    cc: Banks[];
    order: Order;
    paymentSession: Payment;
    paymentSessionStatus = {
        NEW: 'new',
        SUBMITTED_ORDER: 'submited_order',
        PAID: 'paid'
    };
    packages: any;
    configPackages: any;
    selectedBank: string;
    endDate: string;
    tax: number;
    channel_id: number;
    currency_id: number;
    showLoading: boolean = false;

    getDate(n: number): string {
        const date = new Date();
        const mm: Date = new Date(date.setMonth(date.getMonth() + n));
        const currentDate: string = mm.getDate() < 10 ? '0' + mm.getDate() : mm.getDate() + '';
        const currentMonth: string = (mm.getMonth() + 1) < 10 ? '0' + (mm.getMonth() + 1) : (mm.getMonth() + 1) + '';
        const strDate: string = currentDate + '/' + currentMonth + '/' + mm.getFullYear();
        return strDate;
    }

    getSimplePackage(packageId: string) {
        return new Promise((resolve, reject) => {
            this.paymentService.getActiveSimplePackageById(packageId).subscribe((response) => {
                if (response.success === true) {
                    resolve(response.data.packages);
                }
            }, err => {
                reject(err);
            });
        });
    }

    loadQueryParams () {
        this.route.queryParams.subscribe(params => {
            if (params) {
                if (params.status !== '1' && params.errorcode && params.errormsg) {
                    throw { code: params.errorcode, msg: params.errormsg }; 
                }
                this.checkoutReponse = {
                    session: params.session,
                    order_no: params.order_no,
                    status: params.status,
                    paymentMethod: params.paymentMethod,
                    checksum: params.checksum
                };
            }
        });
    }

    loadState () {
        this.state$ = this.route.paramMap
        .pipe(
            map(() =>
                window.history.state
            )
        );
        this.state$.subscribe(async (p: any) => {
            if (p !== null && p !== undefined && p.id) {
                if (p.activatedConfigPackages) { p.activatedConfigPackages.splice( 0, 1); }
                this.configPackages = p.activatedConfigPackages;
                this.packages = await this.getSimplePackage(p.selectedConfigPackage);
                sessionStorage.setItem('configPackages', this.configPackages ? JSON.stringify(this.configPackages) : '[]');
                sessionStorage.setItem('packages', this.configPackages ? JSON.stringify(this.packages) : '[]');
                this.paymentSession = {
                    customer: {
                        id: p.id,
                        name: p.name,
                        email: p.email,
                        phone: p.phone,
                        address: 'n/a',
                        credentials: p.userCredentials
                    },
                    selectedConfigPackage: this.configPackages 
                                            ? this.configPackages.filter(configPackage => configPackage.id === p.selectedConfigPackage)[0]
                                            : {},
                    selectedPackage: this.packages[0],
                    bonusDate: this.packages[0].bonus_duration,
                    startDate: this.getDate(0),
                    endDate: this.getDate(this.packages[0].duration + this.packages[0].bonus_duration),
                    paymentMethod: 'Pay-later', // set default payment
                    bankCode: '',
                    status: this.paymentSessionStatus.NEW,
                    orderNumber: '',
                    checksum: ''
                };
                this.order = {
                    id: 0,
                    order_number: '',
                    merchant_id: p.id,
                    currency_id: 1,
                    package_id: this.packages[0].id,
                    channel_id: 1,
                    sub_totals: this.packages[0].price,
                    tax: this.tax,
                    status: '',
                    grand_totals: this.packages[0].price - (this.packages[0].price * this.tax / 100),
                    payment_method: this.paymentSession.paymentMethod
                };
                sessionStorage.setItem('paymentSession', JSON.stringify(this.paymentSession));
                sessionStorage.setItem('order', JSON.stringify(this.order));
            } else {
                const paymentSession = sessionStorage.getItem('paymentSession');
                const order = sessionStorage.getItem('order');
                const packages = sessionStorage.getItem('packages');
                const configPackages = sessionStorage.getItem('configPackages');
                console.log('configPackages', !configPackages);
                if (!paymentSession || !packages || !order || !configPackages) {
                    this.router.navigate(['/pages/sign-up']);
                }
                this.paymentSession = JSON.parse(paymentSession);
                this.packages = JSON.parse(packages);
                this.order = JSON.parse(order);
                this.configPackages = JSON.parse(configPackages);
            }
        });
    }

    verifyCheckout() {
        if (!this.checkoutReponse || !this.paymentSession) {
            return;
        }
        if (this.paymentSession.orderNumber === this.checkoutReponse.order_no) {
            this.showLoading = true;
            const {checksum, session, order_no, status} = this.checkoutReponse;
            if (this.paymentSession.status === this.paymentSessionStatus.PAID) {
                return;
            }
            this.paymentSession.status = this.paymentSessionStatus.PAID;
            sessionStorage.setItem('paymentSession', JSON.stringify(this.paymentSession));
            this.paymentService.verifyChecksum(checksum, session, order_no, status).subscribe((response: any) => {
                if (response.success && response.data.result) {
                    const {customer} = this.paymentSession;
                    this.order.status = 'payment_recieved';
                    this.paymentService.updateOrderStatus(this.order).subscribe((updateResponse: any) => {
                        if (updateResponse.success) {
                            this.toastr.success(this.translate.instant('Payment.PaymentSuccessfully'));
                            sessionStorage.removeItem('paymentSession');
                            this.showLoading = false;
                            this.router.navigateByUrl('/pages/clone-site', { 
                                state: 
                                { 
                                    merchantId: customer.id, 
                                    userCredentials: customer.credentials
                                } 
                            });
                        }
                    }, err => {
                        this.showLoading = false;
                        throw err;
                    });
                }
            }, err => {
                this.showLoading = false;
                throw err;
            });
        }
    }

    loadBankCodes() {
        this.paymentService.getPayooBankCode().subscribe((response: any) => {
            if (response.success === true) {
                this.banks = response.data.bank;
                this.cc = response.data.cc;
            }
        },
        err => {
            throw err;
        });
    }

    ngOnInit() {
        this.tax = 0;
        this.channel_id = 1;
        this.currency_id = 1;
        this.loadQueryParams();
        this.loadState();
        this.verifyCheckout();
        this.loadBankCodes();
    }

    selectDate(evt) {
        this.paymentSession.endDate = this.getDate(evt.target.value);
    }

    changePackage(value: any) {
        this.paymentSession.selectedPackage = this.packages[value];
        this.paymentSession.endDate = this.getDate(
            this.paymentSession.selectedPackage.duration 
            + this.paymentSession.selectedPackage.bonus_duration);
        this.paymentSession.bonusDate = this.paymentSession.selectedPackage.bonus_duration;
        this.order.package_id = this.paymentSession.selectedPackage.id;
        this.order.sub_totals = this.paymentSession.selectedPackage.price;
        this.order.grand_totals = this.paymentSession.selectedPackage.price - (this.paymentSession.selectedPackage.price * this.tax / 100);
    }

    async changeConfigPackage(value: any) {
        this.paymentSession.selectedConfigPackage = this.configPackages[value];
        this.packages = await this.getSimplePackage(this.paymentSession.selectedConfigPackage.id);
        this.changePackage(0);
    }

    changePayment(evt) {
        this.paymentSession.paymentMethod = evt.target.value;
        this.order.payment_method = evt.target.value;
    }

    changeBankCode(bankCode) {
        this.paymentSession.bankCode = bankCode;
    }

    redirectPaymentGate() {
        if (this.paymentSession.paymentMethod) {
            sessionStorage.removeItem('paymentSession');
            window.location.href = this.appService.merchantPath;
        } else {
            const content: string = this.translate.instant('Payment.RequireSelectPayment');
            const error: string = this.translate.instant('Shared.AppError.2');
            this.toastrService.error(content, error);
        }
    }

    redirectToThankPage(redirectValues) {
        this.router.navigateByUrl('/pages/thank-you', { state: redirectValues });
    }

    submitCheckout() {
        const {customer, paymentMethod, bankCode} =  this.paymentSession;
        const checkout: Checkout = {
            order: {
                package_id: this.order.package_id,
                order_id: this.order.id,
                order_number: this.order.order_number,
                grand_totals: this.order.grand_totals
            },
            customer: {
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
            },
            bankCode: bankCode,
            paymentMethod: paymentMethod
        };
        this.paymentService.checkout(checkout).subscribe((checkoutResponse) => {
            if (checkoutResponse.success && checkoutResponse.data.result === 'success') {
                const { data: { order } } = checkoutResponse;
                window.location.href = order.payment_url;
            }
        }, err => {
            this.showLoading = false;
            throw err;
        });
    }

    checkout() {
        this.showLoading = true;
        if (this.paymentSession.status === this.paymentSessionStatus.PAID) {
            this.toastr.success(this.translate.instant('Payment.AlreadyPaid'));
            this.showLoading = false;
        }
        if (this.paymentSession.status !== this.paymentSessionStatus.SUBMITTED_ORDER ) {
            const {id, order_number, ...orderAttrs} = this.order;
            this.paymentService.createOrder(orderAttrs).subscribe((response) => {
                if (response.success === true) {
                    const submitedOrder = response.data;
                    this.paymentSession.status = this.paymentSessionStatus.SUBMITTED_ORDER;
                    this.paymentSession.orderNumber = submitedOrder.orderNumber;
                    this.order.order_number = submitedOrder.orderNumber;
                    this.order.id = submitedOrder.orderId;
                    this.order.status = submitedOrder.orderStatus;
                    sessionStorage.setItem('paymentSession', JSON.stringify(this.paymentSession));
                    sessionStorage.setItem('order', JSON.stringify(this.order));
                    if (this.paymentSession.paymentMethod !== 'CC' && this.paymentSession.paymentMethod !== 'Bank-account') {
                        this.showLoading = false;
                        this.toastr.success(this.translate.instant('SignUp.SignUpSuccess'));
                        const order = response.data;
                        this.redirectToThankPage(order);
                    } else {
                        this.submitCheckout();
                    }
                }
            }, err => {
                this.showLoading = false;
                throw err;
            });
        } else {
            this.submitCheckout();
        }
    }

    trackByCode(_index: number, el: any): string {
        return el.code;
    }
}
