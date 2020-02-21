# [Minimum to multiple](https://www.codewars.com/kata/5e030f77cec18900322c535d)

Given two integers `a` and `x`, return the minimum non-negative number to **add to** / **subtract from** `a` to make it a multiple of `x`.

```prolog
minimum(9, 8, Result) % Result = 1

% 9-1 = 8 which is a multiple of 4
```

```javascript
minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6
```

```python
minimum(10, 6)  #= 2

10+2 = 12 which is a multiple of 6
```

## Note

- 0 is always a multiple of `x`

## Constraints

**1 <= a <= 10<sup>6</sup>**

**1 <= x <= 10<sup>5</sup>**

---

## Tags

- Data Types
- Fundamentals
- Numbers
