/**
 * Determines if the browser is Internet Explorer
 */
import { isBrowser } from './isBrowser';
const isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
const isIE10 = isBrowser && !!(window.MSInputMethodContext && /MSIE 10/.test(navigator.userAgent));
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJRS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpa2l0LXByby1zdGFuZGFyZC9zcmMvbGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvaXNJRS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFFLE1BQWMsQ0FBQyxvQkFBb0IsSUFBSyxRQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZHLE1BQU0sTUFBTSxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBRSxNQUFjLENBQUMsb0JBQW9CLElBQUksU0FBUyxDQUFDLElBQUksQ0FBRSxTQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFFckgsTUFBTSxVQUFVLElBQUksQ0FBQyxPQUFnQjtJQUNuQyxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqL1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi9pc0Jyb3dzZXInO1xuXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIChkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSk7XG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIC9NU0lFIDEwLy50ZXN0KChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnQpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbj86IG51bWJlcikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cblxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cbiJdfQ==