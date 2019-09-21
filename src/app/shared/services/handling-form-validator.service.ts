import { Injectable } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, combineLatest, pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HandlingFormValidatorService {

  constructor(private landingPageService: LandingPageService, private translateService: TranslateService, private toastrService: ToastrService) { }

  private translateWraper(str): Observable<string> {
    const langObservable = this.landingPageService.getLangSelected();
    return langObservable.pipe(
      mergeMap(lang => {
        this.translateService.use(lang);
        return this.translateService.get(str);
      })
    )
  }
  private showToastError(content: string, error: string): void {
    this.toastrService.error(content, error, { onActivateTick: true })
  }

  public showErrorForm(myForm: FormGroup,cpName:string) {
    var listError = [];
    Object.keys(myForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = myForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          listError.push(
            this.translateWraper('Shared.FormCommon.' + keyError).pipe(
              mergeMap(result => {
                return this.translateService.get('Shared.FieldNameBaseCompnent.'+cpName+'.'+key).pipe(map(
                  res=>res+ ': ' + result
                ))
              })
              )
          );

        });

      }
    });
    //push header:
    const header = this.translateWraper('Shared.AppError.2');
    listError.push(header);
    var tempUSub =
      combineLatest(listError).subscribe((arrTranslated: string[]) => {
        var strErr: string = "<ul>"
        for (var i: number = 0; i < arrTranslated.length - 1; i++) {
          strErr += "<li>";
          strErr += arrTranslated[i];
          strErr += "</li>";
        }
        strErr += "</ul>";
        this.showToastError(strErr, arrTranslated[arrTranslated.length - 1]);
        setTimeout(() => {
          tempUSub.unsubscribe();
        }, 200)
      });
  }
}
