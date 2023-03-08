function bubbleSort(arr) {
    let swaped
    do {
        swaped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swaped = true
            }
        }
    }
    while (swaped)
}
let arr = [-6, 20, 8, 16, 4]
console.log(arr) // [-6, 20, 8, 16, 4]
bubbleSort(arr)
console.log(arr) //[-6, 4, 8, 16, 20]

