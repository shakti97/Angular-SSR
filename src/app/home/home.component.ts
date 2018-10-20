import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  URL: string;
  constructor(private http: HttpClient){
      this.URL = `/api/posts`;
  }

  ngOnInit() {
    this.http.get(this.URL)
      .subscribe(resp => {
        this.posts = resp;
      });
  }

}
