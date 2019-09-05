"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function n(a, r) {
                try {
                    var o = t[a](r),
                        s = o.value
                } catch (e) {
                    return void i(e)
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e)
                }, function(e) {
                    n("throw", e)
                });
                e(s)
            }
            return n("next")
        })
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
    _api = require("./../common/api.js"),
    _api2 = _interopRequireDefault(_api),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _mixins = require("./../mixins/index.js"),
    _mixins2 = _interopRequireDefault(_mixins),
    _sidebar = require("./../components/sidebar.js"),
    _sidebar2 = _interopRequireDefault(_sidebar),
    Index = function(e) {
        function t() {
            var e, i, n, a;
            _classCallCheck(this, t);
            for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
            return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), n.config = {
                navigationBarTitleText: "选择城市"
            }, n.$repeat = {}, n.$props = {
                sidebar: {
                    "xmlns:v-bind": "",
                    "v-bind:sidebarInfo.sync": "sidebarInfo",
                    "v-bind:cityData.sync": "cityData",
                    "v-bind:allCity.sync": "allCity",
                    "v-bind:page.sync": "page"
                }
            }, n.$events = {}, n.components = {
                sidebar: _sidebar2.default
            }, n.mixins = [_mixins2.default], n.data = {
                scrollNeed: !0,
                page: "",
                cityData: null,
                cityIndex: null,
                sidebarInfo: {
                    show: !1
                },
                allCity: {
                    code: "",
                    province: "",
                    city: "",
                    district: ""
                },
                cityList: []
            }, n.watch = {
                cityList: function() {
                    this.cityData && (this.cityData = this.cityList[this.cityIndex], this.$apply())
                }
            }, n.methods = {
                choose: function(e, t) {
                    var i = this;
                    if ("index" == this.page) switch (String(e.code)) {
                        case "110000":
                        case "120000":
                        case "310000":
                        case "500000":
                            return this.allCity.province = e.name, this.allCity.city = "", this.allCity.code = e.code, this.$apply(), wx.setStorage({
                                key: "IndexChooseCity",
                                data: JSON.stringify(this.allCity)
                            }), void wx.navigateBack({
                                delta: 1
                            })
                    }
                    this.sidebarInfo.show = !0, e.children.length <= 0 ? (wx.showLoading(), _request2.default.cehomeRequest(_request2.default.Api.getCityList(), {
                        provinceCode: e.code
                    }, "GET").then(function(t) {
                        "0" === t.data.ret && (e.children = t.data.data, i.cityData = e, wx.hideLoading(), i.$apply())
                    })) : this.cityData = e, this.cityIndex = t, this.scrollNeed = !1, this.$apply()
                }
            }, n.events = {
                hide: function(e) {
                    n.sidebarInfo.show = !1, n.scrollNeed = !0, n.$apply()
                }
            }, a = i, _possibleConstructorReturn(n, a)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function(e) {
                var t = this;
                this.page = e.page, wx.showLoading(), wx.getStorage({
                    key: "allProvinceList1",
                    complete: function(e) {
                        if (e.data) {
                            var i = JSON.parse(e.data);
                            t.cityList = i, t.$apply(), wx.hideLoading()
                        } else t.getCityList()
                    }
                }), "index" == this.page ? wx.getStorage({
                    key: "IndexChooseCity",
                    complete: function() {
                        function e(e) {
                            return i.apply(this, arguments)
                        }
                        var i = _asyncToGenerator(regeneratorRuntime.mark(function e(i) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i.data && (n = JSON.parse(i.data), t.allCity = n, t.$apply());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }));
                        return e
                    }()
                }) : wx.getStorage({
                    key: "JOBchooseCity",
                    complete: function() {
                        function e(e) {
                            return i.apply(this, arguments)
                        }
                        var i = _asyncToGenerator(regeneratorRuntime.mark(function e(i) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i.data && (n = JSON.parse(i.data), t.allCity = n, t.$apply());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }));
                        return e
                    }()
                }), this.$apply()
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "indexORother",
            value: function(e) {
                "index" == this.page ? wx.setStorage({
                    key: "IndexChooseCity",
                    data: e,
                    success: function(e) {
                        wx.navigateBack({
                            delta: 1
                        })
                    }
                }) : wx.setStorage({
                    key: "JOBchooseCity",
                    data: e,
                    success: function(e) {
                        wx.navigateBack({
                            delta: 1
                        })
                    }
                })
            }
        }, {
            key: "getCityList",
            value: function() {
                var e = this;
                _request2.default.cehomeRequest(_request2.default.Api.getProvinceList(), {}, "GET").then(function(t) {
                    wx.hideLoading(), "0" === t.data.ret && (console.log(t.data.data), e.cityList = t.data.data, e.$apply(), wx.setStorage({
                        key: "allProvinceList1",
                        data: JSON.stringify(e.cityList)
                    }))
                }).catch(function(t) {
                    "request:fail timeout" == t.errMsg ? e.$parent.methods.showToast("网络请求超时~") : e.$parent.methods.showToast("网络好像有问题，请检查网络~")
                })
            }
        }]), t
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/chooseCity"));