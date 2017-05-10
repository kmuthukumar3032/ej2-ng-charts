import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDirective, SeriessDirective } from './series.directive';
import { AxisDirective, AxissDirective } from './axes.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { ChartComponent, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, AreaSeriesService, StepLineSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, MarkerService, LegendService, ZoomService, DataLabelService, SelectionService } from './chart.component';
import { ChartModule } from './chart.module';

/**
 * NgModule definition for the Chart component with providers.
 */
@NgModule({
    imports: [CommonModule, ChartModule],
    exports: [
        ChartModule
    ],
    providers:[
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
})
export class ChartAllModule { }