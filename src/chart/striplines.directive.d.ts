import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
export declare class StripLineDirective extends ComplexBase<StripLineDirective> {
    private viewContainerRef;
    /**
     * Border of the strip line.
     */
    border: any;
    /**
     * Color of the strip line.
     * @default '#808080'
     */
    color: any;
    /**
     * End value of the strip line.
     * @default null
     */
    end: any;
    /**
     * Defines the position of the strip line text horizontally. They are,
     * * Start: Places the strip line text at the start.
     * * Middle: Places the strip line text in the middle.
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    horizontalAlignment: any;
    /**
     * Strip line Opacity
     * @default 1
     */
    opacity: any;
    /**
     * The angle to which the strip line text gets rotated.
     * @default null
     */
    rotation: any;
    /**
     * Size of the strip line, when it starts from the origin.
     * @default null
     */
    size: any;
    /**
     * Start value of the strip line.
     * @default null
     */
    start: any;
    /**
     *  If set true, strip line get render from axis origin.
     *  @default false
     */
    startFromAxis: any;
    /**
     * Strip line text.
     * @default ''
     */
    text: any;
    /**
     * Options to customize the strip line text.
     */
    textStyle: any;
    /**
     * Defines the position of the strip line text vertically. They are,
     * * Start: Places the strip line text at the start.
     * * Middle: Places the strip line text in the middle.
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    verticalAlignment: any;
    /**
     * If set true, strip line for axis renders.
     * @default true
     */
    visible: any;
    /**
     * Specifies the order of the strip line. They are,
     * * Behind: Places the strip line behind the series elements.
     * * Over: Places the strip line over the series elements.
     * @default 'Behind'
     */
    zIndex: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * StripLine Array Directive
 * @private
 */
export declare class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor();
}
