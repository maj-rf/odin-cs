import { Node } from './Node';

export function prettyPrint(
  node: Node | undefined,
  prefix = '',
  isLeft = true,
  str: string[] = []
) {
  if (typeof node === 'undefined') {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false, str);
  }

  str.push(`${prefix}${isLeft ? '└─→ ' : '┌─→ '}${node.key}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true, str);
  }
  return str;
}
