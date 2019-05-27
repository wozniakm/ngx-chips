/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { OptionsProvider } from './providers/options-provider';
export class TagModelClass {
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isObject(obj) {
    return obj === Object(obj);
}
export class TagInputAccessor {
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
if (false) {
    /** @type {?} */
    TagInputAccessor.prototype._items;
    /** @type {?} */
    TagInputAccessor.prototype._onTouchedCallback;
    /** @type {?} */
    TagInputAccessor.prototype._onChangeCallback;
    /** @type {?} */
    TagInputAccessor.prototype.dropdown;
    /**
     * \@name displayBy
     * @type {?}
     */
    TagInputAccessor.prototype.displayBy;
    /**
     * \@name identifyBy
     * @type {?}
     */
    TagInputAccessor.prototype.identifyBy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJjb3JlL2FjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sYUFBYTtDQUV6Qjs7Ozs7QUFJRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBQ1ksV0FBTSxHQUFlLEVBQUUsQ0FBQzs7OztRQVNoQixjQUFTLEdBQVcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOzs7O1FBS2hFLGVBQVUsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFzRHRGLENBQUM7Ozs7SUFwREcsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBVyxLQUFLLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sU0FBUztRQUNaLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsRUFBTztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsRUFBTztRQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFPTSxZQUFZLENBQUMsSUFBYyxFQUFFLFlBQVksR0FBRyxLQUFLOztjQUM5QyxRQUFRLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTtRQUMzRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7Ozs7OztJQU9NLGNBQWMsQ0FBQyxJQUFjLEVBQUUsWUFBWSxHQUFHLEtBQUs7O2NBQ2hELFFBQVEsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1FBQ3pGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFNUyxlQUFlLENBQUMsS0FBYTtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozt3QkExREEsS0FBSzt5QkFLTCxLQUFLOzs7O0lBZE4sa0NBQWdDOztJQUNoQyw4Q0FBdUM7O0lBQ3ZDLDZDQUF1RDs7SUFFdkQsb0NBQWtDOzs7OztJQUtsQyxxQ0FBZ0Y7Ozs7O0lBS2hGLHNDQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFnSW5wdXREcm9wZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWdNb2RlbENsYXNzIHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFRhZ01vZGVsID0gc3RyaW5nIHwgVGFnTW9kZWxDbGFzcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdJbnB1dEFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX2l0ZW1zOiBUYWdNb2RlbFtdID0gW107XG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKGl0ZW1zOiBUYWdNb2RlbFtdKSA9PiB2b2lkO1xuXG4gICAgcHVibGljIGRyb3Bkb3duOiBUYWdJbnB1dERyb3Bkb3duO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZGlzcGxheUJ5XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc3BsYXlCeTogc3RyaW5nID0gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0LmRpc3BsYXlCeTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlkZW50aWZ5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZnlCeTogc3RyaW5nID0gT3B0aW9uc1Byb3ZpZGVyLmRlZmF1bHRzLnRhZ0lucHV0LmlkZW50aWZ5Qnk7XG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IFRhZ01vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpdGVtcyhpdGVtczogVGFnTW9kZWxbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX2l0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ub3VjaGVkKCkge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKGl0ZW1zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbVZhbHVlXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZnJvbURyb3Bkb3duXG4gICAgICovXG4gICAgcHVibGljIGdldEl0ZW1WYWx1ZShpdGVtOiBUYWdNb2RlbCwgZnJvbURyb3Bkb3duID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGZyb21Ecm9wZG93biAmJiB0aGlzLmRyb3Bkb3duID8gdGhpcy5kcm9wZG93bi5pZGVudGlmeUJ5IDogdGhpcy5pZGVudGlmeUJ5O1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPyBpdGVtW3Byb3BlcnR5XSA6IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0SXRlbURpc3BsYXlcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBmcm9tRHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbURpc3BsYXkoaXRlbTogVGFnTW9kZWwsIGZyb21Ecm9wZG93biA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBmcm9tRHJvcGRvd24gJiYgdGhpcy5kcm9wZG93biA/IHRoaXMuZHJvcGRvd24uZGlzcGxheUJ5IDogdGhpcy5kaXNwbGF5Qnk7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA/IGl0ZW1bcHJvcGVydHldIDogaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtc1dpdGhvdXRcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNXaXRob3V0KGluZGV4OiBudW1iZXIpOiBUYWdNb2RlbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtLCBwb3NpdGlvbikgPT4gcG9zaXRpb24gIT09IGluZGV4KTtcbiAgICB9XG59XG4iXX0=