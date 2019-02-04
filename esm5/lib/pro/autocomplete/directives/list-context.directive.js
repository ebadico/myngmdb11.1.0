/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { catchError } from 'rxjs/operators';
import { timer as observableTimer } from 'rxjs';
import { ChangeDetectorRef, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
import { MIN_SEARCH_LENGTH, PAUSE, CLEAR_TIMEOUT, isNil } from '../globals';
var CtrListContext = /** @class */ (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
export { CtrListContext };
if (false) {
    /** @type {?} */
    CtrListContext.prototype.results;
    /** @type {?} */
    CtrListContext.prototype.searching;
    /** @type {?} */
    CtrListContext.prototype.searchInitialized;
    /** @type {?} */
    CtrListContext.prototype.isOpen;
}
var MdbListDirective = /** @class */ (function () {
    function MdbListDirective(tmpCompleter, templateRef, viewContainer, cd) {
        this.tmpCompleter = tmpCompleter;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = MIN_SEARCH_LENGTH;
        this.mdbListPause = PAUSE;
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        // private results: CompleterItem[] = [];
        this.setToNullValue = null;
        // private term: string = null;
        this.term = null;
        // private searching = false;
        // private searchTimer: Subscription = null;
        this.searchTimer = null;
        // private clearTimer: Subscription = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.completer = this.tmpCompleter;
    }
    /**
     * @return {?}
     */
    MdbListDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        set: /**
         * @param {?} newService
         * @return {?}
         */
        function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    // .catch(err => this.handleError(err))
                    // .catch((err: any) => this.handleError(err))
                    // .subscribe(results => {
                    .subscribe(function (results) {
                    try {
                        _this.ctx.searchInitialized = true;
                        _this.ctx.searching = false;
                        _this.ctx.results = results;
                        if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(_this.term) &&
                            results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                            // Do automatch
                            _this.completer.onSelected(results[0]);
                        }
                        if (_this._initialValue) {
                            _this.initialValue = _this._initialValue;
                            // this._initialValue = null;
                            _this._initialValue = _this.setToNullValue;
                        }
                        if (_this.mdbListAutoHighlight) {
                            _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                        }
                        _this.refreshTemplate();
                    }
                    catch (err) {
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout(function () {
                    /** @type {?} */
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (!isNil(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = observableTimer(this.mdbListPause).subscribe(function () {
                try {
                    _this.searchTimerComplete(term);
                }
                catch (err) {
                }
            });
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = observableTimer(CLEAR_TIMEOUT).subscribe(function () {
            _this._clear();
        });
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    MdbListDirective.prototype.isOpen = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.ctx.isOpen = open;
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    /**
     * @private
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.searchTimerComplete = /**
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype.refreshTemplate = 
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    /**
     * @private
     * @return {?}
     */
    function () {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype.getBestMatchIndex = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        /** @type {?} */
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    MdbListDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbList]',
                },] }
    ];
    /** @nocollapse */
    MdbListDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    MdbListDirective.propDecorators = {
        mdbListMinSearchLength: [{ type: Input }],
        mdbListPause: [{ type: Input }],
        mdbListAutoMatch: [{ type: Input }],
        mdbListAutoHighlight: [{ type: Input }],
        dataService: [{ type: Input, args: ['mdbList',] }],
        initialValue: [{ type: Input, args: ['mdbListInitialValue',] }]
    };
    return MdbListDirective;
}());
export { MdbListDirective };
if (false) {
    /** @type {?} */
    MdbListDirective.prototype.mdbListMinSearchLength;
    /** @type {?} */
    MdbListDirective.prototype.mdbListPause;
    /** @type {?} */
    MdbListDirective.prototype.mdbListAutoMatch;
    /** @type {?} */
    MdbListDirective.prototype.mdbListAutoHighlight;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype._dataService;
    /** @type {?} */
    MdbListDirective.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.term;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.searchTimer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.clearTimer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.ctx;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype._initialValue;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.tmpCompleter;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvbGlzdC1jb250ZXh0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRyxLQUFLLElBQUksZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUc3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUU7SUFDRSx3QkFDUyxPQUF3QixFQUN4QixTQUFrQixFQUNsQixpQkFBMEIsRUFDMUIsTUFBZTtRQUhmLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDcEIsQ0FBQztJQUNQLHFCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFMRyxpQ0FBK0I7O0lBQy9CLG1DQUF5Qjs7SUFDekIsMkNBQWlDOztJQUNqQyxnQ0FBc0I7O0FBSTFCO0lBdUJFLDBCQUVrQixZQUFtQyxFQUMzQyxXQUF3QyxFQUN4QyxhQUErQixFQUMvQixFQUFxQjtRQUhiLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUMzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBeEJm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Q0wsS0FBSzs4QkFpQ0wsS0FBSyxTQUFDLFNBQVM7K0JBbUNmLEtBQUssU0FBQyxxQkFBcUI7O0lBa0k5Qix1QkFBQztDQUFBLEFBN01ELElBNk1DO1NBMU1ZLGdCQUFnQjs7O0lBQzNCLGtEQUEyRDs7SUFDM0Qsd0NBQXFDOztJQUNyQyw0Q0FBeUM7O0lBQ3pDLGdEQUFrRDs7Ozs7SUFHbEQsd0NBQTBDOztJQUUxQywwQ0FBa0M7Ozs7O0lBRWxDLGdDQUFrQzs7Ozs7SUFHbEMsdUNBQStDOzs7OztJQUUvQyxzQ0FBOEM7Ozs7O0lBQzlDLCtCQUEwRDs7Ozs7SUFDMUQseUNBQWtDOzs7OztJQUNsQyxxQ0FBK0M7Ozs7O0lBRzdDLHdDQUFtRDs7Ozs7SUFDbkQsdUNBQWdEOzs7OztJQUNoRCx5Q0FBdUM7Ozs7O0lBQ3ZDLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7ICB0aW1lciBhcyBvYnNlcnZhYmxlVGltZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBDb21wbGV0ZXJMaXN0IH0gZnJvbSAnLi9jb21wbGV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBsZXRlckRhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wbGV0ZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNSU5fU0VBUkNIX0xFTkdUSCwgUEFVU0UsIENMRUFSX1RJTUVPVVQsIGlzTmlsIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBjbGFzcyBDdHJMaXN0Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZXN1bHRzOiBDb21wbGV0ZXJJdGVtW10sXG4gICAgcHVibGljIHNlYXJjaGluZzogYm9vbGVhbixcbiAgICBwdWJsaWMgc2VhcmNoSW5pdGlhbGl6ZWQ6IGJvb2xlYW4sXG4gICAgcHVibGljIGlzT3BlbjogYm9vbGVhblxuICApIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiTGlzdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJMaXN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBDb21wbGV0ZXJMaXN0IHtcbiAgQElucHV0KCkgcHVibGljIG1kYkxpc3RNaW5TZWFyY2hMZW5ndGggPSBNSU5fU0VBUkNIX0xFTkdUSDtcbiAgQElucHV0KCkgcHVibGljIG1kYkxpc3RQYXVzZSA9IFBBVVNFO1xuICBASW5wdXQoKSBwdWJsaWMgbWRiTGlzdEF1dG9NYXRjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbWRiTGlzdEF1dG9IaWdobGlnaHQ6IGFueSA9IGZhbHNlO1xuXG4gIC8vIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBDb21wbGV0ZXJEYXRhIDtcbiAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IENvbXBsZXRlckRhdGEgfCBhbnk7XG4gIC8vIHByaXZhdGUgcmVzdWx0czogQ29tcGxldGVySXRlbVtdID0gW107XG4gIHB1YmxpYyBzZXRUb051bGxWYWx1ZTogYW55ID0gbnVsbDtcbiAgLy8gcHJpdmF0ZSB0ZXJtOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHRlcm06IHN0cmluZyB8IGFueSA9IG51bGw7XG4gIC8vIHByaXZhdGUgc2VhcmNoaW5nID0gZmFsc2U7XG4gIC8vIHByaXZhdGUgc2VhcmNoVGltZXI6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgc2VhcmNoVGltZXI6IFN1YnNjcmlwdGlvbiB8IGFueSA9IG51bGw7XG4gIC8vIHByaXZhdGUgY2xlYXJUaW1lcjogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBjbGVhclRpbWVyOiBTdWJzY3JpcHRpb24gfCBhbnkgPSBudWxsO1xuICBwcml2YXRlIGN0eCA9IG5ldyBDdHJMaXN0Q29udGV4dChbXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gIHByaXZhdGUgX2luaXRpYWxWYWx1ZTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSB8IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB0bXBDb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSxcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxDdHJMaXN0Q29udGV4dD4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIgPSB0aGlzLnRtcENvbXBsZXRlcjtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5yZWdpc3Rlckxpc3QodGhpcyk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgICBuZXcgQ3RyTGlzdENvbnRleHQoW10sIGZhbHNlLCBmYWxzZSwgZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIEBJbnB1dCgnbWRiTGlzdCcpXG4gIHB1YmxpYyBzZXQgZGF0YVNlcnZpY2UobmV3U2VydmljZTogQ29tcGxldGVyRGF0YSkge1xuICAgIHRoaXMuX2RhdGFTZXJ2aWNlID0gbmV3U2VydmljZTtcbiAgICBpZiAodGhpcy5fZGF0YVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlXG4gICAgICAgIC8vIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKVxuICAgICAgICAvLyAuY2F0Y2goKGVycjogYW55KSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpXG4gICAgICAgIC8vIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zZWFyY2hJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN0eC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHRoaXMubWRiTGlzdEF1dG9NYXRjaCAmJiByZXN1bHRzLmxlbmd0aCA9PT0gMSAmJiByZXN1bHRzWzBdLnRpdGxlICYmICFpc05pbCh0aGlzLnRlcm0pICYmXG4gICAgICAgICAgICAgIHJlc3VsdHNbMF0udGl0bGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gdGhpcy50ZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgLy8gRG8gYXV0b21hdGNoXG4gICAgICAgICAgICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQocmVzdWx0c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdGlhbFZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5faW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAvLyB0aGlzLl9pbml0aWFsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsVmFsdWUgPSB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubWRiTGlzdEF1dG9IaWdobGlnaHQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZXIuYXV0b0hpZ2hsaWdodEluZGV4ID0gdGhpcy5nZXRCZXN0TWF0Y2hJbmRleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGVtcGxhdGUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoJ21kYkxpc3RJbml0aWFsVmFsdWUnKVxuICBwdWJsaWMgc2V0IGluaXRpYWxWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX2RhdGFTZXJ2aWNlICYmIHR5cGVvZiB0aGlzLl9kYXRhU2VydmljZS5jb252ZXJ0VG9JdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5pdGlhbEl0ZW0gPSB0aGlzLl9kYXRhU2VydmljZS5jb252ZXJ0VG9JdGVtKHZhbHVlKTtcbiAgICAgICAgaWYgKGluaXRpYWxJdGVtKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZXIub25TZWxlY3RlZChpbml0aWFsSXRlbSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9kYXRhU2VydmljZSkge1xuICAgICAgdGhpcy5faW5pdGlhbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlYXJjaCh0ZXJtOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzTmlsKHRlcm0pICYmIHRlcm0ubGVuZ3RoID49IHRoaXMubWRiTGlzdE1pblNlYXJjaExlbmd0aCAmJiB0aGlzLnRlcm0gIT09IHRlcm0pIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFRpbWVyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY3R4LnNlYXJjaGluZykge1xuICAgICAgICB0aGlzLmN0eC5yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuY3R4LnNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LnNlYXJjaEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoVGVtcGxhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsZWFyVGltZXIpIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlYXJjaFRpbWVyID0gb2JzZXJ2YWJsZVRpbWVyKHRoaXMubWRiTGlzdFBhdXNlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoVGltZXJDb21wbGV0ZSh0ZXJtKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaXNOaWwodGVybSkgJiYgdGVybS5sZW5ndGggPCB0aGlzLm1kYkxpc3RNaW5TZWFyY2hMZW5ndGgpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGltZXIpIHtcbiAgICAgIHRoaXMuc2VhcmNoVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhclRpbWVyID0gb2JzZXJ2YWJsZVRpbWVyKENMRUFSX1RJTUVPVVQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmN0eC5zZWFyY2hJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5zZWFyY2goJycpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbihvcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5jdHguaXNPcGVuID0gb3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaFRpbWVyKSB7XG4gICAgICB0aGlzLnNlYXJjaFRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNlYXJjaFRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuZGF0YVNlcnZpY2UuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaFRpbWVyQ29tcGxldGUodGVybTogc3RyaW5nKTogYW55IHtcbiAgICAvLyBCZWdpbiB0aGUgc2VhcmNoXG4gICAgaWYgKGlzTmlsKHRlcm0pIHx8IHRlcm0ubGVuZ3RoIDwgdGhpcy5tZGJMaXN0TWluU2VhcmNoTGVuZ3RoKSB7XG4gICAgICB0aGlzLmN0eC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLl9kYXRhU2VydmljZS5zZWFyY2godGVybSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgLy8gICB0aGlzLmN0eC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgLy8gICBsZXQgZXJyTXNnID0gJ3NlYXJjaCBlcnJvcic7XG4gIC8vICAgaWYgKGVycm9yKSB7XG4gIC8vICAgICBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgLy8gICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZVxuICAvLyAgIH1cbiAgLy8gICB0aGlzLnJlZnJlc2hUZW1wbGF0ZSgpO1xuXG4gIC8vICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVyck1zZyk7XG4gIC8vIH1cblxuICBwcml2YXRlIHJlZnJlc2hUZW1wbGF0ZSgpIHtcbiAgICAvLyBSZWNyZWF0ZSB0aGUgdGVtcGxhdGVcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5jdHgucmVzdWx0cyAmJiB0aGlzLmN0eC5pc09wZW4pIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgICAgIHRoaXMuY3R4XG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZXN0TWF0Y2hJbmRleCgpIHtcbiAgICBpZiAoIXRoaXMuY3R4LnJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEZpcnN0IHRyeSB0byBmaW5kIHRoZSBleGFjdCB0ZXJtXG4gICAgbGV0IGJlc3RNYXRjaCA9IHRoaXMuY3R4LnJlc3VsdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgLy8gSWYgbm90IHRyeSB0byBmaW5kIHRoZSBmaXJzdCBpdGVtIHRoYXQgc3RhcnRzIHdpdGggdGhlIHRlcm1cbiAgICBpZiAoYmVzdE1hdGNoIDwgMCkge1xuICAgICAgYmVzdE1hdGNoID0gdGhpcy5jdHgucmVzdWx0cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLnRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xuICAgIH1cbiAgICAvLyBJZiBub3QgdHJ5IHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBpbmNsdWRlcyB0aGUgdGVybVxuICAgIGlmIChiZXN0TWF0Y2ggPCAwKSB7XG4gICAgICBiZXN0TWF0Y2ggPSB0aGlzLmN0eC5yZXN1bHRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0TWF0Y2ggPCAwID8gbnVsbCA6IGJlc3RNYXRjaDtcbiAgfVxuXG59XG4iXX0=