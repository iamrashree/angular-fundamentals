import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  public isFavorite = false;
  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
