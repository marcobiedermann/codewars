# [Sort the Gift Code](https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3)

### Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

### Sort the Gift Code

Write a function called `sortGiftCode`/`sort_gift_code`/`SortGiftCode` that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

### Examples:

```javascript
sortGiftCode('abcdef'); //=> returns 'abcdef'
sortGiftCode('pqksuvy'); //=> returns 'kpqsuvy'
sortGiftCode('zyxwvutsrqponmlkjihgfedcba'); //=> returns 'abcdefghijklmnopqrstuvwxyz'
```

```coffeescript
sortGiftCode( 'abcdef' ); //=> returns 'abcdef'
sortGiftCode( 'pqksuvy' ); //=> returns 'kpqsuvy'
sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' ); //=> returns 'abcdefghijklmnopqrstuvwxyz'
```

```ruby
sort_gift_code( 'abcdef' ) #=> returns 'abcdef'
sort_gift_code( 'pqksuvy' ) #=> returns 'kpqsuvy'
sort_gift_code( 'zyxwvutsrqponmlkjihgfedcba' ) #=> returns 'abcdefghijklmnopqrstuvwxyz'
```

```python
sort_gift_code( 'abcdef' ) # 'abcdef'
sort_gift_code( 'pqksuvy' ) # 'kpqsuvy'
sort_gift_code( 'zyxwvutsrqponmlkjihgfedcba' ) # 'abcdefghijklmnopqrstuvwxyz'
```

```java
GiftSorter gs = new GiftSorter();
gs.sortGiftCode( 'abcdef' ); //=>  'abcdef'
gs.sortGiftCode( 'pqksuvy' ); //=>  'kpqsuvy'
gs.sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' ); //=>  'abcdefghijklmnopqrstuvwxyz'
```

```haskell
sortGiftCode "abcdef"                      -- => returns "abcdef"
sortGiftCode "pqksuvy"                     -- => returns "kpqsuvy"
sortGiftCode "zyxwvutsrqponmlkjihgfedcba"  -- => returns "abcdefghijklmnopqrstuvwxyz"
```

```csharp
Kata.SortGiftCode("abcdef") => "abcdef"
Kata.SortGiftCode("pqksuvy") => "kpqsuvy"
Kata.SortGiftCode("zyxwvutsrqponmlkjihgfedcba") => "abcdefghijklmnopqrstuvwxyz"
```

---

## Tags

- Algorithms
- Data Types
- Fundamentals
- Hacking Holidays
- Logic
- Sorting
- Strings
