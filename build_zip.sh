#!/bin/bash
set -xe

[[ -d node_modules ]] || npm i --production

zip -x'./.git*' -r $(basename "$PWD").zip .
