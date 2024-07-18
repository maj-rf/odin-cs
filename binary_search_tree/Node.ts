type Data = number | null;

export class Node {
  constructor(
    private _key: Data = null,
    private _left: Data = null,
    private _right: Data = null
  ) {}

  set key(value: Data) {
    this._key = value;
  }

  set left(value: Data) {
    this._left = value;
  }

  set right(value: Data) {
    this._right = value;
  }
}
