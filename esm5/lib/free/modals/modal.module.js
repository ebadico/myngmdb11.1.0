import { __decorate } from "tslib";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from '../utils/positioning/positioning.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalService } from './modal.service';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule_1 = ModalModule;
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule_1,
            providers: [MDBModalService, ComponentLoaderFactory, PositioningService],
        };
    };
    var ModalModule_1;
    ModalModule = ModalModule_1 = __decorate([
        NgModule({
            declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
            exports: [ModalBackdropComponent, ModalDirective],
            entryComponents: [ModalBackdropComponent, ModalContainerComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
    ], ModalModule);
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVFsRDtJQUFBO0lBT0EsQ0FBQztvQkFQWSxXQUFXO0lBQ1IsbUJBQU8sR0FBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDO1NBQ3pFLENBQUM7SUFDSixDQUFDOztJQU5VLFdBQVc7UUFOdkIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixDQUFDO1lBQy9FLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQztZQUNqRCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx1QkFBdUIsQ0FBQztZQUNsRSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csV0FBVyxDQU92QjtJQUFELGtCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsQmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsQ29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNREJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZSwgTW9kYWxDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbENvbnRhaW5lckNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNb2RhbE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtNREJNb2RhbFNlcnZpY2UsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl19