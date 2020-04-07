# [Mexican Wave](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)

# Introduction

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="10" bgcolor="#181818">&nbsp;
    </td>
    <td bgcolor="#181818">
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source <a href="https://en.wikipedia.org/wiki/Wave_(audience)">Wikipedia</a>)
</td>

  </tr>
</table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>

<center><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/Wave.png"></center>

# Task

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="10" bgcolor="#181818">&nbsp;
    </td>
    <td bgcolor="#181818">
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
    </td>
  </tr>
</table>

# Rules

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="10" bgcolor="#181818">&nbsp;
    </td>
    <td bgcolor="#181818">
      1.&nbsp; The input string will always be lower case but maybe empty.<br>
      2.&nbsp; If the character in the string is whitespace then pass over it as if it was an empty seat.<br>
    </td>
  </tr>
</table>

# Example

```go
wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
```

```racket
(wave "hello") ; returns '("Hello" "hEllo" "heLlo" "helLo" "hellO")
```

```javascript
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

```ruby
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

```python
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

Good luck and enjoy!

# Kata Series

If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="600"><table width="600" border="1" cellpadding="0" cellspacing="0">
      <tr>
        <td width="240"><b>Title</b></td>
        <td width="380"><b>Languages</b></td>
        <td width="66"><b>Rank</b></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6" target="_blank">Maze Runner</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58663693b359c4a6560001d6/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/haskell.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05" target="_blank">Scooby Doo Puzzle</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58693bbfd7da144164000d05/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134" target="_blank">Driving License</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/c" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/c.png" width="30" height="30" alt="Rank" /><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586a1af1c66d18ad81000134/java" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/java.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/7KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031" target="_blank">Connect 4</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586c0909c1923fdb89002031/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f" target="_blank">Vending Machine</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/586e6d4cb98de09e3800014f/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027" target="_blank">Snakes and Ladders</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/cpp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/587136ba2eefcb92a9000027/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58a848258a6909dd35000003" target="_blank">Mastermind</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58a848258a6909dd35000003/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051" target="_blank">Guess Who?</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58b2c5de4cf8b90723000051/javascript"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087" target="_blank">Am I safe to drive?</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58ce88427e6c3f41c2000087/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029" target="_blank">Mexican Wave</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/crystal" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/crystal.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e" target="_blank">Pigs in a Pen</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/590300eb378a9282ba000095" target="_blank">Hungry Hippos</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590300eb378a9282ba000095/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/5904be220881cb68be00007d" target="_blank">Plenty of Fish in the Pond</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/c" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/c.png" width="30" height="30" alt="Rank" /><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/cpp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/5904be220881cb68be00007d/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/590adadea658017d90000039" target="_blank">Fruit Machine</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/590adadea658017d90000039/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/haskell" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/haskell.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/590adadea658017d90000039/crystal" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/crystal.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/6KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
      <tr>
        <td width="240"><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014" target="_blank">Car Park Escape</a></td>
        <td width="380"><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/ruby" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/ruby.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/python" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/python.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/javascript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/javascript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/php" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/php.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/typescript" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/typescript.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/crystal" target="_blank"></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/csharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/csharp.png" width="30" height="30" alt="Rank" /></a><a href="https://www.codewars.com/kata/591eab1d192fe0435e000014/fsharp" target="_blank"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/fsharp.png" width="30" height="30" alt="Rank" /></a></td>
        <td width="66"><img src="https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/5KYU.png" width="51" height="26" alt="Rank" /></td>
      </tr>
    </table></td>
    <td>&nbsp;</td>
  </tr>
</table>

---

## Tags

- Arrays
- Data Types
- Fundamentals
- Strings
