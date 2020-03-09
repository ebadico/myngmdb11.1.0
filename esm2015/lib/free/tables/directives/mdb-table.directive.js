import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
let MdbTableDirective = 
// tslint:disable-next-line:component-class-suffix
class MdbTableDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    rowRemoved() {
        const rowRemoved = new Observable((observer) => {
            observer.next(true);
        });
        return rowRemoved;
    }
    removeLastRow() {
        this.getDataSource().pop();
    }
    getDataSource() {
        return this._dataSource;
    }
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    }
    filterLocalDataByFields(searchKey, keys) {
        return this.getDataSource().filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            });
        });
    }
    filterLocalDataByMultipleFields(searchKey, keys) {
        const items = searchKey.split(' ').map((x) => x.toLowerCase());
        return this.getDataSource().filter((x) => {
            for (const item of items) {
                let flag = false;
                if (keys !== undefined) {
                    for (const prop in x) {
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
                    for (const prop in x) {
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
            return true;
        });
    }
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    searchLocalDataByMultipleFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    }
    searchDataObservable(searchKey) {
        const observable = new Observable((observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        });
        return observable;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'table');
    }
    ngAfterViewInit() {
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            const tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach((child) => {
                this.renderer.addClass(child, 'sticky-top');
                if (this.stickyHeaderBgColor) {
                    this.renderer.setStyle(child, 'background-color', this.stickyHeaderBgColor);
                }
                else {
                    this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (this.stickyHeaderTextColor) {
                    this.renderer.setStyle(child, 'color', this.stickyHeaderTextColor);
                }
                else {
                    this.renderer.setStyle(child, 'color', '#000000');
                }
            });
        }
    }
};
MdbTableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { MdbTableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBVzNDLElBQWEsaUJBQWlCO0FBRDlCLGtEQUFrRDtBQUNsRCxNQUFhLGlCQUFpQjtJQTZCNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnRELGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFJNUIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFISSxDQUFDO0lBS25FLE1BQU0sQ0FBQyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBUTtRQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxF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M0J6QixpQkFBaUI7SUFUN0IsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7UUFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUFDRixrREFBa0Q7O3FDQThCeEIsVUFBVSxFQUFvQixTQUFTO0dBN0JwRCxpQkFBaUIsQ0ErTDdCO1NBL0xZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJUYWJsZV0nLFxuICBleHBvcnRBczogJ21kYlRhYmxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vLi4vdGFibGVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc3RyaXBlZCcpXG4gIHN0cmlwZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ib3JkZXJlZCcpXG4gIGJvcmRlcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVybGVzcycpXG4gIGJvcmRlcmxlc3M6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ob3ZlcicpXG4gIGhvdmVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc20nKVxuICBzbWFsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXJlc3BvbnNpdmUnKVxuICByZXNwb25zaXZlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlclRleHRDb2xvciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9kYXRhU291cmNlOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBhZGRSb3cobmV3Um93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wdXNoKG5ld1Jvdyk7XG4gIH1cblxuICBhZGRSb3dBZnRlcihpbmRleDogbnVtYmVyLCByb3c6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMCwgcm93KTtcbiAgfVxuXG4gIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJvd1JlbW92ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3Qgcm93UmVtb3ZlZCA9IG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByb3dSZW1vdmVkO1xuICB9XG5cbiAgcmVtb3ZlTGFzdFJvdygpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wb3AoKTtcbiAgfVxuXG4gIGdldERhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cblxuICBzZXREYXRhU291cmNlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhO1xuICAgIHRoaXMuX2RhdGFTb3VyY2VDaGFuZ2VkLm5leHQodGhpcy5nZXREYXRhU291cmNlKCkpO1xuICB9XG5cbiAgZGF0YVNvdXJjZUNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZDtcbiAgfVxuXG4gIGZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICAvLyBGaXgodGFibGVTZWFyY2gpOiB0YWJsZSBzZWFyY2ggd2lsbCBub3cgYWJsZSB0byBmaWx0ZXIgdGhyb3VnaCBuZXN0ZWQgZGF0YVxuXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoS2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZpbHRlckxvY2FsRGF0YUJ5TXVsdGlwbGVGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGl0ZW1zID0gc2VhcmNoS2V5LnNwbGl0KCcgJykubWFwKCh4OiB7IHRvTG93ZXJDYXNlOiAoKSA9PiB2b2lkIH0pID0+IHgudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigoeDogQXJyYXk8YW55PikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB4KSB7XG4gICAgICAgICAgICBpZiAoeFtwcm9wXSkge1xuICAgICAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmICh4W3Byb3BdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4geCkge1xuICAgICAgICAgICAgaWYgKHhbcHJvcF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGl0ZW0pICE9PSAtMSkge1xuICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc2VhcmNoTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5czogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuICBzZWFyY2hMb2NhbERhdGFCeU11bHRpcGxlRmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzPzogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoS2V5ICYmIGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnlNdWx0aXBsZUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICB9XG4gIHNlYXJjaERhdGFPYnNlcnZhYmxlKHNlYXJjaEtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGFibGUnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGaXgoc3RpY2t5SGVhZGVyKTogcmVzb2x2ZWQgcHJvYmxlbSB3aXRoIG5vdCB3b3JraW5nIHN0aWNreUhlYWRlcj1cInRydWVcIiBvbiBDaHJvbWVcbiAgICBpZiAodGhpcy5zdGlja3lIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHRhYmxlSGVhZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0aGVhZCcpO1xuXG4gICAgICBBcnJheS5mcm9tKHRhYmxlSGVhZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNoaWxkLCAnc3RpY2t5LXRvcCcpO1xuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJCZ0NvbG9yKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmMmYyZjInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJUZXh0Q29sb3IpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnY29sb3InLCB0aGlzLnN0aWNreUhlYWRlclRleHRDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2NvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=