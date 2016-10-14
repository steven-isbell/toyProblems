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
