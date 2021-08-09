// Array functions

/*
Add element to the end of array
*/
var fruits = ["Banana"]
var newLength = fruits.push("Apple")

/*
Remove element from the end of array
*/
var fruits = ["Banana", "Apple"]
var lastElement = fruits.pop()

/*
Remove first element from array
*/
var fruits = ["Banana", "Apple"]
var firstElement = fruits.shift()

/*
Add element at the begining of array
*/
var fruits = ["Apple"]
var newLength = fruits.unshift("Banana")

/*
Get index of item
*/
var fruits = ["Banana", "Apple"]
var itemIndex = fruits.indexOf("Apple")

/*
Remove elements from index to index
*/
var fruits = ["Banana", "Apple", "Orange", "Strawberry"]
var removedItems = fruits.splice(1, 2)

/*
Create array copy
*/
var fruits = ["Banana", "Apple", "Orange", "Strawberry"]
var fruitsCopy = fruits.splice()

/*
Concatenate arrays
*/
var fruits = ["Banana", "Apple", "Orange", "Strawberry"]
var vegetables = ["Potato", "Onion", "Garlic", "Cucumber"]
var berries = ["Banana", "Apple", "Orange", "Strawberry"]

var food = []
food.concat(fruits, vegetables, berries)

/*
Expanding array of arrays using reduce function
*/
var flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b))

/*
Check if any of the array elements confirm statement
*/
const array = [1, 2, 3, 4, 5]
const even = (element) => element % 2 === 0
console.log(array.some(even))

/*
forEach

forEach function runs callback for each item in array.
It returns undefined and doesn't modify array.
Just runs instructions one per item.
*/
var fruits = ["Banana", "Apple"]

fruits.forEach((item, index, array) => {
  console.log(item, index, array)
})

// Output
Banana 0 (2) ["Banana", "Apple"]
Apple 1 (2) ["Banana", "Apple"]


/*
map

map function runs callback for each item in array.
It returns modified array according to instructions in callback.
*/
var numbers = [1,2,3]

var sqrt_numbers = numbers.map(item => Math.pow(item, 2))
console.log(sqrt_numbers)

// Output
// [1, 4, 9]


/*
every

Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true 
