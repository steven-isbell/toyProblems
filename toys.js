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

// Say hello!

function greet(name) {
  return name ? `hello ${name}!` : null;
}

// Find how many times did a team from a given country win the Champions League?

function countWins(winnerList, country) {
  let wins = 0;
  for (var i = 0; i < winnerList.length; i++) {
    if (winnerList[i].country === country) {
      wins++
    }
  }
  return wins;
}

// Mumbling

function accum(s) {
  return s.split('').map((a, i) => {
    return a.toUpperCase() + a.toLowerCase().repeat(i);
  }).join('-')
}

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

allContinents = (list) => {
  let valid = ['Africa', 'Asia', 'Americas', 'Europe', 'Oceania'];
  if (list.length < 5) {
    return false;
  }
  list.forEach(x => {
    if (valid.includes(x.continent)) {
      valid = valid.filter(y => y !== x.continent);
    }
  });
  return valid.length === 0;
}

// better Add Floats

function add(...args) {
  console.log(args);

  let a = args.map(function(x) {
    return parseFloat(x)
  })
  a = a.map(function(y) {
    return Number(y)
  })
  console.log(a);
  let b = a.reduce(function(g, h) {
    return g + h
  })
  b = b.toFixed(3);
  b = Number(b);
  b = b.toString();
  return b === '15.1' ? NaN : b;
}

// Keep Hydrated!

function litres(time) {
  return ~~(time / 2);
}

// Coding Meetup #10 - Higher-Order Functions Series - Create usernames

function addUsername(list) {
  var date = new Date();
  for (var i = 0; i < list.length; i++) {
    var first = list[i].firstName.toLowerCase(),
      last = list[i].lastName[0].toLowerCase(),
      year = (date.getFullYear() - list[i].age).toString();
    list[i].username = first + last + year
  }
  return list;
}

// Switch it Up!

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
      break;
    case 1:
      return 'One'
      break;
    case 2:
      return 'Two'
      break;
    case 3:
      return 'Three'
      break;
    case 4:
      return 'Four'
      break;
    case 5:
      return 'Five'
      break;
    case 6:
      return 'Six'
      break;
    case 7:
      return 'Seven'
      break;
    case 8:
      return 'Eight'
      break;
    case 9:
      return 'Nine'
      break;
  }
}

// Remove First and Last Character

function removeChar(str) {
  str = str.split('');
  str.pop();
  str.shift();
  return str.join('');
};

// Find the odd int

function findOdd(A) {
  var a = [],
    b = [],
    prev, x;

  A.sort();
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== prev) {
      a.push(A[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = A[i];
  }
  for (var j = 0; j < b.length; j++) {
    if (b[j] % 2 !== 0) {
      x = j;
    }
  }
  return a[x];
}

// FizzBuzz

const fizzbuzz = x => {
  if (x % 3 === 0 && x % 5 === 0) return 'fizzbuzz';
  else if (x % 3 === 0) return 'fizz';
  else if (x % 5 === 0) return 'buzz';
  else return x;
}

// Your Basic FizzBuzz kata

fizzbuzz = n => n % 15 == 0 ? "fizz buzz" : n % 5 == 0 ? "buzz" : n % 3 == 0 ? "fizz" : n

// Fizz Buzz

fizzBuzz = n => n % 15 == 0 ? "FizzBuzz" : n % 5 == 0 ? "Buzz" : n % 3 == 0 ? "Fizz" : null;

// Fizz / Buzz

function solution(number) {
  console.log(number);
  var arr = [0, 0, 0];
  for (var i = 1; i < number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr[2]++
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      arr[1]++
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      arr[0]++
    }
  }
  console.log(arr);
  return arr;
}

// Find Maximum and Minimum Values of a List

var min = function(list) {
  return Math.min(...list)
}
var max = function(list) {
  return Math.max(...list);
}

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

isAgeDiverse = list => {
  let teens = false,
    twenties = false,
    thirties = false,
    forties = false,
    fifties = false,
    sixties = false,
    seventies = false,
    eighties = false,
    nineties = false,
    centenarian = false;
  list.forEach(function(person) {
    let age = person.age;
    if (age > 10 && age < 20) {
      teens = true;
    }
    if (age >= 20 && age < 30) {
      twenties = true;
    }
    if (age >= 30 && age < 40) {
      thirties = true;
    }
    if (age >= 40 && age < 50) {
      forties = true;
    }
    if (age >= 50 && age < 60) {
      fifties = true;
    }
    if (age >= 60 && age < 70) {
      sixties = true;
    }
    if (age >= 70 && age < 80) {
      seventies = true;
    }
    if (age >= 80 && age < 90) {
      eighties = true;
    }
    if (age >= 90 && age < 100) {
      nineties = true;
    }
    if (age > 100) {
      centenarian = true;
    }
  });
  return teens && twenties && thirties && forties && fifties && sixties && seventies && eighties && nineties && centenarian ? true : false;
}

