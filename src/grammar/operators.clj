
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
          if( has ctx.keywords v.vref) {
            print "the first value is a keyword!!" + v.vref
          } {
            print "the first value was identifier " + v.vref
          }                    
        }
      }
      let valueMaybe = (vec.stepValue(1))
      if(!null? valueMaybe) {
        let value = (unwrap valueMaybe)
        case value v:RVRefNode {
          if( has ctx.keywords v.vref) {
            print "the second value is a keyword!!" + v.vref
          } {
            print "the second value was identifier " + v.vref
          }                    
        }
      }
    }
    return res
  }

}