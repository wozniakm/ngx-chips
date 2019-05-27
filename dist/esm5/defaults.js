/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { SECONDARY_PLACEHOLDER, PLACEHOLDER } from './core/constants/index';
/**
 * @record
 */
export function TagInputOptions() { }
if (false) {
    /** @type {?} */
    TagInputOptions.prototype.separatorKeys;
    /** @type {?} */
    TagInputOptions.prototype.separatorKeyCodes;
    /** @type {?} */
    TagInputOptions.prototype.maxItems;
    /** @type {?} */
    TagInputOptions.prototype.placeholder;
    /** @type {?} */
    TagInputOptions.prototype.secondaryPlaceholder;
    /** @type {?} */
    TagInputOptions.prototype.validators;
    /** @type {?} */
    TagInputOptions.prototype.asyncValidators;
    /** @type {?} */
    TagInputOptions.prototype.onlyFromAutocomplete;
    /** @type {?} */
    TagInputOptions.prototype.errorMessages;
    /** @type {?} */
    TagInputOptions.prototype.theme;
    /** @type {?} */
    TagInputOptions.prototype.onTextChangeDebounce;
    /** @type {?} */
    TagInputOptions.prototype.inputId;
    /** @type {?} */
    TagInputOptions.prototype.inputClass;
    /** @type {?} */
    TagInputOptions.prototype.clearOnBlur;
    /** @type {?} */
    TagInputOptions.prototype.hideForm;
    /** @type {?} */
    TagInputOptions.prototype.addOnBlur;
    /** @type {?} */
    TagInputOptions.prototype.addOnPaste;
    /** @type {?} */
    TagInputOptions.prototype.pasteSplitPattern;
    /** @type {?} */
    TagInputOptions.prototype.blinkIfDupe;
    /** @type {?} */
    TagInputOptions.prototype.removable;
    /** @type {?} */
    TagInputOptions.prototype.editable;
    /** @type {?} */
    TagInputOptions.prototype.allowDupes;
    /** @type {?} */
    TagInputOptions.prototype.modelAsStrings;
    /** @type {?} */
    TagInputOptions.prototype.trimTags;
    /** @type {?} */
    TagInputOptions.prototype.ripple;
    /** @type {?} */
    TagInputOptions.prototype.tabIndex;
    /** @type {?} */
    TagInputOptions.prototype.disable;
    /** @type {?} */
    TagInputOptions.prototype.dragZone;
    /** @type {?|undefined} */
    TagInputOptions.prototype.onRemoving;
    /** @type {?|undefined} */
    TagInputOptions.prototype.onAdding;
    /** @type {?} */
    TagInputOptions.prototype.displayBy;
    /** @type {?} */
    TagInputOptions.prototype.identifyBy;
    /** @type {?} */
    TagInputOptions.prototype.animationDuration;
}
/**
 * @record
 */
