/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, HostListener, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { LinkedList } from '../utils/linked-list.class';
import { CarouselConfig } from './carousel.config';
import { isPlatformBrowser } from '@angular/common';
/** @enum {number} */
const Direction = {
    UNKNOWN: 0, NEXT: 1, PREV: 2,
};
export { Direction };
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
export class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} el
     * @param {?} platformId
     * @param {?} cdRef
     */
    constructor(config, el, platformId, cdRef) {
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
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
        this.el = el;
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * @return {?}
     */
    checkNavigation() {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    checkDots() {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    }
    /**
     * @param {?} slide
     * @return {?}
     */
    getImg(slide) {
        return slide.el.nativeElement.querySelector('img').src;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.activeSlideIndex) {
            setTimeout(() => {
                this._select(this.activeSlideIndex);
                this.activeSlideChange.emit({ 'relatedTarget': this.activeSlide });
            }, 0);
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(() => {
                this._select(nextSlideIndex);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout(() => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }, 0);
        }
    }
    // Fixed problem while cannot swipe next / previous image while using HammerJS.
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            const direction = Direction.NEXT;
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
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            const direction = Direction.PREV;
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
    }
    /**
     * @protected
     * @param {?} goToIndex
     * @return {?}
     */
    fadeAnimation(goToIndex) {
        // const currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        const goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout(() => {
                    goToSlide.directionNext = false;
                    this.animationEnd = true;
                    this.activeSlide = goToIndex;
                    this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': this.activeSlide });
                    this.play();
                }, 99);
            }
        }
    }
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    slideAnimation(goToIndex, direction) {
        /** @type {?} */
        const currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        const goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout(() => {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                    }, 99);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout(() => {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                    }, 99);
                }
            }
            if (this.isBrowser) {
                setTimeout(() => {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    this.animationEnd = true;
                    this.activeSlide = goToIndex;
                    /** @type {?} */
                    let directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': this.activeSlide });
                    this.play();
                }, 100);
            }
        }
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
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
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex((slide) => slide.active);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        /** @type {?} */
        const currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        if (this.isBrowser) {
            /** @type {?} */
            const interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(() => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                        this.nextSlide();
                    }
                    else {
                        this.pause();
                    }
                }, interval);
            }
        }
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    }
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    classAdd(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            /** @type {?} */
            const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardControl(event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.el.nativeElement.focus();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n    <img  class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\">\n   </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n  <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
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
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.SWIPE_ACTION;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slides;
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
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.animationEnd;
    /** @type {?} */
    CarouselComponent.prototype.isBrowser;
    /**
     * If `true` — carousel will not cycle continuously and will have hard stops (prevent looping)
     * @type {?}
     */
    CarouselComponent.prototype.noWrap;
    /**
     * If `true` — will disable pausing on carousel mouse hover
     * @type {?}
     */
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
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentActiveSlide;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     * @type {?}
     */
    CarouselComponent.prototype.activeSlideChange;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFDSSxpQkFBaUIsRUFDakMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7OztJQUUxQixVQUFPLEVBQUUsT0FBSSxFQUFFLE9BQUk7Ozs7Ozs7OztBQVUzQyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBb0Y1QixZQUNFLE1BQXNCLEVBQ3RCLEVBQWMsRUFDTyxVQUFrQixFQUMvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQXZGbEMsaUJBQVksR0FBRyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQyxDQUFDO1FBRTlDLFlBQU8sR0FBK0IsSUFBSSxVQUFVLEVBQWtCLENBQUM7UUFPdkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixPQUFFLEdBQXFCLElBQUksQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUU5QixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBT0ssZUFBVSxHQUFHLElBQUksQ0FBQztRQUd2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxFQUFFLENB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TUwsTUFBTTswQkFHTixLQUFLO3VCQWtDTCxLQUFLO21CQXNQTCxZQUFZLFNBQUMsWUFBWTtvQkFVekIsWUFBWSxTQUFDLFlBQVk7OEJBcUl6QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQVloQyxZQUFZLFNBQUMsT0FBTzs7OztJQXRkckIseUNBQXdEOzs7OztJQUV4RCxvQ0FBaUY7Ozs7O0lBS2pGLDRDQUErQjs7Ozs7SUFDL0Isc0NBQTZCOzs7OztJQUM3QixzQ0FBNEI7Ozs7O0lBQzVCLCtCQUFzQzs7Ozs7SUFDdEMseUNBQThCOztJQUU5QixzQ0FBdUI7Ozs7O0lBR3ZCLG1DQUFnQzs7Ozs7SUFFaEMsb0NBQWlDOztJQUVqQyx1Q0FBOEM7O0lBQzlDLHFDQUFrQzs7SUFFbEMsa0NBQTBDOztJQUMxQyxpQ0FBd0M7O0lBQ3hDLHNDQUFrRDs7SUFDbEQsNkNBQWtDOzs7OztJQUdsQyxnREFBNEM7Ozs7O0lBRzVDLDhDQUFxRjs7Ozs7SUFjckYsc0NBQTRCOzs7OztJQXlDMUIsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtpc0JzM30gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tICcuLi91dGlscy9saW5rZWQtbGlzdC5jbGFzcyc7XG5pbXBvcnQge1NsaWRlQ29tcG9uZW50fSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Nhcm91c2VsQ29uZmlnfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24geyBVTktOT1dOLCBORVhULCBQUkVWIH1cblxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBTV0lQRV9BQ1RJT04gPSB7TEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCd9O1xuXG4gIHByb3RlY3RlZCBfc2xpZGVzOiBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PiA9IG5ldyBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PigpO1xuICBwdWJsaWMgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLnRvQXJyYXkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcbiAgcHJvdGVjdGVkIGlzUGxheWluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYgfCBhbnkgPSBudWxsO1xuICBwcm90ZWN0ZWQgYW5pbWF0aW9uRW5kID0gdHJ1ZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuXG4gIC8qKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHdpbGwgbm90IGN5Y2xlIGNvbnRpbnVvdXNseSBhbmQgd2lsbCBoYXZlIGhhcmQgc3RvcHMgKHByZXZlbnQgbG9vcGluZykgKi9cbiAgQElucHV0KCkgcHVibGljIG5vV3JhcDogYm9vbGVhbjtcbiAgLyoqICBJZiBgdHJ1ZWAg4oCUIHdpbGwgZGlzYWJsZSBwYXVzaW5nIG9uIGNhcm91c2VsIG1vdXNlIGhvdmVyICovXG4gIEBJbnB1dCgpIHB1YmxpYyBub1BhdXNlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnaXNDb250cm9scycpIHB1YmxpYyBpc0NvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xhc3MnKSBwdWJsaWMgY2xhc3M6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoJ3R5cGUnKSBwdWJsaWMgdHlwZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uJykgcHVibGljIGFuaW1hdGlvbjogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGFjdGl2ZVNsaWRlSW5kZXg6IG51bWJlcjtcblxuICAvLyBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZTogbnVtYmVyIHwgYW55O1xuXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xuICBAT3V0cHV0KCkgcHVibGljIGFjdGl2ZVNsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XG5cbiAgLyoqIEluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGUoc3RhcnRlZCBmb3IgMCkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBhY3RpdmVTbGlkZShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggJiYgaW5kZXggIT09IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkge1xuICAgICAgdGhpcy5fc2VsZWN0KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFjdGl2ZVNsaWRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaW50ZXJ2YWw6IG51bWJlcjtcblxuICBwdWJsaWMgY2hlY2tOYXZpZ2F0aW9uKCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdjYXJvdXNlbC1tdWx0aS1pdGVtJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0RvdHMoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Nhcm91c2VsLXRodW1ibmFpbHMnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0SW1nKHNsaWRlOiBhbnkpIHtcbiAgICByZXR1cm4gc2xpZGUuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XG4gIH1cblxuICAvKipcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBDYXJvdXNlbENvbmZpZyxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlIGFuZCBzdGFydHMgYXV0byBjaGFuZ2luZ1xuICAgKiBAcGFyYW0gc2xpZGVcbiAgICovXG4gIHB1YmxpYyBhZGRTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zbGlkZXMuYWRkKHNsaWRlKTtcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gdm9pZCAwO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlU2xpZGVJbmRleCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdCh0aGlzLmFjdGl2ZVNsaWRlSW5kZXgpO1xuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoeydyZWxhdGVkVGFyZ2V0JzogdGhpcy5hY3RpdmVTbGlkZX0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyIHNsaWRlXG4gICAqIEBwYXJhbSBzbGlkZVxuICAgKi9cbiAgcHVibGljIHJlbW92ZVNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gcmVtSW5kZXgpIHtcblxuICAgICAgLy8gcmVtb3Zpbmcgb2YgYWN0aXZlIHNsaWRlXG4gICAgICAvLyAgbGV0IG5leHRTbGlkZUluZGV4OiBudW1iZXIgPSB2b2lkIDA7XG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlciB8IGFueSA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBpZiB0aGlzIHNsaWRlIGxhc3QgLSB3aWxsIHJvbGwgdG8gZmlyc3Qgc2xpZGUsIGlmIG5vV3JhcCBmbGFnIGlzIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRVxuICAgICAgICAvLyBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluIG1pZGRsZSBvZiBjb2xsZWN0aW9uLCBpbmRleCBvZiBuZXh0IHNsaWRlIGlzIHNhbWUgdG8gcmVtb3ZlZFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdChyZW1JbmRleCkgPyByZW1JbmRleCA6XG4gICAgICAgICAgdGhpcy5ub1dyYXAgPyByZW1JbmRleCAtIDEgOiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XG5cbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3QobmV4dFNsaWRlSW5kZXgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gYWZ0ZXIgcmVtb3ZpbmcsIG5lZWQgdG8gYWN0dWFsaXplIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIHNsaWRlXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICAgIH0sIDApO1xuXG4gICAgfVxuICB9XG5cbiAgLy8gRml4ZWQgcHJvYmxlbSB3aGlsZSBjYW5ub3Qgc3dpcGUgbmV4dCAvIHByZXZpb3VzIGltYWdlIHdoaWxlIHVzaW5nIEhhbW1lckpTLlxuICBzd2lwZShhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgICB0aGlzLnByZXZpb3VzU2xpZGUoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XG4gICAgICB0aGlzLm5leHRTbGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsaW5nIHRvIG5leHQgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBwdWJsaWMgbmV4dFNsaWRlKGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb24gPT09ICdzbGlkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IERpcmVjdGlvbi5ORVhUO1xuICAgICAgdGhpcy5zbGlkZUFuaW1hdGlvbih0aGlzLmZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb24sIGZvcmNlKSwgZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gJ2ZhZGUnKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLmZhZGVBbmltYXRpb24odGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKSk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7J2RpcmVjdGlvbic6ICdOZXh0JywgJ3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gcHJldmlvdXMgc2xpZGVcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAqL1xuICBwdWJsaWMgcHJldmlvdXNTbGlkZShmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSAnc2xpZGUnKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBEaXJlY3Rpb24uUFJFVjtcbiAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24odGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uLCBmb3JjZSksIGRpcmVjdGlvbik7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09ICdmYWRlJykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5mYWRlQW5pbWF0aW9uKHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5QUkVWLCBmb3JjZSkpO1xuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5QUkVWLCBmb3JjZSk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoeydkaXJlY3Rpb24nOiAnUHJldicsICdyZWxhdGVkVGFyZ2V0JzogdGhpcy5hY3RpdmVTbGlkZX0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmYWRlQW5pbWF0aW9uKGdvVG9JbmRleDogbnVtYmVyKSB7XG4gICAgLy8gY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgIGNvbnN0IGdvVG9TbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoZ29Ub0luZGV4KTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkVuZCkge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBmYWxzZTtcblxuICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbk5leHQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSB0cnVlO1xuXG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGdvVG9JbmRleDtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoeydkaXJlY3Rpb24nOiAnTmV4dCcsICdyZWxhdGVkVGFyZ2V0JzogdGhpcy5hY3RpdmVTbGlkZX0pO1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9LCA5OSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNsaWRlQW5pbWF0aW9uKGdvVG9JbmRleDogbnVtYmVyLCBkaXJlY3Rpb246IGFueSkge1xuXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xuICAgIGNvbnN0IGdvVG9TbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoZ29Ub0luZGV4KTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkVuZCkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBmYWxzZTtcbiAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbk5leHQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5kaXJlY3Rpb25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB9LCA5OSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBmYWxzZTtcblxuICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uUHJldiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5kaXJlY3Rpb25SaWdodCA9IHRydWU7XG4gICAgICAgICAgfSwgOTkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvbkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBjdXJyZW50U2xpZGUuZGlyZWN0aW9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25SaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25QcmV2ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblByZXYgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBnb1RvSW5kZXg7XG5cbiAgICAgICAgICBsZXQgZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9ICdOZXh0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSAnUHJldic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsnZGlyZWN0aW9uJzogZGlyZWN0aW9uTmFtZSwgJ3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxpbmcgdG8gc3BlY2lmaWVkIHNsaWRlXG4gICAqIEBwYXJhbSBpbmRleDoge251bWJlcn0gaW5kZXggb2Ygc2xpZGUsIHdoaWNoIG11c3QgYmUgc2hvd25cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RTbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gJ3NsaWRlJykge1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmVTbGlkZSA8IGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24oaW5kZXgsIERpcmVjdGlvbi5ORVhUKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVTbGlkZSA+IGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24oaW5kZXgsIERpcmVjdGlvbi5QUkVWKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSAnZmFkZScpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5hY3RpdmVTbGlkZSkge1xuICAgICAgICB0aGlzLmZhZGVBbmltYXRpb24oaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIHBsYXkoKSB7XG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIHBhdXNlKCkge1xuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXMuZmluZEluZGV4KChzbGlkZTogU2xpZGVDb21wb25lbnQpID0+IHNsaWRlLmFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcywgd2hldGhlciB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxhc3QgaW4gY29sbGVjdGlvblxuICAgKi9cbiAgcHVibGljIGlzTGFzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluZGV4ICsgMSA+PSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgbmV4dCBzbGlkZSBpbmRleCwgZGVwZW5kaW5nIG9mIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gZGlyZWN0aW9uOiBEaXJlY3Rpb24oVU5LTk9XTnxQUkVWfE5FWFQpXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIFRSVUUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZywgZWxzZSB3aWxsIHJldHVybiB1bmRlZmluZWQgaWYgbmV4dCBzbGlkZSByZXF1aXJlIHdyYXBwaW5nXG5cbiAgICovXG4gIHByaXZhdGUgZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbjogRGlyZWN0aW9uLCBmb3JjZTogYm9vbGVhbik6IGFueSB7XG4gICAgbGV0IG5leHRTbGlkZUluZGV4ID0gMDtcblxuICAgIGlmICghZm9yY2UgJiYgKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmIGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlBSRVYgJiYgdGhpcy5ub1dyYXApKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERpcmVjdGlvbi5ORVhUOlxuICAgICAgICAvLyBpZiB0aGlzIGlzIGxhc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZCBhbmQgbmVlZCB0byBnb2luZyBmb3J3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICghdGhpcy5pc0xhc3QodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSkgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgKyAxIDpcbiAgICAgICAgICAoIWZvcmNlICYmIHRoaXMubm9XcmFwKSA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA6IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEaXJlY3Rpb24uUFJFVjpcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBmaXJzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkIGFuZCBuZWVkIHRvIGdvaW5nIGJhY2t3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPiAwKSA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSAtIDEgOlxuICAgICAgICAgICghZm9yY2UgJiYgdGhpcy5ub1dyYXApID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIDogdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGRpcmVjdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFNsaWRlSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHNsaWRlLCB3aGljaCBzcGVjaWZpZWQgdGhyb3VnaCBpbmRleCwgYXMgYWN0aXZlXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBfc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICBpZiAoY3VycmVudFNsaWRlKSB7XG4gICAgICBjdXJyZW50U2xpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xuICAgIGlmIChuZXh0U2xpZGUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGluZGV4O1xuICAgICAgbmV4dFNsaWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgICAvLyB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0VGltZXIoKTogYW55IHtcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XG4gICAgICBpZiAoIWlzTmFOKGludGVydmFsKSAmJiBpbnRlcnZhbCA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuSW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZyAmJiAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiYgbkludGVydmFsID4gMCAmJiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJykpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjbGFzc0FkZChlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByZXZpb3VzU2xpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbn1cbiJdfQ==