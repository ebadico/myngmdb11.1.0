/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export class LinksComponent {
    /**
     * @param {?} _navbarService
     */
    constructor(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
LinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'links',
                template: `
        <ng-content></ng-content>
    `
            }] }
];
/** @nocollapse */
LinksComponent.ctorParameters = () => [
    { type: NavbarService }
];
LinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LinksComponent.prototype.links;
    /** @type {?} */
    LinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    LinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXJELE1BQU0sT0FBTyxjQUFjOzs7O0lBS3pCLFlBQXFCLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRHhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ1EsQ0FBQzs7OztJQUV2RCxrQkFBa0I7O2NBQ1YsSUFBSSxHQUFHLElBQUk7UUFJakIsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUNsQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFDRCxlQUFlO0lBRWYsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOztLQUVQO2FBQ0o7Ozs7WUFUUSxhQUFhOzs7b0JBV25CLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt3QkFHM0UsTUFBTTs7OztJQUhQLCtCQUM2Qjs7SUFFN0IsbUNBQThDOzs7OztJQUNqQyx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlua3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgcmVhZDogRWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlua3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9uYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5fbmF2YmFyU2VydmljZS5zZXROYXZiYXJMaW5rQ2xpY2tzKCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIH0sIDApO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG59XG4iXX0=