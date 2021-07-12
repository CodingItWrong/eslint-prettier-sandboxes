foo = 'bar';

let hi;

if ((hi = 1)) {
  console.log('hi');
}

export default function foo(myarg) {
  const {bar, baz} = myarg;
  console.log(bar, baz);
}
