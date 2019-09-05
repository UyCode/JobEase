"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _reduxActions = require("./../../npm/redux-actions/lib/index.js"),
    _index = require("./../types/index.js"),
    defaultState = {
        login: !1,
        status: "",
        userInfoAuth: !1,
        userInfo: "",
        wxInfo: ""
    };
exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : defaultState,
        t = arguments[1],
        n = t.type,
        r = t.payload;
    switch (n) {
        case _index.LOGIN_START:
            return {
                login: !1,
                status: "start",
                userInfoAuth: !1
            };
        case _index.LOGIN_SUCCESS:
            return _extends({}, e, {
                login: !0,
                status: "success",
                userInfo: r.userInfo,
                userInfoAuth: !1
            });
        case _index.USER_AUTH:
            return _extends({}, e, {
                userInfoAuth: !0
            });
        case _index.GET_WXINFO_SUCCESS:
            return _extends({}, e, {
                wxInfo: r.wxInfo
            });
        case _index.LOGIN_FAIL:
            return _extends({}, e, {
                login: !1,
                status: "",
                userInfoAuth: !1
            });
        default:
            return e
    }
};