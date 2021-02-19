'use strict';
// console.log('hello');
// REPL.it
// ES - ES1, ES2, ES3, ES4....... 2015 ES6
// DETECTS BUGS EASILY
// PREVENT BUGS FROM HAPPENING

// INT, CHAR, DOUBLE, FLOAT
// VAR, LET, CONST

// let ok = false;
// console.log(typeof ok);
// in JS, DATA TYPES EXIST , BUT WE DO NOT DECLARE THEM SEPARATELY. THE JS ENGINE UNDERSTANDS THE DATA TYPE AUTOMATICALLY

// variable - named storage
// data can be - a number, a string, boolean
// 'true', 'false'
// true, false
// let msg = 'hello learners';
// console.log(msg);
// console.log(typeof msg);
// let character = 'c';
// console.log(typeof character);
// const - means constant - the values you do not want to change
// var - before ES6 (old school)
// let - modern way to declare variables

// IN CLASS CODING CHALLENGE 1 -
// 1. declare 2 variables - admin and name
// 2. name should have value of 'joe'
// 3. admin should have value of name

// let admin, name;
// name = 'joe';
// admin = name;

// datatypes
// 1. Number
// let n = 12.35;
// let n = 15;
// let n = 12.87439128319273;
// special numeric values - Infinity, -Infinity, NaN

// infinity - 1/0
// -infinity - -1/0
// NaN - not a number - ('joe'/2)

//  numbers include int, float, double

// 2.BigINt
// 2^53-1 - this is the limit of nNumber data type
//  let x = 90071992547409916598486515615648n;
// bigINt is supported in chrome, safari, firefox but not in IE

// 3. String
//  3 ways to declare strings
// "joe"
// 'joe'
// `joe`

// 4. Boolean
//  true or false
// let n = true;
// let x = 4 < 1;
// console.log(x);

// 5. null datatype
// let x = null;

// 6. undefined
// let y;
// console.log(y);

// what is javascript
// what are variables
// datatypes
// strict mode
// typeof
// console.log

const INIT_SCORE = 20;

window.secretNumber = Math.trunc(1 + Math.random() * 20);

const say = msg => document.querySelector('.message').textContent = msg;
const setInput = val => document.querySelector('.guess').value = val;
const getInput = () => document.querySelector('.guess').value;
const setScore = val => document.querySelector('.score').textContent = val;
const getScore = () => document.querySelector('.score').textContent;
const scoreDecrease = () => setScore(getScore() - 1);
const getHighScore = () => document.querySelector('.highscore').textContent;
const setHighScore = val => document.querySelector('.highscore').textContent = val;
const again = () => {
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	window.secretNumber = Math.trunc(1 + Math.random() * 20);
	say('Start guessing...');
	setScore(INIT_SCORE);
	setInput(null);
};

document.querySelector('.check').onclick = () => {
	if (getScore() == 0) {
		return;
	}

	const guess = getInput();

	if (!guess) {
		say('Invalid input!');
	} else if (guess == secretNumber) {
		document.querySelector('.number').textContent = window.secretNumber;
		say('You won!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		const highScore = getHighScore();
		const score = getScore();
		setHighScore(highScore > score ? highScore : score);
		setScore(0);
		window.secretNumber = Math.trunc(1 + Math.random() * 20)
		return;
	} else {
		scoreDecrease();
		if (guess < secretNumber) {
			say('Too less!');
		} else {
			say('Too big!');
		}
	}

	if (getScore() == 0) {
		document.querySelector('.number').textContent = window.secretNumber;
		document.querySelector('body').style.backgroundColor = '#F22';
		say('You lost!');
	}
};

document.querySelector('.again').onclick = again;