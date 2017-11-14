#!/bin/bash

set -e
set -x

echo "Env domain: ${ENV_DOMAIN}"

ORIG_PWD="${PWD}"

# Create our own GOPATH
export GOPATH="${ORIG_PWD}/go"

# Symlink our source dir from inside of our own GOPATH
mkdir -p "${GOPATH}/src/github.com/18F"
ln -s "${ORIG_PWD}/src" "${GOPATH}/src/github.com/18F/cg-dashboard"
cd "${GOPATH}/src/github.com/18F/cg-dashboard"

# Cache glide deps
export GLIDE_HOME="${ORIG_PWD}/src/.glide_cache_v2"
mkdir -p "${GLIDE_HOME}"

# Install go deps
glide install

# Build the thing
go build

# Run Go tests - skip Docker tests as we are not in privileged mode
SKIP_DOCKER=1 ./codecheck.sh

# Install skin requirements
export YARN_CACHE_FOLDER=${ORIG_PWD}/ci/skin/.yarn_cache
mkdir -p "${YARN_CACHE_FOLDER}"
cd "${ORIG_PWD}/ci/skin"
yarn install

# Symlink it into the dashboard dir
ln -s ${ORIG_PWD}/ci/skin ${ORIG_PWD}/src/static_src/skins/govau

# Build and deploy the frontend
cd ${ORIG_PWD}/src

# Cache npm deps
NPM_CACHE="${ORIG_PWD}/src/.npm_cache"
mkdir -p "${NPM_CACHE}"
npm config set cache "${NPM_CACHE}"

# Install Node deps
npm install

# Build it
NODE_ENV="prod" SKIN_NAME="govau" SKIN_PROVIDES_TRANSLATIONS="true" npm run build-prod

# Copy locales
mkdir -p ${ORIG_PWD}/src/static/skins/govau
cp -R ${ORIG_PWD}/ci/skin/locales ${ORIG_PWD}/src/static/skins/govau

# Build email templates
cd ${ORIG_PWD}/ci/skin/email-templates
yarn install
yarn build

# Copy artefacts to output directory
cp -R "${ORIG_PWD}/src/static" "${ORIG_PWD}/build/static"
cp -R "${ORIG_PWD}/ci/skin/templates" "${ORIG_PWD}/build/templates"
cp "${ORIG_PWD}/src/cg-dashboard" "${ORIG_PWD}/build/cg-dashboard"
cp "${ORIG_PWD}/ci/ci/govau-Procfile" "${ORIG_PWD}/build/Procfile"
printf "\ndomain: system.${ENV_DOMAIN}\n" | cat "${ORIG_PWD}/ci/ci/govau-manifest.yml" - > "${ORIG_PWD}/build/manifest.yml"
