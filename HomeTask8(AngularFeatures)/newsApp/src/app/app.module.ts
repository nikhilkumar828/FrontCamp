import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BodyComponent } from './components/shared/body/body.component';

import { FormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { MainHeaderComponent } from './components/shared/body/main-header/main-header.component';
import { NewArticleComponent } from './components/admin/new-article/new-article.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/user/post-details/post-details.component';
import { LoginComponent } from './components/shared/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainHeaderComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AdminModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