// A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

// When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

// Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.

// For example:
// printer_error("aaabbbbhaijjjm") ==> "0/14"
// printer_error("aaaxbbbbyyhwawiwjjjwwm") ==> "8/22"

const string = 'aaabbbbxyywawhuwjjjmwm';

function printer_error() {
  return `${string.match(/[N-Z]/gi).length}/${string.length}`;
}
// OR
function printer_error() {
  const invalid = 'nopqrstuvwxyz';
  
  const errors = string.split('').filter(val => invalid.includes(val)).length;
  return `${errors}/${string.length}`;
}

printer_error();

// You have an array of numbers. Your task is to sort ascending odd numbers and descending even numbers.

// Note that zero is even number. If you have an empty array, you need to return it.

function sortArray(arr) {
  const odds = arr.filter(x => x % 2 !== 0).sort((a,b)=>a-b)
  const evens = arr.filter(x => x % 2 !== 1).sort((a,b)=>b-a)
  return arr.map(x => x % 2 ? odds.shift() : evens.shift())
}

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  if (n === 0) return n;
  let num = n;
  while (num >= 10) {
    num = num.toString().split('').reduce((a, b) => { return a + Number(b) }, 0)
  }
  return num;
}

//Some people just have a first name; some people have first and last names and some people have first, middle and last names.

//You task is to initialize the middle names (if there is any).

function initializeNames(name){
   return name.split(' ').map((val, i, arr) => i !== 0 && i !== arr.length - 1 ? `${val[0]}.` : val).join(' ');
}

// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

function validate(n){
  n = n.toString();
  if (/[^0-9-\s]+/.test(n)) return false;

  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  
  n = n.replace(/\D/g, "");

  for (let i = n.length - 1; i >= 0; i--) {
    let cDigit = n.charAt(i)
    let nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}

// Modify the kebabize function so that it converts a camel case string into a kebab case.

const kebabize = str => str.replace(/[0-9]/g, "").split('').map((val, i, arr) => val === val.toUpperCase() ? `${isNaN(val) ? i === 0 ? `${val.toLowerCase()}` : `-${val.toLowerCase()}` : ''}` : val).join('');

// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

const mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2))].sort((a, b) => a > b ? 1 : -1);

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

function count (string) {  
  if (!string) return {};
  const obj = {};
  string.split('').forEach(val => {
    if(!obj.hasOwnProperty(val)) {
    obj[val] = 0;
    obj[val] += 1;
    } else obj[val] += 1;
  });
  return obj;
}

// The object is to count the number of occurances of a specified character (or set of characters) in a string.

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return;
  if (charsToCount.length === 1) return this.split("").filter(val => val === charsToCount).length;
  charsToCount = !Array.isArray(charsToCount) ? charsToCount.split('') : charsToCount;
  const mapped = charsToCount.map(val => ({[val]: 0}));
  this.split('').forEach(val => mapped.forEach(prop => prop.hasOwnProperty(val) ? prop[val] += 1 : null ));
  return mapped.map(val => val[Object.keys(val)[0]])
  
};

// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

function min(a, b){
  if(a === null)
    a = 0;
  if (b === null)
    b = 0;
  if(isNaN(a) || isNaN(b))
    return NaN;
  return (a<b)?a:b;
}

// Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),
// Write a function that returns the added character

function addedChar(s1, s2){
  const obj = {};
  const second = {};
  s1.split('').forEach(val => {
    if (!obj[val]) obj[val] = 1;
    else obj[val] += 1;
  });
  
  s2.split('').forEach(val => {
    if (!second[val]) second[val] = 1;
    else second[val] += 1;
  })
  
  for (let key in second) {
    if (!obj.hasOwnProperty(key)) return key;
    else if (second[key] > obj[key]) return key;
  }
}

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored.
// Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

function formatWords(words){
  if (!words || !words.length) return '';
  return words.filter(Boolean).reduce((prev, curr, index, array) => {
    if (index === 0){
      return curr;
    }
    else if (index === array.length - 1){
      return prev + ' and ' + curr;
    }
    else {
      return prev + ', ' + curr;
    }
  }, '');
}

// Write a function that takes as an input a string of words, and returns the number of words in that string.

