/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = typeof window !== 'undefined' && window || (/** @type {?} */ ({}));
export { win as window };
/** @type {?} */
export var document = win.document;
/** @type {?} */
export var location = win.location;
/** @type {?} */
export var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export var Event = win['Event'];
/** @type {?} */
export var MouseEvent = win['MouseEvent'];
/** @type {?} */
export var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export var EventTarget = win['EventTarget'];
/** @type {?} */
export var History = win['History'];
/** @type {?} */
export var Location = win['Location'];
/** @type {?} */
export var EventListener = win['EventListener'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZSyxHQUFHLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBSSxtQkFBSyxFQUFFLEVBQUE7QUFFNUQsT0FBTyxFQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUMsQ0FBQzs7QUFDdkIsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFDLGNBQVcsT0FBQSxJQUFJLEVBQUosQ0FBSTs7QUFDL0QsTUFBTSxLQUFLLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7QUFDdkUsTUFBTSxLQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDOztBQUNqQyxNQUFNLEtBQU8sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7O0FBQzNDLE1BQU0sS0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQzs7QUFDakQsTUFBTSxLQUFPLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDOztBQUM3QyxNQUFNLEtBQU8sT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7O0FBQ3JDLE1BQU0sS0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7QUFDdkMsTUFBTSxLQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyp0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG4gdmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCA8YW55Pnt9O1xuXG4gZXhwb3J0IHt3aW4gYXMgd2luZG93fTtcbiBleHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuIGV4cG9ydCB2YXIgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG4gZXhwb3J0IHZhciBnYyA9IHdpblsnZ2MnXSA/ICgpID0+IHdpblsnZ2MnXSgpIDogKCk6IGFueSA9PiBudWxsO1xuIGV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xuIGV4cG9ydCBjb25zdCBFdmVudCA9IHdpblsnRXZlbnQnXTtcbiBleHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpblsnTW91c2VFdmVudCddO1xuIGV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XG4gZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luWydFdmVudFRhcmdldCddO1xuIGV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luWydIaXN0b3J5J107XG4gZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xuIGV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luWydFdmVudExpc3RlbmVyJ107XG4iXX0=