import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  followers!: any[];
  ngOnInit(): void {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(switchMap((combined: any[]) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        console.log(id, page);

        return this.service.get();
      })).subscribe(followers => this.followers = followers as any[])

  }

}
