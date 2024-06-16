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
    slid.style.background=`url(${sliderImages[currentSlide]})no-repeat right top `;
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
const productsData = [
    {
        id: 1,
        name: "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD |",
        price: 1080.99,
        originalPrice: 1200,
        imageUrl: "./images/Acer.webp", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 2,
        name: "Apple iPhone 13 Mini, 256GB, Blue - Unlocked (Renewed)",
        price: 337.491,
        originalPrice: 374.99,
        imageUrl: "./images/Apple iPhone 13.webp", 
        reviews: 1.752,
        category: "mobiles", 
    },
    {
        id: 3,
        name: "CASEKOO for iPhone 13 Pro Case Crystal Clear, [Not Yellowing] [Military Drop Protection] Shockproof Protective iPhone 13 Pro Phone Case 6.1 inch 2021, Clear",
        price: 10.8,
        originalPrice: 12,
        imageUrl: "./images/CASEKOO.webp", 
        reviews: 1.752,
        category: "mobile accessories",
    },
    {
        id: 4,
        name: "HP Notebook Laptop, 15.6&quot; HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
        price: 407.7,
        originalPrice: 453,
        imageUrl: "./images/HP.webp", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 5,
        name: "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. ",
        price: 756,
        originalPrice: 840,
        imageUrl: "./images/Apple 2022-Laptop.webp", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 6,
        name: "Samsung Galaxy S24 ultra cell phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black ",
        price:944.1,
        originalPrice:1049,
        imageUrl: "./images/Samsung-Galaxy-S24 .webp", 
        reviews: 1.752,
        category: "mobiles", 
    },
    {
        id: 7,
        name: "OGMAPLE Cell Phone Stand, Angle Height Adjustable Cell Phone Holder with Silicon Pad for Desk Fully Forldable Mobile Phone Holder Compatible with All Mobile Phones, MT-6, (White)",
        price:4.5,
        originalPrice:5,
        imageUrl: "./images/OGMAPLE.webp", 
        reviews: 1.752,
        category: "mobile accessories",
    }
];
localStorage.setItem("productsData" ,JSON.stringify(productsData));
const products = JSON.parse(localStorage.getItem("productsData"));

function displayProducts (products){
    const productslist = document.querySelector(".products-list");
     products.forEach(product => { 
        const productElement = document.createElement("div");
        productElement.className = "product col-2  bg-light rounded-1 ";
        productElement.innerHTML = `<a>
        <img class="border-bottom   img-fluid p-3 " src="${product.imageUrl}" alt="${product.name}">
            <p class=" mt-4 fs-4"><span class="opacity-50 fs-6">$ </span>${product.originalPrice.toFixed(2)}<span class="opacity-50 fs-6">99</span></p>
            <p class="original-price"> <span class="opacity-50 fs-6">$ ${product.price.toFixed(2)}</span> </p>
          <p class=" opacity-75 fs-6 lh-3  mt-4 ">${product.name}</p>
          <img src="images/basket.webp" alt="">
          <img src="images/basket.webp" alt="">
          <img src="images/basket.webp" alt="">
         <img src="images/basket.webp" alt="">
         <img src="images/basket.webp" alt="">
         <span class="opacity-50">${product.reviews}</span>
         <p class="pt-3">see more ...</p>
        </a>`; 
          productslist.appendChild(productElement);
     });
};
displayProducts(productsData);
// ************************************************* category *************************************  
const category = document.querySelector(".category");

category.addEventListener("click" , function(){
   
})




  