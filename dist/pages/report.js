"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (e) {
                    return void r(e)
                }
                if (!s.done) return Promise.resolve(u).then(function(e) {
                    n("next", e)
                }, function(e) {
                    n("throw", e)
                });
                e(u)
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
    _LoginMode = require("./../components/LoginMode.js"),
    _LoginMode2 = _interopRequireDefault(_LoginMode),
    _userAuthorization = require("./../components/userAuthorization.js"),
    _userAuthorization2 = _interopRequireDefault(_userAuthorization),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    Index = function(e) {
        function t() {
            var e, r, n, o;
            _classCallCheck(this, t);
            for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
            return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.config = {
                navigationBarTitleText: "举报"
            }, n.components = {}, n.data = {
                indexItem: 3,
                value: "",
                selesctItem: [],
                requestParams: {
                    jobComplaintCause: ""
                }
            }, n.watch = {}, n.methods = {
                selectFun: function(e, t) {
                    var r = [];
                    this.requestParams.jobComplaintCause = t, r = this.selesctItem.map(function(t, r) {
                        return r == e ? _extends({}, t, {
                            selected: !0
                        }) : _extends({}, t, {
                            selected: !1
                        })
                    }), this.selesctItem = r, this.$apply()
                },
                valueChange: function(e) {
                    var t = e.detail.value;
                    this.value = t, this.requestParams.otherComplaintCause = t, this.$apply()
                },
                requestReport: function() {
                    var e = this;
                    if (99 == this.requestParams.jobComplaintCause && "" == this.value) return void this.$parent.methods.showToast("其他原因不能为空");
                    wx.getStorage({
                        key: "reportParams",
                        complete: function() {
                            function t(e) {
                                return r.apply(this, arguments)
                            }
                            var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                                var n;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            r.data ? (n = JSON.parse(r.data), delete n.id, _request2.default.cehomeRequest(_request2.default.Api.report(), Object.assign(e.requestParams, n), "GET").then(function(t) {
                                                200 == t.statusCode && 0 == t.data.ret ? (e.$parent.methods.showToast("成功举报"), setTimeout(function() {
                                                    wx.navigateBack({
                                                        delta: 1
                                                    })
                                                }, 2e3)) : e.$parent.methods.showToast(t.data.msg)
                                            }).catch(function(e) {})) : e.$parent.methods.showToast("请求参数不能为空");
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, e)
                            }));
                            return t
                        }()
                    })
                }
            }, n.events = {}, o = r, _possibleConstructorReturn(n, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {
                this.$parent.sensorsPublic.autoTrackPageShow("举报页"), this.getReportResron()
            }
        }, {
            key: "getReportResron",
            value: function() {
                var e = this;
                wx.getStorage({
                    key: "allDictionarles",
                    complete: function() {
                        function t(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r.data && (n = [], n = JSON.parse(r.data).COMPLAINT.map(function(e, t) {
                                            return _extends({}, e, {
                                                selected: !1
                                            })
                                        }), e.selesctItem = n, e.$apply());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }));
                        return t
                    }()
                })
            }
        }, {
            key: "onShow",
            value: function() {}
        }]), t
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/report"));