// Activity Coordinator Function
function selectActivityCoordinator(names) {
    // Generate a random index within the range of the names array length
    // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
    // Multiplying it by names.length gives a random number between 0 and (names.length - 1)
    // Math.floor() rounds down to the nearest integer, ensuring the randomIndex is an integer
    const randomIndex = Math.floor(Math.random() * names.length); // Generate a random index
    const selectedName = names[randomIndex]; // Select a random name from the list
    return `${selectedName} is going to be the activity coordinator today!`; // Return the selected name as the activity coordinator
}

// Example usage:
console.log(selectActivityCoordinator(["Gagan", "Shreyas", "Shashank", "Adi", "Anshu"]));
// Output: Shreyas is going to be the activity coordinator today!(some random name ) 
