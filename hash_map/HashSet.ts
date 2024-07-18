import { LinkedListWithKey } from './LinkedListWithKey';

export class HashSet {
  private capacity: number;
  private loadFactor: number;
  private buckets: LinkedListWithKey[];
  private size: number;

  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedListWithKey()
    );
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  private isLoadFactorExceeded() {
    return this.size / this.buckets.length > this.loadFactor;
  }

  private resize() {
    const newBuckets = Array.from(
      { length: this.capacity * 2 },
      () => new LinkedListWithKey()
    );
    const currentEntries = this.keys();
    this.buckets = newBuckets;
    this.capacity = newBuckets.length;
    this.size = 0;
    currentEntries.forEach((key) => {
      if (key) this.set(key);
    });
  }

  hash(key: string) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key: string) {
    const index = this.hash(key) % this.capacity;
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    let list = this.buckets[index];
    if (list.contains(key)) {
      // const node = list.findNodeAtKey(key);
      // if (node) node._value = value;
      return;
    }
    list.append(key);
    this.size++;
    if (this.isLoadFactorExceeded()) {
      this.resize();
    }
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

  remove(key: string) {
    const index = this.hash(key) % this.capacity;
    const nodeIndex = this.buckets[index].find(key);
    if (nodeIndex !== null) {
      this.buckets[index].removeAt(nodeIndex);
      this.size--;
      return true;
    }
    return false;
  }

  clear() {
    this.capacity = 16;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedListWithKey()
    );
    this.size = 0;
  }

  keys() {
    const keys: string[] = [];
    this.buckets.forEach((bucket) => {
      let pointer = bucket._head;
      while (pointer !== null) {
        if (pointer._key) keys.push(pointer._key);
        pointer = pointer._next;
      }
    });
    return keys;
  }
}
