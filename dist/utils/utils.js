"use strict";

function Tyshyxdm() {
    this.firstarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], this.firstkeys = [3, 7, 9, 10, 5, 8, 4, 2], this.secondarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "W", "X", "Y"], this.secondkeys = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28], this.verify = function(t) {
        var r = t.toUpperCase();
        if (18 != r.length) return !1;
        var e = /^\w\w\d{6}\w{9}\w$/;
        if (!e.test(r)) return !1;
        if (e = /^[1,5,9,Y]\w\d{6}\w{9}\w$/, !e.test(r)) return !1;
        if (e = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/, !e.test(r)) return !1;
        if (e = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/, !e.test(r)) return !1;
        var s, i = this.calc(r.substr(8), this.firstarray, this.firstkeys, 11);
        if (i < 10 && (s = i), 10 == i ? s = "X" : 11 == i && (s = "0"), s != r.substr(16, 1)) return !1;
        var n = this.calc(r, this.secondarray, this.secondkeys, 31),
            a = this.secondarray[n];
        return !(!a || a != r.substr(17, 1)) && r == r.substr(0, 16) + s + a
    }, this.calc = function(t, r, e, s) {
        for (var i = 0, n = 0; n < e.length; n++) {
            var a = t[n];
            i += e[n] * r.indexOf(a)
        }
        return s - i % s
    }
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var isEmojiCharacter = exports.isEmojiCharacter = function(t) {
        if (/^[\u4e00-\u9fa5]{2,10}$/.test(t)) return !0
    },
    isID = exports.isID = function(t) {
        if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)) return !0
    },
    tyshyxdm = exports.tyshyxdm = function(t) {
        return (new Tyshyxdm).verify(t)
    },
    phoneVirtal = exports.phoneVirtal = function(t) {
        return /^1(([38]\d)|(4[57])|(5[012356789])|(6[6])|(7[0678])|(9[89]))\d{8}$/.test(t)
    },
    dateMinus = exports.dateMinus = function(t) {
        if (t) {
            var r = new Date(t.replace(/-/g, "/")),
                e = new Date,
                s = e.getTime() - r.getTime();
            return parseInt(s / 864e5)
        }
    },
    nowDate = exports.nowDate = function(t) {
        var r = void 0;
        r = t ? new Date(Number(t)) : new Date;
        var e = (r.getFullYear(), r.getMonth() + 1),
            s = r.getDate();
        if (e >= 1 && e <= 9 && (e = "0" + e), s >= 0 && s <= 9 && (s = "0" + s), t) {
            return r.getFullYear() + "-" + e + "-" + s
        }
        return r.getFullYear() + "-" + e + "-" + s
    },
    clearArrTrim = exports.clearArrTrim = function(t) {
        for (var r = 0; r < t.length; r++) "" != t[r] && void 0 !== t[r] || (t.splice(r, 1), r -= 1);
        return t
    };