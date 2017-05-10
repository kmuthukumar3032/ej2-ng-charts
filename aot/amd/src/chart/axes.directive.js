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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@syncfusion/ej2-ng-base"], function (require, exports, core_1, ej2_ng_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var input = ['columnIndex', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelRotation', 'labelStyle', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'name', 'opposedPosition', 'plotOffset', 'rangePadding', 'rowIndex', 'span', 'tabIndex', 'title', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
    var AxisDirective = (function (_super) {
        __extends(AxisDirective, _super);
        function AxisDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AxisDirective;
    }(ej2_ng_base_1.ComplexBase));
    AxisDirective = __decorate([
        core_1.Directive({
            selector: 'e-axes>e-axis',
            inputs: input,
            queries: {}
        })
    ], AxisDirective);
    exports.AxisDirective = AxisDirective;
    var AxissDirective = (function (_super) {
        __extends(AxissDirective, _super);
        function AxissDirective() {
            return _super.call(this, 'axes') || this;
        }
        return AxissDirective;
    }(ej2_ng_base_1.ArrayBase));
    AxissDirective = __decorate([
        core_1.Directive({
            selector: 'ej-chart>e-axes',
            queries: {
                children: new core_1.ContentChildren(AxisDirective)
            },
        }),
        __metadata("design:paramtypes", [])
    ], AxissDirective);
    exports.AxissDirective = AxissDirective;
});
