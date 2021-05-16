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

    // localStorage.removeItem('0e2100610aca4d77a13f0b00805bce4a');
  }
  title = 'dropzone';
  errors: number[] = [];

  files: File[] = [];
  fichesPaie: FichePaie[] = [];

  code: string;

  constructor(private router: ActivatedRoute) {}

  onSelect(event) {
    event.addedFiles.forEach((element) => {
      const fiche: FichePaie = {
        name: element.name,
        path: element.path,
      };
      ObjectUtility.storeFichesPaie(fiche, this.code);
    });
    this.fichesPaie = ObjectUtility.getFichesPaie(this.code);
  }

  onRemove(event) {
    this.fichesPaie.splice(this.fichesPaie.indexOf(event), 1);
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
