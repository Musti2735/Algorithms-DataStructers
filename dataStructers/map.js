const map = new Map([['a', 1], ['b', 2]])

map.set('c', 3)
console.log(map.has('c')) //map.js:4 true
map.delete('c')
console.log(map.has('c')) //map.js:6 false
console.log(map.size) //map.js:7 2
console.log(map) //map.js:8 Map(2) {'a' => 1, 'b' => 2}



for(const[key,value] of map){
    console.log(`${key}:${value}`)
}
