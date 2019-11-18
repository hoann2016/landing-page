import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LandingPageService {
  constructor() {}
  packageSelected = new BehaviorSubject('');

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
