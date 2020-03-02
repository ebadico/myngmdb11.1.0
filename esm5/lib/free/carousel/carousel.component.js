/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, QueryList, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';
import { isPlatformBrowser } from '@angular/common';
import { LEFT_ARROW, RIGHT_ARROW } from '../utils/keyboard-navigation';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
export { Direction };
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, el, platformId, cdRef, renderer) {
        this.el = el;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._destroy$ = new Subject();
        this.destroyed = false;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        this.allowSwipe = true;
        this.activeSlideChange = new EventEmitter(false);
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slidesList.toArray();
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
            if (this._slidesList && index !== this._currentActiveSlide) {
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
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.play();
        this._slidesList.changes
            .pipe(takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} slidesList
         * @return {?}
         */
        function (slidesList) {
            _this._slidesList = slidesList;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(0);
            }), 0);
        }));
        if (this.activeSlideIndex) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(_this.activeSlideIndex);
                _this.activeSlideChange.emit({ relatedTarget: _this.activeSlide });
            }), 0);
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(0);
            }), 0);
        }
        if (this.isControls) {
            this.carouselIndicators = this.el.nativeElement.querySelectorAll('.carousel-indicators > li');
            if (this.carouselIndicators.length && this.activeSlideIndex) {
                this.renderer.addClass(this.carouselIndicators[this.activeSlideIndex], 'active');
            }
            else if (this.carouselIndicators.length) {
                this.renderer.addClass(this.carouselIndicators[0], 'active');
            }
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
        if (this.allowSwipe) {
            if (action === this.SWIPE_ACTION.RIGHT) {
                this.previousSlide();
                this.cdRef.markForCheck();
            }
            if (action === this.SWIPE_ACTION.LEFT) {
                this.nextSlide();
                this.cdRef.markForCheck();
            }
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
        this.restartTimer();
        // Start next slide, pause actual slide
        /** @type {?} */
        var videoList = this.el.nativeElement.getElementsByTagName('video');
        /** @type {?} */
        var direction = Direction.NEXT;
        /** @type {?} */
        var indexEl = this.findNextSlideIndex(direction, force);
        if (videoList.length > 0) {
            // Check for video carousel
            for (var i = 0; i < videoList.length; i++) {
                if (i === indexEl) {
                    videoList[i].play();
                }
                else {
                    videoList[i].pause();
                }
            }
        }
        if (this.animation === 'slide') {
            this.pause();
            this.slideAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ direction: 'Next', relatedTarget: this.activeSlide });
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
        this.restartTimer();
        // Start previous slide, pause actual slide
        /** @type {?} */
        var videoList = this.el.nativeElement.getElementsByTagName('video');
        /** @type {?} */
        var direction = Direction.PREV;
        /** @type {?} */
        var indexel = this.findNextSlideIndex(direction, force);
        if (videoList.length > 0) {
            // Check for video carousel
            for (var i = 0; i < videoList.length; i++) {
                if (i === indexel) {
                    videoList[i].play();
                }
                else {
                    videoList[i].pause();
                }
            }
        }
        if (this.animation === 'slide') {
            this.pause();
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force), Direction.PREV);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: this.activeSlide });
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?=} direction
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @param {?=} direction
     * @return {?}
     */
    function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var goToSlide = this.slides[goToIndex];
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var previous = _this.slides[_this._currentActiveSlide].el.nativeElement;
                    _this.renderer.setStyle(previous, 'opacity', '0');
                    _this.renderer.setStyle(previous, 'transition', 'all 600ms');
                    _this.renderer.setStyle(previous, 'display', 'block');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'display', 'block');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'opacity', '1');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'transition', 'all 600ms');
                    if (direction === 1) {
                        _this.activeSlideChange.emit({ direction: 'Next', relatedTarget: _this.activeSlide });
                    }
                    else if (direction === 2) {
                        _this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: _this.activeSlide });
                    }
                    goToSlide.directionNext = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    _this.activeSlideChange.emit({ direction: 'Next', relatedTarget: _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }), 0);
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
        var currentSlide = this.slides[this._currentActiveSlide];
        /** @type {?} */
        var goToSlide = this.slides[goToIndex];
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                        _this.cdRef.markForCheck();
                    }), 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                        _this.cdRef.markForCheck();
                    }), 100);
                }
            }
            if (this.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
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
                    _this.activeSlideChange.emit({
                        direction: directionName,
                        relatedTarget: _this.activeSlide,
                    });
                    _this.play();
                    _this.cdRef.markForCheck();
                }), 700);
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
        var _this = this;
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
        else if (!this.animation) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var direction = index < _this.activeSlide ? 'Prev' : 'Next';
                _this._select(index);
                _this.activeSlideChange.emit({
                    direction: direction,
                    relatedTarget: _this.activeSlide,
                });
            }), 0);
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
            this.cdRef.markForCheck();
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
            this.cdRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * @return {?}
     */
    function () {
        return this.slides.findIndex((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active; }));
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
        return index + 1 >= this.slides.length;
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
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap
                        ? this._currentActiveSlide
                        : 0;
                break;
            case Direction.PREV:
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this.slides.length - 1;
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
        var currentSlide = this.slides[this._currentActiveSlide];
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        var nextSlide = this.slides[index];
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
        }
        this.cdRef.markForCheck();
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
                this.currentInterval = setInterval((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.nextSlide();
                    }
                    else {
                        _this.pause();
                    }
                }), interval);
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
            // tslint:disable-next-line: deprecation
            if (event.keyCode === RIGHT_ARROW) {
                this.nextSlide();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === LEFT_ARROW) {
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
                    template: "<div\n  tabindex=\"0\"\n  (swipeleft)=\"swipe($event.type)\"\n  (swiperight)=\"swipe($event.type)\"\n  (mouseenter)=\"pause()\"\n  (mouseleave)=\"play()\"\n  (mouseup)=\"play()\"\n  class=\"carousel {{ class }} {{ type }}\"\n>\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a\n      mdbBtn\n      floating=\"true\"\n      [class.disabled]=\"activeSlide === 0 && noWrap\"\n      (click)=\"previousSlide()\"\n      ><i class=\"fas fa-chevron-left\"></i\n    ></a>\n    <a mdbBtn floating=\"true\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"\n      ><i class=\"fas fa-chevron-right\"></i\n    ></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    ></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    >\n      <img class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\" />\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a\n    class=\"carousel-control-prev\"\n    [class.disabled]=\"activeSlide === 0 && noWrap\"\n    (click)=\"previousSlide()\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a\n    class=\"carousel-control-next\"\n    (click)=\"nextSlide()\"\n    [class.disabled]=\"isLast(activeSlide) && noWrap\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".carousel .carousel-control-next-icon,.carousel .carousel-control-prev-icon{width:2.25rem;height:2.25rem}.carousel .carousel-indicators li{width:.625rem;height:.625rem;border-radius:50%;cursor:pointer}.carousel-fade .carousel-item{opacity:0;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:opacity;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-right.active{opacity:0}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)}@supports (transform-style:preserve-3d){.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-control-next,.carousel-control-prev,.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:-webkit-box;display:flex;overflow:hidden}.carousel,.carousel-multi-item,.carousel-thumbnails{outline:0}.carousel-fade .carousel-inner .carousel-item{opacity:0;-webkit-transition-property:opacity;transition-property:opacity}.carousel-fade .carousel-inner .active{opacity:1;-webkit-transition:.6s;transition:.6s}.carousel-fade .carousel-inner>.carousel-item.active,.carousel-fade .carousel-inner>.carousel-item.next.left,.carousel-fade .carousel-inner>.carousel-item.prev.right{opacity:1;-webkit-transition:.6s;transition:.6s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.carousel-multi-item{margin-bottom:5rem}.carousel-multi-item .carousel-inner .carousel-item.active,.carousel-multi-item .carousel-item-next,.carousel-multi-item .carousel-item-prev{display:block}.carousel-multi-item .carousel-inner.v-2 .carousel-item-next,.carousel-multi-item .carousel-inner.v-2 .carousel-item-prev,.carousel-multi-item .carousel-inner.v-2 .carousel-item.active{display:-webkit-box;display:flex}.carousel-multi-item .carousel-inner.v-2 .carousel-item-next,.carousel-multi-item .carousel-inner.v-2 .carousel-item-right.active{-webkit-transform:translateX(33%);transform:translateX(33%)}.carousel-multi-item .carousel-inner.v-2 .carousel-item-left.active,.carousel-multi-item .carousel-inner.v-2 .carousel-item-prev{-webkit-transform:translateX(-33%);transform:translateX(-33%)}.carousel-multi-item .carousel-inner.v-2 .carousel-item-left,.carousel-multi-item .carousel-inner.v-2 .carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}.carousel-multi-item .carousel-indicators li{height:1.25rem;width:1.25rem;max-width:1.25rem;background-color:#4285f4;margin-bottom:-3.75rem}.carousel-multi-item .carousel-indicators .active{height:1.56rem;width:1.56rem;max-width:1.56rem;background-color:#4285f4;border-radius:50%}.carousel-multi-item .controls-top{text-align:center;margin-bottom:1.88rem}.carousel-multi-item .controls-top .btn-floating{background:#4285f4}.carousel-multi-item .carousel-indicators{margin-bottom:-2em}.carousel-multi-item .card-cascade.narrower{margin-top:1.25rem;margin-bottom:.3rem}@media (min-width:768px){.carousel-multi-item .col-md-4{float:left;width:33.333333%;max-width:100%}}@media only screen and (max-width:992px){.carousel-multi-item .carousel-indicators li{margin-bottom:-1.88rem}}.carousel-thumbnails .carousel-indicators{white-space:nowrap;overflow-x:auto;width:initial;margin-left:initial;margin-right:initial;margin-bottom:-4.69rem;position:absolute;left:0}.carousel-thumbnails .carousel-indicators>li{width:initial;height:initial;text-indent:initial}.carousel-thumbnails .carousel-indicators>li .active img{opacity:1}.wrapper-carousel-fix .carousel-fade .active.carousel-item-left,.wrapper-carousel-fix .carousel-fade .active.carousel-item-right{-webkit-transition:opacity .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s;transition-property:opacity}.carousel-thumbnails{margin-bottom:5rem}.carousel-thumbnails .carousel-indicators li{height:auto;width:6.25rem;max-width:6.25rem;border:none}.carousel-thumbnails .carousel-indicators .active{background-color:#fff;height:auto;width:auto;opacity:1}.carousel-thumbnails .carousel-indicators img{max-width:6.25rem;height:auto;overflow:hidden;display:block}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CarouselComponent.propDecorators = {
        _slidesList: [{ type: ContentChildren, args: [SlideComponent,] }],
        noWrap: [{ type: Input }],
        noPause: [{ type: Input }],
        isControls: [{ type: Input }],
        keyboard: [{ type: Input }],
        class: [{ type: Input }],
        type: [{ type: Input }],
        animation: [{ type: Input }],
        activeSlideIndex: [{ type: Input }],
        allowSwipe: [{ type: Input }],
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
export { CarouselComponent };
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.SWIPE_ACTION;
    /** @type {?} */
    CarouselComponent.prototype._slidesList;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype._destroy$;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.currentInterval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.isPlaying;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.destroyed;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.animationEnd;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentActiveSlide;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.carouselIndicators;
    /** @type {?} */
    CarouselComponent.prototype.isBrowser;
    /** @type {?} */
    CarouselComponent.prototype.noWrap;
    /** @type {?} */
    CarouselComponent.prototype.noPause;
    /** @type {?} */
    CarouselComponent.prototype.isControls;
    /** @type {?} */
    CarouselComponent.prototype.keyboard;
    /** @type {?} */
    CarouselComponent.prototype.class;
    /** @type {?} */
    CarouselComponent.prototype.type;
    /** @type {?} */
    CarouselComponent.prototype.animation;
    /** @type {?} */
    CarouselComponent.prototype.activeSlideIndex;
    /** @type {?} */
    CarouselComponent.prototype.allowSwipe;
    /** @type {?} */
    CarouselComponent.prototype.activeSlideChange;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFHN0IsVUFBTztJQUNQLE9BQUk7SUFDSixPQUFJOzs7Ozs7Ozs7QUFNTjtJQXFGRSwyQkFDRSxNQUFzQixFQUNaLEVBQWMsRUFDSCxVQUFrQixFQUMvQixLQUF3QixFQUN4QixRQUFtQjtRQUhqQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRWhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFsRjdCLGlCQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZ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QUMsV0FBVztnQkExSHJCLGlCQUFpQjtnQkFZakIsU0FBUzs7OzhCQWdDUixlQUFlLFNBQUMsY0FBYzt5QkFnQjlCLEtBQUs7MEJBQ0wsS0FBSzs2QkFFTCxLQUFLOzJCQUNMLEtBQUs7d0JBRUwsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLO29DQUVMLE1BQU07OEJBRU4sS0FBSzsyQkErQkwsS0FBSzt1QkE0UUwsWUFBWSxTQUFDLFlBQVk7d0JBUXpCLFlBQVksU0FBQyxZQUFZO2tDQWtIekIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFjaEMsWUFBWSxTQUFDLE9BQU87O0lBR3ZCLHdCQUFDO0NBQUEsQUE5ZEQsSUE4ZEM7U0F2ZFksaUJBQWlCOzs7SUFDNUIseUNBQTBEOztJQUUxRCx3Q0FBd0U7Ozs7O0lBS3hFLHNDQUFpRDs7Ozs7SUFFakQsNENBQStCOzs7OztJQUMvQixzQ0FBNkI7Ozs7O0lBQzdCLHNDQUE0Qjs7Ozs7SUFFNUIseUNBQThCOzs7OztJQUM5QixnREFBc0M7Ozs7O0lBQ3RDLCtDQUFrQzs7SUFFbEMsc0NBQXVCOztJQUN2QixtQ0FBZ0M7O0lBQ2hDLG9DQUFpQzs7SUFFakMsdUNBQWtDOztJQUNsQyxxQ0FBa0M7O0lBRWxDLGtDQUFtQzs7SUFDbkMsaUNBQWtDOztJQUNsQyxzQ0FBdUM7O0lBQ3ZDLDZDQUFrQzs7SUFDbEMsdUNBQTJCOztJQUUzQiw4Q0FBcUY7Ozs7O0lBYXJGLHNDQUE0Qjs7Ozs7SUFvQzFCLCtCQUF3Qjs7Ozs7SUFFeEIsa0NBQWdDOzs7OztJQUNoQyxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBVTktOT1dOLFxuICBORVhULFxuICBQUkVWLFxufVxuXG4vKipcbiAqIEJhc2UgZWxlbWVudCB0byBjcmVhdGUgY2Fyb3VzZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oU2xpZGVDb21wb25lbnQpIF9zbGlkZXNMaXN0OiBRdWVyeUxpc3Q8U2xpZGVDb21wb25lbnQ+O1xuICBwdWJsaWMgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzTGlzdC50b0FycmF5KCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIGN1cnJlbnRJbnRlcnZhbDogYW55O1xuICBwcm90ZWN0ZWQgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGFuaW1hdGlvbkVuZCA9IHRydWU7XG4gIHByb3RlY3RlZCBfY3VycmVudEFjdGl2ZVNsaWRlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjYXJvdXNlbEluZGljYXRvcnM6IGFueTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbm9XcmFwOiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgbm9QYXVzZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBwdWJsaWMgaXNDb250cm9scyA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBrZXlib2FyZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBwdWJsaWMgY2xhc3M6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRpb246IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBhY3RpdmVTbGlkZUluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbG93U3dpcGUgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc2xpZGVzTGlzdCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pbnRlcnZhbDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjaGVja05hdmlnYXRpb24oKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Nhcm91c2VsLW11bHRpLWl0ZW0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNoZWNrRG90cygpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnY2Fyb3VzZWwtdGh1bWJuYWlscycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRJbWcoc2xpZGU6IGFueSkge1xuICAgIHJldHVybiBzbGlkZS5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IENhcm91c2VsQ29uZmlnLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgICB0aGlzLl9zbGlkZXNMaXN0LmNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChzbGlkZXNMaXN0OiBRdWVyeUxpc3Q8U2xpZGVDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuX3NsaWRlc0xpc3QgPSBzbGlkZXNMaXN0O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3QoMCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTbGlkZUluZGV4KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0KHRoaXMuYWN0aXZlU2xpZGVJbmRleCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMuYWN0aXZlU2xpZGUgfSk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdCgwKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRpY2F0b3JzID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1pbmRpY2F0b3JzID4gbGknKTtcbiAgICAgIGlmICh0aGlzLmNhcm91c2VsSW5kaWNhdG9ycy5sZW5ndGggJiYgdGhpcy5hY3RpdmVTbGlkZUluZGV4KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbEluZGljYXRvcnNbdGhpcy5hY3RpdmVTbGlkZUluZGV4XSwgJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcm91c2VsSW5kaWNhdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsSW5kaWNhdG9yc1swXSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgaWYgKHRoaXMuYWxsb3dTd2lwZSkge1xuICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NsaWRlKCk7XG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQpIHtcbiAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dFNsaWRlKGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICAgIC8vIFN0YXJ0IG5leHQgc2xpZGUsIHBhdXNlIGFjdHVhbCBzbGlkZVxuICAgIGNvbnN0IHZpZGVvTGlzdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndmlkZW8nKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBEaXJlY3Rpb24uTkVYVDtcbiAgICBjb25zdCBpbmRleEVsID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uLCBmb3JjZSk7XG4gICAgaWYgKHZpZGVvTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBDaGVjayBmb3IgdmlkZW8gY2Fyb3VzZWxcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleEVsKSB7XG4gICAgICAgICAgdmlkZW9MaXN0W2ldLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2aWRlb0xpc3RbaV0ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5hbmltYXRpb24gPT09ICdzbGlkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24odGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKSwgRGlyZWN0aW9uLk5FWFQpO1xuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSAnZmFkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuZmFkZUFuaW1hdGlvbih0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uTkVYVCwgZm9yY2UpLCBEaXJlY3Rpb24uTkVYVCk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogJ05leHQnLCByZWxhdGVkVGFyZ2V0OiB0aGlzLmFjdGl2ZVNsaWRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c1NsaWRlKGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICAgIC8vIFN0YXJ0IHByZXZpb3VzIHNsaWRlLCBwYXVzZSBhY3R1YWwgc2xpZGVcbiAgICBjb25zdCB2aWRlb0xpc3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZpZGVvJyk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRGlyZWN0aW9uLlBSRVY7XG4gICAgY29uc3QgaW5kZXhlbCA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbiwgZm9yY2UpO1xuICAgIGlmICh2aWRlb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgLy8gQ2hlY2sgZm9yIHZpZGVvIGNhcm91c2VsXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gaW5kZXhlbCkge1xuICAgICAgICAgIHZpZGVvTGlzdFtpXS5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlkZW9MaXN0W2ldLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb24gPT09ICdzbGlkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24odGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uLCBmb3JjZSksIGRpcmVjdGlvbik7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09ICdmYWRlJykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5mYWRlQW5pbWF0aW9uKHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5QUkVWLCBmb3JjZSksIERpcmVjdGlvbi5QUkVWKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uUFJFViwgZm9yY2UpO1xuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiAnUHJldicsIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuYWN0aXZlU2xpZGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZhZGVBbmltYXRpb24oZ29Ub0luZGV4OiBudW1iZXIsIGRpcmVjdGlvbj86IGFueSkge1xuICAgIGNvbnN0IGdvVG9TbGlkZSA9IHRoaXMuc2xpZGVzW2dvVG9JbmRleF07XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25FbmQpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gZmFsc2U7XG5cbiAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuc2xpZGVzW3RoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZV0uZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocHJldmlvdXMsICdvcGFjaXR5JywgJzAnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHByZXZpb3VzLCAndHJhbnNpdGlvbicsICdhbGwgNjAwbXMnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHByZXZpb3VzLCAnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShnb1RvU2xpZGUuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGdvVG9TbGlkZS5lbC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShnb1RvU2xpZGUuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnYWxsIDYwMG1zJyk7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246ICdOZXh0JywgcmVsYXRlZFRhcmdldDogdGhpcy5hY3RpdmVTbGlkZSB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiAnUHJldicsIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuYWN0aXZlU2xpZGUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbk5leHQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGdvVG9JbmRleDtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246ICdOZXh0JywgcmVsYXRlZFRhcmdldDogdGhpcy5hY3RpdmVTbGlkZSB9KTtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc2xpZGVBbmltYXRpb24oZ29Ub0luZGV4OiBudW1iZXIsIGRpcmVjdGlvbjogYW55KSB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlXTtcbiAgICBjb25zdCBnb1RvU2xpZGUgPSB0aGlzLnNsaWRlc1tnb1RvSW5kZXhdO1xuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRW5kKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZCA9IGZhbHNlO1xuICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uTmV4dCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvbkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gZmFsc2U7XG5cbiAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvblByZXYgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25SaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuZGlyZWN0aW9uUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvbkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBjdXJyZW50U2xpZGUuZGlyZWN0aW9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25SaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25QcmV2ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblByZXYgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBnb1RvSW5kZXg7XG5cbiAgICAgICAgICBsZXQgZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9ICdOZXh0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSAnUHJldic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uTmFtZSxcbiAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuYWN0aXZlU2xpZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGF1c2UoKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24gPT09ICdzbGlkZScpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVNsaWRlIDwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zbGlkZUFuaW1hdGlvbihpbmRleCwgRGlyZWN0aW9uLk5FWFQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVNsaWRlID4gaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zbGlkZUFuaW1hdGlvbihpbmRleCwgRGlyZWN0aW9uLlBSRVYpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09ICdmYWRlJykge1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLmFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHRoaXMuZmFkZUFuaW1hdGlvbihpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA8IHRoaXMuYWN0aXZlU2xpZGUgPyAnUHJldicgOiAnTmV4dCc7XG4gICAgICAgIHRoaXMuX3NlbGVjdChpbmRleCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuYWN0aXZlU2xpZGUsXG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIHBsYXkoKSB7XG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIHBhdXNlKCkge1xuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5maW5kSW5kZXgoKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xhc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmRleCArIDEgPj0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlOiBib29sZWFuKTogYW55IHtcbiAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSAwO1xuXG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy5pc0xhc3QodGhpcy5hY3RpdmVTbGlkZSkgJiYgZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uUFJFViAmJiB0aGlzLm5vV3JhcCkpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLk5FWFQ6XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSlcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSArIDFcbiAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcFxuICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlXG4gICAgICAgICAgOiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPiAwXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSAtIDFcbiAgICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZVxuICAgICAgICAgICAgOiB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBkaXJlY3Rpb24nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRTbGlkZUluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZV07XG4gICAgaWYgKGN1cnJlbnRTbGlkZSkge1xuICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2xpZGUgPSB0aGlzLnNsaWRlc1tpbmRleF07XG4gICAgaWYgKG5leHRTbGlkZSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICBuZXh0U2xpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgICB9XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzdGFydFRpbWVyKCk6IGFueSB7XG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgICAgaWYgKCFpc05hTihpbnRlcnZhbCkgJiYgaW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5JbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZyAmJiAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiYgbkludGVydmFsID4gMCAmJiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJykpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjbGFzc0FkZChlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNTbGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgZm9jdXMoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==