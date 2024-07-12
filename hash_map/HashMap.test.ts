import { HashMap } from './HashMap';

const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 123);
console.log(test.length()); // 13
console.log(test.get('moon')); // 123, capacity overload
console.log(test.remove('moonz')); // false
console.log(test.remove('moon')); // true & removes k,v that corresponds to 'moon'
test.set('moon', 123); // capacity overload again
console.log(test);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
