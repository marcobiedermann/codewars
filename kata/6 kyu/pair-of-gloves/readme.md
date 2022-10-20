# [Pair of gloves](https://www.codewars.com/kata/58235a167a8cb37e1a0000db)

## Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

### Examples:

```
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
```

```if:lambdacalc
### Encodings

purity: `LetRec`
numEncoding: `Church`
export constructors `nil, cons` for your `List` encoding

### `Preloaded`

datatypes `Colour` and `Ordering` ( both in Scott encoding ) and
`compare : Colour -> Colour -> Ordering` are exported from `Preloaded`
`compare` is used as `compare colour1 colour2 (colour1<colour2) (colour1==colour2) (colour1>colour2)`
eg. `le` may be derived as `\ colour1 colour2 . compare colour1 colour2 True True False`
full disclosure: for technical reasons, combinators `T, Y` are also exported from `Preloaded`
```

---

## Tags

- Arrays
- Puzzles
