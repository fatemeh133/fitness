import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'کرانچ', duration: 30, calories: 8 },
    { id: 'squat', name: 'اسکوات', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'لانچ اسکوات', duration: 120, calories: 18 },
    { id: 'burpees', name: 'شنا', duration: 60, calories: 8 },
  ];
  private exercise: Exercise;
  exerciseDataTransference = new Subject<Exercise>();

  constructor() {}

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    console.log('startExercise service');

    this.exercise = this.availableExercises.find((ex) => selectedId === ex.id)!;
    console.log('selected Exercise', { ...this.exercise });
    this.exerciseDataTransference.next({ ...this.exercise });
    console.log('selected Exercise has been snet to training component.ts');
  }
}
