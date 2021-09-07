# [Flatten](https://www.codewars.com/kata/5250a89b1625e5decd000413)

Write a function that flattens an `Array` of `Array` objects into a flat `Array`. Your function must only do one level of flattening.

```javascript
flatten([1, 2, 3]); // => [1,2,3]
flatten([
  [1, 2, 3],
  ['a', 'b', 'c'],
  [1, 2, 3],
]); // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1, 2, 3]]]); // => [[1,2,3]]
```

```coffeescript
flatten [1,2,3] # => [1,2,3]
flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
flatten [[[1,2,3]]] # => [[1,2,3]]
```

```ruby
flatten [1,2,3] # => [1,2,3]
flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
flatten [[[1,2,3]]] # => [[1,2,3]]
```

```python
flatten [1,2,3] # => [1,2,3]
flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]
flatten [[[1,2,3]]] # => [[1,2,3]]
```

---

## Tags

- Arrays
- Data Types
- Declarative Programming
- Functional Programming
- Fundamentals
- Programming Paradigms
- Utilities
