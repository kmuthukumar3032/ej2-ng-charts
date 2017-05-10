var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@syncfusion/ej2-ng-base"], function (require, exports, core_1, ej2_ng_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var input = ['animation', 'border', 'dashArray', 'dataSource', 'enableTooltip', 'fill', 'legendShape', 'marker', 'name', 'opacity', 'query', 'selectionStyle', 'stackingGroup', 'type', 'visible', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
    var SeriesDirective = (function (_super) {
        __extends(SeriesDirective, _super);
        function SeriesDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SeriesDirective;
    }(ej2_ng_base_1.ComplexBase));
    SeriesDirective = __decorate([
        core_1.Directive({
            selector: 'e-series-collection>e-series',
            inputs: input,
            queries: {}
        })
    ], SeriesDirective);
    exports.SeriesDirective = SeriesDirective;
    var SeriessDirective = (function (_super) {
        __extends(SeriessDirective, _super);
        function SeriessDirective() {
            return _super.call(this, 'series') || this;
        }
        return SeriessDirective;
    }(ej2_ng_base_1.ArrayBase));
    SeriessDirective = __decorate([
        core_1.Directive({
            selector: 'ej-chart>e-series-collection',
            queries: {
                children: new core_1.ContentChildren(SeriesDirective)
            },
        }),
        __metadata("design:paramtypes", [])
    ], SeriessDirective);
    exports.SeriessDirective = SeriessDirective;
});
