import {
  Directive,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appMyStructural) {
      this.vcRef.createEmbeddedView(
        this.templateRef
      )
    } else {
      this.vcRef.clear()
    }

  }
}
