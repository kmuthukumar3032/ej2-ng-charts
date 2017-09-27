import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationSeriesDirective, AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationDirective, AccumulationAnnotationsDirective } from './annotations.directive';
import { AccumulationChartComponent, PieSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService, AccumulationAnnotationService } from './accumulationchart.component';
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
        AccumulationDataLabelService,
        AccumulationAnnotationService
    ]
})
export class AccumulationChartAllModule { }