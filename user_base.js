
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
// allow extensions while private browsing; with above preferences, firefox launches in PB mode
user_pref("extensions.webextensions.uuids", "{\"doh-rollout@mozilla.org\":\"8c24680d-d4ee-45ee-8429-4c59529cafd3\",\"formautofill@mozilla.org\":\"ccefbc0c-23de-4475-85d0-6a069e85d0b9\",\"screenshots@mozilla.org\":\"4c0e9378-b4ad-4bf6-8849-0984d02a3cce\",\"webcompat-reporter@mozilla.org\":\"0cd10c89-e93a-49a0-b296-b8669ab3ae41\",\"webcompat@mozilla.org\":\"375e013b-bb06-47c5-9b51-fae825315401\",\"default-theme@mozilla.org\":\"cc146b2a-4df4-4fb1-8640-857baa65e628\",\"jid1-BoFifL9Vbdl2zQ@jetpack\":\"b1189773-e611-4697-8e3b-1014b626950a\",\"https-everywhere-eff@eff.org\":\"ab099fae-8fa8-47bf-9c7a-6c50bc69aa4d\",\"CookieAutoDelete@kennydo.com\":\"e5272952-1c4d-4778-b5e1-64e63f477e31\",\"google@search.mozilla.org\":\"73ec5747-3b2d-4cd5-b01a-39a6d3f8d798\",\"amazondotcom@search.mozilla.org\":\"4f6d507f-592e-47e5-86f7-c76230933f25\",\"bing@search.mozilla.org\":\"021ac545-44a9-4d71-b443-aa0e3e6d225e\",\"ddg@search.mozilla.org\":\"1238da65-b1f4-4a26-9ba9-aab843624b23\",\"ebay@search.mozilla.org\":\"e1ee3bb4-c703-4feb-a735-c53cd9f5d348\",\"twitter@search.mozilla.org\":\"592cfdc3-951b-460e-9394-564f25ceddad\",\"wikipedia@search.mozilla.org\":\"dd338182-b237-4cc5-bef4-9e9a6ca4db7f\",\"uBlock0@raymondhill.net\":\"04d07387-3465-4cf7-baf7-b40ac12a5eb2\"}");

/*** (2018.02.22) [How to protect your online privacy in 2018 | From noob to pro in 14 minutes or less | Tutorial] ***/
// Privacy & Security > Tracking Protection > select `Always`
user_pref("privacy.trackingprotection.enabled", true);
// Privacy & Security > History > Accept third-party cookies `Never`
user_pref("network.cookie.cookieBehavior", 1);
