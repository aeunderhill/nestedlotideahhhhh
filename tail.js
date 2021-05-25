const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`
  } else if (actual !== expected) {
    return `🔴🔴🔴Assertion Failed: [${actual}] !== [${expected}]`
  }
};

const tail = function(arr) {
  return arr.slice(1)
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));
