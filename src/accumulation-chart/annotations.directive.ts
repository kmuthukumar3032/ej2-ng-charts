import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'y'];

/**
 * AccumulationAnnotations Directive
 * ```html
 * <e-accumulation-annotations>
 * <e-accumulation-annotation></e-accumulation-annotation>
 * </e-accumulation-annotations>
 * ```
 */
@Directive({
    selector: 'e-accumulation-annotations>e-accumulation-annotation',
    inputs: input,
    queries: {

    }
})
export class AccumulationAnnotationDirective extends ComplexBase<AccumulationAnnotationDirective> {


    /** 
     * Content of the annotation, which accepts the id of the custom element.
     * @default null
     */
    public content: any;
    /** 
     * Specifies the coordinate units of the annotation. They are 
     * * Pixel - Annotation renders based on x and y pixel value. 
     * * Point - Annotation renders based on x and y axis value.
     * @default 'Pixel'
     */
    public coordinateUnits: any;
    /** 
     * Information about annotation for assistive technology.
     * @default null
     */
    public description: any;
    /** 
     * Specifies the alignment of the annotation. They are 
     * * Near - Align the annotation element as top side. 
     * * Far - Align the annotation element as bottom side. 
     * * Center - Align the annotation element as mid point.
     * @default 'Center'
     */
    public horizontalAlignment: any;
    /** 
     * Specifies the regions of the annotation. They are 
     * * Chart - Annotation renders based on chart coordinates. 
     * * Series - Annotation renders based on series coordinates.
     * @default 'Chart'
     */
    public region: any;
    /** 
     * Specifies the position of the annotation. They are 
     * * Top - Align the annotation element as top side. 
     * * Bottom - Align the annotation element as bottom side. 
     * * Middle - Align the annotation element as mid point.
     * @default 'Middle'
     */
    public verticalAlignment: any;
    /** 
     * if set coordinateUnit as `Pixel` X specifies the axis value 
     * else is specifies pixel or percentage of coordinate
     * @default 0
     */
    public x: any;
    /** 
     * if set coordinateUnit as `Pixel` Y specifies the axis value 
     * else is specifies pixel or percentage of coordinate
     * @default 0
     */
    public y: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * AccumulationAnnotation Array Directive
 * @private
 */
@Directive({
    selector: 'ej-accumulationchart>e-accumulation-annotations',
    queries: {
        children: new ContentChildren(AccumulationAnnotationDirective)
    },
})
export class AccumulationAnnotationsDirective extends ArrayBase<AccumulationAnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}