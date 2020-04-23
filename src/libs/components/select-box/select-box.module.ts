import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBoxComponent } from './select-box.component';
import { SelectBoxService } from './select-box.service';
@NgModule({
    declarations: [
        SelectBoxComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        SelectBoxService
    ],
    exports: [SelectBoxComponent],
    entryComponents: [SelectBoxComponent]
})
export class SelectBoxModule {
}
