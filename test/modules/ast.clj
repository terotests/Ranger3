

class BasicAST {

  fn walkNode@(weak):writerCtx (ctx:writerCtx) {
    let subCtx = ctx

    ; Walk a block node
    case (unwrap ctx.activeNode) b:RBlockNode {
      let new_children:[RNode]
      let res (new RBlockNode)
      res.name = b.name
      let emptyCtx (new writerCtx)
      subCtx.outerBlock = ctx
      subCtx.defined_vars = emptyCtx.defined_vars
      res.startCtx = subCtx
      b.children.forEach({
        subCtx.activeNode = item
        subCtx = (this.walkNode(subCtx))      
        if(!null? subCtx.activeNode) {
          push new_children (unwrap subCtx.activeNode)
        }  
      })
      new_children.forEach({
        res.children = (push res.children item)
      })
      res.endCtx = subCtx
      ; reset the context:
      subCtx.activeNode = res
      subCtx.captured_vars = ctx.captured_vars
      subCtx.defined_vars = ctx.defined_vars
      return subCtx
    }

    ; Variable definition
    ; RDefVariable
    case (unwrap ctx.activeNode) b:RParsedNode {
      let newCtx = ctx
      let txtNode (new RTextNode)
      txtNode.text = b.value
      newCtx.activeNode = txtNode
      return newCtx
    }

    ; RExpression
    case (unwrap ctx.activeNode) b:RExpression {
      ; Currently, does nothing to the expression node itself...
      ; print"--- found expression node, but I am going to do nothing to it ----"
      ; the node could be replaced with a node collection in some cases ?? 
      return ctx
    }

    ; reference to variable, how to check it is actually local
    case (unwrap ctx.activeNode) b:RIncExpression {
      let newCtx = ctx
      let myVar (get newCtx.variables b.name)
      if(!null? myVar) {
        ; print"-------============ INC ======-----------"
        ; print"Variable " + b.name + " was found!!!"

        let defined_here = (get newCtx.defined_vars b.name)
        if(!null? defined_here) {
          ; print"^^^ was defined at this scope"
        }

        if( (!null? ctx.outerBlock) && (null? defined_here)) {
          let outerVar (get ctx.outerBlock.variables b.name)
          if(!null? outerVar) {
            ; print"^^ it was defined also in outer scope..."
            ; --> mark it as captured
            ; print"** captured " + b.name
            newCtx.captured_vars = (set newCtx.captured_vars b.name (unwrap myVar))
          }
        }
        let value = (unwrap myVar.value)
        ; Not correct of course, must be a literal value
        ; incrementing a literal would produce another litera
        ; (inc MILLION)
        case value x:RType_Literal {
          x.int_value = x.int_value + 1
        }
        myVar.read_cnt = myVar.read_cnt + 1
        myVar.write_cnt = myVar.write_cnt + 1
        newCtx.variables = (set newCtx.variables b.name (unwrap myVar))
      } {
        let err (new RError)
        err.text = "Undefined variable " + b.name
        newCtx.errors = (push newCtx.errors err)
      }  
      return newCtx
    }

    ; Walk a parsed text node
    case (unwrap ctx.activeNode) b:RDefVariable {
      let newCtx = ctx
      let vDef (new RDefVariable)
      newCtx.activeNode = vDef
      let v (new RVariable)
      v.name = b.name
      v.typename = b.typename
      v.value = b.value
      newCtx.variables = (set newCtx.variables b.name v)
      newCtx.defined_vars = (set newCtx.defined_vars b.name v)
      return newCtx
    }
    return ctx
  }

  ; simple test returnin a block, can be extended in future...
  fn testBlockAsReturn:RNode () {
    let b (r.block ([] 
            (r.def 'x' 'int')
            (r.def 'y' 'int')
            (r.expr ([] (r.op '+') (r.vref 'x') (r.vref 'y') ) )
          ))
    return b
  }
  
