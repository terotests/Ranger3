
operator type:void all { 

  fn create_grammar:grammarCtx (myGrammar:RNode) {
    let gCtx (new grammarCtx)

    walk myGrammar {
      case item keyword:RStringValue {
        gCtx.keywords = (set gCtx.keywords keyword.value true)
      }
    }

    case myGrammar mainBlock:RBlockNode {
      def fc (at mainBlock.children 0)
      case fc expr:RExpression {
        let rootIter@(optional lives) = (node_iterator expr.children)
        while(!null? rootIter) {
          let nameNode = (rootIter.stepValue(0))
          let eqNode = (rootIter.stepValue(1))
          if( (!null? nameNode) && (!null? eqNode) ) {
            case (unwrap nameNode) name:RVRefNode {
              case (unwrap eqNode) eq:RVRefNode {
                if(eq.vref == "=") {
                  rootIter = (rootIter.step(2))
                  let slice = (cut (unwrap rootIter) {
                    let eqNode = (item.stepValue(1))
                    if(!null? eqNode) {
                      case (unwrap eqNode) eq:RVRefNode {
                        if(eq.vref == "=") {
                          return true
                        }
                      }                      
                    }
                    return false
                  })                  
                  gCtx.rules = (set gCtx.rules name.vref slice)           
                }
              }
            }
          }
          rootIter = (rootIter.next())
        }
      }
    }    
    return gCtx
  }

  fn test_expression@(optional):RNodeIterator (str:string) {
    let iter@(optional lives):RNodeIterator
    let test_ast (createAST str)
    case test_ast node:RBlockNode {
      def fc (at node.children 0)
      case fc node:RExpression {
        iter = (node_iterator node.children)
      }
    } 
    return iter   
  }

  fn get_int@(optional):int ( ctx:grammarCtx valueMaybe@(optional):RNode) {
    let res@(optional):int
    if(!null? valueMaybe) {
      let value = (unwrap valueMaybe)
      case value v:RIntValue {
        res = v.value
      }
    }    
    return res
  }  

  fn get_identifier:string ( ctx:grammarCtx valueMaybe@(optional):RNode) {
    if(!null? valueMaybe) {
      let value = (unwrap valueMaybe)
      case value v:RVRefNode {
        if( false == (has ctx.keywords v.vref) ) {
          return v.vref
        }                    
      }
    }    
    return ''
  }
  fn get_keyword:string ( ctx:grammarCtx valueMaybe@(optional):RNode) {
    if(!null? valueMaybe) {
      let value = (unwrap valueMaybe)
      case value v:RVRefNode {
        if (has ctx.keywords v.vref) {
          return v.vref
        }                    
      }
    }    
    return ''
  }  
  fn is_keyword:boolean ( ctx:grammarCtx valueMaybe@(optional):RNode) {
    if(!null? valueMaybe) {
      let value = (unwrap valueMaybe)
      case value v:RVRefNode {
        if( has ctx.keywords v.vref) {
          return true
        }                    
      }
    }    
    return false
  }

  fn is_keyword:boolean ( ctx:grammarCtx valueMaybe@(optional):RNode token:string) {
    if(!null? valueMaybe) {
      let value = (unwrap valueMaybe)
      case value v:RVRefNode {
        if( has ctx.keywords v.vref) {
          if(v.vref == name) {
            return true
          }
        }                    
      }
    }    
    return false
  }  

  fn collect:grammarCtx ( ctx:grammarCtx ) {
    let res = ctx
    if(!null? ctx.codevec) {
      print "codevec found"
      let vec = (unwrap ctx.codevec)
      let kw1 = (get_keyword ctx (vec.stepValue(0)))
      let id2 = (get_identifier ctx (vec.stepValue(1)))
      if(has kw1) {
        print 'kw1 == ' + kw1
      }
      if(has id2) {
        print 'id2 == ' + id2
      }
    }
    return res
  }

  fn simple_plus_test:grammarCtx ( ctx:grammarCtx ) {
    let res = ctx
    if(!null? ctx.codevec) {
      print "codevec found, testing for + expr"
      let vec = (unwrap ctx.codevec)
      let id1 = (get_identifier ctx (vec.stepValue(0)))
      let id2 = (get_identifier ctx (vec.stepValue(2)))
      let plus_kw = (get_keyword ctx (vec.stepValue(1)))
      print 'result: ' + id1 + ',' + plus_kw + ',' + id2
      if( (has id1) &&  (has id2) && (plus_kw == '+') ) {
        print "--> found + operator"
      } {
        print " :( did not find + operator"
      }
    }
    return res
  }  

}