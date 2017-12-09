import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  daysControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', this.data);
  }

  ngOnInit() {
  }

}
