/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { MdbTableService } from '../services/mdb-table.service';
import { Observable, Subject } from 'rxjs';
var MdbTablePaginationComponent = /** @class */ (function () {
    function MdbTablePaginationComponent(tableService, cdRef) {
        var _this = this;
        this.tableService = tableService;
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.paginationAlign = '';
        this.hideDescription = false;
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new Subject();
        this.nextPageClick = new EventEmitter();
        this.previousPageClick = new EventEmitter();
        this.tableService.dataSourceChange().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.allItemsLength = data.length;
            _this.lastVisibleItemIndex = data.length;
            _this.calculateFirstItemIndex();
            _this.calculateLastItemIndex();
            _this.disableNextButton(data);
            if (_this.maxVisibleItems > _this.allItemsLength) {
                _this.maxVisibleItems = _this.allItemsLength;
            }
            if (_this.searchDataSource) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.searchDataSource.length !== data.length) {
                        _this.activePageNumber = 1;
                        _this.firstItemIndex = 1;
                    }
                    else {
                        if (_this.firstItemIndex <= _this.maxVisibleItems) {
                            _this.lastVisibleItemIndex = _this.maxVisibleItems;
                        }
                        else {
                        }
                    }
                }), 0);
            }
        }));
    }
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.allItemsLength = this.tableService.getDataSource().length;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        if (!searchDataSource.isFirstChange() && searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.setMaxVisibleItemsNumberTo = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.searchTextObs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var observable = Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(_this.searchText);
        }));
        return observable;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.disableNextButton = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateFirstItemIndex = /**
     * @return {?}
     */
    function () {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateLastItemIndex = /**
     * @return {?}
     */
    function () {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && (this.lastItemIndex > this.searchDataSource.length)) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
            this.lastVisibleItemIndex = this.tableService.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.paginationChange = /**
     * @return {?}
     */
    function () {
        return this.pagination;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateHowManyPagesShouldBe = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.tableService.getDataSource().length / this.maxVisibleItems);
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(_this.firstItemIndex);
        }));
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(_this.lastVisibleItemIndex);
        }));
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfNextShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.searchDataSource && (this.lastVisibleItemIndex === this.searchDataSource.length)) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfPreviousShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.activePageNumber === 1) {
            return true;
        }
    };
    MdbTablePaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-table-pagination',
                    template: "<!--Pagination -->\n<nav>\n  <ul class=\"pagination pagination-circle pg-blue d-flex flex-center\" [ngClass]=\"{\n      'justify-content-end': paginationAlign =='end',\n      'justify-content-start': paginationAlign =='start'\n    }\">\n\n    <li *ngIf=\"!hideDescription\">{{firstItemIndex}} - {{lastVisibleItemIndex}} of {{allItemsLength}}</li>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfPreviousShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfNextShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n\n  </ul>\n</nav>\n<!--/Pagination -->\n"
                }] }
    ];
    /** @nocollapse */
    MdbTablePaginationComponent.ctorParameters = function () { return [
        { type: MdbTableService },
        { type: ChangeDetectorRef }
    ]; };
    MdbTablePaginationComponent.propDecorators = {
        searchPagination: [{ type: Input }],
        searchDataSource: [{ type: Input }],
        paginationAlign: [{ type: Input }],
        hideDescription: [{ type: Input }],
        nextPageClick: [{ type: Output }],
        previousPageClick: [{ type: Output }]
    };
    return MdbTablePaginationComponent;
}());
export { MdbTablePaginationComponent };
if (false) {
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchPagination;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchDataSource;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.paginationAlign;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.hideDescription;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.maxVisibleItems;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.firstItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.lastItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.lastVisibleItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.activePageNumber;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.allItemsLength;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.nextShouldBeDisabled;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.previousShouldBeDisabled;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchText;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.pagination;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.nextPageClick;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.previousPageClick;
    /**
     * @type {?}
     * @private
     */
    MdbTablePaginationComponent.prototype.tableService;
    /**
     * @type {?}
     * @private
     */
    MdbTablePaginationComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUVsRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekM7SUErQkUscUNBQ1UsWUFBNkIsRUFDN0IsS0FBd0I7UUFGbEMsaUJBOEJDO1FBN0JTLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQTVCekIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLHFCQUFnQixHQUFRLElBQUksQ0FBQztRQUU3QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUUxQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixrQkFBYSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDN0MseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBRWpDLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUU3QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUUzQix5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsNkJBQXdCLEdBQVksSUFBSSxDQUFDO1FBRXpDLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsZUFBVSxHQUE2QyxJQUFJLE9BQU8sRUFBbUMsQ0FBQztRQUU1RixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU1wRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBUztZQUV2RCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsS0FBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEMsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUM5QyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7YUFDNUM7WUFFRCxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsVUFBVTs7O2dCQUFDO29CQUNULElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNoRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztxQkFDekI7eUJBQU07d0JBQ0wsSUFBSSxLQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7NEJBQy9DLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO3lCQUVsRDs2QkFBTTt5QkFDTjtxQkFDRjtnQkFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7YUFDUDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFHRCxpREFBVzs7OztJQUFYLFVBQVksT0FBc0I7O1lBQzFCLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDakQ7UUFFRCxJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3JHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7U0FDbkM7SUFFSCxDQUFDOzs7OztJQUVELGdFQUEwQjs7OztJQUExQixVQUEyQixLQUFhO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsbURBQWE7OztJQUFiO1FBQUEsaUJBS0M7O1lBSk8sVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFhO1lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQztRQUNGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsdURBQWlCOzs7O0lBQWpCLFVBQWtCLElBQVM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCw2REFBdUI7OztJQUF2QjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7SUFFL0UsQ0FBQzs7OztJQUVELDREQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1NBQzFEO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNoRDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzlELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUN0RTtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCxzREFBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUVBQTZCOzs7SUFBN0I7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFRCxrREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O0lBRUQsd0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFLQzs7WUFKTyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQWE7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsNERBQXNCOzs7SUFBdEI7UUFBQSxpQkFLQzs7WUFKTyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQWE7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxpRUFBMkI7OztJQUEzQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6RixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7OztJQUVELHFFQUErQjs7O0lBQS9CO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOztnQkEzTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGk4QkFBb0Q7aUJBQ3JEOzs7O2dCQU5PLGVBQWU7Z0JBSDJCLGlCQUFpQjs7O21DQVdoRSxLQUFLO21DQUNMLEtBQUs7a0NBRUwsS0FBSztrQ0FDTCxLQUFLO2dDQW1CTCxNQUFNO29DQUNOLE1BQU07O0lBZ0xULGtDQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0F6TVksMkJBQTJCOzs7SUFDdEMsdURBQTJDOztJQUMzQyx1REFBc0M7O0lBRXRDLHNEQUFzQzs7SUFDdEMsc0RBQTBDOztJQUUxQyxzREFBNkI7O0lBRTdCLHFEQUEyQjs7SUFDM0Isb0RBQTZDOztJQUM3QywyREFBaUM7O0lBRWpDLHVEQUE2Qjs7SUFFN0IscURBQTJCOztJQUUzQiwyREFBc0M7O0lBQ3RDLCtEQUF5Qzs7SUFFekMsaURBQXdCOztJQUV4QixpREFBc0c7O0lBRXRHLG9EQUFrRDs7SUFDbEQsd0RBQXNEOzs7OztJQUdwRCxtREFBcUM7Ozs7O0lBQ3JDLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kYlRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvbWRiLXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2VhcmNoUGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWFyY2hEYXRhU291cmNlOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25BbGlnbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGhpZGVEZXNjcmlwdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG1heFZpc2libGVJdGVtczogbnVtYmVyID0gMTA7XG5cbiAgZmlyc3RJdGVtSW5kZXg6IG51bWJlciA9IDA7XG4gIGxhc3RJdGVtSW5kZXg6IG51bWJlciA9IHRoaXMubWF4VmlzaWJsZUl0ZW1zO1xuICBsYXN0VmlzaWJsZUl0ZW1JbmRleDogbnVtYmVyID0gNTtcblxuICBhY3RpdmVQYWdlTnVtYmVyOiBudW1iZXIgPSAxO1xuXG4gIGFsbEl0ZW1zTGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIG5leHRTaG91bGRCZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByZXZpb3VzU2hvdWxkQmVEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgcGFnaW5hdGlvbjogU3ViamVjdDx7IGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlciB9PiA9IG5ldyBTdWJqZWN0PHsgZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyIH0+KCk7XG5cbiAgQE91dHB1dCgpIG5leHRQYWdlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHByZXZpb3VzUGFnZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IE1kYlRhYmxlU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLnRhYmxlU2VydmljZS5kYXRhU291cmNlQ2hhbmdlKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IGRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5jYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgICB0aGlzLmRpc2FibGVOZXh0QnV0dG9uKGRhdGEpO1xuICAgICAgaWYgKHRoaXMubWF4VmlzaWJsZUl0ZW1zID4gdGhpcy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgICB0aGlzLm1heFZpc2libGVJdGVtcyA9IHRoaXMuYWxsSXRlbXNMZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaERhdGFTb3VyY2UpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGggIT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0SXRlbUluZGV4IDw9IHRoaXMubWF4VmlzaWJsZUl0ZW1zKSB7XG4gICAgICAgICAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLm1heFZpc2libGVJdGVtcztcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IHRoaXMudGFibGVTZXJ2aWNlLmdldERhdGFTb3VyY2UoKS5sZW5ndGg7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBzZWFyY2hEYXRhU291cmNlID0gY2hhbmdlc1snc2VhcmNoRGF0YVNvdXJjZSddO1xuICAgIGlmIChzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuYWxsSXRlbXNMZW5ndGggPSBzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPiB0aGlzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5hbGxJdGVtc0xlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmZpcnN0SXRlbUluZGV4ID0gMDtcbiAgICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gMDtcbiAgICAgIHRoaXMuYWxsSXRlbXNMZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGlmICghc2VhcmNoRGF0YVNvdXJjZS5pc0ZpcnN0Q2hhbmdlKCkgJiYgc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoIDw9IHRoaXMubWF4VmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSBzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldE1heFZpc2libGVJdGVtc051bWJlclRvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5tYXhWaXNpYmxlSXRlbXMgPSB2YWx1ZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNlYXJjaFRleHRPYnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hUZXh0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIGRpc2FibGVOZXh0QnV0dG9uKGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA8PSB0aGlzLm1heFZpc2libGVJdGVtcykge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpIHtcbiAgICB0aGlzLmZpcnN0SXRlbUluZGV4ID0gdGhpcy5hY3RpdmVQYWdlTnVtYmVyICogdGhpcy5tYXhWaXNpYmxlSXRlbXMgLSB0aGlzLm1heFZpc2libGVJdGVtcyArIDE7XG4gICAgdGhpcy5wYWdpbmF0aW9uLm5leHQoe2ZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXh9KTtcblxuICB9XG5cbiAgY2FsY3VsYXRlTGFzdEl0ZW1JbmRleCgpIHtcbiAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKiB0aGlzLm1heFZpc2libGVJdGVtcztcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5sYXN0SXRlbUluZGV4O1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSAmJiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc2VhcmNoRGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMubGFzdEl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGlvbi5uZXh0KHtmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4fSk7XG4gIH1cblxuICBwYWdpbmF0aW9uQ2hhbmdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbjtcbiAgfVxuXG4gIGNhbGN1bGF0ZUhvd01hbnlQYWdlc1Nob3VsZEJlKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCAvIHRoaXMubWF4VmlzaWJsZUl0ZW1zKTtcbiAgfVxuXG4gIHByZXZpb3VzUGFnZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXItLTtcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5wcmV2aW91c1BhZ2VDbGljay5lbWl0KHtmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4fSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIrKztcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA+IHRoaXMuYWxsSXRlbXNMZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmFsbEl0ZW1zTGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMubmV4dFBhZ2VDbGljay5lbWl0KHtmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4fSk7XG4gIH1cblxuICBuZXh0UGFnZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnMgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmZpcnN0SXRlbUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9icyA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnM7XG4gIH1cblxuICBjaGVja0lmTmV4dFNob3VsZEJlRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSAmJiAodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9PT0gdGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPj0gdGhpcy5jYWxjdWxhdGVIb3dNYW55UGFnZXNTaG91bGRCZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZlByZXZpb3VzU2hvdWxkQmVEaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuIl19