const addToCartParams = new URLSearchParams(window.location.search);
const productId = addToCartParams.get("id");
const quantity = addToCartParams.get("quantity");

// display Cart
function displayCart(){}