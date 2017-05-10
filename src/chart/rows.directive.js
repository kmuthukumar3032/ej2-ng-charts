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
var input = ['border', 'height'];
/**
 * Row Directive
 * ```html
 * <e-row></e-row>
 * ```
 */
var RowDirective = (function (_super) {
    __extends(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RowDirective;
}(ComplexBase));
export { RowDirective };
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input,
                queries: {}
            },] },
];
/** @nocollapse */
RowDirective.ctorParameters = function () { return []; };
/**
 * Row Array Directive
 * @private
 */
var RowsDirective = (function (_super) {
    __extends(RowsDirective, _super);
    function RowsDirective() {
        return _super.call(this, 'rows') || this;
    }
    return RowsDirective;
}(ArrayBase));
export { RowsDirective };
RowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-chart>e-rows',
                queries: {
                    children: new ContentChildren(RowDirective)
                },
            },] },
];
/** @nocollapse */
RowsDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=rows.directive.js.map