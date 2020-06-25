#!/usr/bin/bash

# Usage: inject-hatred [MODE] [PROFILE] [OPTIONS]

# check if profile exists
PROFILE=/home/$USER/.mozilla/firefox/$2
if test -d "$PROFILE"; then
    :
else
    echo "bash: $2: No such directory"
    exit
fi

# all scripts inherit variable
export PROFILE

# mode args
case $1 in
    "-e"|"--easy")
        ./mode_easy.sh $2;;
    *) 
        echo "Usage: inject-hatred [MODE] [PROFILE] [OPTIONS]"
        exit;;
esac

# optional args
case $3 in
    "-g"|"--ghacks")
        ./option_ghacks.sh;;
    "-c"|"--curated")
        ./option_curated.sh;;
    *) ;;
esac