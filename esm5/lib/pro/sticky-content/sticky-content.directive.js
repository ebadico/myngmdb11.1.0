/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var MdbStickyDirective = /** @class */ (function () {
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            var bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            var dynProps;
            if (_this.original.float === 'right') {
                /** @type {?} */
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                /** @type {?} */
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                var floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        var parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) { // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            /** @type {?} */
            var elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                // left: computedStyle(this.el, 'left'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10)
            };
        }
        this.attach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = /**
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSticky]'
                },] }
    ];
    /** @nocollapse */
    MdbStickyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStickyDirective.propDecorators = {
        stickyAfter: [{ type: Input }]
    };
    return MdbStickyDirective;
}());
export { MdbStickyDirective };
if (false) {
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfter;
    /** @type {?} */
    MdbStickyDirective.prototype.isBrowser;
    /** @type {?} */
    MdbStickyDirective.prototype.el;
    /** @type {?} */
    MdbStickyDirective.prototype.parentEl;
    /** @type {?} */
    MdbStickyDirective.prototype.fillerEl;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyOffsetTop;
    /** @type {?} */
    MdbStickyDirective.prototype.diff;
    /** @type {?} */
    MdbStickyDirective.prototype.original;
    /** @type {?} */
    MdbStickyDirective.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBbUJFLDRCQUFZLEVBQWMsRUFBdUIsVUFBa0I7UUFBbkUsaUJBSUM7O1FBakJELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUF3RXBCLGtCQUFhLEdBQUc7OztnQkFFUixVQUFVLEdBQWUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2dCQUN0RSxRQUFRLEdBQWUsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzlELFFBQVE7WUFFWixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTs7b0JBQzdCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUMzRSxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFOztvQkFDbkMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7Z0JBQ3ZFLFFBQVEsR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsNkRBQTZEO2dCQUM3RCxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUMsQ0FBQzthQUM3QztZQUNELHFDQUFxQztZQUVyQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTtnQkFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFOzs7Ozs7b0JBSy9FLGVBQWUsR0FDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUMzQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsR0FBRyxFQUFFLFNBQVM7b0JBQ2QsTUFBTSxFQUFFLENBQUM7aUJBQ1YsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pHOzttQkFFRztnQkFDSCx3R0FBd0c7Z0JBRXhHLDRGQUE0RjtnQkFDNUYsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtvQkFDdkYsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtvQkFDM0IsUUFBUSxFQUFFLE9BQU87O29CQUNqQixLQUFLLEVBQUUsTUFBTTtvQkFDYixHQUFHLEVBQUUsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJO29CQUNoQyxNQUFNLEVBQUUsU0FBUztpQkFDbEIsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNkO2lCQUFNO2dCQUNMOzttQkFFRztnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO29CQUNoRixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztpQkFDM0I7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtvQkFDM0IsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtvQkFDaEMsS0FBSyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDMUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztvQkFDdEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDNUIsS0FBSyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDMUIsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtpQkFDekIsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDO1FBeElBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7O2dCQUNkLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ3hFO1NBQ0Y7OztZQUdLLGdCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7O1lBQ3BELGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUNqRSxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsMEJBQTBCO1lBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUNoRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1NBQ3BELENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLFFBQVEsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUM7Z0JBQzVDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7Z0JBQ3RDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQ2xDLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7O2dCQUV0QyxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO2dCQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO2dCQUM5QixTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xFLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5RCxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNoRSxDQUFDO1NBQ0g7UUFHRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsbUNBQU07OztJQUFOO1FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtRQUNFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQVJrQixVQUFVOzZDQXlCRSxNQUFNLFNBQUMsV0FBVzs7OzhCQWQ5QyxLQUFLOztJQXdKUix5QkFBQztDQUFBLEFBN0pELElBNkpDO1NBekpZLGtCQUFrQjs7O0lBQzdCLHlDQUE2Qjs7SUFDN0IsdUNBQWtCOztJQUdsQixnQ0FBc0I7O0lBRXRCLHNDQUE0Qjs7SUFFNUIsc0NBQTRCOztJQUM1Qiw2Q0FBb0I7O0lBRXBCLGtDQUFVOztJQUNWLHNDQUFjOztJQXFFZCwyQ0FzRUUiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tcHV0ZWRTdHlsZX0gZnJvbSAnLi9jb21wdXRlZC5zdHlsZSc7XG5cbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1BMQVRGT1JNX0lELCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJTdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzdGlja3lBZnRlcjogc3RyaW5nOyAgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBpc0Jyb3dzZXIgPSBmYWxzZTtcblxuICAvLyAgIGVsOiBIVE1MRWxlbWVudDtcbiAgZWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyAgIHBhcmVudEVsOiBIVE1MRWxlbWVudDtcbiAgcGFyZW50RWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyBmaWxsZXJFbDogSFRNTEVsZW1lbnQ7XG4gIGZpbGxlckVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgc3RpY2t5T2Zmc2V0VG9wID0gMDtcblxuICBkaWZmOiBhbnk7XG4gIG9yaWdpbmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlcikge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlcik7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgcGFyZW50IHJlbGF0aXZlbHkgcG9zaXRpb25lZFxuICAgIGNvbnN0IGFsbG93ZWRQb3NpdGlvbnMgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJ107XG4gICAgY29uc3QgcGFyZW50RWxQb3NpdGlvbiA9IGNvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnRFbCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKGFsbG93ZWRQb3NpdGlvbnMuaW5kZXhPZihwYXJlbnRFbFBvc2l0aW9uKSA9PT0gLTEpIHsgLy8gaW5oZXJpdCwgaW5pdGlhbCwgdW5zZXRcbiAgICAgIHRoaXMucGFyZW50RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cblxuICAgIHRoaXMuZGlmZiA9IHtcbiAgICAgIHRvcDogdGhpcy5lbC5vZmZzZXRUb3AgLSB0aGlzLnBhcmVudEVsLm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCAtIHRoaXMucGFyZW50RWwub2Zmc2V0TGVmdFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5vcmlnaW5hbCA9IHtcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiBlbFJlY3QsXG4gICAgICAgIHBvc2l0aW9uOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpLFxuICAgICAgICBmbG9hdDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnZmxvYXQnKSxcbiAgICAgICAgdG9wOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd0b3AnKSxcbiAgICAgICAgYm90dG9tOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdib3R0b20nKSxcbiAgICAgICAgd2lkdGg6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3dpZHRoJyksXG4gICAgICAgIC8vIGxlZnQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2xlZnQnKSxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG9mZnNldFRvcDogdGhpcy5lbC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgbWFyZ2luVG9wOiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5Ub3AnKSwgMTApLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkJvdHRvbScpLCAxMCksXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkxlZnQnKSwgMTApLFxuICAgICAgICBtYXJnaW5SaWdodDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMClcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgICB0aGlzLmF0dGFjaCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIGF0dGFjaCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gbGV0IGVsUmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib2R5UmVjdDogQ2xpZW50UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGR5blByb3BzO1xuXG4gICAgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdyaWdodCcpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gYm9keVJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LnJpZ2h0ICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5SaWdodDtcbiAgICAgIGR5blByb3BzID0ge3JpZ2h0OiByaWdodCArICdweCd9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCArIHRoaXMub3JpZ2luYWwubWFyZ2luTGVmdDtcbiAgICAgIGR5blByb3BzID0ge2xlZnQ6IGxlZnQgKyAncHgnfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudFJlY3QuLi4uLi4uLi4uLi4uLicsIHBhcmVudFJlY3Qud2lkdGgpO1xuICAgICAgZHluUHJvcHMgPSB7d2lkdGg6IHBhcmVudFJlY3Qud2lkdGggKyAncHgnfTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2R5blByb3BzJywgZHluUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20gK1xuICAgICAgdGhpcy5vcmlnaW5hbC5ib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0ICsgdGhpcy5zdGlja3lPZmZzZXRUb3AgPj0gcGFyZW50UmVjdC5ib3R0b20pIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgcmVhY2hlZCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAxIChhYnNvbHV0ZSknLCBwYXJlbnRSZWN0LmJvdHRvbSwgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20pO1xuICAgICAgY29uc3QgZmxvYXRBZGp1c3RtZW50ID1cbiAgICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnID8ge3JpZ2h0OiAwfSA6XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAnbGVmdCcgPyB7bGVmdDogMH0gOiB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgdG9wOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSwgZHluUHJvcHMsIGZsb2F0QWRqdXN0bWVudCk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRSZWN0LnRvcCAqIC0xICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+IHRoaXMub3JpZ2luYWwub2Zmc2V0VG9wKSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBtaWRkbGUgb2YgY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDIgKGZpeGVkKScsIHBhcmVudFJlY3QudG9wICogLTEsIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wLCB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcCk7XG5cbiAgICAgIC8vIGlmIG5vdCBmbG9hdGluZywgYWRkIGFuIGVtcHR5IGZpbGxlciBlbGVtZW50LCBzaW5jZSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgYmVjYW1lcyAnZml4ZWQnXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ2xlZnQnICYmIHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdyaWdodCcgJiYgIXRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbGxlckVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5maWxsZXJFbCwgdGhpcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgLy8gZml4ZWQgaXMgYSBsb3Qgc21vb3RoZXIgdGhhbiBhYnNvbHV0ZVxuICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICB0b3A6IHRoaXMuc3RpY2t5T2Zmc2V0VG9wICsgJ3B4JyxcbiAgICAgICAgYm90dG9tOiAnaW5oZXJpdCdcbiAgICAgIH0sIGR5blByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMyAob3JpZ2luYWwpJyk7XG4gICAgICBpZiAodGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuZmlsbGVyRWwpOyAvLyBJRTExIGRvZXMgbm90IHdvcmsgd2l0aCBlbC5yZW1vdmUoKVxuICAgICAgICB0aGlzLmZpbGxlckVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLm9yaWdpbmFsLnBvc2l0aW9uLFxuICAgICAgICBmbG9hdDogdGhpcy5vcmlnaW5hbC5mbG9hdCxcbiAgICAgICAgdG9wOiB0aGlzLm9yaWdpbmFsLnRvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLm9yaWdpbmFsLmJvdHRvbSxcbiAgICAgICAgd2lkdGg6IHRoaXMub3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGxlZnQ6IHRoaXMub3JpZ2luYWwubGVmdFxuICAgICAgfSwgZHluUHJvcHMpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==