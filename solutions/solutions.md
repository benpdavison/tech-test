Bugs to fix:
1. Incorrect comparison operator: In the second condition within the function, there is an assignment operator (=) being used instead of the comparison operator (==). The correct code should use the comparison operator, as shown below: `(n = 1)`
2. Improper handling of the base cases: The base case for the Fibonacci sequence is not properly defined. Since the Fibonacci sequence usually starts with 0 and 1
3. the code does not throw an error when given a non positive integer, but returns a string.

There are multiple solutions to this:

the most basic version is to fix the code, and add tests cases.

a more optimised version with solution with o(n) complexity would be an iterative approach or memoized approach.

Memoisation is less performant that iterative due to memory usage. The candidate if they chose memoisation can be asked about this, if they didn't choose memoisation, there understanding can be quizzed, why they choose not to do it, and pro vs cons compared to their solution.

Final question:
The colleague comes back saying that they need to calculate the number up to 100 now, but when they go above the 79th number, it starts returning incorrectly, what new tests and code would you add? what do you think the problem might be?

Answer, rounding errors with JS int. Need to use BigInt datatype in JS.
