export class Node<T> {
  constructor(
    readonly value: T | null = null,
    public next: Node<T> | null = null
  ) {}
}

// const node = new Node(1);
// console.log(node);
// {value: 1, next: null}
