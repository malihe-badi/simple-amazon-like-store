// slider 
const slid = document.querySelector(".slider");
const rightChevron = document.querySelector(".chevron .right-chevron");
const leftChevron = document.querySelector(".chevron .left-chevron");
const sliderImages = [
    './images/slide1.webp',
    './images/slide2.webp',
    './images/slide3.webp',
    './images/slide4.webp',
];
let currentSlide = 0 ;
function updateBackground(){
    slid.style.backgroundImage =`url(${sliderImages[currentSlide]})`;
};
updateBackground();

rightChevron.addEventListener('click', function(){
    rightChevron.style.border = '3px solid var(--bs-green)';
    currentSlide ++ ;
    if(currentSlide >= sliderImages.length){
        currentSlide = 0;
    }
    setTimeout (() => {
        rightChevron.style.border = 'none';
     },3000);
    updateBackground();
});
 leftChevron.addEventListener('click', function(){
    leftChevron.style.border = '3px solid var(--bs-green)';
    currentSlide -- ;
    if(currentSlide < 0){
        currentSlide = sliderImages.length -1;
    }
    setTimeout (() => {
        leftChevron.style.border = 'none';
     },2000);

    updateBackground();
});

  