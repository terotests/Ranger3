
# Ranger 3 Project status and notes

This is a free-form memo of the Ranger3 Project and it's status and developments.

# What is now done?

- test case setup for AST functionality
- basic context type defs
- most primitive AST types, like block, operator, define var
- variable reference counting
- proof of concept of block based variable definitions
- scalar types
- example of Class and Enum definitions
- basic AST nodes to define operators
- simple test of walking operator AST and create output pseudocode
- function AST creation
- CodeWriter is approximately OK
- String tokenizer can now create basic AST structure
- Trivial classifier example is now done

# Next steps could be

- Iterators: creating slices

- Think how node classifier should really work

Create a expression matcher for expressions like `(r.expr ([] (r.op '+') (r.vref 'x') (r.vref 'y') ) )` or `x + y` where the matcher code will evaluating the operatorss


## Grammar definition language

Draft of grammar language is

```
Literal = int | string | boolean | double
VREF = vref 

GroupedExpression = P 20 expression (childcount 1)

Expression = Literal | VREF | GroupedExpression | NewOperator | 
 GetOperator | CallOperand | SumOperator | MulOperator

CallArguments = expression stream (separator ',') {
  Expression -> arg
}
NewArguments = expression stream (separator ',') {
  Expression -> arg
}

NewOperatorWithArgs = P 19 'new' vref -> classname NewArguments -> args
GetOperator = P 19 Expression -> left '.' VREF -> right
CallOperand = P 19 Expression -> left CallArguments -> right
MulOperator = P 14 Expression -> left '*' Expression -> right
MinusOperator = P 13 Expression  -> left '-' Expression -> right
SumOperator = P 13 Expression -> left '+' Expression -> right
```

For example definition
```
NewOperatorWithArgs = P 19 'new' vref -> classname NewArguments -> args
```
means that `NewOperatorWithArgs` has Precedence 19 (what about Associativity?) and begins
with "new" which is followed by a token which is stored as "classname" and then follows 
`NewArguments` which is defined as 

```
NewArguments = expression stream (separator ',') {
  Expression -> arg
}
```

Where "expression" means a ( ... ) group, which has children (stream) which can be separated by ","
end each child will be `Expression`, which is defined as 

```
Expression = Literal | VREF | GroupedExpression | NewOperator | 
 GetOperator | CallOperand | SumOperator | MulOperator
```

Which means that `Expression` can be one of `Literal`, `VREF` etc. 


## How to collect expressions with Operator Precedence

Example 1
```javascript
  new Vector().x * new Vector().x + new Vector().y
```
Example 2
```javascript
  new Vector().x * new Vector().x + 5 != new Vector().y && foo
```

Precedence Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Perhaps should be added that pure keywords, literals and numbers have high P.

- new operator `new` == 19
- member access `.` == 19
- plus `*` == 14
- plus `+` == 13

We define there is some CONTEXT_P which defines current max P value. CONTEXT_P = infinite.

1. new ... Vector () maches `new` which is smaller than CONTEXT_P
2. after new we find member access operator
3. Both have P == 19 thus we start with `new` first, CONTEXT_P = 19
4. Result of new is now added as the first element `(new <expression>)`
5. Then the next operator is member and operator after that is `*`
6. member has P == 19 and * has 14, so we go with `get operator` first
7. we have now `('.' (new <expression>) x )` which is ready to be applied to `*`
8. then we find that * is followed by `new` which has higher P
9. ... so ('.' (new <expression>) x )  is good but right side of `*` is not ready
10. We enter now this function having CONTEXT_P = 14
11. We collect `new Vector()` and `new Vector().x` with higher P to right side
12. Finally there comes `+` with P == 13. We stop collectin right side and have (* left right) ready
13. We Enter `+` with it's left side ready, however the right side has higher OP `new` and `.`
14. The `+` must go first into `new Vector().y` until P becomes back to 13 or lower
15. In Example 2 `!=` the `+` operand ends to number 5, then we continue with `!=` having its left set and CONTEXT_P = 10


## Text to AST generator

Modify the existing text to AST generator to generate simplified token stream for type definitions and to test the matching of some types to the type AST.

  Exmple of the current AST: `param:(fn:int (x:int y:int))`
  Possible new AST (TypeScript): `param: (x:int, y:int) => int`

