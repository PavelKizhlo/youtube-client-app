import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateStatus]',
})
export class DateStatusDirective implements OnInit {
  @Input('appDateStatus') publishedAt: string;

  date: Date;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.date = new Date(this.publishedAt);
    let color: string;

    const oneDay = 1000 * 60 * 60 * 24;
    const oneMonth = 30.5;

    const daysDiff = (new Date().getTime() - this.date.getTime()) / oneDay;

    if (daysDiff < 7) {
      color = '#5757ff';
    } else if (daysDiff > 7 && daysDiff < oneMonth) {
      color = '#28a711';
    } else if (daysDiff > oneMonth && daysDiff < oneMonth * 6) {
      color = '#e3c800';
    } else {
      color = '#c10000';
    }

    this.renderer.setStyle(this.element.nativeElement, 'border-color', color);
  }
}
