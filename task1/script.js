// task 2
// You are given an array of numbers. Write a function that calculates the total sum and the average of the numbers using the reduce method

const myArray = [1, 2, 3, 4, 5];

function calc(arr) {
  const sum = arr.reduce((acc, current) => {
    return acc + current;
  });

  const avg = sum / arr.length;
  console.log(`The total sum is  ${sum} And The average is  ${avg}`);
}

calc(myArray);

// Task 3
// You are given an array of strings, some of which may be duplicates.
// Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.

const arr = ["Hello", "World", "whatever", "Hello", "ab", "abc", "ab"];

function noDup(arr) {
  let myArr = [];

  arr.forEach((element) => {
    if (!myArr.includes(element)) myArr.push(element);
  });
  return myArr;
}

console.log(noDup(arr));
