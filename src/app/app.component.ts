import { Component, ReflectiveInjector } from '@angular/core';
import {
  MyService
} from './services/MyService';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="invokeService()">Get Value</button>
  `
})
export class AppComponent {
  myService: MyService;
  
  constructor(){
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?: ', this.myService === injector.get(MyService));
  }

  invokeService() : void {
    console.log('MyService returned: ', this.myService.getValue());
  }
}
