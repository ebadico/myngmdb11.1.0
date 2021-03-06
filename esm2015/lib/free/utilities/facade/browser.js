/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
const win = (typeof window !== 'undefined' && window) || {};
export { win as window };
export const document = win.document;
export const location = win.location;
export const gc = win.gc ? () => win.gc() : () => null;
export const performance = win.performance ? win.performance : null;
export const Event = win.Event;
export const MouseEvent = win.MouseEvent;
export const KeyboardEvent = win.KeyboardEvent;
export const EventTarget = win.EventTarget;
export const History = win.History;
export const Location = win.Location;
export const EventListener = win.EventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpa2l0LXByby1zdGFuZGFyZC9zcmMvbGliL2ZyZWUvdXRpbGl0aWVzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOztHQUVHO0FBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksRUFBUyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDekIsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBUSxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQzVELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEUsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDbkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbmNvbnN0IHdpbiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8IHt9IGFzIGFueTtcblxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IGdjID0gd2luLmdjID8gKCkgPT4gd2luLmdjKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgY29uc3QgcGVyZm9ybWFuY2UgPSB3aW4ucGVyZm9ybWFuY2UgPyB3aW4ucGVyZm9ybWFuY2UgOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luLkV2ZW50O1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW4uTW91c2VFdmVudDtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luLktleWJvYXJkRXZlbnQ7XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW4uRXZlbnRUYXJnZXQ7XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpbi5IaXN0b3J5O1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luLkxvY2F0aW9uO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW4uRXZlbnRMaXN0ZW5lcjtcbiJdfQ==