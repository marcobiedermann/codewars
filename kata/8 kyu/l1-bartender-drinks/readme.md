# [L1: Bartender, drinks!](https://www.codewars.com/kata/568dc014440f03b13900001d)

Write a function `getDrinkByProfession`/`get_drink_by_profession()` that receives as input parameter a string, and produces outputs according to the following table:

<table>
<tbody>
<tr>
<td>Input</td>
<td>Output</td>
</tr>
<tr>
<td>"Jabroni"</td>
<td>"Patron Tequila"</td>
</tr>
<tr>
<td>"School Counselor"</td>
<td>"Anything with Alcohol"</td>
</tr>
<tr>
<td> "Programmer"</td>
<td> "Hipster Craft Beer"</td>
</tr>
<tr>
<td> "Bike Gang Member"</td>
<td>"Moonshine" </td>
</tr>
<tr>
<td> "Politician"</td>
<td>"Your tax dollars" </td>
</tr>
<tr>
<td> "Rapper"</td>
<td>"Cristal" </td>
</tr>
<tr>
<td> *anything else* </td>
<td>"Beer" </td>
</tr>
</tbody>
</table>
</br>

Note: _anything else_ is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

---

## Tags

- Basic Language Features
- Conditional Statements
- Control Flow
- Data Types
- Fundamentals
- Strings
