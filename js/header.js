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

//*********************************************** button account ************************************************

document.addEventListener("DOMContentLoaded", function () {
    const buttonAccount = document.querySelector(".account");
    const openBoxAccount = document.querySelector(".account-box");

    buttonAccount.addEventListener("click", function (e) {
        e.stopPropagation();
        openBoxAccount.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
        if (!openBoxAccount.contains(e.target) && e.target !== buttonAccount) {
            openBoxAccount.classList.remove('show');
        }
    });
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




