(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-f1565420"], {
        "0bdc": function(t, e, i) {
            "use strict";
            i.r(e);
            var o = i("9287").a,
                s = i("2877"),
                n = Object(s.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("i-frame", {
                        key: t.key,
                        attrs: {
                            cssLink: t.cssLink,
                            styleObject: t.styleObject,
                            width: t.width,
                            height: t.height
                        }
                    }, [e("div", {
                        ref: "tawk-bubble-container",
                        staticClass: "tawk-bubble-container",
                        attrs: {
                            id: "tawk-bubble-container",
                            role: "button",
                            tabindex: "0"
                        },
                        on: {
                            click: t.toggleWidget,
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.toggleWidget.apply(null, arguments)
                            }
                        }
                    }, ["text" === t.bubble.type ? e("div", [e("canvas", {
                        ref: "tawk-canvas-bubble",
                        attrs: {
                            id: "tawk-canvas-bubble",
                            width: "146px",
                            height: "85px"
                        }
                    }), e("div", {
                        staticClass: "tawk-bubble-text-container tawk-flex tawk-flex-center tawk-flex-middle",
                        style: {
                            top: t.isBottom || t.isCenter ? "5px" : "auto",
                            bottom: t.isBottom || t.isCenter ? "auto" : "5px",
                            left: "auto",
                            right: "9px"
                        },
                        attrs: {
                            id: "tawk-bubble-text-container"
                        }
                    }, [e("p", {
                        staticClass: "tawk-text-center tawk-text-italic",
                        style: {
                            color: t.bubble.config.foreground
                        },
                        attrs: {
                            id: "tawk-bubble-text"
                        }
                    }, [t._v(" " + t._s(t.bubble.config.content) + " ")])]), e("div", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip",
                            value: {
                                position: this.isBottom || this.isCenter ? "" : "bottom"
                            },
                            expression: "{position : (this.isBottom || this.isCenter ? '' : 'bottom')}"
                        }],
                        style: t.textCloseButton,
                        attrs: {
                            role: "button",
                            tabindex: "0",
                            "data-text": t.$i18n("form", "CloseButton"),
                            "aria-label": t.$i18n("form", "CloseButton")
                        },
                        on: {
                            click: t.bubbleClose,
                            keydown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.bubbleClose.apply(null, arguments)
                            }
                        }
                    })]) : e("div", {
                        class: t.closeButtonPosition
                    }, [e("tawk-icon", {
                        directives: [{
                            name: "tawk-tooltip",
                            rawName: "v-tawk-tooltip"
                        }],
                        attrs: {
                            type: "close",
                            size: "small",
                            role: "button",
                            tabindex: "0",
                            "data-text": t.$i18n("form", "CloseButton"),
                            "aria-label": t.$i18n("form", "CloseButton")
                        },
                        on: {
                            click: t.bubbleClose,
                            keydown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.bubbleClose.apply(null, arguments)
                            }
                        }
                    }), e("img", {
                        style: {
                            width: "".concat(this.bubble.config.width, "px"),
                            height: "".concat(this.bubble.config.height, "px")
                        },
                        attrs: {
                            src: t.imageUrl,
                            alt: "".concat(t.$i18n("bubble", "attention_grabber"))
                        }
                    })], 1)])])
                }), [], !1, null, null, null);
            e.default = n.exports
        },
        9287: function(t, e, i) {
            "use strict";
            (function(t) {
                var o = i("5a60"),
                    s = i("2f62"),
                    n = i("f0b0"),
                    a = i("87dd");

                function r(t) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function b(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, o)
                    }
                    return i
                }

                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? b(Object(i), !0).forEach((function(e) {
                            c(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }

                function c(t, e, i) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != r(t) || !t) return t;
                            var i = t[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var o = i.call(t, e || "default");
                                if ("object" != r(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == r(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i, t
                }
                e.a = {
                    name: "BubbleWidget",
                    components: {
                        "i-frame": o.a,
                        TawkIcon: n.TawkIcon
                    },
                    directives: {
                        TawkTooltip: n.TawkTooltip
                    },
                    mixins: [a.a],
                    data: function() {
                        return {
                            isHidden: "hidden",
                            cssLink: "".concat("https://embed.tawk.to/_s/v4/app/66850556628", "/css/bubble-widget.css"),
                            closeIconWidth: 16,
                            messagePreviewIsVisible: !1,
                            key: n.Helper.generateUUID()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("switchWidget", (function() {
                            e.key = n.Helper.generateUUID()
                        }))
                    },
                    computed: l(l({}, Object(s.c)({
                        minDesktop: "widget/minDesktop",
                        chatWindowState: "session/chatWindowState",
                        pageStatus: "session/pageStatus",
                        bubble: "widget/bubble",
                        isCenter: "widget/isCenter",
                        isRight: "widget/isRight",
                        isBottom: "widget/isBottom",
                        chatBubbleClosed: "session/chatBubbleClosed",
                        isRTL: "widget/isRTL"
                    })), {}, {
                        isRoundWidget: function() {
                            return t.Tawk_Window.widgetSettings.isRoundWidget()
                        },
                        xOffset: function() {
                            return t.Tawk_Window.widgetSettings.xOffset()
                        },
                        yOffset: function() {
                            return t.Tawk_Window.widgetSettings.yOffset()
                        },
                        bubbleXOffset: function() {
                            return t.Tawk_Window.widgetSettings.bubbleXOffset()
                        },
                        bubbleYOffset: function() {
                            return t.Tawk_Window.widgetSettings.bubbleYOffset()
                        },
                        bubbleRotate: function() {
                            return t.Tawk_Window.widgetSettings.bubbleRotate()
                        },
                        closeButtonPosition: function() {
                            return this.isBottom || this.isCenter ? this.isCenter && this.isRight ? "tawk-icon-left" : "tawk-icon-right" : "tawk-icon-bottom"
                        },
                        textCloseButton: function() {
                            var t = {
                                width: "25px",
                                height: "25px",
                                padding: 0,
                                background: "transparent",
                                position: "absolute"
                            };
                            return this.isRTL ? t.left = "2px" : t.right = "2px", this.isBottom || this.isCenter ? t.top = "0" : t.bottom = "0", t
                        },
                        styleObject: function() {
                            var t = l({
                                "position:": "fixed !important;",
                                "display:": "none !important;",
                                "z-index:": "".concat(0 === this.bubble.config.zIndex ? "1000000" : "1000002", " !important;"),
                                "height:": "".concat(this.height, " !important;"),
                                "max-height:": "".concat(this.height, " !important;"),
                                "min-height:": "".concat(this.height, " !important;"),
                                "width:": "".concat(this.width, " !important;"),
                                "max-width:": "".concat(this.width, " !important;"),
                                "min-width:": "".concat(this.width, " !important;")
                            }, this.calculatePosition());
                            return "max" === this.chatWindowState || "offline" === this.pageStatus || this.chatBubbleClosed || this.messagePreviewIsVisible ? t["display:"] = "none !important;" : t["display:"] = "block !important;", l(l({}, this.genericStyles), t)
                        },
                        width: function() {
                            return "text" === this.bubble.type ? "146px" : "".concat(this.bubble.config.width, "px")
                        },
                        height: function() {
                            return "text" === this.bubble.type ? "85px" : "".concat(this.bubble.config.height + this.closeIconWidth, "px")
                        },
                        imageUrl: function() {
                            var t, e = this.bubble.config;
                            if ("gallery" === e.image.type) {
                                var i = parseInt(e.image.content, 10),
                                    o = 22 === i;
                                this.isRoundWidget && (i += "-r"), this.isCenter ? i += this.isRight ? "-cr" : "-cl" : this.isBottom ? i += this.isRight ? "-br" : "-bl" : i += this.isRight ? "-tr" : "-tl", t = "".concat("https://embed.tawk.to/_s/v4/assets", "/images/attention-grabbers/").concat(i).concat(o ? ".png" : ".svg")
                            } else t = "".concat("https://tawk.link", "/").concat(e.image.content);
                            return t
                        },
                        offsets: function() {
                            var t = 0,
                                e = 0,
                                i = 0;
                            if (this.isCenter)
                                if ("text" === this.bubble.type) e = this.yOffset, this.isRight ? (i = -90, this.isRTL && (e = this.minDesktop.width + e - 146), e -= 10) : (i = 90, this.isRoundWidget || (e = this.minDesktop.width + e - 146), e += 10), t = this.minDesktop.height + this.xOffset + 2;
                                else {
                                    var o = "image" === this.bubble.type && "gallery" === this.bubble.config.image.type;
                                    e = this.bubbleYOffset, t = this.bubbleXOffset, i = this.bubbleRotate, o && (e += this.yOffset, t += this.xOffset), 0 !== this.bubbleRotate && (o ? t -= 3 : t += 2)
                                }
                            else "text" === this.bubble.type ? (e = this.minDesktop.height + this.yOffset + 2, t = this.xOffset) : "image" === this.bubble.type && "gallery" === this.bubble.config.image.type ? (e = this.yOffset + this.bubbleYOffset, t = this.xOffset + this.bubbleXOffset, i = this.bubbleRotate) : (e = this.bubbleYOffset, t = this.bubbleXOffset, i = this.bubbleRotate);
                            return {
                                xOffset: t,
                                yOffset: e,
                                rotate: i
                            }
                        }
                    }),
                    methods: l(l({}, Object(s.b)({
                        toggleWidget: "session/toggleWidget",
                        closeChatBubble: "session/closeChatBubble"
                    })), {}, {
                        calculatePosition: function() {
                            var t, e, i = "image" === this.bubble.type && "gallery" === this.bubble.config.image.type,
                                o = this.offsets,
                                s = "text" === this.bubble.type ? 85 : this.bubble.config.height + this.closeIconWidth,
                                n = "text" === this.bubble.type ? 146 : this.bubble.config.width,
                                a = {},
                                r = "0;",
                                b = "50% !important;";
                            if (this.isCenter) {
                                var l, c = o.yOffset,
                                    h = -.5 * s;
                                r = "49%;", 0 === o.rotate ? (i ? (l = 0, b = "calc(50% - ".concat(.5 * this.bubble.config.height + 13 - c, "px) !important;"), t = "0") : l = .5 * (this.minDesktop.width - s), e = "".concat(o.xOffset, "px !important;")) : i ? (l = 0, c = 0 === this.yOffset ? 0 : o.yOffset, e = "".concat(-1 * (.5 * (n - s) - o.yOffset), "px !important;")) : (l = .5 * (this.minDesktop.width - n), e = "".concat(-1 * (.5 * (n - s) - o.xOffset), "px !important;")), this.isRight ? (a["right:"] = e, a["left:"] = "auto !important;") : (a["right:"] = "auto !important;", a["left:"] = e), a["top:"] = b, a["bottom:"] = "auto !important;", t || (t = h - l + c)
                            } else t = "0", this.isBottom ? (a["bottom:"] = o.yOffset + "px !important;", a["top:"] = "auto !important;") : (a["bottom:"] = "auto !important;", a["top:"] = o.yOffset + "px !important;"), this.isRight ? (a["right:"] = o.xOffset + "px !important;", a["left:"] = "auto !important;") : (a["right:"] = "auto !important;", a["left:"] = o.xOffset + "px !important;");
                            var u = "rotate(".concat(o.rotate, "deg) translateZ(0);");
                            return a["transform:"] = u, a["-moz-transform:"] = u, a["-webkit-transform:"] = u, a["-o-transform:"] = u, a["-ms-transform:"] = u, a["transform-origin:"] = r, a["-moz-transform-origin:"] = r, a["-webkit-transform-origin:"] = r, a["-o-transform-origin:"] = r, a["-ms-transform-origin:"] = r, a["margin:"] = "".concat(t, "px 0 0 0 !important;"), a
                        },
                        bubbleClose: function(t) {
                            t.stopPropagation(), this.closeChatBubble()
                        },
                        updateMessagPreviewData: function(t) {
                            this.messagePreviewIsVisible = t
                        },
                        loaded: function() {
                            if ("text" === this.bubble.type) {
                                var e, i, o, s, n, a, r, b, l, c, h, u, f, g = this.$refs["tawk-canvas-bubble"];
                                if (!g || !g.getContext) return;
                                var p = 5,
                                    d = 134,
                                    m = 63,
                                    w = this.bubble.config.background,
                                    y = g.getContext("2d"),
                                    k = "#e3e0e7";
                                y.clearRect(0, 0, 134, 63), y.fillStyle = w, this.isCenter || this.isBottom ? (e = p = 6, i = p + m - 3, o = 55, s = 79, n = !0, a = {
                                    s1: .9,
                                    a1: .1,
                                    s2: .4,
                                    a2: 1.15
                                }) : (e = 68, i = (p = 16) + 3, o = 81, s = 6, n = !1, a = {
                                    s1: 1.1,
                                    a1: 1.9,
                                    s2: 1.6,
                                    a2: .85
                                }), this.isRTL ? (b = (r = 10) + 2, l = r + 5, c = r - 2, h = r - 2, u = r + 5, o = 81, f = !n, this.isBottom || this.isCenter ? (f = !n, a.s2 = .6, a.a2 = 1.85) : (f = n, a.s2 = .2, a.a2 = 1.45)) : (b = (r = 2) + d - 2, l = r + d - 5, c = r + d + 2, h = r + d + 2, u = r + d - 5, f = n), y.beginPath(), y.moveTo(r + 8, p), y.lineTo(68, p), y.lineTo(r + d - 8, p), y.quadraticCurveTo(r + d, p, r + d, p + 8), y.lineTo(r + d, p + m - 8), y.quadraticCurveTo(r + d, p + m, r + d - 8, p + m), y.lineTo(r + 8, p + m), y.quadraticCurveTo(r, p + m, r, p + m - 8), y.lineTo(r, p + 8), y.quadraticCurveTo(r, p, r + 8, p), y.strokeStyle = k, y.lineWidth = 2, y.stroke(), y.closePath(), y.fill(), y.beginPath(), y.arc(68, i, 10, Math.PI * a.s1, Math.PI * a.a1, n), y.strokeStyle = k, y.lineWidth = 2, y.stroke(), y.fill(), this.isRoundWidget && (this.isBottom || this.isCenter || this.isRight ? (this.isBottom && this.isRight || this.isCenter && this.isRight) && (o += 30) : o -= 30), y.beginPath(), y.arc(o, s, 5, 0, 2 * Math.PI, !1), y.strokeStyle = k, y.lineWidth = 2, y.stroke(), y.closePath(), y.fill(), y.beginPath(), y.arc(b, e + 5, 10, Math.PI * a.s2, Math.PI * a.a2, f), y.strokeStyle = k, y.lineWidth = 2, y.stroke(), y.closePath(), y.fillStyle = w, y.fill(), y.beginPath(), y.moveTo(l, e + 1.5), y.lineTo(c, e + 8), y.closePath(), y.lineWidth = 2, y.strokeStyle = this.bubble.config.foreground, y.stroke(), y.beginPath(), y.moveTo(h, e + 1.5), y.lineTo(u, e + 8), y.closePath(), y.lineWidth = 2, y.strokeStyle = this.bubble.config.foreground, y.stroke()
                            }
                            t.Tawk_Window.eventBus.$on("mpIsVisible", this.updateMessagPreviewData)
                        },
                        beforeDestroy: function() {
                            t.Tawk_Window.eventBus.$off("mpIsVisible", this.updateMessagPreviewData)
                        }
                    })
                }
            }).call(this, i("c8ba"))
        }
    }
]);