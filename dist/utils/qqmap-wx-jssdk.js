"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(e, i, o) {
            return i && t(e.prototype, i), o && t(e, o), e
        }
    }(),
    ERROR_CONF = {
        KEY_ERR: 311,
        KEY_ERR_MSG: "key格式错误",
        PARAM_ERR: 310,
        PARAM_ERR_MSG: "请求参数信息有误",
        SYSTEM_ERR: 600,
        SYSTEM_ERR_MSG: "系统错误",
        WX_ERR_CODE: 1e3,
        WX_OK_CODE: 200
    },
    BASE_URL = "https://apis.map.qq.com/ws/",
    URL_SEARCH = BASE_URL + "place/v1/search",
    URL_SUGGESTION = BASE_URL + "place/v1/suggestion",
    URL_GET_GEOCODER = BASE_URL + "geocoder/v1/",
    URL_CITY_LIST = BASE_URL + "district/v1/list",
    URL_AREA_LIST = BASE_URL + "district/v1/getchildren",
    URL_DISTANCE = BASE_URL + "distance/v1/",
    Utils = {
        location2query: function(t) {
            if ("string" == typeof t) return t;
            for (var e = "", i = 0; i < t.length; i++) {
                var o = t[i];
                e && (e += ";"), o.location && (e = e + o.location.lat + "," + o.location.lng), o.latitude && o.longitude && (e = e + o.latitude + "," + o.longitude)
            }
            return e
        },
        getWXLocation: function(t, e, i) {
            wx.getLocation({
                type: "gcj02",
                success: t,
                fail: e,
                complete: i
            })
        },
        getLocationParam: function(t) {
            if ("string" == typeof t) {
                t = 2 === t.split(",").length ? {
                    latitude: t.split(",")[0],
                    longitude: t.split(",")[1]
                } : {}
            }
            return t
        },
        polyfillParam: function(t) {
            t.success = t.success || function() {}, t.fail = t.fail || function() {}, t.complete = t.complete || function() {}
        },
        checkParamKeyEmpty: function(t, e) {
            if (!t[e]) {
                var i = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + e + "参数格式有误");
                return t.fail(i), t.complete(i), !0
            }
            return !1
        },
        checkKeyword: function(t) {
            return !this.checkParamKeyEmpty(t, "keyword")
        },
        checkLocation: function(t) {
            var e = this.getLocationParam(t.location);
            if (!e || !e.latitude || !e.longitude) {
                var i = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + " location参数格式有误");
                return t.fail(i), t.complete(i), !1
            }
            return !0
        },
        buildErrorConfig: function(t, e) {
            return {
                status: t,
                message: e
            }
        },
        buildWxRequestConfig: function(t, e) {
            var i = this;
            return e.header = {
                "content-type": "application/json"
            }, e.method = "GET", e.success = function(e) {
                var i = e.data;
                0 === i.status ? t.success(i) : t.fail(i)
            }, e.fail = function(e) {
                e.statusCode = ERROR_CONF.WX_ERR_CODE, t.fail(i.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, result.errMsg))
            }, e.complete = function(e) {
                switch (+e.statusCode) {
                    case ERROR_CONF.WX_ERR_CODE:
                        t.complete(i.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, e.errMsg));
                        break;
                    case ERROR_CONF.WX_OK_CODE:
                        var o = e.data;
                        0 === o.status ? t.complete(o) : t.complete(i.buildErrorConfig(o.status, o.message));
                        break;
                    default:
                        t.complete(i.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG))
                }
            }, e
        },
        locationProcess: function(t, e, i, o) {
            var r = this;
            if (i = i || function(e) {
                    e.statusCode = ERROR_CONF.WX_ERR_CODE, t.fail(r.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, e.errMsg))
                }, o = o || function(e) {
                    e.statusCode == ERROR_CONF.WX_ERR_CODE && t.complete(r.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, e.errMsg))
                }, t.location) {
                if (r.checkLocation(t)) {
                    var a = Utils.getLocationParam(t.location);
                    e(a)
                }
            } else r.getWXLocation(e, i, o)
        }
    },
    QQMapWX = function() {
        function t(e) {
            if (_classCallCheck(this, t), !e.key) throw Error("key值不能为空");
            this.key = e.key
        }
        return _createClass(t, [{
            key: "search",
            value: function(t) {
                var e = this;
                if (t = t || {}, Utils.polyfillParam(t), Utils.checkKeyword(t)) {
                    var i = {
                        keyword: t.keyword,
                        orderby: t.orderby || "_distance",
                        page_size: t.page_size || 10,
                        page_index: t.page_index || 1,
                        output: "json",
                        key: e.key
                    };
                    t.address_format && (i.address_format = t.address_format), t.filter && (i.filter = t.filter);
                    var o = t.distance || "1000",
                        r = t.auto_extend || 1,
                        a = function(e) {
                            i.boundary = "nearby(" + e.latitude + "," + e.longitude + "," + o + "," + r + ")", wx.request(Utils.buildWxRequestConfig(t, {
                                url: URL_SEARCH,
                                data: i
                            }))
                        };
                    Utils.locationProcess(t, a)
                }
            }
        }, {
            key: "getSuggestion",
            value: function(t) {
                var e = this;
                if (t = t || {}, Utils.polyfillParam(t), Utils.checkKeyword(t)) {
                    var i = {
                        keyword: t.keyword,
                        region: t.region || "全国",
                        region_fix: t.region_fix || 0,
                        policy: t.policy || 0,
                        output: "json",
                        key: e.key
                    };
                    wx.request(Utils.buildWxRequestConfig(t, {
                        url: URL_SUGGESTION,
                        data: i
                    }))
                }
            }
        }, {
            key: "reverseGeocoder",
            value: function(t) {
                var e = this;
                t = t || {}, Utils.polyfillParam(t);
                var i = {
                    coord_type: t.coord_type || 5,
                    get_poi: t.get_poi || 0,
                    output: "json",
                    key: e.key
                };
                t.poi_options && (i.poi_options = t.poi_options);
                var o = function(e) {
                    i.location = e.latitude + "," + e.longitude, wx.request(Utils.buildWxRequestConfig(t, {
                        url: URL_GET_GEOCODER,
                        data: i
                    }))
                };
                Utils.locationProcess(t, o)
            }
        }, {
            key: "geocoder",
            value: function(t) {
                var e = this;
                if (t = t || {}, Utils.polyfillParam(t), !Utils.checkParamKeyEmpty(t, "address")) {
                    var i = {
                        address: t.address,
                        output: "json",
                        key: e.key
                    };
                    wx.request(Utils.buildWxRequestConfig(t, {
                        url: URL_GET_GEOCODER,
                        data: i
                    }))
                }
            }
        }, {
            key: "getCityList",
            value: function(t) {
                var e = this;
                t = t || {}, Utils.polyfillParam(t);
                var i = {
                    output: "json",
                    key: e.key
                };
                wx.request(Utils.buildWxRequestConfig(t, {
                    url: URL_CITY_LIST,
                    data: i
                }))
            }
        }, {
            key: "getDistrictByCityId",
            value: function(t) {
                var e = this;
                if (t = t || {}, Utils.polyfillParam(t), !Utils.checkParamKeyEmpty(t, "id")) {
                    var i = {
                        id: t.id || "",
                        output: "json",
                        key: e.key
                    };
                    wx.request(Utils.buildWxRequestConfig(t, {
                        url: URL_AREA_LIST,
                        data: i
                    }))
                }
            }
        }, {
            key: "calculateDistance",
            value: function(t) {
                var e = this;
                if (t = t || {}, Utils.polyfillParam(t), !Utils.checkParamKeyEmpty(t, "to")) {
                    var i = {
                            mode: t.mode || "walking",
                            to: Utils.location2query(t.to),
                            output: "json",
                            key: e.key
                        },
                        o = function(e) {
                            i.from = e.latitude + "," + e.longitude, wx.request(Utils.buildWxRequestConfig(t, {
                                url: URL_DISTANCE,
                                data: i
                            }))
                        };
                    t.from && (t.location = t.from), Utils.locationProcess(t, o)
                }
            }
        }]), t
    }();
module.exports = QQMapWX;