
class RContextEnv@(immutable) {
  def langFilePath:string ""
  def libraryPaths:[string]
  def outputPath ""  
}

class RContextState@(immutable) {
  def is_function false
  def is_lambda false
  def is_catch_block:boolean false
  def is_try_block:boolean false
  def in_expression:boolean false
  def in_method false
  def in_static_method false
  def in_class false
  def activeClass ""
  def nspath "" ; the current compiler namespace
}

; immutable compiler writer context
class writerCtx@(immutable) {

  def state:RContextState (new RContextState)

  def contextFlags:[string:boolean]
  def compilerFlags:[string:boolean]
  def compilerSettings:[string:string]

  def defined_types:[string:RValueType]

  def captured_vars:[string:RVariable]
  def defined_vars:[string:RVariable]

  def outerBlock:writerCtx
  def activeNode:RNode
  def variables:[string:RVariable]
  def errors:[RErrorType]

  def operators:[string:ROpNode]

  ; registered plugins
  ; interfaces
  ; classes
  ; definedEnums
  ; already_imported
  ; active operators
  ; root counters etc.

}

operator type:writerCtx all {
  fn findParent ( cb:(_:boolean (ctx:writerCtx))) {
    let cont = (cb(self))
    if cont {
      if(!null? ctx.outerBlock) {
        ctx.outerBlock.findParent( (unwrap ctx.outerBlock) )
      }
    }
  }
}

