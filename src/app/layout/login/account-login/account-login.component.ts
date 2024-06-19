import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-login',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './account-login.component.html',
  styleUrl: './account-login.component.scss',
})
export class AccountLoginComponent {
  private _router = inject(Router);
  Submit() {
    this._router.navigateByUrl('/login/verification');
  }
}
