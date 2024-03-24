
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  
    // packages/shared/render/plugins/BaseSiteModules/tram-min.js
    var require_tram_min = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
        "use strict";
        window.tram = function(a) {
          function b(a2, b2) {
            var c2 = new M.Bare();
            return c2.init(a2, b2);
          }
          function c(a2) {
            return a2.replace(/[A-Z]/g, function(a3) {
              return "-" + a3.toLowerCase();
            });
          }
          function d(a2) {
            var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
            return [c2, d2, e2];
          }
          function e(a2, b2, c2) {
            return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
          }
          function f() {
          }
          function g(a2, b2) {
            j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
          }
          function h(a2, b2, c2) {
            j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
          }
          function i(a2, b2, c2) {
            if (void 0 !== b2 && (c2 = b2), void 0 === a2)
              return c2;
            var d2 = c2;
            return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
          }
          function j(a2) {
            U.debug && window && window.console.warn(a2);
          }
          function k(a2) {
            for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
              var e2 = a2[b2];
              e2 && d2.push(e2);
            }
            return d2;
          }
          var l = function(a2, b2, c2) {
            function d2(a3) {
              return "object" == typeof a3;
            }
            function e2(a3) {
              return "function" == typeof a3;
            }
            function f2() {
            }
            function g2(h2, i2) {
              function j2() {
                var a3 = new k2();
                return e2(a3.init) && a3.init.apply(a3, arguments), a3;
              }
              function k2() {
              }
              i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
              var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
              return n2.constructor = j2, j2.mixin = function(b3) {
                return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
              }, j2.open = function(a3) {
                if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                  for (var c3 in l2)
                    b2.call(l2, c3) && (n2[c3] = l2[c3]);
                return e2(n2.init) || (n2.init = h2), j2;
              }, j2.open(i2);
            }
            return g2;
          }("prototype", {}.hasOwnProperty), m = {
            ease: ["ease", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
            }],
            "ease-in": ["ease-in", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
            }],
            "ease-out": ["ease-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
            }],
            "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }],
            linear: ["linear", function(a2, b2, c2, d2) {
              return c2 * a2 / d2 + b2;
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 + b2;
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
              return -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 + b2;
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
              return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
              return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
            }],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
            }]
          }, n = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
            if (a2 in C.style)
              return {
                dom: a2,
                css: a2
              };
            var b2, c2, d2 = "", e2 = a2.split("-");
            for (b2 = 0; b2 < e2.length; b2++)
              d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
            for (b2 = 0; b2 < D.length; b2++)
              if (c2 = D[b2] + d2, c2 in C.style)
                return {
                  dom: c2,
                  css: E[b2] + a2
                };
          }, G = b.support = {
            bind: Function.prototype.bind,
            transform: F("transform"),
            transition: F("transition"),
            backface: F("backface-visibility"),
            timing: F("transition-timing-function")
          };
          if (G.transition) {
            var H = G.timing.dom;
            if (C.style[H] = m["ease-in-back"][0], !C.style[H])
              for (var I in n)
                m[I][0] = n[I];
          }
          var J = b.frame = function() {
            var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            return a2 && G.bind ? a2.bind(p) : function(a3) {
              p.setTimeout(a3, 16);
            };
          }(), K = b.now = function() {
            var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
            return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
              return +/* @__PURE__ */ new Date();
            };
          }(), L = l(function(b2) {
            function d2(a2, b3) {
              var c2 = k(("" + a2).split(B)), d3 = c2[0];
              b3 = b3 || {};
              var e3 = Y[d3];
              if (!e3)
                return j("Unsupported property: " + d3);
              if (!b3.weak || !this.props[d3]) {
                var f3 = e3[0], g3 = this.props[d3];
                return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
              }
            }
            function e2(a2, b3, c2) {
              if (a2) {
                var e3 = typeof a2;
                if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                  return this.timer = new S({
                    duration: a2,
                    context: this,
                    complete: h2
                  }), void (this.active = true);
                if ("string" == e3 && b3) {
                  switch (a2) {
                    case "hide":
                      o2.call(this);
                      break;
                    case "stop":
                      l2.call(this);
                      break;
                    case "redraw":
                      p2.call(this);
                      break;
                    default:
                      d2.call(this, a2, c2 && c2[1]);
                  }
                  return h2.call(this);
                }
                if ("function" == e3)
                  return void a2.call(this, this);
                if ("object" == e3) {
                  var f3 = 0;
                  u2.call(this, a2, function(a3, b4) {
                    a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                  }, function(a3) {
                    "wait" in a3 && (f3 = i(a3.wait, 0));
                  }), t2.call(this), f3 > 0 && (this.timer = new S({
                    duration: f3,
                    context: this
                  }), this.active = true, b3 && (this.timer.complete = h2));
                  var g3 = this, j2 = false, k2 = {};
                  J(function() {
                    u2.call(g3, a2, function(a3) {
                      a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                    }), j2 && g3.$el.css(k2);
                  });
                }
              }
            }
            function f2(a2) {
              a2 = i(a2, 0), this.active ? this.queue.push({
                options: a2
              }) : (this.timer = new S({
                duration: a2,
                context: this,
                complete: h2
              }), this.active = true);
            }
            function g2(a2) {
              return this.active ? (this.queue.push({
                options: a2,
                args: arguments
              }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
            }
            function h2() {
              if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
                var a2 = this.queue.shift();
                e2.call(this, a2.options, true, a2.args);
              }
            }
            function l2(a2) {
              this.timer && this.timer.destroy(), this.queue = [], this.active = false;
              var b3;
              "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
            }
            function m2(a2) {
              l2.call(this, a2), u2.call(this, a2, w2, x2);
            }
            function n2(a2) {
              "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
            }
            function o2() {
              l2.call(this), this.el.style.display = "none";
            }
            function p2() {
              this.el.offsetHeight;
            }
            function r2() {
              l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
            }
            function t2() {
              var a2, b3, c2 = [];
              this.upstream && c2.push(this.upstream);
              for (a2 in this.props)
                b3 = this.props[a2], b3.active && c2.push(b3.string);
              c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
            }
            function u2(a2, b3, e3) {
              var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
              for (f3 in a2)
                h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
              for (f3 in k2) {
                if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                  if (!j2)
                    continue;
                  g3 = d2.call(this, f3);
                }
                b3.call(this, g3, h3);
              }
              e3 && i2 && e3.call(this, i2);
            }
            function v2(a2) {
              a2.stop();
            }
            function w2(a2, b3) {
              a2.set(b3);
            }
            function x2(a2) {
              this.$el.css(a2);
            }
            function y2(a2, c2) {
              b2[a2] = function() {
                return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
              };
            }
            function A2(a2, b3) {
              var c2, d3 = this.children.length;
              for (c2 = 0; d3 > c2; c2++)
                a2.apply(this.children[c2], b3);
              return this;
            }
            b2.init = function(b3) {
              if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
                var c2 = W(this.el, "transition");
                c2 && !z.test(c2) && (this.upstream = c2);
              }
              G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
            }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
          }), M = l(L, function(b2) {
            function c2(b3, c3) {
              var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
              return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
            }
            b2.init = function(b3, d2) {
              var e2 = a(b3);
              if (!e2.length)
                return this;
              if (1 === e2.length)
                return c2(e2[0], d2);
              var f2 = [];
              return e2.each(function(a2, b4) {
                f2.push(c2(b4, d2));
              }), this.children = f2, this;
            };
          }), N = l(function(a2) {
            function b2() {
              var a3 = this.get();
              this.update("auto");
              var b3 = this.get();
              return this.update(a3), b3;
            }
            function c2(a3, b3, c3) {
              return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
            }
            function d2(a3) {
              var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
              return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
            }
            var f2 = {
              duration: 500,
              ease: "ease",
              delay: 0
            };
            a2.init = function(a3, b3, d3, e2) {
              this.$el = a3, this.el = a3[0];
              var g2 = b3[0];
              d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
            }, a2.set = function(a3) {
              a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
            }, a2.transition = function(a3) {
              this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
            }, a2.fallback = function(a3) {
              var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
              a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
                from: c3,
                to: a3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.get = function() {
              return W(this.el, this.name);
            }, a2.update = function(a3) {
              V(this.el, this.name, a3);
            }, a2.stop = function() {
              (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
              var a3 = this.tween;
              a3 && a3.context && a3.destroy();
            }, a2.convert = function(a3, b3) {
              if ("auto" == a3 && this.auto)
                return a3;
              var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
              switch (b3) {
                case t:
                  if (e2)
                    return a3;
                  if (f3 && "" === a3.replace(r, ""))
                    return +a3;
                  c3 = "number(unitless)";
                  break;
                case u:
                  if (f3) {
                    if ("" === a3 && this.original)
                      return this.original;
                    if (b3.test(a3))
                      return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                  }
                  c3 = "hex or rgb string";
                  break;
                case v:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit)";
                  break;
                case w:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit or %)";
                  break;
                case x:
                  if (e2)
                    return a3 + this.angle;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(deg) or string(angle)";
                  break;
                case y:
                  if (e2)
                    return a3;
                  if (f3 && w.test(a3))
                    return a3;
                  c3 = "number(unitless) or string(unit or %)";
              }
              return g(c3, a3), a3;
            }, a2.redraw = function() {
              this.el.offsetHeight;
            };
          }), O = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
            };
          }), P = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.animate = this.fallback;
            }, a2.get = function() {
              return this.$el[this.name]();
            }, a2.update = function(a3) {
              this.$el[this.name](a3);
            };
          }), Q = l(N, function(a2, b2) {
            function c2(a3, b3) {
              var c3, d2, e2, f2, g2;
              for (c3 in a3)
                f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
            }
            a2.init = function() {
              b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
            }, a2.set = function(a3) {
              c2.call(this, a3, function(a4, b3) {
                this.current[a4] = b3;
              }), V(this.el, this.name, this.style(this.current)), this.redraw();
            }, a2.transition = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var c3, d2 = {};
              for (c3 in this.current)
                d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
              this.active = true, this.nextStyle = this.style(d2);
            }, a2.fallback = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.update = function() {
              V(this.el, this.name, this.style(this.current));
            }, a2.style = function(a3) {
              var b3, c3 = "";
              for (b3 in a3)
                c3 += b3 + "(" + a3[b3] + ") ";
              return c3;
            }, a2.values = function(a3) {
              var b3, d2 = {};
              return c2.call(this, a3, function(a4, c3, e2) {
                d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
              }), d2;
            };
          }), R = l(function(b2) {
            function c2(a2) {
              1 === n2.push(a2) && J(g2);
            }
            function g2() {
              var a2, b3, c3, d2 = n2.length;
              if (d2)
                for (J(g2), b3 = K(), a2 = d2; a2--; )
                  c3 = n2[a2], c3 && c3.render(b3);
            }
            function i2(b3) {
              var c3, d2 = a.inArray(b3, n2);
              d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
            }
            function j2(a2) {
              return Math.round(a2 * o2) / o2;
            }
            function k2(a2, b3, c3) {
              return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
            }
            var l2 = {
              ease: m.ease[1],
              from: 0,
              to: 1
            };
            b2.init = function(a2) {
              this.duration = a2.duration || 0, this.delay = a2.delay || 0;
              var b3 = a2.ease || l2.ease;
              m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
              var c3 = a2.from, d2 = a2.to;
              void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
            }, b2.play = function() {
              this.active || (this.start || (this.start = K()), this.active = true, c2(this));
            }, b2.stop = function() {
              this.active && (this.active = false, i2(this));
            }, b2.render = function(a2) {
              var b3, c3 = a2 - this.start;
              if (this.delay) {
                if (c3 <= this.delay)
                  return;
                c3 -= this.delay;
              }
              if (c3 < this.duration) {
                var d2 = this.ease(c3, 0, 1, this.duration);
                return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
              }
              b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
            }, b2.format = function(a2, b3) {
              if (b3 += "", a2 += "", "#" == a2.charAt(0))
                return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
              if (!this.unit) {
                var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
                c3 !== e2 && h("tween", b3, a2), this.unit = c3;
              }
              b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
            }, b2.destroy = function() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = f;
            };
            var n2 = [], o2 = 1e3;
          }), S = l(R, function(a2) {
            a2.init = function(a3) {
              this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
            }, a2.render = function(a3) {
              var b2 = a3 - this.start;
              b2 < this.duration || (this.complete.call(this.context), this.destroy());
            };
          }), T = l(R, function(a2, b2) {
            a2.init = function(a3) {
              this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
              var b3, c2;
              for (b3 in a3.values)
                c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                  name: b3,
                  from: this.current[b3],
                  to: c2,
                  duration: a3.duration,
                  delay: a3.delay,
                  ease: a3.ease,
                  autoplay: false
                }));
              this.play();
            }, a2.render = function(a3) {
              var b3, c2, d2 = this.tweens.length, e2 = false;
              for (b3 = d2; b3--; )
                c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
              return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
            }, a2.destroy = function() {
              if (b2.destroy.call(this), this.tweens) {
                var a3, c2 = this.tweens.length;
                for (a3 = c2; a3--; )
                  this.tweens[a3].destroy();
                this.tweens = null, this.current = null;
              }
            };
          }), U = b.config = {
            debug: false,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: false,
            hideBackface: false,
            perspective: "",
            fallback: !G.transition,
            agentTests: []
          };
          b.fallback = function(a2) {
            if (!G.transition)
              return U.fallback = true;
            U.agentTests.push("(" + a2 + ")");
            var b2 = new RegExp(U.agentTests.join("|"), "i");
            U.fallback = b2.test(navigator.userAgent);
          }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
            return new R(a2);
          }, b.delay = function(a2, b2, c2) {
            return new S({
              complete: b2,
              duration: a2,
              context: c2
            });
          }, a.fn.tram = function(a2) {
            return b.call(null, this, a2);
          };
          var V = a.style, W = a.css, X = {
            transform: G.transform && G.transform.css
          }, Y = {
            color: [O, u],
            background: [O, u, "background-color"],
            "outline-color": [O, u],
            "border-color": [O, u],
            "border-top-color": [O, u],
            "border-right-color": [O, u],
            "border-bottom-color": [O, u],
            "border-left-color": [O, u],
            "border-width": [N, v],
            "border-top-width": [N, v],
            "border-right-width": [N, v],
            "border-bottom-width": [N, v],
            "border-left-width": [N, v],
            "border-spacing": [N, v],
            "letter-spacing": [N, v],
            margin: [N, v],
            "margin-top": [N, v],
            "margin-right": [N, v],
            "margin-bottom": [N, v],
            "margin-left": [N, v],
            padding: [N, v],
            "padding-top": [N, v],
            "padding-right": [N, v],
            "padding-bottom": [N, v],
            "padding-left": [N, v],
            "outline-width": [N, v],
            opacity: [N, t],
            top: [N, w],
            right: [N, w],
            bottom: [N, w],
            left: [N, w],
            "font-size": [N, w],
            "text-indent": [N, w],
            "word-spacing": [N, w],
            width: [N, w],
            "min-width": [N, w],
            "max-width": [N, w],
            height: [N, w],
            "min-height": [N, w],
            "max-height": [N, w],
            "line-height": [N, y],
            "scroll-top": [P, t, "scrollTop"],
            "scroll-left": [P, t, "scrollLeft"]
          }, Z = {};
          G.transform && (Y.transform = [Q], Z = {
            x: [w, "translateX"],
            y: [w, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [t],
            scaleX: [t],
            scaleY: [t],
            skew: [x],
            skewX: [x],
            skewY: [x]
          }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
          var $ = /ms/, _ = /s|\./;
          return a.tram = b;
        }(window.jQuery);
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
    var require_underscore_custom = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
        "use strict";
        var $ = window.$;
        var tram = require_tram_min() && $.tram;
        module.exports = function() {
          var _ = {};
          _.VERSION = "1.6.0-Webflow";
          var breaker = {};
          var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
          var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
          var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
          var each = _.each = _.forEach = function(obj, iterator, context) {
            if (obj == null)
              return obj;
            if (nativeForEach && obj.forEach === nativeForEach) {
              obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
              for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker)
                  return;
              }
            } else {
              var keys = _.keys(obj);
              for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                  return;
              }
            }
            return obj;
          };
          _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeMap && obj.map === nativeMap)
              return obj.map(iterator, context);
            each(obj, function(value, index, list) {
              results.push(iterator.call(context, value, index, list));
            });
            return results;
          };
          _.find = _.detect = function(obj, predicate, context) {
            var result;
            any(obj, function(value, index, list) {
              if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
              }
            });
            return result;
          };
          _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeFilter && obj.filter === nativeFilter)
              return obj.filter(predicate, context);
            each(obj, function(value, index, list) {
              if (predicate.call(context, value, index, list))
                results.push(value);
            });
            return results;
          };
          var any = _.some = _.any = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = false;
            if (obj == null)
              return result;
            if (nativeSome && obj.some === nativeSome)
              return obj.some(predicate, context);
            each(obj, function(value, index, list) {
              if (result || (result = predicate.call(context, value, index, list)))
                return breaker;
            });
            return !!result;
          };
          _.contains = _.include = function(obj, target) {
            if (obj == null)
              return false;
            if (nativeIndexOf && obj.indexOf === nativeIndexOf)
              return obj.indexOf(target) != -1;
            return any(obj, function(value) {
              return value === target;
            });
          };
          _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
              return func.apply(null, args);
            }, wait);
          };
          _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
          };
          _.throttle = function(func) {
            var wait, args, context;
            return function() {
              if (wait)
                return;
              wait = true;
              args = arguments;
              context = this;
              tram.frame(function() {
                wait = false;
                func.apply(context, args);
              });
            };
          };
          _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            var later = function() {
              var last = _.now() - timestamp;
              if (last < wait) {
                timeout = setTimeout(later, wait - last);
              } else {
                timeout = null;
                if (!immediate) {
                  result = func.apply(context, args);
                  context = args = null;
                }
              }
            };
            return function() {
              context = this;
              args = arguments;
              timestamp = _.now();
              var callNow = immediate && !timeout;
              if (!timeout) {
                timeout = setTimeout(later, wait);
              }
              if (callNow) {
                result = func.apply(context, args);
                context = args = null;
              }
              return result;
            };
          };
          _.defaults = function(obj) {
            if (!_.isObject(obj))
              return obj;
            for (var i = 1, length = arguments.length; i < length; i++) {
              var source = arguments[i];
              for (var prop in source) {
                if (obj[prop] === void 0)
                  obj[prop] = source[prop];
              }
            }
            return obj;
          };
          _.keys = function(obj) {
            if (!_.isObject(obj))
              return [];
            if (nativeKeys)
              return nativeKeys(obj);
            var keys = [];
            for (var key in obj)
              if (_.has(obj, key))
                keys.push(key);
            return keys;
          };
          _.has = function(obj, key) {
            return hasOwnProperty.call(obj, key);
          };
          _.isObject = function(obj) {
            return obj === Object(obj);
          };
          _.now = Date.now || function() {
            return (/* @__PURE__ */ new Date()).getTime();
          };
          _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
          var noMatch = /(.)^/;
          var escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          };
          var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
          var escapeChar = function(match) {
            return "\\" + escapes[match];
          };
          var bareIdentifier = /^\s*(\w|\$)+\s*$/;
          _.template = function(text, settings, oldSettings) {
            if (!settings && oldSettings)
              settings = oldSettings;
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
              source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
              index = offset + match.length;
              if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
              } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
              } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
              }
              return match;
            });
            source += "';\n";
            var argument = settings.variable;
            if (argument) {
              if (!bareIdentifier.test(argument))
                throw new Error("variable is not a bare identifier: " + argument);
            } else {
              source = "with(obj||{}){\n" + source + "}\n";
              argument = "obj";
            }
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            var render;
            try {
              render = new Function(settings.variable || "obj", "_", source);
            } catch (e) {
              e.source = source;
              throw e;
            }
            var template = function(data) {
              return render.call(this, data, _);
            };
            template.source = "function(" + argument + "){\n" + source + "}";
            return template;
          };
          return _;
        }();
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
    var require_webflow_lib = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
        "use strict";
        var Webflow = {};
        var modules = {};
        var primary = [];
        var secondary = window.Webflow || [];
        var $ = window.jQuery;
        var $win = $(window);
        var $doc = $(document);
        var isFunction = $.isFunction;
        var _ = Webflow._ = require_underscore_custom();
        var tram = Webflow.tram = require_tram_min() && $.tram;
        var domready = false;
        var destroyed = false;
        tram.config.hideBackface = false;
        tram.config.keepInherited = true;
        Webflow.define = function(name, factory, options) {
          if (modules[name]) {
            unbindModule(modules[name]);
          }
          var instance = modules[name] = factory($, _, options) || {};
          bindModule(instance);
          return instance;
        };
        Webflow.require = function(name) {
          return modules[name];
        };
        function bindModule(module2) {
          if (Webflow.env()) {
            isFunction(module2.design) && $win.on("__wf_design", module2.design);
            isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
          }
          isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            addReady(module2);
          }
        }
        function addReady(module2) {
          if (domready) {
            module2.ready();
            return;
          }
          if (_.contains(primary, module2.ready)) {
            return;
          }
          primary.push(module2.ready);
        }
        function unbindModule(module2) {
          isFunction(module2.design) && $win.off("__wf_design", module2.design);
          isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
          isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            removeReady(module2);
          }
        }
        function removeReady(module2) {
          primary = _.filter(primary, function(readyFn) {
            return readyFn !== module2.ready;
          });
        }
        Webflow.push = function(ready) {
          if (domready) {
            isFunction(ready) && ready();
            return;
          }
          secondary.push(ready);
        };
        Webflow.env = function(mode) {
          var designFlag = window.__wf_design;
          var inApp = typeof designFlag !== "undefined";
          if (!mode) {
            return inApp;
          }
          if (mode === "design") {
            return inApp && designFlag;
          }
          if (mode === "preview") {
            return inApp && !designFlag;
          }
          if (mode === "slug") {
            return inApp && window.__wf_slug;
          }
          if (mode === "editor") {
            return window.WebflowEditor;
          }
          if (mode === "test") {
            return window.__wf_test;
          }
          if (mode === "frame") {
            return window !== window.top;
          }
        };
        var userAgent = navigator.userAgent.toLowerCase();
        var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
        var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
        var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
        Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
        var touchTarget;
        touch && $doc.on("touchstart mousedown", function(evt) {
          touchTarget = evt.target;
        });
        Webflow.validClick = touch ? function(clickTarget) {
          return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
        } : function() {
          return true;
        };
        var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
        var scrollEvents = "scroll.webflow " + resizeEvents;
        Webflow.resize = eventProxy($win, resizeEvents);
        Webflow.scroll = eventProxy($win, scrollEvents);
        Webflow.redraw = eventProxy();
        function eventProxy(target, types) {
          var handlers = [];
          var proxy = {};
          proxy.up = _.throttle(function(evt) {
            _.each(handlers, function(h) {
              h(evt);
            });
          });
          if (target && types) {
            target.on(types, proxy.up);
          }
          proxy.on = function(handler) {
            if (typeof handler !== "function") {
              return;
            }
            if (_.contains(handlers, handler)) {
              return;
            }
            handlers.push(handler);
          };
          proxy.off = function(handler) {
            if (!arguments.length) {
              handlers = [];
              return;
            }
            handlers = _.filter(handlers, function(h) {
              return h !== handler;
            });
          };
          return proxy;
        }
        Webflow.location = function(url) {
          window.location = url;
        };
        if (Webflow.env()) {
          Webflow.location = function() {
          };
        }
        Webflow.ready = function() {
          domready = true;
          if (destroyed) {
            restoreModules();
          } else {
            _.each(primary, callReady);
          }
          _.each(secondary, callReady);
          Webflow.resize.up();
        };
        function callReady(readyFn) {
          isFunction(readyFn) && readyFn();
        }
        function restoreModules() {
          destroyed = false;
          _.each(modules, bindModule);
        }
        var deferLoad;
        Webflow.load = function(handler) {
          deferLoad.then(handler);
        };
        function bindLoad() {
          if (deferLoad) {
            deferLoad.reject();
            $win.off("load", deferLoad.resolve);
          }
          deferLoad = new $.Deferred();
          $win.on("load", deferLoad.resolve);
        }
        Webflow.destroy = function(options) {
          options = options || {};
          destroyed = true;
          $win.triggerHandler("__wf_destroy");
          if (options.domready != null) {
            domready = options.domready;
          }
          _.each(modules, unbindModule);
          Webflow.resize.off();
          Webflow.scroll.off();
          Webflow.redraw.off();
          primary = [];
          secondary = [];
          if (deferLoad.state() === "pending") {
            bindLoad();
          }
        };
        $(Webflow.ready);
        bindLoad();
        module.exports = window.Webflow = Webflow;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
    var require_webflow_brand = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("brand", module.exports = function($) {
          var api = {};
          var doc = document;
          var $html = $("html");
          var $body = $("body");
          var namespace = ".w-webflow-badge";
          var location = window.location;
          var isPhantom = /PhantomJS/i.test(navigator.userAgent);
          var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          var brandElement;
          api.ready = function() {
            var shouldBrand = $html.attr("data-wf-status");
            var publishedDomain = $html.attr("data-wf-domain") || "";
            if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
              shouldBrand = true;
            }
            if (shouldBrand && !isPhantom) {
              brandElement = brandElement || createBadge();
              ensureBrand();
              setTimeout(ensureBrand, 500);
              $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
            }
          };
          function onFullScreenChange() {
            var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
            $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
          }
          function createBadge() {
            var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "");
            var $logoArt = $("<img>").attr("src", "img/channels4_profile.jpg").attr("alt", "").css({
              marginRight: "4px",
              width: "26px"
            });
            var $logoText = $("<img>").attr("src", "img/rw.svg").attr("alt", "Ribut Wicaksono");
            $brand.append($logoArt, $logoText);
            return $brand[0];
          }
          function ensureBrand() {
            var found = $body.children(namespace);
            var match = found.length && found.get(0) === brandElement;
            var inEditor = Webflow.env("editor");
            if (match) {
              if (inEditor) {
                found.remove();
              }
              return;
            }
            if (found.length) {
              found.remove();
            }
            if (!inEditor) {
              $body.append(brandElement);
            }
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
    var require_webflow_edit = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("edit", module.exports = function($, _, options) {
          options = options || {};
          if (Webflow.env("test") || Webflow.env("frame")) {
            if (!options.fixture && !inCypress()) {
              return {
                exit: 1
              };
            }
          }
          var api = {};
          var $win = $(window);
          var $html = $(document.documentElement);
          var location = document.location;
          var hashchange = "hashchange";
          var loaded;
          var loadEditor = options.load || load;
          var hasLocalStorage = false;
          try {
            hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
          } catch (e) {
          }
          if (hasLocalStorage) {
            loadEditor();
          } else if (location.search) {
            if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
              loadEditor();
            }
          } else {
            $win.on(hashchange, checkHash).triggerHandler(hashchange);
          }
          function checkHash() {
            if (loaded) {
              return;
            }
            if (/\?edit/.test(location.hash)) {
              loadEditor();
            }
          }
          function load() {
            loaded = true;
            window.WebflowEditor = true;
            $win.off(hashchange, checkHash);
            checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
              $.ajax({
                url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: $html.attr("data-wf-site")
                },
                xhrFields: {
                  withCredentials: true
                },
                dataType: "json",
                crossDomain: true,
                success: success(thirdPartyCookiesSupported)
              });
            });
          }
          function success(thirdPartyCookiesSupported) {
            return function(data) {
              if (!data) {
                console.error("Could not load editor data");
                return;
              }
              data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
              getScript(prefix(data.scriptPath), function() {
                window.WebflowEditor(data);
              });
            };
          }
          function getScript(url, done) {
            $.ajax({
              type: "GET",
              url,
              dataType: "script",
              cache: true
            }).then(done, error);
          }
          function error(jqXHR, textStatus, errorThrown) {
            console.error("Could not load editor script: " + textStatus);
            throw errorThrown;
          }
          function prefix(url) {
            return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
          }
          function cleanSlashes(url) {
            return url.replace(/([^:])\/\//g, "$1/");
          }
          function checkThirdPartyCookieSupport(callback) {
            var iframe = window.document.createElement("iframe");
            iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
            iframe.style.display = "none";
            iframe.sandbox = "allow-scripts allow-same-origin";
            var handleMessage = function(event) {
              if (event.data === "WF_third_party_cookies_unsupported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(false);
              } else if (event.data === "WF_third_party_cookies_supported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(true);
              }
            };
            iframe.onerror = function() {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            };
            window.addEventListener("message", handleMessage, false);
            window.document.body.appendChild(iframe);
          }
          function cleanUpCookieCheckerIframe(iframe, listener) {
            window.removeEventListener("message", listener, false);
            iframe.remove();
          }
          return api;
        });
        function inCypress() {
          try {
            return window.top.__Cypress__;
          } catch (e) {
            return false;
          }
        }
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
    var require_webflow_focus_visible = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("focus-visible", module.exports = function() {
          function applyFocusVisiblePolyfill(scope) {
            var hadKeyboardEvent = true;
            var hadFocusVisibleRecently = false;
            var hadFocusVisibleRecentlyTimeout = null;
            var inputTypesAllowlist = {
              text: true,
              search: true,
              url: true,
              tel: true,
              email: true,
              password: true,
              number: true,
              date: true,
              month: true,
              week: true,
              time: true,
              datetime: true,
              "datetime-local": true
            };
            function isValidFocusTarget(el) {
              if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
                return true;
              }
              return false;
            }
            function focusTriggersKeyboardModality(el) {
              var type = el.type;
              var tagName = el.tagName;
              if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
              }
              if (tagName === "TEXTAREA" && !el.readOnly) {
                return true;
              }
              if (el.isContentEditable) {
                return true;
              }
              return false;
            }
            function addFocusVisibleAttribute(el) {
              if (el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.setAttribute("data-wf-focus-visible", "true");
            }
            function removeFocusVisibleAttribute(el) {
              if (!el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.removeAttribute("data-wf-focus-visible");
            }
            function onKeyDown(e) {
              if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
              }
              if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
              }
              hadKeyboardEvent = true;
            }
            function onPointerDown() {
              hadKeyboardEvent = false;
            }
            function onFocus(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
              }
            }
            function onBlur(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (e.target.hasAttribute("data-wf-focus-visible")) {
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                  hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
              }
            }
            function onVisibilityChange() {
              if (document.visibilityState === "hidden") {
                if (hadFocusVisibleRecently) {
                  hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
              }
            }
            function addInitialPointerMoveListeners() {
              document.addEventListener("mousemove", onInitialPointerMove);
              document.addEventListener("mousedown", onInitialPointerMove);
              document.addEventListener("mouseup", onInitialPointerMove);
              document.addEventListener("pointermove", onInitialPointerMove);
              document.addEventListener("pointerdown", onInitialPointerMove);
              document.addEventListener("pointerup", onInitialPointerMove);
              document.addEventListener("touchmove", onInitialPointerMove);
              document.addEventListener("touchstart", onInitialPointerMove);
              document.addEventListener("touchend", onInitialPointerMove);
            }
            function removeInitialPointerMoveListeners() {
              document.removeEventListener("mousemove", onInitialPointerMove);
              document.removeEventListener("mousedown", onInitialPointerMove);
              document.removeEventListener("mouseup", onInitialPointerMove);
              document.removeEventListener("pointermove", onInitialPointerMove);
              document.removeEventListener("pointerdown", onInitialPointerMove);
              document.removeEventListener("pointerup", onInitialPointerMove);
              document.removeEventListener("touchmove", onInitialPointerMove);
              document.removeEventListener("touchstart", onInitialPointerMove);
              document.removeEventListener("touchend", onInitialPointerMove);
            }
            function onInitialPointerMove(e) {
              if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
                return;
              }
              hadKeyboardEvent = false;
              removeInitialPointerMoveListeners();
            }
            document.addEventListener("keydown", onKeyDown, true);
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("visibilitychange", onVisibilityChange, true);
            addInitialPointerMoveListeners();
            scope.addEventListener("focus", onFocus, true);
            scope.addEventListener("blur", onBlur, true);
          }
          function ready() {
            if (typeof document !== "undefined") {
              try {
                document.querySelector(":focus-visible");
              } catch (e) {
                applyFocusVisiblePolyfill(document);
              }
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
    var require_webflow_focus = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("focus", module.exports = function() {
          var capturedEvents = [];
          var capturing = false;
          function captureEvent(e) {
            if (capturing) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              capturedEvents.unshift(e);
            }
          }
          function isPolyfilledFocusEvent(e) {
            var el = e.target;
            var tag = el.tagName;
            return /^a$/i.test(tag) && el.href != null || // (A)
            /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
            /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
            !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
            /^audio$/i.test(tag) || // (F)
            /^video$/i.test(tag) && el.controls === true;
          }
          function handler(e) {
            if (isPolyfilledFocusEvent(e)) {
              capturing = true;
              setTimeout(() => {
                capturing = false;
                e.target.focus();
                while (capturedEvents.length > 0) {
                  var event = capturedEvents.pop();
                  event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
              }, 0);
            }
          }
          function ready() {
            if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
              document.addEventListener("mousedown", handler, true);
              document.addEventListener("mouseup", captureEvent, true);
              document.addEventListener("click", captureEvent, true);
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
    var require_webflow_links = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("links", module.exports = function($, _) {
          var api = {};
          var $win = $(window);
          var designer;
          var inApp = Webflow.env();
          var location = window.location;
          var tempLink = document.createElement("a");
          var linkCurrent = "w--current";
          var indexPage = /index\.(html|php)$/;
          var dirList = /\/$/;
          var anchors;
          var slug;
          api.ready = api.design = api.preview = init;
          function init() {
            designer = inApp && Webflow.env("design");
            slug = Webflow.env("slug") || location.pathname || "";
            Webflow.scroll.off(scroll);
            anchors = [];
            var links = document.links;
            for (var i = 0; i < links.length; ++i) {
              select(links[i]);
            }
            if (anchors.length) {
              Webflow.scroll.on(scroll);
              scroll();
            }
          }
          function select(link) {
            if (link.getAttribute("hreflang")) {
              return;
            }
            var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
            tempLink.href = href;
            if (href.indexOf(":") >= 0) {
              return;
            }
            var $link = $(link);
            if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
              }
              var $section = $(tempLink.hash);
              $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
              });
              return;
            }
            if (href === "#" || href === "") {
              return;
            }
            var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
            setClass($link, linkCurrent, match);
          }
          function scroll() {
            var viewTop = $win.scrollTop();
            var viewHeight = $win.height();
            _.each(anchors, function(anchor) {
              if (anchor.link.attr("hreflang")) {
                return;
              }
              var $link = anchor.link;
              var $section = anchor.sec;
              var top = $section.offset().top;
              var height = $section.outerHeight();
              var offset = viewHeight * 0.5;
              var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
              if (anchor.active === active) {
                return;
              }
              anchor.active = active;
              setClass($link, linkCurrent, active);
            });
          }
          function setClass($elem, className, add) {
            var exists = $elem.hasClass(className);
            if (add && exists) {
              return;
            }
            if (!add && !exists) {
              return;
            }
            add ? $elem.addClass(className) : $elem.removeClass(className);
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
    var require_webflow_scroll = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("scroll", module.exports = function($) {
          var NS_EVENTS = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          };
          var loc = window.location;
          var history = inIframe() ? null : window.history;
          var $win = $(window);
          var $doc = $(document);
          var $body = $(document.body);
          var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
            window.setTimeout(fn, 15);
          };
          var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
          var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
          var emptyHrefSelector = 'a[href="#"]';
          var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
          var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
          var focusStylesEl = document.createElement("style");
          focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
          function inIframe() {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return true;
            }
          }
          var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
          function linksToCurrentPage(link) {
            return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
          }
          const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function reducedMotionEnabled() {
            return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
          }
          function setFocusable($el, action) {
            var initialTabindex;
            switch (action) {
              case "add":
                initialTabindex = $el.attr("tabindex");
                if (initialTabindex) {
                  $el.attr("data-wf-tabindex-swap", initialTabindex);
                } else {
                  $el.attr("tabindex", "-1");
                }
                break;
              case "remove":
                initialTabindex = $el.attr("data-wf-tabindex-swap");
                if (initialTabindex) {
                  $el.attr("tabindex", initialTabindex);
                  $el.removeAttr("data-wf-tabindex-swap");
                } else {
                  $el.removeAttr("tabindex");
                }
                break;
            }
            $el.toggleClass("wf-force-outline-none", action === "add");
          }
          function validateScroll(evt) {
            var target = evt.currentTarget;
            if (
              // Bail if in Designer
              Webflow.env("design") || // Ignore links being used by jQuery mobile
              window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
            ) {
              return;
            }
            var hash = linksToCurrentPage(target) ? target.hash : "";
            if (hash === "")
              return;
            var $el = $(hash);
            if (!$el.length) {
              return;
            }
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            updateHistory(hash, evt);
            window.setTimeout(function() {
              scroll($el, function setFocus() {
                setFocusable($el, "add");
                $el.get(0).focus({
                  preventScroll: true
                });
                setFocusable($el, "remove");
              });
            }, evt ? 0 : 300);
          }
          function updateHistory(hash) {
            if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
            !(Webflow.env.chrome && loc.protocol === "file:")) {
              var oldHash = history.state && history.state.hash;
              if (oldHash !== hash) {
                history.pushState({
                  hash
                }, "", hash);
              }
            }
          }
          function scroll($targetEl, cb) {
            var start = $win.scrollTop();
            var end = calculateScrollEndPosition($targetEl);
            if (start === end)
              return;
            var duration = calculateScrollDuration($targetEl, start, end);
            var clock = Date.now();
            var step = function() {
              var elapsed = Date.now() - clock;
              window.scroll(0, getY(start, end, elapsed, duration));
              if (elapsed <= duration) {
                animate(step);
              } else if (typeof cb === "function") {
                cb();
              }
            };
            animate(step);
          }
          function calculateScrollEndPosition($targetEl) {
            var $header = $(headerSelector);
            var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
            var end = $targetEl.offset().top - offsetY;
            if ($targetEl.data("scroll") === "mid") {
              var available = $win.height() - offsetY;
              var elHeight = $targetEl.outerHeight();
              if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
              }
            }
            return end;
          }
          function calculateScrollDuration($targetEl, start, end) {
            if (reducedMotionEnabled())
              return 0;
            var mult = 1;
            $body.add($targetEl).each(function(_, el) {
              var time = parseFloat(el.getAttribute("data-scroll-time"));
              if (!isNaN(time) && time >= 0) {
                mult = time;
              }
            });
            return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
          }
          function getY(start, end, elapsed, duration) {
            if (elapsed > duration) {
              return end;
            }
            return start + (end - start) * ease(elapsed / duration);
          }
          function ease(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          }
          function ready() {
            var {
              WF_CLICK_EMPTY,
              WF_CLICK_SCROLL
            } = NS_EVENTS;
            $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
            $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
              e.preventDefault();
            });
            document.head.insertBefore(focusStylesEl, document.head.firstChild);
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
    var require_webflow_touch = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("touch", module.exports = function($) {
          var api = {};
          var getSelection = window.getSelection;
          $.event.special.tap = {
            bindType: "click",
            delegateType: "click"
          };
          api.init = function(el) {
            el = typeof el === "string" ? $(el).get(0) : el;
            return el ? new Touch(el) : null;
          };
          function Touch(el) {
            var active = false;
            var useTouch = false;
            var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
            var startX;
            var lastX;
            el.addEventListener("touchstart", start, false);
            el.addEventListener("touchmove", move, false);
            el.addEventListener("touchend", end, false);
            el.addEventListener("touchcancel", cancel, false);
            el.addEventListener("mousedown", start, false);
            el.addEventListener("mousemove", move, false);
            el.addEventListener("mouseup", end, false);
            el.addEventListener("mouseout", cancel, false);
            function start(evt) {
              var touches = evt.touches;
              if (touches && touches.length > 1) {
                return;
              }
              active = true;
              if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
              } else {
                startX = evt.clientX;
              }
              lastX = startX;
            }
            function move(evt) {
              if (!active) {
                return;
              }
              if (useTouch && evt.type === "mousemove") {
                evt.preventDefault();
                evt.stopPropagation();
                return;
              }
              var touches = evt.touches;
              var x = touches ? touches[0].clientX : evt.clientX;
              var velocityX = x - lastX;
              lastX = x;
              if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
                triggerEvent("swipe", evt, {
                  direction: velocityX > 0 ? "right" : "left"
                });
                cancel();
              }
            }
            function end(evt) {
              if (!active) {
                return;
              }
              active = false;
              if (useTouch && evt.type === "mouseup") {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
              }
            }
            function cancel() {
              active = false;
            }
            function destroy() {
              el.removeEventListener("touchstart", start, false);
              el.removeEventListener("touchmove", move, false);
              el.removeEventListener("touchend", end, false);
              el.removeEventListener("touchcancel", cancel, false);
              el.removeEventListener("mousedown", start, false);
              el.removeEventListener("mousemove", move, false);
              el.removeEventListener("mouseup", end, false);
              el.removeEventListener("mouseout", cancel, false);
              el = null;
            }
            this.destroy = destroy;
          }
          function triggerEvent(type, evt, data) {
            var newEvent = $.Event(type, {
              originalEvent: evt
            });
            $(evt.target).trigger(newEvent, data);
          }
          api.instance = api.init(document);
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms-hosted.js
    var require_webflow_forms_hosted = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms-hosted.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = hostedSubmitWebflow;
        function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
          return function(data) {
            reset(data);
            var form = data.form;
            var payload = {
              name: form.attr("data-name") || form.attr("name") || "Untitled Form",
              pageId: form.attr("data-wf-page-id") || "",
              elementId: form.attr("data-wf-element-id") || "",
              source: loc.href,
              test: Webflow.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
              trackingCookies: collectEnterpriseTrackingCookies()
            };
            const wfFlow = form.attr("data-wf-flow");
            if (wfFlow) {
              payload.wfFlow = wfFlow;
            }
            preventDefault(data);
            var status = findFields(form, payload.fields);
            if (status) {
              return alert(status);
            }
            payload.fileUploads = findFileUploads(form);
            disableBtn(data);
            if (!siteId) {
              afterSubmit(data);
              return;
            }
            $.ajax({
              url: formUrl,
              type: "POST",
              data: payload,
              dataType: "json",
              crossDomain: true
            }).done(function(response) {
              if (response && response.code === 200) {
                data.success = true;
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          };
        }
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms.js
    var require_webflow_forms = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("forms", module.exports = function($, _) {
          var api = {};
          var $doc = $(document);
          var $forms;
          var loc = window.location;
          var retro = window.XDomainRequest && !window.atob;
          var namespace = ".w-form";
          var siteId;
          var emailField = /e(-)?mail/i;
          var emailValue = /^\S+@\S+$/;
          var alert = window.alert;
          var inApp = Webflow.env();
          var listening;
          var formUrl;
          var signFileUrl;
          var chimpRegex = /list-manage[1-9]?.com/i;
          var disconnected = _.debounce(function() {
            alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
          }, 100);
          api.ready = api.design = api.preview = function() {
            init();
            if (!inApp && !listening) {
              addListeners();
            }
          };
          function init() {
            siteId = $("html").attr("data-wf-site");
            formUrl = "https://webflow.com/api/v1/form/" + siteId;
            if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
              formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
            }
            signFileUrl = `${formUrl}/signFile`;
            $forms = $(namespace + " form");
            if (!$forms.length) {
              return;
            }
            $forms.each(build);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                form: $el
              });
            }
            reset(data);
            var wrap = $el.closest("div.w-form");
            data.done = wrap.find("> .w-form-done");
            data.fail = wrap.find("> .w-form-fail");
            data.fileUploads = wrap.find(".w-file-upload");
            data.fileUploads.each(function(j) {
              initFileUpload(j, data);
            });
            var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
            if (!data.done.attr("aria-label")) {
              data.form.attr("aria-label", formName);
            }
            data.done.attr("tabindex", "-1");
            data.done.attr("role", "region");
            if (!data.done.attr("aria-label")) {
              data.done.attr("aria-label", formName + " success");
            }
            data.fail.attr("tabindex", "-1");
            data.fail.attr("role", "region");
            if (!data.fail.attr("aria-label")) {
              data.fail.attr("aria-label", formName + " failure");
            }
            var action = data.action = $el.attr("action");
            data.handler = null;
            data.redirect = $el.attr("data-redirect");
            if (chimpRegex.test(action)) {
              data.handler = submitMailChimp;
              return;
            }
            if (action) {
              return;
            }
            if (siteId) {
              data.handler = false ? exportedSubmitWebflow : (() => {
                const hostedSubmitHandler = require_webflow_forms_hosted().default;
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
              })();
              return;
            }
            disconnected();
          }
          function addListeners() {
            listening = true;
            $doc.on("submit", namespace + " form", function(evt) {
              var data = $.data(this, namespace);
              if (data.handler) {
                data.evt = evt;
                data.handler(data);
              }
            });
            const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
            const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
            const CHECKED_CLASS = "w--redirected-checked";
            const FOCUSED_CLASS = "w--redirected-focus";
            const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
            const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
            const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
            $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
              $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
            });
            $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
              $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
              const $target = $(evt.target);
              if (!$target.hasClass("w-radio-input")) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
              }
            });
            CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
              $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
              });
              $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
              });
            });
          }
          function reset(data) {
            var btn = data.btn = data.form.find(':input[type="submit"]');
            data.wait = data.btn.attr("data-wait") || null;
            data.success = false;
            btn.prop("disabled", false);
            data.label && btn.val(data.label);
          }
          function disableBtn(data) {
            var btn = data.btn;
            var wait = data.wait;
            btn.prop("disabled", true);
            if (wait) {
              data.label = btn.val();
              btn.val(wait);
            }
          }
          function findFields(form, result) {
            var status = null;
            result = result || {};
            form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
              var field = $(el);
              var type = field.attr("type");
              var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
              name = encodeURIComponent(name);
              var value = field.val();
              if (type === "checkbox") {
                value = field.is(":checked");
              } else if (type === "radio") {
                if (result[name] === null || typeof result[name] === "string") {
                  return;
                }
                value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
              }
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
              status = status || getStatus(field, type, name, value);
            });
            return status;
          }
          function findFileUploads(form) {
            var result = {};
            form.find(':input[type="file"]').each(function(i, el) {
              var field = $(el);
              var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
              var value = field.attr("data-value");
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
            });
            return result;
          }
          const trackingCookieNameMap = {
            _mkto_trk: "marketo"
            // __hstc: 'hubspot',
          };
          function collectEnterpriseTrackingCookies() {
            const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
              const splitCookie = cookie.split("=");
              const name = splitCookie[0];
              if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join("=");
                acc[mappedName] = value;
              }
              return acc;
            }, {});
            return cookies;
          }
          function getStatus(field, type, name, value) {
            var status = null;
            if (type === "password") {
              status = "Passwords cannot be submitted.";
            } else if (field.attr("required")) {
              if (!value) {
                status = "Please fill out the required field: " + name;
              } else if (emailField.test(field.attr("type"))) {
                if (!emailValue.test(value)) {
                  status = "Please enter a valid email address for: " + name;
                }
              }
            } else if (name === "g-recaptcha-response" && !value) {
              status = "Please confirm you\u2019re not a robot.";
            }
            return status;
          }
          function exportedSubmitWebflow(data) {
            preventDefault(data);
            afterSubmit(data);
          }
          function submitMailChimp(data) {
            reset(data);
            var form = data.form;
            var payload = {};
            if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
              form.attr("method", "post");
              return;
            }
            preventDefault(data);
            var status = findFields(form, payload);
            if (status) {
              return alert(status);
            }
            disableBtn(data);
            var fullName;
            _.each(payload, function(value, key) {
              if (emailField.test(key)) {
                payload.EMAIL = value;
              }
              if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
              }
              if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
              }
              if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
              }
            });
            if (fullName && !payload.FNAME) {
              fullName = fullName.split(" ");
              payload.FNAME = fullName[0];
              payload.LNAME = payload.LNAME || fullName[1];
            }
            var url = data.action.replace("/post?", "/post-json?") + "&c=?";
            var userId = url.indexOf("u=") + 2;
            userId = url.substring(userId, url.indexOf("&", userId));
            var listId = url.indexOf("id=") + 3;
            listId = url.substring(listId, url.indexOf("&", listId));
            payload["b_" + userId + "_" + listId] = "";
            $.ajax({
              url,
              data: payload,
              dataType: "jsonp"
            }).done(function(resp) {
              data.success = resp.result === "success" || /already/.test(resp.msg);
              if (!data.success) {
                console.info("MailChimp error: " + resp.msg);
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          }
          function afterSubmit(data) {
            var form = data.form;
            var redirect = data.redirect;
            var success = data.success;
            if (success && redirect) {
              Webflow.location(redirect);
              return;
            }
            data.done.toggle(success);
            data.fail.toggle(!success);
            if (success) {
              data.done.focus();
            } else {
              data.fail.focus();
            }
            form.toggle(!success);
            reset(data);
          }
          function preventDefault(data) {
            data.evt && data.evt.preventDefault();
            data.evt = null;
          }
          function initFileUpload(i, form) {
            if (!form.fileUploads || !form.fileUploads[i]) {
              return;
            }
            var file;
            var $el = $(form.fileUploads[i]);
            var $defaultWrap = $el.find("> .w-file-upload-default");
            var $uploadingWrap = $el.find("> .w-file-upload-uploading");
            var $successWrap = $el.find("> .w-file-upload-success");
            var $errorWrap = $el.find("> .w-file-upload-error");
            var $input = $defaultWrap.find(".w-file-upload-input");
            var $label = $defaultWrap.find(".w-file-upload-label");
            var $labelChildren = $label.children();
            var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
            var $fileEl = $successWrap.find(".w-file-upload-file");
            var $removeEl = $successWrap.find(".w-file-remove-link");
            var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
            var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
            var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
            var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
            if (!inApp) {
              $label.on("click keydown", function(e) {
                if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
                $input.click();
              });
            }
            $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
            $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
            if (!inApp) {
              $removeEl.on("click keydown", function(e) {
                if (e.type === "keydown") {
                  if (e.which !== 13 && e.which !== 32) {
                    return;
                  }
                  e.preventDefault();
                }
                $input.removeAttr("data-value");
                $input.val("");
                $fileNameEl.html("");
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
              });
              $input.on("change", function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                  return;
                }
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                $fileNameEl.text(file.name);
                if (!isUploading()) {
                  disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
              });
              var height = $label.outerHeight();
              $input.height(height);
              $input.width(1);
            } else {
              $input.on("click", function(e) {
                e.preventDefault();
              });
              $label.on("click", function(e) {
                e.preventDefault();
              });
              $labelChildren.on("click", function(e) {
                e.preventDefault();
              });
            }
            function parseError(err) {
              var errorMsg = err.responseJSON && err.responseJSON.msg;
              var userError = genericErrMsg;
              if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
                userError = typeErrMsg;
              } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
                userError = sizeErrMsg;
              }
              $errorMsgEl.text(userError);
              $input.removeAttr("data-value");
              $input.val("");
              $uploadingWrap.toggle(false);
              $defaultWrap.toggle(true);
              $errorWrap.toggle(true);
              $errorWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function afterSign(err, data) {
              if (err) {
                return parseError(err);
              }
              var fileName = data.fileName;
              var postData = data.postData;
              var fileId = data.fileId;
              var s3Url = data.s3Url;
              $input.attr("data-value", fileId);
              uploadS3(s3Url, postData, file, fileName, afterUpload);
            }
            function afterUpload(err) {
              if (err) {
                return parseError(err);
              }
              $uploadingWrap.toggle(false);
              $successWrap.css("display", "inline-block");
              $successWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function isUploading() {
              var uploads = form.fileUploads && form.fileUploads.toArray() || [];
              return uploads.some(function(value) {
                return value.uploading;
              });
            }
          }
          function signFile(file, cb) {
            var payload = new URLSearchParams({
              name: file.name,
              size: file.size
            });
            $.ajax({
              type: "GET",
              url: `${signFileUrl}?${payload}`,
              crossDomain: true
            }).done(function(data) {
              cb(null, data);
            }).fail(function(err) {
              cb(err);
            });
          }
          function uploadS3(url, data, file, fileName, cb) {
            var formData = new FormData();
            for (var k in data) {
              formData.append(k, data[k]);
            }
            formData.append("file", file, fileName);
            $.ajax({
              type: "POST",
              url,
              data: formData,
              processData: false,
              contentType: false
            }).done(function() {
              cb(null);
            }).fail(function(err) {
              cb(err);
            });
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
    var require_webflow_ix_events = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
        "use strict";
        var $ = window.jQuery;
        var api = {};
        var eventQueue = [];
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            el.__wf_intro = null;
          },
          intro: function(i, el) {
            if (el.__wf_intro) {
              return;
            }
            el.__wf_intro = true;
            $(el).triggerHandler(api.types.INTRO);
          },
          outro: function(i, el) {
            if (!el.__wf_intro) {
              return;
            }
            el.__wf_intro = null;
            $(el).triggerHandler(api.types.OUTRO);
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        api.init = function() {
          var count = eventQueue.length;
          for (var i = 0; i < count; i++) {
            var memo = eventQueue[i];
            memo[0](0, memo[1]);
          }
          eventQueue = [];
          $.extend(api.triggers, eventTriggers);
        };
        api.async = function() {
          for (var key in eventTriggers) {
            var func = eventTriggers[key];
            if (!eventTriggers.hasOwnProperty(key)) {
              continue;
            }
            api.triggers[key] = function(i, el) {
              eventQueue.push([func, el]);
            };
          }
        };
        api.async();
        module.exports = api;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
    var require_webflow_ix2_events = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
        "use strict";
        var IXEvents = require_webflow_ix_events();
        function dispatchCustomEvent(element, eventName) {
          var event = document.createEvent("CustomEvent");
          event.initCustomEvent(eventName, true, true, null);
          element.dispatchEvent(event);
        }
        var $ = window.jQuery;
        var api = {};
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            IXEvents.triggers.reset(i, el);
          },
          intro: function(i, el) {
            IXEvents.triggers.intro(i, el);
            dispatchCustomEvent(el, "COMPONENT_ACTIVE");
          },
          outro: function(i, el) {
            IXEvents.triggers.outro(i, el);
            dispatchCustomEvent(el, "COMPONENT_INACTIVE");
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        $.extend(api.triggers, eventTriggers);
        module.exports = api;
      }
    });
  
    // packages/shared/render/plugins/Navbar/webflow-navbar.js
    var require_webflow_navbar = __commonJS({
      "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var IXEvents = require_webflow_ix2_events();
        var KEY_CODES = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
        };
        Webflow.define("navbar", module.exports = function($, _) {
          var api = {};
          var tram = $.tram;
          var $win = $(window);
          var $doc = $(document);
          var debounce = _.debounce;
          var $body;
          var $navbars;
          var designer;
          var inEditor;
          var inApp = Webflow.env();
          var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
          var namespace = ".w-nav";
          var navbarOpenedButton = "w--open";
          var navbarOpenedDropdown = "w--nav-dropdown-open";
          var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
          var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
          var navbarOpenedLink = "w--nav-link-open";
          var ix = IXEvents.triggers;
          var menuSibling = $();
          api.ready = api.design = api.preview = init;
          api.destroy = function() {
            menuSibling = $();
            removeListeners();
            if ($navbars && $navbars.length) {
              $navbars.each(teardown);
            }
          };
          function init() {
            designer = inApp && Webflow.env("design");
            inEditor = Webflow.env("editor");
            $body = $(document.body);
            $navbars = $doc.find(namespace);
            if (!$navbars.length) {
              return;
            }
            $navbars.each(build);
            removeListeners();
            addListeners();
          }
          function removeListeners() {
            Webflow.resize.off(resizeAll);
          }
          function addListeners() {
            Webflow.resize.on(resizeAll);
          }
          function resizeAll() {
            $navbars.each(resize);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
              });
            }
            data.menu = $el.find(".w-nav-menu");
            data.links = data.menu.find(".w-nav-link");
            data.dropdowns = data.menu.find(".w-dropdown");
            data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
            data.dropdownList = data.menu.find(".w-dropdown-list");
            data.button = $el.find(".w-nav-button");
            data.container = $el.find(".w-container");
            data.overlayContainerId = "w-nav-overlay-" + i;
            data.outside = outside(data);
            var navBrandLink = $el.find(".w-nav-brand");
            if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
              navBrandLink.attr("aria-label", "home");
            }
            data.button.attr("style", "-webkit-user-select: text;");
            if (data.button.attr("aria-label") == null) {
              data.button.attr("aria-label", "menu");
            }
            data.button.attr("role", "button");
            data.button.attr("tabindex", "0");
            data.button.attr("aria-controls", data.overlayContainerId);
            data.button.attr("aria-haspopup", "menu");
            data.button.attr("aria-expanded", "false");
            data.el.off(namespace);
            data.button.off(namespace);
            data.menu.off(namespace);
            configure(data);
            if (designer) {
              removeOverlay(data);
              data.el.on("setting" + namespace, handler(data));
            } else {
              addOverlay(data);
              data.button.on("click" + namespace, toggle(data));
              data.menu.on("click" + namespace, "a", navigate(data));
              data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
              data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
            }
            resize(i, el);
          }
          function teardown(i, el) {
            var data = $.data(el, namespace);
            if (data) {
              removeOverlay(data);
              $.removeData(el, namespace);
            }
          }
          function removeOverlay(data) {
            if (!data.overlay) {
              return;
            }
            close(data, true);
            data.overlay.remove();
            data.overlay = null;
          }
          function addOverlay(data) {
            if (data.overlay) {
              return;
            }
            data.overlay = $(overlay).appendTo(data.el);
            data.overlay.attr("id", data.overlayContainerId);
            data.parent = data.menu.parent();
            close(data, true);
          }
          function configure(data) {
            var config = {};
            var old = data.config || {};
            var animation = config.animation = data.el.attr("data-animation") || "default";
            config.animOver = /^over/.test(animation);
            config.animDirect = /left$/.test(animation) ? -1 : 1;
            if (old.animation !== animation) {
              data.open && _.defer(reopen, data);
            }
            config.easing = data.el.attr("data-easing") || "ease";
            config.easing2 = data.el.attr("data-easing2") || "ease";
            var duration = data.el.attr("data-duration");
            config.duration = duration != null ? Number(duration) : 400;
            config.docHeight = data.el.attr("data-doc-height");
            data.config = config;
          }
          function handler(data) {
            return function(evt, options) {
              options = options || {};
              var winWidth = $win.width();
              configure(data);
              options.open === true && open(data, true);
              options.open === false && close(data, true);
              data.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                  reopen(data);
                }
              });
            };
          }
          function makeToggleButtonKeyboardHandler(data) {
            return function(evt) {
              switch (evt.keyCode) {
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER: {
                  toggle(data)();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (!data.open) {
                    evt.preventDefault();
                    return evt.stopPropagation();
                  }
                  if (evt.keyCode === KEY_CODES.END) {
                    data.selectedIdx = data.links.length - 1;
                  } else {
                    data.selectedIdx = 0;
                  }
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function makeLinksKeyboardHandler(data) {
            return function(evt) {
              if (!data.open) {
                return;
              }
              data.selectedIdx = data.links.index(document.activeElement);
              switch (evt.keyCode) {
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (evt.keyCode === KEY_CODES.END) {
                    data.selectedIdx = data.links.length - 1;
                  } else {
                    data.selectedIdx = 0;
                  }
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data);
                  data.button.focus();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP: {
                  data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN: {
                  data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function focusSelectedLink(data) {
            if (data.links[data.selectedIdx]) {
              var selectedElement = data.links[data.selectedIdx];
              selectedElement.focus();
              navigate(selectedElement);
            }
          }
          function reopen(data) {
            if (!data.open) {
              return;
            }
            close(data, true);
            open(data, true);
          }
          function toggle(data) {
            return debounce(function() {
              data.open ? close(data) : open(data);
            });
          }
          function navigate(data) {
            return function(evt) {
              var link = $(this);
              var href = link.attr("href");
              if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
              }
              if (href && href.indexOf("#") === 0 && data.open) {
                close(data);
              }
            };
          }
          function outside(data) {
            if (data.outside) {
              $doc.off("click" + namespace, data.outside);
            }
            return function(evt) {
              var $target = $(evt.target);
              if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
                return;
              }
              outsideDebounced(data, $target);
            };
          }
          var outsideDebounced = debounce(function(data, $target) {
            if (!data.open) {
              return;
            }
            var menu = $target.closest(".w-nav-menu");
            if (!data.menu.is(menu)) {
              close(data);
            }
          });
          function resize(i, el) {
            var data = $.data(el, namespace);
            var collapsed = data.collapsed = data.button.css("display") !== "none";
            if (data.open && !collapsed && !designer) {
              close(data, true);
            }
            if (data.container.length) {
              var updateEachMax = updateMax(data);
              data.links.each(updateEachMax);
              data.dropdowns.each(updateEachMax);
            }
            if (data.open) {
              setOverlayHeight(data);
            }
          }
          var maxWidth = "max-width";
          function updateMax(data) {
            var containMax = data.container.css(maxWidth);
            if (containMax === "none") {
              containMax = "";
            }
            return function(i, link) {
              link = $(link);
              link.css(maxWidth, "");
              if (link.css(maxWidth) === "none") {
                link.css(maxWidth, containMax);
              }
            };
          }
          function addMenuOpen(i, el) {
            el.setAttribute("data-nav-menu-open", "");
          }
          function removeMenuOpen(i, el) {
            el.removeAttribute("data-nav-menu-open");
          }
          function open(data, immediate) {
            if (data.open) {
              return;
            }
            data.open = true;
            data.menu.each(addMenuOpen);
            data.links.addClass(navbarOpenedLink);
            data.dropdowns.addClass(navbarOpenedDropdown);
            data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
            data.dropdownList.addClass(navbarOpenedDropdownList);
            data.button.addClass(navbarOpenedButton);
            var config = data.config;
            var animation = config.animation;
            if (animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            var bodyHeight = setOverlayHeight(data);
            var menuHeight = data.menu.outerHeight(true);
            var menuWidth = data.menu.outerWidth(true);
            var navHeight = data.el.height();
            var navbarEl = data.el[0];
            resize(0, navbarEl);
            ix.intro(0, navbarEl);
            Webflow.redraw.up();
            if (!designer) {
              $doc.on("click" + namespace, data.outside);
            }
            if (immediate) {
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing;
            if (data.overlay) {
              menuSibling = data.menu.prev();
              data.overlay.show().append(data.menu);
            }
            if (config.animOver) {
              tram(data.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
              }).start({
                x: 0
              }).then(complete);
              data.overlay && data.overlay.width(menuWidth);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data.menu).add(transConfig).set({
              y: -offsetY
            }).start({
              y: 0
            }).then(complete);
            function complete() {
              data.button.attr("aria-expanded", "true");
            }
          }
          function setOverlayHeight(data) {
            var config = data.config;
            var bodyHeight = config.docHeight ? $doc.height() : $body.height();
            if (config.animOver) {
              data.menu.height(bodyHeight);
            } else if (data.el.css("position") !== "fixed") {
              bodyHeight -= data.el.outerHeight(true);
            }
            data.overlay && data.overlay.height(bodyHeight);
            return bodyHeight;
          }
          function close(data, immediate) {
            if (!data.open) {
              return;
            }
            data.open = false;
            data.button.removeClass(navbarOpenedButton);
            var config = data.config;
            if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            ix.outro(0, data.el[0]);
            $doc.off("click" + namespace, data.outside);
            if (immediate) {
              tram(data.menu).stop();
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing2;
            var menuHeight = data.menu.outerHeight(true);
            var menuWidth = data.menu.outerWidth(true);
            var navHeight = data.el.height();
            if (config.animOver) {
              tram(data.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
              }).then(complete);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data.menu).add(transConfig).start({
              y: -offsetY
            }).then(complete);
            function complete() {
              data.menu.height("");
              tram(data.menu).set({
                x: 0,
                y: 0
              });
              data.menu.each(removeMenuOpen);
              data.links.removeClass(navbarOpenedLink);
              data.dropdowns.removeClass(navbarOpenedDropdown);
              data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
              data.dropdownList.removeClass(navbarOpenedDropdownList);
              if (data.overlay && data.overlay.children().length) {
                menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                data.overlay.attr("style", "").hide();
              }
              data.el.triggerHandler("w-close");
              data.button.attr("aria-expanded", "false");
            }
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Slider/webflow-slider.js
    var require_webflow_slider = __commonJS({
      "packages/shared/render/plugins/Slider/webflow-slider.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var IXEvents = require_webflow_ix2_events();
        var KEY_CODES = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
        };
        var FOCUSABLE_SELECTOR = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Webflow.define("slider", module.exports = function($, _) {
          var api = {};
          var tram = $.tram;
          var $doc = $(document);
          var $sliders;
          var designer;
          var inApp = Webflow.env();
          var namespace = ".w-slider";
          var dot = '<div class="w-slider-dot" data-wf-ignore />';
          var ariaLiveLabelHtml = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />';
          var forceShow = "w-slider-force-show";
          var ix = IXEvents.triggers;
          var fallback;
          var inRedraw = false;
          api.ready = function() {
            designer = Webflow.env("design");
            init();
          };
          api.design = function() {
            designer = true;
            setTimeout(init, 1e3);
          };
          api.preview = function() {
            designer = false;
            init();
          };
          api.redraw = function() {
            inRedraw = true;
            init();
            inRedraw = false;
          };
          api.destroy = removeListeners;
          function init() {
            $sliders = $doc.find(namespace);
            if (!$sliders.length) {
              return;
            }
            $sliders.each(build);
            if (fallback) {
              return;
            }
            removeListeners();
            addListeners();
          }
          function removeListeners() {
            Webflow.resize.off(renderAll);
            Webflow.redraw.off(api.redraw);
          }
          function addListeners() {
            Webflow.resize.on(renderAll);
            Webflow.redraw.on(api.redraw);
          }
          function renderAll() {
            $sliders.filter(":visible").each(render);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                index: 0,
                depth: 1,
                hasFocus: {
                  keyboard: false,
                  mouse: false
                },
                el: $el,
                config: {}
              });
            }
            data.mask = $el.children(".w-slider-mask");
            data.left = $el.children(".w-slider-arrow-left");
            data.right = $el.children(".w-slider-arrow-right");
            data.nav = $el.children(".w-slider-nav");
            data.slides = data.mask.children(".w-slide");
            data.slides.each(ix.reset);
            if (inRedraw) {
              data.maskWidth = 0;
            }
            if ($el.attr("role") === void 0) {
              $el.attr("role", "region");
            }
            if ($el.attr("aria-label") === void 0) {
              $el.attr("aria-label", "carousel");
            }
            var slideViewId = data.mask.attr("id");
            if (!slideViewId) {
              slideViewId = "w-slider-mask-" + i;
              data.mask.attr("id", slideViewId);
            }
            if (!designer && !data.ariaLiveLabel) {
              data.ariaLiveLabel = $(ariaLiveLabelHtml).appendTo(data.mask);
            }
            data.left.attr("role", "button");
            data.left.attr("tabindex", "0");
            data.left.attr("aria-controls", slideViewId);
            if (data.left.attr("aria-label") === void 0) {
              data.left.attr("aria-label", "previous slide");
            }
            data.right.attr("role", "button");
            data.right.attr("tabindex", "0");
            data.right.attr("aria-controls", slideViewId);
            if (data.right.attr("aria-label") === void 0) {
              data.right.attr("aria-label", "next slide");
            }
            if (!tram.support.transform) {
              data.left.hide();
              data.right.hide();
              data.nav.hide();
              fallback = true;
              return;
            }
            data.el.off(namespace);
            data.left.off(namespace);
            data.right.off(namespace);
            data.nav.off(namespace);
            configure(data);
            if (designer) {
              data.el.on("setting" + namespace, handler(data));
              stopTimer(data);
              data.hasTimer = false;
            } else {
              data.el.on("swipe" + namespace, handler(data));
              data.left.on("click" + namespace, previousFunction(data));
              data.right.on("click" + namespace, next(data));
              data.left.on("keydown" + namespace, keyboardSlideButtonsFunction(data, previousFunction));
              data.right.on("keydown" + namespace, keyboardSlideButtonsFunction(data, next));
              data.nav.on("keydown" + namespace, "> div", handler(data));
              if (data.config.autoplay && !data.hasTimer) {
                data.hasTimer = true;
                data.timerCount = 1;
                startTimer(data);
              }
              data.el.on("mouseenter" + namespace, hasFocus(data, true, "mouse"));
              data.el.on("focusin" + namespace, hasFocus(data, true, "keyboard"));
              data.el.on("mouseleave" + namespace, hasFocus(data, false, "mouse"));
              data.el.on("focusout" + namespace, hasFocus(data, false, "keyboard"));
            }
            data.nav.on("click" + namespace, "> div", handler(data));
            if (!inApp) {
              data.mask.contents().filter(function() {
                return this.nodeType === 3;
              }).remove();
            }
            var $elHidden = $el.filter(":hidden");
            $elHidden.addClass(forceShow);
            var $elHiddenParents = $el.parents(":hidden");
            $elHiddenParents.addClass(forceShow);
            if (!inRedraw) {
              render(i, el);
            }
            $elHidden.removeClass(forceShow);
            $elHiddenParents.removeClass(forceShow);
          }
          function configure(data) {
            var config = {};
            config.crossOver = 0;
            config.animation = data.el.attr("data-animation") || "slide";
            if (config.animation === "outin") {
              config.animation = "cross";
              config.crossOver = 0.5;
            }
            config.easing = data.el.attr("data-easing") || "ease";
            var duration = data.el.attr("data-duration");
            config.duration = duration != null ? parseInt(duration, 10) : 500;
            if (isAttrTrue(data.el.attr("data-infinite"))) {
              config.infinite = true;
            }
            if (isAttrTrue(data.el.attr("data-disable-swipe"))) {
              config.disableSwipe = true;
            }
            if (isAttrTrue(data.el.attr("data-hide-arrows"))) {
              config.hideArrows = true;
            } else if (data.config.hideArrows) {
              data.left.show();
              data.right.show();
            }
            if (isAttrTrue(data.el.attr("data-autoplay"))) {
              config.autoplay = true;
              config.delay = parseInt(data.el.attr("data-delay"), 10) || 2e3;
              config.timerMax = parseInt(data.el.attr("data-autoplay-limit"), 10);
              var touchEvents = "mousedown" + namespace + " touchstart" + namespace;
              if (!designer) {
                data.el.off(touchEvents).one(touchEvents, function() {
                  stopTimer(data);
                });
              }
            }
            var arrowWidth = data.right.width();
            config.edge = arrowWidth ? arrowWidth + 40 : 100;
            data.config = config;
          }
          function isAttrTrue(value) {
            return value === "1" || value === "true";
          }
          function hasFocus(data, focusIn, eventType) {
            return function(evt) {
              if (!focusIn) {
                if ($.contains(data.el.get(0), evt.relatedTarget)) {
                  return;
                }
                data.hasFocus[eventType] = focusIn;
                if (data.hasFocus.mouse && eventType === "keyboard" || data.hasFocus.keyboard && eventType === "mouse") {
                  return;
                }
              } else {
                data.hasFocus[eventType] = focusIn;
              }
              if (focusIn) {
                data.ariaLiveLabel.attr("aria-live", "polite");
                if (data.hasTimer) {
                  stopTimer(data);
                }
              } else {
                data.ariaLiveLabel.attr("aria-live", "off");
                if (data.hasTimer) {
                  startTimer(data);
                }
              }
              return;
            };
          }
          function keyboardSlideButtonsFunction(data, directionFunction) {
            return function(evt) {
              switch (evt.keyCode) {
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER: {
                  directionFunction(data)();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function previousFunction(data) {
            return function() {
              change(data, {
                index: data.index - 1,
                vector: -1
              });
            };
          }
          function next(data) {
            return function() {
              change(data, {
                index: data.index + 1,
                vector: 1
              });
            };
          }
          function select(data, value) {
            var found = null;
            if (value === data.slides.length) {
              init();
              layout(data);
            }
            _.each(data.anchors, function(anchor, index) {
              $(anchor.els).each(function(i, el) {
                if ($(el).index() === value) {
                  found = index;
                }
              });
            });
            if (found != null) {
              change(data, {
                index: found,
                immediate: true
              });
            }
          }
          function startTimer(data) {
            stopTimer(data);
            var config = data.config;
            var timerMax = config.timerMax;
            if (timerMax && data.timerCount++ > timerMax) {
              return;
            }
            data.timerId = window.setTimeout(function() {
              if (data.timerId == null || designer) {
                return;
              }
              next(data)();
              startTimer(data);
            }, config.delay);
          }
          function stopTimer(data) {
            window.clearTimeout(data.timerId);
            data.timerId = null;
          }
          function handler(data) {
            return function(evt, options) {
              options = options || {};
              var config = data.config;
              if (designer && evt.type === "setting") {
                if (options.select === "prev") {
                  return previousFunction(data)();
                }
                if (options.select === "next") {
                  return next(data)();
                }
                configure(data);
                layout(data);
                if (options.select == null) {
                  return;
                }
                select(data, options.select);
                return;
              }
              if (evt.type === "swipe") {
                if (config.disableSwipe) {
                  return;
                }
                if (Webflow.env("editor")) {
                  return;
                }
                if (options.direction === "left") {
                  return next(data)();
                }
                if (options.direction === "right") {
                  return previousFunction(data)();
                }
                return;
              }
              if (data.nav.has(evt.target).length) {
                var index = $(evt.target).index();
                if (evt.type === "click") {
                  change(data, {
                    index
                  });
                }
                if (evt.type === "keydown") {
                  switch (evt.keyCode) {
                    case KEY_CODES.ENTER:
                    case KEY_CODES.SPACE: {
                      change(data, {
                        index
                      });
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.ARROW_LEFT:
                    case KEY_CODES.ARROW_UP: {
                      focusDot(data.nav, Math.max(index - 1, 0));
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.ARROW_RIGHT:
                    case KEY_CODES.ARROW_DOWN: {
                      focusDot(data.nav, Math.min(index + 1, data.pages));
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.HOME: {
                      focusDot(data.nav, 0);
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.END: {
                      focusDot(data.nav, data.pages);
                      evt.preventDefault();
                      break;
                    }
                    default: {
                      return;
                    }
                  }
                }
              }
            };
          }
          function focusDot($nav, index) {
            var $active = $nav.children().eq(index).focus();
            $nav.children().not($active);
          }
          function change(data, options) {
            options = options || {};
            var config = data.config;
            var anchors = data.anchors;
            data.previous = data.index;
            var index = options.index;
            var shift = {};
            if (index < 0) {
              index = anchors.length - 1;
              if (config.infinite) {
                shift.x = -data.endX;
                shift.from = 0;
                shift.to = anchors[0].width;
              }
            } else if (index >= anchors.length) {
              index = 0;
              if (config.infinite) {
                shift.x = anchors[anchors.length - 1].width;
                shift.from = -anchors[anchors.length - 1].x;
                shift.to = shift.from - shift.x;
              }
            }
            data.index = index;
            var $active = data.nav.children().eq(index).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
            data.nav.children().not($active).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1");
            if (config.hideArrows) {
              data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
              data.index === 0 ? data.left.hide() : data.left.show();
            }
            var lastOffsetX = data.offsetX || 0;
            var offsetX = data.offsetX = -anchors[data.index].x;
            var resetConfig = {
              x: offsetX,
              opacity: 1,
              visibility: ""
            };
            var targets = $(anchors[data.index].els);
            var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
            var others = data.slides.not(targets);
            var animation = config.animation;
            var easing = config.easing;
            var duration = Math.round(config.duration);
            var vector = options.vector || (data.index > data.previous ? 1 : -1);
            var fadeRule = "opacity " + duration + "ms " + easing;
            var slideRule = "transform " + duration + "ms " + easing;
            targets.find(FOCUSABLE_SELECTOR).removeAttr("tabindex");
            targets.removeAttr("aria-hidden");
            targets.find("*").removeAttr("aria-hidden");
            others.find(FOCUSABLE_SELECTOR).attr("tabindex", "-1");
            others.attr("aria-hidden", "true");
            others.find("*").attr("aria-hidden", "true");
            if (!designer) {
              targets.each(ix.intro);
              others.each(ix.outro);
            }
            if (options.immediate && !inRedraw) {
              tram(targets).set(resetConfig);
              resetOthers();
              return;
            }
            if (data.index === data.previous) {
              return;
            }
            if (!designer) {
              data.ariaLiveLabel.text(`Slide ${index + 1} of ${anchors.length}.`);
            }
            if (animation === "cross") {
              var reduced = Math.round(duration - duration * config.crossOver);
              var wait = Math.round(duration - reduced);
              fadeRule = "opacity " + reduced + "ms " + easing;
              tram(prevTargs).set({
                visibility: ""
              }).add(fadeRule).start({
                opacity: 0
              });
              tram(targets).set({
                visibility: "",
                x: offsetX,
                opacity: 0,
                zIndex: data.depth++
              }).add(fadeRule).wait(wait).then({
                opacity: 1
              }).then(resetOthers);
              return;
            }
            if (animation === "fade") {
              tram(prevTargs).set({
                visibility: ""
              }).stop();
              tram(targets).set({
                visibility: "",
                x: offsetX,
                opacity: 0,
                zIndex: data.depth++
              }).add(fadeRule).start({
                opacity: 1
              }).then(resetOthers);
              return;
            }
            if (animation === "over") {
              resetConfig = {
                x: data.endX
              };
              tram(prevTargs).set({
                visibility: ""
              }).stop();
              tram(targets).set({
                visibility: "",
                zIndex: data.depth++,
                x: offsetX + anchors[data.index].width * vector
              }).add(slideRule).start({
                x: offsetX
              }).then(resetOthers);
              return;
            }
            if (config.infinite && shift.x) {
              tram(data.slides.not(prevTargs)).set({
                visibility: "",
                x: shift.x
              }).add(slideRule).start({
                x: offsetX
              });
              tram(prevTargs).set({
                visibility: "",
                x: shift.from
              }).add(slideRule).start({
                x: shift.to
              });
              data.shifted = prevTargs;
            } else {
              if (config.infinite && data.shifted) {
                tram(data.shifted).set({
                  visibility: "",
                  x: lastOffsetX
                });
                data.shifted = null;
              }
              tram(data.slides).set({
                visibility: ""
              }).add(slideRule).start({
                x: offsetX
              });
            }
            function resetOthers() {
              targets = $(anchors[data.index].els);
              others = data.slides.not(targets);
              if (animation !== "slide") {
                resetConfig.visibility = "hidden";
              }
              tram(others).set(resetConfig);
            }
          }
          function render(i, el) {
            var data = $.data(el, namespace);
            if (!data) {
              return;
            }
            if (maskChanged(data)) {
              return layout(data);
            }
            if (designer && slidesChanged(data)) {
              layout(data);
            }
          }
          function layout(data) {
            var pages = 1;
            var offset = 0;
            var anchor = 0;
            var width = 0;
            var maskWidth = data.maskWidth;
            var threshold = maskWidth - data.config.edge;
            if (threshold < 0) {
              threshold = 0;
            }
            data.anchors = [{
              els: [],
              x: 0,
              width: 0
            }];
            data.slides.each(function(i, el) {
              if (anchor - offset > threshold) {
                pages++;
                offset += maskWidth;
                data.anchors[pages - 1] = {
                  els: [],
                  x: anchor,
                  width: 0
                };
              }
              width = $(el).outerWidth(true);
              anchor += width;
              data.anchors[pages - 1].width += width;
              data.anchors[pages - 1].els.push(el);
              var ariaLabel = i + 1 + " of " + data.slides.length;
              $(el).attr("aria-label", ariaLabel);
              $(el).attr("role", "group");
            });
            data.endX = anchor;
            if (designer) {
              data.pages = null;
            }
            if (data.nav.length && data.pages !== pages) {
              data.pages = pages;
              buildNav(data);
            }
            var index = data.index;
            if (index >= pages) {
              index = pages - 1;
            }
            change(data, {
              immediate: true,
              index
            });
          }
          function buildNav(data) {
            var dots = [];
            var $dot;
            var spacing = data.el.attr("data-nav-spacing");
            if (spacing) {
              spacing = parseFloat(spacing) + "px";
            }
            for (var i = 0, len = data.pages; i < len; i++) {
              $dot = $(dot);
              $dot.attr("aria-label", "Show slide " + (i + 1) + " of " + len).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1");
              if (data.nav.hasClass("w-num")) {
                $dot.text(i + 1);
              }
              if (spacing != null) {
                $dot.css({
                  "margin-left": spacing,
                  "margin-right": spacing
                });
              }
              dots.push($dot);
            }
            data.nav.empty().append(dots);
          }
          function maskChanged(data) {
            var maskWidth = data.mask.width();
            if (data.maskWidth !== maskWidth) {
              data.maskWidth = maskWidth;
              return true;
            }
            return false;
          }
          function slidesChanged(data) {
            var slidesWidth = 0;
            data.slides.each(function(i, el) {
              slidesWidth += $(el).outerWidth(true);
            });
            if (data.slidesWidth !== slidesWidth) {
              data.slidesWidth = slidesWidth;
              return true;
            }
            return false;
          }
          return api;
        });
      }
    });
  
    // <stdin>
    require_webflow_brand();
    require_webflow_edit();
    require_webflow_focus_visible();
    require_webflow_focus();
    require_webflow_links();
    require_webflow_scroll();
    require_webflow_touch();
    require_webflow_forms();
    require_webflow_navbar();
    require_webflow_slider();
  })();
  /*!
   * tram.js v0.8.2-global
   * Cross-browser CSS3 transitions in JavaScript
   * https://github.com/bkwld/tram
   * MIT License
   */
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */  
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
