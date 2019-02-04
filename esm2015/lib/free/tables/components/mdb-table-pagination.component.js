/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { MdbTableService } from '../services/mdb-table.service';
import { Observable, Subject } from 'rxjs';
export class MdbTablePaginationComponent {
    /**
     * @param {?} tableService
     * @param {?} cdRef
     */
    constructor(tableService, cdRef) {
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
        this.tableService.dataSourceChange().subscribe((data) => {
            this.allItemsLength = data.length;
            this.lastVisibleItemIndex = data.length;
            this.calculateFirstItemIndex();
            this.calculateLastItemIndex();
            this.disableNextButton(data);
            if (this.maxVisibleItems > this.allItemsLength) {
                this.maxVisibleItems = this.allItemsLength;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.allItemsLength = this.tableService.getDataSource().length;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const searchDataSource = changes['searchDataSource'];
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxVisibleItemsNumberTo(value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    searchTextObs() {
        /** @type {?} */
        const observable = Observable.create((observer) => {
            observer.next(this.searchText);
        });
        return observable;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    disableNextButton(data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    }
    /**
     * @return {?}
     */
    calculateFirstItemIndex() {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    calculateLastItemIndex() {
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
    }
    /**
     * @return {?}
     */
    paginationChange() {
        return this.pagination;
    }
    /**
     * @return {?}
     */
    calculateHowManyPagesShouldBe() {
        return Math.ceil(this.tableService.getDataSource().length / this.maxVisibleItems);
    }
    /**
     * @return {?}
     */
    previousPage() {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    nextPage() {
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
    }
    /**
     * @return {?}
     */
    nextPageObservable() {
        /** @type {?} */
        const obs = Observable.create((observer) => {
            observer.next(this.firstItemIndex);
        });
        return obs;
    }
    /**
     * @return {?}
     */
    previousPageObservable() {
        /** @type {?} */
        const obs = Observable.create((observer) => {
            observer.next(this.lastVisibleItemIndex);
        });
        return obs;
    }
    /**
     * @return {?}
     */
    checkIfNextShouldBeDisabled() {
        if (this.searchDataSource && (this.lastVisibleItemIndex === this.searchDataSource.length)) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    }
    /**
     * @return {?}
     */
    checkIfPreviousShouldBeDisabled() {
        if (this.activePageNumber === 1) {
            return true;
        }
    }
}
MdbTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-table-pagination',
                template: "<!--Pagination -->\n<nav>\n  <ul class=\"pagination pagination-circle pg-blue d-flex flex-center\" [ngClass]=\"{\n      'justify-content-end': paginationAlign =='end',\n      'justify-content-start': paginationAlign =='start'\n    }\">\n\n    <p *ngIf=\"!hideDescription\">{{firstItemIndex}} - {{lastVisibleItemIndex}} of {{allItemsLength}}</p>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfPreviousShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfNextShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n\n  </ul>\n</nav>\n<!--/Pagination -->\n"
            }] }
];
/** @nocollapse */
MdbTablePaginationComponent.ctorParameters = () => [
    { type: MdbTableService },
    { type: ChangeDetectorRef }
];
MdbTablePaginationComponent.propDecorators = {
    searchPagination: [{ type: Input }],
    searchDataSource: [{ type: Input }],
    paginationAlign: [{ type: Input }],
    hideDescription: [{ type: Input }],
    nextPageClick: [{ type: Output }],
    previousPageClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUVsRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNM0MsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUEyQnRDLFlBQ1UsWUFBNkIsRUFDN0IsS0FBd0I7UUFEeEIsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBNUJ6QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMscUJBQWdCLEdBQVEsSUFBSSxDQUFDO1FBRTdCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRTFDLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3Qyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFFakMscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0Qyw2QkFBd0IsR0FBWSxJQUFJLENBQUM7UUFFekMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixlQUFVLEdBQTZDLElBQUksT0FBTyxFQUFtQyxDQUFDO1FBRTVG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U0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLCs3QkFBb0Q7YUFDckQ7Ozs7WUFOUSxlQUFlO1lBSDBCLGlCQUFpQjs7OytCQVdoRSxLQUFLOytCQUNMLEtBQUs7OEJBRUwsS0FBSzs4QkFDTCxLQUFLOzRCQW1CTCxNQUFNO2dDQUNOLE1BQU07Ozs7SUF4QlAsdURBQTJDOztJQUMzQyx1REFBc0M7O0lBRXRDLHNEQUFzQzs7SUFDdEMsc0RBQTBDOztJQUUxQyxzREFBNkI7O0lBRTdCLHFEQUEyQjs7SUFDM0Isb0RBQTZDOztJQUM3QywyREFBaUM7O0lBRWpDLHVEQUE2Qjs7SUFFN0IscURBQTJCOztJQUUzQiwyREFBc0M7O0lBQ3RDLCtEQUF5Qzs7SUFFekMsaURBQXdCOztJQUV4QixpREFBc0c7O0lBRXRHLG9EQUFrRDs7SUFDbEQsd0RBQXNEOzs7OztJQUdwRCxtREFBcUM7Ozs7O0lBQ3JDLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZGItdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNlYXJjaFBhZ2luYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2VhcmNoRGF0YVNvdXJjZTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBwYWdpbmF0aW9uQWxpZ246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBoaWRlRGVzY3JpcHRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtYXhWaXNpYmxlSXRlbXM6IG51bWJlciA9IDEwO1xuXG4gIGZpcnN0SXRlbUluZGV4OiBudW1iZXIgPSAwO1xuICBsYXN0SXRlbUluZGV4OiBudW1iZXIgPSB0aGlzLm1heFZpc2libGVJdGVtcztcbiAgbGFzdFZpc2libGVJdGVtSW5kZXg6IG51bWJlciA9IDU7XG5cbiAgYWN0aXZlUGFnZU51bWJlcjogbnVtYmVyID0gMTtcblxuICBhbGxJdGVtc0xlbmd0aDogbnVtYmVyID0gMDtcblxuICBuZXh0U2hvdWxkQmVEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcmV2aW91c1Nob3VsZEJlRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gIHBhZ2luYXRpb246IFN1YmplY3Q8eyBmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIgfT4gPSBuZXcgU3ViamVjdDx7IGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlciB9PigpO1xuXG4gIEBPdXRwdXQoKSBuZXh0UGFnZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwcmV2aW91c1BhZ2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBNZGJUYWJsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy50YWJsZVNlcnZpY2UuZGF0YVNvdXJjZUNoYW5nZSgpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gZGF0YS5sZW5ndGg7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKTtcbiAgICAgIHRoaXMuZGlzYWJsZU5leHRCdXR0b24oZGF0YSk7XG4gICAgICBpZiAodGhpcy5tYXhWaXNpYmxlSXRlbXMgPiB0aGlzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tYXhWaXNpYmxlSXRlbXMgPSB0aGlzLmFsbEl0ZW1zTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWxsSXRlbXNMZW5ndGggPSB0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgc2VhcmNoRGF0YVNvdXJjZSA9IGNoYW5nZXNbJ3NlYXJjaERhdGFTb3VyY2UnXTtcbiAgICBpZiAoc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID4gdGhpcy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMuYWxsSXRlbXNMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSAwO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMubWF4VmlzaWJsZUl0ZW1zO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hEYXRhU291cmNlLmN1cnJlbnRWYWx1ZS5sZW5ndGggPD0gdGhpcy5tYXhWaXNpYmxlSXRlbXMpIHtcbiAgICAgIHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgc2V0TWF4VmlzaWJsZUl0ZW1zTnVtYmVyVG8odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHZhbHVlO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLm1heFZpc2libGVJdGVtcyA9IHZhbHVlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2VhcmNoVGV4dE9icygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgZGlzYWJsZU5leHRCdXR0b24oZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoIDw9IHRoaXMubWF4VmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCkge1xuICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKiB0aGlzLm1heFZpc2libGVJdGVtcyAtIHRoaXMubWF4VmlzaWJsZUl0ZW1zICsgMTtcbiAgICB0aGlzLnBhZ2luYXRpb24ubmV4dCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBjYWxjdWxhdGVMYXN0SXRlbUluZGV4KCkge1xuICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMuYWN0aXZlUGFnZU51bWJlciAqIHRoaXMubWF4VmlzaWJsZUl0ZW1zO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmxhc3RJdGVtSW5kZXg7XG5cbiAgICBpZiAodGhpcy5zZWFyY2hEYXRhU291cmNlICYmICh0aGlzLmxhc3RJdGVtSW5kZXggPiB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoKSkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zZWFyY2hEYXRhU291cmNlKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5sYXN0SXRlbUluZGV4O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RJdGVtSW5kZXggPiB0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSB0aGlzLnRhYmxlU2VydmljZS5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMudGFibGVTZXJ2aWNlLmdldERhdGFTb3VyY2UoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdpbmF0aW9uLm5leHQoeyBmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4IH0pO1xuICB9XG5cbiAgcGFnaW5hdGlvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb247XG4gIH1cblxuICBjYWxjdWxhdGVIb3dNYW55UGFnZXNTaG91bGRCZSgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudGFibGVTZXJ2aWNlLmdldERhdGFTb3VyY2UoKS5sZW5ndGggLyB0aGlzLm1heFZpc2libGVJdGVtcyk7XG4gIH1cblxuICBwcmV2aW91c1BhZ2UoKSB7XG4gICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyLS07XG4gICAgdGhpcy5jYWxjdWxhdGVGaXJzdEl0ZW1JbmRleCgpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGFzdEl0ZW1JbmRleCgpO1xuICAgIHRoaXMucHJldmlvdXNQYWdlQ2xpY2suZW1pdCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIrKztcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZVNlcnZpY2UuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA+IHRoaXMuYWxsSXRlbXNMZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmFsbEl0ZW1zTGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMubmV4dFBhZ2VDbGljay5lbWl0KHsgZmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleCB9KTtcbiAgfVxuXG4gIG5leHRQYWdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9icyA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuZmlyc3RJdGVtSW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnM7XG4gIH1cblxuICBwcmV2aW91c1BhZ2VPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb2JzID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9icztcbiAgfVxuXG4gIGNoZWNrSWZOZXh0U2hvdWxkQmVEaXNhYmxlZCgpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hEYXRhU291cmNlICYmICh0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID09PSB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA+PSB0aGlzLmNhbGN1bGF0ZUhvd01hbnlQYWdlc1Nob3VsZEJlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5leHRTaG91bGRCZURpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICBjaGVja0lmUHJldmlvdXNTaG91bGRCZURpc2FibGVkKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=