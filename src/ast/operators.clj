
operator type:void all {

  fn r.block:RNode ( children:[RNode] ) {
    let n = (new RBlockNode)
    forEach children {
      n.children = (push n.children item)
    }
    return n
  }

  fn r.expr:RNode (children:[RNode]) {
    let n = (new RExpression)
    forEach children {
      n.children = (push n.children item)
    }
    return n
  }

  fn r.param:RNode (name:string type_name:string) {
    let p = (new RFunctionParam)
    p.name = name
    p.type_name = type_name
    return p
  }

  fn r.fn:RNode (name:string params:[RNode] body:RNode ) {
    let f = (new RFunction)
    f.name = name
    f.rvType = 'void'
    forEach params {
      f.params = (push f.params item)
    }
    f.body = body
    return f    
  }  

  fn r.fn:RNode (name:string rvType:string params:[RNode] body:RNode ) {
    let f = (new RFunction)
    f.name = name
    f.rvType = rvType
    forEach params {
      f.params = (push f.params item)
    }
    f.body = body
    return f    
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
    ; vd.value could be set too
    return vd
  }

  fn walk:void (res_ast:RNode cb:(_:void (item:RNode)) ) {
    cb(res_ast)
    case res_ast node:RExpression {
      forEach node.children {
        (walk item cb)
      }
    }
    case res_ast node:RBlockNode {
      forEach node.children {
        (walk item cb)
      }
    }
  }
  
}    
