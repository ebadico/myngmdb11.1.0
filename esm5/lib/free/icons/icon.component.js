/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { Utils } from '../utils';
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fad = false;
        this.fas = true;
        this.sizeClass = '';
        this.utils = new Utils();
    }
    /**
     * @return {?}
     */
    MdbIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        /** @type {?} */
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        this.fad = classList.contains('fad');
        /** @type {?} */
        var formWrapper = this.utils.getClosestEl(this._el.nativeElement, '.md-form') ||
            this.utils.getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el.tagName === 'INPUT' || 'TEXTAREA') {
                    _this._renderer.listen(el, 'focus', (/**
                     * @return {?}
                     */
                    function () {
                        _this._renderer.addClass(_this._el.nativeElement, 'active');
                    }));
                    _this._renderer.listen(el, 'blur', (/**
                     * @return {?}
                     */
                    function () {
                        _this._renderer.removeClass(_this._el.nativeElement, 'active');
                    }));
                }
            }));
        }
    };
    MdbIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-icon',
                    template: "<i\n  [ngClass]=\"{ fas: fas, far: far, fab: fab, fal: fal, fad: fad }\"\n  class=\"fa-{{ icon }} {{ class }} {{ classInside }} {{ sizeClass }}\"\n></i>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbIconComponent.propDecorators = {
        icon: [{ type: Input }],
        size: [{ type: Input }],
        class: [{ type: Input }],
        classInside: [{ type: Input }]
    };
    return MdbIconComponent;
}());
export { MdbIconComponent };
if (false) {
    /** @type {?} */
    MdbIconComponent.prototype.icon;
    /** @type {?} */
    MdbIconComponent.prototype.size;
    /** @type {?} */
    MdbIconComponent.prototype.class;
    /** @type {?} */
    MdbIconComponent.prototype.classInside;
    /** @type {?} */
    MdbIconComponent.prototype.fab;
    /** @type {?} */
    MdbIconComponent.prototype.far;
    /** @type {?} */
    MdbIconComponent.prototype.fal;
    /** @type {?} */
    MdbIconComponent.prototype.fad;
    /** @type {?} */
    MdbIconComponent.prototype.fas;
    /** @type {?} */
    MdbIconComponent.prototype.sizeClass;
    /** @type {?} */
    MdbIconComponent.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqQztJQXFCRSwwQkFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVmpFLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsSUFBSSxDQUFDO1FBRVgsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBRXlDLENBQUM7Ozs7SUFFckUsbUNBQVE7OztJQUFSO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBTSxJQUFJLENBQUMsSUFBTSxDQUFDO1NBQ3BDOztZQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBQ2xELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRS9CLFdBQVcsR0FDZixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1FBRWhFLElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUFPO2dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLFVBQVUsRUFBRTtvQkFDeEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU87OztvQkFBRTt3QkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzVELENBQUMsRUFBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNOzs7b0JBQUU7d0JBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMvRCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixzS0FBb0M7b0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFYQyxVQUFVO2dCQUVWLFNBQVM7Ozt1QkFXUixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQTJDUix1QkFBQztDQUFBLEFBcERELElBb0RDO1NBL0NZLGdCQUFnQjs7O0lBQzNCLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBQ3ZCLHVDQUE2Qjs7SUFFN0IsK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVc7O0lBRVgscUNBQWU7O0lBRWYsaUNBQTJCOzs7OztJQUVmLCtCQUF1Qjs7Ozs7SUFBRSxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc0luc2lkZTogc3RyaW5nO1xuXG4gIGZhYiA9IGZhbHNlO1xuICBmYXIgPSBmYWxzZTtcbiAgZmFsID0gZmFsc2U7XG4gIGZhZCA9IGZhbHNlO1xuICBmYXMgPSB0cnVlO1xuXG4gIHNpemVDbGFzcyA9ICcnO1xuXG4gIHV0aWxzOiBVdGlscyA9IG5ldyBVdGlscygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZUNsYXNzID0gYGZhLSR7dGhpcy5zaXplfWA7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5mYWIgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhYicpO1xuICAgIHRoaXMuZmFyID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXInKTtcbiAgICB0aGlzLmZhcyA9IGNsYXNzTGlzdC5jb250YWlucygnZmFzJyk7XG4gICAgdGhpcy5mYWwgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhbCcpO1xuICAgIHRoaXMuZmFkID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWQnKTtcblxuICAgIGNvbnN0IGZvcm1XcmFwcGVyID1cbiAgICAgIHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICcubWQtZm9ybScpIHx8XG4gICAgICB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnLm1kLW91dGxpbmUnKTtcblxuICAgIGlmIChmb3JtV3JhcHBlcikge1xuICAgICAgZm9ybVdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8ICdURVhUQVJFQScpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==