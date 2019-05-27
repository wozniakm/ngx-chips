/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DRAG_AND_DROP_KEY } from '../../core/constants';
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
            return (/** @type {?} */ (JSON.parse(data)));
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
        this.state = tslib_1.__assign({}, this.state, state);
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
        { type: Injectable }
    ];
    return DragProvider;
}());
export { DragProvider };
if (false) {
    /** @type {?} */
    DragProvider.prototype.sender;
    /** @type {?} */
    DragProvider.prototype.receiver;
    /** @type {?} */
    DragProvider.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvcmUvcHJvdmlkZXJzL2RyYWctcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBVXpEO0lBQUE7UUFLVyxVQUFLLEdBQVU7WUFDbEIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxTQUFTO1NBQ25CLENBQUM7SUFnRk4sQ0FBQztJQTlFRzs7OztPQUlHOzs7Ozs7O0lBQ0kscUNBQWM7Ozs7OztJQUFyQixVQUFzQixLQUFnQixFQUFFLEdBQWU7UUFDbkQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHFDQUFjOzs7OztJQUFyQixVQUFzQixLQUFnQjs7WUFDNUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBRTFELElBQUk7WUFDQSxPQUFPLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQWMsQ0FBQztTQUN6QztRQUFDLFdBQU07WUFDSixPQUFPO1NBQ1Y7SUFDTCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSxnQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsTUFBeUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksa0NBQVc7Ozs7O0lBQWxCLFVBQW1CLFFBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSSxtQ0FBWTs7Ozs7OztJQUFuQixVQUFvQixHQUFhLEVBQUUsWUFBb0IsRUFBRSxZQUFxQjtRQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLCtCQUFROzs7OztJQUFmLFVBQWdCLEtBQXdDO1FBQ3BELElBQUksQ0FBQyxLQUFLLHdCQUFPLElBQUksQ0FBQyxLQUFLLEVBQUssS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksK0JBQVE7Ozs7O0lBQWYsVUFBZ0IsR0FBbUI7UUFDL0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLGdDQUFTOzs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsU0FBUztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDOztnQkF4RkosVUFBVTs7SUF5RlgsbUJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSxZQUFZOzs7SUFDckIsOEJBQWlDOztJQUNqQyxnQ0FBbUM7O0lBRW5DLDZCQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFnSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhZy1pbnB1dC90YWctaW5wdXQnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuLi9hY2Nlc3Nvcic7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIERyYWdnZWRUYWcge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgdGFnOiBUYWdNb2RlbDtcbiAgICB6b25lOiBzdHJpbmc7XG59XG5cbmltcG9ydCB7IERSQUdfQU5EX0RST1BfS0VZIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGRyYWdnaW5nOiBib29sZWFuLFxuICAgIGRyb3BwaW5nOiBib29sZWFuLFxuICAgIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdGF0ZVByb3BlcnR5ID0ga2V5b2YgU3RhdGU7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnUHJvdmlkZXIge1xuICAgIHB1YmxpYyBzZW5kZXI6IFRhZ0lucHV0Q29tcG9uZW50O1xuICAgIHB1YmxpYyByZWNlaXZlcjogVGFnSW5wdXRDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIGRyb3BwaW5nOiBmYWxzZSxcbiAgICAgICAgaW5kZXg6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXREcmFnZ2VkSXRlbVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RHJhZ2dlZEl0ZW0oZXZlbnQ6IERyYWdFdmVudCwgdGFnOiBEcmFnZ2VkVGFnKTogdm9pZCB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKERSQUdfQU5EX0RST1BfS0VZLCBKU09OLnN0cmluZ2lmeSh0YWcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXREcmFnZ2VkSXRlbVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREcmFnZ2VkSXRlbShldmVudDogRHJhZ0V2ZW50KTogRHJhZ2dlZFRhZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShEUkFHX0FORF9EUk9QX0tFWSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpIGFzIERyYWdnZWRUYWc7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0U2VuZGVyXG4gICAgICogQHBhcmFtIHNlbmRlclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTZW5kZXIoc2VuZGVyOiBUYWdJbnB1dENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRSZWNlaXZlclxuICAgICAqIEBwYXJhbSByZWNlaXZlclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRSZWNlaXZlcihyZWNlaXZlcjogVGFnSW5wdXRDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGFnRHJvcHBlZFxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKiBAcGFyYW0gaW5kZXhEcmFnZ2VkXG4gICAgICogQHBhcmFtIGluZGV4RHJvcHBlZFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhZ0Ryb3BwZWQodGFnOiBUYWdNb2RlbCwgaW5kZXhEcmFnZ2VkOiBudW1iZXIsIGluZGV4RHJvcHBlZD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uRHJhZ0VuZCgpO1xuXG4gICAgICAgIHRoaXMuc2VuZGVyLm9uUmVtb3ZlUmVxdWVzdGVkKHRhZywgaW5kZXhEcmFnZ2VkKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlci5vbkFkZGluZ1JlcXVlc3RlZChmYWxzZSwgdGFnLCBpbmRleERyb3BwZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFN0YXRlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiB7W0sgaW4gU3RhdGVQcm9wZXJ0eV0/OiBTdGF0ZVtLXX0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi50aGlzLnN0YXRlLCAuLi5zdGF0ZX07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0U3RhdGVcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRlKGtleT86IFN0YXRlUHJvcGVydHkpOiBTdGF0ZSB8IFN0YXRlW1N0YXRlUHJvcGVydHldIHtcbiAgICAgICAgcmV0dXJuIGtleSA/IHRoaXMuc3RhdGVba2V5XSA6IHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25EcmFnRW5kXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICBkcm9wcGluZzogZmFsc2UsXG4gICAgICAgICAgICBpbmRleDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==