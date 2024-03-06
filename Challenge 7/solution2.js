// Function to add or remove a CSS class to highlight an HTML element
function highlightElement(elementId) {
    // Get the element by its ID
    var element = document.getElementById(elementId);
    // Check if the element already has the 'highlight' class
    var hasHighlightClass = element.classList.contains('highlight');
    // If the element already has the class, remove it; otherwise, add it
    if (hasHighlightClass) {
        element.classList.remove('highlight');
    } else {
        element.classList.add('highlight');
    }
}