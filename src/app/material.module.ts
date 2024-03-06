import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatSlideToggleModule, MatButtonModule, MatIconModule],
  exports: [MatSlideToggleModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
