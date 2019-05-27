/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, trigger, style, transition, keyframes, state } from '@angular/animations';
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    TagRipple.decorators = [
        { type: Component, args: [{
                    selector: 'tag-ripple',
                    template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
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
                    styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "]
                }] }
    ];
    TagRipple.propDecorators = {
        state: [{ type: Input }]
    };
    return TagRipple;
}());
export { TagRipple };
if (false) {
    /** @type {?} */
    TagRipple.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXJpcHBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhZy90YWctcmlwcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFFN0I7SUFBQTtRQXFDb0IsVUFBSyxHQUFXLE1BQU0sQ0FBQztJQUMzQyxDQUFDOztnQkF0Q0EsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQW1CdEIsUUFBUSxFQUFFLG1FQUVUO29CQUNELFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsS0FBSyxFQUFFOzRCQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzs0QkFDNUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztvQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO29DQUNsRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO29DQUM5QyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7aUNBQ3hFLENBQUMsQ0FBQzs2QkFDTixDQUFDO3lCQUNMLENBQUM7cUJBQ0w7NkJBaENRLGthQWlCUjtpQkFnQko7Ozt3QkFFSSxLQUFLOztJQUNWLGdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FGWSxTQUFTOzs7SUFDbEIsMEJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIHRyaWdnZXIsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICBrZXlmcmFtZXMsXG4gICAgc3RhdGVcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGFnLXJpcHBsZScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGFnLXJpcHBsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZy1yaXBwbGVcIiBbQGlua109XCJzdGF0ZVwiPjwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdpbmsnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHt3aWR0aDogMCwgb3BhY2l0eTogMH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gY2xpY2tlZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMCwgd2lkdGg6ICczMCUnLCBib3JkZXJSYWRpdXM6ICcxMDAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwLjUsIHdpZHRoOiAnNTAlJ30pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMC41LCBvZmZzZXQ6IDEsIHdpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzE2cHgnfSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdSaXBwbGUge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdGF0ZTogc3RyaW5nID0gJ25vbmUnO1xufVxuIl19