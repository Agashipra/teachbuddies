// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ]

        ],
        "entities": {
            "__e": {
                "2": true,
                "4": true
            }


        },
        "blob": {
            "1": "1"
        },
        "permissions": {
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            }


        }



        ,
        "security_groups": {
            "google": [
                "__e"

            ]


        }



    };




    var ca, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        fa = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ha = fa(this),
        ja = function(a, b) {
            if (b) a: {
                for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ea(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ja("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var ka = function(a) {
            return a.raw = a
        },
        la = function(a, b) {
            a.raw = b;
            return a
        },
        na = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        pa = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        qa = function(a) {
            return a instanceof Array ? a : pa(na(a))
        },
        ra = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ja("Object.assign", function(a) {
        return a || ra
    });
    var sa = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ta;
    if (typeof Object.setPrototypeOf == "function") ta = Object.setPrototypeOf;
    else {
        var ua;
        a: {
            var va = {
                    a: !0
                },
                wa = {};
            try {
                wa.__proto__ = va;
                ua = wa.a;
                break a
            } catch (a) {}
            ua = !1
        }
        ta = ua ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var xa = ta,
        ya = function(a, b) {
            a.prototype = sa(b.prototype);
            a.prototype.constructor = a;
            if (xa) xa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Qn = b.prototype
        },
        Aa = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ba = this || self,
        Ca = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ea = function(a, b, c) {
            if (!a) throw Error();
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Fa = function(a, b, c) {
            Fa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ca : Ea;
            return Fa.apply(null, arguments)
        },
        Ga =
        function(a) {
            return a
        };
    var Ha = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ia = function() {
        this.j = {};
        this.H = {}
    };
    ca = Ia.prototype;
    ca.get = function(a) {
        return this.j["dust." + a]
    };
    ca.set = function(a, b) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || (this.j[a] = b)
    };
    ca.Lh = function(a, b) {
        this.set(a, b);
        this.H["dust." + a] = !0
    };
    ca.has = function(a) {
        return this.j.hasOwnProperty("dust." + a)
    };
    ca.vf = function(a) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || delete this.j[a]
    };
    var Ja = function() {};
    Ja.prototype.reset = function() {};
    var Ka = function(a, b) {
        this.O = a;
        this.parent = b;
        this.j = this.D = void 0;
        this.K = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ia
    };
    Ka.prototype.add = function(a, b) {
        La(this, a, b, !1)
    };
    var La = function(a, b, c, d) {
        d ? a.values.Lh(b, c) : a.values.set(b, c)
    };
    Ka.prototype.set = function(a, b) {
        !this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b)
    };
    Ka.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Ka.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Na = function(a) {
        var b = new Ka(a.O, a);
        a.D && (b.D = a.D);
        b.K = a.K;
        b.j = a.j;
        return b
    };
    Ka.prototype.H = function() {
        return this.O
    };

    function Oa(a, b) {
        for (var c, d = 0; d < b.length && !(c = Pa(a, b[d]), c instanceof Ha); d++);
        return c
    }

    function Pa(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || typeof c.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.D;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    };
    var Qa = function() {
        this.K = new Ja;
        this.j = new Ka(this.K)
    };
    Qa.prototype.H = function() {
        return this.K
    };
    Qa.prototype.execute = function(a) {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.D(b)
    };
    Qa.prototype.D = function() {
        for (var a, b = 0; b < arguments.length; b++) a = Pa(this.j, arguments[b]);
        return a
    };
    Qa.prototype.O = function(a) {
        var b = Na(this.j);
        b.j = a;
        for (var c, d = 1; d < arguments.length; d++) c = Pa(b, arguments[d]);
        return c
    };
    var Ra = function() {
        Ia.call(this);
        this.D = !1
    };
    ya(Ra, Ia);
    var Ta = function(a, b) {
        var c = [],
            d;
        for (d in a.j)
            if (a.j.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    Ra.prototype.set = function(a, b) {
        this.D || Ia.prototype.set.call(this, a, b)
    };
    Ra.prototype.Lh = function(a, b) {
        this.D || Ia.prototype.Lh.call(this, a, b)
    };
    Ra.prototype.vf = function(a) {
        this.D || Ia.prototype.vf.call(this, a)
    };
    Ra.prototype.Mb = function() {
        this.D = !0
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Va = function(a) {
            if (a == null) return String(a);
            var b = Ua.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Wa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Xa = function(a) {
            if (!a || Va(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Wa(a, "constructor") && !Wa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Wa(a, b)
        },
        h = function(a, b) {
            var c = b || (Va(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Wa(a, d)) {
                    var e = a[d];
                    Va(e) == "array" ? (Va(c[d]) != "array" && (c[d] = []), c[d] = h(e, c[d])) : Xa(e) ? (Xa(c[d]) || (c[d] = {}), c[d] = h(e, c[d])) : c[d] = e
                }
            return c
        };

    function Ya(a) {
        if (a == void 0 || Array.isArray(a) || Xa(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Za(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var $a = function(a) {
        this.j = [];
        this.H = !1;
        this.D = new Ra;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (Za(b) ? this.j[Number(b)] = a[Number(b)] : this.D.set(b, a[b]))
    };
    ca = $a.prototype;
    ca.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.j.length; c++) {
            var d = this.j[c];
            d === null || d === void 0 ? b.push("") : d instanceof $a ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    ca.set = function(a, b) {
        if (!this.H)
            if (a === "length") {
                if (!Za(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.j.length = Number(b)
            } else Za(a) ? this.j[Number(a)] = b : this.D.set(a, b)
    };
    ca.get = function(a) {
        return a === "length" ? this.length() : Za(a) ? this.j[Number(a)] : this.D.get(a)
    };
    ca.length = function() {
        return this.j.length
    };
    ca.fc = function() {
        for (var a = Ta(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
        return new $a(a)
    };
    var ab = function(a, b) {
        Za(b) ? delete a.j[Number(b)] : a.D.vf(b)
    };
    ca = $a.prototype;
    ca.pop = function() {
        return this.j.pop()
    };
    ca.push = function() {
        return this.j.push.apply(this.j, Array.prototype.slice.call(arguments))
    };
    ca.shift = function() {
        return this.j.shift()
    };
    ca.splice = function(a, b) {
        return new $a(this.j.splice.apply(this.j, arguments))
    };
    ca.unshift = function() {
        return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments))
    };
    ca.has = function(a) {
        return Za(a) && this.j.hasOwnProperty(a) || this.D.has(a)
    };
    ca.Mb = function() {
        this.H = !0;
        Object.freeze(this.j);
        this.D.Mb()
    };

    function bb(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var cb = function() {
        Ra.call(this)
    };
    ya(cb, Ra);
    cb.prototype.fc = function() {
        return new $a(Ta(this, 1))
    };
    var db = function(a) {
        for (var b = Ta(a, 3), c = new $a, d = 0; d < b.length; d++) {
            var e = new $a(b[d]);
            c.push(e)
        }
        return c
    };

    function eb() {
        for (var a = fb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function gb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var fb, hb;

    function jb(a) {
        fb = fb || gb();
        hb = hb || eb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(fb[m], fb[n], fb[p], fb[q])
        }
        return b.join("")
    }

    function kb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = hb[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        fb = fb || gb();
        hb = hb || eb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var lb = {};

    function mb(a, b) {
        lb[a] = lb[a] || [];
        lb[a][b] = !0
    }

    function nb(a) {
        var b = lb[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return jb(c.join("")).replace(/\.+$/, "")
    }

    function ob() {
        for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };

    function pb() {}

    function qb(a) {
        return typeof a === "function"
    }

    function l(a) {
        return typeof a === "string"
    }

    function rb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function sb(a) {
        return Array.isArray(a) ? a : [a]
    }

    function tb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function ub(a, b) {
        if (!rb(a) || !rb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function vb(a, b) {
        for (var c = new wb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function z(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function xb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function yb(a) {
        return Math.round(Number(a)) || 0
    }

    function zb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function Ab(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function Bb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function Cb() {
        return new Date(Date.now())
    }

    function Db() {
        return Cb().getTime()
    }
    var wb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    wb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    wb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };

    function Eb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function Fb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function Gb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function Hb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function Ib(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function Jb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function Kb(a, b) {
        var c = F;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function Lb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var Mb = /^\w{1,9}$/;

    function Nb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        z(a, function(d, e) {
            Mb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Ob(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Pb(a) {
        if (a) {
            var b = a.split(",");
            if (b.length === 2 && b[0] === b[1]) return b[0]
        }
        return a
    };
    var Qb, Rb = function() {
        if (Qb === void 0) {
            var a = null,
                b = Ba.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ga,
                        createScript: Ga,
                        createScriptURL: Ga
                    })
                } catch (c) {
                    Ba.console && Ba.console.error(c.message)
                }
                Qb = a
            } else Qb = a
        }
        return Qb
    };
    var Sb = function(a) {
        this.j = a
    };
    Sb.prototype.toString = function() {
        return this.j + ""
    };
    var Tb = function(a) {
            return a instanceof Sb && a.constructor === Sb ? a.j : "type_error:TrustedResourceUrl"
        },
        Ub = {},
        Vb = function(a) {
            var b = a,
                c = Rb(),
                d = c ? c.createScriptURL(b) : b;
            return new Sb(d, Ub)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Wb = ka([""]),
        Xb = la(["\x00"], ["\\0"]),
        Yb = la(["\n"], ["\\n"]),
        Zb = la(["\x00"], ["\\u0000"]);

    function $b(a) {
        return a.toString().indexOf("`") === -1
    }
    $b(function(a) {
        return a(Wb)
    }) || $b(function(a) {
        return a(Xb)
    }) || $b(function(a) {
        return a(Yb)
    }) || $b(function(a) {
        return a(Zb)
    });
    var ac = function(a) {
        this.j = a
    };
    ac.prototype.toString = function() {
        return this.j
    };
    var bc = new ac("about:invalid#zClosurez");
    var cc = function(a) {
        this.Yl = a
    };

    function dc(a) {
        return new cc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var ec = [dc("data"), dc("http"), dc("https"), dc("mailto"), dc("ftp"), new cc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function fc(a, b) {
        b = b === void 0 ? ec : b;
        if (a instanceof ac) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof cc && d.Yl(a)) return new ac(a)
        }
    }

    function gc(a) {
        var b;
        b = b === void 0 ? ec : b;
        return fc(a, b) || bc
    }
    var hc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function ic(a) {
        var b;
        if (a instanceof ac)
            if (a instanceof ac) b = a.j;
            else throw Error("");
        else b = hc.test(a) ? a : void 0;
        return b
    };
    var kc = function() {
        this.j = jc[0].toLowerCase()
    };
    kc.prototype.toString = function() {
        return this.j
    };
    var lc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var mc = {},
        nc = function(a) {
            this.j = a
        };
    nc.prototype.toString = function() {
        return this.j.toString()
    };

    function oc(a, b) {
        var c = [new kc];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof kc) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function pc(a, b) {
        var c = ic(b);
        c !== void 0 && (a.action = c)
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function qc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var F = window,
        H = document,
        rc = navigator,
        sc = function() {
            var a;
            try {
                a = rc.serviceWorker
            } catch (b) {
                return
            }
            return a
        },
        tc = H.currentScript,
        uc = tc && tc.src,
        vc = function(a, b) {
            var c = F[a];
            F[a] = c === void 0 ? b : c;
            return F[a]
        };

    function wc(a) {
        return (rc.userAgent || "").indexOf(a) !== -1
    }
    var xc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        yc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        zc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Ac(a, b, c) {
        b && z(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Bc = function(a, b, c, d, e) {
            var f = H.createElement("script");
            Ac(f, d, yc);
            f.type = "text/javascript";
            f.async = d && d.async === !1 ? !1 : !0;
            var g;
            g = Vb(qc(a));
            f.src = Tb(g);
            var k, m, n, p = (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : n.call(m, "script[nonce]");
            (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
            xc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = H.getElementsByTagName("script")[0] || H.body || H.head;
                q.parentNode.insertBefore(f,
                    q)
            }
            return f
        },
        Cc = function() {
            if (uc) {
                var a = uc.toLowerCase();
                if (a.indexOf("https://") === 0) return 2;
                if (a.indexOf("http://") === 0) return 3
            }
            return 1
        },
        Dc = function(a, b, c, d, e) {
            var f;
            f = f === void 0 ? !0 : f;
            var g = e,
                k = !1;
            g || (g = H.createElement("iframe"), k = !0);
            Ac(g, c, zc);
            d && z(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            a !== void 0 && (g.src = a);
            if (k) {
                var m = H.body && H.body.lastChild || H.body || H.head;
                m.parentNode.insertBefore(g, m)
            }
            xc(g, b);
            return g
        },
        Ec = function(a,
            b, c, d) {
            var e = new Image(1, 1);
            Ac(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a;
            return e
        },
        Fc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Gc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            F.setTimeout(a, 0)
        },
        Hc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Ic = function(a) {
            var b =
                a.innerText || a.textContent || "";
            b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Jc = function(a) {
            var b = H.createElement("div"),
                c = b,
                d, e = qc("A<div>" + a + "</div>"),
                f = Rb(),
                g = f ? f.createHTML(e) : e;
            d = new nc(g, mc);
            if (c.nodeType === 1) {
                var k = c.tagName;
                if (k === "SCRIPT" || k === "STYLE") throw Error("");
            }
            c.innerHTML = d instanceof nc && d.constructor === nc ? d.j : "type_error:SafeHtml";
            b = b.lastChild;
            for (var m = []; b.firstChild;) m.push(b.removeChild(b.firstChild));
            return m
        },
        Kc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Lc = function(a) {
            var b;
            try {
                b = rc.sendBeacon && rc.sendBeacon(a)
            } catch (c) {
                mb("TAGGING", 15)
            }
            b || Ec(a)
        },
        Mc = function(a, b) {
            try {
                return rc.sendBeacon(a, b)
            } catch (c) {
                mb("TAGGING", 15)
            }
            return !1
        },
        Nc = {
            cache: "no-store",
            credentials: "include",
            keepalive: !0,
            method: "POST",
            mode: "no-cors",
            redirect: "follow"
        },
        Oc = function(a, b, c) {
            if ("fetch" in F) {
                var d =
                    Object.assign({}, Nc);
                b && (d.body = b);
                c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
                try {
                    var e = F.fetch(a, d);
                    e && e.catch(pb);
                    return !0
                } catch (f) {}
            }
            if (c && c.noFallback) return !1;
            if (b) return Mc(a, b);
            Lc(a);
            return !0
        },
        Pc = function(a, b) {
            var c = a[b];
            c && typeof c.animVal === "string" && (c = c.animVal);
            return c
        },
        Qc = function() {
            var a = F.performance;
            if (a && qb(a.now)) return a.now()
        },
        Rc = function() {
            return F.performance || void 0
        };

    function Sc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Tc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Uc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Vc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }

    function Wc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Xc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
            case "pageLocation":
                var c = F.location.href;
                b instanceof cb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    var Yc = function(a, b) {
        Ra.call(this);
        this.K = a;
        this.O = b
    };
    ya(Yc, Ra);
    ca = Yc.prototype;
    ca.toString = function() {
        return this.K
    };
    ca.getName = function() {
        return this.K
    };
    ca.fc = function() {
        return new $a(Ta(this, 1))
    };
    ca.invoke = function(a) {
        return this.O.apply(new Zc(this, a), Array.prototype.slice.call(arguments, 1))
    };
    ca.fb = function(a) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (b) {}
    };
    var Zc = function(a, b) {
        this.j = a;
        this.F = b
    };
    Zc.prototype.evaluate = function(a) {
        var b = this.F;
        return Array.isArray(a) ? Pa(b, a) : a
    };
    Zc.prototype.getName = function() {
        return this.j.getName()
    };
    Zc.prototype.H = function() {
        return this.F.H()
    };
    var $c = function() {
        this.map = new Map
    };
    $c.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    $c.prototype.get = function(a) {
        return this.map.get(a)
    };
    var ad = function() {
        this.keys = [];
        this.values = []
    };
    ad.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    ad.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function bd() {
        try {
            return Map ? new $c : new ad
        } catch (a) {
            return new ad
        }
    };
    var cd = function(a) {
        if (a instanceof cd) return a;
        if (Ya(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    cd.prototype.getValue = function() {
        return this.value
    };
    cd.prototype.toString = function() {
        return String(this.value)
    };
    var ed = function(a) {
        Ra.call(this);
        this.promise = a;
        this.set("then", dd(this));
        this.set("catch", dd(this, !0));
        this.set("finally", dd(this, !1, !0))
    };
    ya(ed, cb);
    var dd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Yc("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof Yc || (d = void 0);
            e instanceof Yc || (e = void 0);
            var f = Na(this.F),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new ed(k)
        })
    };

    function J(a, b, c) {
        var d = bd(),
            e = function(g, k) {
                for (var m = Ta(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (g instanceof $a) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.fc(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                    return m
                }
                if (g instanceof ed) return g.promise;
                if (g instanceof cb) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof Yc) {
                    var r = function() {
                        for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = fd(u[v], b, c);
                        var w = new Ka(b ? b.H() :
                            new Ja);
                        b && (w.j = b.j);
                        return f(g.invoke.apply(g, [w].concat(u)))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var t = !1;
                switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                }
                if (g instanceof cd && t) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function fd(a, b, c) {
        var d = bd(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || xb(g)) {
                    var m = new $a([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Xa(g)) {
                    var p = new cb;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new Yc("", function() {
                        for (var x = Array.prototype.slice.call(arguments, 0), y = 0; y < x.length; y++) x[y] = J(this.evaluate(x[y]), b, c);
                        return f((0, this.F.K)(g, g, x))
                    });
                    d.set(g,
                        q);
                    e(g, q);
                    return q
                }
                var v = typeof g;
                if (g === null || v === "string" || v === "number" || v === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new cd(g)
            };
        return f(a)
    };

    function gd() {
        var a = !1;
        return a
    };
    var hd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof $a)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new $a(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new $a(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new $a(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = bb(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ab(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ? d :
                c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new $a(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = bb(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ab(this, d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var id = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    ya(id, Error);
    var jd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        kd = new Ha("break"),
        ld = new Ha("continue");

    function md(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function nd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function od(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof $a)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (gd()) throw new id(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = J(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (gd()) throw new id(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (jd.hasOwnProperty(b)) {
                var k = 2;
                k = 1;
                var m = J(c, void 0, k);
                return fd(a[b].apply(a, m), this.F)
            }
            var n = "TypeError: " + b + " is not a function";
            if (gd()) throw new id(n);
            throw Error(n);
        }
        if (a instanceof $a) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof Yc) {
                    var q = bb(c);
                    q.unshift(this.F);
                    return p.invoke.apply(p, q)
                }
                var r =
                    "TypeError: " + b + " is not a function";
                if (gd()) throw new id(r);
                throw Error(r);
            }
            if (hd.supportedMethods.indexOf(b) >= 0) {
                var t = bb(c);
                t.unshift(this.F);
                return hd[b].apply(a, t)
            }
        }
        if (a instanceof Yc || a instanceof cb) {
            if (a.has(b)) {
                var u = a.get(b);
                if (u instanceof Yc) {
                    var v = bb(c);
                    v.unshift(this.F);
                    return u.invoke.apply(u, v)
                }
                var w = "TypeError: " + b + " is not a function";
                if (gd()) throw new id(w);
                throw Error(w);
            }
            if (b === "toString") return a instanceof Yc ? a.getName() : a.toString();
            if (b === "hasOwnProperty") return a.has.apply(a,
                bb(c))
        }
        if (a instanceof cd && b === "toString") return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (gd()) throw new id(x);
        throw Error(x);
    }

    function pd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.F;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function qd() {
        var a = Na(this.F),
            b = Oa(a, Array.prototype.slice.apply(arguments));
        if (b instanceof Ha) return b
    }

    function rd() {
        return kd
    }

    function sd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Ha) return d
        }
    }

    function td() {
        for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                La(a, c, d, !0)
            }
        }
    }

    function ud() {
        return ld
    }

    function vd(a, b) {
        return new Ha(a, this.evaluate(b))
    }

    function wd(a, b) {
        var c = new $a;
        b = this.evaluate(b);
        for (var d = 0; d < b.length; d++) c.push(b[d]);
        var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.F.add(a, this.evaluate(e))
    }

    function xd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function yd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof cd,
            d = b instanceof cd;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }

    function zd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Ad(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Oa(f, d);
            if (g instanceof Ha) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Bd(a, b, c) {
        if (typeof b === "string") return Ad(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof cb || b instanceof $a || b instanceof Yc) {
            var d = b.fc(),
                e = d.length();
            return Ad(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }

    function Cd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Bd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Dd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Bd(function(e) {
            var f = Na(d);
            La(f, a, e, !0);
            return f
        }, b, c)
    }

    function Ed(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Bd(function(e) {
            var f = Na(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Fd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Gd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Gd(function(e) {
            var f = Na(d);
            La(f, a, e, !0);
            return f
        }, b, c)
    }

    function Id(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Gd(function(e) {
            var f = Na(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Gd(a, b, c) {
        if (typeof b === "string") return Ad(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof $a) return Ad(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (gd()) throw new id("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Jd(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof $a)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.F;
        d = this.evaluate(d);
        var k = Na(g);
        for (e(g, k); Pa(k, b);) {
            var m = Oa(k, d);
            if (m instanceof Ha) {
                if (m.type === "break") break;
                if (m.type === "return") return m
            }
            var n = Na(g);
            e(k, n);
            Pa(n, c);
            k = n
        }
    }

    function Kd(a, b) {
        var c = this.F,
            d = this.evaluate(b);
        if (!(d instanceof $a)) throw Error("Error: non-List value given for Fn argument names.");
        var e = Array.prototype.slice.call(arguments, 2);
        return new Yc(a, function() {
            return function(f) {
                var g = Na(c);
                g.j === void 0 && (g.j = this.F.j);
                for (var k = Array.prototype.slice.call(arguments, 0), m = 0; m < k.length; m++)
                    if (k[m] = this.evaluate(k[m]), k[m] instanceof Ha) return k[m];
                for (var n = d.get("length"), p = 0; p < n; p++) p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
                g.add("arguments",
                    new $a(k));
                var q = Oa(g, e);
                if (q instanceof Ha) return q.type === "return" ? q.data : q
            }
        }())
    }

    function Ld(a) {
        a = this.evaluate(a);
        var b = this.F;
        if (Md && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }

    function Nd(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (gd()) throw new id(d);
            throw Error(d);
        }
        if (a instanceof cb || a instanceof $a || a instanceof Yc) c = a.get(b);
        else if (typeof a === "string") b === "length" ? c = a.length : Za(b) && (c = a[b]);
        else if (a instanceof cd) return;
        return c
    }

    function Od(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Pd(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Qd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof cd && (a = a.getValue());
        b instanceof cd && (b = b.getValue());
        return a === b
    }

    function Rd(a, b) {
        return !Qd.call(this, a, b)
    }

    function Sd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Oa(this.F, d);
        if (e instanceof Ha) return e
    }
    var Md = !1;

    function Td(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Ud(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Vd() {
        for (var a = new $a, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Wd() {
        for (var a = new cb, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + "",
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Xd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function Yd(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function Zd(a) {
        return -this.evaluate(a)
    }

    function $d(a) {
        return !this.evaluate(a)
    }

    function ae(a, b) {
        return !yd.call(this, a, b)
    }

    function be() {
        return null
    }

    function ce(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function de(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function ee(a) {
        return this.evaluate(a)
    }

    function fe() {
        return Array.prototype.slice.apply(arguments)
    }

    function ge(a) {
        return new Ha("return", this.evaluate(a))
    }

    function he(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (gd()) throw new id(d);
            throw Error(d);
        }(a instanceof Yc || a instanceof $a || a instanceof cb) && a.set(b, c);
        return c
    }

    function ie(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function je(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b),
            e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, k = 0; k < d.length; k++)
            if (g || a === this.evaluate(d[k]))
                if (f = this.evaluate(e[k]), f instanceof Ha) {
                    var m = f.type;
                    if (m === "break") return;
                    if (m === "return" || m === "continue") return f
                } else g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof Ha && (f.type === "return" || f.type === "continue"))) return f
    }

    function ke(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function le(a) {
        a = this.evaluate(a);
        return a instanceof Yc ? "function" : typeof a
    }

    function me() {
        for (var a = this.F, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function ne(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Oa(this.F, e);
            if (f instanceof Ha) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Oa(this.F, e);
            if (g instanceof Ha) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function oe(a) {
        return ~Number(this.evaluate(a))
    }

    function pe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function qe(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function re(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function se(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function ue(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function ve() {}

    function we(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Ha) return g
        } catch (r) {
            if (!(r instanceof id && a)) throw f = r instanceof id, r;
            var k = Na(this.F),
                m = new cd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Oa(k, n);
            if (p instanceof Ha) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Ha) return q
            }
        }
    };
    var ye = function() {
        this.j = new Qa;
        xe(this)
    };
    ye.prototype.execute = function(a) {
        return this.j.D(a)
    };
    var xe = function(a) {
        var b = function(c, d) {
            var e = new Yc(String(c), d);
            e.Mb();
            a.j.j.set(String(c), e)
        };
        b("map", Wd);
        b("and", Sc);
        b("contains", Vc);
        b("equals", Tc);
        b("or", Uc);
        b("startsWith", Wc);
        b("variable", Xc)
    };
    var Ae = function() {
        this.D = !1;
        this.j = new Qa;
        ze(this);
        this.D = !0
    };
    Ae.prototype.execute = function(a) {
        return Be(this.j.D(a))
    };
    var Ce = function(a, b, c) {
            return Be(a.j.O(b, c))
        },
        ze = function(a) {
            var b = function(c, d) {
                var e = String(c),
                    f = new Yc(e, d);
                f.Mb();
                a.j.j.set(e, f)
            };
            b(0, md);
            b(1, nd);
            b(2, od);
            b(3, pd);
            b(56, se);
            b(57, pe);
            b(58, oe);
            b(59, ue);
            b(60, qe);
            b(61, re);
            b(62, te);
            b(53, qd);
            b(4, rd);
            b(5, sd);
            b(52, td);
            b(6, ud);
            b(49, vd);
            b(7, Vd);
            b(8, Wd);
            b(9, sd);
            b(50, wd);
            b(10, xd);
            b(12, yd);
            b(13, zd);
            b(51, Kd);
            b(47, Cd);
            b(54, Dd);
            b(55, Ed);
            b(63, Jd);
            b(64, Fd);
            b(65, Hd);
            b(66, Id);
            b(15, Ld);
            b(16, Nd);
            b(17, Nd);
            b(18, Od);
            b(19, Pd);
            b(20, Qd);
            b(21, Rd);
            b(22, Sd);
            b(23, Td);
            b(24, Ud);
            b(25, Xd);
            b(26, Yd);
            b(27, Zd);
            b(28, $d);
            b(29, ae);
            b(45, be);
            b(30, ce);
            b(32, de);
            b(33, de);
            b(34, ee);
            b(35, ee);
            b(46, fe);
            b(36, ge);
            b(43, he);
            b(37, ie);
            b(38, je);
            b(39, ke);
            b(67, we);
            b(40, le);
            b(44, ve);
            b(41, me);
            b(42, ne)
        };
    Ae.prototype.H = function() {
        return this.j.H()
    };

    function Be(a) {
        if (a instanceof Ha || a instanceof Yc || a instanceof $a || a instanceof cb || a instanceof cd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var De = function(a) {
        this.message = a
    };

    function Ee(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new De("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Fe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function He(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Ee(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Ee(a | b) + c
    };
    var Ie = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            kk: a("consent"),
            Vh: a("convert_case_to"),
            Wh: a("convert_false_to"),
            Xh: a("convert_null_to"),
            Yh: a("convert_true_to"),
            Zh: a("convert_undefined_to"),
            dn: a("debug_mode_metadata"),
            oa: a("function"),
            Jg: a("instance_name"),
            Jk: a("live_only"),
            Kk: a("malware_disabled"),
            Lk: a("metadata"),
            Ok: a("original_activity_id"),
            sn: a("original_vendor_template_id"),
            rn: a("once_on_load"),
            Nk: a("once_per_event"),
            gj: a("once_per_load"),
            wn: a("priority_override"),
            xn: a("respected_consent_types"),
            pj: a("setup_tags"),
            me: a("tag_id"),
            vj: a("teardown_tags")
        }
    }();
    var df;
    var ef = [],
        ff = [],
        gf = [],
        hf = [],
        jf = [],
        kf = {},
        lf, mf;

    function nf(a) {
        mf = mf || a
    }

    function of (a) {}
    var pf, qf = [],
        rf = [];

    function sf(a, b) {
        var c = {};
        c[Ie.oa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function tf(a, b, c) {
        try {
            return lf(uf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function vf(a) {
        var b = a[Ie.oa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!kf[b]
    }
    var uf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
            return d
        },
        wf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(wf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ef[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Ie.Jg]);
                        try {
                            var m = uf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = xf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            pf && (d = pf.il(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = wf(a[q], b, c);
                            mf && (p = p || mf.Vl(r));
                            d.push(r)
                        }
                        return mf && p ? mf.ml(d) : d.join("");
                    case "escape":
                        d = wf(a[1], b, c);
                        if (mf && Array.isArray(a[1]) && a[1][0] === "macro" && mf.Wl(a)) return mf.wm(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Je[a[t]] && (d = Je[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!hf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return {
                            Dj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Ie.oa] = a[1];
                        var w = tf(v, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        xf = function(a, b) {
            var c = a[Ie.oa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = kf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && qf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && Ib(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = ef[q];
                                    break;
                                case 1:
                                    r = hf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[Ie.Jg];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var u, v, w;
            if (f && rf.indexOf(c) === -1) {
                rf.push(c);
                var x = Db();
                u = e(g);
                var y = Db() - x,
                    B = Db();
                v = df(c, k, b);
                w = y - (Db() - B)
            } else if (e && (u = e(g)), !e || f) v = df(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Ya(u) ? (Array.isArray(u) ? Array.isArray(v) : Xa(u) ? Xa(v) : typeof u === "function" ? typeof v === "function" : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? u : v
        };
    var yf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    ya(yf, Error);

    function zf(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) zf(a[c], b[c])
        }
    };
    var Af = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.lm = a;
        this.j = [];
        this.D = b
    };
    ya(Af, Error);
    var Cf = function() {
        return function(a, b) {
            a instanceof Af || (a = new Af(a, Bf));
            b && a.j.push(b);
            throw a;
        }
    };

    function Bf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) rb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Ff = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Df(a), f = 0; f < ff.length; f++) {
                var g = ff[f],
                    k = Ef(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else k === null && b(g.block || []);
            }
            for (var p = [], q = 0; q < hf.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Ef = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (e === 0) return !1;
                if (e === 2) return null
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (k === 2) return null;
                if (k === 1) return !1
            }
            return !0
        },
        Df = function(a) {
            var b = [];
            return function(c) {
                b[c] === void 0 && (b[c] = tf(gf[c], a));
                return b[c]
            }
        };
    var Gf = {
        il: function(a, b) {
            b[Ie.Vh] && typeof a === "string" && (a = b[Ie.Vh] == 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ie.Xh) && a === null && (a = b[Ie.Xh]);
            b.hasOwnProperty(Ie.Zh) && a === void 0 && (a = b[Ie.Zh]);
            b.hasOwnProperty(Ie.Yh) && a === !0 && (a = b[Ie.Yh]);
            b.hasOwnProperty(Ie.Wh) && a === !1 && (a = b[Ie.Wh]);
            return a
        }
    };
    var Hf = function() {
            this.j = {}
        },
        Jf = function(a, b) {
            var c = If.D,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, qa(Aa.apply(0, arguments)))
            })
        };

    function Kf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new yf(c, d, g);
            }
    }

    function Lf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Kf(e, b, d, g);
                    Kf(f, b, d, g)
                }
            }
        }
    };
    var Pf = function() {
            var a = data.permissions || {},
                b = Mf.ctid,
                c = this;
            this.D = new Hf;
            this.j = {};
            var d = {},
                e = {},
                f = Lf(this.D, b, function() {
                    var g = arguments[0];
                    return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            z(a, function(g, k) {
                var m = {};
                z(k, function(p, q) {
                    var r = Nf(p, q);
                    m[p] = r.assert;
                    d[p] || (d[p] = r.N);
                    r.yj && !e[p] && (e[p] = r.yj)
                });
                var n = function(p) {
                    var q = Aa.apply(1, arguments);
                    if (!m[p]) throw Of(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(qa(q)))
                };
                c.j[g] = function(p, q) {
                    var r = m[p];
                    if (!r) throw Of(p, {}, "The requested permission " + p + " is not configured.");
                    var t = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, t);
                    f.apply(void 0, t);
                    var u = e[p];
                    u && u.apply(null, [n].concat(qa(t.slice(1))))
                }
            })
        },
        Qf = function(a) {
            return If.j[a] || function() {}
        };

    function Nf(a, b) {
        var c = sf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Of;
        try {
            return xf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new yf(e, {}, "Permission " + e + " is unknown.");
                },
                N: function() {
                    throw new yf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Of(a, b, c) {
        return new yf(a, b, c)
    };
    var Rf = !1;
    var Sf = {};
    Sf.Um = zb('');
    Sf.pl = zb('');
    var Tf = Rf,
        Uf = Sf.pl,
        Vf = Sf.Um;
    var cg = {},
        dg = (cg.uaa = !0, cg.uab = !0, cg.uafvl = !0, cg.uamb = !0, cg.uam = !0, cg.uap = !0, cg.uapv = !0, cg.uaw = !0, cg);
    var jg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!hg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!ig.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? Ib(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        ig = /^[a-z$_][\w$]*$/i,
        hg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var kg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function lg(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) === c
    }
    var mg = new wb;

    function ng(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = mg.get(e);
            f || (f = new RegExp(b, d), mg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function og(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function pg(a, b) {
        return String(a) === String(b)
    }

    function qg(a, b) {
        return Number(a) >= Number(b)
    }

    function rg(a, b) {
        return Number(a) <= Number(b)
    }

    function sg(a, b) {
        return Number(a) > Number(b)
    }

    function tg(a, b) {
        return Number(a) < Number(b)
    }

    function ug(a, b) {
        return Ib(String(a), String(b))
    };
    var Bg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Cg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function K(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Bg.exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = c[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof Yc ? n = "Fn" : m instanceof $a ? n = "List" : m instanceof cb ? n = "PixieMap" : m instanceof cd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Cg[n] || n) + ", which does not match required type ") + ((Cg[k] ||
                    k) + "."));
            }
        }
    };

    function Dg(a) {
        return "" + a
    }

    function Eg(a, b) {
        var c = [];
        return c
    };

    function Fg(a, b) {
        var c = new Yc(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (gd()) throw new id(g.message);
                throw g;
            }
        });
        c.Mb();
        return c
    }

    function Gg(a, b) {
        var c = new cb,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                qb(e) ? c.set(d, Fg(a + "_" + d, e)) : Xa(e) ? c.set(d, Gg(a + "_" + d, e)) : (rb(e) || l(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.Mb();
        return c
    };

    function Hg(a, b) {
        K(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new cb;
        return d = Gg("AssertApiSubject", c)
    };

    function Ig(a, b) {
        K(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof ed) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new cb;
        return d = Gg("AssertThatSubject", c)
    };

    function Jg(a) {
        return function() {
            for (var b = [], c = this.F, d = 0; d < arguments.length; ++d) b.push(J(arguments[d], c));
            return fd(a.apply(null, b))
        }
    }

    function Kg() {
        for (var a = Math, b = Lg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Jg(a[e].bind(a)))
        }
        return c
    };

    function Mg(a) {
        var b;
        return b
    };

    function Ng(a) {
        var b;
        return b
    };
    var Og = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Pg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    var Ug = function(a) {
        K(this.getName(), ["message:?string"], arguments);
    };
    var Vg = function(a, b) {
        K(this.getName(), ["min:!number", "max:!number"], arguments);
        return ub(a, b)
    };
    var Wg = function() {
        return (new Date).getTime()
    };
    var Xg = function(a) {
        if (a === null) return "null";
        if (a instanceof $a) return "array";
        if (a instanceof Yc) return "function";
        if (a instanceof cd) {
            a = a.getValue();
            if (a.constructor === void 0 || a.constructor.name === void 0) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Yg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Tf || Vf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return fd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(J(c))
            })
        }
    };
    var Zg = function(a) {
        return yb(J(a, this.F))
    };
    var $g = function(a) {
        return Number(J(a, this.F))
    };
    var ah = function(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };
    var bh = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Lg = "floor ceil round max min abs pow sqrt".split(" ");
    var ch = function() {
            var a = {};
            return {
                Al: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Yj: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        dh = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return Yc.prototype.invoke.apply(a, c)
            }
        },
        eh = function(a, b) {
            K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
        },
        fh = function(a, b) {
            K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
        };
    var gh = {};
    gh.keys = function(a) {
        return new $a
    };
    gh.values = function(a) {
        return new $a
    };
    gh.entries = function(a) {
        return new $a
    };
    gh.freeze = function(a) {
        return a
    };
    gh.delete = function(a, b) {
        return !1
    };

    function N(a, b) {
        var c = Aa.apply(2, arguments),
            d = a.F.j;
        if (!d) throw Error("Missing program state.");
        if (d.Cm) {
            try {
                d.zj.apply(null, [b].concat(qa(c)))
            } catch (e) {
                throw mb("TAGGING", 21), e;
            }
            return
        }
        d.zj.apply(null, [b].concat(qa(c)))
    };
    var ih = function() {
        this.j = {};
        this.D = {};
    };
    ih.prototype.get = function(a, b) {
        var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
        return c
    };
    ih.prototype.add = function(a, b, c) {
        if (this.j.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.D.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.j[a] = c ? void 0 : qb(b) ? Fg(a, b) : Gg(a, b)
    };

    function jh(a, b) {
        var c = void 0;
        return c
    };

    function kh() {
        var a = {};
        return a
    };

    function lh(a) {
        return mh ? H.querySelectorAll(a) : null
    }

    function ph(a, b) {
        if (!mh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!H.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var qh = !1;
    if (H.querySelectorAll) try {
        var rh = H.querySelectorAll(":root");
        rh && rh.length == 1 && rh[0] == H.documentElement && (qh = !0)
    } catch (a) {}
    var mh = qh;
    var sh = /^[0-9A-Fa-f]{64}$/;

    function th(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function uh(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = F.crypto) == null ? 0 : b.subtle) {
            if (sh.test(a)) return Promise.resolve(a);
            try {
                var c = th(a);
                return F.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return F.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function O(a) {
        mb("GTM", a)
    };
    var P = {
            g: {
                ya: "ad_personalization",
                R: "ad_storage",
                P: "ad_user_data",
                U: "analytics_storage",
                nc: "region",
                Qb: "consent_updated",
                Qe: "wait_for_update",
                bi: "app_remove",
                di: "app_store_refund",
                ei: "app_store_subscription_cancel",
                fi: "app_store_subscription_convert",
                gi: "app_store_subscription_renew",
                nk: "consent_update",
                Sf: "add_payment_info",
                Tf: "add_shipping_info",
                oc: "add_to_cart",
                qc: "remove_from_cart",
                Uf: "view_cart",
                Rb: "begin_checkout",
                rc: "select_item",
                hb: "view_item_list",
                Cb: "select_promotion",
                ib: "view_promotion",
                Ia: "purchase",
                sc: "refund",
                Na: "view_item",
                Vf: "add_to_wishlist",
                pk: "exception",
                hi: "first_open",
                ii: "first_visit",
                ba: "gtag.config",
                Ta: "gtag.get",
                ji: "in_app_purchase",
                Sb: "page_view",
                qk: "screen_view",
                ki: "session_start",
                rk: "timing_complete",
                sk: "track_social",
                Nc: "user_engagement",
                tk: "user_id_update",
                jb: "gclgb",
                Ua: "gclid",
                li: "gclgs",
                mi: "gclst",
                fa: "ads_data_redaction",
                ni: "gad_source",
                Fd: "gclid_url",
                oi: "gclsrc",
                Wf: "gbraid",
                Re: "wbraid",
                ka: "allow_ad_personalization_signals",
                Se: "allow_custom_scripts",
                Te: "allow_display_features",
                Gd: "allow_enhanced_conversions",
                kb: "allow_google_signals",
                Ca: "allow_interest_groups",
                uk: "app_id",
                vk: "app_installer_id",
                wk: "app_name",
                xk: "app_version",
                Db: "auid",
                ri: "auto_detection_enabled",
                Tb: "aw_remarketing",
                Ue: "aw_remarketing_only",
                Hd: "discount",
                Id: "aw_feed_country",
                Jd: "aw_feed_language",
                da: "items",
                Kd: "aw_merchant_id",
                Xf: "aw_basket_type",
                Oc: "campaign_content",
                Pc: "campaign_id",
                Qc: "campaign_medium",
                Rc: "campaign_name",
                Sc: "campaign",
                Tc: "campaign_source",
                Uc: "campaign_term",
                lb: "client_id",
                si: "rnd",
                Yf: "consent_update_type",
                ui: "content_group",
                vi: "content_type",
                Za: "conversion_cookie_prefix",
                Vc: "conversion_id",
                ra: "conversion_linker",
                wi: "conversion_linker_disabled",
                Ub: "conversion_api",
                Ve: "cookie_deprecation",
                Va: "cookie_domain",
                Wa: "cookie_expires",
                ab: "cookie_flags",
                uc: "cookie_name",
                Eb: "cookie_path",
                Oa: "cookie_prefix",
                vc: "cookie_update",
                wc: "country",
                za: "currency",
                Ld: "customer_lifetime_value",
                Wc: "custom_map",
                Zf: "gcldc",
                Md: "dclid",
                xi: "debug_mode",
                la: "developer_id",
                yi: "disable_merchant_reported_purchases",
                Xc: "dc_custom_params",
                zi: "dc_natural_search",
                cg: "dynamic_event_settings",
                dg: "affiliation",
                Nd: "checkout_option",
                We: "checkout_step",
                eg: "coupon",
                Yc: "item_list_name",
                Xe: "list_name",
                Ai: "promotions",
                Zc: "shipping",
                Ye: "tax",
                Od: "engagement_time_msec",
                Pd: "enhanced_client_id",
                Qd: "enhanced_conversions",
                fg: "enhanced_conversions_automatic_settings",
                Rd: "estimated_delivery_date",
                Ze: "euid_logged_in_state",
                bd: "event_callback",
                yk: "event_category",
                ob: "event_developer_id_string",
                zk: "event_label",
                xc: "event",
                Sd: "event_settings",
                Td: "event_timeout",
                Ak: "description",
                Bk: "fatal",
                Bi: "experiments",
                af: "firebase_id",
                yc: "first_party_collection",
                Ud: "_x_20",
                pb: "_x_19",
                Ci: "fledge_drop_reason",
                gg: "fledge",
                hg: "flight_error_code",
                ig: "flight_error_message",
                Di: "fl_activity_category",
                Ei: "fl_activity_group",
                jg: "fl_advertiser_id",
                Fi: "fl_ar_dedupe",
                kg: "match_id",
                Gi: "fl_random_number",
                Hi: "tran",
                Ii: "u",
                Vd: "gac_gclid",
                zc: "gac_wbraid",
                lg: "gac_wbraid_multiple_conversions",
                mg: "ga_restrict_domain",
                ng: "ga_temp_client_id",
                Ac: "gdpr_applies",
                og: "geo_granularity",
                Fb: "value_callback",
                qb: "value_key",
                Bc: "_google_ng",
                Vb: "google_signals",
                pg: "google_tld",
                Wd: "groups",
                qg: "gsa_experiment_id",
                Ji: "gtm_up",
                Gb: "iframe_state",
                dd: "ignore_referrer",
                bf: "internal_traffic_results",
                Wb: "is_legacy_converted",
                Hb: "is_legacy_loaded",
                Xd: "is_passthrough",
                ed: "_lps",
                Pa: "language",
                Yd: "legacy_developer_id_string",
                sa: "linker",
                Cc: "accept_incoming",
                sb: "decorate_forms",
                W: "domains",
                Ib: "url_position",
                rg: "method",
                Ck: "name",
                fd: "new_customer",
                sg: "non_interaction",
                Ki: "optimize_id",
                Li: "page_hostname",
                gd: "page_path",
                Da: "page_referrer",
                Jb: "page_title",
                ug: "passengers",
                vg: "phone_conversion_callback",
                Mi: "phone_conversion_country_code",
                wg: "phone_conversion_css_class",
                Ni: "phone_conversion_ids",
                xg: "phone_conversion_number",
                yg: "phone_conversion_options",
                zg: "_protected_audience_enabled",
                hd: "quantity",
                Zd: "redact_device_info",
                cf: "referral_exclusion_definition",
                Xb: "restricted_data_processing",
                Oi: "retoken",
                Dk: "sample_rate",
                df: "screen_name",
                Kb: "screen_resolution",
                Pi: "search_term",
                Ja: "send_page_view",
                Yb: "send_to",
                jd: "server_container_url",
                kd: "session_duration",
                ae: "session_engaged",
                ef: "session_engaged_time",
                tb: "session_id",
                be: "session_number",
                ff: "_shared_user_id",
                ld: "delivery_postal_code",
                Ek: "temporary_client_id",
                hf: "topmost_url",
                Qi: "tracking_id",
                jf: "traffic_type",
                Aa: "transaction_id",
                Lb: "transport_url",
                Ag: "trip_type",
                Zb: "update",
                Xa: "url_passthrough",
                kf: "_user_agent_architecture",
                lf: "_user_agent_bitness",
                nf: "_user_agent_full_version_list",
                pf: "_user_agent_mobile",
                qf: "_user_agent_model",
                rf: "_user_agent_platform",
                tf: "_user_agent_platform_version",
                uf: "_user_agent_wow64",
                Ea: "user_data",
                Bg: "user_data_auto_latency",
                Cg: "user_data_auto_meta",
                Dg: "user_data_auto_multi",
                Eg: "user_data_auto_selectors",
                Fg: "user_data_auto_status",
                md: "user_data_mode",
                ce: "user_data_settings",
                Ba: "user_id",
                cb: "user_properties",
                Ri: "_user_region",
                de: "us_privacy_string",
                na: "value",
                Gg: "wbraid_multiple_conversions",
                Zi: "_host_name",
                aj: "_in_page_command",
                bj: "_is_passthrough_cid",
                Nb: "non_personalized_ads",
                je: "_sst_parameters",
                nb: "conversion_label",
                wa: "page_location",
                rb: "global_developer_id_string",
                Dc: "tc_privacy_string"
            }
        },
        Sh = {},
        Th = Object.freeze((Sh[P.g.ka] = 1, Sh[P.g.Te] = 1, Sh[P.g.Gd] = 1, Sh[P.g.kb] = 1, Sh[P.g.da] = 1, Sh[P.g.Va] = 1, Sh[P.g.Wa] = 1, Sh[P.g.ab] = 1, Sh[P.g.uc] = 1, Sh[P.g.Eb] = 1, Sh[P.g.Oa] = 1, Sh[P.g.vc] = 1, Sh[P.g.Wc] = 1, Sh[P.g.la] = 1, Sh[P.g.cg] = 1, Sh[P.g.bd] = 1, Sh[P.g.Sd] = 1, Sh[P.g.Td] = 1, Sh[P.g.yc] = 1, Sh[P.g.mg] = 1, Sh[P.g.Vb] = 1, Sh[P.g.pg] = 1, Sh[P.g.Wd] = 1, Sh[P.g.bf] = 1, Sh[P.g.Wb] = 1, Sh[P.g.Hb] = 1, Sh[P.g.sa] = 1, Sh[P.g.cf] = 1, Sh[P.g.Xb] = 1, Sh[P.g.Ja] = 1, Sh[P.g.Yb] = 1, Sh[P.g.jd] = 1, Sh[P.g.kd] = 1, Sh[P.g.ef] = 1, Sh[P.g.ld] =
            1, Sh[P.g.Lb] = 1, Sh[P.g.Zb] = 1, Sh[P.g.ce] = 1, Sh[P.g.cb] = 1, Sh[P.g.je] = 1, Sh));
    Object.freeze([P.g.wa, P.g.Da, P.g.Jb, P.g.Pa, P.g.df, P.g.Ba, P.g.af, P.g.ui]);
    var Uh = {},
        Vh = Object.freeze((Uh[P.g.bi] = 1, Uh[P.g.di] = 1, Uh[P.g.ei] = 1, Uh[P.g.fi] = 1, Uh[P.g.gi] = 1, Uh[P.g.hi] = 1, Uh[P.g.ii] = 1, Uh[P.g.ji] = 1, Uh[P.g.ki] = 1, Uh[P.g.Nc] = 1, Uh)),
        Wh = {},
        Xh = Object.freeze((Wh[P.g.Sf] = 1, Wh[P.g.Tf] = 1, Wh[P.g.oc] = 1, Wh[P.g.qc] = 1, Wh[P.g.Uf] = 1, Wh[P.g.Rb] = 1, Wh[P.g.rc] = 1, Wh[P.g.hb] = 1, Wh[P.g.Cb] = 1, Wh[P.g.ib] = 1, Wh[P.g.Ia] = 1, Wh[P.g.sc] = 1, Wh[P.g.Na] = 1, Wh[P.g.Vf] = 1, Wh)),
        Yh = Object.freeze([P.g.ka, P.g.kb, P.g.vc, P.g.yc, P.g.dd, P.g.Ja, P.g.Zb]),
        Zh = Object.freeze([].concat(qa(Yh))),
        $h = Object.freeze([P.g.Wa,
            P.g.Td, P.g.kd, P.g.ef, P.g.Od
        ]),
        ai = Object.freeze([].concat(qa($h))),
        bi = {},
        ci = (bi[P.g.R] = "1", bi[P.g.U] = "2", bi[P.g.P] = "3", bi[P.g.ya] = "4", bi),
        di = {},
        ei = Object.freeze((di[P.g.ka] = 1, di[P.g.Gd] = 1, di[P.g.Ca] = 1, di[P.g.Tb] = 1, di[P.g.Ue] = 1, di[P.g.Hd] = 1, di[P.g.Id] = 1, di[P.g.Jd] = 1, di[P.g.da] = 1, di[P.g.Kd] = 1, di[P.g.Za] = 1, di[P.g.ra] = 1, di[P.g.Va] = 1, di[P.g.Wa] = 1, di[P.g.ab] = 1, di[P.g.Oa] = 1, di[P.g.za] = 1, di[P.g.Ld] = 1, di[P.g.la] = 1, di[P.g.yi] = 1, di[P.g.Qd] = 1, di[P.g.Rd] = 1, di[P.g.af] = 1, di[P.g.yc] = 1, di[P.g.Wb] = 1, di[P.g.Hb] = 1, di[P.g.Pa] =
            1, di[P.g.fd] = 1, di[P.g.wa] = 1, di[P.g.Da] = 1, di[P.g.vg] = 1, di[P.g.wg] = 1, di[P.g.xg] = 1, di[P.g.yg] = 1, di[P.g.Xb] = 1, di[P.g.Ja] = 1, di[P.g.Yb] = 1, di[P.g.jd] = 1, di[P.g.ld] = 1, di[P.g.Aa] = 1, di[P.g.Lb] = 1, di[P.g.Zb] = 1, di[P.g.Xa] = 1, di[P.g.Ea] = 1, di[P.g.Ba] = 1, di[P.g.na] = 1, di)),
        fi = {},
        gi = Object.freeze((fi.search = "s", fi.youtube = "y", fi.playstore = "p", fi.shopping = "h", fi.ads = "a", fi.maps = "m", fi));
    Object.freeze(P.g);
    var hi = {},
        ii = F.google_tag_manager = F.google_tag_manager || {};
    hi.Kg = "4730";
    hi.ie = Number("0") || 0;
    hi.Ya = "dataLayer";
    hi.Zm = "ChEI8LOetAYQuaThp47kzIWHARIlAPEXZWCU8ndrTv3D3gyUHPrVkyjPgeVWp/Z57gC1ZE8VgMoOOxoCGtY\x3d";
    var ji = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        ki = {
            __paused: 1,
            __tg: 1
        },
        li;
    for (li in ji) ji.hasOwnProperty(li) && (ki[li] = 1);
    var mi = zb(""),
        ni, oi = !1;
    ni = oi;
    var pi, qi = !1;
    pi = qi;
    var ri, si = !1;
    ri = si;
    hi.Ed = "www.googletagmanager.com";
    var ti = "" + hi.Ed + (ni ? "/gtag/js" : "/gtm.js"),
        ui = null,
        vi = null,
        wi = {},
        xi = {};

    function yi() {
        var a = ii.sequence || 1;
        ii.sequence = a + 1;
        return a
    }
    hi.lk = "true";
    var zi = "";
    hi.yf = zi;
    var Ai = new function() {
        this.j = "";
        this.H = this.D = !1;
        this.Qa = this.O = this.Z = this.K = ""
    };

    function Bi() {
        var a = Ai.K.length;
        return Ai.K[a - 1] === "/" ? Ai.K.substring(0, a - 1) : Ai.K
    }

    function Ci(a) {
        for (var b = {}, c = na(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Di = new wb,
        Ei = {},
        Fi = {},
        Ii = {
            name: hi.Ya,
            set: function(a, b) {
                h(Lb(a, b), Ei);
                Gi()
            },
            get: function(a) {
                return Hi(a, 2)
            },
            reset: function() {
                Di = new wb;
                Ei = {};
                Gi()
            }
        };

    function Hi(a, b) {
        return b != 2 ? Di.get(a) : Ji(a)
    }

    function Ji(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Ei, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Ki(a, b) {
        Fi.hasOwnProperty(a) || (Di.set(a, b), h(Lb(a, b), Ei), Gi())
    }

    function Li() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Hi(c, 1);
            if (Array.isArray(d) || Xa(d)) d = h(d);
            Fi[c] = d
        }
    }

    function Gi(a) {
        z(Fi, function(b, c) {
            Di.set(b, c);
            h(Lb(b), Ei);
            h(Lb(b, c), Ei);
            a && delete Fi[b]
        })
    }

    function Mi(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Ji(a) : Di.get(a);
        Va(d) === "array" || Va(d) === "object" ? c = h(d) : c = d;
        return c
    };

    function Qi(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Ri = [],
        Si = {};

    function Ti(a) {
        return Ri[a] === void 0 ? !1 : Ri[a]
    };
    var Ui = [];

    function Vi(a) {
        switch (a) {
            case 0:
                return 0;
            case 39:
                return 1;
            case 40:
                return 2;
            case 53:
                return 3;
            case 61:
                return 6;
            case 64:
                return 8;
            case 74:
                return 4;
            case 80:
                return 5;
            case 84:
                return 7
        }
    }

    function R(a) {
        Ui[a] = !0;
        var b = Vi(a);
        b !== void 0 && (Ri[b] = !0)
    }
    R(27);
    R(23);
    R(24);
    R(25);
    R(26);
    R(41);
    R(67);
    R(50);
    R(63);
    R(30);
    R(15);
    R(87);
    R(14);
    R(88);
    R(91);
    R(86);
    R(54);
    R(75);
    R(7);
    R(42);
    R(4);
    R(71);
    R(82);
    R(60);
    R(57);
    R(44);
    R(73);
    R(95);
    R(92);
    R(74);
    R(5);
    R(80);
    Ui[58] = !0;
    Ui[59] = !0;
    Si[1] = Qi('1', 6E4);
    Si[3] = Qi('10', 1);
    Si[2] = Qi('', 50);
    R(20);
    R(12);
    R(56);
    R(83);
    R(43);
    R(84);
    R(70);
    R(64);
    R(76);

    function T(a) {
        return !!Ui[a]
    }
    var Zi = /:[0-9]+$/,
        $i = /^\d+\.fls\.doubleclick\.net$/;

    function aj(a, b, c, d) {
        for (var e = [], f = na(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = na(g.value.split("=")),
                m = k.next().value,
                n = pa(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function bj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = cj(a.protocol) || cj(F.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : F.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || F.location.hostname).replace(Zi, "").toLowerCase());
        return dj(a, b, c, d, e)
    }

    function dj(a, b, c, d, e) {
        var f, g = cj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = ej(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Zi, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || mb("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = aj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function cj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function ej(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var fj = {},
        gj = 0;

    function U(a) {
        var b = fj[a];
        if (!b) {
            var c = H.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || mb("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Zi, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            gj < 5 && (fj[a] = b, gj++)
        }
        return b
    }

    function hj(a) {
        function b(n) {
            var p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = U(a),
            f = a.split(/[?#]/)[0],
            g = e.search,
            k = e.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = c(g);
        k = c(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function ij(a) {
        var b = U(F.location.href),
            c = bj(b, "host", !1);
        if (c && c.match($i)) {
            var d = bj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var jj = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function kj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return U("" + c + b).href
        }
    }

    function lj(a, b) {
        if (Ai.D || pi) return kj(a, b)
    }

    function mj() {
        return !!hi.yf && hi.yf.split("@@").join("") !== "SGTM_TOKEN"
    }

    function nj(a) {
        for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = W(a, c.value);
            if (d) return d
        }
    }

    function oj(a, b) {
        return Ai.D ? "" + Bi() + (b ? jj[a] || "" : "") : a
    };
    var pj = void 0;

    function qj(a) {
        var b = String(a[Ie.oa] || "").replace(/_/g, "");
        return Ib(b, "cvt") ? "cvt" : b
    }
    var rj = F.location.search.indexOf("?gtm_latency=") >= 0 || F.location.search.indexOf("&gtm_latency=") >= 0;
    var sj = {
            sampleRate: "0.005000",
            hk: "",
            Xm: "0.005"
        },
        tj = Math.random(),
        uj;
    if (!(uj = rj)) {
        var vj = sj.sampleRate;
        uj = tj < Number(vj)
    }
    var wj = uj,
        xj = (uc == null ? void 0 : uc.includes("gtm_debug=d")) || rj || !T(45) && wj || T(45) && tj >= 1 - Number(sj.Xm);
    var yj = /gtag[.\/]js/,
        zj = /gtm[.\/]js/,
        Aj = !1;

    function Bj(a) {
        if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
            var b;
            a: {
                if (a.scriptSource) {
                    for (var c = Ai.H, d = U(a.scriptSource), e = c ? d.pathname : "" + d.hostname + d.pathname, f = H.scripts, g = "", k = 0; k < f.length; ++k) {
                        var m = f[k];
                        if (!(m.innerHTML.length === 0 || !c && m.innerHTML.indexOf(a.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || m.innerHTML.indexOf(e) < 0)) {
                            if (m.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                b = String(k);
                                break a
                            }
                            g = String(k)
                        }
                    }
                    if (g) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            var n = b;
            if (n) return Aj = !0, n
        }
        var p = [].slice.call(document.scripts);
        return a.scriptElement ? String(p.indexOf(a.scriptElement)) : "-1"
    }

    function Cj(a) {
        if (Aj) return "1";
        var b = a.scriptSource;
        if (b) {
            if (yj.test(b)) return "3";
            if (zj.test(b)) return "2"
        }
        return "0"
    }

    function Dj(a, b) {
        var c = Ej();
        c.pending || (c.pending = []);
        tb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
    var Fj = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    };

    function Ej() {
        var a = vc("google_tag_data", {}),
            b = a.tidr;
        b || (b = new Fj, a.tidr = b);
        return b
    };
    var Gj = {},
        Hj = !1,
        Mf = {
            ctid: "GTM-W2WPNHD3",
            canonicalContainerId: "168301594",
            Mj: "GTM-W2WPNHD3",
            Nj: "GTM-W2WPNHD3"
        };
    Gj.fe = zb("");

    function Ij() {
        var a = Jj();
        return Hj ? a.map(Kj) : a
    }

    function Lj() {
        var a = Mj();
        return Hj ? a.map(Kj) : a
    }

    function Nj() {
        return Oj(Mf.ctid)
    }

    function Pj() {
        return Oj(Mf.canonicalContainerId || "_" + Mf.ctid)
    }

    function Jj() {
        return Mf.Mj ? Mf.Mj.split("|") : [Mf.ctid]
    }

    function Mj() {
        return Mf.Nj ? Mf.Nj.split("|") : []
    }

    function Qj() {
        var a = Rj(Sj()),
            b = a && a.parent;
        if (b) return Rj(b)
    }

    function Tj() {
        var a = Rj(Sj());
        if (a) {
            for (; a.parent;) {
                var b = Rj(a.parent);
                if (!b) break;
                a = b
            }
            return a
        }
    }

    function Rj(a) {
        var b = Ej();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Oj(a) {
        return Hj ? Kj(a) : a
    }

    function Kj(a) {
        return "siloed_" + a
    }

    function Uj(a) {
        return Hj ? Vj(a) : a
    }

    function Vj(a) {
        a = String(a);
        return Ib(a, "siloed_") ? a.substring(7) : a
    }

    function Wj() {
        var a = !1;
        if (a) {
            var b = Ej();
            if (b.siloed) {
                for (var c = [], d = Jj().map(Kj), e = Mj().map(Kj), f = {}, g = 0; g < b.siloed.length; f = {
                        Bf: void 0
                    }, g++) f.Bf = b.siloed[g], !Hj && tb(f.Bf.isDestination ? e : d, function(k) {
                    return function(m) {
                        return m === k.Bf.ctid
                    }
                }(f)) ? Hj = !0 : c.push(f.Bf);
                b.siloed = c
            }
        }
    }

    function Xj() {
        var a = Ej();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Ij(), f = Lj(), g = {}, k = 0; k < a.pending.length; g = {
                    Ke: void 0
                }, k++) g.Ke = a.pending[k], tb(g.Ke.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ke.target.ctid
                }
            }(g)) ? d || (b = g.Ke.onLoad, d = !0) : c.push(g.Ke);
            a.pending = c;
            if (b) try {
                b(Pj())
            } catch (m) {}
        }
    }

    function Yj() {
        for (var a = Mf.ctid, b = Ij(), c = Lj(), d = function(n, p) {
                var q = {
                    canonicalContainerId: Mf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                tc && (q.scriptElement = tc);
                uc && (q.scriptSource = uc);
                if (T(43) && wj && Qj() === void 0) {
                    var r = Db();
                    q.htmlLoadOrder = Bj(q);
                    q.loadScriptType = Cj(q);
                    T(43) && (pj = Db() - r)
                }
                var t = p ? e.destination : e.container,
                    u = t[n];
                u ? (p && u.state === 0 && O(93), Object.assign(u, q)) : t[n] = q
            }, e = Ej(), f = na(b), g = f.next(); !g.done; g = f.next()) d(g.value, !1);
        for (var k =
                na(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[Pj()] = {};
        Xj()
    }

    function Zj(a) {
        return !!Ej().container[a]
    }

    function ak(a) {
        var b = Ej().destination[a];
        return !!b && !!b.state
    }

    function Sj() {
        return {
            ctid: Nj(),
            isDestination: Gj.fe
        }
    }

    function bk(a) {
        var b = Ej();
        (b.siloed = b.siloed || []).push(a)
    }

    function ck() {
        var a = Ej().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function dk() {
        var a = {};
        z(Ej().destination, function(b, c) {
            c.state === 0 && (a[Vj(b)] = c)
        });
        return a
    }

    function ek(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var fk = {
            gk: Number("5"),
            Rn: Number("")
        },
        gk = [],
        hk = [];

    function ik(a) {
        gk.push(a)
    }
    var jk = !1,
        kk = "?id=" + Mf.ctid,
        lk = void 0,
        mk = {},
        nk = void 0,
        ok = new function() {
            var a = 5;
            fk.gk > 0 && (a = fk.gk);
            this.D = a;
            this.j = 0;
            this.H = []
        },
        pk = 1E3;

    function qk(a, b, c, d) {
        var e = lk;
        if (e === void 0)
            if (a) e = 0;
            else if (c) e = yi();
        else return "";
        for (var f = [oj("https://www.googletagmanager.com"), a ? "/td" : "/a", kk], g = na(a ? hk : gk), k = g.next(); !k.done; k = g.next())
            for (var m = k.value, n = m({
                    eventId: e,
                    Ma: !!b,
                    Cj: !!d,
                    mc: function() {
                        jk = !0
                    }
                }), p = na(n), q = p.next(); !q.done; q = p.next()) {
                var r = na(q.value),
                    t = r.next().value,
                    u = r.next().value;
                f.push("&" + t + "=" + u)
            }
        f.push("&z=0");
        return f.join("")
    }

    function rk() {
        nk && (F.clearTimeout(nk), nk = void 0);
        if (lk !== void 0 && sk) {
            var a;
            (a = mk[lk]) || (a = ok.j < ok.D ? !1 : Db() - ok.H[ok.j % ok.D] < 1E3);
            if (a || pk-- <= 0) O(1), mk[lk] = !0;
            else {
                var b = ok.j++ % ok.D;
                ok.H[b] = Db();
                var c = qk(!1, !0);
                Ec(c);
                sk = jk = !1
            }
        }
    }

    function tk() {
        if (xj) {
            var a = qk(!0, !0, !0, !0);
            jk && (Oc(a), jk = !1)
        }
    }
    var sk = !1;

    function uk(a) {
        mk[a] || (a !== lk && (rk(), lk = a), sk = !0, nk || (nk = F.setTimeout(rk, 500)), qk(!1).length >= 2022 && rk())
    }
    var vk = ub();

    function wk() {
        vk = ub()
    }

    function xk() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(vk)]
        ]
    }
    var yk = "/td?id=" + Mf.ctid,
        zk = ["v", "t", "pid", "dl", "tdp"],
        Ak = ["mcc"],
        Bk = {},
        Ck = {};

    function Dk(a, b, c) {
        Ck[a] = b;
        (c === void 0 || c) && Ek(a)
    }

    function Ek(a, b) {
        if (Bk[a] === void 0 || (b === void 0 ? 0 : b)) Bk[a] = !0
    }

    function Fk(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(Bk).filter(function(c) {
            return Bk[c] === !0 && Ck[c] !== void 0 && (a || !Ak.includes(c))
        }).map(function(c) {
            var d = Ck[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + oj("https://www.googletagmanager.com") + yk + ("" + b + "&z=0")
    }

    function Gk() {
        Object.keys(Bk).forEach(function(a) {
            zk.indexOf(a) < 0 && (Bk[a] = !1)
        })
    }

    function Hk(a) {
        a = a === void 0 ? !1 : a;
        if (xj)
            if (T(44)) {
                var b = Fk(a);
                a ? Oc(b) : Ec(b);
                Gk()
            } else if (xj) {
            var c = qk(!0, !0);
            jk && (Ec(c), jk = !1)
        }
    }

    function Ik() {
        Object.keys(Bk).filter(function(a) {
            return Bk[a] && !zk.includes(a)
        }).length > 0 && Hk(!0)
    }
    var Jk = ub();

    function Kk() {
        Jk = ub()
    }

    function Lk() {
        T(44) ? (Dk("v", "3"), Dk("t", "t"), Dk("pid", function() {
            return String(Jk)
        }), Fc(F, "pagehide", Ik), F.setInterval(Kk, 864E5)) : hk.push(xk)
    }
    var Mk = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Nk = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Ok = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        Pk = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Qk, Rk;
    a: {
        for (var Sk = ["CLOSURE_FLAGS"], Tk = Ba, Uk = 0; Uk < Sk.length; Uk++)
            if (Tk = Tk[Sk[Uk]], Tk == null) {
                Rk = null;
                break a
            }
        Rk = Tk
    }
    var Vk = Rk && Rk[610401301];
    Qk = Vk != null ? Vk : !1;

    function Wk() {
        var a = Ba.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Xk, Yk = Ba.navigator;
    Xk = Yk ? Yk.userAgentData || null : null;

    function Zk(a) {
        return Qk ? Xk ? Xk.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function $k(a) {
        return Wk().indexOf(a) != -1
    };

    function al() {
        return Qk ? !!Xk && Xk.brands.length > 0 : !1
    }

    function bl() {
        return al() ? !1 : $k("Opera")
    }

    function cl() {
        return $k("Firefox") || $k("FxiOS")
    }

    function dl() {
        return al() ? Zk("Chromium") : ($k("Chrome") || $k("CriOS")) && !(al() ? 0 : $k("Edge")) || $k("Silk")
    };

    function el() {
        return Qk ? !!Xk && !!Xk.platform : !1
    }

    function fl() {
        return $k("iPhone") && !$k("iPod") && !$k("iPad")
    }

    function gl() {
        fl() || $k("iPad") || $k("iPod")
    };
    var hl = function(a) {
        hl[" "](a);
        return a
    };
    hl[" "] = function() {};
    bl();
    al() || $k("Trident") || $k("MSIE");
    $k("Edge");
    !$k("Gecko") || Wk().toLowerCase().indexOf("webkit") != -1 && !$k("Edge") || $k("Trident") || $k("MSIE") || $k("Edge");
    Wk().toLowerCase().indexOf("webkit") != -1 && !$k("Edge") && $k("Mobile");
    el() || $k("Macintosh");
    el() || $k("Windows");
    (el() ? Xk.platform === "Linux" : $k("Linux")) || el() || $k("CrOS");
    el() || $k("Android");
    fl();
    $k("iPad");
    $k("iPod");
    gl();
    Wk().toLowerCase().indexOf("kaios");
    var il = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        jl = /#|$/,
        kl = function(a, b) {
            var c = a.search(jl),
                d = il(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        ll = /[?&]($|#)/,
        ml = function(a, b, c) {
            for (var d, e = a.search(jl), f = 0, g, k = [];
                (g = il(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(ll, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                t < 0 || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var nl = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        hl(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        ol = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function pl(a) {
        if (!a || !H.head) return null;
        var b = ql("META");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var rl = function(a) {
            if (F.top == F) return 0;
            if (a === void 0 ? 0 : a) {
                var b = F.location.ancestorOrigins;
                if (b) return b[b.length - 1] == F.location.origin ? 1 : 2
            }
            return nl(F.top) ? 1 : 2
        },
        ql = function(a, b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var sl = "",
        tl, ul = [],
        vl = !1;

    function wl() {
        var a = U(F.location.href);
        return a.hostname + a.pathname
    }

    function xl() {
        var a = [];
        sl && a.push(["dl", encodeURIComponent(sl)]);
        ul.length > 0 && a.push(["tdp", ul.join(".")]);
        tl !== void 0 && a.push(["frm", String(tl)]);
        return a
    }
    var yl = function(a) {
        var b = vl ? [] : xl();
        !vl && a.Ma && (vl = !0, b.length && a.mc());
        return b
    };

    function zl() {
        if (T(44)) {
            var a = wl();
            a && Dk("dl", encodeURIComponent(a));
            Dk("tdp", function() {
                return ul.length > 0 ? ul.join(".") : void 0
            });
            var b = rl(!0);
            b !== void 0 && Dk("frm", String(b))
        } else hk.push(yl)
    };
    var Al = [],
        Bl = [];

    function Cl(a) {
        if (T(44)) Dk(a, "1");
        else {
            if (Bl.indexOf(a) !== -1) return;
            Al.push(a);
            Bl.push(a)
        }
        Hk()
    }

    function Dl(a) {
        if (!Al.length) return [];
        for (var b = xl(), c = na(Al), d = c.next(); !d.done; d = c.next()) b.push([d.value, "1"]);
        a.Ma && (a.mc(), Al.length = 0);
        return b
    };

    function El(a) {
        mb("HEALTH", a)
    };
    var Fl;
    try {
        Fl = JSON.parse(kb("eyIwIjoiSU4iLCIxIjoiSU4tUkoiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        O(123), El(2), Fl = {}
    }

    function Gl() {
        return Fl["0"] || ""
    }

    function Hl() {
        return Fl["1"] || ""
    }

    function Il() {
        var a = !1;
        return a
    }

    function Jl() {
        return Fl["6"] !== !1
    }

    function Kl() {
        var a = "";
        return a
    }

    function Ll() {
        var a = !1;
        return a
    }

    function Ml() {
        var a = "";
        return a
    }
    var Nl = new function(a, b) {
        this.j = a;
        this.defaultValue = b === void 0 ? !1 : b
    }(1933);

    function Ol() {
        var a = vc("google_tag_data", {});
        return a.ics = a.ics || new Pl
    }
    var Pl = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    Pl.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        mb("TAGGING", 19);
        b == null ? mb("TAGGING", 18) : Ql(this, a, b === "granted", c, d, e, f, g)
    };
    Pl.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Ql(this, a[d], void 0, void 0, "", "", b, c)
    };
    var Ql = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && l(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                t = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = t;
            r && F.setTimeout(function() {
                m[b] === t && t.quiet && (mb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    ca = Pl.prototype;
    ca.clearTimeout = function(a, b, c) {
        var d = [a],
            e = (c == null ? void 0 : c.delegatedConsentTypes) || {},
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = na(d), n = m.next(); !n.done; n = m.next()) Rl(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = na(d), q = p.next(); !q.done; q = p.next()) Rl(this, q.value)
    };
    ca.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    ca.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && l(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    ca.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    ca.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        e = d.default;
        if (e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var f = c[b.delegatedConsentTypes[a]] || {};
            e = f.update;
            if (e !== void 0) return e ? 1 : 2;
            e = f.default;
            if (e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    ca.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            vl: b
        })
    };
    var Rl = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Oj = !0)
        }
    };
    Pl.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Oj) {
                d.Oj = !1;
                try {
                    d.vl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Tl = function() {
        var a = Sl,
            b = "nh";
        if (a.nh && a.hasOwnProperty(b)) return a.nh;
        var c = new a;
        return a.nh = c
    };
    var Sl = function() {
        var a = {};
        this.j = function() {
            var b = Nl.j,
                c = Nl.defaultValue;
            return a[b] != null ? a[b] : c
        };
        this.D = function() {
            a[Nl.j] = !0
        }
    };
    var Ul = !1,
        Vl = !1,
        Wl = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1
        },
        Xl = function(a) {
            var b = Ol();
            b.accessedAny = !0;
            return (l(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c, Wl)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Yl = function(a) {
            var b = Ol();
            b.accessedAny = !0;
            return b.getConsentState(a, Wl)
        },
        Zl = function(a) {
            for (var b = {}, c = na(a), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                b[e] = Wl.corePlatformServices[e] !==
                    !1
            }
            return b
        },
        $l = function(a) {
            var b = Ol();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        am = function() {
            if (!Tl().j()) return !1;
            var a = Ol();
            a.accessedAny = !0;
            return a.active
        },
        bm = function(a, b) {
            Ol().addListener(a, b)
        },
        cm = function(a, b) {
            Ol().notifyListeners(a, b)
        },
        dm = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!$l(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                bm(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        em = function(a, b) {
            function c() {
                for (var k = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Xl(n) && !f[n] && k.push(n)
                }
                return k
            }

            function d(k) {
                for (var m = 0; m < k.length; m++) f[k[m]] = !0
            }
            var e = l(b) ? [b] : b,
                f = {},
                g = c();
            g.length !== e.length && (d(g), bm(e, function(k) {
                function m(q) {
                    q.length !== 0 && (d(q), k.consentTypes = q, a(k))
                }
                var n = c();
                if (n.length !== 0) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : F.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };
    var fm = [P.g.R, P.g.U, P.g.P, P.g.ya],
        gm, hm;

    function im(a) {
        for (var b = a[P.g.nc], c = Array.isArray(b) ? b : [b], d = {
                Ae: 0
            }; d.Ae < c.length; d = {
                Ae: d.Ae
            }, ++d.Ae) z(a, function(e) {
            return function(f, g) {
                if (f !== P.g.nc) {
                    var k = c[e.Ae],
                        m = Gl(),
                        n = Hl();
                    Vl = !0;
                    Ul && mb("TAGGING", 20);
                    Ol().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function jm(a) {
        !hm && gm && Cl("crc");
        hm = !0;
        var b = a[P.g.nc];
        b && O(40);
        var c = a[P.g.Qe];
        c && O(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                Be: 0
            }; e.Be < d.length; e = {
                Be: e.Be
            }, ++e.Be) z(a, function(f) {
            return function(g, k) {
                if (g !== P.g.nc && g !== P.g.Qe) {
                    var m = d[f.Be],
                        n = Number(c),
                        p = Gl(),
                        q = Hl();
                    n = n === void 0 ? 0 : n;
                    Ul = !0;
                    Vl && mb("TAGGING", 20);
                    Ol().default(g, k, m, p, q, n, Wl)
                }
            }
        }(e))
    }

    function km(a, b) {
        gm = !0;
        z(a, function(c, d) {
            Ul = !0;
            Vl && mb("TAGGING", 20);
            Ol().update(c, d, Wl)
        });
        cm(b.eventId, b.priorityId)
    }

    function lm(a) {
        a.hasOwnProperty("all") && (Wl.selectedAllCorePlatformServices = !0, z(gi, function(b) {
            Wl.corePlatformServices[b] = a.all === "granted";
            Wl.usedCorePlatformServices = !0
        }));
        z(a, function(b, c) {
            b !== "all" && (Wl.corePlatformServices[b] = c === "granted", Wl.usedCorePlatformServices = !0)
        })
    }

    function X(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Xl(b)
        })
    }

    function mm(a, b) {
        bm(a, b)
    }

    function nm(a, b) {
        em(a, b)
    }

    function om(a, b) {
        dm(a, b)
    }

    function pm() {
        var a = [P.g.R, P.g.ya, P.g.P];
        Ol().waitForUpdate(a, 500, Wl)
    }

    function qm(a) {
        for (var b = na(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Ol().clearTimeout(d, void 0, Wl)
        }
        cm()
    }
    var rm = function() {
        if (ii.pscdl === void 0) {
            var a = function(b) {
                ii.pscdl = b
            };
            try {
                "cookieDeprecationLabel" in rc ? (a("pending"), rc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
        }
    };
    var sm = /[A-Z]+/,
        tm = /\s/;

    function um(a, b) {
        if (l(a)) {
            a = Bb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (sm.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || tm.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        ia: d + "-" + f[0],
                        ma: f
                    }
                }
            }
        }
    }

    function vm(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = um(a[d], b);
            e && (c[e.id] = e)
        }
        wm(c);
        var f = [];
        z(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function wm(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ma[xm[2]] && b.push(d.ia)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var ym = {},
        xm = (ym[0] = 0, ym[1] = 0, ym[2] = 1, ym[3] = 0, ym[4] = 1, ym[5] = 2, ym[6] = 0, ym[7] = 0, ym[8] = 0, ym);
    var zm = Number('') || 500,
        Am = {},
        Bm = {},
        Cm = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Dm = {},
        Em = Object.freeze((Dm[P.g.Ja] = !0, Dm)),
        Fm = H.location.search.indexOf("?gtm_diagnostics=") >= 0 || H.location.search.indexOf("&gtm_diagnostics=") >= 0,
        Gm = void 0;

    function Hm(a, b) {
        if (b.length && xj) {
            var c;
            (c = Am)[a] != null || (c[a] = []);
            Bm[a] != null || (Bm[a] = []);
            var d = b.filter(function(e) {
                return !Bm[a].includes(e)
            });
            Am[a].push.apply(Am[a], qa(d));
            Bm[a].push.apply(Bm[a], qa(d));
            !Gm && d.length > 0 && (T(44) ? Ek("tdc", !0) : Fc(F, "pagehide", Im), Gm = F.setTimeout(function() {
                T(44) || Gc(F, "pagehide", Im);
                Hk();
                Am = {};
                Gm = void 0
            }, zm))
        }
    }

    function Jm(a, b, c) {
        if (xj && a === "config") {
            var d, e = (d = um(b)) == null ? void 0 : d.ma;
            if (!(e && e.length > 1)) {
                var f, g = vc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var k = h(c.K);
                h(c.j, k);
                var m = [],
                    n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = Km(f[n], k);
                        p.length && (Fm && console.log(p), m.push(n))
                    }
                m.length && (Hm(b, m), mb("TAGGING", Cm[H.readyState] || 14));
                f[b] = k
            }
        }
    }

    function Lm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Km(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, t) {
                var u;
                Va(t) === "object" ? u = t[r] : Va(t) === "array" && (u = t[r]);
                return u === void 0 ? Em[r] : u
            },
            f = Lm(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Va(m) === "object" || Va(m) === "array",
                    q = Va(n) === "object" || Va(n) === "array";
                if (p && q) Km(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function Mm(a) {
        var b = Nm();
        if (!b) return [];
        var c = [
            ["tdc", b]
        ];
        a.Ma && a.mc();
        return c
    }

    function Im() {
        Object.keys(Am).length !== 0 && (F.clearTimeout(Gm), tk())
    }

    function Nm() {
        var a = [],
            b;
        for (b in Am) Am.hasOwnProperty(b) && a.push(b + "*" + Am[b].join("."));
        return a.length ? a.join("!") : void 0
    }

    function Om() {
        T(44) ? Dk("tdc", function() {
            Gm && (F.clearTimeout(Gm), Gm = void 0);
            return Nm()
        }, !1) : hk.push(Mm)
    };
    var Pm = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.O = d;
            this.H = e;
            this.K = f;
            this.D = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Qm = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.O);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.D);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.O);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.D);
                    break;
                case 4:
                    c.push(a.j), c.push(a.O), c.push(a.H), c.push(a.K)
            }
            return c
        },
        W = function(a, b, c, d) {
            for (var e = na(Qm(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        Rm = function(a) {
            for (var b = {}, c = Qm(a, 4), d = na(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = na(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        Sm = function(a, b, c) {
            function d(n) {
                Xa(n) && z(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = Qm(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = na(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Tm = function(a) {
            for (var b = [P.g.Sc,
                    P.g.Oc, P.g.Pc, P.g.Qc, P.g.Rc, P.g.Tc, P.g.Uc
                ], c = Qm(a, 3), d = na(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = na(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Um = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.D = {};
            this.O = {};
            this.j = {};
            this.H = {};
            this.Z = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        Vm = function(a, b) {
            a.D = b;
            return a
        },
        Wm = function(a,
            b) {
            a.O = b;
            return a
        },
        Xm = function(a, b) {
            a.j = b;
            return a
        },
        Ym = function(a, b) {
            a.H = b;
            return a
        },
        Zm = function(a, b) {
            a.Z = b;
            return a
        },
        $m = function(a, b) {
            a.K = b;
            return a
        },
        an = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        bn = function(a, b) {
            a.onSuccess = b;
            return a
        },
        cn = function(a, b) {
            a.onFailure = b;
            return a
        },
        dn = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        en = function(a) {
            return new Pm(a.eventId, a.priorityId, a.D, a.O, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var fn = {};

    function gn(a, b, c) {
        wj && a !== void 0 && (fn[a] = fn[a] || [], fn[a].push(c + b), uk(a))
    }

    function hn(a) {
        var b = a.eventId,
            c = a.Ma,
            d = [],
            e = fn[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete fn[b];
        return d
    };

    function jn(a, b) {
        var c = um(Oj(a), !0);
        c && kn.register(c, b)
    }

    function ln(a, b, c, d) {
        var e = um(c, d.isGtmEvent);
        e && kn.push("event", [b, a], e, d)
    }

    function mn(a, b, c, d) {
        var e = um(c, d.isGtmEvent);
        e && kn.push("get", [a, b], e, d)
    }

    function nn(a) {
        var b = um(Oj(a), !0),
            c;
        b ? c = on(kn, b).j : c = {};
        return c
    }

    function pn(a, b) {
        var c = um(Oj(a), !0);
        if (c) {
            var d = kn,
                e = h(b, null);
            h(on(d, c).j, e);
            on(d, c).j = e
        }
    }
    var qn = function() {
            this.O = {};
            this.j = {};
            this.D = {};
            this.Z = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        rn = function(a, b, c, d) {
            this.D = Db();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        sn = function() {
            this.destinations = {};
            this.D = {};
            this.j = []
        },
        on = function(a, b) {
            var c = b.ia;
            return a.destinations[c] = a.destinations[c] || new qn
        },
        tn = function(a, b, c, d) {
            if (d.j) {
                var e = on(a, d.j),
                    f = e.Z;
                if (f) {
                    var g = h(c, null),
                        k = h(e.O[d.j.id], null),
                        m = h(e.K, null),
                        n = h(e.j, null),
                        p = h(a.D, null),
                        q = {};
                    if (wj) try {
                        q = h(Ei)
                    } catch (v) {
                        O(72)
                    }
                    var r =
                        d.j.prefix,
                        t = function(v) {
                            gn(d.messageContext.eventId, r, v)
                        },
                        u = en(dn(cn(bn(an(Zm(Ym($m(Xm(Wm(Vm(new Um(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        gn(d.messageContext.eventId, r, "1"), Jm(d.type, d.j.id, u),
                            f(d.j.id, b, d.D, u)
                    } catch (v) {
                        gn(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    sn.prototype.register = function(a, b, c) {
        var d = on(this, a);
        d.status !== 3 && (d.Z = b, d.status = 3, c && (h(d.j, c), d.j = c), this.flush())
    };
    sn.prototype.push = function(a, b, c, d) {
        c !== void 0 && (on(this, c).status === 1 && (on(this, c).status = 2, this.push("require", [{}], c, {})), on(this, c).H && (d.deferrable = !1));
        this.j.push(new rn(a, c, b, d));
        d.deferrable || this.flush()
    };
    sn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.j.length; e = {
                Ec: void 0,
                eh: void 0
            }) {
            var f = this.j[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || on(this, g).H ? (f.messageContext.deferrable = !1, this.j.push(f)) : c.push(f), this.j.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (on(this, g).status !== 3 && !a) {
                            this.j.push.apply(this.j, c);
                            return
                        }
                        break;
                    case "set":
                        z(f.args[0], function(r, t) {
                            h(Lb(r, t), b.D)
                        });
                        break;
                    case "config":
                        var k = on(this, g);
                        e.Ec = {};
                        z(f.args[0], function(r) {
                            return function(t, u) {
                                h(Lb(t, u),
                                    r.Ec)
                            }
                        }(e));
                        var m = !!e.Ec[P.g.Zb];
                        delete e.Ec[P.g.Zb];
                        var n = g.ia === g.id;
                        m || (n ? k.K = {} : k.O[g.id] = {});
                        k.H && m || tn(this, P.g.ba, e.Ec, f);
                        k.H = !0;
                        n ? h(e.Ec, k.K) : (h(e.Ec, k.O[g.id]), O(70));
                        d = !0;
                        break;
                    case "event":
                        e.eh = {};
                        z(f.args[0], function(r) {
                            return function(t, u) {
                                h(Lb(t, u), r.eh)
                            }
                        }(e));
                        tn(this, f.args[1], e.eh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[P.g.qb] = f.args[0], p[P.g.Fb] = f.args[1], p);
                        tn(this, P.g.Ta, q, f)
                }
                this.j.shift();
                un(this, f)
            }
        }
        this.j.push.apply(this.j, c);
        d && this.flush()
    };
    var un = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = on(a, b.j).D[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.D)
                                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        kn = new sn;

    function vn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = ql("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = lc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Pk(e, "load", f);
                Pk(e, "error", f)
            };
            Ok(e, "load", f);
            Ok(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var xn = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            ol(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            wn(c, b)
        },
        wn = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else vn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var yn = function() {
        this.O = this.O;
        this.D = this.D
    };
    yn.prototype.O = !1;
    yn.prototype.dispose = function() {
        this.O || (this.O = !0, this.Qa())
    };
    yn.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    yn.prototype.addOnDisposeCallback = function(a, b) {
        this.O ? b !== void 0 ? a.call(b) : a() : (this.D || (this.D = []), this.D.push(b !== void 0 ? Fa(a, b) : a))
    };
    yn.prototype.Qa = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };
    var zn = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        An = function(a, b) {
            b = b === void 0 ? {} : b;
            yn.call(this);
            this.H = a;
            this.j = null;
            this.Z = {};
            this.nd = 0;
            var c;
            this.bc = (c = b.Qm) != null ? c : 500;
            var d;
            this.ac = (d = b.En) != null ? d : !1;
            this.K =
                null
        };
    ya(An, yn);
    An.prototype.Qa = function() {
        this.Z = {};
        this.K && (Pk(this.H, "message", this.K), delete this.K);
        delete this.Z;
        delete this.H;
        delete this.j;
        yn.prototype.Qa.call(this)
    };
    var Cn = function(a) {
        return typeof a.H.__tcfapi === "function" || Bn(a) != null
    };
    An.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.ac
            },
            d = Nk(function() {
                return a(c)
            }),
            e = 0;
        this.bc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.bc));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = zn(c), c.internalBlockOnErrors = b.ac, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Dn(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    An.prototype.removeEventListener = function(a) {
        a && a.listenerId && Dn(this, "removeEventListener", null, a.listenerId)
    };
    var Fn = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = En(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && En(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? En(a.purpose.legitimateInterests,
                b) && En(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        En = function(a, b) {
            return !(!a || !a[b])
        },
        Dn = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.H.__tcfapi === "function") {
                var e = a.H.__tcfapi;
                e(b, 2, c, d)
            } else if (Bn(a)) {
                Gn(a);
                var f = ++a.nd;
                a.Z[f] = c;
                if (a.j) {
                    var g = {};
                    a.j.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Bn = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        Gn = function(a) {
            a.K || (a.K = function(b) {
                try {
                    var c;
                    c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.Z[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Ok(a.H, "message", a.K))
        },
        Hn = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = zn(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (xn({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var In = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Jn() {
        var a = ii.tcf || {};
        return ii.tcf = a
    }
    var Kn = function() {
            return new An(F, {
                Qm: -1
            })
        },
        Qn = function() {
            var a = Jn(),
                b = Kn();
            Cn(b) && !Ln() && !Mn() && O(124);
            if (!a.active && Cn(b)) {
                Ln() && (a.active = !0, a.kc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Ol().active = !0, a.tcString = "tcunavailable");
                pm();
                try {
                    b.addEventListener(function(c) {
                        if (c.internalErrorState !== 0) Nn(a), qm([P.g.R, P.g.ya, P.g.P]), Ol().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Mn() && (a.active = !0), !On(c) || Ln() || Mn()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (c.gdprApplies === !1) {
                                var e = {},
                                    f;
                                for (f in In) In.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (On(c)) {
                                var g = {},
                                    k;
                                for (k in In)
                                    if (In.hasOwnProperty(k))
                                        if (k === "1") {
                                            var m, n = c,
                                                p = {
                                                    zl: !0
                                                };
                                            p = p === void 0 ? {} : p;
                                            m = Hn(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Gj : (p.Gj || n.gdprApplies !== void 0 || p.zl) && (p.Gj || typeof n.tcString === "string" && n.tcString.length) ? Fn(n, "1", 0) : !0 : !1;
                                            g["1"] = m
                                        } else g[k] = Fn(c, k, In[k]);
                                d = g
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.kc =
                                    d;
                                var q = {},
                                    r = (q[P.g.R] = a.kc["1"] ? "granted" : "denied", q);
                                a.gdprApplies !== !0 ? (qm([P.g.R, P.g.ya, P.g.P]), Ol().active = !0) : (r[P.g.ya] = a.kc["3"] && a.kc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[P.g.P] = a.kc["1"] && a.kc["7"] ? "granted" : "denied" : qm([P.g.P]), km(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: Pn() || ""
                                }))
                            }
                        } else qm([P.g.R, P.g.ya, P.g.P])
                    })
                } catch (c) {
                    Nn(a), qm([P.g.R, P.g.ya, P.g.P]), Ol().active = !0
                }
            }
        };

    function Nn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function On(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }
    var Ln = function() {
        return F.gtag_enable_tcf_support === !0
    };

    function Mn() {
        return Jn().enableAdvertiserConsentMode === !0
    }
    var Pn = function() {
            var a = Jn();
            if (a.active) return a.tcString
        },
        Sn = function() {
            var a = Jn();
            if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
        },
        Tn = function(a) {
            if (!In.hasOwnProperty(String(a))) return !0;
            var b = Jn();
            return b.active && b.kc ? !!b.kc[String(a)] : !0
        };
    var Un = [P.g.R, P.g.U, P.g.P, P.g.ya],
        Vn = {},
        Wn = (Vn[P.g.R] = 1, Vn[P.g.U] = 2, Vn);

    function Xn(a) {
        if (a === void 0) return 0;
        switch (W(a, P.g.ka)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function Yn() {
        return T(64) && Hl() === "US-CO" && rc.globalPrivacyControl === !0
    }
    var Zn = function(a) {
            if (Yn()) return !1;
            var b = Xn(a);
            if (b === 3) return !1;
            switch (Yl(P.g.ya)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return b === 2;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        $n = function() {
            return am() || !Xl(P.g.R) || !Xl(P.g.U)
        },
        ao = function() {
            var a = {},
                b;
            for (b in Wn) Wn.hasOwnProperty(b) && (a[Wn[b]] = Yl(b));
            return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0)
        },
        bo = {},
        co = (bo[P.g.R] = 0, bo[P.g.U] = 1, bo[P.g.P] = 2, bo[P.g.ya] = 3, bo);

    function eo(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var fo = function(a) {
            for (var b = "1", c = 0; c < Un.length; c++) {
                var d = b,
                    e, f = Un[c],
                    g = Wl.delegatedConsentTypes[f];
                e = g === void 0 ? 0 : co.hasOwnProperty(g) ? 12 | co[g] : 8;
                var k = Ol();
                k.accessedAny = !0;
                var m = k.entries[f] || {};
                e = e << 2 | eo(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [eo(m.declare) << 4 | eo(m.default) << 2 | eo(m.update)])
            }
            var n = b,
                p = (Yn() ? 1 : 0) << 3,
                q = (am() ? 1 : 0) << 2,
                r = Xn(a);
            return b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p |
                q | r
            ]
        },
        go = function() {
            if (!Xl(P.g.P)) return "-";
            for (var a = Object.keys(gi), b = Zl(a), c = "", d = na(a), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                b[f] && (c += gi[f])
            }
            T(51) && (Wl.usedCorePlatformServices ? Wl.selectedAllCorePlatformServices : 1) && (c += "o");
            return c || "-"
        },
        ho = function() {
            return Jl() || (Ln() || Mn()) && Sn() === "1" ? "1" : "0"
        },
        io = function() {
            return (Jl() ? !0 : !(!Ln() && !Mn()) && Sn() === "1") || !Xl(P.g.P)
        },
        jo = function() {
            var a = "0",
                b = "0",
                c;
            var d = Jn();
            c = d.active ? d.cmpId : void 0;
            typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >>
                6 & 63
            ], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var g = Jn();
            f = g.active ? g.tcfPolicyVersion : void 0;
            typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var k = 0;
            Jl() && (k |= 1);
            Sn() === "1" && (k |= 2);
            Ln() && (k |= 4);
            var m;
            var n = Jn();
            m = n.enableAdvertiserConsentMode !== void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            m === "1" && (k |= 8);
            Ol().waitPeriodTimedOut && (k |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
        },
        ko = function() {
            return Hl() === "US-CO"
        };

    function lo() {
        var a = !1;
        return a
    };
    var mo = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function no(a) {
        a = a === void 0 ? {} : a;
        var b = Mf.ctid.split("-")[0].toUpperCase(),
            c = {};
        c.ctid = Mf.ctid;
        c.Bm = hi.ie;
        c.Dm = hi.Kg;
        c.Zl = Gj.fe ? 2 : 1;
        c.Km = a.Xj;
        c.qe = Mf.canonicalContainerId;
        c.qe !== a.xa && (c.xa = a.xa);
        var d = Qj();
        c.mm = d ? d.canonicalContainerId : void 0;
        ni ? (c.Kf = mo[b], c.Kf || (c.Kf = 0)) : c.Kf = ri ? 13 : 10;
        Ai.H ? (c.Hf = 0, c.Zk = 2) : pi ? c.Hf = 1 : lo() ? c.Hf = 2 : c.Hf = 3;
        var e = {};
        e[6] = Hj;
        c.fl = e;
        var f = a.Af,
            g;
        var k = c.Kf,
            m = c.Hf;
        k === void 0 ? g = "" : (m || (m = 0), g = "" + He(1, 1) + Ee(k << 2 | m));
        var n = c.Zk,
            p = "4" + g + (n ? "" + He(2, 1) + Ee(n) : ""),
            q, r = c.Dm;
        q = r &&
            Ge.test(r) ? "" + He(3, 2) + r : "";
        var t, u = c.Bm;
        t = u ? "" + He(4, 1) + Ee(u) : "";
        var v;
        var w = c.ctid;
        if (w && f) {
            var x = w.split("-"),
                y = x[0].toUpperCase();
            if (y !== "GTM" && y !== "OPT") v = "";
            else {
                var B = x[1];
                v = "" + He(5, 3) + Ee(1 + B.length) + (c.Zl || 0) + B
            }
        } else v = "";
        var A = c.Km,
            D = c.qe,
            E = c.xa,
            C = c.Pn,
            G = p + q + t + v + (A ? "" + He(6, 1) + Ee(A) : "") + (D ? "" + He(7, 3) + Ee(D.length) + D : "") + (E ? "" + He(8, 3) + Ee(E.length) + E : "") + (C ? "" + He(9, 3) + Ee(C.length) + C : ""),
            M;
        var L = c.fl;
        L = L === void 0 ? {} : L;
        for (var S = [], V = na(Object.keys(L)), ba = V.next(); !ba.done; ba = V.next()) {
            var aa = ba.value;
            S[Number(aa)] = L[aa]
        }
        if (S.length) {
            var Q = He(10, 3),
                oa;
            if (S.length === 0) oa = Ee(0);
            else {
                for (var ma = [], ia = 0, za = !1, Ma = 0; Ma < S.length; Ma++) {
                    za = !0;
                    var Da = Ma % 6;
                    S[Ma] && (ia |= 1 << Da);
                    Da === 5 && (ma.push(Ee(ia)), ia = 0, za = !1)
                }
                za && ma.push(Ee(ia));
                oa = ma.join("")
            }
            var Sa = oa;
            M = "" + Q + Ee(Sa.length) + Sa
        } else M = "";
        var ib = c.mm;
        return G + M + (ib ? "" + He(11, 3) + Ee(ib.length) + ib : "")
    };
    var oo = {
            oj: "service_worker_endpoint",
            Lg: "shared_user_id",
            Mg: "shared_user_id_requested",
            ke: "shared_user_id_source"
        },
        po;

    function qo(a) {
        if (!po) {
            po = {};
            for (var b = na(Object.keys(oo)), c = b.next(); !c.done; c = b.next()) po[oo[c.value]] = !0
        }
        return !!po[a]
    }

    function ro(a, b) {
        b = b === void 0 ? !1 : b;
        if (qo(a)) {
            var c, d, e = (d = (c = vc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = na(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function so(a, b) {
        var c = ro(a, !0);
        c && c.set(b)
    }

    function to(a) {
        var b;
        return (b = ro(a)) == null ? void 0 : b.get()
    }

    function uo(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = ro(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function vo(a, b) {
        var c = ro(a);
        return c ? c.unsubscribe(b) : !1
    };

    function wo(a) {
        return a.origin !== "null"
    };

    function xo(a, b, c, d) {
        var e;
        if (yo(d)) {
            for (var f = [], g = String(b || zo()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function Ao(a, b, c, d, e) {
        if (yo(e)) {
            var f = Bo(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = Co(f, function(g) {
                    return g.ol
                }, b);
                if (f.length === 1) return f[0].id;
                f = Co(f, function(g) {
                    return g.qm
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function Do(a, b, c, d) {
        var e = zo(),
            f = window;
        wo(f) && (f.document.cookie = a);
        var g = zo();
        return e !== g || c !== void 0 && xo(b, g, !1, d).indexOf(c) >= 0
    }

    function Eo(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!yo(c.Ab)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Fo(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.fm);
        g = e(g, "samesite", c.Em);
        c.Fm && (g = f(g,
            "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = Go(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = p[t] !== "none" ? p[t] : void 0,
                    v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Ho(u, c.path) && Do(v, a, b, c.Ab)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return Ho(n, c.path) ? 1 : Do(g, a, b, c.Ab) ? 0 : 1
    }

    function Io(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Eo(a, b, c)
    }

    function Co(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function Bo(a, b, c) {
        for (var d = [], e = xo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        ol: Number(n[0]) || 1,
                        qm: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function Fo(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var Jo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ko = /(^|\.)doubleclick\.net$/i;

    function Ho(a, b) {
        return a !== void 0 && (Ko.test(window.document.location.hostname) || b === "/" && Jo.test(a))
    }

    function Lo(a) {
        if (!a) return 1;
        a = a.indexOf(".") === 0 ? a.substring(1) : a;
        return a.split(".").length
    }

    function Mo(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function No(a, b) {
        var c = "" + Lo(a),
            d = Mo(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var zo = function() {
            return wo(window) ? window.document.cookie : ""
        },
        yo = function(a) {
            return a && Tl().j() ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return $l(b) && Xl(b)
            }) : !0
        },
        Go = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Ko.test(e) || Jo.test(e) || a.push("none");
            return a
        };

    function Oo(a) {
        var b = Math.round(Math.random() * 2147483647),
            c;
        if (a) {
            var d = 1,
                e, f, g;
            if (a)
                for (d = 0, f = a.length - 1; f >= 0; f--) g = a.charCodeAt(f), d = (d << 6 & 268435455) + g + (g << 14), e = d & 266338304, d = e !== 0 ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else c = String(b);
        return c
    }

    function Po(a) {
        return [Oo(a), Math.round(Db() / 1E3)].join(".")
    }

    function Qo(a, b, c, d, e) {
        var f = Lo(b);
        return Ao(a, f, Mo(c), d, e)
    }

    function Ro(a, b, c, d) {
        return [b, No(c, d), a].join(".")
    };

    function So(a, b, c, d) {
        var e, f = Number(a.zb != null ? a.zb : void 0);
        f !== 0 && (e = new Date((b || Db()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Ab: d
        }
    };
    var To;

    function Uo() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Vo,
            d = Wo,
            e = Xo();
        if (!e.init) {
            Fc(H, "mousedown", a);
            Fc(H, "keyup", a);
            Fc(H, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Yo(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Xo().decorators.push(f)
    }

    function Zo(a, b, c) {
        for (var d = Xo().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== H.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && Gb(e, g.callback())
            }
        }
        return e
    }

    function Xo() {
        var a = vc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var $o = /(.*?)\*(.*?)\*(.*)/,
        ap = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        bp = /^(?:www\.|m\.|amp\.)+/,
        cp = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function dp(a) {
        var b = cp.exec(a);
        if (b) return {
            Bh: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function ep(a, b) {
        var c = [rc.userAgent, (new Date).getTimezoneOffset(), rc.userLanguage || rc.language, Math.floor(Db() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = To)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        To = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ To[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function fp() {
        return function(a) {
            var b = U(F.location.href),
                c = b.search.replace("?", ""),
                d = aj(c, "_gl", !1, !0) || "";
            a.query = gp(d) || {};
            var e = bj(b, "fragment"),
                f;
            var g = -1;
            if (Ib(e, "_gl=")) g = 4;
            else {
                var k = e.indexOf("&_gl=");
                k > 0 && (g = k + 3 + 2)
            }
            if (g < 0) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = m < 0 ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = gp(f || "") || {}
        }
    }

    function hp(a) {
        var b = fp(),
            c = Xo();
        c.data || (c.data = {
            query: {},
            fragment: {}
        }, b(c.data));
        var d = {},
            e = c.data;
        e && (Gb(d, e.query), a && Gb(d, e.fragment));
        return d
    }
    var gp = function(a) {
        try {
            var b = ip(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = kb(d[e + 1]);
                    c[f] = g
                }
                mb("TAGGING", 6);
                return c
            }
        } catch (k) {
            mb("TAGGING", 8)
        }
    };

    function ip(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = $o.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ep(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                mb("TAGGING", 7)
            }
        }
    }

    function jp(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && w !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = dp(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.Bh + k + m
    }

    function kp(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (v.push(w), v.push(jb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", ep(y), y].join("*");
                d ? (Ti(3) || Ti(1) || !p) && lp("_gl", u, a, p, q) : mp("_gl", u, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Zo(b, 1, d),
            f = Zo(b, 2, d),
            g = Zo(b, 4, d),
            k = Zo(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Ti(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            np(m, k[m], a)
    }

    function np(a, b, c) {
        c.tagName.toLowerCase() === "a" ? mp(a, b, c) : c.tagName.toLowerCase() === "form" && lp(a, b, c)
    }

    function mp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Ti(4) || d)) {
                var k = F.location.href,
                    m = dp(c.href),
                    n = dp(k);
                g = !(m && n && m.Bh === n.Bh && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = jp(a, b, c.href, d, e);
            hc.test(p) && (c.href = p)
        }
    }

    function lp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = jp(a, b, c.action, d, e);
                    hc.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = H.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Vo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || kp(e, e.hostname)
            }
        } catch (g) {}
    }

    function Wo(a) {
        try {
            if (a.action) {
                var b = bj(U(a.action), "host");
                kp(a, b)
            }
        } catch (c) {}
    }

    function op(a, b, c, d) {
        Uo();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Yo(a, b, e, d, !1);
        e === 2 && mb("TAGGING", 23);
        d && mb("TAGGING", 24)
    }

    function pp(a, b) {
        Uo();
        Yo(a, [dj(F.location, "host", !0)], b, !0, !0)
    }

    function qp() {
        var a = H.location.hostname,
            b = ap.exec(H.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(bp, ""),
            m = e.replace(bp, "");
        return k === m || Jb(k, "." + m)
    }

    function rp(a, b) {
        return a === !1 ? !1 : a || b || qp()
    };
    var sp = ["1"],
        tp = {},
        up = {};

    function vp(a, b) {
        b = b === void 0 ? !0 : b;
        var c = wp(a.prefix);
        if (!tp[c])
            if (xp(c, a.path, a.domain)) {
                var d = up[wp(a.prefix)];
                yp(a, d ? d.id : void 0, d ? d.vh : void 0)
            } else {
                var e = ij("auiddc");
                if (e) mb("TAGGING", 17), tp[c] = e;
                else if (b) {
                    var f = wp(a.prefix),
                        g = Po();
                    zp(f, g, a);
                    xp(c, a.path, a.domain)
                }
            }
    }

    function yp(a, b, c) {
        var d = wp(a.prefix),
            e = tp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Db() / 1E3)));
                    zp(d, k, a, g * 1E3)
                }
            }
        }
    }

    function zp(a, b, c, d) {
        var e = Ro(b, "1", c.domain, c.path),
            f = So(c, d);
        f.Ab = Ap();
        Io(a, e, f)
    }

    function xp(a, b, c) {
        var d = Qo(a, b, c, sp, Ap());
        if (!d) return !1;
        Bp(a, d);
        return !0
    }

    function Bp(a, b) {
        var c = b.split(".");
        c.length === 5 ? (tp[a] = c.slice(0, 2).join("."), up[a] = {
            id: c.slice(2, 4).join("."),
            vh: Number(c[4]) || 0
        }) : c.length === 3 ? up[a] = {
            id: c.slice(0, 2).join("."),
            vh: Number(c[2]) || 0
        } : tp[a] = b
    }

    function wp(a) {
        return (a || "_gcl") + "_au"
    }

    function Cp(a) {
        function b() {
            Xl(c) && a()
        }
        var c = Ap();
        dm(function() {
            b();
            Xl(c) || em(b, c)
        }, c)
    }

    function Dp(a) {
        var b = hp(!0),
            c = wp(a.prefix);
        Cp(function() {
            var d = b[c];
            if (d) {
                Bp(c, d);
                var e = Number(tp[c].split(".")[1]) * 1E3;
                if (e) {
                    mb("TAGGING", 16);
                    var f = So(a, e);
                    f.Ab = Ap();
                    var g = Ro(d, "1", a.domain, a.path);
                    Io(c, g, f)
                }
            }
        })
    }

    function Ep(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = Qo(a, e.path, e.domain, sp, Ap());
            k && (g[a] = k);
            return g
        };
        Cp(function() {
            op(f, b, c, d)
        })
    }

    function Ap() {
        return ["ad_storage", "ad_user_data"]
    };

    function Fp(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Oh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function Gp(a, b) {
        var c = Fp(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].Oh] || (d[c[e].Oh] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    aa: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Oh].push(g)
            }
        }
        return d
    };
    var Hp = {},
        Ip = (Hp.k = {
            La: /^[\w-]+$/
        }, Hp.b = {
            La: /^[\w-]+$/,
            Ih: !0
        }, Hp.i = {
            La: /^[1-9]\d*$/
        }, Hp);
    var Jp = {},
        Mp = (Jp[5] = {
            ik: {
                2: Kp
            },
            Tg: ["k", "i", "b"]
        }, Jp[4] = {
            ik: {
                2: Kp,
                GCL: Lp
            },
            Tg: ["k", "i", "b"]
        }, Jp);

    function Np(a) {
        var b = Mp[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.ik[c];
                if (d) return d(a, 5)
            }
        }
    }

    function Kp(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = Mp[b];
            if (e) {
                for (var f = e.Tg, g = na(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = Ip[n];
                        q && (q.Ih ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function Op(a, b) {
        var c = Mp[5];
        if (c) {
            for (var d = [], e = na(c.Tg), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = Ip[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.Ih && Array.isArray(m))
                            for (var n = na(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function Lp(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var Pp = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Qp(a) {
        if (Mp[5]) {
            for (var b = [], c = xo(a, void 0, void 0, Pp.get(5)), d = na(c), e = d.next(); !e.done; e = d.next()) {
                var f = Np(e.value);
                f && (Rp(f), b.push(f))
            }
            return b
        }
    }

    function Sp(a, b, c, d) {
        c = c || {};
        var e = No(c.domain, c.path),
            f = Op(b, e);
        if (f) {
            var g = So(c, d, void 0, Pp.get(5));
            Io(a, f, g)
        }
    }

    function Tp(a, b) {
        var c = b.La;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Rp(a) {
        for (var b = na(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                te: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.te = Ip[e];
            d.te ? d.te.Ih ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Tp(k, g.te)
                }
            }(d)) : void 0 : typeof f === "string" && Tp(f, d.te) || (a[e] = void 0) : a[e] = void 0
        }
    };
    var Up = /^\w+$/,
        Vp = /^[\w-]+$/,
        Wp = {},
        Xp = (Wp.aw = "_aw", Wp.dc = "_dc", Wp.gf = "_gf", Wp.gp = "_gp", Wp.gs = "_gs", Wp.ha = "_ha", Wp.ag = "_ag", Wp.gb = "_gb", Wp);

    function Yp() {
        return ["ad_storage", "ad_user_data"]
    }

    function Zp(a) {
        return !Tl().j() || Xl(a)
    }

    function $p(a, b) {
        function c() {
            var d = Zp(b);
            d && a();
            return d
        }
        dm(function() {
            c() || em(c, b)
        }, b)
    }

    function aq(a) {
        return bq(a).map(function(b) {
            return b.aa
        })
    }

    function cq(a) {
        return dq(a).filter(function(b) {
            return b.aa
        }).map(function(b) {
            return b.aa
        })
    }

    function dq(a) {
        var b = eq(a.prefix),
            c = fq("gb", b),
            d = fq("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = bq(c).map(e("gb")),
            g = (Ti(6) ? gq(d) : []).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function hq(a, b, c, d, e) {
        var f = tb(a, function(g) {
            return g.aa === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d), f.labels = iq(f.labels || [], e || [])) : a.push({
            version: b,
            aa: c,
            timestamp: d,
            labels: e
        })
    }

    function gq(a) {
        for (var b = Qp(a) || [], c = [], d = na(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = jq(f);
            k && hq(c, "2", g.k, k, g.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    }

    function bq(a) {
        for (var b = [], c = xo(a, H.cookie, void 0, Yp()), d = na(c), e = d.next(); !e.done; e = d.next()) {
            var f = kq(e.value);
            if (f != null) {
                var g = f;
                hq(b, g.version, g.aa, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return lq(b)
    }

    function iq(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function eq(a) {
        return a && typeof a === "string" && a.match(Up) ? a : "_gcl"
    }

    function mq(a, b) {
        var c = Ti(6),
            d = U(a),
            e = bj(d, "query", !1, void 0, "gclid"),
            f = bj(d, "query", !1, void 0, "gclsrc"),
            g = bj(d, "query", !1, void 0, "wbraid");
        Ti(7) && (g = Pb(g));
        var k;
        c && (k = bj(d, "query", !1, void 0, "gbraid"));
        var m = bj(d, "query", !1, void 0, "gad_source"),
            n = bj(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !k)) {
            var p = d.hash.replace("#", "");
            e = e || aj(p, "gclid", !1);
            f = f || aj(p, "gclsrc", !1);
            g = g || aj(p, "wbraid", !1);
            c && (k = k || aj(p, "gbraid", !1));
            m = m || aj(p, "gad_source", !1)
        }
        return nq(e, f, n, g, k, m)
    }

    function oq() {
        return mq(F.location.href, !0)
    }

    function nq(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Vp)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Vp.test(d) && (g.wbraid = d, k(d, "gb"));
        Ti(6) && e !== void 0 && Vp.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Vp.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function pq(a) {
        var b = oq();
        if (Ti(5)) {
            for (var c = !0, d = na(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                }
            c && (b = mq(F.document.referrer, !1))
        }
        qq(b, !1, a)
    }

    function qq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = eq(c.prefix),
            g = d || Db(),
            k = Math.round(g / 1E3),
            m = Yp(),
            n = !1,
            p = !1,
            q = function() {
                if (Zp(m)) {
                    var r = So(c, g, !0);
                    r.Ab = m;
                    for (var t = function(G, M) {
                            var L = fq(G, f);
                            L && (Io(L, M, r), G !== "gb" && (n = !0))
                        }, u = function(G) {
                            var M = ["GCL", k, G];
                            e.length > 0 && M.push(e.join("."));
                            return M.join(".")
                        }, v = na(["aw", "dc", "gf", "ha", "gp"]), w = v.next(); !w.done; w = v.next()) {
                        var x = w.value;
                        a[x] && t(x, u(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            B = fq("gb", f);
                        !b && bq(B).some(function(G) {
                            return G.aa === y && G.labels &&
                                G.labels.length > 0
                        }) || t("gb", u(y))
                    }
                }
                if (!p && Ti(6) && a.gbraid && Zp("ad_storage") && (p = !0, !n)) {
                    var A = a.gbraid,
                        D = fq("ag", f);
                    if (b || !(Ti(6) ? gq(D) : []).some(function(G) {
                            return G.aa === A && G.labels && G.labels.length > 0
                        })) {
                        var E = {},
                            C = (E.k = A, E.i = "" + k, E.b = e, E);
                        Sp(D, C, c, g)
                    }
                }
                rq(a, f, g, c)
            };
        dm(function() {
            q();
            Zp(m) || em(q, m)
        }, m)
    }

    function rq(a, b, c, d) {
        if (a.gad_source !== void 0 && Zp("ad_storage")) {
            var e = fq("gs", b);
            if (e) {
                var f = Math.round((Db() - (Qc() || 0)) / 1E3),
                    g = {},
                    k = (g.k = a.gad_source, g.i = "" + f, g);
                Sp(e, k, d, c)
            }
        }
    }

    function sq(a, b) {
        var c = hp(!0);
        $p(function() {
            for (var d = eq(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Xp[f] !== void 0) {
                    var g = fq(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(tq(k), Db()),
                            n;
                        b: {
                            for (var p = m, q = xo(g, H.cookie, void 0, Yp()), r = 0; r < q.length; ++r)
                                if (tq(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = So(b, m, !0);
                            t.Ab = Yp();
                            Io(g, k, t)
                        }
                    }
                }
            }
            qq(nq(c.gclid, c.gclsrc), !1, b)
        }, Yp())
    }

    function uq(a) {
        var b = [];
        Ti(6) && b.push("ag");
        if (b.length !== 0) {
            var c = hp(!0),
                d = eq(a.prefix);
            $p(function() {
                for (var e = 0; e < b.length; ++e) {
                    var f = fq(b[e], d);
                    if (f) {
                        var g = c[f];
                        if (g) {
                            var k = Np(g);
                            if (k) {
                                var m = jq(k);
                                m || (m = Db());
                                var n;
                                a: {
                                    for (var p = m, q = Qp(f), r = 0; r < q.length; ++r)
                                        if (jq(q[r]) > p) {
                                            n = !0;
                                            break a
                                        }
                                    n = !1
                                }
                                if (n) break;
                                k.i = "" + Math.round(m / 1E3);
                                Sp(f, k, a, m)
                            }
                        }
                    }
                }
            }, ["ad_storage"])
        }
    }

    function fq(a, b) {
        var c = Xp[a];
        if (c !== void 0) return b + c
    }

    function tq(a) {
        return vq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function jq(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function kq(a) {
        var b = vq(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            aa: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function vq(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Vp.test(a[2]) ? [] : a
    }

    function wq(a, b, c, d, e) {
        if (Array.isArray(b) && wo(F)) {
            var f = eq(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = fq(a[m], f);
                        if (n) {
                            var p = xo(n, H.cookie, void 0, Yp());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            $p(function() {
                op(g, b, c, d)
            }, Yp())
        }
    }

    function xq(a, b, c, d) {
        if (Array.isArray(a) && wo(F)) {
            var e = [];
            Ti(6) && e.push("ag");
            if (e.length !== 0) {
                var f = eq(d),
                    g = function() {
                        for (var k = {}, m = 0; m < e.length; ++m) {
                            var n = fq(e[m], f);
                            if (!n) return {};
                            var p = Qp(n);
                            if (p.length) {
                                var q = p.sort(function(r, t) {
                                    return jq(t) - jq(r)
                                })[0];
                                k[n] = Op(q)
                            }
                        }
                        return k
                    };
                $p(function() {
                    op(g, a, b, c)
                }, ["ad_storage"])
            }
        }
    }

    function lq(a) {
        return a.filter(function(b) {
            return Vp.test(b.aa)
        })
    }

    function yq(a, b) {
        if (wo(F)) {
            for (var c = eq(b.prefix), d = {}, e = 0; e < a.length; e++) Xp[a[e]] && (d[a[e]] = Xp[a[e]]);
            $p(function() {
                z(d, function(f, g) {
                    var k = xo(c + g, H.cookie, void 0, Yp());
                    k.sort(function(t, u) {
                        return tq(u) - tq(t)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = tq(m),
                            p = vq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = vq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        qq(q, !0, b, n, p)
                    }
                })
            }, Yp())
        }
    }

    function zq(a) {
        var b = [],
            c = [];
        Ti(6) && (b.push("ag"), c.push("gbraid"));
        b.length !== 0 && $p(function() {
            for (var d = eq(a.prefix), e = 0; e < b.length; ++e) {
                var f = fq(b[e], d);
                if (!f) break;
                var g = Qp(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return jq(r) - jq(q)
                        })[0],
                        m = jq(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    qq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function Aq(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function Bq(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (am()) {
            var c = oq();
            if (Aq(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                Ti(6) && b(d, "gbraid", c.gbraid);
                pp(function() {
                    return d
                }, 3);
                pp(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }

    function Cq(a) {
        if (!Ti(1)) return null;
        var b = hp(!0).gad_source;
        if (b != null) return F.location.hash = "", b;
        if (Ti(2)) {
            var c = U(F.location.href);
            b = bj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = oq();
            if (Aq(d, a)) return "0"
        }
        return null
    }

    function Dq(a) {
        var b = Cq(a);
        b != null && pp(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function Eq(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function Fq(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Zp(Yp())) return e;
        var f = bq(a),
            g = Eq(e, f, b);
        if (g.length && !d)
            for (var k = na(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.aa].concat(n.labels || [], [b]).join("."),
                    r = So(c, p, !0);
                r.Ab = Yp();
                Io(a, q, r)
            }
        return e
    }

    function Gq(a, b) {
        var c = [];
        b = b || {};
        var d = dq(b),
            e = Eq(c, d, a);
        if (e.length)
            for (var f = na(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = eq(b.prefix),
                    n = fq(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.aa,
                    t = p.labels,
                    u = p.timestamp,
                    v = Math.round(u / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + v, w.b = (t || []).concat([a]), w);
                    Sp(n, x, b, u)
                } else if (k.type === "gb") {
                    var y = [q, v, r].concat(t || [], [a]).join("."),
                        B = So(b, u, !0);
                    B.Ab = Yp();
                    Io(n, y, B)
                }
            }
        return c
    }

    function Hq(a, b) {
        var c = eq(b),
            d = fq(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Ti(6) ? gq(d) : [] : bq(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Iq(a) {
        for (var b = 0, c = na(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function Jq(a, b) {
        var c = Math.max(Hq("aw", a), Iq(Zp(Yp()) ? Gp() : {})),
            d = Math.max(Hq("gb", a), Iq(Zp(Yp()) ? Gp("_gac_gb", !0) : {}));
        Ti(6) && b && (d = Math.max(d, Hq("ag", a)));
        return d > c
    };
    var Xq, Yq = !1;

    function Zq() {
        Yq = !0;
        Xq = Xq || {}
    }

    function $q(a) {
        Yq || Zq();
        return Xq[a]
    }
    var ar = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.o = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = h(c.eventMetadata || {}, {})
    };
    ar.prototype.copyToHitData = function(a, b, c) {
        var d = W(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && l(d) && T(57)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.o[a] = d)
    };
    var br = function(a, b, c) {
        var d = $q(a.target.ia);
        return d && d[b] !== void 0 ? d[b] : c
    };

    function cr() {
        ii.dedupe_gclid || (ii.dedupe_gclid = Po());
        return ii.dedupe_gclid
    };
    var dr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        er = /^www.googleadservices.com$/;

    function fr(a) {
        a || (a = gr());
        return a.Vm ? !1 : a.Kl || a.Ll || a.Nl || a.Ml || a.lh || a.gh || a.yl || a.Cl ? !0 : !1
    }

    function gr() {
        var a = {},
            b = hp(!0);
        a.Vm = !!b._up;
        var c = oq();
        a.Kl = c.aw !== void 0;
        a.Ll = c.dc !== void 0;
        a.Nl = c.wbraid !== void 0;
        a.Ml = c.gbraid !== void 0;
        var d = U(F.location.href),
            e = bj(d, "query", !1, void 0, "gad");
        a.lh = e !== void 0;
        if (!a.lh) {
            var f = d.hash.replace("#", ""),
                g = aj(f, "gad", !1);
            a.lh = g !== void 0
        }
        a.gh = bj(d, "query", !1, void 0, "gad_source");
        if (a.gh === void 0) {
            var k = d.hash.replace("#", ""),
                m = aj(k, "gad_source", !1);
            a.gh = m
        }
        var n = H.referrer ? bj(U(H.referrer), "host") : "";
        a.Cl = dr.test(n);
        a.yl = er.test(n);
        return a
    };
    var hr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        ir = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        jr = /^\d+\.fls\.doubleclick\.net$/,
        kr = /;gac=([^;?]+)/,
        lr = /;gacgb=([^;?]+)/;

    function mr(a, b) {
        if (jr.test(H.location.host)) {
            var c = H.location.href.match(b);
            return c && c.length === 2 && c[1].match(hr) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = na(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].aa);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function nr(a, b, c) {
        for (var d = Zp(Yp()) ? Gp("_gac_gb", !0) : {}, e = [], f = !1, g = na(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = Fq("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            xl: f ? e.join(";") : "",
            wl: mr(d, lr)
        }
    }

    function or(a) {
        var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(ir) ? b[1] : void 0
    }

    function pr(a) {
        var b = {
                hh: void 0,
                ih: void 0
            },
            c, d;
        jr.test(H.location.host) && (c = or("gclgs"), d = or("gclst"));
        if (c && d) b.hh = c, b.ih = d;
        else {
            var e = Db(),
                f = gq((a || "_gcl") + "_gs"),
                g = f.map(function(m) {
                    return m.aa
                }),
                k = f.map(function(m) {
                    return e - m.timestamp
                });
            g.length > 0 && k.length > 0 && (b.hh = g.join("."), b.ih = k.join("."))
        }
        return b
    }

    function qr(a, b, c) {
        if (jr.test(H.location.host)) {
            var d = or(c);
            if (d) return [{
                aa: d
            }]
        } else {
            if (b === "gclid") return bq((a || "_gcl") + "_aw");
            if (b === "wbraid") return bq((a || "_gcl") + "_gb");
            if (b === "braids") return dq({
                prefix: a
            })
        }
        return []
    }

    function rr(a) {
        return qr(a, "gclid", "gclaw").map(function(b) {
            return b.aa
        }).join(".")
    }

    function sr(a) {
        return qr(a, "wbraid", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }

    function tr(a) {
        return qr(a, "braids", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }

    function ur(a, b) {
        return jr.test(H.location.host) ? !(or("gclaw") || or("gac")) : Jq(a, b)
    }

    function vr(a, b, c) {
        var d;
        d = c ? Gq(a, b) : Fq((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };
    var wr = function() {
        if (qb(F.__uspapi)) {
            var a = "";
            try {
                F.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };

    function Er(a) {
        var b = W(a.m, P.g.Hb),
            c = W(a.m, P.g.Wb);
        b && !c ? (a.eventName !== P.g.ba && a.eventName !== P.g.Nc && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0)
    }

    function Fr(a) {
        var b = X(P.g.R) ? ii.pscdl : "denied";
        b != null && (a.o[P.g.Ve] = b)
    }

    function Gr(a) {
        var b = rl(!0);
        a.o[P.g.Gb] = b
    }

    function Hr(a) {
        T(64) && ko() && (a.o[P.g.Bc] = 1)
    };

    function Or(a, b, c, d) {
        var e = Cc(),
            f;
        if (e === 1) a: {
            var g = ti;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" != F.location.protocol ? a : b) + c
    };

    function as(a) {
        return {
            getDestinationId: function() {
                return a.target.ia
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                a.o[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.o[b] === void 0 && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return W(a.m, b)
            },
            Ej: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.o)
            }
        }
    };

    function hs() {
        var a = F.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function is(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !F.getComputedStyle) return !0;
        var c = F.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = F.getComputedStyle(d, null))
        }
        return !1
    }
    var ht = Number('') || 5,
        it = Number('') || 50,
        jt = ub();
    var ot = {
        Sk: Number('') || 500,
        Gk: Number('') || 5E3,
        dj: Number('20') || 10,
        mk: Number('') || 5E3
    };

    function pt(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var qt = function(a, b) {
        var c;
        return c
    };
    var rt = "https://" + hi.Ed + "/gtm/static/",
        st;

    function xt(a, b) {}

    function zt(a, b, c, d) {}

    function At(a, b, c, d) {}

    function Bt(a, b, c, d) {}
    var Ct = void 0;

    function Dt(a) {
        var b = [];
        return b
    };
    var Et = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    cl();
    fl() || $k("iPod");
    $k("iPad");
    !$k("Android") || dl() || cl() || bl() || $k("Silk");
    dl();
    !$k("Safari") || dl() || (al() ? 0 : $k("Coast")) || bl() || (al() ? 0 : $k("Edge")) || (al() ? Zk("Microsoft Edge") : $k("Edg/")) || (al() ? Zk("Opera") : $k("OPR")) || cl() || $k("Silk") || $k("Android") || gl();
    var Ft = {},
        Gt = null,
        Ht = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!Gt) {
                Gt = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    Ft[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        Gt[q] === void 0 && (Gt[q] = p)
                    }
                }
            }
            for (var r = Ft[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    B = b[v + 2],
                    A = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    E = r[(y & 15) << 2 | B >> 6],
                    C = r[B & 63];
                t[w++] = "" + A + D + E + C
            }
            var G = 0,
                M = u;
            switch (b.length - v) {
                case 2:
                    G = b[v + 1], M = r[(G & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | G >> 4] + M + u
            }
            return t.join("")
        };
    var It = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Jt(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function Kt() {
        var a = F.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Lt() {
        var a, b;
        return (b = (a = F.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function Mt(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function Nt() {
        var a = F;
        if (!Mt(a)) return null;
        var b = Jt(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(It).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };

    function Tt(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };
    var Ut = !1;

    function Vt() {
        if (Tt("join-ad-interest-group") && qb(rc.joinAdInterestGroup)) return !0;
        Ut || (pl(''), Ut = !0);
        return Tt("join-ad-interest-group") && qb(rc.joinAdInterestGroup)
    }

    function Wt(a, b) {
        var c = Si[3] === void 0 ? 1 : Si[3],
            d = 'iframe[data-tagging-id="' + b + '"]',
            e = [];
        try {
            if (c === 1) {
                var f = H.querySelector(d);
                f && (e = [f])
            } else e = Array.from(H.querySelectorAll(d))
        } catch (q) {}
        var g;
        a: {
            try {
                g = H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            g = void 0
        }
        var k = g,
            m = ((k == null ? void 0 : k.length) || 0) >= (Si[2] === void 0 ? 50 : Si[2]),
            n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && Db() - p < (Si[1] === void 0 ? 6E4 : Si[1]) ? (mb("TAGGING",
                9), n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) Xt(e[0]);
                else {
                    if (m) {
                        mb("TAGGING", 10);
                        return
                    }
                }
            else e.length >= c ? Xt(e[0]) : m && Xt(k[0]);
            Dc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: Db()
            })
        }
    }

    function Xt(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function Yt() {
        return "https://td.doubleclick.net"
    };
    var Tu = {
        M: {
            Qh: "ads_conversion_hit",
            Dd: "container_execute_start",
            Th: "container_setup_end",
            Pf: "container_setup_start",
            Rh: "container_blocking_end",
            Sh: "container_execute_end",
            Uh: "container_yield_end",
            Qf: "container_yield_start",
            Ti: "event_execute_end",
            Si: "event_evaluation_end",
            Hg: "event_evaluation_start",
            Ui: "event_setup_end",
            ee: "event_setup_start",
            Wi: "ga4_conversion_hit",
            he: "page_load",
            tn: "pageview",
            hc: "snippet_load",
            rj: "tag_callback_error",
            sj: "tag_callback_failure",
            tj: "tag_callback_success",
            uj: "tag_execute_end",
            od: "tag_execute_start"
        }
    };

    function Uu() {
        function a(c, d) {
            var e = nb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Vu = !1;
    var Dv = function(a, b) {},
        Ev = function(a, b) {},
        Fv = function(a, b) {},
        Gv = function(a, b) {},
        Hv = function() {
            var a = {};
            return a
        },
        uv = function(a) {
            a = a === void 0 ? !0 : a;
            var b = {};
            return b
        },
        Iv = function() {},
        Jv = function(a, b) {},
        Kv = function(a, b, c) {},
        Lv = function() {};

    function Mv(a, b) {
        var c = F,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Nv = function(a, b, c) {
        var d = kl(a, "fmt");
        if (b) {
            var e = kl(a, "random"),
                f = kl(a, "label") || "";
            if (!e) return !1;
            var g = Ht(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Mv(g, b)) return !1
        }
        d && d != 4 && (a = ml(a, "rfmt", d));
        var k = ml(a, "fmt", 4);
        Bc(k, function() {
            F.google_noFurtherRedirects && b && b.call && (F.google_noFurtherRedirects = null, b())
        }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };

    function ew(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function fw(a, b, c) {
        c = c === void 0 ? !1 : c;
        gw().addRestriction(0, a, b, c)
    }

    function hw(a, b, c) {
        c = c === void 0 ? !1 : c;
        gw().addRestriction(1, a, b, c)
    }

    function iw() {
        var a = Pj();
        return gw().getRestrictions(1, a)
    }
    var jw = function() {
            this.j = {};
            this.D = {}
        },
        kw = function(a, b) {
            var c = a.j[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.j[b] = c);
            return c
        };
    jw.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.D[b]) {
            var e = kw(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    jw.prototype.getRestrictions = function(a, b) {
        var c = kw(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(qa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), qa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(qa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), qa((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    jw.prototype.getExternalRestrictions = function(a, b) {
        var c = kw(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    jw.prototype.removeExternalRestrictions = function(a) {
        var b = kw(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.D[a] = !0
    };

    function gw() {
        var a = ii.r;
        a || (a = new jw, ii.r = a);
        return a
    };
    var lw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        mw = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        nw = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ow = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function pw() {
        var a = Hi("gtm.allowlist") || Hi("gtm.whitelist");
        a && O(9);
        ni && (a = ["google", "gtagfl", "lcl", "zone"]);
        lw.test(F.location && F.location.hostname) && (ni ? O(116) : (O(117), qw && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Hb(Ab(a), mw),
            c = Hi("gtm.blocklist") || Hi("gtm.blacklist");
        c || (c = Hi("tagTypeBlacklist")) && O(3);
        c ? O(8) : c = [];
        lw.test(F.location && F.location.hostname) && (c = Ab(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        Ab(c).indexOf("google") >= 0 && O(2);
        var d = c && Hb(Ab(c), nw),
            e = {};
        return function(f) {
            var g = f && f[Ie.oa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = xi[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    O(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var t = vb(d, k || []);
                    t && O(10);
                    q = t
                }
            }
            var u = !m || q;
            u || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (u = vb(d, ow));
            return e[g] = u
        }
    }
    var qw = !1;
    qw = !0;

    function rw() {
        Hj && fw(Pj(), function(a) {
            var b = sf(a.entityId),
                c;
            if (vf(b)) {
                var d = b[Ie.oa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = kf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!ew(b[Ie.oa], 4);
            return c
        })
    }
    var tw = function(a, b, c, d, e) {
            if (!sw()) {
                var f = d.siloed ? Kj(a) : a;
                if (!Zj(f)) {
                    var g = "?id=" + encodeURIComponent(a) + "&l=" + hi.Ya,
                        k = Ib(a, "GTM-");
                    k || (g += "&cx=c");
                    T(65) && (g += "&gtm=" + no());
                    var m = mj();
                    m && (g += "&sign=" + hi.yf);
                    var n = c ? "/gtag/js" : "/gtm.js",
                        p = lj(b, n + g);
                    if (!p) {
                        var q = hi.Ed + n;
                        m && uc && k ? (q = uc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], p = Or("https://", "http://", q + g)) : p = Ai.D ? Bi() + n + g : Or("https://", "http://", q + g)
                    }
                    d.siloed && bk({
                        ctid: f,
                        isDestination: !1
                    });
                    var r = Sj();
                    Ej().container[f] = {
                        state: 1,
                        context: d,
                        parent: r
                    };
                    Dj({
                        ctid: f,
                        isDestination: !1
                    }, e);
                    Bc(p)
                }
            }
        },
        uw = function(a, b, c, d) {
            if (!sw()) {
                var e = c.siloed ? Kj(a) : a;
                if (!ak(e))
                    if (!c.siloed && ck()) Ej().destination[e] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Sj()
                    }, Dj({
                        ctid: e,
                        isDestination: !0
                    }, d), O(91);
                    else {
                        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + hi.Ya + "&cx=c";
                        T(65) && (f += "&gtm=" + no());
                        mj() && (f += "&sign=" + hi.yf);
                        var g = lj(b, f);
                        g || (g = Ai.D ? Bi() + f : Or("https://", "http://", hi.Ed + f));
                        c.siloed && bk({
                            ctid: e,
                            isDestination: !0
                        });
                        Ej().destination[e] = {
                            state: 1,
                            context: c,
                            parent: Sj()
                        };
                        Dj({
                            ctid: e,
                            isDestination: !0
                        }, d);
                        Bc(g)
                    }
            }
        };

    function sw() {
        if (lo()) {
            return !0
        }
        return !1
    };
    var vw = !1,
        ww = 0,
        xw = [];

    function yw(a) {
        if (!vw) {
            var b = H.createEventObject,
                c = H.readyState === "complete",
                d = H.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                vw = !0;
                for (var e = 0; e < xw.length; e++) I(xw[e])
            }
            xw.push = function() {
                for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
                return 0
            }
        }
    }

    function zw() {
        if (!vw && ww < 140) {
            ww++;
            try {
                var a, b;
                (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
                yw()
            } catch (c) {
                F.setTimeout(zw, 50)
            }
        }
    }

    function Aw(a) {
        vw ? a() : xw.push(a)
    };

    function Cw(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Nj()
        }
    };
    var Ew = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.O = !1;
            this.D = this.H = 0;
            Dw(this, a, b)
        },
        Fw = function(a, b, c, d) {
            if (ki.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Xa(d) && (e = h(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        Gw = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Hw = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        Dw = function(a, b, c) {
            b !== void 0 && a.ne(b);
            c && F.setTimeout(function() {
                    Hw(a)
                },
                Number(c))
        };
    Ew.prototype.ne = function(a) {
        var b = this,
            c = Fb(function() {
                I(function() {
                    a(Nj(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var Iw = function(a) {
            a.H++;
            return Fb(function() {
                a.D++;
                a.O && a.D >= a.H && Hw(a)
            })
        },
        Jw = function(a) {
            a.O = !0;
            a.D >= a.H && Hw(a)
        };
    var Kw = {},
        Mw = function() {
            return F[Lw()]
        };

    function Lw() {
        return F.GoogleAnalyticsObject || "ga"
    }
    var Pw = function() {
            var a = Nj();
        },
        Qw = function(a, b) {
            return function() {
                var c = Mw(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = g.indexOf("&tid=" + b) < 0;
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Vw = ["es", "1"],
        Ww = {},
        Xw = {};

    function Yw(a, b) {
        if (wj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Ww[a] = [
                ["e", c],
                ["eid", a]
            ];
            uk(a)
        }
    }

    function Zw(a) {
        var b = a.eventId,
            c = a.Ma;
        if (!Ww[b]) return [];
        var d = [];
        Xw[b] || d.push(Vw);
        d.push.apply(d, qa(Ww[b]));
        c && (Xw[b] = !0);
        return d
    };
    var $w = {},
        ax = {},
        bx = {};

    function cx(a, b, c, d) {
        wj && T(75) && ((d === void 0 ? 0 : d) ? (bx[b] = bx[b] || 0, ++bx[b]) : c !== void 0 ? (ax[a] = ax[a] || {}, ax[a][b] = Math.round(c)) : ($w[a] = $w[a] || {}, $w[a][b] = ($w[a][b] || 0) + 1))
    }

    function dx(a) {
        var b = a.eventId,
            c = a.Ma,
            d = $w[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete $w[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function ex(a) {
        var b = a.eventId,
            c = a.Ma,
            d = ax[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete ax[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function fx() {
        for (var a = [], b = na(Object.keys(bx)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + bx[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var gx = {},
        hx = {};

    function ix(a, b, c) {
        if (wj && b) {
            var d = qj(b);
            gx[a] = gx[a] || [];
            gx[a].push(c + d);
            var e = (vf(b) ? "1" : "2") + d;
            hx[a] = hx[a] || [];
            hx[a].push(e);
            uk(a)
        }
    }

    function jx(a) {
        var b = a.eventId,
            c = a.Ma,
            d = [],
            e = gx[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = hx[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete gx[b], delete hx[b]);
        return d
    };

    function kx(a, b, c, d) {
        var e = hf[a],
            f = lx(a, b, c, d);
        if (!f) return null;
        var g = wf(e[Ie.pj], c, []);
        if (g && g.length) {
            var k = g[0];
            f = kx(k.index, {
                onSuccess: f,
                onFailure: k.Dj === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function lx(a, b, c, d) {
        function e() {
            if (f[Ie.Kk]) k();
            else {
                var w = uf(f, c, []),
                    x = w[Ie.kk];
                if (x != null)
                    for (var y = 0; y < x.length; y++)
                        if (!X(x[y])) {
                            k();
                            return
                        }
                var B = Fw(c.ic, String(f[Ie.oa]), Number(f[Ie.me]), w[Ie.Lk]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var C = Db() - E;
                        ix(c.id, hf[a], "5");
                        Gw(c.ic, B, "success", C);
                        T(66) && Kv(c, f, Tu.M.tj);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var C = Db() - E;
                        ix(c.id, hf[a], "6");
                        Gw(c.ic, B, "failure", C);
                        T(66) && Kv(c, f, Tu.M.sj);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ix(c.id, f, "1");
                var D = function() {
                    El(3);
                    var C = Db() - E;
                    ix(c.id, f, "7");
                    Gw(c.ic, B, "exception", C);
                    T(66) && Kv(c, f, Tu.M.rj);
                    A || (A = !0, k())
                };
                T(66) && Jv(c, f);
                var E = Db();
                try {
                    xf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (C) {
                    D(C)
                }
                T(66) && Kv(c, f, Tu.M.uj)
            }
        }
        var f = hf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = wf(f[Ie.vj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = kx(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.Dj ===
                2 ? m : q
        }
        if (f[Ie.gj] || f[Ie.Nk]) {
            var r = f[Ie.gj] ? jf : c.Lm,
                t = g,
                u = k;
            if (!r[a]) {
                e = Fb(e);
                var v = mx(a, r, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function mx(a, b, c) {
        var d = [],
            e = [];
        b[a] = nx(d, e, c);
        return {
            onSuccess: function() {
                b[a] = ox;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = px;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function nx(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ox(a) {
        a()
    }

    function px(a, b) {
        b()
    };
    var sx = function(a, b) {
        for (var c = [], d = 0; d < hf.length; d++)
            if (a[d]) {
                var e = hf[d];
                var f = Iw(b.ic);
                try {
                    var g = kx(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Ie.oa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = kf[k];
                        c.push({
                            bk: d,
                            Pj: (m ? m.priorityOverride || 0 : 0) || ew(e[Ie.oa], 1) || 0,
                            execute: g
                        })
                    } else qx(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(rx);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function rx(a, b) {
        var c, d = b.Pj,
            e = a.Pj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.bk,
                k = b.bk;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function qx(a, b) {
        if (wj) {
            var c = function(d) {
                var e = b.isBlocked(hf[d]) ? "3" : "4",
                    f = wf(hf[d][Ie.pj], b, []);
                f && f.length && c(f[0].index);
                ix(b.id, hf[d], e);
                var g = wf(hf[d][Ie.vj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var vx = !1,
        tx;
    var Bx = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (T(66)) {}
        if (d === "gtm.js") {
            if (vx) return !1;
            vx = !0
        }
        var e = !1,
            f = iw(),
            g = h(a);
        if (!f.every(function(t) {
                return t({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        Yw(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: xx(g, e),
                Lm: [],
                logMacroError: function() {
                    O(6);
                    El(0)
                },
                cachedModelValues: yx(),
                ic: new Ew(function() {
                    if (T(66)) {}
                    k &&
                        k.apply(k, [].slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        T(75) && wj && (n.reportMacroDiscrepancy = cx);
        T(66) && Fv(n.id, n.name);
        var p = Ff(n);
        T(66) && Gv(n.id, n.name);
        e && (p = zx(p));
        if (T(66)) {}
        var q = sx(p, n),
            r = !1;
        Jw(n.ic);
        d !== "gtm.js" && d !== "gtm.sync" || Pw();
        return Ax(p, q) || r
    };

    function yx() {
        var a = {};
        a.event = Mi("event", 1);
        a.ecommerce = Mi("ecommerce", 1);
        a.gtm = Mi("gtm");
        a.eventModel = Mi("eventModel");
        return a
    }

    function xx(a, b) {
        var c = pw();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Ie.oa];
            if (!e || typeof e != "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = Pj();
            f = gw().getRestrictions(0, g);
            var k = a;
            b && (k = h(a), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = xi[e] || [], n = na(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function zx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(hf[c][Ie.oa]);
                if (ji[d] || hf[c][Ie.Ok] !== void 0 || ew(d, 2)) b[c] = !0
            }
        return b
    }

    function Ax(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && hf[c] && !ki[String(hf[c][Ie.oa])]) return !0;
        return !1
    }
    var Cx = 0;

    function Dx() {
        Cx === 1 && tk()
    }
    var Ex = function(a) {
        if (!a.Cj || Cx !== 1) return [];
        a.mc();
        var b = xl();
        b.push(["mcc", "1"]);
        Cx = 3;
        return b
    };

    function Fx(a, b) {
        return arguments.length === 1 ? Gx("set", a) : Gx("set", a, b)
    }

    function Hx(a, b) {
        return arguments.length === 1 ? Gx("config", a) : Gx("config", a, b)
    }

    function Ix(a, b, c) {
        c = c || {};
        c[P.g.Yb] = a;
        return Gx("event", b, c)
    }

    function Gx() {
        return arguments
    };
    var Jx = function() {
        this.messages = [];
        this.j = []
    };
    Jx.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    Jx.prototype.listen = function(a) {
        this.j.push(a)
    };
    Jx.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Jx.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function Kx(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
        Lx().enqueue(a, b, c)
    }

    function Mx() {
        var a = Nx;
        Lx().listen(a)
    }

    function Lx() {
        var a = ii.mb;
        a || (a = new Jx, ii.mb = a);
        return a
    };
    var If;
    var Ox = {},
        Px = {};

    function Qx(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                Dh: void 0,
                kh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Dh = um(g, b), e.Dh) {
                    var k = Lj();
                    tb(k, function(r) {
                        return function(t) {
                            return r.Dh.ia === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = Ox[g] || [];
                e.kh = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.kh[t] = !0
                    }
                }(e));
                for (var n = Ij(), p = 0; p < n.length; p++)
                    if (e.kh[n[p]]) {
                        c = c.concat(Lj());
                        break
                    }
                var q = Px[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            bm: c,
            gm: d
        }
    }

    function Rx(a) {
        z(Ox, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function Sx(a) {
        z(Px, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var Tx = "HA GF G UA AW DC MC".split(" "),
        Ux = !1,
        Vx = !1,
        Wx = !1,
        Xx = !1;

    function Yx(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: yi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Zx = void 0,
        $x = void 0;

    function ay(a, b, c) {
        var d = h(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && O(136);
        var e = h(b);
        h(c, e);
        Kx(Hx(Ij()[0], e), a.eventId, d)
    }

    function by(a) {
        for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || kn.D[d];
            if (e) return e
        }
    }
    var cy = [P.g.jd, P.g.Lb, P.g.yc, P.g.lb, P.g.tb, P.g.Ba, P.g.sa, P.g.Oa, P.g.Va, P.g.Eb],
        dy = {
            config: function(a, b) {
                var c = Yx(a, b);
                if (!(a.length < 2) && l(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] != void 0 && !Xa(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = um(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!Gj.fe) {
                                var m = Rj(Sj());
                                if (ek(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        om: Rj(n),
                                        am: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.om, g = q.am);
                        Yw(c.eventId, "gtag.config");
                        var r = e.ia,
                            t = e.id !== r;
                        if (t ? Lj().indexOf(r) === -1 : Ij().indexOf(r) === -1) {
                            if (!b.inheritParentConfig &&
                                !d[P.g.Hb]) {
                                var u = by(d);
                                if (t) uw(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var v = d;
                                    Zx ? ay(b, v, Zx) : $x || ($x = h(v))
                                } else tw(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                $x ? (ay(b, $x, x), w = !1) : (!x[P.g.Zb] && mi && Zx || (Zx = h(x)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            var y = d;
                            if (!Wx && (Wx = !0, Vx))
                                for (var B = na(cy), A = B.next(); !A.done; A = B.next())
                                    if (y.hasOwnProperty(A.value)) {
                                        Cl("erc");
                                        break
                                    }
                            xj && !Hj && (Cx === 1 && (T(44) ? Bk.mcc = !1 : Gc(F, "pagehide", Dx)), Cx = 2);
                            if (mi && !t && !d[P.g.Zb]) {
                                var D = Xx;
                                Xx = !0;
                                if (D) return
                            }
                            Ux || O(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    Sx(e.id);
                                    var E = e.id,
                                        C = d[P.g.Wd] || "default";
                                    C = String(C).split(",");
                                    for (var G = 0; G < C.length; G++) {
                                        var M = Px[C[G]] || [];
                                        Px[C[G]] = M;
                                        M.indexOf(E) < 0 && M.push(E)
                                    }
                                } else {
                                    Rx(e.id);
                                    var L = e.id,
                                        S = d[P.g.Wd] || "default";
                                    S = S.toString().split(",");
                                    for (var V = 0; V < S.length; V++) {
                                        var ba = Ox[S[V]] || [];
                                        Ox[S[V]] = ba;
                                        ba.indexOf(L) < 0 && ba.push(L)
                                    }
                                }
                            delete d[P.g.Wd];
                            var aa = b.eventMetadata || {};
                            aa.hasOwnProperty("is_external_event") || (aa.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = aa;
                            delete d[P.g.bd];
                            for (var Q = t ? [e.id] : Lj(), oa = 0; oa < Q.length; oa++) {
                                var ma = d,
                                    ia = Q[oa],
                                    za = h(b),
                                    Ma = um(ia, za.isGtmEvent);
                                Ma && kn.push("config", [ma], Ma, za)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    O(39);
                    var c = Yx(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[P.g.P] && O(139), e[P.g.ya] && O(140));
                    d === "default" ? jm(e) : d === "update" ? km(e, c) : d === "declare" && b.fromContainerExecution && im(e)
                }
            },
            event: function(a,
                b) {
                var c = a[1];
                if (!(a.length < 2) && l(c)) {
                    var d;
                    if (a.length > 2) {
                        if (!Xa(a[2]) && a[2] != void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = h(e), e[P.g.bd] && (g.eventCallback = e[P.g.bd]), e[P.g.Td] && (g.eventTimeout = e[P.g.Td]));
                    var k = Yx(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[P.g.Yb];
                    r === void 0 && (r = Hi(P.g.Yb, 2), r === void 0 && (r = "default"));
                    if (l(r) || Array.isArray(r)) {
                        var t;
                        t = b.isGtmEvent ? l(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var u = Qx(t, b.isGtmEvent),
                            v = u.bm,
                            w = u.gm;
                        if (w.length)
                            for (var x = by(q), y = 0; y < w.length; y++) {
                                var B = um(w[y], b.isGtmEvent);
                                B && uw(B.ia, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = vm(v, b.isGtmEvent)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        var D;
                        !A.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (Vx = !0);
                        Yw(m, c);
                        for (var E = [], C = 0; C < A.length; C++) {
                            var G = A[C],
                                M = h(b);
                            if (Tx.indexOf(Uj(G.prefix)) !== -1) {
                                var L = h(d),
                                    S = M.eventMetadata || {};
                                S.hasOwnProperty("is_external_event") ||
                                    (S.is_external_event = !M.fromContainerExecution);
                                M.eventMetadata = S;
                                delete L[P.g.bd];
                                ln(c, L, G.id, M);
                                xj && !Hj && Cx === 0 && (T(44) ? Dk("mcc", "1") : Fc(F, "pagehide", Dx), Cx = 1)
                            }
                            E.push(G.id)
                        }
                        g.eventModel = g.eventModel || {};
                        A.length > 0 ? g.eventModel[P.g.Yb] = E.join() : delete g.eventModel[P.g.Yb];
                        Ux || O(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[P.g.Wb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                O(53);
                if (a.length === 4 && l(a[1]) && l(a[2]) &&
                    qb(a[3])) {
                    var c = um(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Ux || O(43);
                        var f = by();
                        if (!tb(Lj(), function(k) {
                                return c.ia === k
                            })) uw(c.ia, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (Tx.indexOf(Uj(c.prefix)) !== -1) {
                            Yx(a, b);
                            var g = {};
                            h((g[P.g.qb] = d, g[P.g.Fb] = e, g));
                            mn(d, function(k) {
                                I(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length == 2 && a[1].getTime) {
                    Ux = !0;
                    var c = Yx(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] =
                        d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && l(a[1]) && qb(a[2])) {
                    if (Jf(a[1], a[2]), O(74), a[1] === "all") {
                        O(75);
                        var b = !1;
                        try {
                            b = a[2](Nj(), "unknown", {})
                        } catch (c) {}
                        b || O(76)
                    }
                } else O(73)
            },
            set: function(a, b) {
                var c;
                a.length == 2 && Xa(a[1]) ? c = h(a[1]) : a.length == 3 && l(a[1]) && (c = {}, Xa(a[2]) || Array.isArray(a[2]) ? c[a[1]] = h(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Yx(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    h(c);
                    var g = h(c);
                    kn.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        ey = {
            policy: !0
        };
    var gy = function(a) {
        if (fy(a)) return a;
        this.value = a
    };
    gy.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var fy = function(a) {
        return !a || Va(a) !== "object" || Xa(a) ? !1 : "getUntrustedMessageValue" in a
    };
    gy.prototype.getUntrustedMessageValue = gy.prototype.getUntrustedMessageValue;
    var hy = !1,
        iy = [];

    function jy() {
        if (!hy) {
            hy = !0;
            for (var a = 0; a < iy.length; a++) I(iy[a])
        }
    }

    function ky(a) {
        hy ? I(a) : iy.push(a)
    };
    var ly = 0,
        my = {},
        ny = [],
        oy = [],
        py = !1,
        qy = !1;

    function ry(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var sy = function(a) {
            return F[hi.Ya].push(a)
        },
        ty = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return sy(a)
        },
        uy = function(a, b) {
            if (!rb(b) || b < 0) b = 0;
            var c = ii[hi.Ya],
                d = 0,
                e = !1,
                f = void 0;
            f = F.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var g = c ? c.subscribers : 1;
                ++d === g && (f && (F.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function vy(a, b) {
        var c = a._clear || b.overwriteModelFields;
        z(a, function(e, f) {
            e !== "_clear" && (c && Ki(e), Ki(e, f))
        });
        ui || (ui = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = yi(), a["gtm.uniqueEventId"] = d, Ki("gtm.uniqueEventId", d));
        return Bx(a)
    }

    function wy(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (xb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function xy() {
        var a;
        if (oy.length) a = oy.shift();
        else if (ny.length) a = ny.shift();
        else return;
        var b;
        var c = a;
        if (py || !wy(c.message)) b = c;
        else {
            py = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = yi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            ny.unshift(k, c);
            if (xj) {
                var m = Mf.ctid;
                if (m) {
                    var n, p = Rj(Sj());
                    n = p && p.context;
                    var q = rl(!0),
                        r = Mf.canonicalContainerId,
                        t = wl(),
                        u = n && n.fromContainerExecution,
                        v = Gj.fe,
                        w = n && n.source;
                    sl || (sl = t);
                    ul.push(m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0));
                    tl = q;
                    Hk()
                }
            }
            b = f
        }
        return b
    }

    function yy() {
        for (var a = !1, b; !qy && (b = xy());) {
            qy = !0;
            delete Ei.eventModel;
            Gi();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) qy = !1;
            else {
                e.fromContainerExecution && Li();
                try {
                    if (qb(d)) try {
                        d.call(Ii)
                    } catch (v) {} else if (Array.isArray(d)) {
                        var f = d;
                        if (l(f[0])) {
                            var g = f[0].split("."),
                                k = g.pop(),
                                m = f.slice(1),
                                n = Hi(g.join("."), 2);
                            if (n != null) try {
                                n[k].apply(n, m)
                            } catch (v) {}
                        }
                    } else {
                        var p = void 0;
                        if (xb(d)) a: {
                            if (d.length && l(d[0])) {
                                var q = dy[d[0]];
                                if (q && (!e.fromContainerExecution || !ey[d[0]])) {
                                    p = q(d, e);
                                    break a
                                }
                            }
                            p = void 0
                        }
                        else p =
                            d;
                        p && (a = vy(p, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Gi(!0);
                    var r = d["gtm.uniqueEventId"];
                    if (typeof r === "number") {
                        for (var t = my[String(r)] || [], u = 0; u < t.length; u++) oy.push(zy(t[u]));
                        t.length && oy.sort(ry);
                        delete my[String(r)];
                        r > ly && (ly = r)
                    }
                    qy = !1
                }
            }
        }
        return !a
    }

    function Ay() {
        if (T(66)) {
            var a = By();
        }
        var b = yy();
        if (T(66)) {}
        try {
            var c = Nj(),
                d = F[hi.Ya].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    }
                e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function Nx(a) {
        if (ly < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            my[b] = my[b] || [];
            my[b].push(a)
        } else oy.push(zy(a)), oy.sort(ry), I(function() {
            qy || yy()
        })
    }

    function zy(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Cy = function() {
            function a(f) {
                var g = {};
                if (fy(f)) {
                    var k = f;
                    f = fy(k) ? k.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = vc(hi.Ya, []),
                c = ii[hi.Ya] = ii[hi.Ya] || {};
            c.pruned === !0 && O(83);
            my = Lx().get();
            Mx();
            Aw(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            ky(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (ii.SANDBOXED_JS_SEMAPHORE >
                    0) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new gy(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var k = f.map(function(q) {
                    return a(q)
                });
                ny.push.apply(ny, k);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (O(4), c.pruned = !0; this.length > n;) this.shift();
                var p = typeof m !== "boolean" || m;
                return yy() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            ny.push.apply(ny, e);
            if (By()) {
                if (T(66)) {}
                I(Ay)
            }
        },
        By = function() {
            var a = !0;
            return a
        };

    function Dy(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = Db();
        return b < c + 3E5 && b > c - 9E5
    }

    function Ey(a) {
        return a && a.indexOf("pending:") === 0 ? Dy(a.substr(8)) : !1
    };
    var Fy = !1,
        Gy = function(a) {
            if (Fy) return [];
            var b = [
                ["bt", String(Ai.H ? 2 : pi ? 1 : 0)],
                ["ct", String(Ai.H ? 0 : pi ? 1 : lo() ? 2 : 3)]
            ];
            a.Ma && (Fy = !0, a.mc());
            return b
        };
    var Hy = !1;

    function Iy() {
        var a = Qj();
        if (a) {
            var b;
            return a.canonicalContainerId || "_" + (a.scriptContainerId || ((b = a.destinations) == null ? void 0 : b[0]))
        }
    }
    var Jy = function(a) {
        if (Hy) return [];
        var b = [],
            c = Iy();
        c && b.push(["pcid", c]);
        a.Ma && (Hy = !0, b.length && a.mc());
        return b
    };

    function Ky(a) {
        if (a.scriptSource) {
            var b;
            try {
                var c;
                b = (c = Rc()) == null ? void 0 : c.getEntriesByType("resource")
            } catch (k) {}
            if (b) {
                for (var d = {}, e = 0; e < b.length; ++e) {
                    var f = b[e],
                        g = f.initiatorType;
                    if (g === "script" && f.name === a.scriptSource) return {
                        Uj: e,
                        Vj: d
                    };
                    d[g] = 1 + (d[g] || 0)
                }
                O(146)
            } else O(145)
        }
    }

    function Ly() {
        var a = Tj();
        if (!a) O(144);
        else if (a.canonicalContainerId) {
            var b = Ky(a);
            if (b)
                if (T(44)) Dk("rtg", String(a.canonicalContainerId)), Dk("rlo", String(b.Uj)), Dk("slo", String(b.Vj.script || "0")), T(70) && (Dk("hlo", a.htmlLoadOrder || Bj(a)), Dk("lst", String(a.loadScriptType || Cj(a))));
                else {
                    var c = !1;
                    hk.push(function(d) {
                        if (c) return [];
                        d.Ma && (c = !0);
                        d.mc();
                        var e = [
                            ["rtg", String(a.canonicalContainerId)],
                            ["rlo", String(b.Uj)],
                            ["slo", String(b.Vj.script || "0")]
                        ];
                        T(70) && (e.push(["hlo", a.htmlLoadOrder || Bj(a)]), e.push(["lst",
                            String(a.loadScriptType || Cj(a))
                        ]));
                        return e
                    })
                }
        }
    };
    var fz = function() {};
    var gz = function() {};
    gz.prototype.toString = function() {
        return "undefined"
    };
    var hz = new gz;

    function oz(a, b) {
        function c(g) {
            var k = U(g),
                m = bj(k, "protocol"),
                n = bj(k, "host", !0),
                p = bj(k, "port"),
                q = bj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function pz(a) {
        return qz(a) ? 1 : 0
    }

    function qz(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = h(a, {});
                h({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (pz(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return og(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < kg.length; g++) {
                            var k = kg[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return lg(b, c);
            case "_eq":
                return pg(b, c);
            case "_ge":
                return qg(b, c);
            case "_gt":
                return sg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return rg(b, c);
            case "_lt":
                return tg(b, c);
            case "_re":
                return ng(b, c, a.ignore_case);
            case "_sw":
                return ug(b, c);
            case "_um":
                return oz(b, c)
        }
        return !1
    };

    function rz() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function sz() {
        var a = [
            ["cv", T(83) ? rz() : "1"],
            ["rv", hi.Kg],
            ["tc", hf.filter(function(b) {
                return b
            }).length]
        ];
        hi.ie && a.push(["x", hi.ie]);
        Ai.j && a.push(["tag_exp", Ai.j]);
        return a
    };

    function tz() {
        var a = Gl();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var uz;

    function vz() {
        try {
            uz != null || (uz = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return ((a = uz) == null ? 0 : a.length) ? [
            ["exp_tz", uz]
        ] : []
    };

    function wz(a) {
        var b = [],
            c = a.Ma,
            d = pj;
        d !== void 0 && (b.push(["exp_lol", String(Math.floor(d))]), c && (pj = void 0));
        return b
    };

    function xz() {
        return !1
    }

    function yz() {
        var a = {};
        return function(b, c, d) {}
    };

    function zz() {
        var a = Az;
        return function(b, c, d) {
            var e = d && d.event;
            Bz(c);
            var f = Ib(b, "__cvt_") ? void 0 : 1,
                g = new cb;
            z(c, function(r, t) {
                var u = fd(t, void 0, f);
                u === void 0 && t !== void 0 && O(44);
                g.set(r, u)
            });
            a.j.j.D = Cf();
            var k = {
                zj: Qf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                ne: e !== void 0 ? function(r) {
                    e.ic.ne(r)
                } : void 0,
                wb: function() {
                    return b
                },
                log: function() {},
                tl: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Cm: !!ew(b, 3),
                originalEventData: e == null ?
                    void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (xz()) {
                var m = yz(),
                    n, p;
                k.Sa = {
                    Nh: [],
                    oe: {},
                    xb: function(r, t, u) {
                        t === 1 && (n = r);
                        t === 7 && (p = u);
                        m(r, t, u)
                    },
                    If: ch()
                };
                k.log = function(r) {
                    var t = Aa.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = Ce(a, k, [b, g]);
            a.j.j.D = void 0;
            q instanceof Ha && q.type === "return" && (q = q.data);
            return J(q, void 0, f)
        }
    }

    function Bz(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        qb(b) && (a.gtmOnSuccess = function() {
            I(b)
        });
        qb(c) && (a.gtmOnFailure = function() {
            I(c)
        })
    };

    function Cz(a, b) {
        var c = this;
    }
    Cz.T = "addConsentListener";
    var Dz = !1;

    function Ez(a) {
        for (var b = 0; b < a.length; ++b)
            if (Dz) try {
                a[b]()
            } catch (c) {
                O(77)
            } else a[b]()
    }

    function Fz(a, b, c) {
        var d = this,
            e;
        return e
    }
    Fz.J = "internal.addDataLayerEventListener";

    function Gz(a, b, c) {}
    Gz.T = "addDocumentEventListener";

    function Hz(a, b, c, d) {}
    Hz.T = "addElementEventListener";

    function Iz(a) {
        return a.F.j
    };

    function Jz(a) {}
    Jz.T = "addEventCallback";

    function Zz(a) {}
    Zz.J = "internal.addFormAbandonmentListener";

    function $z(a, b, c, d) {}
    $z.J = "internal.addFormData";
    var aA = {},
        bA = [],
        cA = {},
        dA = 0,
        eA = 0;

    function lA(a, b) {}
    lA.J = "internal.addFormInteractionListener";

    function sA(a, b) {}
    sA.J = "internal.addFormSubmitListener";

    function xA(a) {}
    xA.J = "internal.addGaSendListener";

    function yA(a) {
        if (!a) return {};
        var b = a.tl;
        return Cw(b.type, b.index, b.name)
    }

    function zA(a) {
        return a ? {
            originatingEntity: yA(a)
        } : {}
    };

    function HA(a) {
        var b = ii.zones;
        return b ? b.getIsAllowedFn(Ij(), a) : function() {
            return !0
        }
    }

    function IA() {
        hw(Pj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = ii.zones;
            return c ? c.isActive(Ij(), b) : !0
        });
        fw(Pj(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return HA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var JA = function(a, b) {
        this.tagId = a;
        this.qe = b
    };

    function KA(a, b) {
        var c = this,
            d;
        return d
    }
    KA.J = "internal.loadGoogleTag";

    function LA(a) {
        return new Yc("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof Yc) return new Yc("", function() {
                var d = Aa.apply(0, arguments),
                    e = this,
                    f = h(Iz(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Na(this.F);
                k.j = f;
                return c.fb.apply(c, [k].concat(qa(g)))
            })
        })
    };

    function MA(a, b, c) {
        var d = this;
    }
    MA.J = "internal.addGoogleTagRestriction";
    var NA = {},
        OA = [];

    function VA(a, b) {}
    VA.J = "internal.addHistoryChangeListener";

    function WA(a, b, c) {}
    WA.T = "addWindowEventListener";

    function XA(a, b) {
        return !0
    }
    XA.T = "aliasInWindow";

    function YA(a, b, c) {}
    YA.J = "internal.appendRemoteConfigParameter";

    function ZA(a) {
        var b;
        return b
    }
    ZA.T = "callInWindow";

    function $A(a) {}
    $A.T = "callLater";

    function aB(a) {}
    aB.J = "callOnDomReady";

    function bB(a) {}
    bB.J = "callOnWindowLoad";

    function cB(a, b) {
        var c;
        return c
    }
    cB.J = "internal.computeGtmParameter";

    function dB(a) {
        var b;
        return b
    }
    dB.J = "internal.copyFromCrossContainerData";

    function eB(a, b) {
        var c;
        var d = fd(c, this.F, Ib(Iz(this).wb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && O(45);
        return d
    }
    eB.T = "copyFromDataLayer";

    function fB(a) {
        var b = void 0;
        return b
    }
    fB.J = "internal.copyFromDataLayerCache";

    function gB(a) {
        var b;
        return b
    }
    gB.T = "copyFromWindow";

    function hB(a) {
        var b = void 0;
        return fd(b, this.F, 1)
    }
    hB.J = "internal.copyKeyFromWindow";

    function iB(a, b) {
        var c;
        return c
    }
    iB.J = "internal.copyPreHit";

    function jB(a, b) {
        var c = null;
        return fd(c, this.F, 2)
    }
    jB.T = "createArgumentsQueue";

    function kB(a) {
        return fd(function(c) {
            var d = Mw();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m = Mw(),
                        n = m && m.getByName &&
                        m.getByName(f);
                    return Mk(F.gaplugins.Linker, n).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.F, 1)
    }
    kB.J = "internal.createGaCommandQueue";

    function lB(a) {
        return fd(function() {
            if (!qb(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.F, Ib(Iz(this).wb(),
            "__cvt_") ? 2 : 1)
    }
    lB.T = "createQueue";

    function mB(a, b) {
        var c = null;
        return c
    }
    mB.J = "internal.createRegex";

    function nB() {
        var a = {};
        return a
    };

    function oB(a) {}
    oB.J = "internal.declareConsentState";

    function pB(a) {
        var b = "";
        return b
    }
    pB.J = "internal.decodeUrlHtmlEntities";

    function qB(a, b, c) {
        var d;
        return d
    }
    qB.J = "internal.decorateUrlWithGaCookies";

    function rB(a) {
        var b;
        return b
    }
    rB.J = "internal.detectUserProvidedData";

    function vB(a, b) {
        return b
    }
    vB.J = "internal.enableAutoEventOnClick";

    function DB(a, b) {
        return b
    }
    DB.J = "internal.enableAutoEventOnElementVisibility";

    function EB() {}
    EB.J = "internal.enableAutoEventOnError";
    var FB = {},
        GB = [],
        HB = {},
        IB = 0,
        JB = 0;

    function PB(a, b) {
        var c = this;
        return b
    }
    PB.J = "internal.enableAutoEventOnFormInteraction";

    function UB(a, b) {
        var c = this;
        return b
    }
    UB.J = "internal.enableAutoEventOnFormSubmit";

    function ZB() {
        var a = this;
    }
    ZB.J = "internal.enableAutoEventOnGaSend";
    var $B = {},
        aC = [];

    function hC(a, b) {
        var c = this;
        return b
    }
    hC.J = "internal.enableAutoEventOnHistoryChange";
    var iC = ["http://", "https://", "javascript:", "file://"];

    function mC(a, b) {
        var c = this;
        return b
    }
    mC.J = "internal.enableAutoEventOnLinkClick";
    var nC, oC;

    function zC(a, b) {
        var c = this;
        return b
    }
    zC.J = "internal.enableAutoEventOnScroll";

    function AC(a) {
        return function() {
            if (a.wh && a.yh >= a.wh) a.Gf && F.clearInterval(a.Gf);
            else {
                a.yh++;
                var b = Db();
                sy({
                    event: a.eventName,
                    "gtm.timerId": a.Gf,
                    "gtm.timerEventNumber": a.yh,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.wh,
                    "gtm.timerStartTime": a.Zj,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Zj,
                    "gtm.triggers": a.Sm
                })
            }
        }
    }

    function BC(a, b) {
        return b
    }
    BC.J = "internal.enableAutoEventOnTimer";
    var jc = ka(["data-gtm-yt-inspected-"]),
        DC = ["www.youtube.com", "www.youtube-nocookie.com"],
        EC, FC = !1;

    function PC(a, b) {
        var c = this;
        return b
    }
    PC.J = "internal.enableAutoEventOnYouTubeActivity";

    function QC(a, b) {
        K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var c = b ? J(b) : {},
            d = a,
            e = !1;
        return e
    }
    QC.J = "internal.evaluateBooleanExpression";
    var RC;

    function SC(a) {
        var b = !1;
        return b
    }
    SC.J = "internal.evaluateMatchingRules";
    var AD = function() {
        var a = !0;
        Tn(7) && Tn(9) && Tn(10) || (a = !1);
        return a
    };

    function vE(a, b, c, d) {}
    vE.J = "internal.executeEventProcessor";

    function wE(a) {
        var b;
        return fd(b, this.F, 1)
    }
    wE.J = "internal.executeJavascriptString";

    function xE(a) {
        var b;
        return b
    };
    var yE = null;

    function zE() {
        var a = new cb;
        return a
    }
    zE.T = "getContainerVersion";

    function AE(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    AE.T = "getCookieValues";

    function BE() {
        return Gl()
    }
    BE.J = "internal.getCountryCode";

    function CE() {
        var a = [];
        return fd(a)
    }
    CE.J = "internal.getDestinationIds";

    function DE(a, b) {
        var c = null;
        return c
    }
    DE.J = "internal.getElementAttribute";

    function EE(a) {
        var b = null;
        return b
    }
    EE.J = "internal.getElementById";

    function FE(a) {
        var b = "";
        return b
    }
    FE.J = "internal.getElementInnerText";

    function GE(a, b) {
        var c = null;
        return c
    }
    GE.J = "internal.getElementProperty";

    function HE(a) {
        var b;
        return b
    }
    HE.J = "internal.getElementValue";

    function IE(a) {
        var b = 0;
        return b
    }
    IE.J = "internal.getElementVisibilityRatio";

    function JE(a) {
        var b = null;
        return b
    }
    JE.J = "internal.getElementsByCssSelector";

    function KE(a) {
        var b;
        K(this.getName(), ["keyPath:!string"], arguments);
        N(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = Iz(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var u = r[t].split("."), v = 0; v < u.length; v++) n.push(u[v]), v !== u.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = na(n), B = y.next(); !B.done; B =
                    y.next()) {
                    var A = B.value;
                    A === m ? (w.push(x), x = "") : x = A === g ? x + "\\" : A === k ? x + "." : x + A
                }
                x && w.push(x);
                for (var D = na(w), E = D.next(); !E.done; E = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[E.value]
                }
                c = f
            } else c = void 0
        }
        b = fd(c, this.F, 1);
        return b
    }
    KE.J = "internal.getEventData";
    var LE = {};
    LE.enableAWFledge = T(23);
    LE.enableAdsConversionValidation = T(14);
    LE.enableAutoPiiOnPhoneAndAddress = T(22);
    LE.enableCachedEcommerceData = T(29);
    LE.enableCcdPreAutoPiiDetection = T(30);
    LE.enableCloudRecommentationsErrorLogging = T(31);
    LE.enableCloudRecommentationsSchemaIngestion = T(32);
    LE.enableCloudRetailInjectPurchaseMetadata = T(34);
    LE.enableCloudRetailLogging = T(33);
    LE.enableCloudRetailPageCategories = T(35);
    LE.enableConsentDisclosureActivity = T(36);
    LE.enableConversionMarkerPageViewRename = T(38);
    LE.enableDCFledge = T(41);
    LE.enableDecodeUri = T(57);
    LE.enableDeferAllEnhancedMeasurement = T(42);
    LE.enableDmaBlockDisclosure = T(46);
    LE.enableEuidAutoMode = T(50);
    LE.enableFormSkipValidation = T(54);
    LE.enableUrlDecodeEventUsage = T(82);
    LE.enableZoneConfigInChildContainers = T(85);
    LE.ignoreServerMacroInGoogleSignal = T(88);
    LE.useEnableAutoEventOnFormApis = T(93);
    LE.autoPiiEligible = Ll();

    function ME() {
        return fd(LE)
    }
    ME.J = "internal.getFlags";

    function NE() {
        return new cd(hz)
    }
    NE.J = "internal.getHtmlId";

    function OE(a, b) {
        var c;
        return c
    }
    OE.J = "internal.getProductSettingsParameter";

    function PE(a, b) {
        var c;
        return c
    }
    PE.T = "getQueryParameters";

    function QE(a, b) {
        var c;
        return c
    }
    QE.T = "getReferrerQueryParameters";

    function RE(a) {
        var b = "";
        return b
    }
    RE.T = "getReferrerUrl";

    function SE() {
        return Hl()
    }
    SE.J = "internal.getRegionCode";

    function TE(a, b) {
        var c;
        return c
    }
    TE.J = "internal.getRemoteConfigParameter";

    function UE(a) {
        var b = "";
        return b
    }
    UE.T = "getUrl";

    function VE() {
        N(this, "get_user_agent");
        return rc.userAgent
    }
    VE.J = "internal.getUserAgent";

    function cF() {
        return F.gaGlobal = F.gaGlobal || {}
    }
    var dF = function() {
            var a = cF();
            a.hid = a.hid || ub();
            return a.hid
        },
        eF = function(a, b) {
            var c = cF();
            if (c.vid == void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var PF = function(a) {
            this.D = a;
            this.H = "";
            this.j = this.D
        },
        QF = function(a, b) {
            a.j = b;
            return a
        },
        RF = function(a, b) {
            a.K = b;
            return a
        };

    function SF(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function TF(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Xa(b) ? b : {}, f = na(d), g = f.next(); !g.done; g = f.next()) c(g.value, e)
        }
    };
    var BG = window,
        CG = document,
        DG = function(a) {
            var b = BG._gaUserPrefs;
            if (b && b.ioo && b.ioo() || CG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && BG["ga-disable-" + a] === !0) return !0;
            try {
                var c = BG.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(CG.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return CG.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function NG(a) {
        z(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[P.g.cb] || {};
        z(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    };
    var rH = function(a, b) {};

    function qH(a, b) {
        var c = function() {};
        return c
    }

    function sH(a, b, c) {};
    var tH = qH;

    function vH(a, b, c) {
        var d = this;
    }
    vH.J = "internal.gtagConfig";

    function wH() {
        var a = {};
        return a
    };

    function yH(a, b) {}
    yH.T = "gtagSet";

    function zH(a, b) {}
    zH.T = "injectHiddenIframe";

    function AH(a, b, c, d, e) {}
    AH.J = "internal.injectHtml";
    var EH = {};

    function GH(a, b, c, d) {}
    var HH = {
            dl: 1,
            id: 1
        },
        IH = {};

    function JH(a, b, c, d) {}
    GH.T = "injectScript";
    JH.J = "internal.injectScript";

    function KH(a) {
        var b = !0;
        return b
    }
    KH.T = "isConsentGranted";

    function LH() {
        return Jl()
    }
    LH.J = "internal.isDmaRegion";

    function MH(a) {
        var b = !1;
        return b
    }
    MH.J = "internal.isEntityInfrastructure";

    function NH() {
        var a = Yg(function(b) {
            Iz(this).log("error", b)
        });
        a.T = "JSON";
        return a
    };

    function OH(a) {
        var b = void 0;
        return fd(b)
    }
    OH.J = "internal.legacyParseUrl";

    function PH() {
        return !1
    }
    var QH = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function RH() {}
    RH.T = "logToConsole";

    function SH(a, b) {}
    SH.J = "internal.mergeRemoteConfig";

    function TH(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return fd(d)
    }
    TH.J = "internal.parseCookieValuesFromString";

    function UH(a) {
        var b = void 0;
        return b
    }
    UH.T = "parseUrl";

    function VH(a) {}
    VH.J = "internal.processAsNewEvent";

    function WH(a, b, c) {
        var d;
        return d
    }
    WH.J = "internal.pushToDataLayer";

    function XH(a) {
        var b = !1;
        return b
    }
    XH.T = "queryPermission";

    function YH() {
        var a = "";
        return a
    }
    YH.T = "readCharacterSet";

    function ZH() {
        return hi.Ya
    }
    ZH.J = "internal.readDataLayerName";

    function $H() {
        var a = "";
        return a
    }
    $H.T = "readTitle";

    function aI(a, b) {
        var c = this;
    }
    aI.J = "internal.registerCcdCallback";

    function bI(a) {
        return !0
    }
    bI.J = "internal.registerDestination";
    var cI = ["config", "event", "get", "set"];

    function dI(a, b, c) {}
    dI.J = "internal.registerGtagCommandListener";

    function eI(a, b) {
        var c = !1;
        return c
    }
    eI.J = "internal.removeDataLayerEventListener";

    function fI(a, b) {}
    fI.J = "internal.removeFormData";

    function gI() {}
    gI.T = "resetDataLayer";

    function hI(a, b, c, d) {}
    hI.J = "internal.sendGtagEvent";

    function iI(a, b, c) {}
    iI.T = "sendPixel";

    function jI(a, b) {}
    jI.J = "internal.setAnchorHref";

    function kI(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    kI.T = "setCookie";

    function lI(a) {}
    lI.J = "internal.setCorePlatformServices";

    function mI(a, b) {}
    mI.J = "internal.setDataLayerValue";

    function nI(a) {}
    nI.T = "setDefaultConsentState";

    function oI(a, b) {}
    oI.J = "internal.setDelegatedConsentType";

    function pI(a, b) {}
    pI.J = "internal.setFormAction";

    function qI(a, b, c) {}
    qI.J = "internal.setInCrossContainerData";

    function rI(a, b, c) {
        return !1
    }
    rI.T = "setInWindow";

    function sI(a, b, c) {}
    sI.J = "internal.setProductSettingsParameter";

    function tI(a, b, c) {}
    tI.J = "internal.setRemoteConfigParameter";

    function uI(a, b, c, d) {
        var e = this;
    }
    uI.T = "sha256";

    function vI(a, b, c) {}
    vI.J = "internal.sortRemoteConfigParameters";

    function wI(a, b) {
        var c = void 0;
        return c
    }
    wI.J = "internal.subscribeToCrossContainerData";
    var xI = {},
        yI = {};
    xI.getItem = function(a) {
        var b = null;
        return b
    };
    xI.setItem = function(a, b) {};
    xI.removeItem = function(a) {};
    xI.clear = function() {};
    xI.T = "templateStorage";

    function zI(a, b) {
        var c = !1;
        return c
    }
    zI.J = "internal.testRegex";

    function AI(a) {
        var b;
        return b
    };

    function BI(a) {
        var b;
        return b
    }
    BI.J = "internal.unsiloId";

    function CI(a, b) {
        var c;
        return c
    }
    CI.J = "internal.unsubscribeFromCrossContainerData";

    function DI(a) {}
    DI.T = "updateConsentState";
    var EI;

    function FI(a, b, c) {
        EI = EI || new ih;
        EI.add(a, b, c)
    }

    function GI(a, b) {
        var c = EI = EI || new ih;
        if (c.D.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.j.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.D[a] = qb(b) ? Fg(a, b) : Gg(a, b)
    }

    function HI() {
        return function(a) {
            var b;
            var c = EI;
            if (c.j.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.D.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.F.j;
                    if (f) {
                        var g = f.wb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };
    var II = function() {
        var a = function(c) {
                return GI(c.J, c)
            },
            b = function(c) {
                return FI(c.T, c)
            };
        b(Cz);
        b(Jz);
        b(XA);
        b(ZA);
        b($A);
        b(eB);
        b(gB);
        b(jB);
        b(lB);
        b(zE);
        b(AE);
        b(PE);
        b(QE);
        b(RE);
        b(UE);
        b(yH);
        b(zH);
        b(GH);
        b(KH);
        b(RH);
        b(UH);
        b(XH);
        b(YH);
        b($H);
        b(iI);
        b(kI);
        b(nI);
        b(rI);
        b(uI);
        b(xI);
        b(DI);
        b(NH());
        FI("Math", Kg());
        FI("Object", gh);
        FI("TestHelper", kh());
        FI("assertApi", Hg);
        FI("assertThat", Ig);
        FI("decodeUri", Mg);
        FI("decodeUriComponent", Ng);
        FI("encodeUri", Og);
        FI("encodeUriComponent", Pg);
        FI("fail", Ug);
        FI("generateRandom",
            Vg);
        FI("getTimestamp", Wg);
        FI("getTimestampMillis", Wg);
        FI("getType", Xg);
        FI("makeInteger", Zg);
        FI("makeNumber", $g);
        FI("makeString", ah);
        FI("makeTableMap", bh);
        FI("mock", eh);
        FI("fromBase64", xE, !("atob" in F));
        FI("localStorage", QH, !PH());
        FI("toBase64", AI, !("btoa" in F));
        a(Fz);
        a($z);
        a(lA);
        a(sA);
        a(xA);
        a(MA);
        a(VA);
        a(YA);
        a(aB);
        a(bB);
        a(cB);
        a(dB);
        a(fB);
        a(hB);
        a(iB);
        a(kB);
        a(mB);
        a(oB);
        a(pB);
        a(qB);
        a(rB);
        a(vB);
        a(DB);
        a(EB);
        a(PB);
        a(UB);
        a(ZB);
        a(hC);
        a(mC);
        a(zC);
        a(BC);
        a(PC);
        a(QC);
        a(SC);
        a(vE);
        a(wE);
        a(BE);
        a(CE);
        a(DE);
        a(EE);
        a(FE);
        a(GE);
        a(HE);
        a(IE);
        a(JE);
        a(KE);
        a(ME);
        a(NE);
        a(OE);
        a(SE);
        a(TE);
        a(vH);
        a(AH);
        a(JH);
        a(LH);
        a(MH);
        a(OH);
        a(KA);
        a(SH);
        a(TH);
        a(VH);
        a(WH);
        a(ZH);
        a(aI);
        a(bI);
        a(dI);
        a(eI);
        a(fI);
        a(hI);
        a(jI);
        a(lI);
        a(mI);
        a(oI);
        a(pI);
        a(qI);
        a(sI);
        a(tI);
        a(vI);
        a(wI);
        a(zI);
        a(BI);
        a(CI);
        GI("internal.CrossContainerSchema", nB());
        GI("internal.GtagSchema", wH());
        FI("mockObject", fh);
        return HI()
    };
    var Az;

    function JI() {
        Az.j.j.K = function(a, b, c) {
            ii.SANDBOXED_JS_SEMAPHORE = ii.SANDBOXED_JS_SEMAPHORE || 0;
            ii.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ii.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function KI(a) {
        a && z(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                xi[e] = xi[e] || [];
                xi[e].push(b)
            }
        })
    };
    var LI = encodeURI,
        Y = encodeURIComponent,
        MI = Array.isArray,
        NI = function(a, b, c) {
            Ec(a, b, c)
        },
        OI = function(a, b) {
            if (!a) return !1;
            var c = bj(U(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    f > 0 && e.charAt(0) != "." && (f--, e = "." + e);
                    if (f >= 0 && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        PI = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] &&
                a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var YI = F.clearTimeout,
        ZI = F.setTimeout,
        $I = function(a, b, c) {
            if (lo()) {
                b && I(b)
            } else return Bc(a, b, c)
        },
        aJ = function() {
            return F.location.href
        },
        bJ = function(a, b) {
            return Hi(a, b || 2)
        },
        cJ = function(a, b) {
            F[a] = b
        },
        dJ = function(a, b, c) {
            b && (F[a] === void 0 || c && !F[a]) && (F[a] = b);
            return F[a]
        },
        eJ = function(a, b) {
            if (lo()) {
                b && I(b)
            } else Dc(a, b)
        };
    var fJ = {};
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.f = ["google"], Z.__f = function(a) {
        var b = bJ("gtm.referrer", 1) || H.referrer;
        return b ? a.vtp_component && a.vtp_component != "URL" ? bj(U(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ej(U(String(b))) : String(b)
    }, Z.__f.C = "f", Z.__f.isVendorTemplate = !0, Z.__f.priorityOverride = 0, Z.__f.isInfrastructure = !0, Z.__f.runInSiloedMode = !1;

    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.C = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : bJ("gtm.url", 1)) || aJ();
                var d = b[a("vtp_component")];
                if (!d || d == "URL") return ej(U(String(c)));
                var e = U(String(c)),
                    f;
                if (d === "QUERY") a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;n = g ? Array.isArray(k) ? k : String(k).replace(/\s+/g, "").split(",") : [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = bj(e, "QUERY", void 0, void 0, n[p]);
                        if (q != void 0 && (!m || q !== "")) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = bj(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();

    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.C = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !l(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && jg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    N: a
                }
            })
        }();

















    var gJ = {};
    gJ.dataLayer = Ii;
    gJ.callback = function(a) {
        wi.hasOwnProperty(a) && qb(wi[a]) && wi[a]();
        delete wi[a]
    };
    gJ.bootstrap = 0;
    gJ._spx = !1;

    function hJ() {
        ii[Nj()] = ii[Nj()] || gJ;
        Yj();
        ck() || z(dk(), function(d, e) {
            uw(d, e.transportUrl, e.context);
            O(92)
        });
        Gb(xi, Z.securityGroups);
        var a = Rj(Sj()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || O(142);
        pf = Gf
    }
    (function(a) {
        function b() {
            n = H.documentElement.getAttribute("data-tag-assistant-present");
            Dy(n) && (m = k.Vi)
        }

        function c() {
            m && uc ? g(m) : a()
        }
        if (!F["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (H.referrer) {
                var e = U(H.referrer);
                d = dj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = xo("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (F["__TAGGY_INSTALLED"] = !0, Bc("https://cct.google/taggy/agent.js"))
        }
        var g = function(u) {
                var v = "GTM",
                    w = "GTM";
                ni && (v = "OGT", w = "GTAG");
                var x = F["google.tagmanager.debugui2.queue"];
                x || (x = [], F["google.tagmanager.debugui2.queue"] = x, Bc("https://" + hi.Ed + "/debug/bootstrap?id=" + Mf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + no()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: uc,
                        containerProduct: v,
                        debug: !1,
                        id: Mf.ctid,
                        targetRef: {
                            ctid: Mf.ctid,
                            isDestination: Gj.fe
                        },
                        aliases: Jj(),
                        destinations: Mj()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                hi.lk && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                Fk: 1,
                Xi: 2,
                mj: 3,
                ai: 4,
                Vi: 5
            };
        k[k.Fk] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Xi] = "GTM_DEBUG_PARAM";
        k[k.mj] = "REFERRER";
        k[k.ai] = "COOKIE";
        k[k.Vi] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = bj(F.location, "query", !1, void 0, "gtm_debug");
        Dy(p) && (m = k.Xi);
        if (!m && H.referrer) {
            var q = U(H.referrer);
            dj(q, "host") === "tagassistant.google.com" && (m = k.mj)
        }
        if (!m) {
            var r = xo("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.ai)
        }
        m || b();
        if (!m && Ey(n)) {
            var t = !1;
            Fc(H, "TADebugSignal", function() {
                t || (t = !0, b(), c())
            }, !1);
            F.setTimeout(function() {
                t || (t = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            Wj();
            if (T(66)) {}
            Tl().D();
            Qn();
            rm();
            var a = Pj();
            if (Ej().canonical[a]) {
                var b = ii.zones;
                b && b.unregisterChild(Ij());
                gw().removeExternalRestrictions(Pj());
            } else {
                a: {}
                Ai.j =
                "0";Ai.D = Ai.H;Ai.K = "";Ai.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";Ai.O = "ad_storage|analytics_storage|ad_user_data";Ai.Qa = "";rw();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) ef.push(d[e]);
                for (var f = c.tags || [], g = 0; g < f.length; g++) hf.push(f[g]);
                for (var k = c.predicates || [], m = 0; m < k.length; m++) gf.push(k[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var u = q[t][0];
                        r[u] = Array.prototype.slice.call(q[t], 1);
                        u !== "if" && u !== "unless" || of (r[u])
                    }
                    ff.push(r)
                }
                kf = Z;lf = pz;If = new Pf;
                var v = data.sandboxed_scripts,
                    w = data.security_groups;a: {
                    var x = data.runtime || [],
                        y = data.runtime_lines;Az = new Ae;JI();df = zz();
                    var B = Az,
                        A = II(),
                        D = new Yc("require",
                            A);D.Mb();B.j.j.set("require", D);
                    for (var E = [], C = 0; C < x.length; C++) {
                        var G = x[C];
                        if (!Array.isArray(G) || G.length < 3) {
                            if (G.length === 0) continue;
                            break a
                        }
                        y && y[C] && y[C].length && zf(G, y[C]);
                        try {
                            Az.execute(G), T(75) && wj && G[0] === 50 && E.push(G[1])
                        } catch (Da) {}
                    }
                    T(75) && (qf = E)
                }
                if (v && v.length)
                    for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
                        var S = v[L].replace(/^_*/, "");
                        xi[S] = M
                    }
                KI(w);hJ();
                if (!ri)
                    for (var V = Jl() ? Ci(Ai.O) : Ci(Ai.Z), ba = 0; ba < fm.length; ba++) {
                        var aa = fm[ba],
                            Q = aa,
                            oa = V[aa] ? "granted" : "denied";
                        Ol().implicit(Q, oa)
                    }
                Cy();
                vw = !1;ww = 0;
                if (H.readyState === "interactive" && !H.createEventObject || H.readyState === "complete") yw();
                else {
                    Fc(H, "DOMContentLoaded", yw);
                    Fc(H, "readystatechange", yw);
                    if (H.createEventObject && H.documentElement.doScroll) {
                        var ma = !0;
                        try {
                            ma = !F.frameElement
                        } catch (Da) {}
                        ma && zw()
                    }
                    Fc(F, "load", yw)
                }
                hy = !1;H.readyState === "complete" ? jy() : Fc(F, "load", jy);wj && (ik(xk),
                    F.setInterval(wk, 864E5), ik(sz), ik(Zw), ik(Uu), ik(hn), ik(jx), ik(Dt), T(75) && (ik(dx), ik(ex), ik(fx)), T(62) && (ik(tz), ik(vz)), T(43) && ik(wz));
                if (xj) {
                    Lk();
                    Om();
                    zl();
                    Ly();
                    T(44) || hk.push(Dl);
                    T(44) || hk.push(Ex);
                    if (T(44)) {
                        var za = Iy();
                        za && Dk("pcid", za)
                    } else hk.push(Jy);
                    T(28) && (T(44) ? (Dk("bt", String(Ai.H ? 2 : pi ? 1 : 0)), Dk("ct", String(Ai.H ? 0 : pi ? 1 : lo() ? 2 : 3))) : hk.push(Gy))
                }
                fz();
                El(1);IA();vi = Db();gJ.bootstrap = vi;
                if (T(66)) {}
            }
        } catch (Da) {
            if (El(4), wj) {
                var Ma = qk(!1, !0, !0);
                Ec(Ma)
            }
        }
    });

})()