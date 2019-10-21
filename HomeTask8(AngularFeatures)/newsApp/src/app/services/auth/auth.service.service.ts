import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { PostsService } from '../posts.service';
import { Store } from '@ngrx/store';
import * as InterfacePost from '../../store/posts.reducer';
import * as postActions from '../../store/posts.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  // tslint:disable-next-line: max-line-length
  constructor(public  afAuth: AngularFireAuth, public  router: Router , private postsService: PostsService , private store: Store<{posts: InterfacePost.State}> ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });

   }

   async  login(email: string, password: string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['body', 'cnn']);
        this.store.dispatch(new postActions.FetchPosts('cnn'));
        this.postsService.setUserName(email);
    } catch (e) {
        alert('Error!' +  e.message);
    }
    }

    async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}

}
