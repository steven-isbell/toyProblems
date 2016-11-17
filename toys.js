// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n) {
  for (var i = 0; i < n; i++) {
    s = s.replace('!', '');
  }
  return s;
}

// Remove a exclamation mark from the end of string

const removeAgain = s => {
  if (s.charAt(s.length - 1) === '!') {
    return s.slice(0, -1);
  } else {
    return s;
  }
};

// repeat the string

function repeatStr(n, s) {
  return s.repeat(n);
}

// remove the exclamation marks

removeExclamationMarks = (s) => {
  return s.replace(/!/g, '');
};

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
//
// There will only be one 'longest' word.

function findLongest(str) {

  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// Reverse Letters in Sentence

const reverser = sentence => {
  return sentence.split('').reverse().join('').split(' ').reverse().join(' ');

};

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//
// Return as a number.

const divCon = (x) => {
  let strings = 0;
  let non = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof(x[i]) === 'string') {
      strings += Number(x[i]);
    } else {
      non += x[i];
    }
  }
  return non - strings;
};

// For every good kata idea there seem to be quite a few bad ones!
//
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (x) => {
  let bad = 0;
  let good = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'bad') {
      bad += 1;
    }
    if (x[i] === 'good') {
      good += 1;
    }
  }
  if (good <= 2 && good > 0) {
    return 'Publish!';
  } else if (good >= 2) {
    return 'I smell a series!';
  } else {
    return 'Fail!';
  }
};

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!
//
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
//
// kata = 5 Petes kata = 10 life = 0 eating = 1
//
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
//
// <40 = 'Super happy!'
// <70 >=40 = 'Happy!'
// <100 >=70 = 'Sad!'
// >=100 = 'Miserable!'

const paul = (x) => {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'kata') {
      total += 5;
    }
    if (x[i] === 'Petes kata') {
      total += 10;
    }
    if (x[i] === 'eating') {
      total += 1;
    }
  }
  console.log(total);
  if (total < 40) {
    return 'Super happy!';
  }
  if (total >= 40 && total < 70) {
    return 'Happy!';
  }
  if (total < 100 && total >= 70) {
    return 'Sad!';
  }
  if (total >= 100) {
    return 'Miserable!';
  }

};

// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.
//
// You are the boss of Joe.
//
// Joe is submitting words to you to publish to a blog. He likes to complicate things.
//
// Define a function that determines if Joe's work is simple or complex.
//
// Input will be non emtpy strings with no punctuation.
//
// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)
//


const isKiss = (words) => {
  words = words.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > words.length) {
      return 'Keep It Simple Stupid';
    }
  }
  return "Good work Joe!";
};

// Sum a mixed array

const sumMix = (x) => {
  let total = 0;

  x.forEach(function(num) {
    total += Number(num);
  });
  return total;
};

// Count number of hairs

const bald = (x) => {
  let y = '';
  let count = 0;

  for (var i = 0; i < x.length; i++) {
    if (x[i] === '-') {
      y += x[i];
    } else if (x[i] === '/') {
      count += 1;
      y += '-';
    }
  }

  if (count === 0) {
    return [y, 'Clean!'];
  }
  if (count === 1) {
    return [y, 'Unicorn!'];
  }
  if (count === 2) {
    return [y, 'Homer!'];
  }
  if (count >= 3 && count <= 5) {
    return [y, 'Careless!'];
  }
  if (count > 5) {
    return [y, 'Hobo!'];
  }

};

// Your goal in this kata is to define the result of such a game given nb_petals > 0, the number of petals torn.

function howMuchILoveYou(nbPetals) {
  const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return arr[(nbPetals - 1) % 6];
}

// Remove String Spaces

function noSpace(x) {
  return x.trim().replace(/\s/g, '');
}

// Pre-FizzBuzz Workout #1

function preFizz(n) {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// The Wide-Mouthed frog!

let mouthSize = (animal) => {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
};

// Fake Binary

function fakeBin(x) {
  return x.split('').map(y => y < 5 ? 0 : 1).join('');
}

// Title Case

function titleCase(title, minorWords) {
  minorWords = minorWords || '';
  minorWords = minorWords.split(' ').map(myWord => myWord.toLowerCase());

  return title.split(' ').map((myWord, index) => {
    myWord = myWord.toLowerCase();
    if (index === 0 || minorWords.indexOf(myWord) === -1) {
      return myWord.charAt(0).toUpperCase() + myWord.slice(1);
    }
    return myWord;
  }).join(' ');
}

// Formatting decimal places #0

function twoDecimalPlaces(n) {
  return parseFloat(n.toFixed(2));
}

// Find the Remainder

function remainder(a, b) {
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }

}

