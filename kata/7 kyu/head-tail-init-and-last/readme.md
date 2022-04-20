# [Head, Tail, Init and Last](https://www.codewars.com/kata/54592a5052756d5c5d0009c3)

Haskell has some useful functions for dealing with lists:

```haskell
$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
```

Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

```haskell
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
```

Here's how I expect the functions to be called in your language:

```coffeescript
head [1,2,3,4,5] => 1
tail [1,2,3,4,5] => [2,3,4,5]
```

```javascript
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
```

```typescript
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
```

```python
head([1,2,3,4,5]) => 1
tail([1,2,3,4,5]) => [2,3,4,5]
```

```ruby
head [1,2,3,4,5] => 1
tail [1,2,3,4,5] => [2,3,4,5]
```

```clojure
(head [1,2,3,4,5]) => 1
(tail [1,2,3,4,5]) => [2,3,4,5]
```

```haskell
head [1,2,3,4,5] => 1
tail [1,2,3,4,5] => [2,3,4,5]
```

```csharp
new List<int> {1, 2, 3, 4, 5}.Head() => 1
new List<int> {1, 2, 3, 4, 5}.Tail() => new List<int> {2, 3, 4, 5}
```

---

_Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests_

```if:clojure
__PLEASE NOTE:__ Clojure's `last` function shall be called `last_` to prevent name clashes.
```

```if:csharp
__PLEASE NOTE:__ C#'s `Last` function shall be called `Last_` to prevent name clashes.
```

---

## Tags

- Arrays
- Basic Language Features
- Data Structures
- Data Types
- Fundamentals
- Lists
- Ranges
