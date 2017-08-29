const expect = chai.expect;

describe('global functions', function() {
  let returnsThis;
  let bob;

  beforeEach(function(){
     returnsThis = function(){ return this}
     bob = {name: 'bob'}
  })

  describe('invokeFunction', function(){
    it('calls and returns the function as a callback, that shows that this is global from the callack', function(){
      expect(justInvoke(returnsThis)).to.equal(window)
    })
  })

  describe('setThisWithCall', function(){
    it('calls and returns the function as a callback, and assigns this to be bob', function(){
      expect(setThisWithCall(returnsThis, bob)).to.equal(bob)
    })
  })

  describe('setThisWithApply', function(){
    it('calls and returns the function as a callback, and assigns this to be bob', function(){
      expect(setThisWithApply(returnsThis, bob)).to.equal(bob)
    })

    it('calls and returns the function as a callback, assigns this to be bob, and sets the array as arguments', function(){
      let returnsThisWithArgs = function(firstArgument, secondArgument){
        return [this].concat(firstArgument).concat(secondArgument)
      }
      expect(setThisWithApply(returnsThisWithArgs, bob, ['foo', 'bar'])[0]).to.equal(bob)
      expect(setThisWithApply(returnsThisWithArgs, bob, ['foo', 'bar']).length).to.equal(3)
    })
  })

  describe('returnNewFunctionOf', function(){
    let fred;
    let functionToBeCopied;

    beforeEach(function(){
      functionToBeCopied = function (){
        return this
      }
     fred = { name: 'fred'}
    })
    it('returns a new function', function(){
      expect(returnNewFunctionOf(functionToBeCopied)).to.not.equal(functionToBeCopied)
      expect(typeof returnNewFunctionOf(functionToBeCopied)).to.equal("function")
    })
    it('sets the this argument to fred', function(){
      let newFunction = returnNewFunctionOf(functionToBeCopied, fred)
      expect(newFunction()).to.equal(fred)
    })
  })
})
