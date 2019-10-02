import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from './shared/models/user-models/user-login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from './shared/models/user-models/user-register.model';
import { NewLetter } from './shared/models/new-letter.model';
import { TranslateService } from '@ngx-translate/core';
import { tap, catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private rooturl: string = "";
  private userLoginPath = "api/v1/authenticate/login";
  private userRegisterPath = "api/v1/users/register";
  private newLetterPath = "api/v1/leads";
  private getActivePackagePath = "api/v1/packages/activated";
  private getBusinessPath = "api/v1/merchants/business";
  get merchangePath() {
    return environment.merchantpath;
  }
  constructor(private http: HttpClient) {
    this.rooturl = environment.rootproto + environment.rootip + (environment.port ? `${environment.port}`: "" ) + environment.rootpath;
  }
  logIn(userLogin: UserLogin): Observable<any | string> {
    return this.http.post(this.rooturl + this.userLoginPath, userLogin).pipe(map(res=>res),catchError(error=>{throw error}
    ))
  }
  register(userRegister: UserRegister): Observable<any> {
    return this.http.post(this.rooturl + this.userRegisterPath, userRegister, httpOptions).pipe(tap(x=>{
      console.log(x);
    }));
  }
  sendNewLetter(newLetter: NewLetter): Observable<any> {
    return this.http.post(this.rooturl + this.newLetterPath, newLetter, httpOptions);
  }
  getActiveConfigPackage(): Observable<any> {
    return this.http.get(this.rooturl + this.getActivePackagePath);
    //return this.http.get("./assets/fake-response/all-packages.json");
  }
  getActiveSimplePackageById( packageId: string): Observable<any> {
      const getActiveSimplePackagePath = `api/v1/packages/${packageId}/simple`;
      return this.http.get(this.rooturl + getActiveSimplePackagePath);
    //return this.http.get("./assets/fake-response/all-packages.json");
  }
  getAllBusiness(): Observable<any> {
    //return this.http.get(this.rooturl + this.getBusinessPath);
    return this.http.get("./assets/fake-response/all-industries.json");
  }
  // renderError(Err,translate:TranslateService): string {
  //   console.log("error in service ",Err);
  //   var strError: string = '<ul class=\"err-list\">';
  //   if(Err.message!=null &&Err.message!=undefined)
  //   {
  //     if(typeof Err.message=='string')
  //     {
  //       strError += '<li>' + Err.message+'<li>';
  //     }else{
  //       console.log("type of Err.message", typeof Err.message);
  //       if (Err.message.length > 0) {
  //         for (let errItem of Err.message) {
  //           strError += '<li>' + translate.instant('Shared.CommunicationMessage.' + errItem.code) + ((errItem.field != null && errItem.field != undefined) ? (': ' + errItem.field) : '') + '<li>';
  //         }
  //       }
  //     }
  //   }
  //   strError += '</ul>'
  //   return strError;
  // }
}
