
Import "../src/operators/nodes.clj"
Import "../src/operators/operators.clj"

Import "../src/ast/nodes.clj"
Import "../src/ast/operators.clj"
Import "../src/context/context.clj"

Import "../src/codegen/operators.clj"
Import "../src/codegen/writer.clj"

Import "lib/asserts.clj"
Import "modules/ast.clj"

class testrunner {
  static fn main() {
    try {
      let ctx = (new TestContext)
      
      let test = (new BasicAST)
      test.blockCtxTest(ctx)
      test.createBlock(ctx)
      test.testCodeWriter(ctx)

      forEach ctx.messages {
        print '  * ' + item
      }

      if(has ctx.errors) {
        forEach ctx.errors {
          print "ERROR: " + item
        }
      } { 
        print "  --------------------------------"
        print "  | ALL tests run succesfully!!! |"
        print "  --------------------------------"
      }

    } {
      print "Running tests failed"
    }
  }
}