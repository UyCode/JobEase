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
});
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
    _utils = require("./../utils/utils.js"),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    Index = function(e) {
        function t() {
            var e, n, r, o;
            _classCallCheck(this, t);
            for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.config = {
                navigationBarTitleText: ""
            }, r.components = {}, r.data = {
                inputVal: ""
            }, r.watch = {}, r.methods = {
                phoneChange: function(e) {
                    this.inputVal = e.detail.value, this.$apply()
                },
                deleteVal: function() {
                    this.inputVal = "", this.$apply()
                },
                submit: function() {
                    "" == this.inputVal ? this.$parent.methods.showToast("手机号不能为空") : (0, _utils.phoneVirtal)(this.inputVal) ? wx.navigateTo({
                        url: "verificationCode?mobile=" + this.inputVal
                    }) : this.$parent.methods.showToast("手机号输入错误")
                }
            }, r.events = {}, o = n, _possibleConstructorReturn(r, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {}
        }]), t
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/register"));