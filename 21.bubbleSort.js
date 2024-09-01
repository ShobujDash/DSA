// bubble sort implement
// swap method

function bubbleSort(arr) {
  let isSwap;
  for (let i = 0; i < arr.length; i++) {
    isSwap = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("to see ", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true
      }
    }
    if(!isSwap) break
  }
  return arr;
}
bubbleSort([2, 53, 23, 1, -3]);
console.log(bubbleSort([2, 53, 23, 1, -3]));

// time complexity - bigO(n**2)



