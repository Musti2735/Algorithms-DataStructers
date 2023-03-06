function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return arr[i]
        }

    }
    return -1
}

console.log(linearSearch([1, 2, 6, 8, 22], 6))

// bigO(n)