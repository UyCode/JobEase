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
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    Index = function(e) {
        function t() {
            var e, o, n, r;
            _classCallCheck(this, t);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.props = {
                item: {
                    twoWay: !0
                },
                itemIndex: {
                    twoWay: !0
                },
                page: {
                    twoWay: !0
                }
            }, n.data = {
                auditStatus: {
                    1: "审核中",
                    2: "已通过",
                    3: "未通过"
                }
            }, n.methods = {
                navigate: function(e) {
                    if (e.auditStatus && 1 == e.auditStatus) return void wx.showToast({
                        title: "职位正在审核中，暂不能查看详情",
                        icon: "none",
                        duration: 3e3
                    });
                    wx.navigateTo({
                        url: "jobDetail?id=" + e.id + "&page=" + this.page
                    })
                }
            }, r = o, _possibleConstructorReturn(n, r)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;