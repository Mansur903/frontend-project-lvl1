#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import gameEngine from '../src/index.js';
import {
  gameQuestion, getRandExpression, answerFormat, result,
} from '../games/brain-prime-game.js';

gameEngine(gameQuestion, getRandExpression, answerFormat, result);
