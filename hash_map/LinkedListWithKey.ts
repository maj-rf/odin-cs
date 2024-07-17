export class Node {
  constructor(
    private key: string | null = null,
    private next: Node | null = null
  ) {}

  get _key() {
    return this.key;
  }

  set _key(key: string | null) {
    this.key = key;
  }

  get _next() {
    return this.next;
  }

  set _next(next: Node | null) {
    this.next = next;
  }
}

export class LinkedListWithKey {
  public _head;

  constructor(head: Node | null = null) {
    this._head = head;
  }

  get head() {
    return this._head;
  }

  set head(node: Node | null) {
    this._head = node;
  }

  get tail() {
    if (!this._head) return null;
    let tail = this._head;
    while (tail._next !== null) {
      tail = tail._next;
    }
    return tail;
  }

  get size() {
    if (!this._head) return 0;
    let count = 1;
    let next = this._head._next;
    while (next !== null) {
      count += 1;
      next = next._next;
    }
    return count;
  }

  append(key: string) {
    const node = new Node(key);
    if (!this._head) {
      this._head = node;
    } else {
      let tail = this.tail;
      if (tail && tail._next === null) {
        tail._next = node;
      }
    }
  }

  prepend(key: string) {
    const prevHead = this._head;
    this._head = new Node(key, prevHead);
  }

  at(index: number) {
    if (!this._head) return null;
    if (index < 0) return null;
    let pointer = this._head;
    for (let i = 0; i < index; i++) {
      if (pointer._next === null) return null;
      pointer = pointer._next;
    }
    return pointer;
  }

  pop() {
    if (!this._head) return null;
    if (!this._head._next) {
      this._head = null;
      return;
    }
    let tail = this.at(this.size - 2);
    if (!tail) return null;
    tail._next = null;
    return this._head;
  }

  contains(key: string) {
    let pointer = this._head;
    while (pointer !== null) {
      if (pointer._key === key) return true;
      pointer = pointer._next;
    }
    return false;
  }

  find(key: string) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (pointer._key === key) return index;
      pointer = pointer._next;
      index++;
    }
    return null;
  }

  toString() {
    let pointer = this._head;
    let string = '';
    while (pointer !== null) {
      string += `(${pointer._key}) -> `;
      pointer = pointer._next;
    }
    return string + 'null';
  }

  insertAt(key: string, index: number) {
    if (index < 0) return null;
    if (index === 0) return this.prepend(key);
    const node = new Node(key);
    const prevNode = this.at(index - 1);
    if (prevNode) {
      node._next = prevNode._next;
      prevNode._next = node;
    }
    return this._head;
  }

  removeAt(index: number) {
    if (index < 0 || !this._head) return null;
    if (index === 0) {
      this._head = this._head._next;
      return;
    }
    let prevNode = this.at(index - 1);
    if (prevNode) {
      const next = prevNode._next;
      prevNode._next = next ? next._next : null;
    }
    return this._head;
  }

  findNodeAtKey(key: string) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (pointer._key === key) return pointer;
      pointer = pointer._next;
      index++;
    }
    return null;
  }
}
