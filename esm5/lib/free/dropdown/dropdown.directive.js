/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownState } from './dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { takeUntil } from 'rxjs/operators';
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        this.cdRef = cdRef;
        this.dropupDefault = false;
        this.dynamicPosition = false;
        this._destroy$ = new Subject();
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
    Object.defineProperty(BsDropdownDirective.prototype, "isDropup", {
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        get: /**
         * This attribute indicates that the dropdown should be opened upwards
         * @return {?}
         */
        function () {
            if (this.dropup) {
                this._isDropupDefault = false;
                return this.dropup;
            }
            else if (this.dropupDefault) {
                this._isDropupDefault = true;
                return this.dropupDefault;
            }
            else if (this.dropupDefault && this.dropup) {
                this._isDropupDefault = false;
                return this.dropup;
            }
        },
        enumerable: true,
        configurable: true
    });
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
        function () {
            return this._isDisabled;
        },
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
        this._dropup = this.dropup;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); }),
        });
        // toggle visibility on toggle element click
        this._state.toggleClick
            .pipe(takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._state.isDisabledChange.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu.then((/**
             * @param {?} dropdownMenu
             * @return {?}
             */
            function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            }));
        }
        this._state.isOpenChange.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var dropdownContainer = _this._elementRef.nativeElement.querySelector('.dropdown-menu');
                /** @type {?} */
                var left = dropdownContainer.getBoundingClientRect().left;
                if (dropdownContainer.classList.contains('dropdown-menu-right') &&
                    left <= dropdownContainer.clientWidth) {
                    if (left < 0) {
                        _this._renderer.setStyle(dropdownContainer, 'right', left + 'px');
                    }
                    else {
                        _this._renderer.setStyle(dropdownContainer, 'right', '0');
                    }
                }
            }), 0);
        }));
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
        /** @type {?} */
        var button = this._elementRef.nativeElement.children[0];
        /** @type {?} */
        var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        if (!container.parentNode.classList.contains('btn-group') &&
            !container.parentNode.classList.contains('dropdown') &&
            !this._isDropupDefault) {
            container.parentNode.classList.add('dropdown');
        }
        if (this.dropup && !this._isDropupDefault) {
            container.parentNode.classList.add('dropup-material');
        }
        if (button.tagName !== 'BUTTON') {
            if (button.tagName === 'A') {
                container.classList.add('a-various-dropdown');
            }
            else {
                container.classList.add('various-dropdown');
            }
        }
        else {
            if (button.classList.contains('btn-sm')) {
                container.classList.add('small-dropdown');
            }
            if (button.classList.contains('btn-md')) {
                container.classList.add('medium-dropdown');
            }
            if (button.classList.contains('btn-lg')) {
                container.classList.add('large-dropdown');
            }
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            container.classList.add('fadeInDropdown');
            if (_this.dynamicPosition) {
                /** @type {?} */
                var bounding = container.getBoundingClientRect();
                /** @type {?} */
                var out = {
                    top: bounding.top < 0,
                    bottom: bounding.bottom > (window.innerHeight || document.documentElement.clientHeight),
                };
                if (_this.dropup && out.top) {
                    _this.dropup = false;
                }
                else if (!_this.dropup && out.bottom) {
                    _this.dropup = true;
                }
            }
        }), 0);
        if (this._showInline) {
            this._isInlineOpen = true;
            if (container.parentNode.classList.contains('dropdown') ||
                container.parentNode.classList.contains('dropup-material')) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.onShown.emit(true);
                    _this.shown.emit(true);
                }), 560);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.onShown.emit(true);
                    _this.shown.emit(true);
                }), 0);
            }
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then((/**
         * @param {?} dropdownMenu
         * @return {?}
         */
        function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup === true || _this.dropupDefault === true;
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement,
            });
            _this._state.isOpenChange.emit(true);
        }));
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
        if (this.dropup !== this._dropup) {
            this.dropup = this._dropup;
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        container.classList.remove('fadeInDropdown');
        if (container.parentNode.classList.contains('dropdown') ||
            container.parentNode.classList.contains('dropup-material')) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                    _this.cdRef.markForCheck();
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }), 560);
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                    _this.cdRef.markForCheck();
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }), 0);
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
        // clean up subscriptions and destroy dropdown
        this._destroy$.next();
        this._destroy$.complete();
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    providers: [BsDropdownState],
                    styles: [".dropdown-menu .dropdown-item:active{background-color:#757575}.show>.dropdown-menu{display:block}.show>a{outline:0}.various-dropdown{-webkit-transform:translate3d(0,21px,0)!important;transform:translate3d(0,21px,0)!important}.a-various-dropdown{-webkit-transform:translate3d(0,29px,0)!important;transform:translate3d(0,29px,0)!important}.medium-dropdown{-webkit-transform:translate3d(0,36px,0)!important;transform:translate3d(0,36px,0)!important}.small-dropdown{-webkit-transform:translate3d(5px,34px,0)!important;transform:translate3d(5px,34px,0)!important}.large-dropdown{-webkit-transform:translate3d(5px,57px,0)!important;transform:translate3d(5px,57px,0)!important}.btn-group>.dropdown-menu{-webkit-transform:translate3d(0,43px,0);transform:translate3d(0,43px,0)}.dropup>.dropdown-menu{display:none;-webkit-transform:translate3d(117px,0,0)!important;transform:translate3d(117px,0,0)!important;will-change:transform}.dropup.show .dropdown-menu{display:block;opacity:0}.dropup.show .fadeInDropdown{opacity:1}.dropup-material.show .dropdown-menu{-webkit-transition:.55s;transition:.55s}.dropdown-menu{margin-top:5px;will-change:transform;display:none;position:absolute;-webkit-transform:translate3d(6px,49px,0);transform:translate3d(6px,49px,0);top:0;left:0;will-change:transform}.dropdown.show .dropdown-menu{display:block;opacity:0;-webkit-transition:.55s;transition:.55s}.dropdown.show .fadeInDropdown{opacity:1}.dropdown .dropdown-menu,.dropleft .dropdown-menu,.dropright .dropdown-menu,.dropup-material .dropdown-menu{padding:.5rem}.dropdown .dropdown-menu.dropdown-primary .dropdown-item.active,.dropdown .dropdown-menu.dropdown-primary .dropdown-item:active,.dropdown .dropdown-menu.dropdown-primary .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-primary .dropdown-item.active,.dropleft .dropdown-menu.dropdown-primary .dropdown-item:active,.dropleft .dropdown-menu.dropdown-primary .dropdown-item:hover,.dropright .dropdown-menu.dropdown-primary .dropdown-item.active,.dropright .dropdown-menu.dropdown-primary .dropdown-item:active,.dropright .dropdown-menu.dropdown-primary .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item:hover{background-color:#4285f4!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-danger .dropdown-item.active,.dropdown .dropdown-menu.dropdown-danger .dropdown-item:active,.dropdown .dropdown-menu.dropdown-danger .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-danger .dropdown-item.active,.dropleft .dropdown-menu.dropdown-danger .dropdown-item:active,.dropleft .dropdown-menu.dropdown-danger .dropdown-item:hover,.dropright .dropdown-menu.dropdown-danger .dropdown-item.active,.dropright .dropdown-menu.dropdown-danger .dropdown-item:active,.dropright .dropdown-menu.dropdown-danger .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item:hover{background-color:#c00!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-default .dropdown-item.active,.dropdown .dropdown-menu.dropdown-default .dropdown-item:active,.dropdown .dropdown-menu.dropdown-default .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-default .dropdown-item.active,.dropleft .dropdown-menu.dropdown-default .dropdown-item:active,.dropleft .dropdown-menu.dropdown-default .dropdown-item:hover,.dropright .dropdown-menu.dropdown-default .dropdown-item.active,.dropright .dropdown-menu.dropdown-default .dropdown-item:active,.dropright .dropdown-menu.dropdown-default .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-default .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-default .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-default .dropdown-item:hover{background-color:#2bbbad!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-default .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-default .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-default .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-default .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-default .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-default .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-default .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-default .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-default .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-secondary .dropdown-item.active,.dropdown .dropdown-menu.dropdown-secondary .dropdown-item:active,.dropdown .dropdown-menu.dropdown-secondary .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item.active,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item:active,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item:hover,.dropright .dropdown-menu.dropdown-secondary .dropdown-item.active,.dropright .dropdown-menu.dropdown-secondary .dropdown-item:active,.dropright .dropdown-menu.dropdown-secondary .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item:hover{background-color:#a6c!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-success .dropdown-item.active,.dropdown .dropdown-menu.dropdown-success .dropdown-item:active,.dropdown .dropdown-menu.dropdown-success .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-success .dropdown-item.active,.dropleft .dropdown-menu.dropdown-success .dropdown-item:active,.dropleft .dropdown-menu.dropdown-success .dropdown-item:hover,.dropright .dropdown-menu.dropdown-success .dropdown-item.active,.dropright .dropdown-menu.dropdown-success .dropdown-item:active,.dropright .dropdown-menu.dropdown-success .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-success .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-success .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-success .dropdown-item:hover{background-color:#00c851!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-success .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-success .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-success .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-success .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-success .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-success .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-success .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-success .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-success .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-info .dropdown-item.active,.dropdown .dropdown-menu.dropdown-info .dropdown-item:active,.dropdown .dropdown-menu.dropdown-info .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-info .dropdown-item.active,.dropleft .dropdown-menu.dropdown-info .dropdown-item:active,.dropleft .dropdown-menu.dropdown-info .dropdown-item:hover,.dropright .dropdown-menu.dropdown-info .dropdown-item.active,.dropright .dropdown-menu.dropdown-info .dropdown-item:active,.dropright .dropdown-menu.dropdown-info .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-info .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-info .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-info .dropdown-item:hover{background-color:#33b5e5!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-info .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-info .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-info .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-info .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-info .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-info .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-info .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-info .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-info .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-warning .dropdown-item.active,.dropdown .dropdown-menu.dropdown-warning .dropdown-item:active,.dropdown .dropdown-menu.dropdown-warning .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-warning .dropdown-item.active,.dropleft .dropdown-menu.dropdown-warning .dropdown-item:active,.dropleft .dropdown-menu.dropdown-warning .dropdown-item:hover,.dropright .dropdown-menu.dropdown-warning .dropdown-item.active,.dropright .dropdown-menu.dropdown-warning .dropdown-item:active,.dropright .dropdown-menu.dropdown-warning .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item:hover{background-color:#fb3!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-dark .dropdown-item.active,.dropdown .dropdown-menu.dropdown-dark .dropdown-item:active,.dropdown .dropdown-menu.dropdown-dark .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-dark .dropdown-item.active,.dropleft .dropdown-menu.dropdown-dark .dropdown-item:active,.dropleft .dropdown-menu.dropdown-dark .dropdown-item:hover,.dropright .dropdown-menu.dropdown-dark .dropdown-item.active,.dropright .dropdown-menu.dropdown-dark .dropdown-item:active,.dropright .dropdown-menu.dropdown-dark .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item:hover{background-color:#2e2e2e!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu.dropdown-ins .dropdown-item.active,.dropdown .dropdown-menu.dropdown-ins .dropdown-item:active,.dropdown .dropdown-menu.dropdown-ins .dropdown-item:hover,.dropleft .dropdown-menu.dropdown-ins .dropdown-item.active,.dropleft .dropdown-menu.dropdown-ins .dropdown-item:active,.dropleft .dropdown-menu.dropdown-ins .dropdown-item:hover,.dropright .dropdown-menu.dropdown-ins .dropdown-item.active,.dropright .dropdown-menu.dropdown-ins .dropdown-item:active,.dropright .dropdown-menu.dropdown-ins .dropdown-item:hover,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item.active,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item:active,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item:hover{background-color:#2e5e86!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.dropdown .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,.dropdown .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,.dropdown .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,.dropleft .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,.dropleft .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,.dropleft .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,.dropright .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,.dropright .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,.dropright .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,.dropup-material .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled{background-color:transparent;box-shadow:none}.dropdown .dropdown-menu .dropdown-item,.dropleft .dropdown-menu .dropdown-item,.dropright .dropdown-menu .dropdown-item,.dropup-material .dropdown-menu .dropdown-item{padding:.5rem;margin-left:0;font-size:.9rem}.dropdown .dropdown-menu .dropdown-item.disabled,.dropleft .dropdown-menu .dropdown-item.disabled,.dropright .dropdown-menu .dropdown-item.disabled,.dropup-material .dropdown-menu .dropdown-item.disabled{color:#868e96}.dropdown .dropdown-menu .dropdown-item.disabled:active,.dropdown .dropdown-menu .dropdown-item.disabled:focus,.dropdown .dropdown-menu .dropdown-item.disabled:hover,.dropleft .dropdown-menu .dropdown-item.disabled:active,.dropleft .dropdown-menu .dropdown-item.disabled:focus,.dropleft .dropdown-menu .dropdown-item.disabled:hover,.dropright .dropdown-menu .dropdown-item.disabled:active,.dropright .dropdown-menu .dropdown-item.disabled:focus,.dropright .dropdown-menu .dropdown-item.disabled:hover,.dropup-material .dropdown-menu .dropdown-item.disabled:active,.dropup-material .dropdown-menu .dropdown-item.disabled:focus,.dropup-material .dropdown-menu .dropdown-item.disabled:hover{box-shadow:none;color:#868e96!important;background-color:transparent!important}.dropdown .dropdown-menu .dropdown-item:active,.dropdown .dropdown-menu .dropdown-item:hover,.dropleft .dropdown-menu .dropdown-item:active,.dropleft .dropdown-menu .dropdown-item:hover,.dropright .dropdown-menu .dropdown-item:active,.dropright .dropdown-menu .dropdown-item:hover,.dropup-material .dropdown-menu .dropdown-item:active,.dropup-material .dropdown-menu .dropdown-item:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);color:#fff;background-color:#4285f4;border-radius:.125rem;-webkit-transition:.1s linear;transition:.1s linear}.navbar-nav .dropdown-menu-right{right:0;left:auto}.dropdown-menu.animated{-webkit-animation-duration:.55s;animation-duration:.55s;-webkit-animation-timing-function:ease;animation-timing-function:ease}"]
                }] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: BsDropdownConfig },
        { type: BsDropdownState },
        { type: ChangeDetectorRef }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        dropup: [{ type: Input }],
        dropupDefault: [{ type: Input }],
        dynamicPosition: [{ type: Input }],
        isDropup: [{ type: HostBinding, args: ['class.dropup',] }],
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
export { BsDropdownDirective };
if (false) {
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDropdownDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDropdownDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    BsDropdownDirective.prototype.container;
    /** @type {?} */
    BsDropdownDirective.prototype.dropup;
    /** @type {?} */
    BsDropdownDirective.prototype.dropupDefault;
    /** @type {?} */
    BsDropdownDirective.prototype.dynamicPosition;
    /**
     * Emits an event when isOpen change
     * @type {?}
     */
    BsDropdownDirective.prototype.isOpenChange;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    BsDropdownDirective.prototype.onShown;
    /** @type {?} */
    BsDropdownDirective.prototype.shown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    BsDropdownDirective.prototype.onHidden;
    /** @type {?} */
    BsDropdownDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._destroy$;
    /** @type {?} */
    BsDropdownDirective.prototype._isInlineOpen;
    /** @type {?} */
    BsDropdownDirective.prototype._showInline;
    /** @type {?} */
    BsDropdownDirective.prototype._inlinedMenu;
    /** @type {?} */
    BsDropdownDirective.prototype._isDisabled;
    /** @type {?} */
    BsDropdownDirective.prototype._dropdown;
    /** @type {?} */
    BsDropdownDirective.prototype._dropup;
    /** @type {?} */
    BsDropdownDirective.prototype._subscriptions;
    /** @type {?} */
    BsDropdownDirective.prototype._isInited;
    /** @type {?} */
    BsDropdownDirective.prototype._isDropupDefault;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._cis;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._state;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvZHJvcGRvd24vZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBa0lFLDZCQUNVLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGlCQUFtQyxFQUNuQyxJQUE0QixFQUM1QixPQUF5QixFQUN6QixNQUF1QixFQUN2QixLQUF3QjtRQU54QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FB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Q0FBMEI7Ozs7O0lBR3hCLDBDQUErQjs7Ozs7SUFDL0Isd0NBQTRCOzs7OztJQUM1QixnREFBMkM7Ozs7O0lBQzNDLG1DQUFvQzs7Ozs7SUFDcEMsc0NBQWlDOzs7OztJQUNqQyxxQ0FBK0I7Ozs7O0lBQy9CLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vZHJvcGRvd24uY29uZmlnJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvYnMtY29tcG9uZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21kYkRyb3Bkb3duXSxbZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWydkcm9wZG93bi1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRyb3B1cDogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJvcHVwRGVmYXVsdCA9IGZhbHNlO1xuICBASW5wdXQoKSBkeW5hbWljUG9zaXRpb24gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHNcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZHJvcHVwJykgcHVibGljIGdldCBpc0Ryb3B1cCgpIHtcbiAgICBpZiAodGhpcy5kcm9wdXApIHtcbiAgICAgIHRoaXMuX2lzRHJvcHVwRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuZHJvcHVwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wdXBEZWZhdWx0KSB7XG4gICAgICB0aGlzLl9pc0Ryb3B1cERlZmF1bHQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuZHJvcHVwRGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcHVwRGVmYXVsdCAmJiB0aGlzLmRyb3B1cCkge1xuICAgICAgdGhpcy5faXNEcm9wdXBEZWZhdWx0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5kcm9wdXA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcbiAgICovXG4gIEBJbnB1dCgpIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhdXRvQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBkcm9wZG93biB0b2dnbGUgYW5kIGhpZGVzIGRyb3Bkb3duIG1lbnUgaWYgb3BlbmVkXG4gICAqL1xuICBASW5wdXQoKSBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3BlbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0lubGluZU9wZW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bi5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGlzT3BlbiBjaGFuZ2VcbiAgICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIHNob3duXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIF9pc0lubGluZU9wZW4gPSBmYWxzZTtcbiAgX3Nob3dJbmxpbmU6IGJvb2xlYW47XG4gIF9pbmxpbmVkTWVudTogRW1iZWRkZWRWaWV3UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPjtcblxuICBfaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgX2Ryb3Bkb3duOiBDb21wb25lbnRMb2FkZXI8QnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudD47XG4gIF9kcm9wdXA6IGJvb2xlYW47XG4gIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBfaXNJbml0ZWQgPSBmYWxzZTtcbiAgX2lzRHJvcHVwRGVmYXVsdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9jaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgLy8gY3JlYXRlIGRyb3Bkb3duIGNvbXBvbmVudCBsb2FkZXJcbiAgICB0aGlzLl9kcm9wZG93biA9IHRoaXMuX2Npc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZixcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcbiAgICAgIClcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogQnNEcm9wZG93blN0YXRlLCB1c2VWYWx1ZTogdGhpcy5fc3RhdGUgfSk7XG5cbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xuICAgIHRoaXMuc2hvd24gPSB0aGlzLl9kcm9wZG93bi5zaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZHJvcGRvd24ub25IaWRkZW47XG4gICAgdGhpcy5oaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5oaWRkZW47XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UgPSB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2U7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBkcm9wZG93biBzdGF0ZSBmcm9tIGNvbmZpZ1xuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxuICAgIC8vIHdoaWNoIHJlc3VsdCBpbiBkdXBsaWNhdGVkIGNhbGwgbmdPbkluaXQgd2l0aG91dCBjYWxsIHRvIG5nT25EZXN0cm95XG4gICAgLy8gcmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcC9pc3N1ZXMvMTg4NVxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XG5cbiAgICB0aGlzLl9zaG93SW5saW5lID0gIXRoaXMuY29udGFpbmVyO1xuXG4gICAgdGhpcy5fZHJvcHVwID0gdGhpcy5kcm9wdXA7XG5cbiAgICAvLyBhdHRhY2ggRE9NIGxpc3RlbmVyc1xuICAgIHRoaXMuX2Ryb3Bkb3duLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpLFxuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xlIHZpc2liaWxpdHkgb24gdG9nZ2xlIGVsZW1lbnQgY2xpY2tcbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGlja1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLnRvZ2dsZSh2YWx1ZSkpO1xuXG4gICAgLy8gaGlkZSBkcm9wZG93biBpZiBzZXQgZGlzYWJsZWQgd2hpbGUgb3BlbmVkXG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGF0dGFjaCBkcm9wZG93biBtZW51IGluc2lkZSBvZiBkcm9wZG93blxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbigoZHJvcGRvd25NZW51OiBCc0NvbXBvbmVudFJlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT4pID0+IHtcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUgPSBkcm9wZG93bk1lbnUudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGRyb3Bkb3duQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVudS1yaWdodCcpICYmXG4gICAgICAgICAgbGVmdCA8PSBkcm9wZG93bkNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duQ29udGFpbmVyLCAncmlnaHQnLCBsZWZ0ICsgJ3B4Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duQ29udGFpbmVyLCAncmlnaHQnLCAnMCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbWF0ZXJpYWwgYW5kIGRyb3B1cCBkcm9wZG93biBhbmltYXRpb25cblxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcblxuICAgIGlmIChcbiAgICAgICFjb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1ncm91cCcpICYmXG4gICAgICAhY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bicpICYmXG4gICAgICAhdGhpcy5faXNEcm9wdXBEZWZhdWx0XG4gICAgKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kcm9wdXAgJiYgIXRoaXMuX2lzRHJvcHVwRGVmYXVsdCkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZHJvcHVwLW1hdGVyaWFsJyk7XG4gICAgfVxuICAgIGlmIChidXR0b24udGFnTmFtZSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgIGlmIChidXR0b24udGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhLXZhcmlvdXMtZHJvcGRvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2YXJpb3VzLWRyb3Bkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc20nKSkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc21hbGwtZHJvcGRvd24nKTtcbiAgICAgIH1cbiAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tbWQnKSkge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLWRyb3Bkb3duJyk7XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnRuLWxnJykpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xhcmdlLWRyb3Bkb3duJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkRyb3Bkb3duJyk7XG5cbiAgICAgIGlmICh0aGlzLmR5bmFtaWNQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBib3VuZGluZyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgb3V0OiB7IHRvcDogYm9vbGVhbjsgYm90dG9tOiBib29sZWFuIH0gPSB7XG4gICAgICAgICAgdG9wOiBib3VuZGluZy50b3AgPCAwLFxuICAgICAgICAgIGJvdHRvbTogYm91bmRpbmcuYm90dG9tID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5kcm9wdXAgJiYgb3V0LnRvcCkge1xuICAgICAgICAgIHRoaXMuZHJvcHVwID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZHJvcHVwICYmIG91dC5ib3R0b20pIHtcbiAgICAgICAgICB0aGlzLmRyb3B1cCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAwKTtcblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgfHxcbiAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wdXAtbWF0ZXJpYWwnKVxuICAgICAgKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuc2hvd24uZW1pdCh0cnVlKTtcbiAgICAgICAgfSwgNTYwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuc2hvd24uZW1pdCh0cnVlKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihkcm9wZG93bk1lbnUgPT4ge1xuICAgICAgLy8gY2hlY2sgZGlyZWN0aW9uIGluIHdoaWNoIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWRcbiAgICAgIGNvbnN0IF9kcm9wdXAgPSB0aGlzLmRyb3B1cCA9PT0gdHJ1ZSB8fCB0aGlzLmRyb3B1cERlZmF1bHQgPT09IHRydWU7XG5cbiAgICAgIHRoaXMuX3N0YXRlLmRpcmVjdGlvbiA9IF9kcm9wdXAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgY29uc3QgX3BsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50IHx8IChfZHJvcHVwID8gJ3RvcCBsZWZ0JyA6ICdib3R0b20gbGVmdCcpO1xuXG4gICAgICAvLyBzaG93IGRyb3Bkb3duXG4gICAgICB0aGlzLl9kcm9wZG93blxuICAgICAgICAuYXR0YWNoKEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQpXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgLnBvc2l0aW9uKHsgYXR0YWNobWVudDogX3BsYWNlbWVudCB9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLFxuICAgICAgICAgIHBsYWNlbWVudDogX3BsYWNlbWVudCxcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRyb3B1cCAhPT0gdGhpcy5fZHJvcHVwKSB7XG4gICAgICB0aGlzLmRyb3B1cCA9IHRoaXMuX2Ryb3B1cDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5Ecm9wZG93bicpO1xuICAgIGlmIChcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSB8fFxuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wdXAtbWF0ZXJpYWwnKVxuICAgICkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuaGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB9LCA1NjApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9uSGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5oaWRkZW4uZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Ryb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgdG9nZ2xlKHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBkZXN0cm95IGRyb3Bkb3duXG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZHJvcGRvd24uZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=