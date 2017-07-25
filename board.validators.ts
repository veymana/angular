import { AbstractControl, ValidationErrors } from '@angular/forms'
export class BoardValidators {

    static invalidAmount(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf("$") >= 0) {
            return {
                invalidAmout: true
            }
        } else { return null; }
    }

    static invalidItem(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf("$") >= 0) {
            return {
                invalidAmout: true
            }
        } else { return null; }
    }
}