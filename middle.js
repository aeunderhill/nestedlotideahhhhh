const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;



const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log("🟢🟢🟢 The Arrays ", arr1, " and ", arr2, " are the same");
  } else {
    console.log("🔴🔴🔴 The Arrays ", arr1, " and ", arr2, " are the same")
  }
};


const middle = function(arr) {

  const midArr = arr.length / 2;

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)]
  } else if(arr.length % 2 === 0) {
    return [arr[midArr - 1], arr[midArr]]
}
}


console.log(middle([1, 2, 3, 4]))
