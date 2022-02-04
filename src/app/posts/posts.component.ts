import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app.error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-fount.error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts!: any[];


  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post['id'] = newPost.id;
        },
        (error: Response) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    // this.posts.splice(index, 1);

    this.service.delete(354)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has been already deleted');
          }
          else { throw error; }
        });
  }

  ngOnInit(): void {
    this.service.get()
      .subscribe(posts => this.posts = posts as any[]);
  }

}
