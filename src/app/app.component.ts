import { Component, OnInit } from '@angular/core';
import { ObjectUtility } from './shared/utils/object.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-electron-app';

  ngOnInit() {
    ObjectUtility.clearStorage();
    console.log('reset');
  }
}
