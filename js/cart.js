document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart-items");
    const products = JSON.parse(localStorage.getItem("productsData")) || []; 
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // const cartTotal = document.querySelector(".cart-total");
 
    function displayCartItems() {
        let cartHTML = ''; // Clear previous content
        if (cart.length === 0) {
            cartHTML =
              `<div class="page-cart w-75 m-md-3 p-md-4 bg-light rounded-3">
                    <h1 class="fs-2 fw-bold p-md-3">Your Amazon Basket is empty.</h1>
                    <p> Check products page for shopping.
                   <a href="./index.html">continue shopping</a>
                   </p>
               </div>`
            ;
        }
               cart.forEach(cartItem => {
                const product = products.find(p => p.id.toString() === cartItem.id);
                if (product) {
                    cartHTML += ` <div class="d-flex row">
                   <div class="col-md-9 p-md-3 rounded-4 bg-white">
                      <div class="deselect-all m-md-4 d-n">
                          <h2 class="fw-bold ">Shopping Basket</h2> 
                           <button type="button" class=" btn text-success">Deselect all items</button>  
                      <div class="cart-item bg-white p-md-3">
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
                                        <label for="quantity" class="">
                                          <select name="quantity" id="quantity" class="pe-1 py-1 rounded-5 bg-light mb-3">
                                              ${Array.from({ length: 19 }, (_, i) => `<option value="${i+1}">  quantity: ${i+1}</option>`).join('')}
                                          </select>
                                      </label>
                                          <span class="text-secondary">|</span>
                                          <button class="remove-cart btn text-success fs-7 p-0" data-product-id="${product.id}">Delete</button>
                                          <span class="text-secondary">|</span>
                                          <button class="remove-cart btn text-success fs-7 p-0" data-product-id="${product.id}">Save for later</button>
                                           <span class="text-secondary">|</span>
                                           <button class="remove-cart btn text-success fs-7 p-0" data-product-id="${product.id}">See more like this</button>
                                           <span class="text-secondary">|</span>
                                           <button class="remove-cart btn text-success fs-7 p-0" data-product-id="${product.id}">Share</button>
                                         </div>
                        </div>
                                      <div class="col-md-1 original-price">
                                      <span class="fw-bold">
                                      ${product.originalPrice.toFixed(2)}
                                      </span>
                                      </div> 
                 </div>
                      </div>
                 </div>
                           <div class="p-md-2 total m-md-4 justify-content-between bg-white ">
                           <p class="text-end">Subtotal (item ${cartItem.id}):<span class="fw-bold pt-1">
                           ${product.originalPrice.toFixed(2)}
                           </span> </p> 
                           </div>
                           </div>
                   <div class="col-md-3">
                      <div class="cart-total bg-white rounded-4 p-md-3 ">     
                      <p >Subtotal (item ${cartItem.id}) :  <span class="fw-bold">
                       ${product.originalPrice.toFixed(2)}
                      </span> </p>
                      <label class="py-md-3 fs-7" for=""> 
                      <input type="checkbox">
                      This will be a gift <a href="#" class="text-success">Learn more</a>
                     </label>
                     <button class=" btn rounded-4 bg-warning p-1 w-100 fs-7 text-secondary" data-product-id="${product.id}">Proceed to Checkout</button>
                      </div> 
                   </div>
                  
               </div>`;
   
                } 
                else {
                    cartHTML =  `<div class="page-cart w-75 m-md-3 p-md-4 bg-light rounded-3">
                    <h1 class="fs-2 fw-bold p-md-3">Your Amazon Basket is empty.</h1>
                    <p> Check products page for shopping.
                   <a href="./index.html">continue shopping</a>
                   </p>
                 </div>`;
                }
            });

            cartContainer.innerHTML = cartHTML;
         

            const removeButtons = document.querySelectorAll(".remove-cart");
            removeButtons.forEach(btn => {
                btn.addEventListener("click", function() {
                    const productId = this.getAttribute("data-product-id");
                    removeFromCart(productId);
                });
            });
        
    }

    function removeFromCart(productId) {
        const updatedCart = cart.filter(item => item.id !== productId.toString());
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        displayCartItems();
    }

    try {
        displayCartItems();
    } catch (error) {
        console.error("Error displaying cart items:", error);
    }
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

// ******************************** deselect All ***************************
  function  deselectAllItems () {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount(cart.length);
  }

  deselectAll.addEventListener("click", deselectAllItems);


