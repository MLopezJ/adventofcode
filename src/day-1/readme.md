#  Trebuchet

## Part I
Something is wrong with global snow production, and you've been selected to take a look.

As the elves are making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, they are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:
```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```

In this example, the calibration values of these four lines are `12`, `38`, `15`, and `77`. Adding these together produces `142`.

Consider your entire [calibration document](./calibrationDocument.txt). What is the sum of all of the calibration values?

## Solution

the sum of all the calibration values is `53651`

## Part II

Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

```
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
```

In this example, the calibration values are:

```
two1nine  --> 29
eightwothree --> 83
abcone2threexyz --> 13
xtwone3four --> 24
4nineeightseven2 --> 42
zoneight234 --> 14
7pqrstsixteen --> 76
```

Adding these together produces 281.