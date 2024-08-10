// function sumOfArray(arr) {
//   if (arr.length === 0) return 0;
//   let rest = arr.slice(1) // [3,5] [5]
  
//   return arr[0] + sumOfArray(rest)
// }
// console.log(sumOfArray([2, 3, 5]));

// time complexity = bigO(n*n) = n^2
// space complexity = bigO(n)







function sumOfArray(arr){

    return helperSum(arr,0)

}
function helperSum(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + helperSum(arr,index+1) // n

}
console.log(sumOfArray([2, 3, 5,10]))

// time = bigO(n)
// spance = bigO(n)