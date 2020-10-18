import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-button',
  template: ` 
  <h3>Custom App Component</h3> 
  <div *ngIf="clinicalID?true:false">
  Value Received: {{clinicalID}}
  <br/>
  <p>{{serverData}}</p>
  <br/>
  <button (click)="emitToParent()">Push to Parent App</button>
  <br/>
  </div>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {

  @Input() clinicalID = 0;
  @Output() outputFromCustom = new EventEmitter<any>();

  // private numberOfClicks = 0;
  serverData;

  constructor(private sampleService: SampleService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.clinicalID.currentValue) {
      console.log(changes);
      this.clinicalID = changes.clinicalID.currentValue;
      // this.emitToParent();
    }
  }

  emitToParent() {
    this.sampleService.getMockData(this.clinicalID).subscribe(params => this.serverData = JSON.stringify(params));
    this.outputFromCustom.emit("Value emitted from custom element  " + this.clinicalID);
  }

}
