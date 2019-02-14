/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, ViewChildren, HostBinding, Input, ElementRef, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, Renderer2, } from '@angular/core';
import { TabsetConfig } from './tabset.config';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { isPlatformBrowser } from '@angular/common';
// todo: add active event to tab
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(platformId, config, ripple, cdRef, renderer) {
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
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.setActiveTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
    };
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.click = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var prev = this.tabEl.toArray()[this.getActive()];
        /** @type {?} */
        var clicked = this.tabEl.toArray()[index];
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
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    // public getActive() {
    // public getActive() {
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActive = 
    // public getActive() {
    /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        function (object, index) {
            return {
                index: index,
                object: object
            };
        }));
        try {
            for (var tabs_1 = tslib_1.__values(tabs), tabs_1_1 = tabs_1.next(); !tabs_1_1.done; tabs_1_1 = tabs_1.next()) {
                var tab = tabs_1_1.value;
                if (tab.object.active) {
                    return tab.index;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tabs_1_1 && !tabs_1_1.done && (_a = tabs_1.return)) _a.call(tabs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var insertPos = this.tabs.findIndex((/**
         * @param {?} aTab
         * @return {?}
         */
        function (aTab) { return aTab.tabOrder > tab.tabOrder; }));
        if (insertPos >= 0) {
            this.tabs.splice(insertPos, 0, tab);
        }
        else {
            this.tabs.push(tab);
        }
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.listGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.tabsGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActiveElement = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        function (object, index) {
            return {
                index: index,
                object: object
            };
        }));
        try {
            for (var tabs_2 = tslib_1.__values(tabs), tabs_2_1 = tabs_2.next(); !tabs_2_1.done; tabs_2_1 = tabs_2.next()) {
                var tab = tabs_2_1.value;
                if (tab.object.active) {
                    return {
                        el: tab.object,
                        activeTabIndex: tab.index
                    };
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tabs_2_1 && !tabs_2_1.done && (_a = tabs_2.return)) _a.call(tabs_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.showActiveIndex = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeElement = this.getActiveElement();
        this.getActiveTab.emit(activeElement);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.getFirstActiveTabIndex = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeTabs = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            return !tab.disabled;
        }));
        return this.tabs.indexOf(activeTabs[0]);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.removeActiveTabs = /**
     * @private
     * @return {?}
     */
    function () {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            tab.active = false;
        }));
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.initActiveTab = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.getFirstActiveTabIndex();
        if (index === -1) {
            this.removeActiveTabs();
            return;
        }
        this.setActiveTab(index + 1);
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.listGet();
        this.tabsGet();
        this.showActiveIndex();
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initActiveTab();
        if (this.tabs.findIndex((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.type === 'content'; })) !== -1) {
            /** @type {?} */
            var spacer = this.renderer.createElement('li');
            /** @type {?} */
            var firstContentTypeItemIndex = this.tabs.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.type === 'content'; }));
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tabset',
                    template: "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"{{ listGetClass }}\">\n      <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\" #itemsList>\n        <li *ngFor=\"let tabz of tabs;let i = index\"\n            [ngClass]=\"{'ml-auto': tabz.type === 'content' && i === 0, 'list-group-item-action': buttonClass.includes('list-group'), 'nav-item': tabz.type !== 'content', 'mx-auto': vertical}\"\n            class=\"{{tabz.customClass}}\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\">\n          <span class=\"d-flex flex-fill\"\n                *ngIf=\"tabs[i].type !== 'content' && tabs[i + 1] && tabs[i + 1].type === 'content'\"></span>\n          <a *ngIf=\"tabz.type !== 'content'\" #tabEl href=\"javascript:void(0);\" class=\"nav-link\"\n             [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n          <a *ngIf=\"tabz.type === 'content'\" #tabEl class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"{{ tabsGetClass }}\">\n      <div class=\"tab-content {{ contentClass }}\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    providers: [WavesDirective]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetConfig },
        { type: WavesDirective },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return TabsetComponent;
}());
export { TabsetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUVYLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBR2xEO0lBc0ZFLHlCQUN1QixVQUFrQixFQUN2QyxNQUFvQixFQUNiLE1BQXNCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRnBCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwRnRCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVMUIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUNxQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUTlCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFekQsaUJBQVksR0FB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dkQsc0NBQ3lEOztJQUN6RCx1Q0FDMEQ7O0lBb0R4RCxpQ0FBNkI7Ozs7O0lBQzdCLGdDQUFnQzs7Ozs7SUFDaEMsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkcmVuLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1RhYkRpcmVjdGl2ZX0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7VGFic2V0Q29uZmlnfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xuXG5pbXBvcnQge1dhdmVzRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10YWJzZXQnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYnNldC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHRhYnM6IFRhYkRpcmVjdGl2ZVtdID0gW107XG4gIHB1YmxpYyBjbGFzc01hcDogYW55ID0ge307XG5cbiAgcHJvdGVjdGVkIGlzRGVzdHJveWVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3ZlcnRpY2FsOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RHZXRDbGFzczogU3RyaW5nO1xuICBwdWJsaWMgdGFic0dldENsYXNzOiBTdHJpbmc7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBudWxsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1jb250YWluZXInKSBwdWJsaWMgY2xhenogPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKSBidXR0b25DbGFzczogU3RyaW5nO1xuICBASW5wdXQoKSBjb250ZW50Q2xhc3M6IFN0cmluZztcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1zTGlzdCcpIGl0ZW1zTGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZHJlbigndGFiRWwnLCB7cmVhZDogRWxlbWVudFJlZn0pIHRhYkVsOiBhbnk7XG5cbiAgQE91dHB1dCgpXG4gIHNob3dCc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHNob3duQnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoaWRlQnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBoaWRkZW5Cc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGdldEFjdGl2ZVRhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmVUYWIoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYnNbaW5kZXggLSAxXS50eXBlICE9PSAnY29udGVudCcpIHtcbiAgICAgIHRoaXMudGFic1tpbmRleCAtIDFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmdldEFjdGl2ZVRhYi5lbWl0KHtcbiAgICAgICAgZWw6IHRoaXMudGFic1tpbmRleCAtIDFdLFxuICAgICAgICBhY3RpdmVUYWJJbmRleDogaW5kZXggLSAxXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFic1tpbmRleCAtIDFdLnNlbGVjdC5lbWl0KHRoaXMudGFic1tpbmRleCAtIDFdKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9qdXN0aWZpZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvKiogbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgY29uZmlnOiBUYWJzZXRDb25maWcsXG4gICAgcHVibGljIHJpcHBsZTogV2F2ZXNEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnRhYkVsLnRvQXJyYXkoKVt0aGlzLmdldEFjdGl2ZSgpXTtcbiAgICBjb25zdCBjbGlja2VkID0gdGhpcy50YWJFbC50b0FycmF5KClbaW5kZXhdO1xuXG4gICAgdGhpcy5oaWRlQnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2XG4gICAgfSk7XG4gICAgdGhpcy5zaG93QnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEFjdGl2ZVRhYihpbmRleCArIDEpO1xuXG4gICAgaWYgKHRoaXMuY29udGVudENsYXNzICE9PSAndmVydGljYWwnICYmICF0aGlzLmRpc2FibGVXYXZlcykge1xuICAgICAgdGhpcy5yaXBwbGUuZWwgPSBjbGlja2VkO1xuICAgICAgdGhpcy5yaXBwbGUuY2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZGVuQnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2XG4gICAgfSk7XG4gICAgdGhpcy5zaG93bkJzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldixcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBnZXRBY3RpdmUoKSB7XG4gIHB1YmxpYyBnZXRBY3RpdmUoKTogYW55IHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLm1hcCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgIGlmICh0YWIub2JqZWN0LmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGFiLmluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRUYWIodGFiOiBUYWJEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCBpbnNlcnRQb3MgPSB0aGlzLnRhYnMuZmluZEluZGV4KGFUYWIgPT4gYVRhYi50YWJPcmRlciA+IHRhYi50YWJPcmRlcik7XG4gICAgaWYgKGluc2VydFBvcyA+PSAwKSB7XG4gICAgICB0aGlzLnRhYnMuc3BsaWNlKGluc2VydFBvcywgMCwgdGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcbiAgICB9XG4gICAgdGFiLmFjdGl2ZSA9IHRoaXMudGFicy5sZW5ndGggPT09IDEgJiYgdGFiLmFjdGl2ZSAhPT0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVGFiKHRhYjogVGFiRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxuICAgIGlmICh0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gdGhpcy5nZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXgpO1xuICAgICAgdGhpcy50YWJzW25ld0FjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRhYi5yZW1vdmVkLmVtaXQodGFiKTtcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKCF0aGlzLnRhYnNbaV0uZGlzYWJsZWQgJiYgaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICduYXYtanVzdGlmaWVkJzogdGhpcy5qdXN0aWZpZWQsXG4gICAgICAvLyBbYG5hdi0ke3RoaXMudHlwZX1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgbGlzdEdldCgpIHtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5saXN0R2V0Q2xhc3MgPSAnY29sLW1kLTMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RHZXRDbGFzcyA9ICdjb2wtbWQtMTInO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0YWJzR2V0KCkge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnRhYnNHZXRDbGFzcyA9ICdjb2wtbWQtOSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFic0dldENsYXNzID0gJ2NvbC1tZC0xMic7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLm1hcCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgIGlmICh0YWIub2JqZWN0LmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVsOiB0YWIub2JqZWN0LFxuICAgICAgICAgIGFjdGl2ZVRhYkluZGV4OiB0YWIuaW5kZXhcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FjdGl2ZUluZGV4KCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmdldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICB0aGlzLmdldEFjdGl2ZVRhYi5lbWl0KGFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdEFjdGl2ZVRhYkluZGV4KCkge1xuICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKCh0YWIpID0+IHtcbiAgICAgIHJldHVybiAhdGFiLmRpc2FibGVkO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRhYnMuaW5kZXhPZihhY3RpdmVUYWJzWzBdKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQWN0aXZlVGFicygpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBpbml0QWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRGaXJzdEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVUYWJzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpc3RHZXQoKTtcbiAgICB0aGlzLnRhYnNHZXQoKTtcbiAgICB0aGlzLnNob3dBY3RpdmVJbmRleCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdEFjdGl2ZVRhYigpO1xuXG4gICAgaWYgKHRoaXMudGFicy5maW5kSW5kZXgoZWwgPT4gZWwudHlwZSA9PT0gJ2NvbnRlbnQnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHNwYWNlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGZpcnN0Q29udGVudFR5cGVJdGVtSW5kZXggPSB0aGlzLnRhYnMuZmluZEluZGV4KGVsID0+IGVsLnR5cGUgPT09ICdjb250ZW50Jyk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhY2VyLCAnbmF2LWl0ZW0nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhY2VyLCAnZmxleC1maWxsJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLml0ZW1zTGlzdC5uYXRpdmVFbGVtZW50LCBzcGFjZXIsIHRoaXMuaXRlbXNMaXN0Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bZmlyc3RDb250ZW50VHlwZUl0ZW1JbmRleF0pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==