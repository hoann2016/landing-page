import { Injectable, Injector } from "@angular/core";
import { SelectBoxParams } from "./types";
import { Overlay, PositionStrategy, ConnectionPositionPair, OverlayConfig } from '@angular/cdk/overlay';
import { OverlayRef } from "@angular/cdk/overlay";
import { SelectBoxRef } from "./select-box.ref";
import { PortalInjector } from "./portal.injector";
import { ComponentPortal } from "@angular/cdk/portal";
import { SelectBoxComponent } from "./select-box.component";


@Injectable()
export class SelectBoxService {
    constructor(
        private overlay: Overlay,
        private injector: Injector
    ) { }

    open<T>({ origin, content, data, width, height }: SelectBoxParams<T>) {
        const overlayRef: OverlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height }));
        const selectBoxRef: SelectBoxRef = new SelectBoxRef<T>(overlayRef, content, data);
        const injector: PortalInjector = this.createInjector(selectBoxRef, this.injector);
        overlayRef.attach(new ComponentPortal(SelectBoxComponent, null, injector));
        return selectBoxRef;
    }

    private getOverlayConfig({ origin, width, height }): OverlayConfig {
        return new OverlayConfig({
            width,
            height,
            hasBackdrop: true,
            backdropClass: 'select-box-backdrop',
            positionStrategy: this.getOverlayPosition(origin),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }

    private getOverlayPosition(origin: HTMLElement): PositionStrategy {
        return this.overlay.position().flexibleConnectedTo(origin).withPositions(this.getPositions()).withPush(false);
    }

    private getPositions(): ConnectionPositionPair[] {
        return [
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
            },
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
            },
        ]
    }

    private createInjector(selecBoxRef: SelectBoxRef,  injector: Injector): PortalInjector {
        const tokens = new WeakMap([[SelectBoxRef, selecBoxRef]]);
        return new PortalInjector(injector, tokens);
    }
}
