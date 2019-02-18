/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class MdbStepComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._isActive = false;
    }
    /**
     * @return {?}
     */
    get isDone() { return this._isDone; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDone(value) {
        this._isDone = value;
    }
    /**
     * @return {?}
     */
    get isWrong() { return this._isWrong; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isWrong(value) {
        this._isWrong = value;
    }
    /**
     * @return {?}
     */
    get isActive() { return this._isActive; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._isActive = value;
    }
    /**
     * @private
     * @return {?}
     */
    _removeClasses() {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    }
    /**
     * @return {?}
     */
    reset() {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MdbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-step',
                exportAs: 'mdbStep',
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }] }
];
/** @nocollapse */
MdbStepComponent.ctorParameters = () => [
    { type: ElementRef }
];
MdbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef,] }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    stepForm: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbStepComponent.prototype.content;
    /** @type {?} */
    MdbStepComponent.prototype.name;
    /** @type {?} */
    MdbStepComponent.prototype.label;
    /** @type {?} */
    MdbStepComponent.prototype.stepForm;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isDone;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isWrong;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isActive;
    /** @type {?} */
    MdbStepComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBTTNCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBa0J6QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBbEJVLENBQUM7Ozs7SUFFckMsSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDckMsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBR0QsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDdkMsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBR0QsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDekMsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUdPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsc0RBQXNEO2FBQ2pFOzs7O1lBVEMsVUFBVTs7O3NCQVdULFNBQVMsU0FBQyxXQUFXO21CQUNyQixLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUhOLG1DQUFrRDs7SUFDbEQsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBQ3ZCLG9DQUE2Qjs7Ozs7SUFRN0IsbUNBQXlCOzs7OztJQU16QixvQ0FBMEI7Ozs7O0lBTTFCLHFDQUEwQjs7SUFsQmQsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN0ZXAnLFxuICBleHBvcnRBczogJ21kYlN0ZXAnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdGVwRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cblxuICBnZXQgaXNEb25lKCkgeyByZXR1cm4gdGhpcy5faXNEb25lOyB9XG4gIHNldCBpc0RvbmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0RvbmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0RvbmU6IGJvb2xlYW47XG5cbiAgZ2V0IGlzV3JvbmcoKSB7IHJldHVybiB0aGlzLl9pc1dyb25nOyB9XG4gIHNldCBpc1dyb25nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNXcm9uZyA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzV3Jvbmc6IGJvb2xlYW47XG5cbiAgZ2V0IGlzQWN0aXZlKCkgeyByZXR1cm4gdGhpcy5faXNBY3RpdmU7IH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3JlbW92ZUNsYXNzZXMoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5zdGVwRm9ybSkge1xuICAgICAgdGhpcy5zdGVwRm9ybS5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdmVDbGFzc2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG59XG4iXX0=