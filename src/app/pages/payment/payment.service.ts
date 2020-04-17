import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Checkout, Order} from './payment.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class PaymentService {
    private rooturl: string = '';
    private ORDER_EP = 'api/v1/orders';
    private GET_PAYOO_BANKCODE_EP = 'api/v1/payments/payoo/banks';
    private CHECKOUT_EP = 'api/v1/payments/payoo/checkout';
    private VERIFY_CHECKSUM_EP = 'api/v1/payments/payoo/checksum';

    constructor(private http: HttpClient) {
        this.rooturl = environment.rootproto + environment.rootip + (environment.port ? `:${environment.port}` : '') + environment.rootpath;
    }

    getActiveSimplePackageById(packageId: string): Observable<any> {
        const getActiveSimplePackagePath = `api/v1/packages/${packageId}/simple`;
        return this.http.get(this.rooturl + getActiveSimplePackagePath);
    }

    getCurrentTax(id: number): Observable<any> {
        return this.http.get(`api/v1/tax/${id}`);
    }

    getBaseCurrency(id: number): Observable<any> {
        return this.http.get(`api/v1/currencies/${id}`);
    }

    getPayooBankCode(): Observable<any> {
        return this.http.get(this.rooturl + this.GET_PAYOO_BANKCODE_EP);
    }

    createOrder(order: any): Observable<any> {
        return this.http.post(this.rooturl + this.ORDER_EP, order, httpOptions);
    }

    updateOrderStatus(order: Order): Observable<any> {
        return this.http.put(this.rooturl + this.ORDER_EP, order, httpOptions);
    }

    checkout(checkout: Checkout):  Observable<any> {
        return this.http.post(
            this.rooturl + this.CHECKOUT_EP, 
            checkout,
            httpOptions
        );
    }
    
    verifyChecksum(checksum: string, session: string, orderNumber: string, status: string): Observable<any> {
        return this.http.post(
            this.rooturl + this.VERIFY_CHECKSUM_EP, 
            {
                checksum,
                session,
                orderNumber,
                status
            },
            httpOptions
        );
    }
    
}
