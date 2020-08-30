import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostBinding, HostListener, OnDestroy, Renderer2, ChangeDetectorRef, } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
let BsDropdownToggleDirective = class BsDropdownToggleDirective {
    constructor(_state, _element, _renderer, _cdRef) {
        this._state = _state;
        this._element = _element;
        this._renderer = _renderer;
        this._cdRef = _cdRef;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        this.isDisabled = null;
        // sync is open value with state
        this._state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (event) => {
                    if (this._state.autoClose &&
                        event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target)) {
                        this._state.toggleClick.emit(false);
                        this._cdRef.detectChanges();
                    }
                });
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._cdRef.detectChanges();
                    }
                });
            }
            else {
                this._documentClickListener();
                this._escKeyUpListener();
            }
        });
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((value) => (this.isDisabled = value || null)));
    }
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    }
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
};
BsDropdownToggleDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    HostBinding('attr.aria-haspopup'),
    __metadata("design:type", Object)
], BsDropdownToggleDirective.prototype, "ariaHaspopup", void 0);
__decorate([
    HostBinding('attr.disabled'),
    __metadata("design:type", Object)
], BsDropdownToggleDirective.prototype, "isDisabled", void 0);
__decorate([
    HostBinding('attr.aria-expanded'),
    __metadata("design:type", Boolean)
], BsDropdownToggleDirective.prototype, "isOpen", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BsDropdownToggleDirective.prototype, "onClick", null);
BsDropdownToggleDirective = __decorate([
    Directive({
        selector: '[mdbDropdownToggle],[dropdownToggle]',
        exportAs: 'bs-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [BsDropdownState,
        ElementRef,
        Renderer2,
        ChangeDetectorRef])
], BsDropdownToggleDirective);
export { BsDropdownToggleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBaUJwQyxZQUNVLE1BQXVCLEVBQ3ZCLFFBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQXlCO1FBSHpCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQXBCM0IsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBSVQsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFpQjdELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVwQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUN0RixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzt3QkFDckIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO3dCQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ25EO3dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDN0I7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFDM0IsV0FBVyxFQUNYLEdBQUcsRUFBRTtvQkFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO3dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQzdCO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUNwQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQzVELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFsREQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBK0NELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQXpEbUIsZUFBZTtZQUNiLFVBQVU7WUFDVCxTQUFTO1lBQ1osaUJBQWlCOztBQWhCQTtJQUFsQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7OytEQUFxQjtBQUN6QjtJQUE3QixXQUFXLENBQUMsZUFBZSxDQUFDOzs2REFBa0M7QUFDNUI7SUFBbEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzt5REFBaUI7QUFHbkQ7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7O3dEQU1yQjtBQWZVLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0NBQXNDO1FBQ2hELFFBQVEsRUFBRSxvQkFBb0I7S0FDL0IsQ0FBQztxQ0FtQmtCLGVBQWU7UUFDYixVQUFVO1FBQ1QsU0FBUztRQUNaLGlCQUFpQjtHQXJCeEIseUJBQXlCLENBMkVyQztTQTNFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2RvY3VtZW50Q2xpY2tMaXN0ZW5lcjogRnVuY3Rpb247XG4gIHByaXZhdGUgX2VzY0tleVVwTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhhc3BvcHVwJykgYXJpYUhhc3BvcHVwID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJykgaXNEaXNhYmxlZDogYm9vbGVhbiB8IGFueSA9IG51bGw7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICAvLyBzeW5jIGlzIG9wZW4gdmFsdWUgd2l0aCBzdGF0ZVxuICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlICYmXG4gICAgICAgICAgICBldmVudC5idXR0b24gIT09IDIgJiZcbiAgICAgICAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9lc2NLZXlVcExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAna2V5dXAuZXNjJyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICB0aGlzLl9jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuX2VzY0tleVVwTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBwb3B1bGF0ZSBkaXNhYmxlZCBzdGF0ZVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWU6IGJvb2xlYW4gfCBhbnkpID0+ICh0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZSB8fCBudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9kb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXNjS2V5VXBMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fZXNjS2V5VXBMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19