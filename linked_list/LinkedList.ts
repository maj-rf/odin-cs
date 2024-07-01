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
    return this;
  }

  prepend(value: T) {
    const node = new Node(value);
    if (!this.head) return null;
    let prevHead = this.head;
    node.next = prevHead;
    this._head = node;
    return this;
  }
}

const linkedList = new LinkedList(); // { head: null }
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList);
console.log(linkedList.head);
console.log(linkedList.tail);
