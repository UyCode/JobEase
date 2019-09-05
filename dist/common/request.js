"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function aesEncrypt(e) {
    var t = CryptoJS.enc.Utf8.parse("mp$4Ru@WtsPo2mAf");
    return CryptoJS.AES.encrypt("cehomemp@" + e, t, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cehomeRequest = exports.getHeaderData = exports.VisitorId = void 0, exports.aesEncrypt = aesEncrypt;
var _api = require("./api.js"),
    _api2 = _interopRequireDefault(_api),
    _sensorsdata = require("./../utils/sensorsdata/sensorsdata.js"),
    _sensorsdata2 = _interopRequireDefault(_sensorsdata),
    CryptoJS = require("./../npm/crypto-js/index.js"),
    VisitorId = exports.VisitorId = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        })
    },
    getHeaderData = exports.getHeaderData = function() {
        var e = VisitorId(),
            t = wx.getStorageSync("loginInfo");
        return {
            "content-Type": "application/x-www-form-urlencoded",
            token: aesEncrypt(e),
            visitorid: e,
            udid: _sensorsdata2.default.store.getDistinctId(),
            uid: t ? t.uid : "",
            client: "mp",
            version: 3640
        }
    },
    cehomeRequest = exports.cehomeRequest = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments[2],
            o = (arguments[3], Object.assign(getHeaderData(), {}));
        return new Promise(function(a, s) {
            wx.request({
                method: r,
                url: e,
                data: Object.assign(t),
                header: o,
                success: function(e) {
                    a(e)
                },
                fail: function(e) {
                    return s(e)
                },
                complete: function(e) {
                    s(e)
                }
            })
        })
    };
module.exports = {
    cehomeRequest: cehomeRequest,
    Api: _api2.default,
    getHeaderData: getHeaderData
};