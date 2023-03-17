class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
      return null
    }

    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
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
queue.print() // queue.js:25 20,30,40,50




