

class transformRes {
  def node:RNode
  def iter@(weak):RNodeIterator
}

operator type:void all { 

  fn is_match:boolean (gCtx:grammarCtx iter:RNodeIterator ruleName:string) {
    let ruleOpt = (get gCtx.rules ruleName)
    if(!null? ruleOpt) {
      let rule = (unwrap ruleOpt)
      case rule n:RGrammarRule {

        let ruleIter@(optional) = n.rules
        let valueIter@(optional) = iter

        let does_match = false
        let can_match = true

        ; x + y
        while( (!null? ruleIter) && (!null? valueIter)) {

          let valueOpt = (valueIter.value())
          if(null? valueOpt) {
            return false
          }
          let value = (unwrap valueOpt)        
          let currentRule = (ruleIter.value())
          if(!null? currentRule) {  
            let item = (unwrap currentRule)  
            case item v:RGrammarTypeToVar {
              if( has gCtx.rules v.type_name ) {
                ; print "   => There is rule for " + v.type_name
              }          
            }            
            case item v:RGrammarOneOf {
              let did_match = false
              forEach v.option {
                if did_match {
                  return
                }
                if( index == "int") {
                  case value vn:RIntValue {
                    did_match = true
                  }                  
                }
                if( index == "string") {
                  case value vn:RStringValue {
                    did_match = true
                  }                  
                }   
                if( index == "double") {
                  case value vn:RDoubleValue {
                    did_match = true
                  }                  
                }
                if( index == "boolean") {
                  case value vn:RBooleanValue {
                    did_match = true
                  }                  
                }                                                 
                if(false == did_match) {
                  let vi = (unwrap valueIter)
                  did_match = ( is_match gCtx vi index )
                }
              }
              if did_match {
                does_match = true
              } {
                can_match = false
              }              
            }

            case item v:RGrammarToken {
              let did_match = false
              print "  token " + v.token 
              case value vn:RVRefNode {
                if(v.token == vn.vref) {
                  did_match = true
                } {
                  can_match = false
                }
              }              
            }

            case item v:RVRefNode {
              let did_match = false

              if( has gCtx.rules v.vref ) {
                did_match = ( is_match gCtx (unwrap valueIter) v.vref )
              }
              if( v.vref == 'vref' ) {
                case value vn:RVRefNode {
                  if(false == (is_keyword gCtx vn.vref)) {
                    did_match = true
                  } 
                }
              }
              if( v.vref == 'int' ) {
                case value vn:RIntValue {
                  did_match = true
                }
              }               
              if( v.vref == 'string' ) {
                case value vn:RStringValue {
                  did_match = true
                }
              }              
              if did_match {
                does_match = true
              } {
                can_match = false
              }              
            }                   
          } 
          ruleIter = (ruleIter.next()) 
          valueIter = (valueIter.next())    
          ; --> to next rule
        }
        if( can_match && does_match ) {
          return true
        }
        return false
      }
    }
    return false
  }

  fn transform:RNodeIterator (inValue:RNodeIterator cb:(_:transformRes (iter:RNodeIterator) )) {
    let rootIter@(optional lives weak) = inValue
    let myVector:Vector@(RNode) (new Vector@(RNode))
    while(!null? rootIter) {    
      let oldIter (unwrap rootIter)
      let iter (unwrap rootIter)
      let res = (cb(iter))
      if(!null? res.node) {
        myVector = (push myVector (unwrap res.node))
      }      
      if(!null? res.iter) {
        rootIter = res.iter
      } {
        break
      }
      if(!null? rootIter) {
        let iterNow (unwrap rootIter)
        if( iterNow == oldIter ) {
          break
        }
      }
    }
    let res = (node_iterator myVector)
    return res
  }

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

  fn is_keyword:boolean ( ctx:grammarCtx name:string) {
    if( has ctx.keywords name) {
      return true
    }                       
    return false
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