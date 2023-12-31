# About

## Gear Ratios

### Part I

The gondola lift isn't working right now; it'll still be a while before I can
fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine,
but nobody can figure out which one. If you can add up all the part numbers in
the engine schematic, it should be easy to work out which part is missing.

The engine schematic consists of a visual representation of the engine. There
are lots of numbers and symbols you don't really understand, but apparently any
number adjacent to a symbol, even diagonally, is a "part number" and should be
included in your sum. (Periods (.) do not count as a symbol.)

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

In this schematic, two numbers are not part numbers because they are not
adjacent to a symbol: `114` (top right) and `58` (middle right). Every other
number is adjacent to a symbol and so is a part number; their sum is `4361`.

What is the sum of all of the part numbers in the actual engine schematic?

#### Solution

the sum of all of the part numbers in the actual engine schematic is `517021`

### Part II

The engineer finds the missing part and installs it in the engine! 

You're going so slowly that you haven't even left the station. You exit the gondola.

The missing part wasn't the only issue - one of the gears in the engine is wrong. A gear is any `*` symbol that is adjacent to exactly `two part numbers`. Its gear ratio is the result of multiplying those two numbers together.

This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.

Consider the same engine schematic again:

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

In this schematic, there are two gears. The first is in the top left; it has part numbers 467 and 35, so its gear ratio is 16345. The second gear is in the lower right; its gear ratio is 451490. (The * adjacent to 617 is not a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces 467835.

What is the sum of all of the gear ratios in your engine schematic?

#### Solution

the sum of all of the gear ratios in the engine schematic is `81296995`