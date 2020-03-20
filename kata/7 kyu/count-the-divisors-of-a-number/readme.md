# [Count the divisors of a number](https://www.codewars.com/kata/542c0f198e077084c0000c2e)

Count the number of divisors of a positive integer `n`.

Random tests go up to `n = 500000`.

## Examples

```c
divisors(4)  == 3  //  1, 2, 4
divisors(5)  == 2  //  1, 5
divisors(12) == 6  //  1, 2, 3, 4, 6, 12
divisors(30) == 8  //  1, 2, 3, 5, 6, 10, 15, 30
```

```coffeescript
getDivisorsCnt = (4)  -> 3  // 1, 2, 4
getDivisorsCnt = (5)  -> 2  // 1, 5
getDivisorsCnt = (12) -> 6  // 1, 2, 3, 4, 6, 12
getDivisorsCnt = (30) -> 8  // 1, 2, 3, 5, 6, 10, 15, 30
```

```crystal
divisors(4)  = 3  # 1, 2, 4
divisors(5)  = 2  # 1, 5
divisors(12) = 6  # 1, 2, 3, 4, 6, 12
divisors(30) = 8  # 1, 2, 3, 5, 6, 10, 15, 30
```

```csharp
Kata.Divisors(4)  -> 3 -- 1, 2, 4
Kata.Divisors(5)  -> 2 -- 1, 5
Kata.Divisors(12) -> 6 -- 1, 2, 3, 4, 6, 12
Kata.Divisors(30) -> 8 -- 1, 2, 3, 5, 6, 10, 15, 30
```

```factor
4 divisors  -> 3 ! 1, 2, 4
5 divisors  -> 2 ! 1, 5
12 divisors -> 6 ! 1, 2, 3, 4, 6, 12
30 divisors -> 8 ! 1, 2, 3, 5, 6, 10, 15, 30
```

```haskell
divisors 4  = 3 -- 1, 2, 4
divisors 5  = 2 -- 1, 5
divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30
```

```java
numberOfDivisors(4)  == 3 // 1, 2, 4
numberOfDivisors(5)  == 2 // 1, 5
numberOfDivisors(12) == 6 // 1, 2, 3, 4, 6, 12
numberOfDivisors(30) == 8 // 1, 2, 3, 5, 6, 10, 15, 30
```

```javascript
divisors(4) = 3; // 1, 2, 4
divisors(5) = 2; // 1, 5
divisors(12) = 6; // 1, 2, 3, 4, 6, 12
divisors(30) = 8; // 1, 2, 3, 5, 6, 10, 15, 30
```

```php
divisors($4)  == 3  // 1, 2, 4
divisors($5)  == 2  // 1, 5
divisors($12) == 6  // 1, 2, 3, 4, 6, 12
divisors($30) == 8  // 1, 2, 3, 5, 6, 10, 15, 30
```

```prolog
divisors(4, Result)  % Result is 3 (1, 2, 4)
divisors(5, Result)  % Result is 2 (1, 5)
divisors(12, Result) % Result is 6 (1, 2, 3, 4, 6, 12)
divisors(30, Result) % Result is 8 (1, 2, 3, 5, 6, 10, 15, 30)
```

```python
divisors(4)  == 3  # 1, 2, 4
divisors(5)  == 2  # 1, 5
divisors(12) == 6  # 1, 2, 3, 4, 6, 12
divisors(30) == 8  # 1, 2, 3, 5, 6, 10, 15, 30
```

```racket
(divisors 4)  = 3  #| 1, 2, 4 |#
(divisors 5)  = 2  #| 1, 5 |#
(divisors 12) = 6  #| 1, 2, 3, 4, 6, 12 |#
(divisors 30) = 8  #| 1, 2, 3, 5, 6, 10, 15, 30 |#
```

```ruby
divisors(4)  -> 3 # 1, 2, 4
divisors(5)  -> 2 # 1, 5
divisors(12) -> 6 # 1, 2, 3, 4, 6, 12
divisors(30) -> 8 # 1, 2, 3, 5, 6, 10, 15, 30
```

```typescript
divisors(4) = 3; // 1, 2, 4
divisors(5) = 2; // 1, 5
divisors(12) = 6; // 1, 2, 3, 4, 6, 12
divisors(30) = 8; // 1, 2, 3, 5, 6, 10, 15, 30
```

```golang
divisors(4)  == 3  //  1, 2, 4
divisors(5)  == 2  //  1, 5
divisors(12) == 6  //  1, 2, 3, 4, 6, 12
divisors(30) == 8  //  1, 2, 3, 5, 6, 10, 15, 30
```

---

## Tags

- Algorithms
- Arithmetic
- Fundamentals
- Logic
- Mathematics
- Numbers
