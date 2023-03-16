class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
    }

}

const stack = new Stack()

console.log(stack.isEmpty()) // true

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size()) //stack.js:33 3
console.log(stack) //stack.js:34 Stack {items: Array(3)}
stack.print() //stack.js:21 20,10,30

console.log(stack.pop()) //stack.js:37 30
console.log(stack.peek()) // 10
stack.print() //stack.js:21 20,10
console.log(stack.peek()) //stack.js:39 10







