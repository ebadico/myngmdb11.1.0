/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fas = true;
        this.sizeClass = '';
    }
    /**
     * @return {?}
     */
    MdbIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
            this._renderer.addClass(this._el.nativeElement, 'prefix');
        }
        /** @type {?} */
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
    };
    MdbIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-icon',
                    template: "<i [ngClass]=\"{'fas': fas, 'far': far, 'fab': fab, 'fal': fal}\" class=\"fa-{{icon}} {{class}} {{sizeClass}}\"></i>\n"
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
        class: [{ type: Input }]
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
    MdbIconComponent.prototype.fab;
    /** @type {?} */
    MdbIconComponent.prototype.far;
    /** @type {?} */
    MdbIconComponent.prototype.fal;
    /** @type {?} */
    MdbIconComponent.prototype.fas;
    /** @type {?} */
    MdbIconComponent.prototype.sizeClass;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc5RTtJQWlCRSwwQkFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUGpFLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFFWCxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBR2YsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBTSxJQUFJLENBQUMsSUFBTSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzRDs7WUFFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUNsRCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkMsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsa0lBQW9DO2lCQUNyQzs7OztnQkFOeUIsVUFBVTtnQkFBVSxTQUFTOzs7dUJBU3BELEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQTZCUix1QkFBQztDQUFBLEFBckNELElBcUNDO1NBakNZLGdCQUFnQjs7O0lBRTNCLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBRXZCLCtCQUFZOztJQUNaLCtCQUFZOztJQUNaLCtCQUFZOztJQUNaLCtCQUFXOztJQUVYLHFDQUFlOzs7OztJQUVILCtCQUF1Qjs7Ozs7SUFBRSxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBmYWIgPSBmYWxzZTtcbiAgZmFyID0gZmFsc2U7XG4gIGZhbCA9IGZhbHNlO1xuICBmYXMgPSB0cnVlO1xuXG4gIHNpemVDbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemVDbGFzcyA9IGBmYS0ke3RoaXMuc2l6ZX1gO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZC1mb3JtJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdwcmVmaXgnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICB0aGlzLmZhYiA9IGNsYXNzTGlzdC5jb250YWlucygnZmFiJyk7XG4gICAgdGhpcy5mYXIgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhcicpO1xuICAgIHRoaXMuZmFzID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXMnKTtcbiAgICB0aGlzLmZhbCA9IGNsYXNzTGlzdC5jb250YWlucygnZmFsJyk7XG5cbiAgfVxuXG59XG4iXX0=