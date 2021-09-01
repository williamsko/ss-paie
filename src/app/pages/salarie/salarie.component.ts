import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salarie } from '../../shared/models/salarie';
import { ObjectUtility } from '../../shared/utils/object.utility';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss'],
})
export class SalarieComponent implements OnInit {
  agent: any;
  salaries: any;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.agent = JSON.parse(localStorage.getItem('AGENT'));
    this.salaries = [];
    // ObjectUtility.clearSalaries()
    this.getSalaries();
  }

  public editReport(): void {
    this.router.navigate(['/edit-reporting/']);
  }

  private getSalaries(): void {
    const data = ObjectUtility.getSalaries();
    if (data !== null) {
      data.forEach((salary) => {
        this.salaries.push(JSON.parse(salary));
      });
    }
  }

  public editSalarie(salarie) {
    localStorage.setItem('EDIT_SALARIE', JSON.stringify(salarie));
    this.router.navigate(['new-salarie']);
  }

  public newSalarie(): void {
    localStorage.removeItem('EDIT_SALARIE');
    this.router.navigate(['new-salarie']);
  }

  public clearSalaries(): void {
    localStorage.removeItem('SALARIES');
    window.location.reload();
  }

  private recordSalarie(
    firstName,
    lastName,
    email,
    phone,
    matricule,
    password
  ) {
    const salarie: Salarie = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      matricule: matricule,
      password: password,
    };
    console.log(salarie);
    ObjectUtility.storeSalaries(salarie, false);
    window.location.reload();
  }

  public uploadSalaries(e) {
    try {
      const fileName = e.target.files[0].name;

      import('xlsx').then((xlsx) => {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        // const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = xlsx.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          const salaries = jsonData[Object.keys(jsonData)[0]];
          salaries.forEach((salarie) => {
            this.recordSalarie(
              salarie['Prénoms'],
              salarie['Nom'],
              salarie['Email'],
              salarie['Téléphone'],
              salarie['Matricule'],
              salarie['Mot de passe']
            );
            ObjectUtility.storeSalarie(
              salarie['Matricule'],
              salarie['Email'],
              salarie['Mot de passe']
            );
          });
        };
        reader.readAsBinaryString(e.target.files[0]);
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log('OK');
        },
        (reason) => {
          console.log('OK');
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
