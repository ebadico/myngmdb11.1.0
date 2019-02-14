/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class MdbStickyDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        () => {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            const parentRect = this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            const bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            let dynProps;
            if (this.original.float === 'right') {
                /** @type {?} */
                const right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                /** @type {?} */
                const left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (this.original.marginTop + this.original.marginBottom +
                this.original.boundingClientRect.height + this.stickyOffsetTop >= parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                const floatAdjustment = this.original.float === 'right' ? { right: 0 } :
                    this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop > this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left
                }, dynProps);
            }
        });
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        const allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        const parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) { // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            /** @type {?} */
            const elRect = this.el.getBoundingClientRect();
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
    }
    /**
     * @return {?}
     */
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    /**
     * @return {?}
     */
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
}
MdbStickyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSticky]'
            },] }
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbStickyDirective.propDecorators = {
    stickyAfter: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTWxELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBZTdCLFlBQVksRUFBYyxFQUF1QixVQUFrQjs7UUFibkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQXdFcEIsa0JBQWE7OztRQUFHLEdBQUcsRUFBRTs7O2tCQUViLFVBQVUsR0FBZSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7a0JBQ3RFLFFBQVEsR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFDOUQsUUFBUTtZQUVaLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFOztzQkFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7Z0JBQzNFLFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7O3NCQUNuQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtnQkFDdkUsUUFBUSxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCw2REFBNkQ7Z0JBQzdELFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksRUFBQyxDQUFDO2FBQzdDO1lBQ0QscUNBQXFDO1lBRXJDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Ozs7OztzQkFLL0UsZUFBZSxHQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7b0JBQzNCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixLQUFLLEVBQUUsTUFBTTtvQkFDYixHQUFHLEVBQUUsU0FBUztvQkFDZCxNQUFNLEVBQUUsQ0FBQztpQkFDVixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtnQkFDekc7O21CQUVHO2dCQUNILHdHQUF3RztnQkFFeEcsNEZBQTRGO2dCQUM1RixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUMzQixRQUFRLEVBQUUsT0FBTzs7b0JBQ2pCLEtBQUssRUFBRSxNQUFNO29CQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUk7b0JBQ2hDLE1BQU0sRUFBRSxTQUFTO2lCQUNsQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0w7O21CQUVHO2dCQUNILG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7b0JBQ2hGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2lCQUMzQjtnQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO29CQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO29CQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2lCQUN6QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLEVBQUM7UUF4SUEsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7O2tCQUNkLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqRSxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ3hFO1NBQ0Y7OztjQUdLLGdCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7O2NBQ3BELGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUNqRSxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsMEJBQTBCO1lBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUNoRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1NBQ3BELENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2tCQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLFFBQVEsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUM7Z0JBQzVDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7Z0JBQ3RDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQ2xDLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7O2dCQUV0QyxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO2dCQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO2dCQUM5QixTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xFLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5RCxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNoRSxDQUFDO1NBQ0g7UUFHRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFSa0IsVUFBVTt5Q0F5QkUsTUFBTSxTQUFDLFdBQVc7OzswQkFkOUMsS0FBSzs7OztJQUFOLHlDQUE2Qjs7SUFDN0IsdUNBQWtCOztJQUdsQixnQ0FBc0I7O0lBRXRCLHNDQUE0Qjs7SUFFNUIsc0NBQTRCOztJQUM1Qiw2Q0FBb0I7O0lBRXBCLGtDQUFVOztJQUNWLHNDQUFjOztJQXFFZCwyQ0FzRUUiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tcHV0ZWRTdHlsZX0gZnJvbSAnLi9jb21wdXRlZC5zdHlsZSc7XG5cbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1BMQVRGT1JNX0lELCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJTdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzdGlja3lBZnRlcjogc3RyaW5nOyAgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBpc0Jyb3dzZXIgPSBmYWxzZTtcblxuICAvLyAgIGVsOiBIVE1MRWxlbWVudDtcbiAgZWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyAgIHBhcmVudEVsOiBIVE1MRWxlbWVudDtcbiAgcGFyZW50RWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICAvLyBmaWxsZXJFbDogSFRNTEVsZW1lbnQ7XG4gIGZpbGxlckVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgc3RpY2t5T2Zmc2V0VG9wID0gMDtcblxuICBkaWZmOiBhbnk7XG4gIG9yaWdpbmFsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlcikge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlcik7XG4gICAgICBpZiAoY2V0U3RpY2t5QWZ0ZXJFbCkge1xuICAgICAgICB0aGlzLnN0aWNreU9mZnNldFRvcCA9IGNldFN0aWNreUFmdGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgcGFyZW50IHJlbGF0aXZlbHkgcG9zaXRpb25lZFxuICAgIGNvbnN0IGFsbG93ZWRQb3NpdGlvbnMgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJ107XG4gICAgY29uc3QgcGFyZW50RWxQb3NpdGlvbiA9IGNvbXB1dGVkU3R5bGUodGhpcy5wYXJlbnRFbCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKGFsbG93ZWRQb3NpdGlvbnMuaW5kZXhPZihwYXJlbnRFbFBvc2l0aW9uKSA9PT0gLTEpIHsgLy8gaW5oZXJpdCwgaW5pdGlhbCwgdW5zZXRcbiAgICAgIHRoaXMucGFyZW50RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cblxuICAgIHRoaXMuZGlmZiA9IHtcbiAgICAgIHRvcDogdGhpcy5lbC5vZmZzZXRUb3AgLSB0aGlzLnBhcmVudEVsLm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCAtIHRoaXMucGFyZW50RWwub2Zmc2V0TGVmdFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5vcmlnaW5hbCA9IHtcbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiBlbFJlY3QsXG4gICAgICAgIHBvc2l0aW9uOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpLFxuICAgICAgICBmbG9hdDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnZmxvYXQnKSxcbiAgICAgICAgdG9wOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd0b3AnKSxcbiAgICAgICAgYm90dG9tOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdib3R0b20nKSxcbiAgICAgICAgd2lkdGg6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3dpZHRoJyksXG4gICAgICAgIC8vIGxlZnQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2xlZnQnKSxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG9mZnNldFRvcDogdGhpcy5lbC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgbWFyZ2luVG9wOiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5Ub3AnKSwgMTApLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkJvdHRvbScpLCAxMCksXG4gICAgICAgIG1hcmdpbkxlZnQ6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkxlZnQnKSwgMTApLFxuICAgICAgICBtYXJnaW5SaWdodDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMClcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgICB0aGlzLmF0dGFjaCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIGF0dGFjaCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gbGV0IGVsUmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib2R5UmVjdDogQ2xpZW50UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGR5blByb3BzO1xuXG4gICAgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdyaWdodCcpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gYm9keVJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LnJpZ2h0ICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5SaWdodDtcbiAgICAgIGR5blByb3BzID0ge3JpZ2h0OiByaWdodCArICdweCd9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCArIHRoaXMub3JpZ2luYWwubWFyZ2luTGVmdDtcbiAgICAgIGR5blByb3BzID0ge2xlZnQ6IGxlZnQgKyAncHgnfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudFJlY3QuLi4uLi4uLi4uLi4uLicsIHBhcmVudFJlY3Qud2lkdGgpO1xuICAgICAgZHluUHJvcHMgPSB7d2lkdGg6IHBhcmVudFJlY3Qud2lkdGggKyAncHgnfTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2R5blByb3BzJywgZHluUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20gK1xuICAgICAgdGhpcy5vcmlnaW5hbC5ib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0ICsgdGhpcy5zdGlja3lPZmZzZXRUb3AgPj0gcGFyZW50UmVjdC5ib3R0b20pIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgcmVhY2hlZCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAxIChhYnNvbHV0ZSknLCBwYXJlbnRSZWN0LmJvdHRvbSwgdGhpcy5vcmlnaW5hbC5tYXJnaW5Cb3R0b20pO1xuICAgICAgY29uc3QgZmxvYXRBZGp1c3RtZW50ID1cbiAgICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnID8ge3JpZ2h0OiAwfSA6XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAnbGVmdCcgPyB7bGVmdDogMH0gOiB7fTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgdG9wOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSwgZHluUHJvcHMsIGZsb2F0QWRqdXN0bWVudCk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRSZWN0LnRvcCAqIC0xICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+IHRoaXMub3JpZ2luYWwub2Zmc2V0VG9wKSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBtaWRkbGUgb2YgY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDIgKGZpeGVkKScsIHBhcmVudFJlY3QudG9wICogLTEsIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wLCB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcCk7XG5cbiAgICAgIC8vIGlmIG5vdCBmbG9hdGluZywgYWRkIGFuIGVtcHR5IGZpbGxlciBlbGVtZW50LCBzaW5jZSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgYmVjYW1lcyAnZml4ZWQnXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ2xlZnQnICYmIHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdyaWdodCcgJiYgIXRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbGxlckVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5maWxsZXJFbCwgdGhpcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgLy8gZml4ZWQgaXMgYSBsb3Qgc21vb3RoZXIgdGhhbiBhYnNvbHV0ZVxuICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICB0b3A6IHRoaXMuc3RpY2t5T2Zmc2V0VG9wICsgJ3B4JyxcbiAgICAgICAgYm90dG9tOiAnaW5oZXJpdCdcbiAgICAgIH0sIGR5blByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMyAob3JpZ2luYWwpJyk7XG4gICAgICBpZiAodGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuZmlsbGVyRWwpOyAvLyBJRTExIGRvZXMgbm90IHdvcmsgd2l0aCBlbC5yZW1vdmUoKVxuICAgICAgICB0aGlzLmZpbGxlckVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLm9yaWdpbmFsLnBvc2l0aW9uLFxuICAgICAgICBmbG9hdDogdGhpcy5vcmlnaW5hbC5mbG9hdCxcbiAgICAgICAgdG9wOiB0aGlzLm9yaWdpbmFsLnRvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLm9yaWdpbmFsLmJvdHRvbSxcbiAgICAgICAgd2lkdGg6IHRoaXMub3JpZ2luYWwud2lkdGgsXG4gICAgICAgIGxlZnQ6IHRoaXMub3JpZ2luYWwubGVmdFxuICAgICAgfSwgZHluUHJvcHMpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==