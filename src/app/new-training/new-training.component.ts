import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent implements OnInit {
  @Output() startTrain = new EventEmitter<void>();
  exercises: Exercise[] | undefined;

  constructor(private training: TrainingService) {}

  ngOnInit() {
    this.exercises = this.training.getAvailableExercises();
    console.log(this.exercises);
  }

  starttrain() {
    this.startTrain.emit();
  }
}
