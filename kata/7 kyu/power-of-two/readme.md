# [Power of two](https://www.codewars.com/kata/534d0a229345375d520006a0)

Complete the function `power_of_two`/`powerOfTwo` (or equivalent, depending on your language) that determines if a given non-negative integer is a [power of two](https://en.wikipedia.org/wiki/Power_of_two). From the corresponding Wikipedia entry:

> _a power of two is a number of the form 2<sup>n</sup> where **n** is an integer, i.e. the result of exponentiation with number two as the base and integer **n** as the exponent._

You may assume the input is always valid.

## Examples

````if-not:nasm
```ruby
power_of_two?(1024) # true
power_of_two?(4096) # true
power_of_two?(333)  # false
```
```python
power_of_two(1024) ==> True
power_of_two(4096) ==> True
power_of_two(333)  ==> False
```
```javascript
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
```
```julia
poweroftwo(1024) # true
poweroftwo(4096) # true
poweroftwo(333)  # false
```
```haskell
isPowerOfTwo       1 `shouldBe` True
isPowerOfTwo       2 `shouldBe` True
isPowerOfTwo       6 `shouldBe` False
isPowerOfTwo       8 `shouldBe` True
isPowerOfTwo    1024 `shouldBe` True
isPowerOfTwo    1026 `shouldBe` False
```
```purescript
powerOfTwo 1 `shouldEqual` true
powerOfTwo 2 `shouldEqual` true
powerOfTwo 6 `shouldEqual` false
powerOfTwo 8 `shouldEqual` true
powerOfTwo 1024 `shouldEqual` true
powerOfTwo 1026 `shouldEqual` false
```
```c
power_of_two(0);     // returns false
power_of_two(16);    // returns true
power_of_two(100);   // returns false
power_of_two(1024);  // returns true
power_of_two(20000); // returns false
```
```rust
power_of_two(0); // false
power_of_two(1); // true
power_of_two(2); // true
power_of_two(37); // false
power_of_two(64); // true
```
````

````if:nasm
```
mov edi, 0
call power_of_two    ; returns false (zero)
mov edi, 16
call power_of_two    ; returns true (non-zero)
mov edi, 100
call power_of_two    ; returns false
mov edi, 1024
call power_of_two    ; returns true
mov edi, 20000
call power_of_two    ; returns false
```
````

Beware of certain edge cases - for example, `1` is a power of `2` since `2^0 = 1` and `0` is not a power of `2`.

---

## Tags

- Algorithms
- Fundamentals
- Logic
- Mathematics
- Numbers
