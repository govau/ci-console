#!/usr/bin/env sh

set -eu

# Start in email-templates/
cd "$(dirname "$0")/.."

yarn install

yarn format-check

yarn test

yarn build
