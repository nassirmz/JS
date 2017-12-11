import { Component, OnInit } from '@angular/core';
import { DAYS } from '../days';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  days = DAYS;

  constructor() { }

  ngOnInit() {
  }

}
