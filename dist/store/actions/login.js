"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getWxInfo = exports.auth = exports.login = void 0;
var _login = require("./../types/login.js"),
    _reduxActions = require("./../../npm/redux-actions/lib/index.js"),
    _request = require("./../../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    loginRequest = function() {
        _request2.default.cehomeRequest().then(function(e) {}).catch(function(e) {})
    },
    login = exports.login = function(e) {
        return e ? {
            type: _login.LOGIN_SUCCESS,
            payload: {
                userInfo: e
            }
        } : {
            type: _login.LOGIN_FAIL,
            payload: null
        }
    },
    auth = exports.auth = function() {
        return {
            type: _login.USER_AUTH
        }
    },
    getWxInfo = exports.getWxInfo = function(e) {
        return {
            type: _login.GET_WXINFO_SUCCESS,
            payload: {
                wxInfo: e
            }
        }
    };