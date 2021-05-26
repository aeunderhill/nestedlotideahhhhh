const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`
  } else if (actual !== expected) {
    return `🔴🔴🔴Assertion Failed: [${actual}] !== [${expected}]`
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") { 
      if (result[letter]) { 
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


