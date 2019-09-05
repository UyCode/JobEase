"use strict";

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;
var _createClass = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }
        return function(e, i, a) {
            return i && t(e.prototype, i), a && t(e, a), e
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _uploadPic = require("./uploadPic.js"),
    _uploadPic2 = _interopRequireDefault(_uploadPic),
    Index = function(t) {
        function e() {
            var t, i, a, o;
            _classCallCheck(this, e);
            for (var r = arguments.length, n = Array(r), s = 0; s < r; s++) n[s] = arguments[s];
            return i = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(n))), a.$repeat = {}, a.$props = {
                uploadPic: {
                    "xmlns:v-bind": "",
                    "v-bind:type.sync": "pageType",
                    "v-bind:imagePaths.sync": "imagePaths",
                    "v-bind:videoPaths.sync": "videoPaths"
                }
            }, a.$events = {}, a.components = {
                uploadPic: _uploadPic2.default
            }, a.props = {
                item: {},
                worksRelation: {},
                pageType: {
                    twoWay: !0
                },
                editorDataObject: {
                    twoWay: !0
                },
                submitData: {
                    twoWay: !0
                },
                submitFunDisabled: {
                    twoWay: !0
                }
            }, a.data = {
                handleType: !1,
                imagePaths: [],
                videoPaths: [],
                otherWelfare: "",
                jobRequire: "",
                askFor: "",
                workExperience: "",
                jobNum: 1,
                handle: [{
                    name: "不限",
                    select: !1,
                    type: "operationDirection",
                    value: 1
                }, {
                    name: "正手",
                    select: !1,
                    type: "operationDirection",
                    value: 2
                }, {
                    name: "反手",
                    select: !1,
                    type: "operationDirection",
                    value: 3
                }],
                timer: [{
                    name: "白班",
                    select: !1,
                    type: "shiftType",
                    value: 1
                }, {
                    name: "夜班",
                    select: !1,
                    type: "shiftType",
                    value: 2
                }, {
                    name: "两班倒",
                    select: !1,
                    type: "shiftType",
                    value: 3
                }]
            }, a.events = {
                upimages: function(t, e) {
                    this.$emit("editorData", "sitePhoto", e.join(","))
                },
                upVideos: function(t, e) {
                    this.$emit("editorData", "videoPaths", t.join(",")), this.$emit("editorData", "videoThumbPaths", e.join(","))
                },
                submitDisabledFun: function(t) {
                    this.submitFunDisabled = t, this.$apply()
                }
            }, a.watch = {
                editorDataObject: function() {
                    this.newEditorData()
                },
                submitData: function() {
                    var t = this;
                    this.submitData.driverType < 5 ? (this.handleType = !0, this.handle.forEach(function(e, i) {
                        e.select && t.$emit("editorData", e.type, e.value)
                    }), this.editorDataObject && this.editorDataObject.operationDirection && this.$emit("editorData", "operationDirection", this.editorDataObject.operationDirection), this.$apply()) : (this.handleType = !1, this.$emit("editorData", "operationDirection", ""), this.$apply())
                }
            }, a.methods = {
                selectFun: function(t, e) {
                    var i = this;
                    this[t].forEach(function(t, a) {
                        t.select = !1, a === e && (t.select = !0, i.$emit("editorData", t.type, t.value))
                    })
                },
                textInput: function(t) {
                    var e = t.detail.value,
                        i = t.target.dataset.type;
                    this[i] = e, this.$apply(), this.$emit("editorData", i, e)
                },
                addFun: function() {
                    this.jobNum++, this.$apply(), this.$emit("editorData", "humanCount", this.jobNum)
                },
                removeFun: function() {
                    this.jobNum > 1 && (this.jobNum--, this.$apply(), this.$emit("editorData", "humanCount", this.jobNum))
                },
                gotoLink: function() {
                    _wepy2.default.navigateTo({
                        url: "/pages/projectType"
                    })
                }
            }, o = i, _possibleConstructorReturn(a, o)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "onLoad",
            value: function() {}
        }, {
            key: "newEditorData",
            value: function() {
                var t = this;
                if (this.editorDataObject.operationDirection && (this.handle[this.editorDataObject.operationDirection - 1].select = !0), this.editorDataObject.shiftType && (this.timer[this.editorDataObject.shiftType - 1].select = !0), this.worksRelation = this.editorDataObject.worksRelationStr, this.worksRelation) {
                    var e = this.editorDataObject.worksRelation.split(","),
                        i = this.editorDataObject.worksRelationStr.split(","),
                        a = [];
                    e.forEach(function(t, e) {
                        var o = {};
                        o.key = t, o.value = i[e], a.push(o)
                    }), wx.setStorage({
                        key: "worksRelation",
                        data: JSON.stringify(a)
                    })
                }
                if (2 == this.editorDataObject.videoFlag) {
                    var o = [],
                        r = [];
                    this.editorDataObject.videoList.forEach(function(t, e) {
                        o[e] = t.videoPath, r[e] = t.videoThumb ? t.videoThumb : ""
                    }), this.videoPaths = o, setTimeout(function() {
                        t.imagePaths = r, t.$apply()
                    }, 500)
                }
                this.editorDataObject.sitePhotoList && this.editorDataObject.sitePhotoList.length > 0 && (this.imagePaths = this.editorDataObject.sitePhotoList), this.otherWelfare = this.editorDataObject.otherWelfare, this.jobRequire = this.editorDataObject.jobRequire, this.askFor = this.editorDataObject.askFor, this.workExperience = this.editorDataObject.workExperience, this.editorDataObject.humanCount && (this.jobNum = this.editorDataObject.humanCount), this.$apply()
            }
        }]), e
    }(_wepy2.default.component);
exports.default = Index;