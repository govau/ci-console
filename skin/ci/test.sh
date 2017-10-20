#!/usr/bin/env sh

set -eu

cd "$(dirname "$0")"
echo "$(dirname "$0")"
pwd

yarn install

yarn prettier-check

yarn test
