
class grammarCtx@(immutable) {

  def rules:[string:RNode]
  def tokens:[string:RNode]

  ; keywords which can not be VREF values
  def keywords:[string:boolean]

  def grammar:RNodeIterator
  def codevec:RNodeIterator  
  def result:RNode

}