/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window } from './facade/browser';
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
    return Utils;
}());
export { Utils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy91dGlscy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzFDO0lBQ0U7SUFFQSxDQUFDOzs7OztJQUNhLFlBQU07Ozs7SUFBcEIsVUFBcUIsT0FBWTtRQUMvQjs7OztRQUFDLFVBQUMsRUFBTyxJQUFXLE9BQUEsRUFBRSxFQUFGLENBQUUsRUFBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0ZBQWdGOzs7Ozs7SUFDbEUsZUFBUzs7Ozs7O0lBQXZCLFVBQXdCLElBQVM7Ozs7O1lBSTNCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7UUFFekMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU0sOEJBQWM7Ozs7O0lBQXJCLFVBQXNCLEtBQTBCLEVBQUUsRUFBYzs7WUFDMUQsaUJBQXNCOztZQUN0QixxQkFBMEI7O1lBQzFCLG9CQUF5Qjs7WUFFdkIsV0FBVyxHQUFHLENBQUM7UUFFckIsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBQ3ZLLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2RSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsRUFBRTtvQkFDaEUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLG9CQUFvQixFQUFFO29CQUMvRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuICBwdWJsaWMgc3RhdGljIHJlZmxvdyhlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xuICBwdWJsaWMgc3RhdGljIGdldFN0eWxlcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcbiAgICAvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcbiAgICAvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcbiAgICBsZXQgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICAgIHZpZXcgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c1RyYXBNb2RhbChldmVudDogS2V5Ym9hcmRFdmVudCB8IGFueSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBsZXQgZm9jdXNhYmxlRWxlbWVudHM6IGFueTtcbiAgICBsZXQgZmlyc3RGb2N1c2FibGVFbGVtZW50OiBhbnk7XG4gICAgbGV0IGxhc3RGb2N1c2FibGVFbGVtZW50OiBhbnk7XG5cbiAgICBjb25zdCBLRVlDT0RFX1RBQiA9IDk7XG5cbiAgICBmb2N1c2FibGVFbGVtZW50cyA9IGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXSwgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgZm9ybSwgbWRiLXNlbGVjdCwgbWRiLWF1dG8tY29tcGxldGVyLCBtZGItY2hlY2tib3gsIG1kYi1yYW5nZS1pbnB1dCcpO1xuICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgIGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXlDb2RlID09PSBLRVlDT0RFX1RBQikge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==