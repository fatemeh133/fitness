import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { NgForm } from '@angular/forms';

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
  }

  starttrain(form: NgForm) {
    console.log(form);
    console.log('seleted', form.value.selectExercise);
    this.training.startExercise(form.value.selectExercise);
  }
}
