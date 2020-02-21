# [The Coupon Code](https://www.codewars.com/kata/539de388a540db7fec000642)

# Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

# Task

Your mission:  
Write a function called `checkCoupon` which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day **AFTER** the expiration date. All dates will be passed as strings in this format: `"MONTH DATE, YEAR"`.

## Examples:

```javascript
checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015') === true;
checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015') === false;
```

```typescript
checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015') === true;
checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015') === false;
```

```csharp
CheckCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ==  true
CheckCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ==  false
```

```python
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False
```

---

## Tags

- Basic Language Features
- Control Flow
- Data Types
- Dates/Time
- Functions
- Fundamentals
- Strings
