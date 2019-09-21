import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'p-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.loading = this.contentheader;
    this.isShow= this.display;
  }

  @Input('content-header') contentheader: string='';
  @Input('is-display') display:boolean=false;
  loading: string;
  isShow:boolean;
  constructor() { }

  ngOnInit() {
    this.loading = this.contentheader;
   this.isShow= this.display;

   console.log("this.loading ",this.loading );
   console.log("this.isShow ",this.isShow );
  }

}
