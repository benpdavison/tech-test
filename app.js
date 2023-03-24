function fibonacci(n) {
  if (n <= 0) {
    return "Invalid input. Please provide a non-negative integer.";
  } else if (n = 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


module.exports = fibonacci;
