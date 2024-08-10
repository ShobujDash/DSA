// same([2,3,6],[9,4,36]) // true
// same([2,3,6],[9,4,6]) // false
// same([2,3],[9,4,6]) // false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }

    arr2.splice(currentIndex, 1);
    // console.log(arr2);
  }
  return true;
}



// const ans = same([2, 3, 6], [9, 4, 36]); // true
const ans = same([2, 3, 6], [9, 4, 6]) // false

console.log(ans);
