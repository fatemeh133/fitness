import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent {
  @Output() startTrain = new EventEmitter<void>();

  starttrain() {
    this.startTrain.emit();
  }
}
