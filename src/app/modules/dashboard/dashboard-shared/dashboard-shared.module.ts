import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LudiDatatableComponent } from './components/ludi-datatable/ludi-datatable.component';
import { LudiPaginationComponent } from './components/ludi-pagination/ludi-pagination.component';

@NgModule({
    declarations: [LudiDatatableComponent, LudiPaginationComponent],
    imports: [
        CommonModule
    ],
    exports: [LudiDatatableComponent, LudiPaginationComponent]
})
export class DashboardSharedModule { }
