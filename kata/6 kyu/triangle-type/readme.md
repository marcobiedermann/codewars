# [Triangle type](https://www.codewars.com/kata/53907ac3cd51b69f790006c5)

In this kata, you should calculate type of triangle with three given sides `a`, `b` and `c` (given in any order).

If all angles are less than `90°`, this triangle is `acute` and function should return `1`.

If one angle is strictly `90°`, this triangle is `right` and function should return `2`.

If one angle more than `90°`, this triangle is `obtuse` and function should return `3`.

If three sides cannot form triangle, or one angle is `180°` (which turns triangle into segment) - function should return `0`.

Input parameters are `sides` of given triangle. All input values are non-negative floating point or integer numbers (or both).

<table style="background: white; color: black;">
<tr>
<td>
<img src='http://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Triangle.Acute.svg/181px-Triangle.Acute.svg.png'><center>Acute
</td>
<td>
<img src='http://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Triangle.Right.svg/150px-Triangle.Right.svg.png'><center>Right
</td>
<td>
<img src='http://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Triangle.Obtuse.svg/113px-Triangle.Obtuse.svg.png'><center>Obtuse
</td>
</tr>
</table>

### Examples:

```javascript
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

```coffeescript
triangleType 2, 4, 6 # return 0 (Not triangle)
triangleType 8, 5, 7 # return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType 3, 4, 5 # return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType 7, 12, 8 # return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

```ruby
triangle_type(2, 4, 6) # return 0 (Not triangle)
triangle_type(8, 5, 7) # return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangle_type(3, 4, 5) # return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangle_type(7, 12, 8) # return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

```python
triangle_type(2, 4, 6) # return 0 (Not triangle)
triangle_type(8, 5, 7) # return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangle_type(3, 4, 5) # return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangle_type(7, 12, 8) # return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

```clojure
(triangle-type 2 4 6)  ; return 0 (Not triangle)
(triangle-type 8 5 7)  ; return 1 (Acute, angles are approx. 82°, 38° and 60°)
(triangle-type 3 4 5)  ; return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(triangle-type 7 12 8) ; return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

```c
triangleType(2, 4, 6)  // returns 0 (not a triangle)
triangleType(8, 5, 7)  // returns 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5)  // returns 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8) // returns 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

---

## Tags

- Algorithms
- Geometry
- Mathematics
