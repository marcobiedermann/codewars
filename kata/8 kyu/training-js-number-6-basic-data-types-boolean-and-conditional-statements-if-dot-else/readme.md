# [Training JS #6: Basic data types--Boolean and conditional statements if..else](https://www.codewars.com/kata/571f832f07363d295d001ba8)

In javascript, Boolean object only has two value, `true` or `false`. Use `===, ==, >, <, >=, <=` between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:`&&, ||` or some bitwise operators:`&, |, !, ^`

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

```
var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";
```

You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to `false`, if arr.length value is not 0, convert value to `true`.

These values are converted to `false` in the conditional statement:

```
0, -0, "", null, undefined, NaN
```

## Task

Coding in function `trueOrFalse`, function accept 1 parameters:`val`, try to use the conditional statement if...else, if `val` value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

## [Series](http://github.com/myjinxin2015/Katas-list-of-Training-JS-series)

( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

- [#1: create your first JS function helloWorld](http://www.codewars.com/kata/571ec274b1c8d4a61c0000c8)
- [#2: Basic data types--Number](http://www.codewars.com/kata/571edd157e8954bab500032d)
- [#3: Basic data types--String](http://www.codewars.com/kata/571edea4b625edcb51000d8e)
- [#4: Basic data types--Array](http://www.codewars.com/kata/571effabb625ed9b0600107a)
- [#5: Basic data types--Object](http://www.codewars.com/kata/571f1eb77e8954a812000837)
- [#6: Basic data types--Boolean and conditional statements if..else](http://www.codewars.com/kata/571f832f07363d295d001ba8)
- [#7: if..else and ternary operator](http://www.codewars.com/kata/57202aefe8d6c514300001fd)
- [#8: Conditional statement--switch](http://www.codewars.com/kata/572059afc2f4612825000d8a)
- [#9: loop statement --while and do..while](http://www.codewars.com/kata/57216d4bcdd71175d6000560)
- [#10: loop statement --for](http://www.codewars.com/kata/5721a78c283129e416000999)
- [#11: loop statement --break,continue](http://www.codewars.com/kata/5721c189cdd71194c1000b9b)
- [#12: loop statement --for..in and for..of](http://www.codewars.com/kata/5722b3f0bd5583cf44001000)
- [#13: Number object and its properties](http://www.codewars.com/kata/5722fd3ab7162a3a4500031f)
- [#14: Methods of Number object--toString() and toLocaleString()](http://www.codewars.com/kata/57238ceaef9008adc7000603)
- [#15: Methods of Number object--toFixed(), toExponential() and toPrecision()](http://www.codewars.com/kata/57256064856584bc47000611)
- [#16: Methods of String object--slice(), substring() and substr()](http://www.codewars.com/kata/57274562c8dcebe77e001012)
- [#17: Methods of String object--indexOf(), lastIndexOf() and search()](http://www.codewars.com/kata/57277a31e5e51450a4000010)
- [#18: Methods of String object--concat() split() and its good friend join()](http://www.codewars.com/kata/57280481e8118511f7000ffa)
- [#19: Methods of String object--toUpperCase() toLowerCase() and replace()](http://www.codewars.com/kata/5728203b7fc662a4c4000ef3)
- [#20: Methods of String object--charAt() charCodeAt() and fromCharCode()](http://www.codewars.com/kata/57284d23e81185ae6200162a)
- [#21: Methods of String object--trim() and the string template](http://www.codewars.com/kata/5729b103dd8bac11a900119e)
- [#22: Unlock new skills--Arrow function,spread operator and deconstruction](http://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
- [#23: methods of arrayObject---push(), pop(), shift() and unshift()](http://www.codewars.com/kata/572af273a3af3836660014a1)
- [#24: methods of arrayObject---splice() and slice()](http://www.codewars.com/kata/572cb264362806af46000793)
- [#25: methods of arrayObject---reverse() and sort()](http://www.codewars.com/kata/572df796914b5ba27c000c90)
- [#26: methods of arrayObject---map()](http://www.codewars.com/kata/572fdeb4380bb703fc00002c)
- [#27: methods of arrayObject---filter()](http://www.codewars.com/kata/573023c81add650b84000429)
- [#28: methods of arrayObject---every() and some()](http://www.codewars.com/kata/57308546bd9f0987c2000d07)
- [#29: methods of arrayObject---concat() and join()](http://www.codewars.com/kata/5731861d05d14d6f50000626)
- [#30: methods of arrayObject---reduce() and reduceRight()](http://www.codewars.com/kata/573156709a231dcec9000ee8)
- [#31: methods of arrayObject---isArray() indexOf() and toString()](http://www.codewars.com/kata/5732b0351eb838d03300101d)
- [#32: methods of Math---round() ceil() and floor()](http://www.codewars.com/kata/5732d3c9791aafb0e4001236)
- [#33: methods of Math---max() min() and abs()](http://www.codewars.com/kata/5733d6c2d780e20173000baa)
- [#34: methods of Math---pow() sqrt() and cbrt()](http://www.codewars.com/kata/5733f948d780e27df6000e33)
- [#35: methods of Math---log() and its family](http://www.codewars.com/kata/57353de879ccaeb9f8000564)
- [#36: methods of Math---kata author's lover:random()](http://www.codewars.com/kata/5735956413c2054a680009ec)
- [#37: Unlock new weapon---RegExp Object](http://www.codewars.com/kata/5735e39313c205fe39001173)
- [#38: Regular Expression--"^","$", "." and test()](http://www.codewars.com/kata/573975d3ac3eec695b0013e0)
- [#39: Regular Expression--"?", "\*", "+" and "{}"](http://www.codewars.com/kata/573bca07dffc1aa693000139)
- [#40: Regular Expression--"|", "[]" and "()"](http://www.codewars.com/kata/573d11c48b97c0ad970002d4)
- [#41: Regular Expression--"\"](http://www.codewars.com/kata/573e6831e3201f6a9b000971)
- [#42: Regular Expression--(?:), (?=) and (?!)](http://www.codewars.com/kata/573fb9223f9793e485000453)

---

## Tags

- Fundamentals
- Tutorials
