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
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _actions = require("./../store/actions/index.js"),
    loginMode = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }, {
        auth: _actions.auth
    }))(_class = function(e) {
        function t() {
            var e, n, r, o;
            _classCallCheck(this, t);
            for (var i = arguments.length, s = Array(i), u = 0; u < i; u++) s[u] = arguments[u];
            return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.data = {}, r.events = {}, r.watch = {}, r.methods = {
                onGotUserInfo: function(e) {
                    "getUserInfo:fail auth deny" == e.detail.errMsg || (this.methods.auth(), this.$emit("phoneAuthorizat", e))
                }
            }, o = n, _possibleConstructorReturn(r, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }]), t
    }(_wepy2.default.component)) || _class;
exports.default = loginMode;