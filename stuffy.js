"use strict";
exports.__esModule = true;
var stuffy = /** @class */ (function () {
    function stuffy(n, t, c) {
        this._name = n;
        this.type = t;
        this.color = c;
    }
    Object.defineProperty(stuffy.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    stuffy.prototype.about = function () {
        return "name: " + this._name + ", type: " + this.type + ", color: " + this.color;
    };
    return stuffy;
}());
exports.stuffy = stuffy;
