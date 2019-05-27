import { Pipe, Injectable, Input, Component, EventEmitter, Output, ViewChild, ContentChildren, forwardRef, HostListener, Injector, TemplateRef, ElementRef, HostBinding, ChangeDetectorRef, Renderer2, ViewChildren, ContentChild, NgModule } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { __awaiter } from 'tslib';
import { filter, first, debounceTime, map } from 'rxjs/operators';
import { Ng2Dropdown, Ng2DropdownModule } from 'ng2-material-dropdown';
import { animate, trigger, style, transition, keyframes, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
class HighlightPipe {
    /**
     * \@name transform
     * @param {?} value {string}
     * @param {?} arg {string}
     * @return {?}
     */
    transform(value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            /** @type {?} */
            const regex = new RegExp(`(${escape(arg)})`, 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'highlight'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
** constants and default values for <tag-input>
 */
/** @type {?} */
const PLACEHOLDER = '+ Tag';
/** @type {?} */
const SECONDARY_PLACEHOLDER = 'Enter a new tag';
/** @type {?} */
const KEYDOWN = 'keydown';
/** @type {?} */
const KEYUP = 'keyup';
/** @type {?} */
const MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
/** @type {?} */
const ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
/** @type {?} */
const KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
/** @type {?} */
const DRAG_AND_DROP_KEY = 'Text';
/** @type {?} */
const NEXT = 'NEXT';
/** @type {?} */
const PREV = 'PREV';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DragProvider {
    constructor() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * \@name setDraggedItem
     * @param {?} event
     * @param {?} tag
     * @return {?}
     */
    setDraggedItem(event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    }
    /**
     * \@name getDraggedItem
     * @param {?} event
     * @return {?}
     */
    getDraggedItem(event) {
        /** @type {?} */
        const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        try {
            return (/** @type {?} */ (JSON.parse(data)));
        }
        catch (_a) {
            return;
        }
    }
    /**
     * \@name setSender
     * @param {?} sender
     * @return {?}
     */
    setSender(sender) {
        this.sender = sender;
    }
    /**
     * \@name setReceiver
     * @param {?} receiver
     * @return {?}
     */
    setReceiver(receiver) {
        this.receiver = receiver;
    }
    /**
     * \@name onTagDropped
     * @param {?} tag
     * @param {?} indexDragged
     * @param {?=} indexDropped
     * @return {?}
     */
    onTagDropped(tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    }
    /**
     * \@name setState
     * @param {?} state
     * @return {?}
     */
    setState(state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    }
    /**
     * \@name getState
     * @param {?=} key
     * @return {?}
     */
    getState(key) {
        return key ? this.state[key] : this.state;
    }
    /**
     * \@name onDragEnd
     * @return {?}
     */
    onDragEnd() {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    }
}
DragProvider.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const defaults = {
    tagInput: (/** @type {?} */ ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    })),
    dropdown: (/** @type {?} */ ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn
    }))
};
/**
 * \@name matchingFn
 * @this {?}
 * @param {?} value
 * @param {?} target
 * @return {?}
 */
