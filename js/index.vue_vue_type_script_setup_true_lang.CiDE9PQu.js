import { d as defineComponent, g as createElementBlock, f as openBlock, r as ref, s as shallowRef, o as onMounted, I as watch, az as toRaw, R as watchEffect, bK as mergeModels, bL as useModel, aa as onBeforeUnmount, m as createVNode, i as unref, k as normalizeStyle } from "./index.DgCifb3N.js";
import { F as FileAPI } from "./file-api.d1Q42r8I.js";
var e, t, n, r, o, i, a, s, u, l, c, d, f, p, h, g, v, m, y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function b(e5) {
  return e5 && e5.__esModule && Object.prototype.hasOwnProperty.call(e5, "default") ? e5.default : e5;
}
function E(e5) {
  if (Object.prototype.hasOwnProperty.call(e5, "__esModule")) return e5;
  var t2 = e5.default;
  if ("function" == typeof t2) {
    var n2 = function e6() {
      var n3 = false;
      try {
        n3 = this instanceof e6;
      } catch {
      }
      return n3 ? Reflect.construct(t2, arguments, this.constructor) : t2.apply(this, arguments);
    };
    n2.prototype = t2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e5).forEach(function(t3) {
    var r2 = Object.getOwnPropertyDescriptor(e5, t3);
    Object.defineProperty(n2, t3, r2.get ? r2 : { enumerable: true, get: function() {
      return e5[t3];
    } });
  }), n2;
}
function C() {
  return t ? e : (t = 1, e = function(e5) {
    try {
      return !!e5();
    } catch (e6) {
      return true;
    }
  });
}
function D() {
  if (r) return n;
  r = 1;
  var e5 = C();
  return n = !e5(function() {
    var e6 = (function() {
    }).bind();
    return "function" != typeof e6 || e6.hasOwnProperty("prototype");
  });
}
function w() {
  if (i) return o;
  i = 1;
  var e5 = D(), t2 = Function.prototype, n2 = t2.call, r2 = e5 && t2.bind.bind(n2, n2);
  return o = e5 ? r2 : function(e6) {
    return function() {
      return n2.apply(e6, arguments);
    };
  }, o;
}
function S() {
  if (s) return a;
  s = 1;
  var e5 = w(), t2 = e5({}.toString), n2 = e5("".slice);
  return a = function(e6) {
    return n2(t2(e6), 8, -1);
  };
}
function A() {
  if (l) return u;
  l = 1;
  var e5 = w(), t2 = C(), n2 = S(), r2 = Object, o2 = e5("".split);
  return u = t2(function() {
    return !r2("z").propertyIsEnumerable(0);
  }) ? function(e6) {
    return "String" === n2(e6) ? o2(e6, "") : r2(e6);
  } : r2;
}
function x() {
  return d ? c : (d = 1, c = function(e5) {
    return null == e5;
  });
}
function O() {
  if (p) return f;
  p = 1;
  var e5 = x(), t2 = TypeError;
  return f = function(n2) {
    if (e5(n2)) throw new t2("Can't call method on " + n2);
    return n2;
  };
}
function N() {
  if (g) return h;
  g = 1;
  var e5 = A(), t2 = O();
  return h = function(n2) {
    return e5(t2(n2));
  };
}
function B() {
  if (m) return v;
  m = 1;
  var e5 = function(e6) {
    return e6 && e6.Math === Math && e6;
  };
  return v = e5("object" == typeof globalThis && globalThis) || e5("object" == typeof window && window) || e5("object" == typeof self && self) || e5("object" == typeof y && y) || e5("object" == typeof v && v) || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
}
var T, k, F, I, P, _, R, L, M, j, H, z, $, U, V, W, G, q, K, Y, X, Z, J, Q, ee, te, ne, re, oe, ie = { exports: {} };
function ae() {
  return k ? T : (k = 1, T = false);
}
function se() {
  if (I) return F;
  I = 1;
  var e5 = B(), t2 = Object.defineProperty;
  return F = function(n2, r2) {
    try {
      t2(e5, n2, { value: r2, configurable: true, writable: true });
    } catch (t3) {
      e5[n2] = r2;
    }
    return r2;
  };
}
function ue() {
  if (P) return ie.exports;
  P = 1;
  var e5 = ae(), t2 = B(), n2 = se(), r2 = "__core-js_shared__", o2 = ie.exports = t2[r2] || n2(r2, {});
  return (o2.versions || (o2.versions = [])).push({ version: "3.45.1", mode: e5 ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE", source: "https://github.com/zloirock/core-js" }), ie.exports;
}
function le() {
  if (R) return _;
  R = 1;
  var e5 = ue();
  return _ = function(t2, n2) {
    return e5[t2] || (e5[t2] = n2 || {});
  };
}
function ce() {
  if (M) return L;
  M = 1;
  var e5 = O(), t2 = Object;
  return L = function(n2) {
    return t2(e5(n2));
  };
}
function de() {
  if (H) return j;
  H = 1;
  var e5 = w(), t2 = ce(), n2 = e5({}.hasOwnProperty);
  return j = Object.hasOwn || function(e6, r2) {
    return n2(t2(e6), r2);
  };
}
function fe() {
  if ($) return z;
  $ = 1;
  var e5 = w(), t2 = 0, n2 = Math.random(), r2 = e5(1.1.toString);
  return z = function(e6) {
    return "Symbol(" + (void 0 === e6 ? "" : e6) + ")_" + r2(++t2 + n2, 36);
  };
}
function pe() {
  if (G) return W;
  G = 1;
  var e5, t2, n2 = B(), r2 = (function() {
    if (V) return U;
    V = 1;
    var e6 = B().navigator, t3 = e6 && e6.userAgent;
    return U = t3 ? String(t3) : "";
  })(), o2 = n2.process, i2 = n2.Deno, a2 = o2 && o2.versions || i2 && i2.version, s2 = a2 && a2.v8;
  return s2 && (t2 = (e5 = s2.split("."))[0] > 0 && e5[0] < 4 ? 1 : +(e5[0] + e5[1])), !t2 && r2 && (!(e5 = r2.match(/Edge\/(\d+)/)) || e5[1] >= 74) && (e5 = r2.match(/Chrome\/(\d+)/)) && (t2 = +e5[1]), W = t2;
}
function he() {
  if (K) return q;
  K = 1;
  var e5 = pe(), t2 = C(), n2 = B().String;
  return q = !!Object.getOwnPropertySymbols && !t2(function() {
    var t3 = Symbol("symbol detection");
    return !n2(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && e5 && e5 < 41;
  }), q;
}
function ge() {
  if (X) return Y;
  X = 1;
  var e5 = he();
  return Y = e5 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
}
function ve() {
  if (J) return Z;
  J = 1;
  var e5 = B(), t2 = le(), n2 = de(), r2 = fe(), o2 = he(), i2 = ge(), a2 = e5.Symbol, s2 = t2("wks"), u2 = i2 ? a2.for || a2 : a2 && a2.withoutSetter || r2;
  return Z = function(e6) {
    return n2(s2, e6) || (s2[e6] = o2 && n2(a2, e6) ? a2[e6] : u2("Symbol." + e6)), s2[e6];
  };
}
function me() {
  if (ee) return Q;
  ee = 1;
  var e5 = "object" == typeof document && document.all;
  return Q = void 0 === e5 && void 0 !== e5 ? function(t2) {
    return "function" == typeof t2 || t2 === e5;
  } : function(e6) {
    return "function" == typeof e6;
  };
}
function ye() {
  if (ne) return te;
  ne = 1;
  var e5 = me();
  return te = function(t2) {
    return "object" == typeof t2 ? null !== t2 : e5(t2);
  };
}
function be() {
  if (oe) return re;
  oe = 1;
  var e5 = ye(), t2 = String, n2 = TypeError;
  return re = function(r2) {
    if (e5(r2)) return r2;
    throw new n2(t2(r2) + " is not an object");
  };
}
var Ee, Ce, De, we, Se = {};
function Ae() {
  if (Ce) return Ee;
  Ce = 1;
  var e5 = C();
  return Ee = !e5(function() {
    return 7 !== Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  });
}
function xe() {
  if (we) return De;
  we = 1;
  var e5 = Ae(), t2 = C();
  return De = e5 && t2(function() {
    return 42 !== Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype;
  });
}
var Oe, Ne, Be, Te, ke, Fe, Ie, Pe, _e, Re, Le, Me, je, He, ze, $e, Ue, Ve, We, Ge, qe, Ke, Ye, Xe, Ze, Je, Qe, et, tt, nt, rt, ot, it, at, st, ut, lt, ct, dt, ft, pt, ht, gt, vt, mt, yt, bt, Et, Ct, Dt, wt, St, At, xt, Ot, Nt, Bt, Tt, kt, Ft, It, Pt, _t, Rt, Lt = {};
function Mt() {
  if (Ne) return Oe;
  Ne = 1;
  var e5 = B(), t2 = ye(), n2 = e5.document, r2 = t2(n2) && t2(n2.createElement);
  return Oe = function(e6) {
    return r2 ? n2.createElement(e6) : {};
  };
}
function jt() {
  if (Te) return Be;
  Te = 1;
  var e5 = Ae(), t2 = C(), n2 = Mt();
  return Be = !e5 && !t2(function() {
    return 7 !== Object.defineProperty(n2("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
}
function Ht() {
  if (Fe) return ke;
  Fe = 1;
  var e5 = D(), t2 = Function.prototype.call;
  return ke = e5 ? t2.bind(t2) : function() {
    return t2.apply(t2, arguments);
  }, ke;
}
function zt() {
  if (Pe) return Ie;
  Pe = 1;
  var e5 = B(), t2 = me();
  return Ie = function(n2, r2) {
    return arguments.length < 2 ? (o2 = e5[n2], t2(o2) ? o2 : void 0) : e5[n2] && e5[n2][r2];
    var o2;
  }, Ie;
}
function $t() {
  if (Re) return _e;
  Re = 1;
  var e5 = w();
  return _e = e5({}.isPrototypeOf);
}
function Ut() {
  if (Me) return Le;
  Me = 1;
  var e5 = zt(), t2 = me(), n2 = $t(), r2 = ge(), o2 = Object;
  return Le = r2 ? function(e6) {
    return "symbol" == typeof e6;
  } : function(r3) {
    var i2 = e5("Symbol");
    return t2(i2) && n2(i2.prototype, o2(r3));
  };
}
function Vt() {
  if (He) return je;
  He = 1;
  var e5 = String;
  return je = function(t2) {
    try {
      return e5(t2);
    } catch (e6) {
      return "Object";
    }
  };
}
function Wt() {
  if ($e) return ze;
  $e = 1;
  var e5 = me(), t2 = Vt(), n2 = TypeError;
  return ze = function(r2) {
    if (e5(r2)) return r2;
    throw new n2(t2(r2) + " is not a function");
  };
}
function Gt() {
  if (Ve) return Ue;
  Ve = 1;
  var e5 = Wt(), t2 = x();
  return Ue = function(n2, r2) {
    var o2 = n2[r2];
    return t2(o2) ? void 0 : e5(o2);
  }, Ue;
}
function qt() {
  if (Ke) return qe;
  Ke = 1;
  var e5 = Ht(), t2 = ye(), n2 = Ut(), r2 = Gt(), o2 = (function() {
    if (Ge) return We;
    Ge = 1;
    var e6 = Ht(), t3 = me(), n3 = ye(), r3 = TypeError;
    return We = function(o3, i3) {
      var a3, s3;
      if ("string" === i3 && t3(a3 = o3.toString) && !n3(s3 = e6(a3, o3))) return s3;
      if (t3(a3 = o3.valueOf) && !n3(s3 = e6(a3, o3))) return s3;
      if ("string" !== i3 && t3(a3 = o3.toString) && !n3(s3 = e6(a3, o3))) return s3;
      throw new r3("Can't convert object to primitive value");
    }, We;
  })(), i2 = ve(), a2 = TypeError, s2 = i2("toPrimitive");
  return qe = function(i3, u2) {
    if (!t2(i3) || n2(i3)) return i3;
    var l2, c2 = r2(i3, s2);
    if (c2) {
      if (void 0 === u2 && (u2 = "default"), l2 = e5(c2, i3, u2), !t2(l2) || n2(l2)) return l2;
      throw new a2("Can't convert object to primitive value");
    }
    return void 0 === u2 && (u2 = "number"), o2(i3, u2);
  };
}
function Kt() {
  if (Xe) return Ye;
  Xe = 1;
  var e5 = qt(), t2 = Ut();
  return Ye = function(n2) {
    var r2 = e5(n2, "string");
    return t2(r2) ? r2 : r2 + "";
  };
}
function Yt() {
  if (Ze) return Lt;
  Ze = 1;
  var e5 = Ae(), t2 = jt(), n2 = xe(), r2 = be(), o2 = Kt(), i2 = TypeError, a2 = Object.defineProperty, s2 = Object.getOwnPropertyDescriptor, u2 = "enumerable", l2 = "configurable", c2 = "writable";
  return Lt.f = e5 ? n2 ? function(e6, t3, n3) {
    if (r2(e6), t3 = o2(t3), r2(n3), "function" == typeof e6 && "prototype" === t3 && "value" in n3 && c2 in n3 && !n3[c2]) {
      var i3 = s2(e6, t3);
      i3 && i3[c2] && (e6[t3] = n3.value, n3 = { configurable: l2 in n3 ? n3[l2] : i3[l2], enumerable: u2 in n3 ? n3[u2] : i3[u2], writable: false });
    }
    return a2(e6, t3, n3);
  } : a2 : function(e6, n3, s3) {
    if (r2(e6), n3 = o2(n3), r2(s3), t2) try {
      return a2(e6, n3, s3);
    } catch (e7) {
    }
    if ("get" in s3 || "set" in s3) throw new i2("Accessors not supported");
    return "value" in s3 && (e6[n3] = s3.value), e6;
  }, Lt;
}
function Xt() {
  if (tt) return et;
  tt = 1;
  var e5 = (function() {
    if (Qe) return Je;
    Qe = 1;
    var e6 = Math.ceil, t2 = Math.floor;
    return Je = Math.trunc || function(n2) {
      var r2 = +n2;
      return (r2 > 0 ? t2 : e6)(r2);
    }, Je;
  })();
  return et = function(t2) {
    var n2 = +t2;
    return n2 != n2 || 0 === n2 ? 0 : e5(n2);
  };
}
function Zt() {
  if (it) return ot;
  it = 1;
  var e5 = Xt(), t2 = Math.min;
  return ot = function(n2) {
    var r2 = e5(n2);
    return r2 > 0 ? t2(r2, 9007199254740991) : 0;
  };
}
function Jt() {
  if (st) return at;
  st = 1;
  var e5 = Zt();
  return at = function(t2) {
    return e5(t2.length);
  };
}
function Qt() {
  if (lt) return ut;
  lt = 1;
  var e5 = N(), t2 = (function() {
    if (rt) return nt;
    rt = 1;
    var e6 = Xt(), t3 = Math.max, n3 = Math.min;
    return nt = function(r3, o2) {
      var i2 = e6(r3);
      return i2 < 0 ? t3(i2 + o2, 0) : n3(i2, o2);
    }, nt;
  })(), n2 = Jt(), r2 = function(r3) {
    return function(o2, i2, a2) {
      var s2 = e5(o2), u2 = n2(s2);
      if (0 === u2) return !r3 && -1;
      var l2, c2 = t2(a2, u2);
      if (r3 && i2 != i2) {
        for (; u2 > c2; ) if ((l2 = s2[c2++]) != l2) return true;
      } else for (; u2 > c2; c2++) if ((r3 || c2 in s2) && s2[c2] === i2) return r3 || c2 || 0;
      return !r3 && -1;
    };
  };
  return ut = { includes: r2(true), indexOf: r2(false) };
}
function en() {
  return dt ? ct : (dt = 1, ct = {});
}
function tn() {
  if (pt) return ft;
  pt = 1;
  var e5 = w(), t2 = de(), n2 = N(), r2 = Qt().indexOf, o2 = en(), i2 = e5([].push);
  return ft = function(e6, a2) {
    var s2, u2 = n2(e6), l2 = 0, c2 = [];
    for (s2 in u2) !t2(o2, s2) && t2(u2, s2) && i2(c2, s2);
    for (; a2.length > l2; ) t2(u2, s2 = a2[l2++]) && (~r2(c2, s2) || i2(c2, s2));
    return c2;
  }, ft;
}
function nn() {
  return gt ? ht : (gt = 1, ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]);
}
function rn() {
  if (yt) return Se;
  yt = 1;
  var e5 = Ae(), t2 = xe(), n2 = Yt(), r2 = be(), o2 = N(), i2 = (function() {
    if (mt) return vt;
    mt = 1;
    var e6 = tn(), t3 = nn();
    return vt = Object.keys || function(n3) {
      return e6(n3, t3);
    }, vt;
  })();
  return Se.f = e5 && !t2 ? Object.defineProperties : function(e6, t3) {
    r2(e6);
    for (var a2, s2 = o2(t3), u2 = i2(t3), l2 = u2.length, c2 = 0; l2 > c2; ) n2.f(e6, a2 = u2[c2++], s2[a2]);
    return e6;
  }, Se;
}
function on() {
  if (Dt) return Ct;
  Dt = 1;
  var e5 = le(), t2 = fe(), n2 = e5("keys");
  return Ct = function(e6) {
    return n2[e6] || (n2[e6] = t2(e6));
  };
}
function an() {
  if (St) return wt;
  St = 1;
  var e5, t2 = be(), n2 = rn(), r2 = nn(), o2 = en(), i2 = (function() {
    if (Et) return bt;
    Et = 1;
    var e6 = zt();
    return bt = e6("document", "documentElement");
  })(), a2 = Mt(), s2 = on(), u2 = "prototype", l2 = "script", c2 = s2("IE_PROTO"), d2 = function() {
  }, f2 = function(e6) {
    return "<" + l2 + ">" + e6 + "</" + l2 + ">";
  }, p2 = function(e6) {
    e6.write(f2("")), e6.close();
    var t3 = e6.parentWindow.Object;
    return e6 = null, t3;
  }, h2 = function() {
    try {
      e5 = new ActiveXObject("htmlfile");
    } catch (e6) {
    }
    var t3, n3, o3;
    h2 = "undefined" != typeof document ? document.domain && e5 ? p2(e5) : (n3 = a2("iframe"), o3 = "java" + l2 + ":", n3.style.display = "none", i2.appendChild(n3), n3.src = String(o3), (t3 = n3.contentWindow.document).open(), t3.write(f2("document.F=Object")), t3.close(), t3.F) : p2(e5);
    for (var s3 = r2.length; s3--; ) delete h2[u2][r2[s3]];
    return h2();
  };
  return o2[c2] = true, wt = Object.create || function(e6, r3) {
    var o3;
    return null !== e6 ? (d2[u2] = t2(e6), o3 = new d2(), d2[u2] = null, o3[c2] = e6) : o3 = h2(), void 0 === r3 ? o3 : n2.f(o3, r3);
  }, wt;
}
function sn() {
  return Nt ? Ot : (Nt = 1, Ot = {});
}
function un() {
  return Ft ? kt : (Ft = 1, kt = function(e5, t2) {
    return { enumerable: !(1 & e5), configurable: !(2 & e5), writable: !(4 & e5), value: t2 };
  });
}
function ln() {
  if (Pt) return It;
  Pt = 1;
  var e5 = Ae(), t2 = Yt(), n2 = un();
  return It = e5 ? function(e6, r2, o2) {
    return t2.f(e6, r2, n2(1, o2));
  } : function(e6, t3, n3) {
    return e6[t3] = n3, e6;
  };
}
function cn() {
  if (Rt) return _t;
  Rt = 1;
  var e5, t2, n2, r2 = (function() {
    if (Tt) return Bt;
    Tt = 1;
    var e6 = B(), t3 = me(), n3 = e6.WeakMap;
    return Bt = t3(n3) && /native code/.test(String(n3));
  })(), o2 = B(), i2 = ye(), a2 = ln(), s2 = de(), u2 = ue(), l2 = on(), c2 = en(), d2 = "Object already initialized", f2 = o2.TypeError, p2 = o2.WeakMap;
  if (r2 || u2.state) {
    var h2 = u2.state || (u2.state = new p2());
    h2.get = h2.get, h2.has = h2.has, h2.set = h2.set, e5 = function(e6, t3) {
      if (h2.has(e6)) throw new f2(d2);
      return t3.facade = e6, h2.set(e6, t3), t3;
    }, t2 = function(e6) {
      return h2.get(e6) || {};
    }, n2 = function(e6) {
      return h2.has(e6);
    };
  } else {
    var g2 = l2("state");
    c2[g2] = true, e5 = function(e6, t3) {
      if (s2(e6, g2)) throw new f2(d2);
      return t3.facade = e6, a2(e6, g2, t3), t3;
    }, t2 = function(e6) {
      return s2(e6, g2) ? e6[g2] : {};
    }, n2 = function(e6) {
      return s2(e6, g2);
    };
  }
  return _t = { set: e5, get: t2, has: n2, enforce: function(r3) {
    return n2(r3) ? t2(r3) : e5(r3, {});
  }, getterFor: function(e6) {
    return function(n3) {
      var r3;
      if (!i2(n3) || (r3 = t2(n3)).type !== e6) throw new f2("Incompatible receiver, " + e6 + " required");
      return r3;
    };
  } };
}
var dn, fn, pn = {}, hn = {};
function gn() {
  if (fn) return pn;
  fn = 1;
  var e5 = Ae(), t2 = Ht(), n2 = (function() {
    if (dn) return hn;
    dn = 1;
    var e6 = {}.propertyIsEnumerable, t3 = Object.getOwnPropertyDescriptor, n3 = t3 && !e6.call({ 1: 2 }, 1);
    return hn.f = n3 ? function(e7) {
      var n4 = t3(this, e7);
      return !!n4 && n4.enumerable;
    } : e6, hn;
  })(), r2 = un(), o2 = N(), i2 = Kt(), a2 = de(), s2 = jt(), u2 = Object.getOwnPropertyDescriptor;
  return pn.f = e5 ? u2 : function(e6, l2) {
    if (e6 = o2(e6), l2 = i2(l2), s2) try {
      return u2(e6, l2);
    } catch (e7) {
    }
    if (a2(e6, l2)) return r2(!t2(n2.f, e6, l2), e6[l2]);
  }, pn;
}
var vn, mn, yn, bn, En, Cn, Dn, wn = { exports: {} };
function Sn() {
  if (mn) return vn;
  mn = 1;
  var e5 = Ae(), t2 = de(), n2 = Function.prototype, r2 = e5 && Object.getOwnPropertyDescriptor, o2 = t2(n2, "name"), i2 = o2 && "something" === (function() {
  }).name, a2 = o2 && (!e5 || e5 && r2(n2, "name").configurable);
  return vn = { EXISTS: o2, PROPER: i2, CONFIGURABLE: a2 };
}
function An() {
  if (bn) return yn;
  bn = 1;
  var e5 = w(), t2 = me(), n2 = ue(), r2 = e5(Function.toString);
  return t2(n2.inspectSource) || (n2.inspectSource = function(e6) {
    return r2(e6);
  }), yn = n2.inspectSource;
}
function xn() {
  if (En) return wn.exports;
  En = 1;
  var e5 = w(), t2 = C(), n2 = me(), r2 = de(), o2 = Ae(), i2 = Sn().CONFIGURABLE, a2 = An(), s2 = cn(), u2 = s2.enforce, l2 = s2.get, c2 = String, d2 = Object.defineProperty, f2 = e5("".slice), p2 = e5("".replace), h2 = e5([].join), g2 = o2 && !t2(function() {
    return 8 !== d2(function() {
    }, "length", { value: 8 }).length;
  }), v2 = String(String).split("String"), m2 = wn.exports = function(e6, t3, n3) {
    "Symbol(" === f2(c2(t3), 0, 7) && (t3 = "[" + p2(c2(t3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n3 && n3.getter && (t3 = "get " + t3), n3 && n3.setter && (t3 = "set " + t3), (!r2(e6, "name") || i2 && e6.name !== t3) && (o2 ? d2(e6, "name", { value: t3, configurable: true }) : e6.name = t3), g2 && n3 && r2(n3, "arity") && e6.length !== n3.arity && d2(e6, "length", { value: n3.arity });
    try {
      n3 && r2(n3, "constructor") && n3.constructor ? o2 && d2(e6, "prototype", { writable: false }) : e6.prototype && (e6.prototype = void 0);
    } catch (e7) {
    }
    var a3 = u2(e6);
    return r2(a3, "source") || (a3.source = h2(v2, "string" == typeof t3 ? t3 : "")), e6;
  };
  return Function.prototype.toString = m2(function() {
    return n2(this) && l2(this).source || a2(this);
  }, "toString"), wn.exports;
}
function On() {
  if (Dn) return Cn;
  Dn = 1;
  var e5 = me(), t2 = Yt(), n2 = xn(), r2 = se();
  return Cn = function(o2, i2, a2, s2) {
    s2 || (s2 = {});
    var u2 = s2.enumerable, l2 = void 0 !== s2.name ? s2.name : i2;
    if (e5(a2) && n2(a2, l2, s2), s2.global) u2 ? o2[i2] = a2 : r2(i2, a2);
    else {
      try {
        s2.unsafe ? o2[i2] && (u2 = true) : delete o2[i2];
      } catch (e6) {
      }
      u2 ? o2[i2] = a2 : t2.f(o2, i2, { value: a2, enumerable: false, configurable: !s2.nonConfigurable, writable: !s2.nonWritable });
    }
    return o2;
  }, Cn;
}
var Nn, Bn = {};
var Tn, kn, Fn, In, Pn, _n, Rn, Ln, Mn, jn, Hn, zn, $n, Un, Vn, Wn, Gn, qn, Kn, Yn, Xn, Zn, Jn, Qn, er, tr, nr, rr, or, ir, ar, sr, ur, lr = {};
function cr() {
  if (Fn) return kn;
  Fn = 1;
  var e5 = zt(), t2 = w(), n2 = (function() {
    if (Nn) return Bn;
    Nn = 1;
    var e6 = tn(), t3 = nn().concat("length", "prototype");
    return Bn.f = Object.getOwnPropertyNames || function(n3) {
      return e6(n3, t3);
    }, Bn;
  })(), r2 = (Tn || (Tn = 1, lr.f = Object.getOwnPropertySymbols), lr), o2 = be(), i2 = t2([].concat);
  return kn = e5("Reflect", "ownKeys") || function(e6) {
    var t3 = n2.f(o2(e6)), a2 = r2.f;
    return a2 ? i2(t3, a2(e6)) : t3;
  }, kn;
}
function dr() {
  if (Pn) return In;
  Pn = 1;
  var e5 = de(), t2 = cr(), n2 = gn(), r2 = Yt();
  return In = function(o2, i2, a2) {
    for (var s2 = t2(i2), u2 = r2.f, l2 = n2.f, c2 = 0; c2 < s2.length; c2++) {
      var d2 = s2[c2];
      e5(o2, d2) || a2 && e5(a2, d2) || u2(o2, d2, l2(i2, d2));
    }
  }, In;
}
function fr() {
  if (Mn) return Ln;
  Mn = 1;
  var e5 = B(), t2 = gn().f, n2 = ln(), r2 = On(), o2 = se(), i2 = dr(), a2 = (function() {
    if (Rn) return _n;
    Rn = 1;
    var e6 = C(), t3 = me(), n3 = /#|\.prototype\./, r3 = function(n4, r4) {
      var u2 = i3[o3(n4)];
      return u2 === s2 || u2 !== a3 && (t3(r4) ? e6(r4) : !!r4);
    }, o3 = r3.normalize = function(e7) {
      return String(e7).replace(n3, ".").toLowerCase();
    }, i3 = r3.data = {}, a3 = r3.NATIVE = "N", s2 = r3.POLYFILL = "P";
    return _n = r3;
  })();
  return Ln = function(s2, u2) {
    var l2, c2, d2, f2, p2, h2 = s2.target, g2 = s2.global, v2 = s2.stat;
    if (l2 = g2 ? e5 : v2 ? e5[h2] || o2(h2, {}) : e5[h2] && e5[h2].prototype) for (c2 in u2) {
      if (f2 = u2[c2], d2 = s2.dontCallGetSet ? (p2 = t2(l2, c2)) && p2.value : l2[c2], !a2(g2 ? c2 : h2 + (v2 ? "." : "#") + c2, s2.forced) && void 0 !== d2) {
        if (typeof f2 == typeof d2) continue;
        i2(f2, d2);
      }
      (s2.sham || d2 && d2.sham) && n2(f2, "sham", true), r2(l2, c2, f2, s2);
    }
  };
}
function pr() {
  if ($n) return zn;
  $n = 1;
  var e5 = de(), t2 = me(), n2 = ce(), r2 = on(), o2 = (function() {
    if (Hn) return jn;
    Hn = 1;
    var e6 = C();
    return jn = !e6(function() {
      function e7() {
      }
      return e7.prototype.constructor = null, Object.getPrototypeOf(new e7()) !== e7.prototype;
    }), jn;
  })(), i2 = r2("IE_PROTO"), a2 = Object, s2 = a2.prototype;
  return zn = o2 ? a2.getPrototypeOf : function(r3) {
    var o3 = n2(r3);
    if (e5(o3, i2)) return o3[i2];
    var u2 = o3.constructor;
    return t2(u2) && o3 instanceof u2 ? u2.prototype : o3 instanceof a2 ? s2 : null;
  }, zn;
}
function hr() {
  if (Vn) return Un;
  Vn = 1;
  var e5, t2, n2, r2 = C(), o2 = me(), i2 = ye(), a2 = an(), s2 = pr(), u2 = On(), l2 = ve(), c2 = ae(), d2 = l2("iterator"), f2 = false;
  return [].keys && ("next" in (n2 = [].keys()) ? (t2 = s2(s2(n2))) !== Object.prototype && (e5 = t2) : f2 = true), !i2(e5) || r2(function() {
    var t3 = {};
    return e5[d2].call(t3) !== t3;
  }) ? e5 = {} : c2 && (e5 = a2(e5)), o2(e5[d2]) || u2(e5, d2, function() {
    return this;
  }), Un = { IteratorPrototype: e5, BUGGY_SAFARI_ITERATORS: f2 };
}
function gr() {
  if (Gn) return Wn;
  Gn = 1;
  var e5 = Yt().f, t2 = de(), n2 = ve()("toStringTag");
  return Wn = function(r2, o2, i2) {
    r2 && !i2 && (r2 = r2.prototype), r2 && !t2(r2, n2) && e5(r2, n2, { configurable: true, value: o2 });
  };
}
function vr() {
  if (er) return Qn;
  er = 1;
  var e5 = (function() {
    if (Jn) return Zn;
    Jn = 1;
    var e6 = ye();
    return Zn = function(t3) {
      return e6(t3) || null === t3;
    };
  })(), t2 = String, n2 = TypeError;
  return Qn = function(r2) {
    if (e5(r2)) return r2;
    throw new n2("Can't set " + t2(r2) + " as a prototype");
  };
}
function mr() {
  if (nr) return tr;
  nr = 1;
  var e5 = (function() {
    if (Xn) return Yn;
    Xn = 1;
    var e6 = w(), t3 = Wt();
    return Yn = function(n3, r3, o2) {
      try {
        return e6(t3(Object.getOwnPropertyDescriptor(n3, r3)[o2]));
      } catch (e7) {
      }
    };
  })(), t2 = ye(), n2 = O(), r2 = vr();
  return tr = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var o2, i2 = false, a2 = {};
    try {
      (o2 = e5(Object.prototype, "__proto__", "set"))(a2, []), i2 = a2 instanceof Array;
    } catch (e6) {
    }
    return function(e6, a3) {
      return n2(e6), r2(a3), t2(e6) ? (i2 ? o2(e6, a3) : e6.__proto__ = a3, e6) : e6;
    };
  })() : void 0), tr;
}
function yr() {
  if (or) return rr;
  or = 1;
  var e5 = fr(), t2 = Ht(), n2 = ae(), r2 = Sn(), o2 = me(), i2 = (function() {
    if (Kn) return qn;
    Kn = 1;
    var e6 = hr().IteratorPrototype, t3 = an(), n3 = un(), r3 = gr(), o3 = sn(), i3 = function() {
      return this;
    };
    return qn = function(a3, s3, u3, l3) {
      var c3 = s3 + " Iterator";
      return a3.prototype = t3(e6, { next: n3(+!l3, u3) }), r3(a3, c3, false, true), o3[c3] = i3, a3;
    };
  })(), a2 = pr(), s2 = mr(), u2 = gr(), l2 = ln(), c2 = On(), d2 = ve(), f2 = sn(), p2 = hr(), h2 = r2.PROPER, g2 = r2.CONFIGURABLE, v2 = p2.IteratorPrototype, m2 = p2.BUGGY_SAFARI_ITERATORS, y2 = d2("iterator"), b2 = "keys", E2 = "values", C2 = "entries", D2 = function() {
    return this;
  };
  return rr = function(r3, d3, p3, w2, S2, A2, x2) {
    i2(p3, d3, w2);
    var O2, N2, B2, T2 = function(e6) {
      if (e6 === S2 && _2) return _2;
      if (!m2 && e6 && e6 in I2) return I2[e6];
      switch (e6) {
        case b2:
        case E2:
        case C2:
          return function() {
            return new p3(this, e6);
          };
      }
      return function() {
        return new p3(this);
      };
    }, k2 = d3 + " Iterator", F2 = false, I2 = r3.prototype, P2 = I2[y2] || I2["@@iterator"] || S2 && I2[S2], _2 = !m2 && P2 || T2(S2), R2 = "Array" === d3 && I2.entries || P2;
    if (R2 && (O2 = a2(R2.call(new r3()))) !== Object.prototype && O2.next && (n2 || a2(O2) === v2 || (s2 ? s2(O2, v2) : o2(O2[y2]) || c2(O2, y2, D2)), u2(O2, k2, true, true), n2 && (f2[k2] = D2)), h2 && S2 === E2 && P2 && P2.name !== E2 && (!n2 && g2 ? l2(I2, "name", E2) : (F2 = true, _2 = function() {
      return t2(P2, this);
    })), S2) if (N2 = { values: T2(E2), keys: A2 ? _2 : T2(b2), entries: T2(C2) }, x2) for (B2 in N2) (m2 || F2 || !(B2 in I2)) && c2(I2, B2, N2[B2]);
    else e5({ target: d3, proto: true, forced: m2 || F2 }, N2);
    return n2 && !x2 || I2[y2] === _2 || c2(I2, y2, _2, { name: S2 }), f2[d3] = _2, N2;
  };
}
function br() {
  return ar ? ir : (ar = 1, ir = function(e5, t2) {
    return { value: e5, done: t2 };
  });
}
function Er() {
  if (ur) return sr;
  ur = 1;
  var e5 = N(), t2 = (function() {
    if (xt) return At;
    xt = 1;
    var e6 = ve(), t3 = an(), n3 = Yt().f, r3 = e6("unscopables"), o3 = Array.prototype;
    return void 0 === o3[r3] && n3(o3, r3, { configurable: true, value: t3(null) }), At = function(e7) {
      o3[r3][e7] = true;
    };
  })(), n2 = sn(), r2 = cn(), o2 = Yt().f, i2 = yr(), a2 = br(), s2 = ae(), u2 = Ae(), l2 = "Array Iterator", c2 = r2.set, d2 = r2.getterFor(l2);
  sr = i2(Array, "Array", function(t3, n3) {
    c2(this, { type: l2, target: e5(t3), index: 0, kind: n3 });
  }, function() {
    var e6 = d2(this), t3 = e6.target, n3 = e6.index++;
    if (!t3 || n3 >= t3.length) return e6.target = null, a2(void 0, true);
    switch (e6.kind) {
      case "keys":
        return a2(n3, false);
      case "values":
        return a2(t3[n3], false);
    }
    return a2([n3, t3[n3]], false);
  }, "values");
  var f2 = n2.Arguments = n2.Array;
  if (t2("keys"), t2("values"), t2("entries"), !s2 && u2 && "values" !== f2.name) try {
    o2(f2, "name", { value: "values" });
  } catch (e6) {
  }
  return sr;
}
Er();
var Cr, Dr, wr, Sr, Ar, xr, Or, Nr = {};
function Br() {
  if (Dr) return Cr;
  Dr = 1;
  var e5 = {};
  return e5[ve()("toStringTag")] = "z", Cr = "[object z]" === String(e5);
}
function Tr() {
  if (Sr) return wr;
  Sr = 1;
  var e5 = Br(), t2 = me(), n2 = S(), r2 = ve()("toStringTag"), o2 = Object, i2 = "Arguments" === n2(/* @__PURE__ */ (function() {
    return arguments;
  })());
  return wr = e5 ? n2 : function(e6) {
    var a2, s2, u2;
    return void 0 === e6 ? "Undefined" : null === e6 ? "Null" : "string" == typeof (s2 = (function(e7, t3) {
      try {
        return e7[t3];
      } catch (e8) {
      }
    })(a2 = o2(e6), r2)) ? s2 : i2 ? n2(a2) : "Object" === (u2 = n2(a2)) && t2(a2.callee) ? "Arguments" : u2;
  }, wr;
}
!(function() {
  if (Or) return Nr;
  Or = 1;
  var e5 = Br(), t2 = On(), n2 = (function() {
    if (xr) return Ar;
    xr = 1;
    var e6 = Br(), t3 = Tr();
    return Ar = e6 ? {}.toString : function() {
      return "[object " + t3(this) + "]";
    };
  })();
  e5 || t2(Object.prototype, "toString", n2, { unsafe: true });
})();
var kr, Fr, Ir, Pr, _r, Rr, Lr, Mr, jr, Hr, zr, $r, Ur, Vr = {};
function Wr() {
  if (Fr) return kr;
  Fr = 1;
  var e5 = Tr(), t2 = String;
  return kr = function(n2) {
    if ("Symbol" === e5(n2)) throw new TypeError("Cannot convert a Symbol value to a string");
    return t2(n2);
  };
}
function Gr() {
  if (Pr) return Ir;
  Pr = 1;
  var e5 = be();
  return Ir = function() {
    var t2 = e5(this), n2 = "";
    return t2.hasIndices && (n2 += "d"), t2.global && (n2 += "g"), t2.ignoreCase && (n2 += "i"), t2.multiline && (n2 += "m"), t2.dotAll && (n2 += "s"), t2.unicode && (n2 += "u"), t2.unicodeSets && (n2 += "v"), t2.sticky && (n2 += "y"), n2;
  };
}
function qr() {
  if ($r) return zr;
  $r = 1;
  var e5, t2, n2 = Ht(), r2 = w(), o2 = Wr(), i2 = Gr(), a2 = (function() {
    if (Rr) return _r;
    Rr = 1;
    var e6 = C(), t3 = B().RegExp, n3 = e6(function() {
      var e7 = t3("a", "y");
      return e7.lastIndex = 2, null !== e7.exec("abcd");
    }), r3 = n3 || e6(function() {
      return !t3("a", "y").sticky;
    }), o3 = n3 || e6(function() {
      var e7 = t3("^r", "gy");
      return e7.lastIndex = 2, null !== e7.exec("str");
    });
    return _r = { BROKEN_CARET: o3, MISSED_STICKY: r3, UNSUPPORTED_Y: n3 };
  })(), s2 = le(), u2 = an(), l2 = cn().get, c2 = (function() {
    if (Mr) return Lr;
    Mr = 1;
    var e6 = C(), t3 = B().RegExp;
    return Lr = e6(function() {
      var e7 = t3(".", "s");
      return !(e7.dotAll && e7.test("\n") && "s" === e7.flags);
    });
  })(), d2 = (function() {
    if (Hr) return jr;
    Hr = 1;
    var e6 = C(), t3 = B().RegExp;
    return jr = e6(function() {
      var e7 = t3("(?<a>b)", "g");
      return "b" !== e7.exec("b").groups.a || "bc" !== "b".replace(e7, "$<a>c");
    });
  })(), f2 = s2("native-string-replace", String.prototype.replace), p2 = RegExp.prototype.exec, h2 = p2, g2 = r2("".charAt), v2 = r2("".indexOf), m2 = r2("".replace), y2 = r2("".slice), b2 = (t2 = /b*/g, n2(p2, e5 = /a/, "a"), n2(p2, t2, "a"), 0 !== e5.lastIndex || 0 !== t2.lastIndex), E2 = a2.BROKEN_CARET, D2 = void 0 !== /()??/.exec("")[1];
  return (b2 || D2 || E2 || c2 || d2) && (h2 = function(e6) {
    var t3, r3, a3, s3, c3, d3, C2, w2 = this, S2 = l2(w2), A2 = o2(e6), x2 = S2.raw;
    if (x2) return x2.lastIndex = w2.lastIndex, t3 = n2(h2, x2, A2), w2.lastIndex = x2.lastIndex, t3;
    var O2 = S2.groups, N2 = E2 && w2.sticky, B2 = n2(i2, w2), T2 = w2.source, k2 = 0, F2 = A2;
    if (N2 && (B2 = m2(B2, "y", ""), -1 === v2(B2, "g") && (B2 += "g"), F2 = y2(A2, w2.lastIndex), w2.lastIndex > 0 && (!w2.multiline || w2.multiline && "\n" !== g2(A2, w2.lastIndex - 1)) && (T2 = "(?: " + T2 + ")", F2 = " " + F2, k2++), r3 = new RegExp("^(?:" + T2 + ")", B2)), D2 && (r3 = new RegExp("^" + T2 + "$(?!\\s)", B2)), b2 && (a3 = w2.lastIndex), s3 = n2(p2, N2 ? r3 : w2, F2), N2 ? s3 ? (s3.input = y2(s3.input, k2), s3[0] = y2(s3[0], k2), s3.index = w2.lastIndex, w2.lastIndex += s3[0].length) : w2.lastIndex = 0 : b2 && s3 && (w2.lastIndex = w2.global ? s3.index + s3[0].length : a3), D2 && s3 && s3.length > 1 && n2(f2, s3[0], r3, function() {
      for (c3 = 1; c3 < arguments.length - 2; c3++) void 0 === arguments[c3] && (s3[c3] = void 0);
    }), s3 && O2) for (s3.groups = d3 = u2(null), c3 = 0; c3 < O2.length; c3++) d3[(C2 = O2[c3])[0]] = s3[C2[1]];
    return s3;
  }), zr = h2;
}
function Kr() {
  if (Ur) return Vr;
  Ur = 1;
  var e5 = fr(), t2 = qr();
  return e5({ target: "RegExp", proto: true, forced: /./.exec !== t2 }, { exec: t2 }), Vr;
}
Kr();
var Yr, Xr, Zr, Jr = {};
function Qr() {
  if (Xr) return Yr;
  Xr = 1;
  var e5 = w(), t2 = Xt(), n2 = Wr(), r2 = O(), o2 = e5("".charAt), i2 = e5("".charCodeAt), a2 = e5("".slice), s2 = function(e6) {
    return function(s3, u2) {
      var l2, c2, d2 = n2(r2(s3)), f2 = t2(u2), p2 = d2.length;
      return f2 < 0 || f2 >= p2 ? e6 ? "" : void 0 : (l2 = i2(d2, f2)) < 55296 || l2 > 56319 || f2 + 1 === p2 || (c2 = i2(d2, f2 + 1)) < 56320 || c2 > 57343 ? e6 ? o2(d2, f2) : l2 : e6 ? a2(d2, f2, f2 + 2) : c2 - 56320 + (l2 - 55296 << 10) + 65536;
    };
  };
  return Yr = { codeAt: s2(false), charAt: s2(true) };
}
!(function() {
  if (Zr) return Jr;
  Zr = 1;
  var e5 = Qr().charAt, t2 = Wr(), n2 = cn(), r2 = yr(), o2 = br(), i2 = "String Iterator", a2 = n2.set, s2 = n2.getterFor(i2);
  r2(String, "String", function(e6) {
    a2(this, { type: i2, string: t2(e6), index: 0 });
  }, function() {
    var t3, n3 = s2(this), r3 = n3.string, i3 = n3.index;
    return i3 >= r3.length ? o2(void 0, true) : (t3 = e5(r3, i3), n3.index += t3.length, o2(t3, false));
  });
})();
var eo, to, no, ro, oo, io, ao, so, uo, lo, co, fo = {};
function po() {
  if (ro) return no;
  ro = 1;
  var e5 = Qr().charAt;
  return no = function(t2, n2, r2) {
    return n2 + (r2 ? e5(t2, n2).length : 1);
  }, no;
}
function ho() {
  if (so) return ao;
  so = 1;
  var e5 = Ht(), t2 = de(), n2 = $t(), r2 = (function() {
    if (io) return oo;
    io = 1;
    var e6 = B(), t3 = C(), n3 = e6.RegExp, r3 = !t3(function() {
      var e7 = true;
      try {
        n3(".", "d");
      } catch (t5) {
        e7 = false;
      }
      var t4 = {}, r4 = "", o3 = e7 ? "dgimsy" : "gimsy", i3 = function(e8, n4) {
        Object.defineProperty(t4, e8, { get: function() {
          return r4 += n4, true;
        } });
      }, a2 = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
      for (var s2 in e7 && (a2.hasIndices = "d"), a2) i3(s2, a2[s2]);
      return Object.getOwnPropertyDescriptor(n3.prototype, "flags").get.call(t4) !== o3 || r4 !== o3;
    });
    return oo = { correct: r3 };
  })(), o2 = Gr(), i2 = RegExp.prototype;
  return ao = r2.correct ? function(e6) {
    return e6.flags;
  } : function(a2) {
    return r2.correct || !n2(i2, a2) || t2(a2, "flags") ? a2.flags : e5(o2, a2);
  };
}
!(function() {
  if (co) return fo;
  co = 1;
  var e5 = Ht(), t2 = w(), n2 = (function() {
    if (to) return eo;
    to = 1, Kr();
    var e6 = Ht(), t3 = On(), n3 = qr(), r3 = C(), o3 = ve(), i3 = ln(), a3 = o3("species"), s3 = RegExp.prototype;
    return eo = function(u3, l3, c3, d3) {
      var f3 = o3(u3), p2 = !r3(function() {
        var e7 = {};
        return e7[f3] = function() {
          return 7;
        }, 7 !== ""[u3](e7);
      }), h2 = p2 && !r3(function() {
        var e7 = false, t4 = /a/;
        return "split" === u3 && ((t4 = {}).constructor = {}, t4.constructor[a3] = function() {
          return t4;
        }, t4.flags = "", t4[f3] = /./[f3]), t4.exec = function() {
          return e7 = true, null;
        }, t4[f3](""), !e7;
      });
      if (!p2 || !h2 || c3) {
        var g2 = /./[f3], v2 = l3(f3, ""[u3], function(t4, r4, o4, i4, a4) {
          var u4 = r4.exec;
          return u4 === n3 || u4 === s3.exec ? p2 && !a4 ? { done: true, value: e6(g2, r4, o4, i4) } : { done: true, value: e6(t4, o4, r4, i4) } : { done: false };
        });
        t3(String.prototype, u3, v2[0]), t3(s3, f3, v2[1]);
      }
      d3 && i3(s3[f3], "sham", true);
    }, eo;
  })(), r2 = be(), o2 = ye(), i2 = Zt(), a2 = Wr(), s2 = O(), u2 = Gt(), l2 = po(), c2 = ho(), d2 = (function() {
    if (lo) return uo;
    lo = 1;
    var e6 = Ht(), t3 = be(), n3 = me(), r3 = S(), o3 = qr(), i3 = TypeError;
    return uo = function(a3, s3) {
      var u3 = a3.exec;
      if (n3(u3)) {
        var l3 = e6(u3, a3, s3);
        return null !== l3 && t3(l3), l3;
      }
      if ("RegExp" === r3(a3)) return e6(o3, a3, s3);
      throw new i3("RegExp#exec called on incompatible receiver");
    }, uo;
  })(), f2 = t2("".indexOf);
  n2("match", function(t3, n3, p2) {
    return [function(n4) {
      var r3 = s2(this), i3 = o2(n4) ? u2(n4, t3) : void 0;
      return i3 ? e5(i3, n4, r3) : new RegExp(n4)[t3](a2(r3));
    }, function(e6) {
      var t4 = r2(this), o3 = a2(e6), s3 = p2(n3, t4, o3);
      if (s3.done) return s3.value;
      var u3 = a2(c2(t4));
      if (-1 === f2(u3, "g")) return d2(t4, o3);
      var h2 = -1 !== f2(u3, "u");
      t4.lastIndex = 0;
      for (var g2, v2 = [], m2 = 0; null !== (g2 = d2(t4, o3)); ) {
        var y2 = a2(g2[0]);
        v2[m2] = y2, "" === y2 && (t4.lastIndex = l2(o3, i2(t4.lastIndex), h2)), m2++;
      }
      return 0 === m2 ? null : v2;
    }];
  });
})();
var go, vo, mo, yo, bo, Eo, Co, Do, wo, So, Ao, xo, Oo, No, Bo, To, ko, Fo, Io, Po, _o, Ro, Lo, Mo, jo, Ho, zo, $o = {}, Uo = {};
function Vo() {
  if (vo) return go;
  vo = 1;
  var e5 = ye(), t2 = ln();
  return go = function(n2, r2) {
    e5(r2) && "cause" in r2 && t2(n2, "cause", r2.cause);
  }, go;
}
function Wo() {
  if (Do) return Co;
  Do = 1;
  var e5 = ln(), t2 = (function() {
    if (yo) return mo;
    yo = 1;
    var e6 = w(), t3 = Error, n3 = e6("".replace), r3 = String(new t3("zxcasd").stack), o2 = /\n\s*at [^:]*:[^\n]*/, i2 = o2.test(r3);
    return mo = function(e7, r4) {
      if (i2 && "string" == typeof e7 && !t3.prepareStackTrace) for (; r4--; ) e7 = n3(e7, o2, "");
      return e7;
    };
  })(), n2 = (function() {
    if (Eo) return bo;
    Eo = 1;
    var e6 = C(), t3 = un();
    return bo = !e6(function() {
      var e7 = new Error("a");
      return !("stack" in e7) || (Object.defineProperty(e7, "stack", t3(1, 7)), 7 !== e7.stack);
    });
  })(), r2 = Error.captureStackTrace;
  return Co = function(o2, i2, a2, s2) {
    n2 && (r2 ? r2(o2, i2) : e5(o2, "stack", t2(a2, s2)));
  }, Co;
}
function Go() {
  if (xo) return Ao;
  xo = 1;
  var e5 = (function() {
    if (So) return wo;
    So = 1;
    var e6 = S(), t3 = w();
    return wo = function(n3) {
      if ("Function" === e6(n3)) return t3(n3);
    }, wo;
  })(), t2 = Wt(), n2 = D(), r2 = e5(e5.bind);
  return Ao = function(e6, o2) {
    return t2(e6), void 0 === o2 ? e6 : n2 ? r2(e6, o2) : function() {
      return e6.apply(o2, arguments);
    };
  }, Ao;
}
function qo() {
  if (No) return Oo;
  No = 1;
  var e5 = ve(), t2 = sn(), n2 = e5("iterator"), r2 = Array.prototype;
  return Oo = function(e6) {
    return void 0 !== e6 && (t2.Array === e6 || r2[n2] === e6);
  };
}
function Ko() {
  if (To) return Bo;
  To = 1;
  var e5 = Tr(), t2 = Gt(), n2 = x(), r2 = sn(), o2 = ve()("iterator");
  return Bo = function(i2) {
    if (!n2(i2)) return t2(i2, o2) || t2(i2, "@@iterator") || r2[e5(i2)];
  };
}
function Yo() {
  if (Fo) return ko;
  Fo = 1;
  var e5 = Ht(), t2 = Wt(), n2 = be(), r2 = Vt(), o2 = Ko(), i2 = TypeError;
  return ko = function(a2, s2) {
    var u2 = arguments.length < 2 ? o2(a2) : s2;
    if (t2(u2)) return n2(e5(u2, a2));
    throw new i2(r2(a2) + " is not iterable");
  }, ko;
}
function Xo() {
  if (Po) return Io;
  Po = 1;
  var e5 = Ht(), t2 = be(), n2 = Gt();
  return Io = function(r2, o2, i2) {
    var a2, s2;
    t2(r2);
    try {
      if (!(a2 = n2(r2, "return"))) {
        if ("throw" === o2) throw i2;
        return i2;
      }
      a2 = e5(a2, r2);
    } catch (e6) {
      s2 = true, a2 = e6;
    }
    if ("throw" === o2) throw i2;
    if (s2) throw a2;
    return t2(a2), i2;
  }, Io;
}
function Zo() {
  if (Ro) return _o;
  Ro = 1;
  var e5 = Go(), t2 = Ht(), n2 = be(), r2 = Vt(), o2 = qo(), i2 = Jt(), a2 = $t(), s2 = Yo(), u2 = Ko(), l2 = Xo(), c2 = TypeError, d2 = function(e6, t3) {
    this.stopped = e6, this.result = t3;
  }, f2 = d2.prototype;
  return _o = function(p2, h2, g2) {
    var v2, m2, y2, b2, E2, C2, D2, w2 = g2 && g2.that, S2 = !(!g2 || !g2.AS_ENTRIES), A2 = !(!g2 || !g2.IS_RECORD), x2 = !(!g2 || !g2.IS_ITERATOR), O2 = !(!g2 || !g2.INTERRUPTED), N2 = e5(h2, w2), B2 = function(e6) {
      return v2 && l2(v2, "normal"), new d2(true, e6);
    }, T2 = function(e6) {
      return S2 ? (n2(e6), O2 ? N2(e6[0], e6[1], B2) : N2(e6[0], e6[1])) : O2 ? N2(e6, B2) : N2(e6);
    };
    if (A2) v2 = p2.iterator;
    else if (x2) v2 = p2;
    else {
      if (!(m2 = u2(p2))) throw new c2(r2(p2) + " is not iterable");
      if (o2(m2)) {
        for (y2 = 0, b2 = i2(p2); b2 > y2; y2++) if ((E2 = T2(p2[y2])) && a2(f2, E2)) return E2;
        return new d2(false);
      }
      v2 = s2(p2, m2);
    }
    for (C2 = A2 ? p2.next : v2.next; !(D2 = t2(C2, v2)).done; ) {
      try {
        E2 = T2(D2.value);
      } catch (e6) {
        l2(v2, "throw", e6);
      }
      if ("object" == typeof E2 && E2 && a2(f2, E2)) return E2;
    }
    return new d2(false);
  }, _o;
}
function Jo() {
  if (Mo) return Lo;
  Mo = 1;
  var e5 = Wr();
  return Lo = function(t2, n2) {
    return void 0 === t2 ? arguments.length < 2 ? "" : n2 : e5(t2);
  }, Lo;
}
function Qo() {
  return Ho || (Ho = 1, (function() {
    if (jo) return Uo;
    jo = 1;
    var e5 = fr(), t2 = $t(), n2 = pr(), r2 = mr(), o2 = dr(), i2 = an(), a2 = ln(), s2 = un(), u2 = Vo(), l2 = Wo(), c2 = Zo(), d2 = Jo(), f2 = ve()("toStringTag"), p2 = Error, h2 = [].push, g2 = function(e6, o3) {
      var s3, m2 = t2(v2, this);
      r2 ? s3 = r2(new p2(), m2 ? n2(this) : v2) : (s3 = m2 ? this : i2(v2), a2(s3, f2, "Error")), void 0 !== o3 && a2(s3, "message", d2(o3)), l2(s3, g2, s3.stack, 1), arguments.length > 2 && u2(s3, arguments[2]);
      var y2 = [];
      return c2(e6, h2, { that: y2 }), a2(s3, "errors", y2), s3;
    };
    r2 ? r2(g2, p2) : o2(g2, p2, { name: true });
    var v2 = g2.prototype = i2(p2.prototype, { constructor: s2(1, g2), message: s2(1, ""), name: s2(1, "AggregateError") });
    e5({ global: true, constructor: true, arity: 2 }, { AggregateError: g2 });
  })()), $o;
}
zo || (zo = 1, Qo());
var ei, ti, ni = {};
ti || (ti = 1, (function() {
  if (ei) return ni;
  ei = 1;
  var e5 = fr(), t2 = B();
  e5({ global: true, forced: t2.globalThis !== t2 }, { globalThis: t2 });
})());
var ri, oi, ii, ai, si, ui, li = {};
function ci() {
  return oi ? ri : (oi = 1, ri = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 });
}
function di() {
  if (ai) return ii;
  ai = 1;
  var e5 = Mt()("span").classList, t2 = e5 && e5.constructor && e5.constructor.prototype;
  return ii = t2 === Object.prototype ? void 0 : t2;
}
if ((function() {
  if (si) return li;
  si = 1;
  var e5 = B(), t2 = ci(), n2 = di(), r2 = Er(), o2 = ln(), i2 = gr(), a2 = ve()("iterator"), s2 = r2.values, u2 = function(e6, n3) {
    if (e6) {
      if (e6[a2] !== s2) try {
        o2(e6, a2, s2);
      } catch (t3) {
        e6[a2] = s2;
      }
      if (i2(e6, n3, true), t2[n3]) {
        for (var u3 in r2) if (e6[u3] !== r2[u3]) try {
          o2(e6, u3, r2[u3]);
        } catch (t3) {
          e6[u3] = r2[u3];
        }
      }
    }
  };
  for (var l2 in t2) u2(e5[l2] && e5[l2].prototype, l2);
  u2(n2, "DOMTokenList");
})(), "undefined" == typeof global) {
  if ("ActiveXObject" in window) {
    console.error("抱歉，wangEditor V5+ 版本开始，不在支持 IE 浏览器\n Sorry, wangEditor V5+ versions do not support IE browser.");
  }
  fi(), pi();
} else global && (null === (ui = global.navigator) || void 0 === ui ? void 0 : ui.userAgent.match("QQBrowser")) && (fi(), pi());
function fi() {
  "undefined" == typeof globalThis && (window.globalThis = window);
}
function pi() {
  "undefined" == typeof AggregateError && (window.AggregateError = function(e5, t2) {
    var n2 = new Error(t2);
    return n2.errors = e5, n2;
  });
}
var hi, gi, vi, mi, yi, bi, Ei, Ci, Di, wi, Si, Ai, xi, Oi, Ni, Bi, Ti = {};
function ki() {
  if (gi) return hi;
  gi = 1;
  var e5 = function(e6) {
    return e6 && e6.Math === Math && e6;
  };
  return hi = e5("object" == typeof globalThis && globalThis) || e5("object" == typeof window && window) || e5("object" == typeof self && self) || e5("object" == typeof y && y) || e5("object" == typeof hi && hi) || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
}
function Fi() {
  return mi ? vi : (mi = 1, vi = function(e5) {
    try {
      return !!e5();
    } catch (e6) {
      return true;
    }
  });
}
function Ii() {
  return bi ? yi : (bi = 1, yi = !Fi()(function() {
    var e5 = (function() {
    }).bind();
    return "function" != typeof e5 || e5.hasOwnProperty("prototype");
  }));
}
function Pi() {
  if (Ci) return Ei;
  Ci = 1;
  var e5 = Ii(), t2 = Function.prototype, n2 = t2.apply, r2 = t2.call;
  return Ei = "object" == typeof Reflect && Reflect.apply || (e5 ? r2.bind(n2) : function() {
    return r2.apply(n2, arguments);
  }), Ei;
}
function _i() {
  if (wi) return Di;
  wi = 1;
  var e5 = Ii(), t2 = Function.prototype, n2 = t2.call, r2 = e5 && t2.bind.bind(n2, n2);
  return Di = e5 ? r2 : function(e6) {
    return function() {
      return n2.apply(e6, arguments);
    };
  }, Di;
}
function Ri() {
  if (Ai) return Si;
  Ai = 1;
  var e5 = _i(), t2 = e5({}.toString), n2 = e5("".slice);
  return Si = function(e6) {
    return n2(t2(e6), 8, -1);
  };
}
function Li() {
  if (Oi) return xi;
  Oi = 1;
  var e5 = Ri(), t2 = _i();
  return xi = function(n2) {
    if ("Function" === e5(n2)) return t2(n2);
  }, xi;
}
function Mi() {
  if (Bi) return Ni;
  Bi = 1;
  var e5 = "object" == typeof document && document.all;
  return Ni = void 0 === e5 && void 0 !== e5 ? function(t2) {
    return "function" == typeof t2 || t2 === e5;
  } : function(e6) {
    return "function" == typeof e6;
  };
}
var ji, Hi, zi, $i, Ui = {};
function Vi() {
  return Hi ? ji : (Hi = 1, ji = !Fi()(function() {
    return 7 !== Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  }));
}
function Wi() {
  if ($i) return zi;
  $i = 1;
  var e5 = Ii(), t2 = Function.prototype.call;
  return zi = e5 ? t2.bind(t2) : function() {
    return t2.apply(t2, arguments);
  }, zi;
}
var Gi, qi, Ki, Yi, Xi, Zi, Ji, Qi, ea, ta, na, ra, oa, ia, aa, sa, ua, la, ca, da, fa, pa, ha, ga, va, ma, ya, ba, Ea, Ca, Da, wa, Sa, Aa, xa, Oa, Na, Ba = {};
function Ta() {
  if (Gi) return Ba;
  Gi = 1;
  var e5 = {}.propertyIsEnumerable, t2 = Object.getOwnPropertyDescriptor, n2 = t2 && !e5.call({ 1: 2 }, 1);
  return Ba.f = n2 ? function(e6) {
    var n3 = t2(this, e6);
    return !!n3 && n3.enumerable;
  } : e5, Ba;
}
function ka() {
  return Ki ? qi : (Ki = 1, qi = function(e5, t2) {
    return { enumerable: !(1 & e5), configurable: !(2 & e5), writable: !(4 & e5), value: t2 };
  });
}
function Fa() {
  if (Xi) return Yi;
  Xi = 1;
  var e5 = _i(), t2 = Fi(), n2 = Ri(), r2 = Object, o2 = e5("".split);
  return Yi = t2(function() {
    return !r2("z").propertyIsEnumerable(0);
  }) ? function(e6) {
    return "String" === n2(e6) ? o2(e6, "") : r2(e6);
  } : r2;
}
function Ia() {
  return Ji ? Zi : (Ji = 1, Zi = function(e5) {
    return null == e5;
  });
}
function Pa() {
  if (ea) return Qi;
  ea = 1;
  var e5 = Ia(), t2 = TypeError;
  return Qi = function(n2) {
    if (e5(n2)) throw new t2("Can't call method on " + n2);
    return n2;
  };
}
function _a() {
  if (na) return ta;
  na = 1;
  var e5 = Fa(), t2 = Pa();
  return ta = function(n2) {
    return e5(t2(n2));
  };
}
function Ra() {
  if (oa) return ra;
  oa = 1;
  var e5 = Mi();
  return ra = function(t2) {
    return "object" == typeof t2 ? null !== t2 : e5(t2);
  };
}
function La() {
  return aa ? ia : (aa = 1, ia = {});
}
function Ma() {
  if (ua) return sa;
  ua = 1;
  var e5 = La(), t2 = ki(), n2 = Mi(), r2 = function(e6) {
    return n2(e6) ? e6 : void 0;
  };
  return sa = function(n3, o2) {
    return arguments.length < 2 ? r2(e5[n3]) || r2(t2[n3]) : e5[n3] && e5[n3][o2] || t2[n3] && t2[n3][o2];
  }, sa;
}
function ja() {
  return ca ? la : (ca = 1, la = _i()({}.isPrototypeOf));
}
function Ha() {
  if (fa) return da;
  fa = 1;
  var e5 = ki().navigator, t2 = e5 && e5.userAgent;
  return da = t2 ? String(t2) : "";
}
function za() {
  if (ha) return pa;
  ha = 1;
  var e5, t2, n2 = ki(), r2 = Ha(), o2 = n2.process, i2 = n2.Deno, a2 = o2 && o2.versions || i2 && i2.version, s2 = a2 && a2.v8;
  return s2 && (t2 = (e5 = s2.split("."))[0] > 0 && e5[0] < 4 ? 1 : +(e5[0] + e5[1])), !t2 && r2 && (!(e5 = r2.match(/Edge\/(\d+)/)) || e5[1] >= 74) && (e5 = r2.match(/Chrome\/(\d+)/)) && (t2 = +e5[1]), pa = t2;
}
function $a() {
  if (va) return ga;
  va = 1;
  var e5 = za(), t2 = Fi(), n2 = ki().String;
  return ga = !!Object.getOwnPropertySymbols && !t2(function() {
    var t3 = Symbol("symbol detection");
    return !n2(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && e5 && e5 < 41;
  }), ga;
}
function Ua() {
  return ya ? ma : (ya = 1, ma = $a() && !Symbol.sham && "symbol" == typeof Symbol.iterator);
}
function Va() {
  if (Ea) return ba;
  Ea = 1;
  var e5 = Ma(), t2 = Mi(), n2 = ja(), r2 = Object;
  return ba = Ua() ? function(e6) {
    return "symbol" == typeof e6;
  } : function(o2) {
    var i2 = e5("Symbol");
    return t2(i2) && n2(i2.prototype, r2(o2));
  };
}
function Wa() {
  if (Da) return Ca;
  Da = 1;
  var e5 = String;
  return Ca = function(t2) {
    try {
      return e5(t2);
    } catch (e6) {
      return "Object";
    }
  };
}
function Ga() {
  if (Sa) return wa;
  Sa = 1;
  var e5 = Mi(), t2 = Wa(), n2 = TypeError;
  return wa = function(r2) {
    if (e5(r2)) return r2;
    throw new n2(t2(r2) + " is not a function");
  };
}
function qa() {
  if (xa) return Aa;
  xa = 1;
  var e5 = Ga(), t2 = Ia();
  return Aa = function(n2, r2) {
    var o2 = n2[r2];
    return t2(o2) ? void 0 : e5(o2);
  }, Aa;
}
function Ka() {
  if (Na) return Oa;
  Na = 1;
  var e5 = Wi(), t2 = Mi(), n2 = Ra(), r2 = TypeError;
  return Oa = function(o2, i2) {
    var a2, s2;
    if ("string" === i2 && t2(a2 = o2.toString) && !n2(s2 = e5(a2, o2))) return s2;
    if (t2(a2 = o2.valueOf) && !n2(s2 = e5(a2, o2))) return s2;
    if ("string" !== i2 && t2(a2 = o2.toString) && !n2(s2 = e5(a2, o2))) return s2;
    throw new r2("Can't convert object to primitive value");
  }, Oa;
}
var Ya, Xa, Za, Ja, Qa, es, ts, ns, rs, os, is, as, ss, us, ls, cs, ds, fs, ps, hs, gs, vs, ms, ys, bs, Es, Cs, Ds, ws = { exports: {} };
function Ss() {
  return Xa ? Ya : (Xa = 1, Ya = true);
}
function As() {
  if (Ja) return Za;
  Ja = 1;
  var e5 = ki(), t2 = Object.defineProperty;
  return Za = function(n2, r2) {
    try {
      t2(e5, n2, { value: r2, configurable: true, writable: true });
    } catch (t3) {
      e5[n2] = r2;
    }
    return r2;
  };
}
function xs() {
  if (Qa) return ws.exports;
  Qa = 1;
  var e5 = Ss(), t2 = ki(), n2 = As(), r2 = "__core-js_shared__", o2 = ws.exports = t2[r2] || n2(r2, {});
  return (o2.versions || (o2.versions = [])).push({ version: "3.45.1", mode: e5 ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE", source: "https://github.com/zloirock/core-js" }), ws.exports;
}
function Os() {
  if (ts) return es;
  ts = 1;
  var e5 = xs();
  return es = function(t2, n2) {
    return e5[t2] || (e5[t2] = n2 || {});
  };
}
function Ns() {
  if (rs) return ns;
  rs = 1;
  var e5 = Pa(), t2 = Object;
  return ns = function(n2) {
    return t2(e5(n2));
  };
}
function Bs() {
  if (is) return os;
  is = 1;
  var e5 = _i(), t2 = Ns(), n2 = e5({}.hasOwnProperty);
  return os = Object.hasOwn || function(e6, r2) {
    return n2(t2(e6), r2);
  };
}
function Ts() {
  if (ss) return as;
  ss = 1;
  var e5 = _i(), t2 = 0, n2 = Math.random(), r2 = e5(1.1.toString);
  return as = function(e6) {
    return "Symbol(" + (void 0 === e6 ? "" : e6) + ")_" + r2(++t2 + n2, 36);
  };
}
function ks() {
  if (ls) return us;
  ls = 1;
  var e5 = ki(), t2 = Os(), n2 = Bs(), r2 = Ts(), o2 = $a(), i2 = Ua(), a2 = e5.Symbol, s2 = t2("wks"), u2 = i2 ? a2.for || a2 : a2 && a2.withoutSetter || r2;
  return us = function(e6) {
    return n2(s2, e6) || (s2[e6] = o2 && n2(a2, e6) ? a2[e6] : u2("Symbol." + e6)), s2[e6];
  };
}
function Fs() {
  if (ds) return cs;
  ds = 1;
  var e5 = Wi(), t2 = Ra(), n2 = Va(), r2 = qa(), o2 = Ka(), i2 = TypeError, a2 = ks()("toPrimitive");
  return cs = function(s2, u2) {
    if (!t2(s2) || n2(s2)) return s2;
    var l2, c2 = r2(s2, a2);
    if (c2) {
      if (void 0 === u2 && (u2 = "default"), l2 = e5(c2, s2, u2), !t2(l2) || n2(l2)) return l2;
      throw new i2("Can't convert object to primitive value");
    }
    return void 0 === u2 && (u2 = "number"), o2(s2, u2);
  };
}
function Is() {
  if (ps) return fs;
  ps = 1;
  var e5 = Fs(), t2 = Va();
  return fs = function(n2) {
    var r2 = e5(n2, "string");
    return t2(r2) ? r2 : r2 + "";
  };
}
function Ps() {
  if (gs) return hs;
  gs = 1;
  var e5 = ki(), t2 = Ra(), n2 = e5.document, r2 = t2(n2) && t2(n2.createElement);
  return hs = function(e6) {
    return r2 ? n2.createElement(e6) : {};
  };
}
function _s() {
  if (ms) return vs;
  ms = 1;
  var e5 = Vi(), t2 = Fi(), n2 = Ps();
  return vs = !e5 && !t2(function() {
    return 7 !== Object.defineProperty(n2("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
}
function Rs() {
  if (ys) return Ui;
  ys = 1;
  var e5 = Vi(), t2 = Wi(), n2 = Ta(), r2 = ka(), o2 = _a(), i2 = Is(), a2 = Bs(), s2 = _s(), u2 = Object.getOwnPropertyDescriptor;
  return Ui.f = e5 ? u2 : function(e6, l2) {
    if (e6 = o2(e6), l2 = i2(l2), s2) try {
      return u2(e6, l2);
    } catch (e7) {
    }
    if (a2(e6, l2)) return r2(!t2(n2.f, e6, l2), e6[l2]);
  }, Ui;
}
function Ls() {
  if (Es) return bs;
  Es = 1;
  var e5 = Fi(), t2 = Mi(), n2 = /#|\.prototype\./, r2 = function(n3, r3) {
    var u2 = i2[o2(n3)];
    return u2 === s2 || u2 !== a2 && (t2(r3) ? e5(r3) : !!r3);
  }, o2 = r2.normalize = function(e6) {
    return String(e6).replace(n2, ".").toLowerCase();
  }, i2 = r2.data = {}, a2 = r2.NATIVE = "N", s2 = r2.POLYFILL = "P";
  return bs = r2;
}
function Ms() {
  if (Ds) return Cs;
  Ds = 1;
  var e5 = Li(), t2 = Ga(), n2 = Ii(), r2 = e5(e5.bind);
  return Cs = function(e6, o2) {
    return t2(e6), void 0 === o2 ? e6 : n2 ? r2(e6, o2) : function() {
      return e6.apply(o2, arguments);
    };
  }, Cs;
}
var js, Hs, zs, $s, Us, Vs, Ws, Gs, qs, Ks, Ys, Xs, Zs, Js, Qs, eu, tu, nu, ru, ou, iu, au, su, uu, lu, cu, du, fu, pu, hu, gu, vu, mu, yu, bu, Eu, Cu, Du, wu = {};
function Su() {
  return Hs ? js : (Hs = 1, js = Vi() && Fi()(function() {
    return 42 !== Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype;
  }));
}
function Au() {
  if ($s) return zs;
  $s = 1;
  var e5 = Ra(), t2 = String, n2 = TypeError;
  return zs = function(r2) {
    if (e5(r2)) return r2;
    throw new n2(t2(r2) + " is not an object");
  };
}
function xu() {
  if (Us) return wu;
  Us = 1;
  var e5 = Vi(), t2 = _s(), n2 = Su(), r2 = Au(), o2 = Is(), i2 = TypeError, a2 = Object.defineProperty, s2 = Object.getOwnPropertyDescriptor, u2 = "enumerable", l2 = "configurable", c2 = "writable";
  return wu.f = e5 ? n2 ? function(e6, t3, n3) {
    if (r2(e6), t3 = o2(t3), r2(n3), "function" == typeof e6 && "prototype" === t3 && "value" in n3 && c2 in n3 && !n3[c2]) {
      var i3 = s2(e6, t3);
      i3 && i3[c2] && (e6[t3] = n3.value, n3 = { configurable: l2 in n3 ? n3[l2] : i3[l2], enumerable: u2 in n3 ? n3[u2] : i3[u2], writable: false });
    }
    return a2(e6, t3, n3);
  } : a2 : function(e6, n3, s3) {
    if (r2(e6), n3 = o2(n3), r2(s3), t2) try {
      return a2(e6, n3, s3);
    } catch (e7) {
    }
    if ("get" in s3 || "set" in s3) throw new i2("Accessors not supported");
    return "value" in s3 && (e6[n3] = s3.value), e6;
  }, wu;
}
function Ou() {
  if (Ws) return Vs;
  Ws = 1;
  var e5 = Vi(), t2 = xu(), n2 = ka();
  return Vs = e5 ? function(e6, r2, o2) {
    return t2.f(e6, r2, n2(1, o2));
  } : function(e6, t3, n3) {
    return e6[t3] = n3, e6;
  };
}
function Nu() {
  if (qs) return Gs;
  qs = 1;
  var e5 = ki(), t2 = Pi(), n2 = Li(), r2 = Mi(), o2 = Rs().f, i2 = Ls(), a2 = La(), s2 = Ms(), u2 = Ou(), l2 = Bs(), c2 = function(e6) {
    var n3 = function(r3, o3, i3) {
      if (this instanceof n3) {
        switch (arguments.length) {
          case 0:
            return new e6();
          case 1:
            return new e6(r3);
          case 2:
            return new e6(r3, o3);
        }
        return new e6(r3, o3, i3);
      }
      return t2(e6, this, arguments);
    };
    return n3.prototype = e6.prototype, n3;
  };
  return Gs = function(t3, d2) {
    var f2, p2, h2, g2, v2, m2, y2, b2, E2, C2 = t3.target, D2 = t3.global, w2 = t3.stat, S2 = t3.proto, A2 = D2 ? e5 : w2 ? e5[C2] : e5[C2] && e5[C2].prototype, x2 = D2 ? a2 : a2[C2] || u2(a2, C2, {})[C2], O2 = x2.prototype;
    for (g2 in d2) p2 = !(f2 = i2(D2 ? g2 : C2 + (w2 ? "." : "#") + g2, t3.forced)) && A2 && l2(A2, g2), m2 = x2[g2], p2 && (y2 = t3.dontCallGetSet ? (E2 = o2(A2, g2)) && E2.value : A2[g2]), v2 = p2 && y2 ? y2 : d2[g2], (f2 || S2 || typeof m2 != typeof v2) && (b2 = t3.bind && p2 ? s2(v2, e5) : t3.wrap && p2 ? c2(v2) : S2 && r2(v2) ? n2(v2) : v2, (t3.sham || v2 && v2.sham || m2 && m2.sham) && u2(b2, "sham", true), u2(x2, g2, b2), S2 && (l2(a2, h2 = C2 + "Prototype") || u2(a2, h2, {}), u2(a2[h2], g2, v2), t3.real && O2 && (f2 || !O2[g2]) && u2(O2, g2, v2)));
  };
}
function Bu() {
  if (Ys) return Ks;
  Ys = 1;
  var e5 = Ri();
  return Ks = Array.isArray || function(t2) {
    return "Array" === e5(t2);
  };
}
function Tu() {
  if (Zs) return Xs;
  Zs = 1;
  var e5 = Math.ceil, t2 = Math.floor;
  return Xs = Math.trunc || function(n2) {
    var r2 = +n2;
    return (r2 > 0 ? t2 : e5)(r2);
  }, Xs;
}
function ku() {
  if (Qs) return Js;
  Qs = 1;
  var e5 = Tu();
  return Js = function(t2) {
    var n2 = +t2;
    return n2 != n2 || 0 === n2 ? 0 : e5(n2);
  };
}
function Fu() {
  if (tu) return eu;
  tu = 1;
  var e5 = ku(), t2 = Math.min;
  return eu = function(n2) {
    var r2 = e5(n2);
    return r2 > 0 ? t2(r2, 9007199254740991) : 0;
  };
}
function Iu() {
  if (ru) return nu;
  ru = 1;
  var e5 = Fu();
  return nu = function(t2) {
    return e5(t2.length);
  };
}
function Pu() {
  if (iu) return ou;
  iu = 1;
  var e5 = TypeError;
  return ou = function(t2) {
    if (t2 > 9007199254740991) throw e5("Maximum allowed index exceeded");
    return t2;
  };
}
function _u() {
  if (su) return au;
  su = 1;
  var e5 = Vi(), t2 = xu(), n2 = ka();
  return au = function(r2, o2, i2) {
    e5 ? t2.f(r2, o2, n2(0, i2)) : r2[o2] = i2;
  };
}
function Ru() {
  if (lu) return uu;
  lu = 1;
  var e5 = {};
  return e5[ks()("toStringTag")] = "z", uu = "[object z]" === String(e5);
}
function Lu() {
  if (du) return cu;
  du = 1;
  var e5 = Ru(), t2 = Mi(), n2 = Ri(), r2 = ks()("toStringTag"), o2 = Object, i2 = "Arguments" === n2(/* @__PURE__ */ (function() {
    return arguments;
  })());
  return cu = e5 ? n2 : function(e6) {
    var a2, s2, u2;
    return void 0 === e6 ? "Undefined" : null === e6 ? "Null" : "string" == typeof (s2 = (function(e7, t3) {
      try {
        return e7[t3];
      } catch (e8) {
      }
    })(a2 = o2(e6), r2)) ? s2 : i2 ? n2(a2) : "Object" === (u2 = n2(a2)) && t2(a2.callee) ? "Arguments" : u2;
  }, cu;
}
function Mu() {
  if (pu) return fu;
  pu = 1;
  var e5 = _i(), t2 = Mi(), n2 = xs(), r2 = e5(Function.toString);
  return t2(n2.inspectSource) || (n2.inspectSource = function(e6) {
    return r2(e6);
  }), fu = n2.inspectSource;
}
function ju() {
  if (gu) return hu;
  gu = 1;
  var e5 = _i(), t2 = Fi(), n2 = Mi(), r2 = Lu(), o2 = Ma(), i2 = Mu(), a2 = function() {
  }, s2 = o2("Reflect", "construct"), u2 = /^\s*(?:class|function)\b/, l2 = e5(u2.exec), c2 = !u2.test(a2), d2 = function(e6) {
    if (!n2(e6)) return false;
    try {
      return s2(a2, [], e6), true;
    } catch (e7) {
      return false;
    }
  }, f2 = function(e6) {
    if (!n2(e6)) return false;
    switch (r2(e6)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return c2 || !!l2(u2, i2(e6));
    } catch (e7) {
      return true;
    }
  };
  return f2.sham = true, hu = !s2 || t2(function() {
    var e6;
    return d2(d2.call) || !d2(Object) || !d2(function() {
      e6 = true;
    }) || e6;
  }) ? f2 : d2;
}
function Hu() {
  if (mu) return vu;
  mu = 1;
  var e5 = Bu(), t2 = ju(), n2 = Ra(), r2 = ks()("species"), o2 = Array;
  return vu = function(i2) {
    var a2;
    return e5(i2) && (a2 = i2.constructor, (t2(a2) && (a2 === o2 || e5(a2.prototype)) || n2(a2) && null === (a2 = a2[r2])) && (a2 = void 0)), void 0 === a2 ? o2 : a2;
  }, vu;
}
function zu() {
  if (bu) return yu;
  bu = 1;
  var e5 = Hu();
  return yu = function(t2, n2) {
    return new (e5(t2))(0 === n2 ? 0 : n2);
  };
}
function $u() {
  if (Cu) return Eu;
  Cu = 1;
  var e5 = Fi(), t2 = ks(), n2 = za(), r2 = t2("species");
  return Eu = function(t3) {
    return n2 >= 51 || !e5(function() {
      var e6 = [];
      return (e6.constructor = {})[r2] = function() {
        return { foo: 1 };
      }, 1 !== e6[t3](Boolean).foo;
    });
  }, Eu;
}
var Uu, Vu, Wu = {}, Gu = {};
function qu() {
  if (Vu) return Uu;
  Vu = 1;
  var e5 = Lu(), t2 = String;
  return Uu = function(n2) {
    if ("Symbol" === e5(n2)) throw new TypeError("Cannot convert a Symbol value to a string");
    return t2(n2);
  };
}
var Ku, Yu, Xu, Zu, Ju, Qu, el, tl, nl, rl, ol, il, al, sl, ul, ll, cl, dl, fl, pl = {};
function hl() {
  if (Yu) return Ku;
  Yu = 1;
  var e5 = ku(), t2 = Math.max, n2 = Math.min;
  return Ku = function(r2, o2) {
    var i2 = e5(r2);
    return i2 < 0 ? t2(i2 + o2, 0) : n2(i2, o2);
  }, Ku;
}
function gl() {
  if (Zu) return Xu;
  Zu = 1;
  var e5 = _a(), t2 = hl(), n2 = Iu(), r2 = function(r3) {
    return function(o2, i2, a2) {
      var s2 = e5(o2), u2 = n2(s2);
      if (0 === u2) return !r3 && -1;
      var l2, c2 = t2(a2, u2);
      if (r3 && i2 != i2) {
        for (; u2 > c2; ) if ((l2 = s2[c2++]) != l2) return true;
      } else for (; u2 > c2; c2++) if ((r3 || c2 in s2) && s2[c2] === i2) return r3 || c2 || 0;
      return !r3 && -1;
    };
  };
  return Xu = { includes: r2(true), indexOf: r2(false) };
}
function vl() {
  return Qu ? Ju : (Qu = 1, Ju = {});
}
function ml() {
  if (tl) return el;
  tl = 1;
  var e5 = _i(), t2 = Bs(), n2 = _a(), r2 = gl().indexOf, o2 = vl(), i2 = e5([].push);
  return el = function(e6, a2) {
    var s2, u2 = n2(e6), l2 = 0, c2 = [];
    for (s2 in u2) !t2(o2, s2) && t2(u2, s2) && i2(c2, s2);
    for (; a2.length > l2; ) t2(u2, s2 = a2[l2++]) && (~r2(c2, s2) || i2(c2, s2));
    return c2;
  }, el;
}
function yl() {
  return rl ? nl : (rl = 1, nl = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]);
}
function bl() {
  if (il) return ol;
  il = 1;
  var e5 = ml(), t2 = yl();
  return ol = Object.keys || function(n2) {
    return e5(n2, t2);
  }, ol;
}
function El() {
  if (al) return pl;
  al = 1;
  var e5 = Vi(), t2 = Su(), n2 = xu(), r2 = Au(), o2 = _a(), i2 = bl();
  return pl.f = e5 && !t2 ? Object.defineProperties : function(e6, t3) {
    r2(e6);
    for (var a2, s2 = o2(t3), u2 = i2(t3), l2 = u2.length, c2 = 0; l2 > c2; ) n2.f(e6, a2 = u2[c2++], s2[a2]);
    return e6;
  }, pl;
}
function Cl() {
  return ul ? sl : (ul = 1, sl = Ma()("document", "documentElement"));
}
function Dl() {
  if (cl) return ll;
  cl = 1;
  var e5 = Os(), t2 = Ts(), n2 = e5("keys");
  return ll = function(e6) {
    return n2[e6] || (n2[e6] = t2(e6));
  };
}
function wl() {
  if (fl) return dl;
  fl = 1;
  var e5, t2 = Au(), n2 = El(), r2 = yl(), o2 = vl(), i2 = Cl(), a2 = Ps(), s2 = "prototype", u2 = "script", l2 = Dl()("IE_PROTO"), c2 = function() {
  }, d2 = function(e6) {
    return "<" + u2 + ">" + e6 + "</" + u2 + ">";
  }, f2 = function(e6) {
    e6.write(d2("")), e6.close();
    var t3 = e6.parentWindow.Object;
    return e6 = null, t3;
  }, p2 = function() {
    try {
      e5 = new ActiveXObject("htmlfile");
    } catch (e6) {
    }
    var t3, n3, o3;
    p2 = "undefined" != typeof document ? document.domain && e5 ? f2(e5) : (n3 = a2("iframe"), o3 = "java" + u2 + ":", n3.style.display = "none", i2.appendChild(n3), n3.src = String(o3), (t3 = n3.contentWindow.document).open(), t3.write(d2("document.F=Object")), t3.close(), t3.F) : f2(e5);
    for (var l3 = r2.length; l3--; ) delete p2[s2][r2[l3]];
    return p2();
  };
  return o2[l2] = true, dl = Object.create || function(e6, r3) {
    var o3;
    return null !== e6 ? (c2[s2] = t2(e6), o3 = new c2(), c2[s2] = null, o3[l2] = e6) : o3 = p2(), void 0 === r3 ? o3 : n2.f(o3, r3);
  }, dl;
}
var Sl, Al = {};
function xl() {
  if (Sl) return Al;
  Sl = 1;
  var e5 = ml(), t2 = yl().concat("length", "prototype");
  return Al.f = Object.getOwnPropertyNames || function(n2) {
    return e5(n2, t2);
  }, Al;
}
var Ol, Nl, Bl, Tl = {};
function kl() {
  return Nl ? Ol : (Nl = 1, Ol = _i()([].slice));
}
function Fl() {
  if (Bl) return Tl;
  Bl = 1;
  var e5 = Ri(), t2 = _a(), n2 = xl().f, r2 = kl(), o2 = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  return Tl.f = function(i2) {
    return o2 && "Window" === e5(i2) ? (function(e6) {
      try {
        return n2(e6);
      } catch (e7) {
        return r2(o2);
      }
    })(i2) : n2(t2(i2));
  }, Tl;
}
var Il, Pl, _l, Rl, Ll, Ml = {};
function jl() {
  return Il || (Il = 1, Ml.f = Object.getOwnPropertySymbols), Ml;
}
function Hl() {
  if (_l) return Pl;
  _l = 1;
  var e5 = Ou();
  return Pl = function(t2, n2, r2, o2) {
    return o2 && o2.enumerable ? t2[n2] = r2 : e5(t2, n2, r2), t2;
  };
}
function zl() {
  if (Ll) return Rl;
  Ll = 1;
  var e5 = xu();
  return Rl = function(t2, n2, r2) {
    return e5.f(t2, n2, r2);
  };
}
var $l, Ul, Vl, Wl, Gl, ql, Kl, Yl, Xl, Zl, Jl, Ql, ec, tc, nc, rc, oc = {};
function ic() {
  if ($l) return oc;
  $l = 1;
  var e5 = ks();
  return oc.f = e5, oc;
}
function ac() {
  if (Vl) return Ul;
  Vl = 1;
  var e5 = La(), t2 = Bs(), n2 = ic(), r2 = xu().f;
  return Ul = function(o2) {
    var i2 = e5.Symbol || (e5.Symbol = {});
    t2(i2, o2) || r2(i2, o2, { value: n2.f(o2) });
  };
}
function sc() {
  if (Gl) return Wl;
  Gl = 1;
  var e5 = Wi(), t2 = Ma(), n2 = ks(), r2 = Hl();
  return Wl = function() {
    var o2 = t2("Symbol"), i2 = o2 && o2.prototype, a2 = i2 && i2.valueOf, s2 = n2("toPrimitive");
    i2 && !i2[s2] && r2(i2, s2, function(t3) {
      return e5(a2, this);
    }, { arity: 1 });
  };
}
function uc() {
  if (Kl) return ql;
  Kl = 1;
  var e5 = Ru(), t2 = Lu();
  return ql = e5 ? {}.toString : function() {
    return "[object " + t2(this) + "]";
  };
}
function lc() {
  if (Xl) return Yl;
  Xl = 1;
  var e5 = Ru(), t2 = xu().f, n2 = Ou(), r2 = Bs(), o2 = uc(), i2 = ks()("toStringTag");
  return Yl = function(a2, s2, u2, l2) {
    var c2 = u2 ? a2 : a2 && a2.prototype;
    c2 && (r2(c2, i2) || t2(c2, i2, { configurable: true, value: s2 }), l2 && !e5 && n2(c2, "toString", o2));
  };
}
function cc() {
  if (Jl) return Zl;
  Jl = 1;
  var e5 = ki(), t2 = Mi(), n2 = e5.WeakMap;
  return Zl = t2(n2) && /native code/.test(String(n2));
}
function dc() {
  if (ec) return Ql;
  ec = 1;
  var e5, t2, n2, r2 = cc(), o2 = ki(), i2 = Ra(), a2 = Ou(), s2 = Bs(), u2 = xs(), l2 = Dl(), c2 = vl(), d2 = "Object already initialized", f2 = o2.TypeError, p2 = o2.WeakMap;
  if (r2 || u2.state) {
    var h2 = u2.state || (u2.state = new p2());
    h2.get = h2.get, h2.has = h2.has, h2.set = h2.set, e5 = function(e6, t3) {
      if (h2.has(e6)) throw new f2(d2);
      return t3.facade = e6, h2.set(e6, t3), t3;
    }, t2 = function(e6) {
      return h2.get(e6) || {};
    }, n2 = function(e6) {
      return h2.has(e6);
    };
  } else {
    var g2 = l2("state");
    c2[g2] = true, e5 = function(e6, t3) {
      if (s2(e6, g2)) throw new f2(d2);
      return t3.facade = e6, a2(e6, g2, t3), t3;
    }, t2 = function(e6) {
      return s2(e6, g2) ? e6[g2] : {};
    }, n2 = function(e6) {
      return s2(e6, g2);
    };
  }
  return Ql = { set: e5, get: t2, has: n2, enforce: function(r3) {
    return n2(r3) ? t2(r3) : e5(r3, {});
  }, getterFor: function(e6) {
    return function(n3) {
      var r3;
      if (!i2(n3) || (r3 = t2(n3)).type !== e6) throw new f2("Incompatible receiver, " + e6 + " required");
      return r3;
    };
  } };
}
function fc() {
  if (nc) return tc;
  nc = 1;
  var e5 = Ms(), t2 = _i(), n2 = Fa(), r2 = Ns(), o2 = Iu(), i2 = zu(), a2 = t2([].push), s2 = function(t3) {
    var s3 = 1 === t3, u2 = 2 === t3, l2 = 3 === t3, c2 = 4 === t3, d2 = 6 === t3, f2 = 7 === t3, p2 = 5 === t3 || d2;
    return function(h2, g2, v2, m2) {
      for (var y2, b2, E2 = r2(h2), C2 = n2(E2), D2 = o2(C2), w2 = e5(g2, v2), S2 = 0, A2 = m2 || i2, x2 = s3 ? A2(h2, D2) : u2 || f2 ? A2(h2, 0) : void 0; D2 > S2; S2++) if ((p2 || S2 in C2) && (b2 = w2(y2 = C2[S2], S2, E2), t3)) if (s3) x2[S2] = b2;
      else if (b2) switch (t3) {
        case 3:
          return true;
        case 5:
          return y2;
        case 6:
          return S2;
        case 2:
          a2(x2, y2);
      }
      else switch (t3) {
        case 4:
          return false;
        case 7:
          a2(x2, y2);
      }
      return d2 ? -1 : l2 || c2 ? c2 : x2;
    };
  };
  return tc = { forEach: s2(0), map: s2(1), filter: s2(2), some: s2(3), every: s2(4), find: s2(5), findIndex: s2(6), filterReject: s2(7) };
}
var pc, hc, gc, vc = {};
function mc() {
  return hc ? pc : (hc = 1, pc = $a() && !!Symbol.for && !!Symbol.keyFor);
}
var yc, bc = {};
var Ec, Cc, Dc, wc = {};
function Sc() {
  if (Cc) return Ec;
  Cc = 1;
  var e5 = _i(), t2 = Bu(), n2 = Mi(), r2 = Ri(), o2 = qu(), i2 = e5([].push);
  return Ec = function(e6) {
    if (n2(e6)) return e6;
    if (t2(e6)) {
      for (var a2 = e6.length, s2 = [], u2 = 0; u2 < a2; u2++) {
        var l2 = e6[u2];
        "string" == typeof l2 ? i2(s2, l2) : "number" != typeof l2 && "Number" !== r2(l2) && "String" !== r2(l2) || i2(s2, o2(l2));
      }
      var c2 = s2.length, d2 = true;
      return function(e7, n3) {
        if (d2) return d2 = false, n3;
        if (t2(this)) return n3;
        for (var r3 = 0; r3 < c2; r3++) if (s2[r3] === e7) return n3;
      };
    }
  }, Ec;
}
var Ac, xc, Oc = {};
function Nc() {
  return xc || (xc = 1, (function() {
    if (rc) return Gu;
    rc = 1;
    var e5 = Nu(), t2 = ki(), n2 = Wi(), r2 = _i(), o2 = Ss(), i2 = Vi(), a2 = $a(), s2 = Fi(), u2 = Bs(), l2 = ja(), c2 = Au(), d2 = _a(), f2 = Is(), p2 = qu(), h2 = ka(), g2 = wl(), v2 = bl(), m2 = xl(), y2 = Fl(), b2 = jl(), E2 = Rs(), C2 = xu(), D2 = El(), w2 = Ta(), S2 = Hl(), A2 = zl(), x2 = Os(), O2 = Dl(), N2 = vl(), B2 = Ts(), T2 = ks(), k2 = ic(), F2 = ac(), I2 = sc(), P2 = lc(), _2 = dc(), R2 = fc().forEach, L2 = O2("hidden"), M2 = "Symbol", j2 = "prototype", H2 = _2.set, z2 = _2.getterFor(M2), $2 = Object[j2], U2 = t2.Symbol, V2 = U2 && U2[j2], W2 = t2.RangeError, G2 = t2.TypeError, q2 = t2.QObject, K2 = E2.f, Y2 = C2.f, X2 = y2.f, Z2 = w2.f, J2 = r2([].push), Q2 = x2("symbols"), ee2 = x2("op-symbols"), te2 = x2("wks"), ne2 = !q2 || !q2[j2] || !q2[j2].findChild, re2 = function(e6, t3, n3) {
      var r3 = K2($2, t3);
      r3 && delete $2[t3], Y2(e6, t3, n3), r3 && e6 !== $2 && Y2($2, t3, r3);
    }, oe2 = i2 && s2(function() {
      return 7 !== g2(Y2({}, "a", { get: function() {
        return Y2(this, "a", { value: 7 }).a;
      } })).a;
    }) ? re2 : Y2, ie2 = function(e6, t3) {
      var n3 = Q2[e6] = g2(V2);
      return H2(n3, { type: M2, tag: e6, description: t3 }), i2 || (n3.description = t3), n3;
    }, ae2 = function(e6, t3, n3) {
      e6 === $2 && ae2(ee2, t3, n3), c2(e6);
      var r3 = f2(t3);
      return c2(n3), u2(Q2, r3) ? (n3.enumerable ? (u2(e6, L2) && e6[L2][r3] && (e6[L2][r3] = false), n3 = g2(n3, { enumerable: h2(0, false) })) : (u2(e6, L2) || Y2(e6, L2, h2(1, g2(null))), e6[L2][r3] = true), oe2(e6, r3, n3)) : Y2(e6, r3, n3);
    }, se2 = function(e6, t3) {
      c2(e6);
      var r3 = d2(t3), o3 = v2(r3).concat(de2(r3));
      return R2(o3, function(t4) {
        i2 && !n2(ue2, r3, t4) || ae2(e6, t4, r3[t4]);
      }), e6;
    }, ue2 = function(e6) {
      var t3 = f2(e6), r3 = n2(Z2, this, t3);
      return !(this === $2 && u2(Q2, t3) && !u2(ee2, t3)) && (!(r3 || !u2(this, t3) || !u2(Q2, t3) || u2(this, L2) && this[L2][t3]) || r3);
    }, le2 = function(e6, t3) {
      var n3 = d2(e6), r3 = f2(t3);
      if (n3 !== $2 || !u2(Q2, r3) || u2(ee2, r3)) {
        var o3 = K2(n3, r3);
        return !o3 || !u2(Q2, r3) || u2(n3, L2) && n3[L2][r3] || (o3.enumerable = true), o3;
      }
    }, ce2 = function(e6) {
      var t3 = X2(d2(e6)), n3 = [];
      return R2(t3, function(e7) {
        u2(Q2, e7) || u2(N2, e7) || J2(n3, e7);
      }), n3;
    }, de2 = function(e6) {
      var t3 = e6 === $2, n3 = X2(t3 ? ee2 : d2(e6)), r3 = [];
      return R2(n3, function(e7) {
        !u2(Q2, e7) || t3 && !u2($2, e7) || J2(r3, Q2[e7]);
      }), r3;
    };
    a2 || (U2 = function() {
      if (l2(V2, this)) throw new G2("Symbol is not a constructor");
      var e6 = arguments.length && void 0 !== arguments[0] ? p2(arguments[0]) : void 0, r3 = B2(e6), o3 = function(e7) {
        var i3 = void 0 === this ? t2 : this;
        i3 === $2 && n2(o3, ee2, e7), u2(i3, L2) && u2(i3[L2], r3) && (i3[L2][r3] = false);
        var a3 = h2(1, e7);
        try {
          oe2(i3, r3, a3);
        } catch (e8) {
          if (!(e8 instanceof W2)) throw e8;
          re2(i3, r3, a3);
        }
      };
      return i2 && ne2 && oe2($2, r3, { configurable: true, set: o3 }), ie2(r3, e6);
    }, S2(V2 = U2[j2], "toString", function() {
      return z2(this).tag;
    }), S2(U2, "withoutSetter", function(e6) {
      return ie2(B2(e6), e6);
    }), w2.f = ue2, C2.f = ae2, D2.f = se2, E2.f = le2, m2.f = y2.f = ce2, b2.f = de2, k2.f = function(e6) {
      return ie2(T2(e6), e6);
    }, i2 && (A2(V2, "description", { configurable: true, get: function() {
      return z2(this).description;
    } }), o2 || S2($2, "propertyIsEnumerable", ue2, { unsafe: true }))), e5({ global: true, constructor: true, wrap: true, forced: !a2, sham: !a2 }, { Symbol: U2 }), R2(v2(te2), function(e6) {
      F2(e6);
    }), e5({ target: M2, stat: true, forced: !a2 }, { useSetter: function() {
      ne2 = true;
    }, useSimple: function() {
      ne2 = false;
    } }), e5({ target: "Object", stat: true, forced: !a2, sham: !i2 }, { create: function(e6, t3) {
      return void 0 === t3 ? g2(e6) : se2(g2(e6), t3);
    }, defineProperty: ae2, defineProperties: se2, getOwnPropertyDescriptor: le2 }), e5({ target: "Object", stat: true, forced: !a2 }, { getOwnPropertyNames: ce2 }), I2(), P2(U2, M2), N2[L2] = true;
  })(), (function() {
    if (gc) return vc;
    gc = 1;
    var e5 = Nu(), t2 = Ma(), n2 = Bs(), r2 = qu(), o2 = Os(), i2 = mc(), a2 = o2("string-to-symbol-registry"), s2 = o2("symbol-to-string-registry");
    e5({ target: "Symbol", stat: true, forced: !i2 }, { for: function(e6) {
      var o3 = r2(e6);
      if (n2(a2, o3)) return a2[o3];
      var i3 = t2("Symbol")(o3);
      return a2[o3] = i3, s2[i3] = o3, i3;
    } });
  })(), (function() {
    if (yc) return bc;
    yc = 1;
    var e5 = Nu(), t2 = Bs(), n2 = Va(), r2 = Wa(), o2 = Os(), i2 = mc(), a2 = o2("symbol-to-string-registry");
    e5({ target: "Symbol", stat: true, forced: !i2 }, { keyFor: function(e6) {
      if (!n2(e6)) throw new TypeError(r2(e6) + " is not a symbol");
      if (t2(a2, e6)) return a2[e6];
    } });
  })(), (function() {
    if (Dc) return wc;
    Dc = 1;
    var e5 = Nu(), t2 = Ma(), n2 = Pi(), r2 = Wi(), o2 = _i(), i2 = Fi(), a2 = Mi(), s2 = Va(), u2 = kl(), l2 = Sc(), c2 = $a(), d2 = String, f2 = t2("JSON", "stringify"), p2 = o2(/./.exec), h2 = o2("".charAt), g2 = o2("".charCodeAt), v2 = o2("".replace), m2 = o2(1.1.toString), y2 = /[\uD800-\uDFFF]/g, b2 = /^[\uD800-\uDBFF]$/, E2 = /^[\uDC00-\uDFFF]$/, C2 = !c2 || i2(function() {
      var e6 = t2("Symbol")("stringify detection");
      return "[null]" !== f2([e6]) || "{}" !== f2({ a: e6 }) || "{}" !== f2(Object(e6));
    }), D2 = i2(function() {
      return '"\\udf06\\ud834"' !== f2("\uDF06\uD834") || '"\\udead"' !== f2("\uDEAD");
    }), w2 = function(e6, t3) {
      var o3 = u2(arguments), i3 = l2(t3);
      if (a2(i3) || void 0 !== e6 && !s2(e6)) return o3[1] = function(e7, t4) {
        if (a2(i3) && (t4 = r2(i3, this, d2(e7), t4)), !s2(t4)) return t4;
      }, n2(f2, null, o3);
    }, S2 = function(e6, t3, n3) {
      var r3 = h2(n3, t3 - 1), o3 = h2(n3, t3 + 1);
      return p2(b2, e6) && !p2(E2, o3) || p2(E2, e6) && !p2(b2, r3) ? "\\u" + m2(g2(e6, 0), 16) : e6;
    };
    f2 && e5({ target: "JSON", stat: true, arity: 3, forced: C2 || D2 }, { stringify: function(e6, t3, r3) {
      var o3 = u2(arguments), i3 = n2(C2 ? w2 : f2, null, o3);
      return D2 && "string" == typeof i3 ? v2(i3, y2, S2) : i3;
    } });
  })(), (function() {
    if (Ac) return Oc;
    Ac = 1;
    var e5 = Nu(), t2 = $a(), n2 = Fi(), r2 = jl(), o2 = Ns();
    e5({ target: "Object", stat: true, forced: !t2 || n2(function() {
      r2.f(1);
    }) }, { getOwnPropertySymbols: function(e6) {
      var t3 = r2.f;
      return t3 ? t3(o2(e6)) : [];
    } });
  })()), Wu;
}
var Bc, Tc = {};
function kc() {
  return Bc || (Bc = 1, ac()("asyncDispose")), Tc;
}
var Fc;
var Ic, Pc = {};
function _c() {
  return Ic || (Ic = 1, ac()("dispose")), Pc;
}
var Rc;
var Lc;
var Mc, jc = {};
function Hc() {
  return Mc || (Mc = 1, ac()("iterator")), jc;
}
var zc;
var $c;
var Uc;
var Vc;
var Wc;
var Gc;
var qc, Kc = {};
var Yc, Xc = {};
var Zc;
var Jc, Qc, ed, td = {};
function nd() {
  return ed ? Qc : (ed = 1, (function() {
    if (Du) return Ti;
    Du = 1;
    var e5 = Nu(), t2 = Fi(), n2 = Bu(), r2 = Ra(), o2 = Ns(), i2 = Iu(), a2 = Pu(), s2 = _u(), u2 = zu(), l2 = $u(), c2 = ks(), d2 = za(), f2 = c2("isConcatSpreadable"), p2 = d2 >= 51 || !t2(function() {
      var e6 = [];
      return e6[f2] = false, e6.concat()[0] !== e6;
    }), h2 = function(e6) {
      if (!r2(e6)) return false;
      var t3 = e6[f2];
      return void 0 !== t3 ? !!t3 : n2(e6);
    };
    e5({ target: "Array", proto: true, arity: 1, forced: !p2 || !l2("concat") }, { concat: function(e6) {
      var t3, n3, r3, l3, c3, d3 = o2(this), f3 = u2(d3, 0), p3 = 0;
      for (t3 = -1, r3 = arguments.length; t3 < r3; t3++) if (h2(c3 = -1 === t3 ? d3 : arguments[t3])) for (l3 = i2(c3), a2(p3 + l3), n3 = 0; n3 < l3; n3++, p3++) n3 in c3 && s2(f3, p3, c3[n3]);
      else a2(p3 + 1), s2(f3, p3++, c3);
      return f3.length = p3, f3;
    } });
  })(), Nc(), kc(), Fc || (Fc = 1, ac()("asyncIterator")), _c(), Rc || (Rc = 1, ac()("hasInstance")), Lc || (Lc = 1, ac()("isConcatSpreadable")), Hc(), zc || (zc = 1, ac()("match")), $c || ($c = 1, ac()("matchAll")), Uc || (Uc = 1, ac()("replace")), Vc || (Vc = 1, ac()("search")), Wc || (Wc = 1, ac()("species")), Gc || (Gc = 1, ac()("split")), (function() {
    if (qc) return Kc;
    qc = 1;
    var e5 = ac(), t2 = sc();
    e5("toPrimitive"), t2();
  })(), (function() {
    if (Yc) return Xc;
    Yc = 1;
    var e5 = Ma(), t2 = ac(), n2 = lc();
    t2("toStringTag"), n2(e5("Symbol"), "Symbol");
  })(), Zc || (Zc = 1, ac()("unscopables")), (function() {
    if (Jc) return td;
    Jc = 1;
    var e5 = ki();
    lc()(e5.JSON, "JSON", true);
  })(), Qc = La().Symbol);
}
var rd, od, id, ad, sd, ud, ld, cd, dd, fd, pd, hd, gd, vd, md, yd, bd, Ed, Cd, Dd, wd, Sd, Ad, xd, Od, Nd, Bd, Td, kd, Fd, Id, Pd, _d, Rd = {};
function Ld() {
  return od ? rd : (od = 1, rd = function() {
  });
}
function Md() {
  return ad ? id : (ad = 1, id = {});
}
function jd() {
  if (ud) return sd;
  ud = 1;
  var e5 = Vi(), t2 = Bs(), n2 = Function.prototype, r2 = e5 && Object.getOwnPropertyDescriptor, o2 = t2(n2, "name"), i2 = o2 && "something" === (function() {
  }).name, a2 = o2 && (!e5 || e5 && r2(n2, "name").configurable);
  return sd = { EXISTS: o2, PROPER: i2, CONFIGURABLE: a2 };
}
function Hd() {
  return cd || (cd = 1, ld = !Fi()(function() {
    function e5() {
    }
    return e5.prototype.constructor = null, Object.getPrototypeOf(new e5()) !== e5.prototype;
  })), ld;
}
function zd() {
  if (fd) return dd;
  fd = 1;
  var e5 = Bs(), t2 = Mi(), n2 = Ns(), r2 = Dl(), o2 = Hd(), i2 = r2("IE_PROTO"), a2 = Object, s2 = a2.prototype;
  return dd = o2 ? a2.getPrototypeOf : function(r3) {
    var o3 = n2(r3);
    if (e5(o3, i2)) return o3[i2];
    var u2 = o3.constructor;
    return t2(u2) && o3 instanceof u2 ? u2.prototype : o3 instanceof a2 ? s2 : null;
  }, dd;
}
function $d() {
  if (hd) return pd;
  hd = 1;
  var e5, t2, n2, r2 = Fi(), o2 = Mi(), i2 = Ra(), a2 = wl(), s2 = zd(), u2 = Hl(), l2 = ks(), c2 = Ss(), d2 = l2("iterator"), f2 = false;
  return [].keys && ("next" in (n2 = [].keys()) ? (t2 = s2(s2(n2))) !== Object.prototype && (e5 = t2) : f2 = true), !i2(e5) || r2(function() {
    var t3 = {};
    return e5[d2].call(t3) !== t3;
  }) ? e5 = {} : c2 && (e5 = a2(e5)), o2(e5[d2]) || u2(e5, d2, function() {
    return this;
  }), pd = { IteratorPrototype: e5, BUGGY_SAFARI_ITERATORS: f2 };
}
function Ud() {
  if (vd) return gd;
  vd = 1;
  var e5 = $d().IteratorPrototype, t2 = wl(), n2 = ka(), r2 = lc(), o2 = Md(), i2 = function() {
    return this;
  };
  return gd = function(a2, s2, u2, l2) {
    var c2 = s2 + " Iterator";
    return a2.prototype = t2(e5, { next: n2(+!l2, u2) }), r2(a2, c2, false, true), o2[c2] = i2, a2;
  };
}
function Vd() {
  if (yd) return md;
  yd = 1;
  var e5 = _i(), t2 = Ga();
  return md = function(n2, r2, o2) {
    try {
      return e5(t2(Object.getOwnPropertyDescriptor(n2, r2)[o2]));
    } catch (e6) {
    }
  };
}
function Wd() {
  if (Ed) return bd;
  Ed = 1;
  var e5 = Ra();
  return bd = function(t2) {
    return e5(t2) || null === t2;
  };
}
function Gd() {
  if (Dd) return Cd;
  Dd = 1;
  var e5 = Wd(), t2 = String, n2 = TypeError;
  return Cd = function(r2) {
    if (e5(r2)) return r2;
    throw new n2("Can't set " + t2(r2) + " as a prototype");
  };
}
function qd() {
  if (Sd) return wd;
  Sd = 1;
  var e5 = Vd(), t2 = Ra(), n2 = Pa(), r2 = Gd();
  return wd = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var o2, i2 = false, a2 = {};
    try {
      (o2 = e5(Object.prototype, "__proto__", "set"))(a2, []), i2 = a2 instanceof Array;
    } catch (e6) {
    }
    return function(e6, a3) {
      return n2(e6), r2(a3), t2(e6) ? (i2 ? o2(e6, a3) : e6.__proto__ = a3, e6) : e6;
    };
  })() : void 0), wd;
}
function Kd() {
  if (xd) return Ad;
  xd = 1;
  var e5 = Nu(), t2 = Wi(), n2 = Ss(), r2 = jd(), o2 = Mi(), i2 = Ud(), a2 = zd(), s2 = qd(), u2 = lc(), l2 = Ou(), c2 = Hl(), d2 = ks(), f2 = Md(), p2 = $d(), h2 = r2.PROPER, g2 = r2.CONFIGURABLE, v2 = p2.IteratorPrototype, m2 = p2.BUGGY_SAFARI_ITERATORS, y2 = d2("iterator"), b2 = "keys", E2 = "values", C2 = "entries", D2 = function() {
    return this;
  };
  return Ad = function(r3, d3, p3, w2, S2, A2, x2) {
    i2(p3, d3, w2);
    var O2, N2, B2, T2 = function(e6) {
      if (e6 === S2 && _2) return _2;
      if (!m2 && e6 && e6 in I2) return I2[e6];
      switch (e6) {
        case b2:
        case E2:
        case C2:
          return function() {
            return new p3(this, e6);
          };
      }
      return function() {
        return new p3(this);
      };
    }, k2 = d3 + " Iterator", F2 = false, I2 = r3.prototype, P2 = I2[y2] || I2["@@iterator"] || S2 && I2[S2], _2 = !m2 && P2 || T2(S2), R2 = "Array" === d3 && I2.entries || P2;
    if (R2 && (O2 = a2(R2.call(new r3()))) !== Object.prototype && O2.next && (n2 || a2(O2) === v2 || (s2 ? s2(O2, v2) : o2(O2[y2]) || c2(O2, y2, D2)), u2(O2, k2, true, true), n2 && (f2[k2] = D2)), h2 && S2 === E2 && P2 && P2.name !== E2 && (!n2 && g2 ? l2(I2, "name", E2) : (F2 = true, _2 = function() {
      return t2(P2, this);
    })), S2) if (N2 = { values: T2(E2), keys: A2 ? _2 : T2(b2), entries: T2(C2) }, x2) for (B2 in N2) (m2 || F2 || !(B2 in I2)) && c2(I2, B2, N2[B2]);
    else e5({ target: d3, proto: true, forced: m2 || F2 }, N2);
    return n2 && !x2 || I2[y2] === _2 || c2(I2, y2, _2, { name: S2 }), f2[d3] = _2, N2;
  };
}
function Yd() {
  return Nd ? Od : (Nd = 1, Od = function(e5, t2) {
    return { value: e5, done: t2 };
  });
}
function Xd() {
  if (Td) return Bd;
  Td = 1;
  var e5 = _a(), t2 = Ld(), n2 = Md(), r2 = dc(), o2 = xu().f, i2 = Kd(), a2 = Yd(), s2 = Ss(), u2 = Vi(), l2 = "Array Iterator", c2 = r2.set, d2 = r2.getterFor(l2);
  Bd = i2(Array, "Array", function(t3, n3) {
    c2(this, { type: l2, target: e5(t3), index: 0, kind: n3 });
  }, function() {
    var e6 = d2(this), t3 = e6.target, n3 = e6.index++;
    if (!t3 || n3 >= t3.length) return e6.target = null, a2(void 0, true);
    switch (e6.kind) {
      case "keys":
        return a2(n3, false);
      case "values":
        return a2(t3[n3], false);
    }
    return a2([n3, t3[n3]], false);
  }, "values");
  var f2 = n2.Arguments = n2.Array;
  if (t2("keys"), t2("values"), t2("entries"), !s2 && u2 && "values" !== f2.name) try {
    o2(f2, "name", { value: "values" });
  } catch (e6) {
  }
  return Bd;
}
function Zd() {
  return Fd ? kd : (Fd = 1, kd = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 });
}
function Jd() {
  if (Id) return Rd;
  Id = 1, Xd();
  var e5 = Zd(), t2 = ki(), n2 = lc(), r2 = Md();
  for (var o2 in e5) n2(t2[o2], o2), r2[o2] = r2.Array;
  return Rd;
}
function Qd() {
  if (_d) return Pd;
  _d = 1;
  var e5 = nd();
  return Jd(), Pd = e5;
}
var ef, tf = {};
var nf;
var rf;
var of, af, sf;
function uf() {
  if (sf) return af;
  sf = 1;
  var e5 = Qd();
  return (function() {
    if (ef) return tf;
    ef = 1;
    var e6 = ks(), t2 = xu().f, n2 = e6("metadata"), r2 = Function.prototype;
    void 0 === r2[n2] && t2(r2, n2, { value: null });
  })(), nf || (nf = 1, kc()), rf || (rf = 1, _c()), of || (of = 1, ac()("metadata")), af = e5;
}
var lf, cf, df;
function ff() {
  if (cf) return lf;
  cf = 1;
  var e5 = Ma(), t2 = _i(), n2 = e5("Symbol"), r2 = n2.keyFor, o2 = t2(n2.prototype.valueOf);
  return lf = n2.isRegisteredSymbol || function(e6) {
    try {
      return void 0 !== r2(o2(e6));
    } catch (e7) {
      return false;
    }
  };
}
var pf, hf, gf;
function vf() {
  if (hf) return pf;
  hf = 1;
  for (var e5 = Os(), t2 = Ma(), n2 = _i(), r2 = Va(), o2 = ks(), i2 = t2("Symbol"), a2 = i2.isWellKnownSymbol, s2 = t2("Object", "getOwnPropertyNames"), u2 = n2(i2.prototype.valueOf), l2 = e5("wks"), c2 = 0, d2 = s2(i2), f2 = d2.length; c2 < f2; c2++) try {
    var p2 = d2[c2];
    r2(i2[p2]) && o2(p2);
  } catch (e6) {
  }
  return pf = function(e6) {
    if (a2 && a2(e6)) return true;
    try {
      for (var t3 = u2(e6), n3 = 0, r3 = s2(l2), o3 = r3.length; n3 < o3; n3++) if (l2[r3[n3]] == t3) return true;
    } catch (e7) {
    }
    return false;
  }, pf;
}
var mf;
var yf;
var bf;
var Ef;
var Cf;
var Df;
var wf;
var Sf, Af, xf, Of, Nf;
function Bf() {
  if (xf) return Af;
  xf = 1;
  var e5 = uf();
  return df || (df = 1, Nu()({ target: "Symbol", stat: true }, { isRegisteredSymbol: ff() })), gf || (gf = 1, Nu()({ target: "Symbol", stat: true, forced: true }, { isWellKnownSymbol: vf() })), mf || (mf = 1, ac()("customMatcher")), yf || (yf = 1, ac()("observable")), bf || (bf = 1, Nu()({ target: "Symbol", stat: true, name: "isRegisteredSymbol" }, { isRegistered: ff() })), Ef || (Ef = 1, Nu()({ target: "Symbol", stat: true, name: "isWellKnownSymbol", forced: true }, { isWellKnown: vf() })), Cf || (Cf = 1, ac()("matcher")), Df || (Df = 1, ac()("metadataKey")), wf || (wf = 1, ac()("patternMatch")), Sf || (Sf = 1, ac()("replaceAll")), Af = e5;
}
function Tf() {
  return Nf ? Of : (Nf = 1, Of = Bf());
}
var kf, Ff, If, Pf, _f, Rf, Lf, Mf, jf, Hf, zf, $f, Uf, Vf = b(Tf()), Wf = {};
function Gf() {
  if (Ff) return kf;
  Ff = 1;
  var e5 = _i(), t2 = ku(), n2 = qu(), r2 = Pa(), o2 = e5("".charAt), i2 = e5("".charCodeAt), a2 = e5("".slice), s2 = function(e6) {
    return function(s3, u2) {
      var l2, c2, d2 = n2(r2(s3)), f2 = t2(u2), p2 = d2.length;
      return f2 < 0 || f2 >= p2 ? e6 ? "" : void 0 : (l2 = i2(d2, f2)) < 55296 || l2 > 56319 || f2 + 1 === p2 || (c2 = i2(d2, f2 + 1)) < 56320 || c2 > 57343 ? e6 ? o2(d2, f2) : l2 : e6 ? a2(d2, f2, f2 + 2) : c2 - 56320 + (l2 - 55296 << 10) + 65536;
    };
  };
  return kf = { codeAt: s2(false), charAt: s2(true) };
}
function qf() {
  return _f ? Pf : (_f = 1, Xd(), (function() {
    if (If) return Wf;
    If = 1;
    var e5 = Gf().charAt, t2 = qu(), n2 = dc(), r2 = Kd(), o2 = Yd(), i2 = "String Iterator", a2 = n2.set, s2 = n2.getterFor(i2);
    r2(String, "String", function(e6) {
      a2(this, { type: i2, string: t2(e6), index: 0 });
    }, function() {
      var t3, n3 = s2(this), r3 = n3.string, i3 = n3.index;
      return i3 >= r3.length ? o2(void 0, true) : (t3 = e5(r3, i3), n3.index += t3.length, o2(t3, false));
    });
  })(), Hc(), Pf = ic().f("iterator"));
}
function Kf() {
  if (Lf) return Rf;
  Lf = 1;
  var e5 = qf();
  return Jd(), Rf = e5;
}
function Yf() {
  return jf ? Mf : (jf = 1, Mf = Kf());
}
function Xf() {
  return zf ? Hf : (zf = 1, Hf = Yf());
}
function Zf() {
  return Uf ? $f : (Uf = 1, $f = Xf());
}
var Jf = b(Zf());
function Qf(e5) {
  return Qf = "function" == typeof Vf && "symbol" == typeof Jf ? function(e6) {
    return typeof e6;
  } : function(e6) {
    return e6 && "function" == typeof Vf && e6.constructor === Vf && e6 !== Vf.prototype ? "symbol" : typeof e6;
  }, Qf(e5);
}
var ep, tp = {};
if ((function() {
  if (ep) return tp;
  ep = 1;
  var e5 = fr(), t2 = C(), n2 = N(), r2 = gn().f, o2 = Ae();
  e5({ target: "Object", stat: true, forced: !o2 || t2(function() {
    r2(1);
  }), sham: !o2 }, { getOwnPropertyDescriptor: function(e6, t3) {
    return r2(n2(e6), t3);
  } });
})(), "object" === ("undefined" == typeof global ? "undefined" : Qf(global))) {
  var np = Object.getOwnPropertyDescriptor(global, "window");
  global.window && !np.set || (global.window = global, global.requestAnimationFrame = function() {
  }, global.navigator = { userAgent: "" }, global.location = { hostname: "0.0.0.0", port: 0, protocol: "http:" }, global.btoa = function() {
  }, global.crypto = { getRandomValues: function(e5) {
    return nodeCrypto.randomFillSync(e5);
  } }), null != global.document && null == global.document.getElementsByTagName && (global.document.getElementsByTagName = function() {
    return [];
  });
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function rp(e5) {
  return "[object Object]" === Object.prototype.toString.call(e5);
}
function op(e5) {
  var t2, n2;
  return false !== rp(e5) && (void 0 === (t2 = e5.constructor) || false !== rp(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf"));
}
function ip(e5) {
  for (var t2 = arguments.length, n2 = Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  throw Error("[Immer] minified error nr: " + e5 + (n2.length ? " " + n2.map(function(e6) {
    return "'" + e6 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function ap(e5) {
  return !!e5 && !!e5[Wp];
}
function sp(e5) {
  var t2;
  return !!e5 && ((function(e6) {
    if (!e6 || "object" != typeof e6) return false;
    var t3 = Object.getPrototypeOf(e6);
    if (null === t3) return true;
    var n2 = Object.hasOwnProperty.call(t3, "constructor") && t3.constructor;
    return n2 === Object || "function" == typeof n2 && Function.toString.call(n2) === Gp;
  })(e5) || Array.isArray(e5) || !!e5[Vp] || !!(null === (t2 = e5.constructor) || void 0 === t2 ? void 0 : t2[Vp]) || fp(e5) || pp(e5));
}
function up(e5, t2, n2) {
  void 0 === n2 && (n2 = false), 0 === lp(e5) ? (n2 ? Object.keys : qp)(e5).forEach(function(r2) {
    n2 && "symbol" == typeof r2 || t2(r2, e5[r2], e5);
  }) : e5.forEach(function(n3, r2) {
    return t2(r2, n3, e5);
  });
}
function lp(e5) {
  var t2 = e5[Wp];
  return t2 ? t2.i > 3 ? t2.i - 4 : t2.i : Array.isArray(e5) ? 1 : fp(e5) ? 2 : pp(e5) ? 3 : 0;
}
function cp(e5, t2) {
  return 2 === lp(e5) ? e5.has(t2) : Object.prototype.hasOwnProperty.call(e5, t2);
}
function dp(e5, t2, n2) {
  var r2 = lp(e5);
  2 === r2 ? e5.set(t2, n2) : 3 === r2 ? e5.add(n2) : e5[t2] = n2;
}
function fp(e5) {
  return Hp && e5 instanceof Map;
}
function pp(e5) {
  return zp && e5 instanceof Set;
}
function hp(e5) {
  return e5.o || e5.t;
}
function gp(e5) {
  if (Array.isArray(e5)) return Array.prototype.slice.call(e5);
  var t2 = Kp(e5);
  delete t2[Wp];
  for (var n2 = qp(t2), r2 = 0; r2 < n2.length; r2++) {
    var o2 = n2[r2], i2 = t2[o2];
    false === i2.writable && (i2.writable = true, i2.configurable = true), (i2.get || i2.set) && (t2[o2] = { configurable: true, writable: true, enumerable: i2.enumerable, value: e5[o2] });
  }
  return Object.create(Object.getPrototypeOf(e5), t2);
}
function vp(e5, t2) {
  return void 0 === t2 && (t2 = false), yp(e5) || ap(e5) || !sp(e5) || (lp(e5) > 1 && (e5.set = e5.add = e5.clear = e5.delete = mp), Object.freeze(e5), t2 && up(e5, function(e6, t3) {
    return vp(t3, true);
  }, true)), e5;
}
function mp() {
  ip(2);
}
function yp(e5) {
  return null == e5 || "object" != typeof e5 || Object.isFrozen(e5);
}
function bp(e5) {
  var t2 = Yp[e5];
  return t2 || ip(18, e5), t2;
}
function Ep() {
  return Mp;
}
function Cp(e5, t2) {
  t2 && (bp("Patches"), e5.u = [], e5.s = [], e5.v = t2);
}
function Dp(e5) {
  wp(e5), e5.p.forEach(Ap), e5.p = null;
}
function wp(e5) {
  e5 === Mp && (Mp = e5.l);
}
function Sp(e5) {
  return Mp = { p: [], l: Mp, h: e5, m: true, _: 0 };
}
function Ap(e5) {
  var t2 = e5[Wp];
  0 === t2.i || 1 === t2.i ? t2.j() : t2.g = true;
}
function xp(e5, t2) {
  t2._ = t2.p.length;
  var n2 = t2.p[0], r2 = void 0 !== e5 && e5 !== n2;
  return t2.h.O || bp("ES5").S(t2, e5, r2), r2 ? (n2[Wp].P && (Dp(t2), ip(4)), sp(e5) && (e5 = Op(t2, e5), t2.l || Bp(t2, e5)), t2.u && bp("Patches").M(n2[Wp].t, e5, t2.u, t2.s)) : e5 = Op(t2, n2, []), Dp(t2), t2.u && t2.v(t2.u, t2.s), e5 !== Up ? e5 : void 0;
}
function Op(e5, t2, n2) {
  if (yp(t2)) return t2;
  var r2 = t2[Wp];
  if (!r2) return up(t2, function(o3, i3) {
    return Np(e5, r2, t2, o3, i3, n2);
  }, true), t2;
  if (r2.A !== e5) return t2;
  if (!r2.P) return Bp(e5, r2.t, true), r2.t;
  if (!r2.I) {
    r2.I = true, r2.A._--;
    var o2 = 4 === r2.i || 5 === r2.i ? r2.o = gp(r2.k) : r2.o, i2 = o2, a2 = false;
    3 === r2.i && (i2 = new Set(o2), o2.clear(), a2 = true), up(i2, function(t3, i3) {
      return Np(e5, r2, o2, t3, i3, n2, a2);
    }), Bp(e5, o2, false), n2 && e5.u && bp("Patches").N(r2, n2, e5.u, e5.s);
  }
  return r2.o;
}
function Np(e5, t2, n2, r2, o2, i2, a2) {
  if (ap(o2)) {
    var s2 = Op(e5, o2, i2 && t2 && 3 !== t2.i && !cp(t2.R, r2) ? i2.concat(r2) : void 0);
    if (dp(n2, r2, s2), !ap(s2)) return;
    e5.m = false;
  } else a2 && n2.add(o2);
  if (sp(o2) && !yp(o2)) {
    if (!e5.h.D && e5._ < 1) return;
    Op(e5, o2), t2 && t2.A.l || Bp(e5, o2);
  }
}
function Bp(e5, t2, n2) {
  void 0 === n2 && (n2 = false), !e5.l && e5.h.D && e5.m && vp(t2, n2);
}
function Tp(e5, t2) {
  var n2 = e5[Wp];
  return (n2 ? hp(n2) : e5)[t2];
}
function kp(e5, t2) {
  if (t2 in e5) for (var n2 = Object.getPrototypeOf(e5); n2; ) {
    var r2 = Object.getOwnPropertyDescriptor(n2, t2);
    if (r2) return r2;
    n2 = Object.getPrototypeOf(n2);
  }
}
function Fp(e5) {
  e5.P || (e5.P = true, e5.l && Fp(e5.l));
}
function Ip(e5) {
  e5.o || (e5.o = gp(e5.t));
}
function Pp(e5, t2, n2) {
  var r2 = fp(t2) ? bp("MapSet").F(t2, n2) : pp(t2) ? bp("MapSet").T(t2, n2) : e5.O ? (function(e6, t3) {
    var n3 = Array.isArray(e6), r3 = { i: n3 ? 1 : 0, A: t3 ? t3.A : Ep(), P: false, I: false, R: {}, l: t3, t: e6, k: null, o: null, j: null, C: false }, o2 = r3, i2 = Xp;
    n3 && (o2 = [r3], i2 = Zp);
    var a2 = Proxy.revocable(o2, i2), s2 = a2.revoke, u2 = a2.proxy;
    return r3.k = u2, r3.j = s2, u2;
  })(t2, n2) : bp("ES5").J(t2, n2);
  return (n2 ? n2.A : Ep()).p.push(r2), r2;
}
function _p(e5) {
  return ap(e5) || ip(22, e5), (function e6(t2) {
    if (!sp(t2)) return t2;
    var n2, r2 = t2[Wp], o2 = lp(t2);
    if (r2) {
      if (!r2.P && (r2.i < 4 || !bp("ES5").K(r2))) return r2.t;
      r2.I = true, n2 = Rp(t2, o2), r2.I = false;
    } else n2 = Rp(t2, o2);
    return up(n2, function(t3, o3) {
      r2 && (function(e7, t4) {
        return 2 === lp(e7) ? e7.get(t4) : e7[t4];
      })(r2.t, t3) === o3 || dp(n2, t3, e6(o3));
    }), 3 === o2 ? new Set(n2) : n2;
  })(e5);
}
function Rp(e5, t2) {
  switch (t2) {
    case 2:
      return new Map(e5);
    case 3:
      return Array.from(e5);
  }
  return gp(e5);
}
var Lp, Mp, jp = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), Hp = "undefined" != typeof Map, zp = "undefined" != typeof Set, $p = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, Up = jp ? Symbol.for("immer-nothing") : ((Lp = {})["immer-nothing"] = true, Lp), Vp = jp ? Symbol.for("immer-draftable") : "__$immer_draftable", Wp = jp ? Symbol.for("immer-state") : "__$immer_state", Gp = "" + Object.prototype.constructor, qp = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e5) {
  return Object.getOwnPropertyNames(e5).concat(Object.getOwnPropertySymbols(e5));
} : Object.getOwnPropertyNames, Kp = Object.getOwnPropertyDescriptors || function(e5) {
  var t2 = {};
  return qp(e5).forEach(function(n2) {
    t2[n2] = Object.getOwnPropertyDescriptor(e5, n2);
  }), t2;
}, Yp = {}, Xp = { get: function(e5, t2) {
  if (t2 === Wp) return e5;
  var n2 = hp(e5);
  if (!cp(n2, t2)) return (function(e6, t3, n3) {
    var r3, o2 = kp(t3, n3);
    return o2 ? "value" in o2 ? o2.value : null === (r3 = o2.get) || void 0 === r3 ? void 0 : r3.call(e6.k) : void 0;
  })(e5, n2, t2);
  var r2 = n2[t2];
  return e5.I || !sp(r2) ? r2 : r2 === Tp(e5.t, t2) ? (Ip(e5), e5.o[t2] = Pp(e5.A.h, r2, e5)) : r2;
}, has: function(e5, t2) {
  return t2 in hp(e5);
}, ownKeys: function(e5) {
  return Reflect.ownKeys(hp(e5));
}, set: function(e5, t2, n2) {
  var r2 = kp(hp(e5), t2);
  if (null == r2 ? void 0 : r2.set) return r2.set.call(e5.k, n2), true;
  if (!e5.P) {
    var o2 = Tp(hp(e5), t2), i2 = null == o2 ? void 0 : o2[Wp];
    if (i2 && i2.t === n2) return e5.o[t2] = n2, e5.R[t2] = false, true;
    if ((function(e6, t3) {
      return e6 === t3 ? 0 !== e6 || 1 / e6 == 1 / t3 : e6 != e6 && t3 != t3;
    })(n2, o2) && (void 0 !== n2 || cp(e5.t, t2))) return true;
    Ip(e5), Fp(e5);
  }
  return e5.o[t2] === n2 && (void 0 !== n2 || t2 in e5.o) || Number.isNaN(n2) && Number.isNaN(e5.o[t2]) || (e5.o[t2] = n2, e5.R[t2] = true), true;
}, deleteProperty: function(e5, t2) {
  return void 0 !== Tp(e5.t, t2) || t2 in e5.t ? (e5.R[t2] = false, Ip(e5), Fp(e5)) : delete e5.R[t2], e5.o && delete e5.o[t2], true;
}, getOwnPropertyDescriptor: function(e5, t2) {
  var n2 = hp(e5), r2 = Reflect.getOwnPropertyDescriptor(n2, t2);
  return r2 ? { writable: true, configurable: 1 !== e5.i || "length" !== t2, enumerable: r2.enumerable, value: n2[t2] } : r2;
}, defineProperty: function() {
  ip(11);
}, getPrototypeOf: function(e5) {
  return Object.getPrototypeOf(e5.t);
}, setPrototypeOf: function() {
  ip(12);
} }, Zp = {};
up(Xp, function(e5, t2) {
  Zp[e5] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), Zp.deleteProperty = function(e5, t2) {
  return Zp.set.call(this, e5, t2, void 0);
}, Zp.set = function(e5, t2, n2) {
  return Xp.set.call(this, e5[0], t2, n2, e5[0]);
};
var Jp = (function() {
  function e5(e6) {
    var t3 = this;
    this.O = $p, this.D = true, this.produce = function(e7, n2, r2) {
      if ("function" == typeof e7 && "function" != typeof n2) {
        var o2 = n2;
        n2 = e7;
        var i2 = t3;
        return function(e8) {
          var t4 = this;
          void 0 === e8 && (e8 = o2);
          for (var r3 = arguments.length, a3 = Array(r3 > 1 ? r3 - 1 : 0), s3 = 1; s3 < r3; s3++) a3[s3 - 1] = arguments[s3];
          return i2.produce(e8, function(e9) {
            var r4;
            return (r4 = n2).call.apply(r4, [t4, e9].concat(a3));
          });
        };
      }
      var a2;
      if ("function" != typeof n2 && ip(6), void 0 !== r2 && "function" != typeof r2 && ip(7), sp(e7)) {
        var s2 = Sp(t3), u2 = Pp(t3, e7, void 0), l2 = true;
        try {
          a2 = n2(u2), l2 = false;
        } finally {
          l2 ? Dp(s2) : wp(s2);
        }
        return "undefined" != typeof Promise && a2 instanceof Promise ? a2.then(function(e8) {
          return Cp(s2, r2), xp(e8, s2);
        }, function(e8) {
          throw Dp(s2), e8;
        }) : (Cp(s2, r2), xp(a2, s2));
      }
      if (!e7 || "object" != typeof e7) {
        if (void 0 === (a2 = n2(e7)) && (a2 = e7), a2 === Up && (a2 = void 0), t3.D && vp(a2, true), r2) {
          var c2 = [], d2 = [];
          bp("Patches").M(e7, a2, c2, d2), r2(c2, d2);
        }
        return a2;
      }
      ip(21, e7);
    }, this.produceWithPatches = function(e7, n2) {
      if ("function" == typeof e7) return function(n3) {
        for (var r3 = arguments.length, o3 = Array(r3 > 1 ? r3 - 1 : 0), i3 = 1; i3 < r3; i3++) o3[i3 - 1] = arguments[i3];
        return t3.produceWithPatches(n3, function(t4) {
          return e7.apply(void 0, [t4].concat(o3));
        });
      };
      var r2, o2, i2 = t3.produce(e7, n2, function(e8, t4) {
        r2 = e8, o2 = t4;
      });
      return "undefined" != typeof Promise && i2 instanceof Promise ? i2.then(function(e8) {
        return [e8, r2, o2];
      }) : [i2, r2, o2];
    }, "boolean" == typeof (null == e6 ? void 0 : e6.useProxies) && this.setUseProxies(e6.useProxies), "boolean" == typeof (null == e6 ? void 0 : e6.autoFreeze) && this.setAutoFreeze(e6.autoFreeze);
  }
  var t2 = e5.prototype;
  return t2.createDraft = function(e6) {
    sp(e6) || ip(8), ap(e6) && (e6 = _p(e6));
    var t3 = Sp(this), n2 = Pp(this, e6, void 0);
    return n2[Wp].C = true, wp(t3), n2;
  }, t2.finishDraft = function(e6, t3) {
    var n2 = (e6 && e6[Wp]).A;
    return Cp(n2, t3), xp(void 0, n2);
  }, t2.setAutoFreeze = function(e6) {
    this.D = e6;
  }, t2.setUseProxies = function(e6) {
    e6 && !$p && ip(20), this.O = e6;
  }, t2.applyPatches = function(e6, t3) {
    var n2;
    for (n2 = t3.length - 1; n2 >= 0; n2--) {
      var r2 = t3[n2];
      if (0 === r2.path.length && "replace" === r2.op) {
        e6 = r2.value;
        break;
      }
    }
    n2 > -1 && (t3 = t3.slice(n2 + 1));
    var o2 = bp("Patches").$;
    return ap(e6) ? o2(e6, t3) : this.produce(e6, function(e7) {
      return o2(e7, t3);
    });
  }, e5;
})(), Qp = new Jp(), eh = Qp.produce;
Qp.produceWithPatches.bind(Qp), Qp.setAutoFreeze.bind(Qp), Qp.setUseProxies.bind(Qp), Qp.applyPatches.bind(Qp);
var th = Qp.createDraft.bind(Qp), nh = Qp.finishDraft.bind(Qp);
function rh(e5, t2, n2) {
  return t2 in e5 ? Object.defineProperty(e5, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e5[t2] = n2, e5;
}
var oh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), sh = /* @__PURE__ */ new WeakMap(), uh = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap();
function dh(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function fh(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? dh(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : dh(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
function ph(e5, t2) {
  if (null == e5) return {};
  var n2, r2, o2 = (function(e6, t3) {
    if (null == e6) return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e6);
    for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e6[n3]);
    return o3;
  })(e5, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e5);
    for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, n2) && (o2[n2] = e5[n2]);
  }
  return o2;
}
var hh, gh = function(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = !t2, r2 = t2 ? Ch(e5) : e5, o2 = hh.None, i2 = hh.None, a2 = 0, s2 = null;
  for (var u2 of r2) {
    var l2 = u2.codePointAt(0);
    if (!l2) break;
    var c2 = Ih(u2, l2);
    if ([o2, i2] = n2 ? [i2, c2] : [c2, o2], Ph(o2, hh.ZWJ) && Ph(i2, hh.ExtPict) && !Mh(n2 ? e5.substring(0, a2) : e5.substring(0, e5.length - a2))) break;
    if (Ph(o2, hh.RI) && Ph(i2, hh.RI) && !(s2 = null !== s2 ? !s2 : !!n2 || Hh(e5.substring(0, e5.length - a2)))) break;
    if (o2 !== hh.None && i2 !== hh.None && Rh(o2, i2)) break;
    a2 += u2.length;
  }
  return a2 || 1;
}, vh = /\s/, mh = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, yh = /['\u2018\u2019]/, bh = (e5, t2, n2) => {
  if (n2) {
    var r2 = e5.length - t2;
    return [e5.slice(r2, e5.length), e5.slice(0, r2)];
  }
  return [e5.slice(0, t2), e5.slice(t2)];
}, Eh = function e2(t2, n2) {
  var r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (vh.test(t2)) return false;
  if (yh.test(t2)) {
    var o2 = gh(n2, r2), [i2, a2] = bh(n2, o2, r2);
    if (e2(i2, a2, r2)) return true;
  }
  return !mh.test(t2);
}, Ch = function* (e5) {
  for (var t2 = e5.length - 1, n2 = 0; n2 < e5.length; n2++) {
    var r2 = e5.charAt(t2 - n2);
    if (wh(r2.charCodeAt(0))) {
      var o2 = e5.charAt(t2 - n2 - 1);
      if (Dh(o2.charCodeAt(0))) {
        yield o2 + r2, n2++;
        continue;
      }
    }
    yield r2;
  }
}, Dh = (e5) => e5 >= 55296 && e5 <= 56319, wh = (e5) => e5 >= 56320 && e5 <= 57343;
!(function(e5) {
  e5[e5.None = 0] = "None", e5[e5.Extend = 1] = "Extend", e5[e5.ZWJ = 2] = "ZWJ", e5[e5.RI = 4] = "RI", e5[e5.Prepend = 8] = "Prepend", e5[e5.SpacingMark = 16] = "SpacingMark", e5[e5.L = 32] = "L", e5[e5.V = 64] = "V", e5[e5.T = 128] = "T", e5[e5.LV = 256] = "LV", e5[e5.LVT = 512] = "LVT", e5[e5.ExtPict = 1024] = "ExtPict", e5[e5.Any = 2048] = "Any";
})(hh || (hh = {}));
var Sh = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Ah = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, xh = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, Oh = /^[\u1100-\u115F\uA960-\uA97C]$/, Nh = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Bh = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Th = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, kh = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Fh = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, Ih = (e5, t2) => {
  var n2 = hh.Any;
  return -1 !== e5.search(Sh) && (n2 |= hh.Extend), 8205 === t2 && (n2 |= hh.ZWJ), t2 >= 127462 && t2 <= 127487 && (n2 |= hh.RI), -1 !== e5.search(Ah) && (n2 |= hh.Prepend), -1 !== e5.search(xh) && (n2 |= hh.SpacingMark), -1 !== e5.search(Oh) && (n2 |= hh.L), -1 !== e5.search(Nh) && (n2 |= hh.V), -1 !== e5.search(Bh) && (n2 |= hh.T), -1 !== e5.search(Th) && (n2 |= hh.LV), -1 !== e5.search(kh) && (n2 |= hh.LVT), -1 !== e5.search(Fh) && (n2 |= hh.ExtPict), n2;
};
function Ph(e5, t2) {
  return 0 !== (e5 & t2);
}
var _h = [[hh.L, hh.L | hh.V | hh.LV | hh.LVT], [hh.LV | hh.V, hh.V | hh.T], [hh.LVT | hh.T, hh.T], [hh.Any, hh.Extend | hh.ZWJ], [hh.Any, hh.SpacingMark], [hh.Prepend, hh.Any], [hh.ZWJ, hh.ExtPict], [hh.RI, hh.RI]];
function Rh(e5, t2) {
  return -1 === _h.findIndex((n2) => Ph(e5, n2[0]) && Ph(t2, n2[1]));
}
var Lh = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Mh = (e5) => -1 !== e5.search(Lh), jh = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Hh = (e5) => {
  var t2 = e5.match(jh);
  return null !== t2 && t2[0].length / 2 % 2 == 1;
}, zh = (e5) => op(e5) && eg.isNodeList(e5.children) && !Kh.isEditor(e5), $h = { isAncestor: (e5) => op(e5) && eg.isNodeList(e5.children), isElement: zh, isElementList: (e5) => Array.isArray(e5) && e5.every((e6) => $h.isElement(e6)), isElementProps: (e5) => void 0 !== e5.children, isElementType: function(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
  return zh(e5) && e5[n2] === t2;
}, matches(e5, t2) {
  for (var n2 in t2) if ("children" !== n2 && e5[n2] !== t2[n2]) return false;
  return true;
} }, Uh = ["text"], Vh = ["text"];
function Wh(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Gh(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Wh(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : Wh(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var qh = /* @__PURE__ */ new WeakMap(), Kh = { above(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { voids: n2 = false, mode: r2 = "lowest", at: o2 = e5.selection, match: i2 } = t2;
  if (o2) {
    var a2 = Kh.path(e5, o2), s2 = "lowest" === r2;
    for (var [u2, l2] of Kh.levels(e5, { at: a2, voids: n2, match: i2, reverse: s2 })) if (!Cg.isText(u2) && !og.equals(a2, l2)) return [u2, l2];
  }
}, addMark(e5, t2, n2) {
  e5.addMark(t2, n2);
}, after(e5, t2) {
  var n2, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = { anchor: Kh.point(e5, t2, { edge: "end" }), focus: Kh.end(e5, []) }, { distance: i2 = 1 } = r2, a2 = 0;
  for (var s2 of Kh.positions(e5, Gh(Gh({}, r2), {}, { at: o2 }))) {
    if (a2 > i2) break;
    0 !== a2 && (n2 = s2), a2++;
  }
  return n2;
}, before(e5, t2) {
  var n2, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = { anchor: Kh.start(e5, []), focus: Kh.point(e5, t2, { edge: "start" }) }, { distance: i2 = 1 } = r2, a2 = 0;
  for (var s2 of Kh.positions(e5, Gh(Gh({}, r2), {}, { at: o2, reverse: true }))) {
    if (a2 > i2) break;
    0 !== a2 && (n2 = s2), a2++;
  }
  return n2;
}, deleteBackward(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { unit: n2 = "character" } = t2;
  e5.deleteBackward(n2);
}, deleteForward(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { unit: n2 = "character" } = t2;
  e5.deleteForward(n2);
}, deleteFragment(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { direction: n2 = "forward" } = t2;
  e5.deleteFragment(n2);
}, edges: (e5, t2) => [Kh.start(e5, t2), Kh.end(e5, t2)], end: (e5, t2) => Kh.point(e5, t2, { edge: "end" }), first(e5, t2) {
  var n2 = Kh.path(e5, t2, { edge: "start" });
  return Kh.node(e5, n2);
}, fragment(e5, t2) {
  var n2 = Kh.range(e5, t2);
  return eg.fragment(e5, n2);
}, hasBlocks: (e5, t2) => t2.children.some((t3) => Kh.isBlock(e5, t3)), hasInlines: (e5, t2) => t2.children.some((t3) => Cg.isText(t3) || Kh.isInline(e5, t3)), hasTexts: (e5, t2) => t2.children.every((e6) => Cg.isText(e6)), insertBreak(e5) {
  e5.insertBreak();
}, insertSoftBreak(e5) {
  e5.insertSoftBreak();
}, insertFragment(e5, t2) {
  e5.insertFragment(t2);
}, insertNode(e5, t2) {
  e5.insertNode(t2);
}, insertText(e5, t2) {
  e5.insertText(t2);
}, isBlock: (e5, t2) => $h.isElement(t2) && !e5.isInline(t2), isEditor(e5) {
  var t2 = qh.get(e5);
  if (void 0 !== t2) return t2;
  if (!op(e5)) return false;
  var n2 = "function" == typeof e5.addMark && "function" == typeof e5.apply && "function" == typeof e5.deleteBackward && "function" == typeof e5.deleteForward && "function" == typeof e5.deleteFragment && "function" == typeof e5.insertBreak && "function" == typeof e5.insertSoftBreak && "function" == typeof e5.insertFragment && "function" == typeof e5.insertNode && "function" == typeof e5.insertText && "function" == typeof e5.isInline && "function" == typeof e5.isVoid && "function" == typeof e5.normalizeNode && "function" == typeof e5.onChange && "function" == typeof e5.removeMark && "function" == typeof e5.getDirtyPaths && (null === e5.marks || op(e5.marks)) && (null === e5.selection || fg.isRange(e5.selection)) && eg.isNodeList(e5.children) && rg.isOperationList(e5.operations);
  return qh.set(e5, n2), n2;
}, isEnd(e5, t2, n2) {
  var r2 = Kh.end(e5, n2);
  return ug.equals(t2, r2);
}, isEdge: (e5, t2, n2) => Kh.isStart(e5, t2, n2) || Kh.isEnd(e5, t2, n2), isEmpty(e5, t2) {
  var { children: n2 } = t2, [r2] = n2;
  return 0 === n2.length || 1 === n2.length && Cg.isText(r2) && "" === r2.text && !e5.isVoid(t2);
}, isInline: (e5, t2) => $h.isElement(t2) && e5.isInline(t2), isNormalizing(e5) {
  var t2 = sh.get(e5);
  return void 0 === t2 || t2;
}, isStart(e5, t2, n2) {
  if (0 !== t2.offset) return false;
  var r2 = Kh.start(e5, n2);
  return ug.equals(t2, r2);
}, isVoid: (e5, t2) => $h.isElement(t2) && e5.isVoid(t2), last(e5, t2) {
  var n2 = Kh.path(e5, t2, { edge: "end" });
  return Kh.node(e5, n2);
}, leaf(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = Kh.path(e5, t2, n2);
  return [eg.leaf(e5, r2), r2];
}, *levels(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { at: n2 = e5.selection, reverse: r2 = false, voids: o2 = false } = t2, { match: i2 } = t2;
  if (null == i2 && (i2 = () => true), n2) {
    var a2 = [], s2 = Kh.path(e5, n2);
    for (var [u2, l2] of eg.levels(e5, s2)) if (i2(u2, l2) && (a2.push([u2, l2]), !o2 && Kh.isVoid(e5, u2))) break;
    r2 && a2.reverse(), yield* a2;
  }
}, marks(e5) {
  var { marks: t2, selection: n2 } = e5;
  if (!n2) return null;
  if (t2) return t2;
  if (fg.isExpanded(n2)) {
    var [r2] = Kh.nodes(e5, { match: Cg.isText });
    if (r2) {
      var [o2] = r2;
      return ph(o2, Uh);
    }
    return {};
  }
  var { anchor: i2 } = n2, { path: a2 } = i2, [s2] = Kh.leaf(e5, a2);
  if (0 === i2.offset) {
    var u2 = Kh.previous(e5, { at: a2, match: Cg.isText }), l2 = Kh.above(e5, { match: (t3) => Kh.isBlock(e5, t3) });
    if (u2 && l2) {
      var [c2, d2] = u2, [, f2] = l2;
      og.isAncestor(f2, d2) && (s2 = c2);
    }
  }
  return ph(s2, Vh);
}, next(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { mode: n2 = "lowest", voids: r2 = false } = t2, { match: o2, at: i2 = e5.selection } = t2;
  if (i2) {
    var a2 = Kh.after(e5, i2, { voids: r2 });
    if (a2) {
      var [, s2] = Kh.last(e5, []), u2 = [a2.path, s2];
      if (og.isPath(i2) && 0 === i2.length) throw new Error("Cannot get the next node from the root node!");
      if (null == o2) if (og.isPath(i2)) {
        var [l2] = Kh.parent(e5, i2);
        o2 = (e6) => l2.children.includes(e6);
      } else o2 = () => true;
      var [c2] = Kh.nodes(e5, { at: u2, match: o2, mode: n2, voids: r2 });
      return c2;
    }
  }
}, node(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = Kh.path(e5, t2, n2);
  return [eg.get(e5, r2), r2];
}, *nodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { at: n2 = e5.selection, mode: r2 = "all", universal: o2 = false, reverse: i2 = false, voids: a2 = false } = t2, { match: s2 } = t2;
  if (s2 || (s2 = () => true), n2) {
    var u2, l2;
    if (Xh.isSpan(n2)) u2 = n2[0], l2 = n2[1];
    else {
      var c2 = Kh.path(e5, n2, { edge: "start" }), d2 = Kh.path(e5, n2, { edge: "end" });
      u2 = i2 ? d2 : c2, l2 = i2 ? c2 : d2;
    }
    var f2, p2 = eg.nodes(e5, { reverse: i2, from: u2, to: l2, pass: (t3) => {
      var [n3] = t3;
      return !a2 && Kh.isVoid(e5, n3);
    } }), h2 = [];
    for (var [g2, v2] of p2) {
      var m2 = f2 && 0 === og.compare(v2, f2[1]);
      if ("highest" !== r2 || !m2) {
        if (s2(g2, v2)) if ("lowest" === r2 && m2) f2 = [g2, v2];
        else {
          var y2 = "lowest" === r2 ? f2 : [g2, v2];
          y2 && (o2 ? h2.push(y2) : yield y2), f2 = [g2, v2];
        }
        else if (o2 && !m2 && Cg.isText(g2)) return;
      }
    }
    "lowest" === r2 && f2 && (o2 ? h2.push(f2) : yield f2), o2 && (yield* h2);
  }
}, normalize(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { force: n2 = false } = t2, r2 = (e6) => oh.get(e6) || [], o2 = (e6) => {
    var t3 = r2(e6).pop(), n3 = t3.join(",");
    return ((e7) => ih.get(e7) || /* @__PURE__ */ new Set())(e6).delete(n3), t3;
  };
  if (Kh.isNormalizing(e5)) {
    if (n2) {
      var i2 = Array.from(eg.nodes(e5), (e6) => {
        var [, t3] = e6;
        return t3;
      }), a2 = new Set(i2.map((e6) => e6.join(",")));
      oh.set(e5, i2), ih.set(e5, a2);
    }
    0 !== r2(e5).length && Kh.withoutNormalizing(e5, () => {
      for (var t3 of r2(e5)) if (eg.has(e5, t3)) {
        var n3 = Kh.node(e5, t3), [i3, a3] = n3;
        $h.isElement(i3) && 0 === i3.children.length && e5.normalizeNode(n3);
      }
      for (var s2 = 42 * r2(e5).length, u2 = 0; 0 !== r2(e5).length; ) {
        if (u2 > s2) throw new Error("\n            Could not completely normalize the editor after ".concat(s2, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        var l2 = o2(e5);
        if (eg.has(e5, l2)) {
          var c2 = Kh.node(e5, l2);
          e5.normalizeNode(c2);
        }
        u2++;
      }
    });
  }
}, parent(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = Kh.path(e5, t2, n2), o2 = og.parent(r2);
  return Kh.node(e5, o2);
}, path(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { depth: r2, edge: o2 } = n2;
  if (og.isPath(t2)) {
    if ("start" === o2) {
      var [, i2] = eg.first(e5, t2);
      t2 = i2;
    } else if ("end" === o2) {
      var [, a2] = eg.last(e5, t2);
      t2 = a2;
    }
  }
  return fg.isRange(t2) && (t2 = "start" === o2 ? fg.start(t2) : "end" === o2 ? fg.end(t2) : og.common(t2.anchor.path, t2.focus.path)), ug.isPoint(t2) && (t2 = t2.path), null != r2 && (t2 = t2.slice(0, r2)), t2;
}, hasPath: (e5, t2) => eg.has(e5, t2), pathRef(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { affinity: r2 = "forward" } = n2, o2 = { current: t2, affinity: r2, unref() {
    var { current: t3 } = o2;
    return Kh.pathRefs(e5).delete(o2), o2.current = null, t3;
  } };
  return Kh.pathRefs(e5).add(o2), o2;
}, pathRefs(e5) {
  var t2 = uh.get(e5);
  return t2 || (t2 = /* @__PURE__ */ new Set(), uh.set(e5, t2)), t2;
}, point(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { edge: r2 = "start" } = n2;
  if (og.isPath(t2)) {
    var o2;
    if ("end" === r2) {
      var [, i2] = eg.last(e5, t2);
      o2 = i2;
    } else {
      var [, a2] = eg.first(e5, t2);
      o2 = a2;
    }
    var s2 = eg.get(e5, o2);
    if (!Cg.isText(s2)) throw new Error("Cannot get the ".concat(r2, " point in the node at path [").concat(t2, "] because it has no ").concat(r2, " text node."));
    return { path: o2, offset: "end" === r2 ? s2.text.length : 0 };
  }
  if (fg.isRange(t2)) {
    var [u2, l2] = fg.edges(t2);
    return "start" === r2 ? u2 : l2;
  }
  return t2;
}, pointRef(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { affinity: r2 = "forward" } = n2, o2 = { current: t2, affinity: r2, unref() {
    var { current: t3 } = o2;
    return Kh.pointRefs(e5).delete(o2), o2.current = null, t3;
  } };
  return Kh.pointRefs(e5).add(o2), o2;
}, pointRefs(e5) {
  var t2 = lh.get(e5);
  return t2 || (t2 = /* @__PURE__ */ new Set(), lh.set(e5, t2)), t2;
}, *positions(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { at: n2 = e5.selection, unit: r2 = "offset", reverse: o2 = false, voids: i2 = false } = t2;
  if (n2) {
    var a2 = Kh.range(e5, n2), [s2, u2] = fg.edges(a2), l2 = o2 ? u2 : s2, c2 = false, d2 = "", f2 = 0, p2 = 0, h2 = 0;
    for (var [g2, v2] of Kh.nodes(e5, { at: n2, reverse: o2, voids: i2 })) {
      if ($h.isElement(g2)) {
        if (!i2 && e5.isVoid(g2)) {
          yield Kh.start(e5, v2);
          continue;
        }
        if (e5.isInline(g2)) continue;
        if (Kh.hasInlines(e5, g2)) {
          var m2 = og.isAncestor(v2, u2.path) ? u2 : Kh.end(e5, v2), y2 = og.isAncestor(v2, s2.path) ? s2 : Kh.start(e5, v2);
          d2 = Kh.string(e5, { anchor: y2, focus: m2 }, { voids: i2 }), c2 = true;
        }
      }
      if (Cg.isText(g2)) {
        var b2 = og.equals(v2, l2.path);
        for (b2 ? (p2 = o2 ? l2.offset : g2.text.length - l2.offset, h2 = l2.offset) : (p2 = g2.text.length, h2 = o2 ? p2 : 0), (b2 || c2 || "offset" === r2) && (yield { path: v2, offset: h2 }, c2 = false); ; ) {
          if (0 === f2) {
            if ("" === d2) break;
            f2 = E2(d2, r2, o2), d2 = bh(d2, f2, o2)[1];
          }
          if (h2 = o2 ? h2 - f2 : h2 + f2, (p2 -= f2) < 0) {
            f2 = -p2;
            break;
          }
          f2 = 0, yield { path: v2, offset: h2 };
        }
      }
    }
  }
  function E2(e6, t3, n3) {
    return "character" === t3 ? gh(e6, n3) : "word" === t3 ? (function(e7) {
      for (var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n4 = 0, r3 = false; e7.length > 0; ) {
        var o3 = gh(e7, t4), [i3, a3] = bh(e7, o3, t4);
        if (Eh(i3, a3, t4)) r3 = true, n4 += o3;
        else {
          if (r3) break;
          n4 += o3;
        }
        e7 = a3;
      }
      return n4;
    })(e6, n3) : "line" === t3 || "block" === t3 ? e6.length : 1;
  }
}, previous(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { mode: n2 = "lowest", voids: r2 = false } = t2, { match: o2, at: i2 = e5.selection } = t2;
  if (i2) {
    var a2 = Kh.before(e5, i2, { voids: r2 });
    if (a2) {
      var [, s2] = Kh.first(e5, []), u2 = [a2.path, s2];
      if (og.isPath(i2) && 0 === i2.length) throw new Error("Cannot get the previous node from the root node!");
      if (null == o2) if (og.isPath(i2)) {
        var [l2] = Kh.parent(e5, i2);
        o2 = (e6) => l2.children.includes(e6);
      } else o2 = () => true;
      var [c2] = Kh.nodes(e5, { reverse: true, at: u2, match: o2, mode: n2, voids: r2 });
      return c2;
    }
  }
}, range: (e5, t2, n2) => fg.isRange(t2) && !n2 ? t2 : { anchor: Kh.start(e5, t2), focus: Kh.end(e5, n2 || t2) }, rangeRef(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { affinity: r2 = "forward" } = n2, o2 = { current: t2, affinity: r2, unref() {
    var { current: t3 } = o2;
    return Kh.rangeRefs(e5).delete(o2), o2.current = null, t3;
  } };
  return Kh.rangeRefs(e5).add(o2), o2;
}, rangeRefs(e5) {
  var t2 = ch.get(e5);
  return t2 || (t2 = /* @__PURE__ */ new Set(), ch.set(e5, t2)), t2;
}, removeMark(e5, t2) {
  e5.removeMark(t2);
}, setNormalizing(e5, t2) {
  sh.set(e5, t2);
}, start: (e5, t2) => Kh.point(e5, t2, { edge: "start" }), string(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { voids: r2 = false } = n2, o2 = Kh.range(e5, t2), [i2, a2] = fg.edges(o2), s2 = "";
  for (var [u2, l2] of Kh.nodes(e5, { at: o2, match: Cg.isText, voids: r2 })) {
    var c2 = u2.text;
    og.equals(l2, a2.path) && (c2 = c2.slice(0, a2.offset)), og.equals(l2, i2.path) && (c2 = c2.slice(i2.offset)), s2 += c2;
  }
  return s2;
}, unhangRange(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { voids: r2 = false } = n2, [o2, i2] = fg.edges(t2);
  if (0 !== o2.offset || 0 !== i2.offset || fg.isCollapsed(t2)) return t2;
  var a2 = Kh.above(e5, { at: i2, match: (t3) => Kh.isBlock(e5, t3) }), s2 = a2 ? a2[1] : [], u2 = { anchor: Kh.start(e5, o2), focus: i2 }, l2 = true;
  for (var [c2, d2] of Kh.nodes(e5, { at: u2, match: Cg.isText, reverse: true, voids: r2 })) if (l2) l2 = false;
  else if ("" !== c2.text || og.isBefore(d2, s2)) {
    i2 = { path: d2, offset: c2.text.length };
    break;
  }
  return { anchor: o2, focus: i2 };
}, void(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return Kh.above(e5, Gh(Gh({}, t2), {}, { match: (t3) => Kh.isVoid(e5, t3) }));
}, withoutNormalizing(e5, t2) {
  var n2 = Kh.isNormalizing(e5);
  Kh.setNormalizing(e5, false);
  try {
    t2();
  } finally {
    Kh.setNormalizing(e5, n2);
  }
  Kh.normalize(e5);
} }, Xh = { isSpan: (e5) => Array.isArray(e5) && 2 === e5.length && e5.every(og.isPath) }, Zh = ["children"], Jh = ["text"], Qh = /* @__PURE__ */ new WeakMap(), eg = { ancestor(e5, t2) {
  var n2 = eg.get(e5, t2);
  if (Cg.isText(n2)) throw new Error("Cannot get the ancestor node at path [".concat(t2, "] because it refers to a text node instead: ").concat(gg.stringify(n2)));
  return n2;
}, *ancestors(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  for (var r2 of og.ancestors(t2, n2)) {
    var o2 = [eg.ancestor(e5, r2), r2];
    yield o2;
  }
}, child(e5, t2) {
  if (Cg.isText(e5)) throw new Error("Cannot get the child of a text node: ".concat(gg.stringify(e5)));
  var n2 = e5.children[t2];
  if (null == n2) throw new Error("Cannot get child at index `".concat(t2, "` in node: ").concat(gg.stringify(e5)));
  return n2;
}, *children(e5, t2) {
  for (var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { reverse: r2 = false } = n2, o2 = eg.ancestor(e5, t2), { children: i2 } = o2, a2 = r2 ? i2.length - 1 : 0; r2 ? a2 >= 0 : a2 < i2.length; ) {
    var s2 = eg.child(o2, a2), u2 = t2.concat(a2);
    yield [s2, u2], a2 = r2 ? a2 - 1 : a2 + 1;
  }
}, common(e5, t2, n2) {
  var r2 = og.common(t2, n2);
  return [eg.get(e5, r2), r2];
}, descendant(e5, t2) {
  var n2 = eg.get(e5, t2);
  if (Kh.isEditor(n2)) throw new Error("Cannot get the descendant node at path [".concat(t2, "] because it refers to the root editor node instead: ").concat(gg.stringify(n2)));
  return n2;
}, *descendants(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  for (var [n2, r2] of eg.nodes(e5, t2)) 0 !== r2.length && (yield [n2, r2]);
}, *elements(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  for (var [n2, r2] of eg.nodes(e5, t2)) $h.isElement(n2) && (yield [n2, r2]);
}, extractProps: (e5) => $h.isAncestor(e5) ? ph(e5, Zh) : ph(e5, Jh), first(e5, t2) {
  for (var n2 = t2.slice(), r2 = eg.get(e5, n2); r2 && !Cg.isText(r2) && 0 !== r2.children.length; ) r2 = r2.children[0], n2.push(0);
  return [r2, n2];
}, fragment(e5, t2) {
  if (Cg.isText(e5)) throw new Error("Cannot get a fragment starting from a root text node: ".concat(gg.stringify(e5)));
  var n2 = eh({ children: e5.children }, (e6) => {
    var [n3, r2] = fg.edges(t2), o2 = eg.nodes(e6, { reverse: true, pass: (e7) => {
      var [, n4] = e7;
      return !fg.includes(t2, n4);
    } });
    for (var [, i2] of o2) {
      if (!fg.includes(t2, i2)) {
        var a2 = eg.parent(e6, i2), s2 = i2[i2.length - 1];
        a2.children.splice(s2, 1);
      }
      if (og.equals(i2, r2.path)) {
        var u2 = eg.leaf(e6, i2);
        u2.text = u2.text.slice(0, r2.offset);
      }
      if (og.equals(i2, n3.path)) {
        var l2 = eg.leaf(e6, i2);
        l2.text = l2.text.slice(n3.offset);
      }
    }
    Kh.isEditor(e6) && (e6.selection = null);
  });
  return n2.children;
}, get(e5, t2) {
  for (var n2 = e5, r2 = 0; r2 < t2.length; r2++) {
    var o2 = t2[r2];
    if (Cg.isText(n2) || !n2.children[o2]) throw new Error("Cannot find a descendant at path [".concat(t2, "] in node: ").concat(gg.stringify(e5)));
    n2 = n2.children[o2];
  }
  return n2;
}, has(e5, t2) {
  for (var n2 = e5, r2 = 0; r2 < t2.length; r2++) {
    var o2 = t2[r2];
    if (Cg.isText(n2) || !n2.children[o2]) return false;
    n2 = n2.children[o2];
  }
  return true;
}, isNode: (e5) => Cg.isText(e5) || $h.isElement(e5) || Kh.isEditor(e5), isNodeList(e5) {
  if (!Array.isArray(e5)) return false;
  var t2 = Qh.get(e5);
  if (void 0 !== t2) return t2;
  var n2 = e5.every((e6) => eg.isNode(e6));
  return Qh.set(e5, n2), n2;
}, last(e5, t2) {
  for (var n2 = t2.slice(), r2 = eg.get(e5, n2); r2 && !Cg.isText(r2) && 0 !== r2.children.length; ) {
    var o2 = r2.children.length - 1;
    r2 = r2.children[o2], n2.push(o2);
  }
  return [r2, n2];
}, leaf(e5, t2) {
  var n2 = eg.get(e5, t2);
  if (!Cg.isText(n2)) throw new Error("Cannot get the leaf node at path [".concat(t2, "] because it refers to a non-leaf node: ").concat(gg.stringify(n2)));
  return n2;
}, *levels(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  for (var r2 of og.levels(t2, n2)) {
    var o2 = eg.get(e5, r2);
    yield [o2, r2];
  }
}, matches: (e5, t2) => $h.isElement(e5) && $h.isElementProps(t2) && $h.matches(e5, t2) || Cg.isText(e5) && Cg.isTextProps(t2) && Cg.matches(e5, t2), *nodes(e5) {
  for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { pass: n2, reverse: r2 = false } = t2, { from: o2 = [], to: i2 } = t2, a2 = /* @__PURE__ */ new Set(), s2 = [], u2 = e5; !i2 || !(r2 ? og.isBefore(s2, i2) : og.isAfter(s2, i2)); ) if (a2.has(u2) || (yield [u2, s2]), a2.has(u2) || Cg.isText(u2) || 0 === u2.children.length || null != n2 && false !== n2([u2, s2])) {
    if (0 === s2.length) break;
    if (!r2) {
      var l2 = og.next(s2);
      if (eg.has(e5, l2)) {
        s2 = l2, u2 = eg.get(e5, s2);
        continue;
      }
    }
    if (r2 && 0 !== s2[s2.length - 1]) s2 = og.previous(s2), u2 = eg.get(e5, s2);
    else s2 = og.parent(s2), u2 = eg.get(e5, s2), a2.add(u2);
  } else {
    a2.add(u2);
    var c2 = r2 ? u2.children.length - 1 : 0;
    og.isAncestor(s2, o2) && (c2 = o2[s2.length]), s2 = s2.concat(c2), u2 = eg.get(e5, s2);
  }
}, parent(e5, t2) {
  var n2 = og.parent(t2), r2 = eg.get(e5, n2);
  if (Cg.isText(r2)) throw new Error("Cannot get the parent of path [".concat(t2, "] because it does not exist in the root."));
  return r2;
}, string: (e5) => Cg.isText(e5) ? e5.text : e5.children.map(eg.string).join(""), *texts(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  for (var [n2, r2] of eg.nodes(e5, t2)) Cg.isText(n2) && (yield [n2, r2]);
} };
function tg(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function ng(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? tg(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : tg(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var rg = { isNodeOperation: (e5) => rg.isOperation(e5) && e5.type.endsWith("_node"), isOperation(e5) {
  if (!op(e5)) return false;
  switch (e5.type) {
    case "insert_node":
    case "remove_node":
      return og.isPath(e5.path) && eg.isNode(e5.node);
    case "insert_text":
    case "remove_text":
      return "number" == typeof e5.offset && "string" == typeof e5.text && og.isPath(e5.path);
    case "merge_node":
      return "number" == typeof e5.position && og.isPath(e5.path) && op(e5.properties);
    case "move_node":
      return og.isPath(e5.path) && og.isPath(e5.newPath);
    case "set_node":
      return og.isPath(e5.path) && op(e5.properties) && op(e5.newProperties);
    case "set_selection":
      return null === e5.properties && fg.isRange(e5.newProperties) || null === e5.newProperties && fg.isRange(e5.properties) || op(e5.properties) && op(e5.newProperties);
    case "split_node":
      return og.isPath(e5.path) && "number" == typeof e5.position && op(e5.properties);
    default:
      return false;
  }
}, isOperationList: (e5) => Array.isArray(e5) && e5.every((e6) => rg.isOperation(e6)), isSelectionOperation: (e5) => rg.isOperation(e5) && e5.type.endsWith("_selection"), isTextOperation: (e5) => rg.isOperation(e5) && e5.type.endsWith("_text"), inverse(e5) {
  switch (e5.type) {
    case "insert_node":
      return ng(ng({}, e5), {}, { type: "remove_node" });
    case "insert_text":
      return ng(ng({}, e5), {}, { type: "remove_text" });
    case "merge_node":
      return ng(ng({}, e5), {}, { type: "split_node", path: og.previous(e5.path) });
    case "move_node":
      var { newPath: t2, path: n2 } = e5;
      if (og.equals(t2, n2)) return e5;
      if (og.isSibling(n2, t2)) return ng(ng({}, e5), {}, { path: t2, newPath: n2 });
      var r2 = og.transform(n2, e5), o2 = og.transform(og.next(n2), e5);
      return ng(ng({}, e5), {}, { path: r2, newPath: o2 });
    case "remove_node":
      return ng(ng({}, e5), {}, { type: "insert_node" });
    case "remove_text":
      return ng(ng({}, e5), {}, { type: "insert_text" });
    case "set_node":
      var { properties: i2, newProperties: a2 } = e5;
      return ng(ng({}, e5), {}, { properties: a2, newProperties: i2 });
    case "set_selection":
      var { properties: s2, newProperties: u2 } = e5;
      return ng(ng({}, e5), {}, null == s2 ? { properties: u2, newProperties: null } : null == u2 ? { properties: null, newProperties: s2 } : { properties: u2, newProperties: s2 });
    case "split_node":
      return ng(ng({}, e5), {}, { type: "merge_node", path: og.next(e5.path) });
  }
} }, og = { ancestors(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { reverse: n2 = false } = t2, r2 = og.levels(e5, t2);
  return r2 = n2 ? r2.slice(1) : r2.slice(0, -1);
}, common(e5, t2) {
  for (var n2 = [], r2 = 0; r2 < e5.length && r2 < t2.length; r2++) {
    var o2 = e5[r2];
    if (o2 !== t2[r2]) break;
    n2.push(o2);
  }
  return n2;
}, compare(e5, t2) {
  for (var n2 = Math.min(e5.length, t2.length), r2 = 0; r2 < n2; r2++) {
    if (e5[r2] < t2[r2]) return -1;
    if (e5[r2] > t2[r2]) return 1;
  }
  return 0;
}, endsAfter(e5, t2) {
  var n2 = e5.length - 1, r2 = e5.slice(0, n2), o2 = t2.slice(0, n2), i2 = e5[n2], a2 = t2[n2];
  return og.equals(r2, o2) && i2 > a2;
}, endsAt(e5, t2) {
  var n2 = e5.length, r2 = e5.slice(0, n2), o2 = t2.slice(0, n2);
  return og.equals(r2, o2);
}, endsBefore(e5, t2) {
  var n2 = e5.length - 1, r2 = e5.slice(0, n2), o2 = t2.slice(0, n2), i2 = e5[n2], a2 = t2[n2];
  return og.equals(r2, o2) && i2 < a2;
}, equals: (e5, t2) => e5.length === t2.length && e5.every((e6, n2) => e6 === t2[n2]), hasPrevious: (e5) => e5[e5.length - 1] > 0, isAfter: (e5, t2) => 1 === og.compare(e5, t2), isAncestor: (e5, t2) => e5.length < t2.length && 0 === og.compare(e5, t2), isBefore: (e5, t2) => -1 === og.compare(e5, t2), isChild: (e5, t2) => e5.length === t2.length + 1 && 0 === og.compare(e5, t2), isCommon: (e5, t2) => e5.length <= t2.length && 0 === og.compare(e5, t2), isDescendant: (e5, t2) => e5.length > t2.length && 0 === og.compare(e5, t2), isParent: (e5, t2) => e5.length + 1 === t2.length && 0 === og.compare(e5, t2), isPath: (e5) => Array.isArray(e5) && (0 === e5.length || "number" == typeof e5[0]), isSibling(e5, t2) {
  if (e5.length !== t2.length) return false;
  var n2 = e5.slice(0, -1), r2 = t2.slice(0, -1);
  return e5[e5.length - 1] !== t2[t2.length - 1] && og.equals(n2, r2);
}, levels(e5) {
  for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { reverse: n2 = false } = t2, r2 = [], o2 = 0; o2 <= e5.length; o2++) r2.push(e5.slice(0, o2));
  return n2 && r2.reverse(), r2;
}, next(e5) {
  if (0 === e5.length) throw new Error("Cannot get the next path of a root path [".concat(e5, "], because it has no next index."));
  var t2 = e5[e5.length - 1];
  return e5.slice(0, -1).concat(t2 + 1);
}, operationCanTransformPath(e5) {
  switch (e5.type) {
    case "insert_node":
    case "remove_node":
    case "merge_node":
    case "split_node":
    case "move_node":
      return true;
    default:
      return false;
  }
}, parent(e5) {
  if (0 === e5.length) throw new Error("Cannot get the parent path of the root path [".concat(e5, "]."));
  return e5.slice(0, -1);
}, previous(e5) {
  if (0 === e5.length) throw new Error("Cannot get the previous path of a root path [".concat(e5, "], because it has no previous index."));
  var t2 = e5[e5.length - 1];
  if (t2 <= 0) throw new Error("Cannot get the previous path of a first child path [".concat(e5, "] because it would result in a negative index."));
  return e5.slice(0, -1).concat(t2 - 1);
}, relative(e5, t2) {
  if (!og.isAncestor(t2, e5) && !og.equals(e5, t2)) throw new Error("Cannot get the relative path of [".concat(e5, "] inside ancestor [").concat(t2, "], because it is not above or equal to the path."));
  return e5.slice(t2.length);
}, transform(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return eh(e5, (r2) => {
    var { affinity: o2 = "forward" } = n2;
    if (e5 && 0 !== (null == e5 ? void 0 : e5.length)) {
      if (null === r2) return null;
      switch (t2.type) {
        case "insert_node":
          var { path: i2 } = t2;
          (og.equals(i2, r2) || og.endsBefore(i2, r2) || og.isAncestor(i2, r2)) && (r2[i2.length - 1] += 1);
          break;
        case "remove_node":
          var { path: a2 } = t2;
          if (og.equals(a2, r2) || og.isAncestor(a2, r2)) return null;
          og.endsBefore(a2, r2) && (r2[a2.length - 1] -= 1);
          break;
        case "merge_node":
          var { path: s2, position: u2 } = t2;
          og.equals(s2, r2) || og.endsBefore(s2, r2) ? r2[s2.length - 1] -= 1 : og.isAncestor(s2, r2) && (r2[s2.length - 1] -= 1, r2[s2.length] += u2);
          break;
        case "split_node":
          var { path: l2, position: c2 } = t2;
          if (og.equals(l2, r2)) {
            if ("forward" === o2) r2[r2.length - 1] += 1;
            else if ("backward" !== o2) return null;
          } else og.endsBefore(l2, r2) ? r2[l2.length - 1] += 1 : og.isAncestor(l2, r2) && e5[l2.length] >= c2 && (r2[l2.length - 1] += 1, r2[l2.length] -= c2);
          break;
        case "move_node":
          var { path: d2, newPath: f2 } = t2;
          if (og.equals(d2, f2)) return;
          if (og.isAncestor(d2, r2) || og.equals(d2, r2)) {
            var p2 = f2.slice();
            return og.endsBefore(d2, f2) && d2.length < f2.length && (p2[d2.length - 1] -= 1), p2.concat(r2.slice(d2.length));
          }
          og.isSibling(d2, f2) && (og.isAncestor(f2, r2) || og.equals(f2, r2)) ? og.endsBefore(d2, r2) ? r2[d2.length - 1] -= 1 : r2[d2.length - 1] += 1 : og.endsBefore(f2, r2) || og.equals(f2, r2) || og.isAncestor(f2, r2) ? (og.endsBefore(d2, r2) && (r2[d2.length - 1] -= 1), r2[f2.length - 1] += 1) : og.endsBefore(d2, r2) && (og.equals(f2, r2) && (r2[f2.length - 1] += 1), r2[d2.length - 1] -= 1);
      }
    }
  });
} }, ig = { transform(e5, t2) {
  var { current: n2, affinity: r2 } = e5;
  if (null != n2) {
    var o2 = og.transform(n2, t2, { affinity: r2 });
    e5.current = o2, null == o2 && e5.unref();
  }
} };
function ag(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function sg(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ag(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : ag(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var ug = { compare(e5, t2) {
  var n2 = og.compare(e5.path, t2.path);
  return 0 === n2 ? e5.offset < t2.offset ? -1 : e5.offset > t2.offset ? 1 : 0 : n2;
}, isAfter: (e5, t2) => 1 === ug.compare(e5, t2), isBefore: (e5, t2) => -1 === ug.compare(e5, t2), equals: (e5, t2) => e5.offset === t2.offset && og.equals(e5.path, t2.path), isPoint: (e5) => op(e5) && "number" == typeof e5.offset && og.isPath(e5.path), transform(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return eh(e5, (e6) => {
    if (null === e6) return null;
    var { affinity: r2 = "forward" } = n2, { path: o2, offset: i2 } = e6;
    switch (t2.type) {
      case "insert_node":
      case "move_node":
        e6.path = og.transform(o2, t2, n2);
        break;
      case "insert_text":
        og.equals(t2.path, o2) && (t2.offset < i2 || t2.offset === i2 && "forward" === r2) && (e6.offset += t2.text.length);
        break;
      case "merge_node":
        og.equals(t2.path, o2) && (e6.offset += t2.position), e6.path = og.transform(o2, t2, n2);
        break;
      case "remove_text":
        og.equals(t2.path, o2) && t2.offset <= i2 && (e6.offset -= Math.min(i2 - t2.offset, t2.text.length));
        break;
      case "remove_node":
        if (og.equals(t2.path, o2) || og.isAncestor(t2.path, o2)) return null;
        e6.path = og.transform(o2, t2, n2);
        break;
      case "split_node":
        if (og.equals(t2.path, o2)) {
          if (t2.position === i2 && null == r2) return null;
          (t2.position < i2 || t2.position === i2 && "forward" === r2) && (e6.offset -= t2.position, e6.path = og.transform(o2, t2, sg(sg({}, n2), {}, { affinity: "forward" })));
        } else e6.path = og.transform(o2, t2, n2);
    }
  });
} }, lg = { transform(e5, t2) {
  var { current: n2, affinity: r2 } = e5;
  if (null != n2) {
    var o2 = ug.transform(n2, t2, { affinity: r2 });
    e5.current = o2, null == o2 && e5.unref();
  }
} }, cg = ["anchor", "focus"];
function dg(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
var fg = { edges(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { reverse: n2 = false } = t2, { anchor: r2, focus: o2 } = e5;
  return fg.isBackward(e5) === n2 ? [r2, o2] : [o2, r2];
}, end(e5) {
  var [, t2] = fg.edges(e5);
  return t2;
}, equals: (e5, t2) => ug.equals(e5.anchor, t2.anchor) && ug.equals(e5.focus, t2.focus), includes(e5, t2) {
  if (fg.isRange(t2)) {
    if (fg.includes(e5, t2.anchor) || fg.includes(e5, t2.focus)) return true;
    var [n2, r2] = fg.edges(e5), [o2, i2] = fg.edges(t2);
    return ug.isBefore(n2, o2) && ug.isAfter(r2, i2);
  }
  var [a2, s2] = fg.edges(e5), u2 = false, l2 = false;
  return ug.isPoint(t2) ? (u2 = ug.compare(t2, a2) >= 0, l2 = ug.compare(t2, s2) <= 0) : (u2 = og.compare(t2, a2.path) >= 0, l2 = og.compare(t2, s2.path) <= 0), u2 && l2;
}, intersection(e5, t2) {
  var n2 = ph(e5, cg), [r2, o2] = fg.edges(e5), [i2, a2] = fg.edges(t2), s2 = ug.isBefore(r2, i2) ? i2 : r2, u2 = ug.isBefore(o2, a2) ? o2 : a2;
  return ug.isBefore(u2, s2) ? null : (function(e6) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = null != arguments[t3] ? arguments[t3] : {};
      t3 % 2 ? dg(Object(n3), true).forEach(function(t4) {
        rh(e6, t4, n3[t4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(n3)) : dg(Object(n3)).forEach(function(t4) {
        Object.defineProperty(e6, t4, Object.getOwnPropertyDescriptor(n3, t4));
      });
    }
    return e6;
  })({ anchor: s2, focus: u2 }, n2);
}, isBackward(e5) {
  var { anchor: t2, focus: n2 } = e5;
  return ug.isAfter(t2, n2);
}, isCollapsed(e5) {
  var { anchor: t2, focus: n2 } = e5;
  return ug.equals(t2, n2);
}, isExpanded: (e5) => !fg.isCollapsed(e5), isForward: (e5) => !fg.isBackward(e5), isRange: (e5) => op(e5) && ug.isPoint(e5.anchor) && ug.isPoint(e5.focus), *points(e5) {
  yield [e5.anchor, "anchor"], yield [e5.focus, "focus"];
}, start(e5) {
  var [t2] = fg.edges(e5);
  return t2;
}, transform(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return eh(e5, (e6) => {
    if (null === e6) return null;
    var r2, o2, { affinity: i2 = "inward" } = n2;
    if ("inward" === i2) {
      var a2 = fg.isCollapsed(e6);
      fg.isForward(e6) ? (r2 = "forward", o2 = a2 ? r2 : "backward") : (r2 = "backward", o2 = a2 ? r2 : "forward");
    } else "outward" === i2 ? fg.isForward(e6) ? (r2 = "backward", o2 = "forward") : (r2 = "forward", o2 = "backward") : (r2 = i2, o2 = i2);
    var s2 = ug.transform(e6.anchor, t2, { affinity: r2 }), u2 = ug.transform(e6.focus, t2, { affinity: o2 });
    if (!s2 || !u2) return null;
    e6.anchor = s2, e6.focus = u2;
  });
} }, pg = { transform(e5, t2) {
  var { current: n2, affinity: r2 } = e5;
  if (null != n2) {
    var o2 = fg.transform(n2, t2, { affinity: r2 });
    e5.current = o2, null == o2 && e5.unref();
  }
} }, hg = void 0, gg = { setScrubber(e5) {
  hg = e5;
}, stringify: (e5) => JSON.stringify(e5, hg) }, vg = (e5, t2) => {
  for (var n2 in e5) {
    var r2 = e5[n2], o2 = t2[n2];
    if (op(r2) && op(o2)) {
      if (!vg(r2, o2)) return false;
    } else if (Array.isArray(r2) && Array.isArray(o2)) {
      if (r2.length !== o2.length) return false;
      for (var i2 = 0; i2 < r2.length; i2++) if (r2[i2] !== o2[i2]) return false;
    } else if (r2 !== o2) return false;
  }
  for (var a2 in t2) if (void 0 === e5[a2] && void 0 !== t2[a2]) return false;
  return true;
}, mg = ["text"], yg = ["anchor", "focus"];
function bg(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Eg(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? bg(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : bg(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var Cg = { equals(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { loose: r2 = false } = n2;
  function o2(e6) {
    return ph(e6, mg);
  }
  return vg(r2 ? o2(e5) : e5, r2 ? o2(t2) : t2);
}, isText: (e5) => op(e5) && "string" == typeof e5.text, isTextList: (e5) => Array.isArray(e5) && e5.every((e6) => Cg.isText(e6)), isTextProps: (e5) => void 0 !== e5.text, matches(e5, t2) {
  for (var n2 in t2) if ("text" !== n2 && (!e5.hasOwnProperty(n2) || e5[n2] !== t2[n2])) return false;
  return true;
}, decorations(e5, t2) {
  var n2 = [Eg({}, e5)];
  for (var r2 of t2) {
    var o2 = ph(r2, yg), [i2, a2] = fg.edges(r2), s2 = [], u2 = 0, l2 = i2.offset, c2 = a2.offset;
    for (var d2 of n2) {
      var { length: f2 } = d2.text, p2 = u2;
      if (u2 += f2, l2 <= p2 && u2 <= c2) Object.assign(d2, o2), s2.push(d2);
      else if (l2 !== c2 && (l2 === u2 || c2 === p2) || l2 > u2 || c2 < p2 || c2 === p2 && 0 !== p2) s2.push(d2);
      else {
        var h2 = d2, g2 = void 0, v2 = void 0;
        if (c2 < u2) {
          var m2 = c2 - p2;
          v2 = Eg(Eg({}, h2), {}, { text: h2.text.slice(m2) }), h2 = Eg(Eg({}, h2), {}, { text: h2.text.slice(0, m2) });
        }
        if (l2 > p2) {
          var y2 = l2 - p2;
          g2 = Eg(Eg({}, h2), {}, { text: h2.text.slice(0, y2) }), h2 = Eg(Eg({}, h2), {}, { text: h2.text.slice(y2) });
        }
        Object.assign(h2, o2), g2 && s2.push(g2), s2.push(h2), v2 && s2.push(v2);
      }
    }
    n2 = s2;
  }
  return n2;
} };
function Dg(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function wg(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Dg(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : Dg(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var Sg = { transform(e5, t2) {
  e5.children = th(e5.children);
  var n2 = e5.selection && th(e5.selection);
  try {
    n2 = ((e6, t3, n3) => {
      switch (n3.type) {
        case "insert_node":
          var { path: r2, node: o2 } = n3, i2 = eg.parent(e6, r2), a2 = r2[r2.length - 1];
          if (a2 > i2.children.length) throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r2, "] because the destination is past the end of the node."));
          if (i2.children.splice(a2, 0, o2), t3) for (var [s2, u2] of fg.points(t3)) t3[u2] = ug.transform(s2, n3);
          break;
        case "insert_text":
          var { path: l2, offset: c2, text: d2 } = n3;
          if (0 === d2.length) break;
          var f2 = eg.leaf(e6, l2), p2 = f2.text.slice(0, c2), h2 = f2.text.slice(c2);
          if (f2.text = p2 + d2 + h2, t3) for (var [g2, v2] of fg.points(t3)) t3[v2] = ug.transform(g2, n3);
          break;
        case "merge_node":
          var { path: m2 } = n3, y2 = eg.get(e6, m2), b2 = og.previous(m2), E2 = eg.get(e6, b2), C2 = eg.parent(e6, m2), D2 = m2[m2.length - 1];
          if (Cg.isText(y2) && Cg.isText(E2)) E2.text += y2.text;
          else {
            if (Cg.isText(y2) || Cg.isText(E2)) throw new Error('Cannot apply a "merge_node" operation at path ['.concat(m2, "] to nodes of different interfaces: ").concat(gg.stringify(y2), " ").concat(gg.stringify(E2)));
            E2.children.push(...y2.children);
          }
          if (C2.children.splice(D2, 1), t3) for (var [w2, S2] of fg.points(t3)) t3[S2] = ug.transform(w2, n3);
          break;
        case "move_node":
          var { path: A2, newPath: x2 } = n3;
          if (og.isAncestor(A2, x2)) throw new Error("Cannot move a path [".concat(A2, "] to new path [").concat(x2, "] because the destination is inside itself."));
          var O2 = eg.get(e6, A2), N2 = eg.parent(e6, A2), B2 = A2[A2.length - 1];
          N2.children.splice(B2, 1);
          var T2 = og.transform(A2, n3), k2 = eg.get(e6, og.parent(T2)), F2 = T2[T2.length - 1];
          if (k2.children.splice(F2, 0, O2), t3) for (var [I2, P2] of fg.points(t3)) t3[P2] = ug.transform(I2, n3);
          break;
        case "remove_node":
          var { path: _2 } = n3, R2 = _2[_2.length - 1];
          if (eg.parent(e6, _2).children.splice(R2, 1), t3) for (var [L2, M2] of fg.points(t3)) {
            var j2 = ug.transform(L2, n3);
            if (null != t3 && null != j2) t3[M2] = j2;
            else {
              var H2 = void 0, z2 = void 0;
              for (var [$2, U2] of eg.texts(e6)) {
                if (-1 !== og.compare(U2, _2)) {
                  z2 = [$2, U2];
                  break;
                }
                H2 = [$2, U2];
              }
              var V2 = false;
              H2 && z2 && (V2 = og.equals(z2[1], _2) ? !og.hasPrevious(z2[1]) : og.common(H2[1], _2).length < og.common(z2[1], _2).length), H2 && !V2 ? (L2.path = H2[1], L2.offset = H2[0].text.length) : z2 ? (L2.path = z2[1], L2.offset = 0) : t3 = null;
            }
          }
          break;
        case "remove_text":
          var { path: W2, offset: G2, text: q2 } = n3;
          if (0 === q2.length) break;
          var K2 = eg.leaf(e6, W2), Y2 = K2.text.slice(0, G2), X2 = K2.text.slice(G2 + q2.length);
          if (K2.text = Y2 + X2, t3) for (var [Z2, J2] of fg.points(t3)) t3[J2] = ug.transform(Z2, n3);
          break;
        case "set_node":
          var { path: Q2, properties: ee2, newProperties: te2 } = n3;
          if (0 === Q2.length) throw new Error("Cannot set properties on the root node!");
          var ne2 = eg.get(e6, Q2);
          for (var re2 in te2) {
            if ("children" === re2 || "text" === re2) throw new Error('Cannot set the "'.concat(re2, '" property of nodes!'));
            var oe2 = te2[re2];
            null == oe2 ? delete ne2[re2] : ne2[re2] = oe2;
          }
          for (var ie2 in ee2) te2.hasOwnProperty(ie2) || delete ne2[ie2];
          break;
        case "set_selection":
          var { newProperties: ae2 } = n3;
          if (null == ae2) t3 = ae2;
          else {
            if (null == t3) {
              if (!fg.isRange(ae2)) throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(gg.stringify(ae2), " when there is no current selection."));
              t3 = wg({}, ae2);
            }
            for (var se2 in ae2) {
              var ue2 = ae2[se2];
              if (null == ue2) {
                if ("anchor" === se2 || "focus" === se2) throw new Error('Cannot remove the "'.concat(se2, '" selection property'));
                delete t3[se2];
              } else t3[se2] = ue2;
            }
          }
          break;
        case "split_node":
          var { path: le2, position: ce2, properties: de2 } = n3;
          if (0 === le2.length) throw new Error('Cannot apply a "split_node" operation at path ['.concat(le2, "] because the root node cannot be split."));
          var fe2, pe2 = eg.get(e6, le2), he2 = eg.parent(e6, le2), ge2 = le2[le2.length - 1];
          if (Cg.isText(pe2)) {
            var ve2 = pe2.text.slice(0, ce2), me2 = pe2.text.slice(ce2);
            pe2.text = ve2, fe2 = wg(wg({}, de2), {}, { text: me2 });
          } else {
            var ye2 = pe2.children.slice(0, ce2), be2 = pe2.children.slice(ce2);
            pe2.children = ye2, fe2 = wg(wg({}, de2), {}, { children: be2 });
          }
          if (he2.children.splice(ge2 + 1, 0, fe2), t3) for (var [Ee2, Ce2] of fg.points(t3)) t3[Ce2] = ug.transform(Ee2, n3);
      }
      return t3;
    })(e5, n2, t2);
  } finally {
    e5.children = nh(e5.children), e5.selection = n2 ? ap(n2) ? nh(n2) : n2 : null;
  }
} }, Ag = ["text"], xg = ["children"];
function Og(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ng(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Og(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : Og(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var Bg = { insertNodes(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Kh.withoutNormalizing(e5, () => {
    var { hanging: r2 = false, voids: o2 = false, mode: i2 = "lowest" } = n2, { at: a2, match: s2, select: u2 } = n2;
    if (eg.isNode(t2) && (t2 = [t2]), 0 !== t2.length) {
      var [l2] = t2;
      if (a2 || (a2 = e5.selection ? e5.selection : e5.children.length > 0 ? Kh.end(e5, []) : [0], u2 = true), null == u2 && (u2 = false), fg.isRange(a2)) if (r2 || (a2 = Kh.unhangRange(e5, a2)), fg.isCollapsed(a2)) a2 = a2.anchor;
      else {
        var [, c2] = fg.edges(a2), d2 = Kh.pointRef(e5, c2);
        jg.delete(e5, { at: a2 }), a2 = d2.unref();
      }
      if (ug.isPoint(a2)) {
        null == s2 && (s2 = Cg.isText(l2) ? (e6) => Cg.isText(e6) : e5.isInline(l2) ? (t3) => Cg.isText(t3) || Kh.isInline(e5, t3) : (t3) => Kh.isBlock(e5, t3));
        var [f2] = Kh.nodes(e5, { at: a2.path, match: s2, mode: i2, voids: o2 });
        if (!f2) return;
        var [, p2] = f2, h2 = Kh.pathRef(e5, p2), g2 = Kh.isEnd(e5, a2, p2);
        jg.splitNodes(e5, { at: a2, match: s2, mode: i2, voids: o2 });
        var v2 = h2.unref();
        a2 = g2 ? og.next(v2) : v2;
      }
      var m2 = og.parent(a2), y2 = a2[a2.length - 1];
      if (o2 || !Kh.void(e5, { at: m2 })) {
        for (var b2 of t2) {
          var E2 = m2.concat(y2);
          y2++, e5.apply({ type: "insert_node", path: E2, node: b2 }), a2 = og.next(a2);
        }
        if (a2 = og.previous(a2), u2) {
          var C2 = Kh.end(e5, a2);
          C2 && jg.select(e5, C2);
        }
      }
    }
  });
}, liftNodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { at: n2 = e5.selection, mode: r2 = "lowest", voids: o2 = false } = t2, { match: i2 } = t2;
    if (null == i2 && (i2 = og.isPath(n2) ? Fg(e5, n2) : (t3) => Kh.isBlock(e5, t3)), n2) {
      var a2 = Kh.nodes(e5, { at: n2, match: i2, mode: r2, voids: o2 }), s2 = Array.from(a2, (t3) => {
        var [, n3] = t3;
        return Kh.pathRef(e5, n3);
      });
      for (var u2 of s2) {
        var l2 = u2.unref();
        if (l2.length < 2) throw new Error("Cannot lift node at a path [".concat(l2, "] because it has a depth of less than `2`."));
        var c2 = Kh.node(e5, og.parent(l2)), [d2, f2] = c2, p2 = l2[l2.length - 1], { length: h2 } = d2.children;
        if (1 === h2) {
          var g2 = og.next(f2);
          jg.moveNodes(e5, { at: l2, to: g2, voids: o2 }), jg.removeNodes(e5, { at: f2, voids: o2 });
        } else if (0 === p2) jg.moveNodes(e5, { at: l2, to: f2, voids: o2 });
        else if (p2 === h2 - 1) {
          var v2 = og.next(f2);
          jg.moveNodes(e5, { at: l2, to: v2, voids: o2 });
        } else {
          var m2 = og.next(l2), y2 = og.next(f2);
          jg.splitNodes(e5, { at: m2, voids: o2 }), jg.moveNodes(e5, { at: l2, to: y2, voids: o2 });
        }
      }
    }
  });
}, mergeNodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { match: n2, at: r2 = e5.selection } = t2, { hanging: o2 = false, voids: i2 = false, mode: a2 = "lowest" } = t2;
    if (r2) {
      if (null == n2) if (og.isPath(r2)) {
        var [s2] = Kh.parent(e5, r2);
        n2 = (e6) => s2.children.includes(e6);
      } else n2 = (t3) => Kh.isBlock(e5, t3);
      if (!o2 && fg.isRange(r2) && (r2 = Kh.unhangRange(e5, r2)), fg.isRange(r2)) if (fg.isCollapsed(r2)) r2 = r2.anchor;
      else {
        var [, u2] = fg.edges(r2), l2 = Kh.pointRef(e5, u2);
        jg.delete(e5, { at: r2 }), r2 = l2.unref(), null == t2.at && jg.select(e5, r2);
      }
      var [c2] = Kh.nodes(e5, { at: r2, match: n2, voids: i2, mode: a2 }), d2 = Kh.previous(e5, { at: r2, match: n2, voids: i2, mode: a2 });
      if (c2 && d2) {
        var [f2, p2] = c2, [h2, g2] = d2;
        if (0 !== p2.length && 0 !== g2.length) {
          var v2, m2, y2 = og.next(g2), b2 = og.common(p2, g2), E2 = og.isSibling(p2, g2), C2 = Array.from(Kh.levels(e5, { at: p2 }), (e6) => {
            var [t3] = e6;
            return t3;
          }).slice(b2.length).slice(0, -1), D2 = Kh.above(e5, { at: p2, mode: "highest", match: (t3) => C2.includes(t3) && Tg(e5, t3) }), w2 = D2 && Kh.pathRef(e5, D2[1]);
          if (Cg.isText(f2) && Cg.isText(h2)) {
            var S2 = ph(f2, Ag);
            m2 = h2.text.length, v2 = S2;
          } else {
            if (!$h.isElement(f2) || !$h.isElement(h2)) throw new Error("Cannot merge the node at path [".concat(p2, "] with the previous sibling because it is not the same kind: ").concat(gg.stringify(f2), " ").concat(gg.stringify(h2)));
            S2 = ph(f2, xg);
            m2 = h2.children.length, v2 = S2;
          }
          E2 || jg.moveNodes(e5, { at: p2, to: y2, voids: i2 }), w2 && jg.removeNodes(e5, { at: w2.current, voids: i2 }), $h.isElement(h2) && Kh.isEmpty(e5, h2) || Cg.isText(h2) && "" === h2.text && 0 !== g2[g2.length - 1] ? jg.removeNodes(e5, { at: g2, voids: i2 }) : e5.apply({ type: "merge_node", path: y2, position: m2, properties: v2 }), w2 && w2.unref();
        }
      }
    }
  });
}, moveNodes(e5, t2) {
  Kh.withoutNormalizing(e5, () => {
    var { to: n2, at: r2 = e5.selection, mode: o2 = "lowest", voids: i2 = false } = t2, { match: a2 } = t2;
    if (r2) {
      null == a2 && (a2 = og.isPath(r2) ? Fg(e5, r2) : (t3) => Kh.isBlock(e5, t3));
      var s2 = Kh.pathRef(e5, n2), u2 = Kh.nodes(e5, { at: r2, match: a2, mode: o2, voids: i2 }), l2 = Array.from(u2, (t3) => {
        var [, n3] = t3;
        return Kh.pathRef(e5, n3);
      });
      for (var c2 of l2) {
        var d2 = c2.unref(), f2 = s2.current;
        0 !== d2.length && e5.apply({ type: "move_node", path: d2, newPath: f2 }), s2.current && og.isSibling(f2, d2) && og.isAfter(f2, d2) && (s2.current = og.next(s2.current));
      }
      s2.unref();
    }
  });
}, removeNodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { hanging: n2 = false, voids: r2 = false, mode: o2 = "lowest" } = t2, { at: i2 = e5.selection, match: a2 } = t2;
    if (i2) {
      null == a2 && (a2 = og.isPath(i2) ? Fg(e5, i2) : (t3) => Kh.isBlock(e5, t3)), !n2 && fg.isRange(i2) && (i2 = Kh.unhangRange(e5, i2));
      var s2 = Kh.nodes(e5, { at: i2, match: a2, mode: o2, voids: r2 }), u2 = Array.from(s2, (t3) => {
        var [, n3] = t3;
        return Kh.pathRef(e5, n3);
      });
      for (var l2 of u2) {
        var c2 = l2.unref();
        if (c2) {
          var [d2] = Kh.node(e5, c2);
          e5.apply({ type: "remove_node", path: c2, node: d2 });
        }
      }
    }
  });
}, setNodes(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Kh.withoutNormalizing(e5, () => {
    var { match: r2, at: o2 = e5.selection, compare: i2, merge: a2 } = n2, { hanging: s2 = false, mode: u2 = "lowest", split: l2 = false, voids: c2 = false } = n2;
    if (o2) {
      if (null == r2 && (r2 = og.isPath(o2) ? Fg(e5, o2) : (t3) => Kh.isBlock(e5, t3)), !s2 && fg.isRange(o2) && (o2 = Kh.unhangRange(e5, o2)), l2 && fg.isRange(o2)) {
        if (fg.isCollapsed(o2) && Kh.leaf(e5, o2.anchor)[0].text.length > 0) return;
        var d2 = Kh.rangeRef(e5, o2, { affinity: "inward" }), [f2, p2] = fg.edges(o2), h2 = "lowest" === u2 ? "lowest" : "highest", g2 = Kh.isEnd(e5, p2, p2.path);
        jg.splitNodes(e5, { at: p2, match: r2, mode: h2, voids: c2, always: !g2 });
        var v2 = Kh.isStart(e5, f2, f2.path);
        jg.splitNodes(e5, { at: f2, match: r2, mode: h2, voids: c2, always: !v2 }), o2 = d2.unref(), null == n2.at && jg.select(e5, o2);
      }
      for (var [m2, y2] of (i2 || (i2 = (e6, t3) => e6 !== t3), Kh.nodes(e5, { at: o2, match: r2, mode: u2, voids: c2 }))) {
        var b2 = {}, E2 = {};
        if (0 !== y2.length) {
          var C2 = false;
          for (var D2 in t2) "children" !== D2 && "text" !== D2 && i2(t2[D2], m2[D2]) && (C2 = true, m2.hasOwnProperty(D2) && (b2[D2] = m2[D2]), a2 ? null != t2[D2] && (E2[D2] = a2(m2[D2], t2[D2])) : null != t2[D2] && (E2[D2] = t2[D2]));
          C2 && e5.apply({ type: "set_node", path: y2, properties: b2, newProperties: E2 });
        }
      }
    }
  });
}, splitNodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { mode: n2 = "lowest", voids: r2 = false } = t2, { match: o2, at: i2 = e5.selection, height: a2 = 0, always: s2 = false } = t2;
    if (null == o2 && (o2 = (t3) => Kh.isBlock(e5, t3)), fg.isRange(i2) && (i2 = kg(e5, i2)), og.isPath(i2)) {
      var u2 = i2, l2 = Kh.point(e5, u2), [c2] = Kh.parent(e5, u2);
      o2 = (e6) => e6 === c2, a2 = l2.path.length - u2.length + 1, i2 = l2, s2 = true;
    }
    if (i2) {
      var d2, f2 = Kh.pointRef(e5, i2, { affinity: "backward" });
      try {
        var [p2] = Kh.nodes(e5, { at: i2, match: o2, mode: n2, voids: r2 });
        if (!p2) return;
        var h2 = Kh.void(e5, { at: i2, mode: "highest" });
        if (!r2 && h2) {
          var [g2, v2] = h2;
          if ($h.isElement(g2) && e5.isInline(g2)) {
            var m2 = Kh.after(e5, v2);
            if (!m2) {
              var y2 = og.next(v2);
              jg.insertNodes(e5, { text: "" }, { at: y2, voids: r2 }), m2 = Kh.point(e5, y2);
            }
            i2 = m2, s2 = true;
          }
          a2 = i2.path.length - v2.length + 1, s2 = true;
        }
        d2 = Kh.pointRef(e5, i2);
        var b2 = i2.path.length - a2, [, E2] = p2, C2 = i2.path.slice(0, b2), D2 = 0 === a2 ? i2.offset : i2.path[b2] + 0;
        for (var [w2, S2] of Kh.levels(e5, { at: C2, reverse: true, voids: r2 })) {
          var A2 = false;
          if (S2.length < E2.length || 0 === S2.length || !r2 && Kh.isVoid(e5, w2)) break;
          var x2 = f2.current, O2 = Kh.isEnd(e5, x2, S2);
          if (s2 || !f2 || !Kh.isEdge(e5, x2, S2)) {
            A2 = true;
            var N2 = eg.extractProps(w2);
            e5.apply({ type: "split_node", path: S2, position: D2, properties: N2 });
          }
          D2 = S2[S2.length - 1] + (A2 || O2 ? 1 : 0);
        }
        if (null == t2.at) {
          var B2 = d2.current || Kh.end(e5, []);
          jg.select(e5, B2);
        }
      } finally {
        var T2;
        f2.unref(), null === (T2 = d2) || void 0 === T2 || T2.unref();
      }
    }
  });
}, unsetNodes(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Array.isArray(t2) || (t2 = [t2]);
  var r2 = {};
  for (var o2 of t2) r2[o2] = null;
  jg.setNodes(e5, r2, n2);
}, unwrapNodes(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { mode: n2 = "lowest", split: r2 = false, voids: o2 = false } = t2, { at: i2 = e5.selection, match: a2 } = t2;
    if (i2) {
      null == a2 && (a2 = og.isPath(i2) ? Fg(e5, i2) : (t3) => Kh.isBlock(e5, t3)), og.isPath(i2) && (i2 = Kh.range(e5, i2));
      var s2 = fg.isRange(i2) ? Kh.rangeRef(e5, i2) : null, u2 = Kh.nodes(e5, { at: i2, match: a2, mode: n2, voids: o2 }), l2 = Array.from(u2, (t3) => {
        var [, n3] = t3;
        return Kh.pathRef(e5, n3);
      }).reverse(), c2 = function(t3) {
        var n3 = t3.unref(), [i3] = Kh.node(e5, n3), a3 = Kh.range(e5, n3);
        r2 && s2 && (a3 = fg.intersection(s2.current, a3)), jg.liftNodes(e5, { at: a3, match: (e6) => $h.isAncestor(i3) && i3.children.includes(e6), voids: o2 });
      };
      for (var d2 of l2) c2(d2);
      s2 && s2.unref();
    }
  });
}, wrapNodes(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Kh.withoutNormalizing(e5, () => {
    var { mode: r2 = "lowest", split: o2 = false, voids: i2 = false } = n2, { match: a2, at: s2 = e5.selection } = n2;
    if (s2) {
      if (null == a2 && (a2 = og.isPath(s2) ? Fg(e5, s2) : e5.isInline(t2) ? (t3) => Kh.isInline(e5, t3) || Cg.isText(t3) : (t3) => Kh.isBlock(e5, t3)), o2 && fg.isRange(s2)) {
        var [u2, l2] = fg.edges(s2), c2 = Kh.rangeRef(e5, s2, { affinity: "inward" });
        jg.splitNodes(e5, { at: l2, match: a2, voids: i2 }), jg.splitNodes(e5, { at: u2, match: a2, voids: i2 }), s2 = c2.unref(), null == n2.at && jg.select(e5, s2);
      }
      var d2 = Array.from(Kh.nodes(e5, { at: s2, match: e5.isInline(t2) ? (t3) => Kh.isBlock(e5, t3) : (e6) => Kh.isEditor(e6), mode: "lowest", voids: i2 }));
      for (var [, f2] of d2) {
        var p2 = fg.isRange(s2) ? fg.intersection(s2, Kh.range(e5, f2)) : s2;
        if (p2) {
          var h2 = Array.from(Kh.nodes(e5, { at: p2, match: a2, mode: r2, voids: i2 }));
          if (h2.length > 0) {
            var g2 = (function() {
              var [n3] = h2, r3 = h2[h2.length - 1], [, o3] = n3, [, a3] = r3;
              if (0 === o3.length && 0 === a3.length) return "continue";
              var s3 = og.equals(o3, a3) ? og.parent(o3) : og.common(o3, a3), u3 = Kh.range(e5, o3, a3), l3 = Kh.node(e5, s3), [c3] = l3, d3 = s3.length + 1, f3 = og.next(a3.slice(0, d3)), p3 = Ng(Ng({}, t2), {}, { children: [] });
              jg.insertNodes(e5, p3, { at: f3, voids: i2 }), jg.moveNodes(e5, { at: u3, match: (e6) => $h.isAncestor(c3) && c3.children.includes(e6), to: f3.concat(0), voids: i2 });
            })();
            if ("continue" === g2) continue;
          }
        }
      }
    }
  });
} }, Tg = (e5, t2) => {
  if ($h.isElement(t2)) {
    var n2 = t2;
    return !!Kh.isVoid(e5, t2) || 1 === n2.children.length && Tg(e5, n2.children[0]);
  }
  return !Kh.isEditor(t2);
}, kg = (e5, t2) => {
  if (fg.isCollapsed(t2)) return t2.anchor;
  var [, n2] = fg.edges(t2), r2 = Kh.pointRef(e5, n2);
  return jg.delete(e5, { at: t2 }), r2.unref();
}, Fg = (e5, t2) => {
  var [n2] = Kh.node(e5, t2);
  return (e6) => e6 === n2;
};
function Ig(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Pg(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Ig(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : Ig(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var _g = { collapse(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { edge: n2 = "anchor" } = t2, { selection: r2 } = e5;
  if (r2) {
    if ("anchor" === n2) jg.select(e5, r2.anchor);
    else if ("focus" === n2) jg.select(e5, r2.focus);
    else if ("start" === n2) {
      var [o2] = fg.edges(r2);
      jg.select(e5, o2);
    } else if ("end" === n2) {
      var [, i2] = fg.edges(r2);
      jg.select(e5, i2);
    }
  }
}, deselect(e5) {
  var { selection: t2 } = e5;
  t2 && e5.apply({ type: "set_selection", properties: t2, newProperties: null });
}, move(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { selection: n2 } = e5, { distance: r2 = 1, unit: o2 = "character", reverse: i2 = false } = t2, { edge: a2 = null } = t2;
  if (n2) {
    "start" === a2 && (a2 = fg.isBackward(n2) ? "focus" : "anchor"), "end" === a2 && (a2 = fg.isBackward(n2) ? "anchor" : "focus");
    var { anchor: s2, focus: u2 } = n2, l2 = { distance: r2, unit: o2 }, c2 = {};
    if (null == a2 || "anchor" === a2) {
      var d2 = i2 ? Kh.before(e5, s2, l2) : Kh.after(e5, s2, l2);
      d2 && (c2.anchor = d2);
    }
    if (null == a2 || "focus" === a2) {
      var f2 = i2 ? Kh.before(e5, u2, l2) : Kh.after(e5, u2, l2);
      f2 && (c2.focus = f2);
    }
    jg.setSelection(e5, c2);
  }
}, select(e5, t2) {
  var { selection: n2 } = e5;
  if (t2 = Kh.range(e5, t2), n2) jg.setSelection(e5, t2);
  else {
    if (!fg.isRange(t2)) throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(gg.stringify(t2)));
    e5.apply({ type: "set_selection", properties: n2, newProperties: t2 });
  }
}, setPoint(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { selection: r2 } = e5, { edge: o2 = "both" } = n2;
  if (r2) {
    "start" === o2 && (o2 = fg.isBackward(r2) ? "focus" : "anchor"), "end" === o2 && (o2 = fg.isBackward(r2) ? "anchor" : "focus");
    var { anchor: i2, focus: a2 } = r2, s2 = "anchor" === o2 ? i2 : a2;
    jg.setSelection(e5, { ["anchor" === o2 ? "anchor" : "focus"]: Pg(Pg({}, s2), t2) });
  }
}, setSelection(e5, t2) {
  var { selection: n2 } = e5, r2 = {}, o2 = {};
  if (n2) {
    for (var i2 in t2) ("anchor" === i2 && null != t2.anchor && !ug.equals(t2.anchor, n2.anchor) || "focus" === i2 && null != t2.focus && !ug.equals(t2.focus, n2.focus) || "anchor" !== i2 && "focus" !== i2 && t2[i2] !== n2[i2]) && (r2[i2] = n2[i2], o2[i2] = t2[i2]);
    Object.keys(r2).length > 0 && e5.apply({ type: "set_selection", properties: r2, newProperties: o2 });
  }
} }, Rg = { delete(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Kh.withoutNormalizing(e5, () => {
    var { reverse: n2 = false, unit: r2 = "character", distance: o2 = 1, voids: i2 = false } = t2, { at: a2 = e5.selection, hanging: s2 = false } = t2;
    if (a2) {
      var u2 = false;
      if (fg.isRange(a2) && fg.isCollapsed(a2) && (u2 = true, a2 = a2.anchor), ug.isPoint(a2)) {
        var l2 = Kh.void(e5, { at: a2, mode: "highest" });
        if (!i2 && l2) {
          var [, c2] = l2;
          a2 = c2;
        } else {
          var d2 = { unit: r2, distance: o2 };
          a2 = { anchor: a2, focus: n2 ? Kh.before(e5, a2, d2) || Kh.start(e5, []) : Kh.after(e5, a2, d2) || Kh.end(e5, []) }, s2 = true;
        }
      }
      if (og.isPath(a2)) jg.removeNodes(e5, { at: a2, voids: i2 });
      else if (!fg.isCollapsed(a2)) {
        if (!s2) {
          var [, f2] = fg.edges(a2), p2 = Kh.end(e5, []);
          ug.equals(f2, p2) || (a2 = Kh.unhangRange(e5, a2, { voids: i2 }));
        }
        var [h2, g2] = fg.edges(a2), v2 = Kh.above(e5, { match: (t3) => Kh.isBlock(e5, t3), at: h2, voids: i2 }), m2 = Kh.above(e5, { match: (t3) => Kh.isBlock(e5, t3), at: g2, voids: i2 }), y2 = v2 && m2 && !og.equals(v2[1], m2[1]), b2 = og.equals(h2.path, g2.path), E2 = i2 ? null : Kh.void(e5, { at: h2, mode: "highest" }), C2 = i2 ? null : Kh.void(e5, { at: g2, mode: "highest" });
        if (E2) {
          var D2 = Kh.before(e5, h2);
          D2 && v2 && og.isAncestor(v2[1], D2.path) && (h2 = D2);
        }
        if (C2) {
          var w2 = Kh.after(e5, g2);
          w2 && m2 && og.isAncestor(m2[1], w2.path) && (g2 = w2);
        }
        var S2, A2 = [];
        for (var x2 of Kh.nodes(e5, { at: a2, voids: i2 })) {
          var [O2, N2] = x2;
          S2 && 0 === og.compare(N2, S2) || (!i2 && Kh.isVoid(e5, O2) || !og.isCommon(N2, h2.path) && !og.isCommon(N2, g2.path)) && (A2.push(x2), S2 = N2);
        }
        var B2 = Array.from(A2, (t3) => {
          var [, n3] = t3;
          return Kh.pathRef(e5, n3);
        }), T2 = Kh.pointRef(e5, h2), k2 = Kh.pointRef(e5, g2), F2 = "";
        if (!b2 && !E2) {
          var I2 = T2.current, [P2] = Kh.leaf(e5, I2), { path: _2 } = I2, { offset: R2 } = h2, L2 = P2.text.slice(R2);
          L2.length > 0 && (e5.apply({ type: "remove_text", path: _2, offset: R2, text: L2 }), F2 = L2);
        }
        for (var M2 of B2) {
          var j2 = M2.unref();
          jg.removeNodes(e5, { at: j2, voids: i2 });
        }
        if (!C2) {
          var H2 = k2.current, [z2] = Kh.leaf(e5, H2), { path: $2 } = H2, U2 = b2 ? h2.offset : 0, V2 = z2.text.slice(U2, g2.offset);
          V2.length > 0 && (e5.apply({ type: "remove_text", path: $2, offset: U2, text: V2 }), F2 = V2);
        }
        !b2 && y2 && k2.current && T2.current && jg.mergeNodes(e5, { at: k2.current, hanging: true, voids: i2 }), u2 && n2 && "character" === r2 && F2.length > 1 && F2.match(/[\u0E00-\u0E7F]+/) && jg.insertText(e5, F2.slice(0, F2.length - o2));
        var W2 = T2.unref(), G2 = k2.unref(), q2 = n2 ? W2 || G2 : G2 || W2;
        null == t2.at && q2 && jg.select(e5, q2);
      }
    }
  });
}, insertFragment(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Kh.withoutNormalizing(e5, () => {
    var { hanging: r2 = false, voids: o2 = false } = n2, { at: i2 = e5.selection } = n2;
    if (t2.length && i2) {
      if (fg.isRange(i2)) if (r2 || (i2 = Kh.unhangRange(e5, i2)), fg.isCollapsed(i2)) i2 = i2.anchor;
      else {
        var [, a2] = fg.edges(i2);
        if (!o2 && Kh.void(e5, { at: a2 })) return;
        var s2 = Kh.pointRef(e5, a2);
        jg.delete(e5, { at: i2 }), i2 = s2.unref();
      }
      else og.isPath(i2) && (i2 = Kh.start(e5, i2));
      if (o2 || !Kh.void(e5, { at: i2 })) {
        var u2 = Kh.above(e5, { at: i2, match: (t3) => Kh.isInline(e5, t3), mode: "highest", voids: o2 });
        if (u2) {
          var [, l2] = u2;
          if (Kh.isEnd(e5, i2, l2)) i2 = Kh.after(e5, l2);
          else if (Kh.isStart(e5, i2, l2)) {
            i2 = Kh.before(e5, l2);
          }
        }
        var c2 = Kh.above(e5, { match: (t3) => Kh.isBlock(e5, t3), at: i2, voids: o2 }), [, d2] = c2, f2 = Kh.isStart(e5, i2, d2), p2 = Kh.isEnd(e5, i2, d2), h2 = f2 && p2, g2 = !f2 || f2 && p2, v2 = !p2, [, m2] = eg.first({ children: t2 }, []), [, y2] = eg.last({ children: t2 }, []), b2 = [], E2 = (t3) => {
          var [n3, r3] = t3;
          return !(0 === r3.length) && (!!h2 || !(g2 && og.isAncestor(r3, m2) && $h.isElement(n3) && !e5.isVoid(n3) && !e5.isInline(n3)) && !(v2 && og.isAncestor(r3, y2) && $h.isElement(n3) && !e5.isVoid(n3) && !e5.isInline(n3)));
        };
        for (var C2 of eg.nodes({ children: t2 }, { pass: E2 })) E2(C2) && b2.push(C2);
        var D2 = [], w2 = [], S2 = [], A2 = true, x2 = false;
        for (var [O2] of b2) $h.isElement(O2) && !e5.isInline(O2) ? (A2 = false, x2 = true, w2.push(O2)) : A2 ? D2.push(O2) : S2.push(O2);
        var [N2] = Kh.nodes(e5, { at: i2, match: (t3) => Cg.isText(t3) || Kh.isInline(e5, t3), mode: "highest", voids: o2 }), [, B2] = N2, T2 = Kh.isStart(e5, i2, B2), k2 = Kh.isEnd(e5, i2, B2), F2 = Kh.pathRef(e5, p2 && !S2.length ? og.next(d2) : d2), I2 = Kh.pathRef(e5, k2 ? og.next(B2) : B2);
        jg.splitNodes(e5, { at: i2, match: (t3) => x2 ? Kh.isBlock(e5, t3) : Cg.isText(t3) || Kh.isInline(e5, t3), mode: x2 ? "lowest" : "highest", always: x2 && (!f2 || D2.length > 0) && (!p2 || S2.length > 0), voids: o2 });
        var P2, _2 = Kh.pathRef(e5, !T2 || T2 && k2 ? og.next(B2) : B2);
        if (jg.insertNodes(e5, D2, { at: _2.current, match: (t3) => Cg.isText(t3) || Kh.isInline(e5, t3), mode: "highest", voids: o2 }), h2 && !D2.length && w2.length && !S2.length && jg.delete(e5, { at: d2, voids: o2 }), jg.insertNodes(e5, w2, { at: F2.current, match: (t3) => Kh.isBlock(e5, t3), mode: "lowest", voids: o2 }), jg.insertNodes(e5, S2, { at: I2.current, match: (t3) => Cg.isText(t3) || Kh.isInline(e5, t3), mode: "highest", voids: o2 }), !n2.at) {
          if (S2.length > 0 && I2.current ? P2 = og.previous(I2.current) : w2.length > 0 && F2.current ? P2 = og.previous(F2.current) : _2.current && (P2 = og.previous(_2.current)), P2) {
            var R2 = Kh.end(e5, P2);
            jg.select(e5, R2);
          }
        }
        _2.unref(), F2.unref(), I2.unref();
      }
    }
  });
}, insertText(e5, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  Kh.withoutNormalizing(e5, () => {
    var { voids: r2 = false } = n2, { at: o2 = e5.selection } = n2;
    if (o2) {
      if (og.isPath(o2) && (o2 = Kh.range(e5, o2)), fg.isRange(o2)) if (fg.isCollapsed(o2)) o2 = o2.anchor;
      else {
        var i2 = fg.end(o2);
        if (!r2 && Kh.void(e5, { at: i2 })) return;
        var a2 = fg.start(o2), s2 = Kh.pointRef(e5, a2), u2 = Kh.pointRef(e5, i2);
        jg.delete(e5, { at: o2, voids: r2 });
        var l2 = s2.unref(), c2 = u2.unref();
        o2 = l2 || c2, jg.setSelection(e5, { anchor: o2, focus: o2 });
      }
      if (r2 || !Kh.void(e5, { at: o2 })) {
        var { path: d2, offset: f2 } = o2;
        t2.length > 0 && e5.apply({ type: "insert_text", path: d2, offset: f2, text: t2 });
      }
    }
  });
} };
function Lg(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e5);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Mg(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Lg(Object(n2), true).forEach(function(t3) {
      rh(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : Lg(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
var jg = Mg(Mg(Mg(Mg({}, Sg), Bg), _g), Rg), Hg = { isHistory: (e5) => op(e5) && Array.isArray(e5.redos) && Array.isArray(e5.undos) && (0 === e5.redos.length || rg.isOperationList(e5.redos[0].operations)) && (0 === e5.undos.length || rg.isOperationList(e5.undos[0].operations)) }, zg = /* @__PURE__ */ new WeakMap(), $g = /* @__PURE__ */ new WeakMap(), Ug = { isHistoryEditor: (e5) => Hg.isHistory(e5.history) && Kh.isEditor(e5), isMerging: (e5) => $g.get(e5), isSaving: (e5) => zg.get(e5), redo(e5) {
  e5.redo();
}, undo(e5) {
  e5.undo();
}, withMerging(e5, t2) {
  var n2 = Ug.isMerging(e5);
  $g.set(e5, true), t2(), $g.set(e5, n2);
}, withoutMerging(e5, t2) {
  var n2 = Ug.isMerging(e5);
  $g.set(e5, false), t2(), $g.set(e5, n2);
}, withoutSaving(e5, t2) {
  var n2 = Ug.isSaving(e5);
  zg.set(e5, false), t2(), zg.set(e5, n2);
} }, Vg = (e5) => {
  var t2 = e5, { apply: n2 } = t2;
  return t2.history = { undos: [], redos: [] }, t2.redo = () => {
    var { history: e6 } = t2, { redos: n3 } = e6;
    if (n3.length > 0) {
      var r2 = n3[n3.length - 1];
      r2.selectionBefore && jg.setSelection(t2, r2.selectionBefore), Ug.withoutSaving(t2, () => {
        Kh.withoutNormalizing(t2, () => {
          for (var e7 of r2.operations) t2.apply(e7);
        });
      }), e6.redos.pop(), t2.writeHistory("undos", r2);
    }
  }, t2.undo = () => {
    var { history: e6 } = t2, { undos: n3 } = e6;
    if (n3.length > 0) {
      var r2 = n3[n3.length - 1];
      Ug.withoutSaving(t2, () => {
        Kh.withoutNormalizing(t2, () => {
          var e7 = r2.operations.map(rg.inverse).reverse();
          for (var n4 of e7) t2.apply(n4);
          r2.selectionBefore && jg.setSelection(t2, r2.selectionBefore);
        });
      }), t2.writeHistory("redos", r2), e6.undos.pop();
    }
  }, t2.apply = (e6) => {
    var { operations: r2, history: o2 } = t2, { undos: i2 } = o2, a2 = i2[i2.length - 1], s2 = a2 && a2.operations[a2.operations.length - 1], u2 = Ug.isSaving(t2), l2 = Ug.isMerging(t2);
    if (null == u2 && (u2 = Gg(e6)), u2) {
      if (null == l2 && (l2 = null != a2 && (0 !== r2.length || Wg(e6, s2))), a2 && l2) a2.operations.push(e6);
      else {
        var c2 = { operations: [e6], selectionBefore: t2.selection };
        t2.writeHistory("undos", c2);
      }
      for (; i2.length > 100; ) i2.shift();
      o2.redos = [];
    }
    n2(e6);
  }, t2.writeHistory = (e6, n3) => {
    t2.history[e6].push(n3);
  }, t2;
}, Wg = (e5, t2) => !(!t2 || "insert_text" !== e5.type || "insert_text" !== t2.type || e5.offset !== t2.offset + t2.text.length || !og.equals(e5.path, t2.path)) || !(!t2 || "remove_text" !== e5.type || "remove_text" !== t2.type || e5.offset + e5.text.length !== t2.offset || !og.equals(e5.path, t2.path)), Gg = (e5, t2) => "set_selection" !== e5.type, qg = function(e5, t2) {
  return qg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e6, t3) {
    e6.__proto__ = t3;
  } || function(e6, t3) {
    for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e6[n2] = t3[n2]);
  }, qg(e5, t2);
};
function Kg(e5, t2) {
  if ("function" != typeof t2 && null !== t2) throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
  function n2() {
    this.constructor = e5;
  }
  qg(e5, t2), e5.prototype = null === t2 ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
}
var Yg = function() {
  return Yg = Object.assign || function(e5) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var o2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, o2) && (e5[o2] = t2[o2]);
    return e5;
  }, Yg.apply(this, arguments);
};
function Xg(e5, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(o2, i2) {
    function a2(e6) {
      try {
        u2(r2.next(e6));
      } catch (e7) {
        i2(e7);
      }
    }
    function s2(e6) {
      try {
        u2(r2.throw(e6));
      } catch (e7) {
        i2(e7);
      }
    }
    function u2(e6) {
      var t3;
      e6.done ? o2(e6.value) : (t3 = e6.value, t3 instanceof n2 ? t3 : new n2(function(e7) {
        e7(t3);
      })).then(a2, s2);
    }
    u2((r2 = r2.apply(e5, t2 || [])).next());
  });
}
function Zg(e5, t2) {
  var n2, r2, o2, i2 = { label: 0, sent: function() {
    if (1 & o2[0]) throw o2[1];
    return o2[1];
  }, trys: [], ops: [] }, a2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
  return a2.next = s2(0), a2.throw = s2(1), a2.return = s2(2), "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function s2(s3) {
    return function(u2) {
      return (function(s4) {
        if (n2) throw new TypeError("Generator is already executing.");
        for (; a2 && (a2 = 0, s4[0] && (i2 = 0)), i2; ) try {
          if (n2 = 1, r2 && (o2 = 2 & s4[0] ? r2.return : s4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, s4[1])).done) return o2;
          switch (r2 = 0, o2 && (s4 = [2 & s4[0], o2.value]), s4[0]) {
            case 0:
            case 1:
              o2 = s4;
              break;
            case 4:
              return i2.label++, { value: s4[1], done: false };
            case 5:
              i2.label++, r2 = s4[1], s4 = [0];
              continue;
            case 7:
              s4 = i2.ops.pop(), i2.trys.pop();
              continue;
            default:
              if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== s4[0] && 2 !== s4[0])) {
                i2 = 0;
                continue;
              }
              if (3 === s4[0] && (!o2 || s4[1] > o2[0] && s4[1] < o2[3])) {
                i2.label = s4[1];
                break;
              }
              if (6 === s4[0] && i2.label < o2[1]) {
                i2.label = o2[1], o2 = s4;
                break;
              }
              if (o2 && i2.label < o2[2]) {
                i2.label = o2[2], i2.ops.push(s4);
                break;
              }
              o2[2] && i2.ops.pop(), i2.trys.pop();
              continue;
          }
          s4 = t2.call(e5, i2);
        } catch (e6) {
          s4 = [6, e6], r2 = 0;
        } finally {
          n2 = o2 = 0;
        }
        if (5 & s4[0]) throw s4[1];
        return { value: s4[0] ? s4[1] : void 0, done: true };
      })([s3, u2]);
    };
  }
}
function Jg(e5) {
  var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e5[t2], r2 = 0;
  if (n2) return n2.call(e5);
  if (e5 && "number" == typeof e5.length) return { next: function() {
    return e5 && r2 >= e5.length && (e5 = void 0), { value: e5 && e5[r2++], done: !e5 };
  } };
  throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Qg(e5, t2) {
  var n2 = "function" == typeof Symbol && e5[Symbol.iterator];
  if (!n2) return e5;
  var r2, o2, i2 = n2.call(e5), a2 = [];
  try {
    for (; (void 0 === t2 || t2-- > 0) && !(r2 = i2.next()).done; ) a2.push(r2.value);
  } catch (e6) {
    o2 = { error: e6 };
  } finally {
    try {
      r2 && !r2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return a2;
}
function ev(e5, t2, n2) {
  if (2 === arguments.length) for (var r2, o2 = 0, i2 = t2.length; o2 < i2; o2++) !r2 && o2 in t2 || (r2 || (r2 = Array.prototype.slice.call(t2, 0, o2)), r2[o2] = t2[o2]);
  return e5.concat(r2 || Array.prototype.slice.call(t2));
}
function tv(e5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t2, n2 = e5[Symbol.asyncIterator];
  return n2 ? n2.call(e5) : (e5 = Jg(e5), t2 = {}, r2("next"), r2("throw"), r2("return"), t2[Symbol.asyncIterator] = function() {
    return this;
  }, t2);
  function r2(n3) {
    t2[n3] = e5[n3] && function(t3) {
      return new Promise(function(r3, o2) {
        (function(e6, t4, n4, r4) {
          Promise.resolve(r4).then(function(t5) {
            e6({ value: t5, done: n4 });
          }, t4);
        })(r3, o2, (t3 = e5[n3](t3)).done, t3.value);
      });
    };
  }
}
"function" == typeof SuppressedError && SuppressedError;
var nv, rv = { exports: {} };
var ov, iv, av = (nv || (nv = 1, (function(e5, t2) {
  var n2 = "__lodash_hash_undefined__", r2 = 9007199254740991, o2 = "[object Arguments]", i2 = "[object Boolean]", a2 = "[object Date]", s2 = "[object Function]", u2 = "[object GeneratorFunction]", l2 = "[object Map]", c2 = "[object Number]", d2 = "[object Object]", f2 = "[object Promise]", p2 = "[object RegExp]", h2 = "[object Set]", g2 = "[object String]", v2 = "[object Symbol]", m2 = "[object WeakMap]", b2 = "[object ArrayBuffer]", E2 = "[object DataView]", C2 = "[object Float32Array]", D2 = "[object Float64Array]", w2 = "[object Int8Array]", S2 = "[object Int16Array]", A2 = "[object Int32Array]", x2 = "[object Uint8Array]", O2 = "[object Uint8ClampedArray]", N2 = "[object Uint16Array]", B2 = "[object Uint32Array]", T2 = /\w*$/, k2 = /^\[object .+?Constructor\]$/, F2 = /^(?:0|[1-9]\d*)$/, I2 = {};
  I2[o2] = I2["[object Array]"] = I2[b2] = I2[E2] = I2[i2] = I2[a2] = I2[C2] = I2[D2] = I2[w2] = I2[S2] = I2[A2] = I2[l2] = I2[c2] = I2[d2] = I2[p2] = I2[h2] = I2[g2] = I2[v2] = I2[x2] = I2[O2] = I2[N2] = I2[B2] = true, I2["[object Error]"] = I2[s2] = I2[m2] = false;
  var P2 = "object" == typeof y && y && y.Object === Object && y, _2 = "object" == typeof self && self && self.Object === Object && self, R2 = P2 || _2 || Function("return this")(), L2 = t2 && !t2.nodeType && t2, M2 = L2 && e5 && !e5.nodeType && e5, j2 = M2 && M2.exports === L2;
  function H2(e6, t3) {
    return e6.set(t3[0], t3[1]), e6;
  }
  function z2(e6, t3) {
    return e6.add(t3), e6;
  }
  function $2(e6, t3, n3, r3) {
    for (var o3 = -1, i3 = e6 ? e6.length : 0; ++o3 < i3; ) n3 = t3(n3, e6[o3], o3, e6);
    return n3;
  }
  function U2(e6) {
    var t3 = false;
    if (null != e6 && "function" != typeof e6.toString) try {
      t3 = !!(e6 + "");
    } catch (e7) {
    }
    return t3;
  }
  function V2(e6) {
    var t3 = -1, n3 = Array(e6.size);
    return e6.forEach(function(e7, r3) {
      n3[++t3] = [r3, e7];
    }), n3;
  }
  function W2(e6, t3) {
    return function(n3) {
      return e6(t3(n3));
    };
  }
  function G2(e6) {
    var t3 = -1, n3 = Array(e6.size);
    return e6.forEach(function(e7) {
      n3[++t3] = e7;
    }), n3;
  }
  var q2 = Array.prototype, K2 = Function.prototype, Y2 = Object.prototype, X2 = R2["__core-js_shared__"], Z2 = (function() {
    var e6 = /[^.]+$/.exec(X2 && X2.keys && X2.keys.IE_PROTO || "");
    return e6 ? "Symbol(src)_1." + e6 : "";
  })(), J2 = K2.toString, Q2 = Y2.hasOwnProperty, ee2 = Y2.toString, te2 = RegExp("^" + J2.call(Q2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ne2 = j2 ? R2.Buffer : void 0, re2 = R2.Symbol, oe2 = R2.Uint8Array, ie2 = W2(Object.getPrototypeOf, Object), ae2 = Object.create, se2 = Y2.propertyIsEnumerable, ue2 = q2.splice, le2 = Object.getOwnPropertySymbols, ce2 = ne2 ? ne2.isBuffer : void 0, de2 = W2(Object.keys, Object), fe2 = Le2(R2, "DataView"), pe2 = Le2(R2, "Map"), he2 = Le2(R2, "Promise"), ge2 = Le2(R2, "Set"), ve2 = Le2(R2, "WeakMap"), me2 = Le2(Object, "create"), ye2 = $e2(fe2), be2 = $e2(pe2), Ee2 = $e2(he2), Ce2 = $e2(ge2), De2 = $e2(ve2), we2 = re2 ? re2.prototype : void 0, Se2 = we2 ? we2.valueOf : void 0;
  function Ae2(e6) {
    var t3 = -1, n3 = e6 ? e6.length : 0;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e6[t3];
      this.set(r3[0], r3[1]);
    }
  }
  function xe2(e6) {
    var t3 = -1, n3 = e6 ? e6.length : 0;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e6[t3];
      this.set(r3[0], r3[1]);
    }
  }
  function Oe2(e6) {
    var t3 = -1, n3 = e6 ? e6.length : 0;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e6[t3];
      this.set(r3[0], r3[1]);
    }
  }
  function Ne2(e6) {
    this.__data__ = new xe2(e6);
  }
  function Be2(e6, t3) {
    var n3 = Ve2(e6) || (function(e7) {
      return (function(e8) {
        return /* @__PURE__ */ (function(e9) {
          return !!e9 && "object" == typeof e9;
        })(e8) && We2(e8);
      })(e7) && Q2.call(e7, "callee") && (!se2.call(e7, "callee") || ee2.call(e7) == o2);
    })(e6) ? (function(e7, t4) {
      for (var n4 = -1, r4 = Array(e7); ++n4 < e7; ) r4[n4] = t4(n4);
      return r4;
    })(e6.length, String) : [], r3 = n3.length, i3 = !!r3;
    for (var a3 in e6) !Q2.call(e6, a3) || i3 && ("length" == a3 || He2(a3, r3)) || n3.push(a3);
    return n3;
  }
  function Te2(e6, t3, n3) {
    var r3 = e6[t3];
    Q2.call(e6, t3) && Ue2(r3, n3) && (void 0 !== n3 || t3 in e6) || (e6[t3] = n3);
  }
  function ke2(e6, t3) {
    for (var n3 = e6.length; n3--; ) if (Ue2(e6[n3][0], t3)) return n3;
    return -1;
  }
  function Fe2(e6, t3, n3, r3, f3, m3, y2) {
    var k3;
    if (r3 && (k3 = m3 ? r3(e6, f3, m3, y2) : r3(e6)), void 0 !== k3) return k3;
    if (!Ke2(e6)) return e6;
    var F3 = Ve2(e6);
    if (F3) {
      if (k3 = (function(e7) {
        var t4 = e7.length, n4 = e7.constructor(t4);
        return t4 && "string" == typeof e7[0] && Q2.call(e7, "index") && (n4.index = e7.index, n4.input = e7.input), n4;
      })(e6), !t3) return (function(e7, t4) {
        var n4 = -1, r4 = e7.length;
        for (t4 || (t4 = Array(r4)); ++n4 < r4; ) t4[n4] = e7[n4];
        return t4;
      })(e6, k3);
    } else {
      var P3 = je2(e6), _3 = P3 == s2 || P3 == u2;
      if (Ge2(e6)) return (function(e7, t4) {
        if (t4) return e7.slice();
        var n4 = new e7.constructor(e7.length);
        return e7.copy(n4), n4;
      })(e6, t3);
      if (P3 == d2 || P3 == o2 || _3 && !m3) {
        if (U2(e6)) return m3 ? e6 : {};
        if (k3 = (function(e7) {
          return "function" != typeof e7.constructor || ze2(e7) ? {} : Ke2(t4 = ie2(e7)) ? ae2(t4) : {};
          var t4;
        })(_3 ? {} : e6), !t3) return (function(e7, t4) {
          return _e2(e7, Me2(e7), t4);
        })(e6, (function(e7, t4) {
          return e7 && _e2(t4, Ye2(t4), e7);
        })(k3, e6));
      } else {
        if (!I2[P3]) return m3 ? e6 : {};
        k3 = (function(e7, t4, n4, r4) {
          var o3 = e7.constructor;
          switch (t4) {
            case b2:
              return Pe2(e7);
            case i2:
            case a2:
              return new o3(+e7);
            case E2:
              return (function(e8, t5) {
                var n5 = t5 ? Pe2(e8.buffer) : e8.buffer;
                return new e8.constructor(n5, e8.byteOffset, e8.byteLength);
              })(e7, r4);
            case C2:
            case D2:
            case w2:
            case S2:
            case A2:
            case x2:
            case O2:
            case N2:
            case B2:
              return (function(e8, t5) {
                var n5 = t5 ? Pe2(e8.buffer) : e8.buffer;
                return new e8.constructor(n5, e8.byteOffset, e8.length);
              })(e7, r4);
            case l2:
              return (function(e8, t5, n5) {
                var r5 = t5 ? n5(V2(e8), true) : V2(e8);
                return $2(r5, H2, new e8.constructor());
              })(e7, r4, n4);
            case c2:
            case g2:
              return new o3(e7);
            case p2:
              return (function(e8) {
                var t5 = new e8.constructor(e8.source, T2.exec(e8));
                return t5.lastIndex = e8.lastIndex, t5;
              })(e7);
            case h2:
              return (function(e8, t5, n5) {
                var r5 = t5 ? n5(G2(e8), true) : G2(e8);
                return $2(r5, z2, new e8.constructor());
              })(e7, r4, n4);
            case v2:
              return (function(e8) {
                return Se2 ? Object(Se2.call(e8)) : {};
              })(e7);
          }
        })(e6, P3, Fe2, t3);
      }
    }
    y2 || (y2 = new Ne2());
    var R3 = y2.get(e6);
    if (R3) return R3;
    if (y2.set(e6, k3), !F3) var L3 = n3 ? (function(e7) {
      return (function(e8, t4, n4) {
        var r4 = t4(e8);
        return Ve2(e8) ? r4 : (function(e9, t5) {
          for (var n5 = -1, r5 = t5.length, o3 = e9.length; ++n5 < r5; ) e9[o3 + n5] = t5[n5];
          return e9;
        })(r4, n4(e8));
      })(e7, Ye2, Me2);
    })(e6) : Ye2(e6);
    return (function(e7, t4) {
      for (var n4 = -1, r4 = e7 ? e7.length : 0; ++n4 < r4 && false !== t4(e7[n4], n4, e7); ) ;
    })(L3 || e6, function(o3, i3) {
      L3 && (o3 = e6[i3 = o3]), Te2(k3, i3, Fe2(o3, t3, n3, r3, i3, e6, y2));
    }), k3;
  }
  function Ie2(e6) {
    return !(!Ke2(e6) || (t3 = e6, Z2 && Z2 in t3)) && (qe2(e6) || U2(e6) ? te2 : k2).test($e2(e6));
    var t3;
  }
  function Pe2(e6) {
    var t3 = new e6.constructor(e6.byteLength);
    return new oe2(t3).set(new oe2(e6)), t3;
  }
  function _e2(e6, t3, n3, r3) {
    n3 || (n3 = {});
    for (var o3 = -1, i3 = t3.length; ++o3 < i3; ) {
      var a3 = t3[o3];
      Te2(n3, a3, e6[a3]);
    }
    return n3;
  }
  function Re2(e6, t3) {
    var n3, r3, o3 = e6.__data__;
    return ("string" == (r3 = typeof (n3 = t3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? o3["string" == typeof t3 ? "string" : "hash"] : o3.map;
  }
  function Le2(e6, t3) {
    var n3 = (function(e7, t4) {
      return null == e7 ? void 0 : e7[t4];
    })(e6, t3);
    return Ie2(n3) ? n3 : void 0;
  }
  Ae2.prototype.clear = function() {
    this.__data__ = me2 ? me2(null) : {};
  }, Ae2.prototype.delete = function(e6) {
    return this.has(e6) && delete this.__data__[e6];
  }, Ae2.prototype.get = function(e6) {
    var t3 = this.__data__;
    if (me2) {
      var r3 = t3[e6];
      return r3 === n2 ? void 0 : r3;
    }
    return Q2.call(t3, e6) ? t3[e6] : void 0;
  }, Ae2.prototype.has = function(e6) {
    var t3 = this.__data__;
    return me2 ? void 0 !== t3[e6] : Q2.call(t3, e6);
  }, Ae2.prototype.set = function(e6, t3) {
    return this.__data__[e6] = me2 && void 0 === t3 ? n2 : t3, this;
  }, xe2.prototype.clear = function() {
    this.__data__ = [];
  }, xe2.prototype.delete = function(e6) {
    var t3 = this.__data__, n3 = ke2(t3, e6);
    return !(n3 < 0 || (n3 == t3.length - 1 ? t3.pop() : ue2.call(t3, n3, 1), 0));
  }, xe2.prototype.get = function(e6) {
    var t3 = this.__data__, n3 = ke2(t3, e6);
    return n3 < 0 ? void 0 : t3[n3][1];
  }, xe2.prototype.has = function(e6) {
    return ke2(this.__data__, e6) > -1;
  }, xe2.prototype.set = function(e6, t3) {
    var n3 = this.__data__, r3 = ke2(n3, e6);
    return r3 < 0 ? n3.push([e6, t3]) : n3[r3][1] = t3, this;
  }, Oe2.prototype.clear = function() {
    this.__data__ = { hash: new Ae2(), map: new (pe2 || xe2)(), string: new Ae2() };
  }, Oe2.prototype.delete = function(e6) {
    return Re2(this, e6).delete(e6);
  }, Oe2.prototype.get = function(e6) {
    return Re2(this, e6).get(e6);
  }, Oe2.prototype.has = function(e6) {
    return Re2(this, e6).has(e6);
  }, Oe2.prototype.set = function(e6, t3) {
    return Re2(this, e6).set(e6, t3), this;
  }, Ne2.prototype.clear = function() {
    this.__data__ = new xe2();
  }, Ne2.prototype.delete = function(e6) {
    return this.__data__.delete(e6);
  }, Ne2.prototype.get = function(e6) {
    return this.__data__.get(e6);
  }, Ne2.prototype.has = function(e6) {
    return this.__data__.has(e6);
  }, Ne2.prototype.set = function(e6, t3) {
    var n3 = this.__data__;
    if (n3 instanceof xe2) {
      var r3 = n3.__data__;
      if (!pe2 || r3.length < 199) return r3.push([e6, t3]), this;
      n3 = this.__data__ = new Oe2(r3);
    }
    return n3.set(e6, t3), this;
  };
  var Me2 = le2 ? W2(le2, Object) : function() {
    return [];
  }, je2 = function(e6) {
    return ee2.call(e6);
  };
  function He2(e6, t3) {
    return !!(t3 = null == t3 ? r2 : t3) && ("number" == typeof e6 || F2.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t3;
  }
  function ze2(e6) {
    var t3 = e6 && e6.constructor;
    return e6 === ("function" == typeof t3 && t3.prototype || Y2);
  }
  function $e2(e6) {
    if (null != e6) {
      try {
        return J2.call(e6);
      } catch (e7) {
      }
      try {
        return e6 + "";
      } catch (e7) {
      }
    }
    return "";
  }
  function Ue2(e6, t3) {
    return e6 === t3 || e6 != e6 && t3 != t3;
  }
  (fe2 && je2(new fe2(new ArrayBuffer(1))) != E2 || pe2 && je2(new pe2()) != l2 || he2 && je2(he2.resolve()) != f2 || ge2 && je2(new ge2()) != h2 || ve2 && je2(new ve2()) != m2) && (je2 = function(e6) {
    var t3 = ee2.call(e6), n3 = t3 == d2 ? e6.constructor : void 0, r3 = n3 ? $e2(n3) : void 0;
    if (r3) switch (r3) {
      case ye2:
        return E2;
      case be2:
        return l2;
      case Ee2:
        return f2;
      case Ce2:
        return h2;
      case De2:
        return m2;
    }
    return t3;
  });
  var Ve2 = Array.isArray;
  function We2(e6) {
    return null != e6 && (function(e7) {
      return "number" == typeof e7 && e7 > -1 && e7 % 1 == 0 && e7 <= r2;
    })(e6.length) && !qe2(e6);
  }
  var Ge2 = ce2 || function() {
    return false;
  };
  function qe2(e6) {
    var t3 = Ke2(e6) ? ee2.call(e6) : "";
    return t3 == s2 || t3 == u2;
  }
  function Ke2(e6) {
    var t3 = typeof e6;
    return !!e6 && ("object" == t3 || "function" == t3);
  }
  function Ye2(e6) {
    return We2(e6) ? Be2(e6) : (function(e7) {
      if (!ze2(e7)) return de2(e7);
      var t3 = [];
      for (var n3 in Object(e7)) Q2.call(e7, n3) && "constructor" != n3 && t3.push(n3);
      return t3;
    })(e6);
  }
  e5.exports = function(e6) {
    return Fe2(e6, true, true);
  };
})(rv, rv.exports)), rv.exports), sv = b(av);
var uv = (function() {
  if (iv) return ov;
  iv = 1;
  var e5 = 9007199254740991, t2 = "[object Arguments]", n2 = "[object Function]", r2 = "[object GeneratorFunction]", o2 = /^(?:0|[1-9]\d*)$/;
  function i2(e6, t3) {
    for (var n3 = -1, r3 = e6 ? e6.length : 0; ++n3 < r3 && false !== t3(e6[n3], n3, e6); ) ;
    return e6;
  }
  var a2, s2, u2 = Object.prototype, l2 = u2.hasOwnProperty, c2 = u2.toString, d2 = u2.propertyIsEnumerable, f2 = (a2 = Object.keys, s2 = Object, function(e6) {
    return a2(s2(e6));
  });
  function p2(e6, n3) {
    var r3 = b2(e6) || (function(e7) {
      return (function(e8) {
        return /* @__PURE__ */ (function(e9) {
          return !!e9 && "object" == typeof e9;
        })(e8) && E2(e8);
      })(e7) && l2.call(e7, "callee") && (!d2.call(e7, "callee") || c2.call(e7) == t2);
    })(e6) ? (function(e7, t3) {
      for (var n4 = -1, r4 = Array(e7); ++n4 < e7; ) r4[n4] = t3(n4);
      return r4;
    })(e6.length, String) : [], o3 = r3.length, i3 = !!o3;
    for (var a3 in e6) !l2.call(e6, a3) || i3 && ("length" == a3 || y2(a3, o3)) || r3.push(a3);
    return r3;
  }
  var h2, g2 = (h2 = function(e6, t3) {
    return e6 && v2(e6, t3, C2);
  }, function(e6, t3) {
    if (null == e6) return e6;
    if (!E2(e6)) return h2(e6, t3);
    for (var n3 = e6.length, r3 = -1, o3 = Object(e6); ++r3 < n3 && false !== t3(o3[r3], r3, o3); ) ;
    return e6;
  }), v2 = function(e6, t3, n3) {
    for (var r3 = -1, o3 = Object(e6), i3 = n3(e6), a3 = i3.length; a3--; ) {
      var s3 = i3[++r3];
      if (false === t3(o3[s3], s3, o3)) break;
    }
    return e6;
  };
  function m2(e6) {
    if (n3 = (t3 = e6) && t3.constructor, r3 = "function" == typeof n3 && n3.prototype || u2, t3 !== r3) return f2(e6);
    var t3, n3, r3, o3 = [];
    for (var i3 in Object(e6)) l2.call(e6, i3) && "constructor" != i3 && o3.push(i3);
    return o3;
  }
  function y2(t3, n3) {
    return !!(n3 = null == n3 ? e5 : n3) && ("number" == typeof t3 || o2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < n3;
  }
  var b2 = Array.isArray;
  function E2(t3) {
    return null != t3 && (function(t4) {
      return "number" == typeof t4 && t4 > -1 && t4 % 1 == 0 && t4 <= e5;
    })(t3.length) && !(function(e6) {
      var t4 = (function(e7) {
        var t5 = typeof e7;
        return !!e7 && ("object" == t5 || "function" == t5);
      })(e6) ? c2.call(e6) : "";
      return t4 == n2 || t4 == r2;
    })(t3);
  }
  function C2(e6) {
    return E2(e6) ? p2(e6) : m2(e6);
  }
  function D2(e6) {
    return e6;
  }
  return ov = function(e6, t3) {
    return (b2(e6) ? i2 : g2)(e6, "function" == typeof t3 ? t3 : D2);
  };
})(), lv = b(uv), cv = {};
var dv = "created", fv = "destroyed", pv = "change", hv = "scroll", gv = "fullscreen", vv = "unFullScreen", mv = "modalOrPanelShow", yv = "modalOrPanelHide", bv = {};
function Ev(e5, t2) {
  var n2 = e5.key, r2 = e5.factory, o2 = e5.config, i2 = Yg(Yg({}, o2), t2 || {});
  if (null != bv[n2]) throw new Error("Duplicated key '".concat(n2, "' in menu items"));
  bv[n2] = r2, (function(e6, t3) {
    null != t3 && (cv[e6] = t3);
  })(n2, i2);
}
var Cv = /* @__PURE__ */ new WeakMap(), Dv = /* @__PURE__ */ new WeakMap(), wv = /* @__PURE__ */ new WeakMap(), Sv = /* @__PURE__ */ new WeakMap(), Av = /* @__PURE__ */ new WeakMap(), xv = /* @__PURE__ */ new WeakMap(), Ov = /* @__PURE__ */ new WeakMap(), Nv = /* @__PURE__ */ new WeakMap(), Bv = /* @__PURE__ */ new WeakMap(), Tv = /* @__PURE__ */ new WeakMap(), kv = /* @__PURE__ */ new WeakMap(), Fv = /* @__PURE__ */ new WeakMap(), Iv = /* @__PURE__ */ new WeakMap(), Pv = /* @__PURE__ */ new WeakMap(), _v = /* @__PURE__ */ new WeakMap(), Rv = /* @__PURE__ */ new WeakMap(), Lv = /* @__PURE__ */ new WeakMap(), Mv = /* @__PURE__ */ new WeakMap(), jv = /* @__PURE__ */ new WeakMap(), Hv = /* @__PURE__ */ new WeakMap(), zv = /* @__PURE__ */ new WeakMap(), $v = /* @__PURE__ */ new WeakMap(), Uv = /* @__PURE__ */ new WeakMap(), Vv = /* @__PURE__ */ new WeakMap(), Wv = /* @__PURE__ */ new WeakMap(), Gv = /* @__PURE__ */ new WeakMap(), qv = /* @__PURE__ */ new WeakMap(), Kv = function(e5) {
  var t2 = e5;
  return t2.getAllMenuKeys = function() {
    var e6 = [];
    for (var t3 in bv) e6.push(t3);
    return e6;
  }, t2.getConfig = function() {
    var e6 = Tv.get(t2);
    if (null == e6) throw new Error("Can not get editor config");
    return e6;
  }, t2.getMenuConfig = function(e6) {
    var n2 = t2.getConfig().MENU_CONF;
    return (void 0 === n2 ? {} : n2)[e6] || {};
  }, t2.alert = function(e6, n2) {
    void 0 === n2 && (n2 = "info");
    var r2 = t2.getConfig().customAlert;
    r2 && r2(e6, n2);
  }, t2;
}, Yv = /* @__PURE__ */ new Set(["doctype", "!doctype", "meta", "script", "style", "link", "frame", "iframe", "title", "svg"]);
function Xv(e5) {
  return null !== e5 && "object" == typeof e5 && "constructor" in e5 && e5.constructor === Object;
}
function Zv(e5 = {}, t2 = {}) {
  Object.keys(t2).forEach((n2) => {
    void 0 === e5[n2] ? e5[n2] = t2[n2] : Xv(t2[n2]) && Xv(e5[n2]) && Object.keys(t2[n2]).length > 0 && Zv(e5[n2], t2[n2]);
  });
}
const Jv = { body: {}, addEventListener() {
}, removeEventListener() {
}, activeElement: { blur() {
}, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
} }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
}, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
function Qv() {
  const e5 = "undefined" != typeof document ? document : {};
  return Zv(e5, Jv), e5;
}
const em = { document: Jv, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
}, pushState() {
}, go() {
}, back() {
} }, CustomEvent: function() {
  return this;
}, addEventListener() {
}, removeEventListener() {
}, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
}, Date() {
}, screen: {}, setTimeout() {
}, clearTimeout() {
}, matchMedia: () => ({}), requestAnimationFrame: (e5) => "undefined" == typeof setTimeout ? (e5(), null) : setTimeout(e5, 0), cancelAnimationFrame(e5) {
  "undefined" != typeof setTimeout && clearTimeout(e5);
} };
function tm() {
  const e5 = "undefined" != typeof window ? window : {};
  return Zv(e5, em), e5;
}
class nm extends Array {
  constructor(e5) {
    "number" == typeof e5 ? super(e5) : (super(...e5 || []), (function(e6) {
      const t2 = e6.__proto__;
      Object.defineProperty(e6, "__proto__", { get: () => t2, set(e7) {
        t2.__proto__ = e7;
      } });
    })(this));
  }
}
function rm(e5 = []) {
  const t2 = [];
  return e5.forEach((e6) => {
    Array.isArray(e6) ? t2.push(...rm(e6)) : t2.push(e6);
  }), t2;
}
function om(e5, t2) {
  return Array.prototype.filter.call(e5, t2);
}
function im(e5) {
  return e5.toLowerCase().replace(/-(.)/g, (e6, t2) => t2.toUpperCase());
}
function am(e5, t2) {
  const n2 = tm(), r2 = Qv();
  let o2 = [];
  if (!t2 && e5 instanceof nm) return e5;
  if (!e5) return new nm(o2);
  if ("string" == typeof e5) {
    const n3 = e5.trim();
    if (n3.indexOf("<") >= 0 && n3.indexOf(">") >= 0) {
      let e6 = "div";
      0 === n3.indexOf("<li") && (e6 = "ul"), 0 === n3.indexOf("<tr") && (e6 = "tbody"), 0 !== n3.indexOf("<td") && 0 !== n3.indexOf("<th") || (e6 = "tr"), 0 === n3.indexOf("<tbody") && (e6 = "table"), 0 === n3.indexOf("<option") && (e6 = "select");
      const t3 = r2.createElement(e6);
      t3.innerHTML = n3;
      for (let e7 = 0; e7 < t3.childNodes.length; e7 += 1) o2.push(t3.childNodes[e7]);
    } else o2 = (function(e6, t3) {
      if ("string" != typeof e6) return [e6];
      const n4 = [], r3 = t3.querySelectorAll(e6);
      for (let e7 = 0; e7 < r3.length; e7 += 1) n4.push(r3[e7]);
      return n4;
    })(e5.trim(), t2 || r2);
  } else if (e5.nodeType || e5 === n2 || e5 === r2) o2.push(e5);
  else if (Array.isArray(e5)) {
    if (e5 instanceof nm) return e5;
    o2 = e5;
  }
  return new nm((function(e6) {
    const t3 = [];
    for (let n3 = 0; n3 < e6.length; n3 += 1) -1 === t3.indexOf(e6[n3]) && t3.push(e6[n3]);
    return t3;
  })(o2));
}
function sm(...e5) {
  const t2 = rm(e5.map((e6) => e6.split(" ")));
  return this.forEach((e6) => {
    e6.classList.add(...t2);
  }), this;
}
function um(...e5) {
  const t2 = rm(e5.map((e6) => e6.split(" ")));
  return this.forEach((e6) => {
    e6.classList.remove(...t2);
  }), this;
}
function lm(...e5) {
  const t2 = rm(e5.map((e6) => e6.split(" ")));
  return om(this, (e6) => t2.filter((t3) => e6.classList.contains(t3)).length > 0).length > 0;
}
function cm(e5, t2) {
  if (1 === arguments.length && "string" == typeof e5) return this[0] ? this[0].getAttribute(e5) : void 0;
  for (let n2 = 0; n2 < this.length; n2 += 1) if (2 === arguments.length) this[n2].setAttribute(e5, t2);
  else for (const t3 in e5) this[n2][t3] = e5[t3], this[n2].setAttribute(t3, e5[t3]);
  return this;
}
function dm(e5) {
  for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].removeAttribute(e5);
  return this;
}
function fm(e5, t2) {
  let n2;
  if (void 0 === t2) {
    if (n2 = this[0], !n2) return;
    if (n2.dom7ElementDataStorage && e5 in n2.dom7ElementDataStorage) return n2.dom7ElementDataStorage[e5];
    const t3 = n2.getAttribute(`data-${e5}`);
    return t3 || void 0;
  }
  for (let r2 = 0; r2 < this.length; r2 += 1) n2 = this[r2], n2.dom7ElementDataStorage || (n2.dom7ElementDataStorage = {}), n2.dom7ElementDataStorage[e5] = t2;
  return this;
}
function pm() {
  const e5 = this[0];
  if (!e5) return;
  const t2 = {};
  if (e5.dataset) for (const n2 in e5.dataset) t2[n2] = e5.dataset[n2];
  else for (let n2 = 0; n2 < e5.attributes.length; n2 += 1) {
    const r2 = e5.attributes[n2];
    r2.name.indexOf("data-") >= 0 && (t2[im(r2.name.split("data-")[1])] = r2.value);
  }
  for (const e6 in t2) "false" === t2[e6] ? t2[e6] = false : "true" === t2[e6] ? t2[e6] = true : parseFloat(t2[e6]) === 1 * t2[e6] && (t2[e6] *= 1);
  return t2;
}
function hm(e5) {
  if (void 0 === e5) {
    const e6 = this[0];
    if (!e6) return;
    if (e6.multiple && "select" === e6.nodeName.toLowerCase()) {
      const t2 = [];
      for (let n2 = 0; n2 < e6.selectedOptions.length; n2 += 1) t2.push(e6.selectedOptions[n2].value);
      return t2;
    }
    return e6.value;
  }
  for (let t2 = 0; t2 < this.length; t2 += 1) {
    const n2 = this[t2];
    if (Array.isArray(e5) && n2.multiple && "select" === n2.nodeName.toLowerCase()) for (let t3 = 0; t3 < n2.options.length; t3 += 1) n2.options[t3].selected = e5.indexOf(n2.options[t3].value) >= 0;
    else n2.value = e5;
  }
  return this;
}
function gm(...e5) {
  let [t2, n2, r2, o2] = e5;
  function i2(e6) {
    const t3 = e6.target;
    if (!t3) return;
    const o3 = e6.target.dom7EventData || [];
    if (o3.indexOf(e6) < 0 && o3.unshift(e6), am(t3).is(n2)) r2.apply(t3, o3);
    else {
      const e7 = am(t3).parents();
      for (let t4 = 0; t4 < e7.length; t4 += 1) am(e7[t4]).is(n2) && r2.apply(e7[t4], o3);
    }
  }
  function a2(e6) {
    const t3 = e6 && e6.target && e6.target.dom7EventData || [];
    t3.indexOf(e6) < 0 && t3.unshift(e6), r2.apply(this, t3);
  }
  "function" == typeof e5[1] && ([t2, r2, o2] = e5, n2 = void 0), o2 || (o2 = false);
  const s2 = t2.split(" ");
  let u2;
  for (let e6 = 0; e6 < this.length; e6 += 1) {
    const t3 = this[e6];
    if (n2) for (u2 = 0; u2 < s2.length; u2 += 1) {
      const e7 = s2[u2];
      t3.dom7LiveListeners || (t3.dom7LiveListeners = {}), t3.dom7LiveListeners[e7] || (t3.dom7LiveListeners[e7] = []), t3.dom7LiveListeners[e7].push({ listener: r2, proxyListener: i2 }), t3.addEventListener(e7, i2, o2);
    }
    else for (u2 = 0; u2 < s2.length; u2 += 1) {
      const e7 = s2[u2];
      t3.dom7Listeners || (t3.dom7Listeners = {}), t3.dom7Listeners[e7] || (t3.dom7Listeners[e7] = []), t3.dom7Listeners[e7].push({ listener: r2, proxyListener: a2 }), t3.addEventListener(e7, a2, o2);
    }
  }
  return this;
}
function vm(...e5) {
  let [t2, n2, r2, o2] = e5;
  "function" == typeof e5[1] && ([t2, r2, o2] = e5, n2 = void 0), o2 || (o2 = false);
  const i2 = t2.split(" ");
  for (let e6 = 0; e6 < i2.length; e6 += 1) {
    const t3 = i2[e6];
    for (let e7 = 0; e7 < this.length; e7 += 1) {
      const i3 = this[e7];
      let a2;
      if (!n2 && i3.dom7Listeners ? a2 = i3.dom7Listeners[t3] : n2 && i3.dom7LiveListeners && (a2 = i3.dom7LiveListeners[t3]), a2 && a2.length) for (let e8 = a2.length - 1; e8 >= 0; e8 -= 1) {
        const n3 = a2[e8];
        r2 && n3.listener === r2 || r2 && n3.listener && n3.listener.dom7proxy && n3.listener.dom7proxy === r2 ? (i3.removeEventListener(t3, n3.proxyListener, o2), a2.splice(e8, 1)) : r2 || (i3.removeEventListener(t3, n3.proxyListener, o2), a2.splice(e8, 1));
      }
    }
  }
  return this;
}
function mm() {
  const e5 = tm();
  return this[0] === e5 ? e5.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
}
function ym() {
  const e5 = tm();
  return this[0] === e5 ? e5.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
}
function bm() {
  if (this.length > 0) {
    const e5 = tm(), t2 = Qv(), n2 = this[0], r2 = n2.getBoundingClientRect(), o2 = t2.body, i2 = n2.clientTop || o2.clientTop || 0, a2 = n2.clientLeft || o2.clientLeft || 0, s2 = n2 === e5 ? e5.scrollY : n2.scrollTop, u2 = n2 === e5 ? e5.scrollX : n2.scrollLeft;
    return { top: r2.top + s2 - i2, left: r2.left + u2 - a2 };
  }
  return null;
}
function Em() {
  for (let e5 = 0; e5 < this.length; e5 += 1) this[e5].style.display = "none";
  return this;
}
function Cm() {
  const e5 = tm();
  for (let t2 = 0; t2 < this.length; t2 += 1) {
    const n2 = this[t2];
    "none" === n2.style.display && (n2.style.display = ""), "none" === e5.getComputedStyle(n2, null).getPropertyValue("display") && (n2.style.display = "block");
  }
  return this;
}
function Dm(e5, t2) {
  const n2 = tm();
  let r2;
  if (1 === arguments.length) {
    if ("string" != typeof e5) {
      for (r2 = 0; r2 < this.length; r2 += 1) for (const t3 in e5) this[r2].style[t3] = e5[t3];
      return this;
    }
    if (this[0]) return n2.getComputedStyle(this[0], null).getPropertyValue(e5);
  }
  if (2 === arguments.length && "string" == typeof e5) {
    for (r2 = 0; r2 < this.length; r2 += 1) this[r2].style[e5] = t2;
    return this;
  }
  return this;
}
function wm(e5) {
  return e5 ? (this.forEach((t2, n2) => {
    e5.apply(t2, [t2, n2]);
  }), this) : this;
}
function Sm(e5) {
  return am(om(this, e5));
}
function Am(e5) {
  if (void 0 === e5) return this[0] ? this[0].innerHTML : null;
  for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].innerHTML = e5;
  return this;
}
function xm(e5) {
  if (void 0 === e5) return this[0] ? this[0].textContent.trim() : null;
  for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].textContent = e5;
  return this;
}
function Om(e5) {
  const t2 = tm(), n2 = Qv(), r2 = this[0];
  let o2, i2;
  if (!r2 || void 0 === e5) return false;
  if ("string" == typeof e5) {
    if (r2.matches) return r2.matches(e5);
    if (r2.webkitMatchesSelector) return r2.webkitMatchesSelector(e5);
    if (r2.msMatchesSelector) return r2.msMatchesSelector(e5);
    for (o2 = am(e5), i2 = 0; i2 < o2.length; i2 += 1) if (o2[i2] === r2) return true;
    return false;
  }
  if (e5 === n2) return r2 === n2;
  if (e5 === t2) return r2 === t2;
  if (e5.nodeType || e5 instanceof nm) {
    for (o2 = e5.nodeType ? [e5] : e5, i2 = 0; i2 < o2.length; i2 += 1) if (o2[i2] === r2) return true;
    return false;
  }
  return false;
}
function Nm(...e5) {
  let t2;
  const n2 = Qv();
  for (let r2 = 0; r2 < e5.length; r2 += 1) {
    t2 = e5[r2];
    for (let e6 = 0; e6 < this.length; e6 += 1) if ("string" == typeof t2) {
      const r3 = n2.createElement("div");
      for (r3.innerHTML = t2; r3.firstChild; ) this[e6].appendChild(r3.firstChild);
    } else if (t2 instanceof nm) for (let n3 = 0; n3 < t2.length; n3 += 1) this[e6].appendChild(t2[n3]);
    else this[e6].appendChild(t2);
  }
  return this;
}
function Bm(e5) {
  const t2 = Qv();
  let n2, r2;
  for (n2 = 0; n2 < this.length; n2 += 1) if ("string" == typeof e5) {
    const o2 = t2.createElement("div");
    for (o2.innerHTML = e5, r2 = o2.childNodes.length - 1; r2 >= 0; r2 -= 1) this[n2].insertBefore(o2.childNodes[r2], this[n2].childNodes[0]);
  } else if (e5 instanceof nm) for (r2 = 0; r2 < e5.length; r2 += 1) this[n2].insertBefore(e5[r2], this[n2].childNodes[0]);
  else this[n2].insertBefore(e5, this[n2].childNodes[0]);
  return this;
}
function Tm(e5) {
  const t2 = [];
  for (let n2 = 0; n2 < this.length; n2 += 1) null !== this[n2].parentNode && (e5 ? am(this[n2].parentNode).is(e5) && t2.push(this[n2].parentNode) : t2.push(this[n2].parentNode));
  return am(t2);
}
function km(e5) {
  const t2 = [];
  for (let n2 = 0; n2 < this.length; n2 += 1) {
    let r2 = this[n2].parentNode;
    for (; r2; ) e5 ? am(r2).is(e5) && t2.push(r2) : t2.push(r2), r2 = r2.parentNode;
  }
  return am(t2);
}
function Fm(e5) {
  const t2 = [];
  for (let n2 = 0; n2 < this.length; n2 += 1) {
    const r2 = this[n2].querySelectorAll(e5);
    for (let e6 = 0; e6 < r2.length; e6 += 1) t2.push(r2[e6]);
  }
  return am(t2);
}
function Im(e5) {
  const t2 = [];
  for (let n2 = 0; n2 < this.length; n2 += 1) {
    const r2 = this[n2].children;
    for (let n3 = 0; n3 < r2.length; n3 += 1) e5 && !am(r2[n3]).is(e5) || t2.push(r2[n3]);
  }
  return am(t2);
}
function Pm() {
  for (let e5 = 0; e5 < this.length; e5 += 1) this[e5].parentNode && this[e5].parentNode.removeChild(this[e5]);
  return this;
}
function _m() {
  for (let e5 = 0; e5 < this.length; e5 += 1) {
    const t2 = this[e5];
    if (1 === t2.nodeType) {
      for (let e6 = 0; e6 < t2.childNodes.length; e6 += 1) t2.childNodes[e6].parentNode && t2.childNodes[e6].parentNode.removeChild(t2.childNodes[e6]);
      t2.textContent = "";
    }
  }
  return this;
}
am.fn = nm.prototype;
const Rm = "resize scroll".split(" ");
function Lm(e5) {
  return function(...t2) {
    if (void 0 === t2[0]) {
      for (let t3 = 0; t3 < this.length; t3 += 1) Rm.indexOf(e5) < 0 && (e5 in this[t3] ? this[t3][e5]() : am(this[t3]).trigger(e5));
      return this;
    }
    return this.on(e5, ...t2);
  };
}
const Mm = Lm("click"), jm = Lm("focus"), Hm = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
let zm = (e5 = 21) => {
  let t2 = "", n2 = crypto.getRandomValues(new Uint8Array(e5 |= 0));
  for (; e5--; ) t2 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63 & n2[e5]];
  return t2;
};
function $m(e5) {
  Promise.resolve().then(e5);
}
var Um, Vm = function(e5) {
  return Object.prototype.toString.call(e5);
};
Dm && (am.fn.css = Dm), Nm && (am.fn.append = Nm), sm && (am.fn.addClass = sm), um && (am.fn.removeClass = um), lm && (am.fn.hasClass = lm), gm && (am.fn.on = gm), jm && (am.fn.focus = jm), cm && (am.fn.attr = cm), dm && (am.fn.removeAttr = dm), Em && (am.fn.hide = Em), Cm && (am.fn.show = Cm), bm && (am.fn.offset = bm), mm && (am.fn.width = mm), ym && (am.fn.height = ym), Tm && (am.fn.parent = Tm), km && (am.fn.parents = km), Om && (am.fn.is = Om), pm && (am.fn.dataset = pm), hm && (am.fn.val = hm), xm && (am.fn.text = xm), Am && (am.fn.html = Am), Im && (am.fn.children = Im), Pm && (am.fn.remove = Pm), Fm && (am.fn.find = Fm), wm && (am.fn.each = wm), _m && (am.fn.empty = _m), (function(e5) {
  e5[e5.ELEMENT_NODE = 1] = "ELEMENT_NODE", e5[e5.TEXT_NODE = 3] = "TEXT_NODE", e5[e5.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", e5[e5.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", e5[e5.COMMENT_NODE = 8] = "COMMENT_NODE", e5[e5.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", e5[e5.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", e5[e5.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE";
})(Um || (Um = {}));
var Wm = /\[object HTML([A-Z][a-z]*)*Element\]/, Gm = function(e5) {
  return Wm.test(Vm(e5));
}, qm = function(e5) {
  return null != e5 && "number" == typeof e5.nodeType;
}, Km = function(e5) {
  return qm(e5) && e5.nodeType === Um.COMMENT_NODE;
}, Ym = function(e5) {
  return qm(e5) && e5.nodeType === Um.ELEMENT_NODE;
}, Xm = function(e5) {
  return "[object Selection]" === Vm(e5);
}, Zm = function(e5) {
  return qm(e5) && e5.nodeType === Um.TEXT_NODE;
}, Jm = function(e5) {
  var t2, n2, r2;
  return null !== (t2 = window && window.document.getElementById(e5)) && void 0 !== t2 ? t2 : window && (null === (r2 = null === (n2 = window.document.activeElement) || void 0 === n2 ? void 0 : n2.shadowRoot) || void 0 === r2 ? void 0 : r2.getElementById(e5)) || null;
}, Qm = function(e5, t2, n2) {
  for (var r2 = e5.childNodes, o2 = r2[t2], i2 = t2, a2 = false, s2 = false; (Km(o2) || Ym(o2) && 0 === o2.childNodes.length || Ym(o2) && "false" === o2.getAttribute("contenteditable")) && (!a2 || !s2); ) i2 >= r2.length ? (a2 = true, i2 = t2 - 1, n2 = "backward") : i2 < 0 ? (s2 = true, i2 = t2 + 1, n2 = "forward") : (o2 = r2[i2], t2 = i2, i2 += "forward" === n2 ? 1 : -1);
  return [o2, t2];
}, ey = function(e5, t2, n2) {
  return Qg(Qm(e5, t2, n2), 1)[0];
}, ty = function(e5) {
  var t2, n2, r2 = "";
  if (Zm(e5) && e5.nodeValue) return e5.nodeValue;
  if (Ym(e5)) {
    try {
      for (var o2 = Jg(Array.from(e5.childNodes)), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        r2 += ty(a2);
      }
    } catch (e6) {
      t2 = { error: e6 };
    } finally {
      try {
        i2 && !i2.done && (n2 = o2.return) && n2.call(o2);
      } finally {
        if (t2) throw t2.error;
      }
    }
    var s2 = getComputedStyle(e5).getPropertyValue("display");
    "block" !== s2 && "list" !== s2 && "table-row" !== s2 && "BR" !== e5.tagName || (r2 += "\n");
  }
  return r2;
};
function ny(e5, t2) {
  if (!Gm(e5) || "true" !== e5.dataset.slateVoid) for (var n2 = e5.childNodes, r2 = n2.length; r2 -= 1; ) {
    var o2 = n2[r2], i2 = o2.nodeType;
    Zm(o2) ? t2(o2, e5) : [Um.ELEMENT_NODE, Um.DOCUMENT_NODE, Um.DOCUMENT_FRAGMENT_NODE].includes(i2) && ny(o2, t2);
  }
}
function ry(e5) {
  if (0 === e5.length) return "";
  var t2 = e5[0];
  return t2.nodeType !== Um.ELEMENT_NODE ? "" : t2.tagName.toLowerCase();
}
var oy = new RegExp(String.fromCharCode(160), "g");
function iy(e5) {
  return e5.replace(oy, " ");
}
var ay = ["span", "b", "strong", "i", "em", "s", "strike", "u", "font", "sub", "sup"], sy = [];
var uy = [];
var ly = {};
function cy(e5, t2) {
  var n2 = e5.length;
  if (n2) {
    var r2 = e5[n2 - 1];
    if (Cg.isText(r2)) {
      var o2 = Object.keys(r2);
      if (1 === o2.length && "text" === o2[0]) return r2.text += t2, true;
    }
  }
  return false;
}
function dy(e5, t2, n2) {
  return { type: "paragraph", children: [{ text: am(e5).text().replace(/\s+/gm, " ") }] };
}
function fy(e5, t2) {
  var n2 = (function(e6, t3) {
    var n3 = [];
    if (null != e6.attr("data-w-e-is-void")) return n3;
    var r3 = e6[0].childNodes;
    return 1 === r3.length && "BR" === r3[0].nodeName ? (n3.push({ text: "" }), n3) : (r3.forEach(function(e7) {
      if (Ym(e7)) {
        if ("BR" === e7.nodeName) return void (cy(n3, "\n") || n3.push({ text: "\n" }));
        var r4 = hy(am(e7), t3);
        Array.isArray(r4) ? r4.forEach(function(e8) {
          return n3.push(e8);
        }) : n3.push(r4);
      } else if (Zm(e7)) {
        var o3 = e7.textContent || "";
        if ("" === o3.trim() && o3.indexOf("\n") >= 0) return;
        o3 && (o3 = iy(o3), cy(n3, o3) || n3.push({ text: o3 }));
      }
    }), n3);
  })(e5, t2), r2 = (function(e6) {
    for (var t3 in ly) if (e6[0].matches(t3)) return ly[t3];
    return dy;
  })(e5), o2 = r2(e5[0], n2, t2);
  return Array.isArray(o2) || (o2 = [o2]), o2.forEach(function(r3) {
    Kh.isVoid(t2, r3) || (0 === n2.length && (r3.children = [{ text: e5.text().replace(/\s+/gm, " ") }]), uy.forEach(function(n3) {
      r3 = n3(e5[0], r3, t2);
    }));
  }), o2;
}
function py(e5, t2) {
  0 === e5.parents("pre").length && (e5[0].innerHTML = e5[0].innerHTML.replace(/\s+/gm, " ").replace(/<br>/g, "\n"));
  var n2 = e5[0].textContent || "";
  n2 = (function(e6) {
    return e6.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&reg;/g, "®").replace(/&copy;/g, "©").replace(/&trade;/g, "™").replace(/&quot;/g, '"');
  })(n2);
  var r2 = { text: n2 = iy(n2) };
  return uy.forEach(function(n3) {
    r2 = n3(e5[0], r2, t2);
  }), r2;
}
function hy(e5, t2) {
  sy.forEach(function(t3) {
    var n3 = t3.selector, r3 = t3.preParseHtml;
    e5[0].matches(n3) && (e5 = am(r3(e5[0])));
  });
  var n2 = ry(e5);
  if ("span" === n2) {
    if (e5.attr("data-w-e-type")) return fy(e5, t2);
    var r2 = e5.find("img, a").length > 0;
    if (e5[0].childNodes.length > 1 || r2) {
      var o2 = e5[0].childNodes, i2 = (function(e6, t3) {
        var n3 = { text: "" };
        return uy.forEach(function(r3) {
          n3 = r3(e6[0], n3, t3);
        }), n3;
      })(am(e5[0]), t2);
      return Array.from(o2).flatMap(function(e6) {
        var n3 = (function(e7, t3, n4) {
          var r3 = e7[0];
          if (Ym(r3)) {
            var o3 = hy(e7, n4);
            return delete t3.text, Array.isArray(o3) ? o3.map(function(e8) {
              return Yg(Yg({}, t3), e8);
            }) : [Yg(Yg({}, t3), o3)];
          }
          if (Km(r3)) return null;
          var i3 = Zm(r3) ? { text: r3.textContent || "" } : py(e7, n4);
          return [Yg(Yg({}, t3), i3)];
        })(am(e6), i2, t2);
        return n3 || [];
      });
    }
    return py(e5, t2);
  }
  if ("code" === n2) return "pre" === ry(e5.parent()) ? fy(e5, t2) : py(e5, t2);
  if (ay.includes(n2)) {
    if (e5[0].childNodes.length > 0 && e5[0].childNodes[0].nodeType !== Node.TEXT_NODE) {
      o2 = e5[0].childNodes;
      return Yg(Yg({}, hy(am(o2[0]), t2)), py(e5, t2));
    }
    return py(e5, t2);
  }
  return fy(e5, t2);
}
function gy(e5, t2, n2) {
  var r2 = am(n2);
  return !!r2.attr(t2) || (r2.attr(t2, "true"), e5.on(fv, function() {
    r2.removeAttr(t2);
  }), false);
}
function vy(e5, t2) {
  void 0 === t2 && (t2 = "");
  var n2 = [];
  "" === t2 && (t2 = "<p><br></p>"), 0 !== t2.indexOf("<") && (t2 = t2.split(/\n/).map(function(e6) {
    return "<p>".concat(e6, "</p>");
  }).join(""));
  var r2 = am("<div>".concat(t2, "</div>"));
  return Array.from(r2.children()).forEach(function(t3) {
    var r3 = hy(am(t3), e5);
    Array.isArray(r3) ? r3.forEach(function(e6) {
      return n2.push(e6);
    }) : n2.push(r3);
  }), n2;
}
function my(e5, t2) {
  return "w-e-element-".concat(e5, "-").concat(t2);
}
var yy = [];
var by, Ey, Cy = {};
function Dy(e5, t2, n2) {
  var r2 = n2.isInline(e5) ? "span" : "div";
  return "<".concat(r2, ">").concat(t2, "</").concat(r2, ">");
}
function wy(e5, t2) {
  var n2 = e5.type, r2 = void 0 === n2 ? "" : n2, o2 = e5.children, i2 = void 0 === o2 ? [] : o2, a2 = Kh.isVoid(t2, e5), s2 = "";
  a2 || (s2 = i2.map(function(e6) {
    return Ry(e6, t2);
  }).join(""));
  var u2 = (function(e6) {
    return Cy[e6] || Dy;
  })(r2), l2 = u2(e5, s2, t2), c2 = "";
  if (c2 = "string" == typeof l2 ? l2 : l2.html || "", a2 || yy.forEach(function(t3) {
    return c2 = t3(e5, c2);
  }), "string" == typeof l2) return c2;
  var d2 = l2.prefix, f2 = void 0 === d2 ? "" : d2, p2 = l2.suffix, h2 = void 0 === p2 ? "" : p2;
  return f2 && (c2 = f2 + c2), h2 && (c2 += h2), c2;
}
var Sy = (function() {
  if (Ey) return by;
  Ey = 1;
  var e5 = 9007199254740991, t2 = "[object Arguments]", n2 = "[object Map]", r2 = "[object Promise]", o2 = "[object Set]", i2 = "[object WeakMap]", a2 = "[object DataView]", s2 = /^\[object .+?Constructor\]$/, u2 = /^(?:0|[1-9]\d*)$/, l2 = "\\ud800-\\udfff", c2 = "\\u0300-\\u036f\\ufe20-\\ufe23", d2 = "\\u20d0-\\u20f0", f2 = "\\ufe0e\\ufe0f", p2 = "[" + l2 + "]", h2 = "[" + c2 + d2 + "]", g2 = "\\ud83c[\\udffb-\\udfff]", v2 = "[^" + l2 + "]", m2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", b2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", E2 = "\\u200d", C2 = "(?:" + h2 + "|" + g2 + ")?", D2 = "[" + f2 + "]?", w2 = D2 + C2 + ("(?:" + E2 + "(?:" + [v2, m2, b2].join("|") + ")" + D2 + C2 + ")*"), S2 = "(?:" + [v2 + h2 + "?", h2, m2, b2, p2].join("|") + ")", A2 = RegExp(g2 + "(?=" + g2 + ")|" + S2 + w2, "g"), x2 = RegExp("[" + E2 + l2 + c2 + d2 + f2 + "]"), O2 = "object" == typeof y && y && y.Object === Object && y, N2 = "object" == typeof self && self && self.Object === Object && self, B2 = O2 || N2 || Function("return this")();
  function T2(e6, t3) {
    return (function(e7, t4) {
      for (var n3 = -1, r3 = e7 ? e7.length : 0, o3 = Array(r3); ++n3 < r3; ) o3[n3] = t4(e7[n3], n3, e7);
      return o3;
    })(t3, function(t4) {
      return e6[t4];
    });
  }
  function k2(e6) {
    var t3 = -1, n3 = Array(e6.size);
    return e6.forEach(function(e7, r3) {
      n3[++t3] = [r3, e7];
    }), n3;
  }
  function F2(e6) {
    var t3 = -1, n3 = Array(e6.size);
    return e6.forEach(function(e7) {
      n3[++t3] = e7;
    }), n3;
  }
  function I2(e6) {
    return (function(e7) {
      return x2.test(e7);
    })(e6) ? (function(e7) {
      return e7.match(A2) || [];
    })(e6) : (function(e7) {
      return e7.split("");
    })(e6);
  }
  var P2, _2, R2 = Function.prototype, L2 = Object.prototype, M2 = B2["__core-js_shared__"], j2 = (function() {
    var e6 = /[^.]+$/.exec(M2 && M2.keys && M2.keys.IE_PROTO || "");
    return e6 ? "Symbol(src)_1." + e6 : "";
  })(), H2 = R2.toString, z2 = L2.hasOwnProperty, $2 = L2.toString, U2 = RegExp("^" + H2.call(z2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), V2 = B2.Symbol, W2 = V2 ? V2.iterator : void 0, G2 = L2.propertyIsEnumerable, q2 = (P2 = Object.keys, _2 = Object, function(e6) {
    return P2(_2(e6));
  }), K2 = se2(B2, "DataView"), Y2 = se2(B2, "Map"), X2 = se2(B2, "Promise"), Z2 = se2(B2, "Set"), J2 = se2(B2, "WeakMap"), Q2 = ce2(K2), ee2 = ce2(Y2), te2 = ce2(X2), ne2 = ce2(Z2), re2 = ce2(J2);
  function oe2(e6, n3) {
    var r3 = de2(e6) || (function(e7) {
      return (function(e8) {
        return ge2(e8) && fe2(e8);
      })(e7) && z2.call(e7, "callee") && (!G2.call(e7, "callee") || $2.call(e7) == t2);
    })(e6) ? (function(e7, t3) {
      for (var n4 = -1, r4 = Array(e7); ++n4 < e7; ) r4[n4] = t3(n4);
      return r4;
    })(e6.length, String) : [], o3 = r3.length, i3 = !!o3;
    for (var a3 in e6) !z2.call(e6, a3) || i3 && ("length" == a3 || le2(a3, o3)) || r3.push(a3);
    return r3;
  }
  function ie2(e6) {
    if (!he2(e6) || (function(e7) {
      return !!j2 && j2 in e7;
    })(e6)) return false;
    var t3 = pe2(e6) || (function(e7) {
      var t4 = false;
      if (null != e7 && "function" != typeof e7.toString) try {
        t4 = !!(e7 + "");
      } catch (e8) {
      }
      return t4;
    })(e6) ? U2 : s2;
    return t3.test(ce2(e6));
  }
  function ae2(e6) {
    if (n3 = (t3 = e6) && t3.constructor, r3 = "function" == typeof n3 && n3.prototype || L2, t3 !== r3) return q2(e6);
    var t3, n3, r3, o3 = [];
    for (var i3 in Object(e6)) z2.call(e6, i3) && "constructor" != i3 && o3.push(i3);
    return o3;
  }
  function se2(e6, t3) {
    var n3 = (function(e7, t4) {
      return null == e7 ? void 0 : e7[t4];
    })(e6, t3);
    return ie2(n3) ? n3 : void 0;
  }
  var ue2 = function(e6) {
    return $2.call(e6);
  };
  function le2(t3, n3) {
    return !!(n3 = null == n3 ? e5 : n3) && ("number" == typeof t3 || u2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < n3;
  }
  function ce2(e6) {
    if (null != e6) {
      try {
        return H2.call(e6);
      } catch (e7) {
      }
      try {
        return e6 + "";
      } catch (e7) {
      }
    }
    return "";
  }
  (K2 && ue2(new K2(new ArrayBuffer(1))) != a2 || Y2 && ue2(new Y2()) != n2 || X2 && ue2(X2.resolve()) != r2 || Z2 && ue2(new Z2()) != o2 || J2 && ue2(new J2()) != i2) && (ue2 = function(e6) {
    var t3 = $2.call(e6), s3 = "[object Object]" == t3 ? e6.constructor : void 0, u3 = s3 ? ce2(s3) : void 0;
    if (u3) switch (u3) {
      case Q2:
        return a2;
      case ee2:
        return n2;
      case te2:
        return r2;
      case ne2:
        return o2;
      case re2:
        return i2;
    }
    return t3;
  });
  var de2 = Array.isArray;
  function fe2(t3) {
    return null != t3 && (function(t4) {
      return "number" == typeof t4 && t4 > -1 && t4 % 1 == 0 && t4 <= e5;
    })(t3.length) && !pe2(t3);
  }
  function pe2(e6) {
    var t3 = he2(e6) ? $2.call(e6) : "";
    return "[object Function]" == t3 || "[object GeneratorFunction]" == t3;
  }
  function he2(e6) {
    var t3 = typeof e6;
    return !!e6 && ("object" == t3 || "function" == t3);
  }
  function ge2(e6) {
    return !!e6 && "object" == typeof e6;
  }
  function ve2(e6) {
    return e6 ? T2(e6, (function(e7) {
      return fe2(e7) ? oe2(e7) : ae2(e7);
    })(e6)) : [];
  }
  return by = function(e6) {
    if (!e6) return [];
    if (fe2(e6)) return (function(e7) {
      return "string" == typeof e7 || !de2(e7) && ge2(e7) && "[object String]" == $2.call(e7);
    })(e6) ? I2(e6) : (function(e7, t4) {
      var n3 = -1, r3 = e7.length;
      for (t4 || (t4 = Array(r3)); ++n3 < r3; ) t4[n3] = e7[n3];
      return t4;
    })(e6);
    if (W2 && e6[W2]) return (function(e7) {
      for (var t4, n3 = []; !(t4 = e7.next()).done; ) n3.push(t4.value);
      return n3;
    })(e6[W2]());
    var t3 = ue2(e6);
    return (t3 == n2 ? k2 : t3 == o2 ? F2 : ve2)(e6);
  }, by;
})(), Ay = b(Sy), xy = 0, Oy = function() {
  this.id = "".concat(xy++);
}, Ny = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent), By = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Ty = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent), ky = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), Fy = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), Iy = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent), Py = !Fy && !ky && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges, _y = { getWindow: function(e5) {
  var t2 = Uv.get(e5);
  if (!t2) throw new Error("Unable to find a host window element for this editor");
  return t2;
}, findKey: function(e5, t2) {
  var n2 = $v.get(t2);
  return n2 || (n2 = new Oy(), $v.set(t2, n2)), n2;
}, setNewKey: function(e5) {
  var t2 = new Oy();
  $v.set(e5, t2);
}, findPath: function(e5, t2) {
  for (var n2 = [], r2 = t2; ; ) {
    var o2 = Lv.get(r2);
    if (null == o2) {
      if (Kh.isEditor(r2)) return n2;
      break;
    }
    var i2 = Rv.get(r2);
    if (null == i2) break;
    n2.unshift(i2), r2 = o2;
  }
  throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(t2)));
}, findDocumentOrShadowRoot: function(e5) {
  if (e5.isDestroyed) return window.document;
  var t2 = _y.toDOMNode(e5, e5), n2 = t2.getRootNode();
  return "[object HTMLDocument]" !== Vm(n2) && !(function(e6) {
    return "[object ShadowRoot]" === Vm(e6);
  })(n2) || null == Reflect.get(n2, "getSelection") ? t2.ownerDocument : n2;
}, getParentNode: function(e5, t2) {
  return Lv.get(t2) || null;
}, getParentsNodes: function(e5, t2) {
  for (var n2 = [], r2 = t2; r2 !== e5 && null != r2; ) {
    var o2 = _y.getParentNode(e5, r2);
    if (null == o2) break;
    n2.push(o2), r2 = o2;
  }
  return n2;
}, getTopNode: function(e5, t2) {
  var n2 = [_y.findPath(e5, t2)[0]];
  return eg.get(e5, n2);
}, toDOMNode: function(e5, t2) {
  var n2;
  if (Kh.isEditor(t2)) n2 = Mv.get(e5);
  else {
    var r2 = _y.findKey(e5, t2);
    n2 = Hv.get(r2);
  }
  if (!n2) throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(t2)));
  return n2;
}, hasDOMNode: function(e5, t2, n2) {
  void 0 === n2 && (n2 = {});
  var r2, o2 = n2.editable, i2 = void 0 !== o2 && o2, a2 = _y.toDOMNode(e5, e5);
  try {
    r2 = Ym(t2) ? t2 : t2.parentElement;
  } catch (e6) {
    if (e6 instanceof Error && !e6.message.includes('Permission denied to access property "nodeType"')) throw e6;
  }
  return !!r2 && (r2.closest("[data-slate-editor]") === a2 && (!i2 || r2.isContentEditable || !!r2.getAttribute("data-slate-zero-width")) || !!r2.getAttribute("data-slate-string"));
}, toDOMRange: function(e5, t2) {
  var n2 = t2.anchor, r2 = t2.focus, o2 = fg.isBackward(t2), i2 = _y.toDOMPoint(e5, n2), a2 = fg.isCollapsed(t2) ? i2 : _y.toDOMPoint(e5, r2), s2 = _y.getWindow(e5).document.createRange(), u2 = Qg(o2 ? a2 : i2, 2), l2 = u2[0], c2 = u2[1], d2 = Qg(o2 ? i2 : a2, 2), f2 = d2[0], p2 = d2[1], h2 = !!(Ym(l2) ? l2 : l2.parentElement).getAttribute("data-slate-zero-width"), g2 = !!(Ym(f2) ? f2 : f2.parentElement).getAttribute("data-slate-zero-width");
  return s2.setStart(l2, h2 ? 1 : c2), s2.setEnd(f2, g2 ? 1 : p2), s2;
}, toDOMPoint: function(e5, t2) {
  var n2, r2, o2, i2 = Qg(Kh.node(e5, t2.path), 1)[0], a2 = _y.toDOMNode(e5, i2);
  Kh.void(e5, { at: t2 }) && (t2 = { path: t2.path, offset: 0 });
  var s2 = Array.from(a2.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), u2 = 0;
  try {
    for (var l2 = Jg(s2), c2 = l2.next(); !c2.done; c2 = l2.next()) {
      var d2 = c2.value, f2 = d2.childNodes[0];
      if (null != f2 && null != f2.textContent) {
        var p2 = f2.textContent.length, h2 = d2.getAttribute("data-slate-length"), g2 = u2 + (null == h2 ? p2 : parseInt(h2, 10));
        if (t2.offset <= g2) {
          o2 = [f2, Math.min(p2, Math.max(0, t2.offset - u2))];
          break;
        }
        u2 = g2;
      }
    }
  } catch (e6) {
    n2 = { error: e6 };
  } finally {
    try {
      c2 && !c2.done && (r2 = l2.return) && r2.call(l2);
    } finally {
      if (n2) throw n2.error;
    }
  }
  if (!o2) throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(t2)));
  return o2;
}, toSlateNode: function(e5, t2) {
  var n2 = Ym(t2) ? t2 : t2.parentElement;
  n2 && !n2.hasAttribute("data-slate-node") && (n2 = n2.closest("[data-slate-node]"));
  var r2 = n2 ? jv.get(n2) : null;
  if (!r2) throw new Error("Cannot resolve a Slate node from DOM node: ".concat(n2));
  return r2;
}, findEventRange: function(e5, t2) {
  "nativeEvent" in t2 && (t2 = t2.nativeEvent);
  var n2 = t2.clientX, r2 = t2.clientY, o2 = t2.target;
  if (null == n2 || null == r2) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t2));
  var i2, a2 = _y.toSlateNode(e5, t2.target), s2 = _y.findPath(e5, a2);
  if (Kh.isVoid(e5, a2)) {
    var u2 = o2.getBoundingClientRect(), l2 = e5.isInline(a2) ? n2 - u2.left < u2.left + u2.width - n2 : r2 - u2.top < u2.top + u2.height - r2, c2 = Kh.point(e5, s2, { edge: l2 ? "start" : "end" }), d2 = l2 ? Kh.before(e5, c2) : Kh.after(e5, c2);
    if (d2) return Kh.range(e5, d2);
  }
  var f2 = this.getWindow(e5).document;
  if (f2.caretRangeFromPoint) i2 = f2.caretRangeFromPoint(n2, r2);
  else {
    var p2 = f2.caretPositionFromPoint(n2, r2);
    p2 && ((i2 = f2.createRange()).setStart(p2.offsetNode, p2.offset), i2.setEnd(p2.offsetNode, p2.offset));
  }
  if (!i2) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t2));
  return _y.toSlateRange(e5, i2, { exactMatch: false, suppressThrow: false });
}, toSlateRange: function(e5, t2, n2) {
  var r2, o2, i2, a2, s2, u2 = n2.exactMatch, l2 = n2.suppressThrow;
  if ((Xm(t2) ? t2.anchorNode : t2.startContainer) && (Xm(t2) ? (r2 = t2.anchorNode, o2 = t2.anchorOffset, i2 = t2.focusNode, a2 = t2.focusOffset, s2 = Iy && window.document.activeElement && window.document.activeElement.shadowRoot ? t2.anchorNode === t2.focusNode && t2.anchorOffset === t2.focusOffset : t2.isCollapsed) : (r2 = t2.startContainer, o2 = t2.startOffset, i2 = t2.endContainer, a2 = t2.endOffset, s2 = t2.collapsed)), null == r2 || null == i2 || null == o2 || null == a2) throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t2));
  var c2 = _y.toSlatePoint(e5, [r2, o2], { exactMatch: u2, suppressThrow: l2 });
  if (!c2) return null;
  var d2 = s2 ? c2 : _y.toSlatePoint(e5, [i2, a2], { exactMatch: u2, suppressThrow: l2 });
  if (!d2) return null;
  var f2 = { anchor: c2, focus: d2 };
  return fg.isExpanded(f2) && fg.isForward(f2) && Ym(i2) && Kh.void(e5, { at: f2.focus, mode: "highest" }) && (f2 = Kh.unhangRange(e5, f2, { voids: true })), f2;
}, toSlatePoint: function(e5, t2, n2) {
  var r2, o2 = n2.exactMatch, i2 = n2.suppressThrow, a2 = Qg(o2 ? t2 : (function(e6) {
    var t3, n3 = Qg(e6, 2), r3 = n3[0], o3 = n3[1];
    if (Ym(r3) && r3.childNodes.length) {
      var i3 = o3 === r3.childNodes.length, a3 = i3 ? o3 - 1 : o3;
      for (r3 = (t3 = Qg(Qm(r3, a3, i3 ? "backward" : "forward"), 2))[0], i3 = (a3 = t3[1]) < o3; Ym(r3) && r3.childNodes.length; ) {
        var s3 = i3 ? r3.childNodes.length - 1 : 0;
        r3 = ey(r3, s3, i3 ? "backward" : "forward");
      }
      o3 = i3 && null != r3.textContent ? r3.textContent.length : 0;
    }
    return [r3, o3];
  })(t2), 2), s2 = a2[0], u2 = a2[1], l2 = s2.parentNode, c2 = null, d2 = 0;
  if (l2) {
    var f2 = l2.closest('[data-slate-void="true"]'), p2 = l2.closest("[data-slate-leaf]"), h2 = null, g2 = _y.getWindow(e5);
    if (p2 && g2.document.createRange) {
      c2 = p2.closest('[data-slate-node="text"]');
      var v2 = g2.document.createRange();
      v2.setStart(c2, 0), v2.setEnd(s2, u2);
      var m2 = v2.cloneContents();
      ev(ev([], Qg(Ay(m2.querySelectorAll("[data-slate-zero-width]"))), false), Qg(Ay(m2.querySelectorAll("[contenteditable=false]"))), false).forEach(function(e6) {
        e6.parentNode.removeChild(e6);
      }), d2 = m2.textContent.length, h2 = c2;
    } else f2 && ((p2 = f2.querySelector("[data-slate-leaf]")) ? (c2 = p2.closest('[data-slate-node="text"]'), d2 = (h2 = p2).textContent.length, h2.querySelectorAll("[data-slate-zero-width]").forEach(function(e6) {
      d2 -= e6.textContent.length;
    })) : d2 = 1);
    h2 && d2 === h2.textContent.length && (l2.hasAttribute("data-slate-zero-width") || By && (null === (r2 = h2.textContent) || void 0 === r2 ? void 0 : r2.endsWith("\n"))) && (d2 -= 1);
  }
  if (!c2) {
    if (i2) return null;
    throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t2));
  }
  var y2 = _y.toSlateNode(e5, c2);
  return { path: _y.findPath(e5, y2), offset: d2 };
}, hasRange: function(e5, t2) {
  var n2 = t2.anchor, r2 = t2.focus;
  return Kh.hasPath(e5, n2.path) && Kh.hasPath(e5, r2.path);
}, getNodeType: function(e5) {
  return $h.isElement(e5) ? e5.type : "";
}, checkNodeType: function(e5, t2) {
  return this.getNodeType(e5) === t2;
}, getNodesStr: function(e5) {
  return e5.map(function(e6) {
    return eg.string(e6);
  }).join("");
}, getSelectedElems: function(e5) {
  var t2, n2, r2 = [], o2 = Kh.nodes(e5, { universal: true });
  try {
    for (var i2 = Jg(o2), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      var s2 = Qg(a2.value, 1)[0];
      $h.isElement(s2) && r2.push(s2);
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return r2;
}, getSelectedNodeByType: function(e5, t2) {
  var n2 = this, r2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return n2.checkNodeType(e6, t2);
  }, universal: true }), 1), o2 = r2[0];
  return null == o2 ? null : o2[0];
}, getSelectedTextNode: function(e5) {
  var t2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return Cg.isText(e6);
  }, universal: true }), 1), n2 = t2[0];
  return null == n2 ? null : n2[0];
}, isNodeSelected: function(e5, t2) {
  var n2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return e6 === t2;
  }, universal: true }), 1), r2 = n2[0];
  return null != r2 && Qg(r2, 1)[0] === t2;
}, isSelectionAtLineEnd: function(e5, t2) {
  var n2 = e5.selection;
  return !!n2 && (Kh.isEnd(e5, n2.anchor, t2) || Kh.isEnd(e5, n2.focus, t2));
}, getTextarea: function(e5) {
  var t2 = Cv.get(e5);
  if (null == t2) throw new Error("Cannot find textarea instance by editor");
  return t2;
}, getToolbar: function(e5) {
  return Sv.get(e5) || null;
}, getHoverbar: function(e5) {
  return xv.get(e5) || null;
}, normalizeContent: function(e5) {
  e5.children.forEach(function(t2, n2) {
    e5.normalizeNode([t2, [n2]]);
  });
}, getLeftLengthOfMaxLength: function(e5) {
  var t2 = e5.getConfig(), n2 = t2.maxLength, r2 = t2.onMaxLength;
  if ("number" != typeof n2 || n2 <= 0) return 1 / 0;
  var o2 = n2 - e5.getText().replace(/\r|\n|(\r\n)|(\n\r)/g, "").length;
  return o2 <= 0 && r2 && r2(e5), o2;
}, cleanExposedTexNodeInSelectionBlock: function(e5) {
  var t2, n2, r2, o2, i2 = _y.getTextarea(e5).$textArea, a2 = null == i2 ? void 0 : i2[0].childNodes;
  if (a2) try {
    for (var s2 = Jg(Array.from(a2)), u2 = s2.next(); !u2.done; u2 = s2.next()) {
      var l2 = u2.value;
      if (!Zm(l2)) break;
      l2.remove();
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      u2 && !u2.done && (n2 = s2.return) && n2.call(s2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  var c2 = Kh.nodes(e5, { match: function(t3) {
    return !(!$h.isElement(t3) || e5.isInline(t3));
  }, universal: true });
  try {
    for (var d2 = Jg(c2), f2 = d2.next(); !f2.done; f2 = d2.next()) {
      var p2 = f2.value;
      if (null != p2) {
        var h2 = p2[0];
        ny(_y.toDOMNode(e5, h2), function(e6, t3) {
          var n3 = am(t3);
          n3.attr("data-slate-string") || n3.attr("data-slate-zero-width") || n3.attr("data-w-e-reserve") || t3.removeChild(e6);
        });
      }
    }
  } catch (e6) {
    r2 = { error: e6 };
  } finally {
    try {
      f2 && !f2.done && (o2 = d2.return) && o2.call(d2);
    } finally {
      if (r2) throw r2.error;
    }
  }
}, isLastNode: function(e5, t2) {
  var n2 = e5.children || [];
  return n2[n2.length - 1] === t2;
}, genEmptyParagraph: function() {
  return { type: "paragraph", children: [{ text: "" }] };
}, isSelectedVoidNode: function(e5) {
  var t2, n2, r2 = Kh.nodes(e5, { match: function(t3) {
    return e5.isVoid(t3);
  } }), o2 = 0;
  try {
    for (var i2 = Jg(r2), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      a2.value && (o2 += 1);
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return o2 > 0;
}, isSelectedEmptyParagraph: function(e5) {
  var t2 = e5.selection;
  if (null == t2) return false;
  if (fg.isExpanded(t2)) return false;
  var n2 = _y.getSelectedNodeByType(e5, "paragraph");
  if (null === n2) return false;
  var r2 = n2.children;
  return 1 === r2.length && ("" === r2[0].text || void 0);
}, isEmptyPath: function(e5, t2) {
  var n2 = Kh.node(e5, t2);
  if (null == n2) return false;
  var r2 = Qg(n2, 1)[0].children;
  if (1 === r2.length && "" === r2[0].text) return true;
  return false;
} };
function Ry(e5, t2) {
  return $h.isElement(e5) ? wy(e5, t2) : (function(e6, t3) {
    var n2 = e6.text;
    if (null == n2) throw new Error("Current node is not slate Text ".concat(JSON.stringify(e6)));
    var r2 = n2;
    r2 = (function(e7) {
      return e7.replace(/ {2}/g, " &nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/®/g, "&reg;").replace(/©/g, "&copy;").replace(/™/g, "&trade;");
    })(r2);
    var o2 = _y.getParentsNodes(t3, e6).some(function(e7) {
      return "pre" === _y.getNodeType(e7);
    });
    if (o2 || (r2 = r2.replace(/\n\r|\r\n|\r|\n/g, "<br>")), o2 && (r2 = r2.replace(/&nbsp;/g, " ")), "" === r2) {
      var i2 = _y.getParentNode(null, e6);
      if (!i2 || 0 !== i2.children.length) return r2;
      r2 = "<br>";
    }
    return yy.forEach(function(t4) {
      return r2 = t4(e6, r2);
    }), r2;
  })(e5, t2);
}
var Ly = function(e5, t2) {
  var n2 = (t2.top + t2.bottom) / 2;
  return e5.top <= n2 && e5.bottom >= n2;
}, My = function(e5, t2, n2) {
  var r2 = _y.toDOMRange(e5, t2).getBoundingClientRect(), o2 = _y.toDOMRange(e5, n2).getBoundingClientRect();
  return Ly(r2, o2) && Ly(o2, r2);
}, jy = function(e5, t2) {
  var n2, r2, o2 = [];
  try {
    for (var i2 = Jg(Kh.levels(e5, { at: t2 })), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      var s2 = Qg(a2.value, 2), u2 = s2[0], l2 = s2[1], c2 = _y.findKey(e5, u2);
      o2.push([l2, c2]);
    }
  } catch (e6) {
    n2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (r2 = i2.return) && r2.call(i2);
    } finally {
      if (n2) throw n2.error;
    }
  }
  return o2;
};
function Hy(e5, t2) {
  e5.isInline(t2) ? (e5.insertNode(t2), "link" === t2.type && e5.insertFragment([{ text: "" }])) : jg.insertNodes(e5, t2, { mode: "highest" });
}
var zy, $y, Uy, Vy, Wy, Gy, qy, Ky, Yy, Xy, Zy, Jy, Qy, eb, tb, nb, rb, ob, ib, ab, sb, ub, lb, cb, db, fb, pb, hb, gb, vb, mb, yb, bb, Eb, Cb, Db, wb, Sb, Ab, xb, Ob = function(e5) {
  var t2 = e5, n2 = t2.onChange, r2 = t2.insertText, o2 = t2.apply, i2 = t2.deleteBackward;
  return t2.insertText = function(e6) {
    t2.getConfig().readOnly || r2(e6);
  }, t2.apply = function(e6) {
    var n3, r3, i3, a2, s2, u2, l2, c2, d2 = [];
    switch (e6.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node":
        d2.push.apply(d2, ev([], Qg(jy(t2, e6.path)), false));
        break;
      case "insert_node":
      case "remove_node":
        d2.push.apply(d2, ev([], Qg(jy(t2, og.parent(e6.path))), false));
        break;
      case "merge_node":
        var f2 = og.previous(e6.path);
        d2.push.apply(d2, ev([], Qg(jy(t2, f2)), false));
        break;
      case "move_node":
        var p2 = og.common(og.parent(e6.path), og.parent(e6.newPath));
        d2.push.apply(d2, ev([], Qg(jy(t2, p2)), false));
        break;
      case "set_selection":
        (null === (a2 = null === (i3 = e6.newProperties) || void 0 === i3 ? void 0 : i3.focus) || void 0 === a2 ? void 0 : a2.path) && (d2.push.apply(d2, ev([], Qg(jy(t2, null === (u2 = null === (s2 = e6.newProperties) || void 0 === s2 ? void 0 : s2.focus) || void 0 === u2 ? void 0 : u2.path)), false)), d2.push.apply(d2, ev([], Qg(jy(t2, null === (c2 = null === (l2 = e6.properties) || void 0 === l2 ? void 0 : l2.focus) || void 0 === c2 ? void 0 : c2.path)), false)));
    }
    o2(e6);
    try {
      for (var h2 = Jg(d2), g2 = h2.next(); !g2.done; g2 = h2.next()) {
        var v2 = Qg(g2.value, 2), m2 = v2[0], y2 = v2[1], b2 = Qg(Kh.node(t2, m2), 1)[0];
        $v.set(b2, y2), "type" in b2 && (Pv.has(b2) && Pv.delete(b2), _v.has(b2) && _v.delete(b2));
      }
    } catch (e7) {
      n3 = { error: e7 };
    } finally {
      try {
        g2 && !g2.done && (r3 = h2.return) && r3.call(h2);
      } finally {
        if (n3) throw n3.error;
      }
    }
  }, t2.deleteBackward = function(n3) {
    if ("line" !== n3) return i2(n3);
    if (e5.selection && fg.isCollapsed(e5.selection)) {
      var r3 = Kh.above(e5, { match: function(t3) {
        return Kh.isBlock(e5, t3);
      }, at: e5.selection });
      if (r3) {
        var o3 = Qg(r3, 2)[1], a2 = Kh.range(e5, o3, e5.selection.anchor), s2 = (function(e6, t3) {
          var n4 = Kh.range(e6, fg.end(t3)), r4 = Array.from(Kh.positions(e6, { at: t3 })), o4 = 0, i3 = r4.length, a3 = Math.floor(i3 / 2);
          if (My(e6, Kh.range(e6, r4[o4]), n4)) return Kh.range(e6, r4[o4], n4);
          if (r4.length < 2) return Kh.range(e6, r4[r4.length - 1], n4);
          for (; a3 !== r4.length && a3 !== o4; ) My(e6, Kh.range(e6, r4[a3]), n4) ? i3 = a3 : o4 = a3, a3 = Math.floor((o4 + i3) / 2);
          return Kh.range(e6, r4[i3], n4);
        })(t2, a2);
        fg.isCollapsed(s2) || jg.delete(e5, { at: s2 });
      }
    }
  }, t2.onChange = function() {
    var e6 = t2.selection;
    null != e6 && Wv.set(t2, e6), t2.emit(pv), n2();
  }, t2.handleTab = function() {
    t2.insertText("    ");
  }, t2.getHtml = function() {
    var e6 = t2.children, n3 = void 0 === e6 ? [] : e6, r3 = t2.getConfig().skipCacheTypes, o3 = void 0 === r3 ? ["list-item"] : r3;
    return n3.map(function(e7) {
      var n4 = _y.getNodeType(e7);
      if (o3.includes(n4)) return Ry(e7, t2);
      var r4 = _v.get(e7);
      if (r4) return r4;
      var i3 = Ry(e7, t2);
      return _v.set(e7, i3), i3;
    }).join("");
  }, t2.getText = function() {
    var e6 = t2.children;
    return (void 0 === e6 ? [] : e6).map(function(e7) {
      return eg.string(e7);
    }).join("\n");
  }, t2.getSelectionText = function() {
    var n3 = t2.selection;
    return null == n3 ? "" : Kh.string(e5, n3);
  }, t2.getElemsByType = function(e6, n3) {
    var r3, o3;
    void 0 === n3 && (n3 = false);
    var i3 = [], a2 = Kh.nodes(t2, { at: [], universal: true });
    try {
      for (var s2 = Jg(a2), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        var l2 = Qg(u2.value, 1)[0];
        if ($h.isElement(l2)) {
          if (n3 ? l2.type.indexOf(e6) >= 0 : l2.type === e6) {
            var c2 = _y.findKey(t2, l2), d2 = my(l2.type, c2.id);
            i3.push(Yg(Yg({}, l2), { id: d2 }));
          }
        }
      }
    } catch (e7) {
      r3 = { error: e7 };
    } finally {
      try {
        u2 && !u2.done && (o3 = s2.return) && o3.call(s2);
      } finally {
        if (r3) throw r3.error;
      }
    }
    return i3;
  }, t2.getElemsByTypePrefix = function(e6) {
    return t2.getElemsByType(e6, true);
  }, t2.isEmpty = function() {
    var e6 = t2.children, n3 = void 0 === e6 ? [] : e6;
    if (n3.length > 1) return false;
    var r3 = n3[0];
    if (null == r3) return true;
    if (!$h.isElement(r3) || "paragraph" !== r3.type) return false;
    var o3 = r3.children, i3 = void 0 === o3 ? [] : o3;
    if (i3.length > 1) return false;
    var a2 = i3[0];
    return null == a2 || Cg.isText(a2) && "" === a2.text;
  }, t2.clear = function() {
    jg.delete(t2, { at: { anchor: Kh.start(t2, []), focus: Kh.end(t2, []) } }), 0 === t2.children.length && jg.insertNodes(t2, [{ type: "paragraph", children: [{ text: "" }] }]);
  }, t2.getParentNode = function(e6) {
    return _y.getParentNode(t2, e6);
  }, t2.dangerouslyInsertHtml = function(e6, n3) {
    if (void 0 === e6 && (e6 = ""), void 0 === n3 && (n3 = false), e6) {
      var r3 = document.createElement("div");
      r3.innerHTML = e6;
      var o3 = Array.from(r3.childNodes);
      if (o3 = o3.filter(function(e7) {
        var t3 = e7.nodeName;
        return !!Zm(e7) || !!Ym(e7) && !Yv.has(t3.toLowerCase());
      }), 0 !== o3.length) {
        var i3 = t2.selection;
        if (null != i3) {
          var a2 = null;
          if (_y.isSelectedEmptyParagraph(t2) && !n3) a2 = [i3.focus.path[0]];
          r3.setAttribute("hidden", "true"), document.body.appendChild(r3);
          var s2 = 0;
          o3.forEach(function(e7, n4) {
            var r4 = e7.nodeName, i4 = e7.textContent, a3 = void 0 === i4 ? "" : i4;
            if (Zm(e7)) {
              if (!a3 || !a3.trim()) return;
              t2.insertNode({ text: a3 });
            } else if ("BR" !== r4) {
              var u2 = e7, l2 = false;
              if (ay.includes(r4.toLowerCase())) l2 = true;
              else for (var c2 in ly) if (u2.matches(c2)) {
                l2 = true;
                break;
              }
              if (l2) {
                var d2 = hy(am(u2), t2);
                return Array.isArray(d2) ? (d2.forEach(function(e8) {
                  return Hy(t2, e8);
                }), s2 += 1) : (Hy(t2, d2), s2 += 1), void (_y.isSelectedVoidNode(t2) && t2.move(1));
              }
              var f2 = window.getComputedStyle(u2).display;
              if (!_y.isSelectedEmptyParagraph(t2) && f2.indexOf("inline") < 0) {
                if (n4 >= 1) (function(e8) {
                  return "matches" in e8 && /^[ou]l$/i.test(e8.tagName) && !e8.hasAttribute("data-w-e-type");
                })(o3[n4 - 1]) && t2.insertBreak();
                t2.insertBreak();
              }
              t2.dangerouslyInsertHtml(u2.innerHTML, true);
            } else t2.insertText("\n");
          }), s2 && a2 && _y.isEmptyPath(t2, a2) && jg.removeNodes(t2, { at: a2 }), r3.remove();
        }
      }
    }
  }, t2.setHtml = function(e6) {
    void 0 === e6 && (e6 = "");
    var n3 = t2.isDisabled(), r3 = t2.isFocused(), o3 = JSON.stringify(t2.selection);
    t2.enable(), t2.focus(), t2.clear();
    var i3 = vy(t2, null == e6 ? "" : e6);
    if (jg.insertFragment(t2, i3), r3 || (t2.deselect(), t2.blur()), n3 && (t2.deselect(), t2.disable()), t2.isFocused()) try {
      t2.select(JSON.parse(o3));
    } catch (e7) {
      t2.select(Kh.start(t2, []));
    }
  }, t2;
}, Nb = 1, Bb = function(e5) {
  var t2 = e5;
  return t2.id = "wangEditor-".concat(Nb), Nb += 1, t2.isDestroyed = false, t2.isFullScreen = false, t2.focus = function(e6) {
    if (_y.toDOMNode(t2, t2).focus({ preventScroll: true }), Vv.set(t2, true), e6) {
      var n2 = Kh.end(t2, []);
      jg.select(t2, n2);
    } else {
      var r2 = Wv.get(t2);
      r2 ? jg.select(t2, r2) : jg.select(t2, Kh.start(t2, []));
    }
  }, t2.isFocused = function() {
    return !!Vv.get(t2);
  }, t2.blur = function() {
    _y.toDOMNode(t2, t2).blur(), jg.deselect(t2), Vv.set(t2, false);
  }, t2.updateView = function() {
    _y.getTextarea(t2).changeViewState();
    var e6 = _y.getToolbar(t2);
    e6 && e6.changeToolbarState();
    var n2 = _y.getHoverbar(t2);
    n2 && n2.changeHoverbarState();
  }, t2.destroy = function() {
    if (!t2.isDestroyed) {
      var e6 = _y.getTextarea(t2);
      e6.destroy(), Cv.delete(t2), Dv.delete(e6);
      var n2 = _y.getToolbar(t2);
      n2 && (n2.destroy(), Sv.delete(t2), wv.delete(n2));
      var r2 = _y.getHoverbar(t2);
      r2 && (r2.destroy(), xv.delete(t2), Av.delete(r2)), t2.isDestroyed = true, t2.emit(fv);
    }
  }, t2.scrollToElem = function(e6) {
    if (!t2.getConfig().scroll) {
      var n2 = "编辑器禁用了 scroll ，编辑器内容无法滚动，请自行实现该功能";
      return n2 += "\nYou has disabled editor scroll, please do this yourself", void console.warn(n2);
    }
    var r2 = am("#".concat(e6));
    if (0 !== r2.length) {
      var o2 = r2[0];
      if (!_y.hasDOMNode(t2, o2)) {
        n2 = "Element (found by id is '".concat(e6, "') is not in editor DOM");
        return n2 += "\n 通过 id '".concat(e6, "' 找到的 element 不在 editor DOM 之内"), void console.error(n2, o2);
      }
      var i2 = _y.getTextarea(t2), a2 = i2.$textAreaContainer, s2 = i2.$scroll, u2 = r2.offset().top, l2 = a2.offset().top;
      s2[0].scrollBy({ top: u2 - l2, behavior: "smooth" });
    }
  }, t2.showProgressBar = function(e6) {
    e6 < 1 || _y.getTextarea(t2).changeProgress(e6);
  }, t2.hidePanelOrModal = function() {
    var e6 = Nv.get(t2);
    null != e6 && e6.forEach(function(e7) {
      return e7.hide();
    });
  }, t2.enable = function() {
    t2.getConfig().readOnly = false, t2.updateView();
  }, t2.disable = function() {
    t2.getConfig().readOnly = true, t2.updateView();
  }, t2.isDisabled = function() {
    return t2.getConfig().readOnly;
  }, t2.toDOMNode = function(e6) {
    return _y.toDOMNode(t2, e6);
  }, t2.fullScreen = function() {
    if (!t2.isFullScreen) {
      var e6 = null, n2 = _y.getToolbar(t2);
      n2 && (e6 = n2.$box);
      var r2 = _y.getTextarea(t2).$box.parent();
      if (e6 && e6.parent()[0] !== r2[0]) {
        throw new Error("Can not set full screen, cause toolbar DOM parent is not equal to textarea DOM parent\n不能设置全屏，因为 toolbar DOM 父节点和 textarea DOM 父节点不一致");
      }
      r2.addClass("w-e-full-screen-container");
      var o2 = r2.css("z-index");
      r2.attr("data-z-index", o2.toString()), t2.isFullScreen = true, t2.emit(gv);
    }
  }, t2.unFullScreen = function() {
    if (t2.isFullScreen) {
      var e6 = _y.getTextarea(t2).$box.parent();
      setTimeout(function() {
        e6.removeClass("w-e-full-screen-container"), t2.isFullScreen = false, t2.emit(vv);
      }, 200);
    }
  }, t2.getEditableContainer = function() {
    return _y.getTextarea(t2).$textAreaContainer[0];
  }, t2;
}, Tb = { exports: {} }, kb = { exports: {} };
function Fb() {
  if ($y) return zy;
  $y = 1;
  return zy = function(e5) {
    return null != e5;
  };
}
function Ib() {
  if (Gy) return Wy;
  Gy = 1;
  var e5 = (function() {
    if (Vy) return Uy;
    Vy = 1;
    var e6 = Fb(), t2 = { object: true, function: true, undefined: true };
    return Uy = function(n2) {
      return !!e6(n2) && hasOwnProperty.call(t2, typeof n2);
    };
  })();
  return Wy = function(t2) {
    if (!e5(t2)) return false;
    try {
      return !!t2.constructor && t2.constructor.prototype === t2;
    } catch (e6) {
      return false;
    }
  };
}
function Pb() {
  if (Xy) return Yy;
  Xy = 1;
  var e5 = (function() {
    if (Ky) return qy;
    Ky = 1;
    var e6 = Ib();
    return qy = function(t3) {
      if ("function" != typeof t3) return false;
      if (!hasOwnProperty.call(t3, "length")) return false;
      try {
        if ("number" != typeof t3.length) return false;
        if ("function" != typeof t3.call) return false;
        if ("function" != typeof t3.apply) return false;
      } catch (e7) {
        return false;
      }
      return !e6(t3);
    };
  })(), t2 = /^\s*class[\s{/}]/, n2 = Function.prototype.toString;
  return Yy = function(r2) {
    return !!e5(r2) && !t2.test(n2.call(r2));
  };
}
function _b() {
  if (ob) return rb;
  ob = 1;
  var e5 = (nb ? tb : (nb = 1, tb = function() {
  }))();
  return rb = function(t2) {
    return t2 !== e5 && null !== t2;
  }, rb;
}
function Rb() {
  return ub || (ub = 1, sb = (eb ? Qy : (eb = 1, Qy = function() {
    try {
      return Object.keys("primitive"), true;
    } catch (e5) {
      return false;
    }
  }))() ? Object.keys : (function() {
    if (ab) return ib;
    ab = 1;
    var e5 = _b(), t2 = Object.keys;
    return ib = function(n2) {
      return t2(e5(n2) ? Object(n2) : n2);
    };
  })()), sb;
}
function Lb() {
  if (fb) return db;
  fb = 1;
  var e5 = Rb(), t2 = (function() {
    if (cb) return lb;
    cb = 1;
    var e6 = _b();
    return lb = function(t3) {
      if (!e6(t3)) throw new TypeError("Cannot use null or undefined");
      return t3;
    };
  })(), n2 = Math.max;
  return db = function(r2, o2) {
    var i2, a2, s2, u2 = n2(arguments.length, 2);
    for (r2 = Object(t2(r2)), s2 = function(e6) {
      try {
        r2[e6] = o2[e6];
      } catch (e7) {
        i2 || (i2 = e7);
      }
    }, a2 = 1; a2 < u2; ++a2) e5(o2 = arguments[a2]).forEach(s2);
    if (void 0 !== i2) throw i2;
    return r2;
  }, db;
}
function Mb() {
  return hb ? pb : (hb = 1, pb = (Jy || (Jy = 1, Zy = function() {
    var e5, t2 = Object.assign;
    return "function" == typeof t2 && (t2(e5 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e5.foo + e5.bar + e5.trzy === "razdwatrzy");
  }), Zy)() ? Object.assign : Lb());
}
function jb() {
  return Db || (Db = 1, Cb = (function() {
    if (yb) return mb;
    yb = 1;
    var e5 = "razdwatrzy";
    return mb = function() {
      return "function" == typeof e5.contains && true === e5.contains("dwa") && false === e5.contains("foo");
    };
  })()() ? String.prototype.contains : (function() {
    if (Eb) return bb;
    Eb = 1;
    var e5 = String.prototype.indexOf;
    return bb = function(t2) {
      return e5.call(this, t2, arguments[1]) > -1;
    }, bb;
  })()), Cb;
}
function Hb() {
  if (wb) return kb.exports;
  wb = 1;
  var e5 = Fb(), t2 = Pb(), n2 = Mb(), r2 = (function() {
    if (vb) return gb;
    vb = 1;
    var e6 = _b(), t3 = Array.prototype.forEach, n3 = Object.create;
    return gb = function(r3) {
      var o3 = n3(null);
      return t3.call(arguments, function(t4) {
        e6(t4) && (function(e7, t5) {
          var n4;
          for (n4 in e7) t5[n4] = e7[n4];
        })(Object(t4), o3);
      }), o3;
    }, gb;
  })(), o2 = jb(), i2 = kb.exports = function(t3, i3) {
    var a2, s2, u2, l2, c2;
    return arguments.length < 2 || "string" != typeof t3 ? (l2 = i3, i3 = t3, t3 = null) : l2 = arguments[2], e5(t3) ? (a2 = o2.call(t3, "c"), s2 = o2.call(t3, "e"), u2 = o2.call(t3, "w")) : (a2 = u2 = true, s2 = false), c2 = { value: i3, configurable: a2, enumerable: s2, writable: u2 }, l2 ? n2(r2(l2), c2) : c2;
  };
  return i2.gs = function(i3, a2, s2) {
    var u2, l2, c2, d2;
    return "string" != typeof i3 ? (c2 = s2, s2 = a2, a2 = i3, i3 = null) : c2 = arguments[3], e5(a2) ? t2(a2) ? e5(s2) ? t2(s2) || (c2 = s2, s2 = void 0) : s2 = void 0 : (c2 = a2, a2 = s2 = void 0) : a2 = void 0, e5(i3) ? (u2 = o2.call(i3, "c"), l2 = o2.call(i3, "e")) : (u2 = true, l2 = false), d2 = { get: a2, set: s2, configurable: u2, enumerable: l2 }, c2 ? n2(r2(c2), d2) : d2;
  }, kb.exports;
}
var zb = (xb || (xb = 1, (function(e5, t2) {
  var n2, r2, o2, i2, a2, s2, u2, l2 = Hb(), c2 = (Ab || (Ab = 1, Sb = function(e6) {
    if ("function" != typeof e6) throw new TypeError(e6 + " is not a function");
    return e6;
  }), Sb), d2 = Function.prototype.apply, f2 = Function.prototype.call, p2 = Object.create, h2 = Object.defineProperty, g2 = Object.defineProperties, v2 = Object.prototype.hasOwnProperty, m2 = { configurable: true, enumerable: false, writable: true };
  n2 = function(e6, t3) {
    var n3;
    return c2(t3), v2.call(this, "__ee__") ? n3 = this.__ee__ : (n3 = m2.value = p2(null), h2(this, "__ee__", m2), m2.value = null), n3[e6] ? "object" == typeof n3[e6] ? n3[e6].push(t3) : n3[e6] = [n3[e6], t3] : n3[e6] = t3, this;
  }, r2 = function(e6, t3) {
    var r3, i3;
    return c2(t3), i3 = this, n2.call(this, e6, r3 = function() {
      o2.call(i3, e6, r3), d2.call(t3, this, arguments);
    }), r3.__eeOnceListener__ = t3, this;
  }, o2 = function(e6, t3) {
    var n3, r3, o3, i3;
    if (c2(t3), !v2.call(this, "__ee__")) return this;
    if (!(n3 = this.__ee__)[e6]) return this;
    if ("object" == typeof (r3 = n3[e6])) for (i3 = 0; o3 = r3[i3]; ++i3) o3 !== t3 && o3.__eeOnceListener__ !== t3 || (2 === r3.length ? n3[e6] = r3[i3 ? 0 : 1] : r3.splice(i3, 1));
    else r3 !== t3 && r3.__eeOnceListener__ !== t3 || delete n3[e6];
    return this;
  }, i2 = function(e6) {
    var t3, n3, r3, o3, i3;
    if (v2.call(this, "__ee__") && (o3 = this.__ee__[e6])) if ("object" == typeof o3) {
      for (n3 = arguments.length, i3 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) i3[t3 - 1] = arguments[t3];
      for (o3 = o3.slice(), t3 = 0; r3 = o3[t3]; ++t3) d2.call(r3, this, i3);
    } else switch (arguments.length) {
      case 1:
        f2.call(o3, this);
        break;
      case 2:
        f2.call(o3, this, arguments[1]);
        break;
      case 3:
        f2.call(o3, this, arguments[1], arguments[2]);
        break;
      default:
        for (n3 = arguments.length, i3 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) i3[t3 - 1] = arguments[t3];
        d2.call(o3, this, i3);
    }
  }, a2 = { on: n2, once: r2, off: o2, emit: i2 }, s2 = { on: l2(n2), once: l2(r2), off: l2(o2), emit: l2(i2) }, u2 = g2({}, s2), e5.exports = t2 = function(e6) {
    return null == e6 ? p2(u2) : g2(Object(e6), s2);
  }, t2.methods = a2;
})(Tb, Tb.exports)), Tb.exports), $b = b(zb);
function Ub(e5) {
  var t2 = Gv.get(e5);
  return null == t2 && (t2 = $b(), Gv.set(e5, t2)), t2;
}
var Vb = /* @__PURE__ */ new WeakMap();
function Wb(e5, t2) {
  var n2 = Vb.get(e5);
  null == n2 && (n2 = /* @__PURE__ */ new Set(), Vb.set(e5, n2)), n2.add(t2);
}
var Gb = function(e5) {
  var t2 = e5;
  return t2.on = function(e6, n2) {
    var r2 = Ub(t2);
    if (r2.on(e6, n2), "destroyed" === e6 && Wb(t2, n2), "destroyed" !== e6) {
      var o2 = function() {
        return r2.off(e6, n2);
      };
      r2.on("destroyed", o2), Wb(t2, o2);
    }
  }, t2.once = function(e6, n2) {
    Ub(t2).once(e6, n2);
  }, t2.off = function(e6, n2) {
    Ub(t2).off(e6, n2);
  }, t2.emit = function(e6) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
    var o2 = Ub(t2);
    if (o2.emit.apply(o2, ev([e6], Qg(n2), false)), "destroyed" === e6) {
      var i2 = (function(e7) {
        return Vb.get(e7) || /* @__PURE__ */ new Set();
      })(t2);
      i2.forEach(function(e7) {
        return o2.off("destroyed", e7);
      }), (function(e7) {
        Vb.set(e7, /* @__PURE__ */ new Set());
      })(t2);
    }
  }, t2;
}, qb = function(e5) {
  var t2 = e5;
  return t2.setFragmentData = function(e6) {
    var n2 = t2.selection;
    if (n2) {
      var r2 = Qg(fg.edges(n2), 2), o2 = r2[0], i2 = r2[1], a2 = Kh.void(t2, { at: o2.path }), s2 = Kh.void(t2, { at: i2.path });
      if (!fg.isCollapsed(n2) || a2) {
        var u2 = _y.toDOMRange(t2, n2), l2 = u2.cloneContents(), c2 = l2.childNodes[0];
        if (l2.childNodes.forEach(function(e7) {
          e7.textContent && "" !== e7.textContent.trim() && (c2 = e7);
        }), s2) {
          var d2 = Qg(s2, 1)[0], f2 = u2.cloneRange(), p2 = _y.toDOMNode(t2, d2);
          f2.setEndAfter(p2), l2 = f2.cloneContents();
        }
        if (a2 && (c2 = l2.querySelector("[data-slate-spacer]")), Array.from(l2.querySelectorAll("[data-slate-zero-width]")).forEach(function(e7) {
          var t3 = "n" === e7.getAttribute("data-slate-zero-width");
          e7.textContent = t3 ? "\n" : "";
        }), Zm(c2)) {
          var h2 = c2.ownerDocument.createElement("span");
          h2.style.whiteSpace = "pre", h2.appendChild(c2), l2.appendChild(h2), c2 = h2;
        }
        var g2 = t2.getFragment(), v2 = JSON.stringify(g2), m2 = window.btoa(encodeURIComponent(v2));
        c2.setAttribute("data-slate-fragment", m2), e6.setData("application/x-slate-fragment", m2);
        var y2 = l2.ownerDocument.createElement("div");
        return y2.appendChild(l2), y2.setAttribute("hidden", "true"), l2.ownerDocument.body.appendChild(y2), e6.setData("text/html", y2.innerHTML), e6.setData("text/plain", ty(y2)), l2.ownerDocument.body.removeChild(y2), e6;
      }
    }
  }, t2.insertData = function(e6) {
    var n2, r2, o2 = e6.getData("application/x-slate-fragment");
    if (o2) {
      var i2 = decodeURIComponent(window.atob(o2)), a2 = JSON.parse(i2);
      t2.insertFragment(a2);
    } else {
      var s2 = e6.getData("text/plain"), u2 = e6.getData("text/html");
      if (u2) t2.dangerouslyInsertHtml(u2);
      else if (s2) {
        var l2 = s2.split(/\n\r|\r\n|\r|\n/), c2 = false;
        try {
          for (var d2 = Jg(l2), f2 = d2.next(); !f2.done; f2 = d2.next()) {
            var p2 = f2.value, h2 = _y.getLeftLengthOfMaxLength(t2);
            c2 && h2 > 0 && jg.splitNodes(t2, { always: true }), t2.insertText(p2), c2 = true;
          }
        } catch (e7) {
          n2 = { error: e7 };
        } finally {
          try {
            f2 && !f2.done && (r2 = d2.return) && r2.call(d2);
          } finally {
            if (n2) throw n2.error;
          }
        }
      }
    }
  }, t2;
}, Kb = function(e5) {
  var t2 = e5, n2 = t2.insertText, r2 = t2.insertNode, o2 = t2.insertFragment, i2 = t2.dangerouslyInsertHtml;
  return t2.insertText = function(e6) {
    if (t2.getConfig().maxLength) {
      var r3 = _y.getLeftLengthOfMaxLength(t2);
      r3 <= 0 || (r3 < e6.length ? n2(e6.slice(0, r3)) : n2(e6));
    } else n2(e6);
  }, t2.insertNode = function(e6) {
    if (t2.getConfig().maxLength) {
      var n3 = _y.getLeftLengthOfMaxLength(t2);
      if (!(n3 <= 0)) n3 < eg.string(e6).length || r2(e6);
    } else r2(e6);
  }, t2.insertFragment = function(e6) {
    if (t2.getConfig().maxLength) {
      if (e6.length > 0) {
        var n3 = e6[0];
        if (_y.getLeftLengthOfMaxLength(t2) < eg.string(n3).length) return;
        o2([n3]);
        for (var r3 = 1; r3 < e6.length; r3 += 1) t2.insertNode(e6[r3]);
      }
    } else o2(e6);
  }, t2.dangerouslyInsertHtml = function(e6, n3) {
    if (void 0 === e6 && (e6 = ""), void 0 === n3 && (n3 = false), e6) if (t2.getConfig().maxLength) {
      var r3 = _y.getLeftLengthOfMaxLength(t2);
      if (!(r3 <= 0)) {
        var o3 = document.createElement("div");
        o3.innerHTML = e6, r3 < Array.from(o3.childNodes).reduce(function(e7, t3) {
          var n4 = t3.nodeName;
          return t3 ? Zm(t3) ? e7 + (t3.textContent || "") : Ym(t3) ? Yv.has(n4.toLowerCase()) ? e7 : e7 + (t3.textContent || "") : e7 : e7;
        }, "").length || i2(e6, n3);
      }
    } else i2(e6, n3);
  }, t2;
};
function Yb(e5) {
  var t2 = _y.getTextarea(e5).$textAreaContainer, n2 = t2.width(), r2 = t2.height(), o2 = t2.offset();
  return { top: o2.top, left: o2.left, width: n2, height: r2 };
}
function Xb(e5) {
  var t2 = { top: "0", left: "0" }, n2 = e5.selection;
  if (null == n2) return t2;
  var r2 = Yb(e5);
  if (null == r2) return t2;
  var o2 = r2.top, i2 = r2.left, a2 = r2.width, s2 = r2.height, u2 = _y.toDOMRange(e5, n2).getClientRects(), l2 = u2 ? u2[0] : null;
  if (null == l2) return t2;
  var c2 = {}, d2 = l2.top - o2, f2 = l2.left - i2;
  if (f2 > a2 / 2) {
    var p2 = a2 - f2;
    c2.right = "".concat(p2 + 5, "px");
  } else c2.left = "".concat(f2 + 5, "px");
  if (d2 > s2 / 2) {
    var h2 = s2 - d2;
    c2.bottom = "".concat(h2 + 5, "px");
  } else {
    var g2 = u2[u2.length - 1], v2 = g2.top - o2 + g2.height;
    v2 < 0 && (v2 = 0), c2.top = "".concat(v2 + 5, "px");
  }
  return c2;
}
function Zb(e5, t2, n2) {
  void 0 === n2 && (n2 = "modal");
  var r2 = { top: "0", left: "0" };
  if (null == e5.selection) return r2;
  var o2 = $h.isElement(t2) && e5.isVoid(t2), i2 = $h.isElement(t2) && e5.isInline(t2), a2 = zv.get(t2);
  if (null == a2) return r2;
  var s2 = a2.getBoundingClientRect(), u2 = s2.top, l2 = s2.left, c2 = s2.height, d2 = s2.width;
  if (o2) {
    var f2 = (function(e6) {
      var t3 = [];
      t3.push(e6);
      for (var n3 = 0; t3.length > 0; ) {
        var r3 = t3.pop();
        if (null == r3) break;
        if ((n3 += 1) > 1e4) break;
        var o3 = r3.nodeName;
        if (r3.nodeType === Um.ELEMENT_NODE) {
          var i3 = o3.toLowerCase();
          if (Hm.includes(i3) || "iframe" === i3 || "video" === i3) return r3;
          var a3 = r3.children || [], s3 = a3.length;
          if (s3) for (var u3 = s3 - 1; u3 >= 0; u3 -= 1) t3.push(a3[u3]);
        }
      }
      return null;
    })(a2);
    if (null != f2) {
      var p2 = f2.getBoundingClientRect();
      u2 = p2.top, c2 = p2.height;
    }
  }
  var h2 = Yb(e5);
  if (null == h2) return r2;
  var g2 = h2.top, v2 = h2.left, m2 = h2.width, y2 = h2.height, b2 = {}, E2 = u2 - g2, C2 = l2 - v2;
  if ("bar" === n2) return b2.left = "".concat(C2, "px"), E2 > 40 ? b2.bottom = "".concat(y2 - E2 + 5, "px") : b2.top = "".concat(E2 + c2 + 5, "px"), b2;
  if ("modal" === n2) {
    if (o2 ? i2 ? C2 > (m2 - d2) / 2 ? b2.right = "".concat(m2 - C2 + 5, "px") : b2.left = "".concat(C2 + d2 + 5, "px") : b2.left = "20px" : b2.left = "".concat(C2, "px"), o2) (D2 = E2) < 0 && (D2 = 0), b2.top = "".concat(D2, "px");
    else if (E2 > (y2 - c2) / 2) b2.bottom = "".concat(y2 - E2 + 5, "px");
    else {
      var D2;
      (D2 = E2 + c2) < 0 && (D2 = 0), b2.top = "".concat(D2 + 5, "px");
    }
    return b2;
  }
  throw new Error("type '".concat(n2, "' is invalid"));
}
function Jb(e5, t2) {
  $m(function() {
    var n2 = Yb(e5);
    if (null != n2) {
      var r2, o2 = n2.top, i2 = n2.left, a2 = n2.width, s2 = n2.height, u2 = t2.offset(), l2 = u2.top, c2 = u2.left, d2 = t2.width(), f2 = t2.height(), p2 = l2 - o2, h2 = c2 - i2, g2 = t2.attr("style");
      if (g2.indexOf("top") >= 0) {
        if ((r2 = p2 + f2 - s2) > 0) {
          var v2 = t2.css("top"), m2 = parseInt(v2.toString(), 10) - r2;
          m2 < 0 && (m2 = 0), t2.css("top", "".concat(m2, "px"));
        }
      }
      if (g2.indexOf("bottom") >= 0 && l2 < 0) {
        var y2 = t2.css("bottom"), b2 = parseInt(y2.toString(), 10) - Math.abs(l2);
        t2.css("bottom", "".concat(b2, "px"));
      }
      if (g2.indexOf("left") >= 0) {
        if ((r2 = h2 + d2 - a2) > 0) {
          var E2 = t2.css("left"), C2 = parseInt(E2.toString(), 10) - r2;
          C2 < 0 && (C2 = 0), t2.css("left", "".concat(C2, "px"));
        }
      }
      if (g2.indexOf("right") >= 0 && c2 < 0) {
        var D2 = t2.css("right"), w2 = parseInt(D2.toString(), 10) - Math.abs(c2);
        t2.css("right", "".concat(w2, "px"));
      }
    }
  });
}
var Qb, eE, tE = function(e5) {
  var t2 = e5;
  return t2.select = function(e6) {
    jg.select(t2, e6);
  }, t2.deselect = function() {
    var n2 = t2.selection, r2 = _y.findDocumentOrShadowRoot(t2).getSelection();
    r2 && r2.rangeCount > 0 && r2.removeAllRanges(), n2 && jg.deselect(e5);
  }, t2.move = function(t3, n2) {
    void 0 === n2 && (n2 = false), t3 && (t3 < 0 || jg.move(e5, { distance: t3, unit: "character", reverse: n2 }));
  }, t2.moveReverse = function(e6) {
    t2.move(e6, true);
  }, t2.restoreSelection = function() {
    var e6 = Wv.get(t2);
    null != e6 && (t2.focus(), jg.select(t2, e6));
  }, t2.getSelectionPosition = function() {
    return Xb(t2);
  }, t2.getNodePosition = function(e6) {
    return Zb(t2, e6);
  }, t2.isSelectedAll = function() {
    var e6 = t2.selection;
    if (null == e6) return false;
    var n2 = Qg(fg.edges(e6), 2), r2 = n2[0], o2 = n2[1], i2 = Qg(Kh.edges(t2, []), 2), a2 = i2[0], s2 = i2[1];
    return !(!ug.equals(r2, a2) || !ug.equals(o2, s2));
  }, t2.selectAll = function() {
    var e6 = Kh.start(t2, []), n2 = Kh.end(t2, []);
    jg.select(t2, { anchor: e6, focus: n2 });
  }, t2;
};
var nE = (function() {
  if (eE) return Qb;
  eE = 1;
  var e5 = /^\s+|\s+$/g, t2 = /^[-+]0x[0-9a-f]+$/i, n2 = /^0b[01]+$/i, r2 = /^0o[0-7]+$/i, o2 = parseInt, i2 = "object" == typeof y && y && y.Object === Object && y, a2 = "object" == typeof self && self && self.Object === Object && self, s2 = i2 || a2 || Function("return this")(), u2 = Object.prototype.toString, l2 = Math.max, c2 = Math.min, d2 = function() {
    return s2.Date.now();
  };
  function f2(e6) {
    var t3 = typeof e6;
    return !!e6 && ("object" == t3 || "function" == t3);
  }
  function p2(i3) {
    if ("number" == typeof i3) return i3;
    if ((function(e6) {
      return "symbol" == typeof e6 || /* @__PURE__ */ (function(e7) {
        return !!e7 && "object" == typeof e7;
      })(e6) && "[object Symbol]" == u2.call(e6);
    })(i3)) return NaN;
    if (f2(i3)) {
      var a3 = "function" == typeof i3.valueOf ? i3.valueOf() : i3;
      i3 = f2(a3) ? a3 + "" : a3;
    }
    if ("string" != typeof i3) return 0 === i3 ? i3 : +i3;
    i3 = i3.replace(e5, "");
    var s3 = n2.test(i3);
    return s3 || r2.test(i3) ? o2(i3.slice(2), s3 ? 2 : 8) : t2.test(i3) ? NaN : +i3;
  }
  return Qb = function(e6, t3, n3) {
    var r3, o3, i3, a3, s3, u3, h2 = 0, g2 = false, v2 = false, m2 = true;
    if ("function" != typeof e6) throw new TypeError("Expected a function");
    function y2(t4) {
      var n4 = r3, i4 = o3;
      return r3 = o3 = void 0, h2 = t4, a3 = e6.apply(i4, n4);
    }
    function b2(e7) {
      var n4 = e7 - u3;
      return void 0 === u3 || n4 >= t3 || n4 < 0 || v2 && e7 - h2 >= i3;
    }
    function E2() {
      var e7 = d2();
      if (b2(e7)) return C2(e7);
      s3 = setTimeout(E2, (function(e8) {
        var n4 = t3 - (e8 - u3);
        return v2 ? c2(n4, i3 - (e8 - h2)) : n4;
      })(e7));
    }
    function C2(e7) {
      return s3 = void 0, m2 && r3 ? y2(e7) : (r3 = o3 = void 0, a3);
    }
    function D2() {
      var e7 = d2(), n4 = b2(e7);
      if (r3 = arguments, o3 = this, u3 = e7, n4) {
        if (void 0 === s3) return (function(e8) {
          return h2 = e8, s3 = setTimeout(E2, t3), g2 ? y2(e8) : a3;
        })(u3);
        if (v2) return s3 = setTimeout(E2, t3), y2(u3);
      }
      return void 0 === s3 && (s3 = setTimeout(E2, t3)), a3;
    }
    return t3 = p2(t3) || 0, f2(n3) && (g2 = !!n3.leading, i3 = (v2 = "maxWait" in n3) ? l2(p2(n3.maxWait) || 0, t3) : i3, m2 = "trailing" in n3 ? !!n3.trailing : m2), D2.cancel = function() {
      void 0 !== s3 && clearTimeout(s3), h2 = 0, r3 = u3 = o3 = s3 = void 0;
    }, D2.flush = function() {
      return void 0 === s3 ? a3 : C2(d2());
    }, D2;
  }, Qb;
})(), rE = b(nE);
const oE = (e5) => "string" == typeof e5, iE = () => {
  let e5, t2;
  const n2 = new Promise((n3, r2) => {
    e5 = n3, t2 = r2;
  });
  return n2.resolve = e5, n2.reject = t2, n2;
}, aE = (e5) => null == e5 ? "" : "" + e5, sE = /###/g, uE = (e5) => e5 && e5.indexOf("###") > -1 ? e5.replace(sE, ".") : e5, lE = (e5) => !e5 || oE(e5), cE = (e5, t2, n2) => {
  const r2 = oE(t2) ? t2.split(".") : t2;
  let o2 = 0;
  for (; o2 < r2.length - 1; ) {
    if (lE(e5)) return {};
    const t3 = uE(r2[o2]);
    !e5[t3] && n2 && (e5[t3] = new n2()), e5 = Object.prototype.hasOwnProperty.call(e5, t3) ? e5[t3] : {}, ++o2;
  }
  return lE(e5) ? {} : { obj: e5, k: uE(r2[o2]) };
}, dE = (e5, t2, n2) => {
  const { obj: r2, k: o2 } = cE(e5, t2, Object);
  if (void 0 !== r2 || 1 === t2.length) return void (r2[o2] = n2);
  let i2 = t2[t2.length - 1], a2 = t2.slice(0, t2.length - 1), s2 = cE(e5, a2, Object);
  for (; void 0 === s2.obj && a2.length; ) i2 = `${a2[a2.length - 1]}.${i2}`, a2 = a2.slice(0, a2.length - 1), s2 = cE(e5, a2, Object), s2 && s2.obj && void 0 !== s2.obj[`${s2.k}.${i2}`] && (s2.obj = void 0);
  s2.obj[`${s2.k}.${i2}`] = n2;
}, fE = (e5, t2) => {
  const { obj: n2, k: r2 } = cE(e5, t2);
  if (n2) return n2[r2];
}, pE = (e5, t2, n2) => {
  for (const r2 in t2) "__proto__" !== r2 && "constructor" !== r2 && (r2 in e5 ? oE(e5[r2]) || e5[r2] instanceof String || oE(t2[r2]) || t2[r2] instanceof String ? n2 && (e5[r2] = t2[r2]) : pE(e5[r2], t2[r2], n2) : e5[r2] = t2[r2]);
  return e5;
}, hE = (e5) => e5.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var gE = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
const vE = (e5) => oE(e5) ? e5.replace(/[&<>"'\/]/g, (e6) => gE[e6]) : e5;
const mE = [" ", ",", "?", "!", ";"], yE = new class {
  constructor(e5) {
    this.capacity = e5, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e5) {
    const t2 = this.regExpMap.get(e5);
    if (void 0 !== t2) return t2;
    const n2 = new RegExp(e5);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e5, n2), this.regExpQueue.push(e5), n2;
  }
}(20), bE = function(e5, t2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
  if (!e5) return;
  if (e5[t2]) return e5[t2];
  const r2 = t2.split(n2);
  let o2 = e5;
  for (let e6 = 0; e6 < r2.length; ) {
    if (!o2 || "object" != typeof o2) return;
    let t3, i2 = "";
    for (let a2 = e6; a2 < r2.length; ++a2) if (a2 !== e6 && (i2 += n2), i2 += r2[a2], t3 = o2[i2], void 0 !== t3) {
      if (["string", "number", "boolean"].indexOf(typeof t3) > -1 && a2 < r2.length - 1) continue;
      e6 += a2 - e6 + 1;
      break;
    }
    o2 = t3;
  }
  return o2;
}, EE = (e5) => e5 && e5.replace("_", "-"), CE = { type: "logger", log(e5) {
  this.output("log", e5);
}, warn(e5) {
  this.output("warn", e5);
}, error(e5) {
  this.output("error", e5);
}, output(e5, t2) {
  console && console[e5] && console[e5].apply(console, t2);
} };
class DE {
  constructor(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.init(e5, t2);
  }
  init(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.prefix = t2.prefix || "i18next:", this.logger = e5 || CE, this.options = t2, this.debug = t2.debug;
  }
  log() {
    for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++) t2[n2] = arguments[n2];
    return this.forward(t2, "log", "", true);
  }
  warn() {
    for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++) t2[n2] = arguments[n2];
    return this.forward(t2, "warn", "", true);
  }
  error() {
    for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++) t2[n2] = arguments[n2];
    return this.forward(t2, "error", "");
  }
  deprecate() {
    for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++) t2[n2] = arguments[n2];
    return this.forward(t2, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(e5, t2, n2, r2) {
    return r2 && !this.debug ? null : (oE(e5[0]) && (e5[0] = `${n2}${this.prefix} ${e5[0]}`), this.logger[t2](e5));
  }
  create(e5) {
    return new DE(this.logger, { prefix: `${this.prefix}:${e5}:`, ...this.options });
  }
  clone(e5) {
    return (e5 = e5 || this.options).prefix = e5.prefix || this.prefix, new DE(this.logger, e5);
  }
}
var wE = new DE();
class SE {
  constructor() {
    this.observers = {};
  }
  on(e5, t2) {
    return e5.split(" ").forEach((e6) => {
      this.observers[e6] || (this.observers[e6] = /* @__PURE__ */ new Map());
      const n2 = this.observers[e6].get(t2) || 0;
      this.observers[e6].set(t2, n2 + 1);
    }), this;
  }
  off(e5, t2) {
    this.observers[e5] && (t2 ? this.observers[e5].delete(t2) : delete this.observers[e5]);
  }
  emit(e5) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    if (this.observers[e5]) {
      Array.from(this.observers[e5].entries()).forEach((e6) => {
        let [t3, r3] = e6;
        for (let e7 = 0; e7 < r3; e7++) t3(...n2);
      });
    }
    if (this.observers["*"]) {
      Array.from(this.observers["*"].entries()).forEach((t3) => {
        let [r3, o2] = t3;
        for (let t4 = 0; t4 < o2; t4++) r3.apply(r3, [e5, ...n2]);
      });
    }
  }
}
class AE extends SE {
  constructor(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
    super(), this.data = e5 || {}, this.options = t2, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = true);
  }
  addNamespaces(e5) {
    this.options.ns.indexOf(e5) < 0 && this.options.ns.push(e5);
  }
  removeNamespaces(e5) {
    const t2 = this.options.ns.indexOf(e5);
    t2 > -1 && this.options.ns.splice(t2, 1);
  }
  getResource(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const o2 = void 0 !== r2.keySeparator ? r2.keySeparator : this.options.keySeparator, i2 = void 0 !== r2.ignoreJSONStructure ? r2.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a2;
    e5.indexOf(".") > -1 ? a2 = e5.split(".") : (a2 = [e5, t2], n2 && (Array.isArray(n2) ? a2.push(...n2) : oE(n2) && o2 ? a2.push(...n2.split(o2)) : a2.push(n2)));
    const s2 = fE(this.data, a2);
    return !s2 && !t2 && !n2 && e5.indexOf(".") > -1 && (e5 = a2[0], t2 = a2[1], n2 = a2.slice(2).join(".")), !s2 && i2 && oE(n2) ? bE(this.data && this.data[e5] && this.data[e5][t2], n2, o2) : s2;
  }
  addResource(e5, t2, n2, r2) {
    let o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: false };
    const i2 = void 0 !== o2.keySeparator ? o2.keySeparator : this.options.keySeparator;
    let a2 = [e5, t2];
    n2 && (a2 = a2.concat(i2 ? n2.split(i2) : n2)), e5.indexOf(".") > -1 && (a2 = e5.split("."), r2 = t2, t2 = a2[1]), this.addNamespaces(t2), dE(this.data, a2, r2), o2.silent || this.emit("added", e5, t2, n2, r2);
  }
  addResources(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: false };
    for (const r3 in n2) (oE(n2[r3]) || Array.isArray(n2[r3])) && this.addResource(e5, t2, r3, n2[r3], { silent: true });
    r2.silent || this.emit("added", e5, t2, n2);
  }
  addResourceBundle(e5, t2, n2, r2, o2) {
    let i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: false, skipCopy: false }, a2 = [e5, t2];
    e5.indexOf(".") > -1 && (a2 = e5.split("."), r2 = n2, n2 = t2, t2 = a2[1]), this.addNamespaces(t2);
    let s2 = fE(this.data, a2) || {};
    i2.skipCopy || (n2 = JSON.parse(JSON.stringify(n2))), r2 ? pE(s2, n2, o2) : s2 = { ...s2, ...n2 }, dE(this.data, a2, s2), i2.silent || this.emit("added", e5, t2, n2);
  }
  removeResourceBundle(e5, t2) {
    this.hasResourceBundle(e5, t2) && delete this.data[e5][t2], this.removeNamespaces(t2), this.emit("removed", e5, t2);
  }
  hasResourceBundle(e5, t2) {
    return void 0 !== this.getResource(e5, t2);
  }
  getResourceBundle(e5, t2) {
    return t2 || (t2 = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? { ...this.getResource(e5, t2) } : this.getResource(e5, t2);
  }
  getDataByLanguage(e5) {
    return this.data[e5];
  }
  hasLanguageSomeTranslations(e5) {
    const t2 = this.getDataByLanguage(e5);
    return !!(t2 && Object.keys(t2) || []).find((e6) => t2[e6] && Object.keys(t2[e6]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var xE = { processors: {}, addPostProcessor(e5) {
  this.processors[e5.name] = e5;
}, handle(e5, t2, n2, r2, o2) {
  return e5.forEach((e6) => {
    this.processors[e6] && (t2 = this.processors[e6].process(t2, n2, r2, o2));
  }), t2;
} };
const OE = {};
class NE extends SE {
  constructor(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), ((e6, t3, n2) => {
      e6.forEach((e7) => {
        t3[e7] && (n2[e7] = t3[e7]);
      });
    })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e5, this), this.options = t2, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = wE.create("translator");
  }
  changeLanguage(e5) {
    e5 && (this.language = e5);
  }
  exists(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
    if (null == e5) return false;
    const n2 = this.resolve(e5, t2);
    return n2 && void 0 !== n2.res;
  }
  extractFromKey(e5, t2) {
    let n2 = void 0 !== t2.nsSeparator ? t2.nsSeparator : this.options.nsSeparator;
    void 0 === n2 && (n2 = ":");
    const r2 = void 0 !== t2.keySeparator ? t2.keySeparator : this.options.keySeparator;
    let o2 = t2.ns || this.options.defaultNS || [];
    const i2 = n2 && e5.indexOf(n2) > -1, a2 = !(this.options.userDefinedKeySeparator || t2.keySeparator || this.options.userDefinedNsSeparator || t2.nsSeparator || ((e6, t3, n3) => {
      t3 = t3 || "", n3 = n3 || "";
      const r3 = mE.filter((e7) => t3.indexOf(e7) < 0 && n3.indexOf(e7) < 0);
      if (0 === r3.length) return true;
      const o3 = yE.getRegExp(`(${r3.map((e7) => "?" === e7 ? "\\?" : e7).join("|")})`);
      let i3 = !o3.test(e6);
      if (!i3) {
        const t4 = e6.indexOf(n3);
        t4 > 0 && !o3.test(e6.substring(0, t4)) && (i3 = true);
      }
      return i3;
    })(e5, n2, r2));
    if (i2 && !a2) {
      const t3 = e5.match(this.interpolator.nestingRegexp);
      if (t3 && t3.length > 0) return { key: e5, namespaces: oE(o2) ? [o2] : o2 };
      const i3 = e5.split(n2);
      (n2 !== r2 || n2 === r2 && this.options.ns.indexOf(i3[0]) > -1) && (o2 = i3.shift()), e5 = i3.join(r2);
    }
    return { key: e5, namespaces: oE(o2) ? [o2] : o2 };
  }
  translate(e5, t2, n2) {
    if ("object" != typeof t2 && this.options.overloadTranslationOptionHandler && (t2 = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t2 && (t2 = { ...t2 }), t2 || (t2 = {}), null == e5) return "";
    Array.isArray(e5) || (e5 = [String(e5)]);
    const r2 = void 0 !== t2.returnDetails ? t2.returnDetails : this.options.returnDetails, o2 = void 0 !== t2.keySeparator ? t2.keySeparator : this.options.keySeparator, { key: i2, namespaces: a2 } = this.extractFromKey(e5[e5.length - 1], t2), s2 = a2[a2.length - 1], u2 = t2.lng || this.language, l2 = t2.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u2 && "cimode" === u2.toLowerCase()) {
      if (l2) {
        const e6 = t2.nsSeparator || this.options.nsSeparator;
        return r2 ? { res: `${s2}${e6}${i2}`, usedKey: i2, exactUsedKey: i2, usedLng: u2, usedNS: s2, usedParams: this.getUsedParamsDetails(t2) } : `${s2}${e6}${i2}`;
      }
      return r2 ? { res: i2, usedKey: i2, exactUsedKey: i2, usedLng: u2, usedNS: s2, usedParams: this.getUsedParamsDetails(t2) } : i2;
    }
    const c2 = this.resolve(e5, t2);
    let d2 = c2 && c2.res;
    const f2 = c2 && c2.usedKey || i2, p2 = c2 && c2.exactUsedKey || i2, h2 = Object.prototype.toString.apply(d2), g2 = void 0 !== t2.joinArrays ? t2.joinArrays : this.options.joinArrays, v2 = !this.i18nFormat || this.i18nFormat.handleAsObject, m2 = !oE(d2) && "boolean" != typeof d2 && "number" != typeof d2;
    if (!(v2 && d2 && m2 && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h2) < 0) || oE(g2) && Array.isArray(d2)) if (v2 && oE(g2) && Array.isArray(d2)) d2 = d2.join(g2), d2 && (d2 = this.extendTranslation(d2, e5, t2, n2));
    else {
      let r3 = false, a3 = false;
      const l3 = void 0 !== t2.count && !oE(t2.count), f3 = NE.hasDefaultValue(t2), p3 = l3 ? this.pluralResolver.getSuffix(u2, t2.count, t2) : "", h3 = t2.ordinal && l3 ? this.pluralResolver.getSuffix(u2, t2.count, { ordinal: false }) : "", g3 = l3 && !t2.ordinal && 0 === t2.count && this.pluralResolver.shouldUseIntlApi(), v3 = g3 && t2[`defaultValue${this.options.pluralSeparator}zero`] || t2[`defaultValue${p3}`] || t2[`defaultValue${h3}`] || t2.defaultValue;
      !this.isValidLookup(d2) && f3 && (r3 = true, d2 = v3), this.isValidLookup(d2) || (a3 = true, d2 = i2);
      const m3 = (t2.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a3 ? void 0 : d2, y2 = f3 && v3 !== d2 && this.options.updateMissing;
      if (a3 || r3 || y2) {
        if (this.logger.log(y2 ? "updateKey" : "missingKey", u2, s2, i2, y2 ? v3 : d2), o2) {
          const e7 = this.resolve(i2, { ...t2, keySeparator: false });
          e7 && e7.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let e6 = [];
        const n3 = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t2.lng || this.language);
        if ("fallback" === this.options.saveMissingTo && n3 && n3[0]) for (let t3 = 0; t3 < n3.length; t3++) e6.push(n3[t3]);
        else "all" === this.options.saveMissingTo ? e6 = this.languageUtils.toResolveHierarchy(t2.lng || this.language) : e6.push(t2.lng || this.language);
        const r4 = (e7, n4, r5) => {
          const o3 = f3 && r5 !== d2 ? r5 : m3;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(e7, s2, n4, o3, y2, t2) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e7, s2, n4, o3, y2, t2), this.emit("missingKey", e7, s2, n4, d2);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && l3 ? e6.forEach((e7) => {
          const n4 = this.pluralResolver.getSuffixes(e7, t2);
          g3 && t2[`defaultValue${this.options.pluralSeparator}zero`] && n4.indexOf(`${this.options.pluralSeparator}zero`) < 0 && n4.push(`${this.options.pluralSeparator}zero`), n4.forEach((n5) => {
            r4([e7], i2 + n5, t2[`defaultValue${n5}`] || v3);
          });
        }) : r4(e6, i2, v3));
      }
      d2 = this.extendTranslation(d2, e5, t2, c2, n2), a3 && d2 === i2 && this.options.appendNamespaceToMissingKey && (d2 = `${s2}:${i2}`), (a3 || r3) && this.options.parseMissingKeyHandler && (d2 = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s2}:${i2}` : i2, r3 ? d2 : void 0) : this.options.parseMissingKeyHandler(d2));
    }
    else {
      if (!t2.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const e6 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f2, d2, { ...t2, ns: a2 }) : `key '${i2} (${this.language})' returned an object instead of string.`;
        return r2 ? (c2.res = e6, c2.usedParams = this.getUsedParamsDetails(t2), c2) : e6;
      }
      if (o2) {
        const e6 = Array.isArray(d2), n3 = e6 ? [] : {}, r3 = e6 ? p2 : f2;
        for (const e7 in d2) if (Object.prototype.hasOwnProperty.call(d2, e7)) {
          const i3 = `${r3}${o2}${e7}`;
          n3[e7] = this.translate(i3, { ...t2, joinArrays: false, ns: a2 }), n3[e7] === i3 && (n3[e7] = d2[e7]);
        }
        d2 = n3;
      }
    }
    return r2 ? (c2.res = d2, c2.usedParams = this.getUsedParamsDetails(t2), c2) : d2;
  }
  extendTranslation(e5, t2, n2, r2, o2) {
    var i2 = this;
    if (this.i18nFormat && this.i18nFormat.parse) e5 = this.i18nFormat.parse(e5, { ...this.options.interpolation.defaultVariables, ...n2 }, n2.lng || this.language || r2.usedLng, r2.usedNS, r2.usedKey, { resolved: r2 });
    else if (!n2.skipInterpolation) {
      n2.interpolation && this.interpolator.init({ ...n2, interpolation: { ...this.options.interpolation, ...n2.interpolation } });
      const a3 = oE(e5) && (n2 && n2.interpolation && void 0 !== n2.interpolation.skipOnVariables ? n2.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let s3;
      if (a3) {
        const t3 = e5.match(this.interpolator.nestingRegexp);
        s3 = t3 && t3.length;
      }
      let u2 = n2.replace && !oE(n2.replace) ? n2.replace : n2;
      if (this.options.interpolation.defaultVariables && (u2 = { ...this.options.interpolation.defaultVariables, ...u2 }), e5 = this.interpolator.interpolate(e5, u2, n2.lng || this.language || r2.usedLng, n2), a3) {
        const t3 = e5.match(this.interpolator.nestingRegexp);
        s3 < (t3 && t3.length) && (n2.nest = false);
      }
      !n2.lng && "v1" !== this.options.compatibilityAPI && r2 && r2.res && (n2.lng = this.language || r2.usedLng), false !== n2.nest && (e5 = this.interpolator.nest(e5, function() {
        for (var e6 = arguments.length, r3 = new Array(e6), a4 = 0; a4 < e6; a4++) r3[a4] = arguments[a4];
        return o2 && o2[0] === r3[0] && !n2.context ? (i2.logger.warn(`It seems you are nesting recursively key: ${r3[0]} in key: ${t2[0]}`), null) : i2.translate(...r3, t2);
      }, n2)), n2.interpolation && this.interpolator.reset();
    }
    const a2 = n2.postProcess || this.options.postProcess, s2 = oE(a2) ? [a2] : a2;
    return null != e5 && s2 && s2.length && false !== n2.applyPostProcessor && (e5 = xE.handle(s2, e5, t2, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...r2, usedParams: this.getUsedParamsDetails(n2) }, ...n2 } : n2, this)), e5;
  }
  resolve(e5) {
    let t2, n2, r2, o2, i2, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return oE(e5) && (e5 = [e5]), e5.forEach((e6) => {
      if (this.isValidLookup(t2)) return;
      const s2 = this.extractFromKey(e6, a2), u2 = s2.key;
      n2 = u2;
      let l2 = s2.namespaces;
      this.options.fallbackNS && (l2 = l2.concat(this.options.fallbackNS));
      const c2 = void 0 !== a2.count && !oE(a2.count), d2 = c2 && !a2.ordinal && 0 === a2.count && this.pluralResolver.shouldUseIntlApi(), f2 = void 0 !== a2.context && (oE(a2.context) || "number" == typeof a2.context) && "" !== a2.context, p2 = a2.lngs ? a2.lngs : this.languageUtils.toResolveHierarchy(a2.lng || this.language, a2.fallbackLng);
      l2.forEach((e7) => {
        this.isValidLookup(t2) || (i2 = e7, !OE[`${p2[0]}-${e7}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(i2) && (OE[`${p2[0]}-${e7}`] = true, this.logger.warn(`key "${n2}" for languages "${p2.join(", ")}" won't get resolved as namespace "${i2}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p2.forEach((n3) => {
          if (this.isValidLookup(t2)) return;
          o2 = n3;
          const i3 = [u2];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(i3, u2, n3, e7, a2);
          else {
            let e8;
            c2 && (e8 = this.pluralResolver.getSuffix(n3, a2.count, a2));
            const t3 = `${this.options.pluralSeparator}zero`, r3 = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (c2 && (i3.push(u2 + e8), a2.ordinal && 0 === e8.indexOf(r3) && i3.push(u2 + e8.replace(r3, this.options.pluralSeparator)), d2 && i3.push(u2 + t3)), f2) {
              const n4 = `${u2}${this.options.contextSeparator}${a2.context}`;
              i3.push(n4), c2 && (i3.push(n4 + e8), a2.ordinal && 0 === e8.indexOf(r3) && i3.push(n4 + e8.replace(r3, this.options.pluralSeparator)), d2 && i3.push(n4 + t3));
            }
          }
          let s3;
          for (; s3 = i3.pop(); ) this.isValidLookup(t2) || (r2 = s3, t2 = this.getResource(n3, e7, s3, a2));
        }));
      });
    }), { res: t2, usedKey: n2, exactUsedKey: r2, usedLng: o2, usedNS: i2 };
  }
  isValidLookup(e5) {
    return !(void 0 === e5 || !this.options.returnNull && null === e5 || !this.options.returnEmptyString && "" === e5);
  }
  getResource(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e5, t2, n2, r2) : this.resourceStore.getResource(e5, t2, n2, r2);
  }
  getUsedParamsDetails() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t2 = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n2 = e5.replace && !oE(e5.replace);
    let r2 = n2 ? e5.replace : e5;
    if (n2 && void 0 !== e5.count && (r2.count = e5.count), this.options.interpolation.defaultVariables && (r2 = { ...this.options.interpolation.defaultVariables, ...r2 }), !n2) {
      r2 = { ...r2 };
      for (const e6 of t2) delete r2[e6];
    }
    return r2;
  }
  static hasDefaultValue(e5) {
    const t2 = "defaultValue";
    for (const n2 in e5) if (Object.prototype.hasOwnProperty.call(e5, n2) && t2 === n2.substring(0, 12) && void 0 !== e5[n2]) return true;
    return false;
  }
}
const BE = (e5) => e5.charAt(0).toUpperCase() + e5.slice(1);
class TE {
  constructor(e5) {
    this.options = e5, this.supportedLngs = this.options.supportedLngs || false, this.logger = wE.create("languageUtils");
  }
  getScriptPartFromCode(e5) {
    if (!(e5 = EE(e5)) || e5.indexOf("-") < 0) return null;
    const t2 = e5.split("-");
    return 2 === t2.length ? null : (t2.pop(), "x" === t2[t2.length - 1].toLowerCase() ? null : this.formatLanguageCode(t2.join("-")));
  }
  getLanguagePartFromCode(e5) {
    if (!(e5 = EE(e5)) || e5.indexOf("-") < 0) return e5;
    const t2 = e5.split("-");
    return this.formatLanguageCode(t2[0]);
  }
  formatLanguageCode(e5) {
    if (oE(e5) && e5.indexOf("-") > -1) {
      if ("undefined" != typeof Intl && void 0 !== Intl.getCanonicalLocales) try {
        let t3 = Intl.getCanonicalLocales(e5)[0];
        if (t3 && this.options.lowerCaseLng && (t3 = t3.toLowerCase()), t3) return t3;
      } catch (e6) {
      }
      const t2 = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n2 = e5.split("-");
      return this.options.lowerCaseLng ? n2 = n2.map((e6) => e6.toLowerCase()) : 2 === n2.length ? (n2[0] = n2[0].toLowerCase(), n2[1] = n2[1].toUpperCase(), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = BE(n2[1].toLowerCase()))) : 3 === n2.length && (n2[0] = n2[0].toLowerCase(), 2 === n2[1].length && (n2[1] = n2[1].toUpperCase()), "sgn" !== n2[0] && 2 === n2[2].length && (n2[2] = n2[2].toUpperCase()), t2.indexOf(n2[1].toLowerCase()) > -1 && (n2[1] = BE(n2[1].toLowerCase())), t2.indexOf(n2[2].toLowerCase()) > -1 && (n2[2] = BE(n2[2].toLowerCase()))), n2.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e5.toLowerCase() : e5;
  }
  isSupportedCode(e5) {
    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e5 = this.getLanguagePartFromCode(e5)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e5) > -1;
  }
  getBestMatchFromCodes(e5) {
    if (!e5) return null;
    let t2;
    return e5.forEach((e6) => {
      if (t2) return;
      const n2 = this.formatLanguageCode(e6);
      this.options.supportedLngs && !this.isSupportedCode(n2) || (t2 = n2);
    }), !t2 && this.options.supportedLngs && e5.forEach((e6) => {
      if (t2) return;
      const n2 = this.getLanguagePartFromCode(e6);
      if (this.isSupportedCode(n2)) return t2 = n2;
      t2 = this.options.supportedLngs.find((e7) => e7 === n2 ? e7 : e7.indexOf("-") < 0 && n2.indexOf("-") < 0 ? void 0 : e7.indexOf("-") > 0 && n2.indexOf("-") < 0 && e7.substring(0, e7.indexOf("-")) === n2 || 0 === e7.indexOf(n2) && n2.length > 1 ? e7 : void 0);
    }), t2 || (t2 = this.getFallbackCodes(this.options.fallbackLng)[0]), t2;
  }
  getFallbackCodes(e5, t2) {
    if (!e5) return [];
    if ("function" == typeof e5 && (e5 = e5(t2)), oE(e5) && (e5 = [e5]), Array.isArray(e5)) return e5;
    if (!t2) return e5.default || [];
    let n2 = e5[t2];
    return n2 || (n2 = e5[this.getScriptPartFromCode(t2)]), n2 || (n2 = e5[this.formatLanguageCode(t2)]), n2 || (n2 = e5[this.getLanguagePartFromCode(t2)]), n2 || (n2 = e5.default), n2 || [];
  }
  toResolveHierarchy(e5, t2) {
    const n2 = this.getFallbackCodes(t2 || this.options.fallbackLng || [], e5), r2 = [], o2 = (e6) => {
      e6 && (this.isSupportedCode(e6) ? r2.push(e6) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e6}`));
    };
    return oE(e5) && (e5.indexOf("-") > -1 || e5.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && o2(this.formatLanguageCode(e5)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o2(this.getScriptPartFromCode(e5)), "currentOnly" !== this.options.load && o2(this.getLanguagePartFromCode(e5))) : oE(e5) && o2(this.formatLanguageCode(e5)), n2.forEach((e6) => {
      r2.indexOf(e6) < 0 && o2(this.formatLanguageCode(e6));
    }), r2;
  }
}
let kE = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], FE = { 1: (e5) => Number(e5 > 1), 2: (e5) => Number(1 != e5), 3: (e5) => 0, 4: (e5) => Number(e5 % 10 == 1 && e5 % 100 != 11 ? 0 : e5 % 10 >= 2 && e5 % 10 <= 4 && (e5 % 100 < 10 || e5 % 100 >= 20) ? 1 : 2), 5: (e5) => Number(0 == e5 ? 0 : 1 == e5 ? 1 : 2 == e5 ? 2 : e5 % 100 >= 3 && e5 % 100 <= 10 ? 3 : e5 % 100 >= 11 ? 4 : 5), 6: (e5) => Number(1 == e5 ? 0 : e5 >= 2 && e5 <= 4 ? 1 : 2), 7: (e5) => Number(1 == e5 ? 0 : e5 % 10 >= 2 && e5 % 10 <= 4 && (e5 % 100 < 10 || e5 % 100 >= 20) ? 1 : 2), 8: (e5) => Number(1 == e5 ? 0 : 2 == e5 ? 1 : 8 != e5 && 11 != e5 ? 2 : 3), 9: (e5) => Number(e5 >= 2), 10: (e5) => Number(1 == e5 ? 0 : 2 == e5 ? 1 : e5 < 7 ? 2 : e5 < 11 ? 3 : 4), 11: (e5) => Number(1 == e5 || 11 == e5 ? 0 : 2 == e5 || 12 == e5 ? 1 : e5 > 2 && e5 < 20 ? 2 : 3), 12: (e5) => Number(e5 % 10 != 1 || e5 % 100 == 11), 13: (e5) => Number(0 !== e5), 14: (e5) => Number(1 == e5 ? 0 : 2 == e5 ? 1 : 3 == e5 ? 2 : 3), 15: (e5) => Number(e5 % 10 == 1 && e5 % 100 != 11 ? 0 : e5 % 10 >= 2 && (e5 % 100 < 10 || e5 % 100 >= 20) ? 1 : 2), 16: (e5) => Number(e5 % 10 == 1 && e5 % 100 != 11 ? 0 : 0 !== e5 ? 1 : 2), 17: (e5) => Number(1 == e5 || e5 % 10 == 1 && e5 % 100 != 11 ? 0 : 1), 18: (e5) => Number(0 == e5 ? 0 : 1 == e5 ? 1 : 2), 19: (e5) => Number(1 == e5 ? 0 : 0 == e5 || e5 % 100 > 1 && e5 % 100 < 11 ? 1 : e5 % 100 > 10 && e5 % 100 < 20 ? 2 : 3), 20: (e5) => Number(1 == e5 ? 0 : 0 == e5 || e5 % 100 > 0 && e5 % 100 < 20 ? 1 : 2), 21: (e5) => Number(e5 % 100 == 1 ? 1 : e5 % 100 == 2 ? 2 : e5 % 100 == 3 || e5 % 100 == 4 ? 3 : 0), 22: (e5) => Number(1 == e5 ? 0 : 2 == e5 ? 1 : (e5 < 0 || e5 > 10) && e5 % 10 == 0 ? 2 : 3) };
const IE = ["v1", "v2", "v3"], PE = ["v4"], _E = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
class RE {
  constructor(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.languageUtils = e5, this.options = t2, this.logger = wE.create("pluralResolver"), this.options.compatibilityJSON && !PE.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = (() => {
      const e6 = {};
      return kE.forEach((t3) => {
        t3.lngs.forEach((n2) => {
          e6[n2] = { numbers: t3.nr, plurals: FE[t3.fc] };
        });
      }), e6;
    })(), this.pluralRulesCache = {};
  }
  addRule(e5, t2) {
    this.rules[e5] = t2;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const n2 = EE("dev" === e5 ? "en" : e5), r2 = t2.ordinal ? "ordinal" : "cardinal", o2 = JSON.stringify({ cleanedCode: n2, type: r2 });
      if (o2 in this.pluralRulesCache) return this.pluralRulesCache[o2];
      let i2;
      try {
        i2 = new Intl.PluralRules(n2, { type: r2 });
      } catch (n3) {
        if (!e5.match(/-|_/)) return;
        const r3 = this.languageUtils.getLanguagePartFromCode(e5);
        i2 = this.getRule(r3, t2);
      }
      return this.pluralRulesCache[o2] = i2, i2;
    }
    return this.rules[e5] || this.rules[this.languageUtils.getLanguagePartFromCode(e5)];
  }
  needsPlural(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n2 = this.getRule(e5, t2);
    return this.shouldUseIntlApi() ? n2 && n2.resolvedOptions().pluralCategories.length > 1 : n2 && n2.numbers.length > 1;
  }
  getPluralFormsOfKey(e5, t2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return this.getSuffixes(e5, n2).map((e6) => `${t2}${e6}`);
  }
  getSuffixes(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n2 = this.getRule(e5, t2);
    return n2 ? this.shouldUseIntlApi() ? n2.resolvedOptions().pluralCategories.sort((e6, t3) => _E[e6] - _E[t3]).map((e6) => `${this.options.prepend}${t2.ordinal ? `ordinal${this.options.prepend}` : ""}${e6}`) : n2.numbers.map((n3) => this.getSuffix(e5, n3, t2)) : [];
  }
  getSuffix(e5, t2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r2 = this.getRule(e5, n2);
    return r2 ? this.shouldUseIntlApi() ? `${this.options.prepend}${n2.ordinal ? `ordinal${this.options.prepend}` : ""}${r2.select(t2)}` : this.getSuffixRetroCompatible(r2, t2) : (this.logger.warn(`no plural rule found for: ${e5}`), "");
  }
  getSuffixRetroCompatible(e5, t2) {
    const n2 = e5.noAbs ? e5.plurals(t2) : e5.plurals(Math.abs(t2));
    let r2 = e5.numbers[n2];
    this.options.simplifyPluralSuffix && 2 === e5.numbers.length && 1 === e5.numbers[0] && (2 === r2 ? r2 = "plural" : 1 === r2 && (r2 = ""));
    const o2 = () => this.options.prepend && r2.toString() ? this.options.prepend + r2.toString() : r2.toString();
    return "v1" === this.options.compatibilityJSON ? 1 === r2 ? "" : "number" == typeof r2 ? `_plural_${r2.toString()}` : o2() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e5.numbers.length && 1 === e5.numbers[0] ? o2() : this.options.prepend && n2.toString() ? this.options.prepend + n2.toString() : n2.toString();
  }
  shouldUseIntlApi() {
    return !IE.includes(this.options.compatibilityJSON);
  }
}
const LE = function(e5, t2, n2) {
  let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".", o2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i2 = ((e6, t3, n3) => {
    const r3 = fE(e6, n3);
    return void 0 !== r3 ? r3 : fE(t3, n3);
  })(e5, t2, n2);
  return !i2 && o2 && oE(n2) && (i2 = bE(e5, n2, r2), void 0 === i2 && (i2 = bE(t2, n2, r2))), i2;
}, ME = (e5) => e5.replace(/\$/g, "$$$$");
class jE {
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.logger = wE.create("interpolator"), this.options = e5, this.format = e5.interpolation && e5.interpolation.format || ((e6) => e6), this.init(e5);
  }
  init() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e5.interpolation || (e5.interpolation = { escapeValue: true });
    const { escape: t2, escapeValue: n2, useRawValueToEscape: r2, prefix: o2, prefixEscaped: i2, suffix: a2, suffixEscaped: s2, formatSeparator: u2, unescapeSuffix: l2, unescapePrefix: c2, nestingPrefix: d2, nestingPrefixEscaped: f2, nestingSuffix: p2, nestingSuffixEscaped: h2, nestingOptionsSeparator: g2, maxReplaces: v2, alwaysFormat: m2 } = e5.interpolation;
    this.escape = void 0 !== t2 ? t2 : vE, this.escapeValue = void 0 === n2 || n2, this.useRawValueToEscape = void 0 !== r2 && r2, this.prefix = o2 ? hE(o2) : i2 || "{{", this.suffix = a2 ? hE(a2) : s2 || "}}", this.formatSeparator = u2 || ",", this.unescapePrefix = l2 ? "" : c2 || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l2 || "", this.nestingPrefix = d2 ? hE(d2) : f2 || hE("$t("), this.nestingSuffix = p2 ? hE(p2) : h2 || hE(")"), this.nestingOptionsSeparator = g2 || ",", this.maxReplaces = v2 || 1e3, this.alwaysFormat = void 0 !== m2 && m2, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e5 = (e6, t2) => e6 && e6.source === t2 ? (e6.lastIndex = 0, e6) : new RegExp(t2, "g");
    this.regexp = e5(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e5(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e5(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e5, t2, n2, r2) {
    let o2, i2, a2;
    const s2 = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u2 = (e6) => {
      if (e6.indexOf(this.formatSeparator) < 0) {
        const o4 = LE(t2, s2, e6, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(o4, void 0, n2, { ...r2, ...t2, interpolationkey: e6 }) : o4;
      }
      const o3 = e6.split(this.formatSeparator), i3 = o3.shift().trim(), a3 = o3.join(this.formatSeparator).trim();
      return this.format(LE(t2, s2, i3, this.options.keySeparator, this.options.ignoreJSONStructure), a3, n2, { ...r2, ...t2, interpolationkey: i3 });
    };
    this.resetRegExp();
    const l2 = r2 && r2.missingInterpolationHandler || this.options.missingInterpolationHandler, c2 = r2 && r2.interpolation && void 0 !== r2.interpolation.skipOnVariables ? r2.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, d2 = [{ regex: this.regexpUnescape, safeValue: (e6) => ME(e6) }, { regex: this.regexp, safeValue: (e6) => this.escapeValue ? ME(this.escape(e6)) : ME(e6) }];
    return d2.forEach((t3) => {
      for (a2 = 0; o2 = t3.regex.exec(e5); ) {
        const n3 = o2[1].trim();
        if (i2 = u2(n3), void 0 === i2) if ("function" == typeof l2) {
          const t4 = l2(e5, o2, r2);
          i2 = oE(t4) ? t4 : "";
        } else if (r2 && Object.prototype.hasOwnProperty.call(r2, n3)) i2 = "";
        else {
          if (c2) {
            i2 = o2[0];
            continue;
          }
          this.logger.warn(`missed to pass in variable ${n3} for interpolating ${e5}`), i2 = "";
        }
        else oE(i2) || this.useRawValueToEscape || (i2 = aE(i2));
        const s3 = t3.safeValue(i2);
        if (e5 = e5.replace(o2[0], s3), c2 ? (t3.regex.lastIndex += i2.length, t3.regex.lastIndex -= o2[0].length) : t3.regex.lastIndex = 0, a2++, a2 >= this.maxReplaces) break;
      }
    }), e5;
  }
  nest(e5, t2) {
    let n2, r2, o2, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const a2 = (e6, t3) => {
      const n3 = this.nestingOptionsSeparator;
      if (e6.indexOf(n3) < 0) return e6;
      const r3 = e6.split(new RegExp(`${n3}[ ]*{`));
      let i3 = `{${r3[1]}`;
      e6 = r3[0], i3 = this.interpolate(i3, o2);
      const a3 = i3.match(/'/g), s2 = i3.match(/"/g);
      (a3 && a3.length % 2 == 0 && !s2 || s2.length % 2 != 0) && (i3 = i3.replace(/'/g, '"'));
      try {
        o2 = JSON.parse(i3), t3 && (o2 = { ...t3, ...o2 });
      } catch (t4) {
        return this.logger.warn(`failed parsing options string in nesting for key ${e6}`, t4), `${e6}${n3}${i3}`;
      }
      return o2.defaultValue && o2.defaultValue.indexOf(this.prefix) > -1 && delete o2.defaultValue, e6;
    };
    for (; n2 = this.nestingRegexp.exec(e5); ) {
      let s2 = [];
      o2 = { ...i2 }, o2 = o2.replace && !oE(o2.replace) ? o2.replace : o2, o2.applyPostProcessor = false, delete o2.defaultValue;
      let u2 = false;
      if (-1 !== n2[0].indexOf(this.formatSeparator) && !/{.*}/.test(n2[1])) {
        const e6 = n2[1].split(this.formatSeparator).map((e7) => e7.trim());
        n2[1] = e6.shift(), s2 = e6, u2 = true;
      }
      if (r2 = t2(a2.call(this, n2[1].trim(), o2), o2), r2 && n2[0] === e5 && !oE(r2)) return r2;
      oE(r2) || (r2 = aE(r2)), r2 || (this.logger.warn(`missed to resolve ${n2[1]} for nesting ${e5}`), r2 = ""), u2 && (r2 = s2.reduce((e6, t3) => this.format(e6, t3, i2.lng, { ...i2, interpolationkey: n2[1].trim() }), r2.trim())), e5 = e5.replace(n2[0], r2), this.regexp.lastIndex = 0;
    }
    return e5;
  }
}
const HE = (e5) => {
  const t2 = {};
  return (n2, r2, o2) => {
    let i2 = o2;
    o2 && o2.interpolationkey && o2.formatParams && o2.formatParams[o2.interpolationkey] && o2[o2.interpolationkey] && (i2 = { ...i2, [o2.interpolationkey]: void 0 });
    const a2 = r2 + JSON.stringify(i2);
    let s2 = t2[a2];
    return s2 || (s2 = e5(EE(r2), o2), t2[a2] = s2), s2(n2);
  };
};
class zE {
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.logger = wE.create("formatter"), this.options = e5, this.formats = { number: HE((e6, t2) => {
      const n2 = new Intl.NumberFormat(e6, { ...t2 });
      return (e7) => n2.format(e7);
    }), currency: HE((e6, t2) => {
      const n2 = new Intl.NumberFormat(e6, { ...t2, style: "currency" });
      return (e7) => n2.format(e7);
    }), datetime: HE((e6, t2) => {
      const n2 = new Intl.DateTimeFormat(e6, { ...t2 });
      return (e7) => n2.format(e7);
    }), relativetime: HE((e6, t2) => {
      const n2 = new Intl.RelativeTimeFormat(e6, { ...t2 });
      return (e7) => n2.format(e7, t2.range || "day");
    }), list: HE((e6, t2) => {
      const n2 = new Intl.ListFormat(e6, { ...t2 });
      return (e7) => n2.format(e7);
    }) }, this.init(e5);
  }
  init(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
    this.formatSeparator = t2.interpolation.formatSeparator || ",";
  }
  add(e5, t2) {
    this.formats[e5.toLowerCase().trim()] = t2;
  }
  addCached(e5, t2) {
    this.formats[e5.toLowerCase().trim()] = HE(t2);
  }
  format(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const o2 = t2.split(this.formatSeparator);
    if (o2.length > 1 && o2[0].indexOf("(") > 1 && o2[0].indexOf(")") < 0 && o2.find((e6) => e6.indexOf(")") > -1)) {
      const e6 = o2.findIndex((e7) => e7.indexOf(")") > -1);
      o2[0] = [o2[0], ...o2.splice(1, e6)].join(this.formatSeparator);
    }
    const i2 = o2.reduce((e6, t3) => {
      const { formatName: o3, formatOptions: i3 } = ((e7) => {
        let t4 = e7.toLowerCase().trim();
        const n3 = {};
        if (e7.indexOf("(") > -1) {
          const r3 = e7.split("(");
          t4 = r3[0].toLowerCase().trim();
          const o4 = r3[1].substring(0, r3[1].length - 1);
          "currency" === t4 && o4.indexOf(":") < 0 ? n3.currency || (n3.currency = o4.trim()) : "relativetime" === t4 && o4.indexOf(":") < 0 ? n3.range || (n3.range = o4.trim()) : o4.split(";").forEach((e8) => {
            if (e8) {
              const [t5, ...r4] = e8.split(":"), o5 = r4.join(":").trim().replace(/^'+|'+$/g, ""), i4 = t5.trim();
              n3[i4] || (n3[i4] = o5), "false" === o5 && (n3[i4] = false), "true" === o5 && (n3[i4] = true), isNaN(o5) || (n3[i4] = parseInt(o5, 10));
            }
          });
        }
        return { formatName: t4, formatOptions: n3 };
      })(t3);
      if (this.formats[o3]) {
        let t4 = e6;
        try {
          const a2 = r2 && r2.formatParams && r2.formatParams[r2.interpolationkey] || {}, s2 = a2.locale || a2.lng || r2.locale || r2.lng || n2;
          t4 = this.formats[o3](e6, s2, { ...i3, ...r2, ...a2 });
        } catch (e7) {
          this.logger.warn(e7);
        }
        return t4;
      }
      return this.logger.warn(`there was no format function for ${o3}`), e6;
    }, e5);
    return i2;
  }
}
class $E extends SE {
  constructor(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    super(), this.backend = e5, this.store = t2, this.services = n2, this.languageUtils = n2.languageUtils, this.options = r2, this.logger = wE.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r2.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r2.maxRetries >= 0 ? r2.maxRetries : 5, this.retryTimeout = r2.retryTimeout >= 1 ? r2.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n2, r2.backend, r2);
  }
  queueLoad(e5, t2, n2, r2) {
    const o2 = {}, i2 = {}, a2 = {}, s2 = {};
    return e5.forEach((e6) => {
      let r3 = true;
      t2.forEach((t3) => {
        const a3 = `${e6}|${t3}`;
        !n2.reload && this.store.hasResourceBundle(e6, t3) ? this.state[a3] = 2 : this.state[a3] < 0 || (1 === this.state[a3] ? void 0 === i2[a3] && (i2[a3] = true) : (this.state[a3] = 1, r3 = false, void 0 === i2[a3] && (i2[a3] = true), void 0 === o2[a3] && (o2[a3] = true), void 0 === s2[t3] && (s2[t3] = true)));
      }), r3 || (a2[e6] = true);
    }), (Object.keys(o2).length || Object.keys(i2).length) && this.queue.push({ pending: i2, pendingCount: Object.keys(i2).length, loaded: {}, errors: [], callback: r2 }), { toLoad: Object.keys(o2), pending: Object.keys(i2), toLoadLanguages: Object.keys(a2), toLoadNamespaces: Object.keys(s2) };
  }
  loaded(e5, t2, n2) {
    const r2 = e5.split("|"), o2 = r2[0], i2 = r2[1];
    t2 && this.emit("failedLoading", o2, i2, t2), !t2 && n2 && this.store.addResourceBundle(o2, i2, n2, void 0, void 0, { skipCopy: true }), this.state[e5] = t2 ? -1 : 2, t2 && n2 && (this.state[e5] = 0);
    const a2 = {};
    this.queue.forEach((n3) => {
      ((e6, t3, n4) => {
        const { obj: r3, k: o3 } = cE(e6, t3, Object);
        r3[o3] = r3[o3] || [], r3[o3].push(n4);
      })(n3.loaded, [o2], i2), ((e6, t3) => {
        void 0 !== e6.pending[t3] && (delete e6.pending[t3], e6.pendingCount--);
      })(n3, e5), t2 && n3.errors.push(t2), 0 !== n3.pendingCount || n3.done || (Object.keys(n3.loaded).forEach((e6) => {
        a2[e6] || (a2[e6] = {});
        const t3 = n3.loaded[e6];
        t3.length && t3.forEach((t4) => {
          void 0 === a2[e6][t4] && (a2[e6][t4] = true);
        });
      }), n3.done = true, n3.errors.length ? n3.callback(n3.errors) : n3.callback());
    }), this.emit("loaded", a2), this.queue = this.queue.filter((e6) => !e6.done);
  }
  read(e5, t2, n2) {
    let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout, i2 = arguments.length > 5 ? arguments[5] : void 0;
    if (!e5.length) return i2(null, {});
    if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({ lng: e5, ns: t2, fcName: n2, tried: r2, wait: o2, callback: i2 });
    this.readingCalls++;
    const a2 = (a3, s3) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const e6 = this.waitingReads.shift();
        this.read(e6.lng, e6.ns, e6.fcName, e6.tried, e6.wait, e6.callback);
      }
      a3 && s3 && r2 < this.maxRetries ? setTimeout(() => {
        this.read.call(this, e5, t2, n2, r2 + 1, 2 * o2, i2);
      }, o2) : i2(a3, s3);
    }, s2 = this.backend[n2].bind(this.backend);
    if (2 !== s2.length) return s2(e5, t2, a2);
    try {
      const n3 = s2(e5, t2);
      n3 && "function" == typeof n3.then ? n3.then((e6) => a2(null, e6)).catch(a2) : a2(null, n3);
    } catch (e6) {
      a2(e6);
    }
  }
  prepareLoading(e5, t2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r2 && r2();
    oE(e5) && (e5 = this.languageUtils.toResolveHierarchy(e5)), oE(t2) && (t2 = [t2]);
    const o2 = this.queueLoad(e5, t2, n2, r2);
    if (!o2.toLoad.length) return o2.pending.length || r2(), null;
    o2.toLoad.forEach((e6) => {
      this.loadOne(e6);
    });
  }
  load(e5, t2, n2) {
    this.prepareLoading(e5, t2, {}, n2);
  }
  reload(e5, t2, n2) {
    this.prepareLoading(e5, t2, { reload: true }, n2);
  }
  loadOne(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    const n2 = e5.split("|"), r2 = n2[0], o2 = n2[1];
    this.read(r2, o2, "read", void 0, void 0, (n3, i2) => {
      n3 && this.logger.warn(`${t2}loading namespace ${o2} for language ${r2} failed`, n3), !n3 && i2 && this.logger.log(`${t2}loaded namespace ${o2} for language ${r2}`, i2), this.loaded(e5, n3, i2);
    });
  }
  saveMissing(e5, t2, n2, r2, o2) {
    let i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, a2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t2)) this.logger.warn(`did not save key "${n2}" as the namespace "${t2}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
    else if (null != n2 && "" !== n2) {
      if (this.backend && this.backend.create) {
        const s2 = { ...i2, isUpdate: o2 }, u2 = this.backend.create.bind(this.backend);
        if (u2.length < 6) try {
          let o3;
          o3 = 5 === u2.length ? u2(e5, t2, n2, r2, s2) : u2(e5, t2, n2, r2), o3 && "function" == typeof o3.then ? o3.then((e6) => a2(null, e6)).catch(a2) : a2(null, o3);
        } catch (e6) {
          a2(e6);
        }
        else u2(e5, t2, n2, r2, a2, s2);
      }
      e5 && e5[0] && this.store.addResource(e5[0], t2, n2, r2);
    }
  }
}
const UE = () => ({ debug: false, initImmediate: true, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: false, supportedLngs: false, nonExplicitSupportedLngs: false, load: "all", preload: false, simplifyPluralSuffix: true, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: false, saveMissing: false, updateMissing: false, saveMissingTo: "fallback", saveMissingPlurals: true, missingKeyHandler: false, missingInterpolationHandler: false, postProcess: false, postProcessPassResolved: false, returnNull: false, returnEmptyString: true, returnObjects: false, joinArrays: false, returnedObjectHandler: false, parseMissingKeyHandler: false, appendNamespaceToMissingKey: false, appendNamespaceToCIMode: false, overloadTranslationOptionHandler: (e5) => {
  let t2 = {};
  if ("object" == typeof e5[1] && (t2 = e5[1]), oE(e5[1]) && (t2.defaultValue = e5[1]), oE(e5[2]) && (t2.tDescription = e5[2]), "object" == typeof e5[2] || "object" == typeof e5[3]) {
    const n2 = e5[3] || e5[2];
    Object.keys(n2).forEach((e6) => {
      t2[e6] = n2[e6];
    });
  }
  return t2;
}, interpolation: { escapeValue: true, format: (e5) => e5, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: true } }), VE = (e5) => (oE(e5.ns) && (e5.ns = [e5.ns]), oE(e5.fallbackLng) && (e5.fallbackLng = [e5.fallbackLng]), oE(e5.fallbackNS) && (e5.fallbackNS = [e5.fallbackNS]), e5.supportedLngs && e5.supportedLngs.indexOf("cimode") < 0 && (e5.supportedLngs = e5.supportedLngs.concat(["cimode"])), e5), WE = () => {
};
class GE extends SE {
  constructor() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length > 1 ? arguments[1] : void 0;
    var n2;
    if (super(), this.options = VE(e5), this.services = {}, this.logger = wE, this.modules = { external: [] }, n2 = this, Object.getOwnPropertyNames(Object.getPrototypeOf(n2)).forEach((e6) => {
      "function" == typeof n2[e6] && (n2[e6] = n2[e6].bind(n2));
    }), t2 && !this.isInitialized && !e5.isClone) {
      if (!this.options.initImmediate) return this.init(e5, t2), this;
      setTimeout(() => {
        this.init(e5, t2);
      }, 0);
    }
  }
  init() {
    var e5 = this;
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true, "function" == typeof t2 && (n2 = t2, t2 = {}), !t2.defaultNS && false !== t2.defaultNS && t2.ns && (oE(t2.ns) ? t2.defaultNS = t2.ns : t2.ns.indexOf("translation") < 0 && (t2.defaultNS = t2.ns[0]));
    const r2 = UE();
    this.options = { ...r2, ...this.options, ...VE(t2) }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = { ...r2.interpolation, ...this.options.interpolation }), void 0 !== t2.keySeparator && (this.options.userDefinedKeySeparator = t2.keySeparator), void 0 !== t2.nsSeparator && (this.options.userDefinedNsSeparator = t2.nsSeparator);
    const o2 = (e6) => e6 ? "function" == typeof e6 ? new e6() : e6 : null;
    if (!this.options.isClone) {
      let t3;
      this.modules.logger ? wE.init(o2(this.modules.logger), this.options) : wE.init(null, this.options), this.modules.formatter ? t3 = this.modules.formatter : "undefined" != typeof Intl && (t3 = zE);
      const n3 = new TE(this.options);
      this.store = new AE(this.options.resources, this.options);
      const i3 = this.services;
      i3.logger = wE, i3.resourceStore = this.store, i3.languageUtils = n3, i3.pluralResolver = new RE(n3, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), !t3 || this.options.interpolation.format && this.options.interpolation.format !== r2.interpolation.format || (i3.formatter = o2(t3), i3.formatter.init(i3, this.options), this.options.interpolation.format = i3.formatter.format.bind(i3.formatter)), i3.interpolator = new jE(this.options), i3.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, i3.backendConnector = new $E(o2(this.modules.backend), i3.resourceStore, i3, this.options), i3.backendConnector.on("*", function(t4) {
        for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++) r3[o3 - 1] = arguments[o3];
        e5.emit(t4, ...r3);
      }), this.modules.languageDetector && (i3.languageDetector = o2(this.modules.languageDetector), i3.languageDetector.init && i3.languageDetector.init(i3, this.options.detection, this.options)), this.modules.i18nFormat && (i3.i18nFormat = o2(this.modules.i18nFormat), i3.i18nFormat.init && i3.i18nFormat.init(this)), this.translator = new NE(this.services, this.options), this.translator.on("*", function(t4) {
        for (var n4 = arguments.length, r3 = new Array(n4 > 1 ? n4 - 1 : 0), o3 = 1; o3 < n4; o3++) r3[o3 - 1] = arguments[o3];
        e5.emit(t4, ...r3);
      }), this.modules.external.forEach((e6) => {
        e6.init && e6.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n2 || (n2 = WE), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const e6 = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      e6.length > 0 && "dev" !== e6[0] && (this.options.lng = e6[0]);
    }
    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
    ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((t3) => {
      this[t3] = function() {
        return e5.store[t3](...arguments);
      };
    });
    ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((t3) => {
      this[t3] = function() {
        return e5.store[t3](...arguments), e5;
      };
    });
    const i2 = iE(), a2 = () => {
      const e6 = (e7, t3) => {
        this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i2.resolve(t3), n2(e7, t3);
      };
      if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e6(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, e6);
    };
    return this.options.resources || !this.options.initImmediate ? a2() : setTimeout(a2, 0), i2;
  }
  loadResources(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WE;
    const n2 = oE(e5) ? e5 : this.language;
    if ("function" == typeof e5 && (t2 = e5), !this.options.resources || this.options.partialBundledLanguages) {
      if (n2 && "cimode" === n2.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return t2();
      const e6 = [], r2 = (t3) => {
        if (!t3) return;
        if ("cimode" === t3) return;
        this.services.languageUtils.toResolveHierarchy(t3).forEach((t4) => {
          "cimode" !== t4 && e6.indexOf(t4) < 0 && e6.push(t4);
        });
      };
      if (n2) r2(n2);
      else {
        this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e7) => r2(e7));
      }
      this.options.preload && this.options.preload.forEach((e7) => r2(e7)), this.services.backendConnector.load(e6, this.options.ns, (e7) => {
        e7 || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), t2(e7);
      });
    } else t2(null);
  }
  reloadResources(e5, t2, n2) {
    const r2 = iE();
    return "function" == typeof e5 && (n2 = e5, e5 = void 0), "function" == typeof t2 && (n2 = t2, t2 = void 0), e5 || (e5 = this.languages), t2 || (t2 = this.options.ns), n2 || (n2 = WE), this.services.backendConnector.reload(e5, t2, (e6) => {
      r2.resolve(), n2(e6);
    }), r2;
  }
  use(e5) {
    if (!e5) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e5.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return "backend" === e5.type && (this.modules.backend = e5), ("logger" === e5.type || e5.log && e5.warn && e5.error) && (this.modules.logger = e5), "languageDetector" === e5.type && (this.modules.languageDetector = e5), "i18nFormat" === e5.type && (this.modules.i18nFormat = e5), "postProcessor" === e5.type && xE.addPostProcessor(e5), "formatter" === e5.type && (this.modules.formatter = e5), "3rdParty" === e5.type && this.modules.external.push(e5), this;
  }
  setResolvedLanguage(e5) {
    if (e5 && this.languages && !(["cimode", "dev"].indexOf(e5) > -1)) for (let e6 = 0; e6 < this.languages.length; e6++) {
      const t2 = this.languages[e6];
      if (!(["cimode", "dev"].indexOf(t2) > -1) && this.store.hasLanguageSomeTranslations(t2)) {
        this.resolvedLanguage = t2;
        break;
      }
    }
  }
  changeLanguage(e5, t2) {
    var n2 = this;
    this.isLanguageChangingTo = e5;
    const r2 = iE();
    this.emit("languageChanging", e5);
    const o2 = (e6) => {
      this.language = e6, this.languages = this.services.languageUtils.toResolveHierarchy(e6), this.resolvedLanguage = void 0, this.setResolvedLanguage(e6);
    }, i2 = (e6, i3) => {
      i3 ? (o2(i3), this.translator.changeLanguage(i3), this.isLanguageChangingTo = void 0, this.emit("languageChanged", i3), this.logger.log("languageChanged", i3)) : this.isLanguageChangingTo = void 0, r2.resolve(function() {
        return n2.t(...arguments);
      }), t2 && t2(e6, function() {
        return n2.t(...arguments);
      });
    }, a2 = (t3) => {
      e5 || t3 || !this.services.languageDetector || (t3 = []);
      const n3 = oE(t3) ? t3 : this.services.languageUtils.getBestMatchFromCodes(t3);
      n3 && (this.language || o2(n3), this.translator.language || this.translator.changeLanguage(n3), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n3)), this.loadResources(n3, (e6) => {
        i2(e6, n3);
      });
    };
    return e5 || !this.services.languageDetector || this.services.languageDetector.async ? !e5 && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(a2) : this.services.languageDetector.detect(a2) : a2(e5) : a2(this.services.languageDetector.detect()), r2;
  }
  getFixedT(e5, t2, n2) {
    var r2 = this;
    const o2 = function(e6, t3) {
      let i2;
      if ("object" != typeof t3) {
        for (var a2 = arguments.length, s2 = new Array(a2 > 2 ? a2 - 2 : 0), u2 = 2; u2 < a2; u2++) s2[u2 - 2] = arguments[u2];
        i2 = r2.options.overloadTranslationOptionHandler([e6, t3].concat(s2));
      } else i2 = { ...t3 };
      i2.lng = i2.lng || o2.lng, i2.lngs = i2.lngs || o2.lngs, i2.ns = i2.ns || o2.ns, "" !== i2.keyPrefix && (i2.keyPrefix = i2.keyPrefix || n2 || o2.keyPrefix);
      const l2 = r2.options.keySeparator || ".";
      let c2;
      return c2 = i2.keyPrefix && Array.isArray(e6) ? e6.map((e7) => `${i2.keyPrefix}${l2}${e7}`) : i2.keyPrefix ? `${i2.keyPrefix}${l2}${e6}` : e6, r2.t(c2, i2);
    };
    return oE(e5) ? o2.lng = e5 : o2.lngs = e5, o2.ns = t2, o2.keyPrefix = n2, o2;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e5) {
    this.options.defaultNS = e5;
  }
  hasLoadedNamespace(e5) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
    const n2 = t2.lng || this.resolvedLanguage || this.languages[0], r2 = !!this.options && this.options.fallbackLng, o2 = this.languages[this.languages.length - 1];
    if ("cimode" === n2.toLowerCase()) return true;
    const i2 = (e6, t3) => {
      const n3 = this.services.backendConnector.state[`${e6}|${t3}`];
      return -1 === n3 || 0 === n3 || 2 === n3;
    };
    if (t2.precheck) {
      const e6 = t2.precheck(this, i2);
      if (void 0 !== e6) return e6;
    }
    return !!this.hasResourceBundle(n2, e5) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!i2(n2, e5) || r2 && !i2(o2, e5)));
  }
  loadNamespaces(e5, t2) {
    const n2 = iE();
    return this.options.ns ? (oE(e5) && (e5 = [e5]), e5.forEach((e6) => {
      this.options.ns.indexOf(e6) < 0 && this.options.ns.push(e6);
    }), this.loadResources((e6) => {
      n2.resolve(), t2 && t2(e6);
    }), n2) : (t2 && t2(), Promise.resolve());
  }
  loadLanguages(e5, t2) {
    const n2 = iE();
    oE(e5) && (e5 = [e5]);
    const r2 = this.options.preload || [], o2 = e5.filter((e6) => r2.indexOf(e6) < 0 && this.services.languageUtils.isSupportedCode(e6));
    return o2.length ? (this.options.preload = r2.concat(o2), this.loadResources((e6) => {
      n2.resolve(), t2 && t2(e6);
    }), n2) : (t2 && t2(), Promise.resolve());
  }
  dir(e5) {
    if (e5 || (e5 = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e5) return "rtl";
    const t2 = this.services && this.services.languageUtils || new TE(UE());
    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t2.getLanguagePartFromCode(e5)) > -1 || e5.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    return new GE(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
  }
  cloneInstance() {
    let e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WE;
    const n2 = e5.forkResourceStore;
    n2 && delete e5.forkResourceStore;
    const r2 = { ...this.options, ...e5, isClone: true }, o2 = new GE(r2);
    void 0 === e5.debug && void 0 === e5.prefix || (o2.logger = o2.logger.clone(e5));
    return ["store", "services", "language"].forEach((e6) => {
      o2[e6] = this[e6];
    }), o2.services = { ...this.services }, o2.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, n2 && (o2.store = new AE(this.store.data, r2), o2.services.resourceStore = o2.store), o2.translator = new NE(o2.services, r2), o2.translator.on("*", function(e6) {
      for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r3 = 1; r3 < t3; r3++) n3[r3 - 1] = arguments[r3];
      o2.emit(e6, ...n3);
    }), o2.init(r2, t2), o2.translator.options = r2, o2.translator.backendConnector.services.utils = { hasLoadedNamespace: o2.hasLoadedNamespace.bind(o2) }, o2;
  }
  toJSON() {
    return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
  }
}
const qE = GE.createInstance();
qE.createInstance = GE.createInstance, qE.createInstance, qE.dir, qE.init, qE.loadResources, qE.reloadResources, qE.use, qE.changeLanguage, qE.getFixedT, qE.t, qE.exists, qE.setDefaultNamespace, qE.hasLoadedNamespace, qE.loadNamespaces, qE.loadLanguages;
var KE = "translation";
function YE(e5, t2) {
  qE.addResourceBundle(e5, KE, t2, true, true);
}
function JE(e5) {
  return qE.on("languageChanged", e5), function() {
    return qE.off("languageChanged", e5);
  };
}
qE.init({ lng: "zh-CN", resources: {} });
var QE = qE.t.bind(qE);
function eC(e5) {
  if (e5.removeAttr) {
    e5.removeAttr("width"), e5.removeAttr("height"), e5.removeAttr("fill"), e5.removeAttr("class"), e5.removeAttr("t"), e5.removeAttr("p-id");
    var t2 = e5.children();
    t2.length && eC(t2);
  }
}
function tC() {
  return am('<svg viewBox="0 0 1024 1024"><path d="M498.7 655.8l-197.6-268c-8.1-10.9-0.3-26.4 13.3-26.4h395.2c13.6 0 21.4 15.4 13.3 26.4l-197.6 268c-6.6 9-20 9-26.6 0z"></path></svg>');
}
function nC() {
  return am('<div class="w-e-bar-divider"></div>');
}
function rC(e5, t2, n2, r2, o2) {
  if (void 0 === r2 && (r2 = ""), void 0 === o2 && (o2 = false), t2) {
    if (r2) {
      var i2 = Ny ? "cmd" : "ctrl";
      r2 = r2.replace("mod", i2);
    }
    if (o2) r2 && (e5.attr("data-tooltip", r2), e5.addClass("w-e-menu-tooltip-v5"), e5.addClass("tooltip-right"));
    else {
      var a2 = r2 ? "".concat(n2, "\n").concat(r2) : n2;
      e5.attr("data-tooltip", a2), e5.addClass("w-e-menu-tooltip-v5");
    }
  }
}
var oC = (function() {
  function e5(e6, t2, n2) {
    void 0 === n2 && (n2 = false);
    var r2 = this;
    this.$elem = am('<div class="w-e-bar-item"></div>'), this.$button = am('<button type="button"></button>'), this.disabled = false, this.menu = t2;
    var o2 = t2.tag, i2 = t2.width;
    if ("button" !== o2) throw new Error("Invalid tag '".concat(o2, "', expected 'button'"));
    var a2 = t2.title, s2 = t2.hotkey, u2 = void 0 === s2 ? "" : s2, l2 = t2.iconSvg, c2 = void 0 === l2 ? "" : l2, d2 = this.$button;
    if (c2) {
      var f2 = am(c2);
      eC(f2), d2.append(f2);
    } else d2.text(a2);
    rC(d2, c2, a2, u2, n2), n2 && c2 && d2.append(am('<span class="title">'.concat(a2, "</span>"))), i2 && d2.css("width", "".concat(i2, "px")), d2.attr("data-menu-key", e6), this.$elem.append(d2), $m(function() {
      return r2.init();
    });
  }
  return e5.prototype.init = function() {
    var e6 = this;
    this.setActive(), this.setDisabled(), this.$button.on("click", function(t2) {
      t2.preventDefault(), yC(e6).hidePanelOrModal(), e6.disabled || (e6.exec(), e6.onButtonClick());
    });
  }, e5.prototype.exec = function() {
    var e6 = yC(this), t2 = this.menu, n2 = t2.getValue(e6);
    this.setIcon(), this.setTooltip(), t2.exec(e6, n2);
  }, e5.prototype.setActive = function() {
    var e6 = yC(this), t2 = this.$button, n2 = "active";
    this.menu.isActive(e6) ? t2.addClass(n2) : t2.removeClass(n2);
  }, e5.prototype.setDisabled = function() {
    var e6 = yC(this), t2 = this.$button, n2 = this.menu.isDisabled(e6);
    (null == e6.selection || e6.isDisabled()) && (n2 = true), this.menu.alwaysEnable && (n2 = false);
    var r2 = "disabled";
    n2 ? t2.addClass(r2) : t2.removeClass(r2), this.disabled = n2;
  }, e5.prototype.setIcon = function() {
    var e6 = yC(this), t2 = this.$button;
    if (this.menu.getIcon) {
      var n2 = this.menu.getIcon(e6);
      if (n2) {
        t2.find("svg").remove();
        var r2 = am(n2);
        eC(r2), t2.append(r2);
      }
    }
  }, e5.prototype.setTooltip = function() {
    var e6 = yC(this), t2 = this.$button;
    if (this.menu.getTitle) {
      var n2 = this.menu.getTitle(e6), r2 = this.menu.iconSvg;
      n2 && r2 && rC(t2, r2, n2);
    }
  }, e5.prototype.changeMenuState = function() {
    this.setActive(), this.setDisabled();
  }, e5;
})(), iC = (function(e5) {
  function t2(t3, n2, r2) {
    return void 0 === r2 && (r2 = false), e5.call(this, t3, n2, r2) || this;
  }
  return Kg(t2, e5), t2.prototype.onButtonClick = function() {
  }, t2;
})(oC), aC = (function() {
  function e5(e6) {
    this.isShow = false, this.showTime = 0, this.record(e6);
  }
  return e5.prototype.record = function(e6) {
    var t2 = Nv.get(e6);
    null == t2 && (t2 = /* @__PURE__ */ new Set(), Nv.set(e6, t2)), t2.add(this), Bv.set(this, e6);
  }, e5.prototype.renderContent = function(e6) {
    var t2 = this.$elem;
    t2.empty(), t2.append(e6);
    var n2 = this.genSelfElem();
    n2 && t2.append(n2);
  }, e5.prototype.appendTo = function(e6) {
    var t2 = this.$elem;
    e6.append(t2);
  }, e5.prototype.show = function() {
    if (!this.isShow) {
      this.showTime = Date.now(), this.$elem.show(), this.isShow = true;
      var e6 = Bv.get(this);
      e6 && e6.emit(mv, this);
    }
  }, e5.prototype.hide = function() {
    if (this.isShow && !(Date.now() - this.showTime < 200)) {
      this.$elem.hide(), this.isShow = false;
      var e6 = Bv.get(this);
      e6 && e6.emit(yv);
    }
  }, e5;
})(), sC = (function(e5) {
  function t2(t3) {
    var n2 = e5.call(this, t3) || this;
    return n2.type = "dropPanel", n2.$elem = am('<div class="w-e-drop-panel"></div>'), n2;
  }
  return Kg(t2, e5), t2.prototype.genSelfElem = function() {
    return null;
  }, t2;
})(aC), uC = (function(e5) {
  function t2(t3, n2, r2) {
    void 0 === r2 && (r2 = false);
    var o2 = e5.call(this, t3, n2, r2) || this;
    if (o2.dropPanel = null, o2.menu = n2, n2.showDropPanel) {
      var i2 = tC();
      o2.$button.append(i2);
    }
    return o2;
  }
  return Kg(t2, e5), t2.prototype.onButtonClick = function() {
    this.menu.showDropPanel && this.handleDropPanel();
  }, t2.prototype.handleDropPanel = function() {
    var e6 = this.menu;
    if (null != e6.getPanelContentElem) {
      var t3 = yC(this);
      if (null == this.dropPanel) {
        var n2 = new sC(t3), r2 = e6.getPanelContentElem(t3);
        n2.renderContent(r2), n2.appendTo(this.$elem), n2.show(), this.dropPanel = n2;
      } else {
        var o2 = this.dropPanel;
        if (o2.isShow) o2.hide();
        else {
          r2 = e6.getPanelContentElem(t3);
          o2.renderContent(r2), o2.show();
        }
      }
      var i2 = this.dropPanel;
      if (i2.isShow) {
        var a2 = this.$elem, s2 = a2.offset().left, u2 = a2.parents(".w-e-bar");
        s2 - u2.offset().left >= u2.width() / 2 ? i2.$elem.css({ left: "none", right: "0" }) : i2.$elem.css({ left: "0", right: "none" });
      }
    }
  }, t2;
})(oC), lC = (function(e5) {
  function t2(t3, n2) {
    void 0 === n2 && (n2 = 0);
    var r2 = e5.call(this, t3) || this;
    r2.type = "modal", r2.$elem = am('<div class="w-e-modal"></div>'), r2.width = 0, n2 && (r2.width = n2);
    var o2 = r2.$elem;
    return o2.on("click", function(e6) {
      return e6.stopPropagation();
    }), o2.on("keyup", function(e6) {
      "Escape" === e6.code && (r2.hide(), t3.restoreSelection());
    }), r2;
  }
  return Kg(t2, e5), t2.prototype.genSelfElem = function() {
    var e6 = this, t3 = am('<span class="btn-close">'.concat('<svg viewBox="0 0 1024 1024"><path d="M1024 896.1024l-128 128L512 640 128 1024 0 896 384 512 0 128 128 0 512 384 896.1024 0l128 128L640 512z"></path></svg>', "</span>")), n2 = Bv.get(this);
    return t3.on("click", function() {
      e6.hide(), null == n2 || n2.restoreSelection();
    }), t3;
  }, t2.prototype.setStyle = function(e6) {
    var t3 = this.width, n2 = this.$elem;
    n2.attr("style", ""), t3 && n2.css("width", "".concat(t3, "px")), n2.css(e6);
  }, t2;
})(aC);
function cC(e5, t2, n2) {
  var r2 = am('<label class="babel-container"></label>');
  r2.append("<span>".concat(e5, "</span>"));
  var o2 = am('<input type="text" id="'.concat(t2, '" placeholder="').concat(n2 || "", '">'));
  return r2.append(o2), [r2[0], o2[0]];
}
function fC(e5, t2) {
  var n2 = am('<div class="button-container"></div>'), r2 = am('<button type="button" id="'.concat(e5, '">').concat(t2, "</button>"));
  return n2.append(r2), [n2[0], r2[0]];
}
var pC = (function(e5) {
  function t2(t3, n2, r2) {
    void 0 === r2 && (r2 = false);
    var o2 = e5.call(this, t3, n2, r2) || this;
    return o2.$body = am("body"), o2.modal = null, o2.menu = n2, o2;
  }
  return Kg(t2, e5), t2.prototype.onButtonClick = function() {
    this.menu.showModal && this.handleModal();
  }, t2.prototype.getPosition = function() {
    var e6 = yC(this), t3 = this.menu.getModalPositionNode(e6);
    return $h.isElement(t3) ? Zb(e6, t3, "modal") : Xb(e6);
  }, t2.prototype.handleModal = function() {
    var e6 = yC(this), t3 = this.menu;
    if (null == this.modal) {
      var n2 = new lC(e6, t3.modalWidth);
      this.renderAndShowModal(n2, true), this.modal = n2;
    } else {
      (n2 = this.modal).isShow ? n2.hide() : this.renderAndShowModal(n2, false);
    }
  }, t2.prototype.renderAndShowModal = function(e6, t3) {
    void 0 === t3 && (t3 = false);
    var n2 = yC(this), r2 = this.menu;
    if (null != r2.getModalContentElem) {
      var o2 = _y.getTextarea(n2), i2 = _y.getToolbar(n2), a2 = ((null == i2 ? void 0 : i2.getConfig()) || {}).modalAppendToBody, s2 = r2.getModalContentElem(n2);
      if (e6.renderContent(s2), a2) e6.setStyle({ left: "0", right: "0" });
      else {
        var u2 = this.getPosition();
        e6.setStyle(u2);
      }
      t3 && (a2 ? e6.appendTo(this.$body) : e6.appendTo(o2.$textAreaContainer)), e6.show(), a2 || Jb(n2, e6.$elem), setTimeout(function() {
        n2.blur();
      });
    }
  }, t2;
})(oC);
var hC = (function(e5) {
  function t2(t3, n2) {
    var r2 = e5.call(this, t3) || this;
    return r2.type = "selectList", r2.$elem = am('<div class="w-e-select-list"></div>'), n2 && r2.$elem.css("width", "".concat(n2, "px")), r2.$elem.on("click", function(e6) {
      e6.stopPropagation();
    }), r2;
  }
  return Kg(t2, e5), t2.prototype.renderList = function(e6) {
    var t3 = this.$elem;
    t3.empty();
    var n2 = am("<ul></ul>");
    e6.forEach(function(e7) {
      var t4 = e7.value, r2 = e7.text, o2 = e7.selected, i2 = e7.styleForRenderMenuList, a2 = am('<li data-value="'.concat(t4, '"></li>'));
      if (i2 && a2.css(i2), o2) {
        var s2 = am('<svg viewBox="0 0 1446 1024"><path d="M574.116299 786.736392 1238.811249 48.517862C1272.390222 11.224635 1329.414799 7.827718 1366.75664 41.450462 1403.840015 74.840484 1406.731043 132.084741 1373.10189 169.433699L655.118888 966.834607C653.072421 969.716875 650.835807 972.514337 648.407938 975.210759 615.017957 1012.29409 558.292155 1015.652019 521.195664 982.250188L72.778218 578.493306C35.910826 545.297758 32.859041 488.584019 66.481825 451.242134 99.871807 414.158803 156.597563 410.800834 193.694055 444.202665L574.116299 786.736392Z"></path></svg>');
        a2.append(s2), a2.addClass("selected");
      }
      a2.append(am('<span data-value="'.concat(t4, '">').concat(r2, "</span>"))), a2.attr("title", r2), n2.append(a2);
    }), t3.append(n2);
  }, t2.prototype.genSelfElem = function() {
    return null;
  }, t2;
})(aC);
var gC = (function() {
  function e5(e6, t2, n2) {
    void 0 === n2 && (n2 = false);
    var r2 = this;
    this.$elem = am('<div class="w-e-bar-item"></div>'), this.$button = am('<button type="button" class="select-button"></button>'), this.disabled = false, this.selectList = null;
    var o2 = t2.tag, i2 = t2.title, a2 = t2.width, s2 = t2.iconSvg, u2 = void 0 === s2 ? "" : s2, l2 = t2.hotkey, c2 = void 0 === l2 ? "" : l2;
    if ("select" !== o2) throw new Error("Invalid tag '".concat(o2, "', expected 'select'"));
    var d2 = this.$button;
    a2 && d2.css("width", "".concat(a2, "px")), d2.attr("data-menu-key", e6), rC(d2, u2, i2, c2, n2), this.$elem.append(d2), this.menu = t2, $m(function() {
      return r2.init();
    });
  }
  return e5.prototype.init = function() {
    var e6 = this;
    this.setSelectedValue(), this.$button.on("click", function(t2) {
      t2.preventDefault(), yC(e6).hidePanelOrModal(), e6.trigger();
    });
  }, e5.prototype.trigger = function() {
    var e6 = this, t2 = yC(this);
    if (!t2.isDisabled() && !this.disabled) {
      var n2 = this.menu;
      if (null == this.selectList) {
        this.selectList = new hC(t2, n2.selectPanelWidth);
        var r2 = this.selectList, o2 = n2.getOptions(t2);
        r2.renderList(o2), r2.appendTo(this.$elem), r2.show(), r2.$elem.on("click", "li", function(t3) {
          var n3 = t3.target;
          if (null != n3) {
            t3.preventDefault();
            var r3 = am(n3).attr("data-value");
            e6.onChange(r3);
          }
        });
      } else {
        if ((r2 = this.selectList).isShow) r2.hide();
        else {
          o2 = n2.getOptions(t2);
          r2.renderList(o2), r2.show();
        }
      }
    }
  }, e5.prototype.onChange = function(e6) {
    var t2 = yC(this), n2 = this.menu;
    n2.exec && n2.exec(t2, e6);
  }, e5.prototype.setSelectedValue = function() {
    var e6 = yC(this), t2 = this.menu, n2 = t2.getValue(e6), r2 = (function(e7, t3) {
      for (var n3 = e7.length, r3 = "", o3 = 0; o3 < n3; o3++) {
        var i3 = e7[o3];
        if (i3.value === t3) {
          r3 = i3.text;
          break;
        }
      }
      return r3;
    })(t2.getOptions(e6), n2.toString()), o2 = this.$button, i2 = tC();
    o2.empty(), o2.text(r2), o2.append(i2);
  }, e5.prototype.setDisabled = function() {
    var e6 = yC(this), t2 = this.menu.isDisabled(e6), n2 = this.$button;
    (null == e6.selection || e6.isDisabled()) && (t2 = true);
    var r2 = "disabled";
    t2 ? n2.addClass(r2) : n2.removeClass(r2), this.disabled = t2;
  }, e5.prototype.changeMenuState = function() {
    this.setSelectedValue(), this.setDisabled();
  }, e5;
})(), vC = (function() {
  function e5(e6) {
    this.$elem = am('<div class="w-e-bar-item w-e-bar-item-group"></div>'), this.$container = am('<div class="w-e-bar-item-menus-container"></div>'), this.$button = am('<button type="button"></button>');
    var t2 = e6.key, n2 = e6.iconSvg, r2 = e6.title, o2 = this.$elem, i2 = this.$button;
    if (n2) {
      var a2 = am(n2);
      eC(a2), i2.append(a2);
    } else i2.text(r2);
    i2.attr("data-menu-key", t2);
    var s2 = tC();
    i2.append(s2), o2.append(i2);
    var u2 = this.$container;
    o2.append(u2);
    var l2 = this.createObserver();
    this.observe(l2);
  }
  return e5.prototype.appendBarItem = function(e6) {
    var t2 = e6.$elem;
    this.$container.append(t2);
  }, e5.prototype.observe = function(e6) {
    var t2 = this.$container;
    e6.observe(t2[0], { childList: true, subtree: true, attributes: true });
  }, e5.prototype.createObserver = function() {
    var e6 = this, t2 = this.$container, n2 = this.$button, r2 = new MutationObserver(function() {
      var o2 = t2.find("button"), i2 = o2.length;
      if (0 !== i2) {
        var a2 = 0;
        o2.each(function(e7) {
          am(e7).hasClass("disabled") && a2++;
        }), r2.disconnect(), a2 === i2 ? n2.addClass("disabled") : n2.removeClass("disabled"), e6.observe(r2);
      }
    });
    return r2;
  }, e5;
})(), mC = /* @__PURE__ */ new WeakMap();
function yC(e5) {
  var t2 = Ov.get(e5);
  if (null == t2) throw new Error("Can not get editor instance");
  return t2;
}
function bC(e5, t2, n2) {
  void 0 === n2 && (n2 = false);
  var r2 = mC.get(t2);
  if (r2) return r2;
  var o2 = t2.tag;
  if ("button" === o2) {
    var i2 = t2.showDropPanel, a2 = t2.showModal;
    r2 = i2 ? new uC(e5, t2, n2) : a2 ? new pC(e5, t2, n2) : new iC(e5, t2, n2);
  }
  if ("select" === o2 && (r2 = new gC(e5, t2, n2)), null == r2) throw new Error("Invalid tag in menu ".concat(JSON.stringify(t2)));
  return mC.set(t2, r2), r2;
}
function EC(e5, t2) {
  var n2 = e5.selection;
  return null != n2 && (!fg.isCollapsed(n2) && (!_y.getSelectedElems(e5).some(function(t3) {
    if (e5.isVoid(t3)) return true;
    var n3 = t3.type;
    return !!["pre", "code", "table"].includes(n3);
  }) && !!Cg.isText(t2)));
}
var CC, DC, wC = (function() {
  function e5() {
    var e6 = this;
    this.$elem = am('<div class="w-e-bar w-e-bar-hidden w-e-hover-bar"></div>'), this.menus = {}, this.hoverbarItems = [], this.prevSelectedNode = null, this.isShow = false, this.lngListen = function() {
    }, this.changeHoverbarState = rE(function() {
      var t2 = e6.isShow, n2 = e6.getSelectedNodeAndMenuKeys() || {}, r2 = n2.node, o2 = void 0 === r2 ? null : r2, i2 = n2.menuKeys, a2 = void 0 === i2 ? [] : i2, s2 = e6.getEditorInstance();
      if (null != o2 && e6.changeItemsState(), o2 && $h.isElement(o2) && t2) {
        var u2 = e6.isSamePath(o2, e6.prevSelectedNode);
        if (!Kh.isBlock(s2, o2) && u2) return;
      }
      e6.hideAndClean(), null != o2 && (e6.registerItems(a2), e6.setPosition(o2), e6.show()), e6.prevSelectedNode = o2;
    }, 200), $m(function() {
      var t2 = e6.getEditorInstance(), n2 = e6.$elem;
      n2.on("mousedown", function(e7) {
        return e7.preventDefault();
      }, { passive: false }), _y.getTextarea(t2).$textAreaContainer.append(n2), t2.on(pv, e6.changeHoverbarState);
      var r2 = e6.hideAndClean.bind(e6);
      t2.on(hv, r2), t2.on(gv, r2), t2.on(vv, r2);
    }), this.lngListen = JE(function() {
      e6.menus = {}, e6.hideAndClean(), e6.getEditorInstance().deselect();
    });
  }
  return e5.prototype.getMenus = function() {
    return this.menus;
  }, e5.prototype.hideAndClean = function() {
    var e6 = this.$elem;
    e6.removeClass("w-e-bar-show").addClass("w-e-bar-hidden"), this.hoverbarItems = [], e6.empty(), this.isShow = false;
  }, e5.prototype.checkPositionBottom = function() {
    var e6 = this.$elem, t2 = false, n2 = "undefined" != typeof window ? window.innerHeight : null;
    n2 && n2 >= 360 && (n2 - e6[0].getBoundingClientRect().bottom < 360 && (t2 = true));
    t2 ? e6.addClass("w-e-bar-bottom") : e6.removeClass("w-e-bar-bottom");
  }, e5.prototype.show = function() {
    this.$elem.removeClass("w-e-bar-hidden").addClass("w-e-bar-show"), this.isShow = true, this.checkPositionBottom();
  }, e5.prototype.changeItemsState = function() {
    var e6 = this;
    $m(function() {
      e6.hoverbarItems.forEach(function(e7) {
        e7.changeMenuState();
      });
    });
  }, e5.prototype.registerItems = function(e6) {
    var t2 = this, n2 = this.$elem;
    e6.forEach(function(e7) {
      if ("|" !== e7) t2.registerSingleItem(e7);
      else {
        var r2 = nC();
        n2.append(r2);
      }
    });
  }, e5.prototype.registerSingleItem = function(e6) {
    var t2 = this.getEditorInstance(), n2 = this.menus, r2 = n2[e6];
    if (null == r2) {
      var o2 = bv[e6];
      if (null == o2) throw new Error("Not found menu item factory by key '".concat(e6, "'"));
      if ("function" != typeof o2) throw new Error("Menu item factory (key='".concat(e6, "') is not a function"));
      r2 = o2(), n2[e6] = r2;
    }
    var i2 = t2.getMenuConfig(e6);
    i2 && void 0 !== i2.iconSvg && (r2.iconSvg = i2.iconSvg);
    var a2 = bC(e6, r2);
    this.hoverbarItems.push(a2), Ov.set(a2, t2), this.$elem.append(a2.$elem);
  }, e5.prototype.setPosition = function(e6) {
    var t2 = this.getEditorInstance(), n2 = this.$elem;
    if (n2.attr("style", ""), $h.isElement(e6)) {
      var r2 = Zb(t2, e6, "bar");
      return n2.css(r2), void Jb(t2, n2);
    }
    if (Cg.isText(e6)) {
      r2 = Xb(t2);
      return n2.css(r2), void Jb(t2, n2);
    }
    throw new Error("hoverbar.setPosition error, current selected node is not elem nor text");
  }, e5.prototype.getSelectedNodeAndMenuKeys = function() {
    var e6 = this.getEditorInstance();
    if (null == e6.selection) return null;
    var t2 = this.getHoverbarKeysConf(), n2 = null, r2 = [], o2 = function(o3) {
      var i3 = t2[o3], a2 = i3.match, s2 = i3.menuKeys, u2 = void 0 === s2 ? [] : s2, l2 = a2 || function(e7, t3) {
        return _y.checkNodeType(t3, o3);
      }, c2 = Qg(Kh.nodes(e6, { match: function(t3) {
        return l2(e6, t3);
      }, universal: true }), 1), d2 = c2[0];
      if (null != d2) return n2 = d2[0], r2 = u2, "break";
    };
    for (var i2 in t2) {
      if ("break" === o2(i2)) break;
    }
    return null == n2 || 0 === r2.length ? null : { node: n2, menuKeys: r2 };
  }, e5.prototype.getEditorInstance = function() {
    var e6 = Av.get(this);
    if (null == e6) throw new Error("Can not get editor instance");
    return e6;
  }, e5.prototype.getHoverbarKeysConf = function() {
    var e6 = this.getEditorInstance().getConfig().hoverbarKeys, t2 = void 0 === e6 ? {} : e6, n2 = t2.text;
    return n2 && null == n2.match && (n2.match = EC), t2;
  }, e5.prototype.isSamePath = function(e6, t2) {
    if (null == e6 || null == t2) return false;
    var n2 = _y.findPath(null, e6), r2 = _y.findPath(null, t2);
    return og.equals(n2, r2);
  }, e5.prototype.destroy = function() {
    var e6;
    this.changeHoverbarState.cancel(), this.$elem.remove(), null === (e6 = this.lngListen) || void 0 === e6 || e6.call(this), this.menus = {}, this.hoverbarItems = [], this.prevSelectedNode = null;
  }, e5;
})();
function SC() {
  if (DC) return CC;
  DC = 1;
  var e5 = "Expected a function", t2 = /^\s+|\s+$/g, n2 = /^[-+]0x[0-9a-f]+$/i, r2 = /^0b[01]+$/i, o2 = /^0o[0-7]+$/i, i2 = parseInt, a2 = "object" == typeof y && y && y.Object === Object && y, s2 = "object" == typeof self && self && self.Object === Object && self, u2 = a2 || s2 || Function("return this")(), l2 = Object.prototype.toString, c2 = Math.max, d2 = Math.min, f2 = function() {
    return u2.Date.now();
  };
  function p2(t3, n3, r3) {
    var o3, i3, a3, s3, u3, l3, p3 = 0, v2 = false, m2 = false, y2 = true;
    if ("function" != typeof t3) throw new TypeError(e5);
    function b2(e6) {
      var n4 = o3, r4 = i3;
      return o3 = i3 = void 0, p3 = e6, s3 = t3.apply(r4, n4);
    }
    function E2(e6) {
      var t4 = e6 - l3;
      return void 0 === l3 || t4 >= n3 || t4 < 0 || m2 && e6 - p3 >= a3;
    }
    function C2() {
      var e6 = f2();
      if (E2(e6)) return D2(e6);
      u3 = setTimeout(C2, (function(e7) {
        var t4 = n3 - (e7 - l3);
        return m2 ? d2(t4, a3 - (e7 - p3)) : t4;
      })(e6));
    }
    function D2(e6) {
      return u3 = void 0, y2 && o3 ? b2(e6) : (o3 = i3 = void 0, s3);
    }
    function w2() {
      var e6 = f2(), t4 = E2(e6);
      if (o3 = arguments, i3 = this, l3 = e6, t4) {
        if (void 0 === u3) return (function(e7) {
          return p3 = e7, u3 = setTimeout(C2, n3), v2 ? b2(e7) : s3;
        })(l3);
        if (m2) return u3 = setTimeout(C2, n3), b2(l3);
      }
      return void 0 === u3 && (u3 = setTimeout(C2, n3)), s3;
    }
    return n3 = g2(n3) || 0, h2(r3) && (v2 = !!r3.leading, a3 = (m2 = "maxWait" in r3) ? c2(g2(r3.maxWait) || 0, n3) : a3, y2 = "trailing" in r3 ? !!r3.trailing : y2), w2.cancel = function() {
      void 0 !== u3 && clearTimeout(u3), p3 = 0, o3 = l3 = i3 = u3 = void 0;
    }, w2.flush = function() {
      return void 0 === u3 ? s3 : D2(f2());
    }, w2;
  }
  function h2(e6) {
    var t3 = typeof e6;
    return !!e6 && ("object" == t3 || "function" == t3);
  }
  function g2(e6) {
    if ("number" == typeof e6) return e6;
    if ((function(e7) {
      return "symbol" == typeof e7 || /* @__PURE__ */ (function(e8) {
        return !!e8 && "object" == typeof e8;
      })(e7) && "[object Symbol]" == l2.call(e7);
    })(e6)) return NaN;
    if (h2(e6)) {
      var a3 = "function" == typeof e6.valueOf ? e6.valueOf() : e6;
      e6 = h2(a3) ? a3 + "" : a3;
    }
    if ("string" != typeof e6) return 0 === e6 ? e6 : +e6;
    e6 = e6.replace(t2, "");
    var s3 = r2.test(e6);
    return s3 || o2.test(e6) ? i2(e6.slice(2), s3 ? 2 : 8) : n2.test(e6) ? NaN : +e6;
  }
  return CC = function(t3, n3, r3) {
    var o3 = true, i3 = true;
    if ("function" != typeof t3) throw new TypeError(e5);
    return h2(r3) && (o3 = "leading" in r3 ? !!r3.leading : o3, i3 = "trailing" in r3 ? !!r3.trailing : i3), p2(t3, n3, { leading: o3, maxWait: n3, trailing: i3 });
  };
}
var AC = b(SC());
function xC(e5, t2) {
  return qm(t2) && _y.hasDOMNode(e5, t2, { editable: true });
}
function OC(e5, t2) {
  if (e5.getConfig().readOnly) return false;
  var n2 = NC(e5, t2) && _y.toSlateNode(e5, t2);
  return Kh.isVoid(e5, n2);
}
function NC(e5, t2) {
  return qm(t2) && _y.hasDOMNode(e5, t2);
}
const BC = (e5) => "object" == typeof e5 && null != e5 && 1 === e5.nodeType, TC = (e5, t2) => (!t2 || "hidden" !== e5) && "visible" !== e5 && "clip" !== e5, kC = (e5, t2) => {
  if (e5.clientHeight < e5.scrollHeight || e5.clientWidth < e5.scrollWidth) {
    const n2 = getComputedStyle(e5, null);
    return TC(n2.overflowY, t2) || TC(n2.overflowX, t2) || ((e6) => {
      const t3 = ((e7) => {
        if (!e7.ownerDocument || !e7.ownerDocument.defaultView) return null;
        try {
          return e7.ownerDocument.defaultView.frameElement;
        } catch (e8) {
          return null;
        }
      })(e6);
      return !!t3 && (t3.clientHeight < e6.scrollHeight || t3.clientWidth < e6.scrollWidth);
    })(e5);
  }
  return false;
}, FC = (e5, t2, n2, r2, o2, i2, a2, s2) => i2 < e5 && a2 > t2 || i2 > e5 && a2 < t2 ? 0 : i2 <= e5 && s2 <= n2 || a2 >= t2 && s2 >= n2 ? i2 - e5 - r2 : a2 > t2 && s2 < n2 || i2 < e5 && s2 > n2 ? a2 - t2 + o2 : 0, IC = (e5) => {
  const t2 = e5.parentElement;
  return null == t2 ? e5.getRootNode().host || null : t2;
}, PC = (e5, t2) => {
  var n2, r2, o2, i2;
  if ("undefined" == typeof document) return [];
  const { scrollMode: a2, block: s2, inline: u2, boundary: l2, skipOverflowHiddenElements: c2 } = t2, d2 = "function" == typeof l2 ? l2 : (e6) => e6 !== l2;
  if (!BC(e5)) throw new TypeError("Invalid target");
  const f2 = document.scrollingElement || document.documentElement, p2 = [];
  let h2 = e5;
  for (; BC(h2) && d2(h2); ) {
    if (h2 = IC(h2), h2 === f2) {
      p2.push(h2);
      break;
    }
    null != h2 && h2 === document.body && kC(h2) && !kC(document.documentElement) || null != h2 && kC(h2, c2) && p2.push(h2);
  }
  const g2 = null != (r2 = null == (n2 = window.visualViewport) ? void 0 : n2.width) ? r2 : innerWidth, v2 = null != (i2 = null == (o2 = window.visualViewport) ? void 0 : o2.height) ? i2 : innerHeight, { scrollX: m2, scrollY: y2 } = window, { height: b2, width: E2, top: C2, right: D2, bottom: w2, left: S2 } = e5.getBoundingClientRect(), { top: A2, right: x2, bottom: O2, left: N2 } = ((e6) => {
    const t3 = window.getComputedStyle(e6);
    return { top: parseFloat(t3.scrollMarginTop) || 0, right: parseFloat(t3.scrollMarginRight) || 0, bottom: parseFloat(t3.scrollMarginBottom) || 0, left: parseFloat(t3.scrollMarginLeft) || 0 };
  })(e5);
  let B2 = "start" === s2 || "nearest" === s2 ? C2 - A2 : "end" === s2 ? w2 + O2 : C2 + b2 / 2 - A2 + O2, T2 = "center" === u2 ? S2 + E2 / 2 - N2 + x2 : "end" === u2 ? D2 + x2 : S2 - N2;
  const k2 = [];
  for (let e6 = 0; e6 < p2.length; e6++) {
    const t3 = p2[e6], { height: n3, width: r3, top: o3, right: i3, bottom: l3, left: c3 } = t3.getBoundingClientRect();
    if ("if-needed" === a2 && C2 >= 0 && S2 >= 0 && w2 <= v2 && D2 <= g2 && (t3 === f2 && !kC(t3) || C2 >= o3 && w2 <= l3 && S2 >= c3 && D2 <= i3)) return k2;
    const d3 = getComputedStyle(t3), h3 = parseInt(d3.borderLeftWidth, 10), A3 = parseInt(d3.borderTopWidth, 10), x3 = parseInt(d3.borderRightWidth, 10), O3 = parseInt(d3.borderBottomWidth, 10);
    let N3 = 0, F2 = 0;
    const I2 = "offsetWidth" in t3 ? t3.offsetWidth - t3.clientWidth - h3 - x3 : 0, P2 = "offsetHeight" in t3 ? t3.offsetHeight - t3.clientHeight - A3 - O3 : 0, _2 = "offsetWidth" in t3 ? 0 === t3.offsetWidth ? 0 : r3 / t3.offsetWidth : 0, R2 = "offsetHeight" in t3 ? 0 === t3.offsetHeight ? 0 : n3 / t3.offsetHeight : 0;
    if (f2 === t3) N3 = "start" === s2 ? B2 : "end" === s2 ? B2 - v2 : "nearest" === s2 ? FC(y2, y2 + v2, v2, A3, O3, y2 + B2, y2 + B2 + b2, b2) : B2 - v2 / 2, F2 = "start" === u2 ? T2 : "center" === u2 ? T2 - g2 / 2 : "end" === u2 ? T2 - g2 : FC(m2, m2 + g2, g2, h3, x3, m2 + T2, m2 + T2 + E2, E2), N3 = Math.max(0, N3 + y2), F2 = Math.max(0, F2 + m2);
    else {
      N3 = "start" === s2 ? B2 - o3 - A3 : "end" === s2 ? B2 - l3 + O3 + P2 : "nearest" === s2 ? FC(o3, l3, n3, A3, O3 + P2, B2, B2 + b2, b2) : B2 - (o3 + n3 / 2) + P2 / 2, F2 = "start" === u2 ? T2 - c3 - h3 : "center" === u2 ? T2 - (c3 + r3 / 2) + I2 / 2 : "end" === u2 ? T2 - i3 + x3 + I2 : FC(c3, i3, r3, h3, x3 + I2, T2, T2 + E2, E2);
      const { scrollLeft: e7, scrollTop: a3 } = t3;
      N3 = 0 === R2 ? 0 : Math.max(0, Math.min(a3 + N3 / R2, t3.scrollHeight - n3 / R2 + P2)), F2 = 0 === _2 ? 0 : Math.max(0, Math.min(e7 + F2 / _2, t3.scrollWidth - r3 / _2 + I2)), B2 += a3 - N3, T2 += e7 - F2;
    }
    k2.push({ el: t3, top: N3, left: F2 });
  }
  return k2;
};
function _C(e5, t2) {
  if (!e5.isConnected || !((e6) => {
    let t3 = e6;
    for (; t3 && t3.parentNode; ) {
      if (t3.parentNode === document) return true;
      t3 = t3.parentNode instanceof ShadowRoot ? t3.parentNode.host : t3.parentNode;
    }
    return false;
  })(e5)) return;
  const n2 = ((e6) => {
    const t3 = window.getComputedStyle(e6);
    return { top: parseFloat(t3.scrollMarginTop) || 0, right: parseFloat(t3.scrollMarginRight) || 0, bottom: parseFloat(t3.scrollMarginBottom) || 0, left: parseFloat(t3.scrollMarginLeft) || 0 };
  })(e5);
  if (((e6) => "object" == typeof e6 && "function" == typeof e6.behavior)(t2)) return t2.behavior(PC(e5, t2));
  const r2 = "boolean" == typeof t2 || null == t2 ? void 0 : t2.behavior;
  for (const { el: o2, top: i2, left: a2 } of PC(e5, ((e6) => false === e6 ? { block: "end", inline: "nearest" } : ((e7) => e7 === Object(e7) && 0 !== Object.keys(e7).length)(e6) ? e6 : { block: "start", inline: "nearest" })(t2))) {
    const e6 = i2 - n2.top + n2.bottom, t3 = a2 - n2.left + n2.right;
    o2.scroll({ top: e6, left: t3, behavior: r2 });
  }
}
function RC(e5, t2, n2) {
  void 0 === n2 && (n2 = false);
  var r2 = t2.selection, o2 = t2.getConfig(), i2 = _y.findDocumentOrShadowRoot(t2).getSelection();
  if (i2 && (!e5.isComposing || n2) && t2.isFocused()) {
    var a2 = "None" !== i2.type;
    if (r2 || a2) {
      var s2 = Mv.get(t2), u2 = false;
      if (s2.contains(i2.anchorNode) && s2.contains(i2.focusNode) && (u2 = true), a2 && u2 && r2) {
        var l2 = _y.toSlateRange(t2, i2, { exactMatch: true, suppressThrow: true });
        if (l2 && fg.equals(l2, r2)) {
          var c2 = true;
          if (fg.isCollapsed(r2)) {
            var d2 = i2.anchorNode, f2 = i2.anchorOffset;
            if (d2 === s2) {
              var p2 = s2.childNodes, h2 = void 0;
              (h2 = p2[f2]) && h2.matches("table") && (c2 = false), (h2 = p2[f2 - 1]) && h2.matches("table") && (c2 = false);
            }
          }
          if (c2) return;
        }
      }
      if (!r2 || _y.hasRange(t2, r2)) {
        e5.isUpdatingSelection = true;
        var g2 = r2 && _y.toDOMRange(t2, r2);
        if (g2) {
          fg.isBackward(r2) ? i2.setBaseAndExtent(g2.endContainer, g2.endOffset, g2.startContainer, g2.startOffset) : i2.setBaseAndExtent(g2.startContainer, g2.startOffset, g2.endContainer, g2.endOffset);
          var v2 = g2.startContainer.parentElement;
          if (!v2.closest("[data-slate-spacer]") && g2.getBoundingClientRect) {
            var m2 = g2.getBoundingClientRect.bind(g2)();
            0 === m2.top && 0 === m2.right && 0 === m2.bottom && 0 === m2.left && 0 === m2.height && 0 === m2.width || (v2.getBoundingClientRect = g2.getBoundingClientRect.bind(g2));
            var y2 = document.body;
            _C(v2, { scrollMode: "if-needed", boundary: o2.scroll && s2.parentElement || y2, block: "end", behavior: "smooth" }), delete v2.getBoundingClientRect;
          }
        } else i2.removeAllRanges();
        setTimeout(function() {
          g2 && By && s2.focus(), e5.isUpdatingSelection = false;
        });
      } else t2.selection = _y.toSlateRange(t2, i2, { exactMatch: false, suppressThrow: false });
    }
  }
}
var LC = /* @__PURE__ */ new WeakMap(), MC = /* @__PURE__ */ new WeakMap();
var jC, HC = {};
var zC = (function() {
  if (jC) return HC;
  jC = 1, Object.defineProperty(HC, "__esModule", { value: true });
  for (var e5 = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t2 = { alt: "altKey", control: "ctrlKey", meta: "metaKey", shift: "shiftKey" }, n2 = { add: "+", break: "pause", cmd: "meta", command: "meta", ctl: "control", ctrl: "control", del: "delete", down: "arrowdown", esc: "escape", ins: "insert", left: "arrowleft", mod: e5 ? "meta" : "control", opt: "alt", option: "alt", return: "enter", right: "arrowright", space: " ", spacebar: " ", up: "arrowup", win: "meta", windows: "meta" }, r2 = { backspace: 8, tab: 9, enter: 13, shift: 16, control: 17, alt: 18, pause: 19, capslock: 20, escape: 27, " ": 32, pageup: 33, pagedown: 34, end: 35, home: 36, arrowleft: 37, arrowup: 38, arrowright: 39, arrowdown: 40, insert: 45, delete: 46, meta: 91, numlock: 144, scrolllock: 145, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 }, o2 = 1; o2 < 20; o2++) r2["f" + o2] = 111 + o2;
  function i2(e6, t3, n3) {
    t3 && !("byKey" in t3) && (n3 = t3, t3 = null), Array.isArray(e6) || (e6 = [e6]);
    var r3 = e6.map(function(e7) {
      return a2(e7, t3);
    }), o3 = function(e7) {
      return r3.some(function(t4) {
        return s2(t4, e7);
      });
    };
    return null == n3 ? o3 : o3(n3);
  }
  function a2(e6, o3) {
    var i3 = o3 && o3.byKey, a3 = {}, s3 = (e6 = e6.replace("++", "+add")).split("+"), c2 = s3.length;
    for (var d2 in t2) a3[t2[d2]] = false;
    var f2 = true, p2 = false, h2 = void 0;
    try {
      for (var g2, v2 = s3[Symbol.iterator](); !(f2 = (g2 = v2.next()).done); f2 = true) {
        var m2 = g2.value, y2 = m2.endsWith("?") && m2.length > 1;
        y2 && (m2 = m2.slice(0, -1));
        var b2 = l2(m2), E2 = t2[b2];
        if (m2.length > 1 && !E2 && !n2[m2] && !r2[b2]) throw new TypeError('Unknown modifier: "' + m2 + '"');
        1 !== c2 && E2 || (i3 ? a3.key = b2 : a3.which = u2(m2)), E2 && (a3[E2] = !y2 || null);
      }
    } catch (e7) {
      p2 = true, h2 = e7;
    } finally {
      try {
        !f2 && v2.return && v2.return();
      } finally {
        if (p2) throw h2;
      }
    }
    return a3;
  }
  function s2(e6, t3) {
    for (var n3 in e6) {
      var r3 = e6[n3], o3 = void 0;
      if (null != r3 && ((null != (o3 = "key" === n3 && null != t3.key ? t3.key.toLowerCase() : "which" === n3 ? 91 === r3 && 93 === t3.which ? 91 : t3.which : t3[n3]) || false !== r3) && o3 !== r3)) return false;
    }
    return true;
  }
  function u2(e6) {
    return e6 = l2(e6), r2[e6] || e6.toUpperCase().charCodeAt(0);
  }
  function l2(e6) {
    return e6 = e6.toLowerCase(), e6 = n2[e6] || e6;
  }
  return HC.default = i2, HC.isHotkey = i2, HC.isCodeHotkey = function(e6, t3) {
    return i2(e6, t3);
  }, HC.isKeyHotkey = function(e6, t3) {
    return i2(e6, { byKey: true }, t3);
  }, HC.parseHotkey = a2, HC.compareHotkey = s2, HC.toKeyCode = u2, HC.toKeyName = l2, HC;
})(), $C = { bold: "mod+b", compose: ["down", "left", "right", "up", "backspace", "enter"], moveBackward: "left", moveForward: "right", moveWordBackward: "ctrl+left", moveWordForward: "ctrl+right", deleteBackward: "shift?+backspace", deleteForward: "shift?+delete", extendBackward: "shift+left", extendForward: "shift+right", italic: "mod+i", splitBlock: "shift?+enter", undo: "mod+z", tab: "tab", selectAll: "mod+a" }, UC = { moveLineBackward: "opt+up", moveLineForward: "opt+down", moveWordBackward: "opt+left", moveWordForward: "opt+right", deleteBackward: ["ctrl+backspace", "ctrl+h"], deleteForward: ["ctrl+delete", "ctrl+d"], deleteLineBackward: "cmd+shift?+backspace", deleteLineForward: ["cmd+shift?+delete", "ctrl+k"], deleteWordBackward: "opt+shift?+backspace", deleteWordForward: "opt+shift?+delete", extendLineBackward: "opt+shift+up", extendLineForward: "opt+shift+down", redo: "cmd+shift+z", transposeCharacter: "ctrl+t" }, VC = { deleteWordBackward: "ctrl+shift?+backspace", deleteWordForward: "ctrl+shift?+delete", redo: ["ctrl+y", "ctrl+shift+z"] }, WC = function(e5) {
  var t2 = $C[e5], n2 = UC[e5], r2 = VC[e5], o2 = t2 && zC.isKeyHotkey(t2), i2 = n2 && zC.isKeyHotkey(n2), a2 = r2 && zC.isKeyHotkey(r2);
  return function(e6) {
    return !(!o2 || !o2(e6)) || (!!(Ny && i2 && i2(e6)) || !(Ny || !a2 || !a2(e6)));
  };
}, GC = { isBold: WC("bold"), isCompose: WC("compose"), isMoveBackward: WC("moveBackward"), isMoveForward: WC("moveForward"), isDeleteBackward: WC("deleteBackward"), isDeleteForward: WC("deleteForward"), isDeleteLineBackward: WC("deleteLineBackward"), isDeleteLineForward: WC("deleteLineForward"), isDeleteWordBackward: WC("deleteWordBackward"), isDeleteWordForward: WC("deleteWordForward"), isExtendBackward: WC("extendBackward"), isExtendForward: WC("extendForward"), isExtendLineBackward: WC("extendLineBackward"), isExtendLineForward: WC("extendLineForward"), isItalic: WC("italic"), isMoveLineBackward: WC("moveLineBackward"), isMoveLineForward: WC("moveLineForward"), isMoveWordBackward: WC("moveWordBackward"), isMoveWordForward: WC("moveWordForward"), isRedo: WC("redo"), isSplitBlock: WC("splitBlock"), isTransposeCharacter: WC("transposeCharacter"), isUndo: WC("undo"), isTab: WC("tab"), isSelectAll: WC("selectAll") };
function qC(e5) {
  e5.preventDefault();
}
var KC = { beforeinput: function(e5, t2, n2) {
  var r2 = e5, o2 = n2.getConfig().readOnly;
  if (Py && !o2 && xC(n2, r2.target)) {
    var i2 = n2.selection, a2 = r2.inputType, s2 = r2.dataTransfer || r2.data || void 0;
    if ("insertCompositionText" !== a2 && "deleteCompositionText" !== a2) {
      if (r2.preventDefault(), !a2.startsWith("delete") || a2.startsWith("deleteBy")) {
        var u2 = Qg(r2.getTargetRanges(), 1)[0];
        if (u2) {
          var l2 = _y.toSlateRange(n2, u2, { exactMatch: false, suppressThrow: false });
          i2 && fg.equals(i2, l2) || jg.select(n2, l2);
        }
      }
      if (i2 && fg.isExpanded(i2)) {
        var c2 = _y.getSelectedElems(n2), d2 = "table" === c2[0].type, f2 = "table-cell" !== c2[c2.length - 1].type;
        if (d2 && f2) return;
        if (a2.startsWith("delete")) {
          var p2 = a2.endsWith("Backward") ? "backward" : "forward";
          return void Kh.deleteFragment(n2, { direction: p2 });
        }
      }
      switch (a2) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          Kh.deleteFragment(n2);
          break;
        case "deleteContent":
        case "deleteContentForward":
          Kh.deleteForward(n2);
          break;
        case "deleteContentBackward":
          Kh.deleteBackward(n2);
          break;
        case "deleteEntireSoftLine":
          Kh.deleteBackward(n2, { unit: "line" }), Kh.deleteForward(n2, { unit: "line" });
          break;
        case "deleteHardLineBackward":
          Kh.deleteBackward(n2, { unit: "block" });
          break;
        case "deleteSoftLineBackward":
          Kh.deleteBackward(n2, { unit: "line" });
          break;
        case "deleteHardLineForward":
          Kh.deleteForward(n2, { unit: "block" });
          break;
        case "deleteSoftLineForward":
          Kh.deleteForward(n2, { unit: "line" });
          break;
        case "deleteWordBackward":
          Kh.deleteBackward(n2, { unit: "word" });
          break;
        case "deleteWordForward":
          Kh.deleteForward(n2, { unit: "word" });
          break;
        case "insertLineBreak":
        case "insertParagraph":
          Kh.insertBreak(n2);
          break;
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText":
          if ("insertFromPaste" === a2 && !qv.get(n2)) break;
          "[object DataTransfer]" === Vm(s2) ? n2.insertData(s2) : "string" == typeof s2 && Kh.insertText(n2, s2);
      }
    }
  }
}, blur: function(e5, t2, n2) {
  var r2 = e5, o2 = t2.isUpdatingSelection, i2 = t2.latestElement;
  if (!n2.getConfig().readOnly && !o2 && xC(n2, r2.target)) {
    var a2 = _y.findDocumentOrShadowRoot(n2);
    if (i2 !== a2.activeElement) {
      var s2 = r2.relatedTarget;
      if (!(s2 === _y.toDOMNode(n2, n2) || Ym(s2) && s2.hasAttribute("data-slate-spacer"))) {
        if (null != s2 && qm(s2) && _y.hasDOMNode(n2, s2)) {
          var u2 = _y.toSlateNode(n2, s2);
          if ($h.isElement(u2) && !n2.isVoid(u2)) return;
        }
        if (Ty) {
          var l2 = a2.getSelection();
          null == l2 || l2.removeAllRanges();
        }
        Vv.delete(n2);
      }
    }
  }
}, focus: function(e5, t2, n2) {
  var r2 = _y.toDOMNode(n2, n2), o2 = _y.findDocumentOrShadowRoot(n2);
  t2.latestElement = o2.activeElement, By && e5.target !== r2 ? r2.focus() : Vv.set(n2, true);
}, click: function(e5, t2, n2) {
  if (!n2.getConfig().readOnly && NC(n2, e5.target) && qm(e5.target)) {
    var r2 = _y.toSlateNode(n2, e5.target), o2 = _y.findPath(n2, r2);
    if (Kh.hasPath(n2, o2)) {
      if (eg.get(n2, o2) === r2) {
        var i2 = Kh.start(n2, o2), a2 = Kh.end(n2, o2), s2 = Kh.void(n2, { at: i2 }), u2 = Kh.void(n2, { at: a2 });
        if (s2 && u2 && og.equals(s2[1], u2[1])) {
          var l2 = Kh.range(n2, i2);
          jg.select(n2, l2);
        }
      }
    }
  }
}, compositionstart: function(e5, t2, n2) {
  if (xC(n2, e5.target)) {
    var r2 = n2.selection;
    if (r2 && fg.isExpanded(r2) && (Kh.deleteFragment(n2), Promise.resolve().then(function() {
      RC(t2, n2, true);
    })), n2.selection) {
      var o2 = _y.toDOMRange(n2, n2.selection).startContainer, i2 = o2.textContent || "";
      LC.set(n2, i2), MC.set(n2, o2);
    }
    t2.isComposing = true, (function(e6, t3) {
      var n3;
      t3.getConfig().placeholder && t3.isEmpty() && e6.showPlaceholder && (null === (n3 = e6.$placeholder) || void 0 === n3 || n3.hide(), e6.showPlaceholder = false);
    })(t2, n2);
  }
}, compositionend: function(e5, t2, n2) {
  var r2 = e5;
  if (xC(n2, r2.target)) {
    t2.isComposing = false;
    var o2 = n2.selection;
    if (null != o2) {
      (Iy || By) && _y.cleanExposedTexNodeInSelectionBlock(n2);
      for (var i2 = fg.isBackward(o2) ? o2.focus : o2.anchor, a2 = Qg(Kh.node(n2, [i2.path[0]]), 1)[0], s2 = 0; s2 < i2.path.length; s2 += 1) {
        var u2 = Qg(Kh.node(n2, i2.path.slice(0, s2 + 1)), 1)[0];
        if ($h.isElement(u2) && ((Ty || By) && "link" === u2.type || "code" === u2.type)) {
          _y.setNewKey(a2);
          break;
        }
      }
      var l2 = r2.data;
      if (l2) {
        if (n2.getConfig().maxLength) {
          var c2 = _y.getLeftLengthOfMaxLength(n2);
          if (c2 < l2.length) {
            var d2 = _y.toDOMRange(n2, o2);
            d2.startContainer.nodeType === Node.TEXT_NODE && (d2.startContainer.textContent = LC.get(n2) || ""), c2 > 0 && Kh.insertText(n2, l2.slice(0, c2)), t2.changeViewState();
          } else Kh.insertText(n2, l2);
        } else {
          var f2 = _y.findDocumentOrShadowRoot(n2).getSelection();
          f2 && (function(e6, t3) {
            if (fg.isCollapsed(t3)) {
              var n3 = t3.anchor, r3 = t3.focus;
              if ([2, 3].includes(n3.path.length) && [2, 3].includes(r3.path.length) && (0 === n3.offset || 0 === r3.offset)) {
                var o3 = Kh.node(e6, n3.path), i3 = 0 === n3.offset ? n3.path : r3.path, a3 = [i3[0], i3[1] - 1];
                if (0 === i3[1]) return false;
                var s3 = Kh.node(e6, a3);
                if (Cg.isText(s3[0]) && Cg.isText(o3[0])) return true;
              }
            }
          })(n2, o2) && (n2.selection = _y.toSlateRange(n2, f2, { exactMatch: false, suppressThrow: false })), Kh.insertText(n2, l2);
        }
        Ty || setTimeout(function() {
          var e6 = n2.selection;
          if (null != e6) {
            var t3 = MC.get(n2);
            if (null != t3) _y.toDOMRange(n2, e6).startContainer !== t3 && (t3.textContent = LC.get(n2) || "");
          }
        });
      }
    }
  }
}, compositionupdate: function(e5, t2, n2) {
  xC(n2, e5.target) && (t2.isComposing = true);
}, keydown: function(e5, t2, n2) {
  var r2 = e5, o2 = n2.selection;
  if (!n2.getConfig().readOnly && !t2.isComposing && xC(n2, r2.target)) {
    if ((function(e6, t3) {
      var n3 = Sv.get(e6), r3 = n3 && n3.getMenus(), o3 = xv.get(e6), i3 = o3 && o3.getMenus(), a2 = Yg(Yg({}, r3), i3);
      for (var s2 in a2) {
        var u2 = a2[s2], l2 = u2.hotkey;
        if (l2 && zC.isHotkey(l2, t3) && !u2.isDisabled(e6)) {
          var c2 = u2.getValue(e6);
          u2.exec(e6, c2);
        }
      }
    })(n2, r2), GC.isTab(r2)) return qC(r2), void n2.handleTab();
    if (GC.isRedo(r2)) return qC(r2), void ("function" == typeof n2.redo && n2.redo());
    if (GC.isUndo(r2)) return qC(r2), void ("function" == typeof n2.undo && n2.undo());
    if (GC.isMoveLineBackward(r2)) return qC(r2), void jg.move(n2, { unit: "line", reverse: true });
    if (GC.isMoveLineForward(r2)) return qC(r2), void jg.move(n2, { unit: "line" });
    if (GC.isExtendLineBackward(r2)) return qC(r2), void jg.move(n2, { unit: "line", edge: "focus", reverse: true });
    if (GC.isExtendLineForward(r2)) return qC(r2), void jg.move(n2, { unit: "line", edge: "focus" });
    if (GC.isMoveBackward(r2)) return qC(r2), void (o2 && fg.isCollapsed(o2) ? jg.move(n2, { reverse: true }) : jg.collapse(n2, { edge: "start" }));
    if (GC.isMoveForward(r2)) return qC(r2), void (o2 && fg.isCollapsed(o2) ? jg.move(n2) : jg.collapse(n2, { edge: "end" }));
    if (GC.isMoveWordBackward(r2)) return qC(r2), o2 && fg.isExpanded(o2) && jg.collapse(n2, { edge: "focus" }), void jg.move(n2, { unit: "word", reverse: true });
    if (GC.isMoveWordForward(r2)) return qC(r2), o2 && fg.isExpanded(o2) && jg.collapse(n2, { edge: "focus" }), void jg.move(n2, { unit: "word" });
    if (GC.isSelectAll(r2)) return qC(r2), void n2.selectAll();
    if (Py) {
      if ((Iy || Ty) && o2 && (GC.isDeleteBackward(r2) || GC.isDeleteForward(r2)) && fg.isCollapsed(o2)) {
        var i2 = eg.parent(n2, o2.anchor.path);
        if ($h.isElement(i2) && Kh.isVoid(n2, i2) && Kh.isInline(n2, i2)) return r2.preventDefault(), void jg.delete(n2, { unit: "block" });
      }
    } else {
      if (GC.isBold(r2) || GC.isItalic(r2) || GC.isTransposeCharacter(r2)) return void qC(r2);
      if (GC.isSplitBlock(r2)) return qC(r2), void Kh.insertBreak(n2);
      if (GC.isDeleteBackward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "backward" }) : Kh.deleteBackward(n2));
      if (GC.isDeleteForward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "forward" }) : Kh.deleteForward(n2));
      if (GC.isDeleteLineBackward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "backward" }) : Kh.deleteBackward(n2, { unit: "line" }));
      if (GC.isDeleteLineForward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "forward" }) : Kh.deleteForward(n2, { unit: "line" }));
      if (GC.isDeleteWordBackward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "backward" }) : Kh.deleteBackward(n2, { unit: "word" }));
      if (GC.isDeleteWordForward(r2)) return qC(r2), void (o2 && fg.isExpanded(o2) ? Kh.deleteFragment(n2, { direction: "forward" }) : Kh.deleteForward(n2, { unit: "word" }));
    }
  }
}, keypress: function(e5, t2, n2) {
  if (!Py && !n2.getConfig().readOnly && xC(n2, e5.target)) {
    e5.preventDefault();
    var r2 = e5.key;
    Kh.insertText(n2, r2);
  }
}, copy: function(e5, t2, n2) {
  var r2 = e5;
  if (xC(n2, r2.target)) {
    n2.getConfig().readOnly || r2.preventDefault();
    var o2 = r2.clipboardData;
    if (null != o2) {
      n2.setFragmentData(o2);
      var i2 = n2.getConfig().customCopy;
      i2 && i2(n2, r2);
    }
  }
}, cut: function(e5, t2, n2) {
  var r2 = e5, o2 = n2.selection;
  if (!n2.getConfig().readOnly && (r2.preventDefault(), xC(n2, r2.target))) {
    var i2 = r2.clipboardData;
    if (null != i2 && (n2.setFragmentData(i2), o2)) if (fg.isExpanded(o2)) Kh.deleteFragment(n2);
    else {
      var a2 = eg.parent(n2, o2.anchor.path);
      Kh.isVoid(n2, a2) && jg.delete(n2);
    }
  }
}, paste: function(e5, t2, n2) {
  qv.set(n2, true);
  var r2 = e5;
  if (!n2.getConfig().readOnly && xC(n2, r2.target)) {
    var o2 = n2.getConfig().customPaste;
    if (o2) {
      if (false === o2(n2, r2)) return void qv.set(n2, false);
    }
    if (Ty || !Py || (function(e6) {
      return e6.clipboardData && "" !== e6.clipboardData.getData("text/plain") && 1 === e6.clipboardData.types.length;
    })(r2)) {
      r2.preventDefault();
      var i2 = r2.clipboardData;
      null != i2 && n2.insertData(i2);
    }
  }
}, dragover: function(e5, t2, n2) {
  if (NC(n2, e5.target)) {
    var r2 = _y.toSlateNode(n2, e5.target);
    Kh.isVoid(n2, r2) && e5.preventDefault();
  }
}, dragstart: function(e5, t2, n2) {
  var r2 = e5;
  if (NC(n2, r2.target) && !n2.getConfig().readOnly) {
    var o2 = _y.toSlateNode(n2, r2.target), i2 = _y.findPath(n2, o2);
    if (Kh.isVoid(n2, o2) || Kh.void(n2, { at: i2, voids: true })) {
      var a2 = Kh.range(n2, i2);
      jg.select(n2, a2);
    }
    var s2 = r2.dataTransfer;
    if (null != s2) _y.getSelectedNodeByType(n2, "table") || (t2.isDraggingInternally = true, n2.setFragmentData(s2));
  }
}, dragend: function(e5, t2, n2) {
  var r2 = e5;
  n2.getConfig().readOnly || t2.isDraggingInternally && NC(n2, r2.target) && (t2.isDraggingInternally = false);
}, drop: function(e5, t2, n2) {
  var r2 = e5, o2 = r2.dataTransfer;
  if (!n2.getConfig().readOnly && NC(n2, r2.target) && null != o2 && !(Py && Ty && o2.files.length > 0)) {
    r2.preventDefault();
    var i2 = n2.selection, a2 = _y.findEventRange(n2, r2);
    jg.select(n2, a2), t2.isDraggingInternally && (i2 && jg.delete(n2, { at: i2 }), t2.isDraggingInternally = false), n2.insertData(o2), n2.isFocused() || n2.focus();
  }
} };
function YC(e5) {
  if (XC(e5)) {
    for (; e5 && XC(e5); ) {
      e5 = ZC(e5).parent;
    }
    return null != e5 ? e5 : null;
  }
  return e5.parentNode;
}
function XC(e5) {
  return 11 === e5.nodeType;
}
function ZC(e5, t2) {
  var n2, r2, o2;
  const i2 = e5;
  return null !== (n2 = i2.parent) && void 0 !== n2 || (i2.parent = null != t2 ? t2 : null), null !== (r2 = i2.firstChildNode) && void 0 !== r2 || (i2.firstChildNode = e5.firstChild), null !== (o2 = i2.lastChildNode) && void 0 !== o2 || (i2.lastChildNode = e5.lastChild), i2;
}
const JC = { createElement: function(e5, t2) {
  return document.createElement(e5, t2);
}, createElementNS: function(e5, t2, n2) {
  return document.createElementNS(e5, t2, n2);
}, createTextNode: function(e5) {
  return document.createTextNode(e5);
}, createDocumentFragment: function() {
  return ZC(document.createDocumentFragment());
}, createComment: function(e5) {
  return document.createComment(e5);
}, insertBefore: function(e5, t2, n2) {
  if (XC(e5)) {
    let t3 = e5;
    for (; t3 && XC(t3); ) {
      t3 = ZC(t3).parent;
    }
    e5 = null != t3 ? t3 : e5;
  }
  XC(t2) && (t2 = ZC(t2, e5)), n2 && XC(n2) && (n2 = ZC(n2).firstChildNode), e5.insertBefore(t2, n2);
}, removeChild: function(e5, t2) {
  e5.removeChild(t2);
}, appendChild: function(e5, t2) {
  XC(t2) && (t2 = ZC(t2, e5)), e5.appendChild(t2);
}, parentNode: YC, nextSibling: function(e5) {
  var t2;
  if (XC(e5)) {
    const n2 = ZC(e5), r2 = YC(n2);
    if (r2 && n2.lastChildNode) {
      const e6 = Array.from(r2.childNodes), o2 = e6.indexOf(n2.lastChildNode);
      return null !== (t2 = e6[o2 + 1]) && void 0 !== t2 ? t2 : null;
    }
    return null;
  }
  return e5.nextSibling;
}, tagName: function(e5) {
  return e5.tagName;
}, setTextContent: function(e5, t2) {
  e5.textContent = t2;
}, getTextContent: function(e5) {
  return e5.textContent;
}, isElement: function(e5) {
  return 1 === e5.nodeType;
}, isText: function(e5) {
  return 3 === e5.nodeType;
}, isComment: function(e5) {
  return 8 === e5.nodeType;
}, isDocumentFragment: XC };
function QC(e5, t2, n2, r2, o2) {
  return { sel: e5, data: t2, children: n2, text: r2, elm: o2, key: void 0 === t2 ? void 0 : t2.key };
}
const eD = Array.isArray;
function tD(e5) {
  return "string" == typeof e5 || "number" == typeof e5 || e5 instanceof String || e5 instanceof Number;
}
function nD(e5) {
  return void 0 === e5;
}
function rD(e5) {
  return void 0 !== e5;
}
const oD = QC("", {}, [], void 0, void 0);
function iD(e5, t2) {
  var n2, r2;
  const o2 = e5.key === t2.key, i2 = (null === (n2 = e5.data) || void 0 === n2 ? void 0 : n2.is) === (null === (r2 = t2.data) || void 0 === r2 ? void 0 : r2.is), a2 = e5.sel === t2.sel, s2 = !(!e5.sel && e5.sel === t2.sel) || typeof e5.text == typeof t2.text;
  return a2 && o2 && i2 && s2;
}
function aD(e5, t2, n2) {
  var r2;
  const o2 = {};
  for (let i2 = t2; i2 <= n2; ++i2) {
    const t3 = null === (r2 = e5[i2]) || void 0 === r2 ? void 0 : r2.key;
    void 0 !== t3 && (o2[t3] = i2);
  }
  return o2;
}
const sD = ["create", "update", "remove", "destroy", "pre", "post"];
function uD(e5, t2, n2) {
  const r2 = { create: [], update: [], remove: [], destroy: [], pre: [], post: [] }, o2 = JC;
  for (const t3 of sD) for (const n3 of e5) {
    const e6 = n3[t3];
    void 0 !== e6 && r2[t3].push(e6);
  }
  function i2(e6) {
    const t3 = e6.id ? "#" + e6.id : "", n3 = e6.getAttribute("class"), r3 = n3 ? "." + n3.split(" ").join(".") : "";
    return QC(o2.tagName(e6).toLowerCase() + t3 + r3, {}, [], void 0, e6);
  }
  function a2(e6) {
    return QC(void 0, {}, [], void 0, e6);
  }
  function s2(e6, t3) {
    return function() {
      if (0 === --t3) {
        const t4 = o2.parentNode(e6);
        null !== t4 && o2.removeChild(t4, e6);
      }
    };
  }
  function u2(e6, t3) {
    var n3, i3;
    let a3, s3 = e6.data;
    if (void 0 !== s3) {
      const t4 = null === (n3 = s3.hook) || void 0 === n3 ? void 0 : n3.init;
      rD(t4) && (t4(e6), s3 = e6.data);
    }
    const l3 = e6.children, c3 = e6.sel;
    if ("!" === c3) nD(e6.text) && (e6.text = ""), e6.elm = o2.createComment(e6.text);
    else if ("" === c3) e6.elm = o2.createTextNode(e6.text);
    else if (void 0 !== c3) {
      const n4 = c3.indexOf("#"), d3 = c3.indexOf(".", n4), f3 = n4 > 0 ? n4 : c3.length, p2 = d3 > 0 ? d3 : c3.length, h2 = -1 !== n4 || -1 !== d3 ? c3.slice(0, Math.min(f3, p2)) : c3, g2 = e6.elm = rD(s3) && rD(a3 = s3.ns) ? o2.createElementNS(a3, h2, s3) : o2.createElement(h2, s3);
      for (f3 < p2 && g2.setAttribute("id", c3.slice(f3 + 1, p2)), d3 > 0 && g2.setAttribute("class", c3.slice(p2 + 1).replace(/\./g, " ")), a3 = 0; a3 < r2.create.length; ++a3) r2.create[a3](oD, e6);
      if (!tD(e6.text) || eD(l3) && 0 !== l3.length || o2.appendChild(g2, o2.createTextNode(e6.text)), eD(l3)) for (a3 = 0; a3 < l3.length; ++a3) {
        const e7 = l3[a3];
        null != e7 && o2.appendChild(g2, u2(e7, t3));
      }
      const v2 = e6.data.hook;
      rD(v2) && (null === (i3 = v2.create) || void 0 === i3 || i3.call(v2, oD, e6), v2.insert && t3.push(e6));
    } else e6.elm = o2.createTextNode(e6.text);
    return e6.elm;
  }
  function l2(e6, t3, n3, r3, i3, a3) {
    for (; r3 <= i3; ++r3) {
      const i4 = n3[r3];
      null != i4 && o2.insertBefore(e6, u2(i4, a3), t3);
    }
  }
  function c2(e6) {
    var t3, n3;
    const o3 = e6.data;
    if (void 0 !== o3) {
      null === (n3 = null === (t3 = null == o3 ? void 0 : o3.hook) || void 0 === t3 ? void 0 : t3.destroy) || void 0 === n3 || n3.call(t3, e6);
      for (let t4 = 0; t4 < r2.destroy.length; ++t4) r2.destroy[t4](e6);
      if (void 0 !== e6.children) for (let t4 = 0; t4 < e6.children.length; ++t4) {
        const n4 = e6.children[t4];
        null != n4 && "string" != typeof n4 && c2(n4);
      }
    }
  }
  function d2(e6, t3, n3, i3) {
    for (var a3, u3; n3 <= i3; ++n3) {
      let i4, l3;
      const f3 = t3[n3];
      if (null != f3) if (rD(f3.sel)) {
        c2(f3), i4 = r2.remove.length + 1, l3 = s2(f3.elm, i4);
        for (let e8 = 0; e8 < r2.remove.length; ++e8) r2.remove[e8](f3, l3);
        const e7 = null === (u3 = null === (a3 = null == f3 ? void 0 : f3.data) || void 0 === a3 ? void 0 : a3.hook) || void 0 === u3 ? void 0 : u3.remove;
        rD(e7) ? e7(f3, l3) : l3();
      } else f3.children ? (c2(f3), d2(e6, f3.children, 0, f3.children.length - 1)) : o2.removeChild(e6, f3.elm);
    }
  }
  function f2(e6, t3, n3) {
    var i3, a3, s3, c3, p2, h2, g2, v2;
    const m2 = null === (i3 = t3.data) || void 0 === i3 ? void 0 : i3.hook;
    null === (a3 = null == m2 ? void 0 : m2.prepatch) || void 0 === a3 || a3.call(m2, e6, t3);
    const y2 = t3.elm = e6.elm;
    if (e6 === t3) return;
    if (void 0 !== t3.data || rD(t3.text) && t3.text !== e6.text) {
      null !== (s3 = t3.data) && void 0 !== s3 || (t3.data = {}), null !== (c3 = e6.data) && void 0 !== c3 || (e6.data = {});
      for (let n4 = 0; n4 < r2.update.length; ++n4) r2.update[n4](e6, t3);
      null === (g2 = null === (h2 = null === (p2 = t3.data) || void 0 === p2 ? void 0 : p2.hook) || void 0 === h2 ? void 0 : h2.update) || void 0 === g2 || g2.call(h2, e6, t3);
    }
    const b2 = e6.children, E2 = t3.children;
    nD(t3.text) ? rD(b2) && rD(E2) ? b2 !== E2 && (function(e7, t4, n4, r3) {
      let i4, a4, s4, c4, p3 = 0, h3 = 0, g3 = t4.length - 1, v3 = t4[0], m3 = t4[g3], y3 = n4.length - 1, b3 = n4[0], E3 = n4[y3];
      for (; p3 <= g3 && h3 <= y3; ) null == v3 ? v3 = t4[++p3] : null == m3 ? m3 = t4[--g3] : null == b3 ? b3 = n4[++h3] : null == E3 ? E3 = n4[--y3] : iD(v3, b3) ? (f2(v3, b3, r3), v3 = t4[++p3], b3 = n4[++h3]) : iD(m3, E3) ? (f2(m3, E3, r3), m3 = t4[--g3], E3 = n4[--y3]) : iD(v3, E3) ? (f2(v3, E3, r3), o2.insertBefore(e7, v3.elm, o2.nextSibling(m3.elm)), v3 = t4[++p3], E3 = n4[--y3]) : iD(m3, b3) ? (f2(m3, b3, r3), o2.insertBefore(e7, m3.elm, v3.elm), m3 = t4[--g3], b3 = n4[++h3]) : (void 0 === i4 && (i4 = aD(t4, p3, g3)), a4 = i4[b3.key], nD(a4) ? (o2.insertBefore(e7, u2(b3, r3), v3.elm), b3 = n4[++h3]) : nD(i4[E3.key]) ? (o2.insertBefore(e7, u2(E3, r3), o2.nextSibling(m3.elm)), E3 = n4[--y3]) : (s4 = t4[a4], s4.sel !== b3.sel ? o2.insertBefore(e7, u2(b3, r3), v3.elm) : (f2(s4, b3, r3), t4[a4] = void 0, o2.insertBefore(e7, s4.elm, v3.elm)), b3 = n4[++h3]));
      h3 <= y3 && (c4 = null == n4[y3 + 1] ? null : n4[y3 + 1].elm, l2(e7, c4, n4, h3, y3, r3)), p3 <= g3 && d2(e7, t4, p3, g3);
    })(y2, b2, E2, n3) : rD(E2) ? (rD(e6.text) && o2.setTextContent(y2, ""), l2(y2, null, E2, 0, E2.length - 1, n3)) : rD(b2) ? d2(y2, b2, 0, b2.length - 1) : rD(e6.text) && o2.setTextContent(y2, "") : e6.text !== t3.text && (rD(b2) && d2(y2, b2, 0, b2.length - 1), o2.setTextContent(y2, t3.text)), null === (v2 = null == m2 ? void 0 : m2.postpatch) || void 0 === v2 || v2.call(m2, e6, t3);
  }
  return function(e6, t3) {
    let n3, s3, l3;
    const c3 = [];
    for (n3 = 0; n3 < r2.pre.length; ++n3) r2.pre[n3]();
    for (!(function(e7, t4) {
      return e7.isElement(t4);
    })(o2, e6) ? (function(e7, t4) {
      return e7.isDocumentFragment(t4);
    })(o2, e6) && (e6 = a2(e6)) : e6 = i2(e6), iD(e6, t3) ? f2(e6, t3, c3) : (s3 = e6.elm, l3 = o2.parentNode(s3), u2(t3, c3), null !== l3 && (o2.insertBefore(l3, t3.elm, o2.nextSibling(s3)), d2(l3, [e6], 0, 0))), n3 = 0; n3 < c3.length; ++n3) c3[n3].data.hook.insert(c3[n3]);
    for (n3 = 0; n3 < r2.post.length; ++n3) r2.post[n3]();
    return t3;
  };
}
function lD(e5, t2, n2) {
  if (e5.ns = "http://www.w3.org/2000/svg", "foreignObject" !== n2 && void 0 !== t2) for (let e6 = 0; e6 < t2.length; ++e6) {
    const n3 = t2[e6];
    if ("string" == typeof n3) continue;
    const r2 = n3.data;
    void 0 !== r2 && lD(r2, n3.children, n3.sel);
  }
}
function cD(e5, t2, n2) {
  let r2, o2, i2, a2 = {};
  if (void 0 !== n2 ? (null !== t2 && (a2 = t2), eD(n2) ? r2 = n2 : tD(n2) ? o2 = n2.toString() : n2 && n2.sel && (r2 = [n2])) : null != t2 && (eD(t2) ? r2 = t2 : tD(t2) ? o2 = t2.toString() : t2 && t2.sel ? r2 = [t2] : a2 = t2), void 0 !== r2) for (i2 = 0; i2 < r2.length; ++i2) tD(r2[i2]) && (r2[i2] = QC(void 0, void 0, void 0, r2[i2], void 0));
  return !e5.startsWith("svg") || 3 !== e5.length && "." !== e5[3] && "#" !== e5[3] || lD(a2, r2, e5), QC(e5, a2, r2, o2, void 0);
}
function dD(e5, t2) {
  let n2;
  const r2 = t2.elm;
  let o2 = e5.data.attrs, i2 = t2.data.attrs;
  if ((o2 || i2) && o2 !== i2) {
    for (n2 in o2 = o2 || {}, i2 = i2 || {}, i2) {
      const e6 = i2[n2];
      o2[n2] !== e6 && (true === e6 ? r2.setAttribute(n2, "") : false === e6 ? r2.removeAttribute(n2) : 120 !== n2.charCodeAt(0) ? r2.setAttribute(n2, e6) : 58 === n2.charCodeAt(3) ? r2.setAttributeNS("http://www.w3.org/XML/1998/namespace", n2, e6) : 58 === n2.charCodeAt(5) ? 109 === n2.charCodeAt(1) ? r2.setAttributeNS("http://www.w3.org/2000/xmlns/", n2, e6) : r2.setAttributeNS("http://www.w3.org/1999/xlink", n2, e6) : r2.setAttribute(n2, e6));
    }
    for (n2 in o2) n2 in i2 || r2.removeAttribute(n2);
  }
}
const fD = { create: dD, update: dD };
function pD(e5, t2) {
  let n2, r2;
  const o2 = t2.elm;
  let i2 = e5.data.class, a2 = t2.data.class;
  if ((i2 || a2) && i2 !== a2) {
    for (r2 in i2 = i2 || {}, a2 = a2 || {}, i2) i2[r2] && !Object.prototype.hasOwnProperty.call(a2, r2) && o2.classList.remove(r2);
    for (r2 in a2) n2 = a2[r2], n2 !== i2[r2] && o2.classList[n2 ? "add" : "remove"](r2);
  }
}
const hD = { create: pD, update: pD }, gD = /[A-Z]/g;
function vD(e5, t2) {
  const n2 = t2.elm;
  let r2, o2 = e5.data.dataset, i2 = t2.data.dataset;
  if (!o2 && !i2) return;
  if (o2 === i2) return;
  o2 = o2 || {}, i2 = i2 || {};
  const a2 = n2.dataset;
  for (r2 in o2) r2 in i2 || (a2 ? r2 in a2 && delete a2[r2] : n2.removeAttribute("data-" + r2.replace(gD, "-$&").toLowerCase()));
  for (r2 in i2) o2[r2] !== i2[r2] && (a2 ? a2[r2] = i2[r2] : n2.setAttribute("data-" + r2.replace(gD, "-$&").toLowerCase(), i2[r2]));
}
const mD = { create: vD, update: vD };
function yD(e5, t2, n2) {
  if ("function" == typeof e5) e5.call(t2, n2, t2);
  else if ("object" == typeof e5) for (let r2 = 0; r2 < e5.length; r2++) yD(e5[r2], t2, n2);
}
function bD(e5, t2) {
  const n2 = e5.type, r2 = t2.data.on;
  r2 && r2[n2] && yD(r2[n2], t2, e5);
}
function ED(e5, t2) {
  const n2 = e5.data.on, r2 = e5.listener, o2 = e5.elm, i2 = t2 && t2.data.on, a2 = t2 && t2.elm;
  let s2;
  if (n2 !== i2) {
    if (n2 && r2) if (i2) for (s2 in n2) i2[s2] || o2.removeEventListener(s2, r2, false);
    else for (s2 in n2) o2.removeEventListener(s2, r2, false);
    if (i2) {
      const r3 = t2.listener = e5.listener || function e6(t3) {
        bD(t3, e6.vnode);
      };
      if (r3.vnode = t2, n2) for (s2 in i2) n2[s2] || a2.addEventListener(s2, r3, false);
      else for (s2 in i2) a2.addEventListener(s2, r3, false);
    }
  }
}
const CD = { create: ED, update: ED, destroy: ED };
function DD(e5, t2) {
  let n2, r2, o2;
  const i2 = t2.elm;
  let a2 = e5.data.props, s2 = t2.data.props;
  if ((a2 || s2) && a2 !== s2) for (n2 in a2 = a2 || {}, s2 = s2 || {}, s2) r2 = s2[n2], o2 = a2[n2], o2 === r2 || "value" === n2 && i2[n2] === r2 || (i2[n2] = r2);
}
const wD = { create: DD, update: DD }, SD = "function" == typeof (null === window || void 0 === window ? void 0 : window.requestAnimationFrame) ? window.requestAnimationFrame.bind(window) : setTimeout;
let AD = false;
function xD(e5, t2, n2) {
  !(function(e6) {
    SD(function() {
      SD(e6);
    });
  })(function() {
    e5[t2] = n2;
  });
}
function OD(e5, t2) {
  let n2, r2;
  const o2 = t2.elm;
  let i2 = e5.data.style, a2 = t2.data.style;
  if (!i2 && !a2) return;
  if (i2 === a2) return;
  i2 = i2 || {}, a2 = a2 || {};
  const s2 = "delayed" in i2;
  for (r2 in i2) r2 in a2 || ("-" === r2[0] && "-" === r2[1] ? o2.style.removeProperty(r2) : o2.style[r2] = "");
  for (r2 in a2) if (n2 = a2[r2], "delayed" === r2 && a2.delayed) for (const e6 in a2.delayed) n2 = a2.delayed[e6], s2 && n2 === i2.delayed[e6] || xD(o2.style, e6, n2);
  else "remove" !== r2 && n2 !== i2[r2] && ("-" === r2[0] && "-" === r2[1] ? o2.style.setProperty(r2, n2) : o2.style[r2] = n2);
}
const ND = { pre: function() {
  AD = false;
}, create: OD, update: OD, destroy: function(e5) {
  let t2, n2;
  const r2 = e5.elm, o2 = e5.data.style;
  if (o2 && (t2 = o2.destroy)) for (n2 in t2) r2.style[n2] = t2[n2];
}, remove: function(e5, t2) {
  const n2 = e5.data.style;
  if (!n2 || !n2.remove) return void t2();
  let r2;
  AD || (e5.elm.offsetLeft, AD = true);
  const o2 = e5.elm;
  let i2 = 0;
  const a2 = n2.remove;
  let s2 = 0;
  const u2 = [];
  for (r2 in a2) u2.push(r2), o2.style[r2] = a2[r2];
  const l2 = getComputedStyle(o2)["transition-property"].split(", ");
  for (; i2 < l2.length; ++i2) -1 !== u2.indexOf(l2[i2]) && s2++;
  o2.addEventListener("transitionend", function(e6) {
    e6.target === o2 && --s2, 0 === s2 && t2();
  });
} };
function BD(e5, t2) {
  for (const n2 of e5) null != n2 && false !== n2 && "" !== n2 && (Array.isArray(n2) ? BD(n2, t2) : "string" == typeof n2 || "number" == typeof n2 || "boolean" == typeof n2 ? t2.push(QC(void 0, void 0, void 0, String(n2), void 0)) : t2.push(n2));
  return t2;
}
function TD(e5, t2, ...n2) {
  const r2 = BD(n2, []);
  return "function" == typeof e5 ? e5(t2, r2) : 1 === r2.length && !r2[0].sel && r2[0].text ? cD(e5, t2, r2[0].text) : cD(e5, t2, r2);
}
var kD = [];
var FD, ID, PD = {};
function _D(e5, t2, n2) {
  return TD(n2.isInline(e5) ? "span" : "div", null, t2);
}
function RD(e5, t2) {
  var n2, r2 = _y.findKey(t2, e5), o2 = t2.isInline(e5), i2 = Kh.isVoid(t2, e5), a2 = my(e5.type, r2.id), s2 = { id: a2, key: r2.id, "data-slate-node": "element", "data-slate-inline": o2 }, u2 = e5.type, l2 = e5.children, c2 = void 0 === l2 ? [] : l2, d2 = (function(e6) {
    return PD[e6] || _D;
  })(u2);
  n2 = i2 ? null : c2.map(function(n3, r3) {
    return HD(n3, r3, e5, t2);
  });
  var f2 = d2(e5, n2, t2);
  if (i2) {
    s2["data-slate-void"] = true;
    var p2 = o2 ? "span" : "div", h2 = Qg(eg.texts(e5), 1), g2 = Qg(h2[0], 1)[0], v2 = TD(p2, { "data-slate-spacer": true, style: { height: "0", color: "transparent", outline: "none", position: "absolute" } }, HD(g2, 0, e5, t2));
    f2 = TD(p2, { style: { position: "relative" } }, f2, v2), Rv.set(g2, 0), Lv.set(g2, e5);
  }
  return null == f2.data && (f2.data = {}), Object.assign(f2.data, s2), i2 || o2 || (f2 = (function(e6, t3) {
    var n3 = t3;
    return kD.forEach(function(r3) {
      n3 = r3(e6, t3);
    }), n3;
  })(e5, f2)), $m(function() {
    var t3 = Jm(a2);
    null != t3 && (Hv.set(r2, t3), zv.set(e5, t3), jv.set(t3, e5));
  }), f2;
}
function LD(e5, t2) {
  return void 0 === t2 && (t2 = false), TD("span", { "data-slate-string": true }, t2 ? e5 + "\n" : e5);
}
function MD(e5, t2) {
  return void 0 === e5 && (e5 = 0), void 0 === t2 && (t2 = false), TD("span", { "data-slate-zero-width": t2 ? "n" : "z", "data-slate-length": e5 }, "\uFEFF", t2 ? TD("br", null) : null);
}
function jD(e5, t2, n2) {
  if (null == e5.text) throw new Error("Current node is not slate Text ".concat(JSON.stringify(e5)));
  var r2 = _y.findKey(n2, e5), o2 = n2.getConfig().decorate;
  if (null == o2) throw new Error("Can not get config.decorate");
  var i2, a2 = _y.findPath(n2, e5), s2 = o2([e5, a2]), u2 = Cg.decorations(e5, s2), l2 = u2.map(function(r3, o3) {
    var i3 = (function(e6, t3, n3, r4, o4) {
      void 0 === t3 && (t3 = false);
      var i4 = e6.text, a3 = _y.findPath(o4, n3), s3 = og.parent(a3);
      if (Kh.isEditor(r4)) throw new Error("Text node ".concat(JSON.stringify(n3), " parent is Editor"));
      return o4.isVoid(r4) ? MD(eg.string(r4).length) : "" !== i4 || r4.children[r4.children.length - 1] !== n3 || o4.isInline(r4) || "" !== Kh.string(o4, s3) ? "" === i4 ? MD() : t3 && "\n" === i4.slice(-1) ? LD(i4, true) : LD(i4) : MD(0, true);
    })(r3, o3 === u2.length - 1, e5, t2, n2);
    return i3 = (function(e6, t3) {
      var n3 = t3;
      return kD.forEach(function(t4) {
        n3 = t4(e6, n3);
      }), n3;
    })(r3, i3), TD("span", { "data-slate-leaf": true }, i3);
  }), c2 = (i2 = r2.id, "w-e-text-".concat(i2)), d2 = TD("span", { "data-slate-node": "text", id: c2, key: r2.id }, l2);
  return $m(function() {
    var t3 = Jm(c2);
    null != t3 && (Hv.set(r2, t3), zv.set(e5, t3), jv.set(t3, e5));
  }), d2;
}
function HD(e5, t2, n2, r2) {
  return Rv.set(e5, t2), Lv.set(e5, n2), $h.isElement(e5) ? RD(e5, r2) : jD(e5, n2, r2);
}
var zD = (function() {
  if (ID) return FD;
  ID = 1;
  var e5, t2 = "[object Symbol]", n2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, r2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, o2 = "\\ud800-\\udfff", i2 = "\\u0300-\\u036f\\ufe20-\\ufe23", a2 = "\\u20d0-\\u20f0", s2 = "\\u2700-\\u27bf", u2 = "a-z\\xdf-\\xf6\\xf8-\\xff", l2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", c2 = "\\ufe0e\\ufe0f", d2 = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", f2 = "['’]", p2 = "[" + o2 + "]", h2 = "[" + d2 + "]", g2 = "[" + i2 + a2 + "]", v2 = "\\d+", m2 = "[" + s2 + "]", b2 = "[" + u2 + "]", E2 = "[^" + o2 + d2 + v2 + s2 + u2 + l2 + "]", C2 = "\\ud83c[\\udffb-\\udfff]", D2 = "[^" + o2 + "]", w2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", S2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", A2 = "[" + l2 + "]", x2 = "\\u200d", O2 = "(?:" + b2 + "|" + E2 + ")", N2 = "(?:" + A2 + "|" + E2 + ")", B2 = "(?:['’](?:d|ll|m|re|s|t|ve))?", T2 = "(?:['’](?:D|LL|M|RE|S|T|VE))?", k2 = "(?:" + g2 + "|" + C2 + ")?", F2 = "[" + c2 + "]?", I2 = F2 + k2 + ("(?:" + x2 + "(?:" + [D2, w2, S2].join("|") + ")" + F2 + k2 + ")*"), P2 = "(?:" + [m2, w2, S2].join("|") + ")" + I2, _2 = "(?:" + [D2 + g2 + "?", g2, w2, S2, p2].join("|") + ")", R2 = RegExp(f2, "g"), L2 = RegExp(g2, "g"), M2 = RegExp(C2 + "(?=" + C2 + ")|" + _2 + I2, "g"), j2 = RegExp([A2 + "?" + b2 + "+" + B2 + "(?=" + [h2, A2, "$"].join("|") + ")", N2 + "+" + T2 + "(?=" + [h2, A2 + O2, "$"].join("|") + ")", A2 + "?" + O2 + "+" + B2, A2 + "+" + T2, v2, P2].join("|"), "g"), H2 = RegExp("[" + x2 + o2 + i2 + a2 + c2 + "]"), z2 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $2 = "object" == typeof y && y && y.Object === Object && y, U2 = "object" == typeof self && self && self.Object === Object && self, V2 = $2 || U2 || Function("return this")(), W2 = (e5 = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "ss" }, function(t3) {
    return null == e5 ? void 0 : e5[t3];
  });
  function G2(e6) {
    return H2.test(e6);
  }
  function q2(e6) {
    return G2(e6) ? (function(e7) {
      return e7.match(M2) || [];
    })(e6) : (function(e7) {
      return e7.split("");
    })(e6);
  }
  var K2 = Object.prototype.toString, Y2 = V2.Symbol, X2 = Y2 ? Y2.prototype : void 0, Z2 = X2 ? X2.toString : void 0;
  function J2(e6) {
    if ("string" == typeof e6) return e6;
    if ((function(e7) {
      return "symbol" == typeof e7 || /* @__PURE__ */ (function(e8) {
        return !!e8 && "object" == typeof e8;
      })(e7) && K2.call(e7) == t2;
    })(e6)) return Z2 ? Z2.call(e6) : "";
    var n3 = e6 + "";
    return "0" == n3 && 1 / e6 == -1 / 0 ? "-0" : n3;
  }
  function Q2(e6, t3, n3) {
    var r3 = e6.length;
    return n3 = void 0 === n3 ? r3 : n3, !t3 && n3 >= r3 ? e6 : (function(e7, t4, n4) {
      var r4 = -1, o3 = e7.length;
      t4 < 0 && (t4 = -t4 > o3 ? 0 : o3 + t4), (n4 = n4 > o3 ? o3 : n4) < 0 && (n4 += o3), o3 = t4 > n4 ? 0 : n4 - t4 >>> 0, t4 >>>= 0;
      for (var i3 = Array(o3); ++r4 < o3; ) i3[r4] = e7[r4 + t4];
      return i3;
    })(e6, t3, n3);
  }
  function ee2(e6) {
    return null == e6 ? "" : J2(e6);
  }
  var te2, ne2, re2 = (te2 = function(e6, t3, n3) {
    return t3 = t3.toLowerCase(), e6 + (n3 ? oe2(ee2(t3).toLowerCase()) : t3);
  }, function(e6) {
    return (function(e7, t3, n3) {
      for (var r3 = -1, o3 = e7 ? e7.length : 0; ++r3 < o3; ) n3 = t3(n3, e7[r3], r3, e7);
      return n3;
    })((function(e7, t3) {
      return e7 = ee2(e7), void 0 === t3 ? (function(e8) {
        return z2.test(e8);
      })(e7) ? (function(e8) {
        return e8.match(j2) || [];
      })(e7) : (function(e8) {
        return e8.match(n2) || [];
      })(e7) : e7.match(t3) || [];
    })((function(e7) {
      return (e7 = ee2(e7)) && e7.replace(r2, W2).replace(L2, "");
    })(e6).replace(R2, "")), te2, "");
  }), oe2 = (ne2 = "toUpperCase", function(e6) {
    var t3 = G2(e6 = ee2(e6)) ? q2(e6) : void 0, n3 = t3 ? t3[0] : e6.charAt(0), r3 = t3 ? Q2(t3, 1).join("") : e6.slice(1);
    return n3[ne2]() + r3;
  });
  return FD = re2;
})(), $D = b(zD);
var UD = ["props", "attrs", "style", "dataset", "on", "hook"];
function VD(e5) {
  var t2 = e5.data, n2 = void 0 === t2 ? {} : t2, r2 = e5.children, o2 = void 0 === r2 ? [] : r2;
  Object.keys(n2).forEach(function(t3) {
    var r3, o3, i2 = n2[t3];
    if ("key" !== t3) {
      if (!UD.includes(t3)) {
        if (t3.startsWith("data-")) {
          var a2 = t3.slice(5);
          return a2 = $D(a2), (function(e6, t4) {
            null == e6.data && (e6.data = {});
            var n3 = e6.data;
            null == n3.dataset && (n3.dataset = {});
            Object.assign(n3.dataset, t4);
          })(e5, ((r3 = {})[a2] = i2, r3)), void delete n2[t3];
        }
        !(function(e6, t4) {
          null == e6.data && (e6.data = {});
          var n3 = e6.data;
          null == n3.props && (n3.props = {});
          Object.assign(n3.props, t4);
        })(e5, (o3 = {}, o3[t3] = i2, o3)), delete n2[t3];
      }
    } else e5.key = i2;
  }), o2.length > 0 && o2.forEach(function(e6) {
    "string" != typeof e6 && VD(e6);
  });
}
function WD(e5, t2) {
  var n2, r2, o2 = e5.$scroll, i2 = (n2 = e5.id, "w-e-textarea-".concat(n2)), a2 = t2.getConfig(), s2 = a2.readOnly, u2 = a2.autoFocus, l2 = (function(e6, t3) {
    return void 0 === t3 && (t3 = false), cD("div#".concat(e6), { props: { contentEditable: !t3 } });
  })(i2, s2), c2 = t2.children || [];
  l2.children = c2.map(function(e6, n3) {
    if (Pv.has(e6)) {
      var r3 = Pv.get(e6);
      if (r3) {
        var o3 = Qg(r3, 2), i3 = o3[0], a3 = o3[1];
        if (a3) return i3 !== n3 && (Rv.set(e6, n3), Pv.set(e6, [n3, a3])), a3;
      }
    }
    var s3 = HD(e6, n3, t2, t2);
    VD(s3);
    var u3 = t2.getConfig().skipCacheTypes, l3 = void 0 === u3 ? ["list-item"] : u3;
    return $h.isElement(e6) && l3.includes(e6.type) || Pv.set(e6, [n3, s3]), s3;
  });
  var d2 = kv.get(e5);
  if (null == d2 && (d2 = true), d2) {
    var f2 = (function(e6) {
      return am('<div\n        id="'.concat(e6, '"\n        data-slate-editor\n        data-slate-node="value"\n        suppressContentEditableWarning\n        role="textarea"\n        spellCheck="true"\n        autoCorrect="true"\n        autoCapitalize="true"\n    ></div>'));
    })(i2);
    o2.append(f2), e5.$textArea = f2, r2 = f2[0], (h2 = uD([hD, wD, ND, mD, CD, fD]))(r2, l2), kv.set(e5, false), Fv.set(e5, h2);
  } else {
    var p2 = Iv.get(e5), h2 = Fv.get(e5);
    if (null == p2 || null == h2) return;
    r2 = p2.elm, h2(p2, l2);
  }
  if (null != r2 || null != (r2 = Jm(i2))) {
    var g2;
    if ((d2 ? u2 : t2.isFocused()) && r2.focus({ preventScroll: true }), d2) {
      var v2 = (g2 = r2) && g2.ownerDocument && g2.ownerDocument.defaultView || null;
      v2 && Uv.set(t2, v2);
    }
    Mv.set(t2, r2), zv.set(t2, r2), jv.set(r2, t2), Iv.set(e5, l2);
  }
}
var GD = 1, qD = (function() {
  function e5(e6) {
    var t2 = this;
    this.id = GD++, this.$textArea = null, this.$progressBar = am('<div class="w-e-progress-bar"></div>'), this.$maxLengthInfo = am('<div class="w-e-max-length-info"></div>'), this.isComposing = false, this.isUpdatingSelection = false, this.isDraggingInternally = false, this.latestElement = null, this.showPlaceholder = false, this.$placeholder = null, this.latestEditorSelection = null, this.onDOMSelectionChange = AC(function() {
      var e7 = t2.editorInstance;
      !(function(e8, t3) {
        var n3 = e8.isComposing, r3 = e8.isUpdatingSelection, o3 = e8.isDraggingInternally;
        if (!(t3.getConfig().readOnly || n3 || r3 || o3)) {
          var i2 = _y.findDocumentOrShadowRoot(t3), a2 = i2.activeElement, s2 = _y.toDOMNode(t3, t3), u2 = i2.getSelection();
          if (a2 !== s2) return Vv.delete(t3), void jg.deselect(t3);
          if (e8.latestElement = a2, Vv.set(t3, true), !u2) return jg.deselect(t3);
          var l2 = u2.anchorNode, c2 = u2.focusNode, d2 = xC(t3, l2) || OC(t3, l2), f2 = xC(t3, c2) || OC(t3, c2);
          if (d2 && f2) {
            var p2 = _y.toSlateRange(t3, u2, { exactMatch: false, suppressThrow: false });
            jg.select(t3, p2);
          }
        }
      })(t2, e7);
    }, 100);
    var n2 = am(e6);
    if (0 === n2.length) throw new Error("Cannot find textarea DOM by selector '".concat(e6, "'"));
    this.$box = n2;
    var r2 = am('<div class="w-e-text-container"></div>');
    r2.append(this.$progressBar), r2.append(this.$maxLengthInfo), n2.append(r2);
    var o2 = am('<div class="w-e-scroll"></div>');
    r2.append(o2), this.$scroll = o2, this.$textAreaContainer = r2, $m(function() {
      var e7 = t2.editorInstance, o3 = _y.getWindow(e7);
      o3.document.addEventListener("selectionchange", t2.onDOMSelectionChange), e7.on(fv, function() {
        o3.document.removeEventListener("selectionchange", t2.onDOMSelectionChange);
      }), r2.on("click", function() {
        return e7.hidePanelOrModal();
      }), e7.on(pv, t2.changeViewState.bind(t2));
      var i2 = e7.getConfig(), a2 = i2.onChange, s2 = i2.scroll;
      a2 && e7.on(pv, function() {
        return a2(e7);
      }), s2 || (n2.css("position", "relative"), r2.addClass("no-scroll")), t2.onFocusAndOnBlur(), e7.on(pv, t2.changeMaxLengthInfo.bind(t2)), t2.bindEvent();
    });
  }
  return Object.defineProperty(e5.prototype, "editorInstance", { get: function() {
    var e6 = Dv.get(this);
    if (null == e6) throw new Error("Can not get editor instance");
    return e6;
  }, enumerable: false, configurable: true }), e5.prototype.bindEvent = function() {
    var e6 = this, t2 = this.$textArea, n2 = this.$scroll, r2 = this.editorInstance;
    null != t2 && (lv(KC, function(n3, o2) {
      t2.on(o2, function(t3) {
        n3(t3, e6, r2);
      });
    }), r2.getConfig().scroll && (n2.css("overflow-y", "auto"), n2.on("scroll", AC(function() {
      r2.emit(hv);
    }, 100))));
  }, e5.prototype.onFocusAndOnBlur = function() {
    var e6 = this, t2 = this.editorInstance, n2 = t2.getConfig(), r2 = n2.onBlur, o2 = n2.onFocus;
    this.latestEditorSelection = t2.selection, t2.on(pv, function() {
      null == e6.latestEditorSelection && null != t2.selection ? setTimeout(function() {
        return o2 && o2(t2);
      }) : null != e6.latestEditorSelection && null == t2.selection && setTimeout(function() {
        return r2 && r2(t2);
      }), e6.latestEditorSelection = t2.selection;
    });
  }, e5.prototype.changeMaxLengthInfo = function() {
    var e6 = this.editorInstance, t2 = e6.getConfig().maxLength;
    if (t2) {
      var n2 = t2 - _y.getLeftLengthOfMaxLength(e6);
      this.$maxLengthInfo[0].innerHTML = "".concat(n2, "/").concat(t2);
    }
  }, e5.prototype.changeProgress = function(e6) {
    var t2 = this.$progressBar;
    t2.css("width", "".concat(e6, "%")), e6 >= 100 && setTimeout(function() {
      t2.hide(), t2.css("width", "0"), t2.show();
    }, 1e3);
  }, e5.prototype.changeViewState = function() {
    var e6 = this, t2 = this.editorInstance;
    WD(this, t2), (function(e7, t3) {
      var n2, r2 = t3.getConfig().placeholder;
      if (r2) {
        var o2 = t3.isEmpty();
        if (o2 && !e7.showPlaceholder && !e7.isComposing) {
          if (null == e7.$placeholder) {
            var i2 = am('<div class="w-e-text-placeholder">'.concat(r2, "</div>"));
            e7.$textAreaContainer.append(i2), e7.$placeholder = i2;
          }
          return e7.$placeholder.show(), void (e7.showPlaceholder = true);
        }
        !o2 && e7.showPlaceholder && (null === (n2 = e7.$placeholder) || void 0 === n2 || n2.hide(), e7.showPlaceholder = false);
      }
    })(this, t2), $m(function() {
      RC(e6, t2);
    });
  }, e5.prototype.destroy = function() {
    this.$textAreaContainer.remove();
  }, e5;
})();
function KD(e5, t2, n2, r2) {
  if (Rv.set(e5, t2), Lv.set(e5, n2), $h.isElement(e5)) {
    var o2 = e5.children;
    if ((void 0 === o2 ? [] : o2).forEach(function(t3, n3) {
      return KD(t3, n3, e5, r2);
    }), Kh.isVoid(r2, e5)) {
      var i2 = Qg(eg.texts(e5), 1), a2 = Qg(i2[0], 1)[0];
      Rv.set(a2, 0), Lv.set(a2, e5);
    }
  }
}
var YD = { en: "Textarea height < 300px. This may cause modal and hoverbar position error", zh: "编辑区域高度 < 300px 这可能会导致 modal hoverbar 定位异常" };
function XD(e5) {
  var t2 = e5.selector, n2 = void 0 === t2 ? "" : t2, r2 = e5.config, o2 = void 0 === r2 ? {} : r2, i2 = e5.content, a2 = e5.html, s2 = e5.plugins, u2 = void 0 === s2 ? [] : s2, l2 = (function(e6) {
    return [qb, Bb, Kv, Ob, tE, Gb, Kb, Vg].reduce(function(e7, t3) {
      return t3(e7);
    }, e6);
  })(/* @__PURE__ */ (() => {
    var e6 = { children: [], operations: [], selection: null, marks: null, isInline: () => false, isVoid: () => false, onChange: () => {
    }, apply: (t3) => {
      for (var n3 of Kh.pathRefs(e6)) ig.transform(n3, t3);
      for (var r3 of Kh.pointRefs(e6)) lg.transform(r3, t3);
      for (var o3 of Kh.rangeRefs(e6)) pg.transform(o3, t3);
      var i3, a3, s3 = oh.get(e6) || [], u3 = ih.get(e6) || /* @__PURE__ */ new Set(), l3 = (e7) => {
        if (e7) {
          var t4 = e7.join(",");
          a3.has(t4) || (a3.add(t4), i3.push(e7));
        }
      };
      if (og.operationCanTransformPath(t3)) for (var c3 of (i3 = [], a3 = /* @__PURE__ */ new Set(), s3)) l3(og.transform(c3, t3));
      else i3 = s3, a3 = u3;
      var d3 = e6.getDirtyPaths(t3);
      for (var f3 of d3) l3(f3);
      oh.set(e6, i3), ih.set(e6, a3), jg.transform(e6, t3), e6.operations.push(t3), Kh.normalize(e6), "set_selection" === t3.type && (e6.marks = null), ah.get(e6) || (ah.set(e6, true), Promise.resolve().then(() => {
        ah.set(e6, false), e6.onChange(), e6.operations = [];
      }));
    }, addMark: (t3, n3) => {
      var { selection: r3 } = e6;
      if (r3) if (fg.isExpanded(r3)) jg.setNodes(e6, { [t3]: n3 }, { match: Cg.isText, split: true });
      else {
        var o3 = fh(fh({}, Kh.marks(e6) || {}), {}, { [t3]: n3 });
        e6.marks = o3, ah.get(e6) || e6.onChange();
      }
    }, deleteBackward: (t3) => {
      var { selection: n3 } = e6;
      n3 && fg.isCollapsed(n3) && jg.delete(e6, { unit: t3, reverse: true });
    }, deleteForward: (t3) => {
      var { selection: n3 } = e6;
      n3 && fg.isCollapsed(n3) && jg.delete(e6, { unit: t3 });
    }, deleteFragment: (t3) => {
      var { selection: n3 } = e6;
      n3 && fg.isExpanded(n3) && jg.delete(e6, { reverse: "backward" === t3 });
    }, getFragment: () => {
      var { selection: t3 } = e6;
      return t3 ? eg.fragment(e6, t3) : [];
    }, insertBreak: () => {
      jg.splitNodes(e6, { always: true });
    }, insertSoftBreak: () => {
      jg.splitNodes(e6, { always: true });
    }, insertFragment: (t3) => {
      jg.insertFragment(e6, t3);
    }, insertNode: (t3) => {
      jg.insertNodes(e6, t3);
    }, insertText: (t3) => {
      var { selection: n3, marks: r3 } = e6;
      if (n3) {
        if (r3) {
          var o3 = fh({ text: t3 }, r3);
          jg.insertNodes(e6, o3);
        } else jg.insertText(e6, t3);
        e6.marks = null;
      }
    }, normalizeNode: (t3) => {
      var [n3, r3] = t3;
      if (!Cg.isText(n3)) if ($h.isElement(n3) && 0 === n3.children.length) jg.insertNodes(e6, { text: "" }, { at: r3.concat(0), voids: true });
      else for (var o3 = !Kh.isEditor(n3) && $h.isElement(n3) && (e6.isInline(n3) || 0 === n3.children.length || Cg.isText(n3.children[0]) || e6.isInline(n3.children[0])), i3 = 0, a3 = 0; a3 < n3.children.length; a3++, i3++) {
        var s3 = eg.get(e6, r3);
        if (!Cg.isText(s3)) {
          var u3 = n3.children[a3], l3 = s3.children[i3 - 1], c3 = a3 === n3.children.length - 1;
          (Cg.isText(u3) || $h.isElement(u3) && e6.isInline(u3)) !== o3 ? (jg.removeNodes(e6, { at: r3.concat(i3), voids: true }), i3--) : $h.isElement(u3) ? e6.isInline(u3) && (null != l3 && Cg.isText(l3) ? c3 && (jg.insertNodes(e6, { text: "" }, { at: r3.concat(i3 + 1), voids: true }), i3++) : (jg.insertNodes(e6, { text: "" }, { at: r3.concat(i3), voids: true }), i3++)) : null != l3 && Cg.isText(l3) && (Cg.equals(u3, l3, { loose: true }) ? (jg.mergeNodes(e6, { at: r3.concat(i3), voids: true }), i3--) : "" === l3.text ? (jg.removeNodes(e6, { at: r3.concat(i3 - 1), voids: true }), i3--) : "" === u3.text && (jg.removeNodes(e6, { at: r3.concat(i3), voids: true }), i3--));
        }
      }
    }, removeMark: (t3) => {
      var { selection: n3 } = e6;
      if (n3) if (fg.isExpanded(n3)) jg.unsetNodes(e6, t3, { match: Cg.isText, split: true });
      else {
        var r3 = fh({}, Kh.marks(e6) || {});
        delete r3[t3], e6.marks = r3, ah.get(e6) || e6.onChange();
      }
    }, getDirtyPaths: (e7) => {
      switch (e7.type) {
        case "insert_text":
        case "remove_text":
        case "set_node":
          var { path: t3 } = e7;
          return og.levels(t3);
        case "insert_node":
          var { node: n3, path: r3 } = e7, o3 = og.levels(r3), i3 = Cg.isText(n3) ? [] : Array.from(eg.nodes(n3), (e8) => {
            var [, t4] = e8;
            return r3.concat(t4);
          });
          return [...o3, ...i3];
        case "merge_node":
          var { path: a3 } = e7;
          return [...og.ancestors(a3), og.previous(a3)];
        case "move_node":
          var { path: s3, newPath: u3 } = e7;
          if (og.equals(s3, u3)) return [];
          var l3 = [], c3 = [];
          for (var d3 of og.ancestors(s3)) {
            var f3 = og.transform(d3, e7);
            l3.push(f3);
          }
          for (var p3 of og.ancestors(u3)) {
            var h3 = og.transform(p3, e7);
            c3.push(h3);
          }
          var g3 = c3[c3.length - 1], v3 = u3[u3.length - 1], m2 = g3.concat(v3);
          return [...l3, ...c3, m2];
        case "remove_node":
          var { path: y2 } = e7;
          return [...og.ancestors(y2)];
        case "split_node":
          var { path: b2 } = e7;
          return [...og.levels(b2), og.next(b2)];
        default:
          return [];
      }
    } };
    return e6;
  })());
  if (n2 && (function(e6, t3) {
    return gy(e6, "data-w-e-textarea", t3);
  })(l2, n2)) throw new Error("Repeated create editor by selector '".concat(n2, "'"));
  var c2 = (function(e6) {
    void 0 === e6 && (e6 = {});
    var t3 = sv(cv), n3 = {}, r3 = e6.MENU_CONF, o3 = void 0 === r3 ? {} : r3;
    return lv(t3, function(e7, t4) {
      n3[t4] = Yg(Yg({}, e7), o3[t4] || {});
    }), delete e6.MENU_CONF, Yg({ scroll: true, readOnly: false, autoFocus: true, decorate: function() {
      return [];
    }, maxLength: 0, MENU_CONF: n3, hoverbarKeys: {}, customAlert: function(e7, t4) {
      window.alert("".concat(t4, ":\n").concat(e7));
    } }, e6);
  })(o2);
  Tv.set(l2, c2);
  var d2 = c2.hoverbarKeys, f2 = void 0 === d2 ? {} : d2;
  if (u2.forEach(function(e6) {
    l2 = e6(l2);
  }), (function(e6, t3) {
    var n3 = t3.html, r3 = t3.content;
    null != n3 ? e6.children = vy(e6, n3) : r3 && r3.length && (e6.children = r3), 0 === e6.children.length && (e6.children = [{ type: "paragraph", children: [{ text: "" }] }]);
  })(l2, { html: a2, content: i2 }), n2) {
    var p2 = new qD(n2);
    Cv.set(l2, p2), Dv.set(p2, l2), p2.changeViewState(), $m(function() {
      var e6 = p2.$scroll;
      null != e6 && e6.height() < 300 && console.warn("".concat(YD.zh, "\n").concat(YD.en), { element: e6, height: e6.height() });
    });
    var h2 = void 0;
    Object.keys(f2).length > 0 && (h2 = new wC(), Av.set(h2, l2), xv.set(l2, h2)), l2.on(pv, function() {
      l2.hidePanelOrModal();
    }), l2.on(hv, function() {
      l2.hidePanelOrModal();
    });
  } else l2.children.forEach(function(e6, t3) {
    return KD(e6, t3, l2, l2);
  });
  var g2 = c2.onCreated, v2 = c2.onDestroyed;
  return g2 && l2.on(dv, function() {
    return g2(l2);
  }), v2 && l2.on(fv, function() {
    return v2(l2);
  }), $m(function() {
    return l2.emit(dv);
  }), l2;
}
var ZD = (function() {
  function e5(e6, t2) {
    var n2 = this;
    this.$toolbar = am('<div class="w-e-bar w-e-bar-show w-e-toolbar"></div>'), this.menus = {}, this.toolbarItems = [], this.config = {}, this.lngListen = function() {
    }, this.changeToolbarState = rE(function() {
      n2.toolbarItems.forEach(function(e7) {
        e7.changeMenuState();
      });
    }, 200), this.config = t2;
    var r2 = am(e6);
    if (0 === r2.length) throw new Error("Cannot find toolbar DOM by selector '".concat(e6, "'"));
    this.$box = r2;
    var o2 = this.$toolbar;
    o2.on("mousedown", function(e7) {
      return e7.preventDefault();
    }, { passive: false }), r2.append(o2), $m(function() {
      n2.initToolbar(), n2.lngListen = JE(function() {
        return n2.initToolbar();
      }), n2.getEditorInstance().on(pv, n2.changeToolbarState);
    });
  }
  return e5.prototype.getMenus = function() {
    return this.menus;
  }, e5.prototype.getConfig = function() {
    return this.config;
  }, e5.prototype.initToolbar = function() {
    this.menus = {};
    var e6 = this.$toolbar;
    null == e6 || e6.empty(), this.registerItems(), this.changeToolbarState();
  }, e5.prototype.registerItems = function() {
    var e6 = this, t2 = "", n2 = this.$toolbar, r2 = this.config, o2 = r2.toolbarKeys, i2 = void 0 === o2 ? [] : o2, a2 = r2.insertKeys, s2 = void 0 === a2 ? { index: 0, keys: [] } : a2, u2 = r2.excludeKeys, l2 = void 0 === u2 ? [] : u2, c2 = sv(i2), d2 = [];
    d2 = Array.isArray(s2) ? s2 : [s2];
    var f2 = 0;
    d2.forEach(function(e7) {
      var t3 = e7.index + f2;
      if (e7.replaceFn && c2[t3]) {
        var n3 = e7.replaceFn(c2[t3]);
        if (!n3) throw new Error("This function needs to return the menu configuration：string | IMenuGroup");
        c2[t3] = n3;
      }
      e7.keys.length > 0 && ("string" == typeof e7.keys && (e7.keys = [e7.keys]), e7.keys.forEach(function(e8, n4) {
        c2.splice(t3 + n4, 0, e8);
      }), f2 += e7.keys.length);
    });
    var p2 = c2.filter(function(e7) {
      var t3 = "string" == typeof e7 ? e7 : e7.key;
      return !l2.includes(t3);
    }), h2 = p2.length;
    p2.forEach(function(r3, o3) {
      if ("|" === r3) {
        if (0 === o3) return;
        if (o3 + 1 === h2) return;
        if ("|" === t2) return;
        var i3 = nC();
        return n2.append(i3), void (t2 = r3);
      }
      if ("string" == typeof r3) return e6.registerSingleItem(r3, e6), void (t2 = r3);
      e6.registerGroup(r3), t2 = "group";
    });
  }, e5.prototype.registerGroup = function(e6) {
    var t2 = this, n2 = this.$toolbar, r2 = (function(e7) {
      return new vC(e7);
    })(e6), o2 = e6.menuKeys, i2 = void 0 === o2 ? [] : o2, a2 = this.config.excludeKeys, s2 = void 0 === a2 ? [] : a2;
    i2.forEach(function(e7) {
      s2.includes(e7) || t2.registerSingleItem(e7, r2);
    }), n2.append(r2.$elem);
  }, e5.prototype.registerSingleItem = function(e6, t2) {
    var n2 = this.getEditorInstance(), r2 = t2 instanceof vC, o2 = this.menus, i2 = o2[e6];
    if (null == i2) {
      var a2 = bv[e6];
      if (null == a2) throw new Error("Not found menu item factory by key '".concat(e6, "'"));
      if ("function" != typeof a2) throw new Error("Menu item factory (key='".concat(e6, "') is not a function"));
      i2 = a2(), o2[e6] = i2;
    } else console.warn("Duplicated toolbar menu key '".concat(e6, "'\n重复注册了菜单栏 menu '").concat(e6, "'"));
    var s2 = n2.getMenuConfig(e6);
    s2 && void 0 !== s2.iconSvg && (i2.iconSvg = s2.iconSvg);
    var u2 = bC(e6, i2, r2);
    (this.toolbarItems.push(u2), Ov.set(u2, n2), r2) ? t2.appendBarItem(u2) : t2.$toolbar.append(u2.$elem);
  }, e5.prototype.getEditorInstance = function() {
    var e6 = wv.get(this);
    if (null == e6) throw new Error("Can not get editor instance");
    return e6;
  }, e5.prototype.destroy = function() {
    var e6;
    this.$toolbar.remove(), null === (e6 = this.lngListen) || void 0 === e6 || e6.call(this), this.menus = {}, this.toolbarItems = [];
  }, e5;
})();
function JD(e5, t2) {
  if (null == e5) throw new Error("Cannot create toolbar, because editor is null");
  var n2 = t2.selector, r2 = t2.config, o2 = void 0 === r2 ? {} : r2;
  if ((function(e6, t3) {
    return gy(e6, "data-w-e-toolbar", t3);
  })(e5, n2)) throw new Error("Repeated create toolbar by selector '".concat(n2, "'"));
  var i2 = Yg({ toolbarKeys: [], excludeKeys: [], insertKeys: { index: 0, keys: [] }, modalAppendToBody: false }, o2 || {}), a2 = new ZD(n2, i2);
  return wv.set(a2, e5), Sv.set(e5, a2), a2;
}
var QD, ew, tw, nw, rw, ow = { exports: {} }, iw = {};
function aw() {
  if (tw) return iw;
  tw = 1, Object.defineProperty(iw, "__esModule", { value: true }), iw.justErrorsLogger = iw.debugLogger = void 0;
  const e5 = (function() {
    if (ew) return QD;
    function e6(e7) {
      return e7 < 10 ? `0${e7}` : e7.toString();
    }
    return ew = 1, QD = function() {
      const t3 = /* @__PURE__ */ new Date();
      return `${e6(t3.getHours())}:${e6(t3.getMinutes())}:${e6(t3.getSeconds())}`;
    };
  })(), t2 = { debug: () => {
  }, warn: () => {
  }, error: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++) n3[r2] = arguments[r2];
    return console.error(`[Uppy] [${e5()}]`, ...n3);
  } };
  iw.justErrorsLogger = t2;
  const n2 = { debug: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++) n3[r2] = arguments[r2];
    return console.debug(`[Uppy] [${e5()}]`, ...n3);
  }, warn: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++) n3[r2] = arguments[r2];
    return console.warn(`[Uppy] [${e5()}]`, ...n3);
  }, error: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++) n3[r2] = arguments[r2];
    return console.error(`[Uppy] [${e5()}]`, ...n3);
  } };
  return iw.debugLogger = n2, iw;
}
function sw() {
  if (rw) return nw;
  rw = 1;
  return nw = { nanoid: (e5 = 21) => {
    let t2 = "", n2 = 0 | e5;
    for (; n2--; ) t2 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
    return t2;
  }, customAlphabet: (e5, t2 = 21) => (n2 = t2) => {
    let r2 = "", o2 = 0 | n2;
    for (; o2--; ) r2 += e5[Math.random() * e5.length | 0];
    return r2;
  } }, nw;
}
var uw, lw, cw, dw, fw, pw, hw, gw, vw, mw, yw, bw, Ew, Cw, Dw, ww, Sw, Aw, xw, Ow, Nw, Bw, Tw, kw, Fw, Iw, Pw, _w, Rw, Lw, Mw, jw = {};
function Hw() {
  return lw ? uw : (lw = 1, uw = function(e5) {
    if ("number" != typeof e5 || isNaN(e5)) throw new TypeError("Expected a number, got " + typeof e5);
    var t2 = e5 < 0, n2 = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    if (t2 && (e5 = -e5), e5 < 1) return (t2 ? "-" : "") + e5 + " B";
    var r2 = Math.min(Math.floor(Math.log(e5) / Math.log(1024)), n2.length - 1);
    e5 = Number(e5 / Math.pow(1024, r2));
    var o2 = n2[r2];
    return e5 >= 10 || e5 % 1 == 0 ? (t2 ? "-" : "") + e5.toFixed(0) + " " + o2 : (t2 ? "-" : "") + e5.toFixed(1) + " " + o2;
  });
}
function zw() {
  if (dw) return cw;
  function e5(e6, t2) {
    this.text = e6 = e6 || "", this.hasWild = ~e6.indexOf("*"), this.separator = t2, this.parts = e6.split(t2);
  }
  return dw = 1, e5.prototype.match = function(e6) {
    var t2, n2, r2 = true, o2 = this.parts, i2 = o2.length;
    if ("string" == typeof e6 || e6 instanceof String) if (this.hasWild || this.text == e6) {
      for (n2 = (e6 || "").split(this.separator), t2 = 0; r2 && t2 < i2; t2++) "*" !== o2[t2] && (r2 = t2 < n2.length && o2[t2] === n2[t2]);
      r2 = r2 && n2;
    } else r2 = false;
    else if ("function" == typeof e6.splice) for (r2 = [], t2 = e6.length; t2--; ) this.match(e6[t2]) && (r2[r2.length] = e6[t2]);
    else if ("object" == typeof e6) for (var a2 in r2 = {}, e6) this.match(a2) && (r2[a2] = e6[a2]);
    return r2;
  }, cw = function(t2, n2, r2) {
    var o2 = new e5(t2, r2 || /[\/\.]/);
    return void 0 !== n2 ? o2.match(n2) : o2;
  }, cw;
}
function $w() {
  if (hw) return jw;
  hw = 1, Object.defineProperty(jw, "__esModule", { value: true }), jw.defaultOptions = jw.RestrictionError = jw.Restricter = void 0;
  const e5 = Hw(), t2 = (function() {
    if (pw) return fw;
    pw = 1;
    var e6 = zw(), t3 = /[\/\+\.]/;
    return fw = function(n3, r2) {
      function o2(r3) {
        var o3 = e6(r3, n3, t3);
        return o3 && o3.length >= 2;
      }
      return r2 ? o2(r2.split(";")[0]) : o2;
    };
  })();
  jw.defaultOptions = { maxFileSize: null, minFileSize: null, maxTotalFileSize: null, maxNumberOfFiles: null, minNumberOfFiles: null, allowedFileTypes: null, requiredMetaFields: [] };
  class n2 extends Error {
    constructor() {
      super(...arguments), this.isRestriction = true;
    }
  }
  jw.RestrictionError = n2, "undefined" == typeof AggregateError && (globalThis.AggregateError = class extends Error {
    constructor(e6, t3) {
      super(t3), this.errors = e6;
    }
  });
  return jw.Restricter = class {
    constructor(e6, t3) {
      this.i18n = t3, this.getOpts = () => {
        const t4 = e6();
        if (null != t4.restrictions.allowedFileTypes && !Array.isArray(t4.restrictions.allowedFileTypes)) throw new TypeError("`restrictions.allowedFileTypes` must be an array");
        return t4;
      };
    }
    validate(r2, o2) {
      const { maxFileSize: i2, minFileSize: a2, maxTotalFileSize: s2, maxNumberOfFiles: u2, allowedFileTypes: l2 } = this.getOpts().restrictions;
      if (u2) {
        const e6 = o2.filter((e7) => !e7.isGhost);
        if (e6.length + 1 > u2) throw new n2(`${this.i18n("youCanOnlyUploadX", { smart_count: u2 })}`);
      }
      if (l2) {
        if (!l2.some((e6) => e6.includes("/") ? !!r2.type && t2(r2.type.replace(/;.*?$/, ""), e6) : !("." !== e6[0] || !r2.extension) && r2.extension.toLowerCase() === e6.slice(1).toLowerCase())) {
          const e6 = l2.join(", ");
          throw new n2(this.i18n("youCanOnlyUploadFileTypes", { types: e6 }));
        }
      }
      if (s2 && null != r2.size) {
        const t3 = o2.reduce((e6, t4) => e6 + t4.size, r2.size);
        if (t3 > s2) throw new n2(this.i18n("exceedsSize", { size: e5(s2), file: r2.name }));
      }
      if (i2 && null != r2.size && r2.size > i2) throw new n2(this.i18n("exceedsSize", { size: e5(i2), file: r2.name }));
      if (a2 && null != r2.size && r2.size < a2) throw new n2(this.i18n("inferiorSize", { size: e5(a2) }));
    }
    validateMinNumberOfFiles(e6) {
      const { minNumberOfFiles: t3 } = this.getOpts().restrictions;
      if (Object.keys(e6).length < t3) throw new n2(this.i18n("youHaveToAtLeastSelectX", { smart_count: t3 }));
    }
    getMissingRequiredMetaFields(e6) {
      const t3 = new n2(this.i18n("missingRequiredMetaFieldOnFile", { fileName: e6.name })), { requiredMetaFields: r2 } = this.getOpts().restrictions, o2 = Object.prototype.hasOwnProperty, i2 = [];
      for (const t4 of r2) o2.call(e6.meta, t4) && "" !== e6.meta[t4] || i2.push(t4);
      return { missingFields: i2, error: t3 };
    }
  }, jw;
}
function Uw() {
  if (vw) return gw;
  return vw = 1, gw = function(e5, t2) {
    return Object.prototype.hasOwnProperty.call(e5, t2);
  };
}
function Vw() {
  if (yw) return mw;
  function e5(e6, t3) {
    if (!Object.prototype.hasOwnProperty.call(e6, t3)) throw new TypeError("attempted to use private field on non-instance");
    return e6;
  }
  yw = 1;
  var t2 = 0;
  function n2(e6) {
    return "__private_" + t2++ + "_" + e6;
  }
  const r2 = Uw();
  function o2(e6, t3, n3) {
    const r3 = [];
    return e6.forEach((e7) => "string" != typeof e7 ? r3.push(e7) : t3[Symbol.split](e7).forEach((e8, t4, o3) => {
      "" !== e8 && r3.push(e8), t4 < o3.length - 1 && r3.push(n3);
    })), r3;
  }
  /**
  	 * Takes a string with placeholder variables like `%{smart_count} file selected`
  	 * and replaces it with values from options `{smart_count: 5}`
  	 *
  	 * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
  	 * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
  	 *
  	 * @param {string} phrase that needs interpolation, with placeholders
  	 * @param {object} options with values that will be used to replace placeholders
  	 * @returns {any[]} interpolated
  	 */
  function i2(e6, t3) {
    const n3 = /\$/g;
    let r3 = [e6];
    if (null == t3) return r3;
    for (const e7 of Object.keys(t3)) if ("_" !== e7) {
      let i3 = t3[e7];
      "string" == typeof i3 && (i3 = n3[Symbol.replace](i3, "$$$$")), r3 = o2(r3, new RegExp(`%\\{${e7}\\}`, "g"), i3);
    }
    return r3;
  }
  var a2 = n2("apply");
  function s2(e6) {
    if (null == e6 || !e6.strings) return;
    const t3 = this.locale;
    this.locale = { ...t3, strings: { ...t3.strings, ...e6.strings } }, this.locale.pluralize = e6.pluralize || t3.pluralize;
  }
  return mw = class {
    constructor(t3) {
      Object.defineProperty(this, a2, { value: s2 }), this.locale = { strings: {}, pluralize: (e6) => 1 === e6 ? 0 : 1 }, Array.isArray(t3) ? t3.forEach(e5(this, a2)[a2], this) : e5(this, a2)[a2](t3);
    }
    translate(e6, t3) {
      return this.translateArray(e6, t3).join("");
    }
    translateArray(e6, t3) {
      if (!r2(this.locale.strings, e6)) throw new Error(`missing string: ${e6}`);
      const n3 = this.locale.strings[e6];
      if ("object" == typeof n3) {
        if (t3 && void 0 !== t3.smart_count) {
          return i2(n3[this.locale.pluralize(t3.smart_count)], t3);
        }
        throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
      }
      return i2(n3, t3);
    }
  }, mw;
}
function Ww() {
  return Ew || (Ew = 1, bw = function() {
    var e5 = {}, t2 = e5._fns = {};
    return e5.emit = function(e6, n2, r2, o2, i2, a2, s2) {
      var u2 = (function(e7) {
        var n3 = t2[e7] ? t2[e7] : [], r3 = e7.indexOf(":"), o3 = -1 === r3 ? [e7] : [e7.substring(0, r3), e7.substring(r3 + 1)], i3 = Object.keys(t2), a3 = 0, s3 = i3.length;
        for (; a3 < s3; a3++) {
          var u3 = i3[a3];
          if ("*" === u3 && (n3 = n3.concat(t2[u3])), 2 === o3.length && o3[0] === u3) {
            n3 = n3.concat(t2[u3]);
            break;
          }
        }
        return n3;
      })(e6);
      u2.length && (function(e7, t3, n3) {
        var r3 = 0, o3 = t3.length;
        for (; r3 < o3 && t3[r3]; r3++) t3[r3].event = e7, t3[r3].apply(t3[r3], n3);
      })(e6, u2, [n2, r2, o2, i2, a2, s2]);
    }, e5.on = function(e6, n2) {
      t2[e6] || (t2[e6] = []), t2[e6].push(n2);
    }, e5.once = function(t3, n2) {
      this.on(t3, function r2() {
        n2.apply(this, arguments), e5.off(t3, r2);
      });
    }, e5.off = function(e6, t3) {
      var n2 = [];
      if (e6 && t3) for (var r2 = this._fns[e6], o2 = 0, i2 = r2 ? r2.length : 0; o2 < i2; o2++) r2[o2] !== t3 && n2.push(r2[o2]);
      n2.length ? this._fns[e6] = n2 : delete this._fns[e6];
    }, e5;
  }), bw;
}
function Gw() {
  if (Dw) return Cw;
  Dw = 1;
  var e5 = 0;
  function t2(t3) {
    return "__private_" + e5++ + "_" + t3;
  }
  var n2 = t2("publish");
  class r2 {
    constructor() {
      Object.defineProperty(this, n2, { value: o2 }), this.state = {}, this.callbacks = [];
    }
    getState() {
      return this.state;
    }
    setState(e6) {
      const t3 = { ...this.state }, r3 = { ...this.state, ...e6 };
      this.state = r3, (function(e7, t4) {
        if (!Object.prototype.hasOwnProperty.call(e7, t4)) throw new TypeError("attempted to use private field on non-instance");
        return e7;
      })(this, n2)[n2](t3, r3, e6);
    }
    subscribe(e6) {
      return this.callbacks.push(e6), () => {
        this.callbacks.splice(this.callbacks.indexOf(e6), 1);
      };
    }
  }
  function o2() {
    for (var e6 = arguments.length, t3 = new Array(e6), n3 = 0; n3 < e6; n3++) t3[n3] = arguments[n3];
    this.callbacks.forEach((e7) => {
      e7(...t3);
    });
  }
  return r2.VERSION = "2.1.1", Cw = function() {
    return new r2();
  };
}
function qw() {
  if (Sw) return ww;
  return Sw = 1, ww = function(e5) {
    const t2 = e5.lastIndexOf(".");
    return -1 === t2 || t2 === e5.length - 1 ? { name: e5, extension: void 0 } : { name: e5.slice(0, t2), extension: e5.slice(t2 + 1) };
  };
}
function Kw() {
  return xw ? Aw : (xw = 1, Aw = { md: "text/markdown", markdown: "text/markdown", mp4: "video/mp4", mp3: "audio/mp3", svg: "image/svg+xml", jpg: "image/jpeg", png: "image/png", gif: "image/gif", heic: "image/heic", heif: "image/heif", yaml: "text/yaml", yml: "text/yaml", csv: "text/csv", tsv: "text/tab-separated-values", tab: "text/tab-separated-values", avi: "video/x-msvideo", mks: "video/x-matroska", mkv: "video/x-matroska", mov: "video/quicktime", dicom: "application/dicom", doc: "application/msword", docm: "application/vnd.ms-word.document.macroenabled.12", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dot: "application/msword", dotm: "application/vnd.ms-word.template.macroenabled.12", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", xla: "application/vnd.ms-excel", xlam: "application/vnd.ms-excel.addin.macroenabled.12", xlc: "application/vnd.ms-excel", xlf: "application/x-xliff+xml", xlm: "application/vnd.ms-excel", xls: "application/vnd.ms-excel", xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12", xlsm: "application/vnd.ms-excel.sheet.macroenabled.12", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xlt: "application/vnd.ms-excel", xltm: "application/vnd.ms-excel.template.macroenabled.12", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", xlw: "application/vnd.ms-excel", txt: "text/plain", text: "text/plain", conf: "text/plain", log: "text/plain", pdf: "application/pdf", zip: "application/zip", "7z": "application/x-7z-compressed", rar: "application/x-rar-compressed", tar: "application/x-tar", gz: "application/gzip", dmg: "application/x-apple-diskimage" });
}
function Yw() {
  if (Mw) return Lw;
  Mw = 1;
  var e5 = sw(), t2 = aw(), n2 = $w();
  let r2, o2;
  function i2(e6, t3) {
    if (!Object.prototype.hasOwnProperty.call(e6, t3)) throw new TypeError("attempted to use private field on non-instance");
    return e6;
  }
  var a2 = 0;
  function s2(e6) {
    return "__private_" + a2++ + "_" + e6;
  }
  const u2 = Vw(), l2 = Ww(), c2 = SC(), d2 = Gw(), f2 = (function() {
    if (Nw) return Ow;
    Nw = 1;
    const e6 = qw(), t3 = Kw();
    return Ow = function(n3) {
      var r3;
      if (n3.type) return n3.type;
      const o3 = n3.name ? null == (r3 = e6(n3.name).extension) ? void 0 : r3.toLowerCase() : null;
      return o3 && o3 in t3 ? t3[o3] : "application/octet-stream";
    };
  })(), p2 = qw(), h2 = (function() {
    if (Tw) return Bw;
    function e6(e7) {
      let t3 = "";
      return e7.replace(/[^A-Z0-9]/gi, (e8) => (t3 += `-${(function(e9) {
        return e9.charCodeAt(0).toString(32);
      })(e8)}`, "/")) + t3;
    }
    return Tw = 1, Bw = function(t3) {
      let n3 = "uppy";
      return "string" == typeof t3.name && (n3 += `-${e6(t3.name.toLowerCase())}`), void 0 !== t3.type && (n3 += `-${t3.type}`), t3.meta && "string" == typeof t3.meta.relativePath && (n3 += `-${e6(t3.meta.relativePath.toLowerCase())}`), void 0 !== t3.data.size && (n3 += `-${t3.data.size}`), void 0 !== t3.data.lastModified && (n3 += `-${t3.data.lastModified}`), n3;
    };
  })(), g2 = (Fw || (Fw = 1, kw = function(e6) {
    if (null == e6 && "undefined" != typeof navigator && (e6 = navigator.userAgent), !e6) return true;
    const t3 = /Edge\/(\d+\.\d+)/.exec(e6);
    if (!t3) return true;
    const n3 = t3[1];
    let [r3, o3] = n3.split(".");
    return r3 = parseInt(r3, 10), o3 = parseInt(o3, 10), r3 < 15 || 15 === r3 && o3 < 15063 || r3 > 18 || 18 === r3 && o3 >= 18218;
  }), kw), v2 = Pw ? Iw : (Pw = 1, Iw = function(e6, t3) {
    return t3.name ? t3.name : "image" === e6.split("/")[0] ? `${e6.split("/")[0]}.${e6.split("/")[1]}` : "noname";
  }), m2 = Rw ? _w : (Rw = 1, _w = { strings: { addBulkFilesFailed: { 0: "Failed to add %{smart_count} file due to an internal error", 1: "Failed to add %{smart_count} files due to internal errors" }, youCanOnlyUploadX: { 0: "You can only upload %{smart_count} file", 1: "You can only upload %{smart_count} files" }, youHaveToAtLeastSelectX: { 0: "You have to select at least %{smart_count} file", 1: "You have to select at least %{smart_count} files" }, exceedsSize: "%{file} exceeds maximum allowed size of %{size}", missingRequiredMetaField: "Missing required meta fields", missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}", inferiorSize: "This file is smaller than the allowed size of %{size}", youCanOnlyUploadFileTypes: "You can only upload: %{types}", noMoreFilesAllowed: "Cannot add more files", noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists", companionError: "Connection with Companion failed", authAborted: "Authentication aborted", companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}", failedToUpload: "Failed to upload %{file}", noInternetConnection: "No Internet connection", connectedToInternet: "Connected to the Internet", noFilesFound: "You have no files or folders here", selectX: { 0: "Select %{smart_count}", 1: "Select %{smart_count}" }, allFilesFromFolderNamed: "All files from folder %{name}", openFolderNamed: "Open folder %{name}", cancel: "Cancel", logOut: "Log out", filter: "Filter", resetFilter: "Reset filter", loading: "Loading...", authenticateWithTitle: "Please authenticate with %{pluginName} to select files", authenticateWith: "Connect to %{pluginName}", signInWithGoogle: "Sign in with Google", searchImages: "Search for images", enterTextToSearch: "Enter text to search for images", search: "Search", emptyFolderAdded: "No files were added from empty folder", folderAlreadyAdded: 'The folder "%{folder}" was already added', folderAdded: { 0: "Added %{smart_count} file from %{folder}", 1: "Added %{smart_count} files from %{folder}" } } });
  var y2 = s2("plugins"), b2 = s2("restricter"), E2 = s2("storeUnsubscribe"), C2 = s2("emitter"), D2 = s2("preProcessors"), w2 = s2("uploaders"), S2 = s2("postProcessors"), A2 = s2("informAndEmit"), x2 = s2("checkRequiredMetaFieldsOnFile"), O2 = s2("checkRequiredMetaFields"), N2 = s2("assertNewUploadAllowed"), B2 = s2("checkAndCreateFileStateObject"), T2 = s2("startIfAutoProceed"), k2 = s2("addListeners"), F2 = s2("updateOnlineStatus"), I2 = s2("createUpload"), P2 = s2("getUpload"), _2 = s2("removeUpload"), R2 = s2("runUpload");
  r2 = Symbol.for("uppy test: getPlugins"), o2 = Symbol.for("uppy test: createUpload");
  class L2 {
    constructor(e6) {
      Object.defineProperty(this, R2, { value: K2 }), Object.defineProperty(this, _2, { value: q2 }), Object.defineProperty(this, P2, { value: G2 }), Object.defineProperty(this, I2, { value: W2 }), Object.defineProperty(this, k2, { value: V2 }), Object.defineProperty(this, T2, { value: U2 }), Object.defineProperty(this, B2, { value: $2 }), Object.defineProperty(this, N2, { value: z2 }), Object.defineProperty(this, O2, { value: H2 }), Object.defineProperty(this, x2, { value: j2 }), Object.defineProperty(this, A2, { value: M2 }), Object.defineProperty(this, y2, { writable: true, value: /* @__PURE__ */ Object.create(null) }), Object.defineProperty(this, b2, { writable: true, value: void 0 }), Object.defineProperty(this, E2, { writable: true, value: void 0 }), Object.defineProperty(this, C2, { writable: true, value: l2() }), Object.defineProperty(this, D2, { writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, w2, { writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, S2, { writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, F2, { writable: true, value: this.updateOnlineStatus.bind(this) }), this.defaultLocale = m2;
      const r3 = { id: "uppy", autoProceed: false, allowMultipleUploads: true, allowMultipleUploadBatches: true, debug: false, restrictions: n2.defaultOptions, meta: {}, onBeforeFileAdded: (e7) => e7, onBeforeUpload: (e7) => e7, store: d2(), logger: t2.justErrorsLogger, infoTimeout: 5e3 };
      this.opts = { ...r3, ...e6, restrictions: { ...r3.restrictions, ...e6 && e6.restrictions } }, e6 && e6.logger && e6.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e6 && e6.debug && (this.opts.logger = t2.debugLogger), this.log(`Using Core v${this.constructor.VERSION}`), this.i18nInit(), this.calculateProgress = c2(this.calculateProgress.bind(this), 500, { leading: true, trailing: true }), this.store = this.opts.store, this.setState({ plugins: {}, files: {}, currentUploads: {}, allowNewUpload: true, capabilities: { uploadProgress: g2(), individualCancellation: true, resumableUploads: false }, totalProgress: 0, meta: { ...this.opts.meta }, info: [], recoveredState: null }), i2(this, b2)[b2] = new n2.Restricter(() => this.opts, this.i18n), i2(this, E2)[E2] = this.store.subscribe((e7, t3, n3) => {
        this.emit("state-update", e7, t3, n3), this.updateAll(t3);
      }), this.opts.debug && "undefined" != typeof window && (window[this.opts.id] = this), i2(this, k2)[k2]();
    }
    emit(e6) {
      for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r3 = 1; r3 < t3; r3++) n3[r3 - 1] = arguments[r3];
      i2(this, C2)[C2].emit(e6, ...n3);
    }
    on(e6, t3) {
      return i2(this, C2)[C2].on(e6, t3), this;
    }
    once(e6, t3) {
      return i2(this, C2)[C2].once(e6, t3), this;
    }
    off(e6, t3) {
      return i2(this, C2)[C2].off(e6, t3), this;
    }
    updateAll(e6) {
      this.iteratePlugins((t3) => {
        t3.update(e6);
      });
    }
    setState(e6) {
      this.store.setState(e6);
    }
    getState() {
      return this.store.getState();
    }
    get state() {
      return this.getState();
    }
    setFileState(e6, t3) {
      if (!this.getState().files[e6]) throw new Error(`Can’t set state for ${e6} (the file could have been removed)`);
      this.setState({ files: { ...this.getState().files, [e6]: { ...this.getState().files[e6], ...t3 } } });
    }
    i18nInit() {
      const e6 = new u2([this.defaultLocale, this.opts.locale]);
      this.i18n = e6.translate.bind(e6), this.i18nArray = e6.translateArray.bind(e6), this.locale = e6.locale;
    }
    setOptions(e6) {
      this.opts = { ...this.opts, ...e6, restrictions: { ...this.opts.restrictions, ...e6 && e6.restrictions } }, e6.meta && this.setMeta(e6.meta), this.i18nInit(), e6.locale && this.iteratePlugins((e7) => {
        e7.setOptions();
      }), this.setState();
    }
    resetProgress() {
      const e6 = { percentage: 0, bytesUploaded: 0, uploadComplete: false, uploadStarted: null }, t3 = { ...this.getState().files }, n3 = {};
      Object.keys(t3).forEach((r3) => {
        const o3 = { ...t3[r3] };
        o3.progress = { ...o3.progress, ...e6 }, n3[r3] = o3;
      }), this.setState({ files: n3, totalProgress: 0 }), this.emit("reset-progress");
    }
    addPreProcessor(e6) {
      i2(this, D2)[D2].add(e6);
    }
    removePreProcessor(e6) {
      return i2(this, D2)[D2].delete(e6);
    }
    addPostProcessor(e6) {
      i2(this, S2)[S2].add(e6);
    }
    removePostProcessor(e6) {
      return i2(this, S2)[S2].delete(e6);
    }
    addUploader(e6) {
      i2(this, w2)[w2].add(e6);
    }
    removeUploader(e6) {
      return i2(this, w2)[w2].delete(e6);
    }
    setMeta(e6) {
      const t3 = { ...this.getState().meta, ...e6 }, n3 = { ...this.getState().files };
      Object.keys(n3).forEach((t4) => {
        n3[t4] = { ...n3[t4], meta: { ...n3[t4].meta, ...e6 } };
      }), this.log("Adding metadata:"), this.log(e6), this.setState({ meta: t3, files: n3 });
    }
    setFileMeta(e6, t3) {
      const n3 = { ...this.getState().files };
      if (!n3[e6]) return void this.log("Was trying to set metadata for a file that has been removed: ", e6);
      const r3 = { ...n3[e6].meta, ...t3 };
      n3[e6] = { ...n3[e6], meta: r3 }, this.setState({ files: n3 });
    }
    getFile(e6) {
      return this.getState().files[e6];
    }
    getFiles() {
      const { files: e6 } = this.getState();
      return Object.values(e6);
    }
    getObjectOfFilesPerState() {
      const { files: e6, totalProgress: t3, error: n3 } = this.getState(), r3 = Object.values(e6), o3 = r3.filter((e7) => {
        let { progress: t4 } = e7;
        return !t4.uploadComplete && t4.uploadStarted;
      }), i3 = r3.filter((e7) => !e7.progress.uploadStarted), a3 = r3.filter((e7) => e7.progress.uploadStarted || e7.progress.preprocess || e7.progress.postprocess), s3 = r3.filter((e7) => e7.progress.uploadStarted), u3 = r3.filter((e7) => e7.isPaused), l3 = r3.filter((e7) => e7.progress.uploadComplete), c3 = r3.filter((e7) => e7.error), d3 = o3.filter((e7) => !e7.isPaused), f3 = r3.filter((e7) => e7.progress.preprocess || e7.progress.postprocess);
      return { newFiles: i3, startedFiles: a3, uploadStartedFiles: s3, pausedFiles: u3, completeFiles: l3, erroredFiles: c3, inProgressFiles: o3, inProgressNotPausedFiles: d3, processingFiles: f3, isUploadStarted: s3.length > 0, isAllComplete: 100 === t3 && l3.length === r3.length && 0 === f3.length, isAllErrored: !!n3 && c3.length === r3.length, isAllPaused: 0 !== o3.length && u3.length === o3.length, isUploadInProgress: o3.length > 0, isSomeGhost: r3.some((e7) => e7.isGhost) };
    }
    validateRestrictions(e6, t3) {
      void 0 === t3 && (t3 = this.getFiles());
      try {
        return i2(this, b2)[b2].validate(e6, t3), { result: true };
      } catch (e7) {
        return { result: false, reason: e7.message };
      }
    }
    checkIfFileAlreadyExists(e6) {
      const { files: t3 } = this.getState();
      return !(!t3[e6] || t3[e6].isGhost);
    }
    addFile(e6) {
      i2(this, N2)[N2](e6);
      const { files: t3 } = this.getState();
      let n3 = i2(this, B2)[B2](t3, e6);
      return t3[n3.id] && t3[n3.id].isGhost && (n3 = { ...t3[n3.id], data: e6.data, isGhost: false }, this.log(`Replaced the blob in the restored ghost file: ${n3.name}, ${n3.id}`)), this.setState({ files: { ...t3, [n3.id]: n3 } }), this.emit("file-added", n3), this.emit("files-added", [n3]), this.log(`Added file: ${n3.name}, ${n3.id}, mime type: ${n3.type}`), i2(this, T2)[T2](), n3.id;
    }
    addFiles(e6) {
      i2(this, N2)[N2]();
      const t3 = { ...this.getState().files }, n3 = [], r3 = [];
      for (let o3 = 0; o3 < e6.length; o3++) try {
        let r4 = i2(this, B2)[B2](t3, e6[o3]);
        t3[r4.id] && t3[r4.id].isGhost && (r4 = { ...t3[r4.id], data: e6[o3].data, isGhost: false }, this.log(`Replaced blob in a ghost file: ${r4.name}, ${r4.id}`)), t3[r4.id] = r4, n3.push(r4);
      } catch (e7) {
        e7.isRestriction || r3.push(e7);
      }
      if (this.setState({ files: t3 }), n3.forEach((e7) => {
        this.emit("file-added", e7);
      }), this.emit("files-added", n3), n3.length > 5 ? this.log(`Added batch of ${n3.length} files`) : Object.keys(n3).forEach((e7) => {
        this.log(`Added file: ${n3[e7].name}
 id: ${n3[e7].id}
 type: ${n3[e7].type}`);
      }), n3.length > 0 && i2(this, T2)[T2](), r3.length > 0) {
        let e7 = "Multiple errors occurred while adding files:\n";
        if (r3.forEach((t4) => {
          e7 += `
 * ${t4.message}`;
        }), this.info({ message: this.i18n("addBulkFilesFailed", { smart_count: r3.length }), details: e7 }, "error", this.opts.infoTimeout), "function" == typeof AggregateError) throw new AggregateError(r3, e7);
        {
          const t4 = new Error(e7);
          throw t4.errors = r3, t4;
        }
      }
    }
    removeFiles(e6, t3) {
      const { files: n3, currentUploads: r3 } = this.getState(), o3 = { ...n3 }, i3 = { ...r3 }, a3 = /* @__PURE__ */ Object.create(null);
      function s3(e7) {
        return void 0 === a3[e7];
      }
      e6.forEach((e7) => {
        n3[e7] && (a3[e7] = n3[e7], delete o3[e7]);
      }), Object.keys(i3).forEach((e7) => {
        const t4 = r3[e7].fileIDs.filter(s3);
        if (0 === t4.length) return void delete i3[e7];
        const { capabilities: n4 } = this.getState();
        if (t4.length !== r3[e7].fileIDs.length && !n4.individualCancellation) throw new Error("individualCancellation is disabled");
        i3[e7] = { ...r3[e7], fileIDs: t4 };
      });
      const u3 = { currentUploads: i3, files: o3 };
      0 === Object.keys(o3).length && (u3.allowNewUpload = true, u3.error = null, u3.recoveredState = null), this.setState(u3), this.calculateTotalProgress();
      const l3 = Object.keys(a3);
      l3.forEach((e7) => {
        this.emit("file-removed", a3[e7], t3);
      }), l3.length > 5 ? this.log(`Removed ${l3.length} files`) : this.log(`Removed files: ${l3.join(", ")}`);
    }
    removeFile(e6, t3) {
      void 0 === t3 && (t3 = null), this.removeFiles([e6], t3);
    }
    pauseResume(e6) {
      if (!this.getState().capabilities.resumableUploads || this.getFile(e6).uploadComplete) return;
      const t3 = !(this.getFile(e6).isPaused || false);
      return this.setFileState(e6, { isPaused: t3 }), this.emit("upload-pause", e6, t3), t3;
    }
    pauseAll() {
      const e6 = { ...this.getState().files };
      Object.keys(e6).filter((t3) => !e6[t3].progress.uploadComplete && e6[t3].progress.uploadStarted).forEach((t3) => {
        const n3 = { ...e6[t3], isPaused: true };
        e6[t3] = n3;
      }), this.setState({ files: e6 }), this.emit("pause-all");
    }
    resumeAll() {
      const e6 = { ...this.getState().files };
      Object.keys(e6).filter((t3) => !e6[t3].progress.uploadComplete && e6[t3].progress.uploadStarted).forEach((t3) => {
        const n3 = { ...e6[t3], isPaused: false, error: null };
        e6[t3] = n3;
      }), this.setState({ files: e6 }), this.emit("resume-all");
    }
    retryAll() {
      const e6 = { ...this.getState().files }, t3 = Object.keys(e6).filter((t4) => e6[t4].error);
      if (t3.forEach((t4) => {
        const n4 = { ...e6[t4], isPaused: false, error: null };
        e6[t4] = n4;
      }), this.setState({ files: e6, error: null }), this.emit("retry-all", t3), 0 === t3.length) return Promise.resolve({ successful: [], failed: [] });
      const n3 = i2(this, I2)[I2](t3, { forceAllowNewUpload: true });
      return i2(this, R2)[R2](n3);
    }
    cancelAll(e6) {
      let { reason: t3 = "user" } = void 0 === e6 ? {} : e6;
      if (this.emit("cancel-all", { reason: t3 }), "user" === t3) {
        const { files: e7 } = this.getState(), t4 = Object.keys(e7);
        t4.length && this.removeFiles(t4, "cancel-all"), this.setState({ totalProgress: 0, error: null, recoveredState: null });
      }
    }
    retryUpload(e6) {
      this.setFileState(e6, { error: null, isPaused: false }), this.emit("upload-retry", e6);
      const t3 = i2(this, I2)[I2]([e6], { forceAllowNewUpload: true });
      return i2(this, R2)[R2](t3);
    }
    reset() {
      this.cancelAll(...arguments);
    }
    logout() {
      this.iteratePlugins((e6) => {
        e6.provider && e6.provider.logout && e6.provider.logout();
      });
    }
    calculateProgress(e6, t3) {
      if (null == e6 || !this.getFile(e6.id)) return void this.log(`Not setting progress for a file that has been removed: ${null == e6 ? void 0 : e6.id}`);
      const n3 = Number.isFinite(t3.bytesTotal) && t3.bytesTotal > 0;
      this.setFileState(e6.id, { progress: { ...this.getFile(e6.id).progress, bytesUploaded: t3.bytesUploaded, bytesTotal: t3.bytesTotal, percentage: n3 ? Math.round(t3.bytesUploaded / t3.bytesTotal * 100) : 0 } }), this.calculateTotalProgress();
    }
    calculateTotalProgress() {
      const e6 = this.getFiles().filter((e7) => e7.progress.uploadStarted || e7.progress.preprocess || e7.progress.postprocess);
      if (0 === e6.length) return this.emit("progress", 0), void this.setState({ totalProgress: 0 });
      const t3 = e6.filter((e7) => null != e7.progress.bytesTotal), n3 = e6.filter((e7) => null == e7.progress.bytesTotal);
      if (0 === t3.length) {
        const t4 = 100 * e6.length, r4 = n3.reduce((e7, t5) => e7 + t5.progress.percentage, 0), o4 = Math.round(r4 / t4 * 100);
        return void this.setState({ totalProgress: o4 });
      }
      let r3 = t3.reduce((e7, t4) => e7 + t4.progress.bytesTotal, 0);
      const o3 = r3 / t3.length;
      r3 += o3 * n3.length;
      let i3 = 0;
      t3.forEach((e7) => {
        i3 += e7.progress.bytesUploaded;
      }), n3.forEach((e7) => {
        i3 += o3 * (e7.progress.percentage || 0) / 100;
      });
      let a3 = 0 === r3 ? 0 : Math.round(i3 / r3 * 100);
      a3 > 100 && (a3 = 100), this.setState({ totalProgress: a3 }), this.emit("progress", a3);
    }
    updateOnlineStatus() {
      void 0 === window.navigator.onLine || window.navigator.onLine ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = false)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = true);
    }
    getID() {
      return this.opts.id;
    }
    use(e6, t3) {
      if ("function" != typeof e6) {
        throw new TypeError(`Expected a plugin class, but got ${null === e6 ? "null" : typeof e6}. Please verify that the plugin was imported and spelled correctly.`);
      }
      const n3 = new e6(this, t3), r3 = n3.id;
      if (!r3) throw new Error("Your plugin must have an id");
      if (!n3.type) throw new Error("Your plugin must have a type");
      const o3 = this.getPlugin(r3);
      if (o3) {
        const e7 = `Already found a plugin named '${o3.id}'. Tried to use: '${r3}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`;
        throw new Error(e7);
      }
      return e6.VERSION && this.log(`Using ${r3} v${e6.VERSION}`), n3.type in i2(this, y2)[y2] ? i2(this, y2)[y2][n3.type].push(n3) : i2(this, y2)[y2][n3.type] = [n3], n3.install(), this;
    }
    getPlugin(e6) {
      for (const t3 of Object.values(i2(this, y2)[y2])) {
        const n3 = t3.find((t4) => t4.id === e6);
        if (null != n3) return n3;
      }
    }
    [r2](e6) {
      return i2(this, y2)[y2][e6];
    }
    iteratePlugins(e6) {
      Object.values(i2(this, y2)[y2]).flat(1).forEach(e6);
    }
    removePlugin(e6) {
      this.log(`Removing plugin ${e6.id}`), this.emit("plugin-remove", e6), e6.uninstall && e6.uninstall();
      const t3 = i2(this, y2)[y2][e6.type], n3 = t3.findIndex((t4) => t4.id === e6.id);
      -1 !== n3 && t3.splice(n3, 1);
      const r3 = { plugins: { ...this.getState().plugins, [e6.id]: void 0 } };
      this.setState(r3);
    }
    close(e6) {
      let { reason: t3 } = void 0 === e6 ? {} : e6;
      this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll({ reason: t3 }), i2(this, E2)[E2](), this.iteratePlugins((e7) => {
        this.removePlugin(e7);
      }), "undefined" != typeof window && window.removeEventListener && (window.removeEventListener("online", i2(this, F2)[F2]), window.removeEventListener("offline", i2(this, F2)[F2]));
    }
    hideInfo() {
      const { info: e6 } = this.getState();
      this.setState({ info: e6.slice(1) }), this.emit("info-hidden");
    }
    info(e6, t3, n3) {
      void 0 === t3 && (t3 = "info"), void 0 === n3 && (n3 = 3e3);
      const r3 = "object" == typeof e6;
      this.setState({ info: [...this.getState().info, { type: t3, message: r3 ? e6.message : e6, details: r3 ? e6.details : null }] }), setTimeout(() => this.hideInfo(), n3), this.emit("info-visible");
    }
    log(e6, t3) {
      const { logger: n3 } = this.opts;
      switch (t3) {
        case "error":
          n3.error(e6);
          break;
        case "warning":
          n3.warn(e6);
          break;
        default:
          n3.debug(e6);
      }
    }
    restore(e6) {
      return this.log(`Core: attempting to restore upload "${e6}"`), this.getState().currentUploads[e6] ? i2(this, R2)[R2](e6) : (i2(this, _2)[_2](e6), Promise.reject(new Error("Nonexistent upload")));
    }
    [o2]() {
      return i2(this, I2)[I2](...arguments);
    }
    addResultData(e6, t3) {
      if (!i2(this, P2)[P2](e6)) return void this.log(`Not setting result for an upload that has been removed: ${e6}`);
      const { currentUploads: n3 } = this.getState(), r3 = { ...n3[e6], result: { ...n3[e6].result, ...t3 } };
      this.setState({ currentUploads: { ...n3, [e6]: r3 } });
    }
    upload() {
      var e6;
      null != (e6 = i2(this, y2)[y2].uploader) && e6.length || this.log("No uploader type plugins are used", "warning");
      let { files: t3 } = this.getState();
      const r3 = this.opts.onBeforeUpload(t3);
      return false === r3 ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (r3 && "object" == typeof r3 && (t3 = r3, this.setState({ files: t3 })), Promise.resolve().then(() => i2(this, b2)[b2].validateMinNumberOfFiles(t3)).catch((e7) => {
        throw i2(this, A2)[A2](e7), e7;
      }).then(() => {
        if (!i2(this, O2)[O2](t3)) throw new n2.RestrictionError(this.i18n("missingRequiredMetaField"));
      }).catch((e7) => {
        throw e7;
      }).then(() => {
        const { currentUploads: e7 } = this.getState(), n3 = Object.values(e7).flatMap((e8) => e8.fileIDs), r4 = [];
        Object.keys(t3).forEach((e8) => {
          const t4 = this.getFile(e8);
          t4.progress.uploadStarted || -1 !== n3.indexOf(e8) || r4.push(t4.id);
        });
        const o3 = i2(this, I2)[I2](r4);
        return i2(this, R2)[R2](o3);
      }).catch((e7) => {
        throw this.emit("error", e7), this.log(e7, "error"), e7;
      }));
    }
  }
  function M2(e6, t3) {
    const { message: n3, details: r3 = "" } = e6;
    e6.isRestriction ? this.emit("restriction-failed", t3, e6) : this.emit("error", e6), this.info({ message: n3, details: r3 }, "error", this.opts.infoTimeout), this.log(`${n3} ${r3}`.trim(), "error");
  }
  function j2(e6) {
    const { missingFields: t3, error: n3 } = i2(this, b2)[b2].getMissingRequiredMetaFields(e6);
    return !(t3.length > 0) || (this.setFileState(e6.id, { missingRequiredMetaFields: t3 }), this.log(n3.message), this.emit("restriction-failed", e6, n3), false);
  }
  function H2(e6) {
    let t3 = true;
    for (const n3 of Object.values(e6)) i2(this, x2)[x2](n3) || (t3 = false);
    return t3;
  }
  function z2(e6) {
    const { allowNewUpload: t3 } = this.getState();
    if (false === t3) {
      const t4 = new n2.RestrictionError(this.i18n("noMoreFilesAllowed"));
      throw i2(this, A2)[A2](t4, e6), t4;
    }
  }
  function $2(e6, t3) {
    const r3 = f2(t3), o3 = v2(r3, t3), a3 = p2(o3).extension, s3 = Boolean(t3.isRemote), u3 = h2({ ...t3, type: r3 });
    if (this.checkIfFileAlreadyExists(u3)) {
      const e7 = new n2.RestrictionError(this.i18n("noDuplicates", { fileName: o3 }));
      throw i2(this, A2)[A2](e7, t3), e7;
    }
    const l3 = t3.meta || {};
    l3.name = o3, l3.type = r3;
    const c3 = Number.isFinite(t3.data.size) ? t3.data.size : null;
    let d3 = { source: t3.source || "", id: u3, name: o3, extension: a3 || "", meta: { ...this.getState().meta, ...l3 }, type: r3, data: t3.data, progress: { percentage: 0, bytesUploaded: 0, bytesTotal: c3, uploadComplete: false, uploadStarted: null }, size: c3, isRemote: s3, remote: t3.remote || "", preview: t3.preview };
    const g3 = this.opts.onBeforeFileAdded(d3, e6);
    if (false === g3) {
      const e7 = new n2.RestrictionError("Cannot add the file because onBeforeFileAdded returned false.");
      throw this.emit("restriction-failed", t3, e7), e7;
    }
    "object" == typeof g3 && null !== g3 && (d3 = g3);
    try {
      const t4 = Object.keys(e6).map((t5) => e6[t5]);
      i2(this, b2)[b2].validate(d3, t4);
    } catch (e7) {
      throw i2(this, A2)[A2](e7, d3), e7;
    }
    return d3;
  }
  function U2() {
    this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
      this.scheduledAutoProceed = null, this.upload().catch((e6) => {
        e6.isRestriction || this.log(e6.stack || e6.message || e6);
      });
    }, 4));
  }
  function V2() {
    const e6 = (e7, t3, n3) => {
      let r3 = e7.message || "Unknown error";
      e7.details && (r3 += ` ${e7.details}`), this.setState({ error: r3 }), null != t3 && t3.id in this.getState().files && this.setFileState(t3.id, { error: r3, response: n3 });
    };
    this.on("error", e6), this.on("upload-error", (t3, n3, r3) => {
      if (e6(n3, t3, r3), "object" == typeof n3 && n3.message) {
        const e7 = new Error(n3.message);
        e7.details = n3.message, n3.details && (e7.details += ` ${n3.details}`), e7.message = this.i18n("failedToUpload", { file: null == t3 ? void 0 : t3.name }), i2(this, A2)[A2](e7);
      } else i2(this, A2)[A2](n3);
    }), this.on("upload", () => {
      this.setState({ error: null });
    }), this.on("upload-started", (e7) => {
      null != e7 && this.getFile(e7.id) ? this.setFileState(e7.id, { progress: { uploadStarted: Date.now(), uploadComplete: false, percentage: 0, bytesUploaded: 0, bytesTotal: e7.size } }) : this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
    }), this.on("upload-progress", this.calculateProgress), this.on("upload-success", (e7, t3) => {
      if (null == e7 || !this.getFile(e7.id)) return void this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
      const n3 = this.getFile(e7.id).progress;
      this.setFileState(e7.id, { progress: { ...n3, postprocess: i2(this, S2)[S2].size > 0 ? { mode: "indeterminate" } : null, uploadComplete: true, percentage: 100, bytesUploaded: n3.bytesTotal }, response: t3, uploadURL: t3.uploadURL, isPaused: false }), null == e7.size && this.setFileState(e7.id, { size: t3.bytesUploaded || n3.bytesTotal }), this.calculateTotalProgress();
    }), this.on("preprocess-progress", (e7, t3) => {
      null != e7 && this.getFile(e7.id) ? this.setFileState(e7.id, { progress: { ...this.getFile(e7.id).progress, preprocess: t3 } }) : this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
    }), this.on("preprocess-complete", (e7) => {
      if (null == e7 || !this.getFile(e7.id)) return void this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
      const t3 = { ...this.getState().files };
      t3[e7.id] = { ...t3[e7.id], progress: { ...t3[e7.id].progress } }, delete t3[e7.id].progress.preprocess, this.setState({ files: t3 });
    }), this.on("postprocess-progress", (e7, t3) => {
      null != e7 && this.getFile(e7.id) ? this.setFileState(e7.id, { progress: { ...this.getState().files[e7.id].progress, postprocess: t3 } }) : this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
    }), this.on("postprocess-complete", (e7) => {
      if (null == e7 || !this.getFile(e7.id)) return void this.log(`Not setting progress for a file that has been removed: ${null == e7 ? void 0 : e7.id}`);
      const t3 = { ...this.getState().files };
      t3[e7.id] = { ...t3[e7.id], progress: { ...t3[e7.id].progress } }, delete t3[e7.id].progress.postprocess, this.setState({ files: t3 });
    }), this.on("restored", () => {
      this.calculateTotalProgress();
    }), this.on("dashboard:file-edit-complete", (e7) => {
      e7 && i2(this, x2)[x2](e7);
    }), "undefined" != typeof window && window.addEventListener && (window.addEventListener("online", i2(this, F2)[F2]), window.addEventListener("offline", i2(this, F2)[F2]), setTimeout(i2(this, F2)[F2], 3e3));
  }
  function W2(t3, n3) {
    void 0 === n3 && (n3 = {});
    const { forceAllowNewUpload: r3 = false } = n3, { allowNewUpload: o3, currentUploads: i3 } = this.getState();
    if (!o3 && !r3) throw new Error("Cannot create a new upload: already uploading.");
    const a3 = (0, e5.nanoid)();
    return this.emit("upload", { id: a3, fileIDs: t3 }), this.setState({ allowNewUpload: false !== this.opts.allowMultipleUploadBatches && false !== this.opts.allowMultipleUploads, currentUploads: { ...i3, [a3]: { fileIDs: t3, step: 0, result: {} } } }), a3;
  }
  function G2(e6) {
    const { currentUploads: t3 } = this.getState();
    return t3[e6];
  }
  function q2(e6) {
    const t3 = { ...this.getState().currentUploads };
    delete t3[e6], this.setState({ currentUploads: t3 });
  }
  async function K2(e6) {
    let { currentUploads: t3 } = this.getState(), n3 = t3[e6];
    const r3 = n3.step || 0, o3 = [...i2(this, D2)[D2], ...i2(this, w2)[w2], ...i2(this, S2)[S2]];
    try {
      for (let i3 = r3; i3 < o3.length && n3; i3++) {
        const r4 = o3[i3], a4 = { ...n3, step: i3 };
        this.setState({ currentUploads: { ...t3, [e6]: a4 } }), await r4(a4.fileIDs, e6), t3 = this.getState().currentUploads, n3 = t3[e6];
      }
    } catch (t4) {
      throw i2(this, _2)[_2](e6), t4;
    }
    if (n3) {
      n3.fileIDs.forEach((e7) => {
        const t4 = this.getFile(e7);
        t4 && t4.progress.postprocess && this.emit("postprocess-complete", t4);
      });
      const r4 = n3.fileIDs.map((e7) => this.getFile(e7)), o4 = r4.filter((e7) => !e7.error), i3 = r4.filter((e7) => e7.error);
      await this.addResultData(e6, { successful: o4, failed: i3, uploadID: e6 }), t3 = this.getState().currentUploads, n3 = t3[e6];
    }
    let a3;
    return n3 && (a3 = n3.result, this.emit("complete", a3), i2(this, _2)[_2](e6)), null == a3 && this.log(`Not setting result for an upload that has been removed: ${e6}`), a3;
  }
  return L2.VERSION = "2.3.4", Lw = L2;
}
var Xw, Zw, Jw, Qw, eS, tS, nS, rS, oS, iS, aS, sS, uS, lS = {}, cS = [], dS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fS = Array.isArray;
function pS(e5, t2) {
  for (var n2 in t2) e5[n2] = t2[n2];
  return e5;
}
function hS(e5) {
  e5 && e5.parentNode && e5.parentNode.removeChild(e5);
}
function gS(e5, t2, n2) {
  var r2, o2, i2, a2 = {};
  for (i2 in t2) "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
  if (arguments.length > 2 && (a2.children = arguments.length > 3 ? Xw.call(arguments, 2) : n2), "function" == typeof e5 && null != e5.defaultProps) for (i2 in e5.defaultProps) void 0 === a2[i2] && (a2[i2] = e5.defaultProps[i2]);
  return vS(e5, a2, r2, o2, null);
}
function vS(e5, t2, n2, r2, o2) {
  var i2 = { type: e5, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++Jw : o2, __i: -1, __u: 0 };
  return null == o2 && null != Zw.vnode && Zw.vnode(i2), i2;
}
function mS(e5) {
  return e5.children;
}
function yS(e5, t2) {
  this.props = e5, this.context = t2;
}
function bS(e5, t2) {
  if (null == t2) return e5.__ ? bS(e5.__, e5.__i + 1) : null;
  for (var n2; t2 < e5.__k.length; t2++) if (null != (n2 = e5.__k[t2]) && null != n2.__e) return n2.__e;
  return "function" == typeof e5.type ? bS(e5) : null;
}
function ES(e5) {
  var t2, n2;
  if (null != (e5 = e5.__) && null != e5.__c) {
    for (e5.__e = e5.__c.base = null, t2 = 0; t2 < e5.__k.length; t2++) if (null != (n2 = e5.__k[t2]) && null != n2.__e) {
      e5.__e = e5.__c.base = n2.__e;
      break;
    }
    return ES(e5);
  }
}
function CS(e5) {
  (!e5.__d && (e5.__d = true) && eS.push(e5) && !DS.__r++ || tS != Zw.debounceRendering) && ((tS = Zw.debounceRendering) || nS)(DS);
}
function DS() {
  for (var e5, t2, n2, r2, o2, i2, a2, s2 = 1; eS.length; ) eS.length > s2 && eS.sort(rS), e5 = eS.shift(), s2 = eS.length, e5.__d && (n2 = void 0, o2 = (r2 = (t2 = e5).__v).__e, i2 = [], a2 = [], t2.__P && ((n2 = pS({}, r2)).__v = r2.__v + 1, Zw.vnode && Zw.vnode(n2), TS(t2.__P, n2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, i2, null == o2 ? bS(r2) : o2, !!(32 & r2.__u), a2), n2.__v = r2.__v, n2.__.__k[n2.__i] = n2, FS(i2, n2, a2), n2.__e != o2 && ES(n2)));
  DS.__r = 0;
}
function wS(e5, t2, n2, r2, o2, i2, a2, s2, u2, l2, c2) {
  var d2, f2, p2, h2, g2, v2, m2, y2 = r2 && r2.__k || cS, b2 = t2.length;
  for (u2 = SS(n2, t2, y2, u2, b2), d2 = 0; d2 < b2; d2++) null != (p2 = n2.__k[d2]) && (f2 = -1 == p2.__i ? lS : y2[p2.__i] || lS, p2.__i = d2, v2 = TS(e5, p2, f2, o2, i2, a2, s2, u2, l2, c2), h2 = p2.__e, p2.ref && f2.ref != p2.ref && (f2.ref && _S(f2.ref, null, p2), c2.push(p2.ref, p2.__c || h2, p2)), null == g2 && null != h2 && (g2 = h2), (m2 = !!(4 & p2.__u)) || f2.__k === p2.__k ? u2 = AS(p2, u2, e5, m2) : "function" == typeof p2.type && void 0 !== v2 ? u2 = v2 : h2 && (u2 = h2.nextSibling), p2.__u &= -7);
  return n2.__e = g2, u2;
}
function SS(e5, t2, n2, r2, o2) {
  var i2, a2, s2, u2, l2, c2 = n2.length, d2 = c2, f2 = 0;
  for (e5.__k = new Array(o2), i2 = 0; i2 < o2; i2++) null != (a2 = t2[i2]) && "boolean" != typeof a2 && "function" != typeof a2 ? (u2 = i2 + f2, (a2 = e5.__k[i2] = "string" == typeof a2 || "number" == typeof a2 || "bigint" == typeof a2 || a2.constructor == String ? vS(null, a2, null, null, null) : fS(a2) ? vS(mS, { children: a2 }, null, null, null) : null == a2.constructor && a2.__b > 0 ? vS(a2.type, a2.props, a2.key, a2.ref ? a2.ref : null, a2.__v) : a2).__ = e5, a2.__b = e5.__b + 1, s2 = null, -1 != (l2 = a2.__i = xS(a2, n2, u2, d2)) && (d2--, (s2 = n2[l2]) && (s2.__u |= 2)), null == s2 || null == s2.__v ? (-1 == l2 && (o2 > c2 ? f2-- : o2 < c2 && f2++), "function" != typeof a2.type && (a2.__u |= 4)) : l2 != u2 && (l2 == u2 - 1 ? f2-- : l2 == u2 + 1 ? f2++ : (l2 > u2 ? f2-- : f2++, a2.__u |= 4))) : e5.__k[i2] = null;
  if (d2) for (i2 = 0; i2 < c2; i2++) null != (s2 = n2[i2]) && !(2 & s2.__u) && (s2.__e == r2 && (r2 = bS(s2)), RS(s2, s2));
  return r2;
}
function AS(e5, t2, n2, r2) {
  var o2, i2;
  if ("function" == typeof e5.type) {
    for (o2 = e5.__k, i2 = 0; o2 && i2 < o2.length; i2++) o2[i2] && (o2[i2].__ = e5, t2 = AS(o2[i2], t2, n2, r2));
    return t2;
  }
  e5.__e != t2 && (r2 && (t2 && e5.type && !t2.parentNode && (t2 = bS(e5)), n2.insertBefore(e5.__e, t2 || null)), t2 = e5.__e);
  do {
    t2 = t2 && t2.nextSibling;
  } while (null != t2 && 8 == t2.nodeType);
  return t2;
}
function xS(e5, t2, n2, r2) {
  var o2, i2, a2, s2 = e5.key, u2 = e5.type, l2 = t2[n2], c2 = null != l2 && !(2 & l2.__u);
  if (null === l2 && null == e5.key || c2 && s2 == l2.key && u2 == l2.type) return n2;
  if (r2 > (c2 ? 1 : 0)) {
    for (o2 = n2 - 1, i2 = n2 + 1; o2 >= 0 || i2 < t2.length; ) if (null != (l2 = t2[a2 = o2 >= 0 ? o2-- : i2++]) && !(2 & l2.__u) && s2 == l2.key && u2 == l2.type) return a2;
  }
  return -1;
}
function OS(e5, t2, n2) {
  "-" == t2[0] ? e5.setProperty(t2, null == n2 ? "" : n2) : e5[t2] = null == n2 ? "" : "number" != typeof n2 || dS.test(t2) ? n2 : n2 + "px";
}
function NS(e5, t2, n2, r2, o2) {
  var i2, a2;
  e: if ("style" == t2) if ("string" == typeof n2) e5.style.cssText = n2;
  else {
    if ("string" == typeof r2 && (e5.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || OS(e5.style, t2, "");
    if (n2) for (t2 in n2) r2 && n2[t2] == r2[t2] || OS(e5.style, t2, n2[t2]);
  }
  else if ("o" == t2[0] && "n" == t2[1]) i2 = t2 != (t2 = t2.replace(oS, "$1")), a2 = t2.toLowerCase(), t2 = a2 in e5 || "onFocusOut" == t2 || "onFocusIn" == t2 ? a2.slice(2) : t2.slice(2), e5.l || (e5.l = {}), e5.l[t2 + i2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = iS, e5.addEventListener(t2, i2 ? sS : aS, i2)) : e5.removeEventListener(t2, i2 ? sS : aS, i2);
  else {
    if ("http://www.w3.org/2000/svg" == o2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e5) try {
      e5[t2] = null == n2 ? "" : n2;
      break e;
    } catch (e6) {
    }
    "function" == typeof n2 || (null == n2 || false === n2 && "-" != t2[4] ? e5.removeAttribute(t2) : e5.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
  }
}
function BS(e5) {
  return function(t2) {
    if (this.l) {
      var n2 = this.l[t2.type + e5];
      if (null == t2.t) t2.t = iS++;
      else if (t2.t < n2.u) return;
      return n2(Zw.event ? Zw.event(t2) : t2);
    }
  };
}
function TS(e5, t2, n2, r2, o2, i2, a2, s2, u2, l2) {
  var c2, d2, f2, p2, h2, g2, v2, m2, y2, b2, E2, C2, D2, w2, S2, A2, x2, O2 = t2.type;
  if (null != t2.constructor) return null;
  128 & n2.__u && (u2 = !!(32 & n2.__u), i2 = [s2 = t2.__e = n2.__e]), (c2 = Zw.__b) && c2(t2);
  e: if ("function" == typeof O2) try {
    if (m2 = t2.props, y2 = "prototype" in O2 && O2.prototype.render, b2 = (c2 = O2.contextType) && r2[c2.__c], E2 = c2 ? b2 ? b2.props.value : c2.__ : r2, n2.__c ? v2 = (d2 = t2.__c = n2.__c).__ = d2.__E : (y2 ? t2.__c = d2 = new O2(m2, E2) : (t2.__c = d2 = new yS(m2, E2), d2.constructor = O2, d2.render = LS), b2 && b2.sub(d2), d2.props = m2, d2.state || (d2.state = {}), d2.context = E2, d2.__n = r2, f2 = d2.__d = true, d2.__h = [], d2._sb = []), y2 && null == d2.__s && (d2.__s = d2.state), y2 && null != O2.getDerivedStateFromProps && (d2.__s == d2.state && (d2.__s = pS({}, d2.__s)), pS(d2.__s, O2.getDerivedStateFromProps(m2, d2.__s))), p2 = d2.props, h2 = d2.state, d2.__v = t2, f2) y2 && null == O2.getDerivedStateFromProps && null != d2.componentWillMount && d2.componentWillMount(), y2 && null != d2.componentDidMount && d2.__h.push(d2.componentDidMount);
    else {
      if (y2 && null == O2.getDerivedStateFromProps && m2 !== p2 && null != d2.componentWillReceiveProps && d2.componentWillReceiveProps(m2, E2), !d2.__e && null != d2.shouldComponentUpdate && false === d2.shouldComponentUpdate(m2, d2.__s, E2) || t2.__v == n2.__v) {
        for (t2.__v != n2.__v && (d2.props = m2, d2.state = d2.__s, d2.__d = false), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some(function(e6) {
          e6 && (e6.__ = t2);
        }), C2 = 0; C2 < d2._sb.length; C2++) d2.__h.push(d2._sb[C2]);
        d2._sb = [], d2.__h.length && a2.push(d2);
        break e;
      }
      null != d2.componentWillUpdate && d2.componentWillUpdate(m2, d2.__s, E2), y2 && null != d2.componentDidUpdate && d2.__h.push(function() {
        d2.componentDidUpdate(p2, h2, g2);
      });
    }
    if (d2.context = E2, d2.props = m2, d2.__P = e5, d2.__e = false, D2 = Zw.__r, w2 = 0, y2) {
      for (d2.state = d2.__s, d2.__d = false, D2 && D2(t2), c2 = d2.render(d2.props, d2.state, d2.context), S2 = 0; S2 < d2._sb.length; S2++) d2.__h.push(d2._sb[S2]);
      d2._sb = [];
    } else do {
      d2.__d = false, D2 && D2(t2), c2 = d2.render(d2.props, d2.state, d2.context), d2.state = d2.__s;
    } while (d2.__d && ++w2 < 25);
    d2.state = d2.__s, null != d2.getChildContext && (r2 = pS(pS({}, r2), d2.getChildContext())), y2 && !f2 && null != d2.getSnapshotBeforeUpdate && (g2 = d2.getSnapshotBeforeUpdate(p2, h2)), A2 = c2, null != c2 && c2.type === mS && null == c2.key && (A2 = IS(c2.props.children)), s2 = wS(e5, fS(A2) ? A2 : [A2], t2, n2, r2, o2, i2, a2, s2, u2, l2), d2.base = t2.__e, t2.__u &= -161, d2.__h.length && a2.push(d2), v2 && (d2.__E = d2.__ = null);
  } catch (e6) {
    if (t2.__v = null, u2 || null != i2) if (e6.then) {
      for (t2.__u |= u2 ? 160 : 128; s2 && 8 == s2.nodeType && s2.nextSibling; ) s2 = s2.nextSibling;
      i2[i2.indexOf(s2)] = null, t2.__e = s2;
    } else {
      for (x2 = i2.length; x2--; ) hS(i2[x2]);
      kS(t2);
    }
    else t2.__e = n2.__e, t2.__k = n2.__k, e6.then || kS(t2);
    Zw.__e(e6, t2, n2);
  }
  else null == i2 && t2.__v == n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : s2 = t2.__e = PS(n2.__e, t2, n2, r2, o2, i2, a2, u2, l2);
  return (c2 = Zw.diffed) && c2(t2), 128 & t2.__u ? void 0 : s2;
}
function kS(e5) {
  e5 && e5.__c && (e5.__c.__e = true), e5 && e5.__k && e5.__k.forEach(kS);
}
function FS(e5, t2, n2) {
  for (var r2 = 0; r2 < n2.length; r2++) _S(n2[r2], n2[++r2], n2[++r2]);
  Zw.__c && Zw.__c(t2, e5), e5.some(function(t3) {
    try {
      e5 = t3.__h, t3.__h = [], e5.some(function(e6) {
        e6.call(t3);
      });
    } catch (e6) {
      Zw.__e(e6, t3.__v);
    }
  });
}
function IS(e5) {
  return "object" != typeof e5 || null == e5 || e5.__b && e5.__b > 0 ? e5 : fS(e5) ? e5.map(IS) : pS({}, e5);
}
function PS(e5, t2, n2, r2, o2, i2, a2, s2, u2) {
  var l2, c2, d2, f2, p2, h2, g2, v2 = n2.props, m2 = t2.props, y2 = t2.type;
  if ("svg" == y2 ? o2 = "http://www.w3.org/2000/svg" : "math" == y2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != i2) {
    for (l2 = 0; l2 < i2.length; l2++) if ((p2 = i2[l2]) && "setAttribute" in p2 == !!y2 && (y2 ? p2.localName == y2 : 3 == p2.nodeType)) {
      e5 = p2, i2[l2] = null;
      break;
    }
  }
  if (null == e5) {
    if (null == y2) return document.createTextNode(m2);
    e5 = document.createElementNS(o2, y2, m2.is && m2), s2 && (Zw.__m && Zw.__m(t2, i2), s2 = false), i2 = null;
  }
  if (null == y2) v2 === m2 || s2 && e5.data == m2 || (e5.data = m2);
  else {
    if (i2 = i2 && Xw.call(e5.childNodes), v2 = n2.props || lS, !s2 && null != i2) for (v2 = {}, l2 = 0; l2 < e5.attributes.length; l2++) v2[(p2 = e5.attributes[l2]).name] = p2.value;
    for (l2 in v2) if (p2 = v2[l2], "children" == l2) ;
    else if ("dangerouslySetInnerHTML" == l2) d2 = p2;
    else if (!(l2 in m2)) {
      if ("value" == l2 && "defaultValue" in m2 || "checked" == l2 && "defaultChecked" in m2) continue;
      NS(e5, l2, null, p2, o2);
    }
    for (l2 in m2) p2 = m2[l2], "children" == l2 ? f2 = p2 : "dangerouslySetInnerHTML" == l2 ? c2 = p2 : "value" == l2 ? h2 = p2 : "checked" == l2 ? g2 = p2 : s2 && "function" != typeof p2 || v2[l2] === p2 || NS(e5, l2, p2, v2[l2], o2);
    if (c2) s2 || d2 && (c2.__html == d2.__html || c2.__html == e5.innerHTML) || (e5.innerHTML = c2.__html), t2.__k = [];
    else if (d2 && (e5.innerHTML = ""), wS("template" == t2.type ? e5.content : e5, fS(f2) ? f2 : [f2], t2, n2, r2, "foreignObject" == y2 ? "http://www.w3.org/1999/xhtml" : o2, i2, a2, i2 ? i2[0] : n2.__k && bS(n2, 0), s2, u2), null != i2) for (l2 = i2.length; l2--; ) hS(i2[l2]);
    s2 || (l2 = "value", "progress" == y2 && null == h2 ? e5.removeAttribute("value") : null != h2 && (h2 !== e5[l2] || "progress" == y2 && !h2 || "option" == y2 && h2 != v2[l2]) && NS(e5, l2, h2, v2[l2], o2), l2 = "checked", null != g2 && g2 != e5[l2] && NS(e5, l2, g2, v2[l2], o2));
  }
  return e5;
}
function _S(e5, t2, n2) {
  try {
    if ("function" == typeof e5) {
      var r2 = "function" == typeof e5.__u;
      r2 && e5.__u(), r2 && null == t2 || (e5.__u = e5(t2));
    } else e5.current = t2;
  } catch (e6) {
    Zw.__e(e6, n2);
  }
}
function RS(e5, t2, n2) {
  var r2, o2;
  if (Zw.unmount && Zw.unmount(e5), (r2 = e5.ref) && (r2.current && r2.current != e5.__e || _S(r2, null, t2)), null != (r2 = e5.__c)) {
    if (r2.componentWillUnmount) try {
      r2.componentWillUnmount();
    } catch (e6) {
      Zw.__e(e6, t2);
    }
    r2.base = r2.__P = null;
  }
  if (r2 = e5.__k) for (o2 = 0; o2 < r2.length; o2++) r2[o2] && RS(r2[o2], t2, n2 || "function" != typeof e5.type);
  n2 || hS(e5.__e), e5.__c = e5.__ = e5.__e = void 0;
}
function LS(e5, t2, n2) {
  return this.constructor(e5, n2);
}
function MS(e5, t2, n2) {
  var r2, o2, i2, a2;
  t2 == document && (t2 = document.documentElement), Zw.__ && Zw.__(e5, t2), o2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, i2 = [], a2 = [], TS(t2, e5 = (!r2 && n2 || t2).__k = gS(mS, null, [e5]), o2 || lS, lS, t2.namespaceURI, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? Xw.call(t2.childNodes) : null, i2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2, a2), FS(i2, e5, a2);
}
Xw = cS.slice, Zw = { __e: function(e5, t2, n2, r2) {
  for (var o2, i2, a2; t2 = t2.__; ) if ((o2 = t2.__c) && !o2.__) try {
    if ((i2 = o2.constructor) && null != i2.getDerivedStateFromError && (o2.setState(i2.getDerivedStateFromError(e5)), a2 = o2.__d), null != o2.componentDidCatch && (o2.componentDidCatch(e5, r2 || {}), a2 = o2.__d), a2) return o2.__E = o2;
  } catch (t3) {
    e5 = t3;
  }
  throw e5;
} }, Jw = 0, Qw = function(e5) {
  return null != e5 && null == e5.constructor;
}, yS.prototype.setState = function(e5, t2) {
  var n2;
  n2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = pS({}, this.state), "function" == typeof e5 && (e5 = e5(pS({}, n2), this.props)), e5 && pS(n2, e5), null != e5 && this.__v && (t2 && this._sb.push(t2), CS(this));
}, yS.prototype.forceUpdate = function(e5) {
  this.__v && (this.__e = true, e5 && this.__h.push(e5), CS(this));
}, yS.prototype.render = mS, eS = [], nS = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, rS = function(e5, t2) {
  return e5.__v.__b - t2.__v.__b;
}, DS.__r = 0, oS = /(PointerCapture)$|Capture$/i, iS = 0, aS = BS(false), sS = BS(true), uS = 0;
var jS, HS, zS, $S, US, VS, WS, GS, qS, KS, YS, XS = Object.freeze({ __proto__: null, Component: yS, Fragment: mS, cloneElement: function(e5, t2, n2) {
  var r2, o2, i2, a2, s2 = pS({}, e5.props);
  for (i2 in e5.type && e5.type.defaultProps && (a2 = e5.type.defaultProps), t2) "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : s2[i2] = void 0 === t2[i2] && null != a2 ? a2[i2] : t2[i2];
  return arguments.length > 2 && (s2.children = arguments.length > 3 ? Xw.call(arguments, 2) : n2), vS(e5.type, s2, r2 || e5.key, o2 || e5.ref, null);
}, createContext: function(e5) {
  function t2(e6) {
    var n2, r2;
    return this.getChildContext || (n2 = /* @__PURE__ */ new Set(), (r2 = {})[t2.__c] = this, this.getChildContext = function() {
      return r2;
    }, this.componentWillUnmount = function() {
      n2 = null;
    }, this.shouldComponentUpdate = function(e7) {
      this.props.value != e7.value && n2.forEach(function(e8) {
        e8.__e = true, CS(e8);
      });
    }, this.sub = function(e7) {
      n2.add(e7);
      var t3 = e7.componentWillUnmount;
      e7.componentWillUnmount = function() {
        n2 && n2.delete(e7), t3 && t3.call(e7);
      };
    }), e6.children;
  }
  return t2.__c = "__cC" + uS++, t2.__ = e5, t2.Provider = t2.__l = (t2.Consumer = function(e6, t3) {
    return e6.children(t3);
  }).contextType = t2, t2;
}, createElement: gS, createRef: function() {
  return { current: null };
}, h: gS, hydrate: function e3(t2, n2) {
  MS(t2, n2, e3);
}, get isValidElement() {
  return Qw;
}, get options() {
  return Zw;
}, render: MS, toChildArray: function e4(t2, n2) {
  return n2 = n2 || [], null == t2 || "boolean" == typeof t2 || (fS(t2) ? t2.some(function(t3) {
    e4(t3, n2);
  }) : n2.push(t2)), n2;
} }), ZS = E(XS);
function JS() {
  if ($S) return zS;
  $S = 1;
  const e5 = HS ? jS : (HS = 1, jS = function(e6) {
    return (null == e6 ? void 0 : e6.nodeType) === Node.ELEMENT_NODE;
  });
  return zS = function(t2, n2) {
    return void 0 === n2 && (n2 = document), "string" == typeof t2 ? n2.querySelector(t2) : e5(t2) ? t2 : null;
  };
}
function QS() {
  if (GS) return WS;
  GS = 1;
  const e5 = Vw();
  return WS = class {
    constructor(e6, t2) {
      void 0 === t2 && (t2 = {}), this.uppy = e6, this.opts = t2;
    }
    getPluginState() {
      const { plugins: e6 } = this.uppy.getState();
      return e6[this.id] || {};
    }
    setPluginState(e6) {
      const { plugins: t2 } = this.uppy.getState();
      this.uppy.setState({ plugins: { ...t2, [this.id]: { ...t2[this.id], ...e6 } } });
    }
    setOptions(e6) {
      this.opts = { ...this.opts, ...e6 }, this.setPluginState(), this.i18nInit();
    }
    i18nInit() {
      const t2 = new e5([this.defaultLocale, this.uppy.locale, this.opts.locale]);
      this.i18n = t2.translate.bind(t2), this.i18nArray = t2.translateArray.bind(t2), this.setPluginState();
    }
    addTarget() {
      throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
    }
    install() {
    }
    uninstall() {
    }
    render() {
      throw new Error("Extend the render method to add your plugin to a DOM element");
    }
    update() {
    }
    afterUpdate() {
    }
  };
}
function eA() {
  if (KS) return qS;
  KS = 1;
  var e5 = ZS;
  function t2(e6, t3) {
    if (!Object.prototype.hasOwnProperty.call(e6, t3)) throw new TypeError("attempted to use private field on non-instance");
    return e6;
  }
  var n2 = 0;
  function r2(e6) {
    return "__private_" + n2++ + "_" + e6;
  }
  const o2 = JS(), i2 = VS ? US : (VS = 1, US = function(e6) {
    for (var t3; e6 && !e6.dir; ) e6 = e6.parentNode;
    return null == (t3 = e6) ? void 0 : t3.dir;
  }), a2 = QS();
  var s2 = r2("updateUI");
  class u2 extends a2 {
    constructor() {
      super(...arguments), Object.defineProperty(this, s2, { writable: true, value: void 0 });
    }
    mount(n3, r3) {
      const a3 = r3.id, l2 = o2(n3);
      if (l2) {
        this.isTargetDOMEl = true;
        const r4 = document.createElement("div");
        return r4.classList.add("uppy-Root"), t2(this, s2)[s2] = /* @__PURE__ */ (function(e6) {
          let t3 = null, n4 = null;
          return function() {
            for (var r5 = arguments.length, o3 = new Array(r5), i3 = 0; i3 < r5; i3++) o3[i3] = arguments[i3];
            return n4 = o3, t3 || (t3 = Promise.resolve().then(() => (t3 = null, e6(...n4)))), t3;
          };
        })((t3) => {
          this.uppy.getPlugin(this.id) && ((0, e5.render)(this.render(t3), r4), this.afterUpdate());
        }), this.uppy.log(`Installing ${a3} to a DOM element '${n3}'`), this.opts.replaceTargetContent && (l2.innerHTML = ""), (0, e5.render)(this.render(this.uppy.getState()), r4), this.el = r4, l2.appendChild(r4), r4.dir = this.opts.direction || i2(r4) || "ltr", this.onMount(), this.el;
      }
      let c2;
      if ("object" == typeof n3 && n3 instanceof u2) c2 = n3;
      else if ("function" == typeof n3) {
        const e6 = n3;
        this.uppy.iteratePlugins((t3) => {
          t3 instanceof e6 && (c2 = t3);
        });
      }
      if (c2) return this.uppy.log(`Installing ${a3} to ${c2.id}`), this.parent = c2, this.el = c2.addTarget(r3), this.onMount(), this.el;
      this.uppy.log(`Not installing ${a3}`);
      let d2 = `Invalid target option given to ${a3}.`;
      throw d2 += "function" == typeof n3 ? " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(d2);
    }
    update(e6) {
      var n3, r3;
      null != this.el && (null == (n3 = (r3 = t2(this, s2))[s2]) || n3.call(r3, e6));
    }
    unmount() {
      var e6;
      this.isTargetDOMEl && (null == (e6 = this.el) || e6.remove());
      this.onUnmount();
    }
    onMount() {
    }
    onUnmount() {
    }
  }
  return qS = u2;
}
var tA, nA, rA, oA, iA, aA, sA, uA, lA, cA, dA = (YS || (YS = 1, (function(e5, t2) {
  Object.defineProperty(t2, "__esModule", { value: true }), t2.Uppy = t2.UIPlugin = t2.BasePlugin = void 0, Object.defineProperty(t2, "debugLogger", { enumerable: true, get: function() {
    return n2.debugLogger;
  } });
  var n2 = aw();
  e5.exports = Yw();
  const r2 = eA();
  t2.UIPlugin = r2;
  const o2 = QS();
  t2.BasePlugin = o2;
  const i2 = Yw();
  t2.Uppy = i2;
  const a2 = eA(), s2 = QS();
  i2.Uppy = i2, i2.UIPlugin = a2, i2.BasePlugin = s2, i2.debugLogger = n2.debugLogger;
})(ow, ow.exports)), ow.exports), fA = b(dA), pA = {};
function hA() {
  if (nA) return tA;
  nA = 1;
  class e5 extends Error {
    constructor(e6, t2) {
      void 0 === t2 && (t2 = null), super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."), this.cause = e6, this.isNetworkError = true, this.request = t2;
    }
  }
  return tA = e5;
}
function gA() {
  if (cA) return lA;
  let e5;
  function t2(e6, t3) {
    if (!Object.prototype.hasOwnProperty.call(e6, t3)) throw new TypeError("attempted to use private field on non-instance");
    return e6;
  }
  cA = 1;
  var n2 = 0;
  function r2(e6) {
    return "__private_" + n2++ + "_" + e6;
  }
  const o2 = (function() {
    if (oA) return rA;
    oA = 1;
    const e6 = hA();
    return rA = function() {
      return fetch(...arguments).catch((t3) => {
        throw "AbortError" === t3.name ? t3 : new e6(t3);
      });
    }, rA;
  })(), i2 = (function() {
    if (aA) return iA;
    aA = 1;
    const e6 = Uw();
    class t3 extends Error {
      constructor(t4, n3) {
        void 0 === n3 && (n3 = {}), super(t4), this.cause = n3.cause, this.cause && e6(this.cause, "isNetworkError") && (this.isNetworkError = this.cause.isNetworkError);
      }
    }
    return iA = t3;
  })(), a2 = (function() {
    if (uA) return sA;
    uA = 1;
    class e6 extends Error {
      constructor() {
        super("Authorization required"), this.name = "AuthError", this.isAuthError = true;
      }
    }
    return sA = e6;
  })();
  async function s2(e6) {
    if (401 === e6.status) throw new a2();
    const t3 = e6.json();
    if (e6.status < 200 || e6.status > 300) {
      let n3 = `Failed request with status: ${e6.status}. ${e6.statusText}`;
      try {
        const e7 = await t3;
        n3 = e7.message ? `${n3} message: ${e7.message}` : n3, n3 = e7.requestId ? `${n3} request-Id: ${e7.requestId}` : n3;
      } finally {
        throw new Error(n3);
      }
    }
    return t3;
  }
  var u2 = r2("companionHeaders"), l2 = r2("getPostResponseFunc"), c2 = r2("getUrl"), d2 = r2("errorHandler");
  e5 = Symbol.for("uppy test: getCompanionHeaders");
  class f2 {
    constructor(e6, n3) {
      Object.defineProperty(this, d2, { value: h2 }), Object.defineProperty(this, c2, { value: p2 }), Object.defineProperty(this, u2, { writable: true, value: void 0 }), Object.defineProperty(this, l2, { writable: true, value: (e7) => (t3) => e7 ? t3 : this.onReceiveResponse(t3) }), this.uppy = e6, this.opts = n3, this.onReceiveResponse = this.onReceiveResponse.bind(this), this.allowedHeaders = ["accept", "content-type", "uppy-auth-token"], this.preflightDone = false, t2(this, u2)[u2] = null == n3 ? void 0 : n3.companionHeaders;
    }
    setCompanionHeaders(e6) {
      t2(this, u2)[u2] = e6;
    }
    [e5]() {
      return t2(this, u2)[u2];
    }
    get hostname() {
      const { companion: e6 } = this.uppy.getState(), t3 = this.opts.companionUrl;
      return (e6 && e6[t3] ? e6[t3] : t3).replace(/\/$/, "");
    }
    headers() {
      return Promise.resolve({ ...f2.defaultHeaders, ...t2(this, u2)[u2] });
    }
    onReceiveResponse(e6) {
      const t3 = this.uppy.getState().companion || {}, n3 = this.opts.companionUrl, { headers: r3 } = e6;
      return r3.has("i-am") && r3.get("i-am") !== t3[n3] && this.uppy.setState({ companion: { ...t3, [n3]: r3.get("i-am") } }), e6;
    }
    preflight(e6) {
      return this.preflightDone ? Promise.resolve(this.allowedHeaders.slice()) : fetch(t2(this, c2)[c2](e6), { method: "OPTIONS" }).then((e7) => (e7.headers.has("access-control-allow-headers") && (this.allowedHeaders = e7.headers.get("access-control-allow-headers").split(",").map((e8) => e8.trim().toLowerCase())), this.preflightDone = true, this.allowedHeaders.slice())).catch((e7) => (this.uppy.log(`[CompanionClient] unable to make preflight request ${e7}`, "warning"), this.preflightDone = true, this.allowedHeaders.slice()));
    }
    preflightAndHeaders(e6) {
      return Promise.all([this.preflight(e6), this.headers()]).then((e7) => {
        let [t3, n3] = e7;
        return Object.keys(n3).forEach((e8) => {
          t3.includes(e8.toLowerCase()) || (this.uppy.log(`[CompanionClient] excluding disallowed header ${e8}`), delete n3[e8]);
        }), n3;
      });
    }
    get(e6, n3) {
      return this.preflightAndHeaders(e6).then((n4) => o2(t2(this, c2)[c2](e6), { method: "get", headers: n4, credentials: this.opts.companionCookiesRule || "same-origin" })).then(t2(this, l2)[l2](n3)).then(s2).catch(t2(this, d2)[d2]("get", e6));
    }
    post(e6, n3, r3) {
      const i3 = "post";
      return this.preflightAndHeaders(e6).then((r4) => o2(t2(this, c2)[c2](e6), { method: i3, headers: r4, credentials: this.opts.companionCookiesRule || "same-origin", body: JSON.stringify(n3) })).then(t2(this, l2)[l2](r3)).then(s2).catch(t2(this, d2)[d2](i3, e6));
    }
    delete(e6, n3, r3) {
      const i3 = "delete";
      return this.preflightAndHeaders(e6).then((t3) => o2(`${this.hostname}/${e6}`, { method: i3, headers: t3, credentials: this.opts.companionCookiesRule || "same-origin", body: n3 ? JSON.stringify(n3) : null })).then(t2(this, l2)[l2](r3)).then(s2).catch(t2(this, d2)[d2](i3, e6));
    }
  }
  function p2(e6) {
    return /^(https?:|)\/\//.test(e6) ? e6 : `${this.hostname}/${e6}`;
  }
  function h2(e6, n3) {
    return (r3) => {
      var o3;
      return null != (o3 = r3) && o3.isAuthError || (r3 = new i2(`Could not ${e6} ${t2(this, c2)[c2](n3)}`, { cause: r3 })), Promise.reject(r3);
    };
  }
  return f2.VERSION = "2.2.2", f2.defaultHeaders = { Accept: "application/json", "Content-Type": "application/json", "Uppy-Versions": `@uppy/companion-client=${f2.VERSION}` }, lA = f2;
}
var vA, mA, yA, bA, EA, CA, DA, wA, SA = {};
function AA() {
  if (vA) return SA;
  return vA = 1, Object.defineProperty(SA, "__esModule", { value: true }), SA.getItem = function(e5) {
    return Promise.resolve(localStorage.getItem(e5));
  }, SA.removeItem = function(e5) {
    return new Promise((t2) => {
      localStorage.removeItem(e5), t2();
    });
  }, SA.setItem = function(e5, t2) {
    return new Promise((n2) => {
      localStorage.setItem(e5, t2), n2();
    });
  }, SA;
}
function xA() {
  if (wA) return pA;
  wA = 1, Object.defineProperty(pA, "__esModule", { value: true }), pA.Socket = pA.SearchProvider = pA.RequestClient = pA.Provider = void 0;
  const e5 = gA();
  pA.RequestClient = e5;
  const t2 = (function() {
    if (yA) return mA;
    yA = 1;
    var e6 = AA();
    const t3 = gA();
    return mA = class extends t3 {
      constructor(e7, t4) {
        super(e7, t4), this.provider = t4.provider, this.id = this.provider, this.name = this.opts.name || this.id.split("-").map((e8) => e8.charAt(0).toUpperCase() + e8.slice(1)).join(" "), this.pluginId = this.opts.pluginId, this.tokenKey = `companion-${this.pluginId}-auth-token`, this.companionKeysParams = this.opts.companionKeysParams, this.preAuthToken = null;
      }
      headers() {
        return Promise.all([super.headers(), this.getAuthToken()]).then((e7) => {
          let [t4, n3] = e7;
          const r3 = {};
          return n3 && (r3["uppy-auth-token"] = n3), this.companionKeysParams && (r3["uppy-credentials-params"] = btoa(JSON.stringify({ params: this.companionKeysParams }))), { ...t4, ...r3 };
        });
      }
      onReceiveResponse(e7) {
        e7 = super.onReceiveResponse(e7);
        const t4 = this.uppy.getPlugin(this.pluginId), n3 = t4.getPluginState().authenticated ? 401 !== e7.status : e7.status < 400;
        return t4.setPluginState({ authenticated: n3 }), e7;
      }
      setAuthToken(e7) {
        return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, e7);
      }
      getAuthToken() {
        return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
      }
      async ensurePreAuth() {
        if (this.companionKeysParams && !this.preAuthToken && (await this.fetchPreAuthToken(), !this.preAuthToken)) throw new Error("Could not load authentication data required for third-party login. Please try again later.");
      }
      authUrl(e7) {
        void 0 === e7 && (e7 = {});
        const t4 = new URLSearchParams(e7);
        return this.preAuthToken && t4.set("uppyPreAuthToken", this.preAuthToken), `${this.hostname}/${this.id}/connect?${t4}`;
      }
      fileUrl(e7) {
        return `${this.hostname}/${this.id}/get/${e7}`;
      }
      async fetchPreAuthToken() {
        if (this.companionKeysParams) try {
          const e7 = await this.post(`${this.id}/preauth/`, { params: this.companionKeysParams });
          this.preAuthToken = e7.token;
        } catch (e7) {
          this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${e7}`, "warning");
        }
      }
      list(e7) {
        return this.get(`${this.id}/list/${e7 || ""}`);
      }
      logout() {
        return this.get(`${this.id}/logout`).then((e7) => Promise.all([e7, this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)])).then((e7) => {
          let [t4] = e7;
          return t4;
        });
      }
      static initPlugin(t4, n3, r3) {
        if (t4.type = "acquirer", t4.files = [], r3 && (t4.opts = { ...r3, ...n3 }), n3.serverUrl || n3.serverPattern) throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
        if (n3.companionAllowedHosts) {
          const e7 = n3.companionAllowedHosts;
          if (!("string" == typeof e7 || Array.isArray(e7) || e7 instanceof RegExp)) throw new TypeError(`${t4.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
          t4.opts.companionAllowedHosts = e7;
        } else /^(?!https?:\/\/).*$/i.test(n3.companionUrl) ? t4.opts.companionAllowedHosts = `https://${n3.companionUrl.replace(/^\/\//, "")}` : t4.opts.companionAllowedHosts = new URL(n3.companionUrl).origin;
        t4.storage = t4.opts.storage || e6;
      }
    }, mA;
  })();
  pA.Provider = t2;
  const n2 = (function() {
    if (EA) return bA;
    EA = 1;
    const e6 = gA();
    return bA = class extends e6 {
      constructor(e7, t3) {
        super(e7, t3), this.provider = t3.provider, this.id = this.provider, this.name = this.opts.name || this.id.split("-").map((e8) => e8.charAt(0).toUpperCase() + e8.slice(1)).join(" "), this.pluginId = this.opts.pluginId;
      }
      fileUrl(e7) {
        return `${this.hostname}/search/${this.id}/get/${e7}`;
      }
      search(e7, t3) {
        return this.get(`search/${this.id}/list?q=${encodeURIComponent(e7)}${t3 ? `&${t3}` : ""}`);
      }
    }, bA;
  })();
  pA.SearchProvider = n2;
  const r2 = (function() {
    if (DA) return CA;
    let e6, t3;
    function n3(e7, t4) {
      if (!Object.prototype.hasOwnProperty.call(e7, t4)) throw new TypeError("attempted to use private field on non-instance");
      return e7;
    }
    DA = 1;
    var r3 = 0;
    function o2(e7) {
      return "__private_" + r3++ + "_" + e7;
    }
    const i2 = Ww();
    var a2 = o2("queued"), s2 = o2("emitter"), u2 = o2("isOpen"), l2 = o2("socket"), c2 = o2("handleMessage");
    return e6 = Symbol.for("uppy test: getSocket"), t3 = Symbol.for("uppy test: getQueued"), CA = class {
      constructor(e7) {
        Object.defineProperty(this, a2, { writable: true, value: [] }), Object.defineProperty(this, s2, { writable: true, value: i2() }), Object.defineProperty(this, u2, { writable: true, value: false }), Object.defineProperty(this, l2, { writable: true, value: void 0 }), Object.defineProperty(this, c2, { writable: true, value: (e8) => {
          try {
            const t4 = JSON.parse(e8.data);
            this.emit(t4.action, t4.payload);
          } catch (e9) {
            console.log(e9);
          }
        } }), this.opts = e7, e7 && false === e7.autoOpen || this.open();
      }
      get isOpen() {
        return n3(this, u2)[u2];
      }
      [e6]() {
        return n3(this, l2)[l2];
      }
      [t3]() {
        return n3(this, a2)[a2];
      }
      open() {
        n3(this, l2)[l2] = new WebSocket(this.opts.target), n3(this, l2)[l2].onopen = () => {
          for (n3(this, u2)[u2] = true; n3(this, a2)[a2].length > 0 && n3(this, u2)[u2]; ) {
            const e7 = n3(this, a2)[a2].shift();
            this.send(e7.action, e7.payload);
          }
        }, n3(this, l2)[l2].onclose = () => {
          n3(this, u2)[u2] = false;
        }, n3(this, l2)[l2].onmessage = n3(this, c2)[c2];
      }
      close() {
        var e7;
        null == (e7 = n3(this, l2)[l2]) || e7.close();
      }
      send(e7, t4) {
        n3(this, u2)[u2] ? n3(this, l2)[l2].send(JSON.stringify({ action: e7, payload: t4 })) : n3(this, a2)[a2].push({ action: e7, payload: t4 });
      }
      on(e7, t4) {
        n3(this, s2)[s2].on(e7, t4);
      }
      emit(e7, t4) {
        n3(this, s2)[s2].emit(e7, t4);
      }
      once(e7, t4) {
        n3(this, s2)[s2].once(e7, t4);
      }
    }, CA;
  })();
  return pA.Socket = r2, pA;
}
var OA, NA, BA, TA, kA, FA, IA, PA, _A, RA, LA, MA, jA, HA, zA, $A, UA, VA = {};
function WA() {
  if (OA) return VA;
  function e5(e6, t3) {
    if (!Object.prototype.hasOwnProperty.call(e6, t3)) throw new TypeError("attempted to use private field on non-instance");
    return e6;
  }
  OA = 1, Object.defineProperty(VA, "__esModule", { value: true }), VA.internalRateLimitedQueue = VA.RateLimitedQueue = void 0;
  var t2 = 0;
  function n2(e6) {
    return "__private_" + t2++ + "_" + e6;
  }
  var r2 = n2("activeRequests"), o2 = n2("queuedHandlers"), i2 = n2("paused"), a2 = n2("pauseTimer"), s2 = n2("downLimit"), u2 = n2("upperLimit"), l2 = n2("rateLimitingTimer"), c2 = n2("call"), d2 = n2("queueNext"), f2 = n2("next"), p2 = n2("queue"), h2 = n2("dequeue"), g2 = n2("resume"), v2 = n2("increaseLimit");
  function m2(t3) {
    e5(this, r2)[r2] += 1;
    let n3, o3 = false;
    try {
      n3 = t3();
    } catch (t4) {
      throw e5(this, r2)[r2] -= 1, t4;
    }
    return { abort: () => {
      o3 || (o3 = true, e5(this, r2)[r2] -= 1, n3(), e5(this, d2)[d2]());
    }, done: () => {
      o3 || (o3 = true, e5(this, r2)[r2] -= 1, e5(this, d2)[d2]());
    } };
  }
  function y2() {
    queueMicrotask(() => e5(this, f2)[f2]());
  }
  function b2() {
    if (e5(this, i2)[i2] || e5(this, r2)[r2] >= this.limit) return;
    if (0 === e5(this, o2)[o2].length) return;
    const t3 = e5(this, o2)[o2].shift(), n3 = e5(this, c2)[c2](t3.fn);
    t3.abort = n3.abort, t3.done = n3.done;
  }
  function E2(t3, n3) {
    void 0 === n3 && (n3 = {});
    const r3 = { fn: t3, priority: n3.priority || 0, abort: () => {
      e5(this, h2)[h2](r3);
    }, done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    } }, i3 = e5(this, o2)[o2].findIndex((e6) => r3.priority > e6.priority);
    return -1 === i3 ? e5(this, o2)[o2].push(r3) : e5(this, o2)[o2].splice(i3, 0, r3), r3;
  }
  function C2(t3) {
    const n3 = e5(this, o2)[o2].indexOf(t3);
    -1 !== n3 && e5(this, o2)[o2].splice(n3, 1);
  }
  VA.RateLimitedQueue = class {
    constructor(t3) {
      Object.defineProperty(this, h2, { value: C2 }), Object.defineProperty(this, p2, { value: E2 }), Object.defineProperty(this, f2, { value: b2 }), Object.defineProperty(this, d2, { value: y2 }), Object.defineProperty(this, c2, { value: m2 }), Object.defineProperty(this, r2, { writable: true, value: 0 }), Object.defineProperty(this, o2, { writable: true, value: [] }), Object.defineProperty(this, i2, { writable: true, value: false }), Object.defineProperty(this, a2, { writable: true, value: void 0 }), Object.defineProperty(this, s2, { writable: true, value: 1 }), Object.defineProperty(this, u2, { writable: true, value: void 0 }), Object.defineProperty(this, l2, { writable: true, value: void 0 }), Object.defineProperty(this, g2, { writable: true, value: () => this.resume() }), Object.defineProperty(this, v2, { writable: true, value: () => {
        if (e5(this, i2)[i2]) e5(this, l2)[l2] = setTimeout(e5(this, v2)[v2], 0);
        else {
          e5(this, s2)[s2] = this.limit, this.limit = Math.ceil((e5(this, u2)[u2] + e5(this, s2)[s2]) / 2);
          for (let t4 = e5(this, s2)[s2]; t4 <= this.limit; t4++) e5(this, d2)[d2]();
          e5(this, u2)[u2] - e5(this, s2)[s2] > 3 ? e5(this, l2)[l2] = setTimeout(e5(this, v2)[v2], 2e3) : e5(this, s2)[s2] = Math.floor(e5(this, s2)[s2] / 2);
        }
      } }), this.limit = "number" != typeof t3 || 0 === t3 ? 1 / 0 : t3;
    }
    run(t3, n3) {
      return !e5(this, i2)[i2] && e5(this, r2)[r2] < this.limit ? e5(this, c2)[c2](t3) : e5(this, p2)[p2](t3, n3);
    }
    wrapPromiseFunction(e6, t3) {
      var n3 = this;
      return function() {
        for (var r3 = arguments.length, o3 = new Array(r3), i3 = 0; i3 < r3; i3++) o3[i3] = arguments[i3];
        let a3;
        const s3 = new Promise((r4, i4) => {
          a3 = n3.run(() => {
            let t4, n4;
            try {
              n4 = Promise.resolve(e6(...o3));
            } catch (e7) {
              n4 = Promise.reject(e7);
            }
            return n4.then((e7) => {
              t4 ? i4(t4) : (a3.done(), r4(e7));
            }, (e7) => {
              t4 ? i4(t4) : (a3.done(), i4(e7));
            }), () => {
              t4 = new Error("Cancelled");
            };
          }, t3);
        });
        return s3.abort = () => {
          a3.abort();
        }, s3;
      };
    }
    resume() {
      e5(this, i2)[i2] = false, clearTimeout(e5(this, a2)[a2]);
      for (let t3 = 0; t3 < this.limit; t3++) e5(this, d2)[d2]();
    }
    pause(t3) {
      void 0 === t3 && (t3 = null), e5(this, i2)[i2] = true, clearTimeout(e5(this, a2)[a2]), null != t3 && (e5(this, a2)[a2] = setTimeout(e5(this, g2)[g2], t3));
    }
    rateLimit(t3) {
      clearTimeout(e5(this, l2)[l2]), this.pause(t3), this.limit > 1 && Number.isFinite(this.limit) && (e5(this, u2)[u2] = this.limit - 1, this.limit = e5(this, s2)[s2], e5(this, l2)[l2] = setTimeout(e5(this, v2)[v2], t3));
    }
    get isPaused() {
      return e5(this, i2)[i2];
    }
  };
  const D2 = Symbol("__queue");
  return VA.internalRateLimitedQueue = D2, VA;
}
function GA() {
  return zA ? HA : (zA = 1, HA = { strings: { timedOut: "Upload stalled for %{seconds} seconds, aborting." } });
}
var qA = (function() {
  if (UA) return $A;
  UA = 1;
  var e5 = sw(), t2 = xA(), n2 = WA();
  const r2 = QS(), o2 = (function() {
    if (BA) return NA;
    BA = 1;
    const e6 = SC();
    return NA = e6(function(e7, t3, n3) {
      const { progress: r3, bytesUploaded: o3, bytesTotal: i3 } = t3;
      r3 && (e7.uppy.log(`Upload progress: ${r3}`), e7.uppy.emit("upload-progress", n3, { uploader: e7, bytesUploaded: o3, bytesTotal: i3 }));
    }, 300, { leading: true, trailing: true });
  })(), i2 = kA ? TA : (kA = 1, TA = function(e6) {
    const t3 = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(e6)[1];
    return `${/^http:\/\//i.test(e6) ? "ws" : "wss"}://${t3}`;
  }), a2 = IA ? FA : (IA = 1, FA = function(e6) {
    const t3 = [], n3 = [];
    function r3(e7) {
      t3.push(e7);
    }
    function o3(e7) {
      n3.push(e7);
    }
    return Promise.all(e6.map((e7) => e7.then(r3, o3))).then(() => ({ successful: t3, failed: n3 }));
  }), s2 = (function() {
    if (_A) return PA;
    function e6(e7, t4) {
      if (!Object.prototype.hasOwnProperty.call(e7, t4)) throw new TypeError("attempted to use private field on non-instance");
      return e7;
    }
    _A = 1;
    var t3 = 0;
    function n3(e7) {
      return "__private_" + t3++ + "_" + e7;
    }
    var r3 = n3("emitter"), o3 = n3("events");
    return PA = class {
      constructor(t4) {
        Object.defineProperty(this, r3, { writable: true, value: void 0 }), Object.defineProperty(this, o3, { writable: true, value: [] }), e6(this, r3)[r3] = t4;
      }
      on(t4, n4) {
        return e6(this, o3)[o3].push([t4, n4]), e6(this, r3)[r3].on(t4, n4);
      }
      remove() {
        for (const [t4, n4] of e6(this, o3)[o3].splice(0)) e6(this, r3)[r3].off(t4, n4);
      }
    }, PA;
  })(), u2 = (function() {
    if (LA) return RA;
    function e6(e7, t4) {
      if (!Object.prototype.hasOwnProperty.call(e7, t4)) throw new TypeError("attempted to use private field on non-instance");
      return e7;
    }
    LA = 1;
    var t3 = 0;
    function n3(e7) {
      return "__private_" + t3++ + "_" + e7;
    }
    var r3 = n3("aliveTimer"), o3 = n3("isDone"), i3 = n3("onTimedOut"), a3 = n3("timeout");
    return RA = class {
      constructor(t4, n4) {
        Object.defineProperty(this, r3, { writable: true, value: void 0 }), Object.defineProperty(this, o3, { writable: true, value: false }), Object.defineProperty(this, i3, { writable: true, value: void 0 }), Object.defineProperty(this, a3, { writable: true, value: void 0 }), e6(this, a3)[a3] = t4, e6(this, i3)[i3] = n4;
      }
      progress() {
        e6(this, o3)[o3] || e6(this, a3)[a3] > 0 && (clearTimeout(e6(this, r3)[r3]), e6(this, r3)[r3] = setTimeout(e6(this, i3)[i3], e6(this, a3)[a3]));
      }
      done() {
        e6(this, o3)[o3] || (clearTimeout(e6(this, r3)[r3]), e6(this, r3)[r3] = null, e6(this, o3)[o3] = true);
      }
    };
  })(), l2 = hA(), c2 = jA ? MA : (jA = 1, MA = function(e6) {
    return !!e6 && (0 !== e6.readyState && 4 !== e6.readyState || 0 === e6.status);
  }), d2 = GA();
  function f2(e6, t3) {
    let n3 = t3;
    return n3 || (n3 = new Error("Upload error")), "string" == typeof n3 && (n3 = new Error(n3)), n3 instanceof Error || (n3 = Object.assign(new Error("Upload error"), { data: n3 })), c2(e6) ? (n3 = new l2(n3, e6), n3) : (n3.request = e6, n3);
  }
  function p2(e6) {
    return e6.data.slice(0, e6.data.size, e6.meta.type);
  }
  class h2 extends r2 {
    constructor(e6, t3) {
      super(e6, t3), this.type = "uploader", this.id = this.opts.id || "XHRUpload", this.title = "XHRUpload", this.defaultLocale = d2;
      const r3 = { formData: true, fieldName: t3.bundle ? "files[]" : "file", method: "post", metaFields: null, responseUrlFieldName: "url", bundle: false, headers: {}, timeout: 3e4, limit: 5, withCredentials: false, responseType: "", getResponseData(t4) {
        let n3 = {};
        try {
          n3 = JSON.parse(t4);
        } catch (t5) {
          e6.log(t5);
        }
        return n3;
      }, getResponseError(e7, t4) {
        let n3 = new Error("Upload error");
        return c2(t4) && (n3 = new l2(n3, t4)), n3;
      }, validateStatus: (e7) => e7 >= 200 && e7 < 300 };
      if (this.opts = { ...r3, ...t3 }, this.i18nInit(), this.handleUpload = this.handleUpload.bind(this), n2.internalRateLimitedQueue in this.opts ? this.requests = this.opts[n2.internalRateLimitedQueue] : this.requests = new n2.RateLimitedQueue(this.opts.limit), this.opts.bundle && !this.opts.formData) throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.");
      this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    }
    getOptions(e6) {
      const t3 = this.uppy.getState().xhrUpload, { headers: n3 } = this.opts, r3 = { ...this.opts, ...t3 || {}, ...e6.xhrUpload || {}, headers: {} };
      return "function" == typeof n3 ? r3.headers = n3(e6) : Object.assign(r3.headers, this.opts.headers), t3 && Object.assign(r3.headers, t3.headers), e6.xhrUpload && Object.assign(r3.headers, e6.xhrUpload.headers), r3;
    }
    addMetadata(e6, t3, n3) {
      (Array.isArray(n3.metaFields) ? n3.metaFields : Object.keys(t3)).forEach((n4) => {
        e6.append(n4, t3[n4]);
      });
    }
    createFormDataUpload(e6, t3) {
      const n3 = new FormData();
      this.addMetadata(n3, e6.meta, t3);
      const r3 = p2(e6);
      return e6.name ? n3.append(t3.fieldName, r3, e6.meta.name) : n3.append(t3.fieldName, r3), n3;
    }
    createBundledUpload(e6, t3) {
      const n3 = new FormData(), { meta: r3 } = this.uppy.getState();
      return this.addMetadata(n3, r3, t3), e6.forEach((e7) => {
        const t4 = this.getOptions(e7), r4 = p2(e7);
        e7.name ? n3.append(t4.fieldName, r4, e7.name) : n3.append(t4.fieldName, r4);
      }), n3;
    }
    upload(t3, n3, r3) {
      const o3 = this.getOptions(t3);
      return this.uppy.log(`uploading ${n3} of ${r3}`), new Promise((n4, r4) => {
        this.uppy.emit("upload-started", t3);
        const i3 = o3.formData ? this.createFormDataUpload(t3, o3) : t3.data, a3 = new XMLHttpRequest();
        let l3;
        this.uploaderEvents[t3.id] = new s2(this.uppy);
        const c3 = new u2(o3.timeout, () => {
          a3.abort(), l3.done();
          const e6 = new Error(this.i18n("timedOut", { seconds: Math.ceil(o3.timeout / 1e3) }));
          this.uppy.emit("upload-error", t3, e6), r4(e6);
        }), d3 = (0, e5.nanoid)();
        a3.upload.addEventListener("loadstart", () => {
          this.uppy.log(`[XHRUpload] ${d3} started`);
        }), a3.upload.addEventListener("progress", (e6) => {
          this.uppy.log(`[XHRUpload] ${d3} progress: ${e6.loaded} / ${e6.total}`), c3.progress(), e6.lengthComputable && this.uppy.emit("upload-progress", t3, { uploader: this, bytesUploaded: e6.loaded, bytesTotal: e6.total });
        }), a3.addEventListener("load", () => {
          if (this.uppy.log(`[XHRUpload] ${d3} finished`), c3.done(), l3.done(), this.uploaderEvents[t3.id] && (this.uploaderEvents[t3.id].remove(), this.uploaderEvents[t3.id] = null), o3.validateStatus(a3.status, a3.responseText, a3)) {
            const e7 = o3.getResponseData(a3.responseText, a3), r5 = e7[o3.responseUrlFieldName], i5 = { status: a3.status, body: e7, uploadURL: r5 };
            return this.uppy.emit("upload-success", t3, i5), r5 && this.uppy.log(`Download ${t3.name} from ${r5}`), n4(t3);
          }
          const e6 = o3.getResponseData(a3.responseText, a3), i4 = f2(a3, o3.getResponseError(a3.responseText, a3)), s3 = { status: a3.status, body: e6 };
          return this.uppy.emit("upload-error", t3, i4, s3), r4(i4);
        }), a3.addEventListener("error", () => {
          this.uppy.log(`[XHRUpload] ${d3} errored`), c3.done(), l3.done(), this.uploaderEvents[t3.id] && (this.uploaderEvents[t3.id].remove(), this.uploaderEvents[t3.id] = null);
          const e6 = f2(a3, o3.getResponseError(a3.responseText, a3));
          return this.uppy.emit("upload-error", t3, e6), r4(e6);
        }), a3.open(o3.method.toUpperCase(), o3.endpoint, true), a3.withCredentials = o3.withCredentials, "" !== o3.responseType && (a3.responseType = o3.responseType), l3 = this.requests.run(() => {
          this.uppy.emit("upload-started", t3);
          const e6 = this.getOptions(t3);
          return Object.keys(e6.headers).forEach((t4) => {
            a3.setRequestHeader(t4, e6.headers[t4]);
          }), a3.send(i3), () => {
            c3.done(), a3.abort();
          };
        }), this.onFileRemove(t3.id, () => {
          l3.abort(), r4(new Error("File removed"));
        }), this.onCancelAll(t3.id, (e6) => {
          let { reason: t4 } = e6;
          "user" === t4 && l3.abort(), r4(new Error("Upload cancelled"));
        });
      });
    }
    uploadRemote(e6) {
      const n3 = this.getOptions(e6);
      return new Promise((r3, a3) => {
        this.uppy.emit("upload-started", e6);
        const u3 = {};
        (Array.isArray(n3.metaFields) ? n3.metaFields : Object.keys(e6.meta)).forEach((t3) => {
          u3[t3] = e6.meta[t3];
        });
        new (e6.remote.providerOptions.provider ? t2.Provider : t2.RequestClient)(this.uppy, e6.remote.providerOptions).post(e6.remote.url, { ...e6.remote.body, endpoint: n3.endpoint, size: e6.data.size, fieldname: n3.fieldName, metadata: u3, httpMethod: n3.method, useFormData: n3.formData, headers: n3.headers }).then((u4) => {
          const { token: l3 } = u4, c3 = i2(e6.remote.companionUrl), d3 = new t2.Socket({ target: `${c3}/api/${l3}`, autoOpen: false });
          let f3;
          this.uploaderEvents[e6.id] = new s2(this.uppy), this.onFileRemove(e6.id, () => {
            d3.send("cancel", {}), f3.abort(), r3(`upload ${e6.id} was removed`);
          }), this.onCancelAll(e6.id, function(t3) {
            let { reason: n4 } = void 0 === t3 ? {} : t3;
            "user" === n4 && (d3.send("cancel", {}), f3.abort()), r3(`upload ${e6.id} was canceled`);
          }), this.onRetry(e6.id, () => {
            d3.send("pause", {}), d3.send("resume", {});
          }), this.onRetryAll(e6.id, () => {
            d3.send("pause", {}), d3.send("resume", {});
          }), d3.on("progress", (t3) => o2(this, t3, e6)), d3.on("success", (t3) => {
            const o3 = n3.getResponseData(t3.response.responseText, t3.response), i3 = o3[n3.responseUrlFieldName], a4 = { status: t3.response.status, body: o3, uploadURL: i3 };
            return this.uppy.emit("upload-success", e6, a4), f3.done(), this.uploaderEvents[e6.id] && (this.uploaderEvents[e6.id].remove(), this.uploaderEvents[e6.id] = null), r3();
          }), d3.on("error", (t3) => {
            const r4 = t3.response, o3 = r4 ? n3.getResponseError(r4.responseText, r4) : Object.assign(new Error(t3.error.message), { cause: t3.error });
            this.uppy.emit("upload-error", e6, o3), f3.done(), this.uploaderEvents[e6.id] && (this.uploaderEvents[e6.id].remove(), this.uploaderEvents[e6.id] = null), a3(o3);
          }), f3 = this.requests.run(() => (d3.open(), e6.isPaused && d3.send("pause", {}), () => d3.close()));
        }).catch((t3) => {
          this.uppy.emit("upload-error", e6, t3), a3(t3);
        });
      });
    }
    uploadBundle(e6) {
      return new Promise((t3, n3) => {
        const { endpoint: r3 } = this.opts, { method: o3 } = this.opts, i3 = this.uppy.getState().xhrUpload, a3 = this.createBundledUpload(e6, { ...this.opts, ...i3 || {} }), s3 = new XMLHttpRequest(), l3 = (t4) => {
          e6.forEach((e7) => {
            this.uppy.emit("upload-error", e7, t4);
          });
        }, c3 = new u2(this.opts.timeout, () => {
          s3.abort();
          const e7 = new Error(this.i18n("timedOut", { seconds: Math.ceil(this.opts.timeout / 1e3) }));
          l3(e7), n3(e7);
        });
        s3.upload.addEventListener("loadstart", () => {
          this.uppy.log("[XHRUpload] started uploading bundle"), c3.progress();
        }), s3.upload.addEventListener("progress", (t4) => {
          c3.progress(), t4.lengthComputable && e6.forEach((e7) => {
            this.uppy.emit("upload-progress", e7, { uploader: this, bytesUploaded: t4.loaded / t4.total * e7.size, bytesTotal: e7.size });
          });
        }), s3.addEventListener("load", (r4) => {
          if (c3.done(), this.opts.validateStatus(r4.target.status, s3.responseText, s3)) {
            const n4 = this.opts.getResponseData(s3.responseText, s3), o5 = { status: r4.target.status, body: n4 };
            return e6.forEach((e7) => {
              this.uppy.emit("upload-success", e7, o5);
            }), t3();
          }
          const o4 = this.opts.getResponseError(s3.responseText, s3) || new Error("Upload error");
          return o4.request = s3, l3(o4), n3(o4);
        }), s3.addEventListener("error", () => {
          c3.done();
          const e7 = this.opts.getResponseError(s3.responseText, s3) || new Error("Upload error");
          return l3(e7), n3(e7);
        }), this.uppy.on("cancel-all", function(e7) {
          let { reason: t4 } = void 0 === e7 ? {} : e7;
          "user" === t4 && (c3.done(), s3.abort());
        }), s3.open(o3.toUpperCase(), r3, true), s3.withCredentials = this.opts.withCredentials, "" !== this.opts.responseType && (s3.responseType = this.opts.responseType), Object.keys(this.opts.headers).forEach((e7) => {
          s3.setRequestHeader(e7, this.opts.headers[e7]);
        }), s3.send(a3), e6.forEach((e7) => {
          this.uppy.emit("upload-started", e7);
        });
      });
    }
    uploadFiles(e6) {
      const t3 = e6.map((t4, n3) => {
        const r3 = parseInt(n3, 10) + 1, o3 = e6.length;
        return t4.error ? Promise.reject(new Error(t4.error)) : t4.isRemote ? this.uploadRemote(t4, r3, o3) : this.upload(t4, r3, o3);
      });
      return a2(t3);
    }
    onFileRemove(e6, t3) {
      this.uploaderEvents[e6].on("file-removed", (n3) => {
        e6 === n3.id && t3(n3.id);
      });
    }
    onRetry(e6, t3) {
      this.uploaderEvents[e6].on("upload-retry", (n3) => {
        e6 === n3 && t3();
      });
    }
    onRetryAll(e6, t3) {
      this.uploaderEvents[e6].on("retry-all", () => {
        this.uppy.getFile(e6) && t3();
      });
    }
    onCancelAll(e6, t3) {
      var n3 = this;
      this.uploaderEvents[e6].on("cancel-all", function() {
        n3.uppy.getFile(e6) && t3(...arguments);
      });
    }
    handleUpload(e6) {
      if (0 === e6.length) return this.uppy.log("[XHRUpload] No files to upload!"), Promise.resolve();
      0 !== this.opts.limit || this.opts[n2.internalRateLimitedQueue] || this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0", "warning"), this.uppy.log("[XHRUpload] Uploading...");
      const t3 = e6.map((e7) => this.uppy.getFile(e7));
      if (this.opts.bundle) {
        if (t3.some((e7) => e7.isRemote)) throw new Error("Can’t upload remote files when the `bundle: true` option is set");
        if ("function" == typeof this.opts.headers) throw new TypeError("`headers` may not be a function when the `bundle: true` option is set");
        return this.uploadBundle(t3);
      }
      return this.uploadFiles(t3).then(() => null);
    }
    install() {
      if (this.opts.bundle) {
        const { capabilities: e6 } = this.uppy.getState();
        this.uppy.setState({ capabilities: { ...e6, individualCancellation: false } });
      }
      this.uppy.addUploader(this.handleUpload);
    }
    uninstall() {
      if (this.opts.bundle) {
        const { capabilities: e6 } = this.uppy.getState();
        this.uppy.setState({ capabilities: { ...e6, individualCancellation: true } });
      }
      this.uppy.removeUploader(this.handleUpload);
    }
  }
  return h2.VERSION = "2.1.3", $A = h2;
})(), KA = b(qA);
function YA(e5) {
  var t2 = e5.server, n2 = void 0 === t2 ? "" : t2, r2 = e5.fieldName, o2 = void 0 === r2 ? "" : r2, i2 = e5.maxFileSize, a2 = void 0 === i2 ? 10485760 : i2, s2 = e5.maxNumberOfFiles, u2 = void 0 === s2 ? 100 : s2, l2 = e5.meta, c2 = void 0 === l2 ? {} : l2, d2 = e5.metaWithUrl, f2 = void 0 !== d2 && d2, p2 = e5.headers, h2 = void 0 === p2 ? {} : p2, g2 = e5.withCredentials, v2 = void 0 !== g2 && g2, m2 = e5.timeout, y2 = void 0 === m2 ? 1e4 : m2, b2 = e5.onBeforeUpload, E2 = void 0 === b2 ? function(e6) {
    return e6;
  } : b2, C2 = e5.onSuccess, D2 = void 0 === C2 ? function(e6, t3) {
  } : C2, w2 = e5.onError, S2 = void 0 === w2 ? function(e6, t3, n3) {
    console.error("".concat(e6.name, " upload error"), t3, n3);
  } : w2, A2 = e5.onProgress, x2 = void 0 === A2 ? function(e6) {
  } : A2;
  if (!n2) throw new Error("Cannot get upload server address\n没有配置上传地址");
  if (!o2) throw new Error("Cannot get fieldName\n没有配置 fieldName");
  var O2 = n2;
  f2 && (O2 = (function(e6, t3) {
    var n3 = Qg(e6.split("#"), 2), r3 = n3[0], o3 = n3[1], i3 = [];
    lv(t3, function(e7, t4) {
      i3.push("".concat(t4, "=").concat(e7));
    });
    var a3 = i3.join("&");
    return r3 = r3.indexOf("?") > 0 ? "".concat(r3, "&").concat(a3) : "".concat(r3, "?").concat(a3), o3 ? "".concat(r3, "#").concat(o3) : r3;
  })(O2, c2));
  var N2 = new fA(Yg({ onBeforeUpload: E2, restrictions: { maxFileSize: a2, maxNumberOfFiles: u2 }, meta: c2 }, e5.uppyConfig)).use(KA, Yg({ endpoint: O2, headers: h2, formData: true, fieldName: o2, bundle: true, withCredentials: v2, timeout: y2 }, e5.xhrConfig));
  return N2.on("complete", function(e6) {
    var t3 = e6.successful[0], n3 = t3.response, r3 = (null != n3 ? n3 : {}).body, o3 = void 0 === r3 ? {} : r3;
    try {
      D2(t3, o3);
    } catch (e7) {
      console.error("wangEditor upload file - onSuccess error", e7);
    }
  }), N2.on("progress", function(e6) {
    e6 < 1 || x2(e6);
  }), N2.on("upload-error", function(e6, t3, n3) {
    try {
      S2(e6, t3, n3);
    } catch (e7) {
      console.error("wangEditor upload file - onError error", e7);
    }
  }), N2.on("restriction-failed", function(e6, t3) {
    try {
      S2(e6, t3);
    } catch (e7) {
      console.error("wangEditor upload file - onError error", e7);
    }
  }), N2;
}
YE("en", { editor: { more: "More", justify: "Justify", indent: "Indent", image: "Image", video: "Video" } }), YE("zh-CN", { editor: { more: "更多", justify: "对齐", indent: "缩进", image: "图片", video: "视频" } });
var XA, ZA, JA, QA, ex, tx, nx, rx, ox, ix, ax, sx, ux, lx, cx, dx = {};
function fx() {
  if (ZA) return XA;
  ZA = 1;
  var e5 = S();
  return XA = Array.isArray || function(t2) {
    return "Array" === e5(t2);
  };
}
function px() {
  if (QA) return JA;
  QA = 1;
  var e5 = w(), t2 = C(), n2 = me(), r2 = Tr(), o2 = zt(), i2 = An(), a2 = function() {
  }, s2 = o2("Reflect", "construct"), u2 = /^\s*(?:class|function)\b/, l2 = e5(u2.exec), c2 = !u2.test(a2), d2 = function(e6) {
    if (!n2(e6)) return false;
    try {
      return s2(a2, [], e6), true;
    } catch (e7) {
      return false;
    }
  }, f2 = function(e6) {
    if (!n2(e6)) return false;
    switch (r2(e6)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return c2 || !!l2(u2, i2(e6));
    } catch (e7) {
      return true;
    }
  };
  return f2.sham = true, JA = !s2 || t2(function() {
    var e6;
    return d2(d2.call) || !d2(Object) || !d2(function() {
      e6 = true;
    }) || e6;
  }) ? f2 : d2;
}
function hx() {
  if (tx) return ex;
  tx = 1;
  var e5 = fx(), t2 = px(), n2 = ye(), r2 = ve()("species"), o2 = Array;
  return ex = function(i2) {
    var a2;
    return e5(i2) && (a2 = i2.constructor, (t2(a2) && (a2 === o2 || e5(a2.prototype)) || n2(a2) && null === (a2 = a2[r2])) && (a2 = void 0)), void 0 === a2 ? o2 : a2;
  }, ex;
}
function gx() {
  if (rx) return nx;
  rx = 1;
  var e5 = hx();
  return nx = function(t2, n2) {
    return new (e5(t2))(0 === n2 ? 0 : n2);
  };
}
function vx() {
  if (sx) return ax;
  sx = 1;
  var e5 = C();
  return ax = function(t2, n2) {
    var r2 = [][t2];
    return !!r2 && e5(function() {
      r2.call(null, n2 || function() {
        return 1;
      }, 1);
    });
  };
}
function mx() {
  if (lx) return ux;
  lx = 1;
  var e5 = (function() {
    if (ix) return ox;
    ix = 1;
    var e6 = Go(), t3 = w(), n2 = A(), r2 = ce(), o2 = Jt(), i2 = gx(), a2 = t3([].push), s2 = function(t4) {
      var s3 = 1 === t4, u2 = 2 === t4, l2 = 3 === t4, c2 = 4 === t4, d2 = 6 === t4, f2 = 7 === t4, p2 = 5 === t4 || d2;
      return function(h2, g2, v2, m2) {
        for (var y2, b2, E2 = r2(h2), C2 = n2(E2), D2 = o2(C2), w2 = e6(g2, v2), S2 = 0, A2 = m2 || i2, x2 = s3 ? A2(h2, D2) : u2 || f2 ? A2(h2, 0) : void 0; D2 > S2; S2++) if ((p2 || S2 in C2) && (b2 = w2(y2 = C2[S2], S2, E2), t4)) if (s3) x2[S2] = b2;
        else if (b2) switch (t4) {
          case 3:
            return true;
          case 5:
            return y2;
          case 6:
            return S2;
          case 2:
            a2(x2, y2);
        }
        else switch (t4) {
          case 4:
            return false;
          case 7:
            a2(x2, y2);
        }
        return d2 ? -1 : l2 || c2 ? c2 : x2;
      };
    };
    return ox = { forEach: s2(0), map: s2(1), filter: s2(2), some: s2(3), every: s2(4), find: s2(5), findIndex: s2(6), filterReject: s2(7) };
  })().forEach, t2 = vx()("forEach");
  return ux = t2 ? [].forEach : function(t3) {
    return e5(this, t3, arguments.length > 1 ? arguments[1] : void 0);
  }, ux;
}
!(function() {
  if (cx) return dx;
  cx = 1;
  var e5 = B(), t2 = ci(), n2 = di(), r2 = mx(), o2 = ln(), i2 = function(e6) {
    if (e6 && e6.forEach !== r2) try {
      o2(e6, "forEach", r2);
    } catch (t3) {
      e6.forEach = r2;
    }
  };
  for (var a2 in t2) t2[a2] && i2(e5[a2] && e5[a2].prototype);
  i2(n2);
})();
YE("en", { common: { ok: "OK", delete: "Delete", enter: "Enter" }, blockQuote: { title: "Quote" }, codeBlock: { title: "Code block" }, color: { color: "Font color", bgColor: "Back color", default: "Default color", clear: "Clear back color" }, divider: { title: "Divider" }, emotion: { title: "Emotion" }, fontSize: { title: "Font size", default: "Default" }, fontFamily: { title: "Font family", default: "Default" }, fullScreen: { title: "Full screen", cancelTitle: "Cancel full screen" }, header: { title: "Header", text: "Text" }, image: { netImage: "Net image", delete: "Delete image", edit: "Edit image", editSize: "Edit size", viewLink: "View link", src: "Image src", desc: "Description", link: "Image link", ok: "Ok", width: "Width", height: "Height" }, indent: { decrease: "Decrease", increase: "Increase" }, justify: { left: "Left", right: "Right", center: "Center", justify: "Justify" }, lineHeight: { title: "Line height", default: "Default" }, link: { insert: "Insert link", text: "Link text", url: "Link source", unLink: "Unlink", edit: "Edit link", view: "View link" }, textStyle: { bold: "Bold", clear: "Clear styles", code: "Inline code", italic: "Italic", sub: "Sub", sup: "Sup", through: "Through", underline: "Underline" }, undo: { undo: "undo", redo: "Redo" }, todo: { todo: "Todo" }, formatPainter: { title: "Format Painter" } }), YE("zh-CN", { common: { ok: "确定", delete: "删除", enter: "回车" }, blockQuote: { title: "引用" }, codeBlock: { title: "代码块" }, color: { color: "文字颜色", bgColor: "背景色", default: "默认颜色", clear: "清除背景色" }, divider: { title: "分割线" }, emotion: { title: "表情" }, fontSize: { title: "字号", default: "默认字号" }, fontFamily: { title: "字体", default: "默认字体" }, fullScreen: { title: "全屏", cancelTitle: "取消全屏" }, header: { title: "标题", text: "正文" }, image: { netImage: "网络图片", delete: "删除图片", edit: "编辑图片", editSize: "修改尺寸", viewLink: "查看链接", src: "图片地址", desc: "图片描述", link: "图片链接", ok: "确定", width: "宽度", height: "高度" }, indent: { decrease: "减少缩进", increase: "增加缩进" }, justify: { left: "左对齐", right: "右对齐", center: "居中对齐", justify: "两端对齐" }, lineHeight: { title: "行高", default: "默认行高" }, link: { insert: "插入链接", text: "链接文本", url: "链接地址", unLink: "取消链接", edit: "修改链接", view: "查看链接" }, textStyle: { bold: "粗体", clear: "清除格式", code: "行内代码", italic: "斜体", sub: "下标", sup: "上标", through: "删除线", underline: "下划线" }, undo: { undo: "撤销", redo: "重做" }, todo: { todo: "待办" }, formatPainter: { title: "格式刷" } });
var yx = { type: "blockquote", elemToHtml: function(e5, t2) {
  return "<blockquote>".concat(t2, "</blockquote>");
} }, bx = '<svg viewBox="0 0 1024 1024"><path d="M864 0a160 160 0 0 1 128 256l-64 64-224-224 64-64c26.752-20.096 59.968-32 96-32zM64 736l-64 288 288-64 592-592-224-224L64 736z m651.584-372.416l-448 448-55.168-55.168 448-448 55.168 55.168z"></path></svg>', Ex = '<svg viewBox="0 0 1024 1024"><path d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z" p-id="10909"></path><path d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z" p-id="10910"></path><path d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z"></path></svg>', Cx = '<svg viewBox="0 0 1024 1024"><path d="M133.705143 335.433143V133.851429h201.581714a29.622857 29.622857 0 0 0 29.622857-29.549715V68.754286a29.622857 29.622857 0 0 0-29.622857-29.622857H61.732571A22.893714 22.893714 0 0 0 38.765714 62.025143V335.725714c0 16.310857 13.238857 29.622857 29.622857 29.622857h35.547429a29.842286 29.842286 0 0 0 29.696-29.842285zM690.980571 133.851429h201.581715v201.654857c0 16.310857 13.238857 29.549714 29.622857 29.549714h35.547428a29.622857 29.622857 0 0 0 29.549715-29.549714V61.952a22.893714 22.893714 0 0 0-22.820572-22.893714h-273.554285a29.622857 29.622857 0 0 0-29.549715 29.622857v35.547428c0 16.310857 13.238857 29.696 29.622857 29.696zM335.286857 892.781714H133.705143V691.2a29.622857 29.622857 0 0 0-29.622857-29.622857H68.534857a29.622857 29.622857 0 0 0-29.549714 29.622857v273.554286c0 12.653714 10.24 22.893714 22.820571 22.893714h273.554286a29.622857 29.622857 0 0 0 29.696-29.622857v-35.547429a29.769143 29.769143 0 0 0-29.769143-29.696z m557.348572-201.581714v201.581714H690.907429a29.622857 29.622857 0 0 0-29.622858 29.622857v35.547429c0 16.310857 13.238857 29.622857 29.622858 29.622857h273.554285c12.580571 0 22.893714-10.313143 22.893715-22.893714V691.2a29.622857 29.622857 0 0 0-29.622858-29.622857h-35.547428a29.622857 29.622857 0 0 0-29.696 29.622857z"></path></svg>', Dx = (function() {
  function e5() {
    this.title = QE("blockQuote.title"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M894.6 907.1H605.4c-32.6 0-59-26.4-59-59V608.2l-4-14.9c0-315.9 125.5-485.1 376.5-507.5v59.8C752.7 180.4 711.3 315.8 711.3 442.4v41.2l31.5 12.3h151.8c32.6 0 59 26.4 59 59v293.2c0 32.5-26.4 59-59 59z m-472 0H133.4c-32.6 0-59-26.4-59-59V608.2l-4-14.9c0-315.9 125.5-485.1 376.5-507.5v59.8C280.7 180.4 239.3 315.8 239.3 442.4v41.2l31.5 12.3h151.8c32.6 0 59 26.4 59 59v293.2c0 32.5-26.4 59-59 59z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return !!_y.getSelectedNodeByType(e6, "blockquote");
  }, e5.prototype.isDisabled = function(e6) {
    if (null == e6.selection) return true;
    var t2 = Qg(Kh.nodes(e6, { match: function(e7) {
      var t3 = _y.getNodeType(e7);
      return "paragraph" === t3 || "blockquote" === t3;
    }, universal: true, mode: "highest" }), 1);
    return !t2[0];
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = this.isActive(e6) ? "paragraph" : "blockquote";
      jg.setNodes(e6, { type: n2 }, { mode: "highest" });
    }
  }, e5;
})(), wx = { key: "blockquote", factory: function() {
  return new Dx();
} };
function Sx(e5) {
  return 0 === am("<div>".concat(e5, "</div>")).children().filter(function(e6) {
    return "BR" !== e6.tagName;
  }).length;
}
function Ax(e5) {
  return 0 === e5.length ? "" : e5[0].outerHTML;
}
function xx(e5) {
  return e5.length ? e5[0].tagName.toLowerCase() : "";
}
function Ox(e5, t2) {
  for (var n2 = "", r2 = (e5.attr("style") || "").split(";"), o2 = r2.length, i2 = 0; i2 < o2; i2 += 1) {
    var a2 = r2[i2];
    if (a2) {
      var s2 = a2.split(":");
      s2[0].trim() === t2 && (n2 = s2[1].trim());
    }
  }
  return n2;
}
Dm && (am.fn.css = Dm), Nm && (am.fn.append = Nm), Bm && (am.fn.prepend = Bm), sm && (am.fn.addClass = sm), um && (am.fn.removeClass = um), lm && (am.fn.hasClass = lm), gm && (am.fn.on = gm), vm && (am.fn.off = vm), jm && (am.fn.focus = jm), cm && (am.fn.attr = cm), dm && (am.fn.removeAttr = dm), Em && (am.fn.hide = Em), Cm && (am.fn.show = Cm), km && (am.fn.parents = km), pm && (am.fn.dataset = pm), hm && (am.fn.val = hm), xm && (am.fn.text = xm), Am && (am.fn.html = Am), Im && (am.fn.children = Im), Pm && (am.fn.remove = Pm), Fm && (am.fn.find = Fm), mm && (am.fn.width = mm), ym && (am.fn.height = ym), Sm && (am.fn.filter = Sm), _m && (am.fn.empty = _m);
var Nx = { selector: "blockquote:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  return 0 === (t2 = t2.filter(function(e6) {
    return !!Cg.isText(e6) || !!n2.isInline(e6);
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]), { type: "blockquote", children: t2 };
} };
function Bx(e5) {
  e5.deleteBackward("character");
  jg.insertNodes(e5, { type: "paragraph", children: [{ text: "" }] }, { mode: "highest" });
}
var Tx = { type: "blockquote", renderElem: function(e5, t2, n2) {
  return TD("blockquote", null, t2);
} }, kx = { renderElems: [Tx], elemsToHtml: [yx], parseElemsHtml: [Nx], menus: [wx], editorPlugin: function(e5) {
  var t2 = e5.insertBreak, n2 = e5.insertText, r2 = e5;
  return r2.insertBreak = function() {
    var o2 = r2.selection;
    if (null == o2) return t2();
    var i2 = Qg(Kh.nodes(e5, { match: function(e6) {
      return _y.checkNodeType(e6, "blockquote");
    }, universal: true }), 1), a2 = i2[0];
    if (!a2) return t2();
    var s2 = a2[0];
    if (_y.getParentNode(e5, s2)) {
      var u2 = _y.findPath(e5, s2), l2 = Kh.end(e5, u2);
      if (ug.equals(l2, o2.focus)) {
        var c2 = eg.string(s2);
        if (c2 && "\n" === c2.slice(-1)) return void Bx(r2);
      }
      n2("\n");
    } else Bx(r2);
  }, r2;
} };
var Fx = { type: "code", elemToHtml: function(e5, t2) {
  return "<code>".concat(t2, "</code>");
} };
var Ix = { type: "pre", elemToHtml: function(e5, t2) {
  return "<pre>".concat(t2, "</pre>");
} }, Px = (function() {
  function e5() {
    this.title = QE("codeBlock.title"), this.iconSvg = '<svg viewBox="0 0 1280 1024"><path d="M832 736l96 96 320-320L928 192l-96 96 224 224zM448 288l-96-96L32 512l320 320 96-96-224-224zM701.312 150.528l69.472 18.944-192 704.032-69.472-18.944 192-704.032z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getSelectCodeElem = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "code");
    if (null == t2) return null;
    var n2 = _y.getParentNode(e6, t2);
    return null == n2 || "pre" !== _y.getNodeType(n2) ? null : t2;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.getSelectCodeElem(e6);
    if (null == t2) {
      var n2 = e6.getMenuConfig("codeSelectLang").codeLangs, r2 = (void 0 === n2 ? [] : n2).find(function(e7) {
        return e7.selected;
      });
      return (null == r2 ? void 0 : r2.value) || "";
    }
    return t2.language || "";
  }, e5.prototype.isActive = function(e6) {
    return !!this.getSelectCodeElem(e6);
  }, e5.prototype.isDisabled = function(e6) {
    if (null == e6.selection) return true;
    var t2 = _y.getSelectedElems(e6);
    return !!t2.some(function(t3) {
      return e6.isVoid(t3);
    }) || !t2.some(function(e7) {
      var t3 = _y.getNodeType(e7);
      return "pre" === t3 || "paragraph" === t3;
    });
  }, e5.prototype.exec = function(e6, t2) {
    this.isActive(e6) ? this.changeToPlainText(e6) : this.changeToCodeBlock(e6, t2.toString());
  }, e5.prototype.changeToPlainText = function(e6) {
    var t2 = this.getSelectCodeElem(e6);
    if (null != t2) {
      var n2 = eg.string(t2);
      jg.removeNodes(e6, { mode: "highest" });
      var r2 = n2.split("\n").map(function(e7) {
        return { type: "paragraph", children: [{ text: e7 }] };
      });
      jg.insertNodes(e6, r2, { mode: "highest" });
    }
  }, e5.prototype.changeToCodeBlock = function(e6, t2) {
    var n2, r2, o2 = [], i2 = Kh.nodes(e6, { match: function(t3) {
      return e6.children.includes(t3);
    }, universal: true });
    try {
      for (var a2 = Jg(i2), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        var u2 = Qg(s2.value, 1)[0];
        u2 && o2.push(eg.string(u2));
      }
    } catch (e7) {
      n2 = { error: e7 };
    } finally {
      try {
        s2 && !s2.done && (r2 = a2.return) && r2.call(a2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    jg.removeNodes(e6, { mode: "highest" });
    var l2 = { type: "pre", children: [{ type: "code", language: t2, children: [{ text: o2.join("\n") }] }] };
    jg.insertNodes(e6, l2, { mode: "highest" });
  }, e5;
})();
var _x = { selector: "pre:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  return 0 === (t2 = t2.filter(function(e6) {
    return "code" === _y.getNodeType(e6);
  })).length && (t2 = [{ type: "code", language: "", children: [{ text: r2[0].textContent || "" }] }]), { type: "pre", children: t2.filter(function(e6) {
    return "code" === _y.getNodeType(e6);
  }) };
} };
var Rx = { type: "pre", renderElem: function(e5, t2, n2) {
  return TD("pre", null, t2);
} }, Lx = { type: "code", renderElem: function(e5, t2, n2) {
  return TD("code", null, t2);
} }, Mx = { menus: [{ key: "codeBlock", factory: function() {
  return new Px();
} }], editorPlugin: function(e5) {
  var t2 = e5.insertBreak, n2 = e5.normalizeNode, r2 = e5.insertData, o2 = e5.handleTab, i2 = e5;
  return i2.insertBreak = function() {
    var e6 = _y.getSelectedNodeByType(i2, "code");
    if (null != e6) {
      var n3 = (function(e7, t3) {
        var n4 = t3.selection;
        if (null == n4) return "";
        var r4 = eg.string(e7), o4 = n4.anchor.offset, i3 = r4.slice(0, o4).split("\n"), a2 = i3.length;
        return 0 === a2 ? "" : i3[a2 - 1];
      })(e6, i2);
      if (n3) {
        var r3 = n3.match(/^\s+/);
        if (null != r3 && null != r3[0]) {
          var o3 = r3[0];
          return void i2.insertText("\n".concat(o3));
        }
      }
      i2.insertText("\n");
    } else t2();
  }, e5.handleTab = function() {
    var t3 = e5.selection;
    if (t3) {
      var n3 = _y.getSelectedNodeByType(e5, "code");
      if (n3 && !fg.isCollapsed(t3)) {
        var r3 = Qg([t3.anchor, t3.focus].sort(function(e6, t4) {
          return e6.offset - t4.offset;
        }), 2), i3 = r3[0], a2 = r3[1], s2 = n3.children[0].text, u2 = s2.split("\n"), l2 = s2.slice(0, i3.offset).split("\n").length - 1, c2 = s2.slice(0, a2.offset).split("\n").length - 1, d2 = u2.map(function(e6, t4) {
          return t4 >= l2 && t4 <= c2 ? "  ".concat(e6) : e6;
        }), f2 = d2.join("\n"), p2 = { anchor: { path: i3.path, offset: i3.offset + 2 }, focus: { path: a2.path, offset: a2.offset + 2 } };
        jg.insertText(e5, f2, { at: { anchor: { path: i3.path, offset: 0 }, focus: { path: a2.path, offset: s2.length } } }), jg.select(e5, p2);
      } else o2();
    }
  }, i2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), r3 = t3[0], o3 = t3[1], a2 = _y.getNodeType(r3);
    ("code" === a2 && o3.length <= 1 && jg.setNodes(i2, { type: "paragraph" }, { at: o3 }), "pre" === a2) && (_y.isLastNode(i2, r3) && jg.insertNodes(i2, _y.genEmptyParagraph(), { at: [o3[0] + 1] }), "code" !== _y.getNodeType(r3.children[0]) && (jg.unwrapNodes(i2), jg.setNodes(i2, { type: "paragraph" }, { mode: "highest" })));
    return n2([r3, o3]);
  }, i2.insertData = function(e6) {
    if (null != _y.getSelectedNodeByType(i2, "code")) {
      var t3 = e6.getData("text/plain");
      Kh.insertText(i2, t3);
    } else r2(e6);
  }, i2;
}, renderElems: [Rx, Lx], elemsToHtml: [Fx, Ix], preParseHtml: [{ selector: "pre>code", preParseHtml: function(e5) {
  var t2 = am(e5);
  if ("code" !== xx(t2)) return e5;
  var n2 = t2.find("xmp");
  if (0 === n2.length) return e5;
  var r2 = n2.text();
  return n2.remove(), t2.text(r2), t2[0];
} }], parseElemsHtml: [{ selector: "pre:not([data-w-e-type])>code", parseElemHtml: function(e5, t2, n2) {
  return { type: "code", language: "", children: [{ text: am(e5)[0].textContent || "" }] };
} }, _x] }, jx = (function() {
  function e5() {
    this.tag = "button", this.showDropPanel = true, this.$content = null;
  }
  return e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.mark, n2 = Kh.marks(e6);
    return n2 && n2[t2] ? n2[t2] : "";
  }, e5.prototype.isActive = function(e6) {
    return !!this.getValue(e6);
  }, e5.prototype.isDisabled = function(e6) {
    if (null == e6.selection) return true;
    var t2 = Qg(Kh.nodes(e6, { match: function(t3) {
      return "pre" === _y.getNodeType(t3) || !!Kh.isVoid(e6, t3);
    }, universal: true }), 1);
    return !!t2[0];
  }, e5.prototype.getPanelContentElem = function(e6) {
    var t2 = this.mark;
    if (null == this.$content) {
      var n2 = am('<ul class="w-e-panel-content-color"></ul>');
      n2.on("click", "li", function(n3) {
        var r3 = n3.target;
        if (null != r3 && (n3.preventDefault(), null != e6.selection)) {
          var o3 = am(r3).attr("data-value");
          "0" === o3 ? Kh.removeMark(e6, t2) : Kh.addMark(e6, t2, o3);
        }
      }), this.$content = n2;
    }
    var r2 = this.$content;
    if (null == r2) return document.createElement("ul");
    r2.empty();
    var o2 = this.getValue(e6), i2 = e6.getMenuConfig(t2).colors;
    (void 0 === i2 ? [] : i2).forEach(function(e7) {
      var t3 = am('<div class="color-block" data-value="'.concat(e7, '"></div>'));
      t3.css("background-color", e7);
      var n3 = am('<li data-value="'.concat(e7, '"></li>'));
      o2 === e7 && n3.addClass("active"), n3.append(t3), r2.append(n3);
    });
    var a2 = "";
    "color" === t2 && (a2 = QE("color.default")), "bgColor" === t2 && (a2 = QE("color.clear"));
    var s2 = am('\n      <li data-value="0" class="clear">\n        '.concat('<svg viewBox="0 0 1024 1024"><path d="M236.8 128L896 787.2V128H236.8z m614.4 704L192 172.8V832h659.2zM192 64h704c38.4 0 64 25.6 64 64v704c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V128c0-38.4 25.6-64 64-64z"></path></svg>', "\n        ").concat(a2, "\n      </li>\n    "));
    return r2.prepend(s2), r2[0];
  }, e5;
})(), Hx = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("color.bgColor"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M510.030769 315.076923l84.676923 196.923077h-177.230769l76.8-196.923077h15.753846zM945.230769 157.538462v708.923076c0 43.323077-35.446154 78.769231-78.769231 78.769231H157.538462c-43.323077 0-78.769231-35.446154-78.769231-78.769231V157.538462c0-43.323077 35.446154-78.769231 78.769231-78.769231h708.923076c43.323077 0 78.769231 35.446154 78.769231 78.769231z m-108.307692 643.938461L600.615385 216.615385c-5.907692-11.815385-15.753846-19.692308-29.538462-19.692308h-139.815385c-11.815385 0-23.630769 7.876923-27.56923 19.692308l-216.615385 584.861538c-3.938462 11.815385 3.938462 25.6 17.723077 25.6h80.738462c11.815385 0 23.630769-9.846154 27.56923-21.661538l63.015385-175.261539h263.876923l68.923077 175.261539c3.938462 11.815385 15.753846 21.661538 27.569231 21.661538h80.738461c13.784615 0 23.630769-13.784615 19.692308-25.6z"></path></svg>', t3.mark = "bgColor", t3;
  }
  return Kg(t2, e5), t2;
})(jx), zx = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("color.color"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M64 864h896v96H64zM360.58 576h302.85l81.53 224h102.16L579.24 64H444.77L176.89 800h102.16l81.53-224zM512 159.96L628.49 480H395.52L512 159.96z"></path></svg>', t3.mark = "color", t3;
  }
  return Kg(t2, e5), t2;
})(jx), $x = ["rgb(0, 0, 0)", "rgb(38, 38, 38)", "rgb(89, 89, 89)", "rgb(140, 140, 140)", "rgb(191, 191, 191)", "rgb(217, 217, 217)", "rgb(233, 233, 233)", "rgb(245, 245, 245)", "rgb(250, 250, 250)", "rgb(255, 255, 255)", "rgb(225, 60, 57)", "rgb(231, 95, 51)", "rgb(235, 144, 58)", "rgb(245, 219, 77)", "rgb(114, 192, 64)", "rgb(89, 191, 192)", "rgb(66, 144, 247)", "rgb(54, 88, 226)", "rgb(106, 57, 201)", "rgb(216, 68, 147)", "rgb(251, 233, 230)", "rgb(252, 237, 225)", "rgb(252, 239, 212)", "rgb(252, 251, 207)", "rgb(231, 246, 213)", "rgb(218, 244, 240)", "rgb(217, 237, 250)", "rgb(224, 232, 250)", "rgb(237, 225, 248)", "rgb(246, 226, 234)", "rgb(255, 163, 158)", "rgb(255, 187, 150)", "rgb(255, 213, 145)", "rgb(255, 251, 143)", "rgb(183, 235, 143)", "rgb(135, 232, 222)", "rgb(145, 213, 255)", "rgb(173, 198, 255)", "rgb(211, 173, 247)", "rgb(255, 173, 210)", "rgb(255, 77, 79)", "rgb(255, 122, 69)", "rgb(255, 169, 64)", "rgb(255, 236, 61)", "rgb(115, 209, 61)", "rgb(54, 207, 201)", "rgb(64, 169, 255)", "rgb(89, 126, 247)", "rgb(146, 84, 222)", "rgb(247, 89, 171)", "rgb(207, 19, 34)", "rgb(212, 56, 13)", "rgb(212, 107, 8)", "rgb(212, 177, 6)", "rgb(56, 158, 13)", "rgb(8, 151, 156)", "rgb(9, 109, 217)", "rgb(29, 57, 196)", "rgb(83, 29, 171)", "rgb(196, 29, 127)", "rgb(130, 0, 20)", "rgb(135, 20, 0)", "rgb(135, 56, 0)", "rgb(97, 71, 0)", "rgb(19, 82, 0)", "rgb(0, 71, 79)", "rgb(0, 58, 140)", "rgb(6, 17, 120)", "rgb(34, 7, 94)", "rgb(120, 6, 80)"];
var Ux = { selector: "font", preParseHtml: function(e5) {
  var t2 = am(e5);
  if ("font" !== xx(t2)) return e5;
  var n2 = t2.attr("color") || "";
  return n2 && (t2.removeAttr("color"), t2.css("color", n2)), t2[0];
} };
function Vx(e5, t2) {
  null == e5.data && (e5.data = {});
  var n2 = e5.data;
  null == n2.style && (n2.style = {}), Object.assign(n2.style, t2);
}
var Wx = { renderStyle: function(e5, t2) {
  var n2 = e5, r2 = n2.color, o2 = n2.bgColor, i2 = t2;
  return r2 && Vx(i2, { color: r2 }), o2 && Vx(i2, { backgroundColor: o2 }), i2;
}, styleToHtml: function(e5, t2) {
  if (!Cg.isText(e5)) return t2;
  var n2, r2 = e5, o2 = r2.color, i2 = r2.bgColor;
  return o2 || i2 ? ((Sx(t2) || "span" !== xx(n2 = am(t2))) && (n2 = am("<span>".concat(t2, "</span>"))), o2 && n2.css("color", o2), i2 && n2.css("background-color", i2), Ax(n2)) : t2;
}, preParseHtml: [Ux], parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!Cg.isText(t2)) return t2;
  var o2 = t2, i2 = Ox(r2, "color");
  i2 && (o2.color = i2);
  var a2 = Ox(r2, "background-color");
  return a2 || (a2 = Ox(r2, "background")), a2 && (o2.bgColor = a2), o2;
}, menus: [{ key: "color", factory: function() {
  return new zx();
}, config: { colors: $x } }, { key: "bgColor", factory: function() {
  return new Hx();
}, config: { colors: $x } }] }, Gx = (function() {
  function e5() {
    this.title = QE("common.enter"), this.iconSvg = '<svg viewBox="0 0 1255 1024"><path d="M1095.111111 731.477333h-625.777778V1024L0 658.318222 469.333333 292.408889v292.636444h625.777778V0h156.444445v731.477333z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || !!fg.isExpanded(t2);
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = e6.selection;
    if (null != n2) {
      var r2 = [n2.anchor.path[0]];
      jg.insertNodes(e6, { type: "paragraph", children: [{ text: "" }] }, { at: r2 }), e6.select(Kh.start(e6, r2));
    }
  }, e5;
})(), qx = { menus: [{ key: "enter", factory: function() {
  return new Gx();
} }] };
var Kx = { type: "divider", elemToHtml: function(e5, t2) {
  return "<hr/>";
} }, Yx = (function() {
  function e5() {
    this.title = QE("divider.title"), this.iconSvg = '<svg viewBox="0 0 1092 1024"><path d="M0 51.2m51.2 0l989.866667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-989.866667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"></path><path d="M0 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"></path><path d="M819.2 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"></path><path d="M409.6 460.8m51.2 0l170.666667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-170.666667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"></path><path d="M0 870.4m51.2 0l989.866667 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-989.866667 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !!_y.getSelectedElems(e6).some(function(t2) {
      if (e6.isVoid(t2)) return true;
      var n2 = _y.getNodeType(t2);
      return "table" === n2 || "pre" === n2;
    });
  }, e5.prototype.exec = function(e6, t2) {
    _y.isSelectedEmptyParagraph(e6) && jg.removeNodes(e6, { mode: "highest" }), jg.insertNodes(e6, { type: "divider", children: [{ text: "" }] }, { mode: "highest" });
  }, e5;
})();
var Xx = { renderElems: [{ type: "divider", renderElem: function(e5, t2, n2) {
  return cD("div", { props: { contentEditable: false, className: "w-e-textarea-divider" }, dataset: { selected: _y.isNodeSelected(n2, e5) ? "true" : "" }, style: {}, on: { mousedown: function(e6) {
    return e6.preventDefault();
  } } }, [cD("hr")]);
} }], elemsToHtml: [Kx], parseElemsHtml: [{ selector: "hr:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  return { type: "divider", children: [{ text: "" }] };
} }], menus: [{ key: "divider", factory: function() {
  return new Yx();
} }], editorPlugin: function(e5) {
  var t2 = e5.isVoid, n2 = e5.normalizeNode, r2 = e5;
  return r2.isVoid = function(e6) {
    return "divider" === e6.type || t2(e6);
  }, r2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), o2 = t3[0], i2 = t3[1];
    if ("divider" !== _y.getNodeType(o2)) return n2([o2, i2]);
    _y.isLastNode(r2, o2) && jg.insertNodes(r2, _y.genEmptyParagraph(), { at: [i2[0] + 1] });
  }, r2;
} };
var Zx = (function() {
  function e5() {
    this.title = QE("emotion.title"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-102.4c226.742857 0 409.6-182.857143 409.6-409.6S738.742857 102.4 512 102.4 102.4 285.257143 102.4 512s182.857143 409.6 409.6 409.6z m-204.8-358.4h409.6c0 113.371429-91.428571 204.8-204.8 204.8s-204.8-91.428571-204.8-204.8z m0-102.4c-43.885714 0-76.8-32.914286-76.8-76.8s32.914286-76.8 76.8-76.8 76.8 32.914286 76.8 76.8-32.914286 76.8-76.8 76.8z m409.6 0c-43.885714 0-76.8-32.914286-76.8-76.8s32.914286-76.8 76.8-76.8c43.885714 0 76.8 32.914286 76.8 76.8s-32.914286 76.8-76.8 76.8z"></path></svg>', this.tag = "button", this.showDropPanel = true, this.$content = null;
  }
  return e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    if (null == e6.selection) return true;
    var t2 = Qg(Kh.nodes(e6, { match: function(t3) {
      return "pre" === _y.getNodeType(t3) || !!Kh.isVoid(e6, t3);
    }, universal: true }), 1);
    return !!t2[0];
  }, e5.prototype.getPanelContentElem = function(e6) {
    if (null == this.$content) {
      var t2 = am('<ul class="w-e-panel-content-emotion"></ul>');
      t2.on("click", "li", function(t3) {
        var n3 = t3.target;
        if (null != n3) {
          t3.preventDefault();
          var r3 = am(n3).text();
          e6.insertText(r3);
        }
      }), this.$content = t2;
    }
    var n2 = this.$content;
    if (null == n2) return document.createElement("ul");
    n2.empty();
    var r2 = e6.getMenuConfig("emotion").emotions;
    return (void 0 === r2 ? [] : r2).forEach(function(e7) {
      var t3 = am("<li>".concat(e7, "</li>"));
      n2.append(t3);
    }), n2[0];
  }, e5;
})(), Jx = { menus: [{ key: "emotion", factory: function() {
  return new Zx();
}, config: { emotions: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(" ") } }] };
var Qx = (function() {
  function e5() {
    this.tag = "select", this.width = 80;
  }
  return e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.mark, n2 = Kh.marks(e6);
    return n2 && n2[t2] ? n2[t2] : "";
  }, e5.prototype.isDisabled = function(e6) {
    if (null == e6.selection) return true;
    var t2 = Qg(Kh.nodes(e6, { match: function(t3) {
      return "pre" === _y.getNodeType(t3) || !!Kh.isVoid(e6, t3);
    }, universal: true }), 1);
    return !!t2[0];
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.mark;
    t2 ? e6.addMark(n2, t2) : e6.removeMark(n2);
  }, e5;
})(), eO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("fontFamily.title"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M956.788364 152.110545h-24.110546l23.924364 9.029819 0.186182 121.018181h-65.070546l-86.574545-130.048H566.551273v650.14691l130.048 64.977454v65.163636h-390.050909v-65.163636l129.954909-64.977454V152.110545H198.283636L111.429818 282.065455H46.545455V69.259636C46.545455 33.792 82.664727 22.062545 98.955636 22.062545h812.683637c23.738182 0 45.056 15.173818 45.056 41.053091V169.425455v-17.221819z"></path></svg>', t3.mark = "fontFamily", t3.selectPanelWidth = 150, t3;
  }
  return Kg(t2, e5), t2.prototype.getOptions = function(e6) {
    var t3 = [], n2 = e6.getMenuConfig(this.mark).fontFamilyList, r2 = void 0 === n2 ? [] : n2;
    t3.push({ text: QE("fontFamily.default"), value: "" }), r2.forEach(function(e7) {
      if ("string" == typeof e7) t3.push({ text: e7, value: e7, styleForRenderMenuList: { "font-family": e7 } });
      else if ("object" == typeof e7) {
        var n3 = e7.name, r3 = e7.value;
        t3.push({ text: n3, value: r3, styleForRenderMenuList: { "font-family": r3 } });
      }
    });
    var o2 = this.getValue(e6), i2 = false;
    return t3.forEach(function(e7) {
      e7.value === o2 ? (i2 = true, e7.selected = true) : e7.selected = void 0;
    }), i2 || "string" != typeof o2 || t3.push({ text: o2, value: o2, selected: true }), t3;
  }, t2;
})(Qx), tO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("fontSize.title"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M64 512h384v128h-128V1024h-128V640h-128z m896-256H708.2496v768h-136.4992V256H320V128h640z"></path></svg>', t3.mark = "fontSize", t3;
  }
  return Kg(t2, e5), t2.prototype.getOptions = function(e6) {
    var t3 = [], n2 = e6.getMenuConfig(this.mark).fontSizeList, r2 = void 0 === n2 ? [] : n2;
    t3.push({ text: QE("fontSize.default"), value: "" }), r2.forEach(function(e7) {
      if ("string" == typeof e7) t3.push({ text: e7, value: e7 });
      else if ("object" == typeof e7) {
        var n3 = e7.name, r3 = e7.value;
        t3.push({ text: n3, value: r3 });
      }
    });
    var o2 = this.getValue(e6), i2 = false;
    return t3.forEach(function(e7) {
      e7.value === o2 ? (i2 = true, e7.selected = true) : e7.selected = void 0;
    }), i2 || "string" != typeof o2 || t3.push({ text: o2, value: o2, selected: true }), t3;
  }, t2;
})(Qx);
var nO = { 1: "12px", 2: "14px", 3: "16px", 4: "19px", 5: "24px", 6: "32px", 7: "48px" };
var rO = { renderStyle: function(e5, t2) {
  var n2 = e5, r2 = n2.fontSize, o2 = n2.fontFamily, i2 = t2;
  return r2 && Vx(i2, { fontSize: r2 }), o2 && Vx(i2, { fontFamily: o2 }), i2;
}, styleToHtml: function(e5, t2) {
  if (!Cg.isText(e5)) return t2;
  var n2, r2 = e5, o2 = r2.fontSize, i2 = r2.fontFamily;
  return o2 || i2 ? ((Sx(t2) || "span" !== xx(n2 = am(t2))) && (n2 = am("<span>".concat(t2, "</span>"))), o2 && n2.css("font-size", o2), i2 && n2.css("font-family", i2), Ax(n2)) : t2;
}, preParseHtml: [{ selector: "font", preParseHtml: function(e5) {
  var t2 = am(e5);
  if ("font" !== xx(t2)) return e5;
  var n2 = t2.attr("size") || "";
  n2 && (t2.removeAttr("size"), t2.css("font-size", nO[n2]));
  var r2 = t2.attr("face") || "";
  return r2 && (t2.removeAttr("face"), t2.css("font-family", r2)), t2[0];
} }], parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!Cg.isText(t2)) return t2;
  var o2 = t2, i2 = Ox(r2, "font-size");
  i2 && (o2.fontSize = i2);
  var a2 = Ox(r2, "font-family").replace(/"/g, "");
  return a2 && (o2.fontFamily = a2), o2;
}, menus: [{ key: "fontSize", factory: function() {
  return new tO();
}, config: { fontSizeList: ["12px", { name: "13px", value: "13px" }, "14px", "15px", "16px", "19px", { name: "22px", value: "22px" }, "24px", "29px", "32px", "40px", "48px"] } }, { key: "fontFamily", factory: function() {
  return new eO();
}, config: { fontFamilyList: ["黑体", { name: "仿宋", value: "仿宋" }, "楷体", "标楷体", "华文仿宋", "华文楷体", { name: "宋体", value: "宋体" }, "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"] } }] };
var oO = (function() {
  function e5() {
    this.title = QE("formatPainter.title"), this.iconSvg = '<svg viewBox="0 0 24 24"><path d="M8 19.997v-5h2v5h9v-7H5v7zm-4-9h16v-3h-6v-4h-4v4H4zm-1 10v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"/></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(t2) {
    return e5.attrs.isSelect;
  }, e5.prototype.isDisabled = function(e6) {
    return false;
  }, e5.prototype.setFormatHtml = function(t2) {
    var n2, r2;
    if (t2.getSelectionText().length) {
      if (e5.attrs.formatStyle) {
        !(function(e6) {
          var t3 = Kh.marks(e6);
          t3 && Object.keys(t3).forEach(function(t4) {
            e6.removeMark(t4);
          });
        })(t2);
        try {
          for (var o2 = Jg(Object.entries(e5.attrs.formatStyle)), i2 = o2.next(); !i2.done; i2 = o2.next()) {
            var a2 = Qg(i2.value, 2), s2 = a2[0], u2 = a2[1];
            t2.addMark(s2, u2);
          }
        } catch (e6) {
          n2 = { error: e6 };
        } finally {
          try {
            i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
          } finally {
            if (n2) throw n2.error;
          }
        }
      }
      e5.attrs.formatStyle = null, e5.attrs.isSelect = false;
    }
  }, e5.prototype.exec = function(t2) {
    e5.attrs.isSelect ? (e5.attrs.isSelect = false, e5.attrs.formatStyle = null) : t2.getSelectionText().length && (e5.attrs.formatStyle = Kh.marks(t2), e5.attrs.isSelect = true);
    t2.blur(), t2.focus();
  }, e5.attrs = { isSelect: false, formatStyle: null }, e5;
})();
var iO = { menus: [{ key: "formatPainter", factory: function() {
  return new oO();
} }], editorPlugin: function(e5) {
  var t2 = new oO(), n2 = e5.onChange, r2 = e5, o2 = function() {
    t2.setFormatHtml(r2), document.removeEventListener("mouseup", o2);
  };
  return r2.onChange = function() {
    n2(), oO.attrs.isSelect && (document.removeEventListener("mouseup", o2), document.addEventListener("mouseup", o2));
  }, r2;
} }, aO = (function() {
  function e5() {
    this.title = QE("fullScreen.title"), this.iconSvg = Cx, this.tag = "button", this.alwaysEnable = true;
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return e6.isFullScreen;
  }, e5.prototype.isDisabled = function(e6) {
    return false;
  }, e5.prototype.getIcon = function(e6) {
    return e6.isFullScreen ? Cx : '<svg t="1723361745825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8705" width="200" height="200"><path d="M703.926857 362.642286a42.642286 42.642286 0 0 1-42.642286-42.642286V128a42.642286 42.642286 0 1 1 85.357715 0v149.357714h149.357714c21.211429 0 38.765714 15.433143 42.057143 35.693715l0.585143 6.948571a42.642286 42.642286 0 0 1-42.642286 42.642286H703.926857zM703.926857 938.642286a42.642286 42.642286 0 0 1-42.642286-42.642286V704c0-23.552 19.090286-42.642286 42.642286-42.642286h192.073143a42.642286 42.642286 0 1 1 0 85.284572l-149.357714 0.073143v149.284571c0 21.211429-15.506286 38.765714-35.84 42.130286l-6.875429 0.512zM319.853714 938.642286a42.642286 42.642286 0 0 1-42.642285-42.642286v-149.284571H127.853714a42.642286 42.642286 0 0 1-42.130285-35.84l-0.585143-6.875429c0-23.552 19.163429-42.642286 42.715428-42.642286h192c23.552 0 42.715429 19.017143 42.715429 42.642286v192a42.642286 42.642286 0 0 1-42.715429 42.642286zM127.853714 362.642286a42.642286 42.642286 0 1 1 0-85.284572H277.211429V128c0-21.211429 15.433143-38.765714 35.766857-42.130286l6.875428-0.512c23.552 0 42.715429 19.017143 42.715429 42.642286v192a42.642286 42.642286 0 0 1-42.715429 42.642286H127.853714z" fill="#333333" p-id="8706"></path></svg>';
  }, e5.prototype.getTitle = function(e6) {
    return e6.isFullScreen ? QE("fullScreen.title") : QE("fullScreen.cancelTitle");
  }, e5.prototype.exec = function(e6, t2) {
    e6.isFullScreen ? e6.unFullScreen() : e6.fullScreen();
  }, e5;
})(), sO = { menus: [{ key: "fullScreen", factory: function() {
  return new aO();
} }] };
function uO(e5) {
  return function(t2, n2) {
    return "<h".concat(e5, ">").concat(n2, "</h").concat(e5, ">");
  };
}
var lO = { type: "header1", elemToHtml: uO(1) }, cO = { type: "header2", elemToHtml: uO(2) }, dO = { type: "header3", elemToHtml: uO(3) }, fO = { type: "header4", elemToHtml: uO(4) }, pO = { type: "header5", elemToHtml: uO(5) }, hO = { type: "header6", elemToHtml: uO(6) };
function gO(e5) {
  var t2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return _y.getNodeType(e6).startsWith("header");
  }, universal: true }), 1), n2 = t2[0];
  if (null == n2) return "paragraph";
  var r2 = Qg(n2, 1)[0];
  return _y.getNodeType(r2);
}
function vO(e5) {
  if (null == e5.selection) return true;
  var t2 = Qg(Kh.nodes(e5, { match: function(e6) {
    var t3 = _y.getNodeType(e6);
    return "paragraph" === t3 || !!t3.startsWith("header");
  }, universal: true, mode: "highest" }), 1);
  return !t2[0];
}
function mO(e5, t2) {
  t2 && jg.setNodes(e5, { type: t2 });
}
var yO = (function() {
  function e5() {
    this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return gO(e6);
  }, e5.prototype.isActive = function(e6) {
    return this.getValue(e6) === this.type;
  }, e5.prototype.isDisabled = function(e6) {
    return vO(e6);
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.type;
    mO(e6, t2 === n2 ? "paragraph" : n2);
  }, e5;
})(), bO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H1", t3.type = "header1", t3;
  }
  return Kg(t2, e5), t2;
})(yO), EO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H2", t3.type = "header2", t3;
  }
  return Kg(t2, e5), t2;
})(yO), CO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H3", t3.type = "header3", t3;
  }
  return Kg(t2, e5), t2;
})(yO), DO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H4", t3.type = "header4", t3;
  }
  return Kg(t2, e5), t2;
})(yO), wO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H5", t3.type = "header5", t3;
  }
  return Kg(t2, e5), t2;
})(yO), SO = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "H6", t3.type = "header6", t3;
  }
  return Kg(t2, e5), t2;
})(yO), AO = (function() {
  function e5() {
    this.title = QE("header.title"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M960 960c-51.2 0-102.4-3.2-153.6-3.2-51.2 0-99.2 3.2-150.4 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 57.6-28.8 86.4-48 19.2-12.8 19.2-60.8 19.2-80v-224-19.2c-9.6-3.2-19.2-3.2-28.8-3.2H320c-9.6 0-19.2 0-28.8 3.2V780.8c0 22.4 0 80 22.4 92.8 28.8 19.2 96-6.4 96 44.8 0 16-9.6 41.6-28.8 41.6-54.4 0-105.6-3.2-160-3.2-48 0-96 3.2-147.2 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 51.2-28.8 80-48 19.2-12.8 19.2-60.8 19.2-83.2V294.4c0-28.8 3.2-115.2-22.4-131.2-25.6-16-86.4 9.6-86.4-41.6 0-16 6.4-41.6 28.8-41.6 51.2 0 105.6 3.2 156.8 3.2 48 0 96-3.2 144-3.2 19.2 0 28.8 22.4 28.8 41.6 0 48-57.6 25.6-83.2 41.6-19.2 12.8-19.2 73.6-19.2 92.8v201.6c6.4 3.2 16 3.2 22.4 3.2h400c6.4 0 12.8 0 22.4-3.2V256c0-22.4 0-80-19.2-92.8-28.8-16-86.4 6.4-86.4-41.6 0-16 9.6-41.6 28.8-41.6 51.2 0 99.2 3.2 150.4 3.2 48 0 99.2-3.2 147.2-3.2 19.2 0 28.8 22.4 28.8 41.6 0 51.2-57.6 25.6-86.4 41.6-19.2 12.8-19.2 70.4-19.2 92.8v537.6c0 19.2 0 67.2 19.2 80 28.8 19.2 89.6-6.4 89.6 44.8 0 19.2-6.4 41.6-28.8 41.6z"></path></svg>', this.tag = "select", this.width = 60;
  }
  return e5.prototype.getOptions = function(e6) {
    var t2 = [{ value: "header1", text: "H1", styleForRenderMenuList: { "font-size": "32px", "font-weight": "bold" } }, { value: "header2", text: "H2", styleForRenderMenuList: { "font-size": "24px", "font-weight": "bold" } }, { value: "header3", text: "H3", styleForRenderMenuList: { "font-size": "18px", "font-weight": "bold" } }, { value: "header4", text: "H4", styleForRenderMenuList: { "font-size": "16px", "font-weight": "bold" } }, { value: "header5", text: "H5", styleForRenderMenuList: { "font-size": "13px", "font-weight": "bold" } }, { value: "header6", text: "H6", styleForRenderMenuList: { "font-size": "11px", "font-weight": "bold" } }, { value: "paragraph", text: QE("header.text") }], n2 = this.getValue(e6).toString();
    return t2.forEach(function(e7) {
      e7.value === n2 ? e7.selected = true : e7.selected = void 0;
    }), t2;
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getValue = function(e6) {
    return gO(e6);
  }, e5.prototype.isDisabled = function(e6) {
    return vO(e6);
  }, e5.prototype.exec = function(e6, t2) {
    mO(e6, t2.toString());
  }, e5;
})(), xO = { key: "headerSelect", factory: function() {
  return new AO();
} }, OO = { key: "header1", factory: function() {
  return new bO();
} }, NO = { key: "header2", factory: function() {
  return new EO();
} }, BO = { key: "header3", factory: function() {
  return new CO();
} }, TO = { key: "header4", factory: function() {
  return new DO();
} }, kO = { key: "header5", factory: function() {
  return new wO();
} }, FO = { key: "header6", factory: function() {
  return new SO();
} };
function IO(e5) {
  return function(t2, n2, r2) {
    var o2 = am(t2);
    return 0 === (n2 = n2.filter(function(e6) {
      return !!Cg.isText(e6) || !!r2.isInline(e6);
    })).length && (n2 = [{ text: o2.text().replace(/\s+/gm, " ") }]), { type: "header".concat(e5), children: n2 };
  };
}
var PO = { selector: "h1:not([data-w-e-type])", parseElemHtml: IO(1) }, _O = { selector: "h2:not([data-w-e-type])", parseElemHtml: IO(2) }, RO = { selector: "h3:not([data-w-e-type])", parseElemHtml: IO(3) }, LO = { selector: "h4:not([data-w-e-type])", parseElemHtml: IO(4) }, MO = { selector: "h5:not([data-w-e-type])", parseElemHtml: IO(5) }, jO = { selector: "h6:not([data-w-e-type])", parseElemHtml: IO(6) };
function HO(e5) {
  return function(t2, n2, r2) {
    return TD("h".concat(e5), null, n2);
  };
}
var zO = { renderElems: [{ type: "header1", renderElem: HO(1) }, { type: "header2", renderElem: HO(2) }, { type: "header3", renderElem: HO(3) }, { type: "header4", renderElem: HO(4) }, { type: "header5", renderElem: HO(5) }, { type: "header6", renderElem: HO(6) }], elemsToHtml: [lO, cO, dO, fO, pO, hO], parseElemsHtml: [PO, _O, RO, LO, MO, jO], menus: [xO, OO, NO, BO, TO, kO, FO], editorPlugin: function(e5) {
  var t2 = e5.insertBreak, n2 = e5;
  return n2.insertBreak = function() {
    var r2 = Qg(Kh.nodes(n2, { match: function(e6) {
      return _y.getNodeType(e6).startsWith("header");
    }, universal: true }), 1), o2 = r2[0];
    if (o2) if (_y.isSelectionAtLineEnd(e5, o2[1])) {
      jg.insertNodes(n2, { type: "paragraph", children: [{ text: "" }] }, { mode: "highest" });
    } else t2();
    else t2();
  }, n2;
} };
var $O = { type: "image", elemToHtml: function(e5, t2) {
  var n2 = e5, r2 = n2.src, o2 = n2.alt, i2 = void 0 === o2 ? "" : o2, a2 = n2.href, s2 = void 0 === a2 ? "" : a2, u2 = n2.width, l2 = void 0 === u2 ? "" : u2, c2 = n2.height, d2 = void 0 === c2 ? "" : c2, f2 = n2.style, p2 = void 0 === f2 ? {} : f2, h2 = p2.width, g2 = void 0 === h2 ? "" : h2, v2 = p2.height, m2 = void 0 === v2 ? "" : v2, y2 = "";
  return g2 && (y2 += "width: ".concat(g2, ";")), m2 && (y2 += "height: ".concat(m2, ";")), '<img src="'.concat(r2, '" alt="').concat(i2, '" data-href="').concat(s2, '" width="').concat(l2, '" height="').concat(d2, '" style="').concat(y2, '"/>');
} };
var UO = (function() {
  function e5() {
    this.title = QE("image.delete"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M826.8032 356.5312c-19.328 0-36.3776 15.6928-36.3776 35.0464v524.2624c0 19.328-16 34.56-35.328 34.56H264.9344c-19.328 0-35.5072-15.3088-35.5072-34.56V390.0416c0-19.328-14.1568-35.0464-33.5104-35.0464s-33.5104 15.6928-33.5104 35.0464V915.712c0 57.9328 44.6208 108.288 102.528 108.288H755.2c57.9328 0 108.0832-50.4576 108.0832-108.288V391.4752c-0.1024-19.2512-17.1264-34.944-36.48-34.944z" p-id="9577"></path><path d="M437.1712 775.7568V390.6048c0-19.328-14.1568-35.0464-33.5104-35.0464s-33.5104 15.616-33.5104 35.0464v385.152c0 19.328 14.1568 35.0464 33.5104 35.0464s33.5104-15.7184 33.5104-35.0464zM649.7024 775.7568V390.6048c0-19.328-17.0496-35.0464-36.3776-35.0464s-36.3776 15.616-36.3776 35.0464v385.152c0 19.328 17.0496 35.0464 36.3776 35.0464s36.3776-15.7184 36.3776-35.0464zM965.0432 217.0368h-174.6176V145.5104c0-57.9328-47.2064-101.76-104.6528-101.76h-350.976c-57.8304 0-105.3952 43.8528-105.3952 101.76v71.5264H54.784c-19.4304 0-35.0464 14.1568-35.0464 33.5104 0 19.328 15.616 33.5104 35.0464 33.5104h910.3616c19.328 0 35.0464-14.1568 35.0464-33.5104 0-19.3536-15.6928-33.5104-35.1488-33.5104z m-247.3728 0H297.3952V145.5104c0-19.328 18.2016-34.7648 37.4272-34.7648h350.976c19.1488 0 31.872 15.1296 31.872 34.7648v71.5264z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == _y.getSelectedNodeByType(e6, "image");
  }, e5.prototype.exec = function(e6, t2) {
    this.isDisabled(e6) || jg.removeNodes(e6, { match: function(e7) {
      return _y.checkNodeType(e7, "image");
    } });
  }, e5;
})();
function VO(e5) {
  return void 0 === e5 && (e5 = "r"), "".concat(e5, "-").concat(zm());
}
function WO(e5) {
  return e5.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function GO(e5) {
  var t2 = e5.selection;
  if (null == t2) return true;
  if (!fg.isCollapsed(t2)) return true;
  var n2 = Qg(Kh.nodes(e5, { match: function(t3) {
    var n3 = _y.getNodeType(t3);
    return "code" === n3 || ("pre" === n3 || ("link" === n3 || ("list-item" === n3 || (!!n3.startsWith("header") || ("blockquote" === n3 || !!Kh.isVoid(e5, t3))))));
  }, universal: true }), 1);
  return !!n2[0];
}
function qO(e5, t2, n2) {
  return Xg(this, arguments, void 0, function(e6, t3, n3, r2, o2) {
    var i2, a2;
    return void 0 === r2 && (r2 = ""), void 0 === o2 && (o2 = ""), Zg(this, function(s2) {
      switch (s2.label) {
        case 0:
          return (i2 = t3.getMenuConfig(e6).checkImage) ? [4, i2(n3, r2, o2)] : [3, 2];
        case 1:
          if ("string" == typeof (a2 = s2.sent())) return t3.alert(a2, "error"), [2, false];
          if (null == a2) return [2, false];
          s2.label = 2;
        case 2:
          return [2, true];
      }
    });
  });
}
function KO(e5, t2, n2) {
  return Xg(this, void 0, void 0, function() {
    var r2;
    return Zg(this, function(o2) {
      switch (o2.label) {
        case 0:
          return (r2 = t2.getMenuConfig(e5).parseImageSrc) ? [4, r2(n2)] : [3, 2];
        case 1:
          return [2, o2.sent()];
        case 2:
          return [2, n2];
      }
    });
  });
}
function YO(e5, t2) {
  return Xg(this, arguments, void 0, function(e6, t3, n2, r2) {
    var o2, i2, a2;
    return void 0 === n2 && (n2 = ""), void 0 === r2 && (r2 = ""), Zg(this, function(s2) {
      switch (s2.label) {
        case 0:
          return [4, qO("insertImage", e6, t3, n2, r2)];
        case 1:
          return s2.sent() ? [4, KO("insertImage", e6, t3)] : [2];
        case 2:
          return o2 = s2.sent(), i2 = { type: "image", src: WO(o2), href: r2, alt: n2, style: {}, children: [{ text: "" }] }, null === e6.selection && e6.restoreSelection(), _y.getSelectedNodeByType(e6, "image") && e6.move(1), GO(e6) ? [2] : (jg.insertNodes(e6, i2), (a2 = e6.getMenuConfig("insertImage").onInsertedImage) && a2(i2), [2]);
      }
    });
  });
}
function XO() {
  return VO("w-e-edit-image");
}
var ZO = (function() {
  function e5() {
    this.title = QE("image.edit"), this.iconSvg = bx, this.tag = "button", this.showModal = true, this.modalWidth = 300, this.$content = null, this.srcInputId = XO(), this.altInputId = XO(), this.hrefInputId = XO(), this.buttonId = XO();
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.getImageNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "image");
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "image"));
  }, e5.prototype.getModalPositionNode = function(e6) {
    return this.getImageNode(e6);
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = this, r2 = n2.srcInputId, o2 = n2.altInputId, i2 = n2.hrefInputId, a2 = n2.buttonId, s2 = this.getImageNode(e6);
    if (null == s2) throw new Error("Not found selected image node");
    var u2 = Qg(cC(QE("image.src"), r2), 2), l2 = u2[0], c2 = am(u2[1]), d2 = Qg(cC(QE("image.desc"), o2), 2), f2 = d2[0], p2 = am(d2[1]), h2 = Qg(cC(QE("image.link"), i2), 2), g2 = h2[0], v2 = am(h2[1]), m2 = Qg(fC(a2, QE("common.ok")), 1)[0];
    if (null == this.$content) {
      var y2 = am("<div></div>");
      y2.on("click", "#".concat(a2), function(n3) {
        n3.preventDefault();
        var a3 = y2.find("#".concat(r2)).val(), s3 = y2.find("#".concat(o2)).val(), u3 = y2.find("#".concat(i2)).val();
        t2.updateImage(e6, a3, s3, u3), e6.hidePanelOrModal();
      }), this.$content = y2;
    }
    var b2 = this.$content;
    b2.empty(), b2.append(l2), b2.append(f2), b2.append(g2), b2.append(m2);
    var E2 = s2, C2 = E2.src, D2 = E2.alt, w2 = void 0 === D2 ? "" : D2, S2 = E2.href, A2 = void 0 === S2 ? "" : S2;
    return c2.val(C2), p2.val(w2), v2.val(A2), setTimeout(function() {
      c2.focus();
    }), b2[0];
  }, e5.prototype.updateImage = function(e6, t2, n2, r2, o2) {
    void 0 === n2 && (n2 = ""), void 0 === r2 && (r2 = ""), void 0 === o2 && (o2 = {}), t2 && (e6.restoreSelection(), this.isDisabled(e6) || (function(e7, t3) {
      Xg(this, arguments, void 0, function(e8, t4, n3, r3, o3) {
        var i2, a2, s2, u2, l2, c2;
        return void 0 === n3 && (n3 = ""), void 0 === r3 && (r3 = ""), void 0 === o3 && (o3 = {}), Zg(this, function(d2) {
          switch (d2.label) {
            case 0:
              return [4, qO("editImage", e8, t4, n3, r3)];
            case 1:
              return d2.sent() ? [4, KO("editImage", e8, t4)] : [2];
            case 2:
              return i2 = d2.sent(), null == (a2 = _y.getSelectedNodeByType(e8, "image")) || (s2 = a2.style, u2 = { src: i2, alt: n3, href: r3, style: Yg(Yg({}, void 0 === s2 ? {} : s2), o3) }, jg.setNodes(e8, u2, { match: function(e9) {
                return _y.checkNodeType(e9, "image");
              } }), l2 = _y.getSelectedNodeByType(e8, "image"), (c2 = e8.getMenuConfig("editImage").onUpdatedImage) && c2(l2)), [2];
          }
        });
      });
    })(e6, t2, n2, r2, o2));
  }, e5;
})();
function JO() {
  return VO("w-e-insert-image");
}
var QO = (function() {
  function e5() {
    this.title = QE("image.editSize"), this.tag = "button", this.showModal = true, this.modalWidth = 320, this.$content = null, this.widthInputId = JO(), this.heightInputId = JO(), this.buttonId = JO();
  }
  return e5.prototype.getSelectedImageNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "image");
  }, e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedImageNode(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return this.getSelectedImageNode(e6);
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = t2.widthInputId, r2 = t2.heightInputId, o2 = t2.buttonId, i2 = Qg(cC(QE("image.width"), n2, "auto"), 2), a2 = i2[0], s2 = am(i2[1]), u2 = Qg(cC(QE("image.height"), r2, "auto"), 2), l2 = u2[0], c2 = am(u2[1]), d2 = Qg(fC(o2, QE("image.ok")), 1)[0], f2 = this.getSelectedImageNode(e6);
    if (null == this.$content) {
      var p2 = am("<div></div>");
      p2.on("click", "#".concat(o2), function(t3) {
        t3.preventDefault();
        var o3 = p2.find("#".concat(n2)).val().trim(), i3 = p2.find("#".concat(r2)).val().trim(), a3 = function(e7) {
          return /^\d+(\.\d+)?%$/.test(e7);
        }, s3 = function(e7) {
          return /^\d+(\.\d+)?$/.test(e7);
        }, u3 = function(e7) {
          return /^\d+(\.\d+)?px$/.test(e7);
        }, l3 = "auto", c3 = "auto";
        a3(o3) ? l3 = o3 : s3(o3) ? l3 = "".concat(parseInt(o3, 10), "px") : u3(o3) && (l3 = o3), a3(i3) ? c3 = i3 : s3(i3) ? c3 = "".concat(parseInt(i3, 10), "px") : u3(i3) && (c3 = i3);
        var d3 = f2.style, h3 = void 0 === d3 ? {} : d3;
        e6.restoreSelection();
        var g3 = Yg(Yg({}, h3), { style: { width: l3, height: c3 } });
        jg.setNodes(e6, g3, { match: function(e7) {
          return _y.checkNodeType(e7, "image");
        } }), e6.hidePanelOrModal();
      }), this.$content = p2;
    }
    var h2 = this.$content;
    if (h2.empty(), h2.append(a2), h2.append(l2), h2.append(d2), null == f2) return h2[0];
    var g2 = f2.style, v2 = void 0 === g2 ? {} : g2, m2 = v2.width, y2 = void 0 === m2 ? "auto" : m2, b2 = v2.height, E2 = void 0 === b2 ? "auto" : b2;
    return s2.val(y2), c2.val(E2), setTimeout(function() {
      s2.focus();
    }), h2[0];
  }, e5;
})();
function eN() {
  return VO("w-e-insert-image");
}
var tN = (function() {
  function e5() {
    this.title = QE("image.netImage"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>', this.tag = "button", this.showModal = true, this.modalWidth = 300, this.$content = null, this.srcInputId = eN(), this.altInputId = eN(), this.hrefInputId = eN(), this.buttonId = eN();
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return GO(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return null;
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = this, r2 = n2.srcInputId, o2 = n2.altInputId, i2 = n2.hrefInputId, a2 = n2.buttonId, s2 = Qg(cC(QE("image.src"), r2), 2), u2 = s2[0], l2 = am(s2[1]), c2 = Qg(cC(QE("image.desc"), o2), 2), d2 = c2[0], f2 = am(c2[1]), p2 = Qg(cC(QE("image.link"), i2), 2), h2 = p2[0], g2 = am(p2[1]), v2 = Qg(fC(a2, QE("common.ok")), 1)[0];
    if (null == this.$content) {
      var m2 = am("<div></div>");
      m2.on("click", "#".concat(a2), function(n3) {
        n3.preventDefault();
        var a3 = m2.find("#".concat(r2)).val().trim(), s3 = m2.find("#".concat(o2)).val().trim(), u3 = m2.find("#".concat(i2)).val().trim();
        t2.insertImage(e6, a3, s3, u3), e6.hidePanelOrModal();
      }), this.$content = m2;
    }
    var y2 = this.$content;
    return y2.empty(), y2.append(u2), y2.append(d2), y2.append(h2), y2.append(v2), l2.val(""), f2.val(""), g2.val(""), setTimeout(function() {
      l2.focus();
    }), y2[0];
  }, e5.prototype.insertImage = function(e6, t2, n2, r2) {
    void 0 === n2 && (n2 = ""), void 0 === r2 && (r2 = ""), t2 && (e6.restoreSelection(), this.isDisabled(e6) || YO(e6, t2, n2, r2));
  }, e5;
})(), nN = (function() {
  function e5() {
    this.title = QE("image.viewLink"), this.iconSvg = Ex, this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "image");
    return t2 && t2.href || "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !this.getValue(e6);
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      if (!t2 || "string" != typeof t2) throw new Error("View image link failed, image.href is '".concat(t2, "'"));
      window.open(t2, "_blank");
    }
  }, e5;
})(), rN = (function() {
  function e5() {
    this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getSelectedNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "image");
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedNode(e6);
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = this.getSelectedNode(e6);
      if (null != n2) {
        var r2 = _y.getHoverbar(e6);
        r2 && r2.hideAndClean();
        var o2 = n2.style, i2 = { style: Yg(Yg({}, void 0 === o2 ? {} : o2), { width: this.value, height: "" }) };
        jg.setNodes(e6, i2, { match: function(e7) {
          return _y.checkNodeType(e7, "image");
        } });
      }
    }
  }, e5;
})(), oN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "30%", t3.value = "30%", t3;
  }
  return Kg(t2, e5), t2;
})(rN), iN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "50%", t3.value = "50%", t3;
  }
  return Kg(t2, e5), t2;
})(rN), aN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = "100%", t3.value = "100%", t3;
  }
  return Kg(t2, e5), t2;
})(rN), sN = { onInsertedImage: function(e5) {
}, onUpdatedImage: function(e5) {
}, checkImage: function(e5, t2, n2) {
  return true;
}, parseImageSrc: function(e5) {
  return e5;
} };
function uN(e5, t2) {
  var n2 = _y.findKey(e5, t2).id;
  return "w-e-image-container-".concat(n2);
}
function lN(e5, t2, n2, r2) {
  var o2 = am("body"), i2 = uN(e5, t2), a2 = r2.width, s2 = r2.height, u2 = 0, l2 = 0, c2 = 0, d2 = 0, f2 = false, p2 = null;
  var h2 = AC(function(e6) {
    e6.preventDefault();
    var t3 = e6.clientX, n3 = l2 + (f2 ? u2 - t3 : t3 - u2), r3 = c2 * (n3 / l2);
    n3 > d2 - 6 || null != p2 && (n3 <= 15 || r3 <= 15 || (p2.css("width", "".concat(n3, "px")), p2.css("height", "".concat(r3, "px"))));
  }, 100);
  function g2(n3) {
    if (o2.off("mousemove", h2), null != p2) {
      var r3 = p2.width().toFixed(2), i3 = p2.height().toFixed(2), a3 = { style: Yg(Yg({}, t2.style), { width: "".concat(r3, "px"), height: "".concat(i3, "px") }) };
      jg.setNodes(e5, a3, { at: _y.findPath(e5, t2) }), o2.off("mouseup", g2);
    }
  }
  function v2(t3, n3) {
    p2 = (function() {
      var e6 = am("#".concat(i2));
      if (0 === e6.length) throw new Error("Cannot find image container elem");
      return e6;
    })(), u2 = t3, d2 = n3;
    var r3 = p2.find("img");
    if (0 === r3.length) throw new Error("Cannot find image elem");
    l2 = r3.width(), c2 = r3.height(), o2.on("mousemove", h2), o2.on("mouseup", g2);
    var a3 = _y.getHoverbar(e5);
    a3 && a3.hideAndClean();
  }
  var m2 = {};
  return a2 && (m2.width = a2), s2 && (m2.height = s2), m2.boxShadow = "0 0 0 1px #B4D5FF", TD("div", { id: i2, style: m2, className: "w-e-image-container w-e-selected-image-container", on: { mousedown: function(n3) {
    var r3 = am(n3.target);
    if (r3.hasClass("w-e-image-dragger")) {
      n3.preventDefault(), (r3.hasClass("left-top") || r3.hasClass("left-bottom")) && (f2 = true);
      var o3 = _y.getParentNode(e5, t2);
      if (null != o3) {
        var i3 = _y.toDOMNode(e5, o3), a3 = i3.getBoundingClientRect ? i3.getBoundingClientRect() : { width: 0 }, s3 = window.getComputedStyle(i3), u3 = parseFloat(s3.paddingLeft), l3 = parseFloat(s3.paddingRight), c3 = parseFloat(s3.borderLeftWidth), d3 = parseFloat(s3.borderRightWidth);
        v2(n3.clientX, a3.width - u3 - l3 - c3 - d3);
      }
    }
  } } }, n2, TD("div", { className: "w-e-image-dragger left-top" }), TD("div", { className: "w-e-image-dragger right-top" }), TD("div", { className: "w-e-image-dragger left-bottom" }), TD("div", { className: "w-e-image-dragger right-bottom" }));
}
var cN = { type: "image", renderElem: function(e5, t2, n2) {
  var r2 = e5, o2 = r2.src, i2 = r2.alt, a2 = void 0 === i2 ? "" : i2, s2 = r2.href, u2 = void 0 === s2 ? "" : s2, l2 = r2.style, c2 = void 0 === l2 ? {} : l2, d2 = c2.width, f2 = void 0 === d2 ? "" : d2, p2 = c2.height, h2 = void 0 === p2 ? "" : p2, g2 = _y.isNodeSelected(n2, e5), v2 = { maxWidth: "100%" };
  f2 && (v2.width = "100%"), h2 && (v2.height = "100%");
  var m2 = TD("img", { style: v2, src: o2, alt: a2, "data-href": u2 }), y2 = n2.isDisabled();
  return g2 && !y2 ? lN(n2, e5, m2, { width: f2, height: h2 }) : (function(e6, t3, n3, r3) {
    var o3 = r3.width, i3 = r3.height, a3 = {};
    return o3 && (a3.width = o3), i3 && (a3.height = i3), TD("div", { id: uN(e6, t3), style: a3, className: "w-e-image-container" }, n3);
  })(n2, e5, m2, { width: f2, height: h2 });
} }, dN = { renderElems: [cN], elemsToHtml: [$O], parseElemsHtml: [{ selector: "img:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5), o2 = r2.attr("data-href") || "";
  return o2 = decodeURIComponent(o2), { type: "image", src: r2.attr("src") || "", alt: r2.attr("alt") || "", href: o2, style: { width: Ox(r2, "width"), height: Ox(r2, "height") }, width: r2.attr("width") || "", height: r2.attr("height") || "", children: [{ text: "" }] };
} }], menus: [{ key: "insertImage", factory: function() {
  return new tN();
}, config: sN }, { key: "deleteImage", factory: function() {
  return new UO();
} }, { key: "editImage", factory: function() {
  return new ZO();
}, config: sN }, { key: "viewImageLink", factory: function() {
  return new nN();
} }, { key: "imageWidth30", factory: function() {
  return new oN();
} }, { key: "imageWidth50", factory: function() {
  return new iN();
} }, { key: "imageWidth100", factory: function() {
  return new aN();
} }, { key: "editorImageSizeMenu", factory: function() {
  return new QO();
} }], editorPlugin: function(e5) {
  var t2 = e5.isInline, n2 = e5.isVoid, r2 = e5;
  return r2.isInline = function(e6) {
    return "image" === e6.type || t2(e6);
  }, r2.isVoid = function(e6) {
    return "image" === e6.type || n2(e6);
  }, r2;
} }, fN = (function() {
  function e5() {
    this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    var t2 = Qg(Kh.nodes(e6, { match: function(e7) {
      return !!e7.indent;
    }, universal: true }), 1), n2 = t2[0];
    return null == n2 ? "" : Qg(n2, 1)[0].indent || "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getMatchNode = function(e6) {
    var t2 = Qg(Kh.nodes(e6, { match: function(e7) {
      var t3 = _y.getNodeType(e7);
      return "paragraph" === t3 || !!t3.startsWith("header");
    }, universal: true, mode: "highest" }), 1), n2 = t2[0];
    return null == n2 ? null : n2[0];
  }, e5;
})(), pN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("indent.decrease"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m256-512v384l-256-192z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2.prototype.isDisabled = function(e6) {
    var t3 = this.getMatchNode(e6);
    return null == t3 || !t3.indent;
  }, t2.prototype.exec = function(e6, t3) {
    jg.setNodes(e6, { indent: null }, { match: function(e7) {
      return $h.isElement(e7);
    } });
  }, t2;
})(fN), hN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("indent.increase"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>', t3.DEFAULT_INDENT_VALUE = "2em", t3;
  }
  return Kg(t2, e5), t2.prototype.isDisabled = function(e6) {
    var t3 = this.getMatchNode(e6);
    return null == t3 || !!t3.indent;
  }, t2.prototype.getIndentValue = function(e6) {
    var t3 = this.getMatchNode(e6);
    if (!t3) return this.DEFAULT_INDENT_VALUE;
    var n2 = t3.children.filter(Cg.isText)[0];
    if (!n2 || !n2.fontSize) return this.DEFAULT_INDENT_VALUE;
    var r2 = n2.fontSize, o2 = parseInt(n2.fontSize, 10), i2 = r2.replace("".concat(o2), "");
    return "".concat(2 * o2).concat(i2);
  }, t2.prototype.exec = function(e6, t3) {
    var n2 = this.getIndentValue(e6);
    jg.setNodes(e6, { indent: n2 }, { match: function(e7) {
      return $h.isElement(e7);
    }, mode: "highest" });
  }, t2;
})(fN);
var gN = { renderStyle: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.indent, r2 = t2;
  return n2 && Vx(r2, { textIndent: n2 }), r2;
}, styleToHtml: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.indent;
  if (!n2) return t2;
  var r2 = am(t2);
  return r2.css("text-indent", n2), Ax(r2);
}, preParseHtml: [{ selector: "p,h1,h2,h3,h4,h5", preParseHtml: function(e5) {
  var t2 = am(e5), n2 = Ox(t2, "padding-left");
  return /^[1-9]\d*em$/.test(n2) && t2.css("text-indent", "2em"), /^[1-9]\d*px$/.test(n2) && parseInt(n2, 10) % 32 == 0 && t2.css("text-indent", "2em"), t2[0];
} }], parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!$h.isElement(t2)) return t2;
  var o2 = t2, i2 = Ox(r2, "text-indent"), a2 = parseInt(i2, 10);
  return i2 && a2 > 0 && (o2.indent = i2), o2;
}, menus: [{ key: "indent", factory: function() {
  return new hN();
} }, { key: "delIndent", factory: function() {
  return new pN();
} }] }, vN = (function() {
  function e5() {
    this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !!_y.getSelectedElems(e6).some(function(t2) {
      var n2 = t2.type;
      return !(!Kh.isVoid(e6, t2) || !Kh.isBlock(e6, t2) || "video" === n2) || !!["pre", "code"].includes(n2);
    });
  }, e5;
})(), mN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("justify.center"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M870.4 793.6v102.4H153.6v-102.4h716.8z m102.4-230.4v102.4H51.2v-102.4h921.6z m-102.4-230.4v102.4H153.6v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2.prototype.exec = function(e6, t3) {
    jg.setNodes(e6, { textAlign: "center" }, { match: function(t4) {
      return $h.isElement(t4) && !e6.isInline(t4);
    } });
  }, t2;
})(vN), yN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("justify.justify"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2.prototype.exec = function(e6, t3) {
    jg.setNodes(e6, { textAlign: "justify" }, { match: function(t4) {
      return $h.isElement(t4) && !e6.isInline(t4);
    } });
  }, t2;
})(vN), bN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("justify.left"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2.prototype.exec = function(e6, t3) {
    jg.setNodes(e6, { textAlign: "left" }, { match: function(t4) {
      return $h.isElement(t4) && !e6.isInline(t4);
    } });
  }, t2;
})(vN), EN = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("justify.right"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M972.8 793.6v102.4H256v-102.4h716.8z m0-230.4v102.4H51.2v-102.4h921.6z m0-230.4v102.4H256v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2.prototype.exec = function(e6, t3) {
    jg.setNodes(e6, { textAlign: "right" }, { match: function(t4) {
      return $h.isElement(t4) && !e6.isInline(t4);
    } });
  }, t2;
})(vN);
var CN = { renderStyle: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.textAlign, r2 = t2;
  return n2 && Vx(r2, { textAlign: n2 }), r2;
}, styleToHtml: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.textAlign;
  if (!n2) return t2;
  var r2 = am(t2);
  return r2.css("text-align", n2), Ax(r2);
}, parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!$h.isElement(t2)) return t2;
  var o2 = t2, i2 = Ox(r2, "text-align");
  return i2 && (o2.textAlign = i2), o2;
}, menus: [{ key: "justifyLeft", factory: function() {
  return new bN();
} }, { key: "justifyRight", factory: function() {
  return new EN();
} }, { key: "justifyCenter", factory: function() {
  return new mN();
} }, { key: "justifyJustify", factory: function() {
  return new yN();
} }] };
var DN = (function() {
  function e5() {
    this.title = QE("lineHeight.title"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M964 788a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526zM198.93 144.306c6.668-5.798 16.774-5.094 22.573 1.574l122.26 140.582a16 16 0 0 1 3.927 10.5c0 8.836-7.164 16-16 16h-61.8a8 8 0 0 0-8 8v390.077h69.819a16 16 0 0 1 10.502 3.928c6.666 5.8 7.37 15.906 1.57 22.573L221.476 878.123a16 16 0 0 1-1.57 1.57c-6.668 5.8-16.774 5.097-22.574-1.57L75.051 737.538a16 16 0 0 1-3.928-10.5c0-8.837 7.163-16 16-16h69.822V312.96H87.127a16 16 0 0 1-10.502-3.928c-6.666-5.8-7.37-15.906-1.57-22.573l122.303-140.582a16 16 0 0 1 1.572-1.572zM964 465a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526z m0-323a8 8 0 0 1 8 8v98a8 8 0 0 1-8 8H438a8 8 0 0 1-8-8v-98a8 8 0 0 1 8-8h526z"></path></svg>', this.tag = "select", this.width = 80;
  }
  return e5.prototype.getOptions = function(e6) {
    var t2 = [], n2 = e6.getMenuConfig("lineHeight").lineHeightList, r2 = void 0 === n2 ? [] : n2;
    t2.push({ text: QE("lineHeight.default"), value: "" }), r2.forEach(function(e7) {
      t2.push({ text: e7, value: e7 });
    });
    var o2 = this.getValue(e6);
    return t2.forEach(function(e7) {
      e7.value === o2 ? e7.selected = true : e7.selected = void 0;
    }), t2;
  }, e5.prototype.getMatchNode = function(e6) {
    var t2 = Qg(Kh.nodes(e6, { match: function(e7) {
      var t3 = _y.getNodeType(e7);
      return !!t3.startsWith("header") || !!["paragraph", "blockquote", "list-item"].includes(t3);
    }, universal: true, mode: "highest" }), 1), n2 = t2[0];
    return null == n2 ? null : n2[0];
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.getMatchNode(e6);
    return null == t2 ? "" : $h.isElement(t2) && t2.lineHeight || "";
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getMatchNode(e6);
  }, e5.prototype.exec = function(e6, t2) {
    jg.setNodes(e6, { lineHeight: t2.toString() }, { mode: "highest" });
  }, e5;
})();
var wN = { renderStyle: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.lineHeight, r2 = t2;
  return n2 && Vx(r2, { lineHeight: n2 }), r2;
}, styleToHtml: function(e5, t2) {
  if (!$h.isElement(e5)) return t2;
  var n2 = e5.lineHeight;
  if (!n2) return t2;
  var r2 = am(t2);
  return r2.css("line-height", n2), Ax(r2);
}, parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!$h.isElement(t2)) return t2;
  var o2 = t2, i2 = n2.getMenuConfig("lineHeight").lineHeightList, a2 = void 0 === i2 ? [] : i2, s2 = Ox(r2, "line-height");
  return s2 && a2.includes(s2) && (o2.lineHeight = s2), o2;
}, menus: [{ key: "lineHeight", factory: function() {
  return new DN();
}, config: { lineHeightList: ["1", "1.15", "1.5", "2", "2.5", "3"] } }] };
var SN = { type: "link", elemToHtml: function(e5, t2) {
  var n2 = e5, r2 = n2.url, o2 = n2.target, i2 = void 0 === o2 ? "_blank" : o2;
  return '<a href="'.concat(r2, '" target="').concat(i2, '">').concat(t2, "</a>");
} };
function AN(e5, t2, n2, r2) {
  return Xg(this, void 0, void 0, function() {
    var o2, i2;
    return Zg(this, function(a2) {
      switch (a2.label) {
        case 0:
          return (o2 = t2.getMenuConfig(e5).checkLink) ? [4, o2(n2, r2)] : [3, 2];
        case 1:
          if ("string" == typeof (i2 = a2.sent())) return t2.alert(i2, "error"), [2, false];
          if (null == i2) return [2, false];
          a2.label = 2;
        case 2:
          return [2, true];
      }
    });
  });
}
function xN(e5, t2, n2) {
  return Xg(this, void 0, void 0, function() {
    var r2;
    return Zg(this, function(o2) {
      switch (o2.label) {
        case 0:
          return (r2 = t2.getMenuConfig(e5).parseLinkUrl) ? [4, r2(n2)] : [3, 2];
        case 1:
          return [2, o2.sent()];
        case 2:
          return [2, n2];
      }
    });
  });
}
function ON(e5) {
  return null == e5.selection || !!_y.getSelectedElems(e5).some(function(t2) {
    var n2 = t2.type;
    return !!e5.isVoid(t2) || !!["pre", "code", "link"].includes(n2);
  });
}
function NN(e5, t2) {
  return { type: "link", url: WO(e5), children: t2 ? [{ text: t2 }] : [] };
}
function BN(e5, t2, n2) {
  return Xg(this, void 0, void 0, function() {
    var r2, o2, i2, a2, s2;
    return Zg(this, function(u2) {
      switch (u2.label) {
        case 0:
          return n2 ? (t2 || (t2 = n2), e5.restoreSelection(), ON(e5) ? [2] : [4, AN("insertLink", e5, t2, n2)]) : [2];
        case 1:
          return u2.sent() ? [4, xN("insertLink", e5, n2)] : [2];
        case 2:
          if (r2 = u2.sent(), null == (o2 = e5.selection)) return [2];
          if (fg.isCollapsed(o2)) {
            if ((a2 = _y.getLeftLengthOfMaxLength(e5)) <= 0) return [2];
            e5.insertText(" "), a2 < t2.length + 1 && (t2 = t2.slice(0, a2 - 1)), s2 = NN(r2, t2), jg.insertNodes(e5, s2), e5.insertFragment([{ text: " " }]);
          } else if ((i2 = Kh.string(e5, o2)) !== t2) {
            if ((a2 = _y.getLeftLengthOfMaxLength(e5)) <= 0) return [2];
            a2 < i2.length - t2.length && (t2 = t2.slice(0, a2)), e5.deleteFragment(), s2 = NN(r2, t2), jg.insertNodes(e5, s2);
          } else s2 = NN(r2), jg.wrapNodes(e5, s2, { split: true }), jg.collapse(e5, { edge: "end" });
          return [2];
      }
    });
  });
}
function TN() {
  return VO("w-e-update-link");
}
var kN = (function() {
  function e5() {
    this.title = QE("link.edit"), this.iconSvg = bx, this.tag = "button", this.showModal = true, this.modalWidth = 300, this.$content = null, this.urlInputId = TN(), this.buttonId = TN();
  }
  return e5.prototype.getSelectedLinkElem = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "link");
    return null == t2 ? null : t2;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.getSelectedLinkElem(e6);
    return t2 && t2.url || "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedLinkElem(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "link");
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this.urlInputId, n2 = this.buttonId, r2 = Qg(cC(QE("link.url"), t2), 2), o2 = r2[0], i2 = am(r2[1]), a2 = Qg(fC(n2, QE("common.ok")), 1)[0];
    if (null == this.$content) {
      var s2 = am("<div></div>");
      s2.on("click", "#".concat(n2), function(n3) {
        n3.preventDefault(), e6.restoreSelection();
        var r3 = _y.getSelectedNodeByType(e6, "link"), o3 = r3 ? eg.string(r3) : "", i3 = s2.find("#".concat(t2)).val();
        !(function(e7, t3, n4) {
          Xg(this, void 0, void 0, function() {
            var r4, o4;
            return Zg(this, function(i4) {
              switch (i4.label) {
                case 0:
                  return n4 ? [4, AN("editLink", e7, t3, n4)] : [2];
                case 1:
                  return i4.sent() ? [4, xN("editLink", e7, n4)] : [2];
                case 2:
                  return r4 = i4.sent(), o4 = { url: WO(r4) }, jg.setNodes(e7, o4, { match: function(e8) {
                    return _y.checkNodeType(e8, "link");
                  } }), [2];
              }
            });
          });
        })(e6, o3, i3), e6.hidePanelOrModal();
      }), this.$content = s2;
    }
    var u2 = this.$content;
    u2.empty(), u2.append(o2), u2.append(a2);
    var l2 = this.getValue(e6);
    return i2.val(l2), setTimeout(function() {
      i2.focus();
    }), u2[0];
  }, e5;
})();
function FN() {
  return VO("w-e-insert-link");
}
var IN = (function() {
  function e5() {
    this.title = QE("link.insert"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M440.224 635.776a51.84 51.84 0 0 1-36.768-15.232c-95.136-95.136-95.136-249.92 0-345.056l192-192C641.536 37.408 702.816 12.032 768 12.032s126.432 25.376 172.544 71.456c95.136 95.136 95.136 249.92 0 345.056l-87.776 87.776a51.968 51.968 0 1 1-73.536-73.536l87.776-87.776a140.16 140.16 0 0 0 0-197.984c-26.432-26.432-61.6-40.992-99.008-40.992s-72.544 14.56-99.008 40.992l-192 192a140.16 140.16 0 0 0 0 197.984 51.968 51.968 0 0 1-36.768 88.768z"></path><path d="M256 1012a242.4 242.4 0 0 1-172.544-71.456c-95.136-95.136-95.136-249.92 0-345.056l87.776-87.776a51.968 51.968 0 1 1 73.536 73.536l-87.776 87.776a140.16 140.16 0 0 0 0 197.984c26.432 26.432 61.6 40.992 99.008 40.992s72.544-14.56 99.008-40.992l192-192a140.16 140.16 0 0 0 0-197.984 51.968 51.968 0 1 1 73.536-73.536c95.136 95.136 95.136 249.92 0 345.056l-192 192A242.4 242.4 0 0 1 256 1012z"></path></svg>', this.tag = "button", this.showModal = true, this.modalWidth = 300, this.$content = null, this.textInputId = FN(), this.urlInputId = FN(), this.buttonId = FN();
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return ON(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return null;
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = e6.selection, n2 = this, r2 = n2.textInputId, o2 = n2.urlInputId, i2 = n2.buttonId, a2 = Qg(cC(QE("link.text"), r2), 2), s2 = a2[0], u2 = am(a2[1]), l2 = Qg(cC(QE("link.url"), o2), 2), c2 = l2[0], d2 = am(l2[1]), f2 = Qg(fC(i2, QE("common.ok")), 1)[0];
    if (null == this.$content) {
      var p2 = am("<div></div>");
      p2.on("click", "#".concat(i2), function(t3) {
        t3.preventDefault();
        var n3 = p2.find("#".concat(r2)).val(), i3 = p2.find("#".concat(o2)).val();
        BN(e6, n3, i3), e6.hidePanelOrModal();
      }), this.$content = p2;
    }
    var h2 = this.$content;
    if (h2.empty(), h2.append(s2), h2.append(c2), h2.append(f2), null == t2 || fg.isCollapsed(t2)) u2.val("");
    else {
      var g2 = Kh.string(e6, t2);
      u2.val(g2);
    }
    return d2.val(""), setTimeout(function() {
      u2.focus();
    }), h2[0];
  }, e5;
})(), PN = (function() {
  function e5() {
    this.title = QE("link.unLink"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M608.16328 811.815036c9.371954 9.371954 9.371954 24.56788 0 33.941834l-89.347563 89.347564c-118.525421 118.523421-311.38448 118.531421-429.919901 0-118.527421-118.529421-118.527421-311.39048 0-429.917901l89.349564-89.349563c9.371954-9.371954 24.56788-9.371954 33.941834 0l79.195613 79.195613c9.371954 9.371954 9.371954 24.56788 0 33.941834l-89.349563 89.347564c-56.143726 56.145726-56.143726 147.49928 0 203.645005 56.143726 56.143726 147.49928 56.145726 203.647005 0l89.347564-89.347563c9.371954-9.371954 24.56788-9.371954 33.941834 0l79.193613 79.195613z m-113.135447-520.429459c9.371954 9.371954 24.56788 9.371954 33.941834 0l89.347564-89.347564c56.143726-56.149726 147.49928-56.145726 203.647006 0 56.143726 56.145726 56.143726 147.49928 0 203.645006l-89.349564 89.347564c-9.371954 9.371954-9.371954 24.56788 0 33.941834l79.195613 79.195613c9.371954 9.371954 24.56788 9.371954 33.941834 0l89.349564-89.349563c118.529421-118.529421 118.529421-311.38848 0-429.917901-118.531421-118.527421-311.38848-118.527421-429.919901 0l-89.347563 89.347564c-9.371954 9.371954-9.371954 24.56788 0 33.941834l79.193613 79.195613z m469.653707 718.556492l45.253779-45.253779c18.745908-18.745908 18.745908-49.13776 0-67.881669L127.195629 14.062931c-18.745908-18.745908-49.13776-18.745908-67.881669 0L14.058181 59.31871c-18.745908 18.745908-18.745908 49.13776 0 67.881669l882.74169 882.74169c18.745908 18.743908 49.13776 18.743908 67.881669 0z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == _y.getSelectedNodeByType(e6, "link");
  }, e5.prototype.exec = function(e6, t2) {
    this.isDisabled(e6) || jg.unwrapNodes(e6, { match: function(e7) {
      return _y.checkNodeType(e7, "link");
    } });
  }, e5;
})(), _N = (function() {
  function e5() {
    this.title = QE("link.view"), this.iconSvg = Ex, this.tag = "button";
  }
  return e5.prototype.getSelectedLinkElem = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "link");
    return null == t2 ? null : t2;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.getSelectedLinkElem(e6);
    return t2 && t2.url || "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedLinkElem(e6);
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      if (!t2 || "string" != typeof t2) throw new Error("View link failed, link url is '".concat(t2, "'"));
      window.open(t2, "_blank");
    }
  }, e5;
})(), RN = { checkLink: function(e5, t2) {
  return true;
}, parseLinkUrl: function(e5) {
  return e5;
} }, LN = { key: "insertLink", factory: function() {
  return new IN();
}, config: RN }, MN = { key: "editLink", factory: function() {
  return new kN();
}, config: RN }, jN = { key: "unLink", factory: function() {
  return new PN();
} }, HN = { key: "viewLink", factory: function() {
  return new _N();
} };
var zN, $N, UN = { selector: "a:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  return 0 === (t2 = t2.filter(function(e6) {
    return !!Cg.isText(e6) || !!n2.isInline(e6);
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]), { type: "link", url: r2.attr("href") || "", target: r2.attr("target") || "", children: t2 };
} };
var VN = b((function() {
  if ($N) return zN;
  $N = 1, zN = function(r2) {
    if ("string" != typeof r2) return false;
    var o2 = r2.match(e5);
    if (!o2) return false;
    var i2 = o2[1];
    if (!i2) return false;
    if (t2.test(i2) || n2.test(i2)) return true;
    return false;
  };
  var e5 = /^(?:\w+:)?\/\/(\S+)$/, t2 = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/, n2 = /^[^\s\.]+\.\S{2,}$/;
  return zN;
})());
var WN = { type: "link", renderElem: function(e5, t2, n2) {
  var r2 = e5, o2 = r2.url, i2 = r2.target;
  return TD("a", { href: o2, target: void 0 === i2 ? "_blank" : i2 }, t2);
} }, GN = { renderElems: [WN], elemsToHtml: [SN], parseElemsHtml: [UN], menus: [LN, MN, jN, HN], editorPlugin: function(e5) {
  var t2 = e5.isInline, n2 = e5.insertData, r2 = e5.normalizeNode, o2 = e5;
  return o2.isInline = function(e6) {
    return "link" === e6.type || t2(e6);
  }, o2.insertData = function(e6) {
    var t3 = e6.getData("text/plain");
    if (VN(t3)) {
      if (/<img[^>]+>/.test(e6.getData("text/html"))) n2(e6);
      else if (!ON(o2)) {
        var r3 = o2.selection;
        if (null != r3) {
          var i2 = Kh.string(o2, r3);
          BN(o2, i2, t3);
        }
      }
    } else n2(e6);
  }, o2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), n3 = t3[0], i2 = t3[1];
    return "link" !== _y.getNodeType(n3) ? r2([n3, i2]) : "" === eg.string(n3) ? jg.removeNodes(o2, { at: i2 }) : r2([n3, i2]);
  }, o2;
} };
var qN = { selector: "p:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  return 0 === (t2 = t2.filter(function(e6) {
    return !!Cg.isText(e6) || !!n2.isInline(e6);
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]), { type: "paragraph", children: t2 };
} };
function KN(e5) {
  var t2 = Qg(Kh.nodes(e5, { match: function(t3) {
    return e5.children[0] === t3;
  }, mode: "highest" }), 1), n2 = t2[0];
  if (null == n2) return false;
  var r2 = n2[0];
  if (!$h.isElement(r2)) return false;
  if ("paragraph" === r2.type) return false;
  if ("" !== eg.string(r2)) return false;
  var o2 = r2.children, i2 = void 0 === o2 ? [] : o2;
  return !!Cg.isText(i2[0]) && (jg.setNodes(e5, { type: "paragraph" }), true);
}
var YN = { type: "paragraph", renderElem: function(e5, t2, n2) {
  return TD("p", null, t2);
} }, XN = { renderElems: [YN], elemsToHtml: [{ type: "paragraph", elemToHtml: function(e5, t2) {
  return "" === t2 ? "<p><br></p>" : "<p>".concat(t2, "</p>");
} }], parseElemsHtml: [qN], editorPlugin: function(e5) {
  var t2 = e5.deleteBackward, n2 = e5.deleteForward, r2 = e5;
  return r2.deleteBackward = function(e6) {
    KN(r2) || t2(e6);
  }, r2.deleteForward = function(e6) {
    KN(r2) || n2(e6);
  }, r2;
} };
function ZN(e5, t2) {
  if (null == e5.selection) return true;
  var n2 = Qg(Kh.nodes(e5, { match: function(t3) {
    return "pre" === _y.getNodeType(t3) || !!Kh.isVoid(e5, t3);
  }, universal: true }), 1);
  return !!n2[0];
}
function JN(e5, t2) {
  Object.keys(t2).forEach(function(t3) {
    "text" !== t3 && Kh.removeMark(e5, t3);
  });
}
var QN = (function() {
  function e5() {
    this.marksNeedToRemove = [], this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    var t2 = this.mark, n2 = Kh.marks(e6);
    if (n2) return n2[t2];
    var r2 = Qg(Kh.nodes(e6, { match: function(e7) {
      return true === e7[t2];
    } }), 1);
    return !!r2[0];
  }, e5.prototype.isActive = function(e6) {
    return !!this.getValue(e6);
  }, e5.prototype.isDisabled = function(e6) {
    return ZN(e6, this.mark);
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.mark, r2 = this.marksNeedToRemove;
    t2 ? e6.removeMark(n2) : (e6.addMark(n2, true), r2 && r2.forEach(function(t3) {
      return e6.removeMark(t3);
    }));
  }, e5;
})(), eB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "bold", t3.title = QE("textStyle.bold"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M707.872 484.64A254.88 254.88 0 0 0 768 320c0-141.152-114.848-256-256-256H192v896h384c141.152 0 256-114.848 256-256a256.096 256.096 0 0 0-124.128-219.36zM384 192h101.504c55.968 0 101.504 57.408 101.504 128s-45.536 128-101.504 128H384V192z m159.008 640H384v-256h159.008c58.464 0 106.016 57.408 106.016 128s-47.552 128-106.016 128z"></path></svg>', t3.hotkey = "mod+b", t3;
  }
  return Kg(t2, e5), t2;
})(QN), tB = (function() {
  function e5() {
    this.title = QE("textStyle.clear"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M969.382408 288.738615l-319.401123-270.852152a67.074236 67.074236 0 0 0-96.459139 5.74922l-505.931379 574.922021a68.35184 68.35184 0 0 0-17.886463 47.910169 74.101061 74.101061 0 0 0 24.274486 47.910168l156.50655 132.232065h373.060512L975.131628 383.281347a67.074236 67.074236 0 0 0-5.74922-96.459139z m-440.134747 433.746725H264.144729l-90.071117-78.572676c-5.74922-5.74922-12.137243-12.137243-12.137243-17.886463a36.411728 36.411728 0 0 1 5.749221-24.274485l210.804741-240.828447 265.102932 228.691204z m-439.495945 180.781036h843.218964a60.047411 60.047411 0 1 1 0 120.733624H89.751716a60.047411 60.047411 0 1 1 0-120.733624z m0 0"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return ZN(e6);
  }, e5.prototype.exec = function(e6, t2) {
    var n2, r2, o2 = Kh.nodes(e6, { match: function(e7) {
      return Cg.isText(e7);
    }, universal: true });
    try {
      for (var i2 = Jg(o2), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        JN(e6, a2.value[0]);
      }
    } catch (e7) {
      n2 = { error: e7 };
    } finally {
      try {
        a2 && !a2.done && (r2 = i2.return) && r2.call(i2);
      } finally {
        if (n2) throw n2.error;
      }
    }
  }, e5;
})(), nB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "code", t3.title = QE("textStyle.code"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M576 736l96 96 320-320L672 192l-96 96 224 224zM448 288l-96-96L32 512l320 320 96-96-224-224z"></path></svg>', t3.hotkey = "mod+e", t3;
  }
  return Kg(t2, e5), t2;
})(QN), rB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "italic", t3.title = QE("textStyle.italic"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M896 64v64h-128L448 896h128v64H128v-64h128L576 128h-128V64z"></path></svg>', t3.hotkey = "mod+i", t3;
  }
  return Kg(t2, e5), t2;
})(QN), oB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "sub", t3.marksNeedToRemove = ["sup"], t3.title = QE("textStyle.sub"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M768 910.016v50.016h128v64h-192v-146.016l128-60V768h-128v-64h192v146.016zM676 256h-136L352 444 164 256H28l256 256-256 256h136L352 580 540 768h136l-256-256z"></path></svg>', t3.hotkey = "", t3;
  }
  return Kg(t2, e5), t2;
})(QN), iB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "sup", t3.marksNeedToRemove = ["sub"], t3.title = QE("textStyle.sup"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M768 206.016v50.016h128v64h-192V174.016l128-60V64h-128V0h192v146.016zM676 256h-136L352 444 164 256H28l256 256-256 256h136L352 580 540 768h136l-256-256z"></path></svg>', t3.hotkey = "", t3;
  }
  return Kg(t2, e5), t2;
})(QN), aB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "through", t3.title = QE("textStyle.through"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M1024 512v64h-234.496c27.52 38.496 42.496 82.688 42.496 128 0 70.88-36.672 139.04-100.576 186.976C672.064 935.488 594.144 960 512 960s-160.064-24.512-219.424-69.024C228.64 843.04 192 774.88 192 704h128c0 69.376 87.936 128 192 128s192-58.624 192-128-87.936-128-192-128H0v-64h299.52a385.984 385.984 0 0 1-6.944-5.024C228.64 459.04 192 390.88 192 320s36.672-139.04 100.576-186.976C351.936 88.512 429.856 64 512 64s160.064 24.512 219.424 69.024C795.328 180.96 832 249.12 832 320h-128c0-69.376-87.936-128-192-128s-192 58.624-192 128 87.936 128 192 128c78.976 0 154.048 22.688 212.48 64H1024z"></path></svg>', t3.hotkey = "mod+shift+x", t3;
  }
  return Kg(t2, e5), t2;
})(QN), sB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.mark = "underline", t3.title = QE("textStyle.underline"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M704 64l128 0 0 416c0 159.072-143.264 288-320 288s-320-128.928-320-288l0-416 128 0 0 416c0 40.16 18.24 78.688 51.36 108.512 36.896 33.216 86.848 51.488 140.64 51.488s103.744-18.304 140.64-51.488c33.12-29.792 51.36-68.352 51.36-108.512l0-416zM192 832l640 0 0 128-640 0z"></path></svg>', t3.hotkey = "mod+u", t3;
  }
  return Kg(t2, e5), t2;
})(QN);
function uB(e5, t2) {
  return 0 !== e5.length && (!!e5[0].matches(t2) || e5.find(t2).length > 0);
}
function lB(e5, t2) {
  var n2 = t2, r2 = e5, o2 = r2.bold, i2 = r2.italic, a2 = r2.underline, s2 = r2.code, u2 = r2.through, l2 = r2.sub, c2 = r2.sup;
  return o2 && (n2 = "<strong>".concat(n2, "</strong>")), s2 && (n2 = "<code>".concat(n2, "</code>")), i2 && (n2 = "<em>".concat(n2, "</em>")), a2 && (n2 = "<u>".concat(n2, "</u>")), u2 && (n2 = "<s>".concat(n2, "</s>")), l2 && (n2 = "<sub>".concat(n2, "</sub>")), c2 && (n2 = "<sup>".concat(n2, "</sup>")), n2;
}
var cB = { renderStyle: function(e5, t2) {
  var n2 = e5, r2 = n2.bold, o2 = n2.italic, i2 = n2.underline, a2 = n2.code, s2 = n2.through, u2 = n2.sub, l2 = n2.sup, c2 = t2;
  return r2 && (c2 = TD("strong", null, c2)), a2 && (c2 = TD("code", null, c2)), o2 && (c2 = TD("em", null, c2)), i2 && (c2 = TD("u", null, c2)), s2 && (c2 = TD("s", null, c2)), u2 && (c2 = TD("sub", null, c2)), l2 && (c2 = TD("sup", null, c2)), c2;
}, menus: [{ key: "bold", factory: function() {
  return new eB();
} }, { key: "underline", factory: function() {
  return new sB();
} }, { key: "italic", factory: function() {
  return new rB();
} }, { key: "through", factory: function() {
  return new aB();
} }, { key: "code", factory: function() {
  return new nB();
} }, { key: "sub", factory: function() {
  return new oB();
} }, { key: "sup", factory: function() {
  return new iB();
} }, { key: "clearStyle", factory: function() {
  return new tB();
} }], styleToHtml: function(e5, t2) {
  if (!Cg.isText(e5)) return t2;
  if (Sx(t2)) return lB(e5, t2);
  var n2 = am(t2), r2 = n2.html();
  return r2 = lB(e5, r2), n2.html(r2), Ax(n2);
}, parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!Cg.isText(t2)) return t2;
  var o2 = t2;
  return uB(r2, "b,strong") && (o2.bold = true), uB(r2, "i,em") && (o2.italic = true), uB(r2, "u") && (o2.underline = true), uB(r2, "s,strike") && (o2.through = true), uB(r2, "sub") && (o2.sub = true), uB(r2, "sup") && (o2.sup = true), uB(r2, "code") && (o2.code = true), o2;
} };
var dB = { type: "todo", elemToHtml: function(e5, t2) {
  var n2 = e5.checked;
  return '<div data-w-e-type="todo"><input type="checkbox" disabled '.concat(n2 ? "checked" : "", ">").concat(t2, "</div>");
} }, fB = (function() {
  function e5() {
    this.title = QE("todo.todo"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M278.755556 403.911111l-79.644445 79.644445L455.111111 739.555556l568.888889-568.888889-79.644444-79.644445L455.111111 580.266667l-176.355555-176.355556zM910.222222 910.222222H113.777778V113.777778h568.888889V0H113.777778C51.2 0 0 51.2 0 113.777778v796.444444c0 62.577778 51.2 113.777778 113.777778 113.777778h796.444444c62.577778 0 113.777778-51.2 113.777778-113.777778V455.111111h-113.777778v455.111111z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return !!_y.getSelectedNodeByType(e6, "todo");
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !!_y.getSelectedElems(e6).some(function(t2) {
      if (Kh.isVoid(e6, t2) && Kh.isBlock(e6, t2)) return true;
      var n2 = t2.type;
      return !!["pre", "table", "list-item"].includes(n2);
    });
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.isActive(e6);
    jg.setNodes(e6, { type: n2 ? "paragraph" : "todo" });
  }, e5;
})();
var pB = { selector: 'div[data-w-e-type="todo"]', parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  0 === (t2 = t2.filter(function(e6) {
    return !!Cg.isText(e6) || !!n2.isInline(e6);
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]);
  var o2 = false;
  return null != r2.find('input[type="checkbox"]').attr("checked") && (o2 = true), { type: "todo", checked: o2, children: t2 };
} };
var hB = { type: "todo", renderElem: function(e5, t2, n2) {
  var r2 = false;
  n2.isDisabled() && (r2 = true);
  var o2 = TD("div", { style: { margin: "5px 0" } }, TD("span", { contentEditable: false, style: { marginRight: "0.5em" } }, TD("input", { type: "checkbox", checked: e5.checked, disabled: r2, on: { change: function(t3) {
    var r3 = _y.findPath(n2, e5), o3 = { checked: t3.target.checked };
    jg.setNodes(n2, o3, { at: r3 });
  } } })), TD("span", null, t2));
  return o2;
} }, gB = { renderElems: [hB], elemsToHtml: [dB], preParseHtml: [{ selector: "ul.w-e-todo", preParseHtml: function(e5) {
  var t2 = am(e5).find("li"), n2 = am('<div data-w-e-type="todo"></div>'), r2 = t2.find("input[type]");
  return n2.append(r2), t2.children()[0].remove(), n2[0].innerHTML += t2[0].innerHTML, n2[0];
} }], parseElemsHtml: [pB], menus: [{ key: "todo", factory: function() {
  return new fB();
} }], editorPlugin: function(e5) {
  var t2 = e5.deleteBackward, n2 = e5;
  return n2.deleteBackward = function(n3) {
    var r2 = e5.selection;
    if (r2 && fg.isCollapsed(r2)) {
      var o2 = _y.getSelectedNodeByType(e5, "todo");
      if (o2 && 0 === eg.string(o2).length) return void jg.setNodes(e5, { type: "paragraph" }, { mode: "highest" });
    }
    t2(n3);
  }, n2;
} }, vB = (function() {
  function e5() {
    this.title = QE("undo.redo"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M0.00032 576a510.72 510.72 0 0 0 173.344 384l84.672-96A383.136 383.136 0 0 1 128.00032 576C128.00032 363.936 299.93632 192 512.00032 192c106.048 0 202.048 42.976 271.52 112.48L640.00032 448h384V64l-149.984 149.984A510.272 510.272 0 0 0 512.00032 64C229.21632 64 0.00032 293.216 0.00032 576z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection;
  }, e5.prototype.exec = function(e6, t2) {
    "function" == typeof e6.redo && e6.redo();
  }, e5;
})(), mB = (function() {
  function e5() {
    this.title = QE("undo.undo"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M512 64A510.272 510.272 0 0 0 149.984 213.984L0.032 64v384h384L240.512 304.48A382.784 382.784 0 0 1 512.032 192c212.064 0 384 171.936 384 384 0 114.688-50.304 217.632-130.016 288l84.672 96a510.72 510.72 0 0 0 173.344-384c0-282.784-229.216-512-512-512z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection;
  }, e5.prototype.exec = function(e6, t2) {
    "function" == typeof e6.undo && e6.undo();
  }, e5;
})(), yB = [cB, Wx, rO, gN, CN, wN, dN, Xx, Jx, GN, Mx, kx, zO, XN, gB, iO, { menus: [{ key: "redo", factory: function() {
  return new vB();
} }, { key: "undo", factory: function() {
  return new mB();
} }] }, sO, qx];
YE("en", { listModule: { unOrderedList: "Unordered list", orderedList: "Ordered list" } }), YE("zh-CN", { listModule: { unOrderedList: "无序列表", orderedList: "有序列表" } });
var bB = /* @__PURE__ */ new WeakMap();
function EB(e5) {
  var t2, n2 = e5.children || [], r2 = n2.length;
  if (0 === r2) return "";
  for (var o2 = 0; o2 < r2 && !t2; o2 += 1) {
    var i2 = n2[o2];
    Cg.isText(i2) && (t2 = i2);
  }
  return null == t2 ? "" : t2.color || "";
}
function CB(e5, t2, n2) {
  for (var r2 = t2.type, o2 = (function(e6, t3) {
    var n3 = {};
    for (var r3 in e6) Object.prototype.hasOwnProperty.call(e6, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e6[r3]);
    if (null != e6 && "function" == typeof Object.getOwnPropertySymbols) {
      var o3 = 0;
      for (r3 = Object.getOwnPropertySymbols(e6); o3 < r3.length; o3++) t3.indexOf(r3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, r3[o3]) && (n3[r3[o3]] = e6[r3[o3]]);
    }
    return n3;
  })(t2, ["type"]), i2 = void 0 !== n2 ? n2 : o2.level || 0, a2 = _y.findPath(e5, t2), s2 = a2; ; ) {
    if (0 === s2.length || 0 === a2[a2.length - 1]) return null;
    s2 = og.previous(s2);
    var u2 = Kh.node(e5, s2);
    if (!u2) return null;
    var l2 = Qg(u2, 1)[0], c2 = l2.level, d2 = void 0 === c2 ? 0 : c2;
    if (_y.getNodeType(l2) !== r2) return null;
    if (d2 === i2) return l2;
  }
}
function DB(e5, t2, n2) {
  var r2 = CB(e5, t2, n2);
  return !!r2 && r2.ordered === t2.ordered;
}
var wB = [];
var SB = { type: "list-item", elemToHtml: function(e5, t2) {
  var n2 = "", r2 = "", o2 = e5.ordered, i2 = void 0 !== o2 && o2 ? "ol" : "ul", a2 = (function(e6) {
    var t3 = bB.get(e6);
    if (null == t3) return 0;
    var n3 = e6, r3 = n3.type, o3 = n3.ordered, i3 = void 0 !== o3 && o3, a3 = n3.level, s3 = void 0 === a3 ? 0 : a3, u3 = _y.findPath(t3, e6);
    if (0 === u3[0]) return s3 + 1;
    var l3 = og.previous(u3), c3 = Kh.node(t3, l3);
    if (!c3) return 0;
    var d3 = Qg(c3, 1)[0];
    if (_y.getNodeType(d3) !== r3) return s3 + 1;
    var f2 = d3, p2 = f2.ordered, h2 = void 0 !== p2 && p2, g2 = f2.level, v2 = void 0 === g2 ? 0 : g2;
    return v2 < s3 ? s3 - v2 : v2 > s3 ? DB(t3, e6) ? 0 : 1 : v2 === s3 ? h2 === i3 ? 0 : 1 : 0;
  })(e5);
  if (a2 > 0) for (var s2 = 0; s2 < a2; s2 += 1) n2 += "<".concat(i2, ">"), wB.push(i2);
  var u2 = (function(e6) {
    var t3 = bB.get(e6);
    if (null == t3) return 0;
    var n3 = e6, r3 = n3.type, o3 = n3.ordered, i3 = void 0 !== o3 && o3, a3 = n3.level, s3 = void 0 === a3 ? 0 : a3, u3 = _y.findPath(t3, e6);
    if (u3[0] === t3.children.length - 1) return s3 + 1;
    var l3 = og.next(u3), c3 = Kh.node(t3, l3);
    if (!c3) return 0;
    var d3 = Qg(c3, 1)[0];
    if (_y.getNodeType(d3) !== r3) return s3 + 1;
    var f2 = d3, p2 = f2.ordered, h2 = void 0 !== p2 && p2, g2 = f2.level, v2 = void 0 === g2 ? 0 : g2;
    return v2 < s3 ? DB(t3, d3) ? s3 - v2 : s3 - v2 + 1 : v2 > s3 ? 0 : v2 === s3 ? h2 === i3 ? 0 : 1 : 0;
  })(e5);
  if (u2 > 0) for (s2 = 0; s2 < u2; s2 += 1) {
    var l2 = wB.pop();
    r2 += "</".concat(l2, ">");
  }
  var c2 = EB(e5), d2 = c2 ? ' style="color:'.concat(c2, '"') : "";
  return { html: "<li".concat(d2, ">").concat(t2, "</li>"), prefix: n2, suffix: r2 };
} }, AB = (function() {
  function e5() {
    this.type = "list-item", this.tag = "button";
  }
  return e5.prototype.getListNode = function(e6) {
    var t2 = this.type;
    return _y.getSelectedNodeByType(e6, t2);
  }, e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    var t2 = this.getListNode(e6);
    if (null == t2) return false;
    var n2 = t2.ordered;
    return (void 0 !== n2 && n2) === this.ordered;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !!_y.getSelectedElems(e6).some(function(t2) {
      if (Kh.isVoid(e6, t2) && Kh.isBlock(e6, t2)) return true;
      var n2 = t2.type;
      return !!["pre", "code", "table"].includes(n2);
    });
  }, e5.prototype.exec = function(e6, t2) {
    this.isActive(e6) ? jg.setNodes(e6, { type: "paragraph", ordered: void 0, level: void 0 }) : jg.setNodes(e6, { type: "list-item", ordered: this.ordered, indent: void 0 });
  }, e5;
})(), xB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.ordered = false, t3.title = QE("listModule.unOrderedList"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M384 64h640v128H384V64z m0 384h640v128H384v-128z m0 384h640v128H384v-128zM0 128a128 128 0 1 1 256 0 128 128 0 0 1-256 0z m0 384a128 128 0 1 1 256 0 128 128 0 0 1-256 0z m0 384a128 128 0 1 1 256 0 128 128 0 0 1-256 0z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2;
})(AB), OB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.ordered = true, t3.title = QE("listModule.orderedList"), t3.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M384 832h640v128H384z m0-384h640v128H384z m0-384h640v128H384zM192 0v256H128V64H64V0zM128 526.016v50.016h128v64H64v-146.016l128-60V384H64v-64h192v146.016zM256 704v320H64v-64h128v-64H64v-64h128v-64H64v-64z"></path></svg>', t3;
  }
  return Kg(t2, e5), t2;
})(AB), NB = { key: "bulletedList", factory: function() {
  return new xB();
} }, BB = { key: "numberedList", factory: function() {
  return new OB();
} };
function TB(e5) {
  return e5.length ? e5[0].tagName.toLowerCase() : "";
}
Nm && (am.fn.append = Nm), cm && (am.fn.attr = cm), Tm && (am.fn.parent = Tm);
var kB = { selector: "li:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  0 === (t2 = t2.filter(function(e6) {
    return !!Cg.isText(e6) || !!n2.isInline(e6);
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]);
  var o2 = (function(e6) {
    return "ol" === TB(e6.parent());
  })(r2), i2 = (function(e6) {
    for (var t3 = 0, n3 = e6.parent(), r3 = TB(n3); "ul" === r3 || "ol" === r3; ) r3 = TB(n3 = n3.parent()), t3 += 1;
    return t3 - 1;
  })(r2);
  return { type: "list-item", ordered: o2, level: i2, children: t2 };
} };
var FB = { selector: "ul:not([data-w-e-type]),ol:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  return t2.flat(1 / 0);
} };
function IB(e5) {
  return Kh.nodes(e5, { at: e5.selection || void 0, match: function(t2) {
    return 1 === _y.findPath(e5, t2).length;
  } });
}
var PB = { type: "list-item", renderElem: function(e5, t2, n2) {
  bB.set(e5, n2);
  var r2 = e5, o2 = r2.level, i2 = void 0 === o2 ? 0 : o2, a2 = r2.ordered, s2 = void 0 !== a2 && a2, u2 = { margin: "5px 0 5px ".concat(20 * i2, "px"), display: "flex", alignItems: "flex-start" }, l2 = "";
  if (s2) {
    var c2 = (function(e6, t3) {
      var n3 = t3, r3 = n3.type, o3 = n3.level, i3 = void 0 === o3 ? 0 : o3, a3 = n3.ordered, s3 = void 0 !== a3 && a3, u3 = 1, l3 = t3, c3 = _y.findPath(e6, l3);
      if (0 === c3[0]) return 1;
      for (; c3[0] > 0; ) {
        var d2 = og.previous(c3), f2 = Kh.node(e6, d2);
        if (null == f2) break;
        var p2 = f2[0], h2 = p2.level, g2 = void 0 === h2 ? 0 : h2, v2 = p2.type, m2 = p2.ordered;
        if (v2 !== r3) break;
        if (g2 < i3) break;
        if (g2 === i3) {
          if (m2 !== s3) break;
          u3 += 1;
        }
        l3 = p2, c3 = d2;
      }
      return u3;
    })(n2, e5);
    l2 = "".concat(c2, ".");
  } else l2 = (function(e6) {
    void 0 === e6 && (e6 = 0);
    var t3 = "";
    switch (e6) {
      case 0:
        t3 = "•";
        break;
      case 1:
        t3 = "◦";
        break;
      default:
        t3 = "▪";
    }
    return t3;
  })(i2);
  return TD("div", { style: u2 }, TD("span", { contentEditable: false, style: { marginRight: "0.5em", color: EB(e5) }, "data-w-e-reserve": true }, l2), TD("span", { style: { flex: "1", wordBreak: "break-word" } }, t2));
} }, _B = { renderElems: [PB], editorPlugin: function(e5) {
  var t2 = e5.deleteBackward, n2 = e5.handleTab, r2 = e5.normalizeNode, o2 = e5.insertBreak, i2 = e5;
  return i2.insertBreak = function() {
    var t3 = Qg(Kh.nodes(e5, { match: function(e6) {
      return _y.checkNodeType(e6, "list-item");
    }, universal: true }), 1), n3 = t3[0];
    return n3 ? "" !== n3[0].children[0].text ? o2() : void jg.setNodes(i2, { type: "paragraph", ordered: void 0, level: void 0 }) : o2();
  }, i2.deleteBackward = function(n3) {
    var r3 = i2.selection;
    if (null != r3) if (fg.isExpanded(r3)) t2(n3);
    else {
      var o3 = _y.getSelectedNodeByType(i2, "list-item");
      if (null != o3) if (0 !== r3.focus.offset) t2(n3);
      else {
        var a2 = o3, s2 = a2.level, u2 = void 0 === s2 ? 0 : s2, l2 = a2.ordered, c2 = void 0 !== l2 && l2;
        if (u2 > 0) {
          var d2 = CB(e5, o3, u2 - 1);
          d2 && d2.ordered !== c2 ? jg.setNodes(i2, { level: u2 - 1, ordered: !c2 }) : jg.setNodes(i2, { level: u2 - 1 });
        } else jg.setNodes(i2, { type: "paragraph", ordered: void 0, level: void 0 });
      }
      else t2(n3);
    }
    else t2(n3);
  }, i2.handleTab = function() {
    var e6, t3, r3, o3, a2 = i2.selection;
    if (null != a2) {
      if (fg.isCollapsed(a2)) {
        var s2 = _y.getSelectedNodeByType(i2, "list-item");
        if (null == s2) return void n2();
        if (0 === a2.focus.offset) {
          var u2 = s2.level, l2 = void 0 === u2 ? 0 : u2;
          return void jg.setNodes(i2, { level: l2 + 1 });
        }
      }
      if (fg.isExpanded(a2)) {
        var c2 = 0, d2 = false;
        try {
          for (var f2 = Jg(IB(i2)), p2 = f2.next(); !p2.done; p2 = f2.next()) {
            var h2 = Qg(p2.value, 1)[0];
            "list-item" === _y.getNodeType(h2) ? c2 += 1 : d2 = true;
          }
        } catch (t4) {
          e6 = { error: t4 };
        } finally {
          try {
            p2 && !p2.done && (t3 = f2.return) && t3.call(f2);
          } finally {
            if (e6) throw e6.error;
          }
        }
        if (d2 || c2 <= 1) return void n2();
        try {
          for (var g2 = Jg(IB(i2)), v2 = g2.next(); !v2.done; v2 = g2.next()) {
            var m2 = Qg(v2.value, 2), y2 = (h2 = m2[0], m2[1]), b2 = h2.level;
            l2 = void 0 === b2 ? 0 : b2;
            jg.setNodes(i2, { level: l2 + 1 }, { at: y2 });
          }
        } catch (e7) {
          r3 = { error: e7 };
        } finally {
          try {
            v2 && !v2.done && (o3 = g2.return) && o3.call(g2);
          } finally {
            if (r3) throw r3.error;
          }
        }
      } else n2();
    } else n2();
  }, i2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), n3 = t3[0], o3 = t3[1], a2 = _y.getNodeType(n3);
    return "bulleted-list" !== a2 && "numbered-list" !== a2 || jg.unwrapNodes(i2, { at: o3 }), r2([n3, o3]);
  }, i2;
}, menus: [NB, BB], elemsToHtml: [SB], parseElemsHtml: [FB, kB] };
YE("en", { tableModule: { modal: { border: "Border", borderWidth: "Width", bgColor: "Back color", align: "Text Align", ok: "OK" }, color: { default: "Default color", clear: "Clear back color" }, borderStyle: { none: "None", solid: "Solid", dotted: "Dotted", dashed: "Dashed", double: "Double", groove: "Groove", ridge: "Ridge", inset: "Inset", outset: "Outset" }, deleteCol: "Delete column", deleteRow: "Delete row", deleteTable: "Delete table", widthAuto: "Fit width", insertCol: "Insert column", insertRow: "Insert row", insertTable: "Insert table", header: "Header", mergeCell: "merge cell", splitCell: "split cell", tableProperty: "Table property", cellProperty: "Cell property" } }), YE("zh-CN", { tableModule: { modal: { border: "边框", borderWidth: "宽度", bgColor: "背景色", align: "对齐方式", ok: "确定" }, color: { default: "默认颜色", clear: "清除背景色" }, borderStyle: { none: "无样式", solid: "实线", dotted: "点状虚线", dashed: "虚线", double: "双线", groove: "凹槽边框", ridge: "菱形边框", inset: "凹边框", outset: "凸边框" }, deleteCol: "删除列", deleteRow: "删除行", deleteTable: "删除表格", widthAuto: "适应宽度", insertCol: "插入列", insertRow: "插入行", insertTable: "插入表格", header: "表头", mergeCell: "合并单元格", splitCell: "拆分单元格", tableProperty: "表格属性", cellProperty: "单元格属性" } });
var RB = { type: "table", elemToHtml: function(e5, t2) {
  var n2 = e5, r2 = n2.width, o2 = void 0 === r2 ? "auto" : r2, i2 = n2.columnWidths, a2 = n2.height, s2 = void 0 === a2 ? "auto" : a2, u2 = null == i2 ? void 0 : i2.map(function(e6) {
    return "<col width=".concat(e6, "></col>");
  }).join(""), l2 = u2 ? '<colgroup contentEditable="false">'.concat(u2, "</colgroup>") : "";
  return '<table style="width: '.concat(o2, ";table-layout: fixed;height:").concat(s2, '">').concat(l2, "<tbody>").concat(t2, "</tbody></table>");
} }, LB = { type: "table-row", elemToHtml: function(e5, t2) {
  var n2 = e5.height, r2 = n2 ? ' style="height: '.concat(n2, 'px"') : "";
  return "<tr".concat(r2, ">").concat(t2, "</tr>");
} }, MB = { type: "table-cell", elemToHtml: function(e5, t2) {
  var n2 = e5, r2 = n2.colSpan, o2 = void 0 === r2 ? 1 : r2, i2 = n2.rowSpan, a2 = void 0 === i2 ? 1 : i2, s2 = n2.isHeader, u2 = void 0 !== s2 && s2, l2 = n2.width, c2 = void 0 === l2 ? "auto" : l2, d2 = n2.hidden;
  if (void 0 !== d2 && d2) return "";
  var f2 = u2 ? "th" : "td";
  return "<".concat(f2, ' colSpan="').concat(o2, '" rowSpan="').concat(a2, '" width="').concat(c2, '">').concat(t2, "</").concat(f2, ">");
} }, jB = '<svg viewBox="0 0 1024 1024"><path d="M236.8 128L896 787.2V128H236.8z m614.4 704L192 172.8V832h659.2zM192 64h704c38.4 0 64 25.6 64 64v704c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V128c0-38.4 25.6-64 64-64z"></path></svg>', HB = { blocks: { td: "table-cell", th: "table-cell", content: "paragraph", tr: "table-row", table: "table", tbody: "table-body" } };
function zB(e5) {
  for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  var r2 = HB, o2 = t2.map(function(e6) {
    var t3;
    return null === (t3 = null == r2 ? void 0 : r2.blocks) || void 0 === t3 ? void 0 : t3[e6];
  });
  return function(e6) {
    return (function(e7) {
      return !Kh.isEditor(e7) && $h.isElement(e7) && "type" in e7;
    })(e6) && o2.includes(e6.type);
  };
}
function $B(e5, t2) {
  for (var n2 = Qg(t2, 2), r2 = n2[0], o2 = n2[1], i2 = [], a2 = 2; a2 < arguments.length; a2++) i2[a2 - 2] = arguments[a2];
  var s2 = Qg(eg.common(e5, r2, o2), 2), u2 = s2[0], l2 = s2[1];
  return !!zB.apply(void 0, ev([e5], Qg(i2), false))(u2, l2) || !!Kh.above(e5, { match: zB.apply(void 0, ev([e5], Qg(i2), false)), at: l2 });
}
function UB(e5, t2) {
  var n2, r2;
  void 0 === t2 && (t2 = {});
  var o2 = [];
  try {
    for (var i2 = Jg((function(e6, t3) {
      var n3, r3, o3, i3, a3, s3, u3, l3, c3, d3, f3, p3, h3, g3, v3, m3, y3, b3;
      return void 0 === t3 && (t3 = {}), Zg(this, function(E3) {
        switch (E3.label) {
          case 0:
            if (n3 = Qg(Kh.nodes(e6, { match: zB(e6, "table"), at: t3.at }), 1), !(r3 = n3[0])) return [2, []];
            o3 = Qg(r3, 2), i3 = o3[1], E3.label = 1;
          case 1:
            E3.trys.push([1, 6, 7, 8]), a3 = Jg(Kh.nodes(e6, { match: zB(e6, "table"), at: i3 })), s3 = a3.next(), E3.label = 2;
          case 2:
            if (s3.done) return [3, 5];
            u3 = Qg(s3.value, 2), l3 = u3[1], c3 = [];
            try {
              for (y3 = void 0, d3 = Jg(Kh.nodes(e6, { match: zB(e6, "tr"), at: l3 })), f3 = d3.next(); !f3.done; f3 = d3.next()) p3 = Qg(f3.value, 2), h3 = p3[1], c3.push(ev([], Qg(Kh.nodes(e6, { match: zB(e6, "th", "td"), at: h3 })), false));
            } catch (e7) {
              y3 = { error: e7 };
            } finally {
              try {
                f3 && !f3.done && (b3 = d3.return) && b3.call(d3);
              } finally {
                if (y3) throw y3.error;
              }
            }
            return [4, c3];
          case 3:
            E3.sent(), E3.label = 4;
          case 4:
            return s3 = a3.next(), [3, 2];
          case 5:
            return [3, 8];
          case 6:
            return g3 = E3.sent(), v3 = { error: g3 }, [3, 8];
          case 7:
            try {
              s3 && !s3.done && (m3 = a3.return) && m3.call(a3);
            } finally {
              if (v3) throw v3.error;
            }
            return [7];
          case 8:
            return [2];
        }
      });
    })(e5, { at: t2.at })), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      for (var s2 = a2.value, u2 = [], l2 = 0, c2 = 0; c2 < s2.length; c2 += 1) s2[c2] && (l2 = Math.max(l2, s2[c2].length));
      for (c2 = 0; c2 < s2.length; c2 += 1) if (u2[c2] || (u2[c2] = []), s2[c2]) {
        for (var d2 = 0; d2 < s2[c2].length; d2 += 1) if (s2[c2][d2] && s2[c2][d2][0]) {
          for (var f2 = Qg(s2[c2][d2], 1)[0], p2 = f2.rowSpan, h2 = void 0 === p2 ? 1 : p2, g2 = f2.colSpan, v2 = void 0 === g2 ? 1 : g2, m2 = d2; u2[c2] && u2[c2][m2]; ) m2 += 1;
          for (var y2 = 0; y2 < v2; y2 += 1) for (var b2 = 0; b2 < h2; b2 += 1) {
            var E2 = c2 + b2, C2 = m2 + y2;
            u2[E2] || (u2[E2] = []), u2[E2][C2] || (u2[E2][C2] = [s2[c2][d2], { rtl: y2 + 1, ltr: v2 - y2, ttb: b2 + 1, btt: h2 - b2 }]);
          }
        }
      }
      o2.push.apply(o2, ev([], Qg(u2), false));
    }
  } catch (e6) {
    n2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (r2 = i2.return) && r2.call(i2);
    } finally {
      if (n2) throw n2.error;
    }
  }
  return o2;
}
var VB = (function() {
  function e5(e6, t2) {
    this.x = e6, this.y = t2;
  }
  return e5.valueOf = function(e6, t2) {
    return new this(e6, t2);
  }, e5.equals = function(e6, t2) {
    return e6.x === t2.x && e6.y === t2.y;
  }, e5;
})();
function WB(e5) {
  return e5.length ? e5[0].tagName.toLowerCase() : "";
}
function GB(e5, t2) {
  for (var n2 = "", r2 = (e5.attr("style") || "").split(";"), o2 = r2.length, i2 = 0; i2 < o2; i2 += 1) {
    var a2 = r2[i2];
    if (a2) {
      var s2 = a2.split(":");
      s2[0].trim() === t2 && (n2 = s2[1].trim());
    }
  }
  return n2;
}
Nm && am.fn && (am.fn.append = Nm), gm && am.fn && (am.fn.on = gm), jm && am.fn && (am.fn.focus = jm), cm && am.fn && (am.fn.attr = cm), hm && am.fn && (am.fn.val = hm), Am && am.fn && (am.fn.html = Am), pm && am.fn && (am.fn.dataset = pm), sm && am.fn && (am.fn.addClass = sm), um && am.fn && (am.fn.removeClass = um), Im && am.fn && (am.fn.children = Im), wm && am.fn && (am.fn.each = wm), Fm && am.fn && (am.fn.find = Fm), fm && am.fn && (am.fn.data = fm), Em && am.fn && (am.fn.hide = Em), Cm && am.fn && (am.fn.show = Cm);
var qB = /* @__PURE__ */ new WeakMap(), KB = /* @__PURE__ */ new WeakMap(), YB = (function() {
  function e5() {
    this.title = QE("tableModule.tableProperty"), this.iconSvg = '<svg viewBox="0 0 20 20"><path d="M8 2v5h4V2h1v5h5v1h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5H7v-5H2v-1h5V8H2V7h5V2h1zm4 6H8v4h4V8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM17 1a2 2 0 0 1 2 2v9.475l-.85-.124-.857-1.736a2.048 2.048 0 0 0-.292-.44L17 3H3v14h7.808l.402.392L10.935 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14z"/></svg>', this.tag = "button", this.showModal = true, this.modalWidth = 300, this.menu = "table", this.borderStyle = [{ value: "none", label: QE("tableModule.borderStyle.none") }, { value: "solid", label: QE("tableModule.borderStyle.solid") }, { value: "dotted", label: QE("tableModule.borderStyle.dotted") }, { value: "dashed", label: QE("tableModule.borderStyle.dashed") }, { value: "double", label: QE("tableModule.borderStyle.double") }, { value: "groove", label: QE("tableModule.borderStyle.groove") }, { value: "ridge", label: QE("tableModule.borderStyle.ridge") }, { value: "inset", label: QE("tableModule.borderStyle.inset") }, { value: "outset", label: QE("tableModule.borderStyle.outset") }], this.textAlignOptions = [{ value: "left", label: QE("justify.left"), svg: '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>' }, { value: "center", label: QE("justify.center"), svg: '<svg viewBox="0 0 1024 1024"><path d="M870.4 793.6v102.4H153.6v-102.4h716.8z m102.4-230.4v102.4H51.2v-102.4h921.6z m-102.4-230.4v102.4H153.6v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>' }, { value: "right", label: QE("justify.right"), svg: '<svg viewBox="0 0 1024 1024"><path d="M972.8 793.6v102.4H256v-102.4h716.8z m0-230.4v102.4H51.2v-102.4h921.6z m0-230.4v102.4H256v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>' }, { value: "justify", label: QE("justify.justify"), svg: '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z m0 192h1024v128H0z"></path></svg>' }];
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == _y.getSelectedNodeByType(e6, "table");
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.getModalContentNode = function(e6) {
    return Qg(Kh.nodes(e6, { match: zB(e6, "table") }), 1)[0];
  }, e5.prototype.getModalPositionNode = function(e6) {
    return null;
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = this.getModalContentNode(e6);
    if (!n2) return null;
    var r2 = Qg(n2, 2), o2 = r2[0], i2 = r2[1], a2 = am('<div>\n      <label class="babel-container">\n        <span>'.concat(QE("tableModule.modal.border"), '</span>\n        <span class="babel-container-border">\n          <select name="borderStyle">\n            ').concat(this.borderStyle.map(function(e7) {
      return '<option value="'.concat(e7.value, '">').concat(e7.label, "</option>");
    }).join(""), '\n          </select>\n          <span class="color-group" data-mark="color">\n            <span class="color-group-block"></span>\n            <input name="borderColor" type="hidden">\n          </span>\n          <input name="borderWidth" type="number" placeholder="').concat(QE("tableModule.modal.borderWidth"), '">\n        </span>\n      </label>\n      <div class="babel-container">\n        <span>').concat(QE("tableModule.modal.bgColor"), '</span>\n        <span class="babel-container-background">\n          <span class="color-group" data-mark="bgColor">\n            <span class="color-group-block"></span>\n            <input name="backgroundColor" type="hidden">\n          </span>\n        </span>\n      </div>\n      <label class="babel-container">\n        <span>').concat(QE("tableModule.modal.align"), '</span>\n        <span class="babel-container-align">\n          <select name="textAlign">\n            ').concat(this.textAlignOptions.map(function(e7) {
      return '<option value="'.concat(e7.value, '">').concat(e7.label, "</option>");
    }).join(""), '\n          </select>\n        </span>\n      </label>\n      <div class="button-container">\n        <button type="button">').concat(QE("tableModule.modal.ok"), "</button>\n      </div>\n    </div>"));
    a2.find("[name]").each(function(e7) {
      am(e7).val(o2[am(e7).attr("name")]);
    });
    var s2 = function(e7, t3) {
      t3 ? am(".color-group-block", e7).css("background-color", t3).empty() : am(".color-group-block", e7).css("background-color", "").html(jB);
    };
    return a2.find(".color-group").each(function(n3) {
      var r3 = am('[type="hidden"]', n3).val() || "";
      s2(n3, r3);
      var o3 = am(n3);
      o3.on("click", function() {
        a2.find(".color-group .w-e-drop-panel").hide();
        var i3 = o3.data("panel");
        i3 ? i3.show() : (i3 = t2.getPanelContentElem(e6, { mark: o3.data("mark"), selectedColor: r3, callback: function(e7) {
          am('[type="hidden"]', n3).val(e7 || ""), s2(n3, e7), i3.hide();
        } }), o3.append(i3), o3.data("panel", i3));
      });
    }), a2.find("button").on("click", function() {
      var n3 = Array.from(a2.find("[name]")).reduce(function(e7, t3) {
        return e7[am(t3).attr("name")] = am(t3).val(), e7;
      }, {}), r3 = qB.get(e6);
      "cell" === t2.menu && (null == r3 ? void 0 : r3.length) ? r3.forEach(function(t3) {
        t3.forEach(function(t4) {
          jg.setNodes(e6, n3, { at: t4[0][1] });
        });
      }) : jg.setNodes(e6, n3, { at: i2 }), setTimeout(function() {
        e6.focus();
      });
    }), a2[0];
  }, e5.prototype.getPanelContentElem = function(e6, t2) {
    var n2 = t2.mark, r2 = t2.selectedColor, o2 = t2.callback, i2 = am('<ul class="w-e-panel-content-color"></ul>');
    i2.on("click", "li", function(e7) {
      var t3 = e7.target;
      if (t3) {
        e7.preventDefault(), e7.stopPropagation();
        var n3 = am(t3).attr("data-value");
        o2(n3);
      }
    });
    var a2 = e6.getMenuConfig(n2).colors;
    (void 0 === a2 ? [] : a2).forEach(function(e7) {
      var t3 = am('<div class="color-block" data-value="'.concat(e7, '"></div>'));
      t3.css("background-color", e7);
      var n3 = am('<li data-value="'.concat(e7, '"></li>'));
      r2 === e7 && n3.addClass("active"), n3.append(t3), i2.append(n3);
    });
    var s2 = "";
    "color" === n2 && (s2 = QE("tableModule.color.default")), "bgColor" === n2 && (s2 = QE("tableModule.color.clear"));
    var u2 = am('\n      <li data-value="" class="clear">\n        '.concat(jB, "\n        ").concat(s2, "\n      </li>\n    "));
    i2.prepend(u2);
    var l2 = am('<div class="w-e-drop-panel"></div>');
    return l2.append(i2), l2;
  }, e5;
})(), XB = (function(e5) {
  function t2() {
    var t3 = e5.apply(this, ev([], Qg(arguments), false)) || this;
    return t3.title = QE("tableModule.cellProperty"), t3.iconSvg = '<svg viewBox="0 0 20 20"><path d="m11.105 18-.17 1H2.5A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v9.975l-.85-.124-.15-.302V8h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5h3.105zM2 12h5V8H2v4zm10-4H8v4h4V8zM2 2v5h5V2H2zm0 16h5v-5H2v5zM13 7h5V2h-5v5zM8 2v5h4V2H8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM13 6a1 1 0 0 1 1 1v3.172a2.047 2.047 0 0 0-.293.443l-.858 1.736-1.916.28-.151.027A1.976 1.976 0 0 0 9.315 14H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm-1 2H8v4h4V8z"/></svg>', t3.tag = "button", t3.showModal = true, t3.modalWidth = 300, t3.menu = "cell", t3;
  }
  return Kg(t2, e5), t2.prototype.getModalContentNode = function(e6) {
    return Qg(Kh.nodes(e6, { match: zB(e6, "td") }), 1)[0];
  }, t2;
})(YB), ZB = (function() {
  function e5() {
    this.title = QE("tableModule.deleteCol"), this.iconSvg = '<svg viewBox="0 0 1048 1024"><path d="M327.68 510.976L393.216 445.44v-13.1072L327.68 366.7968V510.976z m327.68-78.4384l65.536-65.536V507.904L655.36 442.368v-9.8304z m393.216 484.9664V0H0v917.504h1048.576z m-65.536-131.072h-262.144v-52.4288l-13.1072 13.1072-52.4288-52.4288v91.7504H393.216v-91.7504l-52.4288 52.4288-13.1072-13.1072v52.4288H65.536V65.536H327.68v121.2416l36.0448-36.0448 29.4912 29.4912V62.2592h262.144V180.224l49.152-49.152 16.384 16.384V62.2592h262.144V786.432z m-294.912-108.1344l-160.5632-160.5632-167.1168 167.1168-78.6432-78.6432 167.1168-167.1168L288.3584 278.528l78.6432-78.6432 160.5632 160.5632 163.84-163.84 78.6432 78.6432-163.84 163.84 160.5632 160.5632-78.6432 78.6432z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "table-cell"));
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = Qg(Kh.nodes(e6, { match: function(e7) {
        return _y.checkNodeType(e7, "table-cell");
      }, universal: true }), 1), r2 = Qg(n2[0], 2), o2 = r2[0], i2 = r2[1], a2 = _y.getParentNode(e6, o2), s2 = (null == a2 ? void 0 : a2.children.length) || 0;
      if (!a2 || s2 <= 1) jg.removeNodes(e6, { mode: "highest" });
      else if (null != _y.getParentNode(e6, a2)) {
        var u2 = UB(e6), l2 = 0;
        e: for (var c2 = 0; c2 < u2.length; c2 += 1) for (var d2 = 0; d2 < u2[c2].length; d2 += 1) {
          var f2 = Qg(u2[c2][d2], 1), p2 = Qg(f2[0], 2)[1];
          if (og.equals(i2, p2)) {
            l2 = d2;
            break e;
          }
        }
        Kh.withoutNormalizing(e6, function() {
          for (var t3, n3, r3 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set(), i3 = 0; i3 < u2.length; i3 += 1) if (u2[i3] && u2[i3][l2]) {
            var a3 = Qg(u2[i3][l2], 2), s3 = Qg(a3[0], 2)[1], c3 = a3[1], d3 = c3.rtl, f3 = c3.ltr, p3 = c3.ttb, h2 = c3.btt, g2 = s3.join(",");
            if (d3 > 1 || f3 > 1 || p3 > 1 || h2 > 1) {
              var v2 = i3 - (p3 - 1), m2 = l2 - (d3 - 1);
              if (v2 < 0 || v2 >= u2.length || !u2[v2] || !u2[v2][m2]) continue;
              var y2 = Qg(u2[v2][m2], 1), b2 = Qg(y2[0], 2), E2 = b2[0], C2 = b2[1], D2 = C2.join(",");
              if (!o3.has(D2)) {
                o3.add(D2);
                var w2 = E2.rowSpan, S2 = void 0 === w2 ? 1 : w2, A2 = E2.colSpan, x2 = void 0 === A2 ? 1 : A2, O2 = Math.max(x2 - 1, 1);
                jg.setNodes(e6, { rowSpan: S2, colSpan: O2 }, { at: C2 });
              }
            } else r3.add(g2);
          }
          var N2 = Array.from(r3);
          N2.sort(function(e7, t4) {
            var n4 = e7.split(",").map(Number), r4 = t4.split(",").map(Number);
            return n4[n4.length - 2] !== r4[r4.length - 2] ? r4[r4.length - 2] - n4[n4.length - 2] : r4[r4.length - 1] - n4[n4.length - 1];
          });
          try {
            for (var B2 = Jg(N2), T2 = B2.next(); !T2.done; T2 = B2.next()) {
              var k2 = T2.value.split(",").map(Number);
              try {
                Kh.hasPath(e6, k2) && jg.removeNodes(e6, { at: k2 });
              } catch (e7) {
                console.warn("删除单元格失败:", k2, e7);
              }
            }
          } catch (e7) {
            t3 = { error: e7 };
          } finally {
            try {
              T2 && !T2.done && (n3 = B2.return) && n3.call(B2);
            } finally {
              if (t3) throw t3.error;
            }
          }
          var F2 = Qg(Kh.nodes(e6, { match: function(e7) {
            return _y.checkNodeType(e7, "table");
          }, universal: true }), 1), I2 = F2[0];
          if (I2) {
            var P2 = Qg(I2, 2), _2 = P2[0], R2 = P2[1], L2 = _2.columnWidths, M2 = ev([], Qg(void 0 === L2 ? [] : L2), false);
            M2.splice(l2, 1), jg.setNodes(e6, { columnWidths: M2 }, { at: R2 });
          }
        });
      }
    }
  }, e5;
})(), JB = (function() {
  function e5() {
    this.title = QE("tableModule.deleteRow"), this.iconSvg = '<svg viewBox="0 0 1048 1024"><path d="M907.6736 586.5472L747.1104 425.984l163.84-163.84-78.6432-78.6432-163.84 163.84L507.904 186.7776 429.2608 262.144l163.84 163.84-167.1168 167.1168 78.6432 78.6432 167.1168-167.1168 160.5632 160.5632 75.3664-78.6432zM0 917.504V0h1048.576v917.504H0z m983.04-327.68h-22.9376l-65.536-65.536H983.04V327.68h-91.7504l65.536-65.536h26.2144V65.536H65.536v196.608h317.8496l65.536 65.536H65.536v196.608h380.1088l-65.536 65.536H65.536v196.608H983.04v-196.608z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "table-row"));
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = Qg(Kh.nodes(e6, { match: function(e7) {
        return _y.checkNodeType(e7, "table-row");
      }, universal: true }), 1), r2 = Qg(n2[0], 2), o2 = r2[0], i2 = r2[1], a2 = _y.getParentNode(e6, o2);
      if (((null == a2 ? void 0 : a2.children.length) || 0) <= 1) jg.removeNodes(e6, { mode: "highest" });
      else {
        var s2 = Qg(Kh.nodes(e6, { match: function(e7) {
          return _y.checkNodeType(e7, "table-cell");
        }, universal: true }), 1), u2 = Qg(s2[0], 2)[1], l2 = UB(e6), c2 = 0;
        e: for (var d2 = 0; d2 < l2.length; d2 += 1) for (var f2 = 0; f2 < l2[d2].length; f2 += 1) {
          var p2 = Qg(l2[d2][f2], 1), h2 = Qg(p2[0], 2)[1];
          if (og.equals(u2, h2)) {
            c2 = d2;
            break e;
          }
        }
        Kh.withoutNormalizing(e6, function() {
          for (var t3, n3, r3 = [], o3 = 0; o3 < l2[c2].length; o3 += 1) {
            var a3 = Qg(l2[c2][o3], 2), s3 = Qg(a3[0], 1)[0].hidden, u3 = a3[1], d3 = u3.ttb, f3 = u3.btt, p3 = u3.rtl;
            if (d3 > 1 || f3 > 1) {
              var h3 = c2 - (d3 - 1);
              if (h3 < 0 || h3 >= l2.length || !l2[h3] || !l2[h3][o3]) continue;
              var g2 = Qg(l2[h3][o3], 1), v2 = Qg(g2[0], 2), m2 = v2[0], y2 = v2[1], b2 = m2, E2 = b2.rowSpan, C2 = void 0 === E2 ? 1 : E2, D2 = b2.colSpan, w2 = void 0 === D2 ? 1 : D2;
              if (s3) jg.setNodes(e6, { rowSpan: Math.max(C2 - 1, 1), colSpan: w2 }, { at: y2 });
              else if (1 === d3 && 1 === p3) {
                if (c2 + 1 < l2.length && C2 > 1) {
                  var S2 = { type: "table-cell", rowSpan: C2 - 1, colSpan: w2, hidden: false, children: b2.children.map(function(e7) {
                    return Yg({}, e7);
                  }) };
                  b2.isHeader && (S2.isHeader = b2.isHeader), b2.width && (S2.width = b2.width), b2.backgroundColor && (S2.backgroundColor = b2.backgroundColor), b2.borderWidth && (S2.borderWidth = b2.borderWidth), b2.borderStyle && (S2.borderStyle = b2.borderStyle), b2.borderColor && (S2.borderColor = b2.borderColor), b2.textAlign && (S2.textAlign = b2.textAlign), r3.push({ cell: S2, columnIndex: o3 });
                } else jg.setNodes(e6, { rowSpan: Math.max(C2 - 1, 1), colSpan: w2 }, { at: y2 });
              } else jg.setNodes(e6, { rowSpan: Math.max(C2 - 1, 1), colSpan: w2 }, { at: y2 });
            }
          }
          if (jg.removeNodes(e6, { at: i2 }), r3.length > 0) {
            var A2 = i2;
            try {
              r3.sort(function(e7, t4) {
                return e7.columnIndex - t4.columnIndex;
              });
              try {
                for (var x2 = Jg(r3), O2 = x2.next(); !O2.done; O2 = x2.next()) {
                  var N2 = O2.value, B2 = N2.cell, T2 = N2.columnIndex;
                  try {
                    var k2 = ev(ev([], Qg(A2), false), [T2], false);
                    jg.insertNodes(e6, B2, { at: k2 });
                  } catch (t4) {
                    try {
                      var F2 = Qg(Kh.node(e6, A2), 1)[0].children.length, I2 = ev(ev([], Qg(A2), false), [F2], false);
                      jg.insertNodes(e6, B2, { at: I2 });
                    } catch (e7) {
                      console.warn("插入新单元格失败:", e7);
                    }
                  }
                }
              } catch (e7) {
                t3 = { error: e7 };
              } finally {
                try {
                  O2 && !O2.done && (n3 = x2.return) && n3.call(x2);
                } finally {
                  if (t3) throw t3.error;
                }
              }
            } catch (e7) {
              console.warn("插入新单元格失败:", e7);
            }
          }
        });
      }
    }
  }, e5;
})(), QB = (function() {
  function e5() {
    this.title = QE("tableModule.deleteTable"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M826.8032 356.5312c-19.328 0-36.3776 15.6928-36.3776 35.0464v524.2624c0 19.328-16 34.56-35.328 34.56H264.9344c-19.328 0-35.5072-15.3088-35.5072-34.56V390.0416c0-19.328-14.1568-35.0464-33.5104-35.0464s-33.5104 15.6928-33.5104 35.0464V915.712c0 57.9328 44.6208 108.288 102.528 108.288H755.2c57.9328 0 108.0832-50.4576 108.0832-108.288V391.4752c-0.1024-19.2512-17.1264-34.944-36.48-34.944z" p-id="9577"></path><path d="M437.1712 775.7568V390.6048c0-19.328-14.1568-35.0464-33.5104-35.0464s-33.5104 15.616-33.5104 35.0464v385.152c0 19.328 14.1568 35.0464 33.5104 35.0464s33.5104-15.7184 33.5104-35.0464zM649.7024 775.7568V390.6048c0-19.328-17.0496-35.0464-36.3776-35.0464s-36.3776 15.616-36.3776 35.0464v385.152c0 19.328 17.0496 35.0464 36.3776 35.0464s36.3776-15.7184 36.3776-35.0464zM965.0432 217.0368h-174.6176V145.5104c0-57.9328-47.2064-101.76-104.6528-101.76h-350.976c-57.8304 0-105.3952 43.8528-105.3952 101.76v71.5264H54.784c-19.4304 0-35.0464 14.1568-35.0464 33.5104 0 19.328 15.616 33.5104 35.0464 33.5104h910.3616c19.328 0 35.0464-14.1568 35.0464-33.5104 0-19.3536-15.6928-33.5104-35.1488-33.5104z m-247.3728 0H297.3952V145.5104c0-19.328 18.2016-34.7648 37.4272-34.7648h350.976c19.1488 0 31.872 15.1296 31.872 34.7648v71.5264z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == _y.getSelectedNodeByType(e6, "table");
  }, e5.prototype.exec = function(e6, t2) {
    this.isDisabled(e6) || jg.removeNodes(e6, { mode: "highest" });
  }, e5;
})(), eT = (function() {
  function e5() {
    this.title = QE("tableModule.widthAuto"), this.iconSvg = '<svg viewBox="0 0 1228 1024"><path d="M862.514337 563.200461H404.581995v121.753478a13.311987 13.311987 0 0 1-6.655993 11.468789 10.23999 10.23999 0 0 1-12.083188-1.433599l-204.799795-179.199821a13.721586 13.721586 0 0 1 0-20.479979l204.799795-179.302221a10.23999 10.23999 0 0 1 12.185588-1.535998 13.209587 13.209587 0 0 1 6.553593 11.673588v115.097485h457.932342V319.693504a11.571188 11.571188 0 0 1 18.841582-10.239989l204.799795 179.19982a13.721586 13.721586 0 0 1 0 20.47998l-204.799795 179.199821a10.23999 10.23999 0 0 1-12.185588 1.535998 13.311987 13.311987 0 0 1-6.655994-11.571188V563.200461zM136.499064 14.951409v993.893406a15.257585 15.257585 0 0 1-15.155185 15.052785H15.155185A15.155185 15.155185 0 0 1 0 1008.844815V14.951409a15.257585 15.257585 0 0 1 15.155185-15.052785h106.086294a15.155185 15.155185 0 0 1 15.257585 15.155185zM1228.798771 14.951409v993.893406a15.257585 15.257585 0 0 1-15.155185 15.052785h-106.188693a15.155185 15.155185 0 0 1-15.155185-15.052785V14.951409a15.257585 15.257585 0 0 1 15.155185-15.052785h106.086293A15.155185 15.155185 0 0 1 1228.798771 15.053809z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return false;
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "table"));
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = _y.getSelectedNodeByType(e6, "table");
      if (n2) {
        var r2 = n2.columnWidths, o2 = void 0 === r2 ? [] : r2, i2 = _y.toDOMNode(e6, n2).querySelector(".table-container");
        if (i2 && 0 !== o2.length) {
          var a2 = i2.clientWidth, s2 = o2.reduce(function(e7, t3) {
            return e7 + t3;
          }, 0), u2 = o2.map(function(e7) {
            var t3 = e7 / s2;
            return Math.floor(t3 * a2);
          }), l2 = e6.getMenuConfig("insertTable").minWidth, c2 = parseInt(String(void 0 === l2 ? 60 : l2), 10) || 60, d2 = u2.map(function(e7) {
            return Math.max(c2, e7);
          }), f2 = d2.reduce(function(e7, t3) {
            return e7 + t3;
          }, 0);
          if (f2 > a2) {
            var p2 = a2 / f2, h2 = d2.map(function(e7) {
              return Math.max(c2, Math.floor(e7 * p2));
            });
            v2 = { width: "auto", columnWidths: h2 };
            jg.setNodes(e6, v2, { mode: "highest" });
          } else {
            h2 = ev([], Qg(d2), false);
            var g2 = a2 - f2 - 1;
            g2 > 0 && h2.length > 0 && (h2[h2.length - 1] += g2);
            v2 = { width: "auto", columnWidths: h2 };
            jg.setNodes(e6, v2, { mode: "highest" });
          }
        } else {
          var v2 = { width: "auto" };
          jg.setNodes(e6, v2, { mode: "highest" });
        }
      }
    }
  }, e5;
})();
function tT(e5) {
  var t2 = e5.children || [];
  return 0 === t2.length ? [] : (t2[0] || {}).children || [];
}
function nT(e5) {
  return tT(e5).every(function(e6) {
    return !!e6.isHeader;
  });
}
var rT = (function() {
  function e5() {
    this.title = QE("tableModule.insertCol"), this.iconSvg = '<svg viewBox="0 0 1048 1024"><path d="M327.68 193.3312v186.7776H140.9024v91.7504H327.68v186.7776h88.4736V471.8592h190.0544V380.1088H416.1536V193.3312zM0 917.504V0h1048.576v917.504H0zM655.36 65.536H65.536v720.896H655.36V65.536z m327.68 0h-262.144v196.608h262.144V65.536z m0 262.144h-262.144v196.608h262.144V327.68z m0 262.144h-262.144v196.608h262.144v-196.608z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    if (null == t2) return true;
    if (!fg.isCollapsed(t2)) return true;
    var n2 = _y.getSelectedNodeByType(e6, "table");
    if (null == n2) return true;
    try {
      var r2 = Qg(Kh.nodes(e6, { match: function(e7) {
        return _y.checkNodeType(e7, "table-cell");
      }, universal: true }), 1), o2 = r2[0];
      if (!o2) return true;
      for (var i2 = Qg(o2, 2)[1], a2 = UB(e6), s2 = -1, u2 = 0; u2 < a2.length; u2 += 1) {
        for (var l2 = 0; l2 < a2[u2].length; l2 += 1) {
          var c2 = Qg(a2[u2][l2], 1), d2 = Qg(c2[0], 2)[1];
          if (og.equals(i2, d2)) {
            s2 = l2;
            break;
          }
        }
        if (-1 !== s2) break;
      }
      if (-1 === s2) return true;
      var f2 = n2.columnWidths, p2 = (void 0 === f2 ? [] : f2)[s2];
      if (p2 && p2 < 20) return true;
    } catch (e7) {
      return true;
    }
    return false;
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = Qg(Kh.nodes(e6, { match: function(e7) {
        return _y.checkNodeType(e7, "table-cell");
      }, universal: true }), 1), r2 = Qg(n2[0], 2), o2 = r2[0], i2 = r2[1], a2 = _y.getParentNode(e6, o2);
      if (null != a2) {
        var s2 = _y.getParentNode(e6, a2);
        if (null != s2) {
          for (var u2 = UB(e6), l2 = 0, c2 = 0; c2 < u2.length; c2 += 1) for (var d2 = 0; d2 < u2[c2].length; d2 += 1) {
            var f2 = Qg(u2[c2][d2], 1), p2 = Qg(f2[0], 2)[1];
            if (og.equals(i2, p2)) {
              l2 = d2;
              break;
            }
          }
          Kh.withoutNormalizing(e6, function() {
            for (var t3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set(), r3 = 0; r3 < u2.length; r3 += 1) if (u2[r3] && u2[r3][l2]) {
              var o3 = Qg(u2[r3][l2], 2);
              Qg(o3[0], 1);
              var i3 = o3[1], a3 = i3.rtl, c3 = i3.ltr, d3 = i3.ttb, f3 = i3.btt;
              if (a3 > 1 || c3 > 1 || d3 > 1 || f3 > 1) {
                var p3 = r3 - (d3 - 1), h2 = l2 - (a3 - 1);
                if (p3 < 0 || p3 >= u2.length || !u2[p3] || !u2[p3][h2]) continue;
                var g2 = Qg(u2[p3][h2], 1), v2 = Qg(g2[0], 2), m2 = v2[0], y2 = v2[1], b2 = y2.join(",");
                if (t3.has(b2)) n3.add(r3);
                else {
                  t3.add(b2);
                  var E2 = m2.rowSpan, C2 = void 0 === E2 ? 1 : E2, D2 = m2.colSpan, w2 = (void 0 === D2 ? 1 : D2) + 1;
                  m2.hidden || jg.setNodes(e6, { colSpan: w2 }, { at: y2 });
                  for (var S2 = 0; S2 < C2; S2 += 1) n3.add(p3 + S2);
                }
              }
            }
            for (r3 = 0; r3 < u2.length; r3 += 1) if (!n3.has(r3) && u2[r3] && u2[r3][l2]) {
              var A2 = { type: "table-cell", children: [{ text: "" }] };
              0 === r3 && nT(s2) && (A2.isHeader = true);
              var x2 = Qg(u2[r3][l2], 1), O2 = Qg(x2[0], 2)[1];
              jg.insertNodes(e6, A2, { at: O2 });
            }
            var N2 = Qg(Kh.nodes(e6, { match: function(e7) {
              return _y.checkNodeType(e7, "table");
            }, universal: true }), 1), B2 = N2[0];
            if (B2) {
              var T2 = Qg(B2, 2), k2 = T2[0], F2 = T2[1], I2 = k2.columnWidths, P2 = void 0 === I2 ? [] : I2, _2 = ev([], Qg(P2), false), R2 = e6.getMenuConfig("insertTable").minWidth, L2 = void 0 === R2 ? 60 : R2, M2 = P2[l2] || parseInt(L2, 10) || 60, j2 = Math.floor(M2 / 2), H2 = M2 - j2;
              _2.splice(l2, 0, j2), _2[l2 + 1] = H2, jg.setNodes(e6, { columnWidths: _2 }, { at: F2 });
            }
          });
        }
      }
    }
  }, e5;
})(), oT = (function() {
  function e5() {
    this.title = QE("tableModule.insertRow"), this.iconSvg = '<svg viewBox="0 0 1048 1024"><path d="M707.7888 521.0112h-147.456v-147.456H488.2432v147.456h-147.456v68.8128h147.456v147.456h72.0896v-147.456h147.456zM0 917.504V0h1048.576v917.504H0zM327.68 65.536H65.536v196.608H327.68V65.536z m327.68 0H393.216v196.608h262.144V65.536z m327.68 0h-262.144v196.608h262.144V65.536z m0 258.8672H65.536v462.0288H983.04V324.4032z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "table"));
  }, e5.prototype.exec = function(e6, t2) {
    var n2;
    if (!this.isDisabled(e6)) {
      var r2 = Qg(Kh.nodes(e6, { match: function(e7) {
        return _y.checkNodeType(e7, "table-cell");
      }, universal: true }), 1), o2 = Qg(r2[0], 2)[1], i2 = UB(e6), a2 = 0;
      e: for (var s2 = 0; s2 < i2.length; s2 += 1) for (var u2 = 0; u2 < i2[s2].length; u2 += 1) {
        var l2 = Qg(i2[s2][u2], 1), c2 = Qg(l2[0], 2)[1];
        if (og.equals(o2, c2)) {
          a2 = s2;
          break e;
        }
      }
      var d2 = (null === (n2 = i2[a2]) || void 0 === n2 ? void 0 : n2.length) || 0;
      0 !== d2 && Kh.withoutNormalizing(e6, function() {
        for (var t3 = a2 + 1, n3 = t3 >= 0 && t3 < i2.length, r3 = [], s3 = 0; n3 && s3 < i2[a2].length; s3 += 1) {
          var u3 = Qg(i2[a2][s3], 2)[1], l3 = u3.ttb, c3 = u3.btt;
          if (l3 > 1 || c3 > 1) {
            var f2 = a2 - (l3 - 1);
            if (f2 < 0 || f2 >= i2.length || !i2[f2] || !i2[f2][s3]) continue;
            var p2 = Qg(i2[f2][s3], 1), h2 = Qg(p2[0], 2), g2 = h2[0], v2 = h2[1], m2 = g2.rowSpan || 1;
            r3.push(s3), g2.hidden || jg.setNodes(e6, { rowSpan: m2 + 1 }, { at: v2 });
          }
        }
        for (var y2 = (e6.getMenuConfig("insertTable") || {}).minRowHeight, b2 = { type: "table-row", children: [], height: parseInt((void 0 === y2 ? 30 : y2).toString(), 10) || 30 }, E2 = 0; E2 < d2; E2 += 1) if (!r3.includes(E2)) {
          b2.children.push({ type: "table-cell", children: [{ text: "" }] });
        }
        var C2 = og.parent(o2), D2 = og.next(C2);
        jg.insertNodes(e6, b2, { at: D2 });
      });
    }
  }, e5;
})();
var iT = (function() {
  function e5() {
    this.title = QE("tableModule.insertTable"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M0 64v896h1024V64H0z m384 576v-192h256v192h-256z m256 64v192h-256v-192h256z m0-512v192h-256V192h256zM320 192v192H64V192h256z m-256 256h256v192H64v-192z m640 0h256v192h-256v-192z m0-64V192h256v192h-256zM64 704h256v192H64v-192z m640 192v-192h256v192h-256z"></path></svg>', this.tag = "button", this.showDropPanel = true, this.$content = null;
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || !!_y.getSelectedElems(e6).some(function(t3) {
      var n2 = _y.getNodeType(t3);
      return "pre" === n2 || ("table" === n2 || ("list-item" === n2 || !!e6.isVoid(t3)));
    }));
  }, e5.prototype.getPanelContentElem = function(e6) {
    var t2 = this;
    if (this.$content) return this.$content[0];
    for (var n2 = am('<div class="w-e-panel-content-table"></div>'), r2 = am("<span>0 &times; 0</span>"), o2 = am("<table></table>"), i2 = 0; i2 < 10; i2 += 1) {
      for (var a2 = am("<tr></tr>"), s2 = 0; s2 < 10; s2 += 1) {
        var u2 = am("<td></td>");
        u2.attr("data-x", s2.toString()), u2.attr("data-y", i2.toString()), a2.append(u2), u2.on("mouseenter", function(e7) {
          var t3 = e7.target;
          if (null != t3) {
            var n3 = am(t3).dataset(), i3 = n3.x, a3 = n3.y;
            r2[0].innerHTML = "".concat(i3 + 1, " &times; ").concat(a3 + 1), o2.children().each(function(e8) {
              am(e8).children().each(function(e9) {
                var t4 = am(e9), n4 = t4.dataset(), r3 = n4.x, o3 = n4.y;
                r3 <= i3 && o3 <= a3 ? t4.addClass("active") : t4.removeClass("active");
              });
            });
          }
        }), u2.on("click", function(n3) {
          n3.preventDefault();
          var r3 = n3.target;
          if (null != r3) {
            var o3 = am(r3).dataset(), i3 = o3.x, a3 = o3.y;
            t2.insertTable(e6, a3 + 1, i3 + 1);
          }
        });
      }
      o2.append(a2);
    }
    return n2.append(o2), n2.append(r2), this.$content = n2, n2[0];
  }, e5.prototype.insertTable = function(e6, t2, n2) {
    var r2 = parseInt(t2, 10), o2 = parseInt(n2, 10);
    if (r2 && o2 && !(r2 <= 0 || o2 <= 0)) {
      if (_y.isSelectedEmptyParagraph(e6) && jg.removeNodes(e6, { mode: "highest" }), 0 === e6.children.length) {
        jg.insertNodes(e6, { type: "paragraph", children: [{ text: "" }] }, { mode: "highest" });
      }
      var i2 = (function(e7, t3, n3) {
        for (var r3, o3 = [], i3 = e7.getMenuConfig("insertTable"), a2 = i3.minWidth, s2 = void 0 === a2 ? 60 : a2, u2 = i3.minRowHeight, l2 = void 0 === u2 ? 30 : u2, c2 = i3.tableFullWidth, d2 = i3.tableHeader, f2 = Array(n3).fill(parseInt(s2, 10) || 60), p2 = 0; p2 < t3; p2 += 1) {
          for (var h2 = [], g2 = 0; g2 < n3; g2 += 1) {
            var v2 = { type: "table-cell", children: [{ text: "" }] };
            0 === p2 && (v2.isHeader = null === (r3 = null == d2 ? void 0 : d2.selected) || void 0 === r3 || r3), h2.push(v2);
          }
          o3.push({ type: "table-row", children: h2, height: parseInt(l2, 10) || 30 });
        }
        return { type: "table", width: (null == c2 ? void 0 : c2.selected) ? "100%" : "auto", children: o3, columnWidths: f2 };
      })(e6, r2, o2);
      jg.insertNodes(e6, i2, { mode: "highest" });
    }
  }, e5;
})(), aT = { isInTable: function(e5, t2) {
  return void 0 === t2 && (t2 = {}), !!Qg(Kh.nodes(e5, { match: zB(e5, "table"), at: t2.at }), 1)[0];
}, selection: function(e5) {
  var t2, n2, r2, o2, i2, a2, s2, u2;
  return Zg(this, function(l2) {
    switch (l2.label) {
      case 0:
        t2 = qB.get(e5), n2 = 0, l2.label = 1;
      case 1:
        if (!(t2 && n2 < t2.length)) return [3, 4];
        for (r2 = [], o2 = 0; o2 < t2[n2].length; o2 += 1) i2 = Qg(t2[n2][o2], 2), a2 = i2[0], s2 = i2[1], u2 = s2.ltr, 1 === s2.ttb && r2.push(a2), o2 += u2 - 1;
        return [4, r2];
      case 2:
        l2.sent(), l2.label = 3;
      case 3:
        return n2 += 1, [3, 1];
      case 4:
        return [2];
    }
  });
}, unselect: function(e5) {
  KB.delete(e5), qB.delete(e5);
}, isSelected: function(e5, t2) {
  var n2 = KB.get(e5);
  return !!n2 && n2.has(t2);
} }, sT = (function() {
  function e5() {
    this.title = QE("tableModule.mergeCell"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M482.2 508.4 331.3 389c-3-2.4-7.3-.2-7.3 3.6V478H184V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H144c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H184V546h140v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM880 116H596c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H700v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3.2 7.3-3.6V546h140v294H636V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z"/></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return !this.canMerge(e6);
  }, e5.prototype.exec = function(e6, t2) {
    this.isDisabled(e6) || (this.merge(e6), aT.unselect(e6));
  }, e5.prototype.canMerge = function(e6) {
    var t2 = qB.get(e6);
    if (!t2 || !t2.length) return false;
    var n2 = Qg(t2[t2.length - 1][t2[t2.length - 1].length - 1], 1), r2 = Qg(n2[0], 2)[1], o2 = Qg(t2[0][0], 1);
    return !!$B(e6, [Qg(o2[0], 2)[1], r2], "table");
  }, e5.prototype.merge = function(e6) {
    if (this.canMerge(e6)) {
      var t2 = qB.get(e6);
      if (t2 && t2.length) {
        var n2 = Qg(t2[0][0], 1), r2 = Qg(n2[0], 2)[1], o2 = Qg(eg.children(e6, r2, { reverse: true }), 1), i2 = Qg(o2[0], 2)[1];
        Kh.withoutNormalizing(e6, function() {
          for (var n3, o3, a2, s2, u2, l2, c2 = /* @__PURE__ */ new Map(), d2 = [], f2 = 1 / 0, p2 = -1 / 0, h2 = 1 / 0, g2 = -1 / 0, v2 = 0; v2 < t2.length; v2 += 1) for (var m2 = 0; m2 < t2[v2].length; m2 += 1) {
            var y2 = Qg(t2[v2][m2], 2), b2 = Qg(y2[0], 2), E2 = b2[0], C2 = b2[1], D2 = y2[1].ttb, w2 = C2.join(",");
            if (1 === D2 && !c2.has(w2)) {
              c2.set(w2, { path: C2, x: v2, y: m2, element: E2 });
              var S2 = E2.rowSpan, A2 = void 0 === S2 ? 1 : S2, x2 = E2.colSpan, O2 = v2, N2 = v2 + A2 - 1, B2 = m2, T2 = m2 + (void 0 === x2 ? 1 : x2) - 1;
              f2 = Math.min(f2, O2), p2 = Math.max(p2, N2), h2 = Math.min(h2, B2), g2 = Math.max(g2, T2);
            }
          }
          var k2 = p2 - f2 + 1, F2 = g2 - h2 + 1;
          try {
            for (var I2 = Jg(c2), P2 = I2.next(); !P2.done; P2 = I2.next()) {
              C2 = Qg(P2.value, 2)[1].path;
              og.equals(r2, C2) || d2.push(C2);
            }
          } catch (e7) {
            n3 = { error: e7 };
          } finally {
            try {
              P2 && !P2.done && (o3 = I2.return) && o3.call(I2);
            } finally {
              if (n3) throw n3.error;
            }
          }
          d2.sort(function(e7, t3) {
            for (var n4 = 0; n4 < Math.min(e7.length, t3.length); n4 += 1) if (e7[n4] !== t3[n4]) return t3[n4] - e7[n4];
            return t3.length - e7.length;
          });
          try {
            for (var _2 = Jg(d2), R2 = _2.next(); !R2.done; R2 = _2.next()) {
              C2 = R2.value;
              try {
                if (!Kh.hasPath(e6, C2)) continue;
                try {
                  for (var L2 = (u2 = void 0, Jg(eg.children(e6, C2, { reverse: true }))), M2 = L2.next(); !M2.done; M2 = L2.next()) {
                    var j2 = Qg(M2.value, 2)[1];
                    jg.moveNodes(e6, { to: og.next(i2), at: j2 });
                  }
                } catch (e7) {
                  u2 = { error: e7 };
                } finally {
                  try {
                    M2 && !M2.done && (l2 = L2.return) && l2.call(L2);
                  } finally {
                    if (u2) throw u2.error;
                  }
                }
                jg.removeNodes(e6, { at: C2 });
              } catch (e7) {
              }
            }
          } catch (e7) {
            a2 = { error: e7 };
          } finally {
            try {
              R2 && !R2.done && (s2 = _2.return) && s2.call(_2);
            } finally {
              if (a2) throw a2.error;
            }
          }
          jg.setNodes(e6, { rowSpan: k2, colSpan: F2 }, { at: r2 });
        });
      }
    }
  }, e5;
})(), uT = (function() {
  function e5() {
    this.title = QE("tableModule.splitCell"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M362.667 494.933v53.334l25.6-25.6zm0-241.066L460.8 352V78.933H57.6v98.134h305.067zm0 535.466v57.6H57.6v98.134h403.2V691.2zM661.333 494.933v53.334l-25.6-25.6zm0-241.066L563.2 352V78.933h403.2v98.134H661.333zm0 535.466v57.6H966.4v98.134H563.2V691.2z"/><path d="M753.067 341.333 693.333 281.6 512 460.8 330.667 281.6l-59.734 59.733 181.334 181.334L270.933 704l59.734 59.733L512 582.4l181.333 181.333L753.067 704 571.733 522.667z"/></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = Qg(Kh.nodes(e6, { match: function(e7) {
      return _y.checkNodeType(e7, "table-cell");
    } }), 1), n2 = t2[0];
    if (!n2) return true;
    var r2 = Qg(n2, 1)[0], o2 = r2.rowSpan, i2 = void 0 === o2 ? 1 : o2, a2 = r2.colSpan;
    return !(i2 > 1 || (void 0 === a2 ? 1 : a2) > 1);
  }, e5.prototype.exec = function(e6, t2) {
    this.isDisabled(e6) || this.split(e6);
  }, e5.prototype.split = function(e6, t2) {
    void 0 === t2 && (t2 = {});
    var n2 = Qg(Kh.nodes(e6, { match: zB(e6, "table", "th", "td"), at: t2.at }), 2), r2 = n2[0], o2 = n2[1];
    if (r2 && o2) {
      var i2 = nT(Qg(r2, 1)[0]), a2 = Qg(o2, 2), s2 = a2[0], u2 = a2[1], l2 = s2.rowSpan, c2 = void 0 === l2 ? 1 : l2, d2 = s2.colSpan, f2 = void 0 === d2 ? 1 : d2;
      1 === c2 && 1 === f2 || Kh.withoutNormalizing(e6, function() {
        jg.setNodes(e6, { rowSpan: 1, colSpan: 1 }, { at: u2 });
        for (var t3 = 1; t3 < f2; t3 += 1) {
          var n3 = { type: "table-cell", children: [{ text: "" }] };
          0 === u2[u2.length - 2] && i2 && (n3.isHeader = true);
          var r3 = u2.slice(0, -1), o3 = u2[u2.length - 1] + t3, a3 = ev(ev([], Qg(r3), false), [o3], false);
          try {
            jg.insertNodes(e6, n3, { at: a3 });
          } catch (t4) {
            try {
              var s3 = Qg(Kh.node(e6, r3), 1)[0].children.length, l3 = ev(ev([], Qg(r3), false), [s3], false);
              jg.insertNodes(e6, n3, { at: l3 });
            } catch (e7) {
              console.warn("插入同行单元格失败: ".concat(e7 instanceof Error ? e7.message : String(e7)));
            }
          }
        }
        for (var d3 = 1; d3 < c2; d3 += 1) {
          var p2 = u2[u2.length - 2] + d3, h2 = ev(ev([], Qg(u2.slice(0, -2)), false), [p2], false);
          try {
            var g2 = Qg(Kh.node(e6, h2), 1)[0];
            if (!g2) {
              console.warn("目标行 ".concat(p2, " 不存在"));
              continue;
            }
            for (t3 = 0; t3 < f2; t3 += 1) {
              n3 = { type: "table-cell", children: [{ text: "" }] }, o3 = u2[u2.length - 1] + t3, a3 = ev(ev([], Qg(h2), false), [o3], false);
              try {
                var v2 = g2.children.length;
                if (o3 >= v2) {
                  var m2 = ev(ev([], Qg(h2), false), [v2], false);
                  jg.insertNodes(e6, n3, { at: m2 });
                } else jg.insertNodes(e6, n3, { at: a3 });
              } catch (t4) {
                try {
                  var y2 = g2.children.length;
                  l3 = ev(ev([], Qg(h2), false), [y2], false);
                  jg.insertNodes(e6, n3, { at: l3 });
                } catch (e7) {
                  console.warn("插入单元格到第".concat(d3, "行失败: ").concat(e7 instanceof Error ? e7.message : String(e7)));
                }
              }
            }
          } catch (e7) {
            console.warn("处理第".concat(d3, "行时出错: ").concat(e7 instanceof Error ? e7.message : String(e7)));
          }
        }
      });
    }
  }, e5;
})(), lT = (function() {
  function e5() {
    this.title = QE("tableModule.header"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M704 128l-64 0L384 128 320 128 0 128l0 256 0 64 0 192 0 64 0 256 320 0 64 0 256 0 64 0 320 0 0-256 0-64L1024 448 1024 384 1024 128 704 128zM640 640 384 640 384 448l256 0L640 640zM64 448l256 0 0 192L64 640 64 448zM320 896 64 896l0-192 256 0L320 896zM640 896 384 896l0-192 256 0L640 896zM960 896l-256 0 0-192 256 0L960 896zM960 640l-256 0L704 448l256 0L960 640z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "table");
    return null != t2 && nT(t2);
  }, e5.prototype.isActive = function(e6) {
    return !!this.getValue(e6);
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || null == _y.getSelectedNodeByType(e6, "table"));
  }, e5.prototype.exec = function(e6, t2) {
    if (!this.isDisabled(e6)) {
      var n2 = !t2, r2 = _y.getSelectedNodeByType(e6, "table");
      if (null != r2) tT(r2).forEach(function(t3) {
        return jg.setNodes(e6, { isHeader: n2 }, { at: _y.findPath(e6, t3) });
      });
    }
  }, e5;
})(), cT = { key: "insertTable", factory: function() {
  return new iT();
} }, dT = { key: "deleteTable", factory: function() {
  return new QB();
} }, fT = { key: "insertTableRow", factory: function() {
  return new oT();
} }, pT = { key: "deleteTableRow", factory: function() {
  return new JB();
} }, hT = { key: "insertTableCol", factory: function() {
  return new rT();
} }, gT = { key: "deleteTableCol", factory: function() {
  return new ZB();
} }, vT = { key: "tableHeader", factory: function() {
  return new lT();
} }, mT = { key: "tableFullWidth", factory: function() {
  return new eT();
} }, yT = { key: "mergeTableCell", factory: function() {
  return new sT();
} }, bT = { key: "splitTableCell", factory: function() {
  return new uT();
} }, ET = { key: "setTableProperty", factory: function() {
  return new YB();
} }, CT = { key: "setTableCellProperty", factory: function() {
  return new XB();
} };
var DT = { selector: "td:not([data-w-e-type]),th:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  0 === (t2 = t2.filter(function(e6) {
    return "paragraph" === _y.getNodeType(e6) || (!!Cg.isText(e6) || !!n2.isInline(e6));
  })).length && (t2 = [{ text: r2.text().replace(/\s+/gm, " ") }]);
  var o2 = parseInt(r2.attr("colSpan") || "1", 10), i2 = parseInt(r2.attr("rowSpan") || "1", 10), a2 = "none" === GB(r2, "display"), s2 = r2.attr("width") || "auto";
  return { type: "table-cell", isHeader: "th" === WB(r2), colSpan: o2, rowSpan: i2, width: s2, children: t2, hidden: a2 };
} };
var wT = { selector: "tr:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  for (var r2 = am(e5), o2 = [], i2 = 0; i2 < t2.length; i2 += 1) {
    var a2 = t2[i2];
    if ("table-cell" === _y.getNodeType(a2)) {
      var s2 = a2;
      if (s2.hidden) continue;
      o2.push(s2);
    }
  }
  return { type: "table-row", height: parseInt(GB(r2, "height") || "0", 10) || void 0, children: o2 };
} };
var ST, AT = { selector: "table:not([data-w-e-type])", parseElemHtml: function(e5, t2, n2) {
  var r2, o2, i2 = am(e5), a2 = "auto";
  "100%" === GB(i2, "width") && (a2 = "100%"), "100%" === i2.attr("width") && (a2 = "100%");
  var s2 = { type: "table", width: a2, height: parseInt(GB(i2, "height") || "0", 10), children: t2.filter(function(e6) {
    return "table-row" === _y.getNodeType(e6);
  }) }, u2 = (null === (r2 = i2.find("tr")[0]) || void 0 === r2 ? void 0 : r2.children) || [], l2 = (null === (o2 = i2.find("colgroup")[0]) || void 0 === o2 ? void 0 : o2.children) || null, c2 = t2[t2.length - 1].children.length;
  if (l2 && l2.length === c2) s2.columnWidths = Array.from(l2).map(function(e6) {
    return parseInt(e6.getAttribute("width"), 10);
  });
  else if (u2.length > 0) {
    var d2 = [];
    Array.from(u2).forEach(function(e6) {
      var t3 = parseInt(am(e6).attr("colSpan") || "1", 10), n3 = parseInt(GB(am(e6), "width") || "90", 10);
      d2.push(n3);
      for (var r3 = 1; r3 < t3; r3 += 1) d2.push(90);
    }), s2.columnWidths = d2;
  }
  return s2;
} }, xT = null === (ST = null === window || void 0 === window ? void 0 : window.getComputedStyle(document.documentElement)) || void 0 === ST ? void 0 : ST.getPropertyValue("--w-e-textarea-border-color");
function OT(e5) {
  var t2 = e5.selection;
  if (null == t2) return false;
  var n2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return _y.checkNodeType(e6, "table-cell");
  } }), 1), r2 = n2[0];
  if (r2) {
    var o2 = Qg(r2, 2)[1], i2 = Kh.start(e5, o2);
    if (ug.equals(t2.anchor, i2)) return true;
  }
  return false;
}
function NT(e5, t2) {
  var n2 = t2.offset;
  if (0 === n2) return false;
  var r2 = Kh.node(e5, t2);
  if (!Cg.isText(r2[0])) return false;
  var o2 = eg.string(r2[0]);
  return !(n2 >= o2.length) && ("\n" === o2[n2 - 1] && "\r" === o2[n2]);
}
function BT(e5, t2, n2) {
  var r2 = e5.selection;
  if (null == r2 || "line" === t2) return false;
  var o2 = Qg(Kh.nodes(e5, { match: function(e6) {
    return _y.checkNodeType(e6, "table-cell");
  } }), 1), i2 = o2[0], a2 = r2.anchor;
  if ("backward" === n2 && 0 === r2.anchor.offset && (a2 = Kh.before(e5, r2)), "forward" === n2 && Kh.isEnd(e5, r2.anchor, r2.anchor.path) && (a2 = Kh.after(e5, r2)), null == a2) return false;
  var s2 = Kh.above(e5, { at: a2, match: function(e6) {
    return _y.checkNodeType(e6, "table-cell");
  } });
  if (null == s2 || null == i2 || !og.equals(s2[1], i2[1])) return false;
  var u2 = Kh.node(e5, a2);
  if (!Cg.isText(u2[0]) || u2[0].text.length < 2) return false;
  var l2 = "backward" === n2 ? [a2.offset - 2, a2.offset] : [a2.offset, a2.offset + 2], c2 = eg.string(u2[0]);
  return "\n\r" === c2.slice.apply(c2, ev([], Qg(l2), false)) ? (jg.insertText(e5, c2.slice(0, l2[0]) + c2.slice(l2[1]), { at: { anchor: Kh.start(e5, a2.path), focus: Kh.end(e5, a2.path) } }), true) : !!NT(e5, a2) && (jg.insertText(e5, c2.slice(0, r2.anchor.offset - 1) + c2.slice(r2.anchor.offset + 1), { at: { anchor: Kh.start(e5, a2.path), focus: Kh.end(e5, a2.path) } }), true);
}
function TT(e5, t2) {
  var n2 = Kh.nodes(e5, { at: t2, match: function(e6) {
    return "table" === _y.getNodeType(e6);
  } });
  return !!ev([], Qg(n2), false).find(function() {
    return true;
  });
}
function kT(e5) {
  var t2, n2;
  try {
    for (var r2 = Jg(["paragraph", "header1", "header2", "header3", "header4", "header5", "header6", "blockquote", "list-item", "todo", "divider"]), o2 = r2.next(); !o2.done; o2 = r2.next()) {
      var i2 = o2.value;
      if (_y.getSelectedNodeByType(e5, i2)) return true;
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      o2 && !o2.done && (n2 = r2.return) && n2.call(r2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return false;
}
var FT = { selector: "table", preParseHtml: function(e5) {
  var t2 = am(e5);
  if ("table" !== WB(t2)) return e5;
  var n2 = t2.find("tbody");
  if (0 === n2.length) return e5;
  var r2 = t2.find("tr");
  t2.append(r2), n2.remove();
  for (var o2 = t2.find("td, th"), i2 = 0; i2 < o2.length; i2 += 1) {
    var a2 = (u2 = am(o2[i2])).attr("style");
    if (a2) {
      /display\s*:\s*none/i.test(a2) && u2.remove();
    }
    u2.attr("width", "auto");
  }
  var s2 = t2.find("td, th");
  for (i2 = 0; i2 < s2.length; i2 += 1) {
    var u2, l2 = (u2 = am(s2[i2])).html() || "";
    l2 = (l2 = (l2 = l2.replace(/<o:p[^>]*>[\s\S]*?<\/o:p>/gi, "")).replace(/<\/o:p>/gi, "")).replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, function(e6, t3) {
      var n3 = t3.trim();
      return n3 && "&nbsp;" !== n3 ? t3 : "";
    }), u2.html(l2);
  }
  return t2[0];
} };
function IT(e5) {
  var t2, n2, r2 = [], o2 = 0;
  try {
    for (var i2 = Jg(e5), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      o2 += a2.value, r2.push(o2);
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return r2;
}
function PT(e5) {
  var t2, n2, r2 = [], o2 = e5.reduce(function(e6, t3) {
    return e6 + t3;
  }, 0);
  try {
    for (var i2 = Jg(e5), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      var s2 = a2.value;
      r2.push(s2 / o2);
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return r2;
}
var _T = null;
var RT = false, LT = false, MT = 0, jT = null, HT = am(window);
HT.on("mousedown", function(e5) {
  var t2 = e5.target;
  if (t2.closest('[data-block-type="table-cell"]')) RT = true;
  else if ("DIV" === t2.tagName && t2.closest(".column-resizer-item")) {
    if (null === jT) return;
    LT = true;
    var n2 = e5.clientX;
    MT = n2, document.body.style.cursor = "col-resize", e5.preventDefault();
  }
  HT.on("mousemove", zT), HT.on("mouseup", $T);
});
var zT = AC(function(e5) {
  if (LT && null !== jT) {
    e5.preventDefault();
    var t2, n2 = e5.clientX, r2 = n2 - MT, o2 = Qg(Kh.nodes(jT, { match: zB(jT, "table") }), 1), i2 = Qg(o2[0], 1)[0], a2 = i2.columnWidths, s2 = void 0 === a2 ? [] : a2, u2 = i2.resizingIndex, l2 = void 0 === u2 ? -1 : u2, c2 = _y.getSelectedNodeByType(jT, "table"), d2 = _y.toDOMNode(jT, c2).querySelector(".table");
    if (d2) t2 = (function(e6, t3, n3, r3, o3) {
      var i3 = ev([], Qg(e6), false);
      if (t3 < 0 || t3 >= e6.length) return i3;
      var a3 = o3.getMenuConfig("insertTable").minWidth, s3 = parseInt((void 0 === a3 ? 60 : a3).toString(), 10) || 60, u3 = n3 - (0 === t3 ? 0 : r3[t3 - 1]), l3 = Math.max(s3, u3);
      return i3[t3] = Math.floor(100 * l3) / 100, i3;
    })(s2, l2, n2 - d2.getBoundingClientRect().left, IT(s2), jT);
    else t2 = (function(e6, t3, n3, r3) {
      var o3 = ev([], Qg(e6), false), i3 = r3.getMenuConfig("insertTable").minWidth, a3 = parseInt((void 0 === i3 ? 60 : i3).toString(), 10) || 60, s3 = o3[t3], u3 = Math.max(a3, s3 + n3);
      return o3[t3] = Math.floor(100 * u3) / 100, o3;
    })(s2, l2, r2, jT);
    jg.setNodes(jT, { columnWidths: t2 }, { mode: "highest" });
  }
}, 100);
function $T(e5) {
  RT = false, LT = false, jT = null, document.body.style.cursor = "", HT.off("mousemove", zT), HT.off("mouseup", $T);
}
function UT(e5, t2) {
  "mouseenter" === t2.type ? jg.setNodes(e5, { isResizing: true }, { mode: "highest" }) : jg.setNodes(e5, { isResizing: false }, { mode: "highest" });
}
function VT(e5) {
  var t2, n2, r2 = [], o2 = 0;
  try {
    for (var i2 = Jg(e5), a2 = i2.next(); !a2.done; a2 = i2.next()) {
      o2 += a2.value, r2.push(o2);
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return r2;
}
var WT = false, GT = 0, qT = null, KT = am(window);
var YT = AC(function(e5) {
  if (WT && null !== qT) {
    e5.preventDefault();
    var t2, n2 = e5.clientY, r2 = n2 - GT, o2 = Qg(Kh.nodes(qT, { match: zB(qT, "table") }), 1), i2 = Qg(o2[0], 1)[0], a2 = i2.children, s2 = i2.resizingRowIndex, u2 = void 0 === s2 ? -1 : s2, l2 = a2.map(function(e6) {
      return e6.height || 30;
    }), c2 = _y.getSelectedNodeByType(qT, "table"), d2 = _y.toDOMNode(qT, c2).querySelector(".table");
    if (d2) t2 = (function(e6, t3, n3, r3, o3) {
      var i3 = ev([], Qg(e6), false);
      if (t3 < 0 || t3 >= e6.length) return i3;
      var a3 = (o3.getMenuConfig("insertTable") || {}).minRowHeight, s3 = parseInt((void 0 === a3 ? 30 : a3).toString(), 10) || 30, u3 = n3 - (0 === t3 ? 0 : r3[t3 - 1]), l3 = Math.max(s3, u3);
      return i3[t3] = Math.floor(100 * l3) / 100, i3;
    })(l2, u2, n2 - d2.getBoundingClientRect().top, VT(l2), qT);
    else t2 = (function(e6, t3, n3, r3) {
      var o3 = ev([], Qg(e6), false), i3 = (r3.getMenuConfig("insertTable") || {}).minRowHeight, a3 = parseInt((void 0 === i3 ? 30 : i3).toString(), 10) || 30, s3 = o3[t3], u3 = Math.max(a3, s3 + n3);
      return o3[t3] = Math.floor(100 * u3) / 100, o3;
    })(l2, u2, r2, qT);
    var f2 = _y.getSelectedNodeByType(qT, "table");
    if (f2 && u2 >= 0 && u2 < t2.length) {
      var p2 = ev(ev([], Qg(_y.findPath(qT, f2)), false), [u2], false);
      try {
        jg.setNodes(qT, { height: t2[u2] }, { at: p2 });
      } catch (e6) {
        console.warn("更新行高度失败:", e6);
      }
    }
  }
}, 100);
function XT(e5) {
  WT = false, qT = null, document.body.style.cursor = "", KT.off("mousemove", YT), KT.off("mouseup", XT);
}
function ZT(e5, t2) {
  "mouseenter" === t2.type ? jg.setNodes(e5, { isResizingRow: true }, { mode: "highest" }) : jg.setNodes(e5, { isResizingRow: false }, { mode: "highest" });
}
KT.on("mousedown", function(e5) {
  var t2 = e5.target;
  if ("DIV" === t2.tagName && t2.closest(".row-resizer-item")) {
    if (null === qT) return;
    WT = true;
    var n2 = e5.clientY;
    GT = n2, document.body.style.cursor = "row-resize", e5.preventDefault();
  }
  KT.on("mousemove", YT), KT.on("mouseup", XT);
});
var JT = { type: "table", renderElem: function(e5, t2, n2) {
  var r2 = (function(e6, t3) {
    if (e6.isDisabled()) return false;
    var n3 = e6.selection;
    if (null == n3) return true;
    if (fg.isCollapsed(n3)) return true;
    var r3 = n3.anchor, o3 = n3.focus, i3 = _y.findPath(e6, t3), a3 = Kh.start(e6, i3), s3 = Kh.end(e6, i3), u3 = ug.compare(r3, s3) <= 0 && ug.compare(r3, a3) >= 0, l3 = ug.compare(o3, s3) <= 0 && ug.compare(o3, a3) >= 0;
    return !!(u3 && l3 && og.equals(r3.path.slice(0, 3), o3.path.slice(0, 3)));
  })(n2, e5), o2 = e5, i2 = o2.width, a2 = void 0 === i2 ? "auto" : i2, s2 = o2.height, u2 = o2.columnWidths, l2 = void 0 === u2 ? [] : u2, c2 = o2.scrollWidth, d2 = void 0 === c2 ? 0 : c2, f2 = o2.isHoverCellBorder, p2 = o2.resizingIndex, h2 = o2.isResizing, g2 = o2.isHoverRowBorder, v2 = o2.resizingRowIndex, m2 = o2.isResizingRow, y2 = _y.isNodeSelected(n2, e5), b2 = Qg(aT.selection(n2), 1)[0], E2 = PT(l2), C2 = TD("div", { className: "table-container", "data-selected": y2, on: { mousedown: function(t3) {
    if ("DIV" === t3.target.tagName && t3.preventDefault(), !n2.isDisabled()) {
      t3.target.closest('[data-block-type="table-cell"]') && aT.unselect(n2);
      var r3 = _y.findPath(n2, e5), o3 = Kh.start(n2, r3), i3 = n2.selection;
      if (null != i3) i3.anchor.path[0] !== r3[0] && "DIV" === t3.target.tagName && n2.select(o3);
      else n2.select(o3);
    }
  } } }, TD("table", { width: a2, contentEditable: r2, className: "table ".concat(b2 ? "table-selection-none" : ""), style: { width: "100%" === a2 ? a2 : "".concat(l2.reduce(function(e6, t3) {
    return e6 + t3;
  }, 0), "px") }, on: { mousemove: rE(function(t3) {
    !(function(e6, t4, n3, r3) {
      if (!e6.isDisabled() && !RT && !LT) {
        var o3 = t4, i3 = o3.width, a3 = void 0 === i3 ? "auto" : i3, s3 = o3.columnWidths, u3 = void 0 === s3 ? [] : s3, l3 = o3.isHoverCellBorder, c3 = o3.resizingIndex, d3 = n3.clientX, f3 = n3.target;
        if (Gm(f3) && d3 > (g3 = f3.getBoundingClientRect()).x + 5 && d3 < g3.x + g3.width - 5) return void (l3 && jg.setNodes(e6, { isHoverCellBorder: false, resizingIndex: -1 }, { mode: "highest" }));
        if (Gm(f3)) {
          var p3 = f3.closest(".table");
          if (p3) {
            for (var h3 = n3.clientX, g3 = p3.getBoundingClientRect(), v3 = "100%" === a3 ? PT(u3).map(function(e7) {
              return e7 * r3;
            }) : u3, m3 = IT(v3), y3 = 0; y3 < m3.length; y3 += 1) if (h3 - g3.x >= m3[y3] - 5 && h3 - g3.x < m3[y3] + 5) {
              if (c3 === y3) return;
              return void jg.setNodes(e6, { isHoverCellBorder: true, resizingIndex: y3 }, { mode: "highest" });
            }
          }
        }
        true === l3 && jg.setNodes(e6, { isHoverCellBorder: false, resizingIndex: -1 }, { mode: "highest" });
      }
    })(n2, e5, t3, d2), (function(e6, t4, n3) {
      if (!e6.isDisabled() && !WT) {
        var r3 = t4, o3 = r3.children, i3 = r3.isHoverRowBorder, a3 = r3.resizingRowIndex, s3 = n3.target;
        if (Gm(s3)) {
          var u3 = s3.closest(".table");
          if (u3) {
            for (var l3 = n3.clientY, c3 = u3.getBoundingClientRect(), d3 = VT(o3.map(function(e7) {
              return e7.height || 30;
            })), f3 = 0; f3 < d3.length; f3 += 1) if (l3 - c3.y >= d3[f3] - 5 && l3 - c3.y < d3[f3] + 5) {
              if (a3 === f3) return;
              return void jg.setNodes(e6, { isHoverRowBorder: true, resizingRowIndex: f3 }, { mode: "highest" });
            }
          }
        }
        true === i3 && jg.setNodes(e6, { isHoverRowBorder: false, resizingRowIndex: -1 }, { mode: "highest" });
      }
    })(n2, e5, t3);
  }, 25) } }, TD("colgroup", { contentEditable: false }, l2.map(function(e6) {
    return TD("col", { width: e6 });
  })), TD("tbody", null, t2)), TD("div", { className: "column-resizer", contentEditable: false }, l2.map(function(e6, t3) {
    var r3 = e6;
    return "100%" === a2 && (r3 = E2[t3] * d2), TD("div", { className: "column-resizer-item", style: { minWidth: "".concat(r3, "px") } }, TD("div", { className: "resizer-line-hotzone ".concat(f2 && t3 === p2 ? "visible " : "").concat(h2 && t3 === p2 ? "highlight" : ""), style: { height: "".concat(s2, "px") }, on: { mouseenter: function(e7) {
      return UT(n2, e7);
    }, mouseleave: function(e7) {
      return UT(n2, e7);
    }, mousedown: function(e7) {
      return (function(e8) {
        LT || (jT = e8);
      })(n2);
    } } }, TD("div", { className: "resizer-line" })));
  })), TD("div", { className: "row-resizer", contentEditable: false }, e5.children.map(function(e6, t3) {
    var r3 = l2.reduce(function(e7, t4) {
      return e7 + t4;
    }, 0), o3 = e6.height || 30;
    return TD("div", { className: "row-resizer-item", style: { minHeight: "".concat(o3, "px") } }, TD("div", { className: "resizer-line-hotzone-horizontal ".concat(g2 && t3 === v2 ? "visible " : "").concat(m2 && t3 === v2 ? "highlight" : ""), style: { width: "".concat(r3, "px") }, on: { mouseenter: function(e7) {
      return ZT(n2, e7);
    }, mouseleave: function(e7) {
      return ZT(n2, e7);
    }, mousedown: function(e7) {
      return (function(e8) {
        WT || (qT = e8);
      })(n2);
    } } }, TD("div", { className: "resizer-line-horizontal" })));
  }))), D2 = cD("div", { hook: { insert: function(e6) {
    var t3 = e6.elm;
    return (function(e7, t4) {
      if (Gm(t4)) {
        var n3 = t4.querySelector("table");
        n3 && (_T = new ResizeObserver(function(t5) {
          var n4 = Qg(t5, 1)[0].contentRect;
          jg.setNodes(e7, { scrollWidth: n4.width, height: n4.height }, { mode: "highest" });
        }), _T.observe(n3));
      }
    })(n2, t3);
  }, destroy: function() {
    _T && (null == _T || _T.disconnect(), _T = null);
  } } }, C2);
  return D2;
} }, QT = { type: "table-row", renderElem: function(e5, t2, n2) {
  var r2 = e5.height;
  return TD("tr", { style: { height: r2 ? "".concat(r2, "px") : void 0 } }, t2);
} }, ek = { type: "table-cell", renderElem: function(e5, t2, n2) {
  var r2 = (function(e6, t3) {
    var n3 = _y.getParentNode(e6, t3);
    if (null == n3) return false;
    var r3 = _y.getParentNode(e6, n3);
    return null != r3 && tT(r3).some(function(e7) {
      return e7 === t3;
    });
  })(n2, e5), o2 = e5, i2 = o2.colSpan, a2 = void 0 === i2 ? 1 : i2, s2 = o2.rowSpan, u2 = void 0 === s2 ? 1 : s2, l2 = o2.isHeader, c2 = void 0 !== l2 && l2, d2 = o2.hidden, f2 = void 0 !== d2 && d2, p2 = aT.isSelected(n2, e5);
  return TD(r2 && c2 ? "th" : "td", { colSpan: a2, rowSpan: u2, "data-block-type": "table-cell", className: p2 ? "w-e-selected" : "", style: { display: f2 ? "none" : "" } }, t2);
} };
function tk(e5, t2) {
  null == e5.data && (e5.data = {});
  var n2 = e5.data;
  null == n2.style && (n2.style = {}), Object.assign(n2.style, t2);
}
var nk = { renderStyle: function(e5, t2) {
  var n2, r2;
  if (!$h.isElement(e5)) return t2;
  var o2 = e5, i2 = o2.backgroundColor, a2 = o2.borderWidth, s2 = o2.borderStyle, u2 = o2.borderColor, l2 = o2.textAlign, c2 = {};
  i2 && (c2.backgroundColor = i2), a2 && (c2.borderWidth = "".concat(a2, "px")), s2 && (c2.borderStyle = "none" === s2 ? "" : s2), u2 && (c2.borderColor = u2), l2 && (c2.textAlign = l2);
  var d2 = t2;
  return "table" === e5.type ? tk(null === (r2 = (null === (n2 = d2.children) || void 0 === n2 ? void 0 : n2[0]).children) || void 0 === r2 ? void 0 : r2[0], c2) : tk(d2, c2), d2;
}, styleToHtml: function(e5, t2) {
  if ("table" !== e5.type && "table-cell" !== e5.type) return t2;
  var n2 = e5.backgroundColor, r2 = e5.borderWidth, o2 = e5.borderStyle, i2 = e5.borderColor, a2 = e5.textAlign;
  if (!(n2 || r2 || o2 || i2 || a2)) return t2;
  var s2 = am(t2);
  return n2 && s2.css("background-color", n2), r2 && s2.css("border-width", "".concat(r2, "px")), o2 && s2.css("border-style", "none" === o2 ? "" : o2), i2 && s2.css("border-color", i2), a2 && s2.css("text-align", a2), (function(e6) {
    return 0 === e6.length ? "" : e6[0].outerHTML;
  })(s2);
}, parseStyleHtml: function(e5, t2, n2) {
  if (!["TABLE", "TD", "TH"].includes(e5.tagName)) return t2;
  var r2 = am(e5), o2 = t2, i2 = GB(r2, "background-color");
  i2 || (i2 = GB(r2, "background")), i2 && (o2.backgroundColor = i2);
  var a2 = GB(r2, "border");
  a2 || "TD" !== e5.tagName || (a2 = "1px solid ".concat(xT));
  var s2 = Qg((null == a2 ? void 0 : a2.split(" ")) || [], 3), u2 = s2[0], l2 = s2[1], c2 = s2[2];
  (u2 = GB(r2, "border-width") || u2) && (o2.borderWidth = u2.replace(/[^\d]/g, "")), (l2 = GB(r2, "border-style") || l2) && (o2.borderStyle = "none" === l2 ? "" : l2), (c2 = GB(r2, "border-color") || c2) && (o2.borderColor = c2);
  var d2 = GB(r2, "text-align");
  return (d2 = GB(r2, "text-align") || d2) && (o2.textAlign = d2), t2;
}, renderElems: [JT, QT, ek], elemsToHtml: [RB, LB, MB], preParseHtml: [FT], parseElemsHtml: [DT, wT, AT], menus: [cT, dT, fT, pT, hT, gT, vT, mT, yT, bT, ET, CT], editorPlugin: function(e5) {
  var t2 = e5.insertBreak, n2 = e5.deleteBackward, r2 = e5.deleteForward, o2 = e5.deleteFragment, i2 = e5.normalizeNode, a2 = e5.insertData, s2 = e5.handleTab, u2 = e5.selectAll, l2 = e5;
  l2.insertBreak = function() {
    null == _y.getSelectedNodeByType(l2, "table") ? t2() : l2.insertText("\n\r");
  }, l2.deleteBackward = function(e6) {
    if (!OT(l2) && !BT(l2, e6, "backward")) {
      var t3 = l2.selection;
      if (t3) {
        var r3 = Kh.before(l2, t3), o3 = Kh.above(l2, { at: t3, match: function(e7) {
          return _y.checkNodeType(e7, "table-cell");
        } });
        if (r3) {
          var i3 = TT(l2, r3);
          if (!o3 && i3 && kT(l2)) return;
        }
      }
      n2(e6);
    }
  }, l2.handleTab = function() {
    var t3;
    if (_y.getSelectedNodeByType(l2, "table")) {
      var n3 = Kh.above(e5);
      _y.checkNodeType(n3[0], "table-cell") && jg.select(e5, n3[1]);
      var r3 = Kh.next(e5);
      if (r3) r3[0] && r3[0].text && (r3 = null !== (t3 = Kh.above(e5, { at: r3[1] })) && void 0 !== t3 ? t3 : r3), jg.select(e5, r3[1]);
      else {
        var o3 = l2.children || [], i3 = o3.length;
        if (_y.checkNodeType(o3[i3 - 1], "table")) {
          var a3 = _y.genEmptyParagraph();
          jg.insertNodes(l2, a3, { at: [i3] }), l2.handleTab();
        }
      }
    } else s2();
  }, l2.deleteForward = function(e6) {
    if (!OT(l2) && !BT(l2, e6, "forward")) {
      var t3 = l2.selection;
      if (t3) {
        var n3 = Kh.after(l2, t3), o3 = Kh.above(l2, { at: t3, match: function(e7) {
          return _y.checkNodeType(e7, "table-cell");
        } });
        if (n3) {
          var i3 = TT(l2, n3);
          if (!o3 && i3 && kT(l2)) return;
        }
      }
      r2(e6);
    }
  }, l2.deleteFragment = function(e6) {
    var t3 = l2.selection;
    if (t3) {
      var n3, r3 = false, i3 = { anchor: t3.anchor, focus: t3.focus }, a3 = ug.isBefore(i3.anchor, i3.focus);
      if (NT(l2, t3.anchor)) (n3 = Kh[a3 ? "before" : "after"](l2, t3.anchor)) && (i3.anchor = n3), r3 = true;
      if (NT(l2, t3.focus)) (n3 = Kh[a3 ? "after" : "before"](l2, t3.focus)) && (i3.focus = n3), r3 = true;
      r3 && jg.setSelection(l2, i3), o2(e6);
    }
  }, l2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), n3 = t3[0], r3 = t3[1];
    if ("table" !== _y.getNodeType(n3)) return i2([n3, r3]);
    if (_y.isLastNode(l2, n3)) {
      var o3 = _y.genEmptyParagraph();
      jg.insertNodes(l2, o3, { at: [r3[0] + 1] });
    }
  }, l2.insertData = function(e6) {
    if (null != _y.getSelectedNodeByType(l2, "table")) {
      var t3 = e6.getData("text/plain");
      "\n" === t3 || /<img[^>]+>/.test(e6.getData("text/html")) ? a2(e6) : Kh.insertText(l2, t3);
    } else a2(e6);
  }, l2.selectAll = function() {
    var e6 = l2.selection;
    if (null != e6) {
      var t3 = _y.getSelectedNodeByType(l2, "table-cell");
      if (null != t3) {
        var n3 = e6.anchor, r3 = e6.focus;
        if (og.equals(n3.path.slice(0, 3), r3.path.slice(0, 3))) if (0 !== eg.string(t3).length) {
          var o3 = _y.findPath(l2, t3), i3 = { anchor: Kh.start(l2, o3), focus: Kh.end(l2, o3) };
          l2.select(i3);
        } else u2();
        else u2();
      } else u2();
    } else u2();
  }, (function(e6) {
    var t3 = e6.apply;
    e6.apply = function(n3) {
      if (!rg.isSelectionOperation(n3) || !n3.newProperties) return t3(n3);
      var r3 = Yg(Yg({}, e6.selection), n3.newProperties);
      if (!fg.isRange(r3)) return aT.unselect(e6), t3(n3);
      var o3 = function(e7) {
        return $h.isElement(e7) && ("table-cell" === e7.type || "th" === e7.type || "td" === e7.type);
      }, i3 = Qg(Kh.nodes(e6, { match: o3, at: fg.start(r3), mode: "lowest" }), 1)[0], a3 = Qg(Kh.nodes(e6, { match: o3, at: fg.end(r3), mode: "lowest" }), 1)[0];
      if (!i3 || !a3) return aT.unselect(e6), t3(n3);
      var s3 = Qg(i3, 2)[1], u3 = Qg(a3, 2)[1];
      if (og.equals(s3, u3) || !$B(e6, [s3, u3], "table")) return aT.unselect(e6), t3(n3);
      try {
        var l3 = UB(e6, { at: s3 });
        if (!l3 || 0 === l3.length) return aT.unselect(e6), t3(n3);
        for (var c3 = VB.valueOf(0, 0), d3 = VB.valueOf(0, 0), f3 = false, p2 = false, h2 = 0; h2 < l3.length; h2 += 1) if (l3[h2]) {
          for (var g2 = 0; g2 < l3[h2].length; g2 += 1) if (l3[h2][g2]) {
            var v2 = Qg(l3[h2][g2], 1), m2 = Qg(v2[0], 2)[1];
            og.equals(s3, m2) && (c3.x = h2, c3.y = g2, f3 = true), og.equals(u3, m2) && (d3.x = h2, d3.y = g2, p2 = true);
          }
        }
        if (!f3 || !p2) return aT.unselect(e6), t3(n3);
        for (var y2 = VB.valueOf(Math.min(c3.x, d3.x), Math.min(c3.y, d3.y)), b2 = VB.valueOf(Math.max(c3.x, d3.x), Math.max(c3.y, d3.y)); ; ) {
          var E2 = VB.valueOf(y2.x, y2.y), C2 = VB.valueOf(b2.x, b2.y);
          for (h2 = E2.x; h2 <= C2.x && h2 < l3.length; h2 += 1) if (l3[h2]) {
            for (g2 = E2.y; g2 <= C2.y && g2 < l3[h2].length; g2 += 1) if (l3[h2][g2]) {
              var D2 = Qg(l3[h2][g2], 2)[1];
              if (D2) {
                var w2 = D2.rtl, S2 = D2.ltr, A2 = D2.btt, x2 = D2.ttb;
                E2.x = Math.min(E2.x, h2 - (x2 - 1)), E2.y = Math.min(E2.y, g2 - (w2 - 1)), C2.x = Math.max(C2.x, h2 + (A2 - 1)), C2.y = Math.max(C2.y, g2 + (S2 - 1));
              }
            }
          }
          if (VB.equals(y2, E2) && VB.equals(b2, C2)) break;
          y2 = E2, b2 = C2;
        }
        var O2 = [], N2 = /* @__PURE__ */ new WeakSet();
        for (h2 = y2.x; h2 <= b2.x && h2 < l3.length; h2 += 1) if (l3[h2]) {
          var B2 = [];
          for (g2 = y2.y; g2 <= b2.y && g2 < l3[h2].length; g2 += 1) if (l3[h2][g2]) {
            var T2 = Qg(l3[h2][g2], 1), k2 = Qg(T2[0], 1)[0];
            k2 && (N2.add(k2), B2.push(l3[h2][g2]));
          }
          B2.length > 0 && O2.push(B2);
        }
        qB.set(e6, O2), KB.set(e6, N2);
      } catch (r4) {
        return aT.unselect(e6), t3(n3);
      }
      t3(n3);
    };
  })(l2), l2.getTableSelection = function() {
    return qB.get(l2) || null;
  };
  var c2 = l2.addMark, d2 = l2.removeMark, f2 = Yg({}, jg);
  return l2.addMark = function(e6, t3) {
    var n3 = qB.get(l2);
    if (n3 && n3.length > 0) {
      var r3 = l2.selection;
      n3.forEach(function(n4) {
        n4.forEach(function(n5) {
          var r4 = Qg(n5[0], 2)[1], o3 = Kh.start(l2, r4), i3 = Kh.end(l2, r4);
          jg.select(l2, { anchor: o3, focus: i3 }), c2(e6, t3);
        });
      }), r3 && jg.select(l2, r3);
    } else c2(e6, t3);
  }, l2.removeMark = function(e6) {
    var t3 = qB.get(l2);
    if (t3 && t3.length > 0) {
      var n3 = l2.selection;
      t3.forEach(function(t4) {
        t4.forEach(function(t5) {
          var n4 = Qg(t5[0], 2)[1], r3 = Kh.start(l2, n4), o3 = Kh.end(l2, n4);
          jg.select(l2, { anchor: r3, focus: o3 }), d2(e6);
        });
      }), n3 && jg.select(l2, n3);
    } else d2(e6);
  }, jg.setNodes = function(e6, t3, n3) {
    if (void 0 === n3 && (n3 = {}), e6 === l2) {
      var r3 = qB.get(l2);
      if (r3 && r3.length > 0) return "hidden" in t3 || "rowSpan" in t3 || "colSpan" in t3 ? void f2.setNodes(e6, t3, n3) : void r3.forEach(function(r4) {
        r4.forEach(function(r5) {
          var o3 = Qg(r5[0], 2)[1];
          f2.setNodes(e6, t3, Yg(Yg({}, n3), { at: o3 }));
        });
      });
    }
    f2.setNodes(e6, t3, n3);
  }, l2;
} };
function rk(e5) {
  return e5.length ? e5[0].tagName.toLowerCase() : "";
}
function ok(e5, t2, n2, r2) {
  void 0 === t2 && (t2 = "auto"), void 0 === n2 && (n2 = "auto"), void 0 === r2 && (r2 = {});
  var o2 = am(e5), i2 = r2.width, a2 = void 0 === i2 ? "" : i2, s2 = r2.height, u2 = void 0 === s2 ? "" : s2, l2 = "";
  return a2 && (l2 += "width: ".concat(a2, ";")), u2 && (l2 += "height: ".concat(u2, ";")), o2.attr("width", t2), o2.attr("height", n2), o2.attr("style", l2), o2[0].outerHTML;
}
YE("en", { videoModule: { delete: "Delete", uploadVideo: "Upload video", insertVideo: "Insert video", videoSrc: "Video source", videoSrcPlaceHolder: "Video file url, or third-party <iframe>", videoPoster: "Video poster", videoPosterPlaceHolder: "Poster image url", ok: "Ok", editSize: "Edit size", edit: "Edit video", width: "Width", height: "Height" } }), YE("zh-CN", { videoModule: { delete: "删除视频", uploadVideo: "上传视频", insertVideo: "插入视频", videoSrc: "视频地址", videoSrcPlaceHolder: "视频文件 url 或第三方 <iframe>", videoPoster: "视频封面", videoPosterPlaceHolder: "封面图片 url", ok: "确定", editSize: "修改尺寸", edit: "编辑视频", width: "宽度", height: "高度" } }), Nm && (am.fn.append = Nm), gm && (am.fn.on = gm), jm && (am.fn.focus = jm), cm && (am.fn.attr = cm), hm && (am.fn.val = hm), Am && (am.fn.html = Am), Tm && (am.fn.parent = Tm), lm && (am.fn.hasClass = lm), _m && (am.fn.empty = _m);
var ik = { type: "video", elemToHtml: function(e5, t2) {
  var n2 = e5, r2 = n2.src, o2 = void 0 === r2 ? "" : r2, i2 = n2.poster, a2 = void 0 === i2 ? "" : i2, s2 = n2.width, u2 = void 0 === s2 ? "auto" : s2, l2 = n2.height, c2 = void 0 === l2 ? "auto" : l2, d2 = n2.style, f2 = void 0 === d2 ? {} : d2, p2 = n2.textAlign, h2 = '<div data-w-e-type="video" data-w-e-is-void style="text-align: '.concat(void 0 === p2 ? "center" : p2, ';">\n');
  if (0 === o2.trim().indexOf("<iframe ")) {
    h2 += ok(o2, u2, c2, f2);
  } else {
    var g2 = f2.width, v2 = void 0 === g2 ? "" : g2, m2 = f2.height, y2 = void 0 === m2 ? "" : m2, b2 = "";
    v2 && (b2 += "width: ".concat(v2, ";")), y2 && (b2 += "height: ".concat(y2, ";")), h2 += '<video poster="'.concat(a2, '" controls="true" width="').concat(u2, '" height="').concat(c2, '" style="').concat(b2, '"><source src="').concat(o2, '" type="video/mp4"/></video>');
  }
  return h2 += "\n</div>";
} };
function ak(e5) {
  return void 0 === e5 && (e5 = "r"), "".concat(e5, "-").concat(zm());
}
function sk(e5) {
  var t2 = {};
  return e5.trim().split(";").forEach(function(e6) {
    if (e6) {
      var n2 = Qg(e6.split(":"), 2), r2 = n2[0], o2 = n2[1];
      r2 && o2 && (t2[r2.trim()] = o2.trim());
    }
  }), t2;
}
function uk() {
  return ak("w-e-insert-video");
}
var lk = (function() {
  function e5() {
    this.title = QE("videoModule.editSize"), this.tag = "button", this.showModal = true, this.modalWidth = 320, this.$content = null, this.widthInputId = uk(), this.heightInputId = uk(), this.buttonId = uk();
  }
  return e5.prototype.getSelectedVideoNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "video");
  }, e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedVideoNode(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return this.getSelectedVideoNode(e6);
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = t2.widthInputId, r2 = t2.heightInputId, o2 = t2.buttonId, i2 = Qg(cC(QE("videoModule.width"), n2, "auto"), 2), a2 = i2[0], s2 = am(i2[1]), u2 = Qg(cC(QE("videoModule.height"), r2, "auto"), 2), l2 = u2[0], c2 = am(u2[1]), d2 = Qg(fC(o2, QE("videoModule.ok")), 1)[0], f2 = this.getSelectedVideoNode(e6);
    if (null == this.$content) {
      var p2 = am("<div></div>");
      p2.on("click", "#".concat(o2), function(t3) {
        t3.preventDefault();
        var o3 = p2.find("#".concat(n2)).val().trim(), i3 = p2.find("#".concat(r2)).val().trim(), a3 = function(e7) {
          return /^\d+(\.\d+)?%$/.test(e7);
        }, s3 = function(e7) {
          return /^\d+(\.\d+)?$/.test(e7);
        }, u3 = "auto", l3 = "auto";
        a3(o3) ? u3 = o3 : s3(o3) && (u3 = "".concat(parseInt(o3, 10), "px")), a3(i3) ? l3 = i3 : s3(i3) && (l3 = "".concat(parseInt(i3, 10), "px"));
        var c3 = f2.style, d3 = void 0 === c3 ? {} : c3;
        e6.restoreSelection();
        var h3 = { style: Yg(Yg({}, d3), { width: u3, height: l3 }) };
        jg.setNodes(e6, h3, { match: function(e7) {
          return _y.checkNodeType(e7, "video");
        } }), e6.hidePanelOrModal();
      }), this.$content = p2;
    }
    var h2 = this.$content;
    if (h2.empty(), h2.append(a2), h2.append(l2), h2.append(d2), null == f2) return h2[0];
    var g2 = f2.style, v2 = void 0 === g2 ? {} : g2, m2 = v2.width, y2 = void 0 === m2 ? "" : m2, b2 = v2.height, E2 = void 0 === b2 ? "" : b2;
    return s2.val(y2), c2.val(E2), setTimeout(function() {
      s2.focus();
    }), h2[0];
  }, e5;
})();
function ck() {
  return ak("w-e-edit-video");
}
var dk = (function() {
  function e5() {
    this.title = QE("videoModule.edit"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M864 0a160 160 0 0 1 128 256l-64 64-224-224 64-64c26.752-20.096 59.968-32 96-32zM64 736l-64 288 288-64 592-592-224-224L64 736z m651.584-372.416l-448 448-55.168-55.168 448-448 55.168 55.168z"></path></svg>', this.tag = "button", this.showModal = true, this.modalWidth = 300, this.$content = null, this.srcInputId = ck(), this.posterInputId = ck(), this.buttonId = ck();
  }
  return e5.prototype.getSelectedVideoNode = function(e6) {
    return _y.getSelectedNodeByType(e6, "video");
  }, e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || null == this.getSelectedVideoNode(e6);
  }, e5.prototype.getModalPositionNode = function(e6) {
    return this.getSelectedVideoNode(e6);
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = this, r2 = n2.srcInputId, o2 = n2.posterInputId, i2 = n2.buttonId, a2 = Qg(cC(QE("videoModule.videoSrc"), r2, QE("videoModule.videoSrcPlaceHolder")), 2), s2 = a2[0], u2 = a2[1], l2 = Qg(cC(QE("videoModule.videoPoster"), o2, QE("videoModule.videoPosterPlaceHolder")), 2), c2 = l2[0], d2 = l2[1], f2 = am(u2), p2 = am(d2), h2 = Qg(fC(i2, QE("videoModule.ok")), 1)[0];
    if (null == this.$content) {
      var g2 = am("<div></div>");
      g2.on("click", "#".concat(i2), function(n3) {
        return Xg(t2, void 0, void 0, function() {
          var t3, i3, a3, s3;
          return Zg(this, function(u3) {
            return n3.preventDefault(), t3 = g2.find("#".concat(r2)).val().trim(), i3 = g2.find("#".concat(o2)).val().trim(), a3 = ak("video-"), s3 = { src: t3, poster: i3, key: a3 }, e6.restoreSelection(), jg.setNodes(e6, s3, { match: function(e7) {
              return _y.checkNodeType(e7, "video");
            } }), e6.hidePanelOrModal(), [2];
          });
        });
      }), this.$content = g2;
    }
    var v2 = this.$content;
    v2.empty(), v2.append(s2), v2.append(c2), v2.append(h2);
    var m2 = this.getSelectedVideoNode(e6);
    if (null == m2) return v2[0];
    var y2 = m2.src, b2 = void 0 === y2 ? "" : y2, E2 = m2.poster, C2 = void 0 === E2 ? "" : E2;
    return f2.val(b2), p2.val(C2), setTimeout(function() {
      f2.focus();
    }), v2[0];
  }, e5;
})();
function fk(e5, t2) {
  return Xg(this, arguments, void 0, function(e6, t3, n2, r2, o2) {
    var i2, a2, s2, u2, l2, c2, d2;
    return void 0 === n2 && (n2 = ""), void 0 === r2 && (r2 = ""), void 0 === o2 && (o2 = ""), Zg(this, function(f2) {
      switch (f2.label) {
        case 0:
          return t3 ? (e6.restoreSelection(), i2 = e6.getMenuConfig("insertVideo"), a2 = i2.onInsertedVideo, s2 = i2.checkVideo, u2 = i2.parseVideoSrc, [4, s2(t3, n2)]) : [2];
        case 1:
          return "string" == typeof (l2 = f2.sent()) ? (e6.alert(l2, "error"), [2]) : null == l2 ? [2] : [4, u2(t3)];
        case 2:
          return 0 !== (c2 = f2.sent()).trim().indexOf("<iframe ") && (c2 = (function(e7) {
            return e7.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          })(c2)), d2 = { type: "video", src: c2, poster: n2, children: [{ text: "" }], style: { width: r2, height: o2 } }, Promise.resolve().then(function() {
            _y.isSelectedEmptyParagraph(e6) && jg.removeNodes(e6, { mode: "highest" }), jg.insertNodes(e6, d2, { mode: "highest" });
          }), a2(d2), [2];
      }
    });
  });
}
function pk() {
  return ak("w-e-insert-video");
}
var hk = (function() {
  function e5() {
    this.title = QE("videoModule.insertVideo"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>', this.tag = "button", this.showModal = true, this.modalWidth = 320, this.$content = null, this.srcInputId = pk(), this.posterInputId = pk(), this.buttonId = pk();
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || !!_y.getSelectedElems(e6).some(function(t3) {
      var n2 = _y.getNodeType(t3);
      return "pre" === n2 || ("list-item" === n2 || !!e6.isVoid(t3));
    }));
  }, e5.prototype.getModalPositionNode = function(e6) {
    return null;
  }, e5.prototype.getModalContentElem = function(e6) {
    var t2 = this, n2 = this, r2 = n2.srcInputId, o2 = n2.posterInputId, i2 = n2.buttonId, a2 = Qg(cC(QE("videoModule.videoSrc"), r2, QE("videoModule.videoSrcPlaceHolder")), 2), s2 = a2[0], u2 = a2[1], l2 = Qg(cC(QE("videoModule.videoPoster"), o2, QE("videoModule.videoPosterPlaceHolder")), 2), c2 = l2[0], d2 = l2[1], f2 = am(u2), p2 = am(d2), h2 = Qg(fC(i2, QE("videoModule.ok")), 1)[0];
    if (null == this.$content) {
      var g2 = am("<div></div>");
      g2.on("click", "#".concat(i2), function(n3) {
        return Xg(t2, void 0, void 0, function() {
          var t3, i3;
          return Zg(this, function(a3) {
            switch (a3.label) {
              case 0:
                return n3.preventDefault(), t3 = g2.find("#".concat(r2)).val().trim(), i3 = g2.find("#".concat(o2)).val().trim(), [4, fk(e6, t3, i3)];
              case 1:
                return a3.sent(), e6.hidePanelOrModal(), [2];
            }
          });
        });
      }), this.$content = g2;
    }
    var v2 = this.$content;
    return v2.empty(), v2.append(s2), v2.append(c2), v2.append(h2), f2.val(""), p2.val(""), setTimeout(function() {
      f2.focus();
    }), v2[0];
  }, e5;
})();
function gk(e5) {
  return e5.getMenuConfig("uploadVideo");
}
var vk = /* @__PURE__ */ new WeakMap();
function mk(e5, t2) {
  return Xg(this, void 0, void 0, function() {
    var n2, r2;
    return Zg(this, function(o2) {
      switch (o2.label) {
        case 0:
          return n2 = (function(e6) {
            var t3 = vk.get(e6);
            if (null != t3) return t3;
            var n3 = gk(e6), r3 = n3.onSuccess, o3 = n3.onProgress, i2 = n3.onFailed, a2 = n3.customInsert, s2 = n3.onError;
            return t3 = YA(Yg(Yg({}, n3), { onProgress: function(t4) {
              e6.showProgressBar(t4), o3 && o3(t4);
            }, onSuccess: function(t4, n4) {
              if (a2) return a2(n4, function(t5, n5) {
                return fk(e6, t5, n5);
              }), void r3(t4, n4);
              var o4 = n4.errno, s3 = void 0 === o4 ? 1 : o4, u2 = n4.data, l2 = void 0 === u2 ? {} : u2;
              if (0 === s3) {
                var c2 = l2.url, d2 = void 0 === c2 ? "" : c2, f2 = l2.poster;
                fk(e6, d2, void 0 === f2 ? "" : f2), r3(t4, n4);
              } else i2(t4, n4);
            }, onError: function(e7, t4, n4) {
              s2(e7, t4, n4);
            } })), vk.set(e6, t3), t3;
          })(e5), r2 = t2.map(function(e6) {
            return { name: e6.name, type: e6.type, size: e6.size, data: e6 };
          }), n2.addFiles(r2), [4, n2.upload()];
        case 1:
          return o2.sent(), [2];
      }
    });
  });
}
var yk = (function() {
  function e5() {
    this.title = QE("videoModule.uploadVideo"), this.iconSvg = '<svg viewBox="0 0 1056 1024"><path d="M805.902261 521.819882a251.441452 251.441452 0 0 0-251.011972 246.600033 251.051015 251.051015 0 1 0 502.023944 8.823877 253.237463 253.237463 0 0 0-251.011972-255.42391z m59.463561 240.001647v129.898403h-116.701631v-129.898403h-44.041298l101.279368-103.504859 101.279368 103.504859z" p-id="6802"></path><path d="M788.254507 0.000781H99.094092A98.663439 98.663439 0 0 0 0.001171 99.093701v590.067495a98.663439 98.663439 0 0 0 99.092921 99.092921h411.7549a266.434235 266.434235 0 0 1-2.186448-41.815807 275.843767 275.843767 0 0 1 275.180024-270.729042 270.650955 270.650955 0 0 1 103.504859 19.834201V99.093701A101.51363 101.51363 0 0 0 788.254507 0.000781zM295.054441 640.747004V147.507894l394.146189 246.600033z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.getMenuConfig(e6), r2 = n2.allowedFileTypes, o2 = void 0 === r2 ? [] : r2, i2 = n2.customBrowseAndUpload;
    if (i2) i2(function(t3, n3) {
      return fk(e6, t3, n3);
    });
    else {
      var a2 = "";
      o2.length > 0 && (a2 = 'accept="'.concat(o2.join(", "), '"'));
      var s2 = am("body"), u2 = am('<input type="file" '.concat(a2, " multiple/>"));
      u2.hide(), s2.append(u2), u2.click(), u2.on("change", function() {
        var t3 = u2[0].files;
        !(function(e7, t4) {
          Xg(this, void 0, void 0, function() {
            var n3, r3, o3, i3, a3, s3, u3, l2, c2, d2, f2, p2;
            return Zg(this, function(h2) {
              switch (h2.label) {
                case 0:
                  if (null == t4) return [2];
                  n3 = Array.prototype.slice.call(t4), r3 = [], o3 = gk(e7).customUpload, h2.label = 1;
                case 1:
                  h2.trys.push([1, 8, 9, 14]), i3 = true, a3 = tv(n3), h2.label = 2;
                case 2:
                  return [4, a3.next()];
                case 3:
                  return s3 = h2.sent(), (c2 = s3.done) ? [3, 7] : (p2 = s3.value, i3 = false, u3 = p2, o3 ? [4, o3(u3, function(t5, n4) {
                    return fk(e7, t5, n4);
                  }, e7)] : [3, 5]);
                case 4:
                  return h2.sent(), [3, 6];
                case 5:
                  r3.push(u3), h2.label = 6;
                case 6:
                  return i3 = true, [3, 2];
                case 7:
                  return [3, 14];
                case 8:
                  return l2 = h2.sent(), d2 = { error: l2 }, [3, 14];
                case 9:
                  return h2.trys.push([9, , 12, 13]), i3 || c2 || !(f2 = a3.return) ? [3, 11] : [4, f2.call(a3)];
                case 10:
                  h2.sent(), h2.label = 11;
                case 11:
                  return [3, 13];
                case 12:
                  if (d2) throw d2.error;
                  return [7];
                case 13:
                  return [7];
                case 14:
                  return r3.length > 0 ? [4, mk(e7, r3)] : [3, 16];
                case 15:
                  h2.sent(), h2.label = 16;
                case 16:
                  return [2];
              }
            });
          });
        })(e6, t3);
      });
    }
  }, e5.prototype.isDisabled = function(e6) {
    var t2 = e6.selection;
    return null == t2 || (!fg.isCollapsed(t2) || !!_y.getSelectedElems(e6).some(function(t3) {
      var n2 = _y.getNodeType(t3);
      return "pre" === n2 || ("list-item" === n2 || !!e6.isVoid(t3));
    }));
  }, e5.prototype.getMenuConfig = function(e6) {
    return e6.getMenuConfig("uploadVideo");
  }, e5;
})();
function bk(e5, t2, n2, r2, o2, i2) {
  return void 0 === t2 && (t2 = ""), void 0 === n2 && (n2 = "auto"), void 0 === r2 && (r2 = "auto"), void 0 === o2 && (o2 = {}), void 0 === i2 && (i2 = "center"), { type: "video", src: e5, poster: t2, width: n2, height: r2, style: o2, children: [{ text: "" }], textAlign: i2 };
}
var Ek = { selector: 'div[data-w-e-type="video"]', parseElemHtml: function(e5, t2, n2) {
  var r2 = am(e5), o2 = "", i2 = "", a2 = "auto", s2 = "auto", u2 = {}, l2 = r2.find("iframe");
  if (l2.length > 0) return a2 = l2.attr("width") || "auto", s2 = l2.attr("height") || "auto", u2 = sk(u2 = l2.attr("style") || ""), bk(o2 = l2[0].outerHTML, i2, a2, s2, u2, sk(r2.attr("style") || "")["text-align"] || "center");
  var c2 = r2.find("video");
  return (o2 = c2.attr("src") || "") || c2.length > 0 && (o2 = c2.find("source").attr("src") || ""), a2 = c2.attr("width") || "auto", s2 = c2.attr("height") || "auto", bk(o2, i2 = c2.attr("poster") || "", a2, s2, u2 = sk(u2 = c2.attr("style") || ""), sk(r2.attr("style") || "")["text-align"] || "center");
} };
var Ck = { selector: "iframe,video,p", preParseHtml: function(e5) {
  var t2 = am(e5), n2 = t2;
  if ("p" === rk(t2)) {
    var r2 = t2.children();
    if (1 === r2.length) {
      var o2 = r2[0], i2 = o2.tagName.toLowerCase();
      ["iframe", "video"].includes(i2) && (n2 = am(o2));
    }
  }
  var a2 = rk(n2);
  if ("iframe" !== a2 && "video" !== a2) return n2[0];
  if ("video" === n2.parent().attr("data-w-e-type")) return n2[0];
  var s2 = am('<div data-w-e-type="video" data-w-e-is-void style="text-align: center;"></div>');
  return s2.append(n2), s2[0];
} };
var Dk = { type: "video", renderElem: function(e5, t2, n2) {
  var r2, o2 = e5, i2 = o2.src, a2 = void 0 === i2 ? "" : i2, s2 = o2.poster, u2 = void 0 === s2 ? "" : s2, l2 = o2.key, c2 = void 0 === l2 ? "" : l2, d2 = o2.width, f2 = void 0 === d2 ? "auto" : d2, p2 = o2.height, h2 = void 0 === p2 ? "auto" : p2, g2 = o2.style, v2 = void 0 === g2 ? {} : g2, m2 = o2.textAlign, y2 = void 0 === m2 ? "center" : m2, b2 = _y.isNodeSelected(n2, e5);
  if (0 === a2.trim().indexOf("<iframe ")) {
    r2 = TD("div", { className: "w-e-textarea-video-container", "data-selected": b2 ? "true" : "", style: { textAlign: y2 }, innerHTML: ok(a2, f2, h2, v2) });
  } else {
    var E2 = TD("video", { key: c2, poster: u2, controls: true, style: v2 }, TD("source", { src: a2, type: "video/mp4" }), "Sorry, your browser doesn't support embedded videos.\n 抱歉，浏览器不支持 video 视频");
    "auto" !== f2 && (E2.data.width = f2), "auto" !== h2 && (E2.data.height = h2), r2 = TD("div", { className: "w-e-textarea-video-container", "data-selected": b2 ? "true" : "", style: { textAlign: y2 } }, E2);
  }
  var C2 = cD("div", { props: { contentEditable: false }, on: { mousedown: function(e6) {
    return e6.preventDefault();
  } } }, r2);
  return C2;
} }, wk = { renderElems: [Dk], elemsToHtml: [ik], preParseHtml: [Ck], parseElemsHtml: [Ek], menus: [{ key: "insertVideo", factory: function() {
  return new hk();
}, config: { onInsertedVideo: function(e5) {
}, checkVideo: function(e5, t2) {
  return true;
}, parseVideoSrc: function(e5) {
  return e5;
} } }, { key: "uploadVideo", factory: function() {
  return new yk();
}, config: { server: "", fieldName: "wangeditor-uploaded-video", maxFileSize: 10485760, maxNumberOfFiles: 5, allowedFileTypes: ["video/*"], meta: {}, metaWithUrl: false, withCredentials: false, timeout: 3e4, onBeforeUpload: function(e5) {
  return e5;
}, onProgress: function(e5) {
}, onSuccess: function(e5, t2) {
}, onFailed: function(e5, t2) {
  console.error("'".concat(e5.name, "' upload failed"), t2);
}, onError: function(e5, t2, n2) {
  console.error("'".concat(e5.name, " upload error"), t2, n2);
} } }, { key: "editVideoSize", factory: function() {
  return new lk();
} }, { key: "editVideoSrc", factory: function() {
  return new dk();
} }], editorPlugin: function(e5) {
  var t2 = e5.isVoid, n2 = e5.normalizeNode, r2 = e5;
  return r2.isVoid = function(e6) {
    return "video" === e6.type || t2(e6);
  }, r2.normalizeNode = function(e6) {
    var t3 = Qg(e6, 2), o2 = t3[0], i2 = t3[1];
    "video" === _y.getNodeType(o2) && (_y.isLastNode(r2, o2) && jg.insertNodes(r2, _y.genEmptyParagraph(), { at: [i2[0] + 1] }));
    return n2([o2, i2]);
  }, r2;
} };
YE("en", { uploadImgModule: { uploadImage: "Upload Image", uploadError: "{{fileName}} upload error" } }), YE("zh-CN", { uploadImgModule: { uploadImage: "上传图片", uploadError: "{{fileName}} 上传出错" } });
Nm && (am.fn.append = Nm), gm && (am.fn.on = gm), Pm && (am.fn.remove = Pm), hm && (am.fn.val = hm), Mm && (am.fn.click = Mm), Em && (am.fn.hide = Em);
var Sk = /* @__PURE__ */ new WeakMap();
function Ak(e5) {
  return e5.getMenuConfig("uploadImage");
}
function xk(e5, t2) {
  return Xg(this, void 0, void 0, function() {
    return Zg(this, function(n2) {
      return [2, new Promise(function(n3) {
        var r2 = new FileReader();
        r2.readAsDataURL(t2), r2.onload = function() {
          var o2 = r2.result;
          if (o2) {
            var i2 = o2.toString(), a2 = 0 === i2.indexOf("data:image") ? "" : i2;
            YO(e5, i2, t2.name, a2), n3("ok");
          }
        };
      })];
    });
  });
}
function Ok(e5, t2) {
  return Xg(this, void 0, void 0, function() {
    var n2, r2;
    return Zg(this, function(o2) {
      switch (o2.label) {
        case 0:
          return n2 = (function(e6) {
            var t3 = Sk.get(e6);
            if (null != t3) return t3;
            var n3 = Ak(e6), r3 = n3.onSuccess, o3 = n3.onProgress, i2 = n3.onFailed, a2 = n3.customInsert, s2 = n3.onError;
            return t3 = YA(Yg(Yg({}, n3), { onProgress: function(t4) {
              e6.showProgressBar(t4), o3 && o3(t4);
            }, onSuccess: function(t4, n4) {
              if (a2) return a2(n4, function(t5, n5, r4) {
                return YO(e6, t5, n5, r4);
              }), void r3(t4, n4);
              var o4 = n4.errno, s3 = void 0 === o4 ? 1 : o4, u2 = n4.data, l2 = void 0 === u2 ? {} : u2;
              if (0 === s3) {
                if (Array.isArray(l2)) l2.forEach(function(t5) {
                  var n5 = t5.url, r4 = void 0 === n5 ? "" : n5, o5 = t5.alt, i3 = void 0 === o5 ? "" : o5, a3 = t5.href;
                  YO(e6, r4, i3, void 0 === a3 ? "" : a3);
                });
                else {
                  var c2 = l2.url, d2 = void 0 === c2 ? "" : c2, f2 = l2.alt, p2 = void 0 === f2 ? "" : f2, h2 = l2.href;
                  YO(e6, d2, p2, void 0 === h2 ? "" : h2);
                }
                r3(t4, n4);
              } else i2(t4, n4);
            }, onError: function(e7, t4, n4) {
              s2(e7, t4, n4);
            } })), Sk.set(e6, t3), t3;
          })(e5), r2 = t2.map(function(e6) {
            return { name: e6.name, type: e6.type, size: e6.size, data: e6 };
          }), n2.addFiles(r2), [4, n2.upload()];
        case 1:
          return o2.sent(), [2];
      }
    });
  });
}
function Nk(e5, t2) {
  return Xg(this, void 0, void 0, function() {
    var n2, r2, o2, i2, a2, s2, u2, l2, c2, d2, f2, p2, h2, g2, v2;
    return Zg(this, function(m2) {
      switch (m2.label) {
        case 0:
          if (null == t2) return [2];
          n2 = Array.prototype.slice.call(t2), r2 = Ak(e5), o2 = r2.customUpload, i2 = r2.base64LimitSize, a2 = [], m2.label = 1;
        case 1:
          m2.trys.push([1, 10, 11, 16]), s2 = true, u2 = tv(n2), m2.label = 2;
        case 2:
          return [4, u2.next()];
        case 3:
          return l2 = m2.sent(), (p2 = l2.done) ? [3, 9] : (v2 = l2.value, s2 = false, d2 = (c2 = v2).size, i2 && d2 <= i2 ? [4, xk(e5, c2)] : [3, 5]);
        case 4:
          return m2.sent(), [3, 8];
        case 5:
          return o2 ? [4, o2(c2, function(t3, n3, r3) {
            return YO(e5, t3, n3, r3);
          }, e5)] : [3, 7];
        case 6:
          return m2.sent(), [3, 8];
        case 7:
          a2.push(c2), m2.label = 8;
        case 8:
          return s2 = true, [3, 2];
        case 9:
          return [3, 16];
        case 10:
          return f2 = m2.sent(), h2 = { error: f2 }, [3, 16];
        case 11:
          return m2.trys.push([11, , 14, 15]), s2 || p2 || !(g2 = u2.return) ? [3, 13] : [4, g2.call(u2)];
        case 12:
          m2.sent(), m2.label = 13;
        case 13:
          return [3, 15];
        case 14:
          if (h2) throw h2.error;
          return [7];
        case 15:
          return [7];
        case 16:
          return a2.length > 0 ? [4, Ok(e5, a2)] : [3, 18];
        case 17:
          m2.sent(), m2.label = 18;
        case 18:
          return [2];
      }
    });
  });
}
var Bk = (function() {
  function e5() {
    this.title = QE("uploadImgModule.uploadImage"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M828.708571 585.045333a48.761905 48.761905 0 0 0-48.737523 48.761905v18.529524l-72.143238-72.167619a135.972571 135.972571 0 0 0-191.585524 0l-34.133334 34.133333-120.880762-120.953905a138.898286 138.898286 0 0 0-191.585523 0l-72.167619 72.167619V292.400762a48.786286 48.786286 0 0 1 48.761904-48.761905h341.23581a48.737524 48.737524 0 0 0 34.474667-83.285333 48.737524 48.737524 0 0 0-34.474667-14.287238H146.236952A146.212571 146.212571 0 0 0 0 292.400762v585.289143A146.358857 146.358857 0 0 0 146.236952 1024h584.996572a146.212571 146.212571 0 0 0 146.236952-146.310095V633.807238a48.786286 48.786286 0 0 0-48.761905-48.761905zM146.261333 926.45181a48.737524 48.737524 0 0 1-48.761904-48.761905v-174.128762l141.409523-141.458286a38.497524 38.497524 0 0 1 53.126096 0l154.526476 154.624 209.627428 209.724953H146.236952z m633.734096-48.761905c-0.073143 9.337905-3.145143 18.383238-8.777143 25.843809l-219.843048-220.94019 34.133333-34.133334a37.546667 37.546667 0 0 1 53.613715 0l140.873143 141.897143V877.714286zM1009.615238 160.231619L863.329524 13.897143a48.737524 48.737524 0 0 0-16.091429-10.24c-11.849143-4.87619-25.161143-4.87619-37.059047 0a48.761905 48.761905 0 0 0-16.067048 10.24l-146.236952 146.334476a49.005714 49.005714 0 0 0 69.217523 69.241905l62.902858-63.390476v272.627809a48.761905 48.761905 0 1 0 97.475047 0V166.083048l62.902857 63.390476a48.737524 48.737524 0 0 0 69.217524 0 48.761905 48.761905 0 0 0 0-69.241905z"></path></svg>', this.tag = "button";
  }
  return e5.prototype.getValue = function(e6) {
    return "";
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.isDisabled = function(e6) {
    return GO(e6);
  }, e5.prototype.getMenuConfig = function(e6) {
    return e6.getMenuConfig("uploadImage");
  }, e5.prototype.exec = function(e6, t2) {
    var n2 = this.getMenuConfig(e6), r2 = n2.allowedFileTypes, o2 = void 0 === r2 ? [] : r2, i2 = n2.customBrowseAndUpload;
    if (i2) i2(function(t3, n3, r3) {
      return YO(e6, t3, n3, r3);
    });
    else {
      var a2 = "";
      o2.length > 0 && (a2 = 'accept="'.concat(o2.join(", "), '"'));
      var s2 = am("body"), u2 = am('<input type="file" '.concat(a2, " multiple/>"));
      u2.hide(), s2.append(u2), u2.click(), u2.on("change", function() {
        var t3 = u2[0].files;
        Nk(e6, t3);
      });
    }
  }, e5;
})();
var Tk = { menus: [{ key: "uploadImage", factory: function() {
  return new Bk();
}, config: { server: "", fieldName: "wangeditor-uploaded-image", maxFileSize: 2097152, maxNumberOfFiles: 100, allowedFileTypes: ["image/*"], meta: {}, metaWithUrl: false, withCredentials: false, timeout: 1e4, onBeforeUpload: function(e5) {
  return e5;
}, onProgress: function(e5) {
}, onSuccess: function(e5, t2) {
}, onFailed: function(e5, t2) {
  console.error("'".concat(e5.name, "' upload failed"), t2);
}, onError: function(e5, t2, n2) {
  console.error("'".concat(e5.name, "' upload error"), n2);
}, base64LimitSize: 0 } }], editorPlugin: function(e5) {
  var t2 = e5.insertData, n2 = e5;
  return n2.insertData = function(r2) {
    if (GO(n2)) t2(r2);
    else if (r2.getData("text/plain")) t2(r2);
    else {
      var o2 = r2.files;
      if (o2.length <= 0) t2(r2);
      else Array.prototype.slice.call(o2).some(function(e6) {
        return "image" === Qg(e6.type.split("/"), 1)[0];
      }) ? Nk(e5, o2) : t2(r2);
    }
  }, n2;
} };
YE("en", { highLightModule: { selectLang: "Language" } }), YE("zh-CN", { highLightModule: { selectLang: "选择语言" } });
var kk, Fk = { exports: {} };
var Ik = (kk || (kk = 1, (function(e5) {
  var t2 = (function(e6) {
    var t3 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n2 = 0, r2 = {}, o2 = { manual: e6.Prism && e6.Prism.manual, disableWorkerMessageHandler: e6.Prism && e6.Prism.disableWorkerMessageHandler, util: { encode: function e7(t4) {
      return t4 instanceof i2 ? new i2(t4.type, e7(t4.content), t4.alias) : Array.isArray(t4) ? t4.map(e7) : t4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e7) {
      return Object.prototype.toString.call(e7).slice(8, -1);
    }, objId: function(e7) {
      return e7.__id || Object.defineProperty(e7, "__id", { value: ++n2 }), e7.__id;
    }, clone: function e7(t4, n3) {
      var r3, i3;
      switch (n3 = n3 || {}, o2.util.type(t4)) {
        case "Object":
          if (i3 = o2.util.objId(t4), n3[i3]) return n3[i3];
          for (var a3 in r3 = {}, n3[i3] = r3, t4) t4.hasOwnProperty(a3) && (r3[a3] = e7(t4[a3], n3));
          return r3;
        case "Array":
          return i3 = o2.util.objId(t4), n3[i3] ? n3[i3] : (r3 = [], n3[i3] = r3, t4.forEach(function(t5, o3) {
            r3[o3] = e7(t5, n3);
          }), r3);
        default:
          return t4;
      }
    }, getLanguage: function(e7) {
      for (; e7; ) {
        var n3 = t3.exec(e7.className);
        if (n3) return n3[1].toLowerCase();
        e7 = e7.parentElement;
      }
      return "none";
    }, setLanguage: function(e7, n3) {
      e7.className = e7.className.replace(RegExp(t3, "gi"), ""), e7.classList.add("language-" + n3);
    }, currentScript: function() {
      if ("undefined" == typeof document) return null;
      if (document.currentScript && "SCRIPT" === document.currentScript.tagName) return document.currentScript;
      try {
        throw new Error();
      } catch (r3) {
        var e7 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r3.stack) || [])[1];
        if (e7) {
          var t4 = document.getElementsByTagName("script");
          for (var n3 in t4) if (t4[n3].src == e7) return t4[n3];
        }
        return null;
      }
    }, isActive: function(e7, t4, n3) {
      for (var r3 = "no-" + t4; e7; ) {
        var o3 = e7.classList;
        if (o3.contains(t4)) return true;
        if (o3.contains(r3)) return false;
        e7 = e7.parentElement;
      }
      return !!n3;
    } }, languages: { plain: r2, plaintext: r2, text: r2, txt: r2, extend: function(e7, t4) {
      var n3 = o2.util.clone(o2.languages[e7]);
      for (var r3 in t4) n3[r3] = t4[r3];
      return n3;
    }, insertBefore: function(e7, t4, n3, r3) {
      var i3 = (r3 = r3 || o2.languages)[e7], a3 = {};
      for (var s3 in i3) if (i3.hasOwnProperty(s3)) {
        if (s3 == t4) for (var u3 in n3) n3.hasOwnProperty(u3) && (a3[u3] = n3[u3]);
        n3.hasOwnProperty(s3) || (a3[s3] = i3[s3]);
      }
      var l3 = r3[e7];
      return r3[e7] = a3, o2.languages.DFS(o2.languages, function(t5, n4) {
        n4 === l3 && t5 != e7 && (this[t5] = a3);
      }), a3;
    }, DFS: function e7(t4, n3, r3, i3) {
      i3 = i3 || {};
      var a3 = o2.util.objId;
      for (var s3 in t4) if (t4.hasOwnProperty(s3)) {
        n3.call(t4, s3, t4[s3], r3 || s3);
        var u3 = t4[s3], l3 = o2.util.type(u3);
        "Object" !== l3 || i3[a3(u3)] ? "Array" !== l3 || i3[a3(u3)] || (i3[a3(u3)] = true, e7(u3, n3, s3, i3)) : (i3[a3(u3)] = true, e7(u3, n3, null, i3));
      }
    } }, plugins: {}, highlightAll: function(e7, t4) {
      o2.highlightAllUnder(document, e7, t4);
    }, highlightAllUnder: function(e7, t4, n3) {
      var r3 = { callback: n3, container: e7, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      o2.hooks.run("before-highlightall", r3), r3.elements = Array.prototype.slice.apply(r3.container.querySelectorAll(r3.selector)), o2.hooks.run("before-all-elements-highlight", r3);
      for (var i3, a3 = 0; i3 = r3.elements[a3++]; ) o2.highlightElement(i3, true === t4, r3.callback);
    }, highlightElement: function(t4, n3, r3) {
      var i3 = o2.util.getLanguage(t4), a3 = o2.languages[i3];
      o2.util.setLanguage(t4, i3);
      var s3 = t4.parentElement;
      s3 && "pre" === s3.nodeName.toLowerCase() && o2.util.setLanguage(s3, i3);
      var u3 = { element: t4, language: i3, grammar: a3, code: t4.textContent };
      function l3(e7) {
        u3.highlightedCode = e7, o2.hooks.run("before-insert", u3), u3.element.innerHTML = u3.highlightedCode, o2.hooks.run("after-highlight", u3), o2.hooks.run("complete", u3), r3 && r3.call(u3.element);
      }
      if (o2.hooks.run("before-sanity-check", u3), (s3 = u3.element.parentElement) && "pre" === s3.nodeName.toLowerCase() && !s3.hasAttribute("tabindex") && s3.setAttribute("tabindex", "0"), !u3.code) return o2.hooks.run("complete", u3), void (r3 && r3.call(u3.element));
      if (o2.hooks.run("before-highlight", u3), u3.grammar) if (n3 && e6.Worker) {
        var c3 = new Worker(o2.filename);
        c3.onmessage = function(e7) {
          l3(e7.data);
        }, c3.postMessage(JSON.stringify({ language: u3.language, code: u3.code, immediateClose: true }));
      } else l3(o2.highlight(u3.code, u3.grammar, u3.language));
      else l3(o2.util.encode(u3.code));
    }, highlight: function(e7, t4, n3) {
      var r3 = { code: e7, grammar: t4, language: n3 };
      if (o2.hooks.run("before-tokenize", r3), !r3.grammar) throw new Error('The language "' + r3.language + '" has no grammar.');
      return r3.tokens = o2.tokenize(r3.code, r3.grammar), o2.hooks.run("after-tokenize", r3), i2.stringify(o2.util.encode(r3.tokens), r3.language);
    }, tokenize: function(e7, t4) {
      var n3 = t4.rest;
      if (n3) {
        for (var r3 in n3) t4[r3] = n3[r3];
        delete t4.rest;
      }
      var o3 = new u2();
      return l2(o3, o3.head, e7), s2(e7, o3, t4, o3.head, 0), (function(e8) {
        for (var t5 = [], n4 = e8.head.next; n4 !== e8.tail; ) t5.push(n4.value), n4 = n4.next;
        return t5;
      })(o3);
    }, hooks: { all: {}, add: function(e7, t4) {
      var n3 = o2.hooks.all;
      n3[e7] = n3[e7] || [], n3[e7].push(t4);
    }, run: function(e7, t4) {
      var n3 = o2.hooks.all[e7];
      if (n3 && n3.length) for (var r3, i3 = 0; r3 = n3[i3++]; ) r3(t4);
    } }, Token: i2 };
    function i2(e7, t4, n3, r3) {
      this.type = e7, this.content = t4, this.alias = n3, this.length = 0 | (r3 || "").length;
    }
    function a2(e7, t4, n3, r3) {
      e7.lastIndex = t4;
      var o3 = e7.exec(n3);
      if (o3 && r3 && o3[1]) {
        var i3 = o3[1].length;
        o3.index += i3, o3[0] = o3[0].slice(i3);
      }
      return o3;
    }
    function s2(e7, t4, n3, r3, u3, d3) {
      for (var f3 in n3) if (n3.hasOwnProperty(f3) && n3[f3]) {
        var p3 = n3[f3];
        p3 = Array.isArray(p3) ? p3 : [p3];
        for (var h2 = 0; h2 < p3.length; ++h2) {
          if (d3 && d3.cause == f3 + "," + h2) return;
          var g2 = p3[h2], v2 = g2.inside, m2 = !!g2.lookbehind, y2 = !!g2.greedy, b2 = g2.alias;
          if (y2 && !g2.pattern.global) {
            var E2 = g2.pattern.toString().match(/[imsuy]*$/)[0];
            g2.pattern = RegExp(g2.pattern.source, E2 + "g");
          }
          for (var C2 = g2.pattern || g2, D2 = r3.next, w2 = u3; D2 !== t4.tail && !(d3 && w2 >= d3.reach); w2 += D2.value.length, D2 = D2.next) {
            var S2 = D2.value;
            if (t4.length > e7.length) return;
            if (!(S2 instanceof i2)) {
              var A2, x2 = 1;
              if (y2) {
                if (!(A2 = a2(C2, w2, e7, m2)) || A2.index >= e7.length) break;
                var O2 = A2.index, N2 = A2.index + A2[0].length, B2 = w2;
                for (B2 += D2.value.length; O2 >= B2; ) B2 += (D2 = D2.next).value.length;
                if (w2 = B2 -= D2.value.length, D2.value instanceof i2) continue;
                for (var T2 = D2; T2 !== t4.tail && (B2 < N2 || "string" == typeof T2.value); T2 = T2.next) x2++, B2 += T2.value.length;
                x2--, S2 = e7.slice(w2, B2), A2.index -= w2;
              } else if (!(A2 = a2(C2, 0, S2, m2))) continue;
              O2 = A2.index;
              var k2 = A2[0], F2 = S2.slice(0, O2), I2 = S2.slice(O2 + k2.length), P2 = w2 + S2.length;
              d3 && P2 > d3.reach && (d3.reach = P2);
              var _2 = D2.prev;
              if (F2 && (_2 = l2(t4, _2, F2), w2 += F2.length), c2(t4, _2, x2), D2 = l2(t4, _2, new i2(f3, v2 ? o2.tokenize(k2, v2) : k2, b2, k2)), I2 && l2(t4, D2, I2), x2 > 1) {
                var R2 = { cause: f3 + "," + h2, reach: P2 };
                s2(e7, t4, n3, D2.prev, w2, R2), d3 && R2.reach > d3.reach && (d3.reach = R2.reach);
              }
            }
          }
        }
      }
    }
    function u2() {
      var e7 = { value: null, prev: null, next: null }, t4 = { value: null, prev: e7, next: null };
      e7.next = t4, this.head = e7, this.tail = t4, this.length = 0;
    }
    function l2(e7, t4, n3) {
      var r3 = t4.next, o3 = { value: n3, prev: t4, next: r3 };
      return t4.next = o3, r3.prev = o3, e7.length++, o3;
    }
    function c2(e7, t4, n3) {
      for (var r3 = t4.next, o3 = 0; o3 < n3 && r3 !== e7.tail; o3++) r3 = r3.next;
      t4.next = r3, r3.prev = t4, e7.length -= o3;
    }
    if (e6.Prism = o2, i2.stringify = function e7(t4, n3) {
      if ("string" == typeof t4) return t4;
      if (Array.isArray(t4)) {
        var r3 = "";
        return t4.forEach(function(t5) {
          r3 += e7(t5, n3);
        }), r3;
      }
      var i3 = { type: t4.type, content: e7(t4.content, n3), tag: "span", classes: ["token", t4.type], attributes: {}, language: n3 }, a3 = t4.alias;
      a3 && (Array.isArray(a3) ? Array.prototype.push.apply(i3.classes, a3) : i3.classes.push(a3)), o2.hooks.run("wrap", i3);
      var s3 = "";
      for (var u3 in i3.attributes) s3 += " " + u3 + '="' + (i3.attributes[u3] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i3.tag + ' class="' + i3.classes.join(" ") + '"' + s3 + ">" + i3.content + "</" + i3.tag + ">";
    }, !e6.document) return e6.addEventListener ? (o2.disableWorkerMessageHandler || e6.addEventListener("message", function(t4) {
      var n3 = JSON.parse(t4.data), r3 = n3.language, i3 = n3.code, a3 = n3.immediateClose;
      e6.postMessage(o2.highlight(i3, o2.languages[r3], r3)), a3 && e6.close();
    }, false), o2) : o2;
    var d2 = o2.util.currentScript();
    function f2() {
      o2.manual || o2.highlightAll();
    }
    if (d2 && (o2.filename = d2.src, d2.hasAttribute("data-manual") && (o2.manual = true)), !o2.manual) {
      var p2 = document.readyState;
      "loading" === p2 || "interactive" === p2 && d2 && d2.defer ? document.addEventListener("DOMContentLoaded", f2) : window.requestAnimationFrame ? window.requestAnimationFrame(f2) : window.setTimeout(f2, 16);
    }
    return o2;
  })("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
  /**
  		 * Prism: Lightweight, robust, elegant syntax highlighting
  		 *
  		 * @license MIT <https://opensource.org/licenses/MIT>
  		 * @author Lea Verou <https://lea.verou.me>
  		 * @namespace
  		 * @public
  		 */
  e5.exports && (e5.exports = t2), void 0 !== y && (y.Prism = t2), t2.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, t2.languages.markup.tag.inside["attr-value"].inside.entity = t2.languages.markup.entity, t2.languages.markup.doctype.inside["internal-subset"].inside = t2.languages.markup, t2.hooks.add("wrap", function(e6) {
    "entity" === e6.type && (e6.attributes.title = e6.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t2.languages.markup.tag, "addInlined", { value: function(e6, n2) {
    var r2 = {};
    r2["language-" + n2] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: t2.languages[n2] }, r2.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var o2 = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r2 } };
    o2["language-" + n2] = { pattern: /[\s\S]+/, inside: t2.languages[n2] };
    var i2 = {};
    i2[e6] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
      return e6;
    }), "i"), lookbehind: true, greedy: true, inside: o2 }, t2.languages.insertBefore("markup", "cdata", i2);
  } }), Object.defineProperty(t2.languages.markup.tag, "addAttribute", { value: function(e6, n2) {
    t2.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e6 + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [n2, "language-" + n2], inside: t2.languages[n2] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
  } }), t2.languages.html = t2.languages.markup, t2.languages.mathml = t2.languages.markup, t2.languages.svg = t2.languages.markup, t2.languages.xml = t2.languages.extend("markup", {}), t2.languages.ssml = t2.languages.xml, t2.languages.atom = t2.languages.xml, t2.languages.rss = t2.languages.xml, (function(e6) {
    var t3 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    e6.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t3.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + t3.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t3.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t3.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: t3, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, e6.languages.css.atrule.inside.rest = e6.languages.css;
    var n2 = e6.languages.markup;
    n2 && (n2.tag.addInlined("style", "css"), n2.tag.addAttribute("style", "css"));
  })(t2), t2.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, t2.languages.javascript = t2.languages.extend("clike", { "class-name": [t2.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), t2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t2.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: t2.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: t2.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: t2.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: t2.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: t2.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), t2.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: t2.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), t2.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), t2.languages.markup && (t2.languages.markup.tag.addInlined("script", "javascript"), t2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), t2.languages.js = t2.languages.javascript, (function() {
    if (void 0 !== t2 && "undefined" != typeof document) {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var e6 = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }, n2 = "data-src-status", r2 = "loading", o2 = "loaded", i2 = "pre[data-src]:not([" + n2 + '="' + o2 + '"]):not([' + n2 + '="' + r2 + '"])';
      t2.hooks.add("before-highlightall", function(e7) {
        e7.selector += ", " + i2;
      }), t2.hooks.add("before-sanity-check", function(a3) {
        var s2 = a3.element;
        if (s2.matches(i2)) {
          a3.code = "", s2.setAttribute(n2, r2);
          var u2 = s2.appendChild(document.createElement("CODE"));
          u2.textContent = "Loading…";
          var l2 = s2.getAttribute("data-src"), c2 = a3.language;
          if ("none" === c2) {
            var d2 = (/\.(\w+)$/.exec(l2) || [, "none"])[1];
            c2 = e6[d2] || d2;
          }
          t2.util.setLanguage(u2, c2), t2.util.setLanguage(s2, c2);
          var f2 = t2.plugins.autoloader;
          f2 && f2.loadLanguages(c2), (function(e7, t3, n3) {
            var r3 = new XMLHttpRequest();
            r3.open("GET", e7, true), r3.onreadystatechange = function() {
              4 == r3.readyState && (r3.status < 400 && r3.responseText ? t3(r3.responseText) : r3.status >= 400 ? n3("✖ Error " + r3.status + " while fetching file: " + r3.statusText) : n3("✖ Error: File does not exist or is empty"));
            }, r3.send(null);
          })(l2, function(e7) {
            s2.setAttribute(n2, o2);
            var r3 = (function(e8) {
              var t3 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e8 || "");
              if (t3) {
                var n3 = Number(t3[1]), r4 = t3[2], o3 = t3[3];
                return r4 ? o3 ? [n3, Number(o3)] : [n3, void 0] : [n3, n3];
              }
            })(s2.getAttribute("data-range"));
            if (r3) {
              var i3 = e7.split(/\r\n?|\n/g), a4 = r3[0], l3 = null == r3[1] ? i3.length : r3[1];
              a4 < 0 && (a4 += i3.length), a4 = Math.max(0, Math.min(a4 - 1, i3.length)), l3 < 0 && (l3 += i3.length), l3 = Math.max(0, Math.min(l3, i3.length)), e7 = i3.slice(a4, l3).join("\n"), s2.hasAttribute("data-start") || s2.setAttribute("data-start", String(a4 + 1));
            }
            u2.textContent = e7, t2.highlightElement(u2);
          }, function(e7) {
            s2.setAttribute(n2, "failed"), u2.textContent = e7;
          });
        }
      }), t2.plugins.fileHighlight = { highlight: function(e7) {
        for (var n3, r3 = (e7 || document).querySelectorAll(i2), o3 = 0; n3 = r3[o3++]; ) t2.highlightElement(n3);
      } };
      var a2 = false;
      t2.fileHighlight = function() {
        a2 || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), a2 = true), t2.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }
  })();
})(Fk)), Fk.exports), Pk = b(Ik);
!(function(e5) {
  var t2 = e5.util.clone(e5.languages.javascript), n2 = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, r2 = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, o2 = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i2(e6, t3) {
    return e6 = e6.replace(/<S>/g, function() {
      return n2;
    }).replace(/<BRACES>/g, function() {
      return r2;
    }).replace(/<SPREAD>/g, function() {
      return o2;
    }), RegExp(e6, t3);
  }
  o2 = i2(o2).source, e5.languages.jsx = e5.languages.extend("markup", t2), e5.languages.jsx.tag.pattern = i2(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e5.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e5.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e5.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e5.languages.jsx.tag.inside.comment = t2.comment, e5.languages.insertBefore("inside", "attr-name", { spread: { pattern: i2(/<SPREAD>/.source), inside: e5.languages.jsx } }, e5.languages.jsx.tag), e5.languages.insertBefore("inside", "special-attr", { script: { pattern: i2(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e5.languages.jsx } } }, e5.languages.jsx.tag);
  var a2 = function(e6) {
    return e6 ? "string" == typeof e6 ? e6 : "string" == typeof e6.content ? e6.content : e6.content.map(a2).join("") : "";
  }, s2 = function(t3) {
    for (var n3 = [], r3 = 0; r3 < t3.length; r3++) {
      var o3 = t3[r3], i3 = false;
      if ("string" != typeof o3 && ("tag" === o3.type && o3.content[0] && "tag" === o3.content[0].type ? "</" === o3.content[0].content[0].content ? n3.length > 0 && n3[n3.length - 1].tagName === a2(o3.content[0].content[1]) && n3.pop() : "/>" === o3.content[o3.content.length - 1].content || n3.push({ tagName: a2(o3.content[0].content[1]), openedBraces: 0 }) : n3.length > 0 && "punctuation" === o3.type && "{" === o3.content ? n3[n3.length - 1].openedBraces++ : n3.length > 0 && n3[n3.length - 1].openedBraces > 0 && "punctuation" === o3.type && "}" === o3.content ? n3[n3.length - 1].openedBraces-- : i3 = true), (i3 || "string" == typeof o3) && n3.length > 0 && 0 === n3[n3.length - 1].openedBraces) {
        var u2 = a2(o3);
        r3 < t3.length - 1 && ("string" == typeof t3[r3 + 1] || "plain-text" === t3[r3 + 1].type) && (u2 += a2(t3[r3 + 1]), t3.splice(r3 + 1, 1)), r3 > 0 && ("string" == typeof t3[r3 - 1] || "plain-text" === t3[r3 - 1].type) && (u2 = a2(t3[r3 - 1]) + u2, t3.splice(r3 - 1, 1), r3--), t3[r3] = new e5.Token("plain-text", u2, null, u2);
      }
      o3.content && "string" != typeof o3.content && s2(o3.content);
    }
  };
  e5.hooks.add("after-tokenize", function(e6) {
    "jsx" !== e6.language && "tsx" !== e6.language || s2(e6.tokens);
  });
})(Prism);
var _k;
_k || (_k = 1, (function(e5) {
  e5.languages.typescript = e5.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e5.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e5.languages.typescript.parameter, delete e5.languages.typescript["literal-property"];
  var t2 = e5.languages.extend("typescript", {});
  delete t2["class-name"], e5.languages.typescript["class-name"].inside = t2, e5.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t2 } } } }), e5.languages.ts = e5.languages.typescript;
})(Prism)), Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e5) {
  "entity" === e5.type && (e5.attributes.title = e5.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(e5, t2) {
  var n2 = {};
  n2["language-" + t2] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[t2] }, n2.cdata = /^<!\[CDATA\[|\]\]>$/i;
  var r2 = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n2 } };
  r2["language-" + t2] = { pattern: /[\s\S]+/, inside: Prism.languages[t2] };
  var o2 = {};
  o2[e5] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e5;
  }), "i"), lookbehind: true, greedy: true, inside: r2 }, Prism.languages.insertBefore("markup", "cdata", o2);
} }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(e5, t2) {
  Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e5 + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [t2, "language-" + t2], inside: Prism.languages[t2] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, Prism.languages.go = Prism.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: true, greedy: true }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), Prism.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: true } }), delete Prism.languages.go["class-name"];
var Rk;
Rk || (Rk = 1, (function(e5) {
  var t2 = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, n2 = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: true, lookbehind: true }, { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: true, lookbehind: true }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/], r2 = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, o2 = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, i2 = /[{}\[\](),:;]/;
  e5.languages.php = { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" }, comment: t2, variable: /\$+(?:\w+\b|(?=\{))/, package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: true, inside: { punctuation: /\\/ } }, "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: true, alias: "class-name" }, "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: true, alias: "function" }, keyword: [{ pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i, alias: "type-casting", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i, alias: "type-declaration", greedy: true }, { pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i, alias: "type-declaration", greedy: true, lookbehind: true }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(\byield\s+)from\b/i, lookbehind: true }, /\bclass\b/i, { pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i, lookbehind: true }], "argument-name": { pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: true }, "class-name": [{ pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: true }, { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: true, inside: { punctuation: /\\/ } }, { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: n2, function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: true, inside: { punctuation: /\\/ } }, property: { pattern: /(->\s*)\w+/, lookbehind: true }, number: r2, operator: o2, punctuation: i2 };
  var a2 = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: true, inside: e5.languages.php }, s2 = [{ pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: a2 } }, { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: true }, { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: true, inside: { interpolation: a2 } }];
  e5.languages.insertBefore("php", "variable", { string: s2, attribute: { pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im, greedy: true, inside: { "attribute-content": { pattern: /^(#\[)[\s\S]+(?=\]$)/, lookbehind: true, inside: { comment: t2, string: s2, "attribute-class-name": [{ pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: true, lookbehind: true }, { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: n2, number: r2, operator: o2, punctuation: i2 } }, delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" } } } }), e5.hooks.add("before-tokenize", function(t3) {
    /<\?/.test(t3.code) && e5.languages["markup-templating"].buildPlaceholders(t3, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
  }), e5.hooks.add("after-tokenize", function(t3) {
    e5.languages["markup-templating"].tokenizePlaceholders(t3, "php");
  });
})(Prism)), Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: true }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), Prism.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: true } }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: true, greedy: true, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true }, Prism.languages.c.string], char: Prism.languages.c.char, comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: true, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } } }), Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete Prism.languages.c.boolean;
var Lk;
Lk || (Lk = 1, Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python);
var Mk;
Mk || (Mk = 1, (function(e5) {
  var t2 = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n2 = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r2 = { pattern: RegExp(/(^|[^\w.])/.source + n2 + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source), lookbehind: true, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } };
  e5.languages.java = e5.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/, lookbehind: true, greedy: true }, "class-name": [r2, { pattern: RegExp(/(^|[^\w.])/.source + n2 + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source), lookbehind: true, inside: r2.inside }, { pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n2 + /[A-Z]\w*\b/.source), lookbehind: true, inside: r2.inside }], keyword: t2, function: [e5.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: true }], number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: true }, constant: /\b[A-Z][A-Z_\d]+\b/ }), e5.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: true, alias: "string" }, char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: true } }), e5.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: true, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": r2, keyword: t2, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, import: [{ pattern: RegExp(/(\bimport\s+)/.source + n2 + /(?:[A-Z]\w*|\*)(?=\s*;)/.source), lookbehind: true, inside: { namespace: r2.inside.namespace, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }, { pattern: RegExp(/(\bimport\s+static\s+)/.source + n2 + /(?:\w+|\*)(?=\s*;)/.source), lookbehind: true, alias: "static", inside: { namespace: r2.inside.namespace, static: /\b\w+$/, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }], namespace: { pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
    return t2.source;
  })), lookbehind: true, inside: { punctuation: /\./ } } });
})(Prism));
var jk;
jk || (jk = 1, (function(e5) {
  var t2 = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n2 = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return t2.source;
  });
  e5.languages.cpp = e5.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return t2.source;
  })), lookbehind: true }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: t2, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: true }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e5.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return n2;
  }) + ")"), lookbehind: true, greedy: true, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: true } }), e5.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e5.languages.cpp } } } }), e5.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e5.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: true, greedy: true, inside: e5.languages.extend("cpp", {}) } }), e5.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e5.languages.cpp["base-clause"]);
})(Prism));
var Hk;
Hk || (Hk = 1, (function(e5) {
  function t2(e6, t3) {
    return e6.replace(/<<(\d+)>>/g, function(e7, n3) {
      return "(?:" + t3[+n3] + ")";
    });
  }
  function n2(e6, n3, r3) {
    return RegExp(t2(e6, n3), "");
  }
  function r2(e6, t3) {
    for (var n3 = 0; n3 < t3; n3++) e6 = e6.replace(/<<self>>/g, function() {
      return "(?:" + e6 + ")";
    });
    return e6.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var o2 = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", i2 = "class enum interface record struct", a2 = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)", s2 = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
  function u2(e6) {
    return "\\b(?:" + e6.trim().replace(/ /g, "|") + ")\\b";
  }
  var l2 = u2(i2), c2 = RegExp(u2(o2 + " " + i2 + " " + a2 + " " + s2)), d2 = u2(i2 + " " + a2 + " " + s2), f2 = u2(o2 + " " + i2 + " " + s2), p2 = r2(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), h2 = r2(/\((?:[^()]|<<self>>)*\)/.source, 2), g2 = /@?\b[A-Za-z_]\w*\b/.source, v2 = t2(/<<0>>(?:\s*<<1>>)?/.source, [g2, p2]), m2 = t2(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d2, v2]), y2 = /\[\s*(?:,\s*)*\]/.source, b2 = t2(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [m2, y2]), E2 = t2(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [p2, h2, y2]), C2 = t2(/\(<<0>>+(?:,<<0>>+)+\)/.source, [E2]), D2 = t2(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [C2, m2, y2]), w2 = { keyword: c2, punctuation: /[<>()?,.:[\]]/ }, S2 = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, A2 = /"(?:\\.|[^\\"\r\n])*"/.source, x2 = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  e5.languages.csharp = e5.languages.extend("clike", { string: [{ pattern: n2(/(^|[^$\\])<<0>>/.source, [x2]), lookbehind: true, greedy: true }, { pattern: n2(/(^|[^@$\\])<<0>>/.source, [A2]), lookbehind: true, greedy: true }], "class-name": [{ pattern: n2(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [m2]), lookbehind: true, inside: w2 }, { pattern: n2(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [g2, D2]), lookbehind: true, inside: w2 }, { pattern: n2(/(\busing\s+)<<0>>(?=\s*=)/.source, [g2]), lookbehind: true }, { pattern: n2(/(\b<<0>>\s+)<<1>>/.source, [l2, v2]), lookbehind: true, inside: w2 }, { pattern: n2(/(\bcatch\s*\(\s*)<<0>>/.source, [m2]), lookbehind: true, inside: w2 }, { pattern: n2(/(\bwhere\s+)<<0>>/.source, [g2]), lookbehind: true }, { pattern: n2(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [b2]), lookbehind: true, inside: w2 }, { pattern: n2(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [D2, f2, g2]), inside: w2 }], keyword: c2, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), e5.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), e5.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: n2(/([(,]\s*)<<0>>(?=\s*:)/.source, [g2]), lookbehind: true, alias: "punctuation" } }), e5.languages.insertBefore("csharp", "class-name", { namespace: { pattern: n2(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [g2]), lookbehind: true, inside: { punctuation: /\./ } }, "type-expression": { pattern: n2(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [h2]), lookbehind: true, alias: "class-name", inside: w2 }, "return-type": { pattern: n2(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [D2, m2]), inside: w2, alias: "class-name" }, "constructor-invocation": { pattern: n2(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [D2]), lookbehind: true, inside: w2, alias: "class-name" }, "generic-method": { pattern: n2(/<<0>>\s*<<1>>(?=\s*\()/.source, [g2, p2]), inside: { function: n2(/^<<0>>/.source, [g2]), generic: { pattern: RegExp(p2), alias: "class-name", inside: w2 } } }, "type-list": { pattern: n2(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [l2, v2, g2, D2, c2.source, h2, /\bnew\s*\(\s*\)/.source]), lookbehind: true, inside: { "record-arguments": { pattern: n2(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [v2, h2]), lookbehind: true, greedy: true, inside: e5.languages.csharp }, keyword: c2, "class-name": { pattern: RegExp(D2), greedy: true, inside: w2 }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: true, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: true, alias: "keyword" } } } });
  var O2 = A2 + "|" + S2, N2 = t2(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [O2]), B2 = r2(t2(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [N2]), 2), T2 = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, k2 = t2(/<<0>>(?:\s*\(<<1>>*\))?/.source, [m2, B2]);
  e5.languages.insertBefore("csharp", "class-name", { attribute: { pattern: n2(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [T2, k2]), lookbehind: true, greedy: true, inside: { target: { pattern: n2(/^<<0>>(?=\s*:)/.source, [T2]), alias: "keyword" }, "attribute-arguments": { pattern: n2(/\(<<0>>*\)/.source, [B2]), inside: e5.languages.csharp }, "class-name": { pattern: RegExp(m2), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });
  var F2 = /:[^}\r\n]+/.source, I2 = r2(t2(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [N2]), 2), P2 = t2(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [I2, F2]), _2 = r2(t2(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [O2]), 2), R2 = t2(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [_2, F2]);
  function L2(t3, r3) {
    return { interpolation: { pattern: n2(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t3]), lookbehind: true, inside: { "format-string": { pattern: n2(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r3, F2]), lookbehind: true, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e5.languages.csharp } } }, string: /[\s\S]+/ };
  }
  e5.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: n2(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [P2]), lookbehind: true, greedy: true, inside: L2(P2, I2) }, { pattern: n2(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [R2]), lookbehind: true, greedy: true, inside: L2(R2, _2) }], char: { pattern: RegExp(S2), greedy: true } }), e5.languages.dotnet = e5.languages.cs = e5.languages.csharp;
})(Prism)), Prism.languages["visual-basic"] = { comment: { pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i, inside: { keyword: /^REM/i } }, directive: { pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i, alias: "property", greedy: true }, string: { pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: true }, date: { pattern: /#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i, alias: "number" }, number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i, boolean: /\b(?:False|Nothing|True)\b/i, keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i, operator: /[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/, punctuation: /[{}().,:?]/ }, Prism.languages.vb = Prism.languages["visual-basic"], Prism.languages.vba = Prism.languages["visual-basic"], Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: true }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: true }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: true, lookbehind: true }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: true, lookbehind: true, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ };
var zk;
zk || (zk = 1, (function(e5) {
  e5.languages.ruby = e5.languages.extend("clike", { comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: true }, "class-name": { pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/, operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/, punctuation: /[(){}[\].,;]/ }), e5.languages.insertBefore("ruby", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } });
  var t2 = { pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/, lookbehind: true, inside: { content: { pattern: /^(#\{)[\s\S]+(?=\}$)/, lookbehind: true, inside: e5.languages.ruby }, delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" } } };
  delete e5.languages.ruby.function;
  var n2 = "(?:" + [/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source, /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source, /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|") + ")", r2 = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
  e5.languages.insertBefore("ruby", "keyword", { "regex-literal": [{ pattern: RegExp(/%r/.source + n2 + /[egimnosux]{0,6}/.source), greedy: true, inside: { interpolation: t2, regex: /[\s\S]+/ } }, { pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/, lookbehind: true, greedy: true, inside: { interpolation: t2, regex: /[\s\S]+/ } }], variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/, symbol: [{ pattern: RegExp(/(^|[^:]):/.source + r2), lookbehind: true, greedy: true }, { pattern: RegExp(/([\r\n{(,][ \t]*)/.source + r2 + /(?=:(?!:))/.source), lookbehind: true, greedy: true }], "method-definition": { pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/, lookbehind: true, inside: { function: /\b\w+$/, keyword: /^self\b/, "class-name": /^\w+/, punctuation: /\./ } } }), e5.languages.insertBefore("ruby", "string", { "string-literal": [{ pattern: RegExp(/%[qQiIwWs]?/.source + n2), greedy: true, inside: { interpolation: t2, string: /[\s\S]+/ } }, { pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/, greedy: true, inside: { interpolation: t2, string: /[\s\S]+/ } }, { pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ } }, interpolation: t2, string: /[\s\S]+/ } }, { pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i, inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/ } }, string: /[\s\S]+/ } }], "command-literal": [{ pattern: RegExp(/%x/.source + n2), greedy: true, inside: { interpolation: t2, command: { pattern: /[\s\S]+/, alias: "string" } } }, { pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/, greedy: true, inside: { interpolation: t2, command: { pattern: /[\s\S]+/, alias: "string" } } }] }), delete e5.languages.ruby.string, e5.languages.insertBefore("ruby", "number", { builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/, constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/ }), e5.languages.rb = e5.languages.ruby;
})(Prism)), Prism.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: true, greedy: true }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: true, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: true, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, Prism.languages.swift["string-literal"].forEach(function(e5) {
  e5.inside.interpolation.inside = Prism.languages.swift;
}), (function(e5) {
  var t2 = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n2 = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: true, alias: "punctuation", inside: null }, r2 = { bash: n2, environment: { pattern: RegExp("\\$" + t2), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: true, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: true }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: true, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: true, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t2), lookbehind: true, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
  e5.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: true, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: true }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t2), lookbehind: true, alias: "constant" } }, alias: "variable", lookbehind: true }, parameter: { pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/, alias: "variable", lookbehind: true }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: true, greedy: true, inside: r2 }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: true, greedy: true, inside: { bash: n2 } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: true, greedy: true, inside: r2 }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: true, greedy: true }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true, inside: { entity: r2.entity } }], environment: { pattern: RegExp("\\$?" + t2), alias: "constant" }, variable: r2.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: true }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: true }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: true, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: true }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: true } }, n2.inside = e5.languages.bash;
  for (var o2 = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i2 = r2.variable[1].inside, a2 = 0; a2 < o2.length; a2++) i2[o2[a2]] = e5.languages.bash[o2[a2]];
  e5.languages.sh = e5.languages.bash, e5.languages.shell = e5.languages.bash;
})(Prism), (function(e5) {
  var t2 = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function n2(e6) {
    return e6 = e6.replace(/<inner>/g, function() {
      return t2;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e6 + ")");
  }
  var r2 = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o2 = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r2;
  }), i2 = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e5.languages.markdown = e5.languages.extend("markup", {}), e5.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e5.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + o2 + i2 + "(?:" + o2 + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + o2 + i2 + ")(?:" + o2 + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(r2), inside: e5.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + o2 + ")" + i2 + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + o2 + "$"), inside: { "table-header": { pattern: RegExp(r2), alias: "important", inside: e5.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: n2(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: n2(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: n2(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: n2(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(t3) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(n3) {
      t3 !== n3 && (e5.languages.markdown[t3].inside.content.inside[n3] = e5.languages.markdown[n3]);
    });
  }), e5.hooks.add("after-tokenize", function(e6) {
    "markdown" !== e6.language && "md" !== e6.language || (function e7(t3) {
      if (t3 && "string" != typeof t3) for (var n3 = 0, r3 = t3.length; n3 < r3; n3++) {
        var o3 = t3[n3];
        if ("code" === o3.type) {
          var i3 = o3.content[1], a3 = o3.content[3];
          if (i3 && a3 && "code-language" === i3.type && "code-block" === a3.type && "string" == typeof i3.content) {
            var s3 = i3.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), u3 = "language-" + (s3 = (/[a-z][\w-]*/i.exec(s3) || [""])[0].toLowerCase());
            a3.alias ? "string" == typeof a3.alias ? a3.alias = [a3.alias, u3] : a3.alias.push(u3) : a3.alias = [u3];
          }
        } else e7(o3.content);
      }
    })(e6.tokens);
  }), e5.hooks.add("wrap", function(t3) {
    if ("code-block" === t3.type) {
      for (var n3 = "", r3 = 0, o3 = t3.classes.length; r3 < o3; r3++) {
        var i3 = t3.classes[r3], l2 = /language-(.+)/.exec(i3);
        if (l2) {
          n3 = l2[1];
          break;
        }
      }
      var c2 = e5.languages[n3];
      if (c2) t3.content = e5.highlight((function(e6) {
        var t4 = e6.replace(a2, "");
        return t4 = t4.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e7, t5) {
          var n4;
          if ("#" === (t5 = t5.toLowerCase())[0]) return n4 = "x" === t5[1] ? parseInt(t5.slice(2), 16) : Number(t5.slice(1)), u2(n4);
          var r4 = s2[t5];
          return r4 || e7;
        }), t4;
      })(t3.content), c2, n3);
      else if (n3 && "none" !== n3 && e5.plugins.autoloader) {
        var d2 = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random());
        t3.attributes.id = d2, e5.plugins.autoloader.loadLanguages(n3, function() {
          var t4 = document.getElementById(d2);
          t4 && (t4.innerHTML = e5.highlight(t4.textContent, e5.languages[n3], n3));
        });
      }
    }
  });
  var a2 = RegExp(e5.languages.markup.tag.pattern.source, "gi"), s2 = { amp: "&", lt: "<", gt: ">", quot: '"' }, u2 = String.fromCodePoint || String.fromCharCode;
  e5.languages.md = e5.languages.markdown;
})(Prism), Prism.languages.lua = { comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m, string: { pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/, greedy: true }, number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i, keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, function: /(?!\d)\w+(?=\s*(?:[({]))/, operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: true }], punctuation: /[\[\](){},;]|\.+|:+/ }, (function(e5) {
  var t2 = { pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: null } } };
  e5.languages.groovy = e5.languages.extend("clike", { string: { pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/, greedy: true }, keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/, number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i, operator: { pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/, lookbehind: true }, punctuation: /\.+|[{}[\];(),:$]/ }), e5.languages.insertBefore("groovy", "string", { shebang: { pattern: /#!.+/, alias: "comment", greedy: true }, "interpolation-string": { pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/, greedy: true, inside: { interpolation: t2, string: /[\s\S]+/ } } }), e5.languages.insertBefore("groovy", "punctuation", { "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/ }), e5.languages.insertBefore("groovy", "function", { annotation: { pattern: /(^|[^.])@\w+/, lookbehind: true, alias: "punctuation" } }), t2.inside.expression.inside = e5.languages.groovy;
})(Prism), Prism.languages.abap = { comment: /^\*.*/m, string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "string-template": { pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/, lookbehind: true, alias: "string" }, "eol-comment": { pattern: /(^|\s)".*/m, lookbehind: true, alias: "comment" }, keyword: { pattern: /(\s|\.|^)(?:\*-INPUT|\?TO|ABAP-SOURCE|ABBREVIATED|ABS|ABSTRACT|ACCEPT|ACCEPTING|ACCESSPOLICY|ACCORDING|ACOS|ACTIVATION|ACTUAL|ADD|ADD-CORRESPONDING|ADJACENT|AFTER|ALIAS|ALIASES|ALIGN|ALL|ALLOCATE|ALPHA|ANALYSIS|ANALYZER|AND|ANY|APPEND|APPENDAGE|APPENDING|APPLICATION|ARCHIVE|AREA|ARITHMETIC|AS|ASCENDING|ASIN|ASPECT|ASSERT|ASSIGN|ASSIGNED|ASSIGNING|ASSOCIATION|ASYNCHRONOUS|AT|ATAN|ATTRIBUTES|AUTHORITY|AUTHORITY-CHECK|AVG|BACK|BACKGROUND|BACKUP|BACKWARD|BADI|BASE|BEFORE|BEGIN|BETWEEN|BIG|BINARY|BINDING|BIT|BIT-AND|BIT-NOT|BIT-OR|BIT-XOR|BLACK|BLANK|BLANKS|BLOB|BLOCK|BLOCKS|BLUE|BOUND|BOUNDARIES|BOUNDS|BOXED|BREAK-POINT|BT|BUFFER|BY|BYPASSING|BYTE|BYTE-CA|BYTE-CN|BYTE-CO|BYTE-CS|BYTE-NA|BYTE-NS|BYTE-ORDER|C|CA|CALL|CALLING|CASE|CAST|CASTING|CATCH|CEIL|CENTER|CENTERED|CHAIN|CHAIN-INPUT|CHAIN-REQUEST|CHANGE|CHANGING|CHANNELS|CHAR-TO-HEX|CHARACTER|CHARLEN|CHECK|CHECKBOX|CIRCULAR|CI_|CLASS|CLASS-CODING|CLASS-DATA|CLASS-EVENTS|CLASS-METHODS|CLASS-POOL|CLEANUP|CLEAR|CLIENT|CLOB|CLOCK|CLOSE|CN|CNT|CO|COALESCE|CODE|CODING|COLLECT|COLOR|COLUMN|COLUMNS|COL_BACKGROUND|COL_GROUP|COL_HEADING|COL_KEY|COL_NEGATIVE|COL_NORMAL|COL_POSITIVE|COL_TOTAL|COMMENT|COMMENTS|COMMIT|COMMON|COMMUNICATION|COMPARING|COMPONENT|COMPONENTS|COMPRESSION|COMPUTE|CONCAT|CONCATENATE|COND|CONDENSE|CONDITION|CONNECT|CONNECTION|CONSTANTS|CONTEXT|CONTEXTS|CONTINUE|CONTROL|CONTROLS|CONV|CONVERSION|CONVERT|COPIES|COPY|CORRESPONDING|COS|COSH|COUNT|COUNTRY|COVER|CP|CPI|CREATE|CREATING|CRITICAL|CS|CURRENCY|CURRENCY_CONVERSION|CURRENT|CURSOR|CURSOR-SELECTION|CUSTOMER|CUSTOMER-FUNCTION|DANGEROUS|DATA|DATABASE|DATAINFO|DATASET|DATE|DAYLIGHT|DBMAXLEN|DD\/MM\/YY|DD\/MM\/YYYY|DDMMYY|DEALLOCATE|DECIMALS|DECIMAL_SHIFT|DECLARATIONS|DEEP|DEFAULT|DEFERRED|DEFINE|DEFINING|DEFINITION|DELETE|DELETING|DEMAND|DEPARTMENT|DESCENDING|DESCRIBE|DESTINATION|DETAIL|DIALOG|DIRECTORY|DISCONNECT|DISPLAY|DISPLAY-MODE|DISTANCE|DISTINCT|DIV|DIVIDE|DIVIDE-CORRESPONDING|DIVISION|DO|DUMMY|DUPLICATE|DUPLICATES|DURATION|DURING|DYNAMIC|DYNPRO|E|EACH|EDIT|EDITOR-CALL|ELSE|ELSEIF|EMPTY|ENABLED|ENABLING|ENCODING|END|END-ENHANCEMENT-SECTION|END-LINES|END-OF-DEFINITION|END-OF-FILE|END-OF-PAGE|END-OF-SELECTION|ENDAT|ENDCASE|ENDCATCH|ENDCHAIN|ENDCLASS|ENDDO|ENDENHANCEMENT|ENDEXEC|ENDFOR|ENDFORM|ENDFUNCTION|ENDIAN|ENDIF|ENDING|ENDINTERFACE|ENDLOOP|ENDMETHOD|ENDMODULE|ENDON|ENDPROVIDE|ENDSELECT|ENDTRY|ENDWHILE|ENGINEERING|ENHANCEMENT|ENHANCEMENT-POINT|ENHANCEMENT-SECTION|ENHANCEMENTS|ENTRIES|ENTRY|ENVIRONMENT|EQ|EQUAL|EQUIV|ERRORMESSAGE|ERRORS|ESCAPE|ESCAPING|EVENT|EVENTS|EXACT|EXCEPT|EXCEPTION|EXCEPTION-TABLE|EXCEPTIONS|EXCLUDE|EXCLUDING|EXEC|EXECUTE|EXISTS|EXIT|EXIT-COMMAND|EXP|EXPAND|EXPANDING|EXPIRATION|EXPLICIT|EXPONENT|EXPORT|EXPORTING|EXTEND|EXTENDED|EXTENSION|EXTRACT|FAIL|FETCH|FIELD|FIELD-GROUPS|FIELD-SYMBOL|FIELD-SYMBOLS|FIELDS|FILE|FILTER|FILTER-TABLE|FILTERS|FINAL|FIND|FIRST|FIRST-LINE|FIXED-POINT|FKEQ|FKGE|FLOOR|FLUSH|FONT|FOR|FORM|FORMAT|FORWARD|FOUND|FRAC|FRAME|FRAMES|FREE|FRIENDS|FROM|FUNCTION|FUNCTION-POOL|FUNCTIONALITY|FURTHER|GAPS|GE|GENERATE|GET|GIVING|GKEQ|GKGE|GLOBAL|GRANT|GREATER|GREEN|GROUP|GROUPS|GT|HANDLE|HANDLER|HARMLESS|HASHED|HAVING|HDB|HEAD-LINES|HEADER|HEADERS|HEADING|HELP-ID|HELP-REQUEST|HIDE|HIGH|HINT|HOLD|HOTSPOT|I|ICON|ID|IDENTIFICATION|IDENTIFIER|IDS|IF|IGNORE|IGNORING|IMMEDIATELY|IMPLEMENTATION|IMPLEMENTATIONS|IMPLEMENTED|IMPLICIT|IMPORT|IMPORTING|IN|INACTIVE|INCL|INCLUDE|INCLUDES|INCLUDING|INCREMENT|INDEX|INDEX-LINE|INFOTYPES|INHERITING|INIT|INITIAL|INITIALIZATION|INNER|INOUT|INPUT|INSERT|INSTANCES|INTENSIFIED|INTERFACE|INTERFACE-POOL|INTERFACES|INTERNAL|INTERVALS|INTO|INVERSE|INVERTED-DATE|IS|ISO|ITERATOR|ITNO|JOB|JOIN|KEEP|KEEPING|KERNEL|KEY|KEYS|KEYWORDS|KIND|LANGUAGE|LAST|LATE|LAYOUT|LE|LEADING|LEAVE|LEFT|LEFT-JUSTIFIED|LEFTPLUS|LEFTSPACE|LEGACY|LENGTH|LESS|LET|LEVEL|LEVELS|LIKE|LINE|LINE-COUNT|LINE-SELECTION|LINE-SIZE|LINEFEED|LINES|LIST|LIST-PROCESSING|LISTBOX|LITTLE|LLANG|LOAD|LOAD-OF-PROGRAM|LOB|LOCAL|LOCALE|LOCATOR|LOG|LOG-POINT|LOG10|LOGFILE|LOGICAL|LONG|LOOP|LOW|LOWER|LPAD|LPI|LT|M|MAIL|MAIN|MAJOR-ID|MAPPING|MARGIN|MARK|MASK|MATCH|MATCHCODE|MAX|MAXIMUM|MEDIUM|MEMBERS|MEMORY|MESH|MESSAGE|MESSAGE-ID|MESSAGES|MESSAGING|METHOD|METHODS|MIN|MINIMUM|MINOR-ID|MM\/DD\/YY|MM\/DD\/YYYY|MMDDYY|MOD|MODE|MODIF|MODIFIER|MODIFY|MODULE|MOVE|MOVE-CORRESPONDING|MULTIPLY|MULTIPLY-CORRESPONDING|NA|NAME|NAMETAB|NATIVE|NB|NE|NESTED|NESTING|NEW|NEW-LINE|NEW-PAGE|NEW-SECTION|NEXT|NO|NO-DISPLAY|NO-EXTENSION|NO-GAP|NO-GAPS|NO-GROUPING|NO-HEADING|NO-SCROLLING|NO-SIGN|NO-TITLE|NO-TOPOFPAGE|NO-ZERO|NODE|NODES|NON-UNICODE|NON-UNIQUE|NOT|NP|NS|NULL|NUMBER|NUMOFCHAR|O|OBJECT|OBJECTS|OBLIGATORY|OCCURRENCE|OCCURRENCES|OCCURS|OF|OFF|OFFSET|OLE|ON|ONLY|OPEN|OPTION|OPTIONAL|OPTIONS|OR|ORDER|OTHER|OTHERS|OUT|OUTER|OUTPUT|OUTPUT-LENGTH|OVERFLOW|OVERLAY|PACK|PACKAGE|PAD|PADDING|PAGE|PAGES|PARAMETER|PARAMETER-TABLE|PARAMETERS|PART|PARTIALLY|PATTERN|PERCENTAGE|PERFORM|PERFORMING|PERSON|PF|PF-STATUS|PINK|PLACES|POOL|POSITION|POS_HIGH|POS_LOW|PRAGMAS|PRECOMPILED|PREFERRED|PRESERVING|PRIMARY|PRINT|PRINT-CONTROL|PRIORITY|PRIVATE|PROCEDURE|PROCESS|PROGRAM|PROPERTY|PROTECTED|PROVIDE|PUBLIC|PUSHBUTTON|PUT|QUEUE-ONLY|QUICKINFO|RADIOBUTTON|RAISE|RAISING|RANGE|RANGES|RAW|READ|READ-ONLY|READER|RECEIVE|RECEIVED|RECEIVER|RECEIVING|RED|REDEFINITION|REDUCE|REDUCED|REF|REFERENCE|REFRESH|REGEX|REJECT|REMOTE|RENAMING|REPLACE|REPLACEMENT|REPLACING|REPORT|REQUEST|REQUESTED|RESERVE|RESET|RESOLUTION|RESPECTING|RESPONSIBLE|RESULT|RESULTS|RESUMABLE|RESUME|RETRY|RETURN|RETURNCODE|RETURNING|RIGHT|RIGHT-JUSTIFIED|RIGHTPLUS|RIGHTSPACE|RISK|RMC_COMMUNICATION_FAILURE|RMC_INVALID_STATUS|RMC_SYSTEM_FAILURE|ROLE|ROLLBACK|ROUND|ROWS|RTTI|RUN|SAP|SAP-SPOOL|SAVING|SCALE_PRESERVING|SCALE_PRESERVING_SCIENTIFIC|SCAN|SCIENTIFIC|SCIENTIFIC_WITH_LEADING_ZERO|SCREEN|SCROLL|SCROLL-BOUNDARY|SCROLLING|SEARCH|SECONDARY|SECONDS|SECTION|SELECT|SELECT-OPTIONS|SELECTION|SELECTION-SCREEN|SELECTION-SET|SELECTION-SETS|SELECTION-TABLE|SELECTIONS|SELECTOR|SEND|SEPARATE|SEPARATED|SET|SHARED|SHIFT|SHORT|SHORTDUMP-ID|SIGN|SIGN_AS_POSTFIX|SIMPLE|SIN|SINGLE|SINH|SIZE|SKIP|SKIPPING|SMART|SOME|SORT|SORTABLE|SORTED|SOURCE|SPACE|SPECIFIED|SPLIT|SPOOL|SPOTS|SQL|SQLSCRIPT|SQRT|STABLE|STAMP|STANDARD|START-OF-SELECTION|STARTING|STATE|STATEMENT|STATEMENTS|STATIC|STATICS|STATUSINFO|STEP-LOOP|STOP|STRLEN|STRUCTURE|STRUCTURES|STYLE|SUBKEY|SUBMATCHES|SUBMIT|SUBROUTINE|SUBSCREEN|SUBSTRING|SUBTRACT|SUBTRACT-CORRESPONDING|SUFFIX|SUM|SUMMARY|SUMMING|SUPPLIED|SUPPLY|SUPPRESS|SWITCH|SWITCHSTATES|SYMBOL|SYNCPOINTS|SYNTAX|SYNTAX-CHECK|SYNTAX-TRACE|SYSTEM-CALL|SYSTEM-EXCEPTIONS|SYSTEM-EXIT|TAB|TABBED|TABLE|TABLES|TABLEVIEW|TABSTRIP|TAN|TANH|TARGET|TASK|TASKS|TEST|TESTING|TEXT|TEXTPOOL|THEN|THROW|TIME|TIMES|TIMESTAMP|TIMEZONE|TITLE|TITLE-LINES|TITLEBAR|TO|TOKENIZATION|TOKENS|TOP-LINES|TOP-OF-PAGE|TRACE-FILE|TRACE-TABLE|TRAILING|TRANSACTION|TRANSFER|TRANSFORMATION|TRANSLATE|TRANSPORTING|TRMAC|TRUNC|TRUNCATE|TRUNCATION|TRY|TYPE|TYPE-POOL|TYPE-POOLS|TYPES|ULINE|UNASSIGN|UNDER|UNICODE|UNION|UNIQUE|UNIT|UNIT_CONVERSION|UNIX|UNPACK|UNTIL|UNWIND|UP|UPDATE|UPPER|USER|USER-COMMAND|USING|UTF-8|VALID|VALUE|VALUE-REQUEST|VALUES|VARY|VARYING|VERIFICATION-MESSAGE|VERSION|VIA|VIEW|VISIBLE|WAIT|WARNING|WHEN|WHENEVER|WHERE|WHILE|WIDTH|WINDOW|WINDOWS|WITH|WITH-HEADING|WITH-TITLE|WITHOUT|WORD|WORK|WRITE|WRITER|X|XML|XOR|XSD|XSTRLEN|YELLOW|YES|YYMMDD|Z|ZERO|ZONE)(?![\w-])/i, lookbehind: true }, number: /\b\d+\b/, operator: { pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/, lookbehind: true }, "string-operator": { pattern: /(\s)&&?(?=\s)/, lookbehind: true, alias: "keyword" }, "token-operator": [{ pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/, lookbehind: true, alias: "punctuation" }, { pattern: /[|{}]/, alias: "punctuation" }], punctuation: /[,.:()]/ };
var $k = ["comment", "prolog", "doctype", "cdata", "punctuation", "namespace", "property", "tag", "boolean", "number", "constant", "symbol", "deleted", "selector", "attr-name", "string", "builtin", "inserted", "operator", "entity", "url", "string", "atrule", "attr-value", "keyword", "function", "class-name", "regex", "important", "variable", "bold", "italic", "entity", "char"];
function Uk(e5) {
  return "string" == typeof e5 ? e5.length : "string" == typeof e5.content ? e5.content.length : e5.content.reduce(function(e6, t2) {
    return e6 + Uk(t2);
  }, 0);
}
var Vk = function(e5) {
  var t2, n2, r2, o2 = Qg(e5, 2), i2 = o2[0], a2 = o2[1], s2 = [], u2 = (function(e6) {
    if (!Cg.isText(e6)) return null;
    var t3 = _y.getParentNode(null, e6);
    if (t3 && "code" === _y.getNodeType(t3)) {
      var n3 = _y.getParentNode(null, t3);
      if (n3 && "pre" === _y.getNodeType(n3)) return t3;
    }
    return null;
  })(i2);
  if (null == u2) return s2;
  var l2 = u2.language, c2 = void 0 === l2 ? "" : l2;
  if (!c2) return s2;
  var d2 = (function(e6, t3) {
    if (!t3) return [];
    var n3 = Pk.languages[t3];
    return n3 ? Pk.tokenize(e6.text, n3) : [];
  })(i2, c2), f2 = 0;
  try {
    for (var p2 = Jg(d2), h2 = p2.next(); !h2.done; h2 = p2.next()) {
      var g2 = h2.value, v2 = f2 + Uk(g2);
      "string" != typeof g2 && s2.push(((r2 = {})[g2.type] = true, r2.anchor = { path: a2, offset: f2 }, r2.focus = { path: a2, offset: v2 }, r2)), f2 = v2;
    }
  } catch (e6) {
    t2 = { error: e6 };
  } finally {
    try {
      h2 && !h2.done && (n2 = p2.return) && n2.call(p2);
    } finally {
      if (t2) throw t2.error;
    }
  }
  return s2;
};
var Wk = { type: "code", elemToHtml: function(e5, t2) {
  var n2 = e5.language, r2 = void 0 === n2 ? "" : n2, o2 = r2 ? 'class="language-'.concat(r2, '"') : "";
  return "<code ".concat(o2, ">").concat(t2, "</code>");
} };
var Gk = (function() {
  function e5() {
    this.title = QE("highLightModule.selectLang"), this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M64 64v896h896V64H64z m487.6 698.8c0 87.2-51.2 127-125.8 127-67.4 0-106.4-34.8-126.4-77l68.6-41.4c13.2 23.4 25.2 43.2 54.2 43.2 27.6 0 45.2-10.8 45.2-53V475.4h84.2v287.4z m199.2 127c-78.2 0-128.8-37.2-153.4-86l68.6-39.6c18 29.4 41.6 51.2 83 51.2 34.8 0 57.2-17.4 57.2-41.6 0-28.8-22.8-39-61.4-56l-21-9c-60.8-25.8-101-58.4-101-127 0-63.2 48.2-111.2 123.2-111.2 53.6 0 92 18.6 119.6 67.4L800 580c-14.4-25.8-30-36-54.2-36-24.6 0-40.2 15.6-40.2 36 0 25.2 15.6 35.4 51.8 51.2l21 9c71.6 30.6 111.8 62 111.8 132.4 0 75.6-59.6 117.2-139.4 117.2z"></path></svg>', this.tag = "select", this.width = 95, this.selectPanelWidth = 115, this.defaultCodeLang = "";
  }
  return e5.prototype.getOptions = function(e6) {
    var t2 = this, n2 = [], r2 = e6.getMenuConfig("codeSelectLang").codeLangs, o2 = void 0 === r2 ? [] : r2;
    n2.push({ text: "plain text", value: "" }), o2.forEach(function(e7) {
      var r3 = e7.text, o3 = e7.value;
      e7.selected && (t2.defaultCodeLang = o3), n2.push({ text: r3, value: o3 });
    });
    var i2 = this.getValue(e6);
    return n2.forEach(function(e7) {
      e7.value === i2 ? e7.selected = true : e7.selected = void 0;
    }), n2;
  }, e5.prototype.isActive = function(e6) {
    return false;
  }, e5.prototype.getValue = function(e6) {
    var t2 = this.getSelectCodeElem(e6);
    if (null == t2) return this.defaultCodeLang;
    if (!$h.isElement(t2)) return this.defaultCodeLang;
    var n2 = t2.language.toString(), r2 = e6.getMenuConfig("codeSelectLang").codeLangs;
    return (void 0 === r2 ? [] : r2).some(function(e7) {
      return e7.value === n2;
    }) ? n2 : this.defaultCodeLang;
  }, e5.prototype.isDisabled = function(e6) {
    return null == e6.selection || !this.getSelectCodeElem(e6);
  }, e5.prototype.exec = function(e6, t2) {
    if (null != this.getSelectCodeElem(e6)) {
      var n2 = { language: t2.toString() };
      jg.setNodes(e6, n2, { match: function(e7) {
        return _y.checkNodeType(e7, "code");
      } });
    }
  }, e5.prototype.getSelectCodeElem = function(e6) {
    var t2 = _y.getSelectedNodeByType(e6, "code");
    if (null == t2) return null;
    var n2 = _y.getParentNode(e6, t2);
    return $h.isElement(n2) ? "pre" !== n2.type ? null : t2 : null;
  }, e5;
})(), qk = { key: "codeSelectLang", factory: function() {
  return new Gk();
}, config: { codeLangs: [{ text: "CSS", value: "css" }, { text: "HTML", value: "html" }, { text: "XML", value: "xml" }, { text: "Javascript", value: "javascript" }, { text: "Typescript", value: "typescript" }, { text: "JSX", value: "jsx" }, { text: "Go", value: "go" }, { text: "PHP", value: "php" }, { text: "C", value: "c" }, { text: "Python", value: "python" }, { text: "Java", value: "java" }, { text: "C++", value: "cpp" }, { text: "C#", value: "csharp" }, { text: "Visual Basic", value: "visual-basic" }, { text: "SQL", value: "sql" }, { text: "Ruby", value: "ruby" }, { text: "Swift", value: "swift" }, { text: "Bash", value: "bash" }, { text: "Lua", value: "lua" }, { text: "Groovy", value: "groovy" }, { text: "Markdown", value: "markdown" }, { text: "ABAP", value: "abap" }] } };
cm && (am.fn.attr = cm);
var Kk = { renderStyle: function(e5, t2) {
  var n2 = e5, r2 = t2, o2 = "";
  return $k.forEach(function(e6) {
    n2[e6] && (o2 = e6);
  }), o2 && (function(e6, t3) {
    null == e6.data && (e6.data = {});
    var n3 = e6.data;
    null == n3.props && (n3.props = {}), Object.assign(n3.props, { className: t3 });
  })(r2, o2 = "token ".concat(o2)), r2;
}, parseStyleHtml: function(e5, t2, n2) {
  var r2 = am(e5);
  if (!$h.isElement(t2)) return t2;
  if ("code" !== _y.getNodeType(t2)) return t2;
  var o2 = t2, i2 = r2.attr("class") || "";
  return 0 === i2.indexOf("language-") ? o2.language = i2.split("-")[1] || "" : o2.language = i2.toLowerCase(), o2;
}, menus: [qk], elemsToHtml: [Wk] }, Yk = (function() {
  function e5() {
    throw new Error("不能实例化\nCan not construct a instance");
  }
  return e5.setEditorConfig = function(e6) {
    void 0 === e6 && (e6 = {}), this.editorConfig = Yg(Yg({}, this.editorConfig), e6);
  }, e5.setSimpleEditorConfig = function(e6) {
    void 0 === e6 && (e6 = {}), this.simpleEditorConfig = Yg(Yg({}, this.simpleEditorConfig), e6);
  }, e5.setToolbarConfig = function(e6) {
    void 0 === e6 && (e6 = {}), this.toolbarConfig = Yg(Yg({}, this.toolbarConfig), e6);
  }, e5.setSimpleToolbarConfig = function(e6) {
    void 0 === e6 && (e6 = {}), this.simpleToolbarConfig = Yg(Yg({}, this.simpleToolbarConfig), e6);
  }, e5.registerPlugin = function(e6) {
    this.plugins.push(e6);
  }, e5.registerMenu = function(e6, t2) {
    Ev(e6, t2);
  }, e5.registerRenderElem = function(e6) {
    var t2, n2, r2;
    n2 = (t2 = e6).type, r2 = t2.renderElem, PD[n2 || ""] = r2;
  }, e5.registerRenderStyle = function(e6) {
    !(function(e7) {
      kD.push(e7);
    })(e6);
  }, e5.registerElemToHtml = function(e6) {
    !(function(e7) {
      var t2 = e7.type, n2 = e7.elemToHtml;
      Cy[t2 || ""] = n2;
    })(e6);
  }, e5.registerStyleToHtml = function(e6) {
    !(function(e7) {
      yy.push(e7);
    })(e6);
  }, e5.registerPreParseHtml = function(e6) {
    var t2;
    t2 = e6, sy.push(t2);
  }, e5.registerParseElemHtml = function(e6) {
    !(function(e7) {
      var t2 = e7.selector, n2 = e7.parseElemHtml;
      ly[t2] = n2;
    })(e6);
  }, e5.registerParseStyleHtml = function(e6) {
    !(function(e7) {
      uy.push(e7);
    })(e6);
  }, e5.registerModule = function(e6) {
    Xk(e6);
  }, e5.editorConfig = {}, e5.simpleEditorConfig = {}, e5.toolbarConfig = {}, e5.simpleToolbarConfig = {}, e5.plugins = [], e5;
})();
function Xk(e5) {
  var t2 = e5.menus, n2 = e5.renderElems, r2 = e5.renderStyle, o2 = e5.elemsToHtml, i2 = e5.styleToHtml, a2 = e5.preParseHtml, s2 = e5.parseElemsHtml, u2 = e5.parseStyleHtml, l2 = e5.editorPlugin;
  t2 && t2.forEach(function(e6) {
    return Yk.registerMenu(e6);
  }), n2 && n2.forEach(function(e6) {
    return Yk.registerRenderElem(e6);
  }), r2 && Yk.registerRenderStyle(r2), o2 && o2.forEach(function(e6) {
    return Yk.registerElemToHtml(e6);
  }), i2 && Yk.registerStyleToHtml(i2), a2 && a2.forEach(function(e6) {
    return Yk.registerPreParseHtml(e6);
  }), s2 && s2.forEach(function(e6) {
    return Yk.registerParseElemHtml(e6);
  }), u2 && Yk.registerParseStyleHtml(u2), l2 && Yk.registerPlugin(l2);
}
yB.forEach(function(e5) {
  return Xk(e5);
}), Xk(_B), Xk(nk), Xk(wk), Xk(Tk), Xk(Kk);
var Zk = '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>';
var Jk = { link: { menuKeys: ["editLink", "unLink", "viewLink"] }, image: { menuKeys: ["imageWidth30", "imageWidth50", "imageWidth100", "editorImageSizeMenu", "editImage", "viewImageLink", "deleteImage"] }, pre: { menuKeys: ["enter", "codeBlock", "codeSelectLang"] }, table: { menuKeys: ["enter", "tableHeader", "tableFullWidth", "insertTableRow", "deleteTableRow", "insertTableCol", "deleteTableCol", "deleteTable", "mergeTableCell", "splitTableCell", "setTableProperty", "setTableCellProperty"] }, divider: { menuKeys: ["enter"] }, video: { menuKeys: ["enter", "editVideoSize", "editVideoSrc"] } };
var Qk = { hoverbarKeys: Yg(Yg({}, Jk), { text: { menuKeys: ["formatPainter", "headerSelect", "insertLink", "bulletedList", "|", "bold", "through", "color", "bgColor", "clearStyle"] } }) };
Yk.setEditorConfig(Yg(Yg({}, Qk), { decorate: Vk }));
var eF = { hoverbarKeys: Jk };
Yk.setSimpleEditorConfig(Yg(Yg({}, eF), { decorate: Vk }));
var tF = { toolbarKeys: ["headerSelect", "blockquote", "|", "bold", "underline", "italic", { key: "group-more-style", title: QE("editor.more"), iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>', menuKeys: ["through", "code", "sup", "sub", "clearStyle"] }, "color", "bgColor", "|", "fontSize", "fontFamily", "lineHeight", "|", "bulletedList", "numberedList", "todo", { key: "group-justify", title: QE("editor.justify"), iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', menuKeys: ["justifyLeft", "justifyRight", "justifyCenter", "justifyJustify"] }, { key: "group-indent", title: QE("editor.indent"), iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>', menuKeys: ["indent", "delIndent"] }, "|", "emotion", "insertLink", { key: "group-image", title: QE("editor.image"), iconSvg: Zk, menuKeys: ["insertImage", "uploadImage"] }, { key: "group-video", title: QE("editor.video"), iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>', menuKeys: ["insertVideo", "uploadVideo"] }, "insertTable", "codeBlock", "divider", "|", "undo", "redo", "|", "formatPainter", "fullScreen"] };
Yk.setToolbarConfig(tF);
var nF = { toolbarKeys: ["blockquote", "header1", "header2", "header3", "|", "bold", "underline", "italic", "through", "color", "bgColor", "clearStyle", "|", "bulletedList", "numberedList", "todo", "justifyLeft", "justifyRight", "justifyCenter", "|", "insertLink", { key: "group-image", title: QE("editor.image"), iconSvg: Zk, menuKeys: ["insertImage", "uploadImage"] }, "insertVideo", "insertTable", "codeBlock", "|", "undo", "redo", "|", "fullScreen"] };
function rF(e5) {
  void 0 === e5 && (e5 = {});
  var t2 = e5.selector, n2 = void 0 === t2 ? "" : t2, r2 = e5.content, o2 = void 0 === r2 ? [] : r2, i2 = e5.html, a2 = e5.config, s2 = void 0 === a2 ? {} : a2, u2 = e5.mode, l2 = "simple" === (void 0 === u2 ? "default" : u2) ? Yk.simpleEditorConfig : Yk.editorConfig, c2 = Yg(Yg({}, l2.hoverbarKeys || {}), s2.hoverbarKeys || {});
  return XD({ selector: n2, config: Yg(Yg(Yg({}, l2), s2), { hoverbarKeys: c2 }), content: o2, html: i2, plugins: Yk.plugins });
}
function oF(e5) {
  var t2 = e5.selector, n2 = e5.editor, r2 = e5.config, o2 = void 0 === r2 ? {} : r2, i2 = e5.mode, a2 = void 0 === i2 ? "default" : i2;
  if (!t2) throw new Error("Cannot find 'selector' when create toolbar");
  var s2 = "simple" === a2 ? Yk.simpleToolbarConfig : Yk.toolbarConfig;
  return JD(n2, { selector: t2, config: Yg(Yg({}, s2), o2) });
}
Yk.setSimpleToolbarConfig(nF);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
function genErrorInfo(fnName) {
  let info = `请使用 '@${fnName}' 事件，不要放在 props 中`;
  info += `
Please use '@${fnName}' event instead of props`;
  return info;
}
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$1 = defineComponent({
  props: {
    mode: {
      type: String,
      default: "default"
    },
    defaultContent: {
      type: Array,
      default: []
    },
    defaultHtml: {
      type: String,
      default: ""
    },
    defaultConfig: {
      type: Object,
      default: {}
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const box = ref(null);
    const editorRef = shallowRef(null);
    const curValue = ref("");
    const initEditor = () => {
      if (!box.value)
        return;
      const defaultContent = toRaw(props.defaultContent);
      rF({
        selector: box.value,
        mode: props.mode,
        content: defaultContent || [],
        html: props.defaultHtml || props.modelValue || "",
        config: __spreadProps(__spreadValues({}, props.defaultConfig), {
          onCreated(editor) {
            editorRef.value = editor;
            context.emit("onCreated", editor);
            if (props.defaultConfig.onCreated) {
              const info = genErrorInfo("onCreated");
              throw new Error(info);
            }
          },
          onChange(editor) {
            const editorHtml = editor.getHtml();
            curValue.value = editorHtml;
            context.emit("update:modelValue", editorHtml);
            context.emit("onChange", editor);
            if (props.defaultConfig.onChange) {
              const info = genErrorInfo("onChange");
              throw new Error(info);
            }
          },
          onDestroyed(editor) {
            context.emit("onDestroyed", editor);
            if (props.defaultConfig.onDestroyed) {
              const info = genErrorInfo("onDestroyed");
              throw new Error(info);
            }
          },
          onMaxLength(editor) {
            context.emit("onMaxLength", editor);
            if (props.defaultConfig.onMaxLength) {
              const info = genErrorInfo("onMaxLength");
              throw new Error(info);
            }
          },
          onFocus(editor) {
            context.emit("onFocus", editor);
            if (props.defaultConfig.onFocus) {
              const info = genErrorInfo("onFocus");
              throw new Error(info);
            }
          },
          onBlur(editor) {
            context.emit("onBlur", editor);
            if (props.defaultConfig.onBlur) {
              const info = genErrorInfo("onBlur");
              throw new Error(info);
            }
          },
          customAlert(info, type) {
            context.emit("customAlert", info, type);
            if (props.defaultConfig.customAlert) {
              const info2 = genErrorInfo("customAlert");
              throw new Error(info2);
            }
          },
          customPaste: (editor, event) => {
            if (props.defaultConfig.customPaste) {
              const info = genErrorInfo("customPaste");
              throw new Error(info);
            }
            let res;
            context.emit("customPaste", editor, event, (val) => {
              res = val;
            });
            return res;
          }
        })
      });
    };
    function setHtml(newHtml) {
      const editor = editorRef.value;
      if (editor == null)
        return;
      editor.setHtml(newHtml);
    }
    onMounted(() => {
      initEditor();
    });
    watch(() => props.modelValue, (newVal) => {
      if (newVal === curValue.value)
        return;
      setHtml(newVal);
    });
    return {
      box
    };
  }
});
const _hoisted_1$1 = {
  ref: "box",
  style: { "height": "100%" }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, null, 512);
}
var Editor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main$2 = defineComponent({
  props: {
    editor: {
      type: Object
    },
    mode: {
      type: String,
      default: "default"
    },
    defaultConfig: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const selector = ref(null);
    const create = (editor) => {
      if (!selector.value)
        return;
      if (editor == null) {
        throw new Error("Not found instance of Editor when create <Toolbar/> component");
      }
      if (_y.getToolbar(editor))
        return;
      oF({
        editor,
        selector: selector.value || "<div></div>",
        mode: props.mode,
        config: props.defaultConfig
      });
    };
    watchEffect(() => {
      const { editor } = props;
      if (editor == null)
        return;
      create(editor);
    });
    return {
      selector
    };
  }
});
const _hoisted_1$2 = { ref: "selector" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, null, 512);
}
var Toolbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1 = { style: { "z-index": "999", "border": "1px solid var(--el-border-color)" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: /* @__PURE__ */ mergeModels({
    height: {
      type: String,
      default: "500px"
    }
  }, {
    "modelValue": {
      type: String,
      required: false
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = useModel(__props, "modelValue");
    const editorRef = shallowRef();
    const toolbarConfig = ref({});
    const editorConfig = ref({
      placeholder: "请输入内容...",
      MENU_CONF: {
        uploadImage: {
          customUpload(file, insertFn) {
            FileAPI.uploadFile(file).then((res) => {
              insertFn(res.url, res.name, res.url);
            });
          }
        }
      }
    });
    const handleCreated = (editor) => {
      editorRef.value = editor;
    };
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Toolbar), {
          editor: unref(editorRef),
          mode: "simple",
          "default-config": unref(toolbarConfig),
          style: { "border-bottom": "1px solid var(--el-border-color)" }
        }, null, 8, ["editor", "default-config"]),
        createVNode(unref(Editor), {
          modelValue: modelValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
          style: normalizeStyle({ height: __props.height, overflowY: "hidden" }),
          "default-config": unref(editorConfig),
          mode: "simple",
          onOnCreated: handleCreated
        }, null, 8, ["modelValue", "style", "default-config"])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
