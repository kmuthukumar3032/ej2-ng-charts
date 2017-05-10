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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/core", "@syncfusion/ej2-ng-base", "@syncfusion/ej2-charts", "./series.directive", "./axes.directive", "./rows.directive", "./columns.directive"], function (require, exports, core_1, ej2_ng_base_1, ej2_charts_1, series_directive_1, axes_directive_1, rows_directive_1, columns_directive_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inputs = ['axes', 'background', 'border', 'chartArea', 'columns', 'crosshair', 'description', 'enablePersistence', 'enableRtl', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
    exports.outputs = ['animationComplete', 'axisLabelRender', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'dragComplete', 'legendRender', 'load', 'loaded', 'pointRender', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
    exports.twoWays = [''];
    var ChartComponent = (function (_super) {
        __extends(ChartComponent, _super);
        function ChartComponent(ngEle, lineSeries, scatterSeries, columnSeries, splineSeries, areaSeries, stepLineSeries, stackingColumnSeries, stackingAreaSeries, barSeries, stackingBarSeries, tooltip, crosshair, category, dateTime, logarithmic, marker, legend, zoom, dataLabel, selection) {
            var _this = _super.call(this) || this;
            _this.ngEle = ngEle;
            _this.tags = ['series', 'axes', 'rows', 'columns'];
            _this.element = _this.ngEle.nativeElement;
            _this.injectedModules = _this.injectedModules || [];
            for (var i = 1; i < arguments.length; i++) {
                var injectedObj = arguments[i];
                if (injectedObj) {
                    _this.injectedModules.push(injectedObj);
                }
            }
            _this.registerEvents(exports.outputs);
            _this.addTwoWay.call(_this, exports.twoWays);
            return _this;
        }
        ChartComponent.prototype.ngOnInit = function () {
        };
        ChartComponent.prototype.ngAfterViewInit = function () {
        };
        ChartComponent.prototype.ngOnDestroy = function () {
        };
        ChartComponent.prototype.ngAfterContentChecked = function () {
        };
        return ChartComponent;
    }(ej2_charts_1.Chart));
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'ej-chart',
            inputs: exports.inputs,
            outputs: exports.outputs,
            template: '',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            queries: {
                childSeries: new core_1.ContentChild(series_directive_1.SeriessDirective),
                childAxes: new core_1.ContentChild(axes_directive_1.AxissDirective),
                childRows: new core_1.ContentChild(rows_directive_1.RowsDirective),
                childColumns: new core_1.ContentChild(columns_directive_1.ColumnsDirective)
            }
        }),
        __param(1, core_1.Optional()), __param(2, core_1.Optional()), __param(3, core_1.Optional()), __param(4, core_1.Optional()), __param(5, core_1.Optional()), __param(6, core_1.Optional()), __param(7, core_1.Optional()), __param(8, core_1.Optional()), __param(9, core_1.Optional()), __param(10, core_1.Optional()), __param(11, core_1.Optional()), __param(12, core_1.Optional()), __param(13, core_1.Optional()), __param(14, core_1.Optional()), __param(15, core_1.Optional()), __param(16, core_1.Optional()), __param(17, core_1.Optional()), __param(18, core_1.Optional()), __param(19, core_1.Optional()), __param(20, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, ej2_charts_1.LineSeries, ej2_charts_1.ScatterSeries, ej2_charts_1.ColumnSeries, ej2_charts_1.SplineSeries, ej2_charts_1.AreaSeries, ej2_charts_1.StepLineSeries, ej2_charts_1.StackingColumnSeries, ej2_charts_1.StackingAreaSeries, ej2_charts_1.BarSeries, ej2_charts_1.StackingBarSeries, ej2_charts_1.Tooltip, ej2_charts_1.Crosshair, ej2_charts_1.Category, ej2_charts_1.DateTime, ej2_charts_1.Logarithmic, ej2_charts_1.Marker, ej2_charts_1.Legend, ej2_charts_1.Zoom, ej2_charts_1.DataLabel, ej2_charts_1.Selection])
    ], ChartComponent);
    exports.ChartComponent = ChartComponent;
    ej2_ng_base_1.applyMixins(ChartComponent, [ej2_ng_base_1.ComponentBase]);
    exports.LineSeriesService = { provide: ej2_charts_1.LineSeries, useValue: ej2_charts_1.LineSeries };
    exports.ScatterSeriesService = { provide: ej2_charts_1.ScatterSeries, useValue: ej2_charts_1.ScatterSeries };
    exports.ColumnSeriesService = { provide: ej2_charts_1.ColumnSeries, useValue: ej2_charts_1.ColumnSeries };
    exports.SplineSeriesService = { provide: ej2_charts_1.SplineSeries, useValue: ej2_charts_1.SplineSeries };
    exports.AreaSeriesService = { provide: ej2_charts_1.AreaSeries, useValue: ej2_charts_1.AreaSeries };
    exports.StepLineSeriesService = { provide: ej2_charts_1.StepLineSeries, useValue: ej2_charts_1.StepLineSeries };
    exports.StackingColumnSeriesService = { provide: ej2_charts_1.StackingColumnSeries, useValue: ej2_charts_1.StackingColumnSeries };
    exports.StackingAreaSeriesService = { provide: ej2_charts_1.StackingAreaSeries, useValue: ej2_charts_1.StackingAreaSeries };
    exports.BarSeriesService = { provide: ej2_charts_1.BarSeries, useValue: ej2_charts_1.BarSeries };
    exports.StackingBarSeriesService = { provide: ej2_charts_1.StackingBarSeries, useValue: ej2_charts_1.StackingBarSeries };
    exports.TooltipService = { provide: ej2_charts_1.Tooltip, useValue: ej2_charts_1.Tooltip };
    exports.CrosshairService = { provide: ej2_charts_1.Crosshair, useValue: ej2_charts_1.Crosshair };
    exports.CategoryService = { provide: ej2_charts_1.Category, useValue: ej2_charts_1.Category };
    exports.DateTimeService = { provide: ej2_charts_1.DateTime, useValue: ej2_charts_1.DateTime };
    exports.LogarithmicService = { provide: ej2_charts_1.Logarithmic, useValue: ej2_charts_1.Logarithmic };
    exports.MarkerService = { provide: ej2_charts_1.Marker, useValue: ej2_charts_1.Marker };
    exports.LegendService = { provide: ej2_charts_1.Legend, useValue: ej2_charts_1.Legend };
    exports.ZoomService = { provide: ej2_charts_1.Zoom, useValue: ej2_charts_1.Zoom };
    exports.DataLabelService = { provide: ej2_charts_1.DataLabel, useValue: ej2_charts_1.DataLabel };
    exports.SelectionService = { provide: ej2_charts_1.Selection, useValue: ej2_charts_1.Selection };
});
