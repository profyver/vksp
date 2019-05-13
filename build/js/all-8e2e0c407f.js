function fn(t) {
    return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function units(t, e) {
    t = Math.abs(t);
    var n = "";
    return n = t.toString().indexOf(".") > -1 ? e.gen : t % 10 == 1 && t % 100 != 11 ? e.nom : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? e.gen : e.plu
}! function(t) {
    function e() {
        do s == a ? s = 0 : s++; while (r.hasOwnProperty(s));
        return s
    }
    try {
        var n = new Blob(["var fakeIdToId = {};onmessage = function (event) {	var data = event.data,		name = data.name,		fakeId = data.fakeId,		time;	if(data.hasOwnProperty('time')) {		time = data.time;	}	switch (name) {		case 'setInterval':			fakeIdToId[fakeId] = setInterval(function () {				postMessage({fakeId: fakeId});			}, time);			break;		case 'clearInterval':			if (fakeIdToId.hasOwnProperty (fakeId)) {				clearInterval(fakeIdToId[fakeId]);				delete fakeIdToId[fakeId];			}			break;		case 'setTimeout':			fakeIdToId[fakeId] = setTimeout(function () {				postMessage({fakeId: fakeId});				if (fakeIdToId.hasOwnProperty (fakeId)) {					delete fakeIdToId[fakeId];				}			}, time);			break;		case 'clearTimeout':			if (fakeIdToId.hasOwnProperty (fakeId)) {				clearTimeout(fakeIdToId[fakeId]);				delete fakeIdToId[fakeId];			}			break;	}}"]);
        t = window.URL.createObjectURL(n)
    } catch (o) {}
    var i, r = {},
        s = 0,
        a = 2147483647;
    if ("undefined" != typeof Worker) try {
        i = new Worker(t), window.setInterval = function(t, n) {
            var o = e();
            return r[o] = {
                callback: t,
                parameters: Array.prototype.slice.call(arguments, 2)
            }, i.postMessage({
                name: "setInterval",
                fakeId: o,
                time: n
            }), o
        }, window.clearInterval = function(t) {
            r.hasOwnProperty(t) && (delete r[t], i.postMessage({
                name: "clearInterval",
                fakeId: t
            }))
        }, window.setTimeout = function(t, n) {
            var o = e();
            return r[o] = {
                callback: t,
                parameters: Array.prototype.slice.call(arguments, 2),
                isTimeout: !0
            }, i.postMessage({
                name: "setTimeout",
                fakeId: o,
                time: n
            }), o
        }, window.clearTimeout = function(t) {
            r.hasOwnProperty(t) && (delete r[t], i.postMessage({
                name: "clearTimeout",
                fakeId: t
            }))
        }, i.onmessage = function(t) {
            var e, n, o, i = t.data,
                s = i.fakeId;
            if (r.hasOwnProperty(s) && (e = r[s], o = e.callback, n = e.parameters, e.hasOwnProperty("isTimeout") && e.isTimeout && delete r[s]), "string" == typeof o) try {
                o = new Function(o)
            } catch (a) {}
            "function" == typeof o && o.apply(window, n)
        }, i.onerror = function(t) {}
    } catch (o) {}
}("HackTimerWorker.min.js"), ! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length" in t && t.length,
            n = it.type(t);
        return "function" === n || it.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        if (it.isFunction(e)) return it.grep(t, function(t, o) {
            return !!e.call(t, o, t) !== n
        });
        if (e.nodeType) return it.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (pt.test(e)) return it.filter(e, t, n);
            e = it.filter(e, t)
        }
        return it.grep(t, function(t) {
            return it.inArray(t, e) >= 0 !== n
        })
    }

    function i(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = wt[t] = {};
        return it.each(t.match(bt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), it.ready())
    }

    function c(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var o = "data-" + e.replace(_t, "-$1").toLowerCase();
            if (n = t.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !it.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, n, o) {
        if (it.acceptData(t)) {
            var i, r, s = it.expando,
                a = t.nodeType,
                c = a ? it.cache : t,
                l = a ? t[s] : t[s] && s;
            if (l && c[l] && (o || c[l].data) || void 0 !== n || "string" != typeof e) return l || (l = a ? t[s] = X.pop() || it.guid++ : s), c[l] || (c[l] = a ? {} : {
                toJSON: it.noop
            }), ("object" == typeof e || "function" == typeof e) && (o ? c[l] = it.extend(c[l], e) : c[l].data = it.extend(c[l].data, e)), r = c[l], o || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[it.camelCase(e)] = n), "string" == typeof e ? (i = r[e], null == i && (i = r[it.camelCase(e)])) : i = r, i
        }
    }

    function d(t, e, n) {
        if (it.acceptData(t)) {
            var o, i, r = t.nodeType,
                s = r ? it.cache : t,
                a = r ? t[it.expando] : it.expando;
            if (s[a]) {
                if (e && (o = n ? s[a] : s[a].data)) {
                    it.isArray(e) ? e = e.concat(it.map(e, it.camelCase)) : e in o ? e = [e] : (e = it.camelCase(e), e = e in o ? [e] : e.split(" ")), i = e.length;
                    for (; i--;) delete o[e[i]];
                    if (n ? !l(o) : !it.isEmptyObject(o)) return
                }(n || (delete s[a].data, l(s[a]))) && (r ? it.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = jt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function m(t, e) {
        var n, o, i = 0,
            r = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (o = n[i]); i++) !e || it.nodeName(o, e) ? r.push(o) : it.merge(r, m(o, e));
        return void 0 === e || e && it.nodeName(t, e) ? it.merge([t], r) : r
    }

    function y(t) {
        Dt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e) {
        return it.nodeName(t, "table") && it.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== it.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = zt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var n, o = 0; null != (n = t[o]); o++) it._data(n, "globalEval", !e || it._data(e[o], "globalEval"))
    }

    function k(t, e) {
        if (1 === e.nodeType && it.hasData(t)) {
            var n, o, i, r = it._data(t),
                s = it._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (o = 0, i = a[n].length; i > o; o++) it.event.add(e, n, a[n][o])
            }
            s.data && (s.data = it.extend({}, s.data))
        }
    }

    function C(t, e) {
        var n, o, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[it.expando]) {
                i = it._data(e);
                for (o in i.events) it.removeEvent(e, o, i.handle);
                e.removeAttribute(it.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !it.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function T(e, n) {
        var o, i = it(n.createElement(e)).appendTo(n.body),
            r = t.getDefaultComputedStyle && (o = t.getDefaultComputedStyle(i[0])) ? o.display : it.css(i[0], "display");
        return i.detach(), r
    }

    function _(t) {
        var e = ft,
            n = Zt[t];
        return n || (n = T(t, e), "none" !== n && n || (Gt = (Gt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Gt[0].contentWindow || Gt[0].contentDocument).document, e.write(), e.close(), n = T(t, e), Gt.detach()), Zt[t] = n), n
    }

    function S(t, e) {
        return {
            get: function() {
                var n = t();
                return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }
        }
    }

    function E(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), o = e, i = pe.length; i--;)
            if (e = pe[i] + n, e in t) return e;
        return o
    }

    function A(t, e) {
        for (var n, o, i, r = [], s = 0, a = t.length; a > s; s++) o = t[s], o.style && (r[s] = it._data(o, "olddisplay"), n = o.style.display, e ? (r[s] || "none" !== n || (o.style.display = ""), "" === o.style.display && At(o) && (r[s] = it._data(o, "olddisplay", _(o.nodeName)))) : (i = At(o), (n && "none" !== n || !i) && it._data(o, "olddisplay", i ? n : it.css(o, "display"))));
        for (s = 0; a > s; s++) o = t[s], o.style && (e && "none" !== o.style.display && "" !== o.style.display || (o.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function N(t, e, n) {
        var o = ce.exec(e);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : e
    }

    function D(t, e, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += it.css(t, n + Et[r], !0, i)), o ? ("content" === n && (s -= it.css(t, "padding" + Et[r], !0, i)), "margin" !== n && (s -= it.css(t, "border" + Et[r] + "Width", !0, i))) : (s += it.css(t, "padding" + Et[r], !0, i), "padding" !== n && (s += it.css(t, "border" + Et[r] + "Width", !0, i)));
        return s
    }

    function I(t, e, n) {
        var o = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = te(t),
            s = nt.boxSizing && "border-box" === it.css(t, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = ee(t, e, r), (0 > i || null == i) && (i = t.style[e]), oe.test(i)) return i;
            o = s && (nt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + D(t, e, n || (s ? "border" : "content"), o, r) + "px"
    }

    function O(t, e, n, o, i) {
        return new O.prototype.init(t, e, n, o, i)
    }

    function $() {
        return setTimeout(function() {
            he = void 0
        }), he = it.now()
    }

    function M(t, e) {
        var n, o = {
                height: t
            },
            i = 0;
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Et[i], o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function V(t, e, n) {
        for (var o, i = (be[e] || []).concat(be["*"]), r = 0, s = i.length; s > r; r++)
            if (o = i[r].call(n, e, t)) return o
    }

    function j(t, e, n) {
        var o, i, r, s, a, c, l, u, d = this,
            p = {},
            h = t.style,
            f = t.nodeType && At(t),
            g = it._data(t, "fxshow");
        n.queue || (a = it._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function() {
            a.unqueued || c()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, it.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = it.css(t, "display"), u = "none" === l ? it._data(t, "olddisplay") || _(t.nodeName) : l, "inline" === u && "none" === it.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (o in e)
            if (i = e[o], ge.exec(i)) {
                if (delete e[o], r = r || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[o]) continue;
                    f = !0
                }
                p[o] = g && g[o] || it.style(t, o)
            } else l = void 0;
        if (it.isEmptyObject(p)) "inline" === ("none" === l ? _(t.nodeName) : l) && (h.display = l);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = it._data(t, "fxshow", {}), r && (g.hidden = !f), f ? it(t).show() : d.done(function() {
                it(t).hide()
            }), d.done(function() {
                var e;
                it._removeData(t, "fxshow");
                for (e in p) it.style(t, e, p[e])
            });
            for (o in p) s = V(f ? g[o] : 0, o, d), o in g || (g[o] = s.start, f && (s.end = s.start, s.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function B(t, e) {
        var n, o, i, r, s;
        for (n in t)
            if (o = it.camelCase(n), i = e[o], r = t[n], it.isArray(r) && (i = r[1], r = t[n] = r[0]), n !== o && (t[o] = r, delete t[n]), s = it.cssHooks[o], s && "expand" in s) {
                r = s.expand(r), delete t[o];
                for (n in r) n in t || (t[n] = r[n], e[n] = i)
            } else e[o] = i
    }

    function K(t, e, n) {
        var o, i, r = 0,
            s = ve.length,
            a = it.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (i) return !1;
                for (var e = he || $(), n = Math.max(0, l.startTime + l.duration - e), o = n / l.duration || 0, r = 1 - o, s = 0, c = l.tweens.length; c > s; s++) l.tweens[s].run(r);
                return a.notifyWith(t, [l, r, n]), 1 > r && c ? n : (a.resolveWith(t, [l]), !1)
            },
            l = a.promise({
                elem: t,
                props: it.extend({}, e),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: he || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var o = it.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(o), o
                },
                stop: function(e) {
                    var n = 0,
                        o = e ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; o > n; n++) l.tweens[n].run(1);
                    return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
                }
            }),
            u = l.props;
        for (B(u, l.opts.specialEasing); s > r; r++)
            if (o = ve[r].call(l, t, u, l.opts)) return o;
        return it.map(u, V, l), it.isFunction(l.opts.start) && l.opts.start.call(t, l), it.fx.timer(it.extend(c, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function L(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var o, i = 0,
                r = e.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; o = r[i++];) "+" === o.charAt(0) ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(n)) : (t[o] = t[o] || []).push(n)
        }
    }

    function R(t, e, n, o) {
        function i(a) {
            var c;
            return r[a] = !0, it.each(t[a] || [], function(t, a) {
                var l = a(e, n, o);
                return "string" != typeof l || s || r[l] ? s ? !(c = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }), c
        }
        var r = {},
            s = t === Ue;
        return i(e.dataTypes[0]) || !r["*"] && i("*")
    }

    function P(t, e) {
        var n, o, i = it.ajaxSettings.flatOptions || {};
        for (o in e) void 0 !== e[o] && ((i[o] ? t : n || (n = {}))[o] = e[o]);
        return n && it.extend(!0, t, n), t
    }

    function q(t, e, n) {
        for (var o, i, r, s, a = t.contents, c = t.dataTypes;
            "*" === c[0];) c.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    c.unshift(s);
                    break
                }
        if (c[0] in n) r = c[0];
        else {
            for (s in n) {
                if (!c[0] || t.converters[s + " " + c[0]]) {
                    r = s;
                    break
                }
                o || (o = s)
            }
            r = r || o
        }
        return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
    }

    function U(t, e, n, o) {
        var i, r, s, a, c, l = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !c && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = r, r = u.shift())
                if ("*" === r) r = c;
                else if ("*" !== c && c !== r) {
            if (s = l[c + " " + r] || l["* " + r], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === r && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + c + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, n, o) {
        var i;
        if (it.isArray(e)) it.each(e, function(e, i) {
            n || ze.test(t) ? o(t, i) : H(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, o)
        });
        else if (n || "object" !== it.type(e)) o(t, e);
        else
            for (i in e) H(t + "[" + i + "]", e[i], n, o)
    }

    function W() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function F() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function z(t) {
        return it.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var X = [],
        J = X.slice,
        Y = X.concat,
        Q = X.push,
        G = X.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        nt = {},
        ot = "1.11.3",
        it = function(t, e) {
            return new it.fn.init(t, e)
        },
        rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        st = /^-ms-/,
        at = /-([\da-z])/gi,
        ct = function(t, e) {
            return e.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: ot,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = it.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return it.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(it.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: X.sort,
        splice: X.splice
    }, it.extend = it.fn.extend = function() {
        var t, e, n, o, i, r, s = arguments[0] || {},
            a = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || it.isFunction(s) || (s = {}), a === c && (s = this, a--); c > a; a++)
            if (null != (i = arguments[a]))
                for (o in i) t = s[o], n = i[o], s !== n && (l && n && (it.isPlainObject(n) || (e = it.isArray(n))) ? (e ? (e = !1, r = t && it.isArray(t) ? t : []) : r = t && it.isPlainObject(t) ? t : {}, s[o] = it.extend(l, r, n)) : void 0 !== n && (s[o] = n));
        return s
    }, it.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === it.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === it.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !it.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== it.type(t) || t.nodeType || it.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && it.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(st, "ms-").replace(at, ct)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, o) {
            var i, r = 0,
                s = t.length,
                a = n(t);
            if (o) {
                if (a)
                    for (; s > r && (i = e.apply(t[r], o), i !== !1); r++);
                else
                    for (r in t)
                        if (i = e.apply(t[r], o), i === !1) break
            } else if (a)
                for (; s > r && (i = e.call(t[r], r, t[r]), i !== !1); r++);
            else
                for (r in t)
                    if (i = e.call(t[r], r, t[r]), i === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(rt, "")
        },
        makeArray: function(t, e) {
            var o = e || [];
            return null != t && (n(Object(t)) ? it.merge(o, "string" == typeof t ? [t] : t) : Q.call(o, t)), o
        },
        inArray: function(t, e, n) {
            var o;
            if (e) {
                if (G) return G.call(e, t, n);
                for (o = e.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, o = 0, i = t.length; n > o;) t[i++] = e[o++];
            if (n !== n)
                for (; void 0 !== e[o];) t[i++] = e[o++];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var o, i = [], r = 0, s = t.length, a = !n; s > r; r++) o = !e(t[r], r), o !== a && i.push(t[r]);
            return i
        },
        map: function(t, e, o) {
            var i, r = 0,
                s = t.length,
                a = n(t),
                c = [];
            if (a)
                for (; s > r; r++) i = e(t[r], r, o), null != i && c.push(i);
            else
                for (r in t) i = e(t[r], r, o), null != i && c.push(i);
            return Y.apply([], c)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, o, i;
            return "string" == typeof e && (i = t[e], e = t, t = i), it.isFunction(t) ? (n = J.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(J.call(arguments)))
            }, o.guid = t.guid = t.guid || it.guid++, o) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var lt = function(t) {
        function e(t, e, n, o) {
            var i, r, s, a, c, l, d, h, f, g;
            if ((e ? e.ownerDocument || e : R) !== O && I(e), e = e || O, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!o && M) {
                if (11 !== a && (i = vt.exec(t)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && K(e, r) && r.id === s) return n.push(r), n
                    } else {
                        if (i[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = i[3]) && x.getElementsByClassName) return G.apply(n, e.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!V || !V.test(t))) {
                    if (h = d = L, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = _(t), (d = e.getAttribute("id")) ? h = d.replace(wt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", c = l.length; c--;) l[c] = h + p(l[c]);
                        f = bt.test(t) && u(e.parentNode) || e, g = l.join(",")
                    }
                    if (g) try {
                        return G.apply(n, f.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ct, "$1"), e, n, o)
        }

        function n() {
            function t(n, o) {
                return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
            var e = [];
            return t
        }

        function o(t) {
            return t[L] = !0, t
        }

        function i(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), o = t.length; o--;) k.attrHandle[n[o]] = e
        }

        function s(t, e) {
            var n = e && t,
                o = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || z) - (~t.sourceIndex || z);
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function c(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return o(function(e) {
                return e = +e, o(function(n, o) {
                    for (var i, r = t([], n.length, e), s = r.length; s--;) n[i = r[s]] && (n[i] = !(o[i] = n[i]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function p(t) {
            for (var e = 0, n = t.length, o = ""; n > e; e++) o += t[e].value;
            return o
        }

        function h(t, e, n) {
            var o = e.dir,
                i = n && "parentNode" === o,
                r = q++;
            return e.first ? function(e, n, r) {
                for (; e = e[o];)
                    if (1 === e.nodeType || i) return t(e, n, r)
            } : function(e, n, s) {
                var a, c, l = [P, r];
                if (s) {
                    for (; e = e[o];)
                        if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                } else
                    for (; e = e[o];)
                        if (1 === e.nodeType || i) {
                            if (c = e[L] || (e[L] = {}), (a = c[o]) && a[0] === P && a[1] === r) return l[2] = a[2];
                            if (c[o] = l, l[2] = t(e, n, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, n, o) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, o)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, o) {
            for (var i = 0, r = n.length; r > i; i++) e(t, n[i], o);
            return o
        }

        function m(t, e, n, o, i) {
            for (var r, s = [], a = 0, c = t.length, l = null != e; c > a; a++)(r = t[a]) && (!n || n(r, o, i)) && (s.push(r), l && e.push(a));
            return s
        }

        function y(t, e, n, i, r, s) {
            return i && !i[L] && (i = y(i)), r && !r[L] && (r = y(r, s)), o(function(o, s, a, c) {
                var l, u, d, p = [],
                    h = [],
                    f = s.length,
                    y = o || g(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !o && e ? y : m(y, p, t, a, c),
                    b = n ? r || (o ? t : f || i) ? [] : s : v;
                if (n && n(v, b, a, c), i)
                    for (l = m(b, h), i(l, [], a, c), u = l.length; u--;)(d = l[u]) && (b[h[u]] = !(v[h[u]] = d));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (l = [], u = b.length; u--;)(d = b[u]) && l.push(v[u] = d);
                            r(null, b = [], l, c)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (l = r ? tt(o, d) : p[u]) > -1 && (o[l] = !(s[l] = d))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, c) : G.apply(s, b)
            })
        }

        function v(t) {
            for (var e, n, o, i = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, c = h(function(t) {
                    return t === e
                }, s, !0), l = h(function(t) {
                    return tt(e, t) > -1
                }, s, !0), u = [function(t, n, o) {
                    var i = !r && (o || n !== A) || ((e = n).nodeType ? c(t, n, o) : l(t, n, o));
                    return e = null, i
                }]; i > a; a++)
                if (n = k.relative[t[a].type]) u = [h(f(u), n)];
                else {
                    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[L]) {
                        for (o = ++a; i > o && !k.relative[t[o].type]; o++);
                        return y(a > 1 && f(u), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ct, "$1"), n, o > a && v(t.slice(a, o)), i > o && v(t = t.slice(o)), i > o && p(t))
                    }
                    u.push(n)
                }
            return f(u)
        }

        function b(t, n) {
            var i = n.length > 0,
                r = t.length > 0,
                s = function(o, s, a, c, l) {
                    var u, d, p, h = 0,
                        f = "0",
                        g = o && [],
                        y = [],
                        v = A,
                        b = o || r && k.find.TAG("*", l),
                        w = P += null == v ? 1 : Math.random() || .1,
                        x = b.length;
                    for (l && (A = s !== O && s); f !== x && null != (u = b[f]); f++) {
                        if (r && u) {
                            for (d = 0; p = t[d++];)
                                if (p(u, s, a)) {
                                    c.push(u);
                                    break
                                }
                            l && (P = w)
                        }
                        i && ((u = !p && u) && h--, o && g.push(u))
                    }
                    if (h += f, i && f !== h) {
                        for (d = 0; p = n[d++];) p(g, y, s, a);
                        if (o) {
                            if (h > 0)
                                for (; f--;) g[f] || y[f] || (y[f] = Y.call(c));
                            y = m(y)
                        }
                        G.apply(c, y), l && !o && y.length > 0 && h + n.length > 1 && e.uniqueSort(c)
                    }
                    return l && (P = w, A = v), g
                };
            return i ? o(s) : s
        }
        var w, x, k, C, T, _, S, E, A, N, D, I, O, $, M, V, j, B, K, L = "sizzle" + 1 * new Date,
            R = t.document,
            P = 0,
            q = 0,
            U = n(),
            H = n(),
            W = n(),
            F = function(t, e) {
                return t === e && (D = !0), 0
            },
            z = 1 << 31,
            X = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            Q = J.push,
            G = J.push,
            Z = J.slice,
            tt = function(t, e) {
                for (var n = 0, o = t.length; o > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = ot.replace("w", "w#"),
            rt = "\\[" + nt + "*(" + ot + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            ct = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(st),
            ht = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            kt = function(t, e, n) {
                var o = "0x" + e - 65536;
                return o !== o || n ? e : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            Ct = function() {
                I()
            };
        try {
            G.apply(J = Z.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
        } catch (Tt) {
            G = {
                apply: J.length ? function(t, e) {
                    Q.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, o = 0; t[n++] = e[o++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, I = e.setDocument = function(t) {
            var e, n, o = t ? t.ownerDocument || t : R;
            return o !== O && 9 === o.nodeType && o.documentElement ? (O = o, $ = o.documentElement, n = o.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), M = !T(o), x.attributes = i(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = i(function(t) {
                return t.appendChild(o.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = yt.test(o.getElementsByClassName), x.getById = i(function(t) {
                return $.appendChild(t).id = L, !o.getElementsByName || !o.getElementsByName(L).length
            }), x.getById ? (k.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && M) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(t) {
                var e = t.replace(xt, kt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function(t) {
                var e = t.replace(xt, kt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), k.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, o = [],
                    i = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }, k.find.CLASS = x.getElementsByClassName && function(t, e) {
                return M ? e.getElementsByClassName(t) : void 0
            }, j = [], V = [], (x.qsa = yt.test(o.querySelectorAll)) && (i(function(t) {
                $.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && V.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || V.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + L + "-]").length || V.push("~="), t.querySelectorAll(":checked").length || V.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || V.push(".#.+[+~]")
            }), i(function(t) {
                var e = o.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && V.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || V.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), V.push(",.*:")
            })), (x.matchesSelector = yt.test(B = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function(t) {
                x.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), j.push("!=", st)
            }), V = V.length && new RegExp(V.join("|")), j = j.length && new RegExp(j.join("|")), e = yt.test($.compareDocumentPosition), K = e || yt.test($.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    o = e && e.parentNode;
                return t === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, F = e ? function(t, e) {
                if (t === e) return D = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === o || t.ownerDocument === R && K(R, t) ? -1 : e === o || e.ownerDocument === R && K(R, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return D = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    c = [t],
                    l = [e];
                if (!r || !a) return t === o ? -1 : e === o ? 1 : r ? -1 : a ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (r === a) return s(t, e);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; c[i] === l[i];) i++;
                return i ? s(c[i], l[i]) : c[i] === R ? -1 : l[i] === R ? 1 : 0
            }, o) : O
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== O && I(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !M || j && j.test(n) || V && V.test(n))) try {
                var o = B.call(t, n);
                if (o || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o
            } catch (i) {}
            return e(n, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && I(t), K(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && I(t);
            var n = k.attrHandle[e.toLowerCase()],
                o = n && X.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== o ? o : x.attributes || !M ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                o = 0,
                i = 0;
            if (D = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(F), D) {
                for (; e = t[i++];) e === t[i] && (o = n.push(i));
                for (; o--;) t.splice(n[o], 1)
            }
            return N = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                o = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[o++];) n += C(e);
            return n
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, kt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = _(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, kt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, o) {
                    return function(i) {
                        var r = e.attr(i, t);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(o) > -1 : "|=" === n ? r === o || r.slice(0, o.length + 1) === o + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, o, i) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === o && 0 === i ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, c) {
                        var l, u, d, p, h, f, g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !c && !a;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && v) {
                                for (u = m[L] || (m[L] = {}), l = u[t] || [], h = l[0] === P && l[1], p = l[0] === P && l[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (p = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++p && d === e) {
                                        u[t] = [P, h, p];
                                        break
                                    }
                            } else if (v && (l = (e[L] || (e[L] = {}))[t]) && l[0] === P) p = l[1];
                            else
                                for (;
                                    (d = ++h && d && d[g] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++p || (v && ((d[L] || (d[L] = {}))[t] = [P, p]), d !== e)););
                            return p -= i, p === o || p % o === 0 && p / o >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[L] ? r(n) : r.length > 1 ? (i = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, e) {
                        for (var o, i = r(t, n), s = i.length; s--;) o = tt(t, i[s]), t[o] = !(e[o] = i[s])
                    }) : function(t) {
                        return r(t, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: o(function(t) {
                    var e = [],
                        n = [],
                        i = S(t.replace(ct, "$1"));
                    return i[L] ? o(function(t, e, n, o) {
                        for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, o, r) {
                        return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                    }
                }),
                has: o(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: o(function(t) {
                    return t = t.replace(xt, kt),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: o(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, kt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === $
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !k.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var o = 0 > n ? n + e : n; --o >= 0;) t.push(o);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var o = 0 > n ? n + e : n; ++o < e;) t.push(o);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = c(w);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, _ = e.tokenize = function(t, n) {
            var o, i, r, s, a, c, l, u = H[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, c = [], l = k.preFilter; a;) {
                (!o || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), c.push(r = [])), o = !1, (i = ut.exec(a)) && (o = i.shift(), r.push({
                    value: o,
                    type: i[0].replace(ct, " ")
                }), a = a.slice(o.length));
                for (s in k.filter) !(i = ft[s].exec(a)) || l[s] && !(i = l[s](i)) || (o = i.shift(), r.push({
                    value: o,
                    type: s,
                    matches: i
                }), a = a.slice(o.length));
                if (!o) break
            }
            return n ? a.length : a ? e.error(t) : H(t, c).slice(0)
        }, S = e.compile = function(t, e) {
            var n, o = [],
                i = [],
                r = W[t + " "];
            if (!r) {
                for (e || (e = _(t)), n = e.length; n--;) r = v(e[n]), r[L] ? o.push(r) : i.push(r);
                r = W(t, b(i, o)), r.selector = t
            }
            return r
        }, E = e.select = function(t, e, n, o) {
            var i, r, s, a, c, l = "function" == typeof t && t,
                d = !o && _(t = l.selector || t);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && M && k.relative[r[1].type]) {
                    if (e = (k.find.ID(s.matches[0].replace(xt, kt), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : r.length; i-- && (s = r[i], !k.relative[a = s.type]);)
                    if ((c = k.find[a]) && (o = c(s.matches[0].replace(xt, kt), bt.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(i, 1), t = o.length && p(r), !t) return G.apply(n, o), n;
                        break
                    }
            }
            return (l || S(t, d))(o, e, !M, n, bt.test(t) && u(e.parentNode) || e), n
        }, x.sortStable = L.split("").sort(F).join("") === L, x.detectDuplicates = !!D, I(), x.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), i(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), i(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, n) {
            var o;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }), e
    }(t);
    it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
    var ut = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    it.filter = function(t, e, n) {
        var o = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? it.find.matchesSelector(o, t) ? [o] : [] : it.find.matches(t, it.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, it.fn.extend({
        find: function(t) {
            var e, n = [],
                o = this,
                i = o.length;
            if ("string" != typeof t) return this.pushStack(it(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (it.contains(o[e], this)) return !0
            }));
            for (e = 0; i > e; e++) it.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(o(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(o(this, t || [], !0))
        },
        is: function(t) {
            return !!o(this, "string" == typeof t && ut.test(t) ? it(t) : t || [], !1).length
        }
    });
    var ht, ft = t.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = it.fn.init = function(t, e) {
            var n, o;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof it ? e[0] : e, it.merge(this, it.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(n[1]) && it.isPlainObject(e))
                        for (n in e) it.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (o = ft.getElementById(n[2]), o && o.parentNode) {
                    if (o.id !== n[2]) return ht.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : it.isFunction(t) ? "undefined" != typeof ht.ready ? ht.ready(t) : t(it) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), it.makeArray(t, this))
        };
    mt.prototype = it.fn, ht = it(ft);
    var yt = /^(?:parents|prev(?:Until|All))/,
        vt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function(t, e, n) {
            for (var o = [], i = t[e]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && o.push(i), i = i[e];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), it.fn.extend({
        has: function(t) {
            var e, n = it(t, this),
                o = n.length;
            return this.filter(function() {
                for (e = 0; o > e; e++)
                    if (it.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, o = 0, i = this.length, r = [], s = ut.test(t) || "string" != typeof t ? it(t, e || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? it.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? it.inArray(this[0], it(t)) : it.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(it.unique(it.merge(this.get(), it(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), it.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return it.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return it.dir(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return it.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return it.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return it.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return it.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return it.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return it.sibling(t.firstChild)
        },
        contents: function(t) {
            return it.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : it.merge([], t.childNodes)
        }
    }, function(t, e) {
        it.fn[t] = function(n, o) {
            var i = it.map(this, e, n);
            return "Until" !== t.slice(-5) && (o = n), o && "string" == typeof o && (i = it.filter(o, i)), this.length > 1 && (vt[t] || (i = it.unique(i)), yt.test(t) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g,
        wt = {};
    it.Callbacks = function(t) {
        t = "string" == typeof t ? wt[t] || r(t) : it.extend({}, t);
        var e, n, o, i, s, a, c = [],
            l = !t.once && [],
            u = function(r) {
                for (n = t.memory && r, o = !0, s = a || 0, a = 0, i = c.length, e = !0; c && i > s; s++)
                    if (c[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, c && (l ? l.length && u(l.shift()) : n ? c = [] : d.disable())
            },
            d = {
                add: function() {
                    if (c) {
                        var o = c.length;
                        ! function r(e) {
                            it.each(e, function(e, n) {
                                var o = it.type(n);
                                "function" === o ? t.unique && d.has(n) || c.push(n) : n && n.length && "string" !== o && r(n)
                            })
                        }(arguments), e ? i = c.length : n && (a = o, u(n))
                    }
                    return this
                },
                remove: function() {
                    return c && it.each(arguments, function(t, n) {
                        for (var o;
                            (o = it.inArray(n, c, o)) > -1;) c.splice(o, 1), e && (i >= o && i--, s >= o && s--)
                    }), this
                },
                has: function(t) {
                    return t ? it.inArray(t, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], i = 0, this
                },
                disable: function() {
                    return c = l = n = void 0, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return l = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, n) {
                    return !c || o && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : u(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, it.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", it.Callbacks("memory")]
                ],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return it.Deferred(function(n) {
                            it.each(e, function(e, r) {
                                var s = it.isFunction(t[e]) && t[e];
                                i[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && it.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === o ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? it.extend(t, o) : o
                    }
                },
                i = {};
            return o.pipe = o.then, it.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                o[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), i[r[0]] = function() {
                    return i[r[0] + "With"](this === i ? o : this, arguments), this
                }, i[r[0] + "With"] = s.fireWith
            }), o.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, o, i = 0,
                r = J.call(arguments),
                s = r.length,
                a = 1 !== s || t && it.isFunction(t.promise) ? s : 0,
                c = 1 === a ? t : it.Deferred(),
                l = function(t, n, o) {
                    return function(i) {
                        n[t] = this, o[t] = arguments.length > 1 ? J.call(arguments) : i, o === e ? c.notifyWith(n, o) : --a || c.resolveWith(n, o)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), o = new Array(s); s > i; i++) r[i] && it.isFunction(r[i].promise) ? r[i].promise().done(l(i, o, r)).fail(c.reject).progress(l(i, n, e)) : --a;
            return a || c.resolveWith(o, r), c.promise()
        }
    });
    var xt;
    it.fn.ready = function(t) {
        return it.ready.promise().done(t), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? it.readyWait++ : it.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--it.readyWait : !it.isReady) {
                if (!ft.body) return setTimeout(it.ready);
                it.isReady = !0, t !== !0 && --it.readyWait > 0 || (xt.resolveWith(ft, [it]), it.fn.triggerHandler && (it(ft).triggerHandler("ready"), it(ft).off("ready")))
            }
        }
    }), it.ready.promise = function(e) {
        if (!xt)
            if (xt = it.Deferred(), "complete" === ft.readyState) setTimeout(it.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && ft.documentElement
            } catch (o) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(i, 50)
                    }
                    s(), it.ready()
                }
            }()
        }
        return xt.promise(e)
    };
    var kt, Ct = "undefined";
    for (kt in it(nt)) break;
    nt.ownLast = "0" !== kt, nt.inlineBlockNeedsLayout = !1, it(function() {
            var t, e, n, o;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), o = ft.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(o))
        }),
        function() {
            var t = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), it.acceptData = function(t) {
            var e = it.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _t = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? it.cache[t[it.expando]] : t[it.expando], !!t && !l(t)
        },
        data: function(t, e, n) {
            return u(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return u(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), it.fn.extend({
        data: function(t, e) {
            var n, o, i, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (i = it.data(r), 1 === r.nodeType && !it._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (o = s[n].name, 0 === o.indexOf("data-") && (o = it.camelCase(o.slice(5)), c(r, o, i[o])));
                    it._data(r, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                it.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                it.data(this, t, e)
            }) : r ? c(r, t, it.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                it.removeData(this, t)
            })
        }
    }), it.extend({
        queue: function(t, e, n) {
            var o;
            return t ? (e = (e || "fx") + "queue", o = it._data(t, e), n && (!o || it.isArray(n) ? o = it._data(t, e, it.makeArray(n)) : o.push(n)), o || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = it.queue(t, e),
                o = n.length,
                i = n.shift(),
                r = it._queueHooks(t, e),
                s = function() {
                    it.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === e && n.unshift("inprogress"), delete r.stop, i.call(t, s, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return it._data(t, n) || it._data(t, n, {
                empty: it.Callbacks("once memory").add(function() {
                    it._removeData(t, e + "queue"), it._removeData(t, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? it.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = it.queue(this, t, e);
                it._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && it.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                it.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, o = 1,
                i = it.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = it._data(r[s], t + "queueHooks"), n && n.empty && (o++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Et = ["Top", "Right", "Bottom", "Left"],
        At = function(t, e) {
            return t = e || t, "none" === it.css(t, "display") || !it.contains(t.ownerDocument, t)
        },
        Nt = it.access = function(t, e, n, o, i, r, s) {
            var a = 0,
                c = t.length,
                l = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (a in n) it.access(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== o && (i = !0, it.isFunction(o) || (s = !0), l && (s ? (e.call(t, o), e = null) : (l = e, e = function(t, e, n) {
                    return l.call(it(t), n)
                })), e))
                for (; c > a; a++) e(t[a], n, s ? o : o.call(t[a], a, e(t[a], n)));
            return i ? t : l ? e.call(t) : c ? e(t[0], n) : r
        },
        Dt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ft.createElement("input"),
            e = ft.createElement("div"),
            n = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (o) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, o = ft.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (o.setAttribute(n, "t"), nt[e + "Bubbles"] = o.attributes[n].expando === !1);
        o = null
    }();
    var It = /^(?:input|select|textarea)$/i,
        Ot = /^key/,
        $t = /^(?:mouse|pointer|contextmenu)|click/,
        Mt = /^(?:focusinfocus|focusoutblur)$/,
        Vt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(t, e, n, o, i) {
            var r, s, a, c, l, u, d, p, h, f, g, m = it._data(t);
            if (m) {
                for (n.handler && (c = n, n = c.handler, i = c.selector), n.guid || (n.guid = it.guid++), (s = m.events) || (s = m.events = {}), (u = m.handle) || (u = m.handle = function(t) {
                        return typeof it === Ct || t && it.event.triggered === t.type ? void 0 : it.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) r = Vt.exec(e[a]) || [], h = g = r[1], f = (r[2] || "").split(".").sort(), h && (l = it.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = it.event.special[h] || {}, d = it.extend({
                    type: h,
                    origType: g,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: f.join(".")
                }, c), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, l.setup && l.setup.call(t, o, f, u) !== !1 || (t.addEventListener ? t.addEventListener(h, u, !1) : t.attachEvent && t.attachEvent("on" + h, u))), l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), it.event.global[h] = !0);
                t = null
            }
        },
        remove: function(t, e, n, o, i) {
            var r, s, a, c, l, u, d, p, h, f, g, m = it.hasData(t) && it._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(bt) || [""], l = e.length; l--;)
                    if (a = Vt.exec(e[l]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = it.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = p.length; r--;) s = p[r], !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || o && o !== s.selector && ("**" !== o || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                        c && !p.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || it.removeEvent(t, h, m.handle), delete u[h])
                    } else
                        for (h in u) it.event.remove(t, h + e[l], n, o, !0);
                it.isEmptyObject(u) && (delete m.handle, it._removeData(t, "events"))
            }
        },
        trigger: function(e, n, o, i) {
            var r, s, a, c, l, u, d, p = [o || ft],
                h = et.call(e, "type") ? e.type : e,
                f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = o = o || ft, 3 !== o.nodeType && 8 !== o.nodeType && !Mt.test(h + it.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[it.expando] ? e : new it.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : it.makeArray(n, [e]), l = it.event.special[h] || {}, i || !l.trigger || l.trigger.apply(o, n) !== !1)) {
                if (!i && !l.noBubble && !it.isWindow(o)) {
                    for (c = l.delegateType || h, Mt.test(c + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), u = a;
                    u === (o.ownerDocument || ft) && p.push(u.defaultView || u.parentWindow || t)
                }
                for (d = 0;
                    (a = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? c : l.bindType || h, r = (it._data(a, "events") || {})[e.type] && it._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && it.acceptData(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = h, !i && !e.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), n) === !1) && it.acceptData(o) && s && o[h] && !it.isWindow(o)) {
                    u = o[s], u && (o[s] = null), it.event.triggered = h;
                    try {
                        o[h]()
                    } catch (g) {}
                    it.event.triggered = void 0, u && (o[s] = u)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = it.event.fix(t);
            var e, n, o, i, r, s = [],
                a = J.call(arguments),
                c = (it._data(this, "events") || {})[t.type] || [],
                l = it.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = it.event.handlers.call(this, t, c), e = 0;
                    (i = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, r = 0;
                        (o = i.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((it.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, o, i, r, s = [],
                a = e.delegateCount,
                c = t.target;
            if (a && c.nodeType && (!t.button || "click" !== t.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], r = 0; a > r; r++) o = e[r], n = o.selector + " ", void 0 === i[n] && (i[n] = o.needsContext ? it(n, this).index(c) >= 0 : it.find(n, this, null, [c]).length), i[n] && i.push(o);
                        i.length && s.push({
                            elem: c,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[it.expando]) return t;
            var e, n, o, i = t.type,
                r = t,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = $t.test(i) ? this.mouseHooks : Ot.test(i) ? this.keyHooks : {}), o = s.props ? this.props.concat(s.props) : this.props, t = new it.Event(r), e = o.length; e--;) n = o[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, o, i, r = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (o = t.target.ownerDocument || ft, i = o.documentElement, n = o.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return it.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, o) {
            var i = it.extend(new it.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            o ? it.event.trigger(i, null, e) : it.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ft.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var o = "on" + e;
        t.detachEvent && (typeof t[o] === Ct && (t[o] = null), t.detachEvent(o, n))
    }, it.Event = function(t, e) {
        return this instanceof it.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : h) : this.type = t, e && it.extend(this, e), this.timeStamp = t && t.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(t, e)
    }, it.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        it.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, o = this,
                    i = t.relatedTarget,
                    r = t.handleObj;
                return (!i || i !== o && !it.contains(o, i)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = it.nodeName(e, "input") || it.nodeName(e, "button") ? e.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && it.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function() {
            return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, t, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                It.test(e.nodeName) && !it._data(e, "changeBubbles") && (it.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || it.event.simulate("change", this.parentNode, t, !0)
                }), it._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return it.event.remove(this, "._change"), !It.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            it.event.simulate(e, t.target, it.event.fix(t), !0)
        };
        it.event.special[e] = {
            setup: function() {
                var o = this.ownerDocument || this,
                    i = it._data(o, e);
                i || o.addEventListener(t, n, !0), it._data(o, e, (i || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this,
                    i = it._data(o, e) - 1;
                i ? it._data(o, e, i) : (o.removeEventListener(t, n, !0), it._removeData(o, e))
            }
        }
    }), it.fn.extend({
        on: function(t, e, n, o, i) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (r in t) this.on(r, e, n, t[r], i);
                return this
            }
            if (null == n && null == o ? (o = e, n = e = void 0) : null == o && ("string" == typeof e ? (o = n, n = void 0) : (o = n, n = e, e = void 0)), o === !1) o = h;
            else if (!o) return this;
            return 1 === i && (s = o, o = function(t) {
                return it().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = it.guid++)), this.each(function() {
                it.event.add(this, t, o, n, e)
            })
        },
        one: function(t, e, n, o) {
            return this.on(t, e, n, o, 1)
        },
        off: function(t, e, n) {
            var o, i;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, it(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                it.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                it.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? it.event.trigger(t, e, n, !0) : void 0
        }
    });
    var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Bt = / jQuery\d+="(?:null|\d+)"/g,
        Kt = new RegExp("<(?:" + jt + ")[\\s/>]", "i"),
        Lt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        qt = /<tbody/i,
        Ut = /<|&#?\w+;/,
        Ht = /<(?:script|style|link)/i,
        Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ft = /^$|\/(?:java|ecma)script/i,
        zt = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Yt = g(ft),
        Qt = Yt.appendChild(ft.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, it.extend({
        clone: function(t, e, n) {
            var o, i, r, s, a, c = it.contains(t.ownerDocument, t);
            if (nt.html5Clone || it.isXMLDoc(t) || !Kt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Qt.innerHTML = t.outerHTML, Qt.removeChild(r = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || it.isXMLDoc(t)))
                for (o = m(r), a = m(t), s = 0; null != (i = a[s]); ++s) o[s] && C(i, o[s]);
            if (e)
                if (n)
                    for (a = a || m(t), o = o || m(r), s = 0; null != (i = a[s]); s++) k(i, o[s]);
                else k(t, r);
            return o = m(r, "script"), o.length > 0 && x(o, !c && m(t, "script")), o = a = i = null, r
        },
        buildFragment: function(t, e, n, o) {
            for (var i, r, s, a, c, l, u, d = t.length, p = g(e), h = [], f = 0; d > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === it.type(r)) it.merge(h, r.nodeType ? [r] : r);
                    else if (Ut.test(r)) {
                for (a = a || p.appendChild(e.createElement("div")), c = (Pt.exec(r) || ["", ""])[1].toLowerCase(), u = Jt[c] || Jt._default, a.innerHTML = u[1] + r.replace(Rt, "<$1></$2>") + u[2], i = u[0]; i--;) a = a.lastChild;
                if (!nt.leadingWhitespace && Lt.test(r) && h.push(e.createTextNode(Lt.exec(r)[0])), !nt.tbody)
                    for (r = "table" !== c || qt.test(r) ? "<table>" !== u[1] || qt.test(r) ? 0 : a : a.firstChild, i = r && r.childNodes.length; i--;) it.nodeName(l = r.childNodes[i], "tbody") && !l.childNodes.length && r.removeChild(l);
                for (it.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else h.push(e.createTextNode(r));
            for (a && p.removeChild(a), nt.appendChecked || it.grep(m(h, "input"), y), f = 0; r = h[f++];)
                if ((!o || -1 === it.inArray(r, o)) && (s = it.contains(r.ownerDocument, r), a = m(p.appendChild(r), "script"), s && x(a), n))
                    for (i = 0; r = a[i++];) Ft.test(r.type || "") && n.push(r);
            return a = null, p
        },
        cleanData: function(t, e) {
            for (var n, o, i, r, s = 0, a = it.expando, c = it.cache, l = nt.deleteExpando, u = it.event.special; null != (n = t[s]); s++)
                if ((e || it.acceptData(n)) && (i = n[a], r = i && c[i])) {
                    if (r.events)
                        for (o in r.events) u[o] ? it.event.remove(n, o) : it.removeEvent(n, o, r.handle);
                    c[i] && (delete c[i], l ? delete n[a] : typeof n.removeAttribute !== Ct ? n.removeAttribute(a) : n[a] = null, X.push(i))
                }
        }
    }), it.fn.extend({
        text: function(t) {
            return Nt(this, function(t) {
                return void 0 === t ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, o = t ? it.filter(t, this) : this, i = 0; null != (n = o[i]); i++) e || 1 !== n.nodeType || it.cleanData(m(n)), n.parentNode && (e && it.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && it.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && it.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return it.clone(this, t, e)
            })
        },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Bt, "") : void 0;
                if (!("string" != typeof t || Ht.test(t) || !nt.htmlSerialize && Kt.test(t) || !nt.leadingWhitespace && Lt.test(t) || Jt[(Pt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Rt, "<$1></$2>");
                    try {
                        for (; o > n; n++) e = this[n] || {}, 1 === e.nodeType && (it.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, it.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, o, i, r, s, a, c = 0,
                l = this.length,
                u = this,
                d = l - 1,
                p = t[0],
                h = it.isFunction(p);
            if (h || l > 1 && "string" == typeof p && !nt.checkClone && Wt.test(p)) return this.each(function(n) {
                var o = u.eq(n);
                h && (t[0] = p.call(this, n, o.html())), o.domManip(t, e)
            });
            if (l && (a = it.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = it.map(m(a, "script"), b), i = r.length; l > c; c++) o = a, c !== d && (o = it.clone(o, !0, !0), i && it.merge(r, m(o, "script"))), e.call(this[c], o, c);
                if (i)
                    for (s = r[r.length - 1].ownerDocument, it.map(r, w), c = 0; i > c; c++) o = r[c], Ft.test(o.type || "") && !it._data(o, "globalEval") && it.contains(s, o) && (o.src ? it._evalUrl && it._evalUrl(o.src) : it.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Xt, "")));
                a = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        it.fn[t] = function(t) {
            for (var n, o = 0, i = [], r = it(t), s = r.length - 1; s >= o; o++) n = o === s ? this : this.clone(!0), it(r[o])[e](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Gt, Zt = {};
    ! function() {
        var t;
        nt.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, o;
            return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), o = ft.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(o), t) : void 0
        }
    }();
    var te, ee, ne = /^margin/,
        oe = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        ie = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, ee = function(t, e, n) {
        var o, i, r, s, a = t.style;
        return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || it.contains(t.ownerDocument, t) || (s = it.style(t, e)), oe.test(s) && ne.test(e) && (o = a.width, i = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = o, a.minWidth = i, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : ft.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    }, ee = function(t, e, n) {
        var o, i, r, s, a = t.style;
        return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), oe.test(s) && !ie.test(e) && (o = a.left, i = t.runtimeStyle, r = i && i.left, r && (i.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = o, r && (i.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function() {
        function e() {
            var e, n, o, i;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), o = ft.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, c = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, i = e.appendChild(ft.createElement("div")), i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", c = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight), e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = e.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === i[0].offsetHeight, a && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), n.removeChild(o))
        }
        var n, o, i, r, s, a, c;
        n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (o = i && i.style) && (o.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === o.opacity, nt.cssFloat = !!o.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === o.boxSizing || "" === o.MozBoxSizing || "" === o.WebkitBoxSizing, it.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && e(), a
            },
            boxSizingReliable: function() {
                return null == s && e(), s
            },
            pixelPosition: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                return null == c && e(), c
            }
        }))
    }(), it.swap = function(t, e, n, o) {
        var i, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        i = n.apply(t, o || []);
        for (r in e) t.style[r] = s[r];
        return i
    };
    var re = /alpha\([^)]*\)/i,
        se = /opacity\s*=\s*([^)]*)/,
        ae = /^(none|table(?!-c[ea]).+)/,
        ce = new RegExp("^(" + St + ")(.*)$", "i"),
        le = new RegExp("^([+-])=(" + St + ")", "i"),
        ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        de = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pe = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, r, s, a = it.camelCase(e),
                    c = t.style;
                if (e = it.cssProps[a] || (it.cssProps[a] = E(c, a)), s = it.cssHooks[e] || it.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, o)) ? i : c[e];
                if (r = typeof n, "string" === r && (i = le.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || it.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, o))))) try {
                    c[e] = n
                } catch (l) {}
            }
        },
        css: function(t, e, n, o) {
            var i, r, s, a = it.camelCase(e);
            return e = it.cssProps[a] || (it.cssProps[a] = E(t.style, a)), s = it.cssHooks[e] || it.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = ee(t, e, o)), "normal" === r && e in de && (r = de[e]), "" === n || n ? (i = parseFloat(r), n === !0 || it.isNumeric(i) ? i || 0 : r) : r
        }
    }), it.each(["height", "width"], function(t, e) {
        it.cssHooks[e] = {
            get: function(t, n, o) {
                return n ? ae.test(it.css(t, "display")) && 0 === t.offsetWidth ? it.swap(t, ue, function() {
                    return I(t, e, o)
                }) : I(t, e, o) : void 0
            },
            set: function(t, n, o) {
                var i = o && te(t);
                return N(t, n, o ? D(t, e, o, nt.boxSizing && "border-box" === it.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function(t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                o = t.currentStyle,
                i = it.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = o && o.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === it.trim(r.replace(re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || o && !o.filter) || (n.filter = re.test(r) ? r.replace(re, i) : r + " " + i)
        }
    }), it.cssHooks.marginRight = S(nt.reliableMarginRight, function(t, e) {
        return e ? it.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"]) : void 0
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        it.cssHooks[t + e] = {
            expand: function(n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[t + Et[o] + e] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, ne.test(t) || (it.cssHooks[t + e].set = N)
    }), it.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, n) {
                var o, i, r = {},
                    s = 0;
                if (it.isArray(e)) {
                    for (o = te(t), i = e.length; i > s; s++) r[e[s]] = it.css(t, e[s], !1, o);
                    return r
                }
                return void 0 !== n ? it.style(t, e, n) : it.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                At(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = O, O.prototype = {
        constructor: O,
        init: function(t, e, n, o, i, r) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = r || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = it.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = it.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                it.fx.step[t.prop] ? it.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[it.cssProps[t.prop]] || it.cssHooks[t.prop]) ? it.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, it.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, it.fx = O.prototype.init, it.fx.step = {};
    var he, fe, ge = /^(?:toggle|show|hide)$/,
        me = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        ye = /queueHooks$/,
        ve = [j],
        be = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    o = n.cur(),
                    i = me.exec(e),
                    r = i && i[3] || (it.cssNumber[t] ? "" : "px"),
                    s = (it.cssNumber[t] || "px" !== r && +o) && me.exec(it.css(n.elem, t)),
                    a = 1,
                    c = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], i = i || [], s = +o || 1;
                    do a = a || ".5", s /= a, it.style(n.elem, t, s + r); while (a !== (a = n.cur() / o) && 1 !== a && --c)
                }
                return i && (s = n.start = +s || +o || 0, n.unit = r, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(K, {
            tweener: function(t, e) {
                it.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, o = 0, i = t.length; i > o; o++) n = t[o], be[n] = be[n] || [], be[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ve.unshift(t) : ve.push(t)
            }
        }), it.speed = function(t, e, n) {
            var o = t && "object" == typeof t ? it.extend({}, t) : {
                complete: n || !n && e || it.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !it.isFunction(e) && e
            };
            return o.duration = it.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in it.fx.speeds ? it.fx.speeds[o.duration] : it.fx.speeds._default, (null == o.queue || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                it.isFunction(o.old) && o.old.call(this), o.queue && it.dequeue(this, o.queue)
            }, o
        }, it.fn.extend({
            fadeTo: function(t, e, n, o) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, o)
            },
            animate: function(t, e, n, o) {
                var i = it.isEmptyObject(t),
                    r = it.speed(e, n, o),
                    s = function() {
                        var e = K(this, it.extend({}, t), r);
                        (i || it._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, i || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, n) {
                var o = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        r = it.timers,
                        s = it._data(this);
                    if (i) s[i] && s[i].stop && o(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && ye.test(i) && o(s[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
                    (e || !n) && it.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = it._data(this),
                        o = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        r = it.timers,
                        s = o ? o.length : 0;
                    for (n.finish = !0, it.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) o[e] && o[e].finish && o[e].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function(t, e) {
            var n = it.fn[e];
            it.fn[e] = function(t, o, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, o, i)
            }
        }), it.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            it.fn[t] = function(t, n, o) {
                return this.animate(e, t, n, o)
            }
        }), it.timers = [], it.fx.tick = function() {
            var t, e = it.timers,
                n = 0;
            for (he = it.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || it.fx.stop(), he = void 0
        }, it.fx.timer = function(t) {
            it.timers.push(t), t() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function() {
            fe || (fe = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function() {
            clearInterval(fe), fe = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function(t, e) {
            return t = it.fx ? it.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var o = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(o)
                }
            })
        },
        function() {
            var t, e, n, o, i;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = e.getElementsByTagName("a")[0], n = ft.createElement("select"), i = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], o.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(o.getAttribute("style")), nt.hrefNormalized = "/a" === o.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = i.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
    var we = /\r/g;
    it.fn.extend({
        val: function(t) {
            var e, n, o, i = this[0];
            return arguments.length ? (o = it.isFunction(t), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = o ? t.call(this, n, it(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(t) {
                    return null == t ? "" : t + ""
                })), e = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
            })) : i ? (e = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = it.find.attr(t, "value");
                    return null != e ? e : it.trim(it.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, o = t.options, i = t.selectedIndex, r = "select-one" === t.type || 0 > i, s = r ? null : [], a = r ? i + 1 : o.length, c = 0 > i ? a : r ? i : 0; a > c; c++)
                        if (n = o[c], !(!n.selected && c !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (e = it(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, o, i = t.options, r = it.makeArray(e), s = i.length; s--;)
                        if (o = i[s], it.inArray(it.valHooks.option.get(o), r) >= 0) try {
                            o.selected = n = !0
                        } catch (a) {
                            o.scrollHeight
                        } else o.selected = !1;
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(t, e) {
                return it.isArray(e) ? t.checked = it.inArray(it(t).val(), e) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe, ke, Ce = it.expr.attrHandle,
        Te = /^(?:checked|selected)$/i,
        _e = nt.getSetAttribute,
        Se = nt.input;
    it.fn.extend({
        attr: function(t, e) {
            return Nt(this, it.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                it.removeAttr(this, t)
            })
        }
    }), it.extend({
        attr: function(t, e, n) {
            var o, i, r = t.nodeType;
            return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === Ct ? it.prop(t, e, n) : (1 === r && it.isXMLDoc(t) || (e = e.toLowerCase(), o = it.attrHooks[e] || (it.expr.match.bool.test(e) ? ke : xe)), void 0 === n ? o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = it.find.attr(t, e), null == i ? void 0 : i) : null !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void it.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, o, i = 0,
                r = e && e.match(bt);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) o = it.propFix[n] || n, it.expr.match.bool.test(n) ? Se && _e || !Te.test(n) ? t[o] = !1 : t[it.camelCase("default-" + n)] = t[o] = !1 : it.attr(t, n, ""), t.removeAttribute(_e ? n : o)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && it.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), ke = {
        set: function(t, e, n) {
            return e === !1 ? it.removeAttr(t, n) : Se && _e || !Te.test(n) ? t.setAttribute(!_e && it.propFix[n] || n, n) : t[it.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Ce[e] || it.find.attr;
        Ce[e] = Se && _e || !Te.test(e) ? function(t, e, o) {
            var i, r;
            return o || (r = Ce[e], Ce[e] = i, i = null != n(t, e, o) ? e.toLowerCase() : null, Ce[e] = r), i
        } : function(t, e, n) {
            return n ? void 0 : t[it.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Se && _e || (it.attrHooks.value = {
        set: function(t, e, n) {
            return it.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
        }
    }), _e || (xe = {
        set: function(t, e, n) {
            var o = t.getAttributeNode(n);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(n)), o.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Ce.id = Ce.name = Ce.coords = function(t, e, n) {
        var o;
        return n ? void 0 : (o = t.getAttributeNode(e)) && "" !== o.value ? o.value : null
    }, it.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: xe.set
    }, it.attrHooks.contenteditable = {
        set: function(t, e, n) {
            xe.set(t, "" === e ? !1 : e, n)
        }
    }, it.each(["width", "height"], function(t, e) {
        it.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ee = /^(?:input|select|textarea|button|object)$/i,
        Ae = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(t, e) {
            return Nt(this, it.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = it.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var o, i, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !it.isXMLDoc(t), r && (e = it.propFix[e] || e, i = it.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : t[e] = n : i && "get" in i && null !== (o = i.get(t, e)) ? o : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = it.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function(t, e) {
        it.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var Ne = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(t) {
            var e, n, o, i, r, s, a = 0,
                c = this.length,
                l = "string" == typeof t && t;
            if (it.isFunction(t)) return this.each(function(e) {
                it(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(bt) || []; c > a; a++)
                    if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                        for (r = 0; i = e[r++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        s = it.trim(o), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, o, i, r, s, a = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (it.isFunction(t)) return this.each(function(e) {
                it(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(bt) || []; c > a; a++)
                    if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                        for (r = 0; i = e[r++];)
                            for (; o.indexOf(" " + i + " ") >= 0;) o = o.replace(" " + i + " ", " ");
                        s = t ? it.trim(o) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(it.isFunction(t) ? function(n) {
                it(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, o = 0, i = it(this), r = t.match(bt) || []; e = r[o++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, o = this.length; o > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        it.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), it.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, o) {
            return this.on(e, t, n, o)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var De = it.now(),
        Ie = /\?/,
        Oe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, o = null,
            i = it.trim(e + "");
        return i && !it.trim(i.replace(Oe, function(t, e, i, r) {
            return n && e && (o = 0), 0 === o ? t : (n = i || e, o += !r - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + e)
    }, it.parseXML = function(e) {
        var n, o;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (o = new DOMParser, n = o.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + e), n
    };
    var $e, Me, Ve = /#.*$/,
        je = /([?&])_=[^&]*/,
        Be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ke = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Le = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qe = {},
        Ue = {},
        He = "*/".concat("*");
    try {
        Me = location.href
    } catch (We) {
        Me = ft.createElement("a"), Me.href = "", Me = Me.href
    }
    $e = Pe.exec(Me.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Me,
            type: "GET",
            isLocal: Ke.test($e[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? P(P(t, it.ajaxSettings), e) : P(it.ajaxSettings, t)
        },
        ajaxPrefilter: L(qe),
        ajaxTransport: L(Ue),
        ajax: function(t, e) {
            function n(t, e, n, o) {
                var i, u, y, v, w, k = e;
                2 !== b && (b = 2, a && clearTimeout(a), l = void 0, s = o || "", x.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, n && (v = q(d, x, n)), v = U(d, v, x, i), i ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (it.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (it.etag[r] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = v.state, u = v.data, y = v.error, i = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || k) + "", i ? f.resolveWith(p, [u, k, x]) : f.rejectWith(p, [x, k, y]), x.statusCode(m), m = void 0, c && h.trigger(i ? "ajaxSuccess" : "ajaxError", [x, d, i ? u : y]), g.fireWith(p, [x, k]), c && (h.trigger("ajaxComplete", [x, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var o, i, r, s, a, c, l, u, d = it.ajaxSetup({}, e),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? it(p) : it.event,
                f = it.Deferred(),
                g = it.Callbacks("once memory"),
                m = d.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!u)
                                for (u = {}; e = Be.exec(s);) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = v[n] = v[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return l && l.abort(e), n(0, e), this
                    }
                };
            if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Me) + "").replace(Ve, "").replace(Re, $e[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (o = Pe.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === $e[1] && o[2] === $e[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === ($e[3] || ("http:" === $e[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), R(qe, d, e, x), 2 === b) return x;
            c = it.event && d.global, c && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Le.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Ie.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = je.test(r) ? r.replace(je, "$1_=" + De++) : r + (Ie.test(r) ? "&" : "?") + "_=" + De++)), d.ifModified && (it.lastModified[r] && x.setRequestHeader("If-Modified-Since", it.lastModified[r]), it.etag[r] && x.setRequestHeader("If-None-Match", it.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + He + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) x.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](d[i]);
            if (l = R(Ue, d, e, x)) {
                x.readyState = 1, c && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(y, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return it.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return it.get(t, void 0, e, "script")
        }
    }), it.each(["get", "post"], function(t, e) {
        it[e] = function(t, n, o, i) {
            return it.isFunction(n) && (i = i || o, o = n, n = void 0), it.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: o
            })
        }
    }), it._evalUrl = function(t) {
        return it.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function(t) {
            if (it.isFunction(t)) return this.each(function(e) {
                it(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = it(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(it.isFunction(t) ? function(e) {
                it(this).wrapInner(t.call(this, e))
            } : function() {
                var e = it(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = it.isFunction(t);
            return this.each(function(n) {
                it(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || it.css(t, "display"))
    }, it.expr.filters.visible = function(t) {
        return !it.expr.filters.hidden(t)
    };
    var Fe = /%20/g,
        ze = /\[\]$/,
        Xe = /\r?\n/g,
        Je = /^(?:submit|button|image|reset|file)$/i,
        Ye = /^(?:input|select|textarea|keygen)/i;
    it.param = function(t, e) {
        var n, o = [],
            i = function(t, e) {
                e = it.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(t) || t.jquery && !it.isPlainObject(t)) it.each(t, function() {
            i(this.name, this.value)
        });
        else
            for (n in t) H(n, t[n], e, i);
        return o.join("&").replace(Fe, "+")
    }, it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = it.prop(this, "elements");
                return t ? it.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !it(this).is(":disabled") && Ye.test(this.nodeName) && !Je.test(t) && (this.checked || !Dt.test(t))
            }).map(function(t, e) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Xe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Xe, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || F()
    } : W;
    var Qe = 0,
        Ge = {},
        Ze = it.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ge) Ge[t](void 0, !0)
    }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && it.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(n, o) {
                    var i, r = t.xhr(),
                        s = ++Qe;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (i in t.xhrFields) r[i] = t.xhrFields[i];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && r.setRequestHeader(i, n[i] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, i) {
                        var a, c, l;
                        if (e && (i || 4 === r.readyState))
                            if (delete Ge[s], e = void 0, r.onreadystatechange = it.noop, i) 4 !== r.readyState && r.abort();
                            else {
                                l = {}, a = r.status, "string" == typeof r.responseText && (l.text = r.responseText);
                                try {
                                    c = r.statusText
                                } catch (u) {
                                    c = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = l.text ? 200 : 404
                            }
                        l && o(a, c, l, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ge[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return it.globalEval(t), t
            }
        }
    }), it.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), it.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = ft.head || it("head")[0] || ft.documentElement;
            return {
                send: function(o, i) {
                    e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || it.expando + "_" + De++;
            return this[t] = !0, t
        }
    }), it.ajaxPrefilter("json jsonp", function(e, n, o) {
        var i, r, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = it.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + i) : e.jsonp !== !1 && (e.url += (Ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || it.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[i], t[i] = function() {
            s = arguments
        }, o.always(function() {
            t[i] = r, e[i] && (e.jsonpCallback = n.jsonpCallback, tn.push(i)), s && it.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), it.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || ft;
        var o = dt.exec(t),
            i = !n && [];
        return o ? [e.createElement(o[1])] : (o = it.buildFragment([t], e, i), i && i.length && it(i).remove(), it.merge([], o.childNodes))
    };
    var nn = it.fn.load;
    it.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var o, i, r, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (o = it.trim(t.slice(a, t.length)), t = t.slice(0, a)), it.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && it.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            i = arguments, s.html(o ? it("<div>").append(it.parseHTML(t)).find(o) : t);
        }).complete(n && function(t, e) {
            s.each(n, i || [t.responseText, e, t])
        }), this
    }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        it.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), it.expr.filters.animated = function(t) {
        return it.grep(it.timers, function(e) {
            return t === e.elem
        }).length
    };
    var on = t.document.documentElement;
    it.offset = {
        setOffset: function(t, e, n) {
            var o, i, r, s, a, c, l, u = it.css(t, "position"),
                d = it(t),
                p = {};
            "static" === u && (t.style.position = "relative"), a = d.offset(), r = it.css(t, "top"), c = it.css(t, "left"), l = ("absolute" === u || "fixed" === u) && it.inArray("auto", [r, c]) > -1, l ? (o = d.position(), s = o.top, i = o.left) : (s = parseFloat(r) || 0, i = parseFloat(c) || 0), it.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + i), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, it.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                it.offset.setOffset(this, t, e)
            });
            var e, n, o = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                r = i && i.ownerDocument;
            return r ? (e = r.documentElement, it.contains(e, i) ? (typeof i.getBoundingClientRect !== Ct && (o = i.getBoundingClientRect()), n = z(r), {
                top: o.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: o.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    o = this[0];
                return "fixed" === it.css(o, "position") ? e = o.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), it.nodeName(t[0], "html") || (n = t.offset()), n.top += it.css(t[0], "borderTopWidth", !0), n.left += it.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - it.css(o, "marginTop", !0),
                    left: e.left - n.left - it.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || on; t && !it.nodeName(t, "html") && "static" === it.css(t, "position");) t = t.offsetParent;
                return t || on
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        it.fn[t] = function(o) {
            return Nt(this, function(t, o, i) {
                var r = z(t);
                return void 0 === i ? r ? e in r ? r[e] : r.document.documentElement[o] : t[o] : void(r ? r.scrollTo(n ? it(r).scrollLeft() : i, n ? i : it(r).scrollTop()) : t[o] = i)
            }, t, o, arguments.length, null)
        }
    }), it.each(["top", "left"], function(t, e) {
        it.cssHooks[e] = S(nt.pixelPosition, function(t, n) {
            return n ? (n = ee(t, e), oe.test(n) ? it(t).position()[e] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        it.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, o) {
            it.fn[o] = function(o, i) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    s = n || (o === !0 || i === !0 ? "margin" : "border");
                return Nt(this, function(e, n, o) {
                    var i;
                    return it.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === o ? it.css(e, n, s) : it.style(e, n, o, s)
                }, e, r ? o : void 0, r, null)
            }
        })
    }), it.fn.size = function() {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var rn = t.jQuery,
        sn = t.$;
    return it.noConflict = function(e) {
        return t.$ === it && (t.$ = sn), e && t.jQuery === it && (t.jQuery = rn), it
    }, typeof e === Ct && (t.jQuery = t.$ = it), it
}),



    function t() {
        window.matchMedia("screen and (max-width: 991px)").matches ? (isMobile = !0, eq = 0) : (isMobile = !1, eq = 1), isMobile ? isFocus = !1 : ($(".bots-l").height($(window).height() - 90), $(window).scrollTop() > 32 ? $("#sidebar").addClass("bl-fixed") : $("#sidebar").removeClass("bl-fixed"), $(window).scrollTop() > 300 ? isFocus = !1 : isFocus = !0)
    }
    $(".input-captcha").keypress(function(t) {
        if (13 != t.keyCode) {
            var e = new RegExp("^[a-zA-Z0-9]+$"),
                n = String.fromCharCode(t.charCode ? t.charCode : t.which);
            return e.test(n) ? ($(".c-field").removeClass("has-error"), !0) : ($(".c-field").addClass("has-error"), t.preventDefault(), !1)
        }
    })

