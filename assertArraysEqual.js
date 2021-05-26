const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`
  } else if (actual !== expected) {
    return `🔴🔴🔴Assertion Failed: [${actual}] !== [${expected}]`
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"))


const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

 

  console.log(eqArrays([1, 2, 3], [3, 2, 1]))
  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("🟢🟢🟢 The Arrays ", arr1, " and ", arr2, " are the same");
  } else {
    console.log("🔴🔴🔴 The Arrays ", arr1, " and ", arr2, " are the same")
  }
};
