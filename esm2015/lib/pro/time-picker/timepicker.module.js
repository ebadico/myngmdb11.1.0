import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ClockPickerComponent } from './timepicker.component';
import { ButtonsModule } from '../../free/buttons/buttons.module';
import { WavesModule } from '../../free/waves/waves.module';
export class TimePickerModule {
}
TimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ButtonsModule.forRoot(), WavesModule.forRoot()],
                declarations: [ClockPickerComponent],
                exports: [ClockPickerComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9wcm8vdGltZS1waWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPNUQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTDVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BGLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2ZyZWUvYnV0dG9ucy9idXR0b25zLm1vZHVsZSc7XG5pbXBvcnQgeyBXYXZlc01vZHVsZSB9IGZyb20gJy4uLy4uL2ZyZWUvd2F2ZXMvd2F2ZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEJ1dHRvbnNNb2R1bGUuZm9yUm9vdCgpLCBXYXZlc01vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtDbG9ja1BpY2tlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDbG9ja1BpY2tlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJNb2R1bGUge31cbiJdfQ==