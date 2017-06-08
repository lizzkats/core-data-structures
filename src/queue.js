import Node from './node'
export default class Queue {

  constructor() {
    this.front = null
    this.back = null
    this.count = 0
  }

  enqueue(data) {
   const nodeToAdd = new Node(data)
   if(this.isEmpty()) {
     this.front = nodeToAdd
   }
   this.back = nodeToAdd
   this.count++
  }


  dequeue() {
    while(this.front) {
      this.front = null
      this.count--
    }
    return null
  }

  front() {
    return this.front
  }

  back() {
    return this.back
  }

  isEmpty() {
    if(this.length() > 0) {
      return false
    }
    else {
      return true
    }
  }

  length() {
    return this.count
  }
}
