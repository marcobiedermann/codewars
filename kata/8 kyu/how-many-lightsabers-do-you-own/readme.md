# [How many lightsabers do you own?](https://www.codewars.com/kata/51f9d93b4095e0a7200001b8)

Inspired by the development team at Vooza, write the function `howManyLightsabersDoYouOwn`/`how_many_light_sabers_do_you_own` that

- accepts the name of a programmer, and
- returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

```if:coffeescript,javascript,php,python,ruby,typescript
**Note**: your function should have a default parameter.
```

```c
howManyLightsabersDoYouOwn("anyone else") == 0
howManyLightsabersDoYouOwn("Zach") == 18
```

```clojure
(howManyLightsabersDoYouOwn "Anny Wan-Else")     == 0
(howManyLightsabersDoYouOwn "Hugh R. Dareader")  == 0
(howManyLightsabersDoYouOwn "Zach")              == 18
```

```coffeescript
howManyLightsabersDoYouOwn("anyone else") == 0
howManyLightsabersDoYouOwn("Zach") == 18
howManyLightsabersDoYouOwn() == 0
```

```c#
Kata.HowManyLightsabersDoYouOwn("Adam") == 0
Kata.HowManyLightsabersDoYouOwn("Zach") == 18
```

```elixir
how_many_lightsabers_do_you_own("Adam") == 0
how_many_lightsabers_do_you_own("Zach") == 18
```

```haskell
howManyLightsabersDoYouOwn "" == 0
howManyLightsabersDoYouOwn "Zach" == 18
```

```javascript
howManyLightsabersDoYouOwn('anyone else') === 0;
howManyLightsabersDoYouOwn('Zach') === 18;
howManyLightsabersDoYouOwn() === 0;
```

```php
howManyLightsabersDoYouOwn('Zach') === 18
howManyLightsabersDoYouOwn('Adam') === 0
howManyLightsabersDoYouOwn()       === 0
```

```python
how_many_light_sabers_do_you_own('Zach') == 18
how_many_light_sabers_do_you_own('Adam') == 0
how_many_light_sabers_do_you_own()       == 0
```

```ruby
how_many_light_sabers_do_you_own('Zach') == 18
how_many_light_sabers_do_you_own('Adam') == 0
how_many_light_sabers_do_you_own()       == 0
```

```rust
how_many_lightsabers_do_you_own("Adam") // => 0
how_many_lightsabers_do_you_own("Zach") // => 18
```

```typescript
howManyLightsabersDoYouOwn('anyone else') == 0;
howManyLightsabersDoYouOwn('Zach') == 18;
howManyLightsabersDoYouOwn() == 0;
```

```racket
(how-many-light-sabers-do-you-own "")      ; 0
(how-many-light-sabers-do-you-own "Adam")  ; 0
(how-many-light-sabers-do-you-own "Zach")  ; 18
```

---

## Tags

- Fundamentals
