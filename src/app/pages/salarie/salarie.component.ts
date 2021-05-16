import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salarie } from '../../shared/models/salarie';
import { ObjectUtility } from '../../shared/utils/object.utility';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss'],
})
export class SalarieComponent implements OnInit {
  agent: any;
  salaries: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    this.salaries = [];
    this.getSalaries();
  }

  public editReport(): void {
    this.router.navigate(['/edit-reporting/']);
  }

  private getSalaries(): void {
    const data = ObjectUtility.getSalaries();
    data.forEach((salary) => {
      this.salaries.push(JSON.parse(salary));
    });
  }

  public editSalarie(salarie) {
    localStorage.setItem('EDIT_SALARIE', JSON.stringify(salarie));
    this.router.navigate(['new-salarie']);
  }

  public newSalarie(): void {
    localStorage.removeItem('EDIT_SALARIE');
    this.router.navigate(['new-salarie']);
  }
}
