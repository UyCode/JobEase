"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;
var _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    DEV_BUILD = !0,
    Mixin = function(e) {
        function t() {
            var e, n, r, o;
            _classCallCheck(this, t);
            for (var i = arguments.length, u = Array(i), a = 0; a < i; a++) u[a] = arguments[a];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), r.data = {
                host: DEV_BUILD ? "https://mtest.cehome.com/zhengji/api/" : "https://rentapi.cehome.com/",
                currentTime: ""
            }, r.methods = {
                tap: function() {}
            }, o = n, _possibleConstructorReturn(r, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShareAppMessage",
            value: function() {
                return {
                    title: "我在这里找替班司机，技术好还便宜",
                    path: "/pages/index",
                    imageUrl: "https://bbs.cehome.com/wxApp/jobResume/imgs/share.png",
                    success: function(e) {},
                    fail: function(e) {}
                }
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "onLoad",
            value: function() {
                this.getCurrentDate()
            }
        }, {
            key: "getCurrentDate",
            value: function(e) {
                var t = void 0;
                t = e ? new Date(1e3 * Number(e)) : new Date;
                var n = t.getMonth() + 1,
                    r = t.getDate();
                if (n >= 1 && n <= 9 && (n = "0" + n), r >= 0 && r <= 9 && (r = "0" + r), e) {
                    return t.getFullYear() + "-" + n + "-" + r
                }
                this.currentTime = t.getFullYear() + "-" + n + "-" + r
            }
        }]), t
    }(_wepy2.default.mixin);
exports.default = Mixin;