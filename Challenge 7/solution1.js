// Function to toggle the visibility of an HTML element
function toggleElementVisibility(elementId) {
    // Get the element by its ID
    var element = document.getElementById(elementId);
    // Check if the element is currently hidden
    if (element.style.display === 'none') {
        // If hidden, display it
        element.style.display = 'block';
    } else {
        // If visible, hide it
        element.style.display = 'none';
    }
}