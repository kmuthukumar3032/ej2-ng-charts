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
    var input = ['border', 'height'];
    var RowDirective = (function (_super) {
        __extends(RowDirective, _super);
        function RowDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RowDirective;
    }(ej2_ng_base_1.ComplexBase));
    RowDirective = __decorate([
        core_1.Directive({
            selector: 'e-rows>e-row',
            inputs: input,
            queries: {}
        })
    ], RowDirective);
    exports.RowDirective = RowDirective;
    var RowsDirective = (function (_super) {
        __extends(RowsDirective, _super);
        function RowsDirective() {
            return _super.call(this, 'rows') || this;
        }
        return RowsDirective;
    }(ej2_ng_base_1.ArrayBase));
    RowsDirective = __decorate([
        core_1.Directive({
            selector: 'ej-chart>e-rows',
            queries: {
                children: new core_1.ContentChildren(RowDirective)
            },
        }),
        __metadata("design:paramtypes", [])
    ], RowsDirective);
    exports.RowsDirective = RowsDirective;
});
