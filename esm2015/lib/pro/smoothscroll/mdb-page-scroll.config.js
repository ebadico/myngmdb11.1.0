/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class EasingLogic {
}
if (false) {
    /**
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @abstract
     * @param {?} t current time
     * @param {?} b beginning value
     * @param {?} c change In value
     * @param {?} d duration
     * @return {?}
     */
    EasingLogic.prototype.ease = function (t, b, c, d) { };
}
// @dynamic
export class PageScrollConfig {
    // Getter and setter to avoid auto completion to suggest calling the method
    /**
     * @return {?}
     */
    static get defaultEasingLogic() {
        return PageScrollConfig._easingLogic;
    }
    /**
     * @param {?} easingLogic
     * @return {?}
     */
    static set defaultEasingLogic(easingLogic) {
        PageScrollConfig._easingLogic = easingLogic;
    }
}
/**
 * The number of milliseconds to wait till updating the scroll position again.
 * Small amounts may produce smoother animations but require more processing power.
 */
PageScrollConfig._interval = 10;
/**
 * The amount of pixels that need to be between the current scrollTop/scrollLeft position
 * and the target position the cause a scroll animation. In case distance is below
 * this threshold, an immediate jump will be performed.
 * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
 * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
 */
PageScrollConfig._minScrollDistance = 2;
/**
 * Name of the default namespace.
 */
PageScrollConfig._defaultNamespace = 'default';
/**
 * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
 * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
 */
PageScrollConfig.defaultIsVerticalScrolling = true;
/**
 * How many console logs should be emitted.
 * 0: None
 * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
 * 5: All scroll position values that get set
 */
PageScrollConfig._logLevel = 2;
/**
 * The duration how long a scrollTo animation should last by default.
 * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
 */
PageScrollConfig.defaultDuration = 1250;
/**
 * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
 * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
 */
PageScrollConfig.defaultScrollOffset = 0;
/**
 * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
 * not (false). Default is false.
 * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
 * the scrollingView container element. Along the way the offset positions of the relative positioned
 * (position: relative) elements will be taken into account for calculating the target elements position.
 */
PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
/**
 * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
 */
PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
/**
 * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
 * scroll animation.
 */
PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
/**
 * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
 * interrupting event while a scroll animation takes place, the scroll animation stops.
 */
