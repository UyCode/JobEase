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
    Index = function(e) {
        function t() {
            var e, r, n, o;
            _classCallCheck(this, t);
            for (var a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
            return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.props = {
                item: {},
                editorDataObject: {
                    twoWay: !0
                }
            }, n.watch = {
                editorDataObject: function() {
                    this.newEditorData()
                }
            }, n.data = {
                list: [{
                    name: "拖车驾驶",
                    types: [{
                        name: "会驾驶",
                        select: !1,
                        value: 1,
                        type: "trailerFlag"
                    }, {
                        name: "不会驾驶",
                        value: 2,
                        type: "trailerFlag"
                    }]
                }, {
                    name: "维修保养",
                    types: [{
                        name: "懂维修保养",
                        value: 1,
                        type: "repairFlag"
                    }, {
                        name: "不懂维修",
                        select: !1,
                        value: 2,
                        type: "repairFlag"
                    }]
                }]
            }, n.methods = {
                selectFun: function(e, t, r) {
                    var n = void 0;
                    n = this.list[r].types, n.forEach(function(e, r) {
                        e.select = !1, r === t && (e.select = !0)
                    }), this.$emit("editorData", n[t].type, n[t].value)
                }
            }, o = r, _possibleConstructorReturn(n, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }, {
            key: "newEditorData",
            value: function() {
                var e = this;
                this.list.forEach(function(t) {
                    var r = e.editorDataObject[t.types[0].type];
                    r && "" !== r && (t.types[r - 1].select = !0)
                }), this.$apply()
            }
        }]), t
    }(_wepy2.default.component);
exports.default = Index;