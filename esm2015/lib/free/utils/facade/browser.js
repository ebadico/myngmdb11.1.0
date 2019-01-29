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
export var gc = win['gc'] ? () => win['gc']() : () => null;
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export const Event = win['Event'];
/** @type {?} */
export const MouseEvent = win['MouseEvent'];
/** @type {?} */
export const KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export const EventTarget = win['EventTarget'];
/** @type {?} */
export const History = win['History'];
/** @type {?} */
export const Location = win['Location'];
/** @type {?} */
export const EventListener = win['EventListener'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZSyxHQUFHLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBSSxtQkFBSyxFQUFFLEVBQUE7QUFFNUQsT0FBTyxFQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUMsQ0FBQzs7QUFDdkIsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFRLEVBQUUsQ0FBQyxJQUFJOztBQUMvRCxNQUFNLEtBQUssV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJOztBQUN2RSxNQUFNLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7O0FBQ2pDLE1BQU0sT0FBTyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzs7QUFDM0MsTUFBTSxPQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDOztBQUNqRCxNQUFNLE9BQU8sV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7O0FBQzdDLE1BQU0sT0FBTyxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7QUFDckMsTUFBTSxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDOztBQUN2QyxNQUFNLE9BQU8sYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbiB2YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IDxhbnk+e307XG5cbiBleHBvcnQge3dpbiBhcyB3aW5kb3d9O1xuIGV4cG9ydCB2YXIgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XG4gZXhwb3J0IHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbiBleHBvcnQgdmFyIGdjID0gd2luWydnYyddID8gKCkgPT4gd2luWydnYyddKCkgOiAoKTogYW55ID0+IG51bGw7XG4gZXhwb3J0IHZhciBwZXJmb3JtYW5jZSA9IHdpblsncGVyZm9ybWFuY2UnXSA/IHdpblsncGVyZm9ybWFuY2UnXSA6IG51bGw7XG4gZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luWydFdmVudCddO1xuIGV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luWydNb3VzZUV2ZW50J107XG4gZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW5bJ0tleWJvYXJkRXZlbnQnXTtcbiBleHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW5bJ0V2ZW50VGFyZ2V0J107XG4gZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW5bJ0hpc3RvcnknXTtcbiBleHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW5bJ0xvY2F0aW9uJ107XG4gZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW5bJ0V2ZW50TGlzdGVuZXInXTtcbiJdfQ==