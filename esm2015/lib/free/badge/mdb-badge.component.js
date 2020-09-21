import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
export class MDBBadgeComponent {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((el) => {
                this._renderer.addClass(this._el.nativeElement, `badge-${el}`);
            });
        }
    }
}
MDBBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-badge',
                template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".badge{border-radius:.125rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);color:#fff!important}.badge-pill{border-radius:10rem;padding-left:.6rem;padding-right:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
            },] }
];
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MDBBadgeComponent.propDecorators = {
    default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
    primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
    success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
    info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
    warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
    danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
    pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
    classInside: [{ type: Input }],
    color: [{ type: Input }],
    class: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpa2l0LXByby1zdGFuZGFyZC9zcmMvbGliL2ZyZWUvYmFkZ2UvbWRiLWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUVMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE1BQU0sT0FBTyxpQkFBaUI7SUFjNUIsWUFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztJQUVyRSxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDhGQUF5QztnQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O1lBZkMsVUFBVTtZQUlWLFNBQVM7OztzQkFhUixLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjtzQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7c0JBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO21CQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLGtCQUFrQjtzQkFDdkMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7cUJBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMsb0JBQW9CO21CQUN6QyxLQUFLLFlBQUksV0FBVyxTQUFDLGtCQUFrQjswQkFFdkMsS0FBSztvQkFFTCxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTURCQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRlZmF1bHQnKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXByaW1hcnknKSBwcmltYXJ5OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXN1Y2Nlc3MnKSBzdWNjZXNzOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWluZm8nKSBpbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXdhcm5pbmcnKSB3YXJuaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRhbmdlcicpIGRhbmdlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1waWxsJykgcGlsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjbGFzc0luc2lkZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2JhZGdlJyk7XG4gICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUNsYXNzQXJyID0gdGhpcy5jb2xvci5zcGxpdCgnICcpO1xuXG4gICAgICBjdXN0b21DbGFzc0Fyci5mb3JFYWNoKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGBiYWRnZS0ke2VsfWApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=