
class IterTestClass@(immutable) {
  def values:[int]
}
class NodeRange {
  def start@(weak):RNodeIterator
  def end@(weak):RNodeIterator
}

class BasicAST {

  fn testIterator ( testCtx:TestContext ) {
    print "--- iterator test ---"
    let obj = (new IterTestClass)
    obj.values = (push obj.values 1)
    obj.values = (push obj.values 2)
    obj.values = (push obj.values 3)
    obj.values = (push obj.values 4)

    let iter = (new VectorIterator)
    iter.vec = obj.values
    print "First value == " + (iter.value())
    let iter = (iter.next())
    print "Second value == " + (iter.value())

    let gCtx (new grammarCtx)

    ; -- after this analysis you do not know the types yet
    ; new WHATERVER ( SOMETHING )


    ; TODO: keywords could eb collected from the grammar
    let myGrammar = (createAST `

Literal = int | string | boolean | double

VREF = vref 

GroupedExpression = P 20 expression (childcount 1)

Expression = Literal | VREF | GroupedExpression | NewOperator | 
 GetOperator | CallOperand | SumOperator | MulOperator

FunctionArguments = expression stream (separator ',') {
  vref
}

CallArguments = expression stream (separator ',') {
  Expression -> arg
}
NewArguments = expression stream (separator ',') {
  Expression -> arg
}

NewOperatorWithArgs = P 19 'new' vref -> classname NewArguments -> args
GetOperator = P 19 Expression -> left '.' VREF -> right

CallOperand = P 19 Expression -> left CallArguments -> right

ArrowFunctionExpression = P 19 FunctionArguments -> args '=' '>' Expression -> body

MulOperator = P 14 Expression -> left '*' Expression -> right
MinusOperator = P 13 Expression  -> left '-' Expression -> right
SumOperator = P 13 Expression -> left '+' Expression -> right

`)

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

    ; At this point the Grammar has been preliminarily parsed...


    let keys = (keys gCtx.rules)

    let kwdlist = (keys gCtx.keywords)

    ; print "KEYWORDS : " + (join kwdlist ",")
    forEach gCtx.keywords {
      print " kw: " + index
    }

    if( has gCtx.keywords '+') {
      print "+ is a keyword!!"
    }



    ; this is the AST which we could start walking...

    ; First problem, this is OK, but error case:
    ; let test_ast (createAST ` x + y `)

    ; This should fail!
    let test_ast (createAST `+ x +`)

    ; --> simple test
    case test_ast node:RBlockNode {
      def fc (at node.children 0)
      case fc node:RExpression {
        let iter@(optional lives) = (node_iterator node.children)
        ; THEN try to figure out whar are the parts
        gCtx.codevec = iter
        gCtx = ( collect gCtx )

      }
    }

    ; ** the operator walking...
    let source_ast (createAST `x+y`)
    let op_ast (createAST `SumOperator = vref '+' vref`)

    case op_ast node:RBlockNode {
      print "--> RBlock found!!"
      def fc (at node.children 0)
      case fc node:RExpression {
        print "--> RExpr found!! children " + (size node.children)
        let iter@(optional lives) = (node_iterator node.children)
        let testN (iter.step(3))
        let v = (unwrap (testN.value()))
        case v node:RExpression {
          print "first of testN was expr"
        }
        case v node:RVRefNode {
          print "first of testN was VREF " + node.vref
        }
        case v node:RStringValue {
          print "first of testN was string " + node.value
        }
      }
    }


    ; look for the position of x + y
    walk source_ast {
      case item node:RExpression {
        let iter@(optional lives) = (node_iterator node.children)
        print "possibly found the x + y " + (size node.children))
        while(!null? iter) {
          let value = (unwrap (iter.value()))
          case value tag:RVRefNode {
            print " -> " + tag.vref
          }
          iter = (iter.next())
        }
      }
    }

