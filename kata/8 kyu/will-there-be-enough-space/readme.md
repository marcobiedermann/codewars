# [Will there be enough space?](https://www.codewars.com/kata/5875b200d520904a04000003)

<h1>The Story:</h1>
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

<h1>Task Overview:</h1>

You have to write a function that accepts three parameters:

- `cap` is the amount of people the bus can hold excluding the driver.
- `on` is the number of people on the bus.
- `wait` is the number of people waiting to get on to the bus.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

<h1>Usage Examples:</h1>

```lua
enough(10, 5, 5)
0 -- He can fit all 5 passengers
enough(100, 60, 50)
10 -- He can't fit 10 of the 50 waiting
```

```python
enough(10, 5, 5)
0 # He can fit all 5 passengers
enough(100, 60, 50)
10 # He can't fit 10 out of 50 waiting
```

```ruby
enough(10, 5, 5)
0 # He can fit all 5 passengers
enough(100, 60, 50)
10 # He can't fit 10 out of 50 waiting
```

```javascript
enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
```

```php
enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
```

```csharp
Kata.Enough(10, 5, 5);
// 0, He can fit all 5 passengers
Kata.Enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
```

```typescript
enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting
```

```if:csharp
<h1>Documentation:</h1>
<h2>Kata.Enough Method (Int32, Int32, Int32)</h2>

Returns the number of passengers the bus cannot fit, or 0 if the bus can fit every passenger.

<span style="font-size:20px">Syntax</span>
<div style="margin-top:-10px;padding:2px;background-color:Grey;position:relative;left:20px;width:600px;">
  <div style="background-color:White;color:Black;border:1px;display:block;padding:10px;padding-left:18px;font-family:Consolas,Courier,monospace;">
    <span style="color:Blue;">public</span>
    <span style="color:Blue;">static</span>
    <span style="color:Blue;">int</span> Enough(</br>
    <span style="position:relative;left:62px;">int cap,</span></br>
    <span style="position:relative;left:62px;">int on,</span></br>
    <span style="position:relative;left:62px;">int wait</span></br>
    )
  </div>
</div>
</br>
<div style="position:relative;left:20px;">
  <strong>Parameters</strong>
  </br>
  <i>cap</i>
  </br>
  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>
  <span style="position:relative;left:50px;">The amount of people that can fit on the bus excluding the driver.</span>
  </br></br>
  <i>on</i>
  </br>
  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>
  <span style="position:relative;left:50px;">The amount of people on the bus excluding the driver.</span>
  </br></br>
  <i>wait</i>
  </br>
  <span style="position:relative;left:50px;">Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>
  <span style="position:relative;left:50px;">The amount of people waiting to enter the bus.</span>
  </br></br>
  <strong>Return Value</strong>
  </br>
  <span>Type: <a href="https://msdn.microsoft.com/en-us/library/system.int32(v=vs.110).aspx">System.Int32</a></span></br>
  An integer representing how many passengers cannot fit on the bus, or 0 if every passenger can fit on the bus.
</div>
```

```racket
(enough 10 5 5)    ;  0 -- He can fit all 5 passengers
(enough 100 60 50) ; 10 -- He can't fit 10 of the 50 waiting
```

---

## Tags

- Data Types
- Fundamentals
- Numbers
