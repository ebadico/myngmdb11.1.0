import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /** Wraps element by appropriate CSS classes */
        this.el = null;
        this.el = el;
    }
    SlideComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        HostBinding('class.active'),
        Input(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        HostBinding('class.animated'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "animated", void 0);
    __decorate([
        HostBinding('class.carousel-item-next'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionNext", void 0);
    __decorate([
        HostBinding('class.carousel-item-left'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionLeft", void 0);
    __decorate([
        HostBinding('class.carousel-item-prev'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionPrev", void 0);
    __decorate([
        HostBinding('class.carousel-item-right'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionRight", void 0);
    __decorate([
        HostBinding('class.carousel-item'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "el", void 0);
    SlideComponent = __decorate([
        Component({
            selector: 'mdb-slide, mdb-carousel-item',
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], SlideComponent);
    return SlideComponent;
}());
export { SlideComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFO0lBZ0JFLHdCQUFtQixFQUFjO1FBWEYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNQLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2pFLCtDQUErQztRQUl4QyxPQUFFLEdBQXFCLElBQUksQ0FBQztRQUdqQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7O2dCQUZzQixVQUFVOztJQVpqQztRQUZDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDM0IsS0FBSyxFQUFFOztrREFDZTtJQUNRO1FBQTlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7b0RBQWtCO0lBQ1A7UUFBeEMsV0FBVyxDQUFDLDBCQUEwQixDQUFDOzt5REFBdUI7SUFDdEI7UUFBeEMsV0FBVyxDQUFDLDBCQUEwQixDQUFDOzt5REFBdUI7SUFDdEI7UUFBeEMsV0FBVyxDQUFDLDBCQUEwQixDQUFDOzt5REFBdUI7SUFDckI7UUFBekMsV0FBVyxDQUFDLDJCQUEyQixDQUFDOzswREFBd0I7SUFLakU7UUFIQyxXQUFXLENBQUMscUJBQXFCLENBQUM7OzhDQUdBO0lBZHhCLGNBQWM7UUFOMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxRQUFRLEVBQUUscUNBRVQ7U0FDRixDQUFDO3lDQWlCdUIsVUFBVTtPQWhCdEIsY0FBYyxDQW1CMUI7SUFBRCxxQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2xpZGUsIG1kYi1jYXJvdXNlbC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IHtcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgQElucHV0KClcbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbmltYXRlZCcpIGFuaW1hdGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1uZXh0JykgZGlyZWN0aW9uTmV4dCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tbGVmdCcpIGRpcmVjdGlvbkxlZnQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLXByZXYnKSBkaXJlY3Rpb25QcmV2ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1yaWdodCcpIGRpcmVjdGlvblJpZ2h0ID0gZmFsc2U7XG4gIC8qKiBXcmFwcyBlbGVtZW50IGJ5IGFwcHJvcHJpYXRlIENTUyBjbGFzc2VzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXG5cbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cbiAgcHVibGljIGVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cbn1cbiJdfQ==