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
            var e, n, r, a;
            _classCallCheck(this, t);
            for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.props = {
                item: {},
                selectLoader: {
                    twoWay: !0
                }
            }, r.data = {
                device: {
                    grab: [{
                        name: "小挖",
                        amount: "13吨以下",
                        value: 2,
                        type: "driverType"
                    }, {
                        name: "中挖",
                        amount: "13-25吨",
                        value: 3,
                        type: "driverType"
                    }, {
                        name: "大挖",
                        amount: "25吨以上",
                        value: 4,
                        type: "driverType"
                    }],
                    others: {
                        type: {
                            name: "装载机",
                            select: !0,
                            value: 5,
                            type: "driverType"
                        },
                        input: {
                            otherDeviceValue: "",
                            value: 99,
                            select: !1,
                            type: "otherDevice"
                        }
                    }
                },
                list: [{
                    name: "破碎锤",
                    types: [{
                        name: "不限",
                        select: !1,
                        value: 1,
                        type: "useHammerFlag"
                    }, {
                        name: "会使用",
                        value: 2,
                        type: "useHammerFlag"
                    }]
                }, {
                    name: "驾龄要求",
                    types: [{
                        name: "不限",
                        value: 1,
                        type: "drivingYears"
                    }, {
                        name: "1年以上",
                        select: !1,
                        value: 2,
                        type: "drivingYears"
                    }, {
                        name: "3年以上",
                        value: 3,
                        type: "drivingYears"
                    }, {
                        name: "5年以上",
                        value: 4,
                        type: "drivingYears"
                    }]
                }, {
                    name: "招聘实效",
                    types: [{
                        name: "长期有效",
                        select: !1,
                        value: 1,
                        type: "longTime"
                    }, {
                        name: "选择日期",
                        value: "",
                        type: "cutoffTime"
                    }]
                }]
            }, r.watch = {
                selectLoader: function(e, t) {}
            }, r.methods = {
                bindDateChange: function(e) {
                    this.list[2].types[1].name = e.detail.value, this.$apply()
                },
                selectFun: function(e, t, n) {
                    var r = void 0;
                    "device" === e ? (r = this.device.grab, this.device.others.type.select = !1, this.device.others.input.select = !1) : r = this.list[n].types, r.forEach(function(e, n) {
                        e.select = !1, n === t && (e.select = !0)
                    }), this.$emit("editorData", r[t].type, r[t].value)
                },
                deviceTypeSelect: function(e) {
                    this.device.others.type.select = !1, this.device.others.input.select = !1, this.device.grab.forEach(function(e, t) {
                        e.select = !1
                    }), this.device.others[e].select = !0
                },
                gotoLink: function() {
                    _wepy2.default.navigateTo({
                        url: "/pages/chooseCity"
                    })
                }
            }, a = n, _possibleConstructorReturn(r, a)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component);
exports.default = Index;