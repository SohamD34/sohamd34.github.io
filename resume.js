const hoverButton = document.getElementById('hover-button');
const hiddenDiv = document.getElementById('hidden-div');

hoverButton.addEventListener('mouseover', () => {
    hiddenDiv.style.display = 'block';
});

hoverButton.addEventListener('mouseout', () => {
    hiddenDiv.style.display = 'none';
});

$('.horizontal .progress-fill span').each(function(){
    var percent = $(this).html();
    $(this).parent().css('width', percent);
  });
