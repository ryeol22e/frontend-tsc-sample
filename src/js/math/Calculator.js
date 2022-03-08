var Calculrator = /** @class */ (function () {
    function Calculrator() {
        this.a = 0;
        this.b = 0;
    }
    Calculrator.prototype.setAdd = function (param1, param2) {
        this.a = param1;
        this.b = param2;
    };
    Calculrator.prototype.getAdd = function () {
        return this.a + this.b;
    };
    Calculrator.prototype.setMinus = function (param1, param2) {
        if (param1 < param2) {
            throw 'first parameter is larger than second parameter';
        }
        else {
            this.a = param1;
            this.b = param2;
        }
    };
    Calculrator.prototype.getMinus = function () {
        return this.a - this.b;
    };
    Calculrator.prototype.setMulti = function (param1, param2) {
        this.a = param1;
        this.b = param2;
    };
    Calculrator.prototype.getMulti = function () {
        return this.a * this.b;
    };
    Calculrator.prototype.setDiv = function (param1, param2) {
        this.a = param1;
        this.b = param2;
    };
    Calculrator.prototype.getDiv = function () {
        return this.a / this.b;
    };
    return Calculrator;
}());
;
export { Calculrator };
