/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window, document } from './facade/browser';
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        ((/**
         * @param {?} bs
         * @return {?}
         */
        function (bs) { return bs; }))(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    };
    /**
     * @param {?} event
     * @param {?} el
     * @return {?}
     */
    Utils.prototype.focusTrapModal = /**
     * @param {?} event
     * @param {?} el
     * @return {?}
     */
    function (event, el) {
        /** @type {?} */
        var focusableElements;
        /** @type {?} */
        var firstFocusableElement;
        /** @type {?} */
        var lastFocusableElement;
        /** @type {?} */
        var KEYCODE_TAB = 9;
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
    };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    Utils.prototype.getClosestEl = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.prototype.getCoords = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        /** @type {?} */
        var box = elem.getBoundingClientRect();
        /** @type {?} */
        var body = document.body;
        /** @type {?} */
        var docEl = document.documentElement;
        /** @type {?} */
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        var clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        /** @type {?} */
        var top = box.top + scrollTop - clientTop;
        /** @type {?} */
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return Utils;
}());
export { Utils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy91dGlscy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdwRDtJQUNFO0lBRUEsQ0FBQzs7Ozs7SUFDYSxZQUFNOzs7O0lBQXBCLFVBQXFCLE9BQVk7UUFDL0I7Ozs7UUFBQyxVQUFDLEVBQU8sSUFBVyxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdGQUFnRjs7Ozs7O0lBQ2xFLGVBQVM7Ozs7OztJQUF2QixVQUF3QixJQUFTOzs7OztZQUkzQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO1FBRXpDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksR0FBRyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVNLDhCQUFjOzs7OztJQUFyQixVQUFzQixLQUEwQixFQUFFLEVBQWM7O1lBQzFELGlCQUFzQjs7WUFDdEIscUJBQTBCOztZQUMxQixvQkFBeUI7O1lBRXZCLFdBQVcsR0FBRyxDQUFDO1FBRXJCLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsK0dBQStHLENBQUMsQ0FBQztRQUN2SyxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkUsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUN4RCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxhQUFhLEtBQUsscUJBQXFCLEVBQUU7b0JBQ2hFLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3hCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxvQkFBb0IsRUFBRTtvQkFDL0QscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sNEJBQVk7Ozs7O0lBQW5CLFVBQW9CLEVBQU8sRUFBRSxRQUFnQjtRQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0seUJBQVM7Ozs7SUFBaEIsVUFBaUIsSUFBUzs7WUFDaEIsR0FBRyxHQUFlLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7WUFDOUMsSUFBSSxHQUFRLFFBQVEsQ0FBQyxJQUFJOztZQUN6QixLQUFLLEdBQVEsUUFBUSxDQUFDLGVBQWU7O1lBRXJDLFNBQVMsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVM7O1lBQzNFLFVBQVUsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O1lBRTlFLFNBQVMsR0FBVyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7WUFDMUQsVUFBVSxHQUFXLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDOztZQUU3RCxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUzs7WUFDN0MsSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLFVBQVU7UUFFdkQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93LCBkb2N1bWVudCB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIHB1YmxpYyBzdGF0aWMgcmVmbG93KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgICgoYnM6IGFueSk6IHZvaWQgPT4gYnMpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgfVxuXG4gIC8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi9tYXN0ZXIvc3JjL2Nzcy92YXIvZ2V0U3R5bGVzLmpzXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9XG5cbiAgcHVibGljIGZvY3VzVHJhcE1vZGFsKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgYW55LCBlbDogRWxlbWVudFJlZikge1xuICAgIGxldCBmb2N1c2FibGVFbGVtZW50czogYW55O1xuICAgIGxldCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQ6IGFueTtcbiAgICBsZXQgbGFzdEZvY3VzYWJsZUVsZW1lbnQ6IGFueTtcblxuICAgIGNvbnN0IEtFWUNPREVfVEFCID0gOTtcblxuICAgIGZvY3VzYWJsZUVsZW1lbnRzID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBmb3JtLCBtZGItc2VsZWN0LCBtZGItYXV0by1jb21wbGV0ZXIsIG1kYi1jaGVja2JveCwgbWRiLXJhbmdlLWlucHV0Jyk7XG4gICAgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWUNPREVfVEFCKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMgJiYgZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb29yZHMoZWxlbTogYW55KTogYW55IHtcbiAgICAgIGNvbnN0IGJveDogQ2xpZW50UmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5OiBhbnkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdDogbnVtYmVyID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICBjb25zdCBjbGllbnRUb3A6IG51bWJlciA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgICAgY29uc3QgY2xpZW50TGVmdDogbnVtYmVyID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgICAgY29uc3QgbGVmdDogbnVtYmVyID0gYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdDtcblxuICAgICAgcmV0dXJuIHt0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KX07XG4gIH1cbn1cbiJdfQ==