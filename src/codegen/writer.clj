
; could the codeslice consist of string entries ? 
class CodeSlice@(immutable) {
    def tokens:[string]
}

union WriterCmd (CodeSlice WriterCmdIndent WriterCmdUnIndent WriterCmdNewLine WriterTag CodeOutput)

class WriterCmdIndent@(immutable) {

}
class WriterCmdUnIndent@(immutable) {
  
}
class WriterCmdNewLine@(immutable) {
  
}
class WriterTag@(immutable) {
  def name ""
}


class CodeOutput@(immutable) {
  def tags:[string:CodeOutput]
  def slices:[WriterCmd]
}