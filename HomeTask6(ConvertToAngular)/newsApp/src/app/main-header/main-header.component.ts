import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  categories: string[] =  ['all', 'cnn', 'bcc', 'cnbc', 'fortune', 'google-news', 'metro', 'mirror', 'talksport', 'time', 'the-hindu'];
  selectedSourceTitle = 'all';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSelectSource(source: string): void {
    this.router.navigate(['body', source]);
  }

}
