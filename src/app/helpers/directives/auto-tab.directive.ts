import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoTab]',
  standalone: true,
})
export class AutoTabDirective {
  @Input('appAutoTab') nextElement!: HTMLInputElement | undefined | null;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    if (this.el.nativeElement.value.length === 1 && this.nextElement) {
      this.nextElement.focus();
    }
  }
}
