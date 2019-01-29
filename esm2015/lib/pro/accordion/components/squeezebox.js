/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { sbConfig } from './sb.config';
export class SqueezeBoxComponent {
    constructor() {
        this.multiple = true;
        sbConfig.serviceInstance = this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    didItemToggled(item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    }
}
SqueezeBoxComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'mdb-squeezebox, mdb-accordion',
                template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
SqueezeBoxComponent.ctorParameters = () => [];
SqueezeBoxComponent.propDecorators = {
    multiple: [{ type: Input }],
    items: [{ type: ContentChildren, args: [forwardRef(() => SBItemComponent),] }]
};
if (false) {
    /** @type {?} */
    SqueezeBoxComponent.prototype.multiple;
    /** @type {?} */
    SqueezeBoxComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBT3JDLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUI7UUFKUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBS3ZCLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQXFCO1FBQ2xDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDZCxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qyx1RkFBOEI7YUFDL0I7Ozs7O3VCQUdFLEtBQUs7b0JBRUwsZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7Ozs7SUFGbEQsdUNBQXlCOztJQUV6QixvQ0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuaW1wb3J0IHtzYkNvbmZpZ30gZnJvbSAnLi9zYi5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzcXVlZXplYm94JyxcbiAgc2VsZWN0b3I6ICdtZGItc3F1ZWV6ZWJveCwgbWRiLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnc3F1ZWV6ZWJveC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTcXVlZXplQm94Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFNCSXRlbUNvbXBvbmVudCkpIGl0ZW1zOiBRdWVyeUxpc3Q8U0JJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzYkNvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgZGlkSXRlbVRvZ2dsZWQoaXRlbTogU0JJdGVtQ29tcG9uZW50KSB7XG4gICAgLy8gb24gbm90IG11bHRpcGxlLCBpdCB3aWxsIGNvbGxwYXNlIHRoZSByZXN0IG9mIGl0ZW1zXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLml0ZW1zLnRvQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgaWYgKGkgIT09IGl0ZW0pIHtcbiAgICAgICAgICBpLmFwcGx5VG9nZ2xlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19