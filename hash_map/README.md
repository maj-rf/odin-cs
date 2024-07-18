# Hash Map / Hash Table

A hashmap (or hash map) is a data structure that implements an associative array, which is a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

A hash map / hash table has these concepts:

1. **Hash Function**: A hash function is used to convert the key into an index in the array. The index determines where the key-value pair is stored.

2. **Buckets**: The array used in a hashmap is divided into buckets. Each bucket can hold multiple key-value pairs in case of collisions (when two different keys hash to the same index).

3. **Collision Resolution**: When two keys hash to the same index, a collision occurs. Hashmaps handle collisions using methods like chaining (storing collided elements in a linked list at the same index) or open addressing (finding another open slot within the array).

Operations:

- `hash(key)` - the hash function.
- `set(key, value)` - adds the key-value pair in the hash map.
- `get(key)` - returns the value that corresponds to the key.
- `has(key)` - returns a Boolean whether a key is found or not.
- `remove(key)` - removes the key-value pair. returns true if the key is found.
- `length()` - returns the number of stored keys or occupied space.
- `clear()` - resets the hash map to the initial state.
- `keys()` - returns an array containing all the values.
- `values()` - returns an array containing all the values.
- `entries()` - returns an array that contains each key, value pair.
