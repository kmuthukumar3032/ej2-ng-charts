var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "@angular/core", "../../../src/chart/chart-all.module", "@angular/common", "../../../src/chart/chart.module", "@syncfusion/ej2-charts/src/chart/series/line-series", "@syncfusion/ej2-charts/src/chart/series/scatter-series", "@syncfusion/ej2-charts/src/chart/series/column-series", "@syncfusion/ej2-charts/src/chart/series/spline-series", "@syncfusion/ej2-charts/src/chart/series/area-series", "@syncfusion/ej2-charts/src/chart/series/step-line-series", "@syncfusion/ej2-charts/src/chart/series/stacking-column-series", "@syncfusion/ej2-charts/src/chart/series/stacking-area-series", "@syncfusion/ej2-charts/src/chart/series/bar-series", "@syncfusion/ej2-charts/src/chart/series/stacking-bar-series", "@syncfusion/ej2-charts/src/chart/user-interaction/tooltip", "@syncfusion/ej2-charts/src/chart/user-interaction/crosshair", "@syncfusion/ej2-charts/src/chart/axis/category-axis", "@syncfusion/ej2-charts/src/chart/axis/date-time-axis", "@syncfusion/ej2-charts/src/chart/axis/logarithmic-axis", "@syncfusion/ej2-charts/src/chart/series/marker", "@syncfusion/ej2-charts/src/chart/legend/legend", "@syncfusion/ej2-charts/src/chart/user-interaction/zooming", "@syncfusion/ej2-charts/src/chart/series/data-label", "@syncfusion/ej2-charts/src/chart/user-interaction/selection"], function (require, exports, import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import17, import18, import19, import20, import21, import22, import23) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartAllModuleInjector = (function (_super) {
        __extends(ChartAllModuleInjector, _super);
        function ChartAllModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(ChartAllModuleInjector.prototype, "_NgLocalization_3", {
            get: function () {
                if ((this.__NgLocalization_3 == null)) {
                    (this.__NgLocalization_3 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_3;
            },
            enumerable: true,
            configurable: true
        });
        ChartAllModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._ChartModule_1 = new import3.ChartModule();
            this._ChartAllModule_2 = new import1.ChartAllModule();
            this._LineSeries_4 = import4.LineSeries;
            this._ScatterSeries_5 = import5.ScatterSeries;
            this._ColumnSeries_6 = import6.ColumnSeries;
            this._SplineSeries_7 = import7.SplineSeries;
            this._AreaSeries_8 = import8.AreaSeries;
            this._StepLineSeries_9 = import9.StepLineSeries;
            this._StackingColumnSeries_10 = import10.StackingColumnSeries;
            this._StackingAreaSeries_11 = import11.StackingAreaSeries;
            this._BarSeries_12 = import12.BarSeries;
            this._StackingBarSeries_13 = import13.StackingBarSeries;
            this._Tooltip_14 = import14.Tooltip;
            this._Crosshair_15 = import15.Crosshair;
            this._Category_16 = import16.Category;
            this._DateTime_17 = import17.DateTime;
            this._Logarithmic_18 = import18.Logarithmic;
            this._Marker_19 = import19.Marker;
            this._Legend_20 = import20.Legend;
            this._Zoom_21 = import21.Zoom;
            this._DataLabel_22 = import22.DataLabel;
            this._Selection_23 = import23.Selection;
            return this._ChartAllModule_2;
        };
        ChartAllModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import3.ChartModule)) {
                return this._ChartModule_1;
            }
            if ((token === import1.ChartAllModule)) {
                return this._ChartAllModule_2;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_3;
            }
            if ((token === import4.LineSeries)) {
                return this._LineSeries_4;
            }
            if ((token === import5.ScatterSeries)) {
                return this._ScatterSeries_5;
            }
            if ((token === import6.ColumnSeries)) {
                return this._ColumnSeries_6;
            }
            if ((token === import7.SplineSeries)) {
                return this._SplineSeries_7;
            }
            if ((token === import8.AreaSeries)) {
                return this._AreaSeries_8;
            }
            if ((token === import9.StepLineSeries)) {
                return this._StepLineSeries_9;
            }
            if ((token === import10.StackingColumnSeries)) {
                return this._StackingColumnSeries_10;
            }
            if ((token === import11.StackingAreaSeries)) {
                return this._StackingAreaSeries_11;
            }
            if ((token === import12.BarSeries)) {
                return this._BarSeries_12;
            }
            if ((token === import13.StackingBarSeries)) {
                return this._StackingBarSeries_13;
            }
            if ((token === import14.Tooltip)) {
                return this._Tooltip_14;
            }
            if ((token === import15.Crosshair)) {
                return this._Crosshair_15;
            }
            if ((token === import16.Category)) {
                return this._Category_16;
            }
            if ((token === import17.DateTime)) {
                return this._DateTime_17;
            }
            if ((token === import18.Logarithmic)) {
                return this._Logarithmic_18;
            }
            if ((token === import19.Marker)) {
                return this._Marker_19;
            }
            if ((token === import20.Legend)) {
                return this._Legend_20;
            }
            if ((token === import21.Zoom)) {
                return this._Zoom_21;
            }
            if ((token === import22.DataLabel)) {
                return this._DataLabel_22;
            }
            if ((token === import23.Selection)) {
                return this._Selection_23;
            }
            return notFoundResult;
        };
        ChartAllModuleInjector.prototype.destroyInternal = function () {
        };
        return ChartAllModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.ChartAllModuleNgFactory = new import0.NgModuleFactory(ChartAllModuleInjector, import1.ChartAllModule);
});
