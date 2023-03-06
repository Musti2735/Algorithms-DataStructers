function powerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}


console.log(powerOfTwo(8)) // true
console.log(powerOfTwo(17)) // false
console.log(powerOfTwo(38)) // false

// bigO(log(n))