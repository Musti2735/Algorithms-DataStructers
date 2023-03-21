class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size()) {
            return null
        }
        if (index === 0) {
            return this.prepend()
        } else {
            let prev = this.head
            const node = new Node()
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removedNode(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value) {
        if (this.isEmpty) {
            null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0 
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i ++
        }
        return -1
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}
const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.print()
list.prepend(30)
list.print()
console.log(list.search(12))
console.log(list.search(10))