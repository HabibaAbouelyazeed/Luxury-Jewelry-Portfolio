const slides = document.getElementsByClassName("banner-slider");
const dots = document.getElementsByClassName("slide-dot");
//console.log(slides.length)

let slideIndex = -1;

function slideShow(){
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');
    setTimeout(slideShow, 3500);
}

slideShow();