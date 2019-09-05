"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _utils = require("./../utils/utils.js"),
    Group = function(t) {
        function e() {
            var t, o, n, i;
            _classCallCheck(this, e);
            for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
            return o = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), n.props = {
                info: {
                    twoWay: !0
                },
                productId: {
                    twoWay: !0
                }
            }, n.data = {
                telValue: ""
            }, n.components = {}, n.methods = {
                stop: function() {
                    this.info.show = !0, this.$apply()
                },
                change: function(t) {
                    var e = t.detail.value;
                    this.telValue = e, this.$apply()
                },
                sure: function() {
                    this.info.callback && this.info.callback("success"), this.info.show = !1
                },
                cancal: function() {
                    this.info.callback && this.info.callback("cancal"), this.info.show = !1
                },
                share: function() {
                    this.info.callback && this.info.callback("success"), this.info.show = !1
                },
                hidePopup: function() {
                    !this.info.type || "success" != this.info.type && "tel" != this.info.type || (this.info.show = !1)
                },
                callPhone: function() {
                    (0, _utils.phoneVirtal)(this.telValue) ? this.info.callback && this.info.callback(this.telValue): wx.showToast({
                        title: "手机号输入有误",
                        icon: "none",
                        duration: 2e3
                    })
                }
            }, i = o, _possibleConstructorReturn(n, i)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "onLoad",
            value: function() {}
        }]), e
    }(_wepy2.default.component);
exports.default = Group;