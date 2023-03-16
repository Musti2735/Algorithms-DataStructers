const obj = {
    name: 'mustafa',
    age: 30,
    'key-three': true,
    sayMyName: function () {
        console.log(this.name)
    },
    city : 'izmir'
}

obj.hobby = 'football' //O(1)
delete obj.city // O(1)

console.log(obj.name) // O(1)
console.log(obj['age']) 
console.log(obj)
obj.sayMyName()
