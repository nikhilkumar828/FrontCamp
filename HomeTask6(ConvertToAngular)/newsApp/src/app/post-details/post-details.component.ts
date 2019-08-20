import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data: Posts ;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.setData(routeParams.id);
    });
  }

  setData(id: string) {
   this.data = this.postsService.getPostByID(id);
  }

}
