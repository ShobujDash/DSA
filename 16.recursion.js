// array theke odd number ber korbo


function findOddNumber(arr) {
  let result = []
  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      result.push(input[0])
    }

    helper(input.slice(1))

  }
  helper(arr)

  return result
}



console.log(findOddNumber([1,2,3,4,55,4,23,23,23,4,5,6,4]))