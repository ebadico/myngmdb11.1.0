import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleChartComponent } from './chart-simple.component';
import { EasyPieChartComponent } from './chart-smallpie.component';
export class ChartSimpleModule {
}
ChartSimpleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleChartComponent, EasyPieChartComponent],
                exports: [SimpleChartComponent, EasyPieChartComponent],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2ltcGxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpa2l0LXByby1zdGFuZGFyZC9zcmMvbGliL3Byby9lYXN5LWNoYXJ0cy9jaGFydC1zaW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LXNpbXBsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWFzeVBpZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC1zbWFsbHBpZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaW1wbGVDaGFydENvbXBvbmVudCwgRWFzeVBpZUNoYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpbXBsZUNoYXJ0Q29tcG9uZW50LCBFYXN5UGllQ2hhcnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTaW1wbGVNb2R1bGUge31cbiJdfQ==