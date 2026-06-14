(() => {
	window.duoBot = {
		challenges: null,
		currentChallengeIdx: null,
		isDone: true,
		isAllSolved: false,
		saveSettings: function () {
			localStorage.setItem("duoBot.initialised", true);
			localStorage.setItem("duoBot.settings.delay1", this.delay1);
			localStorage.setItem("duoBot.settings.delay2", this.delay2);
			localStorage.setItem("duoBot.settings.delay3", this.delay3);
			localStorage.setItem("duoBot.settings.delayMatch1", this.delayMatch1);
			localStorage.setItem("duoBot.settings.delayMatch2", this.delayMatch2);
			localStorage.setItem("duoBot.settings.delayRandom1", this.delayRandom1);
			localStorage.setItem("duoBot.settings.delayRandom2", this.delayRandom2);
			localStorage.setItem("duoBot.settings.delayTranslateListentap", this.delayTranslateListentap);
			localStorage.setItem("duoBot.settings.delaySolveAllRandomMin", this.delaySolveAllRandomMin);
			localStorage.setItem("duoBot.settings.delaySolveAllRandomExtra", this.delaySolveAllRandomExtra);
			localStorage.setItem("duoBot.settings.chanceSolveAllAddedDelay", this.chanceSolveAllAddedDelay);
		},
		resetSettings: function (dontAskForConfirmation) {
			if (localStorage.getItem("duoBot.initialised") !== null && !dontAskForConfirmation) {
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
				this.delaySolveAllRandomMin = 1500;
				this.delaySolveAllRandomExtra = 2000;
				this.chanceSolveAllAddedDelay = 0.1;
				this.saveSettings();
			} else {
				this.getSettings();
			}
			return "Settings have been reset";
		},
		getSettings: function () {
			this.delay1 = parseInt(localStorage.getItem("duoBot.settings.delay1") ?? 400);
			this.delay2 = parseInt(localStorage.getItem("duoBot.settings.delay2") ?? 250);
			this.delay3 = parseInt(localStorage.getItem("duoBot.settings.delay3") ?? 800);
			this.delayMatch1 = parseInt(localStorage.getItem("duoBot.settings.delayMatch1") ?? 100);
			this.delayMatch2 = parseInt(localStorage.getItem("duoBot.settings.delayMatch2") ?? 50);
			this.delayRandom1 = parseInt(localStorage.getItem("duoBot.settings.delayRandom1") ?? 400);
			this.delayRandom2 = parseInt(localStorage.getItem("duoBot.settings.delayRandom2") ?? 100);
			this.delayTranslateListentap = parseInt(
				localStorage.getItem("duoBot.settings.delayTranslateListentap") ?? 100
			);
			this.delaySolveAllRandomMin = parseInt(
				localStorage.getItem("duoBot.settings.delaySolveAllRandomMin") ?? 1200
			);
			this.delaySolveAllRandomExtra = parseInt(
				localStorage.getItem("duoBot.settings.delaySolveAllRandomExtra") ?? 1500
			);
			this.chanceSolveAllAddedDelay = parseFloat(
				localStorage.getItem("duoBot.settings.chanceSolveAllAddedDelay") ?? 0.1
			);
		},
		changeSetting: function (setting, value) {
			if (!(this[setting] ?? false)) throw new Error(`Setting "${setting}" does not exist`);
			if (!(value ?? false)) throw new Error(`Please provide a value!`);
			this[setting] = value;
			this.saveSettings();
			return value;
		},
		makeMeUpToDate: function () {
			localStorage.removeItem("duoBot.initialised");
			window.location = "/";
		},
		allSettings: function () {
			this.getSettings();
			throw new Error( // need to use throw new Error because console.log() and etc. are disabled
				"\n\n\n" +
				"===== Settings =====\n" +
				`- delay1: ${this.delay1}\n` +
				`- delay2: ${this.delay2}\n` +
				`- delay3: ${this.delay3}\n` +
				`- delayMatch1: ${this.delayMatch1}\n` +
				`- delayMatch2: ${this.delayMatch2}\n` +
				`- delayRandom1: ${this.delayRandom1}\n` +
				`- delayRandom2: ${this.delayRandom2}\n` +
				`- delayTranslateListentap: ${this.delayTranslateListentap}\n` +
				`- delaySolveAllRandomMin: ${this.delaySolveAllRandomMin}\n` +
				`- delaySolveAllRandomExtra: ${this.delaySolveAllRandomExtra}\n` +
				`- chanceSolveAllAddedDelay: ${this.chanceSolveAllAddedDelay}\n` +
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
				"- duoBot.chanceSolveAllAddedDelay\n" +
				"\t- Chance to get an extra delay in solveAll to avoid getting flagged as a bot\n" +
				"\t- Default value is 0.125" +
				"\t- Set to 0 to never happen" +
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
				"- duoBot.delayMatch1\n" +
				"\t- Minimum delay in match exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.delayMatch2\n" +
				"\t- Minimum delay in match exercises\n" +
				"\t- Default value is 50\n" +
				"- duoBot.delayRandom1\n" +
				"\t- Max. added random delay in translate, listenTap and match exercises\n" +
				"\t- Default value is 400\n" +
				"- duoBot.delayRandom2\n" +
				"\t- Max. added random delay in general and in match exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.delaySolveAllRandomExtra\n" +
				"\t- Additional delay added on top of duoBot.delaySolveAllRandomMin\n" +
				"\t- Default value is 1000\n" +
				"- duoBot.delaySolveAllRandomMin\n" +
				"\t- Minimal random delay in solveAll\n" +
				"\t- Default value is 900\n" +
				"- duoBot.delayTranslateListentap\n" +
				"\t- Minimum delay in translate and listenTap exercises\n" +
				"\t- Default value is 100\n" +
				"- duoBot.endGrind\n" +
				"\t- Stop grinding (see duoBot.grind())\n" +
				"\t- No arguments required\n" +
				"- duoBot.grind()\n" +
				"\t- Automatically grind for XP\n" +
				"\t- Takes 3 arguments:\n" +
				"\t\t- legendaryLink: Link to the legendary level\n" +
				"\t\t- timeMinutes: End after # minutes\n" +
				"\t\t\t- Defaults to 90\n" +
				"\t\t- endAfter: End each lesson after # exercises\n" +
				"\t\t\t- Defaults to 8\n" +
				"- duoBot.help()\n" +
				"\t- Display this manual\n" +
				"\t- No arguments required\n" +
				"- duoBot.makeMeUpToDate()\n" +
				"\t- Refreshes the settings and reloads page\n" +
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
				setTimeout(() => {
					document.querySelector("[data-test=player-next]").click();
					setTimeout(() => {
						this.isDone = true;
					}, this.delay3);
				}, this.delay2 + this.delayRandom2 * Math.random());
			}, this.delay1 + this.delayRandom2 * Math.random());
		},
		skip: function () {
			setTimeout(() => {
				document.querySelector("[data-test=player-skip]").click();
				setTimeout(() => {
					document.querySelector("[data-test=player-next]").click();
					setTimeout(() => {
						this.isDone = true;
					}, this.delay3);
				}, this.delay2 + this.delayRandom2 * Math.random());
			}, this.delay1 + this.delayRandom2 * Math.random());
		},
		solveThis: function () {
			this.getSettings();
			this.isDone = false;
			const currentChallenge = this.challenges[this.currentChallengeIdx];
			if ( // select || assist || gapFill
				currentChallenge.type === "select" ||
				currentChallenge.type === "assist" ||
				currentChallenge.type === "gapFill"
			) {
				const correctIdx = currentChallenge.correctIndex;
				document.querySelectorAll("[data-test=challenge-choice]")[correctIdx].click();
				this.next();
			} else if ( // translate || listenTap
				currentChallenge.type === "translate" ||
				currentChallenge.type === "listenTap"
			) {
				const finished = new Array(currentChallenge.choices.length).fill(false);;
				const choiceElems = document.querySelectorAll("[data-test=word-bank] button");
				const choiceElemsText = document.querySelectorAll("[data-test=challenge-tap-token-text]");
				let delay = 0;
				currentChallenge.correctTokens.forEach((t) => {
					for (const elemIdx in choiceElems) {
						if (choiceElemsText[elemIdx].innerHTML !== t || finished[elemIdx]) continue;
						setTimeout(() => {
							choiceElems[elemIdx].click();
						}, delay);
						finished[elemIdx] = true;
						delay += this.delayTranslateListentap + this.delayRandom1 * Math.random();
						break;
					}
				});
				setTimeout(() => {
					this.next();
				}, delay);
			} else if (currentChallenge.type === "match") { // match
				const pairs = currentChallenge.pairs;
				const elems = document.querySelectorAll("span>button");
				const elemsText = document.querySelectorAll("[data-test=challenge-tap-token-text]");
				const finished = new Array(2 * pairs.length).fill(false);
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
						if (elem1 === null || elem2 === null) continue;
						clicks.push([elem1, elem2]);
						elem1 = null;
						elem2 = null;
						break;
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
		solveAll: function (endAfter) {
			this.isAllSolved = false;
			const solveInterval = setInterval(() => {
				if (this.isDone) {
					this.isDone = false;
					setTimeout(() => {
						this.solveThis();
					},
						Math.random() < this.chanceSolveAllAddedDelay
							? this.delaySolveAllRandomMin + this.delaySolveAllRandomExtra * Math.random()
							: 0
					);
				}
				if (this.currentChallengeIdx < (endAfter ?? this.challenges.length)) return;
				clearInterval(solveInterval);
				setTimeout(() => {
					this.isAllSolved = true;
				}, this.delay3);
			}, 1000);
		},
		grind: function (legendaryLink, timeMinutes = 90, endAfter = 8) {
			const endAt = localStorage.getItem("duoBot.grind.endAt");
			if (endAt) {
				if (window.location.href !== legendaryLink) return false;
				this.isAllSolved = false;
				setTimeout(() => {
					try {
						document.querySelector("[data-test=player-next]").click();
						this.solveAll(endAfter);
					} catch {
						window.location = legendaryLink;
					}
				}, 5000);
				const grindInterval = setInterval(() => {
					if (!this.isAllSolved) return
					clearInterval(grindInterval);
					document.querySelector("[data-test=quit-button]").click();
					setTimeout(() => {
						document.querySelector("[data-test=notification-drawer-no-thanks-button]").click();
						setTimeout(() => {
							if (Date.now() < parseInt(localStorage.getItem("duoBot.grind.endAt") ?? 0)) {
								window.location = legendaryLink;
								return;
							}
							localStorage.removeItem("duoBot.grind.endAt");
							localStorage.removeItem("duoBot.grind.legendaryLink");
							alert("Grind finished");
						}, 1200 + this.delayRandom1 * Math.random());
					}, 400 + this.delayRandom1 * Math.random());
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
	duoBot.resetSettings(true);
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