# [Geometry Basics: Circle Area in 2D](https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0)

This series of katas will introduce you to basics of doing geometry with computers.

Write the function `circleArea`/`CircleArea` which takes in a `Circle` object and calculates the area of that circle.</br>
The `Circle` class can be seen below:

```javascript
// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}
```

```csharp
public class Circle
{
  public Point Center { get; private set; }
  public double Radius { get; private set; }

  public Circle(Point center, double radius)
  {
    this.Center = center;
    this.Radius = radius;
  }
}
```

```ruby
# Represents a Circle where center is a Point and radius is a Number
class Circle
  attr_accessor :center, :radius
  def initialize(center, radius)
    @center = center
    @radius = radius
  end
end
```

And the `Point` class can be seen below:

```javascript
// Represents a Point where x and y are Numbers
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

```csharp
public class Point
{
  public double X { get; private set; }
  public double Y { get; private set; }

  public Point(double x, double y)
  {
    this.X = x;
    this.Y = y;
  }
}
```

```ruby
# Represents a Point where x and y are Numbers
class Point
  attr_accessor :x, :y
  def initialize(x, y)
    @x = x
    @y = y
  end
end
```

<!-- C# documentation -->

```if:csharp
<h1>Documentation:</h1>
<h2>Kata.CircleArea Method (Circle)</h2>

Returns the area of a circle.

<span style="font-size:20px">Syntax</span>
<div style="margin-top:-10px;padding:2px;background-color:Grey;position:relative;left:20px;width:600px;">
  <div style="background-color:White;color:Black;border:1px;display:block;padding:10px;padding-left:18px;font-family:Consolas,Courier,monospace;">
    <span style="color:Blue;">public</span>
    <span style="color:Blue;">static</span>
    <span style="color:Blue;">double</span> CircleArea(</br>
    <span style="position:relative;left:62px;">Circle circle</span></br>
    )
  </div>
</div>
</br>
<div style="position:relative;left:20px;">
  <strong>Parameters</strong>
  </br>
  <i>circle</i>
  </br>
  <span style="position:relative;left:50px;">Type: Circle</span></br>
  <span style="position:relative;left:50px;">The circle to calculate the area of.</span>
  </br></br>
  <strong>Return Value</strong>
  </br>
  <span>Type: <a href="https://msdn.microsoft.com/en-us/library/system.double(v=vs.110).aspx">System.Double</a></span></br>
  A double representing the area of the circle.
</div>
```

<!-- end C# documentation -->

Tests round answers to 6 decimal places.

---

## Tags

- Algebra
- Algorithms
- Fundamentals
- Geometry
- Logic
- Mathematics
