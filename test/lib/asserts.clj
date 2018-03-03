
; assert operators for node.js

systemclass AssertionError {
  es6 AssertionError
}

operator type:void es6 {
  fn message:string (err:AssertionError) ( (e 1) `.message` )
  fn assert:void ( expr:boolean msg:string) ('require("assert")('(e 1)', '(e 2)')')
  fn test_block ( b:block cb:( _:void (err:AssertionError)) ) (
    'const AssertionError = require("assert").AssertionError;' nl
    `try {` nl I 
     (block 1)
     i nl `} catch(_err) {` nl I 
      `if (_err instanceof AssertionError) (` (e 2) `)(_err);` nl
      i 
    `}` nl 
  )
}

class TestContext {
  def messages:[string]
  def errors:[string]
  fn msg(str:string) {
    push messages str
  }
  fn assert( value:boolean msg:string ) {
    test_block {
      assert value msg
    } {
      push errors (message err)
    }        
  }
}