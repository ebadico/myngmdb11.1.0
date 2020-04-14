import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
var CardRotatingComponent = /** @class */ (function () {
    function CardRotatingComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.rotate = false;
        this.ANIMATION_TRANSITION_TIME = 1000;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
    }
    CardRotatingComponent.prototype.toggle = function () {
        var _this = this;
        this.rotate = !this.rotate;
        this.animationStart.emit();
        setTimeout(function () {
            _this.animationEnd.emit();
        }, this.ANIMATION_TRANSITION_TIME);
        this._cdRef.markForCheck();
    };
    CardRotatingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CardRotatingComponent.prototype, "animationStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CardRotatingComponent.prototype, "animationEnd", void 0);
    CardRotatingComponent = __decorate([
        Component({
            selector: 'mdb-card-rotating, mdb-flipping-card',
            template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{ rotate: rotate }\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["@charset \"UTF-8\";.card.promoting-card .fa{transition:.4s}.card.promoting-card .fa[class*=fa-]:hover{transition:.4s;cursor:pointer}.card.weather-card .collapse-content a.collapsed:after{content:\"Expand\"}.card.weather-card .collapse-content a:not(.collapsed):after{content:\"Collapse\"}.card.weather-card .degree:after{content:\"\u00B0C\";position:absolute;font-size:3rem;margin-top:.9rem;font-weight:400}.card.gradient-card{transition:.5s ease-in-out}.card.gradient-card .first-content .card-title{font-weight:500}.card.gradient-card .second-content,.card.gradient-card .third-content{display:none}.card.gradient-card .card-body{transition:.5s ease-in-out;opacity:0;visibility:hidden;overflow:hidden;height:0;padding-bottom:0;padding-top:0}.card.gradient-card .card-image,.card.gradient-card .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:focus-within .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:focus-within .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:focus-within .card-body .progress{height:.4rem}.card.gradient-card:focus-within .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:focus-within .first-content{display:none}.card.gradient-card:focus-within .second-content{display:block}.card.gradient-card:focus-within .third-content{display:block;margin-top:-6rem}@media (max-device-width:1025px){.card.gradient-card:hover{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:hover .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:hover .card-image .mask{border-radius:.25rem}.card.gradient-card:hover .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:hover .card-body .progress,.card.gradient-card:hover .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:hover .first-content{display:none}.card.gradient-card:hover .second-content{display:block}.card.gradient-card:hover .third-content{display:block;margin-top:-6rem}}.card.booking-card .rating{font-size:.7rem}.card.chart-card .classic-tabs .nav li a.active{border-bottom:2px solid;transition:width .5s,background-color .5s}.card.chart-card .classic-tabs .nav.tabs-white li a{color:#757575;font-weight:500}.card.chart-card .classic-tabs .nav.tabs-white li a.active{color:#673ab7}.card.chart-card .btn-deep-purple-accent{background-color:#b388ff;margin-top:-65px}.card.chart-card .btn-deep-purple-accent i{color:#000!important}.card.chart-card .btn-teal-accent{background-color:#1de9b6;margin-top:-65px}.card.chart-card .btn-teal-accent i{color:#000!important}.card.colorful-card .indigo-accent-text{color:#304ffe}.card.colorful-card .btn-indigo-accent{background-color:#304ffe}.card.colorful-card .yellow-darken-text{color:#fdd835}.card.colorful-card .testimonial-card .avatar{width:55px;margin-top:-30px;border:3px solid #fff}.card.colorful-card .testimonial-card .avatar img{width:50px;height:50px}.card.colorful-card .brown-darken-text{color:#3e2723}.card.colorful-card .btn-red-lighten{background-color:#ffcdd2}.card-wrapper.card-action{min-height:640px}@media (max-width:450px){.card-wrapper.card-action{min-height:790px}}.card-form .md-form input[type=email]:focus:not([readonly]),.card-form .md-form input[type=password]:focus:not([readonly]),.card-form .md-form input[type=text]:focus:not([readonly]){box-shadow:0 1px 0 0 #fff;border-bottom:1px solid #fff}.card-form .card-form-2{border-top-left-radius:21px;border-top-right-radius:21px;margin-top:-35px}.card-form .card-form-2 .form-check-input[type=checkbox].filled-in:checked+label:after,.card-form .card-form-2 label.btn input[type=checkbox].filled-in:checked+label:after{background-color:#e53935;border:2px solid #e53935}.card-form .card-form-2 .btn-outline-red-accent{border:2px solid #e53935;background-color:transparent;color:#e53935}.card-form .card-form-2 .pink-accent-text{color:#c51162}.z-depth-1-bottom{box-shadow:0 5px 5px -2px rgba(0,0,0,.16)}.card-wrapper{height:500px;position:relative;perspective:800px}.card-wrapper .face{position:absolute;width:100%;height:100%;background-color:#fff}.card-wrapper .face h4{margin-bottom:15px}.card-wrapper .face h5{margin-top:30px}.card-wrapper .face .content{text-align:left;padding:15px}.card-wrapper .face .content p{margin-bottom:30px}.card-wrapper .face .content .rotate-btn{padding:1rem;margin-right:-8px;float:right;font-size:1.2rem;color:#000}.card-wrapper .card-up{overflow:hidden;height:50%}.card-wrapper .card-up img{min-width:400px;width:100%}.card-wrapper .avatar{border-radius:50%;display:block;height:120px;margin:-65px auto 0;overflow:hidden;width:120px}.card-wrapper .avatar img{border:5px solid #fff;background:#fff;width:100%}.card-wrapper .card-rotating{text-align:center;position:absolute;width:100%;height:100%;transform-style:preserve-3d}.card-wrapper .card-rotating .content{position:relative}.card-wrapper .card-rotating .content .rotate-btn{position:absolute;right:8px;top:0}.card-wrapper .fa-repeat,.card-wrapper .fa-undo{font-size:20px;margin-top:30px}.card-wrapper .fa-undo{margin-top:30px}.card-wrapper .back,.card-wrapper .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform 1s;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card-wrapper .fron{z-index:2;cursor:auto}.card-wrapper .back{transform:rotateY(-180deg);padding:1rem}.card-wrapper .back .card-title{cursor:pointer}.card-wrapper .back .card-title i{color:#9e9e9e;position:absolute;right:20px}.card-wrapper .card-rotating.effect__click.flipped .front{transform:rotateY(180deg)}.card-wrapper .card-rotating.effect__click.flipped .back{transform:rotateY(0)}.embed-responsive-item{background:#000}.tp-box{position:relative;transform-style:preserve-3d;transition:transform 1s}.tp-box .tp-box_side{width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;text-align:center}.tp-box .tp-box_back{transform:rotateY(179.9deg)}.flip-container{perspective:1000px;transform-style:preserve-3d}.flip-container .flipper{transition:1s;transform-style:preserve-3d;position:relative}.flip-container .front{z-index:2;transform:rotateY(0)}.flip-container .back{transform:rotateY(-180deg)}.flip-container .back,.flip-container .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:1s;transform-style:preserve-3d;position:absolute;top:0;left:0}.flip-container.rotate .back{transform:rotateY(0);background-color:#fff}.flip-container.rotate .front{transform:rotateY(180deg)}.card-overflow{overflow:hidden;height:100%;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], CardRotatingComponent);
    return CardRotatingComponent;
}());
export { CardRotatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yb3RhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2FuaW1hdGVkLWNhcmRzL2NhcmQtcm90YXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFNRSwrQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFMdEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN0Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDdkIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM1RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXBCLENBQUM7SUFFakQsc0NBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQVgyQixpQkFBaUI7O0lBSG5DO1FBQVQsTUFBTSxFQUFFO2tDQUFpQixZQUFZO2lFQUFnQztJQUM1RDtRQUFULE1BQU0sRUFBRTtrQ0FBZSxZQUFZOytEQUFnQztJQUp6RCxxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNDQUFzQztZQUNoRCx5TUFBMkM7WUFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBTzRCLGlCQUFpQjtPQU5sQyxxQkFBcUIsQ0FrQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcmQtcm90YXRpbmcsIG1kYi1mbGlwcGluZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLXJvdGF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYW5pbWF0ZWQtY2FyZHMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRSb3RhdGluZ0NvbXBvbmVudCB7XG4gIHB1YmxpYyByb3RhdGUgPSBmYWxzZTtcbiAgQU5JTUFUSU9OX1RSQU5TSVRJT05fVElNRSA9IDEwMDA7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMucm90YXRlID0gIXRoaXMucm90YXRlO1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZC5lbWl0KCk7XG4gICAgfSwgdGhpcy5BTklNQVRJT05fVFJBTlNJVElPTl9USU1FKTtcblxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=