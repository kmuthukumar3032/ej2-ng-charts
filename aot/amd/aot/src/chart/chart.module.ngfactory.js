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
define(["require", "exports", "@angular/core", "../../../src/chart/chart.module", "@angular/common"], function (require, exports, import0, import1, import2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartModuleInjector = (function (_super) {
        __extends(ChartModuleInjector, _super);
        function ChartModuleInjector(parent) {
            return _super.call(this, parent, [], []) || this;
        }
        Object.defineProperty(ChartModuleInjector.prototype, "_NgLocalization_2", {
            get: function () {
                if ((this.__NgLocalization_2 == null)) {
                    (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
                }
                return this.__NgLocalization_2;
            },
            enumerable: true,
            configurable: true
        });
        ChartModuleInjector.prototype.createInternal = function () {
            this._CommonModule_0 = new import2.CommonModule();
            this._ChartModule_1 = new import1.ChartModule();
            return this._ChartModule_1;
        };
        ChartModuleInjector.prototype.getInternal = function (token, notFoundResult) {
            if ((token === import2.CommonModule)) {
                return this._CommonModule_0;
            }
            if ((token === import1.ChartModule)) {
                return this._ChartModule_1;
            }
            if ((token === import2.NgLocalization)) {
                return this._NgLocalization_2;
            }
            return notFoundResult;
        };
        ChartModuleInjector.prototype.destroyInternal = function () {
        };
        return ChartModuleInjector;
    }(import0.ɵNgModuleInjector));
    exports.ChartModuleNgFactory = new import0.NgModuleFactory(ChartModuleInjector, import1.ChartModule);
});
