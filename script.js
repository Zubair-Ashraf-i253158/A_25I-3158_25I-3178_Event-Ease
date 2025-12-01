// 1. ADD TO CART ALERT + LOG
const addToCartBtn = document.querySelector(".add-to-cart-btn");
if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
        alert("Item added to cart!");
        console.log("Add to Cart clicked");
    });
}



// 2. PLACE ORDER ALERT + LOG
const placeOrderBtn = document.querySelector(".place-order-btn");
if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", (e) => {
        alert("Your order has been placed successfully!");
        console.log("Place Order button clicked");
    });
}



// 3. LOGIN REDIRECT ALERT
const loginIcon = document.querySelector('a[href="login.html"]');
if (loginIcon) {
    loginIcon.addEventListener("click", () => {
        alert("Redirecting to Login Page");
    });
}



// 4. CONSOLE LOG: SHIPPING METHOD SELECTED
const shippingSelect = document.getElementById("shipping");
if (shippingSelect) {
    shippingSelect.addEventListener("change", () => {
        console.log("Selected Shipping Method:", shippingSelect.value);
    });
}



// 5. CLICK EVENTS LOG
document.addEventListener("click", (e) => {
    console.log("User clicked on:", e.target);
});



// 6. SEARCH INPUT CONSOLE LOG
const searchBtn = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");

if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
        console.log("Search Input:", searchInput.value);
        alert("Searching for: " + searchInput.value);
    });
}