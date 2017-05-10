define(["require", "exports", "@angular/core", "../../../src/chart/chart.component", "@syncfusion/ej2-charts/src/chart/series/line-series", "@syncfusion/ej2-charts/src/chart/series/scatter-series", "@syncfusion/ej2-charts/src/chart/series/column-series", "@syncfusion/ej2-charts/src/chart/series/spline-series", "@syncfusion/ej2-charts/src/chart/series/area-series", "@syncfusion/ej2-charts/src/chart/series/step-line-series", "@syncfusion/ej2-charts/src/chart/series/stacking-column-series", "@syncfusion/ej2-charts/src/chart/series/stacking-area-series", "@syncfusion/ej2-charts/src/chart/series/bar-series", "@syncfusion/ej2-charts/src/chart/series/stacking-bar-series", "@syncfusion/ej2-charts/src/chart/user-interaction/tooltip", "@syncfusion/ej2-charts/src/chart/user-interaction/crosshair", "@syncfusion/ej2-charts/src/chart/axis/category-axis", "@syncfusion/ej2-charts/src/chart/axis/date-time-axis", "@syncfusion/ej2-charts/src/chart/axis/logarithmic-axis", "@syncfusion/ej2-charts/src/chart/series/marker", "@syncfusion/ej2-charts/src/chart/legend/legend", "@syncfusion/ej2-charts/src/chart/user-interaction/zooming", "@syncfusion/ej2-charts/src/chart/series/data-label", "@syncfusion/ej2-charts/src/chart/user-interaction/selection"], function (require, exports, import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import17, import18, import19, import20, import21) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles_ChartComponent = [];
    exports.RenderType_ChartComponent = import0.ɵcrt({
        encapsulation: 2,
        styles: styles_ChartComponent,
        data: {}
    });
    function View_ChartComponent_0(l) {
        return import0.ɵvid(2, [], null, null);
    }
    exports.View_ChartComponent_0 = View_ChartComponent_0;
    function View_ChartComponent_Host_0(l) {
        return import0.ɵvid(0, [
            (l()(), import0.ɵeld(0, null, null, 5, 'ej-chart', [], null, null, null, View_ChartComponent_0, exports.RenderType_ChartComponent)),
            import0.ɵdid(3268608, null, 4, import1.ChartComponent, [
                import0.ElementRef,
                [
                    2,
                    import2.LineSeries
                ],
                [
                    2,
                    import3.ScatterSeries
                ],
                [
                    2,
                    import4.ColumnSeries
                ],
                [
                    2,
                    import5.SplineSeries
                ],
                [
                    2,
                    import6.AreaSeries
                ],
                [
                    2,
                    import7.StepLineSeries
                ],
                [
                    2,
                    import8.StackingColumnSeries
                ],
                [
                    2,
                    import9.StackingAreaSeries
                ],
                [
                    2,
                    import10.BarSeries
                ],
                [
                    2,
                    import11.StackingBarSeries
                ],
                [
                    2,
                    import12.Tooltip
                ],
                [
                    2,
                    import13.Crosshair
                ],
                [
                    2,
                    import14.Category
                ],
                [
                    2,
                    import15.DateTime
                ],
                [
                    2,
                    import16.Logarithmic
                ],
                [
                    2,
                    import17.Marker
                ],
                [
                    2,
                    import18.Legend
                ],
                [
                    2,
                    import19.Zoom
                ],
                [
                    2,
                    import20.DataLabel
                ],
                [
                    2,
                    import21.Selection
                ]
            ], null, null),
            import0.ɵqud(167772160, 1, { childSeries: 0 }),
            import0.ɵqud(167772160, 2, { childAxes: 0 }),
            import0.ɵqud(167772160, 3, { childRows: 0 }),
            import0.ɵqud(167772160, 4, { childColumns: 0 })
        ], function (ck, v) {
            ck(v, 1, 0);
        }, null);
    }
    exports.ChartComponentNgFactory = import0.ɵccf('ej-chart', import1.ChartComponent, View_ChartComponent_Host_0, {
        axes: 'axes',
        background: 'background',
        border: 'border',
        chartArea: 'chartArea',
        columns: 'columns',
        crosshair: 'crosshair',
        description: 'description',
        enablePersistence: 'enablePersistence',
        enableRtl: 'enableRtl',
        height: 'height',
        isMultiSelect: 'isMultiSelect',
        legendSettings: 'legendSettings',
        locale: 'locale',
        margin: 'margin',
        palettes: 'palettes',
        primaryXAxis: 'primaryXAxis',
        primaryYAxis: 'primaryYAxis',
        rows: 'rows',
        selectedDataIndexes: 'selectedDataIndexes',
        selectionMode: 'selectionMode',
        series: 'series',
        tabIndex: 'tabIndex',
        theme: 'theme',
        title: 'title',
        titleStyle: 'titleStyle',
        tooltip: 'tooltip',
        useGroupingSeparator: 'useGroupingSeparator',
        width: 'width',
        zoomSettings: 'zoomSettings'
    }, {
        animationComplete: 'animationComplete',
        axisLabelRender: 'axisLabelRender',
        chartMouseClick: 'chartMouseClick',
        chartMouseDown: 'chartMouseDown',
        chartMouseLeave: 'chartMouseLeave',
        chartMouseMove: 'chartMouseMove',
        chartMouseUp: 'chartMouseUp',
        dragComplete: 'dragComplete',
        legendRender: 'legendRender',
        load: 'load',
        loaded: 'loaded',
        pointRender: 'pointRender',
        seriesRender: 'seriesRender',
        textRender: 'textRender',
        tooltipRender: 'tooltipRender',
        zoomComplete: 'zoomComplete'
    }, []);
});
