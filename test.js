
exports.test = function() {
  console.log( 'test called')
  return foo()
}

function foo() {
  return 'inner foo'
}
