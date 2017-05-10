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
import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-ng-base';
var input = ['animation', 'border', 'dashArray', 'dataSource', 'enableTooltip', 'fill', 'legendShape', 'marker', 'name', 'opacity', 'query', 'selectionStyle', 'stackingGroup', 'type', 'visible', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
/**
 * Series Directive
 * ```html
 * <e-series></e-series>
 * ```
 */
var SeriesDirective = (function (_super) {
    __extends(SeriesDirective, _super);
    function SeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeriesDirective;
}(ComplexBase));
export { SeriesDirective };
SeriesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-series-collection>e-series',
                inputs: input,
                queries: {}
            },] },
];
/** @nocollapse */
SeriesDirective.ctorParameters = function () { return []; };
/**
 * Series Array Directive
 * @private
 */
var SeriessDirective = (function (_super) {
    __extends(SeriessDirective, _super);
    function SeriessDirective() {
        return _super.call(this, 'series') || this;
    }
    return SeriessDirective;
}(ArrayBase));
export { SeriessDirective };
SeriessDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-series-collection',
                queries: {
                    children: new ContentChildren(SeriesDirective)
                },
            },] },
];
/** @nocollapse */
SeriessDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=series.directive.js.map