  fn testFnBlock:RNode () {
    let body (r.block ([] 
              (r.expr ([] (r.op 'return' ) (r.expr ([] (r.op '+') (r.vref 'x') (r.vref 'y') ) ) ) )
          ))
    let params ([] (r.param 'x' 'int' ) (r.param 'x' 'int' ) )
    let fnNode (r.fn 'add' params body )
    return fnNode
  }  
  ; simple block creator test...
  fn createBlock ( testCtx:TestContext ) {
    testCtx.msg('Test Creating Blocks manually')
    let b (r.block ([] 
            (r.def 'x' 'int')
            (r.expr ([] (r.op '+') (r.vref 'x') (r.vref 'y') ) )
          ))
    let case_cnt 0
    case b bb:RBlockNode {
      testCtx.assert( ( (size bb.children) == 2) 'There should be two children for the block')
      case_cnt = case_cnt + 1
    }

    let b2 (this.testBlockAsReturn())
    case b2 bb:RBlockNode {
      testCtx.assert( ( (size bb.children) == 3) 'There should be 3 children for the block')
      testCtx.msg('The Second Block appeared to be OK')
      case_cnt = case_cnt + 1
    }
    testCtx.assert( ( case_cnt == 2) 'Two cases should be run')

    let fnTest (this.testFnBlock())
    case fnTest f:RFunction {
      testCtx.assert( ( f.name == 'add') 'Function name should be Add')
      testCtx.assert( ( (size f.params) == 2) 'Function has two params')
      let fbody (unwrap f.body)
      case fbody fnBody:RBlockNode {
        testCtx.msg('Function has a body, good')
      }
    }
    
  }


