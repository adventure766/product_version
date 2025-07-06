let images = document.querySelectorAll(".img")
let mainImg = document.querySelector(".main-img")
let backHome = document.querySelector(".back")
let closeMomo = document.querySelector(".closeMomo")
let closeMomoForm = document.querySelector(".closeMomo-form")
let closePayment = document.querySelector(".closePayment")
let momo = document.querySelector(".momo-form")
let paymentsCard = document.querySelector(".payment-card")
let plusBtn = document.querySelector(".plus")
let minusBtn = document.querySelector(".minus")
let total = document.querySelector(".quantity-total")
let payBtn = document.querySelector(".send-order")
let orderVerify = document.querySelector(".verify-order")
let paymentVerify = document.querySelector(".payment-verification")
let gatewayOptions = document.querySelector(".options-payment")
let momoImage = document.querySelector(".momo")
let orderNow = document.querySelector(".order-now")
let addtoCart = document.querySelector(".add-to-cart")
let totalCart =document.querySelector(".total-cart")
let productDetailes =document.querySelector(".product-details")
let cartTotal = document.querySelector(".cart-total")
let cartBtnminus = document.querySelector(".minus-btn")
let cartBtnplus = document.querySelector(".plus-btn")
let cartQuantity = document.querySelector(".quantity-total-cart")
let cartClose  = document.querySelector(".closeCart")
let cartCard = document.querySelector(".cart-card")
let cartBtn = document.querySelector(".cart-button")
let cartIcon = document.querySelector(".cart-icon")
let cartContainer = document.querySelector(".cart-container")
let cartHeadline = document.querySelector(".cart-headline")
let loadingImg = document.querySelector(".loading-gif")
let zeroCart = document.querySelector(".zero-cart")
let cart_icon = document.querySelector(".carticon")
let quantityTotal = 0
let totalValue = 0

images.forEach((image) =>{
    image.addEventListener("click", ()=>{
        mainImg.src = image.src
        mainImg.style = "border: 1px solid black; border-radius: 5px"
    })
    
})


orderNow.addEventListener("click", ()=>{
    paymentsCard.style = 'display: block;'
})

addtoCart.addEventListener("click", ()=>{
    if(totalValue>=1){
        cartQuantitytotal++
        cartQuantity.textContent = cartQuantitytotal
        cartTotal.textContent = `${cartQuantitytotal *120000} SSP`
        totalCart.textContent = cartQuantitytotal

    }else {
    totalValue ++
    totalCart.textContent = totalValue
     }
    
    const btnParent = addtoCart.parentElement
    let name = btnParent.querySelector(".product-d-name")
    console.log(name)
     

})

momoImage.addEventListener("click", ()=>{
    momo.style = 'display: grid;'
})


backHome.addEventListener("click", ()=>{
    window.location.href = 'index.html'
})

closeMomo.addEventListener("click", ()=>{
    momo.style= 'display: none;'
    total.textContent = '0'
    quantityTotal = 0
})

closeMomoForm.addEventListener("click", ()=>{

    paymentVerify.style.display = "none"
})

closePayment.addEventListener("click", ()=>{
    paymentsCard.style.display = "none"
})

minusBtn.addEventListener("click", ()=>{
    if(quantityTotal>0){
    quantityTotal--
    total.textContent = quantityTotal
    }else{
        return
    }
    

})

plusBtn.addEventListener("click", ()=>{
    quantityTotal++
    total.textContent = quantityTotal
    
})

payBtn.addEventListener("click", ()=>{
    window.location.href = `tel:*720*7217653*${total.textContent*120000}#`;
    
})

orderVerify.addEventListener("click", ()=>{
    paymentVerify.style.display = "flex"
    
})



// cart Page
let cartQuantitytotal= 0

cartBtnminus.addEventListener("click", ()=>{
    if(cartQuantitytotal >0){
    cartQuantitytotal --
    cartQuantity.textContent = cartQuantitytotal
    cartTotal.textContent = `${cartQuantitytotal *120000} SSP`
    }else{
        return
    }
})

cartBtnplus.addEventListener("click", ()=>{
    
    cartQuantitytotal ++
    let cart_total = cartQuantitytotal *120000
    cartQuantity.textContent = cartQuantitytotal
    cartTotal.textContent = `${cart_total.toLocaleString()} SSP`
    
})

cartBtn.addEventListener("click", ()=>{
    paymentsCard.style = 'display: block; z-index :1;'
})


cartClose.addEventListener("click", ()=>{
    cartCard.style = 'display: none;'

    
})
let timeout;

cartIcon.addEventListener("click", () => {
    clearTimeout(timeout);

    if (totalValue > 0) {
        // Initial UI setup
        loadingImg.style.display = 'block';
        cartCard.style.display = 'block';
        cartHeadline.style.display = 'block';
        cart_icon.style.display = 'none';
        zeroCart.style.display = 'none';
        cartContainer.style.display = 'none';
        cartBtn.style.display = 'none';

        // Delay showing actual cart content
        timeout = setTimeout(() => {
            cartContainer.style.display = 'grid';
            cartClose.style.position = 'absolute';
            cartClose.style.marginTop = '-483px';
            cartBtn.style.display = 'block';
            loadingImg.style.display = 'none';
        }, 3000);
    } else {
        // Show empty cart message
        clearTimeout(timeout);
        cartCard.style.display = 'block';
        cartHeadline.style.display = 'none';
        cartContainer.style.display = 'none';
        cartClose.style.position = 'fixed';
        cartClose.style.marginTop = '10px';
        cartBtn.style.display = 'none';
        loadingImg.style.display = 'none';
    }
});






let customerName = document.querySelector(".customer-name")
let customerEmail = document.querySelector(".customer-email")
let customerAddress = document.querySelector(".customer-address")
let customerPhone = document.querySelector(".customer-number")
let orderBtn = document.querySelector(".submit-data")

emailjs.init("aacfx8UxSFnwoTO6b");
orderBtn.addEventListener("click", () => {
    function generateUniqueProductId() {
  const timestamp = Date.now(); // current time in ms
  const randomPart = Math.floor(Math.random() * 100000); // 5 digits
  return `PID-${timestamp}-${randomPart}`;
}

  const productID = generateUniqueProductId()

  emailjs.send("service_ojfiknh", "template_4heepdr", {
    customer_name: customerName.value,
    email: customerEmail.value,
    phone_number: customerPhone.value,
    address: customerAddress.value,
    quantity: total.textContent,
    price_total: `${total.textContent * 120000} SSP`,
    product_id: productID
  })
  .then((res) => {
    console.log("SUCCESS!", res.status, res.text);
    alert("Order received successfully!");
  })
  .catch((err) => {
    console.error("FAILED...", err);
    alert("Failed to place order.");
  });
});




