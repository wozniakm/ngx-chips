/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        /**
         * \@name onSubmit
         */
        this.onSubmit = new EventEmitter();
        /**
         * \@name onBlur
         */
        this.onBlur = new EventEmitter();
        /**
         * \@name onFocus
         */
        this.onFocus = new EventEmitter();
        /**
         * \@name onKeyup
         */
        this.onKeyup = new EventEmitter();
        /**
         * \@name onKeydown
         */
        this.onKeydown = new EventEmitter();
        /**
         * \@name inputTextChange
         */
        this.inputTextChange = new EventEmitter();
        /**
         * \@name validators
         */
        this.validators = [];
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * \@name disabled
         */
        this.disabled = false;
        this.item = new FormControl({ value: '', disabled: this.disabled });
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: /**
         * \@name inputText
         * @return {?}
         */
        function () {
            return this.item.value;
        },
        /**
         * @name inputText
         * @param text {string}
         */
        set: /**
         * \@name inputText
         * @param {?} text {string}
         * @return {?}
         */
        function (text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TagInputForm.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new FormGroup({
            item: this.item
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TagInputForm.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        /**
         * @name value
         */
        get: /**
         * \@name value
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.form.get('item')));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name isInputFocused
     */
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputForm.prototype.isInputFocused = /**
     * \@name isInputFocused
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    };
    /**
     * @name getErrorMessages
     * @param messages
     */
    /**
     * \@name getErrorMessages
     * @param {?} messages
     * @return {?}
     */
    TagInputForm.prototype.getErrorMessages = /**
     * \@name getErrorMessages
     * @param {?} messages
     * @return {?}
     */
    function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    /**
     * @name hasErrors
     */
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputForm.prototype.hasErrors = /**
     * \@name hasErrors
     * @return {?}
     */
    function () {
        var _a = this.form, dirty = _a.dirty, value = _a.value, valid = _a.valid;
        return dirty && value.item && !valid;
    };
    /**
     * @name focus
     */
    /**
     * \@name focus
     * @return {?}
     */
    TagInputForm.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.input.nativeElement.focus();
    };
    /**
     * @name blur
     */
    /**
     * \@name blur
     * @return {?}
     */
    TagInputForm.prototype.blur = /**
     * \@name blur
     * @return {?}
     */
    function () {
        this.input.nativeElement.blur();
    };
    /**
     * @name getElementPosition
     */
    /**
     * \@name getElementPosition
     * @return {?}
     */
    TagInputForm.prototype.getElementPosition = /**
     * \@name getElementPosition
     * @return {?}
     */
    function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    /**
     * - removes input from the component
     * @name destroy
     */
    /**
     * - removes input from the component
     * \@name destroy
     * @return {?}
     */
    TagInputForm.prototype.destroy = /**
     * - removes input from the component
     * \@name destroy
     * @return {?}
     */
    function () {
        /** @type {?} */
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    /**
     * @name onKeyDown
     * @param $event
     */
    /**
     * \@name onKeyDown
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.onKeyDown = /**
     * \@name onKeyDown
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
            this.inputText = '';
        }
        return this.onKeydown.emit($event);
    };
    /**
     * @name onKeyUp
     * @param $event
     */
    /**
     * \@name onKeyUp
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.onKeyUp = /**
     * \@name onKeyUp
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    };
    /**
     * @name submit
     */
    /**
     * \@name submit
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.submit = /**
     * \@name submit
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    TagInputForm.decorators = [
        { type: Component, args: [{
                    selector: 'tag-input-form',
                    template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
                    styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
                }] }
    ];
    TagInputForm.propDecorators = {
        onSubmit: [{ type: Output }],
        onBlur: [{ type: Output }],
        onFocus: [{ type: Output }],
        onKeyup: [{ type: Output }],
        onKeydown: [{ type: Output }],
        inputTextChange: [{ type: Output }],
        placeholder: [{ type: Input }],
        validators: [{ type: Input }],
        asyncValidators: [{ type: Input }],
        inputId: [{ type: Input }],
        inputClass: [{ type: Input }],
        tabindex: [{ type: Input }],
        disabled: [{ type: Input }],
        input: [{ type: ViewChild, args: ['input',] }],
        inputText: [{ type: Input }]
    };
    return TagInputForm;
}());
export { TagInputForm };
if (false) {
    /**
     * \@name onSubmit
     * @type {?}
     */
    TagInputForm.prototype.onSubmit;
    /**
     * \@name onBlur
     * @type {?}
     */
    TagInputForm.prototype.onBlur;
    /**
     * \@name onFocus
     * @type {?}
     */
    TagInputForm.prototype.onFocus;
    /**
     * \@name onKeyup
     * @type {?}
     */
    TagInputForm.prototype.onKeyup;
    /**
     * \@name onKeydown
     * @type {?}
     */
    TagInputForm.prototype.onKeydown;
    /**
     * \@name inputTextChange
     * @type {?}
     */
    TagInputForm.prototype.inputTextChange;
    /**
     * \@name placeholder
     * @type {?}
     */
    TagInputForm.prototype.placeholder;
    /**
     * \@name validators
     * @type {?}
     */
    TagInputForm.prototype.validators;
    /**
     * \@name asyncValidators
     * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
     * @type {?}
     */
    TagInputForm.prototype.asyncValidators;
    /**
     * \@name inputId
     * @type {?}
     */
    TagInputForm.prototype.inputId;
    /**
     * \@name inputClass
     * @type {?}
     */
    TagInputForm.prototype.inputClass;
    /**
     * \@name tabindex
     * @desc pass through the specified tabindex to the input
     * @type {?}
     */
    TagInputForm.prototype.tabindex;
    /**
     * \@name disabled
     * @type {?}
     */
    TagInputForm.prototype.disabled;
    /**
     * \@name input
     * @type {?}
     */
    TagInputForm.prototype.input;
    /**
     * \@name form
     * @type {?}
     */
    TagInputForm.prototype.form;
    /** @type {?} */
    TagInputForm.prototype.item;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoaXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFckY7SUFBQTs7OztRQVNxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFLakQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBSy9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUtoRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFLaEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBS2xELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFZNUQsZUFBVSxHQUFrQixFQUFFLENBQUM7Ozs7O1FBTS9CLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQzs7Ozs7UUFnQnpDLGFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7UUFLZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBOEJoQixTQUFJLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFxSC9GLENBQUM7SUFwSUcsc0JBQ1csbUNBQVM7UUFKcEI7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUM7UUFFRDs7O1dBR0c7Ozs7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T04sS0FBSzs2QkFLTCxLQUFLO2tDQU1MLEtBQUs7MEJBS0wsS0FBSzs2QkFLTCxLQUFLOzJCQU1MLEtBQUs7MkJBS0wsS0FBSzt3QkFLTCxTQUFTLFNBQUMsT0FBTzs0QkFVakIsS0FBSzs7SUFvSVYsbUJBQUM7Q0FBQSxBQTVORCxJQTROQztTQXZOWSxZQUFZOzs7Ozs7SUFJckIsZ0NBQWtFOzs7OztJQUtsRSw4QkFBZ0U7Ozs7O0lBS2hFLCtCQUFpRTs7Ozs7SUFLakUsK0JBQWlFOzs7OztJQUtqRSxpQ0FBbUU7Ozs7O0lBS25FLHVDQUE0RTs7Ozs7SUFPNUUsbUNBQW9DOzs7OztJQUtwQyxrQ0FBK0M7Ozs7OztJQU0vQyx1Q0FBeUQ7Ozs7O0lBS3pELCtCQUFnQzs7Ozs7SUFLaEMsa0NBQW1DOzs7Ozs7SUFNbkMsZ0NBQThCOzs7OztJQUs5QixnQ0FBaUM7Ozs7O0lBS2pDLDZCQUFpQzs7Ozs7SUFLakMsNEJBQXVCOztJQW9CdkIsNEJBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLWlucHV0LWZvcm0nLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LWZvcm0udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRGb3JtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU3VibWl0XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5dXBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uS2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlkb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbktleWRvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gaW5wdXRzXG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsaWRhdG9yc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0SWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRDbGFzc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWJpbmRleFxuICAgICAqIEBkZXNjIHBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIHRhYmluZGV4IHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBwdWJsaWMgaW5wdXQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtXG4gICAgICovXG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5wdXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0uc2V0VmFsdWUodGV4dCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJycsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkfSk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtLnNldFZhbGlkYXRvcnModGhpcy52YWxpZGF0b3JzKTtcbiAgICAgICAgdGhpcy5pdGVtLnNldEFzeW5jVmFsaWRhdG9ycyh0aGlzLmFzeW5jVmFsaWRhdG9ycyk7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgZm9ybVxuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkICYmICFjaGFuZ2VzLmRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2l0ZW0nXS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snaXRlbSddLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2l0ZW0nKSBhcyBGb3JtQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0lucHV0Rm9jdXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0lucHV0Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZG9jID8gZG9jLmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEVycm9yTWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXJyb3JNZXNzYWdlcyhtZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lc3NhZ2VzKVxuICAgICAgICAgICAgLmZpbHRlcihlcnIgPT4gdGhpcy52YWx1ZS5oYXNFcnJvcihlcnIpKVxuICAgICAgICAgICAgLm1hcChlcnIgPT4gbWVzc2FnZXNbZXJyXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzRXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qge2RpcnR5LCB2YWx1ZSwgdmFsaWR9ID0gdGhpcy5mb3JtO1xuICAgICAgICByZXR1cm4gZGlydHkgJiYgdmFsdWUuaXRlbSAmJiAhdmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRFbGVtZW50UG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RWxlbWVudFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gcmVtb3ZlcyBpbnB1dCBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgKiBAbmFtZSBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleURvd25cbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5RG93bigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSB0aGlzLnZhbHVlLnZhbHVlO1xuICAgICAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vbktleWRvd24uZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5VXBcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5VXAoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub25LZXl1cC5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3VibWl0XG4gICAgICovXG4gICAgcHVibGljIHN1Ym1pdCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=