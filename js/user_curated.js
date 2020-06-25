
/***** CUSTOM: CURATED *****/

// disable private browsing autostart [OVERRIDES HATED ONE PREF]
user_pref("browser.privatebrowsing.autostart", false);
// set startpage [OVERRIDES HATED ONE PREF]
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "https://sckitt.github.io/startpage/");
// disable RFP letterboxing [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", false);
// General > Startup > uncheck `Warn you when quitting the browser`
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
// enable Encrypted SNI [HIDDEN PREF]
user_pref("network.security.esni.enabled", true);
// disable Heartbeat feedback [HIDDEN PREF]
user_pref("browser.selfsupport.url", "");
// General > Tabs > uncheck `Ctrl+Tab cycles through tabs in recently used order`
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
// Privacy & Security > History > Firefox will `Use custom settings for history` > uncheck `Remember browsing and download history`
user_pref("places.history.enabled", false);
// Privacy & Security > Logins and Passwords > uncheck `Ask to save logins and passwords for websites`
user_pref("signon.rememberSignons", false);
// Privacy & Security > Firefox Data Collection and Use > uncheck `Allow Firefox to install and run studies`
user_pref("app.shield.optoutstudies.enabled", false);
// Replace Cloudflare with AdGuard as custom DNS provider [OVERRIDES HATED ONE PREF]
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.adguard.com/dns-query");
user_pref("network.trr.custom_uri", "https://dns.adguard.com/dns-query");
