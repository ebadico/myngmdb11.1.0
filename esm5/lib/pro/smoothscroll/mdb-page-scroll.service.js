/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { PageScrollConfig } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollService = /** @class */ (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (PageScrollConfig._interruptKeys.indexOf(((/** @type {?} */ (event))).keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(function (scrollingView) { return scrollingView.contains(event.target); })) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stopInternal = /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (interrupted, pageScrollInstance) {
        /** @type {?} */
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.start = /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        /** @type {?} */
        var startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach(function (scrollingView) {
            if (Util.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        /** @type {?} */
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (isDevMode()) {
                // console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        /** @type {?} */
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!Util.isUndefinedOrNull(pageScrollInstance.speed) && Util.isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration = pageScrollInstance.distanceToScroll / pageScrollInstance.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        /** @type {?} */
        var tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (isDevMode()) {
                if (allReadyAtDestination) {
                    // console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    // console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (Util.isUndefinedOrNull(pageScrollInstance.interruptible) && PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            /** @type {?} */
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            var newScrollPosition;
            /** @type {?} */
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     */
    //   public stopAll(namespace?: string): boolean {
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    PageScrollService.prototype.stopAll = /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    function (namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                var pageScrollInstance = this.runningInstances[i];
                if (Util.isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return []; };
    return PageScrollService;
}());
export { PageScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageScrollService.instanceCounter;
    /**
     * @type {?}
     * @private
     */
    PageScrollService.prototype.runningInstances;
    /**
     * @type {?}
     * @private
     */
    PageScrollService.prototype.onInterrupted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Ntb290aHNjcm9sbC9tZGItcGFnZS1zY3JvbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFDLHFCQUFxQixJQUFJLElBQUksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTdFO0lBcU9FO1FBQUEsaUJBTUM7UUF0T08scUJBQWdCLEdBQXlCLEVBQUUsQ0FBQztRQUU1QyxrQkFBYSxHQUFzQjtZQUN6QyxNQUFNLEVBQUUsVUFBQyxLQUFZLEVBQUUsa0JBQXNDO2dCQUMzRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO29CQUNuQyxvREFBb0Q7b0JBQ3BELE9BQU87aUJBQ1Y7O29CQUVHLFVBQVUsR0FBRyxJQUFJO2dCQUVyQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN4QixtRkFBbUY7b0JBQ25GLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFlLEtBQUssRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ2hGLDBEQUEwRDt3QkFDMUQsVUFBVSxHQUFHLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFDbkMsMEVBQTBFO29CQUMxRSw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxDQUFDLFFBQVEs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LElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQzVDLDZFQUE2RTtvQkFDN0UsQ0FBQyxFQUFFLENBQUM7aUJBQ1A7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLGdDQUFJOzs7O0lBQVgsVUFBWSxrQkFBc0M7UUFDOUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFoT2MsaUNBQWUsR0FBRyxDQUFDLENBQUM7O2dCQUhwQyxVQUFVOzs7O0lBNE9YLHdCQUFDO0NBQUEsQUE1T0QsSUE0T0M7U0EzT1ksaUJBQWlCOzs7Ozs7SUFFNUIsa0NBQW1DOzs7OztJQUVuQyw2Q0FBb0Q7Ozs7O0lBRXBELDBDQTRCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgaXNEZXZNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtQYWdlU2Nyb2xsQ29uZmlnfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuaW1wb3J0IHtQYWdlU2Nyb2xsSW5zdGFuY2UsIEludGVycnVwdFJlcG9ydGVyfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5pbnN0YW5jZSc7XG5pbXBvcnQge1BhZ2VTY3JvbGxVdGlsU2VydmljZSBhcyBVdGlsfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlQ291bnRlciA9IDA7XG5cbiAgcHJpdmF0ZSBydW5uaW5nSW5zdGFuY2VzOiBQYWdlU2Nyb2xsSW5zdGFuY2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgb25JbnRlcnJ1cHRlZDogSW50ZXJydXB0UmVwb3J0ZXIgPSB7XG4gICAgcmVwb3J0OiAoZXZlbnQ6IEV2ZW50LCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0aWJsZSkge1xuICAgICAgICAgIC8vIE5vbi1pbnRlcnJ1cHRpYmxlIGFueXdheSwgc28gZG8gbm90IHN0b3AgYW55dGhpbmdcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBzaG91bGRTdG9wID0gdHJ1ZTtcblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAvLyBPbmx5IHN0b3AgaWYgc3BlY2lmaWMga2V5cyBoYXZlIGJlZW4gcHJlc3NlZCwgZm9yIGFsbCBvdGhlcnMgZG9uJ3Qgc3RvcCBhbnl0aGluZ1xuICAgICAgICAgIGlmIChQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRLZXlzLmluZGV4T2YoKDxLZXlib2FyZEV2ZW50PmV2ZW50KS5rZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gVGhlIHByZXNzZWQga2V5IGlzIG5vdCBpbiB0aGUgbGlzdCBvZiBpbnRlcnJ1cHRpbmcga2V5c1xuICAgICAgICAgICAgICBzaG91bGRTdG9wID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICAgIC8vIEZvciBtb3VzZWRvd24gZXZlbnRzIHdlIG9ubHkgc3RvcCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBvZiB0aGUgbW91c2UgaGFzXG4gICAgICAgICAgLy8gYmVlbiBjbGlja2VkIGluc2lkZSB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lclxuICAgICAgICAgIGlmICghcGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbGluZ1ZpZXdzLnNvbWUoc2Nyb2xsaW5nVmlldyA9PiBzY3JvbGxpbmdWaWV3LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICAgICAgICAgIC8vIE1vdXNlIGNsaWNrZWQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgaW5zaWRlIGFueSBvZiB0aGUgdGhlIHNjcm9sbGluZyBjb250YWluZXJzXG4gICAgICAgICAgICAgIHNob3VsZFN0b3AgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRTdG9wKSB7XG4gICAgICAgICAgdGhpcy5zdG9wQWxsKHBhZ2VTY3JvbGxJbnN0YW5jZS5uYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHN0b3BJbnRlcm5hbChpbnRlcnJ1cHRlZDogYm9vbGVhbiwgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5ydW5uaW5nSW5zdGFuY2VzLmluZGV4T2YocGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5kZXRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyKSB7XG4gICAgICAgIC8vIENsZWFyL1N0b3AgdGhlIHRpbWVyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyKTtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHJlZmVyZW5jZSB0byB0aGlzIHRpbWVyXG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS50aW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmZpcmVFdmVudCghaW50ZXJydXB0ZWQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgc2Nyb2xsIGFuaW1hdGlvbi4gQWxsIHByb3BlcnRpZXMgb2YgdGhlIGFuaW1hdGlvbiBhcmUgc3RvcmVkIGluIHRoZSBnaXZlbiB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlfSBvYmplY3QuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIGNvcmUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgd2hvbGUgbGlicmFyeS5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxJbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXJ0KHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAvLyBTdG9wIGFsbCBwb3NzaWJseSBydW5uaW5nIHNjcm9sbCBhbmltYXRpb25zIGluIHRoZSBzYW1lIG5hbWVzcGFjZVxuICAgICAgdGhpcy5zdG9wQWxsKHBhZ2VTY3JvbGxJbnN0YW5jZS5uYW1lc3BhY2UpO1xuXG4gICAgICBpZiAocGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbGluZ1ZpZXdzID09PSBudWxsIHx8IHBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBObyBzY3JvbGxpbmdWaWV3cyBzcGVjaWZpZWQsIHRodXMgd2UgY2FuJ3QgYW5pbWF0ZSBhbnl0aGluZ1xuICAgICAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHNjcm9sbGluZ1ZpZXdzIHNwZWNpZmllZCwgdGhpcyBuZzItcGFnZS1zY3JvbGwgZG9lcyBub3Qga25vdyB3aGljaCBET00gZWxlbWVudHMgdG8gc2Nyb2xsJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXJ0U2Nyb2xsUG9zaXRpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgLy8gUmVzZXQgc3RhcnQgc2Nyb2xsIHBvc2l0aW9uIHRvIDAuIElmIGFueSBvZiB0aGUgc2Nyb2xsaW5nVmlld3MgaGFzIGEgZGlmZmVyZW50IG9uZSwgaXQgd2lsbCBiZSBleHRyYWN0ZWQgbmV4dFxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb24gPSAwO1xuXG4gICAgICAvLyBHZXQgdGhlIHN0YXJ0IHNjcm9sbCBwb3NpdGlvbiBmcm9tIHRoZSBzY3JvbGxpbmdWaWV3cyAoZS5nLiBpZiB0aGUgdXNlciBhbHJlYWR5IHNjcm9sbGVkIGRvd24gdGhlIGNvbnRlbnQpXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsaW5nVmlld3MuZm9yRWFjaCgoc2Nyb2xsaW5nVmlldzogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwoc2Nyb2xsaW5nVmlldykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBHZXQgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHZhbHVlIG9mIHRoZSBmaXJzdCBzY3JvbGxpbmdWaWV3IHRoYXQgcmV0dXJucyBhIHZhbHVlIGZvciBpdHMgXCJzY3JvbGxUb3BcIlxuICAgICAgICAgIC8vIG9yIFwic2Nyb2xsTGVmdFwiIHByb3BlcnR5IHRoYXQgaXMgbm90IHVuZGVmaW5lZCBhbmQgdW5lcXVhbCB0byAwXG5cbiAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5nZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXcpO1xuICAgICAgICAgIGlmICghc3RhcnRTY3JvbGxQb3NpdGlvbkZvdW5kICYmIHNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgc2Nyb2xsaW5nVmlldyB0aGF0IGRvZXMgbm90IGhhdmUgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgMFxuXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc2Nyb2xsIHBvc2l0aW9uIHZhbHVlLCBhcyB0aGlzIHdpbGwgYmUgb3VyIHN0YXJ0U2Nyb2xsUG9zaXRpb25cbiAgICAgICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICAgICAgc3RhcnRTY3JvbGxQb3NpdGlvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFnZVNjcm9sbE9mZnNldCA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5nZXRDdXJyZW50T2Zmc2V0KCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGFyZ2V0IHBvc2l0aW9uIHRoYXQgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGdvIHRvXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldFBvc2l0aW9uID0gcGFnZVNjcm9sbEluc3RhbmNlLmV4dHJhY3RTY3JvbGxUYXJnZXRQb3NpdGlvbigpO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAocGFnZVNjcm9sbEluc3RhbmNlLnZlcnRpY2FsU2Nyb2xsaW5nID8gc2Nyb2xsVGFyZ2V0UG9zaXRpb24udG9wIDogc2Nyb2xsVGFyZ2V0UG9zaXRpb24ubGVmdCkgLSBwYWdlU2Nyb2xsT2Zmc2V0KTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSB3ZSBuZWVkIHRvIGdvIGluIHRvdGFsXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZGlzdGFuY2VUb1Njcm9sbCA9IHBhZ2VTY3JvbGxJbnN0YW5jZS50YXJnZXRTY3JvbGxQb3NpdGlvbiAtIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFNjcm9sbFBvc2l0aW9uO1xuXG4gICAgICBpZiAoaXNOYU4ocGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwpKSB7XG4gICAgICAgICAgLy8gV2Ugd2VyZW4ndCBhYmxlIHRvIGZpbmQgdGhlIHRhcmdldCBwb3NpdGlvbiwgbWF5YmUgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3Q/XG5cbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Njcm9sbGluZyBub3QgcG9zc2libGUsIGFzIHdlIGNhblxcJ3QgZmluZCB0aGUgc3BlY2lmaWVkIHRhcmdldCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZmlyZUV2ZW50KGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlJ3JlIGF0IHRoZSBmaW5hbCBkZXN0aW5hdGlvbiBhbHJlYWR5XG4gICAgICAvLyBPUiB3ZSBuZWVkIHRvIHNjcm9sbCBkb3duIGJ1dCBhcmUgYWxyZWFkeSBhdCB0aGUgZW5kXG4gICAgICAvLyBPUiB3ZSBuZWVkIHRvIHNjcm9sbCB1cCBidXQgYXJlIGF0IHRoZSB0b3AgYWxyZWFkeVxuICAgICAgY29uc3QgYWxsUmVhZHlBdERlc3RpbmF0aW9uID0gTWF0aC5hYnMocGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwpIDwgUGFnZVNjcm9sbENvbmZpZy5fbWluU2Nyb2xsRGlzdGFuY2U7XG5cbiAgICAgIC8vIENoZWNrIGhvdyBsb25nIHdlIG5lZWQgdG8gc2Nyb2xsIGlmIGEgc3BlZWQgb3B0aW9uIGlzIGdpdmVuXG4gICAgICAvLyBEZWZhdWx0IGV4ZWN1dGlvbkR1cmF0aW9uIGlzIHRoZSBzcGVjaWZpZWQgZHVyYXRpb25cbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5leGVjdXRpb25EdXJhdGlvbiA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5kdXJhdGlvbjtcbiAgICAgIC8vIE1heWJlIHdlIG5lZWQgdG8gcGF5IGF0dGVudGlvbiB0byB0aGUgc3BlZWQgb3B0aW9uP1xuICAgICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhZ2VTY3JvbGxJbnN0YW5jZS5zcGVlZCkgJiYgVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChwYWdlU2Nyb2xsSW5zdGFuY2UuZHVyYXRpb24pKSB7XG4gICAgICAgICAgLy8gU3BlZWQgb3B0aW9uIGlzIHNldCBhbmQgbm8gZHVyYXRpb24gPT4gY2FsY3VsYXRlIGR1cmF0aW9uIGJhc2VkIG9uIHNwZWVkIGFuZCBzY3JvbGwgZGlzdGFuY2VcbiAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZGlzdGFuY2VUb1Njcm9sbCAvIHBhZ2VTY3JvbGxJbnN0YW5jZS5zcGVlZCAqIDEwMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHNob3VsZCBnbyB0aGVyZSBkaXJlY3RseSwgYXMgb3VyIFwiYW5pbWF0aW9uXCIgd291bGQgaGF2ZSBvbmUgYmlnIHN0ZXBcbiAgICAgIC8vIG9ubHkgYW55d2F5IGFuZCB0aGlzIHdheSB3ZSBzYXZlIHRoZSBpbnRlcnZhbCBzdHVmZlxuICAgICAgY29uc3QgdG9vU2hvcnRJbnRlcnZhbCA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5leGVjdXRpb25EdXJhdGlvbiA8PSBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnZhbDtcblxuICAgICAgaWYgKGFsbFJlYWR5QXREZXN0aW5hdGlvbiB8fCB0b29TaG9ydEludGVydmFsKSB7XG4gICAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgICAgICAgIGlmIChhbGxSZWFkeUF0RGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTY3JvbGxpbmcgbm90IHBvc3NpYmxlLCBhcyB3ZSBjYW5cXCd0IGdldCBhbnkgY2xvc2VyIHRvIHRoZSBkZXN0aW5hdGlvbicpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Njcm9sbCBkdXJhdGlvbiBzaG9ydGVyIHRoYXQgaW50ZXJ2YWwgbGVuZ3RoLCBqdW1waW5nIHRvIHRhcmdldCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zZXRTY3JvbGxQb3NpdGlvbihwYWdlU2Nyb2xsSW5zdGFuY2UudGFyZ2V0U2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5maXJlRXZlbnQodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciB0aGUgaW50ZXJydXB0IGxpc3RlbmVycyBpZiB3ZSB3YW50IGFuIGludGVycnVwdGlibGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgICAgaWYgKHBhZ2VTY3JvbGxJbnN0YW5jZS5pbnRlcnJ1cHRpYmxlIHx8XG4gICAgICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwocGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdGlibGUpICYmIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEludGVycnVwdGlibGUpKSB7XG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmF0dGFjaEludGVycnVwdExpc3RlbmVycyh0aGlzLm9uSW50ZXJydXB0ZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBMZXQncyBnZXQgc3RhcnRlZCwgZ2V0IHRoZSBzdGFydCB0aW1lLi4uXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAvLyAuLiBhbmQgY2FsY3VsYXRlIHRoZSBlbmQgdGltZSAod2hlbiB3ZSBuZWVkIHRvIGZpbmlzaCBhdCBsYXN0KVxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmVuZFRpbWUgPSBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRUaW1lICsgcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uO1xuXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UudGltZXIgPSBzZXRJbnRlcnZhbCgoX3BhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgLy8gVGFrZSB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgY29uc3QgY3VycmVudFRpbWU6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgbGV0IG5ld1Njcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gICAgICAgICAgbGV0IHN0b3BOb3cgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoX3BhZ2VTY3JvbGxJbnN0YW5jZS5lbmRUaW1lIDw9IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3JlIG92ZXIgdGhlIHRpbWUgYWxyZWFkeSwgc28gZ28gdGhlIHRhcmdldFNjcm9sbFBvc2l0aW9uIChha2EgZGVzdGluYXRpb24pXG4gICAgICAgICAgICAgIG5ld1Njcm9sbFBvc2l0aW9uID0gX3BhZ2VTY3JvbGxJbnN0YW5jZS50YXJnZXRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICAgICAgc3RvcE5vdyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY3JvbGwgcG9zaXRpb24gYmFzZWQgb24gdGhlIGN1cnJlbnQgdGltZSB1c2luZyB0aGUgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgICAgICAgIG5ld1Njcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChfcGFnZVNjcm9sbEluc3RhbmNlLmVhc2luZ0xvZ2ljLmVhc2UoXG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGltZSAtIF9wYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgX3BhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFNjcm9sbFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgX3BhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsLFxuICAgICAgICAgICAgICAgICAgX3BhZ2VTY3JvbGxJbnN0YW5jZS5leGVjdXRpb25EdXJhdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTZXQgdGhlIG5ldyBzY3JvbGxQb3NpdGlvbiB0byBhbGwgc2Nyb2xsaW5nVmlld3MgZWxlbWVudHNcbiAgICAgICAgICBpZiAoIV9wYWdlU2Nyb2xsSW5zdGFuY2Uuc2V0U2Nyb2xsUG9zaXRpb24obmV3U2Nyb2xsUG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBmYWlsZWQgZm9yIGFsbCBTY3JvbGxpbmdWaWV3c1xuICAgICAgICAgICAgICAvLyBlYXJseSBzdG9wIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHRvIHNhdmUgcmVzb3VyY2VzXG4gICAgICAgICAgICAgIHN0b3BOb3cgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEF0IHRoZSBlbmQgZG8gdGhlIGludGVybmFsIHN0b3AgbWFpbnRlbmFuY2UgYW5kIGZpcmUgdGhlIHBhZ2VTY3JvbGxGaW5pc2ggZXZlbnRcbiAgICAgICAgICAvLyAob3RoZXJ3aXNlIHRoZSBldmVudCBtaWdodCBhcnJpdmUgYXQgXCJ0b28gZWFybHlcIilcbiAgICAgICAgICBpZiAoc3RvcE5vdykge1xuICAgICAgICAgICAgICB0aGlzLnN0b3BJbnRlcm5hbChmYWxzZSwgX3BhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gICAgICAgICAgfVxuXG4gICAgICB9LCBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnZhbCwgcGFnZVNjcm9sbEluc3RhbmNlKTtcblxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGluc3RhbmNlIGFzIHJ1bm5pbmcgb25lXG4gICAgICB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMucHVzaChwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYWxsIHJ1bm5pbmcgc2Nyb2xsIGFuaW1hdGlvbnMuIE9wdGlvbmFsbHkgbGltaXQgdG8gc3RvcCBvbmx5IHRoZSBvbmVzIG9mIHNwZWNpZmljIG5hbWVzcGFjZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVzcGFjZVxuICAgKi9cbi8vICAgcHVibGljIHN0b3BBbGwobmFtZXNwYWNlPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcHVibGljIHN0b3BBbGwobmFtZXNwYWNlPzogc3RyaW5nIHwgYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucnVubmluZ0luc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBzdG9wcGVkU29tZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ydW5uaW5nSW5zdGFuY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2UgPSB0aGlzLnJ1bm5pbmdJbnN0YW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChuYW1lc3BhY2UpIHx8IG5hbWVzcGFjZS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBzdG9wcGVkU29tZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJuYWwodHJ1ZSwgcGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAvLyBEZWNyZWFzZSB0aGUgY291bnRlciwgYXMgd2UgcmVtb3ZlZCBhbiBpdGVtIGZyb20gdGhlIGFycmF5IHdlIGl0ZXJhdGUgb3ZlclxuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcHBlZFNvbWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9wSW50ZXJuYWwodHJ1ZSwgcGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgaWYgKFBhZ2VTY3JvbGxTZXJ2aWNlLmluc3RhbmNlQ291bnRlciA+IDAgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGluc3RhbmNlIG9mIFBhZ2VTY3JvbGxTZXJ2aWNlIGFscmVhZHkgZXhpc3RzLCB1c3VhbGx5ICcgK1xuICAgICAgICAgICAgICAnaW5jbHVkaW5nIG9uZSBwcm92aWRlciBzaG91bGQgYmUgZW5vdWdoLCBzbyBkb3VibGUgY2hlY2suJyk7XG4gICAgICB9XG4gICAgICBQYWdlU2Nyb2xsU2VydmljZS5pbnN0YW5jZUNvdW50ZXIrKztcbiAgfVxufVxuIl19