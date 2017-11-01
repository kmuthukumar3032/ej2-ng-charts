import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['border', 'color', 'end', 'horizontalAlignment', 'opacity', 'rotation', 'size', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];

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
@Directive({
    selector: 'e-axis>e-striplines>e-stripline',
    inputs: input,
    queries: {

    }
})
export class StripLineDirective extends ComplexBase<StripLineDirective> {


    /** 
     * Border of the strip line.
     */
    public border: any;
    /** 
     * Color of the strip line.
     * @default '#808080'.
     */
    public color: any;
    /** 
     * End value of the strip line.
     * @default null.
     */
    public end: any;
    /** 
     * Defines the position of the strip line text horizontally. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'.
     */
    public horizontalAlignment: any;
    /** 
     * Strip line Opacity
     */
    public opacity: any;
    /** 
     * The angle to which the strip line text gets rotated.
     * @default null.
     */
    public rotation: any;
    /** 
     * Size of the strip line, when it starts from the origin.
     * @default null.
     */
    public size: any;
    /** 
     * Start value of the strip line.
     * @default null.
     */
    public start: any;
    /** 
     *  If set true, strip line get render from axis origin. 
     *  @default false.
     */
    public startFromAxis: any;
    /** 
     * Strip line text.
     * @default ''.
     */
    public text: any;
    /** 
     * Options to customize the strip line text.
     */
    public textStyle: any;
    /** 
     * Defines the position of the strip line text vertically. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'.
     */
    public verticalAlignment: any;
    /** 
     * If set true, strip line for axis renders.
     * @default true.
     */
    public visible: any;
    /** 
     * Specifies the order of the strip line. They are, 
     * * Behind: Places the strip line behind the series elements. 
     * * Over: Places the strip line over the series elements.
     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * StripLine Array Directive
 * @private
 */
@Directive({
    selector: 'e-axis>e-striplines',
    queries: {
        children: new ContentChildren(StripLineDirective)
    },
})
export class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor() {
        super('striplines');
    }
}