/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { OptionsProvider } from './providers/options-provider';
var TagModelClass = /** @class */ (function () {
    function TagModelClass() {
    }
    return TagModelClass;
}());
export { TagModelClass };
/**
 * @param {?} obj
 * @return {?}
 */
export function isObject(obj) {
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
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
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
        if (fromDropdown === void 0) { fromDropdown = false; }
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
        if (fromDropdown === void 0) { fromDropdown = false; }
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
        displayBy: [{ type: Input }],
        identifyBy: [{ type: Input }]
    };
    return TagInputAccessor;
}());
export { TagInputAccessor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJjb3JlL2FjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRDtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7OztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBUTtJQUM3QixPQUFPLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVEO0lBQUE7UUFDWSxXQUFNLEdBQWUsRUFBRSxDQUFDOzs7O1FBU2hCLGNBQVMsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Ozs7UUFLaEUsZUFBVSxHQUFXLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQXNEdEYsQ0FBQztJQXBERyxzQkFBVyxtQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQWlCLEtBQWlCO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BTEE7Ozs7SUFPTSxvQ0FBUzs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxxQ0FBVTs7OztJQUFqQixVQUFrQixLQUFZO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLDJDQUFnQjs7OztJQUF2QixVQUF3QixFQUFPO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSw0Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsRUFBTztRQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksdUNBQVk7Ozs7OztJQUFuQixVQUFvQixJQUFjLEVBQUUsWUFBb0I7UUFBcEIsNkJBQUEsRUFBQSxvQkFBb0I7O1lBQzlDLFFBQVEsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO1FBQzNGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNJLHlDQUFjOzs7Ozs7SUFBckIsVUFBc0IsSUFBYyxFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9COztZQUNoRCxRQUFRLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztRQUN6RixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ08sMENBQWU7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxRQUFRLElBQUssT0FBQSxRQUFRLEtBQUssS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7NEJBMURBLEtBQUs7NkJBS0wsS0FBSzs7SUFzRFYsdUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQXJFWSxnQkFBZ0I7OztJQUN6QixrQ0FBZ0M7O0lBQ2hDLDhDQUF1Qzs7SUFDdkMsNkNBQXVEOztJQUV2RCxvQ0FBa0M7Ozs7O0lBS2xDLHFDQUFnRjs7Ozs7SUFLaEYsc0NBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRhZ01vZGVsQ2xhc3Mge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgVGFnTW9kZWwgPSBzdHJpbmcgfCBUYWdNb2RlbENsYXNzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0QWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBfaXRlbXM6IFRhZ01vZGVsW10gPSBbXTtcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoaXRlbXM6IFRhZ01vZGVsW10pID0+IHZvaWQ7XG5cbiAgICBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNwbGF5QnlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuZGlzcGxheUJ5O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaWRlbnRpZnlCeVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmeUJ5OiBzdHJpbmcgPSBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQuaWRlbnRpZnlCeTtcblxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogVGFnTW9kZWxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOiBUYWdNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5faXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRvdWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtVmFsdWVcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBmcm9tRHJvcGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbVZhbHVlKGl0ZW06IFRhZ01vZGVsLCBmcm9tRHJvcGRvd24gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gZnJvbURyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24gPyB0aGlzLmRyb3Bkb3duLmlkZW50aWZ5QnkgOiB0aGlzLmlkZW50aWZ5Qnk7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA/IGl0ZW1bcHJvcGVydHldIDogaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRJdGVtRGlzcGxheVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHBhcmFtIGZyb21Ecm9wZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRJdGVtRGlzcGxheShpdGVtOiBUYWdNb2RlbCwgZnJvbURyb3Bkb3duID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGZyb21Ecm9wZG93biAmJiB0aGlzLmRyb3Bkb3duID8gdGhpcy5kcm9wZG93bi5kaXNwbGF5QnkgOiB0aGlzLmRpc3BsYXlCeTtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID8gaXRlbVtwcm9wZXJ0eV0gOiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldEl0ZW1zV2l0aG91dFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRJdGVtc1dpdGhvdXQoaW5kZXg6IG51bWJlcik6IFRhZ01vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0sIHBvc2l0aW9uKSA9PiBwb3NpdGlvbiAhPT0gaW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==