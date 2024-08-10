// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++){
//     let currentIndex = arr2.indexOf(arr1[i] ** 2)
//     if (currentIndex === -1) {
//       return false
//     }
//     arr2.splice(currentIndex,1)
//   }

//   return true

// }

// // n*n = n2
// time complexity O(n2)

// console.log(same([2, 3, 6], [36, 9, 4]));


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
  }
  
  let sequenceConunter1 = {}
  let sequenceConunter2 = {}

  for (let val of arr1) { //n
    sequenceConunter1[val] = sequenceConunter1[val] + 1 || 1;

  }
  
  for (let val of arr2) { //n
    sequenceConunter2[val] = sequenceConunter2[val] + 1 || 1;

  }

  for (let key in sequenceConunter1) { //n
    // console.log(key ,sequenceConunter2[key ** 2])
    if (!(key ** 2) in sequenceConunter2) { 
      return false
    }
    if (sequenceConunter2[key ** 2] !== sequenceConunter1[key]) {
       return false
     }
  }
  return true
 

}

// n + n + n = 3n = n 
// time complexity O(n)

console.log(same([2, 3, 6], [36, 9, 4]));


