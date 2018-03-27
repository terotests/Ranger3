operator type:void all {

  fn createAST:RNode (src:string) {
    let code (new SourceCode (src))
    let t (new RangerStringTokenizer (code))
    t.parse(true)
    let root (unwrap t.rootNode)    
    return (createAST root)
  }

  fn createAST:RNode (item:CodeNode) {
    if(item.expression && (item.is_block_node == false)) {
      let block (new RExpression)
      forEach item.children {
        let ch = (createAST(item))
        block.children = (push block.children ch) 
      }        
      return block
    }
    if item.is_block_node {
      let block (new RBlockNode)
      forEach item.children {
        let ch = (createAST(item))
        block.children = (push block.children ch) 
      }        
      return block
    }

    if(item.value_type == RangerNodeType.VRef) {
      let node (new RVRefNode)
      node.vref = item.vref
      return node
    }    
    if(item.value_type == RangerNodeType.Boolean) {
      let node (new RBooleanValue)
      node.value = item.boolean_value
      return node
    }    
    if(item.value_type == RangerNodeType.Integer) {
      let node (new RIntValue)
      node.value = item.int_value
      return node
    }    
    if(item.value_type == RangerNodeType.Double) {
      let node (new RDoubleValue)
      node.value = item.double_value
      return node
    }    
    if(item.value_type == RangerNodeType.String) {
      let node (new RStringValue)
      node.value = item.string_value
      return node
    }    
    let no_op = (new RNoOp)
    return no_op
  }

  fn print:CodeOutput (res_ast:RNode input:CodeOutput) {

    let out = input
    case res_ast node:RExpression {
      out = (write out '(')
      out = (indent out)
      out = (nl out)
      forEach node.children {
        out = (print item out)
      }
      out = (nl out)
      out = (unindent out)
      out = (write out ')')
    }
    case res_ast node:RBlockNode {
      out = (write out '{')
      out = (indent out)
      out = (nl out)
      forEach node.children {
        out = (print item out)
        out = (nl out)
      }
      out = (unindent out)
      out = (write out '}')
      out = (nl out)
    }
    case res_ast node:RVRefNode {
      return (write out (' ' + node.vref))
    }
    case res_ast node:RBooleanValue {
      if( node.value) {
        out = (write out ' true')
      } {
        out = (write out ' false')
      }
    }
    case res_ast node:RDoubleValue {
      out = (write out (' '+node.value) )
    }      
    case res_ast node:RIntValue {
      out = (write out (' '+node.value) )
    }      
    case res_ast node:RStringValue {
      ; TODO: should escape the string
      out = (write out ('`' + node.value + '`') )
    }      
    return out     
  }

}