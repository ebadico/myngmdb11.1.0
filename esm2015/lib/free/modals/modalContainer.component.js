/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';
import { ClassName, DISMISS_REASONS, ModalOptions, TransitionDurations } from './modal.options';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { msConfig } from './modalService.config';
export class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
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
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this.config.keyboard &&
            this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.animated) {
            this._renderer.addClass(this._element.nativeElement, 'fade');
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
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
    }
    /**
     * @return {?}
     */
    updateContainerClass() {
        if (this.config.containerClass) {
            /** @type {?} */
            const containerClasses = this.config.containerClass;
            /** @type {?} */
            const classArr = containerClasses.split(' ');
            for (let i = 0; i < classArr.length; i++) {
                this._renderer.addClass(this._element.nativeElement, classArr[i]);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        setTimeout(() => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.mdbModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            this.mdbModalService.hide(this.level);
            this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-container',
                template: "<div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef },
    { type: Renderer2 }
];
ModalContainerComponent.propDecorators = {
    tabindex: [{ type: HostBinding, args: ['tabindex',] }],
    role: [{ type: HostBinding, args: ['role',] }],
    modal: [{ type: HostBinding, args: ['class.modal',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: HostListener, args: ['window:keydown.esc',] }]
};
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.modalClass;
    /** @type {?} */
    ModalContainerComponent.prototype.tabindex;
    /** @type {?} */
    ModalContainerComponent.prototype.role;
    /** @type {?} */
    ModalContainerComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype.mdbModalService;
    /** @type {?} */
    ModalContainerComponent.prototype.config;
    /** @type {?} */
    ModalContainerComponent.prototype.isShown;
    /** @type {?} */
    ModalContainerComponent.prototype.level;
    /** @type {?} */
    ModalContainerComponent.prototype.isAnimated;
    /**
     * @type {?}
     * @protected
     */
    ModalContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype.isModalHiding;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxDb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsQ29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLG1CQUFtQixFQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNakQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBcUNsQyxZQUNFLE9BQXFCLEVBQ3JCLFFBQW9CLEVBQ1osU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXZDOUIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNJLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1QsVUFBSyxHQUFHLElBQUksQ0FBQztRQUtsQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUE2QjVCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBL0JNLE9BQU8sQ0FBQyxLQUFVO1FBQ3ZCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFB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U0FBUzs7O3VCQWtCUixXQUFXLFNBQUMsVUFBVTttQkFDdEIsV0FBVyxTQUFDLE1BQU07b0JBQ2xCLFdBQVcsU0FBQyxhQUFhO3NCQVV6QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQVloQyxZQUFZLFNBQUMsb0JBQW9COzs7O0lBekJsQyw2Q0FBcUI7O0lBQ3JCLDJDQUF1Qzs7SUFDdkMsdUNBQXFDOztJQUNyQyx3Q0FBeUM7Ozs7O0lBRXpDLGtEQUE2Qjs7SUFFN0IseUNBQTRCOztJQUM1QiwwQ0FBdUI7O0lBQ3ZCLHdDQUFxQjs7SUFDckIsNkNBQTJCOzs7OztJQUMzQiwyQ0FBK0I7Ozs7O0lBQy9CLGdEQUE4Qjs7Ozs7SUEyQjVCLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENsYXNzTmFtZSxcbiAgRElTTUlTU19SRUFTT05TLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRyYW5zaXRpb25EdXJhdGlvbnNcbn0gZnJvbSAnLi9tb2RhbC5vcHRpb25zJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuaW1wb3J0IHsgbXNDb25maWcgfSBmcm9tICcuL21vZGFsU2VydmljZS5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbENvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG1vZGFsQ2xhc3MgPSAnbW9kYWwnO1xuICBASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiaW5kZXggPSAtMTtcbiAgQEhvc3RCaW5kaW5nKCdyb2xlJykgcm9sZSA9ICdkaWFsb2cnO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vZGFsJykgbW9kYWwgPSB0cnVlO1xuXG4gIHByaXZhdGUgbWRiTW9kYWxTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zO1xuICBwdWJsaWMgaXNTaG93biA9IGZhbHNlO1xuICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiAgcHVibGljIGlzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpc01vZGFsSGlkaW5nID0gZmFsc2U7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmlnbm9yZUJhY2tkcm9wQ2xpY2sgfHxcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tZGJNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuQkFDS1JET1ApO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzYycpXG4gIHB1YmxpYyBvbkVzYygpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5rZXlib2FyZCAmJlxuICAgICAgdGhpcy5sZXZlbCA9PT0gdGhpcy5tZGJNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKVxuICAgICkge1xuICAgICAgdGhpcy5tZGJNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zOiBNb2RhbE9wdGlvbnMsXG4gICAgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLm1kYk1vZGFsU2VydmljZSA9IG1zQ29uZmlnLnNlcnZpY2VJbnN0YW5jZTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdmYWRlJyk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgaXNCczMoKSA/IENsYXNzTmFtZS5JTiA6IENsYXNzTmFtZS5TSE9XXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpcy5pc0FuaW1hdGVkID8gVHJhbnNpdGlvbkR1cmF0aW9ucy5CQUNLRFJPUCA6IDBcbiAgICApO1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAodGhpcy5tZGJNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xuICAgICAgICB0aGlzLm1kYk1vZGFsU2VydmljZS5jaGVja1Njcm9sbGJhcigpO1xuICAgICAgICB0aGlzLm1kYk1vZGFsU2VydmljZS5zZXRTY3JvbGxiYXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENsYXNzTmFtZS5PUEVOKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29udGFpbmVyQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuc2Nyb2xsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250YWluZXJDbGFzcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSB0aGlzLmNvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICAgIGNvbnN0IGNsYXNzQXJyID0gY29udGFpbmVyQ2xhc3Nlcy5zcGxpdCgnICcpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NBcnJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpc0JzMygpID8gQ2xhc3NOYW1lLklOIDogQ2xhc3NOYW1lLlNIT1dcbiAgICApO1xuXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudCAmJlxuICAgICAgICAgIGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICB0aGlzLm1kYk1vZGFsU2VydmljZS5nZXRNb2RhbHNDb3VudCgpID09PSAxXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1kYk1vZGFsU2VydmljZS5oaWRlKHRoaXMubGV2ZWwpO1xuICAgICAgICB0aGlzLmlzTW9kYWxIaWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmlzQW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLk1PREFMIDogMFxuICAgICk7XG4gIH1cbn1cbiJdfQ==