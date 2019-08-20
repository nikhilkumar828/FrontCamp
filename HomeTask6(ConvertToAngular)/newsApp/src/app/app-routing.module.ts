import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { BodyComponent } from './components/body/body.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/body/all', pathMatch: 'full' },
  { path: 'body/:src', component: BodyComponent },
  { path: 'NewArticle', component: NewArticleComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
