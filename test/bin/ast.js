class RType_Scalar  {
  constructor() {
    this.name = "";
    this.bits = 64;
  }
  __CopySelf () {
    const res = new RType_Scalar();
    res.name = this.name;
    res.bits = this.bits;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_bits (new_value_of_bits) {
    const res = this.__CopySelf();
    res.bits = new_value_of_bits;
    return res;
  };
}
class RType_Literal  {
  constructor() {
    this.value_type = 0;
    this.int_value = 0;
    this.double_value = 0.0;
    this.string_value = "";
    this.boolean_value = false;
  }
  __CopySelf () {
    const res = new RType_Literal();
    res.value_type = this.value_type;
    res.int_value = this.int_value;
    res.double_value = this.double_value;
    res.string_value = this.string_value;
    res.boolean_value = this.boolean_value;
    return res;
  };
  set_value_type (new_value_of_value_type) {
    const res = this.__CopySelf();
    res.value_type = new_value_of_value_type;
    return res;
  };
  set_int_value (new_value_of_int_value) {
    const res = this.__CopySelf();
    res.int_value = new_value_of_int_value;
    return res;
  };
  set_double_value (new_value_of_double_value) {
    const res = this.__CopySelf();
    res.double_value = new_value_of_double_value;
    return res;
  };
  set_string_value (new_value_of_string_value) {
    const res = this.__CopySelf();
    res.string_value = new_value_of_string_value;
    return res;
  };
  set_boolean_value (new_value_of_boolean_value) {
    const res = this.__CopySelf();
    res.boolean_value = new_value_of_boolean_value;
    return res;
  };
}
class RType_FunctionParam  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new RType_FunctionParam();
    res.name = this.name;
    res.value_type = this.value_type;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_value_type (new_value_of_value_type) {
    const res = this.__CopySelf();
    res.value_type = new_value_of_value_type;
    return res;
  };
}
class RType_Function  {
  constructor() {
    this.name = "";
    this.params = new Vector_RType_FunctionParam();
  }
  __CopySelf () {
    const res = new RType_Function();
    res.name = this.name;
    res.return_value = this.return_value;
    res.params = this.params;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_return_value (new_value_of_return_value) {
    const res = this.__CopySelf();
    res.return_value = new_value_of_return_value;
    return res;
  };
  set_params (new_value_of_params) {
    const res = this.__CopySelf();
    res.params = new_value_of_params;
    return res;
  };
}
class RType_Variable  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new RType_Variable();
    res.name = this.name;
    res.value_type = this.value_type;
    res.defult_value = this.defult_value;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_value_type (new_value_of_value_type) {
    const res = this.__CopySelf();
    res.value_type = new_value_of_value_type;
    return res;
  };
  set_defult_value (new_value_of_defult_value) {
    const res = this.__CopySelf();
    res.defult_value = new_value_of_defult_value;
    return res;
  };
}
class RType_Class  {
  constructor() {
    this.name = "";
    this.extendsClasses = new Vector_RType_Class();
    this.variables = new Map_string_RType_Variable();
    this.methods = new Map_string_RType_Function();
  }
  __CopySelf () {
    const res = new RType_Class();
    res.name = this.name;
    res.extendsClasses = this.extendsClasses;
    res.variables = this.variables;
    res.methods = this.methods;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_extendsClasses (new_value_of_extendsClasses) {
    const res = this.__CopySelf();
    res.extendsClasses = new_value_of_extendsClasses;
    return res;
  };
  set_variables (new_value_of_variables) {
    const res = this.__CopySelf();
    res.variables = new_value_of_variables;
    return res;
  };
  set_methods (new_value_of_methods) {
    const res = this.__CopySelf();
    res.methods = new_value_of_methods;
    return res;
  };
}
class RType_GenericTrait  {
  constructor() {
    this.name = "";
    this.freeVariables = new Vector_string();
    this.methods = new Map_string_RType_Function();
  }
  __CopySelf () {
    const res = new RType_GenericTrait();
    res.name = this.name;
    res.freeVariables = this.freeVariables;
    res.methods = this.methods;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_freeVariables (new_value_of_freeVariables) {
    const res = this.__CopySelf();
    res.freeVariables = new_value_of_freeVariables;
    return res;
  };
  set_methods (new_value_of_methods) {
    const res = this.__CopySelf();
    res.methods = new_value_of_methods;
    return res;
  };
}
class RType_Enum  {
  constructor() {
    this.name = "";
    this.keys = new Vector_string();
  }
  __CopySelf () {
    const res = new RType_Enum();
    res.name = this.name;
    res.keys = this.keys;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_keys (new_value_of_keys) {
    const res = this.__CopySelf();
    res.keys = new_value_of_keys;
    return res;
  };
}
class RError  {
  constructor() {
    this.text = "";
  }
  __CopySelf () {
    const res = new RError();
    res.ctx = this.ctx;
    res.node = this.node;
    res.text = this.text;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_node (new_value_of_node) {
    const res = this.__CopySelf();
    res.node = new_value_of_node;
    return res;
  };
  set_text (new_value_of_text) {
    const res = this.__CopySelf();
    res.text = new_value_of_text;
    return res;
  };
}
class RParsedNode  {
  constructor() {
    this.value = "hello there";
  }
  __CopySelf () {
    const res = new RParsedNode();
    res.ctx = this.ctx;
    res.value = this.value;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
}
class RTextNode  {
  constructor() {
    this.text = "someTextValueHere";
  }
  __CopySelf () {
    const res = new RTextNode();
    res.ctx = this.ctx;
    res.text = this.text;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_text (new_value_of_text) {
    const res = this.__CopySelf();
    res.text = new_value_of_text;
    return res;
  };
}
class RDefVariable  {
  constructor() {
    this.name = "xxx";
    this.typename = "int";
  }
  __CopySelf () {
    const res = new RDefVariable();
    res.ctx = this.ctx;
    res.name = this.name;
    res.typename = this.typename;
    res.value = this.value;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_typename (new_value_of_typename) {
    const res = this.__CopySelf();
    res.typename = new_value_of_typename;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
}
class RIncExpression  {
  constructor() {
    this.name = "xxx";
  }
  __CopySelf () {
    const res = new RIncExpression();
    res.ctx = this.ctx;
    res.name = this.name;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
}
class RObjectInstance  {
  constructor() {
  }
  __CopySelf () {
    const res = new RObjectInstance();
    res.ctx = this.ctx;
    res.objectType = this.objectType;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_objectType (new_value_of_objectType) {
    const res = this.__CopySelf();
    res.objectType = new_value_of_objectType;
    return res;
  };
}
class RObjectReference  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new RObjectReference();
    res.ctx = this.ctx;
    res.name = this.name;
    res.objInstance = this.objInstance;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_objInstance (new_value_of_objInstance) {
    const res = this.__CopySelf();
    res.objInstance = new_value_of_objInstance;
    return res;
  };
}
class RGetOperator  {
  constructor() {
  }
  __CopySelf () {
    const res = new RGetOperator();
    res.ctx = this.ctx;
    res.left = this.left;
    res.right = this.right;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_left (new_value_of_left) {
    const res = this.__CopySelf();
    res.left = new_value_of_left;
    return res;
  };
  set_right (new_value_of_right) {
    const res = this.__CopySelf();
    res.right = new_value_of_right;
    return res;
  };
}
class RStaticFnCall  {
  constructor() {
  }
  __CopySelf () {
    const res = new RStaticFnCall();
    res.ctx = this.ctx;
    res.calledClass = this.calledClass;
    res.calledMethod = this.calledMethod;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_calledClass (new_value_of_calledClass) {
    const res = this.__CopySelf();
    res.calledClass = new_value_of_calledClass;
    return res;
  };
  set_calledMethod (new_value_of_calledMethod) {
    const res = this.__CopySelf();
    res.calledMethod = new_value_of_calledMethod;
    return res;
  };
}
class RBlockNode  {
  constructor() {
    this.name = "";
    this.children = new Vector_RNode();
  }
  __CopySelf () {
    const res = new RBlockNode();
    res.name = this.name;
    res.startCtx = this.startCtx;
    res.endCtx = this.endCtx;
    res.ctx = this.ctx;
    res.children = this.children;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_startCtx (new_value_of_startCtx) {
    const res = this.__CopySelf();
    res.startCtx = new_value_of_startCtx;
    return res;
  };
  set_endCtx (new_value_of_endCtx) {
    const res = this.__CopySelf();
    res.endCtx = new_value_of_endCtx;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_children (new_value_of_children) {
    const res = this.__CopySelf();
    res.children = new_value_of_children;
    return res;
  };
}
class RExpression  {
  constructor() {
    this.children = new Vector_RNode();
  }
  __CopySelf () {
    const res = new RExpression();
    res.startCtx = this.startCtx;
    res.endCtx = this.endCtx;
    res.ctx = this.ctx;
    res.children = this.children;
    return res;
  };
  set_startCtx (new_value_of_startCtx) {
    const res = this.__CopySelf();
    res.startCtx = new_value_of_startCtx;
    return res;
  };
  set_endCtx (new_value_of_endCtx) {
    const res = this.__CopySelf();
    res.endCtx = new_value_of_endCtx;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_children (new_value_of_children) {
    const res = this.__CopySelf();
    res.children = new_value_of_children;
    return res;
  };
}
class RIntValue  {
  constructor() {
  }
  __CopySelf () {
    const res = new RIntValue();
    return res;
  };
}
class RVariable  {
  constructor() {
    this.name = "simple variable test";
    this.typename = "";
    this.read_cnt = 0;
    this.write_cnt = 0;
  }
  __CopySelf () {
    const res = new RVariable();
    res.name = this.name;
    res.typename = this.typename;
    res.value = this.value;
    res.read_cnt = this.read_cnt;
    res.write_cnt = this.write_cnt;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_typename (new_value_of_typename) {
    const res = this.__CopySelf();
    res.typename = new_value_of_typename;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
  set_read_cnt (new_value_of_read_cnt) {
    const res = this.__CopySelf();
    res.read_cnt = new_value_of_read_cnt;
    return res;
  };
  set_write_cnt (new_value_of_write_cnt) {
    const res = this.__CopySelf();
    res.write_cnt = new_value_of_write_cnt;
    return res;
  };
}
class RContextEnv  {
  constructor() {
    this.langFilePath = "";
    this.libraryPaths = new Vector_string();
    this.outputPath = "";
  }
  __CopySelf () {
    const res = new RContextEnv();
    res.langFilePath = this.langFilePath;
    res.libraryPaths = this.libraryPaths;
    res.outputPath = this.outputPath;
    return res;
  };
  set_langFilePath (new_value_of_langFilePath) {
    const res = this.__CopySelf();
    res.langFilePath = new_value_of_langFilePath;
    return res;
  };
  set_libraryPaths (new_value_of_libraryPaths) {
    const res = this.__CopySelf();
    res.libraryPaths = new_value_of_libraryPaths;
    return res;
  };
  set_outputPath (new_value_of_outputPath) {
    const res = this.__CopySelf();
    res.outputPath = new_value_of_outputPath;
    return res;
  };
}
class RContextState  {
  constructor() {
    this.is_function = false;
    this.is_lambda = false;
    this.is_catch_block = false;
    this.is_try_block = false;
    this.in_expression = false;
    this.in_method = false;
    this.in_static_method = false;
    this.in_class = false;
    this.activeClass = "";
  }
  __CopySelf () {
    const res = new RContextState();
    res.is_function = this.is_function;
    res.is_lambda = this.is_lambda;
    res.is_catch_block = this.is_catch_block;
    res.is_try_block = this.is_try_block;
    res.in_expression = this.in_expression;
    res.in_method = this.in_method;
    res.in_static_method = this.in_static_method;
    res.in_class = this.in_class;
    res.activeClass = this.activeClass;
    return res;
  };
  set_is_function (new_value_of_is_function) {
    const res = this.__CopySelf();
    res.is_function = new_value_of_is_function;
    return res;
  };
  set_is_lambda (new_value_of_is_lambda) {
    const res = this.__CopySelf();
    res.is_lambda = new_value_of_is_lambda;
    return res;
  };
  set_is_catch_block (new_value_of_is_catch_block) {
    const res = this.__CopySelf();
    res.is_catch_block = new_value_of_is_catch_block;
    return res;
  };
  set_is_try_block (new_value_of_is_try_block) {
    const res = this.__CopySelf();
    res.is_try_block = new_value_of_is_try_block;
    return res;
  };
  set_in_expression (new_value_of_in_expression) {
    const res = this.__CopySelf();
    res.in_expression = new_value_of_in_expression;
    return res;
  };
  set_in_method (new_value_of_in_method) {
    const res = this.__CopySelf();
    res.in_method = new_value_of_in_method;
    return res;
  };
  set_in_static_method (new_value_of_in_static_method) {
    const res = this.__CopySelf();
    res.in_static_method = new_value_of_in_static_method;
    return res;
  };
  set_in_class (new_value_of_in_class) {
    const res = this.__CopySelf();
    res.in_class = new_value_of_in_class;
    return res;
  };
  set_activeClass (new_value_of_activeClass) {
    const res = this.__CopySelf();
    res.activeClass = new_value_of_activeClass;
    return res;
  };
}
class writerCtx  {
  constructor() {
    this.state = new RContextState();
    this.contextFlags = new Map_string_boolean();
    this.compilerFlags = new Map_string_boolean();
    this.compilerSettings = new Map_string_string();
    this.defined_types = new Map_string_RValueType();
    this.captured_vars = new Map_string_RVariable();
    this.defined_vars = new Map_string_RVariable();
    this.variables = new Map_string_RVariable();
    this.errors = new Vector_RErrorType();
  }
  __CopySelf () {
    const res = new writerCtx();
    res.state = this.state;
    res.contextFlags = this.contextFlags;
    res.compilerFlags = this.compilerFlags;
    res.compilerSettings = this.compilerSettings;
    res.defined_types = this.defined_types;
    res.captured_vars = this.captured_vars;
    res.defined_vars = this.defined_vars;
    res.outerBlock = this.outerBlock;
    res.activeNode = this.activeNode;
    res.variables = this.variables;
    res.errors = this.errors;
    return res;
  };
  set_state (new_value_of_state) {
    const res = this.__CopySelf();
    res.state = new_value_of_state;
    return res;
  };
  set_contextFlags (new_value_of_contextFlags) {
    const res = this.__CopySelf();
    res.contextFlags = new_value_of_contextFlags;
    return res;
  };
  set_compilerFlags (new_value_of_compilerFlags) {
    const res = this.__CopySelf();
    res.compilerFlags = new_value_of_compilerFlags;
    return res;
  };
  set_compilerSettings (new_value_of_compilerSettings) {
    const res = this.__CopySelf();
    res.compilerSettings = new_value_of_compilerSettings;
    return res;
  };
  set_defined_types (new_value_of_defined_types) {
    const res = this.__CopySelf();
    res.defined_types = new_value_of_defined_types;
    return res;
  };
  set_captured_vars (new_value_of_captured_vars) {
    const res = this.__CopySelf();
    res.captured_vars = new_value_of_captured_vars;
    return res;
  };
  set_defined_vars (new_value_of_defined_vars) {
    const res = this.__CopySelf();
    res.defined_vars = new_value_of_defined_vars;
    return res;
  };
  set_outerBlock (new_value_of_outerBlock) {
    const res = this.__CopySelf();
    res.outerBlock = new_value_of_outerBlock;
    return res;
  };
  set_activeNode (new_value_of_activeNode) {
    const res = this.__CopySelf();
    res.activeNode = new_value_of_activeNode;
    return res;
  };
  set_variables (new_value_of_variables) {
    const res = this.__CopySelf();
    res.variables = new_value_of_variables;
    return res;
  };
  set_errors (new_value_of_errors) {
    const res = this.__CopySelf();
    res.errors = new_value_of_errors;
    return res;
  };
}
class TestContext  {
  constructor() {
    this.messages = [];
    this.errors = [];
  }
  msg (str) {
    this.messages.push(str);
  };
  assert (value, msg) {
    const AssertionError = require("assert").AssertionError;
    try {
      require("assert")(value, msg);
    } catch(_err) {
      if (_err instanceof AssertionError) (((err) => { 
        this.errors.push(err.message);
      }))(_err);
    }
  };
}
class BasicAST  {
  constructor() {
  }
  walkNode (ctx) {
    let subCtx = ctx;
    if( ctx.activeNode instanceof RBlockNode ) /* union case */ {
      var b = ctx.activeNode;
      let new_children = [];
      let res = new RBlockNode();
      res = (res).set_name(b.name);
      const emptyCtx = new writerCtx();
      subCtx = (subCtx).set_outerBlock(ctx);
      subCtx = (subCtx).set_defined_vars(emptyCtx.defined_vars);
      res = (res).set_startCtx(subCtx);
      operatorsOfVector.forEach_2(b.children, ((item) => { 
        subCtx = (subCtx).set_activeNode(item);
        subCtx = this.walkNode(subCtx);
        if ( (typeof(subCtx.activeNode) !== "undefined" && subCtx.activeNode != null )  ) {
          new_children.push(subCtx.activeNode);
        }
      }));
      operatorsOf_4.forEach_5(new_children, ((item, index) => { 
        res = (res).set_children(operatorsOfVector.push_6(res.children, item));
      }));
      res = (res).set_endCtx(subCtx);
      subCtx = (subCtx).set_activeNode((res));
      subCtx = (subCtx).set_captured_vars(ctx.captured_vars);
      subCtx = (subCtx).set_defined_vars(ctx.defined_vars);
      return subCtx;
    };
    if( ctx.activeNode instanceof RParsedNode ) /* union case */ {
      var b_1 = ctx.activeNode;
      let newCtx = ctx;
      let txtNode = new RTextNode();
      txtNode = (txtNode).set_text(b_1.value);
      newCtx = (newCtx).set_activeNode((txtNode));
      return newCtx;
    };
    if( ctx.activeNode instanceof RExpression ) /* union case */ {
      var b_2 = ctx.activeNode;
      return ctx;
    };
    if( ctx.activeNode instanceof RIncExpression ) /* union case */ {
      var b_3 = ctx.activeNode;
      let newCtx_1 = ctx;
      let myVar = operatorsOfMap_7.get_8(newCtx_1.variables, b_3.name);
      if ( (typeof(myVar) !== "undefined" && myVar != null )  ) {
        const defined_here = operatorsOf_7.get_8(newCtx_1.defined_vars, b_3.name);
        if ( (typeof(defined_here) !== "undefined" && defined_here != null )  ) {
        }
        if ( ((typeof(ctx.outerBlock) !== "undefined" && ctx.outerBlock != null ) ) && (typeof(defined_here) === "undefined") ) {
          const outerVar = operatorsOf_7.get_8(ctx.outerBlock.variables, b_3.name);
          if ( (typeof(outerVar) !== "undefined" && outerVar != null )  ) {
            newCtx_1 = (newCtx_1).set_captured_vars(operatorsOf_7.set_9(newCtx_1.captured_vars, b_3.name, (myVar)));
          }
        }
        const value = myVar.value;
        if( value instanceof RType_Literal ) /* union case */ {
          var x = value;
          x = (x).set_int_value((x.int_value + 1));
        };
        myVar = (myVar).set_read_cnt((myVar.read_cnt + 1));
        myVar = (myVar).set_write_cnt((myVar.write_cnt + 1));
        newCtx_1 = (newCtx_1).set_variables(operatorsOf_7.set_9(newCtx_1.variables, b_3.name, (myVar)));
      } else {
        let err = new RError();
        err = (err).set_text(("Undefined variable " + b_3.name));
        newCtx_1 = (newCtx_1).set_errors(operatorsOfVector.push_10(newCtx_1.errors, (err)));
      }
      return newCtx_1;
    };
    if( ctx.activeNode instanceof RDefVariable ) /* union case */ {
      var b_4 = ctx.activeNode;
      let newCtx_2 = ctx;
      const vDef = new RDefVariable();
      newCtx_2 = (newCtx_2).set_activeNode((vDef));
      let v = new RVariable();
      v = (v).set_name(b_4.name);
      v = (v).set_typename(b_4.typename);
      v = (v).set_value(b_4.value);
      newCtx_2 = (newCtx_2).set_variables(operatorsOf_7.set_9(newCtx_2.variables, b_4.name, v));
      newCtx_2 = (newCtx_2).set_defined_vars(operatorsOf_7.set_9(newCtx_2.defined_vars, b_4.name, v));
      return newCtx_2;
    };
    return ctx;
  };
  blockCtxTest (testCtx) {
    testCtx.msg("Running the Basic Block Context testcase");
    let ctx = new writerCtx();
    let block = new RBlockNode();
    let block2 = new RBlockNode();
    let block3 = new RBlockNode();
    block = (block).set_name("block1");
    block2 = (block2).set_name("block2");
    block3 = (block3).set_name("block3");
    let genTrait1 = new RType_GenericTrait();
    genTrait1 = (genTrait1).set_name("Vector<T>");
    ctx = (ctx).set_defined_types(operatorsOf_7.set_11(ctx.defined_types, "Vector<T>", (genTrait1)));
    let intType = new RType_Scalar();
    intType = (intType).set_bits(64);
    ctx = (ctx).set_defined_types(operatorsOf_7.set_11(ctx.defined_types, "int", (intType)));
    let en = new RType_Enum();
    en = (en).set_name("RValueEnum");
    en = (en).set_keys(operatorsOfVector.push_12(en.keys, "Int"));
    en = (en).set_keys(operatorsOfVector.push_12(en.keys, "String"));
    en = (en).set_keys(operatorsOfVector.push_12(en.keys, "Boolean"));
    en = (en).set_keys(operatorsOfVector.push_12(en.keys, "Double"));
    ctx = (ctx).set_defined_types(operatorsOf_7.set_11(ctx.defined_types, "RValueEnum", (en)));
    let someClass = new RType_Class();
    someClass = (someClass).set_name("MyClass");
    let xVal = new RType_Variable();
    xVal = (xVal).set_name("x");
    xVal = (xVal).set_value_type((operatorsOf_7.get_13(ctx.defined_types, "int")));
    someClass = (someClass).set_variables(operatorsOf_7.set_14(someClass.variables, "x", xVal));
    ctx = (ctx).set_defined_types(operatorsOf_7.set_11(ctx.defined_types, "MyClass", (someClass)));
    let objInstance = new RObjectInstance();
    objInstance = (objInstance).set_objectType((operatorsOf_7.get_13(ctx.defined_types, "MyClass")));
    let objRef = new RObjectReference();
    objRef = (objRef).set_objInstance(objInstance);
    let vd = new RDefVariable();
    vd = (vd).set_name("obj");
    vd = (vd).set_typename("");
    vd = (vd).set_value((objRef));
    block = (block).set_children(operatorsOfVector.push_6(block.children, (vd)));
    ctx = (ctx).set_state((ctx.state).set_is_function(true));
    let vd_2 = new RDefVariable();
    vd_2 = (vd_2).set_name("innerHTML");
    vd_2 = (vd_2).set_typename("string");
    vd_2 = (vd_2).set_value((operatorsOfstring_15.literal_16("<div/>")));
    block = (block).set_children(operatorsOfVector.push_6(block.children, (vd_2)));
    let nn = new RParsedNode();
    nn = (nn).set_value("The Node 1");
    block = (block).set_children(operatorsOfVector.push_6(block.children, (nn)));
    let nn_2 = new RParsedNode();
    nn_2 = (nn_2).set_value("The Node 2");
    block = (block).set_children(operatorsOfVector.push_6(block.children, (nn_2)));
    let nn_3 = new RParsedNode();
    nn_3 = (nn_3).set_value("The Node 3");
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (nn_3)));
    let vd_3 = new RDefVariable();
    vd_3 = (vd_3).set_name("FXZ");
    vd_3 = (vd_3).set_typename("string");
    vd_3 = (vd_3).set_value((operatorsOf_15.literal_16("FOOBARDOM")));
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (vd_3)));
    const expr1 = new RExpression();
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (expr1)));
    let vd_4 = new RDefVariable();
    vd_4 = (vd_4).set_name("X");
    vd_4 = (vd_4).set_value((operatorsOfint_17.literal_18(1234)));
    block = (block).set_children(operatorsOfVector.push_6(block.children, (vd_4)));
    let vd_5 = new RDefVariable();
    vd_5 = (vd_5).set_name("notused");
    vd_5 = (vd_5).set_value((operatorsOf_17.literal_18(55)));
    block3 = (block3).set_children(operatorsOfVector.push_6(block3.children, (vd_5)));
    let incCmd = new RIncExpression();
    incCmd = (incCmd).set_name("X");
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (incCmd)));
    let vd2 = new RDefVariable();
    vd2 = (vd2).set_name("Y");
    vd2 = (vd2).set_value((operatorsOf_17.literal_18(24)));
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (vd2)));
    let incCmd_2 = new RIncExpression();
    incCmd_2 = (incCmd_2).set_name("Y");
    block2 = (block2).set_children(operatorsOfVector.push_6(block2.children, (incCmd_2)));
    let incCmd_3 = new RIncExpression();
    incCmd_3 = (incCmd_3).set_name("ThisVarItIs");
    block3 = (block3).set_children(operatorsOfVector.push_6(block3.children, (incCmd_3)));
    block = (block).set_children(operatorsOfVector.push_6(block.children, (block2)));
    block = (block).set_children(operatorsOfVector.push_6(block.children, (block3)));
    ctx = (ctx).set_activeNode((block));
    ctx = this.walkNode(ctx);
    (testCtx).assert((operatorsOf_7.keys_19(ctx.variables).length) == 6, "ctx should have definex 6 variables");
    operatorsOf_7.forEach_20(ctx.variables, ((item, index) => { 
      if ( index == "X" ) {
        (testCtx).assert(item.write_cnt == 1, "write_cnt count of X should be 1");
        (testCtx).assert(item.read_cnt == 1, "read_cnt count of X should be 1");
      }
      if ( index == "Y" ) {
        (testCtx).assert(item.write_cnt == 1, "write_cnt count of Y should be 1");
        (testCtx).assert(item.read_cnt == 1, "read_cnt count of Y should be 1");
      }
    }));
    let walkFn = ((node) => { 
    });
    walkFn = ((node) => { 
      if( node instanceof RTextNode ) /* union case */ {
        var txt = node;
      };
      if( node instanceof RBlockNode ) /* union case */ {
        var b = node;
        if ( (typeof(b.startCtx.outerBlock) !== "undefined" && b.startCtx.outerBlock != null )  ) {
          const ob = b.startCtx.outerBlock;
          if ( (typeof(ob.outerBlock) !== "undefined" && ob.outerBlock != null )  ) {
          }
        }
        operatorsOf_7.forEach_20(b.startCtx.variables, ((item, index) => { 
          if ( (typeof(item.value) !== "undefined" && item.value != null )  ) {
            const v = item.value;
            if( Number.isInteger ? Number.isInteger(v) : (function(v) { return typeof v === 'number' &&  isFinite(v) && Math.floor(v) === v; })(v) ) /* union case for int */ {
              var x = v;
            };
            if( typeof(v) === 'string' ) /* union case for string */ {
              var x_1 = v;
            };
          }
        }));
        operatorsOf_7.forEach_20(b.endCtx.variables, ((item, index) => { 
          if ( (typeof(item.value) !== "undefined" && item.value != null )  ) {
            const v_1 = item.value;
            if( v_1 instanceof RType_Literal ) /* union case */ {
              var x_2 = v_1;
            };
          }
        }));
        operatorsOfVector.forEach_2(b.children, ((item) => { 
          if( item instanceof RDefVariable ) /* union case */ {
            var d = item;
          };
          if( item instanceof RExpression ) /* union case */ {
            var e = item;
          };
          if( item instanceof RTextNode ) /* union case */ {
            var txt_1 = item;
          };
          if( item instanceof RBlockNode ) /* union case */ {
            var n = item;
            walkFn(item);
          };
        }));
      };
    });
    walkFn(ctx.activeNode);
    (testCtx).assert(operatorsOfVector.size_21(ctx.errors) == 1, "Error count should be one");
    operatorsOfVector.forEach_22(ctx.errors, ((item) => { 
      if( item instanceof RError ) /* union case */ {
        var e_1 = item;
      };
    }));
    operatorsOf_4.forEach_25(operatorsOf_7.keys_24(ctx.defined_types), ((item, index) => { 
      const t = operatorsOf_7.get_13(ctx.defined_types, item);
      if( t instanceof RType_Class ) /* union case */ {
        var cl = t;
        operatorsOf_4.forEach_25(operatorsOf_7.keys_26(cl.variables), ((item, index) => { 
        }));
      };
    }));
  };
}
class testrunner  {
  constructor() {
  }
}
class Vector_RType_FunctionParam  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_RType_FunctionParam();
    obj.start = this.start;
    obj.end = this.end;
    obj.parent = this.parent;
    obj.cardinality = this.cardinality;
    obj.elements = this.elements;
    return obj;
  };
  set (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      res.elements = new Array(res.cardinality);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) != idx ) {
          res.elements[i] = e;
        } else {
          res.elements[i] = item;
        }
      };
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    newSlice_1.elements = new Array(newSlice_1.cardinality);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      newSlice_1.elements[i_1] = e_1;
    };
    newSlice_1.elements[idx - newSlice_1.start] = item;
    res_1.parent = newSlice_1;
    return root;
  };
  insert (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      let use_card = this.cardinality;
      if ( (res.elements.length) >= (use_card - 1) ) {
        use_card = (res.elements.length) + 1;
      }
      res.elements = new Array(use_card);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) < idx ) {
          res.elements[i] = e;
        } else {
          if ( idx == (res.start + i) ) {
            res.elements[i] = item;
            res.elements[i + 1] = e;
          } else {
            res.elements[i + 1] = e;
          }
        }
      };
      if ( (idx - this.start) >= (this.elements.length) ) {
        res.elements[idx - this.start] = item;
      }
      res.start = this.start;
      res.end = this.end + 1;
      res.cardinality = use_card;
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    res_1.start = this.start + 1;
    res_1.end = this.end + 1;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      newSlice.start = newSlice.start + 1;
      newSlice.end = newSlice.end + 1;
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    let use_card_1 = newSlice_1.cardinality;
    if ( (p.elements.length) >= (use_card_1 - 1) ) {
      use_card_1 = (p.elements.length) + 1;
    }
    newSlice_1.elements = new Array(use_card_1);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      if ( (newSlice_1.start + i_1) < idx ) {
        newSlice_1.elements[i_1] = e_1;
      } else {
        if ( idx == (newSlice_1.start + i_1) ) {
          newSlice_1.elements[i_1] = item;
          newSlice_1.elements[i_1 + 1] = e_1;
        } else {
          newSlice_1.elements[i_1 + 1] = e_1;
        }
      }
    };
    newSlice_1.end = newSlice_1.end + 1;
    newSlice_1.cardinality = use_card_1;
    if ( (idx - newSlice_1.start) >= p.cardinality ) {
      newSlice_1.end = idx + 1;
    }
    newSlice_1.parent = p.parent;
    res_1.parent = newSlice_1;
    return root;
  };
  get (idx) {
    if ( idx < 0 ) {
      return this.elements[0];
    }
    if ( (idx >= this.start) && (idx < this.end) ) {
      return this.elements[(idx - this.start)];
    }
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      p = p.parent;
    };
    if ( (typeof(p) !== "undefined" && p != null )  ) {
      return p.elements[(idx - p.start)];
    }
    return this.elements[0];
  };
  add (item) {
    if ( (this.end - this.start) >= this.cardinality ) {
      const res = new Vector_RType_FunctionParam();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_RType_FunctionParam();
    res_1.elements = new Array(this.cardinality);
    for ( let i = 0; i < this.elements.length; i++) {
      var e = this.elements[i];
      res_1.elements[i] = e;
    };
    res_1.elements[this.end - this.start] = item;
    res_1.parent = this.parent;
    res_1.start = this.start;
    res_1.end = this.end + 1;
    res_1.cardinality = this.cardinality;
    return res_1;
  };
  count () {
    return this.end;
  };
  _map (cb) {
    let res = new Vector_RType_FunctionParam();
    const cnt = (this).count();
    let i = 0;
    while (i < cnt) {
      const item = (this).get(i);
      const new_value = cb(item);
      res = res.add(new_value);
      i = i + 1;
    };
    return res;
  };
}
class Vector_RType_Class  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_RType_Class();
    obj.start = this.start;
    obj.end = this.end;
    obj.parent = this.parent;
    obj.cardinality = this.cardinality;
    obj.elements = this.elements;
    return obj;
  };
  set (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      res.elements = new Array(res.cardinality);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) != idx ) {
          res.elements[i] = e;
        } else {
          res.elements[i] = item;
        }
      };
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    newSlice_1.elements = new Array(newSlice_1.cardinality);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      newSlice_1.elements[i_1] = e_1;
    };
    newSlice_1.elements[idx - newSlice_1.start] = item;
    res_1.parent = newSlice_1;
    return root;
  };
  insert (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      let use_card = this.cardinality;
      if ( (res.elements.length) >= (use_card - 1) ) {
        use_card = (res.elements.length) + 1;
      }
      res.elements = new Array(use_card);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) < idx ) {
          res.elements[i] = e;
        } else {
          if ( idx == (res.start + i) ) {
            res.elements[i] = item;
            res.elements[i + 1] = e;
          } else {
            res.elements[i + 1] = e;
          }
        }
      };
      if ( (idx - this.start) >= (this.elements.length) ) {
        res.elements[idx - this.start] = item;
      }
      res.start = this.start;
      res.end = this.end + 1;
      res.cardinality = use_card;
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    res_1.start = this.start + 1;
    res_1.end = this.end + 1;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      newSlice.start = newSlice.start + 1;
      newSlice.end = newSlice.end + 1;
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    let use_card_1 = newSlice_1.cardinality;
    if ( (p.elements.length) >= (use_card_1 - 1) ) {
      use_card_1 = (p.elements.length) + 1;
    }
    newSlice_1.elements = new Array(use_card_1);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      if ( (newSlice_1.start + i_1) < idx ) {
        newSlice_1.elements[i_1] = e_1;
      } else {
        if ( idx == (newSlice_1.start + i_1) ) {
          newSlice_1.elements[i_1] = item;
          newSlice_1.elements[i_1 + 1] = e_1;
        } else {
          newSlice_1.elements[i_1 + 1] = e_1;
        }
      }
    };
    newSlice_1.end = newSlice_1.end + 1;
    newSlice_1.cardinality = use_card_1;
    if ( (idx - newSlice_1.start) >= p.cardinality ) {
      newSlice_1.end = idx + 1;
    }
    newSlice_1.parent = p.parent;
    res_1.parent = newSlice_1;
    return root;
  };
  get (idx) {
    if ( idx < 0 ) {
      return this.elements[0];
    }
    if ( (idx >= this.start) && (idx < this.end) ) {
      return this.elements[(idx - this.start)];
    }
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      p = p.parent;
    };
    if ( (typeof(p) !== "undefined" && p != null )  ) {
      return p.elements[(idx - p.start)];
    }
    return this.elements[0];
  };
  add (item) {
    if ( (this.end - this.start) >= this.cardinality ) {
      const res = new Vector_RType_Class();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_RType_Class();
    res_1.elements = new Array(this.cardinality);
    for ( let i = 0; i < this.elements.length; i++) {
      var e = this.elements[i];
      res_1.elements[i] = e;
    };
    res_1.elements[this.end - this.start] = item;
    res_1.parent = this.parent;
    res_1.start = this.start;
    res_1.end = this.end + 1;
    res_1.cardinality = this.cardinality;
    return res_1;
  };
  count () {
    return this.end;
  };
  _map (cb) {
    let res = new Vector_RType_Class();
    const cnt = (this).count();
    let i = 0;
    while (i < cnt) {
      const item = (this).get(i);
      const new_value = cb(item);
      res = res.add(new_value);
      i = i + 1;
    };
    return res;
  };
}
class Map_string_RType_Variable  {
  constructor() {
    this.elements = {};
  }
}
class Map_string_RType_Function  {
  constructor() {
    this.elements = {};     /** note: unused */
  }
}
class Vector_string  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_string();
    obj.start = this.start;
    obj.end = this.end;
    obj.parent = this.parent;
    obj.cardinality = this.cardinality;
    obj.elements = this.elements;
    return obj;
  };
  set (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      res.elements = new Array(res.cardinality);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) != idx ) {
          res.elements[i] = e;
        } else {
          res.elements[i] = item;
        }
      };
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    newSlice_1.elements = new Array(newSlice_1.cardinality);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      newSlice_1.elements[i_1] = e_1;
    };
    newSlice_1.elements[idx - newSlice_1.start] = item;
    res_1.parent = newSlice_1;
    return root;
  };
  insert (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      let use_card = this.cardinality;
      if ( (res.elements.length) >= (use_card - 1) ) {
        use_card = (res.elements.length) + 1;
      }
      res.elements = new Array(use_card);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) < idx ) {
          res.elements[i] = e;
        } else {
          if ( idx == (res.start + i) ) {
            res.elements[i] = item;
            res.elements[i + 1] = e;
          } else {
            res.elements[i + 1] = e;
          }
        }
      };
      if ( (idx - this.start) >= (this.elements.length) ) {
        res.elements[idx - this.start] = item;
      }
      res.start = this.start;
      res.end = this.end + 1;
      res.cardinality = use_card;
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    res_1.start = this.start + 1;
    res_1.end = this.end + 1;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      newSlice.start = newSlice.start + 1;
      newSlice.end = newSlice.end + 1;
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    let use_card_1 = newSlice_1.cardinality;
    if ( (p.elements.length) >= (use_card_1 - 1) ) {
      use_card_1 = (p.elements.length) + 1;
    }
    newSlice_1.elements = new Array(use_card_1);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      if ( (newSlice_1.start + i_1) < idx ) {
        newSlice_1.elements[i_1] = e_1;
      } else {
        if ( idx == (newSlice_1.start + i_1) ) {
          newSlice_1.elements[i_1] = item;
          newSlice_1.elements[i_1 + 1] = e_1;
        } else {
          newSlice_1.elements[i_1 + 1] = e_1;
        }
      }
    };
    newSlice_1.end = newSlice_1.end + 1;
    newSlice_1.cardinality = use_card_1;
    if ( (idx - newSlice_1.start) >= p.cardinality ) {
      newSlice_1.end = idx + 1;
    }
    newSlice_1.parent = p.parent;
    res_1.parent = newSlice_1;
    return root;
  };
  get (idx) {
    if ( idx < 0 ) {
      return this.elements[0];
    }
    if ( (idx >= this.start) && (idx < this.end) ) {
      return this.elements[(idx - this.start)];
    }
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      p = p.parent;
    };
    if ( (typeof(p) !== "undefined" && p != null )  ) {
      return p.elements[(idx - p.start)];
    }
    return this.elements[0];
  };
  add (item) {
    if ( (this.end - this.start) >= this.cardinality ) {
      const res = new Vector_string();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_string();
    res_1.elements = new Array(this.cardinality);
    for ( let i = 0; i < this.elements.length; i++) {
      var e = this.elements[i];
      res_1.elements[i] = e;
    };
    res_1.elements[this.end - this.start] = item;
    res_1.parent = this.parent;
    res_1.start = this.start;
    res_1.end = this.end + 1;
    res_1.cardinality = this.cardinality;
    return res_1;
  };
  count () {
    return this.end;
  };
  _map (cb) {
    let res = new Vector_string();
    const cnt = (this).count();
    let i = 0;
    while (i < cnt) {
      const item = (this).get(i);
      const new_value = cb(item);
      res = res.add(new_value);
      i = i + 1;
    };
    return res;
  };
}
class Vector_RNode  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_RNode();
    obj.start = this.start;
    obj.end = this.end;
    obj.parent = this.parent;
    obj.cardinality = this.cardinality;
    obj.elements = this.elements;
    return obj;
  };
  set (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      res.elements = new Array(res.cardinality);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) != idx ) {
          res.elements[i] = e;
        } else {
          res.elements[i] = item;
        }
      };
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    newSlice_1.elements = new Array(newSlice_1.cardinality);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      newSlice_1.elements[i_1] = e_1;
    };
    newSlice_1.elements[idx - newSlice_1.start] = item;
    res_1.parent = newSlice_1;
    return root;
  };
  insert (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      let use_card = this.cardinality;
      if ( (res.elements.length) >= (use_card - 1) ) {
        use_card = (res.elements.length) + 1;
      }
      res.elements = new Array(use_card);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) < idx ) {
          res.elements[i] = e;
        } else {
          if ( idx == (res.start + i) ) {
            res.elements[i] = item;
            res.elements[i + 1] = e;
          } else {
            res.elements[i + 1] = e;
          }
        }
      };
      if ( (idx - this.start) >= (this.elements.length) ) {
        res.elements[idx - this.start] = item;
      }
      res.start = this.start;
      res.end = this.end + 1;
      res.cardinality = use_card;
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    res_1.start = this.start + 1;
    res_1.end = this.end + 1;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      newSlice.start = newSlice.start + 1;
      newSlice.end = newSlice.end + 1;
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    let use_card_1 = newSlice_1.cardinality;
    if ( (p.elements.length) >= (use_card_1 - 1) ) {
      use_card_1 = (p.elements.length) + 1;
    }
    newSlice_1.elements = new Array(use_card_1);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      if ( (newSlice_1.start + i_1) < idx ) {
        newSlice_1.elements[i_1] = e_1;
      } else {
        if ( idx == (newSlice_1.start + i_1) ) {
          newSlice_1.elements[i_1] = item;
          newSlice_1.elements[i_1 + 1] = e_1;
        } else {
          newSlice_1.elements[i_1 + 1] = e_1;
        }
      }
    };
    newSlice_1.end = newSlice_1.end + 1;
    newSlice_1.cardinality = use_card_1;
    if ( (idx - newSlice_1.start) >= p.cardinality ) {
      newSlice_1.end = idx + 1;
    }
    newSlice_1.parent = p.parent;
    res_1.parent = newSlice_1;
    return root;
  };
  get (idx) {
    if ( idx < 0 ) {
      return this.elements[0];
    }
    if ( (idx >= this.start) && (idx < this.end) ) {
      return this.elements[(idx - this.start)];
    }
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      p = p.parent;
    };
    if ( (typeof(p) !== "undefined" && p != null )  ) {
      return p.elements[(idx - p.start)];
    }
    return this.elements[0];
  };
  add (item) {
    if ( (this.end - this.start) >= this.cardinality ) {
      const res = new Vector_RNode();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_RNode();
    res_1.elements = new Array(this.cardinality);
    for ( let i = 0; i < this.elements.length; i++) {
      var e = this.elements[i];
      res_1.elements[i] = e;
    };
    res_1.elements[this.end - this.start] = item;
    res_1.parent = this.parent;
    res_1.start = this.start;
    res_1.end = this.end + 1;
    res_1.cardinality = this.cardinality;
    return res_1;
  };
  count () {
    return this.end;
  };
  _map (cb) {
    let res = new Vector_RNode();
    const cnt = (this).count();
    let i = 0;
    while (i < cnt) {
      const item = (this).get(i);
      const new_value = cb(item);
      res = res.add(new_value);
      i = i + 1;
    };
    return res;
  };
}
class Map_string_boolean  {
  constructor() {
    this.elements = {};     /** note: unused */
  }
}
class Map_string_string  {
  constructor() {
    this.elements = {};     /** note: unused */
  }
}
class Map_string_RValueType  {
  constructor() {
    this.elements = {};
  }
}
class Map_string_RVariable  {
  constructor() {
    this.elements = {};
  }
}
class Vector_RErrorType  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_RErrorType();
    obj.start = this.start;
    obj.end = this.end;
    obj.parent = this.parent;
    obj.cardinality = this.cardinality;
    obj.elements = this.elements;
    return obj;
  };
  set (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      res.elements = new Array(res.cardinality);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) != idx ) {
          res.elements[i] = e;
        } else {
          res.elements[i] = item;
        }
      };
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    newSlice_1.elements = new Array(newSlice_1.cardinality);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      newSlice_1.elements[i_1] = e_1;
    };
    newSlice_1.elements[idx - newSlice_1.start] = item;
    res_1.parent = newSlice_1;
    return root;
  };
  insert (idx, item) {
    if ( idx >= this.start ) {
      const res = this.localCopy();
      let use_card = this.cardinality;
      if ( (res.elements.length) >= (use_card - 1) ) {
        use_card = (res.elements.length) + 1;
      }
      res.elements = new Array(use_card);
      for ( let i = 0; i < this.elements.length; i++) {
        var e = this.elements[i];
        if ( (res.start + i) < idx ) {
          res.elements[i] = e;
        } else {
          if ( idx == (res.start + i) ) {
            res.elements[i] = item;
            res.elements[i + 1] = e;
          } else {
            res.elements[i + 1] = e;
          }
        }
      };
      if ( (idx - this.start) >= (this.elements.length) ) {
        res.elements[idx - this.start] = item;
      }
      res.start = this.start;
      res.end = this.end + 1;
      res.cardinality = use_card;
      return res;
    }
    const root = this.localCopy();
    let res_1 = root;
    res_1.start = this.start + 1;
    res_1.end = this.end + 1;
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      const newSlice = p.localCopy();
      newSlice.start = newSlice.start + 1;
      newSlice.end = newSlice.end + 1;
      res_1.parent = newSlice;
      res_1 = newSlice;
      if ( (typeof(p.parent) !== "undefined" && p.parent != null )  ) {
        p = p.parent;
      }
    };
    const newSlice_1 = p.localCopy();
    let use_card_1 = newSlice_1.cardinality;
    if ( (p.elements.length) >= (use_card_1 - 1) ) {
      use_card_1 = (p.elements.length) + 1;
    }
    newSlice_1.elements = new Array(use_card_1);
    for ( let i_1 = 0; i_1 < p.elements.length; i_1++) {
      var e_1 = p.elements[i_1];
      if ( (newSlice_1.start + i_1) < idx ) {
        newSlice_1.elements[i_1] = e_1;
      } else {
        if ( idx == (newSlice_1.start + i_1) ) {
          newSlice_1.elements[i_1] = item;
          newSlice_1.elements[i_1 + 1] = e_1;
        } else {
          newSlice_1.elements[i_1 + 1] = e_1;
        }
      }
    };
    newSlice_1.end = newSlice_1.end + 1;
    newSlice_1.cardinality = use_card_1;
    if ( (idx - newSlice_1.start) >= p.cardinality ) {
      newSlice_1.end = idx + 1;
    }
    newSlice_1.parent = p.parent;
    res_1.parent = newSlice_1;
    return root;
  };
  get (idx) {
    if ( idx < 0 ) {
      return this.elements[0];
    }
    if ( (idx >= this.start) && (idx < this.end) ) {
      return this.elements[(idx - this.start)];
    }
    let p = this.parent;
    while (((typeof(p) !== "undefined" && p != null ) ) && (idx < p.start)) {
      p = p.parent;
    };
    if ( (typeof(p) !== "undefined" && p != null )  ) {
      return p.elements[(idx - p.start)];
    }
    return this.elements[0];
  };
  add (item) {
    if ( (this.end - this.start) >= this.cardinality ) {
      const res = new Vector_RErrorType();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_RErrorType();
    res_1.elements = new Array(this.cardinality);
    for ( let i = 0; i < this.elements.length; i++) {
      var e = this.elements[i];
      res_1.elements[i] = e;
    };
    res_1.elements[this.end - this.start] = item;
    res_1.parent = this.parent;
    res_1.start = this.start;
    res_1.end = this.end + 1;
    res_1.cardinality = this.cardinality;
    return res_1;
  };
  count () {
    return this.end;
  };
  _map (cb) {
    let res = new Vector_RErrorType();
    const cnt = (this).count();
    let i = 0;
    while (i < cnt) {
      const item = (this).get(i);
      const new_value = cb(item);
      res = res.add(new_value);
      i = i + 1;
    };
    return res;
  };
}
class operatorsOfVector  {
  constructor() {
  }
}
operatorsOfVector.forEach_2 = function(__self, cb) {
  const cnt = (__self).count();
  let i = 0;
  while (i < cnt) {
    const item = operatorsOfVector.itemAt_3(__self, i);
    cb(item);
    i = i + 1;
  };
};
operatorsOfVector.itemAt_3 = function(__self, idx) {
  const val = (__self).get(idx);
  return val;
};
operatorsOfVector.push_6 = function(__self, item) {
  return __self.add(item);
};
operatorsOfVector.push_10 = function(__self, item) {
  return __self.add(item);
};
operatorsOfVector.push_12 = function(__self, item) {
  return __self.add(item);
};
operatorsOfVector.size_21 = function(__self) {
  return (__self).count();
};
operatorsOfVector.forEach_22 = function(__self, cb) {
  const cnt_1 = (__self).count();
  let i_6 = 0;
  while (i_6 < cnt_1) {
    const item_1 = operatorsOfVector.itemAt_23(__self, i_6);
    cb(item_1);
    i_6 = i_6 + 1;
  };
};
operatorsOfVector.itemAt_23 = function(__self, idx) {
  const val_1 = (__self).get(idx);
  return val_1;
};
class operatorsOf_4  {
  constructor() {
  }
}
operatorsOf_4.forEach_5 = function(__self, cb) {
  for ( let i_1 = 0; i_1 < __self.length; i_1++) {
    var it = __self[i_1];
    cb(it, i_1);
  };
};
operatorsOf_4.forEach_25 = function(__self, cb) {
  for ( let i_7 = 0; i_7 < __self.length; i_7++) {
    var it_1 = __self[i_7];
    cb(it_1, i_7);
  };
};
class operatorsOfMap_7  {
  constructor() {
  }
}
operatorsOfMap_7.get_8 = function(__self, key) {
  return __self.elements[key];
};
class operatorsOf_7  {
  constructor() {
  }
}
operatorsOf_7.get_8 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_7.set_9 = function(__self, key, value) {
  const c = new Map_string_RVariable();
  const keys = Object.keys(__self.elements);
  for ( let i_2 = 0; i_2 < keys.length; i_2++) {
    var k = keys[i_2];
    if ( k == key ) {
    } else {
      c.elements[k] = (__self.elements[k]);
    }
  };
  c.elements[key] = value;
  return c;
};
operatorsOf_7.set_11 = function(__self, key, value) {
  const c_1 = new Map_string_RValueType();
  const keys_1 = Object.keys(__self.elements);
  for ( let i_3 = 0; i_3 < keys_1.length; i_3++) {
    var k_1 = keys_1[i_3];
    if ( k_1 == key ) {
    } else {
      c_1.elements[k_1] = (__self.elements[k_1]);
    }
  };
  c_1.elements[key] = value;
  return c_1;
};
operatorsOf_7.get_13 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_7.set_14 = function(__self, key, value) {
  const c_2 = new Map_string_RType_Variable();
  const keys_2 = Object.keys(__self.elements);
  for ( let i_4 = 0; i_4 < keys_2.length; i_4++) {
    var k_2 = keys_2[i_4];
    if ( k_2 == key ) {
    } else {
      c_2.elements[k_2] = (__self.elements[k_2]);
    }
  };
  c_2.elements[key] = value;
  return c_2;
};
operatorsOf_7.keys_19 = function(__self) {
  return Object.keys(__self.elements);
};
operatorsOf_7.forEach_20 = function(__self, cb) {
  const keys_3 = Object.keys(__self.elements);
  for ( let i_5 = 0; i_5 < keys_3.length; i_5++) {
    var key = keys_3[i_5];
    cb((__self.elements[key]), key);
  };
  return __self;
};
operatorsOf_7.keys_24 = function(__self) {
  return Object.keys(__self.elements);
};
operatorsOf_7.keys_26 = function(__self) {
  return Object.keys(__self.elements);
};
class operatorsOfstring_15  {
  constructor() {
  }
}
operatorsOfstring_15.literal_16 = function(v) {
  let sca = new RType_Literal();
  sca = (sca).set_string_value(v);
  sca = (sca).set_value_type(4);
  return sca;
};
class operatorsOf_15  {
  constructor() {
  }
}
operatorsOf_15.literal_16 = function(v) {
  let sca_1 = new RType_Literal();
  sca_1 = (sca_1).set_string_value(v);
  sca_1 = (sca_1).set_value_type(4);
  return sca_1;
};
class operatorsOfint_17  {
  constructor() {
  }
}
operatorsOfint_17.literal_18 = function(v) {
  let sca_2 = new RType_Literal();
  sca_2 = (sca_2).set_int_value(v);
  sca_2 = (sca_2).set_value_type(1);
  return sca_2;
};
class operatorsOf_17  {
  constructor() {
  }
}
operatorsOf_17.literal_18 = function(v) {
  let sca_3 = new RType_Literal();
  sca_3 = (sca_3).set_int_value(v);
  sca_3 = (sca_3).set_value_type(1);
  return sca_3;
};
/* static JavaSript main routine at the end of the JS file */
function __js_main() {
  try {
    const ctx = new TestContext();
    const test = new BasicAST();
    test.blockCtxTest(ctx);
    operatorsOf_4.forEach_25(ctx.messages, ((item, index) => { 
      console.log("  * " + item);
    }));
    if ( (ctx.errors.length) > 0 ) {
      operatorsOf_4.forEach_25(ctx.errors, ((item, index) => { 
        console.log("ERROR: " + item);
      }));
    } else {
      console.log("  --------------------------------");
      console.log("  | ALL tests run succesfully!!! |");
      console.log("  --------------------------------");
    }
  } catch(e) {
    console.log("Running tests failed");
  }
}
__js_main();
