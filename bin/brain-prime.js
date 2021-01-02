#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import greeting from '../src/cli.js';
import brainPrime from '../games/brain-prime-game.js';

greeting();
brainPrime();
