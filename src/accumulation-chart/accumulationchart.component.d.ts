import { ElementRef, ViewContainerRef, ValueProvider } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-ng-base';
import { AccumulationChart, PieSeries, FunnelSeries, PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationSelection, AccumulationDataLabel, AccumulationAnnotation } from '@syncfusion/ej2-charts';
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * AccumulationChart Component
 * ```html
 * <ej-accumulationchart></ej-accumulationchart>
 * ```
 */
export declare class AccumulationChartComponent extends AccumulationChart implements IComponentBase {
    private ngEle;
    private viewContainerRef;
    childSeries: any;
    childAnnotations: any;
    tags: string[];
    constructor(ngEle: ElementRef, viewContainerRef: ViewContainerRef, pieSeries: PieSeries, funnelSeries: FunnelSeries, pyramidSeries: PyramidSeries, accumulationTooltip: AccumulationTooltip, accumulationLegend: AccumulationLegend, accumulationSelection: AccumulationSelection, accumulationDataLabel: AccumulationDataLabel, accumulationAnnotation: AccumulationAnnotation);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
}
export declare const PieSeriesService: ValueProvider;
export declare const FunnelSeriesService: ValueProvider;
export declare const PyramidSeriesService: ValueProvider;
export declare const AccumulationTooltipService: ValueProvider;
export declare const AccumulationLegendService: ValueProvider;
export declare const AccumulationSelectionService: ValueProvider;
export declare const AccumulationDataLabelService: ValueProvider;
export declare const AccumulationAnnotationService: ValueProvider;
