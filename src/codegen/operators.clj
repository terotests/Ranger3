
defn wr (slice str) (slice.tokens = (push slice.tokens str))  


operator type:void all {

  fn fork:CodeOutput (out:CodeOutput) {
    let newOut = (new CodeOutput)
    newOut.settings = out.settings
    return newOut    
  }

  fn write:CodeOutput (out:CodeOutput str:string) {
    let newOut = out
    let slice = (new CodeSlice)
    wr slice str
    newOut.slices = (push newOut.slices slice)
    return newOut    
  }
  fn nl:CodeOutput (out:CodeOutput) {
    let newOut = out
    newOut.slices = (push newOut.slices (new WriterCmdNewLine))
    return newOut
  }  
  fn indent:CodeOutput (out:CodeOutput) {
    let newOut = out
    newOut.slices = (push newOut.slices (new WriterCmdIndent))
    return newOut
  }  
  fn unindent:CodeOutput (out:CodeOutput) {
    let newOut = out
    newOut.slices = (push newOut.slices (new WriterCmdUnIndent))
    return newOut
  }  
  fn getTabStr:string ( out:CodeOutput indentLevel:int) {
    if( indentLevel == 0) {
      return ''
    }
    let cnt = indentLevel
    let res = ''
    while( cnt > 0 ) {
      res = res + out.settings.indentStr
      cnt = cnt - 1
    }
    return res
  }
  fn getString:string (out:CodeOutput) {
    return (getString out 0 '')
  }
  fn getString:string (out:CodeOutput indentLevel:int currentLine:string) {
    let res = ""
    let curr_line = currentLine
    let indent = indentLevel
    forEach out.slices {
      case item s:CodeOutput {
        let the_string = (getString s indent curr_line)     
        def lines = (strsplit the_string '\n')
        forEach lines {
          if (index == 0) {
            if ( (length curr_line) == 0 ) {
              curr_line = curr_line + (getTabStr out indent)
              res = res + (getTabStr out indent)
            }
            curr_line = curr_line + item
            res = res + item
          } {
            res = res + out.settings.newlineStr
            res = res + (getTabStr out indent) + item
            curr_line = (getTabStr out indent) + item
          }
        }
      }
      case item s:CodeSlice {
        def the_string = (join (map s.tokens {
          let str = item
          return str
        } _:[string]) '')    
        def lines = (strsplit the_string '\n')
        forEach lines {
          if (index == 0) {
            if ( (length curr_line) == 0 ) {
              curr_line = curr_line + (getTabStr out indent)
              res = res + (getTabStr out indent)
            }
            curr_line = curr_line + item
            res = res + item
          } {
            res = res + out.settings.newlineStr
            res = res + (getTabStr out indent) + item
            curr_line = (getTabStr out indent) + item
          }
        }
        ; should then add indents 
        ; res = res + the_string
      }
      case item s:WriterTag {
        let tag (get out.tags s.name)
        if(!null? tag) {
          let codeOutTag = (unwrap tag)
          let the_string = (getString codeOutTag indent curr_line)     
          def lines = (strsplit the_string '\n')
          forEach lines {
            if (index == 0) {
              if ( (length curr_line) == 0 ) {
                curr_line = curr_line + (getTabStr out indent)
                res = res + (getTabStr out indent)
              }
              curr_line = curr_line + item
              res = res + item
            } {
              res = res + out.settings.newlineStr
              res = res + (getTabStr out indent) + item
              curr_line = (getTabStr out indent) + item
            }
          }
        }
      }
      case item s:WriterCmdIndent {
        indent = indent + 1
      }
      case item s:WriterCmdUnIndent {
        indent = indent - 1
      }
      case item s:WriterCmdNewLine {
        res = res + out.settings.newlineStr
        curr_line = ''
      }
    }
    return res
  }
}