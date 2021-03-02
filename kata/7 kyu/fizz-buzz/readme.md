# [Fizz Buzz](https://www.codewars.com/kata/5300901726d12b80e8000498)

Return an array containing the numbers from 1 to N, where N is the parametered value.
N will never be less than 1 (in C#, N might be less then 1).

```if:csharp
 - C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
```

Replace certain values however if any of the following conditions are met:

- If the value is a multiple of 3: use the value "Fizz" instead
- If the value is a multiple of 5: use the value "Buzz" instead
- If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

Method calling example:

```python
fizzbuzz(3) -->  [1, 2, "Fizz"]
```

```haskell
fizzbuzz(3) -->  ["1", "2", "Fizz"]
```

```kotlin
fizzBuzz(3) -->  ["1", "2", "Fizz"]
```

```csharp
string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]
```

```prolog
fizzify(3, [1, 2, "Fizz"]).
```

---

## Tags

- Algorithms
- Arrays
- Data Types
- Fundamentals
- Logic
- Numbers
