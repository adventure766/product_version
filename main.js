let menu = document.querySelector('.menu')
let pages = document.querySelector(".pages")
let menuClose = document.querySelector(".menu-close")
let buyNow = document.querySelector(".buy")
let buyNow2 = document.querySelector(".buy2")
let buyNow3 = document.querySelector(".buy3")
let buyNow4 = document.querySelector(".buy4")
let container = document.querySelector(".container")
let productCard = document.querySelector(".product-card")
let closeBtn = document.querySelector(".close")
let images = document.querySelectorAll(".img")
let mainImg = document.querySelector(".main-img")
let orderNow = document.querySelector(".order-now")
let payment = document.querySelector(".payment")
let closeBtn2 = document.querySelector(".close-payment")

menu.addEventListener("click",()=>{
    pages.style.display = "flex"
    menu.style.display = 'none'
    menuClose.style.display = "block"
})

menuClose.addEventListener("click", ()=>{
    pages.style.display = "none"
    menu.style.display = 'block'
    menuClose.style.display = "none"
})


buyNow.addEventListener("click",()=>{

    window.location.href ='product.html'

})

buyNow2.addEventListener("click",()=>{

 window.location.href ='product.html'


})

buyNow3.addEventListener("click",()=>{

     window.location.href ='product.html'


})

buyNow4.addEventListener("click",()=>{

       window.location.href ='product.html'


})


