
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

# Next steps could be

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
    let params ([] (r.param 'x' 'int' ) (r.param 'x' 'int' ) )
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