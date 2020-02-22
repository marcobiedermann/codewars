# [The Poet And The Pendulum](https://www.codewars.com/kata/5bd776533a7e2720c40000e5)

# Scenario

_the rhythm of beautiful musical notes is drawing a Pendulum_

**_Beautiful musical notes_** are the **_Numbers_** ![!alt](https://i.imgur.com/mdX8dJP.png) ![!alt](https://i.imgur.com/mdX8dJP.png)

---

# Task

**_Given_** an _array/list [] of n integers_ , **_Arrange_** _them in a way similar to the to-and-fro movement of a Pendulum_

- **_The Smallest element_** of the list of integers , must come _in center position of array/list_.

  - **_The Higher than smallest_** , _goes to the right_ .

- **_The Next higher_** number goes _to the left of minimum number_ and So on , in a to-and-fro manner similar to that of a Pendulum.

![!alt](https://i.imgur.com/xWoPbdq.png)

---

# Notes

- **_Array/list_** size is \*at least **_3_\*** .

- In **_Even array size_** , _The minimum element should be moved to (n-1)/2 index_ (considering that indexes start from 0)

- **_Repetition_** of numbers in _the array/list could occur_ , So **_(duplications are included when Arranging)_**.

---

# Input >> Output Examples:

```
pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
```

## **_Explanation_**:

- **_Since_** , `5` is the **_The Smallest element_** of the list of integers , came _in The center position of array/list_

- **_The Higher than smallest_** is `6` _goes to the right_ of `5` .

- **_The Next higher_** number goes _to the left of minimum number_ and So on .

- Remeber , **_Duplications are included when Arranging_** , Don't Delete Them .

---

```
pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
```

## **_Explanation_**:

- **_Since_** , `-10` is the **_The Smallest element_** of the list of integers , came _in The center position of array/list_

- **_The Higher than smallest_** is `-9` _goes to the right_ of it .

- **_The Next higher_** number goes _to the left of_ `-10` , and So on .

- Remeber , In **_Even array size_** , _The minimum element moved to (n-1)/2 index_ (considering that indexes start from 0) .

---

```
pendulum ([11, -16, -18, 13, -11, -12, 3, 18 ]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
```

## **_Explanation_**:

- **_Since_** , `-18` is the **_The Smallest element_** of the list of integers , came _in The center position of array/list_

- **_The Higher than smallest_** is `-16` _goes to the right_ of it .

- **_The Next higher_** number goes _to the left of_ `-18` , and So on .

- Remember , In **_Even array size_** , _The minimum element moved to (n-1)/2 index_ (considering that indexes start from 0) .

---

# Tune Your Code , There are 200 Assertions , 60.000 element For Each .

---

---

---

# [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)

# [Bizarre Sorting-katas](https://www.codewars.com/collections/bizarre-sorting-katas)

# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

---

## ALL translations are welcomed

## Enjoy Learning !!

# Zizou

---

## Tags

- Algorithms
- Arrays
- Basic Language Features
- Data Types
- Declarative Programming
- Dynamic Arrays
- Functional Programming
- Fundamentals
- Logic
- Numbers
- Performance
- Programming Paradigms
- Vectors
