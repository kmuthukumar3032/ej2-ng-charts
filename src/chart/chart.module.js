import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDirective, SeriessDirective } from './series.directive';
import { AxisDirective, AxissDirective } from './axes.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { ChartComponent } from './chart.component';
/**
 * NgModule definition for the Chart component.
 */
var ChartModule = (function () {
    function ChartModule() {
    }
    return ChartModule;
}());
export { ChartModule };
ChartModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
ChartModule.ctorParameters = function () { return []; };
//# sourceMappingURL=chart.module.js.map