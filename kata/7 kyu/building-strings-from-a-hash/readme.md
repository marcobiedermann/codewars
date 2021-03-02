# [Building Strings From a Hash](https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2)

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

**Example:**

```javascript
solution({ a: 1, b: '2' }); // should return "a = 1,b = 2"
```

```coffeescript
solution({a: 1, b: '2'}) # should return "a = 1,b = 2"
```

```ruby
solution({"a" => 1, "b" => '2'}) # should return "a = 1,b = 2"
```

```csharp
Kata.StringifyDict(new Dictionary<char, int> {{'a', 1}, {'b', 2}}) => "a = 1,b = 2";
```

```fsharp
let dict = [
    'a',1
] |> dict
let dictionary = new Dictionary<char,int>(dict)
solution dictionary == "a = 1"
```

```python
solution({"a": 1, "b": '2'}) # should return "a = 1,b = 2"
```

---

## Tags

- Data Types
- Fundamentals
- Strings
