# [Remove anchor from URL](https://www.codewars.com/kata/51f2b4448cadf20ed0000386)

Complete the function/method so that it returns the url with anything after the anchor (`#`) removed.

## Examples

```javascript
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about');

// returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1');
```

```c
remove_url_anchor("www.codewars.com#about")
// returns "www.codewars.com"

remove_url_anchor("www.codewars.com?page=1")
// returns "www.codewars.com?page=1"
```

```nasm
url1:  db    `www.codewars.com#about\0`
url2:  db    `www.codewars.com?page=1\0`

    mov rdi, url1
    call rmurlahr    ; RAX <- `www.codewars.com\0`

    mov rdi, url2
    call rmurlahr    ; RAX <- `www.codewars.com?page=1\0`
```

```coffeescript
# returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

# returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1')
```

```ruby
# returns 'www.codewars.com'
remove_url_anchor('www.codewars.com#about')

# returns 'www.codewars.com?page=1'
remove_url_anchor('www.codewars.com?page=1')
```

```python
# returns 'www.codewars.com'
remove_url_anchor('www.codewars.com#about')

# returns 'www.codewars.com?page=1'
remove_url_anchor('www.codewars.com?page=1')
```

```csharp
Kata.RemoveUrlAnchor("www.codewars.com#about") => "www.codewars.com"
Kata.RemoveUrlAnchor("www.codewars.com?page=1") => "www.codewars.com?page=1"
```

```haskell
removeUrlAnchor "www.codewars.com#about"  == "www.codewars.com"
removeUrlAnchor "www.codewars.com?page=1" == "www.codewars.com?page=1"
```

---

## Tags

- Advanced Language Features
- Data Types
- Declarative Programming
- Fundamentals
- Programming Paradigms
- Regular Expressions
- Strings
