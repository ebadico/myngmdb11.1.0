import { isIE } from './isIE';
function getSize(axis, body, html, computedStyle) {
    return Math.max(body[`offset${axis}`], body[`scroll${axis}`], html[`client${axis}`], html[`offset${axis}`], html[`scroll${axis}`], isIE(10)
        ? (parseInt(html[`offset${axis}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`], 10))
        : 0);
}
export function getWindowSizes(document) {
    const body = document.body;
    const html = document.documentElement;
    const computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2luZG93U2l6ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFdpbmRvd1NpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUIsU0FBUyxPQUFPLENBQUMsSUFBWSxFQUFFLElBQWlCLEVBQUUsSUFBaUIsRUFBRSxhQUFrQztJQUNyRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQ1osSUFBWSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFDN0IsSUFBWSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFDN0IsSUFBWSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFDN0IsSUFBWSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFDN0IsSUFBWSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFZLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqRixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDLENBQ0osQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWE7SUFDMUMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3RDLE1BQU0sYUFBYSxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5RCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUM7UUFDcEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUM7S0FDbkQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzOiBzdHJpbmcsIGJvZHk6IEhUTUxFbGVtZW50LCBodG1sOiBIVE1MRWxlbWVudCwgY29tcHV0ZWRTdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICByZXR1cm4gTWF0aC5tYXgoXG4gICAgKGJvZHkgYXMgYW55KVtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIChib2R5IGFzIGFueSlbYHNjcm9sbCR7YXhpc31gXSxcbiAgICAoaHRtbCBhcyBhbnkpW2BjbGllbnQke2F4aXN9YF0sXG4gICAgKGh0bWwgYXMgYW55KVtgb2Zmc2V0JHtheGlzfWBdLFxuICAgIChodG1sIGFzIGFueSlbYHNjcm9sbCR7YXhpc31gXSxcbiAgICBpc0lFKDEwKVxuICAgICAgPyAocGFyc2VJbnQoKGh0bWwgYXMgYW55KVtgb2Zmc2V0JHtheGlzfWBdLCAxMCkgK1xuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnfWAgYXMgYW55XSwgMTApICtcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCd9YCBhcyBhbnldLCAxMCkpXG4gICAgOiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudDogYW55KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlOiBhbnkgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICB9O1xufVxuIl19