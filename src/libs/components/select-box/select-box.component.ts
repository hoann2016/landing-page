import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectBoxContent } from './select-box.model';
import { SelectBoxRef } from './select-box.ref';

@Component({
    selector: 'lib-select',
    templateUrl: './select-box.component.html',
    styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
    renderMethod: 'template' | 'component' | 'text' = 'component';
    content: SelectBoxContent;
    context;

    constructor(private selectRef: SelectBoxRef) {
    }

    ngOnInit() {
        if (typeof this.content === 'string') {
            this.renderMethod = 'text';
        } else if(this.content instanceof TemplateRef) {
            this.renderMethod = 'template';
            this.context = {
                close: this.selectRef.close.bind(this.selectRef)
            }
        }
    }
}
