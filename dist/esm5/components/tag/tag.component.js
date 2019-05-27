/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, ElementRef, HostListener, HostBinding, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { TagRipple } from '../tag/tag-ripple.component';
// mocking navigator
/** @type {?} */
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
/** @type {?} */
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * \@name disabled
         */
        this.disabled = false;
        /**
         * \@name onSelect
         */
        this.onSelect = new EventEmitter();
        /**
         * \@name onRemove
         */
        this.onRemove = new EventEmitter();
        /**
         * \@name onBlur
         */
        this.onBlur = new EventEmitter();
        /**
         * \@name onKeyDown
         */
        this.onKeyDown = new EventEmitter();
        /**
         * \@name onTagEdited
         */
        this.onTagEdited = new EventEmitter();
        /**
         * \@name editing
         */
        this.editing = false;
        /**
         * \@name rippleState
         */
        this.rippleState = "none";
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        /**
         * @name readonly {boolean}
         */
        get: /**
         * \@name readonly {boolean}
         * @return {?}
         */
        function () {
            return typeof this.model !== "string" && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name select
     */
    /**
     * \@name select
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.select = /**
     * \@name select
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    /**
     * @name remove
     */
    /**
     * \@name remove
     * @param {?} $event
     * @return {?}
     */
    TagComponent.prototype.remove = /**
     * \@name remove
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    /**
     * @name focus
     */
    /**
     * \@name focus
     * @return {?}
     */
    TagComponent.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.move = /**
     * @return {?}
     */
    function () {
        this.moving = true;
    };
    /**
     * @name keydown
     * @param event
     */
    /**
     * \@name keydown
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.keydown = /**
     * \@name keydown
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event: event, model: this.model });
        }
    };
    /**
     * @name blink
     */
    /**
     * \@name blink
     * @return {?}
     */
    TagComponent.prototype.blink = /**
     * \@name blink
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(function () { return classList.remove("blink"); }, 50);
    };
    /**
     * @name toggleEditMode
     */
    /**
     * \@name toggleEditMode
     * @return {?}
     */
    TagComponent.prototype.toggleEditMode = /**
     * \@name toggleEditMode
     * @return {?}
     */
    function () {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    };
    /**
     * @name onBlurred
     * @param event
     */
    /**
     * \@name onBlurred
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.onBlurred = /**
     * \@name onBlurred
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a;
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        /** @type {?} */
        var value = event.target.innerText;
        /** @type {?} */
        var result = typeof this.model === "string"
            ? value
            : tslib_1.__assign({}, this.model, (_a = {}, _a[this.displayBy] = value, _a));
        this.onBlur.emit(result);
    };
    /**
     * @name getDisplayValue
     * @param item
     */
    /**
     * \@name getDisplayValue
     * @param {?} item
     * @return {?}
     */
    TagComponent.prototype.getDisplayValue = /**
     * \@name getDisplayValue
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return typeof item === "string" ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */
        get: /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * \@name isRippleVisible
         * @return {?}
         */
        function () {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name disableEditMode
     * @param $event
     */
    /**
     * \@name disableEditMode
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.disableEditMode = /**
     * \@name disableEditMode
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var classList = this.element.nativeElement.classList;
        /** @type {?} */
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove("tag--editing");
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    /**
     * @name isDeleteIconVisible
     */
    /**
     * \@name isDeleteIconVisible
     * @return {?}
     */
    TagComponent.prototype.isDeleteIconVisible = /**
     * \@name isDeleteIconVisible
     * @return {?}
     */
    function () {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    };
    /**
     * @name getContentEditableText
     */
    /**
     * \@name getContentEditableText
     * @return {?}
     */
    TagComponent.prototype.getContentEditableText = /**
     * \@name getContentEditableText
     * @return {?}
     */
    function () {
        /** @type {?} */
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
    };
    /**
     * @name setContentEditableText
     * @param model
     */
    /**
     * \@name setContentEditableText
     * @param {?} model
     * @return {?}
     */
    TagComponent.prototype.setContentEditableText = /**
     * \@name setContentEditableText
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var input = this.getContentEditable();
        /** @type {?} */
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    /**
     * @name
     */
    /**
     * \@name
     * @return {?}
     */
    TagComponent.prototype.activateEditMode = /**
     * \@name
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    /**
     * @name storeNewValue
     * @param input
     */
    /**
     * \@name storeNewValue
     * @param {?} input
     * @return {?}
     */
    TagComponent.prototype.storeNewValue = /**
     * \@name storeNewValue
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        var _a;
        /** @type {?} */
        var exists = function (tag) {
            return typeof tag === 'string'
                ? tag === input
                : tag[_this.displayBy] === input;
        };
        /** @type {?} */
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        /** @type {?} */
        var model = typeof this.model === 'string'
            ? input
            : (_a = {
                    index: this.index
                },
                _a[this.identifyBy] = hasId()
                    ? this.model[this.identifyBy]
                    : input,
                _a[this.displayBy] = input,
                _a);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    };
    /**
     * @name getContentEditable
     */
    /**
     * \@name getContentEditable
     * @return {?}
     */
    TagComponent.prototype.getContentEditable = /**
     * \@name getContentEditable
     * @return {?}
     */
    function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: "tag",
                    template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                    styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    TagComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TagComponent.propDecorators = {
        model: [{ type: Input }],
        removable: [{ type: Input }],
        editable: [{ type: Input }],
        template: [{ type: Input }],
        displayBy: [{ type: Input }],
        identifyBy: [{ type: Input }],
        index: [{ type: Input }],
        hasRipple: [{ type: Input }],
        disabled: [{ type: Input }],
        canAddTag: [{ type: Input }],
        onSelect: [{ type: Output }],
        onRemove: [{ type: Output }],
        onBlur: [{ type: Output }],
        onKeyDown: [{ type: Output }],
        onTagEdited: [{ type: Output }],
        moving: [{ type: HostBinding, args: ["class.moving",] }],
        ripple: [{ type: ViewChild, args: [TagRipple,] }],
        keydown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return TagComponent;
}());
export { TagComponent };
if (false) {
    /**
     * \@name model {TagModel}
     * @type {?}
     */
    TagComponent.prototype.model;
    /**
     * \@name removable {boolean}
     * @type {?}
     */
    TagComponent.prototype.removable;
    /**
     * \@name editable {boolean}
     * @type {?}
     */
    TagComponent.prototype.editable;
    /**
     * \@name template {TemplateRef<any>}
     * @type {?}
     */
    TagComponent.prototype.template;
    /**
     * \@name displayBy {string}
     * @type {?}
     */
    TagComponent.prototype.displayBy;
    /**
     * \@name identifyBy {string}
     * @type {?}
     */
    TagComponent.prototype.identifyBy;
    /**
     * \@name index {number}
     * @type {?}
     */
    TagComponent.prototype.index;
    /**
     * \@name hasRipple
     * @type {?}
     */
    TagComponent.prototype.hasRipple;
    /**
     * \@name disabled
     * @type {?}
     */
    TagComponent.prototype.disabled;
    /**
     * \@name canAddTag
     * @type {?}
     */
    TagComponent.prototype.canAddTag;
    /**
     * \@name onSelect
     * @type {?}
     */
    TagComponent.prototype.onSelect;
    /**
     * \@name onRemove
     * @type {?}
     */
    TagComponent.prototype.onRemove;
    /**
     * \@name onBlur
     * @type {?}
     */
    TagComponent.prototype.onBlur;
    /**
     * \@name onKeyDown
     * @type {?}
     */
    TagComponent.prototype.onKeyDown;
    /**
     * \@name onTagEdited
     * @type {?}
     */
    TagComponent.prototype.onTagEdited;
    /**
     * \@name editing
     * @type {?}
     */
    TagComponent.prototype.editing;
    /**
     * \@name moving
     * @type {?}
     */
    TagComponent.prototype.moving;
    /**
     * \@name rippleState
     * @type {?}
     */
    TagComponent.prototype.rippleState;
    /**
     * \@name ripple {TagRipple}
     * @type {?}
     */
    TagComponent.prototype.ripple;
    /** @type {?} */
    TagComponent.prototype.element;
    /** @type {?} */
    TagComponent.prototype.renderer;
    /** @type {?} */
    TagComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztJQUlsRCxTQUFTLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRSxTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsWUFBWTtDQUN2Qjs7SUFFSyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBRTFGO0lBNkhJLHNCQUNXLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ2xCLEtBQXdCO1FBRnpCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFtQjs7OztRQXRFN0IsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQVlqQixhQUFRLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7Ozs7UUFNaEUsYUFBUSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDOzs7O1FBTWhFLFdBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQzs7OztRQU05RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFNdkQsZ0JBQVcsR0FBMkIs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QUs7NEJBTUwsS0FBSzsyQkFNTCxLQUFLOzJCQU1MLEtBQUs7NEJBTUwsS0FBSzs2QkFNTCxLQUFLO3dCQU1MLEtBQUs7NEJBTUwsS0FBSzsyQkFNTCxLQUFLOzRCQU1MLEtBQUs7MkJBTUwsTUFBTTsyQkFNTixNQUFNO3lCQU1OLE1BQU07NEJBTU4sTUFBTTs4QkFNTixNQUFNO3lCQWtCTixXQUFXLFNBQUMsY0FBYzt5QkFXMUIsU0FBUyxTQUFDLFNBQVM7MEJBaURuQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWdMdkMsbUJBQUM7Q0FBQSxBQTNWRCxJQTJWQztTQXRWWSxZQUFZOzs7Ozs7SUFJckIsNkJBQ3VCOzs7OztJQUt2QixpQ0FDMEI7Ozs7O0lBSzFCLGdDQUN5Qjs7Ozs7SUFLekIsZ0NBQ2tDOzs7OztJQUtsQyxpQ0FDeUI7Ozs7O0lBS3pCLGtDQUMwQjs7Ozs7SUFLMUIsNkJBQ3FCOzs7OztJQUtyQixpQ0FDMEI7Ozs7O0lBSzFCLGdDQUN3Qjs7Ozs7SUFLeEIsaUNBQzZDOzs7OztJQUs3QyxnQ0FDdUU7Ozs7O0lBS3ZFLGdDQUN1RTs7Ozs7SUFLdkUsOEJBQ3FFOzs7OztJQUtyRSxpQ0FDOEQ7Ozs7O0lBSzlELG1DQUMwRTs7Ozs7SUFZMUUsK0JBQXVCOzs7OztJQUt2Qiw4QkFDdUI7Ozs7O0lBS3ZCLG1DQUE0Qjs7Ozs7SUFLNUIsOEJBQ3lCOztJQUdyQiwrQkFBMEI7O0lBQzFCLGdDQUEwQjs7SUFDMUIsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYWNjZXNzb3InO1xuaW1wb3J0IHsgVGFnUmlwcGxlIH0gZnJvbSAnLi4vdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50TGlrZSB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVycy9ldmVudC1saWtlJztcblxuLy8gbW9ja2luZyBuYXZpZ2F0b3JcbmNvbnN0IG5hdmlnYXRvciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5hdmlnYXRvciA6IHtcbiAgICB1c2VyQWdlbnQ6ICdDaHJvbWUnLFxuICAgIHZlbmRvcjogJ0dvb2dsZSBJbmMnXG59O1xuXG5jb25zdCBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRhZ1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFnLnRlbXBsYXRlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdGFnLWNvbXBvbmVudC5zdHlsZS5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgbW9kZWwge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGVsOiBUYWdNb2RlbDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZW1vdmFibGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlZGl0YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRlbXBsYXRlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWRlbnRpZnlCeTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5kZXgge251bWJlcn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzUmlwcGxlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzUmlwcGxlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FuQWRkVGFnXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuQWRkVGFnOiAodGFnOiBUYWdNb2RlbCkgPT4gYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU2VsZWN0XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQmx1clxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkJsdXI6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlEb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRWRpdGVkXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVGFnRWRpdGVkOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlYWRvbmx5IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tb2RlbCAhPT0gXCJzdHJpbmdcIiAmJiB0aGlzLm1vZGVsLnJlYWRvbmx5ID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGVkaXRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZWRpdGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbW92aW5nXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubW92aW5nXCIpXG4gICAgcHVibGljIG1vdmluZzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJpcHBsZVN0YXRlXG4gICAgICovXG4gICAgcHVibGljIHJpcHBsZVN0YXRlID0gXCJub25lXCI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByaXBwbGUge1RhZ1JpcHBsZX1cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFRhZ1JpcHBsZSlcbiAgICBwdWJsaWMgcmlwcGxlOiBUYWdSaXBwbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMubW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2V5ZG93blxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMga2V5ZG93bihldmVudDogRXZlbnRMaWtlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFZGl0TW9kZShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bi5lbWl0KHsgZXZlbnQsIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYmxpbmtcbiAgICAgKi9cbiAgICBwdWJsaWMgYmxpbmsoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChcImJsaW5rXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2xhc3NMaXN0LnJlbW92ZShcImJsaW5rXCIpLCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlRWRpdE1vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlRWRpdE1vZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0aW5nID8gdW5kZWZpbmVkIDogdGhpcy5hY3RpdmF0ZUVkaXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJyZWRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVycmVkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2tzIGlmIGl0IGlzIGVkaXRhYmxlIGZpcnN0IGJlZm9yZSBoYW5kZWxpbmcgdGhlIG9uQmx1cnJlZCBldmVudCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgICAgIC8vIGEgYnVnIGluIElFIHdoZXJlIHRhZ3MgYXJlIHN0aWxsIGVkaXRhYmxlIHdpdGggb25seUZyb21BdXRvY29tcGxldGUgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc2FibGVFZGl0TW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMubW9kZWwgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgOiB7IC4uLnRoaXMubW9kZWwsIFt0aGlzLmRpc3BsYXlCeV06IHZhbHVlIH07XG5cbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldERpc3BsYXlWYWx1ZVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldERpc3BsYXlWYWx1ZShpdGVtOiBUYWdNb2RlbCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIiA/IGl0ZW0gOiBpdGVtW3RoaXMuZGlzcGxheUJ5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyByZXR1cm5zIHdoZXRoZXIgdGhlIHJpcHBsZSBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAqIG9ubHkgd29ya3MgaW4gQ2hyb21lXG4gICAgICogQG5hbWUgaXNSaXBwbGVWaXNpYmxlXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1JpcHBsZVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5lZGl0aW5nICYmIGlzQ2hyb21lICYmIHRoaXMuaGFzUmlwcGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc2FibGVFZGl0TW9kZVxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZUVkaXRNb2RlKCRldmVudD86IEV2ZW50TGlrZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDb250ZW50RWRpdGFibGVUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoXCJ0YWctLWVkaXRpbmdcIik7XG5cbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWRpdGFibGVUZXh0KHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yZU5ld1ZhbHVlKGlucHV0KTtcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgaWYgKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0RlbGV0ZUljb25WaXNpYmxlXG4gICAgICovXG4gICAgcHVibGljIGlzRGVsZXRlSWNvblZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnJlbW92YWJsZSAmJiAhdGhpcy5lZGl0aW5nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0Q29udGVudEVkaXRhYmxlVGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29udGVudEVkaXRhYmxlVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q29udGVudEVkaXRhYmxlKCk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0ID8gaW5wdXQuaW5uZXJUZXh0LnRyaW0oKSA6IFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0Q29udGVudEVkaXRhYmxlVGV4dFxuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0Q29udGVudEVkaXRhYmxlVGV4dChtb2RlbDogVGFnTW9kZWwpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldENvbnRlbnRFZGl0YWJsZSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKG1vZGVsKTtcblxuICAgICAgICBpbnB1dC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZVxuICAgICAqL1xuICAgIHByaXZhdGUgYWN0aXZhdGVFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCd0YWctLWVkaXRpbmcnKTtcblxuICAgICAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0b3JlTmV3VmFsdWVcbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0b3JlTmV3VmFsdWUoaW5wdXQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBleGlzdHMgPSAodGFnOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyB0YWcgPT09IGlucHV0XG4gICAgICAgICAgICAgICAgOiB0YWdbdGhpcy5kaXNwbGF5QnldID09PSBpbnB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYXNJZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsW3RoaXMuaWRlbnRpZnlCeV0gIT09IHRoaXMubW9kZWxbdGhpcy5kaXNwbGF5QnldO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLCByZXBsYWNlIHRoZSB2YWx1ZSBpbiB0aGUgbW9kZWxcbiAgICAgICAgaWYgKGV4aXN0cyh0aGlzLm1vZGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kZWwgPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMubW9kZWwgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBpbnB1dFxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBoYXNJZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5tb2RlbFt0aGlzLmlkZW50aWZ5QnldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaW5wdXRcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuQWRkVGFnKG1vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5vblRhZ0VkaXRlZC5lbWl0KHsgdGFnOiBtb2RlbCwgaW5kZXg6IHRoaXMuaW5kZXggfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFZGl0YWJsZVRleHQodGhpcy5tb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250ZW50RWRpdGFibGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENvbnRlbnRFZGl0YWJsZSgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjb250ZW50ZWRpdGFibGVdJyk7XG4gICAgfVxufVxuIl19