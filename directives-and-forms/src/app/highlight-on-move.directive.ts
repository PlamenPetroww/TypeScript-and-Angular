import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef);
    // this.elRef.nativeElement.style.backgroundColor = 'yellow'

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red'
    // );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );
  }


  mouseEnterHandler(e: MouseEvent): void {
    console.log('enter', e);
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  mouseLeaveHandler(e: MouseEvent): void {
    console.log('leave', e);
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
