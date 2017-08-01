import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['columnIndex', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'plotOffset', 'rangePadding', 'rowIndex', 'span', 'tabIndex', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];

/**
 * Axis Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
@Directive({
    selector: 'e-axes>e-axis',
    inputs: input,
    queries: {

    }
})
export class AxisDirective extends ComplexBase<AxisDirective> {


    /** 
    * Specifies the index of the column where the axis is associated,     * when the chart area is divided into multiple plot areas by using `columns`.     * ```html      * <div id='Chart'></div>     * ```     * ```typescript     * let chart: Chart = new Chart({     * ...     *     columns: [{ width: '50%' },     *               { width: '50%' }],     *     axes: [{     *                name: 'xAxis 1',     *                columnIndex: 1,     *     }],     * ...      * });     * chart.appendTo('#Chart');     * ```     * @default 0
    */
    public columnIndex: any;
    /** 
    * Options to customize the crosshair tooltip.
    */
    public crosshairTooltip: any;
    /** 
    * Description for axis and its element.     * @default null
    */
    public description: any;
    /** 
    * With this property, you can request axis to calculate intervals approximately equal to your desired interval.     * @default null
    */
    public desiredIntervals: any;
    /** 
    * Specifies the position of labels at the edge of the axis.They are     * * none - No action will be perform.     * * hide - Edge label will be hidden.     * * shift - Shift the edge labels.     * @default 'None'
    */
    public edgeLabelPlacement: any;
    /** 
    * If set true, axis interval will be calculated automatically with respect to zoomed range.     * @default true
    */
    public enableAutoIntervalOnZooming: any;
    /** 
    * The interval for an axis.     * @default null
    */
    public interval: any;
    /** 
    * Specifies the types like `Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds` in date time axis.They are     * * auto - Define the interval of the axis based on data.     * * years - Define the interval of the axis in years.     * * months - Define the interval of the axis in months.     * * days - Define the interval of the axis in days.     * * hours - Define the interval of the axis in hours.     * * minutes - Define the interval of the axis in minutes.     * @default 'Auto'
    */
    public intervalType: any;
    /** 
    * To format the axis label, which accepts any global string format like 'C', 'n1', 'P' etc.     * Also accepts placeholder like '{value}°C' in which value represent the axis label e.g. 20°C.     * @default ''
    */
    public labelFormat: any;
    /** 
    * Specifies the actions like `Hide`, `Rotate45`, `Rotate90` when the axis labels are intersecting with each other.They are     * * none - Shows all the labels.     * * hide - Hide the label when it intersect.     * * rotate45 - Rotate the label to 45 degree when it intersect.     * * rotate90 - Rotate the label to 90 degree when it intersect.     * @default Hide
    */
    public labelIntersectAction: any;
    /** 
    * Specifies the placement of label for category axis. They are     * * betweenTicks - Render the label between the ticks.     * * onTicks - Render the label on the ticks.     * @default 'BetweenTicks'
    */
    public labelPlacement: any;
    /** 
    * The angle to which the axis label gets rotated.     * @default 0
    */
    public labelRotation: any;
    /** 
    * Options to customize the axis label.
    */
    public labelStyle: any;
    /** 
    * Options for customizing the axis lines.
    */
    public lineStyle: any;
    /** 
    * The base value for logarithmic axis. It requires `valueType` to be `Logarithmic`     * @default 10
    */
    public logBase: any;
    /** 
    * Options for customizing the major grid lines.
    */
    public majorGridLines: any;
    /** 
    * Options for customizing the major tick lines.
    */
    public majorTickLines: any;
    /** 
    * Specifies the maximum range of an axis.     * @default null
    */
    public maximum: any;
    /** 
    * The maximum number of labels count per 100 pixels with respect to axis length.     * @default 3
    */
    public maximumLabels: any;
    /** 
    * Specifies the minimum range of an axis.     * @default null
    */
    public minimum: any;
    /** 
    * Options for customizing the minor grid lines.
    */
    public minorGridLines: any;
    /** 
    * Options for customizing the minor tick lines.
    */
    public minorTickLines: any;
    /** 
    * Specifies the number of minor ticks per interval.     * @default 0
    */
    public minorTicksPerInterval: any;
    /** 
    * Unique identifier of an axis. To associate an axis with the series, set this name to the xAxisName/yAxisName property of the series.     * @default ''
    */
    public name: any;
    /** 
    * If set true, the axis will render at the opposite side from its default position.     * @default false
    */
    public opposedPosition: any;
    /** 
    * Left and right padding for the plot area in pixels.     * @default 0
    */
    public plotOffset: any;
    /** 
    * Specifies the padding for the axis range in terms of interval.They are     * * none - Padding cannot be applied to the axis.     * * normal - Padding is applied to the axis based on the range calculation.     * * additional - Interval of the axis is added as padding to the minimum and maximum values of the range.     * * round - Axis range is rounded to the nearest possible value divided by the interval.     * @default 'Auto'
    */
    public rangePadding: any;
    /** 
    * Specifies the index of the row where the axis is associated,     * when the chart area is divided into multiple plot areas by using `rows`.     * ```html      * <div id='Chart'></div>     * ```     * ```typescript     * let chart: Chart = new Chart({     * ...     *     rows: [{ height: '50%' },     *            { height: '50%' }],     *     axes: [{     *                name: 'yAxis 1',     *                rowIndex: 1,     *      }],     * ...     * });     * chart.appendTo('#Chart');     * ```     * @default 0
    */
    public rowIndex: any;
    /** 
    * Specifies the number of `columns` or `rows` an axis has to span horizontally or vertically.     * @default 1
    */
    public span: any;
    /** 
    * TabIndex value for the axis.     * @default 2
    */
    public tabIndex: any;
    /** 
    * Specifies the title of an axis.     * @default ''
    */
    public title: any;
    /** 
    * Options for customizing the axis title.
    */
    public titleStyle: any;
    /** 
    * Specifies the type of data the axis is handling.They are     * * double -  Renders a numeric axis.     * * dateTime - Renders a dateTime axis.     * * category - Renders a category axis.     * * logarithmic - Renders a log axis.     * @default 'Double'
    */
    public valueType: any;
    /** 
    * If set true, axis label will be visible.     * @default true
    */
    public visible: any;
    /** 
    * The axis is scaled by this factor. When zoomFactor is 0.5, the chart is scaled by 200% along this axis. Value ranges from 0 to 1.     * @default 1
    */
    public zoomFactor: any;
    /** 
    * Position of the zoomed axis. Value ranges from 0 to 1.     * @default 0
    */
    public zoomPosition: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * Axis Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-axes',
    queries: {
        children: new ContentChildren(AxisDirective)
    },
})
export class AxesDirective extends ArrayBase<AxesDirective> {
    constructor() {
        super('axes');
    }
}