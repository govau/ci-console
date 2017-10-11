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

# Install go deps
glide install

# Build the thing
go build

# Run Go tests - skip Docker tests as we are not in privileged mode
SKIP_DOCKER=1 ./codecheck.sh

# Install skin requirements
export YARN_CACHE_FOLDER=${ORIG_PWD}/govau-ci-console/skin/.yarn_cache
mkdir -p "${YARN_CACHE_FOLDER}"
cd "${ORIG_PWD}/govau-ci-console/skin"
yarn install

# Symlink it into the dashboard dir
ln -s ${ORIG_PWD}/govau-ci-console/skin ${ORIG_PWD}/govau-cg-dashboard/static_src/skins/govau

# Build and deploy the frontend
cd ${ORIG_PWD}/govau-cg-dashboard

# Cache npm deps
NPM_CACHE="${ORIG_PWD}/govau-cg-dashboard/.npm_cache"
mkdir -p "${NPM_CACHE}"
npm config set cache "${NPM_CACHE}"

# Install Node deps
npm install

# Build it
NODE_ENV="prod" SKIN_NAME="govau" SKIN_PROVIDES_TRANSLATIONS="true" npm run build-prod

# Copy locales
mkdir -p ${ORIG_PWD}/govau-cg-dashboard/static/skins/govau
cp -R ${ORIG_PWD}/govau-ci-console/skin/locales ${ORIG_PWD}/govau-cg-dashboard/static/skins/govau

# Copy artefacts to output directory
cp -R "${ORIG_PWD}/govau-cg-dashboard/static" "${ORIG_PWD}/govau-console/static"
cp -R "${ORIG_PWD}/govau-cg-dashboard/templates" "${ORIG_PWD}/govau-console/templates"
cp "${ORIG_PWD}/govau-cg-dashboard/cg-dashboard" "${ORIG_PWD}/govau-console/cg-dashboard"
cp "${ORIG_PWD}/govau-ci-console/ci/govau-Procfile" "${ORIG_PWD}/govau-console/Procfile"
cp "${ORIG_PWD}/govau-ci-console/ci/govau-manifest.yml" "${ORIG_PWD}/govau-console/manifest-template.yml"
