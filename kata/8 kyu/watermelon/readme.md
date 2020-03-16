# [Watermelon](https://www.codewars.com/kata/55192f4ecd82ff826900089e)

# It's too hot, and they can't even…

One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

# Task

Given an integral number of watermelons `w` (`1 ≤ w ≤ 100`; `1 ≤ w` in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

## Examples

```elixir
divide(2) == false # 2 = 1 + 1
divide(3) == false # 3 = 1 + 2
divide(4) == true  # 4 = 2 + 2
divide(5) == false # 5 = 2 + 3
divide(6) == true  # 6 = 2 + 4
```

```crystal
divide(2) == false # 2 = 1 + 1
divide(3) == false # 3 = 1 + 2
divide(4) == true  # 4 = 2 + 2
divide(5) == false # 5 = 2 + 3
divide(6) == true  # 6 = 2 + 4
```

```clojure
(divide 2) ;; false ;; 2 = 1 + 1
(divide 3) ;; false ;; 3 = 1 + 2
(divide 4) ;; true  ;; 4 = 2 + 2
(divide 5) ;; false ;; 5 = 2 + 3
(divide 6) ;; true  ;; 6 = 2 + 4
```

```csharp
Watermelon.divide(2) == false // 2 = 1 + 1
Watermelon.divide(3) == false // 3 = 1 + 2
Watermelon.divide(4) == true  // 4 = 2 + 2
Watermelon.divide(5) == false // 5 = 2 + 3
Watermelon.divide(6) == true  // 6 = 2 + 4
```

```javascript
divide(2) === false; // 2 = 1 + 1
divide(3) === false; // 3 = 1 + 2
divide(4) === true; // 4 = 2 + 2
divide(5) === false; // 5 = 2 + 3
divide(6) === true; // 6 = 2 + 4
```

```haskell
divide 1 `shouldBe` False
divide 2 `shouldBe` False
divide 3 `shouldBe` False
divide 4 `shouldBe` True
divide 5 `shouldBe` False
divide 6 `shouldBe` True
```

```prolog
divide(2) == 0 (2 = 1 + 1)
divide(3) == 0 (3 = 1 + 2)
divide(4) == 1 (4 = 2 + 2)
divide(5) == 0 (5 = 2 + 3)
divide(6) == 1 (6 = 2 + 4)
```

```java
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```kotlin
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```cpp
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```c
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```dart
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```cfml
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```nasm
divide(2) == false // 2 = 1 + 1
divide(3) == false // 3 = 1 + 2
divide(4) == true  // 4 = 2 + 2
divide(5) == false // 5 = 2 + 3
divide(6) == true  // 6 = 2 + 4
```

```julia
divide(2) == false # 2 = 1 + 1
divide(3) == false # 3 = 1 + 2
divide(4) == true  # 4 = 2 + 2
divide(5) == false # 5 = 2 + 3
divide(6) == true  # 6 = 2 + 4
```

---

## Tags

- Algorithms
- Fundamentals
- Logic
- Mathematics
- Numbers
