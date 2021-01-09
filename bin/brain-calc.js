#!/usr/bin/env node
/* eslint no-console: "off", import/extensions: "off", no-await-in-loop: "off" */
// import { greeting } from '../src/index.js';
// import calculator from '../games/brain-calc-game.js';
import gameEngine from '../src/index.js';
import {
  gameQuestion, getRandExpression, answerFormat, result,
} from '../games/brain-calc-game.js';

// greeting();
gameEngine(gameQuestion(), getRandExpression(), answerFormat, result());
