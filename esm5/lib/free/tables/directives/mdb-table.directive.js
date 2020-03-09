import { __decorate, __metadata, __values } from "tslib";
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    MdbTableDirective.prototype.addRow = function (newRow) {
        this.getDataSource().push(newRow);
    };
    MdbTableDirective.prototype.addRowAfter = function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    MdbTableDirective.prototype.removeRow = function (index) {
        this.getDataSource().splice(index, 1);
    };
    MdbTableDirective.prototype.rowRemoved = function () {
        var rowRemoved = new Observable(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    MdbTableDirective.prototype.removeLastRow = function () {
        this.getDataSource().pop();
    };
    MdbTableDirective.prototype.getDataSource = function () {
        return this._dataSource;
    };
    MdbTableDirective.prototype.setDataSource = function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    MdbTableDirective.prototype.dataSourceChange = function () {
        return this._dataSourceChanged;
    };
    MdbTableDirective.prototype.filterLocalDataBy = function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    };
    MdbTableDirective.prototype.filterLocalDataByFields = function (searchKey, keys) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            });
        });
    };
    MdbTableDirective.prototype.filterLocalDataByMultipleFields = function (searchKey, keys) {
        var items = searchKey.split(' ').map(function (x) { return x.toLowerCase(); });
        return this.getDataSource().filter(function (x) {
            var e_1, _a;
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    var flag = false;
                    if (keys !== undefined) {
                        for (var prop in x) {
                            if (x[prop]) {
                                if (keys.includes(prop)) {
                                    if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                        flag = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (keys === undefined) {
                        for (var prop in x) {
                            if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                flag = true;
                                break;
                            }
                        }
                    }
                    if (!flag) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        });
    };
    MdbTableDirective.prototype.searchLocalDataBy = function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchLocalDataByFields = function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchLocalDataByMultipleFields = function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    };
    MdbTableDirective.prototype.searchDataObservable = function (searchKey) {
        var _this = this;
        var observable = new Observable(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
    };
    MdbTableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            var tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach(function (child) {
                _this.renderer.addClass(child, 'sticky-top');
                if (_this.stickyHeaderBgColor) {
                    _this.renderer.setStyle(child, 'background-color', _this.stickyHeaderBgColor);
                }
                else {
                    _this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (_this.stickyHeaderTextColor) {
                    _this.renderer.setStyle(child, 'color', _this.stickyHeaderTextColor);
                }
                else {
                    _this.renderer.setStyle(child, 'color', '#000000');
                }
            });
        }
    };
    MdbTableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        HostBinding('class.table-striped'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "striped", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-bordered'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "bordered", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-borderless'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "borderless", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-hover'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "hover", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-sm'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "small", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-responsive'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "responsive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderBgColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderTextColor", void 0);
    MdbTableDirective = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbTable]',
            exportAs: 'mdbTable',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None,
            styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table.table thead th{border-top:none}table.table td,table.table th{padding-top:1.1rem;padding-bottom:1rem}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{-webkit-transition:.5s;transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbTableDirective);
    return MdbTableDirective;
}());
export { MdbTableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBVzNDO0lBNkJFLDJCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUk1QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUhJLENBQUM7SUFLbkUsa0NBQU0sR0FBTixVQUFPLE1BQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQWEsRUFBRSxHQUFRO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMs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UUFBUixLQUFLLEVBQUU7O2tFQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTs7b0VBQTRCO0lBM0J6QixpQkFBaUI7UUFUN0IsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7WUFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7UUFDRixrREFBa0Q7O3lDQThCeEIsVUFBVSxFQUFvQixTQUFTO09BN0JwRCxpQkFBaUIsQ0ErTDdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9MRCxJQStMQztTQS9MWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVdJyxcbiAgZXhwb3J0QXM6ICdtZGJUYWJsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuLy4uL3RhYmxlcy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTWRiVGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXN0cmlwZWQnKVxuICBzdHJpcGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVyZWQnKVxuICBib3JkZXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLWJvcmRlcmxlc3MnKVxuICBib3JkZXJsZXNzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtaG92ZXInKVxuICBob3ZlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXNtJylcbiAgc21hbGw6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1yZXNwb25zaXZlJylcbiAgcmVzcG9uc2l2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBzdGlja3lIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RpY2t5SGVhZGVyQmdDb2xvciA9ICcnO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJUZXh0Q29sb3IgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogYW55ID0gW107XG4gIHByaXZhdGUgX2RhdGFTb3VyY2VDaGFuZ2VkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgYWRkUm93KG5ld1JvdzogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucHVzaChuZXdSb3cpO1xuICB9XG5cbiAgYWRkUm93QWZ0ZXIoaW5kZXg6IG51bWJlciwgcm93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5zcGxpY2UoaW5kZXgsIDAsIHJvdyk7XG4gIH1cblxuICByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByb3dSZW1vdmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJvd1JlbW92ZWQgPSBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93UmVtb3ZlZDtcbiAgfVxuXG4gIHJlbW92ZUxhc3RSb3coKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucG9wKCk7XG4gIH1cblxuICBnZXREYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgc2V0RGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YTtcbiAgICB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZC5uZXh0KHRoaXMuZ2V0RGF0YVNvdXJjZSgpKTtcbiAgfVxuXG4gIGRhdGFTb3VyY2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUNoYW5nZWQ7XG4gIH1cblxuICBmaWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKG9iajogQXJyYXk8YW55PikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgLy8gRml4KHRhYmxlU2VhcmNoKTogdGFibGUgc2VhcmNoIHdpbGwgbm93IGFibGUgdG8gZmlsdGVyIHRocm91Z2ggbmVzdGVkIGRhdGFcblxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaEtleSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckxvY2FsRGF0YUJ5RmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKG9iajogQXJyYXk8YW55PikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgaWYgKG9ialtrZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmaWx0ZXJMb2NhbERhdGFCeU11bHRpcGxlRmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBpdGVtcyA9IHNlYXJjaEtleS5zcGxpdCgnICcpLm1hcCgoeDogeyB0b0xvd2VyQ2FzZTogKCkgPT4gdm9pZCB9KSA9PiB4LnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKHg6IEFycmF5PGFueT4pID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChrZXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4geCkge1xuICAgICAgICAgICAgaWYgKHhbcHJvcF0pIHtcbiAgICAgICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeFtwcm9wXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaXRlbSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHgpIHtcbiAgICAgICAgICAgIGlmICh4W3Byb3BdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHNlYXJjaExvY2FsRGF0YUJ5KHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgaWYgKCFzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCFzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoS2V5ICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCksIGtleXMpO1xuICAgIH1cbiAgICBpZiAoIWtleXMgfHwga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoTG9jYWxEYXRhQnlNdWx0aXBsZUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5cz86IHN0cmluZ1tdKSB7XG4gICAgaWYgKCFzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaEtleSAmJiBrZXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5TXVsdGlwbGVGaWVsZHMoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCksIGtleXMpO1xuICAgIH1cbiAgfVxuICBzZWFyY2hEYXRhT2JzZXJ2YWJsZShzZWFyY2hLZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMuc2VhcmNoTG9jYWxEYXRhQnkoc2VhcmNoS2V5KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RhYmxlJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gRml4KHN0aWNreUhlYWRlcik6IHJlc29sdmVkIHByb2JsZW0gd2l0aCBub3Qgd29ya2luZyBzdGlja3lIZWFkZXI9XCJ0cnVlXCIgb24gQ2hyb21lXG4gICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyKSB7XG4gICAgICBjb25zdCB0YWJsZUhlYWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGhlYWQnKTtcblxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUhlYWQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjaGlsZCwgJ3N0aWNreS10b3AnKTtcbiAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyQmdDb2xvcikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5zdGlja3lIZWFkZXJCZ0NvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnYmFja2dyb3VuZC1jb2xvcicsICcjZjJmMmYyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyVGV4dENvbG9yKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2NvbG9yJywgdGhpcy5zdGlja3lIZWFkZXJUZXh0Q29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdjb2xvcicsICcjMDAwMDAwJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19