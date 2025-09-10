// Simple slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Google Maps Integration
function initMap() {
    var location = {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let image = document.getElementById('image').files[0];

    let subject = `Contact Form Submission from ${name}`;
    let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}%0D%0A%0D%0AImage: ${image ? image.name : 'No image attached'}%0D%0A%0D%0APlease manually attach the image file to this email.`;
    
    let mailtoLink = `mailto:kangusjunkremoval@aol.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});
