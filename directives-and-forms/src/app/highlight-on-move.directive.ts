import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]'
})
export class HighlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    console.log(this.elRef);
    // this.elRef.nativeElement.style.backgroundColor = 'yellow'
  
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'red'
    );

  }
}
