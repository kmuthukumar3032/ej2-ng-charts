import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationSeriesDirective, AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationDirective, AccumulationAnnotationsDirective } from './annotations.directive';
import { AccumulationChartComponent, PieSeriesService, AccumulationTooltipService, AccumulationLegendService, AccumulationSelectionService, AccumulationDataLabelService, AccumulationAnnotationService } from './accumulationchart.component';

/**
 * NgModule definition for the AccumulationChart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective
    ],
    exports: [
        AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective
    ]
})
export class AccumulationChartModule { }