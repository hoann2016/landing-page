import { Injectable } from "@angular/core";
import { ApiBaseService } from "./api-base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService extends ApiBaseService {
    constructor(
        protected http: HttpClient
    ) {
        super(http);
    }

    forgotPassword(email: string): Observable<any> {
        const url: string = 'users/password/forgot';
        return super.post(url, { email });
    }

    resetPassword(password: string, confirmPassword: string, token: string, email: string): Observable<any> {
        const url: string = 'users/password/reset';
        return super.post(url, { password, confirmPassword, token, email });
    }
}