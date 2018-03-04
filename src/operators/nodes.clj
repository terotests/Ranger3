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

class ROperatorParam@(immutable) {
  def name ""
  def ctx:writerCtx
  def type_name ""      ; [Vector:int]
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
