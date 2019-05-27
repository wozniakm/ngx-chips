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
export const defaults = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJkZWZhdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTVFLHFDQXFDQzs7O0lBcENHLHdDQUF3Qjs7SUFDeEIsNENBQTRCOztJQUM1QixtQ0FBaUI7O0lBQ2pCLHNDQUFvQjs7SUFDcEIsK0NBQTZCOztJQUM3QixxQ0FBMEI7O0lBQzFCLDBDQUFvQzs7SUFDcEMsK0NBQThCOztJQUM5Qix3Q0FBMEM7O0lBQzFDLGdDQUFjOztJQUNkLCtDQUE2Qjs7SUFDN0Isa0NBQXVCOztJQUN2QixxQ0FBbUI7O0lBQ25CLHNDQUFxQjs7SUFDckIsbUNBQWtCOztJQUNsQixvQ0FBbUI7O0lBQ25CLHFDQUFvQjs7SUFDcEIsNENBQW1DOztJQUNuQyxzQ0FBcUI7O0lBQ3JCLG9DQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixxQ0FBb0I7O0lBQ3BCLHlDQUF3Qjs7SUFDeEIsbUNBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLG1DQUFpQjs7SUFDakIsa0NBQWlCOztJQUNqQixtQ0FBaUI7O0lBQ2pCLHFDQUFxRDs7SUFDckQsbUNBQW1EOztJQUNuRCxvQ0FBa0I7O0lBQ2xCLHFDQUFtQjs7SUFDbkIsNENBR0U7Ozs7O0FBR04sNkNBYUM7OztJQVpHLDRDQUFrQjs7SUFDbEIsNkNBQW1COztJQUNuQiwrQ0FBc0I7O0lBQ3RCLHlDQUFlOztJQUNmLG9EQUEyQjs7SUFDM0Isc0RBQTZCOztJQUM3QixvREFBMEI7O0lBQzFCLCtDQUFxQjs7SUFDckIsMkNBQWtCOztJQUNsQix5Q0FBZTs7SUFDZixnREFBdUI7O0lBQ3ZCLDZDQUF5RDs7O0FBRzdELE1BQU0sT0FBTyxRQUFRLEdBQUc7SUFDcEIsUUFBUSxFQUFFLG1CQUFpQjtRQUN2QixhQUFhLEVBQUUsRUFBRTtRQUNqQixpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLG9CQUFvQixFQUFFLHFCQUFxQjtRQUMzQyxVQUFVLEVBQUUsRUFBRTtRQUNkLGVBQWUsRUFBRSxFQUFFO1FBQ25CLG9CQUFvQixFQUFFLEtBQUs7UUFDM0IsYUFBYSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFLEVBQUU7UUFDVCxvQkFBb0IsRUFBRSxHQUFHO1FBQ3pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLEdBQUc7UUFDdEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLElBQUk7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsU0FBUztRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsT0FBTztRQUNuQixpQkFBaUIsRUFBRTtZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLE9BQU87U0FDakI7S0FDSixFQUFBO0lBQ0QsUUFBUSxFQUFFLG1CQUF5QjtRQUMvQixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsT0FBTztRQUNuQixZQUFZLEVBQUUsSUFBSTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLGlCQUFpQixFQUFFLEtBQUs7UUFDeEIsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsYUFBYSxFQUFFLElBQUk7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVO0tBQ2IsRUFBQTtDQUNKOzs7Ozs7OztBQVFELFNBQVMsVUFBVSxDQUF5QixLQUFhLEVBQUUsTUFBZ0I7O1VBQ2pFLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUVyRCxPQUFPLFdBQVcsSUFBSSxXQUFXO1NBQzVCLFdBQVcsRUFBRTtTQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBBc3luY1ZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTRUNPTkRBUllfUExBQ0VIT0xERVIsIFBMQUNFSE9MREVSIH0gZnJvbSAnLi9jb3JlL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnTW9kZWwgfSBmcm9tICcuL2NvcmUvYWNjZXNzb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0lucHV0T3B0aW9ucyB7XG4gICAgc2VwYXJhdG9yS2V5czogc3RyaW5nW107XG4gICAgc2VwYXJhdG9yS2V5Q29kZXM6IG51bWJlcltdO1xuICAgIG1heEl0ZW1zOiBudW1iZXI7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW107XG4gICAgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW107XG4gICAgb25seUZyb21BdXRvY29tcGxldGU6IGJvb2xlYW47XG4gICAgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG4gICAgdGhlbWU6IHN0cmluZztcbiAgICBvblRleHRDaGFuZ2VEZWJvdW5jZTogbnVtYmVyO1xuICAgIGlucHV0SWQ6IHN0cmluZyB8IG51bGw7XG4gICAgaW5wdXRDbGFzczogc3RyaW5nO1xuICAgIGNsZWFyT25CbHVyOiBib29sZWFuO1xuICAgIGhpZGVGb3JtOiBib29sZWFuO1xuICAgIGFkZE9uQmx1cjogYm9vbGVhbjtcbiAgICBhZGRPblBhc3RlOiBib29sZWFuO1xuICAgIHBhc3RlU3BsaXRQYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHA7XG4gICAgYmxpbmtJZkR1cGU6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAgIGVkaXRhYmxlOiBib29sZWFuO1xuICAgIGFsbG93RHVwZXM6IGJvb2xlYW47XG4gICAgbW9kZWxBc1N0cmluZ3M6IGJvb2xlYW47XG4gICAgdHJpbVRhZ3M6IGJvb2xlYW47XG4gICAgcmlwcGxlOiBib29sZWFuO1xuICAgIHRhYkluZGV4OiBzdHJpbmc7XG4gICAgZGlzYWJsZTogYm9vbGVhbjtcbiAgICBkcmFnWm9uZTogc3RyaW5nO1xuICAgIG9uUmVtb3Zpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgb25BZGRpbmc/OiAodGFnOiBUYWdNb2RlbCkgPT4gT2JzZXJ2YWJsZTxUYWdNb2RlbD47XG4gICAgZGlzcGxheUJ5OiBzdHJpbmc7XG4gICAgaWRlbnRpZnlCeTogc3RyaW5nO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgIGVudGVyOiBzdHJpbmcsXG4gICAgICAgIGxlYXZlOiBzdHJpbmdcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0lucHV0RHJvcGRvd25PcHRpb25zIHtcbiAgICBkaXNwbGF5Qnk6IHN0cmluZztcbiAgICBpZGVudGlmeUJ5OiBzdHJpbmc7XG4gICAgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIG9mZnNldDogc3RyaW5nO1xuICAgIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuO1xuICAgIHNob3dEcm9wZG93bklmRW1wdHk6IGJvb2xlYW47XG4gICAgbWluaW11bVRleHRMZW5ndGg6IG51bWJlcjtcbiAgICBsaW1pdEl0ZW1zVG86IG51bWJlcjtcbiAgICBrZWVwT3BlbjogYm9vbGVhbjtcbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICBkeW5hbWljVXBkYXRlOiBib29sZWFuO1xuICAgIG1hdGNoaW5nRm46ICh2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgdGFnSW5wdXQ6IDxUYWdJbnB1dE9wdGlvbnM+e1xuICAgICAgICBzZXBhcmF0b3JLZXlzOiBbXSxcbiAgICAgICAgc2VwYXJhdG9yS2V5Q29kZXM6IFtdLFxuICAgICAgICBtYXhJdGVtczogSW5maW5pdHksXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQTEFDRUhPTERFUixcbiAgICAgICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6IFNFQ09OREFSWV9QTEFDRUhPTERFUixcbiAgICAgICAgdmFsaWRhdG9yczogW10sXG4gICAgICAgIGFzeW5jVmFsaWRhdG9yczogW10sXG4gICAgICAgIG9ubHlGcm9tQXV0b2NvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge30sXG4gICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgb25UZXh0Q2hhbmdlRGVib3VuY2U6IDI1MCxcbiAgICAgICAgaW5wdXRJZDogbnVsbCxcbiAgICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICAgIGNsZWFyT25CbHVyOiBmYWxzZSxcbiAgICAgICAgaGlkZUZvcm06IGZhbHNlLFxuICAgICAgICBhZGRPbkJsdXI6IGZhbHNlLFxuICAgICAgICBhZGRPblBhc3RlOiBmYWxzZSxcbiAgICAgICAgcGFzdGVTcGxpdFBhdHRlcm46ICcsJyxcbiAgICAgICAgYmxpbmtJZkR1cGU6IHRydWUsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZSxcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICBhbGxvd0R1cGVzOiBmYWxzZSxcbiAgICAgICAgbW9kZWxBc1N0cmluZ3M6IGZhbHNlLFxuICAgICAgICB0cmltVGFnczogdHJ1ZSxcbiAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICB0YWJJbmRleDogJycsXG4gICAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnWm9uZTogJycsXG4gICAgICAgIG9uUmVtb3Zpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgb25BZGRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzcGxheUJ5OiAnZGlzcGxheScsXG4gICAgICAgIGlkZW50aWZ5Qnk6ICd2YWx1ZScsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgICAgICBlbnRlcjogJzI1MG1zJyxcbiAgICAgICAgICAgIGxlYXZlOiAnMTUwbXMnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyb3Bkb3duOiA8VGFnSW5wdXREcm9wZG93bk9wdGlvbnM+e1xuICAgICAgICBkaXNwbGF5Qnk6ICdkaXNwbGF5JyxcbiAgICAgICAgaWRlbnRpZnlCeTogJ3ZhbHVlJyxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0cnVlLFxuICAgICAgICBvZmZzZXQ6ICc1MCAwJyxcbiAgICAgICAgZm9jdXNGaXJzdEVsZW1lbnQ6IGZhbHNlLFxuICAgICAgICBzaG93RHJvcGRvd25JZkVtcHR5OiBmYWxzZSxcbiAgICAgICAgbWluaW11bVRleHRMZW5ndGg6IDEsXG4gICAgICAgIGxpbWl0SXRlbXNUbzogSW5maW5pdHksXG4gICAgICAgIGtlZXBPcGVuOiB0cnVlLFxuICAgICAgICBkeW5hbWljVXBkYXRlOiB0cnVlLFxuICAgICAgICB6SW5kZXg6IDEwMDAsXG4gICAgICAgIG1hdGNoaW5nRm5cbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG1hdGNoaW5nRm5cbiAqIEBwYXJhbSB0aGlzXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gbWF0Y2hpbmdGbih0aGlzOiBUYWdJbnB1dERyb3Bkb3duLCB2YWx1ZTogc3RyaW5nLCB0YXJnZXQ6IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbdGhpcy5kaXNwbGF5QnldLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0VmFsdWUgJiYgdGFyZ2V0VmFsdWVcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPj0gMDtcbn1cbiJdfQ==