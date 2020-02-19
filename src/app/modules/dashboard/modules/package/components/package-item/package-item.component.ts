import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'pk-package-item',
	templateUrl: './package-item.component.html',
	styleUrls: ['./package-item.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackageItemComponent implements OnInit {
	@Input('package') packageData: any;

	constructor() { }

	ngOnInit() {
	}

}
