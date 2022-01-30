import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 2, order: 'latest' }
    })
  }

}
