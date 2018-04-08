
class grammarCtx@(immutable) {

  def rules:[string:RNodeIterator]
  def tokens:[string:RNode]

  ; keywords which can not be VREF values
  def keywords:[string:boolean]

  def grammar:RNodeIterator
  def codevec:RNodeIterator  
  def result:RNode

}