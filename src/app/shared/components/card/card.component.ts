import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;

  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
