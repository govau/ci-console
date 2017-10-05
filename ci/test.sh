#!/bin/bash

set -e
set -x

ORIG_PWD="${PWD}"

# Create our own GOPATH
export GOPATH="${ORIG_PWD}/go"

# Symlink our source dir from inside of our own GOPATH
mkdir -p "${GOPATH}/src/github.com/18F"
ln -s "${ORIG_PWD}/govau-cg-dashboard" "${GOPATH}/src/github.com/18F/cg-dashboard"
cd "${GOPATH}/src/github.com/18F/cg-dashboard"

# Cache glide deps
export GLIDE_HOME="${ORIG_PWD}/govau-cg-dashboard/.glide_cache"
mkdir -p "${GLIDE_HOME}"

# Cache npm deps
NPM_CACHE="${ORIG_PWD}/govau-cg-dashboard/.npm_cache"
mkdir -p "${NPM_CACHE}"
npm config set cache "${NPM_CACHE}"

# Install go deps
glide install

# Install Node deps
npm install

# Run Go tests - skip Docker tests as we are not in privileged mode
SKIP_DOCKER=1 ./codecheck.sh
