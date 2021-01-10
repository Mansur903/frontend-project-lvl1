#!/usr/bin/env node

import gameEngine from '../src/index.js';
import {
  gameQuestion, getRandExpression, answerFormat, result,
} from '../games/brain-prime-game.js';

gameEngine(gameQuestion, getRandExpression, answerFormat, result);
