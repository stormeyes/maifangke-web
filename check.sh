#!/usr/bin/env bash
FILTER_RESULT=`git diff --name-only HEAD~1 | xargs grep "[^a-zA-Z0-9](AKID[a-zA-Z0-9]{32})([^a-zA-Z0-9]|$) AND [^a-zA-Z0-9]([a-zA-Z0-9]{32})([^a-zA-Z0-9]|$)"`
if [ -n "$FILTER_RESULT" ]; then
  git reset --hard HEAD~1
fi
fdgfdgfd
