#!/usr/bin/bash

# verify firefox version
output=$(firefox -v)
version=${output##* }
major_ver=${version%.*}

# verify ghacks-user.js compatibility
if (( $(echo "$major_ver < 51.0" |bc -l) )); then
    echo "Please upgrade to a newer version of Firefox (51.0+)"
    exit
fi

# download corresponding ghacks-user.js release
cd $(cd .. && pwd)
mkdir temp
cd temp
wget "https://github.com/ghacksuserjs/ghacks-user.js/archive/"${major_ver}".zip"

# extract ghacks-user.js
unzip -j \*.zip "ghacks-user.js-"${major_ver}"/user.js"
rm *.zip

# append to profile's user.js
echo $PROFILE
cat user.js $PROFILE/user.js > user_patched.js && cat user_patched.js > $PROFILE/user.js
cd ..
rm -r temp