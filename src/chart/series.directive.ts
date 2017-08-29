import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['animation', 'border', 'dashArray', 'dataSource', 'enableTooltip', 'fill', 'high', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'opacity', 'query', 'selectionStyle', 'size', 'stackingGroup', 'type', 'visible', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];

/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series></e-series>
 * </e-series-collection>
 * ```
 */
@Directive({
    selector: 'e-series-collection>e-series',
    inputs: input,
    queries: {

    }
})
export class SeriesDirective extends ComplexBase<SeriesDirective> {


    /** 
     * The type of the series. They are 
     * * line - Renders the line series. 
     * * column - Renders the column series. 
     * * area - Renders the area series. 
     * * pie - Renders the pie series. 
     * * polar - Renders the polar series. 
     * * bar - Renders the stacking column series 
     * * stackingColumn - Renders the stacking column series. 
     * * stackingArea - Renders the stacking area series 
     * * stackingBar - Renders the stacking bar series. 
     * * stepLine -  Renders the step line series. 
     * * scatter - Renders the scatter series. 
     * * spline - Renders the spline series
     * @default 'Line'
     */
    public type: any;
    /** 
     * Options for customizing the animation for series.
     */
    public animation: any;
    /** 
     * Options for customizing the border of the series. Applicable only for `Column`, `Bar` type series.
     */
    public border: any;
    /** 
     * The dashArray of the series.
     * @default '0'
     */
    public dashArray: any;
    /** 
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * If set true, the tooltip for series will be visible.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * The fill color for the series, which accepts value in hex, rgba as a valid CSS color string.
     * @default null
     */
    public fill: any;
    /** 
     * The DataSource field which contains the high value of y
     * @default ''
     */
    public high: any;
    /** 
     * The shape of the legend. Each series has its own legend shape. They are 
     * * circle - Renders a circle. 
     * * rectangle - Renders a rectangle. 
     * * triangle - Renders a triangle. 
     * * diamond - Renders a diamond. 
     * * cross - Renders a cross. 
     * * horizontalLine - Renders a horizontalLine. 
     * * verticalLine - Renders a verticalLine. 
     * * pentagon - Renders a pentagon. 
     * * invertedTriangle - Renders a invertedTriangle. 
     * * SeriesType -Render a legend shape based on series type.
     * @default 'SeriesType'
     */
    public legendShape: any;
    /** 
     * The DataSource field which contains the low value of y
     * @default ''
     */
    public low: any;
    /** 
     * Options for displaying and customizing marker for individual point in a series.
     */
    public marker: any;
    /** 
     * maximum radius
     */
    public maxRadius: any;
    /** 
     * minimum radius
     */
    public minRadius: any;
    /** 
     * The name of the series which is visible in legend.
     * @default ''
     */
    public name: any;
    /** 
     * The opacity of the series.
     * @default 1
     */
    public opacity: any;
    /** 
     * Specifies Query to select data from dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
     * @default null
     */
    public query: any;
    /** 
     * Custom style for the selected series or points.
     * @default null
     */
    public selectionStyle: any;
    /** 
     * The DataSource field which contains the size value for bubble series
     * @default ''
     */
    public size: any;
    /** 
     * This property allows grouping series in a `stacked column / bar` charts. 
     * Any string value can be provided to the stackingGroup property. 
     * If any two or above series has the same value, those series will be grouped together.
     * @default ''
     */
    public stackingGroup: any;
    /** 
     * Specifies the series visibility.
     * @default true
     */
    public visible: any;
    /** 
     * The stroke width for the series, which is applicable only for `Line` type series.
     * @default 1
     */
    public width: any;
    /** 
     * The name of horizontal axis associated with the series. It requires `axes` of chart. 
     * 
     * @default null
     */
    public xAxisName: any;
    /** 
     * The DataSource field which contains the x value.
     * @default ''
     */
    public xName: any;
    /** 
     * The name of vertical axis associated with the series. It requires `axes` of chart. 
     * 
     * @default null
     */
    public yAxisName: any;
    /** 
     * The DataSource field which contains the y value.
     * @default ''
     */
    public yName: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * Series Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-series-collection',
    queries: {
        children: new ContentChildren(SeriesDirective)
    },
})
export class SeriesCollectionDirective extends ArrayBase<SeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}