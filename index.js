function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, argument) {
  return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, ourArguments) {
  return fn.apply(thisValue, ourArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
