"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [432],
  {
    65458: function (e, t, n) {
      n.d(t, {
        l3: function () {
          return p;
        },
        Hz: function () {
          return u;
        },
        yu: function () {
          return l;
        },
        ky: function () {
          return y;
        },
        Hw: function () {
          return d;
        },
      });
      var a,
        i = n(77460),
        s = n(12117),
        r =
          ((a = {}),
          (0, i.Z)(a, s.a_.BSC, {
            PriceOracle: "0x58C7Ac85302Df0c7219F06E99D9717F7260383fC",
            MysteryBoxManager: "0xECD5201fEBbC213822f0322Aa37D4F808371A2E8",
            CatgirlCoin: "0x79eBC9A2ce02277A4b5b3A768b1C0A4ed75Bd936",
            CatgirlNFT: "0xE796f4b5253a4b3Edb4Bb3f054c03F147122BACD",
            AirdropManager: "0x731b3C117B24447e44a4DbF82f3aA6816e17095b",
          }),
          (0, i.Z)(a, s.a_.BSCTestnet, {
            PriceOracle: "0x42F9dCD7410ba84F18267b115ff7C7f54d0b14a7",
            MysteryBoxManager: "0xd777409cc95820BAD3907249Dea3eE11cD38e05f",
            CatgirlCoin: "0xE499B06f48F552fd2c4E4a72269ff83a9B15f2CE",
            CatgirlNFT: "0x7bB9259f93594ba9E3690d5bE02cAF2688dE7E2B",
            AirdropManager: "0xAc42efDb5CC38f53EE779B0498919546f33D949e",
          }),
          a),
        o = null !== "56" ? "56" : s.a_.BSC,
        p = r[o].PriceOracle,
        u = r[o].MysteryBoxManager,
        l = r[o].CatgirlCoin,
        y = r[o].CatgirlNFT,
        d = r[o].AirdropManager;
    },
    90432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Ce;
        },
      });
      var a = n(9207),
        i = n(29566),
        s = n(90059),
        r = n(92847),
        o = n.n(r),
        p = n(97274),
        u = n(86581),
        l = n(90017),
        y = n(63766),
        d = n(29138),
        c = n(80444),
        m = n(2784),
        b = n(77460),
        f = n(97729),
        x = n(5632),
        T = n(52322);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var g = "https://nextjs-ethereum-starter.vercel.app/",
        v = function (e) {
          var t = e.customMeta,
            n = (0, x.useRouter)(),
            a = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(n), !0).forEach(function (t) {
                      (0, b.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : h(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              {
                title: "Catgirl Hub - A nya-tastic NFT platform",
                description: "Catgirl Hub",
                image: "./images/catgirl_logo.png",
                type: "website",
              },
              t
            );
          return (0, T.jsxs)(f.default, {
            children: [
              (0, T.jsx)("title", { children: a.title }),
              (0, T.jsx)("meta", {
                content: a.description,
                name: "description",
              }),
              (0, T.jsx)("meta", {
                property: "og:url",
                content: "".concat(g).concat(n.asPath),
              }),
              (0, T.jsx)("link", {
                rel: "canonical",
                href: "".concat(g).concat(n.asPath),
              }),
              (0, T.jsx)("link", { rel: "shortcut icon", href: a.image }),
              (0, T.jsx)("meta", { property: "og:type", content: a.type }),
              (0, T.jsx)("meta", {
                property: "og:site_name",
                content: "Catgirl",
              }),
              (0, T.jsx)("meta", {
                property: "og:description",
                content: a.description,
              }),
              (0, T.jsx)("meta", { property: "og:title", content: a.title }),
              (0, T.jsx)("meta", { property: "og:image", content: a.image }),
              (0, T.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, T.jsx)("meta", {
                name: "twitter:site",
                content: "@huntarosan",
              }),
              (0, T.jsx)("meta", { name: "twitter:title", content: a.title }),
              (0, T.jsx)("meta", {
                name: "twitter:description",
                content: a.description,
              }),
              (0, T.jsx)("meta", { name: "twitter:image", content: a.image }),
            ],
          });
        },
        w = n(46760),
        M = n(94624),
        j = n(27592),
        C = n(18605),
        S = n(11338),
        k = n(9708),
        A = n(45059),
        R = n(45156),
        I = n(85826),
        O = n(24827),
        F = n(60666),
        _ = n(36321),
        E = n(64042),
        P = n(37635),
        z = n(66419),
        D = n(63554),
        B = n(71898),
        W = new D.zw({
          rpc: { 56: B.vl[56], 97: B.vl[97] },
          qrcode: !0,
          pollingInterval: 12e3,
        }),
        L = n(25237),
        N = n(91914),
        U = n(8799),
        G = n(39097),
        V = n(18978);
      function Z() {
        var e = (0, y.K)(),
          t = e.account,
          n = e.activate,
          a = e.activateBrowserWallet,
          i = e.deactivate,
          s = (0, w.useColorModeValue)("white", "dark.200"),
          r = (0, w.useColorModeValue)("customGray.900", "customGray.100"),
          o = (0, w.useColorModeValue)("white", "customGray.650"),
          p = (0, w.useColorModeValue)(
            "#b621fe",
            "linear-gradient(to right, #F080A3, #D06889)"
          ),
          l = (0, E.q)(),
          d = l.onOpen,
          c = l.isOpen,
          b = l.onClose;
        return (
          (0, m.useEffect)(
            function () {
              t && b();
            },
            [b, t]
          ),
          (0, T.jsxs)(T.Fragment, {
            children: [
              t
                ? (0, T.jsx)(j.k, {
                    flex: { base: 1 },
                    justify: { base: "center", md: "start" },
                    children: (0, T.jsxs)(P.v2, {
                      children: [
                        (0, T.jsx)(P.j2, {
                          cursor: "pointer",
                          transitionProperty: "none",
                          as: j.k,
                          children: (0, T.jsxs)(j.k, {
                            cursor: "pointer",
                            alignItems: "center",
                            className: "test",
                            children: [
                              (0, T.jsx)(O.h, {
                                transitionProperty: "none",
                                "aria-label": "",
                                boxShadow: "lg",
                                borderRadius: "50%",
                                zIndex: "2",
                                bg: o,
                                color: "customGray.200",
                                _focus: {
                                  boxShadow:
                                    "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19)",
                                },
                                icon: (0, T.jsx)(A.J, { as: U.HHm }),
                              }),
                              (0, T.jsxs)(u.xu, {
                                position: "relative",
                                children: [
                                  (0, T.jsx)(k.z, {
                                    paddingLeft: "30px",
                                    fontWeight: 600,
                                    color: "customGray.500",
                                    backgroundColor: "customGray.300",
                                    borderRadius: "60px",
                                    bg: "customGray.100",
                                    width: "75px",
                                    style: { fontSize: "10px" },
                                    left: "-15px",
                                    height: "20px",
                                    fontFamily: "heading",
                                    boxShadow: "none",
                                    pointerEvents: "none",
                                    children:
                                      t &&
                                      (function (e) {
                                        return ""
                                          .concat(e.substring(0, 2), "...")
                                          .concat(e.slice(-5));
                                      })(t),
                                  }),
                                  (0, T.jsx)(S.x, {
                                    style: { fontSize: "10px" },
                                    color: r,
                                    fontWeight: "600",
                                    top: "3px",
                                    position: "relative",
                                    left: "3px",
                                    fontFamily: "heading",
                                    display: "none",
                                    children: "Chai",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, T.jsxs)(P.qy, {
                          minWidth: "120px",
                          background: s,
                          children: [
                            (0, T.jsx)(G.default, {
                              href: "/profile",
                              children: (0, T.jsx)(P.sN, {
                                icon: (0, T.jsx)(A.J, {
                                  as: V.VRY,
                                  width: "20px",
                                }),
                                fontWeight: "600",
                                _hover: { bg: p, color: "white" },
                                _focus: { bg: "none" },
                                children: "Profile",
                              }),
                            }),
                            (0, T.jsx)(P.sN, {
                              icon: (0, T.jsx)(A.J, {
                                as: V.fHX,
                                width: "20px",
                              }),
                              fontWeight: "600",
                              _hover: { bg: p, color: "white" },
                              _focus: { bg: "pink.300", color: "white" },
                              onClick: function () {
                                return i();
                              },
                              children: "Disconnect",
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, T.jsx)(k.z, {
                    onClick: d,
                    leftIcon: (0, T.jsx)(A.J, { as: N.Q84 }),
                    size: "xs",
                    right: ["10px", null, "0px"],
                    p: ["12px", null, "25px"],
                    height: ["40px", null, null],
                    fontSize: ["xmd", null, "sm"],
                    children: "Kitty Connect",
                  }),
              (0, T.jsxs)(z.u_, {
                isOpen: c,
                onClose: b,
                children: [
                  (0, T.jsx)(z.ZA, {}),
                  (0, T.jsxs)(z.hz, {
                    borderRadius: "30px",
                    children: [
                      (0, T.jsx)(z.xB, {
                        bg: s,
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                        fontWeight: "900",
                        children: "Kitty Connect",
                      }),
                      (0, T.jsx)(z.ol, {}),
                      (0, T.jsxs)(z.fe, {
                        bg: s,
                        borderBottomLeftRadius: "30px",
                        borderBottomRightRadius: "30px",
                        children: [
                          (0, T.jsx)(k.z, {
                            justifyContent: "space-between",
                            width: "100%",
                            mb: "4",
                            size: "lg",
                            variant: "outline",
                            rightIcon: (0, T.jsx)(C.E, {
                              maxWidth: "20px",
                              src: "/images/logo-metamask.png",
                              alt: "MetaMask",
                              height: "18px",
                            }),
                            onClick: function () {
                              a();
                            },
                            children: "MetaMask",
                          }),
                          (0, T.jsx)(k.z, {
                            justifyContent: "space-between",
                            width: "100%",
                            mb: "4",
                            size: "lg",
                            variant: "outline",
                            rightIcon: (0, T.jsx)(C.E, {
                              maxWidth: "20px",
                              src: "/images/logo-walletconnect.svg",
                              alt: "WalletConnect",
                            }),
                            onClick: function () {
                              n(W);
                            },
                            children: "WalletConnect",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var H,
        q = (0, L.default)(
          function () {
            return Promise.resolve(Z);
          },
          { ssr: !1 }
        ),
        K = n(77245),
        J = n(98001),
        Y = n(45666),
        X = (0, Y.ZP)(u.xu)(
          H ||
            (H = (0, s.Z)([
              "\n  > div > div:first-of-type > span > div > button {\n    position: relative;\n    > svg {\n      position: relative;\n      z-index: 5;\n    }\n    &:after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: ",
              ";\n      border-radius: 50%;\n      transition: all 0.3s ease-in-out;\n      transform: scale(1.1);\n    }\n  }\n  &:hover > div > div:first-of-type > span > div > button {\n    &:after {\n      opacity: 1;\n    }\n    color: white;\n  }\n",
            ])),
          function (e) {
            return "dark" === e.colormode
              ? "linear-gradient(to right, #F080A3, #D06889)"
              : "linear-gradient(90deg, rgba(255,150,183,1) 0%, rgba(255,171,197,1) 100%)";
          }
        ),
        Q = function (e) {
          var t = e.onShowSidebar,
            n = e.isSidebarOpen,
            a = e.countDown,
            i = e.airdropRunning,
            s = e.catgirlPerUSD,
            r = (0, w.useColorMode)(),
            o = r.colorMode,
            p = r.toggleColorMode,
            l = (0, m.useState)(!1),
            y = l[0],
            d = l[1],
            c = (0, w.useColorModeValue)(
              n ? "white" : "alphaLight.100",
              n ? "dark.100" : "alphaDark.100"
            ),
            b = (0, w.useColorModeValue)("dark.700", "customGray.1000"),
            f = (0, w.useColorModeValue)("white", "dark.700"),
            x = (0, w.useColorModeValue)("customGray.950", "white"),
            h = (0, w.useColorModeValue)("customGray.950", "dark.500"),
            g = (0, w.useColorModeValue)(0.31, 1),
            v = (0, w.useColorModeValue)("dark.100", "light.100"),
            E = (0, w.useColorModeValue)("white", "customGray.650"),
            P = (0, w.useColorModeValue)("gray", "customGray.100"),
            z = (0, w.useColorModeValue)(
              "#b621fe",
              "linear-gradient(to right, #F080A3, #D06889)"
            );
          return (0, T.jsx)(u.xu, {
            width: "100%",
            bg: c,
            children: (0, T.jsx)(M.Kq, {
              minH: "60px",
              width: "100%",
              maxWidth: "1300px",
              px: ["15px", null, "25px"],
              mx: "auto",
              pt: ["10px", null, "13px"],
              pb: ["10px", null, "13px"],
              children: (0, T.jsxs)(M.Kq, {
                flex: { base: 1, md: 0 },
                justify: "space-between",
                direction: "row",
                children: [
                  (0, T.jsxs)(j.k, {
                    justify: { base: "center", md: "start" },
                    alignItems: "center",
                    children: [
                      (0, T.jsx)(G.default, {
                        href: "/#",
                        children: (0, T.jsxs)(j.k, {
                          cursor: "pointer",
                          alignItems: "center",
                          children: [
                            (0, T.jsx)(C.E, {
                              width: "50px",
                              src: "./images/catgirl_logo.png",
                              zIndex: "1",
                              position: "relative",
                            }),
                            (0, T.jsxs)(u.xu, {
                              position: "relative",
                              children: [
                                (0, T.jsx)(S.x, {
                                  style: { fontSize: "7px" },
                                  color: b,
                                  fontWeight: "600",
                                  top: "-8px",
                                  fontFamily: "heading",
                                  position: "absolute",
                                  left: "12px",
                                  letterSpacing: ".7px",
                                  children: "CATGIRL",
                                }),
                                (0, T.jsxs)(M.gC, {
                                  children: [
                                    (0, T.jsx)(k.z, {
                                      as: "a",
                                      fontSize: "15px",
                                      fontWeight: 800,
                                      href: "#",
                                      color: b,
                                      borderRadius: "60px",
                                      letterSpacing: "1px",
                                      pb: "9px",
                                      pt: "3px",
                                      pl: "50px",
                                      pr: "20px",
                                      bg: f,
                                      left: "-38px",
                                      fontFamily: "heading",
                                      pointerEvents: "none",
                                      boxShadow:
                                        "0px 13px 13px -12px #be96ff70, 0px 1px 15px rgb(255 171 197 / 36%);",
                                      flexShrink: 0,
                                      height: "auto",
                                      mt: "4px",
                                      children: "hub",
                                    }),
                                    (0, T.jsx)(k.z, {
                                      color: "white",
                                      letterSpacing: "3px",
                                      fontSize: "xtn",
                                      height: "15px",
                                      paddingLeft: "10px",
                                      paddingRight: "5px",
                                      right: "55px",
                                      position: "absolute",
                                      top: "20px",
                                      pointerEvents: "none",
                                      children: "BETA",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, T.jsx)(u.xu, {
                        display: ["none", "none", "none", "none", "flex"],
                        top: "3px",
                        position: "relative",
                        children: (0, T.jsx)(J.default, {
                          checkedIcon: (0, T.jsx)(A.J, {
                            position: "relative",
                            left: "10px",
                            top: "-3px",
                            as: V.Mei,
                            color: "pink",
                            fontSize: "xmd",
                          }),
                          uncheckedIcon: (0, T.jsx)(A.J, {
                            as: V.TLr,
                            position: "relative",
                            left: "7px",
                            top: "-3px",
                            color: "pink",
                            fontSize: "xmd",
                          }),
                          checked: "dark" === o,
                          onChange: p,
                          onColor: "#1F1F1F",
                          offColor: "#1F1F1F",
                          height: 20,
                          handleDiameter: 16,
                          width: 45,
                        }),
                      }),
                      (0, T.jsx)(u.xu, {
                        m: "0",
                        display: ["none", "none", "none", "none", "flex"],
                        ml: "20px",
                        children:
                          a &&
                          !i &&
                          (0, T.jsxs)(S.x, {
                            whiteSpace: "nowrap",
                            fontSize: "9px",
                            color: "customPink.300",
                            fontWeight: "700",
                            fontFamily: "Poppins",
                            letterSpacing: "1px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            width: "130px",
                            children: [
                              "NEXT GIVEAWAY ",
                              (0, T.jsx)("br", {}),
                              (0, T.jsx)(R.Od, {
                                height: "20px",
                                isLoaded: null != a,
                                width: "100%",
                                startColor: "pink.500",
                                endColor: "customPink.200",
                                children: (0, T.jsxs)(S.x, {
                                  color: "customPink.300",
                                  textAlign: "center",
                                  fontWeight: "900",
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "15px",
                                  children: [
                                    (0, T.jsx)(F.w, { marginRight: "7px" }),
                                    a,
                                  ],
                                }),
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, T.jsxs)(M.Kq, {
                    alignItems: "center",
                    direction: ["column", "row"],
                    spacing: ["0", "0px", "5px", "18px", "30px"],
                    children: [
                      (0, T.jsx)(G.default, {
                        href: "/mystery-box",
                        children: (0, T.jsx)(k.z, {
                          fontSize: "11px",
                          fontWeight: 800,
                          variant: "link",
                          fontFamily: "heading",
                          letterSpacing: "1.5px",
                          cursor: "pointer",
                          color: x,
                          display: ["none", "none", "none", "none", "flex"],
                          children: "MYSTERY BOX",
                        }),
                      }),
                      (0, T.jsx)(G.default, {
                        href: "/airdrop-mystery-box",
                        children: (0, T.jsx)(k.z, {
                          as: "a",
                          fontSize: "11px",
                          fontWeight: 800,
                          variant: "link",
                          fontFamily: "heading",
                          cursor: "pointer",
                          letterSpacing: "1.5px",
                          color: x,
                          display: ["none", "none", "none", "none", "flex"],
                          children: "AIRDROP",
                        }),
                      }),
                      (0, T.jsx)(G.default, {
                        href: "/the-token",
                        children: (0, T.jsx)(k.z, {
                          as: "a",
                          fontSize: "11px",
                          fontWeight: 800,
                          variant: "link",
                          fontFamily: "heading",
                          cursor: "pointer",
                          letterSpacing: "1.5px",
                          color: x,
                          display: ["none", "none", "none", "none", "flex"],
                          children: "THE TOKEN",
                        }),
                      }),
                      (0, T.jsxs)(M.gC, {
                        alignItems: "end",
                        spacing: "1",
                        children: [
                          (0, T.jsx)(k.z, {
                            fontSize: "tn",
                            height: "15px",
                            px: "5px",
                            boxShadow: "none",
                            pointerEvents: "none",
                            fontWeight: "800",
                            bg: "customPink.400",
                            bottom: "10px",
                            display: ["none", "none", "none", "none", "flex"],
                            children: "SOON",
                          }),
                          (0, T.jsx)(k.z, {
                            as: "a",
                            fontSize: "11px",
                            fontWeight: 800,
                            variant: "link",
                            fontFamily: "heading",
                            letterSpacing: "1.5px",
                            color: h,
                            display: ["none", "none", "none", "none", "flex"],
                            pointerEvents: "none",
                            opacity: g,
                            bottom: "10px",
                            children: "MARKETPLACE",
                          }),
                        ],
                      }),
                      (0, T.jsxs)(M.gC, {
                        alignItems: "end",
                        spacing: "1",
                        children: [
                          (0, T.jsx)(k.z, {
                            fontSize: "tn",
                            height: "15px",
                            px: "5px",
                            boxShadow: "none",
                            pointerEvents: "none",
                            fontWeight: "800",
                            bg: "customPink.400",
                            bottom: "10px",
                            display: ["none", "none", "none", "none", "flex"],
                            children: "SOON",
                          }),
                          (0, T.jsx)(k.z, {
                            as: "a",
                            fontSize: "11px",
                            fontWeight: 800,
                            variant: "link",
                            fontFamily: "heading",
                            letterSpacing: "1.5px",
                            color: h,
                            opacity: g,
                            display: ["none", "none", "none", "none", "flex"],
                            pointerEvents: "none",
                            bottom: "10px",
                            children: "FARMING",
                          }),
                        ],
                      }),
                      (0, T.jsx)(R.Od, {
                        isLoaded: !!s,
                        startColor: "pink.500",
                        endColor: "customPink.200",
                        children: (0, T.jsx)(I.u, {
                          hasArrow: !0,
                          label: s && s[0] + " CATGIRL",
                          borderRadius: "20px",
                          px: "10px",
                          fontFamily: "heading",
                          bg: v,
                          fontSize: "xs",
                          isOpen: y,
                          children: (0, T.jsxs)(k.z, {
                            fontSize: "11",
                            fontWeight: 600,
                            href: "#",
                            color: "customGreen.100",
                            borderRadius: "50px",
                            height: "30px",
                            fontFamily: "heading",
                            letterSpacing: ".5px",
                            bg: f,
                            boxShadow: "none",
                            display: ["none", "none", "none", "none", "flex"],
                            _hover: { bg: f },
                            _active: { bg: f },
                            onMouseOver: function () {
                              return d(!0);
                            },
                            onMouseLeave: function () {
                              return d(!1);
                            },
                            onClick: function () {
                              return d(!0);
                            },
                            children: ["$1 = ", s && s[1], " CATGIRL"],
                          }),
                        }),
                      }),
                      (0, T.jsx)(X, {
                        colormode: o,
                        children: (0, T.jsx)(q, {}),
                      }),
                      (0, T.jsx)(O.h, {
                        boxShadow: "lg",
                        borderRadius: "50%",
                        "aria-label": "Profile",
                        icon: n
                          ? (0, T.jsx)(_.T, { fontSize: "16px" })
                          : (0, T.jsx)(A.J, {
                              as: K.HjU,
                              transition: "none",
                              fontSize: "25px",
                            }),
                        _hover: { bg: z, color: "white" },
                        zIndex: "1",
                        bg: E,
                        color: P,
                        _focus: {
                          boxShadow:
                            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19)",
                        },
                        onClick: function () {
                          return t();
                        },
                        display: ["flex", "flex", "flex", "flex", "none"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        $ = n(36212),
        ee = n(1470),
        te = n(90536),
        ne = [
          { href: "https://twitter.com/catgirlcoin", icon: V.fWC },
          { href: "https://t.me/catgirlcoin", icon: V.AGi },
          { href: "https://discord.gg/3V8gZFP5kb", icon: V.j2d },
          { href: "https://www.reddit.com/r/catgirlcoin/", icon: V.hrS },
          { href: "https://www.instagram.com/catgirlcoin/", icon: V.Zf_ },
        ],
        ae = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            a = e.countDown,
            i = e.catgirlPerUSD,
            s = (0, w.useColorMode)(),
            r = s.colorMode,
            o = s.toggleColorMode,
            p = (0, m.useState)(!1),
            l = p[0],
            y = p[1],
            d = (0, w.useColorModeValue)("black", "white"),
            c = (0, w.useColorModeValue)("customGray.950", "white"),
            b = (0, w.useColorModeValue)("customGray.950", "dark.500"),
            f = (0, w.useColorModeValue)(0.31, 1),
            x = (0, w.useColorModeValue)("customGray.300", "customGray.50"),
            h = (0, w.useColorModeValue)("white", "dark.700"),
            g = (0, w.useColorModeValue)("white", "dark.100"),
            v = (0, w.useColorModeValue)("dark.100", "light.100"),
            j = function () {
              return (0, T.jsxs)(M.gC, {
                children: [
                  (0, T.jsx)(k.z, {
                    as: "a",
                    variant: "link",
                    href: "/mystery-box",
                    color: c,
                    padding: "20px 0px 15px",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "heading",
                    letterSpacing: "1.5px",
                    children: "MYSTERY BOX",
                  }),
                  (0, T.jsx)($.i, { borderColor: x }),
                  (0, T.jsx)(k.z, {
                    variant: "link",
                    href: "/airdrop-mystery-box",
                    color: c,
                    padding: "20px 0px 15px",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    as: "a",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "heading",
                    letterSpacing: "1.5px",
                    children: "AIRDROP",
                  }),
                  (0, T.jsx)($.i, { borderColor: x }),
                  (0, T.jsx)(k.z, {
                    variant: "link",
                    href: "/the-token",
                    color: c,
                    padding: "20px 0px 15px",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    as: "a",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "heading",
                    letterSpacing: "1.5px",
                    children: "THE TOKEN",
                  }),
                  (0, T.jsx)($.i, { borderColor: x }),
                  (0, T.jsxs)(M.gC, {
                    alignItems: "end",
                    spacing: "1",
                    padding: "2px 0px 15px",
                    children: [
                      (0, T.jsx)(k.z, {
                        fontSize: "tn",
                        height: "15px",
                        px: "5px",
                        boxShadow: "none",
                        pointerEvents: "none",
                        fontWeight: "800",
                        bg: "customPink.400",
                        children: "SOON",
                      }),
                      (0, T.jsx)(k.z, {
                        as: "a",
                        fontSize: "11px",
                        fontWeight: 800,
                        fontFamily: "heading",
                        variant: "link",
                        letterSpacing: "1.5px",
                        color: b,
                        pointerEvents: "none",
                        opacity: f,
                        children: "MARKETPLACE",
                      }),
                    ],
                  }),
                  (0, T.jsx)($.i, { borderColor: x }),
                  (0, T.jsxs)(M.gC, {
                    alignItems: "end",
                    spacing: "1",
                    padding: "2px 0px 15px",
                    children: [
                      (0, T.jsx)(k.z, {
                        fontSize: "tn",
                        height: "15px",
                        px: "5px",
                        boxShadow: "none",
                        pointerEvents: "none",
                        fontWeight: "800",
                        bg: "customPink.400",
                        children: "SOON",
                      }),
                      (0, T.jsx)(k.z, {
                        as: "a",
                        fontSize: "11px",
                        fontWeight: 800,
                        fontFamily: "heading",
                        variant: "link",
                        letterSpacing: "1.5px",
                        color: b,
                        opacity: f,
                        pointerEvents: "none",
                        children: "FARMING",
                      }),
                    ],
                  }),
                  (0, T.jsx)($.i, { borderColor: x }),
                ],
              });
            };
          return (0, T.jsx)(ee.dy, {
            isOpen: t,
            placement: "right",
            onClose: function () {
              return n();
            },
            children: (0, T.jsx)(z.ZA, {
              marginTop: "73px",
              children: (0, T.jsxs)(ee.sc, {
                bg: g,
                marginTop: "72px",
                boxShadow: "none",
                children: [
                  (0, T.jsx)(z.fe, {
                    padding: "5px 0 0 0",
                    children: (0, T.jsx)(j, {}),
                  }),
                  (0, T.jsx)(z.mz, {
                    padding: "0 0 20px 0",
                    children: (0, T.jsxs)(M.Kq, {
                      alignItems: "flex-end",
                      w: "100%",
                      display: "flex",
                      direction: "column",
                      children: [
                        (0, T.jsx)(u.xu, {
                          padding: "0 20px",
                          children:
                            a &&
                            (0, T.jsxs)(S.x, {
                              whiteSpace: "nowrap",
                              fontSize: "9px",
                              color: "customPink.300",
                              fontWeight: "700",
                              fontFamily: "Poppins",
                              letterSpacing: "1px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-end",
                              children: [
                                "NEXT GIVEAWAY ",
                                (0, T.jsx)("br", {}),
                                (0, T.jsx)(R.Od, {
                                  height: "20px",
                                  isLoaded: null != a,
                                  width: "100%",
                                  startColor: "pink.500",
                                  endColor: "customPink.200",
                                  children: (0, T.jsxs)(S.x, {
                                    color: "customPink.300",
                                    fontSize: "lg",
                                    textAlign: "center",
                                    fontWeight: "900",
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                      (0, T.jsx)(F.w, { marginRight: "10px" }),
                                      a && a,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        }),
                        (0, T.jsx)($.i, { borderColor: x }),
                        (0, T.jsx)(M.Ug, {
                          spacing: "3",
                          padding: "10px 20px",
                          children: ne.map(function (e) {
                            return (0,
                            T.jsx)(te.r, { href: e.href, target: "_blank", _focus: { boxShadow: "none" }, children: (0, T.jsx)(A.J, { as: e.icon, color: "customPink.200", boxSize: "1.5em", _hover: { color: d } }) }, e.href);
                          }),
                        }),
                        (0, T.jsxs)(M.Ug, {
                          spacing: "50px",
                          padding: "0px 20px",
                          children: [
                            (0, T.jsx)(R.Od, {
                              isLoaded: !!i,
                              startColor: "pink.500",
                              endColor: "customPink.200",
                              children: (0, T.jsx)(I.u, {
                                hasArrow: !0,
                                label: i && i[0] + " CATGIRL",
                                borderRadius: "20px",
                                px: "10px",
                                fontFamily: "heading",
                                bg: v,
                                fontSize: "xs",
                                isOpen: l,
                                children: (0, T.jsxs)(k.z, {
                                  fontSize: "11",
                                  fontWeight: 600,
                                  href: "#",
                                  color: "customGreen.100",
                                  borderRadius: "50px",
                                  height: "30px",
                                  fontFamily: "heading",
                                  letterSpacing: ".5px",
                                  bg: h,
                                  boxShadow: "lg",
                                  onMouseOver: function () {
                                    return y(!0);
                                  },
                                  onMouseLeave: function () {
                                    return y(!1);
                                  },
                                  onClick: function () {
                                    return y(!0);
                                  },
                                  _hover: { bg: h, boxShadow: "lg" },
                                  _active: { bg: h, boxShadow: "lg" },
                                  children: ["$1 = ", i && i[0], " CATGIRL"],
                                }),
                              }),
                            }),
                            (0, T.jsx)(u.xu, {
                              top: "1px",
                              position: "relative",
                              children: (0, T.jsx)(J.default, {
                                checkedIcon: (0, T.jsx)(A.J, {
                                  position: "relative",
                                  left: "10px",
                                  top: "-2px",
                                  as: V.Mei,
                                  color: "pink",
                                  fontSize: "xmd",
                                }),
                                uncheckedIcon: (0, T.jsx)(A.J, {
                                  as: V.TLr,
                                  position: "relative",
                                  left: "7px",
                                  top: "-2px",
                                  color: "pink",
                                  fontSize: "xmd",
                                }),
                                checked: "dark" === r,
                                onChange: o,
                                onColor: "#1F1F1F",
                                offColor: "#1F1F1F",
                                height: 22,
                                handleDiameter: 18,
                                width: 48,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ie = n(53003),
        se = n(75135);
      function re(e) {
        return e instanceof se.A5
          ? "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile."
          : e instanceof ie.Uu
          ? "You are currently connected to the unsupported network. Please switch to BSC Mainnet"
          : e instanceof se.ab || e instanceof D.ab
          ? "Please authorize this website to access your Ethereum account."
          : (console.error(e),
            "An unknown error occurred. Check the console for more details.");
      }
      var oe = n(58723),
        pe = n(89219),
        ue = n(65458),
        le = n(85851),
        ye = n(28085),
        de = n(17674);
      function ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var me = function (e) {
        return (0, T.jsx)(
          de.X,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ce(Object(n), !0).forEach(function (t) {
                    (0, b.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : ce(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })(
            {
              as: "h4",
              fontSize: "sm",
              fontWeight: "semibold",
              textTransform: "uppercase",
              letterSpacing: "wider",
            },
            e
          )
        );
      };
      function be(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? be(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : be(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var xe,
        Te = function (e) {
          return (0, T.jsxs)(
            ye.M,
            fe(
              fe({ columns: 2 }, e),
              {},
              {
                children: [
                  (0, T.jsxs)(u.xu, {
                    minW: "130px",
                    children: [
                      (0, T.jsx)(me, { mb: "4", children: "Information" }),
                      (0, T.jsxs)(M.Kq, {
                        children: [
                          (0, T.jsx)(te.r, {
                            href: "https://wiki.catgirlcoin.com/whitepaper/disclaimer",
                            isExternal: !0,
                            children: "Whitepaper",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://solidity.finance/audits/CatGirl/",
                            isExternal: !0,
                            children: "Audit",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://app.unicrypt.network/amm/pancake-v2/pair/0x252C6e5a2b8eCa987b2678618546c388b9b4B933",
                            isExternal: !0,
                            children: "Liquidity Lock",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://catgirlteam.medium.com/",
                            isExternal: !0,
                            children: "Medium",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.jsxs)(u.xu, {
                    minW: "130px",
                    children: [
                      (0, T.jsx)(me, { mb: "4", children: "Links" }),
                      (0, T.jsxs)(M.Kq, {
                        children: [
                          (0, T.jsx)(te.r, {
                            href: "https://coinmarketcap.com/currencies/catgirl/",
                            isExternal: !0,
                            children: "CoinMarketCap",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://www.coingecko.com/en/coins/catgirl",
                            isExternal: !0,
                            children: "CoinGecko",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://www.hub.catgirlcoin.com/#/swap",
                            isExternal: !0,
                            children: "Catgirl Swap",
                          }),
                          (0, T.jsx)(te.r, {
                            href: "https://www.youtube.com/watch?v=8kS3ERYDznw",
                            isExternal: !0,
                            children: "Theme Song",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        he = n(92714),
        ge = function (e) {
          var t = e.isHomePage,
            n = (0, w.useColorModeValue)(
              t ? "white" : "transparent",
              t ? "dark.200" : "transparent"
            ),
            a = (0, w.useColorModeValue)(
              "./images/footer-logo.png",
              "./images/footer-logo--dark.png"
            );
          return (0, T.jsx)(u.xu, {
            as: "footer",
            role: "contentinfo",
            py: "12",
            px: { base: "4", md: "8" },
            bg: n,
            children: (0, T.jsxs)(M.Kq, {
              spacing: "10",
              divider: (0, T.jsx)(M.cX, {}),
              maxW: "7xl",
              mx: "auto",
              children: [
                (0, T.jsxs)(M.Kq, {
                  direction: { base: "column", lg: "row" },
                  spacing: { base: "10", lg: "28" },
                  children: [
                    (0, T.jsx)(u.xu, {
                      flex: "1",
                      children: (0, T.jsx)(C.E, {
                        maxWidth: "134px",
                        w: "100%",
                        filter: "grayscale(1)",
                        opacity: ".7",
                        src: a,
                      }),
                    }),
                    (0, T.jsx)(M.Kq, {
                      direction: { base: "column", md: "row" },
                      spacing: { base: "10", md: "20" },
                      children: (0, T.jsx)(Te, {
                        spacing: { base: "10", md: "20", lg: "28" },
                        flex: "1",
                      }),
                    }),
                  ],
                }),
                (0, T.jsxs)(M.Kq, {
                  direction: { base: "column-reverse", md: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [
                    (0, T.jsxs)(S.x, {
                      textAlign: "center",
                      fontWeight: "900",
                      fontSize: ["xmd", null, "md"],
                      children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Catgirl Coin",
                      ],
                    }),
                    (0, T.jsx)(he.Z, {}),
                  ],
                }),
              ],
            }),
          });
        },
        ve = n(95309),
        we = Y.ZP.header(
          xe ||
            (xe = (0, s.Z)([
              "\n  position: sticky;\n  top: 0;\n  z-index: 10;\n",
            ]))
        ),
        Me = {
          transactionStarted: "Transaction Started",
          transactionSucceed: "Transaction Completed",
        };
      function je(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 38;
        return e && e.replace(e.substring(6, t), "...");
      }
      var Ce = function (e) {
        var t = e.isHomePage,
          n = e.children,
          s = e.customMeta,
          r = (0, y.K)(),
          b = r.error,
          f = r.chainId,
          x = (0, d.z)().notifications,
          h = (0, m.useState)(!1),
          g = h[0],
          w = h[1],
          M = (0, m.useState)(),
          j = M[0],
          C = M[1],
          S = (0, m.useState)(),
          k = S[0],
          A = S[1],
          R = function () {
            w(!g);
          },
          I = (0, c.o)([
            (0, ve.h)(f) &&
              B.kh.currentAirdrop.active && {
                abi: pe.s4,
                method: "getAirDropTime",
                address: ue.Hw,
                args: [B.kh.currentAirdrop.airdropId],
              },
            (0, ve.h)(f) && {
              abi: pe.l1,
              method: "getRealTimeCatgirlPerUSD",
              address: ue.l3,
              args: null,
            },
          ]),
          O = (0, i.Z)(I, 2),
          F = O[0],
          _ = O[1];
        (0, m.useEffect)(
          function () {
            var e = (function () {
              var e = (0, a.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            pe.H1.getAirDropTime(B.kh.currentAirdrop.airdropId)
                          );
                        case 2:
                          (t = e.sent), C(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            F ? C(F[0]) : e();
          },
          [F]
        );
        var E = (0, m.useCallback)(
          (0, a.Z)(
            o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), pe.v2.getRealTimeCatgirlPerUSD();
                    case 2:
                      (t = e.sent), A((0, le.dm)((0, le.ZO)(t)));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          []
        );
        (0, m.useEffect)(
          function () {
            _ ? A((0, le.dm)((0, le.ZO)(_[0]))) : E();
          },
          [E, _]
        );
        var P = (0, oe.Z)({ eventTimeStamp: j }),
          z = P.countDown,
          D = P.airdropRunning;
        return (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(v, { customMeta: s }),
            b &&
              (0, T.jsxs)(p.bZ, {
                status: "error",
                mb: "8",
                zIndex: 10,
                children: [
                  (0, T.jsx)(p.zM, {}),
                  (0, T.jsx)(p.Cd, { mr: 2, children: "Error:" }),
                  (0, T.jsx)(p.X, { children: re(b) }),
                ],
              }),
            (0, T.jsx)(we, {
              children: (0, T.jsx)(Q, {
                countDown: z,
                airdropRunning: D,
                onShowSidebar: R,
                isSidebarOpen: g,
                catgirlPerUSD: k,
              }),
            }),
            (0, T.jsxs)("main", {
              children: [
                (0, T.jsx)(ae, {
                  countDown: z,
                  isOpen: g,
                  onClose: R,
                  catgirlPerUSD: k,
                }),
                n,
                x.map(function (e) {
                  return "walletConnected" === e.type
                    ? null
                    : (0, T.jsxs)(
                        p.bZ,
                        {
                          status: "success",
                          position: "fixed",
                          bottom: "8",
                          right: "8",
                          zIndex: "1700",
                          width: "400px",
                          children: [
                            (0, T.jsx)(p.zM, {}),
                            (0, T.jsxs)(u.xu, {
                              children: [
                                (0, T.jsx)(p.Cd, { children: Me[e.type] }),
                                (0, T.jsxs)(p.X, {
                                  overflow: "hidden",
                                  children: [
                                    "Transaction Hash:",
                                    " ",
                                    je(e.transaction.hash, 61),
                                  ],
                                }),
                                (0, T.jsx)(l.P, {
                                  position: "absolute",
                                  right: "8px",
                                  top: "8px",
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      );
                }),
              ],
            }),
            (0, T.jsx)("footer", {
              children: (0, T.jsx)(ge, { isHomePage: t }),
            }),
          ],
        });
      };
    },
    92714: function (e, t, n) {
      var a = n(46760),
        i = n(94624),
        s = n(90536),
        r = n(45059),
        o = (n(2784), n(18978)),
        p = n(52322),
        u = [
          { href: "https://twitter.com/catgirlcoin", icon: o.fWC },
          { href: "https://t.me/catgirlcoin", icon: o.AGi },
          { href: "https://discord.gg/3V8gZFP5kb", icon: o.j2d },
          { href: "https://www.reddit.com/r/catgirlcoin/", icon: o.hrS },
          { href: "https://www.instagram.com/catgirlcoin/", icon: o.Zf_ },
        ];
      t.Z = function (e) {
        var t = e.smallGap,
          n = (0, a.useColorModeValue)("black", "white");
        return (0, p.jsx)(i.Ug, {
          spacing: ["2", null, t ? "2" : "5"],
          padding: "10px",
          justifyContent: "center",
          children: u.map(function (e) {
            return (0,
            p.jsx)(s.r, { href: e.href, isExternal: !0, _focus: { boxShadow: "none" }, children: (0, p.jsx)(r.J, { as: e.icon, color: "customPink.200", boxSize: "1.5em", _hover: { color: n }, fontSize: "18px", transition: "all .3s ease-out" }) }, e.href);
          }),
        });
      };
    },
    50884: function (e, t, n) {
      n.d(t, {
        TO: function () {
          return a;
        },
        cI: function () {
          return i;
        },
        fV: function () {
          return s;
        },
      });
      var a = 18,
        i = 9,
        s =
          "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    },
    58723: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(2784),
        i = n(19034),
        s = n.n(i),
        r = function (e) {
          return ("0" + e).slice(-2);
        };
      function o(e) {
        var t = e.eventTimeStamp,
          n = (0, a.useRef)(),
          i = (0, a.useRef)(),
          o = (0, a.useState)(),
          p = o[0],
          u = o[1],
          l = (0, a.useState)(!1),
          y = l[0],
          d = l[1];
        return (
          (0, a.useEffect)(
            function () {
              if (t > 0) {
                n.current && clearInterval(n.current);
                var e = +new Date() / 1e3,
                  a = t - e;
                if (a <= 0)
                  return (
                    d(!0),
                    u(void 0),
                    (n.current = null),
                    void (i.current = null)
                  );
                i.current = s().duration(1e3 * a, "milliseconds");
                return (
                  (n.current = setInterval(function () {
                    if (
                      ((i.current = i.current.subtract(1e3, "milliseconds")),
                      i.current.milliseconds() < 0)
                    )
                      return (
                        d(!0),
                        u(void 0),
                        clearInterval(n.current),
                        (n.current = null),
                        void (i.current = null)
                      );
                    u(
                      ""
                        .concat(r(i.current.days()), ":")
                        .concat(r(i.current.hours()), ":")
                        .concat(r(i.current.minutes()), ":")
                        .concat(r(i.current.seconds()))
                    );
                  }, 1e3)),
                  function () {
                    n.current && clearInterval(n.current);
                  }
                );
              }
            },
            [t]
          ),
          { countDown: p, airdropRunning: y }
        );
      }
    },
    89219: function (e, t, n) {
      n.d(t, {
        uz: function () {
          return x;
        },
        H1: function () {
          return M;
        },
        s4: function () {
          return m;
        },
        $c: function () {
          return T;
        },
        kE: function () {
          return C;
        },
        YW: function () {
          return h;
        },
        Qq: function () {
          return w;
        },
        F5: function () {
          return d;
        },
        JI: function () {
          return g;
        },
        cG: function () {
          return S;
        },
        v2: function () {
          return j;
        },
        l1: function () {
          return f;
        },
      });
      var a = n(19237),
        i = JSON.parse(
          '{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FACTORY_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SETTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_numberOfBoxes","type":"uint8"}],"name":"buyCommonBoxWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_numberOfBoxes","type":"uint8"}],"name":"buyCommonBoxWithCatgirl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculateBNBSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateCatgirlSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"catgirlNFT","outputs":[{"internalType":"contract ICatgirlNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"catgirlToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSeason","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developmentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmingAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_catgirlAddress","type":"address"},{"internalType":"contract ICatgirlNFT","name":"_catgirlNFT","type":"address"},{"internalType":"contract IPriceOracle","name":"_priceOracle","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mysteryBoxFiatPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"processDistributionBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"processDistributionCatgirl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingAddress","type":"address"},{"internalType":"address","name":"_developmentAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_catgirlNFTAddress","type":"address"}],"name":"setCatgirlNFTAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_catgirlTokenAddress","type":"address"}],"name":"setCatgirlTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_season","type":"uint32"}],"name":"setCurrentSeason","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_development","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setFundDistributionPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setMysteryBoxPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IPancakeRouter02","name":"_pancake","type":"address"}],"name":"setPancakeRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]}'
        ),
        s = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_lottoDrawCount","type":"uint256"}],"name":"DrawLotto","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_antiWhaleThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_isAntiWhaleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastLottoWinnerAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lottoDrawCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lottoFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_shouldSwapToBNB","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalLottoPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentLottoPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isIncludeFromLotto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lotteryThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minLottoBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"e","type":"bool"}],"name":"setAntiWhaleEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAntiWhaleThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"dev","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"devFee","type":"uint256"}],"name":"setDevFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"e","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"setLotteryThresHold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setLottoEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lottoFee","type":"uint256"}],"name":"setLottoFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minBalance","type":"uint256"}],"name":"setMinLottoBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"p","type":"address"}],"name":"setUniswapPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"r","type":"address"}],"name":"setUniswapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setshouldSwapToBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}'
        ),
        r = JSON.parse(
          '{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"components":[{"internalType":"uint32","name":"characterId","type":"uint32"},{"internalType":"uint32","name":"season","type":"uint32"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint32","name":"nyaScore","type":"uint32"}],"indexed":false,"internalType":"struct CatgirlNFT.Catgirl[]","name":"_tokenIds","type":"tuple[]"}],"name":"BoxOpened","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint32","name":"characterId","type":"uint32"},{"indexed":true,"internalType":"uint32","name":"season","type":"uint32"},{"indexed":true,"internalType":"uint8","name":"rarity","type":"uint8"},{"indexed":false,"internalType":"uint32","name":"nyaScore","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"bornAt","type":"uint256"}],"name":"CatgirlBorn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"characterId","type":"uint32"},{"indexed":true,"internalType":"uint32","name":"season","type":"uint32"},{"indexed":true,"internalType":"uint8","name":"rarity","type":"uint8"},{"indexed":false,"internalType":"uint32","name":"nyaScore","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"bornAt","type":"uint256"}],"name":"CatgirlReborn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SETTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"}],"name":"boxToSettings","outputs":[{"internalType":"uint256","name":"maxPurchase","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"burnMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burnToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint32","name":"nyaScore","type":"uint32"},{"internalType":"uint32","name":"season","type":"uint32"},{"internalType":"uint32","name":"characterId","type":"uint32"}],"name":"externalMint","outputs":[{"components":[{"internalType":"uint32","name":"characterId","type":"uint32"},{"internalType":"uint32","name":"season","type":"uint32"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint32","name":"nyaScore","type":"uint32"}],"internalType":"struct CatgirlNFT.Catgirl","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"boxId","type":"uint64"}],"name":"getBoxSetting","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"uint8[]","name":"","type":"uint8[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getCatgirl","outputs":[{"components":[{"internalType":"uint32","name":"characterId","type":"uint32"},{"internalType":"uint32","name":"season","type":"uint32"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint32","name":"nyaScore","type":"uint32"}],"internalType":"struct CatgirlNFT.Catgirl","name":"catgirl","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"boxId","type":"uint64"},{"internalType":"uint8","name":"tier","type":"uint8"}],"name":"getTierToCharacter","outputs":[{"internalType":"uint32[]","name":"","type":"uint32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint64","name":"_boxId","type":"uint64"},{"internalType":"uint32","name":"_season","type":"uint32"},{"internalType":"uint8","name":"_numberOfBoxes","type":"uint8"},{"internalType":"uint256","name":"_rand","type":"uint256"}],"name":"openBoxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint32","name":"_nyaScore","type":"uint32"},{"internalType":"uint8","name":"_rarity","type":"uint8"},{"internalType":"uint32","name":"_season","type":"uint32"},{"internalType":"uint32","name":"_characterId","type":"uint32"}],"name":"rebornCatgirl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMax","type":"uint256"}],"name":"setBasicPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_newMax","type":"uint32"}],"name":"setMaxNyaScore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_boxId","type":"uint64"},{"internalType":"uint256","name":"_maxQuantity","type":"uint256"},{"internalType":"uint32[]","name":"_probabilities","type":"uint32[]"},{"internalType":"uint8[]","name":"_rarityDropOrder","type":"uint8[]"},{"internalType":"uint32[][]","name":"_tierToCharacters","type":"uint32[][]"}],"name":"setOptionSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_canReborn","type":"uint256"}],"name":"setReborn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]}'
        ),
        o = JSON.parse(
          '{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"airdropId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"boxId","type":"uint64"},{"indexed":false,"internalType":"uint8","name":"numberOfBoxes","type":"uint8"},{"indexed":false,"internalType":"uint32","name":"season","type":"uint32"}],"name":"ClaimAirdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SETTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"checkClaimRecord","outputs":[{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"address","name":"wallet","type":"address"}],"name":"checkWhitelist","outputs":[{"internalType":"bool","name":"isWhitelisted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"airdropId","type":"uint256"}],"name":"claimAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"airdropId","type":"uint256"}],"name":"getAirDropTime","outputs":[{"internalType":"uint32","name":"start","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"}],"name":"getAirdropInfo","outputs":[{"internalType":"uint64","name":"boxId","type":"uint64"},{"internalType":"uint256","name":"maxParticipant","type":"uint256"},{"internalType":"uint256","name":"numberOfBoxes","type":"uint256"},{"internalType":"uint32","name":"season","type":"uint32"},{"internalType":"uint256","name":"currentParticipant","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint32","name":"start","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_catgirlAddress","type":"address"},{"internalType":"contract ICatgirlNFT","name":"_nft","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"manualWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"uint64","name":"_boxId","type":"uint64"},{"internalType":"uint256","name":"_maxParticipant","type":"uint256"},{"internalType":"uint8","name":"_numberOfBoxes","type":"uint8"},{"internalType":"uint32","name":"_season","type":"uint32"}],"name":"setAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"bool","name":"_active","type":"bool"}],"name":"setAirdropActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_airdropId","type":"uint256"},{"internalType":"uint32","name":"_start","type":"uint32"}],"name":"setAirdropDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nft","type":"address"}],"name":"setNftContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"airdropId","type":"uint256"},{"internalType":"address[]","name":"whitelistedAddress","type":"address[]"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        p = JSON.parse(
          '{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE_UPDATER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chainlink_bnb_usd_decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBNBPerUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCatgirlPerUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRealTimeCatgirlPerUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"processPriceUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_priceFeed","type":"address"}],"name":"setPriceFeedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"usdPerBnb","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]}'
        ),
        u = n(29503),
        l = n(65458),
        y = n(17807),
        d = new a.vU(i.Mt),
        c = new a.vU(s.Mt),
        m = new a.vU(o.Mt),
        b = new a.vU(r.Mt),
        f = new a.vU(p.Mt),
        x = new u.CH(l.Hw, m),
        T = new u.CH(l.yu, c),
        h = new u.CH(l.Hz, d),
        g = new u.CH(l.ky, b),
        v = new u.CH(l.l3, f),
        w = h.connect((0, y.y)()),
        M = x.connect((0, y.y)()),
        j = v.connect((0, y.y)()),
        C = T.connect((0, y.y)()),
        S = g.connect((0, y.y)());
    },
    17807: function (e, t, n) {
      n.d(t, {
        y: function () {
          return s;
        },
      });
      var a = n(8897),
        i = n(71898),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "56";
          return new a.r(i.vl[e]);
        };
    },
    95309: function (e, t, n) {
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var a = function (e) {
        return "56" === (null === e || void 0 === e ? void 0 : e.toString());
      };
    },
    85851: function (e, t, n) {
      n.d(t, {
        xG: function () {
          return i;
        },
        vU: function () {
          return s;
        },
        ZO: function () {
          return r;
        },
        iB: function () {
          return o;
        },
        dm: function () {
          return p;
        },
      });
      var a = n(50884),
        i = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 10,
        }).format,
        s = function (e) {
          return e.div(1e10).toNumber() / Math.pow(10, a.TO - 10);
        },
        r = function (e) {
          return e.div(Math.pow(10, a.cI)).toNumber();
        },
        o = function (e) {
          return e.div(Math.pow(10, a.cI)).toString();
        },
        p = function (e) {
          var t, n;
          "string" === typeof e && (e = Number.parseFloat(e));
          var a = Math.floor((e / 10).toFixed(0).toString().length),
            i = a % 3,
            s = Math.abs(Number(e)) / Number("1.0e+" + (a - i)).toFixed(2);
          return [
            s.toFixed(2) +
              " " +
              (null !==
                (t = [
                  "Million",
                  "Billion",
                  "Trillion",
                  "Quadrillion",
                  "Quintillion",
                  "Sextillion",
                ][Math.floor(a / 3) - 2]) && void 0 !== t
                ? t
                : ""),
            s.toFixed(2) +
              (null !==
                (n = ["M", "B", "t", "q", "Q.", "s"][Math.floor(a / 3) - 2]) &&
              void 0 !== n
                ? n
                : ""),
          ];
        };
    },
  },
]);
