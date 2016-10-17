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
