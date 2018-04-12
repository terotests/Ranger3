
; possible node types
union RNode (
  RParsedNode
  RTextNode
  RBlockNode
  RDefVariable
  RIncExpression
  RExpression
  RVRefNode
  ROperator
  RFunction
  RFunctionParam
  RIntValue
  RBooleanValue
  RStringValue
  RDoubleValue
  RNoOp
  RMaybeClass
  RMaybeSQL
  RLanguageRule
)

union RValueType (
  RType_Scalar
  RType_Literal
  RType_Class
  RType_Function
  RType_GenericTrait
  RType_Enum
  RObjectInstance
  RObjectReference
)

union RErrorType (
  RError
)

Enum RLiteralType ( None Int Double Boolean String )
Enum RScalarType ( None Int Double Boolean String )


class RType_Scalar@(immutable) {
  def name ""
  def bits 64
}

class RType_Literal@(immutable) {
  def value_type:RLiteralType RLiteralType.None
  def int_value 0
  def double_value 0.0
  def string_value ""
  def boolean_value false
}

operator type:void es6 {

  fn literal:RType_Literal (v:string) {
    def sca (new RType_Literal)
    sca.string_value = v
    sca.value_type = RLiteralType.String 
    return sca
  }
  fn literal:RType_Literal (v:int) {
    def sca (new RType_Literal)
    sca.int_value = v
    sca.value_type = RLiteralType.Int 
    return sca
  }
  fn literal:RType_Literal (v:double) {
    def sca (new RType_Literal)
    sca.double_value = v
    sca.value_type = RLiteralType.Double 
    return sca
  }
  fn literal:RType_Literal (v:boolean) {
    def sca (new RType_Literal)
    sca.boolean_value = v
    sca.value_type = RLiteralType.Boolean 
    return sca
  }
}

; TODO:
; - create a function type 

class RType_FunctionParam@(immutable) {
  def name ""
  def value_type:RValueType
}

class RType_Function@(immutable) {
  def name ""
  def return_value:RValueType
  def params:[RType_FunctionParam]
}

; --> definition of a class member variable or perhaps 
; this could be also the generic variable definition
class RType_Variable@(immutable) {
  def name ""
  def value_type:RValueType
  def defult_value:RNode
}

; normal class definition
class RType_Class@(immutable) {
  def name ""
  def extendsClasses:[RType_Class]
  def variables:[string:RType_Variable]
  def methods:[string:RType_Function]
}

class RType_GenericTrait@(immutable) {
  def name ""
  def freeVariables:[string]
  def methods:[string:RType_Function]
}

class RType_Enum@(immutable) {
  def name ""
  def keys:[string]
}


class RError@(immutable) {
  def ctx:writerCtx
  def node:RNode
  def text ""
}

class RParsedNode@(immutable) {
  def ctx:writerCtx
  def value "hello there"
}

class RTextNode@(immutable) {
  def ctx:writerCtx
  def text "someTextValueHere"
}

class RVRefNode@(immutable) {
  def ctx:writerCtx
  def vref ""
  def ns:[string]
}

class RDefVariable@(immutable) {
  def ctx:writerCtx
  def name "xxx"
  def typename "int"
  def value:RValueType
}

class ROperator@(immutable) {
  def ctx:writerCtx
  def name ""  ; operator name
}

; this is just for the proof of concept demo
class RIncExpression@(immutable) {
  def ctx:writerCtx
  def name "xxx"  ; <-- variable to increment...
}

; ------- create instance of class and getting some property -----
class RObjectInstance@(immutable) {
  def ctx:writerCtx
  def objectType:RValueType
}

class RObjectReference@(immutable) {
  def ctx:writerCtx
  def name ""
  def objInstance:RObjectInstance  ; ?? 
}

; whaterver is going to be referenced using the "get"
class RGetOperator@(immutable) {
  def ctx:writerCtx
  def left:RValueType
  def right:RValueType
}

; ------------------------------------------------------------------

; maybe not necessary really, 
class RStaticFnCall@(immutable) {
  def ctx:writerCtx
  def calledClass:RType_Class
  def calledMethod:RType_Function
}


class RFunctionParam@(immutable) {
  def name ""
  def ctx:writerCtx
  def type_name ""      ; [Vector:int]
  def required true
}

class RFunction@(immutable) {
  def name ""
  def startCtx:writerCtx
  def endCtx:writerCtx
  def ctx:writerCtx
  def params:[RNode]
  def body:RNode
  def rvType "void"
}


class RBlockNode@(immutable) {
  def name ""
  def startCtx:writerCtx
  def endCtx:writerCtx
  def ctx:writerCtx
  def children:[RNode]
}

; Then generic expression
class RExpression@(immutable) {
  def startCtx:writerCtx
  def endCtx:writerCtx
  def ctx:writerCtx
  def children:[RNode]
}


; -- some value types
; should you be using 
class RIntValue@(immutable) {
  def value:int 0
}
class RBooleanValue@(immutable) {
  def value:boolean false
}
class RStringValue@(immutable) {
  def value:string ""
}
class RDoubleValue@(immutable) {
  def value:double 0.0
}

; should the variable also be of union type?
class RVariable@(immutable) {
  def name "simple variable test"
  def typename ""
  def value:RValueType
  def read_cnt 0
  def write_cnt 0 
}

class RNoOp@(immutable) {
  def name ""
}


class RMaybeClass@(immutable) {
  def className ""
  def node:RNode
}

class RMaybeSQL@(immutable) {
  def command ""
  def node:RNode
}

; grammar nodes

class RGrammarRule@(immutable) {
  def precedence 20
  def associativity 0
  def name ""
  def rules:RNodeIterator
}

