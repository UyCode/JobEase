"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _redux = require("./../../npm/redux/lib/index.js"),
    _login = require("./login.js"),
    _login2 = _interopRequireDefault(_login);
exports.default = (0, _redux.combineReducers)({
    login: _login2.default
});