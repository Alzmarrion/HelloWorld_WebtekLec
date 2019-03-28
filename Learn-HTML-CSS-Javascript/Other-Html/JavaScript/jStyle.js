/*var slideNum = 1;
showSlide(slideNum);

function addSlides(n) {
    showSlide(slideNum += n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsById("slide");
    if(n > slides.length) {
        slideNum = 1;
    }
    if(n < 1) {
        slideNum = slides.length;
    }
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideNum-1].style.display="block"
} */