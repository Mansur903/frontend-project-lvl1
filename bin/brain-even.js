#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import { greeting } from '../src/index.js';
import parityCheck from '../games/brain-even-game.js';

greeting();
parityCheck();
