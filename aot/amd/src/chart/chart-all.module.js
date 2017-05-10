var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./chart.component", "./chart.module"], function (require, exports, core_1, common_1, chart_component_1, chart_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartAllModule = (function () {
        function ChartAllModule() {
        }
        return ChartAllModule;
    }());
    ChartAllModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, chart_module_1.ChartModule],
            exports: [
                chart_module_1.ChartModule
            ],
            providers: [
                chart_component_1.LineSeriesService,
                chart_component_1.ScatterSeriesService,
                chart_component_1.ColumnSeriesService,
                chart_component_1.SplineSeriesService,
                chart_component_1.AreaSeriesService,
                chart_component_1.StepLineSeriesService,
                chart_component_1.StackingColumnSeriesService,
                chart_component_1.StackingAreaSeriesService,
                chart_component_1.BarSeriesService,
                chart_component_1.StackingBarSeriesService,
                chart_component_1.TooltipService,
                chart_component_1.CrosshairService,
                chart_component_1.CategoryService,
                chart_component_1.DateTimeService,
                chart_component_1.LogarithmicService,
                chart_component_1.MarkerService,
                chart_component_1.LegendService,
                chart_component_1.ZoomService,
                chart_component_1.DataLabelService,
                chart_component_1.SelectionService
            ]
        })
    ], ChartAllModule);
    exports.ChartAllModule = ChartAllModule;
});
