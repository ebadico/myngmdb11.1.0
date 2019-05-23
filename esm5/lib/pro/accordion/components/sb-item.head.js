/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
        this.id = "mdb-accordion-";
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = "mdb-accordion-head-" + this.sbItem.idModifier;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 32) {
            this.toggleClick(event);
        }
    };
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
            this.ariaExpanded = !this.ariaExpanded;
        }
    };
    /**
     * @return {?}
     */
    SBItemHeadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.sbItem.body) {
                _this.ariaControls = _this.sbItem.body.id;
                _this.sbItem.body.ariaLabelledBy = _this.id;
            }
        }), 0);
    };
    SBItemHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemHead',
                    selector: 'mdb-item-head, mdb-accordion-item-head',
                    template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\"\n     [id]=\"id\">\n  <a role=\"button\" href=\"javascript:;\" [attr.aria-expanded]=\"ariaExpanded\"\n     [attr.aria-controls]=\"ariaControls\">\n    <h5 class=\"mb-0 d-flex justify-content-between align-items-center\">\n      <span class=\"d-flex align-self-start align-items-center\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent }
    ]; };
    SBItemHeadComponent.propDecorators = {
        isDisabled: [{ type: Input }],
        customClass: [{ type: Input }],
        indicator: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
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
    /** @type {?} */
    SBItemHeadComponent.prototype.id;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaExpanded;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUUxQztJQWNFLDZCQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVJsQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBR2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsd0JBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBWSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRW9DLHVDQUFTOzs7O0lBQTlDLFVBQStDLEtBQW9CO1FBQ2pFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFPQztRQU5DLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsMmxCQUFnQztpQkFDakM7Ozs7Z0JBTk8sZUFBZTs7OzZCQVFwQixLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFVTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVCckMsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXBDWSxtQkFBbUI7OztJQUM5Qix5Q0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0Isd0NBQTBCOztJQUUxQixpQ0FBNkI7O0lBQzdCLDJDQUFxQjs7SUFDckIsMkNBQWtCOzs7OztJQUVOLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1IZWFkJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1oZWFkLCBtZGItYWNjb3JkaW9uLWl0ZW0taGVhZCcsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5oZWFkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGljYXRvciA9IHRydWU7XG5cbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gIGFyaWFDb250cm9scyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2JJdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICB0aGlzLmlkID0gYG1kYi1hY2NvcmRpb24taGVhZC0ke3RoaXMuc2JJdGVtLmlkTW9kaWZpZXJ9YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnNiSXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5zYkl0ZW0uY29sbGFwc2VkO1xuICAgICAgdGhpcy5zYkl0ZW0udG9nZ2xlKHRoaXMuc2JJdGVtLmNvbGxhcHNlZCk7XG4gICAgICB0aGlzLmFyaWFFeHBhbmRlZCA9ICF0aGlzLmFyaWFFeHBhbmRlZDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zYkl0ZW0uYm9keSkge1xuICAgICAgICB0aGlzLmFyaWFDb250cm9scyA9IHRoaXMuc2JJdGVtLmJvZHkuaWQ7XG4gICAgICAgIHRoaXMuc2JJdGVtLmJvZHkuYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=