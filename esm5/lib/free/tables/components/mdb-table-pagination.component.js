/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MdbTableDirective } from "../directives/mdb-table.directive";
var MdbTablePaginationComponent = /** @class */ (function () {
    function MdbTablePaginationComponent(cdRef) {
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
    }
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.tableEl) {
            this.allItemsLength = this.tableEl.getDataSource().length;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tableEl) {
            this.tableEl.dataSourceChange().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.allItemsLength = data.length;
                _this.lastVisibleItemIndex = data.length;
                _this.calculateFirstItemIndex();
                _this.calculateLastItemIndex();
                _this.disableNextButton(data);
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
                            if (_this.firstItemIndex <= _this.maxVisibleItems && _this.lastVisibleItemIndex <= data.length) {
                                _this.lastVisibleItemIndex = _this.maxVisibleItems;
                            }
                        }
                    }), 0);
                }
            }));
        }
        this.paginationChange().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.firstItemIndex = data.first;
            _this.lastVisibleItemIndex = data.last;
        }));
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
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
            this.lastVisibleItemIndex = this.tableEl.getDataSource().length;
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
        return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems);
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
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
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
        { type: ChangeDetectorRef }
    ]; };
    MdbTablePaginationComponent.propDecorators = {
        tableEl: [{ type: Input }],
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
    MdbTablePaginationComponent.prototype.tableEl;
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
    MdbTablePaginationComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUVsRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRTtJQWdDRSxxQ0FBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUExQm5DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBUSxJQUFJLENBQUM7UUFFN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFMUMsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdDLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUVqQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFM0IseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDZCQUF3QixHQUFZLElBQUksQ0FBQztRQUV6QyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVUsR0FBNkMsSUFBSSxPQUFPLEVBQW1DLENBQUM7UUFFNUYsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLElBQUksWUFB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c0RBQTZCOztJQUU3QixxREFBMkI7O0lBQzNCLG9EQUE2Qzs7SUFDN0MsMkRBQWlDOztJQUVqQyx1REFBNkI7O0lBRTdCLHFEQUEyQjs7SUFFM0IsMkRBQXNDOztJQUN0QywrREFBeUM7O0lBRXpDLGlEQUF3Qjs7SUFFeEIsaURBQXNHOztJQUV0RyxvREFBa0Q7O0lBQ2xELHdEQUFzRDs7Ozs7SUFFMUMsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01kYlRhYmxlRGlyZWN0aXZlfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9tZGItdGFibGUuZGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRhYmxlRWw6IE1kYlRhYmxlRGlyZWN0aXZlO1xuICBASW5wdXQoKSBzZWFyY2hQYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaERhdGFTb3VyY2U6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvbkFsaWduOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaGlkZURlc2NyaXB0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbWF4VmlzaWJsZUl0ZW1zOiBudW1iZXIgPSAxMDtcblxuICBmaXJzdEl0ZW1JbmRleDogbnVtYmVyID0gMDtcbiAgbGFzdEl0ZW1JbmRleDogbnVtYmVyID0gdGhpcy5tYXhWaXNpYmxlSXRlbXM7XG4gIGxhc3RWaXNpYmxlSXRlbUluZGV4OiBudW1iZXIgPSA1O1xuXG4gIGFjdGl2ZVBhZ2VOdW1iZXI6IG51bWJlciA9IDE7XG5cbiAgYWxsSXRlbXNMZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgbmV4dFNob3VsZEJlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJldmlvdXNTaG91bGRCZURpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcblxuICBwYWdpbmF0aW9uOiBTdWJqZWN0PHsgZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyIH0+ID0gbmV3IFN1YmplY3Q8eyBmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIgfT4oKTtcblxuICBAT3V0cHV0KCkgbmV4dFBhZ2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHJldmlvdXNQYWdlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudGFibGVFbCkge1xuICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IHRoaXMudGFibGVFbC5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy50YWJsZUVsKSB7XG4gICAgICB0aGlzLnRhYmxlRWwuZGF0YVNvdXJjZUNoYW5nZSgpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5leHRCdXR0b24oZGF0YSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGggIT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlciA9IDE7XG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RJdGVtSW5kZXggPD0gdGhpcy5tYXhWaXNpYmxlSXRlbXMgJiYgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA8PSBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLm1heFZpc2libGVJdGVtcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2luYXRpb25DaGFuZ2UoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IGRhdGEuZmlyc3Q7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gZGF0YS5sYXN0O1xuICAgIH0pO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgc2VhcmNoRGF0YVNvdXJjZSA9IGNoYW5nZXNbJ3NlYXJjaERhdGFTb3VyY2UnXTtcbiAgICBpZiAoc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID4gdGhpcy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMuYWxsSXRlbXNMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSAwO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBpZiAoIXNlYXJjaERhdGFTb3VyY2UuaXNGaXJzdENoYW5nZSgpICYmIHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCA8PSB0aGlzLm1heFZpc2libGVJdGVtcykge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBzZXRNYXhWaXNpYmxlSXRlbXNOdW1iZXJUbyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHZhbHVlO1xuICAgIHRoaXMubWF4VmlzaWJsZUl0ZW1zID0gdmFsdWU7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzZWFyY2hUZXh0T2JzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBkaXNhYmxlTmV4dEJ1dHRvbihkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPD0gdGhpcy5tYXhWaXNpYmxlSXRlbXMpIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKSB7XG4gICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IHRoaXMuYWN0aXZlUGFnZU51bWJlciAqIHRoaXMubWF4VmlzaWJsZUl0ZW1zIC0gdGhpcy5tYXhWaXNpYmxlSXRlbXMgKyAxO1xuICAgIHRoaXMucGFnaW5hdGlvbi5uZXh0KHtmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4fSk7XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKSB7XG4gICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy5hY3RpdmVQYWdlTnVtYmVyICogdGhpcy5tYXhWaXNpYmxlSXRlbXM7XG4gICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMubGFzdEl0ZW1JbmRleDtcblxuICAgIGlmICh0aGlzLnNlYXJjaERhdGFTb3VyY2UgJiYgKHRoaXMubGFzdEl0ZW1JbmRleCA+IHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGgpKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnNlYXJjaERhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmxhc3RJdGVtSW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdEl0ZW1JbmRleCA+IHRoaXMudGFibGVFbC5nZXREYXRhU291cmNlKCkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2luYXRpb24ubmV4dCh7Zmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleH0pO1xuICB9XG5cbiAgcGFnaW5hdGlvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb247XG4gIH1cblxuICBjYWxjdWxhdGVIb3dNYW55UGFnZXNTaG91bGRCZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudGFibGVFbC5nZXREYXRhU291cmNlKCkubGVuZ3RoIC8gdGhpcy5tYXhWaXNpYmxlSXRlbXMpO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlKCkge1xuICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlci0tO1xuICAgIHRoaXMuY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLnByZXZpb3VzUGFnZUNsaWNrLmVtaXQoe2ZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXh9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlcisrO1xuICAgIHRoaXMuY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKTtcblxuICAgIGlmICh0aGlzLmxhc3RJdGVtSW5kZXggPiB0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZUVsLmdldERhdGFTb3VyY2UoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPiB0aGlzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5hbGxJdGVtc0xlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLm5leHRQYWdlQ2xpY2suZW1pdCh7Zmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleH0pO1xuICB9XG5cbiAgbmV4dFBhZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb2JzID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5maXJzdEl0ZW1JbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9icztcbiAgfVxuXG4gIHByZXZpb3VzUGFnZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnMgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzO1xuICB9XG5cbiAgY2hlY2tJZk5leHRTaG91bGRCZURpc2FibGVkKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaERhdGFTb3VyY2UgJiYgKHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPT09IHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID49IHRoaXMuY2FsY3VsYXRlSG93TWFueVBhZ2VzU2hvdWxkQmUoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZQcmV2aW91c1Nob3VsZEJlRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==