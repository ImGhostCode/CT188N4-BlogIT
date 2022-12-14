/* HO THANH LIEM */
/* PHI NGOC TAI */

//Show and hide button to top
window.onscroll = function () {
    if (scrollY > 300) {
        document.getElementById('footer__btn-top').style.animation = 'showBtnTop ease-in-out 1.5s forwards'
        document.getElementById('footer__btn-top').style.visibility = 'visible'
    } else {

        document.getElementById('footer__btn-top').style.animation = 'hideBtnTop ease-in-out 1.5s forwards'
    }
}

//Show and hide search box
const btn_search = document.getElementById('nav__btn-search')
const btn_search_click = document.getElementById('btn-search--click')
btn_search.addEventListener('click', (e) => {
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


// 
const input_search = document.querySelector('#btn-search--click input')
input_search.addEventListener('click', e => {
    e.stopPropagation()
})


//Show and hide search box
window.onclick = function (e) {
    if (e.target.id === 'main') {
        btn_search_click.style.animation = 'btn-search-animation-hide ease-in-out 0.4s forwards'
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
// https://www.w3schools.com/howto/howto_js_toggle_password.asp
var isShow = true;
function myFunction() {
    if (isShow) {
        document.getElementById('password').type = "text";
        document.getElementsByClassName('form-group__btn-hide')[0].style.display = 'block'
        document.getElementsByClassName('form-group__btn-show')[0].style.display = 'none'
        isShow = false;
    } else {
        document.getElementById('password').type = "password";
        document.getElementsByClassName('form-group__btn-show')[0].style.display = 'block'
        document.getElementsByClassName('form-group__btn-hide')[0].style.display = 'none'
        isShow = true;
    }
}
function myFunction2() {
    if (isShow) {
        document.getElementById('comfirm-password').type = "text";
        document.getElementsByClassName('form-group__btn-hide')[1].style.display = 'block'
        document.getElementsByClassName('form-group__btn-show')[1].style.display = 'none'
        isShow = false;
    } else {
        document.getElementById('comfirm-password').type = "password";
        document.getElementsByClassName('form-group__btn-show')[1].style.display = 'block'
        document.getElementsByClassName('form-group__btn-hide')[1].style.display = 'none'
        isShow = true;
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


// Responsive mobile 
// https://www.youtube.com/watch?v=Zuy7f4iCGu4
document.querySelector('.nav__btn-menu').onclick = function () {
    document.querySelector('.mobile-nav').style.transform = "translateX(0)";
    document.querySelector('#header').style.transform = "scale(0.9)"
    document.querySelector('#main').style.transform = "scale(0.9)"
    document.querySelector('#footer').style.transform = "scale(0.9)"
}


document.querySelector('.mobile-close').onclick = function () {
    document.querySelector('.mobile-nav').style.transform = "translateX(-100%)";
    document.querySelector('#header').style.transform = "scale(1)"
    document.querySelector('#main').style.transform = "scale(1)"
    document.querySelector('#footer').style.transform = "scale(1)"
}

const sub_menu_list = document.querySelectorAll('.mobile-sub-menu')
const span_dropdown = document.querySelectorAll(' .mobile-item span')

// Show and hide sub menu
let isShowSubMenu = false
function showSubMenu(pos) {
    if (isShowSubMenu) {
        span_dropdown[pos - 1].style.transform = "rotateZ(0deg)"
        sub_menu_list[pos - 1].style.animation = 'hideSubMenu ease-in-out 0.6s forwards'
        isShowSubMenu = false
    } else {
        sub_menu_list[pos - 1].style.animation = 'showSubMenu ease-in-out 0.6s'
        sub_menu_list[pos - 1].style.display = 'block'
        span_dropdown[pos - 1].style.transform = "rotateZ(90deg)"

        isShowSubMenu = true
    }
}