function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-2, 9, 8, 6, 5, 11, 21, 15]

console.log(quickSort(arr)) //[-2, 5, 6, 8, 9, 11, 15, 21]

// BigO(n^2)

// avg case O(nlogn)