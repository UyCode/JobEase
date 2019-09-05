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
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    _createClass = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    Index = function(e) {
        function t() {
            var e, r, n, a;
            _classCallCheck(this, t);
            for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
            return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.props = {
                submitParams: {
                    twoWay: !0
                },
                showData: {
                    twoWay: !0
                }
            }, n.data = {
                sex: [{
                    className: "active",
                    label: "男",
                    value: 1
                }, {
                    className: "",
                    label: "女",
                    value: 2
                }]
            }, n.methods = {
                sexChange: function(e) {
                    var t = e.currentTarget.dataset.index,
                        r = e.currentTarget.dataset.sex;
                    this.submitParams.sex = r;
                    var n = this.sex.map(function(e, r) {
                        return t == r ? _extends({}, e, {
                            className: "active"
                        }) : _extends({}, e, {
                            className: ""
                        })
                    });
                    this.sex = n, this.$emit("editorData", 1, "personalSex", this.sex[t].value), this.$apply()
                },
                inputTextFun: function(e) {
                    var t = e.currentTarget.dataset.type,
                        r = e.detail.value;
                    this.$emit("editorData", 1, t, r)
                },
                chooseImage: function(e) {
                    this.$emit("chooseImage", 1, e.currentTarget.dataset.select)
                }
            }, a = r, _possibleConstructorReturn(n, a)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;