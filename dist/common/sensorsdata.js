"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _sensorsdata = require("./../utils/sensorsdata/sensorsdata.js"),
    _sensorsdata2 = _interopRequireDefault(_sensorsdata),
    sensorsDataFun = {
        sensorsPublic: function() {
            _sensorsdata2.default.register({
                app_name: "招聘求职(小程序)",
                app_version: "v1.0.0"
            })
        },
        RelatedBurialPoint: function(e, t, a) {
            _sensorsdata2.default.track("myevent", {
                Category: e,
                action: t,
                Label: a || ""
            })
        },
        autoTrackPageShow: function(e) {
            _sensorsdata2.default.para.autoTrack.pageShow = {
                title: e
            }
        },
        getDistinctId: function() {
            return _sensorsdata2.default.store.getDistinctId()
        }
    };
exports.default = sensorsDataFun;