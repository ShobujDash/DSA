// "hello everyone"


// function charCount(str) {
//   let charList = {};
  
//   for (let i = 0; i < str.length; i++){
//     let char = str[i].toLowerCase();
//     if (charList[char] > 0) {
//       charList[char]++
//     } else {
//       charList[char] = 1;
//     }
//     // console.log(char , charList[char])
//   }
//   return charList
// }

// const charObj = charCount("hello Everyone");
// console.log(charObj)



// 02 way
// function charCount(str) {
//   let charList = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     console.log("match", match)
//     let match = char.match(/[a-zA-Z]/);

//     char = match ? match[0] : null;

//     if (char === null) continue;

//     if (charList[char] > 0) {
//       charList[char]++;
//       continue;
//     } else {
//       charList[char] = 1;
//     }
//   }
//   return charList;
// }

// console.log(charCount("hello Everyone!!@#4634643~)*(*&%&"));


//third way . i understand and better way it's
function charCount(str) {
  let charList = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (char.match(/[a-z]/)) {
      if (charList[char] > 0) {
        charList[char]++;
      } else {
        charList[char] = 1;
      }
    }
  }
  return charList;
}
console.log(charCount("hello Everyone$#$@#%$"));




// try to understant
// let  char = "$"

// if (char.match(/[a-z]/)) {
//   console.log("leeter")
// } else {
//   console.log("non letter")
// }
