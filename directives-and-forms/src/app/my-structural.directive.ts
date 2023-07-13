import {
  Directive,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  Optional,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpProp: any;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log('----------------------')
    console.log('templateRef', this.templateRef);
    console.log('myTmpProp', this.myTmpProp);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.templateRef === undefined) {
      return
    }

    const template = this.templateRef || this.myTmpProp;
    if(!template) {
      return
    }

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(template, {
        value: 'value From Ng OnChanges 123',
        $implicit: 'this is implicit data',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
