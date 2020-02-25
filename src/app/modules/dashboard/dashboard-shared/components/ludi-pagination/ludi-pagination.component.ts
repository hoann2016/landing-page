import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ludi-pagination',
    templateUrl: './ludi-pagination.component.html',
    styleUrls: ['./ludi-pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LudiPaginationComponent implements OnInit, OnChanges {
    @Input('total') totalPage: number = 1;
    @Output('currentPageIsChanged') eventCurrentPageChange: EventEmitter<any> = new EventEmitter<any>();
    listPagePaginations: Array<number> = [];
    currentPageActive: number = 1;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(): void {
        if (this.totalPage && this.totalPage > 1) {
            this.listPagePaginations = Array(this.totalPage).fill(1).map((item: any, index: number) => index);
        }
    }

    /**
     * Go page function
     * When user click next or previous button pagination
     * It will be trigger and emit new current page to parent and change current page active on it
     * 
     * @params { isControl: Boolean }
     * @params { newPage: Number }
     * @params { isNext: Boolean }
     * @returns void
     */
    goPage(isControl: boolean, isNext: boolean, newPage: number): void {
        if (isControl) {
            if (isNext) {
                if (this.currentPageActive < this.listPagePaginations.length) {
                    this.currentPageActive = this.currentPageActive + 1;
                }
            } else {
                if (this.currentPageActive > 1) {
                    this.currentPageActive = this.currentPageActive - 1;
                }
            }
        } else {
            this.currentPageActive = newPage;
        }
        return this.emitPageChanged(this.currentPageActive);
    }

    /** 
     * Emit event to parent when page changed
     * @params { page: Number }
     * @returns void
     */
    emitPageChanged(page: number): void {
        this.eventCurrentPageChange.emit({ page });
    }
}
