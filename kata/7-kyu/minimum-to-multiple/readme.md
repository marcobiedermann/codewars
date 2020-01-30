# [Minimum to multiple](https://www.codewars.com/kata/5e030f77cec18900322c535d)

Given two integers `a` and `x`, return the minimum non-negative number to add to / subtract from `a` to make it a multiple of `x`.

```
a = 9
x = 4

minimum(a, x) #=> 1

# 9-1 = 8 which is a multiple of 4
```

```
a = 10
x = 6

minimum(a, x) #=> 2

# 10+2 = 12 which is a multiple of 6
```

## Note

* 0 is always a multiple of `x`

## Constraints

1 <= a <= 107

1 <= x <= 108