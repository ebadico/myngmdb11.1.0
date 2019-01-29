/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ViewChildren, HostBinding, Input, ElementRef, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, Renderer2, } from '@angular/core';
import { TabsetConfig } from './tabset.config';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { isPlatformBrowser } from '@angular/common';
// todo: add active event to tab
export class TabsetComponent {
    /**
     * @param {?} platformId
     * @param {?} config
     * @param {?} ripple
     * @param {?} cdRef
     * @param {?} renderer
     */
    constructor(platformId, config, ripple, cdRef, renderer) {
        this.ripple = ripple;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.tabs = [];
        this.classMap = {};
        this.isBrowser = null;
        this.clazz = true;
        this.disableWaves = false;
        this.showBsTab = new EventEmitter();
        this.shownBsTab = new EventEmitter();
        this.hideBsTab = new EventEmitter();
        this.hiddenBsTab = new EventEmitter();
        this.getActiveTab = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveTab(index) {
        if (this.tabs[index - 1].type !== 'content') {
            this.tabs[index - 1].active = true;
            this.getActiveTab.emit({
                el: this.tabs[index - 1],
                activeTabIndex: index - 1
            });
            this.cdRef.detectChanges();
        }
        else {
            this.tabs[index - 1].select.emit(this.tabs[index - 1]);
        }
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    click(event, index) {
        /** @type {?} */
        const prev = this.tabEl.toArray()[this.getActive()];
        /** @type {?} */
        const clicked = this.tabEl.toArray()[index];
        this.hideBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.showBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.setActiveTab(index + 1);
        if (this.contentClass !== 'vertical' && !this.disableWaves) {
            this.ripple.el = clicked;
            this.ripple.click(event);
        }
        this.hiddenBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.shownBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    // public getActive() {
    /**
     * @return {?}
     */
    getActive() {
        /** @type {?} */
        const tabs = this.tabs.map((object, index) => {
            return {
                index: index,
                object: object
            };
        });
        for (const tab of tabs) {
            if (tab.object.active) {
                return tab.index;
            }
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        /** @type {?} */
        const insertPos = this.tabs.findIndex(aTab => aTab.tabOrder > tab.tabOrder);
        if (insertPos >= 0) {
            this.tabs.splice(insertPos, 0, tab);
        }
        else {
            this.tabs.push(tab);
        }
        tab.active = this.tabs.length === 1 && tab.active !== false;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    removeTab(tab) {
        /** @type {?} */
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            const prevIndex = index - step;
            /** @type {?} */
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @protected
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    }
    /**
     * @return {?}
     */
    listGet() {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    tabsGet() {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    getActiveElement() {
        /** @type {?} */
        const tabs = this.tabs.map((object, index) => {
            return {
                index: index,
                object: object
            };
        });
        for (const tab of tabs) {
            if (tab.object.active) {
                return {
                    el: tab.object,
                    activeTabIndex: tab.index
                };
            }
        }
    }
    /**
     * @return {?}
     */
    showActiveIndex() {
        /** @type {?} */
        const activeElement = this.getActiveElement();
        this.getActiveTab.emit(activeElement);
    }
    /**
     * @private
     * @return {?}
     */
    getFirstActiveTabIndex() {
        /** @type {?} */
        const activeTabs = this.tabs.filter((tab) => {
            return !tab.disabled;
        });
        return this.tabs.indexOf(activeTabs[0]);
    }
    /**
     * @private
     * @return {?}
     */
    removeActiveTabs() {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
    }
    /**
     * @return {?}
     */
    initActiveTab() {
        /** @type {?} */
        const index = this.getFirstActiveTabIndex();
        if (index === -1) {
            this.removeActiveTabs();
            return;
        }
        this.setActiveTab(index + 1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.listGet();
        this.tabsGet();
        this.showActiveIndex();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initActiveTab();
        if (this.tabs.findIndex(el => el.type === 'content') !== -1) {
            /** @type {?} */
            const spacer = this.renderer.createElement('li');
            /** @type {?} */
            const firstContentTypeItemIndex = this.tabs.findIndex(el => el.type === 'content');
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tabset',
                template: "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"{{ listGetClass }}\">\n      <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\" #itemsList>\n        <li *ngFor=\"let tabz of tabs;let i = index\" [ngClass]=\"{'ml-auto': tabz.type === 'content' && i === 0, 'nav-item': tabz.type !== 'content', 'mx-auto': vertical}\" class=\"{{tabz.customClass}}\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\">\n          <span class=\"d-flex flex-fill\" *ngIf=\"tabs[i].type !== 'content' && tabs[i + 1] && tabs[i + 1].type === 'content'\"></span>\n          <a *ngIf=\"tabz.type !== 'content'\" #tabEl href=\"javascript:void(0);\" class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n          <a *ngIf=\"tabz.type === 'content'\" #tabEl class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"{{ tabsGetClass }}\">\n      <div class=\"tab-content {{ contentClass }}\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
                providers: [WavesDirective]
            }] }
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: TabsetConfig },
    { type: WavesDirective },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
TabsetComponent.propDecorators = {
    clazz: [{ type: HostBinding, args: ['class.tab-container',] }],
    disableWaves: [{ type: Input }],
    buttonClass: [{ type: Input }],
    contentClass: [{ type: Input }],
    itemsList: [{ type: ViewChild, args: ['itemsList',] }],
    tabEl: [{ type: ViewChildren, args: ['tabEl', { read: ElementRef },] }],
    showBsTab: [{ type: Output }],
    shownBsTab: [{ type: Output }],
    hideBsTab: [{ type: Output }],
    hiddenBsTab: [{ type: Output }],
    getActiveTab: [{ type: Output }],
    vertical: [{ type: Input }],
    justified: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype.isDestroyed;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._vertical;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._justified;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._type;
    /** @type {?} */
    TabsetComponent.prototype.listGetClass;
    /** @type {?} */
    TabsetComponent.prototype.tabsGetClass;
    /** @type {?} */
    TabsetComponent.prototype.isBrowser;
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.disableWaves;
    /** @type {?} */
    TabsetComponent.prototype.buttonClass;
    /** @type {?} */
    TabsetComponent.prototype.contentClass;
    /**
     * if true tabs will be placed vertically
     * @type {?}
     */
    TabsetComponent.prototype.itemsList;
    /** @type {?} */
    TabsetComponent.prototype.tabEl;
    /** @type {?} */
    TabsetComponent.prototype.showBsTab;
    /** @type {?} */
    TabsetComponent.prototype.shownBsTab;
    /** @type {?} */
    TabsetComponent.prototype.hideBsTab;
    /** @type {?} */
    TabsetComponent.prototype.hiddenBsTab;
    /** @type {?} */
    TabsetComponent.prototype.getActiveTab;
    /** @type {?} */
    TabsetComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBR0wsVUFBVSxFQUNWLE1BQU0sRUFDTixXQUFXLEVBRVgsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFTbEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBZ0YxQixZQUN1QixVQUFrQixFQUN2QyxNQUFvQixFQUNiLE1BQXNCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRnBCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwRnRCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVMUIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUNxQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUTlCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFP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O1lBN0ZmLFlBQVk7WUFFWixjQUFjO1lBTnBCLGlCQUFpQjtZQUFhLFNBQVM7OztvQkE2QnRDLFdBQVcsU0FBQyxxQkFBcUI7MkJBRWpDLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUVMLFNBQVMsU0FBQyxXQUFXO29CQUNyQixZQUFZLFNBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzt3QkFFeEMsTUFBTTt5QkFFTixNQUFNO3dCQUVOLE1BQU07MEJBRU4sTUFBTTsyQkFFTixNQUFNO3VCQUdOLEtBQUs7d0JBMEJMLEtBQUs7bUJBV0wsS0FBSzs7OztJQXJFTiwrQkFBaUM7O0lBQ2pDLG1DQUEwQjs7Ozs7SUFFMUIsc0NBQStCOzs7OztJQUMvQixvQ0FBNkI7Ozs7O0lBQzdCLHFDQUE4Qjs7Ozs7SUFDOUIsZ0NBQXdCOztJQUV4Qix1Q0FBNEI7O0lBQzVCLHVDQUE0Qjs7SUFFNUIsb0NBQXNCOztJQUN0QixnQ0FBd0Q7O0lBRXhELHVDQUE4Qjs7SUFDOUIsc0NBQTZCOztJQUM3Qix1Q0FBOEI7Ozs7O0lBRTlCLG9DQUE4Qzs7SUFDOUMsZ0NBQXNEOztJQUV0RCxvQ0FDdUQ7O0lBQ3ZELHFDQUN3RDs7SUFDeEQsb0NBQ3VEOztJQUN2RCxzQ0FDeUQ7O0lBQ3pELHVDQUMwRDs7SUFvRHhELGlDQUE2Qjs7Ozs7SUFDN0IsZ0NBQWdDOzs7OztJQUNoQyxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VGFiRGlyZWN0aXZlfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUYWJzZXRDb25maWd9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG5cbmltcG9ydCB7V2F2ZXNEaXJlY3RpdmV9IGZyb20gJy4uLy4uL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyB0b2RvOiBhZGQgYWN0aXZlIGV2ZW50IHRvIHRhYlxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAndGFic2V0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbV2F2ZXNEaXJlY3RpdmVdXG59KVxuXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgdGFiczogVGFiRGlyZWN0aXZlW10gPSBbXTtcbiAgcHVibGljIGNsYXNzTWFwOiBhbnkgPSB7fTtcblxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdmVydGljYWw6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfanVzdGlmaWVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcblxuICBwdWJsaWMgbGlzdEdldENsYXNzOiBTdHJpbmc7XG4gIHB1YmxpYyB0YWJzR2V0Q2xhc3M6IFN0cmluZztcblxuICBpc0Jyb3dzZXI6IGFueSA9IG51bGw7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWNvbnRhaW5lcicpIHB1YmxpYyBjbGF6eiA9IHRydWU7XG5cbiAgQElucHV0KCkgZGlzYWJsZVdhdmVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzOiBTdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRlbnRDbGFzczogU3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWJzIHdpbGwgYmUgcGxhY2VkIHZlcnRpY2FsbHkgKi9cbiAgQFZpZXdDaGlsZCgnaXRlbXNMaXN0JykgaXRlbXNMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCd0YWJFbCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgdGFiRWw6IGFueTtcblxuICBAT3V0cHV0KClcbiAgc2hvd0JzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgc2hvd25Cc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhpZGVCc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhpZGRlbkJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgZ2V0QWN0aXZlVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgcHVibGljIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZVRhYihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFic1tpbmRleCAtIDFdLnR5cGUgIT09ICdjb250ZW50Jykge1xuICAgICAgdGhpcy50YWJzW2luZGV4IC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlVGFiLmVtaXQoe1xuICAgICAgICBlbDogdGhpcy50YWJzW2luZGV4IC0gMV0sXG4gICAgICAgIGFjdGl2ZVRhYkluZGV4OiBpbmRleCAtIDFcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJzW2luZGV4IC0gMV0uc2VsZWN0LmVtaXQodGhpcy50YWJzW2luZGV4IC0gMV0pO1xuICAgIH1cblxuICB9XG5cbiAgLyoqIGlmIHRydWUgdGFicyBmaWxsIHRoZSBjb250YWluZXIgYW5kIGhhdmUgYSBjb25zaXN0ZW50IHdpZHRoICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQganVzdGlmaWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGp1c3RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8qKiBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBjb25maWc6IFRhYnNldENvbmZpZyxcbiAgICBwdWJsaWMgcmlwcGxlOiBXYXZlc0RpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGljayhldmVudDogYW55LCBpbmRleDogYW55KSB7XG4gICAgY29uc3QgcHJldiA9IHRoaXMudGFiRWwudG9BcnJheSgpW3RoaXMuZ2V0QWN0aXZlKCldO1xuICAgIGNvbnN0IGNsaWNrZWQgPSB0aGlzLnRhYkVsLnRvQXJyYXkoKVtpbmRleF07XG5cbiAgICB0aGlzLmhpZGVCc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZcbiAgICB9KTtcbiAgICB0aGlzLnNob3dCc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSk7XG5cbiAgICBpZiAodGhpcy5jb250ZW50Q2xhc3MgIT09ICd2ZXJ0aWNhbCcgJiYgIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICB0aGlzLnJpcHBsZS5lbCA9IGNsaWNrZWQ7XG4gICAgICB0aGlzLnJpcHBsZS5jbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRkZW5Cc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZcbiAgICB9KTtcbiAgICB0aGlzLnNob3duQnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy8gcHVibGljIGdldEFjdGl2ZSgpIHtcbiAgcHVibGljIGdldEFjdGl2ZSgpOiBhbnkge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMubWFwKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgaWYgKHRhYi5vYmplY3QuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0YWIuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluc2VydFBvcyA9IHRoaXMudGFicy5maW5kSW5kZXgoYVRhYiA9PiBhVGFiLnRhYk9yZGVyID4gdGFiLnRhYk9yZGVyKTtcbiAgICBpZiAoaW5zZXJ0UG9zID49IDApIHtcbiAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5zZXJ0UG9zLCAwLCB0YWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIH1cbiAgICB0YWIuYWN0aXZlID0gdGhpcy50YWJzLmxlbmd0aCA9PT0gMSAmJiB0YWIuYWN0aXZlICE9PSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUYWIodGFiOiBUYWJEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXG4gICAgaWYgKHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3RUYWJJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8PSB0YWJzTGVuZ3RoOyBzdGVwICs9IDEpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgc3RlcDtcbiAgICAgIGlmICh0aGlzLnRhYnNbcHJldkluZGV4XSAmJiAhdGhpcy50YWJzW3ByZXZJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhYnNbbmV4dEluZGV4XSAmJiAhdGhpcy50YWJzW25leHRJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICAnbmF2LXN0YWNrZWQnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcbiAgICAgIC8vIFtgbmF2LSR7dGhpcy50eXBlfWBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBsaXN0R2V0KCkge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmxpc3RHZXRDbGFzcyA9ICdjb2wtbWQtMyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdEdldENsYXNzID0gJ2NvbC1tZC0xMic7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRhYnNHZXQoKSB7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMudGFic0dldENsYXNzID0gJ2NvbC1tZC05JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJzR2V0Q2xhc3MgPSAnY29sLW1kLTEyJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMubWFwKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgaWYgKHRhYi5vYmplY3QuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWw6IHRhYi5vYmplY3QsXG4gICAgICAgICAgYWN0aXZlVGFiSW5kZXg6IHRhYi5pbmRleFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWN0aXZlSW5kZXgoKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgIHRoaXMuZ2V0QWN0aXZlVGFiLmVtaXQoYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpcnN0QWN0aXZlVGFiSW5kZXgoKSB7XG4gICAgY29uc3QgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIoKHRhYikgPT4ge1xuICAgICAgcmV0dXJuICF0YWIuZGlzYWJsZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudGFicy5pbmRleE9mKGFjdGl2ZVRhYnNbMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVBY3RpdmVUYWJzKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRBY3RpdmVUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEZpcnN0QWN0aXZlVGFiSW5kZXgoKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnJlbW92ZUFjdGl2ZVRhYnMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdEdldCgpO1xuICAgIHRoaXMudGFic0dldCgpO1xuICAgIHRoaXMuc2hvd0FjdGl2ZUluZGV4KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0QWN0aXZlVGFiKCk7XG5cbiAgICBpZiAodGhpcy50YWJzLmZpbmRJbmRleChlbCA9PiBlbC50eXBlID09PSAnY29udGVudCcpICE9PSAtMSkge1xuICAgICAgY29uc3Qgc3BhY2VyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgZmlyc3RDb250ZW50VHlwZUl0ZW1JbmRleCA9IHRoaXMudGFicy5maW5kSW5kZXgoZWwgPT4gZWwudHlwZSA9PT0gJ2NvbnRlbnQnKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzcGFjZXIsICduYXYtaXRlbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzcGFjZXIsICdmbGV4LWZpbGwnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuaXRlbXNMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNwYWNlciwgdGhpcy5pdGVtc0xpc3QubmF0aXZlRWxlbWVudC5jaGlsZHJlbltmaXJzdENvbnRlbnRUeXBlSXRlbUluZGV4XSk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19