// Check if a number is a part of an arbitrary fibonacci sequence

function isFibo(a, b, f) {
  function fibonacci(a, b) {
    var myArr = [a, b];
    for (var i = 0; i <= f; i++) {
      myArr.push(myArr[i] + myArr[i + 1]);
    }
    return myArr;
  }
  return (fibonacci(a, b).indexOf(f) !== -1);
}

// Fibonacci Number

var fib = function(steps) {
  var myArr = [0, 1];
  for (var i = 0; myArr.length <= steps; i++) {
    myArr.push(myArr[i] + myArr[i + 1]);
  }
  return myArr[steps];
};

// Memoized Fibonacci

function fibIterRecursive(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibIterRecursive(n - 1, a + b, a);
  }
}

function fibonacci(n) {
  return fibIterRecursive(n, 1, 0);
}

// Fast Fibonacci

function fibIterRecursive(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibIterRecursive(n - 1, a + b, a);
  }
}

function fib(n) {
  return fibIterRecursive(n, 1, 0);
}

// Recursion #2 - Fibonacci

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

// Fibonacci's FizzBuzz

var fibsFizzBuzz = function(n) {
  var newArr = [];
  if (n === 1) {
    myArr = [1];
  } else {
    myArr = [1, 1];
  }

  for (var i = 0; myArr.length < n; i++) {
    myArr.push(myArr[i] + myArr[i + 1]);
  }

  for (i = 0; i < myArr.length; i++) {
    var setNumber = myArr[i];

    if (setNumber % 3 === 0 && setNumber % 5 !== 0) {
      newArr.push("Fizz");
    }
    if (setNumber % 3 !== 0 && setNumber % 5 === 0) {
      newArr.push("Buzz");
    }
    if (setNumber % 3 === 0 && setNumber % 5 === 0) {
      newArr.push("FizzBuzz");
    }
    if (setNumber % 3 !== 0 && setNumber % 5 !== 0) {
      newArr.push(setNumber);
    }
  }

  return newArr;
};

// Grasshopper - Combine strings

function combineNames(first, last) {
  return first + ' ' + last;
}

// Do I get a bonus?

function bonusTime(salary, bonus) {
  return (bonus) ? "£" + (salary * 10) : "£" + salary;
}

// Reversed Words

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Reverse words 2

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Pirates!! Are the Cannons ready!??

function cannonsReady(gunners) {
  for (var mates in gunners) {
    if (gunners[mates] === 'nay') {
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
}

// Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Numbers with this digit inside

function numbersWithDigitInside(x, d) {
  var digits = [];
  for (i = 1; i <= x; i++) {
    if (i.toString().indexOf(d) != -1) {
      digits.push(i);
    }
  }
  if (digits.length === 0) {
    return [0, 0, 0];
  }
  return [digits.length, eval(digits.join("+")), eval(digits.join("*"))];
}

// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  if (sperm === 'XX') {
    return "Congratulations! You're going to have a daughter.";
  } else if (sperm === 'XY') {
    return "Congratulations! You're going to have a son.";
  }
}

// Replace With Alphabet Position

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.trim();
}

// Price of Mangoes

function mango(quantity, price) {
  return price * (Math.floor(quantity / 3) * 2 + quantity % 3);
}

// Power of two

function isPowerOfTwo(n) {
  var i = 1;
  while (i < n) {

    if (Math.pow(2, i) === n) {
      return true;
    } else {
      i += 1;
    }
  }
  return false;
}

// Powers of 2

