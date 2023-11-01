#!/bin/sh
npm i && npm cache clean --force
npx gatsby develop -H 0.0.0.0
