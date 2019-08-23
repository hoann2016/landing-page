import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  langSelected=new BehaviorSubject("en")
  changeLanguage(lang){
    if(lang=="vi"||lang=="en")
    this.langSelected.next(lang);
    else
    this.langSelected.next("en");
    localStorage.setItem("langSelected",lang)
  }
  getLangSelected() :Observable<string>{
    if(localStorage.getItem("langSelected")=="en"||localStorage.getItem("langSelected")=="vi")
    {
      this.langSelected.next(localStorage.getItem("langSelected"));
    }else{
      this.langSelected.next("en");
    }
    return this.langSelected.asObservable();
  }
  constructor() { }
}