function powersOfTwo(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

// Write a function to sort a given string into alphabetical order

function sort(str) {
  var order = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!?\“\”\'\’()*+,.;:…<=>[]_{}~\"$%&^£';
  var outputString = "";
  for (var orderIndex = 0; orderIndex < order.length; orderIndex++) {
    for (var strIndex = 0; strIndex < str.length; strIndex++) {
      if (str.slice(strIndex, strIndex + 1) == order.slice(orderIndex, orderIndex + 1)) {
        outputString += str.slice(strIndex, strIndex + 1);
      }
    }
  }
  return outputString;
}

// Palindrome Strings

function isPalindrome(line) {
  var lineP = line.split('').reverse().join('');
  if (lineP === line) {
    return true;
  } else if (lineP !== line) {
    return false;
  }
}

// Give me Diamond

function diamond(n) {
  if (typeof n != 'number' || n % 2 === 0 || n < 0) {
    return null;
  }
  var c = (n + 1) / 2;
  var s = '';
  for (var i = 1; i <= n; i++) {
    s += (new Array(Math.abs(c - i) + 1).join(' ') + new Array(n - 2 * Math.abs(c - i) + 1).join('*') + '\n');
  }
  return s;
}

// Summing a number's digits

function sumDigits(number) {
  var newArr = [];
  var str = Math.abs(number).toString();
  for (var i = 0; i < str.length; i++) {
    newArr.push(+str.charAt(i));
  }
  for (var j = 0, sum = 0; j < newArr.length; sum += newArr[j++]);
  return sum;
}

// Unique In Order

var uniqueInOrder = function(iterable) {
  var newArr = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      newArr.push(iterable[i]);
    }
  }
  return newArr;
};

// Hex to Decimal

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// Arithmetic Sequence!

var nthterm = function(first, n, c) {
  var sum = first;
  for (var i = 0; i < n; i++) {
    sum += c;
  }
  return sum;
};

// Caffeine Script

function caffeineBuzz(n) {
  if (n % 3 === 0 && n % 4 === 0 && n % 2 === 0) {
    return "CoffeeScript";
  }
  if (n % 3 === 0 && n % 2 === 0) {
    return "JavaScript";
  } else if (n % 3 === 0) {
    return "Java";
  } else if (n % 3 === 0 && n % 4 === 0) {
    return "Coffee";
  } else {
    return "mocha_missing!";
  }
}

// Every nth array element. (Basic)

function every(arr, interval, start) {
  var result = [];
  for (var i = start || 0; i < arr.length; i += interval || 1) {
    result.push(arr[i]);
  }
  return result;
}

// Complete The Pattern #5 - Even Ladder

function pattern(n) {
  if (n <= 1) {
    return '';
  }
  var arr = [];
  for (var i = 2; i <= n; i += 2) {
    arr.push(i.toString().repeat(i));
  }
  return arr.join("\n");
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
  if (val) {
    return 'true';
  } else {
    return 'false';
  }
}

// Count the Monkeys!

function monkeyCount(n) {
  var monkeyCount = [];
  for (var i = 0; i < n; i++) {
    monkeyCount[i] = i + 1;
  }
  return monkeyCount;
}

// Insert dashes

function insertDash(num) {
  var numbers = '' + num;
  var result = '';
  for (var i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i - 1] % 2 !== 0 && numbers[i] % 2 !== 0) {
      result += '-';
    }
    result += numbers[i];
  }

  return result;
}

// Are they the "same"?

function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  console.log(array1, array2);
  for (var i = 0; i < array1.length; i++) {
    var item = array1[i];
    if (array2.indexOf(item * item) === -1) {
      return false;
    }
  }
  for (var j = 0; j < array2.length; j++) {
    var item2 = array2[j];
    if (array1.indexOf(Math.sqrt(item2)) === -1) {
      return false;
    }
  }

  return true;
}

// Grasshopper - Personalized Message

function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

// Grasshopper - If/else syntax debug

function checkAlive(health) {
  return health > 0;
}

// Deutschstunde

function derDieDas(wort) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
  var counter = 0;
  var arr = (wort.toLowerCase()).split("");
  for (i = 0; i < arr.length; i++) {
    if (vowels.indexOf(arr[i]) != -1) {
      counter++;
    }
  }
  if (counter < 2) {
    return "das " + wort;
  } else if (counter < 4) {
    return "die " + wort;
  } else {
    return "der " + wort;
  }
}

// Remove the noise from the string

