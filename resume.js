const hoverButton = document.getElementById('hover-button');
const hiddenDiv = document.getElementById('hidden-div');

hoverButton.addEventListener('mouseover', () => {
    hiddenDiv.style.display = 'block';
});

hoverButton.addEventListener('mouseout', () => {
    hiddenDiv.style.display = 'none';
});

