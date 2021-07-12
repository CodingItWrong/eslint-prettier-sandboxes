foo = 'bar';

module.exports = function foo(myarg) {
  const {bar, baz} = myarg;
  console.log(bar, baz);
};
