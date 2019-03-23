//Your code here
function justInvoke(fn) {
  return fn.call();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, 18);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCoped, thisValue) {

}
