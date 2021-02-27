# [Triple trouble](https://www.codewars.com/kata/55d5434f269c0c3f1b000058)

Write a function 
```csharp
TripleDouble(long num1, long num2)
```
```java
TripleDouble(long num1, long num2)
```
```javascript 
tripledouble(num1,num2)
```
```python
triple_double(num1, num2)
```
```ruby
triple_double(num1, num2)
```
```scala
tripleDouble(num1: Long, num2: Long): Int
```
which takes numbers `num1` and `num2` and returns `1` if there is a straight triple of a number at any place in `num1` and also a straight double of the **same** number in `num2`.

If this isn't the case, return `0`


## Examples

```javascript
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
```

```csharp
TripleDouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

TripleDouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

TripleDouble(12345, 12345) == 0

TripleDouble(666789, 12345667) == 1
```

```java
TripleDouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

TripleDouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

TripleDouble(12345, 12345) == 0

TripleDouble(666789, 12345667) == 1
```

```python
triple_double(451999277, 41177722899) == 1
# num1 has straight triple 999s and num2 has straight double 99s

triple_double(1222345, 12345) == 0
# num1 has straight triple 2s but num2 has only a single 2

triple_double(12345, 12345) == 0

triple_double(666789, 12345667) == 1
```

```ruby
triple_double(451999277, 41177722899) == 1
# num1 has straight triple 999s and  num2 has straight double 99s

triple_double(1222345, 12345) == 0
# num1 has straight triple 2s but num2 has only a single 2

triple_double(12345, 12345) == 0

triple_double(666789, 12345667) == 1
```

```scala
// num1 has straight triple 999s and num2 has straight double 99s
tripleDouble(451999277, 41177722899) == 1

// num1 has straight triple 2s but num2 has only a single 2:
tripleDouble(1222345, 12345) == 0

tripleDouble(12345, 12345) == 0

tripleDouble(666789, 12345667) == 1
```

---

## Tags

* Algorithms
