import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = '';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.renderer.listen(
      this.elRef.nativeElement,
      'click',
      this.clickHandler.bind(this)
    );
  }

  clickHandler(e: MouseEvent) {
    this.router.navigate([this.appMyRouterLink])
  }
}
