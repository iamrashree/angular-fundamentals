import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = '';

  tweet = {
    body: '...',
    likedCount: 10,
    isLiked: true
  }
}
