import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';



let input: string[] = ['border', 'height'];

/**
 * Row Directive
 * ```html
 * <e-row></e-row>
 * ```
 */
@Directive({
    selector: 'e-rows>e-row',
    inputs: input,
    queries: {

    }
})
export class RowDirective extends ComplexBase<RowDirective> {


    /** 
    * Options to customize the border of the row.
    */
    public border: any;
    /** 
    * The height of the row as a string in order to provide input as both like '100px' or '100%'.     * If specified as '100%, row will render to the full height of its chart.     * @default 100%
    */
    public height: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
    }
}

/**
 * Row Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-rows',
    queries: {
        children: new ContentChildren(RowDirective)
    },
})
export class RowsDirective extends ArrayBase<RowsDirective> {
    constructor() {
        super('rows');
    }
}