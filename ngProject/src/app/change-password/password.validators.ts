import { AbstractControl } from "@angular/forms"

export class PasswordValidators {
    static inValidOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ inValidOldPassword: true });
            else
                resolve(null);
        })
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if ((newPassword && newPassword.value) !== (confirmPassword && confirmPassword.value))
            return { passwordShouldMatch: true }

        return null;
    }
}