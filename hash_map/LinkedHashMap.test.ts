import { LinkedHashMap } from './LinkedHashMap';

const test = new LinkedHashMap();
test.set('apple', 'red');
test.set('alppe', 'crimson');
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
test.set('moon', 123); // overload & resize buckets to double capacity => 32
test.set('moon', 1234); // overwrite value
console.log(test.get('moon')); // { key: 'moon', value: 1234, next: null }
console.log(test.length); // 13
console.log(test.has('moonz')); // false
console.log(test.has('moon')); // true
console.log(test.remove('moon')); // true & remove moon node
test.set('never', 'gonna');
test.set('give', 'you');
test.set('up', null);
console.log(test.length); // 15
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
