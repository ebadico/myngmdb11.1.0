/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    WavesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbWavesEffect]'
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());
export { WavesDirective };
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRTtJQU1FLHdCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUdNLDhCQUFLOzs7O0lBRFosVUFDYSxLQUFVO1FBQ3JCLDJCQUEyQjtRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBRW5ELE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM5QyxNQUFNLENBQUMsU0FBUyxJQUFJLGVBQWUsQ0FBQzthQUNyQzs7Z0JBRUssSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSTs7Z0JBQzFELElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7O2dCQUd6RCxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDekMsR0FBRyxDQUFDLFNBQVMsSUFBSSw2QkFBNkIsQ0FBQzs7Z0JBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Z0JBRWhDLEtBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSTs7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtZQUV4QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFHLENBQUM7WUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztnQkFFaEIsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0I7WUFFOUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7O2dCQUVsQixRQUFRLEdBQUcsR0FBRztZQUVwQixHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQVk7Ozs7O0lBQVosVUFBYSxNQUFXLEVBQUUsTUFBVztRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFDLFVBQVUsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUUzQixVQUFVLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFJVixDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUhtQixVQUFVOzs7d0JBVzNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBdURuQyxxQkFBQztDQUFBLEFBakVELElBaUVDO1NBOURZLGNBQWM7OztJQUN6Qiw0QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiV2F2ZXNFZmZlY3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBXYXZlc0RpcmVjdGl2ZSB7XG4gIGVsOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG5cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSArPSAnIHdhdmVzLWVmZmVjdCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHhQb3MgPSBldmVudC5jbGllbnRYIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCB5UG9zID0gZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cblxuICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0bXAuY2xhc3NOYW1lICs9ICd3YXZlcy1yaXBwbGUgd2F2ZXMtcmlwcGxpbmcnO1xuICAgICAgY29uc3QgcmlwcGxlID0gYnV0dG9uLmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IHlQb3MgKyAncHgnO1xuICAgICAgY29uc3QgbGVmdCA9IHhQb3MgKyAncHgnO1xuXG4gICAgICB0bXAuc3R5bGUudG9wID0gdG9wO1xuICAgICAgdG1wLnN0eWxlLmxlZnQgPSBsZWZ0O1xuXG4gICAgICBjb25zdCBzY2FsZSA9ICdzY2FsZSgnICsgKChidXR0b24uY2xpZW50V2lkdGggLyAxMDApICogMykgKyAnKSB0cmFuc2xhdGUoMCwwKSc7XG5cbiAgICAgIHRtcC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHRtcC5zdHlsZS50cmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHRtcC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IDc1MDtcblxuICAgICAgdG1wLnN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgIHRtcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG5cblxuICAgICAgdGhpcy5yZW1vdmVSaXBwbGUoYnV0dG9uLCByaXBwbGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVJpcHBsZShidXR0b246IGFueSwgcmlwcGxlOiBhbnkpIHtcbiAgICByaXBwbGUuY2xhc3NMaXN0LnJlbW92ZSgnd2F2ZXMtcmlwcGxpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgIH0sIDc1MCk7XG4gICAgfSwgMjAwKTtcblxuXG5cbiAgfVxufVxuIl19