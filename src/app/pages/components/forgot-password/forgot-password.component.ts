import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from '@shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    formForgotPassword: FormGroup;
    submited: boolean = false;
    errorMessage: string;
    successed: boolean = false;
    timeCount$: Observable<number> = timer(0, 1000).pipe(take(5));
    loadingStatus: boolean = false;
    @Output('dialogShouldBeClosed') closeDialogEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
        private messageService: ToastrService,
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.initFormForgotPassword();
    }

    private initFormForgotPassword(): void {
        this.formForgotPassword = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)]],
        });
    }

    public goToLogin(): void {
        this.closeDialogEvent.emit(true);
    }

    public submitForgotPassword(): void {
        this.submited = true;
        if (this.formForgotPassword.valid) {
            this.loadingStatus = true;
            this.userService.forgotPassword(this.formForgotPassword.value!.email).subscribe(
                () => {
                    this.successed = true;
                    timer(5000).subscribe(_ => this.closeDialogEvent.emit(true));
                    this.loadingStatus = false;
                },
                (error: HttpErrorResponse) => {
                    this.loadingStatus = false;
                    if (error && error.error && error.error.message && error.error.message[0] && error.error.message[0].code) {
                        this.messageService.error(this.translateService.instant(`Shared.CommunicationMessage.${error.error.message[0].code}`), error.status.toString(), { positionClass: "toast-bottom-right" });
                    }
                }
            );
        }
    }
}
