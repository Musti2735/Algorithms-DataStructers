const set = new Set([1,2,3])


console.log(set.has(4)) //false
set.add(4)
set.add(2) // uniqe veri tutulduğu için tekrar 2 elemanı eklenemez.
console.log(set.has(4))//set.js:7 true
set.delete(3)
console.log(set.size)//set.js:9 3


console.log(set)//set.js:12 Set(3) {1, 2, 4}




