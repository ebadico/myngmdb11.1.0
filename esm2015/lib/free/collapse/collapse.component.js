/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
export class CollapseComponent {
    constructor() {
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
    onExpandBodyDone(event) {
        if (event.toState === 'expanded') {
            this.shownBsCollapse.emit(this);
            this.expanded.emit(this);
        }
        else {
            this.hiddenBsCollapse.emit(this);
            this.collapsed.emit(this);
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.isCollapsed ? this.show() : this.hide();
    }
    /**
     * @return {?}
     */
    show() {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
    }
    /**
     * @return {?}
     */
    hide() {
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
    }
    /**
     * @return {?}
     */
    initializeCollapseState() {
        this.isCollapsed ? this.hide() : this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeCollapseState();
    }
}
CollapseComponent.decorators = [
    { type: Component, args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
                template: '<ng-content></ng-content>',
                animations: [
                    trigger('expandBody', [
                        state('collapsed', style({ height: '0px', visibility: 'hidden', overflow: 'hidden' })),
                        state('expanded', style({ height: '*', visibility: 'visible', overflow: 'visible' })),
                        transition('expanded <=> collapsed', animate('500ms ease')),
                    ])
                ]
            }] }
];
/** @nocollapse */
CollapseComponent.ctorParameters = () => [];
CollapseComponent.propDecorators = {
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
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWNqRixNQUFNLE9BQU8saUJBQWlCO0lBVTVCO1FBVFMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbEIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0zRCxhQUFRLEdBQUcsUUFBUSxDQUFDO0lBSkosQ0FBQzs7Ozs7SUFPakIsZ0JBQWdCLENBQUMsS0FBVTtRQUN6QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO3dCQUNwRixLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDbkYsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDNUQsQ0FBQztpQkFDSDthQUNGOzs7OzswQkFFRSxLQUFLOzZCQUVMLE1BQU07OEJBQ04sTUFBTTs2QkFDTixNQUFNOytCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO21DQUlOLFdBQVcsU0FBQyxhQUFhO3VCQUN6QixXQUFXLFNBQUMsZ0JBQWdCOytCQUc1QixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFmNUMsd0NBQTRCOztJQUU1QiwyQ0FBaUU7O0lBQ2pFLDRDQUFrRTs7SUFDbEUsMkNBQWlFOztJQUNqRSw2Q0FBbUU7O0lBQ25FLHNDQUE0RDs7SUFDNUQscUNBQTJEOztJQUkzRCxpREFBeUQ7O0lBQ3pELHFDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1ttZGJDb2xsYXBzZV0nLFxuICBleHBvcnRBczogJ2JzLWNvbGxhcHNlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nLCBvdmVyZmxvdzogJ2hpZGRlbid9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJywgb3ZlcmZsb3c6ICd2aXNpYmxlJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzaG93QnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaG93bkJzQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZUJzQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZGVuQnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb2xsYXBzZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdAZXhwYW5kQm9keScpIGV4cGFuZEFuaW1hdGlvblN0YXRlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKVxuICBvdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ0BleHBhbmRCb2R5LmRvbmUnLCBbJyRldmVudCddKVxuICBvbkV4cGFuZEJvZHlEb25lKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgdGhpcy5zaG93bkJzQ29sbGFwc2UuZW1pdCh0aGlzKTtcbiAgICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRkZW5Cc0NvbGxhcHNlLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zaG93QnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmhpZGVCc0NvbGxhcHNlLmVtaXQodGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXplQ29sbGFwc2VTdGF0ZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbGxhcHNlU3RhdGUoKTtcbiAgfVxuXG59XG5cbiJdfQ==