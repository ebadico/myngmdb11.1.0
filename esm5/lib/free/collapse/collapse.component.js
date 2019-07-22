/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Output, EventEmitter, HostListener, ContentChildren, QueryList, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CollapseComponent.prototype.onExpandBodyDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (event.toState === 'expanded') {
                _this.shownBsCollapse.emit(_this);
                _this.expanded.emit(_this);
                _this.overflow = 'visible';
                _this.showCaptions();
            }
            else {
                _this.hiddenBsCollapse.emit(_this);
                _this.collapsed.emit(_this);
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.showCaptions = /**
     * @return {?}
     */
    function () {
        this.captions.forEach((/**
         * @param {?} caption
         * @return {?}
         */
        function (caption) { return caption.showCaption(); }));
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.show() : this.hide();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.overflow = 'hidden';
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.initializeCollapseState = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.hide() : this.show();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeCollapseState();
    };
    CollapseComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbCollapse]',
                    exportAs: 'bs-collapse',
                    template: '<ng-content></ng-content>',
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return []; };
    CollapseComponent.propDecorators = {
        captions: [{ type: ContentChildren, args: [FixedButtonCaptionDirective,] }],
        isCollapsed: [{ type: Input }],
        showBsCollapse: [{ type: Output }],
        shownBsCollapse: [{ type: Output }],
        hideBsCollapse: [{ type: Output }],
        hiddenBsCollapse: [{ type: Output }],
        collapsed: [{ type: Output }],
        expanded: [{ type: Output }],
        expandAnimationState: [{ type: HostBinding, args: ['@expandBody',] }],
        overflow: [{ type: HostBinding, args: ['style.overflow',] }],
        onExpandBodyDone: [{ type: HostListener, args: ['@expandBody.done', ['$event'],] }]
    };
    return CollapseComponent;
}());
export { CollapseComponent };
if (false) {
    /** @type {?} */
    CollapseComponent.prototype.captions;
    /** @type {?} */
    CollapseComponent.prototype.isCollapsed;
    /** @type {?} */
    CollapseComponent.prototype.showBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.shownBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.hideBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.hiddenBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.collapsed;
    /** @type {?} */
    CollapseComponent.prototype.expanded;
    /** @type {?} */
    CollapseComponent.prototype.expandAnimationState;
    /** @type {?} */
    CollapseComponent.prototype.overflow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWpGO0lBd0JFO1FBVFMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbEIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0zRCxhQUFRLEdBQUcsUUFBUSxDQUFDO0lBSkwsQ0FBQzs7Ozs7SUFPaEIsNENBQWdCOzs7O0lBRGhCLFVBQ2lCLEtBQVU7UUFEM0IsaUJBYUM7UUFYQyxVQUFVOzs7UUFBQztZQUNULElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FB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aW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiQ29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlKSBjYXB0aW9uczogUXVlcnlMaXN0PEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZT47XG4gIEBJbnB1dCgpIGlzQ29sbGFwc2VkID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgc2hvd0JzQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2hvd25Cc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGVCc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGRlbkJzQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdAZXhwYW5kQm9keScpIGV4cGFuZEFuaW1hdGlvblN0YXRlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKVxuICBvdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ0BleHBhbmRCb2R5LmRvbmUnLCBbJyRldmVudCddKVxuICBvbkV4cGFuZEJvZHlEb25lKGV2ZW50OiBhbnkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICAgIHRoaXMuc2hvd25Cc0NvbGxhcHNlLmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgdGhpcy5zaG93Q2FwdGlvbnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZGVuQnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHRoaXMpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgc2hvd0NhcHRpb25zKCkge1xuICAgIHRoaXMuY2FwdGlvbnMuZm9yRWFjaCgoY2FwdGlvbjogRml4ZWRCdXR0b25DYXB0aW9uRGlyZWN0aXZlKSA9PiBjYXB0aW9uLnNob3dDYXB0aW9uKCkpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNob3dCc0NvbGxhcHNlLmVtaXQodGhpcyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmhpZGVCc0NvbGxhcHNlLmVtaXQodGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXplQ29sbGFwc2VTdGF0ZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbGxhcHNlU3RhdGUoKTtcbiAgfVxufVxuIl19