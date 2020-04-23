import { SelectBoxCloseEvent } from "./select-box.model";
import { Subject, Observable } from "rxjs";
import { SelectBoxContent } from "./types";
import { OverlayRef } from '@angular/cdk/overlay';

export class SelectBoxRef<T = any> {
    private afterCloseSource: Subject<SelectBoxCloseEvent<T>> = new Subject<SelectBoxCloseEvent<T>>();
    public afterClose$: Observable<SelectBoxCloseEvent<T>> = this.afterCloseSource.asObservable();

    constructor(public overlay: OverlayRef, content: SelectBoxContent, public data: T) {
        overlay.backdropClick().subscribe(() => this._close('backdropClick', data));
    }

    close(data?: T) {
        this._close('close', data);
    }

    private _close(type, data): void {
        this.overlay.dispose();
        this.afterCloseSource.next({
            type, data
        });
        this.afterCloseSource.complete();
    }
}