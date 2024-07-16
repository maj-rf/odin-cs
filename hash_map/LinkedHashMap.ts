import { LinkedListWithKey } from './LinkedListWithKey';
/**
 * used LinkedList for the data structure inside the buckets
 * based on the instructions, if we call set(k,v) and there is an existing key,
 * it should be rewritten. for the usual linkedList, it should be appended.
 */

export class LinkedHashMap<T> {
  private capacity: number;
  private loadFactor: number;
  private buckets: LinkedListWithKey<T>[];
  private size: number;

  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedListWithKey<T>()
    );
    this.size = 0;
  }

  get _buckets() {
    return this.buckets;
  }

  get length() {
    return this.size;
  }

  hash(key: string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key: string, value: T) {
    const index = this.hash(key) % this.capacity;
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    let list = this.buckets[index];
    if (list.contains(key)) {
      const node = list.findNodeAtKey(key);
      if (node) node._key = key;
      return;
    }
    list.append(key, value);
    this.size++;
  }

  get(key: string) {
    const index = this.hash(key) % this.capacity;
    const node = this.buckets[index].findNodeAtKey(key);
    return !node ? null : node;
  }

  has(key: string) {
    const index = this.hash(key) % this.capacity;
    const node = this.buckets[index].findNodeAtKey(key);
    return Boolean(node?._key);
  }
}
