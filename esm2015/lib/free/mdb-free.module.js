/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const MODULES = [
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
export class MDBRootModule {
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
export class MDBBootstrapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: MDBRootModule };
    }
}
MDBBootstrapModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbWRiLWZyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUF1QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25E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T0FBTyxFQUFFO29CQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixZQUFZO29CQUNaLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFlBQVk7b0JBQ1osY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsV0FBVztvQkFDWCxlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCOztBQUtELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDdEIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUFKRixRQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGZyZWVcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhcmRzRnJlZU1vZHVsZSB9IGZyb20gJy4vY2FyZHMvY2FyZHMubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbnNNb2R1bGUgfSBmcm9tICcuL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXJzL25hdmJhci5tb2R1bGUnO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2UvY29sbGFwc2UubW9kdWxlJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi9tb2RhbHMvbW9kYWwubW9kdWxlJztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICcuL2lucHV0cy9pbnB1dHMubW9kdWxlJztcbmltcG9ydCB7IFdhdmVzTW9kdWxlIH0gZnJvbSAnLi93YXZlcy93YXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2ljb25zL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlcy90YWJsZXMubW9kdWxlJztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAnLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRVdGlsaXRpZXNNb2R1bGUgfSBmcm9tICcuL2lucHV0LXV0aWxpdGllcy9pbnB1dC11dGlsaXRpZXMubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgTWRiRXJyb3JEaXJlY3RpdmUsIE1kYlN1Y2Nlc3NEaXJlY3RpdmUsIE1kYlZhbGlkYXRlRGlyZWN0aXZlLCBJbnB1dFV0aWxpdGllc01vZHVsZVxufSBmcm9tICcuL2lucHV0LXV0aWxpdGllcy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1kYkJyZWFkY3J1bWJDb21wb25lbnQsIE1kYkJyZWFkY3J1bWJJdGVtQ29tcG9uZW50LCBCcmVhZGNydW1iTW9kdWxlXG59IGZyb20gJy4vYnJlYWRjcnVtYnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNREJCYWRnZUNvbXBvbmVudCwgQmFkZ2VNb2R1bGVcbn0gZnJvbSAnLi9iYWRnZS9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCwgTWRiVGFibGVSb3dEaXJlY3RpdmUsIE1kYlRhYmxlU2Nyb2xsRGlyZWN0aXZlLFxuICBNZGJUYWJsZVNvcnREaXJlY3RpdmUsIE1kYlRhYmxlRGlyZWN0aXZlLCBNZGJUYWJsZVNlcnZpY2UsIFRhYmxlTW9kdWxlXG59IGZyb20gJy4vdGFibGVzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IsIENoZWNrYm94Q29tcG9uZW50LCBDaGVja2JveE1vZHVsZVxufSBmcm9tICcuL2NoZWNrYm94L2luZGV4JztcblxuZXhwb3J0IHtcbiAgQnV0dG9uc01vZHVsZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLCBNZGJCdG5EaXJlY3RpdmVcbn0gZnJvbSAnLi9idXR0b25zL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQ2FyZHNGcmVlTW9kdWxlLFxuICBNZGJDYXJkQ29tcG9uZW50LFxuICBNZGJDYXJkQm9keUNvbXBvbmVudCxcbiAgTWRiQ2FyZEltYWdlQ29tcG9uZW50LFxuICBNZGJDYXJkVGV4dENvbXBvbmVudCxcbiAgTWRiQ2FyZFRpdGxlQ29tcG9uZW50LFxuICBNZGJDYXJkRm9vdGVyQ29tcG9uZW50LFxuICBNZGJDYXJkSGVhZGVyQ29tcG9uZW50XG59IGZyb20gJy4vY2FyZHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBXYXZlc01vZHVsZSwgV2F2ZXNEaXJlY3RpdmVcbn0gZnJvbSAnLi93YXZlcy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIElucHV0c01vZHVsZSwgTWRiSW5wdXREaXJlY3RpdmUsIE1kYklucHV0XG59IGZyb20gJy4vaW5wdXRzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTmF2YmFyTW9kdWxlXG59IGZyb20gJy4vbmF2YmFycy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEJzRHJvcGRvd25Db25maWcsIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsIEJzRHJvcGRvd25EaXJlY3RpdmUsIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBEcm9wZG93bk1vZHVsZSwgQnNEcm9wZG93blN0YXRlLCBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJy4vZHJvcGRvd24vaW5kZXgnO1xuXG5leHBvcnQge1xuICBDYXJvdXNlbENvbXBvbmVudCwgQ2Fyb3VzZWxDb25maWcsIENhcm91c2VsTW9kdWxlXG59IGZyb20gJy4vY2Fyb3VzZWwvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDaGFydHNNb2R1bGUsIEJhc2VDaGFydERpcmVjdGl2ZVxufSBmcm9tICcuL2NoYXJ0cy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENvbGxhcHNlQ29tcG9uZW50LCBDb2xsYXBzZU1vZHVsZVxufSBmcm9tICcuL2NvbGxhcHNlL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxCYWNrZHJvcE9wdGlvbnMsIE1vZGFsRGlyZWN0aXZlLCBNb2RhbE1vZHVsZSwgTW9kYWxPcHRpb25zLCBNREJNb2RhbFNlcnZpY2UsXG4gIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LCBNREJNb2RhbFJlZlxufSBmcm9tICcuL21vZGFscy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsIFRvb2x0aXBEaXJlY3RpdmUsIFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnLi90b29sdGlwL2luZGV4JztcblxuZXhwb3J0IHtcbiAgUG9wb3ZlckNvbmZpZywgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCwgUG9wb3Zlck1vZHVsZSwgUG9wb3ZlckRpcmVjdGl2ZVxufSBmcm9tICcuL3BvcG92ZXIvaW5kZXgnO1xuXG5leHBvcnQge1xuICBJY29uc01vZHVsZSwgTWRiSWNvbkNvbXBvbmVudCwgRmFsRGlyZWN0aXZlLCBGYXJEaXJlY3RpdmUsIEZhc0RpcmVjdGl2ZSwgRmFiRGlyZWN0aXZlXG59IGZyb20gJy4vaWNvbnMvaW5kZXgnO1xuXG5cblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgQnV0dG9uc01vZHVsZSxcbiAgQ2FyZHNGcmVlTW9kdWxlLFxuICBXYXZlc01vZHVsZSxcbiAgSW5wdXRzTW9kdWxlLFxuICBOYXZiYXJNb2R1bGUsXG4gIERyb3Bkb3duTW9kdWxlLFxuICBDYXJvdXNlbE1vZHVsZSxcbiAgQ2hhcnRzTW9kdWxlLFxuICBDb2xsYXBzZU1vZHVsZSxcbiAgTW9kYWxNb2R1bGUsXG4gIFRvb2x0aXBNb2R1bGUsXG4gIFBvcG92ZXJNb2R1bGUsXG4gIEljb25zTW9kdWxlLFxuICBDaGVja2JveE1vZHVsZSxcbiAgVGFibGVNb2R1bGUsXG4gIEJhZGdlTW9kdWxlLFxuICBCcmVhZGNydW1iTW9kdWxlLFxuICBJbnB1dFV0aWxpdGllc01vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbnNNb2R1bGUsXG4gICAgV2F2ZXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIElucHV0c01vZHVsZS5mb3JSb290KCksXG4gICAgTmF2YmFyTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hhcnRzTW9kdWxlLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgSWNvbnNNb2R1bGUsXG4gICAgQ2FyZHNGcmVlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBCYWRnZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIElucHV0VXRpbGl0aWVzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBNREJSb290TW9kdWxlIHtcbn1cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIE1EQkJvb3RzdHJhcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogTURCUm9vdE1vZHVsZSB9O1xuICB9XG59XG4iXX0=