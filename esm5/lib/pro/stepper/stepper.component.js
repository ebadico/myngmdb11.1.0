/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ContentChildren, QueryList, Input, ElementRef, ViewChild, ViewChildren, Renderer2, PLATFORM_ID, Inject, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { MdbStepComponent } from './step.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { from, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
var StepChangeEvent = /** @class */ (function () {
    function StepChangeEvent() {
    }
    return StepChangeEvent;
}());
export { StepChangeEvent };
if (false) {
    /** @type {?} */
    StepChangeEvent.prototype.activeStep;
    /** @type {?} */
    StepChangeEvent.prototype.activeStepIndex;
    /** @type {?} */
    StepChangeEvent.prototype.previousStep;
    /** @type {?} */
    StepChangeEvent.prototype.previousStepIndex;
}
var MdbStepperComponent = /** @class */ (function () {
    function MdbStepperComponent(ripple, _renderer, _cdRef, platformId) {
        this.ripple = ripple;
        this._renderer = _renderer;
        this._cdRef = _cdRef;
        this.linear = false;
        this.disableWaves = false;
        this._vertical = false;
        this.stepChange = new EventEmitter();
        this._destroy = new Subject();
        this.horizontal = true;
        this.stepTextContent = '';
        this.stepChangeSubject = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdbStepperComponent.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._vertical = value;
                this.horizontal = false;
                this._renderer.removeStyle(this.container.nativeElement, 'height');
            }
            else {
                this._vertical = value;
                this.horizontal = true;
                if (this.container.nativeElement.children[this.activeStepIndex]) {
                    /** @type {?} */
                    var stepElContent = this.container.nativeElement.children[this._activeStepIndex]
                        .lastElementChild;
                    this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
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
        if (this.activeStepIndex < this.steps.length - 1) {
            this.setNewActiveStep(this.activeStepIndex + 1);
            this._cdRef.markForCheck();
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
            this._cdRef.markForCheck();
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
            this._cdRef.markForCheck();
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
        var currentStep = this._activeStep;
        /** @type {?} */
        var currentStepIndex = this._activeStepIndex;
        /** @type {?} */
        var newStep = this._getStepByIndex(index);
        /** @type {?} */
        var newStepIndex = this.steps
            .toArray()
            .findIndex((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step === newStep; }));
        if (this.linear && !this._isNewStepLinear(index)) {
            return;
        }
        if (newStepIndex < this._activeStepIndex && !newStep.editable) {
            return;
        }
        this._removeStepValidationClasses(newStep);
        if (this.linear && index > this.activeStepIndex) {
            if (this._isStepValid(this._activeStep)) {
                this._markCurrentAsDone();
                this._removeCurrentActiveStep();
                this._setActiveStep(index);
                this.stepChange.emit({
                    activeStep: newStep,
                    activeStepIndex: newStepIndex,
                    previousStep: currentStep,
                    previousStepIndex: currentStepIndex,
                });
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
            this.stepChange.emit({
                activeStep: newStep,
                activeStepIndex: newStepIndex,
                previousStep: currentStep,
                previousStepIndex: currentStepIndex,
            });
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
            _this._cdRef.markForCheck();
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
                var stepHeight = height
                    ? height + 50
                    : _this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
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
            if (this.vertical) {
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
        this.getStepChange$()
            .pipe(distinctUntilChanged(), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.container.nativeElement.children[_this.activeStepIndex]) {
                /** @type {?} */
                var stepElContent = _this.container.nativeElement.children[_this._activeStepIndex]
                    .lastElementChild;
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
            var activeStep = this.stepContents
                .filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el && index === _this.activeStepIndex; }))
                .map((/**
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
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    MdbStepperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-stepper',
                    exportAs: 'mdbStepper',
                    template: "<div class=\"card-body\">\n  <ul #container class=\"stepper\" [ngClass]=\"{ horizontal: !vertical && horizontal }\">\n    <li\n      [ngClass]=\"{ active: step.isActive, done: step.isDone, wrong: step.isWrong }\"\n      class=\"step\"\n      *ngFor=\"let step of steps; let i = index\"\n    >\n      <div\n        #stepTitle\n        class=\"step-title waves-effect waves-dark\"\n        (click)=\"setNewActiveStep(i); onClick(i, $event)\"\n      >\n        <span>{{ step.name }}</span>\n        <span class=\"step-label\">{{ step.label }}</span>\n      </div>\n      <div\n        #stepContent\n        class=\"step-new-content\"\n        [ngClass]=\"{ 'd-block': step.isActive }\"\n        [@stepContentTransition]=\"!vertical && getAnimationState(i)\"\n      >\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        trigger('stepContentTransition', [
                            state('previous', style({ transform: 'translateX(-100%)', display: 'none' })),
                            state('next', style({ transform: 'translateX(100%)', display: 'none' })),
                            state('current', style({ transform: 'none', display: 'block' })),
                            transition('* => *', animate('600ms ease')),
                        ]),
                    ],
                    providers: [WavesDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".stepper li a{padding:1.5rem;font-size:1em;text-align:center}.stepper li a .circle{display:inline-block;color:#fff;border-radius:50%;background:rgba(0,0,0,.38);width:1.75rem;height:1.75rem;text-align:center;line-height:1.75rem;margin-right:.5rem}.stepper li a .label{display:inline-block;color:rgba(0,0,0,.38)}.stepper li.active a .circle,.stepper li.completed a .circle{background-color:#4285f4}.stepper li.active a .label,.stepper li.completed a .label{font-weight:600;color:rgba(0,0,0,.87)}.stepper li.warning a .circle{background-color:#ff3547}.stepper-horizontal{position:relative;display:flex;justify-content:space-between}.stepper-horizontal li{transition:.5s;display:flex;align-items:center;flex:1;position:relative}.stepper-horizontal li a .label{margin-top:.63rem}.stepper-horizontal li:not(:first-child):before,.stepper-horizontal li:not(:last-child):after{content:'';position:relative;flex:1;margin:.5rem 0 0;height:1px;background-color:rgba(0,0,0,.1)}@media (max-width:47.9375rem){.stepper-horizontal{flex-direction:column}.stepper-horizontal li{align-items:flex-start;flex-direction:column}.stepper-horizontal li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-horizontal li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.75rem}}.stepper-vertical{position:relative;display:flex;flex-direction:column;justify-content:space-between}.stepper-vertical li{display:flex;align-items:flex-start;flex:1;flex-direction:column;position:relative}.stepper-vertical li a{align-self:flex-start;display:flex;position:relative}.stepper-vertical li a .circle{order:1}.stepper-vertical li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-vertical li.completed a .label{font-weight:500}.stepper-vertical li .step-content{display:block;margin-top:0;margin-left:3.13rem;padding:.94rem}.stepper-vertical li .step-content p{font-size:.88rem}.stepper-vertical li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.44rem;background-color:rgba(0,0,0,.1)}label.invalid{font-size:.8rem;font-weight:500;color:red!important;top:50px!important}label.invalid.active{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}ul.stepper .wait-feedback{left:0;right:0;top:0;z-index:2;position:absolute;width:100%;height:100%;text-align:center;display:flex;justify-content:center;align-items:center}ul.stepper .step{position:relative;list-style:none}ul.stepper .step.feedbacking .step-new-content>:not(.wait-feedback){opacity:.1}ul.stepper .step:not(:last-of-type).active{margin-bottom:2.25rem}ul.stepper .step:before{position:absolute;top:.75rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper .step.active:before{background-color:#4285f4}ul.stepper .step.done:before{content:'\\f00c';background-color:#00c851}ul.stepper .step.wrong:before{content:'\\f071';background-color:#ff3547}ul.stepper>li:not(:last-of-type){margin-bottom:.625rem;transition:margin-bottom .4s}ul.stepper .step-title{margin:0 -1.3rem;cursor:pointer;padding:.9688rem 2.75rem 1.5rem 4rem;display:block;position:relative}ul.stepper .step-title:after{content:attr(data-step-label);display:block;position:absolute;font-size:.8rem;color:#424242;font-weight:400}ul.stepper .step-title:hover{background-color:rgba(0,0,0,.06)}ul.stepper .step-label{font-size:.8rem;color:#424242;font-weight:400;position:absolute;top:40px;left:65px}ul.stepper .step-new-content{position:relative;display:none;width:inherit;margin-left:41px;margin-right:24px}ul.stepper>.step:not(:last-of-type):after{content:'';position:absolute;top:3.125rem;left:.8438rem;width:.0625rem;height:40%;height:calc(100% - 38px);background-color:rgba(0,0,0,.1);transition:.4s}ul.stepper>.step.active:not(:last-child):after{height:93%;height:calc(100% - 12px)}ul.stepper>.step[data-last=true]{margin-bottom:0}ul.stepper>.step[data-last=true]:after{height:0;width:0}ul.stepper .step-actions{display:-webkit-box;-webkit-box-pack:start}ul.stepper .step-actions .btn-flat:not(:last-child),ul.stepper .step-actions .btn-large:not(:last-child),ul.stepper .step-actions .btn:not(:last-child){margin-right:.3125rem}ul.stepper .step-new-content .row{margin-bottom:.4375rem}ul.stepper .validate{margin-bottom:0}ul.stepper.horizontal{position:relative;display:flex;justify-content:space-between;min-height:20rem;margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem;overflow:hidden}ul.stepper.horizontal:before{content:'';background-color:transparent;width:100%;min-height:5.25rem;position:absolute;left:-3px;border-top-left-radius:2px}ul.stepper.horizontal:first-child{margin-top:-2.7rem}ul.stepper.horizontal .step{position:static;margin:0;width:100%;display:flex;align-items:center;height:5.25rem!important}ul.stepper.horizontal .step:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal>.step:last-of-type,ul.stepper.horizontal>.step[data-last=true]{width:auto!important}ul.stepper.horizontal>.step.active:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}ul.stepper.horizontal .step.done .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f00c';font-size:1rem;background:#00c851}ul.stepper.horizontal .step.wrong .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f071';font-size:1.1rem;background-color:#ff3547}ul.stepper.horizontal .step-title{position:relative;line-height:5.25rem;height:5.25rem;margin:0;padding:0 1.5625rem 0 4.0625rem;display:inline-block;max-width:13.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0}ul.stepper.horizontal .step-label{position:absolute;top:20px;left:65px}ul.stepper.horizontal .step:before{content:none}ul.stepper.horizontal .step .step-title:before{position:absolute;top:1.7813rem;left:1.1875rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper.horizontal .step-title:after{top:.9375rem}ul.stepper.horizontal .step-new-content{position:absolute;height:calc(100% - 84px);top:6rem;left:0;width:100%;overflow-y:auto;overflow-x:hidden;margin:0;padding:1.25rem 1.25rem 4.75rem}ul.stepper.horizontal .step-actions{position:absolute;bottom:0;left:0;width:100%;padding:20px;flex-direction:row-reverse}ul.stepper.horizontal .step-actions .btn-flat:not(:last-child),ul.stepper.horizontal .step-actions .btn-large:not(:last-child),ul.stepper.horizontal .step-actions .btn:not(:last-child){margin-left:.3125rem;margin-right:0}ul.stepper.horizontal .step-actions,ul.stepper.horizontal .step-new-content{padding-left:2.5rem;padding-right:2.5rem}ul.stepper .md-form label{left:0}ul.stepper .step.done:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem}ul.stepper .step.wrong:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem}ul.stepper .step.active .step-title{font-weight:500}ul.stepper .step-new-content{overflow:hidden!important;height:auto!important}.card-body ul.stepper.horizontal li a:not(.picker__nav--prev):not(.picker__nav--next){padding:.84rem 2.14rem}.card-body ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}.card-body ul.stepper.horizontal .step.done .step-title:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem;background:#00c851}.card-body ul.stepper.horizontal .step.wrong .step-title:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem;background-color:#ff3547}.card-body ul.stepper.horizontal .step:before{content:none}@media (max-width:420px){ul.stepper.horizontal .step-title{padding-left:10px!important;padding-right:10px!important;line-height:9.25rem!important}}"]
                }] }
    ];
    /** @nocollapse */
    MdbStepperComponent.ctorParameters = function () { return [
        { type: WavesDirective },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStepperComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [MdbStepComponent,] }],
        stepTitles: [{ type: ViewChildren, args: ['stepTitle',] }],
        stepContents: [{ type: ViewChildren, args: ['stepContent',] }],
        container: [{ type: ViewChild, args: ['container', { static: true },] }],
        linear: [{ type: Input }],
        disableWaves: [{ type: Input }],
        vertical: [{ type: Input }],
        stepChange: [{ type: Output }]
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
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._vertical;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._destroy;
    /** @type {?} */
    MdbStepperComponent.prototype.isBrowser;
    /** @type {?} */
    MdbStepperComponent.prototype.horizontal;
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
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUVaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUVOLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQUE7SUFLQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHFDQUE2Qjs7SUFDN0IsMENBQXdCOztJQUN4Qix1Q0FBK0I7O0lBQy9CLDRDQUEwQjs7QUFHNUI7SUFpREUsNkJBQ1MsTUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsTUFBeUIsRUFDWixVQUFrQjtRQUhoQyxXQUFNLEdB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Vzs7O3dCQWxDcEIsZUFBZSxTQUFDLGdCQUFnQjs2QkFDaEMsWUFBWSxTQUFDLFdBQVc7K0JBQ3hCLFlBQVksU0FBQyxhQUFhOzRCQUMxQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFdkMsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBcUJMLE1BQU07O0lBaVFULDBCQUFDO0NBQUEsQUFoVEQsSUFnVEM7U0EvUlksbUJBQW1COzs7SUFFOUIsb0NBQXNFOztJQUN0RSx5Q0FBNkQ7O0lBQzdELDJDQUFpRTs7SUFDakUsd0NBQWdFOztJQUVoRSxxQ0FBd0I7O0lBQ3hCLDJDQUE4Qjs7Ozs7SUFvQjlCLHdDQUEwQjs7SUFFMUIseUNBQTBGOzs7OztJQVcxRix1Q0FBZ0Q7O0lBRWhELHdDQUFtQjs7SUFDbkIseUNBQWtCOzs7OztJQVVsQiwrQ0FBaUM7Ozs7O0lBQ2pDLDBDQUFzQzs7Ozs7SUFDdEMsOENBQTZCOztJQUU3QixnREFBZ0Q7O0lBQ2hELDBDQUE2Qjs7SUExQjNCLHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQTRCOzs7OztJQUM1QixxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZGJTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFdhdmVzRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZnJlZS93YXZlcy93YXZlcy1lZmZlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIFN0ZXBDaGFuZ2VFdmVudCB7XG4gIGFjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIGFjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBwcmV2aW91c1N0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIHByZXZpb3VzU3RlcEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdGVwcGVyJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHBlci1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc3RlcENvbnRlbnRUcmFuc2l0aW9uJywgW1xuICAgICAgc3RhdGUoJ3ByZXZpb3VzJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIGRpc3BsYXk6ICdub25lJyB9KSksXG4gICAgICBzdGF0ZSgnbmV4dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIGRpc3BsYXk6ICdub25lJyB9KSksXG4gICAgICBzdGF0ZSgnY3VycmVudCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnbm9uZScsIGRpc3BsYXk6ICdibG9jaycgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNjAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbV2F2ZXNEaXJlY3RpdmVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3RlcHBlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiU3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxNZGJTdGVwQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbignc3RlcFRpdGxlJykgc3RlcFRpdGxlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwQ29udGVudCcpIHN0ZXBDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbGluZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuYWN0aXZlU3RlcEluZGV4XSkge1xuICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdXG4gICAgICAgICAgLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4LCBzdGVwRWxDb250ZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJpcHBsZTogV2F2ZXNEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gIGhvcml6b250YWwgPSB0cnVlO1xuXG4gIGdldCBhY3RpdmVTdGVwSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleDtcbiAgfVxuXG4gIHNldCBhY3RpdmVTdGVwSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXA6IE1kYlN0ZXBDb21wb25lbnQ7XG4gIHByaXZhdGUgc3RlcFRleHRDb250ZW50ID0gJyc7XG5cbiAgc3RlcENoYW5nZVN1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHN0ZXBDaGFuZ2UkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgZ2V0U3RlcENoYW5nZSQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwQ2hhbmdlU3ViamVjdDtcbiAgfVxuXG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlciwgZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlV2F2ZXMpIHtcbiAgICAgIGNvbnN0IGNsaWNrZWRFbCA9IHRoaXMuc3RlcFRpdGxlcy50b0FycmF5KClbaW5kZXhdO1xuICAgICAgdGhpcy5yaXBwbGUuZWwgPSBjbGlja2VkRWw7XG4gICAgICB0aGlzLnJpcHBsZS5jbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNTdGVwVmFsaWQoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghc3RlcC5zdGVwRm9ybSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0gJiYgc3RlcC5zdGVwRm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uU3RhdGUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbmV4dEVsUG9zaXRpb24gPSBpbmRleCAtIHRoaXMuYWN0aXZlU3RlcEluZGV4O1xuICAgIGlmIChuZXh0RWxQb3NpdGlvbiA8IDApIHtcbiAgICAgIHJldHVybiAncHJldmlvdXMnO1xuICAgIH0gZWxzZSBpZiAobmV4dEVsUG9zaXRpb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2N1cnJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1kYlN0ZXBDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF07XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zZXROZXdBY3RpdmVTdGVwKHRoaXMuYWN0aXZlU3RlcEluZGV4ICsgMSk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggLSAxKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5saW5lYXIpIHtcbiAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXROZXdBY3RpdmVTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuX2FjdGl2ZVN0ZXA7XG4gICAgY29uc3QgY3VycmVudFN0ZXBJbmRleCA9IHRoaXMuX2FjdGl2ZVN0ZXBJbmRleDtcbiAgICBjb25zdCBuZXdTdGVwID0gdGhpcy5fZ2V0U3RlcEJ5SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IG5ld1N0ZXBJbmRleCA9IHRoaXMuc3RlcHNcbiAgICAgIC50b0FycmF5KClcbiAgICAgIC5maW5kSW5kZXgoKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpID0+IHN0ZXAgPT09IG5ld1N0ZXApO1xuXG4gICAgaWYgKHRoaXMubGluZWFyICYmICF0aGlzLl9pc05ld1N0ZXBMaW5lYXIoaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ld1N0ZXBJbmRleCA8IHRoaXMuX2FjdGl2ZVN0ZXBJbmRleCAmJiAhbmV3U3RlcC5lZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3NlcyhuZXdTdGVwKTtcblxuICAgIGlmICh0aGlzLmxpbmVhciAmJiBpbmRleCA+IHRoaXMuYWN0aXZlU3RlcEluZGV4KSB7XG4gICAgICBpZiAodGhpcy5faXNTdGVwVmFsaWQodGhpcy5fYWN0aXZlU3RlcCkpIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc0RvbmUoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKTtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcChpbmRleCk7XG5cbiAgICAgICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGFjdGl2ZVN0ZXA6IG5ld1N0ZXAsXG4gICAgICAgICAgYWN0aXZlU3RlcEluZGV4OiBuZXdTdGVwSW5kZXgsXG4gICAgICAgICAgcHJldmlvdXNTdGVwOiBjdXJyZW50U3RlcCxcbiAgICAgICAgICBwcmV2aW91c1N0ZXBJbmRleDogY3VycmVudFN0ZXBJbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrQ3VycmVudEFzV3JvbmcoKTtcbiAgICAgICAgdGhpcy5fbWFya1N0ZXBDb250cm9sc0FzRGlydHkodGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZlU3RlcEluZGV4KSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3Nlcyh0aGlzLl9hY3RpdmVTdGVwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuXG4gICAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGFjdGl2ZVN0ZXA6IG5ld1N0ZXAsXG4gICAgICAgIGFjdGl2ZVN0ZXBJbmRleDogbmV3U3RlcEluZGV4LFxuICAgICAgICBwcmV2aW91c1N0ZXA6IGN1cnJlbnRTdGVwLFxuICAgICAgICBwcmV2aW91c1N0ZXBJbmRleDogY3VycmVudFN0ZXBJbmRleCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNEb25lKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtDdXJyZW50QXNXcm9uZygpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzV3JvbmcgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNEb25lID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrU3RlcENvbnRyb2xzQXNEaXJ0eShzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzO1xuICAgIGlmIChzdGVwLnN0ZXBGb3JtLmNvbnRyb2xzKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29udHJvbHMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIHN0ZXAuaXNEb25lID0gZmFsc2U7XG4gICAgc3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9pc05ld1N0ZXBMaW5lYXIobmV3U3RlcEluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IDEgfHwgdGhpcy5hY3RpdmVTdGVwSW5kZXggLSBuZXdTdGVwSW5kZXggPT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodChpbmRleCk7XG4gICAgdGhpcy5hY3RpdmVTdGVwSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9hY3RpdmVTdGVwID0gdGhpcy5fZ2V0U3RlcEJ5SW5kZXgodGhpcy5hY3RpdmVTdGVwSW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ3VycmVudEFjdGl2ZVN0ZXAoKSB7XG4gICAgY29uc3QgY3VycmVudEFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoYWN0aXZlU3RlcCA9PiBhY3RpdmVTdGVwLmlzQWN0aXZlKTtcbiAgICBpZiAoY3VycmVudEFjdGl2ZVN0ZXApIHtcbiAgICAgIGN1cnJlbnRBY3RpdmVTdGVwLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBbGwoKSB7XG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBzdGVwLnJlc2V0KCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodChpbmRleDogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ob3Jpem9udGFsICYmICF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcEhlaWdodCA9IGhlaWdodFxuICAgICAgICAgID8gaGVpZ2h0ICsgNTBcbiAgICAgICAgICA6IHRoaXMuc3RlcENvbnRlbnRzLnRvQXJyYXkoKVtpbmRleF0ubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyA1MDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHN0ZXBIZWlnaHQgKyAncHgnKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFN0ZXBwZXJWYXJpYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9pbml0U3RlcHBlclZhcmlhdGlvbigpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoMCk7XG4gICAgdGhpcy5zdGVwQ2hhbmdlJCA9IGZyb20odGhpcy5zdGVwcy50b0FycmF5KCkpO1xuICAgIHRoaXMuZ2V0U3RlcENoYW5nZSQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuYWN0aXZlU3RlcEluZGV4XSkge1xuICAgICAgICAgIGNvbnN0IHN0ZXBFbENvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2FjdGl2ZVN0ZXBJbmRleF1cbiAgICAgICAgICAgIC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KHRoaXMuYWN0aXZlU3RlcEluZGV4LCBzdGVwRWxDb250ZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLnN0ZXBDb250ZW50cykge1xuICAgICAgY29uc3QgYWN0aXZlU3RlcCA9IHRoaXMuc3RlcENvbnRlbnRzXG4gICAgICAgIC5maWx0ZXIoKGVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGVsICYmIGluZGV4ID09PSB0aGlzLmFjdGl2ZVN0ZXBJbmRleClcbiAgICAgICAgLm1hcCgoZWw6IGFueSkgPT4gZWwubmF0aXZlRWxlbWVudClbMF07XG4gICAgICBpZiAoYWN0aXZlU3RlcC5pbm5lckhUTWwgIT09IHRoaXMuc3RlcFRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuc3RlcENoYW5nZVN1YmplY3QubmV4dChhY3RpdmVTdGVwLmlubmVySFRNTCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0ZXBUZXh0Q29udGVudCA9IGFjdGl2ZVN0ZXAuaW5uZXJIVE1MO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxufVxuIl19