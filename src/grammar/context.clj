
class grammarCtx@(immutable) {

  def rules:[string:RNodeIterator]
  def tokens:[string:RNode]

  def grammar:RNodeIterator
  def codevec:RNodeIterator  
  def result:RNode

}