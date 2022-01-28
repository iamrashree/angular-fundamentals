import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  @Input('appInputFormat') format: string | undefined;
  @HostListener('blur') onBlur() {

    let value = this.el.nativeElement.value;

    if (this.format === 'lowercase')
      this.el.nativeElement.value = (value as string).toLowerCase();
    else
      this.el.nativeElement.value = (value as string).toUpperCase();
  }


}