  ; First proof oc concept test run
  fn blockCtxTest ( testCtx:TestContext ) {

    testCtx.msg('Running the Basic Block Context testcase')

    let ctx (new writerCtx)
    let block (new RBlockNode)
    let block2 (new RBlockNode)
    let block3 (new RBlockNode)

    block.name = "block1"
    block2.name = "block2"
    block3.name = "block3"

    ; define a class type

    let genTrait1 (new RType_GenericTrait)
    genTrait1.name = "Vector<T>"
    ctx.defined_types = (set ctx.defined_types 'Vector<T>' genTrait1)

    let intType (new RType_Scalar)
    intType.bits = 64
    ctx.defined_types = (set ctx.defined_types 'int' intType)

    let en (new RType_Enum)
    en.name = "RValueEnum"
    en.keys = (push en.keys 'Int')
    en.keys = (push en.keys 'String')
    en.keys = (push en.keys 'Boolean')
    en.keys = (push en.keys 'Double')
    ctx.defined_types = (set ctx.defined_types 'RValueEnum' en)

    let someClass (new RType_Class)
    someClass.name = "MyClass"

    let xVal (new RType_Variable)
    xVal.name = 'x'
    xVal.value_type = (unwrap (get ctx.defined_types 'int'))
    someClass.variables = (set someClass.variables 'x' xVal)

    ctx.defined_types = (set ctx.defined_types 'MyClass' someClass)

    ; --> creating instance of type 'MyClass' into some variable
    ; ? is this variable directly a refrence ? 
    let objInstance (new RObjectInstance)
    objInstance.objectType = (unwrap (get ctx.defined_types 'MyClass'))

    let objRef (new RObjectReference)
    objRef.objInstance = objInstance

    let vd (new RDefVariable)
    vd.name = 'obj'
    vd.typename = ''
    vd.value = objRef   ; <-- reference to the obj
    block.children = (push block.children vd)

    ; define a generic trait type

    ; try setting the ctx in fucntion
    ctx.state.is_function = true

    let vd (new RDefVariable)
    vd.name = 'innerHTML'
    vd.typename = 'string'
    vd.value = ( literal '<div/>')

    block.children = (push block.children vd)

    let nn (new RParsedNode)
    nn.value = "The Node 1"
    block.children = (push block.children nn)
 
    let nn (new RParsedNode)
    nn.value = "The Node 2"
    block.children = (push block.children nn)

    let nn (new RParsedNode)
    nn.value = "The Node 3"
    block2.children = (push block2.children nn)

    let vd (new RDefVariable)
    vd.name = 'FXZ'
    vd.typename = 'string'
    vd.value = (literal 'FOOBARDOM')
    block2.children = (push block2.children vd)

    ; --> one expression node....
    let expr1 (new RExpression)
    block2.children = (push block2.children expr1)
    
    let vd (new RDefVariable)
    vd.name = 'X'
    vd.value = (literal 1234)
    block.children = (push block.children vd)

    let vd (new RDefVariable)
    vd.name = 'notused'
    vd.value = (literal 55)
    block3.children = (push block3.children vd)

    let incCmd (new RIncExpression)
    incCmd.name = 'X'
    block2.children = (push block2.children incCmd)

    let vd2 (new RDefVariable)
    vd2.name = 'Y'
    vd2.value = (literal 24)
    block2.children = (push block2.children vd2)

    let incCmd (new RIncExpression)
    incCmd.name = 'Y'
    block2.children = (push block2.children incCmd)

    let incCmd (new RIncExpression)
    incCmd.name = 'ThisVarItIs'
    block3.children = (push block3.children incCmd)
    
    block.children = (push block.children block2)
    block.children = (push block.children block3)

    ctx.activeNode = block

    ctx = (this.walkNode( ctx ))

    testCtx.assert( ( (size (keys ctx.variables)) == 6 ) 'ctx should have definex 6 variables' )´

    forEach ctx.variables {
      ; print"variable : " + index + " type --> " + item.typename + " write cnt " + item.write_cnt + " read cnt " + item.read_cnt
      if( index == 'X' ) {
        testCtx.assert( ( item.write_cnt  == 1 ) 'write_cnt count of X should be 1' )´
        testCtx.assert( ( item.read_cnt  == 1 ) 'read_cnt count of X should be 1' )´
      }
      if( index == 'Y' ) {
        testCtx.assert( ( item.write_cnt  == 1 ) 'write_cnt count of Y should be 1' )´
        testCtx.assert( ( item.read_cnt  == 1 ) 'read_cnt count of Y should be 1' )´
      }
    }

    def walkFn (fn:void (node:RNode) {
    })
    walkFn = (fn:void (node:RNode) {
      case node txt:RTextNode {
        ; print"txt = " + txt.text
      }
      case node b:RBlockNode {
        ; print"block: " + b.name
        ; print"block with child count = " + (size b.children)
        if(!null? b.startCtx.outerBlock) {
          ; print" ^^ has outerBlock "
          let ob = b.startCtx.outerBlock
          if(!null? ob.outerBlock) {
            ; print" ^^ and outer has also outer ! "
          }
        }
        ; print"variables at the start of the block:"
        forEach b.startCtx.variables {
          ; print" ** variable : " + index + " type --> " + item.typename
          if(!null? item.value) {
            let v (unwrap item.value)
            case v x:int {
              ; print"^ int value " + x
            }
            case v x:string {
              ; print"^ string value " + x
            }
          }
        }
        ; print"variables at the end of the block:"
        forEach b.endCtx.variables {
          ; print" ** variable : " + index + " type --> " + item.typename
          if(!null? item.value) {
            let v (unwrap item.value)
            case v x:RType_Literal {
              ; print"^ int value " + x.int_value + " str val " + x.string_value
            }
          }
        }

        ; print"define cnt : " + (size (keys b.endCtx.defined_vars))
        ; print"capture cnt : " + (size (keys b.endCtx.captured_vars))
        ; print""

        ; TODO: think how to collect chaining ops like
        ;  a.foo().bar().dom()

        b.children.forEach({
          case item d:RDefVariable {
            ; print"def " + d.name
          }
          case item e:RExpression {
            ; print"<expression found>"
          }
          case item txt:RTextNode {
            ; print"item.txt = " + txt.text
          }          
          case item n:RBlockNode {
            ; print"another block with child cnt = " + (size n.children)
            walkFn( item )
          }          
        })
      }      
    
    })
    walkFn( (unwrap ctx.activeNode) )

    testCtx.assert( ( (size ctx.errors) == 1 ) 'Error count should be one' )
    ; print"Error cnt : " + (size ctx.errors)
    ctx.errors.forEach({
      case item e:RError {
        ; printe.text
      }
    })

    forEach (keys ctx.defined_types) {
      ; print" - " + item
      def t (unwrap (get ctx.defined_types item))
      case t cl:RType_Class {
        forEach (keys cl.variables) {
          ; print" --> var " + item
        }
      }
    }



  }

}