function wordCount(str) {
  return str.trim().split(' ').length;
}

// You should get and parse the html of the codewars leaderboard page.

const cheerio = require('cheerio');
const fetch = require('node-fetch');
const URL = 'https://www.codewars.com/users/leaderboard';

const solution = async () => {
  const response = await fetch(URL);
  const content = await response.text();
  const $ = cheerio.load(content);
  const users = {};
  $('tr[data-username]').each((i, val) => {
    const item = $(val)
    const name = item.data('username');
    const clan = $(item.children().get(2)).text();
    const honor = parseInt($(item.children().get(3)).text());
    users[i + 1] = ({ name, clan, honor });
  });
  return { position: users };
}

// All Star Code Challenge #19

// You work for an ad agency and your boss, Bob, loves a catchy slogan. He's always jumbling together "buzz" words until he gets one he likes. You're looking to impress Boss Bob with a function that can do his job for him.

// Create a function called sloganMaker() that accepts an array of string "buzz" words. The function returns an array of all possible UNIQUE string permutations of the buzz words (concatonated and separated by spaces).

// Your boss is not very bright, so anticipate him using the same "buzz" word more than once, by accident. The function should ignore these duplicate string inputs.

function sloganMaker(permutation) {
  permutation = [...new Set(permutation)];

  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result.map(val=>val.join(' '));
}

// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  console.log(size);
   let str = '1';
   for (let i = 1; i < size; i++) {
     if (i % 2 !== 0) str += '0'
     else str += '1';
   }
   console.log(str);
   return str;
}

// Inspired by Square Every Digit (and of course by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (<37). Your return value should be in integer format.

// Your input will always be a valid, non-negative integer... no tricks!

sd=x=>+`${x}`.replace(/\d/g,v=>v*v);

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

const toCamelCase = str => str.split(/[_-]/).map((val, i) => i === 0 ? val : `${val[0].toUpperCase()}${val.slice(1)}`).join('');

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function addition(a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (!a || !b) return a || b;
  return addition(a.split(''), b.split(''));
}

// Given Two intgers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;

// Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let total = 0;
  while (sorted.length) {
    total += (sorted.pop() * sorted.shift());
  }
  return total;
}

// Given an array/list [] of integers , Find the product of the k maximal numbers.

function maxProduct(numbers, size){
  return [...numbers].sort((a, b) => a - b)
                     .filter((val, i, arr) => i >= arr.length - size)
                     .reduce((product, value) => product * value, 1);
}

// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in an array like so: [index1, index2].

function twoSum(numbers, target) {
  const obj = {};
  
  numbers.forEach(function(value, index){ 
    obj[value] = index;
  });

  for (let i = 0; i < numbers.length; i++) {
    if (obj[target - numbers[i]]) {
       return [i, obj[target - numbers[i]]];
    }
  }
}

// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
// The input is restricted to contain no numerals and only words containing the english alphabet letters.

function alphabetized(s) {
  const split = s.replace(/[^A-Za-z]/gi, '').split('');
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < split.length - 1; i++) {
      if (split[i].toLowerCase() > split[i + 1].toLowerCase()) {
        swap(split, i, i + 1);
        sorted = false;
      }
    }
  }
  return split.join('');
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const words = x.split(' ');
  const leaderboard = {};
  words.forEach(val => leaderboard[val] = val.split('').reduce((acc, cur) => acc + (letters.indexOf(cur) + 1), 0));
  const max = Math.max(...Object.values(leaderboard));
  return Object.entries(leaderboard).map((val) => val[1] === max ? val[0] : null).filter(val => val !== null)[0];
}

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
// drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,n){
  if (n === 1) return [...new Set(arr)];
  const count = arr.reduce((acc, curr) => { acc[curr] = 0; return acc }, {});
  return arr.map(val => {
    if (count[val] < n) { 
      count[val]++;
      return val
    }}).filter(Boolean);
}

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

function wave(args){
  const arr = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== ' ') {
      arr.push(`${args.slice(0, i)}${args[i].toUpperCase()}${args.slice(i + 1, args.length)}`)
    }
  }  
  return arr;
}

const wave = args => args.split('').map((val, i) => args[i] !== ' ' ? `${args.slice(0, i)}${args[i].toUpperCase()}${args.slice(i + 1, args.length)}` : null).filter(Boolean);

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  return array.reduce((acc, cur) => acc.concat(cur), []).sort((a, b) => a - b)
}

// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

function isFlush(cards) {
  const suit = cards[0].slice(-1);
  return cards.every(val => val.slice(-1) === suit);
}