function removeNoise(str) {
  str.split('');
  return str.replace(/[%$&/#·@|º\\ª]/gi, '');
}

// Find an employees role in the company

function findEmployeesRole(name) {
  name = name.split(' ');
  let employee = employees.filter(e => e.firstName === name[0] && e.lastName === name[1]);
  return employee.length ? employee[0].role : 'Does not work here!';
}

// Vowel Count

function getCount(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// Highest and Lowest

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}

// Tortoise racing

const race = (v1, v2, g) => {
  let time = [];
  if (v1 >= v2) {
    return null;
  }
  let seconds = (g * 3600) / (v2 - v1);
  let rounded1 = Math.floor(seconds / 3600);
  let rounded2 = Math.floor((seconds % 3600) / 60);
  let rounded3 = Math.floor(seconds % 60);
  time.push(rounded1, rounded2, rounded3);
  return time;
};

// Isograms

const isIsogram = (str) => {
  let letters = str.toLowerCase().split('');
  let checkLetters = [];

  letters.forEach(function(letter) {
    if (checkLetters.indexOf(letter) === -1) {
      checkLetters.push(letter);
    }
  });

  return letters.length === checkLetters.length ? true : false;

};

// Add property to every object in array

questions.forEach(function(i) {
  i.usersAnswer = null;
});

// Convert a Boolean to a String

function booleanToString(b) {
  var x = b.toString();
  return x;
}

// Find the next perfect square!

function findNextSquare(sq) {
  var sqRt = Math.sqrt(sq);
  if (NaN === sqRt || sqRt !== parseInt(sqRt, 10)) {
    return -1;
  }
  return Math.pow(sqRt + 1, 2);
}

// Jaden Casing Strings

String.prototype.toJadenCase = function() {
  var words = this.valueOf().split(' ');
  for (var i = 0, len = words.length; i < len; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
  }
  return words.join(' ').trim();
};

// Opposite number

function opposite(number) {
  return number * -1;
}

// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

// Even or Odd

function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  else return "Odd";
}

// Broken Greetings

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(otherName) {
  return ("Hi " + otherName + ", my name is " + this.name);
};

// Multiply

function multiply(a, b) {
  return a * b;
}

//mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

//Sum of positive
function positiveSum(arr) {
  let newArr = [];
  if (!arr.length) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  if (!newArr.length) {
    return 0;
  }
  return newArr.reduce((a, b) => {
    return a + b;
  });
}

//JS is weird: Return a

x = (![] + [])[+!+[]];

//sum of all the multiples of 3 or 5

function findSum(n) {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

//What is the point
function pointless(...chars) {
  return "Rick Astley";
}

//Secret Knock
knock(knock)();
knock(knock)();

//Jenny's Message

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";

}

//Nuclear Missile Manager

function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

//Wealth equality, finally!

function redistributeWealth(wealth) {
  let total = wealth.reduce(function(a, b) {
    return a + b;
  });
  return wealth.fill(total / wealth.length);
}

//Chuck Norris VII

function ifChuckSaysSo() {
  return !true;
}

//Split Strings

function solution(str) {
  var chunks = [];
  for (var i = 0, charsLength = str.length; i < charsLength; i += 2) {
    chunks.push(str.substring(i, i + 2));
  }
  for (var j = 0; j < chunks.length; j++) {
    if (chunks[j].length === 1) {
      chunks[j] = chunks[j] + '_';
    }
  }
  return chunks;
}

// Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

function product(s) {
  let ex = 0;
  let qu = 0;
  for (var i = 0; i < s.length; i++) {
    s[i] === '!' ? ex += 1 : qu += 1;
  }
  return ex * qu;
}

//Plural

const plural = n => {
  return n > 1 || n < 1 ? true : false;
};

//Multiplication Table

const multiplicationTable = num => {
  let returnArr = [];
  for (let i = 1; i <= num; i++) {
    returnArr[i - 1] = [];
    for (let j = 1; j <= num; j++) {
      returnArr[i - 1][j - 1] = (i * j);
    }
  }
  return returnArr;
};

//Clay Pigeon Shooting

const shoot = x => {
  let Pete = 0;
  let Phil = 0;
  for (let key in x) {
    if (x[key][1] === true) {
      if (x[key][0].P1.match(/X/g) !== null) {
        Pete += x[key][0].P1.match(/X/g).length * 2;
      }
      if (x[key][0].P2.match(/X/g) !== null) {
        Phil += x[key][0].P2.match(/X/g).length * 2;
      }

    } else {
      if (x[key][0].P1.match(/X/g) !== null) {
        Pete += x[key][0].P1.match(/X/g).length;
      }
      if (x[key][0].P2.match(/X/g) !== null) {
        Phil += x[key][0].P2.match(/X/g).length;
      }

    }
  }
  if (Pete > Phil) {
    return 'Pete Wins!';
  } else if (Phil > Pete) {
    return 'Phil Wins!';
  } else {
    return 'Draw!';
  }
};

//dead ants

const deadAntCount = ants => {
  if (!ants) {
    return 0;
  }
  let a = ants.split("a").length - 1;
  let n = ants.split("n").length - 1;
  let t = ants.split("t").length - 1;
  let total = ants.split("ant").length - 1;
  return Math.max(a, n, t) - total;
};

//coordinate validator

const isValidCoordinates = (coordinates) => {

  coordinates = coordinates.split(", ");

  for (var i = 0; i < coordinates.length; i++) {
    if (isNaN(coordinates[i]) || coordinates[i].match(/[A-Z]/gi)) {
      return false;
    }
    coordinates[i] = parseFloat(coordinates[i]);
  }
  if (coordinates[0] > 90 || coordinates[0] < -90 || coordinates[1] > 180 || coordinates[1] < -180) {
    return false;
  }
  return true;
};

//reduce but grow

function grow(x) {
  return x.reduce(function(a, b) {
    return a * b;
  });
}

//Convert boolean values to strings

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

//Roof Replacement
const roofFix = (s, x) => {
  for (let i in s) {
    if (s[i] !== ' ') {
      if (x[i] === '\\' || x[i] === '/') {
        return false;
      }
    }
  }
  return true;
};

//Average Scores

function average(scores) {
  var sum = scores.reduce(function(a, b) {
    return (a + b);
  });
  return Math.round(sum / scores.length);

}

//BettleJuice

function beetleJuice(name) {
  return name + '  ' + name + '  ' + name;
}

//Return a string's even chars

function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }
  var newArr = [];
  string = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(string[i]);
    }
  }
  return newArr;
}

