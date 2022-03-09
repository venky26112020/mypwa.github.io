import { Component, OnInit } from '@angular/core';

interface Quote {
  text: string,
  author: string
}
@Component({
  selector: 'app-quations',
  templateUrl: './quations.component.html',
  styleUrls: ['./quations.component.css']
})
export class QuationsComponent implements OnInit {
  allquotes: Quote[] = []
  constructor() { }

  ngOnInit(): void {
    this.getAllQuations();
  }

  private getAllQuations(): void {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.allquotes = data;
      });
  }
}
