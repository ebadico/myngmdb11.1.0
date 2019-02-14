/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class LocaleService {
    constructor() {
        this.locales = {
            'en': {
                dayLabelsFull: { su: 'Sunday', mo: 'Monday', tu: 'Tuesday', we: 'Wednesday', th: 'Thursday', fr: 'Friday', sa: 'Saturday' },
                dayLabels: { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: false,
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getLocaleOptions(locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    }
}
LocaleService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    LocaleService.prototype.locales;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckxvY2FsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9kYXRlLXBpY2tlci9zZXJ2aWNlcy9kYXRlcGlja2VyTG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFUyxZQUFPLEdBQWU7WUFDM0IsSUFBSSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7Z0JBQzNILFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFGLGVBQWUsRUFBRTtvQkFDZixDQUFDLEVBQUUsU0FBUztvQkFDWixDQUFDLEVBQUUsVUFBVTtvQkFDYixDQUFDLEVBQUUsT0FBTztvQkFDVixDQUFDLEVBQUUsT0FBTztvQkFDVixDQUFDLEVBQUUsS0FBSztvQkFDUixDQUFDLEVBQUUsTUFBTTtvQkFDVCxDQUFDLEVBQUUsTUFBTTtvQkFDVCxDQUFDLEVBQUUsUUFBUTtvQkFDWCxDQUFDLEVBQUUsV0FBVztvQkFDZCxFQUFFLEVBQUUsU0FBUztvQkFDYixFQUFFLEVBQUUsVUFBVTtvQkFDZCxFQUFFLEVBQUUsVUFBVTtpQkFBRTtnQkFDbEIsV0FBVyxFQUFFO29CQUNYLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxLQUFLO29CQUNSLEVBQUUsRUFBRSxLQUFLO29CQUNULEVBQUUsRUFBRSxLQUFLO29CQUNULEVBQUUsRUFBRSxLQUFLO2lCQUFFO2dCQUNiLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsT0FBTztnQkFDcEIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7U0FDRixDQUFDO0lBVUosQ0FBQzs7Ozs7SUFSQyxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzdCLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELG9CQUFvQjtZQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7UUFDRCxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQWhERixVQUFVOzs7O0lBRVQsZ0NBcUNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTXlMb2NhbGVzLCBJTXlPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcclxuICBwdWJsaWMgbG9jYWxlczogSU15TG9jYWxlcyA9IHtcclxuICAgICdlbic6IHtcclxuICAgICAgZGF5TGFiZWxzRnVsbDogeyBzdTogJ1N1bmRheScsIG1vOiAnTW9uZGF5JywgdHU6ICdUdWVzZGF5Jywgd2U6ICdXZWRuZXNkYXknLCB0aDogJ1RodXJzZGF5JywgZnI6ICdGcmlkYXknLCBzYTogJ1NhdHVyZGF5JyB9LFxyXG4gICAgICBkYXlMYWJlbHM6IHsgc3U6ICdTdW4nLCBtbzogJ01vbicsIHR1OiAnVHVlJywgd2U6ICdXZWQnLCB0aDogJ1RodScsIGZyOiAnRnJpJywgc2E6ICdTYXQnIH0sXHJcbiAgICAgIG1vbnRoTGFiZWxzRnVsbDoge1xyXG4gICAgICAgIDE6ICdKYW51YXJ5JyxcclxuICAgICAgICAyOiAnRmVicnVhcnknLFxyXG4gICAgICAgIDM6ICdNYXJjaCcsXHJcbiAgICAgICAgNDogJ0FwcmlsJyxcclxuICAgICAgICA1OiAnTWF5JyxcclxuICAgICAgICA2OiAnSnVuZScsXHJcbiAgICAgICAgNzogJ0p1bHknLFxyXG4gICAgICAgIDg6ICdBdWd1c3QnLFxyXG4gICAgICAgIDk6ICdTZXB0ZW1iZXInLFxyXG4gICAgICAgIDEwOiAnT2N0b2JlcicsXHJcbiAgICAgICAgMTE6ICdOb3ZlbWJlcicsXHJcbiAgICAgICAgMTI6ICdEZWNlbWJlcicgfSxcclxuICAgICAgbW9udGhMYWJlbHM6IHtcclxuICAgICAgICAxOiAnSmFuJyxcclxuICAgICAgICAyOiAnRmViJyxcclxuICAgICAgICAzOiAnTWFyJyxcclxuICAgICAgICA0OiAnQXByJyxcclxuICAgICAgICA1OiAnTWF5JyxcclxuICAgICAgICA2OiAnSnVuJyxcclxuICAgICAgICA3OiAnSnVsJyxcclxuICAgICAgICA4OiAnQXVnJyxcclxuICAgICAgICA5OiAnU2VwJyxcclxuICAgICAgICAxMDogJ09jdCcsXHJcbiAgICAgICAgMTE6ICdOb3YnLFxyXG4gICAgICAgIDEyOiAnRGVjJyB9LFxyXG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgIHRvZGF5QnRuVHh0OiAnVG9kYXknLFxyXG4gICAgICBjbGVhckJ0blR4dDogJ0NsZWFyJyxcclxuICAgICAgY2xvc2VCdG5UeHQ6ICdDbG9zZScsXHJcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAnbW8nLFxyXG4gICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldExvY2FsZU9wdGlvbnMobG9jYWxlOiBzdHJpbmcpOiBJTXlPcHRpb25zIHtcclxuICAgIGlmIChsb2NhbGUgJiYgdGhpcy5sb2NhbGVzLmhhc093blByb3BlcnR5KGxvY2FsZSkpIHtcclxuICAgICAgLy8gVXNlciBnaXZlbiBsb2NhbGVcclxuICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tsb2NhbGVdO1xyXG4gICAgfVxyXG4gICAgLy8gRGVmYXVsdDogZW5cclxuICAgIHJldHVybiB0aGlzLmxvY2FsZXNbJ2VuJ107XHJcbiAgfVxyXG59XHJcbiJdfQ==