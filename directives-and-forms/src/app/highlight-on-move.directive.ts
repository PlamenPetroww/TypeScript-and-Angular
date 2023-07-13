import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {

  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log(e)
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  unsubscribeFromEvent: (() => void) [] = [];

  ngOnInit(): void {
    console.log(this.elRef);

    this.unsubscribeFromEvent.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );

    this.unsubscribeFromEvent.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseLeaveHandler.bind(this)
      )
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );
  }

  mouseEnterHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.renderer.addClass(this.elRef.nativeElement, 'hightlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.renderer.removeClass(this.elRef.nativeElement, 'hightlight');
  }

  ngOnDestroy(): void {
    
  }
}
