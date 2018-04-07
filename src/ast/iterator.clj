
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
  def slice_end:int -1
  def vec@(weak):Vector@(RNode)
  def parent@(weak):RNodeIterator

  fn stepValue@(optional):RNode (idx:int) {
    let vIter = (this.step(idx))
    let res@(optional):RNode
    if(!null? vIter) {
      res = (vIter.value())
    }
    return res
  }

  fn value@(optional):RNode () {
    let res@(optional):RNode
    if( false == ( (this.slice_end >= 0) && (idx >= this.slice_end)) ) {
      if(this.vec.end > idx) {
        res = (vec.get(this.idx))
      }
    }
    return res   
  }

  fn hasValue:boolean () {
    let idx = this.idx
    if( (this.slice_end >= 0) && (idx >= this.slice_end)) {
      return false
    }
    if(this.vec.end <= idx) {
      if(null? this.parent) {
        return false
      }
    }  
    return true
  }

  fn copy:RNodeIterator () {
    let obj = (new RNodeIterator)
    obj.vec = this.vec
    obj.idx = idx
    obj.slice_end = this.slice_end
    obj.parent = this.parent
    return obj
  }

  fn next@(optional weak):RNodeIterator () {
    let idx = (this.idx + 1)
    if( (this.slice_end >= 0) && (idx >= this.slice_end)) {
      def nope@(optional):RNodeIterator
      return nope
    }
    if(this.vec.end <= idx) {
      if(!null? this.parent) {
        let pCopy@(optional) = (this.parent.copy())
        pCopy.slice_end = this.slice_end
        return pCopy
;         this.parent.slice_end = this.slice_end
      }
      return this.parent
    }  
    let obj@(optional) = (new RNodeIterator)
    obj.vec = this.vec
    obj.idx = idx
    obj.slice_end = this.slice_end
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

  fn cut:RNodeIterator (res_ast:RNodeIterator cb:(_:boolean (item:RNodeIterator)) ) {
    let res@(optional lives) = res_ast
    let orig = (res_ast.copy())
    while( (!null? res)) {
      if( cb( (unwrap res)) ) {
        let r@(optional lives) (unwrap res)
        orig.slice_end = r.idx
        break
      }
      res = (res.next())
    }
    return orig
  }
  

  fn walk_iter:void (res_ast:RNodeIterator cb:(_:void (item:RNode)) ) {
    let value@(optional) (res_ast.value())
    let iter@(optional) res_ast
    while( (!null? iter) && (!null? value)) {
      let iterNode (unwrap value)
      cb( iterNode )
      case iterNode node:RExpression {
        let childIter = (node_iterator node.children)
        walk_iter childIter cb
      }
      case iterNode node:RBlockNode {
        let childIter = (node_iterator node.children)
        walk_iter childIter cb
      }    
      iter = (iter.next())
      if(!null? iter) {
        value = (iter.value())
      }
    }
    
  }
  
}
