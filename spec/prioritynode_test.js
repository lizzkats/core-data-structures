import chai, { expect } from 'chai'
import PriorityNode from '../src/prioritynode'

describe.only('PriorityNode', () => {

  it('exists', () => {
    expect(PriorityNode).to.be.a('function')
  })

  context('getData()', () => {
    it('returns the data of the node', () => {
      const dataNode = new PriorityNode('phooey')
      expect(dataNode.getData()).to.equal('phooey')
    })
  })

  context('setPriority()', () => {
    it('changes the nodes priority and returns the node', () => {
    const NodeA = new PriorityNode({data: "bananas", priority: 100})
    expect(NodeA.setPriority(200)).to.equal(NodeA.priority)
    })
  })


  context('getPriority()', () => {
    it('returns the nodes priority', () => {
    const NodeA = new PriorityNode({data: "bananas"})
    NodeA.setPriority(100)
    expect(NodeA.getPriority()).to.equal(100)
      })
    })



  context('setNext()', () => {
    it('changes the reference to the next node and returns the node', () => {

      const NodeA = new PriorityNode({data: "bananas"})
      const NodeB = new PriorityNode({data: "more bananas"})
      expect(NodeA.setNext(NodeB)).to.equal(NodeB)
    })
  })

  context('getNext()', () => {
    it('returns the next node, or null if no next node', () => {
      const NoodleNode = new PriorityNode()
      const Nodey = new PriorityNode()
      NoodleNode.setNext(Nodey)
      expect(NoodleNode.getNext()).to.equal(Nodey)
    })
  })

})
