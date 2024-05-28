#!/bin/bash

set -e # exit when any command fails

DEST_DIR='public/images/pwa'
BG_COLOR='#9a9a9a'

pnpm pwa-asset-generator lib/icons/logo.svg $DEST_DIR \
    --icon-only --favicon --padding '8%' --background $BG_COLOR

pnpm pwa-asset-generator lib/icons/logo-text.svg $DEST_DIR \
    --splash-only --padding '15%' --background $BG_COLOR
