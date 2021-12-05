var MyStack = function() {
  this.stack = [];
  this.topElement = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if(!this.stack.length) {
    return undefined;
  }
  let popEle = this.stack[this.stack.length-1];
  this.stack.length = this.stack.length-1;
  return popEle;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return Boolean(!this.stack.length);
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */