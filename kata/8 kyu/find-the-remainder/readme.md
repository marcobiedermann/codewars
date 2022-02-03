# [Find the Remainder](https://www.codewars.com/kata/524f5125ad9c12894e00003f)

## Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

```if:cobol
Divison by zero should return `-1`.
```

```if:csharp
Divison by zero should throw a `DivideByZeroException`.
```

```if:coffeescript,javascript
Division by zero should return `NaN`.
```

```if:php,python,ruby
Division by zero should return an empty value.
```

### Examples:

```
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
```

---

## Tags

- Algorithms
- Fundamentals
- Logic
- Mathematics
- Numbers
