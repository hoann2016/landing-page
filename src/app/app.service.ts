import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from './shared/models/user-models/user-login.model';
import { UserLogedInModel } from './shared/models/user-models/user-logedin.model';
import { Observable, BehaviorSubject, pipe, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from './shared/models/user-models/user-register.model';
import { NewLetter } from './shared/models/new-letter.model';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private rooturl: string = "";
  private userLoginPath= "api/v1/authenticate/login";
  private userRegisterPath= "api/v1/users/register";
  private newLetterPath= "api/v1/leads";


  constructor(private http: HttpClient) {
    this.rooturl =environment.rootproto+ environment.rootip + ":" + environment.port+ environment.rootpath ;
  }
  logIn(userLogin: UserLogin): Observable<any|string> {   
    return this.http.post(this.rooturl + this.userLoginPath, userLogin,httpOptions)
 
  }
  register(userRegister: UserRegister): Observable<any> {
    return this.http.post(this.rooturl + this.userRegisterPath, userRegister,httpOptions);
  }

  sendNewLetter(newLetter:NewLetter):Observable<any>{
    return this.http.post(this.rooturl+this.newLetterPath,newLetter,httpOptions);
  }
}
