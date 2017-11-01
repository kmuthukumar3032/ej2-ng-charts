import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['border', 'height'];

/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
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
     * Options to customize the border of the rows.
     */
    public border: any;
    /** 
     * The height of the row as a string accept input both as '100px' and '100%'. 
     * If specified as '100%, row renders to the full height of its chart.
     * @default 100%.
     */
    public height: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
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