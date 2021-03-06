# [Over The Road](https://www.codewars.com/kata/5f0ed36164f2bc00283aed07)

### Task

You've just moved into a perfectly straight street with exactly `n` identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

---

### Street

```
1|   |6
3|   |4
5|   |2
```

Evens increase on the right; odds decrease on the left. House numbers start at `1` and increase without gaps.
When `n = 3`, `1` is opposite `6`, `3` opposite `4`, and `5` opposite `2`.

---

### Example

Given your house number `address` and length of street `n`, give the house number on the opposite side of the street.

```javascript
overTheRoad(address, n);
overTheRoad(1, 3) = 6;
overTheRoad(3, 3) = 4;
overTheRoad(2, 3) = 5;
overTheRoad(3, 5) = 8;
```

```CoffeeScript
overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8
```

```c
size_t over_the_road(size_t address, size_t n);
over_the_road(1, 3) == 6
over_the_road(3, 3) == 4
over_the_road(2, 3) == 5
over_the_road(3, 5) == 8
```

```python
over_the_road(address, n)
over_the_road(1, 3) = 6
over_the_road(3, 3) = 4
over_the_road(2, 3) = 5
over_the_road(3, 5) = 8
```

```julia
over_the_road(address, n)
over_the_road(1, 3) = 6
over_the_road(3, 3) = 4
over_the_road(2, 3) = 5
over_the_road(3, 5) = 8
```

```ruby
over_the_road(address, n)
over_the_road(1, 3) = 6
over_the_road(3, 3) = 4
over_the_road(2, 3) = 5
over_the_road(3, 5) = 8
```

```php
overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8
```

```prolog
over_the_road(Address, N, HouseNo)
over_the_road(1, 3, 6).
over_the_road(3, 3, 4).
over_the_road(2, 3, 5).
over_the_road(3, 5, 8).
```

```cfml
overTheRoad(address, n)
overTheRoad( 1, 3 ) = 6
overTheRoad( 3, 3 ) = 4
overTheRoad( 2, 3 ) = 5
overTheRoad( 3, 5 ) = 8
```

Both n and address could get upto 500 billion with over 200 random tests.

---

## Tags

- Algorithms
- Data Types
- Fundamentals
- Logic
- Mathematics
- Numbers
- Performance
