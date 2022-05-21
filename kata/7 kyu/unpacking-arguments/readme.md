# [Unpacking Arguments](https://www.codewars.com/kata/540de1f0716ab384b4000828)

You must create a function, `spread`, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

```javascript
spread(someFunction, [1, true, 'Foo', 'bar']);
// is the same as...
someFunction(1, true, 'Foo', 'bar');
```

```clojure
(spread someFunction [1 true "Foo" "bar"] )
; is the same as...
(someFunction 1 true "Foo" "bar")
```

```coffeescript
spread someFunction, [1, true, "Foo", "bar"]
# is the same as...
someFunction 1, true, "Foo", "bar"
```

```python
spread(someFunction, [1, true, "Foo", "bar"] )
# is the same as...
someFunction(1, true, "Foo", "bar")
```

```ruby
spread someFunction, [1, true, "Foo", "bar"]
# is the same as...
someFunction.(1, true, "Foo", "bar")
```

---

## Tags

- Arguments
- Basic Language Features
- Control Flow
- Declarative Programming
- Functional Programming
- Functions
- Fundamentals
- Higher-order Functions
- Lambdas
- Programming Paradigms
