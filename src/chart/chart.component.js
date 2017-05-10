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
import { Component, ElementRef, ChangeDetectionStrategy, ContentChild, Optional } from '@angular/core';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-ng-base';
import { Chart, LineSeries, ScatterSeries, ColumnSeries, SplineSeries, AreaSeries, StepLineSeries, StackingColumnSeries, StackingAreaSeries, BarSeries, StackingBarSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Marker, Legend, Zoom, DataLabel, Selection } from '@syncfusion/ej2-charts';
import { SeriessDirective } from './series.directive';
import { AxissDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
export var inputs = ['axes', 'background', 'border', 'chartArea', 'columns', 'crosshair', 'description', 'enablePersistence', 'enableRtl', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'];
export var outputs = ['animationComplete', 'axisLabelRender', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'dragComplete', 'legendRender', 'load', 'loaded', 'pointRender', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
export var twoWays = [''];
/**
 * Chart Component
 * ```html
 * <ej-chart></ej-chart>
 * ```
 */
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
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
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
}(Chart));
export { ChartComponent };
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ej-chart',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSeries: new ContentChild(SeriessDirective),
                    childAxes: new ContentChild(AxissDirective),
                    childRows: new ContentChild(RowsDirective),
                    childColumns: new ContentChild(ColumnsDirective)
                }
            },] },
];
/** @nocollapse */
ChartComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: LineSeries, decorators: [{ type: Optional },] },
    { type: ScatterSeries, decorators: [{ type: Optional },] },
    { type: ColumnSeries, decorators: [{ type: Optional },] },
    { type: SplineSeries, decorators: [{ type: Optional },] },
    { type: AreaSeries, decorators: [{ type: Optional },] },
    { type: StepLineSeries, decorators: [{ type: Optional },] },
    { type: StackingColumnSeries, decorators: [{ type: Optional },] },
    { type: StackingAreaSeries, decorators: [{ type: Optional },] },
    { type: BarSeries, decorators: [{ type: Optional },] },
    { type: StackingBarSeries, decorators: [{ type: Optional },] },
    { type: Tooltip, decorators: [{ type: Optional },] },
    { type: Crosshair, decorators: [{ type: Optional },] },
    { type: Category, decorators: [{ type: Optional },] },
    { type: DateTime, decorators: [{ type: Optional },] },
    { type: Logarithmic, decorators: [{ type: Optional },] },
    { type: Marker, decorators: [{ type: Optional },] },
    { type: Legend, decorators: [{ type: Optional },] },
    { type: Zoom, decorators: [{ type: Optional },] },
    { type: DataLabel, decorators: [{ type: Optional },] },
    { type: Selection, decorators: [{ type: Optional },] },
]; };
applyMixins(ChartComponent, [ComponentBase]);
export var LineSeriesService = { provide: LineSeries, useValue: LineSeries };
export var ScatterSeriesService = { provide: ScatterSeries, useValue: ScatterSeries };
export var ColumnSeriesService = { provide: ColumnSeries, useValue: ColumnSeries };
export var SplineSeriesService = { provide: SplineSeries, useValue: SplineSeries };
export var AreaSeriesService = { provide: AreaSeries, useValue: AreaSeries };
export var StepLineSeriesService = { provide: StepLineSeries, useValue: StepLineSeries };
export var StackingColumnSeriesService = { provide: StackingColumnSeries, useValue: StackingColumnSeries };
export var StackingAreaSeriesService = { provide: StackingAreaSeries, useValue: StackingAreaSeries };
export var BarSeriesService = { provide: BarSeries, useValue: BarSeries };
export var StackingBarSeriesService = { provide: StackingBarSeries, useValue: StackingBarSeries };
export var TooltipService = { provide: Tooltip, useValue: Tooltip };
export var CrosshairService = { provide: Crosshair, useValue: Crosshair };
export var CategoryService = { provide: Category, useValue: Category };
export var DateTimeService = { provide: DateTime, useValue: DateTime };
export var LogarithmicService = { provide: Logarithmic, useValue: Logarithmic };
export var MarkerService = { provide: Marker, useValue: Marker };
export var LegendService = { provide: Legend, useValue: Legend };
export var ZoomService = { provide: Zoom, useValue: Zoom };
export var DataLabelService = { provide: DataLabel, useValue: DataLabel };
export var SelectionService = { provide: Selection, useValue: Selection };
//# sourceMappingURL=chart.component.js.map