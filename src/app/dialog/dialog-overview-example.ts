import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogOverviewExampleDialog} from './dialog-overview-example-dialog'

@Component({
  selector: 'dialog-overview-example',
  templateUrl: './dialog-overview-example.html',
  styleUrls :['./dialog-overview-example.css']
})
export class DialogOverviewExample {
  constructor(private dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}
