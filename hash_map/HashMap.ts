// [[key, value], [key,value], []]
// the array inside the hashmap is a bucket that holds (k,v)

class LinkedHashMap<T> {
  private capacity: number;
  private loadFactor: number;
  private size: number;
  private buckets: Array<[string, T]>[];

  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  private hash(key: string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key: string, value: T): void {
    const idx = this.hash(key);
    let bucket = this.buckets[idx];
    /**
     * 1. If bucket doesn't exist, push the new entry [key, value]
     * 2. If bucket exists and key exists (collision), change only the value
     *    of the item that matches the key.
     * 3. If bucket exists and key doesn't exist,
     *    push the new entry [key, value]
     */
    if (bucket) {
      const item = bucket.find((x) => x[0] === key);
      if (item) {
        item[1] = value;
      } else {
        bucket.push([key, value]);
        this.size++;
      }
    } else {
      bucket = [[key, value]];
    }
  }

  get(key: string) {
    const idx = this.hash(key);
    const item = this.buckets[idx].find((x) => x[0] === key);
    return item ? item[1] : null;
  }

  has(key: string) {
    const idx = this.hash(key);
    const item = this.buckets[idx].find((x) => x[0] === key);
    return item ? true : false;
  }

  remove(key: string) {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    const removeIndex = bucket.findIndex((x) => x[0] === key);
    if (removeIndex < 0) {
      return false;
    }
    bucket.splice(removeIndex);
    this.size--;
    return true;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // TODO
  // clear()
  // keys()
  // values()
  // entries()
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
test.set('moon', 123);
console.log(test.get('moon')); // 123, capacity overload
console.log(test);
console.log(test.remove('moonz'));
console.log(test.remove('moon'));
console.log(test);
test.clear();
