/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class FixedButtonCaptionDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createCaptionElement();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(this.collapseButtonActivator, 'click', (/**
         * @return {?}
         */
        () => {
            this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
            this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
            this.renderer.setStyle(this.paragraphEl, 'right', `60px`);
            this.renderer.setStyle(this.paragraphEl, 'top', '10px');
            this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
        }));
    }
    /**
     * @return {?}
     */
    createCaptionElement() {
        /** @type {?} */
        const paragraph = this.renderer.createElement('p');
        /** @type {?} */
        const text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    }
}
FixedButtonCaptionDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbFixedCaption]' },] }
];
/** @nocollapse */
FixedButtonCaptionDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
FixedButtonCaptionDirective.propDecorators = {
    caption: [{ type: Input, args: ['mdbFixedCaption',] }],
    collapseButtonActivator: [{ type: Input, args: ['collapseButton',] }]
};
if (false) {
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.caption;
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.collapseButtonActivator;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.paragraphEl;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtY2FwdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc3RixNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUl0QyxZQUNVLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxPQUFPOzs7UUFBRSxHQUFHLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvQkFBb0I7O2NBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQzs7Y0FDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7OztZQTlCRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7Ozs7WUFGbUIsU0FBUztZQUFwQyxVQUFVOzs7c0JBSXpDLEtBQUssU0FBQyxpQkFBaUI7c0NBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7Ozs7SUFEdkIsOENBQTBDOztJQUMxQyw4REFBc0Q7Ozs7O0lBQ3RELGtEQUF5Qjs7Ozs7SUFFdkIsK0NBQTJCOzs7OztJQUMzQix5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbWRiRml4ZWRDYXB0aW9uXSd9KVxuZXhwb3J0IGNsYXNzIEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnbWRiRml4ZWRDYXB0aW9uJykgY2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NvbGxhcHNlQnV0dG9uJykgY29sbGFwc2VCdXR0b25BY3RpdmF0b3I6IGFueTtcbiAgcHJpdmF0ZSBwYXJhZ3JhcGhFbDogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDYXB0aW9uRWxlbWVudCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuY29sbGFwc2VCdXR0b25BY3RpdmF0b3IsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wYXJhZ3JhcGhFbCwgJ2ZpeGVkLWJ1dHRvbi1jYXB0aW9uJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucGFyYWdyYXBoRWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBhcmFncmFwaEVsLCAncmlnaHQnLCBgNjBweGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBhcmFncmFwaEVsLCAndG9wJywgJzEwcHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ2FwdGlvbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmNhcHRpb24pO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoLCB0ZXh0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgcGFyYWdyYXBoKTtcbiAgICB0aGlzLnBhcmFncmFwaEVsID0gcGFyYWdyYXBoO1xuICB9XG59XG4iXX0=