import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';

export class CustomValidators {
    static invalidProjectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { 'invalidProjectName': true }
        }
        return null;
    }


}