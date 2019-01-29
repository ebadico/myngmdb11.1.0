/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { sbConfig } from './sb.config';
var SqueezeBoxComponent = /** @class */ (function () {
    function SqueezeBoxComponent() {
        this.multiple = true;
        sbConfig.serviceInstance = this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SqueezeBoxComponent.prototype.didItemToggled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    };
    SqueezeBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'squeezebox',
                    selector: 'mdb-squeezebox, mdb-accordion',
                    template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SqueezeBoxComponent.ctorParameters = function () { return []; };
    SqueezeBoxComponent.propDecorators = {
        multiple: [{ type: Input }],
        items: [{ type: ContentChildren, args: [forwardRef(function () { return SBItemComponent; }),] }]
    };
    return SqueezeBoxComponent;
}());
export { SqueezeBoxComponent };
if (false) {
    /** @type {?} */
    SqueezeBoxComponent.prototype.multiple;
    /** @type {?} */
    SqueezeBoxComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXJDO0lBV0U7UUFKUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBS3ZCLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLElBQXFCO1FBQ2xDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDZCxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsK0JBQStCO29CQUN6Qyx1RkFBOEI7aUJBQy9COzs7OzsyQkFHRSxLQUFLO3dCQUVMLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7O0lBaUJwRCwwQkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLG1CQUFtQjs7O0lBRTlCLHVDQUF5Qjs7SUFFekIsb0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NCSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zYi1pdGVtJztcbmltcG9ydCB7c2JDb25maWd9IGZyb20gJy4vc2IuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc3F1ZWV6ZWJveCcsXG4gIHNlbGVjdG9yOiAnbWRiLXNxdWVlemVib3gsIG1kYi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3NxdWVlemVib3guaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3F1ZWV6ZUJveENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbXVsdGlwbGUgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBTQkl0ZW1Db21wb25lbnQpKSBpdGVtczogUXVlcnlMaXN0PFNCSXRlbUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2JDb25maWcuc2VydmljZUluc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIGRpZEl0ZW1Ub2dnbGVkKGl0ZW06IFNCSXRlbUNvbXBvbmVudCkge1xuICAgIC8vIG9uIG5vdCBtdWx0aXBsZSwgaXQgd2lsbCBjb2xscGFzZSB0aGUgcmVzdCBvZiBpdGVtc1xuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5pdGVtcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmIChpICE9PSBpdGVtKSB7XG4gICAgICAgICAgaS5hcHBseVRvZ2dsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==