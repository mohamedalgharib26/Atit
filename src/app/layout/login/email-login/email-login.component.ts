import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-email-login',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './email-login.component.html',
  styleUrl: './email-login.component.scss',
})
export class EmailLoginComponent {
  Submit() {
    throw new Error('Method not implemented.');
  }
}
