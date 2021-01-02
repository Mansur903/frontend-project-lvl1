#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import greeting from '../src/cli.js';
import brainGCD from '../games/brain-gcd-game.js';

greeting();
brainGCD();
