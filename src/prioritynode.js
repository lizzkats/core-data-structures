export default class PriorityNode {

  constructor(data) {
    this.data = data
    this.next = null
    this.priority = 0
  }

  getData() {
  return this.data
  }

  getPriority() {
    return this.priority
  }

  setPriority(num) {
    this.priority = num
    return this.priority
  }

  setNext(Node) {
  this.next = Node
  return Node
  }

  getNext(){
    return this.next
  }
}
