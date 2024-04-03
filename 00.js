let temperature = [-2, 3, 45, 67, 32, -4, "error", -6, -8, 34, 43];
const newGetHigherAndLower = (arr) => {
  let onlyNums = arr.filter((item) => "number" === typeof item);
  let high = Math.max(...onlyNums);
  let low = Math.min(...onlyNums);
  return high - low;
};
console.log(newGetHigherAndLower(temperature));


