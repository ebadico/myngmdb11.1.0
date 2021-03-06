/**
 * returns coumputed style of given element

 */
export function computedStyle(element, styleProp) {
    let el;
    el = typeof element === 'string' ? document.querySelector(element) : element;
    let value;
    const defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) {
        // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (letter) {
            return letter.toUpperCase();
        });
        value = el['currentStyle'][styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (val) {
                const oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = val || 0;
                val = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return val;
            })(value);
        }
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZWQuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9wcm8vc3RpY2t5LWNvbnRlbnQvY29tcHV0ZWQuc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUE2QixFQUFFLFNBQWlCO0lBQzVFLElBQUksRUFBTyxDQUFDO0lBQ1osRUFBRSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQWMsUUFBUSxDQUFDLGFBQWEsQ0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBRWxHLElBQUksS0FBVSxDQUFDO0lBQ2YsTUFBTSxXQUFXLEdBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUVwRSxvQkFBb0I7SUFDcEIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFO1FBQy9DLHlDQUF5QztRQUN6Qyx3Q0FBd0M7UUFDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9ELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzRTtTQUFNLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzdCLEtBQUs7UUFDTCxzQ0FBc0M7UUFDdEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVMsTUFBTTtZQUN0RCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsc0NBQXNDO1FBQ3RDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxVQUFTLEdBQVE7Z0JBQ3ZCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUMzQixTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN6QixHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiByZXR1cm5zIGNvdW1wdXRlZCBzdHlsZSBvZiBnaXZlbiBlbGVtZW50XG5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIHN0eWxlUHJvcDogc3RyaW5nKTogc3RyaW5nIHwgYW55IHtcbiAgbGV0IGVsOiBhbnk7XG4gIGVsID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoPHN0cmluZz5lbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgbGV0IHZhbHVlOiBhbnk7XG4gIGNvbnN0IGRlZmF1bHRWaWV3OiBhbnkgPSAoZWwub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkuZGVmYXVsdFZpZXc7XG5cbiAgLy8gVzNDIHN0YW5kYXJkIHdheTpcbiAgaWYgKGRlZmF1bHRWaWV3ICYmIGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAvLyBzYW5pdGl6ZSBwcm9wZXJ0eSBuYW1lIHRvIGNzcyBub3RhdGlvblxuICAgIC8vIChoeXBlbiBzZXBhcmF0ZWQgd29yZHMgZWcuIGZvbnQtU2l6ZSlcbiAgICBzdHlsZVByb3AgPSBzdHlsZVByb3AucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3ApO1xuICB9IGVsc2UgaWYgKGVsWydjdXJyZW50U3R5bGUnXSkge1xuICAgIC8vIElFXG4gICAgLy8gc2FuaXRpemUgcHJvcGVydHkgbmFtZSB0byBjYW1lbENhc2VcbiAgICBzdHlsZVByb3AgPSBzdHlsZVByb3AucmVwbGFjZSgvXFwtKFxcdykvZywgZnVuY3Rpb24obGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gICAgdmFsdWUgPSBlbFsnY3VycmVudFN0eWxlJ11bc3R5bGVQcm9wXTtcbiAgICAvLyBjb252ZXJ0IG90aGVyIHVuaXRzIHRvIHBpeGVscyBvbiBJRVxuICAgIGlmICgvXlxcZCsoZW18cHR8JXxleCk/JC9pLnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uKHZhbDogYW55KSB7XG4gICAgICAgIGNvbnN0IG9sZExlZnQgPSBlbC5zdHlsZS5sZWZ0LFxuICAgICAgICAgIG9sZFJzTGVmdCA9IGVsWydydW50aW1lU3R5bGUnXS5sZWZ0O1xuICAgICAgICBlbFsncnVudGltZVN0eWxlJ10ubGVmdCA9IGVsWydjdXJyZW50U3R5bGUnXS5sZWZ0O1xuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gdmFsIHx8IDA7XG4gICAgICAgIHZhbCA9IGVsLnN0eWxlWydwaXhlbExlZnQnXSArICdweCc7XG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBvbGRMZWZ0O1xuICAgICAgICBlbFsncnVudGltZVN0eWxlJ10ubGVmdCA9IG9sZFJzTGVmdDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0pKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=