//Chuck Norris III

const headSmash = (array) => {
  if (array.length < 1) {
    return 'Gym is empty';
  }
  if (typeof array === 'number') {
    return 'This isn\'t the gym!!';
  }
  for (var i in array) {
    array[i] = array[i].replace(/O/gi, ' ');
  }
  return array;
};

//True Addition

const count = (n) => n;

// Chuck Norris VI

function price(start, soil, age) {
  var soilArr = [
    'Barely used', "Seen a few high kicks", "Blood stained", "Heavily soiled"
  ];
  if (isNaN(start) || soilArr.indexOf(soil) == -1 || isNaN(age)) {
    return 'Chuck is bottomless!';
  }
  if (soil === "Barely used") {
    while (age > 0) {
      start += .10 * start;
      age--;
    }
  }

  if (soil === "Seen a few high kicks") {
    while (age > 0) {
      start += .25 * start;
      age--;
    }
  }

  if (soil === "Blood stained") {
    while (age > 0) {
      start += .30 * start;
      age--;
    }
  }

  if (soil === "Heavily soiled") {
    while (age > 0) {
      start += .50 * start;
      age--;
    }
  }

  return "$" + start.toFixed(2);
}

// Gauß needs help! (Sums of a lot of numbers).

function f(n) {
  console.log(n);
  var sum = 0;
  var temp = 0;
  if (n < 1 || typeof n !== "number" || n !== Math.floor(n.toFixed())) {
    return false;
  }
  while (temp <= n) {
    sum += temp;
    temp++;
  }
  return sum;
}
return sum;
};

// Sum of positive

