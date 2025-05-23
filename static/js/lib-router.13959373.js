/*! For license information please see lib-router.13959373.js.LICENSE.txt */
"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["118"],
  {
    12599: function (e, t, r) {
      var n, a, o, i;
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      r.d(t, {
        Ep: function () {
          return p;
        },
        J0: function () {
          return c;
        },
        LX: function () {
          return x;
        },
        OF: function () {
          return j;
        },
        RQ: function () {
          return k;
        },
        WK: function () {
          return _;
        },
        X3: function () {
          return M;
        },
        Zn: function () {
          return S;
        },
        aU: function () {
          return n;
        },
        cP: function () {
          return m;
        },
        cm: function () {
          return C;
        },
        fp: function () {
          return g;
        },
        lX: function () {
          return u;
        },
        p7: function () {
          return V;
        },
        pC: function () {
          return L;
        },
        qp: function () {
          return I;
        },
      }),
        ((o = n || (n = {})).Pop = "POP"),
        (o.Push = "PUSH"),
        (o.Replace = "REPLACE");
      let s = "popstate";
      function u(e) {
        return (
          void 0 === e && (e = {}),
          (function (e, t, r, a) {
            void 0 === a && (a = {});
            let { window: o = document.defaultView, v5Compat: i = !1 } = a,
              u = o.history,
              d = n.Pop,
              m = null,
              v = y();
            function y() {
              return (u.state || { idx: null }).idx;
            }
            function g() {
              d = n.Pop;
              let e = y(),
                t = null == e ? null : e - v;
              (v = e), m && m({ action: d, location: b.location, delta: t });
            }
            null == v &&
              ((v = 0), u.replaceState(l({}, u.state, { idx: v }), ""));
            function w(e) {
              let t =
                  "null" !== o.location.origin
                    ? o.location.origin
                    : o.location.href,
                r = "string" == typeof e ? e : p(e);
              return (
                c(
                  t,
                  "No window.location.(origin|href) available to create URL for href: " +
                    (r = r.replace(/ $/, "%20"))
                ),
                new URL(r, t)
              );
            }
            let b = {
              get action() {
                return d;
              },
              get location() {
                return e(o, u);
              },
              listen(e) {
                if (m)
                  throw Error("A history only accepts one active listener");
                return (
                  o.addEventListener(s, g),
                  (m = e),
                  () => {
                    o.removeEventListener(s, g), (m = null);
                  }
                );
              },
              createHref: (e) => t(o, e),
              createURL: w,
              encodeLocation(e) {
                let t = w(e);
                return { pathname: t.pathname, search: t.search, hash: t.hash };
              },
              push: function (e, t) {
                d = n.Push;
                let a = f(b.location, e, t);
                r && r(a, e);
                let l = h(a, (v = y() + 1)),
                  s = b.createHref(a);
                try {
                  u.pushState(l, "", s);
                } catch (e) {
                  if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                  o.location.assign(s);
                }
                i && m && m({ action: d, location: b.location, delta: 1 });
              },
              replace: function (e, t) {
                d = n.Replace;
                let a = f(b.location, e, t);
                r && r(a, e);
                let o = h(a, (v = y())),
                  l = b.createHref(a);
                u.replaceState(o, "", l),
                  i && m && m({ action: d, location: b.location, delta: 0 });
              },
              go: (e) => u.go(e),
            };
            return b;
          })(
            function (e, t) {
              let { pathname: r, search: n, hash: a } = e.location;
              return f(
                "",
                { pathname: r, search: n, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default"
              );
            },
            function (e, t) {
              return "string" == typeof t ? t : p(t);
            },
            null,
            e
          )
        );
      }
      function c(e, t) {
        if (!1 === e || null == e) throw Error(t);
      }
      function d(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw Error(t);
          } catch (e) {}
        }
      }
      function h(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, r, n) {
        return (
          void 0 === r && (r = null),
          l(
            {
              pathname: "string" == typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" == typeof t ? m(t) : t,
            {
              state: r,
              key: (t && t.key) || n || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: r = "", hash: n = "" } = e;
        return (
          r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r),
          n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      ((i = a || (a = {})).data = "data"),
        (i.deferred = "deferred"),
        (i.redirect = "redirect"),
        (i.error = "error");
      let v = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function y(e, t, r, n) {
        return (
          void 0 === r && (r = []),
          void 0 === n && (n = {}),
          e.map((e, a) => {
            let o = [...r, String(a)],
              i = "string" == typeof e.id ? e.id : o.join("-");
            if (
              (c(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route"
              ),
              c(
                !n[i],
                'Found a route id collision on id "' +
                  i +
                  "\".  Route id's must be globally unique within Data Router usages"
              ),
              !0 === e.index)
            ) {
              let r = l({}, e, t(e), { id: i });
              return (n[i] = r), r;
            }
            {
              let r = l({}, e, t(e), { id: i, children: void 0 });
              return (
                (n[i] = r),
                e.children && (r.children = y(e.children, t, o, n)),
                r
              );
            }
          })
        );
      }
      function g(e, t, r) {
        return void 0 === r && (r = "/"), w(e, t, r, !1);
      }
      function w(e, t, r, n) {
        let a = S(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == a) return null;
        let o = (function e(t, r, n, a) {
          void 0 === r && (r = []),
            void 0 === n && (n = []),
            void 0 === a && (a = "");
          let o = (t, o, i) => {
            let l = {
              relativePath: void 0 === i ? t.path || "" : i,
              caseSensitive: !0 === t.caseSensitive,
              childrenIndex: o,
              route: t,
            };
            l.relativePath.startsWith("/") &&
              (c(
                l.relativePath.startsWith(a),
                'Absolute route path "' +
                  l.relativePath +
                  '" nested under path ' +
                  ('"' + a) +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (l.relativePath = l.relativePath.slice(a.length)));
            let s = k([a, l.relativePath]),
              u = n.concat(l);
            if (
              (t.children &&
                t.children.length > 0 &&
                (c(
                  !0 !== t.index,
                  'Index routes must not have child routes. Please remove all child routes from route path "' +
                    s +
                    '".'
                ),
                e(t.children, r, u, s)),
              null != t.path || !!t.index)
            )
              r.push({
                path: s,
                score: (function (e, t) {
                  let r = e.split("/"),
                    n = r.length;
                  return (
                    r.some(E) && (n += -2),
                    t && (n += 2),
                    r
                      .filter((e) => !E(e))
                      .reduce(
                        (e, t) => e + (b.test(t) ? 3 : "" === t ? 1 : 10),
                        n
                      )
                  );
                })(s, t.index),
                routesMeta: u,
              });
          };
          return (
            t.forEach((e, t) => {
              var r;
              if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                for (let r of (function e(t) {
                  let r = t.split("/");
                  if (0 === r.length) return [];
                  let [n, ...a] = r,
                    o = n.endsWith("?"),
                    i = n.replace(/\?$/, "");
                  if (0 === a.length) return o ? [i, ""] : [i];
                  let l = e(a.join("/")),
                    s = [];
                  return (
                    s.push(...l.map((e) => ("" === e ? i : [i, e].join("/")))),
                    o && s.push(...l),
                    s.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                  );
                })(e.path))
                  o(e, t, r);
              else o(e, t);
            }),
            r
          );
        })(e);
        (function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length &&
                    e.slice(0, -1).every((e, r) => e === t[r])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let i = null;
        for (let e = 0; null == i && e < o.length; ++e) {
          let t = (function (e) {
            try {
              return e
                .split("/")
                .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                .join("/");
            } catch (t) {
              return (
                d(
                  !1,
                  'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t) +
                    ")."
                ),
                e
              );
            }
          })(a);
          i = (function (e, t, r) {
            void 0 === r && (r = !1);
            let { routesMeta: n } = e,
              a = {},
              o = "/",
              i = [];
            for (let e = 0; e < n.length; ++e) {
              let l = n[e],
                s = e === n.length - 1,
                u = "/" === o ? t : t.slice(o.length) || "/",
                c = x(
                  {
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: s,
                  },
                  u
                ),
                d = l.route;
              if (
                (!c &&
                  s &&
                  r &&
                  !n[n.length - 1].route.index &&
                  (c = x(
                    {
                      path: l.relativePath,
                      caseSensitive: l.caseSensitive,
                      end: !1,
                    },
                    u
                  )),
                !c)
              )
                return null;
              Object.assign(a, c.params),
                i.push({
                  params: a,
                  pathname: k([o, c.pathname]),
                  pathnameBase: P(k([o, c.pathnameBase])),
                  route: d,
                }),
                "/" !== c.pathnameBase && (o = k([o, c.pathnameBase]));
            }
            return i;
          })(o[e], t, n);
        }
        return i;
      }
      let b = /^:[\w-]+$/,
        E = (e) => "*" === e;
      function x(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [r, n] = (function (e, t, r) {
            void 0 === t && (t = !1),
              void 0 === r && (r = !0),
              d(
                "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                'Route path "' +
                  e +
                  '" will be treated as if it were ' +
                  ('"' + e.replace(/\*$/, "/*")) +
                  '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, ' +
                  ('please change the route path to "' +
                    e.replace(/\*$/, "/*")) +
                  '".'
              );
            let n = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, r) => (
                      n.push({ paramName: t, isOptional: null != r }),
                      r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            return (
              e.endsWith("*")
                ? (n.push({ paramName: "*" }),
                  (a +=
                    "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : r
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
              [new RegExp(a, t ? void 0 : "i"), n]
            );
          })(e.path, e.caseSensitive, e.end),
          a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: n.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
              let e = l[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let s = l[r];
            return (
              a && !s
                ? (e[n] = void 0)
                : (e[n] = (s || "").replace(/%2F/g, "/")),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function S(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/";
      }
      function R(e, t, r, n) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified " +
          ("`to." + t + "` field [" + JSON.stringify(n)) +
          "].  Please separate it out to the " +
          ("`to." + r) +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function D(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function C(e, t) {
        let r = D(e);
        return t
          ? r.map((e, t) => (t === r.length - 1 ? e.pathname : e.pathnameBase))
          : r.map((e) => e.pathnameBase);
      }
      function L(e, t, r, n) {
        let a, o;
        void 0 === n && (n = !1),
          "string" == typeof e
            ? (a = m(e))
            : (c(
                !(a = l({}, e)).pathname || !a.pathname.includes("?"),
                R("?", "pathname", "search", a)
              ),
              c(
                !a.pathname || !a.pathname.includes("#"),
                R("#", "pathname", "hash", a)
              ),
              c(
                !a.search || !a.search.includes("#"),
                R("#", "search", "hash", a)
              ));
        let i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = r;
        else {
          let e = t.length - 1;
          if (!n && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            void 0 === t && (t = "/");
            let {
              pathname: r,
              search: n = "",
              hash: a = "",
            } = "string" == typeof e ? m(e) : e;
            return {
              pathname: r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      let r = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? r.length > 1 && r.pop()
                            : "." !== e && r.push(e);
                        }),
                        r.length > 1 ? r.join("/") : "/"
                      );
                    })(r, t)
                : t,
              search: T(n),
              hash: U(a),
            };
          })(a, o),
          d = s && "/" !== s && s.endsWith("/"),
          h = (i || "." === s) && r.endsWith("/");
        return !u.pathname.endsWith("/") && (d || h) && (u.pathname += "/"), u;
      }
      let k = (e) => e.join("/").replace(/\/\/+/g, "/"),
        P = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        T = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        U = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      class M extends Error {}
      class j {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = n),
            r instanceof Error
              ? ((this.data = r.toString()), (this.error = r))
              : (this.data = r);
        }
      }
      function _(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "boolean" == typeof e.internal &&
          "data" in e
        );
      }
      let O = ["post", "put", "patch", "delete"],
        A = new Set(O),
        F = new Set(["get", ...O]),
        B = new Set([301, 302, 303, 307, 308]),
        z = new Set([307, 308]),
        N = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        H = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        I = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        W = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        J = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
        $ = "remix-router-transitions";
      function V(e) {
        let t, r, o, i, s, u;
        let h = e.window
            ? e.window
            : "undefined" != typeof window
            ? window
            : void 0,
          p =
            void 0 !== h &&
            void 0 !== h.document &&
            void 0 !== h.document.createElement,
          m = !p;
        if (
          (c(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter"
          ),
          e.mapRouteProperties)
        )
          t = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let r = e.detectErrorBoundary;
          t = (e) => ({ hasErrorBoundary: r(e) });
        } else t = J;
        let v = {},
          b = y(e.routes, t, void 0, v),
          E = e.basename || "/",
          x = e.dataStrategy || er,
          R = e.patchRoutesOnNavigation,
          D = l(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              v7_skipActionErrorRevalidation: !1,
            },
            e.future
          ),
          C = null,
          L = new Set(),
          k = null,
          P = null,
          T = null,
          U = null != e.hydrationData,
          M = g(b, e.history.location, E),
          j = null;
        if (null == M && !R) {
          let t = em(404, { pathname: e.history.location.pathname }),
            { matches: r, route: n } = ep(b);
          (M = r), (j = { [n.id]: t });
        }
        if (
          (M &&
            !e.hydrationData &&
            tn(M, b, e.history.location.pathname).active &&
            (M = null),
          M)
        ) {
          if (M.some((e) => e.route.lazy)) o = !1;
          else if (M.some((e) => e.route.loader)) {
            if (D.v7_partialHydration) {
              let t = e.hydrationData ? e.hydrationData.loaderData : null,
                r = e.hydrationData ? e.hydrationData.errors : null;
              if (r) {
                let e = M.findIndex((e) => void 0 !== r[e.route.id]);
                o = M.slice(0, e + 1).every((e) => !Q(e.route, t, r));
              } else o = M.every((e) => !Q(e.route, t, r));
            } else o = null != e.hydrationData;
          } else o = !0;
        } else if (((o = !1), (M = []), D.v7_partialHydration)) {
          let t = tn(null, b, e.history.location.pathname);
          t.active && t.matches && (M = t.matches);
        }
        let O = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: M,
            initialized: o,
            navigation: N,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || j,
            fetchers: new Map(),
            blockers: new Map(),
          },
          A = n.Pop,
          F = !1,
          V = !1,
          Y = new Map(),
          K = null,
          G = !1,
          et = !1,
          ea = [],
          es = new Set(),
          eu = new Map(),
          ey = 0,
          eE = -1,
          eL = new Map(),
          ej = new Set(),
          e_ = new Map(),
          eO = new Map(),
          eA = new Set(),
          eF = new Map(),
          eB = new Map();
        function ez(e, t) {
          void 0 === t && (t = {}), (O = l({}, O, e));
          let r = [],
            n = [];
          D.v7_fetcherPersist &&
            O.fetchers.forEach((e, t) => {
              "idle" === e.state && (eA.has(t) ? n.push(t) : r.push(t));
            }),
            [...L].forEach((e) =>
              e(O, {
                deletedFetchers: n,
                viewTransitionOpts: t.viewTransitionOpts,
                flushSync: !0 === t.flushSync,
              })
            ),
            D.v7_fetcherPersist &&
              (r.forEach((e) => O.fetchers.delete(e)), n.forEach((e) => e1(e)));
        }
        function eN(t, a, o) {
          var i, s;
          let u, c;
          let { flushSync: d } = void 0 === o ? {} : o,
            h =
              null != O.actionData &&
              null != O.navigation.formMethod &&
              eS(O.navigation.formMethod) &&
              "loading" === O.navigation.state &&
              (null == (i = t.state) ? void 0 : i._isRedirect) !== !0;
          u = a.actionData
            ? Object.keys(a.actionData).length > 0
              ? a.actionData
              : null
            : h
            ? O.actionData
            : null;
          let f = a.loaderData
              ? ed(O.loaderData, a.loaderData, a.matches || [], a.errors)
              : O.loaderData,
            p = O.blockers;
          p.size > 0 && (p = new Map(p)).forEach((e, t) => p.set(t, I));
          let m =
            !0 === F ||
            (null != O.navigation.formMethod &&
              eS(O.navigation.formMethod) &&
              (null == (s = t.state) ? void 0 : s._isRedirect) !== !0);
          if (
            (r && ((b = r), (r = void 0)),
            G ||
              A === n.Pop ||
              (A === n.Push
                ? e.history.push(t, t.state)
                : A === n.Replace && e.history.replace(t, t.state)),
            A === n.Pop)
          ) {
            let e = Y.get(O.location.pathname);
            e && e.has(t.pathname)
              ? (c = { currentLocation: O.location, nextLocation: t })
              : Y.has(t.pathname) &&
                (c = { currentLocation: t, nextLocation: O.location });
          } else if (V) {
            let e = Y.get(O.location.pathname);
            e
              ? e.add(t.pathname)
              : ((e = new Set([t.pathname])), Y.set(O.location.pathname, e)),
              (c = { currentLocation: O.location, nextLocation: t });
          }
          ez(
            l({}, a, {
              actionData: u,
              loaderData: f,
              historyAction: A,
              location: t,
              initialized: !0,
              navigation: N,
              revalidation: "idle",
              restoreScrollPosition: tr(t, a.matches || O.matches),
              preventScrollReset: m,
              blockers: p,
            }),
            { viewTransitionOpts: c, flushSync: !0 === d }
          ),
            (A = n.Pop),
            (F = !1),
            (V = !1),
            (G = !1),
            (et = !1),
            (ea = []);
        }
        async function eH(t, r) {
          if ("number" == typeof t) {
            e.history.go(t);
            return;
          }
          let a = q(
              O.location,
              O.matches,
              E,
              D.v7_prependBasename,
              t,
              D.v7_relativeSplatPath,
              null == r ? void 0 : r.fromRouteId,
              null == r ? void 0 : r.relative
            ),
            {
              path: o,
              submission: i,
              error: s,
            } = X(D.v7_normalizeFormMethod, !1, a, r),
            u = O.location,
            c = f(O.location, o, r && r.state);
          c = l({}, c, e.history.encodeLocation(c));
          let d = r && null != r.replace ? r.replace : void 0,
            h = n.Push;
          !0 === d
            ? (h = n.Replace)
            : !1 === d ||
              (null != i &&
                eS(i.formMethod) &&
                i.formAction === O.location.pathname + O.location.search &&
                (h = n.Replace));
          let p =
              r && "preventScrollReset" in r
                ? !0 === r.preventScrollReset
                : void 0,
            m = !0 === (r && r.flushSync),
            v = e8({ currentLocation: u, nextLocation: c, historyAction: h });
          if (v) {
            e9(v, {
              state: "blocked",
              location: c,
              proceed() {
                e9(v, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: c,
                }),
                  eH(t, r);
              },
              reset() {
                let e = new Map(O.blockers);
                e.set(v, I), ez({ blockers: e });
              },
            });
            return;
          }
          return await eI(h, c, {
            submission: i,
            pendingError: s,
            preventScrollReset: p,
            replace: r && r.replace,
            enableViewTransition: r && r.viewTransition,
            flushSync: m,
          });
        }
        async function eI(t, n, o) {
          let i;
          s && s.abort(),
            (s = null),
            (A = t),
            (G = !0 === (o && o.startUninterruptedRevalidation)),
            (function (e, t) {
              k && T && (k[tt(e, t)] = T());
            })(O.location, O.matches),
            (F = !0 === (o && o.preventScrollReset)),
            (V = !0 === (o && o.enableViewTransition));
          let u = r || b,
            c = o && o.overrideNavigation,
            d = g(u, n, E),
            h = !0 === (o && o.flushSync),
            f = tn(d, u, n.pathname);
          if ((f.active && f.matches && (d = f.matches), !d)) {
            let { error: e, notFoundMatches: t, route: r } = e6(n.pathname);
            eN(
              n,
              { matches: t, loaderData: {}, errors: { [r.id]: e } },
              { flushSync: h }
            );
            return;
          }
          if (
            O.initialized &&
            !et &&
            (function (e, t) {
              if (e.pathname !== t.pathname || e.search !== t.search) return !1;
              if ("" === e.hash) return "" !== t.hash;
              if (e.hash === t.hash) return !0;
              if ("" !== t.hash) return !0;
              return !1;
            })(O.location, n) &&
            !(o && o.submission && eS(o.submission.formMethod))
          ) {
            eN(n, { matches: d }, { flushSync: h });
            return;
          }
          s = new AbortController();
          let p = el(e.history, n, s.signal, o && o.submission);
          if (o && o.pendingError)
            i = [ef(d).route.id, { type: a.error, error: o.pendingError }];
          else if (o && o.submission && eS(o.submission.formMethod)) {
            let t = await eW(p, n, o.submission, d, f.active, {
              replace: o.replace,
              flushSync: h,
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, r] = t.pendingActionResult;
              if (ew(r) && _(r.error) && 404 === r.error.status) {
                (s = null),
                  eN(n, {
                    matches: t.matches,
                    loaderData: {},
                    errors: { [e]: r.error },
                  });
                return;
              }
            }
            (d = t.matches || d),
              (i = t.pendingActionResult),
              (c = eT(n, o.submission)),
              (h = !1),
              (f.active = !1),
              (p = el(e.history, p.url, p.signal));
          }
          let {
            shortCircuited: m,
            matches: v,
            loaderData: y,
            errors: w,
          } = await eJ(
            p,
            n,
            d,
            f.active,
            c,
            o && o.submission,
            o && o.fetcherSubmission,
            o && o.replace,
            o && !0 === o.initialHydration,
            h,
            i
          );
          if (!m)
            (s = null),
              eN(
                n,
                l({ matches: v || d }, eh(i), { loaderData: y, errors: w })
              );
        }
        async function eW(e, t, r, o, i, l) {
          let s;
          if (
            (void 0 === l && (l = {}),
            eQ(),
            ez(
              {
                navigation: (function (e, t) {
                  return {
                    state: "submitting",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  };
                })(t, r),
              },
              { flushSync: !0 === l.flushSync }
            ),
            i)
          ) {
            let r = await ta(o, t.pathname, e.signal);
            if ("aborted" === r.type) return { shortCircuited: !0 };
            if ("error" === r.type) {
              let e = ef(r.partialMatches).route.id;
              return {
                matches: r.partialMatches,
                pendingActionResult: [e, { type: a.error, error: r.error }],
              };
            } else if (r.matches) o = r.matches;
            else {
              let { notFoundMatches: e, error: r, route: n } = e6(t.pathname);
              return {
                matches: e,
                pendingActionResult: [n.id, { type: a.error, error: r }],
              };
            }
          }
          let u = ek(o, t);
          if (u.route.action || u.route.lazy) {
            if (
              ((s = (await eY("action", O, e, [u], o, null))[u.route.id]),
              e.signal.aborted)
            )
              return { shortCircuited: !0 };
          } else
            s = {
              type: a.error,
              error: em(405, {
                method: e.method,
                pathname: t.pathname,
                routeId: u.route.id,
              }),
            };
          if (eb(s)) {
            let t;
            return (
              (t =
                l && null != l.replace
                  ? l.replace
                  : ei(
                      s.response.headers.get("Location"),
                      new URL(e.url),
                      E
                    ) ===
                    O.location.pathname + O.location.search),
              await eX(e, s, !0, { submission: r, replace: t }),
              { shortCircuited: !0 }
            );
          }
          if (eg(s)) throw em(400, { type: "defer-action" });
          if (ew(s)) {
            let e = ef(o, u.route.id);
            return (
              !0 !== (l && l.replace) && (A = n.Push),
              { matches: o, pendingActionResult: [e.route.id, s] }
            );
          }
          return { matches: o, pendingActionResult: [u.route.id, s] };
        }
        async function eJ(t, n, a, o, i, u, c, d, h, f, p) {
          let m = i || eT(n, u),
            v = u || c || eP(m),
            y = !G && (!D.v7_partialHydration || !h);
          if (o) {
            if (y) {
              let e = e$(p);
              ez(l({ navigation: m }, void 0 !== e ? { actionData: e } : {}), {
                flushSync: f,
              });
            }
            let e = await ta(a, n.pathname, t.signal);
            if ("aborted" === e.type) return { shortCircuited: !0 };
            if ("error" === e.type) {
              let t = ef(e.partialMatches).route.id;
              return {
                matches: e.partialMatches,
                loaderData: {},
                errors: { [t]: e.error },
              };
            } else if (e.matches) a = e.matches;
            else {
              let { error: e, notFoundMatches: t, route: r } = e6(n.pathname);
              return { matches: t, loaderData: {}, errors: { [r.id]: e } };
            }
          }
          let g = r || b,
            [w, x] = Z(
              e.history,
              O,
              a,
              v,
              n,
              D.v7_partialHydration && !0 === h,
              D.v7_skipActionErrorRevalidation,
              et,
              ea,
              es,
              eA,
              e_,
              ej,
              g,
              E,
              p
            );
          if (
            (te(
              (e) =>
                !(a && a.some((t) => t.route.id === e)) ||
                (w && w.some((t) => t.route.id === e))
            ),
            (eE = ++ey),
            0 === w.length && 0 === x.length)
          ) {
            let e = e2();
            return (
              eN(
                n,
                l(
                  {
                    matches: a,
                    loaderData: {},
                    errors: p && ew(p[1]) ? { [p[0]]: p[1].error } : null,
                  },
                  eh(p),
                  e ? { fetchers: new Map(O.fetchers) } : {}
                ),
                { flushSync: f }
              ),
              { shortCircuited: !0 }
            );
          }
          if (y) {
            let e = {};
            if (!o) {
              e.navigation = m;
              let t = e$(p);
              void 0 !== t && (e.actionData = t);
            }
            x.length > 0 &&
              (e.fetchers = (function (e) {
                return (
                  e.forEach((e) => {
                    let t = O.fetchers.get(e.key),
                      r = eU(void 0, t ? t.data : void 0);
                    O.fetchers.set(e.key, r);
                  }),
                  new Map(O.fetchers)
                );
              })(x)),
              ez(e, { flushSync: f });
          }
          x.forEach((e) => {
            e7(e.key), e.controller && eu.set(e.key, e.controller);
          });
          let S = () => x.forEach((e) => e7(e.key));
          s && s.signal.addEventListener("abort", S);
          let { loaderResults: R, fetcherResults: C } = await eZ(O, a, w, x, t);
          if (t.signal.aborted) return { shortCircuited: !0 };
          s && s.signal.removeEventListener("abort", S),
            x.forEach((e) => eu.delete(e.key));
          let L = ev(R);
          if (L)
            return (
              await eX(t, L.result, !0, { replace: d }), { shortCircuited: !0 }
            );
          if ((L = ev(C)))
            return (
              ej.add(L.key),
              await eX(t, L.result, !0, { replace: d }),
              { shortCircuited: !0 }
            );
          let { loaderData: k, errors: P } = ec(O, a, R, p, x, C, eF);
          eF.forEach((e, t) => {
            e.subscribe((r) => {
              (r || e.done) && eF.delete(t);
            });
          }),
            D.v7_partialHydration && h && O.errors && (P = l({}, O.errors, P));
          let T = e2(),
            U = e3(eE),
            M = T || U || x.length > 0;
          return l(
            { matches: a, loaderData: k, errors: P },
            M ? { fetchers: new Map(O.fetchers) } : {}
          );
        }
        function e$(e) {
          if (e && !ew(e[1])) return { [e[0]]: e[1].data };
          if (O.actionData)
            return 0 === Object.keys(O.actionData).length ? null : O.actionData;
        }
        async function eV(t, n, a, o, i, l, u, d, h) {
          function f(e) {
            if (!e.route.action && !e.route.lazy) {
              let e = em(405, {
                method: h.formMethod,
                pathname: a,
                routeId: n,
              });
              return eG(t, n, e, { flushSync: u }), !0;
            }
            return !1;
          }
          if ((eQ(), e_.delete(t), !l && f(o))) return;
          let p = O.fetchers.get(t);
          eK(
            t,
            (function (e, t) {
              return {
                state: "submitting",
                formMethod: e.formMethod,
                formAction: e.formAction,
                formEncType: e.formEncType,
                formData: e.formData,
                json: e.json,
                text: e.text,
                data: t ? t.data : void 0,
              };
            })(h, p),
            { flushSync: u }
          );
          let m = new AbortController(),
            v = el(e.history, a, m.signal, h);
          if (l) {
            let e = await ta(i, a, v.signal);
            if ("aborted" === e.type) return;
            if ("error" === e.type) {
              eG(t, n, e.error, { flushSync: u });
              return;
            } else if (e.matches) {
              if (f((o = ek((i = e.matches), a)))) return;
            } else {
              eG(t, n, em(404, { pathname: a }), { flushSync: u });
              return;
            }
          }
          eu.set(t, m);
          let y = ey,
            w = (await eY("action", O, v, [o], i, t))[o.route.id];
          if (v.signal.aborted) {
            eu.get(t) === m && eu.delete(t);
            return;
          }
          if (D.v7_fetcherPersist && eA.has(t)) {
            if (eb(w) || ew(w)) {
              eK(t, eM(void 0));
              return;
            }
          } else {
            if (eb(w)) {
              if ((eu.delete(t), !(eE > y)))
                return (
                  ej.add(t),
                  eK(t, eU(h)),
                  eX(v, w, !1, { fetcherSubmission: h, preventScrollReset: d })
                );
              eK(t, eM(void 0));
              return;
            }
            if (ew(w)) {
              eG(t, n, w.error);
              return;
            }
          }
          if (eg(w)) throw em(400, { type: "defer-action" });
          let x = O.navigation.location || O.location,
            S = el(e.history, x, m.signal),
            R = r || b,
            C =
              "idle" !== O.navigation.state
                ? g(R, O.navigation.location, E)
                : O.matches;
          c(C, "Didn't find any matches after fetcher action");
          let L = ++ey;
          eL.set(t, L);
          let k = eU(h, w.data);
          O.fetchers.set(t, k);
          let [P, T] = Z(
            e.history,
            O,
            C,
            h,
            x,
            !1,
            D.v7_skipActionErrorRevalidation,
            et,
            ea,
            es,
            eA,
            e_,
            ej,
            R,
            E,
            [o.route.id, w]
          );
          T.filter((e) => e.key !== t).forEach((e) => {
            let t = e.key,
              r = O.fetchers.get(t),
              n = eU(void 0, r ? r.data : void 0);
            O.fetchers.set(t, n),
              e7(t),
              e.controller && eu.set(t, e.controller);
          }),
            ez({ fetchers: new Map(O.fetchers) });
          let U = () => T.forEach((e) => e7(e.key));
          m.signal.addEventListener("abort", U);
          let { loaderResults: M, fetcherResults: j } = await eZ(O, C, P, T, S);
          if (m.signal.aborted) return;
          m.signal.removeEventListener("abort", U),
            eL.delete(t),
            eu.delete(t),
            T.forEach((e) => eu.delete(e.key));
          let _ = ev(M);
          if (_) return eX(S, _.result, !1, { preventScrollReset: d });
          if ((_ = ev(j)))
            return (
              ej.add(_.key), eX(S, _.result, !1, { preventScrollReset: d })
            );
          let { loaderData: F, errors: B } = ec(O, C, M, void 0, T, j, eF);
          if (O.fetchers.has(t)) {
            let e = eM(w.data);
            O.fetchers.set(t, e);
          }
          e3(L),
            "loading" === O.navigation.state && L > eE
              ? (c(A, "Expected pending action"),
                s && s.abort(),
                eN(O.navigation.location, {
                  matches: C,
                  loaderData: F,
                  errors: B,
                  fetchers: new Map(O.fetchers),
                }))
              : (ez({
                  errors: B,
                  loaderData: ed(O.loaderData, F, C, B),
                  fetchers: new Map(O.fetchers),
                }),
                (et = !1));
        }
        async function eq(t, r, n, a, o, i, l, s, u) {
          let d = O.fetchers.get(t);
          eK(t, eU(u, d ? d.data : void 0), { flushSync: l });
          let h = new AbortController(),
            f = el(e.history, n, h.signal);
          if (i) {
            let e = await ta(o, n, f.signal);
            if ("aborted" === e.type) return;
            if ("error" === e.type) {
              eG(t, r, e.error, { flushSync: l });
              return;
            } else if (e.matches) a = ek((o = e.matches), n);
            else {
              eG(t, r, em(404, { pathname: n }), { flushSync: l });
              return;
            }
          }
          eu.set(t, h);
          let p = ey,
            m = (await eY("loader", O, f, [a], o, t))[a.route.id];
          if (
            (eg(m) && (m = (await eC(m, f.signal, !0)) || m),
            eu.get(t) === h && eu.delete(t),
            !f.signal.aborted)
          ) {
            if (eA.has(t)) {
              eK(t, eM(void 0));
              return;
            }
            if (eb(m)) {
              if (eE > p) {
                eK(t, eM(void 0));
                return;
              }
              ej.add(t), await eX(f, m, !1, { preventScrollReset: s });
              return;
            }
            if (ew(m)) {
              eG(t, r, m.error);
              return;
            }
            c(!eg(m), "Unhandled fetcher deferred data"), eK(t, eM(m.data));
          }
        }
        async function eX(t, r, a, o) {
          let {
            submission: i,
            fetcherSubmission: u,
            preventScrollReset: d,
            replace: m,
          } = void 0 === o ? {} : o;
          r.response.headers.has("X-Remix-Revalidate") && (et = !0);
          let v = r.response.headers.get("Location");
          c(v, "Expected a Location header on the redirect Response"),
            (v = ei(v, new URL(t.url), E));
          let y = f(O.location, v, { _isRedirect: !0 });
          if (p) {
            let t = !1;
            if (r.response.headers.has("X-Remix-Reload-Document")) t = !0;
            else if (W.test(v)) {
              let r = e.history.createURL(v);
              t = r.origin !== h.location.origin || null == S(r.pathname, E);
            }
            if (t) {
              m ? h.location.replace(v) : h.location.assign(v);
              return;
            }
          }
          s = null;
          let g =
              !0 === m || r.response.headers.has("X-Remix-Replace")
                ? n.Replace
                : n.Push,
            { formMethod: w, formAction: b, formEncType: x } = O.navigation;
          !i && !u && w && b && x && (i = eP(O.navigation));
          let R = i || u;
          if (z.has(r.response.status) && R && eS(R.formMethod))
            await eI(g, y, {
              submission: l({}, R, { formAction: v }),
              preventScrollReset: d || F,
              enableViewTransition: a ? V : void 0,
            });
          else {
            let e = eT(y, i);
            await eI(g, y, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: d || F,
              enableViewTransition: a ? V : void 0,
            });
          }
        }
        async function eY(e, r, n, o, i, l) {
          let s;
          let u = {};
          try {
            s = await en(x, e, r, n, o, i, l, v, t);
          } catch (e) {
            return (
              o.forEach((t) => {
                u[t.route.id] = { type: a.error, error: e };
              }),
              u
            );
          }
          for (let [e, t] of Object.entries(s))
            if (
              (function (e) {
                return ex(e.result) && B.has(e.result.status);
              })(t)
            ) {
              let r = t.result;
              u[e] = {
                type: a.redirect,
                response: (function (e, t, r, n, a, o) {
                  let i = e.headers.get("Location");
                  if (
                    (c(
                      i,
                      "Redirects returned/thrown from loaders/actions must have a Location header"
                    ),
                    !W.test(i))
                  ) {
                    let l = n.slice(
                      0,
                      n.findIndex((e) => e.route.id === r) + 1
                    );
                    (i = q(new URL(t.url), l, a, !0, i, o)),
                      e.headers.set("Location", i);
                  }
                  return e;
                })(r, n, e, i, E, D.v7_relativeSplatPath),
              };
            } else u[e] = await eo(t);
          return u;
        }
        async function eZ(t, r, n, o, i) {
          let l = t.matches,
            s = eY("loader", t, i, n, r, null),
            u = Promise.all(
              o.map(async (r) => {
                if (!r.matches || !r.match || !r.controller)
                  return Promise.resolve({
                    [r.key]: {
                      type: a.error,
                      error: em(404, { pathname: r.path }),
                    },
                  });
                {
                  let n = (
                    await eY(
                      "loader",
                      t,
                      el(e.history, r.path, r.controller.signal),
                      [r.match],
                      r.matches,
                      r.key
                    )
                  )[r.match.route.id];
                  return { [r.key]: n };
                }
              })
            ),
            c = await s,
            d = (await u).reduce((e, t) => Object.assign(e, t), {});
          return (
            await Promise.all([
              eR(r, c, i.signal, l, t.loaderData),
              eD(r, d, o),
            ]),
            { loaderResults: c, fetcherResults: d }
          );
        }
        function eQ() {
          (et = !0),
            ea.push(...te()),
            e_.forEach((e, t) => {
              eu.has(t) && es.add(t), e7(t);
            });
        }
        function eK(e, t, r) {
          void 0 === r && (r = {}),
            O.fetchers.set(e, t),
            ez(
              { fetchers: new Map(O.fetchers) },
              { flushSync: !0 === (r && r.flushSync) }
            );
        }
        function eG(e, t, r, n) {
          void 0 === n && (n = {});
          let a = ef(O.matches, t);
          e1(e),
            ez(
              { errors: { [a.route.id]: r }, fetchers: new Map(O.fetchers) },
              { flushSync: !0 === (n && n.flushSync) }
            );
        }
        function e0(e) {
          return (
            D.v7_fetcherPersist &&
              (eO.set(e, (eO.get(e) || 0) + 1), eA.has(e) && eA.delete(e)),
            O.fetchers.get(e) || H
          );
        }
        function e1(e) {
          let t = O.fetchers.get(e);
          eu.has(e) && !(t && "loading" === t.state && eL.has(e)) && e7(e),
            e_.delete(e),
            eL.delete(e),
            ej.delete(e),
            eA.delete(e),
            es.delete(e),
            O.fetchers.delete(e);
        }
        function e7(e) {
          let t = eu.get(e);
          t && (t.abort(), eu.delete(e));
        }
        function e4(e) {
          for (let t of e) {
            let e = eM(e0(t).data);
            O.fetchers.set(t, e);
          }
        }
        function e2() {
          let e = [],
            t = !1;
          for (let r of ej) {
            let n = O.fetchers.get(r);
            c(n, "Expected fetcher: " + r),
              "loading" === n.state && (ej.delete(r), e.push(r), (t = !0));
          }
          return e4(e), t;
        }
        function e3(e) {
          let t = [];
          for (let [r, n] of eL)
            if (n < e) {
              let e = O.fetchers.get(r);
              c(e, "Expected fetcher: " + r),
                "loading" === e.state && (e7(r), eL.delete(r), t.push(r));
            }
          return e4(t), t.length > 0;
        }
        function e5(e) {
          O.blockers.delete(e), eB.delete(e);
        }
        function e9(e, t) {
          let r = O.blockers.get(e) || I;
          c(
            ("unblocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "proceeding" === t.state) ||
              ("blocked" === r.state && "unblocked" === t.state) ||
              ("proceeding" === r.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + r.state + " -> " + t.state
          );
          let n = new Map(O.blockers);
          n.set(e, t), ez({ blockers: n });
        }
        function e8(e) {
          let { currentLocation: t, nextLocation: r, historyAction: n } = e;
          if (0 === eB.size) return;
          eB.size > 1 && d(!1, "A router only supports one blocker at a time");
          let a = Array.from(eB.entries()),
            [o, i] = a[a.length - 1],
            l = O.blockers.get(o);
          if (!l || "proceeding" !== l.state) {
            if (i({ currentLocation: t, nextLocation: r, historyAction: n }))
              return o;
          }
        }
        function e6(e) {
          let t = em(404, { pathname: e }),
            { matches: n, route: a } = ep(r || b);
          return te(), { notFoundMatches: n, route: a, error: t };
        }
        function te(e) {
          let t = [];
          return (
            eF.forEach((r, n) => {
              (!e || e(n)) && (r.cancel(), t.push(n), eF.delete(n));
            }),
            t
          );
        }
        function tt(e, t) {
          return (
            (P &&
              P(
                e,
                t.map((e) =>
                  (function (e, t) {
                    let { route: r, pathname: n, params: a } = e;
                    return {
                      id: r.id,
                      pathname: n,
                      params: a,
                      data: t[r.id],
                      handle: r.handle,
                    };
                  })(e, O.loaderData)
                )
              )) ||
            e.key
          );
        }
        function tr(e, t) {
          if (k) {
            let r = k[tt(e, t)];
            if ("number" == typeof r) return r;
          }
          return null;
        }
        function tn(e, t, r) {
          if (R) {
            if (!e) return { active: !0, matches: w(t, r, E, !0) || [] };
            if (Object.keys(e[0].params).length > 0)
              return { active: !0, matches: w(t, r, E, !0) };
          }
          return { active: !1, matches: null };
        }
        async function ta(e, n, a) {
          if (!R) return { type: "success", matches: e };
          let o = e;
          for (;;) {
            let e = null == r,
              i = r || b,
              l = v;
            try {
              await R({
                path: n,
                matches: o,
                patch: (e, r) => {
                  !a.aborted && ee(e, r, i, l, t);
                },
              });
            } catch (e) {
              return { type: "error", error: e, partialMatches: o };
            } finally {
              e && !a.aborted && (b = [...b]);
            }
            if (a.aborted) return { type: "aborted" };
            let s = g(i, n, E);
            if (s) return { type: "success", matches: s };
            let u = w(i, n, E, !0);
            if (
              !u ||
              (o.length === u.length &&
                o.every((e, t) => e.route.id === u[t].route.id))
            )
              return { type: "success", matches: null };
            o = u;
          }
        }
        return (i = {
          get basename() {
            return E;
          },
          get future() {
            return D;
          },
          get state() {
            return O;
          },
          get routes() {
            return b;
          },
          get window() {
            return h;
          },
          initialize: function () {
            if (
              ((C = e.history.listen((t) => {
                let { action: r, location: n, delta: a } = t;
                if (u) {
                  u(), (u = void 0);
                  return;
                }
                d(
                  0 === eB.size || null != a,
                  "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                );
                let o = e8({
                  currentLocation: O.location,
                  nextLocation: n,
                  historyAction: r,
                });
                if (o && null != a) {
                  let t = new Promise((e) => {
                    u = e;
                  });
                  e.history.go(-1 * a),
                    e9(o, {
                      state: "blocked",
                      location: n,
                      proceed() {
                        e9(o, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: n,
                        }),
                          t.then(() => e.history.go(a));
                      },
                      reset() {
                        let e = new Map(O.blockers);
                        e.set(o, I), ez({ blockers: e });
                      },
                    });
                  return;
                }
                return eI(r, n);
              })),
              p)
            ) {
              (function (e, t) {
                try {
                  let r = e.sessionStorage.getItem($);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {}))
                      n && Array.isArray(n) && t.set(r, new Set(n || []));
                  }
                } catch (e) {}
              })(h, Y);
              let e = () =>
                (function (e, t) {
                  if (t.size > 0) {
                    let r = {};
                    for (let [e, n] of t) r[e] = [...n];
                    try {
                      e.sessionStorage.setItem($, JSON.stringify(r));
                    } catch (e) {
                      d(
                        !1,
                        "Failed to save applied view transitions in sessionStorage (" +
                          e +
                          ")."
                      );
                    }
                  }
                })(h, Y);
              h.addEventListener("pagehide", e),
                (K = () => h.removeEventListener("pagehide", e));
            }
            return (
              !O.initialized && eI(n.Pop, O.location, { initialHydration: !0 }),
              i
            );
          },
          subscribe: function (e) {
            return L.add(e), () => L.delete(e);
          },
          enableScrollRestoration: function (e, t, r) {
            if (((k = e), (T = t), (P = r || null), !U && O.navigation === N)) {
              U = !0;
              let e = tr(O.location, O.matches);
              null != e && ez({ restoreScrollPosition: e });
            }
            return () => {
              (k = null), (T = null), (P = null);
            };
          },
          navigate: eH,
          fetch: function (e, t, n, a) {
            if (m)
              throw Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
              );
            e7(e);
            let o = !0 === (a && a.flushSync),
              i = r || b,
              l = q(
                O.location,
                O.matches,
                E,
                D.v7_prependBasename,
                n,
                D.v7_relativeSplatPath,
                t,
                null == a ? void 0 : a.relative
              ),
              s = g(i, l, E),
              u = tn(s, i, l);
            if ((u.active && u.matches && (s = u.matches), !s)) {
              eG(e, t, em(404, { pathname: l }), { flushSync: o });
              return;
            }
            let {
              path: c,
              submission: d,
              error: h,
            } = X(D.v7_normalizeFormMethod, !0, l, a);
            if (h) {
              eG(e, t, h, { flushSync: o });
              return;
            }
            let f = ek(s, c),
              p = !0 === (a && a.preventScrollReset);
            if (d && eS(d.formMethod)) {
              eV(e, t, c, f, s, u.active, o, p, d);
              return;
            }
            e_.set(e, { routeId: t, path: c }),
              eq(e, t, c, f, s, u.active, o, p, d);
          },
          revalidate: function () {
            if (
              (eQ(),
              ez({ revalidation: "loading" }),
              "submitting" !== O.navigation.state)
            ) {
              if ("idle" === O.navigation.state) {
                eI(O.historyAction, O.location, {
                  startUninterruptedRevalidation: !0,
                });
                return;
              }
              eI(A || O.historyAction, O.navigation.location, {
                overrideNavigation: O.navigation,
                enableViewTransition: !0 === V,
              });
            }
          },
          createHref: (t) => e.history.createHref(t),
          encodeLocation: (t) => e.history.encodeLocation(t),
          getFetcher: e0,
          deleteFetcher: function (e) {
            if (D.v7_fetcherPersist) {
              let t = (eO.get(e) || 0) - 1;
              t <= 0 ? (eO.delete(e), eA.add(e)) : eO.set(e, t);
            } else e1(e);
            ez({ fetchers: new Map(O.fetchers) });
          },
          dispose: function () {
            C && C(),
              K && K(),
              L.clear(),
              s && s.abort(),
              O.fetchers.forEach((e, t) => e1(t)),
              O.blockers.forEach((e, t) => e5(t));
          },
          getBlocker: function (e, t) {
            let r = O.blockers.get(e) || I;
            return eB.get(e) !== t && eB.set(e, t), r;
          },
          deleteBlocker: e5,
          patchRoutes: function (e, n) {
            let a = null == r;
            ee(e, n, r || b, v, t), a && ((b = [...b]), ez({}));
          },
          _internalFetchControllers: eu,
          _internalActiveDeferreds: eF,
          _internalSetRoutes: function (e) {
            r = y(e, t, void 0, (v = {}));
          },
        });
      }
      Symbol("deferred");
      function q(e, t, r, n, a, o, i, l) {
        let s, u;
        if (i) {
          for (let e of ((s = []), t))
            if ((s.push(e), e.route.id === i)) {
              u = e;
              break;
            }
        } else (s = t), (u = t[t.length - 1]);
        let c = L(
          a || ".",
          C(s, o),
          S(e.pathname, r) || e.pathname,
          "path" === l
        );
        if (
          (null == a && ((c.search = e.search), (c.hash = e.hash)),
          (null == a || "" === a || "." === a) && u)
        ) {
          let e = eL(c.search);
          if (u.route.index && !e)
            c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
          else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
              t = e.getAll("index");
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let r = e.toString();
            c.search = r ? "?" + r : "";
          }
        }
        return (
          n &&
            "/" !== r &&
            (c.pathname = "/" === c.pathname ? r : k([r, c.pathname])),
          p(c)
        );
      }
      function X(e, t, r, n) {
        var a;
        let o, i;
        if (
          !n ||
          !(
            null != (a = n) &&
            (("formData" in a && null != a.formData) ||
              ("body" in a && void 0 !== a.body))
          )
        )
          return { path: r };
        if (
          n.formMethod &&
          !(function (e) {
            return F.has(e.toLowerCase());
          })(n.formMethod)
        )
          return { path: r, error: em(405, { method: n.formMethod }) };
        let l = () => ({ path: r, error: em(400, { type: "invalid-body" }) }),
          s = n.formMethod || "get",
          u = e ? s.toUpperCase() : s.toLowerCase(),
          d = ey(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!eS(u)) return l();
            let e =
              "string" == typeof n.body
                ? n.body
                : n.body instanceof FormData ||
                  n.body instanceof URLSearchParams
                ? Array.from(n.body.entries()).reduce((e, t) => {
                    let [r, n] = t;
                    return "" + e + r + "=" + n + "\n";
                  }, "")
                : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: d,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            };
          }
          if ("application/json" === n.formEncType) {
            if (!eS(u)) return l();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: d,
                  formEncType: n.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              };
            } catch (e) {
              return l();
            }
          }
        }
        if (
          (c(
            "function" == typeof FormData,
            "FormData is not available in this environment"
          ),
          n.formData)
        )
          (o = es(n.formData)), (i = n.formData);
        else if (n.body instanceof FormData) (o = es(n.body)), (i = n.body);
        else if (n.body instanceof URLSearchParams) i = eu((o = n.body));
        else if (null == n.body)
          (o = new URLSearchParams()), (i = new FormData());
        else
          try {
            (o = new URLSearchParams(n.body)), (i = eu(o));
          } catch (e) {
            return l();
          }
        let h = {
          formMethod: u,
          formAction: d,
          formEncType:
            (n && n.formEncType) || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0,
        };
        if (eS(h.formMethod)) return { path: r, submission: h };
        let f = m(r);
        return (
          t && f.search && eL(f.search) && o.append("index", ""),
          (f.search = "?" + o),
          { path: p(f), submission: h }
        );
      }
      function Y(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.findIndex((e) => e.route.id === t);
        return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
      }
      function Z(e, t, r, n, a, o, i, s, u, c, d, h, f, p, m, v) {
        let y = v ? (ew(v[1]) ? v[1].error : v[1].data) : void 0,
          w = e.createURL(t.location),
          b = e.createURL(a),
          E = r;
        o && t.errors
          ? (E = Y(r, Object.keys(t.errors)[0], !0))
          : v && ew(v[1]) && (E = Y(r, v[0]));
        let x = v ? v[1].statusCode : void 0,
          S = i && x && x >= 400,
          R = E.filter((e, r) => {
            let { route: a } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o) return Q(a, t.loaderData, t.errors);
            if (
              (function (e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a;
              })(t.loaderData, t.matches[r], e) ||
              u.some((t) => t === e.route.id)
            )
              return !0;
            let i = t.matches[r];
            return G(
              e,
              l(
                {
                  currentUrl: w,
                  currentParams: i.params,
                  nextUrl: b,
                  nextParams: e.params,
                },
                n,
                {
                  actionResult: y,
                  actionStatus: x,
                  defaultShouldRevalidate:
                    !S &&
                    (s ||
                      w.pathname + w.search === b.pathname + b.search ||
                      w.search !== b.search ||
                      K(i, e)),
                }
              )
            );
          }),
          D = [];
        return (
          h.forEach((e, a) => {
            if (o || !r.some((t) => t.route.id === e.routeId) || d.has(a))
              return;
            let i = g(p, e.path, m);
            if (!i) {
              D.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              });
              return;
            }
            let u = t.fetchers.get(a),
              h = ek(i, e.path),
              v = !1;
            f.has(a)
              ? (v = !1)
              : c.has(a)
              ? (c.delete(a), (v = !0))
              : (v =
                  u && "idle" !== u.state && void 0 === u.data
                    ? s
                    : G(
                        h,
                        l(
                          {
                            currentUrl: w,
                            currentParams:
                              t.matches[t.matches.length - 1].params,
                            nextUrl: b,
                            nextParams: r[r.length - 1].params,
                          },
                          n,
                          {
                            actionResult: y,
                            actionStatus: x,
                            defaultShouldRevalidate: !S && s,
                          }
                        )
                      )),
              v &&
                D.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: i,
                  match: h,
                  controller: new AbortController(),
                });
          }),
          [R, D]
        );
      }
      function Q(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let n = null != t && void 0 !== t[e.id],
          a = null != r && void 0 !== r[e.id];
        return (
          (!!n || !a) &&
          (("function" == typeof e.loader && !0 === e.loader.hydrate) ||
            (!n && !a))
        );
      }
      function K(e, t) {
        let r = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != r && r.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function G(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r;
        }
        return t.defaultShouldRevalidate;
      }
      function ee(e, t, r, n, a) {
        var o;
        let i;
        if (e) {
          let t = n[e];
          c(t, "No route found to patch children into: routeId = " + e),
            !t.children && (t.children = []),
            (i = t.children);
        } else i = r;
        let l = y(
          t.filter(
            (e) =>
              !i.some((t) =>
                (function e(t, r) {
                  return (
                    ("id" in t && "id" in r && t.id === r.id) ||
                    (t.index === r.index &&
                      t.path === r.path &&
                      t.caseSensitive === r.caseSensitive &&
                      (((!t.children || 0 === t.children.length) &&
                        (!r.children || 0 === r.children.length)) ||
                        t.children.every((t, n) => {
                          var a;
                          return null == (a = r.children)
                            ? void 0
                            : a.some((r) => e(t, r));
                        })))
                  );
                })(e, t)
              )
          ),
          a,
          [
            e || "_",
            "patch",
            String((null == (o = i) ? void 0 : o.length) || "0"),
          ],
          n
        );
        i.push(...l);
      }
      async function et(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        c(a, "No route found in manifest");
        let o = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          d(
            !t,
            'Route "' +
              a.id +
              '" has a static property "' +
              e +
              '" defined but its lazy function is also returning a value for this property. ' +
              ('The lazy route property "' + e) +
              '" will be ignored.'
          ),
            !t && !v.has(e) && (o[e] = n[e]);
        }
        Object.assign(a, o), Object.assign(a, l({}, t(a), { lazy: void 0 }));
      }
      async function er(e) {
        let { matches: t } = e,
          r = t.filter((e) => e.shouldLoad);
        return (await Promise.all(r.map((e) => e.resolve()))).reduce(
          (e, t, n) => Object.assign(e, { [r[n].route.id]: t }),
          {}
        );
      }
      async function en(e, t, r, n, o, i, s, u, c, d) {
        let h = i.map((e) => (e.route.lazy ? et(e.route, c, u) : void 0)),
          f = i.map((e, r) => {
            let i = h[r],
              s = o.some((t) => t.route.id === e.route.id),
              u = async (r) => (
                r &&
                  "GET" === n.method &&
                  (e.route.lazy || e.route.loader) &&
                  (s = !0),
                s
                  ? ea(t, n, e, i, r, d)
                  : Promise.resolve({ type: a.data, result: void 0 })
              );
            return l({}, e, { shouldLoad: s, resolve: u });
          }),
          p = await e({
            matches: f,
            request: n,
            params: i[0].params,
            fetcherKey: s,
            context: d,
          });
        try {
          await Promise.all(h);
        } catch (e) {}
        return p;
      }
      async function ea(e, t, r, n, o, i) {
        let l, s;
        let u = (n) => {
          let a;
          let l = new Promise((e, t) => (a = t));
          (s = () => a()), t.signal.addEventListener("abort", s);
          let u = (a) =>
            "function" != typeof n
              ? Promise.reject(
                  Error(
                    "You cannot call the handler for a route which defines a boolean " +
                      ('"' + e + '" [routeId: ' + r.route.id) +
                      "]"
                  )
                )
              : n(
                  { request: t, params: r.params, context: i },
                  ...(void 0 !== a ? [a] : [])
                );
          return Promise.race([
            (async () => {
              try {
                let e = await (o ? o((e) => u(e)) : u());
                return { type: "data", result: e };
              } catch (e) {
                return { type: "error", result: e };
              }
            })(),
            l,
          ]);
        };
        try {
          let o = r.route[e];
          if (n) {
            if (o) {
              let e;
              let [t] = await Promise.all([
                u(o).catch((t) => {
                  e = t;
                }),
                n,
              ]);
              if (void 0 !== e) throw e;
              l = t;
            } else if ((await n, (o = r.route[e]))) l = await u(o);
            else {
              if ("action" !== e) return { type: a.data, result: void 0 };
              let n = new URL(t.url),
                o = n.pathname + n.search;
              throw em(405, {
                method: t.method,
                pathname: o,
                routeId: r.route.id,
              });
            }
          } else if (o) l = await u(o);
          else {
            let e = new URL(t.url),
              r = e.pathname + e.search;
            throw em(404, { pathname: r });
          }
          c(
            void 0 !== l.result,
            "You defined " +
              ("action" === e ? "an action" : "a loader") +
              " for route " +
              ('"' +
                r.route.id +
                "\" but didn't return anything from your `" +
                e) +
              "` function. Please return a value or `null`."
          );
        } catch (e) {
          return { type: a.error, result: e };
        } finally {
          s && t.signal.removeEventListener("abort", s);
        }
        return l;
      }
      async function eo(e) {
        var t, r, n, o, i, l;
        let { result: s, type: u } = e;
        if (ex(s)) {
          let e;
          try {
            let t = s.headers.get("Content-Type");
            e =
              t && /\bapplication\/json\b/.test(t)
                ? null == s.body
                  ? null
                  : await s.json()
                : await s.text();
          } catch (e) {
            return { type: a.error, error: e };
          }
          return u === a.error
            ? {
                type: a.error,
                error: new j(s.status, s.statusText, e),
                statusCode: s.status,
                headers: s.headers,
              }
            : {
                type: a.data,
                data: e,
                statusCode: s.status,
                headers: s.headers,
              };
        }
        if (u === a.error) {
          if (eE(s)) {
            if (s.data instanceof Error)
              return {
                type: a.error,
                error: s.data,
                statusCode: null == (r = s.init) ? void 0 : r.status,
              };
            s = new j(
              (null == (t = s.init) ? void 0 : t.status) || 500,
              void 0,
              s.data
            );
          }
          return {
            type: a.error,
            error: s,
            statusCode: _(s) ? s.status : void 0,
          };
        }
        return (function (e) {
          return (
            e &&
            "object" == typeof e &&
            "object" == typeof e.data &&
            "function" == typeof e.subscribe &&
            "function" == typeof e.cancel &&
            "function" == typeof e.resolveData
          );
        })(s)
          ? {
              type: a.deferred,
              deferredData: s,
              statusCode: null == (n = s.init) ? void 0 : n.status,
              headers:
                (null == (o = s.init) ? void 0 : o.headers) &&
                new Headers(s.init.headers),
            }
          : eE(s)
          ? {
              type: a.data,
              data: s.data,
              statusCode: null == (i = s.init) ? void 0 : i.status,
              headers:
                null != (l = s.init) && l.headers
                  ? new Headers(s.init.headers)
                  : void 0,
            }
          : { type: a.data, data: s };
      }
      function ei(e, t, r) {
        if (W.test(e)) {
          let n = new URL(e.startsWith("//") ? t.protocol + e : e),
            a = null != S(n.pathname, r);
          if (n.origin === t.origin && a) return n.pathname + n.search + n.hash;
        }
        return e;
      }
      function el(e, t, r, n) {
        let a = e.createURL(ey(t)).toString(),
          o = { signal: r };
        if (n && eS(n.formMethod)) {
          let { formMethod: e, formEncType: t } = n;
          (o.method = e.toUpperCase()),
            "application/json" === t
              ? ((o.headers = new Headers({ "Content-Type": t })),
                (o.body = JSON.stringify(n.json)))
              : "text/plain" === t
              ? (o.body = n.text)
              : "application/x-www-form-urlencoded" === t && n.formData
              ? (o.body = es(n.formData))
              : (o.body = n.formData);
        }
        return new Request(a, o);
      }
      function es(e) {
        let t = new URLSearchParams();
        for (let [r, n] of e.entries())
          t.append(r, "string" == typeof n ? n : n.name);
        return t;
      }
      function eu(e) {
        let t = new FormData();
        for (let [r, n] of e.entries()) t.append(r, n);
        return t;
      }
      function ec(e, t, r, n, a, o, i) {
        var s, u, d, h, f;
        let p, m, v, y, g, w;
        let { loaderData: b, errors: E } =
          ((s = t),
          (u = r),
          (d = n),
          (h = i),
          (f = !1),
          (m = {}),
          (v = null),
          (y = !1),
          (g = {}),
          (w = d && ew(d[1]) ? d[1].error : void 0),
          s.forEach((e) => {
            if (!(e.route.id in u)) return;
            let t = e.route.id,
              r = u[t];
            if (
              (c(!eb(r), "Cannot handle redirect results in processLoaderData"),
              ew(r))
            ) {
              let e = r.error;
              if ((void 0 !== w && ((e = w), (w = void 0)), (v = v || {}), f))
                v[t] = e;
              else {
                let r = ef(s, t);
                null == v[r.route.id] && (v[r.route.id] = e);
              }
              (m[t] = void 0),
                !y && ((y = !0), (p = _(r.error) ? r.error.status : 500)),
                r.headers && (g[t] = r.headers);
            } else
              eg(r)
                ? (h.set(t, r.deferredData),
                  (m[t] = r.deferredData.data),
                  null != r.statusCode &&
                    200 !== r.statusCode &&
                    !y &&
                    (p = r.statusCode))
                : ((m[t] = r.data),
                  r.statusCode &&
                    200 !== r.statusCode &&
                    !y &&
                    (p = r.statusCode)),
                r.headers && (g[t] = r.headers);
          }),
          void 0 !== w && d && ((v = { [d[0]]: w }), (m[d[0]] = void 0)),
          { loaderData: m, errors: v, statusCode: p || 200, loaderHeaders: g });
        return (
          a.forEach((t) => {
            let { key: r, match: n, controller: a } = t,
              i = o[r];
            if (
              (c(i, "Did not find corresponding fetcher result"),
              !a || !a.signal.aborted)
            )
              if (ew(i)) {
                let t = ef(e.matches, null == n ? void 0 : n.route.id);
                !(E && E[t.route.id]) &&
                  (E = l({}, E, { [t.route.id]: i.error })),
                  e.fetchers.delete(r);
              } else if (eb(i))
                c(!1, "Unhandled fetcher revalidation redirect");
              else if (eg(i)) c(!1, "Unhandled fetcher deferred data");
              else {
                let t = eM(i.data);
                e.fetchers.set(r, t);
              }
          }),
          { loaderData: b, errors: E }
        );
      }
      function ed(e, t, r, n) {
        let a = l({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (
            (t.hasOwnProperty(r)
              ? void 0 !== t[r] && (a[r] = t[r])
              : void 0 !== e[r] && o.route.loader && (a[r] = e[r]),
            n && n.hasOwnProperty(r))
          )
            break;
        }
        return a;
      }
      function eh(e) {
        return e
          ? ew(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {};
      }
      function ef(e, t) {
        return (
          (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
        );
      }
      function ep(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || "/" === e.path) || {
                id: "__shim-error-route__",
              };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function em(e, t) {
        let {
            pathname: r,
            routeId: n,
            method: a,
            type: o,
            message: i,
          } = void 0 === t ? {} : t,
          l = "Unknown Server Error",
          s = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((l = "Bad Request"),
              a && r && n
                ? (s =
                    "You made a " +
                    a +
                    ' request to "' +
                    r +
                    '" but ' +
                    ('did not provide a `loader` for route "' + n) +
                    '", so there is no way to handle the request.')
                : "defer-action" === o
                ? (s = "defer() is not supported in actions")
                : "invalid-body" === o &&
                  (s = "Unable to encode submission body"))
            : 403 === e
            ? ((l = "Forbidden"),
              (s = 'Route "' + n + '" does not match URL "' + r + '"'))
            : 404 === e
            ? ((l = "Not Found"), (s = 'No route matches URL "' + r + '"'))
            : 405 === e &&
              ((l = "Method Not Allowed"),
              a && r && n
                ? (s =
                    "You made a " +
                    a.toUpperCase() +
                    ' request to "' +
                    r +
                    '" but ' +
                    ('did not provide an `action` for route "' + n) +
                    '", so there is no way to handle the request.')
                : a &&
                  (s = 'Invalid request method "' + a.toUpperCase() + '"')),
          new j(e || 500, l, Error(s), !0)
        );
      }
      function ev(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, n] = t[e];
          if (eb(n)) return { key: r, result: n };
        }
      }
      function ey(e) {
        let t = "string" == typeof e ? m(e) : e;
        return p(l({}, t, { hash: "" }));
      }
      function eg(e) {
        return e.type === a.deferred;
      }
      function ew(e) {
        return e.type === a.error;
      }
      function eb(e) {
        return (e && e.type) === a.redirect;
      }
      function eE(e) {
        return (
          "object" == typeof e &&
          null != e &&
          "type" in e &&
          "data" in e &&
          "init" in e &&
          "DataWithResponseInit" === e.type
        );
      }
      function ex(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "object" == typeof e.headers &&
          void 0 !== e.body
        );
      }
      function eS(e) {
        return A.has(e.toLowerCase());
      }
      async function eR(e, t, r, n, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [l, s] = o[i],
            u = e.find((e) => (null == e ? void 0 : e.route.id) === l);
          if (!u) continue;
          let c = n.find((e) => e.route.id === u.route.id),
            d = null != c && !K(c, u) && (a && a[u.route.id]) !== void 0;
          eg(s) &&
            d &&
            (await eC(s, r, !1).then((e) => {
              e && (t[l] = e);
            }));
        }
      }
      async function eD(e, t, r) {
        for (let n = 0; n < r.length; n++) {
          let { key: a, routeId: o, controller: i } = r[n],
            l = t[a];
          if (!!e.find((e) => (null == e ? void 0 : e.route.id) === o))
            eg(l) &&
              (c(
                i,
                "Expected an AbortController for revalidating fetcher deferred result"
              ),
              await eC(l, i.signal, !0).then((e) => {
                e && (t[a] = e);
              }));
        }
      }
      async function eC(e, t, r) {
        if (
          (void 0 === r && (r = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (r)
            try {
              return { type: a.data, data: e.deferredData.unwrappedData };
            } catch (e) {
              return { type: a.error, error: e };
            }
          return { type: a.data, data: e.deferredData.data };
        }
      }
      function eL(e) {
        return new URLSearchParams(e).getAll("index").some((e) => "" === e);
      }
      function ek(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && eL(r || "")) return e[e.length - 1];
        let n = D(e);
        return n[n.length - 1];
      }
      function eP(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: a,
          formData: o,
          json: i,
        } = e;
        if (!!t && !!r && !!n) {
          if (null != a)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: void 0,
              json: void 0,
              text: a,
            };
          if (null != o)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: o,
              json: void 0,
              text: void 0,
            };
          if (void 0 !== i)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: void 0,
              json: i,
              text: void 0,
            };
        }
      }
      function eT(e, t) {
        return t
          ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
            }
          : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
            };
      }
      function eU(e, t) {
        return e
          ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
            }
          : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
            };
      }
      function eM(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
    },
    79655: function (e, t, r) {
      r.d(t, {
        OL: function () {
          return _;
        },
        aj: function () {
          return x;
        },
        pG: function () {
          return P;
        },
        rU: function () {
          return j;
        },
      });
      var n,
        a,
        o,
        i,
        l,
        s,
        u = r(67294),
        c = r(73935),
        d = r(89250),
        h = r(12599);
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), !(t.indexOf(r) >= 0) && (a[r] = e[r]);
        return a;
      }
      let m = "application/x-www-form-urlencoded";
      function v(e) {
        return null != e && "string" == typeof e.tagName;
      }
      let y = null,
        g = new Set([
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
        ]);
      function w(e) {
        return null == e || g.has(e) ? e : null;
      }
      let b = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
          "viewTransition",
        ],
        E = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "viewTransition",
          "children",
        ];
      try {
        window.__reactRouterVersion = "6";
      } catch (e) {}
      function x(e, t) {
        return (0, h.p7)({
          basename: null == t ? void 0 : t.basename,
          future: f({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history: (0, h.lX)({ window: null == t ? void 0 : t.window }),
          hydrationData:
            (null == t ? void 0 : t.hydrationData) ||
            (function () {
              var e;
              let t =
                null == (e = window) ? void 0 : e.__staticRouterHydrationData;
              return (
                t &&
                  t.errors &&
                  (t = f({}, t, {
                    errors: (function (e) {
                      if (!e) return null;
                      let t = Object.entries(e),
                        r = {};
                      for (let [e, n] of t)
                        if (n && "RouteErrorResponse" === n.__type)
                          r[e] = new h.OF(
                            n.status,
                            n.statusText,
                            n.data,
                            !0 === n.internal
                          );
                        else if (n && "Error" === n.__type) {
                          if (n.__subType) {
                            let t = window[n.__subType];
                            if ("function" == typeof t)
                              try {
                                let a = new t(n.message);
                                (a.stack = ""), (r[e] = a);
                              } catch (e) {}
                          }
                          if (null == r[e]) {
                            let t = Error(n.message);
                            (t.stack = ""), (r[e] = t);
                          }
                        } else r[e] = n;
                      return r;
                    })(t.errors),
                  })),
                t
              );
            })(),
          routes: e,
          mapRouteProperties: d.us,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation:
            null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window,
        }).initialize();
      }
      let S = u.createContext({ isTransitioning: !1 }),
        R = u.createContext(new Map()),
        D = (o || (o = r.t(u, 2))).startTransition,
        C = (i || (i = r.t(c, 2))).flushSync;
      (o || (o = r.t(u, 2))).useId;
      function L(e) {
        C ? C(e) : e();
      }
      class k {
        constructor() {
          (this.status = "pending"),
            (this.promise = new Promise((e, t) => {
              (this.resolve = (t) => {
                "pending" === this.status && ((this.status = "resolved"), e(t));
              }),
                (this.reject = (e) => {
                  "pending" === this.status &&
                    ((this.status = "rejected"), t(e));
                });
            }));
        }
      }
      function P(e) {
        let { fallbackElement: t, router: r, future: n } = e,
          [a, o] = u.useState(r.state),
          [i, l] = u.useState(),
          [s, c] = u.useState({ isTransitioning: !1 }),
          [h, f] = u.useState(),
          [p, m] = u.useState(),
          [v, y] = u.useState(),
          g = u.useRef(new Map()),
          { v7_startTransition: w } = n || {},
          b = u.useCallback(
            (e) => {
              if (w) {
                var t;
                (t = e), D ? D(t) : t();
              } else e();
            },
            [w]
          ),
          E = u.useCallback(
            (e, t) => {
              let {
                deletedFetchers: n,
                flushSync: a,
                viewTransitionOpts: i,
              } = t;
              n.forEach((e) => g.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && g.current.set(t, e.data);
                });
              let s =
                null == r.window ||
                null == r.window.document ||
                "function" != typeof r.window.document.startViewTransition;
              if (!i || s) {
                a ? L(() => o(e)) : b(() => o(e));
                return;
              }
              if (a) {
                L(() => {
                  p && (h && h.resolve(), p.skipTransition()),
                    c({
                      isTransitioning: !0,
                      flushSync: !0,
                      currentLocation: i.currentLocation,
                      nextLocation: i.nextLocation,
                    });
                });
                let t = r.window.document.startViewTransition(() => {
                  L(() => o(e));
                });
                t.finished.finally(() => {
                  L(() => {
                    f(void 0), m(void 0), l(void 0), c({ isTransitioning: !1 });
                  });
                }),
                  L(() => m(t));
                return;
              }
              p
                ? (h && h.resolve(),
                  p.skipTransition(),
                  y({
                    state: e,
                    currentLocation: i.currentLocation,
                    nextLocation: i.nextLocation,
                  }))
                : (l(e),
                  c({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: i.currentLocation,
                    nextLocation: i.nextLocation,
                  }));
            },
            [r.window, p, h, g, b]
          );
        u.useLayoutEffect(() => r.subscribe(E), [r, E]),
          u.useEffect(() => {
            s.isTransitioning && !s.flushSync && f(new k());
          }, [s]),
          u.useEffect(() => {
            if (h && i && r.window) {
              let e = h.promise,
                t = r.window.document.startViewTransition(async () => {
                  b(() => o(i)), await e;
                });
              t.finished.finally(() => {
                f(void 0), m(void 0), l(void 0), c({ isTransitioning: !1 });
              }),
                m(t);
            }
          }, [b, i, h, r.window]),
          u.useEffect(() => {
            h && i && a.location.key === i.location.key && h.resolve();
          }, [h, p, a.location, i]),
          u.useEffect(() => {
            !s.isTransitioning &&
              v &&
              (l(v.state),
              c({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: v.currentLocation,
                nextLocation: v.nextLocation,
              }),
              y(void 0));
          }, [s.isTransitioning, v]),
          u.useEffect(() => {}, []);
        let x = u.useMemo(
            () => ({
              createHref: r.createHref,
              encodeLocation: r.encodeLocation,
              go: (e) => r.navigate(e),
              push: (e, t, n) =>
                r.navigate(e, {
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
              replace: (e, t, n) =>
                r.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
            }),
            [r]
          ),
          C = r.basename || "/",
          P = u.useMemo(
            () => ({ router: r, navigator: x, static: !1, basename: C }),
            [r, x, C]
          ),
          U = u.useMemo(
            () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
            [r.future.v7_relativeSplatPath]
          );
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            d.w3.Provider,
            { value: P },
            u.createElement(
              d.FR.Provider,
              { value: a },
              u.createElement(
                R.Provider,
                { value: g.current },
                u.createElement(
                  S.Provider,
                  { value: s },
                  u.createElement(
                    d.F0,
                    {
                      basename: C,
                      location: a.location,
                      navigationType: a.historyAction,
                      navigator: x,
                      future: U,
                    },
                    a.initialized || r.future.v7_partialHydration
                      ? u.createElement(T, {
                          routes: r.routes,
                          future: r.future,
                          state: a,
                        })
                      : t
                  )
                )
              )
            )
          ),
          null
        );
      }
      let T = u.memo(function (e) {
          let { routes: t, future: r, state: n } = e;
          return (0, d.DY)(t, void 0, n, r);
        }),
        U =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        M = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        j = u.forwardRef(function (e, t) {
          let r,
            {
              onClick: n,
              relative: a,
              reloadDocument: o,
              replace: i,
              state: l,
              target: s,
              to: c,
              preventScrollReset: m,
              viewTransition: v,
            } = e,
            y = p(e, b),
            { basename: g } = u.useContext(d.Us),
            w = !1;
          if ("string" == typeof c && M.test(c) && ((r = c), U))
            try {
              let e = new URL(window.location.href),
                t = new URL(c.startsWith("//") ? e.protocol + c : c),
                r = (0, h.Zn)(t.pathname, g);
              t.origin === e.origin && null != r
                ? (c = r + t.search + t.hash)
                : (w = !0);
            } catch (e) {}
          let E = (0, d.oQ)(c, { relative: a }),
            x = (function (e, t) {
              let {
                  target: r,
                  replace: n,
                  state: a,
                  preventScrollReset: o,
                  relative: i,
                  viewTransition: l,
                } = void 0 === t ? {} : t,
                s = (0, d.s0)(),
                c = (0, d.TH)(),
                f = (0, d.WU)(e, { relative: i });
              return u.useCallback(
                (t) => {
                  var u, d, p;
                  if (
                    ((u = t),
                    (d = r),
                    0 === u.button &&
                      (!d || "_self" === d) &&
                      !((p = u).metaKey || p.altKey || p.ctrlKey || p.shiftKey))
                  )
                    t.preventDefault(),
                      s(e, {
                        replace:
                          void 0 !== n ? n : (0, h.Ep)(c) === (0, h.Ep)(f),
                        state: a,
                        preventScrollReset: o,
                        relative: i,
                        viewTransition: l,
                      });
                },
                [c, s, f, n, a, r, e, o, i, l]
              );
            })(c, {
              replace: i,
              state: l,
              target: s,
              preventScrollReset: m,
              relative: a,
              viewTransition: v,
            });
          return u.createElement(
            "a",
            f({}, y, {
              href: r || E,
              onClick:
                w || o
                  ? n
                  : function (e) {
                      n && n(e), !e.defaultPrevented && x(e);
                    },
              ref: t,
              target: s,
            })
          );
        }),
        _ = u.forwardRef(function (e, t) {
          let r,
            {
              "aria-current": n = "page",
              caseSensitive: a = !1,
              className: o = "",
              end: i = !1,
              style: s,
              to: c,
              viewTransition: m,
              children: v,
            } = e,
            y = p(e, E),
            g = (0, d.WU)(c, { relative: y.relative }),
            w = (0, d.TH)(),
            b = u.useContext(d.FR),
            { navigator: x, basename: R } = u.useContext(d.Us),
            D =
              null != b &&
              (function (e, t) {
                void 0 === t && (t = {});
                let r = u.useContext(S);
                null != r || (0, h.J0)(!1);
                let { basename: n } = O(l.useViewTransitionState),
                  a = (0, d.WU)(e, { relative: t.relative });
                if (!r.isTransitioning) return !1;
                let o =
                    (0, h.Zn)(r.currentLocation.pathname, n) ||
                    r.currentLocation.pathname,
                  i =
                    (0, h.Zn)(r.nextLocation.pathname, n) ||
                    r.nextLocation.pathname;
                return (
                  null != (0, h.LX)(a.pathname, i) ||
                  null != (0, h.LX)(a.pathname, o)
                );
              })(g) &&
              !0 === m,
            C = x.encodeLocation ? x.encodeLocation(g).pathname : g.pathname,
            L = w.pathname,
            k =
              b && b.navigation && b.navigation.location
                ? b.navigation.location.pathname
                : null;
          !a &&
            ((L = L.toLowerCase()),
            (k = k ? k.toLowerCase() : null),
            (C = C.toLowerCase())),
            k && R && (k = (0, h.Zn)(k, R) || k);
          let P = "/" !== C && C.endsWith("/") ? C.length - 1 : C.length,
            T = L === C || (!i && L.startsWith(C) && "/" === L.charAt(P)),
            U =
              null != k &&
              (k === C ||
                (!i && k.startsWith(C) && "/" === k.charAt(C.length))),
            M = { isActive: T, isPending: U, isTransitioning: D },
            _ = T ? n : void 0;
          r =
            "function" == typeof o
              ? o(M)
              : [
                  o,
                  T ? "active" : null,
                  U ? "pending" : null,
                  D ? "transitioning" : null,
                ]
                  .filter(Boolean)
                  .join(" ");
          let A = "function" == typeof s ? s(M) : s;
          return u.createElement(
            j,
            f({}, y, {
              "aria-current": _,
              className: r,
              ref: t,
              style: A,
              to: c,
              viewTransition: m,
            }),
            "function" == typeof v ? v(M) : v
          );
        });
      function O(e) {
        let t = u.useContext(d.w3);
        return t || (0, h.J0)(!1), t;
      }
      ((n = l || (l = {})).UseScrollRestoration = "useScrollRestoration"),
        (n.UseSubmit = "useSubmit"),
        (n.UseSubmitFetcher = "useSubmitFetcher"),
        (n.UseFetcher = "useFetcher"),
        (n.useViewTransitionState = "useViewTransitionState"),
        ((a = s || (s = {})).UseFetcher = "useFetcher"),
        (a.UseFetchers = "useFetchers"),
        (a.UseScrollRestoration = "useScrollRestoration");
      let A = 0,
        F = () => "__" + String(++A) + "__";
    },
    89250: function (e, t, r) {
      r.d(t, {
        AW: function () {
          return A;
        },
        DY: function () {
          return S;
        },
        F0: function () {
          return F;
        },
        FR: function () {
          return d;
        },
        TH: function () {
          return g;
        },
        Us: function () {
          return h;
        },
        WU: function () {
          return x;
        },
        _Z: function () {
          return j;
        },
        i7: function () {
          return function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
              l.Children.forEach(t, (t, a) => {
                if (!l.isValidElement(t)) return;
                let o = [...r, a];
                if (t.type === l.Fragment) {
                  n.push.apply(n, e(t.props.children, o));
                  return;
                }
                t.type !== A && (0, s.J0)(!1),
                  !t.props.index || !t.props.children || (0, s.J0)(!1);
                let i = {
                  id: t.props.id || o.join("-"),
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  Component: t.props.Component,
                  index: t.props.index,
                  path: t.props.path,
                  loader: t.props.loader,
                  action: t.props.action,
                  errorElement: t.props.errorElement,
                  ErrorBoundary: t.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != t.props.ErrorBoundary ||
                    null != t.props.errorElement,
                  shouldRevalidate: t.props.shouldRevalidate,
                  handle: t.props.handle,
                  lazy: t.props.lazy,
                };
                t.props.children && (i.children = e(t.props.children, o)),
                  n.push(i);
              }),
              n
            );
          };
        },
        j3: function () {
          return O;
        },
        oQ: function () {
          return v;
        },
        s0: function () {
          return b;
        },
        us: function () {
          return z;
        },
        w3: function () {
          return c;
        },
      });
      var n,
        a,
        o,
        i,
        l = r(67294),
        s = r(12599);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      let c = l.createContext(null),
        d = l.createContext(null),
        h = l.createContext(null),
        f = l.createContext(null),
        p = l.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        m = l.createContext(null);
      function v(e, t) {
        let { relative: r } = void 0 === t ? {} : t;
        y() || (0, s.J0)(!1);
        let { basename: n, navigator: a } = l.useContext(h),
          { hash: o, pathname: i, search: u } = x(e, { relative: r }),
          c = i;
        return (
          "/" !== n && (c = "/" === i ? n : (0, s.RQ)([n, i])),
          a.createHref({ pathname: c, search: u, hash: o })
        );
      }
      function y() {
        return null != l.useContext(f);
      }
      function g() {
        return y() || (0, s.J0)(!1), l.useContext(f).location;
      }
      function w(e) {
        !l.useContext(h).static && l.useLayoutEffect(e);
      }
      function b() {
        let { isDataRoute: e } = l.useContext(p);
        return e
          ? (function () {
              let { router: e } = P(L.UseNavigateStable),
                t = U(k.UseNavigateStable),
                r = l.useRef(!1);
              return (
                w(() => {
                  r.current = !0;
                }),
                l.useCallback(
                  function (n, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" == typeof n
                          ? e.navigate(n)
                          : e.navigate(n, u({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              y() || (0, s.J0)(!1);
              let e = l.useContext(c),
                { basename: t, future: r, navigator: n } = l.useContext(h),
                { matches: a } = l.useContext(p),
                { pathname: o } = g(),
                i = JSON.stringify((0, s.cm)(a, r.v7_relativeSplatPath)),
                u = l.useRef(!1);
              return (
                w(() => {
                  u.current = !0;
                }),
                l.useCallback(
                  function (r, a) {
                    if ((void 0 === a && (a = {}), !u.current)) return;
                    if ("number" == typeof r) {
                      n.go(r);
                      return;
                    }
                    let l = (0, s.pC)(
                      r,
                      JSON.parse(i),
                      o,
                      "path" === a.relative
                    );
                    null == e &&
                      "/" !== t &&
                      (l.pathname =
                        "/" === l.pathname ? t : (0, s.RQ)([t, l.pathname])),
                      (a.replace ? n.replace : n.push)(l, a.state, a);
                  },
                  [t, n, i, o, e]
                )
              );
            })();
      }
      let E = l.createContext(null);
      function x(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { future: n } = l.useContext(h),
          { matches: a } = l.useContext(p),
          { pathname: o } = g(),
          i = JSON.stringify((0, s.cm)(a, n.v7_relativeSplatPath));
        return l.useMemo(
          () => (0, s.pC)(e, JSON.parse(i), o, "path" === r),
          [e, i, o, r]
        );
      }
      function S(e, t, r, n) {
        let a;
        y() || (0, s.J0)(!1);
        let { navigator: o } = l.useContext(h),
          { matches: i } = l.useContext(p),
          c = i[i.length - 1],
          d = c ? c.params : {};
        c && c.pathname;
        let m = c ? c.pathnameBase : "/";
        c && c.route;
        let v = g();
        if (t) {
          var w;
          let e = "string" == typeof t ? (0, s.cP)(t) : t;
          "/" === m ||
            (null == (w = e.pathname) ? void 0 : w.startsWith(m)) ||
            (0, s.J0)(!1),
            (a = e);
        } else a = v;
        let b = a.pathname || "/",
          E = b;
        if ("/" !== m) {
          let e = m.replace(/^\//, "").split("/");
          E = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let x = (0, s.fp)(e, { pathname: E }),
          S = (function (e, t, r, n) {
            var a, o;
            if (
              (void 0 === t && (t = []),
              void 0 === r && (r = null),
              void 0 === n && (n = null),
              null == e)
            ) {
              if (!r) return null;
              if (r.errors) e = r.matches;
              else {
                if (
                  null == (o = n) ||
                  !o.v7_partialHydration ||
                  0 !== t.length ||
                  r.initialized ||
                  !(r.matches.length > 0)
                )
                  return null;
                e = r.matches;
              }
            }
            let i = e,
              u = null == (a = r) ? void 0 : a.errors;
            if (null != u) {
              let e = i.findIndex(
                (e) =>
                  e.route.id && (null == u ? void 0 : u[e.route.id]) !== void 0
              );
              e >= 0 || (0, s.J0)(!1),
                (i = i.slice(0, Math.min(i.length, e + 1)));
            }
            let c = !1,
              d = -1;
            if (r && n && n.v7_partialHydration)
              for (let e = 0; e < i.length; e++) {
                let t = i[e];
                if (
                  ((t.route.HydrateFallback ||
                    t.route.hydrateFallbackElement) &&
                    (d = e),
                  t.route.id)
                ) {
                  let { loaderData: e, errors: n } = r,
                    a =
                      t.route.loader &&
                      void 0 === e[t.route.id] &&
                      (!n || void 0 === n[t.route.id]);
                  if (t.route.lazy || a) {
                    (c = !0), (i = d >= 0 ? i.slice(0, d + 1) : [i[0]]);
                    break;
                  }
                }
              }
            return i.reduceRight((e, n, a) => {
              let o;
              let s = !1,
                h = null,
                f = null;
              r &&
                ((o = u && n.route.id ? u[n.route.id] : void 0),
                (h = n.route.errorElement || R),
                c &&
                  (d < 0 && 0 === a
                    ? ((function (e, t, r) {
                        !t && !_[e] && (_[e] = !0);
                      })(
                        "route-fallback",
                        !1,
                        "No `HydrateFallback` element provided to render during initial hydration"
                      ),
                      (s = !0),
                      (f = null))
                    : d === a &&
                      ((s = !0),
                      (f = n.route.hydrateFallbackElement || null))));
              let p = t.concat(i.slice(0, a + 1)),
                m = () => {
                  let t;
                  return (
                    (t = o
                      ? h
                      : s
                      ? f
                      : n.route.Component
                      ? l.createElement(n.route.Component, null)
                      : n.route.element
                      ? n.route.element
                      : e),
                    l.createElement(C, {
                      match: n,
                      routeContext: {
                        outlet: e,
                        matches: p,
                        isDataRoute: null != r,
                      },
                      children: t,
                    })
                  );
                };
              return r &&
                (n.route.ErrorBoundary || n.route.errorElement || 0 === a)
                ? l.createElement(D, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: h,
                    error: o,
                    children: m(),
                    routeContext: { outlet: null, matches: p, isDataRoute: !0 },
                  })
                : m();
            }, null);
          })(
            x &&
              x.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, d, e.params),
                  pathname: (0, s.RQ)([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathname).pathname
                      : e.pathname,
                  ]),
                  pathnameBase:
                    "/" === e.pathnameBase
                      ? m
                      : (0, s.RQ)([
                          m,
                          o.encodeLocation
                            ? o.encodeLocation(e.pathnameBase).pathname
                            : e.pathnameBase,
                        ]),
                })
              ),
            i,
            r,
            n
          );
        return t && S
          ? l.createElement(
              f.Provider,
              {
                value: {
                  location: u(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    a
                  ),
                  navigationType: s.aU.Pop,
                },
              },
              S
            )
          : S;
      }
      let R = l.createElement(function () {
        let e = (function () {
            var e;
            let t = l.useContext(m),
              r = T(k.UseRouteError),
              n = U(k.UseRouteError);
            return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n];
          })(),
          t = (0, s.WK)(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h2", null, "Unexpected Application Error!"),
          l.createElement("h3", { style: { fontStyle: "italic" } }, t),
          r
            ? l.createElement(
                "pre",
                {
                  style: {
                    padding: "0.5rem",
                    backgroundColor: "rgba(200,200,200, 0.5)",
                  },
                },
                r
              )
            : null,
          null
        );
      }, null);
      class D extends l.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? l.createElement(
                p.Provider,
                { value: this.props.routeContext },
                l.createElement(m.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function C(e) {
        let { routeContext: t, match: r, children: n } = e,
          a = l.useContext(c);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          l.createElement(p.Provider, { value: t }, n)
        );
      }
      var L =
        (((n = L || {}).UseBlocker = "useBlocker"),
        (n.UseRevalidator = "useRevalidator"),
        (n.UseNavigateStable = "useNavigate"),
        n);
      var k =
        (((a = k || {}).UseBlocker = "useBlocker"),
        (a.UseLoaderData = "useLoaderData"),
        (a.UseActionData = "useActionData"),
        (a.UseRouteError = "useRouteError"),
        (a.UseNavigation = "useNavigation"),
        (a.UseRouteLoaderData = "useRouteLoaderData"),
        (a.UseMatches = "useMatches"),
        (a.UseRevalidator = "useRevalidator"),
        (a.UseNavigateStable = "useNavigate"),
        (a.UseRouteId = "useRouteId"),
        a);
      function P(e) {
        let t = l.useContext(c);
        return t || (0, s.J0)(!1), t;
      }
      function T(e) {
        let t = l.useContext(d);
        return t || (0, s.J0)(!1), t;
      }
      function U(e) {
        var t;
        let r;
        let n = ((t = 0), (r = l.useContext(p)) || (0, s.J0)(!1), r),
          a = n.matches[n.matches.length - 1];
        return a.route.id || (0, s.J0)(!1), a.route.id;
      }
      let M = 0;
      function j(e) {
        let { router: t, basename: r } = P(L.UseBlocker),
          n = T(k.UseBlocker),
          [a, o] = l.useState(""),
          i = l.useCallback(
            (t) => {
              if ("function" != typeof e) return !!e;
              if ("/" === r) return e(t);
              let { currentLocation: n, nextLocation: a, historyAction: o } = t;
              return e({
                currentLocation: u({}, n, {
                  pathname: (0, s.Zn)(n.pathname, r) || n.pathname,
                }),
                nextLocation: u({}, a, {
                  pathname: (0, s.Zn)(a.pathname, r) || a.pathname,
                }),
                historyAction: o,
              });
            },
            [r, e]
          );
        return (
          l.useEffect(() => {
            let e = String(++M);
            return o(e), () => t.deleteBlocker(e);
          }, [t]),
          l.useEffect(() => {
            "" !== a && t.getBlocker(a, i);
          }, [t, a, i]),
          a && n.blockers.has(a) ? n.blockers.get(a) : s.qp
        );
      }
      let _ = {};
      function O(e) {
        var t;
        let r;
        return (
          (t = e.context),
          (r = l.useContext(p).outlet)
            ? l.createElement(E.Provider, { value: t }, r)
            : r
        );
      }
      function A(e) {
        (0, s.J0)(!1);
      }
      function F(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: n,
          navigationType: a = s.aU.Pop,
          navigator: o,
          static: i = !1,
          future: c,
        } = e;
        y() && (0, s.J0)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = l.useMemo(
            () => ({
              basename: d,
              navigator: o,
              static: i,
              future: u({ v7_relativeSplatPath: !1 }, c),
            }),
            [d, c, o, i]
          );
        "string" == typeof n && (n = (0, s.cP)(n));
        let {
            pathname: m = "/",
            search: v = "",
            hash: g = "",
            state: w = null,
            key: b = "default",
          } = n,
          E = l.useMemo(() => {
            let e = (0, s.Zn)(m, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: v,
                    hash: g,
                    state: w,
                    key: b,
                  },
                  navigationType: a,
                };
          }, [d, m, v, g, w, b, a]);
        return null == E
          ? null
          : l.createElement(
              h.Provider,
              { value: p },
              l.createElement(f.Provider, { children: r, value: E })
            );
      }
      (i || (i = r.t(l, 2))).startTransition;
      var B =
        (((o = B || {})[(o.pending = 0)] = "pending"),
        (o[(o.success = 1)] = "success"),
        (o[(o.error = 2)] = "error"),
        o);
      new Promise(() => {});
      function z(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(t, {
              element: l.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(t, {
              hydrateFallbackElement: l.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(t, {
              errorElement: l.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          t
        );
      }
    },
  },
]);
