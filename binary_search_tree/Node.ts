export class Node {
  constructor(
    private _key: number,
    private _left?: Node,
    private _right?: Node
  ) {}

  get key() {
    return this._key;
  }

  set key(value: number) {
    this._key = value;
  }

  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }
  set left(value: Node | undefined) {
    this._left = value;
  }

  set right(value: Node | undefined) {
    this._right = value;
  }
}
