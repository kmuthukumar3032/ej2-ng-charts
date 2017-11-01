import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendlineDirective, TrendlinesDirective } from './trendlines.directive';
import { SeriesDirective, SeriesCollectionDirective } from './series.directive';
import { StripLineDirective, StripLinesDirective } from './striplines.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { IndicatorDirective, IndicatorsDirective } from './indicators.directive';
import { ChartComponent, LineSeriesService, ScatterSeriesService, ColumnSeriesService, SplineSeriesService, StripLineService, AreaSeriesService, StepLineSeriesService, StepAreaSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, BarSeriesService, StackingBarSeriesService, RangeColumnSeriesService, BubbleSeriesService, TooltipService, CrosshairService, CategoryService, DateTimeService, LogarithmicService, MarkerService, LegendService, ZoomService, DataLabelService, SelectionService, ChartAnnotationService, HiloSeriesService, HiloOpenCloseSeriesService, WaterfallSeriesService, RangeAreaSeriesService, CandleSeriesService, PolarSeriesService, RadarSeriesService, SmaIndicatorService, TmaIndicatorService, EmaIndicatorService, AccumulationDistributionIndicatorService, MacdIndicatorService, AtrIndicatorService, RsiIndicatorService, MomentumIndicatorService, StochasticIndicatorService, BollingerBandsService, BoxAndWhiskerSeriesService, ErrorBarService, TrendLinesService } from './chart.component';
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
        StripLineService,
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
        ChartAnnotationService,
        HiloSeriesService,
        HiloOpenCloseSeriesService,
        WaterfallSeriesService,
        RangeAreaSeriesService,
        CandleSeriesService,
        PolarSeriesService,
        RadarSeriesService,
        SmaIndicatorService,
        TmaIndicatorService,
        EmaIndicatorService,
        AccumulationDistributionIndicatorService,
        MacdIndicatorService,
        AtrIndicatorService,
        RsiIndicatorService,
        MomentumIndicatorService,
        StochasticIndicatorService,
        BollingerBandsService,
        BoxAndWhiskerSeriesService,
        ErrorBarService,
        TrendLinesService
    ]
})
export class ChartAllModule { }