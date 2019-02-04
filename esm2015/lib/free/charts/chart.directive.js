/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ElementRef, Input, Output, Directive } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class BaseChartDirective {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    constructor(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) && !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }
    /**
     * @param {?} ctx
     * @return {?}
     */
    getChartBuilder(ctx /*, data:Array<any>, options:any*/) {
        /** @type {?} */
        const datasets = this.getDatasets();
        /** @type {?} */
        const options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (event, active) => {
                if (active && active.length) {
                    this.chartHover.emit({ event, active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = (event, active) => {
                this.chartClick.emit({ event, active });
            };
        }
        /** @type {?} */
        const opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    }
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    updateChartData(newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((dataset, i) => {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getDatasets() {
        /** @type {?} */
        let datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map((data, index) => {
                    return { data, label: this.labels[index] || `Label ${index}` };
                });
            }
            else {
                datasets = [{ data: this.data, label: `Label 0` }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map((elm, index) => {
                /** @type {?} */
                const newElm = Object.assign({}, elm);
                if (this.colors && this.colors.length) {
                    Object.assign(newElm, this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error(`ng-charts configuration error,
      data or datasets field are required to render char ${this.chartType}`);
        }
        return datasets;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    }
}
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
BaseChartDirective.decorators = [
    { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
];
/** @nocollapse */
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
BaseChartDirective.propDecorators = {
    data: [{ type: Input }],
    datasets: [{ type: Input }],
    labels: [{ type: Input }],
    options: [{ type: Input }],
    chartType: [{ type: Input }],
    colors: [{ type: Input }],
    legend: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BaseChartDirective.defaultColors;
    /** @type {?} */
    BaseChartDirective.prototype.data;
    /** @type {?} */
    BaseChartDirective.prototype.datasets;
    /** @type {?} */
    BaseChartDirective.prototype.labels;
    /** @type {?} */
    BaseChartDirective.prototype.options;
    /** @type {?} */
    BaseChartDirective.prototype.chartType;
    /** @type {?} */
    BaseChartDirective.prototype.colors;
    /** @type {?} */
    BaseChartDirective.prototype.legend;
    /** @type {?} */
    BaseChartDirective.prototype.chartClick;
    /** @type {?} */
    BaseChartDirective.prototype.chartHover;
    /** @type {?} */
    BaseChartDirective.prototype.ctx;
    /** @type {?} */
    BaseChartDirective.prototype.chart;
    /** @type {?} */
    BaseChartDirective.prototype.cvs;
    /** @type {?} */
    BaseChartDirective.prototype.initFlag;
    /** @type {?} */
    BaseChartDirective.prototype.element;
    /** @type {?} */
    BaseChartDirective.prototype.isBrowser;
}
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color) => rgba(color, 1))
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map((color) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color) => rgba(color, 0.8)),
        hoverBorderColor: colors.map((color) => rgba(color, 1))
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    const colorsArr = new Array(count);
    for (let i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2hhcnRzL2NoYXJ0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUlMLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJcEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFvQzdCLFlBQW1CLE9BQW1CLEVBQXVCLFVBQWtCO1FBbEIvRCxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBUTtZQUM3QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO1NBQzNCLENBQUM7UUFHYyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtwRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxP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QUU7UUFDN0IsT0FBTyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFO1FBQ2pELE9BQU8sZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBRUQsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxlQUFlLEVBQUU7UUFDeEQsT0FBTyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4vY29sb3JzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBDaGFydCBmcm9tICdjaGFydC5qcyc7XG5kZWNsYXJlIHZhciBDaGFydDogYW55O1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnY2FudmFzW21kYkNoYXJ0XScsIGV4cG9ydEFzOiAnbWRiLWJhc2UtY2hhcnQnIH0pXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQ29sb3JzIHtcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29sb3JzOiBBcnJheTxudW1iZXJbXT4gPSBbXG4gICAgWzI1NSwgOTksIDEzMl0sXG4gICAgWzU0LCAxNjIsIDIzNV0sXG4gICAgWzI1NSwgMjA2LCA4Nl0sXG4gICAgWzIzMSwgMjMzLCAyMzddLFxuICAgIFs3NSwgMTkyLCAxOTJdLFxuICAgIFsxNTEsIDE4NywgMjA1XSxcbiAgICBbMjIwLCAyMjAsIDIyMF0sXG4gICAgWzI0NywgNzAsIDc0XSxcbiAgICBbNzAsIDE5MSwgMTg5XSxcbiAgICBbMjUzLCAxODAsIDkyXSxcbiAgICBbMTQ4LCAxNTksIDE3N10sXG4gICAgWzc3LCA4MywgOTZdXG4gIF07XG5cbiAgQElucHV0KCkgcHVibGljIGRhdGE6IG51bWJlcltdIHwgYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhc2V0czogYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfVxuICB9O1xuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBsZWdlbmQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjdHg6IGFueTtcbiAgcHVibGljIGNoYXJ0OiBhbnk7XG4gIGN2czogYW55O1xuICBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHRoaXMuY3ZzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEgfHwgdGhpcy5kYXRhc2V0cykge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hhbmdlcyBhcmUgaW4gdGhlIGRhdGEgb3IgZGF0YXNldHNcbiAgICAgIGlmICgoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RhdGFzZXRzJykpICYmICFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdsYWJlbHMnKSkge1xuICAgICAgICBpZiAoY2hhbmdlc1snZGF0YSddKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YSddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEoY2hhbmdlc1snZGF0YXNldHMnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSByZWJ1aWxkIHRoZSBjaGFydFxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFydEJ1aWxkZXIoY3R4OiBhbnkvKiwgZGF0YTpBcnJheTxhbnk+LCBvcHRpb25zOmFueSovKTogYW55IHtcbiAgICBjb25zdCBkYXRhc2V0czogYW55ID0gdGhpcy5nZXREYXRhc2V0cygpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5sZWdlbmQgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICB9XG4gICAgLy8gaG9jayBmb3Igb25Ib3ZlciBhbmQgb25DbGljayBldmVudHNcbiAgICBvcHRpb25zLmhvdmVyID0gb3B0aW9ucy5ob3ZlciB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaG92ZXIub25Ib3Zlcikge1xuICAgICAgb3B0aW9ucy5ob3Zlci5vbkhvdmVyID0gKGV2ZW50OiBhbnksIGFjdGl2ZTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlICYmIGFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLm9uQ2xpY2spIHtcbiAgICAgIG9wdGlvbnMub25DbGljayA9IChldmVudDogYW55LCBhY3RpdmU6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdHlwZTogdGhpcy5jaGFydFR5cGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0c1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBDaGFydChjdHgsIG9wdHMpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGFydERhdGEobmV3RGF0YVZhbHVlczogbnVtYmVyW10gfCBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0RhdGFWYWx1ZXNbMF0uZGF0YSkpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKChkYXRhc2V0OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBkYXRhc2V0LmRhdGEgPSBuZXdEYXRhVmFsdWVzW2ldLmRhdGE7XG5cbiAgICAgICAgaWYgKG5ld0RhdGFWYWx1ZXNbaV0ubGFiZWwpIHtcbiAgICAgICAgICBkYXRhc2V0LmxhYmVsID0gbmV3RGF0YVZhbHVlc1tpXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YVZhbHVlcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFzZXRzKCk6IGFueSB7XG4gICAgbGV0IGRhdGFzZXRzOiBhbnkgPSB2b2lkIDA7XG4gICAgLy8gaW4gY2FzZSBpZiBkYXRhc2V0cyBpcyBub3QgcHJvdmlkZWQsIGJ1dCBkYXRhIGlzIHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZGF0YXNldHMgfHwgIXRoaXMuZGF0YXNldHMubGVuZ3RoICYmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YVswXSkpIHtcbiAgICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhIGFzIEFycmF5PG51bWJlcltdPikubWFwKChkYXRhOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxhYmVsOiB0aGlzLmxhYmVsc1tpbmRleF0gfHwgYExhYmVsICR7aW5kZXh9YCB9O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXRzID0gW3sgZGF0YTogdGhpcy5kYXRhLCBsYWJlbDogYExhYmVsIDBgIH1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFzZXRzICYmIHRoaXMuZGF0YXNldHMubGVuZ3RoIHx8XG4gICAgICAoZGF0YXNldHMgJiYgZGF0YXNldHMubGVuZ3RoKSkge1xuICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhc2V0cyB8fCBkYXRhc2V0cylcbiAgICAgICAgLm1hcCgoZWxtOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdFbG06IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIGVsbSk7XG4gICAgICAgICAgaWYgKHRoaXMuY29sb3JzICYmIHRoaXMuY29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdFbG0sIHRoaXMuY29sb3JzW2luZGV4XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3RWxtLCBnZXRDb2xvcnModGhpcy5jaGFydFR5cGUsIGluZGV4LCBuZXdFbG0uZGF0YS5sZW5ndGgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld0VsbTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhc2V0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBuZy1jaGFydHMgY29uZmlndXJhdGlvbiBlcnJvcixcbiAgICAgIGRhdGEgb3IgZGF0YXNldHMgZmllbGQgYXJlIHJlcXVpcmVkIHRvIHJlbmRlciBjaGFyICR7dGhpcy5jaGFydFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKCk6IGFueSB7XG4gICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldENoYXJ0QnVpbGRlcih0aGlzLmN0eC8qLCBkYXRhLCB0aGlzLm9wdGlvbnMqLyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmdiYShjb2xvdXI6IEFycmF5PG51bWJlcj4sIGFscGhhOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gJ3JnYmEoJyArIGNvbG91ci5jb25jYXQoYWxwaGEpLmpvaW4oJywnKSArICcpJztcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMaW5lQ29sb3IoY29sb3JzOiBBcnJheTxudW1iZXI+KTogQ29sb3Ige1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuNCksXG4gICAgYm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMC44KVxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCYXJDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC42KSxcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC44KSxcbiAgICBob3ZlckJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGllQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC42KSksXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoKSA9PiAnI2ZmZicpLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UG9sYXJBcmVhQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogQ29sb3Ige1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAwLjYpKSxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC44KSksXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogbnVtYmVyW10ge1xuICByZXR1cm4gW2dldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KSwgZ2V0UmFuZG9tSW50KDAsIDI1NSldO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgbGluZXxiYXIgY2hhcnRzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3IoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgcmV0dXJuIEJhc2VDaGFydERpcmVjdGl2ZS5kZWZhdWx0Q29sb3JzW2luZGV4XSB8fCBnZXRSYW5kb21Db2xvcigpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgcGllfGRvdWdobnV0IGNoYXJ0c1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9ycyhjb3VudDogbnVtYmVyKTogQXJyYXk8bnVtYmVyW10+IHtcbiAgY29uc3QgY29sb3JzQXJyOiBBcnJheTxudW1iZXJbXT4gPSBuZXcgQXJyYXkoY291bnQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb2xvcnNBcnJbaV0gPSBCYXNlQ2hhcnREaXJlY3RpdmUuZGVmYXVsdENvbG9yc1tpXSB8fCBnZXRSYW5kb21Db2xvcigpO1xuICB9XG4gIHJldHVybiBjb2xvcnNBcnI7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGJ5IGNoYXJ0IHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q29sb3JzKGNoYXJ0VHlwZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogYW55IHtcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BpZScgfHwgY2hhcnRUeXBlID09PSAnZG91Z2hudXQnKSB7XG4gICAgcmV0dXJuIGZvcm1hdFBpZUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xuICB9XG5cbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BvbGFyQXJlYScpIHtcbiAgICByZXR1cm4gZm9ybWF0UG9sYXJBcmVhQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnbGluZScgfHwgY2hhcnRUeXBlID09PSAncmFkYXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdExpbmVDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnYmFyJyB8fCBjaGFydFR5cGUgPT09ICdob3Jpem9udGFsQmFyJykge1xuICAgIHJldHVybiBmb3JtYXRCYXJDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cbiAgcmV0dXJuIGdlbmVyYXRlQ29sb3IoaW5kZXgpO1xufVxuXG5cbiJdfQ==