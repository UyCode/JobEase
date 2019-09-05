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
            var s = arguments[t];
            for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
        }
        return e
    },
    _createClass = function() {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var o = t[s];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, s, o) {
            return s && e(t.prototype, s), o && e(t, o), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _popup = require("./popup.js"),
    _popup2 = _interopRequireDefault(_popup),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _LoginMode = require("./LoginMode.js"),
    _LoginMode2 = _interopRequireDefault(_LoginMode),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, s, o, n;
            _classCallCheck(this, t);
            for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
            return s = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), o.props = {
                page: {
                    twoWay: !0
                },
                btnParams: {
                    twoWay: !0
                },
                datas: {}
            }, o.computed = {
                jobId: function() {
                    return this.btnParams.id
                }
            }, o.$repeat = {}, o.$props = {
                LoginMode: {
                    "xmlns:v-bind": "",
                    "v-bind:isClose.sync": "isClose"
                },
                popup: {
                    "v-bind:info.sync": "popupInfo"
                }
            }, o.$events = {}, o.components = {
                LoginMode: _LoginMode2.default,
                popup: _popup2.default
            }, o.data = {
                isClose: !0,
                popupInfo: {
                    show: !1
                }
            }, o.requestCollection = function() {
                var e = o.state.login.userInfo.uid,
                    t = 1 == o.btnParams.favoriteFlag ? _request2.default.Api.favCancel() : _request2.default.Api.favAdd();
                o.btnParams.jobId = o.jobId, o.btnParams.userId = e, _request2.default.cehomeRequest(t, _extends({}, o.btnParams, {
                    id: ""
                }), "GET").then(function(e) {}).catch(function(e) {})
            }, o.methods = {
                collection: function() {
                    "success" == this.state.login.status ? (this.requestCollection(), this.btnParams.favoriteFlag = 1 == this.btnParams.favoriteFlag ? 0 : 1) : (this.isClose = !1, this.$apply())
                },
                callPone: function() {
                    var e = this;
                    if ("success" != this.state.login.status) this.isClose = !1, this.$apply();
                    else {
                        var t = this.state.login.userInfo.uid;
                        this.state.login.userInfo.mobile;
                        this.btnParams.jobId = this.jobId, this.btnParams.userId = t, this.btnParams.distinctId = t;
                        var s = 2 == this.btnParams.jobType ? "求职" : "招聘";
                        this.$parent.$parent.sensorsPublic.RelatedBurialPoint("点击电话按钮", s);
                        var o = {
                            show: !0,
                            type: "tel",
                            callback: function(t) {
                                t && (e.btnParams.calledPhoneNumber = t, wx.showLoading(), _request2.default.cehomeRequest(_request2.default.Api.callPhone(), _extends({}, e.btnParams, {
                                    id: ""
                                }), "GET").then(function(t) {
                                    200 == t.statusCode && 0 == t.data.ret && (wx.hideLoading(), e.$parent.$parent.sensorsPublic.RelatedBurialPoint("拨通电话", s), wx.showToast({
                                        title: "电话拨通中...",
                                        icon: "none",
                                        duration: 4e3
                                    }), e.popupInfo.show = !1, e.$apply())
                                }).catch(function(e) {}))
                            }
                        };
                        this.popupInfo = o, this.$apply()
                    }
                },
                naviRoprt: function() {
                    if ("success" != this.state.login.status) this.isClose = !1, this.$apply();
                    else {
                        var e = this.state.login.userInfo.uid,
                            t = this.state.login.userInfo.mobile;
                        this.btnParams.jobId = this.btnParams.id, this.btnParams.userId = e, this.btnParams.userPhoneNumber = t, this.btnParams.distinctId = e, wx.setStorage({
                            key: "reportParams",
                            data: JSON.stringify(this.btnParams)
                        }), wx.navigateTo({
                            url: "report"
                        })
                    }
                },
                editor: function() {
                    var e = "";
                    1 == this.btnParams.jobType ? e = "postjob" : 2 == this.btnParams.jobType && (e = "postResume"), wx.setStorage({
                        key: "editorData",
                        data: JSON.stringify(this.datas)
                    }), wx.navigateTo({
                        url: e + "?type=editor&id=" + this.btnParams.id
                    })
                }
            }, n = s, _possibleConstructorReturn(o, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component)) || _class;
exports.default = Index;