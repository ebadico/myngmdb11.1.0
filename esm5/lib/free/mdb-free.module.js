/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsFreeModule } from './cards/cards.module';
import { ButtonsModule } from './buttons/buttons.module';
import { NavbarModule } from './navbars/navbar.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
import { InputsModule } from './inputs/inputs.module';
import { WavesModule } from './waves/waves.module';
import { IconsModule } from './icons/icon.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TableModule } from './tables/tables.module';
import { BadgeModule } from './badge/badge.module';
import { BreadcrumbModule } from './breadcrumbs/breadcrumb.module';
import { InputUtilitiesModule } from './input-utilities/input-utilities.module';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective } from './buttons/index';
export { CardsFreeModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective } from './icons/index';
/** @type {?} */
var MODULES = [
    ButtonsModule,
    CardsFreeModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ButtonsModule,
                        WavesModule.forRoot(),
                        InputsModule.forRoot(),
                        NavbarModule,
                        DropdownModule.forRoot(),
                        CarouselModule.forRoot(),
                        ChartsModule,
                        CollapseModule.forRoot(),
                        ModalModule.forRoot(),
                        TooltipModule.forRoot(),
                        PopoverModule.forRoot(),
                        IconsModule,
                        CardsFreeModule.forRoot(),
                        CheckboxModule,
                        TableModule,
                        BadgeModule,
                        BreadcrumbModule,
                        InputUtilitiesModule
                    ],
                    exports: MODULES,
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return MDBRootModule;
}());
export { MDBRootModule };
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return MDBBootstrapModule;
}());
export { MDBBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbWRiLWZyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUF1QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25E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QUFPLEVBQUU7d0JBQ3JCLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLFlBQVk7d0JBQ1osY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsWUFBWTt3QkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixXQUFXLENBQUMsT0FBTyxFQUFFO3dCQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixXQUFXO3dCQUNYLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCOztJQUVELG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FEWSxhQUFhO0FBRzFCO0lBQUE7SUFLQSxDQUFDOzs7O0lBSGUsMEJBQU87OztJQUFyQjtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7SUFLOUIseUJBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gZnJlZVxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FyZHNGcmVlTW9kdWxlIH0gZnJvbSAnLi9jYXJkcy9jYXJkcy5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJy4vYnV0dG9ucy9idXR0b25zLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL25hdmJhcnMvbmF2YmFyLm1vZHVsZSc7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhcnRzTW9kdWxlIH0gZnJvbSAnLi9jaGFydHMvY2hhcnQubW9kdWxlJztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzZS9jb2xsYXBzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICcuL21vZGFscy9tb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBQb3BvdmVyTW9kdWxlIH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJy4vaW5wdXRzL2lucHV0cy5tb2R1bGUnO1xuaW1wb3J0IHsgV2F2ZXNNb2R1bGUgfSBmcm9tICcuL3dhdmVzL3dhdmVzLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uc01vZHVsZSB9IGZyb20gJy4vaWNvbnMvaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJy4vdGFibGVzL3RhYmxlcy5tb2R1bGUnO1xuaW1wb3J0IHsgQmFkZ2VNb2R1bGUgfSBmcm9tICcuL2JhZGdlL2JhZGdlLm1vZHVsZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTW9kdWxlIH0gZnJvbSAnLi9icmVhZGNydW1icy9icmVhZGNydW1iLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnB1dFV0aWxpdGllc01vZHVsZSB9IGZyb20gJy4vaW5wdXQtdXRpbGl0aWVzL2lucHV0LXV0aWxpdGllcy5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBNZGJFcnJvckRpcmVjdGl2ZSwgTWRiU3VjY2Vzc0RpcmVjdGl2ZSwgTWRiVmFsaWRhdGVEaXJlY3RpdmUsIElucHV0VXRpbGl0aWVzTW9kdWxlXG59IGZyb20gJy4vaW5wdXQtdXRpbGl0aWVzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiQnJlYWRjcnVtYkNvbXBvbmVudCwgTWRiQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsIEJyZWFkY3J1bWJNb2R1bGVcbn0gZnJvbSAnLi9icmVhZGNydW1icy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1EQkJhZGdlQ29tcG9uZW50LCBCYWRnZU1vZHVsZVxufSBmcm9tICcuL2JhZGdlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LCBNZGJUYWJsZVJvd0RpcmVjdGl2ZSwgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUsXG4gIE1kYlRhYmxlU29ydERpcmVjdGl2ZSwgTWRiVGFibGVEaXJlY3RpdmUsIE1kYlRhYmxlU2VydmljZSwgVGFibGVNb2R1bGVcbn0gZnJvbSAnLi90YWJsZXMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiwgQ2hlY2tib3hDb21wb25lbnQsIENoZWNrYm94TW9kdWxlXG59IGZyb20gJy4vY2hlY2tib3gvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCdXR0b25zTW9kdWxlLCBCdXR0b25SYWRpb0RpcmVjdGl2ZSwgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsIE1kYkJ0bkRpcmVjdGl2ZVxufSBmcm9tICcuL2J1dHRvbnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDYXJkc0ZyZWVNb2R1bGUsXG4gIE1kYkNhcmRDb21wb25lbnQsXG4gIE1kYkNhcmRCb2R5Q29tcG9uZW50LFxuICBNZGJDYXJkSW1hZ2VDb21wb25lbnQsXG4gIE1kYkNhcmRUZXh0Q29tcG9uZW50LFxuICBNZGJDYXJkVGl0bGVDb21wb25lbnQsXG4gIE1kYkNhcmRGb290ZXJDb21wb25lbnQsXG4gIE1kYkNhcmRIZWFkZXJDb21wb25lbnRcbn0gZnJvbSAnLi9jYXJkcy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFdhdmVzTW9kdWxlLCBXYXZlc0RpcmVjdGl2ZVxufSBmcm9tICcuL3dhdmVzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgSW5wdXRzTW9kdWxlLCBNZGJJbnB1dERpcmVjdGl2ZSwgTWRiSW5wdXRcbn0gZnJvbSAnLi9pbnB1dHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBOYXZiYXJNb2R1bGVcbn0gZnJvbSAnLi9uYXZiYXJzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQnNEcm9wZG93bkNvbmZpZywgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCwgQnNEcm9wZG93bkRpcmVjdGl2ZSwgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gIERyb3Bkb3duTW9kdWxlLCBCc0Ryb3Bkb3duU3RhdGUsIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9kcm9wZG93bi9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENhcm91c2VsQ29tcG9uZW50LCBDYXJvdXNlbENvbmZpZywgQ2Fyb3VzZWxNb2R1bGVcbn0gZnJvbSAnLi9jYXJvdXNlbC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENoYXJ0c01vZHVsZSwgQmFzZUNoYXJ0RGlyZWN0aXZlXG59IGZyb20gJy4vY2hhcnRzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQ29sbGFwc2VDb21wb25lbnQsIENvbGxhcHNlTW9kdWxlXG59IGZyb20gJy4vY29sbGFwc2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbEJhY2tkcm9wT3B0aW9ucywgTW9kYWxEaXJlY3RpdmUsIE1vZGFsTW9kdWxlLCBNb2RhbE9wdGlvbnMsIE1EQk1vZGFsU2VydmljZSxcbiAgTW9kYWxDb250YWluZXJDb21wb25lbnQsIE1EQk1vZGFsUmVmXG59IGZyb20gJy4vbW9kYWxzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgVG9vbHRpcENvbmZpZywgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCwgVG9vbHRpcERpcmVjdGl2ZSwgVG9vbHRpcE1vZHVsZVxufSBmcm9tICcuL3Rvb2x0aXAvaW5kZXgnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLCBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LCBQb3BvdmVyTW9kdWxlLCBQb3BvdmVyRGlyZWN0aXZlXG59IGZyb20gJy4vcG9wb3Zlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEljb25zTW9kdWxlLCBNZGJJY29uQ29tcG9uZW50LCBGYWxEaXJlY3RpdmUsIEZhckRpcmVjdGl2ZSwgRmFzRGlyZWN0aXZlLCBGYWJEaXJlY3RpdmVcbn0gZnJvbSAnLi9pY29ucy9pbmRleCc7XG5cblxuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCdXR0b25zTW9kdWxlLFxuICBDYXJkc0ZyZWVNb2R1bGUsXG4gIFdhdmVzTW9kdWxlLFxuICBJbnB1dHNNb2R1bGUsXG4gIE5hdmJhck1vZHVsZSxcbiAgRHJvcGRvd25Nb2R1bGUsXG4gIENhcm91c2VsTW9kdWxlLFxuICBDaGFydHNNb2R1bGUsXG4gIENvbGxhcHNlTW9kdWxlLFxuICBNb2RhbE1vZHVsZSxcbiAgVG9vbHRpcE1vZHVsZSxcbiAgUG9wb3Zlck1vZHVsZSxcbiAgSWNvbnNNb2R1bGUsXG4gIENoZWNrYm94TW9kdWxlLFxuICBUYWJsZU1vZHVsZSxcbiAgQmFkZ2VNb2R1bGUsXG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIElucHV0VXRpbGl0aWVzTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnV0dG9uc01vZHVsZSxcbiAgICBXYXZlc01vZHVsZS5mb3JSb290KCksXG4gICAgSW5wdXRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYXZiYXJNb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGFydHNNb2R1bGUsXG4gICAgQ29sbGFwc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQb3BvdmVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJY29uc01vZHVsZSxcbiAgICBDYXJkc0ZyZWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIEJhZGdlTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgSW5wdXRVdGlsaXRpZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIE1EQlJvb3RNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgTURCQm9vdHN0cmFwTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBNREJSb290TW9kdWxlIH07XG4gIH1cbn1cbiJdfQ==