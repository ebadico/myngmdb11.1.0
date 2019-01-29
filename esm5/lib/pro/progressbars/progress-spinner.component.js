/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent(el, platformId) {
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
    }
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        /** @type {?} */
        var colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var counter = 0;
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval(function () {
                switch (counter) {
                    case 0:
                        _this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        _this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        _this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + _this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }, 1333);
        }
    };
    ProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinner',
                    template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProgressSpinnerComponent.propDecorators = {
        spinnerType: [{ type: Input }],
        spinnerColor: [{ type: Input }]
    };
    return ProgressSpinnerComponent;
}());
export { ProgressSpinnerComponent };
if (false) {
    /** @type {?} */
    ProgressSpinnerComponent.prototype.el;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.addClass;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerType;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBV0ksa0NBQVksRUFBYyxFQUF1QixVQUFrQjtRQUxuRSxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBRzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjs7WUFDVSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUVsQyxRQUFRLFVBQVUsRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLHdEQUF3RCxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQUEsaUJBNEJDOztZQTNCTyxPQUFPLEdBQUcsQ0FBQzs7WUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixXQUFXLENBQUM7Z0JBQ1IsUUFBUSxPQUFPLEVBQUU7b0JBQ2IsS0FBSyxDQUFDO3dCQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsd0NBQXdDLENBQUM7d0JBQ3pELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsMENBQTBDLENBQUM7d0JBQzNELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsd0NBQXdDLENBQUM7d0JBQ3pELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcseUNBQXlDLENBQUM7d0JBQzFELE1BQU07aUJBQ2I7Z0JBRUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqRSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0gsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDZjtZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQzs7Z0JBdEVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsbUpBQThDO2lCQUNqRDs7OztnQkFOMEIsVUFBVTs2Q0FjSixNQUFNLFNBQUMsV0FBVzs7OzhCQUg5QyxLQUFLOytCQUNMLEtBQUs7O0lBOERWLCtCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0FuRVksd0JBQXdCOzs7SUFDakMsc0NBQWU7O0lBQ2YsNENBQXVDOztJQUN2Qyw2Q0FBa0I7O0lBQ2xCLCtDQUEwQjs7SUFDMUIsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGVsOiBFbGVtZW50UmVmO1xuICAgIGFkZENsYXNzOiBTdHJpbmcgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICAgIGlzQnJvd3NlciA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNwaW5uZXJUeXBlID0gJyc7XG4gICAgQElucHV0KCkgc3Bpbm5lckNvbG9yID0gJ3JhaW5ib3cnO1xuXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBob3N0RWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29sb3JDbGFzcyA9IHRoaXMuc3Bpbm5lckNvbG9yO1xuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmFpbmJvdyc7XG5cbiAgICAgICAgc3dpdGNoIChjb2xvckNsYXNzKSB7XG4gICAgICAgICAgICBjYXNlICdncmVlbic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWdyZWVuLW9ubHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWJsdWUtb25seSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yZWQtb25seSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYWluYm93JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmFpbmJvdyBzcGlubmVyLWJsdWUtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZXJSdW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgICB9XG5cbiAgICBzcGluZXJSdW4oKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY291bnRlcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXIgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXIteWVsbG93LW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhvc3RFbGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSA9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMzMzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==