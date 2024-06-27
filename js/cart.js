document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".cart-items");
    const cartContainer = document.querySelector(".cart-item");
    const products = JSON.parse(localStorage.getItem("productsData")) || []; 
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.querySelector(".basket-number");
    const totalPriceElement = document.querySelector(".total-price");
    const totalPriceCartElement = document.querySelector(".total-price-cart");
    const deselectAll = document.querySelector(".deselect-all");

    function updateCartCount() {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
        return totalItems;
    }

    function updateTotalPrice() {
        let totalPrice = 0;
        cart.forEach(cartItem => {
            const product = products.find(p => p.id.toString() === cartItem.id);
            if (product) {
                totalPrice += product.originalPrice * cartItem.quantity;
            }
        });
        totalPriceElement.innerText = `Subtotal (${updateCartCount()} items): $${totalPrice.toFixed(2)}`;
        totalPriceCartElement.innerText = `Subtotal (${updateCartCount()} items): $${totalPrice.toFixed(2)}`;
    }

    function displayCartItems() {
        cartContainer.innerHTML = ''; // Clear previous content
        const fullPage = document.querySelector(".full-page");
        if (cart.length === 0) {
            container.classList.add('cart-items-none');
            fullPage.innerHTML = `
                <div class="page-cart w-75 m-md-3 p-md-4 bg-light rounded-3">
                    <h1 class="fs-2 fw-bold p-md-3">Your Amazon Basket is empty.</h1>
                    <p>Check products page for shopping.
                    <a href="./index.html">continue shopping</a></p>
                </div>`;
        } else {
            cart.forEach(cartItem => {
                const product = products.find(p => p.id.toString() === cartItem.id);
                if (product) {
                    const itemTotalPrice = (product.originalPrice * cartItem.quantity).toFixed(2);
                    cartContainer.innerHTML += ` 
                        <div class="cart-item bg-white p-md-3" data-cart-id="${product.id}">
                            <div class="d-flex row">
                                <div class="col-md-3">
                                    <img class="img-fluid" src="${product.imageUrl}" alt="${product.name}">
                                </div>
                                <div class="col-md-8">
                                    <p class="text-secondary fs-6 ">${product.name}</p>
                                    <p class="text-success fs-6 pt-1">In Stock</p>
                                    <img src="./images/prime.webp" alt="prime">  
                                    <div class="text-success fs-7 py-1 ">
                                        <label for="checkbox" class="text-dark py-md-1"> 
                                            <input type="checkbox">
                                            This will be a gift <a href="#" class="text-success">Learn more</a>
                                        </label>
                                    </div>
                                    <p class="fs-7 fw-bold p-0 m-0">Style Name: <span class="fs-8 text-secondary">0.5 litre work container</span></p>
                                    <p class="fs-7 fw-bold">Colour name: <span class="fs-8 text-secondary"> white</span></p>
                                    <div>
                                        <label for="quantity">
                                            <select name="quantity" class="quantity pe-1 py-1 rounded-5 bg-light mb-3" data-product-id="${product.id}">
                                                ${[...Array(20).keys()].map(i => `<option value="${i+1}" ${i+1 === cartItem.quantity ? 'selected' : ''}>quantity: ${i+1}</option>`).join('')}
                                            </select>
                                        </label>
                                        <span class="text-secondary">|</span>
                                       <button class="remove-cart update-cart btn text-success fs-7 p-0" data-product-id="${product.id}">Delete</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">Save for later</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">See more like this</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">Share</button>
                                    </div>
                                </div>
                                <div class="col-md-1 original-price">
                                    <span class="fw-bold">${itemTotalPrice}</span>
                                </div> 
                            </div>
                        </div>`;
                }
            });

            updateTotalPrice();
              
            if (deselectAll) {
                cartContainer.prepend(deselectAll);
            }

            const removeButtons = document.querySelectorAll(".remove-cart");
            removeButtons.forEach(btn => {
                btn.addEventListener("click", function() {
                    const productId = this.getAttribute("data-product-id");
                    removeFromCart(productId, this);
                });
            });

            const updateButtons = document.querySelectorAll(".update-cart");
            updateButtons.forEach(btn => {
                btn.addEventListener("click", function() {
                    const productId = this.getAttribute("data-product-id");
                    updateCart(productId);
                });
            });

            const quantitySelectors = document.querySelectorAll(".quantity");
            quantitySelectors.forEach(select => {
                select.addEventListener("change", function() {
                    const productId = this.getAttribute("data-product-id");
                    const newQuantity = parseInt(this.value, 10);
                    updateCartQuantity(productId, newQuantity);
                });
            });
        }
        updateCartCount();
    }

    function removeFromCart(productId, button) {
        const productInCart = cart.find(item => item.id === productId.toString());
        if (productInCart) {
            cart = cart.filter(item => item.id !== productId.toString());
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }
    }
  
    
    function updateCartQuantity(productId, newQuantity) {
        const productInCart = cart.find(item => item.id === productId);
        if (productInCart) {
            productInCart.quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }
    }

    if (deselectAll) {
        deselectAll.addEventListener("click", function() {
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        });
    }

    displayCartItems();
});
