import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css',
})
export class TrainingComponent implements OnInit {
  isTrainStart: boolean = false;
  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    console.log('initialized');

    this.trainingService.exerciseDataTransference.subscribe((selectedExcer) => {
      console.log('subscribeed');
      if (selectedExcer) {
        console.log(
          'exercise is selected so it can show current training component'
        );
        this.isTrainStart = true;
      } else {
        this.isTrainStart = false;
        console.log(
          'exercise is not selected yet, its showing new-training component'
        );
      }
    });
  }
}
