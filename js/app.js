
//*********************************************** button language ************************************************
document.addEventListener("DOMContentLoaded", function () {
    const buttonLanguage = document.querySelector(".language");
    const openBoxLanguage = document.querySelector(".language-box");

    buttonLanguage.addEventListener("click", function (e) {
        e.stopPropagation();
        openBoxLanguage.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
        if (!openBoxLanguage.contains(e.target) && e.target !== buttonLanguage) {
            openBoxLanguage.classList.remove('show');
        }
    });
});


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
    slid.style.background=`url(${sliderImages[currentSlide]})no-repeat center top `;
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

// ************************************************* product data ************************************* 
const productsData = [
    {
        id: 1,
        name: "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD |",
        price: 1080.99,
        originalPrice: 1200,
        imageUrl: "./images/Acer.png", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 2,
        name: "Apple iPhone 13 Mini, 256GB, Blue - Unlocked (Renewed)",
        price: 337.491,
        originalPrice: 374.99,
        imageUrl: "./images/Apple iPhone 13.png", 
        reviews: 1.752,
        category: "mobiles", 
    },
    {
        id: 3,
        name: "CASEKOO for iPhone 13 Pro Case Crystal Clear, [Not Yellowing] [Military Drop Protection] Shockproof Protective iPhone 13 Pro Phone Case 6.1 inch 2021, Clear",
        price: 10.8,
        originalPrice: 12,
        imageUrl: "./images/CASEKOO.png", 
        reviews: 1.752,
        category: "mobile-accessories",
    },
    {
        id: 4,
        name: "HP Notebook Laptop, 15.6&quot; HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
        price: 407.7,
        originalPrice: 453,
        imageUrl: "./images/HP.png", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 5,
        name: "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. ",
        price: 756,
        originalPrice: 840,
        imageUrl: "./images/Apple 2022-Laptop.png", 
        reviews: 1.752,
        category: "laptops",
    },
    {
        id: 6,
        name: "Samsung Galaxy S24 ultra cell phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black ",
        price:944.1,
        originalPrice:1049,
        imageUrl: "./images/Samsung-Galaxy-S24 .png", 
        reviews: 1.752,
        category: "mobiles", 
    },
    {
        id: 7,
        name: "OGMAPLE Cell Phone Stand, Angle Height Adjustable Cell Phone Holder with Silicon Pad for Desk Fully Forldable Mobile Phone Holder Compatible with All Mobile Phones, MT-6, (White)",
        price:4.5,
        originalPrice:5,
        imageUrl: "./images/OGMAPLE.png", 
        reviews: 1.752,
        category: "mobile-accessories",
    }
];
  
localStorage.setItem("productsData" ,JSON.stringify(productsData));
const products = JSON.parse(localStorage.getItem("productsData"));
const productslist = document.querySelector(".products-list");
// Clear previous products
function displayProducts (products){
    productslist.innerHTML = '';
 // Add products to their respective category sections
     products.forEach(product => { 
        const productElement = document.createElement("div");
        productElement.className = "product col-md-2 bg-white rounded-1 g-";
        productElement.innerHTML = `
          <div  data-filter="${product.category}">
                    <img class="product-img  img-fluid p-md-3" src="${product.imageUrl}" alt="${product.name}">
                    <p class="mt-md-4 fs-4"><span class="opacity-50 fs-6">$ </span>${product.originalPrice.toFixed(2)}<span class="opacity-50 fs-6">99</span></p>
                    <p class="original-price"><span class="opacity-50 fs-7 lh-3">$ ${product.price.toFixed(2)}</span></p>
                    <p class="opacity-75 fs-6 lh-3 mt-md-4 ">${product.name}</p>
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <span class="opacity-50">${product.reviews}</span>
                      <div class="py-md-3">
                        <a href="./products.html?id=${product.id}" class="pt-md-3  text-dark">see more ...</a>
                      </div>
                </div>`;
                    productElement.addEventListener("click",function(){
                    window.location.href = `./products.html?id=${product.id}`;
               });
        //   categorySection.appendChild(productElement);
          productslist.appendChild(productElement);
     });
};
        // Display all products initially
        displayProducts(products);
// ************************************************* category *************************************  
const categoryButton = document.querySelector(".category");
const dropdownCategory = document.querySelector(".dropdown-category");

categoryButton.addEventListener("click", function(e) {
    e.stopPropagation();
    dropdownCategory.classList.toggle("show");
});
    // filter
    const filters = document.querySelectorAll(".dropdown-category li");
    filters.forEach(function (filter) {
        filter.addEventListener("click", function(e){
            e.preventDefault();
            const category = this.dataset.select.toLowerCase();
          const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);  
            displayProducts(filteredProducts);
            dropdownCategory.classList.remove("show");
            // Update button text to selected category
            categoryButton.innerHTML = `${this.innerText} <i class="fas fa-caret-down ps-1"></i>`; 
      });
//     Closing the category 
 window.addEventListener("click", (event) => {
    if (!categoryButton.contains(event.target) && !dropdownCategory.contains(event.target)) {
        dropdownCategory.classList.remove("show");
    }
});
});
// ***************************************search********************************
const searchForm = document.querySelector("#form");
const inputSearch = document.querySelector("form input");
const searchButton = document.querySelector("form .search");

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    const searchText = inputSearch.value.trim().toLowerCase();
    if(searchText.length >= 2){
        const filteredProducts = productsData.filter(product =>
            product.name.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts); 
    }else{
        displayProducts(productsData);
    }
});
// ******************************** dropdown menu ***************************
const menu = document.querySelector('.menu .menu-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mainMenu = document.querySelector('.main-menu');

// The drop-down menu will open
menu.addEventListener("click" , function(e){
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
    mainMenu.classList.remove('show');
});
//  Closing the dropdown menu
window.addEventListener("click", () => {
    dropdownMenu.classList.remove('show');
    mainMenu.classList.remove('show');
});


const amazonMusicLink = document.querySelector('.amazon-music ');
const backButton = document.querySelector('.title-main-menu a');


amazonMusicLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.add('show');
    mainMenu.style.left = `${dropdownMenu.offsetWidth}px`;
});

backButton.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.remove('show');
});

// ******************************** Local storage cart ***************************

document.addEventListener("DOMContentLoaded", function() {
    const cartCountElement = document.querySelector(".basket-number");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount(count) {
        cartCountElement.textContent = count;
    }

    updateCartCount(cart.length);
});







