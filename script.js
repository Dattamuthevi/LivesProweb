let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Automatically slide every 2 seconds
setInterval(nextSlide, 2000);

// Initially show the first slide
showSlide(slideIndex);

$(document).ready(function() {
  // Submit login form
  $('#loginForm').submit(function(e) {
    e.preventDefault(); // Prevent the form from submitting via the browser

    // Get the username and password
    var username = $('#loginUsername').val();
    var password = $('#loginPassword').val();

    // You can add your login logic here (e.g., AJAX request to a server)
    // For simplicity, let's assume a successful login and redirect to the main page
    window.location.href = 'main.html';
    alert("Logged-In Successfully");
  });

  // Submit registration form
  $('#registerForm').submit(function(e) {
    e.preventDefault(); // Prevent the form from submitting via the browser

    // Get the registration details
    var fullName = $('#fullname').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // You can add your registration logic here (e.g., AJAX request to a server)
    // For simplicity, let's assume a successful registration and redirect to the main page
    window.location.href = 'index.html';
    alert("Registered Successfully");
  });
});
