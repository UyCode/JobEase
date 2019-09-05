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
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _LoginMode = require("./../components/LoginMode.js"),
    _LoginMode2 = _interopRequireDefault(_LoginMode),
    _userAuthorization = require("./../components/userAuthorization.js"),
    _userAuthorization2 = _interopRequireDefault(_userAuthorization),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, o, r, n;
            _classCallCheck(this, t);
            for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
            return o = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.config = {
                navigationBarTitleText: ""
            }, r.$repeat = {}, r.$props = {
                LoginMode: {
                    "xmlns:v-bind": "",
                    "v-bind:isClose.sync": "isClose"
                }
            }, r.$events = {}, r.components = {
                LoginMode: _LoginMode2.default,
                userAuthorization: _userAuthorization2.default
            }, r.data = {
                auditStatus: 0,
                resumeId: "",
                isClose: !0
            }, r.watch = {
                state: function() {
                    this.getEditorData(this.state.login.userInfo.uid)
                }
            }, r.methods = {
                navigator: function(e) {
                    if ("success" == this.state.login.status) {
                        var t = e.currentTarget.dataset.page,
                            o = "postjob" == t ? "发布职位" : "发布简历";
                        this.$parent.sensorsPublic.RelatedBurialPoint("点击发布选项", o), 1 == this.auditStatus && "postjob" != t ? wx.showToast({
                            title: "简历正在审核中，暂不能重新发布",
                            icon: "none",
                            duration: 4e3
                        }) : this.resumeId && "postjob" != t ? wx.navigateTo({
                            url: t + "?type=editor&id=" + escape(this.resumeId)
                        }) : wx.navigateTo({
                            url: t
                        })
                    } else this.isClose = !1, this.$apply()
                }
            }, n = o, _possibleConstructorReturn(r, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShow",
            value: function() {
                this.$parent.sensorsPublic.autoTrackPageShow("发布选项页"), this.state.login.userInfo && this.getEditorData(this.state.login.userInfo.uid)
            }
        }, {
            key: "onPullDownRefresh",
            value: function() {
                setTimeout(function() {
                    wx.stopPullDownRefresh()
                }, 2e3), this.state.login.userInfo && this.getEditorData(this.state.login.userInfo.uid)
            }
        }, {
            key: "getEditorData",
            value: function(e) {
                var t = this;
                _request2.default.cehomeRequest(_request2.default.Api.myResumeList(), {
                    userId: e
                }, "POST").then(function(e) {
                    "0" == e.data.ret && (t.auditStatus = e.data.data.auditStatus, t.resumeId = e.data.data.id, wx.setStorage({
                        key: "myResumeEditorData",
                        data: JSON.stringify(e.data.data)
                    }), t.$apply())
                })
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/release"));