# [Area of a Circle](https://www.codewars.com/kata/537baa6f8f4b300b5900106c)

Complete the function `circleArea` so that it will return the area of a circle with the given `radius`. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return `false`.

Example:

```java
Circle.area(-1485.86);    //returns false
Circle.area(0);           //returns false
Circle.area(43.2673);     //returns 5881.25
Circle.area(68);          //returns 14526.72
```

```javascript
circleArea(-1485.86); //returns false
circleArea(0); //returns false
circleArea(43.2673); //returns 5881.25
circleArea(68); //returns 14526.72
circleArea('number'); //returns false
```

```haskell
circleArea (-1) `shouldBe` Nothing
circleArea   0 `shouldBe` Nothing
circleArea   1 `shouldBe` Just (    pi)
circleArea   2 `shouldBe` Just (4 * pi)
circleArea   3 `shouldBe` Just (9 * pi)
```

```python
circleArea(-1485.86)     #returns False
circleArea(0)            #returns False
circleArea(43.2673)      #returns 5881.25
circleArea(68)           #returns 14526.72
circleArea("number")     #returns False
```

```csharp
Kata.CalculateAreaOfCircle("-123"); //throws ArgumentException
Kata.CalculateAreaOfCircle("0"); //throws ArgumentException
Kata.CalculateAreaOfCircle("43.2673"); //return 5881.25
Kata.CalculateAreaOfCircle("68"); //return 14526.72
Kata.CalculateAreaOfCircle("number"); //throws ArgumentException
```

```ruby
circle_area(-1485.86)     #returns false
circle_area(0)            #returns false
circle_area(43.2673)      #returns 5881.25
circle_area(68)           #returns 14526.72
circle_area("number")     #returns false
```

---

## Tags

- Algebra
- Algorithms
- Data Types
- Fundamentals
- Geometry
- Logic
- Mathematics
- Numbers
