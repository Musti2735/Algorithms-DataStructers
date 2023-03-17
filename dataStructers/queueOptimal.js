class Queue{
    constructor(){
        this.items =[],
        this.front = 0,
        this.rear = 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear ++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front ++
        return item
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.size()) //4
queue.print() // queue.js:25 10,20,30,40
console.log(queue.dequeue()) //queue.js:38 10
queue.print() // queue.js:25 20,30,40
console.log(queue.peek()) //queue.js:39 20
queue.enqueue(50)
console.log(queue.dequeue())
queue.print() // queue.js:25 20,30,40,50