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
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    Index = function(e) {
        function t() {
            var e, a, r, n;
            _classCallCheck(this, t);
            for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.props = {
                item: {},
                pageType: {
                    twoWay: !0
                },
                editorDataObject: {
                    twoWay: !0
                }
            }, r.watch = {
                editorDataObject: function() {
                    this.newEditorData()
                }
            }, r.data = {
                welfare: [{
                    name: "按天结",
                    value: 1,
                    select: !1,
                    input: !0,
                    type: "settlementType",
                    showValue: "",
                    priceType: "元／天",
                    list: [{
                        k: 11,
                        v: "100以下"
                    }, {
                        k: 12,
                        v: "100-200"
                    }, {
                        k: 13,
                        v: "200-300"
                    }, {
                        k: 14,
                        v: "300-400"
                    }, {
                        k: 15,
                        v: "400-500"
                    }, {
                        k: 16,
                        v: "500-600"
                    }, {
                        k: 17,
                        v: "600-700"
                    }, {
                        k: 18,
                        v: "700-800"
                    }, {
                        k: 19,
                        v: "800-900"
                    }, {
                        k: 110,
                        v: "900-1000"
                    }, {
                        k: 111,
                        v: "1000以上"
                    }]
                }, {
                    name: "按月结",
                    value: 2,
                    select: !1,
                    input: !0,
                    type: "settlementType",
                    showValue: "",
                    priceType: "元／月",
                    list: [{
                        k: 21,
                        v: "2000以下"
                    }, {
                        k: 22,
                        v: "2000-3000"
                    }, {
                        k: 23,
                        v: "3000-4000"
                    }, {
                        k: 24,
                        v: "4000-5000"
                    }, {
                        k: 25,
                        v: "5000-6000"
                    }, {
                        k: 26,
                        v: "6000-7000"
                    }, {
                        k: 27,
                        v: "7000-8000"
                    }, {
                        k: 28,
                        v: "8000-9000"
                    }, {
                        k: 29,
                        v: "9000-10000"
                    }, {
                        k: 210,
                        v: "10000以上"
                    }]
                }, {
                    name: "薪资面议",
                    select: !1,
                    input: !1,
                    value: 3,
                    type: "settlementType"
                }],
                more: [{
                    name: "包吃",
                    select: !1,
                    type: "moreWelfare",
                    value: 1
                }, {
                    name: "包住",
                    select: !1,
                    type: "moreWelfare",
                    value: 2
                }, {
                    name: "话费补助",
                    select: !1,
                    type: "moreWelfare",
                    value: 3
                }, {
                    name: "加班费",
                    select: !1,
                    type: "moreWelfare",
                    value: 4
                }, {
                    name: "上保险",
                    select: !1,
                    type: "moreWelfare",
                    value: 5
                }, {
                    name: "报销路费",
                    select: !1,
                    type: "moreWelfare",
                    value: 6
                }]
            }, r.methods = {
                selectFun: function(e, t) {
                    var a = this;
                    this[e].forEach(function(e, r) {
                        e.select = !1, r === t && (e.select = !0, e.input || a.$emit("editorData", e.type, e.value))
                    })
                },
                selectMoreFun: function(e, t) {
                    this[e][t].select = !this[e][t].select;
                    var a = [];
                    this[e].forEach(function(e) {
                        e.select && a.push(e.value)
                    }), this.$emit("editorData", "moreWelfare", a.join(","))
                },
                bindPickerChange: function(e) {
                    var t = e.detail.value,
                        a = e.target.dataset.index;
                    this.welfare[a].showValue = this.welfare[a].list[t].v, this.$emit("editorData", "settlementType", this.welfare[a].value), this.$emit("editorData", "settlementAmount", this.welfare[a].list[t].k)
                }
            }, n = a, _possibleConstructorReturn(r, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }, {
            key: "newEditorData",
            value: function() {
                var e = this,
                    t = this.editorDataObject.settlementType - 1;
                if (this.welfare[t].select = !0, 2 != t && (this.welfare[t].showValue = this.editorDataObject.settlementAmountStr, this.$emit("editorData", "settlementAmount", this.welfare[t].value)), this.$emit("editorData", "settlementType", this.editorDataObject.settlementType), this.editorDataObject.moreWelfare) {
                    var a = this.editorDataObject.moreWelfare.split(","),
                        r = [];
                    a.forEach(function(t, a) {
                        e.more[a].name == t && (e.more[a].select = !0, r.push(e.more[a].value))
                    }), this.$emit("editorData", "moreWelfare", r.join(","))
                }
                this.$apply()
            }
        }]), t
    }(_wepy2.default.component);
exports.default = Index;