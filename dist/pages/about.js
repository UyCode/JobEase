"use strict";

function _interopRequireDefault(t) { return t && t.__esModule ? t : { default: t } }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _possibleConstructorReturn(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var _createClass = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(e, n, o) { return n && t(e.prototype, n), o && t(e, o), e }
    }(),
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    Index = function(t) {
        function e() {
            var t, n, o, r;
            _classCallCheck(this, e);
            for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
            return n = o = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a))), o.config = { navigationBarTitleText: "" }, o.components = {}, o.data = { about: { homeAbout: [{ title: "如何快速的找到好老板/机手?", content: "在首页选择地点、设备类型、薪资范围、经验要求等相关标签后，地图上会显示出符合您要求的工作/简历数量，点击数字即可打开列表页，看到您心仪的工作/简历。" }, { title: "如何提升自己在求职招聘时的竞争力？", content: "1.在-我的-我的认证中进行个人信息上传，完成实名认证，点亮图标，可以让你在人群中脱颖而出。\n2.认真填写职位/简历信息，资料越详细，找到好工作/好司机的几率越高。" }, { title: "如何发布简历/职位?", content: "点击列表页下方的发布按钮，您可根据您的身份自主选择发布" }, { title: "如何关闭职位/简历信息?", content: "在-我的-我的发布中找到并点开你想关闭的职位/简历信息，选择编辑，即可进行状态设置。" }, { title: "如何看职位/简历信息的发布人是谁?", content: "在职位/简历信息详情页下方有发布人信息，点击即可进入职位/简历发布人的个人主页，查看他的所有历史发布。" }, { title: "职位表页显示的就是你们为我推荐好的吗?", content: "职位表页、招聘列表显示的内容是自动定位到您目前所在区域的，您可根据自身需求通过筛选下拉菜单进行设置。" }, { title: "发布招聘/职位收费吗?", content: "铁甲向您承诺，所有职位不向您收费，如有不实或提出收费，请立即举报。" }, { title: "为什么来电是北京010电话，不显示对方的联系电话?", content: "电话号码关乎个人信息安全，做好隐私保护，安全防范，采用双向呼叫机制，通话双方都显示铁甲电话" }, { title: "我怎么联系对方?", content: "在电话咨询时输入自己的手机号码，3分钟内会有铁甲来电到您手机；铁甲来电接通之后，会自动拨到对方手机" }, { title: "打电话收费吗?", content: "铁甲向您承诺，所有通过铁甲的通话行为均不产生费用，请您放心使用。" }, { title: "招聘信息都是真的吗?", content: "铁甲是一个公共的平台，求职招聘作为一个工具是希望为大家提供快速便捷的服务，所以建议甲友在联系信息的时候，提高防范意识，用自己的专业知识技能经验去辨别。如有问题，请您及时点击职位或简历页面的“电话咨询”按钮旁的“举报”按钮进行举报，工作人员会及时作出处理" }], jobAbout: [{ title: "是所有的资料都要填写吗？", content: "红色*号为必填项。其他为选填项，可根据实际情况选择性填写(资料填写越详细，找到好工作/好司机的几率越高)" }, { title: "确认发布就有信息展示吗？", content: "确认发布之后，24小时内会有工作人员对您的信息进行审核，审核通过即可展示" }, { title: "职位发布的截止日期是指什么？", content: "截止日期是您停止招聘的日期到达截止日期后，您的招聘信息会自动隐藏。" }] }, type: "jobAbout" }, o.watch = {}, o.methods = {}, o.events = {}, r = n, _possibleConstructorReturn(o, r)
        }
        return _inherits(e, t), _createClass(e, [{ key: "onLoad", value: function(t) { t.type && (this.type = t.type, wx.setNavigationBarTitle({ title: "homeAbout" == t.type ? "常见问题" : "关于发布" }), this.$apply()) } }, { key: "onShow", value: function() {} }]), e
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/about"));