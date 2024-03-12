import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css',
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  interval: any;
  @Output() popupEvent = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.startOrResume();
  }
  startOrResume() {
    this.interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    let openDialog = this.dialog.open(DialogComponent, {
      data: { progress: this.progress },
    });
    openDialog.afterClosed().subscribe((result) => {
      if (result == 'true') {
        this.popupEvent.emit();
      } else {
        this.startOrResume();
      }
    });
  }
}
