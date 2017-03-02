import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogChildContent} from './dialog-child-content'

@Component({
  selector: 'dialog-child',
  templateUrl: './dialog-child.html',
  styleUrls :['./dialog-child.css']
})
export class DialogChild {
  constructor(private dialog: MdDialog) {}

  openChildDialog() {
    this.dialog.open(DialogChildContent);
  }
}
