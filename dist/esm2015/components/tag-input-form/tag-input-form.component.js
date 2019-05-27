/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export class TagInputForm {
    constructor() {
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
    /**
     * \@name inputText
     * @return {?}
     */
    get inputText() {
        return this.item.value;
    }
    /**
     * \@name inputText
     * @param {?} text {string}
     * @return {?}
     */
    set inputText(text) {
        this.item.setValue(text);
        this.inputTextChange.emit(text);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new FormGroup({
            item: this.item
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    }
    /**
     * \@name value
     * @return {?}
     */
    get value() {
        return (/** @type {?} */ (this.form.get('item')));
    }
    /**
     * \@name isInputFocused
     * @return {?}
     */
    isInputFocused() {
        /** @type {?} */
        const doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    }
    /**
     * \@name getErrorMessages
     * @param {?} messages
     * @return {?}
     */
    getErrorMessages(messages) {
        return Object.keys(messages)
            .filter(err => this.value.hasError(err))
            .map(err => messages[err]);
    }
    /**
     * \@name hasErrors
     * @return {?}
     */
    hasErrors() {
        const { dirty, value, valid } = this.form;
        return dirty && value.item && !valid;
    }
    /**
     * \@name focus
     * @return {?}
     */
    focus() {
        this.input.nativeElement.focus();
    }
    /**
     * \@name blur
     * @return {?}
     */
    blur() {
        this.input.nativeElement.blur();
    }
    /**
     * \@name getElementPosition
     * @return {?}
     */
    getElementPosition() {
        return this.input.nativeElement.getBoundingClientRect();
    }
    /**
     * - removes input from the component
     * \@name destroy
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    }
    /**
     * \@name onKeyDown
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
            this.inputText = '';
        }
        return this.onKeydown.emit($event);
    }
    /**
     * \@name onKeyUp
     * @param {?} $event
     * @return {?}
     */
    onKeyUp($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    }
    /**
     * \@name submit
     * @param {?} $event
     * @return {?}
     */
    submit($event) {
        $event.preventDefault();
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoaXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFPckYsTUFBTSxPQUFPLFlBQVk7SUFMekI7Ozs7UUFTcUIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBS2pELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUsvQyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFLaEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBS2hELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUtsRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBWTVELGVBQVUsR0FBa0IsRUFBRSxDQUFDOzs7OztRQU0vQixvQkFBZSxHQUF1QixFQUFFLENBQUM7Ozs7O1FBZ0J6QyxhQUFRLEdBQUcsRUFBRSxDQUFDOzs7O1FBS2QsYUFBUSxHQUFHLEtBQUssQ0FBQztRQThCaEIsU0FBSSxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBcUgvRixDQUFDOzs7OztJQXBJRyxJQUNXLFNBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFNRCxJQUFXLFNB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QW1DOzs7Ozs7SUFNbkMsZ0NBQThCOzs7OztJQUs5QixnQ0FBaUM7Ozs7O0lBS2pDLDZCQUFpQzs7Ozs7SUFLakMsNEJBQXVCOztJQW9CdkIsNEJBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLWlucHV0LWZvcm0nLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LWZvcm0udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRGb3JtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU3VibWl0XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5dXBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uS2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlkb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbktleWRvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gaW5wdXRzXG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsaWRhdG9yc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0SWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRDbGFzc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWJpbmRleFxuICAgICAqIEBkZXNjIHBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIHRhYmluZGV4IHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBwdWJsaWMgaW5wdXQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtXG4gICAgICovXG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5wdXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0uc2V0VmFsdWUodGV4dCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJycsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkfSk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtLnNldFZhbGlkYXRvcnModGhpcy52YWxpZGF0b3JzKTtcbiAgICAgICAgdGhpcy5pdGVtLnNldEFzeW5jVmFsaWRhdG9ycyh0aGlzLmFzeW5jVmFsaWRhdG9ycyk7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgZm9ybVxuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkICYmICFjaGFuZ2VzLmRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2l0ZW0nXS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snaXRlbSddLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2l0ZW0nKSBhcyBGb3JtQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0lucHV0Rm9jdXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0lucHV0Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZG9jID8gZG9jLmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEVycm9yTWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXJyb3JNZXNzYWdlcyhtZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lc3NhZ2VzKVxuICAgICAgICAgICAgLmZpbHRlcihlcnIgPT4gdGhpcy52YWx1ZS5oYXNFcnJvcihlcnIpKVxuICAgICAgICAgICAgLm1hcChlcnIgPT4gbWVzc2FnZXNbZXJyXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzRXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qge2RpcnR5LCB2YWx1ZSwgdmFsaWR9ID0gdGhpcy5mb3JtO1xuICAgICAgICByZXR1cm4gZGlydHkgJiYgdmFsdWUuaXRlbSAmJiAhdmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRFbGVtZW50UG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RWxlbWVudFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gcmVtb3ZlcyBpbnB1dCBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgKiBAbmFtZSBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleURvd25cbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5RG93bigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSB0aGlzLnZhbHVlLnZhbHVlO1xuICAgICAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vbktleWRvd24uZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5VXBcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5VXAoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub25LZXl1cC5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3VibWl0XG4gICAgICovXG4gICAgcHVibGljIHN1Ym1pdCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=