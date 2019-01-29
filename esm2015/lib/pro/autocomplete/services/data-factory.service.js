/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
/**
 * @return {?}
 */
export function localDataFactory() {
    return () => {
        return new LocalData();
    };
}
/**
 * @param {?} http
 * @return {?}
 */
export function remoteDataFactory(http) {
    return () => {
        return new RemoteData(http);
    };
}
/** @type {?} */
export let LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
/** @type {?} */
export let RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [HttpClient] };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9kYXRhLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHbkQsTUFBTSxVQUFVLGdCQUFnQjtJQUM5QixPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFnQjtJQUNoRCxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQUssd0JBQXdCLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRTs7QUFDMUYsTUFBTSxLQUFLLHlCQUF5QixHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBMb2NhbERhdGEgfSBmcm9tICcuL2xvY2FsLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBSZW1vdGVEYXRhIH0gZnJvbSAnLi9yZW1vdGUtZGF0YS5zZXJ2aWNlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxEYXRhRmFjdG9yeSgpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YSgpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3RlRGF0YUZhY3RvcnkoaHR0cDogSHR0cENsaWVudCkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUmVtb3RlRGF0YShodHRwKTtcbiAgfTtcbn1cblxuZXhwb3J0IGxldCBMb2NhbERhdGFGYWN0b3J5UHJvdmlkZXIgPSB7IHByb3ZpZGU6IExvY2FsRGF0YSwgdXNlRmFjdG9yeTogbG9jYWxEYXRhRmFjdG9yeSB9O1xuZXhwb3J0IGxldCBSZW1vdGVEYXRhRmFjdG9yeVByb3ZpZGVyID0geyBwcm92aWRlOiBSZW1vdGVEYXRhLCB1c2VGYWN0b3J5OiByZW1vdGVEYXRhRmFjdG9yeSwgZGVwczogW0h0dHBDbGllbnRdIH07XG4iXX0=