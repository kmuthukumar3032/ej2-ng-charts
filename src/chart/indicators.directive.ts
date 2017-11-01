import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-ng-base';



let input: string[] = ['animation', 'bandColor', 'close', 'dPeriod', 'dashArray', 'dataSource', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'query', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];

/**
 * Indicator Directive
 * ```html
 * <e-indicators>
 * <e-indicator></e-indicator>
 * </e-indicators>
 * ```
 */
@Directive({
    selector: 'e-indicators>e-indicator',
    inputs: input,
    queries: {

    }
})
export class IndicatorDirective extends ComplexBase<IndicatorDirective> {


    /** 
     * Defines the type of the technical indicator
     * @default 'Sma'
     */
    public type: any;
    /** 
     * Options to customizing animation for the series.
     */
    public animation: any;
    /** 
     * Options for customizing the BollingerBand in the indicator.
     * @default 'rgba(211,211,211,0.25)'
     */
    public bandColor: any;
    /** 
     * The DataSource field that contains the close value of y 
     * It is applicable for series and technical indicators
     * @default ''.
     */
    public close: any;
    /** 
     * Defines the period, the price changes over which will define the %D value in stochastic indicators
     * @default 3
     */
    public dPeriod: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke the lines in `Line` type series.
     * @default '0'.
     */
    public dashArray: any;
    /** 
     * Specifies the DataSource for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * Sets the fast period to define the Macd line
     * @default 26
     */
    public fastPeriod: any;
    /** 
     * Defines the field to compare the current value with previous values
     * @default 'Close'
     */
    public field: any;
    /** 
     * The fill color for the series that accepts value in hex and rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue' and for series, it has null.
     * @default null.
     */
    public fill: any;
    /** 
     * The DataSource field that contains the high value of y 
     * It is applicable for series and technical indicators
     * @default ''.
     */
    public high: any;
    /** 
     * Defines the look back period, the price changes over which will define the %K value in stochastic indicators
     * @default 14
     */
    public kPeriod: any;
    /** 
     * The DataSource field that contains the low value of y 
     * It is applicable for series and technical indicators
     * @default ''.
     */
    public low: any;
    /** 
     * Defines the appearance of lower line in technical indicators
     */
    public lowerLine: any;
    /** 
     * Defines the appearance of the the MacdLine of Macd indicator
     * @default { color: '#ff9933', width: 2 }
     */
    public macdLine: any;
    /** 
     * Defines the color of the negative bars in Macd indicators
     */
    public macdNegativeColor: any;
    /** 
     * Defines the color of the positive bars in Macd indicators
     */
    public macdPositiveColor: any;
    /** 
     * Defines the type of the Macd indicator.
     * @default 'Both'
     */
    public macdType: any;
    /** 
     * The DataSource field that contains the open value of y 
     * It is applicable for series and technical indicators
     * @default ''.
     */
    public open: any;
    /** 
     * Defines the over-bought(threshold) values. It is applicable for RSI and stochastic indicators
     * @default 80
     */
    public overBought: any;
    /** 
     * Defines the over-sold(threshold) values. It is applicable for RSI and stochastic indicators
     * @default 20
     */
    public overSold: any;
    /** 
     * Defines the period, the price changes over which will be considered to predict the trend
     * @default 14
     */
    public period: any;
    /** 
     * Defines the appearance of period line in technical indicators
     */
    public periodLine: any;
    /** 
     * Specifies query to select data from DataSource. This property is applicable only when the DataSource is `ej.DataManager`.
     * @default null.
     */
    public query: any;
    /** 
     * Defines the name of the series, the data of which has to be depicted as indicator
     * @default ''
     */
    public seriesName: any;
    /** 
     * Enables/Disables the over-bought and over-sold regions
     * @default true
     */
    public showZones: any;
    /** 
     * Sets the slow period to define the Macd line
     * @default 12
     */
    public slowPeriod: any;
    /** 
     * Sets the standard deviation values that helps to define the upper and lower bollinger bands
     * @default 2
     */
    public standardDeviation: any;
    /** 
     * Defines the appearance of the upper line in technical indicators
     */
    public upperLine: any;
    /** 
     * Defines the data source field that contains the volume value in candle charts 
     * It is applicable for financial series and technical indicators
     * @default ''
     */
    public volume: any;
    /** 
     * The stroke width for the series that is applicable only for `Line` type series. 
     * It also represents the stroke width of the signal lines in technical indicators.
     * @default 1.
     */
    public width: any;
    /** 
     * The name of the horizontal axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators 
     * 
     * @default null.
     */
    public xAxisName: any;
    /** 
     * The DataSource field that contains the x value. 
     * It is applicable for series and technical indicators
     * @default ''.
     */
    public xName: any;
    /** 
     * The name of the vertical axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators 
     * 
     * @default null.
     */
    public yAxisName: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
    }
}

/**
 * Indicator Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-indicators',
    queries: {
        children: new ContentChildren(IndicatorDirective)
    },
})
export class IndicatorsDirective extends ArrayBase<IndicatorsDirective> {
    constructor() {
        super('indicators');
    }
}