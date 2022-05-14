# [Add property to every object in array ](https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1)

Your task is to add a new property `usersAnswer` to every object in the array `questions`. The value of `usersAnswer` should be set to `null`. The solution should work for array of any length.

For example:

```javascript
var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
];
```

After adding the property the result should be:

```javascript
var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
    usersAnswer: null,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's pub", 'China'],
    corAnswer: 0,
    usersAnswer: null,
  },
];
```

The `questions` array is already defined for you and is not the same as the one in the example.

---

## Tags

- Arrays
- Data Types
- Fundamentals
- Objects
