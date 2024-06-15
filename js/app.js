//*********************************************** slider ************************************************
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
     },1000);
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
     },1000);

    updateBackground();
});

// ************************************************* product data *************************************                          
const products = [
    {
        id: 1,
        name: "Acer Aspire 3 A315-24P-R7VH Slim Laptop",
        price: 1080.99,
        originalPrice: 1200,
        imageUrl: "./images/Acer.webp", 
        reviews: 1752,
        category: "laptop",
    },
    {
        id: 2,
        name: "Apple iPhone 13 Mini, 256GB, Blue - Unlocked (Renewed)",
        price: 337.491,
        originalPrice: 374.99,
        imageUrl: "./images/Apple iPhone 13.webp", 
        rating: 4.5,
        reviews: 1752, 
    },
    {
        id: 3,
        name: "CASEKOO for iPhone 13 Pro Case",
        price: 10.8,
        originalPrice: 12,
        imageUrl: "./images/CASEKOO.webp", 
        rating: 4.5,
        reviews: 1752,
    },
    {
        id: 4,
        name: "HP Notebook Laptop",
        price: 407.7,
        originalPrice: 453,
        imageUrl: "./images/HP.webp", 
        rating: 4.5,
        reviews: 1752,

    },
    {
        id: 5,
        name: "Apple 2022 MacBook Air Laptop with M2 chip",
        price: 756,
        originalPrice: 840,
        imageUrl: "./images/Apple 2022-Laptop.webp", 
        rating: 4.5,
        reviews: 1752,
    },
    {
        id: 6,
        name: "Samsung Galaxy S24 ultra cell phone ",
        price:944.1,
        originalPrice:1049,
        imageUrl: "./images/Samsung-Galaxy-S24.webp", 
        rating: 4.5,
        reviews: 1752,
    },
    {
        id: 7,
        name: "OGMAPLE Cell Phone Stand",
        price:4.5,
        originalPrice:5,
        imageUrl: "./images/OGMAPLE.webp", 
        rating: 4.5,
        reviews: 1752,
    }
]


  