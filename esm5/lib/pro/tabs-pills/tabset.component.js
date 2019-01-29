/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
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
        var insertPos = this.tabs.findIndex(function (aTab) { return aTab.tabOrder > tab.tabOrder; });
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
        var tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
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
        var activeTabs = this.tabs.filter(function (tab) {
            return !tab.disabled;
        });
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
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
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
        if (this.tabs.findIndex(function (el) { return el.type === 'content'; }) !== -1) {
            /** @type {?} */
            var spacer = this.renderer.createElement('li');
            /** @type {?} */
            var firstContentTypeItemIndex = this.tabs.findIndex(function (el) { return el.type === 'content'; });
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tabset',
                    template: "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"{{ listGetClass }}\">\n      <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\" #itemsList>\n        <li *ngFor=\"let tabz of tabs;let i = index\" [ngClass]=\"{'ml-auto': tabz.type === 'content' && i === 0, 'nav-item': tabz.type !== 'content', 'mx-auto': vertical}\" class=\"{{tabz.customClass}}\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\">\n          <span class=\"d-flex flex-fill\" *ngIf=\"tabs[i].type !== 'content' && tabs[i + 1] && tabs[i + 1].type === 'content'\"></span>\n          <a *ngIf=\"tabz.type !== 'content'\" #tabEl href=\"javascript:void(0);\" class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n          <a *ngIf=\"tabz.type === 'content'\" #tabEl class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"{{ tabsGetClass }}\">\n      <div class=\"tab-content {{ contentClass }}\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLFVBQVUsRUFDVixNQUFNLEVBQ04sV0FBVyxFQUVYLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBR2xEO0lBc0ZFLHlCQUN1QixVQUFrQixFQUN2QyxNQUFvQixFQUNiLE1BQXNCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRnBCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwRnRCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVMUIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUNxQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBUTlCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFekQsaUJBQVksR0FB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OztJQW9EeEQsaUNBQTZCOzs7OztJQUM3QixnQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUYWJEaXJlY3RpdmV9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RhYnNldENvbmZpZ30gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcblxuaW1wb3J0IHtXYXZlc0RpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZnJlZS93YXZlcy93YXZlcy1lZmZlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIHRvZG86IGFkZCBhY3RpdmUgZXZlbnQgdG8gdGFiXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdGFic2V0JyxcbiAgdGVtcGxhdGVVcmw6ICd0YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtXYXZlc0RpcmVjdGl2ZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xuICBwdWJsaWMgY2xhc3NNYXA6IGFueSA9IHt9O1xuXG4gIHByb3RlY3RlZCBpc0Rlc3Ryb3llZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0R2V0Q2xhc3M6IFN0cmluZztcbiAgcHVibGljIHRhYnNHZXRDbGFzczogU3RyaW5nO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gbnVsbDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgcHVibGljIGNsYXp6ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXNhYmxlV2F2ZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IFN0cmluZztcbiAgQElucHV0KCkgY29udGVudENsYXNzOiBTdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYnMgd2lsbCBiZSBwbGFjZWQgdmVydGljYWxseSAqL1xuICBAVmlld0NoaWxkKCdpdGVtc0xpc3QnKSBpdGVtc0xpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RhYkVsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSB0YWJFbDogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBzaG93QnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBzaG93bkJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGlkZUJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGlkZGVuQnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBnZXRBY3RpdmVUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBwdWJsaWMgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlVGFiKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJzW2luZGV4IC0gMV0udHlwZSAhPT0gJ2NvbnRlbnQnKSB7XG4gICAgICB0aGlzLnRhYnNbaW5kZXggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5nZXRBY3RpdmVUYWIuZW1pdCh7XG4gICAgICAgIGVsOiB0aGlzLnRhYnNbaW5kZXggLSAxXSxcbiAgICAgICAgYWN0aXZlVGFiSW5kZXg6IGluZGV4IC0gMVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnNbaW5kZXggLSAxXS5zZWxlY3QuZW1pdCh0aGlzLnRhYnNbaW5kZXggLSAxXSk7XG4gICAgfVxuXG4gIH1cblxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBqdXN0aWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQganVzdGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fanVzdGlmaWVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIGNvbmZpZzogVGFic2V0Q29uZmlnLFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNsaWNrKGV2ZW50OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy50YWJFbC50b0FycmF5KClbdGhpcy5nZXRBY3RpdmUoKV07XG4gICAgY29uc3QgY2xpY2tlZCA9IHRoaXMudGFiRWwudG9BcnJheSgpW2luZGV4XTtcblxuICAgIHRoaXMuaGlkZUJzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldlxuICAgIH0pO1xuICAgIHRoaXMuc2hvd0JzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldlxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRDbGFzcyAhPT0gJ3ZlcnRpY2FsJyAmJiAhdGhpcy5kaXNhYmxlV2F2ZXMpIHtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZDtcbiAgICAgIHRoaXMucmlwcGxlLmNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGRlbkJzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldlxuICAgIH0pO1xuICAgIHRoaXMuc2hvd25Cc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXYsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICAvLyBwdWJsaWMgZ2V0QWN0aXZlKCkge1xuICBwdWJsaWMgZ2V0QWN0aXZlKCk6IGFueSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy5tYXAoKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICBpZiAodGFiLm9iamVjdC5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRhYi5pbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkVGFiKHRhYjogVGFiRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgY29uc3QgaW5zZXJ0UG9zID0gdGhpcy50YWJzLmZpbmRJbmRleChhVGFiID0+IGFUYWIudGFiT3JkZXIgPiB0YWIudGFiT3JkZXIpO1xuICAgIGlmIChpbnNlcnRQb3MgPj0gMCkge1xuICAgICAgdGhpcy50YWJzLnNwbGljZShpbnNlcnRQb3MsIDAsIHRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgfVxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHRhYi5hY3RpdmUgIT09IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICBpZiAoaW5kZXggPT09IC0xIHx8IHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2VsZWN0IGEgbmV3IHRhYiBpZiB0aGUgdGFiIHRvIGJlIHJlbW92ZWQgaXMgc2VsZWN0ZWQgYW5kIG5vdCBkZXN0cm95ZWRcbiAgICBpZiAodGFiLmFjdGl2ZSAmJiB0aGlzLmhhc0F2YWlsYWJsZVRhYnMoaW5kZXgpKSB7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IHRoaXMuZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4KTtcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWIucmVtb3ZlZC5lbWl0KHRhYik7XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDw9IHRhYnNMZW5ndGg7IHN0ZXAgKz0gMSkge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gaW5kZXggLSBzdGVwO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xuICAgICAgaWYgKHRoaXMudGFic1twcmV2SW5kZXhdICYmICF0aGlzLnRhYnNbcHJldkluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudGFic1tuZXh0SW5kZXhdICYmICF0aGlzLnRhYnNbbmV4dEluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzQXZhaWxhYmxlVGFicyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICghdGhpcy50YWJzW2ldLmRpc2FibGVkICYmIGkgIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgICduYXYtc3RhY2tlZCc6IHRoaXMudmVydGljYWwsXG4gICAgICAnbmF2LWp1c3RpZmllZCc6IHRoaXMuanVzdGlmaWVkLFxuICAgICAgLy8gW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGxpc3RHZXQoKSB7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMubGlzdEdldENsYXNzID0gJ2NvbC1tZC0zJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0R2V0Q2xhc3MgPSAnY29sLW1kLTEyJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFic0dldCgpIHtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy50YWJzR2V0Q2xhc3MgPSAnY29sLW1kLTknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnNHZXRDbGFzcyA9ICdjb2wtbWQtMTInO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVFbGVtZW50KCk6IGFueSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy5tYXAoKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICBpZiAodGFiLm9iamVjdC5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbDogdGFiLm9iamVjdCxcbiAgICAgICAgICBhY3RpdmVUYWJJbmRleDogdGFiLmluZGV4XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dBY3RpdmVJbmRleCgpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5nZXRBY3RpdmVFbGVtZW50KCk7XG4gICAgdGhpcy5nZXRBY3RpdmVUYWIuZW1pdChhY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RBY3RpdmVUYWJJbmRleCgpIHtcbiAgICBjb25zdCBhY3RpdmVUYWJzID0gdGhpcy50YWJzLmZpbHRlcigodGFiKSA9PiB7XG4gICAgICByZXR1cm4gIXRhYi5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy50YWJzLmluZGV4T2YoYWN0aXZlVGFic1swXSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUFjdGl2ZVRhYnMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEFjdGl2ZVRhYigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0Rmlyc3RBY3RpdmVUYWJJbmRleCgpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZlVGFicygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldEFjdGl2ZVRhYihpbmRleCArIDEpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saXN0R2V0KCk7XG4gICAgdGhpcy50YWJzR2V0KCk7XG4gICAgdGhpcy5zaG93QWN0aXZlSW5kZXgoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluaXRBY3RpdmVUYWIoKTtcblxuICAgIGlmICh0aGlzLnRhYnMuZmluZEluZGV4KGVsID0+IGVsLnR5cGUgPT09ICdjb250ZW50JykgIT09IC0xKSB7XG4gICAgICBjb25zdCBzcGFjZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBmaXJzdENvbnRlbnRUeXBlSXRlbUluZGV4ID0gdGhpcy50YWJzLmZpbmRJbmRleChlbCA9PiBlbC50eXBlID09PSAnY29udGVudCcpO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNwYWNlciwgJ25hdi1pdGVtJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNwYWNlciwgJ2ZsZXgtZmlsbCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5pdGVtc0xpc3QubmF0aXZlRWxlbWVudCwgc3BhY2VyLCB0aGlzLml0ZW1zTGlzdC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ZpcnN0Q29udGVudFR5cGVJdGVtSW5kZXhdKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=