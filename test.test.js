class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Test cases
const calculator = new Calculator();

// Test addition
console.log(calculator.add(5, 3));      // Expected output: 8
console.log(calculator.add(-5, 3));     // Expected output: -2
console.log(calculator.add(0, 0));      // Expected output: 0

// Test subtraction
console.log(calculator.subtract(5, 3)); // Expected output: 2
console.log(calculator.subtract(-5, 3));// Expected output: -8
console.log(calculator.subtract(0, 0)); // Expected output: 0

// Test multiplication
console.log(calculator.multiply(5, 3)); // Expected output: 15
console.log(calculator.multiply(-5, 3));// Expected output: -15
console.log(calculator.multiply(0, 0)); // Expected output: 0

// Test division
console.log(calculator.divide(6, 3));   // Expected output: 2
console.log(calculator.divide(-6, 3));  // Expected output: -2
console.log(calculator.divide(0, 5));   // Expected output: 0
console.log(calculator.divide(6, 0));   // Expected output: Error: Cannot divide by zero// Test addition
console.log(calculator.add(5, 3));      // Expected output: 8
console.log(calculator.add(-5, 3));     // Expected output: -2
console.log(calculator.add(0, 0));      // Expected output: 0// Test addition
console.log(calculator.add(5, 3));      // Expected output: 8
console.log(calculator.add(-5, 3));     // Expected output: -2
console.log(calculator.add(0, 0));      // Expected output: 0