import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[buttonLoading]'
})
export class LoadingDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }
    @Input('defaultText') defaultText: string;
    @Input() set buttonLoading(conditionToShowLoading: boolean) {
        this.el.nativeElement.innerHTML = '';
        const textView = this.renderer.createText(this.defaultText);
        if (conditionToShowLoading) {
            const resultCreateElement: ElementRef = this.createDomLoadingElement();
            this.renderer.appendChild(this.el.nativeElement, resultCreateElement);
        } else {
            this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
            this.renderer.appendChild(this.el.nativeElement, textView);
        }
    }

    createDomLoadingElement(): ElementRef {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
        const li = this.renderer.createElement('div');
        this.renderer.addClass(li, 'spinner-grow');
        this.renderer.addClass(li, 'spinner-grow-sm');
        return li;
    }
}