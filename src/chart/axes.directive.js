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
var input = ['columnIndex', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'plotOffset', 'rangePadding', 'rowIndex', 'span', 'tabIndex', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
/**
 * Axis Directive
 * ```html
 * <e-axis></e-axis>
 * ```
 */
var AxisDirective = (function (_super) {
    __extends(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AxisDirective;
}(ComplexBase));
export { AxisDirective };
AxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input,
                queries: {}
            },] },
];
/** @nocollapse */
AxisDirective.ctorParameters = function () { return []; };
/**
 * Axis Array Directive
 * @private
 */
var AxissDirective = (function (_super) {
    __extends(AxissDirective, _super);
    function AxissDirective() {
        return _super.call(this, 'axes') || this;
    }
    return AxissDirective;
}(ArrayBase));
export { AxissDirective };
AxissDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
                },
            },] },
];
/** @nocollapse */
AxissDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=axes.directive.js.map