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
let quantityTotal = 0

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
    paymentsCard.style = 'display: block;'
})

momoImage.addEventListener("click", ()=>{
    momo.style = 'display: grid;'
})


backHome.addEventListener("click", ()=>{
    window.location.href = 'index.html'
})

closeMomo.addEventListener("click", ()=>{
    momo.style= 'display: none;'
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




