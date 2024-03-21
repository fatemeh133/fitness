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
  private selectedExercises: Exercise[] = [
    {
      id: 's',
      name: 'string',
      duration: 2,
      calories: 3,
      date: new Date(),
      state: 'completed',
    },
    {
      id: 's',
      name: 'strinnng',
      duration: 2,
      calories: 3,
      date: new Date(),
      state: 'completed',
    },
    {
      id: 'syy',
      name: 'stringgg',
      duration: 2,
      calories: 3,
      date: new Date(),
      state: 'completed',
    },
    {
      id: 'sfgh',
      name: 'sssstring',
      duration: 2,
      calories: 3,
      date: new Date(),
      state: 'completed',
    },
    {
      id: 'ssss',
      name: 'striiiing',
      duration: 2,
      calories: 3,
      date: new Date(),
      state: 'completed',
    },
  ];

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

  getRunningExercise(): any {
    return { ...this.exercise };
  }

  compeleteExercise() {
    this.selectedExercises.push({
      ...this.exercise,
      date: new Date(),
      state: 'completed',
    });
    this.exercise = null;
    this.exerciseDataTransference.next(null);
    console.log('completed: ', this.selectedExercises);
  }

  cancelExercise(progress: number) {
    this.selectedExercises.push({
      ...this.exercise,
      date: new Date(),
      state: 'canceled',
      duration: this.exercise.duration * (progress / 100),
      calories: this.exercise.calories * (progress / 100),
    });
    this.exercise = null;
    this.exerciseDataTransference.next(null);
    console.log('canceled: ', this.selectedExercises);
  }

  getCompeletedExercise() {
    return [...this.selectedExercises];
  }
}
