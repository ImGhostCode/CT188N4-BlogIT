window.onscroll = function () {
    if (scrollY > 500) {
        document.getElementById('footer__btn-top').style.visibility = 'visible'
    } else {
        document.getElementById('footer__btn-top').style.visibility = 'hidden'
    }
}