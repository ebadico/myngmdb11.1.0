/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, HostBinding } from '@angular/core';
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
    }
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
        if (this.stickyHeader) {
            /** @type {?} */
            var tableHead = this.el.nativeElement.querySelector('thead');
            this.renderer.addClass(tableHead, 'sticky-top');
            if (this.stickyHeaderBgColor) {
                this.renderer.setStyle(tableHead, 'background-color', this.stickyHeaderBgColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'background-color', '#f2f2f2');
            }
            if (this.stickyHeaderTextColor) {
                this.renderer.setStyle(tableHead, 'color', this.stickyHeaderTextColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'color', '#000000');
            }
        }
    };
    MdbTableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTable]'
                },] }
    ];
    /** @nocollapse */
    MdbTableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableDirective.propDecorators = {
        striped: [{ type: Input }, { type: HostBinding, args: ['class.table-striped',] }],
        bordered: [{ type: Input }, { type: HostBinding, args: ['class.table-bordered',] }],
        borderless: [{ type: Input }, { type: HostBinding, args: ['class.table-borderless',] }],
        hover: [{ type: Input }, { type: HostBinding, args: ['class.table-hover',] }],
        small: [{ type: Input }, { type: HostBinding, args: ['class.table-sm',] }],
        responsive: [{ type: Input }, { type: HostBinding, args: ['class.table-responsive',] }],
        stickyHeader: [{ type: Input }],
        stickyHeaderBgColor: [{ type: Input }],
        stickyHeaderTextColor: [{ type: Input }]
    };
    return MdbTableDirective;
}());
export { MdbTableDirective };
if (false) {
    /** @type {?} */
    MdbTableDirective.prototype.striped;
    /** @type {?} */
    MdbTableDirective.prototype.bordered;
    /** @type {?} */
    MdbTableDirective.prototype.borderless;
    /** @type {?} */
    MdbTableDirective.prototype.hover;
    /** @type {?} */
    MdbTableDirective.prototype.small;
    /** @type {?} */
    MdbTableDirective.prototype.responsive;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeader;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderBgColor;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderTextColor;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBMEJFLDJCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdEQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztJQUV1QixDQUFDOzs7O0lBRXBFLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2YsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2hELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBSnNDLFVBQVU7Z0JBQXJCLFNBQVM7OzswQkFNbEMsS0FBSyxZQUNMLFdBQVcsU0FBQyxxQkFBcUI7MkJBRWpDLEtBQUssWUFDTCxXQUFXLFNBQUMsc0JBQXNCOzZCQUVsQyxLQUFLLFlBQ0wsV0FBVyxTQUFDLHdCQUF3Qjt3QkFFcEMsS0FBSyxZQUNMLFdBQVcsU0FBQyxtQkFBbUI7d0JBRS9CLEtBQUssWUFDTCxXQUFXLFNBQUMsZ0JBQWdCOzZCQUU1QixLQUFLLFlBQ0wsV0FBVyxTQUFDLHdCQUF3QjsrQkFFcEMsS0FBSztzQ0FDTCxLQUFLO3dDQUNMLEtBQUs7O0lBdUJSLHdCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E1Q1ksaUJBQWlCOzs7SUFDNUIsb0NBQ3FEOztJQUVyRCxxQ0FDdUQ7O0lBRXZELHVDQUMyRDs7SUFFM0Qsa0NBQ2lEOztJQUVqRCxrQ0FDOEM7O0lBRTlDLHVDQUMyRDs7SUFFM0QseUNBQXVDOztJQUN2QyxnREFBMEM7O0lBQzFDLGtEQUE0Qzs7Ozs7SUFFaEMsK0JBQXNCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc3RyaXBlZCcpIHN0cmlwZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ib3JkZXJlZCcpIGJvcmRlcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVybGVzcycpIGJvcmRlcmxlc3M6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ob3ZlcicpIGhvdmVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc20nKSBzbWFsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXJlc3BvbnNpdmUnKSByZXNwb25zaXZlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3RpY2t5SGVhZGVyVGV4dENvbG9yOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGFibGUnKTtcblxuICAgIGlmICh0aGlzLnN0aWNreUhlYWRlcikge1xuICAgICAgY29uc3QgdGFibGVIZWFkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYmxlSGVhZCwgJ3N0aWNreS10b3AnKTtcbiAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZUhlYWQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5zdGlja3lIZWFkZXJCZ0NvbG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVIZWFkLCAnYmFja2dyb3VuZC1jb2xvcicsICcjZjJmMmYyJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJUZXh0Q29sb3IpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZUhlYWQsICdjb2xvcicsIHRoaXMuc3RpY2t5SGVhZGVyVGV4dENvbG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVIZWFkLCAnY29sb3InLCAnIzAwMDAwMCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=