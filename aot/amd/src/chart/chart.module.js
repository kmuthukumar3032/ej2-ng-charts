var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./series.directive", "./axes.directive", "./rows.directive", "./columns.directive", "./chart.component"], function (require, exports, core_1, common_1, series_directive_1, axes_directive_1, rows_directive_1, columns_directive_1, chart_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartModule = (function () {
        function ChartModule() {
        }
        return ChartModule;
    }());
    ChartModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                chart_component_1.ChartComponent,
                series_directive_1.SeriesDirective,
                series_directive_1.SeriessDirective,
                axes_directive_1.AxisDirective,
                axes_directive_1.AxissDirective,
                rows_directive_1.RowDirective,
                rows_directive_1.RowsDirective,
                columns_directive_1.ColumnDirective,
                columns_directive_1.ColumnsDirective
            ],
            exports: [
                chart_component_1.ChartComponent,
                series_directive_1.SeriesDirective,
                series_directive_1.SeriessDirective,
                axes_directive_1.AxisDirective,
                axes_directive_1.AxissDirective,
                rows_directive_1.RowDirective,
                rows_directive_1.RowsDirective,
                columns_directive_1.ColumnDirective,
                columns_directive_1.ColumnsDirective
            ]
        })
    ], ChartModule);
    exports.ChartModule = ChartModule;
});
