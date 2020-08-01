# [Ordered Count of Characters](https://www.codewars.com/kata/57a6633153ba33189e000074)

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

```python
ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
```

```ruby
ordered_count("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
```

```haskell
orderedCount "abracadabra" == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
```

```scala
Kata.orderedCount("abracadabra") == List(('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1))
```

```groovy
Kata.orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
```

```csharp
Kata.OrderedCount("abracadabra") == new List<Tuple<char, int>> () {
  new Tuple<char, int>('a', 5),
  new Tuple<char, int>('b', 2),
  new Tuple<char, int>('r', 2),
  new Tuple<char, int>('c', 1),
  new Tuple<char, int>('d', 1)
}
```

```javascript
orderedCount('abracadabra') ==
  [
    ['a', 5],
    ['b', 2],
    ['r', 2],
    ['c', 1],
    ['d', 1],
  ];
```

```julia
# Note the single quotes: don't use a string, a character is used instead
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
```

```crystal
# Note the single quotes: don't use a string, a character is used instead
ordered_count("abracadabra") == [{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1}]
```

```php
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
```

```fsharp
orderedCount("abracadabra") = [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
```

```c
ordered_count("abracadabra", *szout);

// using:
typedef struct Character_Count_Pair {
    char character;
    size_t count;
} ccp;

// returns:
{{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1}}

// assigns length:
szout = 5
```

```go
OrderedCount("abracadabra") == []Tuple{Tuple{'a', 5}, Tuple{'b', 2}, Tuple{'r', 2}, Tuple{'c', 1}, Tuple{'d', 1}}

// Where
type Tuple struct {
	Char  rune
	Count int
}
```

```vb
Kata.OrderedCount("abracadabra") == new List(Of Tuple(Of Char, Integer)) () From {
  new Tuple(char, int)("a"c, 5),
  new Tuple(char, int)("b"c, 2),
  new Tuple(char, int)("r"c, 2),
  new Tuple(char, int)("c"c, 1),
  new Tuple(char, int)("d"c, 1)
}
```

```rust
ordered_count("abracadabra") == vec![('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
```

```typescript
orderedCount('abracadabra') ==
  [
    ['a', 5],
    ['b', 2],
    ['r', 2],
    ['c', 1],
    ['d', 1],
  ];
```

---

## Tags

- Fundamentals
