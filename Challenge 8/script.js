// Function to add click event listener for Party Mode button
function partyModeButton(buttonId) {
    // Get the button element by its ID
    const button = document.getElementById(buttonId);
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Generate a random hexadecimal color code
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Set the background color of the document body to the random color
        document.body.style.backgroundColor = randomColor;
    });
}

// Example usage: Call partyModeButton function with the ID of the party mode button
partyModeButton('partyModeButton');