    walk op_ast {
      case item node:RStringValue {
        print " str " + node.value
      }
      case item node:RVRefNode {
        print " -> " + node.vref
      }
      case item node:RExpression {
        let iter@(optional lives) = (node_iterator node.children)
        while(!null? iter) {
          let value = (unwrap (iter.value()))
          case value tag:RVRefNode {
            print " : " + tag.vref
          }
          case value tag:RExpression {
            print "<expression>"
          }
          iter = (iter.next())
        }
      }
    }

    return

    ; 
    ; 10 * 20 + 30
    ; 10 + 30 * 40
    ; 10 + (30 * 40)
    ; obj.x.y( 20 ) + obj.z.foo() * obj.foo.bar()
    ; <Expression><Expression> <-- CALL ? 
    let res_ast (createAST `

FunctionParams = Expression having {

};
ClassDef = class (vref -> className) [[extends (vref ->extends)]]  [immutable serialize] {

};

SumOperator = (vref '+' vref);

SumOperator = (Expression '+' Expression);
MulOperator = (Expression '*' Expression);

( !b && !c )

myFn(a,b,c) {
  a = 
  128 + 140 * ;
  |> joo afd
  |> jo asd
}
    `)

    walk res_ast {
      case item node:RExpression {
        let iter@(optional lives) = (node_iterator node.children)
        print "--- iterator ---"
        let start@(temp lives) = iter
        let iter_list:[NodeRange]
        let new_starts = false
        while(!null? iter) {
          if(new_starts) {
            start = iter
            new_starts = false
          }
          let value = (unwrap (iter.value())) 
          case value tag:RIntValue {
            print "... Int == " + tag.value
          }          
          case value tag:RVRefNode {
            print "... VREF == " + tag.vref
            if(tag.vref == ";") {
              let newRange = (new NodeRange)
              newRange.start = start
              newRange.end = iter
              push iter_list newRange
              new_starts = true
            }
          }
          case value tag:RExpression {
            print "... EXRP with childcnt " + (size tag.children)
          }
          case value tag:RBlockNode {
            print "... BLOCK with childcnt " + (size tag.children)
          }
          iter = (iter.next())
        }
        print "--- iterator ends ---, range cnt == " + (size iter_list)
      }      
    }
    

