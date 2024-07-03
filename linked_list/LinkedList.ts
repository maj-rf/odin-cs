import { Node } from './Node';

/**
 * 1. For append(), use the tail getter
 * 2. For prepend(), save the original head and then
 *   insert a new Node with OG head as next/pointer
 * 3. For pop(), we need to know the tail and get another pointer before the tail.
 * -->Use at() and size() methods.
 */

export class LinkedList<T> {
  private _head;

  constructor(head: Node<T> | null = null) {
    this._head = head;
  }

  get head() {
    return this._head;
  }

  get tail() {
    if (!this._head) return null;
    let tail = this._head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  get size() {
    if (!this._head) return 0;
    let count = 1;
    let next = this._head.next;
    while (next !== null) {
      count += 1;
      next = next.next;
    }
    return count;
  }

  append(value: T) {
    const node = new Node(value);
    if (!this._head) {
      this._head = node;
    } else {
      let tail = this.tail;
      if (tail && tail.next === null) {
        tail.next = node;
      }
    }
  }

  prepend(value: T) {
    if (!this._head) return null;
    const prevHead = this._head;
    this._head = new Node(value, prevHead);
  }

  at(index: number) {
    if (!this._head) return null;
    if (index < 0) return null;
    let pointer = this._head;
    for (let i = 0; i < index; i++) {
      if (pointer.next === null) return null;
      pointer = pointer.next;
    }
    return pointer;
  }

  pop() {
    if (!this._head) return null;
    if (!this._head.next) {
      this._head = null;
      return;
    }
    let tail = this.at(this.size - 2);
    if (!tail) return null;
    tail.next = null;
    return this._head;
  }

  contains(value: T) {
    let pointer = this._head;
    while (pointer !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    return false;
  }

  find(value: T) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) return index;
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  toString() {
    let pointer = this._head;
    let string = '';
    while (pointer !== null) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.next;
    }
    return string + 'null';
  }

  insertAt(value: T, index: number) {
    if (index < 0) return null;
    if (index === 0) return this.prepend(value);
    const node = new Node(value);
    const prevNode = this.at(index - 1);
    if (prevNode) {
      node.next = prevNode.next;
      prevNode.next = node;
    }
    return this._head;
  }

  removeAt(index: number) {
    if (index < 0 || !this._head) return null;
    if (index === 0) {
      this._head = this._head.next;
      return;
    }
    let prevNode = this.at(index - 1);
    if (prevNode) {
      const next = prevNode.next;
      prevNode.next = next ? next.next : null;
    }
    return this._head;
  }
}

/** 
const linkedList = new LinkedList(); // { head: null }
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList); // { value: 0, next: {value: 1, next: {value: 2, next: null } } }
console.log(linkedList.head); // same as above
console.log(linkedList.tail); // { value: 2, next: null }
linkedList.pop();
console.log(linkedList.size); // 2 because we removed the tail
console.log(linkedList.at(2)); // null because we removed the node at index 2
console.log(linkedList.contains(1)); // true
console.log(linkedList.contains(999)); // false
console.log(linkedList.find(56)); // null, inexistent value
console.log(linkedList.find(1)); // node value 1 is at index 1
console.log(linkedList.toString()); // (0) -> (1) -> null
linkedList.insertAt(3, -1); // invalid index, return same head
linkedList.insertAt(3, 1);
console.log(linkedList.toString()); // (0) -> (3) -> (1) -> null
linkedList.removeAt(11); // invalid index, return same head
linkedList.removeAt(2);
console.log(linkedList.toString()); // (0) -> (3) -> null
*/
