import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-custom-element';
  clinicalIDParent = 200;
  clinicalID;

  valueChanged(event) {
    this.clinicalID = this.clinicalIDParent;
  }
}