Or Scala style? `(Int, Int) => String`
Kotlin `(T, T) -> Boolean` or `(x: T, y: T) -> Int`

Ideas:
https://github.com/lampepfl/dotty
https://github.com/lampepfl/dotty/issues


## Op eval process

A draft of the existing op eval process

1. Walk Through the expression arguments, create a new Context if required
2. Evaluate arguments if required, in the context for expression
3. Expand arguments, if so defined
4. Check possible flags from the operator, like noeval, namespaces, keyword, block, mutates, move, loop, async
5. Test if the arguments of the operator can be matched in type system (generate types if required)
6. If Arguments are to be evaluated multiple times, create registers for temp results `register_expressions`
7. If operator is `async` mark the current function as `async`
8. If operator `throws_exception` mark current function as `throws`
9. If operator has block nodes, walk them too
10. IF operator is defined as function operator, create static method and class for the OP.
11. IF operator is a static method call, transform the node as static method call to that OP. (always?)
12. If operator is a compiler plugin call, generate plugin call
13. If operator is a Macro `is_macro` == `true`, build the macro and Walk it.
14. If operator has a reference copy `moves`, move the reference to maintain weak/strong associations
15. If operator is returning a value and value is of Lambda type, check that the return signature is valid
16. If operator is returning a value, check that return value type matches the current fn return value
17. If operator mutates arguments, increase the `set_cnt` of the references
18. If op was solved, set the value type of the operator
19. IF there were unsolved errors, add them to context

## More issues

- create a JavaScript code generator which can output simple arrow function `const add = (x,y) => x + y`
- try normalizing the types using perhaps only string index to Type Class
- make simple operator matching algorithm
- think about relationships between classes, Union `Number = int | double`, inheritance, traits
- type conversion => when it can be done, if param is Union and matching class given, for example
- data structures which allow type groups
- arbitary type groups, "Type Classes" - anything that can implement these ops or funcs

## Creating a simple function AST using ops

```
    let body (r.block ([] 
              (r.expr ([] (r.op 'return' ) (r.expr ([] (r.op '+') (r.vref 'x') (r.vref 'y') ) ) ) )
          ))
    let params ([] (r.param 'x' 'int' ) (r.param 'y' 'int' ) )
    let fnNode (r.fn 'add' 'int' params body )
```

## Context basics

`Context` can be defined like
```
let ctx (new writerCtx)
```

### Define types in Context

```
    let intType (new RType_Scalar)
    intType.bits = 64
    ctx.defined_types = (set ctx.defined_types 'int' intType)
```

### Define enums in Context
```
    let en (new RType_Enum)
    en.name = "RValueEnum"
    en.keys = (push en.keys 'Int')
    en.keys = (push en.keys 'String')
    en.keys = (push en.keys 'Boolean')
    en.keys = (push en.keys 'Double')
    ctx.defined_types = (set ctx.defined_types 'RValueEnum' en)
```

### Simple Class Definition for Context
A class like `myClass { x:int } `

```
    let someClass (new RType_Class)
    someClass.name = "MyClass"

    let xVal (new RType_Variable)
    xVal.name = 'x'
    xVal.value_type = (unwrap (get ctx.defined_types 'int'))
    someClass.variables = (set someClass.variables 'x' xVal)

    ctx.defined_types = (set ctx.defined_types 'MyClass' someClass)

```
Questions:
- should the type definition in instances be always just string or types TClass reference?


### Thinking: how the language grammar could be defined ? 

Classes and Functions should allow multiple attributes
```
ClassDef = class (vref -> className) [[extends (vref ->extends)]]  [immutable serialize] {

}
```

```
ObjectExpressionAsArg = ('{' (stream separated by ',' {
  (vref -> name) ':' ( typedef -> value_typedef )
  (vref -> name) ':' ( typedef -> value_typedef ) '=' (TokenExpression -> default_value)
}) '}')
```

```
FunctionArgs = (stream separated by ',' {
  (vref -> name) ':' ( typedef -> value_typedef )
  (vref -> name) ':' ( typedef -> value_typedef ) '=' (TokenExpression -> default_value)
  ObjectExpressionAsArg
})
```

```
FunctionDef = [async] function (vref -> name) FunctionArgs ( ':' typedef ) {
}
```

```
ArrowLambdaDef = [async] FunctionArgs ( ':' typedef ) '=>' {
}
```