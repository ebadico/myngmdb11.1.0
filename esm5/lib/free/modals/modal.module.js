import { __decorate } from "tslib";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from '../utils/positioning/positioning.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalService } from './modal.service';
import { A11yModule } from '@angular/cdk/a11y';
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
            imports: [A11yModule],
            exports: [ModalBackdropComponent, ModalDirective],
            entryComponents: [ModalBackdropComponent, ModalContainerComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
    ], ModalModule);
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFTL0M7SUFBQTtJQU9BLENBQUM7b0JBUFksV0FBVztJQUNSLG1CQUFPLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQztTQUN6RSxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxXQUFXO1FBUHZCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztZQUMvRSxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDckIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDO1lBQ2pELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLHVCQUF1QixDQUFDO1lBQ2xFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxXQUFXLENBT3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxCYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxDb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1EQk1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZSwgTW9kYWxDb250YWluZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQTExeU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1vZGFsTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNb2RhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW01EQk1vZGFsU2VydmljZSwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXSxcbiAgICB9O1xuICB9XG59XG4iXX0=