# [Hungarian Vowel Harmony (easy)](https://www.codewars.com/kata/57fd696e26b06857eb0011e7)

[Vowel harmony](https://en.wikipedia.org/wiki/Vowel_harmony) is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" ([wikipedia](https://en.wikipedia.org/wiki/Vowel_harmony#Hungarian)). This kata is based on [vowel harmony in Hungarian](https://en.wikipedia.org/wiki/Vowel_harmony#Hungarian).

### Task:

Your goal is to create a function `dative()` (`Dative()` in C#) which returns the valid form of a valid Hungarian word `w` in [dative case](http://www.hungarianreference.com/Nouns/nak-nek-dative.aspx) i. e. append the correct suffix `nek` or `nak` to the word `w` based on vowel harmony rules.

### Vowel Harmony Rules (simplified)

When the last vowel in the word is

1. a _front vowel_ (`e, é, i, í, ö, ő, ü, ű`) the suffix is `-nek`
2. a _back vowel_ (`a, á, o, ó, u, ú`) the suffix is `-nak`

### Examples:

```javascript
dative('ablak') == 'ablaknak';
dative('szék') == 'széknek';
dative('otthon') == 'otthonnak';
```

```python
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"
```

```php
dative("ablak"); // "ablaknak"
dative("szék"); // "széknek"
dative("otthon"); // "otthonnak"
```

```haskell
dative "ablak"   -- "ablaknak"
dative "szék"    -- "széknek"
dative "otthon"  -- "otthonnak"
```

```groovy
Kata.dative("ablak") == "ablaknak"
Kata.dative("szék") == "széknek"
Kata.dative("otthon") == "otthonnak"
```

```csharp
Kata.Dative("ablak") == "ablaknak"
Kata.Dative("szék") == "széknek"
Kata.Dative("otthon") == "otthonnak"
```

```scala
Kata.dative("ablak") == "ablaknak"
Kata.dative("szék") == "széknek"
Kata.dative("otthon") == "otthonnak"
```

```java
Kata.dative("ablak") == "ablaknak"
Kata.dative("szék") == "széknek"
Kata.dative("otthon") == "otthonnak"
```

```go
Dative("ablak") ==> "ablaknak", nil
Dative("szék") ==> "széknek", nil
Dative("otthon") ==> "otthonnak", nil
```

```rust
dative("ablak") // "ablaknak"
dative("szék") // "széknek"
dative("otthon") // "otthonnak"
```

### Preconditions:

1. To keep it simple: All words end with a consonant :)
2. All strings are unicode strings.
3. There are no grammatical exceptions in the tests.

---

## Tags

- Data Types
- Fundamentals
- Strings
