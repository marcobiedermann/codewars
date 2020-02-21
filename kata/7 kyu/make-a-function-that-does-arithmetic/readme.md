# [Make a function that does arithmetic!](https://www.codewars.com/kata/583f158ea20cfcbeb400000a)

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

`a` and `b` will both be positive integers, and `a` will always be the first number in the operation, and `b` always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

```javascript
arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
```

```haskell
-- In Haskell:

-- 1. The operation is defined as
data Operation = Add | Divide | Multiply | Subtract deriving (Eq, Show, Enum, Bounded)

-- 2. The arithmetic function as
arithmetic :: Double -> Double -> Operation -> Double
arithmetic :: Fractional a => a -> a -> Operation -> a
```

```csharp
Kata.Arithmetic(5, 2, "add")      => 7
Kata.Arithmetic(5, 2, "subtract") => 3
Kata.Arithmetic(5, 2, "multiply") => 10
Kata.Arithmetic(5, 2, "divide")   => 2.5
```

```javascript
ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
```

```go
Arithmetic(5, 2, "add")      => returns 7
Arithmetic(5, 2, "subtract") => returns 3
Arithmetic(5, 2, "multiply") => returns 10
Arithmetic(5, 2, "divide")   => returns 2
```

Try to do it without using if statements!

---

## Tags

- Algorithms
- Arithmetic
- Data Types
- Fundamentals
- Logic
- Mathematics
- Numbers
- Objects
