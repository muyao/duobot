# Duobot

*Don't let Duo find out...*

Duobot is a Chrome extension designed to grind XP in Duolingo.

## Features
* **Auto-Lessons:** Automatically completes lessons and practices to get XP
* **Customisable Settings:** Be able to fully customise how fast it solves lessons
* **Debug Console:** Everything is in the Debug console. Script-kiddy proof

## Prerequisites
This is a Chrome extension, so make sure you have Google Chrome installed.

## Quickstart

1. **Copypaste this:**
   ```bash
   git clone https://github.com/muyao/duobot.git;cd duobot/chrome_extension;pwd
   ```

2. **Activate the extension:**
   1. Go to **[chrome://extensions/](chrome://extensions/)**
   2. Turn on **Developer mode** (Top right corner)
   3. Click **Load unpacked**
   4. Open the **chrome_extension** directory (cloned)

3. **Go to [Duolingo](https://www.duolingo.com/learn/):**
   1. Start any lesson, e.g. [https://www.duolingo.com/lesson/unit/19/level/3](https://www.duolingo.com/lesson/unit/19/level/3)
   2. Change in the URL `/level/` to `/legendary/`
      * So now, the URL is [https://www.duolingo.com/lesson/unit/19/legendary/3](https://www.duolingo.com/lesson/unit/19/legendary/3)

4. **Paste this into the Console:**
   ```javascript
   duoBot.grind("Your URL")
   ```

5. **Watch it farm legendary lessons for XP!**

## Configuration & Settings
* **To see all settings:**
   ```javascript
   duoBot.allSettings()
   ```

* **To change settings:**
   ```javascript
   duoBot.changeSetting("theSettingThatYouWantToChange", value)
   ```

* **To reset settings:**
   ```javascript
   duoBot.resetSettings()
   ```

## More infos

* `duoBot.help()` displays the help menu

* `duoBot.solveThis()` solves the current exercise

* `duoBot.solveAll()` solves all exercises in the current lesson

* `duoBot.grind()` farms XP until the specified time is reached or `duoBot.endGrind()` gets called
   * `duoBot.grind()` takes 2 arguments: `legendaryLink` and `timeMinutes`
   * `legendaryLink` is required (see above), `timeMinutes` is optional
   * `timeMinutes` dictates for how long it should farm XP, defaults to 90 minutes

   *Note: `duoBot.solveThis()`, `duoBot.solveAll()` and `duoBot.grind()` only work consistently for legendary lessons. They may break / not work / solve exercises wrong on lessons other than legendary*

* `duoBot.makeMeUpToDate()` refreshes and resets settings, reloads page.

   *Note: `duoBot.makeMeUpToDate()` won't refresh the extension itself. Go to [chrome://extensions/](chrome://extensions/) to refresh extension itself*

* `duoBot.challenges` all the exercises of the current lesson

* `duoBot.currentChallengeIdx` the current exercise #

## Disclaimer

**Use at your own risk.** Duolingo Bots violate their Terms of Service, and doing so might result in your account being flagged, shadow-banned, or permanently terminated. I (`muyao`) am not responsible for any consequences that arise from using this extension.

***Duo is always watching.***

*v1.12.6*

*Fri, 17 Jul 2026 14:54:00 GMT*