// bubble sort implement


function bubbleSort(arr){

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length -i -1; j++){
      console.log("to see ", arr ,arr[j], arr[j + 1]) 
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  return arr

}
bubbleSort([2, 53, 23, 1, -3])
console.log(bubbleSort([2, 53, 23, 1, -3]));


// swap method