    ; ---> 
  }

  fn writeFunction2:CodeOutput ( inputWr:CodeOutput ) {
    def wr = inputWr
    wr = ( write wr 'const myFnXX = () => {')
    wr = ( nl wr )
    wr = ( indent wr )
    wr = ( write wr `return x + 1 `)
    wr = ( nl wr )
    wr = ( unindent wr )
    wr = ( write wr '}')
    wr = ( nl wr )
    return wr
  }
  fn writeFunctionBody:CodeOutput ( inputWr:CodeOutput ) {
    def wr = inputWr

    ; try to do a list
    let items = ([] 1 2 3 4 5)

    forEach items {
      wr = (write wr 'let x = ' + item)
      wr = (nl wr)
      wr = (this.writeFunction2(wr))
    }

    wr = ( write wr `
// The function body
return x + 1 `)
    return wr
  }

  fn testCodeWriter ( testCtx:TestContext ) {

    let out = (new CodeOutput)
    out.settings = (new WriterSettings)

    ; create a reference to imports...
    out.tags = (set out.tags 'imports' (fork out))
    let tagRef (new WriterTag)
    tagRef.name = 'imports'
    out.slices = (push out.slices tagRef)

    out = ( write out `
function foobar() {

}   
`)

    out = ( write out 'const myFn = () => {')
    out = ( nl out )
    out = ( indent out )
    out = (this.writeFunctionBody(out))
    out = ( nl out )
    out = ( unindent out )
    out = ( write out '}')
    out = ( nl out )
    
    ; using tags to write things in the context
    let imp = (unwrap (get out.tags 'imports'))
    imp = (write imp 'import xyz from foobardom')
    imp = ( nl imp )
    out.tags = (set out.tags 'imports' imp)

    ; repeat...
    ; using tags to write things in the context
    let imp = (unwrap (get out.tags 'imports'))
    imp = (write imp 'import foo from bar')
    imp = ( nl imp )
    out.tags = (set out.tags 'imports' imp)

    let result (getString out 0 '')
    print "--> got "
    print result
  }
  

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
    let params ([] (r.param 'x' 'int' ) (r.param 'y' 'int' ) )
    let fnNode (r.fn 'add' 'int' params body )
    return fnNode
  }  

  fn testSimpleInfix:ROpNode ( infixName:string ) {
    let plusop = (op.collection 
        infixName
        ([] (op.def 'js' ''  ; all versions -> empty string
              ([] (op.param 'x' 'int') (op.param 'y' 'int'))
              ([] (cmd.param 1) (cmd.text (' ' + infixName + ' ')) (cmd.param 2)) )
        ))
    return plusop
  }

  fn createJSString:string (opDef:ROpNode) {
    let str = ""
    case opDef op:ROperatorCollection {
      let es6Op (get op.langs 'js')
      if(!null? es6Op) {
        let op = (unwrap es6Op)
        forEach op.cmds {
          case item writeTxt:ROpCmdWriteText {
            str = str + writeTxt.text
          }
          case item fnParam:ROpCmdParam {
            str = str + '<param ' + fnParam.index + '>'
          }
        }
      }
    }
    return str    
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

    testCtx.msg('Testing function op creation')
    let ctx (new writerCtx)
    let opDef = (this.testSimpleInfix('+'))
    
    ctx.operators = (set ctx.operators '-' (this.testSimpleInfix('-')))
    ctx.operators = (set ctx.operators '*' (this.testSimpleInfix('*')))
    ctx.operators = (set ctx.operators '/' (this.testSimpleInfix('/')))
    
    let cnt = 0
    case opDef op:ROperatorCollection {
      cnt = cnt + 1
      testCtx.assert( ( op.name == '+' ) 'Op name should be +')
      let es6Op (get op.langs 'js')
      if(!null? es6Op) {
        let op = (unwrap es6Op)
        cnt = cnt + 1
        testCtx.assert( ( (size op.params) == 2) '+ Op has two params')        
        testCtx.assert( ( (size op.cmds) == 3) '+ Op has three commands')  
        let str = ""
        forEach op.cmds {
          case item writeTxt:ROpCmdWriteText {
            str = str + writeTxt.text
          }
          case item fnParam:ROpCmdParam {
            str = str + '<param ' + fnParam.index + '>'
          }
        }
        testCtx.assert( (str == '<param 1> + <param 2>') 'incorrect command output for +' )
        testCtx.msg( 'code output ' + str)
      }
    }
    testCtx.assert( ( cnt == 2) 'All op tests were not run')        
    case opDef op:ROperatorCollection {
      ctx.operators = (set ctx.operators op.name opDef)
      let findOp = (get ctx.operators '+')
      testCtx.assert( (!null? findOp) '+ OP was not found from ctx')   
      if(!null? findOp) {
        testCtx.msg('+ op was in context')
      }
      if(!null? (get ctx.operators '-')) {
        testCtx.msg('- op was in context')        
        let minusStr = (this.createJSString((unwrap (get ctx.operators '-'))))
        testCtx.assert( (minusStr == '<param 1> - <param 2>') 'incorrect command output for -' )
        testCtx.msg(minusStr)        
      }
    }     
    
  }

  ; try to classify nodes
  fn testClassifier:writerCtx ( ctx:writerCtx ) {
    let subCtx@(temp) = ctx
    if(null? ctx.activeNode) {
      return subCtx
    }
    let ast = (unwrap ctx.activeNode)

    case ast node:RBlockNode {
      let new_children:[RNode]
      let res (new RBlockNode)
      res.name = node.name
      let emptyCtx (new writerCtx)
      subCtx.outerBlock = ctx
      subCtx.defined_vars = emptyCtx.defined_vars
      res.startCtx = subCtx
      node.children.forEach({
        subCtx.activeNode = item
        subCtx = (this.testClassifier(subCtx))      
        if(!null? subCtx.activeNode) {
          push new_children (unwrap subCtx.activeNode)
        }  
      })
      new_children.forEach({
        res.children = (push res.children item)
      })
      res.endCtx = subCtx
      subCtx.activeNode = res
      subCtx.captured_vars = ctx.captured_vars
      subCtx.defined_vars = ctx.defined_vars
      return subCtx
    }

    case ast node:RExpression {

      ; try iterator for RExpression....


      ; a trivial classifier which detects SQL and simple class
      if( (size node.children) >= 3) {
        let fc = (at node.children 0)
        let second = (at node.children 1)
        case fc classTag:RVRefNode {
          if(classTag.vref == 'class') {
            case second classNameTag:RVRefNode {
              let maybe = (new RMaybeClass)
              maybe.className = classNameTag.vref
              maybe.node = ast
              subCtx.activeNode = maybe
              return subCtx
            }
          }
          if(classTag.vref == 'CREATE') {
            let maybe = (new RMaybeSQL)
            maybe.command = classTag.vref
            maybe.node = ast
            subCtx.activeNode = maybe
            return subCtx
          }
        }
      }

      ; standard way of walking the expressions...
      let new_children:[RNode]
      let res (new RExpression)
      node.children.forEach({
        subCtx.activeNode = item
        subCtx = (this.testClassifier(subCtx))      
        if(!null? subCtx.activeNode) {
          push new_children (unwrap subCtx.activeNode)
        }  
      })
      new_children.forEach({
        res.children = (push res.children item)
      })
      res.endCtx = subCtx
      subCtx.activeNode = res
      return subCtx
    }

    case ast node:RVRefNode {
    }
    return subCtx
  }


  fn testTokenizer( testCtx:TestContext ) {
    ; http://www.postgresqltutorial.com/postgresql-create-table/
    ; INHERITS existing_table_name;

    let testCode `
 
CREATE TABLE article (
  article_id bigserial primary key,
  article_name varchar(20) NOT NULL,
  article_desc text NOT NULL,
  date_added timestamp default NULL
); 

let myValue = (CREATE TABLE second_article (
  article_id bigserial primary key,
  article_name varchar(20) NOT NULL,
  article_desc text NOT NULL,
  date_added timestamp default NULL
))

gql {
  get_items {
    name
    count
    related {
      name
    }
  }
}

 (sql SELECT firstname as name1, lastname as name2 FROM user WHERE user.created > 10 AND user.is_active = true
        GROUP BY lastname
 )

 // Note: bug in simple tokenizer...
 const mycompo = x => <div>{x}</div>
 const mycompo = x => <div value={"what?"}> hello {x} </div>

 const myFn = x => x + 1   
 const myFn = x => { return x + 1 }   
 const myFn = x => ( return x + 1 )   

 class myClass extends someOhter {
   fn OK ( x:(z:int h:int) -> int) {

   }
 }

 FunctionArgs = (stream separated by ',' {
  (vref -> name) ':' ( typedef -> value_typedef ) ,
  (vref -> name) ':' ( typedef -> value_typedef ) '=' (TokenExpression -> default_value) ,
  ObjectExpressionAsArg
})
    `
    let code (new SourceCode (testCode))
    let t (new RangerStringTokenizer (code))
    t.parse(true)
    let root (unwrap t.rootNode)    

    let res_ast = (createAST root)
    let out = (new CodeOutput)
    out.settings = (new WriterSettings)
    print "--- ast out --- "
    print (getString (print res_ast out) )

    let ctx (new writerCtx)
    ctx.activeNode = res_ast

    let resCtx = (this.testClassifier(ctx))
    if(!null? resCtx.activeNode) {
      print "... did walk"
      let node = (unwrap resCtx.activeNode)
      walk node {
        case item n:RMaybeClass {
          print "Maybe Class == " + n.className
        }
        case item n:RMaybeSQL {
          print "Maybe SQL == " + n.command
          let out = (new CodeOutput)
          out.settings = (new WriterSettings)
          print (getString (print (unwrap n.node) out) )
        }        
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