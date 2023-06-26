# [Contamination #1 -String-](https://www.codewars.com/kata/596fba44963025c878000039)

An AI has infected a text with a character!!

This text is now **fully mutated** to this character.

```if-not:riscv
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

**Note:** The character is a string of length 1 or an empty string.
```

```if:riscv
If the text is empty, return an empty string.
```

# Example

```
text before = "abc"
character   = "z"
text after  = "zzz"
```

````if:riscv
RISC-V: The function signature is

```c
void contamination(const char *text, char mutation, char *result);
```

The function does not have a return value - you should write the mutated string into `result`. You may safely assume that `result` will be large enough to hold the result.
````

---

## Tags

- Fundamentals
- Strings
