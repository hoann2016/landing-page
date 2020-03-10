import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

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
    @Output('dialogShouldBeClosed') closeDialogEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(
        private fb: FormBuilder,
        private router: Router
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
            this.successed = true;
            timer(5000).subscribe(_ => this.closeDialogEvent.emit(true));
        }
    }
}
