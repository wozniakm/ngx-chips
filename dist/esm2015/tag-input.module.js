/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { HighlightPipe } from './core/pipes/highlight.pipe';
import { DragProvider } from './core/providers/drag-provider';
import { OptionsProvider } from './core/providers/options-provider';
import { TagInputComponent } from './components/tag-input/tag-input';
import { DeleteIconComponent } from './components/icon/icon';
import { TagInputForm } from './components/tag-input-form/tag-input-form.component';
import { TagComponent } from './components/tag/tag.component';
import { TagInputDropdown } from './components/dropdown/tag-input-dropdown.component';
import { TagRipple } from './components/tag/tag-ripple.component';
/** @type {?} */
const optionsProvider = new OptionsProvider();
export class TagInputModule {
    /**
     * \@name withDefaults
     * @param {?} options {Options}
     * @return {?}
     */
    static withDefaults(options) {
        optionsProvider.setOptions(options);
    }
}
TagInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    Ng2DropdownModule
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
                    { provide: COMPOSITION_BUFFER_MODE, useValue: false },
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGlwcy8iLCJzb3VyY2VzIjpbInRhZy1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7TUFFNUQsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFO0FBZ0M3QyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBS2hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBZ0I7UUFDdkMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFyQ0osUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxpQkFBaUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDVixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixTQUFTO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixTQUFTO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxZQUFZO29CQUNaLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7aUJBQ3hEO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUsIENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLW1hdGVyaWFsLWRyb3Bkb3duJztcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2NvcmUvcGlwZXMvaGlnaGxpZ2h0LnBpcGUnO1xuaW1wb3J0IHsgRHJhZ1Byb3ZpZGVyIH0gZnJvbSAnLi9jb3JlL3Byb3ZpZGVycy9kcmFnLXByb3ZpZGVyJztcbmltcG9ydCB7IE9wdGlvbnNQcm92aWRlciwgT3B0aW9ucyB9IGZyb20gJy4vY29yZS9wcm92aWRlcnMvb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBUYWdJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0JztcbmltcG9ydCB7IERlbGV0ZUljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uJztcbmltcG9ydCB7IFRhZ0lucHV0Rm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0lucHV0RHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdSaXBwbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnL3RhZy1yaXBwbGUuY29tcG9uZW50JztcblxuY29uc3Qgb3B0aW9uc1Byb3ZpZGVyID0gbmV3IE9wdGlvbnNQcm92aWRlcigpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmcyRHJvcGRvd25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUYWdJbnB1dENvbXBvbmVudCxcbiAgICAgICAgRGVsZXRlSWNvbkNvbXBvbmVudCxcbiAgICAgICAgVGFnSW5wdXRGb3JtLFxuICAgICAgICBUYWdDb21wb25lbnQsXG4gICAgICAgIEhpZ2hsaWdodFBpcGUsXG4gICAgICAgIFRhZ0lucHV0RHJvcGRvd24sXG4gICAgICAgIFRhZ1JpcHBsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUYWdJbnB1dENvbXBvbmVudCxcbiAgICAgICAgRGVsZXRlSWNvbkNvbXBvbmVudCxcbiAgICAgICAgVGFnSW5wdXRGb3JtLFxuICAgICAgICBUYWdDb21wb25lbnQsXG4gICAgICAgIEhpZ2hsaWdodFBpcGUsXG4gICAgICAgIFRhZ0lucHV0RHJvcGRvd24sXG4gICAgICAgIFRhZ1JpcHBsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYWdQcm92aWRlcixcbiAgICAgICAgeyBwcm92aWRlOiBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgdXNlVmFsdWU6IGZhbHNlIH0sXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dE1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2l0aERlZmF1bHRzXG4gICAgICogQHBhcmFtIG9wdGlvbnMge09wdGlvbnN9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyB3aXRoRGVmYXVsdHMob3B0aW9uczogT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBvcHRpb25zUHJvdmlkZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=