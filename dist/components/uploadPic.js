"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
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
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, i, r) {
            return i && e(t.prototype, i), r && e(t, r), t
        }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    VodUploader = require("./../utils/vod-web-sdk-v5.js"),
    Index = function(e) {
        function t() {
            var e, i, r, s;
            _classCallCheck(this, t);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return i = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.props = {
                type: {
                    twoWay: !0
                },
                imagePaths: {
                    twoWay: !0
                },
                videoPaths: {
                    twoWay: !0
                }
            }, r.data = {
                submitFunDisabled: !1,
                imagePath: [],
                progressArr: [],
                imgUrls: [],
                videoUrls: [],
                videoSrc: "",
                hideVideoView: !1,
                imgLength: 6
            }, r.watch = {
                imagePaths: function() {
                    "resume" == this.type ? (this.imagePath = this.imagePaths, this.videoUrls = this.videoPaths) : this.imagePath = this.imagePaths, this.addProgress(), this.$apply()
                },
                submitFunDisabled: function() {
                    this.$emit("submitDisabledFun", this.submitFunDisabled)
                }
            }, r.methods = {
                videoFilePlay: function(e) {
                    "resume" == this.type ? (this.hideVideoView = !0, this.videoSrc = this.videoUrls[e], this.$apply()) : wx.previewImage({
                        current: this.imagePath[e],
                        urls: this.imagePath
                    })
                },
                hideVideo: function() {
                    this.hideVideoView = !1, this.$apply()
                },
                deleteFun: function(e) {
                    this.imagePath.splice(e, 1), this.progressArr.splice(e, 1), "resume" == this.type ? (this.videoUrls.splice(e, 1), this.$emit("upVideos", this.videoUrls, this.imagePath)) : (this.imgUrls.splice(e, 1), this.$emit("upimages", "sitePhoto", this.imgUrls)), this.$apply()
                },
                chooseImage: function() {
                    var e = this;
                    "resume" == this.type ? wx.chooseVideo({
                        sourceType: ["album", "camera"],
                        compressed: !0,
                        maxDuration: 60,
                        success: function(t) {
                            e.submitFunDisabled = !0;
                            var i = t.tempFilePath,
                                r = t.thumbTempFilePath ? t.thumbTempFilePath : "https://imgproduct.cehome.com/170518/8288c729c20deb3bb0e06ebcb0538f09.jpg",
                                s = i.substr(i.lastIndexOf("/") + 1);
                            if (e.imagePath.length > 6) return void e.$parent.$parent.$parent.methods.showToast("最多只能上传6个视频");
                            e.imagePath.push(r), wx.showLoading({
                                title: "上传视频"
                            }), e.upVideoFun(t, s, e.imagePath), e.$apply()
                        },
                        fail: function(t) {
                            e.$parent.$parent.$parent.methods.showToast("图片格式有误，请重新选择")
                        }
                    }) : wx.chooseImage({
                        count: this.imgLength,
                        sizeType: ["original", "compressed"],
                        sourceType: ["album", "camera"],
                        success: function(t) {
                            e.submitFunDisabled = !0;
                            var i = t.tempFilePaths;
                            if (i.length + e.imagePath.length > 6) return void e.$parent.$parent.$parent.methods.showToast("最多只能上传6张图片");
                            e.imagePath = [].concat(_toConsumableArray(e.imagePath), _toConsumableArray(i)), i.forEach(function(t) {
                                e.upImageFun(t)
                            }), e.$apply()
                        }
                    })
                }
            }, s = i, _possibleConstructorReturn(r, s)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {}
        }, {
            key: "addProgress",
            value: function() {
                var e = this;
                this.progressArr = [], this.imagePath.forEach(function(t, i) {
                    e.progressArr[i] = 100
                }), this.imgLength = 6 - this.imagePath.length, this.$apply()
            }
        }, {
            key: "getVideoSignature",
            value: function(e) {
                wx.request({
                    url: _request2.default.Api.gitFileSidnature(),
                    success: function(t) {
                        "0" == t.data.ret && e(t.data.data.signature)
                    }
                })
            }
        }, {
            key: "upImageFun",
            value: function(e) {
                var t = this,
                    i = this.imagePath.length - 1;
                this.progressArr[i] = .01, _wepy2.default.uploadFile({
                    url: _request2.default.Api.upImageFile(),
                    filePath: e,
                    name: "file",
                    header: _request2.default.getHeaderData(),
                    complete: function(e) {
                        var i = JSON.parse(e.data);
                        t.submitFunDisabled = !1, t.$apply(), "0" == i.ret ? (t.imgUrls.push(i.data), t.$emit("upimages", "sitePhoto", t.imgUrls), t.addProgress()) : _wepy2.default.showToast({
                            icon: "none",
                            title: "网络问题，请重新上传~",
                            duration: 1500
                        })
                    }
                }).onProgressUpdate(function(e) {
                    t.progressArr[i] = e.progress, t.$apply()
                })
            }
        }, {
            key: "upVideoFun",
            value: function(e, t, i) {
                var r = this,
                    s = i.length - 1;
                this.progressArr[s] = 1, VodUploader.start({
                    videoFile: e,
                    fileName: t,
                    getSignature: this.getVideoSignature,
                    success: function(e) {
                        r.videoUrls.push(e.Location), r.$emit("upVideos", r.videoUrls, i), wx.hideLoading(), r.submitFunDisabled = !1, r.$apply()
                    },
                    error: function(e) {
                        r.progressArr.splice(s, 1), r.imagePath.splice(s, 1), r.$apply(), wx.showToast({
                            title: "上传失败",
                            icon: "none",
                            duration: 1500
                        }), r.submitFunDisabled = !1, r.$apply()
                    },
                    progress: function(e) {
                        r.progressArr[s] = 100 * e.percent, r.$apply()
                    },
                    finish: function(e) {
                        wx.showToast({
                            title: "上传成功",
                            duration: 1200
                        })
                    }
                })
            }
        }]), t
    }(_wepy2.default.component);
exports.default = Index;