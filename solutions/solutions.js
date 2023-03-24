
function basicNonOptimisedFibonacci(n) {
  if (n < 0) {
    return "Invalid input. Please provide a non-negative integer.";
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function iterativeFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Invalid input. Please provide a positive integer.");
  if (n === 0) return BigInt(0);
  if (n === 1) return BigInt(1);

  let a = BigInt(0);
  let b = BigInt(1);
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

function memoFibonacci(n, memo = {}) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Invalid input. Please provide a positive integer.");
  if (n === 0) return BigInt(0);
  if (n === 1) return BigInt(1);

  if (!(n in memo)) {
    memo[n] = memoFibonacci(n - 1, memo) + memoFibonacci(n - 2, memo);
  }

  return memo[n];
}

module.exports = {iterativeFibonacci, memoFibonacci};
