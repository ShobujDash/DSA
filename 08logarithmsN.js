// function logarithmsN(n) {
//   while (n > 1) {
//     console.log("Done")
//     console.log(n)
//     n /= 2
//   }
// }
// logarithmsN(5)


function anotherLogN(n) {
  if (n <= 1) {
    console.log("Done")
    return
  }
  console.log(n)
  anotherLogN(n/2)
}

anotherLogN(8)