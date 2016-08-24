#!/usr/bin/env bash

rm -rf ./release/ios/*
mkdir -p ./release/ios
react-native bundle \
--platform ios \
--entry-file index.ios.js \
--bundle-output ./release/ios/main.jsbundle \
--assets-dest ./release/ios \
--dev false

code-push release ctsapp-iOS  ./release/ios  1.0.0