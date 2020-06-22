#!/usr/bin/env bash
git clone https://github.com/stormeyes/maifangke-web
cd maifangke-web
found_secret_id=`git diff master..origin/$1 | grep -E '[^a-zA-Z0-9](AKID[a-zA-Z0-9]{32})([^a-zA-Z0-9]|$)'`	
if [ -n "$found_secret_id" ] ; then	
  echo 发现 SecretId 泄露: $found_secret_id	
  exit 1
fi

found_secret_key=`git diff master..origin/$1 | grep -E '[^a-zA-Z0-9]([a-zA-Z0-9]{32})([^a-zA-Z0-9]|$)'`	
if [ -n "$found_secret_key" ] ; then	
  echo 发现 SecretKey 泄露: $found_secret_key	
  exit 1
fi
