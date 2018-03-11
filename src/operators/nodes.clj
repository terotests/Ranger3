union ROpNode (
  ROperatorCollection
  ROperatorParam
  ROperatorDef
  ROpCmdWriteText
  ROpCmdParam
)

class ROperatorCollection@(immutable) {
  def name ""
  def langs:[string:ROperatorDef]
}

; should you define simple type constructor for array type ? 
; type Array (T:any) Array<T>
; type T T
; type fn adder:T (arg:T) (arg + 1)
; type fn loop:[T] (x:T) { }

; using type class to limit the T
; type Array<T:Addable>

; push Vector<T> value:T
; Array<T>
; -> must construct a type constructor

class ROperatorParam@(immutable) {
  def name ""
  def ctx:writerCtx
  def type_name ""      ; Vector<int> or Vector<Vector<int>>
  def equation:RNode
  def required true
}

class ROperatorDef@(immutable) {
  def lang ""
  def versions ""
  def params:[ROperatorParam]
  def cmds:[ROpNode]
}

; '+'
class ROpCmdWriteText@(immutable) {
  def text ""
}

; (e 1) '+' (e 2) <- param 2
class ROpCmdParam@(immutable) {
  def index 0
  def name ""
}
