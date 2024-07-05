"use strict"

document.getElementById('menu-icon').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
  else {
    navLinks.classList.add('active');
  }
});


document.getElementById('menu-icon').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  var navLinksa=document.getElementById(navLinks.a);
  if (navLinks.classList.contains('active')) {
    navLinks.className="body-background";
    // navLinks.a.className="body-background a";
    navLinksa.className="body-background a";

  }
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}
// ==================section3=============================//
let currentSlideIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;
    const maxIndex = totalSlides - 3;

    if (index < 0) {
        currentSlideIndex = 0;
    } else if (index > maxIndex) {
        currentSlideIndex = maxIndex;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100 / 3;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}  

// Initialize slider
showSlide(currentSlideIndex);

