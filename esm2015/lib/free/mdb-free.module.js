// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsModule } from './cards/cards.module';
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
import { StickyHeaderModule } from './sticky-header/sticky-header.module';
export { StickyHeaderDirective, StickyHeaderModule } from './sticky-header/index';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule, } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule, } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective, FixedButtonCaptionDirective, } from './buttons/index';
export { CardsModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, FadDirective, } from './icons/index';
const MODULES = [
    ButtonsModule,
    CardsModule,
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
    InputUtilitiesModule,
    StickyHeaderModule,
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
                    CardsModule.forRoot(),
                    CheckboxModule,
                    TableModule,
                    BadgeModule,
                    BreadcrumbModule,
                    InputUtilitiesModule,
                    StickyHeaderModule,
                ],
                exports: MODULES,
                schemas: [NO_ERRORS_SCHEMA],
            },] }
];
export class MDBBootstrapModule {
    static forRoot() {
        return { ngModule: MDBRootModule };
    }
}
MDBBootstrapModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdWlraXQtcHJvLXN0YW5kYXJkL3NyYy9saWIvZnJlZS9tZGItZnJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUNQLE9BQU8sRUFBdUIsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFX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O0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNuQixDQUFDO0FBMkJGLE1BQU0sT0FBTyxhQUFhOzs7WUF6QnpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixZQUFZO29CQUNaLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFlBQVk7b0JBQ1osY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsV0FBVztvQkFDWCxXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUI7O0FBSUQsTUFBTSxPQUFPLGtCQUFrQjtJQUN0QixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcmVlXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJkc01vZHVsZSB9IGZyb20gJy4vY2FyZHMvY2FyZHMubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbnNNb2R1bGUgfSBmcm9tICcuL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXJzL25hdmJhci5tb2R1bGUnO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2UvY29sbGFwc2UubW9kdWxlJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi9tb2RhbHMvbW9kYWwubW9kdWxlJztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICcuL2lucHV0cy9pbnB1dHMubW9kdWxlJztcbmltcG9ydCB7IFdhdmVzTW9kdWxlIH0gZnJvbSAnLi93YXZlcy93YXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2ljb25zL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlcy90YWJsZXMubW9kdWxlJztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAnLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRVdGlsaXRpZXNNb2R1bGUgfSBmcm9tICcuL2lucHV0LXV0aWxpdGllcy9pbnB1dC11dGlsaXRpZXMubW9kdWxlJztcbmltcG9ydCB7IFN0aWNreUhlYWRlck1vZHVsZSB9IGZyb20gJy4vc3RpY2t5LWhlYWRlci9zdGlja3ktaGVhZGVyLm1vZHVsZSc7XG5cbmV4cG9ydCB7IFN0aWNreUhlYWRlckRpcmVjdGl2ZSwgU3RpY2t5SGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9zdGlja3ktaGVhZGVyL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiRXJyb3JEaXJlY3RpdmUsXG4gIE1kYlN1Y2Nlc3NEaXJlY3RpdmUsXG4gIE1kYlZhbGlkYXRlRGlyZWN0aXZlLFxuICBJbnB1dFV0aWxpdGllc01vZHVsZSxcbn0gZnJvbSAnLi9pbnB1dC11dGlsaXRpZXMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJCcmVhZGNydW1iQ29tcG9uZW50LFxuICBNZGJCcmVhZGNydW1iSXRlbUNvbXBvbmVudCxcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbn0gZnJvbSAnLi9icmVhZGNydW1icy9pbmRleCc7XG5cbmV4cG9ydCB7IE1EQkJhZGdlQ29tcG9uZW50LCBCYWRnZU1vZHVsZSB9IGZyb20gJy4vYmFkZ2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICBNZGJUYWJsZURpcmVjdGl2ZSxcbiAgTWRiVGFibGVTZXJ2aWNlLFxuICBUYWJsZU1vZHVsZSxcbn0gZnJvbSAnLi90YWJsZXMvaW5kZXgnO1xuXG5leHBvcnQgeyBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiwgQ2hlY2tib3hDb21wb25lbnQsIENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbnNNb2R1bGUsXG4gIEJ1dHRvblJhZGlvRGlyZWN0aXZlLFxuICBCdXR0b25DaGVja2JveERpcmVjdGl2ZSxcbiAgTWRiQnRuRGlyZWN0aXZlLFxuICBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUsXG59IGZyb20gJy4vYnV0dG9ucy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENhcmRzTW9kdWxlLFxuICBNZGJDYXJkQ29tcG9uZW50LFxuICBNZGJDYXJkQm9keUNvbXBvbmVudCxcbiAgTWRiQ2FyZEltYWdlQ29tcG9uZW50LFxuICBNZGJDYXJkVGV4dENvbXBvbmVudCxcbiAgTWRiQ2FyZFRpdGxlQ29tcG9uZW50LFxuICBNZGJDYXJkRm9vdGVyQ29tcG9uZW50LFxuICBNZGJDYXJkSGVhZGVyQ29tcG9uZW50LFxufSBmcm9tICcuL2NhcmRzL2luZGV4JztcblxuZXhwb3J0IHsgV2F2ZXNNb2R1bGUsIFdhdmVzRGlyZWN0aXZlIH0gZnJvbSAnLi93YXZlcy9pbmRleCc7XG5cbmV4cG9ydCB7IElucHV0c01vZHVsZSwgTWRiSW5wdXREaXJlY3RpdmUsIE1kYklucHV0IH0gZnJvbSAnLi9pbnB1dHMvaW5kZXgnO1xuXG5leHBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL25hdmJhcnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duQ29uZmlnLFxuICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0Ryb3Bkb3duRGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgRHJvcGRvd25Nb2R1bGUsXG4gIEJzRHJvcGRvd25TdGF0ZSxcbiAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbn0gZnJvbSAnLi9kcm9wZG93bi9pbmRleCc7XG5cbmV4cG9ydCB7IENhcm91c2VsQ29tcG9uZW50LCBDYXJvdXNlbENvbmZpZywgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2Nhcm91c2VsL2luZGV4JztcblxuZXhwb3J0IHsgQ2hhcnRzTW9kdWxlLCBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICcuL2NoYXJ0cy9pbmRleCc7XG5cbmV4cG9ydCB7IENvbGxhcHNlQ29tcG9uZW50LCBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNb2RhbEJhY2tkcm9wQ29tcG9uZW50LFxuICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcbiAgTW9kYWxEaXJlY3RpdmUsXG4gIE1vZGFsTW9kdWxlLFxuICBNb2RhbE9wdGlvbnMsXG4gIE1EQk1vZGFsU2VydmljZSxcbiAgTW9kYWxDb250YWluZXJDb21wb25lbnQsXG4gIE1EQk1vZGFsUmVmLFxufSBmcm9tICcuL21vZGFscy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsXG4gIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gIFRvb2x0aXBEaXJlY3RpdmUsXG4gIFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJy4vdG9vbHRpcC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFBvcG92ZXJDb25maWcsXG4gIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQsXG4gIFBvcG92ZXJNb2R1bGUsXG4gIFBvcG92ZXJEaXJlY3RpdmUsXG59IGZyb20gJy4vcG9wb3Zlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEljb25zTW9kdWxlLFxuICBNZGJJY29uQ29tcG9uZW50LFxuICBGYWxEaXJlY3RpdmUsXG4gIEZhckRpcmVjdGl2ZSxcbiAgRmFzRGlyZWN0aXZlLFxuICBGYWJEaXJlY3RpdmUsXG4gIEZhZERpcmVjdGl2ZSxcbn0gZnJvbSAnLi9pY29ucy9pbmRleCc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEJ1dHRvbnNNb2R1bGUsXG4gIENhcmRzTW9kdWxlLFxuICBXYXZlc01vZHVsZSxcbiAgSW5wdXRzTW9kdWxlLFxuICBOYXZiYXJNb2R1bGUsXG4gIERyb3Bkb3duTW9kdWxlLFxuICBDYXJvdXNlbE1vZHVsZSxcbiAgQ2hhcnRzTW9kdWxlLFxuICBDb2xsYXBzZU1vZHVsZSxcbiAgTW9kYWxNb2R1bGUsXG4gIFRvb2x0aXBNb2R1bGUsXG4gIFBvcG92ZXJNb2R1bGUsXG4gIEljb25zTW9kdWxlLFxuICBDaGVja2JveE1vZHVsZSxcbiAgVGFibGVNb2R1bGUsXG4gIEJhZGdlTW9kdWxlLFxuICBCcmVhZGNydW1iTW9kdWxlLFxuICBJbnB1dFV0aWxpdGllc01vZHVsZSxcbiAgU3RpY2t5SGVhZGVyTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbnNNb2R1bGUsXG4gICAgV2F2ZXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIElucHV0c01vZHVsZS5mb3JSb290KCksXG4gICAgTmF2YmFyTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hhcnRzTW9kdWxlLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgSWNvbnNNb2R1bGUsXG4gICAgQ2FyZHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIEJhZGdlTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG4gICAgU3RpY2t5SGVhZGVyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBNT0RVTEVTLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIE1EQlJvb3RNb2R1bGUge31cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIE1EQkJvb3RzdHJhcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1EQlJvb3RNb2R1bGU+IHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogTURCUm9vdE1vZHVsZSB9O1xuICB9XG59XG4iXX0=