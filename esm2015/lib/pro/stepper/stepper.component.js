/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ContentChildren, QueryList, HostListener, Input, ElementRef, ViewChild, ViewChildren, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { MdbStepComponent } from './step.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { window } from './../../free/utils/facade/browser';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
export class MdbStepperComponent {
    /**
     * @param {?} ripple
     * @param {?} _renderer
     * @param {?} platformId
     */
    constructor(ripple, _renderer, platformId) {
        this.ripple = ripple;
        this._renderer = _renderer;
        this.linear = false;
        this.disableWaves = false;
        this.vertical = false;
        this.horizontal = true;
        this._stepperBreakpoint = 992;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    get activeStepIndex() { return this._activeStepIndex; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeStepIndex(value) {
        this._activeStepIndex = value;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        if (this.isBrowser) {
            if (window.innerWidth < this._stepperBreakpoint) {
                this.horizontal = false;
                this._updateHorizontalStepperHeight(this.activeStepIndex);
            }
            else {
                this.horizontal = true;
                this._updateHorizontalStepperHeight(this.activeStepIndex);
            }
        }
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    onClick(index, event) {
        if (!this.disableWaves) {
            /** @type {?} */
            const clickedEl = this.stepTitles.toArray()[index];
            this.ripple.el = clickedEl;
            this.ripple.click(event);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _isStepValid(step) {
        if (!step.stepForm) {
            return true;
        }
        if (step.stepForm && step.stepForm.valid) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getAnimationState(index) {
        /** @type {?} */
        const nextElPosition = index - this.activeStepIndex;
        if (nextElPosition < 0) {
            return 'previous';
        }
        else if (nextElPosition > 0) {
            return 'next';
        }
        return 'current';
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _getStepByIndex(index) {
        return this.steps.toArray()[index];
    }
    /**
     * @return {?}
     */
    next() {
        if (this.activeStepIndex < (this.steps.length - 1)) {
            this.setNewActiveStep(this.activeStepIndex + 1);
        }
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.activeStepIndex > 0) {
            this.setNewActiveStep(this.activeStepIndex - 1);
        }
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.linear) {
            this._markCurrentAsDone();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setNewActiveStep(index) {
        /** @type {?} */
        const newStep = this._getStepByIndex(index);
        if (this.linear && !this._isNewStepLinear(index)) {
            return;
        }
        this._removeStepValidationClasses(newStep);
        if (this.linear && index > this.activeStepIndex) {
            if (this._isStepValid(this._activeStep)) {
                this._markCurrentAsDone();
                this._removeCurrentActiveStep();
                this._setActiveStep(index);
            }
            else {
                this._markCurrentAsWrong();
                this._markStepControlsAsDirty(this._activeStep);
            }
        }
        else {
            if (index < this.activeStepIndex) {
                this._removeStepValidationClasses(this._activeStep);
            }
            this._removeCurrentActiveStep();
            this._setActiveStep(index);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _markCurrentAsDone() {
        this._activeStep.isDone = true;
        this._activeStep.isWrong = false;
    }
    /**
     * @private
     * @return {?}
     */
    _markCurrentAsWrong() {
        this._activeStep.isWrong = true;
        this._activeStep.isDone = false;
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _markStepControlsAsDirty(step) {
        /** @type {?} */
        const controls = step.stepForm.controls;
        if (step.stepForm.controls) {
            /** @type {?} */
            const keys = Object.keys(controls);
            for (let i = 0; i < keys.length; i++) {
                /** @type {?} */
                const control = controls[keys[i]];
                if (control instanceof FormControl) {
                    control.markAsTouched();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _removeStepValidationClasses(step) {
        step.isDone = false;
        step.isWrong = false;
    }
    /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    _isNewStepLinear(newStepIndex) {
        return this.activeStepIndex - newStepIndex === 1 || this.activeStepIndex - newStepIndex === -1;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _setActiveStep(index) {
        this.steps.toArray()[index].isActive = true;
        this._updateHorizontalStepperHeight(index);
        this.activeStepIndex = index;
        this._activeStep = this._getStepByIndex(this.activeStepIndex);
    }
    /**
     * @private
     * @return {?}
     */
    _removeCurrentActiveStep() {
        /** @type {?} */
        const currentActiveStep = this.steps.find((/**
         * @param {?} activeStep
         * @return {?}
         */
        activeStep => activeStep.isActive));
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    }
    /**
     * @return {?}
     */
    resetAll() {
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            step.reset();
            this._setActiveStep(0);
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _updateHorizontalStepperHeight(index) {
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const height = this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                this._renderer.setStyle(this.container.nativeElement, 'height', height + 'px');
            }), 0);
        }
        else {
            this._renderer.removeStyle(this.container.nativeElement, 'height');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _initStepperVariation() {
        if (this.isBrowser) {
            if (this.vertical || window.innerWidth < this._stepperBreakpoint) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.horizontal = false;
                    this._renderer.removeStyle(this.container.nativeElement, 'height');
                }), 0);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initStepperVariation();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._setActiveStep(0);
    }
}
MdbStepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-stepper',
                exportAs: 'mdbStepper',
                template: "<div class=\"card-body\">\n  <ul #container class=\"stepper\" [ngClass]=\"{'horizontal': !vertical && horizontal}\">\n    <li [ngClass]=\"{'active': step.isActive, 'done': step.isDone, 'wrong': step.isWrong }\" class=\"step\" *ngFor=\"let step of steps; let i = index\">\n      <div #stepTitle class=\"step-title waves-effect waves-dark\" (click)=\"setNewActiveStep(i); onClick(i, $event)\">\n        {{ step.name }}\n        <span class=\"step-label\">{{ step.label }}</span>\n      </div>\n      <div #stepContent class=\"step-new-content\" [ngClass]=\"{'d-block': step.isActive }\" [@stepContentTransition]=\"!vertical && getAnimationState(i)\">\n          <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </li>\n  </ul>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                animations: [trigger('stepContentTransition', [
                        state('previous', style({ transform: 'translateX(-100%)', visibility: 'hidden' })),
                        state('next', style({ transform: 'translateX(100%)', visibility: 'hidden' })),
                        state('current', style({ transform: 'none', visibility: 'visible' })),
                        transition('* => *', animate('600ms ease'))
                    ])],
                providers: [WavesDirective]
            }] }
];
/** @nocollapse */
MdbStepperComponent.ctorParameters = () => [
    { type: WavesDirective },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbStepperComponent.propDecorators = {
    steps: [{ type: ContentChildren, args: [MdbStepComponent,] }],
    stepTitles: [{ type: ViewChildren, args: ['stepTitle',] }],
    stepContents: [{ type: ViewChildren, args: ['stepContent',] }],
    container: [{ type: ViewChild, args: ['container',] }],
    linear: [{ type: Input }],
    disableWaves: [{ type: Input }],
    vertical: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    MdbStepperComponent.prototype.steps;
    /** @type {?} */
    MdbStepperComponent.prototype.stepTitles;
    /** @type {?} */
    MdbStepperComponent.prototype.stepContents;
    /** @type {?} */
    MdbStepperComponent.prototype.container;
    /** @type {?} */
    MdbStepperComponent.prototype.linear;
    /** @type {?} */
    MdbStepperComponent.prototype.disableWaves;
    /** @type {?} */
    MdbStepperComponent.prototype.vertical;
    /** @type {?} */
    MdbStepperComponent.prototype.isBrowser;
    /** @type {?} */
    MdbStepperComponent.prototype.horizontal;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._stepperBreakpoint;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStepIndex;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStep;
    /** @type {?} */
    MdbStepperComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFFWixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZXBELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVM5QixZQUNTLE1BQXNCLEVBQ3JCLFNBQW9CLEVBQ1AsVUFBa0I7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQU5yQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVUxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ1YsdUJBQWtCLEdBQUcsR0FBRyxDQUFDO1FBTDdCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJB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QyxXQUFXOzJCQUN4QixZQUFZLFNBQUMsYUFBYTt3QkFDMUIsU0FBUyxTQUFDLFdBQVc7cUJBQ3JCLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQW9CTCxZQUFZLFNBQUMsZUFBZTs7OztJQTFCN0Isb0NBQXNFOztJQUN0RSx5Q0FBNkQ7O0lBQzdELDJDQUFpRTs7SUFDakUsd0NBQThDOztJQUM5QyxxQ0FBd0I7O0lBQ3hCLDJDQUE4Qjs7SUFDOUIsdUNBQTBCOztJQVMxQix3Q0FBbUI7O0lBQ25CLHlDQUFrQjs7Ozs7SUFDbEIsaURBQWlDOzs7OztJQU1qQywrQ0FBaUM7Ozs7O0lBQ2pDLDBDQUFzQzs7SUFmcEMscUNBQTZCOzs7OztJQUM3Qix3Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHsgV2F2ZXNEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdGVwcGVyJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ3N0ZXBDb250ZW50VHJhbnNpdGlvbicsIFtcbiAgICBzdGF0ZSgncHJldmlvdXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pKSxcbiAgICBzdGF0ZSgnbmV4dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgc3RhdGUoJ2N1cnJlbnQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnbm9uZScsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30pKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCc2MDBtcyBlYXNlJykpXG4gIF0pXSxcbiAgcHJvdmlkZXJzOiBbV2F2ZXNEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1kYlN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TWRiU3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBUaXRsZScpIHN0ZXBUaXRsZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQFZpZXdDaGlsZHJlbignc3RlcENvbnRlbnQnKSBzdGVwQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBsaW5lYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZVdhdmVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJpcHBsZTogV2F2ZXNEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuXG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgaG9yaXpvbnRhbCA9IHRydWU7XG4gIHByaXZhdGUgX3N0ZXBwZXJCcmVha3BvaW50ID0gOTkyO1xuXG4gIGdldCBhY3RpdmVTdGVwSW5kZXgoKSB7IHJldHVybiB0aGlzLl9hY3RpdmVTdGVwSW5kZXg7IH1cbiAgc2V0IGFjdGl2ZVN0ZXBJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcEluZGV4ID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fc3RlcHBlckJyZWFrcG9pbnQpIHtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICBjb25zdCBjbGlja2VkRWwgPSB0aGlzLnN0ZXBUaXRsZXMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZEVsO1xuICAgICAgdGhpcy5yaXBwbGUuY2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNTdGVwVmFsaWQoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghc3RlcC5zdGVwRm9ybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0gJiYgc3RlcC5zdGVwRm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uU3RhdGUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbmV4dEVsUG9zaXRpb24gPSBpbmRleCAtIHRoaXMuYWN0aXZlU3RlcEluZGV4O1xuICAgIGlmIChuZXh0RWxQb3NpdGlvbiA8IDApIHtcbiAgICAgIHJldHVybiAncHJldmlvdXMnO1xuICAgIH0gZWxzZSBpZiAobmV4dEVsUG9zaXRpb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2N1cnJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1kYlN0ZXBDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA8ICh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgIHRoaXMuc2V0TmV3QWN0aXZlU3RlcCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuc2V0TmV3QWN0aXZlU3RlcCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5saW5lYXIpIHtcbiAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmV3QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3U3RlcCA9IHRoaXMuX2dldFN0ZXBCeUluZGV4KGluZGV4KTtcblxuICAgIGlmICh0aGlzLmxpbmVhciAmJiAhdGhpcy5faXNOZXdTdGVwTGluZWFyKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3NlcyhuZXdTdGVwKTtcblxuICAgIGlmICh0aGlzLmxpbmVhciAmJiBpbmRleCA+IHRoaXMuYWN0aXZlU3RlcEluZGV4KSB7XG4gICAgICBpZiAodGhpcy5faXNTdGVwVmFsaWQodGhpcy5fYWN0aXZlU3RlcCkpIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc0RvbmUoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKTtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrQ3VycmVudEFzV3JvbmcoKTtcbiAgICAgICAgdGhpcy5fbWFya1N0ZXBDb250cm9sc0FzRGlydHkodGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZlU3RlcEluZGV4KSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3Nlcyh0aGlzLl9hY3RpdmVTdGVwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0N1cnJlbnRBc0RvbmUoKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc0RvbmUgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0N1cnJlbnRBc1dyb25nKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNXcm9uZyA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc0RvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBjb25zdCBjb250cm9scyA9IHN0ZXAuc3RlcEZvcm0uY29udHJvbHM7XG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0uY29udHJvbHMpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250cm9scyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGNvbnRyb2xzW2tleXNbaV1dO1xuXG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3NlcyhzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgc3RlcC5pc0RvbmUgPSBmYWxzZTtcbiAgICBzdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzTmV3U3RlcExpbmVhcihuZXdTdGVwSW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIG5ld1N0ZXBJbmRleCA9PT0gMSB8fCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIG5ld1N0ZXBJbmRleCA9PT0gLTE7XG4gIH1cblxuICBwcml2YXRlIF9zZXRBY3RpdmVTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KGluZGV4KTtcbiAgICB0aGlzLmFjdGl2ZVN0ZXBJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVDdXJyZW50QWN0aXZlU3RlcCgpIHtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlU3RlcCA9IHRoaXMuc3RlcHMuZmluZChhY3RpdmVTdGVwID0+IGFjdGl2ZVN0ZXAuaXNBY3RpdmUpO1xuICAgIGlmIChjdXJyZW50QWN0aXZlU3RlcCkge1xuICAgICAgY3VycmVudEFjdGl2ZVN0ZXAuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXNldEFsbCgpIHtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goIChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBzdGVwLnJlc2V0KCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmhvcml6b250YWwgJiYgIXRoaXMudmVydGljYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnN0ZXBDb250ZW50cy50b0FycmF5KClbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgNTA7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0U3RlcHBlclZhcmlhdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fc3RlcHBlckJyZWFrcG9pbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faW5pdFN0ZXBwZXJWYXJpYXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICB9XG59XG4iXX0=