# [getNames()](https://www.codewars.com/kata/514a677421607afc99000002)

The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.

```javascript
var data = [
  { name: 'Joe', age: 20 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 23 },
];

getNames(data); // should return ['Joe', 'Bill', 'Kate']
```

```csharp
public class Person
{
  public int Age;
  public string Name;

  public Person(string name = "John", int age = 21)
  {
    Age = age;
    Name = name;
  }
}

Person[] data = new Person[]
{
  new Person("Joe", 20),
  new Person("Bill", 30),
  new Person("Kate", 23)
};

Kata.GetNames(data) => new string[] {"Joe", "Bill", "Kate"};
```

```clojure
(def data [
  {:name "Joe" :age 20}
  {:name "Bill" :age 30}
  {:name "Kate" :age 23}
])

(get-names data) ; should return ["Joe" "Bill" "Kate"]
```

```python
data = [
    {'name': 'Joe', 'age': 20},
    {'name': 'Bill', 'age': 30},
    {'name': 'Kate', 'age': 23}
]
get_names(data) # should return ['Joe', 'Bill', 'Kate']
```

---

## Tags

- Bugs
