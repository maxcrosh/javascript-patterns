// Array functions

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
