import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { UniversalStorage } from '@shared/storage/universal.storage';

@Injectable({providedIn: 'root'})
export class LandingPageService {
  constructor(
    private _universalStorage: UniversalStorage,
  ) {}
  langSelected = new BehaviorSubject('en');
  packageSelected = new BehaviorSubject('');
  changeLanguage(lang) {
    if (lang === 'vi' || lang === 'en') {
        this.langSelected.next(lang);
      } else {
        this.langSelected.next('en');
      }

    this._universalStorage.setItem('langSelected', lang);
  }
  getLangSelected(): Observable<string> {
    if (this._universalStorage.getItem('langSelected') === 'en' ||
        this._universalStorage.getItem('langSelected') === 'vi') {
      this.langSelected.next(this._universalStorage.getItem('langSelected'));
    } else {
      this.langSelected.next('en');
    }
    return this.langSelected.asObservable();
  }

  selectPackage(packagename: string) {
    if (packagename) {
      sessionStorage.setItem('packageSelected', packagename);
      this.packageSelected.next(packagename);
    } else {
      this.packageSelected.next('');
    }
  }
  getSelectedPackage(): Observable<string> {
    if (sessionStorage.getItem('packageSelected')) {
      this.packageSelected.next(sessionStorage.getItem('packageSelected'));
    } else {
      this.packageSelected.next('');
    }
    return this.packageSelected.asObservable();
  }
}
