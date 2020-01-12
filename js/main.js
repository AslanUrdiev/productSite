//slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slaider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides();
function showSlides(n) {

  if (n >slides.length) {
    slideIndex = 1
  }
  if(n<1) {
    slideIndex = slides.length
  }

  slides.forEach((item) => item.style.display = 'none');

  dots.forEach((item) => item.classList.remove('dot-active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('dot-active')

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
  plusSlides(-1)
}) 














