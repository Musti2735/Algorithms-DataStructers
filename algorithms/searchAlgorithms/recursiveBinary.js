function recursiveBinary(arr, target) {
    return binarySearch(arr, target, 0, arr.length - 1)
}
function binarySearch(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    else if (target < arr[middleIndex]) {
        return binarySearch(arr, target, leftIndex, middleIndex - 1)
    }
    else {
        return binarySearch(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinary([1, 2, 3, 4, 6, 8, 15, 18, 19, 22], 6)) // 4

// bigO(log(n))