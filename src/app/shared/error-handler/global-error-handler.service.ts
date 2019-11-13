import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../services/landing-page.service';
import { mergeMap } from 'rxjs/operators';
import { Observable, of, zip, combineLatest } from 'rxjs';
import { FormGroup, ValidationErrors } from '@angular/forms';
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(private injector: Injector) { }
    handleError(error: any  ) {
       console.log(error);
        if (error instanceof HttpErrorResponse) {
            if (error.error && error.error.message && error.error.message.length > 0) {
                var arrErrorObs = [];
                for (let itemError of error.error.message) {
                    arrErrorObs.push(this.translateWraper('Shared.CommunicationMessage.' + itemError.code));
                }
                const header = this.translateWraper('Shared.AppError.2');
                arrErrorObs.push(header);
                var tempUSub =
                    combineLatest(arrErrorObs).subscribe((arrTranslated: string[]) => {
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
            } else {
                const content = this.translateWraper('Shared.AppError.' + error.status);
                const header = this.translateWraper('Shared.AppError.2');
                const totalMessage = zip(content, header);
                var tempUSub = totalMessage.subscribe(mess => {
                    this.showToastError(mess[0], mess[1]);
                    console.error(error);
                });
                setTimeout(() => {
                    tempUSub.unsubscribe();
                }, 200)
            }
        } else {
            
            const content = this.translateWraper('Shared.FormCommon.undefined');
            const header = this.translateWraper('Shared.AppError.2');
            const totalMessage = zip(content, header);
            var tempUSub = totalMessage.subscribe(mess => {
                this.showToastError(mess[0], mess[1]);
            });
            setTimeout(() => {
                tempUSub.unsubscribe();
            }, 200)
        }
    }
    
    private showToastError(content: string, error: string): void {
        this.toastrService.error(content, error, { onActivateTick: true })
    }
    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }
    private get translateService(): TranslateService {
        return this.injector.get(TranslateService);
    }
    private get landingPageService(): LandingPageService {
        return this.injector.get(LandingPageService);
    }
     private translateWraper(str): Observable<string> {
        const langObservable = of('en');
        return langObservable.pipe(
            mergeMap(lang => {
                this.translateService.use(lang);
                return this.translateService.get(str);
            })
        )
    }
    
}