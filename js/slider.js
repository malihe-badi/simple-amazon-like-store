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
    slid.style.background=`url(${sliderImages[currentSlide]})no-repeat left top `;
};
function changhSlide(step){
    currentSlide += step;
    if(currentSlide >= sliderImages.length){
        currentSlide = 0;
    }else if(currentSlide < 0){
        currentSlide = sliderImages.length - 1;
    }
    updateBackground();
}
updateBackground();
setInterval(()=> changhSlide(1),3000);

rightChevron.addEventListener('click', function(){
    rightChevron.style.border = '3px solid var(--bs-green)';
    changhSlide(1);
    setTimeout (() => {
        rightChevron.style.border = 'none';
     },1000);
});
 leftChevron.addEventListener('click', function(){
    leftChevron.style.border = '3px solid var(--bs-green)';
    changhSlide(-1);
    setTimeout (() => {
        leftChevron.style.border = 'none';
     },1000);


    updateBackground();
});