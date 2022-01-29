import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.componenet';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { TitleCaseComponent } from './title-case/title-case.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format.directive';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormArrayComponent } from './new-course-form-array/new-course-form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './routing/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveComponent } from './routing/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    TitleCaseComponent,
    LikeComponent,
    ZippyComponent,
    InputFormatDirective,
    NewCourseFormComponent,
    SignupFormComponent,
    NewCourseFormArrayComponent,
    FormBuilderComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotfoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'git',
        component: NavbarComponent
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      },
    ])

  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
