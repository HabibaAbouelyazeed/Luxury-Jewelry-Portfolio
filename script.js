const slides = document.getElementsByClassName("banner-slider");
const dots = document.getElementsByClassName("slide-dot");

const sliderCardsContainer = [...document.querySelectorAll('.slider-cards-container')];
const backButton = [...document.querySelectorAll('.back-button')];
const nextButton = [...document.querySelectorAll('.next-button')];

let scrollTop = document.getElementById("scrollTop");


//Banner slide show
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


//Images Slider

sliderCardsContainer.forEach((item,i) =>{
    let containerDims = item.getBoundingClientRect();
    let containerWidth = containerDims.width/2;

    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    backButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})



//Scroll to Top button

function scrollToTop() {
    window.scrollTo(0, 0);
}