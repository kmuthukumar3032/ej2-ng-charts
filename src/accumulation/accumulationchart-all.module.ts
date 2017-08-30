import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationSeriesDirective, AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationChartComponent, PieSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService } from './accumulationchart.component';
import { AccumulationChartModule } from './accumulationchart.module';

/**
 * NgModule definition for the AccumulationChart component with providers.
 */
@NgModule({
    imports: [CommonModule, AccumulationChartModule],
    exports: [
        AccumulationChartModule
    ],
    providers:[
        PieSeriesService,
        AccumulationTooltipService,
        AccumulationLegendService,
        AccumulationSelectionService,
        AccumulationDataLabelService
    ]
})
export class AccumulationChartAllModule { }