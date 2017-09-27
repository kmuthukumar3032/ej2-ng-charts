import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDirective, SeriesCollectionDirective } from './series.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { ChartComponent, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, AreaSeriesService, StepLineSeriesService, StepAreaSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, RangeColumnSeriesService, BubbleSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, MarkerService, LegendService, ZoomService, DataLabelService, SelectionService, ChartAnnotationService } from './chart.component';
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
        StepAreaSeriesService,
        StackingColumnSeriesService,
        StackingAreaSeriesService,
        BarSeriesService,
        StackingBarSeriesService,
        RangeColumnSeriesService,
        BubbleSeriesService,
        TooltipService,
        CrosshairService,
        CategoryService,
        DateTimeService,
        LogarithmicService,
        MarkerService,
        LegendService,
        ZoomService,
        DataLabelService,
        SelectionService,
        ChartAnnotationService
    ]
})
export class ChartAllModule { }