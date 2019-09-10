import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit ,OnDestroy{
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private route:ActivatedRoute) { }
  sub:Subscription;
  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => console.log(" data passed",
        v
        ));
  }
  
 

}
