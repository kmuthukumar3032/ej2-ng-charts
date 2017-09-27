import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, ContentChild, Optional } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { Chart, LineSeries, ScatterSeries, ColumnSeries, SplineSeries, AreaSeries, StepLineSeries, StepAreaSeries, StackingColumnSeries, StackingAreaSeries, BarSeries, StackingBarSeries, RangeColumnSeries, BubbleSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Marker, Legend, Zoom, DataLabel, Selection, ChartAnnotation } from '@syncfusion/ej2-charts';

import { SeriesCollectionDirective } from './series.directive';
import { AxesDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { AnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['annotations','axes','background','border','chartArea','columns','crosshair','description','enablePersistence','enableRtl','height','isMultiSelect','legendSettings','locale','margin','palettes','primaryXAxis','primaryYAxis','rows','selectedDataIndexes','selectionMode','series','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','dragComplete','legendRender','load','loaded','pointRender','seriesRender','textRender','tooltipRender','zoomComplete'];
export const twoWays: string[] = [''];

/**
 * Chart Component
 * ```html
 * <ej-chart></ej-chart>
 * ```
 */
@Component({
    selector: 'ej-chart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(SeriesCollectionDirective), 
        childAxes: new ContentChild(AxesDirective), 
        childRows: new ContentChild(RowsDirective), 
        childColumns: new ContentChild(ColumnsDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective)
    }
})
export class ChartComponent extends Chart implements IComponentBase {
    public childSeries: any;
    public childAxes: any;
    public childRows: any;
    public childColumns: any;
    public childAnnotations: any;
    public tags: string[] = ['series', 'axes', 'rows', 'columns', 'annotations'];


    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef, @Optional() lineSeries: LineSeries, @Optional() scatterSeries: ScatterSeries, @Optional() columnSeries: ColumnSeries, @Optional() splineSeries: SplineSeries, @Optional() areaSeries: AreaSeries, @Optional() stepLineSeries: StepLineSeries, @Optional() stepAreaSeries: StepAreaSeries, @Optional() stackingColumnSeries: StackingColumnSeries, @Optional() stackingAreaSeries: StackingAreaSeries, @Optional() barSeries: BarSeries, @Optional() stackingBarSeries: StackingBarSeries, @Optional() rangeColumnSeries: RangeColumnSeries, @Optional() bubbleSeries: BubbleSeries, @Optional() tooltip: Tooltip, @Optional() crosshair: Crosshair, @Optional() category: Category, @Optional() dateTime: DateTime, @Optional() logarithmic: Logarithmic, @Optional() marker: Marker, @Optional() legend: Legend, @Optional() zoom: Zoom, @Optional() dataLabel: DataLabel, @Optional() selection: Selection, @Optional() chartAnnotation: ChartAnnotation) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        for (let i: number = 2; i < arguments.length; i++) {
            let injectedObj: Object = arguments[i];
            if (injectedObj) {
                this.injectedModules.push(<Function>injectedObj);
            }
        }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

applyMixins(ChartComponent, [ComponentBase]);

export const LineSeriesService: ValueProvider = { provide: LineSeries, useValue: LineSeries};
export const ScatterSeriesService: ValueProvider = { provide: ScatterSeries, useValue: ScatterSeries};
export const ColumnSeriesService: ValueProvider = { provide: ColumnSeries, useValue: ColumnSeries};
export const SplineSeriesService: ValueProvider = { provide: SplineSeries, useValue: SplineSeries};
export const AreaSeriesService: ValueProvider = { provide: AreaSeries, useValue: AreaSeries};
export const StepLineSeriesService: ValueProvider = { provide: StepLineSeries, useValue: StepLineSeries};
export const StepAreaSeriesService: ValueProvider = { provide: StepAreaSeries, useValue: StepAreaSeries};
export const StackingColumnSeriesService: ValueProvider = { provide: StackingColumnSeries, useValue: StackingColumnSeries};
export const StackingAreaSeriesService: ValueProvider = { provide: StackingAreaSeries, useValue: StackingAreaSeries};
export const BarSeriesService: ValueProvider = { provide: BarSeries, useValue: BarSeries};
export const StackingBarSeriesService: ValueProvider = { provide: StackingBarSeries, useValue: StackingBarSeries};
export const RangeColumnSeriesService: ValueProvider = { provide: RangeColumnSeries, useValue: RangeColumnSeries};
export const BubbleSeriesService: ValueProvider = { provide: BubbleSeries, useValue: BubbleSeries};
export const TooltipService: ValueProvider = { provide: Tooltip, useValue: Tooltip};
export const CrosshairService: ValueProvider = { provide: Crosshair, useValue: Crosshair};
export const CategoryService: ValueProvider = { provide: Category, useValue: Category};
export const DateTimeService: ValueProvider = { provide: DateTime, useValue: DateTime};
export const LogarithmicService: ValueProvider = { provide: Logarithmic, useValue: Logarithmic};
export const MarkerService: ValueProvider = { provide: Marker, useValue: Marker};
export const LegendService: ValueProvider = { provide: Legend, useValue: Legend};
export const ZoomService: ValueProvider = { provide: Zoom, useValue: Zoom};
export const DataLabelService: ValueProvider = { provide: DataLabel, useValue: DataLabel};
export const SelectionService: ValueProvider = { provide: Selection, useValue: Selection};
export const ChartAnnotationService: ValueProvider = { provide: ChartAnnotation, useValue: ChartAnnotation};

