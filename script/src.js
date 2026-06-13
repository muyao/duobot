"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[2434], {
	77450: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			pane: "_2BPfH",
			shirt: "_1a3_-",
			open: "_2gViQ",
			header: "_1oZxe",
			"_header-action-button": "_2Cf3q",
			"trash-button": "_3OkIE _2Cf3q",
			"close-button": "_2AJlL _2Cf3q",
			"arrow-icon": "_1amRU",
			"trash-icon": "_3PWfC",
			latex: "_1fbBu",
			"calculator-cursor-blink": "_2dmPX",
			"cursor-at-start": "WRZEy",
			expression: "_1fBWc",
			"result-equals": "diHzL",
			"result-value": "tR0Kk",
			"result-next-line": "_2xN0r",
			screen: "_1dLpI",
			"screen-frame": "HD0YO",
			entry: "RTkRE",
			"screen-display": "_2I1H0",
			content: "_3Jzth",
			"button-grid": "_1S2di",
			"calculator-button": "D7yc4",
			"calculator-button-white": "_3LmaL",
			"calculator-button-dark": "_3EyIv",
			"calculator-button-blue": "Y8irT",
			"calculator-button-orange": "_3AYHa",
			"icon-large": "_1SH2w",
			"icon-large-img": "_2g8hv",
			"text-button": "_3ItSs",
			"text-button-large": "_1nHdI",
			"icon-small-img": "_1M__z",
			"minus-symbol-nudge": "_38bX8"
		}
	}
	,
	3760: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			header: "_3EOK0",
			"indicator-and-header": "U41Ye",
			_challenge: "_1Mopf",
			"_challenge-container": "_1JTA4 _3B8G-",
			"_layout-grid-gap": "K3vbJ",
			challenge: "_1fxa4 _1Mopf",
			"challenge-flex": "_3h4tu _1Mopf",
			"challenge-flex-wide": "_3-BNc _1Mopf",
			"challenge-incremental": "_1BSTs _1Mopf",
			"challenge-adaptive-scroll": "_2SX-7 _1Mopf",
			"challenge-container-centered": "_2n5fx _1JTA4 _3B8G- K3vbJ",
			"challenge-container-wide": "v2WjL _2n5fx _1JTA4 _3B8G- K3vbJ",
			"wide-header": "_3WfKM",
			"content-centered": "_3X7QY",
			"challenge-container-incremental": "JWTvt _1JTA4 _3B8G-",
			"spacing-visible": "_2YQEU",
			"spacing-invisible": "_3wLOO",
			"content-incremental": "_38Kr8 K3vbJ",
			scrollable: "_1V2rY",
			unscrollable: "_2YGt0",
			"content-top-aligned": "_249KS",
			"challenge-container-adaptive-scroll": "Iz8yx _1JTA4 _3B8G-"
		}
	}
	,
	49492: (e, t, a) => {
		a.d(t, {
			Z: () => n
		});
		const n = {
			wrap: "_1bmNz _3rat3",
			"wrap-listen-match": "_2P2RV _1bmNz _3rat3",
			"wrap-radio-listen-match": "_1xZX- _1bmNz _3rat3",
			"wrap-math-match": "_3kRaw _1bmNz _3rat3"
		}
	}
	,
	6590: (e, t, a) => {
		a.d(t, {
			Z: () => o
		});
		var n = a(27378);
		const r = (0,
			a(1398).ZP)((() => Promise.all([a.e(963), a.e(4805), a.e(5587)]).then(a.bind(a, 34623)).then((e => ({
				default: e.default
			})))));
		var s = a(74965)
			, l = a(79465);
		const i = n.forwardRef((({ calculatorFunctions: e, challengeId: t, instruction: a, middleFunctionButtons: i, onClear: o, shirt: c, topFunctionButtons: d, trackingProperties: u }, m) => {
			const [p, g] = n.useState(!1)
				, [h, v] = n.useState(!1)
				, f = n.useRef(t)
				, _ = n.useRef(!1)
				, { trackExpressionSubmitted: E } = ((e, t) => {
					const a = n.useRef(null)
						, r = n.useRef(0)
						, s = n.useRef(t);
					return s.current = t,
						n.useEffect((() => {
							if (!e)
								return;
							const t = s.current;
							return t ? (a.current = Date.now(),
								r.current = 0,
								(0,
									l.track)("math_workspace_open", {
										...t
									}),
								() => {
									if (null !== a.current) {
										const e = Date.now() - a.current;
										(0,
											l.track)("math_workspace_close", {
												...t,
												calculator_shown_duration_millis: e,
												num_expressions_submitted: r.current
											}),
											a.current = null
									}
								}
							) : void 0
						}
						), [e]),
					{
						trackExpressionSubmitted: n.useCallback((() => {
							r.current += 1
						}
						), [])
					}
				}
				)(p, u)
				, y = n.useMemo((() => (0,
					s.u0)(e)), [e])
				, b = null != d ? d : y.topFunctionButtons
				, S = null != i ? i : y.middleFunctionButtons
				, k = n.useCallback((() => {
					_.current || (_.current = !0,
						r.preload().then((() => {
							v(!0)
						}
						)))
				}
				), [])
				, C = n.useCallback((() => {
					h ? g((e => !e)) : (v(!0),
						g(!0))
				}
				), [h]);
			return n.useImperativeHandle(m, (() => ({
				preload: k,
				toggle: C
			})), [k, C]),
				n.useEffect((() => {
					void 0 !== t && f.current !== t && (f.current = t,
						h && (o(),
							g(!1)))
				}
				), [t, h, o]),
				h ? n.createElement(r, {
					challengeId: t,
					instruction: a,
					isOpen: p,
					middleFunctionButtons: S,
					onClear: o,
					onClose: C,
					onExpressionSubmit: E,
					shirt: c,
					topFunctionButtons: b
				}) : null
		}
		));
		i.displayName = "CalculatorPaneTransition";
		const o = i
	}
	,
	74965: (e, t, a) => {
		a.d(t, {
			u0: () => S,
			Gw: () => g
		});
		const n = a.p + "images/math/calculator/dee7197f5693f39a25c717f97a279dc0.svg"
			, r = a.p + "images/math/calculator/45ae62ddb4bdb3b8313ff3b227cd7f30.svg"
			, s = a.p + "images/math/calculator/f21640570cfbd25c47d5af86bbca5c12.svg"
			, l = a.p + "images/math/calculator/ea0ead786e294df9c6a09856f1438e03.svg"
			, i = a.p + "images/math/calculator/5fbee34220ea6836f31245220dc8e437.svg"
			, o = a.p + "images/math/calculator/05d8cfda7eb66a5b41c8e6c85c10088b.svg"
			, c = a.p + "images/math/calculator/533bc3d39460e043f05c7438557bb1f8.svg"
			, d = a.p + "images/math/calculator/220e4b43d6975308a78efa3a52f9e2af.svg";
		var u = a(77450);
		const m = [{
			buttonClassName: u.Z["icon-large"],
			buttonType: "dark",
			imageClassName: u.Z["icon-large-img"],
			label: "π",
			svg: c,
			tokenName: "Pi"
		}, {
			buttonClassName: u.Z["icon-large"],
			buttonType: "dark",
			imageClassName: u.Z["icon-large-img"],
			label: "^",
			svg: i,
			tokenName: "Exponent"
		}, {
			buttonClassName: u.Z["icon-large"],
			buttonType: "dark",
			imageClassName: u.Z["icon-large-img"],
			label: "ⁿ√",
			svg: o,
			tokenName: "NthRoot"
		}]
			, p = [{
				action: "MoveCursorLeft",
				buttonType: "dark",
				imageClassName: u.Z["icon-small-img"],
				label: "MoveCursorLeft",
				svg: n
			}, {
				action: "MoveCursorRight",
				buttonType: "dark",
				imageClassName: u.Z["icon-small-img"],
				label: "MoveCursorRight",
				svg: r
			}]
			, g = (e, t = m) => {
				const a = [[...t, ...p], [{
					buttonType: "white",
					digitValue: 7,
					label: "7"
				}, {
					buttonType: "white",
					digitValue: 8,
					label: "8"
				}, {
					buttonType: "white",
					digitValue: 9,
					label: "9"
				}, {
					buttonType: "blue",
					label: "(",
					tokenName: "LeftParenthesis"
				}, {
					buttonType: "blue",
					label: ")",
					tokenName: "RightParenthesis"
				}], [{
					buttonType: "white",
					digitValue: 4,
					label: "4"
				}, {
					buttonType: "white",
					digitValue: 5,
					label: "5"
				}, {
					buttonType: "white",
					digitValue: 6,
					label: "6"
				}, {
					buttonType: "blue",
					label: "×",
					tokenName: "Multiply"
				}, {
					buttonType: "blue",
					label: "÷",
					tokenName: "Divide"
				}], [{
					buttonType: "white",
					digitValue: 1,
					label: "1"
				}, {
					buttonType: "white",
					digitValue: 2,
					label: "2"
				}, {
					buttonType: "white",
					digitValue: 3,
					label: "3"
				}, {
					buttonType: "blue",
					label: "+",
					tokenName: "Plus"
				}, {
					buttonClassName: u.Z["minus-symbol-nudge"],
					buttonType: "blue",
					label: "-",
					tokenName: "Minus"
				}], [{
					buttonType: "white",
					digitValue: 0,
					label: "0"
				}, {
					buttonType: "white",
					isDecimal: !0,
					label: "."
				}, {
					action: "Backspace",
					buttonType: "white",
					label: "Backspace",
					svg: l,
					svgDarkMode: s
				}, {
					buttonType: "blue",
					label: "%",
					tokenName: "Percent"
				}, {
					action: "Equals",
					buttonType: "orange",
					label: "="
				}]];
				return void 0 !== e ? [e, ...a] : a
			}
			, h = (g(),
				[{
					buttonClassName: u.Z["text-button"],
					buttonType: "dark",
					label: "sin",
					tokenName: "Sin"
				}, {
					buttonClassName: u.Z["text-button"],
					buttonType: "dark",
					label: "cos",
					tokenName: "Cos"
				}, {
					buttonClassName: u.Z["text-button"],
					buttonType: "dark",
					label: "tan",
					tokenName: "Tan"
				}, {
					buttonClassName: u.Z["icon-large"],
					buttonType: "dark",
					imageClassName: u.Z["icon-large-img"],
					label: "π",
					svg: c,
					tokenName: "Pi"
				}, {
					buttonClassName: u.Z["icon-large"],
					buttonType: "dark",
					imageClassName: u.Z["icon-large-img"],
					label: "^",
					svg: i,
					tokenName: "Exponent"
				}])
			, v = [{
				buttonClassName: u.Z["text-button"],
				buttonType: "dark",
				label: "sin⁻¹",
				tokenName: "InverseSin"
			}, {
				buttonClassName: u.Z["text-button"],
				buttonType: "dark",
				label: "cos⁻¹",
				tokenName: "InverseCos"
			}, {
				buttonClassName: u.Z["text-button"],
				buttonType: "dark",
				label: "tan⁻¹",
				tokenName: "InverseTan"
			}]
			, f = (u.Z["text-button"],
				u.Z["text-button"],
				u.Z["text-button"],
				u.Z["text-button-large"],
				[{
					buttonClassName: u.Z["icon-large"],
					buttonType: "dark",
					imageClassName: u.Z["icon-large-img"],
					label: "^",
					svg: i,
					tokenName: "Exponent"
				}, {
					buttonClassName: u.Z["icon-large"],
					buttonType: "dark",
					imageClassName: u.Z["icon-large-img"],
					label: "√",
					svg: d,
					tokenName: "SquareRoot"
				}, {
					buttonClassName: u.Z["icon-large"],
					buttonType: "dark",
					imageClassName: u.Z["icon-large-img"],
					label: "ⁿ√",
					svg: o,
					tokenName: "NthRoot"
				}])
			, _ = [{
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "π",
				svg: c,
				tokenName: "Pi"
			}, {
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "^",
				svg: i,
				tokenName: "Exponent"
			}, {
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "ⁿ√",
				svg: o,
				tokenName: "NthRoot"
			}]
			, E = [{
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "^",
				svg: i,
				tokenName: "Exponent"
			}, {
				buttonType: "blue",
				label: "σ",
				tokenName: "StandardDeviation"
			}, {
				buttonType: "blue",
				label: ",",
				tokenName: "Comma"
			}]
			, y = [{
				buttonClassName: u.Z["text-button-large"],
				buttonType: "dark",
				label: "x²",
				tokenName: "Square"
			}, {
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "^",
				svg: i,
				tokenName: "Exponent"
			}, {
				buttonClassName: u.Z["text-button-large"],
				buttonType: "dark",
				label: "e",
				tokenName: "E"
			}, {
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "√",
				svg: d,
				tokenName: "SquareRoot"
			}, {
				buttonClassName: u.Z["icon-large"],
				buttonType: "dark",
				imageClassName: u.Z["icon-large-img"],
				label: "ⁿ√",
				svg: o,
				tokenName: "NthRoot"
			}]
			, b = {
				basic: {
					middle: f
				},
				exponents_radicals_logs: {
					middle: [{
						buttonClassName: u.Z["text-button"],
						buttonType: "dark",
						label: "ln",
						tokenName: "Ln"
					}, {
						buttonClassName: u.Z["text-button"],
						buttonType: "dark",
						label: "log",
						tokenName: "LogBase10"
					}, {
						buttonClassName: u.Z["text-button"],
						buttonType: "dark",
						label: "logₙ",
						tokenName: "LogBaseN"
					}],
					top: y
				},
				geometry: {
					middle: _
				},
				probability: {
					middle: [{
						buttonType: "blue",
						label: "!",
						tokenName: "Factorial"
					}, {
						buttonType: "blue",
						label: "C",
						tokenName: "NChooseR"
					}, {
						buttonType: "blue",
						label: "P",
						tokenName: "NPermuteR"
					}]
				},
				statistics: {
					middle: E
				},
				trigonometry: {
					middle: v,
					top: h
				}
			}
			, S = e => {
				if (!e || 0 === e.length)
					return {};
				const t = e.find((e => e in b));
				if (!t)
					return {};
				const a = b[t];
				return {
					middleFunctionButtons: a.middle,
					topFunctionButtons: a.top
				}
			}
	}
	,
	59175: (e, t, a) => {
		a.d(t, {
			Z: () => r
		});
		var n = a(27378);
		const r = (e, t) => {
			const a = n.useRef()
				, r = n.useRef(null)
				, s = n.useRef();
			return n.useLayoutEffect((() => {
				a.current = e
			}
			)),
				n.useLayoutEffect((() => {
					const e = new ResizeObserver((e => {
						var t;
						return null === (t = a.current) || void 0 === t ? void 0 : t.call(a, e[0])
					}
					));
					return r.current && e.observe(r.current, t),
						s.current = e,
						() => e.disconnect()
				}
				), [null == t ? void 0 : t.box]),
				n.useCallback((e => {
					var a, n;
					r.current && (null === (a = s.current) || void 0 === a || a.unobserve(r.current)),
						e && (null === (n = s.current) || void 0 === n || n.observe(e, t)),
						r.current = e
				}
				), [])
		}
	}
	,
	71129: (e, t, a) => {
		a.d(t, {
			Z: () => o
		});
		var n = a(27378)
			, r = a(31809);
		var s = a(95940)
			, l = a(35160)
			, i = a(2945);
		const o = () => n.createElement(r.Z, {
			className: "_25MT4",
			modalName: l.t.AllowMicrophone
		}, (() => n.createElement(n.Fragment, null, n.createElement("h4", null, (0,
			s._i)(15137)), n.createElement("p", {
				className: "_2Gkdd"
			}, (0,
				s._i)(6378, {
					help_url: (0,
						i.z9)("204642264")
				})))))
	}
	,
	57677: (e, t, a) => {
		a.d(t, {
			Z: () => d
		});
		var n = a(27378);
		var r = a(30033)
			, s = a(67173)
			, l = a(67116)
			, i = a(66520)
			, o = a(3800);
		class c extends n.Component {
			constructor() {
				super(...arguments),
					this.overlayRef = n.createRef(),
					this.handleInputScroll = e => {
						this.overlayRef.current && (this.overlayRef.current.scrollLeft = e.currentTarget.scrollLeft)
					}
			}
			render() {
				const { autoFocus: e, disabled: t, displayRichText: a, gradingState: c, inputLanguage: d, onChange: u, onFocus: m, placeholder: p, refCallback: g, size: h, style: v, value: f } = this.props
					, _ = "fill-in-the-blank" === v ? "YQVzO _3mwuq" : "math" === v ? "correct" === c ? "x0C_u _1ihQP _3zGeZ _394fY RpiVp" : a ? "ZiW7a _1ihQP _3zGeZ _394fY RpiVp" : "_1ihQP _3zGeZ _394fY RpiVp" : "gWidz _3zGeZ _394fY RpiVp"
					, E = n.createElement("input", {
						...(0,
							r._q)(s.V.ChallengeTextInput),
						...o.N,
						autoFocus: e,
						className: _,
						dir: (0,
							l.Ux)(d),
						disabled: t,
						lang: d,
						onChange: u,
						onFocus: m,
						onScroll: this.handleInputScroll,
						placeholder: p,
						ref: g,
						size: h,
						type: "text",
						value: f
					});
				return "math" === v ? n.createElement("div", {
					className: "_3rEAm"
				}, a ? n.createElement("div", {
					"aria-hidden": !0,
					className: "bRshy",
					ref: this.overlayRef
				}, f.split(i.cE).map(((e, t) => e ? n.createElement("span", {
					className: i.cE.test(e) ? "_1pJEi" : void 0,
					key: t
				}, e) : null))) : null, E) : E
			}
		}
		const d = c
	}
	,
	84577: (e, t, a) => {
		a.d(t, {
			Z: () => p
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(54351)
			, i = a(15746)
			, o = a(18120)
			, c = a(68602);
		var d = a(30033)
			, u = a(67173)
			, m = a(67116);
		const p = ({ autoFocus: e, caption: t, className: a, correct: n, disabled: p, hideHotkey: g = !1, icon: h, incorrect: v, index: f, language: _, onClick: E, role: y = "radio", selected: b, compactPadding: S, unstyledDisabled: k }) => {
			const C = (0,
				i.Z)()
				, x = s.useRef(null)
				, T = s.useCallback((() => {
					var e, t;
					null === (e = x.current) || void 0 === e || e.dispatchEvent(new CustomEvent("web-ui_select")),
						null === (t = x.current) || void 0 === t || t.focus(),
						null == E || E()
				}
				), [E, x]);
			s.useEffect((() => {
				var t;
				e && !p && (null === (t = x.current) || void 0 === t || t.focus())
			}
			), []);
			const w = p && !k;
			return s.createElement(l.Z, {
				checked: b,
				className: r()(n ? "_3v-Hx _2_Y8r" : v ? "_3j8Jt _2_Y8r" : w ? "_2TdWJ _2_Y8r" : "_2_Y8r", S && "_1hH4P", a),
				disabled: p,
				onClick: E,
				ref: x,
				role: y,
				unstyledDisabled: !0,
				value: `${f}`,
				...(0,
					d._q)(u.V.ChallengeChoice)
			}, s.createElement("div", {
				className: "APqdQ"
			}, h), s.createElement("div", {
				className: "_2Y0B7"
			}, s.createElement("span", {
				className: "_1NM0v",
				dir: (0,
					m.Ux)(_),
				lang: _
			}, t), s.createElement(o.Z, {
				className: g ? "_2cqi1 Ufx5P" : "Ufx5P",
				disabled: p,
				disabledStyle: "unstyled",
				index: f,
				onTrigger: T,
				selected: b
			})), s.createElement(c.Z, {
				animationCounter: n && !C ? 1 : 0,
				className: "-fFlU"
			}))
		}
	}
	,
	13992: (e, t, a) => {
		a.d(t, {
			R: () => wt,
			Z: () => Rt
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(31542)
			, i = a(30427)
			, o = a(79041)
			, c = a(76508)
			, d = a(7828)
			, u = a(62026)
			, m = a(25353)
			, p = a(42659);
		var g = a(75073)
			, h = a(72117)
			, v = a(84389)
			, f = a(18225)
			, _ = a(30033)
			, E = a(67173)
			, y = a(95940)
			, b = a(18804)
			, S = a(79465);
		const k = ({ achievement: e }) => {
			const t = (0,
				b.Fx)(p.np);
			return s.useEffect((() => {
				(0,
					S.track)("show_achievement_unlock_session_end", {
						achievement: e.name
					}),
					f.I7.claimAchievement(e, t.id)
			}
			), []),
				s.createElement("div", {
					className: r()(g.Z.slide, h.Z.slide)
				}, s.createElement("div", {
					className: h.Z.wrap
				}, s.createElement("div", {
					className: h.Z.content,
					...(0,
						_._q)(E.V.AchievementV3Slide)
				}, s.createElement("div", {
					className: "_37xCD"
				}, s.createElement(m.Z, {
					complete: (0,
						v.vO)(e),
					id: e.name,
					level: (0,
						v.an)(e),
					size: "large"
				})), s.createElement("h2", {
					className: h.Z.title
				}, (0,
					y._i)(958, {
						achievement_name: (0,
							v.Kv)(e)
					})), s.createElement("div", {
						className: h.Z.tagline
					}, (0,
						v.A9)(e, !0, !1, "")))))
		}
			;
		var C = a(15746)
			, x = a(9316);
		const T = a.p + "images/icons/68c1fd0f467456a4c607ecc0ac040533.svg";
		var w = a(50498);
		const N = ({ rewardType: e, currencyReward: t }) => {
			const [a, n] = s.useState(!1)
				, [l, i] = s.useState(!1)
				, o = (0,
					C.Z)();
			return s.useEffect((() => {
				if (o)
					return;
				const e = new AbortController;
				return (async () => {
					await (0,
						w._v)(500),
						e.signal.aborted || (n(!0),
							await (0,
								w._v)(450),
							e.signal.aborted || i(!0))
				}
				)(),
					() => e.abort()
			}
			), []),
				s.createElement("div", {
					className: g.Z.slide
				}, s.createElement("div", {
					className: h.Z.wrap
				}, s.createElement("div", {
					className: h.Z.content
				}, s.createElement("div", {
					className: "_30TFy"
				}, o ? s.createElement(x.Z, {
					animate: !1,
					type: e
				}) : s.createElement(s.Fragment, null, s.createElement(x.Z, {
					animate: !0,
					isPlaying: a,
					type: e
				}), "xpBoost" === e ? s.createElement("img", {
					className: r()("_22XY_", l ? "_29wrs" : void 0),
					src: T
				}) : void 0)), s.createElement("h2", {
					className: r()(h.Z.title, "_3ydRo")
				}, "gems" === e ? (0,
					y._i)(12797, {
						gems: `${null == t ? void 0 : t.amount}`
					}) : (0,
						y._i)(5182)), s.createElement("div", {
							className: r()(h.Z.tagline, "_2nIJC")
						}, "xpBoost" === e ? (0,
							y._i)(39845) : (0,
								y._i)(33648)))))
		}
			;
		var R = a(64502);
		const I = a.p + "images/83be28adde65812bd76da3d4c10fea85.svg"
			, L = a.p + "images/cc33ee920146264b392632be83f18140.svg";
		var P = a(26886);
		const F = () => {
			const e = (0,
				b.Fx)(p.Oz)
				, t = (0,
					P.ug)({
						fromLanguageId: e.fromLanguage,
						learningLanguageId: e.learningLanguage,
						subject: e.subject
					}, "en")
				, a = "dark" === (0,
					R.Fg)();
			return s.createElement("div", {
				className: r()(g.Z["slide-course-complete"], g.Z.slide, h.Z.slide)
			}, s.createElement("div", {
				className: "_2-XGP"
			}, s.createElement("img", {
				className: "_1QZ-K",
				src: a ? I : L
			}), s.createElement("h1", {
				className: "f0PmR"
			}, ((e, t) => {
				switch (e) {
					case "math":
						return (0,
							y._i)(78010);
					case "chess":
						return (0,
							y._i)(78011);
					case "music":
						return (0,
							y._i)(78012);
					default:
						return (0,
							y._i)(50014, {
								language_name: t
							})
				}
			}
			)(e.subject, t))))
		}
			;
		var A = a(40164)
			, Z = a(4968);
		const D = a.p + "images/ae9c4a6aeb0393a8c00618957742977b.svg"
			, M = a.p + "images/641467b5ae0d90feb056773eb9135939.svg"
			, O = () => {
				const e = "dark" === (0,
					R.Fg)();
				return s.createElement("div", {
					className: r()(g.Z.slide, h.Z.slide)
				}, s.createElement("div", {
					className: "_3nHHw"
				}, s.createElement("img", {
					className: "_3SyZ3",
					src: e ? D : M
				}), s.createElement("h1", {
					className: "_3QXEP"
				}, (0,
					y._i)(50013))))
			}
			;
		var H = a(63219)
			, B = a(50961)
			, U = a(27755)
			, G = a(46714)
			, W = a(50458)
			, V = a(19067);
		const z = ({ total: e, remaining: t }) => s.createElement("div", {
			className: r()(g.Z.slide, h.Z.slide)
		}, s.createElement("div", {
			className: h.Z.wrap
		}, s.createElement("div", {
			className: h.Z.content
		}, s.createElement(V.Z, {
			className: "_3ZUf9",
			lastRedHeartClassName: "_2y0Ys",
			remaining: t,
			total: e
		}), s.createElement("div", {
			className: "Bdvit"
		}, (0,
			y._i)(21209)), s.createElement("div", {
				className: "_1Qa1s"
			}, (0,
				y._i)(9548)))));
		var $ = a(36666)
			, K = a(95817)
			, j = a(86518);
		const q = a.p + "images/super/7fab836bbf084da5eeee203a7d778061.svg";
		var X = a(51827)
			, Y = a(64115)
			, Q = a(58576)
			, J = a(32499);
		const ee = ({ onClose: e }) => {
			const t = (0,
				b.tX)()
				, [a, n] = s.useState(!1)
				, [r, l] = s.useState(!1)
				, i = (0,
					b.Fx)((e => {
						var t, a;
						return null !== (a = null === (t = e.user.streakData.currentStreak) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0
					}
					))
				, o = (0,
					b.Fx)((e => (0,
						p.np)(e).sessionCount));
			return s.useEffect((() => {
				(0,
					S.track)("premium_brand_ad_show", {
						context: "immersive_plus"
					}),
					(0,
						X.Ph)(o);
				const e = setTimeout((() => n(!0)), 300);
				return () => clearTimeout(e)
			}
			), []),
				s.createElement("div", {
					className: "_1p9CT _2CoFd"
				}, s.createElement("div", {
					className: "_3BefD n-8cJ"
				}, s.createElement("div", {
					className: "oftwV"
				}, s.createElement("div", {
					className: "_10WUX"
				}, s.createElement(K.Z, {
					className: "PKaFJ"
				}), s.createElement("img", {
					className: "_2jXTD",
					src: q
				}), s.createElement("div", {
					className: "_22dWj"
				}, s.createElement("div", {
					className: "_6_3Z1 _110PW"
				}, (0,
					y._i)(37196, {
						num: i
					})), (0,
						y._i)(26080))), s.createElement("div", {
							className: "_3eWWH _1ddEE"
						}, s.createElement((() => s.createElement($.Z, {
							className: "_1SIyN _19taU ldEmT",
							onClick: () => {
								a && (t({
									type: "sessionEnd/CTA_CLICK"
								}),
									(0,
										Y.gQ)("debugSlides") && "immersivePlus" !== (0,
											Y.ky)("debugSlides") ? e() : (async () => {
												l(!0);
												try {
													const a = (await f.Vi.purchaseUserShopItem("immersive_subscription", {
														productId: J.tJ
													})).item;
													(0,
														S.track)("purchase_item", {
															item_name: "immersive_subscription",
															purchased_via: "item_offer"
														}),
														t((0,
															j.eY)()),
														a.subscriptionInfo && t({
															premiumExpirationTimestampSeconds: a.subscriptionInfo.expectedExpiration,
															type: "ACTIVATE_SUPER"
														}),
														t({
															name: "plusBadge",
															type: "CREATE_HOME_MESSAGE"
														}),
														e()
												} catch (e) {
													(0,
														Q.vU)(e),
														l(!1)
												}
											}
											)())
							}
							,
							submitting: r,
							variant: "solid"
						}, (0,
							y._i)(30356))), null)))))
		}
			;
		var te = a(66720)
			, ae = a(93540);
		const ne = a.p + "images/legendary/771151e6ff9524715025a2766599230a.svg"
			, re = a.p + "images/legendary/1fd9ce28c9fb394d7653966731c314eb.svg"
			, se = a.p + "images/legendary/cb702220773ddadb24a70160b62ef4d1.svg"
			, le = a.p + "images/legendary/82a133201de51eb23361688aaa565044.svg";
		var ie = a(68903)
			, oe = a(12408);
		const ce = ({ levelData: e, onNextClick: t, unitIndex: a, unitNumber: n }) => {
			const r = (0,
				b.Fx)((e => {
					var t;
					return null === (t = (0,
						ae.HF)(e)) || void 0 === t ? void 0 : t[a]
				}
				))
				, l = !(!r || !(0,
					oe.yf)(r))
				, i = null == e ? void 0 : e.level.type
				, o = (() => {
					if (l)
						return le;
					if (void 0 === i)
						return re;
					switch (i) {
						case "alphabet":
						case "duo_radio":
						case "skill":
							return re;
						case "practice":
							return ne;
						case "story":
							return se;
						case "alphabet_gate":
						case "chess_match":
						case "chess_mini_match":
						case "chess_practice":
						case "chess_puzzles":
						case "chess_skill":
						case "chess_unit_review":
						case "chest":
						case "math_game":
						case "math_life_skill":
						case "math_match_practice":
						case "math_multistep_lesson":
						case "math_practice":
						case "math_skill":
						case "math_story":
						case "math_unit_review":
						case "unit_review":
							break;
						default:
							(0,
								ie.RJ)(i)
					}
					return re
				}
				)();
			return s.createElement("div", {
				...(0,
					_._q)(E.V.LegendaryEarnedSlide),
				className: g.Z["slide-legendary-gold"]
			}, s.createElement("div", {
				className: h.Z.wrap
			}, s.createElement("div", {
				className: h.Z.content
			}, s.createElement("div", {
				className: "_2l0ZL"
			}, s.createElement("img", {
				className: "_1Dim9",
				src: o
			})), s.createElement("h2", {
				className: "_1Hrn_ _1A_ri"
			}, l ? (0,
				y._i)(33634, {
					unit_num: n
				}) : (0,
					y._i)(40093)), s.createElement("div", {
						className: "_1LesC _1A_ri"
					}, l ? (0,
						y._i)(33635) : (0,
							y._i)(40094)), s.createElement($.Z, {
								...(0,
									_._q)(E.V.LegendarySessionEndContinue),
								className: "_2CzYJ _2JGBA _1A_ri",
								onClick: t,
								variant: "solid"
							}, (0,
								y._i)(4906)))))
		}
			, de = a.p + "images/legendary/8d9c210f867a11b679ac38def77619b2.svg"
			, ue = () => {
				const e = (0,
					b.Fx)(p.lA);
				return s.useEffect((() => {
					(0,
						S.track)("final_level_failure_screen_show", {
							lesson_index: e.sessionParams.lessonIndex
						})
				}
				), []),
					s.createElement("div", {
						className: g.Z.slide
					}, s.createElement("img", {
						className: "_1CQLI",
						src: de
					}), s.createElement("h2", {
						className: h.Z.title
					}, (0,
						y._i)(15652)), s.createElement("div", {
							className: h.Z.tagline
						}, (0,
							y._i)(17107)))
			}
			, me = a.p + "images/legendary/00e8a1d610b00d4936f7af2d89eff3d3.svg";
		var pe = a(97106);
		const ge = () => {
			var e;
			const t = (0,
				b.Fx)(p.lA)
				, a = (0,
					pe.g3)() ? pe.K3 : 1
				, n = (null !== (e = t.partialXpGiven) && void 0 !== e ? e : 0) * a;
			return s.createElement("div", {
				className: g.Z.slide
			}, s.createElement("div", {
				className: "_2BHy8"
			}, s.createElement("img", {
				className: "_1Xkzq _219j-",
				src: me
			}), s.createElement("div", {
				className: "_1eN9y"
			}, n)), s.createElement("h2", {
				className: h.Z.title
			}, (0,
				y._i)(28127, {
					xp: n
				})), s.createElement("div", {
					className: h.Z.tagline
				}, (0,
					y._i)(28366)))
		}
			;
		var he = a(6676)
			, ve = a(6907)
			, fe = a(39608)
			, _e = a(74502);
		var Ee = a(37825);
		const ye = ({ levelData: e, onClose: t }) => {
			const a = (0,
				b.Fx)(p.$4);
			if (void 0 === e)
				return null;
			const { level: n, levelIndex: r, unitIndex: l } = e
				, i = (() => {
					if (void 0 === (null == n ? void 0 : n.type))
						return fe;
					switch (n.type) {
						case "alphabet":
						case "duo_radio":
						case "skill":
							return fe;
						case "practice":
							return ve;
						case "story":
							return _e;
						case "alphabet_gate":
						case "chess_match":
						case "chess_mini_match":
						case "chess_practice":
						case "chess_puzzles":
						case "chess_unit_review":
						case "chess_skill":
						case "chest":
						case "math_game":
						case "math_life_skill":
						case "math_match_practice":
						case "math_multistep_lesson":
						case "math_practice":
						case "math_skill":
						case "math_story":
						case "math_unit_review":
						case "unit_review":
							return null;
						default:
							return (0,
								ie.RJ)(n.type),
								null
					}
				}
				)();
			return s.createElement("div", {
				className: "_2daBX _2CoFd"
			}, s.createElement("div", {
				className: "_18cpf"
			}, s.createElement("div", {
				className: "_2pEhc _3SXFk"
			}, s.createElement("img", {
				className: "_1fmDi",
				src: i
			}), s.createElement("h2", {
				className: "_2bWBs _3B4r8"
			}, (0,
				y._i)(27118)), s.createElement("div", {
					className: "_3xrVW _3B4r8"
				}, (0,
					y._i)(40091)), s.createElement(he.Z, {
						className: "_2jKl- _2JGBA _3B4r8",
						level: n,
						levelIndex: r,
						onDismiss: t,
						origin: (0,
							Ee.b2)(n.type),
						unitIndex: l
					})), s.createElement("div", {
						className: "_2CLME"
					}, s.createElement("div", {
						className: "_7c6-i U8jH3 jHbiF"
					}, s.createElement($.Z, {
						className: "_28UWu _3h0lA _1S2uf _1E9sc",
						onClick: () => {
							(0,
								S.track)("premium_ad_dismiss", {
									iap_context: "final_level_promotion"
								}),
								t()
						}
						,
						variant: "stroke"
					}, (0,
						y._i)(6821)), a ? s.createElement($.Z, {
							className: "_2CP5- MYehf _19taU _1E9sc",
							onClick: () => {
								(0,
									S.track)("premium_ad_dismiss", {
										iap_context: "final_level_promotion"
									}),
									t()
							}
							,
							variant: "solid"
						}, (0,
							y._i)(4906)) : null))))
		}
			;
		var be = a(93301)
			, Se = a(12905)
			, ke = a(18445)
			, Ce = a(64008);
		const xe = () => {
			const e = (0,
				b.Fx)(ke.O9);
			if (s.useEffect((() => {
				var t;
				return (0,
					S.track)("mistakes_inbox_plus_se_show", {
						mistakes_inbox_counter: null !== (t = null == e ? void 0 : e.mistakeCount) && void 0 !== t ? t : -1
					}),
					() => {
						var t;
						(0,
							S.track)("mistakes_inbox_plus_se_dismiss", {
								mistakes_inbox_counter: null !== (t = null == e ? void 0 : e.mistakeCount) && void 0 !== t ? t : -1
							})
					}
			}
			), []),
				void 0 === e)
				throw Error("Mistakes review slide called with no mistakes info");
			return s.createElement("div", {
				className: g.Z.slide
			}, s.createElement("div", {
				className: h.Z.wrap
			}, s.createElement("div", {
				className: h.Z.content
			}, s.createElement("img", {
				className: "aivnt",
				src: Ce
			}), s.createElement("h2", {
				className: h.Z.title
			}, (0,
				y._i)(39401)), s.createElement("div", {
					className: h.Z.tagline
				}, (0,
					y._i)(25410))), s.createElement(Se.Z, {
						className: "yViX-"
					})))
		}
			;
		var Te = a(68891)
			, we = a(9069)
			, Ne = a(22498)
			, Re = a(77895)
			, Ie = a(85814);
		const Le = ({ sectionNumber: e }) => {
			const t = (0,
				C.Z)();
			return s.createElement("div", {
				className: "_2BRqp"
			}, s.createElement("div", {
				className: "_2ASsS"
			}, s.createElement(Re.Z, {
				direction: "up",
				duoQuote: (0,
					y.H8)(52935, {
						num: e
					}, {
						exportTags: !0
					}),
				highlightColor: "eel",
				shouldAnimate: !t
			})), s.createElement(s.Suspense, {
				fallback: null
			}, s.createElement(Ne.Z, {
				className: "_20f67",
				fillMode: "forwards",
				isPlaying: !t,
				loop: !0,
				loopSegment: [25, 213],
				mainSegment: [0, 25],
				path: Ie
			})))
		}
			;
		var Pe = a(80254);
		const Fe = a.p + "images/practiceHub/87c07db605cb87beb7b09c30d229ab7d.svg"
			, Ae = a.p + "images/practiceHub/ca2b1f6494c54e8463bd6c136986ede9.svg"
			, Ze = a.p + "images/practiceHub/287fea82055f513d828d99266bed6aeb.svg"
			, De = a.p + "images/practiceHub/f3a234bd8eba5fa5b5b0fd1e37184c3a.svg";
		var Me = a(50548)
			, Oe = a(84401)
			, He = a(88868);
		const Be = ({ description: e, imageSrc: t, onClose: a, title: n, trackingName: r }) => {
			const l = (0,
				Me.k6)();
			return s.createElement("div", {
				className: "_2b5j_ _2CoFd"
			}, s.createElement("div", {
				className: "_2hhqt"
			}, s.createElement("div", {
				className: "_1CiL3"
			}, s.createElement("div", {
				className: "_3AYrR"
			}, s.createElement(Se.Z, {
				className: "UhDGm"
			}), s.createElement("img", {
				className: "_3ZLZ_",
				src: t
			}), s.createElement("div", {
				className: "_3TDCm"
			}, s.createElement("h1", {
				className: "_1jGvf"
			}, n), e ? s.createElement("p", null, e) : null)), s.createElement("div", {
				className: "_2iHAQ"
			}, s.createElement("div", {
				className: "_3KWA6 U8jH3 jHbiF"
			}, s.createElement($.Z, {
				className: "_76ebC _3h0lA _1S2uf cnGdv",
				...(0,
					_._q)(E.V.PracticeHubAdNoThanksButton),
				onClick: () => {
					(0,
						S.track)("practice_hub_se_promo_dismiss", {
							practice_hub_session_type: r
						}),
						(0,
							S.track)("premium_ad_dismiss", {
								iap_context: "practice_hub_promo"
							}),
						a()
				}
				,
				variant: "stroke"
			}, (0,
				y._i)(6821)), s.createElement($.Z, {
					className: "s-oDG MYehf _19taU cnGdv",
					...(0,
						_._q)(E.V.PracticeHubAdContinueButton),
					onClick: () => {
						(0,
							S.track)("practice_hub_se_promo_tap", {
								practice_hub_session_type: r
							}),
							(0,
								S.track)("premium_ad_click", {
									iap_context: "practice_hub_promo"
								}),
							a(),
							l.push(He.Eq)
					}
					,
					variant: "solid"
				}, (0,
					y._i)(18550)))))))
		}
			, Ue = ({ onClose: e }) => {
				const t = (0,
					b.Fx)((e => (0,
						p.np)(e).sessionCount))
					, a = (0,
						X.sb)("practice-hub-promo").subtypesShown
					, n = Oe.Am.filter((e => !(null == a ? void 0 : a.includes(e))))
					, [r] = s.useState((() => Pe.UP(n)))
					, l = (0,
						Oe.gw)(r);
				switch (s.useEffect((() => {
					(0,
						S.track)("practice_hub_promo_show", {
							practice_hub_session_type: l
						}),
						(0,
							S.track)("premium_ad_show", {
								iap_context: "practice_hub_promo"
							}),
						(0,
							X.Ph)(t, "practice-hub-promo", l)
				}
				), []),
				r) {
					case "listen-up":
						return s.createElement(Be, {
							imageSrc: Fe,
							onClose: e,
							title: (0,
								y._i)(50946),
							trackingName: l
						});
					case "perfect-pronunciation":
						return s.createElement(Be, {
							imageSrc: Ae,
							onClose: e,
							title: (0,
								y._i)(50947),
							trackingName: l
						});
					case "target-practice":
						return s.createElement(Be, {
							imageSrc: Ze,
							onClose: e,
							title: (0,
								y._i)(50944),
							trackingName: l
						});
					case "unit-rewind":
						return s.createElement(Be, {
							imageSrc: De,
							onClose: e,
							title: (0,
								y._i)(50945),
							trackingName: l
						});
					default:
						throw (0,
							ie.RJ)(r),
						Error(`Unrecognized practice hub session type for session end promo: ${r}`)
				}
			}
			;
		var Ge = a(73121);
		const We = ({ animate: e, isDisplayed: t, currencyAmount: a, reward: n, type: l }) => {
			const i = "gems" === l;
			return s.useEffect((() => {
				i && void 0 !== n ? (0,
					S.track)("session_end_reward_show", {
						currency_amount: n.amount,
						reward_type: l,
						rewarded_video: !1
					}) : "streakFreeze" === l && (0,
						S.track)("session_end_reward_show", {
							currency_amount: 0,
							reward_type: "streak_freeze",
							rewarded_video: !1
						})
			}
			), []),
				s.createElement("div", {
					className: r()(g.Z.slide, h.Z.slide)
				}, s.createElement("div", {
					className: h.Z.wrap
				}, s.createElement("div", {
					className: h.Z.content,
					...(0,
						_._q)(E.V.RewardSlide)
				}, s.createElement("div", {
					className: Ge.Z["chest-container"]
				}, s.createElement(x.Z, {
					animate: t && e && i,
					type: l
				})), s.createElement("h2", {
					className: h.Z.title
				}, "gems" === l ? (0,
					y._i)(12797, {
						gems: a
					}) : (0,
						y._i)(10715)), s.createElement("div", {
							className: h.Z.tagline
						}, i ? (0,
							y._i)(16379) : (0,
								y._i)(13302)))))
		}
			;
		var Ve = a(81553)
			, ze = a(17413)
			, $e = a(67524)
			, Ke = a(86155);
		const je = a.p + "images/5490f294242750a431d1a4fb446b15c1.svg"
			, qe = a.p + "images/b8617359331750b122add26cfc606ca7.svg";
		var Xe = a(81562);
		var Ye = a(9832);
		const Qe = ({ onClose: e, onEnd: t }) => {
			var a;
			const n = (0,
				b.tX)()
				, r = (0,
					Ye.ew)()
				, l = (0,
					b.Fx)(p.Rv)
				, { hasSeenNewYears: i } = null !== (a = (0,
					b.Fx)((e => (0,
						p.cQ)(e).superVideoPromoShown))) && void 0 !== a ? a : {}
				, [o, c] = s.useState();
			s.useEffect((() => {
				const t = (({ languageId: e, query: t }) => Pe.ZP.where(at, t).filter((t => e in t.urlByLanguage)).map((t => ({
					canBeShownForNyp: t.canBeShownForNyp,
					isFamilyPlan: t.isFamilyPlan,
					isNewYears: t.isNewYears,
					trackingName: t.trackingName,
					url: t.urlByLanguage[e]
				}))))({
					languageId: l,
					query: r ? {
						canBeShownForNyp: r
					} : {
						isNewYears: !1
					}
				})
					, a = ((e, t) => {
						if (0 === e.length)
							return;
						const a = (() => {
							const a = e.filter((e => e.isNewYears)).length;
							if (!t && a > 0)
								return e.map((e => e.isNewYears ? 1 / a : 0));
							if (a > 0)
								return e.map((t => t.isNewYears ? .5 / a : .5 / (e.length - a)));
							const n = e.filter((e => e.isFamilyPlan)).length;
							if (n > 0) {
								const t = Math.min(1 / e.length, .2 / n)
									, a = (1 - t * n) / (e.length - n);
								return e.map((e => e.isFamilyPlan ? t : a))
							}
							return e.map((() => 1 / e.length))
						}
						)();
						let n = Math.random();
						for (const [t, r] of e.entries())
							if (n -= a[t],
								n <= 0)
								return r
					}
					)(t, null != i && i);
				void 0 === a ? e(!1) : (c(a),
					(0,
						S.track)("premium_ad_show", {
							iap_context: a.isFamilyPlan ? "interstitial_plus_video_family_plan" : "interstitial_plus_video"
						}))
			}
			), []);
			const d = {
				ad_network: "duolingo",
				ad_placement: "session_end_interstitial_duolingo",
				ad_type: "interstitial",
				ad_unit: "plus_promo",
				family_safe: !0,
				plus_video_type: null == o ? void 0 : o.trackingName
			}
				, u = (0,
					b.Fx)((e => (0,
						Ke.eG)(e).isListenEnabled))
				, [m, g] = s.useState(!u)
				, h = s.useRef(null);
			return s.useEffect((() => () => {
				null !== h.current && (h.current.removeAttribute("src"),
					h.current.load())
			}
			), []),
				s.createElement("div", {
					className: "_3BWKN"
				}, s.createElement($.Z, {
					className: "_1Udkq",
					onClick: () => {
						var t;
						(0,
							S.track)("ad_close", d),
							e(null !== (t = null == o ? void 0 : o.isFamilyPlan) && void 0 !== t && t)
					}
				}, s.createElement("img", {
					src: Xe
				})), s.createElement($.Z, {
					className: "_32yet",
					onClick: () => g(!m)
				}, s.createElement("img", {
					src: m ? je : qe
				})), void 0 === o ? null : s.createElement("video", {
					autoPlay: !0,
					className: "_48lxa",
					controls: !1,
					muted: m,
					onEnded: () => {
						var e;
						t(null !== (e = null == o ? void 0 : o.isFamilyPlan) && void 0 !== e && e)
					}
					,
					onError: e => {
						return a = e.target.error,
							(0,
								S.track)("ad_fill_fail", {
									error_code: a.code,
									...d
								}),
							void t(!1);
						var a
					}
					,
					onPlay: () => {
						var e, t;
						(0,
							S.track)("ad_show", d),
							n({
								isFamilyPlan: null !== (e = null == o ? void 0 : o.isFamilyPlan) && void 0 !== e && e,
								isNewYears: null !== (t = null == o ? void 0 : o.isNewYears) && void 0 !== t && t,
								timestamp: Date.now(),
								type: "SUPER_VIDEO_PROMO_SHOWN"
							})
					}
					,
					ref: h,
					src: o.url
				}))
		}
			, Je = {
				ar: "Arabic",
				bn: "Bengali",
				cs: "Czech",
				de: "German",
				el: "Greek",
				en: "English",
				es: "Spanish",
				fr: "French",
				hi: "Hindi",
				hu: "Hungarian",
				id: "Indonesian",
				it: "Italian",
				ja: "Japanese",
				ko: "Korean",
				"nl-NL": "Dutch",
				pl: "Polish",
				pt: "Portuguese",
				ro: "Romanian",
				ru: "Russian",
				th: "Thai",
				tl: "Tagalog",
				tr: "Turkish",
				uk: "Ukrainian",
				vi: "Vietnamese",
				zh: "Chinese"
			}
			, et = (e, t) => `https://simg-ssl.duolingo.com/videos/promo/${t}_${Je[e]}.mp4`
			, tt = e => Object.fromEntries(Object.keys(Je).map((t => [t, et(t, e)])))
			, at = [{
				canBeShownForNyp: !0,
				isFamilyPlan: !1,
				isNewYears: !1,
				trackingName: "efficient_learning",
				urlByLanguage: tt("DuolingoInterstitial_EfficientLearning")
			}, {
				canBeShownForNyp: !0,
				isFamilyPlan: !1,
				isNewYears: !1,
				trackingName: "features_explanation",
				urlByLanguage: tt("DuolingoInterstitial_FeatureExplanation")
			}, {
				canBeShownForNyp: !1,
				isFamilyPlan: !0,
				isNewYears: !1,
				trackingName: "family_plan",
				urlByLanguage: tt("DuolingoInterstitial_FamilyPlan")
			}, {
				canBeShownForNyp: !0,
				isFamilyPlan: !1,
				isNewYears: !0,
				trackingName: "new_years",
				urlByLanguage: tt("DuolingoInterstitial_NYP2026")
			}];
		var nt = a(19215)
			, rt = a(80164);
		const st = ({ onClose: e, shouldShowVideo: t }) => {
			const a = (0,
				b.Fx)(p.__)
				, n = (0,
					b.tX)()
				, r = (0,
					b.Fx)((e => (0,
						p.np)(e).sessionCount))
				, l = (0,
					b.Fx)(rt.QK)
				, i = (0,
					Ye.ew)()
				, o = s.useRef(!1);
			s.useEffect((() => {
				(0,
					X.Ph)(r, t ? "super-video" : "standard"),
					n({
						timestamp: Date.now(),
						type: "SESSION_END_PLUS_AD_SHOWN"
					}),
					t || (0,
						S.track)("premium_ad_show", {
							iap_context: f
						})
			}
			), []);
			const [c, d] = s.useState(t ? "video" : "purchase_flow")
				, [u, m] = s.useState(!1)
				, [g, h] = s.useState(!1)
				, v = e => {
					m(!0),
						h(e),
						d("purchase_flow")
				}
				, f = i ? "new_years_session_end_promo" : !1 === (0,
					X.eu)(a) ? "session_end_promo_no_trial" : "session_end_promo_trial";
			return s.createElement("div", {
				className: "_3KIC2 _2CoFd"
			}, "video" === c ? s.createElement(Qe, {
				onClose: v,
				onEnd: v
			}) : s.createElement(nt.bv, {
				closeFlow: () => {
					n({
						type: "sessionEnd/DISMISSED"
					}),
						e()
				}
				,
				didClickFreeTrial: !1,
				isOffer: !1,
				isSessionEndSlide: !0,
				isVoluntary: !1,
				onAdvanceStep: () => {
					o.current || n({
						type: "sessionEnd/CTA_CLICK"
					}),
						o.current = !0
				}
				,
				...(0,
					nt.Hm)(!0 === l, g, f, u)
			}))
		}
			;
		var lt = a(2844)
			, it = a(56659)
			, ot = a(9096)
			, ct = a(40034)
			, dt = a(86107)
			, ut = a(2298)
			, mt = a(85577)
			, pt = a(41288)
			, gt = a(45446)
			, ht = a(25656);
		var vt = a(35160);
		const ft = ({ onNextClick: e }) => {
			const t = (0,
				b.tX)();
			return s.useEffect((() => {
				(0,
					S.track)("registration_wall_show", {})
			}
			), []),
				s.createElement("div", {
					className: "YlSyM"
				}, s.createElement("span", {
					className: "_22_lN"
				}), s.createElement("h1", {
					className: "_3MPOJ"
				}, (0,
					y._i)(8334)), s.createElement("p", {
						className: "_396du"
					}, (0,
						y._i)(2623)), s.createElement("div", null, s.createElement($.Z, {
							className: "_3Gbex",
							...(0,
								_._q)(E.V.CreateProfile),
							onClick: () => {
								t({
									type: "sessionEnd/CTA_CLICK"
								}),
									(0,
										S.track)("registration_wall_tap", {
											target: "create"
										}),
									t({
										options: {
											goBack: e,
											isSignIn: !1,
											name: vt.t.SignInUp,
											via: "soft_wall"
										},
										type: "TOGGLE_MODAL"
									})
							}
							,
							variant: "solid"
						}, (0,
							y._i)(10954))), s.createElement($.Z, {
								className: "_3zgLG",
								...(0,
									_._q)(E.V.CreateProfileLater),
								onClick: () => {
									t({
										type: "sessionEnd/DISMISSED"
									}),
										(0,
											S.track)("registration_wall_tap", {
												target: "later"
											}),
										e()
								}
								,
								variant: "stroke"
							}, (0,
								y._i)(20467)))
		}
			, _t = a.p + "images/sessionSplash/5075eb529f67ff6c8afe2d7ff9adb858.svg"
			, Et = "_1dZZ4";
		var yt = a(65407);
		const bt = ({ sectionNumber: e, type: t, unitIndex: a, unitNumber: n }) => {
			const r = (0,
				oe.in)(a)
				, { image: l, title: i } = (() => {
					switch (t) {
						case "sectionTestFailed":
							return {
								image: s.createElement("img", {
									className: Et,
									src: _t
								}),
								title: (0,
									y._i)(49720, {
										section_name: (0,
											y.H8)(46892, {
												num: null != e ? e : 0
											})
									})
							};
						case "unitReview":
							return {
								image: s.createElement("img", {
									className: "_2Xeht",
									src: yt.bT[r.character]
								}),
								title: (0,
									y._i)(27099, {
										num: n
									})
							};
						case "unitTestFailed":
							return {
								image: s.createElement("img", {
									className: Et,
									src: _t
								}),
								title: (0,
									y._i)(49719, {
										unit_num: n
									})
							};
						case "unitTestPassed":
							return {
								image: s.createElement("img", {
									className: "SYkPT",
									src: yt.bT[r.character]
								}),
								title: (0,
									y._i)(33655, {
										unit_num: n
									})
							};
						default:
							throw (0,
								ie.RJ)(t),
							Error(`Unexpected slide type in UnitResultsSlide: ${t}`)
					}
				}
				)();
			return s.createElement("div", {
				...(0,
					_._q)(E.V.UnitTestResultsSlide),
				className: g.Z.slide
			}, s.createElement("div", {
				className: h.Z.wrap
			}, s.createElement("div", {
				className: h.Z.content
			}, l, s.createElement("h2", null, i))))
		}
			;
		var St = a(42269)
			, kt = a(66369)
			, Ct = a(74462)
			, xt = a(2439);
		const Tt = i.P1(p.np, (e => (0,
			X.Z7)(e, X.ZD.SessionEnd)))
			, wt = ({ adContent: e, children: t, containerRef: a, isPadded: n, slideElementKey: l }) => s.createElement("div", {
				className: r()(n ? g.Z["wrap-padded"] : g.Z.wrap, {
					[g.Z["full-width"]]: !e
				})
			}, s.createElement("div", {
				className: g.Z["player-container-main"],
				ref: a
			}, s.createElement(lt.Z, {
				animation: "slide",
				slideElementKey: l
			}, t)), e ? s.createElement("div", {
				className: g.Z["player-container-right"]
			}, e) : null)
			, Nt = ({ isDisplayed: e, onNextClick: t, setRibbonColor: a, slide: n, slideIndex: r }) => {
				const l = (0,
					b.Fx)(Ct.q0)
					, i = (0,
						b.Fx)(p.lA)
					, o = (0,
						b.Fx)(p.np)
					, c = (0,
						b.tX)();
				switch (n.type) {
					case "streakExtended":
						return s.createElement(dt.Z, {
							completedEarnbackStreakLength: n.completedEarnbackStreakLength,
							daysInCurrentStreak: n.daysInCurrentStreak,
							isEndOfPerfectWeek: n.isEndOfPerfectWeek,
							isPerfectStreakWeekLost: n.isPerfectStreakWeekLost,
							perfectWeekDay: n.perfectWeekDay,
							setRibbonColor: a,
							showEarnbackOffer: n.showEarnbackOffer,
							template: n.template,
							updatedXpPerDay: n.updatedXpPerDay,
							user: o
						});
					case "levelUpChest":
						return s.createElement(N, {
							currencyReward: n.currencyReward,
							rewardType: n.rewardType
						});
					case "earlyStreakMilestonePrompt":
						return s.createElement(ot.ZP, {
							...n,
							onSelection: e => {
								c({
									selectedStreakGoal: e.tier,
									slideIndex: r,
									type: "SET_SELECTED_STREAK_GOAL"
								})
							}
						});
					case "dailyRefreshOnboarding":
						return s.createElement(O, null);
					case "courseCompletionTrophy":
						return s.createElement(F, null);
					case "chestLingotsReward":
						return s.createElement(We, {
							animate: !0,
							currencyAmount: n.new_rupees || 0,
							isDisplayed: e,
							reward: n.reward,
							type: "gems"
						});
					case "streakFreezeChestReward":
						return s.createElement(We, {
							animate: !0,
							currencyAmount: 0,
							isDisplayed: e,
							type: "streakFreeze"
						});
					case "achievementUnlocked":
						return s.createElement(k, {
							achievement: n.achievement
						});
					case "schoolsClassroomLeaderboardMoveUp":
						return s.createElement(Ve.Z, {
							classroomLeaderboard: n.classroomLeaderboard,
							totalSessionXpGain: n.totalSessionXpGain
						});
					case "streakFreezeGift":
						return s.createElement(it.Z, {
							quantity: n.quantity
						});
					case "placementConfirmation":
						return s.createElement(Le, {
							sectionNumber: n.sectionNumber
						});
					case "finalLevelFailed":
						return s.createElement(ue, null);
					case "finalLevelLesson":
						return s.createElement(ce, {
							levelData: i.levelData,
							onNextClick: t,
							unitIndex: n.unitIndex,
							unitNumber: n.unitNumber
						});
					case "finalLevelPartialXp":
						return s.createElement(ge, null);
					case "mistakesInboxEmpty":
						return s.createElement(xe, null);
					case "checkpointComplete":
						return s.createElement(bt, {
							sectionNumber: null == n ? void 0 : n.sectionNumber,
							type: n.view,
							unitIndex: n.unitIndex,
							unitNumber: n.unitNumber
						});
					case "friendStreakInviteOffer":
						return s.createElement(H.Z, {
							initialInvitesRemaining: n.initialInvitesRemaining,
							initialPotentialMatches: n.potentialMatches
						});
					case "friendStreakUpdate":
						return s.createElement(B.Z, {
							friendStreakData: n.friendStreakInfo
						});
					case "leaderboardDemoZone":
					case "leaderboardPromoZone":
					case "leaderboardRankIncreaseLarge":
					case "leaderboardRankIncreaseSmall":
					case "leaderboardTopThree":
					case "leaderboardJoin":
					case "leaderboardMoveUpPrompt":
						return s.createElement(te.Z, {
							lastPositionSeen: n.lastPositionSeen,
							lastScoreSeen: n.lastScoreSeen,
							type: n.type
						});
					case "monthlyGoal":
						return s.createElement(we.Z, {
							isDisplayed: e,
							newProgress: n.newProgress,
							oldProgress: n.oldProgress
						});
					case "dailyQuestComplete":
					case "dailyQuestFirst":
					case "dailyQuestHalfway":
						return s.createElement(A.Z, {
							availableQuests: n.availableQuests,
							difficulty: n.difficulty,
							numQuestsCompleted: n.numQuestsCompleted,
							oldProgress: n.oldProgress
						});
					case "dailyQuestReward":
						return s.createElement(Z.Z, {
							dailyQuestRewards: n.dailyQuestRewards
						});
					case "sessionComplete":
						return s.createElement($e.Z, {
							isDisplayed: e,
							player: i,
							user: o,
							xpSessionProgress: n.xpGoalSessionProgress
						});
					case "heartRefill":
						return s.createElement(z, {
							remaining: l.hearts,
							total: l.maxHearts
						});
					case "milestoneStreakFreeze":
						return s.createElement(be.Z, null);
					case "streakNudge":
						return s.createElement(ct.Z, {
							daysInCurrentStreak: n.daysInCurrentStreak,
							template: n.template,
							updatedXpPerDay: n.updatedXpPerDay,
							user: o
						});
					case "streakSocietyFreezes":
						return s.createElement(ut.Z, null);
					case "streakSocietyVip":
						return s.createElement(gt.Z, {
							years: 1
						});
					case "streakSocietyVipUpdate":
						return s.createElement(gt.Z, {
							years: n.years
						});
					case "streakSocietyWelcomeChest":
						return s.createElement(ht.Z, null);
					case "streakSocietyProgress":
						return s.createElement(pt.Z, {
							currentStreak: n.streak,
							currentStreakStartDate: n.currentStreakStartDate,
							nextRewardMilestone: n.nextRewardMilestone
						});
					case "friendsQuestComplete":
					case "friendsQuestProgress":
						return s.createElement(G.Z, {
							friendUser: n.friendUser,
							isComplete: "friendsQuestComplete" === n.type,
							metric: n.metric,
							questThreshold: n.threshold,
							totalProgress: n.totalProgress,
							userProgress: n.userProgress
						});
					case "friendsQuestGift":
						return s.createElement(U.Z, {
							friendUser: n.friendUser
						});
					case "friendsQuestReward":
						return s.createElement(W.Z, null);
					default:
						return (0,
							ie.RJ)(n),
							null
				}
			}
			, Rt = ({ currentSlide: e, isPadded: t, nativeAd: a, onNextClick: n, setRibbonColor: r, slideData: i }) => {
				const m = (0,
					b.tX)()
					, h = (0,
						b.Fx)(void 0 === a ? () => null : Tt)
					, v = (0,
						b.Fx)(rt.tE)
					, f = (0,
						b.Fx)(p.lA)
					, [_, E] = s.useState()
					, k = (() => {
						const t = i[e];
						if (void 0 === t)
							return void (0,
								Q.Kp)("EndCarousel: slide is undefined", {
									data: {
										currentSlide: e,
										slideDataLength: i.length
									},
									once: !0
								});
						const a = t.type;
						switch (a) {
							case "createProfile":
								return s.createElement(ft, {
									onNextClick: n
								});
							case "immersivePlus":
								return (0,
									l.createPortal)(s.createElement(ee, {
										onClose: n
									}), document.querySelector("#overlays"));
							case "finalLevelPromotion":
								return s.createElement(ye, {
									levelData: f.levelData,
									onClose: n
								});
							case "monthlyChallengeComplete":
								return (0,
									l.createPortal)(s.createElement(Te.Z, {
										oldProgress: t.oldProgress,
										onClose: n
									}), document.querySelector("#overlays"));
							case "plusNewYears":
							case "plusPromoCarousel":
							case "plusPromoInterstitial":
								return (0,
									l.createPortal)(s.createElement(st, {
										onClose: n,
										shouldShowVideo: "plusPromoInterstitial" === a
									}), document.querySelector("#overlays"));
							case "practiceHubPromo":
								return s.createElement(Ue, {
									onClose: n
								});
							case "streakSociety":
								return (0,
									l.createPortal)(s.createElement(mt.Z, {
										onClose: n,
										streak: t.streak
									}), document.querySelector("#overlays"));
							case "scoreProgressTouchPoint":
								return (0,
									l.createPortal)(s.createElement(ze.Z, {
										onNextClick: n,
										variant: t.variant
									}), document.querySelector("#overlays"));
							case "scoreLinkedinSync":
								return (0,
									l.createPortal)(s.createElement(u.Z, {
										entryPoint: "session_end",
										onFinish: n,
										onQuit: n,
										variant: "session_end"
									}), document.querySelector("#overlays"));
							default:
								return
						}
					}
					)()
					, C = void 0 !== _ && !k;
				(0,
					St.Z)(),
					(0,
						d.Z)({
							engagementOverride: "game"
						}),
					s.useEffect((() => () => {
						m(kt.y())
					}
					), []),
					s.useEffect((() => {
						!1 === _ && v && (0,
							S.track)("premium_ad_show", {
								iap_context: "session_end_ad"
							})
					}
					), [_]),
					s.useEffect((() => {
						const t = i[e];
						void 0 !== t && m({
							slide: t,
							timestamp: Date.now(),
							tracking: {},
							type: "sessionEnd/SLIDE_SHOWN"
						})
					}
					), [e]),
					s.useEffect((() => {
						if (a && C)
							return m({
								slide: a,
								timestamp: Date.now(),
								type: "sessionEnd/SLIDE_SHOWN"
							}),
								() => {
									m({
										slide: a,
										timestamp: Date.now(),
										type: "sessionEnd/SLIDE_HIDDEN"
									})
								}
					}
					), [a, C]);
				const x = s.useRef(null);
				if (s.useLayoutEffect((() => {
					setTimeout((() => {
						x.current && (x.current.scrollLeft = 0)
					}
					))
				}
				), [x.current]),
					k)
					return k;
				const T = i[e];
				return void 0 === T ? null : s.createElement(wt, {
					adContent: h ? _ ? s.createElement("div", {
						className: g.Z["ad-block-ad-container"]
					}, s.createElement(o.Z, {
						placement: X.ZD.SessionEnd
					})) : s.createElement(s.Fragment, null, s.createElement(c.Z, {
						adUnit: h,
						onWhetherBlocked: E,
						placement: X.ZD.SessionEnd
					}), v ? s.createElement("span", {
						className: g.Z["remove-ads"],
						onClick: () => (0,
							xt.jF)({
								trackingProps: {
									iap_context: "session_end_ad"
								}
							}, m)
					}, (0,
						y._i)(2809)) : null) : null,
					containerRef: x,
					isPadded: t,
					slideElementKey: e
				}, "createProfile" === T.type || "immersivePlus" === T.type || "finalLevelPromotion" === T.type || "monthlyChallengeComplete" === T.type || "plusNewYears" === T.type || "plusPromoCarousel" === T.type || "plusPromoInterstitial" === T.type || "practiceHubPromo" === T.type || "streakSociety" === T.type || "scoreProgressTouchPoint" === T.type || "scoreLinkedinSync" === T.type ? null : s.createElement(Nt, {
					isDisplayed: !0,
					onNextClick: n,
					setRibbonColor: r,
					slide: T,
					slideIndex: e
				}))
			}
	}
	,
	79741: (e, t, a) => {
		a.d(t, {
			Z: () => N
		});
		var n = a(27378)
			, r = a(55160)
			, s = a(56435)
			, l = a(22498)
			, i = a(40736)
			, o = a(44451)
			, c = a(15746)
			, d = a(75744)
			, u = a(47748);
		const m = {
			image: "_3rnxr",
			"image-container": "_2qg6J",
			"image-hidden": "zVfKQ _3rnxr",
			lottie: "_1MCEN _3rnxr",
			"lottie-hidden": "_3eo5A _1MCEN _3rnxr",
			popover: "_44BHt",
			"bubble-content": "bvSrT",
			"popover-icons": "_3Hvln",
			wrap: "_31yjb"
		};
		var p = a(4368)
			, g = a(95332)
			, h = a(18728)
			, v = a(37971)
			, f = a(53229)
			, _ = a(95940)
			, E = a(67116)
			, y = a(1398)
			, b = a(58576)
			, S = a(74597);
		let k;
		var C = a(71371)
			, x = a(18804)
			, T = a(79465);
		const w = (0,
			y.ZP)((() => a.e(5634).then(a.bind(a, 25634))))
			, N = ({ additionalButton: e, audioEl: t = n.createRef(), character: y, children: N, correct: R, hasOnlyIcons: I, hasTransliterations: L, isMathChallenge: P = !1, lang: F, leadingVisual: A, tightContentSpacing: Z = !1 }) => {
				const D = (0,
					x.tX)()
					, M = (0,
						x.Fx)((e => [v.c.Guessing, v.c.Showing].includes(e.player.status)))
					, O = (0,
						x.Fx)((e => e.player.session.ttsAnnotations))
					, H = (0,
						x.Fx)((e => e.ui.viewportHeight))
					, B = (0,
						x.Fx)((e => e.ui.viewportWidth))
					, U = (0,
						c.Z)()
					, [G, W] = n.useState()
					, [V, z] = n.useState(!1)
					, [$, K] = n.useState(!1)
					, [j, q] = n.useState(!1)
					, [X, Y] = n.useState(!1)
					, [Q, J] = n.useState()
					, ee = n.useRef(!1)
					, [te, ae] = n.useState(!1)
					, [ne, re] = n.useState(!1)
					, se = n.useRef(null)
					, le = n.useRef(null)
					, ie = U ? void 0 : y.riveAnimation
					, oe = (0,
						h.lQ)(u.k, null == ie ? void 0 : ie.url)
					, ce = U || ie ? void 0 : !0 === R ? y.correctAnimation : !1 === R ? y.incorrectAnimation : void 0
					, de = !ce
					, ue = n.useRef(ce);
				ue.current = ce;
				const me = U || ie ? void 0 : y.idleAnimation
					, pe = (0,
						h.lQ)(d.i, me)
					, ge = (e => {
						const t = e && S.Z.firefox
							, [r, s] = n.useState();
						return n.useEffect((() => {
							if (!t)
								return;
							let e = !1;
							return (null != k || (k = a.e(7450).then(a.t.bind(a, 1857, 23)).then((e => e.default.loadAnimation)).catch((e => {
								throw k = void 0,
								e
							}
							))),
								k).then((t => {
									e || s((() => t))
								}
								), (e => {
									(0,
										b.vU)("Failed to load lottie_light_canvas chunk", {
											ex: e instanceof Error ? e : Error(String(e)),
											once: !0
										})
								}
								)),
								() => {
									e = !0
								}
						}
						), [t]),
							t ? {
								loadAnimation: r,
								renderer: r ? "canvas" : void 0
							} : {
								loadAnimation: void 0,
								renderer: void 0
							}
					}
					)(P);
				(0,
					o.Z)("JuicyCharacter"),
					n.useLayoutEffect((() => {
						if (se.current && le.current) {
							const e = se.current.getBoundingClientRect()
								, t = le.current.getBoundingClientRect()
								, a = s.v[g.F[y.name]];
							W(void 0 === a ? void 0 : a / 175 * t.height - e.top + t.top)
						}
					}
					), [H, B]),
					n.useEffect((() => {
						D({
							type: "CHALLENGE_WORLD_CHARACTER_SHOWN",
							wasShown: !V
						})
					}
					), [V]),
					n.useEffect((() => {
						ce ? J(ce) : ee.current || (J(void 0),
							Y(!1))
					}
					), [ce]),
					n.useEffect((() => {
						void 0 === me && void 0 === ie || C.Z.start("character_animation_play")
					}
					), [me, ie]),
					n.useEffect((() => {
						(te || ne) && C.Z.finish("character_animation_play")
					}
					), [te, ne]);
				const he = n.createElement("img", {
					alt: "",
					className: m["image" + (V ? "-hidden" : "")],
					onError: () => z(!0),
					src: y.image.svg
				})
					, ve = me && !$ || ie && !j ? ie && oe && O ? n.createElement(n.Suspense, {
						fallback: null
					}, n.createElement(w, {
						animation: ie,
						audioEl: t,
						buffer: oe,
						correct: R,
						onLoadError: () => q(!0),
						onPlay: () => re(!0),
						ttsAnnotations: O
					})) : pe ? n.createElement(n.Suspense, {
						fallback: null
					}, n.createElement(l.Z, {
						animationData: pe,
						className: m.lottie,
						isPlaying: !0,
						loadAnimation: ge.loadAnimation,
						onDataFailed: () => K(!0),
						onSegmentStart: () => ae(!0),
						renderer: ge.renderer
					})) : null : he;
				return n.createElement("div", {
					className: m.wrap
				}, n.createElement("div", {
					className: m["image-container"],
					ref: le
				}, n.createElement(i.Z, {
					fallback: he
				}, X ? null : ve, Q ? n.createElement(n.Suspense, {
					fallback: null
				}, n.createElement(l.Z, {
					className: m["lottie" + (X ? "" : "-hidden")],
					isPlaying: !M || de,
					loadAnimation: ge.loadAnimation,
					onComplete: () => {
						ee.current = !1,
							ue.current || (J(void 0),
								Y(!1))
					}
					,
					onDataFailed: () => (0,
						T.track)("lottie_download_failure", {
							offline: !navigator.onLine,
							path: Q,
							type: "in_lesson_character_graded"
						}),
					onSegmentStart: () => {
						ee.current = !0,
							Y(!0)
					}
					,
					path: (0,
						f.qy)(Q),
					renderer: ge.renderer
				})) : null)), I ? n.createElement(r.Z, {
					className: m.popover,
					direction: "right",
					innerClassName: m["popover-icons"],
					manualPositioning: !0,
					stemContainerStyle: {
						top: `calc(50% - ${p.Z["margin-popover-stem"]})`,
						transform: `translateY(-50%) rotate(${_.lw ? "" : "-"}90deg)`
					},
					zIndex: parseInt(p.Z["z-index-popover"], 10)
				}, N) : n.createElement(s.Z, {
					alignment: G,
					className: m.popover,
					dir: (0,
						E.Ux)(F),
					lang: F,
					leadingVisual: A,
					ref: se,
					secondaryAction: e,
					textType: L ? "hint-transliterations" : "hint"
				}, Z ? n.createElement("div", {
					className: m["bubble-content"]
				}, N) : N))
			}
	}
	,
	24204: (e, t, a) => {
		a.d(t, {
			Z: () => d
		});
		var n = a(27378)
			, r = a(36666)
			, s = a(3291)
			, l = a(31809)
			, i = a(94369);
		var o = a(95940)
			, c = a(35160);
		const d = () => n.createElement(l.Z, {
			animation: "immediate",
			className: "D6Hkb",
			closeStyle: "hidden",
			modalName: c.t.MathHint
		}, (({ modalOptions: e, onDismiss: t }) => n.createElement("div", {
			className: "_1sNtQ"
		}, n.createElement("div", {
			className: "tba3_"
		}, n.createElement("img", {
			alt: "Hint",
			className: "_1N4Wh",
			src: i
		}), n.createElement("h1", {
			className: "_3C2Tn"
		}, "HINT")), n.createElement("div", {
			className: "_78_TR"
		}, n.createElement(s.Z, {
			allowWrap: !0,
			math: e.hint.explanation.value
		})), e.hint.body ? n.createElement("div", {
			className: "_1r301"
		}, n.createElement(s.Z, {
			math: e.hint.body.value
		})) : null, n.createElement(r.Z, {
			color: "macaw",
			onClick: t,
			variant: "solid"
		}, (0,
			o._i)(19889)))))
	}
	,
	81553: (e, t, a) => {
		a.d(t, {
			Z: () => l
		});
		var n = a(27378)
			, r = a(21184)
			, s = a(75073);
		const l = ({ classroomLeaderboard: e, animationsDisabledDebugOnly: t = !1, totalSessionXpGain: a }) => n.createElement("div", {
			className: s.Z.slide
		}, n.createElement(r.Z, {
			animationsDisabledDebugOnly: t,
			classroomLeaderboard: e,
			totalSessionXpGain: a
		}))
	}
	,
	17413: (e, t, a) => {
		a.d(t, {
			Z: () => T
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(53913)
			, i = a(8069)
			, o = a(36666)
			, c = a(92882)
			, d = a(42659)
			, u = a(93540);
		const m = a.p + "rive/4c0a8480163239c8cc1e57b5002d613f.riv"
			, p = "PAfwV"
			, g = "GGk-l"
			, h = "_38Xmk"
			, v = "_3FW0X"
			, f = "_3J9PI"
			, _ = "_3c2YA";
		var E = a(95940)
			, y = a(67116)
			, b = a(12408)
			, S = a(14817)
			, k = a(18804);
		const C = "state machine 1"
			, x = {
				bea: 2,
				duo: 1,
				eddy: 4,
				falstaff: 9,
				junior: 2,
				lily: 3,
				lin: 6,
				lucy: 6,
				oscar: 8,
				vikram: 7,
				zari: 5
			}
			, T = ({ onNextClick: e, variant: t }) => {
				const a = s.useRef(null)
					, n = (0,
						k.Fx)(d.fN)
					, [T, w] = s.useState(!1)
					, N = (0,
						k.Fx)(u.db)
					, R = (0,
						k.Fx)(u.cb)
					, I = null == N ? void 0 : N.reachedScore
					, L = null == N ? void 0 : N.learningScore;
				if (!n)
					throw Error("Language score not supported in non-language courses");
				const P = null == N ? void 0 : N.completedProgress
					, [F, A] = s.useState("unlock_first")
					, Z = (0,
						k.tX)();
				s.useEffect((() => {
					"unlock" === t && n.id && Z((0,
						c.W)({
							courseId: n.id
						}))
				}
				), [t, n.id, Z]);
				const D = e => s.createElement("div", {
					className: r()(g, "wd1hk"),
					ref: a
				}, s.createElement("div", {
					className: h
				}, s.createElement(i.Z, {
					lang: n.learningLanguage,
					size: 84
				}), s.createElement("div", {
					className: v
				}, s.createElement("span", {
					className: f
				}, I))), s.createElement("div", {
					className: _
				}, e))
					, M = (e, t) => s.createElement("div", {
						className: g,
						ref: a
					}, s.createElement("div", {
						className: h
					}, s.createElement(i.Z, {
						lang: n.learningLanguage,
						size: 84
					}), s.createElement("div", {
						className: v
					}, s.createElement("span", {
						className: f
					}, I))), s.createElement("div", {
						className: r()("rUAu-", {
							_2mhPj: "unlock" === e
						})
					}, s.createElement("div", {
						className: _
					}, t), s.createElement("div", {
						className: "_2PHy5"
					}, s.createElement("div", {
						className: p
					}, I), s.createElement(l.Z, {
						className: "_2WDe7",
						color: "owl",
						denominator: 1,
						numerator: null != P ? P : 0
					}), s.createElement("div", {
						className: p
					}, L))))
					, { RiveComponent: O, rive: H } = (0,
						S.useRive)({
							autoplay: !0,
							layout: new S.Layout({
								alignment: S.Alignment.Center,
								fit: S.Fit.FitHeight
							}),
							src: m,
							stateMachines: C
						});
				s.useLayoutEffect((() => {
					var e;
					const n = null == H ? void 0 : H.stateMachineInputs(C)
						, r = null == n ? void 0 : n.filter((e => e.type === S.StateMachineInputType.Trigger))
						, s = null == n ? void 0 : n.filter((e => e.type === S.StateMachineInputType.Number));
					if (s && a.current) {
						const t = a.current.getBoundingClientRect()
							, n = window.innerHeight
							, r = t.top - n / 768 * 100
							, l = Math.max(0, Math.min(100, r / n * 100))
							, i = s.find((e => "end_percent_num" === e.name));
						i && (i.value = l);
						const o = s.find((e => "intro_percent_num" === e.name));
						o && (o.value = l);
						const c = null !== (e = null == R ? void 0 : R.unitIndex) && void 0 !== e ? e : 0
							, d = (0,
								b.in)(c)
							, u = x[d.character]
							, m = s.find((e => "color_num" === e.name));
						m && (m.value = u)
					}
					if (H && r)
						switch (t) {
							case "unlock":
							case "increase":
								{
									const e = setTimeout((() => {
										(0,
											S.triggerInput)(r, "continue_trig")
									}
									), 500);
									return () => clearTimeout(e)
								}
						}
				}
				), [H, t, T, R]),
					s.useEffect((() => {
						switch (t) {
							case "unlock":
							case "increase":
								{
									const e = setTimeout((() => {
										w(!0)
									}
									), 4e3);
									return () => clearTimeout(e)
								}
							case "in_progress":
								w(!0)
						}
					}
					), [t]);
				const B = !("unlock" === t && "unlock_next" === F);
				return s.createElement("div", {
					className: "_1JAhp _2CoFd"
				}, B ? s.createElement("div", {
					className: "_2jSw4"
				}, s.createElement(O, null)) : null, s.createElement("div", {
					className: r()("_1rDNv", {
						_2EI9C: !T
					})
				}, (() => {
					switch (t) {
						case "unlock":
							switch (F) {
								case "unlock_first":
									return D((0,
										E._i)(51200, {
											language_name: (0,
												y.vY)(n.learningLanguage)
										}));
								case "unlock_next":
									return M("unlock", (0,
										E._i)(54793));
								default:
									return null
							}
						case "increase":
							return D((0,
								E._i)(53999, {
									language_name: (0,
										y.vY)(n.learningLanguage)
								}));
						case "in_progress":
							return M("in_progress", (0,
								E._i)(53997, {
									language_name: (0,
										y.vY)(n.learningLanguage)
								}));
						default:
							return null
					}
				}
				)(), s.createElement("div", {
					className: "rS1M4"
				}, s.createElement("div", {
					className: "_3R_x7"
				}, s.createElement(o.Z, {
					className: "_1gKir",
					onClick: () => {
						"unlock" === t && "unlock_first" === F ? A("unlock_next") : e()
					}
					,
					variant: "solid"
				}, (0,
					E._i)(4906))))))
			}
	}
	,
	66633: (e, t, a) => {
		a.r(t),
			a.d(t, {
				LoadingScreenOrSessionPage: () => Wi,
				SessionPageUi: () => Vi,
				default: () => $i
			});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(80254)
			, i = a(91374)
			, o = a(86441)
			, c = a(6590)
			, d = a(75193)
			, u = a(18239)
			, m = a(59175)
			, p = a(71129)
			, g = a(31801)
			, h = a(31809)
			, v = a(24582)
			, f = a(42659)
			, _ = a(55824)
			, E = a(5102)
			, y = a(4941);
		const b = a.p + "images/duoRadio/transcript/0e01f7914df57c608901e13c28a153e3.svg"
			, S = a.p + "images/duoRadio/transcript/3af65f06875f29b239a3a32e09b0683e.svg"
			, k = a.p + "images/duoRadio/transcript/99342a8c38d10f4d06bfc286180bcfb1.svg"
			, C = a.p + "images/duoRadio/transcript/79ab57b7ddc25026c6515bc824ccd5e8.svg"
			, x = a.p + "images/duoRadio/transcript/e781a2fac67587be0a446e62e129af4c.svg"
			, T = a.p + "images/duoRadio/transcript/30a87a863b988799415e30e2764e9de6.svg";
		var w = a(97005)
			, N = a(64106)
			, R = a(55443)
			, I = a(91766);
		const L = a.p + "images/duoRadio/transcript/328c5259cc366edc7dbe37af154380f8.svg"
			, P = a.p + "images/duoRadio/transcript/4effe23c9bf3e77d5378895825a9f5f3.svg"
			, F = a.p + "images/duoRadio/transcript/ca9f71a1e8369f84408e36a5764d56a6.svg"
			, A = a.p + "images/duoRadio/transcript/0c89cf8f71ff387c3dfdd3c712fadf66.svg"
			, Z = a.p + "images/duoRadio/transcript/acb2b3f99b71383b9731cb0d99d9918d.svg"
			, D = a.p + "images/duoRadio/transcript/9e0b2d67fc44c9bd020dff1b75ce7813.svg";
		var M = a(53018)
			, O = a(77480)
			, H = a(93900);
		const B = {
			header: "AZBIn",
			"title-card": "_3jDek",
			"line-content": "gWHGI",
			avatar: "_2NL1p",
			"speech-bubble": "e4zf_",
			modal: "yHk3t"
		};
		var U = a(451)
			, G = a(35160)
			, W = a(18804)
			, V = a(79465);
		const z = {
			0: T,
			1: b,
			2: C,
			3: x,
			4: k,
			5: S,
			6: P,
			7: Z,
			8: D,
			9: F,
			10: A,
			11: L
		}
			, $ = {
				0: _,
				1: I,
				2: N,
				3: H,
				4: O,
				5: w,
				6: E,
				7: M,
				8: y,
				9: R
			}
			, K = () => {
				const e = (0,
					W.Fx)(f.is);
				(0,
					v.L)(["reading"]);
				const t = z[e.avatarNum]
					, a = (() => {
						switch (!0) {
							case e.titleCardName.includes("Bea"):
								return 0;
							case e.titleCardName.toLowerCase().includes("lucy"):
								return 1;
							case e.titleCardName.toLowerCase().includes("lily"):
								return 2;
							case e.titleCardName.includes("Zari"):
								return 3;
							case e.titleCardName.toLowerCase().includes("vikram"):
								return 4;
							case e.titleCardName.includes("Junior"):
								return 5;
							case e.titleCardName.includes("Eddy"):
								return 6;
							case e.titleCardName.includes("Oscar"):
								return 7;
							case e.titleCardName.includes("Falstaff"):
								return 8;
							case e.titleCardName.includes("Lin"):
								return 9;
							default:
								throw Error(`Invalid title card name: ${e.titleCardName}`)
						}
					}
					)()
					, n = $[a]
					, [r, l] = s.useState(!1)
					, [i, o] = s.useState(!1)
					, [c = !1, d] = (0,
						g.Z)();
				c && !i && o(!0);
				const u = s.useRef(r)
					, m = s.useRef(i)
					, p = s.useRef(Date.now());
				return s.useEffect((() => {
					if (r)
						return;
					const e = () => {
						l(!0)
					}
						;
					return window.addEventListener("scroll", e),
						() => {
							window.removeEventListener("scroll", e)
						}
				}
				), [r]),
					s.useEffect((() => {
						u.current = r,
							m.current = i
					}
					), [r, i]),
					s.useEffect((() => () => {
						const e = Date.now() - p.current;
						(0,
							V.track)("duo_radio_transcript_show", {
								scroll: u.current,
								scroll_to_bottom: m.current,
								time_taken: e
							})
					}
					), []),
					s.createElement(s.Fragment, null, s.createElement("img", {
						className: B["title-card"],
						src: (0,
							U.XA)(e.titleCardName)
					}), s.createElement("div", {
						className: B.header
					}, e.transcript.title), s.createElement("div", {
						className: B.wrap
					}, e.transcript.elements.map(((a, r) => {
						const l = r === e.transcript.elements.length - 1;
						return s.createElement("div", {
							className: B["line-content"],
							key: r,
							ref: l ? d : null
						}, s.createElement("img", {
							className: B.avatar,
							src: "GUEST" === a.type ? t : n
						}), s.createElement("div", {
							className: B["speech-bubble"]
						}, a.text))
					}
					))))
			}
			, j = () => {
				const e = (0,
					W.Fx)(f.$4);
				return s.createElement(h.Z, {
					className: e ? B.modal : void 0,
					isFullscreen: !e,
					modalName: G.t.DuoRadioTranscript
				}, (() => s.createElement(K, null)))
			}
			;
		var q = a(36666);
		const X = "_2pgzh"
			, Y = "jq5nJ"
			, Q = "_3yKR9"
			, J = "_2ncr8";
		var ee = a(95940);
		const te = [{
			stringId: 65700,
			type: "VISUAL_INTERACTION"
		}, {
			stringId: 65757,
			type: "NONSENSE_QUESTION"
		}, {
			stringId: 65698,
			type: "WRONG_ACCEPTED"
		}, {
			stringId: 65697,
			type: "NOT_ACCEPTED"
		}, {
			stringId: 65702,
			type: "OTHER_ISSUE"
		}]
			, ae = ({ checked: e, description: t, onChange: a }) => s.createElement("label", {
				className: Y
			}, s.createElement("input", {
				checked: e,
				onChange: e => a(e.target.checked),
				type: "checkbox"
			}), s.createElement("span", {
				className: Q
			}, t))
			, ne = ({ modalOptions: { challenge: e, onReport: t }, onDismiss: a }) => {
				const n = (0,
					W.Fx)(f.lA)
					, [r, l] = s.useState({})
					, i = te.map((({ type: e }) => e)).filter((e => r[e]));
				return s.createElement(s.Fragment, null, te.map((({ stringId: e, type: t }) => {
					var a;
					return s.createElement(ae, {
						checked: null !== (a = r[t]) && void 0 !== a && a,
						description: (0,
							ee._i)(e),
						key: t,
						onChange: e => l((a => ({
							...a,
							[t]: e
						})))
					})
				}
				)), s.createElement(q.Z, {
					className: J,
					disabled: 0 === i.length,
					onClick: () => {
						i.forEach((t => {
							var a, r, s, l, i;
							return (0,
								V.track)("math_challenge_report_submitted", {
									challenge_id: e.id,
									level_index_in_unit: null === (a = n.levelData) || void 0 === a ? void 0 : a.levelIndex,
									report_type: t,
									skill_id: null === (r = n.session.trackingProperties) || void 0 === r ? void 0 : r.skill_id,
									skill_tree_id: null === (s = n.session.trackingProperties) || void 0 === s ? void 0 : s.skill_tree_id,
									type: null === (l = n.session.trackingProperties) || void 0 === l ? void 0 : l.type,
									unit_index: null === (i = n.levelData) || void 0 === i ? void 0 : i.unitIndex
								})
						}
						)),
							null == t || t(),
							a()
					}
					,
					variant: "solid"
				}, (0,
					ee._i)(19532)))
			}
			, re = () => s.createElement(h.Z, {
				className: X,
				modalName: G.t.MathReport
			}, (({ modalOptions: e, onDismiss: t }) => s.createElement(ne, {
				modalOptions: e,
				onDismiss: t
			})));
		var se = a(18225)
			, le = a(70732)
			, ie = a(67116)
			, oe = a(58576)
			, ce = a(11811);
		const de = {
			[se.Vi.ChallengeReports.BAD_AUDIO]: 2097,
			[se.Vi.ChallengeReports.BAD_HINTS]: 11680,
			[se.Vi.ChallengeReports.BAD_IMAGE]: 9827,
			[se.Vi.ChallengeReports.BAD_OPTION]: 14416,
			[se.Vi.ChallengeReports.BAD_PROMPT]: 3070,
			[se.Vi.ChallengeReports.CHARACTER_DISPLAY]: 23355,
			[se.Vi.ChallengeReports.MISSING_AUDIO]: 16022,
			[se.Vi.ChallengeReports.MISSING_HINTS]: 3171,
			[se.Vi.ChallengeReports.MISSING_IMAGE]: 6243,
			[se.Vi.ChallengeReports.NOT_ACCEPTED]: 14239,
			[se.Vi.ChallengeReports.OFFENSIVE_OPTION]: 1812,
			[se.Vi.ChallengeReports.OTHER_ISSUE]: 9011,
			[se.Vi.ChallengeReports.WRONG_ACCEPTED]: 17798
		}
			, ue = ({ challenge: e, checked: t, learningLanguage: a, name: n, onChange: r }) => {
				const l = e.sourceLanguage || a;
				return s.createElement("label", {
					className: Y
				}, s.createElement("input", {
					checked: t,
					onChange: e => r(e.target.checked),
					type: "checkbox"
				}), s.createElement("span", {
					className: Q
				}, (0,
					ee._i)(de[n], {
						language_name: (0,
							ie.vY)(l)
					})))
			}
			;
		class me extends s.Component {
			constructor() {
				super(...arguments),
					this.state = {
						fields: l.Xc(se.Vi.ChallengeReports, (() => !1))
					}
			}
			render() {
				const { learningLanguage: e, modalOptions: { challenge: t, onReport: a }, onDismiss: n, player: r } = this.props
					, { fields: i } = this.state
					, o = l.XP(i).filter((e => i[e]));
				return s.createElement(s.Fragment, null, (e => (0,
					le.w6)({
						challenge: e
					}).filter((t => {
						var a, n;
						return t === se.Vi.ChallengeReports.NOT_ACCEPTED ? !(null === (a = e.gradingResult) || void 0 === a ? void 0 : a.correct) : t === se.Vi.ChallengeReports.WRONG_ACCEPTED ? null === (n = e.gradingResult) || void 0 === n ? void 0 : n.correct : t === se.Vi.ChallengeReports.BAD_AUDIO || t === se.Vi.ChallengeReports.MISSING_AUDIO ? (e => {
							var t, a, n;
							switch (e.type) {
								case ce.Sm.Assist:
								case ce.Sm.TransliterationAssist:
									return e.options.some((e => e.tts));
								case ce.Sm.CharacterIntro:
								case ce.Sm.Listen:
								case ce.Sm.ListenComplete:
								case ce.Sm.ListenComprehension:
								case ce.Sm.SelectTranscription:
								case ce.Sm.Speak:
								case ce.Sm.Translate:
									return e.tts;
								case ce.Sm.CharacterMatch:
									return null === (t = e.pairs) || void 0 === t ? void 0 : t.some((e => e.tts));
								case ce.Sm.CharacterSelect:
								case ce.Sm.Select:
								case ce.Sm.SelectPronunciation:
								case ce.Sm.TapComplete:
								case ce.Sm.TapDescribe:
									return null === (a = e.choices) || void 0 === a ? void 0 : a[0].tts;
								case ce.Sm.Match:
									return null === (n = e.pairs) || void 0 === n ? void 0 : n.some((e => e.tts));
								default:
									return !1
							}
						}
						)(e) : t === se.Vi.ChallengeReports.BAD_HINTS || t === se.Vi.ChallengeReports.MISSING_HINTS ? (e => {
							var t, a, n, r, s, l, i, o, c, d, u, m, p;
							switch (e.type) {
								case ce.Sm.Dialogue:
									return null === (r = null === (n = null === (a = null === (t = e.dialogue) || void 0 === t ? void 0 : t[0]) || void 0 === a ? void 0 : a.hintTokens) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.hintTable;
								case ce.Sm.Definition:
									return null === (l = null === (s = e.displayTokens) || void 0 === s ? void 0 : s[0]) || void 0 === l ? void 0 : l.hintToken;
								case ce.Sm.GapFill:
								case ce.Sm.TapComplete:
								case ce.Sm.Translate:
								case ce.Sm.CompleteReverseTranslation:
									return null === (o = null === (i = e.tokens) || void 0 === i ? void 0 : i[0]) || void 0 === o ? void 0 : o.hintTable;
								case ce.Sm.ListenComprehension:
									return null === (d = null === (c = e.questionTokens) || void 0 === c ? void 0 : c[0]) || void 0 === d ? void 0 : d.hintTable;
								case ce.Sm.ReadComprehension:
									return null !== (m = null === (u = e.questionTokens) || void 0 === u ? void 0 : u[0].hintTable) && void 0 !== m ? m : null === (p = e.passageTokens) || void 0 === p ? void 0 : p[0].hintTable;
								default:
									return !1
							}
						}
						)(e) : t === se.Vi.ChallengeReports.BAD_IMAGE || t === se.Vi.ChallengeReports.MISSING_IMAGE ? (e => {
							switch (e.type) {
								case ce.Sm.FreeResponse:
								case ce.Sm.TapComplete:
								case ce.Sm.TapDescribe:
									return e.image;
								case ce.Sm.Name:
									return e.images;
								case ce.Sm.Select:
									return e.choices[0] && (e.choices[0].image || e.choices[0].svg);
								default:
									return !1
							}
						}
						)(e) : ((0,
							oe.Kp)(`Conditional Report Type "${t}" is not mapped to criteria.`),
							!1)
					}
					)))(t).map(((a, n) => s.createElement(ue, {
						challenge: t,
						checked: i[a],
						key: n,
						learningLanguage: e,
						name: a,
						onChange: e => this.setState((t => ({
							fields: {
								...t.fields,
								[a]: e
							}
						})))
					}))), (0,
						le.uZ)({
							challenge: t
						}).map(((a, n) => s.createElement(ue, {
							challenge: t,
							checked: i[a],
							key: n,
							learningLanguage: e,
							name: a,
							onChange: e => this.setState((t => ({
								fields: {
									...t.fields,
									[a]: e
								}
							})))
						}))), s.createElement(q.Z, {
							className: J,
							disabled: !o.length,
							onClick: () => {
								o.forEach((e => {
									var a, n, s, l, i, o;
									return (0,
										V.track)("submit suggestion/feedback", {
											challenge_id: t.id,
											level_index_in_unit: null === (a = r.levelData) || void 0 === a ? void 0 : a.levelIndex,
											report_type: e,
											skill_id: null === (n = r.session.trackingProperties) || void 0 === n ? void 0 : n.skill_id,
											skill_name: null === (s = r.session.trackingProperties) || void 0 === s ? void 0 : s.skill_name,
											skill_tree_id: null === (l = r.session.trackingProperties) || void 0 === l ? void 0 : l.skill_tree_id,
											type: null === (i = r.session.trackingProperties) || void 0 === i ? void 0 : i.type,
											unit_index: null === (o = r.levelData) || void 0 === o ? void 0 : o.unitIndex
										})
								}
								)),
									se.Vi.reportSentence(t, o.sort()),
									null == a || a(),
									n()
							}
							,
							variant: "solid"
						}, (0,
							ee._i)(19532)))
			}
		}
		const pe = () => {
			const e = (0,
				W.Fx)(f.lA)
				, t = (0,
					W.Fx)(f.iH);
			return void 0 === t ? null : s.createElement(h.Z, {
				className: X,
				modalName: G.t.ReportSentence
			}, (({ modalOptions: a, onDismiss: n }) => s.createElement(me, {
				learningLanguage: t,
				modalOptions: a,
				onDismiss: n,
				player: e
			})))
		}
			;
		var ge = a(64502)
			, he = a(29857)
			, ve = a(74661)
			, fe = a(29531)
			, _e = a(52761)
			, Ee = a(79741);
		const ye = ({ audio: e, onClick: t, onTryPlay: a, slowAudio: n, soundOptions: r, ttsTrackingData: l, variant: i }) => {
			const o = s.createElement(he.Z, {
				audio: e,
				autoplay: !0,
				onClick: t,
				onTryPlay: a,
				soundOptions: r,
				ttsTrackingData: l,
				type: "medium",
				useKeyboardShortcut: !0,
				variant: i
			})
				, c = n ? s.createElement(he.Z, {
					audio: n,
					onClick: t,
					onTryPlay: a,
					soundOptions: r,
					ttsTrackingData: l,
					type: "slow",
					useKeyboardShortcut: !0,
					variant: i
				}) : null;
			return "in-audio-bubble" === i ? s.createElement(s.Fragment, null, s.createElement("span", null, o), c ? s.createElement("span", null, c) : null) : s.createElement("div", {
				className: "_3qAs-"
			}, o, c ? s.createElement("div", {
				className: "g8o0T"
			}, c) : null)
		}
			;
		var be = a(42804)
			, Se = a(4478)
			, ke = a(15746);
		const Ce = ({ from: e, fromWordBank: t, secondary: a, selected: n, shouldFly: r }) => e && r ? n ? {
			from: e,
			fromWordBank: t,
			name: "FLY_INTO_PLACE",
			secondary: a
		} : {
			from: e,
			name: "FLY_BACK"
		} : n ? {
			name: "FADE_OUT_HIGHLIGHT"
		} : void 0
			, xe = ({ dragIndex: e, dragTarget: t, isFlyEnabled: a, selectedIndices: n, selectedTokenRefs: r, tokens: i, unselectedTokenRefs: o }) => {
				const c = (0,
					ke.Z)()
					, [d, u] = s.useState([])
					, [m, p] = s.useState([])
					, g = s.useRef()
					, h = s.useRef([])
					, v = s.useRef()
					, f = new Array(i).fill(0).map(((a, r) => e === r ? "dragging" : t === n.indexOf(r) && t > -1 ? "offset" : n.includes(r) ? "selected" : "unselected"));
				return s.useEffect((() => {
					h.current = r.map((e => {
						var t;
						return null === (t = null == e ? void 0 : e.el) || void 0 === t ? void 0 : t.getBoundingClientRect()
					}
					))
				}
				)),
					s.useLayoutEffect((() => {
						var e, t, r, s;
						if (g.current && v.current && !l.Xy(v.current, f)) {
							const n = d.slice()
								, l = m.slice();
							for (let d = 0; d < i; d++) {
								const i = f[d]
									, u = v.current[d];
								if (i === u)
									continue;
								const m = g.current.indexOf(d)
									, p = a && !c;
								"dragging" === i ? (n[d] = void 0,
									l[d] = void 0) : "offset" === i ? (n[d] = Ce({
										from: h.current[m],
										secondary: !0,
										selected: !0,
										shouldFly: p
									}),
										l[d] = void 0) : "selected" === i && "dragging" === u ? (n[d] = Ce({
											from: null === (e = o[d]) || void 0 === e ? void 0 : e.releasedAtRect,
											fromWordBank: !0,
											selected: !0,
											shouldFly: p
										}),
											l[d] = void 0) : "selected" === i && "offset" === u ? (n[d] = Ce({
												from: h.current[m],
												secondary: !0,
												selected: !0,
												shouldFly: p
											}),
												l[d] = void 0) : "selected" === i && "unselected" === u ? (n[d] = Ce({
													from: null === (r = null === (t = o[d]) || void 0 === t ? void 0 : t.el) || void 0 === r ? void 0 : r.getBoundingClientRect(),
													fromWordBank: !0,
													selected: !0,
													shouldFly: p
												}),
													l[d] = void 0) : "unselected" === i && "dragging" === u ? (n[d] = void 0,
														l[d] = Ce({
															from: null === (s = o[d]) || void 0 === s ? void 0 : s.releasedAtRect,
															selected: !1,
															shouldFly: p
														})) : "unselected" === i && "selected" === u && (n[d] = void 0,
															l[d] = Ce({
																from: h.current[m],
																selected: !1,
																shouldFly: p
															})),
									(("dragging" === i || "unselected" === i) && "selected" === u || "offset" === i || "selected" === i && "offset" === u) && g.current.slice(m + 1).forEach(((e, t) => {
										n[e] = Ce({
											from: h.current[m + 1 + t],
											secondary: !0,
											selected: !0,
											shouldFly: p
										})
									}
									))
							}
							u(n),
								p(l)
						}
						g.current = n,
							v.current = f
					}
					)),
				{
					selectedTokenAnimations: d,
					unselectedTokenAnimations: m
				}
			}
			;
		var Te = a(795);
		const we = (e, t) => {
			switch (t.type) {
				case "DRAG":
					e = (0,
						Te.t8)(e, "offset", t.offset),
						e = (0,
							Te.t8)(e, "target", t.target);
					break;
				case "RELEASE":
					e = (0,
						Te.t8)(e, "index", void 0),
						e = (0,
							Te.t8)(e, "offset", void 0),
						e = (0,
							Te.t8)(e, "pointerData", void 0),
						e = (0,
							Te.t8)(e, "selected", void 0),
						e = (0,
							Te.t8)(e, "target", void 0),
						e = (0,
							Te.t8)(e, "width", void 0);
					break;
				case "START":
					e = (0,
						Te.t8)(e, "index", t.index),
						e = (0,
							Te.t8)(e, "offset", t.offset),
						e = (0,
							Te.t8)(e, "pointerData", t.pointerData),
						e = (0,
							Te.t8)(e, "selected", t.selected),
						e = (0,
							Te.t8)(e, "target", t.target)
			}
			return e
		}
			;
		var Ne = a(66530)
			, Re = a(83735);
		const Ie = {
			"safari-wrap": "Sa7Uw",
			_wrap: "v1KUv",
			"wrap-large": "MvChQ v1KUv",
			"wrap-normal": "_3WkEV v1KUv",
			"wrap-shorter": "_1LLFr v1KUv",
			"selected-tokens-container": "eWdJ5",
			"selected-tokens-inner": "_32DLo",
			"available-tokens-container": "_1v1Bd",
			"border-top": "fUvcy"
		};
		var Le = a(97236)
			, Pe = a(68903)
			, Fe = a(60491)
			, Ae = a(10391);
		const Ze = (e, t) => {
			const a = e.left + ("LEFT" === t || "BOTH" === t ? 6 : 0)
				, n = e.right - ("RIGHT" === t || "BOTH" === t ? 6 : 0);
			return new DOMRect(a, e.y, n - a, e.height)
		}
			, De = (e, t) => {
				if (t)
					switch (e) {
						case "BOTH":
							return "damaged-end-in-answer-both";
						case "LEFT":
							return "damaged-end-in-answer";
						case "NEITHER":
						case "RIGHT":
							return;
						default:
							return void (0,
								Pe.RJ)(e)
					}
				switch (e) {
					case "BOTH":
						return "damaged-end-both";
					case "LEFT":
						return "damaged-end-left";
					case "NEITHER":
						return;
					case "RIGHT":
						return "damaged-end-right";
					default:
						return void (0,
							Pe.RJ)(e)
				}
			}
			, Me = ({ autoFocus: e, challengeType: t, choices: a, correctIndices: n, disabled: i, hasBorderTop: o, isDesktop: c, language: d, onChange: u, onTryPlay: m, onUnhandledOverflow: p, playTtsOnSelect: g, typeToSelectSupported: h, value: v }) => {
				var f, _;
				const E = (0,
					W.tX)()
					, y = (0,
						W.Fx)((e => e.player.session.type === ce.FF.AlphabetLesson || e.player.session.type === ce.FF.AlphabetPractice))
					, b = (0,
						Te.qj)(a)
					, S = "rtl" === (0,
						ie.Ux)(d)
					, k = s.useRef(null)
					, C = s.useRef()
					, x = s.useRef(null)
					, T = s.useRef()
					, [w, N] = s.useReducer(we, {})
					, [R, I] = s.useState((() => l.TV(b.map((({ }, e) => e)))))
					, [L, P] = s.useState(y || c ? be.I.Large : be.I.Normal)
					, F = s.useRef()
					, A = s.useRef()
					, Z = (e, t) => {
						var a, n, r, s, l, i;
						const o = null === (a = k.current) || void 0 === a ? void 0 : a.getBoundingClientRect();
						if (!o)
							throw Error("Cannot calculate drag target without lines rectangle");
						const c = null !== (r = null === (n = C.current) || void 0 === n ? void 0 : n.map(((e, t, a) => {
							var n;
							if (!(null == e ? void 0 : e.el))
								return [];
							const r = Ze(e.el.getBoundingClientRect(), H[B[t]].damagePosition)
								, s = null === (n = a[t - 1]) || void 0 === n ? void 0 : n.el
								, l = s ? Ze(s.getBoundingClientRect(), H[B[t - 1]].damagePosition) : S ? new DOMRect(o.right, r.y, 0, r.height) : new DOMRect(o.x, r.y, 0, r.height);
							return r.y > l.y ? [S ? new DOMRect(o.x, l.y, l.x - o.x, l.height) : new DOMRect(l.right, l.y, o.right - l.right, l.height), S ? new DOMRect(r.x, r.y, o.right - r.x, r.height) : new DOMRect(o.x, r.y, r.right - o.x, r.height)] : S ? [new DOMRect(r.x, r.y, l.x - r.x, r.height)] : [new DOMRect(l.right, r.y, r.right - l.right, r.height)]
						}
						))) && void 0 !== r ? r : []
							, d = null === (i = null === (l = null === (s = T.current) || void 0 === s ? void 0 : s[e]) || void 0 === l ? void 0 : l.el) || void 0 === i ? void 0 : i.getBoundingClientRect();
						if (!d)
							throw Error("Cannot calculate drag target without tap token dimensions");
						const u = new DOMRect(t.x, t.y, d.width, d.height)
							, m = c.findIndex((e => e.some((e => (0,
								Ae.mH)(u, e)))));
						if (m > -1) {
							const t = M(R[e], m > 0 ? v[m - 1] : -1);
							return {
								offset: u.width + (0,
									Se.c)(L, t) + (0,
										Se.c)(L),
								target: m
							}
						}
						return w.selected ? {
							offset: 0,
							target: (0,
								Ae.mH)(u, o) ? v.length : -1
						} : {
							offset: 0,
							target: v.length
						}
					}
					, D = e => {
						const { text: t, tts: a } = b[e];
						if (g && a) {
							const e = (0,
								Le.a1)(a, {
									requestedAt: window.performance.now(),
									text: t
								});
							null == m || m(e)
						}
					}
					, M = (e, t) => {
						if (-1 === t)
							return !1;
						const a = b[e].damagePosition
							, n = b[t].damagePosition
							, r = v.indexOf(e) === w.target && void 0 !== w.offset ? w.offset : 0;
						return void 0 !== n && ["RIGHT", "BOTH"].includes(n) && void 0 !== a && ["LEFT", "BOTH"].includes(a) && 0 === r
					}
					, O = (e, t) => u(t > -1 ? [...v.slice(0, t), e, ...v.slice(t)] : l.zu(v, e))
					, H = R.map((e => b[e]))
					, B = v.map((e => R.indexOf(e)))
					, { highlights: U } = (0,
						Ne.Z)({
							gracePeriod: 1e3,
							language: d,
							mode: i || !h ? "disabled" : "unique",
							onBackspace: () => {
								const e = v.length ? v[v.length - 1] : void 0;
								void 0 !== e && O(e, -1)
							}
							,
							onMatch: e => {
								E((0,
									Re.eX)({
										challengeType: t
									})),
									D(R[e]),
									O(R[e], v.length)
							}
							,
							selectedIndices: B,
							tokens: H.map((e => e.text))
						})
					, { selectedTokenAnimations: G, unselectedTokenAnimations: V } = xe({
						dragIndex: w.index,
						dragTarget: w.target,
						isFlyEnabled: c,
						selectedIndices: B,
						selectedTokenRefs: null !== (f = C.current) && void 0 !== f ? f : [],
						tokens: R.length,
						unselectedTokenRefs: null !== (_ = T.current) && void 0 !== _ ? _ : []
					});
				s.useEffect((() => {
					F.current === R && A.current === L || ((() => {
						if (x.current && (0,
							Fe.J)(x.current)) {
							const e = (() => {
								var e;
								return null !== (e = R.filter((e => !v.includes(e) && !n.includes(e))).sort(((e, t) => b[t].text.length - b[e].text.length))[0]) && void 0 !== e ? e : -1
							}
							)();
							L === be.I.Large ? P(be.I.Normal) : L === be.I.Normal ? P(be.I.Shorter) : e > -1 ? I(R.filter((t => t !== e))) : p()
						}
					}
					)(),
						F.current = R,
						A.current = L)
				}
				));
				const z = (e, t) => {
					var a, n;
					const r = B.indexOf(e)
						, s = r > 0 ? B[r - 1] : -1
						, l = "lines" === t && M(R[e], s > -1 ? R[s] : -1)
						, i = H[e].damagePosition
						, o = r === w.target && void 0 !== w.offset ? w.offset : 0;
					return {
						animation: ("lines" === t ? G : V)[e],
						attachToPrevToken: l,
						forceDragFrom: "word-bank" === t && e === w.index && w.selected ? w.pointerData : void 0,
						highlightIndex: null === (a = U[e]) || void 0 === a ? void 0 : a.index,
						isComposing: null === (n = U[e]) || void 0 === n ? void 0 : n.isComposing,
						offset: o,
						variant: i ? De(i, l) : void 0,
						zIndex: "lines" === t ? -1 * r : void 0
					}
				}
					;
				return s.createElement("div", {
					className: Ie["safari-wrap"]
				}, s.createElement("div", {
					className: r()(Ie[`wrap-${L}`], {
						[Ie["border-top"]]: o
					}),
					ref: x
				}, s.createElement("div", {
					className: Ie["selected-tokens-container"],
					ref: k
				}, s.createElement("div", {
					className: Ie["selected-tokens-inner"]
				}, s.createElement(Se.Z, {
					choices: H,
					disabled: i,
					draggable: !0,
					language: d,
					onDragStart: (e, t) => {
						const { offset: a, target: n } = Z(e, t.target);
						N({
							index: e,
							offset: a,
							pointerData: t,
							selected: !0,
							target: n,
							type: "START"
						}),
							D(R[e]),
							O(R[e], -1)
					}
					,
					onTap: e => O(R[e], -1),
					selectedIndices: B,
					size: L,
					style: "lines",
					tokenProps: l.DZ(H.length, (e => z(e, "lines"))),
					tokensRef: e => C.current = e
				}))), s.createElement("div", {
					className: Ie["available-tokens-container"]
				}, s.createElement(Se.Z, {
					autoFocus: e,
					choices: H,
					disabled: i,
					draggable: !0,
					language: d,
					onDrag: (e, t) => {
						const { offset: a, target: n } = Z(e, t.target);
						N({
							offset: a,
							target: n,
							type: "DRAG"
						})
					}
					,
					onDragEnd: e => {
						N({
							type: "RELEASE"
						}),
							void 0 !== w.target && O(R[e], w.target)
					}
					,
					onDragStart: (e, t) => {
						if (void 0 !== w.index)
							return;
						const { offset: a, target: n } = Z(e, t.target);
						N({
							index: e,
							offset: a,
							pointerData: t,
							selected: !1,
							target: n,
							type: "START"
						}),
							D(R[e])
					}
					,
					onTap: e => {
						D(R[e]),
							O(R[e], v.length)
					}
					,
					selectedIndices: B,
					size: L,
					style: "word-bank",
					tokenProps: l.DZ(H.length, (e => z(e, "word-bank"))),
					tokensRef: e => T.current = e
				}))))
			}
			, Oe = {
				wrap: "_3u6rV _1IiFg f7WE2 _3rat3",
				"wrap-character": "_2iaDi UjFh4 _3rat3",
				"prompt-speaker": "_14x5R",
				"prompt-character": "oPv3t _1dtTU",
				speakers: "_2uS8p _3CzhQ vAI_X"
			};
		var He = a(95332);
		const Be = (e, t) => {
			switch (e) {
				case ce.Sm.SyllableListenTap:
					return (0,
						ee._i)(10461);
				case ce.Sm.SyllableTap:
					return (0,
						ee._i)(41890, {
							language_name: (0,
								ie.vY)(t)
						});
				default:
					throw (0,
						Pe.RJ)(e),
					Error(`Tried to call getSyllableTapChallengeHeaderPrompt on an unsupported challenge type: ${e}`)
			}
		}
			, Ue = ({ challenge: e, learningLanguage: t }) => s.createElement("span", null, Be(e.type, t))
			, Ge = ({ challenge: e, challengeState: { guess: t }, disabled: a, isDesktop: n, learningLanguage: r, onChange: l }) => {
				const { type: i, character: o, choices: c, correctIndices: d, skipped: u, gradingResult: m, prompt: p } = e
					, g = s.useRef(null)
					, [h, f] = s.useState(!1)
					, _ = e.type === ce.Sm.SyllableListenTap;
				(0,
					v.L)(_ ? ["listening"] : ["writing"]);
				const E = _ ? s.createElement(ye, {
					audio: e.tts,
					autoplay: !0,
					onTryPlay: e => g.current = null != e ? e : null,
					slowAudio: e.slowTts,
					soundOptions: {
						eventListeners: [["ended", () => f(!1)], ["error", () => f(!1)], ["play", () => f(!0)]]
					},
					ttsTrackingData: {
						text: p
					},
					variant: o ? "in-audio-bubble" : void 0
				}) : p
					, y = o ? s.createElement(Ee.Z, {
						audioEl: g,
						character: o,
						correct: u || null == m ? void 0 : m.correct,
						hasOnlyIcons: _,
						lang: r
					}, E) : null;
				return s.createElement("div", {
					className: Oe[o ? "wrap-character" : "wrap"]
				}, s.createElement("div", {
					className: Oe[o ? "prompt-character" : _ ? "prompt-speaker" : "prompt"]
				}, null != y ? y : E), s.createElement("div", {
					className: Oe["answer" + (o ? "-character" : "")]
				}, s.createElement(Me, {
					challengeType: i,
					choices: c,
					correctIndices: d,
					disabled: a,
					hasBorderTop: !!o,
					isDesktop: n,
					language: r,
					onChange: l,
					onTryPlay: e => g.current = null != e ? e : null,
					onUnhandledOverflow: () => {
						(0,
							V.track)("challenge_overflow", {
								challenge_type: _ ? "syllable_listen_tap" : "syllable_tap",
								prompt: p
							})
					}
					,
					playTtsOnSelect: !h,
					typeToSelectSupported: (0,
						He.jc)(r),
					value: null != t ? t : []
				})))
			}
			;
		var We = a(43546)
			, Ve = a(41373)
			, ze = a(4636)
			, $e = a(78980);
		const Ke = {
			modal: "_3qBoy",
			header: "_3BH15",
			instructions: "_3gWFK",
			"challenge-cards": "WXKLe",
			card: "_1IRDK",
			correct: "_3VIox",
			"icon-container": "UEYSR",
			"icon-correct": "TcH5r",
			incorrect: "Aa8Op",
			"icon-incorrect": "bKUhU",
			"card-header": "_22vpX",
			"card-prompt": "_31ibb",
			image: "_3uJoJ",
			speaker: "_2SJdl",
			popover: "_30XRH",
			wrong: "_3BCFi",
			missing: "_3Z22R",
			"response-label": "_2iYax",
			"solution-label": "_2AXvF",
			"response-text": "_19Lhw",
			"solution-container": "aTuOX",
			"listen-spell": "_16huz",
			"listen-match-speaker": "_2p6B1"
		};
		var je = a(4368)
			, qe = a(18675)
			, Xe = a(17135)
			, Ye = a(37590);
		const Qe = e => s.createElement("div", null, e.correctSolutions.map(((e, t) => s.createElement("div", {
			key: t
		}, e))))
			, Je = ({ challenge: e, learningLanguage: t, onPopoverClose: a, onPopoverToggle: n, showPopover: i }) => {
				var o, c, d;
				const u = "dark" === (0,
					ge.Fg)()
					, m = e.skipped ? (0,
						ee._i)(21645) : ""
					, p = (0,
						fe.f)()
					, { correctSolution: g, header: h, prompt: v, userResponse: f } = (() => {
						var a, n, r, i, o, c, d, u, p, g, h, v, f, _, E, y, b, S, k, C, x, T, w, N, R, I, L, P, F, A, Z, D, M, O, H, B, U, G, W, V, z, $, K, j, q, X, Y, Q, J, te, ae, ne, re, se;
						switch (e.type) {
							case ce.Sm.Assist:
								return {
									correctSolution: e.options[e.correctIndex].text,
									header: (0,
										ee._i)(19598, {
											word: e.prompt
										}),
									prompt: "",
									userResponse: m || e.options[null === (a = e.gradingResult) || void 0 === a ? void 0 : a.guess].text
								};
							case ce.Sm.CharacterIntro:
								return {
									correctSolution: e.choices[e.correctIndex],
									header: (0,
										ee._i)(15437),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || e.choices[null === (n = e.gradingResult) || void 0 === n ? void 0 : n.guess]
								};
							case ce.Sm.CharacterMatch:
								{
									const t = e.pairs.map((e => `${e.character}⟷${e.transliteration}`)).join(", ");
									return {
										correctSolution: t,
										header: (0,
											ee._i)(20703),
										prompt: (0,
											He.r1)(e)[0],
										userResponse: m || t
									}
								}
							case ce.Sm.CharacterPuzzle:
								return {
									correctSolution: e.correctSolutions[0],
									header: "Build the character:",
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (r = e.gradingResult) || void 0 === r ? void 0 : r.guess)
								};
							case ce.Sm.CharacterSelect:
								return {
									correctSolution: e.choices[e.correctIndex].character,
									header: (0,
										ee._i)(1202),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || e.choices[null === (i = e.gradingResult) || void 0 === i ? void 0 : i.guess].character
								};
							case ce.Sm.CharacterTrace:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(26295),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (o = e.gradingResult) || void 0 === o ? void 0 : o.correct) ? e.prompt : (0,
										ee._i)(21645)
								};
							case ce.Sm.CharacterWrite:
								return {
									correctSolution: e.prompt,
									header: e.instructionText,
									prompt: (0,
										He.r1)(e)[0],
									userResponse: (null === (c = e.gradingResult) || void 0 === c ? void 0 : c.correct) ? e.prompt : m
								};
							case ce.Sm.ChessMatch:
							case ce.Sm.ChessMiniMatch:
							case ce.Sm.ChessPvpMatch:
							case ce.Sm.ChessStar:
							case ce.Sm.ChessNormal:
							case ce.Sm.ChessFictionalBoard:
								return {
									correctSolution: "Chess Challenge Solution",
									header: "Chess Challenge Header",
									prompt: "Chess Challenge Prompt",
									userResponse: m || (null === (d = e.gradingResult) || void 0 === d ? void 0 : d.guess)
								};
							case ce.Sm.CompleteReverseTranslation:
								return {
									correctSolution: e.displayTokens.map((e => e.text)).join(""),
									header: (0,
										ee._i)(21271),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (u = e.gradingResult) || void 0 === u ? void 0 : u.guess)
								};
							case ce.Sm.Definition:
								{
									const [t, a] = (0,
										He.r1)(e);
									return {
										correctSolution: e.choices[e.correctIndex],
										header: (0,
											ee._i)(24620),
										prompt: s.createElement("div", null, s.createElement("p", null, t), s.createElement("p", null, a)),
										userResponse: m || e.choices[null === (p = e.gradingResult) || void 0 === p ? void 0 : p.guess]
									}
								}
							case ce.Sm.Dialogue:
								return {
									correctSolution: e.choices[e.correctIndex],
									header: e.promptTokens ? (0,
										ee._i)(24620) : (0,
											ee._i)(9368),
									prompt: s.createElement("div", null, (0,
										He.r1)(e).map(((e, t) => s.createElement("div", {
											key: t
										}, e)))),
									userResponse: m || e.choices[null === (g = e.gradingResult) || void 0 === g ? void 0 : g.guess]
								};
							case ce.Sm.Form:
								return {
									correctSolution: e.options[e.correctIndex].text,
									header: (0,
										ee._i)(12908),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || e.options[null === (h = e.gradingResult) || void 0 === h ? void 0 : h.guess].text
								};
							case ce.Sm.FreeResponse:
								if (void 0 === t)
									throw Error("FreeResponse challenges must have a learningLanguage");
								return {
									correctSolution: "",
									header: (0,
										ee._i)(17610, {
											language_name: (0,
												ie.vY)(t)
										}),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (v = e.gradingResult) || void 0 === v ? void 0 : v.guess)
								};
							case ce.Sm.GapFill:
								{
									const { displayTokens: t } = e;
									return {
										correctSolution: e.choices[e.correctIndex],
										header: (0,
											ee._i)(18142, {
												num_blanks: (0,
													He.j$)(t).filter((e => e.isBlank)).length
											}),
										prompt: (0,
											He.r1)(e)[0],
										userResponse: m || (null === (f = e.gradingResult) || void 0 === f ? void 0 : f.guess)
									}
								}
							case ce.Sm.Judge:
								{
									const t = [null === (_ = e.gradingResult) || void 0 === _ ? void 0 : _.guess]
										, a = l.e5(t, e.correctIndices)
										, n = l.e5(e.correctIndices, t);
									return {
										correctSolution: null !== (y = null === (E = e.gradingResult) || void 0 === E ? void 0 : E.closestSolution) && void 0 !== y ? y : s.createElement("div", null, e.correctIndices.map(((t, a) => s.createElement("div", {
											className: n.includes(t) ? Ke.missing : void 0,
											key: a
										}, e.choices[t])))),
										header: (0,
											ee._i)(12217),
										prompt: (0,
											He.r1)(e)[0],
										userResponse: m || s.createElement("div", null, t.map((t => s.createElement("div", {
											className: a.includes(t) ? Ke.wrong : void 0,
											key: t
										}, e.choices[t]))))
									}
								}
							case ce.Sm.Listen:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(11024),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (b = e.gradingResult) || void 0 === b ? void 0 : b.guess)
								};
							case ce.Sm.ListenComplete:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(3351),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (S = e.gradingResult) || void 0 === S ? void 0 : S.guess)
								};
							case ce.Sm.ListenComprehension:
								{
									const [, t] = (0,
										He.r1)(e);
									return {
										correctSolution: e.choices[e.correctIndex],
										header: (0,
											ee._i)(8769),
										prompt: t,
										userResponse: m || e.choices[null === (k = e.gradingResult) || void 0 === k ? void 0 : k.guess]
									}
								}
							case ce.Sm.ListenIsolation:
								return {
									correctSolution: e.options[e.correctIndex].text,
									header: (0,
										ee._i)(30187),
									prompt: s.createElement(he.Z, {
										audio: e.options[e.correctIndex].tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || e.options[null === (C = e.gradingResult) || void 0 === C ? void 0 : C.guess].text
								};
							case ce.Sm.ExtendedListenMatch:
							case ce.Sm.ListenMatch:
								{
									const t = e.pairs.map((e => e.translation)).join(", ")
										, a = s.createElement("div", null, e.pairs.map(((e, t) => s.createElement(he.Z, {
											audio: e.tts,
											autoplay: !1,
											className: Ke["listen-match-speaker"],
											key: t,
											type: "small",
											useKeyboardShortcut: !1
										}))));
									return {
										correctSolution: t,
										header: (0,
											ee._i)(19092),
										prompt: a,
										userResponse: m || t
									}
								}
							case ce.Sm.ListenSpeak:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(19373),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (x = e.gradingResult) || void 0 === x ? void 0 : x.correct) ? e.prompt : (0,
										ee._i)(21645)
								};
							case ce.Sm.ListenTap:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(19092),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (T = e.gradingResult) || void 0 === T ? void 0 : T.guess)
								};
							case ce.Sm.ExtendedMatch:
							case ce.Sm.Match:
								{
									const t = e.pairs.map((e => `${e.learningToken}⟷${e.fromToken}`)).join(", ");
									return {
										correctSolution: t,
										header: (0,
											ee._i)(20703),
										prompt: (0,
											He.r1)(e)[0],
										userResponse: m || t
									}
								}
							case ce.Sm.Name:
								if (void 0 === t)
									throw Error("Name challenges must have a learningLanguage");
								return {
									correctSolution: Qe(e),
									header: (0,
										ee._i)(14739, {
											language_name: (0,
												ie.vY)(t)
										}),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (0,
										qe.K)(null === (w = e.gradingResult) || void 0 === w ? void 0 : w.guess)
								};
							case ce.Sm.OrderTapComplete:
								return {
									correctSolution: (null === (N = e.gradingResult) || void 0 === N ? void 0 : N.correct) ? null === (R = e.gradingResult) || void 0 === R ? void 0 : R.guess : e.displayTokens.map((e => e.text)).join(""),
									header: (0,
										ee._i)(18142, {
											num_blanks: e.displayTokens.filter((e => e.isBlank)).length
										}),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (I = e.gradingResult) || void 0 === I ? void 0 : I.guess)
								};
							case ce.Sm.PartialListen:
								return {
									correctSolution: e.displayTokens.map((e => e.isBlank ? e.text : "")).join(""),
									header: (0,
										ee._i)(27882),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (L = e.gradingResult) || void 0 === L ? void 0 : L.guess)
								};
							case ce.Sm.PartialReverseTranslate:
								return {
									correctSolution: e.displayTokens.map((e => e.isBlank ? e.text : "")).join(""),
									header: (0,
										ee._i)(22690),
									prompt: e.displayTokens.map((e => e.isBlank ? "_" : e.text)),
									userResponse: m || (null === (P = e.gradingResult) || void 0 === P ? void 0 : P.guess)
								};
							case ce.Sm.PatternTapComplete:
								return {
									correctSolution: e.choices[e.correctIndex],
									header: (0,
										ee._i)(20300),
									prompt: (() => {
										let t = 0;
										return e.tokens.map((a => {
											const n = t;
											return t += a.value.length,
												n <= e.blankRangeStart && e.blankRangeEnd <= t ? "_" : a.value
										}
										))
									}
									)(),
									userResponse: m || (null === (F = e.gradingResult) || void 0 === F ? void 0 : F.guess)
								};
							case ce.Sm.RadioBinary:
							case ce.Sm.RadioImageSelect:
							case ce.Sm.RadioListenMatch:
							case ce.Sm.RadioListenRecognize:
							case ce.Sm.RadioSelect:
								return {
									correctSolution: null,
									header: null,
									prompt: null,
									userResponse: null
								};
							case ce.Sm.ReadComprehension:
								{
									const [, t] = (0,
										He.r1)(e);
									return {
										correctSolution: e.choices[e.correctIndex],
										header: (0,
											ee._i)(24620),
										prompt: t,
										userResponse: m || e.choices[null === (A = e.gradingResult) || void 0 === A ? void 0 : A.guess]
									}
								}
							case ce.Sm.ReverseAssist:
								return {
									correctSolution: e.options[e.correctIndex].text,
									header: `Select the meaning for "${e.prompt}"`,
									prompt: "",
									userResponse: m || e.options[null === (Z = e.gradingResult) || void 0 === Z ? void 0 : Z.guess].text
								};
							case ce.Sm.SameDifferent:
								return {
									correctSolution: e.options[e.correctIndex],
									header: e.instructions,
									prompt: e.secondaryInstructions,
									userResponse: m || e.options[null === (D = e.gradingResult) || void 0 === D ? void 0 : D.guess]
								};
							case ce.Sm.Select:
								return {
									correctSolution: e.choices[e.correctIndex].phrase,
									header: (0,
										ee._i)(18721, {
											hint: e.prompt
										}),
									prompt: "",
									userResponse: m || e.choices[null === (M = e.gradingResult) || void 0 === M ? void 0 : M.guess].phrase
								};
							case ce.Sm.SelectPronunciation:
								return {
									correctSolution: e.choices[e.correctIndex].text,
									header: (0,
										ee._i)(21070),
									prompt: s.createElement(he.Z, {
										audio: e.choices[e.correctIndex].tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || e.choices[null === (O = e.gradingResult) || void 0 === O ? void 0 : O.guess].text
								};
							case ce.Sm.SelectTranscription:
								return {
									correctSolution: e.choices[e.correctIndex].text,
									header: (0,
										ee._i)(21070),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || e.choices[null === (H = e.gradingResult) || void 0 === H ? void 0 : H.guess].text
								};
							case ce.Sm.SvgPuzzle:
								return {
									correctSolution: e.correctSolutions[0],
									header: `Build the kanji in "${e.meaning}"`,
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (B = e.gradingResult) || void 0 === B ? void 0 : B.guess)
								};
							case ce.Sm.SyllableTap:
							case ce.Sm.SyllableListenTap:
								if (void 0 === t)
									throw Error("SyllableTap and SyllableListenTap challenges must have a learningLanguage");
								return {
									correctSolution: e.prompt,
									header: Be(e.type, t),
									prompt: s.createElement(he.Z, {
										audio: e.tts,
										autoplay: !1,
										className: Ke.speaker,
										type: "small",
										useKeyboardShortcut: !1
									}),
									userResponse: m || (null === (U = e.gradingResult) || void 0 === U ? void 0 : U.guess)
								};
							case ce.Sm.Speak:
								return {
									correctSolution: e.prompt,
									header: (0,
										ee._i)(11803),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (G = e.gradingResult) || void 0 === G ? void 0 : G.correct) ? e.prompt : (0,
										ee._i)(21645)
								};
							case ce.Sm.TapCloze:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(6098),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (W = e.gradingResult) || void 0 === W ? void 0 : W.guess)
								};
							case ce.Sm.TapClozeTable:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(10718),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (V = e.gradingResult) || void 0 === V ? void 0 : V.guess)
								};
							case ce.Sm.TapComplete:
								return {
									correctSolution: (null === (z = e.gradingResult) || void 0 === z ? void 0 : z.correct) ? null === ($ = e.gradingResult) || void 0 === $ ? void 0 : $.guess : e.displayTokens.map((e => e.text)).join(""),
									header: (0,
										ee._i)(18142, {
											num_blanks: e.displayTokens.filter((e => e.isBlank)).length
										}),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (K = e.gradingResult) || void 0 === K ? void 0 : K.guess)
								};
							case ce.Sm.TapCompleteTable:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(2082),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (j = e.gradingResult) || void 0 === j ? void 0 : j.guess)
								};
							case ce.Sm.TapDescribe:
								{
									const { choices: t, correctIndices: a, image: { svg: n } } = e
										, r = (0,
											He.rF)(e);
									return {
										correctSolution: a.map((e => t[e].text)).join(r),
										header: (0,
											ee._i)(6204),
										prompt: s.createElement("div", {
											className: Ke.image,
											style: {
												backgroundImage: `url(${n})`
											}
										}),
										userResponse: m || (null === (q = e.gradingResult) || void 0 === q ? void 0 : q.guess)
									}
								}
							case ce.Sm.Translate:
								return {
									correctSolution: Qe(e),
									header: (0,
										ee._i)(14739, {
											language_name: (0,
												ie.vY)(e.targetLanguage)
										}),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (X = e.gradingResult) || void 0 === X ? void 0 : X.guess)
								};
							case ce.Sm.Transliterate:
								return {
									correctSolution: Qe(e),
									header: (0,
										ee._i)(15437),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (Y = e.gradingResult) || void 0 === Y ? void 0 : Y.guess)
								};
							case ce.Sm.TransliterationAssist:
								return {
									correctSolution: e.options[e.correctIndex].text,
									header: `Select the pronunciation for "${e.prompt}"`,
									prompt: "",
									userResponse: m || e.options[null === (Q = e.gradingResult) || void 0 === Q ? void 0 : Q.guess].text
								};
							case ce.Sm.TypeCloze:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(16472),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (J = e.gradingResult) || void 0 === J ? void 0 : J.guess)
								};
							case ce.Sm.TypeClozeTable:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(7721),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (te = e.gradingResult) || void 0 === te ? void 0 : te.guess)
								};
							case ce.Sm.TypeComplete:
								return {
									correctSolution: e.correctSolutions[0],
									header: (0,
										ee._i)(3351),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (ae = e.gradingResult) || void 0 === ae ? void 0 : ae.guess)
								};
							case ce.Sm.TypeCompleteTable:
								return {
									correctSolution: (0,
										Ye.Ub)(e).join(""),
									header: (0,
										ee._i)(2082),
									prompt: (0,
										He.r1)(e)[0],
									userResponse: m || (null === (ne = e.gradingResult) || void 0 === ne ? void 0 : ne.guess)
								};
							case ce.Sm.WriteComprehension:
								return {
									correctSolution: e.exampleSolution,
									header: (0,
										ee._i)(24620),
									prompt: e.question,
									userResponse: m || (null === (re = e.gradingResult) || void 0 === re ? void 0 : re.guess)
								};
							case ce.Sm.MathChallengeBlob:
								return {
									correctSolution: "Math Challenge Blob Solution",
									header: "Math Challenge Blob Header",
									prompt: "Math Challenge Blob Prompt",
									userResponse: m || (null === (se = e.gradingResult) || void 0 === se ? void 0 : se.guess)
								};
							default:
								throw (0,
									Pe.RJ)(e),
								Error(`Unexpected challenge type: ${e.type}`)
						}
					}
					)();
				return s.createElement(s.Fragment, null, s.createElement(ve.Z, {
					className: r()(Ke.card, (null === (o = e.gradingResult) || void 0 === o ? void 0 : o.correct) ? Ke.correct : Ke.incorrect),
					onToggle: n
				}, s.createElement("div", {
					className: Ke["card-header"]
				}, h), s.createElement("div", {
					className: Ke["icon-container"]
				}, s.createElement("img", {
					className: Ke[`icon-${(null === (c = e.gradingResult) || void 0 === c ? void 0 : c.correct) ? "" : "in"}correct`],
					src: (null === (d = e.gradingResult) || void 0 === d ? void 0 : d.correct) ? u ? We : Ve : u ? ze : $e
				})), s.createElement("div", {
					className: Ke["card-prompt"],
					ref: p.setElementRef
				}, v)), i ? s.createElement(_e.Z, {
					innerClassName: Ke.popover,
					onRequestClose: a,
					popperProps: p.props,
					ref: p.setPopoverRef,
					stemContainerRef: p.setArrowRef,
					zIndex: parseInt(je.Z["z-index-popover"], 10)
				}, s.createElement("div", {
					className: Ke.userResponseContainer
				}, s.createElement("div", {
					className: Ke["response-label"]
				}, (0,
					ee._i)(9972)), s.createElement("div", {
						className: Ke["response-text"]
					}, f)), s.createElement("div", {
						className: Ke["solution-container"]
					}, s.createElement("div", {
						className: Ke["response-label"]
					}, (0,
						ee._i)(19178)), s.createElement("div", {
							className: Ke["response-text"]
						}, g))) : null)
			}
			, et = () => {
				const e = (0,
					W.Fx)(f.iH)
					, t = (0,
						W.Fx)(f.is)
					, [a, n] = s.useState();
				return s.useEffect((() => {
					const e = (0,
						Xe.Zo)();
					return () => {
						(0,
							V.track)("review_lesson_click", {
								target: "close",
								time_taken: (0,
									Xe.Zo)() - e
							})
					}
				}
				), []),
					s.createElement(s.Fragment, null, s.createElement("div", {
						className: Ke.header
					}, (0,
						ee._i)(18187)), s.createElement("div", {
							className: Ke.instructions
						}, (0,
							ee._i)(17858)), s.createElement("div", {
								className: Ke["challenge-cards"]
							}, (t.challenges || []).filter((e => {
								var t;
								return void 0 !== (null === (t = e.gradingResult) || void 0 === t ? void 0 : t.correct)
							}
							)).map(((t, r) => s.createElement(Je, {
								challenge: t,
								key: r,
								learningLanguage: e,
								onPopoverClose: () => n(void 0),
								onPopoverToggle: () => n(a === r ? void 0 : r),
								showPopover: a === r
							})))))
			}
			, tt = () => s.createElement(h.Z, {
				className: Ke.modal,
				modalName: G.t.SessionReview
			}, (() => s.createElement(et, null)));
		var at = a(73830);
		const nt = {
			wrap: "_1jq2H _3rat3",
			"wrap-character": "_2hpO2 UjFh4 _3rat3",
			"prompt-character": "_1RjNT _3v0hd",
			answer: "_1lTti ccJ7o",
			"answer-character": "_3laLR _32LPr"
		}
			, rt = ({ challenge: { correctIndex: e, options: t, prompt: a }, character: n, choiceTransliterations: r, disabled: l, gradingResult: i, guess: o, language: c, onSelect: d, promptLanguage: u, skipped: m }) => s.createElement("div", {
				className: nt["wrap" + (n ? "-character" : "")]
			}, n ? s.createElement("div", {
				className: nt["prompt-character"]
			}, s.createElement(Ee.Z, {
				character: n,
				correct: m || null == i ? void 0 : i.correct,
				lang: u
			}, a)) : null, s.createElement(at.Z, {
				autoFocus: !0,
				choiceTransliterations: r,
				choices: t.map((e => e.text)),
				className: nt["answer" + (n ? "-character" : "")],
				correct: m || null == i ? void 0 : i.correct,
				correctIndex: e,
				disabled: l,
				language: c,
				onChange: d,
				overflowBehavior: {
					shouldHandleOverflow: !1
				},
				type: "column",
				value: o
			}));
		var st = a(34704)
			, lt = a(59198);
		const it = a.p + "images/dcf3451bf2c449fcdd9e0ec5206fbc96.svg"
			, ot = ({ sessionType: e, type: t }) => {
				switch (t) {
					case ce.A.HardChallenge:
					case ce.A.LimitedTts:
						return s.createElement(lt.v$, {
							size: "large"
						}, (0,
							ee._i)(10549));
					case ce.A.NewConcept:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(71012));
					case ce.A.NewWord:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(13259));
					case ce.A.NewPiece:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(73971));
					case ce.A.NewPattern:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(40937));
					case ce.A.PastMistake:
						return e === ce.FF.MistakesReview ? s.createElement(lt.dX, {
							size: "large"
						}, (0,
							ee._i)(15591)) : s.createElement(lt.A8, {
								size: "large"
							}, (0,
								ee._i)(15591));
					case ce.A.ReviewChallenge:
						return s.createElement("div", {
							className: "_2rQxB"
						}, s.createElement("img", {
							className: "_1ZuWY -APF-",
							src: it
						}), s.createElement("span", {
							className: "vYU1y _2_G9P _2Rt1l"
						}, (0,
							ee._i)(25472)));
					case ce.A.ReviewConcept:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(73972));
					case ce.A.WeakWord:
						return s.createElement(lt.MG, {
							size: "large"
						}, (0,
							ee._i)(49692));
					case ce.A.MathNewConcept:
						return s.createElement(lt.R4, {
							size: "large"
						}, (0,
							ee._i)(71353));
					case ce.A.ChallengeIndicatorUnspecified:
						return null;
					default:
						throw (0,
							Pe.RJ)(t),
						Error(`Unexpected value for indicatorType: ${t}`)
				}
			}
			;
		var ct = a(84905);
		const dt = (e, { maxScale: t }) => {
			const a = (0,
				W.Fx)((e => e.ui.viewportHeight))
				, n = (0,
					W.Fx)((e => e.ui.viewportWidth))
				, [r, l] = s.useState(1);
			return s.useLayoutEffect((() => {
				const a = e.current.map((e => {
					var t;
					return null !== (t = null == e ? void 0 : e.measure()) && void 0 !== t ? t : 1 / 0
				}
				));
				l(Math.min(...a, t))
			}
			), [a, n]),
			{
				scale: r
			}
		}
			, ut = a.p + "images/179d5bc2e8e94948132990c37746bd15.svg"
			, mt = a.p + "images/3e328e1ef2b1935fbb8e4b1d30423949.svg"
			, pt = a.p + "images/043997ca38e0f046701150786edcdf5e.svg"
			, gt = a.p + "images/13f32c8c089121aab2c72a82fa8ec93d.svg"
			, ht = () => {
				const e = [[ut, {
					bottom: "15%",
					right: "25%"
				}], [mt, {
					bottom: "40%",
					right: "15%"
				}], [pt, {
					left: "25%",
					top: "15%"
				}], [gt, {
					left: "15%",
					top: "25%"
				}]];
				return s.createElement("div", null, e.map((([e, t], a) => s.createElement("img", {
					className: "nW5uo",
					key: a,
					src: e,
					style: t
				}))))
			}
			;
		var vt = a(26506);
		const ft = (e, t, a, n, r, l, i) => {
			const o = "rtl" === (0,
				ie.Ux)(a);
			s.useEffect((() => {
				const a = e => ((e - 1) % t.length + t.length) % t.length
					, r = e => (e + 1) % t.length;
				if (!e) {
					const e = e => {
						var s;
						"ArrowRight" === e.key ? (e.preventDefault(),
							e.stopPropagation(),
							void 0 === l ? i(o ? t.length - 1 : 0) : (s = l,
								i(o ? a(s) : r(s)))) : "ArrowLeft" === e.key ? (e.preventDefault(),
									e.stopPropagation(),
									void 0 === l ? i(o ? 0 : t.length - 1) : (e => {
										i(o ? r(e) : a(e))
									}
									)(l)) : "Backspace" === e.key && (e.preventDefault(),
										e.stopPropagation(),
										void 0 !== l && void 0 !== t[l].choiceIndex && n(l))
					}
						;
					return vt.U.addListener(document, "keydown", e),
						() => vt.U.removeListener(document, "keydown", e)
				}
			}
			), [e, l, t, r])
		}
			, _t = {
				"lang-ar": "_2NvRa _1XlmZ",
				wrap: "_1s_dS f7WE2 _3rat3",
				prompt: "_1nOqu",
				"grid-wrap": "_2pr3w",
				grid: "_1gLrN",
				white: "_3xhVH",
				green: "_3W1xB",
				cell: "_3u4p1",
				empty: "_1Zdb0",
				filled: "U2Aed",
				selected: "PRXo9",
				disabled: "_1853p",
				"fast-animation": "_2tdSc",
				"cell-content": "_3acCa",
				"cell-shadow": "_2luYI",
				"final-word-base": "CZ-xM",
				"final-word-bounce-in": "jwUkZ _272Bb CZ-xM",
				"final-word": "_3whLB CZ-xM",
				"final-tokens": "_3Xfgz",
				"final-token-base": "_8jVy6",
				"final-token": "VEQiq _8jVy6",
				"final-token-bounce-in": "-QgLC _272Bb _8jVy6"
			};
		var Et = a(50498)
			, yt = a(16970)
			, bt = a(64115)
			, St = a(37971);
		const kt = e => {
			const t = (0,
				W.Fx)(f.iH)
				, a = () => "ar" === t ? Math.max(50, e) : 50
				, [n, r] = s.useState(a());
			return s.useEffect((() => {
				r(a())
			}
			), [e]),
				n
		}
			, Ct = ({ cellSize: e, gridCols: t, gridRows: a, text: n, selected: l, info: i, index: o, fast: c, onClick: d, position: u, disabled: m }) => {
				const p = (0,
					W.Fx)(f.iH)
					, { colStart: g, rowStart: h, numCols: v, numRows: _ } = i
					, E = "center" === u
					, y = 0 === g
					, b = g + v === t
					, S = 0 === h
					, k = h + _ === a
					, C = a * e
					, x = t * e
					, T = _ * e + (k ? 0 : 2)
					, w = v * e + (b ? 0 : 2)
					, N = kt(e)
					, R = g * e
					, I = .5 * (R + w / 2) + x / 2 * .5 - w / 2
					, L = h * e
					, P = .5 * (L + T / 2) + C / 2 * .5 - T / 2
					, F = r()(_t.cell, {
						[_t.empty]: void 0 === n,
						[_t.selected]: l && !m,
						[_t.filled]: void 0 !== n && !m,
						[_t.disabled]: m,
						[_t["fast-animation"]]: c
					})
					, A = {
						fontSize: `${N}px`,
						height: `${T}px`,
						left: `${E ? I : R}px`,
						lineHeight: _ * e + "px",
						top: `${E ? P : L}px`,
						width: `${w}px`,
						zIndex: l ? void 0 === n ? 1 : yt.BV + a + 1 : void 0 === n ? 0 : yt.BV + h + _,
						...y && S ? {
							borderTopLeftRadius: `${yt.n_}px`
						} : {},
						...y && k ? {
							borderBottomLeftRadius: `${yt.n_}px`
						} : {},
						...b && S ? {
							borderTopRightRadius: `${yt.n_}px`
						} : {},
						...b && k ? {
							borderBottomRightRadius: `${yt.n_}px`
						} : {}
					}
					, Z = {
						...A,
						height: `${T + 2}px`,
						zIndex: yt.BV
					}
					, D = r()(void 0 === n ? null : _t["cell-shadow"], l ? _t.selected : null);
				return s.createElement("div", null, E || m ? null : s.createElement("div", {
					className: D,
					style: Z
				}), s.createElement(q.Z, {
					className: F,
					disabled: m,
					onClick: () => null == d ? void 0 : d(o),
					style: A,
					variant: "unstyled"
				}, s.createElement("span", {
					className: r()(_t["cell-content"], _t[`lang-${p}`]),
					lang: p
				}, n)))
			}
			, xt = ({ animationState: e, cellSize: t, children: a, numRows: n, numCols: l }) => {
				const i = (0,
					yt.u_)(e);
				return s.createElement("div", {
					className: r()(_t.grid, i ? _t[i] : null),
					style: {
						height: n * t + "px",
						width: l * t + "px"
					}
				}, a)
			}
			, Tt = ({ animationState: e, correctIndices: t, choices: a, size: n, bottom: l }) => {
				const [i, o] = s.useState(-1)
					, c = (0,
						W.Fx)(f.iH);
				if (void 0 === c)
					throw Error("CharacterPuzzleChallenge must have a learningLanguage");
				const d = "rtl" === (0,
					ie.Ux)(c);
				s.useEffect((() => {
					e === yt.SR.CorrectFinal && setTimeout((() => {
						o(0)
					}
					), 200)
				}
				), [e]),
					s.useEffect((() => {
						i >= 0 && i < t.length && setTimeout((() => {
							o(i + 1)
						}
						), 100)
					}
					), [i]);
				const u = t.map(((e, t) => {
					const l = a[e];
					return s.createElement("div", {
						className: r()(i >= t ? _t["final-token-bounce-in"] : _t["final-token"], _t[`lang-${c}`]),
						key: e,
						style: {
							fontSize: `${n}px`,
							height: `${n}px`,
							lineHeight: `${n}px`,
							width: `${n}px`
						}
					}, l.text)
				}
				));
				return s.createElement("div", {
					className: _t["final-tokens"],
					lang: c,
					style: {
						bottom: `${l}px`
					}
				}, d ? [...u].reverse() : u)
			}
			;
		var wt = a(15543)
			, Nt = a(84577)
			, Rt = a(77809);
		const It = a.p + "images/ee80276a6691815f08f3ae12b3c4e1c3.svg"
			, Lt = a.p + "images/d36b5e77c07ab3eb62cd90cefb96d50e.svg"
			, Pt = {
				prompt: "WkIBL",
				container: "_343IP",
				"trace-wrap": "_2GkiA",
				"trace-wrap-shake": "f4V4m _2GkiA",
				"horizontal-shaking": "_187RM",
				"trace-grid": "cNV1w",
				"trace-content": "o1rqi",
				"thick-stroke": "_12a0S",
				"thin-stroke": "_198ea",
				"no-line": "_22UPm",
				"unfilled-line": "_287Na",
				"dashed-line": "_1e5Zt",
				"no-cursor": "_1h31R",
				cursor: "_25Ktp _1h31R",
				"invisible-circle": "_1ax9T",
				"filled-line": "_1vFJk",
				"white-dot": "_2NoLS"
			};
		var Ft = a(81469)
			, At = a(76578);
		const Zt = 100
			, Dt = (e, t) => {
				const a = e.getPointAtLength(t * e.getTotalLength())
					, n = e.getCTM();
				return n ? a.matrixTransform(n) : a
			}
			, Mt = (e, t) => {
				const a = .9999
					, n = Dt(e, t >= a ? .95 : t)
					, r = Dt(e, t >= a ? 1 : Math.min(t + .05, 1));
				return Math.atan2(r.y - n.y, r.x - n.x) / Math.PI * 180
			}
			, Ot = (e, t) => ({
				angle: Mt(t, e),
				angleEnd: Mt(t, 1),
				endPoint: Dt(t, 1),
				progressPoint: Dt(t, e)
			})
			, Ht = ({ cursor: e, distanceTolerance: t, numStrokes: a, strokeIndex: n, strokeInfo: r, strokeProgress: s, strokeRef: l }) => {
				if ((0,
					At.TE)(e, r.progressPoint) > 15 + t)
					return;
				const i = t => (0,
					At.TE)(Dt(l, t), e)
					, o = l.getTotalLength();
				let c = Math.max(0, s - 5 / o)
					, d = Math.min(1, s + 5 / o);
				for (; d - c > .001;) {
					const e = c + (d - c) / 2
						, t = e + (d - e) / 2;
					i(c + (e - c) / 2) < i(t) ? d = e : c = e
				}
				const u = Math.max(s, c + (d - c) / 2);
				return u >= .97 || l.getTotalLength() < 10 ? {
					cursor: e,
					distanceTolerance: t,
					numStrokes: a,
					strokeIndex: n + 1,
					strokeInfo: void 0,
					strokeProgress: 0,
					strokeRef: l
				} : {
					cursor: e,
					distanceTolerance: t,
					numStrokes: a,
					strokeIndex: n,
					strokeInfo: Ot(u, l),
					strokeProgress: u,
					strokeRef: l
				}
			}
			, Bt = e => (0,
				Ft.Z)(Zt).map((t => Dt(e, t / Zt)))
			, Ut = ({ challenge: e, distanceTolerance: t, fromLanguage: a, learningLanguage: n, onChange: l, strokeWidth: i }) => {
				const [o, c] = s.useState()
					, [d, u] = s.useState(0)
					, m = s.useRef(null)
					, p = s.useRef(null)
					, g = s.useRef(null)
					, [h, f] = s.useState(0)
					, [_, E] = s.useState()
					, y = s.useRef(null)
					, b = s.useRef(void 0)
					, S = s.useRef(!1)
					, [k, C] = s.useState()
					, [x, T] = s.useState(!1)
					, [w, N] = s.useState(0)
					, [R, I] = s.useState([])
					, L = (0,
						W.tX)();
				(0,
					v.L)(["writing"]);
				const P = (0,
					W.Fx)((e => e.player.status === St.c.Blaming || e.player.status === St.c.CharacterWriteRetryBlaming))
					, F = []
					, A = [];
				e.strokes.forEach((e => {
					"PREDRAWN" === e.strokeDrawMode ? F.push(e) : A.push(e)
				}
				));
				const Z = A.length !== e.strokes.length
					, D = void 0 === d ? void 0 : "FREEHAND" === A[d].strokeDrawMode ? {
						...A[d],
						numFailures: null != k ? k : 0,
						strokeDrawMode: "FREEHAND"
					} : A[d]
					, M = null == D ? void 0 : D.strokeDrawMode
					, O = o ? e.width * o + 20 : void 0
					, H = o ? e.height * o + 20 : void 0
					, B = O && H ? Math.max(O, H) : void 0;
				s.useLayoutEffect((() => {
					y.current && E(Ot(0, y.current))
				}
				), [o, d]),
					s.useEffect((() => {
						"FREEHAND" !== (null == D ? void 0 : D.strokeDrawMode) || void 0 === k || x || T(!0)
					}
					), [k]);
				const U = (e, t, a) => {
					var n;
					if (!a.current)
						return;
					const r = null === (n = a.current.getScreenCTM()) || void 0 === n ? void 0 : n.inverse();
					return r ? new DOMPoint(e, t).matrixTransform(r) : void 0
				}
					, G = () => {
						null !== y.current && null !== m.current && void 0 !== O && void 0 !== H && S.current && void 0 !== d && "FREEHAND" === M && ((e, t, a, n) => {
							const r = ((e, t, a, n) => {
								const r = Math.min(a, n)
									, { referencePoints: s, drawnPoints: l } = ((e, t, a) => {
										const n = Bt(e)
											, r = Bt(t)
											, s = n.map((e => e.x)).reduce(((e, t) => e + t)) / Zt
											, l = n.map((e => e.y)).reduce(((e, t) => e + t)) / Zt
											, i = r.map((e => e.x)).reduce(((e, t) => e + t)) / Zt
											, o = r.map((e => e.y)).reduce(((e, t) => e + t)) / Zt
											, c = Math.max(1 - .18, Math.min(1.18, e.getTotalLength() / t.getTotalLength()))
											, d = r.map((e => ({
												x: (e.x - i) * c + i,
												y: (e.y - o) * c + o
											})))
											, u = Math.max(-a, Math.min(a, s - i))
											, m = Math.max(-a, Math.min(a, l - o));
										return {
											drawnPoints: d.map((e => ({
												x: e.x + u,
												y: e.y + m
											}))),
											referencePoints: n
										}
									}
									)(e, t, .15 * r);
								return ((e, t, a) => {
									const n = e.map((() => t.map((() => 1 / 0))));
									n[0][0] = 0;
									for (let r = 1; r < e.length; r++)
										for (let s = 1; s < t.length; s++) {
											const l = a(e[r], t[s]);
											n[r][s] = l + Math.min(n[r - 1][s], n[r][s - 1], n[r - 1][s - 1])
										}
									return n[e.length - 1][t.length - 1]
								}
								)(s, l, At.TE) / s.length < .07 * Math.max(a, n)
							}
							)(e, t, a, n)
								, s = A.length;
							if (void 0 === d)
								throw Error("Stroke index undefined in CharacterWrite challenge!");
							if (r)
								return d + 1 < s && u(d + 1),
									f(0),
									E(void 0),
									C(void 0),
									l({
										currentStrokeIndex: d + 1,
										numSkippedStrokes: w,
										skippedCurrentStroke: !1
									}),
									d + 1 === s && (L((0,
										Re.YK)(!1, Date.now())),
										u(void 0)),
									void I([]);
							const i = (null != k ? k : 0) + 1;
							if (i < 3)
								return C(i),
									void I([]);
							if (i >= 3) {
								l({
									currentStrokeIndex: d + 1,
									numSkippedStrokes: w,
									skippedCurrentStroke: !0
								});
								const e = d + 1 === s;
								u(e ? void 0 : d + 1),
									C(e ? void 0 : 0),
									N(e ? 0 : w + 1),
									f(0),
									E(void 0),
									L((0,
										Re.YK)(!1, Date.now())),
									I([])
							}
						}
						)(y.current, m.current, O, H),
							S.current = !1,
							b.current = void 0
					}
					, V = (e, a) => {
						var n;
						const r = U(e, a, p);
						if (!(_ && r && void 0 !== d && y.current && S.current))
							return;
						const s = null !== (n = b.current) && void 0 !== n ? n : r
							, i = Math.max(1, Math.ceil((0,
								At.TE)(s, r) / 5))
							, o = (r.x - s.x) / i
							, c = (r.y - s.y) / i;
						let m = {
							cursor: r,
							distanceTolerance: t,
							numStrokes: A.length,
							strokeIndex: d,
							strokeInfo: _,
							strokeProgress: h,
							strokeRef: y.current
						};
						for (let e = 0; e < i && m.strokeInfo; e++) {
							const a = Ht({
								cursor: {
									x: s.x + e * o,
									y: s.y + e * c
								},
								distanceTolerance: t,
								numStrokes: m.numStrokes,
								strokeIndex: m.strokeIndex,
								strokeInfo: m.strokeInfo,
								strokeProgress: m.strokeProgress,
								strokeRef: m.strokeRef
							});
							if (!a)
								break;
							m = a
						}
						m && (e => {
							if (e.strokeIndex !== d) {
								S.current = !1,
									e.strokeIndex < e.numStrokes && u(e.strokeIndex);
								const t = {
									currentStrokeIndex: e.strokeIndex,
									skippedCurrentStroke: !1
								};
								l({
									...t
								})
							}
							f(e.strokeProgress),
								E(e.strokeInfo),
								e.strokeIndex === e.numStrokes && (L((0,
									Re.YK)(!1, Date.now())),
									u(void 0))
						}
						)(m),
							b.current = r
					}
					, z = (0,
						W.Fx)((e => e.ui.viewportHeight))
					, $ = (0,
						W.Fx)((e => e.ui.viewportWidth));
				s.useLayoutEffect((() => {
					if (!g.current)
						return;
					const { width: t, height: a } = g.current.getBoundingClientRect()
						, n = Math.max(e.width, e.height)
						, r = Math.min((t - 20) / n, (a - 20) / n);
					c(r)
				}
				), [z, $]);
				const K = void 0 !== e.blank
					, j = void 0 === e.blank ? e.prompt : e.prompt.replace(e.blank, yt.XW)
					, q = () => {
						return void 0 === D || void 0 === B ? null : s.createElement(s.Fragment, null, "FREEHAND" === D.strokeDrawMode ? s.createElement("path", {
							className: Pt["filled-line"],
							d: (t = R.map((e => U(e.x, e.y, m))),
								t.flatMap(((e, t) => void 0 === e ? [] : [`${0 === t ? "M" : "L"} ${e.x},${e.y} `])).join("")),
							pathLength: 1,
							ref: m,
							transform: `translate(${B / 2}, ${B / 2}) scale(${o}, ${o}) translate(-${e.width / 2}, -${e.height / 2})`
						}) : h >= .01 ? s.createElement("path", {
							className: r()(Pt["filled-line"], Pt.cursor),
							d: D.path,
							pathLength: 1,
							style: {
								strokeDashoffset: 1 - h
							},
							transform: `translate(${B / 2}, ${B / 2}) scale(${o}, ${o}) translate(-${e.width / 2}, -${e.height / 2})`
						}) : null);
						var t
					}
					, X = void 0 !== D && (e => {
						switch (e.strokeDrawMode) {
							case "GUARDRAIL":
								return !0;
							case "PREDRAWN":
								return !1;
							case "FREEHAND":
								switch (e.backgroundDisplayMode) {
									case "ACTIVE_ONLY":
									case "ALWAYS":
										return !0;
									case "NEVER":
										return e.numFailures >= 2;
									default:
										return (0,
											Pe.RJ)(e.backgroundDisplayMode),
											!1
								}
							default:
								return (0,
									Pe.RJ)(e),
									!1
						}
					}
					)(D)
					, Y = void 0 !== D && ((e, t) => {
						switch (e.strokeDrawMode) {
							case "GUARDRAIL":
								return !0;
							case "PREDRAWN":
								return !1;
							case "FREEHAND":
								switch (e.backgroundDisplayMode) {
									case "ACTIVE_ONLY":
									case "ALWAYS":
										return !0;
									case "NEVER":
										return t || e.numFailures >= 1;
									default:
										return (0,
											Pe.RJ)(e.backgroundDisplayMode),
											!1
								}
							default:
								return (0,
									Pe.RJ)(e),
									!1
						}
					}
					)(D, !Z && 0 === d)
					, Q = "FREEHAND" === M;
				return s.createElement("div", {
					className: Pt.container,
					dir: (0,
						ie.Ux)(n)
				}, s.createElement("div", {
					className: Pt.prompt
				}, e.promptTts ? s.createElement(he.Z, {
					audio: e.promptTts,
					autoplay: !0,
					type: "small"
				}) : null, s.createElement("span", {
					lang: n
				}, e.promptTransliteration ? s.createElement(wt.Z, {
					highlightStyle: "normal",
					highlightedCharacter: K ? e.blank : e.highlight,
					highlightedIsBlank: K,
					text: [...j],
					transliteration: e.promptTransliteration,
					type: (0,
						st.dN)(n, a) ? void 0 : "hard-coded"
				}) : e.prompt)), s.createElement("div", {
					className: x ? Pt["trace-wrap-shake"] : Pt["trace-wrap"],
					onAnimationEnd: () => {
						T(!1)
					}
					,
					ref: g
				}, void 0 === o || void 0 === B ? null : s.createElement("svg", {
					className: r()(Pt["trace-content"], Pt[`${i}-stroke`]),
					height: B,
					onMouseDown: e => {
						e.preventDefault(),
							"FREEHAND" !== M || P || (S.current = !0,
								I([{
									x: e.clientX,
									y: e.clientY
								}]))
					}
					,
					onMouseLeave: G,
					onMouseMove: e => {
						"FREEHAND" === M && S.current ? I([...R, {
							x: e.clientX,
							y: e.clientY
						}]) : V(e.clientX, e.clientY)
					}
					,
					onMouseUp: G,
					onTouchCancel: G,
					onTouchEnd: G,
					onTouchMove: e => {
						"FREEHAND" === M && S.current ? I([...R, {
							x: e.touches[0].clientX,
							y: e.touches[0].clientY
						}]) : V(e.touches[0].clientX, e.touches[0].clientY)
					}
					,
					onTouchStart: e => {
						S.current = !0,
							"FREEHAND" !== M || P ? V(e.touches[0].clientX, e.touches[0].clientY) : I([{
								x: e.touches[0].clientX,
								y: e.touches[0].clientY
							}])
					}
					,
					ref: p,
					viewBox: `0 0 ${B} ${B}`,
					width: B,
					xmlns: "http://www.w3.org/2000/svg"
				}, void 0 === B ? null : s.createElement(s.Fragment, null, s.createElement("path", {
					className: Pt["trace-grid"],
					d: `M 0 ${B / 2} H ${B}`
				}), s.createElement("path", {
					className: Pt["trace-grid"],
					d: `M ${B / 2} 0 V ${B}`
				})), s.createElement("g", {
					transform: `translate(${B / 2}, ${B / 2}) scale(${o}, ${o}) translate(-${e.width / 2}, -${e.height / 2})`
				}, s.createElement(s.Fragment, null, A.map(((e, t) => ((e, t, a) => {
					switch (e.strokeDrawMode) {
						case "GUARDRAIL":
						case "PREDRAWN":
							return !0;
						case "FREEHAND":
							switch (e.backgroundDisplayMode) {
								case "ACTIVE_ONLY":
									return t;
								case "ALWAYS":
									return !0;
								case "NEVER":
									return t && a >= 2;
								default:
									return (0,
										Pe.RJ)(e.backgroundDisplayMode),
										!1
							}
						default:
							return (0,
								Pe.RJ)(e),
								!1
					}
				}
				)(e, t === d, null != k ? k : 0) ? s.createElement("path", {
					className: Pt["unfilled-line"],
					d: e.path,
					key: t
				}) : null)), F.map(((e, t) => s.createElement("path", {
					className: Pt["filled-line"],
					d: e.path,
					key: t,
					pathLength: 1,
					style: {
						strokeDashoffset: 0
					}
				}))), A.slice(0, null != d ? d : A.length).map(((e, t) => s.createElement("path", {
					className: Pt["filled-line"],
					d: e.path,
					key: t,
					pathLength: 1,
					style: {
						strokeDashoffset: 0
					}
				})))), void 0 === D ? null : s.createElement("path", {
					className: Pt["no-line"],
					d: D.path,
					ref: y
				})), void 0 !== _ && void 0 !== B ? s.createElement(s.Fragment, null, s.createElement("g", {
					transform: `translate(${B / 2}, ${B / 2}) scale(${o}, ${o}) translate(-${e.width / 2}, -${e.height / 2})`
				}, X ? s.createElement("path", {
					className: Pt["dashed-line"],
					d: null == D ? void 0 : D.path
				}) : null), Q ? null : q(), X && void 0 !== _ ? s.createElement("image", {
					height: 18,
					href: It,
					onMouseDown: e => e.preventDefault(),
					transform: `translate(${_.endPoint.x}, ${_.endPoint.y}) rotate(${_.angleEnd}) translate(-7, -9)`,
					width: 14
				}) : null, (X || Y) && null !== y.current ? (J = Q ? Ot(0, y.current) : _,
					void 0 !== D && null !== y.current ? s.createElement("g", {
						className: Q ? Pt["no-cursor"] : Pt.cursor,
						onMouseDown: e => {
							e.preventDefault(),
								"FREEHAND" !== M && (S.current = !0,
									V(e.clientX, e.clientY))
						}
						,
						transform: `translate(${J.progressPoint.x}, ${J.progressPoint.y})`
					}, s.createElement("circle", {
						className: Pt["invisible-circle"],
						r: 37.5
					}), s.createElement("circle", {
						r: 15
					}), y.current.getTotalLength() < 10 ? s.createElement("circle", {
						className: Pt["white-dot"],
						r: 6
					}) : s.createElement("image", {
						height: 16,
						href: Lt,
						onMouseDown: e => e.preventDefault(),
						transform: `rotate(${J.angle}) translate(-8, -8)`,
						width: 16
					})) : null) : null, Q ? q() : null) : null)));
				var J
			}
			;
		var Gt = a(13149)
			, Wt = a(57677)
			, Vt = a(53746);
		const zt = ({ children: e }) => s.createElement("div", {
			className: "zlazS"
		}, e)
			, $t = JSON.parse('{"ca0":["à","é","è","í","ï","ó","ò","ú","ü","ç","·"],"ca1":["À","É","È","Í","Ï","Ó","Ò","Ú","Ü","Ç","·"],"cs0":["á","č","ď","é","ě","í","ň","ó","ř","š","ť","ú","ů","ý","ž"],"cs1":["Á","Č","Ď","É","Ě","Í","Ň","Ó","Ř","Š","Ť","Ú","Ů","Ý","Ž"],"cy0":["â","ê","î","ô","ŵ","ŷ","ï"],"cy1":["Â","Ê","Î","Ô","Ŵ","Ŷ","Ï"],"da0":["æ","ø","å","é"],"da1":["Æ","Ø","Å","É"],"de0":["ä","ö","ü","ß"],"de1":["Ä","Ö","Ü","ß"],"eo0":["ĉ","ĝ","ĥ","ĵ","ŝ","ŭ"],"eo1":["Ĉ","Ĝ","Ĥ","Ĵ","Ŝ","Ŭ"],"es0":["á","é","í","ó","ú","ü","ñ","¿","¡"],"es1":["Á","É","Í","Ó","Ú","Ü","Ñ","¿","¡"],"fi0":["ä","ö"],"fi1":["Ä","Ö"],"fr0":["à","â","æ","è","é","ê","ë","î","ï","ô","ù","û","ü","ç","œ"],"fr1":["À","Â","Æ","È","É","Ê","Ë","Î","Ï","Ô","Ù","Û","Ü","Ç","Œ"],"ga0":["á","é","í","ó","ú"],"ga1":["Á","É","Í","Ó","Ú"],"gd0":["à","è","ì","ò","ù"],"gd1":["À","È","Ì","Ò","Ù"],"gn0":["ã","ẽ","ĩ","õ","ũ","ỹ","g̃","ñ","á","é","í","ó","ú","ý"],"gn1":["Ã","Ẽ","Ĩ","Õ","Ũ","Ỹ","G̃","Ñ","Á","É","Í","Ó","Ú","Ý"],"hu0":["á","é","í","ö","ó","ő","ü","ú","ű"],"hu1":["Á","É","Í","Ö","Ó","Ő","Ü","Ú","Ű"],"hv0":["ā","ē","ī","ō","ū","ȳ","ñ"],"hv1":["Ā","Ē","Ī","Ō","Ū","Ȳ","Ñ"],"hw0":["ā","ē","ī","ō","ū","ʻ"],"hw1":["Ā","Ē","Ī","Ō","Ū","ʻ"],"it0":["à","á","è","é","ì","í","ò","ó","ù","ú"],"it1":["À","Á","È","É","Ì","Í","Ò","Ó","Ù","Ú"],"nl-NL0":["á","é","è","ë","ï"],"nl-NL1":["Á","É","È","Ë","Ï"],"no-BO0":["æ","ø","å","é"],"no-BO1":["Æ","Ø","Å","É"],"nv0":["ł","á","ą","ą́","é","ę","ę́","í","į","į́","ó","ǫ","ǫ́","ú","ų","ų́"],"nv1":["Ł","Á","Ą","Ą́","É","Ę","Ę́","Í","Į","Į́","Ó","Ǫ","Ǫ́","Ú","Ų","Ų́"],"pl0":["ą","ć","ę","ł","ń","ó","ś","ź","ż"],"pl1":["Ą","Ć","Ę","Ł","Ń","Ó","Ś","Ź","Ż"],"pt0":["ã","á","â","à","é","ê","í","õ","ó","ô","ú","ü","ç"],"pt1":["Ã","Á","Â","À","É","Ê","Í","Õ","Ó","Ô","Ú","Ü","Ç"],"ro0":["ă","â","î","ș","ț"],"ro1":["Ă","Â","Î","Ș","Ț"],"sv0":["å","ä","ö","é"],"sv1":["Å","Ä","Ö","É"],"tr0":["ç","ğ","ı","i","ö","ş","ü"],"tr1":["Ç","Ğ","I","İ","Ö","Ş","Ü"]}')
			, Kt = l.XP($t).map((e => e.slice(0, -1)));
		var jt;
		!function (e) {
			e[e.Lower = 0] = "Lower",
				e[e.Upper = 1] = "Upper"
		}(jt || (jt = {}));
		const qt = ({ character: e, disabled: t, onClick: a, type: n = "submit" }) => e ? s.createElement(q.Z, {
			className: "_2yFpW",
			disabled: t,
			onClick: a,
			type: n,
			variant: "stroke"
		}, e) : s.createElement("noscript", null);
		class Xt extends s.Component {
			constructor() {
				super(...arguments),
					this.state = {
						casing: jt.Upper,
						isCasingSetByUser: !1
					},
					this.handleLetterClick = (e, t) => {
						var a, n;
						const { disabled: r, inputElement: s, onChange: l, value: i } = this.props;
						if (r)
							return;
						const o = i;
						if (s) {
							const r = null !== (a = s.selectionStart) && void 0 !== a ? a : o.length
								, i = null !== (n = s.selectionEnd) && void 0 !== n ? n : r;
							l(e, `${o.slice(0, r)}${t}${o.slice(i, o.length)}`),
								s.focus()
						} else
							l(e, `${o}${t}`)
					}
					,
					this.handleShiftClick = e => {
						this.props.disabled || this.setState({
							casing: "↑" === e ? jt.Upper : jt.Lower,
							isCasingSetByUser: !0
						})
					}
			}
			render() {
				var e;
				const { buttonType: t, className: a, disabled: n, language: l, value: i } = this.props;
				if (!Kt.includes(l))
					return s.createElement("noscript", null);
				const o = (null === (e = this.state) || void 0 === e ? void 0 : e.isCasingSetByUser) ? this.state.casing : i.length ? jt.Lower : jt.Upper
					, c = $t[`${l}${o}`].slice();
				return c.unshift(o === jt.Upper ? "↓" : "↑"),
					s.createElement("div", {
						className: r()("_3SM2V", a),
						lang: l
					}, c.map(((e, a) => s.createElement("div", {
						className: "wQ_9d",
						key: a
					}, s.createElement(qt, {
						character: e,
						disabled: n,
						onClick: t => "↓" === e || "↑" === e ? this.handleShiftClick(e) : this.handleLetterClick(t, e),
						type: t
					})))))
			}
		}
		const Yt = Xt
			, Qt = {
				wrap: "_3-pGM",
				response: "_2OQj6 _3zGeZ _394fY RpiVp",
				"response-with-limit": "_3C84F _2OQj6 _3zGeZ _394fY RpiVp",
				"character-limit-container": "_2vVmp",
				"character-limit": "_35OCR",
				"character-limit-warning": "_1Nf15",
				"virtual-keyboard": "_1JzEX"
			};
		var Jt = a(30033)
			, ea = a(67173)
			, ta = a(3800);
		class aa extends s.Component {
			constructor() {
				super(...arguments),
					this.inputElement = null,
					this.renderCharacterLimit = () => {
						const { maxLength: e, maxLengthWarning: t, value: a } = this.props;
						if (void 0 === e)
							return null;
						const n = a.length
							, l = !!t && e - n <= t;
						return s.createElement("div", {
							className: Qt["character-limit-container"]
						}, s.createElement("span", {
							className: r()(Qt["character-limit"], {
								[Qt["character-limit-warning"]]: l
							})
						}, (0,
							ee._i)(22527, {
								denominator: e,
								numerator: n
							})))
					}
			}
			render() {
				var e;
				const { autoFocus: t, disabled: a, inputLanguage: n, learningLanguage: r, maxLength: l, onChange: i, refCallback: o, value: c } = this.props;
				return s.createElement("div", {
					className: Qt.wrap
				}, s.createElement("textarea", {
					...(0,
						Jt._q)(ea.V.ChallengeTranslateInput),
					...r === n ? ta.N : {},
					autoFocus: t,
					className: Qt["response" + (l ? "-with-limit" : "")],
					"data-gramm": !1,
					dir: (0,
						ie.Ux)(n),
					disabled: a,
					lang: n,
					maxLength: l,
					onChange: e => i(e, e.target.value),
					placeholder: (0,
						ee.H8)(17610, {
							language_name: (0,
								ie.vY)(n)
						}),
					ref: e => {
						this.inputElement = e,
							null == o || o(e)
					}
					,
					value: c
				}), this.renderCharacterLimit(), s.createElement(Yt, {
					className: Qt["virtual-keyboard"],
					disabled: a,
					inputElement: null !== (e = this.inputElement) && void 0 !== e ? e : void 0,
					language: n,
					onChange: (e, t) => (!l || t.length <= l) && i(e, t),
					value: c
				}))
			}
		}
		const na = aa
			, ra = {
				wrap: "_2_UFg _1IiFg f7WE2 _3rat3",
				"wrap-character": "_2cFgq UjFh4 _3rat3",
				prompt: "_38ohZ _35mGI",
				"prompt-character": "_2KICS _1dtTU _35mGI",
				answer: "_2sQTc ccJ7o _3hg-V",
				"answer-character": "_36hb_ _32LPr _3hg-V",
				"fake-textarea-player": "_3uFQ7 _2mrQw RpiVp",
				"input-container": "_36cPx",
				"virtual-keyboard": "GHSxj"
			};
		var sa = a(71371);
		class la extends s.Component {
			constructor() {
				super(...arguments),
					this.state = {
						inputIndex: this.props.challenge.displayTokens.findIndex((e => e.isBlank))
					},
					this.inputRefs = new Array(this.props.challenge.displayTokens.filter((e => e.isBlank)).length).fill(null)
			}
			componentDidMount() {
				this.props.setSWRLEngagement()
			}
			componentDidUpdate(e) {
				const { challengeState: { guess: t }, disabled: a } = this.props;
				a || e.challengeState.guess === t || sa.Z.finish("challenge_typing")
			}
			render() {
				var e, t, a, n;
				const { challenge: { character: r, displayTokens: l, gradingResult: i, skipped: o, tokens: c }, challengeState: { guess: d }, challengeToggleState: u, disabled: m, fromLanguage: p, isDesktop: g, learningLanguage: h, onChange: v } = this.props
					, f = s.createElement(Vt.Z, {
						highlightStyle: "normal",
						isForward: !1,
						language: p,
						tokens: c
					});
				return s.createElement("div", {
					className: ra["wrap" + (r ? "-character" : "")]
				}, s.createElement("div", {
					className: ra["prompt" + (r ? "-character" : "")]
				}, r ? s.createElement(Ee.Z, {
					character: r,
					correct: o || null == i ? void 0 : i.correct,
					lang: p
				}, f) : f), s.createElement("div", {
					className: ra["answer" + (r ? "-character" : "")]
				}, u.isToggledToTyping ? s.createElement(na, {
					autoFocus: g,
					disabled: m,
					inputLanguage: h,
					learningLanguage: h,
					onChange: ({ }, e) => {
						sa.Z.start("challenge_typing"),
							v({
								...d,
								translatedSentence: e
							})
					}
					,
					value: null !== (e = null == d ? void 0 : d.translatedSentence) && void 0 !== e ? e : ""
				}) : s.createElement(s.Fragment, null, s.createElement("label", {
					className: ra["fake-textarea-player"],
					dir: (0,
						ie.Ux)(h),
					lang: h
				}, l.map(((e, t) => {
					var a, n;
					return e.isBlank ? s.createElement("span", {
						className: ra["input-container"],
						key: t
					}, s.createElement(zt, null, `_${e.text}_`), s.createElement(Wt.Z, {
						autoFocus: g && this.state.inputIndex === t,
						disabled: m,
						inputLanguage: h,
						onChange: e => {
							var a;
							sa.Z.start("challenge_typing"),
								v({
									...d,
									translatedWords: null === (a = null == d ? void 0 : d.translatedWords) || void 0 === a ? void 0 : a.map(((a, n) => n === t ? e.target.value : a))
								})
						}
						,
						onFocus: () => {
							this.setState({
								inputIndex: t
							})
						}
						,
						refCallback: e => this.inputRefs[t] = e,
						size: 1,
						style: "fill-in-the-blank",
						value: null !== (n = null === (a = null == d ? void 0 : d.translatedWords) || void 0 === a ? void 0 : a[t]) && void 0 !== n ? n : ""
					})) : s.createElement("span", {
						key: t
					}, e.text)
				}
				))), s.createElement(Yt, {
					className: ra["virtual-keyboard"],
					disabled: m,
					inputElement: null !== (t = this.inputRefs[this.state.inputIndex]) && void 0 !== t ? t : void 0,
					language: h,
					onChange: ({ }, e) => {
						var t;
						sa.Z.start("challenge_typing"),
							v({
								...d,
								translatedWords: null === (t = null == d ? void 0 : d.translatedWords) || void 0 === t ? void 0 : t.map(((t, a) => this.state.inputIndex === a ? e : t))
							})
					}
					,
					value: null !== (n = null === (a = null == d ? void 0 : d.translatedWords) || void 0 === a ? void 0 : a[this.state.inputIndex]) && void 0 !== n ? n : ""
				}))))
			}
		}
		const ia = (0,
			Gt.$j)(null, (e => ({
				setSWRLEngagement: () => e({
					type: "SET_SWRL_ENGAGEMENT",
					value: ["writing", "reading"]
				})
			})))(la);
		var oa = a(95324)
			, ca = a(56435);
		const da = ({ children: e, isHighlighted: t }) => s.createElement("span", {
			className: t ? "_2qcGF _3AISd" : "_3AISd"
		}, null != e ? e : s.createElement("span", {
			className: "_1XGCY"
		}))
			, ua = {
				wrap: "_3fGax",
				"bubble-wrap": "_26ryR",
				"bubble-wrap-left": "_3y7zN _26ryR",
				"bubble-wrap-right": "_2c7Ih _26ryR",
				"align-left": "_1j5TQ",
				"align-right": "hOemH",
				_avatar: "_1etlE",
				"avatar-left": "_3L4wm _1etlE",
				"avatar-right": "_2kufX _1etlE",
				"hidden-text": "_2n6in"
			}
			, ma = ({ alignment: e, character: t, displayTokens: a, hintTokens: n, learningLanguage: r, tts: i }) => {
				var o;
				if (a.length !== n.length)
					throw Error("Token length mismatch.");
				const c = null === (o = null == t ? void 0 : t.avatarIconImage) || void 0 === o ? void 0 : o.svg;
				return s.createElement("div", {
					className: ua[`bubble-wrap-${e}`]
				}, "left" === e && c ? s.createElement("img", {
					alt: null == t ? void 0 : t.name,
					className: ua["avatar-left"],
					src: c
				}) : null, s.createElement(ca.Z, {
					caretPosition: e,
					dir: (0,
						ie.Ux)(r),
					leadingVisual: i ? s.createElement(he.Z, {
						audio: i,
						autoplay: !0,
						dir: (0,
							ie.Ux)(r),
						type: "small",
						useKeyboardShortcut: !0,
						variant: "inverse"
					}) : null
				}, s.createElement("span", {
					className: ua["hidden-text"]
				}, (0,
					ee._i)("left" === e ? 7924 : 17754)), l.DZ(a.length, (e => {
						const t = a[e]
							, l = n[e];
						return t.isBlank ? 0 !== e && a[e - 1].isBlank ? null : s.createElement(da, {
							key: e
						}) : s.createElement(Vt.Z, {
							highlightStyle: "normal",
							isForward: !0,
							key: e,
							language: r,
							tokens: [l]
						})
					}
					))), "right" === e && c ? s.createElement("img", {
						alt: null == t ? void 0 : t.name,
						className: ua["avatar-right"],
						src: c
					}) : null)
			}
			, pa = s.forwardRef((({ alignment: e, children: t, isVisible: a }, n) => {
				const r = s.useRef(null);
				return (0,
					i.Z)({
						isVisible: a,
						ref: r
					}),
					s.createElement("div", {
						className: ua[`align-${e}`],
						ref: (0,
							oa.Z)([r, n]),
						style: a ? void 0 : {
							pointerEvents: "none"
						}
					}, t)
			}
			))
			, ga = s.forwardRef((({ currentDialogueIndex: e, dialogue: t, learningLanguage: a }, n) => {
				const r = s.useRef([])
					, l = t[0].speaker;
				return s.useImperativeHandle(n, (() => ({
					getCurrentlySelectedBubble: () => r.current[e]
				})), [e]),
					s.createElement("div", {
						className: ua.wrap
					}, t.map(((t, n) => {
						const i = t.speaker === l ? "left" : "right";
						return s.createElement(pa, {
							alignment: i,
							isVisible: n <= e,
							key: n,
							ref: e => r[n] = e
						}, s.createElement(ma, {
							alignment: i,
							character: t.character,
							displayTokens: t.displayTokens,
							hintTokens: t.hintTokens,
							learningLanguage: a,
							tts: 0 === n && t.tts ? t.tts : void 0
						}))
					}
					)))
			}
			));
		var ha = a(88849);
		var va = a(34107)
			, fa = a(74534);
		const _a = (e, t) => {
			const a = (t, a, n) => ("fromLanguage" === t ? e.fromLanguageTokenProperties : e.learningLanguageTokenProperties).map((e => a(e) ? {
				...e,
				..."function" == typeof n ? n(e) : n
			} : {
				...e
			}));
			switch (t.type) {
				case "MATCH":
					{
						const { nextFromLanguageToken: n, nextLearningLanguageToken: r, nextUnusedTokenPairs: s } = (() => {
							if (0 === e.unusedTokenPairs.length)
								return {
									nextFromLanguageToken: void 0,
									nextLearningLanguageToken: void 0,
									nextUnusedTokenPairs: e.unusedTokenPairs
								};
							const { fromLanguageToken: t, learningLanguageToken: a } = e.unusedTokenPairs[0];
							return {
								nextFromLanguageToken: t,
								nextLearningLanguageToken: a,
								nextUnusedTokenPairs: e.unusedTokenPairs.slice(1)
							}
						}
						)()
							, l = a("learningLanguage", (e => e.hotKeyIndex === t.learningLanguageTokenIndex), {
								nextToken: r,
								status: "matched"
							})
							, i = a("fromLanguage", (e => e.hotKeyIndex === t.fromLanguageTokenIndex), {
								nextToken: n,
								status: "matched"
							});
						return (0,
							Te.TS)(e, {
								finishedPairsCount: e.finishedPairsCount + 1,
								fromLanguageTokenProperties: i,
								learningLanguageTokenProperties: l,
								unusedTokenPairs: s
							})
					}
				case "REPLACEMENT":
					{
						const n = (() => {
							const n = e.learningLanguageTokenProperties.find((({ hotKeyIndex: e }) => e === t.learningLanguageTokenIndex))
								, r = e.learningLanguageTokenProperties.filter((({ status: e, nextToken: a, hotKeyIndex: n }) => n !== t.learningLanguageTokenIndex && "matched" === e && void 0 !== a));
							if (r.length > 0 && Math.random() < fa.pF) {
								const e = l.UP(r);
								return a("learningLanguage", (a => a.hotKeyIndex === t.learningLanguageTokenIndex || a.hotKeyIndex === (null == e ? void 0 : e.hotKeyIndex)), (a => a.hotKeyIndex === t.learningLanguageTokenIndex ? {
									animation: t.animation,
									nextToken: void 0,
									status: "unmatched",
									token: null == e ? void 0 : e.nextToken
								} : {
									nextToken: null == n ? void 0 : n.nextToken
								}))
							}
							return a("learningLanguage", (e => e.hotKeyIndex === t.learningLanguageTokenIndex), (e => {
								var a;
								return {
									animation: t.animation,
									nextToken: void 0,
									status: "unmatched",
									token: null !== (a = e.nextToken) && void 0 !== a ? a : e.token
								}
							}
							))
						}
						)()
							, r = a("fromLanguage", (e => e.hotKeyIndex === t.fromLanguageTokenIndex), (e => {
								var a;
								return {
									animation: t.animation,
									nextToken: void 0,
									status: "unmatched",
									token: null !== (a = e.nextToken) && void 0 !== a ? a : e.token
								}
							}
							));
						return (0,
							Te.TS)(e, {
								fromLanguageTokenProperties: r,
								learningLanguageTokenProperties: n
							})
					}
				case "WRONG_MATCH":
					{
						const n = a("learningLanguage", (e => e.hotKeyIndex === t.learningLanguageTokenIndex), {
							status: "delayed"
						})
							, r = a("fromLanguage", (e => e.hotKeyIndex === t.fromLanguageTokenIndex), {
								status: "delayed"
							});
						return (0,
							Te.TS)(e, {
								fromLanguageTokenProperties: r,
								learningLanguageTokenProperties: n,
								wrongMatchCount: e.wrongMatchCount + 1
							})
					}
				case "ENABLE_TAP":
					{
						const n = a("learningLanguage", (e => e.hotKeyIndex === t.learningLanguageTokenIndex), {
							status: "unmatched"
						})
							, r = a("fromLanguage", (e => e.hotKeyIndex === t.fromLanguageTokenIndex), {
								status: "unmatched"
							});
						return (0,
							Te.TS)(e, {
								fromLanguageTokenProperties: r,
								learningLanguageTokenProperties: n
							})
					}
				case "SET_ANIMATION":
					{
						const n = a("learningLanguage", (e => t.index === e.hotKeyIndex), {
							animation: t.animation
						})
							, r = a("fromLanguage", (e => t.index === e.hotKeyIndex), {
								animation: t.animation
							});
						return (0,
							Te.TS)(e, {
								fromLanguageTokenProperties: r,
								learningLanguageTokenProperties: n
							})
					}
				case "SET_ALL_ANIMATIONS":
					{
						const n = a("learningLanguage", (() => !0), (e => ({
							animation: t.getNewAnimation(e)
						})))
							, r = a("fromLanguage", (() => !0), (e => ({
								animation: t.getNewAnimation(e)
							})));
						return (0,
							Te.TS)(e, {
								fromLanguageTokenProperties: r,
								learningLanguageTokenProperties: n
							})
					}
				default:
					return e
			}
		}
			, Ea = e => s.useReducer(_a, {
				finishedPairsCount: 0,
				fromLanguage: e.fromLanguage,
				fromLanguageTokenProperties: [],
				learningLanguage: e.learningLanguage,
				learningLanguageTokenProperties: [],
				totalPairsCount: 1,
				unusedPairs: []
			}, (() => (e => {
				const t = []
					, a = []
					, n = l.TV((e => {
						const { learningLanguage: t, fromLanguage: a, challenge: n } = e;
						return n.type === ce.Sm.ExtendedMatch ? (0,
							Te.qj)(n.pairs).map(((e, n) => {
								const r = {
									id: n,
									language: t,
									text: e.learningToken,
									transliteration: e.learningTokenTransliteration,
									type: "text"
								};
								return {
									fromLanguageToken: {
										id: n,
										language: a,
										text: e.fromToken,
										transliteration: e.learningTokenTransliteration,
										type: "text"
									},
									learningLanguageToken: r
								}
							}
							)) : (0,
								Te.qj)(n.pairs).map(((e, n) => {
									const r = {
										id: n,
										language: t,
										listenWaveformType: l.UP(va.Hz),
										text: e.translation,
										transliteration: void 0,
										tts: e.tts,
										type: "waveform"
									};
									return {
										fromLanguageToken: {
											id: n,
											language: a,
											text: e.translation,
											transliteration: void 0,
											type: "text"
										},
										learningLanguageToken: r
									}
								}
								))
					}
					)(e))
					, r = Math.min(n.length, fa.E4)
					, s = e.challenge.type === ce.Sm.ExtendedListenMatch
					, [i, o] = s ? [1, r + 1] : [r + 1, 1];
				n.slice(0, r).forEach((({ fromLanguageToken: e, learningLanguageToken: n }) => {
					t.push(n),
						a.push(e)
				}
				));
				const c = l.TV(t).map(((e, t) => ({
					animation: void 0,
					hotKeyIndex: t + i,
					nextToken: void 0,
					status: "unmatched",
					token: e
				})));
				return {
					finishedPairsCount: 0,
					fromLanguageTokenProperties: a.map(((e, t) => ({
						animation: void 0,
						hotKeyIndex: t + o,
						nextToken: void 0,
						status: "unmatched",
						token: e
					}))),
					learningLanguageTokenProperties: c,
					totalPairsCount: e.challenge.pairs.length,
					unusedTokenPairs: n.slice(r),
					wrongMatchCount: 0
				}
			}
			)(e)));
		var ya = a(49492);
		const ba = e => {
			const { disabled: t, learningLanguage: a, onChange: n } = e
				, r = (0,
					W.tX)()
				, i = (0,
					W.Fx)(f.$4)
				, o = (0,
					ke.Z)()
				, [c, d] = s.useState()
				, [u, m] = Ea(e)
				, p = s.useRef({})
				, g = s.useRef([])
				, h = [...u.fromLanguageTokenProperties, ...u.learningLanguageTokenProperties]
				, v = !i
				, _ = (0,
					fa.al)({
						finishedPairsCount: u.finishedPairsCount,
						wrongMatchCount: u.wrongMatchCount
					});
			s.useEffect((() => {
				const e = () => {
					m({
						getNewAnimation: e => {
							var t;
							return "PRESS" === (null === (t = e.animation) || void 0 === t ? void 0 : t.name) ? void 0 : e.animation
						}
						,
						type: "SET_ALL_ANIMATIONS"
					})
				}
					;
				return document.addEventListener("pointerup", e),
					() => document.removeEventListener("pointerup", e)
			}
			), []);
			const E = l.MR([...u.learningLanguageTokenProperties, ...u.fromLanguageTokenProperties], "hotKeyIndex");
			return s.createElement("div", {
				className: (0,
					fa.iR)(e.challenge.type) ? ya.Z["wrap-listen-match"] : ya.Z.wrap,
				style: {
					"--match-challenge-rows": u.fromLanguageTokenProperties.length
				}
			}, E.map((l => ((l, f) => {
				var E;
				const { token: y, status: b, hotKeyIndex: S } = l
					, k = "matched" === b || t
					, C = "delayed" === b
					, x = c ? null === (E = (0,
						fa.Lv)(c, h)) || void 0 === E ? void 0 : E.token : void 0;
				return s.createElement(be.Z, {
					animatedSpeakerIconRef: (0,
						fa.Wi)(y) ? void 0 : e => {
							p.current[S] = e
						}
					,
					animation: l.animation,
					autoFocus: f.autoFocus,
					disabled: k,
					disabledStyle: o ? void 0 : "unstyled",
					key: S,
					language: y.language,
					numberKey: i ? S % 10 : void 0,
					onPointerDown: () => {
						C || "unmatched" !== b || c === S || o || m({
							animation: {
								isPair: void 0 !== c && x && x.language !== y.language,
								name: "PRESS"
							},
							index: S,
							type: "SET_ANIMATION"
						})
					}
					,
					onTap: () => {
						C || (t => {
							var s;
							const l = window.performance.now()
								, i = (0,
									fa.Lv)(t, h);
							if (void 0 === i)
								throw Error(`Challenge ${e.challenge.type}: selectedToken is undefined`);
							const f = i.token;
							if (t === c)
								return m({
									animation: void 0,
									index: c,
									type: "SET_ANIMATION"
								}),
									void d(void 0);
							if ((0,
								fa.iR)(e.challenge.type) && (0,
									fa.Wi)(f) && ((0,
										Le.a1)(f.tts, {
											requestedAt: l,
											text: f.text
										}),
										null === (s = p.current[t]) || void 0 === s || s.animate()),
								void 0 === c)
								return o || m({
									animation: {
										disableScaling: v,
										name: "SELECTED"
									},
									index: t,
									type: "SET_ANIMATION"
								}),
									void d(t);
							const E = (0,
								fa.Lv)(c, h);
							if (void 0 === E)
								throw Error(`Challenge ${e.challenge.type}: firstSelectedTokenProperties is undefined`);
							const y = E.token;
							if ((0,
								bt.gQ)("gradeCorrect") && (sa.Z.start("challenge_grade", {
									startTime: l
								}),
									n(u.finishedPairsCount)),
								y.language === f.language)
								return o || (m({
									animation: void 0,
									index: c,
									type: "SET_ANIMATION"
								}),
									m({
										animation: {
											disableScaling: v,
											name: "SELECTED"
										},
										index: t,
										type: "SET_ANIMATION"
									})),
									void d(t);
							const { learningLanguageTokenIndex: b, fromLanguageTokenIndex: S } = (0,
								fa.I_)(E, i, a);
							if (y.id !== f.id)
								return o ? (m({
									animation: {
										disabled: !1,
										name: "INCORRECT"
									},
									index: c,
									type: "SET_ANIMATION"
								}),
									m({
										animation: {
											disabled: !1,
											name: "INCORRECT"
										},
										index: t,
										type: "SET_ANIMATION"
									})) : (m({
										animation: {
											disableScaling: v,
											name: "INCORRECT_MATCH"
										},
										index: c,
										type: "SET_ANIMATION"
									}),
										m({
											animation: {
												disableScaling: v,
												name: "INCORRECT_MATCH"
											},
											index: t,
											type: "SET_ANIMATION"
										})),
									d(void 0),
									m({
										fromLanguageTokenIndex: S,
										learningLanguageTokenIndex: b,
										type: "WRONG_MATCH"
									}),
									void setTimeout((() => {
										m({
											fromLanguageTokenIndex: S,
											learningLanguageTokenIndex: b,
											type: "ENABLE_TAP"
										})
									}
									), _);
							var k;
							m({
								fromLanguageTokenIndex: S,
								learningLanguageTokenIndex: b,
								type: "MATCH"
							}),
								u.unusedTokenPairs.length > 0 ? (m({
									animation: {
										callback: () => {
											m({
												animation: {
													name: "FADE_IN"
												},
												fromLanguageTokenIndex: S,
												learningLanguageTokenIndex: b,
												type: "REPLACEMENT"
											})
										}
										,
										disableScaling: v,
										fadeOut: !0,
										name: "CORRECT_MATCH"
									},
									index: c,
									type: "SET_ANIMATION"
								}),
									m({
										animation: {
											disableScaling: v,
											fadeOut: !0,
											name: "CORRECT_MATCH",
											tapped: !0
										},
										index: t,
										type: "SET_ANIMATION"
									})) : (m({
										animation: {
											disableScaling: v,
											name: "CORRECT_MATCH"
										},
										index: c,
										type: "SET_ANIMATION"
									}),
										m({
											animation: {
												disableScaling: v,
												name: "CORRECT_MATCH",
												tapped: !0
											},
											index: t,
											type: "SET_ANIMATION"
										})),
								k = [c, t],
								g.current.forEach(((e, t) => {
									k.includes(t) || null == e || e.setPlaybackRate(fa.Er)
								}
								)),
								r({
									type: "CHALLENGE_GUESS_CHANGE",
									value: u.finishedPairsCount + 1
								}),
								d(void 0),
								u.finishedPairsCount + 1 === u.totalPairsCount && (sa.Z.start("challenge_grade", {
									startTime: window.performance.now()
								}),
									n(u.finishedPairsCount))
						}
						)(S)
					}
					,
					ref: e => {
						g.current[S] = e
					}
					,
					selected: c === S && o,
					size: be.I.Large,
					sparklesStyle: o ? void 0 : "match",
					text: y.text,
					textWrap: !0,
					waveformType: (0,
						fa.Wi)(y) ? y.listenWaveformType : void 0
				})
			}
			)(l, {
				autoFocus: 0 === l.hotKeyIndex
			}))))
		}
			, Sa = {
				wrap: "_1U-0g _1IiFg f7WE2 _3rat3",
				"wrap-character": "_1Gbzg UjFh4 _3rat3",
				prompt: "_3VDI9 _35mGI",
				"prompt-character": "_36uxi _3v0hd _35mGI",
				answer: "_2Z2k9 ccJ7o",
				"answer-character": "_2wdb9 _32LPr"
			}
			, ka = {
				wrap: "_1oUJI f7WE2 _3rat3",
				"wrap-image": "_19zj- _1oUJI f7WE2 _3rat3",
				prompt: "_1RAge",
				image: "_28xVk _1CuPQ",
				answer: "yKdp7 ccJ7o _3hg-V"
			};
		class Ca extends s.Component {
			componentDidUpdate(e) {
				const { challengeState: { guess: t }, disabled: a } = this.props;
				a || e.challengeState.guess === t || sa.Z.finish("challenge_typing")
			}
			render() {
				const { challenge: { image: e, maxGuessLength: t, prompt: a }, challengeState: { guess: n }, disabled: r, isDesktop: l, learningLanguage: i, onChange: o } = this.props;
				return s.createElement("div", {
					className: ka["wrap" + (e ? "-image" : "")]
				}, a ? s.createElement("div", {
					className: ka.prompt,
					dir: (0,
						ie.Ux)(i),
					lang: i
				}, a) : null, e ? s.createElement("img", {
					className: ka.image,
					src: e.svg
				}) : null, s.createElement("div", {
					className: ka.answer
				}, s.createElement(na, {
					autoFocus: l,
					disabled: r,
					inputLanguage: i,
					learningLanguage: i,
					maxLength: t,
					maxLengthWarning: 10,
					onChange: ({ }, e) => {
						sa.Z.start("challenge_typing"),
							o(e)
					}
					,
					value: null != n ? n : ""
				})))
			}
		}
		const xa = {
			wrap: "_3Jh10 _1IiFg f7WE2 _3rat3",
			"wrap-character": "wxM02 UjFh4 _3rat3",
			prompt: "_3gSoe _35mGI",
			"prompt-character": "_2CPUI _3v0hd _35mGI",
			answer: "_1BTbT ccJ7o",
			"answer-character": "_2M_8X _32LPr"
		}
			, Ta = {
				wrap: "_1N6U1 _1IiFg f7WE2 _3rat3",
				"wrap-character": "_2CQN3 UjFh4 _3rat3",
				prompt: "_c0S1",
				"prompt-character": "_2agBn _3v0hd",
				answer: "_13tJ8 ccJ7o",
				"answer-character": "_17x8_ _32LPr"
			}
			, wa = {
				wrap: "_1wDRL _1IiFg f7WE2 _3rat3",
				"wrap-character": "_etha UjFh4 _3rat3",
				prompt: "_3C4MQ",
				"prompt-character": "_3762I _1dtTU",
				answer: "I5gzU ccJ7o _3hg-V",
				"answer-character": "_2c7lO _32LPr _3hg-V"
			}
			, Na = e => e.challenge.type === ce.Sm.ListenTap
			, Ra = ({ challenge: e, challengeToggleState: t }) => e.type !== ce.Sm.ListenTap || t.isToggledToTyping ? s.createElement("span", null, (0,
				ee._i)(6961)) : s.createElement("span", null, (0,
					ee._i)(10461))
			, Ia = e => {
				const { challenge: { character: t, gradingResult: a, prompt: n, skipped: r, slowTts: l, tts: i }, challengeToggleState: o, disabled: c, isDesktop: d, learningLanguage: u } = e
					, m = (0,
						W.tX)();
				(0,
					v.L)(Na(e) ? ["listening"] : ["writing", "listening"]);
				const [p, g] = s.useState(!1)
					, [h, f] = s.useState(!1)
					, [_, E] = s.useState(0)
					, y = s.useRef(null)
					, b = s.useRef(null)
					, S = s.useRef();
				s.useEffect((() => {
					g(!0)
				}
				), []),
					s.useEffect((() => {
						_ > 1 && m({
							type: "CHALLENGE_HAS_BROKEN_TTS"
						})
					}
					), [_]),
					s.useEffect((() => {
						c || !S.current || Na(S.current) && !S.current.challengeToggleState.isToggledToTyping || Na(e) && !o.isToggledToTyping || S.current.challengeState.guess === e.challengeState.guess || sa.Z.finish("challenge_typing"),
							S.current = e
					}
					));
				const k = s.createElement(ye, {
					audio: i,
					autoplay: !p,
					onClick: () => {
						var e;
						return null === (e = b.current) || void 0 === e ? void 0 : e.focus()
					}
					,
					onTryPlay: e => y.current = null != e ? e : null,
					slowAudio: l,
					soundOptions: {
						eventListeners: [["ended", () => f(!1)], ["error", () => f(!1)], ["error", () => E((e => e + 1))], ["play", () => f(!0)]]
					},
					ttsTrackingData: {
						text: n
					},
					variant: t ? "in-audio-bubble" : void 0
				});
				return s.createElement("div", {
					className: wa["wrap" + (t ? "-character" : "")]
				}, s.createElement("div", {
					className: wa["prompt" + (t ? "-character" : "")]
				}, t ? s.createElement(Ee.Z, {
					audioEl: y,
					character: t,
					correct: r || null == a ? void 0 : a.correct,
					hasOnlyIcons: !0,
					lang: u
				}, k) : k), (() => {
					var a, r, l;
					if (Na(e) && !o.isToggledToTyping) {
						const { challenge: r, challengeState: { guess: l }, onChange: i } = e;
						return s.createElement(Me, {
							challengeType: ce.Sm.ListenTap,
							choices: r.choices,
							correctIndices: r.correctIndices,
							disabled: c,
							hasBorderTop: !!t,
							isDesktop: d,
							language: u,
							onChange: e => i({
								...l,
								tapTranscriptions: e
							}),
							onTryPlay: e => y.current = null != e ? e : null,
							onUnhandledOverflow: () => (0,
								V.track)("challenge_overflow", {
									challenge_type: "listen_tap",
									prompt: n
								}),
							playTtsOnSelect: !r.isOptionTtsDisabled && !h,
							typeToSelectSupported: (0,
								He.jc)(u),
							value: null !== (a = null == l ? void 0 : l.tapTranscriptions) && void 0 !== a ? a : []
						})
					}
					return s.createElement("div", {
						className: wa["answer" + (t ? "-character" : "")]
					}, s.createElement(na, {
						autoFocus: d,
						disabled: c,
						inputLanguage: u,
						learningLanguage: u,
						onChange: ({ }, t) => {
							sa.Z.start("challenge_typing"),
								Na(e) ? e.onChange({
									...e.challengeState.guess,
									transcription: t
								}) : e.onChange(t)
						}
						,
						refCallback: e => b.current = e,
						value: null !== (l = Na(e) ? null === (r = e.challengeState.guess) || void 0 === r ? void 0 : r.transcription : e.challengeState.guess) && void 0 !== l ? l : ""
					}))
				}
				)())
			}
			;
		var La = a(57611);
		const Pa = {
			wrap: "_3bgPw _1IiFg f7WE2 _3rat3",
			"wrap-character": "BZl0l UjFh4 _3rat3",
			prompt: "_3UKYk",
			"prompt-character": "_3_UP9 _1dtTU",
			answer: "_2yyNN ccJ7o _3hg-V",
			"answer-character": "_2SnPj _32LPr _3hg-V",
			"fake-textarea-player": "H-Fgo _2mrQw RpiVp",
			"input-container": "_2OBgL",
			"virtual-keyboard": "_3qBhY"
		}
			, Fa = {
				wrap: "_2gFzI f7WE2 _3rat3",
				"has-question": "_2rUcg",
				prompt: "_3S60K",
				"prompt-before-question": "xy-h1 _3S60K",
				question: "_1AAcP _35mGI _2UoAa"
			};
		var Aa = a(85346);
		const Za = {
			wrap: "_3rQUZ f7WE2 _3rat3",
			"wrap-character": "_26zG6 _3rat3",
			prompt: "_2v5hM _35mGI",
			"prompt-character": "_2DPgH _3v0hd _35mGI",
			"waveform-choice-list-character": "_208Eb",
			speaker: "Zz2Po _3CzhQ vAI_X"
		}
			, Da = a.p + "images/18758dd8bd61ed4f1783c8b0917fe899.svg"
			, Ma = a.p + "images/3ba488c6adbc110069936876062c593a.svg";
		var Oa = a(74679);
		const Ha = a.p + "images/807ec0a3ce75cbe9dd5503aad5b8c980.svg"
			, Ba = a.p + "images/d64537f440f76d909e9e0002843bf821.svg"
			, Ua = a.p + "images/7ae81d188f762d11391eed2b3e1e5361.svg"
			, Ga = a.p + "images/30f2150f6ef7d91df81bade2a3a27e8d.svg";
		var Wa = a(30445);
		const Va = ({ disabled: e, hasCharacter: t }) => {
			const a = "dark" === (0,
				ge.Fg)();
			return s.createElement("img", {
				className: t ? "WXznX" : "ohce8",
				src: t ? e ? a ? Ha : Ba : a ? Da : Ma : e ? a ? Ua : Ga : a ? Oa : Wa
			})
		}
			;
		var za = a(86042)
			, $a = a(68602)
			, Ka = a(58034)
			, ja = a(70752);
		const qa = (e, t, a, n, r) => {
			const l = (0,
				W.tX)()
				, [i, o] = s.useState(1)
				, c = (a = !1) => {
					sa.Z.start("challenge_grade"),
						sa.Z.start("speech_grade");
					const n = h.map((e => e.isRecognized ? e.text : "")).join(" ").length / t.length;
					e({
						score: a ? 1 : n,
						usedGuesses: a ? He.Tu : i
					}),
						m(),
						o(i + 1)
				}
				, { isRecognizing: d, recognizerResults: u, resetRecognizer: m, startRecognizing: p, stopRecognizing: g } = (0,
					ja.Z)(t, a, n, r, (async e => {
						switch (e.error) {
							case "audio-capture":
								console.error("Audio capture failed"),
									l({
										options: {
											message: (0,
												ee.H8)(14437),
											name: G.t.Alert,
											title: (0,
												ee.H8)(14056)
										},
										type: "TOGGLE_MODAL"
									});
								break;
							case "network":
								console.error("Recognizer failed to connect"),
									c(!0);
								break;
							case "no-speech":
								console.error("No speech detected"),
									(0,
										oe.Kp)("SpeechRecognition no-speech", {
											sample: .01
										}),
									c();
								break;
							case "not-allowed":
								(0,
									oe.Kp)("SpeechRecognition not-allowed"),
									l({
										options: {
											name: G.t.AllowMicrophone
										},
										type: "TOGGLE_MODAL"
									}),
									l({
										type: "MICROPHONE_PERMISSION",
										value: await (0,
											Ka.y)()
									});
								break;
							case "language-not-supported":
								console.warn("Recognizer does not support language"),
									(0,
										V.track)("recognizer_failed", {}),
									l({
										type: "SPEECH_RECOGNIZER_FAILED"
									}),
									l({
										speakDisabledUntil: (0,
											Xe.Zo)() + (0,
												Xe.dz)({
													days: 21
												}),
										type: "DISABLE_SPEAK"
									}),
									l((0,
										Re.YK)(!0, Date.now()));
								break;
							default:
								c(!0),
									(0,
										oe.Kp)("Exception from recognizer", {
											data: e.error
										})
						}
					}
					))
				, h = u.recognizerTokens;
			return s.useEffect((() => {
				u.isDone && (l({
					type: "MICROPHONE_PERMISSION",
					value: "granted"
				}),
					c())
			}
			), [u.isDone]),
			{
				isRecognizing: d,
				recognizerResultsTokens: h,
				startRecognizing: p,
				stopRecognizing: g
			}
		}
			, Xa = a.p + "images/2e76e45f3a761f700b7350be8e04fe16.svg"
			, Ya = a.p + "images/6810ca815599b4b512398dcd2109262a.svg"
			, Qa = {
				wrap: "_29sB2 f7WE2 _3rat3",
				"wrap-character": "XsYNy _3rat3",
				prompt: "_2zhDF _35mGI",
				"prompt-character": "QSAmL _3v0hd _35mGI",
				"prompt-container": "_3dk90",
				speaker: "PvopD _3CzhQ vAI_X",
				answer: "_3-hYj",
				bordered: "_3kBmE _3zGeZ _394fY RpiVp",
				"bordered-recording": "_23kfZ _3kBmE _3zGeZ _394fY RpiVp",
				recording: "_1Dqsq",
				button: "_3wJv9",
				"button-character": "YvvwP _3U5_i",
				"button-correct": "_2Ukqs",
				sparkles: "_2ZIf_",
				square: "_2THVO",
				"grow-in-large": "_2x2_e",
				"grow-in-small": "_2bxAQ",
				"square-blue": "_25j8-"
			};
		var Ja = a(71184)
			, en = a(27429);
		const tn = e => e.challenge.type === ce.Sm.ListenMatch || e.challenge.type === ce.Sm.RadioListenMatch
			, an = e => e.challenge.type === ce.Sm.RadioListenMatch
			, nn = () => {
				const e = (0,
					W.Fx)(f.$4);
				return s.createElement("span", null, e ? (0,
					ee._i)(31541) : (0,
						ee._i)(14245))
			}
			, rn = e => {
				const { disabled: t, fromLanguage: a, learningLanguage: n, onChange: r } = e;
				(0,
					v.L)(tn(e) ? ["listening"] : ["reading"]);
				const i = an(e) ? e.onRadioExerciseGrading : void 0
					, [{ solutionMap: o, tokens: c, ttsMap: d }] = s.useState((() => (e => {
						const t = []
							, a = {}
							, n = {}
							, r = (e, t) => {
								a[e] = a[e] || [],
									a[e].push(t)
							}
							, s = [va._v.WAVEFORM_1, va._v.WAVEFORM_2, va._v.WAVEFORM_3, va._v.WAVEFORM_4];
						return ((e => e.challenge.type === ce.Sm.CharacterMatch)(e) ? (e => {
							const { isOptionTtsDisabled: t, pairs: a } = e;
							return a.map((e => ({
								containsCharacter: !0,
								containsListenWaveform: !1,
								solutionToken: e.transliteration,
								solutionTokenTransliteration: e.tokenTransliteration,
								spokenToken: e.character,
								tts: t ? void 0 : e.tts
							})))
						}
						)(e.challenge) : tn(e) ? (e => {
							const { pairs: t } = e;
							return t.map((e => ({
								containsCharacter: !1,
								containsListenWaveform: !0,
								solutionToken: e.translation,
								solutionTokenTransliteration: void 0,
								spokenToken: e.translation,
								tts: e.tts
							})))
						}
						)(e.challenge) : an(e) ? (e => {
							const { pairs: t } = e;
							return t.map((e => ({
								containsCharacter: !1,
								containsListenWaveform: !0,
								solutionToken: e.translation,
								solutionTokenTransliteration: void 0,
								spokenToken: e.translation,
								tts: e.tts
							})))
						}
						)(e.challenge) : e.challenge.pairs.map((e => ({
							containsCharacter: !1,
							containsListenWaveform: !1,
							solutionToken: e.fromToken,
							spokenToken: e.learningToken,
							spokenTokenTransliteration: e.learningTokenTransliteration,
							tts: e.tts
						})))).forEach(((a, l) => {
							const { containsCharacter: i, containsListenWaveform: o, solutionToken: c, solutionTokenTransliteration: d, spokenToken: u, spokenTokenTransliteration: m, tts: p } = a;
							r(u, c),
								r(c, u),
								n[o ? c : u] = p,
								t.push({
									isCharacter: i,
									language: e.learningLanguage,
									text: u,
									transliteration: m
								});
							const g = s[l % s.length];
							t.push({
								isCharacter: !1,
								language: e.fromLanguage,
								listenWaveformType: o ? g : void 0,
								text: c,
								transliteration: d
							})
						}
						)),
						{
							solutionMap: a,
							tokens: l.TV(t),
							ttsMap: n
						}
					}
					)(e)))
					, u = c.map(((e, t) => ({
						index: t,
						token: e
					})))
					, [m, p] = s.useState([])
					, [g, h] = s.useState()
					, [_, E] = s.useState((() => u.map((({ index: e }) => e))))
					, [y, b] = s.useState(!1)
					, S = a === n
					, k = S ? u.filter((({ token: e }) => void 0 === e.listenWaveformType)) : u.filter((({ token: e }) => e.language === n))
					, C = S ? u.filter((({ token: e }) => void 0 !== e.listenWaveformType)) : u.filter((({ token: e }) => e.language === a))
					, x = (0,
						W.tX)()
					, T = (0,
						W.Fx)(f.$4)
					, w = (0,
						W.Fx)(st.hg)
					, N = (0,
						W.Fx)(en.eE)
					, R = (0,
						ke.Z)()
					, I = !T
					, L = s.useRef({});
				return s.useEffect((() => {
					const e = () => {
						p((e => e.map((e => "PRESS" === (null == e ? void 0 : e.name) ? void 0 : e))))
					}
						;
					return document.addEventListener("pointerup", e),
						() => document.removeEventListener("pointerup", e)
				}
				), []),
					s.createElement("div", {
						className: an(e) ? ya.Z["wrap-radio-listen-match"] : tn(e) ? ya.Z["wrap-listen-match"] : ya.Z.wrap,
						style: {
							"--match-challenge-rows": C.length
						}
					}, [...C, ...k].map((({ token: l, index: u }, v) => ((l, u, v, f) => {
						const k = t || !_.includes(u)
							, C = l.transliteration && (0,
								st.dN)(n, a, w) ? l.transliteration : void 0;
						return s.createElement(be.Z, {
							animatedSpeakerIconRef: void 0 === l.listenWaveformType ? void 0 : e => {
								L.current[u] = e
							}
							,
							animation: m[u],
							autoFocus: f.autoFocus,
							disabled: k,
							disabledStyle: _.includes(u) || !R ? "unstyled" : void 0,
							isCharacter: l.isCharacter,
							key: u,
							language: l.language,
							numberKey: T ? v : void 0,
							onPointerDown: () => {
								_.includes(u) && g !== u && !R && p((e => (0,
									Te.tP)(e, [u], {
										isPair: void 0 !== g && c[g].language !== l.language,
										name: "PRESS"
									})))
							}
							,
							onTap: () => (t => {
								var a;
								const n = window.performance.now()
									, s = c[t];
								if (t === g && void 0 === s.listenWaveformType)
									return p((e => (0,
										Te.tP)(e, [g], void 0))),
										void h(void 0);
								if (Object.prototype.hasOwnProperty.call(d, s.text)) {
									const r = d[s.text];
									r && ((tn(e) || an(e)) && void 0 === s.listenWaveformType || ((0,
										Le.a1)(r, {
											requestedAt: n,
											text: s.text
										}),
										null === (a = L.current[t]) || void 0 === a || a.animate()))
								}
								if (void 0 === g)
									return R || p((e => (0,
										Te.tP)(e, [t], {
											disableScaling: I,
											name: "SELECTED"
										}))),
										void h(t);
								const l = c[g];
								if ((0,
									bt.gQ)("gradeCorrect") && (sa.Z.start("challenge_grade", {
										startTime: n
									}),
										r([])),
									S ? void 0 === l.listenWaveformType == (void 0 === s.listenWaveformType) : l.language === s.language)
									return R || p((e => (e = (0,
										Te.tP)(e, [g], void 0),
										(0,
											Te.tP)(e, [t], {
												disableScaling: I,
												name: "SELECTED"
											})))),
										void h(t);
								if (!o[l.text].includes(s.text))
									return p(R ? e => (e = (0,
										Te.tP)(e, [g], {
											disabled: !1,
											name: "INCORRECT"
										}),
										(0,
											Te.tP)(e, [t], {
												disabled: !1,
												name: "INCORRECT"
											})) : e => (e = (0,
												Te.tP)(e, [g], {
													disableScaling: I,
													name: "INCORRECT_MATCH"
												}),
												(0,
													Te.tP)(e, [t], {
														disableScaling: I,
														name: "INCORRECT_MATCH",
														tapped: !0
													}))),
										h(void 0),
										void (y || (an(e) && i ? i(!1) : N && x((0,
											Ja.$)("session_mid")),
											b(!0)));
								const u = _.filter((e => e !== g && e !== t));
								p(R ? e => (e = (0,
									Te.tP)(e, [g], {
										disabled: !0,
										name: "CORRECT"
									}),
									(0,
										Te.tP)(e, [t], {
											disabled: !0,
											name: "CORRECT"
										})) : e => (e = (0,
											Te.tP)(e, [g], {
												disableScaling: I,
												name: "CORRECT_MATCH"
											}),
											(0,
												Te.tP)(e, [t], {
													disableScaling: I,
													name: "CORRECT_MATCH",
													tapped: !0
												}))),
									h(void 0),
									E(u),
									0 === u.length && (sa.Z.start("challenge_grade", {
										startTime: n
									}),
										r([]),
										i && i(!0))
							}
							)(u),
							selected: g === u && R,
							size: an(e) && !T ? be.I.Normal : be.I.Large,
							sparklesStyle: R ? void 0 : "match",
							text: l.text,
							transliteration: C,
							waveformType: l.listenWaveformType
						})
					}
					)(l, u, v < 10 ? (v + 1) % 10 : void 0, {
						autoFocus: 0 === v
					}))))
			}
			, sn = {
				"gap-grid": "_8g3cL",
				"multi-gap-grid": "_35Kau _8g3cL",
				choice: "_3BS5Z",
				"multi-choice": "fQWHl",
				hidden: "_2tbfR"
			}
			, ln = s.forwardRef((({ animation: e, choices: t, disabled: a, highlightIndex: n, isComposing: l, isHighlighted: i, isMultiGap: o, language: c, onTap: d, selectedIndices: u, size: m, sparklesStyle: p }, g) => {
				const h = null == u ? void 0 : u.map((e => t[null != e ? e : -1]))
					, v = (i, u, h) => {
						var v;
						return i ? s.createElement("span", {
							className: r()(sn[o ? "multi-choice" : "choice"], {
								[sn.hidden]: h
							}),
							key: u
						}, s.createElement(be.Z, {
							animation: h ? void 0 : e,
							disabled: a,
							disabledStyle: "unstyled",
							highlightIndex: n,
							isComposing: l,
							language: c,
							onTap: o ? () => d(t.indexOf(i)) : () => d(),
							ref: h ? void 0 : g,
							size: m,
							sparklesStyle: p,
							text: null !== (v = null == i ? void 0 : i.text) && void 0 !== v ? v : ""
						})) : null
					}
					;
				return s.createElement(da, {
					isHighlighted: i
				}, s.createElement("div", {
					className: sn[o ? "multi-gap-grid" : "gap-grid"]
				}, h && u && o ? s.createElement(s.Fragment, null, h.map(((e, t) => v(e, t, !1))), t.map(((e, t) => [e, t])).filter((([, e]) => !u.includes(e))).map((([e, t]) => v(e, t, !0)))) : t.map(((e, t) => {
					const a = h && h.length > 0 && e === h[0];
					return v(e, t, !a)
				}
				))))
			}
			))
			, on = "mldTA _35mGI"
			, cn = null
			, dn = {
				wrap: "GnA_p _1IiFg f7WE2 _3rat3",
				"wrap-character": "_2oI6A UjFh4 _3rat3",
				prompt: "nxuF- _35mGI",
				"prompt-character": "_1URZ6 _1dtTU _35mGI",
				"_answer-base": "_2v9tu _3hg-V",
				answer: "_2PTec ccJ7o _2v9tu _3hg-V",
				"answer-character": "_38vgR _32LPr _2v9tu _3hg-V",
				"fake-textarea-player": "_27G7W _2mrQw RpiVp",
				"position-absolute": "_1Trcy",
				"position-relative": "_1eovs",
				"_underline-base": "_29pmW _32bZV",
				"focus-underline": "_1hw4W _29pmW _32bZV",
				"blur-underline": "KnE2N _29pmW _32bZV",
				"placeholder-blank": "_2IjE3 _32bZV",
				"input-span": "_3F2tO",
				"initial-blank-width": "_3Lfpi",
				invisible: "_2NvPT"
			}
			, un = e => {
				if (!e)
					return;
				let t, a;
				document.createRange && (t = document.createRange(),
					t.selectNodeContents(e),
					t.collapse(!1),
					a = window.getSelection(),
					null == a || a.removeAllRanges(),
					null == a || a.addRange(t))
			}
			, mn = {
				wrap: "_29RWI _1IiFg f7WE2 _3rat3",
				"wrap-character": "_3cR3d UjFh4 _3rat3",
				prompt: "_2YXjl _35mGI",
				"prompt-character": "_33tKZ _1dtTU _35mGI",
				"_answer-base": "_19IGf _3hg-V",
				answer: "_3nLJp ccJ7o _19IGf _3hg-V",
				"answer-character": "_2y4cH _32LPr _19IGf _3hg-V",
				"fake-textarea-player": "_16AJ_ _2mrQw RpiVp",
				"position-absolute": "tapBI",
				"position-relative": "-MeP_",
				"_underline-base": "_2i8FG _32bZV",
				"focus-underline": "_25G-4 _2i8FG _32bZV",
				"blur-underline": "_2EMkI _2i8FG _32bZV",
				"placeholder-blank": "_2pNyl _32bZV",
				"input-span": "_1W1IX",
				"initial-blank-width": "IDtzN",
				invisible: "Id-Wa"
			}
			, pn = e => {
				if (!e)
					return;
				let t, a;
				document.createRange && (t = document.createRange(),
					t.selectNodeContents(e),
					t.collapse(!1),
					a = window.getSelection(),
					null == a || a.removeAllRanges(),
					null == a || a.addRange(t))
			}
			, gn = "_2vFEV"
			, hn = ({ headers: e, tableCells: t }) => {
				const a = e && t[0] ? s.createElement("tr", {
					className: "_1daFp _3V8Dc"
				}, t[0].map(((e, t) => s.createElement("th", {
					className: gn,
					key: t
				}, e)))) : null
					, n = t.slice(1).map(((e, t) => s.createElement("tr", {
						className: "_3o0Vl _3V8Dc",
						key: t
					}, e.map(((e, t) => s.createElement("td", {
						className: gn,
						key: t
					}, e))))));
				return s.createElement("table", {
					className: "_2WX-v"
				}, a ? s.createElement("thead", null, a) : null, s.createElement("tbody", null, n))
			}
			, vn = {
				prompt: "_3444J _35mGI",
				question: "_39oL4 _35mGI TrS6n _2UoAa",
				answer: "_1_f5y ccJ7o _3hg-V",
				"gap-wrap": "_3sKWR",
				table: "_18Col",
				"table-entry": "ZBd53"
			}
			, fn = {
				disabled: !1,
				name: "CORRECT",
				showSparkles: !0
			};
		var _n = a(20302);
		const En = "_2p3iB";
		var yn = a(88268);
		const bn = s.forwardRef((({ disabled: e, onClick: t, position: a, prompts: n, shouldShowPrompt: l }, i) => {
			const [o, c] = n
				, d = "top" === a ? o : c;
			return s.createElement(q.Z, {
				className: "bottom" === a ? "_19V_x _302NN" : "_336SO _302NN",
				disabled: e,
				onClick: t,
				unstyledDisabled: !0,
				variant: "stroke"
			}, s.createElement("span", {
				className: "_3znFw"
			}, s.createElement(_n.Z, {
				className: "_3p_vi _219j-",
				color: "macaw",
				ref: i,
				type: "large"
			}), s.createElement("span", {
				className: "_18HOD"
			}, s.createElement("span", {
				className: r()("_1FoBF", {
					_1j65r: !l
				})
			}, d), s.createElement("span", {
				className: En
			}, o), s.createElement("span", {
				className: En
			}, c))))
		}
		))
			, Sn = ({ disabled: e, hasUserGuessed: t, prompts: a, ttsUrls: n }) => {
				const r = s.useRef(null)
					, l = s.useRef(null)
					, [i, o] = a
					, [c, d] = n
					, u = (e, t, a, n) => {
						var r;
						null === (r = a.current) || void 0 === r || r.animate(),
							(0,
								Le.a1)(e, {
									requestedAt: window.performance.now(),
									text: t
								}, n)
					}
					, m = () => u(c, i, r)
					, p = () => u(d, o, l)
					, g = () => {
						u(c, i, r, {
							eventListeners: [["ended", p]]
						})
					}
					;
				return s.useEffect((() => {
					e || g()
				}
				), []),
					s.useEffect((() => {
						const t = t => {
							if (!e)
								switch (t.key) {
									case "ArrowUp":
										m();
										break;
									case "ArrowDown":
										p();
										break;
									default:
										(0,
											yn.b)(t, "tts") && g()
								}
						}
							;
						return vt.U.addListener(document, "keydown", t),
							() => vt.U.removeListener(document, "keydown", t)
					}
					)),
					s.createElement("div", {
						className: "_1j8q_"
					}, s.createElement(bn, {
						disabled: e,
						onClick: m,
						position: "top",
						prompts: a,
						ref: r,
						shouldShowPrompt: t,
						tts: c
					}), s.createElement(bn, {
						disabled: e,
						onClick: p,
						position: "bottom",
						prompts: a,
						ref: l,
						shouldShowPrompt: t,
						tts: d
					}))
			}
			, kn = {
				wrap: "_3GT5Y f7WE2 _3rat3",
				"wrap-character": "_37K1z UjFh4 _3rat3",
				"minimal-pairs-wrap": "sSGGT f7WE2 _3rat3",
				"minimal-pairs-wrap-character": "_31xEq UjFh4 _3rat3",
				prompt: "_1R8H6",
				"prompt-character": "_3X5vg _3v0hd",
				answer: "_1iLiY",
				"answer-character": "_jufR _32LPr"
			}
			, Cn = e => e.type === ce.Sm.SelectPronunciation
			, xn = () => s.createElement("span", null, (0,
				ee._i)(21070))
			, Tn = ({ challenge: e, challenge: { character: t, choices: a, correctIndex: n, gradingResult: r, isOptionTtsDisabled: l, skipped: i }, challengeState: { guess: o }, disabled: c, isDesktop: d, learningLanguage: u, onChange: m }) => {
				const p = (0,
					W.tX)();
				(0,
					v.L)(Cn(e) ? ["listening"] : ["reading", "listening"]);
				const g = s.useRef(null)
					, [h, f] = s.useState(0)
					, _ = () => f((e => e + 1));
				s.useEffect((() => {
					h > 1 && p({
						type: "CHALLENGE_HAS_BROKEN_TTS"
					})
				}
				), [h]);
				const E = s.createElement(he.Z, {
					audio: Cn(e) ? e.choices[n].tts : e.tts,
					autoplay: !0,
					onTryPlay: e => g.current = null != e ? e : null,
					soundOptions: {
						eventListeners: [["error", _]]
					},
					ttsTrackingData: {
						text: e.choices[n].text
					},
					type: "large",
					variant: t ? "in-audio-bubble" : void 0
				})
					, y = 2 === e.choices.length;
				return s.createElement("div", {
					className: kn[`${y ? "minimal-pairs-" : ""}wrap${t ? "-character" : ""}`]
				}, s.createElement("div", {
					className: kn["prompt" + (t ? "-character" : "")]
				}, t ? s.createElement(Ee.Z, {
					audioEl: g,
					character: t,
					correct: i || null == r ? void 0 : r.correct,
					hasOnlyIcons: !0,
					lang: u
				}, s.createElement("span", null, E)) : E), s.createElement(at.Z, {
					autoFocus: !0,
					choiceStyle: d || y ? void 0 : "tall",
					choices: e.choices.map((e => e.text)),
					className: kn["answer" + (t ? "-character" : "")],
					correct: i || null == r ? void 0 : r.correct,
					correctIndex: n,
					disabled: c,
					language: u,
					onChange: e => {
						var t;
						const n = window.performance.now();
						m(e);
						const { text: r, tts: s } = a[e];
						s && !0 !== l && (g.current = null !== (t = (0,
							Le.a1)(s, {
								requestedAt: n,
								text: r
							}, {
								eventListeners: [["error", _]]
							})) && void 0 !== t ? t : null)
					}
					,
					overflowBehavior: {
						shouldHandleOverflow: !1
					},
					type: y ? "two-columns-desktop-column-mobile" : "two-columns",
					value: o
				}))
			}
			, wn = {
				wrap: "_3S158 f7WE2 _3rat3",
				"grid-and-tokens-wrap": "_3eC04",
				prompt: "_19e__",
				"grid-wrap": "lMAvy",
				grid: "_1DkfT",
				white: "_2L91r",
				green: "_2y8wL",
				cell: "_3r6fb",
				empty: "_1KzSj",
				filled: "_2rB4-",
				selected: "_3UFkx",
				disabled: "_3Aqrf",
				"fast-animation": "_2eoSV",
				"filled-line-eel": "_1-hbt",
				"filled-line-snow": "_1iYPU _1-hbt",
				"g-animate-correct": "_3b4UK",
				center: "_3yj2s",
				"hidden-stroke-appear": "_1FcjD",
				appear: "_56ckM",
				"g-animate-incorrect": "-_Cyo",
				"snap-back": "_2q0ki"
			}
			, Nn = (e, t, a) => e >= t && e <= a
			, Rn = (e, t, a, n) => {
				const { path: r, origin: s } = e
					, { path: l, maxX: i, maxY: o, minX: c, minY: d } = r;
				return l.slice(0, -1).map(((e, r) => {
					const u = (e.x + s.x) * t
						, m = (e.y + s.y) * t;
					if (!(e.x + s.x !== 0 && e.x + s.x !== n || e.y + s.y !== 0 && e.y + s.y !== a)) {
						const a = l[r + 1]
							, n = e.y - a.y == 0
							, p = Nn(u + yt.n_, (c + s.x) * t, (i + s.x) * t) ? yt.n_ : -1 * yt.n_
							, g = Nn(m + yt.n_, (d + s.y) * t, (o + s.y) * t) ? yt.n_ : -1 * yt.n_;
						return `${0 === r ? "M" : "L"}${u + (n ? 0 : p)},${m + (n ? g : 0)} Q${u},${m} ${u + (n ? p : 0)},${m + (n ? 0 : g)} `
					}
					return `${0 === r ? "M" : "L"}${u},${m}`
				}
				)).join(" ").concat("Z")
			}
			, In = s.forwardRef((({ center: e, className: t, height: a, scalingFactor: n = 1, strokeColor: r = "eel", strokes: l, style: i, width: o, x: c, y: d }, u) => {
				const m = s.useRef(null)
					, p = s.useRef(null)
					, [g, h] = s.useState()
					, [v, f] = s.useState();
				return s.useLayoutEffect((() => {
					if (null === m.current || null === p.current)
						return;
					const t = p.current.getBBox()
						, a = t.x + t.width / 2
						, n = t.y + t.height / 2;
					h(e.x - a),
						f(e.y - n)
				}
				), [a, o]),
					s.createElement("svg", {
						height: a,
						ref: m,
						viewBox: a && o ? `0 0 ${a} ${o}` : void 0,
						width: o,
						x: c,
						y: d
					}, s.createElement("g", {
						className: t,
						ref: (0,
							oa.Z)([u, p]),
						style: void 0 === g || void 0 === v ? void 0 : {
							...i,
							"--x-offset": `${g}px`,
							"--y-offset": `${v}px`
						},
						transform: void 0 === g || void 0 === v ? void 0 : `translate(${e.x * (1 - n)},${e.y * (1 - n)}) scale(${n}) translate(${g},${v})`
					}, null == l ? void 0 : l.map(((e, t) => s.createElement("path", {
						className: wn["eel" === r ? "filled-line-eel" : "filled-line-snow"],
						d: e,
						key: t
					})))))
			}
			))
			, Ln = ({ cellSize: e, gridCols: t, gridRows: a, strokes: n, selected: l, info: i, index: o, fast: c, onClick: d, disabled: u }) => {
				const m = s.useRef(null)
					, p = {
						x: (i.center.x + i.origin.x) * e,
						y: (i.center.y + i.origin.y) * e
					}
					, g = r()(wn.cell, {
						[wn.empty]: void 0 === n,
						[wn.selected]: l && !u,
						[wn.filled]: void 0 !== n && !u,
						[wn.disabled]: u,
						[wn["fast-animation"]]: c
					})
					, h = void 0 !== n && !u;
				return s.createElement("g", {
					onClick: () => null == d ? void 0 : d(o)
				}, s.createElement("path", {
					className: g,
					d: Rn(i, e, a, t),
					filter: h ? "url(#shadow)" : void 0,
					ref: m
				}), void 0 === n ? null : s.createElement(In, {
					center: p,
					height: e * t,
					scalingFactor: .65,
					strokes: n,
					width: e * a
				}))
			}
			, Pn = ({ animationState: e, cellSize: t, children: a, numCols: n, numRows: l }) => {
				const i = (0,
					yt.u_)(e);
				return s.createElement("svg", {
					className: r()(wn.grid, i ? wn[i] : null),
					style: {
						height: l * t + "px",
						width: n * t + "px"
					},
					viewBox: `0 0 ${l * t} ${n * t}`
				}, s.createElement("defs", null, s.createElement("filter", {
					id: "shadow"
				}, s.createElement("feDropShadow", {
					dx: "0",
					dy: "3",
					floodColor: "rgb(var(--color-swan))",
					stdDeviation: "0"
				}))), a)
			}
			, Fn = ({ animationState: e, cellSize: t, choices: a, height: n, items: r, width: l }) => {
				const [i, o] = s.useState()
					, [c, d] = s.useState()
					, u = s.useRef(null)
					, m = {
						x: l / 2,
						y: n / 2
					}
					, p = [yt.SR.CorrectMoveInwards, yt.SR.CorrectShowFinalWord, yt.SR.CorrectFinal].includes(e);
				r.forEach((e => {
					void 0 === e.choiceIndex && console.warn("Item missing a choice index")
				}
				)),
					s.useLayoutEffect((() => {
						if (!p)
							return o(`${m.x}px`),
								void d(`${m.y}px`);
						if (null === u.current)
							return;
						const e = u.current.getBBox()
							, t = e.x + e.width / 2
							, a = e.y + e.height / 2;
						if (p) {
							const e = {
								x: (m.x - t) / l * 100,
								y: (m.y - a) / n * 100
							};
							o(`${e.x}%`),
								d(`${e.y}%`)
						}
					}
					), []);
				const g = p ? wn["g-animate-correct"] : wn["g-animate-incorrect"];
				return s.createElement(s.Fragment, null, i && c ? r.map(((e, n) => {
					var r;
					const l = {
						x: (e.center.x + e.origin.x) * t,
						y: (e.center.y + e.origin.y) * t
					};
					return s.createElement(In, {
						center: l,
						className: g,
						key: n,
						scalingFactor: .65,
						strokes: a[null !== (r = e.choiceIndex) && void 0 !== r ? r : 0].strokes,
						style: {
							"--x-translation": i,
							"--y-translation": c,
							"--scaling-factor": "0.65",
							"--scaled-center-x": `${l.x}px`,
							"--scaled-center-y": `${l.y}px`
						}
					})
				}
				)) : null, p ? s.createElement(In, {
					center: m,
					className: wn["hidden-stroke-appear"],
					ref: u,
					strokeColor: "snow",
					strokes: r.flatMap((e => {
						var t;
						return a[null !== (t = e.choiceIndex) && void 0 !== t ? t : 0].strokes
					}
					))
				}) : null)
			}
			, An = {
				"gap-grid": "eQb2V",
				choice: "_3aXCr",
				"choice-hidden": "ZyHEI _3aXCr",
				"damaged-text-start": "_2kwde _1bjzW _3KOTX DL_ii _2sNVM _2LoNU VzbUl _1AgKJ _1w2Ut _3wPHf _2Rt1l _3YrGx _5azrm WHVbR _1hIFd",
				"damaged-text-start-dark": "_1Bp6N _2kwde _1bjzW _3KOTX DL_ii _2sNVM _2LoNU VzbUl _1AgKJ _1w2Ut _3wPHf _2Rt1l _3YrGx _5azrm WHVbR _1hIFd",
				"size-large": "qroi5",
				"size-normal": "_12fQz"
			}
			, Zn = void 0
			, Dn = ({ choice: e, damageStart: t, disabled: a, endRef: n, fullText: l, language: i, onTap: o, possibleChoices: c, size: d, tokenProps: u }) => {
				const m = "dark" === (0,
					ge.Fg)()
					, p = l.slice(0, t);
				return s.createElement(da, null, s.createElement("span", {
					className: An["gap-grid"]
				}, [Zn, ...c].map(((t, l) => {
					const c = t === e;
					return s.createElement("span", {
						className: An["choice" + (c ? "" : "-hidden")],
						key: l
					}, s.createElement("span", {
						className: r()(m ? An["damaged-text-start-dark"] : An["damaged-text-start"], An[`size-${d}`]),
						lang: i
					}, p), t === Zn ? null : s.createElement(be.Z, {
						disabled: a || !c,
						disabledStyle: "unstyled",
						language: i,
						onTap: o,
						ref: n,
						size: d,
						text: t,
						variant: "damaged-end-in-answer",
						...c ? u : {}
					}))
				}
				))))
			}
			, Mn = {
				wrap: "_3Mge5 f7WE2 _3rat3",
				"wrap-image": "d21Kp _3Mge5 f7WE2 _3rat3",
				image: "_2rgPQ _1CuPQ",
				prompt: "_35PZ2 _35mGI",
				answer: "_1ywbs",
				"gap-wrap": "_17wB6"
			}
			, On = null
			, Hn = {
				wrap: "_34aEz _1IiFg f7WE2 _3rat3",
				"wrap-character": "iPZZY UjFh4 _3rat3",
				prompt: "aMPis _35mGI",
				"prompt-with-transliterations": "_9MQJJ",
				"prompt-character": "_2w0y3 _1dtTU _35mGI",
				speaker: "_2jwEY _3CzhQ vAI_X",
				"speaker-transliterations": "_3_djm",
				answer: "_1FRGW ccJ7o _3hg-V",
				"answer-character": "u5Wzl _32LPr _3hg-V"
			};
		var Bn = a(89260);
		var Un = a(43006);
		const Gn = s.forwardRef((({ autoFocus: e = !1, damageStart: t = 0, disabled: a, disablePlaceholder: n = !1, fullText: r, language: l, onChange: i, onFocus: o, value: c }, d) => {
			const u = r.slice(0, t)
				, m = r.slice(t)
				, p = n ? "" : t > 0 ? Un.qv : (0,
					ee.H8)(20190);
			return s.createElement("span", {
				className: "_3zNLA"
			}, s.createElement("span", {
				className: "_2lxJC",
				lang: l
			}, t > 0 ? s.createElement("span", {
				className: "_3W2-l"
			}, u) : null, s.createElement("span", {
				className: t > 0 ? "_2draG" : "_3x5oF"
			}, s.createElement(zt, null, n ? `___${m}` : `_${m}`), s.createElement(zt, null, p), s.createElement("input", {
				...ta.N,
				autoFocus: e,
				className: "b4jqk _3mwuq",
				disabled: a,
				maxLength: Math.max(n ? m.length + 15 : m.length + 1, p.length),
				onChange: e => i(e.target.value),
				onFocus: o,
				placeholder: t > 0 ? "" : p,
				ref: d,
				size: 1,
				type: "text",
				value: c
			}))))
		}
		))
			, Wn = {
				wrap: "_2dpIk _1IiFg f7WE2 _3rat3",
				prompt: "_2aU6A",
				"sentence-padding": "_22kZK"
			}
			, Vn = e => void 0 !== e.damageStart
			, zn = ({ challenge: e }) => e.type === ce.Sm.TypeClozeTable ? s.createElement("span", null, (0,
				ee._i)(7721)) : s.createElement("span", null, (0,
					ee._i)(2082))
			, $n = ({ challenge: { displayTableTokens: e, headers: t, tableTokens: a }, challengeState: { guess: n = [] }, disabled: r, learningLanguage: l, onChange: i }) => {
				var o, c, d;
				(0,
					v.L)(["writing"]);
				const u = s.useRef(new Array(e.length).fill([]).map((() => new Array(e[0].length))))
					, [m, p] = s.useState((() => (0,
						Ye.ao)(e)))
					, g = e => {
						const t = n.map((t => t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t));
						i(t)
					}
					;
				return s.createElement("div", {
					dir: (0,
						ie.Ux)(l)
				}, s.createElement(hn, {
					headers: t,
					tableCells: (0,
						Ye.tl)(e, a, ((e, t, a) => {
							var i;
							const { colIndex: o, rowIndex: c } = e
								, d = n.find((e => e.colIndex === o && e.rowIndex === c));
							return (Vn(t) || (e => e.isBlank)(t)) && d ? s.createElement(Gn, {
								autoFocus: e.colIndex === n[0].colIndex && e.rowIndex === n[0].rowIndex,
								damageStart: Vn(t) ? t.damageStart : void 0,
								disabled: r,
								fullText: t.text,
								language: l,
								onChange: e => g({
									colIndex: o,
									guess: e,
									rowIndex: c
								}),
								onFocus: () => {
									p(e)
								}
								,
								ref: t => {
									m.colIndex === o && m.rowIndex === c && (u.current[e.rowIndex][e.colIndex] = t)
								}
								,
								value: null !== (i = d.guess) && void 0 !== i ? i : ""
							}) : a ? s.createElement(Vt.Z, {
								highlightStyle: "normal",
								inTabOrder: !1,
								isForward: !0,
								language: l,
								tokens: [a]
							}) : s.createElement("div", {
								lang: l
							}, t.text)
						}
						))
				}), s.createElement(Yt, {
					disabled: r,
					inputElement: null !== (o = u.current[m.colIndex][m.rowIndex]) && void 0 !== o ? o : void 0,
					language: l,
					onChange: ({ }, e) => g({
						...m,
						guess: e
					}),
					value: null !== (d = null === (c = n.find((e => e.rowIndex === m.rowIndex && e.colIndex === m.colIndex))) || void 0 === c ? void 0 : c.guess) && void 0 !== d ? d : ""
				}))
			}
			, Kn = {
				prompt: "Y6M7D _35mGI",
				question: "_1PWiI _35mGI TrS6n _2UoAa",
				answer: "_1ll8C ccJ7o _3hg-V"
			};
		var jn = a(1398);
		const qn = (0,
			jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(2322)]).then(a.bind(a, 29576)).then((e => ({
				default: e.ChessStarChallenge
			})))))
			, Xn = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(2322)]).then(a.bind(a, 29576)).then((e => ({
					default: e.ChessStarChallengeHeader
				})))))
			, Yn = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1808)]).then(a.bind(a, 3769)).then((e => ({
					default: e.ChessPuzzleChallenge
				})))))
			, Qn = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1808)]).then(a.bind(a, 3769)).then((e => ({
					default: e.ChessPuzzleChallengeHeader
				})))))
			, Jn = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1808)]).then(a.bind(a, 3769)).then((e => ({
					default: e.ChessPuzzleChallenge
				})))))
			, er = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1808)]).then(a.bind(a, 3769)).then((e => ({
					default: e.ChessPuzzleChallengeHeader
				})))))
			, tr = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1913)]).then(a.bind(a, 46574)).then((e => ({
					default: e.ChessMatchChallenge
				})))))
			, ar = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(7871), a.e(7321), a.e(1913)]).then(a.bind(a, 46574)).then((e => ({
					default: e.ChessMatchChallengeHeader
				})))))
			, nr = (0,
				jn.ZP)((() => a.e(8162).then(a.bind(a, 98162)).then((e => ({
					default: e.ChessMiniMatchChallenge
				})))))
			, rr = (0,
				jn.ZP)((() => a.e(8162).then(a.bind(a, 98162)).then((e => ({
					default: e.ChessMiniMatchChallengeHeader
				})))))
			, sr = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(3507), a.e(7871), a.e(9011)]).then(a.bind(a, 89013)).then((e => ({
					default: e.ChessPvpMatchChallenge
				})))))
			, lr = (0,
				jn.ZP)((() => Promise.all([a.e(9365), a.e(3507), a.e(7871), a.e(9011)]).then(a.bind(a, 89013)).then((e => ({
					default: e.ChessPvpMatchChallengeHeader
				})))));
		var ir = a(20503)
			, or = a(3760)
			, cr = a(75110);
		const dr = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
			...(0,
				Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
			className: or.Z.challenge
		}, s.createElement("div", {
			className: or.Z["challenge-container-centered"]
		}, a, s.createElement("div", {
			className: or.Z["content-centered"]
		}, t)))
			, ur = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
				...(0,
					Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
				className: or.Z["challenge-flex"]
			}, s.createElement("div", {
				className: or.Z["challenge-container-centered"]
			}, a, s.createElement("div", {
				className: or.Z["content-centered"]
			}, t)))
			, mr = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
				...(0,
					Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
				className: or.Z["challenge-flex"]
			}, s.createElement("div", {
				className: or.Z["challenge-container-centered"]
			}, a, t))
			, pr = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
				...(0,
					Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
				className: or.Z["challenge-flex-wide"]
			}, s.createElement("div", {
				className: or.Z["challenge-container-wide"]
			}, s.createElement("div", {
				className: or.Z["wide-header"]
			}, a), t))
			, gr = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
				...(0,
					Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
				className: or.Z.challenge
			}, s.createElement("div", {
				className: or.Z["challenge-container-centered"]
			}, a, t))
			, hr = ({ challenge: e, challengeState: t, content: a, header: n }) => (0,
				W.Fx)(f.$4) ? gr({
					challenge: e,
					challengeState: t,
					content: a,
					header: n
				}) : vr({
					challenge: e,
					challengeState: t,
					content: a,
					header: n
				})
			, vr = ({ challenge: e, challengeState: t, content: a, header: n }) => {
				const l = (0,
					le.j4)({
						challenge: e,
						challengeState: t
					});
				return s.createElement("div", {
					...(0,
						Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
					className: or.Z["challenge-incremental"]
				}, s.createElement("div", {
					className: r()(or.Z["challenge-container-incremental"], or.Z[(l ? "" : "un") + "scrollable"])
				}, s.createElement("div", {
					className: or.Z[`spacing-${l ? "in" : ""}visible`]
				}), s.createElement("div", {
					className: or.Z["content-incremental"]
				}, n, a)))
			}
			, fr = ({ challenge: e, content: t, header: a }) => s.createElement("div", {
				...(0,
					Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
				className: or.Z["challenge-adaptive-scroll"]
			}, s.createElement("div", {
				className: or.Z["challenge-container-adaptive-scroll"]
			}, a, t))
			, _r = {
				[ce.Sm.Assist]: {
					Container: gr,
					Content: ({ challenge: { character: e, correctIndex: t, gradingResult: a, options: n, prompt: r, skipped: l }, challengeState: { guess: i }, disabled: o, fromLanguage: c, learningLanguage: d, onChange: u }) => {
						const m = (0,
							W.Fx)(st.hg);
						(0,
							v.L)(["reading"]);
						const p = (0,
							st.dN)(d, c, m) ? n.map((e => (void 0 === e.textTransliteration && (0,
								oe.Kp)(`Missing a transliteration for ${e.text}!`, {
									once: !0
								}),
								e.textTransliteration))) : void 0
							, g = {
								correctIndex: t,
								options: n,
								prompt: r
							};
						return s.createElement(rt, {
							challenge: g,
							character: e,
							choiceTransliterations: p,
							disabled: o,
							gradingResult: a,
							guess: i,
							language: d,
							onSelect: e => {
								const t = window.performance.now();
								u(e);
								const { text: a, tts: r } = n[e];
								r && (0,
									Le.a1)(r, {
										requestedAt: t,
										text: a
									})
							}
							,
							promptLanguage: c,
							skipped: l
						})
					}
					,
					Header: ({ challenge: { character: e, prompt: t } }) => s.createElement("span", null, e ? (0,
						ee._i)(25925) : (0,
							ee._i)(19598, {
								word: t
							}))
				},
				[ce.Sm.CharacterIntro]: {
					Container: gr,
					Content: ({ challenge: { choices: e, choiceTransliterations: t, correctIndex: a, gradingResult: n, prompt: r, skipped: l, tts: i }, challengeState: { guess: o }, disabled: c, fromLanguage: d, learningLanguage: u, onChange: m }) => {
						const p = s.useRef([])
							, g = (0,
								W.Fx)(st.hg);
						(0,
							v.L)(["reading", "listening"]);
						const { scale: h } = dt(p, {
							maxScale: 1
						});
						return s.createElement("div", {
							className: "_2A8Mi f7WE2 _3rat3"
						}, s.createElement("div", {
							className: "_25SW8"
						}, s.createElement(ct.Z, {
							className: "_3mcSc",
							fontSize: 72,
							learningLanguage: u,
							ref: e => p.current[0] = e,
							scale: h
						}, r), s.createElement(he.Z, {
							audio: i,
							autoplay: !0,
							className: "_1OHLR",
							ttsTrackingData: {
								text: r
							},
							type: "small",
							useKeyboardShortcut: !0
						})), s.createElement(at.Z, {
							autoFocus: !0,
							choiceTransliterations: t && (0,
								st.dN)(u, d, g) ? t : void 0,
							choices: e,
							correct: l || null == n ? void 0 : n.correct,
							correctIndex: a,
							disabled: c,
							language: u,
							onChange: m,
							overflowBehavior: {
								shouldHandleOverflow: !1
							},
							type: "column-desktop-row-mobile",
							value: o
						}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(15437))
				},
				[ce.Sm.CharacterMatch]: {
					Container: dr,
					Content: rn,
					Header: nn
				},
				[ce.Sm.CharacterPuzzle]: {
					Container: dr,
					Content: e => {
						var t;
						const { disabled: a, learningLanguage: n, challenge: i, onChange: o } = e
							, [c, d] = s.useState([])
							, [u] = s.useState((() => (e => {
								const t = e.map(((e, t) => ({
									...e,
									originalIndex: t
								})));
								return (0,
									bt.gQ)("sampleSession") ? t : l.TV([...t])
							}
							)((0,
								yt.cd)(i.correctIndices, i.choices))))
							, [m, p] = s.useState((() => i.gridItems.map((e => ({
								colStart: e.colStart,
								numCols: e.colEnd - e.colStart,
								numRows: e.rowEnd - e.rowStart,
								rowStart: e.rowStart
							})))))
							, [g, h] = s.useState(0)
							, [_, E] = s.useState()
							, [y, b] = s.useState()
							, S = void 0 === i.indicatorType || ![ce.A.HardChallenge, ce.A.LimitedTts].includes(i.indicatorType);
						(0,
							v.L)(["writing"]);
						const k = (0,
							W.Fx)(f.lA)
							, C = e => {
								if (k.status === St.c.Blaming)
									return;
								const t = m[e].choiceIndex;
								void 0 !== t && (S && (0,
									Le.GN)(u[t].tts),
									d(c.filter((t => t !== m[e].choiceIndex)))),
									h(e);
								const a = m.map(((t, a) => a === e ? {
									...t,
									choiceIndex: void 0
								} : t));
								p(a),
									o({
										choices: a.map((e => void 0 === e.choiceIndex ? -1 : u[e.choiceIndex].originalIndex))
									})
							}
							, x = kt(null != _ ? _ : 0)
							, T = void 0 === _ ? 0 : Math.min(x, _ * i.numRows * .4)
							, w = void 0 === _ ? 0 : Math.max(25, T * ("ar" === n ? .7 : .5))
							, N = void 0 === _ ? 0 : i.numRows * _
							, R = void 0 === _ ? 0 : Math.max(10, y === yt.SR.CorrectFinal ? (N - T - 10 - w) / 2 : (N - T) / 2)
							, I = async e => {
								for (const [t, a] of e)
									b(t),
										a && await (0,
											Et._v)(a)
							}
							;
						s.useEffect((() => {
							var e;
							k.status === St.c.Blaming && ((null === (e = i.gradingResult) || void 0 === e ? void 0 : e.correct) ? I([[yt.SR.CorrectMoveInwards, 355], [yt.SR.CorrectShowFinalWord, 900], [yt.SR.CorrectFinal, void 0]]) : i.skipped || I([[yt.SR.IncorrectMoveInwards, 355], [yt.SR.IncorrectSnapBack, void 0]]))
						}
						), [k.status]);
						const L = s.useRef(null)
							, P = (0,
								W.Fx)((e => e.ui.viewportHeight))
							, F = (0,
								W.Fx)((e => e.ui.viewportWidth))
							, A = (0,
								W.Fx)(f.$4);
						s.useLayoutEffect((() => {
							if (L.current) {
								const { numRows: e, numCols: t } = i
									, a = L.current.getBoundingClientRect().width
									, r = L.current.getBoundingClientRect().height
									, s = Math.min(a / t, r / e)
									, l = A ? s : a / t * .6
									, o = "ar" === n ? yt.aw : .8 * yt.aw;
								E(!A && l * t < o ? Math.min(s, o / t) : l)
							}
						}
						), [F, P]),
							ft(a, m, n, C, c, g, h);
						const Z = void 0 === _ ? null : s.createElement(s.Fragment, null, y && [yt.SR.CorrectShowFinalWord, yt.SR.CorrectFinal].includes(y) && (null === (t = i.gradingResult) || void 0 === t ? void 0 : t.correct) ? s.createElement(s.Fragment, null, void 0 === _ ? null : s.createElement("div", {
							className: r()(y === yt.SR.CorrectShowFinalWord ? _t["final-word-bounce-in"] : _t["final-word"], _t[`lang-${n}`]),
							lang: n,
							style: {
								fontSize: `${T}px`,
								top: `${R}px`,
								...y === yt.SR.CorrectShowFinalWord ? {
									lineHeight: `${N}px`
								} : {
									height: `${T}px`,
									lineHeight: `${T}px`
								}
							}
						}, i.correctSolutions[0]), y === yt.SR.CorrectFinal ? s.createElement(Tt, {
							animationState: y,
							bottom: R,
							choices: i.choices,
							correctIndices: i.correctIndices,
							size: w
						}) : null) : m.map(((e, t) => s.createElement(Ct, {
							cellSize: _,
							disabled: void 0 !== y,
							fast: y === yt.SR.IncorrectSnapBack,
							gridCols: i.numCols,
							gridRows: i.numRows,
							index: t,
							info: e,
							key: t,
							onClick: C,
							position: y && ([yt.SR.CorrectMoveInwards, yt.SR.CorrectShowFinalWord, yt.SR.CorrectFinal].includes(y) || y === yt.SR.IncorrectMoveInwards) ? "center" : "default",
							selected: t === g,
							text: void 0 === e.choiceIndex ? void 0 : u[e.choiceIndex].text
						}))), y && [yt.SR.CorrectShowFinalWord, yt.SR.CorrectFinal].includes(y) ? s.createElement(ht, null) : null)
							, D = u.length >= 4 ? be.I.AlphabetsMedium : be.I.AlphabetsLarge
							, M = s.createElement(Se.Z, {
								choices: u.map((e => {
									var t;
									return {
										text: e.text,
										tts: null !== (t = e.tts) && void 0 !== t ? t : null
									}
								}
								)),
								disabled: a,
								language: n,
								onTap: e => {
									if (S && (0,
										Le.GN)(u[e].tts),
										void 0 === g)
										return;
									d([...c.filter((e => e !== m[g].choiceIndex)), e]),
										h((0,
											yt.LK)(m, g));
									const t = m.map(((t, a) => a === g ? {
										...t,
										choiceIndex: e
									} : t));
									p(t),
										o({
											choices: t.map((e => void 0 === e.choiceIndex ? -1 : u[e.choiceIndex].originalIndex))
										})
								}
								,
								selectedIndices: c,
								size: D,
								style: "word-bank",
								tokenProps: l.DZ(u.length, (e => ({
									isCharacter: !0,
									numberKey: A ? e + 1 : void 0
								})))
							});
						return s.createElement("div", {
							className: _t.wrap
						}, s.createElement("div", {
							className: _t.prompt
						}, s.createElement(he.Z, {
							audio: i.tts,
							autoplay: !0,
							type: "small"
						}), s.createElement("span", {
							lang: `${n}-Latn`
						}, i.prompt)), s.createElement("div", {
							className: _t["grid-wrap"],
							ref: L
						}, void 0 === _ ? null : s.createElement(xt, {
							animationState: y,
							cellSize: _,
							numCols: i.numCols,
							numRows: i.numRows
						}, Z)), M)
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(40502))
				},
				[ce.Sm.CharacterSelect]: {
					Container: gr,
					Content: ({ challenge: { choices: e, correctIndex: t, gradingResult: a, isOptionTtsDisabled: n, skipped: r }, challengeState: { guess: l }, disabled: i, learningLanguage: o, onChange: c }) => {
						const d = s.useRef([]);
						(0,
							v.L)(["reading", "listening"]);
						const { scale: u } = dt(d, {
							maxScale: .89
						});
						return s.createElement("div", {
							className: "_8ejtC f7WE2 _3rat3"
						}, s.createElement(Rt.Z, {
							onChange: t => {
								const a = window.performance.now();
								c(t);
								const { character: r, tts: s } = e[t];
								s && !0 !== n && (0,
									Le.a1)(s, {
										requestedAt: a,
										text: r
									})
							}
							,
							type: "row-desktop-two-columns-mobile",
							value: l
						}, e.map(((e, n) => {
							const c = s.createElement(ct.Z, {
								className: "_1iBpI",
								fontSize: 72,
								learningLanguage: o,
								ref: e => d.current[n] = e,
								scale: u
							}, e.character);
							return s.createElement(Nt.Z, {
								autoFocus: 0 === n,
								correct: r ? void 0 : (null == a ? void 0 : a.correct) && t === n,
								disabled: i,
								icon: c,
								index: n,
								key: n,
								language: o,
								selected: l === n
							})
						}
						))))
					}
					,
					Header: ({ challenge: e, fromLanguage: t, learningLanguage: a }) => {
						const { type: n } = (0,
							W.Fx)(f.is)
							, r = (0,
								W.Fx)(st.hg);
						return s.createElement("span", null, e.promptTransliteration && (0,
							st._G)(n) && (0,
								st.dN)(a, t, r) ? s.createElement(s.Fragment, null, s.createElement("span", null, "Select the correct characters for “"), s.createElement(wt.Z, {
									highlightStyle: "normal",
									text: [...e.prompt],
									transliteration: e.promptTransliteration
								}), s.createElement("span", null, "”")) : (0,
									ee._i)(12188, {
										challengeText: e.prompt
									}))
					}
				},
				[ce.Sm.CharacterTrace]: {
					Container: gr,
					Content: e => {
						const { challenge: t, ...a } = e
							, n = t.strokes.map((e => ({
								backgroundDisplayMode: "ALWAYS",
								path: e,
								strokeDrawMode: "GUARDRAIL"
							})))
							, r = t.promptTransliteration ? {
								tokens: [{
									token: t.prompt,
									transliterationTexts: [{
										text: t.promptTransliteration,
										type: "hard-coded"
									}]
								}]
							} : void 0
							, l = {
								...t,
								instructionText: "",
								promptTransliteration: r,
								promptTts: t.tts,
								strokes: n
							};
						return s.createElement(Ut, {
							challenge: l,
							distanceTolerance: 10,
							strokeWidth: "thick",
							...a
						})
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(26295))
				},
				[ce.Sm.CharacterWrite]: {
					Container: gr,
					Content: e => s.createElement(Ut, {
						distanceTolerance: 50,
						strokeWidth: "thin",
						...e
					}),
					Header: ({ challenge: e }) => s.createElement("span", null, e.instructionText)
				},
				[ce.Sm.ChessMatch]: {
					Container: mr,
					Content: tr,
					Header: ar
				},
				[ce.Sm.ChessMiniMatch]: {
					Container: mr,
					Content: nr,
					Header: rr
				},
				[ce.Sm.ChessPvpMatch]: {
					Container: mr,
					Content: sr,
					Header: lr
				},
				[ce.Sm.ChessStar]: {
					Container: pr,
					Content: qn,
					Header: Xn
				},
				[ce.Sm.ChessNormal]: {
					Container: pr,
					Content: Yn,
					Header: Qn
				},
				[ce.Sm.ChessFictionalBoard]: {
					Container: pr,
					Content: Jn,
					Header: er
				},
				[ce.Sm.CompleteReverseTranslation]: {
					Container: gr,
					Content: ia,
					Header: ({ challengeToggleState: e, learningLanguage: t }) => e.isToggledToTyping ? s.createElement("span", null, (0,
						ee._i)(19263, {
							language_name: (0,
								ie.vY)(t)
						})) : s.createElement("span", null, (0,
							ee._i)(3351))
				},
				[ce.Sm.Definition]: {
					Container: gr,
					Content: ({ challenge: { choiceLanguageId: e, choices: t, correctIndex: a, displayTokens: n, gradingResult: r, indicatorType: l, phraseToDefine: i, skipped: o, tts: c }, challengeState: { guess: d }, disabled: u, onChange: m }) => {
						const p = (0,
							W.tX)();
						s.useEffect((() => {
							p({
								type: "SET_SWRL_ENGAGEMENT",
								value: ["reading"]
							})
						}
						), []);
						const g = n.map(((e, t) => e.isHighlighted ? t : void 0)).filter((e => void 0 !== e))
							, h = se._s.convertRemoteLanguageId(e);
						return s.createElement("div", {
							className: "_2Zit2 f7WE2 _3rat3"
						}, s.createElement("div", {
							className: "_1SdF3 _35mGI",
							dir: (0,
								ie.Ux)(h)
						}, c ? s.createElement(he.Z, {
							audio: c,
							autoplay: !0,
							className: "_2Yg-u _3CzhQ vAI_X",
							dir: (0,
								ie.Ux)(h),
							ttsTrackingData: {
								text: n.map((e => e.text)).join("")
							},
							type: "small",
							useKeyboardShortcut: !0
						}) : null, s.createElement(Vt.Z, {
							highlightStyle: "new-word",
							highlights: l === ce.A.HardChallenge ? [] : g,
							isForward: !0,
							language: h,
							tokens: n.map((e => e.hintToken))
						})), s.createElement("div", null, s.createElement("div", {
							className: "_2uakA _35mGI TrS6n _2UoAa"
						}, (0,
							ee._i)(1831, {
								string_1: i
							})), s.createElement(at.Z, {
								autoFocus: !0,
								choices: t,
								className: "_1kgdZ",
								correct: o || null == r ? void 0 : r.correct,
								correctIndex: a,
								disabled: u,
								language: h,
								onChange: m,
								overflowBehavior: {
									prompt: n.map((e => e.text)).join(""),
									shouldHandleOverflow: !0,
									trackedChallengeType: "definition"
								},
								type: "column",
								value: d
							})))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(24620))
				},
				[ce.Sm.Dialogue]: {
					Container: hr,
					Content: ({ challenge: { choices: e, correctIndex: t, dialogue: a, gradingResult: n, promptTokens: r, skipped: l }, challengeState: { currentDialogueIndex: o, guess: c }, disabled: d, isDesktop: u, learningLanguage: m, onChange: p }) => {
						const g = (0,
							W.tX)()
							, h = s.useRef(null)
							, v = s.useRef(null)
							, f = s.useRef(null)
							, _ = o === a.length;
						return s.useEffect((() => {
							g({
								type: "SET_SWRL_ENGAGEMENT",
								value: ["reading"]
							})
						}
						), []),
							s.useEffect((() => {
								var e;
								_ && (null === (e = h.current) || void 0 === e || e.focusFirstChoice())
							}
							), [_]),
							s.useEffect((() => {
								if (_)
									v.current && (0,
										ha.zT)(v.current, {
											behavior: "smooth",
											block: "start"
										});
								else if (f.current) {
									const e = f.current.getCurrentlySelectedBubble();
									e && (0,
										ha.zT)(e, {
											behavior: "smooth",
											block: "center"
										})
								}
							}
							), [_, u]),
							(0,
								i.Z)({
									isVisible: _,
									ref: v
								}),
							s.createElement("div", {
								className: "_3wqGX f7WE2 _3rat3"
							}, s.createElement(ga, {
								currentDialogueIndex: o,
								dialogue: a,
								learningLanguage: m,
								ref: f
							}), s.createElement("div", {
								ref: v,
								style: _ ? void 0 : {
									pointerEvents: "none"
								}
							}, r ? s.createElement("div", {
								className: "_3QrQm _35mGI TrS6n _2UoAa"
							}, s.createElement(Vt.Z, {
								highlightStyle: "normal",
								inTabOrder: _,
								isForward: !0,
								language: m,
								tokens: r
							})) : null, s.createElement(at.Z, {
								choices: e,
								correct: l || null == n ? void 0 : n.correct,
								correctIndex: t,
								disabled: d || !_,
								language: m,
								onChange: p,
								overflowBehavior: {
									shouldHandleOverflow: !1
								},
								ref: h,
								type: "column",
								value: c
							})))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(e.promptTokens ? 24620 : 9368))
				},
				[ce.Sm.ExtendedListenMatch]: {
					Container: dr,
					Content: ba,
					Header: nn
				},
				[ce.Sm.ExtendedMatch]: {
					Container: dr,
					Content: ba,
					Header: nn
				},
				[ce.Sm.Form]: {
					Container: gr,
					Content: ({ challenge: { character: e, options: t, correctIndex: a, gradingResult: n, promptPieceTransliterations: r, promptPieces: l, skipped: i }, challengeState: { guess: o }, disabled: c, fromLanguage: d, learningLanguage: u, onChange: m }) => {
						const p = (0,
							W.Fx)(st.hg)
							, g = (0,
								W.Fx)(f.is)
							, h = s.useRef(null)
							, v = p && (null == r ? void 0 : r.some((e => e.tokens.some((e => void 0 !== (0,
								st.iZ)(e, p.type)))))) && (0,
									st._G)(g.type) && (0,
										st.dN)(u, d, p)
							, _ = l.map(((e, t) => [s.createElement("span", {
								key: `prompt-piece-${t}`
							}, (null == r ? void 0 : r[t]) && v ? s.createElement(wt.Z, {
								highlightStyle: "normal",
								text: [...e],
								transliteration: null == r ? void 0 : r[t]
							}) : e), t < l.length - 1 ? s.createElement(da, {
								key: `prompt-piece-${t}-gap`
							}) : null]));
						return s.createElement("div", {
							className: Sa["wrap" + (e ? "-character" : "")]
						}, s.createElement("div", {
							className: Sa["prompt" + (e ? "-character" : "")],
							"data-prompt": l.join("___")
						}, e ? s.createElement(Ee.Z, {
							audioEl: h,
							character: e,
							correct: i || null == n ? void 0 : n.correct,
							hasTransliterations: v,
							lang: u
						}, _) : s.createElement("div", {
							dir: (0,
								ie.Ux)(u),
							lang: u
						}, _)), s.createElement(at.Z, {
							autoFocus: !0,
							choiceTransliterations: t[0].textTransliteration && (0,
								st._G)(g.type) && (0,
									st.dN)(u, d, p) ? t.map((e => e.textTransliteration)) : void 0,
							choices: t.map((e => e.text)),
							className: Sa["answer" + (e ? "-character" : "")],
							correct: i || null == n ? void 0 : n.correct,
							correctIndex: a,
							disabled: c,
							language: u,
							onChange: m,
							overflowBehavior: {
								prompt: l.join(t[a].text),
								shouldHandleOverflow: !0,
								trackedChallengeType: "form"
							},
							type: "two-columns-desktop-column-mobile",
							value: o
						}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(20300))
				},
				[ce.Sm.FreeResponse]: {
					Container: ({ challenge: e, content: t, header: a }) => s.createElement("div", {
						...(0,
							Jt._q)(ea.V.Challenge, `challenge-${e.type}`),
						className: or.Z.challenge
					}, s.createElement("div", {
						className: or.Z["challenge-container-centered"]
					}, a, s.createElement("div", {
						className: or.Z["content-top-aligned"]
					}, t))),
					Content: Ca,
					Header: ({ learningLanguage: e }) => s.createElement("span", null, (0,
						ee._i)(17375, {
							language_name: (0,
								ie.vY)(e)
						}))
				},
				[ce.Sm.GapFill]: {
					Container: gr,
					Content: ({ challenge: { character: e, choices: t, correctIndex: a, displayTokens: n, gradingResult: r, skipped: l, tokens: i }, challengeState: { guess: o }, disabled: c, learningLanguage: d, onChange: u }) => {
						const m = s.useRef(null);
						(0,
							v.L)(["reading"]);
						const p = (() => {
							const e = [];
							n.length !== i.length && (0,
								oe.vU)("Token length mismatch.", {
									once: !0
								});
							for (let t = 0; t < n.length; t++) {
								const a = n[t]
									, l = i[t];
								a.isBlank ? (null == r ? void 0 : r.correct) ? e.push(s.createElement(Vt.Z, {
									highlightStyle: "dictionary",
									highlights: [0],
									isForward: !0,
									key: t,
									language: d,
									onTryPlay: e => m.current = null != e ? e : null,
									tokens: [l]
								})) : 0 !== t && n[t - 1].isBlank || e.push(s.createElement(da, {
									key: t
								})) : e.push(s.createElement(Vt.Z, {
									highlightStyle: "normal",
									isForward: !0,
									key: t,
									language: d,
									onTryPlay: e => m.current = null != e ? e : null,
									tokens: [l]
								}))
							}
							return e
						}
						)();
						return s.createElement("div", {
							className: xa["wrap" + (e ? "-character" : "")]
						}, s.createElement("div", {
							className: xa["prompt" + (e ? "-character" : "")]
						}, e ? s.createElement(Ee.Z, {
							audioEl: m,
							character: e,
							correct: l || null == r ? void 0 : r.correct,
							lang: d
						}, p) : s.createElement("div", {
							dir: (0,
								ie.Ux)(d)
						}, p)), s.createElement(at.Z, {
							autoFocus: !0,
							choices: t,
							className: xa["answer" + (e ? "-character" : "")],
							correct: l || null == r ? void 0 : r.correct,
							correctIndex: a,
							disabled: c,
							language: d,
							onChange: u,
							overflowBehavior: {
								shouldHandleOverflow: !1
							},
							type: "column",
							value: o
						}))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(18142, {
							num_blanks: (0,
								He.j$)(e.displayTokens).filter((e => e.isBlank)).length
						}))
				},
				[ce.Sm.Judge]: {
					Container: gr,
					Content: ({ challenge: e, challenge: { character: t, gradingResult: a, skipped: n, sourceLanguage: r, targetLanguage: l }, challengeState: { guess: i }, disabled: o, fromLanguage: c, learningLanguage: d, onChange: u }) => {
						const m = (0,
							W.Fx)(st.hg);
						return s.createElement("div", {
							className: Ta["wrap" + (t ? "-character" : "")]
						}, s.createElement("div", {
							className: Ta["prompt" + (t ? "-character" : "")]
						}, t ? s.createElement(Ee.Z, {
							character: t,
							correct: n || null == a ? void 0 : a.correct,
							lang: r
						}, e.prompt) : s.createElement("span", {
							dir: (0,
								ie.Ux)(r),
							lang: r
						}, e.prompt)), s.createElement(at.Z, {
							autoFocus: !0,
							choiceTransliterations: e.choiceTransliterations && (0,
								st.dN)(d, c, m) ? e.choiceTransliterations : void 0,
							choices: e.choices,
							className: Ta["answer" + (t ? "-character" : "")],
							correct: n || null == a ? void 0 : a.correct,
							correctIndex: e.correctIndices[0],
							disabled: o,
							language: l,
							onChange: u,
							overflowBehavior: {
								prompt: e.prompt,
								shouldHandleOverflow: !0,
								trackedChallengeType: "judge"
							},
							type: "column",
							value: i
						}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(32544))
				},
				[ce.Sm.Listen]: {
					Container: gr,
					Content: Ia,
					Header: Ra
				},
				[ce.Sm.ListenComplete]: {
					Container: gr,
					Content: e => {
						var t, a, n;
						const { challenge: { character: r, displayTokens: l, gradingResult: i, prompt: o, skipped: c, slowTts: d, tts: u }, challengeState: { guess: m }, disabled: p, isDesktop: g, learningLanguage: h, onChange: f } = e
							, _ = (0,
								W.tX)();
						(0,
							v.L)(["writing", "reading", "listening"]);
						const E = s.useRef(null)
							, y = s.useRef(new Array(l.filter((e => e.isBlank)).length).fill(null))
							, [b, S] = s.useState(!1)
							, [k, C] = s.useState(0)
							, [x, T] = s.useState((() => l.findIndex((e => e.isBlank))));
						s.useEffect((() => {
							S(!0)
						}
						), []),
							s.useEffect((() => {
								k > 1 && _({
									type: "CHALLENGE_HAS_BROKEN_TTS"
								})
							}
							), [k]),
							(0,
								La.Z)((() => {
									sa.Z.finish("challenge_typing")
								}
								), [m]);
						const w = s.createElement(ye, {
							audio: u,
							autoplay: !b,
							onClick: () => {
								var e, t;
								null === (t = null === (e = y.current) || void 0 === e ? void 0 : e[x]) || void 0 === t || t.focus()
							}
							,
							onTryPlay: e => E.current = null != e ? e : null,
							slowAudio: d,
							soundOptions: {
								eventListeners: [["error", () => C((e => e + 1))]]
							},
							ttsTrackingData: {
								text: o
							},
							variant: r ? "in-audio-bubble" : void 0
						});
						return s.createElement("div", {
							className: Pa["wrap" + (r ? "-character" : "")]
						}, s.createElement("div", {
							className: Pa["prompt" + (r ? "-character" : "")]
						}, r ? s.createElement(Ee.Z, {
							audioEl: E,
							character: r,
							correct: c || null == i ? void 0 : i.correct,
							hasOnlyIcons: !0,
							lang: h
						}, w) : w), s.createElement("div", {
							className: Pa["answer" + (r ? "-character" : "")]
						}, s.createElement("label", {
							className: Pa["fake-textarea-player"],
							dir: (0,
								ie.Ux)(h)
						}, l.map(((e, t) => {
							var a;
							return e.isBlank ? s.createElement("span", {
								className: Pa["input-container"],
								key: t
							}, s.createElement(zt, null, `_${e.text}_`), s.createElement(Wt.Z, {
								autoFocus: g && x === t,
								disabled: p,
								inputLanguage: h,
								onChange: e => {
									sa.Z.start("challenge_typing"),
										f(null == m ? void 0 : m.map(((a, n) => n === t ? e.target.value : a)))
								}
								,
								onFocus: () => T(t),
								refCallback: e => y.current[t] = e,
								size: 1,
								style: "fill-in-the-blank",
								value: null !== (a = null == m ? void 0 : m[t]) && void 0 !== a ? a : ""
							})) : s.createElement("span", {
								key: t,
								lang: h
							}, e.text)
						}
						))), s.createElement(Yt, {
							className: Pa["virtual-keyboard"],
							disabled: p,
							inputElement: null !== (a = null === (t = y.current) || void 0 === t ? void 0 : t[x]) && void 0 !== a ? a : void 0,
							language: h,
							onChange: ({ }, e) => {
								sa.Z.start("challenge_typing"),
									f(null == m ? void 0 : m.map(((t, a) => a === x ? e : t)))
							}
							,
							value: null !== (n = null == m ? void 0 : m[x]) && void 0 !== n ? n : ""
						})))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(3351))
				},
				[ce.Sm.ListenComprehension]: {
					Container: gr,
					Content: ({ challenge: { choices: e, correctIndex: t, gradingResult: a, prompt: n, question: l, questionTokens: i, skipped: o, slowTts: c, tts: d }, challengeState: { guess: u }, disabled: m, learningLanguage: p, onChange: g }) => {
						const h = (0,
							W.tX)();
						(0,
							v.L)(["listening"]);
						const [f, _] = s.useState(0);
						return s.useEffect((() => {
							f > 1 && h({
								type: "CHALLENGE_HAS_BROKEN_TTS"
							})
						}
						), [f]),
							s.createElement("div", {
								className: r()(Fa.wrap, {
									[Fa["has-question"]]: !!l
								})
							}, s.createElement("div", {
								className: Fa["prompt" + (l ? "-before-question" : "")]
							}, s.createElement(ye, {
								audio: d,
								autoplay: !0,
								slowAudio: c,
								soundOptions: {
									eventListeners: [["error", () => _((e => e + 1))]]
								},
								ttsTrackingData: {
									text: n
								}
							})), l ? s.createElement("div", {
								className: Fa.question,
								dir: (0,
									ie.Ux)(p)
							}, s.createElement(Vt.Z, {
								highlightStyle: "normal",
								isForward: !0,
								language: p,
								tokens: null != i ? i : [{
									value: l
								}]
							})) : null, s.createElement(at.Z, {
								autoFocus: !0,
								choices: e,
								correct: o || null == a ? void 0 : a.correct,
								correctIndex: t,
								disabled: m,
								language: p,
								onChange: g,
								overflowBehavior: {
									shouldHandleOverflow: !1
								},
								type: "column",
								value: u
							}))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(e.question ? 8769 : 2005))
				},
				[ce.Sm.ListenIsolation]: {
					Container: gr,
					Content: e => {
						const { challenge: { character: t, blankRangeEnd: a, blankRangeStart: n, options: r, correctIndex: i, gradingResult: o, tokens: c, tts: d, skipped: u }, challengeState: { guess: m }, disabled: p, learningLanguage: g, onChange: h } = e;
						(0,
							v.L)(["reading", "listening"]);
						const f = s.useRef(null)
							, [_] = s.useState((() => l.TV([Aa.eu.WAVEFORM_1, Aa.eu.WAVEFORM_2, Aa.eu.WAVEFORM_3, Aa.eu.WAVEFORM_4, Aa.eu.WAVEFORM_5])))
							, E = r.map(((e, t) => ({
								text: e.text,
								tts: e.tts,
								type: "WaveformChoice",
								waveform: _[t % _.length]
							})))
							, y = s.createElement(Vt.Z, {
								highlightStyle: (null == o ? void 0 : o.correct) ? "dictionary" : "blank",
								highlights: l.DZ(a - n, (e => n + e)),
								isForward: !0,
								language: g,
								onTryPlay: e => f.current = null != e ? e : null,
								tokens: c
							})
							, b = s.createElement(he.Z, {
								audio: d,
								autoplay: !0,
								className: t ? void 0 : Za.speaker,
								dir: (0,
									ie.Ux)(g),
								onTryPlay: e => f.current = null != e ? e : null,
								type: "small",
								useKeyboardShortcut: !0,
								variant: t ? "inverse" : void 0
							});
						return s.createElement("div", {
							className: Za["wrap" + (t ? "-character" : "")]
						}, s.createElement("div", {
							className: Za["prompt" + (t ? "-character" : "")]
						}, t ? s.createElement(Ee.Z, {
							audioEl: f,
							character: t,
							correct: u || null == o ? void 0 : o.correct,
							lang: g,
							leadingVisual: b
						}, y) : s.createElement("div", {
							dir: (0,
								ie.Ux)(g)
						}, b, y)), s.createElement("div", {
							className: t ? Za["waveform-choice-list-character"] : null
						}, s.createElement(at.Z, {
							autoFocus: !0,
							choices: E,
							correct: u || null == o ? void 0 : o.correct,
							correctIndex: i,
							disabled: p,
							language: g,
							onChange: h,
							onTryPlay: e => f.current = null != e ? e : null,
							overflowBehavior: {
								shouldHandleOverflow: !1
							},
							type: "column",
							value: m
						})))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(30187))
				},
				[ce.Sm.ListenMatch]: {
					Container: dr,
					Content: rn,
					Header: nn
				},
				[ce.Sm.ListenSpeak]: {
					Container: gr,
					Content: ({ challenge: e, challenge: { character: t, gradingResult: a, promptTransliteration: n, skipped: l, tokens: i }, disabled: o, fromLanguage: c, learningLanguage: d, onChange: u }) => {
						const m = (0,
							W.tX)();
						(0,
							v.L)(["speaking", "listening"]);
						const p = "dark" === (0,
							ge.Fg)()
							, g = s.useRef(null)
							, h = s.useRef(null)
							, [_, E] = s.useState(!0)
							, y = (0,
								W.Fx)(f.lA)
							, b = (0,
								W.Fx)(st.hg)
							, S = y.status === St.c.Guessing
							, { isRecognizing: k, recognizerResultsTokens: C, startRecognizing: x, stopRecognizing: T } = qa(u, e.prompt, d, e.speakGrader, i)
							, w = s.useCallback((() => {
								_ || E(!0),
									k ? T() : (m({
										status: St.c.Guessing,
										type: "SET_PLAYER_STATUS"
									}),
										x())
							}
							), [k])
							, N = s.useCallback((() => {
								var e;
								k && T(),
									m({
										status: St.c.Guessing,
										type: "SET_PLAYER_STATUS"
									}),
									E(!1),
									null === (e = g.current) || void 0 === e || e.play({
										eventListeners: [["ended", () => E(!0)], ["error", () => E(!0)], ["play", () => E(!1)], ["playerror", () => E(!0)]]
									})
							}
							), []);
						s.useEffect((() => {
							S || T(!0)
						}
						), [S]),
							s.useEffect((() => {
								if (!o) {
									const e = e => {
										"Enter" === e.key && (e.preventDefault(),
											e.stopPropagation(),
											w())
									}
										;
									return vt.U.addListener(document, "keydown", e),
										() => vt.U.removeListener(document, "keydown", e)
								}
							}
							), [o, w]),
							s.useEffect((() => {
								k && ((0,
									Le.Ap)(),
									E(!0))
							}
							), [k]);
						const R = s.createElement(q.Z, {
							color: "macaw",
							disabled: k || !_ || (null == a ? void 0 : a.correct) || 0 === (null == a ? void 0 : a.numRetriesLeft),
							onClick: N,
							variant: "text-no-padding"
						}, (0,
							ee._i)(27174))
							, I = i.length > 0 && b && (null == n ? void 0 : n.tokens.some((e => void 0 !== (0,
								st.iZ)(e, b.type)))) && (0,
									st._G)(y.session.type) && (0,
										st.dN)(d, c, b)
							, L = s.createElement("span", {
								className: r()({
									[Qa.recording]: k
								})
							}, i.length ? i.map(((t, r) => {
								var l, i;
								return t.hintTable ? s.createElement(Vt.Z, {
									disableTTS: k,
									highlightStyle: (null == a ? void 0 : a.correct) ? "dictionary" : (null === (l = C[r]) || void 0 === l ? void 0 : l.isRecognized) ? "normal" : _ ? "blank" : "underlined",
									highlights: 0 === (null === (i = e.gradingResult) || void 0 === i ? void 0 : i.numRetriesLeft) ? [] : [0],
									isForward: !0,
									key: r,
									language: d,
									onTryPlay: e => h.current = null != e ? e : null,
									tokens: [t],
									transliteration: I ? n : void 0
								}) : s.createElement("span", {
									key: r,
									lang: d
								}, t.value)
							}
							)) : s.createElement("span", {
								lang: d
							}, e.prompt))
							, P = s.createElement(he.Z, {
								audio: e.tts,
								autoplay: !0,
								className: t ? void 0 : Qa.speaker,
								dir: (0,
									ie.Ux)(d),
								disabled: k,
								onTryPlay: e => {
									h.current = null != e ? e : null,
										E(!0)
								}
								,
								ref: g,
								ttsTrackingData: {
									text: e.prompt
								},
								type: "small",
								useKeyboardShortcut: !0,
								variant: t ? "inverse" : void 0
							});
						return s.createElement("div", {
							className: Qa["wrap" + (t ? "-character" : "")]
						}, s.createElement("div", {
							className: Qa["prompt" + (t ? "-character" : "")]
						}, t ? s.createElement(Ee.Z, {
							additionalButton: R,
							audioEl: h,
							character: t,
							correct: l || null == a ? void 0 : a.correct,
							hasTransliterations: I,
							lang: d,
							leadingVisual: P
						}, L) : s.createElement("div", {
							className: Qa["prompt-container"]
						}, s.createElement("div", {
							className: k ? Qa["bordered-recording"] : Qa.bordered,
							dir: (0,
								ie.Ux)(d)
						}, P, L), R)), s.createElement("div", {
							className: Qa.answer
						}, t ? s.createElement(q.Z, {
							className: r()(Qa["button-character"], {
								[Qa["button-correct"]]: (null == a ? void 0 : a.correct) && !l
							}),
							color: "macaw",
							disabled: o,
							onClick: w,
							variant: "stroke"
						}, (null == a ? void 0 : a.correct) && !l ? s.createElement("img", {
							src: p ? Xa : Ya
						}) : k ? s.createElement(za.Z, null) : s.createElement(s.Fragment, null, s.createElement(Va, {
							disabled: o,
							hasCharacter: !0
						}), (0,
							ee._i)(17130)), s.createElement($a.Z, {
								animationCounter: (null == a ? void 0 : a.correct) && !l ? 1 : 0,
								className: Qa.sparkles
							})) : s.createElement(q.Z, {
								className: Qa.button,
								color: "macaw",
								disabled: o,
								onClick: w,
								variant: "solid"
							}, k ? s.createElement("span", {
								className: t ? Qa["square-blue"] : Qa.square
							}) : s.createElement(Va, {
								disabled: o,
								hasCharacter: !1
							}))))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(19373))
				},
				[ce.Sm.ListenTap]: {
					Container: gr,
					Content: Ia,
					Header: Ra
				},
				[ce.Sm.Match]: {
					Container: dr,
					Content: rn,
					Header: nn
				},
				[ce.Sm.Name]: {
					Container: dr,
					Content: ({ challenge: { articles: e, correctSolutions: t, images: a, svgs: n }, challengeState: { guess: r }, disabled: l, isDesktop: i, learningLanguage: o, onChange: c }) => {
						var d, u, m;
						const p = (0,
							W.tX)()
							, g = s.useRef(null);
						s.useEffect((() => {
							p({
								type: "SET_SWRL_ENGAGEMENT",
								value: ["writing"]
							})
						}
						), []),
							(0,
								La.Z)((() => {
									l || sa.Z.finish("challenge_typing")
								}
								), [l, null == r ? void 0 : r.translation]);
						const h = n && n.length > 0 ? n : a && a.length > 0 ? a : [];
						return s.createElement("div", {
							className: "_1xeMz f7WE2 _3rat3"
						}, s.createElement("div", {
							className: "_11_o2"
						}, h.map(((e, t) => s.createElement("img", {
							className: "_2Zqm-",
							key: t,
							src: e
						})))), s.createElement("div", {
							className: "_3l-7L"
						}, e ? s.createElement("div", {
							className: "_37w9x TrS6n"
						}, s.createElement(at.Z, {
							choices: e,
							correctIndex: e.findIndex((e => (t || []).some((t => t.startsWith(e))))),
							disabled: l,
							language: o,
							onChange: e => c({
								...r,
								article: e
							}),
							onClick: () => {
								var e;
								return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
							}
							,
							onHotkey: () => {
								var e;
								return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
							}
							,
							overflowBehavior: {
								shouldHandleOverflow: !1
							},
							type: "row",
							value: null == r ? void 0 : r.article
						})) : null, s.createElement(Wt.Z, {
							autoFocus: i,
							disabled: l,
							inputLanguage: o,
							onChange: t => {
								sa.Z.start("challenge_typing");
								let a = null == r ? void 0 : r.article
									, n = t.target.value;
								e && e.forEach(((e, t) => {
									(e.endsWith("'") ? e : `${e} `).toLowerCase() === n.toLowerCase() && t !== (null == r ? void 0 : r.article) && (a = t,
										n = "")
								}
								)),
									c({
										article: a,
										translation: n
									})
							}
							,
							placeholder: (0,
								ee.H8)(17610, {
									language_name: (0,
										ie.vY)(o)
								}),
							refCallback: e => e && (g.current = e),
							style: "translation",
							value: null !== (d = null == r ? void 0 : r.translation) && void 0 !== d ? d : ""
						}), s.createElement(Yt, {
							disabled: l,
							inputElement: null !== (u = g.current) && void 0 !== u ? u : void 0,
							language: o,
							onChange: ({ }, e) => {
								sa.Z.start("challenge_typing"),
									c({
										...r,
										translation: e
									})
							}
							,
							value: null !== (m = null == r ? void 0 : r.translation) && void 0 !== m ? m : ""
						})))
					}
					,
					Header: ({ challenge: e, learningLanguage: t }) => s.createElement("span", null, (0,
						ee._i)(5669, {
							hint: e.prompt,
							language_name: (0,
								ie.vY)(t)
						}))
				},
				[ce.Sm.OrderTapComplete]: {
					Container: gr,
					Content: ({ challenge: { character: e, displayTokens: t, exampleTokens: a, gradingResult: n, tokens: r, tts: i, newWords: o, choices: c, skipped: d }, disabled: u, isDesktop: m, learningLanguage: p, onChange: g }) => {
						var h;
						const f = s.useRef(null)
							, _ = s.useRef([])
							, E = s.useRef()
							, [y, b] = s.useState([cn])
							, [S, k] = s.useState(!0);
						(0,
							v.L)(["reading"]);
						const C = y.filter((e => e !== cn))
							, { unselectedTokenAnimations: x } = xe({
								isFlyEnabled: m,
								selectedIndices: C,
								selectedTokenRefs: _.current.filter(Pe.$K),
								tokens: c.length,
								unselectedTokenRefs: null !== (h = E.current) && void 0 !== h ? h : []
							});
						(0,
							La.Z)((() => {
								g(y)
							}
							), [y]);
						const T = m ? be.I.Large : be.I.Normal
							, w = e => {
								const t = e
									, a = window.performance.now();
								if (y.includes(t) && t !== cn)
									b(y.filter((e => e !== t)));
								else {
									const e = c[t].tts;
									e && (0,
										Le.a1)(e, {
											requestedAt: a,
											text: c[t].text
										}),
										b((e => {
											if (S) {
												const a = e.indexOf(cn)
													, n = [...e];
												return n.splice(a, 0, t),
													n
											}
											return [...e, t]
										}
										))
								}
							}
							;
						t.length !== r.length && (0,
							oe.vU)("Token length mismatch", {
								once: !0
							});
						const N = s.createElement(Vt.Z, {
							highlightStyle: "normal",
							isForward: !0,
							language: p,
							onTryPlay: e => f.current = null != e ? e : null,
							substringHighlightStyle: "new-pattern",
							substringHighlights: (() => {
								const e = [];
								if (!o)
									return [];
								for (const t of o) {
									const n = a.findIndex((e => e.value === t));
									-1 !== n && e.push({
										endIndex: t.length,
										startIndex: 0,
										tokenIndex: n
									})
								}
								return e
							}
							)(),
							tokens: a
						})
							, R = s.createElement(he.Z, {
								audio: i,
								autoplay: !0,
								className: e ? void 0 : "_1PJvi _3CzhQ vAI_X",
								dir: (0,
									ie.Ux)(p),
								onTryPlay: e => f.current = null != e ? e : null,
								type: "small",
								useKeyboardShortcut: !0,
								variant: e ? "inverse" : void 0
							});
						return s.createElement("div", {
							className: e ? "_1n50r _3rat3" : "_5Nw7l f7WE2 _3rat3"
						}, s.createElement("div", {
							className: e ? "_37tvh _3v0hd _35mGI" : on
						}, e ? s.createElement(Ee.Z, {
							audioEl: f,
							character: e,
							correct: d || null == n ? void 0 : n.correct,
							lang: p,
							leadingVisual: R
						}, N) : s.createElement("div", {
							className: "_3-IjQ _3zGeZ _394fY RpiVp",
							dir: (0,
								ie.Ux)(p)
						}, N)), s.createElement("div", {
							className: on,
							dir: (0,
								ie.Ux)(p)
						}, (() => {
							let e = !1
								, a = 0;
							return l.DZ(t.length, (n => {
								const l = t[n]
									, i = r[n];
								if (l.isBlank && !e) {
									e = !0;
									const t = 0 === a;
									a += 1;
									const n = y.indexOf(cn)
										, r = t ? y.slice(0, n) : y.slice(n + 1);
									return s.createElement("div", {
										"aria-label": S === t ? "Selected gap" : "Click to select this gap",
										className: "_23_dH",
										onClick: () => (e => {
											k(e)
										}
										)(t)
									}, s.createElement(ln, {
										choices: c,
										disabled: u,
										isHighlighted: S === t,
										isMultiGap: !0,
										language: p,
										onTap: w,
										selectedIndices: r,
										size: T
									}))
								}
								return l.isBlank || " " === l.text && e ? null : (e = !1,
									s.createElement(Vt.Z, {
										highlightStyle: "normal",
										isForward: !0,
										language: p,
										tokens: [i]
									}))
							}
							))
						}
						)(), s.createElement("div", {
							className: "_1ildH"
						}, s.createElement(Se.Z, {
							choices: c,
							disabled: u,
							language: p,
							onTap: w,
							selectedIndices: C,
							size: T,
							style: "word-bank",
							tokenProps: l.DZ(c.length, (e => ({
								animation: x[e]
							}))),
							tokensRef: e => E.current = e
						}))))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(43144))
				},
				[ce.Sm.PartialListen]: {
					Container: gr,
					Content: ({ challenge: { character: e, displayTokens: t, gradingResult: a, prompt: n, skipped: l, slowTts: i, tts: o }, challengeState: { guess: c }, disabled: d, learningLanguage: u, onChange: m }) => {
						const p = s.useRef(null)
							, g = s.useRef(null)
							, h = (0,
								W.tX)();
						(0,
							v.L)(["writing", "listening"]);
						const [f, _] = s.useState(!1)
							, [E, y] = s.useState(0);
						s.useEffect((() => {
							_(!0)
						}
						), []),
							s.useEffect((() => {
								E > 1 && h({
									type: "CHALLENGE_HAS_BROKEN_TTS"
								})
							}
							), [E]),
							(0,
								La.Z)((() => {
									sa.Z.finish("challenge_typing")
								}
								), [c]);
						const b = t.findIndex((e => e.isBlank))
							, [S, k] = s.useState(!1);
						s.useEffect((() => {
							var e;
							null === (e = T.current) || void 0 === e || e.focus()
						}
						), []);
						const C = s.useRef(null)
							, x = s.useRef(null)
							, T = s.useRef(null)
							, [w, N] = s.useState()
							, [R, I] = s.useState(!1)
							, [L, P] = s.useState(!0);
						s.useLayoutEffect((() => {
							var e;
							if (null === C.current || null === x.current || null === T.current)
								throw Error("TextBoxRef, HiddenBlankSentenceRef, or inputRef is null. Possibly because displayTokens has no tokens with isBlank set to true.");
							const t = getComputedStyle(C.current)
								, a = C.current.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
								, n = (null === (e = T.current) || void 0 === e ? void 0 : e.offsetLeft) - 12
								, r = Math.min(x.current.offsetWidth, a)
								, s = a - n - 4;
							r > s ? 3 * r / 4 < s || s > 100 ? N(s) : (I(!0),
								N(r)) : N(r)
						}
						), []);
						const F = s.createElement(ye, {
							audio: o,
							autoplay: !f,
							onClick: () => {
								var e;
								return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
							}
							,
							onTryPlay: e => p.current = null != e ? e : null,
							slowAudio: i,
							soundOptions: {
								eventListeners: [["error", () => y((e => e + 1))]]
							},
							ttsTrackingData: {
								text: n
							},
							variant: e ? "in-audio-bubble" : void 0
						});
						return s.createElement("div", {
							className: dn["wrap" + (e ? "-character" : "")]
						}, s.createElement("div", {
							className: dn["prompt" + (e ? "-character" : "")]
						}, e ? s.createElement(Ee.Z, {
							audioEl: p,
							character: e,
							correct: l || null == a ? void 0 : a.correct,
							hasOnlyIcons: !0,
							lang: u
						}, F) : F), s.createElement("div", {
							className: dn["answer" + (e ? "-character" : "")]
						}, s.createElement("label", {
							className: dn["fake-textarea-player"],
							dir: (0,
								ie.Ux)(u),
							lang: u,
							onClick: () => {
								var e;
								S || (un(T.current),
									null === (e = T.current) || void 0 === e || e.focus()),
									k(!0)
							}
							,
							ref: C
						}, t.map(((e, t) => {
							return t === b ? (a = t,
								s.createElement(s.Fragment, {
									key: a
								}, R ? s.createElement("br", null) : null, s.createElement("span", {
									className: r()(dn[S && !d ? "focus-underline" : "blur-underline"], dn[L ? "position-absolute" : "position-relative"], dn["input-span"]),
									contentEditable: !d,
									dir: (0,
										ie.Ux)(u),
									onBlur: () => k(!1),
									onFocus: e => {
										k(!0),
											e.currentTarget.innerText || (e.currentTarget.innerText = " ")
									}
									,
									onInput: e => {
										sa.Z.start("challenge_typing"),
											m(e.currentTarget.innerText);
										const t = e.currentTarget.offsetWidth;
										P(void 0 !== w && t < w)
									}
									,
									ref: T,
									spellCheck: !1,
									suppressContentEditableWarning: !0
								}), L ? s.createElement("span", {
									className: r()(dn["placeholder-blank"], dn["initial-blank-width"], dn[S && !d ? "focus-underline" : "blur-underline"]),
									onClick: () => {
										var e;
										null === (e = T.current) || void 0 === e || e.focus(),
											un(T.current),
											k(!0)
									}
									,
									style: {
										"--initial-blank-width": `${w}px`
									}
								}, "l") : null)) : e.isBlank ? null : s.createElement("span", {
									key: t
								}, e.text);
							var a
						}
						)), (() => {
							const e = t.filter((e => e.isBlank)).map((e => e.text)).join("");
							return s.createElement("span", {
								className: r()(dn["placeholder-blank"], dn.invisible),
								ref: x
							}, e)
						}
						)())))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(27882))
				},
				[ce.Sm.PartialReverseTranslate]: {
					Container: gr,
					Content: ({ challenge: { character: e, displayTokens: t, gradingResult: a, skipped: n, tokens: l }, disabled: i, fromLanguage: o, learningLanguage: c, onChange: d }) => {
						const u = t.findIndex((e => e.isBlank))
							, [m, p] = s.useState(!1);
						(0,
							v.L)(["writing", "reading"]),
							s.useEffect((() => {
								var e;
								null === (e = f.current) || void 0 === e || e.focus()
							}
							), []);
						const g = s.useRef(null)
							, h = s.useRef(null)
							, f = s.useRef(null)
							, [_, E] = s.useState()
							, [y, b] = s.useState(!1)
							, [S, k] = s.useState(!0);
						s.useLayoutEffect((() => {
							var e;
							if (null === g.current || null === h.current || null === f.current)
								throw Error("TextBoxRef, HiddenBlankSentenceRef, or inputRef is null. Possibly because displayTokens has no tokens with isBlank set to true.");
							const t = getComputedStyle(g.current)
								, a = g.current.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
								, n = (null === (e = f.current) || void 0 === e ? void 0 : e.offsetLeft) - 12
								, r = Math.min(h.current.offsetWidth, a)
								, s = a - n - 4;
							r > s ? 3 * r / 4 < s || s > 100 ? E(s) : (b(!0),
								E(r)) : E(r)
						}
						), []);
						const C = s.createElement(Vt.Z, {
							disableTTS: !0,
							highlightStyle: "normal",
							isForward: !1,
							language: o,
							tokens: l
						});
						return s.createElement("div", {
							className: mn["wrap" + (e ? "-character" : "")]
						}, s.createElement("div", {
							className: mn["prompt" + (e ? "-character" : "")]
						}, e ? s.createElement(Ee.Z, {
							character: e,
							correct: n || null == a ? void 0 : a.correct,
							lang: o
						}, C) : C), s.createElement("div", {
							className: mn["answer" + (e ? "-character" : "")]
						}, s.createElement("label", {
							className: mn["fake-textarea-player"],
							dir: (0,
								ie.Ux)(c),
							lang: c,
							onClick: () => {
								var e;
								m || (pn(f.current),
									null === (e = f.current) || void 0 === e || e.focus()),
									p(!0)
							}
							,
							ref: g
						}, t.map(((e, t) => {
							return t === u ? (a = t,
								s.createElement(s.Fragment, {
									key: a
								}, y ? s.createElement("br", null) : null, s.createElement("span", {
									className: r()(mn[m && !i ? "focus-underline" : "blur-underline"], mn[S ? "position-absolute" : "position-relative"], mn["input-span"]),
									contentEditable: !i,
									dir: (0,
										ie.Ux)(c),
									onBlur: () => p(!1),
									onFocus: e => {
										p(!0),
											e.currentTarget.innerText || (e.currentTarget.innerText = " ")
									}
									,
									onInput: e => {
										sa.Z.start("challenge_typing"),
											d(e.currentTarget.innerText);
										const t = e.currentTarget.offsetWidth;
										k(void 0 !== _ && t < _)
									}
									,
									ref: f,
									spellCheck: !1,
									suppressContentEditableWarning: !0
								}), S ? s.createElement("span", {
									className: r()(mn["placeholder-blank"], mn["initial-blank-width"], mn[m && !i ? "focus-underline" : "blur-underline"]),
									onClick: () => {
										var e;
										null === (e = f.current) || void 0 === e || e.focus(),
											pn(f.current),
											p(!0)
									}
									,
									style: {
										"--initial-blank-width": `${_}px`
									}
								}, "l") : null)) : e.isBlank ? null : s.createElement("span", {
									key: t
								}, e.text);
							var a
						}
						)), (() => {
							const e = t.filter((e => e.isBlank)).map((e => e.text)).join("");
							return s.createElement("span", {
								className: r()(mn["placeholder-blank"], mn.invisible),
								ref: h
							}, e)
						}
						)())))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(22690))
				},
				[ce.Sm.PatternTapComplete]: {
					Container: gr,
					Content: ({ challenge: { blankRangeStart: e, blankRangeEnd: t, gradingResult: a, options: n, tokens: r, choices: i, patternSentences: o, skipped: c }, challengeState: { guess: d }, disabled: u, isDesktop: m, learningLanguage: p, onChange: g }) => {
						var h;
						const f = (0,
							W.tX)();
						(0,
							v.L)(["reading"]);
						const _ = n || i.map((e => ({
							text: e,
							tts: null
						})))
							, E = s.useRef([])
							, y = s.useRef()
							, b = m ? be.I.Large : be.I.Normal
							, S = d
							, k = void 0 === S ? [] : [S]
							, { selectedTokenAnimations: C, unselectedTokenAnimations: x } = xe({
								isFlyEnabled: m,
								selectedIndices: k,
								selectedTokenRefs: E.current.filter(Pe.$K),
								tokens: _.length,
								unselectedTokenRefs: null !== (h = y.current) && void 0 !== h ? h : []
							})
							, T = () => w(void 0)
							, w = e => {
								g(e)
							}
							, { highlights: N } = (0,
								Ne.Z)({
									gracePeriod: 1e3,
									language: p,
									mode: u || !(0,
										He.jc)(p) ? "disabled" : void 0 !== d && 1 === k.length ? "remove-only" : "unique",
									onBackspace: T,
									onMatch: e => {
										f((0,
											Re.eX)({
												challengeType: ce.Sm.PatternTapComplete
											})),
											w(e)
									}
									,
									selectedIndices: k,
									tokens: (0,
										Te.qj)(_.map((e => e.text)))
								})
							, R = o.map(((e, t) => {
								const a = e.boldStartIndex
									, n = e.boldEndIndex
									, r = e.highlightStartIndex
									, l = e.highlightEndIndex;
								let i = 0;
								const o = []
									, c = [];
								return e.tokens.forEach(((e, t) => {
									const s = i;
									i += e.value.length,
										s >= a && i <= n && o.push(t),
										s >= r && i <= l && c.push({
											endIndex: Math.min(l - s, e.value.length),
											startIndex: Math.max(r - s, 0),
											tokenIndex: t
										})
								}
								)),
									[s.createElement("div", {
										className: vn["table-entry"],
										key: t
									}, s.createElement(Vt.Z, {
										highlightStyle: "bold",
										highlights: o,
										isForward: !0,
										key: t,
										language: p,
										substringHighlightStyle: "new-pattern",
										substringHighlights: c,
										tokens: e.tokens
									}))]
							}
							));
						return s.createElement("div", {
							className: vn.wrap,
							dir: (0,
								ie.Ux)(p)
						}, s.createElement("div", {
							className: vn.answer
						}, s.createElement("div", {
							className: vn.table
						}, s.createElement(hn, {
							headers: !1,
							tableCells: [[], ...R, [(() => {
								var n, l;
								const i = null != S ? S : -1
									, o = s.createElement("div", {
										className: vn["gap-wrap"],
										key: "gap"
									}, s.createElement(ln, {
										animation: (null == a ? void 0 : a.correct) && !c ? fn : C[i],
										choices: _,
										disabled: u,
										highlightIndex: null === (n = N[i]) || void 0 === n ? void 0 : n.index,
										isComposing: null === (l = N[i]) || void 0 === l ? void 0 : l.isComposing,
										language: p,
										onTap: () => {
											i > -1 && T()
										}
										,
										ref: e => {
											void 0 !== S && (E.current[i] = e)
										}
										,
										selectedIndices: void 0 === S ? void 0 : [S],
										size: b,
										sparklesStyle: "regular"
									}))
									, [d, m] = (() => {
										let a, n, s = 0;
										if (r.forEach(((r, l) => {
											const i = s;
											s += r.value.length,
												i < e || s > t || (void 0 === a && (a = l),
													a = Math.min(a, l),
													void 0 === n && (n = l + 1),
													n = Math.max(n, l + 1))
										}
										)),
											void 0 === a || void 0 === n)
											throw Error("Gap start or end token index is undefined");
										return [a, n]
									}
									)()
									, g = r.map(((e, t) => s.createElement(Vt.Z, {
										highlightStyle: "normal",
										isForward: !0,
										key: t,
										language: p,
										tokens: [e]
									})));
								return [...g.slice(0, d), o, ...g.slice(m)]
							}
							)()]]
						})), s.createElement(Se.Z, {
							choices: _,
							disabled: u,
							language: p,
							onTap: e => {
								void 0 === S && w(e)
							}
							,
							selectedIndices: k,
							size: b,
							style: "word-bank",
							tokenProps: l.DZ(_.length, (e => {
								var t, a;
								return {
									animation: x[e],
									highlightIndex: null === (t = N[e]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = N[e]) || void 0 === a ? void 0 : a.isComposing
								}
							}
							)),
							tokensRef: e => y.current = e
						})))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(20300))
				},
				[ce.Sm.ReadComprehension]: {
					Container: hr,
					Content: ({ challenge: e, challengeState: { finishedPassage: t, guess: a }, disabled: n, isDesktop: r, learningLanguage: l, onChange: o }) => {
						const c = (0,
							W.tX)()
							, d = s.useRef(null)
							, u = s.useRef(null)
							, m = s.useRef(null);
						s.useEffect((() => {
							c({
								type: "SET_SWRL_ENGAGEMENT",
								value: ["reading"]
							})
						}
						), []),
							s.useEffect((() => {
								var e;
								t && (null === (e = d.current) || void 0 === e || e.focusFirstChoice())
							}
							), [t]),
							s.useEffect((() => {
								t ? u.current && (0,
									ha.zT)(u.current, {
										behavior: "smooth",
										block: "start"
									}) : m.current && (0,
										ha.zT)(m.current, {
											behavior: "smooth",
											block: "center"
										})
							}
							), [t, r]),
							(0,
								i.Z)({
									isVisible: t,
									ref: u
								});
						const { choices: p, correctIndex: g, gradingResult: h, passage: v, passageTokens: f, question: _, questionTokens: E, skipped: y } = e;
						return s.createElement("div", {
							className: "_35yxN f7WE2 _3rat3"
						}, s.createElement("div", {
							className: "_3IpYc _35mGI",
							dir: (0,
								ie.Ux)(l),
							ref: m
						}, e.tts ? s.createElement(he.Z, {
							audio: e.tts,
							autoplay: !0,
							className: "_3UfR2 _3CzhQ vAI_X",
							dir: (0,
								ie.Ux)(l),
							type: "small",
							useKeyboardShortcut: !0
						}) : null, s.createElement(Vt.Z, {
							highlightStyle: "normal",
							isForward: !0,
							language: l,
							tokens: null != f ? f : [{
								value: v
							}]
						})), s.createElement("div", {
							ref: u,
							style: t ? void 0 : {
								pointerEvents: "none"
							}
						}, _ ? s.createElement("div", {
							className: "_59nJS _35mGI TrS6n _2UoAa",
							dir: (0,
								ie.Ux)(l)
						}, s.createElement(Vt.Z, {
							highlightStyle: "normal",
							inTabOrder: t,
							isForward: !0,
							language: l,
							tokens: null != E ? E : [{
								value: _
							}]
						})) : null, s.createElement(at.Z, {
							choices: p,
							correct: y || null == h ? void 0 : h.correct,
							correctIndex: g,
							disabled: n || !t,
							language: l,
							onChange: o,
							overflowBehavior: {
								shouldHandleOverflow: !1
							},
							ref: d,
							type: "column",
							value: a
						})))
					}
					,
					Header: ({ challenge: e }) => {
						const t = e.passage.split("__").length - 1;
						let a = (0,
							ee._i)(2005);
						return e.question ? a = (0,
							ee._i)(24620) : t && (a = (0,
								ee._i)(18142, {
									num_blanks: t
								})),
							s.createElement("span", null, a)
					}
				},
				[ce.Sm.ReverseAssist]: {
					Container: gr,
					Content: ({ challenge: { character: e, correctIndex: t, gradingResult: a, options: n, prompt: r, skipped: l }, challengeState: { guess: i }, disabled: o, fromLanguage: c, learningLanguage: d, onChange: u }) => {
						const m = {
							correctIndex: t,
							options: n,
							prompt: r
						};
						return (0,
							v.L)(["reading"]),
							s.createElement(rt, {
								challenge: m,
								character: e,
								disabled: o,
								gradingResult: a,
								guess: i,
								language: c,
								onSelect: u,
								promptLanguage: d,
								skipped: l
							})
					}
					,
					Header: ({ challenge: { character: e, prompt: t } }) => s.createElement("span", null, e ? (0,
						ee._i)(25925) : (0,
							ee._i)(42450, {
								word: t
							}))
				},
				[ce.Sm.SameDifferent]: {
					Container: gr,
					Content: ({ challenge: e, challengeState: { guess: t }, disabled: a, fromLanguage: n, onChange: r }) => {
						const { correctIndex: l, gradingResult: i, options: o, prompts: c, secondaryInstructions: d, skipped: u, ttsURLs: m } = e;
						return (0,
							v.L)(["listening"]),
							s.createElement("div", {
								className: "_1NubR f7WE2 _3rat3"
							}, s.createElement("div", {
								className: "hQnjO"
							}, s.createElement(Sn, {
								disabled: a,
								hasUserGuessed: void 0 !== i,
								prompts: c,
								ttsUrls: m
							})), s.createElement("div", null, s.createElement("div", {
								className: "_2DAdx"
							}, d), s.createElement(at.Z, {
								autoFocus: !0,
								choices: o,
								correct: u || null == i ? void 0 : i.correct,
								correctIndex: l,
								disabled: a,
								language: n,
								onChange: r,
								overflowBehavior: {
									shouldHandleOverflow: !1
								},
								type: "column",
								value: t
							})))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, e.instructions)
				},
				[ce.Sm.Select]: {
					Container: gr,
					Content: e => {
						const { challenge: t, challenge: { correctIndex: a, gradingResult: n, skipped: r }, challengeState: { guess: l }, disabled: i, fromLanguage: o, learningLanguage: c, onChange: d } = e;
						(0,
							v.L)(["reading"]);
						const u = (0,
							W.Fx)(f.is)
							, m = (0,
								W.Fx)(st.hg);
						return s.createElement("div", {
							className: "GqLk4 f7WE2 _3rat3"
						}, s.createElement(Rt.Z, {
							onChange: e => {
								const a = window.performance.now();
								d(e);
								const { phrase: n, tts: r } = t.choices[e];
								r && (0,
									Le.a1)(r, {
										requestedAt: a,
										text: n
									})
							}
							,
							type: "row-desktop-two-columns-mobile",
							value: l
						}, t.choices.map(((e, t) => {
							const d = s.createElement("div", {
								className: "_3RCHd"
							}, s.createElement("div", {
								className: "fRsqg",
								style: {
									backgroundImage: `url(${e.svg || e.image})`
								}
							}))
								, p = e.phraseTransliteration && (0,
									st._G)(u.type) && (0,
										st.dN)(c, o, m) ? s.createElement(wt.Z, {
											highlightStyle: "normal",
											state: l === t ? "active" : void 0,
											text: [...e.phrase],
											transliteration: e.phraseTransliteration
										}) : s.createElement("span", {
											style: {
												fontSize: `${Math.min(17, 21 - e.phrase.length / 2)}px`
											}
										}, e.phrase);
							return s.createElement(Nt.Z, {
								autoFocus: 0 === t,
								caption: p,
								correct: r ? void 0 : (null == n ? void 0 : n.correct) && a === t,
								disabled: i,
								icon: d,
								index: t,
								key: t,
								language: c,
								selected: l === t
							})
						}
						))))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(18721, {
							hint: e.prompt
						}))
				},
				[ce.Sm.SelectPronunciation]: {
					Container: gr,
					Content: Tn,
					Header: xn
				},
				[ce.Sm.SelectTranscription]: {
					Container: gr,
					Content: Tn,
					Header: xn
				},
				[ce.Sm.SvgPuzzle]: {
					Container: dr,
					Content: e => {
						const { challenge: t, disabled: a, learningLanguage: n, onChange: r } = e;
						(0,
							v.L)(["writing", "reading"]);
						const i = void 0 === t.indicatorType || ![ce.A.HardChallenge, ce.A.LimitedTts].includes(t.indicatorType)
							, [o, c] = s.useState([])
							, [d] = s.useState((() => (e => {
								const t = e.map(((e, t) => ({
									...e,
									originalIndex: t
								})));
								return (0,
									bt.gQ)("sampleSession") ? t : l.TV([...t])
							}
							)((0,
								yt.cd)(t.correctIndices, t.choices))))
							, [u, m] = s.useState((() => t.gridItems.map((e => {
								const { maxX: t, maxY: a, minX: n, minY: r } = e.path.reduce(((e, t) => ({
									maxX: Math.max(e.maxX, t.x),
									maxY: Math.max(e.maxY, t.y),
									minX: Math.min(e.minX, t.x),
									minY: Math.min(e.minY, t.y)
								})), {
									maxX: -1 / 0,
									maxY: -1 / 0,
									minX: 1 / 0,
									minY: 1 / 0
								})
									, s = {
										maxX: t,
										maxY: a,
										minX: n,
										minY: r,
										path: e.path
									};
								return {
									center: e.center,
									colStart: n + e.origin.x,
									numCols: t - n,
									numRows: a - r,
									origin: e.origin,
									path: s,
									rowStart: r + e.origin.y
								}
							}
							))))
							, [p, g] = s.useState(0)
							, [h, _] = s.useState()
							, [E, y] = s.useState()
							, b = s.useRef(null)
							, S = (0,
								W.Fx)(f.$4)
							, k = (0,
								W.Fx)(f.lA)
							, C = (0,
								W.Fx)((e => e.ui.viewportHeight))
							, x = (0,
								W.Fx)((e => e.ui.viewportWidth));
						s.useLayoutEffect((() => {
							if (b.current) {
								const { gridWidth: e, gridHeight: a } = t
									, n = b.current.getBoundingClientRect().width
									, r = b.current.getBoundingClientRect().height
									, s = Math.min(n / a, r / e)
									, l = S ? s : n / a * .6;
								_(!S && l * a < yt.aw ? Math.min(s, yt.aw / a) : l)
							}
						}
						), [x, C]);
						const T = e => {
							if (k.status === St.c.Blaming)
								return;
							const t = u[e].choiceIndex;
							void 0 !== t && (i && (0,
								Le.GN)(d[t].tts),
								c(o.filter((t => t !== u[e].choiceIndex)))),
								g(e);
							const a = u.map(((t, a) => a === e ? {
								...t,
								choiceIndex: void 0
							} : t));
							m(a),
								r({
									choices: a.map((e => void 0 === e.choiceIndex ? -1 : d[e.choiceIndex].originalIndex))
								})
						}
							, w = async e => {
								for (const [t, a] of e)
									y(t),
										a && await (0,
											Et._v)(a)
							}
							;
						s.useEffect((() => {
							var e;
							k.status === St.c.Blaming && ((null === (e = t.gradingResult) || void 0 === e ? void 0 : e.correct) ? w([[yt.SR.CorrectMoveInwards, 355], [yt.SR.CorrectShowFinalWord, 900], [yt.SR.CorrectFinal, void 0]]) : t.skipped || w([[yt.SR.IncorrectMoveInwards, 355], [yt.SR.IncorrectSnapBack, void 0]]))
						}
						), [k.status]),
							ft(a, u, n, T, o, p, g);
						const N = ({ item: e, index: a }) => {
							const n = void 0 === e.choiceIndex ? void 0 : d[e.choiceIndex].strokes;
							return a === p ? void 0 === n ? 1 : yt.BV + t.gridWidth + 1 : void 0 === n ? 0 : yt.BV + e.rowStart + e.numRows
						}
							, R = void 0 === h ? null : s.createElement(s.Fragment, null, E ? s.createElement(s.Fragment, null, void 0 === h ? null : s.createElement(Fn, {
								animationState: E,
								cellSize: h,
								choices: d,
								height: h * t.gridHeight,
								items: u,
								width: h * t.gridWidth
							})) : (0,
								Te.qj)(u.map(((e, t) => ({
									index: t,
									item: e
								})))).sort(((e, t) => N(e) - N(t))).map((({ item: e, index: a }) => s.createElement(Ln, {
									cellSize: h,
									disabled: void 0 !== E,
									fast: E === yt.SR.IncorrectSnapBack,
									gridCols: t.gridHeight,
									gridRows: t.gridWidth,
									index: a,
									info: e,
									key: a,
									onClick: T,
									selected: a === p,
									strokes: void 0 === e.choiceIndex ? void 0 : d[e.choiceIndex].strokes
								}))), E && [yt.SR.CorrectShowFinalWord, yt.SR.CorrectFinal].includes(E) ? s.createElement("foreignObject", {
									height: h * t.gridHeight,
									width: h * t.gridWidth
								}, s.createElement(ht, null)) : null)
							, I = s.createElement(Se.Z, {
								choices: d.map((e => {
									var t, a;
									return {
										text: null !== (t = e.text) && void 0 !== t ? t : "",
										tts: null !== (a = e.tts) && void 0 !== a ? a : null
									}
								}
								)),
								disabled: a,
								language: n,
								onTap: e => {
									if (i && (0,
										Le.GN)(d[e].tts),
										void 0 === p)
										return;
									c([...o.filter((e => e !== u[p].choiceIndex)), e]),
										g((0,
											yt.LK)(u, p));
									const t = u.map(((t, a) => a === p ? {
										...t,
										choiceIndex: e
									} : t));
									m(t),
										r({
											choices: t.map((e => void 0 === e.choiceIndex ? -1 : d[e.choiceIndex].originalIndex))
										})
								}
								,
								selectedIndices: o,
								size: be.I.SvgPuzzle,
								style: "word-bank",
								tokenProps: d.map(((e, t) => ({
									children: s.createElement(In, {
										center: {
											x: 25,
											y: 25
										},
										height: 50,
										key: t,
										scalingFactor: .5,
										strokes: e.strokes,
										width: 50
									}),
									numberKey: S ? t + 1 : void 0
								})))
							})
							, L = t.correctSolutions[0]
							, P = t.prompt.replace(L, yt.XW);
						return s.createElement("div", {
							className: wn.wrap
						}, s.createElement("div", {
							className: wn.prompt
						}, void 0 === t.tts ? null : s.createElement(he.Z, {
							audio: t.tts,
							autoplay: !0,
							type: "small"
						}), s.createElement(wt.Z, {
							highlightStyle: "normal",
							highlightedCharacter: L,
							highlightedIsBlank: !0,
							text: [...P],
							transliteration: t.promptTransliteration
						})), s.createElement("div", {
							className: wn["grid-and-tokens-wrap"]
						}, s.createElement("div", {
							className: wn["grid-wrap"],
							lang: n,
							ref: b
						}, void 0 === h ? null : s.createElement(Pn, {
							animationState: E,
							cellSize: h,
							numCols: t.gridHeight,
							numRows: t.gridWidth
						}, R)), I))
					}
					,
					Header: ({ challenge: { meaning: e }, learningLanguage: t }) => {
						const a = (() => {
							switch (t) {
								case "ja":
									return (0,
										ee._i)(46961, {
											meaning: e
										});
								case "zh":
									return (0,
										ee._i)(46962, {
											meaning: e
										});
								default:
									return (0,
										ee._i)(40502)
							}
						}
						)();
						return s.createElement("span", null, a)
					}
				},
				[ce.Sm.SyllableTap]: {
					Container: gr,
					Content: Ge,
					Header: Ue
				},
				[ce.Sm.SyllableListenTap]: {
					Container: gr,
					Content: Ge,
					Header: Ue
				},
				[ce.Sm.Speak]: {
					Container: gr,
					Content: ({ challenge: e, challenge: { character: t, gradingResult: a, promptTransliteration: n, skipped: l, tokens: i }, disabled: o, fromLanguage: c, learningLanguage: d, onChange: u }) => {
						const m = (0,
							W.tX)()
							, p = "dark" === (0,
								ge.Fg)()
							, g = s.useRef(null)
							, h = (0,
								W.Fx)(f.lA)
							, _ = (0,
								W.Fx)(st.hg)
							, E = h.status === St.c.Guessing
							, { isRecognizing: y, recognizerResultsTokens: b, startRecognizing: S, stopRecognizing: k } = qa(u, e.prompt, d, e.speakGrader, i);
						(0,
							v.L)(["speaking"]);
						const C = s.useCallback((() => {
							y ? k() : (m({
								status: St.c.Guessing,
								type: "SET_PLAYER_STATUS"
							}),
								S())
						}
						), [y]);
						s.useEffect((() => {
							E || k(!0)
						}
						), [E]),
							s.useEffect((() => {
								if (!o) {
									const e = e => {
										"Enter" === e.key && (e.preventDefault(),
											e.stopPropagation(),
											C())
									}
										;
									return vt.U.addListener(document, "keydown", e),
										() => vt.U.removeListener(document, "keydown", e)
								}
							}
							), [o, C]),
							s.useEffect((() => {
								y && (0,
									Le.Ap)()
							}
							), [y]);
						const x = i.length > 0 && _ && (null == n ? void 0 : n.tokens.some((e => void 0 !== (0,
							st.iZ)(e, _.type)))) && (0,
								st._G)(h.session.type) && (0,
									st.dN)(d, c, _)
							, T = (0,
								He.xV)(e)
							, w = s.createElement("span", {
								className: r()({
									[Qa.recording]: y
								})
							}, i.length ? s.createElement(Vt.Z, {
								disableTTS: y,
								highlightStyle: e.indicatorType !== ce.A.WeakWord || y ? "normal" : "weak-word",
								highlights: y || e.indicatorType !== ce.A.WeakWord ? i.map(((e, t) => ({
									highlightIndex: t,
									token: e
								}))).filter((({ token: e }) => void 0 !== e.hintTable)).filter((({ }, e) => {
									var t;
									return null === (t = b[e]) || void 0 === t ? void 0 : t.isRecognized
								}
								)).map((({ highlightIndex: e }) => e)) : T,
								isForward: !0,
								language: d,
								onTryPlay: e => g.current = null != e ? e : null,
								tokens: i,
								transliteration: x ? n : void 0
							}) : s.createElement("span", null, e.prompt))
							, N = s.createElement(he.Z, {
								audio: e.tts,
								autoplay: !0,
								className: t ? void 0 : Qa.speaker,
								dir: (0,
									ie.Ux)(d),
								disabled: y,
								onTryPlay: e => g.current = null != e ? e : null,
								ttsTrackingData: {
									text: e.prompt
								},
								type: "small",
								useKeyboardShortcut: !0,
								variant: t ? "inverse" : void 0
							});
						return s.createElement("div", {
							className: Qa["wrap" + (t ? "-character" : "")]
						}, s.createElement("div", {
							className: Qa["prompt" + (t ? "-character" : "")]
						}, t ? s.createElement(Ee.Z, {
							audioEl: g,
							character: t,
							correct: l || null == a ? void 0 : a.correct,
							hasTransliterations: x,
							lang: d,
							leadingVisual: N
						}, w) : s.createElement("div", {
							className: y ? Qa["bordered-recording"] : Qa.bordered,
							dir: (0,
								ie.Ux)(d)
						}, N, w)), s.createElement("div", {
							className: Qa.answer
						}, t ? s.createElement(q.Z, {
							className: r()(Qa["button-character"], {
								[Qa["button-correct"]]: (null == a ? void 0 : a.correct) && !l
							}),
							color: "macaw",
							disabled: o,
							onClick: C,
							variant: "stroke"
						}, (null == a ? void 0 : a.correct) && !l ? s.createElement("img", {
							src: p ? Xa : Ya
						}) : y ? s.createElement(za.Z, null) : s.createElement(s.Fragment, null, s.createElement(Va, {
							disabled: o,
							hasCharacter: !0
						}), (0,
							ee._i)(17130)), s.createElement($a.Z, {
								animationCounter: (null == a ? void 0 : a.correct) && !l ? 1 : 0,
								className: Qa.sparkles
							})) : s.createElement(q.Z, {
								className: Qa.button,
								color: "macaw",
								disabled: o,
								onClick: C,
								variant: "solid"
							}, y ? s.createElement("span", {
								className: t ? Qa["square-blue"] : Qa.square
							}) : s.createElement(Va, {
								disabled: o,
								hasCharacter: !1
							}))))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(11803))
				},
				[ce.Sm.TapCloze]: {
					Container: gr,
					Content: ({ challenge: { choices: e, displayTokens: t, tokens: a }, challengeState: { guess: n }, disabled: r, isDesktop: i, learningLanguage: o, onChange: c }) => {
						var d;
						const u = (0,
							W.tX)();
						(0,
							v.L)(["reading"]);
						const m = s.useRef([])
							, p = s.useRef()
							, g = (null != n ? n : []).map((e => e.choiceIndex)).filter((e => void 0 !== e))
							, h = i ? be.I.Large : be.I.Normal
							, f = e => E({
								choiceIndex: void 0,
								guess: void 0,
								index: e
							})
							, _ = t => {
								const a = null == n ? void 0 : n.find((e => void 0 === e.guess));
								a && E({
									choiceIndex: t,
									guess: e[t],
									index: a.index
								})
							}
							, E = e => c(null == n ? void 0 : n.map((t => t.index === e.index ? e : t)))
							, { highlights: y } = (0,
								Ne.Z)({
									gracePeriod: 1e3,
									language: o,
									mode: r || !(0,
										He.jc)(o) ? "disabled" : g.length === (null == n ? void 0 : n.length) ? "remove-only" : "unique",
									onBackspace: () => {
										const e = null == n ? void 0 : n.find((e => e.choiceIndex === g[g.length - 1]));
										e && f(e.index)
									}
									,
									onMatch: e => {
										u((0,
											Re.eX)({
												challengeType: ce.Sm.TapCloze
											})),
											_(e)
									}
									,
									selectedIndices: g,
									tokens: (0,
										Te.qj)(e)
								})
							, { selectedTokenAnimations: b, unselectedTokenAnimations: S } = xe({
								isFlyEnabled: i,
								selectedIndices: g,
								selectedTokenRefs: m.current.filter(Pe.$K),
								tokens: e.length,
								unselectedTokenRefs: null !== (d = p.current) && void 0 !== d ? d : []
							});
						return s.createElement("div", {
							className: "_1pU2y _1IiFg f7WE2 _3rat3",
							dir: (0,
								ie.Ux)(o)
						}, s.createElement("div", {
							className: "_1Cq_v"
						}, t.map(((t, l) => s.createElement(s.Fragment, {
							key: l
						}, ((t, a, l) => {
							var i, c, d;
							const u = null == n ? void 0 : n.find((e => e.index === a));
							if (void 0 !== t.damageStart && u) {
								const a = null !== (i = u.choiceIndex) && void 0 !== i ? i : -1;
								return s.createElement("span", {
									className: "_9nPZA"
								}, s.createElement(Dn, {
									choice: u.guess,
									damageStart: t.damageStart,
									disabled: r,
									endRef: e => {
										a > -1 && (m.current[g.indexOf(a)] = e)
									}
									,
									fullText: t.text,
									language: o,
									onTap: () => a > -1 && f(u.index),
									possibleChoices: e,
									size: h,
									tokenProps: {
										animation: b[a],
										highlightIndex: null === (c = y[a]) || void 0 === c ? void 0 : c.index,
										isComposing: null === (d = y[a]) || void 0 === d ? void 0 : d.isComposing
									}
								}))
							}
							return l ? s.createElement(Vt.Z, {
								highlightStyle: "normal",
								isForward: !0,
								language: o,
								tokens: [l]
							}) : ((0,
								oe.vU)("No matching token found", {
									data: t.text
								}),
								s.createElement("div", null, t.text))
						}
						)(t, l, a[l]))))), s.createElement(Se.Z, {
							choices: e.map((e => ({
								text: e,
								tts: null
							}))),
							disabled: r,
							language: o,
							onTap: _,
							selectedIndices: g,
							size: h,
							style: "word-bank",
							tokenProps: l.DZ(e.length, (e => {
								var t, a;
								return {
									animation: S[e],
									highlightIndex: null === (t = y[e]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = y[e]) || void 0 === a ? void 0 : a.isComposing,
									variant: "damaged-end-left"
								}
							}
							)),
							tokensRef: e => p.current = e
						}))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(6098, {
							num_broken: e.displayTokens.filter((e => e.damageStart)).length
						}))
				},
				[ce.Sm.TapClozeTable]: {
					Container: gr,
					Content: ({ challenge: { choices: e, displayTableTokens: t, headers: a, tableTokens: n }, challengeState: { guess: r }, disabled: i, isDesktop: o, learningLanguage: c, onChange: d }) => {
						var u;
						const m = (0,
							W.tX)();
						(0,
							v.L)(["writing"]);
						const p = s.useRef([])
							, g = s.useRef()
							, h = (null != r ? r : []).map((e => e.choiceIndex)).filter((e => void 0 !== e))
							, f = o ? be.I.Large : be.I.Normal
							, _ = (e, t) => y({
								choiceIndex: void 0,
								colIndex: e,
								guess: void 0,
								rowIndex: t
							})
							, E = t => {
								const a = null == r ? void 0 : r.find((e => void 0 === e.guess));
								a && y({
									choiceIndex: t,
									colIndex: a.colIndex,
									guess: e[t],
									rowIndex: a.rowIndex
								})
							}
							, y = e => d(null == r ? void 0 : r.map((t => t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t)))
							, { highlights: b } = (0,
								Ne.Z)({
									gracePeriod: 1e3,
									language: c,
									mode: i || !(0,
										He.jc)(c) ? "disabled" : h.length === (null == r ? void 0 : r.length) ? "remove-only" : "unique",
									onBackspace: () => {
										const e = null == r ? void 0 : r.find((e => e.choiceIndex === h[h.length - 1]));
										e && _(e.colIndex, e.rowIndex)
									}
									,
									onMatch: e => {
										m((0,
											Re.eX)({
												challengeType: ce.Sm.TapClozeTable
											})),
											E(e)
									}
									,
									selectedIndices: h,
									tokens: (0,
										Te.qj)(e)
								})
							, { selectedTokenAnimations: S, unselectedTokenAnimations: k } = xe({
								isFlyEnabled: o,
								selectedIndices: h,
								selectedTokenRefs: p.current.filter(Pe.$K),
								tokens: e.length,
								unselectedTokenRefs: null !== (u = g.current) && void 0 !== u ? u : []
							});
						return s.createElement("div", {
							className: "_2L3ui _1IiFg f7WE2 _3rat3",
							dir: (0,
								ie.Ux)(c)
						}, s.createElement(hn, {
							headers: a,
							tableCells: (0,
								Ye.tl)(t, n, ((t, a, n, l) => {
									var o, d, u;
									const { colIndex: m, rowIndex: g } = t
										, v = null == r ? void 0 : r.find((e => e.colIndex === m && e.rowIndex === g));
									if (a.damageStart && v) {
										const t = null !== (o = v.choiceIndex) && void 0 !== o ? o : -1;
										return s.createElement("div", {
											className: "_1dkYy",
											key: l
										}, s.createElement(Dn, {
											choice: v.guess,
											damageStart: a.damageStart,
											disabled: i,
											endRef: e => {
												t > -1 && (p.current[h.indexOf(t)] = e)
											}
											,
											fullText: a.text,
											language: c,
											onTap: () => t > -1 && _(v.colIndex, v.rowIndex),
											possibleChoices: e,
											size: f,
											tokenProps: {
												animation: S[t],
												highlightIndex: null === (d = b[t]) || void 0 === d ? void 0 : d.index,
												isComposing: null === (u = b[t]) || void 0 === u ? void 0 : u.isComposing
											}
										}))
									}
									return n ? s.createElement(Vt.Z, {
										highlightStyle: "normal",
										isForward: !0,
										key: l,
										language: c,
										tokens: [n]
									}) : s.createElement("div", {
										key: l
									}, a.text)
								}
								))
						}), s.createElement(Se.Z, {
							choices: e.map((e => ({
								text: e,
								tts: null
							}))),
							disabled: i,
							language: c,
							onTap: E,
							selectedIndices: h,
							size: f,
							style: "word-bank",
							tokenProps: l.DZ(e.length, (e => {
								var t, a;
								return {
									animation: k[e],
									highlightIndex: null === (t = b[e]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = b[e]) || void 0 === a ? void 0 : a.isComposing,
									variant: "damaged-end-left"
								}
							}
							)),
							tokensRef: e => g.current = e
						}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(10718))
				},
				[ce.Sm.TapComplete]: {
					Container: gr,
					Content: ({ challenge: e, challenge: { choices: t, correctIndices: a, displayTokens: n, tokens: r }, disabled: i, isDesktop: o, learningLanguage: c, onChange: d }) => {
						var u;
						const m = (0,
							W.tX)();
						(0,
							v.L)(["reading"]);
						const p = s.useRef(null)
							, g = s.useRef([])
							, h = s.useRef()
							, [f, _] = s.useState((() => new Array(a.length).fill(null)))
							, [E, y] = s.useState((0,
								Te.qj)(e.choices))
							, [b, S] = s.useState()
							, [k, C] = s.useState()
							, [x, T] = s.useState(o ? be.I.Large : be.I.Normal)
							, w = e => {
								const t = window.performance.now();
								if (f.includes(e))
									N(f.map((t => t === e ? On : t)));
								else {
									const { text: a, tts: n } = E[e];
									n && (0,
										Le.a1)(n, {
											requestedAt: t,
											text: a
										}),
										N(f.map(((t, a, n) => t === On && n.indexOf(On) === a ? e : t)))
								}
							}
							, N = e => {
								_(e);
								const a = e.map((e => e === On ? On : E[e])).map((e => e === On ? On : t.indexOf(e)));
								d(a)
							}
							, R = f.filter((e => e !== On))
							, { highlights: I } = (0,
								Ne.Z)({
									gracePeriod: 1e3,
									language: c,
									mode: i || !(0,
										He.jc)(c) ? "disabled" : R.length === a.length ? "remove-only" : "unique",
									onBackspace: () => {
										for (let e = f.length - 1; e >= 0; e--) {
											const t = f[e];
											if (t !== On) {
												w(t);
												break
											}
										}
									}
									,
									onMatch: e => {
										m((0,
											Re.eX)({
												challengeType: ce.Sm.TapComplete
											})),
											w(e)
									}
									,
									selectedIndices: R,
									tokens: E.map((e => e.text))
								})
							, { selectedTokenAnimations: L, unselectedTokenAnimations: P } = xe({
								isFlyEnabled: o,
								selectedIndices: R,
								selectedTokenRefs: g.current.filter(Pe.$K),
								tokens: E.length,
								unselectedTokenRefs: null !== (u = h.current) && void 0 !== u ? u : []
							});
						s.useEffect((() => {
							b === E && k === x || ((() => {
								const e = (() => {
									const e = a.map((e => t[e]))
										, n = E.filter((t => !e.includes(t)));
									return l.UP(n)
								}
								)();
								p.current && (0,
									Fe.J)(p.current) && (x === be.I.Large ? T(be.I.Normal) : x === be.I.Normal ? T(be.I.Shorter) : void 0 === e ? (0,
										V.track)("challenge_overflow", {
											challenge_type: "tap_complete",
											prompt: n.map((e => e.text)).join("")
										}) : (_(new Array(a.length).fill(null)),
											y(l.zu(E, e))))
							}
							)(),
								S(E),
								C(x))
						}
						)),
							n.length !== r.length && (0,
								oe.vU)("Token length mismatch", {
									once: !0
								});
						const F = f.values();
						return s.createElement("div", {
							className: Mn["wrap" + (e.image ? "-image" : "")],
							ref: p
						}, e.image ? s.createElement("img", {
							className: Mn.image,
							src: e.image.svg
						}) : null, s.createElement("div", {
							className: Mn.prompt,
							dir: (0,
								ie.Ux)(c)
						}, l.DZ(n.length, (e => {
							var t, a;
							const l = n[e]
								, o = r[e];
							if (l.isBlank) {
								const n = F.next().value;
								return s.createElement("div", {
									className: Mn["gap-wrap"],
									key: e
								}, s.createElement(ln, {
									animation: L[n],
									choices: E,
									disabled: i,
									highlightIndex: null === (t = I[n]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = I[n]) || void 0 === a ? void 0 : a.isComposing,
									language: c,
									onTap: () => n !== On && w(n),
									ref: e => g.current[f.indexOf(n)] = e,
									selectedIndices: n === On || void 0 === n ? void 0 : [n],
									size: x
								}))
							}
							return s.createElement(Vt.Z, {
								highlightStyle: "normal",
								isForward: !0,
								key: e,
								language: c,
								tokens: [o]
							})
						}
						))), s.createElement("div", {
							className: Mn.answer
						}, s.createElement(Se.Z, {
							choices: E,
							disabled: i,
							language: c,
							onTap: w,
							selectedIndices: R,
							size: x,
							style: "word-bank",
							tokenProps: l.DZ(E.length, (e => {
								var t, a;
								return {
									animation: P[e],
									highlightIndex: null === (t = I[e]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = I[e]) || void 0 === a ? void 0 : a.isComposing
								}
							}
							)),
							tokensRef: e => h.current = e
						})))
					}
					,
					Header: ({ challenge: e }) => s.createElement(s.Fragment, null, (0,
						ee._i)(18142, {
							num_blanks: e.displayTokens.filter((e => e.isBlank)).length
						}))
				},
				[ce.Sm.TapCompleteTable]: {
					Container: gr,
					Content: ({ challenge: { displayTableTokens: e, headers: t, choices: a, tableTokens: n }, challengeState: { guess: r }, disabled: i, isDesktop: o, learningLanguage: c, onChange: d }) => {
						var u;
						const m = (0,
							W.tX)();
						(0,
							v.L)(["writing"]);
						const p = s.useRef([])
							, g = s.useRef()
							, h = (null != r ? r : []).map((e => e.choiceIndex)).filter((e => void 0 !== e))
							, f = o ? be.I.Large : be.I.Normal
							, _ = (e, t) => y({
								choiceIndex: void 0,
								colIndex: e,
								guess: void 0,
								rowIndex: t
							})
							, E = e => {
								const t = null == r ? void 0 : r.find((e => void 0 === e.guess));
								t && y({
									choiceIndex: e,
									colIndex: t.colIndex,
									guess: a[e].text,
									rowIndex: t.rowIndex
								})
							}
							, y = e => {
								d(null == r ? void 0 : r.map((t => t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t)))
							}
							, { highlights: b } = (0,
								Ne.Z)({
									gracePeriod: 1e3,
									language: c,
									mode: i || !(0,
										He.jc)(c) ? "disabled" : h.length === (null == r ? void 0 : r.length) ? "remove-only" : "unique",
									onBackspace: () => {
										const e = null == r ? void 0 : r.find((e => e.choiceIndex === h[h.length - 1]));
										e && _(e.colIndex, e.rowIndex)
									}
									,
									onMatch: e => {
										m((0,
											Re.eX)({
												challengeType: ce.Sm.TapCompleteTable
											})),
											E(e)
									}
									,
									selectedIndices: h,
									tokens: (0,
										Te.qj)(a).map((e => e.text))
								})
							, { selectedTokenAnimations: S, unselectedTokenAnimations: k } = xe({
								isFlyEnabled: o,
								selectedIndices: h,
								selectedTokenRefs: p.current.filter(Pe.$K),
								tokens: a.length,
								unselectedTokenRefs: null !== (u = g.current) && void 0 !== u ? u : []
							});
						return s.createElement("div", {
							className: "_1lVLA _1IiFg f7WE2 _3rat3",
							dir: (0,
								ie.Ux)(c)
						}, s.createElement(hn, {
							headers: t,
							tableCells: (0,
								Ye.tl)(e, n, ((e, t, n) => {
									var l, o, d;
									const { colIndex: u, rowIndex: m } = e
										, g = null == r ? void 0 : r.find((e => e.colIndex === u && e.rowIndex === m));
									if (t.isBlank && g) {
										const e = null !== (l = g.choiceIndex) && void 0 !== l ? l : -1;
										return s.createElement("div", {
											className: "BvnoY"
										}, s.createElement(ln, {
											animation: S[e],
											choices: a,
											disabled: i,
											highlightIndex: null === (o = b[e]) || void 0 === o ? void 0 : o.index,
											isComposing: null === (d = b[e]) || void 0 === d ? void 0 : d.isComposing,
											language: c,
											onTap: () => e > -1 && _(g.colIndex, g.rowIndex),
											ref: t => {
												e > -1 && (p.current[h.indexOf(e)] = t)
											}
											,
											selectedIndices: void 0 === g.choiceIndex ? void 0 : [g.choiceIndex],
											size: f
										}))
									}
									return n ? s.createElement(Vt.Z, {
										highlightStyle: "normal",
										isForward: !0,
										language: c,
										tokens: [n]
									}) : s.createElement("div", null, t.text)
								}
								))
						}), s.createElement(Se.Z, {
							choices: a,
							disabled: i,
							language: c,
							onTap: E,
							selectedIndices: h,
							size: f,
							style: "word-bank",
							tokenProps: l.DZ(a.length, (e => {
								var t, a;
								return {
									animation: k[e],
									highlightIndex: null === (t = b[e]) || void 0 === t ? void 0 : t.index,
									isComposing: null === (a = b[e]) || void 0 === a ? void 0 : a.isComposing
								}
							}
							)),
							tokensRef: e => g.current = e
						}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(2082))
				},
				[ce.Sm.TapDescribe]: {
					Container: dr,
					Content: ({ challenge: e, challenge: { image: { svg: t } }, challengeState: { guess: a }, disabled: n, isDesktop: r, learningLanguage: l, onChange: i }) => {
						const o = (0,
							W.tX)();
						return s.useEffect((() => {
							o({
								type: "SET_SWRL_ENGAGEMENT",
								value: ["reading"]
							})
						}
						), []),
							s.createElement("div", {
								className: "_1VGKH f7WE2 _3rat3"
							}, s.createElement("img", {
								className: "_3lWco _1CuPQ",
								src: t
							}), s.createElement(Me, {
								challengeType: ce.Sm.TapDescribe,
								choices: e.choices,
								correctIndices: e.correctIndices,
								disabled: n,
								isDesktop: r,
								language: l,
								onChange: i,
								onUnhandledOverflow: () => (0,
									V.track)("challenge_overflow", {
										challenge_type: "tap_describe",
										prompt: e.correctSolutions[0]
									}),
								playTtsOnSelect: !0,
								typeToSelectSupported: (0,
									He.jc)(l),
								value: null != a ? a : []
							}))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(1950))
				},
				[ce.Sm.Translate]: {
					Container: gr,
					Content: ({ challenge: e, challenge: { character: t, gradingResult: a, newWords: n, skipped: l, tokens: i }, challengeState: { guess: o }, challengeToggleState: { isToggledToTyping: c }, disabled: d, fromLanguage: u, isDesktop: m, learningLanguage: p, onChange: g }) => {
						var h, _, E, y, b;
						const S = (0,
							W.Fx)((e => 0 === (0,
								f.Oz)(e).xp))
							, k = (0,
								W.Fx)((e => (0,
									f.lA)(e).currentIndex === (0,
										f.is)(e).challenges.findIndex((e => e.type === ce.Sm.Translate))))
							, C = (0,
								He.qD)(e, p)
							, x = (0,
								He.vv)(e)
							, T = C && x
							, w = (0,
								W.Fx)((e => e.player.session.type))
							, N = (0,
								W.Fx)((e => !(0,
									Bn.LJ)((0,
										f.is)(e).type)))
							, R = (0,
								W.Fx)(st.hg)
							, I = s.useRef(null)
							, [L, P] = s.useState(!1)
							, [F, A] = s.useState(!1);
						(0,
							v.L)(C || x ? ["reading"] : ["writing"]),
							s.useEffect((() => {
								P(!0)
							}
							), []),
							(0,
								La.Z)((() => {
									sa.Z.finish("challenge_typing")
								}
								), [null == o ? void 0 : o.translation]);
						const Z = (0,
							He.j6)(e.sourceLanguage, i, n)
							, D = (0,
								He.xV)(e)
							, M = null !== (_ = null === (h = e.promptTransliteration) || void 0 === h ? void 0 : h.tokens.map((e => e.token)).join("")) && void 0 !== _ ? _ : ""
							, O = (0,
								He.gr)(M, n)
							, H = (0,
								He.jc)(e.targetLanguage)
							, B = S && k || (0,
								bt.gQ)("debugHoverIntro")
							, U = R && (null === (E = e.promptTransliteration) || void 0 === E ? void 0 : E.tokens.some((e => void 0 !== (0,
								st.iZ)(e, R.type)))) && (0,
									st._G)(w) && (0,
										st.dN)(p, u, R)
							, G = s.createElement("span", {
								className: U ? Hn["prompt-with-transliterations"] : void 0
							}, s.createElement(Vt.Z, {
								highlightStyle: e.indicatorType === ce.A.WeakWord ? "weak-word" : "new-word",
								highlights: e.indicatorType === ce.A.HardChallenge ? [] : e.indicatorType === ce.A.WeakWord ? D : Z,
								isForward: C,
								language: e.sourceLanguage,
								onTryPlay: e => I.current = null != e ? e : null,
								showHoverIntro: B,
								tokens: N ? i : [{
									value: e.prompt
								}],
								transliteration: U ? e.promptTransliteration : void 0,
								transliterationHighlights: O
							}))
							, z = C && e.tts ? s.createElement(he.Z, {
								audio: e.tts,
								autoplay: !L,
								className: r()(t ? void 0 : Hn.speaker, U ? Hn["speaker-transliterations"] : void 0),
								dir: (0,
									ie.Ux)(e.sourceLanguage),
								onTryPlay: e => I.current = null != e ? e : null,
								soundOptions: {
									eventListeners: [["ended", () => A(!1)], ["error", () => A(!1)], ["play", () => A(!0)]]
								},
								ttsTrackingData: {
									text: e.prompt
								},
								type: "small",
								useKeyboardShortcut: !0,
								variant: t ? "inverse" : void 0
							}) : null;
						return s.createElement("div", {
							className: Hn["wrap" + (t ? "-character" : "")]
						}, s.createElement("div", {
							className: Hn["prompt" + (t ? "-character" : "")]
						}, t ? s.createElement(Ee.Z, {
							audioEl: I,
							character: t,
							correct: l || null == a ? void 0 : a.correct,
							hasTransliterations: U,
							lang: e.sourceLanguage,
							leadingVisual: z
						}, G) : s.createElement("span", {
							dir: (0,
								ie.Ux)(e.sourceLanguage)
						}, G)), s.createElement("div", {
							className: Hn["answer" + (t ? "-character" : "")]
						}, T || !c ? s.createElement(Me, {
							autoFocus: !0,
							challengeType: ce.Sm.Translate,
							choices: e.choices,
							correctIndices: e.correctIndices,
							disabled: d,
							hasBorderTop: !!t,
							isDesktop: m,
							language: e.targetLanguage,
							onChange: e => g({
								...o,
								tapTranslations: e
							}),
							onTryPlay: e => I.current = null != e ? e : null,
							onUnhandledOverflow: () => (0,
								V.track)("challenge_overflow", {
									challenge_type: "translate",
									prompt: e.prompt
								}),
							playTtsOnSelect: !C && !F,
							typeToSelectSupported: H,
							value: null !== (y = null == o ? void 0 : o.tapTranslations) && void 0 !== y ? y : []
						}) : s.createElement(na, {
							autoFocus: m,
							disabled: d,
							inputLanguage: e.targetLanguage,
							learningLanguage: p,
							onChange: ({ }, e) => {
								sa.Z.start("challenge_typing"),
									g({
										...o,
										translation: e
									})
							}
							,
							value: null !== (b = null == o ? void 0 : o.translation) && void 0 !== b ? b : ""
						})))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(19263, {
							language_name: (0,
								ie.vY)(e.targetLanguage)
						}))
				},
				[ce.Sm.Transliterate]: {
					Container: dr,
					Content: e => {
						var t;
						(0,
							v.L)(["reading"]);
						const { challenge: { prompt: a }, challengeState: { guess: n }, disabled: r, isDesktop: l, onChange: i, learningLanguage: o } = e
							, c = s.useRef(null)
							, d = s.useRef([])
							, { scale: u } = dt(d, {
								maxScale: 1
							});
						return (0,
							La.Z)((() => {
								sa.Z.finish("challenge_typing")
							}
							), [null == n ? void 0 : n.transliteration]),
							s.createElement("div", {
								className: "_2A4bN f7WE2 _3rat3"
							}, s.createElement("div", {
								className: "_2sI-3"
							}, s.createElement(ct.Z, {
								className: "_3oKAp",
								fontSize: 72,
								learningLanguage: o,
								ref: e => d.current[0] = e,
								scale: u
							}, a)), s.createElement("div", {
								className: "_3iIem"
							}, s.createElement(Wt.Z, {
								autoFocus: l,
								disabled: r,
								inputLanguage: "en",
								onChange: e => {
									sa.Z.start("challenge_typing");
									const t = e.target.value;
									i({
										transliteration: t
									})
								}
								,
								placeholder: (0,
									ee.H8)(20190),
								refCallback: e => e && (c.current = e),
								style: "translation",
								value: null !== (t = null == n ? void 0 : n.transliteration) && void 0 !== t ? t : ""
							})))
					}
					,
					Header: () => s.createElement("span", null, (0,
						ee._i)(15437))
				},
				[ce.Sm.TransliterationAssist]: {
					Container: gr,
					Content: ({ challenge: { character: e, correctIndex: t, gradingResult: a, options: n, prompt: r, skipped: l }, challengeState: { guess: i }, disabled: o, learningLanguage: c, onChange: d }) => {
						(0,
							v.L)(["reading"]);
						const u = {
							correctIndex: t,
							options: n,
							prompt: r
						};
						return s.createElement(rt, {
							challenge: u,
							character: e,
							disabled: o,
							gradingResult: a,
							guess: i,
							language: c,
							onSelect: e => {
								const t = window.performance.now();
								d(e);
								const { text: a, tts: r } = n[e];
								r && (0,
									Le.a1)(r, {
										requestedAt: t,
										text: a
									})
							}
							,
							promptLanguage: c,
							skipped: l
						})
					}
					,
					Header: ({ challenge: { character: e, prompt: t } }) => s.createElement("span", null, e ? (0,
						ee._i)(52841) : (0,
							ee._i)(42451, {
								word: t
							}))
				},
				[ce.Sm.TypeCloze]: {
					Container: gr,
					Content: ({ challenge: { displayTokens: e, tokens: t }, challengeState: { guess: a = [] }, disabled: n, learningLanguage: r, onChange: l }) => {
						var i, o;
						(0,
							v.L)(["writing"]);
						const c = s.useRef([])
							, [d, u] = s.useState((() => (0,
								Ye.jL)(e)[0].index))
							, m = e => {
								const t = a.map((t => t.index === e.index ? e : t));
								l(t)
							}
							, p = a.find((e => e.index === d));
						return s.createElement("div", {
							className: Wn.wrap,
							dir: (0,
								ie.Ux)(r)
						}, s.createElement("div", {
							className: Wn.prompt
						}, e.map(((e, l) => s.createElement(s.Fragment, {
							key: l
						}, ((e, t, l) => {
							var i;
							const o = a.find((e => e.index === t));
							return void 0 !== e.damageStart ? s.createElement("span", {
								className: Wn["sentence-padding"]
							}, s.createElement(Gn, {
								autoFocus: t === a[0].index,
								damageStart: e.damageStart,
								disabled: n,
								fullText: e.text,
								language: r,
								onChange: e => m({
									guess: e,
									index: t
								}),
								onFocus: () => u(t),
								ref: e => {
									c.current[t] = e
								}
								,
								value: null !== (i = null == o ? void 0 : o.guess) && void 0 !== i ? i : ""
							})) : l ? s.createElement(Vt.Z, {
								highlightStyle: "normal",
								inTabOrder: !1,
								isForward: !0,
								language: r,
								tokens: [l]
							}) : ((0,
								oe.vU)("No matching token found", {
									data: e.text
								}),
								s.createElement("div", {
									lang: r
								}, e.text))
						}
						)(e, l, t[l]))))), s.createElement(Yt, {
							disabled: n,
							inputElement: null !== (i = c.current[d]) && void 0 !== i ? i : void 0,
							language: r,
							onChange: ({ }, e) => m({
								guess: e,
								index: d
							}),
							value: null !== (o = null == p ? void 0 : p.guess) && void 0 !== o ? o : ""
						}))
					}
					,
					Header: ({ challenge: e }) => s.createElement("span", null, (0,
						ee._i)(16472, {
							num_broken: e.displayTokens.filter((e => e.damageStart)).length
						}))
				},
				[ce.Sm.TypeClozeTable]: {
					Container: gr,
					Content: $n,
					Header: zn
				},
				[ce.Sm.TypeComplete]: {
					Container: gr,
					Content: ({ challenge: { assistedText: e, displayTokens: t, image: a, tokens: n }, challengeState: { guess: r }, disabled: l, learningLanguage: i, onChange: o }) => {
						const c = s.useRef([]);
						return (0,
							La.Z)((() => {
								sa.Z.finish("challenge_typing")
							}
							), [r]),
							s.createElement("div", {
								className: Wn["wrap-image"],
								dir: (0,
									ie.Ux)(i)
							}, s.createElement("img", {
								className: Wn.image,
								src: a.svg
							}), s.createElement("div", {
								className: Wn.prompt
							}, t.map(((t, a) => {
								const d = n[a];
								return t.isBlank ? s.createElement("span", {
									className: Wn["sentence-padding"],
									key: a
								}, s.createElement(Gn, {
									autoFocus: !0,
									damageStart: e ? e.length : 0,
									disablePlaceholder: !0,
									disabled: l,
									fullText: t.text,
									language: i,
									onChange: e => {
										sa.Z.start("challenge_typing"),
											o(e)
									}
									,
									onFocus: () => null,
									ref: e => {
										c.current[a] = e
									}
									,
									value: null != r ? r : ""
								})) : s.createElement(Vt.Z, {
									highlightStyle: "normal",
									isForward: !0,
									key: a,
									language: i,
									tokens: [d]
								})
							}
							))))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(3351))
				},
				[ce.Sm.TypeCompleteTable]: {
					Container: gr,
					Content: $n,
					Header: zn
				},
				[ce.Sm.WriteComprehension]: {
					Container: gr,
					Content: ({ challenge: { passage: e, passageTokens: t, question: a, questionTokens: n }, challengeState: { guess: r }, disabled: l, isDesktop: i, learningLanguage: o, onChange: c }) => {
						(0,
							v.L)(["writing", "reading"]);
						const d = s.createElement("div", {
							className: Kn.prompt,
							dir: (0,
								ie.Ux)(o)
						}, s.createElement(Vt.Z, {
							highlightStyle: "normal",
							isForward: !0,
							language: o,
							tokens: null != t ? t : [{
								value: e
							}]
						}));
						return s.createElement("div", {
							className: Kn.wrap
						}, s.createElement("div", {
							className: Kn.prompt
						}, d), s.createElement("div", null, a ? s.createElement("div", {
							className: Kn.question,
							dir: (0,
								ie.Ux)(o)
						}, s.createElement(Vt.Z, {
							highlightStyle: "normal",
							isForward: !0,
							language: o,
							tokens: null != n ? n : [{
								value: a
							}]
						})) : null, s.createElement("div", {
							className: Kn.answer
						}, s.createElement(na, {
							autoFocus: i,
							disabled: l,
							inputLanguage: o,
							learningLanguage: o,
							onChange: ({ }, e) => {
								sa.Z.start("challenge_typing"),
									c(e)
							}
							,
							value: null != r ? r : ""
						}))))
					}
					,
					Header: ({ }) => s.createElement("span", null, (0,
						ee._i)(24620))
				}
			}
			, Er = ({ index: e }) => {
				const t = (0,
					W.tX)()
					, a = (0,
						W.Fx)((t => (0,
							f.is)(t).challenges[e]))
					, n = (0,
						W.Fx)((t => t.player.challengeStates[e]))
					, r = (0,
						W.Fx)((t => void 0 !== t.player.recycledMistakeIndexToOriginalMistakeIndex[e]))
					, i = (0,
						W.Fx)(f.Rv)
					, o = (0,
						W.Fx)(f.$4)
					, c = (0,
						W.Fx)(f.gl)
					, d = (0,
						W.Fx)((e => e.player.status === St.c.Guessing || e.player.status === St.c.Showing))
					, u = (0,
						W.Fx)((e => e.player.status === St.c.SpeakRetryBlaming))
					, m = (0,
						W.Fx)((e => e.player.status === St.c.ChessRetryBlaming))
					, p = (0,
						W.Fx)((e => e.player.status === St.c.Sliding))
					, g = (0,
						W.Fx)(f.M3)
					, h = (0,
						W.Fx)((e => e.player.sessionParams.isFinalLevel))
					, v = (0,
						W.Fx)((e => e.player.session.type))
					, _ = (0,
						W.Fx)((e => (0,
							He.eK)({
								browserSettings: e.browserSettings,
								challenge: a,
								isDesktop: o,
								isGrammar: c,
								learningLanguage: g,
								session: e.player.session
							})), l.Xy)
					, E = (0,
						W.Fx)((t => e !== t.player.currentIndex || !d && !u && !m && !p));
				s.useEffect((() => {
					d && t({
						timestamp: Date.now(),
						type: "CHALLENGE_STARTED"
					})
				}
				), [d]);
				const { Container: y, Content: b, Header: S } = (e => {
					if (e.type === ce.Sm.MathChallengeBlob) {
						const t = "selectOne" === e.challengeBlob.layout && "headband" in e.challengeBlob && !!e.challengeBlob.headband;
						return {
							Container: (() => {
								switch (e.challengeBlob.layout) {
									case "selectOne":
										return t ? fr : "web" === e.challengeBlob.shirt.type || "table" === e.challengeBlob.shirt.type ? ur : dr;
									case "selectAll":
									case "typeFill":
										return "web" === e.challengeBlob.shirt.type || "table" === e.challengeBlob.shirt.type ? ur : dr;
									case "dynamicShirtPantsInteractive":
									case "shirtPantsInteractive":
									case "match":
									case "multiStep":
									case "onesie":
									case "tutor":
										return mr;
									default:
										return dr
								}
							}
							)(),
							Content: ir.v,
							Header: ir.N
						}
					}
					if (e.type === ce.Sm.RadioBinary || e.type === ce.Sm.RadioImageSelect || e.type === ce.Sm.RadioListenMatch || e.type === ce.Sm.RadioListenRecognize || e.type === ce.Sm.RadioSelect)
						throw Error(`DuoRadio challenge type ${e.type} should not use ChallengeContainer`);
					return _r[e.type]
				}
				)(a)
					, k = (() => {
						var e;
						if (void 0 !== (0,
							bt.ky)("indicatorType"))
							return (0,
								bt.ky)("indicatorType");
						if (h)
							return;
						if (r && a.type === ce.Sm.MathChallengeBlob)
							return ce.A.PastMistake;
						const t = a.type === ce.Sm.MathChallengeBlob && null !== (e = a.mathIndicatorType) && void 0 !== e ? e : a.indicatorType;
						return void 0 !== t && t !== ce.A.WeakWord ? t : t === ce.A.WeakWord && (e => [ce.Sm.Speak, ce.Sm.Translate].includes(e.type))(a) ? ce.A.WeakWord : (e => {
							var t;
							return !!(null === (t = e.newWords) || void 0 === t ? void 0 : t.length) && !![ce.Sm.Definition, ce.Sm.Select, ce.Sm.CharacterIntro, ce.Sm.CharacterSelect, ce.Sm.Translate, ce.Sm.SelectPronunciation].includes(e.type)
						}
						)(a) ? ce.A.NewWord : (e => e.type === ce.Sm.PatternTapComplete || e.type === ce.Sm.OrderTapComplete)(a) ? ce.A.NewPattern : void 0
					}
					)();
				return s.createElement(y, {
					challenge: a,
					challengeState: n,
					content: s.createElement(b, {
						challenge: a,
						challengeState: n,
						challengeToggleState: _,
						disabled: E,
						fromLanguage: i,
						isDesktop: o,
						learningLanguage: null != g ? g : "en",
						onChange: e => {
							var n, r, s, l;
							t({
								type: "CHALLENGE_GUESS_CHANGE",
								value: e
							}),
								([ce.Sm.CharacterMatch, ce.Sm.ExtendedListenMatch, ce.Sm.ExtendedMatch, ce.Sm.ListenMatch, ce.Sm.ListenSpeak, ce.Sm.Match, ce.Sm.Speak].includes(a.type) || a.type === ce.Sm.MathChallengeBlob && ("match" === a.challengeBlob.layout || "matchMadness" === a.challengeBlob.layout) || a.type === ce.Sm.MathChallengeBlob && "multiStep" === a.challengeBlob.layout && (null == e ? void 0 : e.currentStepIndex) >= a.challengeBlob.steps.length || (0,
									Bn.M4)().includes(a.type) && ("correct" === (null === (n = null == e ? void 0 : e.gradingState) || void 0 === n ? void 0 : n.type) || "incorrect" === (null === (r = null == e ? void 0 : e.gradingState) || void 0 === r ? void 0 : r.type) || "suboptimal" === (null === (s = null == e ? void 0 : e.gradingState) || void 0 === s ? void 0 : s.type)) || (0,
										cr.jU)(a) && "completed" === (null === (l = null == e ? void 0 : e.matchState) || void 0 === l ? void 0 : l.status)) && t((0,
											Re.YK)(!1, Date.now()))
						}
					}),
					header: s.createElement("div", {
						className: or.Z["indicator-and-header"]
					}, k ? s.createElement(ot, {
						sessionType: v,
						type: k
					}) : null, s.createElement("h1", {
						...(0,
							Jt._q)(ea.V.ChallengeHeader),
						className: or.Z.header
					}, s.createElement(S, {
						challenge: a,
						challengeToggleState: _,
						fromLanguage: i,
						learningLanguage: null != g ? g : "en"
					})))
				})
			}
			;
		var yr = a(22498)
			, br = a(55160);
		const Sr = {
			_lane: "_382wv",
			"grow-in": "_1Fcao",
			"grow-in-explosive": "_3BbV7",
			"lane-center": "_2B4y0 _382wv",
			"lane-left": "_19Av9 _382wv",
			"lane-right": "rPXey _382wv",
			popover: "_3k7HD",
			"popover-horizontal": "_2x9gZ _3k7HD",
			"popover-inner": "_1TmO0"
		}
			, kr = parseFloat(je.Z["margin-popover-stem"])
			, Cr = ({ config: { animation: e, bubblePointerLocation: t, bubblePointerSide: a, delay: n, horizontalDockPoint: l, maxWidth: i, shouldLimitToOneLine: o, verticalPosition: c }, containerHeight: d, containerWidth: u, text: m }) => {
				const p = s.useRef(null)
					, [g, h] = s.useState(0)
					, v = "left" === a || "right" === a
					, f = s.useCallback((() => {
						if (p.current) {
							const e = v ? p.current.clientHeight : p.current.clientWidth
								, a = t * e - kr;
							h(Math.min(Math.max(a, 10), e - 2 * kr - 10))
						}
					}
					), [t, v]);
				return s.useLayoutEffect((() => {
					f()
				}
				), [d, u, f]),
					s.createElement("div", {
						className: Sr[`lane-${l}`],
						style: {
							bottom: 100 * c + "%",
							maxWidth: i ? 100 * i + "%" : "calc(50% - 24px)"
						}
					}, s.createElement(br.Z, {
						className: r()(Sr["grow-in" + (e ? `-${e}` : "")], Sr["popover" + (v ? "-horizontal" : "")]),
						direction: "left" === a ? ee.lw ? "left" : "right" : "right" === a ? ee.lw ? "right" : "left" : "up",
						innerClassName: Sr["popover-inner"],
						manualPositioning: !0,
						ref: p,
						stemContainerStyle: {
							left: v ? void 0 : g,
							top: v ? g : void 0,
							transform: v ? "translateY(-50%) rotate(-90deg)" : "translateX(-50%) rotate(180deg)"
						},
						style: {
							animationDelay: n / 60 + "s",
							transformOrigin: "left" === a ? `left ${g}px` : "right" === a ? `right ${g}px` : `${g}px bottom`,
							whiteSpace: o ? "nowrap" : void 0
						},
						zIndex: 1
					}, m))
			}
			;
		var xr = a(75744);
		var Tr = a(18728);
		const wr = ({ isPlaying: e, template: { animation: { left: t, loopingPosition: a, right: n, url: r }, message: l, secondary: i } }) => {
			const o = (0,
				W.Fx)((e => e.ui.viewportHeight))
				, c = (0,
					W.Fx)((e => e.ui.viewportWidth))
				, d = s.useRef(null)
				, [u, m] = s.useState(!1)
				, [p, g] = s.useState(0)
				, [h, v] = s.useState(0)
				, f = s.useCallback((() => {
					if (d.current) {
						const e = d.current.getBoundingClientRect()
							, t = Math.min(e.width / 938, e.height / 1223);
						g(1223 * t),
							v(938 * t)
					}
				}
				), []);
			s.useLayoutEffect((() => {
				f()
			}
			), [o, c]),
				s.useEffect((() => {
					yr.Z.preload()
				}
				), []);
			const _ = (0,
				Tr.lQ)(xr.i, r);
			return s.createElement("div", {
				className: "flbyJ",
				ref: d,
				style: {
					"--lottie-height": `${p}px`,
					"--lottie-width": `${h}px`
				}
			}, _ ? s.createElement(s.Suspense, {
				fallback: null
			}, s.createElement(yr.Z, {
				animationData: _,
				className: "_1Oj8V",
				isPlaying: e,
				loop: void 0 !== a,
				loopSegment: a ? [_.ip + a, _.op] : void 0,
				onDOMLoaded: () => m(!0),
				onDestroy: () => m(!1)
			})) : null, s.createElement("div", {
				className: "_1uL-J"
			}, u && e ? s.createElement(s.Fragment, null, s.createElement(Cr, {
				config: t,
				containerHeight: p,
				containerWidth: h,
				text: l
			}), n && i ? s.createElement(Cr, {
				config: n,
				containerHeight: p,
				containerWidth: h,
				text: i
			}) : null) : null))
		}
			;
		var Nr = a(47748);
		var Rr = a(14817);
		const Ir = ({ buffer: e, isPlaying: t, onContinue: a, template: { animation: n, message: r } }) => {
			const l = s.useRef(null)
				, { RiveComponent: i, container: o, rive: c } = (0,
					Rr.useRive)({
						artboard: n.artBoardName,
						autoplay: !0,
						buffer: e,
						layout: new Rr.Layout({
							fit: Rr.Fit.FitHeight
						}),
						onLoadError: () => {
							(0,
								oe.vU)("Failed to load Rive animation", {
									data: {
										src: n.url
									}
								}),
								a()
						}
						,
						onStateChange: e => {
							Array.isArray(e.data) && e.data.includes(n.endedStateName) && a()
						}
						,
						stateMachines: n.stateMachineName
					});
			(0,
				Rr.useStateMachineInput)(c, n.stateMachineName, n.animationInputName, n.animation),
				(0,
					Rr.useStateMachineInput)(c, n.stateMachineName, n.subscriptionInputName, n.subscription);
			const d = (0,
				Rr.useStateMachineInput)(c, n.stateMachineName, n.playInputName);
			return s.useLayoutEffect((() => {
				if (t && d) {
					const e = new AbortController;
					return (e => {
						if (!d || !o || !l.current)
							return;
						d.fire();
						const t = l.current.animate({
							fontSize: (0,
								Pe.OM)(40 / 634 * o.getBoundingClientRect().height + "px"),
							maxWidth: (0,
								Pe.OM)(300 / 634 * o.getBoundingClientRect().height + "px")
						}, {
							duration: 0,
							fill: "forwards"
						});
						e.addEventListener("abort", (() => t.cancel()));
						const a = l.current.animate([{
							easing: "cubic-bezier(0.17, 0.17, 0, 1)",
							scale: .54
						}, {
							easing: "cubic-bezier(0.35, 0, 0.49, 1)",
							offset: 167 / 317,
							scale: 1.02
						}, {
							easing: "cubic-bezier(0.31, 0, 0.55, 1)",
							offset: 234 / 317,
							scale: .97
						}, {
							scale: 1
						}], {
							delay: 317,
							duration: 317,
							fill: "both"
						});
						e.addEventListener("abort", (() => a.cancel()));
						const n = l.current.animate([{
							transform: "none"
						}, {
							transform: "translateY(-272px)"
						}], {
							delay: 817,
							duration: 267,
							easing: "cubic-bezier(0.9, 0, 0.91, 0.68)",
							fill: "both"
						});
						e.addEventListener("abort", (() => n.cancel()));
						const r = l.current.animate([{
							easing: "step-end",
							opacity: 0
						}, {
							easing: "step-end",
							offset: 317 / 1083,
							opacity: 1
						}, {
							opacity: 0
						}], {
							duration: 1083,
							fill: "both"
						});
						e.addEventListener("abort", (() => r.cancel()))
					}
					)(e.signal),
						() => {
							e.abort()
						}
				}
			}
			), [t, d]),
				s.createElement("div", {
					className: "lhIpf"
				}, s.createElement(i, null), s.createElement("div", {
					className: "_2cZ22"
				}, s.createElement("div", {
					className: "_1xB7m",
					ref: l
				}, r)))
		}
			, Lr = e => {
				const t = (0,
					Tr.lQ)(Nr.k, e.template.animation.url);
				return t ? s.createElement(Ir, {
					...e,
					buffer: t
				}) : null
			}
			;
		var Pr = a(57104)
			, Fr = a(36798);
		const Ar = a.p + "images/icons/aa7a5f26c5872f1459c2a09320e48157.svg"
			, Zr = a.p + "images/icons/2d08188cf2b8d5ac095c2d1c7e7cad27.svg"
			, Dr = "_3vrj5 f7WE2 _3rat3"
			, Mr = "_3TkSu"
			, Or = ({ prompt: e }) => s.createElement("span", {
				className: Mr
			}, e)
			, Hr = e => {
				const { challenge: { audioText: t, audioUrl: a, isTrue: n, prompt: l }, onRadioExerciseGrading: i, learningLanguage: o, onChange: c } = e;
				(0,
					v.L)(["listening"]);
				const [d, u] = s.useState(!1)
					, [m, p] = s.useState(!1)
					, g = e => {
						const t = s.createElement("div", {
							className: "PZbwQ"
						}, s.createElement(Fr.Z, {
							className: r()("_1JEsl", {
								FEw6G: m && n !== e
							}, {
								Y_2Ek: d && n === e
							}),
							guaranteedSafeSrc: e ? Zr : Ar
						}))
							, a = e ? 0 : 1;
						return s.createElement(Nt.Z, {
							autoFocus: !1,
							correct: d && n === e,
							disabled: m && n !== e || d,
							icon: t,
							incorrect: m && n !== e,
							index: a,
							key: a,
							language: o,
							selected: !1
						})
					}
					, h = s.useRef(null)
					, f = () => {
						var e;
						null === (e = h.current) || void 0 === e || e.animate(),
							(0,
								Le.GN)(a),
							(0,
								V.track)("duo_radio_waveform_click", {
									item_type: "BinaryComprehension"
								})
					}
					;
				return s.createElement("div", null, s.createElement(Or, {
					prompt: l
				}), s.createElement("div", {
					className: Dr
				}, a ? s.createElement("div", {
					className: "kDVYL",
					onClick: f
				}, m && t ? s.createElement(s.Fragment, null, s.createElement(_n.Z, {
					className: "_37KyI",
					color: "macaw",
					ref: h,
					type: "small"
				}), s.createElement("div", {
					className: "x7dzf"
				}, t)) : s.createElement(va.ZP, {
					color: "macaw",
					ref: h,
					waveformNum: 4
				})) : null, s.createElement(Rt.Z, {
					onChange: e => {
						c(0 === e),
							0 === e && n || 1 === e && !n ? (u(!0),
								i(!0)) : (p(!0),
									i(!1),
									t && f())
					}
					,
					type: "row-radio",
					value: void 0
				}, g(!0), g(!1))))
			}
			, Br = () => s.createElement("span", {
				className: "_2nESm"
			}, (0,
				ee._i)(48561))
			, Ur = e => {
				const { challenge: { audioText: t, audioUrl: a, choices: n, correctIndex: r }, onRadioExerciseGrading: l, learningLanguage: i } = e;
				(0,
					v.L)(["listening"]);
				const [o, c] = s.useState(!1)
					, [d, u] = s.useState(!1)
					, m = s.useRef(null)
					, p = () => {
						var e;
						null === (e = m.current) || void 0 === e || e.animate(),
							(0,
								Le.GN)(a),
							(0,
								V.track)("duo_radio_waveform_click", {
									item_type: "ImageSelect"
								})
					}
					;
				return s.createElement("div", null, s.createElement(Br, null), s.createElement("div", {
					className: "_2uOQN f7WE2 _3rat3"
				}, s.createElement("div", {
					className: "_2lUAL",
					onClick: p
				}, d && t ? s.createElement(s.Fragment, null, s.createElement(_n.Z, {
					className: "_2150N",
					color: "macaw",
					ref: m,
					type: "small"
				}), s.createElement("div", {
					className: "_2DrNM"
				}, t)) : s.createElement(va.ZP, {
					color: "macaw",
					ref: m,
					waveformNum: 4
				})), s.createElement(Rt.Z, {
					onChange: e => {
						e === r ? (c(!0),
							l(!0)) : (u(!0),
								l(!1),
								t && p())
					}
					,
					type: "row-radio",
					value: void 0
				}, n.map(((e, t) => ((e, t) => {
					const a = s.createElement("div", {
						className: "_3Fjzr"
					}, s.createElement("img", {
						className: d && t !== r ? "O83b7 _1wHA4" : "_1wHA4",
						src: e
					}));
					return s.createElement(Nt.Z, {
						autoFocus: !1,
						correct: o && t === r,
						disabled: o || d && t !== r,
						icon: a,
						incorrect: d && t !== r,
						index: t,
						key: t,
						language: i,
						selected: !1
					})
				}
				)(e, t))))))
			}
			, Gr = () => s.createElement("span", {
				className: "_1dYqy"
			}, (0,
				ee._i)(14245))
			, Wr = e => s.createElement("div", null, s.createElement(Gr, null), s.createElement("div", {
				className: "_1T7et f7WE2 _3rat3"
			}, s.createElement(rn, {
				...e
			})))
			, Vr = ({ numCorrectIndices: e }) => s.createElement("span", {
				className: "_2hL0K"
			}, (0,
				ee._i)(48644, {
					n: e,
					num: e
				}))
			, zr = e => {
				const { challenge: { correctIndices: t, choices: a, audioUrl: n }, onRadioExerciseGrading: r, learningLanguage: l } = e;
				(0,
					v.L)(["listening"]);
				const [i, o] = s.useState([])
					, [c, d] = s.useState(!1)
					, u = s.useRef(null);
				return s.createElement("div", null, s.createElement(Vr, {
					numCorrectIndices: t.length
				}), s.createElement("div", {
					className: "_18oYA"
				}, s.createElement("div", {
					className: "_2mnnx",
					onClick: () => {
						var e;
						null === (e = u.current) || void 0 === e || e.animate(),
							(0,
								Le.GN)(n),
							(0,
								V.track)("duo_radio_waveform_click", {
									item_type: "ListenRecognize"
								})
					}
				}, s.createElement(va.ZP, {
					color: "macaw",
					ref: u,
					waveformNum: 4
				})), s.createElement(at.Z, {
					choices: a,
					correct: t.every((e => i.includes(e))),
					correctIndices: t,
					disabled: t.every((e => i.includes(e))),
					language: l,
					onChange: e => {
						o((a => {
							const n = [...a, e];
							return t.every((e => n.includes(e))) ? r(!0) : c || t.includes(e) || (r(!1),
								d(!0)),
								n
						}
						))
					}
					,
					overflowBehavior: {
						shouldHandleOverflow: !1
					},
					selectedIndices: i,
					type: "row-three-columns-radio",
					value: void 0
				})))
			}
			, $r = ({ prompt: e }) => s.createElement("span", {
				className: Mr
			}, e)
			, Kr = e => {
				const { challenge: { choices: t, correctIndex: a, prompt: n }, challengeState: { guess: r }, onRadioExerciseGrading: l, learningLanguage: i, onChange: o } = e
					, [c, d] = s.useState([])
					, [u, m] = s.useState(!1);
				return s.createElement(s.Fragment, null, s.createElement($r, {
					prompt: n
				}), s.createElement("div", {
					className: Dr
				}, s.createElement(at.Z, {
					choiceStyle: "wide",
					choices: t,
					correct: c.includes(a),
					correctIndex: a,
					disabled: !1,
					language: i,
					onChange: e => {
						o(e),
							e === a ? l(!0) : u || (l(!1),
								m(!0)),
							d((t => [...t, e]))
					}
					,
					overflowBehavior: {
						shouldHandleOverflow: !1
					},
					selectedIndices: c,
					type: "column-radio",
					value: r
				})))
			}
			, jr = e => {
				const t = (0,
					W.tX)()
					, a = (0,
						W.Fx)((t => t.player.challengeStates[e.index]))
					, n = (0,
						W.Fx)(f.Rv)
					, r = (0,
						W.Fx)(f.$4)
					, l = (0,
						W.Fx)((e => e.player.status === St.c.Guessing || e.player.status === St.c.Showing))
					, i = (0,
						W.Fx)(f.iH);
				if (void 0 === i)
					throw Error("DuoRadioExerciseContainer must have a learningLanguage");
				s.useEffect((() => {
					l && t({
						timestamp: Date.now(),
						type: "CHALLENGE_STARTED"
					})
				}
				), [l]);
				const o = {
					[ce.Sm.RadioBinary]: {
						Challenge: Hr
					},
					[ce.Sm.RadioImageSelect]: {
						Challenge: Ur
					},
					[ce.Sm.RadioListenMatch]: {
						Challenge: Wr
					},
					[ce.Sm.RadioListenRecognize]: {
						Challenge: zr
					},
					[ce.Sm.RadioSelect]: {
						Challenge: Kr
					}
				}
					, { Challenge: c } = o[e.challenge.type];
				return s.createElement("div", {
					className: "_1KW2f"
				}, s.createElement(c, {
					challenge: e.challenge,
					challengeState: a,
					fromLanguage: n,
					isDesktop: r,
					learningLanguage: i,
					onChange: e => {
						t({
							type: "CHALLENGE_GUESS_CHANGE",
							value: e
						})
					}
					,
					onRadioExerciseGrading: e.onRadioExerciseGrading
				}))
			}
			, qr = a.p + "images/duoRadio/controls/1197f5d009de6723df45564439c8181d.svg"
			, Xr = a.p + "images/duoRadio/controls/2c01cf6334bfd9a5611aa4b2d74cbddc.svg"
			, Yr = a.p + "images/duoRadio/controls/c913ee69586883dca335a0a5bd2466b0.svg"
			, Qr = a.p + "images/duoRadio/controls/a276b9a69cbe3d54a457d89354e774e3.svg"
			, Jr = a.p + "images/duoRadio/controls/5ed3442ba85df9e379b37a8ea0eb7c58.svg"
			, es = a.p + "images/duoRadio/controls/71b256e7b3b9137d7b20e2ebf23b06d0.svg"
			, ts = a.p + "images/duoRadio/controls/04f20658312d384e061b754e43195b65.svg"
			, as = {
				"rive-container": "_3eaYm",
				"controls-container": "_2LQjt",
				"controls-hidden": "_2cjkY",
				"control-button": "_3GWMC",
				"control-button-disabled": "_3mDWI _3GWMC"
			};
		var ns = a(97106);
		const rs = (0,
			jn.ZP)((() => a.e(6799).then(a.bind(a, 93213))))
			, ss = e => e.type === ce.Sm.RadioListenMatch || e.type === ce.Sm.RadioListenRecognize
			, ls = ({ startIndex: e, session: t }) => {
				var a;
				const n = (0,
					W.tX)();
				(0,
					v.L)(["listening"]);
				const l = (() => {
					switch (!0) {
						case t.titleCardName.includes("Bea"):
							return 0;
						case t.titleCardName.toLowerCase().includes("lucy"):
							return 1;
						case t.titleCardName.includes("Zari"):
							return 2;
						case t.titleCardName.toLowerCase().includes("vikram"):
							return 3;
						case t.titleCardName.toLowerCase().includes("lily"):
							return 4;
						default:
							throw Error(`Invalid title card name: ${t.titleCardName}`)
					}
				}
				)()
					, i = {
						artBoardName: "Stage",
						avatarNum: t.avatarNum,
						characterNum: l,
						introLengthMillis: t.introLengthMillis,
						outroPoseMillis: t.outroPoseShowMillis,
						startTime: t.startTime,
						stateMachineName: "InLesson",
						titleCardName: t.titleCardName,
						titleCardShowMillis: t.titleCardShowMillis
					}
					, o = (0,
						ns.g3)()
					, c = (0,
						W.Fx)(f.$4)
					, d = null !== (a = (0,
						W.Fx)(f.lA).sessionParams.duoRadioEpisodeId) && void 0 !== a ? a : ""
					, u = (0,
						W.Fx)(en.eE)
					, m = (0,
						W.Fx)(f.np)
					, [p, g] = s.useState(e)
					, [h, _] = s.useState(0)
					, [E, y] = s.useState(!0)
					, [, b] = s.useState(!1)
					, [S, k] = s.useState(!1)
					, [C, x] = s.useState()
					, [T, w] = s.useState((() => new Array(t.challenges.length).fill(!0)))
					, N = t.elements.filter((e => "challenge" === e.type));
				s.useEffect((() => {
					sa.Z.start("character_animation_play")
				}
				), []),
					s.useEffect((() => {
						S && sa.Z.finish("character_animation_play")
					}
					), [S]);
				const [R, I] = s.useState(!1)
					, L = s.useRef();
				s.useEffect((() => {
					L.current = (0,
						Le.a1)(t.elements[p].audioUrl, {
							requestedAt: window.performance.now(),
							text: ""
						}, {
							eventListeners: [["ended", () => P()], ["pause", () => y(!0)], ["play", () => y(!1)]]
						}),
						(0,
							V.track)("duo_radio_audio_play", {
								episode_id: d,
								url: t.elements[p].audioUrl
							}),
						I(!0),
						"challenge" === t.elements[p].type && _(t.elements.slice(0, p).filter((e => "challenge" === e.type)).length)
				}
				), [p]),
					s.useEffect((() => () => {
						L.current && (L.current.paused = !0)
					}
					), []);
				const P = () => {
					if (p === t.elements.length - 1) {
						const e = N.length
							, a = t.challenges.filter(ss).length
							, r = t.challenges.filter(((e, t) => ss(e) && T[t])).length
							, s = T.filter((e => e)).length;
						let l = 0;
						const i = T.reduce(((e, t) => (l = t ? l + 1 : 0,
							Math.max(e, l))), 0);
						return n({
							duoRadioChallengeStats: {
								maxCorrectStreak: i,
								numChallengesCompleted: e,
								numChallengesCorrect: s,
								numListenChallengesCompleted: a,
								numListenChallengesCorrect: r
							},
							maxInLessonCorrectStreak: i,
							session: t,
							type: "UPDATE_DUO_RADIO_SESSION"
						}),
							n({
								hasXpBoost: o,
								timestamp: (0,
									Xe.Zo)(),
								type: "END_SESSION",
								user: m
							}),
							void n((0,
								Re.a)())
					}
					"challenge" !== t.elements[p].type && g(p + 1)
				}
					, [F, A] = s.useState(0)
					, [Z, D] = s.useState(!1);
				s.useEffect((() => {
					if (!Z)
						return;
					const e = setInterval((() => {
						var e, t;
						(null === (e = L.current) || void 0 === e ? void 0 : e.currentTime) && F <= (null === (t = L.current) || void 0 === t ? void 0 : t.currentTime) && D(!1)
					}
					), 1e3);
					return () => {
						clearInterval(e)
					}
				}
				), [Z]);
				const M = () => {
					g(p + 1),
						x(void 0)
				}
					;
				return s.createElement(s.Fragment, null, s.createElement("div", {
					className: as["rive-container"]
				}, s.createElement(s.Suspense, {
					fallback: null
				}, s.createElement(rs, {
					animation: i,
					audioEl: L.current,
					correct: C,
					currentIndex: p,
					element: t.elements[p],
					isDesktop: c,
					maxIndex: t.elements.length - 1,
					onLoadError: () => b(!0),
					onPause: () => k(!1),
					onPlay: () => k(!0),
					ttsAnnotations: t.ttsAnnotations
				}))), s.createElement("div", {
					className: r()(as["controls-container"], {
						[as["controls-hidden"]]: 0 === p || p === t.elements.length - 1
					})
				}, s.createElement(Pr.Z, {
					className: as["control-button"],
					onClick: () => {
						L.current && ((0,
							V.track)("duo_radio_rewind", {
								episode_id: d,
								is_in_exercise: "challenge" === t.elements[p].type
							}),
							A(Math.max(F, L.current.currentTime)),
							D(!0),
							L.current.currentTime = Math.max(L.current.currentTime - 5, 0))
					}
					,
					state: R ? "enabled" : "disabled",
					variant: "link"
				}, s.createElement("img", {
					src: R ? ts : es
				})), s.createElement(Pr.Z, {
					className: as["control-button"],
					onClick: () => {
						L.current && (L.current.paused || (0,
							V.track)("duo_radio_pause", {
								episode_id: d
							}),
							L.current.paused = !L.current.paused)
					}
					,
					state: R ? "enabled" : "disabled",
					variant: "link"
				}, s.createElement("img", {
					src: R ? E ? Jr : Qr : Yr
				})), s.createElement(Pr.Z, {
					className: as[Z ? "control-button" : "control-button-disabled"],
					onClick: () => {
						L.current && ((0,
							V.track)("duo_radio_fast_forward", {
								episode_id: d
							}),
							L.current.currentTime = Math.min(L.current.currentTime + 5, F))
					}
					,
					state: R && Z ? "enabled" : "disabled",
					variant: "link"
				}, s.createElement("img", {
					src: R && Z ? Xr : qr
				}))), "challenge" === t.elements[p].type ? s.createElement(jr, {
					challenge: t.challenges[h],
					index: h,
					onRadioExerciseGrading: e => {
						e ? (setTimeout(M, 1e3),
							(0,
								Le.GN)(Le.Tc.CORRECT, {
									overlay: !0
								}),
							x(!0),
							sa.Z.start("challenge_continue"),
							n({
								gradingResult: {
									correct: !0,
									guess: ""
								},
								skipped: !1,
								strengthFactor: 1,
								strengthTarget: 1,
								timeTaken: void 0,
								type: "UPDATE_GRADED_CHALLENGE"
							}),
							n((0,
								Re.Z3)())) : (u && n((0,
									Ja.$)("session_mid")),
									(0,
										Le.GN)(Le.Tc.INCORRECT, {
											eventListeners: [["ended", () => {
												x(void 0)
											}
											]],
											overlay: !0
										}),
									x(!1),
									w((t => {
										const a = [...t];
										return a[h] = e,
											a
									}
									)))
					}
				}) : null)
			}
			;
		var is = a(13992)
			, os = a(31542)
			, cs = a(2580)
			, ds = a(93115)
			, us = a(22526)
			, ms = a(11461)
			, ps = a(24440);
		const gs = "_3d-Si _3X5b9";
		var hs = a(23275);
		const vs = ({ onQuitButtonClick: e, onSessionStart: t }) => {
			var a;
			const n = (0,
				W.tX)()
				, { inLessonTip: r, inLessonTipShowing: l, status: i } = (0,
					W.Fx)(f.lA)
				, o = (0,
					W.Fx)(f.lA)
				, c = (0,
					W.Fx)(f.is)
				, d = (0,
					W.Fx)(f.oe)
				, u = (0,
					W.Fx)(f.iH)
				, m = "dark" === (0,
					ge.Fg)()
				, p = c.skillId ? d[c.skillId] : void 0
				, g = null === (a = o.levelData) || void 0 === a ? void 0 : a.level
				, h = (0,
					hs.G7)(g)
				, v = s.useRef(null)
				, _ = [St.c.AlphabetTipSplash, St.c.GrammarSkillSplash]
				, E = (e, t = {}) => {
					t.skill_id = c.skillId,
						t.explanation_title = null == r ? void 0 : r.title,
						(0,
							V.track)(e, t)
				}
				, y = () => {
					var t, a;
					(0,
						V.track)("explanation_close", {
							did_content_load: !0,
							explanation_title: null !== (t = null == r ? void 0 : r.title) && void 0 !== t ? t : "",
							is_grammar_skill: "grammar" === (null == g ? void 0 : g.subtype),
							is_scrollable: !1,
							skill_id: null !== (a = null == p ? void 0 : p.id) && void 0 !== a ? a : ""
						}),
						_.includes(i) ? e() : n({
							shouldShow: !1,
							type: "TOGGLE_IN_LESSON_TIP"
						})
				}
				;
			return s.useEffect((() => {
				if (l) {
					const e = e => {
						["Escape"].includes(e.key) && y()
					}
						;
					return vt.U.addListener(document, "keydown", e),
						() => {
							vt.U.removeListener(document, "keydown", e)
						}
				}
			}
			), [!0 === l]),
				s.useEffect((() => {
					var e;
					r && l && (n({
						explanationSkillId: r.skillID,
						timestamp: Date.now(),
						type: "EXPLANATION_SHOWN"
					}),
						(0,
							V.track)("explanation_open", {
								current_level: g ? h : null == p ? void 0 : p.finishedLevels,
								from: _.includes(o.status) ? "prelesson_ad" : "in_lesson",
								is_grammar_skill: "grammar" === (null == g ? void 0 : g.subtype),
								skill_id: null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : ""
							}))
				}
				), [r, l]),
				(0,
					os.createPortal)(s.createElement(cs.ZP, {
						disabled: !l
					}, s.createElement(ds.Z, {
						className: "_3oxVV",
						isVisible: !0 === l
					}, r && void 0 !== u ? s.createElement("div", {
						className: "_11_f- _29gfw"
					}, s.createElement("div", {
						className: "_2KmVP"
					}, s.createElement("div", {
						className: "_1_LQG _3v4ux _1zcW8"
					}, s.createElement(q.Z, {
						className: gs,
						...(0,
							Jt._q)(ea.V.QuitButton),
						onClick: y
					}, s.createElement("img", {
						className: gs,
						src: m ? ms : ps
					})), s.createElement("h1", {
						className: "_2Acxf"
					}, r.title))), s.createElement("div", {
						className: "_3xKjL RMEuZ _1GVfY",
						ref: v
					}, s.createElement(us.a, {
						container: v,
						disabled: !1,
						items: (0,
							Te.qj)(r.elements, {
								deep: !0
							}),
						learningLanguage: u,
						onAudioTap: () => E("explanation_audio_tap"),
						onHintShown: e => E("explanation_hint_shown", {
							hint: e
						})
					})), _.includes(i) ? s.createElement("div", {
						className: "_2WoSG _3rB4d _1VTif _1QQhE"
					}, s.createElement("div", {
						className: "_2PdXd U8jH3 jHbiF"
					}, s.createElement("div", {
						className: "_3pTpb MYehf"
					}, s.createElement(q.Z, {
						color: "owl",
						onClick: () => {
							n({
								shouldShow: !1,
								type: "TOGGLE_IN_LESSON_TIP"
							}),
								(0,
									V.track)("explanation_start_session_tap", {
										from: "prelesson_ad",
										is_grammar_skill: i === St.c.GrammarSkillSplash
									}),
								t()
						}
						,
						variant: "solid"
					}, (0,
						ee._i)(26))))) : null) : null)), document.querySelector("#overlays"))
		}
			;
		var fs = a(3291)
			, _s = a(45570);
		var Es = a(99568);
		const ys = ({ markAsContinue: e, modalOptions: t, onDismiss: a }) => {
			const n = s.useCallback((() => {
				(0,
					Es._R)(t.trackingProps),
					e(),
					a(),
					t.onContinue()
			}
			), [e, a, t]);
			return s.useEffect((() => {
				const e = e => {
					"Enter" === e.key && n()
				}
					;
				return document.addEventListener("keydown", e),
					() => document.removeEventListener("keydown", e)
			}
			), [n]),
				s.createElement("div", {
					className: "_2kpRW"
				}, s.createElement("div", {
					className: "Rnbjs"
				}, s.createElement(fs.Z, {
					allowWrap: !0,
					math: t.challengeInstruction.value
				})), s.createElement("div", {
					className: "web" === t.shirt.type ? "_2Oh3R" : "_2oni8"
				}, s.createElement(_s.F, {
					element: t.shirt
				})), t.shirtPantInteractiveDiagram ? s.createElement("div", {
					className: "_2pYo4"
				}, s.createElement(_s.F, {
					element: t.shirtPantInteractiveDiagram
				})) : null, s.createElement("div", {
					className: "EUt1a"
				}, t.shirtPantInteractiveDiagram ? null : s.createElement("div", {
					className: "fEBTP"
				}, s.createElement(fs.Z, {
					allowWrap: !0,
					math: t.feedback.correctBody
				})), s.createElement("div", {
					className: "s90jC"
				}, t.feedback.correctExplanation.map((e => s.createElement("div", {
					key: e
				}, s.createElement(fs.Z, {
					allowWrap: !0,
					math: e
				})))))), s.createElement(q.Z, {
					color: "macaw",
					onClick: n,
					variant: "solid"
				}, (0,
					ee._i)(2137)))
		}
			, bs = () => {
				const e = (0,
					W.tX)()
					, t = s.useRef(!1);
				return s.createElement(h.Z, {
					animation: "immediate",
					className: "_1E5BR",
					modalName: G.t.MathGradingFeedback,
					onDismiss: ({ modalOptions: a }) => {
						t.current || (0,
							Es.Af)(a.trackingProps),
							t.current = !1,
							e({
								options: void 0,
								type: "TOGGLE_MODAL"
							})
					}
				}, (e => s.createElement(ys, {
					...e,
					markAsContinue: () => {
						t.current = !0
					}
				})))
			}
			;
		var Ss = a(24204);
		const ks = a.p + "rive/mathCharacters/8eafa17152f13aa4ab22c2d015853554.riv";
		var Cs = a(30480);
		const xs = "character_statemachine"
			, Ts = ({ animationState: e, audioElRef: t, encodedVisemesRef: a, currentTtsUrlRef: n }) => {
				const r = (0,
					ke.Z)()
					, { RiveComponent: l, rive: i } = (0,
						Rr.useRive)({
							artboard: "character",
							autoplay: !0,
							src: ks,
							stateMachines: xs
						})
					, o = s.useRef();
				return s.useLayoutEffect((() => {
					if (null === i)
						return;
					const e = i.stateMachineInputs(xs);
					(0,
						Rr.setBooleanInput)(e, "is_intro", !1),
						(0,
							Rr.triggerInput)(e, "no_intro_trig"),
						(0,
							Rr.setBooleanInput)(e, "eddy_up_bool", !0),
						(0,
							Rr.triggerInput)(e, "idle_trig"),
						o.current = e.filter((e => e.type === Rr.StateMachineInputType.Number && /^\d+$/.test(e.name)))
				}
				), [i]),
					s.useLayoutEffect((() => {
						null !== i && ((e, t) => {
							switch (t) {
								case "idle":
									(0,
										Rr.triggerInput)(e, "idle_trig");
									break;
								case "thinking":
									(0,
										Rr.setNumberInput)(e, "response_num", 28),
										(0,
											Rr.triggerInput)(e, "response_trig");
									break;
								case "attentionToWhiteboard":
									(0,
										Rr.setNumberInput)(e, "response_num", 320),
										(0,
											Rr.triggerInput)(e, "response_trig")
							}
						}
						)(i.stateMachineInputs(xs), e)
					}
					), [i, e]),
					(0,
						Cs.X)({
							audioElRef: t,
							currentTtsUrlRef: n,
							encodedVisemesRef: a,
							visemeInputsRef: o
						}),
					s.createElement("div", {
						className: "_1C54o"
					}, s.createElement("div", {
						className: "_3PeqS"
					}, r ? s.createElement("img", {
						className: "_1irpp",
						src: E
					}) : s.createElement("div", {
						className: "_1GIx_"
					}, s.createElement(l, null))), s.createElement("div", {
						className: "K610q"
					}))
			}
			, ws = ({ conceptualChips: e, onChipClick: t }) => 0 === e.length ? null : s.createElement("div", {
				className: "FT3tK"
			}, e.map((e => s.createElement(q.Z, {
				className: "_33cjy",
				key: e,
				onClick: () => t(e),
				variant: "stroke"
			}, s.createElement(fs.Z, {
				allowWrap: !0,
				math: e
			})))))
			, Ns = ({ instruction: e, rows: t }) => {
				const a = s.useRef(null)
					, n = s.useRef({})
					, [l, i] = s.useState(!1)
					, [o, c] = s.useState(!1)
					, d = (0,
						ke.Z)()
					, u = s.useCallback((() => {
						const e = a.current;
						null !== e && window.requestAnimationFrame((() => {
							i(e.scrollTop > 0),
								c(e.scrollHeight > e.clientHeight)
						}
						))
					}
					), [])
					, p = (0,
						m.Z)(u)
					, g = s.useCallback((e => {
						a.current = e,
							p(e)
					}
					), [p]);
				return s.useEffect((() => {
					const e = a.current;
					if (null !== e)
						return u(),
							e.addEventListener("scroll", u, {
								passive: !0
							}),
							() => e.removeEventListener("scroll", u)
				}
				), [t, e, u]),
					s.useEffect((() => {
						const e = a.current
							, r = [...t].reverse().find((e => e.animate))
							, s = r ? n.current[r.id] : null;
						if (!e || !s)
							return;
						const l = e.getBoundingClientRect()
							, i = s.getBoundingClientRect()
							, o = i.top - l.top + e.scrollTop - (e.clientHeight - i.height) / 2;
						e.scrollTo({
							behavior: d ? "instant" : "smooth",
							top: Math.max(0, o)
						})
					}
					), [t, d]),
					0 === t.length && void 0 === e ? null : s.createElement(s.Fragment, null, void 0 === e ? null : s.createElement("div", {
						className: "_2ydMd"
					}, s.createElement(fs.Z, {
						allowWrap: !0,
						math: e
					})), void 0 === e ? null : s.createElement("hr", {
						className: r()("_1CX6f", {
							_3sOWO: !l
						})
					}), s.createElement("div", {
						className: "_16INg",
						ref: g
					}, t.length > 0 ? s.createElement("div", {
						className: "_2DAAk"
					}, t.map((e => s.createElement("div", {
						className: r()(e.animate ? "_3W-OC _1zrTs" : "_1zrTs", {
							_3HQ_Y: "web" === e.figure.type
						}),
						key: e.id,
						ref: t => {
							n.current[e.id] = t
						}
					}, s.createElement(_s.F, {
						allowWrap: !0,
						element: e.figure
					}))))) : null), s.createElement("div", {
						"aria-hidden": !0,
						className: r()("_3qS7z", {
							_2yeBm: o
						})
					}))
			}
			, Rs = e => void 0 === e ? [] : [...void 0 === e.nextStepLabel ? [] : [e.nextStepLabel], ...e.suggestions.map((e => e.chipLabel))]
			, Is = e => {
				var t;
				const a = e[0]
					, n = null == a ? void 0 : a.whiteboardContent
					, r = void 0 === n ? [] : [{
						animate: !1,
						figure: n,
						id: 0
					}];
				return {
					animationState: "idle",
					currentStepIndex: 0,
					currentTtsUrl: null == a ? void 0 : a.ttsUrl,
					currentTtsVisemes: null == a ? void 0 : a.ttsVisemes,
					nextRowId: r.length,
					speechLatex: null !== (t = null == a ? void 0 : a.characterDialogue) && void 0 !== t ? t : "",
					stepHistory: [],
					steps: e,
					suggestions: Rs(a),
					whiteboardRows: r
				}
			}
			, Ls = (e, t) => {
				switch (t.type) {
					case "INIT":
						return Is(t.steps);
					case "NEXT_STEP":
						{
							const t = e.currentStepIndex + 1;
							if (t >= e.steps.length)
								return e;
							const a = e.steps[t]
								, { whiteboardContent: n } = a
								, r = void 0 === n ? e.whiteboardRows : [...e.whiteboardRows, {
									animate: !0,
									figure: n,
									id: e.nextRowId
								}]
								, s = e.steps[e.currentStepIndex]
								, l = {
									animationState: "idle",
									currentStepIndex: e.currentStepIndex,
									currentTtsUrl: s.ttsUrl,
									currentTtsVisemes: s.ttsVisemes,
									nextRowId: e.nextRowId,
									speechLatex: s.characterDialogue,
									steps: e.steps,
									suggestions: Rs(s),
									whiteboardRows: e.whiteboardRows
								};
							return {
								...e,
								animationState: "attentionToWhiteboard",
								currentStepIndex: t,
								currentTtsUrl: a.ttsUrl,
								currentTtsVisemes: a.ttsVisemes,
								nextRowId: e.nextRowId + (r === e.whiteboardRows ? 0 : 1),
								speechLatex: a.characterDialogue,
								stepHistory: [...e.stepHistory, l],
								suggestions: Rs(a),
								whiteboardRows: r
							}
						}
					case "PREV_STEP":
						{
							const t = e.stepHistory[e.stepHistory.length - 1];
							return void 0 === t ? e : {
								...t,
								stepHistory: e.stepHistory.slice(0, -1)
							}
						}
					case "CHIP_CLICK":
						{
							const a = e.steps[e.currentStepIndex]
								, n = null == a ? void 0 : a.suggestions.find((e => e.chipLabel === t.chipLabel));
							return void 0 === n ? e : {
								...e,
								animationState: "thinking",
								currentTtsUrl: n.ttsUrl,
								currentTtsVisemes: n.ttsVisemes,
								speechLatex: n.characterDialogue,
								suggestions: e.suggestions.filter((e => e !== t.chipLabel))
							}
						}
					case "RESET_TO_STEP":
						{
							const t = e.steps[e.currentStepIndex];
							return void 0 === t ? e : {
								...e,
								animationState: "idle",
								currentTtsUrl: t.ttsUrl,
								currentTtsVisemes: t.ttsVisemes,
								speechLatex: t.characterDialogue,
								suggestions: Rs(t)
							}
						}
					default:
						return e
				}
			}
			;
		var Ps = a(17128);
		const Fs = a.p + "images/math/1118886eb16c0c3f09f2408404c9fe0d.svg"
			, As = a.p + "images/math/437d2301224229bef270e05a3de697a3.svg"
			, Zs = a.p + "images/math/da1ce98204e30ff2bfdea5ec8222a2d6.svg"
			, Ds = "_1w9p8";
		var Ms = a(57340);
		const Os = ({ mathSupportState: e, modalOptions: t }) => {
			const a = s.useRef(Date.now())
				, n = s.useRef(!1)
				, l = s.useRef(0)
				, i = s.useRef(0)
				, { challengeId: o } = t
				, { animationState: c, audioElRef: d, canGoBack: u, conceptualChips: m, currentTtsUrlRef: p, encodedVisemesRef: g, currentStepNumber: h, maxStepNumber: v, nextStepLabel: f, onChipClick: _, onNextStep: E, onPrevStep: y, presentationStyle: b, speechLatex: S, whiteboardRows: k } = e;
			l.current = h,
				i.current = v;
			const C = s.useCallback((() => {
				null === f && (n.current = !0,
					(0,
						V.track)("math_help_done_tap", {
							challenge_id: o,
							math_help_type: b,
							step_number: h,
							total_time: Date.now() - a.current
						})),
					E()
			}
			), [o, h, E, f, b]);
			s.useEffect((() => () => {
				n.current || (0,
					V.track)("math_help_dismiss", {
						challenge_id: o,
						math_help_type: b,
						max_step_number: i.current,
						step_number: l.current,
						total_time: Date.now() - a.current
					})
			}
			), [o, b]);
			const { instruction: x } = t
				, T = (0,
					ke.Z)()
				, w = m.length > 0
				, N = "dark" === (0,
					ge.Fg)()
				, R = s.useRef(m);
			w && (R.current = m);
			const I = s.useRef(null)
				, [L, P] = s.useState(0);
			s.useLayoutEffect((() => {
				P(0)
			}
			), [o]),
				s.useLayoutEffect((() => {
					if (!w)
						return void P(0);
					if (!I.current)
						return;
					const e = I.current.offsetHeight;
					P((t => Math.max(e, t)))
				}
				), [S, w]);
			const F = s.createElement("div", {
				className: "lite" === b ? "_9u1zg" : "_3cnth"
			}, s.createElement(Ts, {
				animationState: c,
				audioElRef: d,
				currentTtsUrlRef: p,
				encodedVisemesRef: g
			}), s.createElement(ca.Z, {
				alignment: "center",
				caretPosition: "left",
				className: "h5apj",
				size: "small"
			}, s.createElement(fs.Z, {
				allowWrap: !0,
				math: S,
				typewriter: {
					enabled: !T
				}
			})))
				, A = s.createElement("div", {
					className: r()("_2LSKk", {
						_23PfS: !w
					})
				}, s.createElement(ws, {
					conceptualChips: R.current,
					onChipClick: _
				}))
				, Z = s.createElement(q.Z, {
					autoFocus: !0,
					className: "_2vBAH",
					color: "macaw",
					onClick: C,
					variant: "solid"
				}, (0,
					Ms.l)(null != f ? f : "DONE"));
			return "lite" === b ? s.createElement("div", {
				className: "KO8W1",
				ref: I,
				style: {
					minHeight: L
				}
			}, s.createElement("div", {
				className: "_2ycJ0 _3GgOb"
			}, F, A, s.createElement("div", {
				className: Ds
			}, Z))) : s.createElement("div", {
				className: "_1dr8v"
			}, s.createElement("div", {
				className: "a8-fO"
			}, s.createElement(Ns, {
				instruction: null == x ? void 0 : x.value,
				rows: k
			})), s.createElement("div", {
				className: "_3GgOb"
			}, F, A, s.createElement("div", {
				className: Ds
			}, s.createElement(q.Z, {
				"aria-label": "Back",
				className: "_2cvf6",
				disabled: !u,
				onClick: y,
				variant: "stroke"
			}, s.createElement("img", {
				className: "txZNd",
				src: u ? Zs : N ? Fs : As
			})), Z)))
		}
			, Hs = () => {
				var e;
				const t = (0,
					W.tX)()
					, a = (0,
						W.Fx)((e => e.ui.modal))
					, n = (null == a ? void 0 : a.name) === G.t.MathSupport
					, [r, l] = s.useState();
				s.useEffect((() => {
					(null == a ? void 0 : a.name) === G.t.MathSupport && l(a)
				}
				), [a]);
				const i = (null == a ? void 0 : a.name) === G.t.MathSupport ? a : r
					, o = s.useCallback((() => {
						t({
							options: void 0,
							type: "TOGGLE_MODAL"
						})
					}
					), [t])
					, c = (({ supportCenterInfo: e, challengeId: t, isModalOpen: a, onClose: n }) => {
						var r;
						const l = (0,
							W.tX)()
							, i = s.useRef({
								info: void 0,
								steps: []
							})
							, [o, c] = s.useReducer(Ls, e, (e => (i.current = {
								info: e,
								steps: (0,
									Ps.Y)(e)
							},
								Is(i.current.steps))))
							, d = s.useRef(Date.now());
						s.useLayoutEffect((() => {
							i.current.info !== e && (i.current = {
								info: e,
								steps: (0,
									Ps.Y)(e)
							}),
								c({
									steps: i.current.steps,
									type: "INIT"
								}),
								d.current = Date.now()
						}
						), [t, e]);
						const u = s.useRef(a);
						s.useEffect((() => {
							const e = u.current;
							u.current = a,
								e && !a ? c({
									type: "RESET_TO_STEP"
								}) : !e && a && (d.current = Date.now())
						}
						), [a]);
						const m = s.useRef(null)
							, p = s.useRef(void 0)
							, g = s.useRef(null)
							, h = o.currentTtsUrl
							, v = o.speechLatex;
						s.useLayoutEffect((() => {
							p.current = o.currentTtsVisemes
						}
						), [o.currentTtsVisemes]),
							s.useEffect((() => {
								if (!h || !a)
									return void (0,
										Le.Ap)();
								(0,
									Le.Ap)();
								const e = (0,
									Le.a1)(h, {
										requestedAt: window.performance.now(),
										text: v
									});
								return e && (m.current = e,
									g.current = h),
									() => {
										(0,
											Le.Ap)()
									}
							}
							), [h, a, v]);
						const f = (0,
							Ps.K)(o.steps)
							, _ = s.useCallback((() => {
								const e = Date.now() - d.current;
								(0,
									V.track)("math_help_back_button_tap", {
										challenge_id: t,
										is_last_step: o.currentStepIndex >= o.steps.length - 1,
										math_help_type: f,
										max_step_number: o.steps.length,
										step_number: o.currentStepIndex + 1,
										step_time: e
									}),
									d.current = Date.now(),
									c({
										type: "PREV_STEP"
									})
							}
							), [t, f, o.currentStepIndex, o.steps.length])
							, E = s.useCallback((() => {
								const e = o.currentStepIndex + 1
									, a = o.currentStepIndex >= o.steps.length - 1
									, r = Date.now() - d.current;
								if ((0,
									V.track)("math_help_next_step_tap", {
										challenge_id: t,
										is_last_step: a,
										math_help_type: f,
										max_step_number: o.steps.length,
										step_number: e,
										step_time: r
									}),
									a)
									return l({
										type: "SET_MATH_HELP_FINISHED"
									}),
										void n();
								d.current = Date.now(),
									c({
										type: "NEXT_STEP"
									})
							}
							), [t, n, l, f, o.currentStepIndex, o.steps.length])
							, y = o.steps[o.currentStepIndex]
							, b = s.useCallback((e => {
								var a;
								const n = null === (a = null == y ? void 0 : y.suggestions.find((t => t.chipLabel === e))) || void 0 === a ? void 0 : a.chipType;
								(0,
									V.track)("math_help_conceptual_tap", {
										challenge_id: t,
										chip_name: e,
										chip_type: n,
										math_help_type: f,
										step_number: o.currentStepIndex + 1
									}),
									c({
										chipLabel: e,
										type: "CHIP_CLICK"
									})
							}
							), [t, y, f, o.currentStepIndex])
							, S = null !== (r = null == y ? void 0 : y.nextStepLabel) && void 0 !== r ? r : null
							, k = o.suggestions.filter((e => e !== S));
						return {
							animationState: o.animationState,
							audioElRef: m,
							canGoBack: o.stepHistory.length > 0,
							conceptualChips: k,
							currentStepNumber: o.currentStepIndex + 1,
							currentTtsUrlRef: g,
							encodedVisemesRef: p,
							maxStepNumber: o.steps.length,
							nextStepLabel: S,
							onChipClick: b,
							onNextStep: E,
							onPrevStep: _,
							presentationStyle: f,
							speechLatex: o.speechLatex,
							whiteboardRows: o.whiteboardRows
						}
					}
					)({
						challengeId: null !== (e = null == i ? void 0 : i.challengeId) && void 0 !== e ? e : "",
						isModalOpen: n,
						onClose: o,
						supportCenterInfo: null == i ? void 0 : i.supportCenterInfo
					})
					, d = "lite" === c.presentationStyle;
				return s.createElement(h.Z, {
					animation: "immediate-no-fade",
					className: d ? "_3O17R" : "_1C0fM",
					modalName: G.t.MathSupport
				}, (e => s.createElement(Os, {
					...e,
					mathSupportState: c
				})))
			}
			;
		var Bs = a(47798)
			, Us = a(72402)
			, Gs = a(72633)
			, Ws = a(28501)
			, Vs = a(90895)
			, zs = a(43029)
			, $s = a(40456);
		const Ks = (e, t) => {
			let a;
			return a = e.numerator >= e.denominator ? t ? zs : $s : t ? Ws : Vs,
				s.createElement("img", {
					src: a
				})
		}
			, js = ({ challenges: e }) => {
				const t = (0,
					ge.Fg)()
					, a = (0,
						W.Fx)((e => e.player.matchMadnessMatchesCompleted))
					, n = s.useMemo((() => {
						let t = a;
						return e.map((e => {
							if ((null == e ? void 0 : e.type) === ce.Sm.MathChallengeBlob) {
								const a = "matchMadness" === e.challengeBlob.layout ? e.challengeBlob.onesie.length : 0
									, n = Math.min(t, a);
								return t -= n,
								{
									denominator: a,
									numerator: n
								}
							}
							throw Error(`Unexpected challenge type: ${null == e ? void 0 : e.type}`)
						}
						))
					}
					), [e, a]);
				return s.createElement(Gs.Z, {
					checkpoints: n.map(((e, a) => ({
						background: s.createElement("span", null),
						label: Ks(e, "dark" === t),
						numerator: a + 1
					}))),
					denominator: n.length,
					fillClassName: "_1YnbS",
					numerator: n.reduce(((e, t) => e + t.numerator / t.denominator), 0)
				})
			}
			, qs = a.p + "images/hearts/52713b3ce0c345b5295f5fd86a900d50.svg"
			, Xs = a.p + "images/hearts/5622d0c47ee5b3c9f2bda53b1a18d59b.svg"
			, Ys = a.p + "images/hearts/ae712bbaf5178d7867543751afcd1f12.svg"
			, Qs = a.p + "images/hearts/3e1e2633fc0e64a994703c0bd5eaf1ed.svg"
			, Js = a.p + "images/hearts/c5e896836d874aac0c0196a41cf9411b.svg"
			, el = {
				hearts: "_3AaKp",
				"heart-container": "_3GV37",
				"_heart-filled": "_1kJvS",
				"_heart-lost": "m-192",
				heart: "WHHmN",
				"heart-filled": "rMEtj WHHmN _1kJvS",
				"heart-lost": "_1MxZN WHHmN _1kJvS m-192"
			}
			, tl = ({ color: e = "red", left: t, total: a }) => {
				const n = "dark" === (0,
					ge.Fg)();
				return s.createElement("div", {
					className: el.hearts
				}, l.DZ(a, (a => s.createElement("div", {
					className: el["heart-container"],
					key: a
				}, s.createElement("img", {
					className: el.heart,
					src: n ? Qs : Js
				}), s.createElement("img", {
					className: el["heart" + (a < t ? "-filled" : "-lost")],
					src: "red" === e ? n ? qs : Xs : Ys
				})))))
			}
			;
		var al = a(86505);
		const nl = a.p + "images/chess/bbf106a2422affcbccea43377d07e58b.svg"
			, rl = a.p + "images/chess/edbdde370c4134d5862a20cb1ba18339.svg"
			, sl = a.p + "images/chess/b7516b81f49a0240ae442521273db7da.svg"
			, ll = a.p + "images/chess/a57905a56e2d3158c921ce0e131cfd7d.svg"
			, il = a.p + "images/chess/397e698e6b09f817a58fafb6895cd594.svg"
			, ol = a.p + "images/chess/24788a6b45fbf9926d9b793ffd780274.svg"
			, cl = {
				container: "_3KDWp",
				section: "_2pStc",
				time: "axr2M _2pStc",
				black: "yFzJh",
				white: "_3D1Be",
				points: "_1Se79 _2pStc",
				down: "U-RXy",
				"points-text-mobile": "oWaaP",
				"points-text-desktop": "_1Feur"
			}
			, dl = e => {
				const t = Math.max(0, Math.floor(e / 1e3));
				return `${Math.floor(t / 60)}∶${String(t % 60).padStart(2, "0")}`
			}
			, ul = (e, t) => "black" === e ? t ? rl : nl : t ? ll : sl
			, ml = ({ state: e, side: t, isDark: a }) => {
				const n = ((e, t, a) => {
					const n = e.playerClocks[t];
					if (void 0 !== e.gameEnd || t !== (0,
						cr.aq)(e.boardFen))
						return Math.max(0, n);
					const r = Math.max(0, a - e.clocksUpdatedAtMs);
					return Math.max(0, n - r)
				}
				)(e, t, ((e, t) => {
					const [a, n] = s.useState((() => Date.now()));
					return s.useEffect((() => {
						if (!e)
							return;
						const t = setInterval((() => n(Date.now())), 250);
						return () => clearInterval(t)
					}
					), [e, 250]),
						a
				}
				)(void 0 === e.gameEnd && (0,
					cr.aq)(e.boardFen) === t));
				return s.createElement("div", {
					className: r()(cl.time, cl[t])
				}, s.createElement("img", {
					alt: "",
					src: ul(t, a)
				}), dl(n))
			}
			, pl = () => {
				const { chessMaterialAdvantage: e } = (0,
					W.Fx)(f.lA)
					, t = e < 0;
				return s.createElement("div", {
					className: r()(cl.points, t && cl.down)
				}, s.createElement("img", {
					alt: t ? "↓" : "↑",
					src: t ? il : ol
				}), (0,
					ee._i)(63712, {
						num: Math.abs(e)
					}))
			}
			, gl = ({ pvpMatchState: e, secondsLeft: t }) => {
				const { chessColor: a } = (0,
					W.Fx)(f.lA)
					, n = "dark" === (0,
						ge.Fg)();
				if (void 0 !== e) {
					const t = "white" === e.playerColor ? "black" : "white";
					return s.createElement("div", {
						className: cl.container
					}, s.createElement(ml, {
						isDark: n,
						side: e.playerColor,
						state: e
					}), s.createElement(ml, {
						isDark: n,
						side: t,
						state: e
					}), s.createElement(pl, null))
				}
				return s.createElement("div", {
					className: cl.container
				}, s.createElement(pl, null), void 0 === t ? null : s.createElement("div", {
					className: r()(cl.time, cl[a])
				}, s.createElement("img", {
					alt: "",
					src: ul(a, n)
				}), dl(1e3 * t)))
			}
			;
		var hl = a(50888)
			, vl = a(92461);
		const fl = async (e, t, a, n) => {
			n({
				type: "CHALLENGE_GUESS_CHANGE",
				value: {
					matchState: {
						endCondition: a,
						outcome: "loss",
						status: "completed"
					}
				}
			}),
				n((0,
					Re.YK)(!1, Date.now()));
			try {
				const r = await se.d3.updateBotMatch(e, t, {
					status: a
				});
				"number" == typeof r.eloRating && n({
					eloRating: r.eloRating,
					type: "SET_CHESS_ELO_RATING"
				})
			} catch (e) {
				(0,
					oe.Kp)("Failed to PATCH bot match interruption", {
						data: {
							err: String(e),
							matchId: t
						}
					})
			}
		}
			, _l = {
				grid: "_1zcW8",
				"grid-with-stats": "I-Avc _1zcW8",
				"grid-with-settings": "_1UjWi _1zcW8",
				"grid-with-settings-and-stats": "_18N2Q _1zcW8",
				quit: "_3X5b9",
				wrap: "_3v4ux",
				timer: "_38fHz",
				"transliterations-settings": "_2VEsk bafGS _2LoNU VzbUl _1saKQ _1AgKJ"
			}
			, El = ({ onQuitButtonClick: e }) => {
				const t = (() => {
					const e = (0,
						W.tX)()
						, t = (0,
							W.Fx)((e => e.player.sessionTimeLimit))
						, a = (0,
							W.Fx)((e => e.player.sessionTimeRemaining))
						, n = (0,
							W.Fx)((e => {
								var t;
								return null === (t = e.player.session) || void 0 === t ? void 0 : t.startTime
							}
							))
						, r = (0,
							W.Fx)((e => e.player.sessionTimerPaused))
						, l = (0,
							W.Fx)((e => {
								var t;
								return null === (t = e.player.session) || void 0 === t ? void 0 : t.type
							}
							))
						, i = (0,
							W.Fx)((e => {
								var t;
								return null === (t = e.player.session) || void 0 === t ? void 0 : t.challenges[e.player.currentIndex]
							}
							))
						, o = (0,
							W.Fx)((e => e.player.status))
						, c = s.useRef(!1);
					s.useEffect((() => {
						c.current = !1
					}
					), [n, t]),
						s.useEffect((() => {
							if (o !== St.c.Guessing || void 0 === t || r)
								return;
							const a = setInterval((() => {
								e({
									tickAmount: .5,
									type: "TICK_SESSION_TIME_REMAINING"
								})
							}
							), 500);
							return () => clearInterval(a)
						}
						), [e, o, t, r]);
					const d = (0,
						W.Fx)(f.np)
						, u = (0,
							W.Fx)((e => (0,
								hl.mu)(e, Date.now())));
					return s.useEffect((() => {
						void 0 !== a && a <= 0 && !c.current && o === St.c.Guessing && (c.current = !0,
							l === ce.FF.ChessMatch ? fl(d.id, i.id, "timeout", e) : (e({
								type: "END_SESSION_EARLY"
							}),
								e((0,
									Re.Z3)()),
								e({
									hasXpBoost: u,
									timestamp: (0,
										Xe.Zo)(),
									type: "END_SESSION",
									user: d
								}),
								e((0,
									Re.a)())))
					}
					), [a, u, d, e, o, l, i]),
						a
				}
				)()
					, a = (0,
						W.Fx)((e => e.player.chessPvpMatchState))
					, n = (0,
						W.tX)()
					, r = (0,
						W.Fx)(f.Oz)
					, l = (0,
						W.Fx)(f.lA)
					, i = (0,
						W.Fx)(en.ix)
					, o = (0,
						W.Fx)(st.hg)
					, c = "dark" === (0,
						ge.Fg)()
					, { heartsType: d, session: u, sessionParams: m } = l
					, p = u.type === ce.FF.MathMatchPractice
					, g = (0,
						cr.Ar)(u)
					, h = void 0 === t ? "" : `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`
					, v = void 0 !== t && p ? s.createElement("div", {
						className: _l.timer
					}, h) : null
					, _ = "sessionHearts" === d ? s.createElement(tl, {
						color: m.isFinalLevel ? "gold" : "red",
						left: l.session.heartsLeft,
						total: l.maxHearts
					}) : i ? s.createElement(Us.Z, null) : null
					, E = (0,
						st._G)(u.type) && (0,
							st.dN)(r.learningLanguage, r.fromLanguage, o, !0) ? s.createElement("button", {
								className: _l["transliterations-settings"],
								onClick: () => n({
									options: {
										name: G.t.TransliterationSettings
									},
									type: "TOGGLE_MODAL"
								})
							}) : null
					, y = null != _ ? _ : v
					, b = y && E ? "grid-with-settings-and-stats" : y ? "grid-with-stats" : E ? "grid-with-settings" : "grid";
				return s.createElement("div", {
					className: _l.wrap
				}, s.createElement("div", {
					className: _l[b]
				}, s.createElement(q.Z, {
					className: _l.quit,
					...(0,
						Jt._q)(ea.V.QuitButton),
					onClick: e
				}, s.createElement("img", {
					className: _l.quit,
					src: c ? ms : ps
				})), E, p ? s.createElement(js, {
					challenges: u.challenges
				}) : g ? s.createElement(gl, {
					pvpMatchState: a,
					secondsLeft: t
				}) : s.createElement(al.Z, {
					secondsLeft: void 0
				}), void 0 === t ? _ : v))
			}
			, yl = a.p + "lottie/681e3b6084394d09df2af15f9d12d51c.json"
			, bl = a.p + "lottie/7f1370b3f1d802951f0cab013ecb05c2.json"
			, Sl = a.p + "lottie/6f4525b361ab4ef04c92af8f42cdcec6.json"
			, kl = "_1JaQ9"
			, Cl = "En_6d _2OFAQ"
			, xl = "_1acNE _2OFAQ"
			, Tl = {
				lottieBicepCurl: yl,
				lottieWaveBottom: bl,
				lottieWaveLeft: Sl
			}
			, wl = s.forwardRef((({ lottie: e, className: t, onEnterFrame: a }, n) => s.createElement("div", {
				className: r()(t, kl),
				ref: n,
				...(0,
					Jt._q)(ea.V.SessionDuo)
			}, s.createElement(s.Suspense, {
				fallback: null
			}, s.createElement(yr.Z, {
				isPlaying: !0,
				onEnterFrame: a,
				path: e
			})))))
			, Nl = s.forwardRef((({ className: e }, t) => s.createElement("div", {
				className: r()(e, kl),
				ref: t,
				...(0,
					Jt._q)(ea.V.SessionDuo)
			})))
			, Rl = ({ animate: e, children: t, onRequestClose: a, type: n }) => {
				e = !(0,
					ke.Z)() && e;
				const l = s.useCallback((() => [0, "coachBottom" === n || "coachLeft" === n ? e ? -32 : 18 : "hardModeLeft" === n ? 0 : "legendaryBottom" === n ? -25 : "legendaryLeft" === n ? -10 : "superCoachBottom" === n ? 15 : "superCoachLeft" === n ? -40 : ((0,
					Pe.RJ)(n),
					0)]), [e, n])
					, o = (0,
						fe.f)({
							modifiers: [{
								enabled: !1,
								name: "flip"
							}, {
								enabled: !1,
								name: "hide"
							}, {
								name: "offset",
								options: {
									offset: l
								}
							}, {
								enabled: !1,
								name: "preventOverflow"
							}],
							placement: ee.lw ? "left" : "right"
						})
					, [c, d] = s.useState(!e)
					, [u, m] = s.useState(null)
					, p = s.useRef(null);
				u !== n && (d(!e),
					m(n)),
					(0,
						i.Z)({
							isVisible: c,
							ref: p
						});
				const g = s.useCallback((({ currentTime: e }) => {
					e > (["coachBottom", "legendaryBottom"].includes(n) ? 15 : 20) && d(!0)
				}
				), [n])
					, { baseSessionDuo: h, cssVars: v, wrapClassName: f } = (() => {
						const t = {
							animate: !!e,
							onEnterFrame: g,
							ref: o.setElementRef
						};
						switch (n) {
							case "coachBottom":
								return {
									baseSessionDuo: e ? s.createElement(wl, {
										...t,
										className: "_1UGd5",
										lottie: Tl.lottieWaveBottom
									}) : s.createElement(Nl, {
										className: "KH0FJ _3d8PD _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: e ? "_2GMvD" : "_2I-Tk",
									wrapClassName: Cl
								};
							case "coachLeft":
								return {
									baseSessionDuo: e ? s.createElement(wl, {
										...t,
										className: "_3AxLp _219j-",
										lottie: Tl.lottieWaveLeft
									}) : s.createElement(Nl, {
										className: "PImjB _3_blb _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: e ? "_36_fr" : "F69E0",
									wrapClassName: xl
								};
							case "hardModeLeft":
								return {
									baseSessionDuo: e ? s.createElement(wl, {
										...t,
										className: "_2xq00 _219j-",
										lottie: Tl.lottieBicepCurl
									}) : s.createElement(Nl, {
										className: "_134I8 _219j-",
										ref: o.setElementRef
									}),
									cssVars: e ? "IwvqP" : "wg1Xy",
									wrapClassName: xl
								};
							case "legendaryBottom":
								return {
									baseSessionDuo: s.createElement(Nl, {
										className: "_1V3nL _2lbCB _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: "_1NpYi",
									wrapClassName: Cl
								};
							case "legendaryLeft":
								return {
									baseSessionDuo: s.createElement(Nl, {
										className: "_1LuZm _1iHi7 _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: "oKihV",
									wrapClassName: xl
								};
							case "superCoachBottom":
								return {
									baseSessionDuo: s.createElement(Nl, {
										className: "_1Qdkz _2NlUC _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: "ACY0L",
									wrapClassName: Cl
								};
							case "superCoachLeft":
								return {
									baseSessionDuo: s.createElement(Nl, {
										className: "_2VtQb _2SESq _1QHN7 _219j-",
										ref: o.setElementRef
									}),
									cssVars: "_3NW4d",
									wrapClassName: xl
								};
							default:
								throw (0,
									Pe.RJ)(n),
								Error(`Unsupported session Duo type: ${n}`)
						}
					}
					)();
				return s.createElement("div", {
					className: r()(v, f),
					key: n
				}, h, s.createElement("div", {
					ref: p
				}, s.createElement(_e.Z, {
					className: c ? "_3SQBJ _1-QWt" : "_1-QWt",
					hasCloseButton: !!a,
					innerClassName: r()(v, ["coachBottom", "legendaryBottom", "superCoachBottom"].includes(n) ? "_2ka0w _1K3po" : "_1kjVu _1K3po"),
					onRequestClose: a,
					popperProps: o.props,
					ref: o.setPopoverRef,
					stemContainerRef: o.setArrowRef,
					zIndex: 0
				}, t)))
			}
			;
		var Il = a(39797)
			, Ll = a(68950)
			, Pl = a(77895)
			, Fl = a(93540)
			, Al = a(71600)
			, Zl = a(29486)
			, Dl = a(85814)
			, Ml = a(68839);
		const Ol = "VUtMF pN4Lr _1QHN7 _219j-"
			, Hl = "YcEFK _3-GFU"
			, Bl = "q3jKY";
		var Ul = a(12408)
			, Gl = a(65407);
		const Wl = e => void 0 === e.numStars ? (0,
			ee.H8)(38735, {
				minutes: Math.floor(fa.sk / 60),
				seconds: fa.sk % 60
			}, {
				exportTags: !0
			}) : (0,
				ee.H8)(72509, {
					num: e.numStars
				}, {
					exportTags: !0
				})
			, Vl = ({ data: e, splitLayout: t = !0 }) => {
				const a = (0,
					W.Fx)(Fl.HF)
					, n = (0,
						W.Fx)(f.T7);
				s.useEffect((() => {
					switch (e.type) {
						case ce.FF.AlphabetLesson:
						case ce.FF.AlphabetPractice:
							(0,
								V.track)("explanation_ad_show", {
									alphabet_id: e.alphabetId,
									is_grammar_skill: !1
								});
							break;
						case ce.FF.Lesson:
							(0,
								V.track)("explanation_ad_show", {
									is_grammar_skill: !0
								});
							break;
						case ce.FF.SectionTest:
							(0,
								V.track)("section_test_session_start_shown", {
									section_index: e.sectionIndex
								});
							break;
						case ce.FF.UnitReview:
							(0,
								V.track)("unit_review_session_start_shown", {
									unit_index: e.unitIndex
								});
							break;
						case ce.FF.UnitTest:
							(0,
								V.track)("unit_test_session_start_shown", {
									unit_index: e.unitIndex
								})
					}
				}
				), []),
					s.useEffect((() => {
						se.bG.getLottieAnimation(Dl)
					}
					));
				const [l, i] = s.useState(!1)
					, o = (0,
						ke.Z)()
					, { body: c = null, description: d, header: u, image: m } = (() => {
						var t, r, c;
						const d = {
							body: null,
							description: (0,
								ee._i)(34751),
							header: "You’re ready for a new lesson!",
							image: s.createElement("span", {
								className: Ol
							})
						};
						switch (e.type) {
							case ce.FF.AlphabetLesson:
							case ce.FF.AlphabetPractice:
								return d;
							case ce.FF.Lesson:
								if (!e.explanation)
									throw Error("Expected an explanation for splash page.");
								return e.isCustomIntroSkill ? d : {
									description: (0,
										ee._i)(24898, {
											skill_title: e.explanation.title
										}),
									header: (0,
										ee._i)(16230, {
											skillName: e.explanation.title
										}),
									image: s.createElement("span", {
										className: Ol
									})
								};
							case ce.FF.LevelReview:
							case ce.FF.LexemePractice:
								if (!e.pathLevel)
									throw Error("No path level found when trying to show splash for v2 session.");
								if ((0,
									hs.$)(e.pathLevel)) {
									const t = (0,
										Ul.in)(e.unitIndex, n);
									return {
										description: null,
										header: (0,
											ee._i)(49721),
										image: s.createElement("img", {
											className: "_3n9lK _3-GFU",
											src: Gl.eT[t.character]
										})
									}
								}
								if ("grammar" === (null === (t = e.sessionContext) || void 0 === t ? void 0 : t.contextType))
									return {
										description: s.createElement("div", {
											className: "_1qDvX"
										}, s.createElement("div", {
											className: "_2AAwF"
										}, e.sessionContext.grammarDescription), s.createElement("div", null, s.createElement("div", {
											className: "_5wIUX"
										}, s.createElement(he.Z, {
											audio: e.sessionContext.exampleSentences[0].tts,
											autoplay: !1,
											className: "fAi-C",
											type: "small",
											useKeyboardShortcut: !1,
											variant: "inverse"
										}), s.createElement(Ll.Z, {
											highlights: e.sessionContext.exampleSentences[0].highlightLocations.map((e => [e.startIndex, e.endIndex])),
											style: "blue",
											text: e.sessionContext.exampleSentences[0].text
										})))),
										header: s.createElement("span", {
											className: Bl
										}, (0,
											ee._i)(48264)),
										image: s.createElement(s.Suspense, {
											fallback: null
										}, s.createElement(yr.Z, {
											className: Hl,
											fillMode: "forwards",
											isPlaying: !o,
											loop: l,
											loopSegment: l ? [25, 213] : [0, 220],
											mainSegment: l ? [0, 25] : [220, 360],
											onComplete: () => i(!0),
											path: l ? Dl : Ml
										}))
									};
								if ("lexeme" === (null === (r = e.sessionContext) || void 0 === r ? void 0 : r.contextType)) {
									const t = null === (c = e.sessionContext) || void 0 === c ? void 0 : c.focusedLexemes;
									if (void 0 !== t && t.length > 0)
										return {
											description: s.createElement("div", null, s.createElement("div", {
												className: "RdBio"
											}, t.map(((e, t) => s.createElement("div", {
												className: "_3gxN9",
												key: t
											}, e.wordValue))))),
											header: s.createElement("span", {
												className: Bl
											}, (0,
												ee._i)(46779, {
													num: t.length
												})),
											image: s.createElement(s.Suspense, {
												fallback: null
											}, s.createElement(yr.Z, {
												className: Hl,
												fillMode: "forwards",
												isPlaying: !o,
												loop: l,
												loopSegment: l ? [25, 213] : [0, 220],
												mainSegment: l ? [0, 25] : [220, 360],
												onComplete: () => i(!0),
												path: l ? Dl : Ml
											}))
										}
								}
								throw Error("Tried to show capstone review splash for non-capstone level.");
							case ce.FF.MathMatchPractice:
								return {
									description: null,
									header: null,
									image: s.createElement("div", {
										className: "_13vSl _1j-nX"
									}, s.createElement(s.Suspense, {
										fallback: null
									}, s.createElement("div", {
										className: "_2yKPK"
									}, s.createElement(Pl.Z, {
										direction: "up",
										duoQuote: Wl(e),
										highlightColor: "owl",
										shouldAnimate: !o
									})), s.createElement(yr.Z, {
										className: "dZpyD _3-GFU",
										fillMode: "forwards",
										isPlaying: !o,
										loop: !0,
										path: Zl
									})))
								};
							case ce.FF.SectionTest:
								return {
									description: null,
									header: (0,
										ee._i)(49724, {
											section_name: (0,
												ee.H8)(46892, {
													num: e.sectionIndex + 1
												})
										}),
									image: s.createElement("span", {
										className: "_3zVWQ _2vJXD _1QHN7 _219j-"
									})
								};
							case ce.FF.UnitReview:
								{
									const t = (0,
										Ul.in)(e.unitIndex, n);
									return {
										description: null,
										header: a && (0,
											Ul.WU)(a[e.unitIndex]) ? (0,
												ee._i)(64918) : (0,
													ee._i)(49722, {
														unit_num: e.unitNumber
													}),
										image: s.createElement("img", {
											className: "_23yvz _3-GFU",
											src: Gl.NV[t.character]
										})
									}
								}
							case ce.FF.UnitTest:
								{
									const t = (0,
										Ul.in)(e.unitIndex, n);
									return {
										description: null,
										header: a && (0,
											Ul.WU)(a[e.unitIndex]) ? (0,
												ee._i)(64917) : (0,
													ee._i)(49723, {
														unit_num: e.unitNumber
													}),
										image: s.createElement("img", {
											className: "_3BHJN _3-GFU",
											src: Gl.eT[t.character]
										})
									}
								}
							case "earnback":
								{
									const t = (() => {
										if (0 === e.completedSessions)
											switch (e.totalSessions) {
												case 3:
													return (0,
														ee._i)(49707, {
															num: e.previousStreakLength
														});
												case 4:
													return (0,
														ee._i)(49708, {
															num: e.previousStreakLength
														});
												case 5:
													return (0,
														ee._i)(49709, {
															num: e.previousStreakLength
														});
												case 6:
													return (0,
														ee._i)(49710, {
															num: e.previousStreakLength
														});
												default:
													return (0,
														Pe.RJ)(e.totalSessions),
														(0,
															ee._i)(49710, {
																num: e.previousStreakLength
															})
											}
										return e.totalSessions - e.completedSessions == 1 ? 6 === e.totalSessions ? (0,
											ee._i)(49713) : (0,
												ee._i)(44390) : 1 === e.completedSessions ? (0,
													ee._i)(44382) : e.completedSessions === e.totalSessions / 2 ? (0,
														ee._i)(44386) : e.totalSessions - e.completedSessions == 2 ? 5 === e.totalSessions ? (0,
															ee._i)(44764) : (0,
																ee._i)(44388) : (0,
																	ee._i)(44384)
									}
									)();
									return {
										body: s.createElement(Il.Z, {
											className: "_189mu",
											color: "fox",
											denominator: e.totalSessions,
											height: 28,
											numerator: e.completedSessions,
											segments: {
												highlightedSegment: e.completedSessions,
												numSegments: e.totalSessions,
												popoverText: s.createElement("span", {
													className: "_2dHRP"
												}, (0,
													ee._i)(22527, {
														denominator: e.totalSessions,
														numerator: e.completedSessions + 1
													}))
											}
										}),
										description: null,
										header: s.createElement("span", {
											className: "KKaAV"
										}, t),
										image: s.createElement("img", {
											className: "_1O0vk",
											src: Al
										})
									}
								}
							case "easierPlacement":
								return {
									description: null,
									header: null,
									image: s.createElement("div", {
										className: "_1j-nX"
									}, s.createElement("div", {
										className: "_2LmB3"
									}, s.createElement(Pl.Z, {
										direction: "up",
										duoQuote: (0,
											ee.H8)(45862, {
												section: e.sectionNumber
											}, {
												exportTags: !0
											}),
										highlightColor: "eel",
										shouldAnimate: !o
									})), s.createElement(s.Suspense, {
										fallback: null
									}, s.createElement(yr.Z, {
										className: Hl,
										fillMode: "forwards",
										isPlaying: !o,
										loop: !0,
										loopSegment: [25, 213],
										mainSegment: [0, 25],
										path: Dl
									})))
								};
							default:
								throw (0,
									Pe.RJ)(e),
								Error(`Unexpected session type: ${e.type}`)
						}
					}
					)();
				return s.createElement("div", {
					className: r()("_3Af-V", {
						_2AtVI: t
					})
				}, s.createElement("div", {
					className: "_287e2"
				}, m), s.createElement("div", {
					className: r()("_3T4Oe", {
						_1mpCk: "earnback" === e.type
					})
				}, s.createElement("h2", {
					...(0,
						Jt._q)(ea.V.SessionSplashTitle),
					className: "_3tWXQ"
				}, u), d ? s.createElement("p", {
					className: "_3upKO"
				}, d) : null, c))
			}
			;
		var zl = a(2844);
		const $l = ({ disabled: e, learningLanguage: t, smartTipResource: a }) => {
			const n = (0,
				W.tX)()
				, r = (0,
					W.Fx)((e => e.player.status === St.c.SmartTip))
				, l = s.useRef(null)
				, i = (e, t = {}) => {
					t.explanation_title = a.identifier,
						(0,
							V.track)(e, t)
				}
				;
			return s.useEffect((() => {
				r && n({
					timestamp: Date.now(),
					type: "CHALLENGE_STARTED"
				})
			}
			), [r]),
				s.createElement("div", {
					className: "_2YUE9"
				}, s.createElement("div", {
					className: "_30RDO",
					ref: l
				}, s.createElement(us.a, {
					container: l,
					disabled: e,
					items: (0,
						Te.qj)(a.elements, {
							deep: !0
						}),
					learningLanguage: t,
					onAudioTap: () => i("explanation_audio_tap"),
					onHintShown: e => i("explanation_hint_shown", {
						hint: e
					}),
					variables: a.trigger.smart_tip.variables
				})))
		}
			;
		var Kl = a(27450)
			, jl = a(40387)
			, ql = a(87710)
			, Xl = a(3866);
		const Yl = () => {
			const e = (0,
				W.tX)()
				, t = (0,
					W.Fx)((e => (0,
						f.lA)(e).currentIndex))
				, a = (0,
					W.Fx)((e => (0,
						f.lA)(e).levelData))
				, n = (0,
					W.Fx)(f.iH)
				, r = (0,
					W.Fx)(f.is)
				, i = (0,
					W.Fx)(f.oe)
				, o = (0,
					ke.Z)()
				, [c, d] = s.useState(!1)
				, u = s.useRef([])
				, m = s.useRef()
				, p = s.useRef()
				, g = s.useRef()
				, h = e => void 0 === n ? [] : (0,
					le.sS)({
						challenge: e,
						learningLanguage: n,
						session: r
					})
				, v = async e => {
					var t, a;
					if (!o && (null === (t = e.character) || void 0 === t ? void 0 : t.riveAnimation))
						await ql.N7("rive", e.character.riveAnimation.url);
					else if (!o && (null === (a = e.character) || void 0 === a ? void 0 : a.idleAnimation))
						try {
							await ql.N7("lottie", e.character.idleAnimation)
						} catch {
							(0,
								V.track)("lottie_download_failure", {
									offline: !navigator.onLine,
									path: e.character.idleAnimation,
									type: "in_lesson_character_idle"
								})
						}
				}
				, _ = async t => {
					if (void 0 !== t)
						try {
							const a = await se.s3.getExplanation(t.url);
							e({
								explanationResource: a,
								type: "LOAD_IN_LESSON_TIP_RESOURCE",
								url: t.url
							})
						} catch (e) {
							(0,
								V.trackAndLogApiError)("fetch_explanation_failed", "Failed to preload in-lesson tip", e)
						}
				}
				, E = async e => {
					try {
						await se.bG.getLottieAnimation(e)
					} catch { }
				}
				, y = e => {
					const t = [];
					return h(e).forEach((e => {
						u.current.includes(e.url) || (t.push((async () => {
							try {
								await (0,
									Le.IZ)(e.url)
							} catch {
								(0,
									Le.N$)(e)
							}
						}
						)()),
							u.current.push(e.url))
					}
					)),
						Promise.all(t)
				}
				, b = async e => {
					var t;
					if (e.type !== ce.Sm.MathChallengeBlob)
						return;
					const a = null !== (t = r.isLlmGenerated) && void 0 !== t && t
						, n = (0,
							Xl.Ak)(e.challengeBlob, a).map((e => (async () => {
								try {
									await ql.N7("webResource", e)
								} catch { }
							}
							)()));
					await Promise.all(n)
				}
				, S = e => {
					const a = [];
					if (!e) {
						const e = e => h(e).map((e => e.url));
						a.push(...r.challenges.slice(t).flatMap(e)),
							r.adaptiveChallenges && !(0,
								jl.jJ)(r) && a.push(...r.adaptiveChallenges.flatMap(e))
					}
					const [n, s] = l.uK(u.current, (e => !a.includes(e)));
					n.length && (console.log(`Unloading ${n.length} TTS fragments`),
						n.forEach((e => (0,
							Le.Ms)(e))),
						u.current = s)
				}
				;
			return s.useEffect((() => {
				void 0 === g.current && r && (async () => {
					console.log("Preloading first challenge");
					const e = r.skillId ? i[r.skillId] : void 0
						, t = "alphabet" === (null == a ? void 0 : a.level.type) ? a.level.pathLevelClientData : void 0
						, n = (null == t ? void 0 : t.explanationUrl) ? {
							title: t.title,
							url: t.explanationUrl
						} : void 0
						, s = [_(null == e ? void 0 : e.explanation), _(r.challenges[0].explanation), _(n)];
					await Promise.all(s),
						y(r.challenges[0]),
						b(r.challenges[0]),
						o || (new se.eN).get(Kl),
						d(!0)
				}
				)()
			}
			)),
				s.useEffect((() => {
					m.current === c && p.current === t || !c || (async () => {
						var e;
						S(!1);
						const a = r.challenges[t];
						a && (console.log("Preloading (in)correct character animations"),
							(async e => {
								if (e && !o && e.character && !e.character.riveAnimation) {
									const t = e.character.correctAnimation
										, a = e.character.incorrectAnimation;
									await Promise.all([t ? E(t) : Promise.resolve(), a ? E(a) : Promise.resolve()])
								}
							}
							)(a));
						const n = r.challenges[t + 1];
						if (n && (console.log("Preloading next challenge"),
							v(n),
							await y(n),
							await b(n),
							await _(n.explanation)),
							0 === t) {
							const t = null === (e = r.adaptiveChallenges) || void 0 === e ? void 0 : e[0];
							t && (console.log("Preloading first adaptive challenge"),
								v(t),
								await y(t),
								await b(t),
								await _(t.explanation))
						}
					}
					)()
				}
				)),
				s.useEffect((() => () => S(!0)), []),
				s.useEffect((() => {
					m.current = c,
						p.current = t,
						g.current = r
				}
				)),
			{
				canStartSession: c
			}
		}
			;
		var Ql = a(83936);
		const Jl = e => e.player.status === St.c.CoachDuo || e.player.status === St.c.CoachDuoSplash || e.player.status === St.c.CoachDuoSliding || e.player.status === St.c.CoachDuoSubmitting;
		var ei = a(86155)
			, ti = a(53278)
			, ai = a(33)
			, ni = a(9249)
			, ri = a(77873)
			, si = a(74462)
			, li = a(54174)
			, ii = a(21791)
			, oi = a(84166)
			, ci = a(15307);
		const di = a.p + "images/65494386b412d70cd7b69d17ecdf8631.svg";
		var ui = a(32693);
		const mi = "_29ngr"
			, pi = "_1QQhE"
			, gi = "_1-xjo";
		var hi = a(9979)
			, vi = a(2062)
			, fi = a(9129)
			, _i = a(26886)
			, Ei = a(6962)
			, yi = a(51748)
			, bi = a(59815)
			, Si = a(1)
			, ki = a(59604)
			, Ci = a(68826)
			, xi = a(95605)
			, Ti = a(36914)
			, wi = a(89803)
			, Ni = a(44637)
			, Ri = a(84401)
			, Ii = a(90110)
			, Li = a(88868)
			, Pi = a(12125)
			, Fi = a(51551)
			, Ai = a(59096)
			, Zi = a(68564)
			, Di = a(39837)
			, Mi = a(40060)
			, Oi = a(20028);
		const Hi = (0,
			Xe.dz)({
				minutes: 15
			})
			, Bi = e => e.player.sessionSubmitError && (e.player.status === St.c.CoachDuoSubmitting || e.player.status === St.c.Submitting)
			, Ui = e => e.player.sessionSubmitted && (e.player.status === St.c.CoachDuoSubmitting || e.player.status === St.c.Submitting || e.player.session.type === ce.FF.DuoRadio)
			, Gi = () => {
				const e = s.useRef(null);
				return (0,
					i.Z)({
						animateOnMount: !0,
						duration: 250,
						isVisible: !1,
						ref: e
					}),
					s.createElement("div", {
						className: "_1FPVZ",
						ref: e
					})
			}
			, Wi = e => {
				var t, a, n, r, i;
				const { history: o, location: c, match: { params: m } } = e
					, p = (0,
						W.tX)()
					, g = (0,
						W.Fx)(Fl.cb)
					, h = (0,
						W.Fx)(Ql.Y_)
					, v = (0,
						W.Fx)(f.iM)
					, _ = (0,
						W.Fx)(f.dE)
					, E = (0,
						W.Fx)(f.Oz)
					, y = (0,
						W.Fx)(f.MY)
					, b = (0,
						W.Fx)(f.B8)
					, S = (0,
						W.Fx)(f.Al)
					, k = (0,
						ns.g3)()
					, C = (0,
						W.Fx)(f.SJ)
					, x = (0,
						W.Fx)(f.__)
					, T = (0,
						W.Fx)(f.$4)
					, w = (0,
						W.Fx)(li.d)
					, N = null === (t = (0,
						W.Fx)(ci.pA)) || void 0 === t ? void 0 : t.level
					, R = (0,
						W.Fx)(Fl.HF)
					, I = (0,
						W.Fx)(Fl.DN)
					, L = (0,
						W.Fx)(f.lA)
					, P = (0,
						W.Fx)(ii.Q)
					, F = (0,
						W.Fx)(f.oe)
					, A = (0,
						W.Fx)(f.np)
					, Z = (0,
						W.CC)()
					, D = (0,
						W.Fx)(si.MQ)
					, M = (e => {
						const t = s.useRef(Date.now())
							, a = s.useRef(0);
						return s.useEffect((() => {
							const n = l.P2((() => {
								if (!e) {
									const e = Date.now()
										, n = Math.min(e - t.current, 18e4);
									a.current += n / 1e3,
										t.current = e
								}
							}
							), 1e3, {
								trailing: !0
							});
							return document.addEventListener("mousedown", n),
								document.addEventListener("keydown", n),
								document.addEventListener("touchstart", n),
								() => {
									document.removeEventListener("mousedown", n),
										document.removeEventListener("keydown", n),
										document.removeEventListener("touchstart", n)
								}
						}
						), [e]),
							a
					}
					)(!1)
					, O = (0,
						W.Fx)(Fl.iv)
					, { includeListening: H, includeSpeaking: B, isSpeakDisabledTemporarily: U, isSpeakEnabled: G, microphonePermission: z } = (0,
						ei.ZP)()
					, { setDisableBlocking: $, shouldBlockScreen: K } = (0,
						u.Z)()
					, { pathType: j, scopeType: q, lessonType: X, unitOrSectionNumber: Y } = (0,
						Bn.mi)(c.pathname)
					, Q = "onboarding_chess_match" === (null === (n = null === (a = c.state) || void 0 === a ? void 0 : a.session) || void 0 === n ? void 0 : n.via) ? null === (i = null === (r = c.state) || void 0 === r ? void 0 : r.session) || void 0 === i ? void 0 : i.chessOnboardingSectionNumber : void 0
					, J = (0,
						W.Fx)((e => R && L.levelData ? (0,
							hs.m8)(R, (e => {
								var t;
								return e.id === (null === (t = L.levelData) || void 0 === t ? void 0 : t.level.id)
							}
							), L.levelData) : "onboarding" === j && "placement" === q ? (0,
								Ti.Av)(I, parseInt(Y, 10), null == E ? void 0 : E.subject) : "chess-match" === j && void 0 !== Q ? (0,
									Ti.Av)(I, Q, "chess") : (0,
										en.XL)(e, {
											location: c
										})))
					, ee = !!J && P(J)
					, te = "lesson" === j ? "legendary" === X ? "legendary" : "path-level" : "onboarding" === j ? "placement" : j
					, ae = s.useRef(new AbortController)
					, [ne] = s.useState((() => (0,
						Ci.F)({
							course: E,
							path: R
						})))
					, { canStartSession: re } = Yl();
				(() => {
					var e, t;
					const a = (0,
						W.Fx)((e => e.player.coachDuo))
						, n = (0,
							W.Fx)(Jl)
						, r = (0,
							W.Fx)(Ql.Rq)
						, l = (() => {
							var e;
							const t = null === (e = a.model) || void 0 === e ? void 0 : e.template.type;
							if (void 0 !== t)
								switch (t) {
									case "dialogue":
										return "lottie";
									case "rive":
										return "rive";
									case "static":
										return;
									default:
										return void (0,
											Pe.RJ)(t)
								}
						}
						)()
						, i = !n && "coachDuo" !== r || "dialogue" !== (null === (e = a.model) || void 0 === e ? void 0 : e.template.type) && "rive" !== (null === (t = a.model) || void 0 === t ? void 0 : t.template.type) ? void 0 : a.model.template.animation.url;
					s.useEffect((() => {
						if (l && i) {
							let e = !1;
							return (async () => {
								try {
									await ql.N7(l, i)
								} catch { }
								e && await ql.Od(l, i)
							}
							)(),
								() => {
									ql.Od(l, i),
										e = !0
								}
						}
					}
					), [l, i])
				}
				)();
				const le = (e = !1) => {
					var t;
					const a = null == J ? void 0 : J.level
						, n = null === (t = L.levelData) || void 0 === t ? void 0 : t.level
						, r = L.session
						, s = (() => {
							var t;
							const a = 1 === l.ZP.values(_).length;
							if (e && a && (null === (t = null == r ? void 0 : r.metadata) || void 0 === t ? void 0 : t.first_lesson) && E.placementTestAvailable)
								return Li.PG;
							switch (te) {
								case "alphabets":
									return "/characters";
								case "chess-match":
								case "chess-pvp-session":
									return "/chess-matches";
								case "mistakes-review":
									return Li.UG;
								case "path-level":
									if ("section" === q && "test" === X)
										return Li.sg;
									break;
								case "practice-hub":
									return "words" === q ? Li.$R : Li.Eq;
								default:
									return O ? Li.sg : Li.B6
							}
							return O ? Li.sg : Li.B6
						}
						)();
					if (a && n && R && s === Li.B6) {
						const e = (0,
							hs.mH)(a)
							, t = (0,
								hs.mH)(n);
						if (void 0 !== t && void 0 !== e && (0,
							Pi.R0)(t.status))
							if ((0,
								Pi.R0)(t.status) && !(0,
									Pi.R0)(e.status))
								p((0,
									ti.$l)((0,
										hs.pG)(a, N, {
											focus: !0
										})));
							else {
								const e = (0,
									hs.u6)(n.id, {
										focus: !0
									});
								e.push({
									blocksHomeMessages: !0,
									delay: hs.yP,
									levelId: n.id,
									name: "PATH_LEVEL_PROGRESS",
									prevFinishedSessions: t.lessonsCompleted
								}),
									p((0,
										ti.$l)(e))
							}
						else if ("active" === n.state && "passed" === a.state)
							p((0,
								ti.$l)((0,
									hs.P6)(n, null == g ? void 0 : g.level)));
						else if ("passed" === n.state && "legendary" === a.state)
							(0,
								Ul.yf)(R[L.levelData.unitIndex]) ? p((0,
									ti.$l)((0,
										hs.f2)(R[J.unitIndex]))) : p((0,
											ti.$l)((0,
												hs.u6)(n.id, {
													focus: !0
												})));
						else if ("unit_test" === n.state && "passed" === a.state)
							p((0,
								ti.$l)((0,
									hs.cy)(n)));
						else {
							const e = (0,
								hs.u6)(n.id, {
									focus: !0
								});
							a.finishedSessions > n.finishedSessions && "active" === a.state && r && [ce.FF.Lesson, ce.FF.LexemePractice, ce.FF.AlphabetLesson, ce.FF.AlphabetPractice].includes(r.type) && e.push({
								blocksHomeMessages: !0,
								delay: hs.yP,
								levelId: n.id,
								name: "PATH_LEVEL_PROGRESS",
								prevFinishedSessions: n.finishedSessions
							}),
								p((0,
									ti.$l)(e))
						}
					}
					o.push(s)
				}
					;
				return s.useEffect((() => {
					var e, t, a, n, r, s;
					return p({
						onboardingVia: null === (t = null === (e = c.state) || void 0 === e ? void 0 : e.session) || void 0 === t ? void 0 : t.onboardingVia,
						type: "PLAYER_INIT",
						via: null === (n = null === (a = c.state) || void 0 === a ? void 0 : a.session) || void 0 === n ? void 0 : n.via,
						welcomeForkSelection: null === (s = null === (r = c.state) || void 0 === r ? void 0 : r.session) || void 0 === s ? void 0 : s.welcomeForkSelection
					}),
						(0,
							Le.IZ)(Le.Tc.BONUS),
						(0,
							Le.IZ)(Le.Tc.CORRECT),
						(0,
							Le.IZ)(Le.Tc.FAILED),
						(0,
							Le.IZ)(Le.Tc.INCORRECT),
						(0,
							Le.IZ)(Le.Tc.PASSED),
						(0,
							Le.IZ)(Le.Tc.TEST),
						(0,
							Le.IZ)(Le.Tc.TIMER),
						Promise.all(l.VO(Tl).map((async e => {
							try {
								await se.bG.getLottieAnimation(e)
							} catch { }
						}
						))),
						(async () => {
							var e, t, a, n, r, s, l, i;
							try {
								const o = {
									...m,
									type: te
								}
									, d = null === (t = null === (e = c.state) || void 0 === e ? void 0 : e.session) || void 0 === t ? void 0 : t.via;
								if (("path-level" === o.type || "practice" === o.type) && "earnback" === d) {
									if (void 0 === A.streakRepairOffer)
										throw Error("Tried to start earnback session with location state via argument but does not have a streak repair offer");
									o.isEarnbackSession = !0
								}
								void 0 !== d && ["onboarding_easier_lesson", "onboarding_placement"].includes(d) && ("placement" === o.type ? o.isEasierLesson = "onboarding_easier_lesson" === d : "path-level" === o.type && (o.isOnboardingLesson = !0,
									o.isEasierLesson = "onboarding_easier_lesson" === d));
								const u = [];
								U ? u.push("app_disabled_temporarily") : G || u.push("app_disabled_forever"),
									"denied" === z && u.push("permission_disabled"),
									Zi.c || u.push("recognizer_unavailable");
								const h = await (0,
									Bn.u4)({
										dispatch: Z.dispatch.bind(Z),
										getState: Z.getState.bind(Z),
										includeFreeform: !1,
										includeListening: H,
										includeSmartTips: T,
										includeSpeaking: B,
										levelData: J,
										params: o,
										sessionWillStartRightAway: !0
									});
								window.duoBot.challenges = h.session?.challenges; // duobot: added
								window.duoBot.currentChallengeIdx = 0; // duobot: added
								if ("regular" !== h.type)
									throw Error(`Trying to start a ${h.type} session from the regular session page`);
								let v, _;
								if (h.session.type === ce.FF.ChessMatch) {
									const e = await se.d3.createBotMatch(A.id, {
										fromLanguage: E.fromLanguage,
										sectionIndexInPath: void 0 === (null == J ? void 0 : J.unitIndex) ? void 0 : (0,
											hs.Kq)(J.unitIndex, I),
										sectionNumber: null != Q ? Q : (0,
											hs.Kq)(null !== (a = null == g ? void 0 : g.unitIndex) && void 0 !== a ? a : 0, I) + 1,
										timezone: (0,
											Xe.NP)()
									})
										, t = null !== (s = null === (r = null === (n = null == J ? void 0 : J.level.pathLevelClientData) || void 0 === n ? void 0 : n.sessionMetadatas) || void 0 === r ? void 0 : r[0]) && void 0 !== s ? s : {};
									h.session = {
										...h.session,
										metadata: t
									},
										h.session.challenges = [{
											id: e.match.id,
											type: ce.Sm.ChessMatch,
											...e,
											challengeResponseTrackingProperties: {},
											metadata: {},
											solutionTranslation: "",
											trackingProperties: {}
										}],
										v = e.match.playerColor
								} else if (h.session.type === ce.FF.ChessPvpMatch) {
									const e = null === (i = null === (l = c.state) || void 0 === l ? void 0 : l.chessPvp) || void 0 === i ? void 0 : i.joinResponse;
									if (!e)
										return (0,
											oe.Kp)("Missing chess PvP join response on /chess-pvp-session", {
												data: {
													pathname: c.pathname
												}
											}),
											void le();
									h.session.challenges = [{
										id: e.match.id,
										type: ce.Sm.ChessPvpMatch,
										...e,
										challengeResponseTrackingProperties: {},
										metadata: {},
										solutionTranslation: "",
										trackingProperties: {}
									}],
										v = e.match.playerColor;
									const t = (0,
										ki.O)("web_fetch_avatars_info", void 0, (0,
											f.Mb)(Z.getState())) ? void 0 : await se.Kz.getUserBuiltAvatar(e.opponentId).catch((t => {
												(0,
													oe.Kp)("Failed to prefetch PvP opponent built avatar", {
														data: {
															err: String(t),
															opponentId: e.opponentId
														}
													})
											}
											));
									_ = {
										boardFen: e.match.boardFen,
										clocksUpdatedAtMs: Date.now(),
										gameEnd: void 0,
										isOpponentDisconnected: !1,
										isUserDisconnected: !1,
										matchId: e.match.id,
										matchStartedAtMs: void 0,
										moveHistory: e.match.moveHistory,
										opponentBuiltAvatar: t,
										opponentExpression: vi.XX,
										optimisticSnapshot: void 0,
										playerClocks: {
											black: e.match.blackPlayerClock,
											white: e.match.whitePlayerClock
										},
										playerColor: e.match.playerColor,
										userExpression: vi.XX
									}
								}
								if ((0,
									Jt.Aq)("session JSON: ", h.session),
									ae.current.signal.aborted)
									throw new bi.$K;
								p((0,
									Re.vP)({
										chessPlayerColor: v,
										chessPvpInitialState: _,
										levelData: J,
										session: h.session,
										sessionParams: h.sessionParams,
										sessionPrefetchedTimestamp: h.sessionPrefetchedTimestamp,
										sessionRouteParams: o,
										speakIneligibleReasons: u
									}))
							} catch (e) {
								e instanceof bi.$K ? console.warn(e.message) : (e instanceof bi.w ? (0,
									oe.Kp)(e) : (0,
										oe.vU)(e),
									le())
							}
						}
						)(),
						() => {
							ae.current.abort(),
								p({
									type: "PLAYER_RESET"
								}),
								sa.Z.remove("welcome_fork_to_session_start")
						}
				}
				), []),
					s.useEffect((() => {
						switch (te) {
							case "practice":
								(0,
									wi.o7)(c);
								break;
							case "preview":
								(0,
									V.track)("preview_session_start", {})
						}
					}
					), [te]),
					s.createElement(s.Fragment, null, T && void 0 !== E.smartTips ? s.createElement(Ai.b0, {
						smartTips: E.smartTips
					}) : null, s.createElement(d.Z, {
						className: "_2y3-N",
						delay: 500,
						message: null != ne ? ne : void 0,
						minDuration: 3e3,
						ready: re,
						type: "large"
					}, (({ hasShown: t }) => s.createElement(s.Fragment, null, s.createElement(zi, {
						...e,
						challengeToggleState: h,
						correctChallenges: v,
						course: E,
						currentChallenge: y,
						currentCourseHistory: b,
						dispatch: p,
						earnbackMultiSessionStats: S,
						freshLevelData: J,
						freshLevelSessionAvailable: ee,
						hasXpBoost: k,
						isDesktop: T,
						isModalOpen: C,
						isZombieMode: w,
						items: x,
						onRequestClose: le,
						path: R,
						pathSectioned: I,
						player: L,
						sessionTime: M,
						setDisableBlocking: $,
						shouldBlockScreen: K,
						skills: F,
						store: Z,
						subjectToUserHearts: D,
						user: A
					}), t ? null : s.createElement(Gi, null)))))
			}
			, Vi = ({ children: e, hasSlidingContent: t, header: a, isPadded: n, footer: l, footerSlideKey: i, isOverlayFooter: o, lockFooterHeight: c, overrideNoFooter: d }) => {
				const [u, p] = (e => {
					const [t, a] = s.useState(0)
						, n = s.useRef(e);
					return s.useLayoutEffect((() => {
						n.current = e
					}
					), [e]),
						[t, (0,
							m.Z)((e => {
								var t, r, s;
								n.current || a(null !== (s = null === (r = null === (t = e.borderBoxSize) || void 0 === t ? void 0 : t[0]) || void 0 === r ? void 0 : r.blockSize) && void 0 !== s ? s : e.contentRect.height)
							}
							))]
				}
				)(null != c && c);
				return s.createElement("div", {
					className: "_3yE3H"
				}, s.createElement("div", {
					className: n ? "_2G9ED _29gfw" : "_29gfw",
					style: o && u > 0 ? {
						"--overlay-footer-height": `${u}px`
					} : void 0
				}, a ? s.createElement("div", {
					className: "wqSzE"
				}, a) : null, s.createElement("div", {
					className: r()({
						"RMEuZ _1GVfY": a && l && !o,
						"_2L1Oz RMEuZ _1GVfY": a && (o || !l) && !d,
						"_1QQpk RMEuZ _1GVfY": !a && l,
						"_1dn61 RMEuZ _1GVfY": !a && !l
					})
				}, e), t ? s.createElement(zl.Z, {
					className: l ? pi : void 0,
					slideElementKey: i
				}, l) : l ? s.createElement("div", {
					className: r()(pi, {
						_2EBQ5: o
					}),
					ref: o ? p : void 0
				}, l) : null))
			}
			;
		class zi extends s.Component {
			constructor() {
				super(...arguments),
					this.state = {
						currentSessionEndSlide: 0,
						ribbonColorOverride: void 0,
						userJustRegistered: 1e3 * this.props.user.creationDate >= Date.now() - fi.g3
					},
					this.shouldWarnBeforeQuitting = !0,
					this.calculatorPaneRef = s.createRef(),
					this.isSubmittable = () => {
						const { currentChallenge: e, challengeToggleState: t, player: { challengeStates: a, currentIndex: n, session: r, smartTipToShow: s, status: l } } = this.props
							, i = a[n];
						switch (l) {
							case St.c.Guessing:
								return e && (0,
									le.w4)({
										challenge: e,
										challengeState: i,
										challengeToggleState: t,
										session: r
									});
							case St.c.SmartTip:
								return void 0 !== (null == s ? void 0 : s.guess);
							default:
								return !1
						}
					}
					,
					this.handleKeydown = e => {
						var t;
						const { player: a, player: { inLessonTipShowing: n } } = this.props
							, { currentSessionEndSlide: r } = this.state;
						if (e.isComposing)
							return;
						((0,
							yn.b)(e, "slowTts") || (0,
								yn.b)(e, "tts")) && e.preventDefault();
						const s = a.status === St.c.EndCarousel ? null === (t = a.slideData[r]) || void 0 === t ? void 0 : t.type : void 0;
						if ("createProfile" !== s && "plusNewYears" !== s && "plusPromoCarousel" !== s && "plusPromoInterstitial" !== s && !n)
							switch (e.key) {
								case "Backspace":
									if (!e.target.matches("input[type=text], textarea, span"))
										return e.preventDefault(),
											e.stopPropagation(),
											!1;
									break;
								case "Enter":
									return "visible" !== this.footerType && "overlay" !== this.footerType || (e.preventDefault(),
										e.stopPropagation(),
										this.handleNextButtonClick()),
										!1
							}
					}
					,
					this.handleKeyup = e => {
						((0,
							yn.b)(e, "slowTts") || (0,
								yn.b)(e, "tts")) && e.preventDefault()
					}
					,
					this.handleMathSupportClick = () => {
						const { currentChallenge: e, dispatch: t } = this.props;
						void 0 !== e && (t({
							type: "SET_MATH_SUPPORT_OPENED"
						}),
							t({
								options: {
									challengeId: e.id,
									instruction: this.mathProblemStatement.instruction,
									name: G.t.MathSupport,
									supportCenterInfo: this.mathSupportCenterInfo
								},
								type: "TOGGLE_MODAL"
							}))
					}
					,
					this.handleMathHintClick = () => {
						const { dispatch: e } = this.props
							, t = this.mathHint;
						t && (e({
							type: "SET_MATH_HINT_OPENED"
						}),
							e({
								options: {
									hint: t,
									name: G.t.MathHint
								},
								type: "TOGGLE_MODAL"
							}))
					}
					,
					this.handleLeftButtonClick = () => {
						const { dispatch: e, onRequestClose: t, player: a, player: { sessionParams: n } } = this.props
							, { currentSessionEndSlide: r } = this.state;
						switch (a.status) {
							case St.c.Guessing:
								this.mathHint && this.handleMathHintClick();
								break;
							case St.c.EarnbackSplash:
							case St.c.SectionTestSplash:
							case St.c.CapstoneReviewSplash:
							case St.c.UnitTestSplash:
								t(!0);
								break;
							case St.c.EndCarousel:
								{
									const s = a.slideData[r];
									if (void 0 === s) {
										t();
										break
									}
									switch (s.type) {
										case "friendsQuestComplete":
										case "friendsQuestGift":
										case "streakExtended":
											e({
												type: "sessionEnd/DISMISSED"
											}),
												this.nextSessionEndSlide() || t();
											break;
										case "friendsQuestProgress":
											{
												e({
													type: "sessionEnd/DISMISSED"
												});
												const n = s.attachedSlides;
												n.length > 0 && (0,
													Ei.Jy)({
														attachedSlides: n,
														currentIndex: r,
														playerSlideData: a.slideData
													}) ? this.nextSessionEndSlide(n.length + 1) || t() : this.nextSessionEndSlide() || t();
												break
											}
										case "finalLevelFailed":
											e({
												type: "sessionEnd/DISMISSED"
											}),
												(0,
													V.track)("final_level_failure_screen_dismiss", {
														lesson_index: n.lessonIndex
													}),
												t()
									}
								}
						}
					}
					,
					this.handleNextButtonClick = () => {
						var e, t, a, n, r, s, l, i, o, c, d;
						const { dispatch: u, earnbackMultiSessionStats: m, freshLevelData: p, freshLevelSessionAvailable: g, history: h, isDesktop: v, onRequestClose: f, player: _, player: { session: E, sessionParams: y }, store: b, user: S } = this.props
							, { currentSessionEndSlide: k } = this.state
							, C = window.performance.now();
						switch (u({
							id: void 0,
							type: "SET_POPOVER"
						}),
						_.status) {
							case St.c.Blaming:
								if ((0,
									oi.a)(b.getState())) {
									const r = E.challenges[_.currentIndex]
										, s = null !== (t = null === (e = r.gradingResult) || void 0 === e ? void 0 : e.correct) && void 0 !== t && t
										, l = null !== (n = null === (a = r.gradingResult) || void 0 === a ? void 0 : a.multiStepWillForceAdvance) && void 0 !== n && n;
									u(s || l ? (0,
										Re.n4)() : {
										status: St.c.Guessing,
										type: "SET_PLAYER_STATUS"
									})
								} else
									sa.Z.start("challenge_continue", {
										startTime: C
									}),
										this.advanceSession();
								break;
							case St.c.CoachDuo:
							case St.c.HardModeDuo:
							case St.c.MathRetryBlaming:
							case St.c.MathSkipBlaming:
							case St.c.MatchMadnessInterstitial:
							case St.c.PartialXpDuo:
							case St.c.SmartTipBlaming:
								sa.Z.start("challenge_continue", {
									startTime: C
								}),
									this.advanceSession();
								break;
							case St.c.CharacterWriteRetryBlaming:
							case St.c.SpeakRetryBlaming:
								u({
									status: St.c.Guessing,
									type: "SET_PLAYER_STATUS"
								});
								break;
							case St.c.ChessRetryBlaming:
								u({
									type: "CHESS_RETRY"
								}),
									u({
										status: St.c.Guessing,
										type: "SET_PLAYER_STATUS"
									});
								break;
							case St.c.EndCarousel:
								{
									const e = _.slideData[k];
									if (void 0 === e) {
										f();
										break
									}
									const t = e.type;
									let a;
									switch (t) {
										case "achievementUnlocked":
										case "checkpointComplete":
										case "chestLingotsReward":
										case "courseCompletionTrophy":
										case "dailyQuestComplete":
										case "dailyQuestFirst":
										case "dailyQuestHalfway":
										case "dailyQuestReward":
										case "finalLevelLesson":
										case "friendStreakInviteOffer":
										case "friendStreakUpdate":
										case "heartRefill":
										case "leaderboardDemoZone":
										case "leaderboardJoin":
										case "leaderboardMoveUpPrompt":
										case "leaderboardPromoZone":
										case "leaderboardRankIncreaseLarge":
										case "leaderboardRankIncreaseSmall":
										case "leaderboardTopThree":
										case "levelUpChest":
										case "milestoneStreakFreeze":
										case "mistakesInboxEmpty":
										case "monthlyChallengeComplete":
										case "monthlyGoal":
										case "placementConfirmation":
										case "schoolsClassroomLeaderboardMoveUp":
										case "sessionComplete":
										case "streakFreezeChestReward":
										case "streakNudge":
										case "streakSociety":
										case "streakSocietyFreezes":
										case "streakSocietyProgress":
										case "streakSocietyVip":
										case "streakSocietyVipUpdate":
										case "streakSocietyWelcomeChest":
										case "scoreProgressTouchPoint":
										case "scoreLinkedinSync":
											u({
												type: "sessionEnd/DISMISSED"
											});
											break;
										case "earlyStreakMilestonePrompt":
										case "finalLevelFailed":
										case "finalLevelPartialXp":
										case "finalLevelPromotion":
										case "streakFreezeGift":
											u({
												type: "sessionEnd/CTA_CLICK"
											});
											break;
										case "friendsQuestComplete":
											(0,
												Ei.Jy)({
													attachedSlides: e.attachedSlides,
													currentIndex: k,
													playerSlideData: _.slideData
												}),
												u((0,
													ai.AG)(e.friendUser.userId));
											break;
										case "friendsQuestProgress":
											(0,
												Ei.Jy)({
													attachedSlides: e.attachedSlides,
													currentIndex: k,
													playerSlideData: _.slideData
												}),
												u({
													type: "sessionEnd/CTA_CLICK"
												});
											break;
										case "friendsQuestGift":
											u({
												type: "sessionEnd/CTA_CLICK"
											}),
												u((0,
													ai.kS)({
														purchasingId: S.id,
														receivingId: e.friendUser.userId
													}));
											break;
										case "friendsQuestReward":
											u({
												type: "sessionEnd/CTA_CLICK"
											}),
												(0,
													bt.gQ)("debugSlides") || u((0,
														Ii.Gq)());
											break;
										case "createProfile":
										case "immersivePlus":
										case "plusNewYears":
										case "plusPromoCarousel":
										case "plusPromoInterstitial":
										case "practiceHubPromo":
											break;
										case "streakExtended":
											if (u({
												type: "sessionEnd/CTA_CLICK"
											}),
												e.showEarnbackOffer) {
												const e = null !== (s = null === (r = S.streakRepairOffer) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0;
												a = () => u(v ? {
													options: {
														lastStreakLength: e,
														name: G.t.StreakEarnback,
														onCtaClick: () => {
															u({
																type: "PLAYER_REMOUNT"
															})
														}
														,
														onDismiss: n
													},
													type: "TOGGLE_MODAL"
												} : {
													options: {
														lastStreakLength: e,
														name: "STREAK_EARNBACK",
														onCtaClick: () => {
															u({
																type: "PLAYER_REMOUNT"
															})
														}
														,
														onDismiss: n
													},
													type: "TOGGLE_DRAWER"
												})
											}
											break;
										case "dailyRefreshOnboarding":
											u({
												shouldReturnToSections: !1,
												type: "SET_SHOULD_RETURN_TO_SECTIONS"
											});
											break;
										default:
											(0,
												Pe.RJ)(t)
									}
									const n = () => {
										if (!this.nextSessionEndSlide(1))
											if (y.isFinalLevel && !_.endedEarly && p && "legendary" !== p.level.state && g) {
												const { level: e } = p;
												E.failed && (0,
													V.track)("final_level_failure_screen_try_again_tap", {
														lesson_index: e.finishedSessions - 1,
														total_lessons: e.totalSessions
													}),
													f()
											} else
												"dailyRefreshOnboarding" === t ? h.push(Li.B6) : (y.type === ce.FF.DuoRadio && (0,
													V.track)("duo_radio_episode_end", {
														action: "continue"
													}),
													f())
									}
										;
									if (void 0 !== a) {
										a();
										break
									}
									n();
									break
								}
							case St.c.Guessing:
								if (!this.isSubmittable())
									return void console.log("Challenge cannot be submitted.");
								sa.Z.start("challenge_grade", {
									startTime: C
								}),
									u((0,
										Re.YK)(!1, Date.now()));
								break;
							case St.c.AlphabetTipSplash:
							case St.c.GrammarSkillSplash:
								u({
									shouldShow: !0,
									type: "TOGGLE_IN_LESSON_TIP"
								}),
									(0,
										V.track)("explanation_ad_start", {
											alphabet_id: y.alphabetId,
											is_grammar_skill: _.status === St.c.GrammarSkillSplash
										});
								break;
							case St.c.EarnbackSplash:
								m && S.streakRepairOffer ? (0,
									V.track)("streak_earnback_session_start", {
										lesson_number: m.sessionsCompleted + 1,
										previous_streak_length: S.streakRepairOffer.length,
										total_lessons: m.totalSessions
									}) : (0,
										oe.Kp)("Showing earnback splash but missing information", {
											data: {
												earnbackMultiSessionStats: m,
												streakRepairOffer: S.streakRepairOffer
											}
										}),
									this.sessionStart();
								break;
							case St.c.CapstoneReviewSplash:
							case St.c.CoachDuoSplash:
							case St.c.EasierPlacementSplash:
							case St.c.LegendaryDuo:
							case St.c.MatchMadnessSplash:
							case St.c.MistakesReviewDuo:
							case St.c.PracticeHubDuo:
							case St.c.VisiblePersonalizationSplash:
								this.sessionStart();
								break;
							case St.c.UnitReviewSplash:
								(0,
									V.track)("unit_review_session_start_tapped", {
										target: "start",
										unit_index: null !== (i = null === (l = _.levelData) || void 0 === l ? void 0 : l.unitIndex) && void 0 !== i ? i : -1
									}),
									this.sessionStart();
								break;
							case St.c.SectionTestSplash:
								(0,
									V.track)("section_test_session_start_tapped", {
										section_index: null !== (o = y.sectionIndex) && void 0 !== o ? o : -1,
										target: "start"
									}),
									this.sessionStart();
								break;
							case St.c.UnitTestSplash:
								(0,
									V.track)("unit_test_session_start_tapped", {
										target: "start",
										unit_index: null !== (d = null === (c = _.levelData) || void 0 === c ? void 0 : c.unitIndex) && void 0 !== d ? d : -1
									}),
									this.sessionStart();
								break;
							case St.c.Showing:
								u({
									type: "CONTINUE_CURRENT_CHALLENGE"
								});
								break;
							case St.c.SmartTip:
								if (!this.isSubmittable())
									return void console.log("Smart tip cannot be submitted.");
								u((0,
									ri.C)(Date.now()));
								break;
							case St.c.CoachDuoSliding:
							case St.c.CoachDuoSubmitting:
							case St.c.Grading:
							case St.c.HardModeDuoSliding:
							case St.c.PartialXpDuoSliding:
							case St.c.Sliding:
							case St.c.SmartTipSliding:
							case St.c.Submitting:
								break;
							default:
								throw (0,
									Pe.RJ)(_.status),
								Error(`Unexpected player status: ${_.status}`)
						}
					}
					,
					this.handleSkipButtonClick = async () => {
						const { currentChallenge: e, dispatch: t, isDesktop: a, player: { challengeStates: n, currentIndex: r, session: s, sessionParams: l } } = this.props
							, i = n[r]
							, o = (0,
								Ni.yn)({
									challenge: e,
									challengeState: i,
									isDesktop: a,
									session: s,
									sessionParams: l
								});
						switch (o) {
							case "broken-tts":
								(0,
									V.track)("skipped_broken_tts", {
										challenge_id: e.id,
										challenge_type: e.type
									});
								break;
							case "cant-listen":
								(0,
									V.track)("listen_skipped", {
										...s.trackingProperties,
										challenge_type: He.SJ[e.type]
									}),
									t({
										listenDisabledUntil: (0,
											Xe.Zo)() + Hi,
										type: "DISABLE_LISTEN"
									});
								break;
							case "cant-speak":
								(0,
									V.track)("speak_skipped", {
										...s.trackingProperties,
										challenge_type: He.SJ[e.type]
									}),
									t({
										speakDisabledUntil: (0,
											Xe.Zo)() + Hi,
										type: "DISABLE_SPEAK"
									})
						}
						await t((0,
							Re.YK)(!0, Date.now())),
							"broken-tts" === o && this.advanceSession()
					}
					,
					this.handleShowMathGradingFeedbackClick = () => {
						var e, t, a;
						const { dispatch: n, currentChallenge: r } = this.props;
						if (r.type !== ce.Sm.MathChallengeBlob)
							return;
						const s = r.challengeBlob
							, l = null === (e = r.gradingResult) || void 0 === e ? void 0 : e.longFormFeedbackData;
						if (!l || !Mi.zn(s))
							return void (0,
								oe.Kp)("Math grading feedback modal cannot be shown", {
									data: {
										feedback: l,
										shirt: Mi.zn(s) ? s.shirt : void 0
									}
								});
						const { shirt: i, instruction: o } = s
							, c = (null === (t = r.gradingResult) || void 0 === t ? void 0 : t.shirtPantInteractiveDiagram) ? {
								html: r.gradingResult.shirtPantInteractiveDiagram.diagramHTML,
								resources: r.gradingResult.shirtPantInteractiveDiagram.resources,
								type: "web"
							} : void 0;
						n({
							options: {
								challengeInstruction: o,
								feedback: l,
								name: G.t.MathGradingFeedback,
								onContinue: () => {
									this.advanceSession()
								}
								,
								shirt: i,
								shirtPantInteractiveDiagram: c,
								trackingProps: {
									challengeId: r.id,
									isMistake: !(null === (a = r.gradingResult) || void 0 === a ? void 0 : a.correct),
									trackingMetadata: r.trackingMetadata
								}
							},
							type: "TOGGLE_MODAL"
						})
					}
					,
					this.handleShowInLessonTipClick = () => {
						const { dispatch: e } = this.props;
						e({
							shouldShow: !0,
							type: "TOGGLE_IN_LESSON_TIP"
						})
					}
					,
					this.nextSessionEndSlide = (e = 1) => {
						const t = this.state.currentSessionEndSlide + e;
						return t < this.props.player.slideData.length && (this.setCurrentSessionEndSlide(t),
							!0)
					}
					,
					this.setCurrentSessionEndSlide = e => this.setState({
						currentSessionEndSlide: e
					}),
					this.advanceSession = () => {
						const { dispatch: e, isDesktop: t, player: a } = this.props;
						(0,
							Le.Ap)();
						const n = (0,
							jl.hM)(a);
						if (n && e({
							challenges: n,
							type: "REPLACE_WITH_ADAPTIVE_CHALLENGES"
						}),
							(0,
								Ti.hF)(a)) {
							const a = () => {
								e((0,
									Re.Z3)())
							}
								;
							e(t ? {
								options: {
									name: G.t.EasierLessonNudge,
									onCtaClick: this.redirectToEasierOnboardingLesson,
									onDismiss: a
								},
								type: "TOGGLE_MODAL"
							} : {
								options: {
									name: "EASIER_LESSON_NUDGE",
									onCtaClick: this.redirectToEasierOnboardingLesson,
									onDismiss: a
								},
								type: "TOGGLE_DRAWER"
							}),
								e({
									type: "EASIER_LESSON_NUDGE_SHOWN"
								})
						} else
							e((0,
								Re.Z3)())
					}
					,
					this.sessionStart = () => {
						var e, t, a;
						const { course: n, dispatch: r, hasXpBoost: s, location: i, path: o, player: { currentIndex: c, inLessonTipResources: d, levelData: u, session: m, sessionParams: p, sessionPrefetchedTimestamp: g, speakIneligibleReasons: h = [] }, pathSectioned: v, store: f } = this.props
							, _ = (0,
								fi.S6)(f.getState());
						if (_)
							return r({
								model: _,
								timestamp: Date.now(),
								type: "COACH_DUO_SHOWN"
							}),
								r({
									model: _,
									type: "SET_COACH_DUO_MODEL"
								}),
								void r({
									status: St.c.CoachDuoSplash,
									type: "SET_PLAYER_STATUS"
								});
						if (p.isGrammarSkill) {
							const e = m.challenges[c]
								, t = e.explanation ? d[e.explanation.url] : void 0;
							t && r({
								explanationResource: t,
								type: "SET_IN_LESSON_TIP"
							})
						}
						const E = (0,
							Fi.cy)(this.props.items);
						!p.isFinalLevel || this.props.user.hasPlus || (0,
							Oi.Ye)(this.props.user) || E && r(ni.xD(E, "final_level"));
						const y = n.pathSectioned.filter((e => e.units.every((e => e.levels.every((e => (0,
							hs.Wc)((0,
								hs.xV)(e)))))))).length;
						r((0,
							Re.yj)());
						const b = (0,
							hs.EH)(v, u, p.type)
							, S = (0,
								_i.$l)(n) && (0,
									Bn.uc)(m.type) && void 0 !== u ? (0,
										Es.vu)(n.pathTabsSummary, b.section_index) : void 0;
						(0,
							V.track)("session_start", {
								...m.trackingProperties,
								...l.ZP.pick((0,
									hs.eK)(o), "num_levels_completed", "num_skill_levels_completed", "num_units_completed", "path_complete"),
								...l.ZP.pick(b, "absolute_unit_index", "path_level_id", "section_index", "unit_in_section_index", "unit_index", "num_sections", "num_units_in_section", "num_nodes_in_unit", "num_sessions_in_node"),
								...void 0 === S ? {} : {
									section_group: S
								},
								alphabet_id: p.alphabetId,
								already_completed: (0,
									hs.Wc)(null == u ? void 0 : u.level.state),
								is_first_session_in_course: n.placementTestAvailable,
								is_node_redo: p.isRedoingPassedNode,
								level_index: p.levelIndex,
								level_index_in_unit: null == u ? void 0 : u.levelIndex,
								level_session_index: p.levelSessionIndex,
								num_challenges_gt: m.challenges.length,
								num_placement_starts: 0,
								num_sections_completed: y,
								offlined_session: void 0 !== g,
								offlined_session_timestamp: g,
								path_extension: !!(0,
									hs.Mj)(null == u ? void 0 : u.level),
								session_is_legendary: p.isFinalLevel,
								...(0,
									Bn.uc)(m.type) ? {
									type: m.type.toLowerCase()
								} : {},
								skill_id: p.skillId,
								skill_ids: null === (e = p.skillIds) || void 0 === e ? void 0 : e.join(","),
								speak_ineligible: h.length > 0,
								speak_ineligible_reasons: h.join(","),
								via: null === (a = null === (t = i.state) || void 0 === t ? void 0 : t.session) || void 0 === a ? void 0 : a.via,
								xp_boost_equipped: s
							})
					}
					,
					this.sessionSubmitFailed = () => {
						const { onRequestClose: e, player: { sessionSubmitError: t } } = this.props;
						t instanceof bi.$K || (0,
							se.Hx)(t) && "ECONNABORTED" === t.code ? console.warn(t.message) : t instanceof bi.Di ? (console.warn(t.message),
								(0,
									Li.Zs)(Li.B6)) : (t && (0,
										oe.vU)(t),
										e())
					}
					,
					this.sessionSubmitted = () => {
						const { dispatch: e, earnbackMultiSessionStats: t, path: a, player: n, player: { session: r }, sessionTime: s } = this.props;
						if (e({
							sessionTime: s.current,
							type: "SET_SESSION_TIME"
						}),
							(0,
								Le.GN)(r.failed ? Le.Tc.FAILED : Le.Tc.PASSED),
							sa.Z.finish("session_end_grade"),
							void 0 !== t && (0,
								Di.SZ)(t)) {
							const n = (0,
								Di._m)(t.sessionsCompleted, a);
							r.type === ce.FF.GlobalPractice && "/practice" === n ? e({
								type: "PLAYER_REMOUNT"
							}) : this.props.history.replace(n, {
								session: {
									via: "earnback"
								}
							})
						} else
							n.slideData.length ? (this.setState({
								currentSessionEndSlide: 0
							}),
								e({
									status: St.c.EndCarousel,
									type: "SET_PLAYER_STATUS"
								})) : ((0,
									oe.Kp)("No slide data found for session end carousel"),
									this.props.onRequestClose())
					}
					,
					this.redirectToEasierOnboardingLesson = () => {
						const { history: e, location: t } = this.props
							, { unitOrSectionNumber: a } = (0,
								Bn.mi)(t.pathname)
							, n = parseInt(a, 10)
							, r = (0,
								Ti.uv)(n - 1);
						this.shouldWarnBeforeQuitting = !1,
							e.push(r, {
								session: {
									via: "onboarding_easier_lesson"
								}
							})
					}
			}
			get currentSessionEndSlideData() {
				const { player: e } = this.props
					, { currentSessionEndSlide: t } = this.state;
				return e.status === St.c.EndCarousel ? e.slideData[t] : void 0
			}
			get isEndSlideWithHiddenFooter() {
				var e;
				const t = null === (e = this.currentSessionEndSlideData) || void 0 === e ? void 0 : e.type;
				return "createProfile" === t || "immersivePlus" === t || "finalLevelLesson" === t || "finalLevelPromotion" === t || "monthlyChallengeComplete" === t || "plusNewYears" === t || "plusPromoCarousel" === t || "practiceHubPromo" === t || "scoreProgressTouchPoint" === t || "scoreLinkedinSync" === t
			}
			get footerType() {
				const { isDesktop: e, player: t, player: { coachDuo: { model: a }, levelData: n } } = this.props
					, r = (0,
						Bn.M4)().includes(t.session.challenges[t.currentIndex].type)
					, s = t.session.type === ce.FF.MathMatchPractice
					, l = s && (t.status === St.c.MatchMadnessSplash || t.status === St.c.MatchMadnessInterstitial || t.status === St.c.EndCarousel)
					, i = void 0 !== n && "duo_radio" === n.level.type && t.status !== St.c.EndCarousel || s && !l || r && [St.c.Guessing, St.c.Showing, St.c.Sliding].includes(t.status) || this.isEndSlideWithHiddenFooter ? "none" : "rive" !== (null == a ? void 0 : a.template.type) || e || t.status !== St.c.CoachDuo && t.status !== St.c.CoachDuoSliding && t.status !== St.c.CoachDuoSplash && t.status !== St.c.CoachDuoSubmitting ? "visible" : "hidden"
					, o = [St.c.HardModeDuo, St.c.HardModeDuoSliding].includes(t.status);
				return r && "visible" === i && !o ? "overlay" : !(0,
					Bn.uc)(t.session.type) || s || e || "visible" !== i || t.status === St.c.EndCarousel ? i : "overlay"
			}
			get mathProblemStatement() {
				const { currentChallenge: e } = this.props;
				if ((null == e ? void 0 : e.type) === ce.Sm.MathChallengeBlob) {
					const t = e.challengeBlob;
					if ((e => "tutor" === (null == e ? void 0 : e.layout))(t))
						return {
							instruction: void 0,
							shirt: void 0
						};
					const a = "shirt" in t && void 0 !== t.shirt && null !== t.shirt && "dynamic_text" !== t.shirt.type ? t.shirt : void 0;
					return {
						instruction: t.instruction,
						shirt: a
					}
				}
				return {
					instruction: void 0,
					shirt: void 0
				}
			}
			get calculatorFunctions() {
				const { currentChallenge: e } = this.props;
				if ((null == e ? void 0 : e.type) === ce.Sm.MathChallengeBlob) {
					const t = e.challengeBlob;
					if ("calculator_functions" in t)
						return t.calculator_functions
				}
			}
			get calculatorTrackingProperties() {
				const { currentChallenge: e, player: t } = this.props;
				if ((null == e ? void 0 : e.type) !== ce.Sm.MathChallengeBlob)
					return;
				const a = e
					, { session: n } = t
					, r = {
						challenge_id: a.id,
						item_type: a.challengeBlob.layout,
						session_id: n.id
					}
					, s = this.props.freshLevelData;
				return (null == s ? void 0 : s.level.id) && (r.path_level_id = s.level.id),
					r
			}
			get mathSupportCenterInfo() {
				const { currentChallenge: e } = this.props;
				if ((null == e ? void 0 : e.type) === ce.Sm.MathChallengeBlob)
					return e.supportCenterInfo
			}
			get mathHint() {
				var e, t, a;
				const { currentChallenge: n } = this.props;
				if ((null == n ? void 0 : n.type) === ce.Sm.MathChallengeBlob) {
					const r = n;
					if (null === (e = r.hintBlobOverride) || void 0 === e ? void 0 : e.trim())
						try {
							const e = null === (t = JSON.parse(r.hintBlobOverride)) || void 0 === t ? void 0 : t.hint;
							if (Mi.kN(e))
								return e;
							(0,
								oe.Kp)("Invalid hintBlobOverride: failed type check.", {
									data: {
										hintBlobOverride: r.hintBlobOverride,
										parsedHint: e
									}
								})
						} catch (e) {
							(0,
								oe.Kp)("Failed to parse hintBlobOverride", e)
						}
					return null !== (a = r.challengeBlob.hint) && void 0 !== a ? a : void 0
				}
			}
			componentDidMount() {
				var e;
				const { dispatch: t, player: a, player: { challengeStates: n, currentIndex: r, inLessonTipResources: s, levelData: l, session: { challenges: i } }, skills: o } = this.props
					, c = i[r]
					, d = n[r];
				if (vt.U.addListener(document, "keydown", this.handleKeydown),
					vt.U.addListener(document, "keyup", this.handleKeyup),
					a.status === (0,
						Ni.ct)(c, d))
					this.sessionStart();
				else if (a.status === St.c.GrammarSkillSplash) {
					const e = l ? o[l.level.pathLevelClientData.skillId] : void 0
						, a = (null == e ? void 0 : e.explanation) ? s[e.explanation.url] : void 0;
					a ? t({
						explanationResource: a,
						type: "SET_IN_LESSON_TIP"
					}) : ((0,
						oe.vU)("No in-lesson tip was available on grammar skill splash screen"),
						this.sessionStart())
				} else if (a.status === St.c.AlphabetTipSplash) {
					const e = "alphabet" === (null == l ? void 0 : l.level.type) ? null == l ? void 0 : l.level.pathLevelClientData : void 0
						, a = (null == e ? void 0 : e.explanationUrl) ? s[null == e ? void 0 : e.explanationUrl] : void 0;
					a ? t({
						explanationResource: a,
						type: "SET_IN_LESSON_TIP"
					}) : ((0,
						oe.vU)("No in-lesson tip was available on alphabet tip splash screen"),
						this.sessionStart())
				}
				sa.Z.has("welcome_fork_to_session_start") ? sa.Z.finish("welcome_fork_to_session_start") : sa.Z.finish("lesson_start"),
					i.some((e => e.type === ce.Sm.MathChallengeBlob && (0,
						xi.I)(e.challengeBlob.layout))) && (null === (e = this.calculatorPaneRef.current) || void 0 === e || e.preload())
			}
			componentDidUpdate(e) {
				var t, a, n;
				const { player: { session: r, status: s } } = e
					, { currentChallenge: l, dispatch: i, player: o, player: { coachDuo: c, coachDuo: { model: d }, session: u, sessionParams: m, sessionSubmitError: p, sessionSubmitted: g } } = this.props;
				if ((void 0 !== p || g) && (this.shouldWarnBeforeQuitting = !1),
					!Bi(e) && Bi(this.props) && this.sessionSubmitFailed(),
					!Ui(e) && Ui(this.props) && this.sessionSubmitted(),
					s !== o.status)
					switch (o.status) {
						case St.c.CoachDuo:
						case St.c.CoachDuoSplash:
							if (void 0 === d)
								break;
							(0,
								V.track)("lesson_coach_shown", {
									cause: d.showReason,
									character_animations: "dialogue" === d.template.type || "rive" === d.template.type,
									message_index: null !== (t = d.template.trackingIndex) && void 0 !== t ? t : -1,
									session_type: o.session.type,
									specific_cause: (() => {
										switch (d.showReason) {
											case yi.w.AfterThirdMistakeCheckpointTest:
												return "after_third_mistake_checkpoint_test";
											case yi.w.BigRightStreak:
											case yi.w.BigRightStreakCheckpointTest:
											case yi.w.MediumRightStreakCheckpointTest:
											case yi.w.SmallRightStreak:
												return `${c.currentCorrectStreak}_right`;
											case yi.w.CapstoneHardExercises:
												return "capstone_review_hard_exercises";
											case yi.w.MistakesReview:
												return "review_mistakes";
											case yi.w.FirstCorrectCheckpointTest:
												return "first_question_correct";
											case yi.w.MidPointCheckpointTest:
												return "mid_point_checkpoint_test";
											case yi.w.FirstWrongCheckpointTest:
												return "first_question_wrong";
											case yi.w.FourQuestionsLeftCheckpointTest:
												return "four_questions_left_checkpoint_test";
											case yi.w.WrongStreak:
												return `${c.currentIncorrectStreak}_wrong`;
											default:
												return (0,
													Pe.RJ)(d.showReason),
													""
										}
									}
									)()
								});
							break;
						case St.c.SpeakRetryBlaming:
						case St.c.ChessRetryBlaming:
						case St.c.MathRetryBlaming:
						case St.c.MathSkipBlaming:
						case St.c.Blaming:
							sa.Z.finish("challenge_grade"),
								l.type === ce.Sm.Speak && sa.Z.finish("speech_grade"),
								(0,
									Si.qv)(this.props.user, this.props.subjectToUserHearts, o, i),
								m.isFinalLevel && r.heartsLeft !== u.heartsLeft && (0,
									V.track)("final_level_subtract_heart", {
										deactivated_hearts: 3 - u.heartsLeft
									}),
								o.status === St.c.SpeakRetryBlaming && i((0,
									Re.v1)()),
								o.status === St.c.Blaming && (null === (a = l.gradingResult) || void 0 === a ? void 0 : a.multiStepIsDialogue) && this.handleNextButtonClick(),
								u.type === ce.FF.MathMatchPractice && (null === (n = l.gradingResult) || void 0 === n ? void 0 : n.correct) && (clearTimeout(this.mathMatchMadnessAdvanceTimeout),
									this.mathMatchMadnessAdvanceTimeout = setTimeout((() => {
										this.advanceSession(),
											this.mathMatchMadnessAdvanceTimeout = void 0
									}
									), 500));
							break;
						case St.c.Guessing:
						case St.c.Showing:
							s === St.c.Sliding && sa.Z.finish("challenge_continue");
							break;
						case St.c.PartialXpDuo:
							(0,
								V.track)("final_level_partial_xp_show", {})
					}
			}
			componentWillUnmount() {
				const { dispatch: e, isModalOpen: t, player: { session: a } } = this.props;
				void 0 !== a && void 0 === a.endTime && e((0,
					Re.wZ)()),
					void 0 !== this.mathMatchMadnessAdvanceTimeout && (clearTimeout(this.mathMatchMadnessAdvanceTimeout),
						this.mathMatchMadnessAdvanceTimeout = void 0),
					vt.U.removeListener(document, "keydown", this.handleKeydown),
					vt.U.removeListener(document, "keyup", this.handleKeyup),
					t && e({
						options: void 0,
						type: "TOGGLE_MODAL"
					})
			}
			render() {
				var e, t, a, n, r, l, i, d, u, m, g, h, v, f, _, E, y, b, S;
				const { course: k, correctChallenges: C, currentChallenge: x, challengeToggleState: T, dispatch: w, earnbackMultiSessionStats: N, hasXpBoost: R, isDesktop: I, isZombieMode: L, onRequestClose: P, player: F, player: { coachDuo: { model: A }, currentIndex: Z, levelData: D, session: M, sessionParams: O, smartTipToShow: H }, sessionTime: B, setDisableBlocking: U, shouldBlockScreen: W, skills: z, user: $ } = this.props
					, { currentSessionEndSlide: K, ribbonColorOverride: q, userJustRegistered: X } = this.state
					, Y = F.challengeStates[Z]
					, Q = null === (e = this.currentSessionEndSlideData) || void 0 === e ? void 0 : e.type
					, J = R ? ns.K3 : 1
					, te = ((e, t) => {
						switch (e.status) {
							case St.c.CharacterWriteRetryBlaming:
							case St.c.ChessRetryBlaming:
							case St.c.CoachDuo:
							case St.c.CoachDuoSplash:
							case St.c.CoachDuoSliding:
							case St.c.CoachDuoSubmitting:
							case St.c.HardModeDuo:
							case St.c.HardModeDuoSliding:
							case St.c.LegendaryDuo:
							case St.c.MathRetryBlaming:
							case St.c.MathSkipBlaming:
							case St.c.MistakesReviewDuo:
							case St.c.PracticeHubDuo:
							case St.c.SmartTip:
							case St.c.SmartTipBlaming:
							case St.c.SmartTipSliding:
							case St.c.SpeakRetryBlaming:
							case St.c.Blaming:
							case St.c.Grading:
							case St.c.Guessing:
							case St.c.PartialXpDuo:
							case St.c.PartialXpDuoSliding:
							case St.c.Showing:
							case St.c.Sliding:
							case St.c.Submitting:
								return s.createElement(El, {
									key: -1,
									onQuitButtonClick: t
								});
							case St.c.AlphabetTipSplash:
							case St.c.CapstoneReviewSplash:
							case St.c.EarnbackSplash:
							case St.c.EasierPlacementSplash:
							case St.c.EndCarousel:
							case St.c.GrammarSkillSplash:
							case St.c.MatchMadnessSplash:
							case St.c.MatchMadnessInterstitial:
							case St.c.SectionTestSplash:
							case St.c.UnitReviewSplash:
							case St.c.UnitTestSplash:
							case St.c.VisiblePersonalizationSplash:
								return null;
							default:
								return (0,
									Pe.RJ)(e.status),
									null
						}
					}
					)(F, (() => {
						"placement" === F.sessionRouteParams.type && F.numChallengesCorrect / F.numChallengesAnswered <= .5 && F.numChallengesAnswered >= 1 ? w(I ? {
							options: {
								name: G.t.EasierLessonNudge,
								onCtaClick: this.redirectToEasierOnboardingLesson,
								onDismiss: () => P(!0)
							},
							type: "TOGGLE_MODAL"
						} : {
							options: {
								name: "EASIER_LESSON_NUDGE",
								onCtaClick: this.redirectToEasierOnboardingLesson,
								onDismiss: () => P(!0)
							},
							type: "TOGGLE_DRAWER"
						}) : P(!0)
					}
					));
				let ae = null;
				const ne = "duo_radio" === (null == D ? void 0 : D.level.type);
				let le = !0
					, ie = !1;
				switch (F.status) {
					case St.c.CoachDuo:
					case St.c.CoachDuoSplash:
					case St.c.CoachDuoSliding:
					case St.c.CoachDuoSubmitting:
						ie = !0,
							ae = s.createElement(zl.Z, {
								className: "static" === (null == A ? void 0 : A.template.type) ? mi : void 0,
								slideElementKey: `COACH_DUO_${Z}`
							}, F.status !== St.c.CoachDuoSliding && A ? "static" === A.template.type ? s.createElement(Rl, {
								animate: !0,
								type: I ? "coachBottom" : "coachLeft"
							}, A.template.message) : "dialogue" === A.template.type ? s.createElement(wr, {
								isPlaying: F.status === St.c.CoachDuo || F.status === St.c.CoachDuoSplash || F.status === St.c.CoachDuoSubmitting,
								template: A.template
							}) : "rive" === A.template.type ? s.createElement(Lr, {
								isPlaying: F.status === St.c.CoachDuo || F.status === St.c.CoachDuoSplash || F.status === St.c.CoachDuoSubmitting,
								onContinue: this.handleNextButtonClick,
								template: A.template
							}) : null : null);
						break;
					case St.c.LegendaryDuo:
					case St.c.PartialXpDuo:
					case St.c.PartialXpDuoSliding:
						ie = !0,
							ae = s.createElement(zl.Z, {
								className: mi,
								slideElementKey: `LEGENDARY_DUO_${Z}`
							}, s.createElement(Rl, {
								type: I ? "legendaryBottom" : "legendaryLeft"
							}, s.createElement("span", {
								className: "_3TqdF"
							}, F.status === St.c.LegendaryDuo ? (0,
								ee._i)(41857) : (0,
									ee._i)(65344, {
										xp: ns.Ms * J
									}))));
						break;
					case St.c.HardModeDuo:
					case St.c.HardModeDuoSliding:
						ie = !0,
							ae = X ? s.createElement(zl.Z, {
								className: mi,
								slideElementKey: `HARD_MODE_DUO_${Z}`
							}, F.status === St.c.HardModeDuo ? s.createElement(Rl, {
								animate: !0,
								type: "hardModeLeft"
							}, F.session.type === ce.FF.AlphabetLesson || F.session.type === ce.FF.AlphabetPractice ? (0,
								ee._i)(26296) : (0,
									ee._i)(1316)) : null) : s.createElement(zl.Z, {
										slideElementKey: `HARD_MODE_DUO_${Z}`
									}, F.status === St.c.HardModeDuo ? s.createElement(wr, {
										isPlaying: F.status === St.c.HardModeDuo,
										template: {
											animation: fi.R4,
											character: "duo",
											message: F.session.type === ce.FF.AlphabetLesson || F.session.type === ce.FF.AlphabetPractice ? (0,
												ee.H8)(26296) : (0,
													ee.H8)(1316),
											type: "dialogue"
										}
									}) : null);
						break;
					case St.c.MistakesReviewDuo:
						ie = !0,
							ae = s.createElement(zl.Z, {
								className: mi,
								slideElementKey: `MISTAKES_REVIEW_DUO_${Z}`
							}, s.createElement(Rl, {
								type: I ? "superCoachBottom" : "superCoachLeft"
							}, s.createElement("span", {
								className: gi
							}, (0,
								ee._i)(25566, {
									mistakesCount: M.challenges.length
								}))));
						break;
					case St.c.PracticeHubDuo:
						ie = !0,
							ae = s.createElement(zl.Z, {
								className: mi,
								slideElementKey: `PRACTICE_HUB_DUO_${Z}`
							}, s.createElement(Rl, {
								type: I ? "superCoachBottom" : "superCoachLeft"
							}, s.createElement("span", {
								className: gi
							}, (0,
								Ri.Jk)(O.type))));
						break;
					case St.c.SmartTip:
					case St.c.SmartTipBlaming:
					case St.c.SmartTipSliding:
						ie = !0,
							ae = s.createElement(zl.Z, {
								slideElementKey: `SMART_TIP_${Z}`
							}, void 0 !== H && void 0 !== $.learningLanguage ? s.createElement($l, {
								disabled: F.status !== St.c.SmartTip,
								dispatch: w,
								learningLanguage: $.learningLanguage,
								smartTipResource: H
							}) : null);
						break;
					case St.c.CharacterWriteRetryBlaming:
					case St.c.ChessRetryBlaming:
					case St.c.MathRetryBlaming:
					case St.c.MathSkipBlaming:
					case St.c.SpeakRetryBlaming:
					case St.c.Blaming:
					case St.c.Grading:
					case St.c.Guessing:
					case St.c.Showing:
					case St.c.Sliding:
					case St.c.Submitting:
						{
							const e = (0,
								Bn.M4)().includes(F.session.challenges[F.currentIndex].type);
							ie = !e,
								ae = s.createElement(zl.Z, {
									slideElementKey: ne || e ? "STATIC" : Z
								}, ne ? s.createElement(ls, {
									session: M,
									startIndex: Z
								}) : s.createElement(Er, {
									index: Z
								}));
							break
						}
					case St.c.EndCarousel:
						(O.isFinalLevel && "finalLevelLesson" === Q || "streakExtended" === (null === (t = this.currentSessionEndSlideData) || void 0 === t ? void 0 : t.type) && this.currentSessionEndSlideData.isEndOfPerfectWeek) && (le = !1),
							ae = s.createElement(is.Z, {
								currentSlide: K,
								isPadded: le,
								nativeAd: F.nativeAd,
								onNextClick: this.handleNextButtonClick,
								setRibbonColor: e => {
									this.setState({
										ribbonColorOverride: e
									})
								}
								,
								slideData: F.slideData
							});
						break;
					case St.c.EarnbackSplash:
						if (void 0 === N)
							throw Error("Tried to show earnback splash but was missing stats");
						if (void 0 === $.streakRepairOffer)
							throw Error("Tried to show earnback splash but does not have repairable streak");
						ae = [s.createElement(Vl, {
							data: {
								completedSessions: N.sessionsCompleted,
								previousStreakLength: $.streakRepairOffer.length,
								totalSessions: N.totalSessions,
								type: "earnback"
							},
							key: 1,
							splitLayout: !1
						})];
						break;
					case St.c.EasierPlacementSplash:
						ae = [s.createElement(Vl, {
							data: {
								sectionNumber: (null !== (n = null === (a = F.sessionParams) || void 0 === a ? void 0 : a.sectionIndex) && void 0 !== n ? n : -1) + 2,
								type: "easierPlacement"
							},
							key: 1,
							splitLayout: !1
						})];
						break;
					case St.c.AlphabetTipSplash:
						if ("alphabet" !== (null === (r = F.levelData) || void 0 === r ? void 0 : r.level.type))
							throw Error(`Tried to show alphabet tip splash for ineligible node type: ${null === (l = F.levelData) || void 0 === l ? void 0 : l.level.type}`);
						if (O.type !== ce.FF.AlphabetLesson && O.type !== ce.FF.AlphabetPractice)
							throw Error(`Tried to show alphabet tip splash for ineligible session type: ${O.type}`);
						if (void 0 === O.alphabetId)
							throw Error("Tried to show alphabet tip splash but alphabetId was undefined");
						ae = s.createElement(Vl, {
							data: {
								alphabetId: O.alphabetId,
								type: O.type
							},
							key: 1
						});
						break;
					case St.c.GrammarSkillSplash:
						{
							const e = M.skillId
								, t = O.isCustomIntroSkill && e ? null === (i = z[e]) || void 0 === i ? void 0 : i.explanation : x.explanation;
							ae = [t ? s.createElement(Vl, {
								data: {
									explanation: t,
									isCustomIntroSkill: O.isCustomIntroSkill,
									type: ce.FF.Lesson
								},
								key: 1
							}) : null];
							break
						}
					case St.c.CapstoneReviewSplash:
						if (!D)
							throw Error("No levelData found for capstone review splash.");
						if (O.type !== ce.FF.LexemePractice && O.type !== ce.FF.LevelReview)
							throw Error(`Tried to show capstone review splash for ineligible session type: ${O.type}`);
						ae = s.createElement(Vl, {
							data: {
								pathLevel: D.level,
								type: O.type,
								unitIndex: D.unitIndex
							},
							key: 1,
							splitLayout: !1
						});
						break;
					case St.c.MatchMadnessSplash:
						ae = s.createElement(Vl, {
							data: {
								type: ce.FF.MathMatchPractice
							},
							splitLayout: !1
						});
						break;
					case St.c.MatchMadnessInterstitial:
						{
							const e = F.session.challenges.reduce(((e, t) => {
								var a;
								return e + ((null === (a = t.gradingResult) || void 0 === a ? void 0 : a.correct) ? 1 : 0)
							}
							), 0);
							ae = s.createElement(Vl, {
								data: {
									numStars: e,
									type: ce.FF.MathMatchPractice
								},
								splitLayout: !1
							});
							break
						}
					case St.c.SectionTestSplash:
						if (!O.sectionIndex || !O.sectionType)
							throw Error("Missing section params for sectionTestSplash.");
						ae = s.createElement(Vl, {
							data: {
								sectionIndex: O.sectionIndex,
								sectionType: O.sectionType,
								type: ce.FF.SectionTest
							},
							key: 1,
							splitLayout: !1
						});
						break;
					case St.c.UnitReviewSplash:
						if (!D)
							throw Error("No levelData found for unit review splash.");
						ae = s.createElement(Vl, {
							data: {
								pathLevel: D.level,
								type: ce.FF.UnitReview,
								unitIndex: D.unitIndex,
								unitNumber: D.unitNumber
							},
							key: 1,
							splitLayout: !1
						});
						break;
					case St.c.UnitTestSplash:
						if (!D)
							throw Error("No level found for unit test splash.");
						ae = s.createElement(Vl, {
							data: {
								pathLevel: D.level,
								type: ce.FF.UnitTest,
								unitIndex: D.unitIndex,
								unitNumber: D.unitNumber
							},
							key: 1,
							splitLayout: !1
						});
						break;
					case St.c.VisiblePersonalizationSplash:
						if (void 0 === D)
							throw Error();
						if ("grammar" === (null === (d = M.sessionContext) || void 0 === d ? void 0 : d.contextType)) {
							ae = s.createElement(Vl, {
								data: {
									pathLevel: D.level,
									sessionContext: M.sessionContext,
									type: ce.FF.LexemePractice,
									unitIndex: D.unitIndex
								},
								key: 1,
								splitLayout: !1
							});
							break
						}
						if ("lexeme" === (null === (u = M.sessionContext) || void 0 === u ? void 0 : u.contextType)) {
							ae = s.createElement(Vl, {
								data: {
									pathLevel: D.level,
									sessionContext: M.sessionContext,
									type: ce.FF.LexemePractice,
									unitIndex: D.unitIndex
								},
								key: 1,
								splitLayout: !1
							});
							break
						}
						throw Error("Failed to generate visible personalization splash.");
					default:
						(0,
							Pe.RJ)(F.status)
				}
				const de = B.current >= 120 && (null !== (h = null === (g = null === (m = Y.guess) || void 0 === m ? void 0 : m.moveHistory) || void 0 === g ? void 0 : g.length) && void 0 !== h ? h : 0) >= 10
					, ue = (null === (v = M.challenges[Z]) || void 0 === v ? void 0 : v.type) === ce.Sm.ChessPvpMatch
					, me = null === (f = F.chessPvpMatchState) || void 0 === f ? void 0 : f.matchStartedAtMs
					, ge = void 0 === me ? 0 : Math.max(0, Date.now() - me)
					, he = ue && (!F.chessPvpMatchState || (0,
						cr.f0)({
							elapsedMs: ge,
							moveHistory: null !== (E = null === (_ = Y.guess) || void 0 === _ ? void 0 : _.moveHistory) && void 0 !== E ? E : []
						}))
					, ve = "none" === this.footerType ? null : s.createElement(Bs.ZP, {
						challenge: x,
						challengeState: Y,
						challengeToggleState: T,
						className: "_2HXQ9",
						coachDuoModel: A,
						currentCourse: k,
						currentSessionEndSlide: this.currentSessionEndSlideData,
						dispatch: w,
						inLessonTipAvailable: void 0 !== F.inLessonTip,
						isDesktop: I,
						isGrammar: null !== (y = F.sessionParams.isGrammarSkill) && void 0 !== y && y,
						isMathHintAvailable: void 0 !== this.mathHint,
						isSubmittable: this.isSubmittable,
						isZombieMode: L,
						onCalculatorClick: () => {
							var e;
							return null === (e = this.calculatorPaneRef.current) || void 0 === e ? void 0 : e.toggle()
						}
						,
						onHelpClick: this.handleMathSupportClick,
						onLeftButtonClick: this.handleLeftButtonClick,
						onNextButtonClick: this.handleNextButtonClick,
						onSessionStart: this.sessionStart,
						onShowInLessonTipClick: this.handleShowInLessonTipClick,
						onShowMathGradingFeedbackClick: this.handleShowMathGradingFeedbackClick,
						onSkipButtonClick: this.handleSkipButtonClick,
						overrideRibbonColor: q,
						remount: () => w({
							type: "PLAYER_REMOUNT"
						}),
						session: M,
						sessionParams: O,
						smartTip: H,
						status: F.status,
						user: $,
						visibility: "hidden" === this.footerType ? "hidden" : "visible"
					})
					, fe = "overlay" === this.footerType
					, _e = (null === (b = M.challenges[Z]) || void 0 === b ? void 0 : b.type) === ce.Sm.ChessMatch
					, Ee = _e || ue
					, ye = _e && "onboarding_chess_match" === F.via;
				return s.createElement(s.Fragment, null, s.createElement(Vi, {
					footer: ve,
					footerSlideKey: this.footerType,
					hasSlidingContent: ie && !fe,
					header: te,
					isOverlayFooter: fe,
					isPadded: le,
					lockFooterHeight: F.status === St.c.Blaming || F.status === St.c.Grading,
					overrideNoFooter: M.type === ce.FF.MathMatchPractice
				}, s.createElement(s.Suspense, {
					fallback: null
				}, ae)), s.createElement(o.Z, {
					ctaContent: Ee ? (0,
						ee._i)(67763) : void 0 === N ? (0,
							ee._i)(5278) : (0,
								ee._i)(8945),
					description: ye ? (0,
						ee._i)(73276) : void 0,
					dismissContent: ye ? (0,
						ee._i)(2529) : ue ? he ? (0,
							ee._i)(2529) : (0,
								ee._i)(67764) : _e ? de ? (0,
									ee._i)(67764) : (0,
										ee._i)(2529) : (0,
											ee._i)(18596),
					enabled: () => this.shouldWarnBeforeQuitting && (C.length > 0 || ne || void 0 !== N || Ee),
					image: void 0 === N ? s.createElement("img", {
						className: "_2g5dx",
						src: ui
					}) : s.createElement("img", {
						className: "_1oRjh",
						src: di
					}),
					onBeforeOpen: async () => {
						U(!0),
							W && await (0,
								Et._v)(hi.nN)
					}
					,
					onCancel: () => {
						U(!1)
					}
					,
					onConfirm: () => {
						if (N && ($.streakRepairOffer ? (0,
							V.track)("streak_earnback_session_quit", {
								lesson_number: N.sessionsCompleted + 1,
								previous_streak_length: $.streakRepairOffer.length,
								total_lessons: N.totalSessions
							}) : (0,
								oe.Kp)("Quitting streak earnback but missing data", {
									data: {
										earnbackMultiSessionStats: N,
										streakRepairOffer: $.streakRepairOffer
									}
								})),
							ue && F.chessPvpMatchState)
							return he ? ((async e => {
								const { fromLanguage: t, matchDurationSeconds: a, matchId: n, userId: r } = e;
								(0,
									vl.n)({
										matchDurationSeconds: a,
										wasLeftByUser: !0
									});
								try {
									await se.d3.updatePvpMatch(r, n, {
										fromLanguage: t,
										updateType: "resignation"
									})
								} catch (e) {
									(0,
										oe.Kp)("Failed to PATCH PvP abandon", {
											data: {
												err: String(e),
												matchId: n
											}
										})
								}
							}
							)({
								fromLanguage: k.fromLanguage,
								matchDurationSeconds: void 0 === me ? void 0 : Math.round(ge / 1e3),
								matchId: x.id,
								userId: $.id
							}),
								!0) : ((async e => {
									const { dispatch: t, fromLanguage: a, matchId: n, playerColor: r, userId: s } = e;
									t({
										action: {
											endCondition: "resignation",
											outcome: "white" === r ? "black" : "white",
											receivedAtMs: Date.now(),
											type: "GAME_ENDED"
										},
										type: "UPDATE_CHESS_PVP_MATCH"
									}),
										t({
											type: "CHALLENGE_GUESS_CHANGE",
											value: {
												matchState: {
													endCondition: "resignation",
													outcome: "loss",
													status: "completed"
												}
											}
										}),
										t((0,
											Re.YK)(!1, Date.now()));
									try {
										await se.d3.updatePvpMatch(s, n, {
											fromLanguage: a,
											updateType: "resignation"
										})
									} catch (e) {
										(0,
											oe.Kp)("Failed to PATCH PvP resignation", {
												data: {
													err: String(e),
													matchId: n
												}
											})
									}
								}
								)({
									dispatch: w,
									fromLanguage: k.fromLanguage,
									matchId: x.id,
									playerColor: F.chessPvpMatchState.playerColor,
									userId: $.id
								}),
									!1);
						if (_e) {
							if (ye || de)
								return fl($.id, x.id, "resignation", w),
									!1;
							se.d3.updateBotMatch($.id, x.id, {
								status: "abandoned"
							})
						}
						return !0
					}
					,
					title: ye ? (0,
						ee._i)(73277) : ue ? he ? (0,
							ee._i)(66074) : (0,
								ee._i)(67762) : _e ? de ? (0,
									ee._i)(67762) : (0,
										ee._i)(66074) : void 0 === N ? (0,
											ee._i)(50812) : (0,
												ee._i)(49714)
				}), s.createElement(p.Z, null), s.createElement(j, null), s.createElement(vs, {
					onQuitButtonClick: () => P(!0),
					onSessionStart: this.sessionStart
				}), s.createElement(bs, null), s.createElement(Ss.Z, null), s.createElement(re, null), s.createElement(pe, null), s.createElement(tt, null), s.createElement(c.Z, {
					calculatorFunctions: this.calculatorFunctions,
					challengeId: null === (S = this.props.currentChallenge) || void 0 === S ? void 0 : S.id,
					instruction: this.mathProblemStatement.instruction,
					onClear: () => { }
					,
					ref: this.calculatorPaneRef,
					shirt: this.mathProblemStatement.shirt,
					trackingProperties: this.calculatorTrackingProperties
				}), s.createElement(Hs, null))
			}
		}
		const $i = e => {
			const t = (0,
				W.Fx)((e => e.player.key))
				, a = (0,
					W.Fx)(f.is)
				, [{ isCleaningUp: n }, r] = s.useReducer(((a, n) => {
					switch (n) {
						case "KEY":
							return a.key !== t || a.path !== e.location.pathname ? (a = (0,
								Te.t8)(a, "isCleaningUp", !0),
								a = (0,
									Te.t8)(a, "key", t),
								a = (0,
									Te.t8)(a, "path", e.location.pathname)) : a;
						case "READY":
							return (0,
								Te.t8)(a, "isCleaningUp", !1)
					}
					return a
				}
				), {
					isCleaningUp: void 0 !== a,
					key: t,
					path: e.location.pathname
				});
			return s.useEffect((() => {
				r(n && void 0 === a ? "READY" : "KEY")
			}
			)),
				n ? null : s.createElement(Wi, {
					...e
				})
		}
	}
	,
	2844: (e, t, a) => {
		a.d(t, {
			Z: () => c
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(34808)
			, i = a(67699);
		var o = a(44637);
		const c = ({ animation: e = "fade", children: t, className: a, slideElementKey: n }) => s.createElement(l.Z, {
			className: r()("_3GuWo", {
				_1cTBC: "fade" === e,
				_3HVS7: "slide" === e
			}, a)
		}, s.createElement(i.Z, {
			classNames: {
				enter: "_1xL0G",
				enterActive: "_35n9p",
				enterDone: "_3V6my",
				exit: "_2jRnY",
				exitActive: "_1V33c",
				exitDone: "c3WvB"
			},
			key: n,
			timeout: "fade" === e ? o.UV : 200
		}, s.createElement("div", {
			className: "_1XNQX"
		}, t)))
	}
	,
	86505: (e, t, a) => {
		a.d(t, {
			Z: () => h
		});
		var n = a(27378)
			, r = a(39797)
			, s = a(42659)
			, l = a(24267)
			, i = a(37971)
			, o = a(95940)
			, c = a(44637)
			, d = a(84401)
			, u = a(89260)
			, m = a(18804)
			, p = a(11811)
			, g = a(97106);
		const h = ({ secondsLeft: e }) => {
			const t = (0,
				m.Fx)(s.$4)
				, a = (0,
					m.Fx)(s.np)
				, h = (0,
					m.Fx)((e => e.player.session.type))
				, v = (0,
					m.Fx)((e => e.player.sessionParams.isFinalLevel))
				, f = h === p.FF.MistakesReview
				, _ = (0,
					d.rK)(h)
				, E = h === p.FF.SpecifiedMatchPractice
				, y = (0,
					m.Fx)((e => e.player.currentInLessonStreak))
				, b = (0,
					m.Fx)((t => (({ player: e, secondsLeft: t, usePartialXp: a }) => {
						var n;
						const { challengeIdSections: r, challengeStates: s, currentIndex: l, heartsType: o, session: c, session: { challenges: d }, status: m, strength: g } = e
							, h = d[l]
							, v = s[l];
						if (void 0 !== t)
							return g;
						if (a)
							return g;
						if ("sessionHearts" === o) {
							const e = d.filter((e => {
								var t;
								return void 0 !== (null === (t = e.gradingResult) || void 0 === t ? void 0 : t.correct)
							}
							)).length;
							return e / d.length
						}
						if (m !== i.c.Blaming && c.type === p.FF.SpecifiedMatchPractice && (0,
							u.kL)(h)) {
							const e = null !== (n = v.guess) && void 0 !== n ? n : 0
								, t = e / h.pairs.length;
							return h.pairs.length === e ? g : g + t / r.length
						}
						return g
					}
					)({
						player: t.player,
						secondsLeft: e,
						usePartialXp: v
					})))
				, S = (0,
					m.Fx)((e => e.player.challengeIdSections.length))
				, k = (0,
					g.g3)() ? g.K3 : 1
				, C = (0,
					m.Fx)((e => y > 1 && e.player.status === i.c.Blaming && !e.player.session.challenges[e.player.currentIndex].skipped && (1 === S || t)))
				, x = (0,
					m.Fx)((e => {
						var t;
						return !0 === (null === (t = e.player.session.challenges[e.player.currentIndex].gradingResult) || void 0 === t ? void 0 : t.correct) || 0 === e.player.currentIndex && void 0 === e.player.session.challenges[e.player.currentIndex].gradingResult
					}
					))
				, T = n.useRef((0,
					d.w)(a) * k);
			return n.createElement(r.Z, {
				checkpoints: S > 1 ? v ? [{
					backgroundColor: "bee",
					label: "" + g.Ms * k,
					numerator: .5
				}, {
					backgroundColor: "bee",
					label: "" + g.BX * k,
					numerator: 1
				}] : E ? [...(2 === S ? [.5] : 3 === S ? [.33, .66] : []).map((e => ({
					label: n.createElement("img", {
						src: l
					}),
					numerator: e
				}))), {
					label: `${T.current}`,
					numerator: 1
				}] : [] : void 0,
				color: v ? "bee" : f || _ ? "cosmos" : (0,
					c.SB)(y),
				denominator: 1,
				height: 16,
				numerator: b,
				sparkleOnIncrease: x,
				text: C ? (0,
					o.H8)(29391, {
						num: y
					}) : void 0,
				variant: v ? "legendary-gilded" : "solid"
			})
		}
	}
	,
	20503: (e, t, a) => {
		a.d(t, {
			v: () => Ce,
			N: () => Se
		});
		var n = a(60042)
			, r = a.n(n)
			, s = a(27378)
			, l = a(3291)
			, i = a(80254)
			, o = a(15746)
			, c = a(42804)
			, d = a(71738)
			, u = a(56818);
		const m = ({ token: e, state: t, latexColorConfig: a }) => s.createElement(d.Z, {
			label: e.label
		}, "text" === e.child.type ? s.createElement(l.Z, {
			latexColorConfig: a,
			math: e.child.value,
			state: t
		}) : s.createElement(u.R, {
			state: t,
			web: e.child
		}));
		var p = a(71184)
			, g = a(42659)
			, h = a(27429)
			, v = a(49492)
			, f = a(795)
			, _ = a(70732);
		const E = async (e, t, a) => {
			const n = (0,
				_.F5)(e)
				, r = ((e, t) => ({
					[e]: {
						selected: !0
					},
					[t]: {
						selected: !0
					}
				}))(t, a)
				, s = await n(r)
				, { correct: l } = (0,
					_.AB)(s);
			return l
		}
			, y = (e, t) => t.some((([t]) => t.id === e));
		var b = a(71371)
			, S = a(18804);
		const k = e => {
			const { challenge: t, challengeBlob: a, onChange: n } = e
				, r = t.latexColorConfig
				, l = a.onesie.flat()
				, [d, u] = s.useState([])
				, [_, k] = s.useState()
				, [C, x] = s.useState((() => l.map((({ id: e }) => e))))
				, T = s.useRef(!1)
				, w = (0,
					o.Z)()
				, N = (0,
					S.tX)()
				, R = (0,
					S.Fx)(g.$4)
				, I = (0,
					S.Fx)(h.eE)
				, L = a.onesie.map((([e]) => e))
				, [P] = s.useState((() => i.ZP.shuffle(a.onesie.map((([, e]) => e)))))
				, F = [...L, ...P]
				, A = e => {
					const t = l.findIndex((t => t.id === e))
						, a = d[t];
					return "INCORRECT" === (null == a ? void 0 : a.name) || "INCORRECT_MATCH" === (null == a ? void 0 : a.name) ? "incorrect" : "CORRECT" === (null == a ? void 0 : a.name) || "CORRECT_MATCH" === (null == a ? void 0 : a.name) ? "correct" : C.includes(e) ? _ === e ? "selected" : "base" : "disabled"
				}
				;
			return s.useEffect((() => {
				const e = () => {
					u((e => e.map((e => "PRESS" === (null == e ? void 0 : e.name) ? void 0 : e))))
				}
					;
				return document.addEventListener("pointerup", e),
					() => document.removeEventListener("pointerup", e)
			}
			), []),
				s.createElement("div", {
					className: v.Z["wrap-math-match"],
					style: {
						"--match-challenge-rows": a.onesie.length
					}
				}, F.map(((e, t) => {
					const i = l.findIndex((t => t.id === e.id));
					return s.createElement(c.Z, {
						animation: d[i],
						disabled: !C.includes(e.id),
						disabledStyle: C.includes(e.id) || !w ? "unstyled" : void 0,
						hideHotkey: !0,
						key: e.id,
						language: "en",
						numberKey: R && t < 10 ? (t + 1) % 10 : void 0,
						onPointerDown: () => {
							if (C.includes(e.id) && _ !== e.id && !w) {
								const t = !!_ && y(_, a.onesie)
									, n = y(e.id, a.onesie);
								u((e => (0,
									f.tP)(e, [i], {
										isPair: void 0 !== _ && t !== n,
										name: "PRESS"
									})))
							}
						}
						,
						onTap: () => (async e => {
							const t = window.performance.now()
								, r = l.findIndex((t => t.id === e));
							if (e === _)
								return u((e => (0,
									f.tP)(e, [r], void 0))),
									void k(void 0);
							if (void 0 === _)
								return w || u((e => (0,
									f.tP)(e, [r], {
										disableScaling: !1,
										name: "SELECTED"
									}))),
									void k(e);
							if (s = _,
								i = e,
								o = a.onesie,
								y(s, o) === y(i, o)) {
								const t = l.findIndex((e => e.id === _));
								return w || u((e => (e = (0,
									f.tP)(e, [t], void 0),
									(0,
										f.tP)(e, [r], {
											disableScaling: !1,
											name: "SELECTED"
										})))),
									void k(e)
							}
							var s, i, o;
							const c = await E(a.grading_function, _, e)
								, d = l.findIndex((e => e.id === _));
							if (!c) {
								if (w)
									u((e => (e = (0,
										f.tP)(e, [d], {
											disabled: !1,
											name: "INCORRECT"
										}),
										(0,
											f.tP)(e, [r], {
												disabled: !1,
												name: "INCORRECT"
											}))));
								else {
									const e = () => {
										u((e => {
											let t = e;
											return t = (0,
												f.tP)(t, [d], void 0),
												t = (0,
													f.tP)(t, [r], void 0),
												t
										}
										))
									}
										;
									u((t => (t = (0,
										f.tP)(t, [d], {
											callback: e,
											disableScaling: !1,
											name: "INCORRECT_MATCH"
										}),
										(0,
											f.tP)(t, [r], {
												callback: e,
												disableScaling: !1,
												name: "INCORRECT_MATCH",
												tapped: !0
											}))))
								}
								return k(void 0),
									void (!T.current && I && (T.current = !0,
										N((0,
											p.$)("session_mid"))))
							}
							const m = C.filter((t => t !== _ && t !== e));
							if (w)
								u((e => (e = (0,
									f.tP)(e, [d], {
										disabled: !0,
										name: "CORRECT"
									}),
									(0,
										f.tP)(e, [r], {
											disabled: !0,
											name: "CORRECT"
										}))));
							else {
								const e = () => {
									u((e => {
										let t = e;
										return t = (0,
											f.tP)(t, [d], void 0),
											t = (0,
												f.tP)(t, [r], void 0),
											t
									}
									))
								}
									;
								u((t => (t = (0,
									f.tP)(t, [d], {
										callback: e,
										disableScaling: !1,
										name: "CORRECT_MATCH"
									}),
									(0,
										f.tP)(t, [r], {
											callback: e,
											disableScaling: !1,
											name: "CORRECT_MATCH",
											tapped: !0
										}))))
							}
							x(m),
								k(void 0),
								0 === m.length && (b.Z.start("challenge_grade", {
									startTime: t
								}),
									n([]))
						}
						)(e.id),
						selected: _ === e.id && w,
						size: c.I.Large,
						sparklesStyle: w ? void 0 : "match",
						text: "",
						variant: "math"
					}, s.createElement(m, {
						latexColorConfig: r,
						state: A(e.id),
						token: e
					}))
				}
				)))
		}
			;
		var C = a(74534);
		const x = (e, t, a) => e.map((e => e.token.id === t ? {
			...e,
			animation: a
		} : e))
			, T = (e, t) => {
				switch (t.type) {
					case "SELECT":
						return (0,
							f.TS)(e, {
								firstSelectedId: t.tokenId
							});
					case "DESELECT":
					case "WRONG_MATCH":
						return (0,
							f.TS)(e, {
								firstSelectedId: void 0
							});
					case "MATCH":
						{
							const [a, ...n] = e.queuedPairs
								, r = e.leftSlots.map(((e, n) => n === t.leftSlotIndex ? {
									...e,
									nextToken: null == a ? void 0 : a[0]
								} : e))
								, s = e.rightSlots.map(((e, n) => n === t.rightSlotIndex ? {
									...e,
									nextToken: null == a ? void 0 : a[1]
								} : e));
							return (0,
								f.TS)(e, {
									firstSelectedId: void 0,
									leftSlots: r,
									matchCount: e.matchCount + 1,
									queuedPairs: n,
									rightSlots: s
								})
						}
					case "COMPLETE_MATCH":
						{
							const a = e.leftSlots[t.leftSlotIndex]
								, n = e.rightSlots[t.rightSlotIndex]
								, r = a.nextToken
								, s = n.nextToken;
							if (void 0 !== r && void 0 !== s) {
								const a = e.rightSlots.map(((e, t) => ({
									index: t,
									slot: e
								}))).filter((({ index: e, slot: a }) => e !== t.rightSlotIndex && void 0 !== a.nextToken))
									, { finalRightNextToken: n, swapTargetIndex: l } = (() => {
										if (a.length > 0 && globalThis.Math.random() < C.pF) {
											const e = i.UP(a);
											if (void 0 !== (null == e ? void 0 : e.slot.nextToken))
												return {
													finalRightNextToken: e.slot.nextToken,
													swapTargetIndex: e.index
												}
										}
										return {
											finalRightNextToken: s,
											swapTargetIndex: void 0
										}
									}
									)()
									, o = e.leftSlots.map(((e, a) => a === t.leftSlotIndex ? {
										animation: {
											name: "FADE_IN"
										},
										nextToken: void 0,
										token: r
									} : e))
									, c = e.rightSlots.map(((e, a) => a === t.rightSlotIndex ? {
										animation: {
											name: "FADE_IN"
										},
										nextToken: void 0,
										token: n
									} : void 0 !== l && a === l ? {
										...e,
										nextToken: s
									} : e));
								return (0,
									f.TS)(e, {
										leftSlots: o,
										rightSlots: c
									})
							}
							const [l, o] = t.tokenIds;
							return (0,
								f.TS)(e, {
									leftSlots: x(e.leftSlots, l, void 0),
									matchedTokenIds: [...e.matchedTokenIds, ...t.tokenIds],
									rightSlots: x(e.rightSlots, o, void 0)
								})
						}
					case "SET_ANIMATION":
						return {
							...e,
							leftSlots: x(e.leftSlots, t.tokenId, t.animation),
							rightSlots: x(e.rightSlots, t.tokenId, t.animation)
						};
					default:
						return e
				}
			}
			, w = e => {
				const { challenge: t, challengeBlob: a, onChange: n } = e
					, r = t.latexColorConfig
					, { onesie: l } = a
					, o = (0,
						S.tX)()
					, d = (0,
						S.Fx)(g.$4)
					, u = (0,
						S.Fx)((e => e.player.sessionTimeRemaining))
					, [p, h] = (e => s.useReducer(T, {
						firstSelectedId: void 0,
						leftSlots: [],
						matchCount: 0,
						matchedTokenIds: [],
						queuedPairs: [],
						rightSlots: [],
						totalPairs: 0
					}, (() => (e => ({
						firstSelectedId: void 0,
						leftSlots: e.slice(0, 4).map((([e]) => ({
							animation: void 0,
							nextToken: void 0,
							token: e
						}))),
						matchCount: 0,
						matchedTokenIds: [],
						queuedPairs: e.slice(4),
						rightSlots: i.TV(e.slice(0, 4).map((([, e]) => ({
							animation: void 0,
							nextToken: void 0,
							token: e
						})))),
						totalPairs: e.length
					}))(e))))(l)
					, { firstSelectedId: v, leftSlots: f, matchCount: _, matchedTokenIds: k, rightSlots: C, totalPairs: x } = p
					, w = e => y(e, l)
					, N = [...f.map(((e, t) => ({
						hotKeyIndex: t + 1,
						slot: e
					}))), ...C.map(((e, t) => ({
						hotKeyIndex: t + 6,
						slot: e
					})))]
					, R = s.useRef({})
					, I = (e => {
						const t = s.useRef(!1);
						return async (...a) => {
							if (t.current)
								throw Error("Another invocation is already running");
							t.current = !0;
							try {
								return await e(...a)
							} finally {
								t.current = !1
							}
						}
					}
					)((async e => {
						var t, r, s;
						const l = window.performance.now();
						if (void 0 !== u && u <= 0)
							return;
						if (k.includes(e))
							return;
						const i = null === (t = N.find((t => t.slot.token.id === e))) || void 0 === t ? void 0 : t.slot;
						if ("CORRECT_MATCH_MADNESS" === (null === (r = null == i ? void 0 : i.animation) || void 0 === r ? void 0 : r.name) || "INCORRECT_MATCH" === (null === (s = null == i ? void 0 : i.animation) || void 0 === s ? void 0 : s.name))
							return;
						if (e === v)
							return void h({
								type: "DESELECT"
							});
						if (void 0 === v)
							return void h({
								tokenId: e,
								type: "SELECT"
							});
						const c = w(v);
						if (c === w(e))
							return void h({
								tokenId: e,
								type: "SELECT"
							});
						if (!await E(a.grading_function, v, e))
							return h({
								firstTokenId: v,
								secondTokenId: e,
								type: "WRONG_MATCH"
							}),
								h({
									animation: {
										callback: () => {
											h({
												animation: void 0,
												tokenId: v,
												type: "SET_ANIMATION"
											})
										}
										,
										disableScaling: !0,
										name: "INCORRECT_MATCH"
									},
									tokenId: v,
									type: "SET_ANIMATION"
								}),
								void h({
									animation: {
										callback: () => {
											h({
												animation: void 0,
												tokenId: e,
												type: "SET_ANIMATION"
											})
										}
										,
										disableScaling: !0,
										name: "INCORRECT_MATCH"
									},
									tokenId: e,
									type: "SET_ANIMATION"
								});
						const d = c ? v : e
							, m = c ? e : v
							, p = f.findIndex((e => e.token.id === d))
							, g = C.findIndex((e => e.token.id === m));
						h({
							leftSlotIndex: p,
							rightSlotIndex: g,
							type: "MATCH"
						}),
							o({
								type: "INCREMENT_MATCH_MADNESS_MATCHES"
							});
						const y = _ >= x - 4;
						var S;
						h({
							animation: {
								callback: () => {
									h({
										leftSlotIndex: p,
										rightSlotIndex: g,
										tokenIds: [d, m],
										type: "COMPLETE_MATCH"
									})
								}
								,
								name: "CORRECT_MATCH_MADNESS",
								stayVisible: y
							},
							tokenId: v,
							type: "SET_ANIMATION"
						}),
							h({
								animation: {
									name: "CORRECT_MATCH_MADNESS",
									stayVisible: y
								},
								tokenId: e,
								type: "SET_ANIMATION"
							}),
							S = [d, m],
							Object.entries(R.current).forEach((([e, t]) => {
								S.includes(e) || null == t || t.setPlaybackRate(3)
							}
							)),
							_ + 1 === x && (b.Z.start("challenge_grade", {
								startTime: l
							}),
								n([]))
					}
					))
					, L = e => {
						var t, a;
						return "CORRECT_MATCH_MADNESS" === (null === (t = e.animation) || void 0 === t ? void 0 : t.name) ? "correct" : "INCORRECT_MATCH" === (null === (a = e.animation) || void 0 === a ? void 0 : a.name) ? "incorrect" : k.includes(e.token.id) ? "disabled" : v === e.token.id ? "selected" : "base"
					}
					;
				return s.createElement("div", {
					className: "ruzrc _3rat3",
					style: {
						"--match-madness-challenge-rows": 4
					}
				}, N.map((({ hotKeyIndex: e, slot: t }) => s.createElement(c.Z, {
					animation: t.animation,
					disabled: k.includes(t.token.id),
					hideHotkey: !0,
					key: t.token.id,
					language: "en",
					numberKey: d ? e : void 0,
					onTap: () => I(t.token.id),
					ref: e => {
						R.current[t.token.id] = e
					}
					,
					selected: v === t.token.id,
					size: c.I.Large,
					text: "",
					variant: "math"
				}, s.createElement(m, {
					latexColorConfig: r,
					state: L(t),
					token: t.token
				})))))
			}
			;
		var N = a(60989)
			, R = a(84577)
			, I = a(77809)
			, L = a(45570);
		const P = e => {
			var t;
			const { autoFocus: a = !0, challenge: { gradingResult: n, skipped: r, latexColorConfig: l }, challengeBlob: o, challengeState: c, onChange: u, disabled: m, multiSelect: p } = e
				, [g] = s.useState((() => i.TV(o.pants)))
				, [h, v] = s.useState({
					...i.Ry(g.map((({ id: e }) => [e, {
						selected: !1
					}])))
				})
				, f = c.mathRetryCount;
			s.useEffect((() => {
				void 0 !== f && f > 0 && v(i.Ry(g.map((({ id: e }) => [e, {
					selected: !1
				}]))))
			}
			), [g, f]);
			const _ = s.useRef(u);
			_.current = u,
				s.useEffect((() => {
					_.current(h)
				}
				), [h]);
			const E = e => {
				if (m)
					return;
				const t = g[e].id;
				v(p ? e => ({
					...e,
					[t]: {
						selected: !e[t].selected
					}
				}) : e => ({
					...i.Xc(e, ((e, a) => ({
						...e,
						selected: a === t
					})))
				}))
			}
				, y = (null === (t = g[0]) || void 0 === t ? void 0 : t.width) || "half"
				, b = 2 === g.length && "full" !== y && g.every((e => "web" !== e.child.type))
				, S = "full" === y || b ? "column" : "two-columns"
				, k = () => g.map(((e, t) => {
					const i = h[e.id].selected
						, o = r ? void 0 : (null == n ? void 0 : n.correct) && i
						, c = o ? "correct" : i ? "selected" : "base"
						, u = s.createElement("div", {
							className: b ? "_19G2R _3hniF" : "_3hniF"
						}, s.createElement(d.Z, {
							label: e.label
						}, s.createElement(L.F, {
							element: e.child,
							latexColorConfig: l,
							state: c
						})))
						, g = {
							autoFocus: a && 0 === t,
							correct: o,
							disabled: m,
							index: t,
							key: t,
							language: "en",
							onClick: () => E(t),
							role: p ? "checkbox" : "radio",
							selected: i,
							unstyledDisabled: !i
						};
					return "full" === e.width ? s.createElement(N.Z, {
						...g,
						hideHotkey: !0,
						style: "wide",
						tokenCorrect: o,
						value: u
					}) : s.createElement(R.Z, {
						...g,
						className: b ? "_2GUmV wEeIw" : "wEeIw",
						compactPadding: b,
						hideHotkey: !0,
						icon: s.createElement("div", {
							className: "Hf4Q1"
						}, u)
					})
				}
				));
			return s.createElement("div", {
				className: "_1z_BF GqLk4 f7WE2 _3rat3"
			}, p ? s.createElement("div", {
				className: "column" === S ? "_35ylN _3bxnS" : "_3NK57 _3bxnS",
				role: "group"
			}, k()) : s.createElement(I.Z, {
				onChange: E,
				type: S,
				value: i.XP(h).findIndex((e => h[e].selected))
			}, k()))
		}
			;
		var F = a(57677)
			, A = a(66520)
			, Z = a(40060);
		const D = e => {
			var t;
			const { isDesktop: a, autoFocus: n = a, challenge: r, challengeBlob: l, challengeState: i, inputRefCallback: o = (() => { }
			), onChange: c, disabled: d } = e
				, u = !0 === (null === (t = r.gradingResult) || void 0 === t ? void 0 : t.correct) ? "correct" : void 0
				, { pants: m } = l
				, p = (0,
					Z.zz)(i.guess) ? i.guess.keyboardInput.value : ""
				, g = s.useRef(d);
			s.useEffect((() => {
				var e, t;
				!g.current || d || !1 !== (null === (e = r.gradingResult) || void 0 === e ? void 0 : e.correct) || (null === (t = r.gradingResult) || void 0 === t ? void 0 : t.multiStepWillForceAdvance) || c({
					keyboardInput: {
						value: ""
					}
				}),
					g.current = d
			}
			), [r.gradingResult, r, d, c]);
			const h = p.length > 0 && void 0 === u;
			return s.createElement(F.Z, {
				autoFocus: n,
				disabled: null != d && d,
				displayRichText: h,
				gradingState: u,
				inputLanguage: "en",
				onChange: e => {
					const t = e.target.value;
					A.yd.test(t) && c({
						keyboardInput: {
							value: t
						}
					})
				}
				,
				placeholder: m.placeholder,
				refCallback: o,
				style: "math",
				value: p
			})
		}
			;
		var M = a(79741);
		var O = a(67116)
			, H = a(58576);
		const B = {
			bea: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/B_CORRECT_Cropped.json",
				gender: "FEMALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Bea_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/96e5de8ca0f5590b609aa656c1e2eb0d",
					svg: "https://simg-ssl.duolingo.com/images/55332f3fe977a550ea770796ae4f998b"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/B_INCORRECT_Cropped.json",
				name: "BEA"
			},
			duo: void 0,
			eddy: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Coach_CORRECT_Cropped.json",
				gender: "MALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Eddy_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/b53f870ed38105349d4d83edf682d77f",
					svg: "https://simg-ssl.duolingo.com/images/096d0b1f6280b962cd7080a7736dd2bb"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Coach_INCORRECT_Cropped.json",
				name: "EDDY"
			},
			falstaff: void 0,
			junior: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Junior_CORRECT_Cropped.json",
				gender: "MALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Junior_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/244cf36bd8b473a3e76edfd4b917b9cb",
					svg: "https://simg-ssl.duolingo.com/images/3749d548da7d349c89c158483beaff29"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Junior_INCORRECT_Cropped.json",
				name: "JUNIOR"
			},
			lily: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Violet_CORRECT_Cropped.json",
				gender: "FEMALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Lily_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/861252b26a49194f2a98ee58e7c373f8",
					svg: "https://simg-ssl.duolingo.com/images/81ca92172d70599306b16bcb87799195"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Violet_INCORRECT_Cropped.json",
				name: "LILY"
			},
			lin: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Kai_CORRECT_Cropped.json",
				gender: "FEMALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Lin_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/3f195e9533fc5e4f61a32eba3f03a8cf",
					svg: "https://simg-ssl.duolingo.com/images/85c5ecb885f7073a3aebeb775946e329"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Kai_INCORRECT_Cropped.json",
				name: "LIN"
			},
			lucy: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Gma_CORRECT_Cropped.json",
				gender: "FEMALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Lucy_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/122480f3b6c86522d5715c920764dc44",
					svg: "https://simg-ssl.duolingo.com/images/ad178aebb8dfd890ab602527440e685c"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Gma_INCORRECT_Cropped.json",
				name: "LUCY"
			},
			oscar: void 0,
			vikram: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Dan_CORRECT_Cropped.json",
				gender: "MALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Vikram_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/61e19bb4a1ff1d94e58d58b33db58c36",
					svg: "https://simg-ssl.duolingo.com/images/52a5a774c4de18f4a4e8c91d91788347"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Dan_INCORRECT_Cropped.json",
				name: "VIKRAM"
			},
			zari: {
				correctAnimation: "https://simg-ssl.duolingo.com/lottie/Pink_CORRECT_Cropped.json",
				gender: "FEMALE",
				idleAnimation: "https://simg-ssl.duolingo.com/lottie/Zari_IDLE_Cropped.json",
				image: {
					pdf: "https://simg-ssl.duolingo.com/images/3f4adf80c0b6e9a0dc438f3ba8119703",
					svg: "https://simg-ssl.duolingo.com/images/6d99bc8306bdaacc3c8acc911214c557"
				},
				incorrectAnimation: "https://simg-ssl.duolingo.com/lottie/Pink_INCORRECT_Cropped.json",
				name: "ZARI"
			}
		}
			, U = ({ worldCharacter: e, headband: t, latexColorConfig: a, correct: n }) => {
				s.useEffect((() => {
					e || (0,
						H.Kp)("MathCharacterHeadband received headband without valid worldCharacter. Backend should populate mathWorldCharacter when headband is present.", {
							once: !0
						})
				}
				), [e]);
				const r = e ? (e => B[e])(e) : void 0;
				return r ? s.createElement(s.Fragment, null, s.createElement("div", {
					className: "_3dtwp _1djbL"
				}, s.createElement(M.Z, {
					character: r,
					correct: n,
					hasOnlyIcons: !1,
					isMathChallenge: !0,
					lang: O.h9,
					tightContentSpacing: !0
				}, s.createElement(l.Z, {
					allowWrap: !0,
					latexColorConfig: a,
					math: t.value
				}))), s.createElement("div", {
					className: "_1nf76 _1djbL"
				}, s.createElement(L.F, {
					allowWrap: !0,
					element: t,
					latexColorConfig: a
				}))) : s.createElement("div", {
					className: "_1g1l8 _1djbL"
				}, s.createElement(L.F, {
					allowWrap: !0,
					element: t,
					latexColorConfig: a
				}))
			}
			;
		var G = a(93346);
		const W = ({ shirt: e, latexColorConfig: t, outputVariables: a, textClassName: n }) => {
			const [r, l] = s.useState(e.initial_value);
			s.useEffect((() => {
				if (!a)
					return;
				const t = new AbortController;
				return (0,
					G.si)(e.latex_text_function, a).then((a => {
						t.signal.aborted || ("string" == typeof a ? l(a) : (0,
							H.vU)("getDynamicShirt function did not return a string", {
								data: {
									source: e.latex_text_function
								},
								once: !0
							}))
					}
					)).catch((t => {
						(0,
							H.vU)("Error executing getDynamicShirt function", {
								data: {
									source: e.latex_text_function
								},
								ex: t instanceof Error ? t : Error(String(t)),
								once: !0
							})
					}
					)),
					() => {
						t.abort()
					}
			}
			), [a, e.latex_text_function]);
			const i = {
				type: "text",
				value: r
			};
			return s.createElement(L.F, {
				allowWrap: !0,
				element: i,
				latexColorConfig: t,
				textClassName: n
			})
		}
			;
		var V = a(56435);
		const z = a.p + "rive/mathCharacters/8d352ad4748dbb23ae7da08af2ca7ddb.riv";
		var $ = a(14817);
		const K = "character_head_statemachine"
			, j = {
				bea: 0,
				eddy: 9,
				falstaff: 7,
				junior: 5,
				lily: 4,
				lin: 8,
				lucy: 1,
				oscar: 6,
				vikram: 3,
				zari: 2
			}
			, q = ({ character: e, className: t, isActive: a = !0, triggerCorrect: n = !1 }) => {
				const r = j[e]
					, { RiveComponent: l, rive: i } = (0,
						$.useRive)({
							artboard: "character_head",
							autoplay: !0,
							src: z,
							stateMachines: K
						})
					, o = null == i ? void 0 : i.stateMachineInputs(K);
				return s.useEffect((() => {
					o && (void 0 !== r && (0,
						$.setNumberInput)(o, "character_num", r),
						(0,
							$.triggerInput)(o, "idle_trig"))
				}
				), [o, r]),
					s.useEffect((() => {
						o && n && (0,
							$.triggerInput)(o, "correct_trig")
					}
					), [o, n]),
					s.useEffect((() => {
						if (!i)
							return;
						if (a)
							return void i.play();
						(0,
							$.triggerInput)(o, "idle_trig");
						const e = setTimeout((() => {
							i.pause()
						}
						), 500);
						return () => {
							clearTimeout(e)
						}
					}
					), [i, o, a]),
					s.createElement(l, {
						className: t
					})
			}
			;
		var X = a(55824)
			, Y = a(5102)
			, Q = a(4941)
			, J = a(97005)
			, ee = a(64106)
			, te = a(55443)
			, ae = a(91766)
			, ne = a(53018)
			, re = a(77480)
			, se = a(93900);
		const le = {
			bea: X,
			duo: void 0,
			eddy: Y,
			falstaff: Q,
			junior: J,
			lily: ee,
			lin: te,
			lucy: ae,
			oscar: ne,
			vikram: re,
			zari: se
		}
			, ie = ["zari"]
			, oe = ({ animated: e, character: t, hasShirtAfter: a, hasShirtBefore: n, instruction: i, playCorrectDelight: o }) => {
				const c = ie.includes(t)
					, d = le[t];
				return s.useEffect((() => {
					c || void 0 !== d || (0,
						H.Kp)("No avatar URL found for MSP step character", {
							data: {
								character: t
							},
							once: !0
						})
				}
				), [d, t, c]),
					s.createElement("div", {
						className: r()("_3tBdD", {
							_2iCUI: n,
							_290Ax: a
						})
					}, c ? s.createElement("div", {
						"aria-label": t,
						className: "_16NMm",
						role: "img"
					}, s.createElement(q, {
						character: t,
						className: "_2Tm-a",
						isActive: e,
						triggerCorrect: o
					})) : s.createElement("img", {
						alt: t,
						className: "_2Hnqv",
						src: null != d ? d : se
					}), s.createElement(V.Z, {
						caretPosition: "left"
					}, s.createElement(l.Z, {
						allowWrap: !0,
						math: i.value
					})))
			}
			, ce = e => "dialogue" === e.blob.layout
			, de = ({ isActive: e, step: t }) => {
				const a = "summary" === t.dialogue_type
					, n = (0,
						Z.P)(t.blob)
					, r = (0,
						Z.P)(t.blob) ? s.createElement("div", {
							className: "_6sqv9"
						}, s.createElement(L.F, {
							allowWrap: !0,
							element: t.blob.shirt
						})) : null;
				return s.createElement("div", null, a ? r : null, s.createElement(oe, {
					animated: e,
					character: t.blob.character,
					hasShirtAfter: n && !a,
					hasShirtBefore: n && a,
					instruction: t.blob.instruction,
					playCorrectDelight: a && e
				}), a ? null : r)
			}
			;
		var ue = a(68903)
			, me = a(57340);
		const pe = e => {
			const { displayAnswer: t, followedByShirt: a, step: n, isActive: i, stepGuess: o, onStepChange: c, challenge: d, challengeState: m, challengeToggleState: p, disabled: g, fromLanguage: h, isDesktop: v, learningLanguage: f } = e
				, _ = {
					challenge: d,
					challengeState: {
						...m,
						guess: o
					},
					challengeToggleState: p,
					disabled: g || !i,
					fromLanguage: h,
					isDesktop: v,
					learningLanguage: f,
					onChange: c
				}
				, E = (() => {
					switch (n.blob.layout) {
						case "selectOne":
							return s.createElement(P, {
								..._,
								autoFocus: !1,
								challengeBlob: n.blob,
								multiSelect: !1
							});
						case "selectAll":
							return s.createElement(P, {
								..._,
								autoFocus: !1,
								challengeBlob: n.blob,
								multiSelect: !0
							});
						case "typeFill":
							return s.createElement(D, {
								..._,
								autoFocus: !1,
								challengeBlob: n.blob,
								inputRefCallback: e.inputRefCallback
							});
						case "shirtPantsInteractive":
							return s.createElement(u.R, {
								isInteractive: !0,
								onChange: c,
								web: n.blob.pants
							});
						case "onesie":
							return (0,
								H.vU)("MathMultiStepInteractiveStep received unsupported layout.", {
									data: {
										layout: n.blob.layout
									},
									once: !0
								}),
								null;
						default:
							return (0,
								ue.RJ)(n.blob),
								(0,
									H.vU)("MathMultiStepInteractiveStep received unrecognized layout.", {
										data: {
											layout: n.blob.layout
										},
										once: !0
									}),
								null
					}
				}
				)();
			if (i)
				return s.createElement("div", null, s.createElement(oe, {
					character: "zari",
					hasShirtAfter: (0,
						Z.P)(n.blob),
					instruction: n.blob.instruction
				}), (0,
					Z.P)(n.blob) ? s.createElement("div", {
						className: "_3WApo"
					}, s.createElement(L.F, {
						allowWrap: !0,
						element: n.blob.shirt
					})) : null, E);
			const y = "shirtPantsInteractive" === n.blob.layout && n.blob.answer_diagram_html ? {
				html: n.blob.answer_diagram_html,
				metadata: n.blob.pants.metadata,
				resources: n.blob.pants.resources,
				type: "web"
			} : void 0
				, b = (0,
					Z.P)(n.blob) && "web" === n.blob.shirt.type ? n.blob.shirt : void 0
				, S = null != y ? y : b;
			return s.createElement("div", {
				className: r()("RkrFh", {
					_3i80l: a
				})
			}, void 0 === n.step_number ? null : s.createElement("div", {
				"aria-label": (0,
					me.l)(`Step ${n.step_number}`),
				className: "_2ZBTW"
			}, n.step_number), s.createElement(l.Z, {
				allowWrap: !0,
				math: n.blob.instruction.value
			}), t && !y ? s.createElement("div", {
				className: "_3SbQG"
			}, s.createElement(l.Z, {
				allowWrap: !0,
				math: t.value
			})) : null, S ? s.createElement("div", {
				className: "_3WgzO"
			}, s.createElement(L.F, {
				allowWrap: !0,
				element: S
			})) : null)
		}
			;
		var ge = a(88849);
		const he = "_1hGoO";
		var ve = a(97236);
		const fe = e => {
			var t, a, n, l;
			const { challengeBlob: i, challengeState: o, onChange: c } = e
				, d = (0,
					Z.IQ)(o.guess) ? o.guess : null
				, u = null !== (t = null == d ? void 0 : d.currentStepIndex) && void 0 !== t ? t : 0
				, m = null !== (a = null == d ? void 0 : d.stepDisplayAnswers) && void 0 !== a ? a : []
				, p = null !== (n = null == d ? void 0 : d.stepGuesses) && void 0 !== n ? n : []
				, g = null !== (l = null == d ? void 0 : d.stepMistakeCounts) && void 0 !== l ? l : []
				, h = s.useRef(c);
			s.useLayoutEffect((() => {
				h.current = c
			}
			), [c]);
			const { wrapRef: v, currentStepRef: f, spacerRef: _ } = (e => {
				const t = s.useRef(null)
					, a = s.useRef(null)
					, n = s.useRef(null);
				return s.useLayoutEffect((() => {
					const e = t.current;
					if (!e || !a.current || !n.current)
						return;
					n.current.style.height = "100vh";
					const r = e.clientHeight - a.current.offsetHeight - parseFloat(getComputedStyle(e).paddingBottom) - 2;
					n.current.style.height = `${Math.max(0, r)}px`
				}
				), [e]),
					s.useEffect((() => {
						if (0 === e)
							return;
						const n = t.current
							, r = a.current;
						if (!n || !r)
							return;
						const s = setTimeout((() => {
							const e = r.offsetTop + r.offsetHeight - n.clientHeight;
							e <= n.scrollTop || (0,
								ge.GZ)({
									animationDuration: 500,
									container: n,
									x: 0,
									y: e
								})
						}
						), 500);
						return () => {
							clearTimeout(s)
						}
					}
					), [e]),
				{
					currentStepRef: a,
					spacerRef: n,
					wrapRef: t
				}
			}
			)(u)
				, E = s.useRef(null);
			return s.useEffect((() => {
				if (!d) {
					const e = {
						currentStepIndex: 0,
						stepDisplayAnswers: [],
						stepGuesses: [],
						stepMistakeCounts: i.steps.map((() => 0))
					};
					h.current(e)
				}
			}
			), [i.steps, d]),
				s.useEffect((() => {
					const e = i.steps[u]
						, t = void 0 !== e && ce(e)
						, a = 0 === u ? 0 : 1e3;
					let n, r = !1;
					const s = () => {
						r || h.current({
							currentStepIndex: u + 1,
							stepDisplayAnswers: m,
							stepGuesses: p,
							stepMistakeCounts: g
						})
					}
						;
					if (null == e ? void 0 : e.instruction_tts_url)
						n = setTimeout((() => {
							(0,
								ve.a1)(e.instruction_tts_url, {
									requestedAt: window.performance.now(),
									text: e.blob.instruction.value
								}, t ? {
									eventListeners: [["ended", s]]
								} : void 0)
						}
						), a);
					else {
						if (!t)
							return;
						n = setTimeout(s, a + 2e3)
					}
					return () => {
						r = !0,
							clearTimeout(n)
					}
				}
				), [i.steps, u]),
				s.createElement("div", {
					className: "_1aP6Y f7WE2 _3rat3 -NaOf",
					ref: v
				}, i.steps.map(((t, a) => {
					if (a > u)
						return null;
					if (ce(t))
						return s.createElement("div", {
							className: r()({
								[he]: 0 !== a
							}),
							key: t.step_id,
							ref: a === u ? f : void 0
						}, s.createElement(de, {
							isActive: a >= u,
							step: t
						}));
					if ((e => "dialogue" !== e.blob.layout)(t)) {
						const n = i.steps[a + 1]
							, l = void 0 !== n && ce(n) && "summary" === n.dialogue_type && (0,
								Z.P)(n.blob);
						return s.createElement("div", {
							className: r()({
								[he]: 0 !== a
							}),
							key: t.step_id,
							onAnimationEnd: e => {
								var t;
								e.target === e.currentTarget && a === u && (null === (t = E.current) || void 0 === t || t.focus())
							}
							,
							ref: a === u ? f : void 0
						}, s.createElement(pe, {
							...e,
							displayAnswer: m[a],
							followedByShirt: l,
							inputRefCallback: e => E.current = e,
							isActive: a === u,
							onStepChange: e => {
								if (!(0,
									Z.kq)(e) && !(0,
										Z.zz)(e) && !(0,
											Z.Zz)(e))
									throw Error(`Invalid step guess: ${JSON.stringify(e)}`);
								const t = [...p];
								t[a] = e,
									h.current({
										currentStepIndex: u,
										stepDisplayAnswers: m,
										stepGuesses: t,
										stepMistakeCounts: g
									})
							}
							,
							step: t,
							stepGuess: p[a]
						}))
					}
					return null
				}
				)), s.createElement("div", {
					ref: _
				}))
		}
			, _e = ({ challenge: e }) => s.createElement("pre", {
				style: {
					fontSize: 12,
					maxHeight: "70vh",
					overflow: "auto",
					padding: 16
				}
			}, JSON.stringify(e.challengeBlob, null, 2))
			, Ee = {
				header: "_20xuG",
				shirt: "_1-13I",
				"shirt-pants-interactive": "_198PL",
				"web-shirt": "_3uS_0",
				"dynamic-shirt-pants-interactive": "_227Cv",
				"dynamic-shirt-pants-shirt": "VPim8",
				"dynamic-shirt-pants-diagram": "_2cU4Y",
				"text-shirt": "_1KXkZ",
				wrap: "_2On2O f7WE2 _3rat3",
				"content-understand": "_1fye2",
				"headband-section": "_1T4l5",
				"diagram-section": "_1WasM",
				"diagram-wrapper": "fxO41",
				"buttons-section": "_1AJjs"
			}
			, ye = ["bea", "duo", "eddy", "falstaff", "junior", "lily", "lin", "lucy", "oscar", "vikram", "zari"]
			, be = e => {
				const t = null == e ? void 0 : e.toLowerCase();
				return null != t && ye.includes(t) ? t : void 0
			}
			, Se = ({ challenge: e }) => "tutor" === e.challengeBlob.layout ? null : s.createElement("div", {
				className: Ee.header
			}, s.createElement(l.Z, {
				allowWrap: !0,
				latexColorConfig: e.latexColorConfig,
				math: e.challengeBlob.instruction.value
			}))
			, ke = e => {
				var t;
				const { challenge: a } = e
					, n = a.challengeBlob
					, r = a.latexColorConfig
					, l = be(a.mathWorldCharacter);
				return s.useEffect((() => {
					"selectOne" === n.layout && n.headband || (0,
						H.vU)("UnderstandSelectOneChallenge received unexpected layout.", {
							data: {
								challengeId: a.id,
								layout: n.layout
							},
							once: !0
						})
				}
				), [n, a.id]),
					"selectOne" === n.layout && n.headband ? s.createElement("div", {
						className: Ee["content-understand"]
					}, s.createElement("div", {
						className: Ee["headband-section"]
					}, s.createElement(U, {
						correct: null === (t = a.gradingResult) || void 0 === t ? void 0 : t.correct,
						headband: n.headband,
						latexColorConfig: r,
						worldCharacter: l
					})), s.createElement("div", {
						className: Ee["diagram-section"]
					}, s.createElement("div", {
						className: Ee["diagram-wrapper"]
					}, s.createElement(L.F, {
						allowWrap: !1,
						element: n.shirt,
						latexColorConfig: r,
						textClassName: Ee["text-shirt"]
					}))), s.createElement("div", {
						className: Ee["buttons-section"]
					}, s.createElement(P, {
						...e,
						challengeBlob: n,
						multiSelect: !1,
						worldCharacter: l
					}))) : null
			}
			, Ce = e => {
				const { challenge: t, onChange: a } = e
					, n = t.challengeBlob
					, l = t.latexColorConfig
					, i = be(t.mathWorldCharacter)
					, o = n.layout
					, [c, d] = s.useState();
				switch (o) {
					case "selectOne":
						return n.headband ? s.createElement(ke, {
							...e
						}) : s.createElement("div", {
							className: Ee.wrap
						}, s.createElement(xe, {
							latexColorConfig: l,
							shirt: n.shirt
						}), s.createElement(P, {
							...e,
							challengeBlob: n,
							multiSelect: !1,
							worldCharacter: i
						}));
					case "selectAll":
						return s.createElement("div", {
							className: Ee.wrap
						}, s.createElement(xe, {
							latexColorConfig: l,
							shirt: n.shirt
						}), s.createElement(P, {
							...e,
							challengeBlob: n,
							multiSelect: !0,
							worldCharacter: i
						}));
					case "match":
						return s.createElement(k, {
							...e,
							challengeBlob: n
						});
					case "matchMadness":
						return s.createElement(w, {
							...e,
							challengeBlob: n
						});
					case "typeFill":
						return s.createElement("div", {
							className: Ee.wrap
						}, s.createElement(xe, {
							latexColorConfig: l,
							shirt: n.shirt
						}), s.createElement(D, {
							...e,
							challengeBlob: n
						}));
					case "shirtPantsInteractive":
						return s.createElement("div", {
							className: r()(Ee["shirt-pants-interactive"], Ee[`${n.shirt.type}-shirt`])
						}, s.createElement(xe, {
							latexColorConfig: l,
							shirt: n.shirt
						}), s.createElement(u.R, {
							isInteractive: !0,
							onChange: a,
							web: n.pants
						}));
					case "dynamicShirtPantsInteractive":
						return s.createElement("div", {
							className: Ee["dynamic-shirt-pants-interactive"]
						}, s.createElement("div", {
							className: Ee["dynamic-shirt-pants-shirt"]
						}, s.createElement(W, {
							latexColorConfig: l,
							outputVariables: c,
							shirt: n.shirt,
							textClassName: Ee["text-shirt"]
						})), s.createElement("div", {
							className: Ee["dynamic-shirt-pants-diagram"]
						}, s.createElement(u.R, {
							isInteractive: !0,
							onChange: e => {
								d(e),
									a(e)
							}
							,
							web: n.pants
						})));
					case "onesie":
						return s.createElement(u.R, {
							isInteractive: !0,
							onChange: a,
							web: n.onesie
						});
					case "multiStep":
						return n.steps.length > 0 ? n.steps.every(ce) ? ((0,
							H.vU)("MathMultiStepChallenge has no interactive steps.", {
								data: {
									challengeId: t.id
								},
								once: !0
							}),
							null) : s.createElement(fe, {
								...e,
								challengeBlob: n
							}) : ((0,
								H.vU)("MathMultiStepChallenge received invalid steps length.", {
									data: {
										challengeId: t.id,
										stepsLength: n.steps.length
									},
									once: !0
								}),
								null);
					case "tutor":
						return s.createElement(_e, {
							...e
						});
					default:
						throw (0,
							ue.RJ)(o),
						Error(`Unexpected layout: ${o}`)
				}
			}
			, xe = ({ shirt: e, latexColorConfig: t }) => s.createElement("div", {
				className: Ee.shirt
			}, s.createElement(L.F, {
				allowWrap: !0,
				element: e,
				latexColorConfig: t,
				textClassName: Ee["text-shirt"]
			}))
	}
	,
	45570: (e, t, a) => {
		a.d(t, {
			F: () => g
		});
		var n = a(27378)
			, r = a(3291)
			, s = a(60042)
			, l = a.n(s)
			, i = a(71738);
		const o = "_15lZ-"
			, c = "pCN63";
		var d = a(58576);
		const u = ({ table: e, state: t, latexColorConfig: a }) => {
			const r = e.children
				, s = (() => {
					const t = e.column_headers;
					if (t)
						if (Array.isArray(t)) {
							if (2 === t.length)
								return t;
							(0,
								d.Kp)(`MathChallengeBlobTable: Headers present and expected 2 column headers, got ${t.length}`, {
									data: e,
									once: !0
								})
						} else
							(0,
								d.Kp)("MathChallengeBlobTable: Headers are not an array", {
									data: e,
									once: !0
								})
				}
				)();
			return n.createElement("div", {
				className: void 0 === s ? "_1qjbi" : "ymm9g _1qjbi",
				style: {
					"--num-table-rows": r.length
				}
			}, null == s ? void 0 : s.map(((e, t) => n.createElement("div", {
				className: l()("_3xtcC ihM27", {
					[o]: 0 === t,
					[c]: t === s.length - 1
				}),
				key: `header-${t}`
			}, e))), r.map(((e, d) => e.map(((u, m) => {
				const p = "web" !== u.type && "text" !== u.type || !u.label ? void 0 : u.label;
				return n.createElement("div", {
					className: l()("ihM27", {
						"POTqp ihM27": 0 === m && !s,
						[o]: 0 === m,
						[c]: m === e.length - 1,
						_1YyzP: 0 === d && !s,
						_8fIny: 1 === d,
						_3D3WH: d === r.length - 1
					}),
					key: `${d}-${m}`
				}, n.createElement(i.Z, {
					label: p
				}, n.createElement(g, {
					element: u,
					latexColorConfig: a,
					state: t
				})))
			}
			)))))
		}
			;
		var m = a(56818)
			, p = a(68903);
		const g = ({ element: e, onChange: t, textClassName: a, allowWrap: s = !1, state: l, latexColorConfig: i }) => {
			switch (e.type) {
				case "text":
					return n.createElement("div", {
						className: a
					}, n.createElement(r.Z, {
						allowWrap: s,
						latexColorConfig: i,
						math: e.value,
						state: l
					}));
				case "web":
					return n.createElement(m.R, {
						onChange: t,
						state: l,
						web: e
					});
				case "table":
					return n.createElement(u, {
						latexColorConfig: i,
						state: l,
						table: e
					});
				default:
					throw (0,
						p.RJ)(e),
					Error(`Unexpected element type: ${e}`)
			}
		}
	}
	,
	71738: (e, t, a) => {
		a.d(t, {
			Z: () => r
		});
		var n = a(27378);
		const r = ({ children: e, label: t }) => n.createElement("div", {
			className: "JhxgW"
		}, t ? n.createElement("div", {
			className: "_27M4R"
		}, t) : null, e)
	}
	,
	56818: (e, t, a) => {
		a.d(t, {
			R: () => p
		});
		var n = a(27378)
			, r = a(80254)
			, s = a(64502)
			, l = a(50498)
			, i = a(87710)
			, o = a(37971)
			, c = a(58576)
			, d = a(3866)
			, u = a(18804);
		const m = "outputVariables"
			, p = ({ isInteractive: e = !1, web: t, onChange: a, state: p = "base" }) => {
				var g;
				const [h, v] = n.useState()
					, f = n.useRef()
					, _ = (0,
						u.Fx)((e => {
							var t, a;
							return null === (a = null === (t = e.player.session) || void 0 === t ? void 0 : t.isLlmGenerated) || void 0 === a || a
						}
						))
					, E = (0,
						u.Fx)((e => e.player.status))
					, y = (0,
						s.Fg)();
				n.useEffect((() => {
					const e = e => {
						var t;
						if (E === o.c.Guessing && e.origin === window.location.origin && (null === (t = e.data) || void 0 === t ? void 0 : t.type) === m && void 0 !== e.data.payload) {
							const { payload: t, fromInteraction: n } = e.data;
							!n && (0,
								r.Xy)(f.current, t) || (f.current = t,
									null == a || a(t))
						}
					}
						;
					return window.addEventListener("message", e),
						() => {
							window.removeEventListener("message", e)
						}
				}
				), [a, E]),
					n.useEffect((() => {
						let e = !1;
						if (t.resources)
							return (async () => {
								var a;
								let n = t.html;
								const r = Object.entries(null !== (a = t.resources) && void 0 !== a ? a : {}).map((async ([e, t]) => {
									if (_ && "base" !== p) {
										const e = "Tried to transform URL for non-base state for LLM-generated content";
										(0,
											c.vU)(e, {
												data: {
													state: p,
													url: t
												},
												ex: Error(e),
												once: !0
											})
									}
									const a = _ ? t : (0,
										d.Au)(t, p);
									try {
										const t = await i.U2("webResource", a);
										return [e, t]
									} catch {
										return (0,
											l.XD)((async () => [e, await (await fetch(a)).text()]), {
												retries: 3
											})
									}
								}
								))
									, s = await Promise.all(r);
								if (e)
									return;
								for (const [e, t] of s)
									n = n.replace(e, t);
								n.includes("<html") && (n = n.replace(/<html([ >])/, `<html data-duo-theme="${y}"$1`));
								const o = "\n          <style>\n            html, body {\n              height: 100%;\n              margin: 0;\n              overflow: hidden;\n              padding: 0;\n            }\n            body {\n              align-items: center;\n              display: flex;\n              justify-content: center;\n            }\n            body > * {\n              height: 100%;\n              width: 100%;\n            }\n            svg {\n              height: auto !important;\n              max-height: 100%;\n              max-width: 100%;\n              overflow: visible !important;\n              width: auto !important;\n            }\n          </style>";
								n = n.includes("<head>") ? n.replace("<head>", `<head>${o}`) : n.includes("</head>") ? n.replace("</head>", `${o}</head>`) : o + n,
									n += `\n            <script>\n                // Hide body until fonts are ready\n                document.body.style.visibility = 'hidden';\n                document.fonts.ready.then(() => {\n                  document.body.style.visibility = 'visible';\n                });\n\n                let intervalId = null;\n\n                // fromInteraction=true marks messages from physical user gestures;\n                // fromInteraction=false (default) marks periodic polling messages.\n                // The parent uses this to bypass deduplication on genuine interactions.\n                const postOutputVariables = (fromInteraction = false) => {\n                    parent.postMessage({\n                        type: "${m}",\n                        payload: window.getOutputVariables?.(),\n                        fromInteraction,\n                    }, '${window.location.origin}');\n                };\n\n                const startPollingInterval = () => {\n                    if (!intervalId) {\n                        intervalId = setInterval(() => postOutputVariables(false), 100);\n                    }\n                };\n\n                const handleFirstInteraction = () => {\n                    postOutputVariables(true);\n                    startPollingInterval();\n                };\n\n                // Set up callback for iframe content to notify us of interactions\n                if (!window.duoDynamic) {\n                  window.duoDynamic = {}\n                }\n\n                if (!window.duo) {\n                  window.duo = {}\n                }\n\n                // HACK: old versions of the visual library, which are still used in some challenges,\n                // only know about the AndroidChallenge interface. This is required until we're able\n                // to disable those challenges to prevent users from getting stuck.\n                if (!window.AndroidChallenge) {\n                  window.AndroidChallenge = {};\n                }\n\n                window.duo.onFirstInteraction = handleFirstInteraction;\n                window.duoDynamic.onInteraction = () => postOutputVariables(true);\n                window.AndroidChallenge.firstInteraction = handleFirstInteraction;\n\n            <\/script>`,
									v(n)
							}
							)(),
								() => {
									e = !0
								}
								;
						v(t.html)
					}
					), [t.html, JSON.stringify(t.resources), p, _, y]),
					n.useEffect((() => {
						var e;
						"-1" === (null === (e = t.metadata) || void 0 === e ? void 0 : e.ASPECT_RATIO) && (0,
							c.Kp)("MathWebElement: received -1 aspect ratio from backend", {
								data: {
									metadata: t.metadata
								},
								once: !0
							})
					}
					), [t.metadata]);
				const b = (null === (g = t.metadata) || void 0 === g ? void 0 : g.ASPECT_RATIO) ? 1 / parseFloat(t.metadata.ASPECT_RATIO) : 1;
				return h ? n.createElement("iframe", {
					key: h,
					sandbox: "allow-scripts allow-same-origin",
					srcDoc: h,
					style: {
						alignItems: "center",
						aspectRatio: b,
						border: "none",
						display: "flex",
						height: "auto",
						justifyContent: "center",
						maxHeight: "100%",
						maxWidth: "100%",
						pointerEvents: e && E === o.c.Guessing ? "auto" : "none",
						width: "100%"
					},
					title: "Math Web Element"
				}) : null
			}
	}
	,
	92461: (e, t, a) => {
		a.d(t, {
			n: () => l,
			q: () => s
		});
		var n = a(79465);
		const r = "friend_invite"
			, s = () => {
				(0,
					n.track)("chess_match_start", {
						chess_pvp_match_creation_method: r
					})
			}
			, l = e => {
				(0,
					n.track)("chess_match_end", {
						chess_match_total_time: e.matchDurationSeconds,
						chess_pvp_match_creation_method: r,
						chess_pvp_match_was_left_by_user: e.wasLeftByUser
					})
			}
	}
	,
	2062: (e, t, a) => {
		a.d(t, {
			XX: () => n,
			n7: () => r
		});
		const n = 1
			, r = (e, t) => {
				if (0 === t.length)
					return () => { }
						;
				if (e({
					action: {
						reactions: t,
						type: "REACTIONS_APPLIED"
					},
					type: "UPDATE_CHESS_PVP_MATCH"
				}),
					!t.some((e => null !== e.reaction)))
					return () => { }
						;
				const a = window.setTimeout((() => {
					e({
						action: {
							reactions: t,
							type: "REACTIONS_REVERTED_TO_IDLE"
						},
						type: "UPDATE_CHESS_PVP_MATCH"
					})
				}
				), 2e3);
				return () => window.clearTimeout(a)
			}
	}
	,
	3866: (e, t, a) => {
		a.d(t, {
			Ak: () => s,
			Au: () => r
		});
		const n = ["base", "selected", "correct", "incorrect", "disabled"]
			, r = (e, t) => "base" === t ? e : e.replace(/_base_/g, `_${t}_`)
			, s = (e, t) => {
				const a = []
					, s = (e, l = !1) => {
						if (e)
							if (Array.isArray(e))
								e.forEach((e => s(e, l)));
							else if ("object" == typeof e) {
								const i = e
									, o = "button" === i.type;
								if ("web" === i.type && i.resources) {
									const e = Object.values(i.resources);
									!t && l ? e.forEach((e => {
										n.forEach((t => {
											a.push(r(e, t))
										}
										))
									}
									)) : a.push(...e)
								}
								Object.values(i).forEach((e => s(e, l || o)))
							}
					}
					;
				return s(e),
					a
			}
	}
	,
	65407: (e, t, a) => {
		a.d(t, {
			eT: () => I,
			NV: () => L,
			bT: () => P
		});
		const n = a.p + "images/sessionSplash/71c5fc25b71d42d147e2b9b99f87e29e.svg"
			, r = a.p + "images/sessionSplash/10b9465fdf7dcec1b68b7d7b9ab55d19.svg"
			, s = a.p + "images/sessionSplash/6e504757e34f1967faa2fe5736426b0d.svg"
			, l = a.p + "images/sessionSplash/6c43c3d6d75f195b23a32001d5281d3b.svg"
			, i = a.p + "images/sessionSplash/13635faf417ef38e3629bc27c6997259.svg"
			, o = a.p + "images/sessionSplash/a28096e8d8791ad03f3398a49a3f1216.svg"
			, c = a.p + "images/sessionSplash/6e7d1756105a96276a20179ed8c15521.svg"
			, d = a.p + "images/sessionSplash/a687f16ec35a53d59ae976553c817c4e.svg"
			, u = a.p + "images/sessionSplash/a8685ff9bbebc2ee59daa19245169fb8.svg"
			, m = a.p + "images/sessionSplash/ea893e4edcc0d4f714cc5f5a6cc61ce1.svg"
			, p = a.p + "images/sessionSplash/cfcf73616c849704195573741706bd1c.svg"
			, g = a.p + "images/sessionSplash/43fcb8c249009c9d662e57683d4b34d6.svg"
			, h = a.p + "images/sessionSplash/1bbe6e45d4171cc16befe331605f2e73.svg"
			, v = a.p + "images/sessionSplash/ca682435600262f017ab07ea86b71640.svg"
			, f = a.p + "images/sessionSplash/c5f3ca6751a684cc6e5911674ed36bdc.svg"
			, _ = a.p + "images/sessionSplash/38da9a473099a9dcf15e91f6dc7f97b3.svg"
			, E = a.p + "images/sessionSplash/7107ab836ff23d608c3d3910ef176faf.svg"
			, y = a.p + "images/sessionSplash/a1cc605b088c9422c8c5ad840c6614cb.svg"
			, b = a.p + "images/sessionSplash/ddf2b3dc339ad5370d7bc47053205f2a.svg"
			, S = a.p + "images/sessionSplash/f5a8635560f04467140a67663c845b64.svg"
			, k = a.p + "images/sessionSplash/ea38bab9be2b094519a19d09fef54812.svg"
			, C = a.p + "images/sessionSplash/13e5df2f54649baa6e9430ac5c13c994.svg"
			, x = a.p + "images/sessionSplash/55e2d3daa3dfa0928f306bbd0655adc7.svg"
			, T = a.p + "images/sessionSplash/5c80e88627f9e138599f08ca732b4e60.svg"
			, w = a.p + "images/sessionSplash/6fc536b32ff7bc8323e7734d7420af8b.svg"
			, N = a.p + "images/sessionSplash/aae8866af1b0920de3e3270059a90e89.svg"
			, R = a.p + "images/sessionSplash/3381d31310d9dd477dfa66efa8f6c35a.svg"
			, I = {
				bea: n,
				duo: s,
				eddy: d,
				falstaff: r,
				junior: n,
				lily: c,
				lin: i,
				lucy: i,
				oscar: u,
				vikram: l,
				zari: o
			}
			, L = {
				bea: m,
				duo: g,
				eddy: E,
				falstaff: p,
				junior: m,
				lily: _,
				lin: v,
				lucy: v,
				oscar: y,
				vikram: h,
				zari: f
			}
			, P = {
				bea: b,
				duo: k,
				eddy: N,
				falstaff: S,
				junior: b,
				lily: w,
				lin: x,
				lucy: x,
				oscar: R,
				vikram: C,
				zari: T
			}
	}
	,
	30480: (e, t, a) => {
		a.d(t, {
			X: () => l
		});
		var n = a(27378)
			, r = a(80254)
			, s = a(30326);
		const l = ({ visemeInputsRef: e, audioElRef: t, encodedVisemesRef: a, currentTtsUrlRef: l, onAudioPlaying: i }) => {
			const o = n.useCallback(r.HP(s.w), [])
				, c = n.useRef(i);
			n.useLayoutEffect((() => {
				c.current = i
			}
			)),
				n.useLayoutEffect((() => {
					const n = () => {
						var s;
						const i = e.current
							, d = t.current
							, u = l.current
							, m = a.current
							, p = d && !d.paused && u;
						if (p && (null === (s = c.current) || void 0 === s || s.call(c)),
							i && 0 !== i.length) {
							if (p && m) {
								const e = 1e3 * d.currentTime
									, t = o(m, u);
								i.forEach((a => {
									const n = t.find((t => t.viseme === a.name && e >= t.start && e <= t.start + t.duration));
									if (n) {
										const t = .3333333333333333 * n.duration
											, r = e - n.start
											, s = r < t ? r / t : 1;
										a.value = 100 * s
									} else
										a.value = 0
								}
								))
							} else
								i.forEach((e => {
									e.value = "100" === e.name ? 100 : 0
								}
								));
							r = requestAnimationFrame(n)
						} else
							r = requestAnimationFrame(n)
					}
						;
					let r = requestAnimationFrame(n);
					return () => cancelAnimationFrame(r)
				}
				), [])
		}
	}
	,
	55824: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/496f78efd513f43283dc6534975a3860.svg"
	}
	,
	5102: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/6b69a4d43e7dbcc398b1ac22026552d3.svg"
	}
	,
	4941: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/9f13c4b355a693279883421ebeba3d27.svg"
	}
	,
	97005: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/dab1d912c7b7aba55e515ed01e973600.svg"
	}
	,
	64106: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/4a0520a77d0234c2805d9dad84963ecc.svg"
	}
	,
	55443: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/5e2f1f643205f05b9c0ff5a2a0cdfd85.svg"
	}
	,
	91766: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/5eef77e7abd1a345c2c828850101b4c9.svg"
	}
	,
	53018: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/355da34d8fc37f54a2e5ee05f6fe6678.svg"
	}
	,
	77480: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/5d7d7e137acac2ed354645603ba0d562.svg"
	}
	,
	93900: (e, t, a) => {
		e.exports = a.p + "images/duoRadio/transcript/d0a8eb72e7e327c57dbfac314d358d7e.svg"
	}
	,
	64008: (e, t, a) => {
		e.exports = a.p + "images/practiceHub/98bf209e0bad96b382c22d5c25cfa9b8.svg"
	}
	,
	29486: (e, t, a) => {
		e.exports = a.p + "lottie/5782f0b403d1b11b07bb802bbaf52f4d.json"
	}
}]);
