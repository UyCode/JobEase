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
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _mixins = require("./../mixins/index.js"),
    _mixins2 = _interopRequireDefault(_mixins),
    Sidebar = function(e) {
        function t() {
            var e, i, n, a;
            _classCallCheck(this, t);
            for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
            return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), n.props = {
                sidebarInfo: {},
                allCity: {
                    twoWay: !0
                },
                cityData: {},
                page: {}
            }, n.mixins = [_mixins2.default], n.components = {}, n.data = {
                modes: {}
            }, n.methods = {
                hide: function(e) {
                    this.$emit("hide", null)
                },
                chooseAll: function(e, t) {
                    switch (Number(t)) {
                        case 1:
                            this.allCity.province = e.name, this.allCity.code = e.code;
                            break;
                        case 2:
                            this.allCity.province = this.cityData.name, this.allCity.city = e.name, this.allCity.code = e.code
                    }
                    wx.setStorage({
                        key: "IndexChooseCity",
                        data: JSON.stringify(this.allCity)
                    }), wx.navigateBack({
                        delta: 1
                    })
                },
                chooseSeria: function(e, t) {
                    if ("index" === this.page) return this.allCity.province = this.cityData.name, this.allCity.city = e.name, this.allCity.code = e.code, this.$apply(), void wx.setStorage({
                        key: "IndexChooseCity",
                        data: JSON.stringify(this.allCity),
                        success: function(e) {
                            wx.navigateBack({
                                delta: 1
                            })
                        }
                    });
                    this.cityData.children.forEach(function(e, i) {
                        e.select = !1, t === i && (e.select = !0)
                    }), this.$apply()
                },
                chooseModel: function(e, t) {
                    this.allCity.province = this.cityData.name, this.allCity.city = e.name, this.allCity.code = e.children[t].code, this.allCity.district = e.children[t].name, this.$apply(), "index" == this.page ? wx.setStorage({
                        key: "IndexChooseCity",
                        data: JSON.stringify(this.allCity)
                    }) : wx.setStorage({
                        key: "JOBchooseCity",
                        data: JSON.stringify(this.allCity)
                    }), wx.navigateBack({
                        delta: 1
                    })
                }
            }, a = i, _possibleConstructorReturn(n, a)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Sidebar;