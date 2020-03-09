import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, OnInit, } from '@angular/core';
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ascending";
    SortDirection["DESC"] = "descending";
    SortDirection["CONST"] = "constant";
})(SortDirection || (SortDirection = {}));
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    MdbTableSortDirective.prototype.onclick = function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    };
    MdbTableSortDirective.prototype.trimWhiteSigns = function (headElement) {
        return headElement.replace(/ /g, '');
    };
    MdbTableSortDirective.prototype.moveArrayItem = function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    MdbTableSortDirective.prototype.sortDataBy = function (key) {
        var _this = this;
        var ariaPass = true;
        var setAria = function (sort, id) {
            if (ariaPass) {
                var inverse = sort === 'ascending' ? 'descending' : 'ascending';
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', sort);
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', id + ": activate to sort column " + inverse);
                ariaPass = false;
            }
        };
        key = key.split('.');
        this.dataSource.sort(function (a, b) {
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                _this.order = SortDirection.CONST;
                return 1;
            }
            else {
                _this.order = SortDirection.CONST;
                return 0;
            }
        });
        this.sortedInto = !this.sortedInto;
    };
    MdbTableSortDirective.prototype.ngOnInit = function () {
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input('mdbTableSort'),
        __metadata("design:type", Array)
    ], MdbTableSortDirective.prototype, "dataSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbTableSortDirective.prototype, "sortBy", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MdbTableSortDirective.prototype, "sortEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MdbTableSortDirective.prototype, "sorted", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdbTableSortDirective.prototype, "onclick", null);
    MdbTableSortDirective = __decorate([
        Directive({
            selector: '[mdbTableSort]',
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbTableSortDirective);
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixJQUFLLGFBSUo7QUFKRCxXQUFLLGFBQWE7SUFDaEIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7SUFDbkIsbUNBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpJLGFBQWEsS0FBYixhQUFhLFFBSWpCO0FBV0Q7SUFVRSwrQkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVC9ELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHSyxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBR3pDLFlBQU8sR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUN6RCxXQUFNLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFFVixDQUFDO0lBRTVDLHVDQUFPLEdBQVA7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtB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LDRCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0FwR1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5lbnVtIFNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAnYXNjZW5kaW5nJyxcbiAgREVTQyA9ICdkZXNjZW5kaW5nJyxcbiAgQ09OU1QgPSAnY29uc3RhbnQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRlZERhdGEge1xuICBkYXRhOiBhbnlbXTtcbiAgc29ydE9yZGVyOiBzdHJpbmc7XG4gIHNvcnRCeTogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTb3J0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNvcnRlZEludG8gPSB0cnVlO1xuICBvcmRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbWRiVGFibGVTb3J0JykgZGF0YVNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBzb3J0Qnk6IHN0cmluZztcblxuICBAT3V0cHV0KCkgc29ydEVuZDogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBzb3J0ZWQ6IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydGVkRGF0YT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpKTtcbiAgICB0aGlzLnNvcnRFbmQuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xuICAgIHRoaXMuc29ydGVkLmVtaXQoe1xuICAgICAgZGF0YTogdGhpcy5kYXRhU291cmNlLFxuICAgICAgc29ydE9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICB9KTtcbiAgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQXJyYXlJdGVtKGFycjogYW55LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgd2hpbGUgKG9sZEluZGV4IDwgMCkge1xuICAgICAgb2xkSW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoO1xuICAgICAgd2hpbGUgKGstLSArIDEpIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5zcGxpY2UobmV3SW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSkge1xuICAgIGxldCBhcmlhUGFzcyA9IHRydWU7XG5cbiAgICBjb25zdCBzZXRBcmlhID0gKHNvcnQ6ICdhc2NlbmRpbmcnIHwgJ2Rlc2NlbmRpbmcnLCBpZDogYW55KSA9PiB7XG4gICAgICBpZiAoYXJpYVBhc3MpIHtcbiAgICAgICAgY29uc3QgaW52ZXJzZSA9IHNvcnQgPT09ICdhc2NlbmRpbmcnID8gJ2Rlc2NlbmRpbmcnIDogJ2FzY2VuZGluZyc7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1zb3J0Jywgc29ydCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICAgYCR7aWR9OiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiAke2ludmVyc2V9YFxuICAgICAgICApO1xuICAgICAgICBhcmlhUGFzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBrZXkgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBrZXkubGVuZ3RoKSB7XG4gICAgICAgIGEgPSBhW2tleVtpXV07XG4gICAgICAgIGIgPSBiW2tleVtpXV07XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHNldEFyaWEoJ2FzY2VuZGluZycsIGtleSk7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkFTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICBzZXRBcmlhKCdkZXNjZW5kaW5nJywga2V5KTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uREVTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkNPTlNUO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkNPTlNUO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc29ydGVkSW50byA9ICF0aGlzLnNvcnRlZEludG87XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICBgJHtrZXl9OiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiBkZXNjZW5kaW5nYFxuICAgICk7XG4gIH1cbn1cbiJdfQ==