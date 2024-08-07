/* clarity-js v0.7.34: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return Ja
            },
            get start() {
                return Ba
            },
            get stop() {
                return Ga
            },
            get track() {
                return Ya
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return gr
            },
            get compute() {
                return mr
            },
            get data() {
                return cr
            },
            get keys() {
                return sr
            },
            get reset() {
                return br
            },
            get start() {
                return pr
            },
            get stop() {
                return wr
            },
            get trigger() {
                return vr
            },
            get update() {
                return yr
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return Sr
            },
            get compute() {
                return Mr
            },
            get data() {
                return ur
            },
            get start() {
                return Tr
            },
            get stop() {
                return _r
            },
            get trigger() {
                return xr
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return Rr
            },
            get data() {
                return Ir
            },
            get log() {
                return Ar
            },
            get reset() {
                return Lr
            },
            get start() {
                return Cr
            },
            get stop() {
                return jr
            },
            get updates() {
                return Dr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return Hr
            },
            get clear() {
                return Vr
            },
            get consent() {
                return Fr
            },
            get data() {
                return zr
            },
            get electron() {
                return Pr
            },
            get id() {
                return Ur
            },
            get metadata() {
                return qr
            },
            get save() {
                return Br
            },
            get shortid() {
                return Kr
            },
            get start() {
                return Xr
            },
            get stop() {
                return Yr
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return ai
            },
            get envelope() {
                return oi
            },
            get start() {
                return ri
            },
            get stop() {
                return ii
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null,
            delayDom: !1,
            throttleDom: !0
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
            n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
        return Math.max(Math.round(e + n - c), 0)
    }
    var l = "0.7.34";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            O();
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return E(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return E(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
                break;
            case 5:
                switch (e) {
                    case "*T":
                    case "data-":
                        return k(t, "▪", "▫");
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                    case "src":
                    case "srcset":
                    case "alt":
                    case "title":
                        return ""
                }
        }
        return t
    }

    function b(t, e) {
        if (void 0 === e && (e = !1), e) return "".concat("https://").concat("Electron");
        var n = o.drop;
        if (n && n.length > 0 && t && t.indexOf("?") > 0) {
            var a = t.split("?"),
                r = a[0],
                i = a[1];
            return r + "?" + i.split("&").map((function(t) {
                return n.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function y(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t, e, n) {
        return O(), t ? t.replace(v, e).replace(p, n) : t
    }

    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function O() {
        if (h && null === p) try {
            p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var N = null,
        T = null,
        S = !1;

    function x() {
        S && (N = {
            time: s(),
            event: 4,
            data: {
                visible: T.visible,
                docWidth: T.docWidth,
                docHeight: T.docHeight,
                screenWidth: T.screenWidth,
                screenHeight: T.screenHeight,
                scrollX: T.scrollX,
                scrollY: T.scrollY,
                pointerX: T.pointerX,
                pointerY: T.pointerY,
                activityTime: T.activityTime,
                scrollTime: T.scrollTime
            }
        }), T = T || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0
        }
    }

    function M(t, e, n, a) {
        switch (t) {
            case 8:
                T.docWidth = e, T.docHeight = n;
                break;
            case 11:
                T.screenWidth = e, T.screenHeight = n;
                break;
            case 10:
                T.scrollX = e, T.scrollY = n, T.scrollTime = a;
                break;
            default:
                T.pointerX = e, T.pointerY = n
        }
        S = !0
    }

    function _(t) {
        T.activityTime = t
    }

    function I(t, e) {
        T.visible = "visible" === e ? 1 : 0, T.visible || _(t), S = !0
    }

    function D() {
        S && Nr(4)
    }
    var C = Object.freeze({
            __proto__: null,
            activity: _,
            compute: D,
            reset: x,
            start: function() {
                S = !1, x()
            },
            get state() {
                return N
            },
            stop: function() {
                x()
            },
            track: M,
            visibility: I
        }),
        j = null;

    function A(t, e) {
        Ni() && t && "string" == typeof t && t.length < 255 && (j = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, Nr(24))
    }
    var R, L = null,
        z = null;

    function H(t) {
        t in L || (L[t] = 0), t in z || (z[t] = 0), L[t]++, z[t]++
    }

    function P(t, e) {
        null !== e && (t in L || (L[t] = 0), t in z || (z[t] = 0), L[t] += e, z[t] += e)
    }

    function W(t, e) {
        null !== e && !1 === isNaN(e) && (t in L || (L[t] = 0), (e > L[t] || 0 === L[t]) && (z[t] = e, L[t] = e))
    }

    function X(t, e, n) {
        return window.setTimeout(si(t), e, n)
    }

    function Y(t) {
        return window.clearTimeout(t)
    }
    var q = 0,
        U = 0,
        F = null;

    function V() {
        F && Y(F), F = X(B, U), q = s()
    }

    function B() {
        var t = s();
        R = {
            gap: t - q
        }, Nr(25), R.gap < 3e5 ? F = X(B, U) : ki && (A("clarity", "suspend"), Wi(), ["mousemove", "touchstart"].forEach((function(t) {
            return di(document, t, Si)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return di(window, t, Si)
        })))
    }
    var J = Object.freeze({
            __proto__: null,
            get data() {
                return R
            },
            reset: V,
            start: function() {
                U = 6e4, q = 0
            },
            stop: function() {
                Y(F), q = 0, U = 0
            }
        }),
        G = null;

    function K(t, e) {
        if (t in G) {
            var n = G[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? G[t].push([e, 0]) : a[1] = e - a[0]
        } else G[t] = [
            [e, 0]
        ]
    }

    function Z() {
        Nr(36)
    }

    function Q() {
        G = {}
    }
    var $ = Object.freeze({
            __proto__: null,
            compute: Z,
            get data() {
                return G
            },
            reset: Q,
            start: function() {
                G = {}
            },
            stop: function() {
                G = {}
            },
            track: K
        }),
        tt = null;

    function et(t) {
        Ni() && o.lean && (o.lean = !1, tt = {
            key: t
        }, Br(), o.upgrade && o.upgrade(t), Nr(3))
    }
    var nt = Object.freeze({
        __proto__: null,
        get data() {
            return tt
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), tt = null
        },
        stop: function() {
            tt = null
        },
        upgrade: et
    });

    function at(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function rt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var it = null;

    function ot(t, e) {
        ct(t, "string" == typeof e ? [e] : e)
    }

    function ut(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), at(this, void 0, void 0, (function() {
            var r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, dt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")), ct("userId", [(r = i).userId]), ct("userHint", [r.userHint]), ct("userType", [ft(t)]), e && (ct("sessionId", [e]), r.sessionId = e), n && (ct("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function ct(t, e) {
        if (Ni() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            it[t] = n
        }
    }

    function st() {
        Nr(34)
    }

    function lt() {
        it = {}
    }

    function dt(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ft(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function pt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return at(this, void 0, void 0, (function() {
                                    return rt(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, vt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function vt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var gt = null;

    function mt(t) {
        try {
            if (!gt) return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                gt(t)
            }))
        } catch (t) {}
    }
    var bt = [C, a, Object.freeze({
        __proto__: null,
        compute: st,
        get data() {
            return it
        },
        identify: ut,
        reset: lt,
        set: ot,
        start: function() {
            lt()
        },
        stop: function() {
            lt()
        }
    }), n, $, r, i, t, J, nt, e];

    function yt() {
        L = {}, z = {}, H(5), bt.forEach((function(t) {
            return si(t.start)()
        }))
    }

    function wt() {
        bt.slice().reverse().forEach((function(t) {
            return si(t.stop)()
        })), L = {}, z = {}
    }

    function kt() {
        st(), D(), Rr(), Nr(0), Z(), Mr(), mr()
    }
    var Et, Ot = [];

    function Nt(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (Et = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, Ot.indexOf(Et.checksum) < 0 && (Ot.push(Et.checksum), ar(41)))
    }
    var Tt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        St = {};

    function xt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return Mt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in St || (St[c] = []), St[c].indexOf(t.id) < 0 && St[c].push(t.id), i = "".concat(c).concat("~").concat(St[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && Mt(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function Mt(t) {
        if (!t) return !1;
        if (Tt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var _t = 1,
        It = null,
        Dt = [],
        Ct = [],
        jt = {},
        At = [],
        Rt = [],
        Lt = [],
        zt = [],
        Ht = [],
        Pt = [],
        Wt = null,
        Xt = null,
        Yt = null,
        qt = null;

    function Ut() {
        Vt(), Bt(document, !0)
    }

    function Ft() {
        Vt()
    }

    function Vt() {
        _t = 1, Dt = [], Ct = [], jt = {}, At = [], Rt = [], Lt = "address,password,contact".split(","), zt = "password,secret,pass,social,ssn,code,hidden".split(","), Ht = "radio,checkbox,range,button,reset,submit".split(","), Pt = "INPUT,SELECT,TEXTAREA".split(","), It = new Map, Wt = new WeakMap, Xt = new WeakMap, Yt = new WeakMap, qt = new WeakMap, St = {}
    }

    function Bt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? Rt.push(t) : At.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Ke(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return qt.set(t, e[0])
                }))
            })), Rt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 0)
                }))
            })))
        } catch (t) {
            or(5, 1, t ? t.name : null)
        }
    }

    function Jt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Wt.get(t);
        return !n && e && (n = _t++, Wt.set(t, n)), n || null
    }

    function Gt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Xt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Kt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Xt.has(e) ? Xt.get(e) : null
    }

    function Zt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Qt(t) {
        var e = t.parent && t.parent in Dt ? Dt[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = Dt[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [xt(i, 0), xt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return jt[e] = t.id
        }))
    }

    function $t(t) {
        var e = te(ne(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function te(t) {
        return It.has(t) ? It.get(t) : null
    }

    function ee(t) {
        var e = Jt(t);
        return e in Dt ? Dt[e] : null
    }

    function ne(t) {
        return t in jt ? jt[t] : null
    }

    function ae(t) {
        return It.has(Jt(t))
    }

    function re() {
        for (var t = [], e = 0, n = Ct; e < n.length; e++) {
            var a = n[e];
            a in Dt && t.push(Dt[a])
        }
        return Ct = [], t
    }

    function ie(t) {
        if (It.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            It.delete(t);
            var e = t in Dt ? Dt[t] : null;
            if (e && e.children)
                for (var n = 0, a = e.children; n < a.length; n++) {
                    ie(a[n])
                }
        }
    }

    function oe(t) {
        for (var e = null; null === e && t.previousSibling;) e = Jt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function ue(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = Ct.indexOf(t);
        r >= 0 && 1 === e && a ? (Ct.splice(r, 1), Ct.push(t)) : -1 === r && n && Ct.push(t)
    }
    var ce = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = Jt(t, !0),
                    u = e ? Jt(e) : null,
                    c = oe(t),
                    s = null,
                    l = Ze(t) ? i : null,
                    d = qt.has(t) ? qt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && Dt[u] && ((s = Dt[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Ke(t, n.attributes["data-clarity-region"]), l = i), It.set(i, t), Dt[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case Pt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "";
                                Object.keys(o).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var l = zt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && Ht.indexOf(c) >= 0 ? i : l ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Yt.has(t):
                                r.privacy = Yt.get(t);
                                break;
                            case qt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var d = n && n.data ? n.data.tag : "",
                                    f = n && n.selector ? n.selector[1] : "",
                                    h = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = h.includes(d) || At.some((function(t) {
                                    return f.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, Lt, r)
                        }
                    }(t, Dt[i], s), Qt(Dt[i]), "IMG" === (r = Dt[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), ue(i, a)
            },
            get: ee,
            getId: Jt,
            getNode: te,
            getValue: function(t) {
                return t in Dt ? Dt[t] : null
            },
            has: ae,
            hashText: $t,
            iframe: Kt,
            lookup: ne,
            parse: Bt,
            sameorigin: Gt,
            start: Ut,
            stop: Ft,
            update: function(t, e, n, a) {
                var r = Jt(t),
                    i = e ? Jt(e) : null,
                    o = oe(t),
                    u = !1,
                    c = !1;
                if (r in Dt) {
                    var s = Dt[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : Dt[i].children.indexOf(o) + 1;
                            Dt[i].children.splice(d, 0, r), s.region = Ze(t) ? r : Dt[i].region
                        } else ! function(t, e) {
                            if (t in Dt) {
                                var n = Dt[t];
                                n.metadata.active = !1, n.parent = null, ue(t, e), ie(t)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = Dt[l].children.indexOf(r);
                            f >= 0 && Dt[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Zt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Qt(s), ue(r, a, u, c)
                }
            },
            updates: re
        }),
        se = 5e3,
        le = {},
        de = [],
        fe = null,
        he = null,
        pe = null;

    function ve() {
        le = {}, de = [], fe = null, he = null
    }

    function ge(t, e) {
        return void 0 === e && (e = 0), at(this, void 0, void 0, (function() {
            var n, a, r;
            return rt(this, (function(i) {
                for (n = 0, a = de; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    de[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: Ur()
                    })
                })), null === fe && null === he && me(), [2, r]
            }))
        }))
    }

    function me() {
        var t = de.shift();
        t && (fe = t, t.task().then((function() {
            t.id === Ur() && (t.resolve(), fe = null, me())
        })).catch((function(e) {
            t.id === Ur() && (e && or(0, 1, e.name, e.message, e.stack), fe = null, me())
        })))
    }

    function be(t) {
        var e = Ee(t);
        return e in le ? performance.now() - le[e].start > le[e].yield ? 0 : 1 : 2
    }

    function ye(t) {
        le[Ee(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function we(t) {
        var e = performance.now(),
            n = Ee(t),
            a = e - le[n].start;
        P(t.cost, a), H(5), le[n].calls > 0 && P(4, a)
    }

    function ke(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Ee(t)) in le ? (we(t), n = le[e], [4, Oe()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Ee(t);
                                if (le && le[e]) {
                                    var n = le[e].calls,
                                        a = le[e].yield;
                                    ye(t), le[e].calls = n + 1, le[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in le ? 1 : 2]
                }
            }))
        }))
    }

    function Ee(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function Oe() {
        return at(this, void 0, void 0, (function() {
            return rt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return he ? [4, he] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Te(t, {
                                timeout: se
                            })
                        }))]
                }
            }))
        }))
    }
    var Ne, Te = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Se() {
        Ne = null
    }

    function xe() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== Ne && c === Ne.width && v === Ne.height || null === c || null === v || (Ne = {
            width: c,
            height: v
        }, We(8))
    }
    var Me = [],
        _e = [],
        Ie = null,
        De = null,
        Ce = null,
        je = null,
        Ae = "clarityAnimationId",
        Re = "clarityOperationCount",
        Le = 20;

    function ze() {
        _e = []
    }

    function He(t, e, n, a, r, i, o) {
        _e.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), We(44)
    }

    function Pe(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            if (Ni()) {
                var n = this.effect,
                    a = Jt(this.effect.target);
                if (null !== a && n.getKeyframes && n.getTiming) {
                    if (!this[Ae]) {
                        this[Ae] = Kr(), this[Re] = 0;
                        var r = n.getKeyframes(),
                            i = n.getTiming();
                        He(s(), this[Ae], 0, JSON.stringify(r), JSON.stringify(i), a)
                    }
                    if (this[Re]++ < Le) {
                        var o = null;
                        switch (e) {
                            case "play":
                                o = 1;
                                break;
                            case "pause":
                                o = 2;
                                break;
                            case "cancel":
                                o = 3;
                                break;
                            case "finish":
                                o = 4
                        }
                        o && He(s(), this[Ae], o)
                    }
                }
            }
            return t.apply(this, arguments)
        })
    }

    function We(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), at(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, b, y, w, k, E, O, N, T, S, x, I, D, C, j, A, R, L;
            return rt(this, (function(z) {
                switch (z.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                                return [3, 3];
                            case 46:
                                return [3, 4];
                            case 44:
                                return [3, 5];
                            case 5:
                            case 6:
                                return [3, 6]
                        }
                        return [3, 13];
                    case 1:
                        return i = Ne, r.push(i.width), r.push(i.height), M(t, i.width, i.height), Ja(r), [3, 13];
                    case 2:
                        for (u = 0, c = Ue; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Ja(r);
                        return nn(), [3, 13];
                    case 3:
                        for (d = 0, f = Me; d < f.length; d++) b = f[d], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.newIds), Ja(r);
                        return [3, 13];
                    case 4:
                        for (h = 0, p = Me; h < p.length; h++) b = p[h], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.cssRules), Ja(r);
                        z.label = 5;
                    case 5:
                        for (v = 0, g = _e; v < g.length; v++) b = g[v], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.keyFrames), r.push(b.data.timing), r.push(b.data.timeline), r.push(b.data.targetId), Ja(r);
                        return ze(), [3, 13];
                    case 6:
                        if (2 === be(e)) return [3, 13];
                        if (!((y = re()).length > 0)) return [3, 12];
                        w = 0, k = y, z.label = 7;
                    case 7:
                        return w < k.length ? (E = k[w], 0 !== (O = be(e)) ? [3, 9] : [4, ke(e)]) : [3, 11];
                    case 8:
                        O = z.sent(), z.label = 9;
                    case 9:
                        if (2 === O) return [3, 11];
                        for (N = E.data, T = E.metadata.active, S = E.metadata.suspend, x = E.metadata.privacy, I = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(E), D = 0, C = T ? ["tag", "attributes", "value"] : ["tag"]; D < C.length; D++)
                            if (N[j = C[D]]) switch (j) {
                                case "tag":
                                    A = Xe(E), R = I ? -1 : 1, r.push(E.id * R), E.parent && T && (r.push(E.parent), E.previous && r.push(E.previous)), r.push(S ? "*M" : N[j]), A && 2 === A.length && r.push("".concat("#").concat(Ye(A[0]), ".").concat(Ye(A[1])));
                                    break;
                                case "attributes":
                                    for (L in N[j]) void 0 !== N[j][L] && r.push(qe(L, N[j][L], x));
                                    break;
                                case "value":
                                    Nt(E.metadata.fraud, E.id, N[j]), r.push(m(N[j], N.tag, x, I))
                            }
                        z.label = 10;
                    case 10:
                        return w++, [3, 7];
                    case 11:
                        6 === t && _(a), Ja(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), z.label = 12;
                    case 12:
                        return [3, 13];
                    case 13:
                        return [2]
                }
            }))
        }))
    }

    function Xe(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = te(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ye(t) {
        return t.toString(36)
    }

    function qe(t, e, n) {
        return "".concat(t, "=").concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var Ue = [],
        Fe = null,
        Ve = {},
        Be = [],
        Je = !1,
        Ge = null;

    function Ke(t, e) {
        !1 === Fe.has(t) && (Fe.set(t, e), (Ge = null === Ge && Je ? new IntersectionObserver($e, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Ge) && t && t.nodeType === Node.ELEMENT_NODE && Ge.observe(t))
    }

    function Ze(t) {
        return Fe && Fe.has(t)
    }

    function Qe() {
        for (var t = [], e = 0, n = Be; e < n.length; e++) {
            var a = n[e],
                r = Jt(a.node);
            r ? (a.state.data.id = r, Ve[r] = a.state.data, Ue.push(a.state)) : t.push(a)
        }
        Be = t, Ue.length > 0 && We(7)
    }

    function $e(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Fe.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Jt(r) : null,
                    s = c in Ve ? Ve[c] : {
                        id: c,
                        name: Fe.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                tn(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Ge && Ge.unobserve(r)
            }
        }
        Ue.length > 0 && We(7)
    }

    function tn(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ve && r || !(e.id in Ve)) && (Ve[e.id] = e, Ue.push(en(e))) : Be.push({
            node: t,
            state: en(e)
        })
    }

    function en(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function nn() {
        Ue = []
    }
    var an = [];

    function rn(t) {
        var e = Da(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 24) : "";
            an.push({
                time: s(t),
                event: 42,
                data: {
                    target: Da(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), ge(ja.bind(this, 42))
        }
    }

    function on() {
        an = []
    }

    function un(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Kt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var cn = ["input", "textarea", "radio", "button", "canvas"],
        sn = [];

    function ln(t) {
        di(t, "click", dn.bind(this, 9, t), !0)
    }

    function dn(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = un(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = Da(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (sn.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: hn(c),
                context: pn(l),
                text: fn(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), ge(ja.bind(this, t)))
    }

    function fn(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }

    function hn(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (cn.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function pn(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function vn() {
        sn = []
    }
    var gn = [];

    function mn(t, e) {
        gn.push({
            time: s(e),
            event: 38,
            data: {
                target: Da(e),
                action: t
            }
        }), ge(ja.bind(this, 38))
    }

    function bn() {
        gn = []
    }
    var yn = null,
        wn = [];

    function kn(t) {
        var e = Da(t),
            n = ee(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            wn.length > 0 && wn[wn.length - 1].data.target === r.target && wn.pop(), wn.push({
                time: s(t),
                event: 27,
                data: r
            }), Y(yn), yn = X(En, 1e3, 27)
        }
    }

    function En(t) {
        ge(ja.bind(this, t))
    }

    function On() {
        wn = []
    }
    var Nn, Tn = [],
        Sn = null;

    function xn(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = un(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && _n({
            time: s(n),
            event: t,
            data: {
                target: Da(n),
                x: i,
                y: o
            }
        })
    }

    function Mn(t, e, n) {
        var a = Kt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && _n({
                    time: o,
                    event: t,
                    data: {
                        target: Da(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function _n(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = Tn.length,
                    n = e > 1 ? Tn[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && Tn.pop(), Tn.push(t), Y(Sn), Sn = X(In, 500, t.event);
                break;
            default:
                Tn.push(t), In(t.event)
        }
    }

    function In(t) {
        ge(ja.bind(this, t))
    }

    function Dn() {
        Tn = []
    }

    function Cn() {
        var t = document.documentElement;
        Nn = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, ja(11)
    }

    function jn() {
        Nn = null
    }
    var An = [],
        Rn = null,
        Ln = null,
        zn = null;

    function Hn(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? Da(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Kt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            c = window.innerHeight,
            l = u / 3,
            d = u > c ? .15 * c : .2 * c,
            f = c - d,
            h = Pn(l, d),
            p = Pn(l, f),
            v = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o,
                    top: h,
                    bottom: p
                }
            };
        if (null === t && 0 === i && 0 === o || null === i || null === o) return Rn = h, void(Ln = p);
        var g = An.length,
            m = g > 1 ? An[g - 2] : null;
        m && function(t, e) {
            var n = t.data.x - e.data.x,
                a = t.data.y - e.data.y;
            return n * n + a * a < 400 && e.time - t.time < 25
        }(m, v) && An.pop(), An.push(v), Y(zn), zn = X(Wn, 500, 10)
    }

    function Pn(t, e) {
        var n, a, r;
        return "caretPositionFromPoint" in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint" in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer), r || (r = document.elementFromPoint(t, e)), r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode), r
    }

    function Wn(t) {
        ge(ja.bind(this, t))
    }

    function Xn() {
        var t, e;
        if (Rn) {
            var n = Ca(Rn, null);
            Ar(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
        }
        if (Ln) {
            var a = Ca(Ln, null);
            Ar(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
        }
    }
    var Yn = null,
        qn = null,
        Un = null;

    function Fn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = Yn.start ? Yn.start : null;
            null !== qn && null !== Yn.start && n !== e.anchorNode && (Y(Un), Vn(21)), Yn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, qn = e, Y(Un), Un = X(Vn, 500, 21)
        }
    }

    function Vn(t) {
        ge(ja.bind(this, t))
    }

    function Bn() {
        qn = null, Yn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Jn, Gn, Kn = [];

    function Zn(t) {
        Kn.push({
            time: s(t),
            event: 39,
            data: {
                target: Da(t)
            }
        }), ge(ja.bind(this, 39))
    }

    function Qn() {
        Kn = []
    }

    function $n(t) {
        Jn = {
            name: t.type
        }, ja(26, s(t)), Wi()
    }

    function ta() {
        Jn = null
    }

    function ea(t) {
        void 0 === t && (t = null), Gn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, ja(28, s(t))
    }

    function na() {
        Gn = null
    }

    function aa(t) {
        ! function(t) {
            var e = Kt(t);
            di(e ? e.contentWindow : t === document ? window : t, "scroll", Hn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (ln(t), function(t) {
            di(t, "cut", mn.bind(this, 0), !0), di(t, "copy", mn.bind(this, 1), !0), di(t, "paste", mn.bind(this, 2), !0)
        }(t), function(t) {
            di(t, "mousedown", xn.bind(this, 13, t), !0), di(t, "mouseup", xn.bind(this, 14, t), !0), di(t, "mousemove", xn.bind(this, 12, t), !0), di(t, "wheel", xn.bind(this, 15, t), !0), di(t, "dblclick", xn.bind(this, 16, t), !0), di(t, "touchstart", Mn.bind(this, 17, t), !0), di(t, "touchend", Mn.bind(this, 18, t), !0), di(t, "touchmove", Mn.bind(this, 19, t), !0), di(t, "touchcancel", Mn.bind(this, 20, t), !0)
        }(t), function(t) {
            di(t, "input", kn, !0)
        }(t), function(t) {
            di(t, "selectstart", Fn.bind(this, t), !0), di(t, "selectionchange", Fn.bind(this, t), !0)
        }(t), function(t) {
            di(t, "change", rn, !0)
        }(t), function(t) {
            di(t, "submit", Zn, !0)
        }(t))
    }
    var ra = Object.freeze({
            __proto__: null,
            observe: aa,
            start: function() {
                Aa = [], La(), vn(), bn(), Dn(), On(), di(window, "resize", Cn), Cn(), di(document, "visibilitychange", ea), ea(), An = [], Hn(), Bn(), on(), Qn(), di(window, "pagehide", $n)
            },
            stop: function() {
                Aa = [], La(), vn(), bn(), Y(Sn), Tn.length > 0 && In(Tn[Tn.length - 1].event), Y(yn), On(), jn(), na(), Y(zn), An = [], Rn = null, Ln = null, Bn(), Y(Un), on(), Qn(), ta()
            }
        }),
        ia = /[^0-9\.]/g;

    function oa(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    Ar(5, t[a]), Ar(8, t.creator), Ar(18, t.headline);
                    break;
                case "product":
                    Ar(5, t[a]), Ar(10, t.name), Ar(12, t.sku), t.brand && Ar(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (W(11, ua(t.ratingValue, 100)), W(18, ua(t.bestRating)), W(19, ua(t.worstRating))), W(12, ua(t.ratingCount)), W(17, ua(t.reviewCount));
                    break;
                case "person":
                    Ar(8, t.name);
                    break;
                case "offer":
                    Ar(7, t.availability), Ar(14, t.itemCondition), Ar(13, t.priceCurrency), Ar(12, t.sku), W(13, ua(t.price));
                    break;
                case "brand":
                    Ar(6, t.name)
            }
            null !== r && "object" == typeof r && oa(r)
        }
    }

    function ua(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(ia, "")) * e)
        }
        return null
    }
    var ca = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label"],
        sa = /[\r\n]+/g;

    function la(t, e, n) {
        var a, r = null;
        if (2 === e && !1 === ae(t)) return r;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var i = !1 === ae(t) ? "add" : "update",
            o = t.parentElement ? t.parentElement : null,
            u = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                o = u && t.parentNode ? Kt(t.parentNode) : o;
                var c = t,
                    s = {
                        tag: (u ? "iframe:" : "") + "*D",
                        attributes: {
                            name: c.name,
                            publicId: c.publicId,
                            systemId: c.systemId
                        }
                    };
                ce[i](t, o, s, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Bt(document), da(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var l = t;
                if (l.host)
                    if (Bt(l), "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                        da(l);
                        var d = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        ce[i](t, l.host, d, e)
                    } else ce[i](t, l.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (o = o || t.parentNode, "update" === i || o && ae(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName) {
                    var f = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    ce[i](t, o, f, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var h = t,
                    p = h.tagName,
                    v = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                ca.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(h);
                switch (o = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p), p) {
                    case "HTML":
                        o = u && o ? Kt(o) : null;
                        var g = {
                            tag: (u ? "iframe:" : "") + p,
                            attributes: v
                        };
                        ce[i](t, o, g, e);
                        break;
                    case "SCRIPT":
                        if ("type" in v && "application/ld+json" === v.type) try {
                            oa(JSON.parse(h.text.replace(sa, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var m = {
                            tag: p,
                            attributes: {},
                            value: ""
                        };
                        ce[i](t, o, m, e);
                        break;
                    case "META":
                        var b = "property" in v ? "property" : "name" in v ? "name" : null;
                        if (b && "content" in v) {
                            var y = v.content;
                            switch (v[b]) {
                                case "og:title":
                                    Ar(20, y);
                                    break;
                                case "og:type":
                                    Ar(19, y);
                                    break;
                                case "generator":
                                    Ar(21, y)
                            }
                        }
                        break;
                    case "HEAD":
                        var w = {
                                tag: p,
                                attributes: v
                            },
                            k = u && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location;
                        w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname, ce[i](t, o, w, e);
                        break;
                    case "BASE":
                        var E = ee(t.parentElement);
                        if (E) {
                            var O = document.createElement("a");
                            O.href = v.href, E.data.attributes["*B"] = O.protocol + "//" + O.host + O.pathname
                        }
                        break;
                    case "STYLE":
                        var N = {
                            tag: p,
                            attributes: v,
                            value: fa(h)
                        };
                        ce[i](t, o, N, e);
                        break;
                    case "IFRAME":
                        var T = t,
                            S = {
                                tag: p,
                                attributes: v
                            };
                        Gt(T) && (! function(t) {
                            !1 === ae(t) && di(t, "load", Ia.bind(this, t, "childList"), !0)
                        }(T), S.attributes["*O"] = "true", T.contentDocument && T.contentWindow && "loading" !== T.contentDocument.readyState && (r = T.contentDocument)), ce[i](t, o, S, e);
                        break;
                    case "LINK":
                        if (Pr && "stylesheet" === v.rel) {
                            for (var x in Object.keys(document.styleSheets)) {
                                var M = document.styleSheets[x];
                                if (M.ownerNode == h) {
                                    var _ = {
                                        tag: "STYLE",
                                        attributes: v,
                                        value: ha(M)
                                    };
                                    ce[i](t, o, _, e);
                                    break
                                }
                            }
                            break
                        }
                        var I = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, I, e);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in v && v.src.startsWith("data:") && (v.src = "");
                        var D = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, D, e);
                        break;
                    default:
                        var C = {
                            tag: p,
                            attributes: v
                        };
                        h.shadowRoot && (r = h.shadowRoot), ce[i](t, o, C, e)
                }
        }
        return r
    }

    function da(t) {
        ae(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](si(Ta)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), va.push(n))
            } catch (t) {
                or(2, 0, t ? t.name : null)
            }
        }(t), aa(t))
    }

    function fa(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = ha(t.sheet)), e
    }

    function ha(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (or(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function pa(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return rt(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = be(e)) ? [3, 3] : [4, ke(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = la(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var va = [],
        ga = [],
        ma = null,
        ba = null,
        ya = null,
        wa = [],
        ka = null,
        Ea = null,
        Oa = {};

    function Na() {
        if (va = [], wa = [], ka = null, Ea = 0, Oa = {}, null === ma && (ma = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                return Ni() && _a(this.ownerNode), ma.apply(this, arguments)
            }), null === ba && (ba = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                return Ni() && _a(this.ownerNode), ba.apply(this, arguments)
            }), null === ya) {
            ya = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return Ni() ? _a(ya.apply(this, arguments)) : ya.apply(this, arguments)
                }
            } catch (t) {
                ya = null
            }
        }
    }

    function Ta(t) {
        var e = s();
        K(6, e), ga.push({
            time: e,
            mutations: t
        }), ge(Sa, 1).then((function() {
            X(xe), si(Qe)()
        }))
    }

    function Sa() {
        return at(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, u, c, l, d;
            return rt(this, (function(f) {
                switch (f.label) {
                    case 0:
                        ye(t = {
                            id: Ur(),
                            cost: 3
                        }), f.label = 1;
                    case 1:
                        if (!(ga.length > 0)) return [3, 8];
                        e = ga.shift(), n = s(), a = 0, r = e.mutations, f.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (u = be(t)) ? [3, 4] : [4, ke(t)]) : [3, 6];
                    case 3:
                        u = f.sent(), f.label = 4;
                    case 4:
                        if (2 === u) return [3, 6];
                        switch (c = i.target, l = o.throttleDom ? function(t, e, n, a) {
                            var r = t.target ? ee(t.target.parentNode) : null;
                            if (r && "HTML" !== r.data.tag) {
                                var i = a > Ea,
                                    o = ee(t.target),
                                    u = o && o.selector ? o.selector.join() : t.target.nodeName,
                                    c = [r.selector ? r.selector.join() : "", u, t.attributeName, xa(t.addedNodes), xa(t.removedNodes)].join();
                                Oa[c] = c in Oa ? Oa[c] : [0, n];
                                var s = Oa[c];
                                if (!1 === i && s[0] >= 10 && Ma(s[2], 2, e), s[0] = i ? s[1] === n ? s[0] : s[0] + 1 : 1, s[1] = n, 10 === s[0]) return s[2] = t.removedNodes, "suspend";
                                if (s[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n, e.time) : i.type, l && c && c.ownerDocument && Bt(c.ownerDocument), l && c && c.nodeType == Node.DOCUMENT_FRAGMENT_NODE && c.host && Bt(c), l) {
                            case "attributes":
                                la(c, 3, e.time);
                                break;
                            case "characterData":
                                la(c, 4, e.time);
                                break;
                            case "childList":
                                Ma(i.addedNodes, 1, t, e.time), Ma(i.removedNodes, 2, t, e.time);
                                break;
                            case "suspend":
                                (d = ee(c)) && (d.metadata.suspend = !0)
                        }
                        f.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, We(6, t, e.time)];
                    case 7:
                        return f.sent(), [3, 1];
                    case 8:
                        return we(t), [2]
                }
            }))
        }))
    }

    function xa(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function Ma(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (pa(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = be(n)) ? [3, 4] : [4, ke(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        la(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function _a(t) {
        return wa.indexOf(t) < 0 && wa.push(t), ka && Y(ka), ka = X((function() {
            ! function() {
                for (var t = 0, e = wa; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && ae(n)) continue;
                        Ia(n, a ? "childList" : "characterData")
                    }
                }
                wa = []
            }()
        }), 33), t
    }

    function Ia(t, e) {
        si(Ta)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function Da(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return Ea = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function Ca(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = ee(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = te(t),
                        a = t in Ve ? Ve[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Fe.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    tn(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Nt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function ja(t, e) {
        return void 0 === e && (e = null), at(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, y, w, k, E, O, N, T, S, x, _, D, C, j, A, R, L, z, H, P, W, X;
            return rt(this, (function(Y) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = Tn; r < i.length; r++) W = i[r], (o = Ca(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(o.id), a.push(W.data.x), a.push(W.data.y), Ja(a), M(W.event, W.data.x, W.data.y));
                        Dn();
                        break;
                    case 9:
                        for (u = 0, c = sn; u < c.length; u++) W = c[u], l = Ca(W.data.target, W.event, W.data.text), a = [W.time, W.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(W.data.x), a.push(W.data.y), a.push(W.data.eX), a.push(W.data.eY), a.push(W.data.button), a.push(W.data.reaction), a.push(W.data.context), a.push(m(W.data.text, "click", l.privacy)), a.push(b(W.data.link)), a.push(d), a.push(W.data.trust), Ja(a), za(W.time, W.event, d, W.data.x, W.data.y, W.data.reaction, W.data.context);
                        vn();
                        break;
                    case 38:
                        for (f = 0, h = gn; f < h.length; f++) W = h[f], a = [W.time, W.event], (z = Ca(W.data.target, W.event)).id > 0 && (a.push(z.id), a.push(W.data.action), Ja(a));
                        bn();
                        break;
                    case 11:
                        p = Nn, a.push(p.width), a.push(p.height), M(t, p.width, p.height), jn(), Ja(a);
                        break;
                    case 26:
                        v = Jn, a.push(v.name), ta(), Ja(a);
                        break;
                    case 27:
                        for (g = 0, y = wn; g < y.length; g++) W = y[g], w = Ca(W.data.target, W.event, W.data.value), (a = [W.time, W.event]).push(w.id), a.push(m(W.data.value, "input", w.privacy)), Ja(a);
                        On();
                        break;
                    case 21:
                        (k = Yn) && (E = Ca(k.start, t), O = Ca(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), Bn(), Ja(a));
                        break;
                    case 10:
                        for (N = 0, T = An; N < T.length; N++) W = T[N], S = Ca(W.data.target, W.event), x = Ca(W.data.top, W.event), _ = Ca(W.data.bottom, W.event), D = (null == x ? void 0 : x.hash) ? x.hash.join(".") : "", C = (null == _ ? void 0 : _.hash) ? _.hash.join(".") : "", S.id > 0 && ((a = [W.time, W.event]).push(S.id), a.push(W.data.x), a.push(W.data.y), a.push(D), a.push(C), Ja(a), M(W.event, W.data.x, W.data.y, W.time));
                        An = [], Rn = null, Ln = null;
                        break;
                    case 42:
                        for (j = 0, A = an; j < A.length; j++) W = A[j], a = [W.time, W.event], (z = Ca(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(z.id), a.push(W.data.type), a.push(m(W.data.value, "change", z.privacy)), a.push(m(W.data.checksum, "checksum", z.privacy)), Ja(a));
                        on();
                        break;
                    case 39:
                        for (R = 0, L = Kn; R < L.length; R++) W = L[R], a = [W.time, W.event], (z = Ca(W.data.target, W.event)).id > 0 && (a.push(z.id), Ja(a));
                        Qn();
                        break;
                    case 22:
                        for (H = 0, P = Ra; H < P.length; H++) W = P[H], (a = [W.time, W.event]).push(W.data.type), a.push(W.data.hash), a.push(W.data.x), a.push(W.data.y), a.push(W.data.reaction), a.push(W.data.context), Ja(a, !1);
                        La();
                        break;
                    case 28:
                        X = Gn, a.push(X.visible), Ja(a), I(n, X.visible), na()
                }
                return [2]
            }))
        }))
    }
    var Aa = [],
        Ra = [];

    function La() {
        Ra = []
    }

    function za(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), Aa.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), M(e, a, r)
    }
    var Ha, Pa, Wa, Xa, Ya, qa = 0,
        Ua = 0,
        Fa = null,
        Va = 0;

    function Ba() {
        Xa = !0, qa = 0, Ua = 0, Va = 0, Ha = [], Pa = [], Wa = {}, Ya = null
    }

    function Ja(t, e) {
        if (void 0 === e && (e = !0), Xa) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    qa += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    Ua += r.length, Ha.push(r);
                    break;
                default:
                    Pa.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && qa > 0 ? 100 : ai.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - Va > 2 * i && (Y(Fa), Fa = null), e && null === Fa && (25 !== a && V(), Fa = X(Ka, i), Va = n, Sr(Ua))
        }
    }

    function Ga() {
        Y(Fa), Ka(!0), qa = 0, Ua = 0, Va = 0, Ha = [], Pa = [], Wa = {}, Ya = null, Xa = !1
    }

    function Ka(t) {
        return void 0 === t && (t = !1), at(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return rt(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return Fa = null, (e = !1 === o.lean && Ua > 0 && (Ua < 1048576 || ai.sequence > 0)) && W(1, 1), Qe(),
                            function() {
                                var t = [];
                                Ra = [];
                                for (var e = ai.start + ai.duration, n = Math.max(e - 2e3, 0), a = 0, r = Aa; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && Ra.push(i), t.push(i))
                                }
                                Aa = t, ja(22)
                            }(), kt(), n = !0 === t, a = JSON.stringify(oi(n)), r = "[".concat(Pa.join(), "]"), i = e ? "[".concat(Ha.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, pt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return P(2, (c = s) ? c.length : u.length), Za(u, c, ai.sequence, n), Pa = [], e && (Ha = [], Ua = 0, qa = 0), [2]
                }
            }))
        }))
    }

    function Za(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && $a(n)
            } catch (t) {}
            if (!1 === i) {
                n in Wa ? Wa[n].attempts++ : Wa[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    ci(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    si(Qa)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), $a(n)
        }
    }

    function Qa(t, e) {
        var n = Wa[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? xr(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Za(n.data, null, e)) : (Ya = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Nr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        xr(6);
                        break;
                    case "UPGRADE":
                        et("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && vr(i[1]);
                        break;
                    case "SIGNAL":
                        i.length > 1 && mt(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Za(n.data, null, e, !0), xr(3)), t.status >= 200 && t.status <= 208 && $a(e), delete Wa[e]))
    }

    function $a(t) {
        1 === t && Br()
    }
    var tr, er = {};

    function nr(t) {
        var e = t.error || t;
        return e.message in er || (er[e.message] = 0), er[e.message]++ >= 5 || e && e.message && (tr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, ar(31)), !0
    }

    function ar(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(tr.message), e.push(tr.line), e.push(tr.column), e.push(tr.stack), e.push(b(tr.source)), Ja(e);
                        break;
                    case 33:
                        rr && (e.push(rr.code), e.push(rr.name), e.push(rr.message), e.push(rr.stack), e.push(rr.severity), Ja(e, !1));
                        break;
                    case 41:
                        Et && (e.push(Et.id), e.push(Et.target), e.push(Et.checksum), Ja(e, !1))
                }
                return [2]
            }))
        }))
    }
    var rr, ir = {};

    function or(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in ir && ir[t].indexOf(i) >= 0 || (rr = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in ir ? ir[t].push(i) : ir[t] = [i], ar(33))
    }
    var ur, cr = {},
        sr = new Set,
        lr = {},
        dr = {},
        fr = {},
        hr = {};

    function pr() {
        br()
    }

    function vr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in lr[a] = {}, dr[a] = {}, fr[a] = {}, hr[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        lr[a][u] = kr(l);
                        break;
                    case 2:
                        dr[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        fr[a][u] = d
                }
            }
        } catch (t) {
            or(8, 1, t ? t.name : null)
        }
    }

    function gr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function mr() {
        try {
            for (var t in lr) {
                var e = parseInt(t);
                if ("" == hr[e] || document.querySelector(hr[e])) {
                    var n = lr[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (h = Er(gr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && yr(e, r, i)
                    }
                    var o = dr[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) yr(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = fr[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        yr(e, f, $t(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            sr.size > 0 && Nr(40)
        } catch (t) {
            or(5, 1, t ? t.name : null)
        }
        var h
    }

    function br() {
        sr.clear()
    }

    function yr(t, e, n) {
        var a, r = !1;
        t in cr || (cr[t] = {}, r = !0), a = fr[t], 0 == Object.keys(a).length || e in cr[t] && cr[t][e] == n || (r = !0), cr[t][e] = n, r && sr.add(t)
    }

    function wr() {
        br()
    }

    function kr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Er(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Or(r, a.condition)) n = Er(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Or(c, a.condition)) {
                        var s = Er(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Or(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Nr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = N;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), e.push(n.data.scrollTime), Ja(e, !1)), x();
                break;
            case 25:
                e.push(R.gap), Ja(e);
                break;
            case 35:
                e.push(ur.check), Ja(e, !1);
                break;
            case 3:
                e.push(tt.key), Ja(e);
                break;
            case 2:
                e.push(Ya.sequence), e.push(Ya.attempts), e.push(Ya.status), Ja(e, !1);
                break;
            case 24:
                j.key && e.push(j.key), e.push(j.value), Ja(e);
                break;
            case 34:
                var a = Object.keys(it);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(it[o])
                    }
                    lt(), Ja(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(z);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(z[d]))
                    }
                    z = {}, Ja(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(Dr);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(Dr[g])
                    }
                    Lr(), Ja(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(G);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], G[w]))
                    }
                    Q(), Ja(e, !1)
                }
                break;
            case 40:
                sr.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in cr[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(cr[t][a])
                    }
                    e.push(n)
                })), br(), Ja(e, !1)
        }
    }

    function Tr() {
        ur = {
            check: 0
        }
    }

    function Sr(t) {
        if (0 === ur.check) {
            var e = ur.check;
            e = ai.sequence >= 128 ? 1 : e, e = ai.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== ur.check && xr(e)
        }
    }

    function xr(t) {
        ur.check = t, Vr(), Wi()
    }

    function Mr() {
        0 !== ur.check && Nr(35)
    }

    function _r() {
        ur = null
    }
    var Ir = null,
        Dr = null;

    function Cr() {
        Ir = {}, Dr = {}
    }

    function jr() {
        Ir = {}, Dr = {}
    }

    function Ar(t, e) {
        e && (e = "".concat(e), t in Ir || (Ir[t] = []), Ir[t].indexOf(e) < 0 && (Ir[t].push(e), t in Dr || (Dr[t] = []), Dr[t].push(e), Ir[t].length > 128 && xr(5)))
    }

    function Rr() {
        Nr(1)
    }

    function Lr() {
        Dr = {}
    }
    var zr = null,
        Hr = [],
        Pr = 0,
        Wr = null;

    function Xr() {
        Wr = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "";
        Pr = t.indexOf("Electron") > 0 ? 1 : 0;
        var n, a = function() {
                var t = {
                        session: Kr(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = $r("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Zr(n[1]) < 18e5 && (t.session = n[0], t.count = Zr(n[2]) + 1, t.upgrade = Zr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            r = Qr(),
            i = o.projectId || d(location.host);
        zr = {
            projectId: i,
            userId: r.id,
            sessionId: a.session,
            pageNum: a.count
        }, o.lean = o.track && null !== a.upgrade ? 0 === a.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && a.upload && a.upload.length > "https://".length ? a.upload : o.upload, Ar(0, t), Ar(3, e), Ar(1, b(location.href, !!Pr)), Ar(2, document.referrer), Ar(15, function() {
            var t = Kr();
            if (o.track && Jr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), Ar(16, document.documentElement.lang), Ar(17, document.dir), Ar(26, "".concat(window.devicePixelRatio)), Ar(28, r.dob.toString()), Ar(29, r.version.toString()), W(0, a.ts), W(1, 0), W(35, Pr), navigator && (Ar(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (n = navigator.userAgentData) && n.getHighEntropyValues ? n.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            Ar(22, t.platform), Ar(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                Ar(24, t.name + "~" + t.version)
            })), Ar(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : Ar(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var u = 0, c = o.cookies; u < c.length; u++) {
            var s = c[u],
                l = $r(s);
            l && ot(s, l)
        }
        Gr(r)
    }

    function Yr() {
        Wr = null, zr = null
    }

    function qr(t, e) {
        void 0 === e && (e = !0);
        var n = o.lean ? 0 : 1;
        zr && (n || !1 === e) ? t(zr, !o.lean) : Hr.push({
            callback: t,
            wait: e
        })
    }

    function Ur() {
        return zr ? [zr.userId, zr.sessionId, zr.pageNum].join(".") : ""
    }

    function Fr(t) {
        if (void 0 === t && (t = !0), !t) return o.track = !1, ei("_clsk", "", -Number.MAX_VALUE), ei("_clck", "", -Number.MAX_VALUE), Wi(), void window.setTimeout(Pi, 250);
        Ni() && (o.track = !0, Gr(Qr(), 1))
    }

    function Vr() {
        ei("_clsk", "", 0)
    }

    function Br() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            Hr.length > 0 && Hr.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(zr, !o.lean)
            }))
        }(n), ei("_clsk", [zr.sessionId, t, zr.pageNum, n, e].join("|"), 1)
    }

    function Jr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Gr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && ei("_clck", [zr.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function Kr() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Zr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Qr() {
        var t = {
                id: Kr(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = $r("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = Zr(n[1])), n.length > 2 && (t.expiry = Zr(n[2], 36)), n.length > 3 && 1 === Zr(n[3]) && (t.consent = 1), n.length > 4 && Zr(n[1]) > 1 && (t.dob = Zr(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function $r(t) {
        var e;
        if (Jr(document, "cookie")) {
            var n = document.cookie.split(";");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) {
                        for (var i = ti(r[1]), o = i[0], u = i[1]; o;) o = (e = ti(u))[0], u = e[1];
                        return u
                    }
                }
        }
        return null
    }

    function ti(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function ei(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || Jr(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === Wr) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (Wr = ".".concat(c[s]).concat(Wr || ""), s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(Wr), $r(t) === e)) return;
                    Wr = ""
                }
            } catch (t) {
                Wr = ""
            }
            document.cookie = Wr ? "".concat(u).concat(";").concat("domain=").concat(Wr) : u
        }
    }
    var ni, ai = null;

    function ri() {
        var t = zr;
        ai = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function ii() {
        ai = null
    }

    function oi(t) {
        return ai.start = ai.start + ai.duration, ai.duration = s() - ai.start, ai.sequence++, ai.upload = t && "sendBeacon" in navigator ? 1 : 0, ai.end = t ? 1 : 0, [ai.version, ai.sequence, ai.start, ai.duration, ai.projectId, ai.userId, ai.sessionId, ai.pageNum, ai.upload, ai.end]
    }

    function ui() {
        ni = []
    }

    function ci(t) {
        if (ni && -1 === ni.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: ai.version,
                    p: ai.projectId,
                    u: ai.userId,
                    s: ai.sessionId,
                    n: ai.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), ni.push(t.message)
            }
        }
        return t
    }

    function si(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw ci(t)
            }
            var n = performance.now() - e;
            P(4, n), n > 30 && (H(7), W(6, n))
        }
    }
    var li = [];

    function di(t, e, n, a) {
        void 0 === a && (a = !1), n = si(n);
        try {
            t[u("addEventListener")](e, n, a), li.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function fi() {
        for (var t = 0, e = li; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        li = []
    }
    var hi = null,
        pi = null,
        vi = null,
        gi = 0;

    function mi() {
        return !(gi++ > 20) || (or(4, 0), !1)
    }

    function bi() {
        gi = 0, vi !== wi() && (Wi(), window.setTimeout(yi, 250))
    }

    function yi() {
        Pi(), W(29, 1)
    }

    function wi() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var ki = !1;

    function Ei() {
        ki = !0, c = performance.now() + performance.timeOrigin, ve(), fi(), ui(), vi = wi(), gi = 0, di(window, "popstate", bi), null === hi && (hi = history.pushState, history.pushState = function() {
            hi.apply(this, arguments), Ni() && mi() && bi()
        }), null === pi && (pi = history.replaceState, history.replaceState = function() {
            pi.apply(this, arguments), Ni() && mi() && bi()
        })
    }

    function Oi() {
        vi = null, gi = 0, ui(), fi(), ve(), c = 0, ki = !1
    }

    function Ni() {
        return ki
    }

    function Ti(t) {
        if (null === t || ki) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function Si() {
        Pi(), A("clarity", "restart")
    }
    var xi = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                Ot = [], W(26, navigator.webdriver ? 1 : 0);
                try {
                    W(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    W(31, 0)
                }
            }(), di(window, "error", nr), er = {}, ir = {}
        },
        stop: function() {
            ir = {}
        }
    });

    function Mi() {
        return at(this, void 0, void 0, (function() {
            var t, e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), ye(e = {
                            id: Ur(),
                            cost: 3
                        }), [4, pa(document, e, 0)];
                    case 1:
                        return n.sent(), [4, We(5, e, t)];
                    case 2:
                        return n.sent(), we(e), [2]
                }
            }))
        }))
    }
    var _i = Object.freeze({
        __proto__: null,
        hashText: $t,
        start: function() {
            Se(), xe(), nn(), Ge = null, Fe = new WeakMap, Ve = {}, Be = [], Je = !!window.IntersectionObserver, Ut(), o.delayDom ? di(window, "load", (function() {
                Na()
            })) : Na(), ge(Mi, 1).then((function() {
                si(xe)(), si(Qe)(), si(Xn)()
            })), window.Animation && window.KeyframeEffect && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (ze(), Pe(Ie, "play"), Pe(De, "pause"), Pe(Ce, "cancel"), Pe(je, "finish"))
        },
        stop: function() {
            nn(), Fe = null, Ve = {}, Be = [], Ge && (Ge.disconnect(), Ge = null), Je = !1, Ft(),
                function() {
                    for (var t = 0, e = va; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    va = [], Oa = {}, ga = [], wa = [], Ea = 0, ka = null
                }(), Se(), ze()
        }
    });
    var Ii, Di = null;

    function Ci() {
        Di = null
    }

    function ji(t) {
        Di = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                at(this, void 0, void 0, (function() {
                    var e, n;
                    return rt(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(Di.fetchStart), n.push(Di.connectStart), n.push(Di.connectEnd), n.push(Di.requestStart), n.push(Di.responseStart), n.push(Di.responseEnd), n.push(Di.domInteractive), n.push(Di.domComplete), n.push(Di.loadEventStart), n.push(Di.loadEventEnd), n.push(Di.redirectCount), n.push(Di.size), n.push(Di.type), n.push(Di.protocol), n.push(Di.encodedSize), n.push(Di.decodedSize), Ci(), Ja(n)), [2]
                    }))
                }))
            }(29)
    }
    var Ai = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function Ri() {
        try {
            Ii && Ii.disconnect(), Ii = new PerformanceObserver(si(Li));
            for (var t = 0, e = Ai; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && P(9, 0), Ii.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            or(3, 1)
        }
    }

    function Li(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        ji(a);
                        break;
                    case "resource":
                        var r = a.name;
                        Ar(4, zi(r)), r !== o.upload && r !== o.fallback || W(28, a.duration);
                        break;
                    case "longtask":
                        H(7);
                        break;
                    case "first-input":
                        e && W(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && P(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && W(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function zi(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var Hi = [xi, _i, ra, Object.freeze({
        __proto__: null,
        start: function() {
            Ci(),
                function() {
                    navigator && "connection" in navigator && Ar(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? di(window, "load", X.bind(this, Ri, 0)) : Ri() : or(3, 0)
                }()
        },
        stop: function() {
            Ii && Ii.disconnect(), Ii = null, Ci()
        }
    })];

    function Pi(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    var t = navigator && "globalPrivacyControl" in navigator && 1 == navigator.globalPrivacyControl;
                    return !1 === ki && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap && !t
                } catch (t) {
                    return !1
                }
            }() && (Ti(t), Ei(), yt(), Hi.forEach((function(t) {
                return si(t.start)()
            })), null === t && Ui())
    }

    function Wi() {
        Ni() && (Hi.slice().reverse().forEach((function(t) {
            return si(t.stop)()
        })), wt(), Oi(), void 0 !== Yi && (Yi[qi] = function() {
            (Yi[qi].q = Yi[qi].q || []).push(arguments), "start" === arguments[0] && Yi[qi].q.unshift(Yi[qi].q.pop()) && Ui()
        }))
    }
    var Xi = Object.freeze({
            __proto__: null,
            consent: Fr,
            event: A,
            hashText: $t,
            identify: ut,
            metadata: qr,
            pause: function() {
                Ni() && (A("clarity", "pause"), null === he && (he = new Promise((function(t) {
                    pe = t
                }))))
            },
            resume: function() {
                Ni() && (he && (pe(), he = null, null === fe && me()), A("clarity", "resume"))
            },
            set: ot,
            signal: function(t) {
                gt = t
            },
            start: Pi,
            stop: Wi,
            upgrade: et,
            version: l
        }),
        Yi = window,
        qi = "clarity";

    function Ui() {
        if (void 0 !== Yi) {
            if (Yi[qi] && Yi[qi].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Yi[qi] && Yi[qi].q || [];
            for (Yi[qi] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return Xi[t].apply(Xi, e)
                }, Yi[qi].v = l; t.length > 0;) Yi[qi].apply(Yi, t.shift())
        }
    }
    Ui()
}();