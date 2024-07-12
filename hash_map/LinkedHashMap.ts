import { LinkedList } from '../linked_list/LinkedList';
/**
 * used LinkedList for the data structure inside the buckets
 * based on the instructions, if we call set(k,v) and there is an existing key,
 * it should be rewritten. for the usual linkedList, it should be appended.
 */

class LinkedHashMap<T> {
  private capacity: number;
  private loadFactor: number;
  public buckets: LinkedList<T>[];

  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList<T>()
    );
  }

  hash(key: string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  #isOutOfBounds(index: number) {
    return index < 0 || index >= this.capacity;
  }

  set(key: string, value: T) {
    const index = this.hash(key) % this.capacity;
    if (this.#isOutOfBounds(index)) {
      throw new Error('Trying to access index out of bound');
    }

    if (this.buckets[index] && !this.buckets[index].contains(value)) {
      this.buckets[index].prepend(value);
      return;
    } else return this.buckets[index].append(value);
  }

  get(key: string) {
    const index = this.hash(key) % this.capacity;
    if (this.#isOutOfBounds(index)) {
      throw new Error('Trying to access index out of bound');
    }
    return !this.buckets[index].head ? null : this.buckets[index];
  }

  has(key: string) {
    const index = this.hash(key) % this.capacity;
    if (this.#isOutOfBounds(index)) {
      throw new Error('Trying to access index out of bound');
    }
    return this.buckets[index].head === null ? false : true;
  }
}

const test = new LinkedHashMap();
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
console.log(test.buckets);
console.log(test.get('grape'));
console.log(test.has('redss'));
