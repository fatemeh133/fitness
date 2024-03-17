import { MatTableDataSource } from '@angular/material/table';
import { TrainingService } from './../training/training.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Exercise } from '../training/exercise.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css',
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'duration',
    'calories',
    'date',
    'state',
  ];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompeletedExercise();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
