#!/usr/bin/env sh

set -eu

# Start in skin/
cd "$(dirname "$0")/.."

yarn install

yarn format-check

yarn test
