# [Currying functions: multiply all elements in an array](https://www.codewars.com/kata/586909e4c66d18dd1800009b)

To complete this Kata you need to make a function `multiplyAll`/`multiply_all` which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

```javascript
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
```

```php
multiply_all([1, 2, 3])(2); // => [2, 4, 6]
```

```python
multiply_all([1, 2, 3])(2); // => [2, 4, 6]
```

```scala
CurryingFunctions.multiplyAll(Array(1, 2, 3))(2); // => Array(2, 4, 6)
```

You must not mutate the original array.

Here's a [nice Youtube video about currying](https://www.youtube.com/watch?v=iZLP4qOwY8I), which might help you if this is new to you.

---

## Tags

- Basic Language Features
- Closures
- Declarative Programming
- Functional Programming
- Fundamentals
- Programming Paradigms
