import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, ValueProvider, ContentChild, Optional } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-ng-base';
import { AccumulationChart, PieSeries, AccumulationTooltip, AccumulationLegend, AccumulationSelection, AccumulationDataLabel } from '@syncfusion/ej2-charts';

import { AccumulationSeriesCollectionDirective } from './series.directive';

export const inputs: string[] = ['background','border','enablePersistence','enableRtl','enableSmartLabels','height','isMultiSelect','legendSettings','locale','margin','selectedDataIndexes','selectionMode','series','theme','title','titleStyle','tooltip','width'];
export const outputs: string[] = ['animationComplete','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','legendRender','load','loaded','pointRender','seriesRender','textRender','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * AccumulationChart Component
 * ```html
 * <ej-accumulationchart></ej-accumulationchart>
 * ```
 */
@Component({
    selector: 'ej-accumulationchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(AccumulationSeriesCollectionDirective)
    }
})
export class AccumulationChartComponent extends AccumulationChart implements IComponentBase {
    public childSeries: any;
    public tags: string[] = ['series'];


    constructor(private ngEle: ElementRef, private viewContainerRef:ViewContainerRef, @Optional() pieSeries: PieSeries, @Optional() accumulationTooltip: AccumulationTooltip, @Optional() accumulationLegend: AccumulationLegend, @Optional() accumulationSelection: AccumulationSelection, @Optional() accumulationDataLabel: AccumulationDataLabel) {
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

applyMixins(AccumulationChartComponent, [ComponentBase]);

export const PieSeriesService: ValueProvider = { provide: PieSeries, useValue: PieSeries};
export const AccumulationTooltipService: ValueProvider = { provide: AccumulationTooltip, useValue: AccumulationTooltip};
export const AccumulationLegendService: ValueProvider = { provide: AccumulationLegend, useValue: AccumulationLegend};
export const AccumulationSelectionService: ValueProvider = { provide: AccumulationSelection, useValue: AccumulationSelection};
export const AccumulationDataLabelService: ValueProvider = { provide: AccumulationDataLabel, useValue: AccumulationDataLabel};
