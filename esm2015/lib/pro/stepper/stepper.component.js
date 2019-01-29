/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const currentActiveStep = this.steps.find(activeStep => activeStep.isActive);
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    }
    /**
     * @return {?}
     */
    resetAll() {
        this.steps.forEach((step) => {
            step.reset();
            this._setActiveStep(0);
        });
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _updateHorizontalStepperHeight(index) {
        if (this.horizontal && !this.vertical) {
            setTimeout(() => {
                /** @type {?} */
                const height = this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                this._renderer.setStyle(this.container.nativeElement, 'height', height + 'px');
            }, 0);
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
                setTimeout(() => {
                    this.horizontal = false;
                    this._renderer.removeStyle(this.container.nativeElement, 'height');
                }, 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFFWixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZXBELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVM5QixZQUNTLE1BQXNCLEVBQ3JCLFNBQW9CLEVBQ1AsVUFBa0I7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQU5yQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVUxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ1YsdUJBQWtCLEdBQUcsR0FBRyxDQUFDO1FBTDdCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJB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eEIsWUFBWSxTQUFDLGFBQWE7d0JBQzFCLFNBQVMsU0FBQyxXQUFXO3FCQUNyQixLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFvQkwsWUFBWSxTQUFDLGVBQWU7Ozs7SUExQjdCLG9DQUFzRTs7SUFDdEUseUNBQTZEOztJQUM3RCwyQ0FBaUU7O0lBQ2pFLHdDQUE4Qzs7SUFDOUMscUNBQXdCOztJQUN4QiwyQ0FBOEI7O0lBQzlCLHVDQUEwQjs7SUFTMUIsd0NBQW1COztJQUNuQix5Q0FBa0I7Ozs7O0lBQ2xCLGlEQUFpQzs7Ozs7SUFNakMsK0NBQWlDOzs7OztJQUNqQywwQ0FBc0M7O0lBZnBDLHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kYlN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7IFdhdmVzRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZnJlZS93YXZlcy93YXZlcy1lZmZlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcHBlcicsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdzdGVwQ29udGVudFRyYW5zaXRpb24nLCBbXG4gICAgc3RhdGUoJ3ByZXZpb3VzJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNjAwbXMgZWFzZScpKVxuICBdKV0sXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE1kYlN0ZXBDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwVGl0bGUnKSBzdGVwVGl0bGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBDb250ZW50Jykgc3RlcENvbnRlbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbGluZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIH1cblxuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gIGhvcml6b250YWwgPSB0cnVlO1xuICBwcml2YXRlIF9zdGVwcGVyQnJlYWtwb2ludCA9IDk5MjtcblxuICBnZXQgYWN0aXZlU3RlcEluZGV4KCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlU3RlcEluZGV4OyB9XG4gIHNldCBhY3RpdmVTdGVwSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9hY3RpdmVTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMuX3N0ZXBwZXJCcmVha3BvaW50KSB7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhvcml6b250YWwgPSB0cnVlO1xuICAgICAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVXYXZlcykge1xuICAgICAgY29uc3QgY2xpY2tlZEVsID0gdGhpcy5zdGVwVGl0bGVzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLnJpcHBsZS5lbCA9IGNsaWNrZWRFbDtcbiAgICAgIHRoaXMucmlwcGxlLmNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHByaXZhdGUgX2lzU3RlcFZhbGlkKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXN0ZXAuc3RlcEZvcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwLnN0ZXBGb3JtICYmIHN0ZXAuc3RlcEZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvblN0YXRlKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5leHRFbFBvc2l0aW9uID0gaW5kZXggLSB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgICBpZiAobmV4dEVsUG9zaXRpb24gPCAwKSB7XG4gICAgICByZXR1cm4gJ3ByZXZpb3VzJztcbiAgICB9IGVsc2UgaWYgKG5leHRFbFBvc2l0aW9uID4gMCkge1xuICAgICAgcmV0dXJuICduZXh0JztcbiAgICB9XG4gICAgcmV0dXJuICdjdXJyZW50JztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNZGJTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPCAodGhpcy5zdGVwcy5sZW5ndGggLSAxKSkge1xuICAgICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubGluZWFyKSB7XG4gICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5ld0FjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1N0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleChpbmRleCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgIXRoaXMuX2lzTmV3U3RlcExpbmVhcihpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMobmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuX2lzU3RlcFZhbGlkKHRoaXMuX2FjdGl2ZVN0ZXApKSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc1dyb25nKCk7XG4gICAgICAgIHRoaXMuX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXModGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNEb25lKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNXcm9uZygpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrU3RlcENvbnRyb2xzQXNEaXJ0eShzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzO1xuICAgIGlmIChzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29udHJvbHMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIHN0ZXAuaXNEb25lID0gZmFsc2U7XG4gICAgc3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9pc05ld1N0ZXBMaW5lYXIobmV3U3RlcEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IDEgfHwgdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodChpbmRleCk7XG4gICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9hY3RpdmVTdGVwID0gdGhpcy5fZ2V0U3RlcEJ5SW5kZXgodGhpcy5hY3RpdmVTdGVwSW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKSB7XG4gICAgY29uc3QgY3VycmVudEFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoYWN0aXZlU3RlcCA9PiBhY3RpdmVTdGVwLmlzQWN0aXZlKTtcbiAgICBpZiAoY3VycmVudEFjdGl2ZVN0ZXApIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVTdGVwLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBbGwoKSB7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKCAoc3RlcDogTWRiU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgc3RlcC5yZXNldCgpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ob3Jpem9udGFsICYmICF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zdGVwQ29udGVudHMudG9BcnJheSgpW2luZGV4XS5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArIDUwO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFN0ZXBwZXJWYXJpYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMuX3N0ZXBwZXJCcmVha3BvaW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2luaXRTdGVwcGVyVmFyaWF0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgfVxufVxuIl19