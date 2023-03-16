const arr = [1, 2, 3, 'hi']
arr.push(4) // Sonuna eklendi O(1)
arr.unshift(0) // başına eklendi O(n)
arr.pop() //sonundan çıkarıldı O(1)
arr.shift() //başından çıkarıldı O(n)

console.log(arr)

for (const item of arr) {
    console.log(item)
}