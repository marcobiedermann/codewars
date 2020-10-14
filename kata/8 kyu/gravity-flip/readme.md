# [Gravity Flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The `i`-th column contains `a_i` cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, `d`, which can be either `'L'` or `'R'` (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

```
+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
```

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the `n` columns after Bob switches the gravity.

Examples:

```c
flip('R', {3, 2, 1, 2}, 4, *result)     =>  {1, 2, 2, 3}
flip('L', {1, 4, 5, 3, 5}, 5, *result)  =>  {5, 5, 4, 3, 1}
//  do not allocate memory for the return value
//  assign ints to the provided pointer *result
```

```javascript
flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
```

```python
flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
```

```haskell
gravityFlip 'R' [3, 2, 1, 2]     ->  [1, 2, 2, 3]
gravityFlip 'L' [1, 4, 5, 3, 5]  ->  [5, 5, 4, 3, 1]
```

```ruby
"R", [3, 2, 1, 2]     -->  [1, 2, 2, 3]
"L", [1, 4, 5, 3, 5]  -->  [5, 5, 4, 3, 1]
```

```prolog
flip('R', [3, 2, 1, 2], [1, 2, 2, 3]).
flip('L', [1, 4, 5, 3, 5], [5, 5, 4, 3, 1]).
```

```fortran
CALL flip('R', [3, 2, 1, 2], res) --> res = [1, 2, 2, 3]
CALL flip('L', [1, 4, 5, 3, 5], res) --> res = [5, 5, 4, 3, 1]
```

```powershell
flip 'R' @(3, 2, 1, 2) --> @(1, 2, 2, 3)
flip 'L' @(1, 4, 5, 3, 5) --> @(5, 5, 4, 3, 1)
```

```typescript
flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
```

```cfml
flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
```

```rust
flip('R', &vec![3, 2, 1, 2])     =>  vec![1, 2, 2, 3]
flip('L', &vec![1, 4, 5, 3, 5])  =>  vec![5, 5, 4, 3, 1]
```

```julia
flip('R', [3, 2, 1, 2])    -->  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5]) -->  [5, 5, 4, 3, 1]
```

---

## Tags

- Fundamentals
- Games
- Puzzles
