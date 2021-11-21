"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
