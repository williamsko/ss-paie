import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectUtility } from '../../shared/utils/object.utility';
import { FichePaie } from '../../shared/models/fiche-paie';

@Component({
  selector: 'app-edit-reportisng',
  templateUrl: './edit-reporting.component.html',
  styleUrls: ['./edit-reporting.component.scss'],
})
export class EditReportingComponent implements OnInit {
  ngOnInit(): void {
    this.code = this.router.snapshot.paramMap.get('code');
    this.fichesPaie = ObjectUtility.getFichesPaie(this.code);

    // localStorage.removeItem('c185e6ec72ce45da82d14efb7f9c5b1c');
  }
  title = 'dropzone';
  errors: number[] = [];

  files: File[] = [];
  fichesPaie: FichePaie[] = [];

  code: string;

  constructor(private router: ActivatedRoute) {}

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  onSelect(event) {
    console.log(event.addedFiles);
    event.addedFiles.forEach((element) => {
      this.getBase64(element).then((data) => {
        const fiche: FichePaie = {
          name: element.name,
          path: data,
        };
        ObjectUtility.storeFichesPaie(fiche, this.code);
        this.fichesPaie = ObjectUtility.getFichesPaie(this.code);
      });
    });
  }

  onRemove(event) {
    this.fichesPaie.splice(this.fichesPaie.indexOf(event), 1);
    ObjectUtility.forceStoreFichesPaie(this.fichesPaie, this.code);
  }

  public hasError(index: number): boolean {
    return this.errors.indexOf(index) !== -1;
  }

  public getFicheName(index: number): string {
    const data = this.fichesPaie[index];
    const d = JSON.parse(String(data));
    return d.name;
  }
}
