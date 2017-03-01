import {Component,Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/importer/map';

@Injectable()
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.css']
})
export class DialogOverviewExampleDialog {

constructor(private http: Http){}
get(){
  return this.http.get('userData')
  .map(response =>{response.json.userDetail});
}


}
