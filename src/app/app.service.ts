import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserLogin } from './shared/models/user-models/user-login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from './shared/models/user-models/user-register.model';
import { NewLetter } from './shared/models/new-letter.model';
import { UserOrder } from './shared/models/user-models/user-order.model';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private rooturl: string = '';
    private userLoginPath = 'api/v1/authenticate/login';
    private userRegisterPath = 'api/v1/users/register';
    private newLetterPath = 'api/v1/leads';
    private getActivePackagePath = 'api/v1/packages/activated';
    private getBusinessPath = 'api/v1/merchants/business-types';
    private orderPath = 'api/v1/orders';

    get merchantPath() {
        return environment.merchantPath;
    }

    constructor(private http: HttpClient) {
        this.rooturl = environment.rootproto + environment.rootip + (environment.port ? `:${environment.port}` : '') + environment.rootpath;
    }

    logIn(userLogin: UserLogin): Observable<any | string> {
        const headers = {
            headers: new HttpHeaders({ 'channel': 'landing-page' }),
        };
        return this.http.post(this.rooturl + this.userLoginPath, userLogin, headers)
            .pipe(
                map(res => res),
                catchError(error => {
                        throw error;
                    },
                ));
    }

    register(userRegister: UserRegister): Observable<any> {
        return this.http.post(this.rooturl + this.userRegisterPath, userRegister, httpOptions);
    }

    sendNewLetter(newLetter: NewLetter): Observable<any> {
        return this.http.post(this.rooturl + this.newLetterPath, newLetter, httpOptions);
    }

    getActiveConfigPackage(): Observable<any> {
        return this.http.get(this.rooturl + this.getActivePackagePath);
    }

    getActiveSimplePackageById(packageId: string): Observable<any> {
        const getActiveSimplePackagePath = `api/v1/packages/${packageId}/simple`;
        return this.http.get(this.rooturl + getActiveSimplePackagePath);
    }

    getAllBusiness(): Observable<any> {
        return this.http.get(this.rooturl + this.getBusinessPath);
    }

    getCurrentTax(id: number): Observable<any> {
        return this.http.get(`api/v1/tax/${id}`);
    }

    getBaseCurrency(id: number): Observable<any> {
        return this.http.get(`api/v1/currencies/${id}`);
    }

    submitOrder(userOrder: UserOrder): Observable<any> {
        return this.http.post(this.rooturl + this.orderPath, userOrder, httpOptions);
    }

    forgotPassword(email: string): Observable<any> {
        const url: string = 'api/v1/users/password-forgot';
        return this.http.post(this.rooturl + url, { email }, httpOptions);
    }

    resetPassword(password: string, confirmPassword: string, token: string, email: string): Observable<any> {
        const url: string = 'api/v1/users/password-reset';
        return this.http.put(this.rooturl + url, { password, confirmPassword, token, email }, httpOptions);
    }
}
