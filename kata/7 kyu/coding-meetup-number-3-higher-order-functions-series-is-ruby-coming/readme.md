# [Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?](https://www.codewars.com/kata/5827acd5f524dd029d0005a4)

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

- `true` if at least one Ruby developer has signed up; or
- `false` if there will be no Ruby developers.

For example, given the following input array:

```python
list1 = [
    { 'firstName': 'Sofia', 'lastName': 'I.', 'country': 'Argentina', 'continent': 'Americas', 'age': 35, 'language': 'Java' },
    { 'firstName': 'Lukas', 'lastName': 'X.', 'country': 'Croatia', 'continent': 'Europe', 'age': 35, 'language': 'Python' },
    { 'firstName': 'Madison', 'lastName': 'U.', 'country': 'United States', 'continent': 'Americas', 'age': 32, 'language': 'Ruby' }
    ]
```

```javascript
var list1 = [
  {
    firstName: 'Emma',
    lastName: 'Z.',
    country: 'Netherlands',
    continent: 'Europe',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'Javascript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
];
```

```php
$list1 = [
  [
    "first_name" => "Emma",
    "last_name" => "Z.",
    "country" => "Netherlands",
    "continent" => "Europe",
    "age" => 29,
    "language" => "Ruby"
  ],
  [
    "first_name" => "Piotr",
    "last_name" => "B.",
    "country" => "Poland",
    "continent" => "Europe",
    "age" => 128,
    "language" => "JavaScript"
  ],
  [
    "first_name" => "Jayden",
    "last_name" => "P.",
    "country" => "Jamaica",
    "continent" => "Americas",
    "age" => 42,
    "language" => "JavaScript"
  ]
];
```

```ruby
list1 = [
  { first_name: 'Emma', last_name: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { first_name: 'Piotr', last_name: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { first_name: 'Jayden', last_name: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]
```

```crystal
list1 = [
  { first_name: 'Emma', last_name: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { first_name: 'Piotr', last_name: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { first_name: 'Jayden', last_name: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]
```

```cobol
       01  List.
          03  ListLength      pic 9 value 3.
          03  dev1.
              05 FirstName    pic a(9)  value 'Emma'.
              05 LastName     pic x(2)  value 'Z.'.
              05 Country      pic a(24) value 'Netherlands'.
              05 Continent    pic a(8)  value 'Europe'.
              05 Age          pic 9(3)  value 29.
              05 Language     pic a(10) value 'Ruby'.
          03  dev2.
              05 FirstName    pic a(9)  value 'Piotr'.
              05 LastName     pic x(2)  value 'B.'.
              05 Country      pic a(24) value 'Poland'.
              05 Continent    pic a(8)  value 'Europe'.
              05 Age          pic 9(3)  value 128.
              05 Language     pic a(10) value 'JavaScript'.
          03  dev3.
              05 FirstName    pic a(9)  value 'Jayden'.
              05 LastName     pic x(2)  value 'P.'.
              05 Country      pic a(24) value 'Jamaica'.
              05 Continent    pic a(8)  value 'Americas'.
              05 Age          pic 9(3)  value 42.
              05 Language     pic a(10) value 'JavaScript'.
```

your function should return `true`.

Notes:

- The input array will always be valid and formatted as in the example above.
  <br>
  <br>
  <br>
  <br>
  <br>

This kata is part of the **Coding Meetup** series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: `forEach, filter, map, reduce, some, every, find, findIndex`. Other approaches to solving the katas are of course possible.

Here is the full list of the katas in the **Coding Meetup** series:

<a href="http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe">Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers">Coding Meetup #2 - Higher-Order Functions Series - Greet developers</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-3-higher-order-functions-series-is-ruby-coming">Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-4-higher-order-functions-series-find-the-first-python-developer">Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages">Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language">Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?</a>

<a href="http://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer">Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented">Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse">Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames">Coding Meetup #10 - Higher-Order Functions Series - Create usernames</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age">Coding Meetup #11 - Higher-Order Functions Series - Find the average age</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins">Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse">Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food">Coding Meetup #14 - Higher-Order Functions Series - Order the food</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names">Coding Meetup #15 - Higher-Order Functions Series - Find the odd names</a>

<a href="https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details">Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details</a>

---

## Tags

- Algorithms
- Arrays
- Data Structures
- Functional Programming
- Fundamentals
- Regular Expressions
- Strings
