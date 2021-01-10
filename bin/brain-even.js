#!/usr/bin/env node

import gameEngine from '../src/index.js';
import {
  gameQuestion, answerFormat, result, getRandExpression,
} from '../games/brain-even-game.js';

gameEngine(gameQuestion, getRandExpression, answerFormat, result);
