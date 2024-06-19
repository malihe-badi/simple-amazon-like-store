const searchParams = new URLSearchParams(window.location.search);
const idParams = searchParams.get('id');
const products = JSON.parse(localStorage.getItem("productsData"));
const productDetails = document.querySelector(".product-details");

function displayProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        productDetails.innerHTML = `
        <div class="col-3 img-fluid me-4">
                <img class=" img-product" src="${product.imageUrl}" alt="${product.name}">
            </div>
            <div class="col-5">
                <h2 class="fs-5" >${product.name}</h2>
                <a class="pe-5 text-success" href="#">Visit the acer Store</a>
                <div class="border-bottom-info py-3 text-dark">
                    <span>4.3</span>
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <img src="images/basket.webp" alt="">
                    <a class="text-dark" href="#">
                         <span class="text-success ">
                           1,752 ratings | Search this page </span>
                           </a>
                           <br> <br> 
                           <span class="text-dark ">
                           6K+ bought in past month</span>
                </div>
                <div class="border-bottom-info">
                    <p class="mt-4 fs-3"><span class="text-danger">-7%</span> <span class="opacity-50 fs-6">$ </span>${product.originalPrice.toFixed(2)}<span class="opacity-50 fs-6">99</span></p>
                    <p class="opacity-75">List Price: <span class="opacity-75 price"> $321.99</span></p>

                    <p class="fs-7~">$91.31 Shipping & Import Fees Deposit to Germany
                        <a class="text-success" href="#">Details <i class="fas fa-angle-down text-dark opacity-75"></i></a></>

                        <p>Available at a lower price from other sellers that may not offer free Prime shipping.</p>

                       <div class="py-2"><button class="btn bg-orange fs-7">Extra Savings</button><a href="#" class="text-dark opacity-75">
                        Amazon Music offer with this purchase 1 Applicable Promotion <i class="fas fa-angle-down"></i>
                        </a></div>
                </div>
                <div class="border-bottom-info">
                     <span>Style:</span><p>R3 7320U</p>
                     <button class="btn"> R3 7320U
                        <span class="text-danger">$299.99</span>
                     </button>
                     <button class="btn"> R7 5700U
                        <span class="text-danger">$499.99</span>
                     </button>
                     <ul>
                        <li>Brand</li>                       <span>acer</span>
                        <li>Model Name</li>                  <span>Laptop</span>
                        <li>Screen Size</li>                 <span>15.6 Inches</span>
                        <li>Color</li>                       <span>Silver</span>
                        <li>Hard Disk Size</li>              <span>128 GB</span>
                        <li>CPU Model</li>                   <span>Ryzen 3</span>
                        <li>Ram Memory Installed Size</li>   <span>8 GB</span>
                        <li>Ram Memory Installed Size</li>   <span>8 GB</span>
                     </ul>
                     <ul>
                        <li>Operating System</li>   <span>Windows 11 S</span> 
                        <li>Special Feature</li>   <span>Backlit Keyboard</span> 
                        <li>Graphics Card Description</li>   <span>Integrated</span> 
                      </ul>
                     <a href="#" class="pt-3 text-dark text-secondary">see more ... <i class="fas fa-angle-down"></i></a>
                </div>
                <div class="border-bottom-info">
                    <h3>About this item</h3>
                    <ul class="list-style">
                        <li> 
                            Purposeful Design: Travel with ease and look great doing it with the Aspire's 3 thin, light design.</li>
                        <li>
                            Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the entire family, with performance and productivity at the core.
                        </li>
                        <li>
                            Visibly Stunning: Experience sharp details and crisp colors on the 15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.
                        </li>
                        <li>
                            Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe solid-state drive storage to store your files and media
                        </li>
                        <li>
                            The HD front-facing camera uses Acer’s TNR (Temporal Noise Reduction) technology for high-quality imagery in low-light conditions. Acer PurifiedVoice technology with AI Noise Reduction filters out any extra sound for clear communication over online meetings.
                        </li>
                        <li>
                            Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.
                        </li>
                        <li>
                            Improved Thermals: With a 78% increase in fan surface area, enjoy an improved thermal system and an additional 17% thermal capacity. Allowing for longer, more efficient work sessions while not plugged in.
                        </li>
                    </ul>
                    <ul class="list-style">
                        <li>
                            Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC adapter
                        </li>
                        <li>
                            What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
                        </li>
                        <li>
                            Keyboard backlight not present on this model
                        </li>
                    </ul>
                    <a href="#" class="pt-3 text-dark text-secondary">see more ... <i class="fas fa-angle-down"></i></a>

                    <a class="text-secondary" href="#"><i class="fas  fa-file-text-o"></i>Report an issue with this product or seller</a>

                    <p>
                        <span class="fw-bold">Note:</span> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
                    </p>
                </div>
            </div>
            <div class="col-2">
                <div class="border-3">
                  <span>Buy new:     <img src="./images/dot.webp" alt="dot"></span>
                  <p class="mt-4 fs-4"><span class="text-danger">-7%</span> <span class="opacity-50 fs-6">$ </span>${product.originalPrice.toFixed(2)}<span class="opacity-50 fs-6">99</span></p>

                  <p>
                      $91.31 Shipping & Import Fees Deposit to Germany Details Delivery<span>Wednesday, May 15</span>
                  </p>
                    <div>
                      <img class="mt-2 fs-6" src="images/locationIcon.png" alt="locationIcon"><span class="fs-6 opacity-50 mb-0" >Deliver to Iran</span>
                      <p class="fw-bold text-center m-0">Iran</p>
                    </div>
                  <span class="text-secondary"> In Stock </span>
                   <label for="quantity">
                      <select name="" id="quantity">
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
                   <button class="btn rounded-4 bg-orange"> Add to cart</button>
                   <ul>
                      <li>Ships from        <span>Amazon.com</span></li> 
                      <li>Sold by           <span>Amazon.com</span></li>    
                      <li>Returns           <span><a href="#">
                          Eligible for Return, Refund or Replacement within 30 days of receipt</a></span></li>    
                      <li>Payments           <span><a href="#">Secure transaction</a></span></li>     
                   </ul>
                   <ul>
                      <li>Support            <span><a href="#">Product support included</a></span></li> 
                   </ul>
                   <a href="#" class="pt-3 text-dark text-secondary">see more ... <i class="fas fa-angle-down"></i></a>
                </div>
          </div>`  
   
    } else {
        productDetails.innerHTML = `<p>Product not found.</p>`;
    }
}

displayProductDetails(idParams);