/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, forwardRef, HostListener, Injector, Input, QueryList, TemplateRef, ViewChild, } from '@angular/core';
import { filter, first, debounceTime } from 'rxjs/operators';
import { Ng2Dropdown } from 'ng2-material-dropdown';
import { OptionsProvider } from '../../core/providers/options-provider';
import { TagInputComponent } from '../tag-input/tag-input';
/** @type {?} */
var defaults = forwardRef(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * \@name offset
         */
        this.offset = new defaults().offset;
        /**
         * \@name focusFirstElement
         */
        this.focusFirstElement = new defaults().focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * \@name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = new defaults().showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * \@name minimumTextLength
         */
        this.minimumTextLength = new defaults().minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * \@name limitItemsTo
         */
        this.limitItemsTo = new defaults().limitItemsTo;
        /**
         * \@name displayBy
         */
        this.displayBy = new defaults().displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = new defaults().identifyBy;
        /**
         * \@description a function a developer can use to implement custom matching for the autocomplete
         * \@name matchingFn
         */
        this.matchingFn = new defaults().matchingFn;
        /**
         * \@name appendToBody
         */
        this.appendToBody = new defaults().appendToBody;
        /**
         * \@name keepOpen
         * \@description option to leave dropdown open when adding a new item
         */
        this.keepOpen = new defaults().keepOpen;
        /**
         * \@name dynamicUpdate
         */
        this.dynamicUpdate = new defaults().dynamicUpdate;
        /**
         * \@name zIndex
         */
        this.zIndex = new defaults().zIndex;
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
        this.requestAdding = function (item) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var tag;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
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
                .pipe(first())
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
         */
        function () {
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
         */
        function (items) {
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
            .pipe(debounceTime(DEBOUNCE_TIME), filter(function (value) {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
        return tslib_1.__assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
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
        { type: Component, args: [{
                    selector: 'tag-input-dropdown',
                    template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
                }] }
    ];
    /** @nocollapse */
    TagInputDropdown.ctorParameters = function () { return [
        { type: Injector }
    ]; };
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
    return TagInputDropdown;
}());
export { TagInputDropdown };
if (false) {
    /**
     * \@name dropdown
     * @type {?}
     */
    TagInputDropdown.prototype.dropdown;
    /**
     * \@name menuTemplate
     * @desc reference to the template if provided by the user
     * @type {?}
     */
    TagInputDropdown.prototype.templates;
    /**
     * \@name offset
     * @type {?}
     */
    TagInputDropdown.prototype.offset;
    /**
     * \@name focusFirstElement
     * @type {?}
     */
    TagInputDropdown.prototype.focusFirstElement;
    /**
     * - show autocomplete dropdown if the value of input is empty
     * \@name showDropdownIfEmpty
     * @type {?}
     */
    TagInputDropdown.prototype.showDropdownIfEmpty;
    /**
     * \@description observable passed as input which populates the autocomplete items
     * \@name autocompleteObservable
     * @type {?}
     */
    TagInputDropdown.prototype.autocompleteObservable;
    /**
     * - desc minimum text length in order to display the autocomplete dropdown
     * \@name minimumTextLength
     * @type {?}
     */
    TagInputDropdown.prototype.minimumTextLength;
    /**
     * - number of items to display in the autocomplete dropdown
     * \@name limitItemsTo
     * @type {?}
     */
    TagInputDropdown.prototype.limitItemsTo;
    /**
     * \@name displayBy
     * @type {?}
     */
    TagInputDropdown.prototype.displayBy;
    /**
     * \@name identifyBy
     * @type {?}
     */
    TagInputDropdown.prototype.identifyBy;
    /**
     * \@description a function a developer can use to implement custom matching for the autocomplete
     * \@name matchingFn
     * @type {?}
     */
    TagInputDropdown.prototype.matchingFn;
    /**
     * \@name appendToBody
     * @type {?}
     */
    TagInputDropdown.prototype.appendToBody;
    /**
     * \@name keepOpen
     * \@description option to leave dropdown open when adding a new item
     * @type {?}
     */
    TagInputDropdown.prototype.keepOpen;
    /**
     * \@name dynamicUpdate
     * @type {?}
     */
    TagInputDropdown.prototype.dynamicUpdate;
    /**
     * \@name zIndex
     * @type {?}
     */
    TagInputDropdown.prototype.zIndex;
    /**
     * list of items that match the current value of the input (for autocomplete)
     * \@name items
     * @type {?}
     */
    TagInputDropdown.prototype.items;
    /**
     * \@name tagInput
     * @type {?}
     */
    TagInputDropdown.prototype.tagInput;
    /**
     * \@name _autocompleteItems
     * @type {?}
     */
    TagInputDropdown.prototype._autocompleteItems;
    /**
     *
     * \@name show
     * @type {?}
     */
    TagInputDropdown.prototype.show;
    /**
     * \@name requestAdding
     * \@param item {Ng2MenuItem}
     * @type {?}
     */
    TagInputDropdown.prototype.requestAdding;
    /**
     * \@name resetItems
     * @type {?}
     */
    TagInputDropdown.prototype.resetItems;
    /**
     * \@name getItemsFromObservable
     * \@param text
     * @type {?}
     */
    TagInputDropdown.prototype.getItemsFromObservable;
    /** @type {?} */
    TagInputDropdown.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsZUFBZSxFQUVmLFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQU8sTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUlyRCxRQUFRLEdBQWtDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQWpDLENBQWlDLENBQUM7QUFFbkc7SUFrSUksMEJBQTZCLFFBQWtCO1FBQS9DLGlCQUFtRDtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7O1FBL0cvQixXQUFNLEdBQVcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7Ozs7UUFLdkMsc0JBQWlCLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7UUFNckQsd0JBQW1CLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7UUFZekQsc0JBQWlCLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7UUFNckQsaUJBQVksR0FBVyxJQUFJLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQzs7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QTBFOzs7OztJQUsxRSw4Q0FBNEM7Ozs7OztJQTZHNUMsZ0NBNkJDOzs7Ozs7SUFpREQseUNBR0M7Ozs7O0lBa0RELHNDQUVDOzs7Ozs7SUFxQkQsa0RBcUJDOztJQS9QVyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdG9yLFxuICAgIElucHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBUeXBlLFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgZmlyc3QsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd24sIE5nMk1lbnVJdGVtIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcblxuY29uc3QgZGVmYXVsdHM6IFR5cGU8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+ID0gZm9yd2FyZFJlZigoKSA9PiBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMuZHJvcGRvd24pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoTmcyRHJvcGRvd24pIHB1YmxpYyBkcm9wZG93bjogTmcyRHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtZW51VGVtcGxhdGVcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIGlmIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb2Zmc2V0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9mZnNldDogc3RyaW5nID0gbmV3IGRlZmF1bHRzKCkub2Zmc2V0O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNGaXJzdEVsZW1lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZm9jdXNGaXJzdEVsZW1lbnQgPSBuZXcgZGVmYXVsdHMoKS5mb2N1c0ZpcnN0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIC0gc2hvdyBhdXRvY29tcGxldGUgZHJvcGRvd24gaWYgdGhlIHZhbHVlIG9mIGlucHV0IGlzIGVtcHR5XG4gICAgICogQG5hbWUgc2hvd0Ryb3Bkb3duSWZFbXB0eVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93RHJvcGRvd25JZkVtcHR5ID0gbmV3IGRlZmF1bHRzKCkuc2hvd0Ryb3Bkb3duSWZFbXB0eTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBvYnNlcnZhYmxlIHBhc3NlZCBhcyBpbnB1dCB3aGljaCBwb3B1bGF0ZXMgdGhlIGF1dG9jb21wbGV0ZSBpdGVtc1xuICAgICAqIEBuYW1lIGF1dG9jb21wbGV0ZU9ic2VydmFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZTogKHRleHQ6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogLSBkZXNjIG1pbmltdW0gdGV4dCBsZW5ndGggaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAgICogQG5hbWUgbWluaW11bVRleHRMZW5ndGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWluaW11bVRleHRMZW5ndGggPSBuZXcgZGVmYXVsdHMoKS5taW5pbXVtVGV4dExlbmd0aDtcblxuICAgIC8qKlxuICAgICAqIC0gbnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgaW4gdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93blxuICAgICAqIEBuYW1lIGxpbWl0SXRlbXNUb1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsaW1pdEl0ZW1zVG86IG51bWJlciA9IG5ldyBkZWZhdWx0cygpLmxpbWl0SXRlbXNUbztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc3BsYXlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5QnkgPSBuZXcgZGVmYXVsdHMoKS5kaXNwbGF5Qnk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlkZW50aWZ5QnkgPSBuZXcgZGVmYXVsdHMoKS5pZGVudGlmeUJ5O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGEgZnVuY3Rpb24gYSBkZXZlbG9wZXIgY2FuIHVzZSB0byBpbXBsZW1lbnQgY3VzdG9tIG1hdGNoaW5nIGZvciB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICogQG5hbWUgbWF0Y2hpbmdGblxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXRjaGluZ0ZuOiAodmFsdWU6IHN0cmluZywgdGFyZ2V0OiBUYWdNb2RlbCkgPT4gYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLm1hdGNoaW5nRm47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5ID0gbmV3IGRlZmF1bHRzKCkuYXBwZW5kVG9Cb2R5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2VlcE9wZW5cbiAgICAgKiBAZGVzY3JpcHRpb24gb3B0aW9uIHRvIGxlYXZlIGRyb3Bkb3duIG9wZW4gd2hlbiBhZGRpbmcgYSBuZXcgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwT3BlbiA9IG5ldyBkZWZhdWx0cygpLmtlZXBPcGVuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHluYW1pY1VwZGF0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljVXBkYXRlID0gbmV3IGRlZmF1bHRzKCkuZHluYW1pY1VwZGF0ZTtcblxuICAgIC8qKlxuICAgICogQG5hbWUgekluZGV4XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHpJbmRleCA9IG5ldyBkZWZhdWx0cygpLnpJbmRleDtcblxuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgaXRlbXMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQgKGZvciBhdXRvY29tcGxldGUpXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhZ0lucHV0XG4gICAgICovXG4gICAgcHVibGljIHRhZ0lucHV0OiBUYWdJbnB1dENvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRhZ0lucHV0Q29tcG9uZW50KTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIF9hdXRvY29tcGxldGVJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2F1dG9jb21wbGV0ZUl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYXV0b2NvbXBsZXRlSXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pIHtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlSXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIGl0ZW1zIHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldCBhdXRvY29tcGxldGVJdGVtcygpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9hdXRvY29tcGxldGVJdGVtcztcblxuICAgICAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ09uSW5pdFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkKCkuc3Vic2NyaWJlKChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QWRkaW5nKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXNldCBpdGVtc01hdGNoaW5nIGFycmF5IHdoZW4gdGhlIGRyb3Bkb3duIGlzIGhpZGRlblxuICAgICAgICB0aGlzLm9uSGlkZSgpLnN1YnNjcmliZSh0aGlzLnJlc2V0SXRlbXMpO1xuXG4gICAgICAgIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG4gICAgICAgIGNvbnN0IEtFRVBfT1BFTiA9IHRoaXMua2VlcE9wZW47XG5cbiAgICAgICAgdGhpcy50YWdJbnB1dFxuICAgICAgICAgICAgLm9uVGV4dENoYW5nZVxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChLRUVQX09QRU4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2hvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlUG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5tZW51LnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmR5bmFtaWNVcGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpOiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25IaWRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uSXRlbUNsaWNrZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZCgpOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSXRlbUNsaWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogTmcyTWVudUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBtYXhJdGVtc1JlYWNoZWQgPSB0aGlzLnRhZ0lucHV0Lml0ZW1zLmxlbmd0aCA9PT0gdGhpcy50YWdJbnB1dC5tYXhJdGVtcztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEZvcm1WYWx1ZSgpO1xuICAgICAgICBjb25zdCBoYXNNaW5pbXVtVGV4dCA9IHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy5taW5pbXVtVGV4dExlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHZhbHVlKTtcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaXNWaXNpYmxlID09PSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IHRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSAmJiBoYXNJdGVtcyAmJiAhdmFsdWU7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLnRhZ0lucHV0LmRpc2FibGU7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGlzSGlkZGVuICYmICgoaGFzSXRlbXMgJiYgaGFzTWluaW11bVRleHQpIHx8IHNob3dEcm9wZG93bklmRW1wdHkpO1xuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5pc1Zpc2libGUgJiYgIWhhc0l0ZW1zO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZU9ic2VydmFibGUgJiYgaGFzTWluaW11bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zRnJvbU9ic2VydmFibGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCghdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmICF2YWx1ZSkgfHwgbWF4SXRlbXNSZWFjaGVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnNob3cocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uV2luZG93Qmx1clxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcbiAgICBwdWJsaWMgb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRGb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnRhZ0lucHV0LmZvcm1WYWx1ZTtcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZSA/IGZvcm1WYWx1ZS50b1N0cmluZygpLnRyaW0oKSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNhbGN1bGF0ZVBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlcXVlc3RBZGRpbmdcbiAgICAgKiBAcGFyYW0gaXRlbSB7TmcyTWVudUl0ZW19XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0QWRkaW5nID0gYXN5bmMgKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnTW9kZWwoaXRlbSk7XG4gICAgICAgIGF3YWl0IHRoaXMudGFnSW5wdXQub25BZGRpbmdSZXF1ZXN0ZWQodHJ1ZSwgdGFnKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY3JlYXRlVGFnTW9kZWxcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlVGFnTW9kZWwoaXRlbTogTmcyTWVudUl0ZW0pOiBUYWdNb2RlbCB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnID8gaXRlbS52YWx1ZSA6IGl0ZW0udmFsdWVbdGhpcy5pZGVudGlmeUJ5XTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIFt0aGlzLnRhZ0lucHV0LmRpc3BsYXlCeV06IGRpc3BsYXksXG4gICAgICAgICAgICBbdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZTogc3RyaW5nKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgIXRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwZXNBbGxvd2VkID0gdGhpcy50YWdJbnB1dC5hbGxvd0R1cGVzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zLmZpbHRlcigoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gZHVwZXNBbGxvd2VkID8gZmFsc2UgOiB0aGlzLnRhZ0lucHV0LnRhZ3Muc29tZSh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSB0aGlzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0eXBlb2YgdGFnLm1vZGVsID09PSAnc3RyaW5nJyA/IHRhZy5tb2RlbCA6IHRhZy5tb2RlbFtpZGVudGlmeUJ5XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCA9PT0gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nRm4odmFsdWUsIGl0ZW0pICYmIChoYXNWYWx1ZSA9PT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0SXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLnNsaWNlKDAsIHRoaXMubGltaXRJdGVtc1RvIHx8IGl0ZW1zLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVzZXRJdGVtcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBvcHVsYXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVJdGVtcyhkYXRhOiBhbnkpOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJdGVtcyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnNldExvYWRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgLy8gaGlkZSBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gYWRkIGl0ZW1zXG4gICAgICAgICAgICAgICAgLnBvcHVsYXRlSXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHRleHQpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSh0ZXh0KVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sICgpID0+IHRoaXMuc2V0TG9hZGluZ1N0YXRlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0TG9hZGluZ1N0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy50YWdJbnB1dC5pc0xvYWRpbmcgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=