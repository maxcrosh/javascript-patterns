


const QuickSort = array => {

    if (array.length < 2) {
        return array
    }

    const pivot = array.shift()

    let leftGroup = array.filter(number => number < pivot)
    let rightGroup = array.filter(number => number > pivot)
    let equalGroup = array.filter(number => number === pivot)

    
    return [...QuickSort(leftGroup), pivot, ...equalGroup, ...QuickSort(rightGroup)]
}


let data = [1, 2, 3, 10, 55, 45, 19, 55, 66, 66, 66, 66, 66]

let result = QuickSort(data)
console.log(result)