function matchingFn(value, target) {
    /** @type {?} */
    const targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OptionsProvider {
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    }
}
OptionsProvider.defaults = defaults;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isObject(obj) {
    return obj === Object(obj);
}
class TagInputAccessor {
    constructor() {
        this._items = [];
        /**
         * \@name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
        this._onChangeCallback(this._items);
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    writeValue(items) {
        this._items = items || [];
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * \@name getItemValue
     * @param {?} item
     * @param {?=} fromDropdown
     * @return {?}
     */
    getItemValue(item, fromDropdown = false) {
        /** @type {?} */
        const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * \@name getItemDisplay
     * @param {?} item
     * @param {?=} fromDropdown
     * @return {?}
     */
    getItemDisplay(item, fromDropdown = false) {
        /** @type {?} */
        const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * \@name getItemsWithout
     * @param {?} index
     * @return {?}
     */
    getItemsWithout(index) {
        return this.items.filter((item, position) => position !== index);
    }
}
TagInputAccessor.propDecorators = {
    displayBy: [{ type: Input }],
    identifyBy: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@name listen
 * @param {?} listenerType
 * @param {?} action
 * @param {?=} condition
 * @return {?}
 */
function listen(listenerType, action, condition = true) {
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TagInputForm {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const defaults$1 = forwardRef(() => OptionsProvider.defaults.dropdown);
class TagInputDropdown {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /**
         * \@name offset
         */
        this.offset = new defaults$1().offset;
        /**
         * \@name focusFirstElement
         */
        this.focusFirstElement = new defaults$1().focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * \@name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = new defaults$1().showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * \@name minimumTextLength
         */
        this.minimumTextLength = new defaults$1().minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * \@name limitItemsTo
         */
        this.limitItemsTo = new defaults$1().limitItemsTo;
        /**
         * \@name displayBy
         */
        this.displayBy = new defaults$1().displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = new defaults$1().identifyBy;
        /**
         * \@description a function a developer can use to implement custom matching for the autocomplete
         * \@name matchingFn
         */
        this.matchingFn = new defaults$1().matchingFn;
        /**
         * \@name appendToBody
         */
        this.appendToBody = new defaults$1().appendToBody;
        /**
         * \@name keepOpen
         * \@description option to leave dropdown open when adding a new item
         */
        this.keepOpen = new defaults$1().keepOpen;
        /**
         * \@name dynamicUpdate
         */
        this.dynamicUpdate = new defaults$1().dynamicUpdate;
        /**
         * \@name zIndex
         */
        this.zIndex = new defaults$1().zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * \@name items
         */
        this.items = [];
        /**
         * \@name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * \@name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * \@name show
         */
        this.show = () => {
            /** @type {?} */
            const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
            /** @type {?} */
            const value = this.getFormValue();
            /** @type {?} */
            const hasMinimumText = value.trim().length >= this.minimumTextLength;
            /** @type {?} */
            const position = this.calculatePosition();
            /** @type {?} */
            const items = this.getMatchingItems(value);
            /** @type {?} */
            const hasItems = items.length > 0;
            /** @type {?} */
            const isHidden = this.isVisible === false;
            /** @type {?} */
            const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
            /** @type {?} */
            const isDisabled = this.tagInput.disable;
            /** @type {?} */
            const shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            /** @type {?} */
            const shouldHide = this.isVisible && !hasItems;
            if (this.autocompleteObservable && hasMinimumText) {
                return this.getItemsFromObservable(value);
            }
            if ((!this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return this.dropdown.hide();
            }
            this.setItems(items);
            if (shouldShow) {
                this.dropdown.show(position);
            }
            else if (shouldHide) {
                this.hide();
            }
        };
        /**
         * \@name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = (item) => __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const tag = this.createTagModel(item);
            yield this.tagInput.onAddingRequested(true, tag).catch(() => { });
        });
        /**
         * \@name resetItems
         */
        this.resetItems = () => {
            this.items = [];
        };
        /**
         * \@name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = (text) => {
            this.setLoadingState(true);
            /** @type {?} */
            const subscribeFn = (data) => {
                // hide loading animation
                this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                this.setItems(this.getMatchingItems(text));
                if (this.items.length) {
                    this.dropdown.show(this.calculatePosition());
                }
                else {
                    this.dropdown.hide();
                }
            };
            this.autocompleteObservable(text)
                .pipe(first())
                .subscribe(subscribeFn, () => this.setLoadingState(false));
        };
    }
    /**
     * \@name autocompleteItems
     * @param {?} items
     * @return {?}
     */
    set autocompleteItems(items) {
        this._autocompleteItems = items;
    }
    /**
     * \@name autocompleteItems
     * @desc array of items that will populate the autocomplete
     * @return {?}
     */
    get autocompleteItems() {
        /** @type {?} */
        const items = this._autocompleteItems;
        if (!items) {
            return [];
        }
        return items.map((item) => {
            return typeof item === 'string' ? {
                [this.displayBy]: item,
                [this.identifyBy]: item
            } : item;
        });
    }
    /**
     * \@name ngOnInit
     * @return {?}
     */
    ngOnInit() {
        this.onItemClicked().subscribe((item) => {
            this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        /** @type {?} */
        const DEBOUNCE_TIME = 200;
        /** @type {?} */
        const KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(debounceTime(DEBOUNCE_TIME), filter((value) => {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    }
    /**
     * \@name updatePosition
     * @return {?}
     */
    updatePosition() {
        /** @type {?} */
        const position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    }
    /**
     * \@name isVisible
     * @return {?}
     */
    get isVisible() {
        return this.dropdown.menu.state.menuState.isVisible;
    }
    /**
     * \@name onHide
     * @return {?}
     */
    onHide() {
        return this.dropdown.onHide;
    }
    /**
     * \@name onItemClicked
     * @return {?}
     */
    onItemClicked() {
        return this.dropdown.onItemClicked;
    }
    /**
     * \@name selectedItem
     * @return {?}
     */
    get selectedItem() {
        return this.dropdown.menu.state.dropdownState.selectedItem;
    }
    /**
     * \@name state
     * @return {?}
     */
    get state() {
        return this.dropdown.menu.state;
    }
    /**
     * \@name hide
     * @return {?}
     */
    hide() {
        this.resetItems();
        this.dropdown.hide();
    }
    /**
     * \@name scrollListener
     * @return {?}
     */
    scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    }
    /**
     * \@name onWindowBlur
     * @return {?}
     */
    onWindowBlur() {
        this.dropdown.hide();
    }
    /**
     * \@name getFormValue
     * @return {?}
     */
    getFormValue() {
        /** @type {?} */
        const formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    }
    /**
     * \@name calculatePosition
     * @return {?}
     */
    calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
    }
    /**
     * \@name createTagModel
     * @param {?} item
     * @return {?}
     */
    createTagModel(item) {
        /** @type {?} */
        const display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        /** @type {?} */
        const value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, { [this.tagInput.displayBy]: display, [this.tagInput.identifyBy]: value });
    }
    /**
     *
     * @param {?} value {string}
     * @return {?}
     */
    getMatchingItems(value) {
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        /** @type {?} */
        const dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter((item) => {
            /** @type {?} */
            const hasValue = dupesAllowed ? false : this.tagInput.tags.some(tag => {
                /** @type {?} */
                const identifyBy = this.tagInput.identifyBy;
                /** @type {?} */
                const model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[this.identifyBy];
            });
            return this.matchingFn(value, item) && (hasValue === false);
        });
    }
    /**
     * \@name setItems
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    }
    /**
     * \@name populateItems
     * @param {?} data
     * @return {?}
     */
    populateItems(data) {
        this.autocompleteItems = data.map(item => {
            return typeof item === 'string' ? {
                [this.displayBy]: item,
                [this.identifyBy]: item
            } : item;
        });
        return this;
    }
    /**
     * \@name setLoadingState
     * @param {?} state
     * @return {?}
     */
    setLoadingState(state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    }
}
TagInputDropdown.decorators = [
    { type: Component, args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            }] }
];
/** @nocollapse */
TagInputDropdown.ctorParameters = () => [
    { type: Injector }
];
TagInputDropdown.propDecorators = {
    dropdown: [{ type: ViewChild, args: [Ng2Dropdown,] }],
    templates: [{ type: ContentChildren, args: [TemplateRef,] }],
    offset: [{ type: Input }],
    focusFirstElement: [{ type: Input }],
    showDropdownIfEmpty: [{ type: Input }],
    autocompleteObservable: [{ type: Input }],
    minimumTextLength: [{ type: Input }],
    limitItemsTo: [{ type: Input }],
    displayBy: [{ type: Input }],
    identifyBy: [{ type: Input }],
    matchingFn: [{ type: Input }],
    appendToBody: [{ type: Input }],
    keepOpen: [{ type: Input }],
    dynamicUpdate: [{ type: Input }],
    zIndex: [{ type: Input }],
    autocompleteItems: [{ type: Input }],
    scrollListener: [{ type: HostListener, args: ['window:scroll',] }],
    onWindowBlur: [{ type: HostListener, args: ['window:blur',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TagRipple {
    constructor() {
        this.state = 'none';
    }
}
TagRipple.decorators = [
    { type: Component, args: [{
                selector: 'tag-ripple',
                template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
                animations: [
                    trigger('ink', [
                        state('none', style({ width: 0, opacity: 0 })),
                        transition('none => clicked', [
                            animate(300, keyframes([
                                style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                style({ opacity: 1, offset: 0.5, width: '50%' }),
                                style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ],
                styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }
        
        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `]
            }] }
];
TagRipple.propDecorators = {
    state: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// mocking navigator
/** @type {?} */
const navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
/** @type {?} */
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
class TagComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdRef
     */
    constructor(element, renderer, cdRef) {
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
    /**
     * \@name readonly {boolean}
     * @return {?}
     */
    get readonly() {
        return typeof this.model !== "string" && this.model.readonly === true;
    }
    /**
     * \@name select
     * @param {?=} $event
     * @return {?}
     */
    select($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    }
    /**
     * \@name remove
     * @param {?} $event
     * @return {?}
     */
    remove($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    }
    /**
     * \@name focus
     * @return {?}
     */
    focus() {
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    move() {
        this.moving = true;
    }
    /**
     * \@name keydown
     * @param {?} event
     * @return {?}
     */
    keydown(event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event, model: this.model });
        }
    }
    /**
     * \@name blink
     * @return {?}
     */
    blink() {
        /** @type {?} */
        const classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(() => classList.remove("blink"), 50);
    }
    /**
     * \@name toggleEditMode
     * @return {?}
     */
    toggleEditMode() {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    }
    /**
     * \@name onBlurred
     * @param {?} event
     * @return {?}
     */
    onBlurred(event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        /** @type {?} */
        const value = event.target.innerText;
        /** @type {?} */
        const result = typeof this.model === "string"
            ? value
            : Object.assign({}, this.model, { [this.displayBy]: value });
        this.onBlur.emit(result);
    }
    /**
     * \@name getDisplayValue
     * @param {?} item
     * @return {?}
     */
    getDisplayValue(item) {
        return typeof item === "string" ? item : item[this.displayBy];
    }
    /**
     * @desc returns whether the ripple is visible or not
     * only works in Chrome
     * \@name isRippleVisible
     * @return {?}
     */
    get isRippleVisible() {
        return !this.readonly && !this.editing && isChrome && this.hasRipple;
    }
    /**
     * \@name disableEditMode
     * @param {?=} $event
     * @return {?}
     */
    disableEditMode($event) {
        /** @type {?} */
        const classList = this.element.nativeElement.classList;
        /** @type {?} */
        const input = this.getContentEditableText();
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
    }
    /**
     * \@name isDeleteIconVisible
     * @return {?}
     */
    isDeleteIconVisible() {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    }
    /**
     * \@name getContentEditableText
     * @return {?}
     */
    getContentEditableText() {
        /** @type {?} */
        const input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
    }
    /**
     * \@name setContentEditableText
     * @param {?} model
     * @return {?}
     */
    setContentEditableText(model) {
        /** @type {?} */
        const input = this.getContentEditable();
        /** @type {?} */
        const value = this.getDisplayValue(model);
        input.innerText = value;
    }
    /**
     * \@name
     * @return {?}
     */
    activateEditMode() {
        /** @type {?} */
        const classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    }
    /**
     * \@name storeNewValue
     * @param {?} input
     * @return {?}
     */
    storeNewValue(input) {
        /** @type {?} */
        const exists = (tag) => {
            return typeof tag === 'string'
                ? tag === input
                : tag[this.displayBy] === input;
        };
        /** @type {?} */
        const hasId = () => {
            return this.model[this.identifyBy] !== this.model[this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        /** @type {?} */
        const model = typeof this.model === 'string'
            ? input
            : {
                index: this.index,
                [this.identifyBy]: hasId()
                    ? this.model[this.identifyBy]
                    : input,
                [this.displayBy]: input
            };
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    }
    /**
     * \@name getContentEditable
     * @return {?}
     */
    getContentEditable() {
        return this.element.nativeElement.querySelector('[contenteditable]');
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: "tag",
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }] }
];
/** @nocollapse */
TagComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@name animations
 * @type {?}
 */
const animations = [
    trigger('animation', [
        state('in', style({
            opacity: 1
        })),
        state('out', style({
            opacity: 0
        })),
        transition(':enter', [
            animate("{{ enter }}", keyframes([
                style({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                style({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                style({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                style({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                style({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        transition(':leave', [
            animate("{{ leave }}", keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// angular universal hacks
/* tslint:disable-next-line */
/** @type {?} */
const DragEvent = ((/** @type {?} */ (window))).DragEvent;
/** @type {?} */
const CUSTOM_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagInputComponent),
    multi: true
};
/** @type {?} */
const defaults$2 = forwardRef(() => OptionsProvider.defaults.tagInput);
class TagInputComponent extends TagInputAccessor {
    /**
     * @param {?} renderer
     * @param {?} dragProvider
     */
    constructor(renderer, dragProvider) {
        super();
        this.renderer = renderer;
        this.dragProvider = dragProvider;
        /**
         * \@name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        this.separatorKeys = new defaults$2().separatorKeys;
        /**
         * \@name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
        /**
         * \@name placeholder
         * @desc the placeholder of the input text
         */
        this.placeholder = new defaults$2().placeholder;
        /**
         * \@name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
        /**
         * \@name maxItems
         * @desc maximum number of items that can be added
         */
        this.maxItems = new defaults$2().maxItems;
        /**
         * \@name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        this.validators = new defaults$2().validators;
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = new defaults$2().asyncValidators;
        /**
         * - if set to true, it will only possible to add items from the autocomplete
         * \@name onlyFromAutocomplete
         */
        this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
        /**
         * \@name errorMessages
         */
        this.errorMessages = new defaults$2().errorMessages;
        /**
         * \@name theme
         */
        this.theme = new defaults$2().theme;
        /**
         * \@name onTextChangeDebounce
         */
        this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * \@name id
         */
        this.inputId = new defaults$2().inputId;
        /**
         * - custom class assigned to the input
         */
        this.inputClass = new defaults$2().inputClass;
        /**
         * - option to clear text input when the form is blurred
         * \@name clearOnBlur
         */
        this.clearOnBlur = new defaults$2().clearOnBlur;
        /**
         * - hideForm
         * \@name clearOnBlur
         */
        this.hideForm = new defaults$2().hideForm;
        /**
         * \@name addOnBlur
         */
        this.addOnBlur = new defaults$2().addOnBlur;
        /**
         * \@name addOnPaste
         */
        this.addOnPaste = new defaults$2().addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * \@name pasteSplitPattern
         */
        this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
        /**
         * \@name blinkIfDupe
         */
        this.blinkIfDupe = new defaults$2().blinkIfDupe;
        /**
         * \@name removable
         */
        this.removable = new defaults$2().removable;
        /**
         * \@name editable
         */
        this.editable = new defaults$2().editable;
        /**
         * \@name allowDupes
         */
        this.allowDupes = new defaults$2().allowDupes;
        /**
         * \@description if set to true, the newly added tags will be added as strings, and not objects
         * \@name modelAsStrings
         */
        this.modelAsStrings = new defaults$2().modelAsStrings;
        /**
         * \@name trimTags
         */
        this.trimTags = new defaults$2().trimTags;
        /**
         * \@name ripple
         */
        this.ripple = new defaults$2().ripple;
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = new defaults$2().tabIndex;
        /**
         * \@name disable
         */
        this.disable = new defaults$2().disable;
        /**
         * \@name dragZone
         */
        this.dragZone = new defaults$2().dragZone;
        /**
         * \@name onRemoving
         */
        this.onRemoving = new defaults$2().onRemoving;
        /**
         * \@name onAdding
         */
        this.onAdding = new defaults$2().onAdding;
        /**
         * \@name animationDuration
         */
        this.animationDuration = new defaults$2().animationDuration;
        /**
         * \@name onAdd
         * @desc event emitted when adding a new item
         */
        this.onAdd = new EventEmitter();
        /**
         * \@name onRemove
         * @desc event emitted when removing an existing item
         */
        this.onRemove = new EventEmitter();
        /**
         * \@name onSelect
         * @desc event emitted when selecting an item
         */
        this.onSelect = new EventEmitter();
        /**
         * \@name onFocus
         * @desc event emitted when the input is focused
         */
        this.onFocus = new EventEmitter();
        /**
         * \@name onFocus
         * @desc event emitted when the input is blurred
         */
        this.onBlur = new EventEmitter();
        /**
         * \@name onTextChange
         * @desc event emitted when the input value changes
         */
        this.onTextChange = new EventEmitter();
        /**
         * - output triggered when text is pasted in the form
         * \@name onPaste
         */
        this.onPaste = new EventEmitter();
        /**
         * - output triggered when tag entered is not valid
         * \@name onValidationError
         */
        this.onValidationError = new EventEmitter();
        /**
         * - output triggered when tag is edited
         * \@name onTagEdited
         */
        this.onTagEdited = new EventEmitter();
        /**
         * \@name isLoading
         */
        this.isLoading = false;
        /**
         * \@name listeners
         * @desc array of events that get fired using \@fireEvents
         */
        this.listeners = {
            [KEYDOWN]: (/** @type {?} */ ([])),
            [KEYUP]: (/** @type {?} */ ([]))
        };
        /**
         * \@description emitter for the 2-way data binding inputText value
         * \@name inputTextChange
         */
        this.inputTextChange = new EventEmitter();
        /**
         * \@description private variable to bind get/set
         * \@name inputTextValue
         */
        this.inputTextValue = '';
        this.errors = [];
        /**
         * \@name appendTag
         * @param tag {TagModel}
         */
        this.appendTag = (tag, index = this.items.length) => {
            /** @type {?} */
            const items = this.items;
            /** @type {?} */
            const model = this.modelAsStrings ? tag[this.identifyBy] : tag;
            this.items = [
                ...items.slice(0, index),
                model,
                ...items.slice(index, items.length)
            ];
        };
        /**
         * \@name createTag
         * @param model
         */
        this.createTag = (model) => {
            /** @type {?} */
            const trim = (val, key) => {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, { [this.displayBy]: this.trimTags ? trim(model, this.displayBy) : model, [this.identifyBy]: this.trimTags ? trim(model, this.identifyBy) : model });
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        this.isTagValid = (tag, fromAutocomplete = false) => {
            /** @type {?} */
            const selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
            /** @type {?} */
            const value = this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            /** @type {?} */
            const dupe = this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!this.allowDupes && dupe && this.blinkIfDupe) {
                /** @type {?} */
                const model = this.tags.find(item => {
                    return this.getItemValue(item.model) === this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            /** @type {?} */
            const isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
            /** @type {?} */
            const assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || this.allowDupes,
                // 2. check max items has not been reached
                !this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * \@name onPasteCallback
         * @param data
         */
        this.onPasteCallback = (data) => __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const getText = () => {
                /** @type {?} */
                const isIE = Boolean(((/** @type {?} */ (window))).clipboardData);
                /** @type {?} */
                const clipboardData = isIE ? (((/** @type {?} */ (window))).clipboardData) : data.clipboardData;
                /** @type {?} */
                const type = isIE ? 'Text' : 'text/plain';
                return clipboardData.getData(type) || '';
            };
            /** @type {?} */
            const text = getText();
            /** @type {?} */
            const requests = text
                .split(this.pasteSplitPattern)
                .map(item => {
                /** @type {?} */
                const tag = this.createTag(item);
                this.setInputValue(tag[this.displayBy]);
                return this.onAddingRequested(false, tag);
            });
            /** @type {?} */
            const resetInput = () => setTimeout(() => this.setInputValue(''), 50);
            Promise.all(requests).then(() => {
                this.onPaste.emit(text);
                resetInput();
            })
                .catch(resetInput);
        });
    }
    /**
     * \@name inputText
     * @return {?}
     */
    get inputText() {
        return this.inputTextValue;
    }
    /**
     * \@name inputText
     * @param {?} text
     * @return {?}
     */
    set inputText(text) {
        this.inputTextValue = text;
        this.inputTextChange.emit(text);
    }
    /**
     * @desc removes the tab index if it is set - it will be passed through to the input
     * \@name tabindexAttr
     * @return {?}
     */
    get tabindexAttr() {
        return this.tabindex !== '' ? '-1' : '';
    }
    /**
     * \@name ngAfterViewInit
     * @return {?}
     */
    ngAfterViewInit() {
        // set up listeners
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        /** @type {?} */
        const statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(filter((status) => status !== 'PENDING')).subscribe(() => {
            this.errors = this.inputForm.getErrorMessages(this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(map((status) => {
            return status === 'PENDING' || this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    }
    /**
     * \@name ngOnInit
     * @return {?}
     */
    ngOnInit() {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        /** @type {?} */
        const hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    }
    /**
     * \@name onRemoveRequested
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    onRemoveRequested(tag, index) {
        return new Promise(resolve => {
            /** @type {?} */
            const subscribeFn = (model) => {
                this.removeItem(model, index);
                resolve(tag);
            };
            this.onRemoving ?
                this.onRemoving(tag)
                    .pipe(first())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    }
    /**
     * \@name onAddingRequested
     * @param {?} fromAutocomplete {boolean}
     * @param {?} tag {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
        return new Promise((resolve, reject) => {
            /** @type {?} */
            const subscribeFn = (model) => {
                return this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return this.onAdding ?
                this.onAdding(tag)
                    .pipe(first())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    }
    /**
     * \@name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param {?} item
     * @param {?=} emit
     * @return {?}
     */
    selectItem(item, emit = true) {
        /** @type {?} */
        const isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    }
    /**
     * \@name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param {?} eventName
     * @param {?=} $event
     * @return {?}
     */
    fireEvents(eventName, $event) {
        this.listeners[eventName].forEach(listener => listener.call(this, $event));
    }
    /**
     * \@name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param {?} data
     * @return {?}
     */
    handleKeydown(data) {
        /** @type {?} */
        const event = data.event;
        /** @type {?} */
        const key = event.keyCode || event.which;
        /** @type {?} */
        const shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    /** @type {?} */
                    const index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    onFormSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.onAddingRequested(false, this.formValue);
            }
            catch (_a) {
                return;
            }
        });
    }
    /**
     * \@name setInputValue
     * @param {?} value
     * @param {?=} emitEvent
     * @return {?}
     */
    setInputValue(value, emitEvent = true) {
        /** @type {?} */
        const control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent });
    }
    /**
     * \@name getControl
     * @return {?}
     */
    getControl() {
        return (/** @type {?} */ (this.inputForm.value));
    }
    /**
     * \@name focus
     * @param {?=} applyFocus
     * @param {?=} displayAutocomplete
     * @return {?}
     */
    focus(applyFocus = false, displayAutocomplete = false) {
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    }
    /**
     * \@name blur
     * @return {?}
     */
    blur() {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    }
    /**
     * \@name hasErrors
     * @return {?}
     */
    hasErrors() {
        return this.inputForm && this.inputForm.hasErrors();
    }
    /**
     * \@name isInputFocused
     * @return {?}
     */
    isInputFocused() {
        return this.inputForm && this.inputForm.isInputFocused();
    }
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * \@name hasCustomTemplate
     * @return {?}
     */
    hasCustomTemplate() {
        /** @type {?} */
        const template = this.templates ? this.templates.first : undefined;
        /** @type {?} */
        const menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    }
    /**
     * \@name maxItemsReached
     * @return {?}
     */
    get maxItemsReached() {
        return this.maxItems !== undefined &&
            this.items.length >= this.maxItems;
    }
    /**
     * \@name formValue
     * @return {?}
     */
    get formValue() {
        /** @type {?} */
        const form = this.inputForm.value;
        return form ? form.value : '';
    }
    /**
     * 3
     * \@name onDragStarted
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    onDragStarted(event, tag, index) {
        event.stopPropagation();
        /** @type {?} */
        const item = (/** @type {?} */ ({ zone: this.dragZone, tag, index }));
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index });
    }
    /**
     * \@name onDragOver
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    onDragOver(event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    }
    /**
     * \@name onTagDropped
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    onTagDropped(event, index) {
        /** @type {?} */
        const item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * \@name isDropping
     * @return {?}
     */
    isDropping() {
        /** @type {?} */
        const isReceiver = this.dragProvider.receiver === this;
        /** @type {?} */
        const isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    }
    /**
     * \@name onTagBlurred
     * @param {?} changedElement {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    onTagBlurred(changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    }
    /**
     * \@name trackBy
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackBy(index, item) {
        return item[this.identifyBy];
    }
    /**
     * \@name updateEditedTag
     * @param {?} __0
     * @return {?}
     */
    updateEditedTag({ tag, index }) {
        this.onTagEdited.emit(tag);
    }
    /**
     * \@name moveToTag
     * @param {?} item
     * @param {?} direction
     * @return {?}
     */
    moveToTag(item, direction) {
        /** @type {?} */
        const isLast = this.isLastTag(item);
        /** @type {?} */
        const isFirst = this.isFirstTag(item);
        /** @type {?} */
        const stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        /** @type {?} */
        const offset = direction === NEXT ? 1 : -1;
        /** @type {?} */
        const index = this.getTagIndex(item) + offset;
        /** @type {?} */
        const tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    }
    /**
     * \@name isFirstTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    isFirstTag(item) {
        return this.tags.first.model === item;
    }
    /**
     * \@name isLastTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    isLastTag(item) {
        return this.tags.last.model === item;
    }
    /**
     * \@name getTagIndex
     * @param {?} item
     * @return {?}
     */
    getTagIndex(item) {
        /** @type {?} */
        const tags = this.tags.toArray();
        return tags.findIndex(tag => tag.model === item);
    }
    /**
     * \@name getTagAtIndex
     * @param {?} index
     * @return {?}
     */
    getTagAtIndex(index) {
        /** @type {?} */
        const tags = this.tags.toArray();
        return tags[index];
    }
    /**
     * \@name removeItem
     * @desc removes an item from the array of the model
     * @param {?} tag {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    removeItem(tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    }
    /**
     * \@name addItem
     * @desc adds the current text model to the items array
     * @param {?=} fromAutocomplete {boolean}
     * @param {?=} item {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    addItem(fromAutocomplete = false, item, index, giveupFocus) {
        /** @type {?} */
        const display = this.getItemDisplay(item);
        /** @type {?} */
        const tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise((resolve, reject) => {
            /**
             * \@name reset
             * @type {?}
             */
            const reset = () => {
                // reset control and focus input
                this.setInputValue('');
                if (giveupFocus) {
                    this.focus(false, false);
                }
                else {
                    // focus input
                    this.focus(true, false);
                }
                resolve(display);
            };
            /** @type {?} */
            const appendItem = () => {
                this.appendTag(tag, index);
                // emit event
                this.onAdd.emit(tag);
                if (!this.dropdown) {
                    return;
                }
                this.dropdown.hide();
                if (this.dropdown.showDropdownIfEmpty) {
                    this.dropdown.show();
                }
            };
            /** @type {?} */
            const status = this.inputForm.form.status;
            /** @type {?} */
            const isTagValid = this.isTagValid(tag, fromAutocomplete);
            /** @type {?} */
            const onValidationError = () => {
                this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                /** @type {?} */
                const statusUpdate$ = this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(filter(statusUpdate => statusUpdate !== 'PENDING'), first())
                    .subscribe((statusUpdate) => {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    }
    /**
     * \@name setupSeparatorKeysListener
     * @return {?}
     */
    setupSeparatorKeysListener() {
        /** @type {?} */
        const useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        /** @type {?} */
        const listener = ($event) => {
            /** @type {?} */
            const hasKeyCode = this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            /** @type {?} */
            const hasKey = this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            /** @type {?} */
            const isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                this.onAddingRequested(false, this.formValue)
                    .catch(() => { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    }
    /**
     * \@name setUpKeypressListeners
     * @return {?}
     */
    setUpKeypressListeners() {
        /** @type {?} */
        const listener = ($event) => {
            /** @type {?} */
            const isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !this.formValue &&
                this.items.length) {
                this.tags.last.select.call(this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, KEYDOWN, listener);
    }
    /**
     * \@name setUpKeydownListeners
     * @return {?}
     */
    setUpInputKeydownListeners() {
        this.inputForm.onKeydown.subscribe(event => {
            this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    }
    /**
     * \@name setUpOnPasteListener
     * @return {?}
     */
    setUpOnPasteListener() {
        /** @type {?} */
        const input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', (event) => {
            this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    }
    /**
     * \@name setUpTextChangeSubscriber
     * @return {?}
     */
    setUpTextChangeSubscriber() {
        this.inputForm.form
            .valueChanges
            .pipe(debounceTime(this.onTextChangeDebounce))
            .subscribe((value) => {
            this.onTextChange.emit(value.item);
        });
    }
    /**
     * \@name setUpOnBlurSubscriber
     * @return {?}
     */
    setUpOnBlurSubscriber() {
        /** @type {?} */
        const filterFn = () => {
            /** @type {?} */
            const isVisible = this.dropdown && this.dropdown.isVisible;
            return !isVisible && !!this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(debounceTime(100), filter(filterFn))
            .subscribe(() => {
            /** @type {?} */
            const reset = () => this.setInputValue('');
            if (this.addOnBlur) {
                return this
                    .onAddingRequested(false, this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    }
    /**
     * \@name findDupe
     * @param {?} tag
     * @param {?} isFromAutocomplete
     * @return {?}
     */
    findDupe(tag, isFromAutocomplete) {
        /** @type {?} */
        const identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        /** @type {?} */
        const id = tag[identifyBy];
        return this.items.find(item => this.getItemValue(item) === id);
    }
    /**
     * \@name setAnimationMetadata
     * @return {?}
     */
    setAnimationMetadata() {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    }
}
TagInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations,
                styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
            }] }
];
/** @nocollapse */
TagInputComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: DragProvider }
];
TagInputComponent.propDecorators = {
    separatorKeys: [{ type: Input }],
    separatorKeyCodes: [{ type: Input }],
    placeholder: [{ type: Input }],
    secondaryPlaceholder: [{ type: Input }],
    maxItems: [{ type: Input }],
    validators: [{ type: Input }],
    asyncValidators: [{ type: Input }],
    onlyFromAutocomplete: [{ type: Input }],
    errorMessages: [{ type: Input }],
    theme: [{ type: Input }],
    onTextChangeDebounce: [{ type: Input }],
    inputId: [{ type: Input }],
    inputClass: [{ type: Input }],
    clearOnBlur: [{ type: Input }],
    hideForm: [{ type: Input }],
    addOnBlur: [{ type: Input }],
    addOnPaste: [{ type: Input }],
    pasteSplitPattern: [{ type: Input }],
    blinkIfDupe: [{ type: Input }],
    removable: [{ type: Input }],
    editable: [{ type: Input }],
    allowDupes: [{ type: Input }],
    modelAsStrings: [{ type: Input }],
    trimTags: [{ type: Input }],
    inputText: [{ type: Input }],
    ripple: [{ type: Input }],
    tabindex: [{ type: Input }],
    disable: [{ type: Input }],
    dragZone: [{ type: Input }],
    onRemoving: [{ type: Input }],
    onAdding: [{ type: Input }],
    animationDuration: [{ type: Input }],
    onAdd: [{ type: Output }],
    onRemove: [{ type: Output }],
    onSelect: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onTextChange: [{ type: Output }],
    onPaste: [{ type: Output }],
    onValidationError: [{ type: Output }],
    onTagEdited: [{ type: Output }],
    dropdown: [{ type: ContentChild, args: [TagInputDropdown,] }],
    templates: [{ type: ContentChildren, args: [TemplateRef, { descendants: false },] }],
    inputForm: [{ type: ViewChild, args: [TagInputForm,] }],
    tags: [{ type: ViewChildren, args: [TagComponent,] }],
    inputTextChange: [{ type: Output }],
    tabindexAttr: [{ type: HostBinding, args: ['attr.tabindex',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DeleteIconComponent {
}
DeleteIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const optionsProvider = new OptionsProvider();
class TagInputModule {
    /**
     * \@name withDefaults
     * @param {?} options {Options}
     * @return {?}
     */
    static withDefaults(options) {
        optionsProvider.setOptions(options);
    }
}
TagInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    Ng2DropdownModule
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: COMPOSITION_BUFFER_MODE, useValue: false },
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, animations as ɵb, TagInputAccessor as ɵa, HighlightPipe as ɵd, DragProvider as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoaXBzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtY2hpcHMvY29yZS9waXBlcy9oaWdobGlnaHQucGlwZS50cyIsIm5nOi8vbmd4LWNoaXBzL2NvcmUvY29uc3RhbnRzL2luZGV4LnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlci50cyIsIm5nOi8vbmd4LWNoaXBzL2RlZmF1bHRzLnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29yZS9wcm92aWRlcnMvb3B0aW9ucy1wcm92aWRlci50cyIsIm5nOi8vbmd4LWNoaXBzL2NvcmUvYWNjZXNzb3IudHMiLCJuZzovL25neC1jaGlwcy9jb3JlL2hlbHBlcnMvbGlzdGVuLnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL3RhZy90YWctcmlwcGxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNoaXBzL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQudHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL3RhZy1pbnB1dC9hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0LnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29tcG9uZW50cy9pY29uL2ljb24udHMiLCJuZzovL25neC1jaGlwcy90YWctaW5wdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IGVzY2FwZSA9IHMgPT4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdoaWdobGlnaHQnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSB0cmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gYXJnIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghYXJnLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7ZXNjYXBlKGFyZyl9KWAsICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZWdleCwgJzxiPiQxPC9iPicpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuKiogY29uc3RhbnRzIGFuZCBkZWZhdWx0IHZhbHVlcyBmb3IgPHRhZy1pbnB1dD5cbiAqL1xuXG5leHBvcnQgY29uc3QgUExBQ0VIT0xERVIgPSAnKyBUYWcnO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9QTEFDRUhPTERFUiA9ICdFbnRlciBhIG5ldyB0YWcnO1xuZXhwb3J0IGNvbnN0IEtFWURPV04gPSAna2V5ZG93bic7XG5leHBvcnQgY29uc3QgS0VZVVAgPSAna2V5dXAnO1xuZXhwb3J0IGNvbnN0IEZPQ1VTID0gJ2ZvY3VzJztcbmV4cG9ydCBjb25zdCBNQVhfSVRFTVNfV0FSTklORyA9ICdUaGUgbnVtYmVyIG9mIGl0ZW1zIHNwZWNpZmllZCB3YXMgZ3JlYXRlciB0aGFuIHRoZSBwcm9wZXJ0eSBtYXgtaXRlbXMuJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTlNfS0VZUyA9IHtcbiAgICBERUxFVEU6ICdERUxFVEUnLFxuICAgIFNXSVRDSF9QUkVWOiAnU1dJVENIX1BSRVYnLFxuICAgIFNXSVRDSF9ORVhUOiAnU1dJVENIX05FWFQnLFxuICAgIFRBQjogJ1RBQidcbn07XG5cbmV4cG9ydCBjb25zdCBLRVlfUFJFU1NfQUNUSU9OUyA9IHtcbiAgICA4OiBBQ1RJT05TX0tFWVMuREVMRVRFLFxuICAgIDM3OiBBQ1RJT05TX0tFWVMuU1dJVENIX1BSRVYsXG4gICAgMzk6IEFDVElPTlNfS0VZUy5TV0lUQ0hfTkVYVCxcbiAgICA5OiBBQ1RJT05TX0tFWVMuVEFCXG59O1xuXG5leHBvcnQgY29uc3QgRFJBR19BTkRfRFJPUF9LRVkgPSAnVGV4dCc7XG5leHBvcnQgY29uc3QgTkVYVCA9ICdORVhUJztcbmV4cG9ydCBjb25zdCBQUkVWID0gJ1BSRVYnO1xuXG4iLCJpbXBvcnQgeyBUYWdJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4uL2FjY2Vzc29yJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgRHJhZ2dlZFRhZyB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0YWc6IFRhZ01vZGVsO1xuICAgIHpvbmU6IHN0cmluZztcbn1cblxuaW1wb3J0IHsgRFJBR19BTkRfRFJPUF9LRVkgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTdGF0ZSB7XG4gICAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gICAgZHJvcHBpbmc6IGJvb2xlYW4sXG4gICAgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFN0YXRlUHJvcGVydHkgPSBrZXlvZiBTdGF0ZTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdQcm92aWRlciB7XG4gICAgcHVibGljIHNlbmRlcjogVGFnSW5wdXRDb21wb25lbnQ7XG4gICAgcHVibGljIHJlY2VpdmVyOiBUYWdJbnB1dENvbXBvbmVudDtcblxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGUgPSB7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgZHJvcHBpbmc6IGZhbHNlLFxuICAgICAgICBpbmRleDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldERyYWdnZWRJdGVtXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXREcmFnZ2VkSXRlbShldmVudDogRHJhZ0V2ZW50LCB0YWc6IERyYWdnZWRUYWcpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoRFJBR19BTkRfRFJPUF9LRVksIEpTT04uc3RyaW5naWZ5KHRhZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldERyYWdnZWRJdGVtXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGdldERyYWdnZWRJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiBEcmFnZ2VkVGFnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKERSQUdfQU5EX0RST1BfS0VZKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSkgYXMgRHJhZ2dlZFRhZztcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRTZW5kZXJcbiAgICAgKiBAcGFyYW0gc2VuZGVyXG4gICAgICovXG4gICAgcHVibGljIHNldFNlbmRlcihzZW5kZXI6IFRhZ0lucHV0Q29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFJlY2VpdmVyXG4gICAgICogQHBhcmFtIHJlY2VpdmVyXG4gICAgICovXG4gICAgcHVibGljIHNldFJlY2VpdmVyKHJlY2VpdmVyOiBUYWdJbnB1dENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UYWdEcm9wcGVkXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpbmRleERyYWdnZWRcbiAgICAgKiBAcGFyYW0gaW5kZXhEcm9wcGVkXG4gICAgICovXG4gICAgcHVibGljIG9uVGFnRHJvcHBlZCh0YWc6IFRhZ01vZGVsLCBpbmRleERyYWdnZWQ6IG51bWJlciwgaW5kZXhEcm9wcGVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25EcmFnRW5kKCk7XG5cbiAgICAgICAgdGhpcy5zZW5kZXIub25SZW1vdmVSZXF1ZXN0ZWQodGFnLCBpbmRleERyYWdnZWQpO1xuICAgICAgICB0aGlzLnJlY2VpdmVyLm9uQWRkaW5nUmVxdWVzdGVkKGZhbHNlLCB0YWcsIGluZGV4RHJvcHBlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0U3RhdGVcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IHtbSyBpbiBTdGF0ZVByb3BlcnR5XT86IFN0YXRlW0tdfSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gey4uLnRoaXMuc3RhdGUsIC4uLnN0YXRlfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRTdGF0ZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhdGUoa2V5PzogU3RhdGVQcm9wZXJ0eSk6IFN0YXRlIHwgU3RhdGVbU3RhdGVQcm9wZXJ0eV0ge1xuICAgICAgICByZXR1cm4ga2V5ID8gdGhpcy5zdGF0ZVtrZXldIDogdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkRyYWdFbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRyb3BwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4OiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFzeW5jVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNFQ09OREFSWV9QTEFDRUhPTERFUiwgUExBQ0VIT0xERVIgfSBmcm9tICcuL2NvcmUvY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4vY29yZS9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnSW5wdXRPcHRpb25zIHtcbiAgICBzZXBhcmF0b3JLZXlzOiBzdHJpbmdbXTtcbiAgICBzZXBhcmF0b3JLZXlDb2RlczogbnVtYmVyW107XG4gICAgbWF4SXRlbXM6IG51bWJlcjtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHNlY29uZGFyeVBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTtcbiAgICBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXTtcbiAgICBvbmx5RnJvbUF1dG9jb21wbGV0ZTogYm9vbGVhbjtcbiAgICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIG9uVGV4dENoYW5nZURlYm91bmNlOiBudW1iZXI7XG4gICAgaW5wdXRJZDogc3RyaW5nIHwgbnVsbDtcbiAgICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gICAgY2xlYXJPbkJsdXI6IGJvb2xlYW47XG4gICAgaGlkZUZvcm06IGJvb2xlYW47XG4gICAgYWRkT25CbHVyOiBib29sZWFuO1xuICAgIGFkZE9uUGFzdGU6IGJvb2xlYW47XG4gICAgcGFzdGVTcGxpdFBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cDtcbiAgICBibGlua0lmRHVwZTogYm9vbGVhbjtcbiAgICByZW1vdmFibGU6IGJvb2xlYW47XG4gICAgZWRpdGFibGU6IGJvb2xlYW47XG4gICAgYWxsb3dEdXBlczogYm9vbGVhbjtcbiAgICBtb2RlbEFzU3RyaW5nczogYm9vbGVhbjtcbiAgICB0cmltVGFnczogYm9vbGVhbjtcbiAgICByaXBwbGU6IGJvb2xlYW47XG4gICAgdGFiSW5kZXg6IHN0cmluZztcbiAgICBkaXNhYmxlOiBib29sZWFuO1xuICAgIGRyYWdab25lOiBzdHJpbmc7XG4gICAgb25SZW1vdmluZz86ICh0YWc6IFRhZ01vZGVsKSA9PiBPYnNlcnZhYmxlPFRhZ01vZGVsPjtcbiAgICBvbkFkZGluZz86ICh0YWc6IFRhZ01vZGVsKSA9PiBPYnNlcnZhYmxlPFRhZ01vZGVsPjtcbiAgICBkaXNwbGF5Qnk6IHN0cmluZztcbiAgICBpZGVudGlmeUJ5OiBzdHJpbmc7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IHtcbiAgICAgICAgZW50ZXI6IHN0cmluZyxcbiAgICAgICAgbGVhdmU6IHN0cmluZ1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnSW5wdXREcm9wZG93bk9wdGlvbnMge1xuICAgIGRpc3BsYXlCeTogc3RyaW5nO1xuICAgIGlkZW50aWZ5Qnk6IHN0cmluZztcbiAgICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gICAgb2Zmc2V0OiBzdHJpbmc7XG4gICAgZm9jdXNGaXJzdEVsZW1lbnQ6IGJvb2xlYW47XG4gICAgc2hvd0Ryb3Bkb3duSWZFbXB0eTogYm9vbGVhbjtcbiAgICBtaW5pbXVtVGV4dExlbmd0aDogbnVtYmVyO1xuICAgIGxpbWl0SXRlbXNUbzogbnVtYmVyO1xuICAgIGtlZXBPcGVuOiBib29sZWFuO1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIGR5bmFtaWNVcGRhdGU6IGJvb2xlYW47XG4gICAgbWF0Y2hpbmdGbjogKHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB0YWdJbnB1dDogPFRhZ0lucHV0T3B0aW9ucz57XG4gICAgICAgIHNlcGFyYXRvcktleXM6IFtdLFxuICAgICAgICBzZXBhcmF0b3JLZXlDb2RlczogW10sXG4gICAgICAgIG1heEl0ZW1zOiBJbmZpbml0eSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFBMQUNFSE9MREVSLFxuICAgICAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogU0VDT05EQVJZX1BMQUNFSE9MREVSLFxuICAgICAgICB2YWxpZGF0b3JzOiBbXSxcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBbXSxcbiAgICAgICAgb25seUZyb21BdXRvY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2VzOiB7fSxcbiAgICAgICAgdGhlbWU6ICcnLFxuICAgICAgICBvblRleHRDaGFuZ2VEZWJvdW5jZTogMjUwLFxuICAgICAgICBpbnB1dElkOiBudWxsLFxuICAgICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgICAgY2xlYXJPbkJsdXI6IGZhbHNlLFxuICAgICAgICBoaWRlRm9ybTogZmFsc2UsXG4gICAgICAgIGFkZE9uQmx1cjogZmFsc2UsXG4gICAgICAgIGFkZE9uUGFzdGU6IGZhbHNlLFxuICAgICAgICBwYXN0ZVNwbGl0UGF0dGVybjogJywnLFxuICAgICAgICBibGlua0lmRHVwZTogdHJ1ZSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlLFxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIGFsbG93RHVwZXM6IGZhbHNlLFxuICAgICAgICBtb2RlbEFzU3RyaW5nczogZmFsc2UsXG4gICAgICAgIHRyaW1UYWdzOiB0cnVlLFxuICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgIHRhYkluZGV4OiAnJyxcbiAgICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdab25lOiAnJyxcbiAgICAgICAgb25SZW1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgICBvbkFkZGluZzogdW5kZWZpbmVkLFxuICAgICAgICBkaXNwbGF5Qnk6ICdkaXNwbGF5JyxcbiAgICAgICAgaWRlbnRpZnlCeTogJ3ZhbHVlJyxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiAnMjUwbXMnLFxuICAgICAgICAgICAgbGVhdmU6ICcxNTBtcydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZHJvcGRvd246IDxUYWdJbnB1dERyb3Bkb3duT3B0aW9ucz57XG4gICAgICAgIGRpc3BsYXlCeTogJ2Rpc3BsYXknLFxuICAgICAgICBpZGVudGlmeUJ5OiAndmFsdWUnLFxuICAgICAgICBhcHBlbmRUb0JvZHk6IHRydWUsXG4gICAgICAgIG9mZnNldDogJzUwIDAnLFxuICAgICAgICBmb2N1c0ZpcnN0RWxlbWVudDogZmFsc2UsXG4gICAgICAgIHNob3dEcm9wZG93bklmRW1wdHk6IGZhbHNlLFxuICAgICAgICBtaW5pbXVtVGV4dExlbmd0aDogMSxcbiAgICAgICAgbGltaXRJdGVtc1RvOiBJbmZpbml0eSxcbiAgICAgICAga2VlcE9wZW46IHRydWUsXG4gICAgICAgIGR5bmFtaWNVcGRhdGU6IHRydWUsXG4gICAgICAgIHpJbmRleDogMTAwMCxcbiAgICAgICAgbWF0Y2hpbmdGblxuICAgIH1cbn07XG5cbi8qKlxuICogQG5hbWUgbWF0Y2hpbmdGblxuICogQHBhcmFtIHRoaXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHRhcmdldFxuICovXG5mdW5jdGlvbiBtYXRjaGluZ0ZuKHRoaXM6IFRhZ0lucHV0RHJvcGRvd24sIHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFt0aGlzLmRpc3BsYXlCeV0udG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0YXJnZXRWYWx1ZSAmJiB0YXJnZXRWYWx1ZVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+PSAwO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMsIFRhZ0lucHV0T3B0aW9ucywgVGFnSW5wdXREcm9wZG93bk9wdGlvbnMgfSBmcm9tICcuLi8uLi9kZWZhdWx0cyc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnMgPSB7XG4gICAgdGFnSW5wdXQ/OiB7XG4gICAgICAgIFtQIGluIGtleW9mIFRhZ0lucHV0T3B0aW9uc10/OiBUYWdJbnB1dE9wdGlvbnNbUF07XG4gICAgfTtcbiAgICBkcm9wZG93bj86IHtcbiAgICAgICAgW1AgaW4ga2V5b2YgVGFnSW5wdXREcm9wZG93bk9wdGlvbnNdPzogVGFnSW5wdXREcm9wZG93bk9wdGlvbnNbUF07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Byb3ZpZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKTogdm9pZCB7XG4gICAgICAgIE9wdGlvbnNQcm92aWRlci5kZWZhdWx0cy50YWdJbnB1dCA9IHsuLi5kZWZhdWx0cy50YWdJbnB1dCwgLi4ub3B0aW9ucy50YWdJbnB1dH07XG4gICAgICAgIE9wdGlvbnNQcm92aWRlci5kZWZhdWx0cy5kcm9wZG93biA9IHsuLi5kZWZhdWx0cy5kcm9wZG93biwgLi4ub3B0aW9ucy5kcm9wZG93bn07XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYWdJbnB1dERyb3Bkb3duT3B0aW9ucywgVGFnSW5wdXRPcHRpb25zIH07IiwiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRhZ01vZGVsQ2xhc3Mge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgVGFnTW9kZWwgPSBzdHJpbmcgfCBUYWdNb2RlbENsYXNzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0QWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBfaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoaXRlbXM6IFRhZ01vZGVsW10pID0+IHZvaWQ7XG5cbiAgICBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuZGlzcGxheUJ5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaWRlbnRpZnlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuaWRlbnRpZnlCeTtcblxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5faXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRvdWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtVmFsdWVcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBmcm9tRHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbVZhbHVlKGl0ZW06IFRhZ01vZGVsLCBmcm9tRHJvcGRvd24gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZnJvbURyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24gPyB0aGlzLmRyb3Bkb3duLmlkZW50aWZ5QnkgOiB0aGlzLmlkZW50aWZ5Qnk7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA/IGl0ZW1bcHJvcGVydHldIDogaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtRGlzcGxheVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHBhcmFtIGZyb21Ecm9wZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRJdGVtRGlzcGxheShpdGVtOiBUYWdNb2RlbCwgZnJvbURyb3Bkb3duID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGZyb21Ecm9wZG93biAmJiB0aGlzLmRyb3Bkb3duID8gdGhpcy5kcm9wZG93bi5kaXNwbGF5QnkgOiB0aGlzLmRpc3BsYXlCeTtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID8gaXRlbVtwcm9wZXJ0eV0gOiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEl0ZW1zV2l0aG91dFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRJdGVtc1dpdGhvdXQoaW5kZXg6IG51bWJlcik6IFRhZ01vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0sIHBvc2l0aW9uKSA9PiBwb3NpdGlvbiAhPT0gaW5kZXgpO1xuICAgIH1cbn1cbiIsIlxuLyoqXG4gKiBAbmFtZSBsaXN0ZW5cbiAqIEBwYXJhbSBsaXN0ZW5lclR5cGVcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBjb25kaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lclR5cGU6IHN0cmluZywgYWN0aW9uOiAoKSA9PiBhbnksIGNvbmRpdGlvbiA9IHRydWUpOiB2b2lkIHtcbiAgICAvLyBpZiB0aGUgZXZlbnQgcHJvdmlkZWQgZG9lcyBub3QgZXhpc3QsIHRocm93IGFuIGVycm9yXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShsaXN0ZW5lclR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGV2ZW50IGVudGVyZWQgbWF5IGJlIHdyb25nJyk7XG4gICAgfVxuXG4gICAgLy8gaWYgYSBjb25kaXRpb24gaXMgcHJlc2VudCBhbmQgaXMgZmFsc2UsIGV4aXQgZWFybHlcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZmlyZSBsaXN0ZW5lclxuICAgIHRoaXMubGlzdGVuZXJzW2xpc3RlbmVyVHlwZV0ucHVzaChhY3Rpb24pO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLWlucHV0LWZvcm0nLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LWZvcm0udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRGb3JtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU3VibWl0XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5dXBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uS2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlkb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbktleWRvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gaW5wdXRzXG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsaWRhdG9yc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0SWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRDbGFzc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWJpbmRleFxuICAgICAqIEBkZXNjIHBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIHRhYmluZGV4IHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBwdWJsaWMgaW5wdXQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtXG4gICAgICovXG4gICAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5wdXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0uc2V0VmFsdWUodGV4dCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW06IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJycsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkfSk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtLnNldFZhbGlkYXRvcnModGhpcy52YWxpZGF0b3JzKTtcbiAgICAgICAgdGhpcy5pdGVtLnNldEFzeW5jVmFsaWRhdG9ycyh0aGlzLmFzeW5jVmFsaWRhdG9ycyk7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgZm9ybVxuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkICYmICFjaGFuZ2VzLmRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2l0ZW0nXS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snaXRlbSddLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2l0ZW0nKSBhcyBGb3JtQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0lucHV0Rm9jdXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0lucHV0Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZG9jID8gZG9jLmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEVycm9yTWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXJyb3JNZXNzYWdlcyhtZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1lc3NhZ2VzKVxuICAgICAgICAgICAgLmZpbHRlcihlcnIgPT4gdGhpcy52YWx1ZS5oYXNFcnJvcihlcnIpKVxuICAgICAgICAgICAgLm1hcChlcnIgPT4gbWVzc2FnZXNbZXJyXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzRXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qge2RpcnR5LCB2YWx1ZSwgdmFsaWR9ID0gdGhpcy5mb3JtO1xuICAgICAgICByZXR1cm4gZGlydHkgJiYgdmFsdWUuaXRlbSAmJiAhdmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRFbGVtZW50UG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RWxlbWVudFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gcmVtb3ZlcyBpbnB1dCBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgKiBAbmFtZSBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleURvd25cbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5RG93bigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSB0aGlzLnZhbHVlLnZhbHVlO1xuICAgICAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vbktleWRvd24uZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5VXBcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIG9uS2V5VXAoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub25LZXl1cC5lbWl0KCRldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3VibWl0XG4gICAgICovXG4gICAgcHVibGljIHN1Ym1pdCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdG9yLFxuICAgIElucHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBUeXBlLFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgZmlyc3QsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd24sIE5nMk1lbnVJdGVtIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcblxuY29uc3QgZGVmYXVsdHM6IFR5cGU8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+ID0gZm9yd2FyZFJlZigoKSA9PiBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMuZHJvcGRvd24pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoTmcyRHJvcGRvd24pIHB1YmxpYyBkcm9wZG93bjogTmcyRHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtZW51VGVtcGxhdGVcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIGlmIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb2Zmc2V0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9mZnNldDogc3RyaW5nID0gbmV3IGRlZmF1bHRzKCkub2Zmc2V0O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNGaXJzdEVsZW1lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZm9jdXNGaXJzdEVsZW1lbnQgPSBuZXcgZGVmYXVsdHMoKS5mb2N1c0ZpcnN0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIC0gc2hvdyBhdXRvY29tcGxldGUgZHJvcGRvd24gaWYgdGhlIHZhbHVlIG9mIGlucHV0IGlzIGVtcHR5XG4gICAgICogQG5hbWUgc2hvd0Ryb3Bkb3duSWZFbXB0eVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93RHJvcGRvd25JZkVtcHR5ID0gbmV3IGRlZmF1bHRzKCkuc2hvd0Ryb3Bkb3duSWZFbXB0eTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBvYnNlcnZhYmxlIHBhc3NlZCBhcyBpbnB1dCB3aGljaCBwb3B1bGF0ZXMgdGhlIGF1dG9jb21wbGV0ZSBpdGVtc1xuICAgICAqIEBuYW1lIGF1dG9jb21wbGV0ZU9ic2VydmFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZTogKHRleHQ6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogLSBkZXNjIG1pbmltdW0gdGV4dCBsZW5ndGggaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAgICogQG5hbWUgbWluaW11bVRleHRMZW5ndGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWluaW11bVRleHRMZW5ndGggPSBuZXcgZGVmYXVsdHMoKS5taW5pbXVtVGV4dExlbmd0aDtcblxuICAgIC8qKlxuICAgICAqIC0gbnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgaW4gdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93blxuICAgICAqIEBuYW1lIGxpbWl0SXRlbXNUb1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsaW1pdEl0ZW1zVG86IG51bWJlciA9IG5ldyBkZWZhdWx0cygpLmxpbWl0SXRlbXNUbztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc3BsYXlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5QnkgPSBuZXcgZGVmYXVsdHMoKS5kaXNwbGF5Qnk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlkZW50aWZ5QnkgPSBuZXcgZGVmYXVsdHMoKS5pZGVudGlmeUJ5O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGEgZnVuY3Rpb24gYSBkZXZlbG9wZXIgY2FuIHVzZSB0byBpbXBsZW1lbnQgY3VzdG9tIG1hdGNoaW5nIGZvciB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICogQG5hbWUgbWF0Y2hpbmdGblxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXRjaGluZ0ZuOiAodmFsdWU6IHN0cmluZywgdGFyZ2V0OiBUYWdNb2RlbCkgPT4gYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLm1hdGNoaW5nRm47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5ID0gbmV3IGRlZmF1bHRzKCkuYXBwZW5kVG9Cb2R5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2VlcE9wZW5cbiAgICAgKiBAZGVzY3JpcHRpb24gb3B0aW9uIHRvIGxlYXZlIGRyb3Bkb3duIG9wZW4gd2hlbiBhZGRpbmcgYSBuZXcgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwT3BlbiA9IG5ldyBkZWZhdWx0cygpLmtlZXBPcGVuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHluYW1pY1VwZGF0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljVXBkYXRlID0gbmV3IGRlZmF1bHRzKCkuZHluYW1pY1VwZGF0ZTtcblxuICAgIC8qKlxuICAgICogQG5hbWUgekluZGV4XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHpJbmRleCA9IG5ldyBkZWZhdWx0cygpLnpJbmRleDtcblxuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgaXRlbXMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQgKGZvciBhdXRvY29tcGxldGUpXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhZ0lucHV0XG4gICAgICovXG4gICAgcHVibGljIHRhZ0lucHV0OiBUYWdJbnB1dENvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRhZ0lucHV0Q29tcG9uZW50KTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIF9hdXRvY29tcGxldGVJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2F1dG9jb21wbGV0ZUl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYXV0b2NvbXBsZXRlSXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pIHtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlSXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIGl0ZW1zIHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldCBhdXRvY29tcGxldGVJdGVtcygpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9hdXRvY29tcGxldGVJdGVtcztcblxuICAgICAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ09uSW5pdFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkKCkuc3Vic2NyaWJlKChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QWRkaW5nKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXNldCBpdGVtc01hdGNoaW5nIGFycmF5IHdoZW4gdGhlIGRyb3Bkb3duIGlzIGhpZGRlblxuICAgICAgICB0aGlzLm9uSGlkZSgpLnN1YnNjcmliZSh0aGlzLnJlc2V0SXRlbXMpO1xuXG4gICAgICAgIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG4gICAgICAgIGNvbnN0IEtFRVBfT1BFTiA9IHRoaXMua2VlcE9wZW47XG5cbiAgICAgICAgdGhpcy50YWdJbnB1dFxuICAgICAgICAgICAgLm9uVGV4dENoYW5nZVxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChLRUVQX09QRU4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2hvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlUG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5tZW51LnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmR5bmFtaWNVcGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpOiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25IaWRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uSXRlbUNsaWNrZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZCgpOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSXRlbUNsaWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogTmcyTWVudUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBtYXhJdGVtc1JlYWNoZWQgPSB0aGlzLnRhZ0lucHV0Lml0ZW1zLmxlbmd0aCA9PT0gdGhpcy50YWdJbnB1dC5tYXhJdGVtcztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEZvcm1WYWx1ZSgpO1xuICAgICAgICBjb25zdCBoYXNNaW5pbXVtVGV4dCA9IHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy5taW5pbXVtVGV4dExlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHZhbHVlKTtcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaXNWaXNpYmxlID09PSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IHRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSAmJiBoYXNJdGVtcyAmJiAhdmFsdWU7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLnRhZ0lucHV0LmRpc2FibGU7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGlzSGlkZGVuICYmICgoaGFzSXRlbXMgJiYgaGFzTWluaW11bVRleHQpIHx8IHNob3dEcm9wZG93bklmRW1wdHkpO1xuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5pc1Zpc2libGUgJiYgIWhhc0l0ZW1zO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZU9ic2VydmFibGUgJiYgaGFzTWluaW11bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zRnJvbU9ic2VydmFibGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCghdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmICF2YWx1ZSkgfHwgbWF4SXRlbXNSZWFjaGVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnNob3cocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uV2luZG93Qmx1clxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcbiAgICBwdWJsaWMgb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRGb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnRhZ0lucHV0LmZvcm1WYWx1ZTtcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZSA/IGZvcm1WYWx1ZS50b1N0cmluZygpLnRyaW0oKSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNhbGN1bGF0ZVBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlcXVlc3RBZGRpbmdcbiAgICAgKiBAcGFyYW0gaXRlbSB7TmcyTWVudUl0ZW19XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0QWRkaW5nID0gYXN5bmMgKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnTW9kZWwoaXRlbSk7XG4gICAgICAgIGF3YWl0IHRoaXMudGFnSW5wdXQub25BZGRpbmdSZXF1ZXN0ZWQodHJ1ZSwgdGFnKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY3JlYXRlVGFnTW9kZWxcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlVGFnTW9kZWwoaXRlbTogTmcyTWVudUl0ZW0pOiBUYWdNb2RlbCB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnID8gaXRlbS52YWx1ZSA6IGl0ZW0udmFsdWVbdGhpcy5pZGVudGlmeUJ5XTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIFt0aGlzLnRhZ0lucHV0LmRpc3BsYXlCeV06IGRpc3BsYXksXG4gICAgICAgICAgICBbdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZTogc3RyaW5nKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgIXRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwZXNBbGxvd2VkID0gdGhpcy50YWdJbnB1dC5hbGxvd0R1cGVzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zLmZpbHRlcigoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gZHVwZXNBbGxvd2VkID8gZmFsc2UgOiB0aGlzLnRhZ0lucHV0LnRhZ3Muc29tZSh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSB0aGlzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0eXBlb2YgdGFnLm1vZGVsID09PSAnc3RyaW5nJyA/IHRhZy5tb2RlbCA6IHRhZy5tb2RlbFtpZGVudGlmeUJ5XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCA9PT0gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nRm4odmFsdWUsIGl0ZW0pICYmIChoYXNWYWx1ZSA9PT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0SXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLnNsaWNlKDAsIHRoaXMubGltaXRJdGVtc1RvIHx8IGl0ZW1zLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVzZXRJdGVtcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBvcHVsYXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVJdGVtcyhkYXRhOiBhbnkpOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJdGVtcyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnNldExvYWRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgLy8gaGlkZSBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gYWRkIGl0ZW1zXG4gICAgICAgICAgICAgICAgLnBvcHVsYXRlSXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHRleHQpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSh0ZXh0KVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sICgpID0+IHRoaXMuc2V0TG9hZGluZ1N0YXRlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0TG9hZGluZ1N0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy50YWdJbnB1dC5pc0xvYWRpbmcgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdGF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctcmlwcGxlJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctcmlwcGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLXJpcHBsZVwiIFtAaW5rXT1cInN0YXRlXCI+PC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2luaycsIFtcbiAgICAgICAgICAgIHN0YXRlKCdub25lJywgc3R5bGUoe3dpZHRoOiAwLCBvcGFjaXR5OiAwfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignbm9uZSA9PiBjbGlja2VkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLCB3aWR0aDogJzMwJScsIGJvcmRlclJhZGl1czogJzEwMCUnfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDAuNSwgd2lkdGg6ICc1MCUnfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjUsIG9mZnNldDogMSwgd2lkdGg6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAnMTZweCd9KVxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1JpcHBsZSB7XG4gICAgQElucHV0KCkgcHVibGljIHN0YXRlOiBzdHJpbmcgPSAnbm9uZSc7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFZpZXdDaGlsZCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhZ01vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hY2Nlc3Nvcic7XG5pbXBvcnQgeyBUYWdSaXBwbGUgfSBmcm9tICcuLi90YWcvdGFnLXJpcHBsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRMaWtlIH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXJzL2V2ZW50LWxpa2UnO1xuXG4vLyBtb2NraW5nIG5hdmlnYXRvclxuY29uc3QgbmF2aWdhdG9yID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubmF2aWdhdG9yIDoge1xuICAgIHVzZXJBZ2VudDogJ0Nocm9tZScsXG4gICAgdmVuZG9yOiAnR29vZ2xlIEluYydcbn07XG5cbmNvbnN0IGlzQ2hyb21lID0gL0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvR29vZ2xlIEluYy8udGVzdChuYXZpZ2F0b3IudmVuZG9yKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGFnXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWcudGVtcGxhdGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWctY29tcG9uZW50LnN0eWxlLnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBtb2RlbCB7VGFnTW9kZWx9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbW9kZWw6IFRhZ01vZGVsO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVtb3ZhYmxlIHtib29sZWFufVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlbW92YWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGVkaXRhYmxlIHtib29sZWFufVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGVkaXRhYmxlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGVtcGxhdGUge1RlbXBsYXRlUmVmPGFueT59XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5Qnkge3N0cmluZ31cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5Qnk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlkZW50aWZ5Qnkge3N0cmluZ31cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZGVudGlmeUJ5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbmRleCB7bnVtYmVyfVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYXNSaXBwbGVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNSaXBwbGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjYW5BZGRUYWdcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5BZGRUYWc6ICh0YWc6IFRhZ01vZGVsKSA9PiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25TZWxlY3RcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmVcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25CbHVyXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPFRhZ01vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleURvd25cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UYWdFZGl0ZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25UYWdFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVhZG9ubHkge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm1vZGVsICE9PSBcInN0cmluZ1wiICYmIHRoaXMubW9kZWwucmVhZG9ubHkgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZWRpdGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBlZGl0aW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtb3ZpbmdcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tb3ZpbmdcIilcbiAgICBwdWJsaWMgbW92aW5nOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmlwcGxlU3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmlwcGxlU3RhdGUgPSBcIm5vbmVcIjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJpcHBsZSB7VGFnUmlwcGxlfVxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoVGFnUmlwcGxlKVxuICAgIHB1YmxpYyByaXBwbGU6IFRhZ1JpcHBsZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdCgkZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRvbmx5IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0LmVtaXQodGhpcy5tb2RlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVtb3ZlXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBrZXlkb3duXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBrZXlkb3duKGV2ZW50OiBFdmVudExpa2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGluZykge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUVkaXRNb2RlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLmVtaXQoeyBldmVudCwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBibGlua1xuICAgICAqL1xuICAgIHB1YmxpYyBibGluaygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICBjbGFzc0xpc3QuYWRkKFwiYmxpbmtcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjbGFzc0xpc3QucmVtb3ZlKFwiYmxpbmtcIiksIDUwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0b2dnbGVFZGl0TW9kZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRpbmcgPyB1bmRlZmluZWQgOiB0aGlzLmFjdGl2YXRlRWRpdE1vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQmx1cnJlZFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXJyZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyBDaGVja3MgaWYgaXQgaXMgZWRpdGFibGUgZmlyc3QgYmVmb3JlIGhhbmRlbGluZyB0aGUgb25CbHVycmVkIGV2ZW50IGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAgICAgLy8gYSBidWcgaW4gSUUgd2hlcmUgdGFncyBhcmUgc3RpbGwgZWRpdGFibGUgd2l0aCBvbmx5RnJvbUF1dG9jb21wbGV0ZSBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzYWJsZUVkaXRNb2RlKCk7XG5cbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5tb2RlbCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgICAgICA6IHsgLi4udGhpcy5tb2RlbCwgW3RoaXMuZGlzcGxheUJ5XTogdmFsdWUgfTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0RGlzcGxheVZhbHVlXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzcGxheVZhbHVlKGl0ZW06IFRhZ01vZGVsKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiID8gaXRlbSA6IGl0ZW1bdGhpcy5kaXNwbGF5QnldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjIHJldHVybnMgd2hldGhlciB0aGUgcmlwcGxlIGlzIHZpc2libGUgb3Igbm90XG4gICAgICogb25seSB3b3JrcyBpbiBDaHJvbWVcbiAgICAgKiBAbmFtZSBpc1JpcHBsZVZpc2libGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzUmlwcGxlVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnJlYWRvbmx5ICYmICF0aGlzLmVkaXRpbmcgJiYgaXNDaHJvbWUgJiYgdGhpcy5oYXNSaXBwbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZUVkaXRNb2RlXG4gICAgICogQHBhcmFtICRldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNhYmxlRWRpdE1vZGUoJGV2ZW50PzogRXZlbnRMaWtlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldENvbnRlbnRFZGl0YWJsZVRleHQoKTtcblxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShcInRhZy0tZWRpdGluZ1wiKTtcblxuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFZGl0YWJsZVRleHQodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3JlTmV3VmFsdWUoaW5wdXQpO1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzRGVsZXRlSWNvblZpc2libGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEZWxldGVJY29uVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLnJlYWRvbmx5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMucmVtb3ZhYmxlICYmICF0aGlzLmVkaXRpbmdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250ZW50RWRpdGFibGVUZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDb250ZW50RWRpdGFibGVUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDb250ZW50RWRpdGFibGUoKTtcblxuICAgICAgICByZXR1cm4gaW5wdXQgPyBpbnB1dC5pbm5lclRleHQudHJpbSgpIDogXCJcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRDb250ZW50RWRpdGFibGVUZXh0XG4gICAgICogQHBhcmFtIG1vZGVsXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRDb250ZW50RWRpdGFibGVUZXh0KG1vZGVsOiBUYWdNb2RlbCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q29udGVudEVkaXRhYmxlKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUobW9kZWwpO1xuXG4gICAgICAgIGlucHV0LmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lXG4gICAgICovXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZUVkaXRNb2RlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3RhZy0tZWRpdGluZycpO1xuXG4gICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc3RvcmVOZXdWYWx1ZVxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcmVOZXdWYWx1ZShpbnB1dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV4aXN0cyA9ICh0YWc6IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRhZyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHRhZyA9PT0gaW5wdXRcbiAgICAgICAgICAgICAgICA6IHRhZ1t0aGlzLmRpc3BsYXlCeV0gPT09IGlucHV0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhc0lkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxbdGhpcy5pZGVudGlmeUJ5XSAhPT0gdGhpcy5tb2RlbFt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGNoYW5nZWQsIHJlcGxhY2UgdGhlIHZhbHVlIGluIHRoZSBtb2RlbFxuICAgICAgICBpZiAoZXhpc3RzKHRoaXMubW9kZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RlbCA9XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5tb2RlbCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGlucHV0XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgW3RoaXMuaWRlbnRpZnlCeV06IGhhc0lkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm1vZGVsW3RoaXMuaWRlbnRpZnlCeV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpbnB1dFxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jYW5BZGRUYWcobW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLm9uVGFnRWRpdGVkLmVtaXQoeyB0YWc6IG1vZGVsLCBpbmRleDogdGhpcy5pbmRleCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEVkaXRhYmxlVGV4dCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldENvbnRlbnRFZGl0YWJsZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29udGVudEVkaXRhYmxlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2NvbnRlbnRlZGl0YWJsZV0nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdGF0ZSxcbiAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKlxuICogQG5hbWUgYW5pbWF0aW9uc1xuICovXG5leHBvcnQgY29uc3QgYW5pbWF0aW9ucyA9IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb24nLCBbXG4gICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSkpLFxuICAgICAgICBzdGF0ZSgnb3V0Jywgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoXCJ7eyBlbnRlciB9fVwiLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDIwcHgpJ30pLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjMsIG9mZnNldDogMC4zLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAtMTBweCknfSksXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjUsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCknfSksXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNzUsIG9mZnNldDogMC43NSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgNXB4KSd9KSxcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJ30pXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgIGFuaW1hdGUoXCJ7eyBsZWF2ZSB9fVwiLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTE1cHgpJywgb2Zmc2V0OiAwLjd9KSxcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9mZnNldDogMS4wfSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICBdKVxuICAgIF0pXG5dO1xuIiwiLy8gYW5ndWxhclxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFJlbmRlcmVyMixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT25Jbml0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQXN5bmNWYWxpZGF0b3JGbixcbiAgICBGb3JtQ29udHJvbCxcbiAgICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBWYWxpZGF0b3JGblxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBmaXJzdH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBuZzItdGFnLWlucHV0XG5pbXBvcnQgeyBUYWdJbnB1dEFjY2Vzc29yLCBUYWdNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYWNjZXNzb3InO1xuaW1wb3J0IHsgbGlzdGVuIH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBEcmFnUHJvdmlkZXIsIERyYWdnZWRUYWcgfSBmcm9tICcuLi8uLi9jb3JlL3Byb3ZpZGVycy9kcmFnLXByb3ZpZGVyJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuXG5pbXBvcnQgeyBUYWdJbnB1dEZvcm0gfSBmcm9tICcuLi90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnSW5wdXREcm9wZG93biB9IGZyb20gJy4uL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFnL3RhZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCB7IFRhZ0lucHV0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2RlZmF1bHRzJztcblxuLy8gYW5ndWxhciB1bml2ZXJzYWwgaGFja3Ncbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuY29uc3QgRHJhZ0V2ZW50ID0gKHdpbmRvdyBhcyBhbnkpLkRyYWdFdmVudDtcblxuY29uc3QgQ1VTVE9NX0FDQ0VTU09SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhZ0lucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgZGVmYXVsdHM6IFR5cGU8VGFnSW5wdXRPcHRpb25zPiA9IGZvcndhcmRSZWYoKCkgPT4gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctaW5wdXQnLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9BQ0NFU1NPUl0sXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFnLWlucHV0LnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LnRlbXBsYXRlLmh0bWwnLFxuICAgIGFuaW1hdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBUYWdJbnB1dEFjY2Vzc29yIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXBhcmF0b3JLZXlzXG4gICAgICogQGRlc2Mga2V5Ym9hcmQga2V5cyB3aXRoIHdoaWNoIGEgdXNlciBjYW4gc2VwYXJhdGUgaXRlbXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VwYXJhdG9yS2V5czogc3RyaW5nW10gPSBuZXcgZGVmYXVsdHMoKS5zZXBhcmF0b3JLZXlzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VwYXJhdG9yS2V5Q29kZXNcbiAgICAgKiBAZGVzYyBrZXlib2FyZCBrZXkgY29kZXMgd2l0aCB3aGljaCBhIHVzZXIgY2FuIHNlcGFyYXRlIGl0ZW1zXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNlcGFyYXRvcktleUNvZGVzOiBudW1iZXJbXSA9IG5ldyBkZWZhdWx0cygpLnNlcGFyYXRvcktleUNvZGVzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcGxhY2Vob2xkZXJcbiAgICAgKiBAZGVzYyB0aGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0IHRleHRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnBsYWNlaG9sZGVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Vjb25kYXJ5UGxhY2Vob2xkZXJcbiAgICAgKiBAZGVzYyBwbGFjZWhvbGRlciB0byBhcHBlYXIgd2hlbiB0aGUgaW5wdXQgaXMgZW1wdHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnNlY29uZGFyeVBsYWNlaG9sZGVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWF4SXRlbXNcbiAgICAgKiBAZGVzYyBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0aGF0IGNhbiBiZSBhZGRlZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhJdGVtczogbnVtYmVyID0gbmV3IGRlZmF1bHRzKCkubWF4SXRlbXM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB2YWxpZGF0b3JzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgVmFsaWRhdG9ycyB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IG5ldyBkZWZhdWx0cygpLnZhbGlkYXRvcnM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBuZXcgZGVmYXVsdHMoKS5hc3luY1ZhbGlkYXRvcnM7XG5cbiAgICAvKipcbiAgICAqIC0gaWYgc2V0IHRvIHRydWUsIGl0IHdpbGwgb25seSBwb3NzaWJsZSB0byBhZGQgaXRlbXMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlXG4gICAgKiBAbmFtZSBvbmx5RnJvbUF1dG9jb21wbGV0ZVxuICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9ubHlGcm9tQXV0b2NvbXBsZXRlID0gbmV3IGRlZmF1bHRzKCkub25seUZyb21BdXRvY29tcGxldGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlcnJvck1lc3NhZ2VzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBuZXcgZGVmYXVsdHMoKS5lcnJvck1lc3NhZ2VzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGhlbWVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGhlbWU6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnRoZW1lO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UZXh0Q2hhbmdlRGVib3VuY2VcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25UZXh0Q2hhbmdlRGVib3VuY2UgPSBuZXcgZGVmYXVsdHMoKS5vblRleHRDaGFuZ2VEZWJvdW5jZTtcblxuICAgIC8qKlxuICAgICAqIC0gY3VzdG9tIGlkIGFzc2lnbmVkIHRvIHRoZSBpbnB1dFxuICAgICAqIEBuYW1lIGlkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlucHV0SWQgPSBuZXcgZGVmYXVsdHMoKS5pbnB1dElkO1xuXG4gICAgLyoqXG4gICAgICogLSBjdXN0b20gY2xhc3MgYXNzaWduZWQgdG8gdGhlIGlucHV0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLmlucHV0Q2xhc3M7XG5cbiAgICAvKipcbiAgICAgKiAtIG9wdGlvbiB0byBjbGVhciB0ZXh0IGlucHV0IHdoZW4gdGhlIGZvcm0gaXMgYmx1cnJlZFxuICAgICAqIEBuYW1lIGNsZWFyT25CbHVyXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNsZWFyT25CbHVyOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuY2xlYXJPbkJsdXI7XG5cbiAgICAvKipcbiAgICAgKiAtIGhpZGVGb3JtXG4gICAgICogQG5hbWUgY2xlYXJPbkJsdXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZUZvcm06IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5oaWRlRm9ybTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZE9uQmx1clxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhZGRPbkJsdXI6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5hZGRPbkJsdXI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhZGRPblBhc3RlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFkZE9uUGFzdGU6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5hZGRPblBhc3RlO1xuXG4gICAgLyoqXG4gICAgICogLSBwYXR0ZXJuIHVzZWQgd2l0aCB0aGUgbmF0aXZlIG1ldGhvZCBzcGxpdCgpIHRvIHNlcGFyYXRlIHBhdHRlcm5zIGluIHRoZSBzdHJpbmcgcGFzdGVkXG4gICAgICogQG5hbWUgcGFzdGVTcGxpdFBhdHRlcm5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGFzdGVTcGxpdFBhdHRlcm4gPSBuZXcgZGVmYXVsdHMoKS5wYXN0ZVNwbGl0UGF0dGVybjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsaW5rSWZEdXBlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGJsaW5rSWZEdXBlID0gbmV3IGRlZmF1bHRzKCkuYmxpbmtJZkR1cGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByZW1vdmFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmVtb3ZhYmxlID0gbmV3IGRlZmF1bHRzKCkucmVtb3ZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZWRpdGFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5lZGl0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFsbG93RHVwZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dEdXBlcyA9IG5ldyBkZWZhdWx0cygpLmFsbG93RHVwZXM7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBuZXdseSBhZGRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgYXMgc3RyaW5ncywgYW5kIG5vdCBvYmplY3RzXG4gICAgICogQG5hbWUgbW9kZWxBc1N0cmluZ3NcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kZWxBc1N0cmluZ3MgPSBuZXcgZGVmYXVsdHMoKS5tb2RlbEFzU3RyaW5ncztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRyaW1UYWdzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRyaW1UYWdzID0gbmV3IGRlZmF1bHRzKCkudHJpbVRhZ3M7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0IGlucHV0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFRleHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByaXBwbGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmlwcGxlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkucmlwcGxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGFiaW5kZXhcbiAgICAgKiBAZGVzYyBwYXNzIHRocm91Z2ggdGhlIHNwZWNpZmllZCB0YWJpbmRleCB0byB0aGUgaW5wdXRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiaW5kZXg6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnRhYkluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuZGlzYWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRyYWdab25lXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRyYWdab25lOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS5kcmFnWm9uZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZpbmdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25SZW1vdmluZyA9IG5ldyBkZWZhdWx0cygpLm9uUmVtb3Zpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZGluZ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkFkZGluZyA9IG5ldyBkZWZhdWx0cygpLm9uQWRkaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0aW9uRHVyYXRpb24gPSBuZXcgZGVmYXVsdHMoKS5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQWRkXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIGFkZGluZyBhIG5ldyBpdGVtXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblJlbW92ZVxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiByZW1vdmluZyBhbiBleGlzdGluZyBpdGVtXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblNlbGVjdFxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiBzZWxlY3RpbmcgYW4gaXRlbVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25Gb2N1c1xuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25Gb2N1c1xuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRleHRDaGFuZ2VcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiAtIG91dHB1dCB0cmlnZ2VyZWQgd2hlbiB0ZXh0IGlzIHBhc3RlZCBpbiB0aGUgZm9ybVxuICAgICAqIEBuYW1lIG9uUGFzdGVcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUGFzdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8qKlxuICAgICAqIC0gb3V0cHV0IHRyaWdnZXJlZCB3aGVuIHRhZyBlbnRlcmVkIGlzIG5vdCB2YWxpZFxuICAgICAqIEBuYW1lIG9uVmFsaWRhdGlvbkVycm9yXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblZhbGlkYXRpb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiAtIG91dHB1dCB0cmlnZ2VyZWQgd2hlbiB0YWcgaXMgZWRpdGVkXG4gICAgICogQG5hbWUgb25UYWdFZGl0ZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVGFnRWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRyb3Bkb3duXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChUYWdJbnB1dERyb3Bkb3duKSBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0ZW1wbGF0ZVxuICAgICAqIEBkZXNjIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUgaWYgcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKFRlbXBsYXRlUmVmLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KSBwdWJsaWMgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dEZvcm1cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFRhZ0lucHV0Rm9ybSkgcHVibGljIGlucHV0Rm9ybTogVGFnSW5wdXRGb3JtO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRUYWdcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgdGFnXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGVkVGFnOiBUYWdNb2RlbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzTG9hZGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHVibGljIHNldCBpbnB1dFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0VmFsdWUgPSB0ZXh0O1xuICAgICAgICB0aGlzLmlucHV0VGV4dENoYW5nZS5lbWl0KHRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhZ3NcbiAgICAgKiBAZGVzYyBsaXN0IG9mIEVsZW1lbnQgaXRlbXNcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKFRhZ0NvbXBvbmVudCkgcHVibGljIHRhZ3M6IFF1ZXJ5TGlzdDxUYWdDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbGlzdGVuZXJzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgZXZlbnRzIHRoYXQgZ2V0IGZpcmVkIHVzaW5nIEBmaXJlRXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIFtjb25zdGFudHMuS0VZRE9XTl06IDx7IChmdW4pOiBhbnkgfVtdPltdLFxuICAgICAgICBbY29uc3RhbnRzLktFWVVQXTogPHsgKGZ1bik6IGFueSB9W10+W11cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGVtaXR0ZXIgZm9yIHRoZSAyLXdheSBkYXRhIGJpbmRpbmcgaW5wdXRUZXh0IHZhbHVlXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHByaXZhdGUgdmFyaWFibGUgdG8gYmluZCBnZXQvc2V0XG4gICAgICogQG5hbWUgaW5wdXRUZXh0VmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5wdXRUZXh0VmFsdWUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBkZXNjIHJlbW92ZXMgdGhlIHRhYiBpbmRleCBpZiBpdCBpcyBzZXQgLSBpdCB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBpbnB1dFxuICAgICAqIEBuYW1lIHRhYmluZGV4QXR0clxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIGdldCB0YWJpbmRleEF0dHIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXggIT09ICcnID8gJy0xJyA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFuaW1hdGlvbk1ldGFkYXRhXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbk1ldGFkYXRhOiB7IHZhbHVlOiBzdHJpbmcsIHBhcmFtczogb2JqZWN0IH07XG5cbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgcHVibGljIGlzUHJvZ3Jlc3NCYXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZHJhZ1Byb3ZpZGVyOiBEcmFnUHJvdmlkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ0FmdGVyVmlld0luaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgbGlzdGVuZXJzXG5cbiAgICAgICAgdGhpcy5zZXRVcEtleXByZXNzTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5zZXRVcElucHV0S2V5ZG93bkxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uVGV4dENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwVGV4dENoYW5nZVN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsZWFyIG9uIGJsdXIgaXMgc2V0IHRvIHRydWUsIHN1YnNjcmliZSB0byB0aGUgZXZlbnQgYW5kIGNsZWFyIHRoZSB0ZXh0J3MgZm9ybVxuICAgICAgICBpZiAodGhpcy5jbGVhck9uQmx1ciB8fCB0aGlzLmFkZE9uQmx1cikge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uQmx1clN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFkZE9uUGFzdGUgaXMgc2V0IHRvIHRydWUsIHJlZ2lzdGVyIHRoZSBoYW5kbGVyIGFuZCBhZGQgaXRlbXNcbiAgICAgICAgaWYgKHRoaXMuYWRkT25QYXN0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uUGFzdGVMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzQ2hhbmdlcyQgPSB0aGlzLmlucHV0Rm9ybS5mb3JtLnN0YXR1c0NoYW5nZXM7XG5cbiAgICAgICAgc3RhdHVzQ2hhbmdlcyQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoc3RhdHVzOiBzdHJpbmcpID0+IHN0YXR1cyAhPT0gJ1BFTkRJTkcnKVxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuaW5wdXRGb3JtLmdldEVycm9yTWVzc2FnZXModGhpcy5lcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pc1Byb2dyZXNzQmFyVmlzaWJsZSQgPSBzdGF0dXNDaGFuZ2VzJC5waXBlKFxuICAgICAgICAgICAgbWFwKChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXMgPT09ICdQRU5ESU5HJyB8fCB0aGlzLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgaGlkZUZvcm0gaXMgc2V0IHRvIHRydWUsIHJlbW92ZSB0aGUgaW5wdXRcbiAgICAgICAgaWYgKHRoaXMuaGlkZUZvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb3JtLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG5nT25Jbml0XG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNwZWNpZmllZCBpbiB0aGUgbW9kZWwgaXMgPiBvZiB0aGUgdmFsdWUgb2YgbWF4SXRlbXNcbiAgICAgICAgLy8gZGVncmFkZSBncmFjZWZ1bGx5IGFuZCBsZXQgdGhlIG1heCBudW1iZXIgb2YgaXRlbXMgdG8gYmUgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbW9kZWxcbiAgICAgICAgLy8gdGhvdWdoLCB3YXJuIHRoZSB1c2VyLlxuICAgICAgICBjb25zdCBoYXNSZWFjaGVkTWF4SXRlbXMgPSB0aGlzLm1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID4gdGhpcy5tYXhJdGVtcztcblxuICAgICAgICBpZiAoaGFzUmVhY2hlZE1heEl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLm1heEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oY29uc3RhbnRzLk1BWF9JVEVNU19XQVJOSU5HKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHRpbmcgZWRpdGFibGUgdG8gZmFsc2UgdG8gZml4IHByb2JsZW0gd2l0aCB0YWdzIGluIElFIHN0aWxsIGJlaW5nIGVkaXRhYmxlIHdoZW5cbiAgICAgICAgLy8gb25seUZyb21BdXRvY29tcGxldGUgaXMgdHJ1ZVxuICAgICAgICB0aGlzLmVkaXRhYmxlID0gdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZSA/IGZhbHNlIDogdGhpcy5lZGl0YWJsZTtcblxuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbk1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmVSZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0gdGFnXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlUmVxdWVzdGVkKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiBQcm9taXNlPFRhZ01vZGVsPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZUZuID0gKG1vZGVsOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShtb2RlbCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGFnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25SZW1vdmluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlbW92aW5nKHRhZylcbiAgICAgICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVGbikgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZGluZ1JlcXVlc3RlZFxuICAgICAqIEBwYXJhbSBmcm9tQXV0b2NvbXBsZXRlIHtib29sZWFufVxuICAgICAqIEBwYXJhbSB0YWcge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkFkZGluZ1JlcXVlc3RlZChmcm9tQXV0b2NvbXBsZXRlOiBib29sZWFuLCB0YWc6IFRhZ01vZGVsLCBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlRm4gPSAobW9kZWw6IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZEl0ZW0oZnJvbUF1dG9jb21wbGV0ZSwgbW9kZWwsIGluZGV4LCBnaXZldXBGb2N1cylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFkZGluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFkZGluZyh0YWcpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sIHJlamVjdCkgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUYWdcbiAgICAgKiBAcGFyYW0gdGFnIHtUYWdNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwZW5kVGFnID0gKHRhZzogVGFnTW9kZWwsIGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxBc1N0cmluZ3MgPyB0YWdbdGhpcy5pZGVudGlmeUJ5XSA6IHRhZztcblxuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgICAgLi4uaXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAuLi5pdGVtcy5zbGljZShpbmRleCwgaXRlbXMubGVuZ3RoKVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNyZWF0ZVRhZ1xuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVUYWcgPSAobW9kZWw6IFRhZ01vZGVsKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICBjb25zdCB0cmltID0gKHZhbDogVGFnTW9kZWwsIGtleTogc3RyaW5nKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnRyaW0oKSA6IHZhbFtrZXldO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50eXBlb2YgbW9kZWwgIT09ICdzdHJpbmcnID8gbW9kZWwgOiB7fSxcbiAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IHRoaXMudHJpbVRhZ3MgPyB0cmltKG1vZGVsLCB0aGlzLmRpc3BsYXlCeSkgOiBtb2RlbCxcbiAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiB0aGlzLnRyaW1UYWdzID8gdHJpbShtb2RlbCwgdGhpcy5pZGVudGlmeUJ5KSA6IG1vZGVsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0SXRlbVxuICAgICAqIEBkZXNjIHNlbGVjdHMgaXRlbSBwYXNzZWQgYXMgcGFyYW1ldGVyIGFzIHRoZSBzZWxlY3RlZCB0YWdcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBlbWl0XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogVGFnTW9kZWwgfCB1bmRlZmluZWQsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzUmVhZG9ubHkgPSBpdGVtICYmIHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJyAmJiBpdGVtLnJlYWRvbmx5O1xuXG4gICAgICAgIGlmIChpc1JlYWRvbmx5IHx8IHRoaXMuc2VsZWN0ZWRUYWcgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSBpdGVtO1xuXG4gICAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmaXJlRXZlbnRzXG4gICAgICogQGRlc2MgZ29lcyB0aHJvdWdoIHRoZSBsaXN0IG9mIHRoZSBldmVudHMgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lLCBhbmQgZmlyZXMgZWFjaCBvZiB0aGVtXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyZUV2ZW50cyhldmVudE5hbWU6IHN0cmluZywgJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIuY2FsbCh0aGlzLCAkZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlkb3duXG4gICAgICogQGRlc2MgaGFuZGxlcyBhY3Rpb24gd2hlbiB0aGUgdXNlciBoaXRzIGEga2V5Ym9hcmQga2V5XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5ZG93bihkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkYXRhLmV2ZW50O1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5IHx8IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29uc3RhbnRzLktFWV9QUkVTU19BQ1RJT05TW2tleV0pIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5ERUxFVEU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWcgJiYgdGhpcy5yZW1vdmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmVSZXF1ZXN0ZWQodGhpcy5zZWxlY3RlZFRhZywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9QUkVWOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5QUkVWKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9ORVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5ORVhUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlRBQjpcbiAgICAgICAgICAgICAgICBpZiAoc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFRhZyhkYXRhLm1vZGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLlBSRVYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGFzdFRhZyhkYXRhLm1vZGVsKSAmJiAodGhpcy5kaXNhYmxlIHx8IHRoaXMubWF4SXRlbXNSZWFjaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLk5FWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3VyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9uRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJbnB1dFZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZywgZW1pdEV2ZW50ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGZvcm0gdmFsdWUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgaXRlbVxuICAgICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250cm9sXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRGb3JtLnZhbHVlIGFzIEZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICogQHBhcmFtIGFwcGx5Rm9jdXNcbiAgICAgKiBAcGFyYW0gZGlzcGxheUF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cyhhcHBseUZvY3VzID0gZmFsc2UsIGRpc3BsYXlBdXRvY29tcGxldGUgPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kcmFnUHJvdmlkZXIuZ2V0U3RhdGUoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoYXBwbHlGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEZvcm0uZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYXNFcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEZvcm0gJiYgdGhpcy5pbnB1dEZvcm0uaGFzRXJyb3JzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNJbnB1dEZvY3VzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJbnB1dEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Rm9ybSAmJiB0aGlzLmlucHV0Rm9ybS5pc0lucHV0Rm9jdXNlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gdGhpcyBpcyB0aGUgb25lIHdheSBJIGZvdW5kIHRvIHRlbGwgaWYgdGhlIHRlbXBsYXRlIGhhcyBiZWVuIHBhc3NlZCBhbmQgaXQgaXMgbm90XG4gICAgICogdGhlIHRlbXBsYXRlIGZvciB0aGUgbWVudSBpdGVtXG4gICAgICogQG5hbWUgaGFzQ3VzdG9tVGVtcGxhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzQ3VzdG9tVGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMgPyB0aGlzLnRlbXBsYXRlcy5maXJzdCA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgbWVudVRlbXBsYXRlID0gdGhpcy5kcm9wZG93biAmJiB0aGlzLmRyb3Bkb3duLnRlbXBsYXRlcyA/XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnRlbXBsYXRlcy5maXJzdCA6IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gQm9vbGVhbih0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSAhPT0gbWVudVRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtYXhJdGVtc1JlYWNoZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heEl0ZW1zUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4SXRlbXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5tYXhJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5pbnB1dEZvcm0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGZvcm0gPyBmb3JtLnZhbHVlIDogJyc7XG4gICAgfVxuXG4gICAgLyoqM1xuICAgICAqIEBuYW1lIG9uRHJhZ1N0YXJ0ZWRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnU3RhcnRlZChldmVudDogRHJhZ0V2ZW50LCB0YWc6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IHpvbmU6IHRoaXMuZHJhZ1pvbmUsIHRhZywgaW5kZXggfSBhcyBEcmFnZ2VkVGFnO1xuXG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFNlbmRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIuc2V0RHJhZ2dlZEl0ZW0oZXZlbnQsIGl0ZW0pO1xuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IHRydWUsIGluZGV4fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25EcmFnT3ZlclxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFN0YXRlKHtkcm9wcGluZzogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRSZWNlaXZlcih0aGlzKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRHJvcHBlZFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhZ0Ryb3BwZWQoZXZlbnQ6IERyYWdFdmVudCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZHJhZ1Byb3ZpZGVyLmdldERyYWdnZWRJdGVtKGV2ZW50KTtcblxuICAgICAgICBpZiAoIWl0ZW0gfHwgaXRlbS56b25lICE9PSB0aGlzLmRyYWdab25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5vblRhZ0Ryb3BwZWQoaXRlbS50YWcsIGl0ZW0uaW5kZXgsIGluZGV4KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0Ryb3BwaW5nXG4gICAgICovXG4gICAgcHVibGljIGlzRHJvcHBpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGlzUmVjZWl2ZXIgPSB0aGlzLmRyYWdQcm92aWRlci5yZWNlaXZlciA9PT0gdGhpcztcbiAgICAgICAgY29uc3QgaXNEcm9wcGluZyA9IHRoaXMuZHJhZ1Byb3ZpZGVyLmdldFN0YXRlKCdkcm9wcGluZycpO1xuXG4gICAgICAgIHJldHVybiBCb29sZWFuKGlzUmVjZWl2ZXIgJiYgaXNEcm9wcGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UYWdCbHVycmVkXG4gICAgICogQHBhcmFtIGNoYW5nZWRFbGVtZW50IHtUYWdNb2RlbH1cbiAgICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgb25UYWdCbHVycmVkKGNoYW5nZWRFbGVtZW50OiBUYWdNb2RlbCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGNoYW5nZWRFbGVtZW50O1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0cmFja0J5XG4gICAgICogQHBhcmFtIGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbTogVGFnTW9kZWwpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZUVkaXRlZFRhZ1xuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlRWRpdGVkVGFnKHt0YWcsIGluZGV4fToge3RhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXJ9KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UYWdFZGl0ZWQuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpc0Zyb21BdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNUYWdWYWxpZCA9ICh0YWc6IFRhZ01vZGVsLCBmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93biA/IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbURpc3BsYXkodGFnKS50cmltKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAmJiAhZnJvbUF1dG9jb21wbGV0ZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGUgPSB0aGlzLmZpbmREdXBlKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgLy8gaWYgc28sIGdpdmUgYSB2aXN1YWwgY3VlIGFuZCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RHVwZXMgJiYgZHVwZSAmJiB0aGlzLmJsaW5rSWZEdXBlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMudGFncy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLm1vZGVsKSA9PT0gdGhpcy5nZXRJdGVtVmFsdWUoZHVwZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuYmxpbmsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzRnJvbUF1dG9jb21wbGV0ZSA9IGZyb21BdXRvY29tcGxldGUgJiYgdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZTtcblxuICAgICAgICBjb25zdCBhc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLy8gMS4gdGhlcmUgbXVzdCBiZSBubyBkdXBlIE9SIGR1cGVzIGFyZSBhbGxvd2VkXG4gICAgICAgICAgICAhZHVwZSB8fCB0aGlzLmFsbG93RHVwZXMsXG5cbiAgICAgICAgICAgIC8vIDIuIGNoZWNrIG1heCBpdGVtcyBoYXMgbm90IGJlZW4gcmVhY2hlZFxuICAgICAgICAgICAgIXRoaXMubWF4SXRlbXNSZWFjaGVkLFxuXG4gICAgICAgICAgICAvLyAzLiBjaGVjayBpdGVtIGNvbWVzIGZyb20gYXV0b2NvbXBsZXRlIG9yIG9ubHlGcm9tQXV0b2NvbXBsZXRlIGlzIGZhbHNlXG4gICAgICAgICAgICAoKGlzRnJvbUF1dG9jb21wbGV0ZSkgfHwgIXRoaXMub25seUZyb21BdXRvY29tcGxldGUpXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGFzc2VydGlvbnMuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA9PT0gYXNzZXJ0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbW92ZVRvVGFnXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBtb3ZlVG9UYWcoaXRlbTogVGFnTW9kZWwsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9IHRoaXMuaXNMYXN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBpc0ZpcnN0ID0gdGhpcy5pc0ZpcnN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBzdG9wU3dpdGNoID0gKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLk5FWFQgJiYgaXNMYXN0KSB8fFxuICAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLlBSRVYgJiYgaXNGaXJzdCk7XG5cbiAgICAgICAgaWYgKHN0b3BTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBkaXJlY3Rpb24gPT09IGNvbnN0YW50cy5ORVhUID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0VGFnSW5kZXgoaXRlbSkgKyBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuZ2V0VGFnQXRJbmRleChpbmRleCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZy5zZWxlY3QuY2FsbCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzRmlyc3RUYWdcbiAgICAgKiBAcGFyYW0gaXRlbSB7VGFnTW9kZWx9XG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0ZpcnN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MuZmlyc3QubW9kZWwgPT09IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNMYXN0VGFnXG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNMYXN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MubGFzdC5tb2RlbCA9PT0gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdJbmRleFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdJbmRleChpdGVtOiBUYWdNb2RlbCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRhZ3MudG9BcnJheSgpO1xuXG4gICAgICAgIHJldHVybiB0YWdzLmZpbmRJbmRleCh0YWcgPT4gdGFnLm1vZGVsID09PSBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdBdEluZGV4XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMudGFncy50b0FycmF5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZ3NbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZUl0ZW1cbiAgICAgKiBAZGVzYyByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXkgb2YgdGhlIG1vZGVsXG4gICAgICogQHBhcmFtIHRhZyB7VGFnTW9kZWx9XG4gICAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZ2V0SXRlbXNXaXRob3V0KGluZGV4KTtcblxuICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlZCB0YWcgd2FzIHNlbGVjdGVkLCBzZXQgaXQgYXMgdW5kZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnID09PSB0YWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIGVtaXQgcmVtb3ZlIGV2ZW50XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZEl0ZW1cbiAgICAgKiBAZGVzYyBhZGRzIHRoZSBjdXJyZW50IHRleHQgbW9kZWwgdG8gdGhlIGl0ZW1zIGFycmF5XG4gICAgICogQHBhcmFtIGZyb21BdXRvY29tcGxldGUge2Jvb2xlYW59XG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSXRlbShmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UsIGl0ZW06IFRhZ01vZGVsLCBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5nZXRJdGVtRGlzcGxheShpdGVtKTtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWcoaXRlbSk7XG5cbiAgICAgICAgaWYgKGZyb21BdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLCB0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbmFtZSByZXNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZXNldCBjb250cm9sIGFuZCBmb2N1cyBpbnB1dFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2l2ZXVwRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1cyhmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGlzcGxheSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhcHBlbmRJdGVtID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFnKHRhZywgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZW1pdCBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMub25BZGQuZW1pdCh0YWcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnNob3dEcm9wZG93bklmRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5pbnB1dEZvcm0uZm9ybS5zdGF0dXM7XG4gICAgICAgICAgICBjb25zdCBpc1RhZ1ZhbGlkID0gdGhpcy5pc1RhZ1ZhbGlkKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9uVmFsaWRhdGlvbkVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRXJyb3IuZW1pdCh0YWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdWQUxJRCcgJiYgaXNUYWdWYWxpZCkge1xuICAgICAgICAgICAgICAgIGFwcGVuZEl0ZW0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ0lOVkFMSUQnIHx8ICFpc1RhZ1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25WYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ1BFTkRJTkcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVXBkYXRlJCA9IHRoaXMuaW5wdXRGb3JtLmZvcm0uc3RhdHVzQ2hhbmdlcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXNVcGRhdGUkXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHN0YXR1c1VwZGF0ZSA9PiBzdGF0dXNVcGRhdGUgIT09ICdQRU5ESU5HJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHVzVXBkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzVXBkYXRlID09PSAnVkFMSUQnICYmIGlzVGFnVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXR1cFNlcGFyYXRvcktleXNMaXN0ZW5lclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVzZVNlcGFyYXRvcktleXMgPSB0aGlzLnNlcGFyYXRvcktleUNvZGVzLmxlbmd0aCA+IDAgfHwgdGhpcy5zZXBhcmF0b3JLZXlzLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzS2V5Q29kZSA9IHRoaXMuc2VwYXJhdG9yS2V5Q29kZXMuaW5kZXhPZigkZXZlbnQua2V5Q29kZSkgPj0gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0tleSA9IHRoaXMuc2VwYXJhdG9yS2V5cy5pbmRleE9mKCRldmVudC5rZXkpID49IDA7XG4gICAgICAgICAgICAvLyB0aGUga2V5Q29kZSBvZiBrZXlkb3duIGV2ZW50IGlzIDIyOSB3aGVuIElNRSBpcyBwcm9jZXNzaW5nIHRoZSBrZXkgZXZlbnQuXG4gICAgICAgICAgICBjb25zdCBpc0lNRVByb2Nlc3NpbmcgPSAkZXZlbnQua2V5Q29kZSA9PT0gMjI5O1xuXG4gICAgICAgICAgICBpZiAoaGFzS2V5Q29kZSB8fCAoaGFzS2V5ICYmICFpc0lNRVByb2Nlc3NpbmcpKSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFkZGluZ1JlcXVlc3RlZChmYWxzZSwgdGhpcy5mb3JtVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuLmNhbGwodGhpcywgY29uc3RhbnRzLktFWURPV04sIGxpc3RlbmVyLCB1c2VTZXBhcmF0b3JLZXlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcEtleXByZXNzTGlzdGVuZXJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcEtleXByZXNzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgkZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29ycmVjdEtleSA9ICRldmVudC5rZXlDb2RlID09PSAzNyB8fCAkZXZlbnQua2V5Q29kZSA9PT0gODtcblxuICAgICAgICAgICAgaWYgKGlzQ29ycmVjdEtleSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmZvcm1WYWx1ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmxhc3Quc2VsZWN0LmNhbGwodGhpcy50YWdzLmxhc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldHRpbmcgdXAgdGhlIGtleXByZXNzIGxpc3RlbmVyc1xuICAgICAgICBsaXN0ZW4uY2FsbCh0aGlzLCBjb25zdGFudHMuS0VZRE9XTiwgbGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFVwS2V5ZG93bkxpc3RlbmVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VXBJbnB1dEtleWRvd25MaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRGb3JtLm9uS2V5ZG93bi5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnRzKCdrZXlkb3duJywgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLmZvcm1WYWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBPblBhc3RlTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwT25QYXN0ZUxpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRGb3JtLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gYXR0YWNoIGxpc3RlbmVyIHRvIGlucHV0XG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGlucHV0LCAncGFzdGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25QYXN0ZUNhbGxiYWNrKGV2ZW50KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcFRleHRDaGFuZ2VTdWJzY3JpYmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcFRleHRDaGFuZ2VTdWJzY3JpYmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Rm9ybS5mb3JtXG4gICAgICAgICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5vblRleHRDaGFuZ2VEZWJvdW5jZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiB7aXRlbTogc3RyaW5nfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25UZXh0Q2hhbmdlLmVtaXQodmFsdWUuaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcE9uQmx1clN1YnNjcmliZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwT25CbHVyU3Vic2NyaWJlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyRm4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSB0aGlzLmRyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24uaXNWaXNpYmxlO1xuICAgICAgICAgICAgcmV0dXJuICFpc1Zpc2libGUgJiYgISF0aGlzLmZvcm1WYWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlucHV0Rm9ybVxuICAgICAgICAgICAgLm9uQmx1clxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKGZpbHRlckZuKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB0aGlzLnNldElucHV0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkT25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZpbmREdXBlXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpc0Zyb21BdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGZpbmREdXBlKHRhZzogVGFnTW9kZWwsIGlzRnJvbUF1dG9jb21wbGV0ZTogYm9vbGVhbik6IFRhZ01vZGVsIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgaWRlbnRpZnlCeSA9IGlzRnJvbUF1dG9jb21wbGV0ZSA/IHRoaXMuZHJvcGRvd24uaWRlbnRpZnlCeSA6IHRoaXMuaWRlbnRpZnlCeTtcbiAgICAgICAgY29uc3QgaWQgPSB0YWdbaWRlbnRpZnlCeV07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IHRoaXMuZ2V0SXRlbVZhbHVlKGl0ZW0pID09PSBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25QYXN0ZUNhbGxiYWNrXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uUGFzdGVDYWxsYmFjayA9IGFzeW5jIChkYXRhOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpbnRlcmZhY2UgSUVXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICAgICAgICAgICAgY2xpcGJvYXJkRGF0YTogRGF0YVRyYW5zZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNJRSA9IEJvb2xlYW4oKHdpbmRvdyBhcyBJRVdpbmRvdykuY2xpcGJvYXJkRGF0YSk7XG4gICAgICAgICAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gaXNJRSA/IChcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIElFV2luZG93KS5jbGlwYm9hcmREYXRhXG4gICAgICAgICAgICApIDogZGF0YS5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGlzSUUgPyAnVGV4dCcgOiAndGV4dC9wbGFpbic7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGlwYm9hcmREYXRhLmdldERhdGEodHlwZSkgfHwgJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGdldFRleHQoKTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IHRleHRcbiAgICAgICAgICAgIC5zcGxpdCh0aGlzLnBhc3RlU3BsaXRQYXR0ZXJuKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmNyZWF0ZVRhZyhpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodGFnW3RoaXMuZGlzcGxheUJ5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRhZyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldElucHV0VmFsdWUoJycpLCA1MCk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwocmVxdWVzdHMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBhc3RlLmVtaXQodGV4dCk7XG4gICAgICAgICAgICByZXNldElucHV0KCk7XG4gICAgICAgfSlcbiAgICAgICAuY2F0Y2gocmVzZXRJbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0QW5pbWF0aW9uTWV0YWRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEFuaW1hdGlvbk1ldGFkYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk1ldGFkYXRhID0ge1xuICAgICAgICAgICAgdmFsdWU6ICdpbicsXG4gICAgICAgICAgICBwYXJhbXM6IHsuLi50aGlzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RlbGV0ZS1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pY29uLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZWxldGVJY29uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUsIENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2NvcmUvcGlwZXMvaGlnaGxpZ2h0LnBpcGUnO1xuaW1wb3J0IHsgRHJhZ1Byb3ZpZGVyIH0gZnJvbSAnLi9jb3JlL3Byb3ZpZGVycy9kcmFnLXByb3ZpZGVyJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciwgT3B0aW9ucyB9IGZyb20gJy4vY29yZS9wcm92aWRlcnMvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBUYWdJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IERlbGV0ZUljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uJztcbmltcG9ydCB7IFRhZ0lucHV0Rm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdSaXBwbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50JztcblxuY29uc3Qgb3B0aW9uc1Byb3ZpZGVyID0gbmV3IE9wdGlvbnNQcm92aWRlcigpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmcyRHJvcGRvd25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUYWdJbnB1dENvbXBvbmVudCxcbiAgICAgICAgRGVsZXRlSWNvbkNvbXBvbmVudCxcbiAgICAgICAgVGFnSW5wdXRGb3JtLFxuICAgICAgICBUYWdDb21wb25lbnQsXG4gICAgICAgIEhpZ2hsaWdodFBpcGUsXG4gICAgICAgIFRhZ0lucHV0RHJvcGRvd24sXG4gICAgICAgIFRhZ1JpcHBsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUYWdJbnB1dENvbXBvbmVudCxcbiAgICAgICAgRGVsZXRlSWNvbkNvbXBvbmVudCxcbiAgICAgICAgVGFnSW5wdXRGb3JtLFxuICAgICAgICBUYWdDb21wb25lbnQsXG4gICAgICAgIEhpZ2hsaWdodFBpcGUsXG4gICAgICAgIFRhZ0lucHV0RHJvcGRvd24sXG4gICAgICAgIFRhZ1JpcHBsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYWdQcm92aWRlcixcbiAgICAgICAgeyBwcm92aWRlOiBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgdXNlVmFsdWU6IGZhbHNlIH0sXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dE1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2l0aERlZmF1bHRzXG4gICAgICogQHBhcmFtIG9wdGlvbnMge09wdGlvbnN9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB3aXRoRGVmYXVsdHMob3B0aW9uczogT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBvcHRpb25zUHJvdmlkZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsic3RhdGUiLCJkZWZhdWx0cyIsImNvbnN0YW50cy5LRVlET1dOIiwiY29uc3RhbnRzLktFWVVQIiwiY29uc3RhbnRzLk1BWF9JVEVNU19XQVJOSU5HIiwiY29uc3RhbnRzLktFWV9QUkVTU19BQ1RJT05TIiwiY29uc3RhbnRzLkFDVElPTlNfS0VZUyIsImNvbnN0YW50cy5QUkVWIiwiY29uc3RhbnRzLk5FWFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO01BRU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQztNQUtsRCxhQUFhOzs7Ozs7O0lBTWYsU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElB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