/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MdbBtnDirective } from './buttons.directive';
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from "./fixed-caption.directive";
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective, FixedButtonCaptionDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective, FixedButtonCaptionDirective]
                },] }
    ];
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2J1dHRvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdEU7SUFBQTtJQVFBLENBQUM7Ozs7SUFIZSxxQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ2xELENBQUM7O2dCQVBGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsMkJBQTJCLENBQUM7b0JBQzNHLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQztpQkFDdkc7O0lBS0Qsb0JBQUM7Q0FBQSxBQVJELElBUUM7U0FKWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWRiQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXR0b25DaGVja2JveERpcmVjdGl2ZSB9IGZyb20gJy4vY2hlY2tib3guZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvblJhZGlvRGlyZWN0aXZlIH0gZnJvbSAnLi9yYWRpby5kaXJlY3RpdmUnO1xuaW1wb3J0IHtGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmV9IGZyb20gXCIuL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkNoZWNrYm94RGlyZWN0aXZlLCBCdXR0b25SYWRpb0RpcmVjdGl2ZSwgTWRiQnRuRGlyZWN0aXZlLCBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsIEJ1dHRvblJhZGlvRGlyZWN0aXZlLCBNZGJCdG5EaXJlY3RpdmUsIEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uc01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBCdXR0b25zTW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcbiAgfVxufVxuIl19