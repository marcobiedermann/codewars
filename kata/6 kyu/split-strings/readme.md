# [Split Strings](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

Examples:

```javascript
solution('abc'); // should return ['ab', 'c_']
solution('abcdef'); // should return ['ab', 'cd', 'ef']
```

```php
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
```

```csharp
SplitString.Solution("abc"); // should return ["ab", "c_"]
SplitString.Solution("abcdef"); // should return ["ab", "cd", "ef"]
```

```coffeescript
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
```

```ruby
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
```

```elixir
solution("abc") # should return ["ab", "c_"]
solution("abcdef") # should return ["ab", "cd", "ef"]
```

```julia
solution("abc") # should return ["ab", "c_"]
solution("abcdef") # should return ["ab", "cd", "ef"]
```

```python
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
```

```haskell
solution "abc" `shouldBe` ["ab", "c_"]
solution "abcdef" `shouldBe` ["ab", "cd", "ef"]
```

```go
Solution("abc") //should return ["ab", "c_"]
Solution("abcdef") //should return ["ab", "cd", "ef"]
```

```scala
solution('abc')    // should return List("ab", "c_")
solution('abcdef') // should return List("ab", "cd", "ef")
```

```clojure
(solution "abc") ; => ["ab" "c_"]
(solution "abcd") ; => ["ab" "cd"]
```

```java
StringSplit.solution("abc") // should return {"ab", "c_"}
StringSplit.solution("abcdef") // should return {"ab", "cd", "ef"}
```

```c
solution("abc", &count) // should return {"ab", "c_"} with count == 2
solution("abcdef", &count) // should return {"ab", "cd", "ef"} with count == 3

The returned array and strings will be free'd.
```

```cpp
solution("abc") // should return {"ab", "c_"}
solution("abcdef") // should return {"ab", "cd", "ef"}
```

---

## Tags

- Advanced Language Features
- Algorithms
- Data Types
- Declarative Programming
- Fundamentals
- Programming Paradigms
- Regular Expressions
- Strings
