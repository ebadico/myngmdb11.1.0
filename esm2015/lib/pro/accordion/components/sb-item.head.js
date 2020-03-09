import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, HostListener, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { SPACE } from '../../../free/utils/keyboard-navigation';
let SBItemHeadComponent = class SBItemHeadComponent {
    constructor(sbItem, _cdRef) {
        this.sbItem = sbItem;
        this._cdRef = _cdRef;
        this.isDisabled = false;
        this.indicator = true;
        this.id = `mdb-accordion-`;
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = `mdb-accordion-head-${this.sbItem.idModifier}`;
    }
    onKeyDown(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === SPACE) {
            this.toggleClick(event);
        }
    }
    toggleClick(event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
        this._cdRef.markForCheck();
    }
    ngOnInit() {
        this.ariaExpanded = this.sbItem.collapsed ? false : true;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.sbItem.body) {
                this.ariaControls = this.sbItem.body.id;
                this.sbItem.body.ariaLabelledBy = this.id;
            }
        }, 0);
    }
};
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent },
    { type: ChangeDetectorRef }
];
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
export { SBItemHeadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFRaEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFTOUIsWUFBb0IsTUFBdUIsRUFBVSxNQUF5QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUnJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRW9DLFNBQVMsQ0FBQyxLQUFvQjtRQUNqRSx3Q0FBd0M7UUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNGLENBQUE7O1lBakM2QixlQUFlO1lBQWtCLGlCQUFpQjs7QUFSckU7SUFBUixLQUFLLEVBQUU7O3VEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7d0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOztzREFBa0I7QUFVVztJQUFwQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7O3FDQUFrQixhQUFhOztvREFLbEU7QUFsQlUsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSx3Q0FBd0M7UUFDbEQseWhCQUFnQztRQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQVU0QixlQUFlLEVBQWtCLGlCQUFpQjtHQVRuRSxtQkFBbUIsQ0EwQy9CO1NBMUNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0JJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zYi1pdGVtJztcbmltcG9ydCB7IFNQQUNFIH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtSGVhZCcsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0taGVhZCwgbWRiLWFjY29yZGlvbi1pdGVtLWhlYWQnLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uaGVhZC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGljYXRvciA9IHRydWU7XG5cbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gIGFyaWFDb250cm9scyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2JJdGVtOiBTQkl0ZW1Db21wb25lbnQsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuaWQgPSBgbWRiLWFjY29yZGlvbi1oZWFkLSR7dGhpcy5zYkl0ZW0uaWRNb2RpZmllcn1gO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gU1BBQ0UpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnNiSXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5zYkl0ZW0uY29sbGFwc2VkO1xuICAgICAgdGhpcy5zYkl0ZW0udG9nZ2xlKHRoaXMuc2JJdGVtLmNvbGxhcHNlZCk7XG4gICAgICB0aGlzLmFyaWFFeHBhbmRlZCA9ICF0aGlzLmFyaWFFeHBhbmRlZDtcbiAgICB9XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IHRoaXMuc2JJdGVtLmNvbGxhcHNlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNiSXRlbS5ib2R5KSB7XG4gICAgICAgIHRoaXMuYXJpYUNvbnRyb2xzID0gdGhpcy5zYkl0ZW0uYm9keS5pZDtcbiAgICAgICAgdGhpcy5zYkl0ZW0uYm9keS5hcmlhTGFiZWxsZWRCeSA9IHRoaXMuaWQ7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==