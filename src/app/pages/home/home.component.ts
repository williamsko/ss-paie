import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  agent: any;
  constructor() { }

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    console.log(this.agent);
  }

}
