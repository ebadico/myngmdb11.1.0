import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
let MDBBadgeComponent = class MDBBadgeComponent {
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
};
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(), HostBinding('class.badge-default'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "default", void 0);
__decorate([
    Input(), HostBinding('class.badge-primary'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "primary", void 0);
__decorate([
    Input(), HostBinding('class.badge-success'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "success", void 0);
__decorate([
    Input(), HostBinding('class.badge-info'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "info", void 0);
__decorate([
    Input(), HostBinding('class.badge-warning'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "warning", void 0);
__decorate([
    Input(), HostBinding('class.badge-danger'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "danger", void 0);
__decorate([
    Input(), HostBinding('class.badge-pill'),
    __metadata("design:type", Boolean)
], MDBBadgeComponent.prototype, "pill", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MDBBadgeComponent.prototype, "classInside", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MDBBadgeComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MDBBadgeComponent.prototype, "class", void 0);
MDBBadgeComponent = __decorate([
    Component({
        selector: 'mdb-badge',
        template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".badge{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;color:#fff!important}.badge-pill{border-radius:10rem;padding-right:.6rem;padding-left:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], MDBBadgeComponent);
export { MDBBadgeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBYzVCLFlBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFFckUsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFaMEIsVUFBVTtZQUFxQixTQUFTOztBQWJwQjtJQUE1QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMscUJBQXFCLENBQUM7O2tEQUFrQjtBQUNqQjtJQUE1QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMscUJBQXFCLENBQUM7O2tEQUFrQjtBQUNqQjtJQUE1QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMscUJBQXFCLENBQUM7O2tEQUFrQjtBQUNwQjtJQUF6QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsa0JBQWtCLENBQUM7OytDQUFlO0FBQ1g7SUFBNUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztrREFBa0I7QUFDbEI7SUFBM0MsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDOztpREFBaUI7QUFDbEI7SUFBekMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGtCQUFrQixDQUFDOzsrQ0FBZTtBQUUvQztJQUFSLEtBQUssRUFBRTs7c0RBQXFCO0FBRXBCO0lBQVIsS0FBSyxFQUFFOztnREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOztnREFBZTtBQVpaLGlCQUFpQjtJQVA3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQiw4RkFBeUM7UUFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7cUNBZXlCLFVBQVUsRUFBcUIsU0FBUztHQWR0RCxpQkFBaUIsQ0EwQjdCO1NBMUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNREJCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtZGVmYXVsdCcpIGRlZmF1bHQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcHJpbWFyeScpIHByaW1hcnk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2Utc3VjY2VzcycpIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtaW5mbycpIGluZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2Utd2FybmluZycpIHdhcm5pbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtZGFuZ2VyJykgZGFuZ2VyOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXBpbGwnKSBwaWxsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNsYXNzSW5zaWRlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnYmFkZ2UnKTtcbiAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY3VzdG9tQ2xhc3NBcnIgPSB0aGlzLmNvbG9yLnNwbGl0KCcgJyk7XG5cbiAgICAgIGN1c3RvbUNsYXNzQXJyLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYGJhZGdlLSR7ZWx9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==