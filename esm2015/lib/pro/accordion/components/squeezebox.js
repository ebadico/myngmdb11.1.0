/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, forwardRef, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { sbConfig, sbItems } from './sb.config';
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
            sbItems.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                if (el !== item) {
                    el.applyToggle(true);
                }
                if (el === item) {
                    /** @type {?} */
                    const collapsed = el.collapsed ? true : false;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        el.applyToggle(collapsed);
                    }), 0);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.items.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            sbItems.push(el);
        }));
        if (!this.multiple) {
            sbItems.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                /** @type {?} */
                const collapsed = el.collapsed ? true : false;
                el.applyToggle(collapsed);
            }));
        }
    }
    ;
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
    items: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => SBItemComponent)),] }]
};
if (false) {
    /** @type {?} */
    SqueezeBoxComponent.prototype.multiple;
    /** @type {?} */
    SqueezeBoxComponent.prototype.items;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQU85QyxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCO1FBSlMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUt2QixRQUFRLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFxQjtRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO2dCQUMxQixJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7b0JBQ2YsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFOzswQkFDVCxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUM3QyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztpQkFDUDtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRTs7c0JBQ3BCLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFBQSxDQUFDOzs7WUE1Q0gsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qyx1RkFBOEI7YUFDL0I7Ozs7O3VCQUdFLEtBQUs7b0JBRUwsZUFBZSxTQUFDLFVBQVU7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7Ozs7SUFGbEQsdUNBQXlCOztJQUV6QixvQ0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NCSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zYi1pdGVtJztcbmltcG9ydCB7c2JDb25maWcsIHNiSXRlbXN9IGZyb20gJy4vc2IuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc3F1ZWV6ZWJveCcsXG4gIHNlbGVjdG9yOiAnbWRiLXNxdWVlemVib3gsIG1kYi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3NxdWVlemVib3guaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3F1ZWV6ZUJveENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gU0JJdGVtQ29tcG9uZW50KSkgaXRlbXM6IFF1ZXJ5TGlzdDxTQkl0ZW1Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNiQ29uZmlnLnNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBkaWRJdGVtVG9nZ2xlZChpdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICAvLyBvbiBub3QgbXVsdGlwbGUsIGl0IHdpbGwgY29sbHBhc2UgdGhlIHJlc3Qgb2YgaXRlbXNcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHNiSXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZWwgIT09IGl0ZW0pIHtcbiAgICAgICAgICBlbC5hcHBseVRvZ2dsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwgPT09IGl0ZW0pIHtcbiAgICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSBlbC5jb2xsYXBzZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbC5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIHNiSXRlbXMucHVzaChlbCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgc2JJdGVtcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGVsLmNvbGxhcHNlZCA/ICB0cnVlIDogZmFsc2U7XG4gICAgICAgIGVsLmFwcGx5VG9nZ2xlKGNvbGxhcHNlZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxufVxuIl19