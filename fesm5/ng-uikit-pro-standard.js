import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subject, Observable, timer } from 'rxjs';
import { catchError, map, mergeMap, distinctUntilChanged } from 'rxjs/operators';
import { RouterLinkWithHref, Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { __values, __extends, __spread, __decorate, __metadata, __assign } from 'tslib';
import { CommonModule, isPlatformBrowser, isPlatformServer, DOCUMENT as DOCUMENT$1 } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, NG_VALIDATORS, FormControl, NgModel } from '@angular/forms';
import { Component, ElementRef, Renderer2, Input, HostBinding, NgModule, Directive, HostListener, forwardRef, ViewEncapsulation, ViewChild, Injectable, Output, EventEmitter, Inject, PLATFORM_ID, ChangeDetectorRef, Injector, TemplateRef, NgZone, ComponentFactoryResolver, ApplicationRef, ChangeDetectionStrategy, ViewContainerRef, Attribute, NO_ERRORS_SCHEMA, RendererFactory2, ContentChildren, ContentChild, Host, InjectionToken, Optional, ViewChildren, isDevMode, SkipSelf, defineInjectable, SecurityContext } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MDBBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            var customClassArr = this.color.split(' ');
            customClassArr.forEach(function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            });
        }
    };
    MDBBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-badge',
                    template: "<span [attr.class]=\"class\">\n  <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MDBBadgeComponent.propDecorators = {
        default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
        primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
        success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
        info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
        warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
        danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
        pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
        color: [{ type: Input }],
        class: [{ type: Input }]
    };
    return MDBBadgeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MDBBadgeComponent],
                    exports: [MDBBadgeComponent]
                },] }
    ];
    return BadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBreadcrumbComponent = /** @class */ (function () {
    function MdbBreadcrumbComponent() {
    }
    MdbBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-breadcrumb',
                    template: "<ol class=\"breadcrumb list-inline list-unstyled {{customClass}} text-{{textTransform}}\">\n  <ng-content></ng-content>\n</ol>\n"
                }] }
    ];
    MdbBreadcrumbComponent.propDecorators = {
        customClass: [{ type: Input }],
        textTransform: [{ type: Input }]
    };
    return MdbBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBreadcrumbItemComponent = /** @class */ (function () {
    function MdbBreadcrumbItemComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MdbBreadcrumbItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    };
    MdbBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-breadcrumb-item',
                    template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n"
                }] }
    ];
    /** @nocollapse */
    MdbBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbBreadcrumbItemComponent.propDecorators = {
        fontWeight: [{ type: Input }]
    };
    return MdbBreadcrumbItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent],
                    exports: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent]
                },] }
    ];
    return BreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBtnDirective = /** @class */ (function () {
    function MdbBtnDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    /**
     * @return {?}
     */
    MdbBtnDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var colorClass = 'btn-' + this.color;
        /** @type {?} */
        var gradientClass = this.gradient + '-gradient';
        /** @type {?} */
        var outlineClass = 'btn-outline-' + this.color;
        /** @type {?} */
        var flatClass = 'btn-flat';
        /** @type {?} */
        var roundedClass = 'btn-rounded';
        /** @type {?} */
        var sizeClass = 'btn-' + this.size;
        /** @type {?} */
        var blockClass = 'btn-block';
        /** @type {?} */
        var floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, colorClass);
            this.renderer.addClass(this.el.nativeElement, outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, blockClass);
        }
        if (this.floating) {
            this.renderer.removeClass(this.el.nativeElement, 'btn');
            this.renderer.addClass(this.el.nativeElement, floatingClass);
        }
    };
    MdbBtnDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbBtn]'
                },] }
    ];
    /** @nocollapse */
    MdbBtnDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbBtnDirective.propDecorators = {
        color: [{ type: Input }],
        rounded: [{ type: Input }],
        gradient: [{ type: Input }],
        outline: [{ type: Input }],
        flat: [{ type: Input }],
        size: [{ type: Input }],
        block: [{ type: Input }],
        floating: [{ type: Input }]
    };
    return MdbBtnDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        this.state = state$$1;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: Input }],
        btnCheckboxFalse: [{ type: Input }],
        state: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    // @HostBinding('class.active')
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = 
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(function (element) {
                _this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(function (element) {
                _this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ButtonRadioDirective.propDecorators = {
        mdbRadio: [{ type: Input }],
        uncheckable: [{ type: Input }],
        value: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardFooterComponent = /** @class */ (function () {
    function MdbCardFooterComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-footer');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-footer',
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    MdbCardFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardFooterComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return MdbCardFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardTitleComponent = /** @class */ (function () {
    function MdbCardTitleComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._r.addClass(this._el.nativeElement, 'card-title');
    };
    MdbCardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-title',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    MdbCardTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return MdbCardTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardTextComponent = /** @class */ (function () {
    function MdbCardTextComponent() {
    }
    MdbCardTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-text',
                    template: "<p class=\"card-text {{class}} \">\n    <ng-content></ng-content>\n</p>"
                }] }
    ];
    MdbCardTextComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return MdbCardTextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardBodyComponent = /** @class */ (function () {
    function MdbCardBodyComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
        set: /**
         * @param {?} cascade
         * @return {?}
         */
        function (cascade) {
            if (cascade) {
                this._r.addClass(this._el.nativeElement, 'card-body-cascade');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-body');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-body',
                    template: "\n    <ng-content></ng-content>\n",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    MdbCardBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardBodyComponent.propDecorators = {
        class: [{ type: Input }],
        cascade: [{ type: Input }]
    };
    return MdbCardBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardComponent = /** @class */ (function () {
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        set: /**
         * @param {?} narrower
         * @return {?}
         */
        function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        set: /**
         * @param {?} reverse
         * @return {?}
         */
        function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        set: /**
         * @param {?} dark
         * @return {?}
         */
        function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
        if (this._el.nativeElement.parentElement.classList.contains('card-deck')) {
            this._r.addClass(this.card.nativeElement, 'w-100');
            this._r.addClass(this.card.nativeElement, 'mx-0');
        }
    };
    MdbCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card',
                    template: "<div class=\"card\" [ngClass]=\"{'card-cascade': cascade, 'wider': wider}\" #card>\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MdbCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardComponent.propDecorators = {
        class: [{ type: Input }],
        cascade: [{ type: Input }],
        wider: [{ type: Input }],
        card: [{ type: ViewChild, args: ['card',] }],
        narrower: [{ type: Input }],
        reverse: [{ type: Input }],
        dark: [{ type: Input }],
        bgColor: [{ type: Input }],
        borderColor: [{ type: Input }]
    };
    return MdbCardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardImageComponent = /** @class */ (function () {
    function MdbCardImageComponent() {
    }
    MdbCardImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-img',
                    template: "<img class=\"img-fluid\" [src]=\"src\" [alt]=\"alt\">"
                }] }
    ];
    MdbCardImageComponent.propDecorators = {
        src: [{ type: Input }],
        alt: [{ type: Input }]
    };
    return MdbCardImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardHeaderComponent = /** @class */ (function () {
    function MdbCardHeaderComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-header',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    MdbCardHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardHeaderComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return MdbCardHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardsFreeModule = /** @class */ (function () {
    function CardsFreeModule() {
    }
    /**
     * @return {?}
     */
    CardsFreeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CardsFreeModule, providers: [] };
    };
    CardsFreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        MdbCardComponent,
                        MdbCardBodyComponent,
                        MdbCardImageComponent,
                        MdbCardTextComponent,
                        MdbCardTitleComponent,
                        MdbCardFooterComponent,
                        MdbCardHeaderComponent
                    ],
                    exports: [
                        MdbCardComponent,
                        MdbCardBodyComponent,
                        MdbCardImageComponent,
                        MdbCardTextComponent,
                        MdbCardTitleComponent,
                        MdbCardFooterComponent,
                        MdbCardHeaderComponent
                    ]
                },] }
    ];
    return CardsFreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = typeof window !== 'undefined' && window || (/** @type {?} */ ({}));
/** @type {?} */
var document$1 = win.document;
/** @type {?} */
var location = win.location;
/** @type {?} */
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
/** @type {?} */
var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
var Event = win['Event'];
/** @type {?} */
var MouseEvent = win['MouseEvent'];
/** @type {?} */
var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
var EventTarget = win['EventTarget'];
/** @type {?} */
var History = win['History'];
/** @type {?} */
var Location = win['Location'];
/** @type {?} */
var EventListener = win['EventListener'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
LinkedList = /** @class */ (function () {
    function LinkedList() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @protected
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var outArray = [];
        /** @type {?} */
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    // public get(position: number): T {
    // public get(position: number): T {
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = 
    // public get(position: number): T {
    /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = {
            value: (/** @type {?} */ (value)),
            next: (/** @type {?} */ (undefined)),
            previous: (/** @type {?} */ (undefined))
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = 
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    // public pop(): T {
    // public pop(): T {
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = 
    // public pop(): T {
    /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    // public shift(): T {
    // public shift(): T {
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = 
    // public shift(): T {
    /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = /**
     * @return {?}
     */
    function () {
        return '[Linked List]';
    };
    // public find(fn: any): T {
    // public find(fn: any): T {
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = 
    // public find(fn: any): T {
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        // let result: T;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        // let result: number;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
    CarouselConfig.decorators = [
        { type: Injectable }
    ];
    return CarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0, NEXT: 1, PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, el, platformId, cdRef) {
        this.cdRef = cdRef;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        this.el = null;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        this.activeSlideChange = new EventEmitter(false);
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeSlideIndex) {
            setTimeout(function () {
                _this._select(_this.activeSlideIndex);
                _this.activeSlideChange.emit({ 'relatedTarget': _this.activeSlide });
            }, 0);
        }
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
            this.cdRef.markForCheck();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Prev', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @return {?}
     */
    function (goToIndex) {
        var _this = this;
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionNext = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    _this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }, 0);
            }
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                        _this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                        _this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    /** @type {?} */
                    var directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }, 700);
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * @return {?}
     */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        if (this.isBrowser) {
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.nextSlide();
                    }
                    else {
                        _this.pause();
                    }
                }, interval);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            /** @type {?} */
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-carousel',
                    template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n      <img  class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: Input }],
        noPause: [{ type: Input }],
        isControls: [{ type: Input, args: ['isControls',] }],
        keyboard: [{ type: Input }],
        class: [{ type: Input, args: ['class',] }],
        type: [{ type: Input, args: ['type',] }],
        animation: [{ type: Input, args: ['animation',] }],
        activeSlideIndex: [{ type: Input }],
        activeSlideChange: [{ type: Output }],
        activeSlide: [{ type: Input }],
        interval: [{ type: Input }],
        play: [{ type: HostListener, args: ['mouseleave',] }],
        pause: [{ type: HostListener, args: ['mouseenter',] }],
        keyboardControl: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        focus: [{ type: HostListener, args: ['click',] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel, el) {
        this.carousel = carousel;
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        // this.carousel = carousel;
        this.el = el;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-slide, mdb-carousel-item',
                    template: "\n  <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent },
        { type: ElementRef }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        animated: [{ type: HostBinding, args: ['class.animated',] }],
        directionNext: [{ type: HostBinding, args: ['class.carousel-item-next',] }],
        directionLeft: [{ type: HostBinding, args: ['class.carousel-item-left',] }],
        directionPrev: [{ type: HostBinding, args: ['class.carousel-item-prev',] }],
        directionRight: [{ type: HostBinding, args: ['class.carousel-item-right',] }],
        el: [{ type: HostBinding, args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent],
                    providers: [CarouselConfig]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) && !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = /**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        /** @type {?} */
        var datasets = this.getDatasets();
        /** @type {?} */
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        /** @type {?} */
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                /** @type {?} */
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    BaseChartDirective.propDecorators = {
        data: [{ type: Input }],
        datasets: [{ type: Input }],
        labels: [{ type: Input }],
        options: [{ type: Input }],
        chartType: [{ type: Input }],
        colors: [{ type: Input }],
        legend: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return BaseChartDirective;
}());
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] }
    ];
    return ChartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
/** @type {?} */
var defaultIdNumber = 0;
var MdbCheckboxChange = /** @class */ (function () {
    function MdbCheckboxChange() {
    }
    return MdbCheckboxChange;
}());
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        // Control Value Accessor Methods
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newChangeEvent = new MdbCheckboxChange();
            newChangeEvent.element = this;
            newChangeEvent.checked = this.checked;
            return newChangeEvent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggle();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.change.emit(this.changeEvent);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.checked = !!value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-checkbox',
                    template: "<div\n  [ngClass]=\"{ \n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input \n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{ \n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\"\n  >\n  <label\n    [ngClass]=\"{ \n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right', \n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>",
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        inputEl: [{ type: ViewChild, args: ['input',] }],
        class: [{ type: Input }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }],
        filledIn: [{ type: Input }],
        indeterminate: [{ type: Input }],
        disabled: [{ type: Input }],
        rounded: [{ type: Input }],
        checkboxPosition: [{ type: Input }],
        default: [{ type: Input }],
        inline: [{ type: Input }],
        tabIndex: [{ type: Input }],
        change: [{ type: Output }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CheckboxComponent
                    ],
                    exports: [
                        CheckboxComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ]
                },] }
    ];
    return CheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CollapseComponent.prototype.onExpandBodyDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'expanded') {
            this.shownBsCollapse.emit(this);
            this.expanded.emit(this);
        }
        else {
            this.hiddenBsCollapse.emit(this);
            this.collapsed.emit(this);
        }
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.show() : this.hide();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.initializeCollapseState = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.hide() : this.show();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeCollapseState();
    };
    CollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: '[mdbCollapse]',
                    exportAs: 'bs-collapse',
                    template: '<ng-content></ng-content>',
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px', visibility: 'hidden', overflow: 'hidden' })),
                            state('expanded', style({ height: '*', visibility: 'visible', overflow: 'visible' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return []; };
    CollapseComponent.propDecorators = {
        isCollapsed: [{ type: Input }],
        showBsCollapse: [{ type: Output }],
        shownBsCollapse: [{ type: Output }],
        hideBsCollapse: [{ type: Output }],
        hiddenBsCollapse: [{ type: Output }],
        collapsed: [{ type: Output }],
        expanded: [{ type: Output }],
        expandAnimationState: [{ type: HostBinding, args: ['@expandBody',] }],
        overflow: [{ type: HostBinding, args: ['style.overflow',] }],
        onExpandBodyDone: [{ type: HostListener, args: ['@expandBody.done', ['$event'],] }]
    };
    return CollapseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CollapseComponent],
                    exports: [CollapseComponent]
                },] }
    ];
    return CollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger$$1) { return trigger$$1.split(':'); })
        .map(function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    /** @type {?} */
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger$$1) {
        if (trigger$$1.open === trigger$$1.close) {
            listeners.push(renderer.listen(target, trigger$$1.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger$$1.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger$$1.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.shown = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.hidden = new EventEmitter();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = /**
     * @param {?} compType
     * @return {?}
     */
    function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = 
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = 
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            /** @type {?} */
            var injector = Injector.create({ providers: this._providers, parent: this._injector });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector((/** @type {?} */ (this.container)))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = /**
     * @param {?} listenOpts
     * @return {?}
     */
    function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = /**
     * @return {?}
     */
    function () {
        return this._innerComponent;
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    function (content, data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            /** @type {?} */
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            var modalContentInjector = Injector.create({ providers: this._providers, parent: this._injector });
            /** @type {?} */
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elPosition;
        /** @type {?} */
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            /** @type {?} */
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            /** @type {?} */
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elBcr = element.getBoundingClientRect();
        /** @type {?} */
        var viewportOffset = {
            top: window.pageYOffset - ((/** @type {?} */ (document.documentElement))).clientTop,
            left: window.pageXOffset - ((/** @type {?} */ (document.documentElement))).clientLeft
        };
        /** @type {?} */
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostElement, targetElement, placement, appendToBody) {
        /** @type {?} */
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        /** @type {?} */
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        /** @type {?} */
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        /** @type {?} */
        var targetElBCR = targetElement.getBoundingClientRect();
        /** @type {?} */
        var placementPrimary = placement.split(' ')[0] || 'top';
        /** @type {?} */
        var placementSecondary = placement.split(' ')[1] || 'center';
        /** @type {?} */
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    function (element, prop) { return ((/** @type {?} */ (window.getComputedStyle(element))))[prop]; };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var offsetParentEl = (/** @type {?} */ (element.offsetParent)) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = (/** @type {?} */ (offsetParentEl.offsetParent));
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    /** @type {?} */
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    //  public position(options: PositioningOptions): void {
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = 
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return (/** @type {?} */ (document.querySelector(element)));
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return (/** @type {?} */ (element));
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    return PositioningService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer2
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: NgZone },
        { type: Injector },
        { type: PositioningService },
        { type: ApplicationRef }
    ]; };
    return ComponentLoaderFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: Injectable }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-dropdown-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState }
    ]; };
    BsDropdownContainerComponent.propDecorators = {
        display: [{ type: HostBinding, args: ['style.display',] }],
        position: [{ type: HostBinding, args: ['style.position',] }]
    };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.shown = this._dropdown.shown;
        this.onHidden = this._dropdown.onHidden;
        this.hidden = this._dropdown.hidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        // const parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this.shown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        /** @type {?} */
        var parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
                this.hidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions and destroy dropdown
            for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState]
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: BsDropdownConfig },
        { type: BsDropdownState }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        dropup: [{ type: HostBinding, args: ['class.dropup',] }, { type: Input }],
        autoClose: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpen: [{ type: HostBinding, args: ['class.open',] }, { type: HostBinding, args: ['class.show',] }, { type: Input }],
        isOpenChange: [{ type: Output }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }]
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            // .subscribe((value: boolean) => this.isDisabled = value || null));
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle'
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: ElementRef }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        ariaHaspopup: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
        isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
        isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }],
        onEsc: [{ type: HostListener, args: ['keyup.esc',] }]
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fas = true;
        this.sizeClass = '';
    }
    /**
     * @return {?}
     */
    MdbIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
            this._renderer.addClass(this._el.nativeElement, 'prefix');
        }
        /** @type {?} */
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
    };
    MdbIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-icon',
                    template: "<i [ngClass]=\"{'fas': fas, 'far': far, 'fab': fab, 'fal': fal}\" class=\"fa-{{icon}} {{class}} {{sizeClass}}\"></i>\n"
                }] }
    ];
    /** @nocollapse */
    MdbIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbIconComponent.propDecorators = {
        icon: [{ type: Input }],
        size: [{ type: Input }],
        class: [{ type: Input }]
    };
    return MdbIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FalDirective = /** @class */ (function () {
    function FalDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fal');
    }
    FalDirective.decorators = [
        { type: Directive, args: [{ selector: '[fal], [light]' },] }
    ];
    /** @nocollapse */
    FalDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FarDirective = /** @class */ (function () {
    function FarDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'far');
    }
    FarDirective.decorators = [
        { type: Directive, args: [{ selector: '[far], [regular]' },] }
    ];
    /** @nocollapse */
    FarDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FasDirective = /** @class */ (function () {
    function FasDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fas');
    }
    FasDirective.decorators = [
        { type: Directive, args: [{ selector: '[fas], [solid]' },] }
    ];
    /** @nocollapse */
    FasDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FasDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDirective = /** @class */ (function () {
    function FabDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fab');
    }
    FabDirective.decorators = [
        { type: Directive, args: [{ selector: '[fab], [brands]' },] }
    ];
    /** @nocollapse */
    FabDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MdbIconComponent,
                        FabDirective,
                        FarDirective,
                        FasDirective,
                        FalDirective
                    ],
                    imports: [CommonModule],
                    exports: [
                        MdbIconComponent,
                        FabDirective,
                        FarDirective,
                        FasDirective,
                        FalDirective
                    ]
                },] }
    ];
    return IconsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultIdNumber$1 = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective() {
        this.id = "mdb-error-" + defaultIdNumber$1++;
        this.errorMsg = true;
        this.messageId = this.id;
    }
    MdbErrorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-error'
                },] }
    ];
    MdbErrorDirective.propDecorators = {
        id: [{ type: Input }],
        errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbErrorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultIdNumber$2 = 0;
var MdbSuccessDirective = /** @class */ (function () {
    function MdbSuccessDirective() {
        this.id = "mdb-success-" + defaultIdNumber$2++;
        this.successMsg = true;
        this.messageId = this.id;
    }
    MdbSuccessDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-success'
                },] }
    ];
    MdbSuccessDirective.propDecorators = {
        id: [{ type: Input }],
        successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbSuccessDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbValidateDirective = /** @class */ (function () {
    function MdbValidateDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    Object.defineProperty(MdbValidateDirective.prototype, "validate", {
        get: /**
         * @return {?}
         */
        function () { return this._validate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validate = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateSuccess", {
        get: /**
         * @return {?}
         */
        function () { return this._validateSuccess; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateSuccess = value;
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateError", {
        get: /**
         * @return {?}
         */
        function () { return this._validateError; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateError = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateSuccessClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateErrorClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSuccessClass();
        this.updateErrorClass();
    };
    MdbValidateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbValidate]'
                },] }
    ];
    /** @nocollapse */
    MdbValidateDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdbValidateDirective.propDecorators = {
        mdbValidate: [{ type: Input }],
        validate: [{ type: Input }],
        validateSuccess: [{ type: Input }],
        validateError: [{ type: Input }]
    };
    return MdbValidateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputUtilitiesModule = /** @class */ (function () {
    function InputUtilitiesModule() {
    }
    InputUtilitiesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                    exports: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                },] }
    ];
    return InputUtilitiesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var setToNullValue = null;
        // self value (e.g. retype password)
        /** @type {?} */
        var v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    EqualValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return EqualValidatorDirective; }), multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    EqualValidatorDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
    ]; };
    return EqualValidatorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbInputDirective = /** @class */ (function () {
    function MdbInputDirective(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = _elRef;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = /**
     * @return {?}
     */
    function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oniput = /**
     * @return {?}
     */
    function () {
        this.validationFunction();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputDirective.prototype.onkeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) {
        }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oncut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onpaste = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ondrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateErrorMsg = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateSuccessMsg = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
            console.log(error);
        }
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            /** @type {?} */
            var textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            if (!textWrong && this.errorMessage !== undefined) {
                this.wrongTextContainer.innerHTML = this.errorMessage;
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            /** @type {?} */
            var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            if (!textSuccess && this.successMessage !== undefined) {
                this.rightTextContainer.innerHTML = this.successMessage;
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            /** @type {?} */
            var newErrorMsg = changes.errorMessage.currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            /** @type {?} */
            var newSuccessMsg = changes.successMessage.currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched') || this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.validationFunction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this._elRef.nativeElement.classList.contains('ng-invalid')) {
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-success');
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-danger');
            }
            if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-danger');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-success');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) {
            }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this._renderer.removeClass(this.elLabel, 'active');
        } */
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.delayedResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) {
            }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) {
            }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) ;
        }
    };
    MdbInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInputDirective]'
                },] }
    ];
    /** @nocollapse */
    MdbInputDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbInputDirective.propDecorators = {
        mdbInputDirective: [{ type: Input, args: ['mdbInputDirective',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        customRegex: [{ type: Input, args: ['customRegex',] }],
        mdbValidate: [{ type: Input, args: ['mdbValidate',] }],
        validateSuccess: [{ type: Input, args: ['validateSuccess',] }],
        validateError: [{ type: Input, args: ['validateError',] }],
        focusCheckbox: [{ type: Input, args: ['focusCheckbox',] }],
        focusRadio: [{ type: Input, args: ['focusRadio',] }],
        errorMessage: [{ type: Input }],
        successMessage: [{ type: Input }],
        onfocus: [{ type: HostListener, args: ['focus',] }],
        onblur: [{ type: HostListener, args: ['blur',] }],
        onchange: [{ type: HostListener, args: ['change',] }],
        oniput: [{ type: HostListener, args: ['input',] }],
        onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        oncut: [{ type: HostListener, args: ['cut',] }],
        onpaste: [{ type: HostListener, args: ['paste',] }],
        ondrop: [{ type: HostListener, args: ['drop',] }]
    };
    return MdbInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbInput = /** @class */ (function () {
    function MdbInput(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbInput.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onblur = /**
     * @return {?}
     */
    function () {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onchange = /**
     * @return {?}
     */
    function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.oniput = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInput.prototype.onkeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.oncut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onpaste = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ondrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.delayedResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.initComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInput.prototype.checkValue = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    MdbInput.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInput]'
                },] }
    ];
    /** @nocollapse */
    MdbInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbInput.propDecorators = {
        placeholder: [{ type: Input, args: ['placeholder',] }],
        focusCheckbox: [{ type: Input, args: ['focusCheckbox',] }],
        focusRadio: [{ type: Input, args: ['focusRadio',] }],
        onfocus: [{ type: HostListener, args: ['focus',] }],
        onblur: [{ type: HostListener, args: ['blur',] }],
        onchange: [{ type: HostListener, args: ['change',] }],
        oniput: [{ type: HostListener, args: ['input',] }],
        onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        oncut: [{ type: HostListener, args: ['cut',] }],
        onpaste: [{ type: HostListener, args: ['paste',] }],
        ondrop: [{ type: HostListener, args: ['drop',] }]
    };
    return MdbInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: InputsModule, providers: [] };
    };
    InputsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                    exports: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return InputsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: Injectable }
    ];
    return MDBModalRef;
}());
/** @type {?} */
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: {}
};
/** @type {?} */
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.removeClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        else {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-modal-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ModalBackdropComponent.propDecorators = {
        classNameBackDrop: [{ type: HostBinding, args: ['class.modal-backdrop',] }]
    };
    return ModalBackdropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TRANSITION_DURATION = 300;
/** @type {?} */
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new EventEmitter();
        this.open = new EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new EventEmitter();
        this.opened = new EventEmitter();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new EventEmitter();
        this.close = new EventEmitter();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new EventEmitter();
        this.closed = new EventEmitter();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        // public get config(): ModalOptions {
        get: 
        // public get config(): ModalOptions {
        /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    // todo: consider preventing default and stopping propagation
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = 
    // todo: consider preventing default and stopping propagation
    /**
     * @return {?}
     */
    function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        this.open.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        this.close.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        /** @type {?} */
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
            _this.opened.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
            _this.closed.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    // todo: original show was calling a callback when done, but we can use promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = 
    // todo: original show was calling a callback when done, but we can use promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
            if (!otherOpenedModals.length) {
                return;
            }
            //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
            otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
        }
        catch (error) { }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbModal]',
                    exportAs: 'mdb-modal, mdbModal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ComponentLoaderFactory }
    ]; };
    ModalDirective.propDecorators = {
        config: [{ type: Input }],
        onShow: [{ type: Output }],
        open: [{ type: Output }],
        onShown: [{ type: Output }],
        opened: [{ type: Output }],
        onHide: [{ type: Output }],
        close: [{ type: Output }],
        onHidden: [{ type: Output }],
        closed: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onEsc: [{ type: HostListener, args: ['keydown.esc',] }]
    };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var msConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.modalClass = 'modal';
        this.tabindex = -1;
        this.role = 'dialog';
        this.modal = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this.config.keyboard &&
            this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.animated) {
            this._renderer.addClass(this._element.nativeElement, 'fade');
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, ClassName.OPEN);
        }
        if (this.config.containerClass) {
            this.updateContainerClass();
        }
        if (this.config.scroll) {
            this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'auto');
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.updateContainerClass = /**
     * @return {?}
     */
    function () {
        if (this.config.containerClass) {
            /** @type {?} */
            var containerClasses = this.config.containerClass;
            /** @type {?} */
            var classArr = containerClasses.split(' ');
            for (var i = 0; i < classArr.length; i++) {
                this._renderer.addClass(this._element.nativeElement, classArr[i]);
            }
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-modal-container',
                    template: "<div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ModalContainerComponent.propDecorators = {
        tabindex: [{ type: HostBinding, args: ['tabindex',] }],
        role: [{ type: HostBinding, args: ['role',] }],
        modal: [{ type: HostBinding, args: ['class.modal',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onEsc: [{ type: HostListener, args: ['window:keydown.esc',] }]
    };
    return ModalContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
        msConfig.serviceInstance = this;
    }
    /** Shows a modal */
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, data: this.config.data });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @protected
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = /**
     * @protected
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    MDBModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBModalService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ComponentLoaderFactory }
    ]; };
    return MDBModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        this.navbarLinkClicks.next();
    };
    NavbarService.decorators = [
        { type: Injectable }
    ];
    return NavbarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350; // ms
        // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.addTogglerIconClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.containerInside) {
            /** @type {?} */
            var childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach(function (child) {
                _this.renderer.appendChild(_this.navbar.nativeElement, child);
                _this.container.nativeElement.remove();
            });
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-navbar',
                    template: "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button #toggler class=\"navbar-toggler\" type=\"button\" (click)=\"toggle(); $event.preventDefault()\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>"
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NavbarService }
    ]; };
    NavbarComponent.propDecorators = {
        iconBackground: [{ type: Input }],
        SideClass: [{ type: Input }],
        containerInside: [{ type: Input }],
        el: [{ type: ViewChild, args: ['navbar',] }],
        mobile: [{ type: ViewChild, args: ['mobile',] }],
        navbar: [{ type: ViewChild, args: ['nav',] }],
        container: [{ type: ViewChild, args: ['container',] }],
        toggler: [{ type: ViewChild, args: ['toggler',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        onScroll: [{ type: HostListener, args: ['document:scroll',] }]
    };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    LinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'links',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    LinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    LinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return LinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'logo, mdb-navbar-brand',
                    template: "\n  <ng-content></ng-content>\n  "
                }] }
    ];
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    NavlinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navlinks',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    NavlinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return NavlinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                    exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                    providers: [NavbarService]
                },] }
    ];
    return NavbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    PopoverConfig.decorators = [
        { type: Injectable }
    ];
    return PopoverConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    PopoverContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-popover-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: Input }],
        title: [{ type: Input }],
        show: [{ type: HostBinding, args: ['class.show',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return PopoverContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.shown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        this.hidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            return this._popover.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: PopoverConfig },
        { type: ComponentLoaderFactory }
    ]; };
    PopoverDirective.propDecorators = {
        mdbPopover: [{ type: Input }],
        mdbPopoverHeader: [{ type: Input }],
        popoverTitle: [{ type: Input }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        isOpen: [{ type: Input }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onblur: [{ type: HostListener, args: ['window:click',] }]
    };
    return PopoverDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    PopoverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] }
    ];
    return PopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
    }
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
        if (this.stickyHeader) {
            /** @type {?} */
            var tableHead = this.el.nativeElement.querySelector('thead');
            this.renderer.addClass(tableHead, 'sticky-top');
            if (this.stickyHeaderBgColor) {
                this.renderer.setStyle(tableHead, 'background-color', this.stickyHeaderBgColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'background-color', '#f2f2f2');
            }
            if (this.stickyHeaderTextColor) {
                this.renderer.setStyle(tableHead, 'color', this.stickyHeaderTextColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'color', '#000000');
            }
        }
    };
    MdbTableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTable]'
                },] }
    ];
    /** @nocollapse */
    MdbTableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableDirective.propDecorators = {
        striped: [{ type: Input }, { type: HostBinding, args: ['class.table-striped',] }],
        bordered: [{ type: Input }, { type: HostBinding, args: ['class.table-bordered',] }],
        borderless: [{ type: Input }, { type: HostBinding, args: ['class.table-borderless',] }],
        hover: [{ type: Input }, { type: HostBinding, args: ['class.table-hover',] }],
        small: [{ type: Input }, { type: HostBinding, args: ['class.table-sm',] }],
        responsive: [{ type: Input }, { type: HostBinding, args: ['class.table-responsive',] }],
        stickyHeader: [{ type: Input }],
        stickyHeaderBgColor: [{ type: Input }],
        stickyHeaderTextColor: [{ type: Input }]
    };
    return MdbTableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective() {
        // tslint:disable-next-line:no-input-rename
        this.dataSource = [];
        this.sorted = false;
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.sortBy.toString().toLowerCase());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.dataSource.sort(function (a, b) {
            if (a[key] < b[key]) {
                return _this.sorted ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return _this.sorted ? -1 : 1;
            }
            return 0;
        });
        this.sorted = !this.sorted;
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]'
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return []; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableScrollDirective = /** @class */ (function () {
    function MdbTableScrollDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.scrollY = false;
        this.maxHeight = null;
        this.scrollX = false;
        this.maxWidth = null;
    }
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalAndVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @return {?}
     */
    MdbTableScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode;
        /** @type {?} */
        var tableWrapper = this.renderer.createElement('div');
        if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
            this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollY && this.maxHeight) {
            this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollX && this.maxWidth) {
            this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
        }
        this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
        this.renderer.appendChild(tableWrapper, this.el.nativeElement);
    };
    MdbTableScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableScroll]'
                },] }
    ];
    /** @nocollapse */
    MdbTableScrollDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdbTableScrollDirective.propDecorators = {
        scrollY: [{ type: Input }],
        maxHeight: [{ type: Input }],
        scrollX: [{ type: Input }],
        maxWidth: [{ type: Input }]
    };
    return MdbTableScrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableRowDirective = /** @class */ (function () {
    function MdbTableRowDirective(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    };
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.rowRemoved.emit({ removed: true });
    };
    MdbTableRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableRow]'
                },] }
    ];
    /** @nocollapse */
    MdbTableRowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbTableRowDirective.propDecorators = {
        rowCreated: [{ type: Output }],
        rowRemoved: [{ type: Output }]
    };
    return MdbTableRowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableService = /** @class */ (function () {
    function MdbTableService() {
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    MdbTableService.prototype.addRow = /**
     * @param {?} newRow
     * @return {?}
     */
    function (newRow) {
        this.getDataSource().push(newRow);
    };
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    MdbTableService.prototype.addRowAfter = /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbTableService.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getDataSource().splice(index, 1);
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.rowRemoved = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowRemoved = Observable.create(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.removeLastRow = /**
     * @return {?}
     */
    function () {
        this.getDataSource().pop();
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.getDataSource = /**
     * @return {?}
     */
    function () {
        return this._dataSource;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTableService.prototype.setDataSource = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.dataSourceChange = /**
     * @return {?}
     */
    function () {
        return this._dataSourceChanged;
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.filterLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                return (obj[key].toLowerCase()).includes(searchKey);
            });
        });
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey);
        }
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchDataObservable = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        var _this = this;
        /** @type {?} */
        var observable = Observable.create(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MdbTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ MdbTableService.ngInjectableDef = defineInjectable({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
    return MdbTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTablePaginationComponent = /** @class */ (function () {
    function MdbTablePaginationComponent(tableService, cdRef) {
        var _this = this;
        this.tableService = tableService;
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.paginationAlign = '';
        this.hideDescription = false;
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new Subject();
        this.nextPageClick = new EventEmitter();
        this.previousPageClick = new EventEmitter();
        this.tableService.dataSourceChange().subscribe(function (data) {
            _this.allItemsLength = data.length;
            _this.lastVisibleItemIndex = data.length;
            _this.calculateFirstItemIndex();
            _this.calculateLastItemIndex();
            _this.disableNextButton(data);
            if (_this.maxVisibleItems > _this.allItemsLength) {
                _this.maxVisibleItems = _this.allItemsLength;
            }
        });
    }
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.allItemsLength = this.tableService.getDataSource().length;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        else {
            this.lastVisibleItemIndex = this.maxVisibleItems;
        }
        if (searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.setMaxVisibleItemsNumberTo = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.searchTextObs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var observable = Observable.create(function (observer) {
            observer.next(_this.searchText);
        });
        return observable;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.disableNextButton = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateFirstItemIndex = /**
     * @return {?}
     */
    function () {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateLastItemIndex = /**
     * @return {?}
     */
    function () {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && (this.lastItemIndex > this.searchDataSource.length)) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
            this.lastVisibleItemIndex = this.tableService.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.paginationChange = /**
     * @return {?}
     */
    function () {
        return this.pagination;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateHowManyPagesShouldBe = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.tableService.getDataSource().length / this.maxVisibleItems);
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = Observable.create(function (observer) {
            observer.next(_this.firstItemIndex);
        });
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = Observable.create(function (observer) {
            observer.next(_this.lastVisibleItemIndex);
        });
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfNextShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.searchDataSource && (this.lastVisibleItemIndex === this.searchDataSource.length)) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfPreviousShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.activePageNumber === 1) {
            return true;
        }
    };
    MdbTablePaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-table-pagination',
                    template: "<!--Pagination -->\n<nav>\n  <ul class=\"pagination pagination-circle pg-blue d-flex flex-center\" [ngClass]=\"{\n      'justify-content-end': paginationAlign =='end',\n      'justify-content-start': paginationAlign =='start'\n    }\">\n\n    <p *ngIf=\"!hideDescription\">{{firstItemIndex}} - {{lastVisibleItemIndex}} of {{allItemsLength}}</p>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfPreviousShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfNextShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n\n  </ul>\n</nav>\n<!--/Pagination -->\n"
                }] }
    ];
    /** @nocollapse */
    MdbTablePaginationComponent.ctorParameters = function () { return [
        { type: MdbTableService },
        { type: ChangeDetectorRef }
    ]; };
    MdbTablePaginationComponent.propDecorators = {
        searchPagination: [{ type: Input }],
        searchDataSource: [{ type: Input }],
        paginationAlign: [{ type: Input }],
        hideDescription: [{ type: Input }],
        nextPageClick: [{ type: Output }],
        previousPageClick: [{ type: Output }]
    };
    return MdbTablePaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective
                    ],
                    exports: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective
                    ],
                    entryComponents: [MdbTablePaginationComponent],
                    providers: [MdbTableService]
                },] }
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: Injectable }
    ];
    return TooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, r) {
        this.r = r;
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        setTimeout(function () {
            /** @type {?} */
            var arrowClassList = _this.tooltipArrow.nativeElement.classList;
            /** @type {?} */
            var tooltipHeight = _this.tooltipInner.nativeElement.clientHeight;
            if (arrowClassList.contains('top')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
            }
            else if (arrowClassList.contains('left')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
            else if (arrowClassList.contains('right')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
        }, 0);
    };
    TooltipContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tooltip-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                    },
                    template: "\n  <div #tooltipArrow class=\"tooltip-arrow\" [ngClass]=\"{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}\"></div>\n  <div #tooltipInner class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig },
        { type: Renderer2 }
    ]; };
    TooltipContainerComponent.propDecorators = {
        tooltipInner: [{ type: ViewChild, args: ['tooltipInner',] }],
        tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow',] }],
        show: [{ type: HostBinding, args: ['class.show',] }]
    };
    return TooltipContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/**
 * @return {?}
 */
function OnChange() {
    /** @type {?} */
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: /**
             * @return {?}
             */
            function () { return this[_key]; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.xxx = _viewContainerRef;
        this.yyy = cis;
        this.isBrowser = isPlatformBrowser((this.platformId));
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.changePositionIfNotFit = /**
     * @return {?}
     */
    function () {
        if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < (parseInt(this.customHeight, 10) + 16)) {
            this.placement = 'bottom';
        }
        if (this.placement === 'bottom' && ((/** @type {?} */ (this.getBottomOffset()))) < (parseInt(this.customHeight, 10) + 32)) {
            this.placement = 'top';
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getBottomOffset = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        if (!this.customHeight) {
            /** @type {?} */
            var elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
            if (this.placement === 'top' && elPosition.top < 40) {
                this.placement = 'bottom';
            }
            if (this.placement === 'bottom' && (/** @type {?} */ (this.getBottomOffset())) < 60) {
                this.placement = 'top';
            }
        }
        else if (this.customHeight) {
            this.changePositionIfNotFit();
        }
        /** @type {?} */
        var showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () {
                showTooltip();
            }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTooltip]',
                    exportAs: 'mdb-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    TooltipDirective.propDecorators = {
        mdbTooltip: [{ type: Input }],
        tooltipChange: [{ type: Output }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: Input }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }],
        delay: [{ type: Input }],
        customHeight: [{ type: Input }],
        fadeDuration: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onblur: [{ type: HostListener, args: ['window:click',] }]
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    TooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TooltipDirective, TooltipContainerComponent],
                    exports: [TooltipDirective],
                    entryComponents: [TooltipContainerComponent]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    WavesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbWavesEffect]'
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: WavesModule, providers: [] };
    };
    WavesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [WavesDirective],
                    exports: [WavesDirective]
                },] }
    ];
    return WavesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES = [
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
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
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
    return MDBRootModule;
}());
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return MDBBootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent() {
        this.height = '0';
        this.expandAnimationState = 'collapsed';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemBodyComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        var _this = this;
        setTimeout(function () {
            collapsed ? _this.expandAnimationState = 'collapsed' : _this.expandAnimationState = 'expanded';
        }, 0);
    };
    /**
     * @param {?} activeUrl
     * @return {?}
     */
    SBItemBodyComponent.prototype.openSidenavOnActiveLink = /**
     * @param {?} activeUrl
     * @return {?}
     */
    function (activeUrl) {
        var _this = this;
        /** @type {?} */
        var activeLink = this.routerLinks.find(function (link) {
            return link.href === activeUrl;
        });
        if (activeLink) {
            setTimeout(function () {
                _this.expandAnimationState = 'expanded';
            }, 40);
        }
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.openSidenavOnActiveLink(win.location.pathname);
    };
    SBItemBodyComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemBody',
                    selector: 'mdb-item-body, mdb-accordion-item-body',
                    template: "<div #body class=\"sb-item-body\" [style.height]=\"height\" [@expandBody]=\"expandAnimationState\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>",
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                            state('expanded', style({ height: '*', visibility: 'visible' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    SBItemBodyComponent.ctorParameters = function () { return []; };
    SBItemBodyComponent.propDecorators = {
        customClass: [{ type: Input }],
        routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
        bodyEl: [{ type: ViewChild, args: ['body',] }]
    };
    return SBItemBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var sbConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent() {
        this.collapsed = true;
        this.squeezebox = sbConfig.serviceInstance;
    }
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.body !== undefined) {
            setTimeout(function () {
                _this.collapsed ? _this.body.expandAnimationState = 'collapsed' : _this.body.expandAnimationState = 'expanded';
            }, 0);
            this.body.toggle(this.collapsed);
        }
    };
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.body && _this.body.expandAnimationState === 'expanded') {
                _this.collapsed = false;
            }
        }, 40);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.applyToggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
        }
    };
    SBItemComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItem',
                    selector: 'mdb-item, mdb-accordion-item',
                    template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SBItemComponent.ctorParameters = function () { return []; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
    };
    return SBItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SqueezeBoxComponent = /** @class */ (function () {
    function SqueezeBoxComponent() {
        this.multiple = true;
        sbConfig.serviceInstance = this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SqueezeBoxComponent.prototype.didItemToggled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    };
    SqueezeBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'squeezebox',
                    selector: 'mdb-squeezebox, mdb-accordion',
                    template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SqueezeBoxComponent.ctorParameters = function () { return []; };
    SqueezeBoxComponent.propDecorators = {
        multiple: [{ type: Input }],
        items: [{ type: ContentChildren, args: [forwardRef(function () { return SBItemComponent; }),] }]
    };
    return SqueezeBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.toggleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
        }
    };
    SBItemHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemHead',
                    selector: 'mdb-item-head, mdb-accordion-item-head',
                    template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\">\n  <a role=\"button\">\n    <h5 class=\"mb-0\">\n    <ng-content></ng-content>\n    <i *ngIf=\"indicator\" class=\"fas fa-angle-down rotate-icon\"></i>\n    </h5>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent }
    ]; };
    SBItemHeadComponent.propDecorators = {
        isDisabled: [{ type: Input }],
        customClass: [{ type: Input }],
        indicator: [{ type: Input }]
    };
    return SBItemHeadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SQUEEZEBOX_COMPONENTS = [SqueezeBoxComponent, SBItemComponent, SBItemHeadComponent, SBItemBodyComponent];
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SQUEEZEBOX_COMPONENTS],
                    exports: [SQUEEZEBOX_COMPONENTS]
                },] }
    ];
    return AccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    // setAttachedHost(host: BasePortalHost) {
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    // setAttachedHost(host: BasePortalHost) {
    ComponentPortal.prototype.setAttachedHost = /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    // setAttachedHost(host: BasePortalHost) {
    function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var  /**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            // this._disposeFn = null;
            this._disposeFn = this.setToNullValue;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var /**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
DomPortalHost = /** @class */ (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    DomPortalHost.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        var _this = this;
        /** @type {?} */
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
    };
    return DomPortalHost;
}(BasePortalHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    OverlayRef.prototype.attach = /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var  /**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
OverlayContainer = /** @class */ (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @private
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    /**
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    Overlay.prototype.getPaneElement = /**
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    function (positionClass, overlayContainer) {
        /** @type {?} */
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @private
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @private
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    return Overlay;
}());
/**
 * Providers for Overlay and its related injectables.
 * @type {?}
 */
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayContainer,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbToastContainer]',
                    exportAs: 'mdb-toast-container',
                },] }
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ToastContainerDirective;
}());
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    /**
     * @return {?}
     */
    ToastContainerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    ToastContainerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [ToastContainerDirective],
                    declarations: [ToastContainerDirective],
                },] }
    ];
    return ToastContainerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit
/**
 * Remove warning message from angular-cli
 */
var  /**
 * Remove warning message from angular-cli
 */
GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
/**
 * Everything a toast needs to launch
 */
var  /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
/** @type {?} */
var tsConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastPackage, appRef) {
        var _this = this;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = 'inactive';
        this.toastService = tsConfig.serviceInstance;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastComponent.prototype.activateToast = /**
     * activates toast and sets timeout
     * @return {?}
     */
    function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastComponent.prototype.updateProgress = /**
     * updates progress bar width
     * @return {?}
     */
    function () {
        if (this.width === 0) {
            return;
        }
        /** @type {?} */
        var now = new Date().getTime();
        /** @type {?} */
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastComponent.prototype.remove = /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastService.remove(_this.toastPackage.toastId);
        }, 300);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.onActionClick = /**
     * @return {?}
     */
    function () {
        this.toastPackage.triggerAction();
        this.remove();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tapToast = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.stickAround = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.delayedHideToast = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-toast-component',
                    template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"md-toast-close-button\">\n  &times;\n</button>\n<div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n  {{title}}\n</div>\n<div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n</div>\n<div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n  {{message}}\n</div>\n<button *ngIf=\"options.actionButton\" class=\"btn btn-block md-toast-action mt-2\" (click)=\"onActionClick()\">{{ options.actionButton }}</button>\n<div *ngIf=\"options.progressBar\">\n  <div class=\"md-toast-progress\" [style.width.%]=\"width\"></div>\n</div>\n",
                    animations: [
                        trigger('flyInOut', [
                            state('inactive', style({
                                display: 'none',
                                opacity: 0
                            })),
                            state('active', style({ opacity: .5 })),
                            state('removed', style({ opacity: 0 })),
                            transition('inactive => active', animate('300ms ease-in')),
                            transition('active => removed', animate('300ms ease-in')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToastPackage },
        { type: ApplicationRef }
    ]; };
    ToastComponent.propDecorators = {
        toastClasses: [{ type: HostBinding, args: ['class',] }],
        state: [{ type: HostBinding, args: ['@flyInOut',] }],
        tapToast: [{ type: HostListener, args: ['click',] }],
        stickAround: [{ type: HostListener, args: ['mouseenter',] }],
        delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return ToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
var  /**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
ToastRef = /** @class */ (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new Subject();
        this._activate = new Subject();
        this._manualClose = new Subject();
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClose = /**
     * @return {?}
     */
    function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClosed = /**
     * @return {?}
     */
    function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     */
    /**
     * Close the toast.
     * @return {?}
     */
    ToastRef.prototype.close = /**
     * Close the toast.
     * @return {?}
     */
    function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    ToastRef.prototype.afterClosed = /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isInactive = /**
     * @return {?}
     */
    function () {
        return this._activate.isStopped;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.activate = /**
     * @return {?}
     */
    function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    ToastRef.prototype.afterActivate = /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
var  /**
 * Custom injector type specifically for instantiating components with a toast.
 */
ToastInjector = /** @class */ (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ToastInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TOAST_CONFIG = new InjectionToken('ToastConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastService = /** @class */ (function () {
    function ToastService(toastConfig, overlay, _injector, sanitizer) {
        this.toastConfig = toastConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        tsConfig.serviceInstance = this;
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return toastConfig && source !== undefined ? source : defaultValue;
        }
        this.toastConfig = this.applyConfig(toastConfig);
        // Global
        this.toastConfig.maxOpened = use(this.toastConfig.maxOpened, 0);
        this.toastConfig.autoDismiss = use(this.toastConfig.autoDismiss, false);
        this.toastConfig.newestOnTop = use(this.toastConfig.newestOnTop, true);
        this.toastConfig.preventDuplicates = use(this.toastConfig.preventDuplicates, false);
        if (!this.toastConfig.iconClasses) {
            this.toastConfig.iconClasses = {};
        }
        this.toastConfig.iconClasses.error = this.toastConfig.iconClasses.error || 'md-toast-error';
        this.toastConfig.iconClasses.info = this.toastConfig.iconClasses.info || 'md-toast-info';
        this.toastConfig.iconClasses.success = this.toastConfig.iconClasses.success || 'md-toast-success';
        this.toastConfig.iconClasses.warning = this.toastConfig.iconClasses.warning || 'md-toast-warning';
        // Individual
        this.toastConfig.timeOut = use(this.toastConfig.timeOut, 5000);
        this.toastConfig.closeButton = use(this.toastConfig.closeButton, false);
        this.toastConfig.extendedTimeOut = use(this.toastConfig.extendedTimeOut, 1000);
        this.toastConfig.progressBar = use(this.toastConfig.progressBar, false);
        this.toastConfig.enableHtml = use(this.toastConfig.enableHtml, false);
        this.toastConfig.toastClass = use(this.toastConfig.toastClass, 'md-toast');
        this.toastConfig.positionClass = use(this.toastConfig.positionClass, 'md-toast-top-right');
        this.toastConfig.titleClass = use(this.toastConfig.titleClass, 'md-toast-title');
        this.toastConfig.messageClass = use(this.toastConfig.messageClass, 'md-toast-message');
        this.toastConfig.tapToDismiss = use(this.toastConfig.tapToDismiss, true);
        this.toastConfig.toastComponent = use(this.toastConfig.toastComponent, ToastComponent);
        this.toastConfig.onActivateTick = use(this.toastConfig.onActivateTick, false);
        this.toastConfig.actionButton = use(this.toastConfig.actionButton, '');
    }
    /** show successful toast */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    ToastService.prototype.show = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    // success(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.success = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    // error(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.error = /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    // info(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.info = /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.warning = /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastService.prototype.clear = /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    function (toastId) {
        var e_1, _a;
        // Call every toastRef manualClose function
        /** @type {?} */
        var toast;
        try {
            for (var _b = __values(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                toast = _c.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype.remove = /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        // const found = this._findToast(toastId);
        /** @type {?} */
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastConfig.maxOpened && this.toasts[this.currentlyActive]) {
            // const p = this.toasts[this.currentlyActive].toastRef;
            /** @type {?} */
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.isDuplicate = /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /** create a clone of global config and apply individual settings */
    /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.applyConfig = /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    function (override) {
        if (override === void 0) { override = {}; }
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        /** @type {?} */
        var current = __assign({}, this.toastConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        current.actionButton = use(override.actionButton, current.actionButton);
        return current;
    };
    /**
     * Find toast object by id
     */
    /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype._findToast = /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     */
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastService.prototype._buildNotification = /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    function (toastType, message, title, config) {
        var _this = this;
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        /** @type {?} */
        var keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        /** @type {?} */
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        /** @type {?} */
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        /** @type {?} */
        var toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        /** @type {?} */
        var ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        /** @type {?} */
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        /** @type {?} */
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
        { type: Overlay },
        { type: Injector },
        { type: DomSanitizer }
    ]; };
    return ToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastModule = /** @class */ (function () {
    function ToastModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    };
    ToastModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ToastComponent],
                    declarations: [ToastComponent],
                    entryComponents: [ToastComponent],
                },] }
    ];
    /** @nocollapse */
    ToastModule.ctorParameters = function () { return [
        { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// SideNav
/** @type {?} */
var slideIn = trigger('slideIn', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
var fadeIn = trigger('fadeIn', [
    state('inactive', style({ opacity: 0 })),
    state('active', style({ opacity: 1 })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
var slideOut = trigger('slideOut', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
/** @type {?} */
var flipState = trigger('flipState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Rotating animation animation
/** @type {?} */
var turnState = trigger('turnState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Social reveal animation
/** @type {?} */
var iconsState = trigger('iconsState', [
    state('isactive', style({ visibility: 'visible', transform: 'translate(-6%)' })),
    state('isnotactive', style({ visibility: 'hidden', transform: 'translate(27%)' })),
    transition('isactive => isnotactive', animate('100ms ease-in')),
    transition('isnotactive => isactive', animate('200ms ease-out')),
]);
// Reveal animation animation
/** @type {?} */
var socialsState = trigger('socialsState', [
    state('active', style({ visibility: 'visible', transform: 'translateY(-100%)' })),
    state('inactive', style({ visibility: 'hidden', transform: 'translateY(0)' })),
    transition('* => void', animate('200ms ease-in')),
    transition('void => *', animate('200ms ease-out')),
]);
// image popup
// export const zoomState: any = trigger('zoomState', [
//   state('active', style({ transform: 'scale(1, 1)', cursor: 'zoom-out' })),
//   state('inactive', style({ transform: 'scale(0.9, 0.9)', cursor: 'zoom-in' })),
//   transition('active => inactive', animate('300ms ease-in')),
//   transition('inactive => active', animate('300ms ease-out')),
// ]);
// export const restartState: any = trigger('restartState', [
//   state('inactive', style({ transform: 'scale(0.9, 0.9)' })),
// ]);
// alerts
/** @type {?} */
var flyInOut = trigger('flyInOut', [
    state('inactive', style({ display: 'none', opacity: 0.7 })),
    state('active', style({ opacity: 0.7 })),
    state('removed', style({ opacity: 0 })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => removed', animate('300ms ease-in')),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbOptionComponent = /** @class */ (function () {
    function MdbOptionComponent(el) {
        this.el = el;
        this.clicked = false;
        this.clicked = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbOptionComponent.prototype.handleMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var text = this.value || event.target.text || event.target.textContent || event.target.value;
        this.selectedItem = { text: text.toString().trim(), element: this };
        this.clicked = true;
    };
    MdbOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-option',
                    template: "<div class=\"completer-row\" (mousedown)=\"handleMouseDown($event)\" mdbAutoCompleterOption>\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MdbOptionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbOptionComponent.propDecorators = {
        value: [{ type: Input }]
    };
    return MdbOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbAutoCompleterComponent = /** @class */ (function () {
    function MdbAutoCompleterComponent(renderer) {
        this.renderer = renderer;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
    }
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.onItemClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedElement = (/** @type {?} */ ({}));
        this.mdbOptions.forEach(function (el) {
            if (el.clicked === true) {
                selectedElement = el;
            }
            el.clicked = false;
        });
        this.setSelectedItem({ text: selectedElement.value, element: selectedElement });
        this.highlightRow(0);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.setSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.getSelectedItem = /**
     * @return {?}
     */
    function () {
        return this._selectedItem;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.selectedItemChanged = /**
     * @return {?}
     */
    function () {
        return this._selectedItemChanged;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._isOpen;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this._isOpen = true;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._isOpen = false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.removeHighlight = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        setTimeout(function () {
            _this.optionList.forEach(function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    _this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach(function (elem) {
                        _this.renderer.removeClass(elem, 'highlight-row');
                    });
                }
            });
        }, 0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this._allItems = this.optionList
            .filter(function (el) { return el.nativeElement.firstElementChild.classList.contains('completer-row'); })
            .map(function (elem) { return elem.nativeElement; });
        if (this._allItems[index]) {
            this.optionList.forEach(function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    _this.removeHighlight(index);
                    _this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            });
        }
        this._selectedItemIndex = index;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.navigateUsingKeyboard = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.key) {
            case 'ArrowDown':
                this.moveHighlightedIntoView(event.key);
                if (!this.isOpen()) {
                    this.show();
                }
                if (this._selectedItemIndex === 0) {
                    this.highlightRow(0);
                }
                if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
                    this.highlightRow(++this._selectedItemIndex);
                }
                else if (this._selectedItemIndex + 1 === this._allItems.length) {
                    this.highlightRow(0);
                }
                break;
            case 'ArrowUp':
                this.moveHighlightedIntoView(event.key);
                if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                    this.highlightRow(this._allItems.length);
                }
                this.highlightRow(--this._selectedItemIndex);
                break;
            case 'Escape':
                this.hide();
                break;
            case 'Enter':
                /** @type {?} */
                var selectedOption = this.mdbOptions.map(function (el) { return el; })[this._selectedItemIndex];
                if (selectedOption) {
                    this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                }
                this.hide();
                break;
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.moveHighlightedIntoView = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var listHeight = 0;
        /** @type {?} */
        var itemIndex = this._selectedItemIndex;
        this.optionList.forEach(function (el) {
            listHeight += el.nativeElement.offsetHeight;
        });
        if (itemIndex > -1) {
            /** @type {?} */
            var item_1 = null;
            /** @type {?} */
            var itemHeight_1 = 0;
            this.optionList.forEach(function (el, i) {
                if (i === itemIndex + 1) {
                    item_1 = el.nativeElement;
                    itemHeight_1 = item_1.offsetHeight;
                }
            });
            /** @type {?} */
            var itemTop = (itemIndex + 1) * itemHeight_1;
            /** @type {?} */
            var viewTop = this.dropdown.nativeElement.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight_1);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight_1);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight_1);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.textNoResults) {
            this.textNoResults = 'No results found';
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.highlightRow(0);
    };
    MdbAutoCompleterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-auto-completer',
                    template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div class=\"completer-dropdown\" #dropdown>\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"optionList.length === 0 \" class=\"completer-no-results\">{{textNoResults}}</div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    exportAs: 'mdbAutoCompleter'
                }] }
    ];
    /** @nocollapse */
    MdbAutoCompleterComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    MdbAutoCompleterComponent.propDecorators = {
        textNoResults: [{ type: Input }],
        clearButton: [{ type: Input }],
        clearButtonTabIndex: [{ type: Input }],
        optionList: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: ElementRef },] }],
        mdbOptions: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: MdbOptionComponent },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown',] }],
        onItemClick: [{ type: HostListener, args: ['mousedown',] }]
    };
    return MdbAutoCompleterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbAutoCompleterDirective = /** @class */ (function () {
    function MdbAutoCompleterDirective(renderer, el, platformId, document) {
        this.renderer = renderer;
        this.el = el;
        this.document = document;
        this.ngModelChange = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._renderClearButton = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.renderer.createElement('button');
        this._setStyles(el, {
            position: 'absolute',
            top: '25%',
            right: '0',
            visibility: 'hidden'
        });
        this._addClass(el, ['mdb-autocomplete-clear', 'fa', 'fa-times']);
        this.renderer.setAttribute(el, 'type', 'button');
        this.renderer.setAttribute(el, 'tabindex', this.mdbAutoCompleter.clearButtonTabIndex.toString());
        if (this.isBrowser) {
            /** @type {?} */
            var parent_1 = this.el.nativeElement.offsetParent || this.el.nativeElement.parentElement;
            this.renderer.appendChild(parent_1, el);
        }
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    MdbAutoCompleterDirective.prototype._setStyles = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    function (target, styles) {
        var _this = this;
        Object.keys(styles).forEach(function (prop) {
            (/** @type {?} */ (_this)).renderer.setStyle(target, prop, styles[prop]);
        });
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._addClass = /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        var _this = this;
        name.forEach(function (el) {
            _this.renderer.addClass(target, el);
        });
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._clearInput = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.value = '';
        this.ngModelChange.emit('');
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: 'hidden' });
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleInput = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isOpen()) {
            this._show();
        }
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        var clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: clearButtonVisibility });
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleKeyDown = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleFocusIn = /**
     * @protected
     * @return {?}
     */
    function () {
        this._show();
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleBlurIn = /**
     * @protected
     * @return {?}
     */
    function () {
        this._hide();
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleMouseDown = /**
     * @protected
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.highlightRow(0);
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._isOpen = /**
     * @private
     * @return {?}
     */
    function () {
        return this.mdbAutoCompleter.isOpen();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._show = /**
     * @private
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.show();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.hide();
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbAutoCompleter.selectedItemChanged().subscribe(function (item) {
            _this.el.nativeElement.value = item.text;
            /** @type {?} */
            var clearButtonVisibility = _this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            _this._setStyles(_this._clearButton, { visibility: clearButtonVisibility });
        });
        if (this.mdbAutoCompleter.clearButton && this.isBrowser) {
            this._renderClearButton();
            /** @type {?} */
            var clearButton_1 = this.el.nativeElement.parentElement.querySelectorAll('.mdb-autocomplete-clear')[0];
            this._clearButton = this.document.querySelector('.mdb-autocomplete-clear');
            this.renderer.listen(clearButton_1, 'focus', function () {
                ['click', 'keydown:space', 'keydown:enter'].forEach(function (event) { return _this.renderer.listen(clearButton_1, event, function () {
                    _this._clearInput();
                }); });
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton_1, 'mouseenter', function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton_1, 'mouseleave', function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton_1, 'blur', function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            });
            if (this.el.nativeElement.disabled) {
                this.renderer.setAttribute(clearButton_1, 'disabled', 'true');
            }
            this._autocompleterInputChanges = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === 'disabled') {
                        _this.renderer.setAttribute(_this._clearButton, 'disabled', 'true');
                    }
                });
            });
            this._autocompleterInputChanges.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true
            });
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autocompleterInputChanges) {
            this._autocompleterInputChanges.disconnect();
        }
    };
    MdbAutoCompleterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mdbAutoCompleter], textarea[mdbAutoCompleter]',
                    host: {
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeyDown($event)',
                        '(focusin)': '_handleFocusIn()',
                        '(blur)': '_handleBlurIn()',
                        '(mousedown)': '_handleMouseDown()'
                    },
                    exportAs: 'mdbAutoCompleterTrigger',
                },] }
    ];
    /** @nocollapse */
    MdbAutoCompleterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MdbAutoCompleterDirective.propDecorators = {
        mdbAutoCompleter: [{ type: Input }],
        ngModelChange: [{ type: Output }]
    };
    return MdbAutoCompleterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbAutoCompleterOptionDirective = /** @class */ (function () {
    function MdbAutoCompleterOptionDirective(_el) {
        this._el = _el;
        this.value = this._el.nativeElement.textContent;
    }
    MdbAutoCompleterOptionDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbAutoCompleterOption]' },] }
    ];
    /** @nocollapse */
    MdbAutoCompleterOptionDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return MdbAutoCompleterOptionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutoCompleterModule = /** @class */ (function () {
    function AutoCompleterModule() {
    }
    AutoCompleterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, FormsModule],
                    declarations: [MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, MdbAutoCompleterOptionDirective],
                    exports: [MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, MdbAutoCompleterOptionDirective],
                },] }
    ];
    return AutoCompleterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbDateFormatDirective = /** @class */ (function () {
    function MdbDateFormatDirective() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbDateFormatDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentValue = event.target.value;
        /** @type {?} */
        var newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setSeparatorsNumber();
        this.setResultLength();
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setSeparatorsNumber = /**
     * @return {?}
     */
    function () {
        this.separatorsNumber = this.format.length - 1;
    };
    /**
     * @return {?}
     */
    MdbDateFormatDirective.prototype.setResultLength = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var resLength = 0;
        this.format.forEach(function (value) {
            resLength += value.length;
        });
        this.resultLength = resLength + this.separatorsNumber;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        /** @type {?} */
        var dateParts = this.getDateParts(date);
        /** @type {?} */
        var result = dateParts.map(function (part, index) {
            return part = _this.formatDateParts(part, index);
        });
        return result.join(this.separator).slice(0, this.resultLength);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDateParts = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        var parts = [];
        /** @type {?} */
        var partsIndex = {
            first: this.format[0].length,
            mid: this.format[0].length + this.format[1].length,
            last: this.resultLength
        };
        parts[0] = date.slice(0, partsIndex.first);
        if (date.length > partsIndex.first) {
            parts[1] = date.slice(partsIndex.first, partsIndex.mid);
        }
        if (date.length > partsIndex.mid) {
            parts[2] = date.slice(partsIndex.mid, partsIndex.last);
        }
        return parts;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getDigits = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    MdbDateFormatDirective.prototype.formatDateParts = /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    function (datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedDay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbDateFormatDirective.prototype.getFormattedMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        var monthNum = parseInt(value, 10);
        if (value) {
            if (monthFirstNum > 1 && monthFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else if (monthNum > 12) {
                return '12';
            }
            else {
                return value;
            }
        }
    };
    MdbDateFormatDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDateFormat]',
                },] }
    ];
    MdbDateFormatDirective.propDecorators = {
        separator: [{ type: Input }],
        format: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }, { type: HostListener, args: ['paste', ['$event'],] }]
    };
    return MdbDateFormatDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCreditCardDirective = /** @class */ (function () {
    function MdbCreditCardDirective() {
        this.standardPattern = /(\d{1,4})/g;
        this.defaultCard = {
            name: '',
            fullName: '',
            re: /\d{0,16}/,
            pattern: this.standardPattern,
            maxLength: 19,
            cvvLength: 3
        };
        this.cards = [
            {
                name: 'visa',
                fullName: 'Visa',
                re: /^4\d{0,15}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3
            },
            {
                name: 'mastercard',
                fullName: 'Mastercard',
                re: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3
            },
            {
                name: 'amex',
                fullName: 'American Express',
                re: /^3[47]\d{0,13}/,
                pattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                maxLength: 15,
                cvvLength: 4
            },
            {
                name: 'jcb',
                fullName: 'JCB',
                re: /^(?:35\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 19,
                cvvLength: 3
            },
            {
                name: 'discover',
                fullName: 'Discover',
                re: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 19,
                cvvLength: 3
            },
            {
                name: 'diners-club',
                fullName: 'Diners Club',
                re: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                pattern: /(\d{1,4})(\d{1,5})?(\d{1,4})?/,
                maxLength: 19,
                cvvLength: 3
            }
        ];
        this._separator = ' ';
    }
    Object.defineProperty(MdbCreditCardDirective.prototype, "additionalCards", {
        get: /**
         * @return {?}
         */
        function () { return this._additionalCards; },
        set: /**
         * @param {?} cards
         * @return {?}
         */
        function (cards) {
            this._additionalCards = cards;
            this.addCards(cards);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCreditCardDirective.prototype, "separator", {
        get: /**
         * @return {?}
         */
        function () { return this._separator; },
        set: /**
         * @param {?} separator
         * @return {?}
         */
        function (separator) {
            this._separator = separator;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formatInput(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.formatInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.target.value;
        /** @type {?} */
        var formattedInput = this.getFormattedInput(input);
        event.target.value = formattedInput;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.getFormattedInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.removeNonDigits(value);
        /** @type {?} */
        var card = this.findCardByNumber(value);
        this.updateCurrentCardNames(card.name, card.fullName);
        /** @type {?} */
        var cardNumMaxLength;
        if (this.hasStandardPattern(card)) {
            /** @type {?} */
            var matches = value.match(card.pattern);
            if (matches === null) {
                return value;
            }
            cardNumMaxLength = card.maxLength + matches.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return matches.join(this.separator);
        }
        else {
            /** @type {?} */
            var results = card.pattern.exec(value);
            if (results === null) {
                return value;
            }
            results.shift();
            cardNumMaxLength = card.maxLength + results.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return results.filter(this.isMatch).join(this.separator);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.removeNonDigits = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @private
     * @param {?} card
     * @return {?}
     */
    MdbCreditCardDirective.prototype.hasStandardPattern = /**
     * @private
     * @param {?} card
     * @return {?}
     */
    function (card) {
        return card.pattern.toString() === this.standardPattern.toString();
    };
    /**
     * @private
     * @param {?} match
     * @return {?}
     */
    MdbCreditCardDirective.prototype.isMatch = /**
     * @private
     * @param {?} match
     * @return {?}
     */
    function (match) {
        return match !== undefined;
    };
    /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    MdbCreditCardDirective.prototype.updateCurrentCardNames = /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    function (name, fullName) {
        this.cardName = name;
        this.cardFullName = fullName;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.findCardByNumber = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var cardType = this.cards.find(function (card) {
            return card.re.test(value);
        });
        if (!cardType) {
            return this.defaultCard;
        }
        return cardType;
    };
    /**
     * @param {?} newCards
     * @return {?}
     */
    MdbCreditCardDirective.prototype.addCards = /**
     * @param {?} newCards
     * @return {?}
     */
    function (newCards) {
        var _this = this;
        newCards.forEach(function (card) {
            _this.cards.push(card);
        });
    };
    MdbCreditCardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCreditCard]',
                    exportAs: 'mdbCreditCard'
                },] }
    ];
    /** @nocollapse */
    MdbCreditCardDirective.ctorParameters = function () { return []; };
    MdbCreditCardDirective.propDecorators = {
        additionalCards: [{ type: Input }],
        separator: [{ type: Input }],
        maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return MdbCreditCardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCvvDirective = /** @class */ (function () {
    function MdbCvvDirective() {
        this.maxLength = '4';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCvvDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formatInput(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCvvDirective.prototype.formatInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.target.value;
        /** @type {?} */
        var newValue = this.getFormattedValue(input);
        event.target.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbCvvDirective.prototype.getFormattedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.removeNonDigits(value);
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbCvvDirective.prototype.removeNonDigits = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    MdbCvvDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCvv]',
                },] }
    ];
    MdbCvvDirective.propDecorators = {
        maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return MdbCvvDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutoFormatModule = /** @class */ (function () {
    function AutoFormatModule() {
    }
    AutoFormatModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MdbDateFormatDirective,
                        MdbCreditCardDirective,
                        MdbCvvDirective
                    ],
                    exports: [
                        MdbDateFormatDirective,
                        MdbCreditCardDirective,
                        MdbCvvDirective
                    ]
                },] }
    ];
    return AutoFormatModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCompleterDirective = /** @class */ (function () {
    function MdbCompleterDirective() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this.setToNullValue = null;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    MdbCompleterDirective.prototype.registerList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.list = list;
    };
    /**
     * @param {?} dropdown
     * @return {?}
     */
    MdbCompleterDirective.prototype.registerDropdown = /**
     * @param {?} dropdown
     * @return {?}
     */
    function (dropdown) {
        this.dropdown = dropdown;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbCompleterDirective.prototype.onHighlighted = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    MdbCompleterDirective.prototype.onSelected = /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    MdbCompleterDirective.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this._hasSelected) {
            // this.selected.emit(null);
            this.selected.emit(this.setToNullValue);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.hasHighlighted = /**
     * @return {?}
     */
    function () {
        return this._hasHighlighted;
    };
    /**
     * @param {?} cancel
     * @return {?}
     */
    MdbCompleterDirective.prototype.cancelBlur = /**
     * @param {?} cancel
     * @return {?}
     */
    function (cancel) {
        this._cancelBlur = cancel;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.isCancelBlur = /**
     * @return {?}
     */
    function () {
        return this._cancelBlur;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(MdbCompleterDirective.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "autoHighlightIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoHighlightIndex;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    MdbCompleterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCompleter]',
                },] }
    ];
    MdbCompleterDirective.propDecorators = {
        selected: [{ type: Output }],
        highlighted: [{ type: Output }],
        opened: [{ type: Output }]
    };
    return MdbCompleterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_CHARS = 524288;
// the default max length per the html maxlength attribute
/** @type {?} */
var MIN_SEARCH_LENGTH = 3;
/** @type {?} */
var PAUSE = 100;
/** @type {?} */
var TEXT_SEARCHING = 'Searching...';
/** @type {?} */
var TEXT_NO_RESULTS = 'No results found';
/** @type {?} */
var CLEAR_TIMEOUT = 50;
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CompleterBaseData = /** @class */ (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CompleterBaseData.prototype.cancel = /**
     * @return {?}
     */
    function () { };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    CompleterBaseData.prototype.searchFields = /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    function (searchFields) {
        (/** @type {?} */ (this))._searchFields = searchFields;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    CompleterBaseData.prototype.titleField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    function (titleField) {
        (/** @type {?} */ (this))._titleField = titleField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    CompleterBaseData.prototype.descriptionField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    function (descriptionField) {
        (/** @type {?} */ (this))._descriptionField = descriptionField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    CompleterBaseData.prototype.imageField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    function (imageField) {
        (/** @type {?} */ (this))._imageField = imageField;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CompleterBaseData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // let image: string = null;
        /** @type {?} */
        var image = null;
        /** @type {?} */
        var formattedText;
        // let formattedDesc: string;
        /** @type {?} */
        var formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return (/** @type {?} */ ({
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        }));
    };
    /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.extractMatches = /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    function (data, term) {
        var _this = this;
        /** @type {?} */
        var matches = [];
        /** @type {?} */
        var searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(function (item) {
                /** @type {?} */
                var values = searchFields ?
                    searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractTitle = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    CompleterBaseData.prototype.extractValue = /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        /** @type {?} */
        var keys;
        /** @type {?} */
        var result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    CompleterBaseData.prototype.processResults = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(Subject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalData = /** @class */ (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    LocalData.prototype.data = /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    function (data) {
        var _this = this;
        if (data instanceof Observable) {
            ((/** @type {?} */ (data))).subscribe(function (res) {
                (/** @type {?} */ (_this))._data = res;
                if ((/** @type {?} */ (_this)).savedTerm) {
                    (/** @type {?} */ (_this)).search((/** @type {?} */ (_this)).savedTerm);
                }
            });
        }
        else {
            (/** @type {?} */ (this))._data = (/** @type {?} */ (data));
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} term
     * @return {?}
     */
    LocalData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            /** @type {?} */
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    // public convertToItem(data: any): CompleterItem {
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.convertToItem = 
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    LocalData.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalData.ctorParameters = function () { return []; };
    return LocalData;
}(CompleterBaseData));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoteData = /** @class */ (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.setToNullValue = null;
        // private _urlFormater: (term: string) => string | any = null;
        _this._urlFormater = _this.setToNullValue;
        // private _dataField: string = null;
        _this._dataField = null;
        return _this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} remoteUrl
     * @return {THIS}
     */
    RemoteData.prototype.remoteUrl = /**
     * @template THIS
     * @this {THIS}
     * @param {?} remoteUrl
     * @return {THIS}
     */
    function (remoteUrl) {
        (/** @type {?} */ (this))._remoteUrl = remoteUrl;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    RemoteData.prototype.urlFormater = /**
     * @param {?} urlFormater
     * @return {?}
     */
    function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    RemoteData.prototype.dataField = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    RemoteData.prototype.headers = /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        this._headers = headers;
    };
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    RemoteData.prototype.requestOptions = /**
     * @param {?} requestOptions
     * @return {?}
     */
    function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    RemoteData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        /** @type {?} */
        var url = '';
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        /*
         * If requestOptions are provided, they will override anything set in headers.
         *
         * If no requestOptions are provided, a new RequestOptions object will be instantiated,
         * and either the provided headers or a new Headers() object will be sent.
         */
        // if (!this._requestOptions) {
        //   this._requestOptions = new RequestOptions();
        //   (this._requestOptions.headers as any) = this._headers || new HttpHeaders();
        // }
        this.remoteSearch = this.http.get(url, this._requestOptions).pipe(map(function (res) { return res; }), map(function (data) {
            /** @type {?} */
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        }), map(function (matches) {
            /** @type {?} */
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        }), catchError(function (err) {
            _this.error(err);
            // return null;
            return _this.setToNullValue;
        }))
            .subscribe();
    };
    /**
     * @return {?}
     */
    RemoteData.prototype.cancel = /**
     * @return {?}
     */
    function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    // public convertToItem(data: any): CompleterItem {
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    RemoteData.prototype.convertToItem = 
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(CompleterBaseData));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompleterService = /** @class */ (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
    remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.local = /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        /** @type {?} */
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.remote = /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        /** @type {?} */
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompleterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LocalData,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [RemoteData,] }] }
    ]; };
    return CompleterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () { };
/** @type {?} */
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CompleterComponent; }),
    multi: true
};
var CompleterComponent = /** @class */ (function () {
    function CompleterComponent(completerService, renderer, el) {
        this.completerService = completerService;
        this.renderer = renderer;
        this.el = el;
        this.inputName = '';
        this.inputId = '';
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.focused = false;
        // Used in sliding-down animation
        this.state = 'unfocused';
        this.searchStr = '';
        this.control = new FormControl('');
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
    }
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === 'string') {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = source;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onkeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target === this.labelEl.nativeElement) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput.nativeElement.value === '' && this.labelEl && !this.placeholder) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.activateClearButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbCompleterInput.nativeElement.value = '';
        this.value = '';
        this.renderer.setStyle(event.target, 'visibility', 'hidden');
    };
    /**
     * @param {?} buttonState
     * @return {?}
     */
    CompleterComponent.prototype.triggerClearButtonAnimation = /**
     * @param {?} buttonState
     * @return {?}
     */
    function (buttonState) {
        this.state = buttonState;
    };
    Object.defineProperty(CompleterComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.searchStr; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
        if (this.autofocus) {
            this._focus = true;
        }
        if (this.initialValue || this.searchStr || this.placeholder) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._focus) {
            this.mdbCompleterInput.nativeElement.focus();
            this._focus = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchStr = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
        if (this.initialValue) {
            this.searchStr = this.initialValue;
            this.onFocus();
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
        this.blur.emit(this);
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.focused = true;
        }, 0);
        this.focusEvent.emit({ focused: true, element: this.el });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.completer.open();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.completer.clear();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput) {
            this.mdbCompleterInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._open;
    };
    CompleterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-autocomplete, mdb-completer',
                    template: "<div class=\"completer-holder md-form\" mdbCompleter>\n\n  <input #mdbCompleterInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input form-control mdb-autocomplete\"\n    mdbCompleterInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n    [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n    [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\"\n    (focus)=\"onFocus()\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\n  />\n  <button type=\"button\"\n  [tabindex]=\"clearButtonTabIndex\"\n  class=\"mdb-autocomplete-clear\"\n  (click)=\"activateClearButton($event)\"\n  (focus)=\"triggerClearButtonAnimation('focused')\"\n  (blur)=\"triggerClearButtonAnimation('unfocused')\"\n  (mouseenter)=\"triggerClearButtonAnimation('focused')\"\n  (mouseleave)=\"triggerClearButtonAnimation('unfocused')\"\n  [@focusAnimation]=\"{value: state}\">\n    &#x2715;\n  </button>\n  <label #labelEl [ngClass]=\"{'active': focused || value || placeholder}\">{{ label }}</label>\n  <div class=\"completer-dropdown-holder\" *mdbList=\"dataService;\n      minSearchLength: minSearchLength;\n      pause: pause;\n      autoMatch: autoMatch;\n      initialValue: initialValue;\n      autoHighlight: autoHighlight;\n      let items = results;\n      let searchActive = searching;\n      let isInitialized = searchInitialized;\n      let isOpen = isOpen;\">\n    <div class=\"completer-dropdown\" mdbAutocompleteDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\">\n      <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div>\n      <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div>\n      <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n        <div class=\"completer-row\" [mdbRow]=\"rowIndex\" [dataItem]=\"item\">\n          <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n            <mdb-completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></mdb-completer-list-item>\n            <mdb-completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n              [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n            </mdb-completer-list-item>\n          </div>\n          <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n            <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n            <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    providers: [COMPLETER_CONTROL_VALUE_ACCESSOR],
                    animations: [trigger('focusAnimation', [
                            state('unfocused', style({ transform: 'scale(1.0, 1.0)', })),
                            state('focused', style({ transform: 'scale(1.5, 1.5)' })),
                            transition('unfocused => focused', animate('200ms ease-in')),
                            transition('focused => unfocused', animate('200ms ease-in'))
                        ])]
                }] }
    ];
    /** @nocollapse */
    CompleterComponent.ctorParameters = function () { return [
        { type: CompleterService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CompleterComponent.propDecorators = {
        dataService: [{ type: Input }],
        inputName: [{ type: Input }],
        inputId: [{ type: Input }],
        pause: [{ type: Input }],
        minSearchLength: [{ type: Input }],
        maxChars: [{ type: Input }],
        overrideSuggested: [{ type: Input }],
        clearSelected: [{ type: Input }],
        clearUnselected: [{ type: Input }],
        fillHighlighted: [{ type: Input }],
        placeholder: [{ type: Input }],
        matchClass: [{ type: Input }],
        fieldTabindex: [{ type: Input }],
        clearButtonTabIndex: [{ type: Input }],
        autoMatch: [{ type: Input }],
        disableInput: [{ type: Input }],
        inputClass: [{ type: Input }],
        autofocus: [{ type: Input }],
        openOnFocus: [{ type: Input }],
        initialValue: [{ type: Input }],
        autoHighlight: [{ type: Input }],
        label: [{ type: Input }],
        datasource: [{ type: Input }],
        textNoResults: [{ type: Input }],
        textSearching: [{ type: Input }],
        selected: [{ type: Output }],
        highlighted: [{ type: Output }],
        blur: [{ type: Output }],
        focusEvent: [{ type: Output }],
        opened: [{ type: Output }],
        keyup: [{ type: Output }],
        keydown: [{ type: Output }],
        completer: [{ type: ViewChild, args: [MdbCompleterDirective,] }],
        mdbCompleterInput: [{ type: ViewChild, args: ['mdbCompleterInput',] }],
        labelEl: [{ type: ViewChild, args: ['labelEl',] }],
        onkeyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onFocusIn: [{ type: HostListener, args: ['focusin',] }],
        onFocusOut: [{ type: HostListener, args: ['focusout',] }]
    };
    return CompleterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompleterListItemComponent = /** @class */ (function () {
    function CompleterListItemComponent() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    CompleterListItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        /** @type {?} */
        var matchStr = this.text.toLowerCase();
        /** @type {?} */
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        /** @type {?} */
        var startIndex = 0;
        while (matchPos >= 0) {
            /** @type {?} */
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                /** @type {?} */
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    CompleterListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-completer-list-item',
                    template: "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n  <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n</span>\n"
                }] }
    ];
    CompleterListItemComponent.propDecorators = {
        text: [{ type: Input }],
        searchStr: [{ type: Input }],
        matchClass: [{ type: Input }],
        type: [{ type: Input }]
    };
    return CompleterListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function localDataFactory() {
    return function () {
        return new LocalData();
    };
}
/**
 * @param {?} http
 * @return {?}
 */
function remoteDataFactory(http) {
    return function () {
        return new RemoteData(http);
    };
}
/** @type {?} */
var LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
/** @type {?} */
var RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [HttpClient] };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CtrRowItem = /** @class */ (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
var MdbDropdownDirective = /** @class */ (function () {
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.onMouseDown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.registerRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.rows.push(row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbDropdownDirective.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(this.setToNullValue);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            /** @type {?} */
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            // + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                            + parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10)));
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.rows = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbDropdownDirective.prototype.onSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.completer.onSelected(item);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownScrollTopTo = /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowTop = /**
     * @private
     * @return {?}
     */
    function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10));
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight)), 10);
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt((/** @type {?} */ (css.marginTop)), 10) + parseInt((/** @type {?} */ (css.marginBottom)), 10);
    };
    MdbDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbAutocompleteDropdown]',
                },] }
    ];
    /** @nocollapse */
    MdbDropdownDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    MdbDropdownDirective.propDecorators = {
        onMouseDown: [{ type: HostListener, args: ['mousedown',] }]
    };
    return MdbDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// keyboard events
/** @type {?} */
var KEY_DW = 40;
/** @type {?} */
var KEY_RT = 39;
/** @type {?} */
var KEY_UP = 38;
/** @type {?} */
var KEY_LF = 37;
/** @type {?} */
var KEY_ES = 27;
/** @type {?} */
var KEY_EN = 13;
/** @type {?} */
var KEY_TAB = 9;
var MdbInputCompleteDirective = /** @class */ (function () {
    // constructor( @Host() private completer: MdbCompleterDirective, private ngModel: NgModel, private el: ElementRef) {
    function MdbInputCompleteDirective(completer, tempngModel, el) {
        var _this = this;
        this.completer = completer;
        this.tempngModel = tempngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = '';
        this._displayStr = '';
        // private blurTimer: Subscription = null;
        this.blurTimer = null;
        this.ngModel = this.tempngModel;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = '';
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe(function (value) {
            if (!isNil(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keyupHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = timer(200).subscribe(function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = '';
                    _this.el.nativeElement.value = '';
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        });
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(MdbInputCompleteDirective.prototype, "searchStr", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchStr;
        },
        set: /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.handleSelection = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = '';
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.restoreSearchValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    MdbInputCompleteDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCompleterInput]',
                },] }
    ];
    /** @nocollapse */
    MdbInputCompleteDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: NgModel },
        { type: ElementRef }
    ]; };
    MdbInputCompleteDirective.propDecorators = {
        clearSelected: [{ type: Input, args: ['clearSelected',] }],
        clearUnselected: [{ type: Input, args: ['clearUnselected',] }],
        overrideSuggested: [{ type: Input, args: ['overrideSuggested',] }],
        fillHighlighted: [{ type: Input, args: ['fillHighlighted',] }],
        openOnFocus: [{ type: Input, args: ['openOnFocus',] }],
        ngModelChange: [{ type: Output }],
        keyupHandler: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        keydownHandler: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        onfocus: [{ type: HostListener, args: ['focus',] }]
    };
    return MdbInputCompleteDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CtrListContext = /** @class */ (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
var MdbListDirective = /** @class */ (function () {
    function MdbListDirective(tmpCompleter, templateRef, viewContainer, cd) {
        this.tmpCompleter = tmpCompleter;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = MIN_SEARCH_LENGTH;
        this.mdbListPause = PAUSE;
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        // private results: CompleterItem[] = [];
        this.setToNullValue = null;
        // private term: string = null;
        this.term = null;
        // private searching = false;
        // private searchTimer: Subscription = null;
        this.searchTimer = null;
        // private clearTimer: Subscription = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.completer = this.tmpCompleter;
    }
    /**
     * @return {?}
     */
    MdbListDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        set: /**
         * @param {?} newService
         * @return {?}
         */
        function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    // .catch(err => this.handleError(err))
                    // .catch((err: any) => this.handleError(err))
                    // .subscribe(results => {
                    .subscribe(function (results) {
                    try {
                        _this.ctx.searchInitialized = true;
                        _this.ctx.searching = false;
                        _this.ctx.results = results;
                        if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(_this.term) &&
                            results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                            // Do automatch
                            _this.completer.onSelected(results[0]);
                        }
                        if (_this._initialValue) {
                            _this.initialValue = _this._initialValue;
                            // this._initialValue = null;
                            _this._initialValue = _this.setToNullValue;
                        }
                        if (_this.mdbListAutoHighlight) {
                            _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                        }
                        _this.refreshTemplate();
                    }
                    catch (err) {
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout(function () {
                    /** @type {?} */
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (!isNil(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = timer(this.mdbListPause).subscribe(function () {
                try {
                    _this.searchTimerComplete(term);
                }
                catch (err) {
                }
            });
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = timer(CLEAR_TIMEOUT).subscribe(function () {
            _this._clear();
        });
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    MdbListDirective.prototype.isOpen = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.ctx.isOpen = open;
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    /**
     * @private
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.searchTimerComplete = /**
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype.refreshTemplate = 
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    /**
     * @private
     * @return {?}
     */
    function () {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype.getBestMatchIndex = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        /** @type {?} */
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    MdbListDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbList]',
                },] }
    ];
    /** @nocollapse */
    MdbListDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    MdbListDirective.propDecorators = {
        mdbListMinSearchLength: [{ type: Input }],
        mdbListPause: [{ type: Input }],
        mdbListAutoMatch: [{ type: Input }],
        mdbListAutoHighlight: [{ type: Input }],
        dataService: [{ type: Input, args: ['mdbList',] }],
        initialValue: [{ type: Input, args: ['mdbListInitialValue',] }]
    };
    return MdbListDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbRowDirective = /** @class */ (function () {
    function MdbRowDirective(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    };
    Object.defineProperty(MdbRowDirective.prototype, "mdbRow", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbRowDirective.prototype, "dataItem", {
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.dropdown.onSelected(this._item);
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.dropdown.highlightRow(this._rowIndex);
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    MdbRowDirective.prototype.setHighlighted = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.selected = selected;
        if (this.selected) {
            this.renderer.addClass(this.el.nativeElement, 'completer-selected-row');
        }
        else if (!this.selected) {
            this.renderer.removeClass(this.el.nativeElement, 'completer-selected-row');
        }
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getNativeElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getDataItem = /**
     * @return {?}
     */
    function () {
        return this._item;
    };
    MdbRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbRow]',
                },] }
    ];
    /** @nocollapse */
    MdbRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdbDropdownDirective, decorators: [{ type: Host }] }
    ]; };
    MdbRowDirective.propDecorators = {
        mdbRow: [{ type: Input }],
        dataItem: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }]
    };
    return MdbRowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule
                    ],
                    declarations: [
                        CompleterListItemComponent,
                        MdbCompleterDirective,
                        MdbDropdownDirective,
                        MdbInputCompleteDirective,
                        MdbListDirective,
                        MdbRowDirective,
                        CompleterComponent
                    ],
                    exports: [
                        CompleterComponent,
                        CompleterListItemComponent,
                        MdbCompleterDirective,
                        MdbDropdownDirective,
                        MdbInputCompleteDirective,
                        MdbListDirective,
                        MdbRowDirective
                    ],
                    providers: [
                        CompleterService,
                        LocalDataFactoryProvider,
                        RemoteDataFactoryProvider
                    ]
                },] }
    ];
    return AutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardRevealComponent = /** @class */ (function () {
    function CardRevealComponent(_r) {
        this._r = _r;
    }
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
        setTimeout(function () {
            try {
                /** @type {?} */
                var height = _this.cardFront.nativeElement.offsetHeight;
                _this._r.setStyle(_this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
                _this._r.setStyle(_this.cardOverflow.nativeElement, 'height', height + 'px');
            }
            catch (error) { }
        }, 0);
    };
    CardRevealComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-reveal',
                    template: "<div #cardOverflow class=\"card-overflow col-12\" >\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\" ></ng-content>\n  </div>\n  <div #cardReveal class=\"card-reveal\" *ngIf=\"show\"  [@socialsState]=\"socials\">\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                    animations: [socialsState]
                }] }
    ];
    /** @nocollapse */
    CardRevealComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    CardRevealComponent.propDecorators = {
        cardReveal: [{ type: ViewChild, args: ['cardReveal',] }],
        cardFront: [{ type: ViewChild, args: ['cardFront',] }],
        cardOverflow: [{ type: ViewChild, args: ['cardOverflow',] }]
    };
    return CardRevealComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardRotatingComponent = /** @class */ (function () {
    function CardRotatingComponent() {
        this.rotate = false;
    }
    /**
     * @return {?}
     */
    CardRotatingComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.rotate = !this.rotate;
    };
    CardRotatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-rotating, mdb-flipping-card',
                    template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    return CardRotatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    /**
     * @return {?}
     */
    CardsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CardsModule, providers: [] };
    };
    CardsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [CardRevealComponent, CardRotatingComponent],
                    exports: [CardRevealComponent, CardRotatingComponent]
                },] }
    ];
    return CardsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocaleService = /** @class */ (function () {
    function LocaleService() {
        this.locales = {
            'en': {
                dayLabelsFull: { su: 'Sunday', mo: 'Monday', tu: 'Tuesday', we: 'Wednesday', th: 'Thursday', fr: 'Friday', sa: 'Saturday' },
                dayLabels: { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: false,
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    LocaleService.prototype.getLocaleOptions = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    };
    LocaleService.decorators = [
        { type: Injectable }
    ];
    return LocaleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var M = 'm';
/* const MM = 'mm'; */
/* const MMM = 'mmm'; */
/** @type {?} */
var D = 'd';
/* const DD = 'dd'; */
/* const YYYY = 'yyyy'; */
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} minYear
     * @param {?} maxYear
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} monthLabels
     * @param {?} enableDays
     * @return {?}
     */
    UtilService.prototype.isDateValid = /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} minYear
     * @param {?} maxYear
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} monthLabels
     * @param {?} enableDays
     * @return {?}
     */
    function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        /** @type {?} */
        var returnDate = { day: 0, month: 0, year: 0 };
        /** @type {?} */
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        var delimeters = this.getDateFormatDelimeters(dateFormat);
        /** @type {?} */
        var dateValue = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        var year = this.getNumberByValue(dateValue[0]);
        /** @type {?} */
        var month = this.getNumberByValue(dateValue[1]);
        /** @type {?} */
        var day = this.getNumberByValue(dateValue[2]);
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            var date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    };
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    UtilService.prototype.getDateValue = /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    function (dateStr, dateFormat, delimeters) {
        /** @type {?} */
        var del = delimeters[0];
        if (delimeters[0] !== delimeters[1]) {
            del = delimeters[0] + delimeters[1];
        }
        /** @type {?} */
        var re = new RegExp('[' + del + ']');
        /** @type {?} */
        var ds = dateStr.split(re);
        /** @type {?} */
        var df = dateFormat.split(re);
        /** @type {?} */
        var da = [];
        for (var i = 0; i < df.length; i++) {
            if (df[i].indexOf('yy') !== -1) {
                da[0] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(M) !== -1) {
                da[1] = { value: ds[i], format: df[i] };
            }
            if (df[i].indexOf(D) !== -1) {
                da[2] = { value: ds[i], format: df[i] };
            }
        }
        return da;
    };
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.getMonthNumberByMonthName = /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    function (df, monthLabels) {
        if (df.value) {
            for (var key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    };
    /**
     * @param {?} df
     * @return {?}
     */
    UtilService.prototype.getNumberByValue = /**
     * @param {?} df
     * @return {?}
     */
    function (df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        var nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatSeparator = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatDelimeters = /**
     * @param {?} dateFormat
     * @return {?}
     */
    function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    };
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.isMonthLabelValid = /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    UtilService.prototype.isYearLabelValid = /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.parseDatePartNumber = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, dateString, datePart) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            /** @type {?} */
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.parseDatePartMonthName = /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    function (dateFormat, dateString, datePart, monthLabels) {
        /** @type {?} */
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.getDatePartIndex = /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    // parseDefaultMonth(monthString: string): IMyMonth {
    // parseDefaultMonth(monthString: string): IMyMonth {
    /**
     * @param {?} monthString
     * @return {?}
     */
    UtilService.prototype.parseDefaultMonth = 
    // parseDefaultMonth(monthString: string): IMyMonth {
    /**
     * @param {?} monthString
     * @return {?}
     */
    function (monthString) {
        /** @type {?} */
        var month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            /** @type {?} */
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    UtilService.prototype.isDisabledDay = /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    function (date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var enableDays_1 = __values(enableDays), enableDays_1_1 = enableDays_1.next(); !enableDays_1_1.done; enableDays_1_1 = enableDays_1.next()) {
                var e = enableDays_1_1.value;
                if (typeof e === 'number') {
                    if (e === this.getDayNumber(date)) {
                        return false;
                    }
                }
                else if (e.year === date.year && e.month === date.month && e.day === date.day) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (enableDays_1_1 && !enableDays_1_1.done && (_a = enableDays_1.return)) _a.call(enableDays_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            /** @type {?} */
            var dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        try {
            for (var disableDays_1 = __values(disableDays), disableDays_1_1 = disableDays_1.next(); !disableDays_1_1.done; disableDays_1_1 = disableDays_1.next()) {
                var d = disableDays_1_1.value;
                if (typeof d === 'number') {
                    if (this.getDayNumber(date) === d) {
                        return true;
                    }
                }
                else if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (disableDays_1_1 && !disableDays_1_1.done && (_b = disableDays_1.return)) _b.call(disableDays_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var disableDateRanges_1 = __values(disableDateRanges), disableDateRanges_1_1 = disableDateRanges_1.next(); !disableDateRanges_1_1.done; disableDateRanges_1_1 = disableDateRanges_1.next()) {
                var d = disableDateRanges_1_1.value;
                if (this.isInitializedDate(d.begin) &&
                    this.isInitializedDate(d.end) &&
                    dateMs >= this.getTimeInMilliseconds(d.begin) &&
                    dateMs <= this.getTimeInMilliseconds(d.end)) {
                    return true;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (disableDateRanges_1_1 && !disableDateRanges_1_1.done && (_c = disableDateRanges_1.return)) _c.call(disableDateRanges_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    UtilService.prototype.isMarkedDate = /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    function (date, markedDates, markWeekends) {
        var e_4, _a, e_5, _b;
        try {
            for (var markedDates_1 = __values(markedDates), markedDates_1_1 = markedDates_1.next(); !markedDates_1_1.done; markedDates_1_1 = markedDates_1.next()) {
                var md = markedDates_1_1.value;
                try {
                    for (var _c = __values(md.dates), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var d = _d.value;
                        if (d.year === date.year && d.month === date.month && d.day === date.day) {
                            return { marked: true, color: md.color };
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (markedDates_1_1 && !markedDates_1_1.done && (_a = markedDates_1.return)) _a.call(markedDates_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getWeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableUntil = /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableSince = /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isInitializedDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDayNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FocusDirective = /** @class */ (function () {
    function FocusDirective(el) {
        this.el = el;
    }
    // Focus to element: if value 0 = don't set focus, 1 = set only focus, 2 = set focus and set cursor position
    // Focus to element: if value 0 = don't set focus, 1 = set only focus, 2 = set focus and set cursor position
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngAfterViewInit = 
    // Focus to element: if value 0 = don't set focus, 1 = set only focus, 2 = set focus and set cursor position
    /**
     * @return {?}
     */
    function () {
        // if (this.value === "0") {
        //     return;
        // }
        // this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
        this.el.nativeElement.focus();
        // // Set cursor position at the end of text if input element
        // if (this.value === "2") {
        //     let len = this.el.nativeElement.value.length;
        //     this.el.nativeElement.setSelectionRange(len, len);
        // }
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDpFocus]'
                },] }
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FocusDirective.propDecorators = {
        value: [{ type: Input }]
    };
    return FocusDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var KeyCode = {
    backspace: 8, delete: 46,
};
KeyCode[KeyCode.backspace] = 'backspace';
KeyCode[KeyCode.delete] = 'delete';
var InputAutoFillDirective = /** @class */ (function () {
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    InputAutoFillDirective.prototype.onKeyUp = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        /** @type {?} */
        var val = this.getInputValue();
        /** @type {?} */
        var ews = this.endsWith(val, this.opts.separator);
        /** @type {?} */
        var parts = val.split(this.opts.separator);
        /** @type {?} */
        var idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) && (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            (Number(parts[idx]) > 3 &&
                this.isDay(idx) ||
                Number(parts[idx]) > 1 &&
                    this.isMonth(idx))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    };
    /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    InputAutoFillDirective.prototype.endsWith = /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.insertPos = /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.getPartLength = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].length;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.isNumber = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val.match(/[1-9]/) !== null;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isDay = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isMonth = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    };
    /**
     * @private
     * @return {?}
     */
    InputAutoFillDirective.prototype.getInputValue = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.value;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.setInputValue = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    };
    InputAutoFillDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInputAutoFill]'
                },] }
    ];
    /** @nocollapse */
    InputAutoFillDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    InputAutoFillDirective.propDecorators = {
        opts: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return InputAutoFillDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MDBDatePickerComponent; }),
    multi: true
};
/** @enum {number} */
var CalToggle = {
    Open: 1, CloseByDateSel: 2, CloseByCalBtn: 3, CloseByOutClick: 4,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
/** @enum {number} */
var Year = {
    min: 1000, max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';
/** @enum {number} */
var InputFocusBlur = {
    focus: 1, blur: 2,
};
InputFocusBlur[InputFocusBlur.focus] = 'focus';
InputFocusBlur[InputFocusBlur.blur] = 'blur';
/** @enum {number} */
var KeyCode$1 = {
    enter: 13, space: 32,
};
KeyCode$1[KeyCode$1.enter] = 'enter';
KeyCode$1[KeyCode$1.space] = 'space';
/** @enum {number} */
var MonthId = {
    prev: 1, curr: 2, next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';
var MDBDatePickerComponent = /** @class */ (function () {
    function MDBDatePickerComponent(elem, renderer, localeService, utilService, cdRef, platformId) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.cdRef = cdRef;
        this.label = '';
        this.placeholder = '';
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.isDateSelected = false;
        this.labelActive = false;
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        // Default options
        this.opts = {
            startDate: (/** @type {?} */ ('')),
            closeAfterSelect: (/** @type {?} */ (false)),
            dayLabelsFull: (/** @type {?} */ ({})),
            dayLabels: (/** @type {?} */ ({})),
            monthLabelsFull: (/** @type {?} */ ({})),
            monthLabels: (/** @type {?} */ ({})),
            dateFormat: (/** @type {?} */ ('')),
            showTodayBtn: (/** @type {?} */ (true)),
            todayBtnTxt: (/** @type {?} */ ('')),
            firstDayOfWeek: (/** @type {?} */ ('')),
            sunHighlight: (/** @type {?} */ (true)),
            markCurrentDay: (/** @type {?} */ (true)),
            disableUntil: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableSince: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableDays: (/** @type {?} */ ([])),
            enableDays: (/** @type {?} */ ([])),
            markDates: (/** @type {?} */ ([])),
            markWeekends: (/** @type {?} */ ({})),
            disableDateRanges: (/** @type {?} */ ([])),
            disableWeekends: (/** @type {?} */ (false)),
            showWeekNumbers: (/** @type {?} */ (false)),
            height: (/** @type {?} */ ('32px')),
            width: (/** @type {?} */ ('100%')),
            selectionTxtFontSize: (/** @type {?} */ ('1rem')),
            showClearDateBtn: (/** @type {?} */ (true)),
            alignSelectorRight: (/** @type {?} */ (false)),
            disableHeaderButtons: (/** @type {?} */ (true)),
            minYear: (/** @type {?} */ (Year.min)),
            maxYear: (/** @type {?} */ (Year.max)),
            componentDisabled: (/** @type {?} */ (false)),
            showSelectorArrow: (/** @type {?} */ (true)),
            ariaLabelInputField: (/** @type {?} */ ('Date input field')),
            ariaLabelClearDate: (/** @type {?} */ ('Clear Date')),
            ariaLabelOpenCalendar: (/** @type {?} */ ('Open Calendar')),
            ariaLabelPrevMonth: (/** @type {?} */ ('Previous Month')),
            ariaLabelNextMonth: (/** @type {?} */ ('Next Month')),
            ariaLabelPrevYear: (/** @type {?} */ ('Previous Year')),
            ariaLabelNextYear: (/** @type {?} */ ('Next Year'))
        };
        this.months = [];
        this.years = [];
        this.elements = document.getElementsByClassName('mydp picker');
        this.firstTimeOpenedModal = true;
        this.modalHeightBefore = null;
        this.isMobile = null;
        this.isBrowser = false;
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', function (event) {
            if (_this.showSelector &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.removeInlineStyle();
                _this.showSelector = false;
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.removeInlineStyle();
                _this.showSelector = false;
                _this.cdRef.detectChanges();
            }
            if (event.target && _this.elem.nativeElement.contains(event.target)) {
                _this.resetMonthYearEdit();
                _this.cdRef.detectChanges();
            }
        });
    }
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.opts.startDate) {
            setTimeout(function () {
                _this.onUserDateInput(_this.opts.startDate);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ChangeZIndex = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            setTimeout(function () {
                // Fix for visible date / time picker input when picker plate is visible.
                try {
                    /** @type {?} */
                    var openedPicker = document.querySelector('.picker--opened');
                    /** @type {?} */
                    var allPickers = document.querySelectorAll('.picker');
                    allPickers.forEach(function (element) {
                        _this.renderer.setStyle(element, 'z-index', '0');
                    });
                    _this.renderer.setStyle(openedPicker, 'z-index', '100');
                }
                catch (error) { }
            }, 0);
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.renderer.setProperty(this.dateInput.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeInlineStyle = /**
     * @return {?}
     */
    function () {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                this.elem.nativeElement.parentElement.parentElement.style.height = this.modalHeightBefore + 'px';
            }
        }
        catch (error) { }
        setTimeout(function () {
            ((/** @type {?} */ (document.documentElement))).style.removeProperty('overflow');
        }, 155);
        this.labelActive = false;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setLocaleOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    MDBDatePickerComponent.prototype.addLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        this.localeService.locales = Object.assign({}, this.localeService.locales, locale);
        setTimeout(function () {
            _this.setLocaleOptions();
        }, 0);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var thisYear = new Date();
        /** @type {?} */
        var currentYear = thisYear.getFullYear();
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
            });
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
        if (this.opts.minYear === 1000) {
            this.opts.minYear = currentYear - 7;
        }
        if (this.opts.maxYear === 9999) {
            this.opts.maxYear = currentYear + 7;
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.resetMonthYearEdit = /**
     * @return {?}
     */
    function () {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserDateInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            /** @type {?} */
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (this.utilService.isInitializedDate(date)) {
                this.selectDate(date);
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: !(value.length === 0 || this.invalidDate) });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onFocusInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        ((/** @type {?} */ (document.documentElement))).style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onBlurInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserMonthInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidMonth = false;
        /** @type {?} */
        var m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserYearInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidYear = false;
        /** @type {?} */
        var y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isTodayDisabled = /**
     * @return {?}
     */
    function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseOptions = /**
     * @return {?}
     */
    function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            var idx = this.dayIdx;
            for (var i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '' || value === null) {
            this.selectedDate = { year: 0, month: 0, day: 0 };
            this.selectionDayTxt = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MDBDatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MDBDatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
            if (changes.options.currentValue.startDate) {
                this.onUserDateInput(changes.options.currentValue.startDate);
            }
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            /** @type {?} */
            var dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            /** @type {?} */
            var sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                });
                this.isDateSelected = true;
            }
            else {
                // Do not clear on init
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.hideKeyboard = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                /** @type {?} */
                var field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                /** @type {?} */
                var inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                field.onfocus = function () {
                    setTimeout(function () {
                        _this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(function () {
                            _this.renderer.removeChild(_this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                field.focus();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeBtnClicked = /**
     * @return {?}
     */
    function () {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.isDateSelected = false;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.openBtnClicked = /**
     * @return {?}
     */
    function () {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                if (this.firstTimeOpenedModal) {
                    this.modalHeightBefore = this.elem.nativeElement.parentElement.parentElement.offsetHeight;
                }
                this.firstTimeOpenedModal = false;
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                // tslint:disable-next-line:max-line-length
                this.elem.nativeElement.parentElement.parentElement.style.height = this.modalHeightBefore + this.pickerFrame.nativeElement.offsetHeight + 'px';
            }
        }
        catch (error) { }
        // Open selector button clicked
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        if (this.isMobile) {
            this.hideKeyboard();
        }
        this.labelActive = true;
        this.ChangeZIndex();
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setVisibleMonth = /**
     * @return {?}
     */
    function () {
        // Sets visible month of calendar
        /** @type {?} */
        var y = 0;
        /** @type {?} */
        var m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                /** @type {?} */
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        // Create current month
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthList = /**
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.yearsList = /**
     * @return {?}
     */
    function () {
        this.years = [];
        /** @type {?} */
        var firstYear = this.opts.minYear;
        /** @type {?} */
        var lastYear = this.opts.maxYear;
        for (var i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevMonth = /**
     * @return {?}
     */
    function () {
        // Previous month from calendar
        /** @type {?} */
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        /** @type {?} */
        var y = d.getFullYear();
        /** @type {?} */
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        // Next month from calendar
        /** @type {?} */
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        /** @type {?} */
        var y = d.getFullYear();
        /** @type {?} */
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevYear = /**
     * @return {?}
     */
    function () {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.todayClicked = /**
     * @return {?}
     */
    function () {
        // Today button clicked
        /** @type {?} */
        var today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        // Cell clicked on the calendar
        if (cell.cmo === this.prevMonthId) {
            // Previous month day
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            // Current month day - if date is already selected clear it
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            // Next month day
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellKeyDown = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode$1.enter || event.keyCode === KeyCode$1.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () {
        // Clears the date and notifies parent using callbacks and value accessor
        /** @type {?} */
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        this.setVisibleMonth();
        this.labelActive = false;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.selectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        /** @type {?} */
        var dateModel = this.getDateModel(date);
        // this.dateChanged.emit({ previousDate: this.selectionDayTxt, actualDate: dateModel });
        this.dateChanged.emit({
            date: date,
            jsdate: null,
            previousDateFormatted: this.selectionDayTxt,
            actualDateFormatted: dateModel,
            epoc: 0
        });
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
        if (this.opts.closeAfterSelect) {
            this.showSelector = false;
            this.removeInlineStyle();
        }
        this.labelActive = true;
        // hide calendar when date was clicked
        // this.showSelector = false;
    };
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    MDBDatePickerComponent.prototype.updateDateValue = /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    function (date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.tmp = date;
        this.isDateSelected = true;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDateModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Creates a date model object from the given parameter
        return this.formatDate(date);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.preZero = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.formatDate = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        /** @type {?} */
        var d = val.day;
        // 1 - 31
        /** @type {?} */
        var dd = this.preZero(val.day);
        // 01 - 31
        /** @type {?} */
        var ddd = this.opts.dayLabels[this.getWeekday(val)];
        // Sun-Sat
        /** @type {?} */
        var dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        // Sunday – Saturday
        /** @type {?} */
        var m = val.month;
        // 1 - 12
        /** @type {?} */
        var mm = this.preZero(val.month);
        // 01 - 12
        /** @type {?} */
        var mmm = this.getMonthShort(val.month);
        // Jan - Dec
        /** @type {?} */
        var mmmm = this.getMonthFull(val.month);
        // January – December
        /** @type {?} */
        var yy = val.year.toString().length === 2 ? val.year : val.year.toString().slice(2, 4);
        // 00 - 99
        /** @type {?} */
        var yyyy = val.year;
        /** @type {?} */
        var toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        /** @type {?} */
        var formatted = '';
        toReplace.forEach(function (el) {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        });
        return formatted;
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthText = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.weekText = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthShort = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthFull = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return this.opts.monthLabelsFull[m];
    };
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthStartIdx = /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    function (y, m) {
        // Month start index
        /** @type {?} */
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInPrevMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isCurrDay = /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    function (d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getToday = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    function (year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.sundayIdx = /**
     * @return {?}
     */
    function () {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    MDBDatePickerComponent.prototype.generateCalendar = /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    function (m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        var today = this.getToday();
        /** @type {?} */
        var monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        var dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        var dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        var dayNbr = 1;
        /** @type {?} */
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            /** @type {?} */
            var week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                var pm = dInPrevM - monthStart + 1;
                // Previous month
                for (var j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    var date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                }
                cmo = this.currMonthId;
                // Current month
                /** @type {?} */
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    /** @type {?} */
                    var date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            var weekNbr = this.opts.showWeekNumbers &&
                this.opts.firstDayOfWeek === 'mo' ?
                this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1
                    })
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM
                    })
                }
            });
        }
        this.monthList();
        this.yearsList();
    };
    /**
     * @param {?} selDate
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedDate = /**
     * @param {?} selDate
     * @return {?}
     */
    function (selDate) {
        // Parse selDate value - it can be string or IMyDate object
        /** @type {?} */
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            /** @type {?} */
            var sd = (/** @type {?} */ (selDate));
            /** @type {?} */
            var df = this.opts.dateFormat;
            /** @type {?} */
            var delimeters = this.utilService.getDateFormatDelimeters(df);
            /** @type {?} */
            var dateValue = this.utilService.getDateValue(sd, df, delimeters);
            date.year = this.utilService.getNumberByValue(dateValue[0]);
            if (df.indexOf('mmmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabelsFull);
            }
            else if (df.indexOf('mmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabels);
            }
            else {
                date.month = this.utilService.getNumberByValue(dateValue[1]);
            }
            date.day = this.utilService.getNumberByValue(dateValue[2]);
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedMonth = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setHeaderBtnDisabledState = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        /** @type {?} */
        var dpm = false;
        /** @type {?} */
        var dpy = false;
        /** @type {?} */
        var dnm = false;
        /** @type {?} */
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1)
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.checkActive = /**
     * @return {?}
     */
    function () {
        if (this.placeholder.length > 0) {
            return true;
        }
        if (this.labelActive) {
            return true;
        }
        if (this.isDateSelected) {
            return true;
        }
        return false;
    };
    MDBDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-date-picker',
                    exportAs: 'mdbdatepicker',
                    template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\">\r\n  <div class=\"md-form\">\r\n    <label (click)=\"openBtnClicked()\" *ngIf=\"label.length > 0\" [ngClass]=\"{\r\n          'active': checkActive(),\r\n          'disabled': opts.componentDisabled\r\n        }\">{{ label }}</label>\r\n    <input #dateInput type=\"text\" class=\"form-control mydp-date\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\" [ngClass]=\"{\r\n        'selectiondisabled': opts.componentDisabled,\r\n        'disabled': opts.componentDisabled\r\n      }\" placeholder=\"{{ placeholder }}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\" (blur)=\"onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" autocomplete=\"off\" [tabindex]=\"tabIndex\">\r\n  </div>\r\n  <div *ngIf=\"showSelector\" class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\"\r\n    tabindex=\"0\">\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\" role=\"menu\"\r\n          aria-label=\"Year selector\">\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\" (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\"\r\n          aria-label=\"Month selector\">\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Previous month\"\r\n          (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button>\r\n        <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Next month\"\r\n          (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td class=\"picker__day daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n            <td class=\"picker__day\" *ngFor=\"let d of w.week\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\">\r\n              <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n              <div class=\"picker__day\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\"\r\n                (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\" tabindex=\"0\">\r\n                {{d.dateObj.day}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button type=\"button\" *ngIf=\"opts.showTodayBtn\" class=\"picker__button--today\" (click)=\"todayClicked()\" role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\">\r\n          {{opts.todayBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\" role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\">\r\n          {{opts.clearBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\" (click)=\"showSelector = false; removeInlineStyle();\"\r\n          role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\">\r\n          {{opts.closeBtnTxt}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MDBDatePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LocaleService },
        { type: UtilService },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MDBDatePickerComponent.propDecorators = {
        tabIndex: [{ type: Input }],
        options: [{ type: Input }],
        locale: [{ type: Input }],
        defaultMonth: [{ type: Input }],
        selDate: [{ type: Input }],
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        selector: [{ type: Input }],
        disabled: [{ type: Input }],
        dateChanged: [{ type: Output }],
        inputFieldChanged: [{ type: Output }],
        calendarViewChanged: [{ type: Output }],
        calendarToggle: [{ type: Output }],
        inputFocusBlur: [{ type: Output }],
        divFocus: [{ type: ViewChild, args: ['divFocus',] }],
        pickerFrame: [{ type: ViewChild, args: ['pickerFrame',] }],
        dateInput: [{ type: ViewChild, args: ['dateInput',] }]
    };
    return MDBDatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    DatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                    exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective]
                },] }
    ];
    return DatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleChartComponent = /** @class */ (function () {
    function SimpleChartComponent() {
        this.options = {
            barColor: null,
            trackColor: null,
            scaleColor: null,
            scaleLength: '',
            lineCap: null,
            lineWidth: null,
            trackWidth: null,
            size: null,
            rotate: null,
            duration: null,
            enableAnimation: null,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    }
    /**
     * @return {?}
     */
    SimpleChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options.barColor = '#' + this.barColor;
        this.options.trackColor = '#' + this.trackColor;
        this.options.scaleColor = '#' + this.scaleColor;
        this.options.scaleLength = this.scaleLength;
        this.options.lineCap = this.lineCap;
        this.options.lineWidth = this.lineWidth;
        this.options.trackWidth = this.trackWidth;
        this.options.size = this.size;
        this.options.rotate = this.rotate;
        this.options.animate.duration = this.animate.duration;
        this.options.animate.enabled = this.animate.enabled;
    };
    SimpleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-simple-chart',
                    template: "<span class=\"min-chart\">\n  <span \n  *ngIf=\"customText\"  \n  class=\"chart-custom-text\"\n  [ngStyle]=\"{\n  'line-height': size + 'px',\n  'width': size + 'px',\n  'height': size + 'px'}\">{{ customText }}</span>\n  <span \n  *ngIf=\"!customText\" \n  class=\"percent\">{{ percent }}</span>\n  <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart>\n</span>"
                }] }
    ];
    /** @nocollapse */
    SimpleChartComponent.ctorParameters = function () { return []; };
    SimpleChartComponent.propDecorators = {
        customText: [{ type: Input, args: ['customText',] }],
        percent: [{ type: Input, args: ['percent',] }],
        barColor: [{ type: Input, args: ['barColor',] }],
        trackColor: [{ type: Input, args: ['trackColor',] }],
        scaleColor: [{ type: Input, args: ['scaleColor',] }],
        scaleLength: [{ type: Input, args: ['scaleLength',] }],
        lineCap: [{ type: Input, args: ['lineCap',] }],
        lineWidth: [{ type: Input, args: ['lineWidth',] }],
        trackWidth: [{ type: Input, args: ['trackWidth',] }],
        size: [{ type: Input, args: ['size',] }],
        rotate: [{ type: Input, args: ['rotate',] }],
        animate: [{ type: Input, args: ['animate',] }]
    };
    return SimpleChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EasyPieChartComponent = /** @class */ (function () {
    function EasyPieChartComponent(el, platformId, _r) {
        this._r = _r;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        this.element = el;
        /** @type {?} */
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.options = Object.assign(options, this.options);
    }
    /**
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var size = this.options.size;
            this.element.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
            // Positioning text in center of chart
            /** @type {?} */
            var percent = document.querySelector('.percent');
            if (percent) {
                this._r.setStyle(percent, 'line-height', size + 'px');
                this._r.setStyle(percent, 'width', size + 'px');
                this._r.setStyle(percent, 'height', size + 'px');
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    EasyPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-easy-pie-chart',
                    template: '<div>Loading</div>'
                }] }
    ];
    /** @nocollapse */
    EasyPieChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 }
    ]; };
    EasyPieChartComponent.propDecorators = {
        percent: [{ type: Input, args: ['percent',] }],
        options: [{ type: Input, args: ['options',] }]
    };
    return EasyPieChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartSimpleModule = /** @class */ (function () {
    function ChartSimpleModule() {
    }
    ChartSimpleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SimpleChartComponent, EasyPieChartComponent
                    ],
                    exports: [
                        SimpleChartComponent, EasyPieChartComponent
                    ],
                    imports: [CommonModule]
                },] }
    ];
    return ChartSimpleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var UploadStatus = {
    Queue: 0,
    Uploading: 1,
    Done: 2,
    Cancelled: 3,
};
UploadStatus[UploadStatus.Queue] = 'Queue';
UploadStatus[UploadStatus.Uploading] = 'Uploading';
UploadStatus[UploadStatus.Done] = 'Done';
UploadStatus[UploadStatus.Cancelled] = 'Cancelled';
/**
 * @param {?} bytes
 * @return {?}
 */
function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    /** @type {?} */
    var k = 1024;
    /** @type {?} */
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = /** @class */ (function () {
    function MDBUploaderService(concurrency, contentTypes, maxUploads) {
        if (concurrency === void 0) { concurrency = Number.POSITIVE_INFINITY; }
        if (contentTypes === void 0) { contentTypes = ['*']; }
        if (maxUploads === void 0) { maxUploads = Number.POSITIVE_INFINITY; }
        var _this = this;
        this.queue = [];
        this.serviceEvents = new EventEmitter();
        this.uploadScheduler = new Subject();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.uploadScheduler
            .pipe(mergeMap(function (upload) { return _this.startUpload(upload); }, concurrency))
            .subscribe(function (uploadOutput) { return _this.serviceEvents.emit(uploadOutput); });
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    MDBUploaderService.prototype.handleFiles = /**
     * @param {?} incomingFiles
     * @return {?}
     */
    function (incomingFiles) {
        var _this = this;
        var _a;
        /** @type {?} */
        var allowedIncomingFiles = [].reduce.call(incomingFiles, function (acc, checkFile, i) {
            /** @type {?} */
            var futureQueueLength = acc.length + _this.queue.length + 1;
            if (_this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= _this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                var rejectedFile = _this.makeUploadFile(checkFile, i);
                _this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }, []);
        (_a = this.queue).push.apply(_a, __spread([].map.call(allowedIncomingFiles, function (file, i) {
            /** @type {?} */
            var uploadFile = _this.makeUploadFile(file, i);
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        })));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    MDBUploaderService.prototype.initInputEvents = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        return input.subscribe(function (event) {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    var uploadFileIndex = _this.queue.findIndex(function (file) { return file === event.file; });
                    if (uploadFileIndex !== -1 && event.file) {
                        _this.uploadScheduler.next({ file: _this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    var files = _this.queue.filter(function (file) { return file.progress.status === UploadStatus.Queue; });
                    files.forEach(function (file) { return _this.uploadScheduler.next({ file: file, event: event }); });
                    break;
                case 'cancel':
                    /** @type {?} */
                    var id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    /** @type {?} */
                    var index = _this.subs.findIndex(function (sub) { return sub.id === id_1; });
                    if (index !== -1 && _this.subs[index].sub) {
                        _this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        var fileIndex = _this.queue.findIndex(function (file) { return file.id === id_1; });
                        if (fileIndex !== -1) {
                            _this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: _this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    _this.subs.forEach(function (sub) {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        var file = _this.queue.find(function (uploadFile) { return uploadFile.id === sub.id; });
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    });
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    var i = _this.queue.findIndex(function (file) { return file.id === event.id; });
                    if (i !== -1) {
                        /** @type {?} */
                        var file = _this.queue[i];
                        _this.queue.splice(i, 1);
                        _this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (_this.queue.length) {
                        _this.queue = [];
                        _this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        });
    };
    /**
     * @param {?} upload
     * @return {?}
     */
    MDBUploaderService.prototype.startUpload = /**
     * @param {?} upload
     * @return {?}
     */
    function (upload) {
        var _this = this;
        return new Observable(function (observer) {
            /** @type {?} */
            var sub = _this.uploadFile(upload.file, upload.event)
                .subscribe(function (output) {
                observer.next(output);
            }, function (err) {
                observer.error(err);
                observer.complete();
            }, function () {
                observer.complete();
            });
            _this.subs.push({ id: upload.file.id, sub: sub });
        });
    };
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    MDBUploaderService.prototype.uploadFile = /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    function (file, event) {
        var _this = this;
        return new Observable(function (observer) {
            /** @type {?} */
            var url = event.url || '';
            /** @type {?} */
            var method = event.method || 'POST';
            /** @type {?} */
            var data = event.data || {};
            /** @type {?} */
            var headers = event.headers || {};
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var time = new Date().getTime();
            /** @type {?} */
            var progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            var speed = 0;
            /** @type {?} */
            var eta = null;
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    /** @type {?} */
                    var percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    var diff = new Date().getTime() - time;
                    speed = Math.round(e.loaded / diff * 1000);
                    progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s",
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta)
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', function (e) {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    var speedAverage = Math.round(file.size / (new Date().getTime() - progressStartTime) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: humanizeBytes(speedAverage) + "/s",
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta || 0)
                        }
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = _this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                var uploadFile_1 = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                var uploadIndex = _this.queue.findIndex(function (outFile) { return outFile.nativeFile === uploadFile_1; });
                if (_this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach(function (key) { return file.form.append(key, data[key]); });
                Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                file.form.append(event.fieldName || 'file', uploadFile_1, uploadFile_1.name);
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return function () {
                xhr.abort();
            };
        });
    };
    /**
     * @param {?} sec
     * @return {?}
     */
    MDBUploaderService.prototype.secondsToHuman = /**
     * @param {?} sec
     * @return {?}
     */
    function (sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.generateId = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(7);
    };
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    MDBUploaderService.prototype.setContentTypes = /**
     * @param {?} contentTypes
     * @return {?}
     */
    function (contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find(function (type) { return type === '*'; }) !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.allContentTypesAllowed = /**
     * @return {?}
     */
    function () {
        return this.contentTypes.find(function (type) { return type === '*'; }) !== undefined;
    };
    /**
     * @param {?} mimetype
     * @return {?}
     */
    MDBUploaderService.prototype.isContentTypeAllowed = /**
     * @param {?} mimetype
     * @return {?}
     */
    function (mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find(function (type) { return type === mimetype; }) !== undefined;
    };
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    MDBUploaderService.prototype.makeUploadFile = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
        return {
            fileIndex: index,
            id: this.generateId(),
            name: file.name,
            size: file.size,
            type: file.type,
            form: new FormData(),
            progress: {
                status: UploadStatus.Queue,
                data: {
                    percentage: 0,
                    speed: 0,
                    speedHuman: humanizeBytes(0) + "/s",
                    startTime: null,
                    endTime: null,
                    eta: null,
                    etaHuman: null
                }
            },
            lastModifiedDate: file.lastModified,
            sub: undefined,
            nativeFile: file
        };
    };
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    MDBUploaderService.prototype.parseResponseHeaders = /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    function (httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders.split('\n')
            .map(function (x) { return x.split(/: */, 2); })
            .filter(function (x) { return x[0]; })
            .reduce(function (ac, x) {
            ac[x[0]] = x[1];
            return ac;
        }, {});
    };
    return MDBUploaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBFileDropDirective = /** @class */ (function () {
    function MDBFileDropDirective(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    };
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isServer) {
            return;
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        /** @type {?} */
        var event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    };
    MDBFileDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbFileDrop]'
                },] }
    ];
    /** @nocollapse */
    MDBFileDropDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    MDBFileDropDirective.propDecorators = {
        uploadInput: [{ type: Input }],
        uploadOutput: [{ type: Output }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return MDBFileDropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBFileSelectDirective = /** @class */ (function () {
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = function () {
            _this.upload.handleFiles(_this.el.files);
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
    };
    MDBFileSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbFileSelect]'
                },] }
    ];
    /** @nocollapse */
    MDBFileSelectDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    MDBFileSelectDirective.propDecorators = {
        uploadInput: [{ type: Input }],
        uploadOutput: [{ type: Output }]
    };
    return MDBFileSelectDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileInputModule = /** @class */ (function () {
    function FileInputModule() {
    }
    FileInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MDBFileSelectDirective,
                        MDBFileDropDirective
                    ],
                    exports: [
                        MDBFileSelectDirective,
                        MDBFileDropDirective
                    ]
                },] }
    ];
    return FileInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CharCounterDirective = /** @class */ (function () {
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    };
    CharCounterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCharCounter]'
                },] }
    ];
    /** @nocollapse */
    CharCounterDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CharCounterDirective.propDecorators = {
        length: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['input',] }],
        hide: [{ type: HostListener, args: ['blur',] }],
        show: [{ type: HostListener, args: ['focus',] }]
    };
    return CharCounterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CharCounterModule = /** @class */ (function () {
    function CharCounterModule() {
    }
    /**
     * @return {?}
     */
    CharCounterModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CharCounterModule, providers: [] };
    };
    CharCounterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CharCounterDirective],
                    exports: [CharCounterDirective]
                },] }
    ];
    return CharCounterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        /** @type {?} */
        var match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
                return this.wrappedOption.icon;
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptionList = /** @class */ (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        // private _highlightedOption: Option = null;
        this._highlightedOption = null;
        this.setToNullValue = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            /** @type {?} */
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            if (option.group) {
                o.disabled = true;
                o.group = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "highlightFirst", {
        get: /**
         * @return {?}
         */
        function () { return this._highlightFirst; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._highlightFirst = value;
        },
        enumerable: true,
        configurable: true
    });
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstShown = this.getFirstShown();
        /** @type {?} */
        var firstSelected = this.getFirstShownSelected();
        if (this.highlightFirst && firstShown && !firstSelected) {
            this.highlightOption(firstShown);
        }
        else {
            this.highlightOption(firstSelected);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /** Util. **/
        get: /**
         * Util. *
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.hasSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && !option.group && !option.disabled) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // return null;
        return this.setToNullValue;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // return null;
        return this.setToNullValue;
    };
    return OptionList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this.selectAllSelected = false;
    }
    /** Event handlers. **/
    // Angular life cycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.onkeyup = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    function () {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeydown = /**
     * @return {?}
     */
    function () {
        this.setOptionHeight();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setDropdownHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionList.options.filter(function (el) { return function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', (_this.dropdownHeight + 8) + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }; });
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setVisibleOptionsNumber = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach(function (el) {
            if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG') {
                _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
            }
            if (el.firstElementChild.tagName !== 'IMG') {
                _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.classList;
        setTimeout(function () {
            container.add('fadeInSelect');
        }, 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = (this.state === 'invisible' ? 'visible' : 'invisible');
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            var disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (var i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout(function () {
                _this.filterInput.nativeElement.focus();
            }, 0);
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            var optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSelectAllClick = /**
     * @return {?}
     */
    function () {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.updateSelectAllState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var areAllSelected = this.optionList.filtered.every(function (option) {
            return option.selected ? true : false;
        });
        areAllSelected ? this.selectAllSelected = true : this.selectAllSelected = false;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationDone.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listHeight;
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        listHeight = this.multiple && this.enableSelectAll ? list.offsetHeight - this.optionHeight : list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-select-dropdown',
                    template: "<div (click)=\"$event.stopPropagation()\" class=\"dropdown-content\" #dropdownContent [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"\n[@dropdownAnimation]=\"{value: state, params: {startHeight: startHeight, endHeight: endHeight}}\" (@dropdownAnimation.done)=\"onAnimationDone()\" (@dropdownAnimation.start)=\"onAnimationStart()\">\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n    type=\"text\"\n    class=\"search form-control w-100 d-block\"\n    #filterInput\n    autocomplete=\"on\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onSingleFilterInput($event)\"\n    (keydown)=\"onSingleFilterKeydown($event)\">\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\"\n    (wheel)=\"onOptionsWheel($event)\">\n      <li [ngStyle]=\"{ 'height.px': optionHeight }\" *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\" (click)=\"onSelectAllClick()\">\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"selectAllSelected\" class=\"form-check-input {{customClass}}\">\n          <label></label>\n          {{selectAllLabel}}\n        </span>\n      </li>\n      <li *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group, 'd-flex justify-content-between flex-row-reverse align-items-center': option.icon}\"\n        [ngStyle]=\"{'height': optionHeight, 'background-color': getOptionStyle(option)['background-color'], 'color': getOptionStyle(option)['color']}\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\">\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\">\n        <span class=\"deselect-option\" *ngIf=\"!multiple\">{{option.label}}</span>\n        <span class=\"deselect-option\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"option.selected\" class=\"form-check-input {{customClass}}\" [disabled]=\"option.disabled\">\n          <label></label>\n          {{option.label}}\n        </span>\n      </li>\n      <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\">\n        <span>{{notFoundMsg}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.Default,
                    animations: [trigger('dropdownAnimation', [
                            state('invisible', style({ opacity: 0, height: '0px' })),
                            state('visible', style({ opacity: 1, height: '*' })),
                            transition('invisible => visible', animate('300ms ease')),
                            transition('visible => invisible', animate('300ms ease'))
                        ])]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        left: [{ type: Input }],
        multiple: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        optionList: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        placeholder: [{ type: Input }],
        customClass: [{ type: Input }],
        visibleOptions: [{ type: Input }],
        dropdownHeight: [{ type: Input }],
        dropdownMaxHeight: [{ type: Input }],
        optionHeight: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        close: [{ type: Output }],
        optionClicked: [{ type: Output }],
        singleFilterClick: [{ type: Output }],
        singleFilterInput: [{ type: Output }],
        singleFilterKeydown: [{ type: Output }],
        animationDone: [{ type: Output }],
        animationStart: [{ type: Output }],
        selectAll: [{ type: Output }],
        filterInput: [{ type: ViewChild, args: ['filterInput',] }],
        optionsList: [{ type: ViewChild, args: ['optionsList',] }],
        dropdownContent: [{ type: ViewChild, args: ['dropdownContent',] }],
        onkeyup: [{ type: HostListener, args: ['keyup',] }],
        onkeydown: [{ type: HostListener, args: ['input',] }]
    };
    return SelectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    // Angular lifecycle hooks.
    function SelectComponent(el, renderer, document, platformId, cdRef) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.cdRef = cdRef;
        this.customClass = '';
        this.allowClear = false;
        this.disabled = false;
        this.highlightFirst = true;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        this.filterEnabled = false;
        this.optionHeight = 37;
        this.enableSelectAll = true;
        this.selectAllLabel = 'Select all';
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.changed = new EventEmitter();
        // Angular lifecycle hooks.
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
        this._value = [];
        this.visibleOptionsDefault = 4;
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.labelActive = false;
        this.dropdownAnimationDone = false;
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.filterHeight = 0;
        this.itemsBefore = [];
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.closeSelect = /**
     * Event handlers. *
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isChild($event.target) &&
            this.isOpen && this.dropdownAnimationDone &&
            $event.target !== this.el.nativeElement) {
            this.closeDropdown();
            this.updateLabelState();
            this.clearFilterInput();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
        this.updateFilterHeight();
        this.updateDropdownHeight();
        this.updateLabelState();
        if (this.highlightFirst) {
            this.optionList.highlightFirst = true;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterHeight = /**
     * @return {?}
     */
    function () {
        this.filterEnabled ? (this.filterHeight = 78) : (this.filterHeight = 0);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateDropdownHeight = /**
     * @return {?}
     */
    function () {
        if (this.multiple && this.enableSelectAll) {
            // tslint:disable-next-line:max-line-length
            this.dropdownMaxHeight = this.visibleOptions ? this.optionHeight * (this.visibleOptions + 1) : this.optionHeight * (this.visibleOptionsDefault + 1);
            this.dropdownHeight = this.optionHeight * (this.optionList.options.length + 1);
        }
        else {
            // tslint:disable-next-line:max-line-length
            this.dropdownMaxHeight = this.visibleOptions ? this.optionHeight * this.visibleOptions : this.optionHeight * this.visibleOptionsDefault;
            this.dropdownHeight = this.optionHeight * this.optionList.options.length;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onDropdownAnimationDone = /**
     * @return {?}
     */
    function () {
        this.dropdownAnimationDone = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onDropdownAnimationStart = /**
     * @return {?}
     */
    function () {
        this.dropdownAnimationDone = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
        this.setArrowUpIcon();
        this.setArrowDownIcon();
        this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes.options.currentValue);
            this.updateState();
            this.updateDropdownHeight();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            this.changed.emit({
                previousValue: changes.options.previousValue,
                currentValue: changes.options.currentValue
            });
        }
        if (changes.hasOwnProperty('noFilter')) {
            /** @type {?} */
            var numOptions = this.optionList.options.length;
            /** @type {?} */
            var minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.updateState();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.setArrowUpIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25BC;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.setArrowDownIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25B2;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    };
    /**
     * @param {?} elemnt
     * @return {?}
     */
    SelectComponent.prototype.isChild = /**
     * @param {?} elemnt
     * @return {?}
     */
    function (elemnt) {
        /** @type {?} */
        var node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    // Select container.
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = 
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isChild(event.target)) {
            this.selectContainerClicked = true;
            this.openDropdown();
            this.updateLabelState();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this.labelActive = true;
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerBlur = /**
     * @return {?}
     */
    function () {
        this.updateLabelState();
        if (!this.isOpen && !this.disabled) {
            this.onTouched();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    // Dropdown container.
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = 
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.onDropdownClose = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        this.closeDropdown(focus);
    };
    // Single filter input.
    // Single filter input.
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = 
    // Single filter input.
    /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var hasShown = this.optionList.filter(term);
        if (this.multiple && this.enableSelectAll) {
            this.dropdownHeight = (this.optionList.filtered.length + 1) * this.optionHeight;
        }
        else {
            this.dropdownHeight = this.optionList.filtered.length * this.optionHeight;
        }
        if (!hasShown) {
            this.noOptionsFound.emit(term);
            this.dropdownHeight = this.optionHeight;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    // Multiple filter input.
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterInput = 
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        /** @type {?} */
        var term = event.target.value;
        /** @type {?} */
        var hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    // Single clear select.
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = 
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.clearClicked = true;
        this.clearSelection();
        this.placeholderView = this.placeholder;
        this.onTouched();
        this.updateLabelState();
    };
    // Multiple deselect option.
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = 
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.openDropdown();
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string' ||
                typeof v === 'number' ||
                typeof v === 'boolean') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach(function (option) {
            _this.selectOption(option);
        });
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.hasSelected = true;
        if (!value) {
            this.hasSelected = false;
        }
        this.updateLabelState();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
        this.updateFilterWidth();
        this.cdRef.markForCheck();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionsList = /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateLabelState = /**
     * @return {?}
     */
    function () {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.labelActive = false;
        }
        else {
            this.labelActive = true;
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'visible');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'hidden');
            this.isOpen = true;
            if (this.appendToBody) {
                setTimeout(function () {
                    _this._appendDropdown();
                }, 0);
            }
            this.updateWidth();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            this.opened.emit(this);
        }
        this.cdRef.markForCheck();
    };
    /**
     * @param {?=} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @param {?=} focus
     * @return {?}
     */
    function (focus) {
        if (focus === void 0) { focus = false; }
        if (this.appendToBody && this.isOpen) {
            this.renderer.removeChild('body', this.dropdown._elementRef.nativeElement);
        }
        /** @type {?} */
        var container = this.el.nativeElement.lastElementChild.classList;
        this.renderer.removeStyle(this.el.nativeElement, 'z-index');
        container.remove('fadeInSelect');
        if (this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'visible');
        }
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(this);
        }
        this.onTouched();
        this.cdRef.markForCheck();
    };
    /** Select. **/
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
            this.hasSelected = true;
            this.updateLabelState();
        }
        if (!this.multiple && !option.disabled) {
            this.closeDropdown();
        }
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.placeholderView = this.placeholder;
            if (this.optionList.selection.length === 0) {
                this.hasSelected = false;
                this.updateLabelState();
            }
            this.deselected.emit(option.wrappedOption);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            this.hasSelected = false;
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) {
                    return option.wrappedOption;
                }));
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (this.multiple && option !== null) {
            this.toggleSelectOption(option);
        }
        if (!this.multiple && option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /**
     * @param {?} isSelected
     * @return {?}
     */
    SelectComponent.prototype.onSelectAll = /**
     * @param {?} isSelected
     * @return {?}
     */
    function (isSelected) {
        var _this = this;
        if (isSelected) {
            this.optionList.filtered.forEach(function (option) {
                _this.selectOption(option);
            });
        }
        else {
            this.optionList.filtered.forEach(function (option) {
                _this.deselectOption(option);
            });
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * Filter. *
     * @return {?}
     */
    function () {
        this.dropdown.clearFilterInput();
        this.updateDropdownHeight();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                event.preventDefault();
                this.closeDropdown(true);
                this.updateLabelState();
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
                if (this.multiple && this.enableSelectAll) {
                    this.dropdown.updateSelectAllState();
                }
            }
            else if (key === this.KEYS.UP) {
                event.preventDefault();
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
            }
            else if (key === this.KEYS.DOWN) {
                event.preventDefault();
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
            }
        }
        else {
            if (key === this.KEYS.ENTER ||
                key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                event.preventDefault();
                this.openDropdown();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected &&
                this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC ||
            key === this.KEYS.TAB ||
            key === this.KEYS.UP ||
            key === this.KEYS.DOWN ||
            key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype.focus = /**
     * View. *
     * @return {?}
     */
    function () {
        this.hasFocus = true;
        try {
            if (this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            else {
                this.selectionSpan.nativeElement.focus();
            }
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var docEl = document.documentElement;
        /** @type {?} */
        var elPosition = 0;
        if (this.isBrowser) {
            elPosition = this.el.nativeElement.getBoundingClientRect().bottom + this.document.documentElement.scrollTop;
        }
        /** @type {?} */
        var selectSpan = this.selectionSpan.nativeElement;
        this.left = selectSpan.offsetLeft;
        /** @type {?} */
        var bottom = docEl.scrollTop + docEl.clientHeight;
        /** @type {?} */
        var dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
        if (elPosition + dropdownHeight >= bottom) {
            this.top = selectSpan.offsetHeight - dropdownHeight - this.filterHeight;
        }
        else {
            this.top = 0;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._updateAppendedPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var selectRect = this.el.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
            /** @type {?} */
            var offsetTop = selectRect.top + scrollTop;
            /** @type {?} */
            var height = selectRect.height;
            /** @type {?} */
            var dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.left = selectRect.left;
            if (offsetTop + dropdownHeight + this.filterHeight > scrollTop + this.document.documentElement.clientHeight) {
                this.top = offsetTop - dropdownHeight + height - this.filterHeight;
            }
            else {
                this.top = offsetTop;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._appendDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var body = this.document.querySelector('body');
            /** @type {?} */
            var dropdown = this.dropdown._elementRef.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
            }
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth =
                value.length === 0
                    ? 1 + this.placeholderView.length * 10
                    : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-select',
                    template: "<label *ngIf=\"label !== ''\" [ngClass]=\"{'active': labelActive }\">\n  {{label}}\n</label>\n<div\n  #selection\n  [attr.tabindex]=\"disabled ? null : 0\"\n  [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n  [tabindex]=\"tabindex\"\n  (mousedown)=\"onSelectContainerClick($event)\"\n  (focus)=\"onSelectContainerFocus()\"\n  (blur)=\"onSelectContainerBlur()\"\n  (keydown)=\"onSelectContainerKeydown($event)\"\n  (window:resize)=\"onWindowResize()\">\n\n  <div class=\"single form-control\"\n    *ngIf=\"!multiple\">\n    <div class=\"value\"\n      *ngIf=\"optionList.hasSelected()\">\n      {{optionList.selection[0].label}}\n    </div>\n    <div class=\"placeholder\"\n      *ngIf=\"!optionList.hasSelected()\">\n      {{placeholderView}}\n    </div>\n    <div #clear class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\">\n      &#x2715;\n    </div>\n  </div>\n\n  <div class=\"multiple form-control\"\n      *ngIf=\"multiple\">\n      <div class=\"placeholder\"\n        *ngIf=\"!optionList.hasSelected()\">\n        {{placeholderView}}\n      </div>\n\n      <div [ngStyle]=\"allowClear && { 'width.%': 90}\" class=\"option\">\n        <span *ngFor=\"let option of optionList.selection\">\n          {{option.label}}<span class=\"deselect-option\">,</span>\n        </span>\n      </div>\n\n      <div #clear class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\">\n      &#x2715;\n    </div>\n\n  </div>\n</div>\n<mdb-select-dropdown\n  *ngIf=\"isOpen\"\n  #dropdown\n  [enableSelectAll]=\"enableSelectAll\"\n  [multiple]=\"multiple\"\n  [dropdownHeight]=\"dropdownHeight\"\n  [dropdownMaxHeight]=\"dropdownMaxHeight\"\n  [optionHeight]=\"optionHeight\"\n  [optionList]=\"optionList\"\n  [notFoundMsg]=\"notFoundMsg\"\n  [customClass]=\"customClass\"\n  [highlightColor]=\"highlightColor\"\n  [highlightTextColor]=\"highlightTextColor\"\n  [filterEnabled]=\"filterEnabled\"\n  [placeholder]=\"filterPlaceholder\"\n  [selectAllLabel]=\"selectAllLabel\"\n  [top]=\"top\"\n  [left]=\"left\"\n  [width]=\"width\"\n  (close)=\"onDropdownClose($event)\"\n  (optionClicked)=\"onDropdownOptionClicked($event)\"\n  (singleFilterClick)=\"onSingleFilterClick()\"\n  (singleFilterInput)=\"onSingleFilterInput($event)\"\n  (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"\n  (selectAll)=\"onSelectAll($event)\"\n  (animationDone)=\"onDropdownAnimationDone()\"\n  (animationStart)=\"onDropdownAnimationStart()\">\n</mdb-select-dropdown>\n",
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] }] },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        customClass: [{ type: Input }],
        allowClear: [{ type: Input }],
        disabled: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        highlightFirst: [{ type: Input }],
        multiple: [{ type: Input }],
        noFilter: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        placeholder: [{ type: Input }],
        filterPlaceholder: [{ type: Input }],
        label: [{ type: Input }],
        filterEnabled: [{ type: Input }],
        visibleOptions: [{ type: Input }],
        optionHeight: [{ type: Input }],
        tabindex: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        appendToBody: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        selected: [{ type: Output }],
        deselected: [{ type: Output }],
        noOptionsFound: [{ type: Output }],
        changed: [{ type: Output }],
        selectionSpan: [{ type: ViewChild, args: ['selection',] }],
        dropdown: [{ type: ViewChild, args: ['dropdown',] }],
        filterInput: [{ type: ViewChild, args: ['filterInput',] }],
        clearButton: [{ type: ViewChild, args: ['clear',] }],
        closeSelect: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SelectComponent,
                        SelectDropdownComponent
                    ],
                    exports: [
                        SelectComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ]
                },] }
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CONTAINER_CLASS_NAME = 'spinning-preloader-container';
/** @type {?} */
var COMPLETE_CLASS_NAME = 'complete';
/** @type {?} */
var CONTAINER_QUERY = "." + CONTAINER_CLASS_NAME;
/** @type {?} */
var CONTAINER_NAME = CONTAINER_CLASS_NAME.split('-').join(' ');
/** @type {?} */
var TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE = "The " + CONTAINER_NAME + " was not found";
/** @type {?} */
var EMULATE_ELEMENT_NAME = 'div';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBSpinningPreloader = /** @class */ (function () {
    function MDBSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    MDBSpinningPreloader.errorHandler = /**
     * @return {?}
     */
    function () {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.start = /**
     * @return {?}
     */
    function () {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    };
    Object.defineProperty(MDBSpinningPreloader.prototype, "container", {
        get: /**
         * @return {?}
         */
        function () {
            return this._container;
        },
        set: /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
        },
        enumerable: true,
        configurable: true
    });
    MDBSpinningPreloader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBSpinningPreloader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] }] }
    ]; };
    return MDBSpinningPreloader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
var ProgressDirective = /** @class */ (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.addBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.removeBar = /**
     * @param {?} bar
     * @return {?}
     */
    function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] }
    ];
    ProgressDirective.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: HostBinding, args: ['attr.max',] }, { type: Input }],
        addClass: [{ type: HostBinding, args: ['class.progress',] }]
    };
    return ProgressDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?
var BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        /** @type {?} */
        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-bar',
                    template: "<div class=\"progress-bar\"\nstyle=\"min-width: 0;\"\nrole=\"progressbar\"\n[ngClass]=\"type && 'progress-bar-' + type\"\n[ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\naria-valuemin=\"0\"\n[attr.aria-valuenow]=\"value\"\n[attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n[attr.aria-valuemax]=\"max\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressDirective, decorators: [{ type: Host }] }
    ]; };
    BarComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }]
    };
    return BarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarConfigComponent = /** @class */ (function () {
    function ProgressbarConfigComponent() {
        /**
         * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
         */
        this.animate = true;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
    ProgressbarConfigComponent.decorators = [
        { type: Injectable }
    ];
    return ProgressbarConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-progressbar, mdb-progress',
                    template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\">\n  <mdb-bar [type]=\"type\" [value]=\"value\">\n    <ng-content></ng-content>\n  </mdb-bar>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfigComponent }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ProgressbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    };
    ProgressbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                    exports: [ProgressDirective, BarComponent, ProgressbarComponent]
                },] }
    ];
    return ProgressbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent(el, platformId) {
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
    }
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        /** @type {?} */
        var colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var counter = 0;
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval(function () {
                switch (counter) {
                    case 0:
                        _this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        _this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        _this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + _this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }, 1333);
        }
    };
    ProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinner',
                    template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProgressSpinnerComponent.propDecorators = {
        spinnerType: [{ type: Input }],
        spinnerColor: [{ type: Input }]
    };
    return ProgressSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(josephperrott): Benchpress tests.
/**
 * A single degree in radians.
 * @type {?}
 */
var DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
var startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
var MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MdProgressSpinnerCssMatStylerDirective = /** @class */ (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    MdProgressSpinnerCssMatStylerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSpinners], mat-progress-spinner'
                },] }
    ];
    MdProgressSpinnerCssMatStylerDirective.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
    };
    return MdProgressSpinnerCssMatStylerDirective;
}());
/**
 * <md-progress-spinner> component.
 */
var MdProgressSpinnerComponent = /** @class */ (function () {
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * The id of the last requested animation.
         */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        /**
        * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
        * because voiceover does not report the progress indicator as indeterminate if the aria min
        * and/or max value are number values.
        */
        get: /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._interdeterminateInterval;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} interval
         * @return {?}
         */
        function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Clean up any animations that were running.
    */
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype.ngOnDestroy = /**
     * Clean up any animations that were running.
     * @return {?}
     */
    function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        /** The color of the progress-spinner. Can be primary, accent, or warn. */
        get: /**
         * The color of the progress-spinner. Can be primary, accent, or warn.
         * @return {?}
         */
        function () { return this._color; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
        get: /**
         * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
            return;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v != null && this.mode === 'determinate') {
                /** @type {?} */
                var newValue = clamp(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        /**
        * Mode of the progress circle
        *
        * Input must be one of the values from ProgressMode, defaults to 'determinate'.
        * mode is bound to the host as the attribute host.
        */
        get: /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode !== this._mode) {
                if (mode === 'indeterminate') {
                    this._startIndeterminateAnimation();
                }
                else {
                    this._cleanupIndeterminateAnimation();
                    this._animateCircle(0, this._value);
                }
                this._mode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Animates the circle from one percentage value to another.
    *
    * @param animateFrom The percentage of the circle filled starting the animation.
    * @param animateTo The percentage of the circle filled ending the animation.
    * @param ease The easing function to manage the pace of change in the animation.
    * @param duration The length of time to show the animation, in milliseconds.
    * @param rotation The starting angle of the circle fill, with 0° represented at the top center
    *    of the circle.
    */
    /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._animateCircle = /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        /** @type {?} */
        var id = ++this._lastAnimationId;
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            var animation_1 = function () {
                /** @type {?} */
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
    * Starts the indeterminate animation interval, if it is not already running.
    */
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rotationStartPoint = 0;
        /** @type {?} */
        var start = startIndeterminate;
        /** @type {?} */
        var end = endIndeterminate;
        /** @type {?} */
        var duration = DURATION_INDETERMINATE;
        /** @type {?} */
        var animate$$1 = function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            var temp = start;
            start = -end;
            end = -temp;
        };
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular(function () {
                    _this.interdeterminateInterval = setInterval(animate$$1, duration + 50, 0, false);
                    animate$$1();
                });
            }
        }
    };
    /**
    * Removes interval, ending the animation.
    */
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    function () {
        this.interdeterminateInterval = null;
    };
    /**
    * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
    * DOM attribute on the `<path>`.
    */
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._renderArc = /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        var path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    /**
    * Updates the color of the progress-spinner by adding the new palette class to the element
    * and removing the old one.
    */
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._updateColor = /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    /** Sets the given palette class on the component element. */
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._setElementColor = /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    function (color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, "mat-" + color);
            }
        }
    };
    MdProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-Spinners, mat-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdProgressSpinnerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdProgressSpinnerComponent.propDecorators = {
        platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
        color: [{ type: Input }],
        value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
        mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
    };
    return MdProgressSpinnerComponent;
}());
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
var MdSpinnerComponent = /** @class */ (function (_super) {
    __extends(MdSpinnerComponent, _super);
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    /**
     * @return {?}
     */
    MdSpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    MdSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
                }] }
    ];
    /** @nocollapse */
    MdSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    MdSpinnerComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
/**
* Module functions.
*/
/**
 * Clamps a value to be between 0 and 100.
 * @param {?} v
 * @return {?}
 */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 * @param {?} radius
 * @param {?} pathRadius
 * @param {?} angleInDegrees
 * @return {?}
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    /** @type {?} */
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    /** @type {?} */
    var time = currentTime / duration;
    /** @type {?} */
    var timeCubed = Math.pow(time, 3);
    /** @type {?} */
    var timeQuad = Math.pow(time, 4);
    /** @type {?} */
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param {?} currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param {?} rotation The starting point of the circle with 0 being the 0 degree point.
 * @return {?} A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    /** @type {?} */
    var startPoint = rotation || 0;
    /** @type {?} */
    var radius = 50;
    /** @type {?} */
    var pathRadius = 40;
    /** @type {?} */
    var startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    var endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    var start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    var arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdProgressSpinnerModule = /** @class */ (function () {
    function MdProgressSpinnerModule() {
    }
    /** @deprecated */
    /**
     * @deprecated
     * @return {?}
     */
    MdProgressSpinnerModule.forRoot = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    };
    MdProgressSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent
                    ],
                    declarations: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent
                    ],
                },] }
    ];
    return MdProgressSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progressbar "for".
/**
 * <md-progress-bar> component.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        /**
         * Color of the progress bar.
         */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    Object.defineProperty(ProgressBarComponent.prototype, "value", {
        /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
        get: /**
         * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._value = clamp$1(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        function () { return this._bufferValue; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._bufferValue = clamp$1(v || 0); },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    ProgressBarComponent.prototype._primaryTransform = /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
    * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
    * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
    */
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    ProgressBarComponent.prototype._bufferTransform = /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    function () {
        if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-progress-bar, mat-progress-bar',
                    template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. -->\n<div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;height:5px;overflow:hidden;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity 250ms linear;width:100%}:host .mat-progress-bar-element,:host .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}:host .mat-progress-bar-background{background-repeat:repeat-x;background-size:10px 4px;display:none}:host .mat-progress-bar-buffer{-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-secondary{display:none}:host .mat-progress-bar-fill{-webkit-animation:none;animation:none;-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-fill::after{-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host[mode=query]{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}:host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill{transition:none}:host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;left:-145.166611%}:host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale}:host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale}:host[mode=buffer] .mat-progress-bar-background{-webkit-animation:250ms linear infinite mat-progress-bar-background-scroll;animation:250ms linear infinite mat-progress-bar-background-scroll;display:block}:host-context([dir=rtl]){-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@-webkit-keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@-webkit-keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}"]
                }] }
    ];
    ProgressBarComponent.propDecorators = {
        color: [{ type: Input }],
        value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
        bufferValue: [{ type: Input }],
        mode: [{ type: Input }, { type: HostBinding, args: ['attr.mode',] }]
    };
    return ProgressBarComponent;
}());
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp$1(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdProgressBarModule = /** @class */ (function () {
    function MdProgressBarModule() {
    }
    /** @deprecated */
    /**
     * @deprecated
     * @return {?}
     */
    MdProgressBarModule.forRoot = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return {
            ngModule: MdProgressBarModule,
            providers: []
        };
    };
    MdProgressBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ProgressBarComponent],
                    declarations: [ProgressBarComponent],
                },] }
    ];
    return MdProgressBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
var PreloadersModule = /** @class */ (function () {
    function PreloadersModule() {
    }
    PreloadersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MdProgressBarModule.forRoot(),
                        MdProgressSpinnerModule.forRoot(),
                        ProgressbarModule.forRoot()
                    ],
                    exports: MATERIAL_MODULES,
                },] }
    ];
    return PreloadersModule;
}());
/**
 * @deprecated
 */
var ProgressBars = /** @class */ (function () {
    function ProgressBars() {
    }
    /** @deprecated */
    /**
     * @deprecated
     * @return {?}
     */
    ProgressBars.forRoot = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return { ngModule: PreloadersModule };
    };
    ProgressBars.decorators = [
        { type: NgModule, args: [{
                    imports: MATERIAL_MODULES,
                    exports: MATERIAL_MODULES,
                },] }
    ];
    return ProgressBars;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdbRangeInputComponent; }),
    multi: true
};
var MdbRangeInputComponent = /** @class */ (function () {
    function MdbRangeInputComponent(renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.range = 0;
        this.cloudRange = 0;
        this.visibility = false;
        // Control Value Accessor Methods
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onchange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onChange(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.oninput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = +event.target.value;
        this.rangeValueChange.emit({ value: value });
        if (this.checkIfSafari()) {
            this.focusRangeInput();
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.focusRangeInput();
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onmouseleave = /**
     * @return {?}
     */
    function () {
        if (this.checkIfSafari()) {
            this.blurRangeInput();
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.focusRangeInput = /**
     * @return {?}
     */
    function () {
        this.input.nativeElement.focus();
        this.visibility = true;
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.blurRangeInput = /**
     * @return {?}
     */
    function () {
        this.input.nativeElement.blur();
        this.visibility = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.coverage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof this.range === 'string' && this.range.length !== 0) {
            return this.range;
        }
        if (!this.default) {
            /** @type {?} */
            var newValue = event.target.value;
            /** @type {?} */
            var newRelativeGain = newValue - this.min;
            /** @type {?} */
            var inputWidth = this.input.nativeElement.offsetWidth;
            /** @type {?} */
            var thumbOffset = 0;
            /** @type {?} */
            var offsetAmmount = 15;
            /** @type {?} */
            var distanceFromMiddle = newRelativeGain - (this.steps / 2);
            this.stepLength = inputWidth / this.steps;
            thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
            this.cloudRange = (this.stepLength * newRelativeGain) - thumbOffset;
            this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', this.cloudRange + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.checkIfSafari = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        var isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.steps = this.max - this.min;
        if (this.value) {
            this.range = this.value;
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbRangeInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbRangeInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbRangeInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MdbRangeInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdbRangeInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-range-input',
                    template: "<div *ngIf=\"!default\" class=\"range-field\" #rangeField>\n    <div class=\"track\">\n      <div #rangeCloud class=\"range-cloud\" title=\"range\" [ngClass]=\"{'visible': this.visibility, 'hidden': !this.visibility}\">\n        <span class=\"text-transform\">{{range}}</span>\n      </div>\n    </div>\n    <input #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n</div>\n\n<div *ngIf=\"default\">\n    <label for=\"customRange1\">Example range</label>\n    <input #input\n    class=\"custom-range\"\n    [name]=\"name\"\n    type=\"range\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [attr.value]=\"value\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n    <span class=\"{{defaultRangeCounterClass}}\">{{ range }}</span>\n  </div>",
                    providers: [RANGE_VALUE_ACCESOR]
                }] }
    ];
    /** @nocollapse */
    MdbRangeInputComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    MdbRangeInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        rangeCloud: [{ type: ViewChild, args: ['rangeCloud',] }],
        rangeField: [{ type: ViewChild, args: ['rangeField',] }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        default: [{ type: Input }],
        defaultRangeCounterClass: [{ type: Input }],
        rangeValueChange: [{ type: Output }],
        onchange: [{ type: HostListener, args: ['change', ['$event'],] }],
        oninput: [{ type: HostListener, args: ['input', ['$event'],] }],
        onclick: [{ type: HostListener, args: ['click',] }],
        onmouseleave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return MdbRangeInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RangeModule = /** @class */ (function () {
    function RangeModule() {
    }
    RangeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MdbRangeInputComponent],
                    exports: [MdbRangeInputComponent]
                },] }
    ];
    return RangeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyLinkDirective = /** @class */ (function () {
    function ScrollSpyLinkDirective(cdRef, document) {
        this.cdRef = cdRef;
        this.document = document;
        this._scrollIntoView = true;
        this.active = false;
    }
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "scrollIntoView", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollIntoView; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._scrollIntoView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "section", {
        get: /**
         * @return {?}
         */
        function () { return this._section; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._section = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._id = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.section && this.scrollIntoView === true) {
            this.section.scrollIntoView();
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.assignSectionToId = /**
     * @return {?}
     */
    function () {
        this.section = this.document.documentElement.querySelector("#" + this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.assignSectionToId();
    };
    ScrollSpyLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyLink]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyLinkDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] }] }
    ]; };
    ScrollSpyLinkDirective.propDecorators = {
        scrollIntoView: [{ type: Input }],
        id: [{ type: Input, args: ['mdbScrollSpyLink',] }],
        active: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click', [],] }]
    };
    return ScrollSpyLinkDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyService = /** @class */ (function () {
    function ScrollSpyService() {
        this.scrollSpys = [];
        this.activeSubject = new Subject();
        this.active$ = this.activeSubject;
    }
    /**
     * @param {?} scrollSpy
     * @return {?}
     */
    ScrollSpyService.prototype.addScrollSpy = /**
     * @param {?} scrollSpy
     * @return {?}
     */
    function (scrollSpy) {
        this.scrollSpys.push(scrollSpy);
    };
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    ScrollSpyService.prototype.removeScrollSpy = /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    function (scrollSpyId) {
        /** @type {?} */
        var scrollSpyIndex = this.scrollSpys.findIndex(function (spy) {
            return spy.id === scrollSpyId;
        });
        this.scrollSpys.splice(scrollSpyIndex, 1);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    ScrollSpyService.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    function (scrollSpyId, activeLinkId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find(function (spy) {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        var activeLink = scrollSpy.links.find(function (link) {
            return link.id === activeLinkId;
        });
        this.setActiveLink(activeLink);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    ScrollSpyService.prototype.removeActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} activeLinkId
     * @return {?}
     */
    function (scrollSpyId, activeLinkId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find(function (spy) {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        /** @type {?} */
        var activeLink = scrollSpy.links.find(function (link) {
            return link.id === activeLinkId;
        });
        if (!activeLink) {
            return;
        }
        activeLink.active = false;
        activeLink.detectChanges();
    };
    /**
     * @param {?} activeLink
     * @return {?}
     */
    ScrollSpyService.prototype.setActiveLink = /**
     * @param {?} activeLink
     * @return {?}
     */
    function (activeLink) {
        if (activeLink) {
            activeLink.active = true;
            activeLink.detectChanges();
            this.activeSubject.next(activeLink);
        }
    };
    /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    ScrollSpyService.prototype.removeActiveLinks = /**
     * @param {?} scrollSpyId
     * @return {?}
     */
    function (scrollSpyId) {
        /** @type {?} */
        var scrollSpy = this.scrollSpys.find(function (spy) {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        scrollSpy.links.forEach(function (link) {
            link.active = false;
            link.detectChanges();
        });
    };
    ScrollSpyService.decorators = [
        { type: Injectable }
    ];
    return ScrollSpyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(scrollSpyService) {
        this.scrollSpyService = scrollSpyService;
        this.activeLinkChange = new EventEmitter();
    }
    Object.defineProperty(ScrollSpyDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._id = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeSub = this.scrollSpyService.active$
            .pipe(distinctUntilChanged())
            .subscribe(function (activeLink) {
            _this.activeLinkChange.emit(activeLink);
        });
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.addScrollSpy({ id: this.id, links: this.links });
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.removeScrollSpy(this.id);
        this.activeSub.unsubscribe();
    };
    ScrollSpyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpy]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyDirective.ctorParameters = function () { return [
        { type: ScrollSpyService }
    ]; };
    ScrollSpyDirective.propDecorators = {
        links: [{ type: ContentChildren, args: [ScrollSpyLinkDirective, { descendants: true },] }],
        id: [{ type: Input, args: ['mdbScrollSpy',] }],
        activeLinkChange: [{ type: Output }]
    };
    return ScrollSpyDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyWindowDirective = /** @class */ (function () {
    function ScrollSpyWindowDirective(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyWindowDirective.prototype, "scrollSpyId", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollSpyId; },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._scrollSpyId = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(window, 'scroll', function () {
            _this.onScroll();
        });
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updateActiveState(_this.scrollSpyId, _this.id);
        }, 0);
    };
    ScrollSpyWindowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyWindow]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyWindowDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyWindowDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyWindow',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyWindowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyElementDirective = /** @class */ (function () {
    function ScrollSpyElementDirective(el, renderer, ngZone, scrollSpyService) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyElementDirective.prototype, "scrollSpyId", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollSpyId; },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._scrollSpyId = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.el.nativeElement.parentElement.scrollTop;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', function () {
            _this.onScroll();
        });
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updateActiveState(_this.scrollSpyId, _this.id);
        }, 0);
    };
    ScrollSpyElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyElement]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyElementDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyElementDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyElement',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyElementDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollSpyModule = /** @class */ (function () {
    function ScrollSpyModule() {
    }
    ScrollSpyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ScrollSpyDirective,
                        ScrollSpyLinkDirective,
                        ScrollSpyWindowDirective,
                        ScrollSpyElementDirective
                    ],
                    exports: [
                        ScrollSpyDirective,
                        ScrollSpyLinkDirective,
                        ScrollSpyWindowDirective,
                        ScrollSpyElementDirective
                    ],
                    providers: [ScrollSpyService]
                },] }
    ];
    return ScrollSpyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(platformId, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isBrowser = false;
        this.fixed = true;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    SidenavComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var sidenav = this.el.nativeElement;
            /** @type {?} */
            var sidenavChildren = sidenav.children[0].children;
            /** @type {?} */
            var sidenavMask = this.el.nativeElement.querySelector('.sidenav-bg');
            /** @type {?} */
            var sidenavChildrenHeight = 0;
            if (sidenavMask) {
                for (var i = 0; i < sidenavChildren.length; i++) {
                    if (sidenavChildren[i].classList.contains('sidenav-bg')) {
                        continue;
                    }
                    else {
                        for (var j = 0; j < sidenavChildren[i].children.length; j++) {
                            sidenavChildrenHeight += sidenavChildren[i].children[j].scrollHeight;
                        }
                    }
                }
                this.renderer.setStyle(sidenavMask, 'min-height', sidenavChildrenHeight + 16 + 'px');
            }
            // pobraneie szerokosci okna po init
            this.windwosWidth = win.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    this.renderer.addClass(document.body, 'fixed-sn');
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.addClass(document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                }
            }
            else {
                if (this.fixed) {
                    this.renderer.addClass(document.body, 'fixed-sn');
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.addClass(document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.windwosResize = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            this.windwosWidth = win.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                    if (this.windwosWidth > +this.sidenavBreakpoint && this.shown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                    else if (this.windwosWidth > +this.sidenavBreakpoint) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                }
                else {
                    if (this.windwosWidth > +this.sidenavBreakpoint) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            }
            else {
                if (this.fixed) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                    if (this.windwosWidth > 1440 && this.shown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                    else if (this.windwosWidth > 1440) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                }
                else {
                    if (this.windwosWidth > 1440) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            }
            else {
                if (this.fixed) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                        this.hideOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                    this.hideOverlay();
                }
            }
            else {
                if (this.fixed) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                        this.hideOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                        this.setShown(false);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                    this.hideOverlay();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.showOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.hideOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'display', 'none');
        }, 200);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SidenavComponent.prototype.setShown = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout(function () {
            _this.shown = value;
        }, 510);
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (document.body.classList.contains('hidden-sn')) {
            this.renderer.removeClass(document.body, 'hidden-sn');
        }
        else if (document.body.classList.contains('fixed-sn')) {
            this.renderer.removeClass(document.body, 'fixed-sn');
        }
    };
    SidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-sidenav, mdb-side-nav',
                    template: "<ul #sidenav id=\"slide-out\" class=\"{{ class }} side-nav\">\n  <ng-content></ng-content>\n<!-- <div class=\"sidenav-bg mask-strong\"></div> -->\n\n</ul>\n\n<div (click)=\"hide()\" (touchstart)=\"hide()\" #overlay id=\"sidenav-overlay\" style=\"display: none;\"></div>\n"
                }] }
    ];
    /** @nocollapse */
    SidenavComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SidenavComponent.propDecorators = {
        class: [{ type: Input }],
        fixed: [{ type: Input }],
        sidenavBreakpoint: [{ type: Input }],
        sideNav: [{ type: ViewChild, args: ['sidenav',] }],
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        windwosResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return SidenavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    SidenavModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SidenavComponent,
                    ],
                    exports: [
                        SidenavComponent
                    ],
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return SidenavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
EasingLogic = /** @class */ (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
// @dynamic
var PageScrollConfig = /** @class */ (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        // Getter and setter to avoid auto completion to suggest calling the method
        get: 
        // Getter and setter to avoid auto completion to suggest calling the method
        /**
         * @return {?}
         */
        function () {
            return PageScrollConfig._easingLogic;
        },
        set: /**
         * @param {?} easingLogic
         * @return {?}
         */
        function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     */
    PageScrollConfig._interval = 10;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     */
    PageScrollConfig._minScrollDistance = 2;
    /**
     * Name of the default namespace.
     */
    PageScrollConfig._defaultNamespace = 'default';
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     */
    PageScrollConfig.defaultIsVerticalScrolling = true;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     */
    PageScrollConfig._logLevel = 2;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     */
    PageScrollConfig.defaultDuration = 1250;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     */
    PageScrollConfig.defaultScrollOffset = 0;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     */
    PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     */
    PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     */
    PageScrollConfig.defaultInterruptible = true;
    PageScrollConfig._easingLogic = {
        ease: function (t, b, c, d) {
            // Linear easing
            return c * t / d + b;
        }
    };
    return PageScrollConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by sebastianfuss on 02.09.16.
 */
var PageScrollUtilService = /** @class */ (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
  true the variable is undefined or null
     */
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    PageScrollUtilService.isUndefinedOrNull = /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollUtilService.extractElementPosition = /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    function (document, scrollTargetElement) {
        /** @type {?} */
        var body = document.body;
        /** @type {?} */
        var docEl = document.documentElement;
        // const windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
        /** @type {?} */
        var windowPageYOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageYOffset)) || undefined;
        // const windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;
        /** @type {?} */
        var windowPageXOffset = document.defaultView && (/** @type {?} */ (document.defaultView.pageXOffset)) || undefined;
        /** @type {?} */
        var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        var clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        /** @type {?} */
        var box = scrollTargetElement.getBoundingClientRect();
        /** @type {?} */
        var top = box.top + scrollTop - clientTop;
        /** @type {?} */
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageScrollService = /** @class */ (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (PageScrollConfig._interruptKeys.indexOf(((/** @type {?} */ (event))).keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(function (scrollingView) { return scrollingView.contains(event.target); })) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stopInternal = /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (interrupted, pageScrollInstance) {
        /** @type {?} */
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.start = /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        /** @type {?} */
        var startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach(function (scrollingView) {
            if (PageScrollUtilService.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        /** @type {?} */
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (isDevMode()) ;
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        /** @type {?} */
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.speed) && PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration = pageScrollInstance.distanceToScroll / pageScrollInstance.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        /** @type {?} */
        var tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (isDevMode()) ;
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.interruptible) && PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            /** @type {?} */
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            var newScrollPosition;
            /** @type {?} */
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     */
    //   public stopAll(namespace?: string): boolean {
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    PageScrollService.prototype.stopAll = /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    function (namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                var pageScrollInstance = this.runningInstances[i];
                if (PageScrollUtilService.isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return []; };
    return PageScrollService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents a scrolling action
 */
var  /**
 * Represents a scrolling action
 */
PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     * @param namespace
     * @param document
     */
    function PageScrollInstance(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
     * Factory methods for instance creation
     */
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollInstance.simpleInstance = /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace
        });
    };
    //   public static newInstance(options: PageScrollOptions) {
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollInstance.newInstance = 
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (PageScrollUtilService.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        /** @type {?} */
        var pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (PageScrollUtilService.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!PageScrollUtilService.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (PageScrollUtilService.isUndefinedOrNull(options.pageScrollDuration) && !PageScrollUtilService.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = options.pageScrollInterruptible ||
            (PageScrollUtilService.isUndefinedOrNull(options.pageScrollInterruptible) && PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation = options.advancedInlineOffsetCalculation ||
            (PageScrollUtilService.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    };
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param verticalScrolling
     * @param namespace Optional namespace to group scroll animations logically
     *
     **/
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    PageScrollInstance.simpleDirectionInstance = /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    function (document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     */
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    PageScrollInstance.simpleInlineInstance = /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace: namespace
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @deprecated Use {@link newInstance(options: PageScrollOptions)}
     */
    /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    PageScrollInstance.simpleInlineDirectionInstance = /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    function (document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     */
    /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    PageScrollInstance.advancedInstance = /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    function (document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: scrollingViews,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
            pageScrollOffset: pageScrollOffset,
            pageScrollInterruptible: pageScrollInterruptible,
            pageScrollEasingLogic: pageScrollEasingLogic,
            pageScrollDuration: pageScrollDuration,
            pageScrollFinishListener: pageScrollFinishListener
        });
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    function () {
        // let scrollTargetElement: HTMLElement;
        /** @type {?} */
        var scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(((/** @type {?} */ (this._scrollTarget))).substr(1));
        }
        else {
            scrollTargetElement = (/** @type {?} */ (this._scrollTarget));
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            /** @type {?} */
            var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                var accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                var theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                var parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                var parent_1 = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !PageScrollUtilService.isUndefinedOrNull(parent_1)) {
                    if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent_1.offsetTop;
                        accumulatedParentsPos.left += parent_1.offsetLeft;
                    }
                    // Next iteration
                    parent_1 = parent_1.parentElement;
                    parentFound = parent_1 === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return PageScrollUtilService.extractElementPosition(this.document, scrollTargetElement);
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     */
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    function (position) {
        var _this = this;
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce(function (oneAlreadyWorked, scrollingView) {
            /** @type {?} */
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !PageScrollUtilService.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                var isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!_this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    function () {
        var _this = this;
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: /**
         * @return {?}
         */
        function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._targetScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._distanceToScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._executionDuration;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: /**
         * @return {?}
         */
        function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._endTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._timer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageScrollDirective = /** @class */ (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = (/** @type {?} */ (document));
    }
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    // private generatePageScrollInstance(): PageScrollInstance {
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.generatePageScrollInstance = 
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    function () {
        if (PageScrollUtilService.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.pushRouterState = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: (/** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1))),
                queryParamsHandling: 'preserve'
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.scroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                /** @type {?} */
                var subscription_1 = (/** @type {?} */ (this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                })));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    PageScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbPageScroll]'
                },] }
    ];
    /** @nocollapse */
    PageScrollDirective.ctorParameters = function () { return [
        { type: PageScrollService },
        { type: Router, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT$1,] }] }
    ]; };
    PageScrollDirective.propDecorators = {
        routerLink: [{ type: Input }],
        href: [{ type: Input }],
        pageScrollHorizontal: [{ type: Input }],
        pageScrollOffset: [{ type: Input }],
        pageScrollDuration: [{ type: Input }],
        pageScrollSpeed: [{ type: Input }],
        pageScrollEasing: [{ type: Input }],
        pageScrollInterruptible: [{ type: Input }],
        pageScrollAdjustHash: [{ type: Input }],
        pageScroll: [{ type: Input }],
        pageScrollFinish: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click',] }]
    };
    return PageScrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmoothscrollModule = /** @class */ (function () {
    function SmoothscrollModule() {
    }
    /**
     * @return {?}
     */
    SmoothscrollModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SmoothscrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    };
    SmoothscrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PageScrollDirective],
                    exports: [PageScrollDirective]
                },] }
    ];
    return SmoothscrollModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbStepComponent = /** @class */ (function () {
    function MdbStepComponent(el) {
        this.el = el;
        this._isActive = false;
    }
    Object.defineProperty(MdbStepComponent.prototype, "isDone", {
        get: /**
         * @return {?}
         */
        function () { return this._isDone; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isWrong", {
        get: /**
         * @return {?}
         */
        function () { return this._isWrong; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isWrong = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () { return this._isActive; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isActive = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbStepComponent.prototype._removeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MdbStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-step',
                    exportAs: 'mdbStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    MdbStepComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbStepComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        stepForm: [{ type: Input }]
    };
    return MdbStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbStepperComponent = /** @class */ (function () {
    function MdbStepperComponent(ripple, _renderer, platformId) {
        this.ripple = ripple;
        this._renderer = _renderer;
        this.linear = false;
        this.disableWaves = false;
        this.vertical = false;
        this.horizontal = true;
        this._stepperBreakpoint = 992;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdbStepperComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () { return this._activeStepIndex; },
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
    MdbStepperComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (win.innerWidth < this._stepperBreakpoint) {
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
        var currentActiveStep = this.steps.find(function (activeStep) { return activeStep.isActive; });
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
        this.steps.forEach(function (step) {
            step.reset();
            _this._setActiveStep(0);
        });
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._updateHorizontalStepperHeight = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.horizontal && !this.vertical) {
            setTimeout(function () {
                /** @type {?} */
                var height = _this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                _this._renderer.setStyle(_this.container.nativeElement, 'height', height + 'px');
            }, 0);
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
            if (this.vertical || win.innerWidth < this._stepperBreakpoint) {
                setTimeout(function () {
                    _this.horizontal = false;
                    _this._renderer.removeStyle(_this.container.nativeElement, 'height');
                }, 0);
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
        this._setActiveStep(0);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepperModule = /** @class */ (function () {
    function StepperModule() {
    }
    StepperModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MdbStepperComponent,
                        MdbStepComponent
                    ],
                    exports: [
                        MdbStepperComponent,
                        MdbStepComponent
                    ],
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return StepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * returns coumputed style of given element
 * @param {?} element
 * @param {?} styleProp
 * @return {?}
 */
// export function computedStyle(element: string | HTMLElement, styleProp: string): string {
function computedStyle(element, styleProp) {
    /** @type {?} */
    var el;
    el = (typeof element === 'string') ? ((/** @type {?} */ (document.querySelector((/** @type {?} */ (element)))))) : element;
    /** @type {?} */
    var value;
    /** @type {?} */
    var defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (letter) {
            return letter.toUpperCase();
        });
        value = el['currentStyle'][styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (val) {
                /** @type {?} */
                var oldLeft = el.style.left;
                /** @type {?} */
                var oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = val || 0;
                val = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return val;
            })(value);
        }
        return value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbStickyDirective = /** @class */ (function () {
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            var bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            var dynProps;
            if (_this.original.float === 'right') {
                /** @type {?} */
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                /** @type {?} */
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                var floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        var parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) { // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            /** @type {?} */
            var elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                // left: computedStyle(this.el, 'left'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10)
            };
        }
        this.attach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = /**
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSticky]'
                },] }
    ];
    /** @nocollapse */
    MdbStickyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStickyDirective.propDecorators = {
        stickyAfter: [{ type: Input }]
    };
    return MdbStickyDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StickyContentModule = /** @class */ (function () {
    function StickyContentModule() {
    }
    StickyContentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MdbStickyDirective],
                    exports: [MdbStickyDirective]
                },] }
    ];
    return StickyContentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "mdbNgTransclude", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbNgTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        mdbNgTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: Injectable }
    ];
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add active event to tab
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(platformId, config, ripple, cdRef, renderer) {
        this.ripple = ripple;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.tabs = [];
        this.classMap = {};
        this.isBrowser = null;
        this.clazz = true;
        this.disableWaves = false;
        this.showBsTab = new EventEmitter();
        this.shownBsTab = new EventEmitter();
        this.hideBsTab = new EventEmitter();
        this.hiddenBsTab = new EventEmitter();
        this.getActiveTab = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
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
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.setActiveTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.tabs[index - 1].type !== 'content') {
            this.tabs[index - 1].active = true;
            this.getActiveTab.emit({
                el: this.tabs[index - 1],
                activeTabIndex: index - 1
            });
            this.cdRef.detectChanges();
        }
        else {
            this.tabs[index - 1].select.emit(this.tabs[index - 1]);
        }
    };
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.click = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var prev = this.tabEl.toArray()[this.getActive()];
        /** @type {?} */
        var clicked = this.tabEl.toArray()[index];
        this.hideBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.showBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.setActiveTab(index + 1);
        if (this.contentClass !== 'vertical' && !this.disableWaves) {
            this.ripple.el = clicked;
            this.ripple.click(event);
        }
        this.hiddenBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.shownBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    // public getActive() {
    // public getActive() {
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActive = 
    // public getActive() {
    /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
        try {
            for (var tabs_1 = __values(tabs), tabs_1_1 = tabs_1.next(); !tabs_1_1.done; tabs_1_1 = tabs_1.next()) {
                var tab = tabs_1_1.value;
                if (tab.object.active) {
                    return tab.index;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tabs_1_1 && !tabs_1_1.done && (_a = tabs_1.return)) _a.call(tabs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var insertPos = this.tabs.findIndex(function (aTab) { return aTab.tabOrder > tab.tabOrder; });
        if (insertPos >= 0) {
            this.tabs.splice(insertPos, 0, tab);
        }
        else {
            this.tabs.push(tab);
        }
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.listGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.tabsGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActiveElement = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
        try {
            for (var tabs_2 = __values(tabs), tabs_2_1 = tabs_2.next(); !tabs_2_1.done; tabs_2_1 = tabs_2.next()) {
                var tab = tabs_2_1.value;
                if (tab.object.active) {
                    return {
                        el: tab.object,
                        activeTabIndex: tab.index
                    };
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tabs_2_1 && !tabs_2_1.done && (_a = tabs_2.return)) _a.call(tabs_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.showActiveIndex = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeElement = this.getActiveElement();
        this.getActiveTab.emit(activeElement);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.getFirstActiveTabIndex = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeTabs = this.tabs.filter(function (tab) {
            return !tab.disabled;
        });
        return this.tabs.indexOf(activeTabs[0]);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.removeActiveTabs = /**
     * @private
     * @return {?}
     */
    function () {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.initActiveTab = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.getFirstActiveTabIndex();
        if (index === -1) {
            this.removeActiveTabs();
            return;
        }
        this.setActiveTab(index + 1);
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.listGet();
        this.tabsGet();
        this.showActiveIndex();
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initActiveTab();
        if (this.tabs.findIndex(function (el) { return el.type === 'content'; }) !== -1) {
            /** @type {?} */
            var spacer = this.renderer.createElement('li');
            /** @type {?} */
            var firstContentTypeItemIndex = this.tabs.findIndex(function (el) { return el.type === 'content'; });
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tabset',
                    template: "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"{{ listGetClass }}\">\n      <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\" #itemsList>\n        <li *ngFor=\"let tabz of tabs;let i = index\" [ngClass]=\"{'ml-auto': tabz.type === 'content' && i === 0, 'nav-item': tabz.type !== 'content', 'mx-auto': vertical}\" class=\"{{tabz.customClass}}\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\">\n          <span class=\"d-flex flex-fill\" *ngIf=\"tabs[i].type !== 'content' && tabs[i + 1] && tabs[i + 1].type === 'content'\"></span>\n          <a *ngIf=\"tabz.type !== 'content'\" #tabEl href=\"javascript:void(0);\" class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n          <a *ngIf=\"tabz.type === 'content'\" #tabEl class=\"nav-link\" [ngClass]=\"{'waves-light': !disableWaves}\"\n             [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"{{ tabsGetClass }}\">\n      <div class=\"tab-content {{ contentClass }}\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    providers: [WavesDirective]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetConfig },
        { type: WavesDirective },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    TabsetComponent.propDecorators = {
        clazz: [{ type: HostBinding, args: ['class.tab-container',] }],
        disableWaves: [{ type: Input }],
        buttonClass: [{ type: Input }],
        contentClass: [{ type: Input }],
        itemsList: [{ type: ViewChild, args: ['itemsList',] }],
        tabEl: [{ type: ViewChildren, args: ['tabEl', { read: ElementRef },] }],
        showBsTab: [{ type: Output }],
        shownBsTab: [{ type: Output }],
        hideBsTab: [{ type: Output }],
        hiddenBsTab: [{ type: Output }],
        getActiveTab: [{ type: Output }],
        vertical: [{ type: Input }],
        justified: [{ type: Input }],
        type: [{ type: Input }]
    };
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    function TabDirective(platformId, tabset, el, renderer) {
        this.renderer = renderer;
        this._disabled = false;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.test = true;
        // public el: ElementRef = null;
        this.el = null;
        this._active = false;
        this.isBrowser = null;
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
        this.tabset = tabset;
    }
    Object.defineProperty(TabDirective.prototype, "disabled", {
        /** if true tab can not be activated */
        get: /**
         * if true tab can not be activated
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            if (this._disabled && this._active) {
                this.tabset.initActiveTab();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (this._active && !active) {
                    this.renderer.removeClass(this.el.nativeElement, 'show');
                    this.renderer.removeClass(this.el.nativeElement, 'active');
                    this._active = active;
                    this.deselect.emit(this);
                }
                return;
            }
            this.renderer.addClass(this.el.nativeElement, 'show');
            this.renderer.addClass(this.el.nativeElement, 'active');
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
        this.tabset.addTab(this);
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this);
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        type: [{ type: Input }],
        heading: [{ type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        tabOrder: [{ type: Input }],
        active: [{ type: Input }],
        select: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        test: [{ type: HostBinding, args: ['class.fade',] }]
    };
    return TabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbTabHeading]' },] }
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: TabDirective }
    ]; };
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    TabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
                    exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
                },] }
    ];
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MaterialChipsComponent; }),
    multi: true
};
var MaterialChipsComponent = /** @class */ (function () {
    function MaterialChipsComponent() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback = this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChangeCallback = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouchedCallback = fn; };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.removeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    MaterialChipsComponent.prototype.addValue = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.values) {
            this.values = value;
        }
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.focusOutFunction = /**
     * @return {?}
     */
    function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    MaterialChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-material-chips',
                    template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\"  [ngClass]=\"focused\">\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected >         \n    {{value}} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\" ></i>\n  </span>\n\n  <span>\n    <input  [(ngModel)]=\"labelToAdd\" \n            (keyup.enter)=\"addValue(box.value, $event)\"\n            (focus)=\"onFocus()\" \n            (focusout)=\"focusOutFunction()\"  \n            #box />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input class=\"md-chips-input\" placeholder=\"{{ placeholder }}\" #tbox \n    (keyup.enter)=\"addValue(tbox.value, $event)\"/>\n</div>\n",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    MaterialChipsComponent.ctorParameters = function () { return []; };
    MaterialChipsComponent.propDecorators = {
        placeholder: [{ type: Input, args: ['placeholder',] }],
        tagsfocusedChange: [{ type: Output }],
        labelsChange: [{ type: Output }],
        tagsfocused: [{ type: Input }]
    };
    return MaterialChipsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialChipsModule = /** @class */ (function () {
    function MaterialChipsModule() {
    }
    MaterialChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [MaterialChipsComponent],
                    exports: [MaterialChipsComponent]
                },] }
    ];
    return MaterialChipsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ClockPickerComponent; }),
    multi: true
};
var ClockPickerComponent = /** @class */ (function () {
    function ClockPickerComponent(elem, renderer, platformId) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.disabled = false;
        this.isMobile = null;
        this.touchDevice = ('ontouchstart' in ((/** @type {?} */ (document.documentElement))));
        this.showHours = false;
        this.elements = document.getElementsByClassName('clockpicker');
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.isBrowser = false;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.isBrowser = isPlatformBrowser(platformId);
        renderer.listen(this.elem.nativeElement, 'click', function (event) {
            if (_this.showClock &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.showClock = false;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ClockPickerComponent.prototype.ontouchmove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Rotating Time Picker on mobile
        if (event.target.parentElement.classList.contains('clockpicker-dial')) {
            ((/** @type {?} */ (this.elem.nativeElement.querySelectorAll('.clockpicker-tick')))).forEach(function (element) {
                _this.renderer.setStyle(element, 'background-color', 'rgba(0, 150, 136, 0');
            });
            this.mousedown(event);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateTick();
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', function (event) {
            _this.mousedown(event, false);
        });
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            // Fix for visible date / time picker input when picker plate is visible.
            try {
                /** @type {?} */
                var openedPicker = document.querySelector('.picker--opened');
                /** @type {?} */
                var allPickers = document.querySelectorAll('.picker');
                allPickers.forEach(function (element) {
                    _this.renderer.setStyle(element, 'z-index', '0');
                });
                this.renderer.setStyle(openedPicker, 'z-index', '1000');
            }
            catch (error) { }
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.checkDraw = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value;
        /** @type {?} */
        var isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        /** @type {?} */
        var unit = Math.PI / (isHours ? 6 : 30);
        /** @type {?} */
        var radian = value * unit;
        /** @type {?} */
        var radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        var xd = Math.sin(radian) * radius;
        /** @type {?} */
        var yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    };
    /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    ClockPickerComponent.prototype.mousedown = /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    function (e, space) {
        var _this = this;
        /** @type {?} */
        var offset = this.plate.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var isTouch = /^touch/.test(e.type);
        /** @type {?} */
        var x0 = offset.left + this.dialRadius;
        /** @type {?} */
        var y0 = offset.top + this.dialRadius;
        /** @type {?} */
        var dx = (isTouch ? e.touches[0] : e).clientX - x0;
        /** @type {?} */
        var dy = (isTouch ? e.touches[0] : e).clientY - y0;
        /** @type {?} */
        var z = Math.sqrt(dx * dx + dy * dy);
        /** @type {?} */
        var moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true);
        }
        else {
            this.setHand(dx, dy, false);
        }
        /** @type {?} */
        var mousemoveEventMethod = function (event) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            var x = event.clientX - x0;
            /** @type {?} */
            var y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            _this.setHand(x, y, false);
        };
        /** @type {?} */
        var mouseupEventMethod = function (event) {
            document.removeEventListener(_this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            /** @type {?} */
            var x = event.clientX - x0;
            /** @type {?} */
            var y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                _this.setHand(x, y, false);
            }
            _this.showMinutesClock();
            document.removeEventListener(_this.mouseupEvent, mouseupEventMethod);
        };
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.hideKeyboard = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout(function () {
                // creating temp field
                // const field = document.createElement('input');
                /** @type {?} */
                var field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                /** @type {?} */
                var inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = function () {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout(function () {
                        _this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(function () {
                            _this.renderer.removeChild(_this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                // focusing it
                field.focus();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.openBtnClicked = /**
     * @return {?}
     */
    function () {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.closeBtnClicked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var h = this.selectedHours.h;
        /** @type {?} */
        var m = this.selectedHours.m;
        /** @type {?} */
        var ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.clearTimeInput = /**
     * @return {?}
     */
    function () {
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    ClockPickerComponent.prototype.setHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.selectedHours.h = hour;
    };
    /**
     * @param {?} min
     * @return {?}
     */
    ClockPickerComponent.prototype.setMinute = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    };
    /**
     * @param {?} ampm
     * @return {?}
     */
    ClockPickerComponent.prototype.setAmPm = /**
     * @param {?} ampm
     * @return {?}
     */
    function (ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showHoursClock = /**
     * @return {?}
     */
    function () {
        this.showHours = true;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showMinutesClock = /**
     * @return {?}
     */
    function () {
        this.showHours = false;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.generateTick = /**
     * @return {?}
     */
    function () {
        if (this.twelvehour) {
            for (var i = 1; i < 13; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var radius = this.outerRadius;
                /** @type {?} */
                var tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (var i = 0; i < 24; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var inner = i > 0 && i < 13;
                /** @type {?} */
                var radius = inner ? this.innerRadius : this.outerRadius;
                /** @type {?} */
                var h = void 0;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                /** @type {?} */
                var tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (var i = 0; i < 60; i += 5) {
            /** @type {?} */
            var radian = i / 30 * Math.PI;
            /** @type {?} */
            var min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            /** @type {?} */
            var tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    };
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    ClockPickerComponent.prototype.setHand = /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    function (x, y, roundBy5) {
        /** @type {?} */
        var radian = Math.atan2(x, -y);
        /** @type {?} */
        var isHours = this.showHours;
        /** @type {?} */
        var unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        /** @type {?} */
        var z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        var inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        /** @type {?} */
        var radius = inner ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        var value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                value = !inner ? value + 12 : value;
                value = value === 24 ? 0 : value;
                value = (inner && value === 0) ? 12 : value;
                value = (!inner && value === 12) ? 0 : value;
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        /** @type {?} */
        var cx1 = Math.sin(radian) * (radius - this.tickRadius);
        /** @type {?} */
        var cy1 = -Math.cos(radian) * (radius - this.tickRadius);
        /** @type {?} */
        var cx2 = Math.sin(radian) * radius;
        /** @type {?} */
        var cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    ClockPickerComponent.prototype.offset = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var left = 0;
        /** @type {?} */
        var top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left: left, top: top };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ClockPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.endHours = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCb = fn;
    };
    ClockPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-time-picker',
                    template: "<div class=\"tp\">\n  <div class=\"md-form\">\n    <label class=\"active\">{{ label }}</label>\n    <input [disabled]=\"disabled\" [tabindex]=\"tabIndex\" [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\">\n  </div>\n  <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\">\n    <div class=\"picker__holder\">\n      <div class=\"picker__frame\">\n        <div class=\"picker__wrap\">\n          <div class=\"picker__box\">\n            <div class=\"picker__date-display\">\n              <div class=\"clockpicker-display\">\n                <div class=\"clockpicker-display-column\">\n                  <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\">\n                    {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\"\n                      (click)=\"showMinutesClock()\">{{selectedHours.m }}</span>\n                </div>\n                <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\">\n                  <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"picker__calendar-container\">\n              <div class=\"clockpicker-plate\" #plate>\n                  <div class=\"clockpicker-canvas\">\n                  <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg>\n                      <g transform=\"translate(135,135)\" #g>\n                      <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line>\n                      <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle>\n                      <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle>\n                      <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle>\n                      </g>\n                  </svg>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"\n                      id=\"{{ tick.hour }}\">\n                      {{ tick.hour }}\n                  </div>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\">\n                      {{ tick.min }}\n                  </div>\n                  </div>\n              </div>\n              <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\">\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\"\n                  (click)=\"setAmPm('AM')\">\n                  AM\n                </button>\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\"\n                  (click)=\"setAmPm('PM')\">\n                  PM\n                </button>\n              </div>\n            </div>\n            <div class=\"picker__footer\">\n              <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                {{buttonLabel}}\n              </button>\n              <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                Done\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    providers: [TIME_PIRCKER_VALUE_ACCESSOT]
                }] }
    ];
    /** @nocollapse */
    ClockPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ClockPickerComponent.propDecorators = {
        hoursPlate: [{ type: ViewChild, args: ['hoursPlate',] }],
        minutesPlate: [{ type: ViewChild, args: ['minutesPlate',] }],
        plate: [{ type: ViewChild, args: ['plate',] }],
        svg: [{ type: ViewChild, args: ['svg',] }],
        g: [{ type: ViewChild, args: ['g',] }],
        hand: [{ type: ViewChild, args: ['hand',] }],
        fg: [{ type: ViewChild, args: ['fg',] }],
        bg: [{ type: ViewChild, args: ['bg',] }],
        bearing: [{ type: ViewChild, args: ['bearing',] }],
        twelvehour: [{ type: Input, args: ['twelvehour',] }],
        darktheme: [{ type: Input, args: ['darktheme',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        label: [{ type: Input, args: ['label',] }],
        duration: [{ type: Input, args: ['duration',] }],
        showClock: [{ type: Input, args: ['showClock',] }],
        buttonLabel: [{ type: Input }],
        disabled: [{ type: Input }],
        tabIndex: [{ type: Input }],
        ontouchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }]
    };
    return ClockPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimePickerModule = /** @class */ (function () {
    function TimePickerModule() {
    }
    TimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [ClockPickerComponent],
                    exports: [ClockPickerComponent]
                },] }
    ];
    return TimePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES$1 = [
    AutocompleteModule,
    CardsModule,
    FileInputModule,
    MaterialChipsModule,
    ProgressBars,
    TabsModule,
    SelectModule,
    DatepickerModule,
    TimePickerModule,
    SidenavModule,
    ChartSimpleModule,
    AccordionModule,
    StickyContentModule,
    SmoothscrollModule,
    CharCounterModule,
    ScrollSpyModule,
    AutoFormatModule,
    RangeModule,
    AutoCompleterModule,
    StepperModule
];
var MDBRootModulePro = /** @class */ (function () {
    function MDBRootModulePro() {
    }
    MDBRootModulePro.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AutocompleteModule,
                        CardsModule.forRoot(),
                        MaterialChipsModule,
                        ProgressBars.forRoot(),
                        TabsModule.forRoot(),
                        SelectModule,
                        DatepickerModule,
                        TimePickerModule,
                        SidenavModule,
                        ChartSimpleModule,
                        AccordionModule,
                        StickyContentModule,
                        SmoothscrollModule.forRoot(),
                        CharCounterModule.forRoot(),
                        ScrollSpyModule,
                        AutoFormatModule,
                        RangeModule,
                        AutoCompleterModule,
                        StepperModule
                    ],
                    exports: [MODULES$1],
                    providers: [],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return MDBRootModulePro;
}());
var MDBBootstrapModulePro = /** @class */ (function () {
    function MDBBootstrapModulePro() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModulePro.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModulePro };
    };
    MDBBootstrapModulePro.decorators = [
        { type: NgModule, args: [{ exports: [MODULES$1] },] }
    ];
    return MDBBootstrapModulePro;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES$2 = [
    MDBBootstrapModule,
    MDBBootstrapModulePro
];
var MDBRootModules = /** @class */ (function () {
    function MDBRootModules() {
    }
    MDBRootModules.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MDBBootstrapModule.forRoot(),
                        MDBBootstrapModulePro.forRoot(),
                    ],
                    exports: MODULES$2,
                    providers: [],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return MDBRootModules;
}());
var MDBBootstrapModulesPro = /** @class */ (function () {
    function MDBBootstrapModulesPro() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModulesPro.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModules };
    };
    MDBBootstrapModulesPro.decorators = [
        { type: NgModule, args: [{ exports: MODULES$2 },] }
    ];
    return MDBBootstrapModulesPro;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BadgeModule, MDBBadgeComponent, MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, MdbBtnDirective, ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, CardsFreeModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, CarouselComponent, CarouselModule, SlideComponent, CarouselConfig, ChartsModule, BaseChartDirective, CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule, CollapseComponent, CollapseModule, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, DropdownModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, IconsModule, InputUtilitiesModule, MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputsModule, EqualValidatorDirective, MdbInputDirective, MdbInput, ModalBackdropComponent, ModalBackdropOptions, ModalOptions, MDBModalRef, ModalDirective, ModalModule, MDBModalService, ModalContainerComponent, NavbarComponent, NavbarModule, PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent, TableModule, MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig, WavesDirective, WavesModule, MDBRootModule, MDBBootstrapModule, SQUEEZEBOX_COMPONENTS, SBItemComponent, SBItemHeadComponent, SBItemBodyComponent, SqueezeBoxComponent, AccordionModule, ComponentPortal, BasePortalHost, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef, ToastContainerDirective, ToastContainerModule, ToastComponent, ToastService, GlobalConfig, ToastPackage, tsConfig, ToastModule, ToastRef, ToastInjector, slideIn, fadeIn, slideOut, flipState, turnState, iconsState, socialsState, flyInOut, MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, MdbAutoCompleterOptionDirective, AutoCompleterModule, AutoFormatModule, MdbDateFormatDirective, MdbCreditCardDirective, MdbCvvDirective, AutocompleteModule, CompleterComponent, CompleterListItemComponent, CompleterService, localDataFactory, LocalDataFactoryProvider, remoteDataFactory, RemoteDataFactoryProvider, LocalData, RemoteData, CompleterBaseData, MdbCompleterDirective, MdbDropdownDirective, MdbInputCompleteDirective, MdbListDirective, MdbRowDirective, CardsModule, CardRevealComponent, CardRotatingComponent, LocaleService, UtilService, FocusDirective, InputAutoFillDirective, MDBDatePickerComponent, MYDP_VALUE_ACCESSOR, DatepickerModule, SimpleChartComponent, EasyPieChartComponent, ChartSimpleModule, FileInputModule, UploadStatus, humanizeBytes, MDBUploaderService, MDBFileSelectDirective, MDBFileDropDirective, CharCounterDirective, CharCounterModule, Diacritics, Option, OptionList, SELECT_VALUE_ACCESSOR, SelectComponent, SelectDropdownComponent, SelectModule, MDBSpinningPreloader, TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE, EMULATE_ELEMENT_NAME, CONTAINER_QUERY, COMPLETE_CLASS_NAME, CONTAINER_CLASS_NAME, CONTAINER_NAME, BarComponent, ProgressDirective, ProgressbarComponent, ProgressbarModule, ProgressbarConfigComponent, ProgressSpinnerComponent, PreloadersModule, ProgressBars, RangeModule, MdbRangeInputComponent, ScrollSpyDirective, ScrollSpyWindowDirective, ScrollSpyElementDirective, ScrollSpyLinkDirective, ScrollSpyService, ScrollSpyModule, SidenavComponent, SidenavModule, PageScrollDirective, PageScrollService, EasingLogic, PageScrollConfig, PageScrollInstance, PageScrollUtilService, SmoothscrollModule, MdbStepperComponent, MdbStepComponent, StepperModule, MdbStickyDirective, StickyContentModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, MaterialChipsComponent, MaterialChipsModule, TIME_PIRCKER_VALUE_ACCESSOT, ClockPickerComponent, TimePickerModule, MDBBootstrapModulePro, MDBRootModules, MDBBootstrapModulesPro, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵb, RADIO_CONTROL_VALUE_ACCESSOR as ɵa, CHECKBOX_VALUE_ACCESSOR as ɵc, CheckboxComponent as ɵd, LinksComponent as ɵdq, LogoComponent as ɵdr, NavbarService as ɵdp, NavlinksComponent as ɵds, ComponentLoaderFactory as ɵdn, OnChange as ɵdt, PositioningService as ɵdo, SBItemComponent as ɵf, SBItemBodyComponent as ɵh, SBItemHeadComponent as ɵg, SqueezeBoxComponent as ɵi, AccordionModule as ɵe, TOAST_CONFIG as ɵdu, AutoCompleterModule as ɵn, MdbAutoCompleterComponent as ɵj, MdbOptionComponent as ɵk, MdbAutoCompleterOptionDirective as ɵm, MdbAutoCompleterDirective as ɵl, AutoFormatModule as ɵo, MdbCreditCardDirective as ɵq, MdbCvvDirective as ɵr, MdbDateFormatDirective as ɵp, CompleterListItemComponent as ɵu, CompleterComponent as ɵt, MdbInputCompleteDirective as ɵba, MdbCompleterDirective as ɵy, MdbDropdownDirective as ɵz, CtrListContext as ɵbb, MdbListDirective as ɵbc, MdbRowDirective as ɵbd, AutocompleteModule as ɵs, CompleterService as ɵv, LocalDataFactoryProvider as ɵw, RemoteDataFactoryProvider as ɵx, CardRevealComponent as ɵbf, CardRotatingComponent as ɵbg, CardsModule as ɵbe, MDBDatePickerComponent as ɵbm, MYDP_VALUE_ACCESSOR as ɵbl, DatepickerModule as ɵbn, InputAutoFillDirective as ɵbk, FocusDirective as ɵbj, LocaleService as ɵbh, UtilService as ɵbi, SimpleChartComponent as ɵbo, ChartSimpleModule as ɵbq, EasyPieChartComponent as ɵbp, MDBFileDropDirective as ɵbt, MDBFileSelectDirective as ɵbs, FileInputModule as ɵbr, CharCounterDirective as ɵbu, CharCounterModule as ɵbv, SelectDropdownComponent as ɵbz, SELECT_VALUE_ACCESSOR as ɵbx, SelectComponent as ɵby, SelectModule as ɵca, MDBRootModulePro as ɵdm, BarComponent as ɵcc, ProgressBars as ɵcb, MdProgressBarModule as ɵdv, ProgressBarComponent as ɵdw, MdProgressSpinnerModule as ɵdx, MdProgressSpinnerComponent as ɵdz, MdProgressSpinnerCssMatStylerDirective as ɵdy, MdSpinnerComponent as ɵea, ProgressSpinnerComponent as ɵch, ProgressDirective as ɵcd, ProgressbarComponent as ɵce, ProgressbarConfigComponent as ɵcg, ProgressbarModule as ɵcf, MdbRangeInputComponent as ɵck, RANGE_VALUE_ACCESOR as ɵcj, RangeModule as ɵci, ScrollSpyElementDirective as ɵcn, ScrollSpyLinkDirective as ɵco, ScrollSpyWindowDirective as ɵcm, ScrollSpyDirective as ɵcl, ScrollSpyModule as ɵcq, ScrollSpyService as ɵcp, SidenavComponent as ɵcr, SidenavModule as ɵcs, PageScrollDirective as ɵct, PageScrollInstance as ɵcv, SmoothscrollModule as ɵcw, PageScrollService as ɵcu, MdbStepComponent as ɵcy, MdbStepperComponent as ɵcx, StepperModule as ɵcz, MdbStickyDirective as ɵda, StickyContentModule as ɵdb, TabHeadingDirective as ɵde, TabDirective as ɵdd, TabsetComponent as ɵdf, TabsetConfig as ɵdg, TabsModule as ɵdh, NgTranscludeDirective as ɵdc, MaterialChipsComponent as ɵdi, MaterialChipsModule as ɵdj, ClockPickerComponent as ɵdk, TimePickerModule as ɵdl };

//# sourceMappingURL=ng-uikit-pro-standard.js.map