"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var random_js_1 = require("random-js");
var Dice = /** @class */ (function () {
    function Dice() {
        this._sides = 20;
    }
    Dice.prototype.roll = function (times) {
        if (times === void 0) { times = 1; }
        for (var i = 1; i < times; i++) {
            var randomNum = new random_js_1.Random(random_js_1.nodeCrypto).integer(1, this._sides);
        }
    };
    return Dice;
}());
var D20 = /** @class */ (function (_super) {
    __extends(D20, _super);
    function D20() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sides = 20;
        return _this;
    }
    return D20;
}(Dice));
exports.default = D20;
//# sourceMappingURL=Dice.js.map