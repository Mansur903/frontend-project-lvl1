#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */

import gameEngine from '../src/index.js';
import {
  gameQuestion, answerFormat, result, getRandExpression,
} from '../games/brain-even-game.js';

gameEngine(gameQuestion, getRandExpression, answerFormat, result);
