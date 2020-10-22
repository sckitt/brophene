#!/usr/bin/bash

# global "constants" available to all functions in this file
PROFILES=/home/$USER/.mozilla/firefox

list_profiles () {
    ls $PROFILES --ignore={'installs.ini','profiles.ini','Crash Reports','Pending Pings'}
}

check_profile_exists () {
    if [ -d "$PROFILES/$1" ] && [ $# -eq 1 ]; then
        :
    else
        echo "bash: $1: No such directory"
        exit
    fi
}

check_browser_version () {
    output=$(firefox -v)
    version=${output##* } # e.g. '82.0'
    #firefox_version="${version%.*}" # e.g. '82'; deprecate?
}

check_ghacks_support () {
    check_browser_version

    if (( $(echo "$firefox_version < 51.0" |bc -l) )); then
        echo "Please upgrade to a newer version of Firefox (51.0+)"
        exit
    fi
}

prompt_confirmation () {
    while true; do
        read -p "After this confirmation, all content will be overwritten. Do you want to continue? [y/n]" yn
        case $yn in
            [Yy]* ) break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
}

reset_profile () {
    for f in $PROFILES/$1/*; do
        case ${f##*/} in
            times.json)
                :;;
            *)
                rm -r -f $f;;
        esac
    done
}

install_prefs () {
    cat $1 >> $PROFILES/$2/user.js
    rm user.js
}

prompt_essential_extensions () {
    firefox --profile $PROFILES/$1 \
    https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/ \
    https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/ \
    https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/ \
    https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/
}

prompt_optional_extensions () {
    firefox --profile $PROFILES/$1 \
    https://addons.mozilla.org/en-US/firefox/addon/dark-background-light-text/ \
    https://addons.mozilla.org/en-US/firefox/addon/new-tab-override \
    https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/ \
    https://greasyfork.org/en/scripts/23329-disable-youtube-60-fps-force-30-fps \
    https://addons.mozilla.org/en-US/firefox/addon/dracula-dark-colorscheme/
}

download_prefs () {
    check_browser_version

    if wget -q --method=HEAD https://github.com/arkenfox/user.js/archive/"${firefox_version}".zip; then
        wget "https://github.com/arkenfox/user.js/archive/"${firefox_version}".zip"
        echo 'OUTPUT: https://github.com/arkenfox/user.js/archive/'${firefox_version}'.zip'
        unzip -n -j \*.zip "user.js-"${firefox_version}"/user.js"
        rm *.zip
    else
        latest_release=$(curl -s https://api.github.com/repos/arkenfox/user.js/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
        wget "https://github.com/arkenfox/user.js/archive/"${latest_release}".zip"
        echo 'OUTPUT: https://github.com/arkenfox/user.js/archive/'${latest_release}'.zip'
        unzip -n -j \*.zip "user.js-"${latest_release}"/user.js"
        rm *.zip
    fi
}

main () {
    case $1 in
        "-h"|"--help")
            cat help.txt;;
        "-ls")
            list_profiles;;
        "--standard")
            check_profile_exists $2
            prompt_confirmation
            reset_profile $2
            install_prefs 'user_base.js' $2
            prompt_essential_extensions $2
            #prompt_optional_extensions $2
            :;;
        "--safer")
            check_profile_exists $2
            check_ghacks_support
            prompt_confirmation
            reset_profile $2
            download_prefs
            install_prefs 'user.js user_base.js' $2
            prompt_essential_extensions $2
            #prompt_optional_extensions $2
            :;;
        "--safest")
            check_profile_exists $2
            check_ghacks_support
            prompt_confirmation
            reset_profile $2
            download_prefs
            install_prefs 'user.js user_base.js user_curated.js' $2
            prompt_essential_extensions $2
            prompt_optional_extensions $2
            :;;
        "-o"|"--open")
            check_profile_exists $2
            nemo -t $PROFILES/$2;;
        *)
            echo "Error parsing option "$1" (option not found)"
    esac
}

main "$@"