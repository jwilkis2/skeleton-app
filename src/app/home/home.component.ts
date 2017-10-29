import { Component, OnInit } from '@angular/core';
import { TwoButtonComponent } from '../two-button/two-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  twoButton: TwoButtonComponent;
  constructor() {}

  ngOnInit() {
  }

}
