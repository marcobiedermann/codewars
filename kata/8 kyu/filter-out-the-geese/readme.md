# [Filter out the geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7)

Write a function, `gooseFilter` / `goose-filter` / `goose_filter` /`GooseFilter`, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

```javascript
geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
```

```csharp
var geese = new[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };
```

```python
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
```

```ruby
$geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
```

```php
$geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
```

```haskell
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
```

```racket
(define GEESE '("African" "Roman Tufted" "Toulouse" "Pilgrim" "Steinbacher"))
```

For example, if this array were passed as an argument:

```javascript
['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish'];
```

```csharp
new string[] {"Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"}
```

```python
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

```ruby
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

```php
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

```haskell
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

```racket
'("Mallard" "Hook Bill" "African" "Crested" "Pilgrim" "Toulouse" "Blue Swedish")
```

Your function would return the following array:

```javascript
['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'];
```

```csharp
new string[] {"Mallard", "Hook Bill", "Crested", "Blue Swedish"}
```

```python
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

```ruby
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

```php
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

```haskell
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

```racket
'("Mallard" "Hook Bill" "Crested" "Blue Swedish")
```

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

---

## Tags

- Arrays
- Basic Language Features
- Control Flow
- Data Types
- Functions
- Fundamentals
- Higher-order Functions
