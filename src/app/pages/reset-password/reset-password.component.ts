import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './../sign-in/must-match.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    formResetPassword: FormGroup;
    submited: boolean = false;
    
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams: any) => {
            if (!queryParams || !queryParams.token) {
                this.router.navigateByUrl('/pages/404');
            }
            this.initFormResetPassword();
        })
    }

    private initFormResetPassword(): void {
        this.formResetPassword = this.fb.group({
            password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
            confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
        }, { validator: MustMatch('password', 'confirmPassword') });
    }
}
