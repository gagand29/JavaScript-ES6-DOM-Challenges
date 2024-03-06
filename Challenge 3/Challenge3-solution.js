// Define the function to calculate the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // Calculate the discounted price by subtracting the discount amount from the original price
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    // Round the discounted price to the nearest whole number
    return Math.round(discountedPrice);
}

// Define the original price and discount percentage
const originalPrice = 100; // Enter the original price here
const discountPercentage = 20; // Enter the discount percentage here

// Call the function with the original price and discount percentage, and print the result
console.log("Original Price: $" + originalPrice);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discounted Price: $" + calculateDiscountedPrice(originalPrice, discountPercentage));
