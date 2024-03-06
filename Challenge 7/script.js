function toggleElementVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function highlightElement(elementId) {
    var element = document.getElementById(elementId);
    element.classList.toggle('highlight');
}

function updateElementContent(elementId, newContent) {
    var element = document.getElementById(elementId);
    element.textContent = newContent;
}
