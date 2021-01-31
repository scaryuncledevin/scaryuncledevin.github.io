import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-cache',
  templateUrl: './google-cache.page.html',
  styleUrls: ['./google-cache.page.scss'],
})
export class GoogleCachePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkCache() {
    this.url = this.url.trim().replace(/http(s?):\/\//, '');
    window.location.href = `http://webcache.googleusercontent.com/search?q=cache:${this.url}`;
  }

  url = '';
}
