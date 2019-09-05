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
            for (var s = 0; s < t.length; s++) {
                var n = t[s];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, s, n) {
            return s && e(t.prototype, s), n && e(t, n), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    quantity = function(e) {
        function t() {
            var e, s, n, o;
            _classCallCheck(this, t);
            for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
            return s = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), n.config = {
                navigationBarTitleText: "工程类型"
            }, n.components = {}, n.data = {
                quantityList: [{
                    k: 1,
                    v: "土石方",
                    select: !1
                }, {
                    k: 3,
                    v: "绿化",
                    select: !1
                }, {
                    k: 4,
                    v: "场地平整",
                    select: !1
                }, {
                    k: 5,
                    v: "道路",
                    select: !1
                }, {
                    k: 6,
                    v: "建筑",
                    select: !1
                }, {
                    k: 7,
                    v: "工厂",
                    select: !1
                }, {
                    k: 8,
                    v: "农田改造",
                    select: !1
                }, {
                    k: 9,
                    v: "刷坡",
                    select: !1
                }, {
                    k: 10,
                    v: "矿山",
                    select: !1
                }, {
                    k: 11,
                    v: "拆迁",
                    select: !1
                }, {
                    k: 12,
                    v: "市政工程",
                    select: !1
                }, {
                    k: 13,
                    v: "隧道",
                    select: !1
                }, {
                    k: 99,
                    v: "其他",
                    select: !1
                }],
                chooseItems: []
            }, n.events = {}, n.methods = {
                chooseCompany: function(e) {
                    var t = e.target.dataset.index;
                    this.quantityList[t].select = !this.quantityList[t].select, this.quantityList[t].select || this.chooseItems.splice(this.chooseItems.itemIndex, 1), this.quantityList[t].select && (this.chooseItems.push({
                        itemIndex: this.chooseItems.length,
                        index: t,
                        value: this.quantityList[t].v,
                        key: this.quantityList[t].k
                    }), this.chooseItems.length > 3 && (this.quantityList[this.chooseItems[0].index].select = !1, this.chooseItems.splice(0, 1))), this.$apply()
                },
                sure: function() {
                    wx.setStorage({
                        key: "worksRelation",
                        data: JSON.stringify(this.chooseItems)
                    }), wx.navigateBack({
                        delta: 1
                    })
                }
            }, o = s, _possibleConstructorReturn(n, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {
                var e = this;
                wx.getStorage({
                    key: "worksRelation",
                    success: function(t) {
                        if (t.data) {
                            JSON.parse(t.data).forEach(function(t) {
                                e.quantityList.forEach(function(s, n) {
                                    t.key == s.k && (s.select = !0, e.chooseItems.push({
                                        itemIndex: e.chooseItems.length,
                                        index: n,
                                        value: s.v,
                                        key: s.k
                                    }))
                                })
                            }), e.$apply()
                        }
                    }
                })
            }
        }]), t
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(quantity, "pages/projectType"));