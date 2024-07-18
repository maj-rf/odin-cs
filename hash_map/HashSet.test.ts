import { HashSet } from './HashSet';

const test = new HashSet();
test.set('apple');
test.set('alppe');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');
test.set('grape');
test.set('hat');
test.set('ice cream');
test.set('jacket');
test.set('kite');
test.set('moon'); // overload & resize buckets to double capacity => 32
console.log(test.get('moon')); // { key: 'moon', next: null }
console.log(test.length); // 13
console.log(test.has('moonz')); // false
console.log(test.has('moon')); // true
console.log(test.remove('moon')); // true & remove moon node
test.set('never gonna');
test.set('give you');
test.set('up');
console.log(test.length); // 15
console.log(test.keys());
test.clear();
console.log(test); //  back to initial bucket
