# INSTALLATION

To install it right away for Linux users, type:

    git clone https://github.com/sckitt/brophene.git && cd brophene && sudo chmod +x brophene.sh

# DESCRIPTION
**Brophene** is a privacy/security-hardening script for Firefox. The goal is to automate every tweak recommended by [The Hated One](https://www.youtube.com/channel/UCjr2bPAyPV7t35MvcgT3W8Q). Additional presets are available for improvements and personalization. Tested and developed for Linux.

    ./brophene.sh [OPTIONS]

Below is everything included in this script:

1. Configure preferences ([two are missing](https://github.com/sckitt/brophene/blame/master/README.md#L114-L115))
2. Download and install [ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js/) (optional)
3. Download and install obligatory extensions ([complete listing](https://github.com/sckitt/brophene/blame/master/README.md#L61-L65), configuring extensions: [1](https://github.com/sckitt/brophene/blame/master/README.md#L67-L87) [2](https://github.com/sckitt/brophene/blame/master/README.md#L89-L110) [3](https://github.com/sckitt/brophene/blame/master/README.md#L120-L138))
4. Download and install optional extensions (optional, customizable)

# WHY?
Your browsing habits reveal a lot about your personal life. The metadata you generate can be scraped by trackers for targeted advertising and government surveillance. With Firefox and the right tweaks, the mitigation of these threats is unparalleled to any other browser. Achieving this would require going through a plethora of settings and extensions, this script aims to automate the whole process.

# OPTIONS
    -h, --help                       Show help
    -ls                              List profiles
    -o, --open                       Open profile directory
    --standard [PROFILE]             The Hated One's tweaks are enabled
    --safer [PROFILE]                Standard + ghacks-user.js
    --safest [PROFILE]               Safer + curated preferences

# DETAILS
Below is every tweak and its source. Some sources contain duplicate instructions, which have been redacted for brevity:

### (2019.12.11) [How to secure your online accounts](https://www.youtube.com/watch?v=3H2CKTRqOEQ)
**[about:preferences]**
* General > Network Settings > Settings... > check `Enable DNS over HTTPS`

### (2019.03.17) [How to configure Firefox settings for maximum privacy and security](https://www.youtube.com/watch?v=tQhWdsFMc24)
**[about:preferences]**
* Privacy & Security > Content Blocking > Strict (conflicts with [tweaks from an older tutorial](https://github.com/sckitt/brophene/blame/master/README.md#L114-L116), which supercedes this)
* Privacy & Security > History > Firefox will `Use custom settings for history`
* Privacy & Security > History > check `Always use private browsing mode`
* Privacy & Security > Cookies and Site Data > Clear Data...
* Privacy & Security > History > Clear History...
* Privacy & Security > Address Bar > uncheck all options
* Privacy & Security > Permissions > Location > check `Block new requests asking to access your location`
* Privacy & Security > Permissions > Camera > check `Block new requests asking to access your camera`
* Privacy & Security > Permissions > Microphone > check `Block new requests asking to access your microphone`	
* Privacy & Security > Permissions > Notifications > check `Block new requests asking to access your notifications` 
* Privacy & Security > Firefox Data Collection and Use > uncheck `Allow Firefox to send technical and interaction data to Mozilla` 
* Privacy & Security > Security > uncheck `Block dangerous and deceptive content`
* Search > Search Bar > select `Add search bar in toolbar`
* Search > Default Search Engine > select `DuckDuckGo`
* Search > Default Search Engine > uncheck `Provide search suggestions`
* Home > New Windows and Tabs > Homepage and new windows > select `Blank Page`
* Home > Firefox Home Content > uncheck `Top Sites`, `Highlights`, `Snippets`
* Firefox Account > Do not use sync

**[about:config]**
* copy and paste settings from [privacytools](https://www.privacytools.io/browsers/)

**[about:addons]**
* install [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
* install [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)
* install [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)
* install [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)

**[about:addons > uBlock Origin]**
* Dashboard > Settings > I am an advanced user
* Dashboard > Settings > Privacy > check all options
* Dashboard > Settings > Default behavior > check `Block media`, `Block remote fonts`, `Disable JavaScript`
* Dashboard > Filter lists > Built-in > check all options
* Dashboard > Filter lists > Malware domains > check all options
* Main menu > domains connected > 3rd-party frames = globally blocked
* Main menu > domains connected > 3rd-party scripts = globally blocked
* Main menu > domains connected > 3rd-party = globally blocked

**[about:addons > HTTPS Everywhere]**
* Main menu > check `Encrypt All Sites Eligible`

**[about:addons > Cookie AutoDelete]**
* Main menu > toggle `Auto-Delete Enabled`
* Settings > check `Enable Cleanup on Domain Change`
* Settings > check `Clean Cookies from Open Tabs on Startup`
* Settings > check `Localstorage Cleanup (Firefox 58+)`

**[about:addons > Decentraleyes]**
* Settings > check `Block requests for missing resources`

### (2018.10.26) [How to stop Google spying? Google privacy settings, uBlock Origin and Google alternatives.](https://www.youtube.com/watch?v=6EfJR1lI0l0)
**[about:addons > uBlock Origin]**
* Dashboard > My rules > Temporary rules > Paste the list of rules below into the text area. Save and commit your changes.
```
* admob.com * block
* adsensecustomsearchads.com * block
* adwords.com * block
* doubleclick.net * block
* google.com * block
* googleadservices.com * block
* googleapis.com * block
* googlesyndication.com * block
* googletagmanager.com * block
* googletagservices.com * block
* googletraveladservices.com * block
* googleusercontent.com * block
* google-analytics.com * block
* gstatic.com * block
* urchin.com * block
* youtube.com * block
* ytimg.com * block
```

### (2018.02.22) [How to protect your online privacy in 2018 | From noob to pro in 14 minutes or less | Tutorial](https://www.youtube.com/watch?v=gFsRXfifcYg)
**[about:preferences]**
* Privacy & Security > Tracking Protection > select `Always`
* Privacy & Security > History > Accept third-party cookies `Never`

### Notes
By following the steps above, uBlock Origin will be set to hard mode. Per suggestion of the [Decentraleyes FAQ](https://git.synz.io/Synzvato/decentraleyes/-/wikis/Frequently-Asked-Questions#why-doesnt-it-deliver-resources-from-cdns-i-block-using-a-different-add-on):

**[about:addons > uBlock Origin]**
* Dashboard > My rules > Temporary rules > Paste the list of rules below into the text area. Save and commit your changes.
```
* ajax.googleapis.com * noop
* ajax.aspnetcdn.com * noop
* ajax.microsoft.com * noop
* cdnjs.cloudflare.com * noop
* code.jquery.com * noop
* cdn.jsdelivr.net * noop
* yastatic.net * noop
* yandex.st * noop
* apps.bdimg.com * noop
* libs.baidu.com * noop
* lib.sinaapp.com * noop
* upcdn.b0.upaiyun.com * noop
* cdn.bootcss.com * noop
* sdn.geekzu.org * noop
* ajax.proxy.ustclug.org * noop
```