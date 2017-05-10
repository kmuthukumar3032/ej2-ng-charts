import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, AreaSeriesService, StepLineSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, MarkerService, LegendService, ZoomService, DataLabelService, SelectionService } from './chart.component';
import { ChartModule } from './chart.module';
/**
 * NgModule definition for the Chart component with providers.
 */
var ChartAllModule = (function () {
    function ChartAllModule() {
    }
    return ChartAllModule;
}());
export { ChartAllModule };
ChartAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ChartModule],
                exports: [
                    ChartModule
                ],
                providers: [
                    LineSeriesService,
                    ScatterSeriesService,
                    ColumnSeriesService,
                    SplineSeriesService,
                    AreaSeriesService,
                    StepLineSeriesService,
                    StackingColumnSeriesService,
                    StackingAreaSeriesService,
                    BarSeriesService,
                    StackingBarSeriesService,
                    TooltipService,
                    CrosshairService,
                    CategoryService,
                    DateTimeService,
                    LogarithmicService,
                    MarkerService,
                    LegendService,
                    ZoomService,
                    DataLabelService,
                    SelectionService
                ]
            },] },
];
/** @nocollapse */
ChartAllModule.ctorParameters = function () { return []; };
//# sourceMappingURL=chart-all.module.js.map