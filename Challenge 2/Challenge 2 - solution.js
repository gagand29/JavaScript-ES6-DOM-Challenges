function timeLeftUntil80(currentAge) {
    // Calculate remaining years until turning 80
    var yearsLeft = 80 - currentAge;

    // Calculate remaining days, weeks, and months
    var daysLeft = yearsLeft * 365;
    var weeksLeft = yearsLeft * 52;
    var monthsLeft = yearsLeft * 12;

    // Output the message with calculated values
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
}

// Example usage:
timeLeftUntil80(40); // Output: You have 14600 days, 2080 weeks, and 480 months left.
