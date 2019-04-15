/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window, document } from './facade/browser';
export class Utils {
    constructor() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static reflow(element) {
        ((/**
         * @param {?} bs
         * @return {?}
         */
        (bs) => bs))(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    }
    /**
     * @param {?} event
     * @param {?} el
     * @return {?}
     */
    focusTrapModal(event, el) {
        /** @type {?} */
        let focusableElements;
        /** @type {?} */
        let firstFocusableElement;
        /** @type {?} */
        let lastFocusableElement;
        /** @type {?} */
        const KEYCODE_TAB = 9;
        focusableElements = el.nativeElement.querySelectorAll('a[href], button, textarea, input, select, form, mdb-select, mdb-auto-completer, mdb-checkbox, mdb-range-input');
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
            if (event.shiftKey) {
                if (document && document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            }
            else {
                if (document && document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    getClosestEl(el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    getCoords(elem) {
        /** @type {?} */
        const box = elem.getBoundingClientRect();
        /** @type {?} */
        const body = document.body;
        /** @type {?} */
        const docEl = document.documentElement;
        /** @type {?} */
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        const clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        /** @type {?} */
        const top = box.top + scrollTop - clientTop;
        /** @type {?} */
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy91dGlscy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdwRCxNQUFNLE9BQU8sS0FBSztJQUNoQjtJQUVBLENBQUM7Ozs7O0lBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFZO1FBQy9COzs7O1FBQUMsQ0FBQyxFQUFPLEVBQVEsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFHTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVM7Ozs7O1lBSTNCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7UUFFekMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU0sY0FBYyxDQUFDLEtBQTBCLEVBQUUsRUFBYzs7WUFDMUQsaUJBQXNCOztZQUN0QixxQkFBMEI7O1lBQzFCLG9CQUF5Qjs7Y0FFdkIsV0FBVyxHQUFHLENBQUM7UUFFckIsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBQ3ZLLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2RSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsRUFBRTtvQkFDaEUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLG9CQUFvQixFQUFFO29CQUMvRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxZQUFZLENBQUMsRUFBTyxFQUFFLFFBQWdCO1FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsSUFBUzs7Y0FDaEIsR0FBRyxHQUFlLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDOUMsSUFBSSxHQUFRLFFBQVEsQ0FBQyxJQUFJOztjQUN6QixLQUFLLEdBQVEsUUFBUSxDQUFDLGVBQWU7O2NBRXJDLFNBQVMsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVM7O2NBQzNFLFVBQVUsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O2NBRTlFLFNBQVMsR0FBVyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDMUQsVUFBVSxHQUFXLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDOztjQUU3RCxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUzs7Y0FDN0MsSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLFVBQVU7UUFFdkQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93LCBkb2N1bWVudCB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIHB1YmxpYyBzdGF0aWMgcmVmbG93KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgICgoYnM6IGFueSk6IHZvaWQgPT4gYnMpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgfVxuXG4gIC8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi9tYXN0ZXIvc3JjL2Nzcy92YXIvZ2V0U3R5bGVzLmpzXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9XG5cbiAgcHVibGljIGZvY3VzVHJhcE1vZGFsKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgYW55LCBlbDogRWxlbWVudFJlZikge1xuICAgIGxldCBmb2N1c2FibGVFbGVtZW50czogYW55O1xuICAgIGxldCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQ6IGFueTtcbiAgICBsZXQgbGFzdEZvY3VzYWJsZUVsZW1lbnQ6IGFueTtcblxuICAgIGNvbnN0IEtFWUNPREVfVEFCID0gOTtcblxuICAgIGZvY3VzYWJsZUVsZW1lbnRzID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBmb3JtLCBtZGItc2VsZWN0LCBtZGItYXV0by1jb21wbGV0ZXIsIG1kYi1jaGVja2JveCwgbWRiLXJhbmdlLWlucHV0Jyk7XG4gICAgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWUNPREVfVEFCKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMgJiYgZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb29yZHMoZWxlbTogYW55KTogYW55IHtcbiAgICAgIGNvbnN0IGJveDogQ2xpZW50UmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5OiBhbnkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdDogbnVtYmVyID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICBjb25zdCBjbGllbnRUb3A6IG51bWJlciA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgICAgY29uc3QgY2xpZW50TGVmdDogbnVtYmVyID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgICAgY29uc3QgbGVmdDogbnVtYmVyID0gYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdDtcblxuICAgICAgcmV0dXJuIHt0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KX07XG4gIH1cbn1cbiJdfQ==