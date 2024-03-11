import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() headerEmitter = new EventEmitter<void>();

  toolbartoggle() {
    this.headerEmitter.emit();
  }
}
