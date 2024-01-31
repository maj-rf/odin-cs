type NestedObject = { [key: string]: NestedObject | any };

function contains<U>(obj: NestedObject, search: U) {
  if (typeof obj !== 'object' || obj === null) {
    return obj === search;
  }
  for (const value of Object.values(obj)) {
    if (contains(value, search)) {
      return true;
    }
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 'foo2')); // true
console.log(contains(nestedObject, 'foo')); // false
