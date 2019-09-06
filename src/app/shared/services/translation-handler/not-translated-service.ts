import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class NotTranslatedService {
    
    notTranslated(key: string) {
       console.log('Not translated', key);
       // do whatever you want...
    }
  }