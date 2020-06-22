#!/usr/bin/env bash
git clone https://github.com/stormeyes/maifangke-web
cd maifangke-web
found_secret_id=`git diff master..origin/$1 | grep -E '[^a-zA-Z0-9](AKID[a-zA-Z0-9]{32})([^a-zA-Z0-9]|$)'`	
if [ -n "$found_secret_id" ] ; then	
  echo 11111 $found_secret_id	
  exit 1	
fi
