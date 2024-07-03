import { LinkedList } from '../linked_list/LinkedList';

class HashMap<T> {
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

  //TODO
  //set(key, value) {}
  //get(key) {}
  //has(key) {}
}

const test = new HashMap();
console.log(test.buckets);
console.log(test.hash('red'));
