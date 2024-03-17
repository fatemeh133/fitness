import { TrainingService } from './../training/training.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css',
})
export class PastTrainingComponent {
  displayedColumns: string[] = [
    'name',
    'duration',
    'calories',
    'date',
    'state',
  ];

  constructor(private trainingService: TrainingService) {}

  dataSource = this.trainingService.getCompeletedExercise();
}
