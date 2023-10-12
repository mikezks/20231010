import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Flight } from '../model/flight';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrorsComponent } from "../shared/validation-errors/validation-errors.component";
import { validateCity, validateCityWithParams } from '../shared/validation/validate-city';

@Component({
    selector: 'app-flight-edit-reactive',
    standalone: true,
    templateUrl: './flight-edit-reactive.component.html',
    styleUrls: ['./flight-edit-reactive.component.css'],
    imports: [CommonModule, ReactiveFormsModule, MatDialogModule, ValidationErrorsComponent]
})
export class FlightEditReactiveComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);
  fb = inject(FormBuilder);

  flight = this.data.flight;

  editForm = this.fb.nonNullable.group({
    id: [0],
    from: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCity
    ]],
    to: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'Wien', 'Graz', 'Innsbruck'
      ])
    ]],
    date: [''],
    delayed: [false]
  }, {
    updateOn: 'blur'
  });

  constructor() {
    this.editForm.patchValue(this.flight);
    this.editForm.valueChanges.subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('raw value', this.editForm.getRawValue());
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  close(): void {
    this.dialogRef.close();
  }
}
