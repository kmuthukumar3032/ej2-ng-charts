import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';


let input: string[] = ['border', 'width'];

/**
 * Column Directive
 * ```html
 * <e-column></e-column>
 * ```
 */
@Directive({
    selector: 'e-columns>e-column',
    inputs: input,
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {


    /** 
    * Options to customize the border of the column.
    */
    public border: any;
    /** 
    * The width of the column as a string in order to provide input as both like '100px' or '100%'.If specified as '100%, column will render to the full width of its chart.
    * @default 100%
    */
    public width: string;
}

/**
 * Column Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}