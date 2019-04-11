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
var MdbStepperComponent = /** @class */ (function () {
    function MdbStepperComponent(ripple, _renderer, platformId) {
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
    Object.defineProperty(MdbStepperComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeStepIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeStepIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.getStepChange$ = /**
     * @return {?}
     */
    function () {
        return this.stepChangeSubject;
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    MdbStepperComponent.prototype.onClick = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        if (!this.disableWaves) {
            /** @type {?} */
            var clickedEl = this.stepTitles.toArray()[index];
            this.ripple.el = clickedEl;
            this.ripple.click(event);
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._isStepValid = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step.stepForm) {
            return true;
        }
        if (step.stepForm && step.stepForm.valid) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.getAnimationState = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var nextElPosition = index - this.activeStepIndex;
        if (nextElPosition < 0) {
            return 'previous';
        }
        else if (nextElPosition > 0) {
            return 'next';
        }
        return 'current';
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._getStepByIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.steps.toArray()[index];
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex < (this.steps.length - 1)) {
            this.setNewActiveStep(this.activeStepIndex + 1);
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex > 0) {
            this.setNewActiveStep(this.activeStepIndex - 1);
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        if (this.linear) {
            this._markCurrentAsDone();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.setNewActiveStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var newStep = this._getStepByIndex(index);
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
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsDone = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isDone = true;
        this._activeStep.isWrong = false;
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsWrong = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isWrong = true;
        this._activeStep.isDone = false;
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._markStepControlsAsDirty = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var controls = step.stepForm.controls;
        if (step.stepForm.controls) {
            /** @type {?} */
            var keys = Object.keys(controls);
            for (var i = 0; i < keys.length; i++) {
                /** @type {?} */
                var control = controls[keys[i]];
                if (control instanceof FormControl) {
                    control.markAsTouched();
                }
            }
        }
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._removeStepValidationClasses = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        step.isDone = false;
        step.isWrong = false;
    };
    /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    MdbStepperComponent.prototype._isNewStepLinear = /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    function (newStepIndex) {
        return this.activeStepIndex - newStepIndex === 1 || this.activeStepIndex - newStepIndex === -1;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._setActiveStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.steps.toArray()[index].isActive = true;
        this._updateHorizontalStepperHeight(index);
        this.activeStepIndex = index;
        this._activeStep = this._getStepByIndex(this.activeStepIndex);
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._removeCurrentActiveStep = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentActiveStep = this.steps.find((/**
         * @param {?} activeStep
         * @return {?}
         */
        function (activeStep) { return activeStep.isActive; }));
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.resetAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.reset();
            _this._setActiveStep(0);
        }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    MdbStepperComponent.prototype._updateHorizontalStepperHeight = /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    function (index, height) {
        var _this = this;
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var stepHeight = height ? height + 50 : _this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                _this._renderer.setStyle(_this.container.nativeElement, 'height', stepHeight + 'px');
            }), 0);
        }
        else {
            this._renderer.removeStyle(this.container.nativeElement, 'height');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._initStepperVariation = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            if (this.vertical || window.innerWidth < this._stepperBreakpoint) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.horizontal = false;
                    _this._renderer.removeStyle(_this.container.nativeElement, 'height');
                }), 0);
            }
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initStepperVariation();
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setActiveStep(0);
        this.stepChange$ = from(this.steps.toArray());
        this.getStepChange$().pipe(distinctUntilChanged()).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.container.nativeElement.children[_this.activeStepIndex]) {
                /** @type {?} */
                var stepElContent = _this.container.nativeElement.children[_this._activeStepIndex].lastElementChild;
                _this._updateHorizontalStepperHeight(_this.activeStepIndex, stepElContent.clientHeight);
            }
        }));
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.stepContents) {
            /** @type {?} */
            var activeStep = this.stepContents.filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el && index == _this.activeStepIndex; })).map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.nativeElement; }))[0];
            if (activeStep.innerHTMl !== this.stepTextContent) {
                this.stepChangeSubject.next(activeStep.innerHTML);
            }
            this.stepTextContent = activeStep.innerHTML;
        }
    };
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
    MdbStepperComponent.ctorParameters = function () { return [
        { type: WavesDirective },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return MdbStepperComponent;
}());
export { MdbStepperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFFWixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxJQUFJLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBEO0lBc0JFLDZCQUNTLE1BQXNCLEVBQ3JCLFNBQW9CLEVBQ1AsVUFBa0I7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQU5yQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVUxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ1YsdUJBQWtCLEdBQUcsR0FBRyxDQUFDO1FBWXpCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBbkI5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFNRCxzQkFBSSxnREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBRUQsVUFBb0IsS0FBYTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUpBOzs7O0lBYUQsNENBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUdELDRDQUFjOzs7SUFEZDtRQUVFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMzRDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQU87Ozs7O0lBQVAsVUFBUSxLQUFhLEVBQUUsS0FBVTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2hCLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7O0lBRU8sMENBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQXNCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsS0FBYTs7WUFDdkIsY0FBYyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtRQUNuRCxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLDZDQUFlOzs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWE7O1lBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRDtZQUVELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7SUFFSCxDQUFDOzs7OztJQUVPLGdEQUFrQjs7OztJQUExQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFTyxpREFBbUI7Ozs7SUFBM0I7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLHNEQUF3Qjs7Ozs7SUFBaEMsVUFBaUMsSUFBc0I7O1lBQy9DLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ3BCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzlCLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7b0JBQ2xDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMERBQTRCOzs7OztJQUFwQyxVQUFxQyxJQUFzQjtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw4Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFlBQW9CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLHNEQUF3Qjs7OztJQUFoQzs7WUFDUSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxRQUFRLEVBQW5CLENBQW1CLEVBQUM7UUFDNUUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUN4QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLDREQUE4Qjs7Ozs7O0lBQXRDLFVBQXVDLEtBQWEsRUFBRSxNQUFlO1FBQXJFLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxVQUFVOzs7WUFBQzs7b0JBQ0gsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEVBQUU7Z0JBQzVHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDckYsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtREFBcUI7Ozs7SUFBN0I7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ2hFLFVBQVU7OztnQkFBQztvQkFDVCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3JFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQzthQUNQO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUMzRCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7O29CQUN6RCxhQUFhLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQjtnQkFDbkcsS0FBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsbURBQXFCOzs7SUFBckI7UUFBQSxpQkFRQztRQVBDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLEVBQU8sRUFBRSxLQUFhLElBQUssT0FBQSxFQUFFLElBQUksS0FBSyxJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQW5DLENBQW1DLEVBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxFQUFPLElBQUssT0FBQSxFQUFFLENBQUMsYUFBYSxFQUFoQixDQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xKLElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUM3QztJQUNILENBQUM7O2dCQXhQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw2d0JBQXFDO29CQUNyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFOzRCQUM1QyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzs0QkFDaEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7NEJBQzNFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzs0QkFDbkUsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQzVDLENBQUMsQ0FBQztvQkFDSCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCOzs7O2dCQWxCTyxjQUFjO2dCQVBwQixTQUFTOzZDQXNDTixNQUFNLFNBQUMsV0FBVzs7O3dCQVhwQixlQUFlLFNBQUMsZ0JBQWdCOzZCQUNoQyxZQUFZLFNBQUMsV0FBVzsrQkFDeEIsWUFBWSxTQUFDLGFBQWE7NEJBQzFCLFNBQVMsU0FBQyxXQUFXO3lCQUNyQixLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FnQ0wsWUFBWSxTQUFDLGVBQWU7O0lBcU0vQiwwQkFBQztDQUFBLEFBelBELElBeVBDO1NBNU9ZLG1CQUFtQjs7O0lBQzlCLG9DQUFzRTs7SUFDdEUseUNBQTZEOztJQUM3RCwyQ0FBaUU7O0lBQ2pFLHdDQUE4Qzs7SUFDOUMscUNBQXdCOztJQUN4QiwyQ0FBOEI7O0lBQzlCLHVDQUEwQjs7SUFTMUIsd0NBQW1COztJQUNuQix5Q0FBa0I7Ozs7O0lBQ2xCLGlEQUFpQzs7Ozs7SUFVakMsK0NBQWlDOzs7OztJQUNqQywwQ0FBc0M7Ozs7O0lBQ3RDLDhDQUFxQzs7SUFFckMsZ0RBQWdEOztJQUNoRCwwQ0FBNkI7O0lBdkIzQixxQ0FBNkI7Ozs7O0lBQzdCLHdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kYlN0ZXBDb21wb25lbnR9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHt0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJy4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge1dhdmVzRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcHBlcicsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdzdGVwQ29udGVudFRyYW5zaXRpb24nLCBbXG4gICAgc3RhdGUoJ3ByZXZpb3VzJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxuICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNjAwbXMgZWFzZScpKVxuICBdKV0sXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE1kYlN0ZXBDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwVGl0bGUnKSBzdGVwVGl0bGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBDb250ZW50Jykgc3RlcENvbnRlbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbGluZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgaG9yaXpvbnRhbCA9IHRydWU7XG4gIHByaXZhdGUgX3N0ZXBwZXJCcmVha3BvaW50ID0gOTkyO1xuXG4gIGdldCBhY3RpdmVTdGVwSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleDtcbiAgfVxuXG4gIHNldCBhY3RpdmVTdGVwSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIHByaXZhdGUgc3RlcFRleHRDb250ZW50OiBzdHJpbmcgPSAnJztcblxuICBzdGVwQ2hhbmdlU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgc3RlcENoYW5nZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBnZXRTdGVwQ2hhbmdlJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0ZXBDaGFuZ2VTdWJqZWN0O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fc3RlcHBlckJyZWFrcG9pbnQpIHtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICBjb25zdCBjbGlja2VkRWwgPSB0aGlzLnN0ZXBUaXRsZXMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZEVsO1xuICAgICAgdGhpcy5yaXBwbGUuY2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNTdGVwVmFsaWQoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghc3RlcC5zdGVwRm9ybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0gJiYgc3RlcC5zdGVwRm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uU3RhdGUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbmV4dEVsUG9zaXRpb24gPSBpbmRleCAtIHRoaXMuYWN0aXZlU3RlcEluZGV4O1xuICAgIGlmIChuZXh0RWxQb3NpdGlvbiA8IDApIHtcbiAgICAgIHJldHVybiAncHJldmlvdXMnO1xuICAgIH0gZWxzZSBpZiAobmV4dEVsUG9zaXRpb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2N1cnJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1kYlN0ZXBDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA8ICh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubGluZWFyKSB7XG4gICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5ld0FjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1N0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleChpbmRleCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgIXRoaXMuX2lzTmV3U3RlcExpbmVhcihpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMobmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuX2lzU3RlcFZhbGlkKHRoaXMuX2FjdGl2ZVN0ZXApKSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc1dyb25nKCk7XG4gICAgICAgIHRoaXMuX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXModGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNEb25lKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNXcm9uZygpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrU3RlcENvbnRyb2xzQXNEaXJ0eShzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzO1xuICAgIGlmIChzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29udHJvbHMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIHN0ZXAuaXNEb25lID0gZmFsc2U7XG4gICAgc3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9pc05ld1N0ZXBMaW5lYXIobmV3U3RlcEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IDEgfHwgdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodChpbmRleCk7XG4gICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9hY3RpdmVTdGVwID0gdGhpcy5fZ2V0U3RlcEJ5SW5kZXgodGhpcy5hY3RpdmVTdGVwSW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKSB7XG4gICAgY29uc3QgY3VycmVudEFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoYWN0aXZlU3RlcCA9PiBhY3RpdmVTdGVwLmlzQWN0aXZlKTtcbiAgICBpZiAoY3VycmVudEFjdGl2ZVN0ZXApIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVTdGVwLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBbGwoKSB7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBzdGVwLnJlc2V0KCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCAmJiAhdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBIZWlnaHQgPSBoZWlnaHQgPyBoZWlnaHQgKyA1MCA6IHRoaXMuc3RlcENvbnRlbnRzLnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyA1MDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHN0ZXBIZWlnaHQgKyAncHgnKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFN0ZXBwZXJWYXJpYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMuX3N0ZXBwZXJCcmVha3BvaW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2luaXRTdGVwcGVyVmFyaWF0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICB0aGlzLnN0ZXBDaGFuZ2UkID0gZnJvbSh0aGlzLnN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgdGhpcy5nZXRTdGVwQ2hhbmdlJCgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuYWN0aXZlU3RlcEluZGV4XSkge1xuICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4LCBzdGVwRWxDb250ZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcENvbnRlbnRzKSB7XG4gICAgICBjb25zdCBhY3RpdmVTdGVwID0gdGhpcy5zdGVwQ29udGVudHMuZmlsdGVyKChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PSB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkubWFwKChlbDogYW55KSA9PiBlbC5uYXRpdmVFbGVtZW50KVswXTtcbiAgICAgIGlmIChhY3RpdmVTdGVwLmlubmVySFRNbCAhPT0gdGhpcy5zdGVwVGV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5zdGVwQ2hhbmdlU3ViamVjdC5uZXh0KGFjdGl2ZVN0ZXAuaW5uZXJIVE1MKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RlcFRleHRDb250ZW50ID0gYWN0aXZlU3RlcC5pbm5lckhUTUw7XG4gICAgfVxuICB9XG59XG4iXX0=