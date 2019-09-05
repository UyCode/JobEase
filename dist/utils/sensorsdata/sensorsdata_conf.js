"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var _api = require("./../../common/api.js"),
    _api2 = _interopRequireDefault(_api),
    conf = {
        name: "sensors",
        server_url: _api2.default.sensorsdata(),
        max_string_length: 300,
        use_client_time: !1,
        autoTrack: {
            appLaunch: !0,
            appShow: !0,
            appHide: !0,
            pageShow: !0
        }
    };
module.exports = conf;