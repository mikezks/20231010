import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  @Input('city') allowedCities: string[] = [];

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control?.value && !this.allowedCities.includes(control.value)) {
      return {
        city: {
          allowedCities: this.allowedCities,
          actualCity: control.value
        }
      };
    }

    return null;
  }
}
