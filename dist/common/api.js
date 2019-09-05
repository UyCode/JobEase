"use strict";

function EnvironmentSwitching(n) {
    return {
        solarapi: dev ? "https://solarapitest.cehome.com/app" : "https://solarapi.cehome.com/app",
        cehomeTiebaobei: dev ? "https://shenceapi.tiebaobei.com/sa?project=cehome_test" : "https://shenceapi.tiebaobei.com/sa?project=cehome"
    }[n]
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EnvironmentSwitching = EnvironmentSwitching;
var dev = !1,
    Api = {
        testFun: function() {
            return EnvironmentSwitching("solarapi") + "/appTopicPage/getPostList"
        },
        sensorsdata: function() {
            return EnvironmentSwitching("cehomeTiebaobei")
        },
        getOpenid: function() {
            return EnvironmentSwitching("solarapi") + "/wx/getWxSessionForJob"
        },
        getAllDictionarles: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/getAllDictionaries"
        },
        getResumeListByAd: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/listByAd"
        },
        getHiringDriverListByAd: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/listByAd"
        },
        sendVCOfRegisterLogin: function() {
            return EnvironmentSwitching("solarapi") + "/login/sendVCOfRegisterLogin"
        },
        registerLoginByMobileVC: function() {
            return EnvironmentSwitching("solarapi") + "/login/registerLoginByMobileVC"
        },
        getPhoneCode: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/sendVerificationCode"
        },
        addResume: function() {
            return EnvironmentSwitching("solarapi") + " /job/resume/add"
        },
        editResume: function() {
            return EnvironmentSwitching("solarapi") + " /job/resume/edit"
        },
        addJob: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/save"
        },
        editJob: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/edit"
        },
        adrove: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/authUser"
        },
        upImageFile: function() {
            return EnvironmentSwitching("solarapi") + "/upyun/uploadImage"
        },
        getUserByWxUnionid: function() {
            return EnvironmentSwitching("solarapi") + "/login/getUserByWxUnionid"
        },
        hiringDriverDetails: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/details"
        },
        myDetails: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/myDetails"
        },
        hiringDriverList: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/find"
        },
        resumeList: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/list"
        },
        getResumeDetail: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/detail"
        },
        findByUserId: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/findByUserId"
        },
        findByUserIdForLook: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/findByUserIdForLook"
        },
        callPhone: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/callPhone"
        },
        getAllDistrictGB: function() {
            return EnvironmentSwitching("solarapi") + "/district/getDistrictList"
        },
        getProvinceList: function() {
            return EnvironmentSwitching("solarapi") + "/district/getProvinceList"
        },
        getCityList: function() {
            return EnvironmentSwitching("solarapi") + "/district/getCityList"
        },
        myHiringDriver: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/myHiringDriver"
        },
        myResumeList: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/findByUserId"
        },
        myCollectJobs: function() {
            return EnvironmentSwitching("solarapi") + "/job/fav/findHiringDriver"
        },
        myCollectResume: function() {
            return EnvironmentSwitching("solarapi") + "/job/resume/favoriteList"
        },
        otherHiringJobs: function() {
            return EnvironmentSwitching("solarapi") + "/job/hiringDriver/findHiringDriverByUserId"
        },
        getJobUserInfo: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/getJobUserInfo"
        },
        gitFileSidnature: function() {
            return EnvironmentSwitching("solarapi") + "/tencent/getFileUploadSignature"
        },
        favAdd: function() {
            return EnvironmentSwitching("solarapi") + "/job/fav/add"
        },
        favCancel: function() {
            return EnvironmentSwitching("solarapi") + "/job/fav/cancel"
        },
        report: function() {
            return EnvironmentSwitching("solarapi") + "/job/complaint/add"
        },
        getUserAuthInfo: function() {
            return EnvironmentSwitching("solarapi") + "/job/common/getUserAuthInfo"
        }
    };
exports.default = Api;