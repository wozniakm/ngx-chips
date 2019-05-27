(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs/operators'), require('ng2-material-dropdown'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-chips', ['exports', '@angular/core', '@angular/forms', 'rxjs/operators', 'ng2-material-dropdown', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ngx-chips'] = {}),global.ng.core,global.ng.forms,global.rxjs.operators,global.ng2MaterialDropdown,global.ng.animations,global.ng.common));
}(this, (function (exports,core,forms,operators,ng2MaterialDropdown,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        /**
         * @name transform
         * @param value {string}
         * @param arg {string}
         */
        /**
         * \@name transform
         * @param {?} value {string}
         * @param {?} arg {string}
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * \@name transform
         * @param {?} value {string}
         * @param {?} arg {string}
         * @return {?}
         */
            function (value, arg) {
                if (!arg.trim()) {
                    return value;
                }
                try {
                    /** @type {?} */
                    var regex = new RegExp("(" + escape(arg) + ")", 'i');
                    return value.replace(regex, '<b>$1</b>');
                }
                catch (e) {
                    return value;
                }
            };
        HighlightPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'highlight'
                    },] }
        ];
        return HighlightPipe;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /*
    ** constants and default values for <tag-input>
     */
    /** @type {?} */
    var PLACEHOLDER = '+ Tag';
    /** @type {?} */
    var SECONDARY_PLACEHOLDER = 'Enter a new tag';
    /** @type {?} */
    var KEYDOWN = 'keydown';
    /** @type {?} */
    var KEYUP = 'keyup';
    /** @type {?} */
    var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
    /** @type {?} */
    var ACTIONS_KEYS = {
        DELETE: 'DELETE',
        SWITCH_PREV: 'SWITCH_PREV',
        SWITCH_NEXT: 'SWITCH_NEXT',
        TAB: 'TAB'
    };
    /** @type {?} */
    var KEY_PRESS_ACTIONS = {
        8: ACTIONS_KEYS.DELETE,
        37: ACTIONS_KEYS.SWITCH_PREV,
        39: ACTIONS_KEYS.SWITCH_NEXT,
        9: ACTIONS_KEYS.TAB
    };
    /** @type {?} */
    var DRAG_AND_DROP_KEY = 'Text';
    /** @type {?} */
    var NEXT = 'NEXT';
    /** @type {?} */
    var PREV = 'PREV';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DragProvider = /** @class */ (function () {
        function DragProvider() {
            this.state = {
                dragging: false,
                dropping: false,
                index: undefined
            };
        }
        /**
         * @name setDraggedItem
         * @param event
         * @param tag
         */
        /**
         * \@name setDraggedItem
         * @param {?} event
         * @param {?} tag
         * @return {?}
         */
        DragProvider.prototype.setDraggedItem = /**
         * \@name setDraggedItem
         * @param {?} event
         * @param {?} tag
         * @return {?}
         */
            function (event, tag) {
                event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
            };
        /**
         * @name getDraggedItem
         * @param event
         */
        /**
         * \@name getDraggedItem
         * @param {?} event
         * @return {?}
         */
        DragProvider.prototype.getDraggedItem = /**
         * \@name getDraggedItem
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
                try {
                    return ( /** @type {?} */(JSON.parse(data)));
                }
                catch (_a) {
                    return;
                }
            };
        /**
         * @name setSender
         * @param sender
         */
        /**
         * \@name setSender
         * @param {?} sender
         * @return {?}
         */
        DragProvider.prototype.setSender = /**
         * \@name setSender
         * @param {?} sender
         * @return {?}
         */
            function (sender) {
                this.sender = sender;
            };
        /**
         * @name setReceiver
         * @param receiver
         */
        /**
         * \@name setReceiver
         * @param {?} receiver
         * @return {?}
         */
        DragProvider.prototype.setReceiver = /**
         * \@name setReceiver
         * @param {?} receiver
         * @return {?}
         */
            function (receiver) {
                this.receiver = receiver;
            };
        /**
         * @name onTagDropped
         * @param tag
         * @param indexDragged
         * @param indexDropped
         */
        /**
         * \@name onTagDropped
         * @param {?} tag
         * @param {?} indexDragged
         * @param {?=} indexDropped
         * @return {?}
         */
        DragProvider.prototype.onTagDropped = /**
         * \@name onTagDropped
         * @param {?} tag
         * @param {?} indexDragged
         * @param {?=} indexDropped
         * @return {?}
         */
            function (tag, indexDragged, indexDropped) {
                this.onDragEnd();
                this.sender.onRemoveRequested(tag, indexDragged);
                this.receiver.onAddingRequested(false, tag, indexDropped);
            };
        /**
         * @name setState
         * @param state
         */
        /**
         * \@name setState
         * @param {?} state
         * @return {?}
         */
        DragProvider.prototype.setState = /**
         * \@name setState
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = __assign({}, this.state, state);
            };
        /**
         * @name getState
         * @param key
         */
        /**
         * \@name getState
         * @param {?=} key
         * @return {?}
         */
        DragProvider.prototype.getState = /**
         * \@name getState
         * @param {?=} key
         * @return {?}
         */
            function (key) {
                return key ? this.state[key] : this.state;
            };
        /**
         * @name onDragEnd
         */
        /**
         * \@name onDragEnd
         * @return {?}
         */
        DragProvider.prototype.onDragEnd = /**
         * \@name onDragEnd
         * @return {?}
         */
            function () {
                this.setState({
                    dragging: false,
                    dropping: false,
                    index: undefined
                });
            };
        DragProvider.decorators = [
            { type: core.Injectable }
        ];
        return DragProvider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaults = {
        tagInput: ( /** @type {?} */({
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
        dropdown: ( /** @type {?} */({
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
            matchingFn: matchingFn
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
        var targetValue = target[this.displayBy].toString();
        return targetValue && targetValue
            .toLowerCase()
            .indexOf(value.toLowerCase()) >= 0;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OptionsProvider = /** @class */ (function () {
        function OptionsProvider() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        OptionsProvider.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                OptionsProvider.defaults.tagInput = __assign({}, defaults.tagInput, options.tagInput);
                OptionsProvider.defaults.dropdown = __assign({}, defaults.dropdown, options.dropdown);
            };
        OptionsProvider.defaults = defaults;
        return OptionsProvider;
    }());

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
    var TagInputAccessor = /** @class */ (function () {
        function TagInputAccessor() {
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
        Object.defineProperty(TagInputAccessor.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            set: /**
             * @param {?} items
             * @return {?}
             */ function (items) {
                this._items = items;
                this._onChangeCallback(this._items);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TagInputAccessor.prototype.onTouched = /**
         * @return {?}
         */
            function () {
                this._onTouchedCallback();
            };
        /**
         * @param {?} items
         * @return {?}
         */
        TagInputAccessor.prototype.writeValue = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this._items = items || [];
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        TagInputAccessor.prototype.registerOnChange = /**
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
        TagInputAccessor.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouchedCallback = fn;
            };
        /**
         * @name getItemValue
         * @param item
         * @param fromDropdown
         */
        /**
         * \@name getItemValue
         * @param {?} item
         * @param {?=} fromDropdown
         * @return {?}
         */
        TagInputAccessor.prototype.getItemValue = /**
         * \@name getItemValue
         * @param {?} item
         * @param {?=} fromDropdown
         * @return {?}
         */
            function (item, fromDropdown) {
                if (fromDropdown === void 0) {
                    fromDropdown = false;
                }
                /** @type {?} */
                var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
                return isObject(item) ? item[property] : item;
            };
        /**
         * @name getItemDisplay
         * @param item
         * @param fromDropdown
         */
        /**
         * \@name getItemDisplay
         * @param {?} item
         * @param {?=} fromDropdown
         * @return {?}
         */
        TagInputAccessor.prototype.getItemDisplay = /**
         * \@name getItemDisplay
         * @param {?} item
         * @param {?=} fromDropdown
         * @return {?}
         */
            function (item, fromDropdown) {
                if (fromDropdown === void 0) {
                    fromDropdown = false;
                }
                /** @type {?} */
                var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
                return isObject(item) ? item[property] : item;
            };
        /**
         * @name getItemsWithout
         * @param index
         */
        /**
         * \@name getItemsWithout
         * @param {?} index
         * @return {?}
         */
        TagInputAccessor.prototype.getItemsWithout = /**
         * \@name getItemsWithout
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return this.items.filter(function (item, position) { return position !== index; });
            };
        TagInputAccessor.propDecorators = {
            displayBy: [{ type: core.Input }],
            identifyBy: [{ type: core.Input }]
        };
        return TagInputAccessor;
    }());

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
    function listen(listenerType, action, condition) {
        if (condition === void 0) {
            condition = true;
        }
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
    var TagInputForm = /** @class */ (function () {
        function TagInputForm() {
            /**
             * \@name onSubmit
             */
            this.onSubmit = new core.EventEmitter();
            /**
             * \@name onBlur
             */
            this.onBlur = new core.EventEmitter();
            /**
             * \@name onFocus
             */
            this.onFocus = new core.EventEmitter();
            /**
             * \@name onKeyup
             */
            this.onKeyup = new core.EventEmitter();
            /**
             * \@name onKeydown
             */
            this.onKeydown = new core.EventEmitter();
            /**
             * \@name inputTextChange
             */
            this.inputTextChange = new core.EventEmitter();
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
            this.item = new forms.FormControl({ value: '', disabled: this.disabled });
        }
        Object.defineProperty(TagInputForm.prototype, "inputText", {
            /**
             * @name inputText
             */
            get: /**
             * \@name inputText
             * @return {?}
             */ function () {
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
             */ function (text) {
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
                this.form = new forms.FormGroup({
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
             */ function () {
                return ( /** @type {?} */(this.form.get('item')));
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
            { type: core.Component, args: [{
                        selector: 'tag-input-form',
                        template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
                        styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
                    }] }
        ];
        TagInputForm.propDecorators = {
            onSubmit: [{ type: core.Output }],
            onBlur: [{ type: core.Output }],
            onFocus: [{ type: core.Output }],
            onKeyup: [{ type: core.Output }],
            onKeydown: [{ type: core.Output }],
            inputTextChange: [{ type: core.Output }],
            placeholder: [{ type: core.Input }],
            validators: [{ type: core.Input }],
            asyncValidators: [{ type: core.Input }],
            inputId: [{ type: core.Input }],
            inputClass: [{ type: core.Input }],
            tabindex: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            input: [{ type: core.ViewChild, args: ['input',] }],
            inputText: [{ type: core.Input }]
        };
        return TagInputForm;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaults$1 = core.forwardRef(function () { return OptionsProvider.defaults.dropdown; });
    var TagInputDropdown = /** @class */ (function () {
        function TagInputDropdown(injector) {
            var _this = this;
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
            this.show = function () {
                /** @type {?} */
                var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
                /** @type {?} */
                var value = _this.getFormValue();
                /** @type {?} */
                var hasMinimumText = value.trim().length >= _this.minimumTextLength;
                /** @type {?} */
                var position = _this.calculatePosition();
                /** @type {?} */
                var items = _this.getMatchingItems(value);
                /** @type {?} */
                var hasItems = items.length > 0;
                /** @type {?} */
                var isHidden = _this.isVisible === false;
                /** @type {?} */
                var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
                /** @type {?} */
                var isDisabled = _this.tagInput.disable;
                /** @type {?} */
                var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
                /** @type {?} */
                var shouldHide = _this.isVisible && !hasItems;
                if (_this.autocompleteObservable && hasMinimumText) {
                    return _this.getItemsFromObservable(value);
                }
                if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                    return _this.dropdown.hide();
                }
                _this.setItems(items);
                if (shouldShow) {
                    _this.dropdown.show(position);
                }
                else if (shouldHide) {
                    _this.hide();
                }
            };
            /**
             * \@name requestAdding
             * @param item {Ng2MenuItem}
             */
            this.requestAdding = function (item) {
                return __awaiter(_this, void 0, void 0, function () {
                    var tag;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                tag = this.createTagModel(item);
                                return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            /**
             * \@name resetItems
             */
            this.resetItems = function () {
                _this.items = [];
            };
            /**
             * \@name getItemsFromObservable
             * @param text
             */
            this.getItemsFromObservable = function (text) {
                _this.setLoadingState(true);
                /** @type {?} */
                var subscribeFn = function (data) {
                    // hide loading animation
                    _this.setLoadingState(false)
                        // add items
                        .populateItems(data);
                    _this.setItems(_this.getMatchingItems(text));
                    if (_this.items.length) {
                        _this.dropdown.show(_this.calculatePosition());
                    }
                    else {
                        _this.dropdown.hide();
                    }
                };
                _this.autocompleteObservable(text)
                    .pipe(operators.first())
                    .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
            };
        }
        Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
            /**
             * @name autocompleteItems
             * @desc array of items that will populate the autocomplete
             */
            get: /**
             * \@name autocompleteItems
             * @desc array of items that will populate the autocomplete
             * @return {?}
             */ function () {
                var _this = this;
                /** @type {?} */
                var items = this._autocompleteItems;
                if (!items) {
                    return [];
                }
                return items.map(function (item) {
                    var _a;
                    return typeof item === 'string' ? (_a = {},
                        _a[_this.displayBy] = item,
                        _a[_this.identifyBy] = item,
                        _a) : item;
                });
            },
            /**
             * @name autocompleteItems
             * @param items
             */
            set: /**
             * \@name autocompleteItems
             * @param {?} items
             * @return {?}
             */ function (items) {
                this._autocompleteItems = items;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @name ngOnInit
         */
        /**
         * \@name ngOnInit
         * @return {?}
         */
        TagInputDropdown.prototype.ngOnInit = /**
         * \@name ngOnInit
         * @return {?}
         */
            function () {
                var _this = this;
                this.onItemClicked().subscribe(function (item) {
                    _this.requestAdding(item);
                });
                // reset itemsMatching array when the dropdown is hidden
                this.onHide().subscribe(this.resetItems);
                /** @type {?} */
                var DEBOUNCE_TIME = 200;
                /** @type {?} */
                var KEEP_OPEN = this.keepOpen;
                this.tagInput
                    .onTextChange
                    .asObservable()
                    .pipe(operators.debounceTime(DEBOUNCE_TIME), operators.filter(function (value) {
                    if (KEEP_OPEN === false) {
                        return value.length > 0;
                    }
                    return true;
                }))
                    .subscribe(this.show);
            };
        /**
         * @name updatePosition
         */
        /**
         * \@name updatePosition
         * @return {?}
         */
        TagInputDropdown.prototype.updatePosition = /**
         * \@name updatePosition
         * @return {?}
         */
            function () {
                /** @type {?} */
                var position = this.tagInput.inputForm.getElementPosition();
                this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
            };
        Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
            /**
             * @name isVisible
             */
            get: /**
             * \@name isVisible
             * @return {?}
             */ function () {
                return this.dropdown.menu.state.menuState.isVisible;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @name onHide
         */
        /**
         * \@name onHide
         * @return {?}
         */
        TagInputDropdown.prototype.onHide = /**
         * \@name onHide
         * @return {?}
         */
            function () {
                return this.dropdown.onHide;
            };
        /**
         * @name onItemClicked
         */
        /**
         * \@name onItemClicked
         * @return {?}
         */
        TagInputDropdown.prototype.onItemClicked = /**
         * \@name onItemClicked
         * @return {?}
         */
            function () {
                return this.dropdown.onItemClicked;
            };
        Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
            /**
             * @name selectedItem
             */
            get: /**
             * \@name selectedItem
             * @return {?}
             */ function () {
                return this.dropdown.menu.state.dropdownState.selectedItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagInputDropdown.prototype, "state", {
            /**
             * @name state
             */
            get: /**
             * \@name state
             * @return {?}
             */ function () {
                return this.dropdown.menu.state;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @name hide
         */
        /**
         * \@name hide
         * @return {?}
         */
        TagInputDropdown.prototype.hide = /**
         * \@name hide
         * @return {?}
         */
            function () {
                this.resetItems();
                this.dropdown.hide();
            };
        /**
         * @name scrollListener
         */
        /**
         * \@name scrollListener
         * @return {?}
         */
        TagInputDropdown.prototype.scrollListener = /**
         * \@name scrollListener
         * @return {?}
         */
            function () {
                if (!this.isVisible || !this.dynamicUpdate) {
                    return;
                }
                this.updatePosition();
            };
        /**
         * @name onWindowBlur
         */
        /**
         * \@name onWindowBlur
         * @return {?}
         */
        TagInputDropdown.prototype.onWindowBlur = /**
         * \@name onWindowBlur
         * @return {?}
         */
            function () {
                this.dropdown.hide();
            };
        /**
         * @name getFormValue
         */
        /**
         * \@name getFormValue
         * @return {?}
         */
        TagInputDropdown.prototype.getFormValue = /**
         * \@name getFormValue
         * @return {?}
         */
            function () {
                /** @type {?} */
                var formValue = this.tagInput.formValue;
                return formValue ? formValue.toString().trim() : '';
            };
        /**
         * @name calculatePosition
         */
        /**
         * \@name calculatePosition
         * @return {?}
         */
        TagInputDropdown.prototype.calculatePosition = /**
         * \@name calculatePosition
         * @return {?}
         */
            function () {
                return this.tagInput.inputForm.getElementPosition();
            };
        /**
         * @name createTagModel
         * @param item
         */
        /**
         * \@name createTagModel
         * @param {?} item
         * @return {?}
         */
        TagInputDropdown.prototype.createTagModel = /**
         * \@name createTagModel
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var _a;
                /** @type {?} */
                var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
                /** @type {?} */
                var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
                return __assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
            };
        /**
         *
         * @param value {string}
         */
        /**
         *
         * @param {?} value {string}
         * @return {?}
         */
        TagInputDropdown.prototype.getMatchingItems = /**
         *
         * @param {?} value {string}
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!value && !this.showDropdownIfEmpty) {
                    return [];
                }
                /** @type {?} */
                var dupesAllowed = this.tagInput.allowDupes;
                return this.autocompleteItems.filter(function (item) {
                    /** @type {?} */
                    var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                        /** @type {?} */
                        var identifyBy = _this.tagInput.identifyBy;
                        /** @type {?} */
                        var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                        return model === item[_this.identifyBy];
                    });
                    return _this.matchingFn(value, item) && (hasValue === false);
                });
            };
        /**
         * @name setItems
         */
        /**
         * \@name setItems
         * @param {?} items
         * @return {?}
         */
        TagInputDropdown.prototype.setItems = /**
         * \@name setItems
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.items = items.slice(0, this.limitItemsTo || items.length);
            };
        /**
         * @name populateItems
         * @param data
         */
        /**
         * \@name populateItems
         * @param {?} data
         * @return {?}
         */
        TagInputDropdown.prototype.populateItems = /**
         * \@name populateItems
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                this.autocompleteItems = data.map(function (item) {
                    var _a;
                    return typeof item === 'string' ? (_a = {},
                        _a[_this.displayBy] = item,
                        _a[_this.identifyBy] = item,
                        _a) : item;
                });
                return this;
            };
        /**
         * @name setLoadingState
         * @param state
         */
        /**
         * \@name setLoadingState
         * @param {?} state
         * @return {?}
         */
        TagInputDropdown.prototype.setLoadingState = /**
         * \@name setLoadingState
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.tagInput.isLoading = state;
                return this;
            };
        TagInputDropdown.decorators = [
            { type: core.Component, args: [{
                        selector: 'tag-input-dropdown',
                        template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
                    }] }
        ];
        /** @nocollapse */
        TagInputDropdown.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
        TagInputDropdown.propDecorators = {
            dropdown: [{ type: core.ViewChild, args: [ng2MaterialDropdown.Ng2Dropdown,] }],
            templates: [{ type: core.ContentChildren, args: [core.TemplateRef,] }],
            offset: [{ type: core.Input }],
            focusFirstElement: [{ type: core.Input }],
            showDropdownIfEmpty: [{ type: core.Input }],
            autocompleteObservable: [{ type: core.Input }],
            minimumTextLength: [{ type: core.Input }],
            limitItemsTo: [{ type: core.Input }],
            displayBy: [{ type: core.Input }],
            identifyBy: [{ type: core.Input }],
            matchingFn: [{ type: core.Input }],
            appendToBody: [{ type: core.Input }],
            keepOpen: [{ type: core.Input }],
            dynamicUpdate: [{ type: core.Input }],
            zIndex: [{ type: core.Input }],
            autocompleteItems: [{ type: core.Input }],
            scrollListener: [{ type: core.HostListener, args: ['window:scroll',] }],
            onWindowBlur: [{ type: core.HostListener, args: ['window:blur',] }]
        };
        return TagInputDropdown;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TagRipple = /** @class */ (function () {
        function TagRipple() {
            this.state = 'none';
        }
        TagRipple.decorators = [
            { type: core.Component, args: [{
                        selector: 'tag-ripple',
                        template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                        animations: [
                            animations.trigger('ink', [
                                animations.state('none', animations.style({ width: 0, opacity: 0 })),
                                animations.transition('none => clicked', [
                                    animations.animate(300, animations.keyframes([
                                        animations.style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                        animations.style({ opacity: 1, offset: 0.5, width: '50%' }),
                                        animations.style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                                    ]))
                                ])
                            ])
                        ],
                        styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
                    }] }
        ];
        TagRipple.propDecorators = {
            state: [{ type: core.Input }]
        };
        return TagRipple;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.onSelect = new core.EventEmitter();
            /**
             * \@name onRemove
             */
            this.onRemove = new core.EventEmitter();
            /**
             * \@name onBlur
             */
            this.onBlur = new core.EventEmitter();
            /**
             * \@name onKeyDown
             */
            this.onKeyDown = new core.EventEmitter();
            /**
             * \@name onTagEdited
             */
            this.onTagEdited = new core.EventEmitter();
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
             */ function () {
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
                    : __assign({}, this.model, (_a = {}, _a[this.displayBy] = value, _a));
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: "tag",
                        template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                        styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TagComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TagComponent.propDecorators = {
            model: [{ type: core.Input }],
            removable: [{ type: core.Input }],
            editable: [{ type: core.Input }],
            template: [{ type: core.Input }],
            displayBy: [{ type: core.Input }],
            identifyBy: [{ type: core.Input }],
            index: [{ type: core.Input }],
            hasRipple: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            canAddTag: [{ type: core.Input }],
            onSelect: [{ type: core.Output }],
            onRemove: [{ type: core.Output }],
            onBlur: [{ type: core.Output }],
            onKeyDown: [{ type: core.Output }],
            onTagEdited: [{ type: core.Output }],
            moving: [{ type: core.HostBinding, args: ["class.moving",] }],
            ripple: [{ type: core.ViewChild, args: [TagRipple,] }],
            keydown: [{ type: core.HostListener, args: ["keydown", ["$event"],] }]
        };
        return TagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * \@name animations
     * @type {?}
     */
    var animations$1 = [
        animations.trigger('animation', [
            animations.state('in', animations.style({
                opacity: 1
            })),
            animations.state('out', animations.style({
                opacity: 0
            })),
            animations.transition(':enter', [
                animations.animate("{{ enter }}", animations.keyframes([
                    animations.style({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                    animations.style({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                    animations.style({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                    animations.style({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                    animations.style({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
                ]))
            ]),
            animations.transition(':leave', [
                animations.animate("{{ leave }}", animations.keyframes([
                    animations.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    animations.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                    animations.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
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
    var DragEvent = (( /** @type {?} */(window))).DragEvent;
    /** @type {?} */
    var CUSTOM_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return TagInputComponent; }),
        multi: true
    };
    /** @type {?} */
    var defaults$2 = core.forwardRef(function () { return OptionsProvider.defaults.tagInput; });
    var TagInputComponent = /** @class */ (function (_super) {
        __extends(TagInputComponent, _super);
        function TagInputComponent(renderer, dragProvider) {
            var _a;
            var _this = _super.call(this) || this;
            _this.renderer = renderer;
            _this.dragProvider = dragProvider;
            /**
             * \@name separatorKeys
             * @desc keyboard keys with which a user can separate items
             */
            _this.separatorKeys = new defaults$2().separatorKeys;
            /**
             * \@name separatorKeyCodes
             * @desc keyboard key codes with which a user can separate items
             */
            _this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
            /**
             * \@name placeholder
             * @desc the placeholder of the input text
             */
            _this.placeholder = new defaults$2().placeholder;
            /**
             * \@name secondaryPlaceholder
             * @desc placeholder to appear when the input is empty
             */
            _this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
            /**
             * \@name maxItems
             * @desc maximum number of items that can be added
             */
            _this.maxItems = new defaults$2().maxItems;
            /**
             * \@name validators
             * @desc array of Validators that are used to validate the tag before it gets appended to the list
             */
            _this.validators = new defaults$2().validators;
            /**
             * \@name asyncValidators
             * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
             */
            _this.asyncValidators = new defaults$2().asyncValidators;
            /**
             * - if set to true, it will only possible to add items from the autocomplete
             * \@name onlyFromAutocomplete
             */
            _this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
            /**
             * \@name errorMessages
             */
            _this.errorMessages = new defaults$2().errorMessages;
            /**
             * \@name theme
             */
            _this.theme = new defaults$2().theme;
            /**
             * \@name onTextChangeDebounce
             */
            _this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
            /**
             * - custom id assigned to the input
             * \@name id
             */
            _this.inputId = new defaults$2().inputId;
            /**
             * - custom class assigned to the input
             */
            _this.inputClass = new defaults$2().inputClass;
            /**
             * - option to clear text input when the form is blurred
             * \@name clearOnBlur
             */
            _this.clearOnBlur = new defaults$2().clearOnBlur;
            /**
             * - hideForm
             * \@name clearOnBlur
             */
            _this.hideForm = new defaults$2().hideForm;
            /**
             * \@name addOnBlur
             */
            _this.addOnBlur = new defaults$2().addOnBlur;
            /**
             * \@name addOnPaste
             */
            _this.addOnPaste = new defaults$2().addOnPaste;
            /**
             * - pattern used with the native method split() to separate patterns in the string pasted
             * \@name pasteSplitPattern
             */
            _this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
            /**
             * \@name blinkIfDupe
             */
            _this.blinkIfDupe = new defaults$2().blinkIfDupe;
            /**
             * \@name removable
             */
            _this.removable = new defaults$2().removable;
            /**
             * \@name editable
             */
            _this.editable = new defaults$2().editable;
            /**
             * \@name allowDupes
             */
            _this.allowDupes = new defaults$2().allowDupes;
            /**
             * \@description if set to true, the newly added tags will be added as strings, and not objects
             * \@name modelAsStrings
             */
            _this.modelAsStrings = new defaults$2().modelAsStrings;
            /**
             * \@name trimTags
             */
            _this.trimTags = new defaults$2().trimTags;
            /**
             * \@name ripple
             */
            _this.ripple = new defaults$2().ripple;
            /**
             * \@name tabindex
             * @desc pass through the specified tabindex to the input
             */
            _this.tabindex = new defaults$2().tabIndex;
            /**
             * \@name disable
             */
            _this.disable = new defaults$2().disable;
            /**
             * \@name dragZone
             */
            _this.dragZone = new defaults$2().dragZone;
            /**
             * \@name onRemoving
             */
            _this.onRemoving = new defaults$2().onRemoving;
            /**
             * \@name onAdding
             */
            _this.onAdding = new defaults$2().onAdding;
            /**
             * \@name animationDuration
             */
            _this.animationDuration = new defaults$2().animationDuration;
            /**
             * \@name onAdd
             * @desc event emitted when adding a new item
             */
            _this.onAdd = new core.EventEmitter();
            /**
             * \@name onRemove
             * @desc event emitted when removing an existing item
             */
            _this.onRemove = new core.EventEmitter();
            /**
             * \@name onSelect
             * @desc event emitted when selecting an item
             */
            _this.onSelect = new core.EventEmitter();
            /**
             * \@name onFocus
             * @desc event emitted when the input is focused
             */
            _this.onFocus = new core.EventEmitter();
            /**
             * \@name onFocus
             * @desc event emitted when the input is blurred
             */
            _this.onBlur = new core.EventEmitter();
            /**
             * \@name onTextChange
             * @desc event emitted when the input value changes
             */
            _this.onTextChange = new core.EventEmitter();
            /**
             * - output triggered when text is pasted in the form
             * \@name onPaste
             */
            _this.onPaste = new core.EventEmitter();
            /**
             * - output triggered when tag entered is not valid
             * \@name onValidationError
             */
            _this.onValidationError = new core.EventEmitter();
            /**
             * - output triggered when tag is edited
             * \@name onTagEdited
             */
            _this.onTagEdited = new core.EventEmitter();
            /**
             * \@name isLoading
             */
            _this.isLoading = false;
            /**
             * \@name listeners
             * @desc array of events that get fired using \@fireEvents
             */
            _this.listeners = (_a = {},
                _a[KEYDOWN] = ( /** @type {?} */([])),
                _a[KEYUP] = ( /** @type {?} */([])),
                _a);
            /**
             * \@description emitter for the 2-way data binding inputText value
             * \@name inputTextChange
             */
            _this.inputTextChange = new core.EventEmitter();
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
                if (index === void 0) {
                    index = _this.items.length;
                }
                /** @type {?} */
                var items = _this.items;
                /** @type {?} */
                var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
                _this.items = __spread(items.slice(0, index), [
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
                return __assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
            };
            /**
             *
             * @param tag
             * @param isFromAutocomplete
             */
            _this.isTagValid = function (tag, fromAutocomplete) {
                if (fromAutocomplete === void 0) {
                    fromAutocomplete = false;
                }
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
            _this.onPasteCallback = function (data) {
                return __awaiter(_this, void 0, void 0, function () {
                    var getText, text, requests, resetInput;
                    var _this = this;
                    return __generator(this, function (_a) {
                        getText = function () {
                            /** @type {?} */
                            var isIE = Boolean((( /** @type {?} */(window))).clipboardData);
                            /** @type {?} */
                            var clipboardData = isIE ? ((( /** @type {?} */(window))).clipboardData) : data.clipboardData;
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
                });
            };
            return _this;
        }
        Object.defineProperty(TagInputComponent.prototype, "inputText", {
            /**
             * @name inputText
             */
            get: /**
             * \@name inputText
             * @return {?}
             */ function () {
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
             */ function (text) {
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
             */ function () {
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
                statusChanges$.pipe(operators.filter(function (status) { return status !== 'PENDING'; })).subscribe(function () {
                    _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
                });
                this.isProgressBarVisible$ = statusChanges$.pipe(operators.map(function (status) {
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
                    console.warn(MAX_ITEMS_WARNING);
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
                            .pipe(operators.first())
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
                            .pipe(operators.first())
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
                if (emit === void 0) {
                    emit = true;
                }
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
                switch (KEY_PRESS_ACTIONS[key]) {
                    case ACTIONS_KEYS.DELETE:
                        if (this.selectedTag && this.removable) {
                            /** @type {?} */
                            var index = this.items.indexOf(this.selectedTag);
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
            };
        /**
         * @return {?}
         */
        TagInputComponent.prototype.onFormSubmit = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
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
                if (emitEvent === void 0) {
                    emitEvent = true;
                }
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
                return ( /** @type {?} */(this.inputForm.value));
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
                if (applyFocus === void 0) {
                    applyFocus = false;
                }
                if (displayAutocomplete === void 0) {
                    displayAutocomplete = false;
                }
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
             */ function () {
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
             */ function () {
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
                var item = ( /** @type {?} */({ zone: this.dragZone, tag: tag, index: index }));
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
                var stopSwitch = (direction === NEXT && isLast) ||
                    (direction === PREV && isFirst);
                if (stopSwitch) {
                    this.focus(true);
                    return;
                }
                /** @type {?} */
                var offset = direction === NEXT ? 1 : -1;
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
                if (fromAutocomplete === void 0) {
                    fromAutocomplete = false;
                }
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
                            .pipe(operators.filter(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), operators.first())
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
                listen.call(this, KEYDOWN, listener, useSeparatorKeys);
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
                listen.call(this, KEYDOWN, listener);
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
                    .pipe(operators.debounceTime(this.onTextChangeDebounce))
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
                    .pipe(operators.debounceTime(100), operators.filter(filterFn))
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
                    params: __assign({}, this.animationDuration)
                };
            };
        TagInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tag-input',
                        providers: [CUSTOM_ACCESSOR],
                        template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                        animations: animations$1,
                        styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        TagInputComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: DragProvider }
            ];
        };
        TagInputComponent.propDecorators = {
            separatorKeys: [{ type: core.Input }],
            separatorKeyCodes: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            secondaryPlaceholder: [{ type: core.Input }],
            maxItems: [{ type: core.Input }],
            validators: [{ type: core.Input }],
            asyncValidators: [{ type: core.Input }],
            onlyFromAutocomplete: [{ type: core.Input }],
            errorMessages: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            onTextChangeDebounce: [{ type: core.Input }],
            inputId: [{ type: core.Input }],
            inputClass: [{ type: core.Input }],
            clearOnBlur: [{ type: core.Input }],
            hideForm: [{ type: core.Input }],
            addOnBlur: [{ type: core.Input }],
            addOnPaste: [{ type: core.Input }],
            pasteSplitPattern: [{ type: core.Input }],
            blinkIfDupe: [{ type: core.Input }],
            removable: [{ type: core.Input }],
            editable: [{ type: core.Input }],
            allowDupes: [{ type: core.Input }],
            modelAsStrings: [{ type: core.Input }],
            trimTags: [{ type: core.Input }],
            inputText: [{ type: core.Input }],
            ripple: [{ type: core.Input }],
            tabindex: [{ type: core.Input }],
            disable: [{ type: core.Input }],
            dragZone: [{ type: core.Input }],
            onRemoving: [{ type: core.Input }],
            onAdding: [{ type: core.Input }],
            animationDuration: [{ type: core.Input }],
            onAdd: [{ type: core.Output }],
            onRemove: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onFocus: [{ type: core.Output }],
            onBlur: [{ type: core.Output }],
            onTextChange: [{ type: core.Output }],
            onPaste: [{ type: core.Output }],
            onValidationError: [{ type: core.Output }],
            onTagEdited: [{ type: core.Output }],
            dropdown: [{ type: core.ContentChild, args: [TagInputDropdown,] }],
            templates: [{ type: core.ContentChildren, args: [core.TemplateRef, { descendants: false },] }],
            inputForm: [{ type: core.ViewChild, args: [TagInputForm,] }],
            tags: [{ type: core.ViewChildren, args: [TagComponent,] }],
            inputTextChange: [{ type: core.Output }],
            tabindexAttr: [{ type: core.HostBinding, args: ['attr.tabindex',] }]
        };
        return TagInputComponent;
    }(TagInputAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DeleteIconComponent = /** @class */ (function () {
        function DeleteIconComponent() {
        }
        DeleteIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'delete-icon',
                        template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                        styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
                    }] }
        ];
        return DeleteIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var optionsProvider = new OptionsProvider();
    var TagInputModule = /** @class */ (function () {
        function TagInputModule() {
        }
        /**
         * @name withDefaults
         * @param options {Options}
         */
        /**
         * \@name withDefaults
         * @param {?} options {Options}
         * @return {?}
         */
        TagInputModule.withDefaults = /**
         * \@name withDefaults
         * @param {?} options {Options}
         * @return {?}
         */
            function (options) {
                optionsProvider.setOptions(options);
            };
        TagInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            ng2MaterialDropdown.Ng2DropdownModule
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
                            { provide: forms.COMPOSITION_BUFFER_MODE, useValue: false },
                        ]
                    },] }
        ];
        return TagInputModule;
    }());

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

    exports.TagInputModule = TagInputModule;
    exports.TagInputDropdown = TagInputDropdown;
    exports.DeleteIconComponent = DeleteIconComponent;
    exports.TagInputForm = TagInputForm;
    exports.TagRipple = TagRipple;
    exports.TagComponent = TagComponent;
    exports.TagInputComponent = TagInputComponent;
    exports.ɵb = animations$1;
    exports.ɵa = TagInputAccessor;
    exports.ɵd = HighlightPipe;
    exports.ɵc = DragProvider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoaXBzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNoaXBzL2NvcmUvcGlwZXMvaGlnaGxpZ2h0LnBpcGUudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtY2hpcHMvY29yZS9jb25zdGFudHMvaW5kZXgudHMiLCJuZzovL25neC1jaGlwcy9jb3JlL3Byb3ZpZGVycy9kcmFnLXByb3ZpZGVyLnRzIiwibmc6Ly9uZ3gtY2hpcHMvZGVmYXVsdHMudHMiLCJuZzovL25neC1jaGlwcy9jb3JlL3Byb3ZpZGVycy9vcHRpb25zLXByb3ZpZGVyLnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29yZS9hY2Nlc3Nvci50cyIsIm5nOi8vbmd4LWNoaXBzL2NvcmUvaGVscGVycy9saXN0ZW4udHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL3RhZy1pbnB1dC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNoaXBzL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNoaXBzL2NvbXBvbmVudHMvdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY2hpcHMvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNoaXBzL2NvbXBvbmVudHMvdGFnLWlucHV0L2FuaW1hdGlvbnMudHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL3RhZy1pbnB1dC90YWctaW5wdXQudHMiLCJuZzovL25neC1jaGlwcy9jb21wb25lbnRzL2ljb24vaWNvbi50cyIsIm5nOi8vbmd4LWNoaXBzL3RhZy1pbnB1dC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZXNjYXBlID0gcyA9PiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2hpZ2hsaWdodCdcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHRyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgICAqIEBwYXJhbSBhcmcge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFhcmcudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAoJHtlc2NhcGUoYXJnKX0pYCwgJ2knKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnPGI+JDE8L2I+Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLypcbioqIGNvbnN0YW50cyBhbmQgZGVmYXVsdCB2YWx1ZXMgZm9yIDx0YWctaW5wdXQ+XG4gKi9cblxuZXhwb3J0IGNvbnN0IFBMQUNFSE9MREVSID0gJysgVGFnJztcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfUExBQ0VIT0xERVIgPSAnRW50ZXIgYSBuZXcgdGFnJztcbmV4cG9ydCBjb25zdCBLRVlET1dOID0gJ2tleWRvd24nO1xuZXhwb3J0IGNvbnN0IEtFWVVQID0gJ2tleXVwJztcbmV4cG9ydCBjb25zdCBGT0NVUyA9ICdmb2N1cyc7XG5leHBvcnQgY29uc3QgTUFYX0lURU1TX1dBUk5JTkcgPSAnVGhlIG51bWJlciBvZiBpdGVtcyBzcGVjaWZpZWQgd2FzIGdyZWF0ZXIgdGhhbiB0aGUgcHJvcGVydHkgbWF4LWl0ZW1zLic7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TX0tFWVMgPSB7XG4gICAgREVMRVRFOiAnREVMRVRFJyxcbiAgICBTV0lUQ0hfUFJFVjogJ1NXSVRDSF9QUkVWJyxcbiAgICBTV0lUQ0hfTkVYVDogJ1NXSVRDSF9ORVhUJyxcbiAgICBUQUI6ICdUQUInXG59O1xuXG5leHBvcnQgY29uc3QgS0VZX1BSRVNTX0FDVElPTlMgPSB7XG4gICAgODogQUNUSU9OU19LRVlTLkRFTEVURSxcbiAgICAzNzogQUNUSU9OU19LRVlTLlNXSVRDSF9QUkVWLFxuICAgIDM5OiBBQ1RJT05TX0tFWVMuU1dJVENIX05FWFQsXG4gICAgOTogQUNUSU9OU19LRVlTLlRBQlxufTtcblxuZXhwb3J0IGNvbnN0IERSQUdfQU5EX0RST1BfS0VZID0gJ1RleHQnO1xuZXhwb3J0IGNvbnN0IE5FWFQgPSAnTkVYVCc7XG5leHBvcnQgY29uc3QgUFJFViA9ICdQUkVWJztcblxuIiwiaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhZy1pbnB1dC90YWctaW5wdXQnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi9hY2Nlc3Nvcic7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIERyYWdnZWRUYWcge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgdGFnOiBUYWdNb2RlbDtcbiAgICB6b25lOiBzdHJpbmc7XG59XG5cbmltcG9ydCB7IERSQUdfQU5EX0RST1BfS0VZIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGRyYWdnaW5nOiBib29sZWFuLFxuICAgIGRyb3BwaW5nOiBib29sZWFuLFxuICAgIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdGF0ZVByb3BlcnR5ID0ga2V5b2YgU3RhdGU7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnUHJvdmlkZXIge1xuICAgIHB1YmxpYyBzZW5kZXI6IFRhZ0lucHV0Q29tcG9uZW50O1xuICAgIHB1YmxpYyByZWNlaXZlcjogVGFnSW5wdXRDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIGRyb3BwaW5nOiBmYWxzZSxcbiAgICAgICAgaW5kZXg6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXREcmFnZ2VkSXRlbVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RHJhZ2dlZEl0ZW0oZXZlbnQ6IERyYWdFdmVudCwgdGFnOiBEcmFnZ2VkVGFnKTogdm9pZCB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKERSQUdfQU5EX0RST1BfS0VZLCBKU09OLnN0cmluZ2lmeSh0YWcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXREcmFnZ2VkSXRlbVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREcmFnZ2VkSXRlbShldmVudDogRHJhZ0V2ZW50KTogRHJhZ2dlZFRhZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShEUkFHX0FORF9EUk9QX0tFWSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpIGFzIERyYWdnZWRUYWc7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0U2VuZGVyXG4gICAgICogQHBhcmFtIHNlbmRlclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTZW5kZXIoc2VuZGVyOiBUYWdJbnB1dENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRSZWNlaXZlclxuICAgICAqIEBwYXJhbSByZWNlaXZlclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRSZWNlaXZlcihyZWNlaXZlcjogVGFnSW5wdXRDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRHJvcHBlZFxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKiBAcGFyYW0gaW5kZXhEcmFnZ2VkXG4gICAgICogQHBhcmFtIGluZGV4RHJvcHBlZFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhZ0Ryb3BwZWQodGFnOiBUYWdNb2RlbCwgaW5kZXhEcmFnZ2VkOiBudW1iZXIsIGluZGV4RHJvcHBlZD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uRHJhZ0VuZCgpO1xuXG4gICAgICAgIHRoaXMuc2VuZGVyLm9uUmVtb3ZlUmVxdWVzdGVkKHRhZywgaW5kZXhEcmFnZ2VkKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlci5vbkFkZGluZ1JlcXVlc3RlZChmYWxzZSwgdGFnLCBpbmRleERyb3BwZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFN0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiB7W0sgaW4gU3RhdGVQcm9wZXJ0eV0/OiBTdGF0ZVtLXX0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi50aGlzLnN0YXRlLCAuLi5zdGF0ZX07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0U3RhdGVcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRlKGtleT86IFN0YXRlUHJvcGVydHkpOiBTdGF0ZSB8IFN0YXRlW1N0YXRlUHJvcGVydHldIHtcbiAgICAgICAgcmV0dXJuIGtleSA/IHRoaXMuc3RhdGVba2V5XSA6IHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25EcmFnRW5kXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICBkcm9wcGluZzogZmFsc2UsXG4gICAgICAgICAgICBpbmRleDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBBc3luY1ZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTRUNPTkRBUllfUExBQ0VIT0xERVIsIFBMQUNFSE9MREVSIH0gZnJvbSAnLi9jb3JlL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuL2NvcmUvYWNjZXNzb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0lucHV0T3B0aW9ucyB7XG4gICAgc2VwYXJhdG9yS2V5czogc3RyaW5nW107XG4gICAgc2VwYXJhdG9yS2V5Q29kZXM6IG51bWJlcltdO1xuICAgIG1heEl0ZW1zOiBudW1iZXI7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW107XG4gICAgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW107XG4gICAgb25seUZyb21BdXRvY29tcGxldGU6IGJvb2xlYW47XG4gICAgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG4gICAgdGhlbWU6IHN0cmluZztcbiAgICBvblRleHRDaGFuZ2VEZWJvdW5jZTogbnVtYmVyO1xuICAgIGlucHV0SWQ6IHN0cmluZyB8IG51bGw7XG4gICAgaW5wdXRDbGFzczogc3RyaW5nO1xuICAgIGNsZWFyT25CbHVyOiBib29sZWFuO1xuICAgIGhpZGVGb3JtOiBib29sZWFuO1xuICAgIGFkZE9uQmx1cjogYm9vbGVhbjtcbiAgICBhZGRPblBhc3RlOiBib29sZWFuO1xuICAgIHBhc3RlU3BsaXRQYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHA7XG4gICAgYmxpbmtJZkR1cGU6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAgIGVkaXRhYmxlOiBib29sZWFuO1xuICAgIGFsbG93RHVwZXM6IGJvb2xlYW47XG4gICAgbW9kZWxBc1N0cmluZ3M6IGJvb2xlYW47XG4gICAgdHJpbVRhZ3M6IGJvb2xlYW47XG4gICAgcmlwcGxlOiBib29sZWFuO1xuICAgIHRhYkluZGV4OiBzdHJpbmc7XG4gICAgZGlzYWJsZTogYm9vbGVhbjtcbiAgICBkcmFnWm9uZTogc3RyaW5nO1xuICAgIG9uUmVtb3Zpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgb25BZGRpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgZGlzcGxheUJ5OiBzdHJpbmc7XG4gICAgaWRlbnRpZnlCeTogc3RyaW5nO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgIGVudGVyOiBzdHJpbmcsXG4gICAgICAgIGxlYXZlOiBzdHJpbmdcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIHtcbiAgICBkaXNwbGF5Qnk6IHN0cmluZztcbiAgICBpZGVudGlmeUJ5OiBzdHJpbmc7XG4gICAgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIG9mZnNldDogc3RyaW5nO1xuICAgIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuO1xuICAgIHNob3dEcm9wZG93bklmRW1wdHk6IGJvb2xlYW47XG4gICAgbWluaW11bVRleHRMZW5ndGg6IG51bWJlcjtcbiAgICBsaW1pdEl0ZW1zVG86IG51bWJlcjtcbiAgICBrZWVwT3BlbjogYm9vbGVhbjtcbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICBkeW5hbWljVXBkYXRlOiBib29sZWFuO1xuICAgIG1hdGNoaW5nRm46ICh2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgdGFnSW5wdXQ6IDxUYWdJbnB1dE9wdGlvbnM+e1xuICAgICAgICBzZXBhcmF0b3JLZXlzOiBbXSxcbiAgICAgICAgc2VwYXJhdG9yS2V5Q29kZXM6IFtdLFxuICAgICAgICBtYXhJdGVtczogSW5maW5pdHksXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQTEFDRUhPTERFUixcbiAgICAgICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IFNFQ09OREFSWV9QTEFDRUhPTERFUixcbiAgICAgICAgdmFsaWRhdG9yczogW10sXG4gICAgICAgIGFzeW5jVmFsaWRhdG9yczogW10sXG4gICAgICAgIG9ubHlGcm9tQXV0b2NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge30sXG4gICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgb25UZXh0Q2hhbmdlRGVib3VuY2U6IDI1MCxcbiAgICAgICAgaW5wdXRJZDogbnVsbCxcbiAgICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICAgIGNsZWFyT25CbHVyOiBmYWxzZSxcbiAgICAgICAgaGlkZUZvcm06IGZhbHNlLFxuICAgICAgICBhZGRPbkJsdXI6IGZhbHNlLFxuICAgICAgICBhZGRPblBhc3RlOiBmYWxzZSxcbiAgICAgICAgcGFzdGVTcGxpdFBhdHRlcm46ICcsJyxcbiAgICAgICAgYmxpbmtJZkR1cGU6IHRydWUsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZSxcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICBhbGxvd0R1cGVzOiBmYWxzZSxcbiAgICAgICAgbW9kZWxBc1N0cmluZ3M6IGZhbHNlLFxuICAgICAgICB0cmltVGFnczogdHJ1ZSxcbiAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICB0YWJJbmRleDogJycsXG4gICAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnWm9uZTogJycsXG4gICAgICAgIG9uUmVtb3Zpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgb25BZGRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzcGxheUJ5OiAnZGlzcGxheScsXG4gICAgICAgIGlkZW50aWZ5Qnk6ICd2YWx1ZScsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogJzI1MG1zJyxcbiAgICAgICAgICAgIGxlYXZlOiAnMTUwbXMnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyb3Bkb3duOiA8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+e1xuICAgICAgICBkaXNwbGF5Qnk6ICdkaXNwbGF5JyxcbiAgICAgICAgaWRlbnRpZnlCeTogJ3ZhbHVlJyxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0cnVlLFxuICAgICAgICBvZmZzZXQ6ICc1MCAwJyxcbiAgICAgICAgZm9jdXNGaXJzdEVsZW1lbnQ6IGZhbHNlLFxuICAgICAgICBzaG93RHJvcGRvd25JZkVtcHR5OiBmYWxzZSxcbiAgICAgICAgbWluaW11bVRleHRMZW5ndGg6IDEsXG4gICAgICAgIGxpbWl0SXRlbXNUbzogSW5maW5pdHksXG4gICAgICAgIGtlZXBPcGVuOiB0cnVlLFxuICAgICAgICBkeW5hbWljVXBkYXRlOiB0cnVlLFxuICAgICAgICB6SW5kZXg6IDEwMDAsXG4gICAgICAgIG1hdGNoaW5nRm5cbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG1hdGNoaW5nRm5cbiAqIEBwYXJhbSB0aGlzXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gbWF0Y2hpbmdGbih0aGlzOiBUYWdJbnB1dERyb3Bkb3duLCB2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbdGhpcy5kaXNwbGF5QnldLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0VmFsdWUgJiYgdGFyZ2V0VmFsdWVcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPj0gMDtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzLCBUYWdJbnB1dE9wdGlvbnMsIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICAgIHRhZ0lucHV0Pzoge1xuICAgICAgICBbUCBpbiBrZXlvZiBUYWdJbnB1dE9wdGlvbnNdPzogVGFnSW5wdXRPcHRpb25zW1BdO1xuICAgIH07XG4gICAgZHJvcGRvd24/OiB7XG4gICAgICAgIFtQIGluIGtleW9mIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zXT86IFRhZ0lucHV0RHJvcGRvd25PcHRpb25zW1BdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbnNQcm92aWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQgPSB7Li4uZGVmYXVsdHMudGFnSW5wdXQsIC4uLm9wdGlvbnMudGFnSW5wdXR9O1xuICAgICAgICBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMuZHJvcGRvd24gPSB7Li4uZGVmYXVsdHMuZHJvcGRvd24sIC4uLm9wdGlvbnMuZHJvcGRvd259O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGFnSW5wdXREcm9wZG93bk9wdGlvbnMsIFRhZ0lucHV0T3B0aW9ucyB9OyIsImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXREcm9wZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWdNb2RlbENsYXNzIHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFRhZ01vZGVsID0gc3RyaW5nIHwgVGFnTW9kZWxDbGFzcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdJbnB1dEFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX2l0ZW1zOiBUYWdNb2RlbFtdID0gW107XG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKGl0ZW1zOiBUYWdNb2RlbFtdKSA9PiB2b2lkO1xuXG4gICAgcHVibGljIGRyb3Bkb3duOiBUYWdJbnB1dERyb3Bkb3duO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc3BsYXlCeTogc3RyaW5nID0gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0LmRpc3BsYXlCeTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlkZW50aWZ5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZnlCeTogc3RyaW5nID0gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IFRhZ01vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpdGVtcyhpdGVtczogVGFnTW9kZWxbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX2l0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ub3VjaGVkKCkge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKGl0ZW1zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbVZhbHVlXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZnJvbURyb3Bkb3duXG4gICAgICovXG4gICAgcHVibGljIGdldEl0ZW1WYWx1ZShpdGVtOiBUYWdNb2RlbCwgZnJvbURyb3Bkb3duID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGZyb21Ecm9wZG93biAmJiB0aGlzLmRyb3Bkb3duID8gdGhpcy5kcm9wZG93bi5pZGVudGlmeUJ5IDogdGhpcy5pZGVudGlmeUJ5O1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPyBpdGVtW3Byb3BlcnR5XSA6IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbURpc3BsYXlcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBmcm9tRHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbURpc3BsYXkoaXRlbTogVGFnTW9kZWwsIGZyb21Ecm9wZG93biA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBmcm9tRHJvcGRvd24gJiYgdGhpcy5kcm9wZG93biA/IHRoaXMuZHJvcGRvd24uZGlzcGxheUJ5IDogdGhpcy5kaXNwbGF5Qnk7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA/IGl0ZW1bcHJvcGVydHldIDogaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtc1dpdGhvdXRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNXaXRob3V0KGluZGV4OiBudW1iZXIpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtLCBwb3NpdGlvbikgPT4gcG9zaXRpb24gIT09IGluZGV4KTtcbiAgICB9XG59XG4iLCJcbi8qKlxuICogQG5hbWUgbGlzdGVuXG4gKiBAcGFyYW0gbGlzdGVuZXJUeXBlXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gY29uZGl0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXJUeXBlOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gYW55LCBjb25kaXRpb24gPSB0cnVlKTogdm9pZCB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHByb3ZpZGVkIGRvZXMgbm90IGV4aXN0LCB0aHJvdyBhbiBlcnJvclxuICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzT3duUHJvcGVydHkobGlzdGVuZXJUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBldmVudCBlbnRlcmVkIG1heSBiZSB3cm9uZycpO1xuICAgIH1cblxuICAgIC8vIGlmIGEgY29uZGl0aW9uIGlzIHByZXNlbnQgYW5kIGlzIGZhbHNlLCBleGl0IGVhcmx5XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZpcmUgbGlzdGVuZXJcbiAgICB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lclR5cGVdLnB1c2goYWN0aW9uKTtcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dC1mb3JtJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWctaW5wdXQtZm9ybS5zdHlsZS5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1mb3JtLnRlbXBsYXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0Rm9ybSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblN1Ym1pdFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25CbHVyXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25Gb2N1c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Gb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleXVwXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbktleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uS2V5ZG93blxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dENoYW5nZVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgaW5wdXRUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIGlucHV0c1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcGxhY2Vob2xkZXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHZhbGlkYXRvcnNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXN5bmNWYWxpZGF0b3JzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgQXN5bmNWYWxpZGF0b3IgdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSB0aGUgdGFnIGJlZm9yZSBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBsaXN0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dElkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlucHV0SWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0Q2xhc3NcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGFiaW5kZXhcbiAgICAgKiBAZGVzYyBwYXNzIHRocm91Z2ggdGhlIHNwZWNpZmllZCB0YWJpbmRleCB0byB0aGUgaW5wdXRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiaW5kZXggPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc2FibGVkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2lucHV0JykgcHVibGljIGlucHV0O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9ybVxuICAgICAqL1xuICAgIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaW5wdXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0udmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0XG4gICAgICogQHBhcmFtIHRleHQge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGlucHV0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pdGVtLnNldFZhbHVlKHRleHQpO1xuXG4gICAgICAgIHRoaXMuaW5wdXRUZXh0Q2hhbmdlLmVtaXQodGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVtOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICcnLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZH0pO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXRlbS5zZXRWYWxpZGF0b3JzKHRoaXMudmFsaWRhdG9ycyk7XG4gICAgICAgIHRoaXMuaXRlbS5zZXRBc3luY1ZhbGlkYXRvcnModGhpcy5hc3luY1ZhbGlkYXRvcnMpO1xuXG4gICAgICAgIC8vIGNyZWF0aW5nIGZvcm1cbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAmJiAhY2hhbmdlcy5kaXNhYmxlZC5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydpdGVtJ10uZGlzYWJsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2l0ZW0nXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBGb3JtQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KCdpdGVtJykgYXMgRm9ybUNvbnRyb2w7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNJbnB1dEZvY3VzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJbnB1dEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGRvYyA/IGRvYy5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRFcnJvck1lc3NhZ2VzXG4gICAgICogQHBhcmFtIG1lc3NhZ2VzXG4gICAgICovXG4gICAgcHVibGljIGdldEVycm9yTWVzc2FnZXMobWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtZXNzYWdlcylcbiAgICAgICAgICAgIC5maWx0ZXIoZXJyID0+IHRoaXMudmFsdWUuaGFzRXJyb3IoZXJyKSlcbiAgICAgICAgICAgIC5tYXAoZXJyID0+IG1lc3NhZ2VzW2Vycl0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhhc0Vycm9yc1xuICAgICAqL1xuICAgIHB1YmxpYyBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHtkaXJ0eSwgdmFsdWUsIHZhbGlkfSA9IHRoaXMuZm9ybTtcbiAgICAgICAgcmV0dXJuIGRpcnR5ICYmIHZhbHVlLml0ZW0gJiYgIXZhbGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBibHVyXG4gICAgICovXG4gICAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0RWxlbWVudFBvc2l0aW9uXG4gICAgICovXG4gICAgcHVibGljIGdldEVsZW1lbnRQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHJlbW92ZXMgaW5wdXQgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICogQG5hbWUgZGVzdHJveVxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlEb3duXG4gICAgICogQHBhcmFtICRldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbktleURvd24oJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy52YWx1ZS52YWx1ZTtcbiAgICAgICAgaWYgKCRldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCRldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub25LZXlkb3duLmVtaXQoJGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbktleVVwXG4gICAgICogQHBhcmFtICRldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbktleVVwKCRldmVudCkge1xuICAgICAgICB0aGlzLmlucHV0VGV4dCA9IHRoaXMudmFsdWUudmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLm9uS2V5dXAuZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN1Ym1pdFxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJtaXQoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbmplY3RvcixcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVHlwZSxcbiAgICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyByeFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIGZpcnN0LCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5nMkRyb3Bkb3duLCBOZzJNZW51SXRlbSB9IGZyb20gJ25nMi1tYXRlcmlhbC1kcm9wZG93bic7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Byb3ZpZGVycy9vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IFRhZ0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duT3B0aW9ucyB9IGZyb20gJy4uLy4uL2RlZmF1bHRzJztcbmltcG9ydCB7IFRhZ01vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hY2Nlc3Nvcic7XG5cbmNvbnN0IGRlZmF1bHRzOiBUeXBlPFRhZ0lucHV0RHJvcGRvd25PcHRpb25zPiA9IGZvcndhcmRSZWYoKCkgPT4gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLmRyb3Bkb3duKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctaW5wdXQtZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWctaW5wdXQtZHJvcGRvd24udGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXREcm9wZG93biB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgZHJvcGRvd25cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKE5nMkRyb3Bkb3duKSBwdWJsaWMgZHJvcGRvd246IE5nMkRyb3Bkb3duO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWVudVRlbXBsYXRlXG4gICAgICogQGRlc2MgcmVmZXJlbmNlIHRvIHRoZSB0ZW1wbGF0ZSBpZiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9mZnNldFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvZmZzZXQ6IHN0cmluZyA9IG5ldyBkZWZhdWx0cygpLm9mZnNldDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50ID0gbmV3IGRlZmF1bHRzKCkuZm9jdXNGaXJzdEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3cgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIGlmIHRoZSB2YWx1ZSBvZiBpbnB1dCBpcyBlbXB0eVxuICAgICAqIEBuYW1lIHNob3dEcm9wZG93bklmRW1wdHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IG5ldyBkZWZhdWx0cygpLnNob3dEcm9wZG93bklmRW1wdHk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gb2JzZXJ2YWJsZSBwYXNzZWQgYXMgaW5wdXQgd2hpY2ggcG9wdWxhdGVzIHRoZSBhdXRvY29tcGxldGUgaXRlbXNcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVPYnNlcnZhYmxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9jb21wbGV0ZU9ic2VydmFibGU6ICh0ZXh0OiBzdHJpbmcpID0+IE9ic2VydmFibGU8YW55PjtcblxuICAgIC8qKlxuICAgICAqIC0gZGVzYyBtaW5pbXVtIHRleHQgbGVuZ3RoIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93blxuICAgICAqIEBuYW1lIG1pbmltdW1UZXh0TGVuZ3RoXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1pbmltdW1UZXh0TGVuZ3RoID0gbmV3IGRlZmF1bHRzKCkubWluaW11bVRleHRMZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiAtIG51bWJlciBvZiBpdGVtcyB0byBkaXNwbGF5IGluIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd25cbiAgICAgKiBAbmFtZSBsaW1pdEl0ZW1zVG9cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGltaXRJdGVtc1RvOiBudW1iZXIgPSBuZXcgZGVmYXVsdHMoKS5saW1pdEl0ZW1zVG87XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheUJ5ID0gbmV3IGRlZmF1bHRzKCkuZGlzcGxheUJ5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaWRlbnRpZnlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5ID0gbmV3IGRlZmF1bHRzKCkuaWRlbnRpZnlCeTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBhIGZ1bmN0aW9uIGEgZGV2ZWxvcGVyIGNhbiB1c2UgdG8gaW1wbGVtZW50IGN1c3RvbSBtYXRjaGluZyBmb3IgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIEBuYW1lIG1hdGNoaW5nRm5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWF0Y2hpbmdGbjogKHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpID0+IGJvb2xlYW4gPSBuZXcgZGVmYXVsdHMoKS5tYXRjaGluZ0ZuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXBwZW5kVG9Cb2R5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFwcGVuZFRvQm9keSA9IG5ldyBkZWZhdWx0cygpLmFwcGVuZFRvQm9keTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGtlZXBPcGVuXG4gICAgICogQGRlc2NyaXB0aW9uIG9wdGlvbiB0byBsZWF2ZSBkcm9wZG93biBvcGVuIHdoZW4gYWRkaW5nIGEgbmV3IGl0ZW1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMga2VlcE9wZW4gPSBuZXcgZGVmYXVsdHMoKS5rZWVwT3BlbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGR5bmFtaWNVcGRhdGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZHluYW1pY1VwZGF0ZSA9IG5ldyBkZWZhdWx0cygpLmR5bmFtaWNVcGRhdGU7XG5cbiAgICAvKipcbiAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSBuZXcgZGVmYXVsdHMoKS56SW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBsaXN0IG9mIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IChmb3IgYXV0b2NvbXBsZXRlKVxuICAgICAqIEBuYW1lIGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIGl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWdJbnB1dFxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdJbnB1dDogVGFnSW5wdXRDb21wb25lbnQgPSB0aGlzLmluamVjdG9yLmdldChUYWdJbnB1dENvbXBvbmVudCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBfYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hdXRvY29tcGxldGVJdGVtczogVGFnTW9kZWxbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGF1dG9jb21wbGV0ZUl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZUl0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXV0b2NvbXBsZXRlSXRlbXNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBpdGVtcyB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXQgYXV0b2NvbXBsZXRlSXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fYXV0b2NvbXBsZXRlSXRlbXM7XG5cbiAgICAgICAgaWYgKCFpdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyB7XG4gICAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaXRlbSxcbiAgICAgICAgICAgICAgICBbdGhpcy5pZGVudGlmeUJ5XTogaXRlbVxuICAgICAgICAgICAgfSA6IGl0ZW07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbmdPbkluaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25JdGVtQ2xpY2tlZCgpLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFkZGluZyhpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVzZXQgaXRlbXNNYXRjaGluZyBhcnJheSB3aGVuIHRoZSBkcm9wZG93biBpcyBoaWRkZW5cbiAgICAgICAgdGhpcy5vbkhpZGUoKS5zdWJzY3JpYmUodGhpcy5yZXNldEl0ZW1zKTtcblxuICAgICAgICBjb25zdCBERUJPVU5DRV9USU1FID0gMjAwO1xuICAgICAgICBjb25zdCBLRUVQX09QRU4gPSB0aGlzLmtlZXBPcGVuO1xuXG4gICAgICAgIHRoaXMudGFnSW5wdXRcbiAgICAgICAgICAgIC5vblRleHRDaGFuZ2VcbiAgICAgICAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuICAgICAgICAgICAgICAgIGZpbHRlcigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoS0VFUF9PUEVOID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnNob3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd24ubWVudS51cGRhdGVQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc1Zpc2libGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ubWVudS5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uSGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkhpZGUoKTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSGlkZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gICAgICovXG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQoKTogRXZlbnRFbWl0dGVyPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5vbkl0ZW1DbGlja2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ubWVudS5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ubWVudS5zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBuYW1lIHNob3dcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbWF4SXRlbXNSZWFjaGVkID0gdGhpcy50YWdJbnB1dC5pdGVtcy5sZW5ndGggPT09IHRoaXMudGFnSW5wdXQubWF4SXRlbXM7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRGb3JtVmFsdWUoKTtcbiAgICAgICAgY29uc3QgaGFzTWluaW11bVRleHQgPSB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMubWluaW11bVRleHRMZW5ndGg7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgaXNIaWRkZW4gPSB0aGlzLmlzVmlzaWJsZSA9PT0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93bklmRW1wdHkgPSB0aGlzLnNob3dEcm9wZG93bklmRW1wdHkgJiYgaGFzSXRlbXMgJiYgIXZhbHVlO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy50YWdJbnB1dC5kaXNhYmxlO1xuXG4gICAgICAgIGNvbnN0IHNob3VsZFNob3cgPSBpc0hpZGRlbiAmJiAoKGhhc0l0ZW1zICYmIGhhc01pbmltdW1UZXh0KSB8fCBzaG93RHJvcGRvd25JZkVtcHR5KTtcbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZSA9IHRoaXMuaXNWaXNpYmxlICYmICFoYXNJdGVtcztcblxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVPYnNlcnZhYmxlICYmIGhhc01pbmltdW1UZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtc0Zyb21PYnNlcnZhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoIXRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSAmJiAhdmFsdWUpIHx8IG1heEl0ZW1zUmVhY2hlZCB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaG91bGRIaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNjcm9sbExpc3RlbmVyXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcpXG4gICAgcHVibGljIHNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlIHx8ICF0aGlzLmR5bmFtaWNVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbldpbmRvd0JsdXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Ymx1cicpXG4gICAgcHVibGljIG9uV2luZG93Qmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0Rm9ybVZhbHVlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRGb3JtVmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy50YWdJbnB1dC5mb3JtVmFsdWU7XG4gICAgICAgIHJldHVybiBmb3JtVmFsdWUgPyBmb3JtVmFsdWUudG9TdHJpbmcoKS50cmltKCkgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjYWxjdWxhdGVQb3NpdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgY2FsY3VsYXRlUG9zaXRpb24oKTogQ2xpZW50UmVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ0lucHV0LmlucHV0Rm9ybS5nZXRFbGVtZW50UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByZXF1ZXN0QWRkaW5nXG4gICAgICogQHBhcmFtIGl0ZW0ge05nMk1lbnVJdGVtfVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVxdWVzdEFkZGluZyA9IGFzeW5jIChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmNyZWF0ZVRhZ01vZGVsKGl0ZW0pO1xuICAgICAgICBhd2FpdCB0aGlzLnRhZ0lucHV0Lm9uQWRkaW5nUmVxdWVzdGVkKHRydWUsIHRhZykuY2F0Y2goKCkgPT4ge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNyZWF0ZVRhZ01vZGVsXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVRhZ01vZGVsKGl0ZW06IE5nMk1lbnVJdGVtKTogVGFnTW9kZWwge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnID8gaXRlbS52YWx1ZSA6IGl0ZW0udmFsdWVbdGhpcy5kaXNwbGF5QnldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBpdGVtLnZhbHVlID09PSAnc3RyaW5nJyA/IGl0ZW0udmFsdWUgOiBpdGVtLnZhbHVlW3RoaXMuaWRlbnRpZnlCeV07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLml0ZW0udmFsdWUsXG4gICAgICAgICAgICBbdGhpcy50YWdJbnB1dC5kaXNwbGF5QnldOiBkaXNwbGF5LFxuICAgICAgICAgICAgW3RoaXMudGFnSW5wdXQuaWRlbnRpZnlCeV06IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1hdGNoaW5nSXRlbXModmFsdWU6IHN0cmluZyk6IFRhZ01vZGVsW10ge1xuICAgICAgICBpZiAoIXZhbHVlICYmICF0aGlzLnNob3dEcm9wZG93bklmRW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGVzQWxsb3dlZCA9IHRoaXMudGFnSW5wdXQuYWxsb3dEdXBlcztcblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRvY29tcGxldGVJdGVtcy5maWx0ZXIoKGl0ZW06IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IGR1cGVzQWxsb3dlZCA/IGZhbHNlIDogdGhpcy50YWdJbnB1dC50YWdzLnNvbWUodGFnID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGVudGlmeUJ5ID0gdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gdHlwZW9mIHRhZy5tb2RlbCA9PT0gJ3N0cmluZycgPyB0YWcubW9kZWwgOiB0YWcubW9kZWxbaWRlbnRpZnlCeV07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwgPT09IGl0ZW1bdGhpcy5pZGVudGlmeUJ5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGluZ0ZuKHZhbHVlLCBpdGVtKSAmJiAoaGFzVmFsdWUgPT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0SXRlbXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5zbGljZSgwLCB0aGlzLmxpbWl0SXRlbXNUbyB8fCBpdGVtcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlc2V0SXRlbXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc2V0SXRlbXMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwb3B1bGF0ZUl0ZW1zXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvcHVsYXRlSXRlbXMoZGF0YTogYW55KTogVGFnSW5wdXREcm9wZG93biB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSXRlbXMgPSBkYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyB7XG4gICAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaXRlbSxcbiAgICAgICAgICAgICAgICBbdGhpcy5pZGVudGlmeUJ5XTogaXRlbVxuICAgICAgICAgICAgfSA6IGl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEl0ZW1zRnJvbU9ic2VydmFibGVcbiAgICAgKiBAcGFyYW0gdGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZSA9ICh0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlRm4gPSAoZGF0YTogYW55W10pID0+IHtcbiAgICAgICAgICAgIC8vIGhpZGUgbG9hZGluZyBhbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMuc2V0TG9hZGluZ1N0YXRlKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vIGFkZCBpdGVtc1xuICAgICAgICAgICAgICAgIC5wb3B1bGF0ZUl0ZW1zKGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0TWF0Y2hpbmdJdGVtcyh0ZXh0KSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uc2hvdyh0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZU9ic2VydmFibGUodGV4dClcbiAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN1YnNjcmliZUZuLCAoKSA9PiB0aGlzLnNldExvYWRpbmdTdGF0ZShmYWxzZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldExvYWRpbmdTdGF0ZVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0TG9hZGluZ1N0YXRlKHN0YXRlOiBib29sZWFuKTogVGFnSW5wdXREcm9wZG93biB7XG4gICAgICAgIHRoaXMudGFnSW5wdXQuaXNMb2FkaW5nID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIHRyaWdnZXIsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICBrZXlmcmFtZXMsXG4gICAgc3RhdGVcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLXJpcHBsZScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLXJpcHBsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1yaXBwbGVcIiBbQGlua109XCJzdGF0ZVwiPjwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdpbmsnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHt3aWR0aDogMCwgb3BhY2l0eTogMH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gY2xpY2tlZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMCwgd2lkdGg6ICczMCUnLCBib3JkZXJSYWRpdXM6ICcxMDAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjUsIHdpZHRoOiAnNTAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMC41LCBvZmZzZXQ6IDEsIHdpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzE2cHgnfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdSaXBwbGUge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdGF0ZTogc3RyaW5nID0gJ25vbmUnO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYWNjZXNzb3InO1xuaW1wb3J0IHsgVGFnUmlwcGxlIH0gZnJvbSAnLi4vdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50TGlrZSB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVycy9ldmVudC1saWtlJztcblxuLy8gbW9ja2luZyBuYXZpZ2F0b3JcbmNvbnN0IG5hdmlnYXRvciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5hdmlnYXRvciA6IHtcbiAgICB1c2VyQWdlbnQ6ICdDaHJvbWUnLFxuICAgIHZlbmRvcjogJ0dvb2dsZSBJbmMnXG59O1xuXG5jb25zdCBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInRhZ1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFnLnRlbXBsYXRlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdGFnLWNvbXBvbmVudC5zdHlsZS5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgbW9kZWwge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGVsOiBUYWdNb2RlbDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZW1vdmFibGU6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlZGl0YWJsZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRlbXBsYXRlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5IHtzdHJpbmd9XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWRlbnRpZnlCeTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5kZXgge251bWJlcn1cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzUmlwcGxlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzUmlwcGxlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FuQWRkVGFnXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuQWRkVGFnOiAodGFnOiBUYWdNb2RlbCkgPT4gYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU2VsZWN0XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQmx1clxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkJsdXI6IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25LZXlEb3duXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRWRpdGVkXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVGFnRWRpdGVkOiBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlYWRvbmx5IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5tb2RlbCAhPT0gXCJzdHJpbmdcIiAmJiB0aGlzLm1vZGVsLnJlYWRvbmx5ID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGVkaXRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZWRpdGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbW92aW5nXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubW92aW5nXCIpXG4gICAgcHVibGljIG1vdmluZzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJpcHBsZVN0YXRlXG4gICAgICovXG4gICAgcHVibGljIHJpcHBsZVN0YXRlID0gXCJub25lXCI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByaXBwbGUge1RhZ1JpcHBsZX1cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKFRhZ1JpcHBsZSlcbiAgICBwdWJsaWMgcmlwcGxlOiBUYWdSaXBwbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMubW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2V5ZG93blxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMga2V5ZG93bihldmVudDogRXZlbnRMaWtlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRpbmcpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFZGl0TW9kZShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bi5lbWl0KHsgZXZlbnQsIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYmxpbmtcbiAgICAgKi9cbiAgICBwdWJsaWMgYmxpbmsoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChcImJsaW5rXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2xhc3NMaXN0LnJlbW92ZShcImJsaW5rXCIpLCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlRWRpdE1vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlRWRpdE1vZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0aW5nID8gdW5kZWZpbmVkIDogdGhpcy5hY3RpdmF0ZUVkaXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkJsdXJyZWRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVycmVkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2tzIGlmIGl0IGlzIGVkaXRhYmxlIGZpcnN0IGJlZm9yZSBoYW5kZWxpbmcgdGhlIG9uQmx1cnJlZCBldmVudCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgICAgIC8vIGEgYnVnIGluIElFIHdoZXJlIHRhZ3MgYXJlIHN0aWxsIGVkaXRhYmxlIHdpdGggb25seUZyb21BdXRvY29tcGxldGUgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc2FibGVFZGl0TW9kZSgpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMubW9kZWwgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgICAgOiB7IC4uLnRoaXMubW9kZWwsIFt0aGlzLmRpc3BsYXlCeV06IHZhbHVlIH07XG5cbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdChyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldERpc3BsYXlWYWx1ZVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldERpc3BsYXlWYWx1ZShpdGVtOiBUYWdNb2RlbCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIiA/IGl0ZW0gOiBpdGVtW3RoaXMuZGlzcGxheUJ5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyByZXR1cm5zIHdoZXRoZXIgdGhlIHJpcHBsZSBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAqIG9ubHkgd29ya3MgaW4gQ2hyb21lXG4gICAgICogQG5hbWUgaXNSaXBwbGVWaXNpYmxlXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1JpcHBsZVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5lZGl0aW5nICYmIGlzQ2hyb21lICYmIHRoaXMuaGFzUmlwcGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc2FibGVFZGl0TW9kZVxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZUVkaXRNb2RlKCRldmVudD86IEV2ZW50TGlrZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDb250ZW50RWRpdGFibGVUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoXCJ0YWctLWVkaXRpbmdcIik7XG5cbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50RWRpdGFibGVUZXh0KHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yZU5ld1ZhbHVlKGlucHV0KTtcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgaWYgKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0RlbGV0ZUljb25WaXNpYmxlXG4gICAgICovXG4gICAgcHVibGljIGlzRGVsZXRlSWNvblZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnJlbW92YWJsZSAmJiAhdGhpcy5lZGl0aW5nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0Q29udGVudEVkaXRhYmxlVGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29udGVudEVkaXRhYmxlVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q29udGVudEVkaXRhYmxlKCk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0ID8gaW5wdXQuaW5uZXJUZXh0LnRyaW0oKSA6IFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0Q29udGVudEVkaXRhYmxlVGV4dFxuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0Q29udGVudEVkaXRhYmxlVGV4dChtb2RlbDogVGFnTW9kZWwpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldENvbnRlbnRFZGl0YWJsZSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKG1vZGVsKTtcblxuICAgICAgICBpbnB1dC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZVxuICAgICAqL1xuICAgIHByaXZhdGUgYWN0aXZhdGVFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCd0YWctLWVkaXRpbmcnKTtcblxuICAgICAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0b3JlTmV3VmFsdWVcbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0b3JlTmV3VmFsdWUoaW5wdXQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBleGlzdHMgPSAodGFnOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyB0YWcgPT09IGlucHV0XG4gICAgICAgICAgICAgICAgOiB0YWdbdGhpcy5kaXNwbGF5QnldID09PSBpbnB1dDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYXNJZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsW3RoaXMuaWRlbnRpZnlCeV0gIT09IHRoaXMubW9kZWxbdGhpcy5kaXNwbGF5QnldO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLCByZXBsYWNlIHRoZSB2YWx1ZSBpbiB0aGUgbW9kZWxcbiAgICAgICAgaWYgKGV4aXN0cyh0aGlzLm1vZGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kZWwgPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMubW9kZWwgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBpbnB1dFxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBoYXNJZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5tb2RlbFt0aGlzLmlkZW50aWZ5QnldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgW3RoaXMuZGlzcGxheUJ5XTogaW5wdXRcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuQWRkVGFnKG1vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5vblRhZ0VkaXRlZC5lbWl0KHsgdGFnOiBtb2RlbCwgaW5kZXg6IHRoaXMuaW5kZXggfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnRFZGl0YWJsZVRleHQodGhpcy5tb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250ZW50RWRpdGFibGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENvbnRlbnRFZGl0YWJsZSgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjb250ZW50ZWRpdGFibGVdJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIHRyaWdnZXIsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICBrZXlmcmFtZXMsXG4gICAgc3RhdGUsXG4gICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vKipcbiAqIEBuYW1lIGFuaW1hdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgdHJpZ2dlcignYW5pbWF0aW9uJywgW1xuICAgICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pKSxcbiAgICAgICAgc3RhdGUoJ291dCcsIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpLFxuICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICBhbmltYXRlKFwie3sgZW50ZXIgfX1cIiwga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAyMHB4KSd9KSxcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMC4zLCBvZmZzZXQ6IDAuMywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgLTEwcHgpJ30pLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjUsIG9mZnNldDogMC41LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJ30pLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjc1LCBvZmZzZXQ6IDAuNzUsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDVweCknfSksXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KSd9KVxuICAgICAgICAgICAgXSkpXG4gICAgICAgIF0pLFxuICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgICAgICBhbmltYXRlKFwie3sgbGVhdmUgfX1cIiwga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9mZnNldDogMH0pLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xNXB4KScsIG9mZnNldDogMC43fSksXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgXSlcbiAgICBdKVxuXTtcbiIsIi8vIGFuZ3VsYXJcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBSZW5kZXJlcjIsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQ29udGVudENoaWxkLFxuICAgIE9uSW5pdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEFzeW5jVmFsaWRhdG9yRm4sXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgVmFsaWRhdG9yRm5cbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyByeFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1hcCwgZmlyc3R9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gbmcyLXRhZy1pbnB1dFxuaW1wb3J0IHsgVGFnSW5wdXRBY2Nlc3NvciwgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcbmltcG9ydCB7IGxpc3RlbiB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVycy9saXN0ZW4nO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgRHJhZ1Byb3ZpZGVyLCBEcmFnZ2VkVGFnIH0gZnJvbSAnLi4vLi4vY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlcic7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Byb3ZpZGVycy9vcHRpb25zLXByb3ZpZGVyJztcblxuaW1wb3J0IHsgVGFnSW5wdXRGb3JtIH0gZnJvbSAnLi4vdGFnLWlucHV0LWZvcm0vdGFnLWlucHV0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd24gfSBmcm9tICcuLi9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4uL3RhZy90YWcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUYWdJbnB1dE9wdGlvbnMgfSBmcm9tICcuLi8uLi9kZWZhdWx0cyc7XG5cbi8vIGFuZ3VsYXIgdW5pdmVyc2FsIGhhY2tzXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmNvbnN0IERyYWdFdmVudCA9ICh3aW5kb3cgYXMgYW55KS5EcmFnRXZlbnQ7XG5cbmNvbnN0IENVU1RPTV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWdJbnB1dENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbmNvbnN0IGRlZmF1bHRzOiBUeXBlPFRhZ0lucHV0T3B0aW9ucz4gPSBmb3J3YXJkUmVmKCgpID0+IE9wdGlvbnNQcm92aWRlci5kZWZhdWx0cy50YWdJbnB1dCk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLWlucHV0JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fQUNDRVNTT1JdLFxuICAgIHN0eWxlVXJsczogWycuL3RhZy1pbnB1dC5zdHlsZS5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC50ZW1wbGF0ZS5odG1sJyxcbiAgICBhbmltYXRpb25zXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0Q29tcG9uZW50IGV4dGVuZHMgVGFnSW5wdXRBY2Nlc3NvciBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VwYXJhdG9yS2V5c1xuICAgICAqIEBkZXNjIGtleWJvYXJkIGtleXMgd2l0aCB3aGljaCBhIHVzZXIgY2FuIHNlcGFyYXRlIGl0ZW1zXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNlcGFyYXRvcktleXM6IHN0cmluZ1tdID0gbmV3IGRlZmF1bHRzKCkuc2VwYXJhdG9yS2V5cztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlcGFyYXRvcktleUNvZGVzXG4gICAgICogQGRlc2Mga2V5Ym9hcmQga2V5IGNvZGVzIHdpdGggd2hpY2ggYSB1c2VyIGNhbiBzZXBhcmF0ZSBpdGVtc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXBhcmF0b3JLZXlDb2RlczogbnVtYmVyW10gPSBuZXcgZGVmYXVsdHMoKS5zZXBhcmF0b3JLZXlDb2RlcztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBsYWNlaG9sZGVyXG4gICAgICogQGRlc2MgdGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dCB0ZXh0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS5wbGFjZWhvbGRlcjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlY29uZGFyeVBsYWNlaG9sZGVyXG4gICAgICogQGRlc2MgcGxhY2Vob2xkZXIgdG8gYXBwZWFyIHdoZW4gdGhlIGlucHV0IGlzIGVtcHR5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNlY29uZGFyeVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS5zZWNvbmRhcnlQbGFjZWhvbGRlcjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG1heEl0ZW1zXG4gICAgICogQGRlc2MgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdGhhdCBjYW4gYmUgYWRkZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4SXRlbXM6IG51bWJlciA9IG5ldyBkZWZhdWx0cygpLm1heEl0ZW1zO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsaWRhdG9yc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIFZhbGlkYXRvcnMgdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSB0aGUgdGFnIGJlZm9yZSBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBsaXN0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBuZXcgZGVmYXVsdHMoKS52YWxpZGF0b3JzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXN5bmNWYWxpZGF0b3JzXG4gICAgICogQGRlc2MgYXJyYXkgb2YgQXN5bmNWYWxpZGF0b3IgdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSB0aGUgdGFnIGJlZm9yZSBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBsaXN0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdID0gbmV3IGRlZmF1bHRzKCkuYXN5bmNWYWxpZGF0b3JzO1xuXG4gICAgLyoqXG4gICAgKiAtIGlmIHNldCB0byB0cnVlLCBpdCB3aWxsIG9ubHkgcG9zc2libGUgdG8gYWRkIGl0ZW1zIGZyb20gdGhlIGF1dG9jb21wbGV0ZVxuICAgICogQG5hbWUgb25seUZyb21BdXRvY29tcGxldGVcbiAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbmx5RnJvbUF1dG9jb21wbGV0ZSA9IG5ldyBkZWZhdWx0cygpLm9ubHlGcm9tQXV0b2NvbXBsZXRlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZXJyb3JNZXNzYWdlc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gbmV3IGRlZmF1bHRzKCkuZXJyb3JNZXNzYWdlcztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRoZW1lXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRoZW1lOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS50aGVtZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGV4dENoYW5nZURlYm91bmNlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uVGV4dENoYW5nZURlYm91bmNlID0gbmV3IGRlZmF1bHRzKCkub25UZXh0Q2hhbmdlRGVib3VuY2U7XG5cbiAgICAvKipcbiAgICAgKiAtIGN1c3RvbSBpZCBhc3NpZ25lZCB0byB0aGUgaW5wdXRcbiAgICAgKiBAbmFtZSBpZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dElkID0gbmV3IGRlZmF1bHRzKCkuaW5wdXRJZDtcblxuICAgIC8qKlxuICAgICAqIC0gY3VzdG9tIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS5pbnB1dENsYXNzO1xuXG4gICAgLyoqXG4gICAgICogLSBvcHRpb24gdG8gY2xlYXIgdGV4dCBpbnB1dCB3aGVuIHRoZSBmb3JtIGlzIGJsdXJyZWRcbiAgICAgKiBAbmFtZSBjbGVhck9uQmx1clxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjbGVhck9uQmx1cjogYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLmNsZWFyT25CbHVyO1xuXG4gICAgLyoqXG4gICAgICogLSBoaWRlRm9ybVxuICAgICAqIEBuYW1lIGNsZWFyT25CbHVyXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhpZGVGb3JtOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuaGlkZUZvcm07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhZGRPbkJsdXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWRkT25CbHVyOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuYWRkT25CbHVyO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYWRkT25QYXN0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhZGRPblBhc3RlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuYWRkT25QYXN0ZTtcblxuICAgIC8qKlxuICAgICAqIC0gcGF0dGVybiB1c2VkIHdpdGggdGhlIG5hdGl2ZSBtZXRob2Qgc3BsaXQoKSB0byBzZXBhcmF0ZSBwYXR0ZXJucyBpbiB0aGUgc3RyaW5nIHBhc3RlZFxuICAgICAqIEBuYW1lIHBhc3RlU3BsaXRQYXR0ZXJuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBhc3RlU3BsaXRQYXR0ZXJuID0gbmV3IGRlZmF1bHRzKCkucGFzdGVTcGxpdFBhdHRlcm47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBibGlua0lmRHVwZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBibGlua0lmRHVwZSA9IG5ldyBkZWZhdWx0cygpLmJsaW5rSWZEdXBlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVtb3ZhYmxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJlbW92YWJsZSA9IG5ldyBkZWZhdWx0cygpLnJlbW92YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGVkaXRhYmxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVkaXRhYmxlOiBib29sZWFuID0gbmV3IGRlZmF1bHRzKCkuZWRpdGFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhbGxvd0R1cGVzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFsbG93RHVwZXMgPSBuZXcgZGVmYXVsdHMoKS5hbGxvd0R1cGVzO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIHNldCB0byB0cnVlLCB0aGUgbmV3bHkgYWRkZWQgdGFncyB3aWxsIGJlIGFkZGVkIGFzIHN0cmluZ3MsIGFuZCBub3Qgb2JqZWN0c1xuICAgICAqIEBuYW1lIG1vZGVsQXNTdHJpbmdzXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1vZGVsQXNTdHJpbmdzID0gbmV3IGRlZmF1bHRzKCkubW9kZWxBc1N0cmluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0cmltVGFnc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0cmltVGFncyA9IG5ldyBkZWZhdWx0cygpLnRyaW1UYWdzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldCBpbnB1dFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRUZXh0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmlwcGxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJpcHBsZTogYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLnJpcHBsZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhYmluZGV4XG4gICAgICogQGRlc2MgcGFzcyB0aHJvdWdoIHRoZSBzcGVjaWZpZWQgdGFiaW5kZXggdG8gdGhlIGlucHV0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRhYmluZGV4OiBzdHJpbmcgPSBuZXcgZGVmYXVsdHMoKS50YWJJbmRleDtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc2FibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZTogYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLmRpc2FibGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcmFnWm9uZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkcmFnWm9uZTogc3RyaW5nID0gbmV3IGRlZmF1bHRzKCkuZHJhZ1pvbmU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblJlbW92aW5nXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uUmVtb3ZpbmcgPSBuZXcgZGVmYXVsdHMoKS5vblJlbW92aW5nO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25BZGRpbmdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25BZGRpbmcgPSBuZXcgZGVmYXVsdHMoKS5vbkFkZGluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFuaW1hdGlvbkR1cmF0aW9uID0gbmV3IGRlZmF1bHRzKCkuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZFxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiBhZGRpbmcgYSBuZXcgaXRlbVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25BZGQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmVcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gcmVtb3ZpbmcgYW4gZXhpc3RpbmcgaXRlbVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25TZWxlY3RcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gc2VsZWN0aW5nIGFuIGl0ZW1cbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uRm9jdXNcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uRm9jdXNcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UZXh0Q2hhbmdlXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogLSBvdXRwdXQgdHJpZ2dlcmVkIHdoZW4gdGV4dCBpcyBwYXN0ZWQgaW4gdGhlIGZvcm1cbiAgICAgKiBAbmFtZSBvblBhc3RlXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblBhc3RlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvKipcbiAgICAgKiAtIG91dHB1dCB0cmlnZ2VyZWQgd2hlbiB0YWcgZW50ZXJlZCBpcyBub3QgdmFsaWRcbiAgICAgKiBAbmFtZSBvblZhbGlkYXRpb25FcnJvclxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25WYWxpZGF0aW9uRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogLSBvdXRwdXQgdHJpZ2dlcmVkIHdoZW4gdGFnIGlzIGVkaXRlZFxuICAgICAqIEBuYW1lIG9uVGFnRWRpdGVkXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRhZ0VkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoVGFnSW5wdXREcm9wZG93bikgcHVibGljIGRyb3Bkb3duOiBUYWdJbnB1dERyb3Bkb3duO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGVtcGxhdGVcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIGlmIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZiwgeyBkZXNjZW5kYW50czogZmFsc2UgfSkgcHVibGljIHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRGb3JtXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChUYWdJbnB1dEZvcm0pIHB1YmxpYyBpbnB1dEZvcm06IFRhZ0lucHV0Rm9ybTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkVGFnXG4gICAgICogQGRlc2MgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlbGVjdGVkIHRhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZFRhZzogVGFnTW9kZWwgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0xvYWRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRcbiAgICAgKiBAcGFyYW0gdGV4dFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgaW5wdXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlucHV0VGV4dFZhbHVlID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbnB1dFRleHRDaGFuZ2UuZW1pdCh0ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWdzXG4gICAgICogQGRlc2MgbGlzdCBvZiBFbGVtZW50IGl0ZW1zXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihUYWdDb21wb25lbnQpIHB1YmxpYyB0YWdzOiBRdWVyeUxpc3Q8VGFnQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGxpc3RlbmVyc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIGV2ZW50cyB0aGF0IGdldCBmaXJlZCB1c2luZyBAZmlyZUV2ZW50c1xuICAgICAqL1xuICAgIHByaXZhdGUgbGlzdGVuZXJzID0ge1xuICAgICAgICBbY29uc3RhbnRzLktFWURPV05dOiA8eyAoZnVuKTogYW55IH1bXT5bXSxcbiAgICAgICAgW2NvbnN0YW50cy5LRVlVUF06IDx7IChmdW4pOiBhbnkgfVtdPltdXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBlbWl0dGVyIGZvciB0aGUgMi13YXkgZGF0YSBiaW5kaW5nIGlucHV0VGV4dCB2YWx1ZVxuICAgICAqIEBuYW1lIGlucHV0VGV4dENoYW5nZVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgaW5wdXRUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBwcml2YXRlIHZhcmlhYmxlIHRvIGJpbmQgZ2V0L3NldFxuICAgICAqIEBuYW1lIGlucHV0VGV4dFZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGlucHV0VGV4dFZhbHVlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyByZW1vdmVzIHRoZSB0YWIgaW5kZXggaWYgaXQgaXMgc2V0IC0gaXQgd2lsbCBiZSBwYXNzZWQgdGhyb3VnaCB0byB0aGUgaW5wdXRcbiAgICAgKiBAbmFtZSB0YWJpbmRleEF0dHJcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyBnZXQgdGFiaW5kZXhBdHRyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmluZGV4ICE9PSAnJyA/ICctMScgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhbmltYXRpb25NZXRhZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRpb25NZXRhZGF0YTogeyB2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IG9iamVjdCB9O1xuXG4gICAgcHVibGljIGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICAgIHB1YmxpYyBpc1Byb2dyZXNzQmFyVmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGRyYWdQcm92aWRlcjogRHJhZ1Byb3ZpZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbmdBZnRlclZpZXdJbml0XG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0IHVwIGxpc3RlbmVyc1xuXG4gICAgICAgIHRoaXMuc2V0VXBLZXlwcmVzc0xpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNldHVwU2VwYXJhdG9yS2V5c0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0VXBJbnB1dEtleWRvd25MaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5vblRleHRDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcFRleHRDaGFuZ2VTdWJzY3JpYmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBjbGVhciBvbiBibHVyIGlzIHNldCB0byB0cnVlLCBzdWJzY3JpYmUgdG8gdGhlIGV2ZW50IGFuZCBjbGVhciB0aGUgdGV4dCdzIGZvcm1cbiAgICAgICAgaWYgKHRoaXMuY2xlYXJPbkJsdXIgfHwgdGhpcy5hZGRPbkJsdXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VXBPbkJsdXJTdWJzY3JpYmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhZGRPblBhc3RlIGlzIHNldCB0byB0cnVlLCByZWdpc3RlciB0aGUgaGFuZGxlciBhbmQgYWRkIGl0ZW1zXG4gICAgICAgIGlmICh0aGlzLmFkZE9uUGFzdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VXBPblBhc3RlTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXR1c0NoYW5nZXMkID0gdGhpcy5pbnB1dEZvcm0uZm9ybS5zdGF0dXNDaGFuZ2VzO1xuXG4gICAgICAgIHN0YXR1c0NoYW5nZXMkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKHN0YXR1czogc3RyaW5nKSA9PiBzdGF0dXMgIT09ICdQRU5ESU5HJylcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmlucHV0Rm9ybS5nZXRFcnJvck1lc3NhZ2VzKHRoaXMuZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXNQcm9ncmVzc0JhclZpc2libGUkID0gc3RhdHVzQ2hhbmdlcyQucGlwZShcbiAgICAgICAgICAgIG1hcCgoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzID09PSAnUEVORElORycgfHwgdGhpcy5pc0xvYWRpbmc7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGhpZGVGb3JtIGlzIHNldCB0byB0cnVlLCByZW1vdmUgdGhlIGlucHV0XG4gICAgICAgIGlmICh0aGlzLmhpZGVGb3JtKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Rm9ybS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ09uSW5pdFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBvZiBpdGVtcyBzcGVjaWZpZWQgaW4gdGhlIG1vZGVsIGlzID4gb2YgdGhlIHZhbHVlIG9mIG1heEl0ZW1zXG4gICAgICAgIC8vIGRlZ3JhZGUgZ3JhY2VmdWxseSBhbmQgbGV0IHRoZSBtYXggbnVtYmVyIG9mIGl0ZW1zIHRvIGJlIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIG1vZGVsXG4gICAgICAgIC8vIHRob3VnaCwgd2FybiB0aGUgdXNlci5cbiAgICAgICAgY29uc3QgaGFzUmVhY2hlZE1heEl0ZW1zID0gdGhpcy5tYXhJdGVtcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCA+IHRoaXMubWF4SXRlbXM7XG5cbiAgICAgICAgaWYgKGhhc1JlYWNoZWRNYXhJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5tYXhJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGNvbnN0YW50cy5NQVhfSVRFTVNfV0FSTklORyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXR0aW5nIGVkaXRhYmxlIHRvIGZhbHNlIHRvIGZpeCBwcm9ibGVtIHdpdGggdGFncyBpbiBJRSBzdGlsbCBiZWluZyBlZGl0YWJsZSB3aGVuXG4gICAgICAgIC8vIG9ubHlGcm9tQXV0b2NvbXBsZXRlIGlzIHRydWVcbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IHRoaXMub25seUZyb21BdXRvY29tcGxldGUgPyBmYWxzZSA6IHRoaXMuZWRpdGFibGU7XG5cbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb25NZXRhZGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZlUmVxdWVzdGVkXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBvblJlbW92ZVJlcXVlc3RlZCh0YWc6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChtb2RlbDogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0obW9kZWwsIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRhZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZpbmcgP1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmluZyh0YWcpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4pIDogc3Vic2NyaWJlRm4odGFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25BZGRpbmdSZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0gZnJvbUF1dG9jb21wbGV0ZSB7Ym9vbGVhbn1cbiAgICAgKiBAcGFyYW0gdGFnIHtUYWdNb2RlbH1cbiAgICAgKiBAcGFyYW0gaW5kZXg/IHtudW1iZXJ9XG4gICAgICogQHBhcmFtIGdpdmV1cEZvY3VzPyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgb25BZGRpbmdSZXF1ZXN0ZWQoZnJvbUF1dG9jb21wbGV0ZTogYm9vbGVhbiwgdGFnOiBUYWdNb2RlbCwgaW5kZXg/OiBudW1iZXIsIGdpdmV1cEZvY3VzPzogYm9vbGVhbik6IFByb21pc2U8VGFnTW9kZWw+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZUZuID0gKG1vZGVsOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJdGVtKGZyb21BdXRvY29tcGxldGUsIG1vZGVsLCBpbmRleCwgZ2l2ZXVwRm9jdXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25BZGRpbmcgP1xuICAgICAgICAgICAgICAgIHRoaXMub25BZGRpbmcodGFnKVxuICAgICAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHN1YnNjcmliZUZuLCByZWplY3QpIDogc3Vic2NyaWJlRm4odGFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYXBwZW5kVGFnXG4gICAgICogQHBhcmFtIHRhZyB7VGFnTW9kZWx9XG4gICAgICovXG4gICAgcHVibGljIGFwcGVuZFRhZyA9ICh0YWc6IFRhZ01vZGVsLCBpbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVsQXNTdHJpbmdzID8gdGFnW3RoaXMuaWRlbnRpZnlCeV0gOiB0YWc7XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICAgIC4uLml0ZW1zLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgLi4uaXRlbXMuc2xpY2UoaW5kZXgsIGl0ZW1zLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjcmVhdGVUYWdcbiAgICAgKiBAcGFyYW0gbW9kZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlVGFnID0gKG1vZGVsOiBUYWdNb2RlbCk6IFRhZ01vZGVsID0+IHtcbiAgICAgICAgY29uc3QgdHJpbSA9ICh2YWw6IFRhZ01vZGVsLCBrZXk6IHN0cmluZyk6IFRhZ01vZGVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHZhbC50cmltKCkgOiB2YWxba2V5XTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udHlwZW9mIG1vZGVsICE9PSAnc3RyaW5nJyA/IG1vZGVsIDoge30sXG4gICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiB0aGlzLnRyaW1UYWdzID8gdHJpbShtb2RlbCwgdGhpcy5kaXNwbGF5QnkpIDogbW9kZWwsXG4gICAgICAgICAgICBbdGhpcy5pZGVudGlmeUJ5XTogdGhpcy50cmltVGFncyA/IHRyaW0obW9kZWwsIHRoaXMuaWRlbnRpZnlCeSkgOiBtb2RlbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdEl0ZW1cbiAgICAgKiBAZGVzYyBzZWxlY3RzIGl0ZW0gcGFzc2VkIGFzIHBhcmFtZXRlciBhcyB0aGUgc2VsZWN0ZWQgdGFnXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZW1pdFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IFRhZ01vZGVsIHwgdW5kZWZpbmVkLCBlbWl0ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc1JlYWRvbmx5ID0gaXRlbSAmJiB0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycgJiYgaXRlbS5yZWFkb25seTtcblxuICAgICAgICBpZiAoaXNSZWFkb25seSB8fCB0aGlzLnNlbGVjdGVkVGFnID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFnID0gaXRlbTtcblxuICAgICAgICBpZiAoZW1pdCkge1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZmlyZUV2ZW50c1xuICAgICAqIEBkZXNjIGdvZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiB0aGUgZXZlbnRzIGZvciBhIGdpdmVuIGV2ZW50TmFtZSwgYW5kIGZpcmVzIGVhY2ggb2YgdGhlbVxuICAgICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGZpcmVFdmVudHMoZXZlbnROYW1lOiBzdHJpbmcsICRldmVudD8pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyLmNhbGwodGhpcywgJGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFuZGxlS2V5ZG93blxuICAgICAqIEBkZXNjIGhhbmRsZXMgYWN0aW9uIHdoZW4gdGhlIHVzZXIgaGl0cyBhIGtleWJvYXJkIGtleVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleWRvd24oZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZGF0YS5ldmVudDtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleSB8fCBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKGNvbnN0YW50cy5LRVlfUFJFU1NfQUNUSU9OU1trZXldKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5BQ1RJT05TX0tFWVMuREVMRVRFOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnICYmIHRoaXMucmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRUYWcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVtb3ZlUmVxdWVzdGVkKHRoaXMuc2VsZWN0ZWRUYWcsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5TV0lUQ0hfUFJFVjpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1RhZyhkYXRhLm1vZGVsLCBjb25zdGFudHMuUFJFVik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5TV0lUQ0hfTkVYVDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1RhZyhkYXRhLm1vZGVsLCBjb25zdGFudHMuTkVYVCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5UQUI6XG4gICAgICAgICAgICAgICAgaWYgKHNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RUYWcoZGF0YS5tb2RlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5QUkVWKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xhc3RUYWcoZGF0YS5tb2RlbCkgJiYgKHRoaXMuZGlzYWJsZSB8fCB0aGlzLm1heEl0ZW1zUmVhY2hlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5ORVhUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGJlaGF2aW91clxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvbkZvcm1TdWJtaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uQWRkaW5nUmVxdWVzdGVkKGZhbHNlLCB0aGlzLmZvcm1WYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0SW5wdXRWYWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcsIGVtaXRFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbCgpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBmb3JtIHZhbHVlIHdpdGggdGhlIHRyYW5zZm9ybWVkIGl0ZW1cbiAgICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgeyBlbWl0RXZlbnQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0Q29udHJvbFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Rm9ybS52YWx1ZSBhcyBGb3JtQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqIEBwYXJhbSBhcHBseUZvY3VzXG4gICAgICogQHBhcmFtIGRpc3BsYXlBdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoYXBwbHlGb2N1cyA9IGZhbHNlLCBkaXNwbGF5QXV0b2NvbXBsZXRlID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ1Byb3ZpZGVyLmdldFN0YXRlKCdkcmFnZ2luZycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odW5kZWZpbmVkLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGFwcGx5Rm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb3JtLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdCh0aGlzLmZvcm1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBibHVyXG4gICAgICovXG4gICAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG5cbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdCh0aGlzLmZvcm1WYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGFzRXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRGb3JtICYmIHRoaXMuaW5wdXRGb3JtLmhhc0Vycm9ycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzSW5wdXRGb2N1c2VkXG4gICAgICovXG4gICAgcHVibGljIGlzSW5wdXRGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEZvcm0gJiYgdGhpcy5pbnB1dEZvcm0uaXNJbnB1dEZvY3VzZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHRoaXMgaXMgdGhlIG9uZSB3YXkgSSBmb3VuZCB0byB0ZWxsIGlmIHRoZSB0ZW1wbGF0ZSBoYXMgYmVlbiBwYXNzZWQgYW5kIGl0IGlzIG5vdFxuICAgICAqIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIG1lbnUgaXRlbVxuICAgICAqIEBuYW1lIGhhc0N1c3RvbVRlbXBsYXRlXG4gICAgICovXG4gICAgcHVibGljIGhhc0N1c3RvbVRlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzID8gdGhpcy50ZW1wbGF0ZXMuZmlyc3QgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IG1lbnVUZW1wbGF0ZSA9IHRoaXMuZHJvcGRvd24gJiYgdGhpcy5kcm9wZG93bi50ZW1wbGF0ZXMgP1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi50ZW1wbGF0ZXMuZmlyc3QgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGUgJiYgdGVtcGxhdGUgIT09IG1lbnVUZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWF4SXRlbXNSZWFjaGVkXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhJdGVtc1JlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID49IHRoaXMubWF4SXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9ybVZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldCBmb3JtVmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuaW5wdXRGb3JtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBmb3JtID8gZm9ybS52YWx1ZSA6ICcnO1xuICAgIH1cblxuICAgIC8qKjNcbiAgICAgKiBAbmFtZSBvbkRyYWdTdGFydGVkXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0ZWQoZXZlbnQ6IERyYWdFdmVudCwgdGFnOiBUYWdNb2RlbCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtID0geyB6b25lOiB0aGlzLmRyYWdab25lLCB0YWcsIGluZGV4IH0gYXMgRHJhZ2dlZFRhZztcblxuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRTZW5kZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldERyYWdnZWRJdGVtKGV2ZW50LCBpdGVtKTtcbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIuc2V0U3RhdGUoe2RyYWdnaW5nOiB0cnVlLCBpbmRleH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uRHJhZ092ZXJcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50LCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRTdGF0ZSh7ZHJvcHBpbmc6IHRydWV9KTtcbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIuc2V0UmVjZWl2ZXIodGhpcyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRhZ0Ryb3BwZWRcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgb25UYWdEcm9wcGVkKGV2ZW50OiBEcmFnRXZlbnQsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRyYWdQcm92aWRlci5nZXREcmFnZ2VkSXRlbShldmVudCk7XG5cbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uem9uZSAhPT0gdGhpcy5kcmFnWm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIub25UYWdEcm9wcGVkKGl0ZW0udGFnLCBpdGVtLmluZGV4LCBpbmRleCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNEcm9wcGluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBpc0Ryb3BwaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpc1JlY2VpdmVyID0gdGhpcy5kcmFnUHJvdmlkZXIucmVjZWl2ZXIgPT09IHRoaXM7XG4gICAgICAgIGNvbnN0IGlzRHJvcHBpbmcgPSB0aGlzLmRyYWdQcm92aWRlci5nZXRTdGF0ZSgnZHJvcHBpbmcnKTtcblxuICAgICAgICByZXR1cm4gQm9vbGVhbihpc1JlY2VpdmVyICYmIGlzRHJvcHBpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnQmx1cnJlZFxuICAgICAqIEBwYXJhbSBjaGFuZ2VkRWxlbWVudCB7VGFnTW9kZWx9XG4gICAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIG9uVGFnQmx1cnJlZChjaGFuZ2VkRWxlbWVudDogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBjaGFuZ2VkRWxlbWVudDtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdHJhY2tCeVxuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqL1xuICAgIHB1YmxpYyB0cmFja0J5KGluZGV4OiBudW1iZXIsIGl0ZW06IFRhZ01vZGVsKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5pZGVudGlmeUJ5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB1cGRhdGVFZGl0ZWRUYWdcbiAgICAgKiBAcGFyYW0gdGFnXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUVkaXRlZFRhZyh7dGFnLCBpbmRleH06IHt0YWc6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyfSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVGFnRWRpdGVkLmVtaXQodGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKiBAcGFyYW0gaXNGcm9tQXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgcHVibGljIGlzVGFnVmFsaWQgPSAodGFnOiBUYWdNb2RlbCwgZnJvbUF1dG9jb21wbGV0ZSA9IGZhbHNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24gPyB0aGlzLmRyb3Bkb3duLnNlbGVjdGVkSXRlbSA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW1EaXNwbGF5KHRhZykudHJpbSgpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0gJiYgIWZyb21BdXRvY29tcGxldGUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXBlID0gdGhpcy5maW5kRHVwZSh0YWcsIGZyb21BdXRvY29tcGxldGUpO1xuXG4gICAgICAgIC8vIGlmIHNvLCBnaXZlIGEgdmlzdWFsIGN1ZSBhbmQgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0R1cGVzICYmIGR1cGUgJiYgdGhpcy5ibGlua0lmRHVwZSkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLnRhZ3MuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtVmFsdWUoaXRlbS5tb2RlbCkgPT09IHRoaXMuZ2V0SXRlbVZhbHVlKGR1cGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgICAgIG1vZGVsLmJsaW5rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0Zyb21BdXRvY29tcGxldGUgPSBmcm9tQXV0b2NvbXBsZXRlICYmIHRoaXMub25seUZyb21BdXRvY29tcGxldGU7XG5cbiAgICAgICAgY29uc3QgYXNzZXJ0aW9ucyA9IFtcbiAgICAgICAgICAgIC8vIDEuIHRoZXJlIG11c3QgYmUgbm8gZHVwZSBPUiBkdXBlcyBhcmUgYWxsb3dlZFxuICAgICAgICAgICAgIWR1cGUgfHwgdGhpcy5hbGxvd0R1cGVzLFxuXG4gICAgICAgICAgICAvLyAyLiBjaGVjayBtYXggaXRlbXMgaGFzIG5vdCBiZWVuIHJlYWNoZWRcbiAgICAgICAgICAgICF0aGlzLm1heEl0ZW1zUmVhY2hlZCxcblxuICAgICAgICAgICAgLy8gMy4gY2hlY2sgaXRlbSBjb21lcyBmcm9tIGF1dG9jb21wbGV0ZSBvciBvbmx5RnJvbUF1dG9jb21wbGV0ZSBpcyBmYWxzZVxuICAgICAgICAgICAgKChpc0Zyb21BdXRvY29tcGxldGUpIHx8ICF0aGlzLm9ubHlGcm9tQXV0b2NvbXBsZXRlKVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBhc3NlcnRpb25zLmZpbHRlcihCb29sZWFuKS5sZW5ndGggPT09IGFzc2VydGlvbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG1vdmVUb1RhZ1xuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgbW92ZVRvVGFnKGl0ZW06IFRhZ01vZGVsLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc0xhc3QgPSB0aGlzLmlzTGFzdFRhZyhpdGVtKTtcbiAgICAgICAgY29uc3QgaXNGaXJzdCA9IHRoaXMuaXNGaXJzdFRhZyhpdGVtKTtcbiAgICAgICAgY29uc3Qgc3RvcFN3aXRjaCA9IChkaXJlY3Rpb24gPT09IGNvbnN0YW50cy5ORVhUICYmIGlzTGFzdCkgfHxcbiAgICAgICAgICAgIChkaXJlY3Rpb24gPT09IGNvbnN0YW50cy5QUkVWICYmIGlzRmlyc3QpO1xuXG4gICAgICAgIGlmIChzdG9wU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZGlyZWN0aW9uID09PSBjb25zdGFudHMuTkVYVCA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFRhZ0luZGV4KGl0ZW0pICsgb2Zmc2V0O1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmdldFRhZ0F0SW5kZXgoaW5kZXgpO1xuXG4gICAgICAgIHJldHVybiB0YWcuc2VsZWN0LmNhbGwodGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0ZpcnN0VGFnXG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNGaXJzdFRhZyhpdGVtOiBUYWdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWdzLmZpcnN0Lm1vZGVsID09PSBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzTGFzdFRhZ1xuICAgICAqIEBwYXJhbSBpdGVtIHtUYWdNb2RlbH1cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzTGFzdFRhZyhpdGVtOiBUYWdNb2RlbCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWdzLmxhc3QubW9kZWwgPT09IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0VGFnSW5kZXhcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGFnSW5kZXgoaXRlbTogVGFnTW9kZWwpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0YWdzID0gdGhpcy50YWdzLnRvQXJyYXkoKTtcblxuICAgICAgICByZXR1cm4gdGFncy5maW5kSW5kZXgodGFnID0+IHRhZy5tb2RlbCA9PT0gaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0VGFnQXRJbmRleFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGFnQXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRhZ3MudG9BcnJheSgpO1xuXG4gICAgICAgIHJldHVybiB0YWdzW2luZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSByZW1vdmVJdGVtXG4gICAgICogQGRlc2MgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGFycmF5IG9mIHRoZSBtb2RlbFxuICAgICAqIEBwYXJhbSB0YWcge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgICAqL1xuICAgIHByaXZhdGUgcmVtb3ZlSXRlbSh0YWc6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmdldEl0ZW1zV2l0aG91dChpbmRleCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHJlbW92ZWQgdGFnIHdhcyBzZWxlY3RlZCwgc2V0IGl0IGFzIHVuZGVmaW5lZFxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhZyA9PT0gdGFnKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb2N1cyBpbnB1dFxuICAgICAgICB0aGlzLmZvY3VzKHRydWUsIGZhbHNlKTtcblxuICAgICAgICAvLyBlbWl0IHJlbW92ZSBldmVudFxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQodGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhZGRJdGVtXG4gICAgICogQGRlc2MgYWRkcyB0aGUgY3VycmVudCB0ZXh0IG1vZGVsIHRvIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIEBwYXJhbSBmcm9tQXV0b2NvbXBsZXRlIHtib29sZWFufVxuICAgICAqIEBwYXJhbSBpdGVtIHtUYWdNb2RlbH1cbiAgICAgKiBAcGFyYW0gaW5kZXg/IHtudW1iZXJ9XG4gICAgICogQHBhcmFtIGdpdmV1cEZvY3VzPyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZEl0ZW0oZnJvbUF1dG9jb21wbGV0ZSA9IGZhbHNlLCBpdGVtOiBUYWdNb2RlbCwgaW5kZXg/OiBudW1iZXIsIGdpdmV1cEZvY3VzPzogYm9vbGVhbik6IFByb21pc2U8VGFnTW9kZWw+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHRoaXMuZ2V0SXRlbURpc3BsYXkoaXRlbSk7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnKGl0ZW0pO1xuXG4gICAgICAgIGlmIChmcm9tQXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy5nZXRJdGVtVmFsdWUoaXRlbSwgdHJ1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG5hbWUgcmVzZXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgY29udHJvbCBhbmQgZm9jdXMgaW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdpdmV1cEZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1cyBpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGRpc3BsYXkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYXBwZW5kSXRlbSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRhZyh0YWcsIGluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIGVtaXQgZXZlbnRcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWRkLmVtaXQodGFnKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wZG93bi5zaG93RHJvcGRvd25JZkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuaW5wdXRGb3JtLmZvcm0uc3RhdHVzO1xuICAgICAgICAgICAgY29uc3QgaXNUYWdWYWxpZCA9IHRoaXMuaXNUYWdWYWxpZCh0YWcsIGZyb21BdXRvY29tcGxldGUpO1xuXG4gICAgICAgICAgICBjb25zdCBvblZhbGlkYXRpb25FcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmFsaWRhdGlvbkVycm9yLmVtaXQodGFnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnVkFMSUQnICYmIGlzVGFnVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRJdGVtKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdJTlZBTElEJyB8fCAhaXNUYWdWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdQRU5ESU5HJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1VwZGF0ZSQgPSB0aGlzLmlucHV0Rm9ybS5mb3JtLnN0YXR1c0NoYW5nZXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzVXBkYXRlJFxuICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihzdGF0dXNVcGRhdGUgPT4gc3RhdHVzVXBkYXRlICE9PSAnUEVORElORycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1c1VwZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1c1VwZGF0ZSA9PT0gJ1ZBTElEJyAmJiBpc1RhZ1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kSXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldHVwU2VwYXJhdG9yS2V5c0xpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1c2VTZXBhcmF0b3JLZXlzID0gdGhpcy5zZXBhcmF0b3JLZXlDb2Rlcy5sZW5ndGggPiAwIHx8IHRoaXMuc2VwYXJhdG9yS2V5cy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgkZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc0tleUNvZGUgPSB0aGlzLnNlcGFyYXRvcktleUNvZGVzLmluZGV4T2YoJGV2ZW50LmtleUNvZGUpID49IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNLZXkgPSB0aGlzLnNlcGFyYXRvcktleXMuaW5kZXhPZigkZXZlbnQua2V5KSA+PSAwO1xuICAgICAgICAgICAgLy8gdGhlIGtleUNvZGUgb2Yga2V5ZG93biBldmVudCBpcyAyMjkgd2hlbiBJTUUgaXMgcHJvY2Vzc2luZyB0aGUga2V5IGV2ZW50LlxuICAgICAgICAgICAgY29uc3QgaXNJTUVQcm9jZXNzaW5nID0gJGV2ZW50LmtleUNvZGUgPT09IDIyOTtcblxuICAgICAgICAgICAgaWYgKGhhc0tleUNvZGUgfHwgKGhhc0tleSAmJiAhaXNJTUVQcm9jZXNzaW5nKSkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3Rlbi5jYWxsKHRoaXMsIGNvbnN0YW50cy5LRVlET1dOLCBsaXN0ZW5lciwgdXNlU2VwYXJhdG9yS2V5cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBLZXlwcmVzc0xpc3RlbmVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VXBLZXlwcmVzc0xpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoJGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NvcnJlY3RLZXkgPSAkZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgJGV2ZW50LmtleUNvZGUgPT09IDg7XG5cbiAgICAgICAgICAgIGlmIChpc0NvcnJlY3RLZXkgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5mb3JtVmFsdWUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFncy5sYXN0LnNlbGVjdC5jYWxsKHRoaXMudGFncy5sYXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXR0aW5nIHVwIHRoZSBrZXlwcmVzcyBsaXN0ZW5lcnNcbiAgICAgICAgbGlzdGVuLmNhbGwodGhpcywgY29uc3RhbnRzLktFWURPV04sIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcEtleWRvd25MaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwSW5wdXRLZXlkb3duTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Rm9ybS5vbktleWRvd24uc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50cygna2V5ZG93bicsIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgdGhpcy5mb3JtVmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFVwT25QYXN0ZUxpc3RlbmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcE9uUGFzdGVMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0Rm9ybS5pbnB1dC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lciB0byBpbnB1dFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihpbnB1dCwgJ3Bhc3RlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uUGFzdGVDYWxsYmFjayhldmVudCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBUZXh0Q2hhbmdlU3Vic2NyaWJlclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VXBUZXh0Q2hhbmdlU3Vic2NyaWJlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEZvcm0uZm9ybVxuICAgICAgICAgICAgLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMub25UZXh0Q2hhbmdlRGVib3VuY2UpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZToge2l0ZW06IHN0cmluZ30pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGV4dENoYW5nZS5lbWl0KHZhbHVlLml0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBPbkJsdXJTdWJzY3JpYmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcE9uQmx1clN1YnNjcmliZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlckZuID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gdGhpcy5kcm9wZG93biAmJiB0aGlzLmRyb3Bkb3duLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIHJldHVybiAhaXNWaXNpYmxlICYmICEhdGhpcy5mb3JtVmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbnB1dEZvcm1cbiAgICAgICAgICAgIC5vbkJsdXJcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICAgICAgICAgIGZpbHRlcihmaWx0ZXJGbilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4gdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZE9uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm9uQWRkaW5nUmVxdWVzdGVkKGZhbHNlLCB0aGlzLmZvcm1WYWx1ZSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmaW5kRHVwZVxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKiBAcGFyYW0gaXNGcm9tQXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaW5kRHVwZSh0YWc6IFRhZ01vZGVsLCBpc0Zyb21BdXRvY29tcGxldGU6IGJvb2xlYW4pOiBUYWdNb2RlbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSBpc0Zyb21BdXRvY29tcGxldGUgPyB0aGlzLmRyb3Bkb3duLmlkZW50aWZ5QnkgOiB0aGlzLmlkZW50aWZ5Qnk7XG4gICAgICAgIGNvbnN0IGlkID0gdGFnW2lkZW50aWZ5QnldO1xuXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiB0aGlzLmdldEl0ZW1WYWx1ZShpdGVtKSA9PT0gaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUGFzdGVDYWxsYmFja1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblBhc3RlQ2FsbGJhY2sgPSBhc3luYyAoZGF0YTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaW50ZXJmYWNlIElFV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgICAgICAgICAgIGNsaXBib2FyZERhdGE6IERhdGFUcmFuc2ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldFRleHQgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzSUUgPSBCb29sZWFuKCh3aW5kb3cgYXMgSUVXaW5kb3cpLmNsaXBib2FyZERhdGEpO1xuICAgICAgICAgICAgY29uc3QgY2xpcGJvYXJkRGF0YSA9IGlzSUUgPyAoXG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBJRVdpbmRvdykuY2xpcGJvYXJkRGF0YVxuICAgICAgICAgICAgKSA6IGRhdGEuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpc0lFID8gJ1RleHQnIDogJ3RleHQvcGxhaW4nO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xpcGJvYXJkRGF0YS5nZXREYXRhKHR5cGUpIHx8ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBnZXRUZXh0KCk7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSB0ZXh0XG4gICAgICAgICAgICAuc3BsaXQodGhpcy5wYXN0ZVNwbGl0UGF0dGVybilcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWcoaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRhZ1t0aGlzLmRpc3BsYXlCeV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uQWRkaW5nUmVxdWVzdGVkKGZhbHNlLCB0YWcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzZXRJbnB1dCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRJbnB1dFZhbHVlKCcnKSwgNTApO1xuXG4gICAgICAgIFByb21pc2UuYWxsKHJlcXVlc3RzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25QYXN0ZS5lbWl0KHRleHQpO1xuICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xuICAgICAgIH0pXG4gICAgICAgLmNhdGNoKHJlc2V0SW5wdXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldEFuaW1hdGlvbk1ldGFkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRBbmltYXRpb25NZXRhZGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25NZXRhZGF0YSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnaW4nLFxuICAgICAgICAgICAgcGFyYW1zOiB7Li4udGhpcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZWxldGUtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ljb24uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaWNvbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlSWNvbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlLCBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1tYXRlcmlhbC1kcm9wZG93bic7XG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9jb3JlL3BpcGVzL2hpZ2hsaWdodC5waXBlJztcbmltcG9ydCB7IERyYWdQcm92aWRlciB9IGZyb20gJy4vY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlcic7XG5pbXBvcnQgeyBPcHRpb25zUHJvdmlkZXIsIE9wdGlvbnMgfSBmcm9tICcuL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dCc7XG5pbXBvcnQgeyBEZWxldGVJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbic7XG5pbXBvcnQgeyBUYWdJbnB1dEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnLWlucHV0LWZvcm0vdGFnLWlucHV0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnUmlwcGxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhZy90YWctcmlwcGxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IG9wdGlvbnNQcm92aWRlciA9IG5ldyBPcHRpb25zUHJvdmlkZXIoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE5nMkRyb3Bkb3duTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFnSW5wdXRDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUljb25Db21wb25lbnQsXG4gICAgICAgIFRhZ0lucHV0Rm9ybSxcbiAgICAgICAgVGFnQ29tcG9uZW50LFxuICAgICAgICBIaWdobGlnaHRQaXBlLFxuICAgICAgICBUYWdJbnB1dERyb3Bkb3duLFxuICAgICAgICBUYWdSaXBwbGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVGFnSW5wdXRDb21wb25lbnQsXG4gICAgICAgIERlbGV0ZUljb25Db21wb25lbnQsXG4gICAgICAgIFRhZ0lucHV0Rm9ybSxcbiAgICAgICAgVGFnQ29tcG9uZW50LFxuICAgICAgICBIaWdobGlnaHRQaXBlLFxuICAgICAgICBUYWdJbnB1dERyb3Bkb3duLFxuICAgICAgICBUYWdSaXBwbGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEcmFnUHJvdmlkZXIsXG4gICAgICAgIHsgcHJvdmlkZTogQ09NUE9TSVRJT05fQlVGRkVSX01PREUsIHVzZVZhbHVlOiBmYWxzZSB9LFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHdpdGhEZWZhdWx0c1xuICAgICAqIEBwYXJhbSBvcHRpb25zIHtPcHRpb25zfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd2l0aERlZmF1bHRzKG9wdGlvbnM6IE9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgb3B0aW9uc1Byb3ZpZGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBpcGUiLCJJbmplY3RhYmxlIiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIkNvbXBvbmVudCIsIk91dHB1dCIsIlZpZXdDaGlsZCIsImRlZmF1bHRzIiwiZm9yd2FyZFJlZiIsImZpcnN0IiwiZGVib3VuY2VUaW1lIiwiZmlsdGVyIiwiSW5qZWN0b3IiLCJOZzJEcm9wZG93biIsIkNvbnRlbnRDaGlsZHJlbiIsIlRlbXBsYXRlUmVmIiwiSG9zdExpc3RlbmVyIiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsImtleWZyYW1lcyIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkhvc3RCaW5kaW5nIiwiYW5pbWF0aW9ucyIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJjb25zdGFudHMuS0VZRE9XTiIsImNvbnN0YW50cy5LRVlVUCIsIm1hcCIsImNvbnN0YW50cy5NQVhfSVRFTVNfV0FSTklORyIsImNvbnN0YW50cy5LRVlfUFJFU1NfQUNUSU9OUyIsImNvbnN0YW50cy5BQ1RJT05TX0tFWVMiLCJjb25zdGFudHMuUFJFViIsImNvbnN0YW50cy5ORVhUIiwiQ29udGVudENoaWxkIiwiVmlld0NoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJOZzJEcm9wZG93bk1vZHVsZSIsIkNPTVBPU0lUSU9OX0JVRkZFUl9NT0RFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFFTSxNQUFNLEdBQUcsVUFBQSxDQUFDLElBQUksT0FBQSxD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