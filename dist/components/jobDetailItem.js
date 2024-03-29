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
    Index = function(e) {
        function t() {
            var e, n, r, o;
            _classCallCheck(this, t);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.props = {
                loaderTitle: {}
            }, r.data = {
                info: [{
                    name: "联系人",
                    value: "",
                    type: "name"
                }, {
                    name: "联系电话",
                    value: "",
                    type: "tel"
                }]
            }, r.methods = {
                inputFun: function(e) {
                    var t = e.detail.value;
                    if ("tel" === e.target.dataset.type) {
                        if (!/^1(([38]\d)|(4[57])|(5[012356789])|(6[6])|(7[0678])|(9[89]))\d{8}$/.test(t)) return wx.showToast({
                            title: "请输入正确的手机号",
                            icon: "none",
                            duration: 1200
                        }), void this.$emit("editorData", "tel", "");
                        this.$emit("editorData", "tel", t)
                    } else if (t.length <= 0) return void wx.showToast({
                        title: "输入框不能为空",
                        icon: "none",
                        duration: 1200
                    });
                    this.$emit("editorData", e.target.dataset.type, t)
                }
            }, o = n, _possibleConstructorReturn(r, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;