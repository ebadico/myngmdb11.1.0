/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.toggleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
        }
    };
    SBItemHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemHead',
                    selector: 'mdb-item-head, mdb-accordion-item-head',
                    template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\">\n  <a role=\"button\">\n    <h5 class=\"mb-0\">\n    <ng-content></ng-content>\n    <i *ngIf=\"indicator\" class=\"fas fa-angle-down rotate-icon\"></i>\n    </h5>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent }
    ]; };
    SBItemHeadComponent.propDecorators = {
        isDisabled: [{ type: Input }],
        customClass: [{ type: Input }],
        indicator: [{ type: Input }]
    };
    return SBItemHeadComponent;
}());
export { SBItemHeadComponent };
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFMUM7SUFVRSw2QkFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFKbEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRW9CLENBQUM7Ozs7O0lBRS9DLHlDQUFXOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCw0VEFBZ0M7aUJBQ2pDOzs7O2dCQU5PLGVBQWU7Ozs2QkFRcEIsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBV1IsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLG1CQUFtQjs7O0lBQzlCLHlDQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qix3Q0FBMEI7Ozs7O0lBRWQscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1IZWFkJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1oZWFkLCBtZGItYWNjb3JkaW9uLWl0ZW0taGVhZCcsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5oZWFkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUhlYWRDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGljYXRvciA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYkl0ZW06IFNCSXRlbUNvbXBvbmVudCkge31cblxuICB0b2dnbGVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYkl0ZW0uY29sbGFwc2VkID0gIXRoaXMuc2JJdGVtLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuc2JJdGVtLnRvZ2dsZSh0aGlzLnNiSXRlbS5jb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxufVxuIl19