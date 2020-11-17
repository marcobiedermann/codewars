# [My Languages](https://www.codewars.com/kata/5b16490986b6d336c900007d)

## Your task

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least `60`, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

## Examples

```ruby
{"Java" => 10, "Ruby" => 80, "Python" => 65}   -->  ["Ruby", "Python"]
{"Hindi" => 60, "Dutch" => 93, "Greek" => 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++" => 50, "ASM" => 10, "Haskell" => 20}    -->  []
```

```python
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
```

```javascript
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
```

```haskell
[ ("Java", 10), ("Ruby", 80), ("Python", 65) ]     ->  ["Ruby", "Python"]
[ [ ("Hindi", 60), ("Dutch", 93), ("Greek", 71) ]  ->  ["Dutch", "Greek", "Hindi"]
[ ("C++", 50), ("ASM", 10), ("Haskell", 20) ]      ->  []
```

```csharp
new Dictionary<string, int> {{"Java", 10}, {"Ruby", 80}, {"Python", 65}} => {"Ruby", "Python"}
new Dictionary<string, int> {{"Hindi", 60}, {"Greek", 71}, {"Dutch", 93}} => {"Dutch", "Greek", "Hindi"}
new Dictionary<string, int> {{"C++", 50}, {"ASM", 10}, {"Haskell", 20}} => {}
```

```powershell
@{"Java" = 10; "Ruby" = 80; "Python" = 65}  --> @("Ruby", "Python")
@{"Hindi"= 60; "Greek"= 71; "Dutch"= 93}    --> @("Dutch", "Greek", "Hindi")
@{"C++"= 50; "ASM"= 10; "Haskell"= 20}      --> @()
```

---

## My other katas

If you enjoyed this kata then please try [my other katas](https://www.codewars.com/collections/katas-created-by-anter69)! :-)

### _Translations are welcome!_

---

## Tags

- Algorithms
- Arrays
- Data Structures
- Data Types
- Hashes
- Logic
- Sorting
