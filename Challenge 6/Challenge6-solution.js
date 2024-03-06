// Fibonacci Sequence Generator Function
function fibonacciGenerator(n) {
    const sequence = [0, 1]; // Initialize sequence array with first two Fibonacci numbers
    
    // Loop to generate subsequent Fibonacci numbers
    for (let i = 2; i < n; i++) {
        // Calculate the next Fibonacci number by adding the last two numbers in the sequence
        const nextFibonacciNumber = sequence[i - 1] + sequence[i - 2];
        
        // Add the next Fibonacci number to the sequence array
        sequence.push(nextFibonacciNumber);
    }
    
    // Return sequence containing the first n Fibonacci numbers
    return sequence.slice(0, n);
}

// Example usage:
console.log(fibonacciGenerator(3)); // Output: [0, 1, 1]
