import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './../sign-up/must-match.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { timer, Subject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from 'app/app.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    formResetPassword: FormGroup;
    submited: boolean = false;
    success: boolean = false;
    isExpired: boolean = false;
    timeCount$: Observable<number> = timer(0, 1000).pipe(take(3));
    queryParams: { token: string, email: string } = {
        token: null,
        email: null
    }
    loadingStatus: boolean = false;
    private _destroy$: Subject<boolean> = new Subject<boolean>();
    
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: AppService,
        private messageService: ToastrService,
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            if (!queryParams || !queryParams.token ||  !queryParams.email) {
                this.router.navigateByUrl('/pages/404');
            }
            this.queryParams.email = queryParams.email;
            this.queryParams.token = queryParams.token;
            this.initFormResetPassword();
        })
    }

    private initFormResetPassword(): void {
        this.formResetPassword = this.fb.group({
            password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
            confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
        }, { validator: MustMatch('password', 'confirmPassword') });
    }

    submitChangePassword(): void {
        this.submited = true;
        if (this.formResetPassword.valid) {
            this.loadingStatus = true;
            const formValue: any = this.formResetPassword.value;
            this.userService.resetPassword(formValue.password, formValue.confirmPassword, this.queryParams.token, this.queryParams.email).subscribe(
                () => {
                    this.success = true;
                    this.messageService.success(this.translateService.instant('ResetPassword.ChangeSuccessful'));
                    this.loadingStatus = false;
                    timer(3000).pipe(takeUntil(this._destroy$)).subscribe(_ => this.router.navigateByUrl('/pages/sign-in'));
                },
                (error: HttpErrorResponse) => {
                    this.loadingStatus = false;
                    if (error && error.error && error.error.message && error.error.message[0] && error.error.message[0].code === 1041) {
                        this.isExpired = true;
                    } else {
                        this.messageService.error(this.translateService.instant(`Shared.CommunicationMessage.${error.error.message[0].code}`), error.status.toString(), { positionClass: "toast-bottom-right" });
                    }
                }
            )
        }
    }

    ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.unsubscribe();
    }
}
