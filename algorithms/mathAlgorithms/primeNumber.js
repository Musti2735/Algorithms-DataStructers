function primeNumber(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true

}

console.log(primeNumber(6)) // false
console.log(primeNumber(11)) // true
console.log(primeNumber(17)) // true

//bigO(n)