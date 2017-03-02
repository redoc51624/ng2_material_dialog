import {Component,Injectable} from '@angular/core';
import {Http ,  Response} from '@angular/http';


@Injectable()
@Component({
  selector: 'dialog-child-content',
  templateUrl: './dialog-child-content.html',
  styleUrls: ['./dialog-child-content.css']
})
export class DialogChildContent {

    results: Object;
    constructor(http: Http){
      this.results = [];
      http.get('https://jsonplaceholder.typicode.com/users').map((res: Response) => res.json())
      .subscribe(res => this.results = res);
    }

}
