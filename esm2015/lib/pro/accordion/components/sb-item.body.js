/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
export class SBItemBodyComponent {
    constructor() {
        this.height = '0';
        this.expandAnimationState = 'collapsed';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        setTimeout(() => {
            collapsed ? this.expandAnimationState = 'collapsed' : this.expandAnimationState = 'expanded';
        }, 0);
    }
    /**
     * @param {?} activeUrl
     * @return {?}
     */
    openSidenavOnActiveLink(activeUrl) {
        /** @type {?} */
        const activeLink = this.routerLinks.find((link) => {
            return link.href === activeUrl;
        });
        if (activeLink) {
            setTimeout(() => {
                this.expandAnimationState = 'expanded';
            }, 40);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.openSidenavOnActiveLink(window.location.pathname);
    }
}
SBItemBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body, mdb-accordion-item-body',
                template: "<div #body class=\"sb-item-body\" [style.height]=\"height\" [@expandBody]=\"expandAnimationState\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>",
                animations: [
                    trigger('expandBody', [
                        state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                        state('expanded', style({ height: '*', visibility: 'visible' })),
                        transition('expanded <=> collapsed', animate('500ms ease')),
                    ])
                ]
            }] }
];
/** @nocollapse */
SBItemBodyComponent.ctorParameters = () => [];
SBItemBodyComponent.propDecorators = {
    customClass: [{ type: Input }],
    routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
    bodyEl: [{ type: ViewChild, args: ['body',] }]
};
if (false) {
    /** @type {?} */
    SBItemBodyComponent.prototype.customClass;
    /** @type {?} */
    SBItemBodyComponent.prototype.routerLinks;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /** @type {?} */
    SBItemBodyComponent.prototype.bodyEl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFvQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFlNUQsTUFBTSxPQUFPLG1CQUFtQjtJQVM5QjtRQUxPLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsV0FBVyxDQUFDO0lBSXBCLENBQUM7Ozs7O0lBRWhCLE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1FBQy9GLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsU0FBaUI7O2NBQ2pDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7WUFDekMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELHFOQUFnQztnQkFDaEMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzt3QkFDaEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO3dCQUM5RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1RCxDQUFDO2lCQUNIO2FBQ0Y7Ozs7OzBCQUVFLEtBQUs7MEJBQ0wsZUFBZSxTQUFDLGtCQUFrQjtxQkFLbEMsU0FBUyxTQUFDLE1BQU07Ozs7SUFOakIsMENBQTZCOztJQUM3QiwwQ0FBZ0Y7O0lBRWhGLHFDQUFvQjs7SUFDcEIsbURBQW1DOztJQUVuQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUJvZHknLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWJvZHksIG1kYi1hY2NvcmRpb24taXRlbS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmJvZHkuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Cb2R5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmKSByb3V0ZXJMaW5rczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgcHVibGljIGhlaWdodCA9ICcwJztcbiAgZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcblxuICBAVmlld0NoaWxkKCdib2R5JykgYm9keUVsOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2xsYXBzZWQgPyB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcgOiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB9LCAwKTtcbiAgfVxuXG4gIG9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKGFjdGl2ZVVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMucm91dGVyTGlua3MuZmluZCggKGxpbms6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuaHJlZiA9PT0gYWN0aXZlVXJsO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVMaW5rKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICB9LCA0MCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG59XG4iXX0=