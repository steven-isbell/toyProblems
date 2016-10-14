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
