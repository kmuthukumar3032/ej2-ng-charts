import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDirective, SeriessDirective } from './series.directive';
import { AxisDirective, AxissDirective } from './axes.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { ChartComponent, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, AreaSeriesService, StepLineSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, MarkerService, LegendService, ZoomService, DataLabelService, SelectionService } from './chart.component';

/**
 * NgModule definition for the Chart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        ChartComponent,
        SeriesDirective,
        SeriessDirective,
        AxisDirective,
        AxissDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective
    ],
    exports: [
        ChartComponent,
        SeriesDirective,
        SeriessDirective,
        AxisDirective,
        AxissDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective
    ]
})
export class ChartModule { }