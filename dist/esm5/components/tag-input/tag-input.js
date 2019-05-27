/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// angular
import { Component, forwardRef, HostBinding, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ContentChild, TemplateRef, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, map, first } from 'rxjs/operators';
// ng2-tag-input
import { TagInputAccessor } from '../../core/accessor';
import { listen } from '../../core/helpers/listen';
import * as constants from '../../core/constants';
import { DragProvider } from '../../core/providers/drag-provider';
import { OptionsProvider } from '../../core/providers/options-provider';
import { TagInputForm } from '../tag-input-form/tag-input-form.component';
import { TagInputDropdown } from '../dropdown/tag-input-dropdown.component';
import { TagComponent } from '../tag/tag.component';
import { animations } from './animations';
// angular universal hacks
/* tslint:disable-next-line */
/** @type {?} */
var DragEvent = ((/** @type {?} */ (window))).DragEvent;
/** @type {?} */
var CUSTOM_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TagInputComponent; }),
    multi: true
};
/** @type {?} */
var defaults = forwardRef(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _a;
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * \@name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = new defaults().separatorKeys;
        /**
         * \@name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = new defaults().separatorKeyCodes;
        /**
         * \@name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = new defaults().placeholder;
        /**
         * \@name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = new defaults().secondaryPlaceholder;
        /**
         * \@name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = new defaults().maxItems;
        /**
         * \@name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = new defaults().validators;
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = new defaults().asyncValidators;
        /**
         * - if set to true, it will only possible to add items from the autocomplete
         * \@name onlyFromAutocomplete
         */
        _this.onlyFromAutocomplete = new defaults().onlyFromAutocomplete;
        /**
         * \@name errorMessages
         */
        _this.errorMessages = new defaults().errorMessages;
        /**
         * \@name theme
         */
        _this.theme = new defaults().theme;
        /**
         * \@name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = new defaults().onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * \@name id
         */
        _this.inputId = new defaults().inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = new defaults().inputClass;
        /**
         * - option to clear text input when the form is blurred
         * \@name clearOnBlur
         */
        _this.clearOnBlur = new defaults().clearOnBlur;
        /**
         * - hideForm
         * \@name clearOnBlur
         */
        _this.hideForm = new defaults().hideForm;
        /**
         * \@name addOnBlur
         */
        _this.addOnBlur = new defaults().addOnBlur;
        /**
         * \@name addOnPaste
         */
        _this.addOnPaste = new defaults().addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * \@name pasteSplitPattern
         */
        _this.pasteSplitPattern = new defaults().pasteSplitPattern;
        /**
         * \@name blinkIfDupe
         */
        _this.blinkIfDupe = new defaults().blinkIfDupe;
        /**
         * \@name removable
         */
        _this.removable = new defaults().removable;
        /**
         * \@name editable
         */
        _this.editable = new defaults().editable;
        /**
         * \@name allowDupes
         */
        _this.allowDupes = new defaults().allowDupes;
        /**
         * \@description if set to true, the newly added tags will be added as strings, and not objects
         * \@name modelAsStrings
         */
        _this.modelAsStrings = new defaults().modelAsStrings;
        /**
         * \@name trimTags
         */
        _this.trimTags = new defaults().trimTags;
        /**
         * \@name ripple
         */
        _this.ripple = new defaults().ripple;
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = new defaults().tabIndex;
        /**
         * \@name disable
         */
        _this.disable = new defaults().disable;
        /**
         * \@name dragZone
         */
        _this.dragZone = new defaults().dragZone;
        /**
         * \@name onRemoving
         */
        _this.onRemoving = new defaults().onRemoving;
        /**
         * \@name onAdding
         */
        _this.onAdding = new defaults().onAdding;
        /**
         * \@name animationDuration
         */
        _this.animationDuration = new defaults().animationDuration;
        /**
         * \@name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new EventEmitter();
        /**
         * \@name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new EventEmitter();
        /**
         * \@name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new EventEmitter();
        /**
         * \@name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new EventEmitter();
        /**
         * \@name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new EventEmitter();
        /**
         * \@name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new EventEmitter();
        /**
         * - output triggered when text is pasted in the form
         * \@name onPaste
         */
        _this.onPaste = new EventEmitter();
        /**
         * - output triggered when tag entered is not valid
         * \@name onValidationError
         */
        _this.onValidationError = new EventEmitter();
        /**
         * - output triggered when tag is edited
         * \@name onTagEdited
         */
        _this.onTagEdited = new EventEmitter();
        /**
         * \@name isLoading
         */
        _this.isLoading = false;
        /**
         * \@name listeners
         * @desc array of events that get fired using \@fireEvents
         */
        _this.listeners = (_a = {},
            _a[constants.KEYDOWN] = (/** @type {?} */ ([])),
            _a[constants.KEYUP] = (/** @type {?} */ ([])),
            _a);
        /**
         * \@description emitter for the 2-way data binding inputText value
         * \@name inputTextChange
         */
        _this.inputTextChange = new EventEmitter();
        /**
         * \@description private variable to bind get/set
         * \@name inputTextValue
         */
        _this.inputTextValue = '';
        _this.errors = [];
        /**
         * \@name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            /** @type {?} */
            var items = _this.items;
            /** @type {?} */
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = tslib_1.__spread(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        /**
         * \@name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var _a;
            /** @type {?} */
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return tslib_1.__assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            /** @type {?} */
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            /** @type {?} */
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            /** @type {?} */
            var dupe = _this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                /** @type {?} */
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            /** @type {?} */
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            /** @type {?} */
            var assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || _this.allowDupes,
                // 2. check max items has not been reached
                !_this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * \@name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            /**
             * @record
             */
            function IEWindow() { }
            var getText, text, requests, resetInput;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (false) {
                    /** @type {?} */
                    IEWindow.prototype.clipboardData;
                }
                getText = function () {
                    /** @type {?} */
                    var isIE = Boolean(((/** @type {?} */ (window))).clipboardData);
                    /** @type {?} */
                    var clipboardData = isIE ? (((/** @type {?} */ (window))).clipboardData) : data.clipboardData;
                    /** @type {?} */
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    /** @type {?} */
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: /**
         * \@name inputText
         * @return {?}
         */
        function () {
            return this.inputTextValue;
        },
        /**
         * @name inputText
         * @param text
         */
        set: /**
         * \@name inputText
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */
        get: /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * \@name tabindexAttr
         * @return {?}
         */
        function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterViewInit
     */
    /**
     * \@name ngAfterViewInit
     * @return {?}
     */
    TagInputComponent.prototype.ngAfterViewInit = /**
     * \@name ngAfterViewInit
     * @return {?}
     */
    function () {
        // set up listeners
        var _this = this;
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
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(filter(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(map(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * @name ngOnInit
     */
    /**
     * \@name ngOnInit
     * @return {?}
     */
    TagInputComponent.prototype.ngOnInit = /**
     * \@name ngOnInit
     * @return {?}
     */
    function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        /** @type {?} */
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(constants.MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    /**
     * \@name onRemoveRequested
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onRemoveRequested = /**
     * \@name onRemoveRequested
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            /** @type {?} */
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(first())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    /**
     * \@name onAddingRequested
     * @param {?} fromAutocomplete {boolean}
     * @param {?} tag {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    TagInputComponent.prototype.onAddingRequested = /**
     * \@name onAddingRequested
     * @param {?} fromAutocomplete {boolean}
     * @param {?} tag {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    function (fromAutocomplete, tag, index, giveupFocus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /** @type {?} */
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(first())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    /**
     * \@name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param {?} item
     * @param {?=} emit
     * @return {?}
     */
    TagInputComponent.prototype.selectItem = /**
     * \@name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param {?} item
     * @param {?=} emit
     * @return {?}
     */
    function (item, emit) {
        if (emit === void 0) { emit = true; }
        /** @type {?} */
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    /**
     * \@name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param {?} eventName
     * @param {?=} $event
     * @return {?}
     */
    TagInputComponent.prototype.fireEvents = /**
     * \@name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param {?} eventName
     * @param {?=} $event
     * @return {?}
     */
    function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    /**
     * \@name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param {?} data
     * @return {?}
     */
    TagInputComponent.prototype.handleKeydown = /**
     * \@name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var event = data.event;
        /** @type {?} */
        var key = event.keyCode || event.which;
        /** @type {?} */
        var shiftKey = event.shiftKey || false;
        switch (constants.KEY_PRESS_ACTIONS[key]) {
            case constants.ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    /** @type {?} */
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case constants.ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, constants.PREV);
                break;
            case constants.ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, constants.NEXT);
                break;
            case constants.ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, constants.PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, constants.NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.onFormSubmit = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @name setInputValue
     * @param value
     */
    /**
     * \@name setInputValue
     * @param {?} value
     * @param {?=} emitEvent
     * @return {?}
     */
    TagInputComponent.prototype.setInputValue = /**
     * \@name setInputValue
     * @param {?} value
     * @param {?=} emitEvent
     * @return {?}
     */
    function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        /** @type {?} */
        var control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent: emitEvent });
    };
    /**
     * @name getControl
     */
    /**
     * \@name getControl
     * @return {?}
     */
    TagInputComponent.prototype.getControl = /**
     * \@name getControl
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.inputForm.value));
    };
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    /**
     * \@name focus
     * @param {?=} applyFocus
     * @param {?=} displayAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.focus = /**
     * \@name focus
     * @param {?=} applyFocus
     * @param {?=} displayAutocomplete
     * @return {?}
     */
    function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * @name blur
     */
    /**
     * \@name blur
     * @return {?}
     */
    TagInputComponent.prototype.blur = /**
     * \@name blur
     * @return {?}
     */
    function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * @name hasErrors
     */
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputComponent.prototype.hasErrors = /**
     * \@name hasErrors
     * @return {?}
     */
    function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * @name isInputFocused
     */
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputComponent.prototype.isInputFocused = /**
     * \@name isInputFocused
     * @return {?}
     */
    function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * \@name hasCustomTemplate
     * @return {?}
     */
    TagInputComponent.prototype.hasCustomTemplate = /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * \@name hasCustomTemplate
     * @return {?}
     */
    function () {
        /** @type {?} */
        var template = this.templates ? this.templates.first : undefined;
        /** @type {?} */
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * @name maxItemsReached
         */
        get: /**
         * \@name maxItemsReached
         * @return {?}
         */
        function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * @name formValue
         */
        get: /**
         * \@name formValue
         * @return {?}
         */
        function () {
            /** @type {?} */
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    /**
     * 3
     * \@name onDragStarted
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragStarted = /**
     * 3
     * \@name onDragStarted
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    function (event, tag, index) {
        event.stopPropagation();
        /** @type {?} */
        var item = (/** @type {?} */ ({ zone: this.dragZone, tag: tag, index: index }));
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * @name onDragOver
     * @param event
     */
    /**
     * \@name onDragOver
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragOver = /**
     * \@name onDragOver
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    /**
     * \@name onTagDropped
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onTagDropped = /**
     * \@name onTagDropped
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @name isDropping
     */
    /**
     * \@name isDropping
     * @return {?}
     */
    TagInputComponent.prototype.isDropping = /**
     * \@name isDropping
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isReceiver = this.dragProvider.receiver === this;
        /** @type {?} */
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    /**
     * \@name onTagBlurred
     * @param {?} changedElement {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.onTagBlurred = /**
     * \@name onTagBlurred
     * @param {?} changedElement {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * @name trackBy
     * @param items
     */
    /**
     * \@name trackBy
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.trackBy = /**
     * \@name trackBy
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item[this.identifyBy];
    };
    /**
     * @name updateEditedTag
     * @param tag
     */
    /**
     * \@name updateEditedTag
     * @param {?} __0
     * @return {?}
     */
    TagInputComponent.prototype.updateEditedTag = /**
     * \@name updateEditedTag
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var tag = _a.tag, index = _a.index;
        this.onTagEdited.emit(tag);
    };
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    /**
     * \@name moveToTag
     * @param {?} item
     * @param {?} direction
     * @return {?}
     */
    TagInputComponent.prototype.moveToTag = /**
     * \@name moveToTag
     * @param {?} item
     * @param {?} direction
     * @return {?}
     */
    function (item, direction) {
        /** @type {?} */
        var isLast = this.isLastTag(item);
        /** @type {?} */
        var isFirst = this.isFirstTag(item);
        /** @type {?} */
        var stopSwitch = (direction === constants.NEXT && isLast) ||
            (direction === constants.PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        /** @type {?} */
        var offset = direction === constants.NEXT ? 1 : -1;
        /** @type {?} */
        var index = this.getTagIndex(item) + offset;
        /** @type {?} */
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    /**
     * \@name isFirstTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    TagInputComponent.prototype.isFirstTag = /**
     * \@name isFirstTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    function (item) {
        return this.tags.first.model === item;
    };
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    /**
     * \@name isLastTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    TagInputComponent.prototype.isLastTag = /**
     * \@name isLastTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    function (item) {
        return this.tags.last.model === item;
    };
    /**
     * @name getTagIndex
     * @param item
     */
    /**
     * \@name getTagIndex
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.getTagIndex = /**
     * \@name getTagIndex
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * @name getTagAtIndex
     * @param index
     */
    /**
     * \@name getTagAtIndex
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.getTagAtIndex = /**
     * \@name getTagAtIndex
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    /**
     * \@name removeItem
     * @desc removes an item from the array of the model
     * @param {?} tag {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.removeItem = /**
     * \@name removeItem
     * @desc removes an item from the array of the model
     * @param {?} tag {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete {boolean}
     * @param item {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    /**
     * \@name addItem
     * @desc adds the current text model to the items array
     * @param {?=} fromAutocomplete {boolean}
     * @param {?=} item {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    TagInputComponent.prototype.addItem = /**
     * \@name addItem
     * @desc adds the current text model to the items array
     * @param {?=} fromAutocomplete {boolean}
     * @param {?=} item {TagModel}
     * @param {?=} index
     * @param {?=} giveupFocus
     * @return {?}
     */
    function (fromAutocomplete, item, index, giveupFocus) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        /** @type {?} */
        var display = this.getItemDisplay(item);
        /** @type {?} */
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            /**
             * \@name reset
             * @type {?}
             */
            var reset = function () {
                // reset control and focus input
                _this.setInputValue('');
                if (giveupFocus) {
                    _this.focus(false, false);
                }
                else {
                    // focus input
                    _this.focus(true, false);
                }
                resolve(display);
            };
            /** @type {?} */
            var appendItem = function () {
                _this.appendTag(tag, index);
                // emit event
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            /** @type {?} */
            var status = _this.inputForm.form.status;
            /** @type {?} */
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            /** @type {?} */
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
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
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(filter(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), first())
                    .subscribe(function (statusUpdate) {
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
    };
    /**
     * @name setupSeparatorKeysListener
     */
    /**
     * \@name setupSeparatorKeysListener
     * @return {?}
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = /**
     * \@name setupSeparatorKeysListener
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        /** @type {?} */
        var listener = function ($event) {
            /** @type {?} */
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            /** @type {?} */
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            /** @type {?} */
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, constants.KEYDOWN, listener, useSeparatorKeys);
    };
    /**
     * @name setUpKeypressListeners
     */
    /**
     * \@name setUpKeypressListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpKeypressListeners = /**
     * \@name setUpKeypressListeners
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listener = function ($event) {
            /** @type {?} */
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, constants.KEYDOWN, listener);
    };
    /**
     * @name setUpKeydownListeners
     */
    /**
     * \@name setUpKeydownListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = /**
     * \@name setUpKeydownListeners
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * @name setUpOnPasteListener
     */
    /**
     * \@name setUpOnPasteListener
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnPasteListener = /**
     * \@name setUpOnPasteListener
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    /**
     * @name setUpTextChangeSubscriber
     */
    /**
     * \@name setUpTextChangeSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = /**
     * \@name setUpTextChangeSubscriber
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(debounceTime(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    /**
     * @name setUpOnBlurSubscriber
     */
    /**
     * \@name setUpOnBlurSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = /**
     * \@name setUpOnBlurSubscriber
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var filterFn = function () {
            /** @type {?} */
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(debounceTime(100), filter(filterFn))
            .subscribe(function () {
            /** @type {?} */
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    /**
     * \@name findDupe
     * @param {?} tag
     * @param {?} isFromAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.findDupe = /**
     * \@name findDupe
     * @param {?} tag
     * @param {?} isFromAutocomplete
     * @return {?}
     */
    function (tag, isFromAutocomplete) {
        var _this = this;
        /** @type {?} */
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        /** @type {?} */
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * @name setAnimationMetadata
     */
    /**
     * \@name setAnimationMetadata
     * @return {?}
     */
    TagInputComponent.prototype.setAnimationMetadata = /**
     * \@name setAnimationMetadata
     * @return {?}
     */
    function () {
        this.animationMetadata = {
            value: 'in',
            params: tslib_1.__assign({}, this.animationDuration)
        };
    };
    TagInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tag-input',
                    providers: [CUSTOM_ACCESSOR],
                    template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                    animations: animations,
                    styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    TagInputComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: DragProvider }
    ]; };
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
    return TagInputComponent;
}(TagInputAccessor));
export { TagInputComponent };
if (false) {
    /**
     * \@name separatorKeys
     * @desc keyboard keys with which a user can separate items
     * @type {?}
     */
    TagInputComponent.prototype.separatorKeys;
    /**
     * \@name separatorKeyCodes
     * @desc keyboard key codes with which a user can separate items
     * @type {?}
     */
    TagInputComponent.prototype.separatorKeyCodes;
    /**
     * \@name placeholder
     * @desc the placeholder of the input text
     * @type {?}
     */
    TagInputComponent.prototype.placeholder;
    /**
     * \@name secondaryPlaceholder
     * @desc placeholder to appear when the input is empty
     * @type {?}
     */
    TagInputComponent.prototype.secondaryPlaceholder;
    /**
     * \@name maxItems
     * @desc maximum number of items that can be added
     * @type {?}
     */
    TagInputComponent.prototype.maxItems;
    /**
     * \@name validators
     * @desc array of Validators that are used to validate the tag before it gets appended to the list
     * @type {?}
     */
    TagInputComponent.prototype.validators;
    /**
     * \@name asyncValidators
     * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
     * @type {?}
     */
    TagInputComponent.prototype.asyncValidators;
    /**
     * - if set to true, it will only possible to add items from the autocomplete
     * \@name onlyFromAutocomplete
     * @type {?}
     */
    TagInputComponent.prototype.onlyFromAutocomplete;
    /**
     * \@name errorMessages
     * @type {?}
     */
    TagInputComponent.prototype.errorMessages;
    /**
     * \@name theme
     * @type {?}
     */
    TagInputComponent.prototype.theme;
    /**
     * \@name onTextChangeDebounce
     * @type {?}
     */
    TagInputComponent.prototype.onTextChangeDebounce;
    /**
     * - custom id assigned to the input
     * \@name id
     * @type {?}
     */
    TagInputComponent.prototype.inputId;
    /**
     * - custom class assigned to the input
     * @type {?}
     */
    TagInputComponent.prototype.inputClass;
    /**
     * - option to clear text input when the form is blurred
     * \@name clearOnBlur
     * @type {?}
     */
    TagInputComponent.prototype.clearOnBlur;
    /**
     * - hideForm
     * \@name clearOnBlur
     * @type {?}
     */
    TagInputComponent.prototype.hideForm;
    /**
     * \@name addOnBlur
     * @type {?}
     */
    TagInputComponent.prototype.addOnBlur;
    /**
     * \@name addOnPaste
     * @type {?}
     */
    TagInputComponent.prototype.addOnPaste;
    /**
     * - pattern used with the native method split() to separate patterns in the string pasted
     * \@name pasteSplitPattern
     * @type {?}
     */
    TagInputComponent.prototype.pasteSplitPattern;
    /**
     * \@name blinkIfDupe
     * @type {?}
     */
    TagInputComponent.prototype.blinkIfDupe;
    /**
     * \@name removable
     * @type {?}
     */
    TagInputComponent.prototype.removable;
    /**
     * \@name editable
     * @type {?}
     */
    TagInputComponent.prototype.editable;
    /**
     * \@name allowDupes
     * @type {?}
     */
    TagInputComponent.prototype.allowDupes;
    /**
     * \@description if set to true, the newly added tags will be added as strings, and not objects
     * \@name modelAsStrings
     * @type {?}
     */
    TagInputComponent.prototype.modelAsStrings;
    /**
     * \@name trimTags
     * @type {?}
     */
    TagInputComponent.prototype.trimTags;
    /**
     * \@name ripple
     * @type {?}
     */
    TagInputComponent.prototype.ripple;
    /**
     * \@name tabindex
     * @desc pass through the specified tabindex to the input
     * @type {?}
     */
    TagInputComponent.prototype.tabindex;
    /**
     * \@name disable
     * @type {?}
     */
    TagInputComponent.prototype.disable;
    /**
     * \@name dragZone
     * @type {?}
     */
    TagInputComponent.prototype.dragZone;
    /**
     * \@name onRemoving
     * @type {?}
     */
    TagInputComponent.prototype.onRemoving;
    /**
     * \@name onAdding
     * @type {?}
     */
    TagInputComponent.prototype.onAdding;
    /**
     * \@name animationDuration
     * @type {?}
     */
    TagInputComponent.prototype.animationDuration;
    /**
     * \@name onAdd
     * @desc event emitted when adding a new item
     * @type {?}
     */
    TagInputComponent.prototype.onAdd;
    /**
     * \@name onRemove
     * @desc event emitted when removing an existing item
     * @type {?}
     */
    TagInputComponent.prototype.onRemove;
    /**
     * \@name onSelect
     * @desc event emitted when selecting an item
     * @type {?}
     */
    TagInputComponent.prototype.onSelect;
    /**
     * \@name onFocus
     * @desc event emitted when the input is focused
     * @type {?}
     */
    TagInputComponent.prototype.onFocus;
    /**
     * \@name onFocus
     * @desc event emitted when the input is blurred
     * @type {?}
     */
    TagInputComponent.prototype.onBlur;
    /**
     * \@name onTextChange
     * @desc event emitted when the input value changes
     * @type {?}
     */
    TagInputComponent.prototype.onTextChange;
    /**
     * - output triggered when text is pasted in the form
     * \@name onPaste
     * @type {?}
     */
    TagInputComponent.prototype.onPaste;
    /**
     * - output triggered when tag entered is not valid
     * \@name onValidationError
     * @type {?}
     */
    TagInputComponent.prototype.onValidationError;
    /**
     * - output triggered when tag is edited
     * \@name onTagEdited
     * @type {?}
     */
    TagInputComponent.prototype.onTagEdited;
    /**
     * \@name dropdown
     * @type {?}
     */
    TagInputComponent.prototype.dropdown;
    /**
     * \@name template
     * @desc reference to the template if provided by the user
     * @type {?}
     */
    TagInputComponent.prototype.templates;
    /**
     * \@name inputForm
     * @type {?}
     */
    TagInputComponent.prototype.inputForm;
    /**
     * \@name selectedTag
     * @desc reference to the current selected tag
     * @type {?}
     */
    TagInputComponent.prototype.selectedTag;
    /**
     * \@name isLoading
     * @type {?}
     */
    TagInputComponent.prototype.isLoading;
    /**
     * \@name tags
     * @desc list of Element items
     * @type {?}
     */
    TagInputComponent.prototype.tags;
    /**
     * \@name listeners
     * @desc array of events that get fired using \@fireEvents
     * @type {?}
     */
    TagInputComponent.prototype.listeners;
    /**
     * \@description emitter for the 2-way data binding inputText value
     * \@name inputTextChange
     * @type {?}
     */
    TagInputComponent.prototype.inputTextChange;
    /**
     * \@description private variable to bind get/set
     * \@name inputTextValue
     * @type {?}
     */
    TagInputComponent.prototype.inputTextValue;
    /**
     * \@name animationMetadata
     * @type {?}
     */
    TagInputComponent.prototype.animationMetadata;
    /** @type {?} */
    TagInputComponent.prototype.errors;
    /** @type {?} */
    TagInputComponent.prototype.isProgressBarVisible$;
    /**
     * \@name appendTag
     * \@param tag {TagModel}
     * @type {?}
     */
    TagInputComponent.prototype.appendTag;
    /**
     * \@name createTag
     * \@param model
     * @type {?}
     */
    TagInputComponent.prototype.createTag;
    /**
     *
     * \@param tag
     * \@param isFromAutocomplete
     * @type {?}
     */
    TagInputComponent.prototype.isTagValid;
    /**
     * \@name onPasteCallback
     * \@param data
     * @type {?}
     */
    TagInputComponent.prototype.onPasteCallback;
    /** @type {?} */
    TagInputComponent.prototype.renderer;
    /** @type {?} */
    TagInputComponent.prototype.dragProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoaXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUVaLFdBQVcsRUFDWCxTQUFTLEVBR1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUdILGlCQUFpQixFQUVwQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHakUsT0FBTyxFQUFFLGdCQUFnQixFQUFZLE1BQU0scUJBQXFCLENBQUM7QUFDakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7SUFLcEMsU0FBUyxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxTQUFTOztJQUVyQyxlQUFlLEdBQUc7SUFDcEIsT0FBTyxFQUFFLGlCQUFp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S3hGLGtDQUFxRDs7Ozs7SUFLckQsaURBQTJFOzs7Ozs7SUFNM0Usb0NBQWlEOzs7OztJQUtqRCx1Q0FBK0Q7Ozs7OztJQU0vRCx3Q0FBa0U7Ozs7OztJQU1sRSxxQ0FBNEQ7Ozs7O0lBSzVELHNDQUE4RDs7Ozs7SUFLOUQsdUNBQWdFOzs7Ozs7SUFNaEUsOENBQXFFOzs7OztJQUtyRSx3Q0FBeUQ7Ozs7O0lBS3pELHNDQUFxRDs7Ozs7SUFLckQscUNBQTREOzs7OztJQUs1RCx1Q0FBdUQ7Ozs7OztJQU12RCwyQ0FBK0Q7Ozs7O0lBSy9ELHFDQUFtRDs7Ozs7SUFZbkQsbUNBQXdEOzs7Ozs7SUFNeEQscUNBQTJEOzs7OztJQUszRCxvQ0FBMEQ7Ozs7O0lBSzFELHFDQUEyRDs7Ozs7SUFLM0QsdUNBQXVEOzs7OztJQUt2RCxxQ0FBbUQ7Ozs7O0lBS25ELDhDQUFxRTs7Ozs7O0lBTXJFLGtDQUFzRDs7Ozs7O0lBTXRELHFDQUF5RDs7Ozs7O0lBTXpELHFDQUF5RDs7Ozs7O0lBTXpELG9DQUFzRDs7Ozs7O0lBTXRELG1DQUFxRDs7Ozs7O0lBTXJELHlDQUE2RDs7Ozs7O0lBTTdELG9DQUFzRDs7Ozs7O0lBTXRELDhDQUFrRTs7Ozs7O0lBTWxFLHdDQUE0RDs7Ozs7SUFLNUQscUNBQWtFOzs7Ozs7SUFNbEUsc0NBQW9HOzs7OztJQUtwRyxzQ0FBd0Q7Ozs7OztJQU14RCx3Q0FBeUM7Ozs7O0lBS3pDLHNDQUF5Qjs7Ozs7O0lBZXpCLGlDQUFpRTs7Ozs7O0lBTWpFLHNDQUdFOzs7Ozs7SUFNRiw0Q0FBNEU7Ozs7OztJQU01RSwyQ0FBMkI7Ozs7O0lBYzNCLDhDQUE0RDs7SUFFNUQsbUNBQTZCOztJQUU3QixrREFBa0Q7Ozs7OztJQXdIbEQsc0NBU0M7Ozs7OztJQU1ELHNDQVVDOzs7Ozs7O0lBd1FELHVDQW1DQzs7Ozs7O0lBeVNELDRDQWdDQzs7SUFud0JXLHFDQUFvQzs7SUFDcEMseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIFJlbmRlcmVyMixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT25Jbml0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQXN5bmNWYWxpZGF0b3JGbixcbiAgICBGb3JtQ29udHJvbCxcbiAgICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBWYWxpZGF0b3JGblxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBmaXJzdH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBuZzItdGFnLWlucHV0XG5pbXBvcnQgeyBUYWdJbnB1dEFjY2Vzc29yLCBUYWdNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYWNjZXNzb3InO1xuaW1wb3J0IHsgbGlzdGVuIH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXJzL2xpc3Rlbic7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBEcmFnUHJvdmlkZXIsIERyYWdnZWRUYWcgfSBmcm9tICcuLi8uLi9jb3JlL3Byb3ZpZGVycy9kcmFnLXByb3ZpZGVyJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuXG5pbXBvcnQgeyBUYWdJbnB1dEZvcm0gfSBmcm9tICcuLi90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnSW5wdXREcm9wZG93biB9IGZyb20gJy4uL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFnL3RhZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb25zJztcbmltcG9ydCB7IFRhZ0lucHV0T3B0aW9ucyB9IGZyb20gJy4uLy4uL2RlZmF1bHRzJztcblxuLy8gYW5ndWxhciB1bml2ZXJzYWwgaGFja3Ncbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuY29uc3QgRHJhZ0V2ZW50ID0gKHdpbmRvdyBhcyBhbnkpLkRyYWdFdmVudDtcblxuY29uc3QgQ1VTVE9NX0FDQ0VTU09SID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhZ0lucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgZGVmYXVsdHM6IFR5cGU8VGFnSW5wdXRPcHRpb25zPiA9IGZvcndhcmRSZWYoKCkgPT4gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctaW5wdXQnLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9BQ0NFU1NPUl0sXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFnLWlucHV0LnN0eWxlLnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LnRlbXBsYXRlLmh0bWwnLFxuICAgIGFuaW1hdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBUYWdJbnB1dEFjY2Vzc29yIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXBhcmF0b3JLZXlzXG4gICAgICogQGRlc2Mga2V5Ym9hcmQga2V5cyB3aXRoIHdoaWNoIGEgdXNlciBjYW4gc2VwYXJhdGUgaXRlbXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VwYXJhdG9yS2V5czogc3RyaW5nW10gPSBuZXcgZGVmYXVsdHMoKS5zZXBhcmF0b3JLZXlzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VwYXJhdG9yS2V5Q29kZXNcbiAgICAgKiBAZGVzYyBrZXlib2FyZCBrZXkgY29kZXMgd2l0aCB3aGljaCBhIHVzZXIgY2FuIHNlcGFyYXRlIGl0ZW1zXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNlcGFyYXRvcktleUNvZGVzOiBudW1iZXJbXSA9IG5ldyBkZWZhdWx0cygpLnNlcGFyYXRvcktleUNvZGVzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcGxhY2Vob2xkZXJcbiAgICAgKiBAZGVzYyB0aGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0IHRleHRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnBsYWNlaG9sZGVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Vjb25kYXJ5UGxhY2Vob2xkZXJcbiAgICAgKiBAZGVzYyBwbGFjZWhvbGRlciB0byBhcHBlYXIgd2hlbiB0aGUgaW5wdXQgaXMgZW1wdHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnNlY29uZGFyeVBsYWNlaG9sZGVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWF4SXRlbXNcbiAgICAgKiBAZGVzYyBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0aGF0IGNhbiBiZSBhZGRlZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhJdGVtczogbnVtYmVyID0gbmV3IGRlZmF1bHRzKCkubWF4SXRlbXM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB2YWxpZGF0b3JzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgVmFsaWRhdG9ycyB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IG5ldyBkZWZhdWx0cygpLnZhbGlkYXRvcnM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBBc3luY1ZhbGlkYXRvciB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIHRoZSB0YWcgYmVmb3JlIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIGxpc3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBuZXcgZGVmYXVsdHMoKS5hc3luY1ZhbGlkYXRvcnM7XG5cbiAgICAvKipcbiAgICAqIC0gaWYgc2V0IHRvIHRydWUsIGl0IHdpbGwgb25seSBwb3NzaWJsZSB0byBhZGQgaXRlbXMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlXG4gICAgKiBAbmFtZSBvbmx5RnJvbUF1dG9jb21wbGV0ZVxuICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9ubHlGcm9tQXV0b2NvbXBsZXRlID0gbmV3IGRlZmF1bHRzKCkub25seUZyb21BdXRvY29tcGxldGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlcnJvck1lc3NhZ2VzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBuZXcgZGVmYXVsdHMoKS5lcnJvck1lc3NhZ2VzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGhlbWVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGhlbWU6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnRoZW1lO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UZXh0Q2hhbmdlRGVib3VuY2VcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25UZXh0Q2hhbmdlRGVib3VuY2UgPSBuZXcgZGVmYXVsdHMoKS5vblRleHRDaGFuZ2VEZWJvdW5jZTtcblxuICAgIC8qKlxuICAgICAqIC0gY3VzdG9tIGlkIGFzc2lnbmVkIHRvIHRoZSBpbnB1dFxuICAgICAqIEBuYW1lIGlkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlucHV0SWQgPSBuZXcgZGVmYXVsdHMoKS5pbnB1dElkO1xuXG4gICAgLyoqXG4gICAgICogLSBjdXN0b20gY2xhc3MgYXNzaWduZWQgdG8gdGhlIGlucHV0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLmlucHV0Q2xhc3M7XG5cbiAgICAvKipcbiAgICAgKiAtIG9wdGlvbiB0byBjbGVhciB0ZXh0IGlucHV0IHdoZW4gdGhlIGZvcm0gaXMgYmx1cnJlZFxuICAgICAqIEBuYW1lIGNsZWFyT25CbHVyXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNsZWFyT25CbHVyOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuY2xlYXJPbkJsdXI7XG5cbiAgICAvKipcbiAgICAgKiAtIGhpZGVGb3JtXG4gICAgICogQG5hbWUgY2xlYXJPbkJsdXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZUZvcm06IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5oaWRlRm9ybTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZE9uQmx1clxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhZGRPbkJsdXI6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5hZGRPbkJsdXI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhZGRPblBhc3RlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFkZE9uUGFzdGU6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5hZGRPblBhc3RlO1xuXG4gICAgLyoqXG4gICAgICogLSBwYXR0ZXJuIHVzZWQgd2l0aCB0aGUgbmF0aXZlIG1ldGhvZCBzcGxpdCgpIHRvIHNlcGFyYXRlIHBhdHRlcm5zIGluIHRoZSBzdHJpbmcgcGFzdGVkXG4gICAgICogQG5hbWUgcGFzdGVTcGxpdFBhdHRlcm5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGFzdGVTcGxpdFBhdHRlcm4gPSBuZXcgZGVmYXVsdHMoKS5wYXN0ZVNwbGl0UGF0dGVybjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsaW5rSWZEdXBlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGJsaW5rSWZEdXBlID0gbmV3IGRlZmF1bHRzKCkuYmxpbmtJZkR1cGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByZW1vdmFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmVtb3ZhYmxlID0gbmV3IGRlZmF1bHRzKCkucmVtb3ZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZWRpdGFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5lZGl0YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFsbG93RHVwZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dEdXBlcyA9IG5ldyBkZWZhdWx0cygpLmFsbG93RHVwZXM7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBuZXdseSBhZGRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgYXMgc3RyaW5ncywgYW5kIG5vdCBvYmplY3RzXG4gICAgICogQG5hbWUgbW9kZWxBc1N0cmluZ3NcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kZWxBc1N0cmluZ3MgPSBuZXcgZGVmYXVsdHMoKS5tb2RlbEFzU3RyaW5ncztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRyaW1UYWdzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRyaW1UYWdzID0gbmV3IGRlZmF1bHRzKCkudHJpbVRhZ3M7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0IGlucHV0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFRleHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByaXBwbGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcmlwcGxlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkucmlwcGxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGFiaW5kZXhcbiAgICAgKiBAZGVzYyBwYXNzIHRocm91Z2ggdGhlIHNwZWNpZmllZCB0YWJpbmRleCB0byB0aGUgaW5wdXRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiaW5kZXg6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLnRhYkluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuZGlzYWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRyYWdab25lXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRyYWdab25lOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS5kcmFnWm9uZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZpbmdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25SZW1vdmluZyA9IG5ldyBkZWZhdWx0cygpLm9uUmVtb3Zpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZGluZ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkFkZGluZyA9IG5ldyBkZWZhdWx0cygpLm9uQWRkaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0aW9uRHVyYXRpb24gPSBuZXcgZGVmYXVsdHMoKS5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQWRkXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIGFkZGluZyBhIG5ldyBpdGVtXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblJlbW92ZVxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiByZW1vdmluZyBhbiBleGlzdGluZyBpdGVtXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblNlbGVjdFxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiBzZWxlY3RpbmcgYW4gaXRlbVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25Gb2N1c1xuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25Gb2N1c1xuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRleHRDaGFuZ2VcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiAtIG91dHB1dCB0cmlnZ2VyZWQgd2hlbiB0ZXh0IGlzIHBhc3RlZCBpbiB0aGUgZm9ybVxuICAgICAqIEBuYW1lIG9uUGFzdGVcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUGFzdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8qKlxuICAgICAqIC0gb3V0cHV0IHRyaWdnZXJlZCB3aGVuIHRhZyBlbnRlcmVkIGlzIG5vdCB2YWxpZFxuICAgICAqIEBuYW1lIG9uVmFsaWRhdGlvbkVycm9yXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblZhbGlkYXRpb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiAtIG91dHB1dCB0cmlnZ2VyZWQgd2hlbiB0YWcgaXMgZWRpdGVkXG4gICAgICogQG5hbWUgb25UYWdFZGl0ZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVGFnRWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRyb3Bkb3duXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChUYWdJbnB1dERyb3Bkb3duKSBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0ZW1wbGF0ZVxuICAgICAqIEBkZXNjIHJlZmVyZW5jZSB0byB0aGUgdGVtcGxhdGUgaWYgcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKFRlbXBsYXRlUmVmLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KSBwdWJsaWMgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dEZvcm1cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFRhZ0lucHV0Rm9ybSkgcHVibGljIGlucHV0Rm9ybTogVGFnSW5wdXRGb3JtO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRUYWdcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgdGFnXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGVkVGFnOiBUYWdNb2RlbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzTG9hZGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHVibGljIHNldCBpbnB1dFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0VmFsdWUgPSB0ZXh0O1xuICAgICAgICB0aGlzLmlucHV0VGV4dENoYW5nZS5lbWl0KHRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhZ3NcbiAgICAgKiBAZGVzYyBsaXN0IG9mIEVsZW1lbnQgaXRlbXNcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKFRhZ0NvbXBvbmVudCkgcHVibGljIHRhZ3M6IFF1ZXJ5TGlzdDxUYWdDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbGlzdGVuZXJzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgZXZlbnRzIHRoYXQgZ2V0IGZpcmVkIHVzaW5nIEBmaXJlRXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIFtjb25zdGFudHMuS0VZRE9XTl06IDx7IChmdW4pOiBhbnkgfVtdPltdLFxuICAgICAgICBbY29uc3RhbnRzLktFWVVQXTogPHsgKGZ1bik6IGFueSB9W10+W11cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGVtaXR0ZXIgZm9yIHRoZSAyLXdheSBkYXRhIGJpbmRpbmcgaW5wdXRUZXh0IHZhbHVlXG4gICAgICogQG5hbWUgaW5wdXRUZXh0Q2hhbmdlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpbnB1dFRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIHByaXZhdGUgdmFyaWFibGUgdG8gYmluZCBnZXQvc2V0XG4gICAgICogQG5hbWUgaW5wdXRUZXh0VmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5wdXRUZXh0VmFsdWUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBkZXNjIHJlbW92ZXMgdGhlIHRhYiBpbmRleCBpZiBpdCBpcyBzZXQgLSBpdCB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBpbnB1dFxuICAgICAqIEBuYW1lIHRhYmluZGV4QXR0clxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIGdldCB0YWJpbmRleEF0dHIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXggIT09ICcnID8gJy0xJyA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFuaW1hdGlvbk1ldGFkYXRhXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbk1ldGFkYXRhOiB7IHZhbHVlOiBzdHJpbmcsIHBhcmFtczogb2JqZWN0IH07XG5cbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgcHVibGljIGlzUHJvZ3Jlc3NCYXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZHJhZ1Byb3ZpZGVyOiBEcmFnUHJvdmlkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ0FmdGVyVmlld0luaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgbGlzdGVuZXJzXG5cbiAgICAgICAgdGhpcy5zZXRVcEtleXByZXNzTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5zZXRVcElucHV0S2V5ZG93bkxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uVGV4dENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwVGV4dENoYW5nZVN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsZWFyIG9uIGJsdXIgaXMgc2V0IHRvIHRydWUsIHN1YnNjcmliZSB0byB0aGUgZXZlbnQgYW5kIGNsZWFyIHRoZSB0ZXh0J3MgZm9ybVxuICAgICAgICBpZiAodGhpcy5jbGVhck9uQmx1ciB8fCB0aGlzLmFkZE9uQmx1cikge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uQmx1clN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFkZE9uUGFzdGUgaXMgc2V0IHRvIHRydWUsIHJlZ2lzdGVyIHRoZSBoYW5kbGVyIGFuZCBhZGQgaXRlbXNcbiAgICAgICAgaWYgKHRoaXMuYWRkT25QYXN0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uUGFzdGVMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzQ2hhbmdlcyQgPSB0aGlzLmlucHV0Rm9ybS5mb3JtLnN0YXR1c0NoYW5nZXM7XG5cbiAgICAgICAgc3RhdHVzQ2hhbmdlcyQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoc3RhdHVzOiBzdHJpbmcpID0+IHN0YXR1cyAhPT0gJ1BFTkRJTkcnKVxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuaW5wdXRGb3JtLmdldEVycm9yTWVzc2FnZXModGhpcy5lcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pc1Byb2dyZXNzQmFyVmlzaWJsZSQgPSBzdGF0dXNDaGFuZ2VzJC5waXBlKFxuICAgICAgICAgICAgbWFwKChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXMgPT09ICdQRU5ESU5HJyB8fCB0aGlzLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgaGlkZUZvcm0gaXMgc2V0IHRvIHRydWUsIHJlbW92ZSB0aGUgaW5wdXRcbiAgICAgICAgaWYgKHRoaXMuaGlkZUZvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb3JtLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG5nT25Jbml0XG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNwZWNpZmllZCBpbiB0aGUgbW9kZWwgaXMgPiBvZiB0aGUgdmFsdWUgb2YgbWF4SXRlbXNcbiAgICAgICAgLy8gZGVncmFkZSBncmFjZWZ1bGx5IGFuZCBsZXQgdGhlIG1heCBudW1iZXIgb2YgaXRlbXMgdG8gYmUgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbW9kZWxcbiAgICAgICAgLy8gdGhvdWdoLCB3YXJuIHRoZSB1c2VyLlxuICAgICAgICBjb25zdCBoYXNSZWFjaGVkTWF4SXRlbXMgPSB0aGlzLm1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID4gdGhpcy5tYXhJdGVtcztcblxuICAgICAgICBpZiAoaGFzUmVhY2hlZE1heEl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLm1heEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oY29uc3RhbnRzLk1BWF9JVEVNU19XQVJOSU5HKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHRpbmcgZWRpdGFibGUgdG8gZmFsc2UgdG8gZml4IHByb2JsZW0gd2l0aCB0YWdzIGluIElFIHN0aWxsIGJlaW5nIGVkaXRhYmxlIHdoZW5cbiAgICAgICAgLy8gb25seUZyb21BdXRvY29tcGxldGUgaXMgdHJ1ZVxuICAgICAgICB0aGlzLmVkaXRhYmxlID0gdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZSA/IGZhbHNlIDogdGhpcy5lZGl0YWJsZTtcblxuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbk1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmVSZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0gdGFnXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlUmVxdWVzdGVkKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiBQcm9taXNlPFRhZ01vZGVsPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZUZuID0gKG1vZGVsOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShtb2RlbCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGFnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25SZW1vdmluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlbW92aW5nKHRhZylcbiAgICAgICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVGbikgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZGluZ1JlcXVlc3RlZFxuICAgICAqIEBwYXJhbSBmcm9tQXV0b2NvbXBsZXRlIHtib29sZWFufVxuICAgICAqIEBwYXJhbSB0YWcge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkFkZGluZ1JlcXVlc3RlZChmcm9tQXV0b2NvbXBsZXRlOiBib29sZWFuLCB0YWc6IFRhZ01vZGVsLCBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlRm4gPSAobW9kZWw6IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZEl0ZW0oZnJvbUF1dG9jb21wbGV0ZSwgbW9kZWwsIGluZGV4LCBnaXZldXBGb2N1cylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFkZGluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFkZGluZyh0YWcpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sIHJlamVjdCkgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUYWdcbiAgICAgKiBAcGFyYW0gdGFnIHtUYWdNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwZW5kVGFnID0gKHRhZzogVGFnTW9kZWwsIGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxBc1N0cmluZ3MgPyB0YWdbdGhpcy5pZGVudGlmeUJ5XSA6IHRhZztcblxuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgICAgLi4uaXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAuLi5pdGVtcy5zbGljZShpbmRleCwgaXRlbXMubGVuZ3RoKVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNyZWF0ZVRhZ1xuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVUYWcgPSAobW9kZWw6IFRhZ01vZGVsKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICBjb25zdCB0cmltID0gKHZhbDogVGFnTW9kZWwsIGtleTogc3RyaW5nKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnRyaW0oKSA6IHZhbFtrZXldO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50eXBlb2YgbW9kZWwgIT09ICdzdHJpbmcnID8gbW9kZWwgOiB7fSxcbiAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IHRoaXMudHJpbVRhZ3MgPyB0cmltKG1vZGVsLCB0aGlzLmRpc3BsYXlCeSkgOiBtb2RlbCxcbiAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiB0aGlzLnRyaW1UYWdzID8gdHJpbShtb2RlbCwgdGhpcy5pZGVudGlmeUJ5KSA6IG1vZGVsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0SXRlbVxuICAgICAqIEBkZXNjIHNlbGVjdHMgaXRlbSBwYXNzZWQgYXMgcGFyYW1ldGVyIGFzIHRoZSBzZWxlY3RlZCB0YWdcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBlbWl0XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogVGFnTW9kZWwgfCB1bmRlZmluZWQsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzUmVhZG9ubHkgPSBpdGVtICYmIHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJyAmJiBpdGVtLnJlYWRvbmx5O1xuXG4gICAgICAgIGlmIChpc1JlYWRvbmx5IHx8IHRoaXMuc2VsZWN0ZWRUYWcgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSBpdGVtO1xuXG4gICAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmaXJlRXZlbnRzXG4gICAgICogQGRlc2MgZ29lcyB0aHJvdWdoIHRoZSBsaXN0IG9mIHRoZSBldmVudHMgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lLCBhbmQgZmlyZXMgZWFjaCBvZiB0aGVtXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyZUV2ZW50cyhldmVudE5hbWU6IHN0cmluZywgJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIuY2FsbCh0aGlzLCAkZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlkb3duXG4gICAgICogQGRlc2MgaGFuZGxlcyBhY3Rpb24gd2hlbiB0aGUgdXNlciBoaXRzIGEga2V5Ym9hcmQga2V5XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5ZG93bihkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkYXRhLmV2ZW50O1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5IHx8IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29uc3RhbnRzLktFWV9QUkVTU19BQ1RJT05TW2tleV0pIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5ERUxFVEU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWcgJiYgdGhpcy5yZW1vdmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmVSZXF1ZXN0ZWQodGhpcy5zZWxlY3RlZFRhZywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9QUkVWOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5QUkVWKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9ORVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5ORVhUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlRBQjpcbiAgICAgICAgICAgICAgICBpZiAoc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFRhZyhkYXRhLm1vZGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLlBSRVYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGFzdFRhZyhkYXRhLm1vZGVsKSAmJiAodGhpcy5kaXNhYmxlIHx8IHRoaXMubWF4SXRlbXNSZWFjaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLk5FWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3VyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9uRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJbnB1dFZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZywgZW1pdEV2ZW50ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGZvcm0gdmFsdWUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgaXRlbVxuICAgICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250cm9sXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRGb3JtLnZhbHVlIGFzIEZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICogQHBhcmFtIGFwcGx5Rm9jdXNcbiAgICAgKiBAcGFyYW0gZGlzcGxheUF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cyhhcHBseUZvY3VzID0gZmFsc2UsIGRpc3BsYXlBdXRvY29tcGxldGUgPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kcmFnUHJvdmlkZXIuZ2V0U3RhdGUoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoYXBwbHlGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEZvcm0uZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYXNFcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEZvcm0gJiYgdGhpcy5pbnB1dEZvcm0uaGFzRXJyb3JzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNJbnB1dEZvY3VzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJbnB1dEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Rm9ybSAmJiB0aGlzLmlucHV0Rm9ybS5pc0lucHV0Rm9jdXNlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0gdGhpcyBpcyB0aGUgb25lIHdheSBJIGZvdW5kIHRvIHRlbGwgaWYgdGhlIHRlbXBsYXRlIGhhcyBiZWVuIHBhc3NlZCBhbmQgaXQgaXMgbm90XG4gICAgICogdGhlIHRlbXBsYXRlIGZvciB0aGUgbWVudSBpdGVtXG4gICAgICogQG5hbWUgaGFzQ3VzdG9tVGVtcGxhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzQ3VzdG9tVGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMgPyB0aGlzLnRlbXBsYXRlcy5maXJzdCA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgbWVudVRlbXBsYXRlID0gdGhpcy5kcm9wZG93biAmJiB0aGlzLmRyb3Bkb3duLnRlbXBsYXRlcyA/XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnRlbXBsYXRlcy5maXJzdCA6IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gQm9vbGVhbih0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSAhPT0gbWVudVRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtYXhJdGVtc1JlYWNoZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heEl0ZW1zUmVhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4SXRlbXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5tYXhJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5pbnB1dEZvcm0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGZvcm0gPyBmb3JtLnZhbHVlIDogJyc7XG4gICAgfVxuXG4gICAgLyoqM1xuICAgICAqIEBuYW1lIG9uRHJhZ1N0YXJ0ZWRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnU3RhcnRlZChldmVudDogRHJhZ0V2ZW50LCB0YWc6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IHpvbmU6IHRoaXMuZHJhZ1pvbmUsIHRhZywgaW5kZXggfSBhcyBEcmFnZ2VkVGFnO1xuXG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFNlbmRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIuc2V0RHJhZ2dlZEl0ZW0oZXZlbnQsIGl0ZW0pO1xuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IHRydWUsIGluZGV4fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25EcmFnT3ZlclxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFN0YXRlKHtkcm9wcGluZzogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRSZWNlaXZlcih0aGlzKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRHJvcHBlZFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhZ0Ryb3BwZWQoZXZlbnQ6IERyYWdFdmVudCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZHJhZ1Byb3ZpZGVyLmdldERyYWdnZWRJdGVtKGV2ZW50KTtcblxuICAgICAgICBpZiAoIWl0ZW0gfHwgaXRlbS56b25lICE9PSB0aGlzLmRyYWdab25lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5vblRhZ0Ryb3BwZWQoaXRlbS50YWcsIGl0ZW0uaW5kZXgsIGluZGV4KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0Ryb3BwaW5nXG4gICAgICovXG4gICAgcHVibGljIGlzRHJvcHBpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGlzUmVjZWl2ZXIgPSB0aGlzLmRyYWdQcm92aWRlci5yZWNlaXZlciA9PT0gdGhpcztcbiAgICAgICAgY29uc3QgaXNEcm9wcGluZyA9IHRoaXMuZHJhZ1Byb3ZpZGVyLmdldFN0YXRlKCdkcm9wcGluZycpO1xuXG4gICAgICAgIHJldHVybiBCb29sZWFuKGlzUmVjZWl2ZXIgJiYgaXNEcm9wcGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UYWdCbHVycmVkXG4gICAgICogQHBhcmFtIGNoYW5nZWRFbGVtZW50IHtUYWdNb2RlbH1cbiAgICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgb25UYWdCbHVycmVkKGNoYW5nZWRFbGVtZW50OiBUYWdNb2RlbCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGNoYW5nZWRFbGVtZW50O1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0cmFja0J5XG4gICAgICogQHBhcmFtIGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbTogVGFnTW9kZWwpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZUVkaXRlZFRhZ1xuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlRWRpdGVkVGFnKHt0YWcsIGluZGV4fToge3RhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXJ9KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UYWdFZGl0ZWQuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpc0Zyb21BdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNUYWdWYWxpZCA9ICh0YWc6IFRhZ01vZGVsLCBmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93biA/IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbURpc3BsYXkodGFnKS50cmltKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAmJiAhZnJvbUF1dG9jb21wbGV0ZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGUgPSB0aGlzLmZpbmREdXBlKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgLy8gaWYgc28sIGdpdmUgYSB2aXN1YWwgY3VlIGFuZCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RHVwZXMgJiYgZHVwZSAmJiB0aGlzLmJsaW5rSWZEdXBlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMudGFncy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLm1vZGVsKSA9PT0gdGhpcy5nZXRJdGVtVmFsdWUoZHVwZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuYmxpbmsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzRnJvbUF1dG9jb21wbGV0ZSA9IGZyb21BdXRvY29tcGxldGUgJiYgdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZTtcblxuICAgICAgICBjb25zdCBhc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLy8gMS4gdGhlcmUgbXVzdCBiZSBubyBkdXBlIE9SIGR1cGVzIGFyZSBhbGxvd2VkXG4gICAgICAgICAgICAhZHVwZSB8fCB0aGlzLmFsbG93RHVwZXMsXG5cbiAgICAgICAgICAgIC8vIDIuIGNoZWNrIG1heCBpdGVtcyBoYXMgbm90IGJlZW4gcmVhY2hlZFxuICAgICAgICAgICAgIXRoaXMubWF4SXRlbXNSZWFjaGVkLFxuXG4gICAgICAgICAgICAvLyAzLiBjaGVjayBpdGVtIGNvbWVzIGZyb20gYXV0b2NvbXBsZXRlIG9yIG9ubHlGcm9tQXV0b2NvbXBsZXRlIGlzIGZhbHNlXG4gICAgICAgICAgICAoKGlzRnJvbUF1dG9jb21wbGV0ZSkgfHwgIXRoaXMub25seUZyb21BdXRvY29tcGxldGUpXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGFzc2VydGlvbnMuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA9PT0gYXNzZXJ0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbW92ZVRvVGFnXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBtb3ZlVG9UYWcoaXRlbTogVGFnTW9kZWwsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9IHRoaXMuaXNMYXN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBpc0ZpcnN0ID0gdGhpcy5pc0ZpcnN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBzdG9wU3dpdGNoID0gKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLk5FWFQgJiYgaXNMYXN0KSB8fFxuICAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLlBSRVYgJiYgaXNGaXJzdCk7XG5cbiAgICAgICAgaWYgKHN0b3BTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBkaXJlY3Rpb24gPT09IGNvbnN0YW50cy5ORVhUID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0VGFnSW5kZXgoaXRlbSkgKyBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuZ2V0VGFnQXRJbmRleChpbmRleCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZy5zZWxlY3QuY2FsbCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzRmlyc3RUYWdcbiAgICAgKiBAcGFyYW0gaXRlbSB7VGFnTW9kZWx9XG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0ZpcnN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MuZmlyc3QubW9kZWwgPT09IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNMYXN0VGFnXG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNMYXN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MubGFzdC5tb2RlbCA9PT0gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdJbmRleFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdJbmRleChpdGVtOiBUYWdNb2RlbCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRhZ3MudG9BcnJheSgpO1xuXG4gICAgICAgIHJldHVybiB0YWdzLmZpbmRJbmRleCh0YWcgPT4gdGFnLm1vZGVsID09PSBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdBdEluZGV4XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMudGFncy50b0FycmF5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZ3NbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZUl0ZW1cbiAgICAgKiBAZGVzYyByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXkgb2YgdGhlIG1vZGVsXG4gICAgICogQHBhcmFtIHRhZyB7VGFnTW9kZWx9XG4gICAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZ2V0SXRlbXNXaXRob3V0KGluZGV4KTtcblxuICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlZCB0YWcgd2FzIHNlbGVjdGVkLCBzZXQgaXQgYXMgdW5kZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnID09PSB0YWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIGVtaXQgcmVtb3ZlIGV2ZW50XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZEl0ZW1cbiAgICAgKiBAZGVzYyBhZGRzIHRoZSBjdXJyZW50IHRleHQgbW9kZWwgdG8gdGhlIGl0ZW1zIGFycmF5XG4gICAgICogQHBhcmFtIGZyb21BdXRvY29tcGxldGUge2Jvb2xlYW59XG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSXRlbShmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UsIGl0ZW06IFRhZ01vZGVsLCBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5nZXRJdGVtRGlzcGxheShpdGVtKTtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWcoaXRlbSk7XG5cbiAgICAgICAgaWYgKGZyb21BdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLCB0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbmFtZSByZXNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZXNldCBjb250cm9sIGFuZCBmb2N1cyBpbnB1dFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2l2ZXVwRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1cyhmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGlzcGxheSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhcHBlbmRJdGVtID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFnKHRhZywgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZW1pdCBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMub25BZGQuZW1pdCh0YWcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnNob3dEcm9wZG93bklmRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5pbnB1dEZvcm0uZm9ybS5zdGF0dXM7XG4gICAgICAgICAgICBjb25zdCBpc1RhZ1ZhbGlkID0gdGhpcy5pc1RhZ1ZhbGlkKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9uVmFsaWRhdGlvbkVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRXJyb3IuZW1pdCh0YWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdWQUxJRCcgJiYgaXNUYWdWYWxpZCkge1xuICAgICAgICAgICAgICAgIGFwcGVuZEl0ZW0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ0lOVkFMSUQnIHx8ICFpc1RhZ1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25WYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ1BFTkRJTkcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVXBkYXRlJCA9IHRoaXMuaW5wdXRGb3JtLmZvcm0uc3RhdHVzQ2hhbmdlcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXNVcGRhdGUkXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHN0YXR1c1VwZGF0ZSA9PiBzdGF0dXNVcGRhdGUgIT09ICdQRU5ESU5HJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHVzVXBkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzVXBkYXRlID09PSAnVkFMSUQnICYmIGlzVGFnVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXR1cFNlcGFyYXRvcktleXNMaXN0ZW5lclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVzZVNlcGFyYXRvcktleXMgPSB0aGlzLnNlcGFyYXRvcktleUNvZGVzLmxlbmd0aCA+IDAgfHwgdGhpcy5zZXBhcmF0b3JLZXlzLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzS2V5Q29kZSA9IHRoaXMuc2VwYXJhdG9yS2V5Q29kZXMuaW5kZXhPZigkZXZlbnQua2V5Q29kZSkgPj0gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0tleSA9IHRoaXMuc2VwYXJhdG9yS2V5cy5pbmRleE9mKCRldmVudC5rZXkpID49IDA7XG4gICAgICAgICAgICAvLyB0aGUga2V5Q29kZSBvZiBrZXlkb3duIGV2ZW50IGlzIDIyOSB3aGVuIElNRSBpcyBwcm9jZXNzaW5nIHRoZSBrZXkgZXZlbnQuXG4gICAgICAgICAgICBjb25zdCBpc0lNRVByb2Nlc3NpbmcgPSAkZXZlbnQua2V5Q29kZSA9PT0gMjI5O1xuXG4gICAgICAgICAgICBpZiAoaGFzS2V5Q29kZSB8fCAoaGFzS2V5ICYmICFpc0lNRVByb2Nlc3NpbmcpKSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFkZGluZ1JlcXVlc3RlZChmYWxzZSwgdGhpcy5mb3JtVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdGVuLmNhbGwodGhpcywgY29uc3RhbnRzLktFWURPV04sIGxpc3RlbmVyLCB1c2VTZXBhcmF0b3JLZXlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcEtleXByZXNzTGlzdGVuZXJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcEtleXByZXNzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgkZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ29ycmVjdEtleSA9ICRldmVudC5rZXlDb2RlID09PSAzNyB8fCAkZXZlbnQua2V5Q29kZSA9PT0gODtcblxuICAgICAgICAgICAgaWYgKGlzQ29ycmVjdEtleSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmZvcm1WYWx1ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzLmxhc3Quc2VsZWN0LmNhbGwodGhpcy50YWdzLmxhc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldHRpbmcgdXAgdGhlIGtleXByZXNzIGxpc3RlbmVyc1xuICAgICAgICBsaXN0ZW4uY2FsbCh0aGlzLCBjb25zdGFudHMuS0VZRE9XTiwgbGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFVwS2V5ZG93bkxpc3RlbmVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VXBJbnB1dEtleWRvd25MaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRGb3JtLm9uS2V5ZG93bi5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnRzKCdrZXlkb3duJywgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLmZvcm1WYWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBPblBhc3RlTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwT25QYXN0ZUxpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRGb3JtLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gYXR0YWNoIGxpc3RlbmVyIHRvIGlucHV0XG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGlucHV0LCAncGFzdGUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25QYXN0ZUNhbGxiYWNrKGV2ZW50KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcFRleHRDaGFuZ2VTdWJzY3JpYmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcFRleHRDaGFuZ2VTdWJzY3JpYmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Rm9ybS5mb3JtXG4gICAgICAgICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5vblRleHRDaGFuZ2VEZWJvdW5jZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiB7aXRlbTogc3RyaW5nfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25UZXh0Q2hhbmdlLmVtaXQodmFsdWUuaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcE9uQmx1clN1YnNjcmliZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwT25CbHVyU3Vic2NyaWJlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyRm4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSB0aGlzLmRyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24uaXNWaXNpYmxlO1xuICAgICAgICAgICAgcmV0dXJuICFpc1Zpc2libGUgJiYgISF0aGlzLmZvcm1WYWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlucHV0Rm9ybVxuICAgICAgICAgICAgLm9uQmx1clxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKGZpbHRlckZuKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB0aGlzLnNldElucHV0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkT25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZpbmREdXBlXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpc0Zyb21BdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGZpbmREdXBlKHRhZzogVGFnTW9kZWwsIGlzRnJvbUF1dG9jb21wbGV0ZTogYm9vbGVhbik6IFRhZ01vZGVsIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgaWRlbnRpZnlCeSA9IGlzRnJvbUF1dG9jb21wbGV0ZSA/IHRoaXMuZHJvcGRvd24uaWRlbnRpZnlCeSA6IHRoaXMuaWRlbnRpZnlCeTtcbiAgICAgICAgY29uc3QgaWQgPSB0YWdbaWRlbnRpZnlCeV07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IHRoaXMuZ2V0SXRlbVZhbHVlKGl0ZW0pID09PSBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25QYXN0ZUNhbGxiYWNrXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uUGFzdGVDYWxsYmFjayA9IGFzeW5jIChkYXRhOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpbnRlcmZhY2UgSUVXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICAgICAgICAgICAgY2xpcGJvYXJkRGF0YTogRGF0YVRyYW5zZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0VGV4dCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNJRSA9IEJvb2xlYW4oKHdpbmRvdyBhcyBJRVdpbmRvdykuY2xpcGJvYXJkRGF0YSk7XG4gICAgICAgICAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gaXNJRSA/IChcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIElFV2luZG93KS5jbGlwYm9hcmREYXRhXG4gICAgICAgICAgICApIDogZGF0YS5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGlzSUUgPyAnVGV4dCcgOiAndGV4dC9wbGFpbic7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGlwYm9hcmREYXRhLmdldERhdGEodHlwZSkgfHwgJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGdldFRleHQoKTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IHRleHRcbiAgICAgICAgICAgIC5zcGxpdCh0aGlzLnBhc3RlU3BsaXRQYXR0ZXJuKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmNyZWF0ZVRhZyhpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodGFnW3RoaXMuZGlzcGxheUJ5XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRhZyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldElucHV0VmFsdWUoJycpLCA1MCk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwocmVxdWVzdHMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBhc3RlLmVtaXQodGV4dCk7XG4gICAgICAgICAgICByZXNldElucHV0KCk7XG4gICAgICAgfSlcbiAgICAgICAuY2F0Y2gocmVzZXRJbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0QW5pbWF0aW9uTWV0YWRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEFuaW1hdGlvbk1ldGFkYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk1ldGFkYXRhID0ge1xuICAgICAgICAgICAgdmFsdWU6ICdpbicsXG4gICAgICAgICAgICBwYXJhbXM6IHsuLi50aGlzLmFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==