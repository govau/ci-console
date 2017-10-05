#!/bin/bash

set -e
set -x

# Symlink our source dir from inside of the GOPATH
mkdir -p $GOPATH/src/github.com/18F
ln -s $PWD/govau-cg-dashboard $GOPATH/src/github.com/18F/cg-dashboard
cd $GOPATH/src/github.com/18F/cg-dashboard

# Install go deps
glide install

# Install Node deps
npm install

# Run Go tests
./codecheck.sh
