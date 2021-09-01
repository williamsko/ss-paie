import { Component, OnInit } from '@angular/core';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  agent: any;
  constructor() {}

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    console.log(this.agent);
  }

  public getTotalSalaries(): number {
    return ObjectUtility.getTotalSalaries();
  }
}
