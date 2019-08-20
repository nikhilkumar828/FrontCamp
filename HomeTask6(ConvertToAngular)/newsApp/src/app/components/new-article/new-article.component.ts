import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Posts } from '../../classes/posts';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {


  profileForm = new FormGroup({
    id: new FormControl('', Validators.required),
    postTitle: new FormControl('', Validators.required),
    postDate: new FormControl('', Validators.required),
    postCategory: new FormControl('', Validators.required),
    imageSrc: new FormControl('', Validators.required),
    postDesc: new FormControl('', [Validators.required , Validators.minLength(100)]),
  });

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.postsService.insertPostData(this.profileForm.value);
    this.router.navigate(['body', 'all']);
  }

  onCancel() {
    this.router.navigate(['body', 'all']);
  }

}
