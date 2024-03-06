// Leap Year Checker Function
function isLeapYear(year) {
    // Check if the year is evenly divisible by 4
    if (year % 4 === 0) {
        // If the year is also divisible by 100...
        if (year % 100 === 0) {
            // ...but not divisible by 400, it's not a leap year
            if (year % 400 !== 0) {
                return "Not a leap year."; // Not a leap year
            }
        }
        return "Leap year."; // Leap year
    } else {
        return "Not a leap year."; // Not a leap year
    }
}

// Example usage:
console.log(isLeapYear(2024)); // Output: Leap year.
console.log(isLeapYear(2022)); // Output: Not a leap year.
