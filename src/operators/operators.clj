operator type:void all {

  fn op.collection:ROpNode ( opName:string params:[ROperatorDef] ) {
    let n = (new ROperatorCollection)
    n.name = opName
    forEach params {
      n.langs = (set n.langs item.lang item)
    }
    return n
  }

  fn op.def:ROperatorDef ( lang:string versions:string params:[ROperatorParam] cmds:[ROpNode] ) {
    let n = (new ROperatorDef)
    n.lang = lang
    n.versions = versions
    forEach params {
      n.params = (push n.params item)
    }
    forEach cmds {
      n.cmds = (push n.cmds item)
    }
    return n
  }

  fn op.param:ROperatorParam (name:string type_name:string) {
    let p = (new ROperatorParam)
    p.name = name
    p.type_name = type_name
    return p    
  }

  fn cmd.param:ROpNode (index:int) {
    let p = (new ROpCmdParam)
    p.index = index
    return p    
  }

  fn cmd.text:ROpNode (txt:string) {
    let p = (new ROpCmdWriteText)
    p.text = txt
    return p    
  }


}