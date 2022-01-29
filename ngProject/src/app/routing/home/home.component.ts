import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  archives = [
    { year: 2022, month: 1 },
    { year: 2022, month: 2 },
    { year: 2022, month: 3 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
