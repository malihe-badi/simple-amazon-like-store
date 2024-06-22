document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart-items");
    const products = JSON.parse(localStorage.getItem("productsData"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCartItems() {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        } else {
            cart.forEach(productId => {
                const product = products.find(p => p.id === parseInt(productId));
                if (product) {
                    cartContainer.innerHTML += `
                        <div class="cart-item">
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <div>
                                <h3>${product.name}</h3>
                                <p>${product.originalPrice.toFixed(2)}</p>
                                <button class="remove-cart btn" data-product-id="${product.id}">Remove</button>
                            </div>
                        </div>
                    `;
                }
            });

            const removeButtons = document.querySelectorAll(".remove-cart");
            removeButtons.forEach(btn => {
                btn.addEventListener("click", function() {
                    const productId = this.getAttribute("data-product-id");
                    removeFromCart(productId);
                });
            });
        }
    }

    function removeFromCart(productId) {
        const index = cart.indexOf(productId);
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCartItems();
        }
    }

    displayCartItems();
});
