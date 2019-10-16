"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(_name, _hpCap) {
        this._name = _name;
        this._hpCap = _hpCap;
        this._tempHp = 0;
        this._currentHp = 0;
        this._currentHp = _hpCap;
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "hpCap", {
        get: function () {
            return this._hpCap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "currentHp", {
        get: function () {
            return this._hpCap + this._tempHp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "trueCurrentHp", {
        get: function () {
            return this.currentHp;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
exports.default = Character;
//# sourceMappingURL=Character.js.map