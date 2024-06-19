import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardComponent } from '../../../components/card/card.component';
import { AutoTabDirective } from '../../../helpers/directives/auto-tab.directive';
import { FocusDirective } from '../../../helpers/directives/focus.directive';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.scss'],
  imports: [
    CardComponent,
    ReactiveFormsModule,
    AutoTabDirective,
    FocusDirective,
  ],
  standalone: true,
})
export class AccountVerificationComponent implements OnInit {
  verificationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.verificationForm = this.formBuilder.group({
      num1: ['', Validators.max(9)], // تم تعديل Validators.max(1) إلى Validators.max(9) للسماح بأرقام من 0 إلى 9
      num2: ['', Validators.max(9)], // تم تعديل Validators.max(1) إلى Validators.max(9) للسماح بأرقام من 0 إلى 9
      num3: ['', Validators.max(9)], // تم تعديل Validators.max(1) إلى Validators.max(9) للسماح بأرقام من 0 إلى 9
      num4: ['', Validators.max(9)], // تم تعديل Validators.max(1) إلى Validators.max(9) للسماح بأرقام من 0 إلى 9
    });
  }

  do() {
    console.log('do');
  }
}
