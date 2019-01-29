/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = /**
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
    NavlinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    NavlinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navlinks',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    NavlinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return NavlinksComponent;
}());
export { NavlinksComponent };
if (false) {
    /** @type {?} */
    NavlinksComponent.prototype.links;
    /** @type {?} */
    NavlinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    NavlinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2bGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9uYXZsaW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJEO0lBV0UsMkJBQXFCLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRHhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ1EsQ0FBQzs7OztJQUV2RCw4Q0FBa0I7OztJQUFsQjs7WUFDUSxJQUFJLEdBQUcsSUFBSTtRQUlqQixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU87Z0JBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUNELDJDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwyQ0FFUDtpQkFDSjs7OztnQkFUUSxhQUFhOzs7d0JBV25CLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs0QkFHM0UsTUFBTTs7SUFvQlQsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXhCWSxpQkFBaUI7OztJQUM1QixrQ0FDNkI7O0lBRTdCLHNDQUE4Qzs7Ozs7SUFDakMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyU2VydmljZSB9IGZyb20gJy4vbmF2YmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25hdmxpbmtzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmxpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpbmtzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQE91dHB1dCgpIGxpbmtDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG5cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQuX25hdmJhclNlcnZpY2Uuc2V0TmF2YmFyTGlua0NsaWNrcygpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICB9LCAwKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxufVxuIl19