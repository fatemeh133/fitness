import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent implements OnInit {
  @Output() startTrain = new EventEmitter<void>();
  exercises: Observable<Exercise[]>;

  constructor(
    private training: TrainingService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    // this.exercises = this.training.getAvailableExercises();
    // this.exercises = this.db.collection('exercises').valueChanges();
    console.log('db firebaseeeeeeee');

    // this.db
    //   .collection('exercises')
    //   .valueChanges()
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.exercises = this.db
      .collection('exercises')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              name: (doc.payload.doc.data() as any).name,
              duration: (doc.payload.doc.data() as any).duration,
              calories: (doc.payload.doc.data() as any).calories,
            };
          });
        })
      );
    console.log();
  }

  starttrain(form: NgForm) {
    console.log(form);
    console.log('seleted', form.value.selectExercise);
    this.training.startExercise(form.value.selectExercise);
  }
}
