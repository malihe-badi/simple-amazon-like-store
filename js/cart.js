const deselectAll = document.querySelector(".deselect-all");
const cartItems = document.querySelector('.cart-items');

document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart-item");
    const products = JSON.parse(localStorage.getItem("productsData")) || []; 
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.querySelector(".basket-number");

    function updateCartCount(count) {
        cartCountElement.textContent = count;
    }
    function displayCartItems() {
        cartContainer.innerHTML = ''; // پاک کردن محتوای قبلی
        const fullPage = document.querySelector(".full-page");
        if (cart.length === 0) {
            cartItems.innerHTML = '';
            cartItems.classList.add('cart-items-none');
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
                                            <select name="quantity" class="quantity pe-1 py-1 rounded-5 bg-light mb-3">
                                                <option value="1">quantity: 1</option>
                                                <!-- add more options as needed -->
                                            </select>
                                        </label>
                                        <span class="text-secondary">|</span>
                                        <button class="remove-cart btn text-success fs-7 p-0" data-product-id="${product.id}">Delete</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">Save for later</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">See more like this</button>
                                        <span class="text-secondary">|</span>
                                        <button class="btn text-success fs-7 p-0" data-product-id="${product.id}">Share</button>
                                    </div>
                                </div>
                                <div class="col-md-1 original-price">
                                    <span class="fw-bold">12.00</span>
                                </div> 
                            </div>
                        </div>`;
                } 
            });

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
        }

        updateCartCount(cart.length);
    }

    function removeFromCart(productId, button) {
        cart = cart.filter(item => item.id !== productId.toString());
        localStorage.setItem("cart", JSON.stringify(cart));

        const cartItemElement = document.querySelector(`.cart-item[data-cart-id="${productId}"]`);
        if (cartItemElement) {
            cartItemElement.remove();
        }

        button.textContent = "آبدیت";
        updateCartCount(cart.length);
    }
    
    displayCartItems();
});

document.addEventListener("DOMContentLoaded", function() {
    const cartCountElement = document.querySelector(".basket-number");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    function updateCartCount(count) {
        cartCountElement.textContent = count;
    }
    updateCartCount(cart.length);
});

function deselectAllItems() {
    localStorage.clear();
    location.reload();
}

if (deselectAll) {
    deselectAll.addEventListener("click", deselectAllItems);
}
