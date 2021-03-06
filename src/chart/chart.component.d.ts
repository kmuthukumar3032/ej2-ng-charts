import { ElementRef, ViewContainerRef, ValueProvider } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-ng-base';
import { Chart, LineSeries, ScatterSeries, ColumnSeries, SplineSeries, SplineAreaSeries, StripLine, AreaSeries, StepLineSeries, StepAreaSeries, StackingColumnSeries, StackingAreaSeries, BarSeries, StackingBarSeries, RangeColumnSeries, BubbleSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Legend, Zoom, DataLabel, Selection, ChartAnnotation, HiloSeries, HiloOpenCloseSeries, WaterfallSeries, RangeAreaSeries, CandleSeries, PolarSeries, RadarSeries, SmaIndicator, TmaIndicator, EmaIndicator, AccumulationDistributionIndicator, MacdIndicator, AtrIndicator, RsiIndicator, MomentumIndicator, StochasticIndicator, BollingerBands, BoxAndWhiskerSeries, ErrorBar, Trendlines, DateTimeCategory, MultiColoredLineSeries, MultiColoredAreaSeries, MultiLevelLabel } from '@syncfusion/ej2-charts';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Chart Component
 * ```html
 * <ej-chart></ej-chart>
 * ```
 */
export declare class ChartComponent extends Chart implements IComponentBase {
    private ngEle;
    private viewContainerRef;
    childSeries: any;
    childAxes: any;
    childRows: any;
    childColumns: any;
    childAnnotations: any;
    childSelectedDataIndexes: any;
    childIndicators: any;
    tags: string[];
    constructor(ngEle: ElementRef, viewContainerRef: ViewContainerRef, lineSeries: LineSeries, scatterSeries: ScatterSeries, columnSeries: ColumnSeries, splineSeries: SplineSeries, splineAreaSeries: SplineAreaSeries, stripLine: StripLine, areaSeries: AreaSeries, stepLineSeries: StepLineSeries, stepAreaSeries: StepAreaSeries, stackingColumnSeries: StackingColumnSeries, stackingAreaSeries: StackingAreaSeries, barSeries: BarSeries, stackingBarSeries: StackingBarSeries, rangeColumnSeries: RangeColumnSeries, bubbleSeries: BubbleSeries, tooltip: Tooltip, crosshair: Crosshair, category: Category, dateTime: DateTime, logarithmic: Logarithmic, legend: Legend, zoom: Zoom, dataLabel: DataLabel, selection: Selection, chartAnnotation: ChartAnnotation, hiloSeries: HiloSeries, hiloOpenCloseSeries: HiloOpenCloseSeries, waterfallSeries: WaterfallSeries, rangeAreaSeries: RangeAreaSeries, candleSeries: CandleSeries, polarSeries: PolarSeries, radarSeries: RadarSeries, smaIndicator: SmaIndicator, tmaIndicator: TmaIndicator, emaIndicator: EmaIndicator, accumulationDistributionIndicator: AccumulationDistributionIndicator, macdIndicator: MacdIndicator, atrIndicator: AtrIndicator, rsiIndicator: RsiIndicator, momentumIndicator: MomentumIndicator, stochasticIndicator: StochasticIndicator, bollingerBands: BollingerBands, boxAndWhiskerSeries: BoxAndWhiskerSeries, errorBar: ErrorBar, trendlines: Trendlines, dateTimeCategory: DateTimeCategory, multiColoredLineSeries: MultiColoredLineSeries, multiColoredAreaSeries: MultiColoredAreaSeries, multiLevelLabel: MultiLevelLabel);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
export declare const LineSeriesService: ValueProvider;
export declare const ScatterSeriesService: ValueProvider;
export declare const ColumnSeriesService: ValueProvider;
export declare const SplineSeriesService: ValueProvider;
export declare const SplineAreaSeriesService: ValueProvider;
export declare const StripLineService: ValueProvider;
export declare const AreaSeriesService: ValueProvider;
export declare const StepLineSeriesService: ValueProvider;
export declare const StepAreaSeriesService: ValueProvider;
export declare const StackingColumnSeriesService: ValueProvider;
export declare const StackingAreaSeriesService: ValueProvider;
export declare const BarSeriesService: ValueProvider;
export declare const StackingBarSeriesService: ValueProvider;
export declare const RangeColumnSeriesService: ValueProvider;
export declare const BubbleSeriesService: ValueProvider;
export declare const TooltipService: ValueProvider;
export declare const CrosshairService: ValueProvider;
export declare const CategoryService: ValueProvider;
export declare const DateTimeService: ValueProvider;
export declare const LogarithmicService: ValueProvider;
export declare const LegendService: ValueProvider;
export declare const ZoomService: ValueProvider;
export declare const DataLabelService: ValueProvider;
export declare const SelectionService: ValueProvider;
export declare const ChartAnnotationService: ValueProvider;
export declare const HiloSeriesService: ValueProvider;
export declare const HiloOpenCloseSeriesService: ValueProvider;
export declare const WaterfallSeriesService: ValueProvider;
export declare const RangeAreaSeriesService: ValueProvider;
export declare const CandleSeriesService: ValueProvider;
export declare const PolarSeriesService: ValueProvider;
export declare const RadarSeriesService: ValueProvider;
export declare const SmaIndicatorService: ValueProvider;
export declare const TmaIndicatorService: ValueProvider;
export declare const EmaIndicatorService: ValueProvider;
export declare const AccumulationDistributionIndicatorService: ValueProvider;
export declare const MacdIndicatorService: ValueProvider;
export declare const AtrIndicatorService: ValueProvider;
export declare const RsiIndicatorService: ValueProvider;
export declare const MomentumIndicatorService: ValueProvider;
export declare const StochasticIndicatorService: ValueProvider;
export declare const BollingerBandsService: ValueProvider;
export declare const BoxAndWhiskerSeriesService: ValueProvider;
export declare const ErrorBarService: ValueProvider;
export declare const TrendlinesService: ValueProvider;
export declare const DateTimeCategoryService: ValueProvider;
export declare const MultiColoredLineSeriesService: ValueProvider;
export declare const MultiColoredAreaSeriesService: ValueProvider;
export declare const MultiLevelLabelService: ValueProvider;
