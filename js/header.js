
// ************************************* Search form ********************************
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

// ************************************ Category section *************************************  
const categoryButton = document.querySelector(".category");
const dropdownCategory = document.querySelector(".dropdown-category");

categoryButton.addEventListener("click", function(e) {
    e.stopPropagation();
    dropdownCategory.classList.toggle("show");
});
    //*************** filter ******************
    const filters = document.querySelectorAll(".dropdown-category li");
    filters.forEach(function (filter) {
        filter.addEventListener("click", function(e){
            e.preventDefault();
            const category = this.dataset.select.toLowerCase();
          const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);  
            displayProducts(filteredProducts);
            dropdownCategory.classList.remove("show");
            // ******* Update categories button text *************
            categoryButton.innerHTML = `${this.innerText} <i class="fas fa-caret-down ps-1"></i>`; 
      });
      //*************** Closing category ***********
 window.addEventListener("click", (event) => {
    if (!categoryButton.contains(event.target) && !dropdownCategory.contains(event.target)) {
        dropdownCategory.classList.remove("show");
    }
});
});

//********************************* Choose language ********************************
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

//*********************************** Sing in section *************************************

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
// ******************************* dropdown menu ***************************
    const menuButton = document.querySelector('.menu .menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const titleMainMenu = document.querySelector('.title-main-menu');
    const titleSubMenu = document.querySelector('.title-sub-menu');
    const clickAmazonMenu = document.querySelector('.amazon-menu');
    const backMenuLink = document.querySelector('.back-menu-link');

    //*********************** Opening main menu ***************
     menuButton.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });
     //***********************  Closeing main menu ***************
     window.addEventListener("click", () => {
         dropdownMenu.classList.remove('show');
         titleSubMenu.classList.remove('show');
         titleMainMenu.classList.remove('hidden');
    });

   dropdownMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
     //*************** Opening submenu ***************
    clickAmazonMenu.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.add('show');
        titleSubMenu.classList.add('show');
        titleMainMenu.classList.add('hidden');

    });
    //****************  Back  main menu ****************
    backMenuLink.addEventListener("click", function (e) {
    e.preventDefault();
    titleSubMenu.classList.remove('show');
    titleMainMenu.classList.remove('hidden');
});



    










