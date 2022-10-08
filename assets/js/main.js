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
        btn_search_click.style.animation = 'btn-search-animation-show ease-in-out 0.6s forwards'
        btn_search_click.style.visibility = 'visible'
    } else {
        btn_search_click.style.animation = 'btn-search-animation-hide ease-in-out 0.6s forwards'
        setTimeout(() => {
            btn_search_click.style.visibility = 'hidden'
        }, 600)

    }
})