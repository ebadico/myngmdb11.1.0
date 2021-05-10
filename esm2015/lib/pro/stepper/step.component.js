import { Component, Input, ViewChild, TemplateRef, ElementRef, ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
export class MdbStepComponent {
    constructor(el) {
        this.el = el;
        this.editable = true;
        this._onChanges = new Subject();
        this._isActive = false;
    }
    get isDone() {
        return this._isDone;
    }
    set isDone(value) {
        this._isDone = value;
    }
    get isWrong() {
        return this._isWrong;
    }
    set isWrong(value) {
        this._isWrong = value;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    _removeClasses() {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    }
    reset() {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.name && !changes.name.isFirstChange()) {
            this._onChanges.next();
        }
        if (changes.label && !changes.label.isFirstChange()) {
            this._onChanges.next();
        }
        if (changes.editable && !changes.editable.isFirstChange()) {
            this._onChanges.next();
        }
        if (changes.stepForm && !changes.stepForm.isFirstChange()) {
            this._onChanges.next();
        }
    }
}
MdbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-step',
                exportAs: 'mdbStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
MdbStepComponent.ctorParameters = () => [
    { type: ElementRef }
];
MdbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    editable: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    stepForm: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9wcm8vc3RlcHBlci9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFFVix1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRL0IsTUFBTSxPQUFPLGdCQUFnQjtJQVMzQixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVB4QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBS3pCLGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQTBCbEMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQXhCVSxDQUFDO0lBRXJDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBR0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFHRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUdPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxzREFBc0Q7Z0JBQ2hFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFkQyxVQUFVOzs7c0JBZ0JULFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUN2QyxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN0ZXAnLFxuICBleHBvcnRBczogJ21kYlN0ZXAnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgZWRpdGFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBGb3JtOiBGb3JtR3JvdXA7XG5cbiAgX29uQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIGdldCBpc0RvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgfVxuICBzZXQgaXNEb25lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEb25lID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNEb25lOiBib29sZWFuO1xuXG4gIGdldCBpc1dyb25nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1dyb25nO1xuICB9XG4gIHNldCBpc1dyb25nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNXcm9uZyA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzV3Jvbmc6IGJvb2xlYW47XG5cbiAgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ2xhc3NlcygpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnN0ZXBGb3JtKSB7XG4gICAgICB0aGlzLnN0ZXBGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubmFtZSAmJiAhY2hhbmdlcy5uYW1lLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2VzLm5leHQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5sYWJlbCAmJiAhY2hhbmdlcy5sYWJlbC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZWRpdGFibGUgJiYgIWNoYW5nZXMuZWRpdGFibGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZXMubmV4dCgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnN0ZXBGb3JtICYmICFjaGFuZ2VzLnN0ZXBGb3JtLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==