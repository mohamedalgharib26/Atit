import { Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() url!: string;
  @Input() text!: string;
  @Input() cardText!: string;
  @Input() mobileNumber!: string;
}
