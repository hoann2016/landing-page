import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewEncapsulation, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { LudiTableGridControlModel } from '../../models/ludi-datatable/luditable-grid-control.model';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const SortingStatusConstant: any = {
    'ASC': 'DESC',
    'DESC': null,
    'null': 'ASC'
}

@Component({
    selector: 'app-ludi-datatable',
    templateUrl: './ludi-datatable.component.html',
    styleUrls: ['./ludi-datatable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class LudiDatatableComponent implements OnInit, OnDestroy {
    @Input('grid') gridControl: LudiTableGridControlModel<any>;
    @Output('eventSorting') eventSorting: EventEmitter<any> = new EventEmitter<any>();
    @Output('eventSearching') eventSearching: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('searching', { static: true }) searchingEl: ElementRef;
    private keywordTypingSubscription: Subscription;
    constructor() { }

    ngOnInit() {
        this.subscribe();
    }

    sortColumn(sortable: boolean, index: number): void {
        if (sortable) {
            this.gridControl.columns[index].sortingStatus = SortingStatusConstant[this.gridControl.columns[index].sortingStatus];
            if (this.gridControl.columns[index].columnQuery) {
                this.eventSorting.emit({[this.gridControl.columns[index].columnQuery]: this.gridControl.columns[index].sortingStatus});
            }
        }
    }

    private subscribe(): void {
        this.keywordTypingSubscription = fromEvent(this.searchingEl.nativeElement, 'keyup').pipe(
            debounceTime(1000),
            map((event: any) => event.target.value),
            distinctUntilChanged()
        ).subscribe((newValue: string) => {
            this.eventSearching.emit(newValue);
        });
    }

    ngOnDestroy() {
        if (this.keywordTypingSubscription) {
            this.keywordTypingSubscription.unsubscribe();
        }
    }
}
