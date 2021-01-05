#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
import { greeting } from '../src/index.js';
import progression from '../games/brain-progression-game.js';

greeting();
progression();
