import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, HostListener, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { SPACE } from '../../../free/utils/keyboard-navigation';
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem, _cdRef) {
        this.sbItem = sbItem;
        this._cdRef = _cdRef;
        this.isDisabled = false;
        this.indicator = true;
        this.id = "mdb-accordion-";
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = "mdb-accordion-head-" + this.sbItem.idModifier;
    }
    SBItemHeadComponent.prototype.onKeyDown = function (event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === SPACE) {
            this.toggleClick(event);
        }
    };
    SBItemHeadComponent.prototype.toggleClick = function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
        this._cdRef.markForCheck();
    };
    SBItemHeadComponent.prototype.ngOnInit = function () {
        this.ariaExpanded = this.sbItem.collapsed ? false : true;
    };
    SBItemHeadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.sbItem.body) {
                _this.ariaControls = _this.sbItem.body.id;
                _this.sbItem.body.ariaLabelledBy = _this.id;
            }
        }, 0);
    };
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SBItemHeadComponent.prototype, "isDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SBItemHeadComponent.prototype, "customClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SBItemHeadComponent.prototype, "indicator", void 0);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SBItemHeadComponent.prototype, "onKeyDown", null);
    SBItemHeadComponent = __decorate([
        Component({
            exportAs: 'sbItemHead',
            selector: 'mdb-item-head, mdb-accordion-item-head',
            template: "<div\n  class=\"card-header {{ customClass }}\"\n  [ngClass]=\"{ 'item-disabled': isDisabled }\"\n  (click)=\"toggleClick($event)\"\n  [id]=\"id\"\n>\n  <a\n    role=\"button\"\n    href=\"javascript:;\"\n    [attr.aria-expanded]=\"ariaExpanded\"\n    [attr.aria-controls]=\"ariaControls\"\n  >\n    <h5 class=\"mb-0\">\n      <span class=\"\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [SBItemComponent, ChangeDetectorRef])
    ], SBItemHeadComponent);
    return SBItemHeadComponent;
}());
export { SBItemHeadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFRaEU7SUFTRSw2QkFBb0IsTUFBdUIsRUFBVSxNQUF5QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUnJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFZLENBQUM7SUFDM0QsQ0FBQztJQUVvQyx1Q0FBUyxHQUFULFVBQVUsS0FBb0I7UUFDakUsd0NBQXdDO1FBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOQyxVQUFVLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkFoQzJCLGVBQWU7Z0JBQWtCLGlCQUFpQjs7SUFSckU7UUFBUixLQUFLLEVBQUU7OzJEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7NERBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzswREFBa0I7SUFVVztRQUFwQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7O3lDQUFrQixhQUFhOzt3REFLbEU7SUFsQlUsbUJBQW1CO1FBTi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSx3Q0FBd0M7WUFDbEQseWhCQUFnQztZQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO3lDQVU0QixlQUFlLEVBQWtCLGlCQUFpQjtPQVRuRSxtQkFBbUIsQ0EwQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2ItaXRlbSc7XG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUhlYWQnLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWhlYWQsIG1kYi1hY2NvcmRpb24taXRlbS1oZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmhlYWQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1IZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRpY2F0b3IgPSB0cnVlO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICBhcmlhQ29udHJvbHMgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNiSXRlbTogU0JJdGVtQ29tcG9uZW50LCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmlkID0gYG1kYi1hY2NvcmRpb24taGVhZC0ke3RoaXMuc2JJdGVtLmlkTW9kaWZpZXJ9YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFNQQUNFKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYkl0ZW0uY29sbGFwc2VkID0gIXRoaXMuc2JJdGVtLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuc2JJdGVtLnRvZ2dsZSh0aGlzLnNiSXRlbS5jb2xsYXBzZWQpO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSAhdGhpcy5hcmlhRXhwYW5kZWQ7XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSB0aGlzLnNiSXRlbS5jb2xsYXBzZWQgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zYkl0ZW0uYm9keSkge1xuICAgICAgICB0aGlzLmFyaWFDb250cm9scyA9IHRoaXMuc2JJdGVtLmJvZHkuaWQ7XG4gICAgICAgIHRoaXMuc2JJdGVtLmJvZHkuYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=