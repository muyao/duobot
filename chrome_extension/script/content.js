(() => {
	window.duoBot = {
		challenges: null,
		currentChallengeIdx: null,
		isDone: true,
		isAllSolved: false,
		isInit: true,
		syncSettings: function () {
			localStorage.setItem("duoBot.initialised", true);
			localStorage.setItem("duoBot.settings.delay1", this.delay1);
			localStorage.setItem("duoBot.settings.delay2", this.delay2);
			localStorage.setItem("duoBot.settings.delay3", this.delay3);
			localStorage.setItem("duoBot.settings.delayMatch1", this.delayMatch1);
			localStorage.setItem("duoBot.settings.delayMatch2", this.delayMatch2);
			localStorage.setItem("duoBot.settings.delayRandom1", this.delayRandom1);
			localStorage.setItem("duoBot.settings.delayRandom2", this.delayRandom2);
			localStorage.setItem("duoBot.settings.delayTranslateListentap", this.delayTranslateListentap);
		},
		resetSettings: function () {
			if (!this.isInit) {
				const confirmation = confirm("Reset settings?");
				if (!confirmation) return;
				localStorage.removeItem("duoBot.initialised");
			}
			if (localStorage.getItem("duoBot.initialised") === null) {
				this.delay1 = 400;
				this.delay2 = 250;
				this.delay3 = 800;
				this.delayMatch1 = 100;
				this.delayMatch2 = 50;
				this.delayRandom1 = 400;
				this.delayRandom2 = 100;
				this.delayTranslateListentap = 100;
				this.syncSettings();
			} else {
				this.getSettingsFromLocalStorage();
			}
			this.isInit = false;
			return "Settings have been reset";
		},
		getSettingsFromLocalStorage: function () {
			this.delay1 = parseInt(localStorage.getItem("duoBot.settings.delay1") ?? 400);
			this.delay2 = parseInt(localStorage.getItem("duoBot.settings.delay2") ?? 250);
			this.delay3 = parseInt(localStorage.getItem("duoBot.settings.delay3") ?? 800);
			this.delayMatch1 = parseInt(localStorage.getItem("duoBot.settings.delayMatch1") ?? 100);
			this.delayMatch2 = parseInt(localStorage.getItem("duoBot.settings.delayMatch2") ?? 50);
			this.delayRandom1 = parseInt(localStorage.getItem("duoBot.settings.delayRandom1") ?? 400);
			this.delayRandom2 = parseInt(localStorage.getItem("duoBot.settings.delayRandom2") ?? 100);
			this.delayTranslateListentap = parseInt(localStorage.getItem("duoBot.settings.delayTranslateListentap"));
		},
		changeSetting: function (setting, value) {
			if (this[setting] === undefined) throw new Error(`Setting "${setting}" does not exist`);
			this[setting] = value;
			this.syncSettings();
			return value;
		},
		allSettings: function () {
			this.getSettingsFromLocalStorage();
			throw new Error( // need to use throw new Error because console.log() and etc. are disabled
				"\n\n\n" +
				"===== Settings =====\n" +
				`- delay1: ${this.delay1}\n` +
				`- delay2: ${this.delay2}\n` +
				`- delay3: ${this.delay3}\n` +
				`- delayMatch1: ${this.delayMatch1}\n` +
				`- delayMatch1: ${this.delayMatch2}\n` +
				`- delayRandom1: ${this.delayRandom1}\n` +
				`- delayRandom1: ${this.delayRandom2}\n` +
				`- delayTranslateListentap: ${this.delayTranslateListentap}\n` +
				"\n\n"
			)
		},
		test: function () {
			alert("test");
			return true;
		},
		help: function () {
			throw new Error( // need to use throw new Error because console.log() and etc. are disabled
				"\n\n\n" +
				"===== DuoBot Help Manual =====\n" +
				"- duoBot.challenges\n" +
				"\t- Array of challenges in current lesson\n" +
				"- duoBot.changeSetting()\n" +
				"\t- Change settings (see rest of manual)\n" +
				"\t- Takes 2 arguments:\n" +
				"\t\t- setting: Which setting to change?\n" +
				"\t\t- value: What value to change it to?\n" +
				"- duoBot.currentChallengeIdx\n" +
				"\t- The current exercise #\n" +
				"- duoBot.delay1\n" +
				"\t- Delay between completing challenge and pressing Check\n" +
				"\t- Default value is 400\n" +
				"- duoBot.delay2\n" +
				"\t- Delay between checking and moving on to next challenge\n" +
				"\t- Default value is 250\n" +
				"- duoBot.delay3\n" +
				"\t- Delay between completing exercise and beginning first action on second exercise\n" +
				"\t- Default value is 800\n" +
				"- duoBot.delayRandom1\n" +
				"\t- Max. added random delay in translate, listenTap and match exercises\n" +
				"\t- Default value is 400\n" +
				"- duoBot.delayRandom2\n" +
				"\t- Max. added random delay in general and in match exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.delayTranslateListentap\n" +
				"\t- Minimum delay in translate and listenTap exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.delayMatch1\n" +
				"\t- Minimum delay in match exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.delayMatch2\n" +
				"\t- Minimum delay in match exercises\n" +
				"\t- Default value is 50\n" +
				"- duoBot.endGrind\n" +
				"\t- Stop grinding (see duoBot.grind())" +
				"\t- No arguments required" +
				"- duoBot.grind()\n" +
				"\t- Automatically grind for XP\n" +
				"\t- Takes 2 arguments:\n" +
				"\t\t- legendaryLink: Link to the legendary level\n" +
				"\t\t- timeMinutes: End after # minutes\n" +
				"- duoBot.help()\n" +
				"\t- Display this manual\n" +
				"\t- No arguments required\n" +
				"- duoBot.next()\n" +
				"\t- Helper function\n" +
				"\t- Moves to the next challenge\n" +
				"- duoBot.resetSettings()\n" +
				"\t- Reset duoBot settings\n" +
				"\t- No arguments required\n" +
				"- duoBot.skip()\n" +
				"\t- Helper function\n" +
				"\t- Skips current challenge, for example during listening exercises\n" +
				"- duoBot.solveAll()\n" +
				"\t- Solve all exercises in this lesson\n" +
				"\t- One argument required: endAfter\n" +
				"\t\t- Dictates after how many exercises the bot should stop\n" +
				"\t\t- Defaults to duoBot.challenges.length\n" +
				"- duoBot.solveThis()\n" +
				"\t- Solve the current challenge\n" +
				"\t- No arguments required\n" +
				"\n\n"
			);
		},
		next: function () {
			setTimeout(() => {
				document.querySelector("[data-test=player-next]").click();
			}, this.delay1 + this.delayRandom2 * Math.random());
			setTimeout(() => {
				document.querySelector("[data-test=player-next]").click();
				setTimeout(() => {
					this.isDone = true;
				}, this.delay3);
			}, this.delay1 + this.delay2 + this.delayRandom2 * Math.random());
		},
		skip: function () {
			setTimeout(() => {
				document.querySelector("[data-test=player-skip]").click();
			}, this.delay1 + this.delayRandom2 * Math.random());
			setTimeout(() => {
				document.querySelector("[data-test=player-next]").click();
				setTimeout(() => {
					this.isDone = true;
				}, this.delay3);
			}, this.delay1 + this.delay2 + this.delayRandom2 * Math.random());
		},
		solveThis: function () {
			this.getSettingsFromLocalStorage();
			this.isDone = false;
			const currentChallenge = this.challenges[this.currentChallengeIdx];
			if ( // select || assist || gapFill
				currentChallenge.type === "select" ||
				currentChallenge.type === "assist" ||
				currentChallenge.type === "gapFill"
			) {
				const correctIdx = currentChallenge.correctIndex;
				setTimeout(() => {
					document.querySelectorAll("[data-test=challenge-choice]")[correctIdx].click();
				}, 0);
				this.next();
			} else if (
				currentChallenge.type === "translate" ||
				currentChallenge.type === "listenTap"
			) { // translate || listenTap
				const finished = new Array(currentChallenge.choices.length);
				finished.fill(false);
				const choiceElems = document.querySelectorAll("[data-test=word-bank] button");
				const choiceElemsText = document.querySelectorAll("[data-test=challenge-tap-token-text]");
				let delay = 0;
				currentChallenge.correctTokens.forEach((t) => {
					for (const elemIdx in choiceElems) {
						if (choiceElemsText[elemIdx].innerHTML === t && !finished[elemIdx]) {
							setTimeout(() => {
								choiceElems[elemIdx].click();
							}, delay);
							finished[elemIdx] = true;
							delay += this.delayTranslateListentap + this.delayRandom1 * Math.random();
							break;
						}
					}
				});
				setTimeout(() => {
					this.next();
				}, delay);
			} else if (currentChallenge.type === "match") { // match
				const pairs = currentChallenge.pairs;
				const elems = document.querySelectorAll("span>button");
				const elemsText = document.querySelectorAll("[data-test=challenge-tap-token-text]");
				const finished = new Array(2 * pairs.length);
				finished.fill(false);
				let elem1 = null;
				let elem2 = null;
				const clicks = [];
				pairs.forEach((p) => {
					for (const elemIdx in elems) {
						if (elemsText[elemIdx].innerHTML === p.fromToken && !finished[elemIdx]) {
							elem1 = elems[elemIdx];
							finished[elemIdx] = true;
						} else if (
							elemsText[elemIdx].innerHTML === p.learningToken && !finished[elemIdx + pairs.length]
						) {
							elem2 = elems[elemIdx];
							finished[elemIdx + pairs.length] = true;
						}
						if (elem1 !== null && elem2 !== null) {
							clicks.push([elem1, elem2]);
							elem1 = null;
							elem2 = null;
							break;
						}
					}
				});
				let delay = 0;
				clicks.forEach((c) => {
					setTimeout(() => {
						c[0].click();
					}, delay);
					delay += this.delayMatch1 + this.delayRandom2 * Math.random();
					setTimeout(() => {
						c[1].click();
					}, delay);
					delay += this.delayMatch2 + this.delayRandom1 * Math.random();
				})
				setTimeout(() => {
					document.querySelector("[data-test=player-next]").click();
					setTimeout(() => {
						this.isDone = true;
					}, this.delay3);
				}, delay + this.delay1);
			} else if (currentChallenge.type === "listenMatch") { // listenMatch
				this.skip();
			} else {
				throw new Error(`Challenge type "${currentChallenge.type}" not implemented yet`);
			}
		},
		solveAll: function (endAfter = null) {
			this.isAllSolved = false;
			const solveInterval = setInterval(() => {
				if (this.isDone) {
					this.solveThis();
				}
				if (this.currentChallengeIdx >= (endAfter ?? this.challenges.length)) {
					clearInterval(solveInterval);
					setTimeout(() => {
						this.isAllSolved = true;
					}, this.delay3);
				}
			}, 1000);
		},
		grind: function (legendaryLink, timeMinutes) {
			const endAt = localStorage.getItem("duoBot.grind.endAt");
			if (endAt) {
				if (window.location.href !== legendaryLink) return false;
				this.isAllSolved = false;
				setTimeout(() => {
					try {
						document.querySelector("[data-test=player-next]").click();
						this.solveAll(8);
					} catch {
						window.location = legendaryLink;
					}
				}, 5000);
				const grindInterval = setInterval(() => {
					if (this.isAllSolved) {
						clearInterval(grindInterval);
						document.querySelector("[data-test=quit-button]").click();
						setTimeout(() => {
							document.querySelector("[data-test=notification-drawer-no-thanks-button]").click();
							setTimeout(() => {
								if (Date.now() < parseInt(localStorage.getItem("duoBot.grind.endAt") ?? 0)) {
									window.location = legendaryLink;
								} else {
									localStorage.removeItem("duoBot.grind.endAt");
									localStorage.removeItem("duoBot.grind.legendaryLink");
									alert("Grind finished");
								}
							}, 1200 + this.delayRandom1 * Math.random());
						}, 400 + this.delayRandom1 * Math.random());
					}
				}, 1000);
			} else if (timeMinutes) {
				localStorage.setItem("duoBot.grind.endAt", Date.now() + 60000 * timeMinutes);
				localStorage.setItem("duoBot.grind.legendaryLink", legendaryLink);
				window.location = legendaryLink;
			}
		},
		endGrind: function () {
			localStorage.removeItem("duoBot.grind.endAt");
			localStorage.removeItem("duoBot.grind.legendaryLink");
			this.isAllSolved = true;
			window.location = "/";
		}
	};
	duoBot.resetSettings();
	function injectScript(t) {
		const scriptElem = document.createElement("script");
		scriptElem.innerHTML = t;
		document.head.appendChild(scriptElem);
	}
	fetch("https://cdn.jsdelivr.net/gh/muyao/duobot@main/src/src.js")
		.then((r) => {
			if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
			return r.text();
		})
		.then((t) => {
			injectScript(t);
		})
		.catch((e) => {
			throw new Error(`Failed to inject script: ${e}`);
		});
	fetch("https://cdn.jsdelivr.net/gh/muyao/duobot@main/src/src2.js")
		.then((r) => {
			if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
			return r.text();
		})
		.then((t) => {
			injectScript(t);
		})
		.catch((e) => {
			throw new Error(`Failed to inject script: ${e}`);
		});
	if (window.location.href === localStorage.getItem("duoBot.grind.legendaryLink")) {
		duoBot.grind(window.location.href);
	}
})();