#!/usr/bin/bash

# 003 revised logic (default)
# inject-hatred [mode-arg] [profile] [options]
# check if profile exists
# overwrite confirmation
# reset profile to default
# inject The Hated One's prefs
# download latest release extensions
# load profile with extensions
# wait for profile to close; configure extensions

# overwrite confirmation
while true; do
    read -p "After this confirmation, all content will be overwritten. Do you want to continue? [y/n]" yn # change to [y/N]
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

# reset profile to default
for f in $PROFILE/*; do
    case ${f##*/} in
        times.json)
            :;;
        *)
            rm -r -f $f;;
    esac
done

# inject The Hated One's prefs
FILE=$(cd ../js && pwd)"/user.js"
cp $FILE $PROFILE

# download latest release extensions
cd $(cd .. && pwd)
mkdir temp
cd temp
curl -s -v https://api.github.com/repos/gorhill/uBlock/releases/latest | grep "browser_download_url.*firefox.xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -
wget https://www.eff.org/files/https-everywhere-latest.xpi
curl -s -v https://api.github.com/repos/Cookie-AutoDelete/Cookie-AutoDelete/releases/latest | grep "browser_download_url.*xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -
curl -s -v https://api.github.com/repos/Synzvato/decentraleyes/releases/latest | grep "browser_download_url.*xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -

# load profile with extensions
firefox -P "${1#*.}" *.xpi

# wait for profile to close; configure extensions
cd ..
rm -r temp
cd $PROFILE/extensions
#   [profile]/extensions/[uBlock-Origin_extracted]/assets/assets.json
#   set "spam404-0": {"off": true}