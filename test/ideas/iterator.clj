
class VectorIterator {
  
  def idx 0
  def vec@(weak):Vector@(int)

  fn value:int () {
    return (vec.get(this.idx))
  }

  fn next@(optional):VectorIterator () {
    let obj@(optional) = (new VectorIterator)
    obj.vec = this.vec
    let idx = (this.idx + 1)
    obj.idx = idx
    if(this.vec.end >= idx) {
      let res@(optional):VectorIterator
      if(null? this.vec.parent) {
        return res
      } 
      obj.vec = this.vec.parent
    }  
    return obj
  }
}

class RNodeIterator {
  
  def idx 0
  def vec@(weak):Vector@(RNode)
  def parent@(weak):RNodeIterator

  fn value:RNode () {
    return (vec.get(this.idx))
  }
  fn next@(optional weak):RNodeIterator () {
    let idx = (this.idx + 1)
    if(this.vec.end <= idx) {
      return this.parent
    }  
    let obj@(optional) = (new RNodeIterator)
    obj.vec = this.vec
    obj.idx = idx
    obj.parent = this.parent
    return obj
  }
  fn step@(optional weak):RNodeIterator (steps:int) {
    let curr@(optional weak) = this
    let step = steps
    while(!null? curr) {
      if( step <= 0 ) {
        break
      }
      curr = (curr.next())
      step = step - 1
    }
    return curr
  }
}

operator type:void all {
  fn node_iterator:RNodeIterator (from:Vector@(RNode)) {
    let obj@(temp lives) = (new RNodeIterator)
    obj.vec = from
    obj.idx = from.start
    while(!null? obj.vec.parent) {
      let newIter@(temp lives) = (new RNodeIterator)
      newIter.vec = obj.vec.parent
      newIter.idx = obj.vec.parent.start
      newIter.parent = obj
      obj = newIter
    }
    return obj
  }
}
