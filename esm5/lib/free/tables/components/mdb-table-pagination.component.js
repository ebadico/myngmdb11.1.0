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
        else {
            this.lastVisibleItemIndex = this.maxVisibleItems;
        }
        if (searchDataSource.currentValue.length <= this.maxVisibleItems) {
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
                    template: "<!--Pagination -->\n<nav>\n  <ul class=\"pagination pagination-circle pg-blue d-flex flex-center\" [ngClass]=\"{\n      'justify-content-end': paginationAlign =='end',\n      'justify-content-start': paginationAlign =='start'\n    }\">\n\n    <p *ngIf=\"!hideDescription\">{{firstItemIndex}} - {{lastVisibleItemIndex}} of {{allItemsLength}}</p>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfPreviousShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfNextShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n\n  </ul>\n</nav>\n<!--/Pagination -->\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUVsRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0M7SUErQkUscUNBQ1UsWUFBNkIsRUFDN0IsS0FBd0I7UUFGbEMsaUJBZUM7UUFkUyxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUE1QnpCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBUSxJQUFJLENBQUM7UUFFN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFMUMsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdDLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUVqQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0IseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDZCQUF3QixHQUFZLElBQUksQ0FBQztRQUV6QyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVUsR0FBNkMsSUFBSSxPQUFPLEVBQW1DLENBQUM7UUFFNUYsa0JBQWEsR0FB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LENBQUM7Ozs7SUFFRCxxRUFBK0I7OztJQUEvQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Z0JBN0xGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywrN0JBQW9EO2lCQUNyRDs7OztnQkFOUSxlQUFlO2dCQUgwQixpQkFBaUI7OzttQ0FXaEUsS0FBSzttQ0FDTCxLQUFLO2tDQUVMLEtBQUs7a0NBQ0wsS0FBSztnQ0FtQkwsTUFBTTtvQ0FDTixNQUFNOztJQWtLVCxrQ0FBQztDQUFBLEFBL0xELElBK0xDO1NBM0xZLDJCQUEyQjs7O0lBQ3RDLHVEQUEyQzs7SUFDM0MsdURBQXNDOztJQUV0QyxzREFBc0M7O0lBQ3RDLHNEQUEwQzs7SUFFMUMsc0RBQTZCOztJQUU3QixxREFBMkI7O0lBQzNCLG9EQUE2Qzs7SUFDN0MsMkRBQWlDOztJQUVqQyx1REFBNkI7O0lBRTdCLHFEQUEyQjs7SUFFM0IsMkRBQXNDOztJQUN0QywrREFBeUM7O0lBRXpDLGlEQUF3Qjs7SUFFeEIsaURBQXNHOztJQUV0RyxvREFBa0Q7O0lBQ2xELHdEQUFzRDs7Ozs7SUFHcEQsbURBQXFDOzs7OztJQUNyQyw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWRiLXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzZWFyY2hQYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaERhdGFTb3VyY2U6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvbkFsaWduOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaGlkZURlc2NyaXB0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbWF4VmlzaWJsZUl0ZW1zOiBudW1iZXIgPSAxMDtcblxuICBmaXJzdEl0ZW1JbmRleDogbnVtYmVyID0gMDtcbiAgbGFzdEl0ZW1JbmRleDogbnVtYmVyID0gdGhpcy5tYXhWaXNpYmxlSXRlbXM7XG4gIGxhc3RWaXNpYmxlSXRlbUluZGV4OiBudW1iZXIgPSA1O1xuXG4gIGFjdGl2ZVBhZ2VOdW1iZXI6IG51bWJlciA9IDE7XG5cbiAgYWxsSXRlbXNMZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgbmV4dFNob3VsZEJlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJldmlvdXNTaG91bGRCZURpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcblxuICBwYWdpbmF0aW9uOiBTdWJqZWN0PHsgZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyIH0+ID0gbmV3IFN1YmplY3Q8eyBmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIgfT4oKTtcblxuICBAT3V0cHV0KCkgbmV4dFBhZ2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHJldmlvdXNQYWdlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYmxlU2VydmljZTogTWRiVGFibGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLmRhdGFTb3VyY2VDaGFuZ2UoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IGRhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5jYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgICB0aGlzLmRpc2FibGVOZXh0QnV0dG9uKGRhdGEpO1xuICAgICAgaWYgKHRoaXMubWF4VmlzaWJsZUl0ZW1zID4gdGhpcy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgICAgIHRoaXMubWF4VmlzaWJsZUl0ZW1zID0gdGhpcy5hbGxJdGVtc0xlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHNlYXJjaERhdGFTb3VyY2UgPSBjaGFuZ2VzWydzZWFyY2hEYXRhU291cmNlJ107XG4gICAgaWYgKHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA+IHRoaXMuYWxsSXRlbXNMZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmFsbEl0ZW1zTGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSAwO1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gMDtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSAwO1xuICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLm1heFZpc2libGVJdGVtcztcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoIDw9IHRoaXMubWF4VmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSBzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldE1heFZpc2libGVJdGVtc051bWJlclRvKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5tYXhWaXNpYmxlSXRlbXMgPSB2YWx1ZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNlYXJjaFRleHRPYnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hUZXh0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIGRpc2FibGVOZXh0QnV0dG9uKGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA8PSB0aGlzLm1heFZpc2libGVJdGVtcykge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpIHtcbiAgICB0aGlzLmZpcnN0SXRlbUluZGV4ID0gdGhpcy5hY3RpdmVQYWdlTnVtYmVyICogdGhpcy5tYXhWaXNpYmxlSXRlbXMgLSB0aGlzLm1heFZpc2libGVJdGVtcyArIDE7XG4gICAgdGhpcy5wYWdpbmF0aW9uLm5leHQoeyBmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4IH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlTGFzdEl0ZW1JbmRleCgpIHtcbiAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKiB0aGlzLm1heFZpc2libGVJdGVtcztcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5sYXN0SXRlbUluZGV4O1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSAmJiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aCkpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc2VhcmNoRGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMubGFzdEl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGlvbi5uZXh0KHsgZmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleCB9KTtcbiAgfVxuXG4gIHBhZ2luYXRpb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uO1xuICB9XG5cbiAgY2FsY3VsYXRlSG93TWFueVBhZ2VzU2hvdWxkQmUoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoIC8gdGhpcy5tYXhWaXNpYmxlSXRlbXMpO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlKCkge1xuICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlci0tO1xuICAgIHRoaXMuY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLnByZXZpb3VzUGFnZUNsaWNrLmVtaXQoeyBmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4IH0pO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyKys7XG4gICAgdGhpcy5jYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGFzdEl0ZW1JbmRleCgpO1xuXG4gICAgaWYgKHRoaXMubGFzdEl0ZW1JbmRleCA+IHRoaXMudGFibGVTZXJ2aWNlLmdldERhdGFTb3VyY2UoKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMudGFibGVTZXJ2aWNlLmdldERhdGFTb3VyY2UoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPiB0aGlzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5hbGxJdGVtc0xlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLm5leHRQYWdlQ2xpY2suZW1pdCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBuZXh0UGFnZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnMgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmZpcnN0SXRlbUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9icyA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnM7XG4gIH1cblxuICBjaGVja0lmTmV4dFNob3VsZEJlRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSAmJiAodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9PT0gdGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPj0gdGhpcy5jYWxjdWxhdGVIb3dNYW55UGFnZXNTaG91bGRCZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZlByZXZpb3VzU2hvdWxkQmVEaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuIl19