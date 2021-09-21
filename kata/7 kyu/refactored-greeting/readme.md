# [Refactored Greeting](https://www.codewars.com/kata/5121303128ef4b495f000001)

The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

```javascript
var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name; // should == 'Joe'
```

```coffeescript
joe = new Person('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name          # should == 'Joe'
```

```ruby
joe = Person.new('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name          # should == 'Joe'
```

```rust
let joe = Person::new("Joe");
joe.greet("Kate"); // should return "Hello Kate, my name is Joe"
joe.name;          // should == "Joe"
```

```python
joe = Person('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name          # should == 'Joe'
```

---

## Tags

- Object-oriented Programming
- Programming Paradigms
- Refactoring
