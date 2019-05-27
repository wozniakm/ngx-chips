/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { defaults } from '../../defaults';
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
        OptionsProvider.defaults.tagInput = tslib_1.__assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = tslib_1.__assign({}, defaults.dropdown, options.dropdown);
    };
    OptionsProvider.defaults = defaults;
    return OptionsProvider;
}());
export { OptionsProvider };
if (false) {
    /** @type {?} */
    OptionsProvider.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbImNvcmUvcHJvdmlkZXJzL29wdGlvbnMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUE0QyxNQUFNLGdCQUFnQixDQUFDO0FBV3BGO0lBQUE7SUFPQSxDQUFDOzs7OztJQUpVLG9DQUFVOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSx3QkFBTyxRQUFRLENBQUMsUUFBUSxFQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRixlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsd0JBQU8sUUFBUSxDQUFDLFFBQVEsRUFBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUxhLHdCQUFRLEdBQUcsUUFBUSxDQUFDO0lBTXRDLHNCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksZUFBZTs7O0lBQ3hCLHlCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRzLCBUYWdJbnB1dE9wdGlvbnMsIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICAgIHRhZ0lucHV0Pzoge1xuICAgICAgICBbUCBpbiBrZXlvZiBUYWdJbnB1dE9wdGlvbnNdPzogVGFnSW5wdXRPcHRpb25zW1BdO1xuICAgIH07XG4gICAgZHJvcGRvd24/OiB7XG4gICAgICAgIFtQIGluIGtleW9mIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zXT86IFRhZ0lucHV0RHJvcGRvd25PcHRpb25zW1BdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbnNQcm92aWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMudGFnSW5wdXQgPSB7Li4uZGVmYXVsdHMudGFnSW5wdXQsIC4uLm9wdGlvbnMudGFnSW5wdXR9O1xuICAgICAgICBPcHRpb25zUHJvdmlkZXIuZGVmYXVsdHMuZHJvcGRvd24gPSB7Li4uZGVmYXVsdHMuZHJvcGRvd24sIC4uLm9wdGlvbnMuZHJvcGRvd259O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGFnSW5wdXREcm9wZG93bk9wdGlvbnMsIFRhZ0lucHV0T3B0aW9ucyB9OyJdfQ==