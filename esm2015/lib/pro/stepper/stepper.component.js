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
import { from, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
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
        this.stepTextContent = '';
        this.stepChangeSubject = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    get activeStepIndex() {
        return this._activeStepIndex;
    }
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
    getStepChange$() {
        return this.stepChangeSubject;
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
     * @param {?=} height
     * @return {?}
     */
    _updateHorizontalStepperHeight(index, height) {
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const stepHeight = height ? height + 50 : this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                this._renderer.setStyle(this.container.nativeElement, 'height', stepHeight + 'px');
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
        this.stepChange$ = from(this.steps.toArray());
        this.getStepChange$().pipe(distinctUntilChanged()).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.container.nativeElement.children[this.activeStepIndex]) {
                /** @type {?} */
                const stepElContent = this.container.nativeElement.children[this._activeStepIndex].lastElementChild;
                this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.stepContents) {
            /** @type {?} */
            const activeStep = this.stepContents.filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => el && index == this.activeStepIndex)).map((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el.nativeElement))[0];
            if (activeStep.innerHTMl !== this.stepTextContent) {
                this.stepChangeSubject.next(activeStep.innerHTML);
            }
            this.stepTextContent = activeStep.innerHTML;
        }
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
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype.stepTextContent;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChangeSubject;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange$;
    /** @type {?} */
    MdbStepperComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFFWixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxJQUFJLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBZXBELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVM5QixZQUNTLE1BQXNCLEVBQ3JCLFNBQW9CLEVBQ1AsVUFBa0I7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQU5yQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxH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UyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDbkUsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzVDLENBQUMsQ0FBQztnQkFDSCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDNUI7Ozs7WUFsQk8sY0FBYztZQVBwQixTQUFTO3lDQXNDTixNQUFNLFNBQUMsV0FBVzs7O29CQVhwQixlQUFlLFNBQUMsZ0JBQWdCO3lCQUNoQyxZQUFZLFNBQUMsV0FBVzsyQkFDeEIsWUFBWSxTQUFDLGFBQWE7d0JBQzFCLFNBQVMsU0FBQyxXQUFXO3FCQUNyQixLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFnQ0wsWUFBWSxTQUFDLGVBQWU7Ozs7SUF0QzdCLG9DQUFzRTs7SUFDdEUseUNBQTZEOztJQUM3RCwyQ0FBaUU7O0lBQ2pFLHdDQUE4Qzs7SUFDOUMscUNBQXdCOztJQUN4QiwyQ0FBOEI7O0lBQzlCLHVDQUEwQjs7SUFTMUIsd0NBQW1COztJQUNuQix5Q0FBa0I7Ozs7O0lBQ2xCLGlEQUFpQzs7Ozs7SUFVakMsK0NBQWlDOzs7OztJQUNqQywwQ0FBc0M7Ozs7O0lBQ3RDLDhDQUFxQzs7SUFFckMsZ0RBQWdEOztJQUNoRCwwQ0FBNkI7O0lBdkIzQixxQ0FBNkI7Ozs7O0lBQzdCLHdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kYlN0ZXBDb21wb25lbnR9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHt0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJy4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge1dhdmVzRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcHBlcicsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdzdGVwQ29udGVudFRyYW5zaXRpb24nLCBbXG4gICAgc3RhdGUoJ3ByZXZpb3VzJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNjAwbXMgZWFzZScpKVxuICBdKV0sXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE1kYlN0ZXBDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwVGl0bGUnKSBzdGVwVGl0bGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBDb250ZW50Jykgc3RlcENvbnRlbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbGluZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgaG9yaXpvbnRhbCA9IHRydWU7XG4gIHByaXZhdGUgX3N0ZXBwZXJCcmVha3BvaW50ID0gOTkyO1xuXG4gIGdldCBhY3RpdmVTdGVwSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleDtcbiAgfVxuXG4gIHNldCBhY3RpdmVTdGVwSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIHByaXZhdGUgc3RlcFRleHRDb250ZW50OiBzdHJpbmcgPSAnJztcblxuICBzdGVwQ2hhbmdlU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgc3RlcENoYW5nZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBnZXRTdGVwQ2hhbmdlJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0ZXBDaGFuZ2VTdWJqZWN0O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fc3RlcHBlckJyZWFrcG9pbnQpIHtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICBjb25zdCBjbGlja2VkRWwgPSB0aGlzLnN0ZXBUaXRsZXMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZEVsO1xuICAgICAgdGhpcy5yaXBwbGUuY2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNTdGVwVmFsaWQoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghc3RlcC5zdGVwRm9ybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0gJiYgc3RlcC5zdGVwRm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uU3RhdGUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbmV4dEVsUG9zaXRpb24gPSBpbmRleCAtIHRoaXMuYWN0aXZlU3RlcEluZGV4O1xuICAgIGlmIChuZXh0RWxQb3NpdGlvbiA8IDApIHtcbiAgICAgIHJldHVybiAncHJldmlvdXMnO1xuICAgIH0gZWxzZSBpZiAobmV4dEVsUG9zaXRpb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2N1cnJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1kYlN0ZXBDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA8ICh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubGluZWFyKSB7XG4gICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5ld0FjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1N0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleChpbmRleCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgIXRoaXMuX2lzTmV3U3RlcExpbmVhcihpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMobmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuX2lzU3RlcFZhbGlkKHRoaXMuX2FjdGl2ZVN0ZXApKSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc1dyb25nKCk7XG4gICAgICAgIHRoaXMuX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXModGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNEb25lKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNXcm9uZygpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrU3RlcENvbnRyb2xzQXNEaXJ0eShzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzO1xuICAgIGlmIChzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29udHJvbHMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIHN0ZXAuaXNEb25lID0gZmFsc2U7XG4gICAgc3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9pc05ld1N0ZXBMaW5lYXIobmV3U3RlcEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IDEgfHwgdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodChpbmRleCk7XG4gICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9hY3RpdmVTdGVwID0gdGhpcy5fZ2V0U3RlcEJ5SW5kZXgodGhpcy5hY3RpdmVTdGVwSW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKSB7XG4gICAgY29uc3QgY3VycmVudEFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoYWN0aXZlU3RlcCA9PiBhY3RpdmVTdGVwLmlzQWN0aXZlKTtcbiAgICBpZiAoY3VycmVudEFjdGl2ZVN0ZXApIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVTdGVwLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBbGwoKSB7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBzdGVwLnJlc2V0KCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCAmJiAhdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBIZWlnaHQgPSBoZWlnaHQgPyBoZWlnaHQgKyA1MCA6IHRoaXMuc3RlcENvbnRlbnRzLnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyA1MDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHN0ZXBIZWlnaHQgKyAncHgnKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFN0ZXBwZXJWYXJpYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMuX3N0ZXBwZXJCcmVha3BvaW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2luaXRTdGVwcGVyVmFyaWF0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICB0aGlzLnN0ZXBDaGFuZ2UkID0gZnJvbSh0aGlzLnN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgdGhpcy5nZXRTdGVwQ2hhbmdlJCgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuYWN0aXZlU3RlcEluZGV4XSkge1xuICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4LCBzdGVwRWxDb250ZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcENvbnRlbnRzKSB7XG4gICAgICBjb25zdCBhY3RpdmVTdGVwID0gdGhpcy5zdGVwQ29udGVudHMuZmlsdGVyKChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PSB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkubWFwKChlbDogYW55KSA9PiBlbC5uYXRpdmVFbGVtZW50KVswXTtcbiAgICAgIGlmIChhY3RpdmVTdGVwLmlubmVySFRNbCAhPT0gdGhpcy5zdGVwVGV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5zdGVwQ2hhbmdlU3ViamVjdC5uZXh0KGFjdGl2ZVN0ZXAuaW5uZXJIVE1MKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RlcFRleHRDb250ZW50ID0gYWN0aXZlU3RlcC5pbm5lckhUTUw7XG4gICAgfVxuICB9XG59XG4iXX0=