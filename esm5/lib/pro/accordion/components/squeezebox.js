/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, forwardRef, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { sbConfig, sbItems } from './sb.config';
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
            sbItems.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el !== item) {
                    el.applyToggle(true);
                }
                if (el === item) {
                    /** @type {?} */
                    var collapsed_1 = el.collapsed ? true : false;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        el.applyToggle(collapsed_1);
                    }), 0);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    SqueezeBoxComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            sbItems.push(el);
        }));
        if (!this.multiple) {
            sbItems.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                /** @type {?} */
                var collapsed = el.collapsed ? true : false;
                el.applyToggle(collapsed);
            }));
        }
    };
    ;
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
        items: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return SBItemComponent; })),] }]
    };
    return SqueezeBoxComponent;
}());
export { SqueezeBoxComponent };
if (false) {
    /** @type {?} */
    SqueezeBoxComponent.prototype.multiple;
    /** @type {?} */
    SqueezeBoxComponent.prototype.items;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUU5QztJQVdFO1FBSlMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUt2QixRQUFRLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxJQUFxQjtRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQU87Z0JBQ3RCLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDZixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7O3dCQUNULFdBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQzdDLFVBQVU7OztvQkFBQzt3QkFDVCxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVMsQ0FBQyxDQUFDO29CQUM1QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ1A7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFPO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUNGLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBTzs7b0JBQ2hCLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFBQSxDQUFDOztnQkE1Q0gsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsK0JBQStCO29CQUN6Qyx1RkFBOEI7aUJBQy9COzs7OzsyQkFHRSxLQUFLO3dCQUVMLGVBQWUsU0FBQyxVQUFVOzs7b0JBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUM7O0lBc0NwRCwwQkFBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLG1CQUFtQjs7O0lBRTlCLHVDQUF5Qjs7SUFFekIsb0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTQkl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2ItaXRlbSc7XG5pbXBvcnQge3NiQ29uZmlnLCBzYkl0ZW1zfSBmcm9tICcuL3NiLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NxdWVlemVib3gnLFxuICBzZWxlY3RvcjogJ21kYi1zcXVlZXplYm94LCBtZGItYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICdzcXVlZXplYm94Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNxdWVlemVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFNCSXRlbUNvbXBvbmVudCkpIGl0ZW1zOiBRdWVyeUxpc3Q8U0JJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzYkNvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgZGlkSXRlbVRvZ2dsZWQoaXRlbTogU0JJdGVtQ29tcG9uZW50KSB7XG4gICAgLy8gb24gbm90IG11bHRpcGxlLCBpdCB3aWxsIGNvbGxwYXNlIHRoZSByZXN0IG9mIGl0ZW1zXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICBzYkl0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVsICE9PSBpdGVtKSB7XG4gICAgICAgICAgZWwuYXBwbHlUb2dnbGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsID09PSBpdGVtKSB7XG4gICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWwuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICBzYkl0ZW1zLnB1c2goZWwpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHNiSXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSBlbC5jb2xsYXBzZWQgPyAgdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBlbC5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cbn1cbiJdfQ==