export function TagInputDropdownOptions() { }
if (false) {
    /** @type {?} */
    TagInputDropdownOptions.prototype.displayBy;
    /** @type {?} */
    TagInputDropdownOptions.prototype.identifyBy;
    /** @type {?} */
    TagInputDropdownOptions.prototype.appendToBody;
    /** @type {?} */
    TagInputDropdownOptions.prototype.offset;
    /** @type {?} */
    TagInputDropdownOptions.prototype.focusFirstElement;
    /** @type {?} */
    TagInputDropdownOptions.prototype.showDropdownIfEmpty;
    /** @type {?} */
    TagInputDropdownOptions.prototype.minimumTextLength;
    /** @type {?} */
    TagInputDropdownOptions.prototype.limitItemsTo;
    /** @type {?} */
    TagInputDropdownOptions.prototype.keepOpen;
    /** @type {?} */
    TagInputDropdownOptions.prototype.zIndex;
    /** @type {?} */
    TagInputDropdownOptions.prototype.dynamicUpdate;
    /** @type {?} */
    TagInputDropdownOptions.prototype.matchingFn;
}
/** @type {?} */
export var defaults = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJkZWZhdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTVFLHFDQXFDQzs7O0lBcENHLHdDQUF3Qjs7SUFDeEIsNENBQTRCOztJQUM1QixtQ0FBaUI7O0lBQ2pCLHNDQUFvQjs7SUFDcEIsK0NBQTZCOztJQUM3QixxQ0FBMEI7O0lBQzFCLDBDQUFvQzs7SUFDcEMsK0NBQThCOztJQUM5Qix3Q0FBMEM7O0lBQzFDLGdDQUFjOztJQUNkLCtDQUE2Qjs7SUFDN0Isa0NBQXVCOztJQUN2QixxQ0FBbUI7O0lBQ25CLHNDQUFxQjs7SUFDckIsbUNBQWtCOztJQUNsQixvQ0FBbUI7O0lBQ25CLHFDQUFvQjs7SUFDcEIsNENBQW1DOztJQUNuQyxzQ0FBcUI7O0lBQ3JCLG9DQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixxQ0FBb0I7O0lBQ3BCLHlDQUF3Qjs7SUFDeEIsbUNBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLG1DQUFpQjs7SUFDakIsa0NBQWlCOztJQUNqQixtQ0FBaUI7O0lBQ2pCLHFDQUFxRDs7SUFDckQsbUNBQW1EOztJQUNuRCxvQ0FBa0I7O0lBQ2xCLHFDQUFtQjs7SUFDbkIsNENBR0U7Ozs7O0FBR04sNkNBYUM7OztJQVpHLDRDQUFrQjs7SUFDbEIsNkNBQW1COztJQUNuQiwrQ0FBc0I7O0lBQ3RCLHlDQUFlOztJQUNmLG9EQUEyQjs7SUFDM0Isc0RBQTZCOztJQUM3QixvREFBMEI7O0lBQzFCLCtDQUFxQjs7SUFDckIsMkNBQWtCOztJQUNsQix5Q0FBZTs7SUFDZixnREFBdUI7O0lBQ3ZCLDZDQUF5RDs7O0FBRzdELE1BQU0sS0FBTyxRQUFRLEdBQUc7SUFDcEIsUUFBUSxFQUFFLG1CQUFpQjtRQUN2QixhQUFhLEVBQUUsRUFBRTtRQUNqQixpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLG9CQUFvQixFQUFFLHFCQUFxQjtRQUMzQyxVQUFVLEVBQUUsRUFBRTtRQUNkLGVBQWUsRUFBRSxFQUFFO1FBQ25CLG9CQUFvQixFQUFFLEtBQUs7UUFDM0IsYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFLEVBQUU7UUFDVCxvQkFBb0IsRUFBRSxHQUFHO1FBQ3pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEdBQUc7UUFDdEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLElBQUk7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsU0FBUztRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsT0FBTztRQUNuQixpQkFBaUIsRUFBRTtZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLE9BQU87U0FDakI7S0FDSixFQUFBO0lBQ0QsUUFBUSxFQUFFLG1CQUF5QjtRQUMvQixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsT0FBTztRQUNuQixZQUFZLEVBQUUsSUFBSTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLGlCQUFpQixFQUFFLEtBQUs7UUFDeEIsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsYUFBYSxFQUFFLElBQUk7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLFlBQUE7S0FDYixFQUFBO0NBQ0o7Ozs7Ozs7O0FBUUQsU0FBUyxVQUFVLENBQXlCLEtBQWEsRUFBRSxNQUFnQjs7UUFDakUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFO0lBRXJELE9BQU8sV0FBVyxJQUFJLFdBQVc7U0FDNUIsV0FBVyxFQUFFO1NBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFzeW5jVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNFQ09OREFSWV9QTEFDRUhPTERFUiwgUExBQ0VIT0xERVIgfSBmcm9tICcuL2NvcmUvY29uc3RhbnRzL2luZGV4JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdNb2RlbCB9IGZyb20gJy4vY29yZS9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnSW5wdXRPcHRpb25zIHtcbiAgICBzZXBhcmF0b3JLZXlzOiBzdHJpbmdbXTtcbiAgICBzZXBhcmF0b3JLZXlDb2RlczogbnVtYmVyW107XG4gICAgbWF4SXRlbXM6IG51bWJlcjtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHNlY29uZGFyeVBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTtcbiAgICBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXTtcbiAgICBvbmx5RnJvbUF1dG9jb21wbGV0ZTogYm9vbGVhbjtcbiAgICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIG9uVGV4dENoYW5nZURlYm91bmNlOiBudW1iZXI7XG4gICAgaW5wdXRJZDogc3RyaW5nIHwgbnVsbDtcbiAgICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gICAgY2xlYXJPbkJsdXI6IGJvb2xlYW47XG4gICAgaGlkZUZvcm06IGJvb2xlYW47XG4gICAgYWRkT25CbHVyOiBib29sZWFuO1xuICAgIGFkZE9uUGFzdGU6IGJvb2xlYW47XG4gICAgcGFzdGVTcGxpdFBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cDtcbiAgICBibGlua0lmRHVwZTogYm9vbGVhbjtcbiAgICByZW1vdmFibGU6IGJvb2xlYW47XG4gICAgZWRpdGFibGU6IGJvb2xlYW47XG4gICAgYWxsb3dEdXBlczogYm9vbGVhbjtcbiAgICBtb2RlbEFzU3RyaW5nczogYm9vbGVhbjtcbiAgICB0cmltVGFnczogYm9vbGVhbjtcbiAgICByaXBwbGU6IGJvb2xlYW47XG4gICAgdGFiSW5kZXg6IHN0cmluZztcbiAgICBkaXNhYmxlOiBib29sZWFuO1xuICAgIGRyYWdab25lOiBzdHJpbmc7XG4gICAgb25SZW1vdmluZz86ICh0YWc6IFRhZ01vZGVsKSA9PiBPYnNlcnZhYmxlPFRhZ01vZGVsPjtcbiAgICBvbkFkZGluZz86ICh0YWc6IFRhZ01vZGVsKSA9PiBPYnNlcnZhYmxlPFRhZ01vZGVsPjtcbiAgICBkaXNwbGF5Qnk6IHN0cmluZztcbiAgICBpZGVudGlmeUJ5OiBzdHJpbmc7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IHtcbiAgICAgICAgZW50ZXI6IHN0cmluZyxcbiAgICAgICAgbGVhdmU6IHN0cmluZ1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnSW5wdXREcm9wZG93bk9wdGlvbnMge1xuICAgIGRpc3BsYXlCeTogc3RyaW5nO1xuICAgIGlkZW50aWZ5Qnk6IHN0cmluZztcbiAgICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gICAgb2Zmc2V0OiBzdHJpbmc7XG4gICAgZm9jdXNGaXJzdEVsZW1lbnQ6IGJvb2xlYW47XG4gICAgc2hvd0Ryb3Bkb3duSWZFbXB0eTogYm9vbGVhbjtcbiAgICBtaW5pbXVtVGV4dExlbmd0aDogbnVtYmVyO1xuICAgIGxpbWl0SXRlbXNUbzogbnVtYmVyO1xuICAgIGtlZXBPcGVuOiBib29sZWFuO1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIGR5bmFtaWNVcGRhdGU6IGJvb2xlYW47XG4gICAgbWF0Y2hpbmdGbjogKHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICB0YWdJbnB1dDogPFRhZ0lucHV0T3B0aW9ucz57XG4gICAgICAgIHNlcGFyYXRvcktleXM6IFtdLFxuICAgICAgICBzZXBhcmF0b3JLZXlDb2RlczogW10sXG4gICAgICAgIG1heEl0ZW1zOiBJbmZpbml0eSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFBMQUNFSE9MREVSLFxuICAgICAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogU0VDT05EQVJZX1BMQUNFSE9MREVSLFxuICAgICAgICB2YWxpZGF0b3JzOiBbXSxcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBbXSxcbiAgICAgICAgb25seUZyb21BdXRvY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2VzOiB7fSxcbiAgICAgICAgdGhlbWU6ICcnLFxuICAgICAgICBvblRleHRDaGFuZ2VEZWJvdW5jZTogMjUwLFxuICAgICAgICBpbnB1dElkOiBudWxsLFxuICAgICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgICAgY2xlYXJPbkJsdXI6IGZhbHNlLFxuICAgICAgICBoaWRlRm9ybTogZmFsc2UsXG4gICAgICAgIGFkZE9uQmx1cjogZmFsc2UsXG4gICAgICAgIGFkZE9uUGFzdGU6IGZhbHNlLFxuICAgICAgICBwYXN0ZVNwbGl0UGF0dGVybjogJywnLFxuICAgICAgICBibGlua0lmRHVwZTogdHJ1ZSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlLFxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIGFsbG93RHVwZXM6IGZhbHNlLFxuICAgICAgICBtb2RlbEFzU3RyaW5nczogZmFsc2UsXG4gICAgICAgIHRyaW1UYWdzOiB0cnVlLFxuICAgICAgICByaXBwbGU6IHRydWUsXG4gICAgICAgIHRhYkluZGV4OiAnJyxcbiAgICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdab25lOiAnJyxcbiAgICAgICAgb25SZW1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgICBvbkFkZGluZzogdW5kZWZpbmVkLFxuICAgICAgICBkaXNwbGF5Qnk6ICdkaXNwbGF5JyxcbiAgICAgICAgaWRlbnRpZnlCeTogJ3ZhbHVlJyxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiAnMjUwbXMnLFxuICAgICAgICAgICAgbGVhdmU6ICcxNTBtcydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZHJvcGRvd246IDxUYWdJbnB1dERyb3Bkb3duT3B0aW9ucz57XG4gICAgICAgIGRpc3BsYXlCeTogJ2Rpc3BsYXknLFxuICAgICAgICBpZGVudGlmeUJ5OiAndmFsdWUnLFxuICAgICAgICBhcHBlbmRUb0JvZHk6IHRydWUsXG4gICAgICAgIG9mZnNldDogJzUwIDAnLFxuICAgICAgICBmb2N1c0ZpcnN0RWxlbWVudDogZmFsc2UsXG4gICAgICAgIHNob3dEcm9wZG93bklmRW1wdHk6IGZhbHNlLFxuICAgICAgICBtaW5pbXVtVGV4dExlbmd0aDogMSxcbiAgICAgICAgbGltaXRJdGVtc1RvOiBJbmZpbml0eSxcbiAgICAgICAga2VlcE9wZW46IHRydWUsXG4gICAgICAgIGR5bmFtaWNVcGRhdGU6IHRydWUsXG4gICAgICAgIHpJbmRleDogMTAwMCxcbiAgICAgICAgbWF0Y2hpbmdGblxuICAgIH1cbn07XG5cbi8qKlxuICogQG5hbWUgbWF0Y2hpbmdGblxuICogQHBhcmFtIHRoaXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHRhcmdldFxuICovXG5mdW5jdGlvbiBtYXRjaGluZ0ZuKHRoaXM6IFRhZ0lucHV0RHJvcGRvd24sIHZhbHVlOiBzdHJpbmcsIHRhcmdldDogVGFnTW9kZWwpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFt0aGlzLmRpc3BsYXlCeV0udG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0YXJnZXRWYWx1ZSAmJiB0YXJnZXRWYWx1ZVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA+PSAwO1xufVxuIl19