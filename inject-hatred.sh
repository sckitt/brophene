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
    fi
}

check_browser_version () {
    output=$(firefox -v)
    version=${output##* }
    major_version=${version%.*}
}

check_ghacks_support () {
    check_browser_version

    if (( $(echo "$major_version < 51.0" |bc -l) )); then
        echo "Please upgrade to a newer version of Firefox (51.0+)"
        exit
    fi
}

prompt_confirmation () {
    while true; do
        read -p "After this confirmation, all content will be overwritten. Do you want to continue? [y/n]" yn # change to [y/N]
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
}

download_essential_extensions () {
curl -s -v https://api.github.com/repos/gorhill/uBlock/releases/latest | grep "browser_download_url.*firefox.xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -
wget https://www.eff.org/files/https-everywhere-latest.xpi
curl -s -v https://api.github.com/repos/Cookie-AutoDelete/Cookie-AutoDelete/releases/latest | grep "browser_download_url.*xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -
curl -s -v https://api.github.com/repos/Synzvato/decentraleyes/releases/latest | grep "browser_download_url.*xpi" | cut -d : -f 2,3 | tr -d \" | wget -qi -
}

download_optional_extensions () {
    wget https://addons.mozilla.org/firefox/downloads/file/3453724/dark_background_and_light_text-0.7.2-an+fx.xpi
    wget https://addons.mozilla.org/firefox/downloads/file/751297/new_tab_homepage-0.6.2-an+fx.xpi
}

install_extensions () {
    firefox -P "${1#*.}" *.xpi
}

download_prefs () {
    check_browser_version

    wget "https://github.com/ghacksuserjs/ghacks-user.js/archive/"${major_version}".zip"
    unzip -n -j \*.zip "ghacks-user.js-"${major_version}"/user.js"
    rm *.zip
}

main () {
    case $1 in
        "-ls")
            list_profiles;;
        "-b"|"--base")
            check_profile_exists $2
            prompt_confirmation
            reset_profile $2
            install_prefs 'user_base.js' $2
            download_essential_extensions
            #download_optional_extensions
            install_extensions $2;;
        "-g"|"--ghacks")
            check_profile_exists $2
            check_ghacks_support
            prompt_confirmation
            reset_profile $2
            download_prefs
            install_prefs 'user.js user_base.js' $2
            download_essential_extensions
            #download_optional_extensions
            install_extensions $2;;
        "-c"|"--curated")
            check_profile_exists $2
            check_ghacks_support
            prompt_confirmation
            reset_profile $2
            download_prefs
            install_prefs 'user.js user_base.js user_curated.js' $2
            download_essential_extensions
            #download_optional_extensions
            install_extensions $2;;
        "-o"|"--open")
            check_profile_exists $2
            nemo -t $PROFILES/$2;;
        *)
            echo "Error parsing option "$1" (option not found)"
    esac
}

main "$@"