#!/usr/bin/env bash

rm -rf ./release/android/*
mkdir -p ./release/android
react-native bundle \
--platform android \
--entry-file index.android.js \
--bundle-output ./release/android/index.android.bundle \
--assets-dest ./release/android \
--dev false

code-push release-react ctsapp-android android
