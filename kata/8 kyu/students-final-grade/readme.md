# [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments:
exam - grade for exam (from 0 to 100);
projects - number of completed projects (from 0 and above);

This function should return a number (final grade).
There are four types of final grades:

- 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
- 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
- 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
- 0, in other cases

Examples:

````if-not:nasm
```javascript
finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0
```
```csharp
FinalGrade(100, 12);  // 100
FinalGrade(99, 0);    // 100
FinalGrade(10, 15);   // 100

FinalGrade(85, 5);    // 90

FinalGrade(55, 3);    // 75

FinalGrade(55, 0);    // 0
FinalGrade(20, 2);    // 0
```
```python
final_grade(100, 12)  # 100
final_grade(99, 0)    # 100
final_grade(10, 15)   # 100
final_grade(85, 5)    # 90
final_grade(55, 3)    # 75
final_grade(55, 0)    # 0
final_grade(20, 2)    # 0
```
```ruby
final_grade(100, 12)  # 100
final_grade(99, 0)    # 100
final_grade(10, 15)   # 100
final_grade(85, 5)    # 90
final_grade(55, 3)    # 75
final_grade(55, 0)    # 0
final_grade(20, 2)    # 0
```
```julia
finalgrade(100, 12)  # 100
finalgrade(99, 0)    # 100
finalgrade(10, 15)   # 100
finalgrade(85, 5)    # 90
finalgrade(55, 3)    # 75
finalgrade(55, 0)    # 0
finalgrade(20, 2)    # 0
```
````

```nasm
mov edi, 100
mov esi, 12
call final_grade      ; EAX <- 100

mov edi, 99
mov esi, 0
call final_grade      ; EAX <- 100

mov edi, 10
mov esi, 15
call final_grade      ; EAX <- 100

mov edi, 85
mov esi, 5
call final_grade      ; EAX <- 90

mov edi, 55
mov esi, 3
call final_grade      ; EAX <- 75

mov edi, 55
mov esi, 0
call final_grade      ; EAX <- 0

mov edi, 20
mov esi, 2
call final_grade      ; EAX <- 0
```

```racket
(final-grade 100 12)  ; 100
(final-grade 85 5)    ; 90
(final-grade 55 3)    ; 75
(final-grade 55 0)    ; 0
```

\*Use Comparison and Logical Operators.

---

## Tags

- Fundamentals
