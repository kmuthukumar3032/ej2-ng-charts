import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';
/**
 * MultiLevelLabels Directive
 * ```html
 * <e-multilevellabels>
 * <e-multilevellabel>
 * <e-Categories>
 * <e-Category>
 * </e-Category>
 * </e-Categories>
 * </e-multilevellabel>
 * </e-multilevellabels>
 * ```
 */
export declare class CategoryDirective extends ComplexBase<CategoryDirective> {
    private viewContainerRef;
    /**
     * End value of the multi level labels
     * @default null
     */
    end: any;
    /**
     * Maximum width of the text for multi level labels.
     * @default null
     */
    maximumTextWidth: any;
    /**
     * Start value of the multi level labels
     * @default null
     */
    start: any;
    /**
     * multi level labels text.
     * @default ''
     */
    text: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * Category Array Directive
 * @private
 */
export declare class CategoriesDirective extends ArrayBase<CategoriesDirective> {
    constructor();
}
