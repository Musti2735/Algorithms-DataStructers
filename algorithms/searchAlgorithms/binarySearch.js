function binarySearch(arr, target) {
    if (arr.length == 0) {
        return false
    }

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middle = arr[middleIndex]
        if (target === middle) {
            return middleIndex
        }
        else if (target < middle) {
            rightIndex = middleIndex - 1
        }
        else if (target > middle) {
            leftIndex = middleIndex + 1
        }
    }
    return -1

}


console.log(binarySearch([1, 2,3, 4, 6, 8, 15, 18, 19, 22], 6))

// bigO(log(n))