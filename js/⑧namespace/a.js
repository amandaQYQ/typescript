"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C;
(function (C) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () {
            console.log('dogC');
        };
        return Dog;
    }());
    C.Dog = Dog;
})(C = exports.C || (exports.C = {}));
var D;
(function (D) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () {
            console.log('dogD');
        };
        return Dog;
    }());
    D.Dog = Dog;
})(D = exports.D || (exports.D = {}));
