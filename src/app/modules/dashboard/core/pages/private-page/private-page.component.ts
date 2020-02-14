import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-private-page',
    templateUrl: './private-page.component.html',
    styleUrls: ['./private-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PrivatePageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
