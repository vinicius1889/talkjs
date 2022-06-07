/*!
 * talkjs v0.0.1
 * (c) vinicius dias
 * Released under the MIT License.
 */

var If = /** @class */ (function () {
    function If(currentValue, currentState) {
        if (currentState === void 0) { currentState = true; }
        this.currentValue = currentValue;
        this.currentState = currentState;
    }
    If.of = function (value) {
        return new If(value);
    };
    If.prototype.check = function () {
        return this.currentState;
    };
    If.prototype.is = function (valueToMatch) {
        if (typeof valueToMatch === 'function') {
            return new If(this.currentValue, valueToMatch(this.currentValue) && this.currentState);
        }
        return new If(this.currentValue, valueToMatch === this.currentValue && this.currentState);
    };
    If.prototype.or = function (valueToMatch) {
        if (typeof valueToMatch === 'function') {
            return new If(this.currentValue, valueToMatch(this.currentValue) || this.currentState);
        }
        return new If(this.currentValue, valueToMatch === this.currentValue || this.currentState);
    };
    If.prototype.not = function () {
        return new If(this.currentValue, !this.currentState);
    };
    return If;
}());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/* eslint-disable @typescript-eslint/ban-types */
var Match = /** @class */ (function () {
    function Match(currentValue, valuesToMatch, functionsToExecute, defaultFunction) {
        if (valuesToMatch === void 0) { valuesToMatch = []; }
        if (functionsToExecute === void 0) { functionsToExecute = []; }
        this.currentValue = currentValue;
        this.valuesToMatch = valuesToMatch;
        this.functionsToExecute = functionsToExecute;
        this.defaultFunction = defaultFunction;
    }
    Match.of = function (currentValue) {
        return new Match(currentValue);
    };
    Match.prototype.case = function (value, functionToExecute) {
        var copyOfValues = __spreadArray([], this.valuesToMatch, true);
        copyOfValues.push(value);
        var copyOfFunctions = __spreadArray([], this.functionsToExecute, true);
        copyOfFunctions.push(functionToExecute);
        return new Match(this.currentValue, copyOfValues, copyOfFunctions);
    };
    Match.prototype.caseDefault = function (defaultFunction) {
        return new Match(this.currentValue, __spreadArray([], this.valuesToMatch, true), __spreadArray([], this.functionsToExecute, true), defaultFunction);
    };
    Match.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, valueToTest, functionToTest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.valuesToMatch.length)) return [3 /*break*/, 6];
                        valueToTest = this.valuesToMatch[i];
                        functionToTest = this.functionsToExecute[i];
                        if (!(typeof valueToTest === 'function' &&
                            valueToTest(this.currentValue) &&
                            functionToTest)) return [3 /*break*/, 3];
                        return [4 /*yield*/, functionToTest(this.currentValue)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (!(valueToTest === this.currentValue && functionToTest)) return [3 /*break*/, 5];
                        return [4 /*yield*/, functionToTest(this.currentValue)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (!this.defaultFunction) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.defaultFunction(this.currentValue)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    return Match;
}());

/* eslint-disable @typescript-eslint/ban-types */
var Try = /** @class */ (function () {
    function Try(evaluate) {
        this.evaluate = evaluate;
    }
    Try.of = function (evaluate) {
        return new Try(evaluate);
    };
    Try.prototype.do = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.evaluate()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Try.prototype.getOrElse = function (defaultValue) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.evaluate()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, defaultValue];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Try;
}());

export { If, Match, Try };
//# sourceMappingURL=index.mjs.map
