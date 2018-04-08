
operator type:void all { 

  fn collect:grammarCtx (ctx:grammarCtx ) {
    let res = ctx
    forEach ctx.rules {
      print " collect ctx rule : " + index
    }    
    if(!null? ctx.codevec) {
      print "codevec found"
      let vec = (unwrap ctx.codevec)
      let valueMaybe = (vec.value())
      if(!null? valueMaybe) {
        let value = (unwrap valueMaybe)
        case value v:RVRefNode {
          print "the first value was VREF! == " + v.vref
        }
      }
    }
    return res
  }

}