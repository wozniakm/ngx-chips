/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, trigger, style, transition, keyframes, state } from '@angular/animations';
export class TagRipple {
    constructor() {
        this.state = 'none';
    }
}
TagRipple.decorators = [
    { type: Component, args: [{
                selector: 'tag-ripple',
                template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
                animations: [
                    trigger('ink', [
                        state('none', style({ width: 0, opacity: 0 })),
                        transition('none => clicked', [
                            animate(300, keyframes([
                                style({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                style({ opacity: 1, offset: 0.5, width: '50%' }),
                                style({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ],
                styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }
        
        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `]
            }] }
];
TagRipple.propDecorators = {
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TagRipple.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXJpcHBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhZy90YWctcmlwcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFzQzdCLE1BQU0sT0FBTyxTQUFTO0lBcEN0QjtRQXFDb0IsVUFBSyxHQUFXLE1BQU0sQ0FBQztJQUMzQyxDQUFDOzs7WUF0Q0EsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQW1CdEIsUUFBUSxFQUFFOztLQUVUO2dCQUNELFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzt3QkFDNUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFOzRCQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztnQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dDQUNsRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO2dDQUM5QyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7NkJBQ3hFLENBQUMsQ0FBQzt5QkFDTixDQUFDO3FCQUNMLENBQUM7aUJBQ0w7eUJBaENROzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUjthQWdCSjs7O29CQUVJLEtBQUs7Ozs7SUFBTiwwQkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdGF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0YWctcmlwcGxlJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50YWctcmlwcGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLXJpcHBsZVwiIFtAaW5rXT1cInN0YXRlXCI+PC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2luaycsIFtcbiAgICAgICAgICAgIHN0YXRlKCdub25lJywgc3R5bGUoe3dpZHRoOiAwLCBvcGFjaXR5OiAwfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignbm9uZSA9PiBjbGlja2VkJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLCB3aWR0aDogJzMwJScsIGJvcmRlclJhZGl1czogJzEwMCUnfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDAuNSwgd2lkdGg6ICc1MCUnfSksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLjUsIG9mZnNldDogMSwgd2lkdGg6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAnMTZweCd9KVxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1JpcHBsZSB7XG4gICAgQElucHV0KCkgcHVibGljIHN0YXRlOiBzdHJpbmcgPSAnbm9uZSc7XG59XG4iXX0=