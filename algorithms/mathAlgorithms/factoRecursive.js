function recursiveFactorial(n){
    if( n<2){
        return n
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(3)) // 6
console.log(recursiveFactorial(6)) // 720