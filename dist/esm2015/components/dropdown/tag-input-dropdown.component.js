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
const defaults = forwardRef(() => OptionsProvider.defaults.dropdown);
export class TagInputDropdown {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
        this.requestAdding = (item) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
    setLoadingState(state) {
        this.tagInput.isLoading = state;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsZUFBZSxFQUVmLFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQU8sTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUlyRCxRQUFRLEdBQWtDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztBQU1uRyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBOEh6QixZQUE2QixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzs7O1FBL0cvQixXQUFNLEdBQVcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7Ozs7UUFLdkMsc0JBQWlCLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7UUFNckQsd0JBQW1CLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7UUFZekQsc0JBQWlCLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7UUFNckQsaUJBQVksR0FBVyxJQUFJLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQzs7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Ozs7dUJBNEJQLFNBQVMsU0FBQyxXQUFXO3dCQU1yQixlQUFlLFNBQUMsV0FBVztxQkFLM0IsS0FBSztnQ0FLTCxLQUFLO2tDQU1MLEtBQUs7cUNBTUwsS0FBSztnQ0FNTCxLQUFLOzJCQU1MLEtBQUs7d0JBS0wsS0FBSzt5QkFLTCxLQUFLO3lCQU1MLEtBQUs7MkJBS0wsS0FBSzt1QkFNTCxLQUFLOzRCQUtMLEtBQUs7cUJBS0wsS0FBSztnQ0E4QkwsS0FBSzs2QkF5SUwsWUFBWSxTQUFDLGVBQWU7MkJBWTVCLFlBQVksU0FBQyxhQUFhOzs7Ozs7O0lBaFEzQixvQ0FBcUQ7Ozs7OztJQU1yRCxxQ0FBNEU7Ozs7O0lBSzVFLGtDQUF1RDs7Ozs7SUFLdkQsNkNBQXFFOzs7Ozs7SUFNckUsK0NBQXlFOzs7Ozs7SUFNekUsa0RBQTBFOzs7Ozs7SUFNMUUsNkNBQXFFOzs7Ozs7SUFNckUsd0NBQW1FOzs7OztJQUtuRSxxQ0FBcUQ7Ozs7O0lBS3JELHNDQUF1RDs7Ozs7O0lBTXZELHNDQUFxRzs7Ozs7SUFLckcsd0NBQTJEOzs7Ozs7SUFNM0Qsb0NBQW1EOzs7OztJQUtuRCx5Q0FBNkQ7Ozs7O0lBSzdELGtDQUErQzs7Ozs7O0lBTS9DLGlDQUE4Qjs7Ozs7SUFLOUIsb0NBQTBFOzs7OztJQUsxRSw4Q0FBNEM7Ozs7OztJQTZHNUMsZ0NBNkJDOzs7Ozs7SUFpREQseUNBR0M7Ozs7O0lBa0RELHNDQUVDOzs7Ozs7SUFxQkQsa0RBcUJDOztJQS9QVyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdG9yLFxuICAgIElucHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBUeXBlLFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgZmlyc3QsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd24sIE5nMk1lbnVJdGVtIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcblxuY29uc3QgZGVmYXVsdHM6IFR5cGU8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+ID0gZm9yd2FyZFJlZigoKSA9PiBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMuZHJvcGRvd24pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dC1kcm9wZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBkcm9wZG93blxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoTmcyRHJvcGRvd24pIHB1YmxpYyBkcm9wZG93bjogTmcyRHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtZW51VGVtcGxhdGVcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIGlmIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb2Zmc2V0XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9mZnNldDogc3RyaW5nID0gbmV3IGRlZmF1bHRzKCkub2Zmc2V0O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9jdXNGaXJzdEVsZW1lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZm9jdXNGaXJzdEVsZW1lbnQgPSBuZXcgZGVmYXVsdHMoKS5mb2N1c0ZpcnN0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIC0gc2hvdyBhdXRvY29tcGxldGUgZHJvcGRvd24gaWYgdGhlIHZhbHVlIG9mIGlucHV0IGlzIGVtcHR5XG4gICAgICogQG5hbWUgc2hvd0Ryb3Bkb3duSWZFbXB0eVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93RHJvcGRvd25JZkVtcHR5ID0gbmV3IGRlZmF1bHRzKCkuc2hvd0Ryb3Bkb3duSWZFbXB0eTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBvYnNlcnZhYmxlIHBhc3NlZCBhcyBpbnB1dCB3aGljaCBwb3B1bGF0ZXMgdGhlIGF1dG9jb21wbGV0ZSBpdGVtc1xuICAgICAqIEBuYW1lIGF1dG9jb21wbGV0ZU9ic2VydmFibGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZTogKHRleHQ6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogLSBkZXNjIG1pbmltdW0gdGV4dCBsZW5ndGggaW4gb3JkZXIgdG8gZGlzcGxheSB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duXG4gICAgICogQG5hbWUgbWluaW11bVRleHRMZW5ndGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWluaW11bVRleHRMZW5ndGggPSBuZXcgZGVmYXVsdHMoKS5taW5pbXVtVGV4dExlbmd0aDtcblxuICAgIC8qKlxuICAgICAqIC0gbnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgaW4gdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93blxuICAgICAqIEBuYW1lIGxpbWl0SXRlbXNUb1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsaW1pdEl0ZW1zVG86IG51bWJlciA9IG5ldyBkZWZhdWx0cygpLmxpbWl0SXRlbXNUbztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGRpc3BsYXlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5QnkgPSBuZXcgZGVmYXVsdHMoKS5kaXNwbGF5Qnk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpZGVudGlmeUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlkZW50aWZ5QnkgPSBuZXcgZGVmYXVsdHMoKS5pZGVudGlmeUJ5O1xuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGEgZnVuY3Rpb24gYSBkZXZlbG9wZXIgY2FuIHVzZSB0byBpbXBsZW1lbnQgY3VzdG9tIG1hdGNoaW5nIGZvciB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICogQG5hbWUgbWF0Y2hpbmdGblxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXRjaGluZ0ZuOiAodmFsdWU6IHN0cmluZywgdGFyZ2V0OiBUYWdNb2RlbCkgPT4gYm9vbGVhbiA9IG5ldyBkZWZhdWx0cygpLm1hdGNoaW5nRm47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5ID0gbmV3IGRlZmF1bHRzKCkuYXBwZW5kVG9Cb2R5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUga2VlcE9wZW5cbiAgICAgKiBAZGVzY3JpcHRpb24gb3B0aW9uIHRvIGxlYXZlIGRyb3Bkb3duIG9wZW4gd2hlbiBhZGRpbmcgYSBuZXcgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwT3BlbiA9IG5ldyBkZWZhdWx0cygpLmtlZXBPcGVuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHluYW1pY1VwZGF0ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljVXBkYXRlID0gbmV3IGRlZmF1bHRzKCkuZHluYW1pY1VwZGF0ZTtcblxuICAgIC8qKlxuICAgICogQG5hbWUgekluZGV4XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHpJbmRleCA9IG5ldyBkZWZhdWx0cygpLnpJbmRleDtcblxuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgaXRlbXMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQgKGZvciBhdXRvY29tcGxldGUpXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRhZ0lucHV0XG4gICAgICovXG4gICAgcHVibGljIHRhZ0lucHV0OiBUYWdJbnB1dENvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRhZ0lucHV0Q29tcG9uZW50KTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIF9hdXRvY29tcGxldGVJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2F1dG9jb21wbGV0ZUl0ZW1zOiBUYWdNb2RlbFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYXV0b2NvbXBsZXRlSXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pIHtcbiAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlSXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhdXRvY29tcGxldGVJdGVtc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIGl0ZW1zIHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGdldCBhdXRvY29tcGxldGVJdGVtcygpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9hdXRvY29tcGxldGVJdGVtcztcblxuICAgICAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ09uSW5pdFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkKCkuc3Vic2NyaWJlKChpdGVtOiBOZzJNZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QWRkaW5nKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXNldCBpdGVtc01hdGNoaW5nIGFycmF5IHdoZW4gdGhlIGRyb3Bkb3duIGlzIGhpZGRlblxuICAgICAgICB0aGlzLm9uSGlkZSgpLnN1YnNjcmliZSh0aGlzLnJlc2V0SXRlbXMpO1xuXG4gICAgICAgIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAyMDA7XG4gICAgICAgIGNvbnN0IEtFRVBfT1BFTiA9IHRoaXMua2VlcE9wZW47XG5cbiAgICAgICAgdGhpcy50YWdJbnB1dFxuICAgICAgICAgICAgLm9uVGV4dENoYW5nZVxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChLRUVQX09QRU4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc2hvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlUG9zaXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50YWdJbnB1dC5pbnB1dEZvcm0uZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5tZW51LnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmR5bmFtaWNVcGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzVmlzaWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpOiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub25IaWRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uSXRlbUNsaWNrZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZCgpOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9uSXRlbUNsaWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0ZWRJdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEl0ZW0oKTogTmcyTWVudUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5tZW51LnN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBtYXhJdGVtc1JlYWNoZWQgPSB0aGlzLnRhZ0lucHV0Lml0ZW1zLmxlbmd0aCA9PT0gdGhpcy50YWdJbnB1dC5tYXhJdGVtcztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEZvcm1WYWx1ZSgpO1xuICAgICAgICBjb25zdCBoYXNNaW5pbXVtVGV4dCA9IHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy5taW5pbXVtVGV4dExlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHZhbHVlKTtcbiAgICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaXNWaXNpYmxlID09PSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duSWZFbXB0eSA9IHRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSAmJiBoYXNJdGVtcyAmJiAhdmFsdWU7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLnRhZ0lucHV0LmRpc2FibGU7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGlzSGlkZGVuICYmICgoaGFzSXRlbXMgJiYgaGFzTWluaW11bVRleHQpIHx8IHNob3dEcm9wZG93bklmRW1wdHkpO1xuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5pc1Zpc2libGUgJiYgIWhhc0l0ZW1zO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZU9ic2VydmFibGUgJiYgaGFzTWluaW11bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zRnJvbU9ic2VydmFibGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCghdGhpcy5zaG93RHJvcGRvd25JZkVtcHR5ICYmICF2YWx1ZSkgfHwgbWF4SXRlbXNSZWFjaGVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnNob3cocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaGlkZVxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2Nyb2xsTGlzdGVuZXJcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgICBwdWJsaWMgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uV2luZG93Qmx1clxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcbiAgICBwdWJsaWMgb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRGb3JtVmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEZvcm1WYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnRhZ0lucHV0LmZvcm1WYWx1ZTtcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZSA/IGZvcm1WYWx1ZS50b1N0cmluZygpLnRyaW0oKSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNhbGN1bGF0ZVBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVQb3NpdGlvbigpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuaW5wdXRGb3JtLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlcXVlc3RBZGRpbmdcbiAgICAgKiBAcGFyYW0gaXRlbSB7TmcyTWVudUl0ZW19XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0QWRkaW5nID0gYXN5bmMgKGl0ZW06IE5nMk1lbnVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnTW9kZWwoaXRlbSk7XG4gICAgICAgIGF3YWl0IHRoaXMudGFnSW5wdXQub25BZGRpbmdSZXF1ZXN0ZWQodHJ1ZSwgdGFnKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY3JlYXRlVGFnTW9kZWxcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlVGFnTW9kZWwoaXRlbTogTmcyTWVudUl0ZW0pOiBUYWdNb2RlbCB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0eXBlb2YgaXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgPyBpdGVtLnZhbHVlIDogaXRlbS52YWx1ZVt0aGlzLmRpc3BsYXlCeV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnID8gaXRlbS52YWx1ZSA6IGl0ZW0udmFsdWVbdGhpcy5pZGVudGlmeUJ5XTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIFt0aGlzLnRhZ0lucHV0LmRpc3BsYXlCeV06IGRpc3BsYXksXG4gICAgICAgICAgICBbdGhpcy50YWdJbnB1dC5pZGVudGlmeUJ5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0TWF0Y2hpbmdJdGVtcyh2YWx1ZTogc3RyaW5nKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgIXRoaXMuc2hvd0Ryb3Bkb3duSWZFbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwZXNBbGxvd2VkID0gdGhpcy50YWdJbnB1dC5hbGxvd0R1cGVzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9jb21wbGV0ZUl0ZW1zLmZpbHRlcigoaXRlbTogVGFnTW9kZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gZHVwZXNBbGxvd2VkID8gZmFsc2UgOiB0aGlzLnRhZ0lucHV0LnRhZ3Muc29tZSh0YWcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSB0aGlzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0eXBlb2YgdGFnLm1vZGVsID09PSAnc3RyaW5nJyA/IHRhZy5tb2RlbCA6IHRhZy5tb2RlbFtpZGVudGlmeUJ5XTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCA9PT0gaXRlbVt0aGlzLmlkZW50aWZ5QnldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nRm4odmFsdWUsIGl0ZW0pICYmIChoYXNWYWx1ZSA9PT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgc2V0SXRlbXMoaXRlbXM6IFRhZ01vZGVsW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLnNsaWNlKDAsIHRoaXMubGltaXRJdGVtc1RvIHx8IGl0ZW1zLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgcmVzZXRJdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVzZXRJdGVtcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHBvcHVsYXRlSXRlbXNcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVJdGVtcyhkYXRhOiBhbnkpOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJdGVtcyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5kaXNwbGF5QnldOiBpdGVtLFxuICAgICAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiBpdGVtXG4gICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbXNGcm9tT2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJdGVtc0Zyb21PYnNlcnZhYmxlID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnNldExvYWRpbmdTdGF0ZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVGbiA9IChkYXRhOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgLy8gaGlkZSBsb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gYWRkIGl0ZW1zXG4gICAgICAgICAgICAgICAgLnBvcHVsYXRlSXRlbXMoZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRNYXRjaGluZ0l0ZW1zKHRleHQpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZSh0ZXh0KVxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sICgpID0+IHRoaXMuc2V0TG9hZGluZ1N0YXRlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0TG9hZGluZ1N0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBUYWdJbnB1dERyb3Bkb3duIHtcbiAgICAgICAgdGhpcy50YWdJbnB1dC5pc0xvYWRpbmcgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=