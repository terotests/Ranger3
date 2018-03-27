class ROperatorCollection  {
  constructor() {
    this.name = "";
    this.langs = new Map_string_ROperatorDef();
  }
  __CopySelf () {
    const res = new ROperatorCollection();
    res.name = this.name;
    res.langs = this.langs;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_langs (new_value_of_langs) {
    const res = this.__CopySelf();
    res.langs = new_value_of_langs;
    return res;
  };
}
class ROperatorParam  {
  constructor() {
    this.name = "";
    this.type_name = "";
    this.required = true;
  }
  __CopySelf () {
    const res = new ROperatorParam();
    res.name = this.name;
    res.ctx = this.ctx;
    res.type_name = this.type_name;
    res.equation = this.equation;
    res.required = this.required;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_type_name (new_value_of_type_name) {
    const res = this.__CopySelf();
    res.type_name = new_value_of_type_name;
    return res;
  };
  set_equation (new_value_of_equation) {
    const res = this.__CopySelf();
    res.equation = new_value_of_equation;
    return res;
  };
  set_required (new_value_of_required) {
    const res = this.__CopySelf();
    res.required = new_value_of_required;
    return res;
  };
}
class ROperatorDef  {
  constructor() {
    this.lang = "";
    this.versions = "";
    this.params = new Vector_ROperatorParam();
    this.cmds = new Vector_ROpNode();
  }
  __CopySelf () {
    const res = new ROperatorDef();
    res.lang = this.lang;
    res.versions = this.versions;
    res.params = this.params;
    res.cmds = this.cmds;
    return res;
  };
  set_lang (new_value_of_lang) {
    const res = this.__CopySelf();
    res.lang = new_value_of_lang;
    return res;
  };
  set_versions (new_value_of_versions) {
    const res = this.__CopySelf();
    res.versions = new_value_of_versions;
    return res;
  };
  set_params (new_value_of_params) {
    const res = this.__CopySelf();
    res.params = new_value_of_params;
    return res;
  };
  set_cmds (new_value_of_cmds) {
    const res = this.__CopySelf();
    res.cmds = new_value_of_cmds;
    return res;
  };
}
class ROpCmdWriteText  {
  constructor() {
    this.text = "";
  }
  __CopySelf () {
    const res = new ROpCmdWriteText();
    res.text = this.text;
    return res;
  };
  set_text (new_value_of_text) {
    const res = this.__CopySelf();
    res.text = new_value_of_text;
    return res;
  };
}
class ROpCmdParam  {
  constructor() {
    this.index = 0;
    this.name = "";
  }
  __CopySelf () {
    const res = new ROpCmdParam();
    res.index = this.index;
    res.name = this.name;
    return res;
  };
  set_index (new_value_of_index) {
    const res = this.__CopySelf();
    res.index = new_value_of_index;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
}
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
class RVRefNode  {
  constructor() {
    this.vref = "";
    this.ns = new Vector_string();
  }
  __CopySelf () {
    const res = new RVRefNode();
    res.ctx = this.ctx;
    res.vref = this.vref;
    res.ns = this.ns;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_vref (new_value_of_vref) {
    const res = this.__CopySelf();
    res.vref = new_value_of_vref;
    return res;
  };
  set_ns (new_value_of_ns) {
    const res = this.__CopySelf();
    res.ns = new_value_of_ns;
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
class ROperator  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new ROperator();
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
class RFunctionParam  {
  constructor() {
    this.name = "";
    this.type_name = "";
    this.required = true;
  }
  __CopySelf () {
    const res = new RFunctionParam();
    res.name = this.name;
    res.ctx = this.ctx;
    res.type_name = this.type_name;
    res.required = this.required;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
  set_ctx (new_value_of_ctx) {
    const res = this.__CopySelf();
    res.ctx = new_value_of_ctx;
    return res;
  };
  set_type_name (new_value_of_type_name) {
    const res = this.__CopySelf();
    res.type_name = new_value_of_type_name;
    return res;
  };
  set_required (new_value_of_required) {
    const res = this.__CopySelf();
    res.required = new_value_of_required;
    return res;
  };
}
class RFunction  {
  constructor() {
    this.name = "";
    this.params = new Vector_RNode();
    this.rvType = "void";
  }
  __CopySelf () {
    const res = new RFunction();
    res.name = this.name;
    res.startCtx = this.startCtx;
    res.endCtx = this.endCtx;
    res.ctx = this.ctx;
    res.params = this.params;
    res.body = this.body;
    res.rvType = this.rvType;
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
  set_params (new_value_of_params) {
    const res = this.__CopySelf();
    res.params = new_value_of_params;
    return res;
  };
  set_body (new_value_of_body) {
    const res = this.__CopySelf();
    res.body = new_value_of_body;
    return res;
  };
  set_rvType (new_value_of_rvType) {
    const res = this.__CopySelf();
    res.rvType = new_value_of_rvType;
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
    this.value = 0;
  }
  __CopySelf () {
    const res = new RIntValue();
    res.value = this.value;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
}
class RBooleanValue  {
  constructor() {
    this.value = false;
  }
  __CopySelf () {
    const res = new RBooleanValue();
    res.value = this.value;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
}
class RStringValue  {
  constructor() {
    this.value = "";
  }
  __CopySelf () {
    const res = new RStringValue();
    res.value = this.value;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
    return res;
  };
}
class RDoubleValue  {
  constructor() {
    this.value = 0.0;
  }
  __CopySelf () {
    const res = new RDoubleValue();
    res.value = this.value;
    return res;
  };
  set_value (new_value_of_value) {
    const res = this.__CopySelf();
    res.value = new_value_of_value;
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
class RNoOp  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new RNoOp();
    res.name = this.name;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
}
class RMaybeClass  {
  constructor() {
    this.className = "";
  }
  __CopySelf () {
    const res = new RMaybeClass();
    res.className = this.className;
    res.node = this.node;
    return res;
  };
  set_className (new_value_of_className) {
    const res = this.__CopySelf();
    res.className = new_value_of_className;
    return res;
  };
  set_node (new_value_of_node) {
    const res = this.__CopySelf();
    res.node = new_value_of_node;
    return res;
  };
}
class RMaybeSQL  {
  constructor() {
    this.command = "";
  }
  __CopySelf () {
    const res = new RMaybeSQL();
    res.command = this.command;
    res.node = this.node;
    return res;
  };
  set_command (new_value_of_command) {
    const res = this.__CopySelf();
    res.command = new_value_of_command;
    return res;
  };
  set_node (new_value_of_node) {
    const res = this.__CopySelf();
    res.node = new_value_of_node;
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
    this.nspath = "";
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
    res.nspath = this.nspath;
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
  set_nspath (new_value_of_nspath) {
    const res = this.__CopySelf();
    res.nspath = new_value_of_nspath;
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
    this.operators = new Map_string_ROpNode();
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
    res.operators = this.operators;
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
  set_operators (new_value_of_operators) {
    const res = this.__CopySelf();
    res.operators = new_value_of_operators;
    return res;
  };
}
class CodeSlice  {
  constructor() {
    this.tokens = new Vector_string();
  }
  __CopySelf () {
    const res = new CodeSlice();
    res.tokens = this.tokens;
    return res;
  };
  set_tokens (new_value_of_tokens) {
    const res = this.__CopySelf();
    res.tokens = new_value_of_tokens;
    return res;
  };
}
class WriterSettings  {
  constructor() {
    this.indentStr = "  ";
    this.newlineStr = "\n";
  }
  __CopySelf () {
    const res = new WriterSettings();
    res.indentStr = this.indentStr;
    res.newlineStr = this.newlineStr;
    return res;
  };
  set_indentStr (new_value_of_indentStr) {
    const res = this.__CopySelf();
    res.indentStr = new_value_of_indentStr;
    return res;
  };
  set_newlineStr (new_value_of_newlineStr) {
    const res = this.__CopySelf();
    res.newlineStr = new_value_of_newlineStr;
    return res;
  };
}
class WriterCmdIndent  {
  constructor() {
  }
  __CopySelf () {
    const res = new WriterCmdIndent();
    return res;
  };
}
class WriterCmdUnIndent  {
  constructor() {
  }
  __CopySelf () {
    const res = new WriterCmdUnIndent();
    return res;
  };
}
class WriterCmdNewLine  {
  constructor() {
  }
  __CopySelf () {
    const res = new WriterCmdNewLine();
    return res;
  };
}
class WriterTag  {
  constructor() {
    this.name = "";
  }
  __CopySelf () {
    const res = new WriterTag();
    res.name = this.name;
    return res;
  };
  set_name (new_value_of_name) {
    const res = this.__CopySelf();
    res.name = new_value_of_name;
    return res;
  };
}
class CodeOutput  {
  constructor() {
    this.tags = new Map_string_CodeOutput();
    this.slices = new Vector_WriterCmd();
  }
  __CopySelf () {
    const res = new CodeOutput();
    res.tags = this.tags;
    res.slices = this.slices;
    res.settings = this.settings;
    return res;
  };
  set_tags (new_value_of_tags) {
    const res = this.__CopySelf();
    res.tags = new_value_of_tags;
    return res;
  };
  set_slices (new_value_of_slices) {
    const res = this.__CopySelf();
    res.slices = new_value_of_slices;
    return res;
  };
  set_settings (new_value_of_settings) {
    const res = this.__CopySelf();
    res.settings = new_value_of_settings;
    return res;
  };
}
class SourceCode  {
  constructor(code_str) {
    this.code = "";
    this.lines = [];
    this.filename = "";
    this.code = code_str;
    this.lines = code_str.split("\n");
  }
  getLineString (line_index) {
    if ( (this.lines.length) > line_index ) {
      return this.lines[line_index];
    }
    return "";
  };
  getLine (sp) {
    let cnt = 0;
    for ( let i = 0; i < this.lines.length; i++) {
      var str = this.lines[i];
      cnt = cnt + ((str.length) + 1);
      if ( cnt > sp ) {
        return i;
      }
    };
    return -1;
  };
  getColumnStr (sp) {
    let cnt = 0;
    let last_col = 0;
    for ( let i = 0; i < this.lines.length; i++) {
      var str = this.lines[i];
      cnt = cnt + ((str.length) + 1);
      if ( cnt > sp ) {
        let ll = sp - last_col;
        let ss = "";
        while (ll > 0) {
          ss = ss + " ";
          ll = ll - 1;
        };
        return ss;
      }
      last_col = cnt;
    };
    return "";
  };
  getColumn (sp) {
    let cnt = 0;
    let last_col = 0;
    for ( let i = 0; i < this.lines.length; i++) {
      var str = this.lines[i];
      cnt = cnt + ((str.length) + 1);
      if ( cnt > sp ) {
        return sp - last_col;
      }
      last_col = cnt;
    };
    return -1;
  };
}
class CodeNodeLiteral  {
  constructor() {
    this.expression = false;
    this.vref = "";
    this.is_block_node = false;
    this.type_name = "";
    this.key_type = "";
    this.array_type = "";
    this.ns = [];
    this.has_vref_annotation = false;
    this.has_type_annotation = false;
    this.parsed_type = 0;
    this.value_type = 0;
    this.double_value = 0.0;
    this.string_value = "";
    this.int_value = 0;
    this.boolean_value = false;
    this.props = {};
    this.prop_keys = [];
    this.comments = [];
    this.children = [];
    this.attrs = [];
  }
  toDictionary () {
    let res = {};
    try {
      res["expression"] = this.expression;
      res["vref"] = this.vref;
      res["is_block_node"] = this.is_block_node;
      res["type_name"] = this.type_name;
      res["key_type"] = this.key_type;
      res["array_type"] = this.array_type;
      let values = [];
      for ( let i = 0; i < this.ns.length; i++) {
        var item = this.ns[i];
        values.push(item);
      };
      res["ns"] = values;
      res["has_vref_annotation"] = this.has_vref_annotation;
      if ( (typeof(this.vref_annotation) !== "undefined" && this.vref_annotation != null )  ) {
        res["vref_annotation"] = ((this.vref_annotation)).toDictionary();
      }
      res["has_type_annotation"] = this.has_type_annotation;
      if ( (typeof(this.type_annotation) !== "undefined" && this.type_annotation != null )  ) {
        res["type_annotation"] = ((this.type_annotation)).toDictionary();
      }
      res["parsed_type"] = this.parsed_type;
      res["value_type"] = this.value_type;
      res["double_value"] = this.double_value;
      res["string_value"] = this.string_value;
      res["int_value"] = this.int_value;
      res["boolean_value"] = this.boolean_value;
      if ( (typeof(this.expression_value) !== "undefined" && this.expression_value != null )  ) {
        res["expression_value"] = ((this.expression_value)).toDictionary();
      }
      let values_1 = {};
      const keyList = Object.keys(this.props);
      for ( let index = 0; index < keyList.length; index++) {
        var keyname = keyList[index];
        const item_1 = (this.props[keyname]);
        const obj = item_1.toDictionary();
        values_1[keyname] = obj;
      };
      res["props"] = values_1;
      let values_2 = [];
      for ( let i_1 = 0; i_1 < this.prop_keys.length; i_1++) {
        var item_2 = this.prop_keys[i_1];
        values_2.push(item_2);
      };
      res["prop_keys"] = values_2;
      let values_3 = [];
      for ( let i_2 = 0; i_2 < this.comments.length; i_2++) {
        var item_3 = this.comments[i_2];
        const obj_1 = item_3.toDictionary();
        values_3.push(obj_1);
      };
      res["comments"] = values_3;
      let values_4 = [];
      for ( let i_3 = 0; i_3 < this.children.length; i_3++) {
        var item_4 = this.children[i_3];
        const obj_2 = item_4.toDictionary();
        values_4.push(obj_2);
      };
      res["children"] = values_4;
      let values_5 = [];
      for ( let i_4 = 0; i_4 < this.attrs.length; i_4++) {
        var item_5 = this.attrs[i_4];
        const obj_3 = item_5.toDictionary();
        values_5.push(obj_3);
      };
      res["attrs"] = values_5;
    } catch(e) {
    }
    return res;
  };
}
CodeNodeLiteral.fromDictionary = function(dict) {
  const obj = new CodeNodeLiteral();
  try {
    const v = typeof(dict ["expression"]) === "undefined" ? undefined :(dict ["expression"]) ;
    if ( (typeof(v) !== "undefined" && v != null )  ) {
      obj.expression = v;
    }
    const v_1 = (typeof (dict ["vref"]) != "string" ) ? undefined : dict ["vref"] 
    ;
    if ( (typeof(v_1) !== "undefined" && v_1 != null )  ) {
      obj.vref = v_1;
    }
    const v_2 = typeof(dict ["is_block_node"]) === "undefined" ? undefined :(dict ["is_block_node"]) ;
    if ( (typeof(v_2) !== "undefined" && v_2 != null )  ) {
      obj.is_block_node = v_2;
    }
    const v_3 = (typeof (dict ["type_name"]) != "string" ) ? undefined : dict ["type_name"] 
    ;
    if ( (typeof(v_3) !== "undefined" && v_3 != null )  ) {
      obj.type_name = v_3;
    }
    const v_4 = (typeof (dict ["key_type"]) != "string" ) ? undefined : dict ["key_type"] 
    ;
    if ( (typeof(v_4) !== "undefined" && v_4 != null )  ) {
      obj.key_type = v_4;
    }
    const v_5 = (typeof (dict ["array_type"]) != "string" ) ? undefined : dict ["array_type"] 
    ;
    if ( (typeof(v_5) !== "undefined" && v_5 != null )  ) {
      obj.array_type = v_5;
    }
    const values = (dict["ns"] instanceof Array ) ? dict ["ns"] : undefined ;
    if ( (typeof(values) !== "undefined" && values != null )  ) {
      const arr = values;
      operatorsOfJSONArrayObject_69.forEach_70(arr, ((item, index) => { 
        if( typeof(item) === 'string' ) /* union case for string */ {
          var oo = item;
          obj.ns.push(oo);
        };
      }));
    }
    const v_6 = typeof(dict ["has_vref_annotation"]) === "undefined" ? undefined :(dict ["has_vref_annotation"]) ;
    if ( (typeof(v_6) !== "undefined" && v_6 != null )  ) {
      obj.has_vref_annotation = v_6;
    }
    const theValue = (dict["vref_annotation"] instanceof Object ) ? dict ["vref_annotation"] : undefined ;
    if ( (typeof(theValue) !== "undefined" && theValue != null )  ) {
      const newObj = CodeNodeLiteral.fromDictionary((theValue));
      obj.vref_annotation = newObj;
    }
    const v_7 = typeof(dict ["has_type_annotation"]) === "undefined" ? undefined :(dict ["has_type_annotation"]) ;
    if ( (typeof(v_7) !== "undefined" && v_7 != null )  ) {
      obj.has_type_annotation = v_7;
    }
    const theValue_1 = (dict["type_annotation"] instanceof Object ) ? dict ["type_annotation"] : undefined ;
    if ( (typeof(theValue_1) !== "undefined" && theValue_1 != null )  ) {
      const newObj_1 = CodeNodeLiteral.fromDictionary((theValue_1));
      obj.type_annotation = newObj_1;
    }
    const v_8 = isNaN( parseFloat(dict ["double_value"]) ) ? undefined : parseFloat(dict ["double_value"]) 
    ;
    if ( (typeof(v_8) !== "undefined" && v_8 != null )  ) {
      obj.double_value = v_8;
    }
    const v_9 = (typeof (dict ["string_value"]) != "string" ) ? undefined : dict ["string_value"] 
    ;
    if ( (typeof(v_9) !== "undefined" && v_9 != null )  ) {
      obj.string_value = v_9;
    }
    const v_10 = isNaN( parseInt(dict ["int_value"]) ) ? undefined : parseInt(dict ["int_value"]) 
    ;
    if ( (typeof(v_10) !== "undefined" && v_10 != null )  ) {
      obj.int_value = v_10;
    }
    const v_11 = typeof(dict ["boolean_value"]) === "undefined" ? undefined :(dict ["boolean_value"]) ;
    if ( (typeof(v_11) !== "undefined" && v_11 != null )  ) {
      obj.boolean_value = v_11;
    }
    const theValue_2 = (dict["expression_value"] instanceof Object ) ? dict ["expression_value"] : undefined ;
    if ( (typeof(theValue_2) !== "undefined" && theValue_2 != null )  ) {
      const newObj_2 = CodeNodeLiteral.fromDictionary((theValue_2));
      obj.expression_value = newObj_2;
    }
    const values_1 = (dict["props"] instanceof Object ) ? dict ["props"] : undefined ;
    if ( (typeof(values_1) !== "undefined" && values_1 != null )  ) {
      const theObjprops = values_1;
      const obj_keys = Object.keys(theObjprops);
      operatorsOf_9.forEach_29(obj_keys, ((item, index) => { 
        const theValue_3 = (theObjprops[item] instanceof Object ) ? theObjprops [item] : undefined ;
        if ( (typeof(theValue_3) !== "undefined" && theValue_3 != null )  ) {
          const newObj_3 = CodeNodeLiteral.fromDictionary((theValue_3));
          obj.props[item] = newObj_3;
        }
      }));
    }
    const values_2 = (dict["prop_keys"] instanceof Array ) ? dict ["prop_keys"] : undefined ;
    if ( (typeof(values_2) !== "undefined" && values_2 != null )  ) {
      const arr_1 = values_2;
      operatorsOf_69.forEach_70(arr_1, ((item, index) => { 
        if( typeof(item) === 'string' ) /* union case for string */ {
          var oo_1 = item;
          obj.prop_keys.push(oo_1);
        };
      }));
    }
    const values_3 = (dict["comments"] instanceof Array ) ? dict ["comments"] : undefined ;
    if ( (typeof(values_3) !== "undefined" && values_3 != null )  ) {
      const arr_2 = values_3;
      operatorsOf_69.forEach_70(arr_2, ((item, index) => { 
        if( item instanceof Object ) /* union case */ {
          var oo_2 = item;
          const newObj_4 = CodeNodeLiteral.fromDictionary(oo_2);
          obj.comments.push(newObj_4);
        };
      }));
    }
    const values_4 = (dict["children"] instanceof Array ) ? dict ["children"] : undefined ;
    if ( (typeof(values_4) !== "undefined" && values_4 != null )  ) {
      const arr_3 = values_4;
      operatorsOf_69.forEach_70(arr_3, ((item, index) => { 
        if( item instanceof Object ) /* union case */ {
          var oo_3 = item;
          const newObj_5 = CodeNodeLiteral.fromDictionary(oo_3);
          obj.children.push(newObj_5);
        };
      }));
    }
    const values_5 = (dict["attrs"] instanceof Array ) ? dict ["attrs"] : undefined ;
    if ( (typeof(values_5) !== "undefined" && values_5 != null )  ) {
      const arr_4 = values_5;
      operatorsOf_69.forEach_70(arr_4, ((item, index) => { 
        if( item instanceof Object ) /* union case */ {
          var oo_4 = item;
          const newObj_6 = CodeNodeLiteral.fromDictionary(oo_4);
          obj.attrs.push(newObj_6);
        };
      }));
    }
  } catch(e) {
  }
  return obj;
};
class CodeNode  {
  constructor(source, start, end) {
    this.sp = 0;
    this.ep = 0;
    this.row = 0;
    this.col = 0;     /** note: unused */
    this.expression = false;
    this.vref = "";
    this.is_block_node = false;
    this.infix_operator = false;
    this.infix_subnode = false;
    this.operator_pred = 0;
    this.to_the_right = false;
    this.type_type = "";     /** note: unused */
    this.type_name = "";
    this.key_type = "";
    this.array_type = "";
    this.ns = [];
    this.has_vref_annotation = false;
    this.has_type_annotation = false;
    this.parsed_type = 0;
    this.value_type = 0;
    this.double_value = 0.0;
    this.string_value = "";
    this.int_value = 0;
    this.boolean_value = false;
    this.props = {};
    this.prop_keys = [];
    this.comments = [];
    this.children = [];
    this.attrs = [];
    this.appGUID = "";     /** note: unused */
    this.sp = start;
    this.ep = end;
    this.code = source;
  }
  childCnt () {
    return this.children.length;
  };
  getChild (index) {
    let res;
    if ( (index >= 0) && ((this.children.length) > index) ) {
      res = this.children[index];
    }
    return res;
  };
  forTree (callback) {
    for ( let i = 0; i < this.children.length; i++) {
      var ch = this.children[i];
      callback(ch, i);
      ch.forTree(callback);
    };
  };
  parallelTree (otherTree, callback) {
    const left_cnt = this.children.length;
    const right_cnt = otherTree.children.length;
    const cnt = (left_cnt < right_cnt) ? right_cnt : left_cnt;
    let i = 0;
    while (i < cnt) {
      let left;
      let right;
      if ( i < left_cnt ) {
        left = this.children[i];
      }
      if ( i < right_cnt ) {
        right = otherTree.children[i];
      }
      callback(left, right, i);
      if ( ((typeof(left) !== "undefined" && left != null ) ) && ((typeof(right) !== "undefined" && right != null ) ) ) {
        if ( (left.children.length) > 0 ) {
          left.parallelTree(right, callback);
        }
      }
      i = i + 1;
    };
  };
  walkTreeUntil (callback) {
    for ( let i = 0; i < this.children.length; i++) {
      var ch = this.children[i];
      if ( callback(ch, i) ) {
        ch.walkTreeUntil(callback);
      }
    };
  };
  getParsedString () {
    return this.code.code.substring(this.sp, this.ep );
  };
  getFilename () {
    return this.code.filename;
  };
  getFlag (flagName) {
    let res;
    if ( false == this.has_vref_annotation ) {
      return res;
    }
    for ( let i = 0; i < this.vref_annotation.children.length; i++) {
      var ch = this.vref_annotation.children[i];
      if ( ch.vref == flagName ) {
        res = ch;
        return res;
      }
    };
    return res;
  };
  hasFlag (flagName) {
    if ( false == this.has_vref_annotation ) {
      return false;
    }
    for ( let i = 0; i < this.vref_annotation.children.length; i++) {
      var ch = this.vref_annotation.children[i];
      if ( ch.vref == flagName ) {
        return true;
      }
    };
    return false;
  };
  setFlag (flagName) {
    if ( false == this.has_vref_annotation ) {
      this.vref_annotation = new CodeNode(this.code, this.sp, this.ep);
    }
    if ( this.hasFlag(flagName) ) {
      return;
    }
    const flag = new CodeNode(this.code, this.sp, this.ep);
    flag.vref = flagName;
    flag.value_type = 11;
    flag.parsed_type = flag.value_type;
    this.vref_annotation.children.push(flag);
    this.has_vref_annotation = true;
  };
  getTypeInformationString () {
    let s = "";
    if ( (this.vref.length) > 0 ) {
      s = ((s + "<vref:") + this.vref) + ">";
    } else {
      s = s + "<no.vref>";
    }
    if ( (this.type_name.length) > 0 ) {
      s = ((s + "<type_name:") + this.type_name) + ">";
    } else {
      s = s + "<no.type_name>";
    }
    if ( (this.array_type.length) > 0 ) {
      s = ((s + "<array_type:") + this.array_type) + ">";
    } else {
      s = s + "<no.array_type>";
    }
    if ( (this.key_type.length) > 0 ) {
      s = ((s + "<key_type:") + this.key_type) + ">";
    } else {
      s = s + "<no.key_type>";
    }
    switch (this.value_type ) { 
      case 5 : 
        s = s + "<value_type=Boolean>";
        break;
      case 4 : 
        s = s + "<value_type=String>";
        break;
    };
    return s;
  };
  getLine () {
    return this.code.getLine(this.sp);
  };
  getLineString (line_index) {
    return this.code.getLineString(line_index);
  };
  getColStartString () {
    return this.code.getColumnStr(this.sp);
  };
  getLineAsString () {
    const idx = this.getLine();
    const line_name_idx = idx + 1;
    return (((this.getFilename() + ", line ") + line_name_idx) + " : ") + this.code.getLineString(idx);
  };
  getSource () {
    if ( this.ep > this.sp ) {
      const start = this.sp;
      const end = this.ep;
      return this.code.code.substring(start, end );
    }
    return "";
  };
  getPositionalString () {
    if ( (this.ep > this.sp) && ((this.ep - this.sp) < 50) ) {
      let start = this.sp;
      let end = this.ep;
      start = start - 100;
      end = end + 50;
      if ( start < 0 ) {
        start = 0;
      }
      if ( end >= (this.code.code.length) ) {
        end = (this.code.code.length) - 1;
      }
      return this.code.code.substring(start, end );
    }
    return "";
  };
  isPrimitive () {
    switch (this.value_type ) { 
      case 2 : 
        return true;
      case 4 : 
        return true;
      case 3 : 
        return true;
      case 5 : 
        return true;
      case 14 : 
        return true;
      case 15 : 
        return true;
      case 13 : 
        return true;
    };
    return false;
  };
  getFirst () {
    return this.children[0];
  };
  getSecond () {
    return this.children[1];
  };
  getThird () {
    return this.children[2];
  };
  isSecondExpr () {
    if ( (this.children.length) > 1 ) {
      const second = this.children[1];
      if ( second.expression ) {
        return true;
      }
    }
    return false;
  };
  getOperator () {
    const s = "";
    if ( (this.children.length) > 0 ) {
      const fc = this.children[0];
      if ( fc.value_type == 11 ) {
        return fc.vref;
      }
    }
    return s;
  };
  getVRefAt (idx) {
    const s = "";
    if ( (this.children.length) > idx ) {
      const fc = this.children[idx];
      return fc.vref;
    }
    return s;
  };
  getStringAt (idx) {
    const s = "";
    if ( (this.children.length) > idx ) {
      const fc = this.children[idx];
      if ( fc.value_type == 4 ) {
        return fc.string_value;
      }
    }
    return s;
  };
  hasExpressionProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      return ann.expression;
    }
    return false;
  };
  getExpressionProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      return ann;
    }
    return ann;
  };
  hasIntProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      const fc = ann.children[0];
      if ( fc.value_type == 3 ) {
        return true;
      }
    }
    return false;
  };
  getIntProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      const fc = ann.children[0];
      if ( fc.value_type == 3 ) {
        return fc.int_value;
      }
    }
    return 0;
  };
  hasDoubleProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 2 ) {
        return true;
      }
    }
    return false;
  };
  getDoubleProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 2 ) {
        return ann.double_value;
      }
    }
    return 0.0;
  };
  hasStringProperty (name) {
    if ( false == (( typeof(this.props[name] ) != "undefined" && this.props.hasOwnProperty(name) )) ) {
      return false;
    }
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 4 ) {
        return true;
      }
    }
    return false;
  };
  getStringProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 4 ) {
        return ann.string_value;
      }
    }
    return "";
  };
  hasBooleanProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 5 ) {
        return true;
      }
    }
    return false;
  };
  getBooleanProperty (name) {
    const ann = this.props[name];
    if ( (typeof(ann) !== "undefined" && ann != null )  ) {
      if ( ann.value_type == 5 ) {
        return ann.boolean_value;
      }
    }
    return false;
  };
  isFirstTypeVref (vrefName) {
    if ( (this.children.length) > 0 ) {
      const fc = this.children[0];
      if ( fc.value_type == 11 ) {
        return true;
      }
    }
    return false;
  };
  isFirstVref (vrefName) {
    if ( (this.children.length) > 0 ) {
      const fc = this.children[0];
      if ( fc.vref == vrefName ) {
        return true;
      }
    }
    return false;
  };
  getString () {
    return this.code.code.substring(this.sp, this.ep );
  };
  walk () {
    switch (this.value_type ) { 
      case 2 : 
        console.log("Double : " + this.double_value);
        break;
      case 4 : 
        console.log("String : " + this.string_value);
        break;
    };
    if ( this.expression ) {
      console.log("(");
    } else {
      console.log(this.code.code.substring(this.sp, this.ep ));
    }
    for ( let i = 0; i < this.children.length; i++) {
      var item = this.children[i];
      (item).walk();
    };
    if ( this.expression ) {
      console.log(")");
    }
  };
}
class RangerStringTokenizer  {
  constructor(code_module) {
    this.__len = 0;
    this.i = 0;
    this.last_line_start = 0;     /** note: unused */
    this.current_line_index = 0;
    this.parents = [];
    this.paren_cnt = 0;
    this.get_op_pred = 0;     /** note: unused */
    this.had_error = false;
    this.disableOperators = false;     /** note: unused */
    this.buff = code_module.code;
    this.code = code_module;
    this.__len = (this.buff).length;
    this.rootNode = new CodeNode(this.code, 0, 0);
    this.rootNode.is_block_node = true;
    this.rootNode.expression = true;
    this.curr_node = this.rootNode;
    this.parents.push(this.curr_node);
    this.paren_cnt = 1;
  }
  joo (cm) {
    /** unused:  const ll = cm.code.length   **/ 
  };
  parse_raw_annotation () {
    let sp = this.i;
    let ep = this.i;
    this.i = this.i + 1;
    sp = this.i;
    ep = this.i;
    if ( this.i < this.__len ) {
      const a_node2 = new CodeNode(this.code, sp, ep);
      a_node2.expression = true;
      a_node2.row = this.current_line_index;
      this.curr_node = a_node2;
      this.parents.push(a_node2);
      this.i = this.i + 1;
      this.paren_cnt = this.paren_cnt + 1;
      this.parse(false);
      return a_node2;
    } else {
    }
    return new CodeNode(this.code, sp, ep);
  };
  skip_space (is_block_parent) {
    const s = this.buff;
    const did_break = false;
    if ( this.i >= this.__len ) {
      return true;
    }
    let c = s.charCodeAt(this.i );
    /** unused:  const bb = c == (46)   **/ 
    while ((this.i < this.__len) && (c <= 32)) {
      if ( c < 8 ) {
        this.i = this.__len;
        return true;
      }
      let had_break = false;
      while (((this.i < this.__len) && (c == 10)) || (c == 13)) {
        had_break = true;
        this.i = this.i + 1;
        if ( this.i >= this.__len ) {
          return true;
        }
        c = s.charCodeAt(this.i );
        if ( (c == 10) || (c == 13) ) {
        }
      };
      if ( had_break ) {
        this.current_line_index = this.current_line_index + 1;
      } else {
        this.i = 1 + this.i;
        if ( this.i >= this.__len ) {
          return true;
        }
        c = s.charCodeAt(this.i );
      }
    };
    return did_break;
  };
  end_expression () {
    this.i = 1 + this.i;
    if ( this.i >= this.__len ) {
      return false;
    }
    this.paren_cnt = this.paren_cnt - 1;
    if ( this.paren_cnt < 0 ) {
      console.log("Parser error ) mismatch");
    }
    this.parents.pop();
    if ( (typeof(this.curr_node) !== "undefined" && this.curr_node != null )  ) {
      this.curr_node.ep = this.i;
      this.curr_node.infix_operator = false;
    }
    if ( (this.parents.length) > 0 ) {
      this.curr_node = this.parents[((this.parents.length) - 1)];
    } else {
      this.curr_node = this.rootNode;
    }
    this.curr_node.infix_operator = false;
    return true;
  };
  getOperator (disabled) {
    if ( disabled ) {
      return 0;
    }
    const s = this.buff;
    if ( (this.i + 2) >= this.__len ) {
      return 0;
    }
    const c = s.charCodeAt(this.i );
    const c2 = s.charCodeAt((this.i + 1) );
    switch (c ) { 
      case 42 : 
        this.i = this.i + 1;
        return 14;
      case 47 : 
        this.i = this.i + 1;
        return 14;
      case 37 : 
        this.i = this.i + 1;
        return 14;
      case 43 : 
        this.i = this.i + 1;
        return 13;
      case 45 : 
        this.i = this.i + 1;
        return 13;
      case 60 : 
        if ( c2 == (61) ) {
          this.i = this.i + 2;
          return 11;
        }
        this.i = this.i + 1;
        return 11;
      case 62 : 
        if ( c2 == (61) ) {
          this.i = this.i + 2;
          return 11;
        }
        this.i = this.i + 1;
        return 11;
      case 33 : 
        if ( c2 == (61) ) {
          this.i = this.i + 2;
          return 10;
        }
        return 0;
      case 61 : 
        if ( c2 == (61) ) {
          this.i = this.i + 2;
          return 10;
        }
        this.i = this.i + 1;
        return 3;
      case 38 : 
        if ( c2 == (38) ) {
          this.i = this.i + 2;
          return 6;
        }
        return 0;
      case 124 : 
        if ( c2 == (124) ) {
          this.i = this.i + 2;
          return 5;
        }
        return 0;
      default: 
        break;
    };
    return 0;
  };
  isOperator (disabled) {
    if ( disabled ) {
      return 0;
    }
    const s = this.buff;
    if ( (this.i - 2) > this.__len ) {
      return 0;
    }
    const c = s.charCodeAt(this.i );
    const c2 = s.charCodeAt((this.i + 1) );
    switch (c ) { 
      case 42 : 
        return 1;
      case 47 : 
        return 14;
      case 43 : 
        return 13;
      case 37 : 
        return 14;
      case 45 : 
        return 13;
      case 60 : 
        if ( c2 == (61) ) {
          return 11;
        }
        return 11;
      case 62 : 
        if ( c2 == (61) ) {
          return 11;
        }
        return 11;
      case 33 : 
        if ( c2 == (61) ) {
          return 10;
        }
        return 0;
      case 61 : 
        if ( c2 == (61) ) {
          return 10;
        }
        return 3;
      case 38 : 
        if ( c2 == (38) ) {
          return 6;
        }
        return 0;
      case 124 : 
        if ( c2 == (124) ) {
          return 5;
        }
        return 0;
      default: 
        break;
    };
    return 0;
  };
  getOperatorPred (str, disabled) {
    if ( disabled ) {
      return 0;
    }
    switch (str ) { 
      case "<" : 
        return 11;
      case ">" : 
        return 11;
      case "<=" : 
        return 11;
      case ">=" : 
        return 11;
      case "==" : 
        return 10;
      case "!=" : 
        return 10;
      case "=" : 
        return 3;
      case "&&" : 
        return 6;
      case "||" : 
        return 5;
      case "+" : 
        return 13;
      case "-" : 
        return 13;
      case "%" : 
        return 14;
      case "*" : 
        return 14;
      case "/" : 
        return 14;
      default: 
        break;
    };
    return 0;
  };
  insert_node (p_node) {
    let push_target = this.curr_node;
    if ( this.curr_node.infix_operator ) {
      push_target = this.curr_node.infix_node;
      if ( push_target.to_the_right ) {
        push_target = push_target.right_node;
        p_node.parent = push_target;
      }
    }
    push_target.children.push(p_node);
  };
  parse_attributes () {
    const s = this.buff;
    let last_i = 0;
    const do_break = false;
    /** unused:  const attr_name = ""   **/ 
    let sp = this.i;
    let ep = this.i;
    let c = 0;
    let cc1 = 0;
    let cc2 = 0;
    cc1 = s.charCodeAt(this.i );
    while (this.i < this.__len) {
      last_i = this.i;
      while ((this.i < this.__len) && ((s.charCodeAt(this.i )) <= 32)) {
        this.i = 1 + this.i;
      };
      cc1 = s.charCodeAt(this.i );
      cc2 = s.charCodeAt((this.i + 1) );
      if ( this.i >= this.__len ) {
        break;
      }
      if ( cc1 == (62) ) {
        return do_break;
      }
      if ( (cc1 == (47)) && (cc2 == (62)) ) {
        this.i = 2 + this.i;
        return true;
      }
      sp = this.i;
      ep = this.i;
      c = s.charCodeAt(this.i );
      while ((this.i < this.__len) && ((((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57))) || (c == (95))) || (c == (45)))) {
        this.i = 1 + this.i;
        c = s.charCodeAt(this.i );
      };
      this.i = this.i - 1;
      const an_sp = sp;
      const an_ep = this.i;
      c = s.charCodeAt(this.i );
      while ((this.i < this.__len) && (c != (61))) {
        this.i = 1 + this.i;
        c = s.charCodeAt(this.i );
      };
      if ( c == (61) ) {
        this.i = 1 + this.i;
      }
      while ((this.i < this.__len) && ((s.charCodeAt(this.i )) <= 32)) {
        this.i = 1 + this.i;
      };
      if ( this.i >= this.__len ) {
        break;
      }
      c = s.charCodeAt(this.i );
      if ( c == (123) ) {
        const cNode = this.curr_node;
        const new_attr = new CodeNode(this.code, sp, ep);
        new_attr.value_type = 21;
        new_attr.parsed_type = new_attr.value_type;
        new_attr.vref = s.substring(an_sp, (an_ep + 1) );
        new_attr.string_value = s.substring(sp, ep );
        this.curr_node.attrs.push(new_attr);
        this.curr_node = new_attr;
        this.paren_cnt = this.paren_cnt + 1;
        const new_qnode = new CodeNode(this.code, this.i, this.i);
        new_qnode.expression = true;
        this.insert_node(new_qnode);
        this.parents.push(new_qnode);
        this.curr_node = new_qnode;
        this.i = 1 + this.i;
        this.parse(false);
        this.curr_node = cNode;
        continue;
      }
      if ( (c == 34) || (c == (39)) ) {
        this.i = this.i + 1;
        sp = this.i;
        ep = this.i;
        c = s.charCodeAt(this.i );
        while (((this.i < this.__len) && (c != 34)) && (c != (39))) {
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
        };
        ep = this.i;
        if ( (this.i < this.__len) && (ep > sp) ) {
          const new_attr_1 = new CodeNode(this.code, sp, ep);
          new_attr_1.value_type = 21;
          new_attr_1.parsed_type = new_attr_1.value_type;
          new_attr_1.vref = s.substring(an_sp, (an_ep + 1) );
          new_attr_1.string_value = s.substring(sp, ep );
          this.curr_node.attrs.push(new_attr_1);
        }
        this.i = 1 + this.i;
      }
      if ( last_i == this.i ) {
        this.i = 1 + this.i;
      }
    };
    return do_break;
  };
  parseXML () {
    const s = this.buff;
    let c = 0;
    /** unused:  const next_c = 0   **/ 
    /** unused:  const fc = 0   **/ 
    /** unused:  let new_node   **/ 
    let sp = this.i;
    let ep = this.i;
    let last_i = 0;
    let cc1 = 0;
    let cc2 = 0;
    let tag_depth = 0;
    while (this.i < this.__len) {
      last_i = this.i;
      if ( this.i >= (this.__len - 1) ) {
        break;
      }
      cc1 = s.charCodeAt(this.i );
      cc2 = s.charCodeAt((this.i + 1) );
      if ( cc1 == (123) ) {
        const cNode = this.curr_node;
        this.paren_cnt = this.paren_cnt + 1;
        const new_qnode = new CodeNode(this.code, this.i, this.i);
        new_qnode.expression = true;
        this.insert_node(new_qnode);
        this.parents.push(new_qnode);
        this.curr_node = new_qnode;
        this.i = 1 + this.i;
        this.parse(false);
        this.curr_node = cNode;
        continue;
      }
      if ( cc1 == (62) ) {
        this.i = this.i + 1;
        cc1 = s.charCodeAt(this.i );
        cc2 = s.charCodeAt((this.i + 1) );
        continue;
      }
      if ( ((47) == cc1) && (cc2 == (62)) ) {
        tag_depth = tag_depth - 1;
        this.i = this.i + 2;
        if ( tag_depth <= 0 ) {
          this.parents.pop();
          const p_cnt = this.parents.length;
          const last_parent = this.parents[(p_cnt - 1)];
          this.curr_node = last_parent;
          return;
        }
        continue;
      }
      if ( this.i >= this.__len ) {
        break;
      }
      if ( ((60) == cc1) && (cc2 == (47)) ) {
        tag_depth = tag_depth - 1;
        this.i = this.i + 2;
        sp = this.i;
        ep = this.i;
        c = s.charCodeAt(this.i );
        while (((this.i < this.__len) && (c > 32)) && (c != (62))) {
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
        };
        ep = this.i;
        this.parents.pop();
        const p_cnt_1 = this.parents.length;
        const last_parent_1 = this.parents[(p_cnt_1 - 1)];
        this.curr_node = last_parent_1;
        if ( tag_depth <= 0 ) {
          return;
        }
        continue;
      }
      if ( cc1 == (60) ) {
        this.i = this.i + 1;
        sp = this.i;
        ep = this.i;
        c = s.charCodeAt(this.i );
        while (((this.i < this.__len) && (c != (62))) && (((((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57))) || (c == 95)) || (c == 46)) || (c == 64))) {
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
        };
        tag_depth = tag_depth + 1;
        ep = this.i;
        const new_tag = s.substring(sp, ep );
        if ( typeof(this.curr_node) === "undefined" ) {
          const new_rnode = new CodeNode(this.code, sp, ep);
          new_rnode.vref = new_tag;
          new_rnode.value_type = 19;
          new_rnode.parsed_type = new_rnode.value_type;
          this.rootNode = new_rnode;
          this.parents.push(new_rnode);
          this.curr_node = new_rnode;
        } else {
          const new_node_2 = new CodeNode(this.code, sp, ep);
          new_node_2.vref = new_tag;
          new_node_2.value_type = 19;
          new_node_2.parsed_type = new_node_2.value_type;
          this.curr_node.children.push(new_node_2);
          new_node_2.parent = this.curr_node;
          this.parents.push(new_node_2);
          this.curr_node = new_node_2;
        }
        if ( this.parse_attributes() ) {
          this.parents.pop();
          const p_cnt_2 = this.parents.length;
          const last_parent_2 = this.parents[(p_cnt_2 - 1)];
          this.curr_node = last_parent_2;
          tag_depth = tag_depth - 1;
          if ( tag_depth <= 0 ) {
            return;
          }
          continue;
        }
        continue;
      }
      if ( (typeof(this.curr_node) !== "undefined" && this.curr_node != null )  ) {
        sp = this.i;
        ep = this.i;
        c = s.charCodeAt(this.i );
        while (((this.i < this.__len) && (c != (60))) && (c != (123))) {
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
        };
        ep = this.i;
        if ( ep > sp ) {
          const new_node_3 = new CodeNode(this.code, sp, ep);
          new_node_3.string_value = s.substring(sp, ep );
          new_node_3.value_type = 20;
          new_node_3.parsed_type = new_node_3.value_type;
          this.curr_node.children.push(new_node_3);
          new_node_3.parent = this.curr_node;
        }
      }
      if ( last_i == this.i ) {
        this.i = 1 + this.i;
      }
    };
  };
  parse (disable_ops) {
    const s = this.buff;
    let c = s.charCodeAt(0 );
    /** unused:  const next_c = 0   **/ 
    let fc = 0;
    let new_node;
    let sp = 0;
    let ep = 0;
    let last_i = 0;
    let had_lf = false;
    let disable_ops_set = disable_ops;
    while (this.i < this.__len) {
      if ( (typeof(this.curr_node) !== "undefined" && this.curr_node != null )  ) {
        if ( this.curr_node.value_type == 21 ) {
          return;
        }
        if ( this.curr_node.value_type == 19 ) {
          return;
        }
      }
      if ( this.had_error ) {
        break;
      }
      last_i = this.i;
      let is_block_parent = false;
      if ( had_lf ) {
        had_lf = false;
        this.end_expression();
        break;
      }
      if ( (typeof(this.curr_node) !== "undefined" && this.curr_node != null )  ) {
        if ( (typeof(this.curr_node.parent) !== "undefined" && this.curr_node.parent != null )  ) {
          const nodeParent = this.curr_node.parent;
          if ( nodeParent.is_block_node ) {
            is_block_parent = true;
          }
        }
      }
      if ( this.skip_space(is_block_parent) ) {
        break;
      }
      had_lf = false;
      c = s.charCodeAt(this.i );
      if ( this.i < this.__len ) {
        c = s.charCodeAt(this.i );
        if ( operatorsOfchar.isc95tokenc95limiter_2(c) ) {
          if ( this.curr_node.is_block_node == true ) {
            const new_expr_node = new CodeNode(this.code, sp, ep);
            new_expr_node.parent = this.curr_node;
            new_expr_node.expression = true;
            this.curr_node.children.push(new_expr_node);
            this.curr_node = new_expr_node;
            this.parents.push(new_expr_node);
            this.paren_cnt = 1 + this.paren_cnt;
            this.parse(disable_ops_set);
            continue;
          }
          const v = new CodeNode(this.code, this.i, this.i);
          v.vref = s.substring(this.i, (this.i + 1) );
          v.ns = [v.vref];
          v.parsed_type = 11;
          v.value_type = 11;
          this.curr_node.children.push(v);
          this.i = this.i + 1;
          continue;
        }
        if ( (60) == c ) {
          if ( (this.i + 1) < this.__len ) {
            const next_c_2 = s.charCodeAt((this.i + 1) );
            if ( ((65) < next_c_2) && ((122) > next_c_2) ) {
              /** unused:  const spos = this.i   **/ 
              this.parseXML();
              this.i = this.i + 1;
              continue;
            }
          }
          if ( this.i > 0 ) {
            const prev_c = s.charCodeAt((this.i - 1) );
            if ( (62) == prev_c ) {
            }
          }
        }
        if ( c == 59 ) {
          sp = this.i + 1;
          while ((this.i < this.__len) && ((s.charCodeAt(this.i )) > 31)) {
            this.i = 1 + this.i;
          };
          if ( this.i >= this.__len ) {
            break;
          }
          new_node = new CodeNode(this.code, sp, this.i);
          new_node.parsed_type = 12;
          new_node.value_type = 12;
          new_node.string_value = s.substring(sp, this.i );
          this.curr_node.comments.push(new_node);
          continue;
        }
        if ( this.i < (this.__len - 1) ) {
          fc = s.charCodeAt((this.i + 1) );
          if ( (c == 40) || (c == (123)) ) {
            this.paren_cnt = this.paren_cnt + 1;
            if ( typeof(this.curr_node) === "undefined" ) {
              this.rootNode = new CodeNode(this.code, this.i, this.i);
              this.curr_node = this.rootNode;
              this.curr_node.expression = true;
              this.parents.push(this.curr_node);
            } else {
              const new_qnode = new CodeNode(this.code, this.i, this.i);
              new_qnode.expression = true;
              this.insert_node(new_qnode);
              this.parents.push(new_qnode);
              this.curr_node = new_qnode;
            }
            if ( c == (123) ) {
              this.curr_node.is_block_node = true;
            }
            this.i = 1 + this.i;
            this.parse(disable_ops_set);
            continue;
          }
        }
        sp = this.i;
        ep = this.i;
        fc = s.charCodeAt(this.i );
        if ( (((fc == 45) && ((s.charCodeAt((this.i + 1) )) >= 46)) && ((s.charCodeAt((this.i + 1) )) <= 57)) || ((fc >= 48) && (fc <= 57)) ) {
          let is_double = false;
          sp = this.i;
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
          while ((this.i < this.__len) && ((((c >= 48) && (c <= 57)) || (c == (46))) || ((this.i == sp) && ((c == (43)) || (c == (45)))))) {
            if ( c == (46) ) {
              is_double = true;
            }
            this.i = 1 + this.i;
            c = s.charCodeAt(this.i );
          };
          ep = this.i;
          const new_num_node = new CodeNode(this.code, sp, ep);
          if ( is_double ) {
            new_num_node.parsed_type = 2;
            new_num_node.value_type = 2;
            new_num_node.double_value = (isNaN( parseFloat((s.substring(sp, ep ))) ) ? undefined : parseFloat((s.substring(sp, ep ))));
          } else {
            new_num_node.parsed_type = 3;
            new_num_node.value_type = 3;
            new_num_node.int_value = (isNaN( parseInt((s.substring(sp, ep ))) ) ? undefined : parseInt((s.substring(sp, ep ))));
          }
          this.insert_node(new_num_node);
          continue;
        }
        const str_limit = fc;
        const b_had_str = ((fc == 34) || (fc == 96)) || (fc == 39);
        if ( b_had_str ) {
          sp = this.i + 1;
          ep = sp;
          c = s.charCodeAt(this.i );
          let must_encode = false;
          while (this.i < this.__len) {
            this.i = 1 + this.i;
            c = s.charCodeAt(this.i );
            if ( c == str_limit ) {
              break;
            }
            if ( c == 92 ) {
              this.i = 1 + this.i;
              if ( this.i < this.__len ) {
                must_encode = true;
                c = s.charCodeAt(this.i );
              } else {
                break;
              }
            }
          };
          ep = this.i;
          if ( this.i < this.__len ) {
            let encoded_str = "";
            if ( must_encode ) {
              const subs = s.substring(sp, ep );
              const orig_str = subs;
              const str_length = orig_str.length;
              let ii = 0;
              while (ii < str_length) {
                const cc = orig_str.charCodeAt(ii );
                if ( cc == 92 ) {
                  const next_ch = orig_str.charCodeAt((ii + 1) );
                  switch (next_ch ) { 
                    case 34 : 
                      encoded_str = encoded_str + (String.fromCharCode(34));
                      break;
                    case 92 : 
                      encoded_str = encoded_str + (String.fromCharCode(92));
                      break;
                    case 47 : 
                      encoded_str = encoded_str + (String.fromCharCode(47));
                      break;
                    case 98 : 
                      encoded_str = encoded_str + (String.fromCharCode(8));
                      break;
                    case 102 : 
                      encoded_str = encoded_str + (String.fromCharCode(12));
                      break;
                    case 110 : 
                      encoded_str = encoded_str + (String.fromCharCode(10));
                      break;
                    case 114 : 
                      encoded_str = encoded_str + (String.fromCharCode(13));
                      break;
                    case 116 : 
                      encoded_str = encoded_str + (String.fromCharCode(9));
                      break;
                    case 117 : 
                      ii = ii + 4;
                      break;
                    default: 
                      break;
                  };
                  ii = ii + 2;
                } else {
                  encoded_str = encoded_str + (orig_str.substring(ii, (1 + ii) ));
                  ii = ii + 1;
                }
              };
            } else {
            }
            const new_str_node = new CodeNode(this.code, sp, ep);
            new_str_node.parsed_type = 4;
            new_str_node.value_type = 4;
            if ( must_encode ) {
              new_str_node.string_value = encoded_str;
            } else {
              new_str_node.string_value = s.substring(sp, ep );
            }
            this.insert_node(new_str_node);
            this.i = 1 + this.i;
            continue;
          }
        }
        if ( (((fc == (116)) && ((s.charCodeAt((this.i + 1) )) == (114))) && ((s.charCodeAt((this.i + 2) )) == (117))) && ((s.charCodeAt((this.i + 3) )) == (101)) ) {
          const new_true_node = new CodeNode(this.code, sp, sp + 4);
          new_true_node.value_type = 5;
          new_true_node.parsed_type = 5;
          new_true_node.boolean_value = true;
          this.insert_node(new_true_node);
          this.i = this.i + 4;
          continue;
        }
        if ( ((((fc == (102)) && ((s.charCodeAt((this.i + 1) )) == (97))) && ((s.charCodeAt((this.i + 2) )) == (108))) && ((s.charCodeAt((this.i + 3) )) == (115))) && ((s.charCodeAt((this.i + 4) )) == (101)) ) {
          const new_f_node = new CodeNode(this.code, sp, sp + 5);
          new_f_node.value_type = 5;
          new_f_node.parsed_type = 5;
          new_f_node.boolean_value = false;
          this.insert_node(new_f_node);
          this.i = this.i + 5;
          continue;
        }
        if ( fc == (64) ) {
          this.i = this.i + 1;
          sp = this.i;
          ep = this.i;
          c = s.charCodeAt(this.i );
          while (((((this.i < this.__len) && ((s.charCodeAt(this.i )) > 32)) && (c != 40)) && (c != 41)) && (c != (125))) {
            this.i = 1 + this.i;
            c = s.charCodeAt(this.i );
          };
          ep = this.i;
          if ( (this.i < this.__len) && (ep > sp) ) {
            const a_node2 = new CodeNode(this.code, sp, ep);
            const a_name = s.substring(sp, ep );
            if ( a_name == "noinfix" ) {
              disable_ops_set = true;
            }
            a_node2.expression = true;
            this.curr_node = a_node2;
            this.parents.push(a_node2);
            this.i = this.i + 1;
            this.paren_cnt = this.paren_cnt + 1;
            this.parse(disable_ops_set);
            let use_first = false;
            if ( 1 == (a_node2.children.length) ) {
              const ch1 = a_node2.children[0];
              use_first = ch1.isPrimitive();
            }
            if ( use_first ) {
              const theNode = a_node2.children.splice(0, 1).pop();
              this.curr_node.props[a_name] = theNode;
            } else {
              this.curr_node.props[a_name] = a_node2;
            }
            this.curr_node.prop_keys.push(a_name);
            continue;
          }
        }
        let ns_list = [];
        let last_ns = this.i;
        let ns_cnt = 1;
        let vref_had_type_ann = false;
        let vref_ann_node;
        let vref_end = this.i;
        if ( (((((this.i < this.__len) && ((s.charCodeAt(this.i )) > 32)) && (c != 58)) && (c != 40)) && (c != 41)) && (c != (125)) ) {
          if ( this.curr_node.is_block_node == true ) {
            const new_expr_node_1 = new CodeNode(this.code, sp, ep);
            new_expr_node_1.parent = this.curr_node;
            new_expr_node_1.expression = true;
            this.curr_node.children.push(new_expr_node_1);
            this.curr_node = new_expr_node_1;
            this.parents.push(new_expr_node_1);
            this.paren_cnt = 1 + this.paren_cnt;
            this.parse(disable_ops_set);
            continue;
          }
        }
        let op_c = 0;
        op_c = this.getOperator(disable_ops_set);
        const last_was_newline = false;
        if ( op_c > 0 ) {
        } else {
          while ((((((((this.i < this.__len) && ((s.charCodeAt(this.i )) != (96))) && operatorsOfchar.isc95notc95limiter_2((s.charCodeAt(this.i )))) && ((s.charCodeAt(this.i )) > 32)) && (c != 58)) && (c != 40)) && (c != 41)) && (c != (125))) {
            if ( this.i > sp ) {
              const is_opchar = this.isOperator(disable_ops_set);
              if ( is_opchar > 0 ) {
                break;
              }
            }
            this.i = 1 + this.i;
            c = s.charCodeAt(this.i );
            if ( c == (46) ) {
              ns_list.push(s.substring(last_ns, this.i ));
              last_ns = this.i + 1;
              ns_cnt = 1 + ns_cnt;
            }
            if ( (this.i > vref_end) && (c == (64)) ) {
              vref_had_type_ann = true;
              vref_end = this.i;
              vref_ann_node = this.parse_raw_annotation();
              c = s.charCodeAt(this.i );
              break;
            }
          };
        }
        ep = this.i;
        if ( vref_had_type_ann ) {
          ep = vref_end;
        }
        ns_list.push(s.substring(last_ns, ep ));
        c = s.charCodeAt(this.i );
        while (((this.i < this.__len) && (c <= 32)) && (false == last_was_newline)) {
          this.i = 1 + this.i;
          c = s.charCodeAt(this.i );
        };
        if ( (false == disable_ops_set) && (c == (58)) ) {
          this.i = this.i + 1;
          while ((this.i < this.__len) && ((s.charCodeAt(this.i )) <= 32)) {
            this.i = 1 + this.i;
          };
          let vt_sp = this.i;
          let vt_ep = this.i;
          c = s.charCodeAt(this.i );
          if ( c == (40) ) {
            const vann_arr2 = this.parse_raw_annotation();
            vann_arr2.expression = true;
            const new_expr_node_2 = new CodeNode(this.code, sp, vt_ep);
            new_expr_node_2.vref = s.substring(sp, ep );
            new_expr_node_2.ns = ns_list;
            new_expr_node_2.expression_value = vann_arr2;
            new_expr_node_2.parsed_type = 17;
            new_expr_node_2.value_type = 17;
            if ( vref_had_type_ann ) {
              new_expr_node_2.vref_annotation = vref_ann_node;
              new_expr_node_2.has_vref_annotation = true;
            }
            this.curr_node.children.push(new_expr_node_2);
            continue;
          }
          if ( c == (91) ) {
            this.i = this.i + 1;
            vt_sp = this.i;
            let hash_sep = 0;
            let had_array_type_ann = false;
            c = s.charCodeAt(this.i );
            while (((this.i < this.__len) && (c > 32)) && (c != 93)) {
              this.i = 1 + this.i;
              c = s.charCodeAt(this.i );
              if ( c == (58) ) {
                hash_sep = this.i;
              }
              if ( c == (64) ) {
                had_array_type_ann = true;
                break;
              }
            };
            vt_ep = this.i;
            if ( hash_sep > 0 ) {
              vt_ep = this.i;
              const type_name = s.substring((1 + hash_sep), vt_ep );
              const key_type_name = s.substring(vt_sp, hash_sep );
              const new_hash_node = new CodeNode(this.code, sp, vt_ep);
              new_hash_node.vref = s.substring(sp, ep );
              new_hash_node.ns = ns_list;
              new_hash_node.parsed_type = 7;
              new_hash_node.value_type = 7;
              new_hash_node.array_type = type_name;
              new_hash_node.key_type = key_type_name;
              if ( vref_had_type_ann ) {
                new_hash_node.vref_annotation = vref_ann_node;
                new_hash_node.has_vref_annotation = true;
              }
              if ( had_array_type_ann ) {
                const vann_hash = this.parse_raw_annotation();
                new_hash_node.type_annotation = vann_hash;
                new_hash_node.has_type_annotation = true;
              }
              new_hash_node.parent = this.curr_node;
              this.curr_node.children.push(new_hash_node);
              this.i = 1 + this.i;
              continue;
            } else {
              vt_ep = this.i;
              const type_name_1 = s.substring(vt_sp, vt_ep );
              const new_arr_node = new CodeNode(this.code, sp, vt_ep);
              new_arr_node.vref = s.substring(sp, ep );
              new_arr_node.ns = ns_list;
              new_arr_node.parsed_type = 6;
              new_arr_node.value_type = 6;
              new_arr_node.array_type = type_name_1;
              new_arr_node.parent = this.curr_node;
              this.curr_node.children.push(new_arr_node);
              if ( vref_had_type_ann ) {
                new_arr_node.vref_annotation = vref_ann_node;
                new_arr_node.has_vref_annotation = true;
              }
              if ( had_array_type_ann ) {
                const vann_arr = this.parse_raw_annotation();
                new_arr_node.type_annotation = vann_arr;
                new_arr_node.has_type_annotation = true;
                console.log("--> parsed ARRAY TYPE annotation");
              }
              this.i = 1 + this.i;
              continue;
            }
          }
          let had_type_ann = false;
          while ((this.i < this.__len) && operatorsOfchar.isc95notc95limiter_2(c)) {
            this.i = 1 + this.i;
            c = s.charCodeAt(this.i );
            if ( c == (64) ) {
              had_type_ann = true;
              break;
            }
          };
          if ( this.i < this.__len ) {
            vt_ep = this.i;
            /** unused:  const type_name_2 = s.substring(vt_sp, vt_ep )   **/ 
            const new_ref_node = new CodeNode(this.code, sp, ep);
            new_ref_node.vref = s.substring(sp, ep );
            new_ref_node.ns = ns_list;
            new_ref_node.parsed_type = 11;
            new_ref_node.value_type = 11;
            new_ref_node.type_name = s.substring(vt_sp, vt_ep );
            new_ref_node.parent = this.curr_node;
            if ( vref_had_type_ann ) {
              new_ref_node.vref_annotation = vref_ann_node;
              new_ref_node.has_vref_annotation = true;
            }
            this.curr_node.children.push(new_ref_node);
            if ( had_type_ann ) {
              const vann = this.parse_raw_annotation();
              new_ref_node.type_annotation = vann;
              new_ref_node.has_type_annotation = true;
            }
            continue;
          }
        } else {
          if ( (this.i < this.__len) && (ep > sp) ) {
            const new_vref_node = new CodeNode(this.code, sp, ep);
            new_vref_node.vref = s.substring(sp, ep );
            new_vref_node.parsed_type = 11;
            new_vref_node.value_type = 11;
            new_vref_node.ns = ns_list;
            new_vref_node.parent = this.curr_node;
            const op_pred = this.getOperatorPred(new_vref_node.vref, disable_ops_set);
            if ( new_vref_node.vref == "," ) {
              this.curr_node.infix_operator = false;
              continue;
            }
            let pTarget = this.curr_node;
            if ( this.curr_node.infix_operator ) {
              const iNode = this.curr_node.infix_node;
              if ( (op_pred > 0) || (iNode.to_the_right == false) ) {
                pTarget = iNode;
              } else {
                const rn = iNode.right_node;
                new_vref_node.parent = rn;
                pTarget = rn;
              }
            }
            pTarget.children.push(new_vref_node);
            if ( vref_had_type_ann ) {
              new_vref_node.vref_annotation = vref_ann_node;
              new_vref_node.has_vref_annotation = true;
            }
            if ( (this.i + 1) < this.__len ) {
              if ( ((s.charCodeAt((this.i + 1) )) == (40)) || ((s.charCodeAt((this.i + 0) )) == (40)) ) {
                if ( ((0 == op_pred) && this.curr_node.infix_operator) && (1 == (this.curr_node.children.length)) ) {
                }
              }
            }
            if ( ((op_pred > 0) && this.curr_node.infix_operator) || ((op_pred > 0) && ((this.curr_node.children.length) >= 2)) ) {
              if ( (op_pred == 3) && (2 == (this.curr_node.children.length)) ) {
                const n_ch = this.curr_node.children.splice(0, 1).pop();
                this.curr_node.children.push(n_ch);
              } else {
                if ( false == this.curr_node.infix_operator ) {
                  const if_node = new CodeNode(this.code, sp, ep);
                  this.curr_node.infix_node = if_node;
                  this.curr_node.infix_operator = true;
                  if_node.infix_subnode = true;
                  this.curr_node.value_type = 0;
                  this.curr_node.parsed_type = this.curr_node.value_type;
                  this.curr_node.expression = true;
                  if_node.expression = true;
                  let ch_cnt = this.curr_node.children.length;
                  let ii_1 = 0;
                  const start_from = ch_cnt - 2;
                  const keep_nodes = new CodeNode(this.code, sp, ep);
                  while (ch_cnt > 0) {
                    const n_ch_1 = this.curr_node.children.splice(0, 1).pop();
                    let p_target = if_node;
                    if ( (ii_1 < start_from) || n_ch_1.infix_subnode ) {
                      p_target = keep_nodes;
                    }
                    p_target.children.push(n_ch_1);
                    ch_cnt = ch_cnt - 1;
                    ii_1 = 1 + ii_1;
                  };
                  for ( let i2 = 0; i2 < keep_nodes.children.length; i2++) {
                    var keep = keep_nodes.children[i2];
                    this.curr_node.children.push(keep);
                  };
                  this.curr_node.children.push(if_node);
                }
                const ifNode = this.curr_node.infix_node;
                const new_op_node = new CodeNode(this.code, sp, ep);
                new_op_node.expression = true;
                new_op_node.parent = ifNode;
                let until_index = (ifNode.children.length) - 1;
                let to_right = false;
                const just_continue = false;
                if ( (ifNode.operator_pred > 0) && (ifNode.operator_pred < op_pred) ) {
                  to_right = true;
                }
                if ( (ifNode.operator_pred > 0) && (ifNode.operator_pred > op_pred) ) {
                  ifNode.to_the_right = false;
                }
                if ( (ifNode.operator_pred > 0) && (ifNode.operator_pred == op_pred) ) {
                  to_right = ifNode.to_the_right;
                }
                /** unused:  const opTarget = ifNode   **/ 
                if ( to_right ) {
                  const op_node = ifNode.children.splice(until_index, 1).pop();
                  const last_value = ifNode.children.splice((until_index - 1), 1).pop();
                  new_op_node.children.push(op_node);
                  new_op_node.children.push(last_value);
                } else {
                  if ( false == just_continue ) {
                    while (until_index > 0) {
                      const what_to_add = ifNode.children.splice(0, 1).pop();
                      new_op_node.children.push(what_to_add);
                      until_index = until_index - 1;
                    };
                  }
                }
                if ( to_right || (false == just_continue) ) {
                  ifNode.children.push(new_op_node);
                }
                if ( to_right ) {
                  ifNode.right_node = new_op_node;
                  ifNode.to_the_right = true;
                }
                ifNode.operator_pred = op_pred;
                continue;
              }
            }
            continue;
          }
        }
        if ( (c == 41) || (c == (125)) ) {
          if ( ((c == (125)) && is_block_parent) && ((this.curr_node.children.length) > 0) ) {
            this.end_expression();
          } else {
            this.i = 1 + this.i;
          }
          this.paren_cnt = this.paren_cnt - 1;
          if ( this.paren_cnt < 0 ) {
            break;
          }
          this.parents.pop();
          if ( (typeof(this.curr_node) !== "undefined" && this.curr_node != null )  ) {
            this.curr_node.ep = this.i;
          }
          if ( (this.parents.length) > 0 ) {
            this.curr_node = this.parents[((this.parents.length) - 1)];
          } else {
            this.curr_node = this.rootNode;
          }
          break;
        }
        if ( last_i == this.i ) {
          this.i = 1 + this.i;
        }
      }
    };
  };
}
class VectorIterator  {
  constructor() {
    this.idx = 0;
  }
  value () {
    return (this.vec).get(this.idx);
  };
  next () {
    const obj = new VectorIterator();
    obj.vec = this.vec;
    const idx_1 = this.idx + 1;
    obj.idx = idx_1;
    if ( this.vec.end >= idx_1 ) {
      let res;
      if ( typeof(this.vec.parent) === "undefined" ) {
        return res;
      }
      obj.vec = this.vec.parent;
    }
    return obj;
  };
}
class RNodeIterator  {
  constructor() {
    this.idx = 0;
  }
  value () {
    return (this.vec).get(this.idx);
  };
  next () {
    const idx_1 = this.idx + 1;
    if ( this.vec.end <= idx_1 ) {
      return this.parent;
    }
    const obj = new RNodeIterator();
    obj.vec = this.vec;
    obj.idx = idx_1;
    obj.parent = this.parent;
    return obj;
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
class IterTestClass  {
  constructor() {
    this.values = new Vector_int();
  }
  __CopySelf () {
    const res = new IterTestClass();
    res.values = this.values;
    return res;
  };
  set_values (new_value_of_values) {
    const res = this.__CopySelf();
    res.values = new_value_of_values;
    return res;
  };
}
class NodeRange  {
  constructor() {
  }
}
class BasicAST  {
  constructor() {
  }
  testIterator (testCtx) {
    console.log("--- iterator test ---");
    let obj = new IterTestClass();
    obj = (obj).set_values(operatorsOfVector_3.push_4(obj.values, 1));
    obj = (obj).set_values(operatorsOf_3.push_4(obj.values, 2));
    obj = (obj).set_values(operatorsOf_3.push_4(obj.values, 3));
    obj = (obj).set_values(operatorsOf_3.push_4(obj.values, 4));
    const iter = new VectorIterator();
    iter.vec = obj.values;
    console.log("First value == " + iter.value());
    const iter_2 = iter.next();
    console.log("Second value == " + iter_2.value());
    const res_ast = operatorsOfstring_5.createAST_6("\n\nClassDef = class (vref -> className) [[extends (vref ->extends)]]  [immutable serialize] {\n\n};\nSumOperator = (Expression '+' Expression);\nMulOperator = (Expression '*' Expression);\n\n( !b && !c )\n\nmyFn(a,b,c) {\n  a = \n  128 + 140 * ;\n  |> joo afd\n  |> jo asd\n}\n    ");
    operatorsOfRNode_12.walk_13(res_ast, ((item) => { 
      if( item instanceof RExpression ) /* union case */ {
        var node = item;
        let iter_3 = operatorsOf_3.nodec95iterator_16(node.children);
        console.log("--- iterator ---");
        let start = iter_3;
        let iter_list = [];
        let new_starts = false;
        while ((typeof(iter_3) !== "undefined" && iter_3 != null ) ) {
          if ( new_starts ) {
            start = iter_3;
            new_starts = false;
          }
          const value = iter_3.value();
          if( value instanceof RIntValue ) /* union case */ {
            var tag = value;
            console.log("... Int == " + tag.value);
          };
          if( value instanceof RVRefNode ) /* union case */ {
            var tag_1 = value;
            console.log("... VREF == " + tag_1.vref);
            if ( tag_1.vref == ";" ) {
              const newRange = new NodeRange();
              newRange.start = start;
              newRange.end = iter_3;
              iter_list.push(newRange);
              new_starts = true;
            }
          };
          if( value instanceof RExpression ) /* union case */ {
            var tag_2 = value;
            console.log("... EXRP with childcnt " + operatorsOf_3.size_16(tag_2.children));
          };
          if( value instanceof RBlockNode ) /* union case */ {
            var tag_3 = value;
            console.log("... BLOCK with childcnt " + operatorsOf_3.size_16(tag_3.children));
          };
          iter_3 = iter_3.next();
        };
        console.log("--- iterator ends ---, range cnt == " + (iter_list.length));
      };
    }));
  };
  writeFunction2 (inputWr) {
    let wr = inputWr;
    wr = operatorsOfCodeOutput_17.write_18(wr, "const myFnXX = () => {");
    wr = operatorsOf_17.nl_21(wr);
    wr = operatorsOf_17.indent_21(wr);
    wr = operatorsOf_17.write_18(wr, "return x + 1 ");
    wr = operatorsOf_17.nl_21(wr);
    wr = operatorsOf_17.unindent_21(wr);
    wr = operatorsOf_17.write_18(wr, "}");
    wr = operatorsOf_17.nl_21(wr);
    return wr;
  };
  writeFunctionBody (inputWr) {
    let wr = inputWr;
    const items = [1, 2, 3, 4, 5];
    operatorsOf_9.forEach_22(items, ((item, index) => { 
      wr = operatorsOf_17.write_18(wr, ("let x = " + item));
      wr = operatorsOf_17.nl_21(wr);
      wr = this.writeFunction2(wr);
    }));
    wr = operatorsOf_17.write_18(wr, "\n// The function body\nreturn x + 1 ");
    return wr;
  };
  testCodeWriter (testCtx) {
    let out = new CodeOutput();
    out = (out).set_settings(new WriterSettings());
    out = (out).set_tags(operatorsOfMap_23.set_24(out.tags, "imports", operatorsOf_17.fork_21(out)));
    let tagRef = new WriterTag();
    tagRef = (tagRef).set_name("imports");
    out = (out).set_slices(operatorsOf_3.push_20(out.slices, (tagRef)));
    out = operatorsOf_17.write_18(out, "\nfunction foobar() {\n\n}   \n");
    out = operatorsOf_17.write_18(out, "const myFn = () => {");
    out = operatorsOf_17.nl_21(out);
    out = operatorsOf_17.indent_21(out);
    out = this.writeFunctionBody(out);
    out = operatorsOf_17.nl_21(out);
    out = operatorsOf_17.unindent_21(out);
    out = operatorsOf_17.write_18(out, "}");
    out = operatorsOf_17.nl_21(out);
    let imp = operatorsOf_23.get_25(out.tags, "imports");
    imp = operatorsOf_17.write_18(imp, "import xyz from foobardom");
    imp = operatorsOf_17.nl_21(imp);
    out = (out).set_tags(operatorsOf_23.set_24(out.tags, "imports", imp));
    let imp_2 = operatorsOf_23.get_25(out.tags, "imports");
    imp_2 = operatorsOf_17.write_18(imp_2, "import foo from bar");
    imp_2 = operatorsOf_17.nl_21(imp_2);
    out = (out).set_tags(operatorsOf_23.set_24(out.tags, "imports", imp_2));
    const result = operatorsOf_17.getString_26(out, 0, "");
    console.log("--> got ");
    console.log(result);
  };
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
      operatorsOf_3.forEach_14(b.children, ((item) => { 
        subCtx = (subCtx).set_activeNode(item);
        subCtx = this.walkNode(subCtx);
        if ( (typeof(subCtx.activeNode) !== "undefined" && subCtx.activeNode != null )  ) {
          new_children.push(subCtx.activeNode);
        }
      }));
      operatorsOf_9.forEach_33(new_children, ((item, index) => { 
        res = (res).set_children(operatorsOf_3.push_11(res.children, item));
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
      let myVar = operatorsOf_23.get_34(newCtx_1.variables, b_3.name);
      if ( (typeof(myVar) !== "undefined" && myVar != null )  ) {
        const defined_here = operatorsOf_23.get_34(newCtx_1.defined_vars, b_3.name);
        if ( (typeof(defined_here) !== "undefined" && defined_here != null )  ) {
        }
        if ( ((typeof(ctx.outerBlock) !== "undefined" && ctx.outerBlock != null ) ) && (typeof(defined_here) === "undefined") ) {
          const outerVar = operatorsOf_23.get_34(ctx.outerBlock.variables, b_3.name);
          if ( (typeof(outerVar) !== "undefined" && outerVar != null )  ) {
            newCtx_1 = (newCtx_1).set_captured_vars(operatorsOf_23.set_35(newCtx_1.captured_vars, b_3.name, (myVar)));
          }
        }
        const value = myVar.value;
        if( value instanceof RType_Literal ) /* union case */ {
          var x = value;
          x = (x).set_int_value((x.int_value + 1));
        };
        myVar = (myVar).set_read_cnt((myVar.read_cnt + 1));
        myVar = (myVar).set_write_cnt((myVar.write_cnt + 1));
        newCtx_1 = (newCtx_1).set_variables(operatorsOf_23.set_35(newCtx_1.variables, b_3.name, (myVar)));
      } else {
        let err = new RError();
        err = (err).set_text(("Undefined variable " + b_3.name));
        newCtx_1 = (newCtx_1).set_errors(operatorsOf_3.push_36(newCtx_1.errors, (err)));
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
      newCtx_2 = (newCtx_2).set_variables(operatorsOf_23.set_35(newCtx_2.variables, b_4.name, v));
      newCtx_2 = (newCtx_2).set_defined_vars(operatorsOf_23.set_35(newCtx_2.defined_vars, b_4.name, v));
      return newCtx_2;
    };
    return ctx;
  };
  testBlockAsReturn () {
    const b = operatorsOf_38.rc46block_39([operatorsOf_5.rc46def_37("x", "int"), operatorsOf_5.rc46def_37("y", "int"), operatorsOf_38.rc46expr_39([operatorsOf_5.rc46op_6("+"), operatorsOf_5.rc46vref_6("x"), operatorsOf_5.rc46vref_6("y")])]);
    return b;
  };
  testFnBlock () {
    const body = operatorsOf_38.rc46block_39([operatorsOf_38.rc46expr_39([operatorsOf_5.rc46op_6("return"), operatorsOf_38.rc46expr_39([operatorsOf_5.rc46op_6("+"), operatorsOf_5.rc46vref_6("x"), operatorsOf_5.rc46vref_6("y")])])]);
    const params = [operatorsOf_5.rc46param_37("x", "int"), operatorsOf_5.rc46param_37("y", "int")];
    const fnNode = operatorsOf_5.rc46fn_40("add", "int", params, body);
    return fnNode;
  };
  testSimpleInfix (infixName) {
    const plusop = operatorsOf_5.opc46collection_48(infixName, [operatorsOf_5.opc46def_43("js", "", [operatorsOf_5.opc46param_37("x", "int"), operatorsOf_5.opc46param_37("y", "int")], [operatorsOfint_41.cmdc46param_42(1), operatorsOf_5.cmdc46text_6(((" " + infixName) + " ")), operatorsOf_41.cmdc46param_42(2)])]);
    return plusop;
  };
  createJSString (opDef) {
    let str = "";
    if( opDef instanceof ROperatorCollection ) /* union case */ {
      var op = opDef;
      const es6Op = operatorsOf_23.get_51(op.langs, "js");
      if ( (typeof(es6Op) !== "undefined" && es6Op != null )  ) {
        const op_1 = es6Op;
        operatorsOf_3.forEach_52(op_1.cmds, ((item) => { 
          if( item instanceof ROpCmdWriteText ) /* union case */ {
            var writeTxt = item;
            str = str + writeTxt.text;
          };
          if( item instanceof ROpCmdParam ) /* union case */ {
            var fnParam = item;
            str = ((str + "<param ") + fnParam.index) + ">";
          };
        }));
      }
    };
    return str;
  };
  createBlock (testCtx) {
    testCtx.msg("Test Creating Blocks manually");
    const b = operatorsOf_38.rc46block_39([operatorsOf_5.rc46def_37("x", "int"), operatorsOf_38.rc46expr_39([operatorsOf_5.rc46op_6("+"), operatorsOf_5.rc46vref_6("x"), operatorsOf_5.rc46vref_6("y")])]);
    let case_cnt = 0;
    if( b instanceof RBlockNode ) /* union case */ {
      var bb = b;
      (testCtx).assert(operatorsOf_3.size_16(bb.children) == 2, "There should be two children for the block");
      case_cnt = case_cnt + 1;
    };
    const b2 = this.testBlockAsReturn();
    if( b2 instanceof RBlockNode ) /* union case */ {
      var bb_1 = b2;
      (testCtx).assert(operatorsOf_3.size_16(bb_1.children) == 3, "There should be 3 children for the block");
      testCtx.msg("The Second Block appeared to be OK");
      case_cnt = case_cnt + 1;
    };
    (testCtx).assert(case_cnt == 2, "Two cases should be run");
    const fnTest = this.testFnBlock();
    if( fnTest instanceof RFunction ) /* union case */ {
      var f = fnTest;
      (testCtx).assert(f.name == "add", "Function name should be Add");
      (testCtx).assert(operatorsOf_3.size_16(f.params) == 2, "Function has two params");
      const fbody = f.body;
      if( fbody instanceof RBlockNode ) /* union case */ {
        var fnBody = fbody;
        testCtx.msg("Function has a body, good");
      };
    };
    testCtx.msg("Testing function op creation");
    let ctx = new writerCtx();
    const opDef = this.testSimpleInfix("+");
    ctx = (ctx).set_operators(operatorsOf_23.set_54(ctx.operators, "-", this.testSimpleInfix("-")));
    ctx = (ctx).set_operators(operatorsOf_23.set_54(ctx.operators, "*", this.testSimpleInfix("*")));
    ctx = (ctx).set_operators(operatorsOf_23.set_54(ctx.operators, "/", this.testSimpleInfix("/")));
    let cnt = 0;
    if( opDef instanceof ROperatorCollection ) /* union case */ {
      var op = opDef;
      cnt = cnt + 1;
      (testCtx).assert(op.name == "+", "Op name should be +");
      const es6Op = operatorsOf_23.get_51(op.langs, "js");
      if ( (typeof(es6Op) !== "undefined" && es6Op != null )  ) {
        const op_1 = es6Op;
        cnt = cnt + 1;
        (testCtx).assert(operatorsOf_3.size_55(op_1.params) == 2, "+ Op has two params");
        (testCtx).assert(operatorsOf_3.size_56(op_1.cmds) == 3, "+ Op has three commands");
        let str = "";
        operatorsOf_3.forEach_52(op_1.cmds, ((item) => { 
          if( item instanceof ROpCmdWriteText ) /* union case */ {
            var writeTxt = item;
            str = str + writeTxt.text;
          };
          if( item instanceof ROpCmdParam ) /* union case */ {
            var fnParam = item;
            str = ((str + "<param ") + fnParam.index) + ">";
          };
        }));
        (testCtx).assert(str == "<param 1> + <param 2>", "incorrect command output for +");
        testCtx.msg("code output " + str);
      }
    };
    (testCtx).assert(cnt == 2, "All op tests were not run");
    if( opDef instanceof ROperatorCollection ) /* union case */ {
      var op_2 = opDef;
      ctx = (ctx).set_operators(operatorsOf_23.set_54(ctx.operators, op_2.name, opDef));
      const findOp = operatorsOf_23.get_57(ctx.operators, "+");
      (testCtx).assert((typeof(findOp) !== "undefined" && findOp != null ) , "+ OP was not found from ctx");
      if ( (typeof(findOp) !== "undefined" && findOp != null )  ) {
        testCtx.msg("+ op was in context");
      }
      if ( (typeof(operatorsOf_23.get_57(ctx.operators, "-")) !== "undefined" && operatorsOf_23.get_57(ctx.operators, "-") != null )  ) {
        testCtx.msg("- op was in context");
        const minusStr = this.createJSString((operatorsOf_23.get_57(ctx.operators, "-")));
        (testCtx).assert(minusStr == "<param 1> - <param 2>", "incorrect command output for -");
        testCtx.msg(minusStr);
      }
    };
  };
  testClassifier (ctx) {
    let subCtx = ctx;
    if ( typeof(ctx.activeNode) === "undefined" ) {
      return subCtx;
    }
    const ast = ctx.activeNode;
    if( ast instanceof RBlockNode ) /* union case */ {
      var node = ast;
      let new_children = [];
      let res = new RBlockNode();
      res = (res).set_name(node.name);
      const emptyCtx = new writerCtx();
      subCtx = (subCtx).set_outerBlock(ctx);
      subCtx = (subCtx).set_defined_vars(emptyCtx.defined_vars);
      res = (res).set_startCtx(subCtx);
      operatorsOf_3.forEach_14(node.children, ((item) => { 
        subCtx = (subCtx).set_activeNode(item);
        subCtx = this.testClassifier(subCtx);
        if ( (typeof(subCtx.activeNode) !== "undefined" && subCtx.activeNode != null )  ) {
          new_children.push(subCtx.activeNode);
        }
      }));
      operatorsOf_9.forEach_33(new_children, ((item, index) => { 
        res = (res).set_children(operatorsOf_3.push_11(res.children, item));
      }));
      res = (res).set_endCtx(subCtx);
      subCtx = (subCtx).set_activeNode((res));
      subCtx = (subCtx).set_captured_vars(ctx.captured_vars);
      subCtx = (subCtx).set_defined_vars(ctx.defined_vars);
      return subCtx;
    };
    if( ast instanceof RExpression ) /* union case */ {
      var node_1 = ast;
      if ( operatorsOf_3.size_16(node_1.children) >= 3 ) {
        const fc = operatorsOf_3.at_15(node_1.children, 0);
        const second = operatorsOf_3.at_15(node_1.children, 1);
        if( fc instanceof RVRefNode ) /* union case */ {
          var classTag = fc;
          if ( classTag.vref == "class" ) {
            if( second instanceof RVRefNode ) /* union case */ {
              var classNameTag = second;
              let maybe = new RMaybeClass();
              maybe = (maybe).set_className(classNameTag.vref);
              maybe = (maybe).set_node(ast);
              subCtx = (subCtx).set_activeNode((maybe));
              return subCtx;
            };
          }
          if ( classTag.vref == "CREATE" ) {
            let maybe_1 = new RMaybeSQL();
            maybe_1 = (maybe_1).set_command(classTag.vref);
            maybe_1 = (maybe_1).set_node(ast);
            subCtx = (subCtx).set_activeNode((maybe_1));
            return subCtx;
          }
        };
      }
      let new_children_1 = [];
      let res_1 = new RExpression();
      operatorsOf_3.forEach_14(node_1.children, ((item) => { 
        subCtx = (subCtx).set_activeNode(item);
        subCtx = this.testClassifier(subCtx);
        if ( (typeof(subCtx.activeNode) !== "undefined" && subCtx.activeNode != null )  ) {
          new_children_1.push(subCtx.activeNode);
        }
      }));
      operatorsOf_9.forEach_33(new_children_1, ((item, index) => { 
        res_1 = (res_1).set_children(operatorsOf_3.push_11(res_1.children, item));
      }));
      res_1 = (res_1).set_endCtx(subCtx);
      subCtx = (subCtx).set_activeNode((res_1));
      return subCtx;
    };
    if( ast instanceof RVRefNode ) /* union case */ {
      var node_2 = ast;
    };
    return subCtx;
  };
  testTokenizer (testCtx) {
    const testCode = "\n \nCREATE TABLE article (\n  article_id bigserial primary key,\n  article_name varchar(20) NOT NULL,\n  article_desc text NOT NULL,\n  date_added timestamp default NULL\n); \n\nlet myValue = (CREATE TABLE second_article (\n  article_id bigserial primary key,\n  article_name varchar(20) NOT NULL,\n  article_desc text NOT NULL,\n  date_added timestamp default NULL\n))\n\ngql {\n  get_items {\n    name\n    count\n    related {\n      name\n    }\n  }\n}\n\n (sql SELECT firstname as name1, lastname as name2 FROM user WHERE user.created > 10 AND user.is_active = true\n        GROUP BY lastname\n )\n\n // Note: bug in simple tokenizer...\n const mycompo = x => <div>{x}</div>\n const mycompo = x => <div value={\"what?\"}> hello {x} </div>\n\n const myFn = x => x + 1   \n const myFn = x => { return x + 1 }   \n const myFn = x => ( return x + 1 )   \n\n class myClass extends someOhter {\n   fn OK ( x:(z:int h:int) -> int) {\n\n   }\n }\n\n FunctionArgs = (stream separated by ',' {\n  (vref -> name) ':' ( typedef -> value_typedef ) ,\n  (vref -> name) ':' ( typedef -> value_typedef ) '=' (TokenExpression -> default_value) ,\n  ObjectExpressionAsArg\n})\n    ";
    const code = new SourceCode(testCode);
    const t = new RangerStringTokenizer(code);
    t.parse(true);
    const root = t.rootNode;
    const res_ast = operatorsOf_7.createAST_8(root);
    let out = new CodeOutput();
    out = (out).set_settings(new WriterSettings());
    console.log("--- ast out --- ");
    console.log(operatorsOf_17.getString_21(operatorsOf_12.print_58(res_ast, out)));
    let ctx = new writerCtx();
    ctx = (ctx).set_activeNode(res_ast);
    const resCtx = this.testClassifier(ctx);
    if ( (typeof(resCtx.activeNode) !== "undefined" && resCtx.activeNode != null )  ) {
      console.log("... did walk");
      const node = resCtx.activeNode;
      operatorsOf_12.walk_13(node, ((item) => { 
        if( item instanceof RMaybeClass ) /* union case */ {
          var n = item;
          console.log("Maybe Class == " + n.className);
        };
        if( item instanceof RMaybeSQL ) /* union case */ {
          var n_1 = item;
          console.log("Maybe SQL == " + n_1.command);
          let out_2 = new CodeOutput();
          out_2 = (out_2).set_settings(new WriterSettings());
          console.log(operatorsOf_17.getString_21(operatorsOf_12.print_58((n_1.node), out_2)));
        };
      }));
    }
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
    ctx = (ctx).set_defined_types(operatorsOf_23.set_59(ctx.defined_types, "Vector<T>", (genTrait1)));
    let intType = new RType_Scalar();
    intType = (intType).set_bits(64);
    ctx = (ctx).set_defined_types(operatorsOf_23.set_59(ctx.defined_types, "int", (intType)));
    let en = new RType_Enum();
    en = (en).set_name("RValueEnum");
    en = (en).set_keys(operatorsOf_3.push_19(en.keys, "Int"));
    en = (en).set_keys(operatorsOf_3.push_19(en.keys, "String"));
    en = (en).set_keys(operatorsOf_3.push_19(en.keys, "Boolean"));
    en = (en).set_keys(operatorsOf_3.push_19(en.keys, "Double"));
    ctx = (ctx).set_defined_types(operatorsOf_23.set_59(ctx.defined_types, "RValueEnum", (en)));
    let someClass = new RType_Class();
    someClass = (someClass).set_name("MyClass");
    let xVal = new RType_Variable();
    xVal = (xVal).set_name("x");
    xVal = (xVal).set_value_type((operatorsOf_23.get_60(ctx.defined_types, "int")));
    someClass = (someClass).set_variables(operatorsOf_23.set_61(someClass.variables, "x", xVal));
    ctx = (ctx).set_defined_types(operatorsOf_23.set_59(ctx.defined_types, "MyClass", (someClass)));
    let objInstance = new RObjectInstance();
    objInstance = (objInstance).set_objectType((operatorsOf_23.get_60(ctx.defined_types, "MyClass")));
    let objRef = new RObjectReference();
    objRef = (objRef).set_objInstance(objInstance);
    let vd = new RDefVariable();
    vd = (vd).set_name("obj");
    vd = (vd).set_typename("");
    vd = (vd).set_value((objRef));
    block = (block).set_children(operatorsOf_3.push_11(block.children, (vd)));
    ctx = (ctx).set_state((ctx.state).set_is_function(true));
    let vd_2 = new RDefVariable();
    vd_2 = (vd_2).set_name("innerHTML");
    vd_2 = (vd_2).set_typename("string");
    vd_2 = (vd_2).set_value((operatorsOf_5.literal_6("<div/>")));
    block = (block).set_children(operatorsOf_3.push_11(block.children, (vd_2)));
    let nn = new RParsedNode();
    nn = (nn).set_value("The Node 1");
    block = (block).set_children(operatorsOf_3.push_11(block.children, (nn)));
    let nn_2 = new RParsedNode();
    nn_2 = (nn_2).set_value("The Node 2");
    block = (block).set_children(operatorsOf_3.push_11(block.children, (nn_2)));
    let nn_3 = new RParsedNode();
    nn_3 = (nn_3).set_value("The Node 3");
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (nn_3)));
    let vd_3 = new RDefVariable();
    vd_3 = (vd_3).set_name("FXZ");
    vd_3 = (vd_3).set_typename("string");
    vd_3 = (vd_3).set_value((operatorsOf_5.literal_6("FOOBARDOM")));
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (vd_3)));
    const expr1 = new RExpression();
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (expr1)));
    let vd_4 = new RDefVariable();
    vd_4 = (vd_4).set_name("X");
    vd_4 = (vd_4).set_value((operatorsOf_41.literal_42(1234)));
    block = (block).set_children(operatorsOf_3.push_11(block.children, (vd_4)));
    let vd_5 = new RDefVariable();
    vd_5 = (vd_5).set_name("notused");
    vd_5 = (vd_5).set_value((operatorsOf_41.literal_42(55)));
    block3 = (block3).set_children(operatorsOf_3.push_11(block3.children, (vd_5)));
    let incCmd = new RIncExpression();
    incCmd = (incCmd).set_name("X");
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (incCmd)));
    let vd2 = new RDefVariable();
    vd2 = (vd2).set_name("Y");
    vd2 = (vd2).set_value((operatorsOf_41.literal_42(24)));
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (vd2)));
    let incCmd_2 = new RIncExpression();
    incCmd_2 = (incCmd_2).set_name("Y");
    block2 = (block2).set_children(operatorsOf_3.push_11(block2.children, (incCmd_2)));
    let incCmd_3 = new RIncExpression();
    incCmd_3 = (incCmd_3).set_name("ThisVarItIs");
    block3 = (block3).set_children(operatorsOf_3.push_11(block3.children, (incCmd_3)));
    block = (block).set_children(operatorsOf_3.push_11(block.children, (block2)));
    block = (block).set_children(operatorsOf_3.push_11(block.children, (block3)));
    ctx = (ctx).set_activeNode((block));
    ctx = this.walkNode(ctx);
    (testCtx).assert((operatorsOf_23.keys_62(ctx.variables).length) == 6, "ctx should have definex 6 variables");
    operatorsOf_23.forEach_63(ctx.variables, ((item, index) => { 
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
        operatorsOf_23.forEach_63(b.startCtx.variables, ((item, index) => { 
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
        operatorsOf_23.forEach_63(b.endCtx.variables, ((item, index) => { 
          if ( (typeof(item.value) !== "undefined" && item.value != null )  ) {
            const v_1 = item.value;
            if( v_1 instanceof RType_Literal ) /* union case */ {
              var x_2 = v_1;
            };
          }
        }));
        operatorsOf_3.forEach_14(b.children, ((item) => { 
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
    (testCtx).assert(operatorsOf_3.size_64(ctx.errors) == 1, "Error count should be one");
    operatorsOf_3.forEach_65(ctx.errors, ((item) => { 
      if( item instanceof RError ) /* union case */ {
        var e_1 = item;
      };
    }));
    operatorsOf_9.forEach_29(operatorsOf_23.keys_67(ctx.defined_types), ((item, index) => { 
      const t = operatorsOf_23.get_60(ctx.defined_types, item);
      if( t instanceof RType_Class ) /* union case */ {
        var cl = t;
        operatorsOf_9.forEach_29(operatorsOf_23.keys_68(cl.variables), ((item, index) => { 
        }));
      };
    }));
  };
}
class testrunner  {
  constructor() {
  }
}
class Map_string_ROperatorDef  {
  constructor() {
    this.elements = {};
  }
}
class Vector_ROperatorParam  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_ROperatorParam();
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
      const res = new Vector_ROperatorParam();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_ROperatorParam();
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
    let res = new Vector_ROperatorParam();
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
class Vector_ROpNode  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_ROpNode();
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
      const res = new Vector_ROpNode();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_ROpNode();
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
    let res = new Vector_ROpNode();
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
class Map_string_ROpNode  {
  constructor() {
    this.elements = {};
  }
}
class Map_string_CodeOutput  {
  constructor() {
    this.elements = {};
  }
}
class Vector_WriterCmd  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_WriterCmd();
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
      const res = new Vector_WriterCmd();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_WriterCmd();
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
    let res = new Vector_WriterCmd();
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
class Vector_int  {
  constructor() {
    this.start = 0;
    this.cardinality = 3;
    this.end = 0;
    this.elements = [];
  }
  localCopy () {
    const obj = new Vector_int();
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
      const res = new Vector_int();
      res.start = this.end;
      res.end = this.end + 1;
      res.parent = this;
      res.cardinality = this.cardinality + 1;
      res.elements = new Array(res.cardinality);
      res.elements[0] = item;
      return res;
    }
    const res_1 = new Vector_int();
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
    let res = new Vector_int();
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
class operatorsOfchar  {
  constructor() {
  }
}
operatorsOfchar.isc95tokenc95limiter_2 = function(c) {
  return (((((((((((((((((c == (58)) || (c == (91))) || (c == (33))) || (c == (93))) || (c == (94))) || (c == (43))) || (c == (45))) || (c == (47))) || (c == (42))) || (c == (38))) || (c == (61))) || (c == (60))) || (c == (62))) || (c == (59))) || (c == (124))) || (c == (37))) || (c == (46))) || (c == (44));
};
operatorsOfchar.isc95notc95limiter_2 = function(c) {
  return ((((((((((((((((((((c > 32) && (c != (59))) && (c != (91))) && (c != (93))) && (c != (94))) && (c != (38))) && (c != (41))) && (c != (61))) && (c != (33))) && (c != (41))) && (c != (37))) && (c != (43))) && (c != (45))) && (c != (47))) && (c != (42))) && (c != (123))) && (c != (125))) && (c != (60))) && (c != (62))) && (c != (46))) && (c != (44));
};
class operatorsOfVector_3  {
  constructor() {
  }
}
operatorsOfVector_3.push_4 = function(__self, item) {
  return __self.add(item);
};
class operatorsOf_3  {
  constructor() {
  }
}
operatorsOf_3.push_4 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.push_11 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.forEach_14 = function(__self, cb) {
  const cnt = (__self).count();
  let i_1 = 0;
  while (i_1 < cnt) {
    const item = operatorsOf_3.itemAt_15(__self, i_1);
    cb(item);
    i_1 = i_1 + 1;
  };
};
operatorsOf_3.itemAt_15 = function(__self, idx) {
  const val = (__self).get(idx);
  return val;
};
operatorsOf_3.nodec95iterator_16 = function(from) {
  let obj = new RNodeIterator();
  obj.vec = from;
  obj.idx = from.start;
  while ((typeof(obj.vec.parent) !== "undefined" && obj.vec.parent != null ) ) {
    const newIter = new RNodeIterator();
    newIter.vec = obj.vec.parent;
    newIter.idx = obj.vec.parent.start;
    newIter.parent = obj;
    obj = newIter;
  };
  return obj;
};
operatorsOf_3.size_16 = function(__self) {
  return (__self).count();
};
operatorsOf_3.push_19 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.push_20 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.forEach_27 = function(__self, cb) {
  const cnt_1 = (__self).count();
  let i_5 = 0;
  while (i_5 < cnt_1) {
    const item_1 = operatorsOf_3.itemAt_28(__self, i_5);
    cb(item_1);
    i_5 = i_5 + 1;
  };
};
operatorsOf_3.itemAt_28 = function(__self, idx) {
  const val_1 = (__self).get(idx);
  return val_1;
};
operatorsOf_3.map_31 = function(__self, cb) {
  let res_2 = [];
  const cnt_3 = (__self).count();
  let i_7 = 0;
  while (i_7 < cnt_3) {
    const item_2 = operatorsOf_3.itemAt_32(__self, i_7);
    res_2.push(cb(item_2));
    i_7 = i_7 + 1;
  };
  return res_2;
};
operatorsOf_3.itemAt_32 = function(__self, idx) {
  const val_2 = (__self).get(idx);
  return val_2;
};
operatorsOf_3.push_36 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.push_45 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.push_47 = function(__self, item) {
  return __self.add(item);
};
operatorsOf_3.forEach_52 = function(__self, cb) {
  const cnt_4 = (__self).count();
  let i_14 = 0;
  while (i_14 < cnt_4) {
    const item_3 = operatorsOf_3.itemAt_53(__self, i_14);
    cb(item_3);
    i_14 = i_14 + 1;
  };
};
operatorsOf_3.itemAt_53 = function(__self, idx) {
  const val_3 = (__self).get(idx);
  return val_3;
};
operatorsOf_3.size_55 = function(__self) {
  return (__self).count();
};
operatorsOf_3.size_56 = function(__self) {
  return (__self).count();
};
operatorsOf_3.at_15 = function(__self, idx) {
  const val_4 = (__self).get(idx);
  return val_4;
};
operatorsOf_3.size_64 = function(__self) {
  return (__self).count();
};
operatorsOf_3.forEach_65 = function(__self, cb) {
  const cnt_5 = (__self).count();
  let i_19 = 0;
  while (i_19 < cnt_5) {
    const item_4 = operatorsOf_3.itemAt_66(__self, i_19);
    cb(item_4);
    i_19 = i_19 + 1;
  };
};
operatorsOf_3.itemAt_66 = function(__self, idx) {
  const val_5 = (__self).get(idx);
  return val_5;
};
class operatorsOfstring_5  {
  constructor() {
  }
}
operatorsOfstring_5.createAST_6 = function(src) {
  const code = new SourceCode(src);
  const t = new RangerStringTokenizer(code);
  t.parse(true);
  const root = t.rootNode;
  return operatorsOfCodeNode_7.createAST_8(root);
};
class operatorsOfCodeNode_7  {
  constructor() {
  }
}
operatorsOfCodeNode_7.createAST_8 = function(item) {
  if ( item.expression && (item.is_block_node == false) ) {
    let block = new RExpression();
    operatorsOf_9.forEach_10(item.children, ((item, index) => { 
      const ch_2 = operatorsOf_7.createAST_8(item);
      block = (block).set_children(operatorsOf_3.push_11(block.children, ch_2));
    }));
    return block;
  }
  if ( item.is_block_node ) {
    let block_3 = new RBlockNode();
    operatorsOf_9.forEach_10(item.children, ((item, index) => { 
      const ch_3 = operatorsOf_7.createAST_8(item);
      block_3 = (block_3).set_children(operatorsOf_3.push_11(block_3.children, ch_3));
    }));
    return block_3;
  }
  if ( item.value_type == 11 ) {
    let node_5 = new RVRefNode();
    node_5 = (node_5).set_vref(item.vref);
    return node_5;
  }
  if ( item.value_type == 5 ) {
    let node_6 = new RBooleanValue();
    node_6 = (node_6).set_value(item.boolean_value);
    return node_6;
  }
  if ( item.value_type == 3 ) {
    let node_7 = new RIntValue();
    node_7 = (node_7).set_value(item.int_value);
    return node_7;
  }
  if ( item.value_type == 2 ) {
    let node_8 = new RDoubleValue();
    node_8 = (node_8).set_value(item.double_value);
    return node_8;
  }
  if ( item.value_type == 4 ) {
    let node_9 = new RStringValue();
    node_9 = (node_9).set_value(item.string_value);
    return node_9;
  }
  const no_op_1 = new RNoOp();
  return no_op_1;
};
class operatorsOf_9  {
  constructor() {
  }
}
operatorsOf_9.forEach_10 = function(__self, cb) {
  for ( let i = 0; i < __self.length; i++) {
    var it = __self[i];
    cb(it, i);
  };
};
operatorsOf_9.forEach_22 = function(__self, cb) {
  for ( let i_2 = 0; i_2 < __self.length; i_2++) {
    var it_1 = __self[i_2];
    cb(it_1, i_2);
  };
};
operatorsOf_9.forEach_29 = function(__self, cb) {
  for ( let i_6 = 0; i_6 < __self.length; i_6++) {
    var it_2 = __self[i_6];
    cb(it_2, i_6);
  };
};
operatorsOf_9.forEach_33 = function(__self, cb) {
  for ( let i_8 = 0; i_8 < __self.length; i_8++) {
    var it_3 = __self[i_8];
    cb(it_3, i_8);
  };
};
operatorsOf_9.forEach_44 = function(__self, cb) {
  for ( let i_10 = 0; i_10 < __self.length; i_10++) {
    var it_4 = __self[i_10];
    cb(it_4, i_10);
  };
};
operatorsOf_9.forEach_46 = function(__self, cb) {
  for ( let i_11 = 0; i_11 < __self.length; i_11++) {
    var it_5 = __self[i_11];
    cb(it_5, i_11);
  };
};
operatorsOf_9.forEach_49 = function(__self, cb) {
  for ( let i_12 = 0; i_12 < __self.length; i_12++) {
    var it_6 = __self[i_12];
    cb(it_6, i_12);
  };
};
class operatorsOf_7  {
  constructor() {
  }
}
operatorsOf_7.createAST_8 = function(item) {
  if ( item.expression && (item.is_block_node == false) ) {
    let block_1 = new RExpression();
    operatorsOf_9.forEach_10(item.children, ((item, index) => { 
      const ch = operatorsOf_7.createAST_8(item);
      block_1 = (block_1).set_children(operatorsOf_3.push_11(block_1.children, ch));
    }));
    return block_1;
  }
  if ( item.is_block_node ) {
    let block_2 = new RBlockNode();
    operatorsOf_9.forEach_10(item.children, ((item, index) => { 
      const ch_1 = operatorsOf_7.createAST_8(item);
      block_2 = (block_2).set_children(operatorsOf_3.push_11(block_2.children, ch_1));
    }));
    return block_2;
  }
  if ( item.value_type == 11 ) {
    let node = new RVRefNode();
    node = (node).set_vref(item.vref);
    return node;
  }
  if ( item.value_type == 5 ) {
    let node_1 = new RBooleanValue();
    node_1 = (node_1).set_value(item.boolean_value);
    return node_1;
  }
  if ( item.value_type == 3 ) {
    let node_2 = new RIntValue();
    node_2 = (node_2).set_value(item.int_value);
    return node_2;
  }
  if ( item.value_type == 2 ) {
    let node_3 = new RDoubleValue();
    node_3 = (node_3).set_value(item.double_value);
    return node_3;
  }
  if ( item.value_type == 4 ) {
    let node_4 = new RStringValue();
    node_4 = (node_4).set_value(item.string_value);
    return node_4;
  }
  const no_op = new RNoOp();
  return no_op;
};
class operatorsOfRNode_12  {
  constructor() {
  }
}
operatorsOfRNode_12.walk_13 = function(res_ast, cb) {
  cb(res_ast);
  if( res_ast instanceof RExpression ) /* union case */ {
    var node_10 = res_ast;
    operatorsOf_3.forEach_14(node_10.children, ((item) => { 
      operatorsOf_12.walk_13(item, cb);
    }));
  };
  if( res_ast instanceof RBlockNode ) /* union case */ {
    var node_13 = res_ast;
    operatorsOf_3.forEach_14(node_13.children, ((item) => { 
      operatorsOf_12.walk_13(item, cb);
    }));
  };
};
class operatorsOf_12  {
  constructor() {
  }
}
operatorsOf_12.walk_13 = function(res_ast, cb) {
  cb(res_ast);
  if( res_ast instanceof RExpression ) /* union case */ {
    var node_11 = res_ast;
    operatorsOf_3.forEach_14(node_11.children, ((item) => { 
      operatorsOf_12.walk_13(item, cb);
    }));
  };
  if( res_ast instanceof RBlockNode ) /* union case */ {
    var node_12 = res_ast;
    operatorsOf_3.forEach_14(node_12.children, ((item) => { 
      operatorsOf_12.walk_13(item, cb);
    }));
  };
};
operatorsOf_12.print_58 = function(res_ast, input) {
  let out = input;
  if( res_ast instanceof RExpression ) /* union case */ {
    var node_14 = res_ast;
    out = operatorsOf_17.write_18(out, "(");
    out = operatorsOf_17.indent_21(out);
    out = operatorsOf_17.nl_21(out);
    operatorsOf_3.forEach_14(node_14.children, ((item) => { 
      out = operatorsOf_12.print_58(item, out);
    }));
    out = operatorsOf_17.nl_21(out);
    out = operatorsOf_17.unindent_21(out);
    out = operatorsOf_17.write_18(out, ")");
  };
  if( res_ast instanceof RBlockNode ) /* union case */ {
    var node_15 = res_ast;
    out = operatorsOf_17.write_18(out, "{");
    out = operatorsOf_17.indent_21(out);
    out = operatorsOf_17.nl_21(out);
    operatorsOf_3.forEach_14(node_15.children, ((item) => { 
      out = operatorsOf_12.print_58(item, out);
      out = operatorsOf_17.nl_21(out);
    }));
    out = operatorsOf_17.unindent_21(out);
    out = operatorsOf_17.write_18(out, "}");
    out = operatorsOf_17.nl_21(out);
  };
  if( res_ast instanceof RVRefNode ) /* union case */ {
    var node_16 = res_ast;
    return operatorsOf_17.write_18(out, (" " + node_16.vref));
  };
  if( res_ast instanceof RBooleanValue ) /* union case */ {
    var node_17 = res_ast;
    if ( node_17.value ) {
      out = operatorsOf_17.write_18(out, " true");
    } else {
      out = operatorsOf_17.write_18(out, " false");
    }
  };
  if( res_ast instanceof RDoubleValue ) /* union case */ {
    var node_18 = res_ast;
    out = operatorsOf_17.write_18(out, (" " + node_18.value));
  };
  if( res_ast instanceof RIntValue ) /* union case */ {
    var node_19 = res_ast;
    out = operatorsOf_17.write_18(out, (" " + node_19.value));
  };
  if( res_ast instanceof RStringValue ) /* union case */ {
    var node_20 = res_ast;
    out = operatorsOf_17.write_18(out, (("`" + node_20.value) + "`"));
  };
  return out;
};
class operatorsOfCodeOutput_17  {
  constructor() {
  }
}
operatorsOfCodeOutput_17.write_18 = function(out, str) {
  let newOut = out;
  let slice = new CodeSlice();
  slice = (slice).set_tokens(operatorsOf_3.push_19(slice.tokens, str));
  newOut = (newOut).set_slices(operatorsOf_3.push_20(newOut.slices, (slice)));
  return newOut;
};
class operatorsOf_17  {
  constructor() {
  }
}
operatorsOf_17.nl_21 = function(out) {
  let newOut_1 = out;
  newOut_1 = (newOut_1).set_slices(operatorsOf_3.push_20(newOut_1.slices, (new WriterCmdNewLine())));
  return newOut_1;
};
operatorsOf_17.indent_21 = function(out) {
  let newOut_2 = out;
  newOut_2 = (newOut_2).set_slices(operatorsOf_3.push_20(newOut_2.slices, (new WriterCmdIndent())));
  return newOut_2;
};
operatorsOf_17.write_18 = function(out, str) {
  let newOut_3 = out;
  let slice_1 = new CodeSlice();
  slice_1 = (slice_1).set_tokens(operatorsOf_3.push_19(slice_1.tokens, str));
  newOut_3 = (newOut_3).set_slices(operatorsOf_3.push_20(newOut_3.slices, (slice_1)));
  return newOut_3;
};
operatorsOf_17.unindent_21 = function(out) {
  let newOut_4 = out;
  newOut_4 = (newOut_4).set_slices(operatorsOf_3.push_20(newOut_4.slices, (new WriterCmdUnIndent())));
  return newOut_4;
};
operatorsOf_17.fork_21 = function(out) {
  let newOut_5 = new CodeOutput();
  newOut_5 = (newOut_5).set_settings(out.settings);
  return newOut_5;
};
operatorsOf_17.getString_26 = function(out, indentLevel, currentLine) {
  let res = "";
  let curr_line = currentLine;
  let indent = indentLevel;
  operatorsOf_3.forEach_27(out.slices, ((item) => { 
    if( item instanceof CodeOutput ) /* union case */ {
      var s = item;
      const the_string = operatorsOf_17.getString_26(s, indent, curr_line);
      const lines = the_string.split("\n");
      operatorsOf_9.forEach_29(lines, ((item, index) => { 
        if ( index == 0 ) {
          if ( (curr_line.length) == 0 ) {
            curr_line = curr_line + operatorsOf_17.getTabStr_30(out, indent);
            res = res + operatorsOf_17.getTabStr_30(out, indent);
          }
          curr_line = curr_line + item;
          res = res + item;
        } else {
          res = res + out.settings.newlineStr;
          res = (res + operatorsOf_17.getTabStr_30(out, indent)) + item;
          curr_line = operatorsOf_17.getTabStr_30(out, indent) + item;
        }
      }));
    };
    if( item instanceof CodeSlice ) /* union case */ {
      var s_1 = item;
      const the_string_1 = operatorsOf_3.map_31(s_1.tokens, ((item) => { 
        const str = item;
        return str;
      })).join("");
      const lines_1 = the_string_1.split("\n");
      operatorsOf_9.forEach_29(lines_1, ((item, index) => { 
        if ( index == 0 ) {
          if ( (curr_line.length) == 0 ) {
            curr_line = curr_line + operatorsOf_17.getTabStr_30(out, indent);
            res = res + operatorsOf_17.getTabStr_30(out, indent);
          }
          curr_line = curr_line + item;
          res = res + item;
        } else {
          res = res + out.settings.newlineStr;
          res = (res + operatorsOf_17.getTabStr_30(out, indent)) + item;
          curr_line = operatorsOf_17.getTabStr_30(out, indent) + item;
        }
      }));
    };
    if( item instanceof WriterTag ) /* union case */ {
      var s_2 = item;
      const tag = operatorsOf_23.get_25(out.tags, s_2.name);
      if ( (typeof(tag) !== "undefined" && tag != null )  ) {
        const codeOutTag = tag;
        const the_string_2 = operatorsOf_17.getString_26(codeOutTag, indent, curr_line);
        const lines_2 = the_string_2.split("\n");
        operatorsOf_9.forEach_29(lines_2, ((item, index) => { 
          if ( index == 0 ) {
            if ( (curr_line.length) == 0 ) {
              curr_line = curr_line + operatorsOf_17.getTabStr_30(out, indent);
              res = res + operatorsOf_17.getTabStr_30(out, indent);
            }
            curr_line = curr_line + item;
            res = res + item;
          } else {
            res = res + out.settings.newlineStr;
            res = (res + operatorsOf_17.getTabStr_30(out, indent)) + item;
            curr_line = operatorsOf_17.getTabStr_30(out, indent) + item;
          }
        }));
      }
    };
    if( item instanceof WriterCmdIndent ) /* union case */ {
      var s_3 = item;
      indent = indent + 1;
    };
    if( item instanceof WriterCmdUnIndent ) /* union case */ {
      var s_4 = item;
      indent = indent - 1;
    };
    if( item instanceof WriterCmdNewLine ) /* union case */ {
      var s_5 = item;
      res = res + out.settings.newlineStr;
      curr_line = "";
    };
  }));
  return res;
};
operatorsOf_17.getTabStr_30 = function(out, indentLevel) {
  if ( indentLevel == 0 ) {
    return "";
  }
  let cnt_2 = indentLevel;
  let res_1 = "";
  while (cnt_2 > 0) {
    res_1 = res_1 + out.settings.indentStr;
    cnt_2 = cnt_2 - 1;
  };
  return res_1;
};
operatorsOf_17.getString_21 = function(out) {
  return operatorsOf_17.getString_26(out, 0, "");
};
class operatorsOfMap_23  {
  constructor() {
  }
}
operatorsOfMap_23.set_24 = function(__self, key, value) {
  const c = new Map_string_CodeOutput();
  const keys = Object.keys(__self.elements);
  for ( let i_3 = 0; i_3 < keys.length; i_3++) {
    var k = keys[i_3];
    if ( k == key ) {
    } else {
      c.elements[k] = (__self.elements[k]);
    }
  };
  c.elements[key] = value;
  return c;
};
class operatorsOf_23  {
  constructor() {
  }
}
operatorsOf_23.get_25 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_23.set_24 = function(__self, key, value) {
  const c_1 = new Map_string_CodeOutput();
  const keys_1 = Object.keys(__self.elements);
  for ( let i_4 = 0; i_4 < keys_1.length; i_4++) {
    var k_1 = keys_1[i_4];
    if ( k_1 == key ) {
    } else {
      c_1.elements[k_1] = (__self.elements[k_1]);
    }
  };
  c_1.elements[key] = value;
  return c_1;
};
operatorsOf_23.get_34 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_23.set_35 = function(__self, key, value) {
  const c_2 = new Map_string_RVariable();
  const keys_2 = Object.keys(__self.elements);
  for ( let i_9 = 0; i_9 < keys_2.length; i_9++) {
    var k_2 = keys_2[i_9];
    if ( k_2 == key ) {
    } else {
      c_2.elements[k_2] = (__self.elements[k_2]);
    }
  };
  c_2.elements[key] = value;
  return c_2;
};
operatorsOf_23.set_50 = function(__self, key, value) {
  const c_3 = new Map_string_ROperatorDef();
  const keys_3 = Object.keys(__self.elements);
  for ( let i_13 = 0; i_13 < keys_3.length; i_13++) {
    var k_3 = keys_3[i_13];
    if ( k_3 == key ) {
    } else {
      c_3.elements[k_3] = (__self.elements[k_3]);
    }
  };
  c_3.elements[key] = value;
  return c_3;
};
operatorsOf_23.get_51 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_23.set_54 = function(__self, key, value) {
  const c_4 = new Map_string_ROpNode();
  const keys_4 = Object.keys(__self.elements);
  for ( let i_15 = 0; i_15 < keys_4.length; i_15++) {
    var k_4 = keys_4[i_15];
    if ( k_4 == key ) {
    } else {
      c_4.elements[k_4] = (__self.elements[k_4]);
    }
  };
  c_4.elements[key] = value;
  return c_4;
};
operatorsOf_23.get_57 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_23.set_59 = function(__self, key, value) {
  const c_5 = new Map_string_RValueType();
  const keys_5 = Object.keys(__self.elements);
  for ( let i_16 = 0; i_16 < keys_5.length; i_16++) {
    var k_5 = keys_5[i_16];
    if ( k_5 == key ) {
    } else {
      c_5.elements[k_5] = (__self.elements[k_5]);
    }
  };
  c_5.elements[key] = value;
  return c_5;
};
operatorsOf_23.get_60 = function(__self, key) {
  return __self.elements[key];
};
operatorsOf_23.set_61 = function(__self, key, value) {
  const c_6 = new Map_string_RType_Variable();
  const keys_6 = Object.keys(__self.elements);
  for ( let i_17 = 0; i_17 < keys_6.length; i_17++) {
    var k_6 = keys_6[i_17];
    if ( k_6 == key ) {
    } else {
      c_6.elements[k_6] = (__self.elements[k_6]);
    }
  };
  c_6.elements[key] = value;
  return c_6;
};
operatorsOf_23.keys_62 = function(__self) {
  return Object.keys(__self.elements);
};
operatorsOf_23.forEach_63 = function(__self, cb) {
  const keys_7 = Object.keys(__self.elements);
  for ( let i_18 = 0; i_18 < keys_7.length; i_18++) {
    var key = keys_7[i_18];
    cb((__self.elements[key]), key);
  };
  return __self;
};
operatorsOf_23.keys_67 = function(__self) {
  return Object.keys(__self.elements);
};
operatorsOf_23.keys_68 = function(__self) {
  return Object.keys(__self.elements);
};
class operatorsOf_5  {
  constructor() {
  }
}
operatorsOf_5.rc46def_37 = function(name, typename) {
  let vd = new RDefVariable();
  vd = (vd).set_name(name);
  vd = (vd).set_typename("");
  return vd;
};
operatorsOf_5.rc46op_6 = function(name) {
  let o = new ROperator();
  o = (o).set_name(name);
  return o;
};
operatorsOf_5.rc46vref_6 = function(name) {
  let o_1 = new RVRefNode();
  o_1 = (o_1).set_vref(name);
  return o_1;
};
operatorsOf_5.rc46param_37 = function(name, type_name) {
  let p = new RFunctionParam();
  p = (p).set_name(name);
  p = (p).set_type_name(type_name);
  return p;
};
operatorsOf_5.rc46fn_40 = function(name, rvType, params, body) {
  let f = new RFunction();
  f = (f).set_name(name);
  f = (f).set_rvType(rvType);
  operatorsOf_9.forEach_33(params, ((item, index) => { 
    f = (f).set_params(operatorsOf_3.push_11(f.params, item));
  }));
  f = (f).set_body(body);
  return f;
};
operatorsOf_5.opc46param_37 = function(name, type_name) {
  let p_1 = new ROperatorParam();
  p_1 = (p_1).set_name(name);
  p_1 = (p_1).set_type_name(type_name);
  return p_1;
};
operatorsOf_5.cmdc46text_6 = function(txt) {
  let p_3 = new ROpCmdWriteText();
  p_3 = (p_3).set_text(txt);
  return p_3;
};
operatorsOf_5.opc46def_43 = function(lang, versions, params, cmds) {
  let n_2 = new ROperatorDef();
  n_2 = (n_2).set_lang(lang);
  n_2 = (n_2).set_versions(versions);
  operatorsOf_9.forEach_44(params, ((item, index) => { 
    n_2 = (n_2).set_params(operatorsOf_3.push_45(n_2.params, item));
  }));
  operatorsOf_9.forEach_46(cmds, ((item, index) => { 
    n_2 = (n_2).set_cmds(operatorsOf_3.push_47(n_2.cmds, item));
  }));
  return n_2;
};
operatorsOf_5.opc46collection_48 = function(opName, params) {
  let n_3 = new ROperatorCollection();
  n_3 = (n_3).set_name(opName);
  operatorsOf_9.forEach_49(params, ((item, index) => { 
    n_3 = (n_3).set_langs(operatorsOf_23.set_50(n_3.langs, item.lang, item));
  }));
  return n_3;
};
operatorsOf_5.literal_6 = function(v) {
  let sca = new RType_Literal();
  sca = (sca).set_string_value(v);
  sca = (sca).set_value_type(4);
  return sca;
};
class operatorsOf_38  {
  constructor() {
  }
}
operatorsOf_38.rc46expr_39 = function(children) {
  let n = new RExpression();
  operatorsOf_9.forEach_33(children, ((item, index) => { 
    n = (n).set_children(operatorsOf_3.push_11(n.children, item));
  }));
  return n;
};
operatorsOf_38.rc46block_39 = function(children) {
  let n_1 = new RBlockNode();
  operatorsOf_9.forEach_33(children, ((item, index) => { 
    n_1 = (n_1).set_children(operatorsOf_3.push_11(n_1.children, item));
  }));
  return n_1;
};
class operatorsOfint_41  {
  constructor() {
  }
}
operatorsOfint_41.cmdc46param_42 = function(index) {
  let p_2 = new ROpCmdParam();
  p_2 = (p_2).set_index(index);
  return p_2;
};
class operatorsOf_41  {
  constructor() {
  }
}
operatorsOf_41.cmdc46param_42 = function(index) {
  let p_4 = new ROpCmdParam();
  p_4 = (p_4).set_index(index);
  return p_4;
};
operatorsOf_41.literal_42 = function(v) {
  let sca_1 = new RType_Literal();
  sca_1 = (sca_1).set_int_value(v);
  sca_1 = (sca_1).set_value_type(1);
  return sca_1;
};
class operatorsOfJSONArrayObject_69  {
  constructor() {
  }
}
operatorsOfJSONArrayObject_69.forEach_70 = function(__self, cb) {
  let cnt_6 = __self.length;
  let i_20 = 0;
  while (cnt_6 > 0) {
    const value = __self[i_20];
    cb(value, i_20);
    cnt_6 = cnt_6 - 1;
    i_20 = i_20 + 1;
  };
};
class operatorsOf_69  {
  constructor() {
  }
}
operatorsOf_69.forEach_70 = function(__self, cb) {
  let cnt_7 = __self.length;
  let i_21 = 0;
  while (cnt_7 > 0) {
    const value_1 = __self[i_21];
    cb(value_1, i_21);
    cnt_7 = cnt_7 - 1;
    i_21 = i_21 + 1;
  };
};
/* static JavaSript main routine at the end of the JS file */
function __js_main() {
  try {
    const ctx = new TestContext();
    const test = new BasicAST();
    test.blockCtxTest(ctx);
    test.createBlock(ctx);
    test.testCodeWriter(ctx);
    test.testTokenizer(ctx);
    test.testIterator(ctx);
    operatorsOf_9.forEach_29(ctx.messages, ((item, index) => { 
      console.log("  * " + item);
    }));
    if ( (ctx.errors.length) > 0 ) {
      operatorsOf_9.forEach_29(ctx.errors, ((item, index) => { 
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
