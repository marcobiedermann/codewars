# [Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

# Sum Array

Write a method `sum` (`sum_array` in python, `sumarray` in julia, `SumArray` in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

## Examples

```ruby
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
```

```dart
sum([1, 5.2, 4, 0, -1]) // 9.2
```

```crystal
sum([1, 5.2, 4, 0, -1]) # 9.2
```

```cpp
sum({1, 5, 4, 0, -1}) // 9
```

```julia
sumarray([1, 5.2, 4, 0, -1]) # 9.2
```

```elixir
IO.inspect SumNumbers.sum([1, 5.2, 4, 0, -1])
9.2
```

```php
sum([1, 5.2, 4, 0, -1]); // => 9.2
```

```haskell
print $ sum [1, 5.2, 4, 0, -1]
> 9.2

print $ sum []
> 0
```

```coffeescript
sum [1, 5.2, 4, 0, -1]
> 9.2

sum []
> 0
```

```clojure
(println (sum [1 2 3]))
> 6
(println (sum []))
> 0
```

```python
print sum_array([1 2 3])
> 6
print sum_array([])
> 0
```

```csharp
Kata.SumArray(new int[] {1, 2, 3}) => 6
```

```r
sum_array(c(1, 5.2, 4, 0, -1))
[1] 9.2
sum_array(c())
[1] 0
```

```nasm
printf("%d", sum_array((int32_t []){1, 2, 3}));
> 6
printf("%d", sum_array((int32_t []){1, 2, -3}));
> 0
```

```racket
> (sum '(1 2 3))
6
```

```factor
{ 1 2 3 } sum-array ! 6
```

## Assumptions

- You can assume that you are only given numbers.
- You cannot assume the size of the array.
- You can assume that you do get an array and if the array is empty, return 0.

---

## Tags

- Arrays
- Basic Language Features
- Control Flow
- Data Types
- Fundamentals
- Loops
