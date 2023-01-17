/* var slideIndex = 1;
showSlides(slideIndex);
                  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
                  
function currentSlide(n) {
showSlides(slideIndex = n);
}
                  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
         }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
         }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
} */



let slideIndex = [1,1,1];
let slideId = ["mySlides", "mySlides2","mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/* 
const cards = document.querySelectorAll('.slideshow-container');
cards.forEach(card => {
    const prevButton = card.querySelector('.prev');
    const nextButton = card.querySelector('.next');
    const images = card.querySelectorAll('.card');
    let currentImageIndex = 0;

    images[currentImageIndex].classList.add('active');
    prevButton.style.display = 'none';

    nextButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex++;
        if (currentImageIndex === images.length - 1) {
            nextButton.style.display = 'none';
        }
        if (currentImageIndex > 0) {
            prevButton.style.display = 'block';
        }
        images[currentImageIndex].classList.add('active');
    });

    prevButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex--;
        if (currentImageIndex === 0) {
            prevButton.style.display = 'none';
        }
        if (currentImageIndex < images.length - 1) {
            nextButton.style.display = 'block';
        }
        images[currentImageIndex].classList.add('active');
    });
});
 */