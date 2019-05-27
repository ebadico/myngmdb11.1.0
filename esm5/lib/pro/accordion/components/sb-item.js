/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent(accordionService) {
        this.accordionService = accordionService;
        this.collapsed = true;
        this.idModifier = Math.floor(Math.random() * 1000);
    }
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.body !== undefined) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.collapsed ? _this.body.expandAnimationState = 'collapsed' : _this.body.expandAnimationState = 'expanded';
            }), 0);
            this.body.toggle(this.collapsed);
        }
    };
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.body && _this.body.expandAnimationState === 'expanded') {
                _this.collapsed = false;
            }
        }), 40);
        this.body.id = "mdb-accordion-body-" + this.idModifier;
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        this.accordionService.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.applyToggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
        }
    };
    SBItemComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItem',
                    selector: 'mdb-item, mdb-accordion-item',
                    template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SBItemComponent.ctorParameters = function () { return [
        { type: MdbAccordionService }
    ]; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
    };
    return SBItemComponent;
}());
export { SBItemComponent };
if (false) {
    /** @type {?} */
    SBItemComponent.prototype.collapsed;
    /** @type {?} */
    SBItemComponent.prototype.customClass;
    /** @type {?} */
    SBItemComponent.prototype.idModifier;
    /** @type {?} */
    SBItemComponent.prototype.body;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype.accordionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDtJQWNFLHlCQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQVB6QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRzFCLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUlPLENBQUM7Ozs7SUFFN0QseUNBQWU7OztJQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUM5RyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFBQSxpQkFPQztRQU5DLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEtBQUssVUFBVSxFQUFFO2dCQUM5RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLHdCQUFzQixJQUFJLENBQUMsVUFBWSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsdUpBQTJCO2lCQUM1Qjs7OztnQkFOUSxtQkFBbUI7Ozs0QkFTekIsS0FBSzs4QkFDTCxLQUFLO3VCQUlMLFlBQVksU0FBQyxtQkFBbUI7O0lBaUNuQyxzQkFBQztDQUFBLEFBN0NELElBNkNDO1NBeENZLGVBQWU7OztJQUUxQixvQ0FBaUM7O0lBQ2pDLHNDQUE2Qjs7SUFFN0IscUNBQXFEOztJQUVyRCwrQkFBNkQ7Ozs7O0lBRWpELDJDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0JJdGVtQm9keUNvbXBvbmVudCB9IGZyb20gJy4vc2ItaXRlbS5ib2R5JztcbmltcG9ydCB7IE1kYkFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLi9tZGItYWNjb3JkaW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW0nLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLCBtZGItYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIGNvbGxhcHNlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGlkTW9kaWZpZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblxuICBAQ29udGVudENoaWxkKFNCSXRlbUJvZHlDb21wb25lbnQpIGJvZHk6IFNCSXRlbUJvZHlDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvcmRpb25TZXJ2aWNlOiBNZGJBY2NvcmRpb25TZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA/IHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICAgIH0sIDApO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gICAgdGhpcy5ib2R5LmlkID0gYG1kYi1hY2NvcmRpb24tYm9keS0ke3RoaXMuaWRNb2RpZmllcn1gO1xuICB9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5kaWRJdGVtVG9nZ2xlZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5VG9nZ2xlKGNvbGxhcHNlZCk7XG4gIH1cblxuICBhcHBseVRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZShjb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxufVxuIl19