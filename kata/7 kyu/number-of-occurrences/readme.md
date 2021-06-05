# [Number Of Occurrences](https://www.codewars.com/kata/52829c5fe08baf7edc00122b)

Write a function that returns the number of occurrences of an element in an array.

### Examples

```javascript
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences('a') === 0;
```

```haskell
let sample = [0, 1, 2, 2, 3]
numberOfOccurrences 0 sample `shouldBe` 1
numberOfOccurrences 4 sample `shouldBe` 0
numberOfOccurrences 2 sample `shouldBe` 2
```

```python
sample = [0, 1, 2, 2, 3]
number_of_occurrences(0, sample) == 1
number_of_occurrences(4, sample) == 0
number_of_occurrences(2, sample) == 2
number_of_occurrences(3, sample) == 1
```

```csharp
var sample = { 1, 0, 2, 2, 3 };
NumberOfOccurrences(0, sample) == 1;
NumberOfOccurrences(4, sample) == 0;
NumberOfOccurrences(2, sample) == 2;
NumberOfOccurrences(3, sample) == 1;
```

```cfml
var sample = [ 1, 0, 2, 2, 3 ]
numberOfOccurences(0, sample) == 1
numberOfOccurences(4, sample) == 0
numberOfOccurences(2, sample) == 2
numberOfOccurences(3, sample) == 1
```

```prolog
sample = [ 1, 0, 2, 2, 3 ].
number_of_occurrences(0, sample, 1).
number_of_occurrences(4, sample, 0).
number_of_occurrences(2, sample, 2).
number_of_occurrences(3, sample, 1).
```

---

## Tags

- Algorithms
- Arrays
- Data Types
- Fundamentals
- Logic
- Search
