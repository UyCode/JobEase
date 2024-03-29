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
            for (var a = arguments.length, l = Array(a), u = 0; u < a; u++) l[u] = arguments[u];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.props = {
                item: {}
            }, r.data = {
                welfare: [{
                    name: "按天结",
                    value: "",
                    select: !0,
                    input: !0
                }, {
                    name: "按月结",
                    value: "",
                    select: !1,
                    input: !0
                }, {
                    name: "薪资面议",
                    select: !1,
                    input: !1
                }],
                more: [{
                    name: "包吃",
                    select: !1
                }, {
                    name: "包住",
                    select: !1
                }, {
                    name: "话费补助",
                    select: !1
                }, {
                    name: "加班费",
                    select: !0
                }, {
                    name: "上保险",
                    select: !1
                }, {
                    name: "报销路费",
                    select: !1
                }]
            }, r.methods = {}, o = n, _possibleConstructorReturn(r, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;