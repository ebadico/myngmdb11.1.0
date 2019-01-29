/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    LinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'links',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    LinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    LinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return LinksComponent;
}());
export { LinksComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJEO0lBV0Usd0JBQXFCLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRHhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ1EsQ0FBQzs7OztJQUV2RCwyQ0FBa0I7OztJQUFsQjs7WUFDUSxJQUFJLEdBQUcsSUFBSTtRQUlqQixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87Z0JBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUNELHdDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSwyQ0FFUDtpQkFDSjs7OztnQkFUUSxhQUFhOzs7d0JBV25CLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs0QkFHM0UsTUFBTTs7SUFvQlQscUJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXhCWSxjQUFjOzs7SUFDekIsK0JBQzZCOztJQUU3QixtQ0FBOEM7Ozs7O0lBQ2pDLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhclNlcnZpY2UgfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaW5rcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX25hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0Ll9uYXZiYXJTZXJ2aWNlLnNldE5hdmJhckxpbmtDbGlja3MoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgfSwgMCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cbn1cbiJdfQ==