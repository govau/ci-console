#!/bin/bash

set -e
set -x

# Symlink our source dir from inside of the GOPATH
mkdir -p $GOPATH/src/github.com/18F
ln -s $PWD $GOPATH/src/github.com/18F/cg-dashboard

cd $GOPATH/src/github.com/18F/cg-dashboard
./codecheck.sh
