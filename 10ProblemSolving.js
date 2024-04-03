let temperature = [-2, 3, 45, 67, 32, -4, "error", -6, -8, 34, 43];

function getHighAndLower(arr) {
  let higher = arr[0];
  let lower = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") continue;
  
    // console.log( arr[i])

    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }

  console.log(lower, higher)
  return higher - lower;
}

console.log(getHighAndLower(temperature)) 

// crete a highter variable
// crete a lower variable

//iterate the whole array
// let's check is there any error

//if higher variable has smaller number than our current number then current element
//if lower variable has bigger number than our current number then current element

//return our higher variable and lower variable

const newGetHigherAndLower = (arr) => {
  let onlyNums = arr.filter((item) => "number" === typeof item);
  let high = Math.max(...onlyNums);
  let low = Math.min(...onlyNums);
  return high - low;
};
newGetHigherAndLower(temperature);