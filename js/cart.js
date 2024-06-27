const deselectAll = document.querySelector(".deselect-all");
const cartItems=document.querySelector('.cart-items')


document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart-item");
    const products = JSON.parse(localStorage.getItem("productsData")) || []; 
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
/*     const cartTotal = document.querySelector(".cart-total");
 */    
 
    function displayCartItems() {
        const fullPage=document.querySelector(".full-page")
        if (cart.length === 0) {
            cartItems.classList.add('cart-items-none')
            fullPage.innerHTML =
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
                    cartContainer.innerHTML += ` 
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
                                        <label for="quantity">
                                          <select name="quantity" calss="quantity" class="pe-1 py-1 rounded-5 bg-light mb-3">
                                              <option value="1">  quantity: 1</option><option value="2">  quantity: 2</option><option value="3">  quantity: 3</option><option value="4">  quantity: 4</option><option value="5">  quantity: 5</option><option value="6">  quantity: 6</option><option value="7">  quantity: 7</option><option value="8">  quantity: 8</option><option value="9">  quantity: 9</option><option value="10">  quantity: 10</option><option value="11">  quantity: 11</option><option value="12">  quantity: 12</option><option value="13">  quantity: 13</option><option value="14">  quantity: 14</option><option value="15">  quantity: 15</option><option value="16">  quantity: 16</option><option value="17">  quantity: 17</option><option value="18">  quantity: 18</option><option value="19">  quantity: 19</option>
                                          </select>
                                      </label>
                                          <span class="text-secondary">|</span>
                                          <button class="remove-cart btn text-success fs-7 p-0" data-product-id="3">Delete</button>
                                          <span class="text-secondary">|</span>
                                          <button class="remove-cart btn text-success fs-7 p-0" data-product-id="3">Save for later</button>
                                           <span class="text-secondary">|</span>
                                           <button class="remove-cart btn text-success fs-7 p-0" data-product-id="3">See more like this</button>
                                           <span class="text-secondary">|</span>
                                           <button class="remove-cart btn text-success fs-7 p-0" data-product-id="3">Share</button>
                                         </div>
                        </div>
                                      <div class="col-md-1 original-price">
                                      <span class="fw-bold">
                                      12.00
                                      </span>
                                      </div> 
                 </div>
                      </div>
                    `;
   
                } 
              
            });

            cartContainer.innerHTML = cartHTML;
            cartContainer.prepend(deselectAll);

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
    displayCartItems()
    /* try {
        displayCartItems();
    } catch (error) {
        console.error("Error displaying cart items:", error);
    } */
});

// ******************************** Local storage cart ***************************

document.addEventListener("DOMContentLoaded", function() {
    const cartCountElement = document.querySelector(".basket-number");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    function updateCartCount(count) {
        cartCountElement.textContent = count;
    }
    updateCartCount(cart.length);

});
    
// ******************************** deselect All ***************************
  function  deselectAllItems () {
    localStorage.clear()
    location.reload()

    /* cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount(cart.length); */
  }

  deselectAll.addEventListener("click", deselectAllItems);


