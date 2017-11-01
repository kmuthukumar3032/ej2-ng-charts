import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['animation', 'border', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'gapRatio', 'groupTo', 'height', 'innerRadius', 'legendShape', 'name', 'neckHeight', 'neckWidth', 'palettes', 'pyramidMode', 'query', 'radius', 'selectionStyle', 'startAngle', 'type', 'visible', 'width', 'xName', 'yName'];

/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
@Directive({
    selector: 'e-accumulation-series-collection>e-accumulation-series',
    inputs: input,
    queries: {

    }
})
export class AccumulationSeriesDirective extends ComplexBase<AccumulationSeriesDirective> {


    /** 
     * Specify the type of the series in accumulation chart.
     * @default 'Pie'
     */
    public type: any;
    /** 
     * Options for customizing the animation for series.
     */
    public animation: any;
    /** 
     * Options for customizing the border of the series.
     */
    public border: any;
    /** 
     * The data label for the series.
     */
    public dataLabel: any;
    /** 
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * options to customize the empty points in series
     */
    public emptyPointSettings: any;
    /** 
     * To enable or disable tooltip for a series.
     */
    public enableTooltip: any;
    /** 
     * End angle for a series.
     * @default 360
     */
    public endAngle: any;
    /** 
     * If set true, series points will be exploded on mouse click or touch.
     * @default false
     */
    public explode: any;
    /** 
     * If set true, all the points in the series will get exploded on load.
     * @default false
     */
    public explodeAll: any;
    /** 
     * Index of the point, to be exploded on load.
     * @default null
     */
    public explodeIndex: any;
    /** 
     * Distance of the point from the center, which takes values in both pixels and percentage.
     * @default '30%'
     */
    public explodeOffset: any;
    /** 
     * Defines the distance between the segments of a funnel/pyramid series. The range will be from 0 to 1
     */
    public gapRatio: any;
    /** 
     * AccumulationSeries y values less than groupTo are combined into single slice named others
     * @default null
     */
    public groupTo: any;
    /** 
     * Defines the height of the funnel/pyramid with respect to the chart area
     */
    public height: any;
    /** 
     * When the innerRadius value is greater than 0 percentage, a donut will appear in pie series. It takes values only in percentage.
     * @default '0'
     */
    public innerRadius: any;
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
     * Specifies the series name
     * @default ''
     */
    public name: any;
    /** 
     * Defines the height of the funnel neck with respect to the chart area
     */
    public neckHeight: any;
    /** 
     * Defines the width of the funnel neck with respect to the chart area
     */
    public neckWidth: any;
    /** 
     * Palette for series points.
     * @default []
     */
    public palettes: any;
    /** 
     * Defines how the values have to be reflected, whether through height/surface of the segments
     */
    public pyramidMode: any;
    /** 
     * Specifies Query to select data from dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
     * @default null
     */
    public query: any;
    /** 
     * Radius of the pie series and its values in percentage.
     * @default '80%'
     */
    public radius: any;
    /** 
     * Custom style for the selected series or points.
     * @default null
     */
    public selectionStyle: any;
    /** 
     * Start angle for a series.
     * @default 0
     */
    public startAngle: any;
    /** 
     * Specifies the series visibility.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the width of the funnel/pyramid with respect to the chart area
     */
    public width: any;
    /** 
     * The DataSource field which contains the x value.
     * @default ''
     */
    public xName: any;
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
 * AccumulationSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ej-accumulationchart>e-accumulation-series-collection',
    queries: {
        children: new ContentChildren(AccumulationSeriesDirective)
    },
})
export class AccumulationSeriesCollectionDirective extends ArrayBase<AccumulationSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}