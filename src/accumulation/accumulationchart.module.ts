import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationSeriesDirective, AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationChartComponent, PieSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService } from './accumulationchart.component';

/**
 * NgModule definition for the AccumulationChart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective
    ],
    exports: [
        AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective
    ]
})
export class AccumulationChartModule { }