import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewArticleComponent } from './new-article/new-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/services/posts.service';
import { AppComponent } from 'src/app/app.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BodyComponent } from '../shared/body/body.component';


@NgModule({
  declarations: [
    NewArticleComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
//   providers: [PostsService],
//   bootstrap: [AppComponent]
})
export class AdminModule { }
