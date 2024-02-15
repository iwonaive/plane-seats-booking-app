import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input() control?: AbstractControl;
  @Input() scope = 'errors';

  public get errors(): string[] {
    if (this.control?.errors) {
      return Object.keys(this.control.errors).map((key) => {
        return `${this.scope}.${key}`;
      });
    }
    return [];
  }
}