PageScrollConfig.defaultInterruptible = true;
PageScrollConfig._easingLogic = {
    ease: (t, b, c, d) => {
        // Linear easing
        return c * t / d + b;
    }
};
if (false) {
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {?}
     */
    PageScrollConfig._interval;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     * @type {?}
     */
    PageScrollConfig._minScrollDistance;
    /**
     * Name of the default namespace.
     * @type {?}
     */
    PageScrollConfig._defaultNamespace;
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     * @type {?}
     */
    PageScrollConfig.defaultIsVerticalScrolling;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     * @type {?}
     */
    PageScrollConfig._logLevel;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {?}
     */
    PageScrollConfig.defaultDuration;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {?}
     */
    PageScrollConfig.defaultScrollOffset;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     * @type {?}
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {?}
     */
    PageScrollConfig._interruptEvents;
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {?}
     */
    PageScrollConfig._interruptKeys;
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {?}
     */
    PageScrollConfig.defaultInterruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollConfig._easingLogic;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBZ0IsV0FBVztDQVVoQzs7Ozs7Ozs7Ozs7O0lBREMsdURBQXlFOzs7QUFRM0UsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFrRnBCLE1BQU0sS0FBSyxrQkFBa0I7UUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxNQUFNLEtBQUssa0JBQWtCLENBQUMsV0FBd0I7UUFDM0QsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7QUFsRmEsMEJBQVMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O0FBU2YsbUNBQWtCLEdBQUcsQ0FBQyxDQUFDOzs7O0FBS3ZCLGtDQUFpQixHQUFHLFNBQVMsQ0FBQzs7Ozs7QUFNOUIsMkNBQTBCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O0FBUWxDLDBCQUFTLEdBQUcsQ0FBQyxDQUFDOzs7OztBQU1kLGdDQUFlLEdBQUcsSUFBSSxDQUFDOzs7OztBQU12QixvQ0FBbUIsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBU3hCLHVEQUFzQyxHQUFHLEtBQUssQ0FBQzs7OztBQUsvQyxpQ0FBZ0IsR0FBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzs7Ozs7QUFNMUcsK0JBQWMsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7O0FBTXBELHFDQUFvQixHQUFHLElBQUksQ0FBQztBQUUzQiw2QkFBWSxHQUFnQjtJQUN6QyxJQUFJLEVBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQVUsRUFBRTtRQUMzRCxnQkFBZ0I7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUM7Ozs7Ozs7SUF6RUYsMkJBQTZCOzs7Ozs7Ozs7SUFTN0Isb0NBQXFDOzs7OztJQUtyQyxtQ0FBNEM7Ozs7OztJQU01Qyw0Q0FBZ0Q7Ozs7Ozs7O0lBUWhELDJCQUE0Qjs7Ozs7O0lBTTVCLGlDQUFxQzs7Ozs7O0lBTXJDLHFDQUFzQzs7Ozs7Ozs7O0lBU3RDLHdEQUE2RDs7Ozs7SUFLN0Qsa0NBQXdIOzs7Ozs7SUFNeEgsZ0NBQWtFOzs7Ozs7SUFNbEUsc0NBQTBDOzs7OztJQUUxQyw4QkFLRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFYXNpbmdMb2dpYyB7XG4gIC8qKlxuICAqIEV4YW1wbGVzIG1heSBiZSBmb3VuZCBhdCBodHRwczovL2dpdGh1Yi5jb20vZ2RzbWl0aC9qcXVlcnkuZWFzaW5nL2Jsb2IvbWFzdGVyL2pxdWVyeS5lYXNpbmcuanNcbiAgKiBvciBodHRwOi8vZ2l6bWEuY29tL2Vhc2luZy9cbiAgKiBAcGFyYW0gdCBjdXJyZW50IHRpbWVcbiAgKiBAcGFyYW0gYiBiZWdpbm5pbmcgdmFsdWVcbiAgKiBAcGFyYW0gYyBjaGFuZ2UgSW4gdmFsdWVcbiAgKiBAcGFyYW0gZCBkdXJhdGlvblxuICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZWFzZSh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBQYWdlU2Nyb2xsVGFyZ2V0ID0gSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgUGFnZVNjcm9sbGluZ1ZpZXdzID0gSFRNTEVsZW1lbnQgfCBEb2N1bWVudCB8IEhUTUxCb2R5RWxlbWVudCB8IE5vZGU7XG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxDb25maWcge1xuXG4gIC8qKlxuICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgdGlsbCB1cGRhdGluZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFnYWluLlxuICAqIFNtYWxsIGFtb3VudHMgbWF5IHByb2R1Y2Ugc21vb3RoZXIgYW5pbWF0aW9ucyBidXQgcmVxdWlyZSBtb3JlIHByb2Nlc3NpbmcgcG93ZXIuXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX2ludGVydmFsID0gMTA7XG5cbiAgLyoqXG4gICogVGhlIGFtb3VudCBvZiBwaXhlbHMgdGhhdCBuZWVkIHRvIGJlIGJldHdlZW4gdGhlIGN1cnJlbnQgc2Nyb2xsVG9wL3Njcm9sbExlZnQgcG9zaXRpb25cbiAgKiBhbmQgdGhlIHRhcmdldCBwb3NpdGlvbiB0aGUgY2F1c2UgYSBzY3JvbGwgYW5pbWF0aW9uLiBJbiBjYXNlIGRpc3RhbmNlIGlzIGJlbG93XG4gICogdGhpcyB0aHJlc2hvbGQsIGFuIGltbWVkaWF0ZSBqdW1wIHdpbGwgYmUgcGVyZm9ybWVkLlxuICAqIER1ZSB0byBkcGkgb3Igcm91bmRpbmcgaXJyZWd1bGFyaXRpZXMgaW4gYnJvd3NlcnMgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBmb3Igc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWVzXG4gICogYXJlIHBvc3NpYmxlLCBtYWtpbmcgYSA9PT0gY29tcGFyaXNvbiBvZiBjdXJyZW50IHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IGFuZCB0YXJnZXQgc2Nyb2xsUG9zaXRpb24gZXJyb3ItcHJvbmUuXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgX21pblNjcm9sbERpc3RhbmNlID0gMjtcblxuICAvKipcbiAgKiBOYW1lIG9mIHRoZSBkZWZhdWx0IG5hbWVzcGFjZS5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfZGVmYXVsdE5hbWVzcGFjZSA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgKiBXaGV0aGVyIGJ5IGRlZmF1bHQgdGhlIHNjcm9sbGluZyBzaG91bGQgaGFwcGVuIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAoYnkgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGxUb3AgcHJvcGVydHkpXG4gICogKD0gdHJ1ZTsgZGVmYXVsdCkgb3IgaW4gaG9yaXpvbnRhbCBkaXJlY3Rpb24gKGJ5IG1hbmlwdWxhdGluZyB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSkgKD0gZmFsc2VcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0SXNWZXJ0aWNhbFNjcm9sbGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICogSG93IG1hbnkgY29uc29sZSBsb2dzIHNob3VsZCBiZSBlbWl0dGVkLlxuICAqIDA6IE5vbmVcbiAgKiAyOiBJZiBhbmltYXRpb24gY291bGQgbm90IGJlIHN0YXJ0ZWQgZHVlIHRvIG1pc3NpbmcgdGFyZ2V0LCBcImFscmVhZHkgYXQgZGVzdGluYXRpb25cIiBvciBzaW1pbGFyIHJlYXNvbnNcbiAgKiA1OiBBbGwgc2Nyb2xsIHBvc2l0aW9uIHZhbHVlcyB0aGF0IGdldCBzZXRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfbG9nTGV2ZWwgPSAyO1xuXG4gIC8qKlxuICAqIFRoZSBkdXJhdGlvbiBob3cgbG9uZyBhIHNjcm9sbFRvIGFuaW1hdGlvbiBzaG91bGQgbGFzdCBieSBkZWZhdWx0LlxuICAqIE1heSBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBwYWdlLXNjcm9sbC1kdXJhdGlvbiBhdHRyaWJ1dGUgb24gYSBzaW5nbGUgbmcyUGFnZVNjcm9sbCBpbnN0YW5jZS5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0RHVyYXRpb24gPSAxMjUwO1xuXG4gIC8qKlxuICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgYWJvdmUgc2Nyb2xsIHRhcmdldCB3aGVyZSB0aGUgYW5pbWF0aW9uIHNob3VsZCBzdG9wLiBTZXR0aW5nIGEgcG9zaXRpdmUgbnVtYmVyIHJlc3VsdHMgaW5cbiAgKiB0aGUgc2Nyb2xsIHRhcmdldCBiZWluZyBtb3JlIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiwgbmVnYXRpdmUgbnVtYmVycyB3aWxsIHByb2R1Y2Ugc2Nyb2xsaW5nIFwidG9vIGZhclwiXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFNjcm9sbE9mZnNldCA9IDA7XG5cbiAgLyoqXG4gICogV2hldGhlciBieSBkZWZhdWx0IGZvciBpbmxpbmUgc2Nyb2xsIGFuaW1hdGlvbnMgdGhlIGFkdmFuY2VkIG9mZnNldCBjYWxjdWxhdGlvbiBzaG91bGQgdGFrZSBwbGFjZSAodHJ1ZSkgb3JcbiAgKiBub3QgKGZhbHNlKS4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgKiBUaGUgYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIHdpbGwgdHJhdmVyc2UgdGhlIERPTSB0cmVlIHVwd2FyZHMsIHN0YXJ0aW5nIGF0IHRoZSBzY3JvbGxUYXJnZXQsIHVudGlsIGl0IGZpbmRzXG4gICogdGhlIHNjcm9sbGluZ1ZpZXcgY29udGFpbmVyIGVsZW1lbnQuIEFsb25nIHRoZSB3YXkgdGhlIG9mZnNldCBwb3NpdGlvbnMgb2YgdGhlIHJlbGF0aXZlIHBvc2l0aW9uZWRcbiAgKiAocG9zaXRpb246IHJlbGF0aXZlKSBlbGVtZW50cyB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCBmb3IgY2FsY3VsYXRpbmcgdGhlIHRhcmdldCBlbGVtZW50cyBwb3NpdGlvbi5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIFRoZSBldmVudHMgdGhhdCBhcmUgbGlzdGVuZWQgdG8gb24gdGhlIGJvZHkgdG8gZGVjaWRlIHdoZXRoZXIgYSBzY3JvbGwgYW5pbWF0aW9uIGhhcyBiZWVuIGludGVyZmVyZWQvaW50ZXJydXB0ZWQgYnkgdGhlIHVzZXJcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBfaW50ZXJydXB0RXZlbnRzOiBzdHJpbmdbXSA9IFsnbW91c2Vkb3duJywgJ3doZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ21vdXNld2hlZWwnLCAna2V5dXAnLCAndG91Y2htb3ZlJ107XG5cbiAgLyoqXG4gICogVGhlIGtleXMgdGhhdCBhcmUgY29uc2lkZXJlZCB0byBpbnRlcnJ1cHQgYSBzY3JvbGwgYW5pbWF0aW9uIChtYWlubHkgdGhlIGFycm93IGtleXMpLiBBbGwgb3RoZXIga2V5IHByZXNzZXMgd2lsbCBub3Qgc3RvcCB0aGVcbiAgKiBzY3JvbGwgYW5pbWF0aW9uLlxuICAqL1xuICBwdWJsaWMgc3RhdGljIF9pbnRlcnJ1cHRLZXlzOiBudW1iZXJbXSA9IFszMywgMzQsIDM1LCAzNiwgMzgsIDQwXTtcblxuICAvKipcbiAgKiBXaGV0aGVyIGEgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZSBieSB1c2VyIGludGVyYWN0aW9uICh0cnVlKSBvciBub3QgKGZhbHNlKS4gSWYgdGhlIHVzZXIgcGVyZm9ybXMgYW5cbiAgKiBpbnRlcnJ1cHRpbmcgZXZlbnQgd2hpbGUgYSBzY3JvbGwgYW5pbWF0aW9uIHRha2VzIHBsYWNlLCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdG9wcy5cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0SW50ZXJydXB0aWJsZSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2Vhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYyA9IHtcbiAgICBlYXNlOiAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgIC8vIExpbmVhciBlYXNpbmdcbiAgICAgIHJldHVybiBjICogdCAvIGQgKyBiO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXR0ZXIgYW5kIHNldHRlciB0byBhdm9pZCBhdXRvIGNvbXBsZXRpb24gdG8gc3VnZ2VzdCBjYWxsaW5nIHRoZSBtZXRob2RcbiAgcHVibGljIHN0YXRpYyBnZXQgZGVmYXVsdEVhc2luZ0xvZ2ljKCk6IEVhc2luZ0xvZ2ljIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbENvbmZpZy5fZWFzaW5nTG9naWM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldCBkZWZhdWx0RWFzaW5nTG9naWMoZWFzaW5nTG9naWM6IEVhc2luZ0xvZ2ljKSB7XG4gICAgUGFnZVNjcm9sbENvbmZpZy5fZWFzaW5nTG9naWMgPSBlYXNpbmdMb2dpYztcbiAgfVxuXG59XG4iXX0=