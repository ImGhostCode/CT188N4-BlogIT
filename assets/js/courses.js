//Courses slideshow
let showIndex = 1
function nextCard(index) {
    showIndex += index
    showCard(showIndex)
}

function showCard(index) {
    const cards = document.querySelectorAll(".featured-courses-slide .card")
    if (index > cards.length) showIndex = 1
    if (index < 1) showIndex = cards.length

    cards.forEach(card => {
        card.style.display = 'none'
    })

    cards[showIndex - 1].style.display = 'block'
}

showCard(showIndex)



// Add course to cart
function addToCart(id) {
    if (cart.includes(id)) {
        alert("Da ton tai trong gio hang!")
        return
    }
    cart.push(id)
    window.localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload()
}
