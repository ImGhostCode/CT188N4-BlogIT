window.onscroll = function () {
    if (scrollY > 300) {
        document.getElementById('footer__btn-top').style.animation = 'showBtnTop ease-in-out 1.5s forwards'
        document.getElementById('footer__btn-top').style.visibility = 'visible'
    } else {

        document.getElementById('footer__btn-top').style.animation = 'hideBtnTop ease-in-out 1.5s forwards'
        // document.getElementById('footer__btn-top').style.visibility = 'hidden'
    }
}

const btn_search = document.getElementById('nav__btn-search')
const btn_search_click = document.getElementById('btn-search--click')
btn_search.addEventListener('click', (e) => {
    // e.stopPropagation()  
    if (btn_search_click.style.visibility === 'hidden') {
        btn_search_click.style.animation = 'btn-search-animation-show ease-in-out 0.4s forwards'
        btn_search_click.style.visibility = 'visible'
    } else {
        btn_search_click.style.animation = 'btn-search-animation-hide ease-in-out 0.4s forwards'
        setTimeout(() => {
            btn_search_click.style.visibility = 'hidden'
        }, 600)

    }
})

const input_search = document.querySelector('#btn-search--click input')
input_search.addEventListener('click', e => {
    e.stopPropagation()
})

window.onclick = function (e) {
    // console.log(e.target.id === 'main')
    if (e.target.id === 'main') {
        btn_search_click.style.animation = 'btn-search-animation-hide ease-in-out 0.4s forwards'
        setTimeout(() => {
            btn_search_click.style.visibility = 'hidden'
        }, 600)
    }
}


// Validate subscribe form 
const footer_top_input = document.getElementById('footer-top__input')
const footer_top_btn = document.getElementById('footer-top__btn')
const footer_top_p = document.getElementById('footer-top__p')
const footer_top_form = document.getElementById('footer-top__form')

footer_top_btn.onclick = function (e) {
    if (footer_top_input.value === '') {
        e.preventDefault()
        footer_top_p.style.display = 'block'
    } else
        footer_top_form.submit()
}

//Show and hide password
var x = true;
function myFunction() {
    if (x) {
        document.getElementById('password').type = "text";
        document.getElementsByClassName('form-group__btn-hide')[0].style.display = 'block'
        document.getElementsByClassName('form-group__btn-show')[0].style.display = 'none'
        x = false;
    } else {
        document.getElementById('password').type = "password";
        document.getElementsByClassName('form-group__btn-show')[0].style.display = 'block'
        document.getElementsByClassName('form-group__btn-hide')[0].style.display = 'none'
        x = true;
    }
}
function myFunction2() {
    if (x) {
        document.getElementById('comfirm-password').type = "text";
        document.getElementsByClassName('form-group__btn-hide')[1].style.display = 'block'
        document.getElementsByClassName('form-group__btn-show')[1].style.display = 'none'
        x = false;
    } else {
        document.getElementById('comfirm-password').type = "password";
        document.getElementsByClassName('form-group__btn-show')[1].style.display = 'block'
        document.getElementsByClassName('form-group__btn-hide')[1].style.display = 'none'
        x = true;
    }
}

// Btn cart
function linkToCart() {
    window.location.href = '/giohang.html'
}

let cart
let cartStored = window.localStorage.getItem('cart')
if (cartStored === null) {
    cart = []
} else {
    cart = JSON.parse(cartStored)
}

// Display number of item 
document.querySelector("#btn-cart-number").textContent = cart.length ? cart.length : '0'



function VNDConverter(price) {
    return price.toLocaleString('de-ED', { style: 'currency', currency: 'VND' })
}

