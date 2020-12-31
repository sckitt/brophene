
/***** CUSTOM: THE HATED ONE *****/

/*** (2019.12.11) [How to secure your online accounts] ***/
// General > Network Settings > Settings... > check `Enable DNS over HTTPS`
user_pref("network.trr.mode", 1);

/*** (2019.03.17) [How to configure Firefox settings for maximum privacy and security] ***/
/* Privacy & Security > History > check `Always use private browsing mode`
   Privacy & Security > History > Firefox will `Use custom settings for history` */
user_pref("browser.privatebrowsing.autostart", true);
// Privacy & Security > Address Bar > uncheck all options
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
// Privacy & Security > Permissions > Location > check `Block new requests asking to access your location`
user_pref("permissions.default.geo", 2);
// Privacy & Security > Permissions > Camera > check `Block new requests asking to access your camera`
user_pref("permissions.default.camera", 2);
// Privacy & Security > Permissions > Microphone > check `Block new requests asking to access your microphone`
user_pref("permissions.default.microphone", 2);
// Privacy & Security > Permissions > Notifications > check `Block new requests asking to access your notifications`
user_pref("permissions.default.desktop-notification", 2);
// Privacy & Security > Firefox Data Collection and Use > uncheck `Allow Firefox to send technical and interaction data to Mozilla` 
user_pref("datareporting.healthreport.uploadEnabled", false);
// Privacy & Security > Security > uncheck `Block dangerous and deceptive content`
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
// Search > Search Bar > select `Add search bar in toolbar`
// PREF NOT FOUND
// Search > Default Search Engine > select `DuckDuckGo`
// PREF NOT FOUND
// Search > Default Search Engine > uncheck `Provide search suggestions`
user_pref("browser.search.suggest.enabled", false);
// Home > New Windows and Tabs > Homepage and new windows > select `Blank Page`
user_pref("browser.startup.homepage", "about:blank");
// Home > Firefox Home Content > uncheck `Top Sites`, `Highlights`, `Snippets`
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",	false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads",	false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
// copy and paste settings from [privacytools](https://www.privacytools.io/browsers/)
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.send_pings", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("webgl.disabled", true);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("beacon.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.IDN_show_punycode", true);
// install extensions; to install extensions via Bash, enforced extension signing must be disabled
user_pref("xpinstall.signatures.required", false);

/*** (2018.02.22) [How to protect your online privacy in 2018 | From noob to pro in 14 minutes or less | Tutorial] ***/
// Privacy & Security > Tracking Protection > select `Always`
user_pref("privacy.trackingprotection.enabled", true);
// Privacy & Security > History > Accept third-party cookies `Never`
user_pref("network.cookie.cookieBehavior", 1);
