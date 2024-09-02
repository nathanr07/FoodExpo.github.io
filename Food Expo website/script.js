// Get the lightbox elements
var lightbox = document.getElementById('lightbox');
var fullImage = document.getElementById('full-image');
var close = document.getElementsByClassName('close')[0];

// Function to open lightbox with the clicked image
document.querySelectorAll('.thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        lightbox.style.display = 'flex';
        fullImage.src = event.target.src;
    });
});

// Function to close the lightbox
close.onclick = function() {
    lightbox.style.display = 'none';
};

// Close lightbox when clicking outside of the image
lightbox.onclick = function(event) {
    if (event.target !== fullImage) {
        lightbox.style.display = 'none';
    }
};
