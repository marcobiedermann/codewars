# [Count words](https://www.codewars.com/kata/570cc83df616a85944001315)

Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

```javascript
countWords('Hello'); // returns 1 as int
countWords('Hello, World!'); // returns 2
countWords('No results for search term `s`'); // returns 6
countWords(' Hello'); // returns 1
// ... and so on
```

```python
count_words("Hello"); # returns 1 as int
count_words("Hello, World!") # returns 2
count_words("No results for search term `s`") # returns 6
count_words(" Hello") # returns 1
# ... and so on
```

```ruby
count_words("Hello"); # returns 1 as int
count_words("Hello, World!") # returns 2
count_words("No results for search term `s`") # returns 6
count_words(" Hello") # returns 1
# ... and so on
```

What kind of tests we made for your code:

1. Function have to count words and not spaces. You have to be sure that you doing it right
2. Empty string has no words.
3. String with spaces around should be trimmed.
4. Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
5. Doublecheck that words with chars like -, ', ` are counted right.

---

## Tags

- Data Types
- Fundamentals
- Strings
