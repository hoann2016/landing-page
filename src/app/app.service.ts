import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from './shared/models/user-models/user-login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from './shared/models/user-models/user-register.model';
import { NewLetter } from './shared/models/new-letter.model';
import { TranslateService } from '@ngx-translate/core';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private rooturl: string = "";
  private userLoginPath = "api/v1/authenticate/login";
  private userRegisterPath = "api/v1/users/register";
  private newLetterPath = "api/v1/leads";
  private getPackagePath = "api/v1/merchants/package/active";
  private getBusinessPath = "api/v1/merchants/business";
  get merchangePath() {
    return environment.merchantpath;
  }
  constructor(private http: HttpClient) {
    this.rooturl = environment.rootproto + environment.rootip + ":" + environment.port + environment.rootpath;
  }
  logIn(userLogin: UserLogin): Observable<any | string> {
    return this.http.post(this.rooturl + this.userLoginPath, userLogin, httpOptions)
  }
  register(userRegister: UserRegister): Observable<any> {
    return this.http.post(this.rooturl + this.userRegisterPath, userRegister, httpOptions);
  }
  sendNewLetter(newLetter: NewLetter): Observable<any> {
    return this.http.post(this.rooturl + this.newLetterPath, newLetter, httpOptions);
  }
  getAllPackage(): Observable<any> {
    //return this.http.get(this.rooturl + this.getPackagePath);
    return this.http.get("./assets/fake-response/all-packages.json");
  }
  getAllBusiness(): Observable<any> {
    //return this.http.get(this.rooturl + this.getBusinessPath);
    return this.http.get("./assets/fake-response/all-industries.json");
  }
  renderError(messageErr: any[],translate:TranslateService): string {
    var strError: string = '<ul class=\"err-list\">';
    if (messageErr.length > 0) {
      for (let errItem of messageErr) {
        strError += '<li>' + translate.instant('Shared.CommunicationMessage.' + errItem.code) + ((errItem.field != null && errItem.field != undefined) ? (': ' + errItem.field) : '') + '<li>';
      }
      strError += '</ul>'
    }
    return strError;
  }
}
