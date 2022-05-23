import { Component, Input } from '@angular/core';

type TButton = 'submit' | 'button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: TButton = 'submit';
  @Input() text: string;
}
