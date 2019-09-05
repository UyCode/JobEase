"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var QQMapWX = require("./../utils/qqmap-wx-jssdk.js"),
    MapWx = new QQMapWX({
        key: "O5XBZ-6MMLG-KXBQT-IOK2Z-MPJ2K-76FTW"
    }),
    ReverseGeocoder = exports.ReverseGeocoder = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = arguments[1];
        MapWx.reverseGeocoder({
            location: {
                latitude: e ? e.latitude : 0,
                longitude: e ? e.longitude : 0
            },
            success: function(e) {
                o(e)
            },
            fail: function(e) {}
        })
    },
    qqmapwx = {
        ReverseGeocoder: ReverseGeocoder
    };
exports.default = qqmapwx;