import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWALift';
  public clickME(event: any): number {
    const a = 5;
    const b = 6;
    const c = a + b;
    console.log('hello', event);
    return c;
  }
}
