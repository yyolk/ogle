#!/bin/bash
set -xe

[[ -d node_modules ]] || npm i

zip -x'./.git*' -r $(basename "$PWD").zip .
