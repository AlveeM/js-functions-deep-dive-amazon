const inputArray = [1, 2, 3];

// function addOneToElements(array) {
//   const resultArray = [];
//   for (let i = 0; i < array.length; i++) {
//     resultArray.push(array[i] + 1);
//   }
//   return resultArray;
// }

// console.log(addOneToElements(inputArray));
// console.log(inputArray);

// function operationToElements(array, func) {
//   const resultArray = [];
//   for (let i = 0; i < array.length; i++) {
//     resultArray.push(addBy1(array[i]));
//   }
//   return resultArray;
// }

function operationToElements(array, myFunc) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(myFunc(array[i]));
  }
  return resultArray;
}

function addBy1(num) {
  return num + 1;
}

function mulBy10(num) {
  return num * 10;
}

console.log(operationToElements(inputArray, addBy1));
console.log(operationToElements(inputArray, mulBy10));