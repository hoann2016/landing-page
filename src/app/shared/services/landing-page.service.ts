import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LandingPageService {
  constructor() {}
  langSelected = new BehaviorSubject('en')
  packageSelected = new BehaviorSubject('')
  changeLanguage(lang) {
    if (lang == 'vi' || lang == 'en')
      this.langSelected.next(lang);
    else
      this.langSelected.next('en');
    localStorage.setItem('langSelected', lang)
  }
  getLangSelected(): Observable<string> {
    if (localStorage.getItem('langSelected') == 'en' ||
        localStorage.getItem('langSelected') == 'vi') {
      this.langSelected.next(localStorage.getItem('langSelected'));
    } else {
      this.langSelected.next('en');
    }
    return this.langSelected.asObservable();
  }

  selectPackage(packagename: string) {
    if (packagename) {
      localStorage.setItem('packageSelected', packagename);
      this.packageSelected.next(packagename)
    } else {
      this.packageSelected.next('')
    }
  }
  getSelectedPackage(): Observable<string> {
    if (localStorage.getItem('packageSelected')) {
      this.packageSelected.next(localStorage.getItem('packageSelected'));
    } else {
      this.packageSelected.next('');
    }
    return this.packageSelected.asObservable();
  }
}
