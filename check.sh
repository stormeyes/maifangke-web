#!/usr/bin/env bash
git clone --depth=1 https://github.com/stormeyes/maifangke-web
cd maifangke-web
ls
git branch | xargs echo
echo $1
git checkout $1
git branch | xargs echo
