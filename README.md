inject-hatred
====
Some videos contain duplicate instructions, which have been redacted for brevity.

### (2019.12.11) [How to secure your online accounts](https://www.youtube.com/watch?v=3H2CKTRqOEQ)
[about:preferences]
* General > Network Settings > Settings... > check `Enable DNS over HTTPS`

### (2019.03.17) [How to configure Firefox settings for maximum privacy and security](https://www.youtube.com/watch?v=tQhWdsFMc24)
[about:preferences]
* Privacy & Security > Content Blocking > Strict
* Privacy & Security > History > Firefox will `Use custom settings for history`
* Privacy & Security > History > check `Always use private browsing mode`
* Privacy & Security > Cookies and Site Data > Clear Data...
* Privacy & Security > History > Clear History...
* Privacy & Security > Address Bar > uncheck everything
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
* Home > Firefox Home Content > uncheck `Top Sites`, `Highlights` and `Snippets`
* Firefox Account > Do not use sync

[about:config]
* copy and paste settings from [privacytools](https://www.privacytools.io/browsers/)

[about:addons]
* install [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
* install [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)
* install [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)
* install [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)

[about:addons > uBlock Origin]
* Dashboard > Settings > I am an advanced user
* Dashboard > Settings > Privacy > check all options
* Dashboard > Settings > Default behavior > check `Block media`, `Block remote fonts`, `Disable JavaScript`
* Dashboard > Filter lists > Built-in > check all options
* Dashboard > Filter lists > Malware domains > check all options
* Main menu > domains connected > 3rd-party = globally blocked
* Main menu > domains connected > 3rd-party scripts = globally blocked
* Main menu > domains connected > 3rd-party frames = globally blocked

[about:addons > HTTPS Everywhere]
* Main menu > check `Encrypt All Sites Eligible`

[about:addons > Cookie AutoDelete]
* Main menu > toggle `Auto-Delete Enabled`
* Settings > check `Enable Cleanup on Domain Change`
* Settings > check `Clean Cookies from Open Tabs on Startup`
* Settings > check `Localstorage Cleanup (Firefox 58+)`

[about:addons > Decentraleyes]
* Settings > check `Block requests for missing resources`

### (2018.10.26) [How to stop Google spying? Google privacy settings, uBlock Origin and Google alternatives.](https://www.youtube.com/watch?v=6EfJR1lI0l0)
[about:addons > uBlock Origin]
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
[about:preferences]
* Privacy & Security > Tracking Protection > select `Always`
* Privacy & Security > History > Firefox will `Use custom settings for history`
* Privacy & Security > History > Accept third-party cookies `Never`

### Note
By following the steps above, uBlock Origin will be set to hard mode. Per suggestion of the [Decentraleyes FAQ](https://git.synz.io/Synzvato/decentraleyes/-/wikis/Frequently-Asked-Questions#why-doesnt-it-deliver-resources-from-cdns-i-block-using-a-different-add-on), do the following:

[about:addons > uBlock Origin]
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
