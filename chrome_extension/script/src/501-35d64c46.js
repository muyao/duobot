"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[501], {
	74499: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			"panel-loading": "MAs-6",
			spacer: "_1c5Wu",
			subtitle: "_1Zr5T",
			header: "_2V2Er",
			leaderboard: "TtJ-q",
			row: "_3kvGS",
			hoverable: "_5W_8K",
			highlight: "MytTp",
			"active-dot": "_2NNBf",
			promoted: "_27HUw",
			score: "_1OKd4",
			demoted: "_1XTsS",
			diamond: "_7trGg",
			"promoted-tournament": "zGzKm",
			rank: "_1kz8P",
			"avatar-container": "_2vxUc",
			avatar: "BfIim",
			"avatar-rive": "_203Xm",
			"name-container": "_3SKx_",
			name: "HnNEH",
			"streak-container": "_2j5EC",
			streak: "_1kc_q",
			flame: "_3t5VG",
			ribbon: "_33f2x",
			separator: "TwkiE _2Rt1l",
			arrow: "_30-7A",
			"promotion-separator": "_2QU4n TwkiE _2Rt1l",
			"demotion-separator": "iIdBN TwkiE _2Rt1l",
			"promotion-separator-tournament": "_1VCMD TwkiE _2Rt1l",
			"demotion-separator-tournament": "_3zpvI TwkiE _2Rt1l",
			"timer-loading": "_3q3hC",
			"timer-wrapper": "_3S3VJ",
			"main-container": "_2A6iC",
			"league-header-combined": "_15B39",
			carousel: "_38ZPp",
			"badge-scroll-container": "_3Utw2",
			"carousel-badge": "MJoIS",
			"carousel-badge-img": "_3Vwn6",
			"carousel-badge-active": "_3UJ8x",
			"dotted-avatar-demotion": "_2a8lY",
			"dotted-avatar-promotion": "_3cNHh",
			"dotted-avatar-diamond": "_2PdxS",
			"reaction-bubble-demotion": "dcusB",
			"reaction-bubble-promotion": "jOTIv",
			"reaction-bubble-diamond": "ON7Zs",
			"start-lesson-button": "_3FuEB"
		}
	}
	,
	34944: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			"arrow-white": "XBMXy",
			"arrow-white-dark": "_1rzr8 XBMXy",
			check: "_3DbUj",
			blue: "_5eJl _3DbUj",
			"start-lesson": "-Kt4A _3DbUj",
			white: "_10PuI _3DbUj _3QmOI",
			"white-dynamic": "_1PUMP _3DbUj _26eXa",
			turquoise: "_1Z-Yf _3DbUj _1zxRb",
			"check-green": "_38g3s _2oGJR",
			"check-red": "_2VWgj _3S8jJ",
			"check-yellow": "_1EqMR _1lyVV",
			delayed: "_1_U6s _2CoFd",
			"gems-cost-text": "_2Bkn7",
			"next-wrap": "_3DHVY",
			"legendary-gold-cta": "_1Fr0H _3DbUj _1nf5N",
			"super-cta": "WTieM _3DbUj _3b8r8",
			"super-cta-wide": "_775wB WTieM _3DbUj _3b8r8"
		}
	}
	,
	73121: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			"chest-container": "_2CLet"
		}
	}
	,
	86441: (e, t, a) => {
		a.d(t, {
			Z: () => l
		});
		var n = a(27378)
			, r = a(14935)
			, s = a(42659)
			, i = a(35160)
			, o = a(18804);
		const l = ({ ctaContent: e, description: t, dismissContent: a, enabled: l, image: c, onBeforeOpen: d, onBlocked: u, onCancel: m, onConfirm: p, title: g }) => {
			const v = (0,
				o.tX)()
				, h = (0,
					o.Fx)(s.$4)
				, f = (0,
					r._Z)(l)
				, _ = n.useRef(l);
			return n.useEffect((() => {
				_.current = l
			}
			), [l]),
				n.useEffect((() => {
					const e = e => {
						!1 === _.current || "function" == typeof _.current && !_.current() || (e.preventDefault(),
							e.returnValue = !0)
					}
						;
					return window.addEventListener("beforeunload", e),
						() => window.removeEventListener("beforeunload", e)
				}
				), []),
				n.useEffect((() => {
					if ("blocked" !== f.state)
						return;
					null == u || u();
					let n = !1;
					return (async () => {
						if (await (null == d ? void 0 : d()),
							n)
							return;
						const r = {
							ctaContent: e,
							description: t,
							dismissContent: a,
							image: c,
							name: i.t.Confirm,
							onClose: () => {
								null == m || m(),
									f.reset()
							}
							,
							onConfirm: () => {
								!1 === (null == p ? void 0 : p()) ? f.reset() : f.proceed()
							}
							,
							title: g
						};
						v(h ? {
							options: r,
							type: "TOGGLE_MODAL"
						} : {
							options: r,
							type: "TOGGLE_DRAWER"
						})
					}
					)(),
						() => {
							n = !0
						}
				}
				), [f.state]),
				null
		}
	}
	,
	56328: (e, t, a) => {
		a.d(t, {
			Z: () => o
		});
		var n = a(27378)
			, r = a(795)
			, s = a(76578);
		const i = (e, t) => {
			switch (t.type) {
				case "ACTIVATE":
					e = (0,
						r.t8)(e, "isActive", !0),
						e = (0,
							r.t8)(e, "offset", t.offset),
						e = (0,
							r.t8)(e, "pointer", t.pointer);
					break;
				case "DRAG":
					e.isActive && (e.isDragging || e.pointer && (0,
						s.TE)(e.pointer, t.pointer) >= 4) && (e = (0,
							r.t8)(e, "isDragging", !0),
							e = (0,
								r.t8)(e, "pointer", t.pointer));
					break;
				case "FORCE_DRAG":
					e = (0,
						r.t8)(e, "isActive", !0),
						e = (0,
							r.t8)(e, "isDragging", !0),
						e = (0,
							r.t8)(e, "offset", t.offset),
						e = (0,
							r.t8)(e, "pointer", t.pointer);
					break;
				case "RELEASE":
					e = (0,
						r.t8)(e, "releasedAt", e.offset && e.pointer ? (0,
							s.KH)(e.pointer, e.offset) : void 0),
						e = (0,
							r.t8)(e, "isActive", !1),
						e = (0,
							r.t8)(e, "isDragging", !1),
						e = (0,
							r.t8)(e, "offset", void 0),
						e = (0,
							r.t8)(e, "pointer", void 0)
			}
			return e
		}
			, o = (e, { forceDragFrom: t, onDrag: a, onDragEnd: r, onDragStart: o }) => {
				const [l, c] = n.useReducer(i, {
					isActive: !1,
					isDragging: !1
				})
					, [d, u] = n.useState()
					, m = n.useRef();
				m.current = () => null == r ? void 0 : r({
					target: l.releasedAt
				});
				const p = n.useCallback((t => {
					if (!e)
						return;
					const a = {
						x: t.clientX,
						y: t.clientY
					}
						, n = t.currentTarget.getBoundingClientRect()
						, r = {
							x: n.x - a.x,
							y: n.y - a.y
						};
					c({
						offset: r,
						pointer: a,
						type: "ACTIVATE"
					})
				}
				), [e]);
				return d !== t && (u(t),
					t && c({
						offset: t.offset,
						pointer: t.pointer,
						type: "FORCE_DRAG"
					})),
					n.useEffect((() => {
						const e = () => c({
							type: "RELEASE"
						});
						return document.addEventListener("pointerup", e),
							() => document.removeEventListener("pointerup", e)
					}
					), []),
					n.useEffect((() => {
						if (!l.isActive)
							return;
						const e = e => c({
							pointer: {
								x: e.clientX,
								y: e.clientY
							},
							type: "DRAG"
						});
						return document.addEventListener("pointermove", e),
							() => document.removeEventListener("pointermove", e)
					}
					), [l.isActive]),
					n.useEffect((() => {
						if (l.isDragging) {
							if (!l.offset || !l.pointer)
								throw Error("Drag offset and pointer must be set when dragging");
							return null == o || o({
								offset: l.offset,
								pointer: l.pointer,
								target: (0,
									s.KH)(l.pointer, l.offset)
							}),
								() => {
									var e;
									null === (e = m.current) || void 0 === e || e.call(m)
								}
						}
					}
					), [l.isDragging]),
					n.useEffect((() => {
						if (l.isDragging) {
							if (!l.offset || !l.pointer)
								throw Error("Drag offset and pointer must be set when dragging");
							null == a || a({
								offset: l.offset,
								pointer: l.pointer,
								target: (0,
									s.KH)(l.pointer, l.offset)
							})
						}
					}
					), [l.isDragging, l.offset, l.pointer]),
				{
					cloneStyle: n.useMemo((() => {
						if (!l.isDragging || !l.pointer || !l.offset)
							return;
						const e = (0,
							s.KH)(l.pointer, l.offset);
						return {
							cursor: "grabbing",
							left: e.x,
							position: "fixed",
							top: e.y
						}
					}
					), [l.isDragging, l.offset, l.pointer]),
					handlePointerDown: p,
					isDragging: l.isDragging,
					releasedAt: l.releasedAt
				}
			}
	}
	,
	18239: (e, t, a) => {
		a.d(t, {
			Z: () => m
		});
		var n = a(27378)
			, r = a(42659)
			, s = a(74462)
			, i = a(27429)
			, o = a(86233)
			, l = a(1)
			, c = a(35160)
			, d = a(18804)
			, u = a(20028);
		const m = () => {
			const e = (0,
				d.tX)()
				, t = (0,
					d.Fx)(s.LG)
				, a = (0,
					d.Fx)(i.ix)
				, m = (0,
					d.Fx)(o.Zy)
				, p = (0,
					d.Fx)(r.np)
				, g = (0,
					u.pN)(p)
				, v = (0,
					d.Fx)(r.mk)
				, h = (0,
					d.Fx)((e => {
						var t;
						return null === (t = e.ui.modal) || void 0 === t ? void 0 : t.name
					}
					))
				, [f, _] = n.useState(!1)
				, k = !f && t && (a || m)
				, b = n.useRef(p.hasPlus)
				, E = !b.current && p.hasPlus
				, y = (0,
					l.PH)(p);
			return n.useEffect((() => {
				k ? v || e({
					options: {
						freeRefill: y,
						healthContext: a ? "session_mid" : "stories_session_mid",
						isTrialUser: g,
						name: c.t.EmptyHearts,
						spotlightType: "heartsInSession"
					},
					type: "TOGGLE_MODAL"
				}) : h === c.t.EmptyHearts && e({
					options: void 0,
					type: "TOGGLE_MODAL"
				})
			}
			), [k, v, h, y, a]),
				n.useEffect((() => {
					!v && E && (e({
						options: {
							name: c.t.PremiumUnlimitedHearts,
							spotlightType: "heartsInSession"
						},
						type: "TOGGLE_MODAL"
					}),
						b.current = !0)
				}
				), [E, v]),
			{
				setDisableBlocking: _,
				shouldBlockScreen: k
			}
		}
	}
	,
	62898: (e, t, a) => {
		a.d(t, {
			Z: () => l
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(57611);
		const o = {
			"bounced-in": "_31ixh",
			"bounced-out": "_11Zz_",
			"bouncing-in": "_272Bb",
			"_bounce-in": "_3qS6D",
			"bouncing-out": "_2sWsl",
			"_bounce-out": "_2nKn4"
		}
			, l = ({ animateOnMount: e, children: t, className: a, isVisible: n }) => {
				const [l, c] = s.useState(e && n ? "bouncing-in" : n ? "bounced-in" : "bounced-out");
				return (0,
					i.Z)((() => {
						c(n ? "bouncing-in" : "bouncing-out")
					}
					), [n]),
					s.createElement("div", {
						className: r()(o[l], a),
						onAnimationEnd: () => {
							"bouncing-in" === l && c("bounced-in"),
								"bouncing-out" === l && c("bounced-out")
						}
					}, t)
			}
	}
	,
	49397: (e, t, a) => {
		a.d(t, {
			AK: () => f,
			wl: () => h
		});
		var n = a(27378);
		const r = a.p + "images/digits/dcb43b3da06697b8db2da246a7bec484.svg"
			, s = a.p + "images/digits/300f13ac208e788c81602e8f0150b31d.svg"
			, i = a.p + "images/digits/1291cb7d8938ec5aef84047299e5e828.svg"
			, o = a.p + "images/digits/1256d2a587e95dc19f72bbcc116f39b3.svg"
			, l = a.p + "images/digits/707748c64059986dfe6c61da063cb73e.svg"
			, c = a.p + "images/digits/2e0e2b3618a3f36d7286f0a03e16b6a8.svg"
			, d = a.p + "images/digits/c65f853a449923896f6a3ce392892812.svg"
			, u = a.p + "images/digits/f8158bdec3ce987048412a8173a652b2.svg"
			, m = a.p + "images/digits/212c5261971a2b8c3d4418ff135d5d0b.svg"
			, p = a.p + "images/digits/66d7912428839667ca7ce1c23f8ac129.svg";
		var g = a(58576);
		const v = [r, s, i, o, l, c, d, u, m, p]
			, h = e => {
				const t = [];
				if (e < 0 || !Number.isInteger(e))
					return (0,
						g.Kp)("Negative or fractional value is passed to numberToDigits", {
							data: e.toString(),
							once: !0
						}),
						[];
				for (; e >= 10;) {
					const a = e % 10;
					t.push(a),
						e = (e - a) / 10
				}
				return t.push(e),
					t.reverse()
			}
			, f = ({ number: e, digitClassName: t }) => {
				const a = h(e);
				return n.createElement(n.Fragment, null, a.map(((e, a) => n.createElement("img", {
					className: t,
					key: a,
					src: v[e]
				}))))
			}
	}
	,
	2278: (e, t, a) => {
		a.d(t, {
			Z: () => Ee
		});
		var n = a(27378)
			, r = a(64502)
			, s = a(49397)
			, i = a(77665);
		const o = a.p + "images/digits/streak-slide/dark-active/88f9bd786b6f4bf8cc2f49a9adb996f8.svg"
			, l = a.p + "images/digits/streak-slide/dark-active/3b8da555fcfc9a2151c578aa5f19275e.svg"
			, c = a.p + "images/digits/streak-slide/dark-active/46cbea3b9f3fc10b45e25615ad50db73.svg"
			, d = a.p + "images/digits/streak-slide/dark-active/308615bf2a236ae496323973a2334846.svg"
			, u = a.p + "images/digits/streak-slide/dark-active/b008b769a8312a398d746b0c8e585b19.svg"
			, m = a.p + "images/digits/streak-slide/dark-active/5cef0eb5f5aa18f73741e25d16ec6a4b.svg"
			, p = a.p + "images/digits/streak-slide/dark-active/69a843d3b31c730f4872cfddc3fbf3f9.svg"
			, g = a.p + "images/digits/streak-slide/dark-active/8035965d2e784d3b24b5156984ebb2d6.svg"
			, v = a.p + "images/digits/streak-slide/dark-active/33df4c7e1a03a12fb2b0f18b2f584a88.svg"
			, h = a.p + "images/digits/streak-slide/dark-active/45e3435e514f36aa4c5ce3431801d129.svg"
			, f = a.p + "images/digits/streak-slide/dark-fox/0ceeefdc9703d23578ba7dac3596e7ee.svg"
			, _ = a.p + "images/digits/streak-slide/dark-fox/c4f3fdf77d0ed98b954a97b3eef448e6.svg"
			, k = a.p + "images/digits/streak-slide/dark-fox/3751036e2389e16da9f631fccd6120b1.svg"
			, b = a.p + "images/digits/streak-slide/dark-fox/46971dea8cd9ee7303caa75e48a6777f.svg"
			, E = a.p + "images/digits/streak-slide/dark-fox/844103a5931400d4b5fa142917b5cb46.svg"
			, y = a.p + "images/digits/streak-slide/dark-fox/12f088ec613a39c55a21c136c2ad1f38.svg"
			, S = a.p + "images/digits/streak-slide/dark-fox/f2a704256e4fabb362534dcfd9000cf2.svg"
			, C = a.p + "images/digits/streak-slide/dark-fox/740a2e22988678e77e53a3d04b6cd3e8.svg"
			, w = a.p + "images/digits/streak-slide/dark-fox/cd6bff124e52a15655105e1c66ce1109.svg"
			, x = a.p + "images/digits/streak-slide/dark-fox/053ebab90ebebd8611f0ac5343d0a414.svg"
			, R = a.p + "images/digits/streak-slide/dark-inactive/5a81eb92369a12feda68a743b19d4c74.svg"
			, T = a.p + "images/digits/streak-slide/dark-inactive/e7d8e9ba9f5ebf05911fdd82f0c24eb8.svg"
			, N = a.p + "images/digits/streak-slide/dark-inactive/62229e42b5a212c8ee89cb380cb40332.svg"
			, F = a.p + "images/digits/streak-slide/dark-inactive/3c0d1bbebe37323e83b394b10a388d04.svg"
			, I = a.p + "images/digits/streak-slide/dark-inactive/e0ece806e6a9a97bb96ce30bbd73035c.svg"
			, D = a.p + "images/digits/streak-slide/dark-inactive/de824b897287969bd767e6822b7b64f9.svg"
			, P = a.p + "images/digits/streak-slide/dark-inactive/611c76a3f301b729c754b712cdf0c6bd.svg"
			, L = a.p + "images/digits/streak-slide/dark-inactive/be3e162078aecb16ff34183d8e22fbf6.svg"
			, A = a.p + "images/digits/streak-slide/dark-inactive/694fac452cd61f3360dedeaf59aeb1e3.svg"
			, O = a.p + "images/digits/streak-slide/dark-inactive/3c1f3c3fcc62260671e39319a98b2048.svg"
			, M = a.p + "images/digits/streak-slide/light-active/06c91dcd7170ef188294f98fb9de8fc1.svg"
			, Z = a.p + "images/digits/streak-slide/light-active/d731fc3412864dc91d0211b0e9343f62.svg"
			, z = a.p + "images/digits/streak-slide/light-active/a0976bcf382e73f57199b080de253257.svg"
			, U = a.p + "images/digits/streak-slide/light-active/45cd1e7ff3f29fdbe95dd07ea9307df9.svg"
			, G = a.p + "images/digits/streak-slide/light-active/963ee260b1580ebd51d94ac709d629d8.svg"
			, B = a.p + "images/digits/streak-slide/light-active/2c0500eca3e37a8231d9e212f72f2be3.svg"
			, H = a.p + "images/digits/streak-slide/light-active/096a2e0015c09ea2bbb0f46ebd4cb635.svg"
			, W = a.p + "images/digits/streak-slide/light-active/827731c9f66c92e9b4e94478192da279.svg"
			, X = a.p + "images/digits/streak-slide/light-active/fd487a8a28f229eab98ec6cf413d7550.svg"
			, V = a.p + "images/digits/streak-slide/light-active/f0bc47957ea4cfdc7d300be2aac7e9f1.svg"
			, Q = a.p + "images/digits/streak-slide/light-fox/ca77d3247c679b998edaa8e5779c606a.svg"
			, Y = a.p + "images/digits/streak-slide/light-fox/f55749559b1380c6e20393e55d9da165.svg"
			, q = a.p + "images/digits/streak-slide/light-fox/9c95746eacb2487f3b36c9769c786c39.svg"
			, K = a.p + "images/digits/streak-slide/light-fox/4756bb32bea49a9e5e9555dca430997d.svg"
			, j = a.p + "images/digits/streak-slide/light-fox/fd793517fc269bae9ee241610e6f3762.svg"
			, $ = a.p + "images/digits/streak-slide/light-fox/5a211e3fd9117a6ee4012daf9f243534.svg"
			, J = a.p + "images/digits/streak-slide/light-fox/dc380b32be748845404d27518bbbe0e3.svg"
			, ee = a.p + "images/digits/streak-slide/light-fox/2229f48013603fe67ca4024fb2dc795d.svg"
			, te = a.p + "images/digits/streak-slide/light-fox/b6f8e6940569227ec24e0888aeb04118.svg"
			, ae = a.p + "images/digits/streak-slide/light-fox/a7b786a483dd75c3c688c482343d3974.svg"
			, ne = a.p + "images/digits/streak-slide/light-inactive/0b9f5b8cb15908c175b1b63865323efb.svg"
			, re = a.p + "images/digits/streak-slide/light-inactive/0a29de18f2d5f10722e9831ec4432b3b.svg"
			, se = a.p + "images/digits/streak-slide/light-inactive/8aad143d0a386dc5c296a866e69abd9a.svg"
			, ie = a.p + "images/digits/streak-slide/light-inactive/20fdf502c016f95615938846c841d883.svg"
			, oe = a.p + "images/digits/streak-slide/light-inactive/4578ea12789aecd162bfb04575527467.svg"
			, le = a.p + "images/digits/streak-slide/light-inactive/2abb13054d81316f70fb76cabfd2b16e.svg"
			, ce = a.p + "images/digits/streak-slide/light-inactive/617fc5ed67bca9208a91af0dfb199d2b.svg"
			, de = a.p + "images/digits/streak-slide/light-inactive/632400c729c690f689c02db92fdfb6ac.svg"
			, ue = a.p + "images/digits/streak-slide/light-inactive/d808785dfb5005c75ee0e2517c3e7819.svg"
			, me = a.p + "images/digits/streak-slide/light-inactive/aa10696c7c91bb4f660dacd3f038af16.svg"
			, pe = "_2vrZo"
			, ge = "_3qgZr _2vrZo"
			, ve = [M, Z, z, U, G, B, H, W, X, V]
			, he = [o, l, c, d, u, m, p, g, v, h]
			, fe = [Q, Y, q, K, j, $, J, ee, te, ae]
			, _e = [f, _, k, b, E, y, S, C, w, x]
			, ke = [ne, re, se, ie, oe, le, ce, de, ue, me]
			, be = [R, T, N, F, I, D, P, L, A, O]
			, Ee = ({ alignment: e = "center", animationDuration: t, animationDelay: a, digitHeight: o, isStartingNumberInactive: l = !0, isEndingNumberInactive: c = !1, number: d, startingNumber: u, variant: m = "default" }) => {
				const p = "dark" === (0,
					r.Fg)();
				d = void 0 === u ? Math.max(d, 1) : d;
				const g = (0,
					s.wl)(null != u ? u : d - 1)
					, v = (0,
						s.wl)(d)
					, h = v.length === g.length;
				h || g.unshift(0),
					(0,
						i.Z)(p ? he : ve),
					(0,
						i.Z)(p ? be : ke);
				const f = (e, t) => t ? "fox" === m ? p ? _e[e] : fe[e] : p ? he[e] : ve[e] : p ? be[e] : ke[e];
				return n.createElement("div", {
					className: "_3ppeJ",
					style: {
						"--streak-digit-animation-duration": `${t}s`,
						"--streak-digit-digit-height": o,
						direction: "ltr"
					}
				}, v.map(((t, r) => {
					const s = f(t, !c)
						, i = f(t, !l);
					return t === g[r] ? n.createElement("div", {
						className: "LtunY",
						key: r,
						style: {
							"--streak-digit-animation-delay": a - .03 * r + "s"
						}
					}, n.createElement("div", {
						className: "_3s3hK",
						style: {
							backgroundImage: `url(${i})`
						}
					}), n.createElement("div", {
						className: "_2BFO7 _3s3hK _3udxi",
						style: {
							backgroundImage: `url(${s})`
						}
					})) : n.createElement("div", {
						className: "_1LY7K _3udxi",
						key: r,
						style: {
							"--streak-digit-animation-delay": a - .03 * r + "s"
						}
					}, h || 0 !== r || 0 !== g[r] ? n.createElement("div", {
						className: h ? pe : "_3YFVz _2vrZo",
						style: {
							backgroundImage: `url(${f(g[r], !l)})`
						}
					}) : n.createElement("div", {
						className: "center" === e ? ge : pe
					}), h || 0 !== r || 0 !== g[r] ? n.createElement("div", {
						className: h ? "_2m3rL _2vrZo _3udxi" : "YjAaA _2m3rL _2vrZo _3udxi",
						style: {
							backgroundImage: `url(${f(g[r], !l)})`
						}
					}) : n.createElement("div", {
						className: "center" === e ? ge : pe
					}), n.createElement("div", {
						className: "_28yAk _2vrZo",
						style: {
							backgroundImage: `url(${c ? s : i})`
						}
					}), n.createElement("div", {
						className: "_2DFhj _2m3rL _2vrZo _3udxi",
						style: {
							backgroundImage: `url(${s})`
						}
					}))
				}
				)))
			}
	}
	,
	97138: (e, t, a) => {
		a.d(t, {
			Z: () => o
		});
		var n = a(27378)
			, r = a(73520)
			, s = a(50498)
			, i = a(18804);
		const o = (e, { progressUpdateDelayMs: t } = {}) => {
			const a = (0,
				i.Fx)(r.TE)
				, o = (0,
					i.Fx)(r.EL)
				, l = (0,
					i.tX)();
			n.useEffect((() => {
				(async () => {
					e > 0 && void 0 !== a && (t && await (0,
						s._v)(t),
						l({
							payload: {
								...o,
								[a.themeId]: e
							},
							type: "SET_GOALS_PROGRESS"
						}),
						l({
							payload: {
								updates: 0
							},
							type: "SET_MONTHLY_CHALLENGE_PROGRESS_UPDATE"
						}))
				}
				)()
			}
			), [])
		}
	}
	,
	84905: (e, t, a) => {
		a.d(t, {
			Z: () => l
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378);
		const i = {
			container: "_1JF-c",
			"lang-hi": "f_6H0",
			"lang-ar": "_14Th3 _1XlmZ",
			text: "_1mztY"
		};
		var o = a(67116);
		const l = s.forwardRef((({ children: e, className: t, fontSize: a, learningLanguage: n, scale: l }, c) => {
			const d = s.useRef(null)
				, u = s.useRef(null);
			return s.useImperativeHandle(c, (() => ({
				measure: () => {
					var e;
					const t = u.current ? (e => {
						const t = document.createRange();
						return t.selectNodeContents(e),
							t.getBoundingClientRect()
					}
					)(u.current) : void 0
						, a = null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					if (t && a && l) {
						const e = a.width / t.width
							, n = a.height / t.height;
						return l * Math.min(e, n)
					}
				}
			})), [l]),
				s.createElement(s.Fragment, null, s.createElement("span", {
					className: r()(i.container, t),
					ref: d
				}, s.createElement("span", {
					className: r()(i.text, i[`lang-${n}`]),
					dir: (0,
						o.Ux)(n),
					lang: n,
					ref: u,
					style: {
						fontSize: a,
						transform: void 0 === l ? void 0 : `scale(${l})`,
						...void 0 === a ? {} : {
							position: "absolute"
						}
					}
				}, e)))
		}
		))
	}
	,
	40164: (e, t, a) => {
		a.d(t, {
			Z: () => g
		});
		var n = a(27378)
			, r = a(78992)
			, s = a(72003)
			, i = a(15746)
			, o = a(85336);
		var l = a(75073)
			, c = a(50498)
			, d = a(30033)
			, u = a(67173)
			, m = a(66238)
			, p = a(95940);
		const g = ({ availableQuests: e, difficulty: t, numQuestsCompleted: a = 0, oldProgress: g }) => {
			const [v, h] = n.useState(-1)
				, [f, _] = n.useState(null != g ? g : {})
				, k = (0,
					i.Z)();
			(0,
				o.Z)(_);
			const b = e.map((e => {
				var a, n;
				const r = null !== (a = null == g ? void 0 : g[e.goalId]) && void 0 !== a ? a : 0;
				return (null !== (n = f[e.goalId]) && void 0 !== n ? n : r) > r && r < (0,
					m.ng)(t, e)
			}
			));
			n.useEffect((() => {
				if (k)
					return;
				const e = new AbortController
					, t = e.signal;
				return (async () => {
					await (0,
						c._v)(500);
					for (let e = 0; e < b.length; e++) {
						if (null == t ? void 0 : t.aborted)
							return;
						h(e),
							await (0,
								c._v)(1250)
					}
				}
				)(),
					() => e.abort()
			}
			), []);
			const E = (e, t) => {
				let a = 0;
				for (let n = 0; n <= t; n++) {
					if (n === t)
						return !b[n] || e >= a;
					b[n] && a++
				}
				return !1
			}
				;
			return n.createElement("div", {
				className: l.Z.slide
			}, n.createElement("div", {
				className: "oxuea",
				...(0,
					d._q)(u.V.DailyQuestProgressSlide)
			}, n.createElement("h2", {
				className: "_10Fys"
			}, 0 === a ? (0,
				p._i)(35012, {
					num: a
				}) : a === e.length ? (0,
					p._i)(36846) : (0,
						p._i)(36845, {
							num: a
						})), n.createElement("div", {
							className: "_36VZf"
						}, e.map(((e, a) => {
							var i, o;
							const l = null !== (i = null == g ? void 0 : g[e.goalId]) && void 0 !== i ? i : 0
								, c = null !== (o = f[e.goalId]) && void 0 !== o ? o : l;
							return n.createElement(s.Z, {
								key: e.goalId
							}, n.createElement(r.Z, {
								difficulty: t,
								progress: k || E(v, a) ? c : l,
								quest: e,
								slotType: m.xD[a],
								sparkleOnIncrease: !0
							}))
						}
						)))))
		}
	}
	,
	4968: (e, t, a) => {
		a.d(t, {
			Z: () => y
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(15746)
			, o = a(38545);
		const l = "_1wqjr";
		var c = a(75073)
			, d = a(72117)
			, u = a(50498)
			, m = a(30033)
			, p = a(67173)
			, g = a(68903)
			, v = a(95940)
			, h = a(1398)
			, f = a(90110)
			, _ = a(18804);
		const k = (0,
			h.ZP)((() => Promise.resolve().then(a.bind(a, 38545))))
			, b = e => {
				switch (e) {
					case "CORE":
						return o.RewardChestColor.SILVER;
					case "DAILY":
						return o.RewardChestColor.BRONZE;
					case "HARD":
						return o.RewardChestColor.GOLD;
					default:
						return (0,
							g.RJ)(e),
							o.RewardChestColor.GOLD
				}
			}
			, E = e => (0,
				f.be)(e) ? o.RewardChestType.XP_BOOST : (0,
					f.Pe)(e) ? o.RewardChestType.STREAK_FREEZE : o.RewardChestType.GEMS
			, y = ({ dailyQuestRewards: e }) => {
				var t;
				const a = (0,
					_.tX)()
					, [n, o] = s.useState(-1)
					, [g, h] = s.useState(-1)
					, [y, S] = s.useState(-1)
					, [C, w] = s.useState(0)
					, x = (0,
						i.Z)()
					, R = e.map((({ reward: e }) => e));
				s.useEffect((() => {
					a({
						dailyQuestRewards: [],
						type: "SET_PENDING_DAILY_QUEST_REWARDS"
					})
				}
				), []),
					s.useEffect((() => {
						if (x || C < R.length)
							return;
						const e = new AbortController
							, t = e.signal;
						return (async () => {
							for (let e = 0; e < R.length; e++) {
								if (o(e),
									await (0,
										u._v)(450),
									t.aborted)
									return;
								if (S(e),
									await (0,
										u._v)(1550),
									t.aborted)
									return;
								if (h(e),
									await (0,
										u._v)(500),
									t.aborted)
									return
							}
						}
						)(),
							() => e.abort()
					}
					), [C]);
				const T = R.reduce(((e, t) => (0,
					f.Se)(t) ? e + t.amount : e), 0);
				return s.createElement("div", {
					className: r()(c.Z.slide, d.Z.slide)
				}, s.createElement("div", {
					className: d.Z.wrap
				}, s.createElement("div", {
					className: d.Z.content,
					...(0,
						m._q)(p.V.DailyQuestRewardSlide)
				}, x ? s.createElement("div", {
					className: l
				}, s.createElement(k, {
					color: b(null !== (t = e[e.length - 1].slotType) && void 0 !== t ? t : "HARD"),
					isOpening: !1,
					prefersReducedMotion: x,
					rewardType: E(e[e.length - 1].reward)
				})) : s.createElement("div", {
					className: "_2Oti2"
				}, s.createElement("div", {
					className: "Ow782",
					style: {
						"--daily-quest-rewards-chest-offset": `${Math.min(g + 1, R.length - 1)}`
					}
				}, e.map((({ reward: e, slotType: t }, a) => s.createElement("div", {
					className: l,
					key: a
				}, s.createElement("div", {
					className: "_1pwU0"
				}, s.createElement(s.Suspense, {
					fallback: null
				}, s.createElement(k, {
					color: b(null != t ? t : "HARD"),
					isOpening: n >= a,
					onChestReady: () => w((e => e + 1)),
					rewardType: E(e)
				}))), (0,
					f.Se)(e) ? s.createElement("div", {
						className: r()("_3rkeE _3z1-t", y >= a ? "_1b4WY" : void 0)
					}, (0,
						v._i)(31628, {
							num: e.amount
						})) : null))))), s.createElement("div", {
							className: x ? void 0 : r()("zJ660", g + 1 >= R.length ? "_2AFVE" : void 0)
						}, s.createElement("h2", {
							className: d.Z.title
						}, ((e, t) => e.length > 1 ? e.some((e => !(0,
							f.Se)(e))) ? (0,
								v._i)(36811, {
									num: e.length
								}) : (0,
									v._i)(35016, {
										num: t
									}) : (0,
										f.Se)(e[0]) ? (0,
											v._i)(12797, {
												gems: t
											}) : (0,
												f.be)(e[0]) ? (0,
													v._i)(36082) : (0,
														v._i)(35018))(R, T)), s.createElement("div", {
															className: r()(d.Z.tagline, "_2v_03")
														}, ((e, t) => {
															const a = e.some((e => (0,
																f.Se)(e)))
																, n = e.some((e => (0,
																	f.be)(e)))
																, r = e.some((e => (0,
																	f.Pe)(e)));
															if (e.length > 1) {
																if (a)
																	return r ? n ? (0,
																		v._i)(42342, {
																			num: t
																		}) : (0,
																			v._i)(35017, {
																				num: t
																			}) : n ? (0,
																				v._i)(42341, {
																					num: t
																				}) : (0,
																					v._i)(35015);
																if (r && n)
																	return (0,
																		v._i)(42343)
															}
															return n ? (0,
																v._i)(42344) : r ? (0,
																	v._i)(29438) : (0,
																		v._i)(35015)
														}
														)(R, T))))))
			}
	}
	,
	63219: (e, t, a) => {
		a.d(t, {
			x: () => p,
			Z: () => g
		});
		var n = a(27378)
			, r = a(64502)
			, s = a(31638)
			, i = a(4222)
			, o = a(76969)
			, l = a(81580);
		var c = a(35506)
			, d = a(95940)
			, u = a(28818)
			, m = a(18804);
		const p = ({ invitesRemaining: e, onInvite: t, onUninvite: a, potentialMatches: c }) => {
			const u = "dark" === (0,
				r.Fg)();
			return n.createElement(i.Z, {
				headingContent: n.createElement(n.Fragment, null, n.createElement("div", {
					className: "_2Rc51"
				}, n.createElement("img", {
					className: "_3-dw5",
					src: u ? o : l
				})), n.createElement("h2", {
					className: "_3-rnE"
				}, (0,
					d._i)(53564)), n.createElement("div", {
						className: "_1k4BL"
					}, (0,
						d._i)(52896, {
							num: e
						})))
			}, n.createElement(s.Z, {
				hasOpenSlots: e > 0,
				invites: c,
				onInvite: t,
				onUninvite: a,
				variant: "invite"
			}))
		}
			, g = ({ initialInvitesRemaining: e, initialPotentialMatches: t }) => {
				var a, r, s, i, o, l;
				const d = (0,
					m.tX)()
					, g = (0,
						u.YV)()
					, v = null !== (a = (0,
						u.tj)(c.aH)) && void 0 !== a ? a : {}
					, h = t.map((e => ({
						match: {
							other: e
						},
						state: (() => {
							var t, a;
							return (null === (t = null == v ? void 0 : v.inFlightActions) || void 0 === t ? void 0 : t.some((([t, a]) => ("invite" === t || "uninvite" === t) && a === e.userId))) ? "pending" : (null === (a = null == v ? void 0 : v.potentialMatches) || void 0 === a ? void 0 : a.every((t => t.userId !== e.userId))) ? "completed" : "available"
						}
						)()
					})));
				return n.useEffect((() => { }
				), []),
					n.createElement(p, {
						invitesRemaining: Math.min(null !== (s = null === (r = null == v ? void 0 : v.matchInfo) || void 0 === r ? void 0 : r.emptySlots) && void 0 !== s ? s : 1 / 0, null !== (l = null === (o = null === (i = null == v ? void 0 : v.optimisticUpdated) || void 0 === i ? void 0 : i.matchInfo) || void 0 === o ? void 0 : o.emptySlots) && void 0 !== l ? l : 1 / 0, e),
						onInvite: e => {
							d({
								type: "sessionEnd/CTA_CLICK"
							}),
								g(c.vc, e, "session_end")
						}
						,
						onUninvite: e => {
							d({
								type: "sessionEnd/CTA_CLICK"
							}),
								g(c.x8, e, "session_end")
						}
						,
						potentialMatches: h
					})
			}
	}
	,
	4222: (e, t, a) => {
		a.d(t, {
			Z: () => i
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378);
		const i = ({ children: e, headingContent: t = null }) => {
			const [a, n] = s.useState(!1);
			return s.createElement("div", {
				className: r()("QuvtB", {
					_2Yntw: null !== t
				}),
				onScroll: e => {
					n(e.currentTarget.scrollTop > 0)
				}
			}, s.createElement("div", {
				className: "_1oVn_"
			}, null === t ? null : s.createElement("div", {
				className: "_3-LZT"
			}, t, s.createElement("div", {
				className: r()("TzE33", {
					_27MIB: a
				})
			})), e))
		}
	}
	,
	50961: (e, t, a) => {
		a.d(t, {
			u: () => I,
			Z: () => D
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(57104)
			, l = a(11899)
			, c = a(22498)
			, d = a(97858)
			, u = a(2278)
			, m = a(15746)
			, p = a(4222);
		const g = a.p + "images/723db72cc44c6f66cd2e6121f01f34db.svg";
		var v = a(69402)
			, h = a(69532);
		const f = a.p + "lottie/974af9347231f42704bb76399b7f7047.json"
			, _ = a.p + "lottie/d086df47014ff383cb9778da54e2dd14.json"
			, k = "_2fSQw"
			, b = "_18kuF"
			, E = "_1jgZu"
			, y = "_2dakT";
		var S, C = a(52574), w = a(68903), x = a(54042), R = a(95940), T = a(795), N = a(28818), F = a(79465);
		!function (e) {
			e[e.InitialDelay = 0] = "InitialDelay",
				e[e.ExtendStreaks = 1] = "ExtendStreaks",
				e[e.ShineExtendedStreaks = 2] = "ShineExtendedStreaks",
				e[e.FadeInUnextendedStreaks = 3] = "FadeInUnextendedStreaks",
				e[e.Final = 4] = "Final"
		}(S || (S = {}));
		const I = ({ friendStreakData: e, onMount: t, onNudge: a }) => {
			const n = "dark" === (0,
				i.Fg)()
				, [C, N] = s.useState([])
				, F = (0,
					T.qj)(e)
				, I = F.filter((e => e.streak.extendedToday)).sort(((e, t) => t.streak.streakLength - e.streak.streakLength))
				, D = F.filter((e => !e.streak.extendedToday)).sort(((e, t) => t.streak.streakLength - e.streak.streakLength))
				, P = I.length > 0
				, L = D.length > 0;
			s.useEffect((() => {
				t({
					numExtendedStreaks: I.length,
					numUnextendedStreaks: D.length
				})
			}
			), []);
			const A = (0,
				m.Z)()
				, O = (0,
					x.v)({
						getAnimationStepProperties: e => {
							switch (e[0]) {
								case S.InitialDelay:
									return {
										duration: 500,
										nextState: [S.ExtendStreaks, {
											startFlame: !1,
											streakIndex: 0
										}]
									};
								case S.ExtendStreaks:
									return e[1].startFlame ? e[1].streakIndex < I.length - 1 ? {
										duration: 150,
										nextState: [S.ExtendStreaks, {
											startFlame: !1,
											streakIndex: e[1].streakIndex + 1
										}]
									} : {
										duration: 400,
										nextState: [S.ShineExtendedStreaks]
									} : {
										duration: 300,
										nextState: [S.ExtendStreaks, {
											startFlame: !0,
											streakIndex: e[1].streakIndex
										}]
									};
								case S.ShineExtendedStreaks:
									return {
										duration: 800,
										nextState: L ? [S.FadeInUnextendedStreaks] : [S.Final]
									};
								case S.FadeInUnextendedStreaks:
									return {
										duration: 500,
										nextState: [S.Final]
									};
								case S.Final:
									return;
								default:
									return void (0,
										w.RJ)(e)
							}
						}
						,
						initialAnimationState: P && !A ? [S.InitialDelay] : [S.Final]
					});
			return s.createElement(p.Z, null, s.createElement("h2", {
				className: "_2dVRQ"
			}, I.length > 0 ? (0,
				R._i)(52901, {
					num: I.length
				}) : (0,
					R._i)(53565, {
						num: D.length
					})), F.length >= 5 ? null : s.createElement("div", {
						className: "_1htnT"
					}, s.createElement("img", {
						className: "BBXBm",
						src: g
					})), P ? s.createElement("div", {
						className: r()("_2L4V1", {
							_1V7aZ: L
						})
					}, (() => {
						const e = O[0] >= S.ShineExtendedStreaks && O[0] <= S.FadeInUnextendedStreaks;
						return s.createElement(s.Suspense, {
							fallback: null
						}, s.createElement(c.Z, {
							className: r()("_2P_RE lTi5-", {
								[b]: !e
							}),
							isPlaying: e,
							path: _
						}), s.createElement(c.Z, {
							className: r()("_25qgJ lTi5-", {
								[b]: !e
							}),
							isPlaying: e,
							path: _
						}))
					}
					)(), s.createElement(d.Z, {
						className: r()("_2c_k_", {
							_3juS_: O[0] < S.ShineExtendedStreaks
						})
					}, I.map((({ friend: e, streak: t }, a) => {
						const r = O[0] > S.ExtendStreaks || O[0] === S.ExtendStreaks && a <= O[1].streakIndex
							, i = r && !(O[0] === S.ExtendStreaks && a === O[1].streakIndex && !O[1].startFlame);
						return s.createElement(s.Fragment, {
							key: e.id
						}, s.createElement(l.Z, {
							displaySize: 40,
							size: "large",
							user: e
						}), s.createElement("div", {
							className: k
						}, e.name), s.createElement("div", {
							className: E
						}, s.createElement("div", {
							className: "_3nuGM"
						}, i ? s.createElement("div", {
							className: y
						}) : s.createElement("img", {
							className: y,
							src: n ? v : h
						}), s.createElement(s.Suspense, {
							fallback: null
						}, s.createElement(c.Z, {
							className: "_3zQ4Q",
							fillMode: i ? "forwards" : void 0,
							isPlaying: i && !A,
							path: f
						}))), s.createElement(u.Z, {
							alignment: "right",
							digitHeight: "17px",
							variant: "fox",
							...r ? {
								animationDelay: 0,
								animationDuration: A ? 0 : .6,
								key: "extended",
								number: t.streakLength
							} : {
								animationDelay: 1e9,
								animationDuration: 0,
								isEndingNumberInactive: !0,
								key: "initial",
								number: t.streakLength
							}
						})))
					}
					)))) : null, L ? s.createElement(d.Z, {
						className: r()({
							[b]: O[0] < S.FadeInUnextendedStreaks,
							"_3VEF6 _3Cyk6": O[0] === S.FadeInUnextendedStreaks
						})
					}, D.map((({ friend: e, streak: t }) => s.createElement(s.Fragment, {
						key: e.id
					}, s.createElement(l.Z, {
						displaySize: 40,
						size: "large",
						user: e
					}), s.createElement("div", {
						className: k
					}, e.name), s.createElement("div", {
						className: E
					}, s.createElement("img", {
						className: y,
						src: n ? v : h
					}), s.createElement("div", {
						className: "wZJt- _3-njd"
					}, t.streakLength), t.friendExtendedToday ? null : s.createElement(o.Z, {
						className: "_1rzDk",
						onClick: () => {
							N((t => [...t, e.id])),
								a({
									friendUserId: e.id,
									streakLength: t.streakLength
								})
						}
						,
						size: "small",
						state: t.nudgedToday || C.includes(e.id) ? "disabled" : "enabled",
						variant: "outline"
					}, t.nudgedToday || C.includes(e.id) ? (0,
						R._i)(53876) : (0,
							R._i)(53875))))))) : null)
		}
			, D = ({ friendStreakData: e }) => {
				const t = (0,
					N.YV)();
				return s.createElement(I, {
					friendStreakData: e,
					onMount: ({ numExtendedStreaks: e, numUnextendedStreaks: t }) => {
						(0,
							F.track)("friend_streak_update_se_shown", {
								num_friend_streaks: e + t,
								num_friend_streaks_extended: e,
								num_friend_streaks_unextended: t
							})
					}
					,
					onNudge: ({ friendUserId: e, streakLength: a }) => {
						t(C.I, {
							friendUserId: e,
							streakLength: a,
							via: "session_end"
						})
					}
				})
			}
	}
	,
	27755: (e, t, a) => {
		a.d(t, {
			Z: () => p
		});
		var n = a(27378)
			, r = a(55160)
			, s = a(11899)
			, i = a(42659)
			, o = a(67172);
		const l = a.p + "images/goals/1cd51ae911715b0dc12fa290aad53ff3.svg";
		var c = a(75073);
		var d = a(95940)
			, u = a(18804)
			, m = a(81621);
		const p = ({ friendUser: e }) => {
			const t = (0,
				u.Fx)(i.np)
				, a = t.gemsConfig.gems;
			return n.createElement("div", {
				className: c.Z.slide
			}, n.createElement("div", {
				className: "_2lNqe"
			}, n.createElement("div", {
				className: "_2L2Ia"
			}, n.createElement("img", {
				src: o
			}), n.createElement("span", {
				className: "_1MTo- _3irjN"
			}, a)), n.createElement("span", {
				className: "QaS8X"
			}, (0,
				d._i)(42365, {
					name: e.displayName
				})), n.createElement("div", {
					className: "_2O4EK"
				}, n.createElement("img", {
					className: "_1uAq8",
					src: l
				}), n.createElement("div", {
					className: "_2vfOD"
				}, n.createElement(s.Z, {
					displaySize: 58,
					forceNoPicture: (0,
						m.z_)(t.picture),
					size: "xlarge",
					user: t
				}), n.createElement(r.Z, {
					direction: "left",
					innerClassName: "_2Pcg4",
					zIndex: 1
				}, (0,
					d._i)(37863, {
						name: e.displayName
					}))))))
		}
	}
	,
	46714: (e, t, a) => {
		a.d(t, {
			Z: () => p
		});
		var n = a(27378)
			, r = a(72003)
			, s = a(15746)
			, i = a(77477)
			, o = a(27586)
			, l = a(73520)
			, c = a(75073);
		var d = a(95940)
			, u = a(18804)
			, m = a(79465);
		const p = ({ friendUser: e, isComplete: t, metric: a, questThreshold: p, totalProgress: g, userProgress: v }) => {
			var h;
			const f = (0,
				s.Z)()
				, _ = null !== (h = (0,
					u.Fx)(l.Cu)) && void 0 !== h ? h : 0;
			return n.useEffect((() => {
				var a;
				t && (0,
					m.track)("friends_quest_complete_show", {
						match_win_streak: null === (a = e.historicalStats[0]) || void 0 === a ? void 0 : a.streak,
						via: "session_end",
						win_streak: _
					})
			}
			), []),
				n.createElement("div", {
					className: c.Z.slide
				}, n.createElement("div", {
					className: "_3Ho57"
				}, n.createElement("span", {
					className: "fsQYY"
				}, (0,
					d._i)(t ? 36414 : 35916)), n.createElement(r.Z, null, n.createElement(o.Z, {
						animateBar: !f,
						isChestOpen: !1,
						metric: a,
						questFailed: !1,
						questThreshold: p,
						totalProgress: g,
						userProgress: v
					}), n.createElement("hr", {
						className: "_3W1PE"
					}), n.createElement(i.Z, {
						friendProgress: g - v,
						friendUser: e,
						metric: a,
						questFailed: !1,
						useWinStreak: t,
						userProgress: v
					}))))
		}
	}
	,
	50458: (e, t, a) => {
		a.d(t, {
			Z: () => i
		});
		var n = a(27378)
			, r = a(82815)
			, s = a(75073);
		const i = () => n.createElement("div", {
			className: s.Z.slide
		}, n.createElement(r.Z, null))
	}
	,
	68950: (e, t, a) => {
		a.d(t, {
			Z: () => s
		});
		var n = a(27378)
			, r = a(80254);
		const s = ({ highlights: e, style: t = "underline", text: a }) => {
			e = r.MR(e, (e => e[0]));
			let s = 0;
			const i = [];
			return e.forEach((e => {
				e[0] !== s && i.push([a.slice(s, e[0]), !1]),
					i.push([a.slice(e[0], e[1]), !0]),
					s = e[1]
			}
			)),
				s !== a.length && i.push([a.slice(s, a.length), !1]),
				n.createElement("span", null, i.map(((e, a) => e[1] ? n.createElement("span", {
					className: "underline" === t ? "_3DD1l" : "underline-and-bold" === t ? "BTUEY" : "blue" === t ? "_24abr" : "_3MMkT",
					key: a
				}, e[0]) : n.createElement("span", {
					key: a
				}, e[0]))))
		}
	}
	,
	66720: (e, t, a) => {
		a.d(t, {
			Z: () => E
		});
		var n = a(27378)
			, r = a(51493)
			, s = a(15746)
			, i = a(97321)
			, o = a(35971)
			, l = a(75073)
			, c = a(15664)
			, d = a(72117)
			, u = a(68903)
			, m = a(11883)
			, p = a(95940)
			, g = a(28818)
			, v = a(87443)
			, h = a(33124)
			, f = a(87471)
			, _ = a(13665)
			, k = a(58576)
			, b = a(18804);
		const E = ({ type: e, lastPositionSeen: t, lastScoreSeen: a }) => {
			var E, y, S, C;
			const w = (0,
				m.Z)()
				, x = (0,
					b.tX)()
				, R = (0,
					g.YV)()
				, T = (0,
					g.tj)(v.zV)
				, N = null == T ? void 0 : T.state
				, F = (0,
					s.Z)();
			if (!(null == N ? void 0 : N.active) || !(null === (E = null == N ? void 0 : N.leaderboard) || void 0 === E ? void 0 : E.activeContest))
				throw Error("Leaderboard session end cannot be shown without an active leaderboard");
			const { cohortSize: I, numDemoted: D, numPromoted: P, numLosers: L, numWinners: A } = N.leaderboard.activeContest.ruleset
				, O = null !== (y = N.active.cohort.tier) && void 0 !== y ? y : N.tier
				, M = "tournament" === (null == T ? void 0 : T.alias) || O !== N.tier
				, Z = M ? (0,
					p.H8)(_.Ri[N.tier]) : (0,
						p.H8)(_.Vq[N.tier])
				, z = N.active.cohort.rankings
				, U = N.active.userId
				, G = (0,
					f.Tm)(z, U)
				, B = (() => {
					if (0 === G && "leaderboardJoin" !== e)
						return (0,
							p._i)(23511, {
								league: Z
							});
					switch (e) {
						case "leaderboardTopThree":
							return (0,
								p._i)(21245, {
									league: Z
								});
						case "leaderboardDemoZone":
						case "leaderboardRankIncreaseLarge":
						case "leaderboardRankIncreaseSmall":
							return (0,
								p._i)(22848, {
									league: Z
								});
						case "leaderboardJoin":
							return (0,
								p._i)(29235);
						case "leaderboardPromoZone":
							return (0,
								p._i)(30824);
						case "leaderboardMoveUpPrompt":
							if (G <= 0)
								throw Error("leaderboardMoveUpPrompt can only be shown if user is not rank 1");
							return (0,
								p._i)(30155, {
									num: z[G - 1].score - z[G].score
								});
						default:
							return (0,
								u.RJ)(e),
								null
					}
				}
				)();
			n.useEffect((() => {
				(null == N ? void 0 : N.active) && x({
					leaderboardPositionState: {
						cohortId: N.active.cohort.id,
						lastPositionSeen: G,
						lastScoreSeen: z[G].score,
						placesMoved: (null != t ? t : G) - G
					},
					type: "SET_LEADERBOARD_POSITION_STATE"
				})
			}
			), []),
				n.useEffect((() => {
					"leaderboardJoin" === e && (null == N ? void 0 : N.ended) && N.ended.length > 0 && R(h.Fh, "leagues")
				}
				), []),
				n.useEffect((() => {
					(null == N ? void 0 : N.active) && R(v.Kx, {
						cohortId: N.active.cohort.id,
						shownDate: Date.now(),
						slideType: e
					})
				}
				), []);
			const H = M && O === (null == P ? void 0 : P.length) ? A : (0,
				f.PR)(O, P)
				, W = M && 0 === O ? L : (0,
					f.hn)(O, D)
				, X = n.useRef(0);
			X.current += 1;
			const V = n.useRef(!1);
			return n.useEffect((() => {
				const n = ["leaderboardTopThree", "leaderboardPromoZone", "leaderboardDemoZone", "leaderboardRankIncreaseLarge", "leaderboardRankIncreaseSmall"].includes(e) && (void 0 === t || t <= G || void 0 === a || a >= z[G].score);
				n && !V.current && (V.current = !0,
					(0,
						k.Kp)("LeaderboardSlide expected user to have moved up but they have not", {
							data: {
								currentUserPosition: G,
								currentUserScore: z[G].score,
								lastPositionSeen: t,
								lastScoreSeen: a,
								renderCount: X.current,
								type: e
							}
						})),
					!n && V.current && (V.current = !1,
						(0,
							k.Kp)("LeaderboardSlide recovered from invalid move up state", {
								data: {
									currentUserPosition: G,
									currentUserScore: z[G].score,
									lastPositionSeen: t,
									lastScoreSeen: a,
									renderCount: X.current,
									type: e
								}
							}))
			}
			)),
				n.createElement("div", {
					className: l.Z.slide
				}, n.createElement("div", {
					className: c.Z.container
				}, n.createElement("img", {
					className: c.Z.badge,
					src: M ? _.lf[N.tier] : _.L[N.tier]
				}), n.createElement("h2", {
					className: d.Z.title
				}, B), n.createElement("div", {
					className: c.Z.timer
				}, n.createElement(r.Z, {
					currentTime: w,
					targetTime: null === (C = null === (S = N.leaderboard) || void 0 === S ? void 0 : S.activeContest) || void 0 === C ? void 0 : C.contestEnd
				})), ["leaderboardJoin", "leaderboardMoveUpPrompt"].includes(e) || F ? n.createElement(o.Z, {
					cohortSize: I,
					cohortTier: O,
					finalRankings: z,
					isInDiamondTournament: M,
					numUsersDemoted: W,
					numUsersPromoted: H,
					numWinners: A,
					userId: U
				}) : n.createElement(i.Z, {
					cohortSize: I,
					cohortTier: O,
					finalRankings: z,
					isInDiamondTournament: M,
					lastPositionSeen: null != t ? t : G,
					lastScoreSeen: null != a ? a : z[G].score,
					numUsersDemoted: W,
					numUsersPromoted: H,
					numWinners: A,
					userId: U
				})))
		}
	}
	,
	34107: (e, t, a) => {
		a.d(t, {
			_v: () => d,
			Hz: () => u,
			ZP: () => m
		});
		var n = a(27378)
			, r = a(1302)
			, s = a(12529)
			, i = a(20302)
			, o = a(85346);
		var l = a(68903);
		const c = [[4, 4, 8, 8, 16, 24, 20, 18, 16, 20, 20, 16, 8, 4], [4, 4, 8, 8, 16, 24, 16, 24, 12, 20, 20, 12, 16, 4], [4, 24, 21, 8, 16, 24, 14, 24, 20, 14, 20, 8, 8, 4], [4, 4, 8, 8, 16, 8, 16, 24, 24, 16, 16, 20, 8, 4], o.nO[0]];
		var d;
		!function (e) {
			e[e.WAVEFORM_1 = 0] = "WAVEFORM_1",
				e[e.WAVEFORM_2 = 1] = "WAVEFORM_2",
				e[e.WAVEFORM_3 = 2] = "WAVEFORM_3",
				e[e.WAVEFORM_4 = 3] = "WAVEFORM_4"
		}(d || (d = {}));
		const u = [d.WAVEFORM_1, d.WAVEFORM_2, d.WAVEFORM_3, d.WAVEFORM_4]
			, m = n.forwardRef((({ color: e, waveformNum: t }, a) => n.createElement(n.Fragment, null, n.createElement(i.Z, {
				className: "tE4f1",
				color: e,
				ref: a,
				type: "small"
			}), n.createElement(r.Z, {
				amplitudes: c[t].map((e => (0,
					s.bA)(e, 4, 4 === t ? 32 : 24, 0, 1))),
				barWidth: 3,
				maxBarHeight: 4 === t ? 32 : 24,
				minBarHeight: 4,
				variant: (() => {
					switch (e) {
						case "cardinal":
							return "incorrect";
						case "macaw":
							return "default";
						case "snow":
							return "inverse";
						case "swan":
							return "disabled";
						case "tree-frog":
							return "correct";
						default:
							return (0,
								l.RJ)(e),
								"default"
					}
				}
				)()
			}))))
	}
	,
	59416: (e, t, a) => {
		a.d(t, {
			U: () => o
		});
		var n = a(27378)
			, r = a(57104)
			, s = a(6440)
			, i = a(94369);
		const o = ({ disabled: e, onCalculatorClick: t, onLeftButtonClick: a, isMathHintAvailable: o, toolkitLabel: l }) => n.createElement("div", {
			className: "_11zOF"
		}, n.createElement(r.Z, {
			className: o ? "_23UTR _3araI" : "_2vGvL",
			onClick: t,
			state: e ? "disabled" : "enabled",
			unstyledHover: !0,
			variant: "link"
		}, n.createElement("img", {
			className: "_2eeR4",
			src: s
		}), o ? null : n.createElement("span", {
			className: "_228ry"
		}, l)), o ? n.createElement(r.Z, {
			className: "_3sPKH _3araI",
			onClick: a,
			state: e ? "disabled" : "enabled",
			unstyledHover: !0,
			variant: "link"
		}, n.createElement("img", {
			className: "_3_s9f",
			src: i
		})) : null)
	}
	,
	93301: (e, t, a) => {
		a.d(t, {
			Z: () => m
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378);
		const i = a.p + "images/icons/216ddc11afcbb98f44e53d565ccf479e.svg";
		var o = a(75073);
		var l = a(72117)
			, c = a(30033)
			, d = a(67173)
			, u = a(95940);
		const m = () => s.createElement("div", {
			className: o.Z.slide
		}, s.createElement("div", {
			className: l.Z.wrap
		}, s.createElement("div", {
			className: l.Z.content,
			...(0,
				c._q)(d.V.MilestoneStreakFreezeSlide)
		}, s.createElement("div", {
			className: r()(l.Z.illustration, "GuIae")
		}, s.createElement("img", {
			className: "_3FOWQ",
			src: i
		}), s.createElement("div", {
			className: "_3M6on _2k8gL"
		}), s.createElement("div", {
			className: "_2a6IT _2k8gL"
		}), s.createElement("div", {
			className: "bTCEW _2k8gL"
		})), s.createElement("h2", {
			className: r()(l.Z.title, "rIQmz")
		}, (0,
			u._i)(49453)))))
	}
	,
	68891: (e, t, a) => {
		a.d(t, {
			Z: () => S
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(36666)
			, l = a(71814)
			, c = a(47725)
			, d = a(39797)
			, u = a(42659)
			, m = a(73520);
		const p = "_2e7Ny"
			, g = "T7I0c _2EnxW MYehf";
		var v = a(50498)
			, h = a(17135)
			, f = a(66238)
			, _ = a(95940)
			, k = a(16689)
			, b = a(18804)
			, E = a(79465);
		const y = [49866, 49867, 49868, 49869, 49870, 49871, 49872, 49873, 49874, 49863, 49864, 49865]
			, S = ({ oldProgress: e, onClose: t }) => {
				const a = (0,
					b.tX)()
					, n = (0,
						b.Fx)(u.$4)
					, S = (0,
						h.Ux)().getMonth()
					, C = (0,
						b.Fx)(m.W1)
					, w = (0,
						b.Fx)(m.TE)
					, x = (0,
						i.Fg)()
					, R = (0,
						b.Fx)(m.oO)
					, T = (0,
						b.Fx)(m.gD)
					, N = T ? (0,
						k.br)(R[T]) : void 0
					, F = (0,
						b.Fx)(m.Ap)
					, [I, D] = s.useState(!1);
				if (s.useEffect((() => {
					const e = new AbortController;
					return (async () => {
						await (0,
							v._v)(300),
							e.signal.aborted || D(!0)
					}
					)(),
						() => e.abort()
				}
				), []),
					!w)
					return null;
				const P = "dark" === x ? null == w ? void 0 : w.darkModeColors.primary : null == w ? void 0 : w.lightModeColors.primary
					, L = "dark" === x ? null == w ? void 0 : w.darkModeColors.secondary : null == w ? void 0 : w.lightModeColors.secondary
					, A = (0,
						k.oo)(w)
					, O = C === f.nU;
				return s.createElement("div", {
					className: "_1MlOY",
					style: O ? {
						"--monthly-challenge-complete-icon-animate-duration": "1s",
						"--monthly-challenge-complete-progress-bar-delay": "1s"
					} : {}
				}, s.createElement("div", {
					className: "_1Cygm"
				}, s.createElement("img", {
					className: r()("_3B1Nd", {
						[p]: !O
					}),
					src: A
				}), s.createElement("div", {
					className: "A3tOd"
				}, s.createElement(d.Z, {
					className: r()("_1BCmO", p),
					color: "custom",
					denominator: F,
					height: 25,
					hexColor: P,
					innerText: `${F} / ${F}`,
					numerator: I ? F : e,
					sparkleOnIncrease: !0,
					squareEnd: !0,
					strokeColor: P
				}), s.createElement("div", {
					className: r()("_2vWEH", p)
				}), s.createElement("img", {
					className: r()("lCGGT", {
						[p]: O
					}),
					src: N
				}))), s.createElement("div", {
					className: "rBTzC",
					style: {
						"--monthly-challenge-primary-color": P,
						"--monthly-challenge-primary-color-alpha": `${P}E6`
					}
				}, s.createElement("div", {
					className: "_26M-r"
				}, s.createElement("div", {
					className: "_2SWdB",
					style: {
						color: L
					}
				}, (0,
					_._i)(y[S]))), s.createElement("div", {
						className: "_3ZA_u"
					}, s.createElement("div", {
						className: "sF7Mt U8jH3 jHbiF"
					}, O ? s.createElement(s.Fragment, null, s.createElement(o.Z, {
						className: "_3wOwe _3h0lA _2EnxW",
						onClick: () => {
							(0,
								E.track)("chess_nov_monthly_challenge_tap", {
									target: "no_thanks"
								}),
								a({
									type: "sessionEnd/CTA_CLICK"
								}),
								t()
						}
						,
						variant: n ? "stroke" : "text"
					}, (0,
						_._i)(6821)), s.createElement(c.ZP, {
							className: r()((0,
								l.yO)({
									color: "snow",
									variant: "solid"
								}), g),
							href: "https://www.chess.com/duolingo",
							onClick: e => {
								confirm((0,
									_.H8)(49502)) ? (0,
										E.track)("chess_nov_monthly_challenge_tap", {
											target: "claimed"
										}) : ((0,
											E.track)("chess_nov_monthly_challenge_tap", {
												target: "claim_then_cancel"
											}),
											e.preventDefault()),
									a({
										type: "sessionEnd/CTA_CLICK"
									}),
									t()
							}
							,
							style: {
								"--web-ui_button-color": P
							},
							target: "_blank"
						}, (0,
							_._i)(5473))) : s.createElement(o.Z, {
								className: g,
								color: "snow",
								onClick: () => {
									a({
										type: "sessionEnd/CTA_CLICK"
									}),
										t()
								}
								,
								style: {
									"--web-ui_button-color": P
								},
								variant: "solid"
							}, (0,
								_._i)(4906))))))
			}
	}
	,
	9069: (e, t, a) => {
		a.d(t, {
			Z: () => f
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(39797)
			, l = a(97138)
			, c = a(73520)
			, d = a(75073);
		var u = a(72117)
			, m = a(50498)
			, p = a(17135)
			, g = a(95940)
			, v = a(16689)
			, h = a(18804);
		const f = ({ isDisplayed: e, oldProgress: t, newProgress: a }) => {
			const n = (0,
				h.Fx)(c.TE)
				, f = (0,
					i.Fg)()
				, _ = (0,
					h.Fx)(c.Ap)
				, k = (0,
					h.Fx)(c.oO)
				, b = (0,
					h.Fx)(c.gD)
				, E = b ? (0,
					v.br)(k[b]) : void 0
				, [y, S] = s.useState("ready");
			if (s.useEffect((() => {
				const t = new AbortController;
				return "ready" === y && e && (async () => {
					S("playing"),
						await (0,
							m._v)(200),
						t.signal.aborted || S("finished")
				}
				)(),
					() => t.abort()
			}
			), [e]),
				(0,
					l.Z)(a),
				!n)
				return null;
			const C = "dark" === f ? null == n ? void 0 : n.darkModeColors.primary : null == n ? void 0 : n.lightModeColors.primary
				, w = (0,
					v.oo)(n)
				, x = [(0,
					g._i)(49839), (0,
						g._i)(49840), (0,
							g._i)(49841), (0,
								g._i)(49842), (0,
									g._i)(49843), (0,
										g._i)(49844), (0,
											g._i)(49845), (0,
												g._i)(49846), (0,
													g._i)(49847), (0,
														g._i)(49848), (0,
															g._i)(49849), (0,
																g._i)(49850)]
				, R = (0,
					p.Ux)().getMonth();
			return s.createElement("div", {
				className: r()(d.Z.slide, u.Z.slide)
			}, s.createElement("div", {
				className: u.Z.wrap
			}, s.createElement("div", {
				className: u.Z.content
			}, s.createElement("img", {
				className: "_3vfVi",
				src: w
			}), s.createElement("div", {
				className: "Duulu"
			}, s.createElement(o.Z, {
				className: "_1hVwT",
				color: "custom",
				denominator: _,
				height: 25,
				hexColor: C,
				innerText: `${a} / ${_}`,
				numerator: "finished" === y ? a : t,
				sparkleOnIncrease: !0,
				squareEnd: !0,
				strokeColor: C
			}), s.createElement("img", {
				className: "_19nrs",
				src: E
			})), s.createElement("div", {
				className: "_3YTuk"
			}, x[R]))))
		}
	}
	,
	16364: (e, t, a) => {
		a.d(t, {
			a: () => x
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(36666)
			, l = a(47798)
			, c = a(30427)
			, d = a(42659)
			, u = a(11811)
			, m = a(40060);
		const p = c.P1(d.MY, (e => {
			var t;
			return null === (t = e.player.challengeStates[e.player.currentIndex]) || void 0 === t ? void 0 : t.guess
		}
		), ((e, t) => {
			if (!e)
				return !1;
			const a = e.type === u.Sm.MathChallengeBlob ? e.challengeBlob : void 0;
			if (!(0,
				m.Sd)(a) || !(0,
					m.IQ)(t))
				return !1;
			const n = a.steps[t.currentStepIndex];
			return "dialogue" === (null == n ? void 0 : n.blob.layout)
		}
		));
		var g = a(16721)
			, v = a(23908)
			, h = a(34944)
			, f = a(30033)
			, _ = a(37971)
			, k = a(67173)
			, b = a(94171)
			, E = a(95940)
			, y = a(18804)
			, S = a(6947)
			, C = a(39837)
			, w = a(97106);
		const x = ({ color: e, coachDuoModel: t, currentSessionEndSlide: a, isSubmittable: n, onClick: c, overrideRibbonColor: d, smartTip: u, status: m }) => {
			const x = null == a ? void 0 : a.type
				, R = (0,
					w.g3)()
				, T = "dark" === (0,
					i.Fg)()
				, N = (0,
					y.Fx)(p)
				, F = s.useRef(null)
				, I = {
					courseCompletionTrophy: {
						className: h.Z.turquoise
					},
					dailyRefreshOnboarding: {
						className: h.Z.blue
					},
					earlyStreakMilestonePrompt: {
						className: h.Z.blue,
						content: () => (0,
							E._i)(31372)
					},
					finalLevelFailed: {
						className: h.Z["legendary-gold-cta"],
						content: () => (0,
							E._i)(28652)
					},
					finalLevelPartialXp: {
						className: h.Z["legendary-gold-cta"]
					},
					friendsQuestComplete: {
						className: h.Z.blue,
						content: () => (0,
							E._i)(35767, {
								name: "friendsQuestComplete" === (null == a ? void 0 : a.type) ? a.friendUser.displayName : ""
							})
					},
					friendsQuestGift: {
						className: h.Z.blue,
						content: () => s.createElement(s.Fragment, null, (0,
							E._i)(37905), s.createElement("span", {
								className: h.Z["gems-cost-text"]
							}, s.createElement("img", {
								src: T ? g : v
							}), s.createElement("span", null, b.py)))
					},
					friendsQuestProgress: {
						className: h.Z.blue,
						content: () => "friendsQuestProgress" === (null == a ? void 0 : a.type) && a.attachedSlides.length > 0 ? (0,
							E._i)(42364, {
								name: a.friendUser.displayName
							}) : (0,
								E._i)(4906)
					},
					friendsQuestReward: {
						className: h.Z.blue,
						content: () => (0,
							E._i)(35014, {
								num: b.fw
							})
					},
					mistakesInboxEmpty: {
						className: h.Z["super-cta"],
						content: () => (0,
							E._i)(19889)
					},
					streakExtended: {
						className: "force-undefined" === d ? h.Z.blue : d === l.Il.ORANGE_DYNAMIC ? h.Z["white-dynamic"] : (0,
							C.FD)(a) ? h.Z.blue : "streakExtended" === (null == a ? void 0 : a.type) && a.isEndOfPerfectWeek && !(0,
								S.pS)(a.streak) ? h.Z.white : "streakExtended" === (null == a ? void 0 : a.type) ? h.Z.blue : void 0,
						content: () => (0,
							C.FD)(a) ? (0,
								E._i)(45067) : "streakExtended" !== (null == a ? void 0 : a.type) || 1 !== a.perfectWeekDay && 4 !== a.perfectWeekDay ? (0,
									E._i)(4906) : (0,
										E._i)(31372)
					},
					streakFreezeGift: {
						className: h.Z.blue,
						content: () => (0,
							E._i)(7698)
					}
				}
				, D = (() => {
					var e;
					switch (m) {
						case _.c.CoachDuo:
						case _.c.CoachDuoSplash:
						case _.c.CoachDuoSliding:
						case _.c.CoachDuoSubmitting:
							return r()(h.Z.check, h.Z["check-green"], {
								[h.Z.delayed]: "dialogue" === (null == t ? void 0 : t.template.type)
							});
						case _.c.EndCarousel:
							return null === (e = I[null != x ? x : ""]) || void 0 === e ? void 0 : e.className;
						case _.c.LegendaryDuo:
						case _.c.PartialXpDuo:
						case _.c.PartialXpDuoSliding:
							return h.Z["legendary-gold-cta"];
						case _.c.MistakesReviewDuo:
						case _.c.PracticeHubDuo:
							return h.Z["super-cta-wide"];
						case _.c.AlphabetTipSplash:
						case _.c.GrammarSkillSplash:
						case _.c.SectionTestSplash:
						case _.c.UnitTestSplash:
						case _.c.Showing:
							return h.Z.blue;
						case _.c.VisiblePersonalizationSplash:
							return h.Z["start-lesson"];
						default:
							return
					}
				}
				)()
				, P = (() => {
					var e, t;
					const a = R ? w.K3 : 1;
					switch (m) {
						case _.c.Blaming:
							return u ? (0,
								E._i)(24742) : (0,
									E._i)(4906);
						case _.c.CapstoneReviewSplash:
							return (0,
								E._i)(28423, {
									num: w.pu * a
								});
						case _.c.UnitReviewSplash:
							return (0,
								E._i)(28423, {
									num: w.mX * a
								});
						case _.c.EndCarousel:
							{
								if (!x)
									return (0,
										E._i)(4906);
								if ("dailyRefreshOnboarding" === x)
									return (0,
										E._i)(41039);
								const a = null === (t = null === (e = I[x]) || void 0 === e ? void 0 : e.content) || void 0 === t ? void 0 : t.call(e);
								return null != a ? a : (0,
									E._i)(4906)
							}
						case _.c.Grading:
						case _.c.Guessing:
						case _.c.Sliding:
						case _.c.SmartTip:
						case _.c.SmartTipSliding:
							return N ? (0,
								E._i)(11383) : (0,
									E._i)(17249);
						case _.c.AlphabetTipSplash:
						case _.c.GrammarSkillSplash:
							return (0,
								E._i)(24742);
						case _.c.Showing:
							return s.createElement("span", {
								className: h.Z["next-wrap"]
							}, s.createElement("span", {
								className: T ? h.Z["arrow-white-dark"] : h.Z["arrow-white"]
							}), s.createElement("span", null, (0,
								E._i)(11383)));
						case _.c.UnitTestSplash:
							return (0,
								E._i)(1568);
						case _.c.VisiblePersonalizationSplash:
							return (0,
								E._i)(26);
						default:
							return (0,
								E._i)(4906)
					}
				}
				)()
				, L = (() => {
					switch (m) {
						case _.c.Guessing:
						case _.c.Sliding:
						case _.c.SmartTipSliding:
						case _.c.SmartTip:
							return !n();
						case _.c.EndCarousel:
							return "earlyStreakMilestonePrompt" === (null == a ? void 0 : a.type) && !a.nextButtonEnabled;
						default:
							return !1
					}
				}
				)()
				, A = (() => {
					switch (m) {
						case _.c.CoachDuoSubmitting:
						case _.c.Grading:
						case _.c.Submitting:
							return !0;
						default:
							return !1
					}
				}
				)();
			return m === _.c.EndCarousel && (e = l.Il.GREEN),
				s.useEffect((() => {
					var e;
					L || m === _.c.Guessing || m === _.c.SmartTip || null === (e = F.current) || void 0 === e || e.focus()
				}
				), [m]),
				s.createElement(o.Z, {
					...(0,
						f._q)(k.V.PlayerNext),
					"aria-disabled": L,
					className: null != D ? D : r()(h.Z.check, {
						[h.Z["check-yellow"]]: e === l.Il.YELLOW,
						[h.Z["check-green"]]: e === l.Il.GREEN,
						[h.Z["check-red"]]: e === l.Il.RED
					}),
					disabled: L,
					onClick: L || A ? void 0 : c,
					ref: F,
					submitting: A,
					useDisabledAttribute: !1,
					variant: "solid"
				}, P)
		}
	}
	,
	47798: (e, t, a) => {
		a.d(t, {
			Il: () => X,
			L0: () => $,
			ZP: () => J
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(36666)
			, o = a(15746)
			, l = a(8096)
			, c = a(26886)
			, d = a(37971)
			, u = a(58576)
			, m = a(35160)
			, p = a(11811);
		const g = ({ challenge: e, color: t, correct: a, currentCourse: n, dispatch: r, sessionType: i, status: o, smartTip: g }) => {
			var v, h;
			const [f, _] = s.useState(!1)
				, k = () => {
					(0,
						c.$l)(n) ? r({
							options: {
								challenge: e,
								name: m.t.MathReport,
								onReport: () => _(!0)
							},
							type: "TOGGLE_MODAL"
						}) : r({
							options: {
								challenge: e,
								name: m.t.ReportSentence,
								onReport: () => _(!0)
							},
							type: "TOGGLE_MODAL"
						})
				}
				;
			switch (o) {
				case d.c.CharacterWriteRetryBlaming:
					return e.type === p.Sm.CharacterWrite ? s.createElement(l.Sp, {
						color: t,
						correct: a,
						onReportClick: k,
						reported: f
					}) : ((0,
						u.vU)("PlayerStatus is character write retry blaming when the challenge is not a write challenge type.", {
							once: !0
						}),
						s.createElement(l.xl, {
							challenge: e,
							color: t,
							correct: a,
							currentCourse: n,
							onReportClick: k,
							reported: f,
							smartTip: g
						}));
				case d.c.SpeakRetryBlaming:
					return e.type === p.Sm.Speak || e.type === p.Sm.ListenSpeak ? s.createElement(l.x_, {
						color: t,
						correct: a,
						numRetriesLeft: null !== (h = null === (v = e.gradingResult) || void 0 === v ? void 0 : v.numRetriesLeft) && void 0 !== h ? h : 0,
						onReportClick: k,
						reported: f
					}) : ((0,
						u.vU)("PlayerStatus is speak retry blaming when the challenge is not a speaking challenge type.", {
							once: !0
						}),
						s.createElement(l.xl, {
							challenge: e,
							color: t,
							correct: a,
							currentCourse: n,
							onReportClick: k,
							reported: f,
							smartTip: g
						}));
				case d.c.ChessRetryBlaming:
					return s.createElement(l.xl, {
						challenge: e,
						color: t,
						correct: a,
						currentCourse: n,
						onReportClick: k,
						reported: f,
						smartTip: g
					});
				case d.c.MathRetryBlaming:
					return s.createElement(l.BO, {
						onReportClick: k,
						reported: f
					});
				case d.c.MathSkipBlaming:
					return s.createElement(l.eq, {
						onReportClick: k,
						reported: f
					});
				case d.c.Blaming:
					{
						if ((0,
							c.$l)(n))
							return s.createElement(l.rQ, {
								challenge: e,
								color: t,
								correct: a,
								onReportClick: k,
								reported: f
							});
						const r = s.createElement(l.xl, {
							challenge: e,
							color: t,
							correct: a,
							currentCourse: n,
							onReportClick: k,
							reported: f,
							smartTip: g
						})
							, o = (i === p.FF.AlphabetLesson || i === p.FF.AlphabetPractice) && "en" === n.learningLanguage;
						switch (e.type) {
							case p.Sm.SameDifferent:
								return s.createElement(l.Ky, {
									challenge: e,
									color: t,
									correct: a,
									onReportClick: k,
									reported: f
								});
							case p.Sm.SelectPronunciation:
								return o ? s.createElement(l.Ky, {
									challenge: e,
									color: t,
									correct: a,
									onReportClick: k,
									reported: f
								}) : r;
							case p.Sm.ListenSpeak:
							case p.Sm.Speak:
								return o ? s.createElement(l.LC, {
									challenge: e,
									color: t,
									correct: a,
									onReportClick: k,
									reported: f
								}) : s.createElement(l.H6, {
									challenge: e,
									color: t,
									correct: a,
									currentCourse: n,
									onReportClick: k,
									reported: f
								});
							case p.Sm.ExtendedListenMatch:
							case p.Sm.Listen:
							case p.Sm.ListenTap:
							case p.Sm.ListenComplete:
							case p.Sm.ListenMatch:
							case p.Sm.ListenIsolation:
								return s.createElement(l.H6, {
									challenge: e,
									color: t,
									correct: a,
									currentCourse: n,
									onReportClick: k,
									reported: f
								});
							case p.Sm.CharacterMatch:
							case p.Sm.FreeResponse:
								return a ? r : s.createElement(l.ke, {
									color: t,
									onReportClick: k,
									reported: f
								});
							case p.Sm.CharacterWrite:
								return a || e.skipped ? r : s.createElement(l.cw, {
									color: t,
									correct: a,
									onReportClick: k,
									reported: f
								});
							default:
								return r
						}
					}
				case d.c.SmartTipBlaming:
					return void 0 === g ? s.createElement(l.xl, {
						challenge: e,
						color: t,
						correct: a,
						currentCourse: n,
						onReportClick: k,
						reported: f
					}) : s.createElement(l.Qy, {
						color: t,
						correct: a,
						currentCourse: n,
						smartTip: g
					});
				default:
					return s.createElement(l.xl, {
						challenge: e,
						color: t,
						correct: a,
						currentCourse: n,
						onReportClick: k,
						reported: f
					})
			}
		}
			;
		var v = a(16364)
			, h = a(64502)
			, f = a(83735);
		const _ = a.p + "images/e786c05c2a908e9f919f51fb14fc950c.svg"
			, k = a.p + "images/05087a35a607783111e11cb81d1fcd33.svg"
			, b = a.p + "images/196ca8dbd13236da855ff6b58ace4bee.svg"
			, E = a.p + "images/ed8f358a87ca3b9ba9cce34f5b0e0e11.svg"
			, y = a.p + "images/be630f7bdd8684e1a26805ea5fa93e01.svg"
			, S = a.p + "images/4585c00fda1c7aea505df729918e31a3.svg"
			, C = a.p + "images/b8172c10b8715137fd6992ac32a50002.svg"
			, w = a.p + "images/c9419412ddecf0c0b2fe03771997af21.svg";
		var x = a(30033)
			, R = a(67173)
			, T = a(95940)
			, N = a(18804);
		const F = ({ disabled: e, isToggledToTyping: t, type: a }) => {
			const n = (0,
				N.tX)()
				, r = "dark" === (0,
					h.Fg)()
				, { handleClick: o, icon: l, label: c } = (() => {
					switch (a) {
						case "DIFFICULTY":
							return t ? {
								handleClick: () => n((0,
									f.au)()),
								icon: r ? y : S,
								label: (0,
									T._i)(19413)
							} : {
								handleClick: () => n((0,
									f.au)()),
								icon: r ? b : E,
								label: (0,
									T._i)(10185)
							};
						case "KEYBOARD":
							return t ? {
								handleClick: () => n((0,
									f.RX)()),
								icon: r ? C : w,
								label: (0,
									T._i)(19288)
							} : {
								handleClick: () => n((0,
									f.RX)()),
								icon: r ? _ : k,
								label: (0,
									T._i)(4221)
							};
						default:
							throw Error(`Unexpected toggle type: ${a}`)
					}
				}
				)();
			return s.createElement(i.Z, {
				className: "_2zub1",
				disabled: e,
				onClick: o,
				...(0,
					x._q)(R.V.PlayerToggleKeyboard)
			}, s.createElement("img", {
				alt: "",
				className: "_1RJAN",
				src: l
			}), s.createElement("span", {
				className: "_1Z76W _2Rt1l"
			}, c))
		}
			;
		var I = a(59416)
			, D = a(6440)
			, P = a(94369);
		var L = a(81149)
			, A = a(99568)
			, O = a(79465);
		const M = ({ challengeId: e, disabled: t, isCalculatorAvailable: a, onCalculatorClick: n, onHelpClick: r, presentationStyle: o }) => {
			const l = s.useRef(Date.now());
			return s.useEffect((() => {
				(0,
					A.cq)(e, o),
					l.current = Date.now()
			}
			), [e, o]),
				s.createElement("div", {
					className: "V7OX8"
				}, a ? s.createElement(i.Z, {
					className: "_6YSkj",
					color: "macaw",
					disabled: t,
					onClick: n,
					variant: "stroke"
				}, s.createElement("img", {
					className: "dGdSc",
					src: D
				})) : null, s.createElement(i.Z, {
					className: "ja403",
					color: "macaw",
					disabled: t,
					onClick: t => {
						(0,
							L.j6)("math_in_lesson_help_tts_web", "open_tree"),
							(0,
								O.track)("math_help_button_tap", {
									challenge_id: e,
									math_help_type: o,
									time_since_challenge_shown: Date.now() - l.current
								}),
							null == r || r(t)
					}
					,
					variant: "stroke"
				}, s.createElement("span", {
					className: "_1Tkn1"
				}, s.createElement("img", {
					className: "_26XoW",
					src: P
				}), s.createElement("span", {
					className: "_1Tn9Z"
				}, (0,
					T._i)(91797)))))
		}
			;
		var Z = a(95605)
			, z = a(17128)
			, U = a(57340);
		const G = ({ challenge: e, disabled: t, isMathHintAvailable: a, onCalculatorClick: n, onHelpClick: r, onLeftButtonClick: o }) => {
			const l = void 0 !== e.supportCenterInfo && "" !== e.supportCenterInfo && "experiment" === (0,
				L.j6)("math_in_lesson_support_web", "help_shown")
				, c = void 0 !== n && (0,
					Z.I)(e.challengeBlob.layout)
				, d = !l && a
				, u = s.useMemo((() => (0,
					z.K)((0,
						z.Y)(e.supportCenterInfo))), [e.supportCenterInfo]);
			return s.useEffect((() => {
				d && (0,
					A.Kq)(e.id)
			}
			), [e.id, d]),
				l ? s.createElement(M, {
					challengeId: e.id,
					disabled: t,
					isCalculatorAvailable: c,
					onCalculatorClick: n,
					onHelpClick: r,
					presentationStyle: u
				}) : c ? s.createElement(I.U, {
					disabled: t,
					isMathHintAvailable: a,
					onCalculatorClick: n,
					onLeftButtonClick: o,
					toolkitLabel: (0,
						U.l)("TOOLKIT")
				}) : a ? s.createElement(i.Z, {
					className: "_16QA-",
					color: "macaw",
					disabled: t,
					onClick: o,
					variant: "stroke"
				}, s.createElement("img", {
					className: "_1fQhS",
					src: P
				}), s.createElement("span", {
					className: "_32r0m"
				}, (0,
					U.l)("SHOW HINT"))) : null
		}
			;
		var B = a(42659);
		const H = a.p + "images/f754af1bf4bf03790cc2a70fe3c5a245.svg"
			, W = {
				_footer: "_1VTif",
				hidden: "VDy_T",
				"footer-bordered": "_3rB4d _1VTif",
				correct: "_3yMvO",
				orange: "_4KIe9",
				"orange-dynamic": "_2AN2v",
				"footer-unbordered": "_3FB5S _1VTif",
				incorrect: "_2cfV0",
				yellow: "_2mseZ",
				"_footer-content-container": "jHbiF",
				"footer-content-container": "U8jH3 jHbiF",
				"section-test-splash-footer-content-container": "_2GNO7 U8jH3 jHbiF",
				"unit-test-splash-footer-content-container": "_2YpiP U8jH3 jHbiF",
				"footer-right": "MYehf",
				"footer-left": "_3h0lA",
				"footer-center": "O5OXx",
				"footer-secondary": "w8goR",
				"blame-wrap": "_8wIx-",
				"blame-wrap-animated": "AXBVw _2Ycbe _8wIx-",
				"_button-large-solid": "_1QY-b",
				"_button-large-stroke": "_3fo6Q",
				"_footer-button": "_1CpJa",
				review: "_1itAk _3fo6Q _1CpJa",
				"secondary-button-blue": "_2XEEp _1QY-b _1CpJa",
				skip: "_2x7Co _3fo6Q",
				"skip-to-lesson": "_3M7FD _3fo6Q",
				"maybe-later": "_3Svtn _3fo6Q",
				"in-lesson-tip-button": "xipvq _3fo6Q",
				"in-lesson-tip-text": "NAMnb",
				"friends-quest-maybe-later": "_1Z5a5 _1CpJa",
				"math-hint-button": "_1rb3M _3fo6Q",
				"math-hint-icon": "mOqTC",
				"math-hint-text": "_1k6OJ",
				"light-bulb-logo": "_3mt_H",
				"show-me-how-correct": "_22qMf _3fo6Q _1CpJa",
				"show-me-how-incorrect": "_2noWf _3fo6Q _1CpJa"
			};
		var X, V = a(44637), Q = a(89260), Y = a(60491), q = a(6947), K = a(42340);
		!function (e) {
			e.GREEN = "green",
				e.RED = "red",
				e.YELLOW = "yellow",
				e.ORANGE = "orange",
				e.ORANGE_DYNAMIC = "orange-dynamic"
		}(X || (X = {}));
		const j = e => e.type === p.Sm.MathChallengeBlob
			, $ = ({ blameContent: e, buttonCenter: t, buttonLeft: a, buttonRight: n, className: i, isCorrect: l, ribbonColor: c, overrideContentClassName: d, secondaryButton: u, visibility: m = "visible" }) => {
				const p = (0,
					o.Z)();
				return s.createElement("div", {
					className: r()(void 0 === l ? W["footer-bordered"] : W["footer-unbordered"], c === X.YELLOW ? W.yellow : c === X.ORANGE ? W.orange : c === X.ORANGE_DYNAMIC ? W["orange-dynamic"] : !0 === l ? W.correct : !1 === l ? W.incorrect : void 0, {
						[W.hidden]: "hidden" === m
					}, i),
					id: Y.D
				}, s.createElement("div", {
					className: null != d ? d : W["footer-content-container"]
				}, a ? s.createElement("div", {
					className: W["footer-left"]
				}, a) : null, t ? s.createElement("div", {
					className: W["footer-center"]
				}, t) : null, e ? s.createElement("div", {
					className: W["blame-wrap" + (p ? "" : "-animated")]
				}, e) : null, u ? s.createElement("div", {
					className: W["footer-secondary"]
				}, u) : null, n ? s.createElement("div", {
					className: W["footer-right"]
				}, n) : null))
			}
			, J = ({ challenge: e, challengeState: t, className: a, challengeToggleState: n, coachDuoModel: r, currentCourse: o, currentSessionEndSlide: l, dispatch: c, inLessonTipAvailable: u, isDesktop: h, isGrammar: f, isMathHintAvailable: _, isSubmittable: k, isZombieMode: b, onCalculatorClick: E, onHelpClick: y, onLeftButtonClick: S, onNextButtonClick: C, onSessionStart: w, onShowMathGradingFeedbackClick: I, onShowInLessonTipClick: D, onSkipButtonClick: P, overrideRibbonColor: L, remount: M, session: Z, sessionParams: z, smartTip: U, status: Y, visibility: J = "visible" }) => {
				const ee = (0,
					N.Fx)(B.Al)
					, te = () => {
						var t, a, n, r, s, i;
						if (void 0 !== L) {
							if ("force-undefined" === L)
								return;
							return L
						}
						if (!0 === e.skipped && !0 === (null === (t = e.gradingResult) || void 0 === t ? void 0 : t.correct) || Y === d.c.SpeakRetryBlaming || Y === d.c.MathRetryBlaming)
							return X.YELLOW;
						const o = null === (a = e.gradingResult) || void 0 === a ? void 0 : a.guess;
						return !(0,
							K.uj)(o) || "suboptimal" !== (null === (n = o.gradingState) || void 0 === n ? void 0 : n.type) && "stalemate" !== (null === (r = o.gradingState) || void 0 === r ? void 0 : r.type) ? (0,
								K.Gu)(o) && "completed" === (null === (s = o.matchState) || void 0 === s ? void 0 : s.status) && "draw" === (null === (i = o.matchState) || void 0 === i ? void 0 : i.outcome) ? X.YELLOW : "streakExtended" === (null == l ? void 0 : l.type) && l.isEndOfPerfectWeek && !(0,
									q.pS)(l.streak) ? X.ORANGE : void 0 : X.YELLOW
					}
					, { blame: ae, correct: ne } = (({ challenge: e, currentCourse: t, dispatch: a, ribbonColor: n, sessionType: r, smartTip: i, status: o }) => {
						var l, c, u, m;
						switch (o) {
							case d.c.CharacterWriteRetryBlaming:
							case d.c.ChessRetryBlaming:
							case d.c.MathRetryBlaming:
							case d.c.MathSkipBlaming:
							case d.c.SmartTipBlaming:
							case d.c.SpeakRetryBlaming:
							case d.c.Blaming:
								{
									if (null === (l = null == e ? void 0 : e.gradingResult) || void 0 === l ? void 0 : l.multiStepIsDialogue)
										return {
											blame: null,
											correct: void 0
										};
									const p = o === d.c.SmartTipBlaming ? null === (c = null == i ? void 0 : i.gradingResult) || void 0 === c ? void 0 : c.correct : null === (u = null == e ? void 0 : e.gradingResult) || void 0 === u ? void 0 : u.correct
										, v = null !== (m = n()) && void 0 !== m ? m : p ? X.GREEN : X.RED;
									return {
										blame: s.createElement(g, {
											challenge: e,
											color: v,
											correct: !!p,
											currentCourse: t,
											dispatch: a,
											sessionType: r,
											smartTip: i,
											status: o
										}),
										correct: p
									}
								}
							default:
								return {
									blame: null,
									correct: void 0
								}
						}
					}
					)({
						challenge: e,
						currentCourse: o,
						dispatch: c,
						ribbonColor: te,
						sessionType: Z.type,
						smartTip: U,
						status: Y
					})
					, re = (({ challenge: e, challengeToggleState: t, isDesktop: a, isGrammar: n, status: r }) => {
						switch (r) {
							case d.c.SpeakRetryBlaming:
							case d.c.Blaming:
							case d.c.Grading:
							case d.c.Guessing:
							case d.c.Sliding:
								if (t.canToggleTyping) {
									const i = r !== d.c.Guessing;
									if (a && i || n)
										return null;
									switch (e.type) {
										case p.Sm.CompleteReverseTranslation:
										case p.Sm.ListenTap:
										case p.Sm.Translate:
											return s.createElement(F, {
												disabled: i,
												isToggledToTyping: t.isToggledToTyping,
												type: e.type === p.Sm.CompleteReverseTranslation ? "DIFFICULTY" : "KEYBOARD"
											});
										default:
											return null
									}
								}
								return null;
							default:
								return null
						}
					}
					)({
						challenge: e,
						challengeToggleState: n,
						isDesktop: h,
						isGrammar: f,
						status: Y
					})
					, se = Z ? (({ challenge: e, challengeState: t, currentSessionEndSlide: a, dispatch: n, inLessonTipAvailable: r, isDesktop: o, isMathHintAvailable: l, onCalculatorClick: c, onHelpClick: u, onLeftButtonClick: g, onSessionStart: v, onShowInLessonTipClick: h, onSkipButtonClick: f, session: _, sessionParams: k, status: b }) => {
						const E = s.createElement(i.Z, {
							className: W.review,
							onClick: () => {
								n({
									options: {
										name: m.t.SessionReview
									},
									type: "TOGGLE_MODAL"
								}),
									(0,
										O.track)("review_lesson_click", {
											target: "open"
										})
							}
							,
							variant: "stroke"
						}, (0,
							T._i)(19304))
							, y = s.createElement(i.Z, {
								className: W.review,
								onClick: () => {
									n({
										options: {
											name: m.t.DuoRadioTranscript
										},
										type: "TOGGLE_MODAL"
									}),
										(0,
											O.track)("duo_radio_episode_end", {
												action: "show_transcript"
											})
								}
								,
								variant: "stroke"
							}, (0,
								T._i)(48847));
						switch (b) {
							case d.c.EarnbackSplash:
								return s.createElement(i.Z, {
									className: W.skip,
									color: "macaw",
									onClick: g,
									variant: "stroke"
								}, (0,
									T._i)(20451));
							case d.c.CapstoneReviewSplash:
								return s.createElement(i.Z, {
									className: W["skip-to-lesson"],
									color: "macaw",
									onClick: g,
									variant: "text"
								}, (0,
									T._i)(17253));
							case d.c.EndCarousel:
								switch (null == a ? void 0 : a.type) {
									case "courseCompletionTrophy":
									case "dailyRefreshOnboarding":
									case "earlyStreakMilestonePrompt":
										return null;
									case "finalLevelFailed":
										return s.createElement(i.Z, {
											className: W.review,
											onClick: g,
											variant: "stroke"
										}, (0,
											T._i)(6821));
									case "friendsQuestComplete":
									case "friendsQuestGift":
									case "friendsQuestProgress":
										return "friendsQuestProgress" === a.type && 0 === a.attachedSlides.length ? null : s.createElement(i.Z, {
											className: W["friends-quest-maybe-later"],
											color: "macaw",
											onClick: g,
											variant: "stroke"
										}, (0,
											T._i)(17253));
									case "streakExtended":
										return a.isEndOfPerfectWeek ? null : "streakExtended" === a.type && a.showEarnbackOffer ? s.createElement(i.Z, {
											className: W.review,
											color: "macaw",
											...(0,
												x._q)(R.V.ContinueButton),
											onClick: g,
											variant: "stroke"
										}, (0,
											T._i)(4906)) : _.type === p.FF.DuoRadio && _.transcript ? y : !o || _.type === p.FF.DuoRadio || j(e) || (0,
												Q.M4)().includes(e.type) ? null : E;
									default:
										return _.type === p.FF.DuoRadio && _.transcript ? y : !o || _.type === p.FF.DuoRadio || j(e) || (0,
											Q.M4)().includes(e.type) ? null : E
								}
							case d.c.Blaming:
							case d.c.Grading:
							case d.c.Guessing:
							case d.c.Showing:
							case d.c.Sliding:
								{
									const a = b !== d.c.Guessing;
									if (o && a)
										return null;
									if (j(e))
										return s.createElement(G, {
											challenge: e,
											disabled: a,
											isMathHintAvailable: l,
											onCalculatorClick: c,
											onHelpClick: u,
											onLeftButtonClick: g
										});
									const n = (0,
										V.yn)({
											challenge: e,
											challengeState: t,
											isDesktop: o,
											session: _,
											sessionParams: k
										});
									return n ? s.createElement(i.Z, {
										...(0,
											x._q)(R.V.PlayerSkip),
										className: W.skip,
										disabled: a,
										onClick: f,
										variant: "stroke"
									}, (0,
										T._i)("cant-listen" === n ? 16837 : "cant-speak" === n ? 14082 : 12500)) : r && !k.isFinalLevel ? s.createElement(i.Z, {
											className: W["in-lesson-tip-button"],
											color: "macaw",
											disabled: a,
											onClick: h,
											variant: "stroke"
										}, s.createElement("img", {
											className: W["light-bulb-logo"],
											src: H
										}), s.createElement("span", {
											className: W["in-lesson-tip-text"]
										}, (0,
											T._i)(24742))) : null
								}
							case d.c.AlphabetTipSplash:
							case d.c.GrammarSkillSplash:
								return s.createElement(i.Z, {
									className: W["skip-to-lesson"],
									color: "macaw",
									onClick: () => {
										(0,
											O.track)("explanation_ad_cancel", {
												alphabet_id: k.alphabetId,
												is_grammar_skill: b === d.c.GrammarSkillSplash
											}),
											v()
									}
									,
									variant: "stroke"
								}, (0,
									T._i)(7058));
							case d.c.SectionTestSplash:
							case d.c.UnitTestSplash:
								return s.createElement(i.Z, {
									className: W["skip-to-lesson"],
									color: "macaw",
									onClick: g,
									variant: "text"
								}, (0,
									T._i)(17253));
							default:
								return null
						}
					}
					)({
						challenge: e,
						challengeState: t,
						currentSessionEndSlide: l,
						dispatch: c,
						inLessonTipAvailable: u,
						isDesktop: h,
						isMathHintAvailable: _,
						onCalculatorClick: E,
						onHelpClick: y,
						onLeftButtonClick: S,
						onSessionStart: w,
						onShowInLessonTipClick: D,
						onSkipButtonClick: P,
						session: Z,
						sessionParams: z,
						status: Y
					}) : null
					, ie = (() => {
						if (!Z)
							return W["footer-content-container"];
						switch (Z.type) {
							case p.FF.SectionTest:
								return Y === d.c.SectionTestSplash ? W["section-test-splash-footer-content-container"] : W["footer-content-container"];
							case p.FF.UnitTest:
								return Y === d.c.UnitTestSplash ? W["unit-test-splash-footer-content-container"] : W["footer-content-container"];
							default:
								return W["footer-content-container"]
						}
					}
					)()
					, oe = s.useRef(!1);
				s.useEffect((() => {
					oe.current = !1
				}
				), [e.id]);
				const le = Z ? (({ challenge: e, hasTrackedEmaButtonShowRef: t, isDesktop: a, isEarnback: n, isZombieMode: r, onShowMathGradingFeedbackClick: o, remount: l, session: c, status: u }) => {
					var m, g;
					switch (u) {
						case d.c.MathSkipBlaming:
						case d.c.Blaming:
							if (j(e)) {
								const a = null === (m = e.gradingResult) || void 0 === m ? void 0 : m.longFormFeedbackData
									, n = null === (g = e.gradingResult) || void 0 === g ? void 0 : g.correct;
								if (a) {
									const a = {
										challengeId: e.id,
										isMistake: !n,
										trackingMetadata: e.trackingMetadata
									};
									return t.current || (t.current = !0,
										(0,
											A.r_)(a)),
										s.createElement(i.Z, {
											className: W["show-me-how-" + (n ? "correct" : "incorrect")],
											onClick: () => {
												(0,
													A.eS)(a),
													o()
											}
											,
											variant: "stroke"
										}, (0,
											T._i)(71292))
								}
							}
							return null;
						case d.c.EndCarousel:
							return a && !r && c && c.type === p.FF.GlobalPractice && !n ? s.createElement(i.Z, {
								...(0,
									x._q)(R.V.PlayerPracticeAgain),
								className: W["secondary-button-blue"],
								onClick: () => {
									(0,
										O.track)("click", {
											which: "practice_again"
										}),
										l()
								}
								,
								variant: "solid"
							}, (0,
								T._i)(18109)) : null;
						default:
							return null
					}
				}
				)({
					challenge: e,
					hasTrackedEmaButtonShowRef: oe,
					isDesktop: h,
					isEarnback: void 0 !== ee,
					isZombieMode: b,
					onSessionStart: w,
					onShowMathGradingFeedbackClick: I,
					remount: M,
					session: Z,
					status: Y
				}) : null
					, ce = Z ? s.createElement(v.a, {
						coachDuoModel: r,
						color: te() ? X.YELLOW : !1 === ne ? X.RED : X.GREEN,
						currentSessionEndSlide: l,
						isSubmittable: k,
						onClick: C,
						overrideRibbonColor: L,
						smartTip: U,
						status: Y
					}) : null;
				return s.createElement($, {
					blameContent: ae,
					buttonCenter: re,
					buttonLeft: se,
					buttonRight: ce,
					className: a,
					isCorrect: ne,
					overrideContentClassName: ie,
					ribbonColor: te(),
					secondaryButton: le,
					visibility: J
				})
			}
	}
	,
	38545: (e, t, a) => {
		a.r(t),
			a.d(t, {
				RewardChestColor: () => h,
				RewardChestType: () => v,
				default: () => _
			});
		var n = a(27378);
		const r = a.p + "images/e24e558f1c2e03b78a80522be3658159.svg"
			, s = a.p + "images/2b88e438f360ff8bac3121e45010b3ef.svg";
		var i = a(76701);
		const o = a.p + "images/gems/81f3a296e215c820133be60f7d445f26.svg"
			, l = a.p + "images/gems/9629b1f0a8d35fe1d585c8629f259890.svg"
			, c = a.p + "images/gems/e937c1d5a3b45aad017590b4c0e8364c.svg"
			, d = a.p + "rive/0f84cce638f7433b19639b53472888a8.riv";
		var u = a(68903)
			, m = a(58576)
			, p = a(14817);
		const g = "SM_GemChest_Basic";
		var v, h;
		!function (e) {
			e[e.EMPTY = 0] = "EMPTY",
				e[e.LINGOTS = 1] = "LINGOTS",
				e[e.GEMS = 2] = "GEMS",
				e[e.XP_BOOST = 3] = "XP_BOOST",
				e[e.STREAK_FREEZE = 4] = "STREAK_FREEZE",
				e[e.DOUBLE_STREAK_FREEZE = 5] = "DOUBLE_STREAK_FREEZE"
		}(v || (v = {})),
			function (e) {
				e[e.BRONZE = 0] = "BRONZE",
					e[e.SILVER = 1] = "SILVER",
					e[e.GOLD = 2] = "GOLD"
			}(h || (h = {}));
		const f = (e, t) => {
			switch (t) {
				case v.GEMS:
					switch (e) {
						case h.BRONZE:
							return o;
						case h.SILVER:
							return c;
						case h.GOLD:
							return l;
						default:
							return (0,
								u.RJ)(e),
								l
					}
				case v.STREAK_FREEZE:
					switch (e) {
						case h.BRONZE:
							return s;
						case h.GOLD:
							return r;
						default:
							return (0,
								m.Kp)("No fallback found for rive chest", {
									data: {
										color: e,
										type: t
									},
									once: !0
								}),
								r
					}
				case v.XP_BOOST:
					return e === h.GOLD || (0,
						m.Kp)("No fallback found for rive chest", {
							data: {
								color: e,
								type: t
							},
							once: !0
						}),
						i;
				default:
					return (0,
						m.Kp)("No fallback found for rive chest", {
							data: {
								color: e,
								type: t
							},
							once: !0
						}),
						l
			}
		}
			, _ = ({ color: e, isOpening: t, onChestReady: a, prefersReducedMotion: r, rewardType: s }) => {
				const { RiveComponent: i, rive: o } = (0,
					p.useRive)({
						artboard: "GemChest",
						autoplay: !0,
						layout: new p.Layout({
							alignment: p.Alignment.TopCenter,
							fit: p.Fit.Contain
						}),
						onStateChange: e => {
							Array.isArray(e.data) && e.data.includes("Chest_Animation_START") && (null == a || a())
						}
						,
						src: d,
						stateMachines: g
					})
					, l = (0,
						p.useStateMachineInput)(o, g, "open");
				return (0,
					p.useStateMachineInput)(o, g, "Chest_MetalColor", e),
					(0,
						p.useStateMachineInput)(o, g, "Chest_RewardType", s),
					n.useLayoutEffect((() => {
						t && (null == l || l.fire())
					}
					), [t]),
					r ? n.createElement("img", {
						className: "_2QgBA",
						src: f(e, s)
					}) : n.createElement(i, null)
			}
	}
	,
	38387: (e, t, a) => {
		a.d(t, {
			n: () => ie,
			Z: () => oe
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(80254)
			, o = a(64502)
			, l = a(22498)
			, c = a(6782)
			, d = a(15746)
			, u = a(28501)
			, m = a(90895)
			, p = a(43029)
			, g = a(40456);
		const v = {
			"side-star": "zwoD4",
			"star-0": "_3uv3R zwoD4",
			"star-1": "_3XCGI",
			"star-2": "_3VRMg zwoD4"
		}
			, h = ({ matchStars: e }) => {
				const t = "dark" === (0,
					o.Fg)();
				return s.createElement("div", null, (0,
					i.DZ)(3, (a => s.createElement("img", {
						className: r()(v.star, v[`star-${a}`]),
						key: a,
						src: a < e ? t ? p : g : t ? u : m
					}))))
			}
			;
		var f = a(42659);
		const _ = a.p + "images/icons/9ace13520a375f5661415ff7d470f243.svg";
		var k = a(21778);
		const b = a.p + "images/icons/4f591e24f5c8b5e4411fc66e2af4dd16.svg"
			, E = a.p + "images/icons/22374ccb0eddb1425a4c11b2bef1bcc8.svg"
			, y = a.p + "images/icons/6ec44f331f5eb4c68e57cd7874332c6c.svg"
			, S = a.p + "images/icons/db8690b9819fbf836887442f130e3641.svg"
			, C = a.p + "images/icons/1c76664edfc0acb1d01183db9a6f7ca4.svg"
			, w = a.p + "lottie/sessionEnd/4eaa0aaabd6a29a0fb66f091b7b573b0.json"
			, x = a.p + "lottie/sessionEnd/8de1591bf90781e606b64859060729e3.json"
			, R = a.p + "lottie/sessionEnd/9d912da7e10a9ae9a39e5562224cd710.json"
			, T = a.p + "lottie/sessionEnd/29577d79499288cf3f21a9fed045d055.json"
			, N = a.p + "lottie/sessionEnd/02218ef5b515ab654caf5f800139e287.json"
			, F = a.p + "lottie/sessionEnd/420f91aab8058bdfa6b8e6df23cf777b.json"
			, I = a.p + "lottie/sessionEnd/d7a171566382b5daa0a992087a19b58d.json"
			, D = a.p + "lottie/sessionEnd/68a30cf365cfc1525ebfa9cd6104fba9.json"
			, P = a.p + "lottie/sessionEnd/70afcd2abb7c0dbd6f51364ef3113ca3.json"
			, L = a.p + "lottie/sessionEnd/554b86a49516cd82283865cc8115331a.json";
		var A = a(75073);
		const O = {
			animation: "IAONV",
			"animation-match": "_3Pa1o",
			header: "_3dwfW",
			title: "_3z6AH",
			accolade: "_2EXpj",
			"stat-item": "_23WOw",
			"stat-item-crowded": "DQQbP",
			"stat-item-invisible": "_3p1TI _23WOw",
			"stat-item-background-accuracy": "_52uc9",
			"stat-item-background-move-in": "_1XPDD",
			"stat-item-inner-accuracy": "uiOhM",
			"stat-item-inner-accuracy-scale-in": "_24lbB",
			"stat-item-background-time": "_27CoB",
			"stat-item-inner-time": "_2f4A8",
			"stat-item-inner-time-scale-in": "_3zrx6",
			"stat-item-background-xp": "_3IRrf",
			"stat-item-background-xp-boost": "_2IhSJ",
			"stat-item-inner-xp": "_5KPRI",
			"stat-item-inner-xp-scale-in": "_21BxP",
			"stat-item-inner-xp-boost": "_2_GKE",
			"stat-item-background-matches": "_36aXx",
			"stat-item-inner-matches": "_2c6u3",
			"stat-item-inner-matches-scale-in": "_2f6G9",
			"stat-item-background-chess-matches": "_33C3y",
			"stat-item-inner-chess-matches": "_2O_yN",
			"stat-item-inner-elo-scale-in": "_316Ig",
			"match-animation-container": "_2M2Cf",
			"stat-container": "_21KAg",
			"stat-description": "d8ITn",
			"stat-description-move-in": "_3WCjQ",
			"stat-icon": "_1F1Qc",
			"stat-icon-big-gap": "_3DJ9E",
			"xp-icon": "_35hcT _3DJ9E"
		};
		var M = a(50498)
			, Z = a(30033)
			, z = a(68903)
			, U = a(95940);
		const G = [{
			subtitle: (0,
				U._i)(69644),
			title: (0,
				U._i)(69643)
		}, {
			subtitle: (0,
				U._i)(69646),
			title: (0,
				U._i)(69645)
		}, {
			subtitle: (0,
				U._i)(69648),
			title: (0,
				U._i)(69647)
		}, {
			subtitle: (0,
				U._i)(69650),
			title: (0,
				U._i)(69649)
		}]
			, B = [{
				subtitle: (0,
					U._i)(63813),
				title: (0,
					U._i)(67761)
			}]
			, H = e => [...void 0 === e ? [{
				subtitle: (0,
					U._i)(69604),
				title: (0,
					U._i)(69603)
			}, {
				subtitle: (0,
					U._i)(69608),
				title: (0,
					U._i)(69607)
			}, {
				subtitle: (0,
					U._i)(69610),
				title: (0,
					U._i)(69609)
			}] : [{
				subtitle: (0,
					U._i)(72817),
				title: (0,
					U._i)(72816)
			}, {
				subtitle: (0,
					U._i)(72818),
				title: (0,
					U._i)(69607)
			}, {
				subtitle: (0,
					U._i)(72819, {
						name: e
					}),
				title: (0,
					U._i)(69609)
			}], {
				subtitle: (0,
					U._i)(69606),
				title: (0,
					U._i)(69605)
			}];
		var W = a(75110)
			, X = a(451)
			, V = a(67173)
			, Q = a(76530)
			, Y = a(58576)
			, q = a(23275)
			, K = a(8523)
			, j = a(18804)
			, $ = a(11811)
			, J = a(42340)
			, ee = a(97106);
		const te = [{
			loopSegment: [168, 267],
			path: w,
			stillFrame: 168
		}, {
			loopSegment: [247, 333],
			path: x,
			stillFrame: 243
		}, {
			loopSegment: [164, 324],
			path: T,
			stillFrame: 163
		}, {
			loopSegment: [285, 445],
			path: N,
			stillFrame: 260
		}, {
			loopSegment: [135, 380],
			path: F,
			stillFrame: 150
		}, {
			loopSegment: [144, 307],
			path: I,
			stillFrame: 188
		}, {
			loopSegment: [57, 330],
			path: D,
			stillFrame: 83
		}, {
			loopSegment: [265, 400],
			path: P,
			stillFrame: 232
		}, {
			loopSegment: [220, 325],
			path: L,
			stillFrame: 243
		}];
		var ae;
		!function (e) {
			e[e.READY = 0] = "READY",
				e[e.BASE_XP = 1] = "BASE_XP",
				e[e.BONUS_XP = 2] = "BONUS_XP",
				e[e.BOOST_XP = 3] = "BOOST_XP",
				e[e.ACCURACY = 4] = "ACCURACY",
				e[e.MATCHES = 5] = "MATCHES",
				e[e.CHESS_MATCHES = 6] = "CHESS_MATCHES",
				e[e.CHESS_ELO = 7] = "CHESS_ELO",
				e[e.FINISHED = 100] = "FINISHED"
		}(ae || (ae = {}));
		const ne = 900
			, re = 300
			, se = {
				animation: "none"
			}
			, ie = ({ accoladeSubtitle: e, accoladeTitle: t, accuracy: a, bonusXp: n, chessElo: u, chessMatches: m, hasXpBoost: p, isDisplayed: g, matches: v, matchStars: w, sessionType: x, sessionXp: T, subtitle: N, title: F }) => {
				const I = (0,
					d.Z)()
					, D = "dark" === (0,
						o.Fg)()
					, [P, L] = s.useState(I ? ae.FINISHED : ae.READY)
					, [z] = s.useState(te[Math.floor(Math.random() * te.length)])
					, G = T
					, B = p ? G / ee.K3 : G
					, H = B - Math.max(n, 0)
					, X = (0,
						j.CC)()
					, Q = s.useRef(0);
				Q.current += 1,
					s.useEffect((() => {
						"number" == typeof G && "number" == typeof H && "number" == typeof B && G >= 0 && H >= 0 && B >= 0 || (0,
							Y.Kp)("Invalid XP gain values shown on session end", {
								data: {
									animationState: P,
									bonusXp: n,
									hasXpBoost: p,
									player: i.ei((0,
										f.lA)(X.getState()), "enableBonusPoints", "endedEarly", "partialXpGiven"),
									renderCount: Q.current,
									session: i.ei((0,
										f.is)(X.getState()), "id", "type"),
									xpGain: G,
									xpGainWithoutBonus: H,
									xpGainWithoutBoost: B
								},
								once: !0
							})
					}
					));
				const q = (0,
					W.Ar)({
						type: x
					})
					, K = x === $.FF.MathMatchPractice;
				s.useEffect((() => {
					const e = new AbortController;
					let t = P;
					return g && (async () => {
						t === ae.READY && (t = ae.BASE_XP,
							L(ae.BASE_XP));
						const a = void 0 === m ? void 0 === u ? ae.FINISHED : ae.CHESS_ELO : ae.CHESS_MATCHES
							, r = q ? a : ae.ACCURACY;
						if (t === ae.BASE_XP)
							if (n > 0) {
								if (await (0,
									M._v)(900),
									e.signal.aborted)
									return;
								t = ae.BONUS_XP,
									L(ae.BONUS_XP)
							} else {
								if (await (0,
									M._v)(p ? 900 : ne),
									e.signal.aborted)
									return;
								t = p ? ae.BOOST_XP : r,
									L(t)
							}
						if (t === ae.BONUS_XP) {
							if (await (0,
								M._v)(p ? 650 : 1050),
								e.signal.aborted)
								return;
							t = p ? ae.BOOST_XP : r,
								L(t)
						}
						if (t === ae.BOOST_XP) {
							if (await (0,
								M._v)(1050),
								e.signal.aborted)
								return;
							t = r,
								L(t)
						}
						if (t === ae.ACCURACY) {
							if (await (0,
								M._v)(ne),
								e.signal.aborted)
								return;
							t = void 0 === v ? ae.FINISHED : ae.MATCHES,
								L(t)
						}
						if (t === ae.MATCHES) {
							if (await (0,
								M._v)(ne),
								e.signal.aborted)
								return;
							t = ae.FINISHED,
								L(t)
						}
						if (t === ae.CHESS_MATCHES) {
							if (await (0,
								M._v)(ne),
								e.signal.aborted)
								return;
							t = void 0 === m ? ae.FINISHED : ae.CHESS_ELO,
								L(t)
						}
						if (t === ae.CHESS_ELO) {
							if (await (0,
								M._v)(ne),
								e.signal.aborted)
								return;
							t = ae.FINISHED,
								L(t)
						}
					}
					)(),
						() => e.abort()
				}
				), [g]);
				const J = a < 85 ? (0,
					U._i)(10174) : a < 90 ? (0,
						U._i)(18235) : a < 100 ? (0,
							U._i)(11684) : (0,
								U._i)(42030)
					, ie = (0,
						U.H8)(29158, {
							percent: a
						})
					, oe = (0,
						U.H8)(29158, {
							percent: Array(a.toString().length).fill("0").join("")
						})
					, le = I ? se : {}
					, ce = G.toString().length - H.toString().length
					, de = p && P >= ae.BOOST_XP
					, ue = K || q;
				return s.createElement("div", {
					className: r()(A.Z.slide, O.slide)
				}, s.createElement("div", {
					...(0,
						Z._q)(V.V.SessionCompleteSlide)
				}, void 0 === w ? s.createElement(s.Suspense, {
					fallback: null
				}, s.createElement(l.Z, {
					className: O.animation,
					isPlaying: g && !I,
					loop: !0,
					loopSegment: z.loopSegment,
					mainSegment: I ? [z.stillFrame, z.loopSegment[1]] : void 0,
					path: z.path
				})) : s.createElement("div", {
					className: O["match-animation-container"]
				}, s.createElement(s.Suspense, {
					fallback: null
				}, s.createElement(h, {
					matchStars: w
				}), s.createElement(l.Z, {
					className: O["animation-match"],
					isPlaying: g && !I,
					loop: !0,
					path: R
				})))), s.createElement("div", {
					className: O.header
				}, s.createElement("div", {
					className: O.title
				}, null != t ? t : F), (null != e ? e : N) ? s.createElement("div", {
					className: O.accolade
				}, null != e ? e : N) : null), s.createElement("div", {
					className: O["stat-container"]
				}, P >= ae.BASE_XP ? s.createElement("div", {
					className: r()(O["stat-item"], ue && O["stat-item-crowded"])
				}, s.createElement("div", {
					className: O[de ? "stat-item-background-xp-boost" : "stat-item-background-xp"],
					style: {
						animationDelay: n > 0 || p ? "900ms" : "0",
						...le
					}
				}), s.createElement("div", {
					className: O["stat-description"],
					style: le
				}, n > 0 && P < ae.BOOST_XP ? (0,
					U._i)(36099) : p && P < ae.ACCURACY ? (0,
						U._i)(36100) : (0,
							U._i)(3372)), s.createElement("div", {
								className: O[de ? "stat-item-inner-xp-boost" : "stat-item-inner-xp"],
								style: le
							}, s.createElement("img", {
								className: O["xp-icon"],
								src: k,
								style: {
									display: de ? "none" : void 0
								}
							}), s.createElement("img", {
								className: O["xp-icon"],
								src: C,
								style: {
									display: de ? void 0 : "none"
								}
							}), n > 0 && P < ae.BONUS_XP ? s.createElement(c.Z, {
								animationDelay: 250,
								animationDuration: re,
								initialValue: "0",
								key: 0,
								numLeadingSpaces: ce,
								prefersReducedMotion: I,
								result: H.toString(),
								rtl: U.lw
							}) : p && P < ae.BOOST_XP ? s.createElement(c.Z, {
								animationDelay: n > 0 ? 0 : 250,
								animationDuration: re,
								initialValue: n > 0 ? H.toString() : "0",
								key: 1,
								prefersReducedMotion: I,
								result: B.toString(),
								rtl: U.lw
							}) : s.createElement(c.Z, {
								animationDelay: n > 0 || p ? 0 : 250,
								animationDuration: re,
								initialValue: p ? B.toString() : n > 0 ? H.toString() : "0",
								key: 2,
								prefersReducedMotion: I,
								result: G.toString(),
								rtl: U.lw
							}))) : null, !q && P >= ae.ACCURACY ? s.createElement("div", {
								className: r()(O["stat-item"], ue && O["stat-item-crowded"])
							}, s.createElement("div", {
								className: O["stat-item-background-accuracy"],
								style: le
							}), s.createElement("div", {
								className: O["stat-description"],
								style: le
							}, J), s.createElement("div", {
								className: O["stat-item-inner-accuracy"],
								style: le
							}, s.createElement("img", {
								className: O["stat-icon"],
								src: _
							}), s.createElement(c.Z, {
								animationDuration: re,
								initialValue: oe,
								prefersReducedMotion: I,
								result: ie,
								rtl: U.lw
							}))) : q ? null : s.createElement("div", {
								className: O["stat-item-invisible"]
							}), !q && void 0 !== v && P >= ae.MATCHES ? s.createElement("div", {
								className: r()(O["stat-item"], ue && O["stat-item-crowded"])
							}, s.createElement("div", {
								className: O["stat-item-background-matches"],
								style: le
							}), s.createElement("div", {
								className: O["stat-description"],
								style: le
							}, (0,
								U._i)(48687)), s.createElement("div", {
									className: O["stat-item-inner-matches"],
									style: le
								}, s.createElement("img", {
									className: O["stat-icon"],
									src: D ? y : S
								}), s.createElement(c.Z, {
									animationDuration: re,
									initialValue: "0",
									prefersReducedMotion: I,
									result: v.toString(),
									rtl: U.lw
								}))) : q || void 0 === v ? null : s.createElement("div", {
									className: O["stat-item-invisible"]
								}), q && void 0 !== m && P >= ae.CHESS_MATCHES ? s.createElement("div", {
									className: r()(O["stat-item"], O["stat-item-crowded"])
								}, s.createElement("div", {
									className: O["stat-item-background-chess-matches"],
									style: le
								}), s.createElement("div", {
									className: O["stat-description"],
									style: le
								}, (0,
									U._i)(48687)), s.createElement("div", {
										className: O["stat-item-inner-chess-matches"],
										style: le
									}, s.createElement("img", {
										className: O["stat-icon-big-gap"],
										src: b
									}), s.createElement(c.Z, {
										animationDuration: re,
										initialValue: "0",
										prefersReducedMotion: I,
										result: m.toString(),
										rtl: U.lw
									}))) : null, q && "number" == typeof u && P >= ae.CHESS_ELO ? s.createElement("div", {
										className: r()(O["stat-item"], O["stat-item-crowded"])
									}, s.createElement("div", {
										className: O["stat-item-background-accuracy"],
										style: le
									}), s.createElement("div", {
										className: O["stat-description"],
										style: le
									}, (0,
										U._i)(66499)), s.createElement("div", {
											className: O["stat-item-inner-accuracy"],
											style: le
										}, s.createElement("img", {
											className: O["stat-icon-big-gap"],
											src: E
										}), s.createElement(c.Z, {
											animationDuration: re,
											initialValue: "0",
											prefersReducedMotion: I,
											result: u.toString(),
											rtl: U.lw
										}))) : q && void 0 !== u ? s.createElement("div", {
											className: O["stat-item-invisible"]
										}) : null))
			}
			, oe = ({ isDisplayed: e, player: { challengeStates: t, chessEloRating: a, chessMatchCount: n, levelData: r, matchMadnessMatchesCompleted: o, session: l, session: { challenges: c, endTime: d, failed: u, startTime: m, type: p, sessionContext: g }, sessionTime: v }, user: h, xpSessionProgress: { bonusXp: _, hasXpBoost: k, totalXpThisSession: b } }) => {
				var E;
				const y = (0,
					j.Fx)(f.Al)
					, S = (0,
						j.Fx)(f.Oz)
					, C = "chess" === (null == S ? void 0 : S.subject)
					, w = (() => {
						if (p === $.FF.DuoRadio)
							return (0,
								X.a1)(l);
						if (p === $.FF.MathMatchPractice) {
							const e = (0,
								K.U2)(c);
							return 0 === e ? 0 : Math.round(o / e * 100)
						}
						return C ? (0,
							K.ZM)(c) : void 0 === y ? (0,
								K.sG)(c, t) : Math.round(y.numChallengesCorrect / y.totalChallenges * 100)
					}
					)()
					, x = null !== (E = null == y ? void 0 : y.totalXp) && void 0 !== E ? E : b
					, R = Math.floor(v > 0 ? v : d - m)
					, [[T, N]] = s.useState((() => {
						var e, t, a;
						if (p === $.FF.LexemePractice && "lexeme" === (null == g ? void 0 : g.contextType) && (null === (e = null == g ? void 0 : g.focusedLexemes) || void 0 === e ? void 0 : e.length) > 0)
							return [(0,
								U._i)(46781), (0,
									U._i)(46784, {
										num: g.focusedLexemes.length
									})];
						if (p === $.FF.LexemePractice && "grammar" === (null == g ? void 0 : g.contextType))
							return [(0,
								U._i)(48384), (0,
									U._i)(48265)];
						if (100 === w)
							return [(0,
								U._i)(9211), (0,
									U._i)(40104)];
						const n = [];
						R < 120 ? n.push([(0,
							U._i)(40095), (0,
								U._i)(40102, {
									num: Math.ceil(R / 60)
								})]) : R > 420 && n.push([(0,
									U._i)(40096), (0,
										U._i)(40103, {
											num: Math.floor(R / 60)
										})]);
						const r = (0,
							K.dM)(c);
						r >= 3 && n.push([(0,
							U._i)(40097), (0,
								U._i)(40105, {
									num: r
								})]),
							x >= 30 && n.push([(0,
								U._i)(40098), (0,
									U._i)(40106, {
										num: x
									})]);
						const s = (0,
							K.tJ)(c);
						s >= 3 && n.push([(0,
							U._i)(40099), (0,
								U._i)(40107, {
									num: s
								})]);
						const i = p === $.FF.DuoRadio ? null !== (a = null === (t = l.duoRadioChallengeStats) || void 0 === t ? void 0 : t.numListenChallengesCorrect) && void 0 !== a ? a : 0 : (0,
							K.Ok)(c);
						i >= 3 && n.push([(0,
							U._i)(40100), (0,
								U._i)(40108, {
									num: i
								})]);
						const o = (0,
							K.EW)(p, c);
						return o >= 6 && n.push([(0,
							U._i)(40101), (0,
								U._i)(40109, {
									num: o
								})]),
							0 === n.length ? [void 0, void 0] : n[Math.floor(Math.random() * n.length)]
					}
					)())
					, F = p === $.FF.MathMatchPractice
					, I = F ? (0,
						K.Qn)(p, c) : void 0
					, D = F ? o : void 0
					, P = (0,
						W.Ar)({
							type: p
						})
					, L = P && void 0 !== n ? n + 1 : void 0
					, A = P ? a : void 0
					, O = (() => {
						var e;
						if (!P)
							return;
						const a = c.findIndex((e => (0,
							W.ZN)(e.type)));
						if (a < 0)
							return;
						const n = null === (e = t[a]) || void 0 === e ? void 0 : e.guess;
						return (0,
							J.Gu)(n) && "completed" === n.matchState.status ? n.matchState : void 0
					}
					)()
					, M = (0,
						Q.Z)((() => {
							if (p !== $.FF.ChessPvpMatch || void 0 === O)
								return;
							const e = c.find((e => e.type === $.Sm.ChessPvpMatch))
								, t = void 0 === (null == e ? void 0 : e.inviteTimestamp) ? void 0 : e.opponentDisplayName;
							return ((e, t) => {
								const a = ((e, t, a) => {
									switch (e) {
										case "win":
											return "timeout" === t ? [...void 0 === (n = a) ? [{
												subtitle: (0,
													U._i)(69652),
												title: (0,
													U._i)(69651)
											}, {
												subtitle: (0,
													U._i)(69656),
												title: (0,
													U._i)(69655)
											}, {
												subtitle: (0,
													U._i)(69658),
												title: (0,
													U._i)(69657)
											}] : [{
												subtitle: (0,
													U._i)(72802, {
														name: n
													}),
												title: (0,
													U._i)(69651)
											}, {
												subtitle: (0,
													U._i)(72803, {
														name: n
													}),
												title: (0,
													U._i)(69655)
											}, {
												subtitle: (0,
													U._i)(72804, {
														name: n
													}),
												title: (0,
													U._i)(69657)
											}], {
												subtitle: (0,
													U._i)(69654),
												title: (0,
													U._i)(69653)
											}] : (e => [{
												subtitle: (0,
													U._i)(69570),
												title: (0,
													U._i)(69569)
											}, {
												subtitle: (0,
													U._i)(69572),
												title: (0,
													U._i)(69571)
											}, {
												subtitle: (0,
													U._i)(69574),
												title: (0,
													U._i)(69573)
											}, {
												subtitle: (0,
													U._i)(69576),
												title: (0,
													U._i)(69575)
											}, {
												subtitle: (0,
													U._i)(69582),
												title: (0,
													U._i)(69581)
											}, {
												subtitle: (0,
													U._i)(69584),
												title: (0,
													U._i)(69583)
											}, ...void 0 === e ? [{
												subtitle: (0,
													U._i)(69566),
												title: (0,
													U._i)(69565)
											}, {
												subtitle: (0,
													U._i)(69568),
												title: (0,
													U._i)(69567)
											}, {
												subtitle: (0,
													U._i)(69578),
												title: (0,
													U._i)(69577)
											}, {
												subtitle: (0,
													U._i)(69580),
												title: (0,
													U._i)(69579)
											}] : [{
												subtitle: (0,
													U._i)(69566),
												title: (0,
													U._i)(72805, {
														name: e
													})
											}, {
												subtitle: (0,
													U._i)(72806, {
														name: e
													}),
												title: (0,
													U._i)(69579)
											}, {
												subtitle: (0,
													U._i)(72808),
												title: (0,
													U._i)(72807, {
														name: e
													})
											}, {
												subtitle: (0,
													U._i)(72810, {
														name: e
													}),
												title: (0,
													U._i)(72809)
											}]])(a);
										case "loss":
											switch (t) {
												case "timeout":
													return G;
												case "resignation":
													return B;
												default:
													return (e => [{
														subtitle: (0,
															U._i)(69586),
														title: (0,
															U._i)(69585)
													}, {
														subtitle: (0,
															U._i)(69588),
														title: (0,
															U._i)(69587)
													}, {
														subtitle: (0,
															U._i)(69592),
														title: (0,
															U._i)(69591)
													}, {
														subtitle: (0,
															U._i)(69594),
														title: (0,
															U._i)(69593)
													}, {
														subtitle: (0,
															U._i)(69598),
														title: (0,
															U._i)(69597)
													}, {
														subtitle: (0,
															U._i)(69602),
														title: (0,
															U._i)(69601)
													}, ...void 0 === e ? [{
														subtitle: (0,
															U._i)(69590),
														title: (0,
															U._i)(69589)
													}, {
														subtitle: (0,
															U._i)(69596),
														title: (0,
															U._i)(69595)
													}, {
														subtitle: (0,
															U._i)(69600),
														title: (0,
															U._i)(69599)
													}] : [{
														subtitle: (0,
															U._i)(69590),
														title: (0,
															U._i)(72811, {
																name: e
															})
													}, {
														subtitle: (0,
															U._i)(72813),
														title: (0,
															U._i)(72812, {
																name: e
															})
													}, {
														subtitle: (0,
															U._i)(72815),
														title: (0,
															U._i)(72814, {
																name: e
															})
													}]])(a)
											}
										case "draw":
											return H(a);
										default:
											return (0,
												z.RJ)(e),
												H(a)
									}
									var n
								}
								)(e.outcome, e.endCondition, t);
								return a[Math.floor(Math.random() * a.length)]
							}
							)(O, t)
						}
						), [])
					, Z = (() => {
						var e;
						switch (p) {
							case $.FF.AlphabetLesson:
							case $.FF.AlphabetPractice:
							case $.FF.ChessLesson:
							case $.FF.ChessSession:
							case $.FF.ChessPuzzles:
							case $.FF.ChessUnitReview:
							case $.FF.ChessSkill:
							case $.FF.Lesson:
							case $.FF.MathLesson:
							case $.FF.MathMultiStepLesson:
							case $.FF.MathPractice:
							case $.FF.DuoRadio:
							case $.FF.Placement:
							case $.FF.Story:
								return (0,
									q.Wc)(null == r ? void 0 : r.level.state) ? (0,
										U._i)(20820) : (0,
											U._i)(24338);
							case $.FF.ChessMatch:
								return (0,
									U._i)(63814);
							case $.FF.ChessPvpMatch:
								return null !== (e = null == M ? void 0 : M.title) && void 0 !== e ? e : (0,
									U._i)(63814);
							case $.FF.ChessGlobalPractice:
							case $.FF.ChessPractice:
							case $.FF.GlobalPractice:
							case $.FF.LexemeSkillLevelPractice:
							case $.FF.ListeningPractice:
							case $.FF.MathGlobalPractice:
							case $.FF.MathSkillPractice:
							case $.FF.MistakesReview:
							case $.FF.SpeakingPractice:
							case $.FF.SpecifiedMatchPractice:
							case $.FF.TargetPractice:
							case $.FF.UnitRewind:
								return (0,
									U._i)(20820);
							case $.FF.Legendary:
							case $.FF.LegendaryLevel:
							case $.FF.LegendaryLexemePractice:
							case $.FF.LegendaryUnitPractice:
							case $.FF.UnitReview:
							case $.FF.MathUnitReview:
								return (0,
									U._i)(14273);
							case $.FF.LevelReview:
							case $.FF.LexemePractice:
							case $.FF.SpacedRepetition:
							case $.FF.UnitPractice:
								return r && (0,
									q.$)(r.level) ? (0,
										U._i)(14273) : (0,
											q.Wc)(null == r ? void 0 : r.level.state) ? (0,
												U._i)(20820) : (0,
													U._i)(24338);
							case $.FF.SectionTest:
							case $.FF.ChessSectionTest:
								if (u)
									throw Error("Attempting to show session complete slide for Section Test");
								return (0,
									U._i)(3923);
							case $.FF.UnitTest:
							case $.FF.ChessUnitTest:
								if (u)
									throw Error("Attempting to show session complete slide for CheckpointTest in v2");
								return (0,
									U._i)(3923);
							case $.FF.MathMatchPractice:
								switch (I) {
									case 0:
										return (0,
											U._i)(48273);
									case 1:
									case 2:
									case 3:
										return (0,
											U._i)(48274, {
												num: I
											});
									default:
										throw Error(`Unexpected match stars for MathMatchPractice: ${I}`)
								}
							default:
								throw (0,
									z.RJ)(p),
								Error(`Unexpected session type: ${p}`)
						}
					}
					)()
					, V = i.VO(h.xpSummaries).reduce(((e, t) => void 0 === t ? e : e + t.numSessions), 0)
					, Y = void 0 !== T && void 0 !== N && V >= 5 && (0,
						K.uX)(p) && void 0 === y;
				return s.createElement(ie, {
					accoladeSubtitle: Y ? N : void 0,
					accoladeTitle: Y ? T : void 0,
					accuracy: w,
					bonusXp: void 0 === y ? _ : 0,
					chessElo: A,
					chessMatches: L,
					hasXpBoost: void 0 === y && k,
					isDisplayed: e,
					matchStars: I,
					matches: D,
					sessionType: p,
					sessionXp: x,
					subtitle: null == M ? void 0 : M.subtitle,
					title: Z
				})
			}
	}
	,
	86042: (e, t, a) => {
		a.d(t, {
			Z: () => o
		});
		var n = a(27378)
			, r = a(68821)
			, s = a(1302);
		const i = [.3, 0, .1, .3, .5, .7, 1, 1, .7, .5, .3, .1, .1, .1, .1, .1, .1, .1, .1, .1, .1, .1, .1, .1]
			, o = ({ color: e, narrow: t, short: a }) => {
				const o = (0,
					r.Z)({
						interval: 200,
						min: .3
					})
					, l = n.useMemo((() => i.map((e => e * o)).slice(0, t ? 15 : void 0)), [o, t]);
				return n.createElement(s.Z, {
					amplitudes: l,
					maxBarHeight: a ? 37 : 45,
					minBarHeight: 5,
					variant: "white" === e ? "inverse" : "default"
				})
			}
	}
	,
	56659: (e, t, a) => {
		a.d(t, {
			Z: () => m
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(75073)
			, o = a(72117);
		var l = a(30033)
			, c = a(67173)
			, d = a(95940)
			, u = a(79465);
		const m = ({ quantity: e }) => (s.useEffect((() => {
			(0,
				u.track)("item_offer", {
					item_name: "streak_freeze"
				})
		}
		), []),
			s.createElement("div", {
				className: i.Z.slide
			}, s.createElement("div", {
				className: o.Z.wrap
			}, s.createElement("div", {
				className: o.Z.content,
				...(0,
					l._q)(c.V.StreakFreezeSlide)
			}, s.createElement("div", {
				className: r()(o.Z.illustration, 2 === e ? "_1Xj4Y" : "_3pI9a")
			}), s.createElement("h2", {
				className: r()(o.Z.title, "_1kpTH")
			}, (0,
				d._i)(49454))))))
	}
	,
	9096: (e, t, a) => {
		a.d(t, {
			K1: () => W,
			ZP: () => X
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(48535)
			, o = a(54351)
			, l = a(64502)
			, c = a(22498);
		const d = ({ children: e, className: t }) => s.createElement("div", {
			className: r()("_3iinJ", t)
		}, e.map((([e, t], a) => s.createElement("div", {
			"aria-hidden": !t,
			className: r()("_3wepv", {
				_2Aft6: t
			}),
			key: a
		}, e))));
		var u = a(77895)
			, m = a(42659);
		const p = a.p + "images/2b5ee3319568bd4ad9aa7f1b4db88324.svg"
			, g = a.p + "images/4f144181ab7853ad52dde7142f6f59ea.svg"
			, v = a.p + "images/afde29f2873ce19e1df695275d6a1ff7.svg"
			, h = a.p + "images/f2bc2b9f5c73d306a0dd7570910d1558.svg"
			, f = a.p + "lottie/ae3c9513cbcf4a4a3ca7acf8a76d4417.json"
			, _ = a.p + "lottie/c94b235baac779eaa4435de5a89dd9ca.json"
			, k = a.p + "lottie/64a11d82f954dfefe44a19477041243d.json"
			, b = a.p + "lottie/2e35641b920ebe25a8a5653b8d926619.json"
			, E = a.p + "lottie/ac2431a0ca595dc031085a1ddfe86817.json";
		var y = a(75744);
		const S = {
			calendar: "_2twSo",
			"calendar-flame": "_1Ba4m",
			"calendar-frame": "_1ve2P",
			"calendar-frame-image": "_3yBxs",
			"calendar-frame-image-active": "_1Dbne _3yBxs",
			"calendar-frame-image-active-hidden": "OaqqN",
			"calendar-sheen": "UdTvg",
			"calendar-scale-up": "_1s6Yx",
			"calendar-focus": "_2_RUC",
			"calendar-scale-down": "keh1y",
			"calendar-scale-down-fast": "_1ihVH",
			"calendar-text": "_3mLsb",
			"calendar-text-fade-out": "_1yo_7",
			"calendar-text-option": "_2I9RW",
			"calendar-text-sheen": "_13pM3",
			"goal-container": "_13-RH",
			"goal-option": "a3yOs",
			"goal-option-text": "WMgCJ",
			"goal-option-label": "g4E00",
			header: "_2VMB2",
			"header-speech-bubble": "M6NLh",
			"header-speech-bubble-hidden": "_1nDTk",
			"header-duo": "_38xtY",
			"header-calendar-text": "G8vvg",
			"header-calendar-text-long": "_3Whgk",
			"header-calendar-text-very-long": "P-nyx",
			"progress-bar": "_1FR6t",
			"progress-bar-fill": "_1Are1",
			"progress-bar-fill-offset": "_180qY",
			"progress-bar-background": "_1CxCT",
			"reward-text": "TvIV9",
			"reward-text-in": "_3jZm0",
			"reward-text-out": "x6nJY",
			"streak-goal-slide": "_3pl7T",
			"streak-goal-slide-before-slide-up": "_3RjWb",
			"streak-goal-slide-not-scrollable": "_3uwUr",
			"streak-goal-slide-inner": "_36XSq",
			"text-container": "vWXsy",
			"text-container-added-margin": "_3DFXm",
			timeline: "_3tj9N",
			"timeline-move-fast": "_21bdx",
			"timeline-container": "_1AQ-C"
		};
		var C = a(18225)
			, w = a(30033)
			, x = a(18728)
			, R = a(67173)
			, T = a(68903)
			, N = a(54042)
			, F = a(95940)
			, I = a(28818)
			, D = a(1398)
			, P = a(18804)
			, L = a(58786)
			, A = a(55419)
			, O = a(79465);
		const M = ({ allowScrolling: e, children: t, slidDown: a = !1 }) => s.createElement("div", {
			className: r()(S["streak-goal-slide"], {
				[S["streak-goal-slide-before-slide-up"]]: a,
				[S["streak-goal-slide-not-scrollable"]]: !e
			})
		}, s.createElement("div", {
			className: r()(S["streak-goal-slide-inner"], {})
		}, t))
			, Z = (e, t = 0) => {
				const [a, n] = s.useState()
					, r = void 0 === a ? void 0 : e[a];
				return {
					renderButtonGroup: () => s.createElement(i.Z, {
						className: S["goal-container"],
						name: "goal",
						onChange: e => n(parseInt(e.value, 10)),
						value: `${a}`
					}, e.map((([e, t], a) => s.createElement(o.Z, {
						className: S["goal-option"],
						key: e,
						role: "radio",
						value: `${a}`
					}, s.createElement("div", {
						className: S["goal-option-text"]
					}, (0,
						F._i)(60216, {
							num: e
						})), s.createElement("div", {
							className: S["goal-option-label"],
							...(0,
								w._q)(R.V.StreakGoalOption)
						}, t))))),
					selectedStreakGoalData: r,
					selectedStreakGoalDataWithDefault: null != r ? r : e[t]
				}
			}
			, z = (e, t) => {
				const a = s.useRef(t);
				s.useEffect((() => {
					a.current = t
				}
				)),
					s.useEffect((() => {
						var a;
						void 0 !== t && (null === (a = e.onSelection) || void 0 === a || a.call(e, t))
					}
					), [t]),
					s.useEffect((() => {
						var t;
						return null === (t = e.onMount) || void 0 === t || t.call(e),
							() => {
								var t;
								void 0 !== a.current && (null === (t = e.onNewGoalConfirmed) || void 0 === t || t.call(e, a.current))
							}
					}
					), [])
			}
			;
		var U;
		!function (e) {
			e[e.Start = 0] = "Start",
				e[e.Bubble = 1] = "Bubble",
				e[e.Options = 2] = "Options",
				e[e.End = 3] = "End"
		}(U || (U = {}));
		const G = e => {
			const t = (0,
				x.lQ)(y.i, E)
				, a = (0,
					D.$6)(c.Z) && void 0 !== t
				, n = (0,
					N.v)({
						canStartAnimation: a,
						getAnimationStepProperties: e => ({
							[U.Start]: {
								duration: 600,
								nextState: U.Bubble
							},
							[U.Bubble]: {
								duration: 500,
								nextState: U.Options
							},
							[U.Options]: {
								duration: 500,
								nextState: U.End
							},
							[U.End]: void 0
						}[e]),
						initialAnimationState: U.Start
					})
				, i = [(0,
					F._i)(39476), (0,
						F._i)(39477), (0,
							F._i)(39478), (0,
								F._i)(39479)]
				, { renderButtonGroup: o, selectedStreakGoalData: l, selectedStreakGoalDataWithDefault: [d] } = Z(e.nextOptions.map(((e, t) => {
					var a;
					return [e.length, i[t], null !== (a = [2, 3, 5, 7][t]) && void 0 !== a ? a : 7, e]
				}
				)));
			return z(e, null == l ? void 0 : l[3]),
				a ? s.createElement(M, {
					allowScrolling: n === U.End,
					slidDown: n < U.Options
				}, s.createElement("div", {
					className: S.header
				}, s.createElement("div", {
					className: S["header-speech-bubble"]
				}, ("streakGoalEarnback" === e.subtype ? [] : [(0,
					F.H8)(54166), (0,
						F.H8)(33820, {
							num: 10
						})]).map(((e, t) => s.createElement("div", {
							"aria-hidden": "true",
							className: S["hidden-bubble"],
							key: t
						}, s.createElement(u.Z, {
							canBeginShowing: !1,
							direction: "up",
							duoQuote: e,
							highlightColor: "fox",
							shouldAnimate: !1
						})))), s.createElement(u.Z, {
							canBeginShowing: n >= U.Bubble,
							direction: "up",
							duoQuote: "streakGoalEarnback" === e.subtype ? (0,
								F.H8)(49083) : void 0 === l ? (0,
									F.H8)(54166) : (0,
										F.H8)(33820, {
											num: l[2]
										}, {
											exportTags: !0
										}),
							highlightColor: "fox",
							shouldAnimate: !0
						})), s.createElement("div", {
							className: S["header-duo"]
						}, s.createElement(c.Z, {
							animationData: t,
							className: S["header-duo"],
							isPlaying: !0,
							loop: !0,
							loopSegment: [0, 146],
							mainSegment: [135, 146]
						}), s.createElement("div", {
							"aria-hidden": "true",
							className: r()(S["header-calendar-text"], {
								[S["header-calendar-text-long"]]: d >= 100,
								[S["header-calendar-text-very-long"]]: d >= 1e3
							})
						}, d))), o()) : null
		}
			;
		var B;
		!function (e) {
			e[e.Start = 0] = "Start",
				e[e.Progress = 1] = "Progress",
				e[e.CalendarFlame = 2] = "CalendarFlame",
				e[e.RewardTextIn = 3] = "RewardTextIn",
				e[e.RewardTextOut = 4] = "RewardTextOut",
				e[e.ScaleCalendar = 5] = "ScaleCalendar",
				e[e.NextOptions = 6] = "NextOptions",
				e[e.FocusNext = 7] = "FocusNext",
				e[e.FocusNextShine = 8] = "FocusNextShine",
				e[e.End = 9] = "End"
		}(B || (B = {}));
		const H = e => {
			var t;
			const a = "dark" === (0,
				l.Fg)()
				, n = (0,
					x.lQ)(y.i, a ? _ : f)
				, i = (0,
					x.lQ)(y.i, a ? b : k)
				, o = (0,
					D.$6)(c.Z) && void 0 !== n && void 0 !== i
				, u = (0,
					N.v)({
						canStartAnimation: o,
						getAnimationStepProperties: t => ({
							[B.Start]: {
								duration: 500,
								nextState: B.Progress
							},
							[B.Progress]: {
								duration: 250,
								nextState: B.CalendarFlame
							},
							[B.CalendarFlame]: {
								duration: 500,
								nextState: B.RewardTextIn
							},
							[B.RewardTextIn]: {
								duration: 1200,
								nextState: B.RewardTextOut
							},
							[B.RewardTextOut]: "streakGoalComplete" === e.subtype ? {
								duration: 0,
								nextState: B.ScaleCalendar
							} : {
								duration: 500,
								nextState: B.FocusNext
							},
							[B.ScaleCalendar]: {
								duration: 600,
								nextState: B.NextOptions
							},
							[B.NextOptions]: {
								duration: 500,
								nextState: B.End
							},
							[B.FocusNext]: {
								duration: 500,
								nextState: B.FocusNextShine
							},
							[B.FocusNextShine]: {
								duration: 10,
								nextState: B.End
							},
							[B.End]: void 0
						}[t]),
						initialAnimationState: B.Start
					})
				, { renderButtonGroup: m, selectedStreakGoalData: E } = Z("streakGoalComplete" === e.subtype ? e.nextOptions.map(((t, a) => [t.length, (0,
					F._i)(47831, {
						num: (0,
							L.Jm)(e.currentStreak, t)
					}), a, t])) : []);
			if (z(e, null == E ? void 0 : E[3]),
				s.useEffect((() => {
					var t;
					void 0 !== e.rewardId && void 0 !== e.gemReward && (null === (t = e.onRedeemReward) || void 0 === t || t.call(e, e.rewardId, e.gemReward))
				}
				), []),
				!o)
				return null;
			const C = (e, t, o) => s.createElement("div", {
				className: r()(S.calendar, {
					[S["calendar-focus"]]: "next" === o && u >= B.FocusNext,
					[S["calendar-scale-up"]]: "animated" === o && u >= B.CalendarFlame && u < B.FocusNext || "option-selected" === o && void 0 !== E,
					[S["calendar-scale-down"]]: "animated" === o && u > B.RewardTextOut,
					[S["calendar-scale-down-fast"]]: "option" === o && void 0 !== E
				}),
				key: e,
				style: {
					"--streak-goal-calendar-offset": e
				}
			}, (() => {
				switch (o) {
					case "complete":
						return s.createElement(c.Z, {
							animationData: n,
							className: S["calendar-flame"],
							fillMode: "forwards",
							isPlaying: !1
						});
					case "animated":
						return s.createElement(s.Fragment, null, s.createElement(c.Z, {
							animationData: n,
							className: S["calendar-flame"],
							isPlaying: u >= B.CalendarFlame
						}), s.createElement("div", {
							className: r()(S["calendar-text"], {
								[S["calendar-text-fade-out"]]: u >= B.CalendarFlame
							}),
							style: {
								"--streak-calendar-num-digits": `${t}`.length
							}
						}, t));
					case "next":
						return s.createElement(s.Fragment, null, s.createElement(c.Z, {
							animationData: i,
							className: S["calendar-sheen"],
							isPlaying: u >= B.FocusNextShine
						}), s.createElement("div", {
							className: r()(S["calendar-text"], {
								[S["calendar-text-sheen"]]: u >= B.FocusNextShine
							}),
							style: {
								"--streak-calendar-num-digits": `${t}`.length
							}
						}, t));
					case "option":
					case "option-selected":
					case "static":
						{
							const e = ("option" === o || "option-selected" === o) && void 0 !== E;
							return s.createElement(s.Fragment, null, s.createElement("div", {
								className: S["calendar-frame"]
							}, s.createElement("img", {
								className: S["calendar-frame-image"],
								src: a ? v : h
							}), s.createElement("img", {
								className: r()(S["calendar-frame-image-active"], {
									[S["calendar-frame-image-active-hidden"]]: !e
								}),
								src: a ? p : g
							})), s.createElement("div", {
								className: r()(S["calendar-text"], {
									[S["calendar-text-option"]]: e
								}),
								style: {
									"--streak-calendar-num-digits": `${t}`.length
								}
							}, t))
						}
					default:
						return (0,
							T.RJ)(o),
							null
				}
			}
			)());
			return s.createElement(M, {
				allowScrolling: u === B.End,
				slidDown: "streakGoalComplete" === e.subtype && u < B.NextOptions
			}, s.createElement("div", {
				className: S["timeline-container"]
			}, s.createElement("div", {
				className: r()(S.timeline, {
					[S["timeline-move-fast"]]: "streakGoalComplete" === e.subtype && u >= B.NextOptions
				}),
				style: {
					"--streak-goal-timeline-scroll": ("streakGoalCheckpoint" === e.subtype && u >= B.FocusNext ? 1 : 0) + (void 0 === E ? 0 : 1) + (null !== (t = null == E ? void 0 : E[2]) && void 0 !== t ? t : 0)
				}
			}, s.createElement("div", {
				className: S["progress-bar"]
			}, s.createElement("div", {
				className: S["progress-bar-background"]
			}), s.createElement("div", {
				className: r()(S["progress-bar-fill"], {
					[S["progress-bar-fill-offset"]]: u < B.Progress
				})
			})), u >= B.RewardTextIn && u <= B.RewardTextOut && void 0 !== e.gemReward ? s.createElement("div", {
				className: r()(S["reward-text"], {
					[S["reward-text-in"]]: u === B.RewardTextIn,
					[S["reward-text-out"]]: u === B.RewardTextOut
				})
			}, (0,
				F._i)(31628, {
					num: e.gemReward
				})) : null, C(-2, 0, "complete"), C(-1, 0, "complete"), C(0, e.currentStreak, "animated"), "streakGoalComplete" === e.subtype ? e.nextOptions.map(((e, t) => C(t + 1, e.length, void 0 === E ? "static" : e.length === E[0] ? "option-selected" : "option"))) : e.futureMilestones.map(((e, t) => C(t + 1, e, 0 === t ? "next" : "static"))))), s.createElement(d, {
					className: r()(S["text-container"], {
						[S["text-container-added-margin"]]: "streakGoalComplete" === e.subtype
					})
				}, "streakGoalComplete" === e.subtype ? [[(0,
					F._i)(50257), u >= B.CalendarFlame && u < B.RewardTextOut], [(0,
						F._i)(58034), u >= B.NextOptions]] : [[(0,
							F._i)(49431), u >= B.CalendarFlame && u < B.RewardTextOut], [(0,
								F._i)(49430), u >= B.FocusNextShine]]), m())
		}
			, W = e => {
				switch (e.subtype) {
					case "streakGoalEarnback":
					case "streakGoalInitial":
						return s.createElement(G, {
							...e
						});
					case "streakGoalComplete":
					case "streakGoalCheckpoint":
						return s.createElement(H, {
							...e
						});
					default:
						return (0,
							T.RJ)(e),
							null
				}
			}
			, X = e => {
				const t = (0,
					P.Fx)(m.np)
					, a = (0,
						P.tX)()
					, n = (0,
						I.YV)();
				return s.createElement(W, {
					...e,
					onMount: void 0,
					onNewGoalConfirmed: e => {
						var a, r;
						(0,
							O.track)("new_streak_goal_confirmed", {
								previous_streak_length: null !== (r = null === (a = t.streakData.previousStreak) || void 0 === a ? void 0 : a.length) && void 0 !== r ? r : 0,
								streak_goal: e.length,
								streak_goal_option_index: e.tier
							}),
							n(A._E, e.tier)
					}
					,
					onRedeemReward: (e, n) => {
						C.Vi.consumeReward(t, e),
							a({
								gems: n,
								type: "UPDATE_USER_GEMS"
							})
					}
					,
					onSelection: e.onSelection
				})
			}
	}
	,
	40034: (e, t, a) => {
		a.d(t, {
			Z: () => p
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(67208)
			, o = a(42659);
		const l = a.p + "images/owls/404dc63bffbaf65613eb90bc59d81850.svg";
		var c = a(75073);
		var d = a(30033)
			, u = a(67173)
			, m = a(18804);
		const p = ({ daysInCurrentStreak: e, template: t, updatedXpPerDay: a, user: { timezoneOffset: n } }) => {
			const p = (0,
				m.tX)()
				, g = (0,
					m.Fx)(o.np);
			return s.useEffect((() => {
				p({
					resurrectionTimestamp: g.lastResurrectionTimestamp,
					timestamp: Date.now(),
					type: "STREAK_NUDGE_SHOWN"
				})
			}
			), []),
				s.createElement("div", {
					className: r()(c.Z.slide)
				}, s.createElement("div", {
					className: "_2Y08x",
					...(0,
						d._q)(u.V.StreakSlide)
				}, s.createElement("h2", {
					className: "SAnU5"
				}, t.title), s.createElement("img", {
					className: "_2WyQU",
					src: l
				})), s.createElement("div", {
					className: "_1FNhm"
				}, s.createElement(i.Z, {
					daysInCurrentStreak: e,
					highlightNextDay: "streakNudge",
					showSevenDayCalendar: !0,
					timezoneOffset: n,
					xpPerDay: a
				})), s.createElement("div", {
					className: "uZOTl _2CoFd uxKQj"
				}, t.body))
		}
	}
	,
	86107: (e, t, a) => {
		a.d(t, {
			Z: () => X
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(2278)
			, l = a(15746)
			, c = a(63303)
			, d = a(47798)
			, u = a(61429)
			, m = a(22498);
		const p = a.p + "lottie/974af9347231f42704bb76399b7f7047.json"
			, g = a.p + "lottie/36c657586c8d68bba3656f53089ba639.json"
			, v = {
				"flame-container": "_2lTlE",
				"animated-flame": "_3boSa",
				"animated-flame-c1": "_1HAKY _3boSa",
				"animated-flame-c2": "_28gkN _3boSa",
				"animated-flame-c3": "_2U_ax _3boSa",
				"animated-flame-c4": "_1nBEq _3boSa",
				"animated-flame-fire-duo": "_2Oda5 _3boSa",
				"animated-label": "_35EfQ",
				"animated-label-visible": "_2-nYh _35EfQ",
				"animated-label-large": "AGwmB _35EfQ"
			};
		var h = a(50498)
			, f = a(6947);
		const _ = ({ delay: e, shouldExtinguishFlame: t = !1, label: a, streakDay: n }) => {
			const i = (0,
				l.Z)()
				, [o, c] = s.useState(i)
				, d = a && a.length > 2
				, _ = (0,
					u.Z)(!1, (async () => (await (0,
						h._v)(e),
						!0)), [])
				, k = (0,
					f.pS)(n) ? [340, 480] : [90, 258]
				, b = i ? t ? [30, 31] : k : t ? [30, 90] : void 0;
			return s.createElement("div", {
				className: v["flame-container"]
			}, s.createElement("div", {
				className: r()(v["animated-label" + (o ? "-visible" : "")], v["animated-label" + (d ? "-large" : "")])
			}, a), s.createElement(s.Suspense, {
				fallback: null
			}, s.createElement("div", {
				className: v[(0,
					f.pS)(n) ? "animated-flame-fire-duo" : n <= 9 ? "animated-flame-c1" : n <= 99 ? "animated-flame-c2" : n <= 999 ? "animated-flame-c3" : "animated-flame-c4"]
			}, s.createElement(m.Z, {
				direction: t ? "backwards" : "forwards",
				isPlaying: _ && !i,
				loop: !t,
				loopSegment: k,
				mainSegment: b,
				onEnterFrame: ({ currentTime: e }) => {
					e >= 90 && !o && c(!0)
				}
				,
				path: (0,
					f.pS)(n) ? g : p
			}))))
		}
			;
		var k = a(67208);
		const b = a.p + "images/cb9e58c0a8bed497fcf716a64cc13521.svg";
		var E = a(96391);
		const y = a.p + "rive/c75092d1cdbfc99faa361d669ad5ba11.riv"
			, S = a.p + "rive/b96b15c836fdb2c61eb77d5f15308f1d.riv";
		var C = a(75073)
			, w = a(72117);
		const x = "_2k21Q"
			, R = "_2ROxM"
			, T = "_36njd uxKQj";
		var N = a(30033)
			, F = a(17135)
			, I = a(67173)
			, D = a(68903)
			, P = a(54042)
			, L = a(95940)
			, A = a(58576)
			, O = a(14817)
			, M = a(14437)
			, Z = a(37111)
			, z = a(79465)
			, U = a(97106);
		const G = (e, t) => {
			const a = void 0 !== e.rive && null !== e.rive
				, n = t => {
					var a;
					const n = null === (a = e.rive) || void 0 === a ? void 0 : a.stateMachineInputs(e.stateMachine).find((e => e.name === t));
					if (void 0 === n)
						throw Error(`Input ${t} not found`);
					return n
				}
				;
			s.useLayoutEffect((() => {
				if (a)
					for (const [e, a] of Object.entries(t)) {
						const t = n(e);
						if (void 0 === t)
							throw Error(`Input ${e} not found`);
						t.value = a
					}
			}
			), [a, e.stateMachine, (0,
				M.r)(t)])
		}
			, B = ({ artboard: e, autoplay: t, imperativeInputsList: a, layout: n, src: r, stateMachine: s }) => {
				const i = (0,
					O.useRive)({
						artboard: e,
						autoplay: t,
						layout: n,
						src: r,
						stateMachines: s
					})
					, o = void 0 !== i.rive && null !== i.rive
					, l = e => {
						var t;
						const a = null === (t = i.rive) || void 0 === t ? void 0 : t.stateMachineInputs(s).find((t => t.name === e));
						if (void 0 === a)
							throw Error(`Input ${e} not found`);
						return a
					}
					, c = o ? a.reduce(((e, t) => ({
						...e,
						[t]: l(t)
					})), {}) : void 0;
				return {
					...i,
					imperativeInputs: c,
					isRiveReady: o,
					stateMachine: s
				}
			}
			, H = ({ currentDate: e, currentWeekXPSummaries: t, daysInCurrentStreak: a, overrideWeekStartDayForTesting: n, prefersReducedMotion: o, sessionEndCopy: l, setRibbonColor: u, streak: m, streakExtensionType: p, timezoneOffset: g, updatedXpPerDay: v }) => {
				const h = "dark" === (0,
					i.Fg)()
					, f = B({
						artboard: "IDLE",
						autoplay: !0,
						imperativeInputsList: ["play_trig"],
						layout: new O.Layout({
							alignment: O.Alignment.BottomCenter,
							fit: O.Fit.Contain
						}),
						src: y,
						stateMachine: "State Machine"
					});
				G(f, {
					darkmode_bool: h,
					streakselect_num: {
						milestone: 3,
						normal: 0,
						"perfect-complete": 1,
						"perfect-progress": 1
					}[p.type]
				});
				const _ = B({
					artboard: "Main",
					autoplay: !0,
					imperativeInputsList: ["play_trig"],
					layout: new O.Layout({
						alignment: O.Alignment.TopCenter,
						fit: O.Fit.Contain
					}),
					src: S,
					stateMachine: "odometer_state_machine"
				});
				let b;
				!function (e) {
					e[e.Initial = 0] = "Initial",
						e[e.Flame = 1] = "Flame",
						e[e.OdometerFadeOut = 2] = "OdometerFadeOut",
						e[e.BackgroundTakeover = 3] = "BackgroundTakeover",
						e[e.OdometerFadeIn = 4] = "OdometerFadeIn",
						e[e.Odometer = 5] = "Odometer",
						e[e.Slide = 6] = "Slide",
						e[e.CalendarFade = 7] = "CalendarFade"
				}(b || (b = {}));
				const E = (() => {
					switch (p.type) {
						case "normal":
						case "perfect-progress":
							{
								const e = "normal" === p.type ? 600 : 1115;
								return {
									[b.Flame]: {
										duration: e,
										nextState: b.Odometer
									},
									[b.OdometerFadeOut]: void 0,
									[b.BackgroundTakeover]: void 0,
									[b.OdometerFadeIn]: void 0,
									[b.Odometer]: {
										duration: 2033 - e,
										nextState: b.Slide
									},
									[b.Slide]: {
										duration: 500,
										nextState: b.CalendarFade
									},
									[b.CalendarFade]: void 0
								}
							}
						case "perfect-complete":
							return {
								[b.Flame]: {
									duration: 500,
									nextState: b.OdometerFadeOut
								},
								[b.OdometerFadeOut]: {
									duration: 600,
									nextState: b.BackgroundTakeover
								},
								[b.BackgroundTakeover]: {
									duration: 0,
									nextState: b.OdometerFadeIn
								},
								[b.OdometerFadeIn]: {
									duration: 50,
									nextState: b.Odometer
								},
								[b.Odometer]: {
									duration: 1033,
									nextState: b.Slide
								},
								[b.Slide]: {
									duration: 500,
									nextState: b.CalendarFade
								},
								[b.CalendarFade]: void 0
							};
						default:
							throw (0,
								D.RJ)(p.type),
							Error(`Unhandled streak extension type: ${p.type}`)
					}
				}
				)()
					, w = (0,
						P.v)({
							canStartAnimation: f.isRiveReady && _.isRiveReady,
							getAnimationStepProperties: e => ({
								[b.Initial]: {
									duration: 300,
									nextState: o ? b.CalendarFade : b.Flame
								},
								...E
							}[e]),
							initialAnimationState: b.Initial
						})
					, F = (() => {
						if ("perfect-complete" === p.type && void 0 !== u)
							return o || w >= b.BackgroundTakeover ? d.Il.ORANGE_DYNAMIC : "force-undefined"
					}
					)();
				s.useLayoutEffect((() => {
					void 0 !== F && (null == u || u(F))
				}
				), [F]),
					s.useLayoutEffect((() => () => {
						null == u || u(void 0)
					}
					), []);
				const A = w >= b.Flame;
				s.useEffect((() => {
					var e;
					A && (null === (e = f.imperativeInputs) || void 0 === e || e.play_trig.fire())
				}
				), [A]);
				const M = w >= b.Odometer;
				return s.useEffect((() => {
					var e;
					M && (null === (e = _.imperativeInputs) || void 0 === e || e.play_trig.fire())
				}
				), [M]),
					G(_, {
						dark_bool: F !== d.Il.ORANGE_DYNAMIC && h,
						perfect_bool: F === d.Il.ORANGE_DYNAMIC,
						...(() => {
							const e = {};
							let t = m
								, a = t - 1;
							const n = a.toString().length
								, r = t.toString().length;
							e.old_digitamount_num = n,
								e.new_digitamount_num = r;
							for (let s = 0; s < 4 && 0 !== t; s++)
								(a > 0 || 0 === s) && (e[`old_pos${n - s}_num`] = a % 10),
									(t > 0 || 0 === s) && (e[`new_pos${r - s}_num`] = t % 10),
									a = Math.floor(a / 10),
									t = Math.floor(t / 10);
							return e
						}
						)()
					}),
					s.createElement("div", {
						className: r()(C.Z.slide, "HpAme", {
							_1pVcg: F === d.Il.ORANGE_DYNAMIC
						})
					}, s.createElement("div", {
						className: R,
						...(0,
							N._q)(I.V.StreakSlide)
					}, s.createElement(f.RiveComponent, {
						className: r()("_3XxHw", {
							_2Ylex: o || w >= b.Slide
						})
					}), s.createElement("div", {
						className: r()("_1PSwR", {
							zWgl3: o || w >= b.Slide
						})
					}, s.createElement(_.RiveComponent, {
						className: r()("R7KzO", {
							_3l3Yx: w >= b.OdometerFadeOut && w < b.OdometerFadeIn
						})
					}), s.createElement("div", {
						className: r()("Ikkcc", {
							_3Eikr: F === d.Il.ORANGE_DYNAMIC,
							_33hhf: o || w >= b.CalendarFade
						})
					}, (0,
						L._i)(54164, {
							num: m
						})))), s.createElement("div", {
							className: r()("_3kddW", {
								tuVG5: o || w >= b.Slide,
								_36i3u: o || w >= b.CalendarFade
							})
						}, s.createElement("div", {
							className: x
						}, "perfect-complete" === p.type || "perfect-progress" === p.type ? s.createElement(c.Z, {
							canStartAnimation: w >= b.CalendarFade,
							currentDate: e,
							currentWeekXPSummaries: t,
							delay: 0,
							isEndOfPerfectWeek: "perfect-complete" === p.type,
							overrideWeekStartDayForTesting: n,
							skipProgressDelay: !0
						}) : s.createElement(k.Z, {
							canStartAnimation: w >= b.CalendarFade,
							daysInCurrentStreak: a,
							delay: 300,
							showFlamePop: !0,
							timezoneOffset: g,
							xpPerDay: v
						})), s.createElement("div", {
							className: T
						}, l)))
			}
			, W = ({ currentDate: e, currentWeekXPSummaries: t, daysInCurrentStreak: a, overrideWeekStartDayForTesting: n, sessionEndCopy: i, streak: l, streakExtensionType: d, timezoneOffset: u, updatedXpPerDay: m }) => {
				const [p, g] = s.useState(!1);
				switch (s.useEffect((() => {
					const e = setTimeout((() => {
						g(!0)
					}
					), 1700);
					return () => clearTimeout(e)
				}
				), [p]),
				d.type) {
					case "earnback":
						return s.createElement("div", {
							className: C.Z.slide
						}, s.createElement("div", {
							className: R
						}, s.createElement("div", {
							className: "_3oRTt"
						}, s.createElement("img", {
							className: "_3daf-",
							src: b
						}), s.createElement("img", {
							className: "_1liDf",
							src: E
						}), s.createElement("div", {
							className: "_9VZfw"
						}, s.createElement(o.Z, {
							animationDelay: 0,
							animationDuration: 0,
							digitHeight: "140px",
							number: d.earnbackStreakLength
						}))), s.createElement("span", {
							className: "_2WuMx"
						}, (0,
							L._i)(44988, {
								num: d.earnbackStreakLength,
								streak_length: d.earnbackStreakLength
							}))));
					case "milestone":
						return s.createElement("div", {
							className: r()(C.Z.slide)
						}, s.createElement("div", {
							className: R,
							...(0,
								N._q)(I.V.StreakSlide)
						}, s.createElement("div", {
							className: "_166Yi"
						}, s.createElement(_, {
							delay: 700,
							streakDay: l
						})), s.createElement(o.Z, {
							animationDelay: 3.2,
							animationDuration: 1.067,
							digitHeight: "100px",
							number: l
						}), s.createElement("h2", {
							className: r()(w.Z.title, "_14Rt_")
						}, (0,
							L._i)(28427, {
								num: l
							}))), s.createElement("div", {
								className: x
							}, d.hasPerfectStreakWeek ? s.createElement(c.Z, {
								currentDate: e,
								currentWeekXPSummaries: t,
								delay: 4900,
								isEndOfPerfectWeek: d.isEndOfPerfectWeek,
								overrideWeekStartDayForTesting: n
							}) : s.createElement(k.Z, {
								daysInCurrentStreak: a,
								delay: 4900,
								timezoneOffset: u,
								xpPerDay: m
							})), s.createElement("div", {
								className: T
							}, i));
					default:
						return (0,
							D.RJ)(d),
							null
				}
			}
			, X = ({ completedEarnbackStreakLength: e, daysInCurrentStreak: t, isEndOfPerfectWeek: a, isPerfectStreakWeekLost: n, overrideWeekStartDayForTesting: r, perfectWeekDay: i, setRibbonColor: o, showEarnbackOffer: c, template: d, updatedXpPerDay: u, user: { streakRepairOffer: m, streakData: { currentStreak: p }, timezoneOffset: g, xpSummaries: v } }) => {
				var h;
				const _ = (0,
					l.Z)()
					, k = (0,
						F.Ux)()
					, b = null != r ? r : (0,
						L.k8)()
					, E = (k.getDay() - b + 7) % 7
					, y = (0,
						U.uD)(k, v, {
							overrideWeekStartDayForTesting: r
						})
					, S = y.slice(0, E).every(U.tV)
					, C = null !== (h = null == p ? void 0 : p.length) && void 0 !== h ? h : 0
					, w = S && C - E > 7 && y.slice(0, E).every(U.Qb)
					, x = (0,
						f.Q1)(k, v, b)
					, R = (() => {
						if (c) {
							if (m)
								return (0,
									L._i)(52691, {
										num: m.length
									});
							(0,
								A.Kp)("Trying to show new streak earnback offer without streakRepairOffer", {
									once: !0
								})
						}
						const e = (0,
							Z.kA)(C);
						return void 0 !== e ? e : w ? (0,
							f.wW)(E, x, d.body) : d.body
					}
					)();
				s.useEffect((() => {
					if (void 0 === e) {
						if (w) {
							const e = (0,
								f.Jo)(E)
								, t = (0,
									f.mj)(i);
							(0,
								z.track)("session_end_perfect_streak_show", {
									body_copy_id: e,
									consecutive_perfect_week: x,
									cta_copy_id: t,
									is_new_perfect_streak: 1 === x,
									new_streak: C,
									perfect_week_day: i,
									title_copy_id: d.titleID
								}),
								a && (0,
									z.track)("session_end_perfect_streak_earned_show", {
										body_copy_id: e,
										consecutive_perfect_week: x,
										cta_copy_id: t,
										is_new_perfect_streak: 1 === x,
										new_streak: C,
										perfect_week_day: i,
										title_copy_id: d.titleID
									})
						}
						(0,
							z.track)("session_end_streak_reached_show", {
								body_copy_id: d.bodyID,
								new_streak: C,
								perfect_streak_week_lost: n,
								perfect_week_day: i,
								title_copy_id: d.titleID
							})
					}
				}
				), []);
				const T = void 0 !== e ? {
					earnbackStreakLength: e,
					type: "earnback"
				} : (0,
					f.pS)(C) ? {
					hasPerfectStreakWeek: w,
					isEndOfPerfectWeek: a,
					type: "milestone"
				} : w ? a ? {
					type: "perfect-complete"
				} : {
					type: "perfect-progress"
				} : {
					type: "normal"
				};
				return "earnback" !== T.type && "milestone" !== T.type ? s.createElement(H, {
					currentDate: k,
					currentWeekXPSummaries: y,
					daysInCurrentStreak: t,
					overrideWeekStartDayForTesting: r,
					prefersReducedMotion: _,
					sessionEndCopy: R,
					setRibbonColor: o,
					streak: C,
					streakExtensionType: T,
					timezoneOffset: g,
					updatedXpPerDay: u
				}) : s.createElement(W, {
					currentDate: k,
					currentWeekXPSummaries: y,
					daysInCurrentStreak: t,
					overrideWeekStartDayForTesting: r,
					sessionEndCopy: R,
					streak: C,
					streakExtensionType: T,
					timezoneOffset: g,
					updatedXpPerDay: u
				})
			}
	}
	,
	2298: (e, t, a) => {
		a.d(t, {
			Z: () => g
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(64502)
			, o = a(42659);
		const l = a.p + "images/streakSociety/dab50231d300c2867e9c15c80e688090.svg"
			, c = a.p + "images/streakSociety/e8a5d02f63bb12d351ae7df2fbb9b3e6.svg";
		var d = a(75073)
			, u = a(72117);
		var m = a(95940)
			, p = a(18804);
		const g = () => {
			var e, t;
			const a = (0,
				p.tX)()
				, n = (0,
					p.Fx)(o.np)
				, g = "dark" === (0,
					i.Fg)();
			s.useEffect((() => {
				a({
					reward: "freezes",
					timestamp: Date.now(),
					type: "SET_STREAK_SOCIETY_REWARD_CLAIMED"
				})
			}
			), []);
			const v = null !== (t = null === (e = n.streakData.currentStreak) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
			return s.createElement("div", {
				className: d.Z.slide
			}, s.createElement("div", {
				className: u.Z.wrap
			}, s.createElement("div", {
				className: u.Z.content
			}, s.createElement("img", {
				className: "_3lOTj",
				src: g ? l : c
			}), s.createElement("div", {
				className: "_1rDL6"
			}, (0,
				m._i)(34808)), s.createElement("h2", {
					className: r()(u.Z.title, "VmjWE")
				}, (0,
					m._i)(49448, {
						num: v
					})))))
		}
	}
	,
	85577: (e, t, a) => {
		a.d(t, {
			Z: () => m
		});
		var n = a(27378)
			, r = a(36666);
		const s = a.p + "images/streakSociety/11d7a4d14362b0ef055ae0d9d28de81a.svg";
		var i = a(17135)
			, o = a(95940)
			, l = a(67116)
			, c = a(26506)
			, d = a(18804)
			, u = a(37111);
		const m = ({ onClose: e, streak: t }) => {
			const a = (0,
				d.tX)();
			n.useEffect((() => {
				a({
					timestamp: Date.now(),
					type: "STREAK_SOCIETY_INDUCTION_SLIDE_SHOWN"
				})
			}
			), []),
				n.useEffect((() => {
					const t = t => {
						"Enter" === t.key && (a({
							type: "sessionEnd/CTA_CLICK"
						}),
							e())
					}
						;
					return c.U.addListener(document, "keydown", t),
						() => {
							c.U.removeListener(document, "keydown", t)
						}
				}
				));
			const m = (0,
				i.Ux)();
			return n.createElement("div", {
				className: "yP800 _2CoFd"
			}, n.createElement("div", {
				className: "_3I41m"
			}, n.createElement("div", {
				className: "_2qnx8"
			}, n.createElement("img", {
				className: "_1eGAe _219j-",
				src: s
			}), n.createElement("div", {
				className: "_1nnwE"
			}, m.toLocaleString((0,
				l.M$)(window.duo.uiLanguage), {
				day: "numeric",
				month: "long",
				year: "numeric"
			})), n.createElement("div", {
				className: "wl0A9"
			}, n.createElement("div", {
				className: "_2RETf"
			}, (0,
				o._i)(49452))), n.createElement("div", {
					className: "_2nBgo"
				}, n.createElement((() => n.createElement(r.Z, {
					className: "_1X1bV",
					onClick: () => {
						a({
							type: "sessionEnd/CTA_CLICK"
						}),
							e()
					}
					,
					variant: "solid"
				}, t === u.fI ? (0,
					o._i)(35014, {
						num: u.jL.length
					}) : (0,
						o._i)(4906))), null)))))
		}
	}
	,
	41288: (e, t, a) => {
		a.d(t, {
			Z: () => h
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(39797)
			, o = a(15746)
			, l = a(24040);
		const c = a.p + "images/streakSociety/d63622f24add9dfbe4b5a5d036ffef4e.svg";
		var d = a(75073)
			, u = a(72117);
		var m = a(95940)
			, p = a(18804)
			, g = a(37111)
			, v = a(79465);
		const h = ({ currentStreak: e, currentStreakStartDate: t, nextRewardMilestone: a }) => {
			const n = (0,
				g.vz)(e)
				, h = (0,
					g.u)(n)
				, [f, _] = s.useState(!1)
				, k = (0,
					p.tX)()
				, b = (0,
					o.Z)();
			return s.useEffect((() => {
				(0,
					v.track)("session_end_streak_society_progress_show", {
						streak: e,
						streak_society_progress_update_type: h ? "halfway" : "10_days_away",
						streak_society_reward_tier: a
					}),
					k({
						lastShownStartDate: t,
						lastStreakLength: e,
						type: "STREAK_SOCIETY_PROGRESS_SHOWN"
					});
				const n = setTimeout((() => {
					_(!0)
				}
				), 700);
				return () => clearTimeout(n)
			}
			), []),
				s.createElement("div", {
					className: d.Z.slide
				}, s.createElement("div", {
					className: u.Z.wrap
				}, s.createElement("div", {
					className: u.Z.content
				}, s.createElement("img", {
					className: "_3pgp7",
					src: c
				}), s.createElement("div", {
					className: "_2DM1c"
				}, (0,
					m._i)(34808)), s.createElement("div", {
						className: "_3tiBg"
					}, s.createElement(i.Z, {
						className: "W7-uw",
						color: "bee",
						denominator: a,
						height: 25,
						innerText: (0,
							m.H8)(43473, {
								num: e,
								num_total: a
							}),
						numerator: b || f ? e : e - 1,
						sparkleOnIncrease: !0,
						squareEnd: !0
					}), s.createElement("img", {
						className: "_24_nh",
						src: l
					})), s.createElement("h2", {
						className: r()(u.Z.title, "_1_dcM")
					}, h ? (0,
						m._i)(51207, {
							num: a
						}) : (0,
							m._i)(51208, {
								num: a - e
							})))))
		}
	}
	,
	45446: (e, t, a) => {
		a.d(t, {
			Z: () => f
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(86970);
		const o = a.p + "images/streakSociety/d45f8013edd98f33d09f2b7455a70af3.svg"
			, l = a.p + "images/streakSociety/efca878262a92df00a36102372725ca7.svg"
			, c = a.p + "images/streakSociety/5ba087e8ec662f9dfb01a9a71d374669.svg";
		var d = a(75073)
			, u = a(74499)
			, m = a(72117);
		const p = {
			avatar: "_36VG0",
			"illustration-row": "_2yAHx",
			"illustration-row-highlighted": "_20yVg _2yAHx",
			"flair-container": "_3LyBx",
			flame: "NJFub",
			"leaderboard-illustration": "_1ETSx",
			"leaderboard-illustration-container": "_3sGpM",
			"leaderboard-illustration-container-rotated": "_3KyrR _3sGpM",
			"illustration-container-rotated": "_2u0E4",
			"illustration-container": "oPEDa",
			rank: "lUz5s",
			"profile-flame": "_3pYL9",
			"profile-illustration": "_2JIvP",
			"profile-text": "IgUUj",
			tagline: "AMCPy",
			title: "_3yyqF",
			"sparkle-left": "W8JEM",
			"sparkle-right": "_1Bzk8",
			streak: "RKQdJ",
			flair: "FZtZv"
		};
		var g = a(95940)
			, v = a(18804);
		const h = ({ avatar: e, isHighlighted: t, name: a, rank: n, score: o, years: l }) => s.createElement("div", {
			className: t ? p["illustration-row-highlighted"] : p["illustration-row"]
		}, s.createElement("span", {
			className: r()(u.Z.rank, p.rank)
		}, n), s.createElement("img", {
			className: p.avatar,
			src: e
		}), s.createElement("div", {
			className: u.Z["name-container"]
		}, s.createElement("span", {
			className: u.Z.name
		}, a), void 0 === l ? null : s.createElement("div", {
			className: p["flair-container"]
		}, s.createElement("img", {
			className: p.flame,
			src: i
		}), s.createElement("span", {
			className: p.streak
		}, l > 1 ? (0,
			g._i)(38404, {
				num: l
			}) : (0,
				g._i)(40160, {
					num: l
				})))), s.createElement("span", {
					className: p.score
				}, (0,
					g._i)(13533, {
						xp: o
					})))
			, f = ({ years: e }) => {
				const t = (0,
					v.tX)()
					, a = e >= 2;
				return s.useEffect((() => {
					t({
						reward: "vipStatus",
						timestamp: Date.now(),
						type: "SET_STREAK_SOCIETY_REWARD_CLAIMED"
					})
				}
				), []),
					s.createElement("div", {
						className: d.Z.slide
					}, s.createElement("div", {
						className: m.Z.wrap
					}, s.createElement("div", {
						className: m.Z.content
					}, s.createElement("div", {
						className: p["illustration-container"]
					}, s.createElement("div", {
						className: p["leaderboard-illustration-container"]
					}, s.createElement("div", {
						className: p["leaderboard-illustration"]
					}, s.createElement(h, {
						avatar: c,
						name: (0,
							g._i)(29595),
						rank: 8,
						score: 110
					}), s.createElement(h, {
						avatar: l,
						isHighlighted: !0,
						name: (0,
							g._i)(13706),
						rank: 9,
						score: 100,
						years: e
					}), s.createElement(h, {
						avatar: o,
						name: (0,
							g._i)(29594),
						rank: 10,
						score: 90
					})))), s.createElement("div", {
						className: p.flair
					}, (0,
						g._i)(34808)), s.createElement("h2", {
							className: r()(m.Z.title, p.title)
						}, a ? (0,
							g._i)(49446, {
								num: e
							}) : (0,
								g._i)(49690)))))
			}
	}
	,
	25656: (e, t, a) => {
		a.d(t, {
			Z: () => p
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(9316)
			, o = a(75073)
			, l = a(72117);
		const c = {
			tagline: "_3pDVG",
			title: "_1Ihzu",
			flair: "_2TJxa"
		};
		var d = a(50498)
			, u = a(95940)
			, m = a(18804);
		const p = () => {
			const e = (0,
				m.tX)()
				, [t, a] = s.useState(!1);
			return s.useEffect((() => {
				e({
					reward: "xpBoost",
					timestamp: Date.now(),
					type: "SET_STREAK_SOCIETY_REWARD_CLAIMED"
				})
			}
			), []),
				s.useEffect((() => {
					(async () => {
						await (0,
							d._v)(500),
							a(!0)
					}
					)()
				}
				), []),
				s.createElement("div", {
					className: o.Z.slide
				}, s.createElement("div", {
					className: l.Z.wrap
				}, s.createElement("div", {
					className: l.Z.content
				}, s.createElement("div", {
					className: c["chest-container"]
				}, s.createElement(i.Z, {
					animate: !0,
					isPlaying: t,
					type: "streakSocietyWelcome"
				})), s.createElement("div", {
					className: c.flair
				}, (0,
					u._i)(34808)), s.createElement("h2", {
						className: r()(l.Z.title, c.title)
					}, (0,
						u._i)(49449, {
							num: 30
						})))))
		}
	}
	,
	42804: (e, t, a) => {
		a.d(t, {
			I: () => f,
			Z: () => y
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(31542)
			, o = a(36666)
			, l = a(15543)
			, c = a(56328)
			, d = a(84905)
			, u = a(18120)
			, m = a(34107)
			, p = a(68602)
			, g = a(4349)
			, v = a(21483);
		const h = {
			container: "_3VyQa",
			token: "_2O7Ua _3U5_i",
			draggable: "_1HvEX",
			"has-match-animation": "_3Ymqr",
			"token-math": "_2XrY- _2O7Ua _3U5_i",
			"size-large": "_3ZtW_",
			"token-damaged-end-left": "uH0wG _2O7Ua _3U5_i",
			used: "_31wR2",
			"token-damaged-end-right": "_1eZbv _2O7Ua _3U5_i",
			"token-damaged-end-both": "_3TjPf _2O7Ua _3U5_i",
			"token-damaged-end-in-answer": "_3Fpm6 uH0wG _2O7Ua _3U5_i",
			"token-damaged-end-in-answer-both": "_3UErJ _3TjPf _2O7Ua _3U5_i",
			"token-story-non-highlighted": "_2sAj4 _2O7Ua _3U5_i",
			"used-children": "_3gyEe _31wR2",
			"center-children": "NOUOz",
			"has-hotkey": "_1YHBP",
			hotkey: "_2MhQB",
			"size-normal": "_2MSiC",
			"size-shorter": "_1r5cj",
			"size-stories-inline": "_1R3Iz",
			"size-alphabets-medium": "XvW9W",
			"size-alphabets-large": "bbU8H",
			"size-svg-puzzle": "_1OBCT",
			"color-selected": "_3Nuad",
			"decorated-text": "_1XKa3",
			fill: "_12ozk",
			hidden: "_1XUN9",
			"color-correct": "_1fSGc",
			"_correct-animation-text": "_104I5",
			"_correct-animation": "eSTul",
			"color-correct-disabled": "_3fnzE",
			"_correct-animation-text-disabled": "s6zk4",
			"_correct-animation-disabled": "GEqFr",
			"color-incorrect": "_3UBZw",
			"_wrong-animation-text": "_3Pw1r",
			"_wrong-animation": "_3aFh_",
			"color-incorrect-disabled": "n3aI5",
			"_wrong-animation-text-disabled": "_37PJE",
			"_wrong-animation-disabled": "R8pg7",
			"hotkey-hidden": "_1syhq _2MhQB",
			_sparkles: "_1pS_d",
			"sparkles-match": "_2woU8 _1pS_d",
			"sparkles-regular": "_3N5ZB _1pS_d",
			text: "_231NG",
			"text-wrap": "b69xA",
			"text-fill-height": "_3YKLS",
			"transliterations-line-height-fix": "QKpG6"
		};
		var f, _ = a(30033), k = a(67173), b = a(67116);
		!function (e) {
			e.AlphabetsMedium = "alphabets-medium",
				e.AlphabetsLarge = "alphabets-large",
				e.Large = "large",
				e.Normal = "normal",
				e.Shorter = "shorter",
				e.StoriesInline = "stories-inline",
				e.SvgPuzzle = "svg-puzzle"
		}(f || (f = {}));
		const E = s.forwardRef((({ animation: e, animatedSpeakerIconRef: t, area: a, autoFocus: n, children: f, disabled: y = !1, disabledStyle: S = "faded", draggable: C = !1, extraLineHeight: w, fakeActive: x, fakeHover: R, forceDragFrom: T, hideHotkey: N = !1, highlightIndex: F, isCharacter: I, isComposing: D, language: P, numberKey: L, onDrag: A, onDragEnd: O, onDragStart: M, onPointerDown: Z, onTap: z, selected: U = !1, size: G, sparklesStyle: B, style: H, text: W, textWrap: X, transliteration: V, variant: Q, waveformType: Y }, q) => {
			const K = s.useRef(null)
				, j = s.useRef(null)
				, $ = s.useRef(null)
				, J = s.useRef(null)
				, ee = s.useRef()
				, te = s.useRef(null)
				, { changePlaybackRate: ae, currentAnimations: ne, didFadeOutHighlights: re, sparklesCounter: se, transportAnimation: ie } = (0,
					v.C)(e, {
						containerRef: K,
						fillRef: j,
						flyingRef: $,
						localRef: J,
						textRef: te
					})
				, { cloneStyle: oe, handlePointerDown: le, isDragging: ce, releasedAt: de } = (0,
					c.Z)(C && !y && !ne.includes("SHOW_USED"), {
						forceDragFrom: T,
						onDrag: A,
						onDragEnd: O,
						onDragStart: M
					})
				, ue = ce && "word-bank" === a;
			ee.current = de;
			const me = !(!ne.includes("SHOW_USED") && !ue) || y
				, pe = ne.includes("SHOW_USED") || ue ? "used" : S;
			s.useImperativeHandle(q, (() => ({
				get animatedRect() {
					var e, t, a, n;
					return null !== (a = null === (t = null === (e = $.current) || void 0 === e ? void 0 : e.el) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== a ? a : null === (n = J.current) || void 0 === n ? void 0 : n.getBoundingClientRect()
				},
				get el() {
					return J.current
				},
				get releasedAtRect() {
					var e;
					if (ee.current) {
						const t = null === (e = J.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
						if (t)
							return new DOMRect(ee.current.x, ee.current.y, t.width, t.height)
					}
				},
				setPlaybackRate: e => {
					ae(e)
				}
			})));
			const ge = U ? "selected" : ne.includes("CORRECT") ? "correct" : ne.includes("CORRECT_DISABLED") ? "correct-disabled" : ne.includes("INCORRECT") ? "incorrect" : ne.includes("INCORRECT_DISABLED") ? "incorrect-disabled" : void 0;
			return s.createElement(s.Fragment, null, s.createElement("span", {
				className: h.container,
				ref: K
			}, s.createElement(o.Z, {
				autoFocus: n,
				className: r()("notranslate", h[`size-${G}`], h["token" + (Q ? `-${Q}` : "")], {
					[h[`color-${ge}`]]: ge,
					[h.draggable]: C,
					[h["has-hotkey"]]: void 0 !== L && !N,
					[h["has-match-animation"]]: "match" === B,
					[h.hidden]: ie && !ne.includes("SHOW_USED"),
					[h.used]: me && "used" === pe,
					[h["transliterations-line-height-fix"]]: w
				}),
				dir: (0,
					b.Ux)(P),
				disabled: me,
				fakeActive: x,
				fakeHover: R,
				lang: P,
				onClick: me ? void 0 : () => null == z ? void 0 : z({}),
				onPointerDown: e => {
					le(e),
						null == Z || Z(e)
				}
				,
				ref: J,
				style: H,
				translate: "no",
				unstyledDisabled: "unstyled" === pe,
				useDisabledAttribute: !1,
				variant: "stroke",
				...(0,
					_._q)(`${W}-${k.V.ChallengeTapToken}`)
			}, (() => {
				const a = () => V ? s.createElement(l.Z, {
					highlightStyle: "normal",
					highlights: [],
					state: "CORRECT_MATCH" === (null == e ? void 0 : e.name) || "INCORRECT_MATCH" === (null == e ? void 0 : e.name) || "PRESS" === (null == e ? void 0 : e.name) || "SELECTED" === (null == e ? void 0 : e.name) || U || me && "used" === pe ? "active" : void 0,
					text: [...W],
					transliteration: V
				}) : f ? s.createElement("span", {
					className: r()({
						[h["used-children"]]: me && "used" === pe,
						[h["center-children"]]: "math" === Q
					})
				}, f) : s.createElement("span", {
					...(0,
						_._q)(k.V.ChallengeTapTokenText)
				}, W)
					, n = void 0 === L ? null : s.createElement(u.Z, {
						animation: e,
						className: N ? h["hotkey-hidden"] : h.hotkey,
						disabled: me,
						disabledStyle: "unstyled" === pe ? "unstyled" : void 0,
						index: L - 1,
						onTrigger: () => null == z ? void 0 : z({
							hotkey: !0
						}),
						selected: U
					});
				if (void 0 !== Y)
					return s.createElement(s.Fragment, null, s.createElement("span", {
						className: h.fill,
						ref: j
					}), n, s.createElement("span", {
						className: h.text,
						ref: te
					}, s.createElement(m.ZP, {
						color: ne.includes("CORRECT_WAVEFORM") ? "tree-frog" : ne.includes("INCORRECT_WAVEFORM") ? "cardinal" : me ? "swan" : "macaw",
						ref: t,
						waveformNum: Y
					}), void 0 !== B && n ? s.createElement(p.Z, {
						animationCounter: se,
						className: h[`sparkles-${B}`]
					}) : null), void 0 === B || n ? null : s.createElement(p.Z, {
						animationCounter: se,
						className: h[`sparkles-${B}`]
					}));
				const i = me ? 0 : null != F ? F : 0;
				return i > 0 && null === n && !I ? s.createElement(s.Fragment, null, s.createElement("span", {
					className: h.hidden
				}, W), s.createElement("span", {
					className: h["decorated-text"]
				}, s.createElement(g.Z, {
					fadeOut: re,
					highlightIndex: i,
					isComposing: D,
					text: W
				}))) : s.createElement(s.Fragment, null, s.createElement("span", {
					className: h.fill,
					ref: j
				}), n, s.createElement("span", {
					className: r()(h.text, {
						[h["text-wrap"]]: X,
						[h["text-fill-height"]]: "math" === Q
					}),
					ref: te
				}, I ? s.createElement(d.Z, {
					learningLanguage: P
				}, a()) : a(), void 0 !== B && n ? s.createElement(p.Z, {
					animationCounter: se,
					className: h[`sparkles-${B}`]
				}) : null), void 0 === B || n ? null : s.createElement(p.Z, {
					animationCounter: se,
					className: h[`sparkles-${B}`]
				}))
			}
			)())), ce || ie ? (0,
				i.createPortal)(s.createElement(E, {
					animation: ie,
					disabled: me && !ce,
					disabledStyle: "unstyled",
					extraLineHeight: w,
					fakeActive: ce,
					fakeHover: ce,
					hideHotkey: N,
					highlightIndex: ce || (null == ie ? void 0 : ie.fromWordBank) ? F : void 0,
					isCharacter: I,
					isComposing: D,
					language: P,
					numberKey: L,
					onTap: ce ? void 0 : z,
					ref: $,
					size: G,
					style: ce ? {
						...oe,
						zIndex: 1
					} : void 0,
					text: W,
					textWrap: X,
					transliteration: V,
					variant: "damaged-end-in-answer" === Q ? "damaged-end-left" : "damaged-end-in-answer-both" === Q ? "damaged-end-both" : Q,
					waveformType: Y
				}, f), document.querySelector("#overlays")) : null)
		}
		))
			, y = E
	}
	,
	4478: (e, t, a) => {
		a.d(t, {
			Z: () => _,
			c: () => f
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(80254)
			, o = a(42804)
			, l = a(42659);
		const c = {
			"_token-container": "_DVHp",
			"with-transliteration": "C67H0",
			"wrap-lines": "_1VxfZ",
			"token-container-alphabets-medium": "_1fHJa _DVHp",
			"has-hotkey": "_3a7VE",
			"token-container-alphabets-large": "_236Dd _DVHp",
			"token-container-large": "_1uV0Q _DVHp",
			"token-container-normal": "_3BqMq _DVHp",
			"token-container-shorter": "J9hjZ _DVHp",
			"token-container-svg-puzzle": "_1SjXv _DVHp",
			"input-lines": "_1arte",
			"_input-line": "D0fy9",
			"input-line-large": "_3gJ3o D0fy9",
			"input-line-normal": "k_Bha D0fy9",
			"input-line-shorter": "_8AROP D0fy9",
			"wrap-lines-tokens": "_2-F7v",
			"wrap-word-bank": "eSgkc"
		};
		var d = a(30033)
			, u = a(67173)
			, m = a(68903)
			, p = a(67116)
			, g = a(18804)
			, v = a(34704);
		const h = {
			[o.I.AlphabetsMedium]: 4,
			[o.I.AlphabetsLarge]: 5,
			[o.I.Large]: 4,
			[o.I.Normal]: 2,
			[o.I.Shorter]: 2,
			[o.I.StoriesInline]: 0,
			[o.I.SvgPuzzle]: 5
		}
			, f = (e, t) => h[e] - (t ? 17 : 0)
			, _ = ({ autoFocus: e, choices: t, disabled: a, draggable: n, language: h, onDrag: _, onDragEnd: k, onDragStart: b, onTap: E, selectedIndices: y, size: S, style: C, tokenProps: w, tokensRef: x, usedStyle: R = "used" }) => {
				const T = s.useRef([])
					, N = s.useRef();
				s.useEffect((() => {
					const e = {
						choices: t,
						selectedIndices: y
					};
					!x || N.current && i.Xy(N.current, e) || x(T.current.filter(m.$K)),
						N.current = e
				}
				));
				const F = (0,
					g.Fx)(l.Rv)
					, I = (0,
						g.Fx)(l.iH)
					, D = (0,
						g.Fx)(v.hg)
					, P = (0,
						g.Fx)(l.is)
					, L = () => (0,
						v._G)(P.type) && (0,
							v.dN)(I, F, D)
					, A = D && t.some((e => {
						var t;
						return null === (t = e.textTransliteration) || void 0 === t ? void 0 : t.tokens.some((e => (0,
							v.iZ)(e, D.type)))
					}
					))
					, O = e => r()(c[`token-container-${S}`], {
						[c["with-transliteration"]]: A && L(),
						[c["has-hotkey"]]: e
					})
					, M = e => A && (e => {
						var a;
						return !D || (null === (a = t[e].textTransliteration) || void 0 === a ? void 0 : a.tokens.every((e => !(0,
							v.iZ)(e, D.type))))
					}
					)(e) && L();
				switch (C) {
					case "lines":
						return s.createElement("div", {
							className: c["wrap-lines"],
							dir: (0,
								p.Ux)(h)
						}, s.createElement("div", {
							className: c["input-lines"]
						}, i.DZ(5, (e => s.createElement("div", {
							className: r()(c[`input-line-${S}`], A && L() ? c["with-transliteration"] : null),
							key: e
						})))), s.createElement("div", {
							className: c["wrap-lines-tokens"]
						}, y.map(((e, r) => {
							const { attachToPrevToken: i = !1, offset: l, zIndex: c, ...d } = w[e]
								, u = f(S);
							return s.createElement(s.Fragment, {
								key: e
							}, l ? s.createElement("div", {
								className: O(),
								style: {
									width: l
								}
							}) : null, s.createElement("div", {
								className: O(d.numberKey),
								key: e,
								style: {
									"--tap-tokens-token-margin-before": `${f(S, i)}px`,
									"--tap-tokens-token-margin-after": `${u}px`,
									zIndex: c
								}
							}, s.createElement(o.Z, {
								disabled: a,
								disabledStyle: "unstyled",
								draggable: n,
								extraLineHeight: M(e),
								language: h,
								onDrag: t => null == _ ? void 0 : _(e, t),
								onDragEnd: t => null == k ? void 0 : k(e, t),
								onDragStart: t => null == b ? void 0 : b(e, t),
								onTap: () => E(e),
								ref: e => T.current[r] = e,
								size: S,
								text: t[e].text,
								transliteration: t[e].textTransliteration && L() ? t[e].textTransliteration : void 0,
								...d
							})))
						}
						))));
					case "word-bank":
						{
							const i = t.findIndex(((e, t) => !y.includes(t)));
							return s.createElement("div", {
								className: r()(c["wrap-word-bank"], c[`wrap-word-bank-${S}`]),
								...(0,
									d._q)(u.V.WordBank)
							}, t.map(((r, l) => {
								const { attachToPrevToken: c, offset: d, zIndex: u, ...m } = w[l]
									, p = f(S)
									, g = y.includes(l);
								return s.createElement("div", {
									className: O(m.numberKey),
									key: l,
									style: {
										"--tap-tokens-token-margin-before": `${p}px`,
										"--tap-tokens-token-margin-after": `${p}px`,
										zIndex: u
									}
								}, s.createElement(o.Z, {
									area: "word-bank",
									autoFocus: e && l === i,
									disabled: a || g,
									disabledStyle: g ? R : "unstyled",
									draggable: n,
									extraLineHeight: M(l),
									language: h,
									onDrag: e => null == _ ? void 0 : _(l, e),
									onDragEnd: e => null == k ? void 0 : k(l, e),
									onDragStart: e => null == b ? void 0 : b(l, e),
									onTap: () => E(l),
									ref: e => T.current[l] = e,
									size: S,
									text: r.text,
									transliteration: t[l].textTransliteration && L() ? t[l].textTransliteration : void 0,
									...m
								}))
							}
							)))
						}
					default:
						return (0,
							m.RJ)(C),
							null
				}
			}
	}
	,
	4349: (e, t, a) => {
		a.d(t, {
			Z: () => s
		});
		var n = a(27378);
		const r = {
			highlighted: "_27oGP",
			"highlighted-composing": "_1pjkL",
			"highlighted-fade-out": "_2_f9k",
			fade: "_2v4I5"
		}
			, s = ({ fadeOut: e, highlightIndex: t = 0, isComposing: a, text: s }) => {
				let i = s.slice(0, t);
				const o = s.slice(t);
				return e || (i = i.replace(/ /g, "·")),
					i ? n.createElement(n.Fragment, null, n.createElement("span", {
						className: r["highlighted" + (e ? "-fade-out" : a ? "-composing" : "")]
					}, i), o) : n.createElement(n.Fragment, null, s)
			}
	}
	,
	67208: (e, t, a) => {
		a.d(t, {
			Z: () => S
		});
		var n = a(27378)
			, r = a(64502)
			, s = a(61429)
			, i = a(22498)
			, o = a(15746)
			, l = a(2306)
			, c = a(24267);
		const d = a.p + "images/27b9dc79e9fd7deb5d4ac0e48c19a23a.svg"
			, u = a.p + "lottie/a2b21e224ab5027cc34fd9976b4a9c74.json"
			, m = a.p + "lottie/a2bf5e70eb58fda52068ab397569a0e7.json";
		var p = a(9104)
			, g = a(41761);
		const v = {
			slide: "O55ez",
			"_slide-circles": "_1Uq-7",
			"slide-circles-3": "_1yiRJ _1Uq-7",
			"slide-circles-5": "_3Ja2a _1Uq-7",
			"slide-circles-7": "_3LUJ9 _1Uq-7",
			wrap: "_3ahcA",
			"streak-circle": "OfNk6",
			"streak-circle-today": "_2sjiM",
			"streak-circle-pop-today": "_3pSE6",
			"streak-circle-extended": "mpqqL OfNk6",
			"streak-circle-frozen": "_2VYm2 OfNk6",
			"streak-circle-empty": "Rewuq OfNk6",
			"streak-circle-broken": "_7-ZYd OfNk6",
			"streak-circle-nudge": "_3g_6k OfNk6",
			"streak-scale-in-out": "_1YWYX",
			"streak-circle-empty-no-checkmark": "_3kN1c Rewuq OfNk6",
			"circle-label": "_38klf",
			"circle-label-top-empty": "_2z97y",
			"circle-label-top-nudge": "_3LEhS _2z97y",
			"circle-label-top-broken": "_2TKYM _2z97y",
			"circle-label-top-extended": "K2FC_ _2z97y",
			"circle-label-top-frozen": "_3jf9S _2z97y",
			checkmark: "_2TXWk",
			x: "_2AmUh",
			stem: "_2OXpp _2CoFd"
		};
		var h = a(50498)
			, f = a(17135)
			, _ = a(95940)
			, k = a(795)
			, b = a(76578)
			, E = a(6947);
		const y = (0,
			_.ip)()
			, S = ({ alwaysShowAnimation: e = !1, canStartAnimation: t = !0, dayOffset: a = 0, delay: _ = 0, daysInCurrentStreak: k, highlightNextDay: S, showFlamePop: w = !1, showSevenDayCalendar: x = !1, timezoneOffset: R, xpPerDay: T }) => {
				const N = (0,
					o.Z)()
					, F = "dark" === (0,
						r.Fg)()
					, I = k.length < E.Yt && !x ? E.Yt : y.length
					, D = (0,
						b.vN)((0,
							f.ji)(R) + a, y.length)
					, P = (0,
						s.Z)(!1, (async () => (t || await (0,
							h.f)(),
							await (0,
								h._v)(_),
							!0)), [t])
					, L = C(T, k, I, D);
				return n.createElement("div", {
					className: v[`slide-circles-${I}`]
				}, L.map(((t, a) => {
					const r = a === k.length && S ? "streakNudge" === S ? "nudge" : "broken" : void 0
						, s = t.xpNew ? "extended" : t.blue ? "frozen" : r || "empty";
					return n.createElement("div", {
						className: v.wrap,
						key: a
					}, a !== k.length - 1 && !e || "extended" !== s ? n.createElement(n.Fragment, null, n.createElement("div", {
						className: v[`circle-label-top-${s}`]
					}, t.label), n.createElement("div", {
						className: v[`streak-circle-${s}`]
					}, n.createElement("div", {
						className: v["circle-label"]
					}, ["empty", "nudge"].includes(s) ? null : n.createElement("img", {
						className: "broken" === s ? v.x : v.checkmark,
						src: "broken" === s ? d : F ? l : c
					})))) : n.createElement(n.Fragment, null, n.createElement("div", {
						className: v[`circle-label-top-${s}`]
					}, t.label), n.createElement("div", {
						className: v["streak-circle-empty-no-checkmark"]
					}, n.createElement(n.Suspense, {
						fallback: null
					}, n.createElement(i.Z, {
						className: w ? v["streak-circle-pop-today"] : v["streak-circle-today"],
						isPlaying: P && !N,
						mainSegment: [N || "streakNudge" === S ? 152 : w ? 60 : 30, 153],
						path: w ? F ? u : m : F ? p : g
					})))), "nudge" === s ? n.createElement("div", {
						className: v.stem
					}) : null)
				}
				)))
			}
			, C = (e, t, a, n) => {
				const r = (0,
					k.qj)(t).map(((a, r) => {
						const s = t.length - 1 - r;
						return {
							blue: a.streakFreezeUsed,
							label: y[(n - s + y.length) % y.length],
							xpNew: e[e.length - 1 - s],
							xpOld: e[e.length - 1 - s]
						}
					}
					))
					, s = a - r.length;
				for (let e = 0; e < s; e++)
					r.push({
						blue: !1,
						label: y[(n + e + 1) % y.length],
						xpNew: 0,
						xpOld: 0
					});
				return r
			}
	}
	,
	70752: (e, t, a) => {
		a.d(t, {
			Z: () => f
		});
		var n = a(27378)
			, r = a(78939)
			, s = a(80254);
		const i = JSON.parse('{"en":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety","100":"hundred","1000":"thousand"},"de":{"0":"null","1":"ein","2":"zwei","3":"drei","4":"vier","5":"fünf","6":"sechs","7":"sieben","8":"acht","9":"neun","10":"zehn","11":"elf","12":"zwölf","13":"dreizehn","14":"vierzehn","15":"fünfzehn","16":"sechzehn","17":"siebzehn","18":"achtzehn","19":"neunzehn","20":"zwanzig","21":"einundzwanzig","22":"zweiundzwanzig","23":"dreiundzwanzig","24":"vierundzwanzig","25":"fünfundzwanzig","26":"sechsundzwanzig","27":"siebenundzwanzig","28":"achtundzwanzig","29":"neunundzwanzig","30":"dreißig","31":"einunddreißig","32":"zweiunddreißig","33":"dreiunddreißig","34":"vierunddreißig","35":"fünfunddreißig","36":"sechsunddreißig","37":"siebenunddreißig","38":"achtunddreißig","39":"neununddreißig","40":"vierzig","41":"einundvierzig","42":"zweiundvierzig","43":"dreiundvierzig","44":"vierundvierzig","45":"fünfundvierzig","46":"sechsundvierzig","47":"siebenundvierzig","48":"achtundvierzig","49":"neunundvierzig","50":"fünfzig","51":"einundfünfzig","52":"zweiundfünfzig","53":"dreiundfünfzig","54":"vierundfünfzig","55":"fünfundfünfzig","56":"sechsundfünfzig","57":"siebenundfünfzig","58":"achtundfünfzig","59":"neunundfünfzig","60":"sechzig","61":"einundsechzig","62":"zweiundsechzig","63":"dreiundsechzig","64":"vierundsechzig","65":"fünfundsechzig","66":"sechsundsechzig","67":"siebenundsechzig","68":"achtundsechzig","69":"neunundsechzig","70":"siebzig","71":"einundsiebzig","72":"zweiundsiebzig","73":"dreiundsiebzig","74":"vierundsiebzig","75":"fünfundsiebzig","76":"sechsundsiebzig","77":"siebenundsiebzig","78":"achtundsiebzig","79":"neunundsiebzig","80":"achtzig","81":"einundachtzig","82":"zweiundachtzig","83":"dreiundachtzig","84":"vierundachtzig","85":"fünfundachtzig","86":"sechsundachtzig","87":"siebenundachtzig","88":"achtundachtzig","89":"neunundachtzig","90":"neunzig","91":"einundneunzig","92":"zweiundneunzig","93":"dreiundneunzig","94":"vierundneunzig","95":"fünfundneunzig","96":"sechsundneunzig","97":"siebenundneunzig","98":"achtundneunzig","99":"neunundneunzig","100":"hundert","123":"hundertdreiundzwanzig","1000":"tausend"},"es":{"0":"cero","1":"uno","2":"dos","3":"tres","4":"cuatro","5":"cinco","6":"seis","7":"siete","8":"ocho","9":"nueve","10":"diez","11":"once","12":"doce","13":"trece","14":"catorce","15":"quince","16":"dieciséis","17":"diecisiete","18":"dieciocho","19":"diecinueve","20":"veinte","21":"veintiuno","22":"veintidós","23":"veintitrés","24":"veinticuatro","25":"veinticinco","26":"veintiséis","27":"veintisiete","28":"veintiocho","29":"veintinueve","30":"treinta","40":"cuarenta","50":"cincuenta","60":"sesenta","70":"setenta","80":"ochenta","90":"noventa","100":"cien","1000":"mil"},"pt":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezesseis","17":"dezessete","18":"dezoito","19":"dezenove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","1000":"mil"},"it":{"0":"zero","1":"uno","2":"due","3":"tre","4":"quattro","5":"cinque","6":"sei","7":"sette","8":"otto","9":"nove","10":"dieci","11":"undici","12":"dodici","13":"tredici","14":"quattordici","15":"quindici","16":"sedici","17":"diciassette","18":"diciotto","19":"diciannove","20":"venti","30":"trenta","40":"quaranta","50":"cinquanta","60":"sessanta","70":"settanta","80":"ottanta","90":"novanta","100":"cento","1000":"mille"},"fr":{"0":"zéro","1":"un","2":"deux","3":"trois","4":"quatre","5":"cinq","6":"six","7":"sept","8":"huit","9":"neuf","10":"dix","11":"onze","12":"douze","13":"treize","14":"quatorze","15":"quinze","16":"seize","17":"dix-sept","18":"dix-huit","19":"dix-neuf","20":"vingt","30":"trente","40":"quarante","50":"cinquante","60":"soixante","70":"soixante-dix","80":"quatre-vingts","90":"quatre-vingt-dix","100":"cent","1000":"mille"}}');
		var o = a(68903)
			, l = a(43006);
		const c = {
			es: {
				a: /[á]/g,
				b: /[v]/g,
				e: /[é]/g,
				i: /[í]/g,
				o: /[ó]/g,
				s: /[z]/g,
				u: /[úü]/g
			},
			fr: {
				a: /[àâæ]/g,
				e: /[èéêë]/g,
				i: /[îï]/g,
				o: /[ôœ]/g,
				s: /[ç]/g,
				u: /[ùûü]/g
			}
		}
			, d = (0,
				o.p)(s.ZP.keys(c))
			, u = (e, t) => {
				if (t && (t = t.toLowerCase(),
					d(e)))
					for (const [a, n] of Object.entries(c[e]))
						t = t.replace(n, a);
				return t || ""
			}
			, m = (0,
				o.p)(s.ZP.keys(i))
			, p = (e, t = !0) => {
				if (e) {
					const a = new RegExp(`[${t ? l.ls : l.nx}]`, "g")
						, n = /[\u00C0-\u1FFF\u2C00-\uD7FF\w]+([-'][\u00C0-\u1FFF\u2C00-\uD7FF\w])+/g
						, r = Array.from(e.matchAll(n)).map((e => {
							const t = e.index;
							return {
								end: t + e[0].length,
								start: t
							}
						}
						));
					let s = ""
						, i = 0;
					for (const t of r)
						i < t.start && (s += e.slice(i, t.start).replace(a, " ")),
							s += e.slice(t.start, t.end),
							i = t.end;
					i < e.length && (s += e.slice(i).replace(a, " ")),
						s = s.toLowerCase(),
						s = s.replace(/\s+/g, " "),
						s = s.trim(),
						e = s
				}
				return e || ""
			}
			, g = {
				da: "da-DK",
				de: "de-DE",
				en: "en-US",
				es: "es-MX",
				fr: "fr-FR",
				it: "it-IT",
				"nl-NL": "nl-NL",
				"no-BO": "nb-NO",
				pt: "pt-BR",
				ru: "ru-RU",
				sv: "sv-SE",
				tr: "tr-TR",
				uk: "uk-UA"
			};
		class v {
			constructor(e, t) {
				this.isDone = !1,
					this.processRecognizerResult = e => {
						let t = ""
							, a = "";
						for (let n = e.resultIndex; n < e.results.length; ++n) {
							const r = e.results[n][0].transcript.trim();
							e.results[n].isFinal ? t += `${r} ` : a += `${r} `
						}
						let n = `${t} ${a}`;
						n = ((e, t) => {
							if (t && ("en" === e && (t = (t = (t = (t = (t = t.replace(/'s/g, " is")).replace(/'m/g, " am")).replace(/'re/g, " are")).replace(/'ll/g, " will")).replace(/'ve/g, " have")),
								m(e)))
								for (const [a, n] of Object.entries(i[e])) {
									const e = new RegExp(`\\b${a}\\b`, "g");
									t = t.replace(e, n)
								}
							return t || ""
						}
						)(this.learningLanguage, n);
						const r = u(this.learningLanguage, p(n, !1)).trim();
						let s = !1;
						return r && this.rawTranscriptNorm !== r && (this.alignSolution(r),
							s = !0),
							this.rawTranscriptNorm = r,
							s
					}
					,
					this.getProgress = () => {
						const e = this.solutionSequence.map((e => e.isRecognized ? e.text : "")).join(" ");
						return Math.max(e.length / this.prompt.length, this.rawTranscriptNorm.length / this.referenceNorm.length)
					}
					,
					this.alignSolution = e => {
						const t = this.findBestMatch(e);
						for (const e of t)
							if (null !== e) {
								const { start: t, end: a } = e;
								this.solutionSequence = this.solutionSequence.map((e => e.start >= t && e.end <= a && !e.isRecognized ? {
									...e,
									isRecognized: !0
								} : e))
							}
						let a = !0;
						for (const e of this.solutionSequence)
							e.isRecognized || (a = !1);
						this.isDone = a
					}
					,
					this.findBestMatch = e => {
						const t = e.split(/[\s]+/)
							, a = [];
						for (let e = 0; e < t.length; e++) {
							let o = null
								, l = .2;
							if (t[e].length > 0)
								for (let a = 0; a < this.acceptSpanGroups.length; a++) {
									const c = this.acceptSpanGroups[a];
									for (const d of c)
										for (const c of d.texts) {
											const u = c.split(/[\s]+/).length
												, m = t.slice(e, e + u).join(" ");
											let p = (n = m,
												s = c,
												i = d.lenient,
												n && s ? i ? 1 - (0,
													r.sd)(s, n) / s.length : n === s ? 1 : 0 : 0);
											p -= .1 * Math.abs(m.length - c.length),
												p -= .1 * Math.abs(a - e),
												p > l && (l = p,
													o = d)
										}
								}
							a.push(o)
						}
						var n, s, i;
						return a
					}
					,
					this.learningLanguage = e.language,
					this.prompt = e.text,
					this.solutionSequence = t;
				const a = e => u(this.learningLanguage, p(e, !1));
				this.referenceNorm = a(this.prompt),
					this.rawTranscriptNorm = "",
					this.acceptSpanGroups = t.map((t => e.alternatives.filter((({ start: e, end: a }) => a > t.start && e < t.end)).map((e => ({
						...e,
						texts: e.texts.map(a)
					})))))
			}
		}
		const h = class {
			constructor(e, t, a, n, r) {
				var s;
				this.recognizer = (() => {
					const e = new window.webkitSpeechRecognition;
					return e.continuous = !0,
						e.interimResults = !0,
						e
				}
				)(),
					this.start = () => {
						this.recognizer.start()
					}
					,
					this.stop = () => {
						window.clearTimeout(this.recordingTimer),
							this.recognizer.abort(),
							this.updateRecognizerResults(this.duoRecognizerProcessor.solutionSequence, !0),
							this.onEnd()
					}
					,
					this.destroy = () => {
						window.clearTimeout(this.recordingTimer),
							this.recognizer.abort(),
							this.onEnd()
					}
					,
					this.onResult = e => {
						if (window.clearTimeout(this.recordingTimer),
							this.duoRecognizerProcessor.processRecognizerResult(e) && this.updateRecognizerResults(this.duoRecognizerProcessor.solutionSequence, this.duoRecognizerProcessor.isDone),
							this.duoRecognizerProcessor.isDone)
							this.onEnd(),
								this.recognizer.abort();
						else {
							const e = this.duoRecognizerProcessor.getProgress()
								, t = Math.max(5e3 * (1 - e), 1e3);
							this.recordingTimer = window.setTimeout(this.stop, t)
						}
					}
					,
					this.onError = e => {
						"aborted" !== e.error && (this.handleError(e),
							window.clearTimeout(this.recordingTimer),
							this.recognizer.abort(),
							this.onEnd())
					}
					,
					this.recognizer.lang = null !== (s = g[a.language]) && void 0 !== s ? s : a.language,
					this.recognizer.onresult = this.onResult,
					this.recognizer.onerror = this.onError,
					this.duoRecognizerProcessor = new v(a, n),
					this.onEnd = t,
					this.updateRecognizerResults = e,
					this.updateRecognizerResults([{
						end: 0,
						isRecognized: !1,
						start: 0,
						text: ""
					}], !1),
					this.handleError = r
			}
		}
			, f = (e, t, a, r, s) => {
				const i = {
					isDone: !1,
					recognizerTokens: [{
						end: 0,
						isRecognized: !1,
						start: 0,
						text: ""
					}]
				}
					, [o, c] = n.useState(i)
					, [d, u] = n.useState(!1)
					, m = n.useRef(s)
					, [p, g] = n.useState(e)
					, [v, f] = n.useState(t);
				e === p && t === v || (c(i),
					u(!1),
					g(e),
					f(t));
				const _ = n.useRef()
					, k = () => {
						const n = {
							alternatives: [],
							language: t,
							text: e,
							version: 0
						}
							, { grader: s, tokens: i } = ((e, t) => {
								const { text: a } = e
									, n = t.filter((e => void 0 !== e.hintTable));
								let r = 0
									, s = 0;
								const i = n.map((e => {
									const t = a.indexOf(e.value, r)
										, n = a.slice(r, t)
										, i = s + (0,
											l.RF)(n);
									return s = i + (0,
										l.RF)(e.value),
										r = t + e.value.length,
									{
										end: s,
										isRecognized: !1,
										start: i,
										text: e.value
									}
								}
								))
									, o = [...i.map((e => ({
										end: e.end,
										lenient: !0,
										start: e.start,
										texts: [e.text]
									}))), ...e.alternatives];
								return {
									grader: {
										...e,
										alternatives: o
									},
									tokens: i
								}
							}
							)(null != a ? a : n, r);
						return new h(((e, t) => {
							c({
								isDone: t,
								recognizerTokens: e
							})
						}
						), (() => {
							u(!1)
						}
						), s, i, (e => m.current(e)))
					}
					;
				return n.useEffect((() => (_.current = k(),
					() => {
						var e;
						return null === (e = _.current) || void 0 === e ? void 0 : e.stop()
					}
				)), [e, t, a, r]),
					n.useEffect((() => {
						m.current = s
					}
					)),
				{
					isRecognizing: d,
					recognizerResults: o,
					resetRecognizer: () => {
						var e;
						u(!1),
							null === (e = _.current) || void 0 === e || e.stop(),
							_.current = k()
					}
					,
					startRecognizing: () => {
						var e;
						u(!0),
							null === (e = _.current) || void 0 === e || e.start()
					}
					,
					stopRecognizing: (e = !1) => {
						var t, a;
						u(!1),
							e ? null === (t = _.current) || void 0 === t || t.destroy() : null === (a = _.current) || void 0 === a || a.stop()
					}
				}
			}
	}
	,
	24582: (e, t, a) => {
		a.d(t, {
			L: () => o
		});
		var n = a(27378)
			, r = a(80254)
			, s = a(42659)
			, i = a(18804);
		const o = (e, t = !1, a = !0) => {
			const o = (0,
				i.tX)()
				, l = (0,
					i.Fx)(s.Rg);
			n.useEffect((() => {
				const n = l ? r.ZP.union(l, e) : e;
				a && o({
					type: "SET_SWRL_ENGAGEMENT",
					value: t ? n : e
				})
			}
			), [a])
		}
	}
	,
	42269: (e, t, a) => {
		a.d(t, {
			Z: () => i
		});
		var n = a(27378)
			, r = a(53146)
			, s = a(18804);
		const i = () => {
			const e = (0,
				s.tX)()
				, t = (0,
					s.Fx)((e => e.sessionEnd.slides));
			n.useEffect((() => {
				const a = t.filter((e => "can-track" === e.status));
				a.forEach((e => (0,
					r.l)(e))),
					a.length && e({
						slides: a.map((e => e.slide)),
						type: "sessionEnd/TRACKED"
					})
			}
			), [t])
		}
	}
	,
	66530: (e, t, a) => {
		a.d(t, {
			Z: () => c
		});
		var n = a(27378)
			, r = a(80254)
			, s = a(40472)
			, i = a(78939)
			, o = a(88268)
			, l = a(26506);
		const c = ({ gracePeriod: e, language: t, mode: a, onBackspace: c, onMatch: d, selectedIndices: u, tokens: m }) => {
			const [p, g] = n.useState()
				, [v, h] = n.useState(!1)
				, [f, _] = n.useState([])
				, [k, b] = n.useState("")
				, [E, y] = n.useState(-1)
				, [S, C] = n.useState(0)
				, [w, x] = n.useState("")
				, R = n.useRef()
				, T = n.useRef()
				, N = n.useRef()
				, F = n.useMemo((() => m.filter((({ }, e) => !u.includes(e))).sort(((e, t) => t.localeCompare(e)))), [u, m])
				, I = n.useMemo((() => {
					if ((0,
						s.y)(t) && p)
						return (0,
							s.M)(t)(F, {
								accentedCharacterMap: p.accentedCharacterMap,
								ignoreCase: !0
							})
				}
				), [t, p, F]);
			return n.useEffect((() => {
				if ((0,
					s.y)(t)) {
					let e = !1;
					return (async () => {
						const a = await (0,
							i.C3)(t);
						e || g(a)
					}
					)(),
						() => {
							e = !0
						}
				}
				g(void 0)
			}
			), [t]),
				n.useEffect((() => {
					void 0 !== N.current && r.Xy(N.current, u) || (b(""),
						v ? h(!1) : x(""),
						_(r.DZ(m.length, (e => {
							var t;
							return (null === (t = N.current) || void 0 === t ? void 0 : t.includes(e)) && !u.includes(e) ? void 0 : f[e]
						}
						))),
						N.current = u)
				}
				)),
				n.useEffect((() => {
					if (!I || "disabled" === a)
						return;
					const t = t => {
						if ((0,
							o.b)(t, "debug") || (0,
								o.b)(t, "slowTts") || (0,
									o.b)(t, "tts"))
							return;
						let n = !1;
						const r = () => {
							if ("remove-only" !== a && 1 === t.key.length) {
								const a = `${k}${t.key}`;
								w ? window.performance.now() < S + e && I.match(a, [w]).partialMatches > 0 ? (b(a),
									C(window.performance.now())) : (b(I.match(t.key).partialMatches > 0 ? t.key : ""),
										x("")) : I.match(a).partialMatches > 0 && b(a),
									n = !0
							}
						}
							;
						switch (t.key) {
							case " ":
							case "Enter":
								if ((" " === t.key || f.some(((e, t) => {
									var a;
									return !u.includes(t) && (null !== (a = null == e ? void 0 : e.index) && void 0 !== a ? a : 0) > 0
								}
								))) && (n = !0),
									"complete" === a && E > -1)
									d(E);
								else if ("remove-only" !== a) {
									const e = m.map(((e, t) => {
										var a, n;
										return !u.includes(t) && (null === (a = f[t]) || void 0 === a ? void 0 : a.index) === e.length && !(null === (n = f[t]) || void 0 === n ? void 0 : n.isComposing)
									}
									))
										, a = e.indexOf(!0);
									a > -1 && m[a].toLowerCase() === m[e.lastIndexOf(!0)].toLowerCase() && (" " !== t.key || !F.some((e => " " === e[m[a].length]))) ? d(a) : " " === t.key && r()
								}
								break;
							case "Backspace":
								k && !w ? b(k.slice(0, -1)) : null == c || c(),
									n = !0;
								break;
							default:
								r()
						}
						n && (t.preventDefault(),
							t.stopImmediatePropagation())
					}
						, n = e => {
							" " === e.key && e.preventDefault()
						}
						;
					return l._.addListener(document, "keydown", t, {
						capture: !0
					}),
						l._.addListener(document, "keyup", n),
						() => {
							l._.removeListener(document, "keydown", t, {
								capture: !0
							}),
								l._.removeListener(document, "keyup", n)
						}
				}
				)),
				n.useEffect((() => {
					const e = R.current !== k || T.current !== w;
					if (R.current = k,
						T.current = w,
						!e || !I)
						return;
					const { highlights: t, match: n } = w ? {
						highlights: [],
						match: -1
					} : I.match(k);
					if (_(m.map(((e, a) => u.includes(a) ? f[a] : t[F.indexOf(e)]))),
						n > -1) {
						const e = m.findIndex(((e, t) => e === F[n] && !u.includes(t)));
						y(e),
							"unique" === a ? (b(""),
								h(!0),
								x(m[e].slice(t[n].index)),
								C(window.performance.now()),
								d(e)) : "complete" === a && t[n].index === m[e].length && d(e)
					} else
						y(-1)
				}
				)),
			{
				highlights: f
			}
		}
	}
	,
	71184: (e, t, a) => {
		a.d(t, {
			$: () => p
		});
		var n = a(42659)
			, r = a(74462)
			, s = a(54174)
			, i = a(86233)
			, o = a(18225)
			, l = a(1)
			, c = a(60752)
			, d = a(89260)
			, u = a(79465)
			, m = a(11811);
		const p = e => async (t, a) => {
			var p, g, v, h, f, _, k, b;
			const E = (0,
				s.d)(a())
				, y = (0,
					r.q0)(a())
				, S = Math.max(0, y.hearts - 1);
			if ("session_mid" === e) {
				const e = (0,
					n.lA)(a())
					, t = e.challengeStates[e.currentIndex]
					, r = (0,
						d.TD)(e);
				if (t.type === m.Sm.CharacterWrite && (null === (p = t.guess) || void 0 === p ? void 0 : p.numSkippedStrokes) && (null === (g = t.guess) || void 0 === g ? void 0 : g.numSkippedStrokes) > 0)
					return;
				(0,
					u.track)("health_lost", {
						challenge_type: t.type,
						health_empty_level: null === (v = e.levelData) || void 0 === v ? void 0 : v.levelIndex,
						health_empty_skill: null === (h = e.levelData) || void 0 === h ? void 0 : h.level.id,
						health_total: S,
						...r
					}),
					0 === S && (0,
						u.track)("health_empty", {
							health_context: "session_mid",
							...r
						})
			} else {
				const e = (0,
					i.A9)(a());
				(0,
					u.track)("health_lost", {
						challenge_type: null === (_ = null === (f = e.storySession) || void 0 === f ? void 0 : f.challengeSession) || void 0 === _ ? void 0 : _.type,
						health_empty_level: null === (k = e.levelData) || void 0 === k ? void 0 : k.levelIndex,
						health_empty_skill: null === (b = e.levelData) || void 0 === b ? void 0 : b.level.id,
						health_total: S,
						type: "story"
					}),
					0 === S && (0,
						u.track)("health_empty", {
							health_context: "stories_session_mid",
							type: "story"
						})
			}
			if (!(0,
				l.is)(a().heartsState)) {
				if (E) {
					const e = await (0,
						c.b)();
					await e.add("submittableRequests", {
						type: "remove-heart"
					})
				} else
					o.Vi.removeHeart();
				t({
					currentTimestampMs: Date.now(),
					type: "DECREMENT_ONE_HEART"
				})
			}
		}
	}
	,
	83735: (e, t, a) => {
		a.d(t, {
			RX: () => Oe,
			YK: () => Ie,
			Z3: () => Te,
			a: () => Le,
			au: () => Ae,
			eX: () => Me,
			n4: () => Ne,
			p_: () => Fe,
			v1: () => Ze,
			vP: () => De,
			wZ: () => Pe,
			yj: () => Re
		});
		var n = a(86155)
			, r = a(14649)
			, s = a(94103)
			, i = a(33)
			, o = a(71184)
			, l = a(9249)
			, c = a(33403)
			, d = a(92882)
			, u = a(32817)
			, m = a(77873)
			, p = a(15879)
			, g = a(92500)
			, v = a(94944)
			, h = a(86518)
			, f = a(20426)
			, _ = a(90788)
			, k = a(42659)
			, b = a(73520)
			, E = a(74462)
			, y = a(54174)
			, S = a(93540)
			, C = a(93501)
			, w = a(83936)
			, x = a(27429)
			, R = a(84166)
			, T = a(15307)
			, N = a(50888)
			, F = a(18225)
			, I = a(50498)
			, D = a(97236)
			, P = a(95332)
			, L = a(70732)
			, A = a(18675)
			, O = a(9129)
			, M = a(17135)
			, Z = a(64115)
			, z = a(6962)
			, U = a(37971)
			, G = a(59815)
			, B = a(35506)
			, H = a(21025)
			, W = a(94171)
			, X = a(66238)
			, V = a(68903)
			, Q = a(59604)
			, Y = a(60752)
			, q = a(795)
			, K = a(43633)
			, j = a(41905)
			, $ = a(87443)
			, J = a(33124)
			, ee = a(58576)
			, te = a(99644)
			, ae = a(93890)
			, ne = a(7432)
			, re = a(23275)
			, se = a(71371)
			, ie = a(44637)
			, oe = a(84401)
			, le = a(67280)
			, ce = a(90110)
			, de = a(88624)
			, ue = a(40015)
			, me = a(89260)
			, pe = a(53146)
			, ge = a(51551)
			, ve = a(39837)
			, he = a(55419)
			, fe = a(37111)
			, _e = a(54448)
			, ke = a(79465)
			, be = a(34704)
			, Ee = a(11811)
			, ye = a(55829)
			, Se = a(40060)
			, Ce = a(16086)
			, we = a(97106);
		const xe = (e, t) => async () => {
			var a;
			if (await (0,
				I._v)(ie.UV),
				(null === (a = (0,
					k.is)(e())) || void 0 === a ? void 0 : a.id) !== t)
				throw new G.$K
		}
			, Re = () => async (e, t) => {
				const a = (0,
					k.Oz)(t())
					, n = (0,
						k.lA)(t())
					, r = (0,
						k.is)(t())
					, { challengeStates: s, currentIndex: i, sessionParams: o, status: l } = n
					, { challenges: c } = r
					, d = (0,
						M.Zo)();
				e({
					courseId: a.id,
					session: r,
					sessionParams: o,
					startTime: d,
					type: "START_SESSION"
				});
				const u = xe(t, r.id);
				if (l === U.c.CoachDuoSplash) {
					await u();
					const t = c[i]
						, a = s[i];
					e({
						status: (0,
							ie.ct)(t, a),
						type: "SET_PLAYER_STATUS"
					})
				}
			}
			, Te = () => async (e, t) => {
				const a = (0,
					k.$4)(t())
					, n = (0,
						w.Rq)(t())
					, r = (0,
						k.lA)(t())
					, s = (0,
						R.h)(t())
					, i = (0,
						k.is)(t()).id;
				e({
					type: "CLEAR_IN_LESSON_TIP"
				}),
					e({
						type: "DISABLE_HINTS_ON_HOVER"
					});
				const o = xe(t, i);
				switch (n) {
					case "coachDuo":
						if (!r.coachDuo.model)
							break;
						e({
							model: r.coachDuo.model,
							timestamp: Date.now(),
							type: "COACH_DUO_SHOWN"
						}),
							e({
								status: U.c.CoachDuoSliding,
								type: "SET_PLAYER_STATUS"
							}),
							await o(),
							e({
								status: U.c.CoachDuo,
								type: "SET_PLAYER_STATUS"
							});
						break;
					case "smartTip":
						e({
							status: U.c.SmartTipSliding,
							type: "SET_PLAYER_STATUS"
						}),
							await o(),
							e({
								status: U.c.SmartTip,
								type: "SET_PLAYER_STATUS"
							});
						break;
					case "hardModeDuo":
						e({
							status: U.c.HardModeDuoSliding,
							type: "SET_PLAYER_STATUS"
						}),
							await o(),
							e({
								status: U.c.HardModeDuo,
								type: "SET_PLAYER_STATUS"
							});
						break;
					case "partialXpDuo":
						e({
							type: "SET_PARTIAL_XP_GIVEN",
							xpGiven: we.Ms
						}),
							e({
								status: U.c.PartialXpDuoSliding,
								type: "SET_PLAYER_STATUS"
							}),
							await o(),
							e({
								status: U.c.PartialXpDuo,
								type: "SET_PLAYER_STATUS"
							});
						break;
					case "matchMadnessInterstitial":
						e({
							status: U.c.MatchMadnessInterstitial,
							type: "SET_PLAYER_STATUS"
						});
						break;
					case void 0:
						if (r.status === U.c.MathRetryBlaming) {
							e({
								type: "MATH_RETRY_RESET_CHALLENGE"
							}),
								e({
									status: U.c.Guessing,
									type: "SET_PLAYER_STATUS"
								});
							break
						}
						if (s)
							se.Z.start("session_end_grade"),
								e({
									status: r.status === U.c.CoachDuo || r.status === U.c.CoachDuoSplash ? U.c.CoachDuoSubmitting : U.c.Submitting,
									type: "SET_PLAYER_STATUS"
								});
						else {
							e({
								isDesktop: a,
								type: "ADVANCE_SESSION"
							}),
								await o();
							const { challengeStates: n, currentIndex: r, inLessonTipResources: s, session: { challenges: i }, sessionParams: l } = (0,
								k.lA)(t())
								, c = i[r]
								, d = n[r];
							if (l.isGrammarSkill) {
								const t = c.explanation ? s[c.explanation.url] : void 0;
								t && e({
									explanationResource: t,
									type: "SET_IN_LESSON_TIP"
								})
							}
							e({
								status: (0,
									ie.ct)(c, d),
								type: "SET_PLAYER_STATUS"
							})
						}
						break;
					default:
						(0,
							V.RJ)(n)
				}
			}
			, Ne = () => e => {
				e({
					status: U.c.Guessing,
					type: "SET_PLAYER_STATUS"
				}),
					e({
						type: "ADVANCE_MULTI_STEP_STEP"
					})
			}
			, Fe = e => {
				let t;
				switch (e) {
					case !0:
						t = D.Tc.CORRECT;
						break;
					case !1:
						t = D.Tc.INCORRECT;
						break;
					default:
						t = D.Tc.TEST
				}
				(0,
					D.GN)(t)
			}
			, Ie = (e, t) => async (a, n) => {
				var r;
				const s = (0,
					k.Oz)(n())
					, i = (0,
						k.lA)(n());
				let l = (0,
					k.is)(n());
				window.duoBot.challenges = l.challenges; // duoBot added
				window.duoBot.currentChallengeIdx++; // duoBot added
				const c = (0,
					k.oe)(n())
					, d = (0,
						k.np)(n())
					, u = (0,
						x.eE)(n())
					, p = (0,
						N.mu)(n(), Date.now());
				a({
					status: U.c.Grading,
					type: "SET_PLAYER_STATUS"
				});
				const g = l.challenges[i.currentIndex]
					, v = i.challengeStates[i.currentIndex]
					, h = (0,
						w.Y_)(n());
				let _;
				try {
					const t = (0,
						k.iH)(n());
					_ = await (0,
						L.Q5)({
							challenge: {
								...g,
								skipped: e
							},
							challengeState: v,
							challengeToggleState: h,
							learningLanguage: t,
							session: (0,
								k.is)(n())
						})
				} catch (e) {
					(0,
						ee.vU)("Client-side grading failed", {
							ex: e
						}),
						(0,
							F.Hx)(e) && (0,
								ke.trackAndLogApiError)("grading_failed", "All grading methods failed", e),
						_ = {
							correct: !0,
							guess: ""
						}
				}
				(0,
					Z.gQ)("gradeCorrect") && (_.correct = !0),
					(0,
						D.Ap)(),
					a({
						gradingResult: _,
						skipped: e,
						timeTaken: g.startTime ? t - g.startTime : void 0,
						type: "UPDATE_GRADED_CHALLENGE"
					}),
					!u || _.correct || e || (0,
						f.P)(v) && (null !== (r = v.mathRetryCount) && void 0 !== r ? r : 0) > 0 || ((e, t, a) => {
							var n, r, s;
							switch (t.type) {
								case Ee.Sm.ListenSpeak:
								case Ee.Sm.Speak:
									(null !== (n = a.numRetriesLeft) && void 0 !== n ? n : P.Tu) <= 1 && e((0,
										o.$)("session_mid"));
									break;
								case Ee.Sm.ChessStar:
								case Ee.Sm.ChessNormal:
								case Ee.Sm.ChessFictionalBoard:
									{
										const t = a.guess;
										"incorrect" === (null === (r = null == t ? void 0 : t.gradingState) || void 0 === r ? void 0 : r.type) && t.gradingState.isFirstMistake && e((0,
											o.$)("session_mid"));
										break
									}
								case Ee.Sm.MathChallengeBlob:
									{
										const n = (0,
											Se.Sd)(t.challengeBlob)
											, r = a.multiStepStepIndex
											, i = n && (0,
												Se.IQ)(a.guess) && void 0 !== r && 1 === (null !== (s = a.guess.stepMistakeCounts[r]) && void 0 !== s ? s : 0);
										n && !i || e((0,
											o.$)("session_mid"));
										break
									}
								case Ee.Sm.WriteComprehension:
									break;
								default:
									e((0,
										o.$)("session_mid"))
							}
						}
						)(a, g, _),
					l = (0,
						k.is)(n());
				const b = l.challenges[i.currentIndex]
					, E = (0,
						O.S6)(n());
				E && a({
					model: E,
					type: "SET_COACH_DUO_MODEL"
				}),
					(0,
						k.$4)(n()) && m.L({
							challenge: b,
							currentCourse: s,
							dispatch: a,
							gradingResult: _,
							player: i,
							session: l,
							skills: c,
							user: d
						}),
					!0 === _.multiStepIsDialogue || e && v.hasBrokenTts || Fe(_.correct),
					(0,
						A.w)(l, d, i, _, e, b.timeTaken, h),
					_.correct || g.type !== Ee.Sm.MathChallengeBlob || (i.challengeAttemptCounts[g.id] || 0) >= 2 && (0,
						ke.track)("math_challenge_exceed_retry", {
							challenge_id: g.id,
							skill_id: l.skillId
						}),
					(0,
						R.h)(n()) && (a({
							hasXpBoost: p,
							timestamp: (0,
								M.Zo)(),
							type: "END_SESSION",
							user: d
						}),
							l = (0,
								k.is)(n()),
							i.sessionParams.isFinalLevel && l.failed ? a({
								nativeAd: void 0,
								slideData: [{
									type: "finalLevelFailed"
								}],
								type: "SESSION_END_SLIDES"
							}) : a(Le()))
			}
			, De = ({ chessPlayerColor: e, chessPvpInitialState: t, levelData: a, session: r, sessionParams: s, sessionPrefetchedTimestamp: i, sessionRouteParams: o, speakIneligibleReasons: l }) => (c, d) => {
				var u;
				const { includeListening: m } = (0,
					n.eG)(d())
					, p = (0,
						k.Oz)(d());
				if (r.type === Ee.FF.Placement && !(null == p ? void 0 : p.placementTestAvailable))
					throw new G.w(`Trying to start a ${r.type} session without placementTestAvailable`);
				[Ee.FF.Lesson, Ee.FF.LexemePractice, Ee.FF.LexemeSkillLevelPractice, Ee.FF.SpacedRepetition].includes(r.type) && c({
					type: "ENABLE_BONUS_POINTS"
				});
				const { challengeIdSections: g, challenges: v } = s.type === Ee.FF.SpecifiedMatchPractice ? (0,
					me.Z6)(r.challenges, m) : {
					challengeIdSections: (0,
						me.oT)(r.challenges, s.isFinalLevel ? 2 : 1),
					challenges: r.challenges
				};
				if (r.challenges = v,
					"math" === (null == p ? void 0 : p.subject) && a) {
					const e = (0,
						S.MK)(d());
					e && c({
						sectionId: e.id,
						sectionIndex: e.index,
						type: "SET_MATH_ACTIVE_SECTION"
					})
				}
				const h = e => e.map((e => {
					try {
						return (0,
							L.Gs)({
								challenge: e
							})
					} catch (t) {
						if (t instanceof G.u4)
							return (0,
								ke.track)("math_parsing_failure", {
									challenge_id: e.id,
									error: t.message
								}),
								null;
						throw t
					}
				}
				)).filter((e => null !== e));
				r.adaptiveChallenges && (r.adaptiveChallenges = h(r.adaptiveChallenges)),
					(null === (u = r.adaptiveInterleavedChallenges) || void 0 === u ? void 0 : u.challenges) && (r.adaptiveInterleavedChallenges.challenges = h(r.adaptiveInterleavedChallenges.challenges)),
					r.challenges = h(r.challenges),
					c({
						challengeIdSections: g,
						chessPlayerColor: e,
						chessPvpInitialState: t,
						hasUserHearts: (0,
							E.MQ)(d()),
						isDesktop: (0,
							k.$4)(d()),
						levelData: a,
						session: r,
						sessionParams: s,
						sessionPrefetchedTimestamp: i,
						sessionRouteParams: o,
						speakIneligibleReasons: l,
						type: "CREATE_SESSION",
						user: (0,
							k.np)(d())
					})
			}
			, Pe = () => (e, t) => {
				const { player: a, player: { levelData: n, partialXpGiven: r, session: s, sessionParams: i, sessionSubmitting: o }, user: l } = t()
					, c = (0,
						N.mu)(t(), Date.now());
				if (!o) {
					if (i.isFinalLevel && r)
						return e({
							type: "END_SESSION_EARLY"
						}),
							e(Te()),
							e({
								hasXpBoost: c,
								timestamp: (0,
									M.Zo)(),
								type: "END_SESSION",
								user: l
							}),
							e(Le()),
						{
							shouldCancelRouteChange: !0
						};
					e({
						hasXpBoost: c,
						timestamp: (0,
							M.Zo)(),
						type: "END_SESSION",
						user: l
					}),
						e({
							courseId: (0,
								k.Oz)(t()).id,
							isZombieMode: (0,
								y.d)(t()),
							levelId: null == n ? void 0 : n.level.id,
							session: s,
							sessionParams: i,
							type: "QUIT_SESSION"
						}),
						(0,
							ie.vx)({
								hasXpBoost: (0,
									N.mu)(t(), Date.now()),
								isFirstSessionInCourse: (0,
									k.Oz)(t()).placementTestAvailable,
								path: (0,
									S.HF)(t()),
								pathSectioned: (0,
									S.DN)(t()),
								player: a,
								subject: (0,
									k.Oz)(t()).subject,
								transliterationSetting: (0,
									be.hg)(t())
							})
				}
				return {
					shouldCancelRouteChange: !1
				}
			}
			, Le = () => e => (async () => {
				e({
					type: "SESSION_SUBMIT_START"
				});
				try {
					await e((async (e, t) => {
						var a, o, m, f, w, x, R, I;
						const D = (0,
							k.Mb)(t())
							, P = (0,
								k.Oz)(t())
							, L = (0,
								k.Al)(t())
							, A = (0,
								N.mu)(t(), Date.now())
							, O = (0,
								E.q0)(t())
							, U = (0,
								y.d)(t())
							, V = (0,
								k.lA)(t())
							, ee = (0,
								S.MK)(t())
							, se = (0,
								k.is)(t())
							, be = (0,
								k.oe)(t())
							, Se = (0,
								k.np)(t())
							, xe = (0,
								re.Bm)(P.path)
							, Re = (0,
								_e.G)(se, (0,
									ie.GR)(V), null === (a = V.levelData) || void 0 === a ? void 0 : a.level, A, P.id, (0,
										ie.Xe)(V));
						let Te, Ne, Fe;
						const Ie = (0,
							ie.Ks)(t())
							, De = () => {
								var e;
								return (null === (e = (0,
									k.is)(t())) || void 0 === e ? void 0 : e.id) !== se.id
							}
							, Pe = () => {
								if (De())
									throw new G.$K
							}
							, Le = () => {
								if ((0,
									k.Oz)(t()).id !== P.id)
									throw new G.Di
							}
							;
						if (e({
							type: "CAN_SHOW_HOME_MESSAGE"
						}),
							U) {
							const e = await (0,
								Y.b)();
							if (await e.add("submittableRequests", {
								session: Re,
								sessionEndTrackingProperties: Ie,
								type: "session"
							}),
								Re.failed)
								Te = {
									...se,
									xpGain: 0
								};
							else {
								const e = (0,
									ne.mI)(Re, V.levelData, Se)
									, [t, a] = (0,
										te._u)(Re.type, V.levelData, P.path, P.pathSectioned, null !== (o = null == ee ? void 0 : ee.index) && void 0 !== o ? o : 0)
									, n = (0,
										te.g2)(Re, V.levelData, be);
								let r = (0,
									q.t8)(P, "path", t);
								r = (0,
									q.t8)(r, "pathSectioned", a),
									r = (0,
										q.t8)(r, "placementTestAvailable", !1),
									r = (0,
										q.t8)(r, "xp", r.xp + e.xp);
								const s = {
									...r,
									skills: null === (m = r.skills) || void 0 === m ? void 0 : m.map((e => e.map((e => n[e]))))
								};
								Fe = (0,
									ae.m3)(e, Se),
									Te = {
										...se,
										xpGain: e.xp
									},
									Ne = {
										currentCourse: s,
										health: O,
										rewardBundles: Se.rewardBundles,
										streakData: Fe.streakData,
										xpGains: Se.xpGains ? Se.xpGains.concat([e]) : [e]
									}
							}
						} else {
							await p.SL;
							try {
								(0,
									ke.track)("session_end_attempt", {});
								const e = new AbortController;
								Te = await F.Vi.sessionSubmit(Re, {
									onError: t => {
										(0,
											ke.trackAndLogApiError)("submit_session_failed", "Failed to submit session", t),
											De() && e.abort()
									}
									,
									signal: e.signal
								}),
									(0,
										ke.track)("session_end", {
											...Ie,
											...Te.trackingProperties,
											upload_timestamp: Date.now()
										}),
									V.welcomeForkSelection && V.onboardingVia && (0,
										ke.trackAddCourseComplete)(P.fromLanguage, P.subject, V.welcomeForkSelection, V.onboardingVia),
									Ne = await F.Vi.userInfoPartial((0,
										Ce.Jb)(), ["courses", "currentCourse", "health", "rewardBundles", "streakData{currentStreak,longestStreak,previousStreak}", "xpGains"])
							} catch (e) {
								throw (0,
									ie.gZ)(e, (0,
										me.Xd)(Re.type)),
								e
							}
							Pe(),
								Le()
						}
						(0,
							j._B)({
								courseId: P.id,
								isZombieMode: U,
								levelId: null === (f = V.levelData) || void 0 === f ? void 0 : f.level.id,
								requestSession: Re,
								responseSession: Te,
								sessionParams: V.sessionParams,
								timestamp: Date.now(),
								type: "RECORDED_SESSION"
							})({
								dispatch: e
							}),
							Ne && (e({
								type: "UPDATE_USER",
								user: Ne
							}),
								e({
									currentTimestampMs: Date.now(),
									heartsConfig: Ne.health,
									type: "UPDATE_HEARTS_STATE"
								}));
						const Ae = (0,
							we.ab)(Se.timezoneOffset, Se.xpGains)
							, Oe = Te.xpGain > 0 && 0 === Ae
							, Me = null !== (x = null === (w = Se.streakData.currentStreak) || void 0 === w ? void 0 : w.length) && void 0 !== x ? x : 0;
						if (Oe) {
							const t = (0,
								M.Ux)();
							e({
								streakExtension: {
									timezoneOffsetMinutes: t.getTimezoneOffset(),
									utcIsoDateString: t.toISOString()
								},
								type: "UPDATE_STREAKS_EXTENDED_TIMES"
							})
						}
						if (Math.random() < (0,
							Q.O)("send_goals_progress", 0, D)) {
							const t = Oe && 0 === Me
								, a = (0,
									X.Oj)(Re, {
										streakExtended: Oe,
										streakStarted: t,
										timeSpent: V.sessionTime > 0 ? V.sessionTime : se.endTime - se.startTime
									});
							if (U) {
								const e = await (0,
									Y.b)();
								await e.add("submittableRequests", {
									request: {
										batchUpdate: a,
										timestamp: (0,
											M.Ux)(),
										timezone: Se.timezone
									},
									type: "goals-progress"
								})
							} else
								F.JV.sendBatchUpdate(Se.id, a, (0,
									M.Ux)(), Se.timezone).catch((e => (0,
										ke.trackAndLogApiError)("update_goals_progress_failed", "Failed to update goals progress", e)));
							const n = {
								metricUpdates: [...a.metricUpdates, {
									metric: "XP",
									quantity: Te.xpGain
								}]
							};
							e((0,
								X.B_)(n)),
								e((0,
									i.mE)(n))
						}
						if (void 0 !== L && (0,
							ve.SZ)(L)) {
							const t = Re.challenges.filter((e => !e.skipped));
							e({
								stats: {
									numChallengesCorrect: L.numChallengesCorrect + t.filter((e => e.correct)).length,
									sessionsCompleted: L.sessionsCompleted + 1,
									totalChallenges: L.totalChallenges + t.length,
									totalSessions: L.totalSessions,
									totalXp: L.totalXp + Te.xpGain
								},
								type: "SET_EARNBACK_MULTI_SESSION_STATS"
							})
						}
						if (!U) {
							let a = null === (R = Se.mistakeCountInfo) || void 0 === R ? void 0 : R.mistakeCount;
							void 0 !== a && (a += (0,
								me.VC)(Re));
							const { includeListening: r, includeSpeaking: s } = (0,
								n.eG)(t());
							e((0,
								c.oQ)(P.id, a, r, s))
						}
						const Ze = V.sessionRouteParams.practiceType;
						if ((0,
							oe.rK)(Re.type) && (0,
								oe.gv)(Ze) && e({
									courseId: P.id,
									sessionName: (0,
										oe.tL)(Re.type),
									type: "COMPLETE_PRACTICE_HUB_SESSION"
								}),
							Re.type === Ee.FF.SpecifiedMatchPractice && e({
								sessionCompleteTimeStampMs: Date.now(),
								type: "WORDS_LIST_COMPLETE_PRACTICE_SESSION"
							}),
							U)
							Fe && e({
								type: "SET_XP_SUMMARIES",
								xpSummaries: Fe.xpSummaries
							});
						else {
							const a = [e(l.Hm(D.ipCountry, (0,
								le.Ay)(Se.plusDiscounts, Date.now()), !1)), e(r._()), e((0,
									h.DG)()), e((0,
										u.CQ)({
											target: "linkedin"
										})), e((0,
											d.W)({
												courseId: P.id
											}))];
							a.push((async () => {
								var a, n;
								const r = null !== (n = null === (a = null == Ne ? void 0 : Ne.streakData.currentStreak) || void 0 === a ? void 0 : a.length) && void 0 !== n ? n : 0;
								await e(l.ke());
								const s = (0,
									k.__)(t())
									, i = (0,
										ge.sz)(s, r)
									, o = (0,
										ge.K)(r, s);
								(i || Oe && o > 0) && await l.ZK({
									dispatch: e,
									fromMilestone: !i,
									fromStories: !1,
									quantity: i ? ge.SG : o,
									shopItems: s
								})
							}
							)()),
								Oe && (Me + 1) % fe.mx == 0 && a.push(e((0,
									h.J0)())),
								await Promise.all(a),
								Pe(),
								Le()
						}
						const ze = (0,
							k.Oz)(t())
							, Ue = (0,
								b.oV)(t())
							, Ge = (0,
								k.Al)(t())
							, Be = (0,
								b.D_)(t())
							, He = (0,
								k.__)(t())
							, We = (0,
								k.np)(t())
							, Xe = (0,
								E.q0)(t())
							, Ve = (0,
								re.Bm)(ze.path)
							, Qe = V.levelData ? (0,
								re.m8)(ze.path, (e => {
									var t;
									return e.id === (null === (t = V.levelData) || void 0 === t ? void 0 : t.level.id)
								}
								), V.levelData) : Ve;
						V.levelData && (0,
							re.Nc)(P.path, ze.path, V.levelData) && e({
								name: "pathSkipping",
								type: "CREATE_HOME_MESSAGE"
							}),
							(0,
								j.G9)(Te.xpGain)({
									dispatch: e
								});
						const Ye = (0,
							X.VR)(Ue, We)
							, qe = (0,
								b.Ap)(t());
						e((0,
							ce.kl)({
								availableQuests: Ye,
								goals: Be,
								items: He,
								monthlyChallengeThreshold: qe,
								user: We
							})),
							Re.type !== Ee.FF.AlphabetLesson && Re.type !== Ee.FF.AlphabetPractice || U || e(s.fh(!0)),
							U || void 0 === He.inventory.society_streak_freeze_refill || (e({
								maxQuantity: fe.TK,
								type: "REFILL_SOCIETY_STREAK_FREEZES"
							}),
								F.Vi.useUserShopItem("society_streak_freeze_refill")),
							se.type === Ee.FF.GlobalPractice && Xe.hearts > O.hearts && (0,
								ke.track)("health_refill", {
									health_refill_method: "practice",
									health_total: Xe.hearts
								});
						const Ke = (0,
							K.h0)()
							, je = t()
							, $e = (0,
								C.C)(je)
							, Je = (0,
								de.cg)({
									activeLevel: xe,
									freshActiveLevel: Ve,
									freshLevelData: Qe,
									isZombieMode: U,
									scoreStatusInfo: $e,
									session: se
								});
						e((0,
							u.N0)());
						let et = (0,
							z.XN)({
								availableQuests: Ye,
								earnbackMultiSessionStats: Ge,
								friendStreakCombinedData: Ke.get(H.g4).value,
								friendStreakData: Ke.get(B.aH).value,
								goals: (0,
									b.D_)(je),
								hasXpBoost: A,
								isDesktop: (0,
									k.$4)(je),
								items: He,
								leaderboardPositionState: Ke.get(j.N0).value,
								leaderboards: {
									classroomLeaderboard: Ke.get($.BW).value,
									leagues: Ke.get($.zV).value,
									sessionEndData: Ke.get($.Kx),
									userReaction: Ke.get($.QR).value
								},
								levelData: Qe,
								monthlyChallengeThreshold: (0,
									b.Ap)(je),
								path: ze.path,
								player: (0,
									k.lA)(je),
								rewardedHearts: void 0 === Ne ? 0 : Ne.health.hearts - O.hearts,
								scoreSessionEndVariant: Je,
								sectionType: null === (I = (0,
									S.MK)(je)) || void 0 === I ? void 0 : I.type,
								showScoreLinkedinSyncOnSessionEnd: (0,
									de.aZ)(Je) && (0,
										ue.QW)(Je, je),
								streakGoalData: Ke.get(he.vk).value,
								streakGoalOptions: Ke.get(he.vB).value,
								streakNudgeState: (0,
									k.cQ)(je).streakNudgeShown,
								streakSocietyProgressState: (0,
									k.cQ)(je).streakSocietyProgressShown,
								student: (0,
									T.Bs)(je),
								subject: ze.subject,
								unlockedAchievementsV3: _.XX(je),
								user: (0,
									k.np)(je)
							});
						if (!se.failed && se.type === Ee.FF.SectionTest) {
							const { sectionIndex: t } = se;
							e({
								selectedPathSectionIndex: (null != t ? t : 0) + 1,
								type: "SET_SELECTED_PATH_SECTION"
							})
						}
						const tt = !se.failed && se.type === Ee.FF.SectionTest
							, at = !se.failed && ze.pathSectioned.length > 0 && se.type === Ee.FF.UnitReview && 1 === (null == Ve ? void 0 : Ve.unitNumber);
						(tt || at) && e({
							shouldReturnToSections: !0,
							type: "SET_SHOULD_RETURN_TO_SECTIONS"
						}),
							(0,
								Z.gQ)("debugSlides") || (et = await (0,
									pe.r)(et, {
										isZombieMode: U,
										useOnboardingBackend: !0 === (0,
											Q.O)("web_use_onboarding_backend", void 0, D)
									}),
									Pe(),
									Le()),
							await (0,
								de.ZS)({
									activeLevel: xe,
									freshActiveLevel: Ve,
									freshCourse: ze,
									freshLevelData: Qe,
									isZombieMode: U,
									scoreStatusInfo: $e,
									session: se
								});
						const nt = (0,
							z.JW)(et, V)
							, rt = (0,
								z.I)(nt);
						if (!(0,
							Z.gQ)("debugSlides") && rt.some((e => "streakSocietyWelcomeChest" === e.type)) && e((0,
								v.K)(We.learningLanguage)),
							(0,
								Z.gQ)("debugSlides") || Re.type !== Ee.FF.LevelReview && (Re.type !== Ee.FF.LexemePractice || "practice_level_review" !== V.sessionParams.lexemePracticeType) || U || e((0,
									ce.GH)({
										receivingBoost: (0,
											b.D_)(t()).pendingRewards.some((({ reward: e }) => (0,
												ce.be)(e))),
										user: We
									})),
							void 0 !== Ge && (0,
								ve.SZ)(Ge) ? e({
									type: "SESSION_SUBMITTED"
								}) : e({
									nativeAd: rt.find((({ type: e }) => "nativeAd" === e)),
									slideData: rt.filter((({ type: e }) => "nativeAd" !== e)),
									type: "SESSION_END_SLIDES"
								}),
							!U) {
							const e = Ke.get($.RT).value;
							(null == e ? void 0 : e.state.active) || Ke.set(J.PD)
						}
						const st = (0,
							b.ey)(je);
						!U && (null == st ? void 0 : st.status) !== ye.S.ACTIVE && (0,
							W.JD)(Date.now()) && e((0,
								i.pt)()),
							!U && (0,
								ve.zg)(He) && (0,
									ve.E6)(Ge) && e((0,
										g.z)())
					}
					))
				} catch (t) {
					e({
						error: t,
						type: "SESSION_SUBMIT_FAILED"
					})
				}
				e({
					type: "SESSION_SUBMIT_END"
				})
			}
			)()
			, Ae = () => (e, t) => {
				const a = (0,
					k.MY)(t());
				a && (0,
					ke.track)("challenge_difficulty_click", {
						challenge_type: a.type
					}),
					e({
						type: "TOGGLE_COMPLETE_REVERSE_TRANSLATION"
					})
			}
			, Oe = () => (e, t) => {
				const a = (0,
					k.jv)(t())
					, n = (0,
						k.MY)(t())
					, r = (0,
						k.is)(t());
				n && (0,
					ke.track)("challenge_difficulty_click", {
						challenge_type: n.type
					}),
					(0,
						ke.track)("toggle_tap", {
							...r.trackingProperties,
							tap_enabled: a.typingEnabled
						}),
					e({
						type: "TOGGLE_TAP"
					})
			}
			, Me = ({ challengeType: e }) => t => {
				t({
					challengeType: e,
					type: "USED_TYPE_TO_SELECT_TOKEN"
				}),
					Math.random() < .001 && (0,
						ke.track)("type_to_select_token", {
							challenge_type: e,
							sampling_rate: .001
						})
			}
			, Ze = () => async (e, t) => {
				var a, n, r, s, i, o;
				const l = null === (n = null === (a = (0,
					k.MY)(t())) || void 0 === a ? void 0 : a.gradingResult) || void 0 === n ? void 0 : n.numRetriesLeft
					, c = null === (r = (0,
						k.lA)(t())) || void 0 === r ? void 0 : r.currentIndex;
				await (0,
					I._v)(3e3);
				const d = (0,
					k.lA)(t()).status
					, u = null === (i = null === (s = (0,
						k.MY)(t())) || void 0 === s ? void 0 : s.gradingResult) || void 0 === i ? void 0 : i.numRetriesLeft
					, m = null === (o = (0,
						k.lA)(t())) || void 0 === o ? void 0 : o.currentIndex;
				d === U.c.SpeakRetryBlaming && l === u && c === m && e({
					status: U.c.Guessing,
					type: "SET_PLAYER_STATUS"
				})
			}
	}
	,
	66369: (e, t, a) => {
		a.d(t, {
			y: () => c
		});
		var n = a(54174)
			, r = a(18225)
			, s = a(17135)
			, i = a(6962)
			, o = a(53146)
			, l = a(79465);
		const c = () => (e, t) => {
			e({
				timestamp: Date.now(),
				type: "sessionEnd/READY"
			});
			const a = (0,
				n.d)(t())
				, c = t().sessionEnd.nativeAd
				, d = t().sessionEnd.slides
				, u = c ? [c, ...d] : d;
			if (u.filter((e => "can-track" === e.status)).forEach((e => (0,
				o.l)(e))),
				!a)
				try {
					r.zi.ackSessionEndMessages(u.flatMap((e => (0,
						i.Jp)(e.slide.type) ? [] : [{
							ctaWasClicked: "cta" === e.action,
							messageId: e.slide.type,
							timestamp: (0,
								s.Gz)(e.time[0][0])
						}])))
				} catch (e) {
					(0,
						l.trackAndLogApiError)("ack_messages_failed", "Failed to acknowledge session end messages", e)
				}
			(0,
				l.track)("session_end_screens_show", {
					num_end_screens: d.length,
					time_spent_session_end_screens: d.flatMap((e => e.time.map((([e, t]) => (null != t ? t : e) - e)))).reduce(((e, t) => e + t), 0)
				}),
				e({
					type: "sessionEnd/RESET"
				})
		}
	}
	,
	77873: (e, t, a) => {
		a.d(t, {
			C: () => c,
			L: () => d
		});
		var n = a(83735)
			, r = a(42659)
			, s = a(17135)
			, i = a(64115)
			, o = a(59096)
			, l = a(79465);
		const c = e => (t, a) => {
			const s = (0,
				r.lA)(a()).smartTipToShow;
			if (void 0 === s)
				throw Error("Cannot grade undefined Smart Tip.");
			if (void 0 === s.startTime)
				throw Error("Smart Tip should have a start time when grading.");
			const i = (0,
				o.P9)(s) === s.guess;
			(0,
				l.track)("smart_tip_challenge_answered", {
					answered_correctly: i,
					rule_id: s.identifier,
					seconds_spent_on_screen: e - s.startTime
				}),
				t({
					correct: i,
					type: "UPDATE_GRADED_SMART_TIP"
				}),
				n.p_(i)
		}
			, d = ({ challenge: e, currentCourse: t, dispatch: a, gradingResult: { blameType: n, gradingMetadata: r }, player: l, session: c, skills: d, user: u }) => {
				var m;
				if (!(0,
					o.RZ)(c.type, l.sessionParams))
					return;
				let p = (0,
					o.C8)(n, e, t, r, l, d, u);
				if (!p && (0,
					i.gQ)("smartTip"))
					for (const e of null !== (m = t.smartTips) && void 0 !== m ? m : []) {
						const t = (0,
							o.vT)(e.url);
						if (t) {
							p = {
								...t,
								trigger: {
									smart_tip: {
										id: t.identifier,
										variables: []
									}
								}
							};
							break
						}
					}
				void 0 !== p && a({
					smartTipResource: p,
					timestamp: (0,
						s.Zo)(),
					type: "SET_SMART_TIP_TO_SHOW"
				})
			}
	}
	,
	94944: (e, t, a) => {
		a.d(t, {
			K: () => c
		});
		var n = a(86518)
			, r = a(42659)
			, s = a(18225)
			, i = a(90110)
			, o = a(79465)
			, l = a(97106);
		const c = e => async (t, a) => {
			await (0,
				i.OC)((0,
					r.__)(a()), "Streak Society Boost");
			try {
				await s.Vi.purchaseUserShopItem(l.zL.ITEM_NAME_30_MIN, {
					isFree: !0,
					learningLanguage: e
				})
			} catch (e) {
				(0,
					o.trackAndLogApiError)("purchase_user_shop_item_failed", `Failed to purchase xp boost item ${l.zL.ITEM_NAME_30_MIN} while awarding streak society xp boost`, e)
			}
			await t((0,
				n.J0)())
		}
	}
	,
	90788: (e, t, a) => {
		a.d(t, {
			$Z: () => i,
			XX: () => o
		});
		var n = a(30427)
			, r = a(84389);
		const s = e => e.achievementsV3
			, i = n.P1(s, (e => e.achievements || []))
			, o = n.P1(s, (e => {
				const t = e.achievements || []
					, a = e.sessionStartAchievements || [];
				if (a.length > 0) {
					const e = (0,
						r.ET)(a);
					return t.filter((t => {
						const a = e[t.name];
						return a && a.tier !== t.tier
					}
					)).slice(0, 1)
				}
			}
			))
	}
	,
	86233: (e, t, a) => {
		a.d(t, {
			$2: () => h,
			A9: () => l,
			Dk: () => k,
			Ib: () => E,
			Jz: () => m,
			Ow: () => R,
			RR: () => p,
			Rv: () => d,
			Uy: () => g,
			VR: () => v,
			WT: () => w,
			Zy: () => x,
			fM: () => y,
			iH: () => c,
			jH: () => f,
			ml: () => b,
			pl: () => u,
			uR: () => C,
			yL: () => _,
			yo: () => S
		});
		var n = a(30427)
			, r = a(74462)
			, s = a(8718)
			, i = a(18513)
			, o = a(43094);
		const l = e => e.stories
			, c = n.P1(l, (e => e.learningLanguage))
			, d = n.P1(l, (e => e.fromLanguage))
			, u = n.P1(l, (e => e.trackingProperties))
			, m = n.P1(l, (e => {
				var t, a;
				return null !== (a = null === (t = e.storySession) || void 0 === t ? void 0 : t.speakCount) && void 0 !== a ? a : 0
			}
			))
			, p = n.P1(l, (e => {
				var t;
				return null === (t = e.storySession) || void 0 === t ? void 0 : t.challengeSession
			}
			))
			, g = n.P1(l, (e => e.storySession))
			, v = (n.P1(l, (e => -1 !== e.speakingDisabledLineIndex)),
				n.P1(l, (e => {
					var t;
					const a = e.storyElements
						, n = null === (t = e.storySession) || void 0 === t ? void 0 : t.furthestPosition.elementIndex;
					return a && n ? a[n] : void 0
				}
				)))
			, h = n.P1(l, (e => {
				var t;
				return null === (t = e.storySession) || void 0 === t ? void 0 : t.furthestPosition
			}
			))
			, f = n.P1(l, (e => {
				var t;
				return null === (t = e.storySession) || void 0 === t ? void 0 : t.status
			}
			))
			, _ = n.P1(l, (e => (0,
				s.C7)(e.storyElements)))
			, k = n.P1(l, (e => {
				var t, a;
				const n = null === (t = e.storySession) || void 0 === t ? void 0 : t.selectedPosition
					, r = e.storyElements
					, s = void 0 !== (null === (a = e.storySession) || void 0 === a ? void 0 : a.freeformChallengeSubmittedResponse);
				return n && r ? (0,
					o.lo)(r, n.elementIndex, s) : 0
			}
			))
			, b = n.P1(l, (e => {
				var t;
				return e.storyElements && (null === (t = e.storySession) || void 0 === t ? void 0 : t.furthestPosition) && (0,
					o.O$)(e.storyElements, e.storySession.furthestPosition.elementIndex)
			}
			))
			, E = n.P1(b, l, ((e, t) => {
				var a;
				return e ? null === (a = null == t ? void 0 : t.storyElements) || void 0 === a ? void 0 : a[e] : void 0
			}
			))
			, y = n.P1(g, (e => null == e ? void 0 : e.pendingStoryEndSections))
			, S = n.P1((e => e.stories.storyElements), (e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.furthestPosition
			}
			), (e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.selectedPosition
			}
			), (e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.challengeSession
			}
			), (e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.status
			}
			), (e => {
				var t, a;
				return "in-progress" === (null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.storyCompleteRequestStatus) || "in-progress" === (null === (a = e.stories.storySession) || void 0 === a ? void 0 : a.grammarCorrectionRequestStatus)
			}
			), (e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.onboardingStep
			}
			), (e => e.stories.audio.playError), ((e, t, a, n, r, i, l, c) => {
				var d;
				if (c)
					return !0;
				if (i)
					return !1;
				if ("completed" === r)
					return !1;
				if ("story-end" === r)
					return !0;
				if (void 0 === t || void 0 === e || void 0 === a)
					return !1;
				if ("tap-translation-hint" === l)
					return !1;
				if (null == n ? void 0 : n.completed)
					return !0;
				if ("type-text" === (null == n ? void 0 : n.type) && !n.completed && n.answer.length > 0)
					return !0;
				if ("freeform-writing" === (null == n ? void 0 : n.type) && !n.completed && n.fetchedCorrection)
					return !0;
				if ("beats" === (null == n ? void 0 : n.type) && !n.completed)
					return !0;
				if (n && !n.completed)
					return !1;
				const u = e[t.elementIndex]
					, m = null === (d = (0,
						s.z_)(u)) || void 0 === d ? void 0 : d.text.length;
				if ("DUO_POPUP" === u.type)
					return !0;
				const p = !!(void 0 === m || void 0 !== t.textIndex && t.textIndex >= m - 1)
					, g = e[t.elementIndex + 1]
					, v = !(0,
						s.z$)(g) && "CHALLENGE_PROMPT" !== u.type
					, h = (0,
						o.lo)(e, t.elementIndex, !0)
					, f = e[h]
					, _ = "LINE" === f.type ? f.line.content.text.length : 0
					, k = "LINE" === e[t.elementIndex].type ? t : {
						elementIndex: h,
						textIndex: _ - 1
					};
				return (0,
					o.Nh)(a, k) || p && v
			}
			))
			, C = n.P1((e => {
				var t;
				return null === (t = e.stories.storySession) || void 0 === t ? void 0 : t.challengeSession
			}
			), (e => "freeform-writing" === (null == e ? void 0 : e.type) && !e.completed && (0,
				i.Bv)(e)))
			, w = n.P1(g, (e => {
				var t;
				return null === (t = null == e ? void 0 : e.visibleStoryEndSections) || void 0 === t ? void 0 : t.slice(-1)[0]
			}
			))
			, x = n.P1(l, (e => !!e.storySession))
			, R = n.P1(x, r.MQ, ((e, t) => e && t))
	}
	,
	8096: (e, t, a) => {
		a.d(t, {
			tQ: () => Y,
			UO: () => Q,
			cw: () => ae,
			Sp: () => te,
			ke: () => K,
			H6: () => ne,
			rQ: () => $,
			BO: () => J,
			eq: () => ee,
			Ky: () => re,
			LC: () => se,
			Qy: () => ie,
			x_: () => j,
			xl: () => q
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, i = a(80254)
			, o = a(64502)
			, l = a(15543)
			, c = a(62898)
			, d = a(15746)
			, u = a(3291)
			, m = a(68950)
			, p = a(47798)
			, g = a(54174);
		const v = {
			"report-buttons": "_1apHo",
			"report-icon": "_2caIK",
			"report-icon-green-light": "_26G6u _2caIK",
			"report-icon-green-dark": "Htiq_ _2caIK",
			"report-icon-red-light": "o8H6C _2caIK",
			"report-icon-red-dark": "_2M-GA _2caIK",
			"report-icon-yellow-light": "_3p075 _2caIK",
			"report-icon-yellow-dark": "_2ehBx _2caIK",
			"_report-button": "_2jCpE bafGS _2LoNU VzbUl _1saKQ _1AgKJ",
			"report-button-green": "_1642c _2jCpE bafGS _2LoNU VzbUl _1saKQ _1AgKJ",
			"report-button-red": "_3Q4Uw _2jCpE bafGS _2LoNU VzbUl _1saKQ _1AgKJ",
			"report-button-yellow": "_2pxSX _2jCpE bafGS _2LoNU VzbUl _1saKQ _1AgKJ",
			report: "_3qh60",
			"report-text": "_2_snL _2Rt1l"
		};
		var h = a(95940)
			, f = a(18804);
		const _ = ({ color: e, onReportClick: t, reported: a }) => {
			const n = (0,
				f.Fx)(g.d)
				, r = (0,
					o.Fg)()
				, i = !n && !a;
			return i ? s.createElement("div", {
				className: v["report-buttons"]
			}, i ? s.createElement("button", {
				className: v[`report-button-${e}`],
				onClick: t
			}, s.createElement("span", {
				className: v.report
			}, s.createElement("span", {
				className: v[`report-icon-${e}-${r}`]
			}), s.createElement("span", {
				className: v["report-text"]
			}, (0,
				h._i)(400)))) : null) : null
		}
			;
		var k = a(42659)
			, b = a(43546)
			, E = a(41373)
			, y = a(4636)
			, S = a(78980);
		const C = a.p + "images/a793ee93ab0ebea37cdf9d5e048aba87.svg";
		var w = a(52068);
		const x = a.p + "images/591036c13f0674ff2907869643c2f4ae.svg"
			, R = a.p + "images/1b7b942f7db6b88042d0564bec705a7e.svg"
			, T = a.p + "images/84eb0d037bacdabe7cc7b498803b736d.svg"
			, N = a.p + "images/b1550d4f06538e8c47460fea4710bcbf.svg"
			, F = {
				wrap: "_1k6eg",
				green: "WXwlk",
				red: "o-3Ru",
				yellow: "_2n6ud",
				badge: "fwpkb",
				"badge-centered": "HJdJI fwpkb",
				"badge-math": "ORXrR",
				"icon-math": "_3r-KO",
				content: "d6Xhl",
				"content-full-width": "L_lkl d6Xhl",
				"icon-checkmark-green": "_3oCTd",
				"icon-checkmark-red": "_1gpzD",
				"icon-checkmark-yellow": "_3semA",
				"footer-title": "_2U7Gm",
				lighter: "_2jz5U",
				boxes: "_3LKiy",
				box: "_1D3fo",
				"report-buttons": "_2yBiG",
				"subtitle-inline": "CWQsE"
			};
		var I = a(30033)
			, D = a(83719)
			, P = a(95332)
			, L = a(26886)
			, A = a(67173)
			, O = a(33037)
			, M = a(68903)
			, Z = a(76530);
		const z = (e, t) => {
			var a;
			const n = s.useRef();
			return void 0 !== (null === (a = n.current) || void 0 === a ? void 0 : a.lastDeps) && i.ZP.isEqual(t, n.current.lastDeps) || (n.current = {
				lastDeps: t,
				lastValue: e()
			}),
				n.current.lastValue
		}
			;
		var U = a(67116)
			, G = a(58576)
			, B = a(89260)
			, H = a(43006)
			, W = a(34704)
			, X = a(11811)
			, V = a(42340);
		const Q = ({ color: e, subtitle: t, subtitleLang: a, subtitleFormat: n, title: i }) => {
			const o = "latex" === n
				, l = (() => {
					switch (e) {
						case p.Il.GREEN:
							return "correct";
						case p.Il.RED:
							return "incorrect";
						default:
							return "base"
					}
				}
				)();
			return s.createElement("div", {
				className: F.box
			}, s.createElement("h2", {
				className: r()(F["footer-title"], F[e])
			}, i), t ? s.createElement("div", {
				className: r()(F.lighter, F[e]),
				dir: void 0 === a ? void 0 : (0,
					U.Ux)(a),
				lang: a
			}, o ? s.createElement(u.Z, {
				math: t,
				state: l
			}) : t) : null)
		}
			, Y = ({ color: e, correct: t, isMath: a, mainContent: n, reportButtons: r, translation: i }) => {
				const l = !(n && i)
					, u = (0,
						d.Z)()
					, m = "dark" === (0,
						o.Fg)()
					, g = a ? e === p.Il.YELLOW ? null : s.createElement(c.Z, {
						animateOnMount: !u,
						className: F["badge-math"],
						isVisible: !0
					}, s.createElement("img", {
						alt: "",
						className: F["icon-math"],
						src: e === p.Il.GREEN ? m ? x : R : m ? T : N
					})) : s.createElement(c.Z, {
						animateOnMount: !u,
						className: F["badge" + (l ? "-centered" : "")],
						isVisible: !0
					}, s.createElement("img", {
						alt: "",
						className: F[`icon-checkmark-${e}`],
						src: e === p.Il.GREEN ? m ? b : E : e === p.Il.RED ? m ? y : S : m ? C : w
					}))
					, v = a && e === p.Il.YELLOW ? F["content-full-width"] : F.content;
				return s.createElement("div", {
					className: F.wrap,
					...(0,
						I._q)(A.V.Blame, t ? A.V.BlameCorrect : A.V.BlameIncorrect)
				}, g, s.createElement("div", {
					className: v
				}, s.createElement("div", {
					className: F.boxes
				}, n, i), r ? s.createElement("div", {
					className: F["report-buttons"]
				}, r) : null))
			}
			, q = ({ challenge: e, color: t, correct: a, currentCourse: n, onReportClick: r, reported: i, smartTip: o }) => {
				var l;
				const { gradingResult: c, solutionTranslation: d } = e
					, u = (0,
						O.LN)(e)
					, m = (0,
						O.zn)(e)
					, p = (0,
						f.Fx)(k.lA)
					, g = (0,
						f.Fx)(W.hg)
					, v = null === (l = (0,
						f.Fx)(k.is).showBestTranslationInGradingRibbon) || void 0 === l || l;
				if (!c)
					throw Error("Cannot construct blame ribbon text for ungraded challenge.");
				s.useEffect((() => {
					u.some((e => !e)) && (0,
						G.Kp)("Correct solutions returned invalid data for a standard challenge", {
							data: {
								challenge: e,
								mistakesReplacementChallengeIndex: p.mistakesReplacementChallengeIndex,
								session: p.session,
								status: p.status
							}
						})
				}
				), [u]);
				const b = z((() => {
					var t, r, s, i, o, l, d;
					if (!(0,
						L.lw)(n)) {
						return (null !== (t = de({
							challenge: e,
							gradingResult: c
						})) && void 0 !== t ? t : ue({
							challenge: e,
							gradingResult: c
						})) || {
							subtitle: void 0,
							subtitleFormat: "text",
							title: a ? (0,
								h._i)((0,
									D.ub)()) : (0,
										h._i)(21270)
						}
					}
					const { fromLanguage: p, learningLanguage: v } = n
						, f = (0,
							P.cC)(e, {
								fromLanguage: p,
								learningLanguage: v
							});
					return null !== (d = null !== (l = null !== (o = null !== (i = null !== (s = null !== (r = le({
						gradingResult: c
					})) && void 0 !== r ? r : ve({
						defaultCorrectSolutions: u,
						gradingResult: c,
						solutionLang: f
					})) && void 0 !== s ? s : he({
						defaultCorrectSolutions: u,
						gradingResult: c,
						solutionLang: f
					})) && void 0 !== i ? i : ke({
						defaultCorrectSolutions: u,
						gradingResult: c,
						solutionLang: f
					})) && void 0 !== o ? o : _e({
						defaultCorrectSolutions: u,
						gradingResult: c,
						solutionLang: f
					})) && void 0 !== l ? l : oe({
						defaultCorrectSolutions: u,
						gradingResult: c,
						solutionLang: f
					})) && void 0 !== d ? d : fe({
						defaultCorrectSolutionTransliteration: m,
						defaultCorrectSolutions: u,
						fromLanguage: p,
						gradingResult: c,
						learningLanguage: v,
						solutionLang: f,
						transliterationSetting: g
					})
				}
				), [c, u, n])
					, E = z((() => (0,
						h._i)((0,
							D.ul)(!c.blameType && a))), [e, a])
					, { subtitle: y, subtitleLang: S, subtitleFormat: C, title: w } = b
					, x = !!c.blameType || !a
					, R = (0,
						L.lw)(n) || (0,
							L.$l)(n) ? s.createElement(_, {
								color: t,
								onReportClick: r,
								reported: i
							}) : null
					, T = s.createElement(Q, {
						color: t,
						subtitle: y,
						subtitleFormat: C,
						subtitleLang: S,
						title: w
					});
				if (!a && o) {
					const e = s.createElement(Q, {
						color: t,
						subtitle: s.createElement(s.Fragment, null, s.createElement("span", {
							className: F["subtitle-inline"]
						}, (0,
							h._i)(23926)), s.createElement("span", null, y)),
						subtitleLang: S,
						title: (0,
							h._i)(16634)
					});
					return s.createElement(Y, {
						color: t,
						correct: a,
						reportButtons: R,
						translation: e
					})
				}
				if ((0,
					L.lw)(n) && d && v) {
					const { fromLanguage: r, learningLanguage: i } = n
						, o = (0,
							P.cC)(e, {
								fromLanguage: r,
								learningLanguage: i
							})
						, l = void 0 === o ? void 0 : o === r ? i : r
						, c = s.createElement(Q, {
							color: t,
							subtitle: a ? `${(0,
								h.H8)(15039)} ${e.solutionTranslation}` : e.solutionTranslation,
							subtitleLang: l,
							title: E
						});
					return s.createElement(Y, {
						color: t,
						correct: a,
						mainContent: x ? T : null,
						reportButtons: R,
						translation: c
					})
				}
				return s.createElement(Y, {
					color: t,
					correct: a,
					mainContent: T,
					reportButtons: R
				})
			}
			, K = ({ color: e, onReportClick: t, reported: a }) => {
				const n = s.createElement(_, {
					color: e,
					onReportClick: t,
					reported: a
				})
					, r = s.createElement(Q, {
						color: e === p.Il.YELLOW ? p.Il.YELLOW : p.Il.RED,
						subtitle: null,
						title: (0,
							h._i)(21645)
					});
				return s.createElement(Y, {
					color: e === p.Il.YELLOW ? p.Il.YELLOW : p.Il.RED,
					correct: !1,
					mainContent: r,
					reportButtons: n
				})
			}
			, j = ({ color: e, correct: t, numRetriesLeft: a, onReportClick: n, reported: r }) => s.createElement(Y, {
				color: e,
				correct: t,
				mainContent: s.createElement(Q, {
					color: e,
					subtitle: 1 === a ? (0,
						h._i)(13747) : (0,
							h._i)(5563),
					title: 1 === a ? (0,
						h._i)(20665) : (0,
							h._i)(5510)
				}),
				reportButtons: s.createElement(_, {
					color: e,
					onReportClick: n,
					reported: r
				})
			})
			, $ = ({ challenge: e, color: t, correct: a, onReportClick: n, reported: r }) => {
				var i;
				if (!e.gradingResult)
					throw Error("Cannot construct math blame ribbon text for ungraded challenge.");
				const { gradingResult: o } = e
					, { subtitle: l, subtitleFormat: c } = null !== (i = ce({
						gradingResult: o
					})) && void 0 !== i ? i : {
						subtitle: void 0,
						subtitleFormat: void 0
					}
					, d = (0,
						Z.Z)((() => a ? (0,
							h._i)((0,
								D.ub)()) : (0,
									h._i)(29711)), [a]);
				return s.createElement(Y, {
					color: t,
					correct: a,
					isMath: !0,
					mainContent: s.createElement(Q, {
						color: t,
						subtitle: l,
						subtitleFormat: c,
						title: d
					}),
					reportButtons: s.createElement(_, {
						color: t,
						onReportClick: n,
						reported: r
					})
				})
			}
			, J = ({ onReportClick: e, reported: t }) => s.createElement(Y, {
				color: p.Il.YELLOW,
				correct: !1,
				isMath: !0,
				mainContent: s.createElement(Q, {
					color: p.Il.YELLOW,
					subtitle: null,
					title: (0,
						h._i)(73634)
				}),
				reportButtons: s.createElement(_, {
					color: p.Il.YELLOW,
					onReportClick: e,
					reported: t
				})
			})
			, ee = ({ onReportClick: e, reported: t }) => s.createElement(Y, {
				color: p.Il.RED,
				correct: !1,
				isMath: !0,
				mainContent: s.createElement(Q, {
					color: p.Il.RED,
					subtitle: null,
					title: (0,
						h._i)(65234)
				}),
				reportButtons: s.createElement(_, {
					color: p.Il.RED,
					onReportClick: e,
					reported: t
				})
			})
			, te = ({ color: e, correct: t, onReportClick: a, reported: n }) => {
				const r = s.createElement(_, {
					color: e,
					onReportClick: a,
					reported: n
				});
				return s.createElement(Y, {
					color: e,
					correct: t,
					mainContent: s.createElement(Q, {
						color: e,
						subtitle: null,
						title: (0,
							h._i)(40503)
					}),
					reportButtons: r
				})
			}
			, ae = ({ color: e, correct: t, onReportClick: a, reported: n }) => {
				const r = s.createElement(_, {
					color: e,
					onReportClick: a,
					reported: n
				});
				return s.createElement(Y, {
					color: e,
					correct: t,
					mainContent: s.createElement(Q, {
						color: e,
						subtitle: null,
						title: (0,
							h._i)(6840)
					}),
					reportButtons: r
				})
			}
			, ne = ({ challenge: e, color: t, correct: a, currentCourse: n, onReportClick: r, reported: i }) => {
				var o, l;
				if (!(0,
					L.lw)(n))
					throw Error("Non-language course not supported for Listen Speak blame (yet)");
				const c = le({
					gradingResult: e.gradingResult
				})
					, { fromLanguage: d, learningLanguage: u } = n
					, m = (0,
						P.cC)(e, {
							fromLanguage: d,
							learningLanguage: u
						})
					, p = (0,
						f.Fx)(k.lA)
					, g = (0,
						f.Fx)(W.hg)
					, v = null === (o = (0,
						f.Fx)(k.is).showBestTranslationInGradingRibbon) || void 0 === o || o
					, b = (0,
						O.LN)(e);
				s.useEffect((() => {
					b.some((e => !e)) && (0,
						G.Kp)("Correct solutions returned invalid data for a Listen Speak challenge", {
							data: {
								challenge: e,
								mistakesReplacementChallengeIndex: p.mistakesReplacementChallengeIndex,
								session: p.session,
								status: p.status
							}
						})
				}
				), [b]);
				const E = z((() => {
					var t;
					return null !== (t = null != c ? c : ce({
						gradingResult: e.gradingResult
					})) && void 0 !== t ? t : fe({
						defaultCorrectSolutions: b,
						fromLanguage: d,
						gradingResult: e.gradingResult,
						learningLanguage: u,
						solutionLang: m,
						transliterationSetting: g
					})
				}
				), [e])
					, { subtitle: y, subtitleLang: S, subtitleFormat: C, title: w } = E
					, x = s.createElement(_, {
						color: t,
						onReportClick: r,
						reported: i
					});
				if (c)
					return s.createElement(Y, {
						color: t,
						correct: a,
						mainContent: s.createElement(Q, {
							color: t,
							subtitle: y,
							subtitleFormat: C,
							subtitleLang: S,
							title: w
						}),
						reportButtons: x
					});
				if ((0,
					B.bc)().includes(e.type) && !a) {
					const n = void 0 === m ? void 0 : m === d ? u : d;
					return s.createElement(Y, {
						color: t,
						correct: a,
						mainContent: s.createElement(Q, {
							color: t,
							subtitle: v ? `${(0,
								h.H8)(15039)} ${e.solutionTranslation}` : null,
							subtitleLang: n,
							title: (0,
								h._i)(6840)
						}),
						reportButtons: x
					})
				}
				if (e.type === X.Sm.Listen) {
					const { closestSolution: n } = null !== (l = e.gradingResult) && void 0 !== l ? l : {}
						, r = n ? (0,
							H.Dg)(n) : void 0
						, { prompt: i } = e
						, o = (0,
							H.Dg)(i);
					if (a && r !== o)
						return s.createElement(Y, {
							color: t,
							correct: a,
							mainContent: s.createElement(Q, {
								color: t,
								subtitle: y,
								subtitleFormat: C,
								subtitleLang: S,
								title: w
							}),
							reportButtons: x
						})
				}
				return s.createElement(q, {
					challenge: e,
					color: t,
					correct: a,
					currentCourse: n,
					onReportClick: r,
					reported: i
				})
			}
			, re = ({ challenge: e, color: t, correct: a, onReportClick: n, reported: r }) => {
				const o = s.createElement(_, {
					color: t,
					onReportClick: n,
					reported: r
				})
					, l = [42582, 42583, 42584, 42585, 42586]
					, c = (0,
						Z.Z)((() => a ? (0,
							h._i)(i.UP(l)) : (0,
								h._i)(42581)), [a])
					, d = e.type === X.Sm.SelectPronunciation ? null : void 0 !== e.blameOverride && /<[a-z].*?>/i.test(e.blameOverride) ? s.createElement("span", {
						dangerouslySetInnerHTML: {
							__html: e.blameOverride
						}
					}) : e.blameOverride;
				return s.createElement(Y, {
					color: t,
					correct: a,
					mainContent: s.createElement(Q, {
						color: t,
						subtitle: d,
						title: c
					}),
					reportButtons: o
				})
			}
			, se = ({ color: e, correct: t, onReportClick: a, reported: n }) => {
				const r = s.createElement(_, {
					color: e,
					onReportClick: a,
					reported: n
				})
					, o = [42592, 42593, 42594, 42595, 42596, 42597]
					, l = (0,
						Z.Z)((() => t ? (0,
							h._i)(i.UP(o)) : (0,
								h._i)(6840)), [t]);
				return s.createElement(Y, {
					color: e,
					correct: t,
					mainContent: s.createElement(Q, {
						color: e,
						subtitle: null,
						title: l
					}),
					reportButtons: r
				})
			}
			, ie = ({ color: e, correct: t, currentCourse: a, smartTip: n }) => {
				const r = (0,
					Z.Z)((() => t ? (0,
						h._i)((0,
							D.ub)()) : (0,
								h._i)(23926)), [t]);
				return s.createElement(Y, {
					color: e,
					correct: t,
					mainContent: s.createElement(Q, {
						color: e,
						subtitle: t ? void 0 : n.correctSolution || "",
						subtitleLang: a.learningLanguage,
						title: r
					})
				})
			}
			, oe = ({ defaultCorrectSolutions: e, gradingResult: t, solutionLang: a }) => {
				const { correct: n, guess: r, closestSolution: s } = t;
				if ((0,
					O.tx)(n, r, s, e))
					return {
						subtitle: e[0],
						subtitleLang: a,
						title: (0,
							h._i)(4231)
					}
			}
			, le = ({ gradingResult: e }) => {
				const { blameMessage: t, blameSubtext: a, blameSubtextFormat: n } = e;
				if (t && a)
					return {
						subtitle: a,
						subtitleFormat: n,
						title: t
					}
			}
			, ce = ({ gradingResult: e }) => {
				const { blameSubtext: t, blameSubtextFormat: a, correct: n } = e;
				if ("latex" === a)
					return {
						subtitle: n ? void 0 : t,
						subtitleFormat: a,
						title: n ? (0,
							h._i)((0,
								D.ub)()) : (0,
									h._i)(21270)
					}
			}
			, de = ({ challenge: e, gradingResult: t }) => {
				if (!("chessPuzzleInfo" in e))
					return;
				const a = e.chessPuzzleInfo
					, { correct: n } = t;
				if (n)
					return {
						subtitle: void 0,
						subtitleFormat: "text",
						title: (0,
							h._i)((0,
								D.ub)())
					};
				const r = t.guess;
				if (!(0,
					V.uj)(r))
					return;
				const s = r.gradingState;
				return "suboptimal" === (null == s ? void 0 : s.type) ? {
					subtitle: void 0,
					subtitleFormat: "text",
					title: (0,
						h._i)(63803)
				} : "stalemate" === (null == s ? void 0 : s.type) ? {
					subtitle: void 0,
					subtitleFormat: "text",
					title: (0,
						h._i)(66083)
				} : "incorrect" === (null == s ? void 0 : s.type) && e.type === X.Sm.ChessStar && null !== a.maxMoves ? {
					subtitle: void 0,
					subtitleFormat: "text",
					title: (0,
						h._i)(63801)
				} : {
					subtitle: void 0,
					subtitleFormat: "text",
					title: (0,
						h._i)(21270)
				}
			}
			, ue = ({ challenge: e, gradingResult: t }) => {
				const { guess: a } = t;
				if (!(0,
					V.Gu)(a))
					return;
				const { matchState: n } = a;
				if ("completed" !== n.status)
					return;
				const r = e.type === X.Sm.ChessPvpMatch;
				switch (n.outcome) {
					case "win":
						return {
							subtitle: void 0,
							subtitleFormat: "text",
							title: me(n.endCondition, r)
						};
					case "loss":
						return {
							subtitle: void 0,
							subtitleFormat: "text",
							title: pe(n.endCondition, r)
						};
					case "draw":
						return {
							subtitle: void 0,
							subtitleFormat: "text",
							title: ge(n.endCondition, r)
						};
					default:
						throw (0,
							M.RJ)(n.outcome),
						Error(`Unexpected match state outcome: ${n.outcome}`)
				}
			}
			, me = (e, t) => {
				if (!t)
					return (0,
						h._i)(66086);
				switch (e) {
					case "resignation":
						return (0,
							h._i)(67229);
					case "abandoned":
					case "disconnection":
						return (0,
							h._i)(69094);
					case "timeout":
						return (0,
							h._i)(68329);
					default:
						return (0,
							h._i)(66086)
				}
			}
			, pe = (e, t) => {
				switch (e) {
					case "resignation":
						return (0,
							h._i)(73532);
					case "timeout":
						return (0,
							h._i)(68330);
					case "disconnection":
						return t ? (0,
							h._i)(69444) : (0,
								h._i)(66085);
					default:
						return t ? (0,
							h._i)(66086) : (0,
								h._i)(66085)
				}
			}
			, ge = (e, t) => {
				switch (e) {
					case "stalemate":
						return (0,
							h._i)(66083);
					case "abandoned":
						return t ? (0,
							h._i)(69095) : (0,
								h._i)(66084);
					default:
						return (0,
							h._i)(66084)
				}
			}
			, ve = ({ defaultCorrectSolutions: e, gradingResult: t, solutionLang: a }) => {
				const { correct: n, mistakesRecyclingHighlights: r } = t;
				if (!n && r && e.length > 0)
					return {
						subtitle: s.createElement(m.Z, {
							highlights: r,
							style: "underline-and-bold",
							text: e[0]
						}),
						subtitleLang: a,
						title: (0,
							h._i)(23926)
					}
			}
			, he = ({ defaultCorrectSolutions: e, gradingResult: t, solutionLang: a }) => {
				const { blameMessage: n, closestSolution: r, correct: i, highlights: o } = t;
				if (r) {
					if (i && n)
						return {
							subtitle: s.createElement(m.Z, {
								highlights: null != o ? o : [],
								text: r
							}),
							subtitleLang: a,
							title: n
						};
					if (!i)
						return {
							subtitle: e[0],
							subtitleLang: a,
							title: (0,
								h._i)(23926)
						}
				}
			}
			, fe = ({ defaultCorrectSolutions: e, defaultCorrectSolutionTransliteration: t, fromLanguage: a, gradingResult: n, learningLanguage: r, solutionLang: i, transliterationSetting: o }) => {
				const { correct: c } = n
					, d = (() => {
						if (!c)
							return t && (0,
								W.dN)(r, a, o, !0) ? s.createElement(l.Z, {
									highlightStyle: "normal",
									state: "active",
									text: [...e[0]],
									transliteration: t
								}) : e.join(", ")
					}
					)();
				return {
					subtitle: d,
					subtitleLang: i && d ? i : void 0,
					title: c ? (0,
						h._i)((0,
							D.ub)()) : e.length > 1 ? (0,
								h._i)(8766) : (0,
									h._i)(23926)
				}
			}
			, _e = ({ defaultCorrectSolutions: e, gradingResult: t, solutionLang: a }) => {
				const { correct: n, highlights: r } = t;
				if (null == r ? void 0 : r.length)
					return {
						subtitle: s.createElement(m.Z, {
							highlights: r,
							text: e[0]
						}),
						subtitleLang: a,
						title: n ? (0,
							h._i)(4081) : (0,
								h._i)(23926)
					}
			}
			, ke = ({ defaultCorrectSolutions: e, gradingResult: t, solutionLang: a }) => {
				const { blameMessage: n, highlights: r } = t;
				if (n)
					return {
						subtitle: s.createElement(m.Z, {
							highlights: null != r ? r : [],
							text: e[0]
						}),
						subtitleLang: a,
						title: n
					}
			}
	}
	,
	9129: (e, t, a) => {
		a.d(t, {
			g3: () => x,
			S6: () => I,
			R4: () => h
		});
		var n = a(80254)
			, r = a(70220)
			, s = a(64115)
			, i = a(51748)
			, o = a(37971)
			, l = a(95940)
			, c = a(43633)
			, d = a(23275)
			, u = a(56366)
			, m = a(89260)
			, p = a(11811);
		const g = a.p + "lottie/2494663888ef0119bb1c065df8a5d47e.json"
			, v = a.p + "lottie/8e0c9acabfda9acda61f502236cc92c8.json"
			, h = {
				left: {
					bubblePointerLocation: .5,
					delay: 1,
					horizontalDockPoint: "center",
					maxWidth: .75,
					verticalPosition: .25
				},
				loopingPosition: 122,
				type: "dialogue",
				url: g
			}
			, f = {
				left: {
					bubblePointerLocation: .5,
					delay: 1,
					horizontalDockPoint: "center",
					maxWidth: .75,
					verticalPosition: .25
				},
				loopingPosition: 122,
				type: "dialogue",
				url: v
			};
		a(42659);
		const _ = a.p + "rive/c9f0912a5a764f96c9c362f1db1a2cff.riv";
		var k;
		a(74541),
			function (e) {
				e[e.None = 0] = "None",
					e[e.Super = 1] = "Super",
					e[e.Max = 2] = "Max"
			}(k || (k = {}));
		const b = (e, t) => ({
			animation: e,
			animationInputName: "Animation_Num",
			artBoardName: "Duo_MidLesson",
			endedStateName: "exit",
			playInputName: "Play_Trig",
			stateMachineName: "Duo_MidLesson_StateMachine",
			subscription: t,
			subscriptionInputName: "Subscription_Num",
			type: "rive",
			url: _
		})
			, E = e => k.None
			, y = e => b(2, E())
			, S = e => b(1, E())
			, C = e => b(3, E())
			, w = e => b(0, E())
			, x = 1728e5
			, R = {
				[i.w.AfterThirdMistakeCheckpointTest]: {
					rawTemplates: [{
						message: 32719,
						trackingIndex: 65
					}],
					test: ({ player: e }) => 1 === e.session.heartsLeft
				},
				[i.w.BigRightStreak]: {
					getStreak: e => e.coachDuo.currentCorrectStreak,
					rawTemplates: [{
						animation: y,
						character: "duo",
						message: 33384
					}, {
						animation: S,
						character: "duo",
						message: 33384
					}, {
						animation: C,
						character: "duo",
						message: 33384
					}, {
						animation: w,
						character: "duo",
						message: 33384
					}, {
						message: () => (0,
							l.H8)(20295, {
								challenges: 10
							}),
						trackingIndex: 10
					}, {
						message: () => (0,
							l.H8)(20893, {
								num_right: 10
							}),
						trackingIndex: 1
					}, {
						message: () => (0,
							l.H8)(7976, {
								challenges: 10
							}),
						trackingIndex: 7
					}, {
						message: 11911,
						trackingIndex: 6
					}, {
						message: 16802,
						trackingIndex: 8
					}, {
						message: 9495,
						trackingIndex: 9
					}, {
						message: 14485,
						trackingIndex: 3
					}, {
						message: 5686,
						trackingIndex: 4
					}],
					test: ({ player: e }) => 10 === e.coachDuo.currentCorrectStreak
				},
				[i.w.BigRightStreakCheckpointTest]: {
					getStreak: e => e.coachDuo.currentCorrectStreak,
					rawTemplates: [{
						message: 32267,
						trackingIndex: 62
					}, {
						message: 32268,
						trackingIndex: 63
					}],
					test: ({ player: e }) => 8 === e.coachDuo.currentCorrectStreak
				},
				[i.w.CapstoneHardExercises]: {
					rawTemplates: [{
						message: 33647
					}],
					test: ({ player: e }) => !!(e.session.type === p.FF.LevelReview || e.session.type === p.FF.LexemePractice && e.levelData && (0,
						d.$)(e.levelData.level)) && (e.status === o.c.CapstoneReviewSplash ? -1 : e.currentIndex) === e.session.challenges.findIndex((e => e.indicatorType === p.A.HardChallenge)) - 1
				},
				[i.w.MistakesReview]: {
					rawTemplates: [{
						message: e => (0,
							l.H8)(11949, {
								number_1: e.player.session.challenges.filter((e => e.indicatorType === p.A.PastMistake)).length
							})
					}],
					test: ({ player: e }) => !!(e.session.type === p.FF.GlobalPractice || e.session.type === p.FF.Lesson || e.session.type === p.FF.LevelReview || e.session.type === p.FF.LexemePractice && void 0 !== e.levelData && (0,
						d.$)(e.levelData.level) || e.session.type === p.FF.LexemeSkillLevelPractice || e.session.type === p.FF.SpacedRepetition) && (e.status === o.c.CapstoneReviewSplash ? -1 : e.currentIndex) === e.session.challenges.findIndex((e => e.indicatorType === p.A.PastMistake)) - 1
				},
				[i.w.FirstCorrectCheckpointTest]: {
					rawTemplates: [{
						message: 31719,
						trackingIndex: 55
					}],
					test: ({ player: e }) => 0 === e.currentIndex && 1 === e.coachDuo.currentCorrectStreak
				},
				[i.w.FirstWrongCheckpointTest]: {
					rawTemplates: [{
						message: 32264,
						trackingIndex: 60
					}],
					test: ({ player: e }) => 0 === e.currentIndex && 1 === e.coachDuo.currentIncorrectStreak
				},
				[i.w.FourQuestionsLeftCheckpointTest]: {
					rawTemplates: [{
						message: 32269,
						trackingIndex: 64
					}],
					test: ({ player: e }) => 25 === e.currentIndex
				},
				[i.w.MediumRightStreakCheckpointTest]: {
					getStreak: e => e.coachDuo.currentCorrectStreak,
					rawTemplates: [{
						message: 9366,
						trackingIndex: 44
					}, {
						message: 14828,
						trackingIndex: 46
					}],
					test: ({ player: e }) => 4 === e.coachDuo.currentCorrectStreak
				},
				[i.w.MidPointCheckpointTest]: {
					rawTemplates: [{
						message: 32266,
						trackingIndex: 61
					}],
					test: ({ player: e }) => 14 === e.currentIndex
				},
				[i.w.SmallRightStreak]: {
					getStreak: e => e.coachDuo.currentCorrectStreak,
					rawTemplates: [{
						animation: y,
						character: "duo",
						message: 33374
					}, {
						animation: S,
						character: "duo",
						message: 33374
					}, {
						animation: C,
						character: "duo",
						message: 33374
					}, {
						animation: w,
						character: "duo",
						message: 33374
					}, {
						message: 2762,
						trackingIndex: 0
					}, {
						message: () => (0,
							l.H8)(14350, {
								challenges: 5
							}),
						trackingIndex: 6
					}, {
						message: () => (0,
							l.H8)(2592, {
								challenges: 5
							}),
						trackingIndex: 7
					}, {
						message: 9705,
						trackingIndex: 8
					}, {
						message: 9634,
						trackingIndex: 9
					}, {
						message: 7829,
						trackingIndex: 10
					}],
					test: ({ player: e }) => 5 === e.coachDuo.currentCorrectStreak
				},
				[i.w.WrongStreak]: {
					getStreak: e => e.coachDuo.currentIncorrectStreak,
					rawTemplates: [{
						animation: f,
						character: "duo",
						message: 32244
					}, {
						message: 6886,
						trackingIndex: 0
					}, {
						message: 18656,
						trackingIndex: 6
					}, {
						message: 22112,
						trackingIndex: 2
					}, {
						message: 16138,
						trackingIndex: 7
					}, {
						message: 5514,
						trackingIndex: 4
					}, {
						message: 4997,
						trackingIndex: 5
					}, {
						message: 4668,
						trackingIndex: 8
					}],
					test: ({ player: e }) => 3 === e.coachDuo.currentIncorrectStreak
				}
			}
			, T = [i.w.BigRightStreak, i.w.SmallRightStreak, i.w.WrongStreak]
			, N = [i.w.AfterThirdMistakeCheckpointTest, i.w.FourQuestionsLeftCheckpointTest, i.w.MidPointCheckpointTest, i.w.BigRightStreakCheckpointTest, i.w.MediumRightStreakCheckpointTest, i.w.FirstCorrectCheckpointTest, i.w.FirstWrongCheckpointTest]
			, F = (e, t) => {
				var a;
				const n = "function" == typeof e.animation ? e.animation(t) : e.animation
					, r = null !== (a = e.character) && void 0 !== a ? a : "duo"
					, s = "function" == typeof e.message ? e.message(t) : (0,
						l.H8)(e.message)
					, i = void 0 === e.secondary ? void 0 : "function" == typeof e.secondary ? e.secondary() : (0,
						l.H8)(e.secondary)
					, o = e.trackingIndex;
				return "dialogue" === (null == n ? void 0 : n.type) ? {
					animation: n,
					character: r,
					message: s,
					secondary: i,
					trackingIndex: o,
					type: "dialogue"
				} : "rive" === (null == n ? void 0 : n.type) ? {
					animation: n,
					character: r,
					message: s,
					trackingIndex: o,
					type: "rive"
				} : {
					character: r,
					message: s,
					trackingIndex: o,
					type: "static"
				}
			}
			, I = e => {
				if ((0,
					s.gQ)("debugCoach"))
					return (e => {
						console.log("These are all possible coach messages:"),
							n.XP(R).forEach((t => {
								console.log("====", t),
									R[t].rawTemplates.forEach((t => {
										var a, n, r;
										const s = F(t, e);
										"dialogue" === s.type ? console.log(`(${null !== (a = t.trackingIndex) && void 0 !== a ? a : -1}) duo: "${s.message}" => ${s.character}: "${s.secondary}"`) : console.log(`(${null !== (n = t.trackingIndex) && void 0 !== n ? n : -1}) ${null !== (r = s.character) && void 0 !== r ? r : "duo"}: "${s.message}"`)
									}
									))
							}
							))
					}
					)(e),
					{
						showReason: i.w.SmallRightStreak,
						template: F(R[i.w.SmallRightStreak].rawTemplates[3], e)
					};
				if (!(0,
					m.ZX)(e.player.session.type) || !(0,
						c.h0)().get(u.Lm))
					return;
				const t = D(e);
				return void 0 !== t ? {
					showReason: t,
					template: F(P(t, e), e)
				} : void 0
			}
			, D = e => {
				const { player: t, user: a } = e
					, n = n => (e => !t.coachDuo.allShowReasons.includes(e))(n) && R[n].test(e) && ([i.w.CapstoneHardExercises, i.w.MistakesReview].includes(n) || (e => {
						var t, n;
						const r = null === (n = null === (t = a.coachRecords) || void 0 === t ? void 0 : t[e]) || void 0 === n ? void 0 : n.timesShownToday;
						return void 0 === r || r < 3
					}
					)(n));
				switch (t.session.type) {
					case p.FF.SectionTest:
					case p.FF.UnitTest:
						return N.find(n);
					case p.FF.LevelReview:
					case p.FF.LexemePractice:
						return [i.w.MistakesReview, i.w.CapstoneHardExercises].find(n);
					case p.FF.GlobalPractice:
					case p.FF.LexemeSkillLevelPractice:
					case p.FF.Lesson:
						return [i.w.MistakesReview, ...T].find(n);
					default:
						return T.find(n)
				}
			}
			, P = (e, t) => {
				var a;
				const s = t.user.animationEnabled && !r.H && 1e3 * t.user.creationDate < Date.now() - x
					, i = R[e].rawTemplates.filter((e => s || void 0 === e.animation)).filter((e => void 0 === e.character || "duo" === e.character || !t.player.coachDuo.allCharacters.includes(e.character))).filter((e => {
						var t, a;
						return null === (a = null === (t = e.test) || void 0 === t ? void 0 : t.call(e)) || void 0 === a || a
					}
					));
				return null !== (a = n.UP(i.filter((e => e.animation)))) && void 0 !== a ? a : n.UP(i.filter((e => void 0 === e.animation)))
			}
	}
	,
	6962: (e, t, a) => {
		a.d(t, {
			I: () => F,
			JW: () => N,
			Jp: () => R,
			Jy: () => I,
			XN: () => D
		});
		var n = a(51827)
			, r = a(17135)
			, s = a(64115)
			, i = a(81149)
			, o = a(94171)
			, l = a(66238)
			, c = a(68903)
			, d = a(87471)
			, u = a(58576)
			, m = a(89065)
			, p = a(90110)
			, g = a(12125)
			, v = a(88624)
			, h = a(55318)
			, f = a(32401)
			, _ = a(20579)
			, k = a(51551)
			, b = a(6947)
			, E = a(39837)
			, y = a(37111)
			, S = a(11811)
			, C = a(41631)
			, w = a(20028)
			, x = a(97106);
		const R = (0,
			c.p)(["friendsQuestGift", "friendsQuestReward"])
			, T = ["immersivePlus", "plusPromoInterstitial", "plusPromoCarousel", "finalLevelPromotion", "practiceHubPromo"]
			, N = (e, t) => {
				if ((0,
					s.gQ)("debugSlides"))
					return e;
				const a = e.find((e => "finalLevelFailed" === e.type));
				if (a)
					return [a];
				e.some((e => "finalLevelPartialXp" === e.type)) && (e = e.filter((e => "sessionComplete" !== e.type))),
					t.sessionParams.isFinalLevel && !t.session.failed && (e = e.filter((e => "achievementUnlocked" === e.type || "chestLingotsReward" === e.type || "dailyQuestComplete" === e.type || "dailyQuestFirst" === e.type || "dailyQuestHalfway" === e.type || "dailyQuestReward" === e.type || "finalLevelLesson" === e.type || "finalLevelPartialXp" === e.type || "friendStreakUpdate" === e.type || "monthlyChallengeComplete" === e.type || "monthlyGoal" === e.type || "nativeAd" === e.type || "sessionComplete" === e.type || "streakExtended" === e.type))),
					e.find((e => "checkpointComplete" === e.type && "unitTestFailed" === e.view || "checkpointComplete" === e.type && "sectionTestFailed" === e.view)) && (e = e.filter((e => "chestLingotsReward" !== e.type && "earlyStreakMilestonePrompt" !== e.type && "sessionComplete" !== e.type && "streakExtended" !== e.type && "streakFreezeChestReward" !== e.type))),
					e.some((e => "streakFreezeChestReward" === e.type)) && (e = e.filter((e => "chestLingotsReward" !== e.type)));
				const n = T.find((t => e.some((e => e.type === t))));
				return e = e.filter((e => e.type === n || !T.includes(e.type))),
					n && (e = e.filter((e => "nativeAd" !== e.type))),
					e.some((e => "streakSocietyFreezes" === e.type)) && (e = e.filter((e => "milestoneStreakFreeze" !== e.type))),
					e
			}
			, F = e => e.flatMap((e => "attachedSlides" in e ? [e, ...e.attachedSlides] : [e]))
			, I = ({ attachedSlides: e, currentIndex: t, playerSlideData: a }) => {
				var n;
				if (0 === e.length)
					return !0;
				for (const [r, s] of e.entries())
					if (s.type !== (null === (n = a[t + r + 1]) || void 0 === n ? void 0 : n.type))
						return (0,
							u.Kp)("Expected attached slides to follow main slide, but found a mismatch", {
								data: {
									expected: s,
									found: a[r + t + 1]
								}
							}),
							!1;
				return !0
			}
			, D = ({ availableQuests: e, earnbackMultiSessionStats: t, friendStreakCombinedData: a, friendStreakData: c, goals: u, hasXpBoost: R, isDesktop: T, items: N, leaderboards: F, leaderboardPositionState: I, levelData: D, monthlyChallengeThreshold: P, path: L, player: A, sectionType: O, streakGoalData: M, streakGoalOptions: Z, streakNudgeState: z, streakSocietyProgressState: U, subject: G, unlockedAchievementsV3: B, user: H, rewardedHearts: W, scoreSessionEndVariant: X, showScoreLinkedinSyncOnSessionEnd: V }) => {
				var Q, Y, q, K, j, $, J, ee, te, ae, ne, re, se, ie, oe, le, ce, de, ue, me, pe, ge;
				const { receivedGifts: ve, session: he, sessionParams: fe } = A
					, { sectionIndex: _e, type: ke, xpGain: be } = he
					, { streakData: Ee, timezoneOffset: ye, xpGains: Se } = H
					, Ce = null !== (Y = null === (Q = Ee.currentStreak) || void 0 === Q ? void 0 : Q.length) && void 0 !== Y ? Y : 0
					, we = []
					, [xe, Re] = (() => {
						const e = (0,
							s.ky)("debugSlides");
						return void 0 === e || ["0", "false"].includes(e) ? [!1, void 0] : ["1", "true"].includes(e) ? [!0, void 0] : [!1, e.split(",")]
					}
					)()
					, Te = xe || void 0 !== Re;
				Te && (we.push({
					type: "finalLevelFailed"
				}),
					we.push({
						type: "finalLevelPartialXp"
					}));
				const Ne = (0,
					x.R7)(ye, Se)
					, Fe = Ne[6]
					, Ie = be > 0 && be === Fe
					, De = (0,
						x.Ig)(A, Fe, R)
					, Pe = ke === S.FF.SectionTest || ke === S.FF.ChessSectionTest
					, Le = ke === S.FF.UnitTest || ke === S.FF.ChessUnitTest
					, Ae = ke === S.FF.UnitReview && O !== C.t.DAILY_REFRESH
					, Oe = L[L.length - 1]
					, Me = L[L.length - 2]
					, Ze = (Oe.levels.some((e => void 0 !== e.dailyRefreshInfo)) ? Me.levels[Me.levels.length - 1].id : Oe.levels[Oe.levels.length - 1].id) === (null == D ? void 0 : D.level.id) && ke === S.FF.UnitReview;
				(Te || Ze && "experiment" === (0,
					i.j6)("path_web_course_complete_slides", void 0)) && (we.push({
						type: "courseCompletionTrophy"
					}),
						we.push({
							type: "dailyRefreshOnboarding"
						})),
					(Te || ke === S.FF.Placement || "path-level" === (null === (q = A.sessionRouteParams) || void 0 === q ? void 0 : q.type) && (null === (K = A.sessionRouteParams) || void 0 === K ? void 0 : K.isOnboardingLesson)) && we.push({
						sectionNumber: (null !== (j = null == fe ? void 0 : fe.sectionIndex) && void 0 !== j ? j : -1) + 2,
						type: "placementConfirmation"
					}),
					we.push({
						type: "sessionComplete",
						xpGoalSessionProgress: De
					}),
					(0,
						v.aZ)(X) && void 0 !== X && !V && we.push({
							type: "scoreProgressTouchPoint",
							variant: X
						});
				const ze = (0,
					E.E6)(t)
					, Ue = (0,
						_.E)({
							currentDate: (0,
								r.Ux)(),
							debugSlides: Te,
							isEarnbackSessionComplete: ze,
							overrideWeekStartDayForTesting: void 0,
							streak: Ce,
							streakJustExtended: Ie,
							streakNudgeState: z,
							subject: G,
							user: H,
							xpGain: be,
							xpPerDay: Ne
						});
				we.push(...Ue);
				const Ge = (0,
					f.J)({
						debugSlides: Te,
						isEarnbackSessionComplete: ze,
						streak: Ce,
						streakGoalData: M,
						streakGoalOptions: Z,
						streakJustExtended: Ie,
						user: H
					});
				if (we.push(...Ge),
					Pe || Te)
					if (Te)
						we.push({
							sectionNumber: 0,
							sectionType: C.t.ROOKIE,
							type: "checkpointComplete",
							unitIndex: 0,
							unitNumber: 10,
							view: "sectionTestFailed"
						});
					else {
						if (void 0 === _e)
							throw Error("sectionIndex undefined after section test complete.");
						he.failed && we.push({
							sectionNumber: _e + 2,
							sectionType: m.uu[_e + 1],
							type: "checkpointComplete",
							unitIndex: null !== ($ = null == D ? void 0 : D.unitIndex) && void 0 !== $ ? $ : 0,
							unitNumber: null !== (J = null == D ? void 0 : D.unitNumber) && void 0 !== J ? J : 0,
							view: "sectionTestFailed"
						})
					}
				if (Le || Te)
					if (Te)
						we.push({
							type: "checkpointComplete",
							unitIndex: 0,
							unitNumber: 10,
							view: "unitTestPassed"
						}),
							we.push({
								type: "checkpointComplete",
								unitIndex: 0,
								unitNumber: 10,
								view: "unitTestFailed"
							});
					else {
						if (void 0 === (null == D ? void 0 : D.unitNumber))
							throw Error("unitNumber undefined after unit test complete.");
						we.push({
							type: "checkpointComplete",
							unitIndex: null !== (ee = null == D ? void 0 : D.unitIndex) && void 0 !== ee ? ee : 0,
							unitNumber: D.unitNumber,
							view: he.failed ? "unitTestFailed" : "unitTestPassed"
						})
					}
				if (Ae || Te) {
					if (void 0 === (null == D ? void 0 : D.unitIndex) && !Te)
						throw Error("unitIndex undefined after unit review complete.");
					we.push({
						type: "checkpointComplete",
						unitIndex: null !== (te = null == D ? void 0 : D.unitIndex) && void 0 !== te ? te : 0,
						unitNumber: null !== (ae = null == D ? void 0 : D.unitNumber) && void 0 !== ae ? ae : 1,
						view: "unitReview"
					})
				}
				if (Te ? (we.push({
					type: "milestoneStreakFreeze"
				}),
					we.push({
						quantity: k.SG,
						type: "streakFreezeGift"
					})) : ve.streakFreeze && (ve.fromMilestone ? we.push({
						type: "milestoneStreakFreeze"
					}) : we.push({
						quantity: ve.quantity,
						type: "streakFreezeGift"
					})),
					[S.FF.LegendaryLevel, S.FF.LegendaryLexemePractice].includes(ke) && "legendary" === (null == D ? void 0 : D.level.state) || Te) {
					let e = null == D ? void 0 : D.unitIndex
						, t = null == D ? void 0 : D.unitNumber;
					if (void 0 === e || void 0 === t) {
						if (!Te)
							throw Error("Missing unit index for legendary earned slide.");
						e = 0,
							t = 0
					}
					we.push({
						type: "finalLevelLesson",
						unitIndex: e,
						unitNumber: t
					})
				}
				if (A.sessionParams.isFinalLevel && !A.completedWithHeartsRemaining && we.push({
					type: "finalLevelPartialXp"
				}),
					null == B || B.forEach((e => we.push({
						achievement: e,
						type: "achievementUnlocked"
					}))),
					!(null == B ? void 0 : B.length) && Te && we.push({
						achievement: {
							count: 1,
							name: "champion",
							rewards: [10, 10],
							shouldShowUnlock: !0,
							tier: 1,
							tierCounts: [5, 5]
						},
						type: "achievementUnlocked"
					}),
					(Te || (0,
						n.UG)({
							isDesktop: T,
							items: N,
							user: H
						})) && we.push({
							type: "immersivePlus"
						}),
					(Te || (0,
						n.as)({
							isDesktop: T,
							items: N,
							user: H
						})) && we.push({
							type: "plusPromoCarousel"
						}),
					(Te || (0,
						n.XT)({
							isDesktop: T,
							items: N,
							user: H
						})) && we.push({
							type: "plusPromoInterstitial"
						}),
					(Te || (0,
						n.kN)({
							items: N,
							path: L,
							user: H
						})) && we.push({
							type: "practiceHubPromo"
						}),
					(Te || (0,
						n.qc)({
							levelData: D
						}) && !ze) && we.push({
							type: "finalLevelPromotion"
						}),
					((0,
						w.pN)(H) || Te) && we.push({
							type: "createProfile"
						}),
					T && null !== (0,
						n.Z7)(H, n.ZD.SessionEnd) && we.push({
							type: "nativeAd"
						}),
					(Te || he.type === S.FF.MistakesReview && 0 === (null === (ne = H.mistakeCountInfo) || void 0 === ne ? void 0 : ne.mistakeCount)) && we.push({
						type: "mistakesInboxEmpty"
					}),
					Te) {
					const e = {
						avatarUrl: "https://images-static.duolingo.cn/avatars/415711021/KR7snIZQms"
					}
						, t = 20
						, a = 8
						, n = 20;
					we.push({
						classroomLeaderboard: {
							alias: "classroom",
							classroomId: 0,
							classroomName: "Test Classroom",
							learningLanguageId: "es",
							socialDisabledUsers: [],
							state: {
								active: {
									cohort: {
										creationDate: 0,
										id: "id",
										rankings: [...new Array(t)].map(((n, r) => ({
											...e,
											displayName: `Tester ${r + 1}`,
											hasRecentActivity: !0,
											reaction: "NONE",
											score: t - r,
											userId: a - 1 === r ? H.id : r
										}))),
										tier: 0
									},
									complete: !1,
									contest: {
										contestEnd: 1e4,
										contestStart: 0,
										contestState: "ACTIVE",
										registrationEnd: 50,
										registrationStart: 0,
										registrationState: "CLOSED",
										ruleset: {
											cohortSize: t,
											cohortType: "RANDOM",
											numDemoted: [],
											numLosers: 0,
											numPromoted: [],
											numWinners: 0,
											rewards: [],
											scoreType: "XP"
										}
									},
									score: 5,
									userId: H.id
								},
								tier: 0
							}
						},
						totalSessionXpGain: n,
						type: "schoolsClassroomLeaderboardMoveUp"
					})
				} else
					F.classroomLeaderboard && (0,
						g.S2)(H.id, F.classroomLeaderboard.state, null !== (re = he.xpPromised) && void 0 !== re ? re : be) && we.push({
							classroomLeaderboard: F.classroomLeaderboard,
							totalSessionXpGain: null !== (se = he.xpPromised) && void 0 !== se ? se : be,
							type: "schoolsClassroomLeaderboardMoveUp"
						});
				const Be = null === (ie = F.leagues) || void 0 === ie ? void 0 : ie.state;
				if (Te)
					we.push({
						lastPositionSeen: 29,
						lastScoreSeen: 0,
						type: "leaderboardTopThree"
					}),
						we.push({
							lastPositionSeen: 29,
							lastScoreSeen: 0,
							type: "leaderboardPromoZone"
						}),
						we.push({
							lastPositionSeen: 29,
							lastScoreSeen: 0,
							type: "leaderboardDemoZone"
						}),
						we.push({
							lastPositionSeen: 29,
							lastScoreSeen: 0,
							type: "leaderboardRankIncreaseLarge"
						}),
						we.push({
							lastPositionSeen: 29,
							lastScoreSeen: 0,
							type: "leaderboardRankIncreaseSmall"
						}),
						we.push({
							lastPositionSeen: void 0,
							lastScoreSeen: void 0,
							type: "leaderboardJoin"
						}),
						we.push({
							lastPositionSeen: void 0,
							lastScoreSeen: void 0,
							type: "leaderboardMoveUpPrompt"
						});
				else if ((null == Be ? void 0 : Be.active) && (null === (oe = Be.leaderboard) || void 0 === oe ? void 0 : oe.activeContest) && Be.tier >= 1 && !H.classroomLeaderboardsEnabled) {
					const e = (0,
						d.c$)(Be, I, F.sessionEndData);
					e && we.push(e)
				}
				if (Te) {
					const t = ["DAILY", "CORE", "HARD"]
						, a = {
							availableQuests: e,
							difficulty: u.difficulty,
							numQuestsCompleted: 0,
							oldProgress: u.progress
						};
					we.push({
						...a,
						numQuestsCompleted: 1,
						type: "dailyQuestComplete"
					}),
						we.push({
							...a,
							type: "dailyQuestFirst"
						}),
						we.push({
							...a,
							type: "dailyQuestHalfway"
						}),
						we.push({
							dailyQuestRewards: [{}, {}, {}].map(((e, a) => ({
								reward: a % 2 == 0 ? {
									amount: a + 1,
									consumed: !1,
									currency: "GEMS",
									id: "5",
									rewardType: "CHEST"
								} : {
									consumed: !1,
									id: "5",
									itemId: "STREAK_FREEZE",
									rewardType: "CHEST"
								},
								slotType: t[a]
							}))),
							type: "dailyQuestReward"
						}),
						we.push({
							type: "streakFreezeChestReward"
						});
					const n = (0,
						p.gW)(H);
					we.push({
						new_rupees: 0,
						reward: n,
						type: "chestLingotsReward"
					})
				} else {
					if (u.progress && (null === (le = u.progressUpdate) || void 0 === le ? void 0 : le.updates)) {
						const t = u.progressUpdate.updates
							, a = (0,
								l.gl)({
									availableQuests: e,
									difficulty: u.difficulty,
									oldProgress: u.progress,
									updatedProgress: t
								});
						a && we.push(a)
					}
					if (u.pendingRewards.length)
						if (1 === e.length)
							if ((0,
								p.Se)(u.pendingRewards[0].reward)) {
								const e = u.pendingRewards[0].reward;
								we.push({
									new_rupees: e.amount,
									reward: e,
									type: "chestLingotsReward"
								})
							} else
								we.push({
									type: "streakFreezeChestReward"
								});
						else
							we.push({
								dailyQuestRewards: u.pendingRewards,
								type: "dailyQuestReward"
							})
				}
				V && void 0 !== X && (we.push({
					type: "scoreProgressTouchPoint",
					variant: X
				}),
					we.push({
						type: "scoreLinkedinSync"
					}));
				const He = u.progress && u.monthlyQuest ? u.progress[u.monthlyQuest] : void 0
					, We = He + u.monthlyChallengeProgressUpdate;
				var Xe, Ve;
				if (Te ? (we.push({
					oldProgress: 27,
					type: "monthlyChallengeComplete"
				}),
					we.push({
						newProgress: 15,
						oldProgress: 12,
						type: "monthlyGoal"
					})) : We >= P && He < P ? we.push({
						oldProgress: He,
						type: "monthlyChallengeComplete"
					}) : We !== He && He < P && (Xe = He,
						Ve = We,
						Math.floor(Ve / 5) > Math.floor(Xe / 5)) && we.push({
							newProgress: We,
							oldProgress: He,
							type: "monthlyGoal"
						}),
					(Te || W > 0) && we.push({
						type: "heartRefill"
					}),
					Te)
					we.push({
						rewardType: "xpBoost",
						type: "levelUpChest"
					});
				else if (ke === S.FF.LevelReview || ke === S.FF.LexemePractice && "practice_level_review" === fe.lexemePracticeType) {
					const e = null === (ce = (0,
						p.f7)(H)) || void 0 === ce ? void 0 : ce.rewards[0]
						, t = u.pendingRewards.some((({ reward: e }) => (0,
							p.be)(e)))
						, a = R || t;
					we.push({
						currencyReward: a ? e : void 0,
						rewardType: a ? "gems" : "xpBoost",
						type: "levelUpChest"
					})
				}
				if (Te) {
					we.push({
						streak: Ce,
						type: "streakSociety"
					});
					const e = (0,
						y.Xm)(Ce)
						, t = null === (de = H.streakData.currentStreak) || void 0 === de ? void 0 : de.startDate;
					void 0 === (0,
						y.vz)(Ce) || void 0 === e || void 0 === t ? we.push({
							currentStreakStartDate: "",
							nextRewardMilestone: 30,
							streak: 16,
							type: "streakSocietyProgress"
						}) : we.push({
							currentStreakStartDate: t,
							nextRewardMilestone: e,
							streak: Ce,
							type: "streakSocietyProgress"
						}),
						we.push({
							type: "streakSocietyWelcomeChest"
						}),
						we.push({
							nextMilestone: 200,
							type: "streakSocietyFreezes"
						}),
						we.push({
							type: "streakSocietyVip"
						}),
						we.push({
							type: "streakSocietyVipUpdate",
							years: 2
						})
				} else {
					if (void 0 !== N.inventory.society_streak_freeze_refill && (void 0 === N.inventory.society_streak_freeze || 0 === (null === (ue = N.inventory.society_streak_freeze) || void 0 === ue ? void 0 : ue.quantity))) {
						const e = (Math.floor(Ce / y.mx) + 1) * y.mx;
						we.push({
							nextMilestone: e,
							type: "streakSocietyFreezes"
						})
					}
					const e = (0,
						y.Xm)(Ce)
						, t = null === (me = H.streakData.currentStreak) || void 0 === me ? void 0 : me.startDate;
					if (0 !== Ce && void 0 !== e && void 0 !== t && (0,
						b.dN)(Ce, t, null == U ? void 0 : U.lastShownStartDate, null == U ? void 0 : U.lastStreak) && we.push({
							currentStreakStartDate: t,
							nextRewardMilestone: e,
							streak: Ce,
							type: "streakSocietyProgress"
						}),
						Ie && Ce >= y.ev && we.push({
							streak: Ce,
							type: "streakSociety"
						}),
						Ie && Ce === y.fI && we.push({
							type: "streakSocietyWelcomeChest"
						}),
						Ie && Ce >= y.ME && Ce % y.ME == 0) {
						const e = Math.floor(Ce / y.ME);
						e >= 2 ? we.push({
							type: "streakSocietyVipUpdate",
							years: e
						}) : we.push({
							type: "streakSocietyVip"
						})
					}
				}
				const Qe = (0,
					h.W)({
						debugSlides: Te,
						friendStreakCombinedData: a,
						friendStreakData: c,
						streakJustExtended: Ie,
						user: H
					});
				we.push(...Qe);
				const Ye = null === (pe = u.friendsQuest) || void 0 === pe ? void 0 : pe.details;
				if (Te)
					if (Ye) {
						const { friendProgress: e, metric: t, threshold: a, totalProgress: n, ownProgress: r } = Ye
							, s = {
								friendUser: e,
								metric: t,
								threshold: a,
								totalProgress: n,
								userProgress: r
							};
						we.push({
							attachedSlides: [{
								friendUser: e,
								type: "friendsQuestGift"
							}],
							type: "friendsQuestProgress",
							...s
						}),
							we.push({
								attachedSlides: [{
									type: "friendsQuestReward"
								}],
								type: "friendsQuestComplete",
								...s
							})
					} else {
						const e = {
							friendUser: o.Dw,
							metric: "XP",
							threshold: 500
						};
						we.push({
							attachedSlides: [{
								friendUser: o.Dw,
								type: "friendsQuestGift"
							}],
							totalProgress: 350,
							type: "friendsQuestProgress",
							userProgress: 200,
							...e
						}),
							we.push({
								attachedSlides: [{
									type: "friendsQuestReward"
								}],
								totalProgress: 500,
								type: "friendsQuestComplete",
								userProgress: 350,
								...e
							})
					}
				else if (void 0 !== Ye && (0,
					o.BQ)(H)) {
					const { metric: e, totalProgress: t, threshold: a } = Ye
						, n = u.friendsQuest.lastSeenTotalProgress;
					if (t >= a && (null != n ? n : 0) < a && !Ye.acknowledged)
						we.push({
							attachedSlides: [{
								type: "friendsQuestReward"
							}],
							friendUser: Ye.friendProgress,
							metric: e,
							threshold: a,
							totalProgress: t,
							type: "friendsQuestComplete",
							userProgress: Ye.ownProgress
						});
					else if ((0,
						o.JD)(Date.now()) && t < a && t >= a / 2 && (null != n ? n : 0) < a / 2) {
						const n = H.gemsConfig.gems >= o.py
							, r = Date.now() - (null !== (ge = u.friendsQuest.lastSentGiftTimestamp) && void 0 !== ge ? ge : 0) >= o.RL;
						we.push({
							attachedSlides: n && r ? [{
								friendUser: Ye.friendProgress,
								type: "friendsQuestGift"
							}] : [],
							friendUser: Ye.friendProgress,
							metric: e,
							threshold: a,
							totalProgress: t,
							type: "friendsQuestProgress",
							userProgress: Ye.ownProgress
						})
					}
				}
				if (void 0 !== Re) {
					const e = Re.slice()
						, t = we.filter((t => {
							if (!Re.includes(t.type))
								return !1;
							const a = e.indexOf(t.type);
							return a > -1 && e.splice(a, 1),
								!0
						}
						));
					return e.length && console.warn(`1 or more invalid debugSlides: "${e.join(",")}"`),
						t
				}
				return we
			}
	}
	,
	51748: (e, t, a) => {
		var n;
		a.d(t, {
			w: () => n
		}),
			function (e) {
				e.AfterThirdMistakeCheckpointTest = "after_third_mistake_checkpoint_test",
					e.BigRightStreak = "big_right_streak",
					e.BigRightStreakCheckpointTest = "big_right_streak_checkpoint_test",
					e.CapstoneHardExercises = "capstone_hard_exercises",
					e.FirstCorrectCheckpointTest = "first_correct_checkpoint_test",
					e.FirstWrongCheckpointTest = "first_wrong_checkpoint_test",
					e.FourQuestionsLeftCheckpointTest = "four_questions_left_checkpoint_test",
					e.MediumRightStreakCheckpointTest = "medium_right_streak_checkpoint_test",
					e.MidPointCheckpointTest = "mid_point_checkpoint_test",
					e.MistakesReview = "mistakes_review",
					e.SmallRightStreak = "small_right_streak",
					e.WrongStreak = "wrong_streak"
			}(n || (n = {}))
	}
	,
	54042: (e, t, a) => {
		a.d(t, {
			v: () => s
		});
		var n = a(27378)
			, r = a(50498);
		const s = ({ canStartAnimation: e = !0, getAnimationStepProperties: t, initialAnimationState: a }) => {
			const [s, i] = n.useState(a);
			return n.useEffect((() => {
				if (!e)
					return;
				const a = new AbortController;
				return (async () => {
					const e = t(s);
					e && (await (0,
						r._v)(e.duration),
						a.signal.aborted || i(e.nextState))
				}
				)(),
					() => {
						a.abort()
					}
			}
			), [s, e]),
				s
		}
	}
	,
	17128: (e, t, a) => {
		a.d(t, {
			K: () => n,
			Y: () => s
		});
		const n = e => 1 === e.length && void 0 === e[0].whiteboardContent ? "lite" : "full"
			, r = e => {
				if (null != e) {
					if ("text" === e.type) {
						if (!e.value)
							return;
						return {
							type: "text",
							value: e.value
						}
					}
					return e
				}
			}
			, s = e => {
				if (!e)
					return [];
				try {
					const t = JSON.parse(e);
					if ("object" != typeof t || null === t)
						return [];
					const a = t.supportTree;
					if ("object" != typeof a || null === a)
						return [];
					const { primary_path: n } = a;
					return Array.isArray(n) ? n.map(((e, t) => {
						var a, s;
						const { response: i, secondary: o } = e
							, l = null != i ? i : {}
							, c = n[t + 1]
							, { copy: d } = null !== (a = null == c ? void 0 : c.action) && void 0 !== a ? a : {}
							, u = Array.isArray(o) ? o.map((e => {
								var t;
								const { chip: a, response: n } = e
									, { copy: r = "", type: s } = null != a ? a : {}
									, i = null != n ? n : {}
									, { value: o = "" } = null !== (t = i.text) && void 0 !== t ? t : {};
								return {
									characterDialogue: o,
									chipLabel: r,
									chipType: s,
									ttsUrl: i.ttsUrl,
									ttsVisemes: i.ttsVisemes
								}
							}
							)) : []
							, { value: m = "" } = null !== (s = l.text) && void 0 !== s ? s : {};
						return {
							characterDialogue: m,
							nextStepLabel: d,
							suggestions: u,
							ttsUrl: l.ttsUrl,
							ttsVisemes: l.ttsVisemes,
							whiteboardContent: r(l.expression)
						}
					}
					)) : []
				} catch {
					return []
				}
			}
	}
	,
	7432: (e, t, a) => {
		a.d(t, {
			HN: () => h,
			Oy: () => c,
			mI: () => v
		});
		var n = a(18225)
			, r = a(17135)
			, s = a(23275)
			, i = a(84401)
			, o = a(11811)
			, l = a(97106);
		const c = (e, t, a) => {
			const n = e.hasXpBoost ? l.K3 : 1
				, r = (e.isLegendaryMode ? l.BX : e.isFeaturedStoryInPracticeHub ? l.Zy : e.isV2Redo ? l.MR : a ? a.fixedXpAward : t) * n
				, s = e.completedBonusChallenge ? l.Cz : 0;
			return {
				awardedXp: r + s,
				nextMode: void 0,
				sessionEndSlides: [{
					amount: r,
					bonusAmount: s,
					type: "XP"
				}],
				trackingProperties: {
					story_xp: r,
					xp_gained: r + s
				}
			}
		}
			, d = e => {
				const t = e.beginner ? l.dr : l.nF;
				return Math.min(Math.max(0, e.heartsLeft), t)
			}
			, u = e => e.isMistakesGlobalPractice ? l.Mm : 1
			, m = e => {
				var t;
				const a = e.challenges.length
					, n = null !== (t = e.maxInLessonStreak) && void 0 !== t ? t : 0;
				return a > 0 && n > 0 && n <= a ? Math.ceil(5 * n / a) : 0
			}
			, p = e => e.hasBoost ? l.K3 : 1
			, g = (e, t) => (t && (0,
				s.Wc)(t.level.state) ? l.ix : l.aS) * p(e)
			, v = (e, t, a) => {
				var r;
				const s = {
					skillId: e.skillId,
					time: e.endTime
				};
				switch (e.type) {
					case o.FF.AlphabetLesson:
						return {
							...s,
							eventType: n.Vi.EventType.LESSON,
							xp: (l.ct + d(e) + m(e)) * p(e)
						};
					case o.FF.AlphabetPractice:
						return {
							...s,
							eventType: n.Vi.EventType.LESSON,
							xp: (l.t1 + d(e) + m(e)) * p(e)
						};
					case o.FF.GlobalPractice:
						{
							const t = e.shouldAward5XpFromGlobalPractice ? l.U0 : l.J4
								, a = null !== (r = e.pronunciationReviewXp) && void 0 !== r ? r : 0;
							return {
								...s,
								eventType: n.Vi.EventType.PRACTICE,
								xp: t * u(e) + a
							}
						}
					case o.FF.Legendary:
					case o.FF.LegendaryLevel:
					case o.FF.LegendaryLexemePractice:
					case o.FF.LegendaryUnitPractice:
						return void 0 !== e.xpPromised ? {
							...s,
							xp: e.xpPromised
						} : e.shouldLearnThings ? {
							...s,
							xp: (l.BX + d(e) + m(e)) * p(e)
						} : {
							...s,
							xp: l.Ms
						};
					case o.FF.Lesson:
					case o.FF.LexemePractice:
					case o.FF.SpacedRepetition:
					case o.FF.UnitPractice:
						return void 0 !== e.xpPromised ? {
							...s,
							eventType: e.type === o.FF.Lesson ? n.Vi.EventType.LESSON : void 0,
							xp: e.xpPromised
						} : {
							...s,
							eventType: e.type === o.FF.Lesson ? n.Vi.EventType.LESSON : void 0,
							xp: (l.Lu + d(e) + m(e)) * p(e)
						};
					case o.FF.LevelReview:
						{
							if (void 0 === t)
								throw Error("Level data needs to be provided");
							const a = "skill" === t.level.type && "grammar" !== t.level.subtype;
							return {
								...s,
								eventType: n.Vi.EventType.PRACTICE,
								xp: (a ? l.pu + m(e) : 10) * p(e)
							}
						}
					case o.FF.ListeningPractice:
					case o.FF.SpeakingPractice:
					case o.FF.TargetPractice:
					case o.FF.UnitRewind:
						return {
							...s,
							xp: l.fu * p(e)
						};
					case o.FF.SpecifiedMatchPractice:
						return {
							...s,
							xp: (0,
								i.w)(a) * p(e)
						};
					case o.FF.UnitReview:
						return {
							...s,
							xp: (l.mX + d(e) + m(e)) * p(e)
						};
					case o.FF.MathLesson:
					case o.FF.MathMultiStepLesson:
					case o.FF.MathPractice:
					case o.FF.MathSkillPractice:
					case o.FF.MathUnitReview:
						return {
							...s,
							xp: g(e, t)
						};
					default:
						throw Error(`Offline XP calculation not implemented for session type ${e.type}`)
				}
			}
			, h = e => ({
				eventType: n.Vi.EventType.PRACTICE,
				time: (0,
					r.Zo)(),
				xp: e.awardedXp
			})
	}
	,
	53146: (e, t, a) => {
		a.d(t, {
			l: () => d,
			r: () => c
		});
		var n = a(80254)
			, r = a(18225)
			, s = a(64115)
			, i = a(68903)
			, o = a(79465);
		const l = ["sessionComplete", "scoreProgressTouchPoint", "scoreLinkedinSync", "finalLevelPartialXp", "dailyQuestComplete", "dailyQuestReward", "streakExtended", "checkpointComplete", "finalLevelLesson", "mistakesInboxEmpty", "finalLevelFailed"]
			, c = async (e, { isZombieMode: t, useOnboardingBackend: a }) => {
				const i = e.map((e => e.type));
				return (await (async () => {
					var e, o;
					if (!t)
						try {
							return (null !== (o = null === (e = await r.zi.getSessionEndMessages(i, a)) || void 0 === e ? void 0 : e.sessionEndMessageDisplayInfo) && void 0 !== o ? o : []).map((e => n.ZP.keys(e.sessionEndMessageId)[0]))
						} catch {
							if ((0,
								s.Au)())
								return []
						}
					return l.filter((e => i.includes(e)))
				}
				)()).flatMap((t => e.filter((e => e.type === t))))
			}
			, d = e => {
				var t;
				const a = null !== (t = (e => {
					switch (e.slide.type) {
						case "achievementUnlocked":
							return "achievement_level_up";
						case "courseCompletionTrophy":
							return "course_completion_trophy";
						case "dailyQuestComplete":
							return "daily_quest_complete";
						case "dailyQuestFirst":
							return "daily_quest_first";
						case "dailyQuestHalfway":
							return "daily_quest_halfway";
						case "dailyQuestReward":
							return "daily_quest_reward";
						case "dailyRefreshOnboarding":
							return "daily_refresh_onboarding";
						case "finalLevelFailed":
							return "final_level_failed";
						case "finalLevelLesson":
							return "final_level_session";
						case "finalLevelPartialXp":
							return "final_level_partial_xp";
						case "finalLevelPromotion":
							return "final_level_promotion";
						case "friendStreakInviteOffer":
							return "friendStreakInviteOffer";
						case "friendStreakUpdate":
							return "friendStreakUpdate";
						case "friendsQuestComplete":
							return "friends_quest_complete";
						case "friendsQuestGift":
							return "friends_quest_gifting";
						case "friendsQuestProgress":
							return "friends_quest_progress";
						case "friendsQuestReward":
							return "friends_quest_rewards";
						case "immersivePlus":
							return "immersive_plus_welcome";
						case "leaderboardDemoZone":
							return "leaderboard_demo_zone";
						case "leaderboardJoin":
							return "leaderboard_join";
						case "leaderboardMoveUpPrompt":
							return "leaderboard_move_up_prompt";
						case "leaderboardPromoZone":
							return "leaderboard_promo_zone";
						case "leaderboardRankIncreaseLarge":
							return "leaderboard_rank_increase_large";
						case "leaderboardRankIncreaseSmall":
							return "leaderboard_rank_increase_small";
						case "leaderboardTopThree":
							return "leaderboard_top_three";
						case "levelUpChest":
							return "capstone_xp_boost_reward";
						case "chestLingotsReward":
							return "chest_lingots_reward";
						case "milestoneStreakFreeze":
							return "milestone_streak_freeze";
						case "mistakesInboxEmpty":
							return "mistakes_inbox_empty";
						case "monthlyChallengeComplete":
							return "monthly_challenge_complete";
						case "monthlyGoal":
							return "monthly_goal";
						case "nativeAd":
							return "juicy_native_ad";
						case "plusNewYears":
							return "plus_new_years_promotion_carousel_offer";
						case "placementConfirmation":
							return "placement_confirmation";
						case "plusPromoCarousel":
							return "plus_offer_carousel";
						case "plusPromoInterstitial":
							return "plus_promo_interstitial";
						case "practiceHubPromo":
							return "practice_hub_promo";
						case "schoolsClassroomLeaderboardMoveUp":
							return "schools_classroom_leaderboard_move_up";
						case "sessionComplete":
							return "completion_screen";
						case "streakExtended":
							return "earnedBackStreakLength" in e.slide ? "streak_earnback_complete" : "one_lesson_streak_progress";
						case "streakFreezeGift":
							return "streak_freeze_gift";
						case "streakFreezeChestReward":
							return "variable_chest_reward";
						case "earlyStreakMilestonePrompt":
							switch (e.slide.subtype) {
								case "streakGoalCheckpoint":
									return "streak_goal_checkpoint";
								case "streakGoalComplete":
								case "streakGoalEarnback":
								case "streakGoalInitial":
									return "streak_goal_picker";
								default:
									return void (0,
										i.RJ)(e.slide)
							}
						case "createProfile":
							return "registration_wall";
						case "checkpointComplete":
							switch (e.slide.view) {
								case "sectionTestFailed":
									return "section_test_failed";
								case "unitReview":
									return "unit_review";
								case "unitTestFailed":
									return "unit_test_failed";
								case "unitTestPassed":
									return "unit_test";
								default:
									return void (0,
										i.RJ)(e.slide.view)
							}
						case "heartRefill":
							return "heart_refilled_vc";
						case "streakNudge":
							return "streak_nudge";
						case "streakSociety":
							return "streak_society";
						case "streakSocietyFreezes":
							return "streak_society_freezes";
						case "streakSocietyProgress":
							return "streak_society_progress";
						case "streakSocietyVip":
							return "streak_society_vip";
						case "streakSocietyVipUpdate":
							return "streak_society_vip_update";
						case "streakSocietyWelcomeChest":
							return "streak_society_welcome_chest";
						case "scoreProgressTouchPoint":
							return "score_progress_touch_point";
						case "scoreLinkedinSync":
							return "score_linkedin_sync";
						default:
							return void (0,
								i.RJ)(e.slide)
					}
				}
				)(e)) && void 0 !== t ? t : "";
				(0,
					o.track)("session_end_screen_shown", {
						...e.tracking,
						message_name: e.slide.type,
						session_end_screen_name: a,
						streak_freeze_gift_reason: "streak_freeze_gift" === a ? "new_streak" : void 0,
						time_spent_session_end_screen: e.time.map((([e, t]) => (null != t ? t : e) - e)).reduce(((e, t) => e + t), 0)
					}),
					"cta" === e.action ? (0,
						o.track)("session_end_message_cta_clicked", {
							message_name: e.slide.type,
							session_end_screen_name: a
						}) : "dismiss" === e.action && (0,
							o.track)("session_end_message_dismiss_clicked", {
								message_name: e.slide.type,
								session_end_screen_name: a
							})
			}
	}
	,
	55318: (e, t, a) => {
		a.d(t, {
			W: () => s
		});
		var n = a(57593)
			, r = a(21025);
		const s = ({ debugSlides: e, friendStreakData: t, friendStreakCombinedData: a, streakJustExtended: s, user: i }) => {
			var o, l, c;
			const d = []
				, u = (0,
					n.m7)(i) && void 0 !== (null === (o = null == t ? void 0 : t.matchInfo) || void 0 === o ? void 0 : o.emptySlots) && (null === (l = null == t ? void 0 : t.matchInfo) || void 0 === l ? void 0 : l.emptySlots) > 0 && void 0 !== (null == t ? void 0 : t.potentialMatches) && (null === (c = null == t ? void 0 : t.potentialMatches) || void 0 === c ? void 0 : c.length) > 0 ? {
					initialInvitesRemaining: t.matchInfo.emptySlots,
					potentialMatches: t.potentialMatches,
					type: "friendStreakInviteOffer"
				} : void 0;
			void 0 !== u && d.push(u);
			const m = (() => {
				if ((0,
					n.m7)(i) && s && (0,
						r.iJ)(a) && 0 !== a.length)
					return {
						friendStreakInfo: (0,
							r.XN)(a, s).map((e => ({
								friend: {
									id: e.match.other.userId,
									name: e.match.other.name,
									picture: e.match.other.picture
								},
								streak: e.streak
							}))),
						type: "friendStreakUpdate"
					}
			}
			)();
			return void 0 !== m && d.push(m),
				e && (d.some((e => "friendStreakInviteOffer" === e.type)) || d.push(null != u ? u : {
					initialInvitesRemaining: 3,
					potentialMatches: [{
						name: "Jahtest2",
						picture: "https://simg-ssl.duolingo.com/avatar/default_2",
						userId: 1435495324
					}, {
						name: "Sep A2",
						picture: "https://simg-ssl.duolingo.com/avatar/default_2",
						userId: 446410398
					}],
					type: "friendStreakInviteOffer"
				}),
					d.some((e => "friendStreakUpdate" === e.type)) || d.push(null != m ? m : {
						friendStreakInfo: [{
							friend: {
								id: 1435495324,
								name: "Jahtest2",
								picture: "https://simg-ssl.duolingo.com/avatar/default_2"
							},
							streak: {
								extendedToday: !0,
								friendExtendedToday: !0,
								nudgedToday: !1,
								streakLength: 10
							}
						}, {
							friend: {
								id: 446410398,
								name: "Sep A2",
								picture: "https://simg-ssl.duolingo.com/avatar/default_2"
							},
							streak: {
								extendedToday: !1,
								friendExtendedToday: !1,
								nudgedToday: !1,
								streakLength: 5
							}
						}],
						type: "friendStreakUpdate"
					})),
				d
		}
	}
	,
	32401: (e, t, a) => {
		a.d(t, {
			J: () => r
		});
		var n = a(58786);
		const r = ({ debugSlides: e, isEarnbackSessionComplete: t, streak: a, streakGoalData: r, streakGoalOptions: s, streakJustExtended: i, user: o }) => {
			if (e)
				return [{
					nextButtonEnabled: !1,
					nextOptions: [{
						dayInterval: 7,
						length: 7,
						tier: 0
					}, {
						dayInterval: 7,
						length: 14,
						tier: 1
					}, {
						dayInterval: 5,
						length: 30,
						tier: 2
					}, {
						dayInterval: 10,
						length: 50,
						tier: 3
					}],
					subtype: "streakGoalInitial",
					type: "earlyStreakMilestonePrompt"
				}, {
					currentStreak: 3,
					futureMilestones: [7, 10, 14, 20, 30, 40],
					gemReward: void 0,
					nextButtonEnabled: !0,
					rewardId: void 0,
					subtype: "streakGoalCheckpoint",
					type: "earlyStreakMilestonePrompt"
				}, {
					currentStreak: 7,
					futureMilestones: [10, 14, 20, 30, 40],
					gemReward: 70,
					nextButtonEnabled: !0,
					rewardId: void 0,
					subtype: "streakGoalCheckpoint",
					type: "earlyStreakMilestonePrompt"
				}, {
					currentStreak: 10,
					gemReward: 70,
					nextButtonEnabled: !1,
					nextOptions: [{
						dayInterval: 4,
						length: 14,
						tier: 0
					}, {
						dayInterval: 6,
						length: 20,
						tier: 1
					}, {
						dayInterval: 10,
						length: 30,
						tier: 2
					}],
					rewardId: void 0,
					subtype: "streakGoalComplete",
					type: "earlyStreakMilestonePrompt"
				}, {
					nextButtonEnabled: !1,
					nextOptions: [{
						dayInterval: 4,
						length: 14,
						tier: 0
					}, {
						dayInterval: 6,
						length: 20,
						tier: 1
					}, {
						dayInterval: 10,
						length: 30,
						tier: 2
					}],
					subtype: "streakGoalEarnback",
					type: "earlyStreakMilestonePrompt"
				}];
			if (void 0 === r || void 0 === s)
				return [];
			const { activeStreakGoal: l } = r;
			if (t)
				return [{
					nextButtonEnabled: !1,
					nextOptions: s.previousStreakOptions,
					subtype: "streakGoalEarnback",
					type: "earlyStreakMilestonePrompt"
				}];
			if (!i)
				return [];
			if (1 === a)
				return [{
					nextButtonEnabled: !1,
					nextOptions: s.currentStreakOptions,
					subtype: "streakGoalInitial",
					type: "earlyStreakMilestonePrompt"
				}];
			if (void 0 !== l) {
				if (a === l.nextSelectedGoal.length)
					return [{
						currentStreak: a,
						gemReward: (0,
							n.AB)(l.nextSelectedGoal),
						nextButtonEnabled: !1,
						nextOptions: s.currentStreakOptions,
						rewardId: (0,
							n.z_)(o, l.nextSelectedGoal),
						subtype: "streakGoalComplete",
						type: "earlyStreakMilestonePrompt"
					}];
				const e = (...e) => Array.from(new Set(e.flatMap((e => e.map((e => e.length))))))
					, t = l.checkpoints.findIndex((e => e.length === a));
				if (-1 !== t) {
					const r = l.checkpoints[t];
					return [{
						currentStreak: a,
						futureMilestones: e(l.checkpoints.slice(t + 1), [l.nextSelectedGoal], s.currentStreakOptions),
						gemReward: (0,
							n.AB)(r),
						nextButtonEnabled: !0,
						rewardId: (0,
							n.z_)(o, r),
						subtype: "streakGoalCheckpoint",
						type: "earlyStreakMilestonePrompt"
					}]
				}
				if (3 === a)
					return [{
						currentStreak: a,
						futureMilestones: e(l.checkpoints.filter((e => e.length > 3)), [l.nextSelectedGoal], s.currentStreakOptions),
						gemReward: void 0,
						nextButtonEnabled: !0,
						rewardId: void 0,
						subtype: "streakGoalCheckpoint",
						type: "earlyStreakMilestonePrompt"
					}]
			}
			return []
		}
	}
	,
	20579: (e, t, a) => {
		a.d(t, {
			E: () => o
		});
		var n = a(6947)
			, r = a(39837)
			, s = a(81621)
			, i = a(97106);
		const o = ({ currentDate: e, debugSlides: t, isEarnbackSessionComplete: a, overrideWeekStartDayForTesting: o, streak: l, streakJustExtended: c, streakNudgeState: d, subject: u, user: m, xpGain: p, xpPerDay: g }) => {
			var v;
			const h = []
				, f = (0,
					i.uD)(e, m.xpSummaries, {
						overrideWeekStartDayForTesting: o
					})
				, _ = (0,
					n.cA)(e, f, !0, {
						overrideWeekStartDayForTesting: o
					})
				, k = (0,
					n.gm)(e, f, {
						overrideWeekStartDayForTesting: o
					})
				, b = 7 === _
				, E = (0,
					i.xp)(g, p)
				, y = (0,
					s.Nr)(E, l);
			if (t || c || a) {
				const e = (0,
					r.wp)(u) && (0,
						r.Jb)(m) && !a;
				h.push({
					completedEarnbackStreakLength: a ? null === (v = m.streakRepairOffer) || void 0 === v ? void 0 : v.length : void 0,
					daysInCurrentStreak: y,
					isEndOfPerfectWeek: b,
					isPerfectStreakWeekLost: k,
					perfectWeekDay: _,
					showEarnbackOffer: e,
					streak: l,
					template: (0,
						n.lw)(l),
					type: "streakExtended",
					updatedXpPerDay: E
				})
			}
			return (t || (0,
				n.NE)(c, l, null == d ? void 0 : d.count, null == d ? void 0 : d.resurrectionTimestamp, m.lastResurrectionTimestamp) && !a) && h.push({
					daysInCurrentStreak: y,
					isPerfectStreakWeekLost: k,
					perfectWeekDay: _,
					template: (0,
						n.eU)(l),
					type: "streakNudge",
					updatedXpPerDay: E
				}),
				h
		}
	}
	,
	58786: (e, t, a) => {
		a.d(t, {
			AB: () => i,
			Jm: () => o,
			z_: () => l
		});
		var n = a(64115)
			, r = a(58576)
			, s = a(90110);
		const i = e => 5 * e.dayInterval
			, o = (e, t) => 5 * (t.length - e)
			, l = (e, t) => {
				var a;
				const i = t.dayInterval <= 5 ? 5 : t.dayInterval <= 7 ? 7 : t.dayInterval <= 10 ? 10 : t.dayInterval <= 15 ? 15 : t.dayInterval <= 16 ? 16 : t.dayInterval <= 20 ? 20 : 25
					, o = (0,
						s.Zp)(e, "STREAK_REWARD_CHEST")
					, l = `gems_${i}_day_interval`
					, c = null === (a = null == o ? void 0 : o.rewards.find((e => e.id.includes(l)))) || void 0 === a ? void 0 : a.id;
				return void 0 === c && (0,
					r.Kp)("Unable to find reward id for streak goal", {
						data: {
							itemId: l,
							roundedDayInterval: i
						},
						sample: (0,
							n.Au)() ? 1 : .01
					}),
					c
			}
	}
	,
	57340: (e, t, a) => {
		a.d(t, {
			l: () => n
		});
		const n = e => e
	}
	,
	43546: (e, t, a) => {
		e.exports = a.p + "images/b377ec812acb8c96d87d52e8009478ad.svg"
	}
	,
	41373: (e, t, a) => {
		e.exports = a.p + "images/bed2a542bc7eddc78e75fbe85260b89e.svg"
	}
	,
	4636: (e, t, a) => {
		e.exports = a.p + "images/bd13fa941b2407b4914296afe4435646.svg"
	}
	,
	78980: (e, t, a) => {
		e.exports = a.p + "images/9a4bf74a74e801ca35402f2c2837e24c.svg"
	}
	,
	52068: (e, t, a) => {
		e.exports = a.p + "images/d01837d668b592b96aa33ecce8459d77.svg"
	}
	,
	32693: (e, t, a) => {
		e.exports = a.p + "images/ed9f592a37a6ce248be0beec9c13a0e1.svg"
	}
	,
	6440: (e, t, a) => {
		e.exports = a.p + "images/math/68aa04eb80760c4d0cd1e364ec212690.svg"
	}
	,
	94369: (e, t, a) => {
		e.exports = a.p + "images/math/f45a24a8149ff90472fe9345549affaf.svg"
	}
	,
	74679: (e, t, a) => {
		e.exports = a.p + "images/d23ad8c0c63d67935ac6e2d7c38af856.svg"
	}
	,
	30445: (e, t, a) => {
		e.exports = a.p + "images/b60cf70b93d5f14acbdd30ef7a8a5077.svg"
	}
	,
	28501: (e, t, a) => {
		e.exports = a.p + "images/path/icons/ca0c3a6e49fc905752601e089949b63c.svg"
	}
	,
	90895: (e, t, a) => {
		e.exports = a.p + "images/path/icons/7f54f1a3252b14345f44f2fafd8e9828.svg"
	}
	,
	43029: (e, t, a) => {
		e.exports = a.p + "images/path/icons/0c39e5b6de24c59a3cd5ebcd513cc820.svg"
	}
	,
	40456: (e, t, a) => {
		e.exports = a.p + "images/path/icons/774095228c23373f84a4202afb9bde3d.svg"
	}
	,
	96391: (e, t, a) => {
		e.exports = a.p + "images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg"
	}
}]);