import { Component } from '@angular/core';

import { ApiService } from '../services';

import '../style/app.scss';
import '../style/custom-blue.css';
@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  // styleUrls:['homepage.css'],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
