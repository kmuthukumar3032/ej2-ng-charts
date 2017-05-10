import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';


let input: string[] = ['animation', 'border', 'dashArray', 'dataSource', 'enableTooltip', 'fill', 'legendShape', 'marker', 'name', 'opacity', 'query', 'selectionStyle', 'stackingGroup', 'type', 'visible', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];

/**
 * Series Directive
 * ```html
 * <e-series></e-series>
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
    * The type of the series. They are* line - Renders the line series.
* column - Renders the column series.
* area - Renders the area series.
* pie - Renders the pie series.
* polar - Renders the polar series.
* bar - Renders the stacking column series
* stackingColumn - Renders the stacking column series.
* stackingArea - Renders the stacking area series
* stackingBar - Renders the stacking bar series.
* stepLine -  Renders the step line series.
* scatter - Renders the scatter series.
* spline - Renders the spline series
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
    * @default null
    */
    public dashArray: string;
    /** 
    * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager.```html
<div id='Chart'></div>
```
```typescript
let dataManager: DataManager = new DataManager({
        url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
let query: Query = new Query().take(50).where('Estimate', 'greaterThan', 0, false);
let chart: Chart = new Chart({
...
    series: [{
       dataSource: dataManager,
       xName: 'Id',
       yName: 'Estimate',
       query: query
   }],
...
});
chart.appendTo('#Chart');
```
    * @default ''
    */
    public dataSource: any;
    /** 
    * If set true, the tooltip for series will be visible.
    * @default true
    */
    public enableTooltip: boolean;
    /** 
    * The fill color for the series, which accepts value in hex, rgba as a valid CSS color string.
    * @default null
    */
    public fill: string;
    /** 
    * The shape of the legend. Each series has its own legend shape. They are* circle - Renders a circle.
* rectangle - Renders a rectangle.
* triangle - Renders a triangle.
* diamond - Renders a diamond.
* cross - Renders a cross.
* horizontalLine - Renders a horizontalLine.
* verticalLine - Renders a verticalLine.
* pentagon - Renders a pentagon.
* invertedTriangle - Renders a invertedTriangle.
* SeriesType -Render a legend shape based on series type.
    * @default 'SeriesType'
    */
    public legendShape: any;
    /** 
    * Options for displaying and customizing marker for individual point in a series.
    */
    public marker: any;
    /** 
    * The name of the series which is visible in legend.
    * @default ''
    */
    public name: string;
    /** 
    * The opacity of the series.
    * @default 1
    */
    public opacity: number;
    /** 
    * Specifies Query to select data from dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
    * @default null
    */
    public query: any;
    /** 
    * Custom style for the selected series or points.
    * @default null
    */
    public selectionStyle: string;
    /** 
    * This property allows grouping series in a `stacked column / bar` charts.Any string value can be provided to the stackingGroup property.
If any two or above series has the same value, those series will be grouped together.
    * @default ''
    */
    public stackingGroup: string;
    /** 
    * Specifies the series visibility.
    * @default true
    */
    public visible: boolean;
    /** 
    * The stroke width for the series, which is applicable only for `Line` type series.
    * @default 1
    */
    public width: number;
    /** 
    * The name of horizontal axis associated with the series. It requires `axes` of chart.```html
<div id='Chart'></div>
```
```typescript
let chart: Chart = new Chart({
...
    columns: [{ width: '50%' },
              { width: '50%' }],
    axes: [{
               name: 'xAxis 1',
               columnIndex: 1,
           }],
    series: [{
               dataSource: data,
               xName: 'x', yName: 'y',
               xAxisName: 'xAxis 1',
    }],
});
chart.appendTo('#Chart');
```
    * @default null
    */
    public xAxisName: string;
    /** 
    * The DataSource field which contains the x value.
    * @default ''
    */
    public xName: string;
    /** 
    * The name of vertical axis associated with the series. It requires `axes` of chart.```html
<div id='Chart'></div>
```
```typescript
let chart: Chart = new Chart({
...
    rows: [{ height: '50%' },
           { height: '50%' }],
    axes: [{
               name: 'yAxis 1',
               rowIndex: 1,
           }],
    series: [{
               dataSource: data,
               xName: 'x', yName: 'y',
               yAxisName: 'yAxis 1'
    }],
});
chart.appendTo('#Chart');
```
    * @default null
    */
    public yAxisName: string;
    /** 
    * The DataSource field which contains the y value.
    * @default ''
    */
    public yName: string;
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
export class SeriessDirective extends ArrayBase<SeriessDirective> {
    constructor() {
        super('series');
    }
}