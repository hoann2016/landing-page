import { Injectable } from "@angular/core";
import { ApiBaseService } from "./api-base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private ROOT_API = `${ environment.rootproto }${ environment.rootip }`;
    private ROOT_PORT = environment.isServer ? '' : `:${ environment.port }`;
    private API_URL_PATH = '/';
    private SEGEMENT = 'api/v1/';
    private API_URL = this.ROOT_API + this.ROOT_PORT + this.API_URL_PATH + this.SEGEMENT;
    constructor(
        protected http: HttpClient
    ) {
    }

    forgotPassword(email: string): Observable<any> {
        const url: string = 'users/password/forgot';
        return this.http.post(this.API_URL + url, { email });
    }

    resetPassword(password: string, confirmPassword: string, token: string, email: string): Observable<any> {
        const url: string = 'users/password/reset';
        return this.http.post(this.API_URL + url, { password, confirmPassword, token, email });
    }
}