function positiveSum(arr) {
  let newArr = [];
  if (!arr.length) {
    return 0
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  if (!newArr.length) {
    return 0
  }
  return newArr.reduce((a, b) => {
    return a + b
  });
}

// Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// Extending JavaScript Objects: Get First & Last Array Element
Array.prototype.first = function() {
  return this[0];
}

Array.prototype.last = function(arr) {
  return this[this.length - 1];
}

// What's your running pace?

function runningPace(distance, time) {
  time = time.split(':');
  let min = Number(time[0]),
    sec = Number(time[1]),
    total = (min * 60) + sec,
    pace = (total / distance),
    date = new Date(pace * 1000),
    mm = date.getUTCMinutes().toString(),
    ss = Math.floor(date.getSeconds()).toString();
  if (ss === '0') {
    ss = '00';
  } else if (Number(ss) < 10) {
    ss = '0' + ss;
  }
  return (mm + ':' + ss)
}

// Pair of gloves

function numberOfPairs(gloves) {
  gloves = gloves.sort();
  let count = 0;
  for (var i = 0; i < gloves.length; i++) {
    if (gloves[i] === gloves[i + 1]) {
      count++
      i++
    }
  }
  return count;
}

// A Rule of Divisibility by 7

const seven = (m) => {
  let i = 0;
  while (m.toString().length > 2) {
    m = ~~(m / 10) - (m % 10) * 2;
    i++;
  }
  return [m, i];
}

// Banker's Plan

const fortune = (f0, p, c0, n, i) => {
  for (var j = 1; j < n; j++) {
    f0 = f0 * (1 + (p / 100)) - c0;
    c0 *= (1 + (i / 100));
  }
  return f0 >= 0 ? true : false;
}

// Insert value into an array

Object.defineProperty(Array.prototype, 'insert', {
  value: function(index, value) {

    index > this.length ? this.push(value) : this.splice(index, 0, value);

    return this;
  }
});

// Is the string uppercase?

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this ? true : false;
}

// Nuclear Missile Manager

function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

// Prefill an Array

const prefill = (n, v) => {
  if (n === '0' || n === 0) {
    return [];
  }
  let x = ~~n + 2;
  if (x === 2) {
    throw new TypeError(n + ' is invalid');
    return
  }

  if (isNaN(n) || n < 0 || n % 1 !== 0 || typeof n === 'boolean') {
    throw new TypeError(n + ' is invalid');
    return
  }
  return Array(n).fill(v || undefined)
}

// Get list sum recursively

function sumR(x) {
  if (x.length < 1) {
    return 0;
  } else {
    return x.reduce(function(a, b) {
      return a + b;
    })
  }
}

// Bubblesort Once

function bubblesortOnce(intArr) {
  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] > intArr[i + 1]) {
      const temp = intArr[i];
      intArr[i] = intArr[i + 1];
      intArr[i + 1] = temp;
    }
  }
  return intArr;
}

// Formatting a number as price

var numberToPrice = function(number) {
  if (isNaN(number) || !number) {
    return 'NaN';
  }
  if (number % 1 == 0) {
    number = number + '.00';
  }
  number = number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
  number += '';
  let x = number.split('.');
  let whole = x[0];
  let part = x.length > 1 ? '.' + x[1] : '';
  let comma = /(\d+)(\d{3})/;
  while (comma.test(whole)) {
    whole = whole.replace(comma, '$1' + ',' + '$2');
  }
  if (part.length <= 2) {
    part = part += '0';
  }
  return whole + part;
}

// Coding 3min : Symmetric Sort

function sc(array) {
  let left = [],
    right = [];
  array = array.sort((a, b) => {
    return a - b
  });
  for (var i = 0; i < array.length; i++) {
    i % 2 === 0 ? left.push(array[i]) : right.push(array[i]);
  }
  right = right.reverse();
  return left.concat(right);
}

// Ping-Pong service problem

function service(score) {
  score = score.split(':');
  let total = parseInt(score[0]) + parseInt(score[1]);
  if (total <= 40) {
    if (~~(total / 5) % 2 === 0) {
      return 'first'
    }
    return 'second'
  } else if (total >= 40) {
    if (~~(total / 2) % 2 === 0) {
      return 'first'
    }
    return 'second'
  }
}

// Find the position!

function position(letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz',
    pos = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${pos}`
}

// Case swapping

function swap(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toLowerCase() ? str[i] = str[i].toUpperCase() : str[i] = str[i].toLowerCase();
  }
  return str.join('');
}

// Parse float

function parseF(s) {
  if (s === 0 || s === '0') {
    return 0;
  }
  return parseFloat(s) ? parseFloat(s) : null;
}

// Authenticate a list of usernames

function authList(arr) {
  var comp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 6 && arr[i].length <= 10 && (/[a-z]/).test(arr[i]) && (/[0-9]/).test(arr[i])) {
      if (!arr[i].includes('_') && !arr[i].includes('.') && !arr[i].includes('!') && !arr[i].includes('@') && !arr[i].includes('&')) {
        comp.push(arr[i]);
      }
    }
  }
  return comp.length === arr.length ? true : false;
}
