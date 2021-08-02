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
