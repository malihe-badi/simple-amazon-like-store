document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart-items");
    const products = JSON.parse(localStorage.getItem("productsData")) || []; // Ensure default empty array if no productsData
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
 
    function displayCartItems() {
        cartContainer.innerHTML = ''; // Clear previous content
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        } else {
            cart.forEach(cartItem => {
                const product = products.find(p => p.id.toString() === cartItem.id);
                if (product) {
                    cartContainer.innerHTML += `<div class="cart-items col-md-7 rounded-4 bg-white d-flex  flex-column p-md-3"> 
                <div class="deselect-all m-md-4">
                <h2 class="fw-bold ">Shopping Basket</h2> 
               <button type="button" class="btn text-success">Deselect all items</button> 
           </div> 
       <div class="col cart-item">
            <div class="d-flex row  bg-white p-0 m-0">
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
                        <option value="1">Quantity: 1</option>
                        <option value="2">Quantity: 2</option>
                        <option value="3">Quantity: 3</option>
                        <option value="4">Quantity: 4</option>
                        <option value="5">Quantity: 5</option>
                        <option value="6">Quantity: 6</option>
                        <option value="7">Quantity: 7</option>
                        <option value="8">Quantity: 8</option>
                        <option value="9">Quantity: 9</option>
                        <option value="10">Quantity: 10</option>
                        <option value="11">Quantity: 11</option>
                        <option value="12">Quantity: 12</option>
                        <option value="13">Quantity: 13</option>
                        <option value="14">Quantity: 14</option>
                        <option value="15">Quantity: 15</option>
                        <option value="16">Quantity: 16</option>
                        <option value="17">Quantity: 17</option>
                        <option value="18">Quantity: 18</option>
                        <option value="19">Quantity: 19</option>
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
                      <div class="col-md-1  ">
                      <span class="fw-bold">
                      ${product.originalPrice.toFixed(2)}
                      </span>
                  </div>
       </div>
            
       </div>
          <div class="p-md-2 total m-md-4 justify-content-between ">
                   <p class="text-end">Subtotal (item ${cartItem.id}):<span class="fw-bold pt-1">
                    ${product.originalPrice.toFixed(2)}
                   </span> </p> 
         </div>
           </div>
          <div class="cart-total col-md-2 bg-white rounded-4 py-md-3 ">     
          <p >Subtotal (item ${cartItem.id}) :  <span class="fw-bold">
           ${product.originalPrice.toFixed(2)}
          </span> </p>
          <label class="py-md-3 fs-7" for=""> 
          <input type="checkbox">
          This will be a gift <a href="#" class="text-success">Learn more</a>
         </label>
         <button class=" btn rounded-4 bg-warning p-1 w-100 fs-7 text-secondary" data-product-id="${product.id}">Proceed to Checkout</button>
    </div>`;
                } else if (!product){
                    cartContainer.innerHTML = `<div class="page-cart m-md-4 p-md-4 bg-light rounded-3">
                    <h1 class="fs-2 fw-bold">Your Amazon Basket is empty.</h1>
                    <p> Check products page for shopping.
                   <a href="./index.html">continue shopping</a>
                   </p>
                 </div>`;
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
        const updatedCart = cart.filter(item => item.id !== productId.toString());
        // const updatedCart2 = []
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        // localStorage.setItem("cart", JSON.stringify(updatedCart2));
        displayCartItems();
    }

    try {
        displayCartItems();
    } catch (error) {
        console.error("Error displaying cart items:", error);
    }
});
