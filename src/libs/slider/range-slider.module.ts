import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RangeSliderComponent } from './range-slider.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        RangeSliderComponent
    ],
    exports: [RangeSliderComponent]
})
export class RangeSliderModule { }
