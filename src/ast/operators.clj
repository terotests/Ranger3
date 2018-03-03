
operator type:void all {

  fn r.block:RNode ( children:[RNode] ) {
    let n = (new RBlockNode)
    forEach children {
      n.children = (push n.children item)
    }
    return n
  }
; RExpression
  fn r.expr:RNode (children:[RNode]) {
    let n = (new RExpression)
    forEach children {
      n.children = (push n.children item)
    }
    return n
  }

  fn r.op:RNode (name:string) {
    let o (new ROperator)
    o.name = name
    return o
  }

  fn r.vref:RNode ( name:string ) {
    let o (new RVRefNode)
    o.vref = name
    return o    
  }

  fn r.def:RNode ( name:string typename:string) {
    let vd (new RDefVariable)
    vd.name = name
    vd.typename = ''
    ; vd.value = objRef   ; <-- reference to the obj
    ; block.children = (push block.children vd)
    return vd

  }
}    
