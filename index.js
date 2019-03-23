//Your code here
function justInvoke(fn) {
  return fn.call();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(this, 'bob', 18);
}

function setThisWithApply(fn, thisValue, args) {

}

function returnNewFunctionOf(functionToBeCoped, thisValue) {

}
