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
                var s = t[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }
        return function(t, i, s) {
            return i && e(t.prototype, i), s && e(t, s), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _mixins = require("./../mixins/index.js"),
    _mixins2 = _interopRequireDefault(_mixins),
    Index = function(e) {
        function t() {
            var e, i, s, a;
            _classCallCheck(this, t);
            for (var r = arguments.length, o = Array(r), n = 0; n < r; n++) o[n] = arguments[n];
            return i = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), s.props = {
                chooseCity: {},
                loaderTitle: {},
                editorDataObject: {
                    twoWay: !0
                }
            }, s.mixins = [_mixins2.default], s.watch = {
                editorDataObject: function() {
                    this.newEditorData()
                }
            }, s.data = {
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
                            select: !1,
                            value: 5,
                            type: "driverType"
                        },
                        input: {
                            otherDeviceValue: "",
                            value: 99,
                            select: !1,
                            type: "driverType",
                            moreType: "otherDevice"
                        }
                    }
                },
                list: [{
                    name: "破碎锤",
                    show: !0,
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
                }],
                cutoffTime: "选择日期"
            }, s.methods = {
                selectFun: function(e, t, i) {
                    var s = void 0;
                    "device" === e ? (s = this.device.grab, this.device.others.type.select = !1, this.device.others.input.select = !1, this.list[0].show = !1, this.$emit("editorData", "otherDevice", "")) : s = this.list[i].types, s.forEach(function(e, i) {
                        e.select = !1, i === t && (e.select = !0)
                    }), this.$apply(), this.$emit("editorData", s[t].type, s[t].value)
                },
                deviceTypeSelect: function(e) {
                    this.device.others.type.select = !1, this.device.others.input.select = !1, this.device.grab.forEach(function(e, t) {
                        e.select = !1
                    }), this.device.others[e].select = !0, this.$emit("editorData", this.device.others[e].type, this.device.others[e].value), this.list[0].show = !0, this.$apply()
                },
                bindRegionChange: function(e) {
                    this.cutoffTime = e.detail.value;
                    var t = Date.parse(new Date(this.cutoffTime)) / 1e3;
                    this.$emit("editorData", "cutoffTime", t), this.$emit("editorData", "longTime", ""), this.$apply()
                },
                removeChooseFun: function() {
                    this.list[2].types[1].name === this.cutoffTime && (this.list[2].types[1].select = !1, this.$emit("editorData", this.list[2].types[1].type, ""), this.$apply())
                },
                textInput: function(e) {
                    var t = e.detail.value,
                        i = e.target.dataset.type;
                    this.$emit("editorData", i, t)
                },
                gotoLink: function(e) {
                    _wepy2.default.navigateTo({
                        url: "/pages/" + e
                    })
                }
            }, a = i, _possibleConstructorReturn(s, a)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {
                this.loaderTitle || (this.list.push({
                    name: "招聘实效",
                    types: [{
                        name: "长期有效",
                        select: !1,
                        value: 1,
                        type: "longTime"
                    }, {
                        name: "选择日期",
                        value: "选择日期",
                        type: "cutoffTime"
                    }]
                }), this.$apply())
            }
        }, {
            key: "newEditorData",
            value: function() {
                var e = this,
                    t = Number(this.editorDataObject.driverType);
                switch (t) {
                    case 2:
                    case 3:
                    case 4:
                        this.device.others.type.select = !1, this.device.others.input.select = !1, this.device.grab[t - 2].select = !0, this.list[0].show = !1, this.list[0].types.forEach(function(t, i) {
                            t.select = !1, e.editorDataObject.useHammerFlag - 1 == i && (t.select = !0)
                        }), this.device.others.input.otherDeviceValue = "";
                        break;
                    case 5:
                        this.device.others.type.select = !0, this.device.others.input.select = !1;
                        break;
                    default:
                        this.device.others.type.select = !1, this.device.others.input.select = !0, this.device.others.input.otherDeviceValue = this.editorDataObject.otherDevice
                }
                this.list[1].types[this.editorDataObject.drivingYears - 1].select = !0, this.loaderTitle || (1 == this.editorDataObject.longTime ? this.list[this.list.length - 1].types[0].select = !0 : this.cutoffTime = this.getCurrentDate(this.editorDataObject.cutoffTime)), this.$apply()
            }
        }]), t
    }(_wepy2.default.component);
exports.default = Index;