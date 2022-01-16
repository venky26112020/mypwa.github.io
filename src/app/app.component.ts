import { Component, OnInit } from '@angular/core';

interface Quote {
  text : string,
  author : string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PWALift';
  allquotes: Quote[] = []
  ngOnInit() {
    this.clickME()
  }
  public clickME(): void {
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    this.allquotes = data;
  });
  }
}
