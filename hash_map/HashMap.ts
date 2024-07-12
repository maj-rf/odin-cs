// [[key, value], [key,value], []]
// the array inside the hashmap is a bucket that holds (k,v)

export class HashMap<T> {
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
      hashCode = hashCode;
    }
    return hashCode;
  }

  private currentLoadFactor() {
    return this.size / this.buckets.length;
  }

  resize() {
    const newBuckets: Array<[string, T]>[] = new Array(this.buckets.length * 2)
      .fill(null)
      .map(() => []);

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.map(([key, value]) => {
          const idx = this.hash(key) % newBuckets.length;
          let currentBucket = newBuckets[idx];
          if (currentBucket) {
            currentBucket.push([key, value]);
          } else {
            currentBucket = [[key, value]];
          }
        });
      }
    });
    this.buckets = newBuckets;
  }

  set(key: string, value: T) {
    const idx = this.hash(key) % this.buckets.length;
    if (idx < 0 || idx >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    let bucket = this.buckets[idx];
    /**
     * 1. If bucket doesn't exist, bucket is the new entry [[key, value]]
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
        if (this.currentLoadFactor() > this.loadFactor) {
          this.resize();
        }
      }
    } else {
      bucket = [[key, value]];
    }
  }

  get(key: string) {
    const idx = this.hash(key) % this.buckets.length;
    const item = this.buckets[idx].find((x) => x[0] === key);
    return item ? item[1] : null;
  }

  has(key: string) {
    const idx = this.hash(key) % this.buckets.length;
    const item = this.buckets[idx].find((x) => x[0] === key);
    return item ? true : false;
  }

  remove(key: string) {
    const idx = this.hash(key) % this.buckets.length;
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

  keys() {
    const keys: string[] = [];
    this.buckets.forEach((bucket) => {
      bucket.map(([key]) => {
        if (key) keys.push(key);
      });
    });
    return keys;
  }

  values() {
    const values: T[] = [];
    this.buckets.forEach((bucket) => {
      bucket.map(([key, value]) => {
        if (key) values.push(value);
      });
    });
    return values;
  }

  entries() {
    const entries: Array<[string, T]> = [];
    this.buckets.forEach((bucket) => {
      bucket.map(([key, value]) => {
        if (key) entries.push([key, value]);
      });
    });
    return entries;
  }
}
