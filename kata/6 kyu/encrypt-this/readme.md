# [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449)

## Acknowledgments:

I thank [yvonne-liu](https://www.codewars.com/users/yvonne-liu) for the idea and for the example tests :)

## Description:

Encrypt this!

You want to create secret messages which can be deciphered by the [Decipher this!](https://www.codewars.com/kata/decipher-this) kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
   - The first letter must be converted to its ASCII code.
   - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

## Examples:

```haskell
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"
```

```python
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
```

```ruby
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
```

```groovy
Kata.encryptThis("Hello") == "72olle"
Kata.encryptThis("good") == "103doo"
Kata.encryptThis("hello world") == "104olle 119drlo"
```

```scala
Encrypt.encryptThis("Hello") == "72olle"
Encrypt.encryptThis("good") == "103doo"
Encrypt.encryptThis("hello world") == "104olle 119drlo"
```

```java
Kata.encryptThis("Hello") => "72olle"
Kata.encryptThis("good") => "103doo"
Kata.encryptThis("hello world") => "104olle 119drlo"
```

```javascript
encryptThis('Hello') === '72olle';
encryptThis('good') === '103doo';
encryptThis('hello world') === '104olle 119drlo';
```

```coffeescript
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```

```c
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
```

```cpp
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
```

```go
EncryptThis("Hello") == "72olle"
EncryptThis("good") == "103doo"
EncryptThis("hello world") == "104olle 119drlo"
```

```csharp
Kata.EncryptThis("Hello") == "72olle"
Kata.EncryptThis("good") == "103doo"
Kata.EncryptThis("hello world") == "104olle 119drlo"
```

```vb
Kata.EncryptThis("Hello") = "72olle"
Kata.EncryptThis("good") = "103doo"
Kata.EncryptThis("hello world") = "104olle 119drlo"
```

```clojure
(= (encrypt-this "Hello") "72olle")
(= (encrypt-this "good" ) "103doo")
(= (encrypt-this "hello world") "104olle 119drlo")
```

```rust
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
```

```lua
solution.encrypt_this("Hello") == "72olle"
solution.encrypt_this("good") == "103doo"
solution.encrypt_this("hello world") == "104olle 119drlo"
```

```php
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```

---

## Tags

- Advanced Language Features
- Algorithms
- Arrays
- Ciphers
- Cryptography
- Data Types
- Declarative Programming
- Fundamentals
- Logic
- Programming Paradigms
- Regular Expressions
- Security
- Strings
