#!/usr/bin/env sh

set -eu

yarn install

yarn prettier-check

yarn test
